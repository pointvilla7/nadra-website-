import React from 'react';
import { CATEGORIES } from '@/lib/data/categories';
import { ARTICLES } from '@/lib/data/articles';
import { CategoryPillNav } from '@/components/CategoryPillNav';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SchemaInjector } from '@/components/SchemaInjector';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { ShieldCheck, FileText, CheckCircle2, ArrowRight, Smartphone, Calculator, CheckSquare, Radio } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile & PTA Services 2026: Tax Calculator, DIRBS IMEI Check & SIM Verification | Pakistan Info Hub',
  description: 'Official guides and verified tools for PTA mobile phone registration, 2026 tax calculator (Passport vs CNIC), DIRBS 15-digit IMEI status check (8484 SMS), overseas 120-day temporary registration, and SIM verification.',
  openGraph: {
    title: 'Mobile & PTA Services 2026: Tax Calculator, DIRBS IMEI Check & SIM Verification',
    description: 'Official guides and verified tools for PTA mobile phone registration, 2026 tax calculator (Passport vs CNIC), DIRBS 15-digit IMEI status check (8484 SMS), and SIM verification.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/mobile-pta',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/mobile-pta' },
};

export default function MobilePtaHubPage() {
  const category = CATEGORIES.find((c) => c.slug === 'mobile-pta') || {
    id: 'mobile-pta',
    slug: 'mobile-pta',
    nameEn: 'Mobile & PTA Services',
    nameUr: 'موبائل و پی ٹی اے سروسز',
    taglineEn: 'PTA Mobile Tax, DIRBS IMEI Status & SIM Verification',
    taglineUr: 'پی ٹی اے موبائل ٹیکس، آئی ایم ای آئی تصدیق اور سم ویریفیکیشن',
    descriptionEn: 'Official step-by-step guides and online tools for PTA DIRBS mobile device registration, Customs duty tax calculation for iPhones & Android (Passport vs CNIC), IMEI status verification (8484 SMS), and SIM information rules in Pakistan.',
    popularSearches: [
      { en: 'PTA Tax Calculator 2026', ur: 'پی ٹی اے ٹیکس کیلکولیٹر', slug: '/mobile-pta/tax-calculator-2026' },
      { en: 'PTA IMEI Status Check (8484)', ur: 'آئی ایم ای آئی تصدیق 8484', slug: '/mobile-pta/imei-check-2026' },
      { en: 'SIM Information System (*8888#)', ur: 'سم معلومات سسٹم گائیڈ', slug: '/mobile-pta/sim-information-system-guide' },
      { en: 'Overseas 120-Day Temporary Registration', ur: 'اوورسیز 120 دن عارضی رجسٹریشن', slug: '/mobile-pta/overseas-temporary-registration-120-days-2026' },
      { en: 'Register Phone via DVS Online', ur: 'ڈی وی ایس آن لائن رجسٹریشن', slug: '/mobile-pta/how-to-register-phone-pta-dvs-online' },
    ],
  };

  const articles = Object.values(ARTICLES).filter((a) => a.categoryId === 'mobile-pta');

  return (
    <>
      <SchemaInjector
        customSchema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Mobile & PTA Services | Pakistan Info Hub',
          url: 'https://www.pakistaninfohub.com/mobile-pta',
          description: 'Official guides and verified tools for PTA mobile phone registration, 2026 tax calculator (Passport vs CNIC), DIRBS 15-digit IMEI status check (8484 SMS), and SIM verification.',
        }}
      />
      <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto font-sans">
        <Breadcrumbs items={[{ nameEn: category.nameEn, nameUr: category.nameUr }]} />

        {/* Hero Header */}
        <header className="bg-doc-paper dark:bg-doc-dark-card border-2 border-doc-brass/40 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <VerifiedBadge variant="header" textEn="VERIFIED PUBLIC REPOSITORY" />
              <span className="font-mono text-xs text-doc-seal uppercase tracking-widest font-bold">
                {articles.length || 5} OFFICIAL GUIDES &amp; TOOLS
              </span>
            </div>
            <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-doc-ink dark:text-slate-100 tracking-tight leading-tight">
              {category.nameEn}
              <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
                {category.nameUr}
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              {category.descriptionEn}
            </p>
          </div>
        </header>

        <CategoryPillNav />

        {/* Featured Online Tools */}
        {category.popularSearches && category.popularSearches.length > 0 && (
          <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/30 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-doc-brass" />
                <span>Featured Online Tools &amp; Popular Services</span>
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

        {/* Interactive Tools Highlight Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/mobile-pta/tax-calculator-2026"
            className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 hover:border-doc-brass transition group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-doc-brass uppercase">Interactive Tool</span>
                <Calculator className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white group-hover:text-doc-brass transition">
                PTA Mobile Tax Calculator 2026 →
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Real-time calculation of customs duty, regulatory duty, and sales tax for iPhone 16/15, Samsung, and Android devices (Passport vs CNIC rates).
              </p>
            </div>
            <div className="pt-4 mt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-emerald-400 font-bold">
              <span>Instant Calculation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/mobile-pta/imei-check-2026"
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-doc-seal transition group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-doc-seal uppercase">Device Verification</span>
                <Smartphone className="w-5 h-5 text-doc-seal" />
              </div>
              <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                PTA DIRBS IMEI Status Check (8484) →
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                15-digit IMEI formatting helper, *#06# dial code guide, free SMS to 8484, and direct link to the official DIRBS verification portal.
              </p>
            </div>
            <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-doc-seal font-bold">
              <span>Verify Registration</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </section>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((art) => (
            <Link
              key={art.slug}
              href={art.fullPath}
              className="doc-card rounded-2xl p-5 border border-doc-brass/30 hover:border-doc-seal hover:shadow-md transition flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified {art.lastVerified}</span>
                  </span>
                  <FileText className="w-4 h-4 text-doc-brass group-hover:text-doc-seal transition" />
                </div>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-slate-100 group-hover:text-doc-seal dark:group-hover:text-red-400 transition">
                  {art.titleEn}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {art.metaDescriptionEn}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 mt-3 border-t border-doc-brass/20 text-xs font-mono font-bold text-doc-seal dark:text-red-300">
                <span>View Full Procedure</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
