/**
 * /api/bill-check/lesco — DISABLED IN PRODUCTION
 * See /api/bill-check/[disco]/route.ts for full explanation.
 * TL;DR: PITC blocks Vercel/datacenter IPs. Works locally, fails in prod.
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const referenceNo = String(body.referenceNo || '').trim().replace(/[^0-9]/g, '');

    if (!referenceNo || referenceNo.length !== 14) {
      return NextResponse.json(
        { found: false, message: 'Please provide a valid 14-digit LESCO Reference Number.' },
        { status: 400 }
      );
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 9000); // 9s timeout

    // Step 1: Fetch initial page to retrieve ASP.NET tokens and cookies
    const initRes = await fetch('http://bill.pitc.com.pk/lescobill/', {
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
        message: 'The official LESCO/PITC bill server is temporarily unreachable. Please check directly at the official portal.',
        officialUrl: 'http://bill.pitc.com.pk/lescobill/',
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

    const params = new URLSearchParams();
    params.append('__VIEWSTATE', viewState);
    params.append('__VIEWSTATEGENERATOR', viewStateGen);
    params.append('__EVENTVALIDATION', eventValidation);
    params.append('__RequestVerificationToken', reqToken);
    params.append('rbSearchByList', 'refno');
    params.append('searchTextBox', referenceNo);
    params.append('btnSearch', 'Search');

    // Step 2: Submit search
    const postRes = await fetch('http://bill.pitc.com.pk/lescobill/general', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': cookies,
        'User-Agent': 'PakistanInfoHub-BillChecker/1.0 (+https://pakistaninfohub.com)',
        'Referer': 'http://bill.pitc.com.pk/lescobill/',
      },
      body: params.toString(),
      signal: controller.signal,
      cache: 'no-store',
    });

    clearTimeout(timeoutId);

    if (!postRes.ok) {
      return NextResponse.json({
        found: false,
        message: 'Unable to retrieve bill from LESCO server. Please try again or visit official site.',
        officialUrl: 'http://bill.pitc.com.pk/lescobill/',
      });
    }

    const billHtml = await postRes.text();

    // Check if Not Found
    if (
      billHtml.includes('Bill Not Found!') ||
      billHtml.includes('bill-not-found') ||
      billHtml.includes('No Record Found') ||
      billHtml.includes('lblSnapError') && billHtml.includes('Error')
    ) {
      return NextResponse.json({
        found: false,
        provider: 'LESCO',
        referenceNo,
        message: `No bill found for reference number ${referenceNo}. Please check your electricity bill and ensure all 14 digits are correct.`,
        officialUrl: 'http://bill.pitc.com.pk/lescobill/',
      });
    }

    // Parse extracted details from bill HTML
    // Looking for table data or text patterns
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
      provider: 'LESCO',
      referenceNo,
      consumerName: nameMatch ? nameMatch[1].trim() : 'Registered Consumer',
      billMonth: monthMatch ? monthMatch[1].trim() : 'Current Month',
      dueDate: dueMatch ? dueMatch[1].trim() : 'See Official Bill',
      payableWithinDue: payableMatch ? payableMatch[1].trim().replace(/[^0-9,.]/g, '') : undefined,
      payableAfterDue: payableAfterMatch ? payableAfterMatch[1].trim().replace(/[^0-9,.]/g, '') : undefined,
      unitsConsumed: unitsMatch ? unitsMatch[1].trim() : undefined,
      officialUrl: 'http://bill.pitc.com.pk/lescobill/',
    };

    return NextResponse.json(result);
  } catch (error: any) {
    if (error.name === 'AbortError') {
      return NextResponse.json(
        {
          found: false,
          message: 'Official LESCO server timed out (over 9 seconds). PITC servers experience heavy load during peak hours. Please check directly.',
          officialUrl: 'http://bill.pitc.com.pk/lescobill/',
        },
        { status: 504 }
      );
    }
    return NextResponse.json(
      {
        found: false,
        message: 'Could not connect to LESCO bill server. Please try again or use the official portal.',
        officialUrl: 'http://bill.pitc.com.pk/lescobill/',
      },
      { status: 500 }
    );
  }
}
