import { NextRequest, NextResponse } from 'next/server';
import { getScraperHealth } from '@/lib/services/healthStorage';

export const dynamic = 'force-dynamic';

export async function POST(
  request: NextRequest,
  { params }: { params: { type: string } }
) {
  const type = (params.type || '').toLowerCase();

  try {
    const body = await request.json();

    // CHECK HEALTH DEGRADATION
    const healthStatusList = await getScraperHealth();
    const currentHealth = healthStatusList.find((h) => h.id === type);
    if (currentHealth && currentHealth.status === 'DEGRADED') {
      let officialUrl = 'https://www.pakistaninfohub.com/';
      if (type === 'bisp') officialUrl = 'https://8171.bisp.gov.pk/';
      if (type === 'bise') officialUrl = 'https://www.biselahore.com/';
      if (type === 'traffic') officialUrl = 'https://echallan.psca.gop.pk/';
      if (type === 'mtmis') officialUrl = 'https://excise.punjab.gov.pk/';
      if (type === 'sehat') officialUrl = 'https://www.pmhealthprogram.gov.pk/';
      if (type === 'pser') officialUrl = 'https://pser.punjab.gov.pk/';
      if (type === 'nts') officialUrl = 'https://www.nts.org.pk/';

      return NextResponse.json({
        success: false,
        status: 'DEGRADED',
        officialUrl,
        message: `Direct query is currently undergoing maintenance. Please complete verification directly on the official portal.`,
      });
    }

    // Introduce a short simulated latency to give a premium feel with loading states
    await new Promise((resolve) => setTimeout(resolve, 800));

    switch (type) {
      case 'bisp': {
        const cnic = String(body.cnic || '').trim().replace(/[^0-9]/g, '');
        if (cnic.length !== 13) {
          return NextResponse.json({ success: false, message: 'Invalid 13-digit CNIC.' }, { status: 400 });
        }

        return NextResponse.json({
          success: true,
          cnic,
          status: 'DEGRADED',
          officialUrl: 'https://8171.bisp.gov.pk/',
          message: 'Direct online query is currently unavailable on cloud servers due to security/CAPTCHA restrictions. Please click the button below to check your eligibility on the official 8171 BISP portal.',
        });
      }

      case 'bise': {
        const rollNo = String(body.rollNo || '').trim().replace(/[^0-9]/g, '');
        const board = String(body.board || 'bise-lahore').toLowerCase();
        if (!rollNo || rollNo.length < 5 || rollNo.length > 8) {
          return NextResponse.json({ success: false, message: 'Roll number must be 5 to 8 digits.' }, { status: 400 });
        }

        return NextResponse.json({
          success: true,
          rollNo,
          board: board.toUpperCase(),
          status: 'DEGRADED',
          officialUrl: 'https://www.biselahore.com/',
          message: 'Direct online gazette lookup is currently unavailable on cloud servers due to official portal restrictions. Please verify directly on the official board portal.',
        });
      }

      case 'traffic':
      case 'echallan': {
        const vehicleNo = String(body.vehicleNo || '').trim().toUpperCase();
        if (!vehicleNo) {
          return NextResponse.json({ success: false, message: 'Vehicle Registration Number is required.' }, { status: 400 });
        }

        return NextResponse.json({
          success: true,
          vehicleRegistration: vehicleNo,
          status: 'DEGRADED',
          officialUrl: 'https://echallan.psca.gop.pk/',
          message: 'Direct online E-Challan query is currently unavailable on cloud servers. Please check your violations directly on the official Punjab Safe Cities Authority (PSCA) portal.',
        });
      }

      case 'mtmis': {
        const vehicleNo = String(body.vehicleNo || '').trim().toUpperCase();
        if (!vehicleNo) {
          return NextResponse.json({ success: false, message: 'Vehicle Registration Number is required.' }, { status: 400 });
        }

        return NextResponse.json({
          success: true,
          vehicleRegistration: vehicleNo,
          status: 'DEGRADED',
          officialUrl: 'https://excise.punjab.gov.pk/',
          message: 'Direct MTMIS vehicle query is currently unavailable on cloud servers due to source server restrictions. Please verify directly on the official Excise Department portal.',
        });
      }

      case 'sehat': {
        const cnic = String(body.cnic || '').trim().replace(/[^0-9]/g, '');
        if (cnic.length !== 13) {
          return NextResponse.json({ success: false, message: 'Invalid 13-digit CNIC.' }, { status: 400 });
        }

        return NextResponse.json({
          success: true,
          cnic,
          status: 'DEGRADED',
          officialUrl: 'https://www.pmhealthprogram.gov.pk/',
          message: 'Direct online Sehat Card eligibility check is currently offline. Please send your CNIC via SMS to 8500 or check directly on the official portal.',
        });
      }

      case 'pser': {
        const cnic = String(body.cnic || '').trim().replace(/[^0-9]/g, '');
        if (cnic.length !== 13) {
          return NextResponse.json({ success: false, message: 'Invalid 13-digit CNIC.' }, { status: 400 });
        }

        return NextResponse.json({
          success: true,
          cnic,
          status: 'DEGRADED',
          officialUrl: 'https://pser.punjab.gov.pk/',
          message: 'Direct PSER registry query is currently offline on cloud servers. Please check your registration status directly on the official PSER portal.',
        });
      }

      case 'nts': {
        const cnic = String(body.cnic || body.rollNo || '').trim().replace(/[^0-9]/g, '');
        if (cnic.length < 5) {
          return NextResponse.json({ success: false, message: 'Enter a valid CNIC or Roll Number.' }, { status: 400 });
        }

        return NextResponse.json({
          success: true,
          identifier: cnic,
          status: 'DEGRADED',
          officialUrl: 'https://www.nts.org.pk/',
          message: 'Direct NTS Roll Number/Result lookup is currently unavailable on cloud servers due to security controls. Please query directly on the official NTS website.',
        });
      }

      default: {
        return NextResponse.json({ success: false, message: `Unknown checker type: ${type}` }, { status: 400 });
      }
    }
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: 'Server error processing lookup request.' },
      { status: 500 }
    );
  }
}
