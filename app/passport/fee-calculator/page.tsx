import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SchemaInjector } from '@/components/SchemaInjector';
import { PassportFeeCalculator } from '@/components/PassportFeeCalculator';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { GeoTrustBadge } from '@/components/GeoTrustBadge';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Plane, ShieldCheck, Clock, FileText, ArrowRight, HelpCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pakistan Passport Fee Calculator 2026: Calculate MRP & e-Passport Fees',
  description: 'Calculate official Pakistan Passport fees for Minor & Adult applicants (36, 72, 100 pages, and e-Passports). Instant Normal, Urgent & Fast Track rates in PKR.',
  alternates: {
    canonical: 'https://pakistaninfohub.com/passport/fee-calculator',
  },
  openGraph: {
    title: 'Pakistan Passport Fee Calculator 2026: Calculate MRP & e-Passport Fees',
    description: 'Calculate official Pakistan Passport fees for Minor & Adult applicants (36, 72, 100 pages, and e-Passports). Instant Normal, Urgent & Fast Track rates in PKR.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/passport/fee-calculator',
  },
};

export default function PassportFeeCalculatorPage() {
  const breadcrumbs = [
    { nameEn: 'Passport & Travel', nameUr: 'پاسپورٹ اور ٹریول', url: '/passport' },
    { nameEn: 'Passport Fee Calculator', nameUr: 'پاسپورٹ فیس کیلکولیٹر' },
  ];

  const author = {
    name: 'Editorial Team',
    role: 'Passport & Immigration Desk',
  };

  const officialSource = {
    name: 'Directorate General of Immigration & Passports (DGIP)',
    url: 'https://dgip.gov.pk/',
  };

  const faqs = [
    {
      questionEn: 'How much is the 36-page normal passport fee in Pakistan for 2026?',
      questionUr: 'پاکستان میں 36 صفحات کے نارمل پاسپورٹ کی فیس 2026 میں کتنی ہے؟',
      answerEn: 'The 36-page 5-year standard MRP passport fee is PKR 4,500 for Normal processing, PKR 7,500 for Urgent processing, and PKR 12,500 for Fast Track delivery. A 10-year 36-page passport costs PKR 6,700 (Normal) and PKR 11,200 (Urgent).',
      answerUr: '36 صفحات والے 5 سالہ نارمل پاسپورٹ کی سرکاری فیس 4,500 روپے اور ارجنٹ 7,500 روپے ہے۔ 10 سالہ نارمل پاسپورٹ 6,700 روپے اور ارجنٹ 11,200 روپے کا ہے۔',
    },
    {
      questionEn: 'Can children under 18 apply for a 10-year validity passport?',
      questionUr: 'کیا 18 سال سے کم عمر بچوں کا 10 سالہ پاسپورٹ بن سکتا ہے؟',
      answerEn: 'No. Under DGIP statutory regulations, children and minors under 18 years of age are strictly issued 5-year validity passports only, due to rapid facial and physical appearance changes during growth.',
      answerUr: 'نہیں، حکومتی قواعد کے تحت 18 سال سے کم عمر بچوں کو صرف 5 سالہ پاسپورٹ جاری کیا جاتا ہے۔',
    },
    {
      questionEn: 'What is the official fee for a chip-embedded e-Passport?',
      questionUr: 'ای پاسپورٹ (e-Passport) کی سرکاری فیس کتنی ہے؟',
      answerEn: 'A 36-page 5-year e-Passport costs PKR 9,000 for Normal processing, PKR 15,000 for Urgent processing, and PKR 20,000 for Fast Track. A 10-year e-Passport costs PKR 13,500 (Normal), PKR 22,500 (Urgent), and PKR 27,000 (Fast Track).',
      answerUr: '36 صفحات والے 5 سالہ ای پاسپورٹ کی نارمل فیس 9,000 روپے اور ارجنٹ 15,000 روپے ہے۔ 10 سالہ ای پاسپورٹ کی نارمل فیس 13,500 روپے اور ارجنٹ 22,500 روپے ہے۔',
    },
    {
      questionEn: 'How can I pay my passport fee online using PSID?',
      questionUr: 'پاسپورٹ فیس آن لائن PSID سے کیسے ادا کریں؟',
      answerEn: 'Generate a 17-digit PSID via the official "Passport Fee Asaan" mobile app or onlinemrp.dgip.gov.pk. Then open Easypaisa, JazzCash, or any 1Link banking app, select "GoPb/Govt of Pakistan" bill payments, enter the PSID, and complete the transaction.',
      answerUr: 'پاسپورٹ فیس آسان ایپ سے 17 ہندسوں کا PSID چالان بنائیں اور جاز کیش، ایزی پیسہ یا بینکنگ ایپ سے فیس جمع کروائیں۔',
    },
  ];

  // WebApplication JSON-LD Schema
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Pakistan Passport Fee Calculator 2026',
    url: 'https://pakistaninfohub.com/passport/fee-calculator',
    description: 'Instant official fee calculator for Pakistani Machine Readable Passports (MRP) and chip-embedded e-Passports for minors and adults.',
    applicationCategory: 'CivicUtilityApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'PKR',
      lowPrice: '4500',
      highPrice: '32000',
      offerCount: '24',
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
      <SchemaInjector breadcrumbs={breadcrumbs} faqs={faqs} customSchema={webAppSchema} />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Header */}
      <header className="rounded-3xl doc-card border-2 border-doc-brass/40 p-6 sm:p-8 md:p-10 space-y-4 relative overflow-hidden bg-doc-ink text-white shadow-2xl">
        <div className="flex flex-wrap items-center gap-2">
          <InteractiveToolBadge labelEn="INTERACTIVE PASSPORT CALCULATOR" labelUr="آن لائن فیس کیلکولیٹر" variant="gold" />
          <span className="text-xs text-slate-400 font-bold">•</span>
          <VerifiedBadge variant="header" textEn="OFFICIAL 2026 DGIP RATES" textUr="آفیشل پاسپورٹ ریٹ کارڈ" />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold tracking-tight leading-tight">
          Pakistan Passport Fee Calculator (2026)
        </h1>

        <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed font-sans">
          Calculate the exact fee for your new passport or renewal. Select applicant age group (Minor/Adult), booklet pages, validity period (5 or 10 years), and urgency tier for instant official rates.
        </p>

        {/* GEO Trust Badge */}
        <GeoTrustBadge
          lastVerified="August 17, 2026"
          officialSource={officialSource}
          author={author}
        />
      </header>

      {/* AEO Direct Answer Box */}
      <DirectAnswerBox
        topicTitleEn="Official Pakistan Passport Fees 2026 (In Short)"
        topicTitleUr="پاکستان پاسپورٹ فیس کا مختصر خلاصہ"
        answerEn="Standard 36-page 5-year Pakistani passport costs PKR 4,500 (Normal) and PKR 7,500 (Urgent). 10-year 36-page passport costs PKR 6,700 (Normal) and PKR 11,200 (Urgent). Chip-embedded e-Passport fees start at PKR 9,000 for 5-year 36 pages. Minors under 18 are eligible for 5-year validity only."
        answerUr="36 صفحات کے 5 سالہ عام پاسپورٹ کی نارمل فیس 4,500 اور ارجنٹ فیس 7,500 روپے ہے۔ 10 سالہ پاسپورٹ کی نارمل فیس 6,700 روپے اور ارجنٹ فیس 11,200 روپے ہے۔ ای پاسپورٹ کی ابتدائی فیس 9,000 روپے ہے۔ 18 سال سے کم عمر بچوں کا صرف 5 سالہ پاسپورٹ بنتا ہے۔"
      />

      {/* Standalone Numeric Highlights */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl doc-card border border-doc-brass/30 bg-white dark:bg-doc-dark-card text-center">
          <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">36 Pgs (5-Yr Normal)</span>
          <div className="text-lg font-mono font-extrabold text-doc-ink dark:text-white mt-0.5">PKR 4,500</div>
          <span className="text-[10px] text-slate-500">21–30 Days</span>
        </div>
        <div className="p-3.5 rounded-xl doc-card border border-doc-brass/30 bg-white dark:bg-doc-dark-card text-center">
          <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">36 Pgs (5-Yr Urgent)</span>
          <div className="text-lg font-mono font-extrabold text-doc-seal dark:text-red-400 mt-0.5">PKR 7,500</div>
          <span className="text-[10px] text-slate-500">5–7 Days</span>
        </div>
        <div className="p-3.5 rounded-xl doc-card border border-doc-brass/30 bg-white dark:bg-doc-dark-card text-center">
          <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">36 Pgs (10-Yr Normal)</span>
          <div className="text-lg font-mono font-extrabold text-doc-ink dark:text-white mt-0.5">PKR 6,700</div>
          <span className="text-[10px] text-slate-500">21–30 Days</span>
        </div>
        <div className="p-3.5 rounded-xl doc-card border border-doc-brass/30 bg-white dark:bg-doc-dark-card text-center">
          <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">e-Passport (5-Yr)</span>
          <div className="text-lg font-mono font-extrabold text-doc-brass mt-0.5">PKR 9,000</div>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Chip Embedded</span>
        </div>
      </section>

      {/* Primary Tool Mount */}
      <section className="py-2 flex justify-center">
        <PassportFeeCalculator />
      </section>

      {/* FAQs Section */}
      <FAQAccordion faqs={faqs} />

      {/* Related Guide Links */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl doc-card border border-doc-brass/30 flex flex-col justify-between space-y-3">
          <div>
            <span className="font-mono text-[10px] uppercase font-bold text-doc-seal">OFFICIAL RATE TABLES</span>
            <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white mt-1">
              Complete Passport Fee Structure 2026
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
              Read comprehensive tables for 36, 72, and 100 pages with step-by-step 1Link PSID payment guides.
            </p>
          </div>
          <Link
            href="/passport/fee-2026"
            className="text-xs font-mono font-bold text-doc-seal dark:text-red-400 hover:underline flex items-center gap-1 pt-2"
          >
            <span>VIEW FULL RATE TABLES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="p-6 rounded-2xl doc-card border border-doc-brass/30 flex flex-col justify-between space-y-3">
          <div>
            <span className="font-mono text-[10px] uppercase font-bold text-doc-seal">APPLICATION TRACKING</span>
            <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white mt-1">
              Passport Status Tracking Tool
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
              Track the printing and delivery status of your passport application via 11-digit token or SMS 9988.
            </p>
          </div>
          <Link
            href="/passport/tracking-status"
            className="text-xs font-mono font-bold text-doc-seal dark:text-red-400 hover:underline flex items-center gap-1 pt-2"
          >
            <span>TRACK PASSPORT STATUS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
