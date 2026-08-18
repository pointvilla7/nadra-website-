import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SchemaInjector } from '@/components/SchemaInjector';
import { NicopFeeCalculator } from '@/components/NicopFeeCalculator';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { Globe2, ShieldCheck, Clock, FileText, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NADRA NICOP Fee Calculator 2026: Overseas Pakistani Card Fees by Zone',
  description: 'Calculate official NADRA NICOP fees instantly for Zone A (USA, UK, Europe, Canada, Australia) and Zone B (Saudi Arabia, UAE, GCC). Instant normal, urgent, and executive rates.',
  openGraph: {
    title: 'NADRA NICOP Fee Calculator 2026: Overseas Pakistani Card Fees by Zone',
    description: 'Calculate official NADRA NICOP fees instantly for Zone A and Zone B. Instant normal, urgent, and executive rates in USD.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/nadra/nicop-fee-calculator',
  },
};

export default function NicopFeeCalculatorPage() {
  const breadcrumbs = [
    { nameEn: 'NADRA Services', nameUr: 'نادرا سروسز', url: '/nadra' },
    { nameEn: 'NICOP Fee Calculator', nameUr: 'نائیکوپ فیس کیلکولیٹر' },
  ];

  // SoftwareApplication / WebApplication JSON-LD Schema
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'NADRA NICOP Fee Calculator 2026',
    url: 'https://pakistaninfohub.com/nadra/nicop-fee-calculator',
    description: 'Instant official fee calculator for National Identity Card for Overseas Pakistanis (NICOP) based on country zone and processing speed.',
    applicationCategory: 'CivicUtilityApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '20',
      highPrice: '79',
      offerCount: '6',
    },
    provider: {
      '@type': 'Organization',
      name: 'Pakistan Info Hub',
      url: 'https://pakistaninfohub.com',
    },
  };

  return (
    <div className="space-y-8 md:space-y-12 animate-fadeIn max-w-5xl mx-auto">
      {/* Schema Injection */}
      <SchemaInjector breadcrumbs={breadcrumbs} customSchema={webAppSchema} />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Page Header */}
      <header className="rounded-3xl doc-card border-2 border-doc-brass/40 p-6 sm:p-8 md:p-10 space-y-4 relative overflow-hidden bg-doc-ink text-white shadow-2xl">
        <div className="flex flex-wrap items-center gap-2">
          <InteractiveToolBadge labelEn="INTERACTIVE FEE TOOL" labelUr="آن لائن فیس کیلکولیٹر" variant="gold" />
          <span className="text-xs text-slate-400 font-bold">•</span>
          <VerifiedBadge variant="header" textEn="OFFICIAL 2026 RATES" textUr="آفیشل ریٹ کارڈ 2026" />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold tracking-tight leading-tight">
          NADRA NICOP Fee Calculator (2026)
        </h1>

        <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed font-sans">
          Instantly calculate official fees and delivery timelines for your National Identity Card for Overseas Pakistanis (NICOP) based on your residence country zone and processing urgency.
        </p>
      </header>

      {/* Primary Tool Mount — Centered Max 480px Card */}
      <section className="py-2 flex justify-center">
        <NicopFeeCalculator />
      </section>

      {/* Country Zone Reference Breakdown */}
      <section className="doc-card rounded-2xl p-6 sm:p-8 border border-doc-brass/30 space-y-6">
        <div className="flex items-center gap-2 border-b border-doc-brass/30 pb-3">
          <Globe2 className="w-5 h-5 text-doc-seal" />
          <h2 className="text-xl font-serif font-extrabold text-doc-ink dark:text-white">
            Official NADRA Country Classification Schedule
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
          NADRA categorizes foreign countries into two distinct zones for international smart card issuance:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-doc-paper/80 dark:bg-slate-800/80 border border-doc-brass/30 space-y-2">
            <span className="font-mono font-bold text-xs uppercase px-2.5 py-0.5 rounded bg-doc-ink text-white">
              ZONE A
            </span>
            <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
              Western, OECD & High-Income Countries
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              United States of America (USA), United Kingdom (UK), Canada, Australia, New Zealand, European Union (Germany, France, Italy, Spain, Norway, Sweden, Denmark, etc.), Japan, Singapore, and Switzerland.
            </p>
            <div className="pt-2 font-mono text-xs text-doc-seal dark:text-red-400 font-bold">
              Normal: $39 USD • Urgent: $59 USD • Executive: $79 USD
            </div>
          </div>

          <div className="p-4 rounded-xl bg-doc-paper/80 dark:bg-slate-800/80 border border-doc-brass/30 space-y-2">
            <span className="font-mono font-bold text-xs uppercase px-2.5 py-0.5 rounded bg-doc-seal text-white">
              ZONE B
            </span>
            <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
              Middle East, GCC & Remaining Countries
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Kingdom of Saudi Arabia (KSA), United Arab Emirates (UAE: Dubai, Abu Dhabi, Sharjah), Qatar, Sultanate of Oman, Kuwait, Bahrain, Malaysia, and other Asian/African countries.
            </p>
            <div className="pt-2 font-mono text-xs text-doc-seal dark:text-red-400 font-bold">
              Normal: $20 USD • Urgent: $39 USD • Executive: $59 USD
            </div>
          </div>
        </div>
      </section>

      {/* Guide Links and Related Records */}
      <section className="p-6 rounded-2xl bg-doc-paper dark:bg-doc-dark-card border border-doc-brass/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
            Need Help Applying for Your NICOP Online?
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
            Read our step-by-step Pak-ID registration, fingerprint upload, and document requirement manual.
          </p>
        </div>
        <Link
          href="/nadra/nicop-apply-online"
          className="px-5 py-3 rounded-xl bg-doc-seal text-white hover:bg-red-700 font-mono font-bold text-xs flex items-center gap-1.5 transition shadow-sm shrink-0 min-h-[44px]"
        >
          <span>READ FULL NICOP GUIDE</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
