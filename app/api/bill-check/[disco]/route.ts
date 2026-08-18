/**
 * /api/bill-check/[disco] — DISABLED IN PRODUCTION
 * ─────────────────────────────────────────────────────────────────────────
 * STATUS: Route exists but is effectively non-functional in production.
 *
 * ROOT CAUSE (confirmed 2026-08-18 via local-vs-prod testing):
 * Vercel's serverless functions run on AWS/datacenter IP ranges.
 * PITC (bill.pitc.com.pk) and most Pakistani government portals block
 * outbound HTTP requests from datacenter IPs as bot/scraper prevention.
 * The same fetch code works perfectly from a local/residential IP in <1s,
 * but consistently fails (timeout or connection refused) from Vercel.
 *
 * WHAT WE TRIED: ASP.NET __VIEWSTATE token extraction → POST with session
 * cookies in one continuous flow. The logic is correct; the blocking is
 * purely IP-reputation-based — not fixable through better request code.
 *
 * FUTURE FIX (if live fetch is required):
 * Route the fetch through a residential rotating proxy service, e.g.:
 * - Bright Data / Oxylabs residential proxy (~$50–200/month)
 * - A self-hosted Node.js proxy on a Pakistani ISP VPS
 * Insert the proxy agent into the fetch() or http.request() call.
 * Do NOT re-enable this route without a working proxy layer in place.
 *
 * CURRENT APPROACH: The UtilityBillChecker component now uses client-side
 * format validation + guided deep-links to the official portals instead.
 * ─────────────────────────────────────────────────────────────────────────
 */

import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

interface BillResult {
  found: boolean;
  provider: string;
  referenceNo: string;
  consumerName?: string;
  billMonth?: string;
  dueDate?: string;
  payableWithinDue?: string;
  payableAfterDue?: string;
  unitsConsumed?: string;
  paymentStatus?: string;
  rawBillUrl?: string;
  officialUrl?: string;
  message?: string;
}

const SUPPORTED_DISCOS: Record<string, string> = {
  lesco: 'lescobill',
  iesco: 'iescobill',
  fesco: 'fescobill',
  mepco: 'mepcobill',
  gepco: 'gepcobill',
  pesco: 'pescobill',
  hesco: 'hescobill',
  sepco: 'sepcobill',
  qesco: 'qescobill',
};

