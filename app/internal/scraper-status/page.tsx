import React from 'react';
import type { Metadata } from 'next';
import { getScraperHealth, getHealthLogs } from '@/lib/services/healthStorage';
import { ScraperStatusClient } from '@/components/ScraperStatusClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Internal Scraper Status Monitor | Pakistan Info Hub',
  robots: 'noindex, nofollow',
};

const SECRET_KEY = 'PIH_MONITOR_2026';

export default async function Page({
  searchParams,
}: {
  searchParams: { secret?: string };
}) {
  const secret = searchParams.secret;

  if (secret !== SECRET_KEY) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400 font-sans p-6 text-center">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">404 - Page Not Found</h1>
          <p className="text-sm">The requested URL was not found on this server.</p>
        </div>
      </div>
    );
  }

  const health = await getScraperHealth();
  const logs = await getHealthLogs();

  return <ScraperStatusClient health={health} logs={logs} />;
}
