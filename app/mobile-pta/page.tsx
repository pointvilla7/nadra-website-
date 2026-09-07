import React from 'react';
import { CATEGORIES } from '@/lib/data/categories';
import { CategoryPillNav } from '@/components/CategoryPillNav';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SchemaInjector } from '@/components/SchemaInjector';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import {
  ShieldCheck,
  FileText,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Calculator,
  Radio,
  Search,
  ShieldAlert,
  Headphones,
  Scale,
  Globe2,
  Users
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CategoryHeroIllustration } from '@/components/visuals';

export const metadata: Metadata = {
  title: 'Mobile & PTA Telecommunications Directory 2026: Consumer Guides, Tax Rates & Device Verification | Pakistan Info Hub',
  description:
    'Comprehensive public portal for Pakistan Telecommunication Authority (PTA) compliance: DIRBS handset verification (8484 SMS), legal biometric SIM card limits per CNIC, Customs tariff schedules, overseas temporary permits, and consumer rights.',
  openGraph: {
    title: 'Mobile & PTA Telecommunications Directory 2026: Consumer Guides, Tax Rates & Device Verification',
    description:
      'Official civic reference for Pakistan Telecommunication Authority (PTA) statutory regulations: DIRBS device compliance, biometric SIM limits, customs duty structure, and consumer helplines.',
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
    taglineEn: 'PTA Regulatory Framework, DIRBS Handset Verification & SIM Compliance',
    taglineUr: 'پی ٹی اے ریگولیٹری فریم ورک، ڈی آئی آر بی ایس تصدیق اور سم قوانین',
    descriptionEn:
      'The Pakistan Telecommunication Authority (PTA) governs telecommunication infrastructure, cellular network standards, spectrum allocation, and consumer terminal equipment under the Pakistan Telecommunication (Re-organization) Act 1996. This civic repository provides citizens, overseas travelers, and consumers with authoritative regulatory information regarding device legal status, biometric SIM quotas, and customs duties.',
    popularSearches: [
      { en: 'PTA Mobile Registration Guide', ur: 'پی ٹی اے موبائل رجسٹریشن گائیڈ', slug: '/mobile-pta/pta-mobile-registration-guide-2026' },
      { en: 'PTA Mobile Tax Check Online', ur: 'پی ٹی اے ٹیکس چیک آن لائن', slug: '/mobile-pta/pta-mobile-tax-check-online' },
      { en: 'PTA Mobile IMEI Check (8484)', ur: 'آئی ایم ای آئی تصدیق 8484', slug: '/mobile-pta/pta-mobile-imei-check' },
      { en: 'SIM Information System (*8888#)', ur: 'سم معلومات سسٹم گائیڈ', slug: '/mobile-pta/sim-information-system-guide' },
      { en: 'Overseas 120-Day Temporary Registration', ur: 'اوورسیز 120 دن عارضی رجسٹریشن', slug: '/mobile-pta/overseas-temporary-registration-120-days-2026' },
    ],
  };

  const ptaGuides = [
    {
      slug: 'pta-mobile-registration-guide-2026',
      fullPath: '/mobile-pta/pta-mobile-registration-guide-2026',
      titleEn: 'PTA Mobile Registration 2026: Complete Online Guide & DVS Portal',
      descEn: 'Official procedural walkthrough for registering personal imported handsets via DIRBS: Generating 17-digit PSID vouchers, 1Link banking payment, and comparing Passport vs CNIC tariff categories.',
      badge: 'Primary Process',
      date: 'Updated September 2026',
    },
    {
      slug: 'pta-mobile-tax-check-online',
      fullPath: '/mobile-pta/pta-mobile-tax-check-online',
      titleEn: 'PTA Mobile Tax Check Online 2026: Calculator & iPhone Duty Rates',
      descEn: 'Statutory Customs duty brackets, sales tax schedules, and regulatory duties based on C&F device dollar value for iPhones, Samsung, and flagship smartphones.',
      badge: 'Tax & Tariffs',
      date: 'Updated September 2026',
    },
    {
      slug: 'pta-mobile-imei-check',
      fullPath: '/mobile-pta/pta-mobile-imei-check',
      titleEn: 'PTA Mobile IMEI Check: How to Check if Mobile is PTA Approved Online (8484)',
      descEn: 'Verification protocols for 15-digit IMEI status using free 8484 SMS or dirbs.pta.gov.pk to identify Compliant, Non-Compliant, or Blocked counterfeit devices before purchase.',
      badge: 'Device Security',
      date: 'Updated September 2026',
    },
    {
      slug: 'sim-information-system-guide',
      fullPath: '/mobile-pta/sim-information-system-guide',
      titleEn: 'PTA SIM Information System Guide – *8888#, 668 & Biometric Limits',
      descEn: 'Consumer legal guide to biometric SIM limits: Maximum 5 voice SIMs and 3 broadband data connections per CNIC, checking active numbers via cnic.sims.pk, and blocking unauthorized connections.',
      badge: 'Identity Protection',
      date: 'Updated September 2026',
    },
    {
      slug: 'overseas-temporary-registration-120-days-2026',
      fullPath: '/mobile-pta/overseas-temporary-registration-120-days-2026',
      titleEn: '120-Day Temporary PTA Mobile Registration 2026 – Overseas & Tourists',
      descEn: 'Statutory duty exemption framework for overseas Pakistanis and foreign tourists visiting Pakistan: Activating cellular service without customs payment for up to 120 days per visit.',
      badge: 'Exemption Scheme',
      date: 'Updated September 2026',
    },
  ];

  return (
    <>
      <SchemaInjector
        customSchema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Mobile & PTA Telecommunications Directory | Pakistan Info Hub',
          url: 'https://www.pakistaninfohub.com/mobile-pta',
          description:
            'Official directory of telecommunications regulations, DIRBS device registration rules, biometric SIM card quotas, and customs duties overseen by the Pakistan Telecommunication Authority.',
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
                  CIVIC TELECOM DIRECTORY
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

        {/* Regulatory Framework Overview — 4 Core Pillars */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-doc-brass" />
              <span>PTA Telecommunications Compliance Framework</span>
            </h2>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Statutory Rules</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/20 space-y-2 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-doc-ink text-doc-brass flex items-center justify-center font-bold">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                1. DIRBS System
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Prevents illegal smuggling and protects users from counterfeit terminal equipment by authenticating 15-digit GSMA IMEIs against telecom networks.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/20 space-y-2 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-doc-ink text-doc-brass flex items-center justify-center font-bold">
                <Calculator className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                2. Customs Duty Matrix
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Determines statutory FBR taxes (Customs, Regulatory, Sales Tax, and Withholding Tax) based on tiered handset value in USD, with separate Passport vs CNIC rates.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/20 space-y-2 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-doc-ink text-doc-brass flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                3. Biometric SIM Limits
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                National quota enforced under NADRA integration: A maximum of 5 voice SIMs and 3 broadband data connections can be registered under a single CNIC.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/20 space-y-2 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-doc-ink text-doc-brass flex items-center justify-center font-bold">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                4. Overseas Exemption
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                The Temporary Mobile Registration System (TTRS) grants non-resident Pakistanis and foreign tourists 120 days of duty-free connectivity per calendar trip.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Civic Compliance Reference Card */}
        <section className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4 shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Official Telecommunication Codes &amp; Consumer Rules</span>
            </h2>
            <span className="text-[11px] font-mono text-slate-400">Official Standards</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
              <span className="block font-mono font-extrabold text-lg text-emerald-400">8484</span>
              <span className="text-[11px] text-slate-300 font-medium">IMEI SMS Check</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
              <span className="block font-mono font-extrabold text-lg text-emerald-400">668</span>
              <span className="text-[11px] text-slate-300 font-medium">SIM Count SMS</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
              <span className="block font-mono font-extrabold text-lg text-amber-300">*8888#</span>
              <span className="text-[11px] text-slate-300 font-medium">Biometric SIM Menu</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
              <span className="block font-mono font-extrabold text-lg text-cyan-300">5 + 3</span>
              <span className="text-[11px] text-slate-300 font-medium">Max SIMs per CNIC</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
              <span className="block font-mono font-extrabold text-lg text-amber-300">60 Days</span>
              <span className="text-[11px] text-slate-300 font-medium">Unregistered Grace</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
              <span className="block font-mono font-extrabold text-lg text-purple-300">120 Days</span>
              <span className="text-[11px] text-slate-300 font-medium">Overseas Pass</span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
            <span className="flex items-center gap-1.5">
              <Headphones className="w-3.5 h-3.5 text-doc-brass" />
              <span>PTA Consumer Helpline: <strong>0800-55055</strong> (Toll-Free) or <strong>051-9225325</strong></span>
            </span>
            <span>Official Portal: <strong>dirbs.pta.gov.pk</strong></span>
          </div>
        </section>

        {/* Complete Category Articles Directory */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
              Official PTA &amp; Mobile Guides
            </h2>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {ptaGuides.length} Verified Guides
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ptaGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={guide.fullPath}
                className="doc-card rounded-2xl p-5 border border-doc-brass/30 hover:border-doc-seal hover:shadow-md transition flex flex-col justify-between group bg-white dark:bg-doc-dark-card"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-doc-ink dark:text-doc-brass bg-doc-brass/10 px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3 h-3 text-doc-brass" />
                      <span>{guide.badge}</span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">{guide.date}</span>
                  </div>
                  <h3 className="font-serif font-bold text-base text-doc-ink dark:text-slate-100 group-hover:text-doc-seal dark:group-hover:text-red-400 transition">
                    {guide.titleEn}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {guide.descEn}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 mt-3 border-t border-doc-brass/20 text-xs font-mono font-bold text-doc-seal dark:text-red-300">
                  <span>Open Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
