import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';
import { AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Income Tax Return Filing Guide Pakistan 2026 (Salaried & Business) | SRO 1495(I) Updated",
  description: "Complete tutorial for filing annual income tax returns in Pakistan for Tax Year 2026 on FBR Iris. Updated for SRO 1495(I)/2026 Second Schedule amendments (Part-II-ZE to ZH) and 30 September deadline.",
  openGraph: {
    title: "Income Tax Return Filing Guide Pakistan 2026 (Salaried & Business) | SRO 1495(I) Updated",
    description: "Complete tutorial for filing annual income tax returns in Pakistan 2026 on FBR Iris. Updated for SRO 1495(I)/2026 amendments and 30 September deadline.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/tax/income-tax-return-filing-guide',
  },
};

export default function Page() {
  const article = ARTICLES['income-tax-return-filing-guide'];
  return (
    <div className="space-y-6">
      {/* SRO 1495(I)/2026 Urgent Notice Callout Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border-2 border-amber-500/40 text-amber-950 dark:text-amber-200 font-sans shadow-sm">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-900 dark:text-amber-300 text-[10px] tracking-wide">
                FBR GAZETTE UPDATE — SEPTEMBER 2, 2026
              </span>
              <span className="font-bold text-amber-900 dark:text-amber-100">
                SRO 1495(I)/2026: Tax Year 2026 Return Form Revised
              </span>
            </div>
            <p className="text-slate-700 dark:text-slate-300">
              The Federal Board of Revenue (FBR) notified <strong>S.R.O. 1495(I)/2026</strong> on <strong>September 2, 2026</strong>, introducing statutory amendments to the Income Tax Rules 2002. Four new parts have been inserted into the Second Schedule following Part-II-ZD:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-1 font-mono text-[11px]">
              <div className="p-2.5 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-amber-500/30">
                <strong className="text-doc-ink dark:text-white block">Part-II-ZE</strong>
                <span className="text-slate-600 dark:text-slate-300">Salaried Individuals (Form 114)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-amber-500/30">
                <strong className="text-doc-ink dark:text-white block">Part-II-ZF</strong>
                <span className="text-slate-600 dark:text-slate-300">Association of Persons (AOP)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-amber-500/30">
                <strong className="text-doc-ink dark:text-white block">Part-II-ZG</strong>
                <span className="text-slate-600 dark:text-slate-300">Business Individuals</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-amber-500/30">
                <strong className="text-doc-ink dark:text-white block">Part-II-ZH</strong>
                <span className="text-slate-600 dark:text-slate-300">Transitional Disclosures</span>
              </div>
            </div>
            <p className="text-[11px] text-amber-900 dark:text-amber-200 font-semibold pt-0.5">
              ⚠️ <strong>Filing Notice</strong>: If your IRIS 2.0 portal displays updated sub-schedules or restructured fields under Declaration Form 114, these reflect this September 2026 gazette amendment. Do not be alarmed if minor field codes differ from older tutorial screenshots. Ensure submission before the <strong>30 September 2026</strong> statutory deadline to remain on the Active Taxpayer List (ATL).
            </p>
          </div>
        </div>
      </div>

      <ArticleLayout article={article} />
    </div>
  );
}
