import React from 'react';
import { CATEGORIES } from '@/lib/data/categories';
import { ARTICLES } from '@/lib/data/articles';
import { CategoryPillNav } from '@/components/CategoryPillNav';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SchemaInjector } from '@/components/SchemaInjector';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { ShieldCheck, FileText, CheckCircle2, ArrowRight, Smartphone, Calculator, CheckSquare, Radio, Search, BookOpen } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CategoryHeroIllustration } from '@/components/visuals';

export const metadata: Metadata = {
  title: 'Mobile & PTA Services 2026: Registration Guide, Tax Check & IMEI Verification | Pakistan Info Hub',
  description: 'Official guides and verified tools for PTA mobile registration in Pakistan: 2026 tax calculator (Passport vs CNIC), DIRBS 15-digit IMEI status check (8484 SMS), 120-day overseas temporary registration, and SIM verification.',
  openGraph: {
    title: 'Mobile & PTA Services 2026: Registration Guide, Tax Check & IMEI Verification',
    description: 'Official guides and verified tools for PTA mobile registration, 2026 tax calculator (Passport vs CNIC), DIRBS 15-digit IMEI status check (8484 SMS), and SIM verification.',
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
    taglineEn: 'PTA Mobile Registration, Tax Check & DIRBS IMEI Verification',
    taglineUr: 'پی ٹی اے موبائل رجسٹریشن، ٹیکس کیلکولیٹر اور آئی ایم ای آئی تصدیق',
    descriptionEn: 'Official step-by-step guides and online tools for PTA DIRBS mobile device registration, Customs duty tax calculation for iPhones & Android (Passport vs CNIC), IMEI status verification (8484 SMS), and SIM information rules in Pakistan.',
    popularSearches: [
      { en: 'PTA Mobile Registration Guide', ur: 'پی ٹی اے موبائل رجسٹریشن گائیڈ', slug: '/mobile-pta/pta-mobile-registration-guide-2026' },
      { en: 'PTA Mobile Tax Check Online', ur: 'پی ٹی اے ٹیکس چیک آن لائن', slug: '/mobile-pta/pta-mobile-tax-check-online' },
      { en: 'PTA Mobile IMEI Check (8484)', ur: 'آئی ایم ای آئی تصدیق 8484', slug: '/mobile-pta/pta-mobile-imei-check' },
      { en: 'SIM Information System (*8888#)', ur: 'سم معلومات سسٹم گائیڈ', slug: '/mobile-pta/sim-information-system-guide' },
      { en: 'Overseas 120-Day Temporary Registration', ur: 'اوورسیز 120 دن عارضی رجسٹریشن', slug: '/mobile-pta/overseas-temporary-registration-120-days-2026' },
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
        <header className="bg-doc-paper dark:bg-doc-dark-card border-2 border-doc-brass/40 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <VerifiedBadge variant="header" textEn="VERIFIED PUBLIC REPOSITORY" />
                <span className="font-mono text-xs text-doc-seal uppercase tracking-widest font-bold">
                  OFFICIAL DIRBS GUIDES &amp; TOOLS
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

            <div className="md:col-span-4 flex justify-center">
              <CategoryHeroIllustration category="mobile-pta" />
            </div>
          </div>
        </header>

        <CategoryPillNav />

        {/* Featured Online Tools & High-Demand Queries */}
        <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/30 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-doc-brass" />
              <span>High-Demand Services &amp; Online Tools</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { en: 'PTA Mobile Registration (12.1k/mo)', ur: 'پی ٹی اے موبائل رجسٹریشن', slug: '/mobile-pta/pta-mobile-registration-guide-2026' },
              { en: 'PTA Mobile Tax Check Online', ur: 'پی ٹی اے ٹیکس چیک آن لائن', slug: '/mobile-pta/pta-mobile-tax-check-online' },
              { en: 'PTA Mobile IMEI Check (8484)', ur: 'آئی ایم ای آئی تصدیق 8484', slug: '/mobile-pta/pta-mobile-imei-check' },
              { en: 'SIM Information System (*8888#)', ur: 'سم معلومات سسٹم', slug: '/mobile-pta/sim-information-system-guide' },
              { en: '120-Day Temporary Registration', ur: 'اوورسیز 120 دن عارضی رجسٹریشن', slug: '/mobile-pta/overseas-temporary-registration-120-days-2026' },
            ].map((item) => (
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

        {/* Featured Hero: #1 Highest Volume Guide */}
        <Link
          href="/mobile-pta/pta-mobile-registration-guide-2026"
          className="p-6 sm:p-8 rounded-3xl bg-doc-ink text-white border border-doc-brass/50 hover:border-doc-brass transition group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl relative overflow-hidden"
        >
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-doc-brass text-doc-ink font-mono font-bold text-xs uppercase tracking-wider">
                Most Requested Guide (12,100 Searches/Mo)
              </span>
            </div>
            <h2 className="font-serif font-extrabold text-2xl sm:text-3xl text-white group-hover:text-amber-300 transition">
              PTA Mobile Registration 2026: Complete Online Guide →
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              Step-by-step walkthrough on how to register mobile with PTA via DIRBS portal, compare Passport vs CNIC duty, claim 120-day overseas exemption, and pay via 1Link banking apps.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl bg-doc-brass text-doc-ink font-bold text-sm shadow-md group-hover:bg-amber-400 transition">
            <span>Read Registration Guide</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Interactive Tools Highlight Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/mobile-pta/pta-mobile-tax-check-online"
            className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 hover:border-doc-brass transition group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-doc-brass uppercase">Interactive Tool</span>
                <Calculator className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white group-hover:text-doc-brass transition">
                PTA Mobile Tax Check Online 2026 →
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Real-time calculation of customs duty, regulatory duty, and sales tax for iPhone 16/15, Samsung, and Android devices (Passport vs CNIC rates).
              </p>
            </div>
            <div className="pt-4 mt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-emerald-400 font-bold">
              <span>Instant Tax Calculation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/mobile-pta/pta-mobile-imei-check"
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-doc-seal transition group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-doc-seal uppercase">Device Verification</span>
                <Smartphone className="w-5 h-5 text-doc-seal" />
              </div>
              <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                PTA Mobile IMEI Check (8484 SMS) →
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                15-digit IMEI formatting helper, *#06# dial code guide, free SMS to 8484, and direct link to the official DIRBS verification portal.
              </p>
            </div>
            <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-doc-seal font-bold">
              <span>Verify Device Approval</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </section>

        {/* Complete Category Articles Directory */}
        <div className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            All Mobile &amp; PTA Services Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                slug: 'pta-mobile-registration-guide-2026',
                fullPath: '/mobile-pta/pta-mobile-registration-guide-2026',
                titleEn: 'PTA Mobile Registration 2026: Complete Online Guide',
                descEn: 'Complete procedural guide to registering imported mobile phones on PTA DIRBS, generating PSID vouchers, and paying customs duties via 1Link.',
                date: 'August 22, 2026',
              },
              {
                slug: 'pta-mobile-tax-check-online',
                fullPath: '/mobile-pta/pta-mobile-tax-check-online',
                titleEn: 'PTA Mobile Tax Check Online 2026: Calculator & iPhone Duty Rates',
                descEn: 'Calculate exact PTA mobile phone registration tax and customs duty in Pakistan for 2026. Compare Passport vs CNIC registration rates.',
                date: 'August 22, 2026',
              },
              {
                slug: 'pta-mobile-imei-check',
                fullPath: '/mobile-pta/pta-mobile-imei-check',
                titleEn: 'PTA Mobile IMEI Check: How to Check if Mobile is PTA Approved Online (8484)',
                descEn: 'Check your mobile phone PTA DIRBS registration status in Pakistan. Learn how to verify 15-digit IMEI via free SMS to 8484.',
                date: 'August 22, 2026',
              },
              {
                slug: 'sim-information-system-guide',
                fullPath: '/mobile-pta/sim-information-system-guide',
                titleEn: 'PTA SIM Information System Guide – *8888#, 668 & Biometric Limits',
                descEn: 'Official civic guide to checking SIM cards registered against your CNIC in Pakistan: How to use PTA SIM Information System (*8888# and 668 SMS).',
                date: 'August 22, 2026',
              },
              {
                slug: 'overseas-temporary-registration-120-days-2026',
                fullPath: '/mobile-pta/overseas-temporary-registration-120-days-2026',
                titleEn: '120-Day Temporary PTA Mobile Registration 2026 – Overseas & Tourists',
                descEn: 'Complete guide to PTA Temporary Mobile Registration System (TTRS) for overseas Pakistanis and foreign tourists: Tax-free for 120 days.',
                date: 'August 22, 2026',
              },
              {
                slug: 'how-to-register-phone-pta-dvs-online',
                fullPath: '/mobile-pta/how-to-register-phone-pta-dvs-online',
                titleEn: 'How to Register Phone with PTA Online 2026 – PSID & 1Link Payment',
                descEn: 'Step-by-step guide on how to register imported mobile phones with PTA DIRBS in Pakistan and generate 17-digit PSID vouchers.',
                date: 'August 22, 2026',
              },
            ].map((art) => (
              <Link
                key={art.slug}
                href={art.fullPath}
                className="doc-card rounded-2xl p-5 border border-doc-brass/30 hover:border-doc-seal hover:shadow-md transition flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified {art.date}</span>
                    </span>
                    <FileText className="w-4 h-4 text-doc-brass group-hover:text-doc-seal transition" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-doc-ink dark:text-slate-100 group-hover:text-doc-seal dark:group-hover:text-red-400 transition">
                    {art.titleEn}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {art.descEn}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 mt-3 border-t border-doc-brass/20 text-xs font-mono font-bold text-doc-seal dark:text-red-300">
                  <span>View Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
