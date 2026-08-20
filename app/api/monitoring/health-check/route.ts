import { NextRequest, NextResponse } from 'next/server';
import { getScraperHealth, setScraperHealth, addHealthLog } from '@/lib/services/healthStorage';

export const dynamic = 'force-dynamic';

const TEST_INPUTS: Record<string, { url: string; body: any; verify: (data: any) => boolean }> = {
  lesco: {
    url: '/api/bill-check/lesco',
    body: { referenceNo: '01112231234567' },
    verify: (data) => !!(data.consumerName && data.payableWithinDue && data.status !== 'CAPTCHA_REQUIRED'),
  },
  iesco: {
    url: '/api/bill-check/iesco',
    body: { referenceNo: '01112231234567' },
    verify: (data) => !!(data.consumerName && data.payableWithinDue && data.status !== 'CAPTCHA_REQUIRED'),
  },
  fesco: {
    url: '/api/bill-check/fesco',
    body: { referenceNo: '01112231234567' },
    verify: (data) => !!(data.consumerName && data.payableWithinDue && data.status !== 'CAPTCHA_REQUIRED'),
  },
  mepco: {
    url: '/api/bill-check/mepco',
    body: { referenceNo: '01112231234567' },
    verify: (data) => !!(data.consumerName && data.payableWithinDue && data.status !== 'CAPTCHA_REQUIRED'),
  },
  gepco: {
    url: '/api/bill-check/gepco',
    body: { referenceNo: '01112231234567' },
    verify: (data) => !!(data.consumerName && data.payableWithinDue && data.status !== 'CAPTCHA_REQUIRED'),
  },
  pesco: {
    url: '/api/bill-check/pesco',
    body: { referenceNo: '01112231234567' },
    verify: (data) => !!(data.consumerName && data.payableWithinDue && data.status !== 'CAPTCHA_REQUIRED'),
  },
  hesco: {
    url: '/api/bill-check/hesco',
    body: { referenceNo: '01112231234567' },
    verify: (data) => !!(data.consumerName && data.payableWithinDue && data.status !== 'CAPTCHA_REQUIRED'),
  },
  sepco: {
    url: '/api/bill-check/sepco',
    body: { referenceNo: '01112231234567' },
    verify: (data) => !!(data.consumerName && data.payableWithinDue && data.status !== 'CAPTCHA_REQUIRED'),
  },
  qesco: {
    url: '/api/bill-check/qesco',
    body: { referenceNo: '01112231234567' },
    verify: (data) => !!(data.consumerName && data.payableWithinDue && data.status !== 'CAPTCHA_REQUIRED'),
  },
  tesco: {
    url: '/api/bill-check/tesco',
    body: { referenceNo: '01112231234567' },
    verify: (data) => !!(data.consumerName && data.payableWithinDue && data.status !== 'CAPTCHA_REQUIRED'),
  },
  bisp: {
    url: '/api/checker/bisp',
    body: { cnic: '3520212345672' },
    verify: (data) => !!(data.success && data.status && data.allocatedAmount),
  },
  bise: {
    url: '/api/checker/bise',
    body: { rollNo: '524109', board: 'bise-lahore' },
    verify: (data) => !!(data.success && data.studentName && data.percentage),
  },
  traffic: {
    url: '/api/checker/traffic',
    body: { regNo: 'LE-26-1234', chassisNo: '1234567' },
    verify: (data) => !!(data.success && data.ownerName && data.violations),
  },
  mtmis: {
    url: '/api/checker/mtmis',
    body: { regNo: 'LE-26-1234' },
    verify: (data) => !!(data.success && data.ownerName && data.taxPaidUntil),
  },
  sehat: {
    url: '/api/checker/sehat',
    body: { cnic: '3520212345672' },
    verify: (data) => !!(data.success && data.eligibleStatus && data.familyHead),
  },
  pser: {
    url: '/api/checker/pser',
    body: { cnic: '3520212345672' },
    verify: (data) => !!(data.success && data.surveyDate && data.povertyScore),
  },
  nts: {
    url: '/api/checker/nts',
    body: { cnic: '3520212345672' },
    verify: (data) => !!(data.success && data.rollNumberSlipUrl),
  },
};

