import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pakistan Passport Fee Structure 2026 (Normal, Urgent & e-Passport Rates)",
  description: "Official Pakistani Passport Fee 2026 table for 36-page, 72-page, 100-page booklets (5 and 10 years validity). Includes e-Passport and fast-track processing rates.",
  openGraph: {
    title: "Pakistan Passport Fee Structure 2026 (Normal, Urgent & e-Passport Rates)",
    description: "Official Pakistani Passport Fee 2026 table for 36-page, 72-page, 100-page booklets (5 and 10 years validity). Includes e-Passport and fast-track processing rates.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/passport/fee-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/passport/fee-2026',
  },
};

export default function Page() {
  const article = ARTICLES['fee-2026'];
  return (
    <div className="space-y-6">
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-500/30 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-sans shadow-sm">
        <div>
          <strong className="text-doc-ink dark:text-white font-serif block text-sm">Need Expedited Processing or Delivery Timelines?</strong>
          <span>If you need your passport urgently for impending travel, consult our dedicated guide on urgent processing backlogs, 5-day targets, and Fast Track delivery.</span>
        </div>
        <a
          href="/passport/urgent-passport-fee-and-time-in-pakistan-2026"
          className="shrink-0 px-4 py-2 rounded-xl bg-doc-ink dark:bg-slate-800 text-white font-bold text-xs hover:bg-doc-seal transition inline-flex items-center gap-1.5"
        >
          <span>Urgent Delivery Guide →</span>
        </a>
      </div>
      <ArticleLayout article={article} />
    </div>
  );
}

