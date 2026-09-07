import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lost Passport in Pakistan: Domestic Replacement Guide & Penalty Fees 2026",
  description: "How to replace a lost or stolen Pakistani passport inside Pakistan. Local police FIR requirements, DGIP domestic penalty tariffs (1st loss 2x, 2nd loss 4x fee), and RPO counter processing.",
  openGraph: {
    title: "Lost Passport in Pakistan: Domestic Replacement Guide & Penalty Fees 2026",
    description: "How to replace a lost or stolen Pakistani passport inside Pakistan. Local police FIR requirements, DGIP domestic penalty tariffs (1st loss 2x, 2nd loss 4x fee), and RPO counter processing.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/passport/lost-passport-application-fee',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/passport/lost-passport-application-fee',
  },
};

export default function Page() {
  const article = ARTICLES['lost-passport-application-fee'];
  return (
    <div className="space-y-6">
      <div className="p-4 sm:p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-500/30 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-sans shadow-sm">
        <div>
          <strong className="text-doc-ink dark:text-white font-serif block text-sm">Lost Your Passport Outside Pakistan?</strong>
          <span>If you are an overseas Pakistani, student, or tourist stranded abroad, view our consular guide on embassy reporting and Emergency Outpass (Travel Document) issuance.</span>
        </div>
        <a
          href="/passport/lost-passport-abroad-reissuance-process-2026"
          className="shrink-0 px-4 py-2 rounded-xl bg-doc-ink dark:bg-slate-800 text-white font-bold text-xs hover:bg-doc-seal transition inline-flex items-center gap-1.5"
        >
          <span>Lost Passport Abroad Guide →</span>
        </a>
      </div>
      <ArticleLayout article={article} />
    </div>
  );
}

