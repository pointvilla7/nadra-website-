import { NextResponse } from 'next/server';
import { applyRateLimit } from '@/lib/utils/rate-limit';

export async function GET(req: Request) {
  // 1. Apply IP Rate Limiting
  const rateLimit = applyRateLimit(req);
  if (rateLimit.isRateLimited) {
    return rateLimit.response;
  }

  const { searchParams } = new URL(req.url);
  const vehicleReg = searchParams.get('vehicleReg') || searchParams.get('v');
  const chassisNo = searchParams.get('chassisNo') || searchParams.get('c');

  if (!vehicleReg) {
    return NextResponse.json(
      { error: 'Vehicle Registration Number is required (e.g., LHR-2024-1234).' },
      { status: 400 }
    );
  }

  const cleanReg = vehicleReg.trim().toUpperCase();
  const cleanChassis = chassisNo ? chassisNo.trim().toUpperCase() : '';

  try {
    const pscaTargetUrl = `https://echallan.psca.gop.pk/`;

    return NextResponse.json({
      success: true,
      system: 'Punjab Safe Cities Authority (PSCA) E-Challan',
      vehicleRegistration: cleanReg,
      chassisNumberLast6: cleanChassis || 'Not Provided',
      status: 'VERIFICATION READY',
      officialSourceUrl: pscaTargetUrl,
      instruction: 'Click official PSCA portal link below to view detailed image proof and pay online via ePay Punjab.',
      paymentOptions: ['ePay Punjab App', 'JazzCash', 'Easypaisa', '1Link Internet Banking'],
      fetchedAt: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('PSCA E-Challan API route error:', error);
    return NextResponse.json(
      {
        error: 'Unable to reach PSCA server. Please try again or visit echallan.psca.gop.pk directly.',
        details: error.message,
      },
      { status: 502 }
    );
  }
}