export async function POST(
  request: NextRequest,
  { params }: { params: { disco: string } }
) {
  const discoKey = (params.disco || 'lesco').toLowerCase();
  const pitcFolder = SUPPORTED_DISCOS[discoKey] || 'lescobill';
  const providerCode = discoKey.toUpperCase();

  try {
    const body = await request.json();
    const referenceNo = String(body.referenceNo || '').trim().replace(/[^0-9]/g, '');

    if (!referenceNo || referenceNo.length !== 14) {
      return NextResponse.json(
        { found: false, message: `Please provide a valid 14-digit ${providerCode} Reference Number.` },
        { status: 400 }
      );
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout for PITC gov servers

    const initUrl = `http://bill.pitc.com.pk/${pitcFolder}/`;
    const postUrl = `http://bill.pitc.com.pk/${pitcFolder}/general`;

    // Step 1: Fetch initial page to retrieve ASP.NET tokens and cookies
    const initRes = await fetch(initUrl, {
      headers: {
        'User-Agent': 'PakistanInfoHub-BillChecker/1.0 (+https://pakistaninfohub.com)',
        'Accept': 'text/html,application/xhtml+xml',
      },
      signal: controller.signal,
      cache: 'no-store',
    });

    if (!initRes.ok) {
      clearTimeout(timeoutId);
      return NextResponse.json({
        found: false,
        message: `The official ${providerCode} PITC bill server is temporarily unreachable. Please check directly at the official portal.`,
        officialUrl: initUrl,
      });
    }

    const setCookies = initRes.headers.get('set-cookie') || '';
    const cookies = setCookies
      .split(',')
      .map((c) => c.split(';')[0].trim())
      .filter(Boolean)
      .join('; ');

    const html = await initRes.text();

    const vsMatch = html.match(/id="__VIEWSTATE"\s+value="([^"]+)"/);
    const vsgMatch = html.match(/id="__VIEWSTATEGENERATOR"\s+value="([^"]+)"/);
    const evMatch = html.match(/id="__EVENTVALIDATION"\s+value="([^"]+)"/);
    const tokMatch = html.match(/name="__RequestVerificationToken"\s+type="hidden"\s+value="([^"]+)"/);

    const viewState = vsMatch ? vsMatch[1] : '';
    const viewStateGen = vsgMatch ? vsgMatch[1] : '';
    const eventValidation = evMatch ? evMatch[1] : '';
    const reqToken = tokMatch ? tokMatch[1] : '';

    const bodyParams = new URLSearchParams();
    bodyParams.append('__VIEWSTATE', viewState);
    bodyParams.append('__VIEWSTATEGENERATOR', viewStateGen);
    bodyParams.append('__EVENTVALIDATION', eventValidation);
    bodyParams.append('__RequestVerificationToken', reqToken);
    bodyParams.append('rbSearchByList', 'refno');
    bodyParams.append('searchTextBox', referenceNo);
    bodyParams.append('btnSearch', 'Search');

    // Step 2: Submit search
    const postRes = await fetch(postUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': cookies,
        'User-Agent': 'PakistanInfoHub-BillChecker/1.0 (+https://pakistaninfohub.com)',
        'Referer': initUrl,
      },
      body: bodyParams.toString(),
      signal: controller.signal,
      cache: 'no-store',
    });

    clearTimeout(timeoutId);

    if (!postRes.ok) {
      return NextResponse.json({
        found: false,
        message: `Unable to retrieve bill from ${providerCode} server. Please try again or visit official site.`,
        officialUrl: initUrl,
      });
    }

    const billHtml = await postRes.text();

    // Check if Not Found
    if (
      billHtml.includes('Bill Not Found!') ||
      billHtml.includes('bill-not-found') ||
      billHtml.includes('No Record Found') ||
      (billHtml.includes('lblSnapError') && billHtml.includes('Error'))
    ) {
      return NextResponse.json({
        found: false,
        provider: providerCode,
        referenceNo,
        message: `No bill found for reference number ${referenceNo}. Please check your electricity bill and ensure all 14 digits are correct.`,
        officialUrl: initUrl,
      });
    }

    // Parse extracted details from bill HTML
    const nameMatch = billHtml.match(/NAME\s*&amp;?\s*ADDRESS[^<]*<\/td>\s*<td[^>]*>([^<]+)/i) ||
                      billHtml.match(/Consumer\s*Name[^<]*<\/td>\s*<td[^>]*>([^<]+)/i);

    const monthMatch = billHtml.match(/BILL\s*MONTH[^<]*<\/td>\s*<td[^>]*>([^<]+)/i) ||
                       billHtml.match(/([A-Z]{3,9}\s+202[0-9])/i);

    const dueMatch = billHtml.match(/DUE\s*DATE[^<]*<\/td>\s*<td[^>]*>([^<]+)/i) ||
                     billHtml.match(/(\d{2}-[A-Z]{3}-\d{2,4})/i);

    const payableMatch = billHtml.match(/PAYABLE\s*WITHIN\s*DUE\s*DATE[^<]*<\/td>\s*<td[^>]*>([^<]+)/i) ||
                         billHtml.match(/AMOUNT\s*PAYABLE[^<]*<\/td>\s*<td[^>]*>([^<]+)/i);

    const payableAfterMatch = billHtml.match(/PAYABLE\s*AFTER\s*DUE\s*DATE[^<]*<\/td>\s*<td[^>]*>([^<]+)/i);

    const unitsMatch = billHtml.match(/UNITS\s*CONSUMED[^<]*<\/td>\s*<td[^>]*>([^<]+)/i) ||
                       billHtml.match(/TOTAL\s*UNITS[^<]*<\/td>\s*<td[^>]*>([^<]+)/i);

    const result: BillResult = {
      found: true,
      provider: providerCode,
      referenceNo,
      consumerName: nameMatch ? nameMatch[1].trim() : 'Registered Consumer',
      billMonth: monthMatch ? monthMatch[1].trim() : 'Current Month',
      dueDate: dueMatch ? dueMatch[1].trim() : 'See Official Bill',
      payableWithinDue: payableMatch ? payableMatch[1].trim().replace(/[^0-9,.]/g, '') : undefined,
      payableAfterDue: payableAfterMatch ? payableAfterMatch[1].trim().replace(/[^0-9,.]/g, '') : undefined,
      unitsConsumed: unitsMatch ? unitsMatch[1].trim() : undefined,
      officialUrl: initUrl,
    };

    return NextResponse.json(result);
  } catch (error: any) {
    const pitcUrl = `http://bill.pitc.com.pk/${pitcFolder}/`;
    // DIAGNOSTIC LOGGING — reveals real error from serverless function logs
    console.error(`[BillCheck/${providerCode}] FETCH FAILED`, {
      name: error?.name,
      message: error?.message,
      code: error?.code,
      cause: error?.cause ? String(error.cause) : undefined,
      stack: error?.stack?.split('\n').slice(0, 5).join(' | '),
    });
    if (error.name === 'AbortError') {
      return NextResponse.json(
        {
          found: false,
          message: `Official ${providerCode} server timed out (over 15 seconds). PITC servers experience heavy load during peak hours. Please check directly at the official portal.`,
          officialUrl: pitcUrl,
        },
        { status: 504 }
      );
    }
    return NextResponse.json(
      {
        found: false,
        message: `Could not connect to ${providerCode} bill server. Please try again or use the official portal.`,
        officialUrl: pitcUrl,
        _debug: { errorName: error?.name, errorMessage: error?.message, errorCode: error?.code },
      },
      { status: 500 }
    );
  }
}
