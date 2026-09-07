import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NADRA CNIC Renewal Online Guide 2026: Mobile App & Portal Process",
  description: "Step-by-step online CNIC renewal guide using the Pak-ID app and web portal. Learn fingerprint scanning tips, photo specs, fee rates (PKR 750), and home delivery timelines.",
  openGraph: {
    title: "NADRA CNIC Renewal Online Guide 2026: Mobile App & Portal Process",
    description: "Step-by-step online CNIC renewal guide using the Pak-ID app and web portal. Learn fingerprint scanning tips, photo specs, fee rates (PKR 750), and home delivery timelines.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/nadra/card-renewal-online',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/nadra/card-renewal-online',
  },
};

export default function Page() {
  const article = ARTICLES['card-renewal-online'];
  return (
    <div className="space-y-6">
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-500/30 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-sans shadow-sm">
        <div>
          <strong className="text-doc-ink dark:text-white font-serif block text-sm">Lost Your Card or Was It Stolen?</strong>
          <span>This guide is specifically for routine renewals of expired cards. If your CNIC was lost, stolen, or misplaced, view our guide on police reporting and duplicate reprints.</span>
        </div>
        <a
          href="/nadra/lost-stolen-cnic-replacement-2026"
          className="shrink-0 px-4 py-2 rounded-xl bg-doc-ink dark:bg-slate-800 text-white font-bold text-xs hover:bg-doc-seal transition inline-flex items-center gap-1.5"
        >
          <span>Lost CNIC Replacement Guide →</span>
        </a>
      </div>
      <ArticleLayout article={article} />
    </div>
  );
}

