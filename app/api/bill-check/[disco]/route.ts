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
    const timeoutId = setTimeout(() => controller.abort(), 9000); // 9s timeout

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
    if (error.name === 'AbortError') {
      return NextResponse.json(
        {
          found: false,
          message: `Official ${providerCode} server timed out (over 9 seconds). PITC servers experience heavy load during peak hours. Please check directly at the official portal.`,
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
      },
      { status: 500 }
    );
  }
}
