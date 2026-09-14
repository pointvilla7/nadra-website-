import React from 'react';
import { CATEGORIES } from '@/lib/data/categories';
import { ARTICLES } from '@/lib/data/articles';
import { CategoryPillNav } from '@/components/CategoryPillNav';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SchemaInjector } from '@/components/SchemaInjector';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { ShieldCheck, FileText, ChevronRight, CheckCircle2, ArrowRight, Sprout, Landmark, Tractor, Sparkles } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CategoryHeroIllustration } from '@/components/visuals';

export const metadata: Metadata = {
  title: 'Agriculture & Farmer Services Pakistan 2026 | Pakistan Info Hub',
  description:
    'Punjab Agriculture Department and provincial government verified schemes for CM Kissan Card registration, PLRA computerized land verification, interest-free seasonal crop loans up to Rs 300,000, Green Tractor balloting, and fertilizer subsidies.',
  openGraph: {
    title: 'Agriculture & Farmer Services Pakistan 2026 | Pakistan Info Hub',
    description:
      'Official verified guidelines for CM Punjab Kissan Card registration via 8070, Bank of Punjab interest-free financing, input subsidies, and farmer relief programs.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/agriculture',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/agriculture',
  },
};

export default function AgricultureCategoryPage() {
  const category = CATEGORIES.find((c) => c.slug === 'agriculture') || CATEGORIES[0];
  const articles = Object.values(ARTICLES).filter((a) => a.categoryId === 'agriculture');

  return (
    <>
      <SchemaInjector
        customSchema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Agriculture & Farmer Services | Pakistan Info Hub',
          url: 'https://www.pakistaninfohub.com/agriculture',
          description:
            'Punjab Agriculture Department, PITB, and Bank of Punjab verified schemes for CM Kissan Card registration, interest-free seasonal crop financing, and agricultural subsidies.',
        }}
      />
      <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto font-sans">
        <Breadcrumbs items={[{ nameEn: category.nameEn, nameUr: category.nameUr }]} />

        {/* Hero Header */}
        <header className="bg-doc-paper dark:bg-doc-dark-card border-2 border-doc-brass/40 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <VerifiedBadge variant="header" textEn="VERIFIED AGRICULTURAL REPOSITORY" />
                <span className="font-mono text-xs text-doc-seal uppercase tracking-widest font-bold">
                  OFFICIAL FARMER DIRECTORY
                </span>
              </div>
              <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-doc-ink dark:text-slate-100 tracking-tight leading-tight">
                {category.nameEn}
              </h1>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                {category.descriptionEn}
              </p>
            </div>

            <div className="md:col-span-4 flex justify-center">
              <CategoryHeroIllustration category="agriculture" />
            </div>
          </div>
        </header>

        <CategoryPillNav />

        {/* Popular Services & Interactive Tools */}
        {category.popularSearches && category.popularSearches.length > 0 && (
          <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/30 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-doc-brass" />
                <span>Featured Farmer Utilities &amp; Popular Guides</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.popularSearches.map((item) => (
                <Link
                  key={item.slug}
                  href={item.slug}
                  className="px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-doc-ink hover:text-white dark:hover:bg-slate-700 text-doc-ink dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-medium transition flex items-center gap-1.5"
                >
                  <span className="font-serif font-bold">{item.en}</span>
                  <span className="text-[10px] text-slate-400 font-sans">({item.ur})</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Flagship Agriculture Guide Card */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white flex items-center gap-2">
              <Sprout className="w-5 h-5 text-emerald-600" />
              <span>Flagship Farmer Schemes &amp; Verification Portals</span>
            </h2>
            <span className="text-xs font-mono text-slate-500">Updated for 2026</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* CM Punjab Kissan Card Featured Card */}
            <Link
              href="/agriculture/cm-punjab-kissan-card-registration-eligibility-2026"
              className="doc-card rounded-2xl p-6 border-2 border-emerald-500/40 hover:border-doc-seal hover:shadow-lg transition flex flex-col justify-between group bg-white dark:bg-doc-dark-card"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Active Scheme 2026</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-800 dark:text-amber-300 text-[10px] font-mono font-extrabold uppercase">
                    PUNJAB ONLY
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg sm:text-xl text-doc-ink dark:text-slate-100 group-hover:text-doc-seal transition leading-snug">
                  CM Punjab Kissan Card Registration &amp; Eligibility 2026
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  Complete step-by-step guide to applying via 8070 SMS, Bank of Punjab interest-free seasonal crop financing up to Rs. 300,000, PLRA land verification, and scam avoidance rules.
                </p>

                <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-mono text-slate-500">
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">SMS: 8070</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">Max Loan: Rs 300,000</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">Markup: 0%</span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-doc-seal">
                <span>View Full Registration Process</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </Link>

            {/* Related Farmer Land Record Verification Card */}
            <Link
              href="/property/punjab-land-record-fard-verifier-2026"
              className="doc-card rounded-2xl p-6 border border-doc-brass/30 hover:border-doc-seal hover:shadow-md transition flex flex-col justify-between group bg-white dark:bg-doc-dark-card"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>PLRA Verification</span>
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Prerequisite</span>
                </div>

                <h3 className="font-serif font-bold text-lg sm:text-xl text-doc-ink dark:text-slate-100 group-hover:text-doc-seal transition leading-snug">
                  Punjab Land Record Authority (PLRA) Fard Verifier
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  Verify computerized agricultural land ownership records and Fard Malkiat numbers before applying for Kissan Card subsidies to avoid counter rejections.
                </p>

                <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-mono text-slate-500">
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">Arazi Record Centers</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">Fard Online</span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-doc-seal">
                <span>Verify Agricultural Land</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
