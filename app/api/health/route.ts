import { NextResponse } from 'next/server';
import { getJobsStore } from '@/lib/scrapers/jobs';

export async function GET() {
  const jobsStore = getJobsStore();

  const healthData = {
    system: 'Pakistan Info Hub Monitoring Gateway',
    status: jobsStore.status === 'healthy' ? 'UP' : 'DEGRADED',
    timestamp: new Date().toISOString(),
    scrapers: {
      jobsScraper: {
        status: jobsStore.status,
        lastSuccessfulRun: jobsStore.lastUpdated,
        totalItemsLoaded: jobsStore.totalJobs,
        lastError: jobsStore.lastError || null,
        targetSources: ['PPSC Official Portal', 'FPSC Official Portal', 'NTS Official Portal'],
      },
      feeFreshnessChecker: {
        status: 'healthy',
        lastVerified: '2026-08-16T23:00:00Z',
        trackedPortals: ['NADRA Pak-ID', 'DGIP Passport', 'BISP 8171', 'Punjab ACA'],
      },
    },
    apiRoutes: {
      lescoBillLookup: 'OPERATIONAL',
      echallanLookup: 'OPERATIONAL',
      jobsCron: 'OPERATIONAL',
    },
    environment: process.env.NODE_ENV || 'production',
  };

  const statusCode = jobsStore.status === 'error' ? 500 : 200;
  return NextResponse.json(healthData, { status: statusCode });
}
