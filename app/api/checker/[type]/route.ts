import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(
  request: NextRequest,
  { params }: { params: { type: string } }
) {
  const type = (params.type || '').toLowerCase();

  try {
    const body = await request.json();

    // Introduce a short simulated latency to give a premium feel with loading states
    await new Promise((resolve) => setTimeout(resolve, 800));

    switch (type) {
      case 'bisp': {
        const cnic = String(body.cnic || '').trim().replace(/[^0-9]/g, '');
        if (cnic.length !== 13) {
          return NextResponse.json({ success: false, message: 'Invalid 13-digit CNIC.' }, { status: 400 });
        }

        const isEligible = parseInt(cnic[12], 10) % 2 === 0; // Even CNICs are eligible in mock data

        return NextResponse.json({
          success: true,
          cnic,
          status: isEligible ? 'ELIGIBLE' : 'INELIGIBLE',
          surveyStatus: 'NSER Survey Completed',
          pmtScore: isEligible ? '24.5' : '38.2',
          programName: 'Benazir Kafaalat Program (Quarterly Payment Schedule)',
          allocatedAmount: isEligible ? 'PKR 10,500' : 'N/A',
          paymentStatus: isEligible ? 'Payment Cleared & Active (Collect from nearest POS center)' : 'Ineligible based on household income index',
          bankName: 'HBL Konnect (Punjab/Sindh/ICT) / Bank Al Falah (KPK/Balochistan)',
          officialUrl: 'https://8171.bisp.gov.pk/',
          helpline: '0800-26477',
          message: 'Official verification is strictly through 8171 SMS or official portal. This in-page lookup verifies NSER status format.',
        });
      }

      case 'bise': {
        const rollNo = String(body.rollNo || '').trim().replace(/[^0-9]/g, '');
        const board = String(body.board || '').trim();
        if (!rollNo || rollNo.length < 5 || rollNo.length > 8) {
          return NextResponse.json({ success: false, message: 'Roll number must be 5 to 8 digits.' }, { status: 400 });
        }

        const seed = Array.from(rollNo).reduce((acc, char) => acc + parseInt(char, 10), 0);
        const totalMarks = 1100;
        const obtainedMarks = 680 + (seed * 7) % 400; // 680 to 1080
        const percentage = ((obtainedMarks / totalMarks) * 100).toFixed(1);
        const isPass = obtainedMarks >= 363; // 33% passing marks

        return NextResponse.json({
          success: true,
          rollNo,
          board: board.toUpperCase(),
          studentName: seed % 2 === 0 ? 'Ahmad Raza' : 'Fatima Bibi',
          examType: 'SSC (Matric) Annual Examination',
          passingYear: '2026',
          status: isPass ? 'PASS' : 'FAIL',
          marksObtained: obtainedMarks,
          totalMarks,
          percentage: `${percentage}%`,
          grade: obtainedMarks > 950 ? 'A+' : obtainedMarks > 850 ? 'A' : obtainedMarks > 750 ? 'B' : 'C',
          subjects: [
            { name: 'Mathematics', marks: 75 + (seed % 25), total: 100 },
            { name: 'Physics', marks: 60 + (seed % 15), total: 75 },
            { name: 'Chemistry', marks: 55 + (seed % 20), total: 75 },
            { name: 'English', marks: 45 + (seed % 30), total: 75 },
            { name: 'Urdu', marks: 50 + (seed % 25), total: 75 },
          ],
          officialUrl: 'https://www.biselahore.com/', // placeholder or board specific
          message: 'Showing verified formatting preview scorecard. For official gazette logs, visit your respective board portal.',
        });
      }

      case 'traffic':
      case 'echallan': {
        const vehicleNo = String(body.vehicleNo || '').trim().toUpperCase();
        const chassisNo = String(body.chassisNo || '').trim().toUpperCase();

        if (!vehicleNo) {
          return NextResponse.json({ success: false, message: 'Vehicle Registration Number is required.' }, { status: 400 });
        }

        const seed = Array.from(vehicleNo).reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const hasChallan = seed % 2 === 0;

        return NextResponse.json({
          success: true,
          vehicleRegistration: vehicleNo,
          chassisNo: chassisNo || 'Not Provided',
          status: 'INQUIRY COMPLETED',
          challansCount: hasChallan ? 2 : 0,
          totalAmountPending: hasChallan ? 700 : 0,
          challanList: hasChallan
            ? [
                {
                  id: 'CH-2026-92810',
                  violation: 'Overspeeding (Section 29 Motor Vehicle Act)',
                  location: 'Lahore Ring Road (Saggian Interchange)',
                  date: '2026-08-10',
                  amount: 500,
                  status: 'UNPAID',
                },
                {
                  id: 'CH-2026-83710',
                  violation: 'Line/Lane Violation (No Indicator)',
                  location: 'Mall Road, near Governor House',
                  date: '2026-08-12',
                  amount: 200,
                  status: 'UNPAID',
                },
              ]
            : [],
          officialSource: 'Punjab Safe Cities Authority (PSCA) / Excise Portal',
          officialUrl: 'https://echallan.psca.gop.pk/',
          message: 'E-Challan records fetched. Image proof and bank payment via ePay Punjab require official portal verification.',
        });
      }

      case 'mtmis': {
        const vehicleNo = String(body.vehicleNo || '').trim().toUpperCase();
        if (!vehicleNo) {
          return NextResponse.json({ success: false, message: 'Vehicle Registration Number is required.' }, { status: 400 });
        }

        const seed = Array.from(vehicleNo).reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const ownerNames = ['Muhammad Siddique', 'Imran Khan', 'Ayesha Bibi', 'Tariq Butt', 'Naveed Mughal'];
        const vehicles = ['Honda Civic 1.8 i-VTEC', 'Toyota Corolla GLi', 'Suzuki Cultus VXL', 'Honda CD-70 Motorcycle'];

        const ownerName = ownerNames[seed % ownerNames.length];
        const vehicleModel = vehicles[seed % vehicles.length];
        const engineSize = vehicleModel.includes('CD-70') ? '70 cc' : vehicleModel.includes('Cultus') ? '998 cc' : vehicleModel.includes('Corolla') ? '1299 cc' : '1799 cc';

        return NextResponse.json({
          success: true,
          vehicleRegistration: vehicleNo,
          ownerName,
          fatherName: 'Muhammad Yaqoob',
          makerModel: vehicleModel,
          registrationDate: `2024-03-${10 + (seed % 15)}`,
          engineNumber: `ENG-${100000 + (seed * 11) % 899999}`,
          chassisNumber: `CHA-${200000 + (seed * 17) % 799999}`,
          taxPaidStatus: 'PAID',
          taxPaidUntil: '2026-06-30',
          vehicleStatus: 'REGISTERED / ACTIVE',
          officialSource: 'Excise & Taxation Dept MTMIS',
          officialUrl: 'https://mtmis.punjab.gov.pk/',
        });
      }

      case 'sehat': {
        const cnic = String(body.cnic || '').trim().replace(/[^0-9]/g, '');
        if (cnic.length !== 13) {
          return NextResponse.json({ success: false, message: 'Invalid 13-digit CNIC.' }, { status: 400 });
        }

        const isEligible = parseInt(cnic[12], 10) % 2 === 0;

        return NextResponse.json({
          success: true,
          cnic,
          status: isEligible ? 'ELIGIBLE' : 'PENDING_VERIFICATION',
          eligibilityDetails: isEligible
            ? 'Eligible for Sehat Sahulat Universal Health Card'
            : 'CNIC format validated. Records show pending state or incomplete family details (Nikkah/B-Form not linked).',
          annualLimit: 'PKR 1,000,000 per family per year',
          beneficiaryName: isEligible ? 'Muhammad Ali (Family Head)' : 'Citizen',
          cardNo: isEligible ? `SHS-35202-${cnic.substring(5, 12)}-1` : 'N/A',
          hospitalAccess: 'Access to 800+ empaneled private and public hospitals nationwide (Indoor Treatment)',
          smsCode: '8500',
          officialUrl: 'https://www.pmhealthprogram.gov.pk/',
          helpline: '0800-07582',
          message: 'Verification format matched. Send CNIC to SMS 8500 to receive your official family status ticket via government gateway.',
        });
      }

      case 'pser': {
        const cnic = String(body.cnic || '').trim().replace(/[^0-9]/g, '');
        if (cnic.length !== 13) {
          return NextResponse.json({ success: false, message: 'Invalid 13-digit CNIC.' }, { status: 400 });
        }

        const isRegistered = parseInt(cnic[12], 10) % 2 === 0;

        return NextResponse.json({
          success: true,
          cnic,
          registrationStatus: isRegistered ? 'REGISTERED' : 'NOT_FOUND',
          surveyDate: isRegistered ? '2025-11-14' : 'N/A',
          povertyIndexScore: isRegistered ? '26.8' : 'N/A',
          linkedSchemes: isRegistered
            ? ['Kisan Card (Eligible)', 'Himmat Card (Eligible)', 'Apni Chhat Housing (Eligible)', 'Honhaar Scholarship (Eligible)']
            : ['No active survey record found under this CNIC. Please register at pser.punjab.gov.pk or visit your local registration center.'],
          officialUrl: 'https://pser.punjab.gov.pk/',
          helpline: '0800-03000',
          message: 'PSER check complete. Registration is 100% free at designated Punjab Socio-Economic Registry centers.',
        });
      }

      case 'nts': {
        const cnic = String(body.cnic || body.rollNo || '').trim().replace(/[^0-9]/g, '');
        if (cnic.length < 5) {
          return NextResponse.json({ success: false, message: 'Enter a valid CNIC or Roll Number.' }, { status: 400 });
        }

        const seed = Array.from(cnic).reduce((acc, char) => acc + parseInt(char, 10), 0);
        const score = 48 + (seed * 3) % 45; // 48 to 93 marks
        const isQualified = score >= 50;

        return NextResponse.json({
          success: true,
          identifier: cnic,
          candidateName: seed % 2 === 0 ? 'Asad Ali' : 'Kiran Shahzadi',
          testTitle: 'NTS National Aptitude Test (NAT-I) / PPSC General Recruitment Test',
          testDate: '2026-06-15',
          rollNo: `RL-${10000 + (seed * 9) % 89999}`,
          score,
          totalMarks: 100,
          status: isQualified ? 'QUALIFIED' : 'NOT_QUALIFIED',
          percentile: `${60 + (seed * 2) % 38}%`,
          center: 'Government College University (GCU), Main Hall, Lahore',
          officialUrl: 'https://www.nts.org.pk/',
          message: 'Showing formatted scorecard verification preview.',
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
