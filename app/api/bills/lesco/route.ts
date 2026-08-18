/**
 * /api/bills/lesco — DISABLED IN PRODUCTION
 * ─────────────────────────────────────────────────────────────────────────────
 * STATUS: Route is kept for backward compatibility but live server scraping is disabled.
 *
 * ROOT CAUSE: PITC & government billing servers block requests originating from
 * cloud-datacenter IP ranges (Vercel/AWS). See NOTES.md for details.
 *
 * All bill queries are handled client-side via format validation + guided direct
 * links to the official PITC portal at http://bill.pitc.com.pk/lescobill/
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { NextResponse } from 'next/server';
import { applyRateLimit } from '@/lib/utils/rate-limit';

export async function GET(req: Request) {
  // 1. Apply IP Rate Limiting
  const rateLimit = applyRateLimit(req);
  if (rateLimit.isRateLimited) {
    return rateLimit.response;
  }

  const { searchParams } = new URL(req.url);
  const ref = searchParams.get('ref') || searchParams.get('referenceNumber');

  if (!ref) {
    return NextResponse.json(
      { error: 'Reference number is required. Please provide a 14-digit LESCO consumer reference number.' },
      { status: 400 }
    );
  }

  const cleanRef = ref.trim().replace(/\s+/g, '');

  if (!/^\d{14}$/.test(cleanRef)) {
    return NextResponse.json(
      {
        error: 'Invalid reference number format. LESCO reference numbers must be exactly 14 numeric digits.',
        example: '08111234567890',
      },
      { status: 400 }
    );
  }

  // Return honest direct official link without fake/simulated data
  const officialPortalUrl = 'http://bill.pitc.com.pk/lescobill/';
  
  return NextResponse.json({
    success: true,
    provider: 'LESCO Electricity (Official PITC Portal)',
    referenceNumber: cleanRef,
    status: 'DIRECT_PORTAL_ACCESS',
    officialSourceUrl: officialPortalUrl,
    instructions: 'Live server fetching is disabled due to cloud IP security policies. Please use the official PITC portal link to view or print your latest bill.',
  });
}
