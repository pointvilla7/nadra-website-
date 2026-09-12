import type { Metadata } from 'next';
import { Suspense } from 'react';
import AlertsManageClient from './AlertsManageClient';

export const metadata: Metadata = {
  title: "Manage Emergency & Civic Alerts | Pakistan Info Hub",
  description: "Subscribe and configure your notification preferences for seasonal flood warnings, smog advisories, and emergency alerts across Pakistan.",
  openGraph: {
    title: "Manage Emergency & Civic Alerts | Pakistan Info Hub",
    description: "Subscribe and configure your notification preferences for seasonal flood warnings, smog advisories, and emergency alerts across Pakistan.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: "https://www.pakistaninfohub.com/alerts/manage",
  },
  alternates: {
    canonical: "https://www.pakistaninfohub.com/alerts/manage",
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="max-w-4xl mx-auto py-12 text-center text-slate-500">Loading...</div>}>
      <AlertsManageClient />
    </Suspense>
  );
}