// Dispatch email alerts using Resend REST API (if key available) or fallback to stdout logs
async function sendAlertEmail(scraperId: string, consecutiveFailures: number, errorMsg: string) {
  const emailBody = `
    <h3>⚠️ Scraper Failure Alert: ${scraperId.toUpperCase()}</h3>
    <p>The health-check system detected that the ${scraperId.toUpperCase()} scraper has failed consecutive runs.</p>
    <ul>
      <li><strong>Scraper ID:</strong> ${scraperId}</li>
      <li><strong>Consecutive Failures:</strong> ${consecutiveFailures}</li>
      <li><strong>Error Reason:</strong> ${errorMsg}</li>
      <li><strong>Timestamp:</strong> ${new Date().toISOString()}</li>
    </ul>
    <p>Please audit the source website structure and update the parser logic if necessary.</p>
  `;

  console.warn(`[ALERT EMAIL DISPATCHED] to pakistaninfohub1@gmail.com - Scraper ${scraperId} failed ${consecutiveFailures} times consecutively: ${errorMsg}`);

  if (process.env.RESEND_API_KEY) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Pakistan Info Hub Alerts <alerts@pakistaninfohub.com>',
          to: ['pakistaninfohub1@gmail.com'],
          subject: `⚠️ Scraper Alert: ${scraperId.toUpperCase()} Failure`,
          html: emailBody,
        }),
      });
    } catch (err) {
      console.error('Failed to send email alert via Resend:', err);
    }
  }
}

export async function GET(request: NextRequest) {
  // Simple Authorization Token check
  const authHeader = request.headers.get('Authorization');
  const queryToken = request.nextUrl.searchParams.get('token');
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}` && queryToken !== cronSecret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const origin = request.nextUrl.origin;
  const currentHealth = await getScraperHealth();
  const results: any[] = [];

  for (const scraperId of Object.keys(TEST_INPUTS)) {
    const config = TEST_INPUTS[scraperId];
    const startTime = Date.now();
    let passed = false;
    let errorDetail = '';

    try {
      const response = await fetch(`${origin}${config.url}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config.body),
        signal: AbortSignal.timeout(6000), // 6-second timeout limit
      });

      const latencyMs = Date.now() - startTime;

      if (!response.ok) {
        throw new Error(`HTTP Error Status: ${response.status}`);
      }

      const data = await response.json();

      if (config.verify(data)) {
        passed = true;
      } else {
        throw new Error(`Invalid response structure: ${JSON.stringify(data).slice(0, 100)}`);
      }

      // Record successful check
      await addHealthLog({
        timestamp: new Date().toISOString(),
        scraperId,
        status: 'PASS',
        latencyMs,
      });

      const scraper = currentHealth.find((h) => h.id === scraperId);
      const isCurrentlyDegraded = scraper?.status === 'DEGRADED';

      // Reset failures on pass
      await setScraperHealth(scraperId, 'LIVE', 0);
      results.push({ scraperId, status: 'PASS', latencyMs });

      if (isCurrentlyDegraded) {
        console.log(`[MONITOR] Scraper ${scraperId} recovered successfully and is back LIVE.`);
      }
    } catch (err: any) {
      const latencyMs = Date.now() - startTime;
      passed = false;
      errorDetail = err.message || 'Unknown network timeout';

      // Record failure log
      await addHealthLog({
        timestamp: new Date().toISOString(),
        scraperId,
        status: 'FAIL',
        errorMessage: errorDetail,
        latencyMs,
      });

      // Fetch previous failures
      const scraper = currentHealth.find((h) => h.id === scraperId);
      const prevFailures = scraper?.consecutiveFailures || 0;
      const nextFailures = prevFailures + 1;

      let newStatus: 'LIVE' | 'DEGRADED' = 'LIVE';

      // If consecutive failures >= 4 (24 hours at 6-hourly interval), degrade to fallback
      if (nextFailures >= 4) {
        newStatus = 'DEGRADED';
      }

      await setScraperHealth(scraperId, newStatus, nextFailures);
      results.push({ scraperId, status: 'FAIL', error: errorDetail, consecutiveFailures: nextFailures });

      // Trigger Email alerts on exactly 2 consecutive failures to prevent alert fatigue
      if (nextFailures === 2) {
        await sendAlertEmail(scraperId, nextFailures, errorDetail);
      }
    }
  }

  return NextResponse.json({
    success: true,
    timestamp: new Date().toISOString(),
    results,
  });
}
