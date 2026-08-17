import { NextResponse } from 'next/server';
import { runJobsScraper, getJobsStore } from '@/lib/scrapers/jobs';

export async function GET(req: Request) {
  try {
    const result = await runJobsScraper();
    const store = getJobsStore();

    return NextResponse.json({
      timestamp: new Date().toISOString(),
      status: store.status,
      message: result.message,
      totalJobs: store.totalJobs,
      lastError: store.lastError || null,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: 'Failed to run jobs scraper cron job',
        details: error.message,
      },
      { status: 500 }
    );
  }
}
