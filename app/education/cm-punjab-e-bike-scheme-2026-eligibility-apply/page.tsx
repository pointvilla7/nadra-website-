import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, ComparisonVisual, FAQAccordionVisual, FeeTableVisual } from '@/components/visuals';
import {
  Bike,
  Zap,
  ShieldCheck,
  FileCheck2,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Scale,
  Calendar,
  Clock,
  IdCard,
  Building2,
  Info,
  Car,
  Sparkles,
  Heart,
  BellRing,
  HelpCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'CM Punjab E-Bike Scheme 2026: Applications Open, Eligibility & 100,000 Bikes',
  description:
    'Official verified guide to Chief Minister Punjab E-Bike Scheme 2026: Online apply open at bikes.punjab.gov.pk, 100,000 electric bikes for school, college & university students, zero down payment, PKR 3,028/mo installment plan & pink bikes for girls.',
  keywords: [
    'cm punjab e bike scheme 2026',
    'bikes.punjab.gov.pk online apply',
    'cm punjab 100000 electric bikes',
    'punjab student e bike eligibility criteria',
    'bank of punjab e bike installment plan 3028',
    'punjab e bike last date october 2026',
    'cm maryam nawaz pink bike scheme',
    'punjab school college university e bike apply',
    'dlims learner permit bike scheme punjab',
  ],
  openGraph: {
    title: 'CM Punjab E-Bike Scheme 2026: Applications Open for 100,000 Bikes',
    description:
      'Official student portal guide to bikes.punjab.gov.pk: 100,000 electric bikes across 33,000+ schools, colleges, and universities. Zero down payment, PKR 3,028/month, and pink bikes for female students.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/education/cm-punjab-e-bike-scheme-2026-eligibility-apply',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/education/cm-punjab-e-bike-scheme-2026-eligibility-apply',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com/' },
        { '@type': 'ListItem', position: 2, name: 'Education', item: 'https://www.pakistaninfohub.com/education' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'CM Punjab E-Bike Scheme 2026',
          item: 'https://www.pakistaninfohub.com/education/cm-punjab-e-bike-scheme-2026-eligibility-apply',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'CM Punjab E-Bike Scheme 2026: Applications Open, Eligibility & 100,000 Bikes',
      description:
        'Authoritative public guide explaining how regular school, college, and university students across Punjab can apply for 100,000 subsidized electric motorcycles on bikes.punjab.gov.pk with zero down payment, PKR 3,028 monthly installments, and dedicated pink bikes for women.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-04',
      dateModified: '2026-09-09',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/education/cm-punjab-e-bike-scheme-2026-eligibility-apply',
    },
    {
      '@type': 'HowTo',
      name: 'How to Apply for Chief Minister Punjab E-Bike Scheme Online (2026)',
      description:
        'Official 6-step application procedure for regular students across Punjab using the PITB portal bikes.punjab.gov.pk.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Account Registration on bikes.punjab.gov.pk',
          text: 'Visit bikes.punjab.gov.pk and register with your 13-digit CNIC or Smart B-Form number and an active mobile number registered under your own name.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Upload Academic & Driving License Credentials',
          text: 'Select your registered school, college, or university, enter your student roll number, and provide your permanent motorcycle driving license or active DLIMS learner permit number.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Select Vehicle Category & Color Preference',
          text: 'Confirm your application for an electric motorcycle. Female applicants can select the dedicated pink-colored electric bike variant.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Computerized PITB E-Balloting',
          text: 'Verified student submissions enter the transparent provincial lottery draw conducted algorithmically by the Punjab Information Technology Board.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Bank of Punjab (BOP) Physical Verification',
          text: 'Selected students report to their assigned Bank of Punjab branch alongside a parent/guardian co-borrower to sign the zero-markup financing agreement.',
        },
        {
          '@type': 'HowToStep',
          position: 6,
          name: 'Zero-Advance Vehicle & Helmet Collection',
          text: 'With down payment waived (PKR 0 advance), collect your registered electric motorcycle, complimentary safety helmet, and protection rods from the designated dealership.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are applications currently open for the CM Punjab E-Bike Scheme?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Applications officially opened on September 5, 2026, announced directly by Chief Minister Maryam Nawaz. Eligible students can apply online through the official portal bikes.punjab.gov.pk until the deadline of October 4, 2026.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are school and college students eligible, or only university students?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Eligibility has been significantly broadened. Regular students of recognized schools (matriculation/intermediate levels), colleges, and universities across 33,000+ public and private educational institutions in Punjab are now eligible to apply, provided they are at least 18 years old and hold a driving license or learner permit.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the exact price, government subsidy, and monthly installment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The total bike market cost is PKR 199,000. The Punjab Government provides a direct capital subsidy of PKR 90,000, leaving a net principal of PKR 109,000 payable by the student. There is zero down payment (PKR 0 advance), and repayment is spread over 36 months at approximately PKR 3,028 per month. The government covers 100% of the bank markup, insurance, and vehicle registration.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are pink electric bikes available for female students?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. To encourage female mobility and student empowerment, the Punjab Government has specifically reserved pink-colored electric bikes for female students, accompanied by an equal quota allocation and free certified safety helmets.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I apply with a Learner Driving Permit instead of a permanent license?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! An active motorcycle Learner Driving Permit issued by Punjab Traffic Police / DLIMS is fully acceptable. You can acquire a learner permit online at dlims.punjab.gov.pk in 15 minutes before applying on the bike portal.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is this scheme different from the Federal PAVE Scheme?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The CM Punjab E-Bike Scheme (bikes.punjab.gov.pk) is a provincial program specifically for enrolled students in Punjab with Bank of Punjab zero-markup financing. The Federal PAVE scheme (pave.gov.pk) is a nationwide federal subsidy program open to all Pakistani citizens covering electric bikes, e-rickshaws, and loaders.',
          },
        },
      ],
    },
  ],
};

const feeScheduleRows = [
  {
    serviceEn: 'Total Electric Bike Market Value',
    serviceUr: 'الیکٹرک بائیک کی کل مارکیٹ قیمت',
    normal: 'PKR 199,000',
    urgent: 'Standard Listed Retail',
    executive: 'Govt Audited Valuation',
    tagEn: 'Retail Benchmark',
  },
  {
    serviceEn: 'Punjab Government Direct Capital Subsidy',
    serviceUr: 'حکومت پنجاب کی براہ راست کیش سبسڈی',
    normal: 'PKR 90,000 (Waived Off)',
    urgent: 'Non-repayable Grant',
    executive: '100% Funded by Govt',
    tagEn: 'Direct Subsidy',
  },
  {
    serviceEn: 'Student Net Payable Principal',
    serviceUr: 'طالب علم کی واجب الادا اصل رقم',
    normal: 'PKR 109,000',
    urgent: 'Zero Interest Principal',
    executive: 'Repaid Over 36 Months',
    tagEn: 'Student Share',
  },
  {
    serviceEn: 'Initial Down Payment / Advance Required',
    serviceUr: 'ابتدائی ڈاؤن پیمنٹ / ایڈوانس رقم',
    normal: 'PKR 0 (Completely Waived)',
    urgent: 'Zero Advance Required',
    executive: 'Approved by CM Punjab',
    tagEn: 'Zero Down Payment',
  },
  {
    serviceEn: 'Monthly Installment Schedule (36 Months)',
    serviceUr: 'ماہانہ قسط (3 سال / 36 ماہ)',
    normal: 'PKR 3,028 / month',
    urgent: 'PKR 109,000 ÷ 36 Months',
    executive: 'Fixed Zero-Markup EMI',
    tagEn: 'Easy Installments',
  },
  {
    serviceEn: 'Bank Markup, Insurance & Registration Taxes',
    serviceUr: 'بینک سود، فل انشورنس اور رجسٹریشن فیس',
    normal: 'PKR 0 (100% Free)',
    urgent: 'Paid by Punjab Govt',
    executive: 'Comprehensive Coverage',
    tagEn: '100% Free Overhead',
  },
  {
    serviceEn: 'Complimentary Safety Gear & Training',
    serviceUr: 'مفت حفاظتی ہیلمٹ، سیفٹی راڈز اور ٹریننگ',
    normal: 'Included Free of Cost',
    urgent: 'Full-Face Helmet + Rods',
    executive: '2-Day Driving Training',
    tagEn: 'Safety Inclusions',
  },
];

const applicationSteps = [
  {
    number: 1,
    icon: <IdCard className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Register on bikes.punjab.gov.pk',
    titleUr: 'آفیشل پورٹل پر اکاؤنٹ کا اندراج',
    descEn: 'Visit the live official portal bikes.punjab.gov.pk. Create your student account using your 13-digit CNIC/B-Form and a SIM registered in your own name.',
    descUr: 'آفیشل ویب پورٹل bikes.punjab.gov.pk پر جائیں اور اپنے شناختی کارڈ اور ذاتی سم سے اکاؤنٹ بنائیں۔',
    tagEn: 'Open Now (Till 4 Oct)',
    tagUr: 'درخواستیں جاری ہیں',
  },
  {
    number: 2,
    icon: <FileCheck2 className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Enter Academic & Driving License Data',
    titleUr: 'تعلیمی ادارے اور ڈرائیونگ لائسنس کی تصدیق',
    descEn: 'Select your registered school, college, or university, enter your student roll number, and input your valid motorcycle driving license or DLIMS learner permit number.',
    descUr: 'اپنے سکول، کالج یا یونیورسٹی کا انتخاب کریں اور ٹریفک پولیس کا لرنر پرمٹ یا پکا لائسنس نمبر درج کریں۔',
    tagEn: 'Schools, Colleges & Unis',
    tagUr: 'تمام تعلیمی ادارے',
  },
  {
    number: 3,
    icon: <Bike className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Select Electric Bike & Color Option',
    titleUr: 'بائیک کی کیٹیگری اور کلر کا انتخاب',
    descEn: 'Confirm your electric motorcycle application. Female applicants can select the dedicated pink-colored e-bike variant designed for female student empowerment.',
    descUr: 'الیکٹرک موٹرسائیکل کا انتخاب کریں۔ طالبات کے لیے خصوصی گلابی (Pink) بائیک کا آپشن دستیاب ہے۔',
    tagEn: 'Pink Variant for Girls',
    tagUr: 'طالبات کے لیے گلابی رنگ',
  },
  {
    number: 4,
    icon: <Scale className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Computerized PITB E-Balloting',
    titleUr: 'پنجاب آئی ٹی بورڈ کی کمپیوٹرائزڈ قرعہ اندازی',
    descEn: 'Applications enter an automated, transparent provincial draw conducted publicly by PITB with equal male/female quota distribution across all 36 Punjab districts.',
    descUr: 'پنجاب آئی ٹی بورڈ شفاف الگورتھم کے تحت کمپیوٹرائزڈ قرعہ اندازی کرے گا جس میں طالبات کا مساوی کوٹہ شامل ہے۔',
    tagEn: 'Transparent Draw',
    tagUr: 'شفاف قرعہ اندازی',
  },
  {
    number: 5,
    icon: <Building2 className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Bank of Punjab (BOP) Branch Signing',
    titleUr: 'بینک آف پنجاب سے معاہدے پر دستخط',
    descEn: 'Successful applicants visit their assigned BOP branch with a parent or guardian as financial co-borrower to sign the zero-interest financing facility.',
    descUr: 'کامیاب امیدوار اپنے والدین یا سرپرست کے ہمراہ نامزد بینک آف پنجاب برانچ میں بلا سود فنانسنگ دستاویزات پر دستخط کریں۔',
    tagEn: 'Zero-Markup BOP Contract',
    tagUr: 'بلا سود معاہدہ',
  },
  {
    number: 6,
    icon: <CheckCircle2 className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Zero-Down-Payment Vehicle Collection',
    titleUr: 'بغیر ایڈوانس ادائیگی بائیک و ہیلمٹ کی وصولی',
    descEn: 'With down payment waived (PKR 0 advance), collect your brand-new electric bike, complimentary safety helmet, and protective guards directly from the authorized dealership.',
    descUr: 'ڈاؤن پیمنٹ مکمل معاف ہونے کی وجہ سے بغیر ایڈوانس ادائیگی اپنی نئی بائیک، ہیلمٹ اور وارنٹی کارڈ حاصل کریں۔',
    tagEn: 'PKR 0 Down Payment',
    tagUr: 'صفر ایڈوانس',
  },
];

export default function CmPunjabEBikeSchemePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans pb-16">
        {/* Top Breadcrumb Bar */}
        <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 py-2.5 flex items-center justify-between">
            <Breadcrumbs
              items={[
                { nameEn: 'Education', nameUr: 'تعلیم', url: '/education' },
                {
                  nameEn: 'CM Punjab E-Bike Scheme 2026',
                  nameUr: 'وزیراعلیٰ پنجاب ای بائیک سکیم 2026',
                  url: '/education/cm-punjab-e-bike-scheme-2026-eligibility-apply',
                },
              ]}
            />
            <VerifiedBadge textEn="Verified September 2026 • Portal Live" textUr="مصدقہ ستمبر 2026 • پورٹل لائیو" />
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 pt-6 space-y-8">
          {/* URGENT LIVE BANNER */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white p-4 sm:p-5 shadow-lg border border-emerald-500/40">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/10 backdrop-blur shrink-0 mt-0.5">
                  <BellRing className="w-5 h-5 text-amber-300 animate-bounce" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-900/60 text-emerald-200 text-[10px] font-mono font-extrabold uppercase tracking-wider">
                      APPLICATIONS OPEN NOW
                    </span>
                    <span className="text-xs text-emerald-100 font-medium">Phase 2 Provincial Rollout</span>
                  </div>
                  <p className="text-sm sm:text-base font-bold text-white mt-1 leading-snug">
                    Portal Open as of 5 September 2026 — Deadline: 4 October 2026
                  </p>
                  <p className="text-xs text-emerald-100 mt-0.5 font-sans">
                    100,000 electric bikes for students across 33,000+ schools, colleges, and universities in Punjab. (Are you a teacher? See <Link href="/education/ptf-punjab-teacher-e-bike-scheme-2026" className="underline font-bold text-white hover:text-amber-200">PTF Teacher E-Bike Scheme</Link>).
                  </p>
                </div>
              </div>
              <a
                href="https://bikes.punjab.gov.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-emerald-800 font-bold text-xs sm:text-sm hover:bg-emerald-50 transition shadow-md shrink-0 self-stretch sm:self-auto justify-center"
              >
                <span>Apply on bikes.punjab.gov.pk</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Header Section */}
          <header className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold tracking-wide">
              <Zap className="w-3.5 h-3.5" />
              <span>OFFICIAL STUDENT MOBILITY INITIATIVE • 100,000 ELECTRIC BIKES</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-doc-ink dark:text-white tracking-tight leading-tight">
              CM Punjab E-Bike Scheme 2026: Eligibility, Online Apply &amp; BOP Installment Plan
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              The verified, independent public guide to Chief Minister Maryam Nawaz&apos;s interest-free electric bike program for regular school, college, and university students across Punjab. Learn how the active portal <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs font-mono text-doc-seal dark:text-amber-400 font-bold">bikes.punjab.gov.pk</code>, zero-down-payment policy, computerized PITB e-balloting, and PKR 3,028 monthly financing actually work.
            </p>
          </header>

          {/* Direct Answer Box */}
          <DirectAnswerBox
            topicTitleEn="Summary: CM Punjab Student E-Bike Scheme (2026)"
            topicTitleUr="خلاصہ: وزیراعلیٰ پنجاب طلبہ ای بائیک سکیم 2026"
            answerEn="Online applications are OPEN NOW on bikes.punjab.gov.pk (opened 5 September 2026; last date 4 October 2026). The Punjab Government is distributing 100,000 electric bikes across 33,000+ schools, colleges, and universities. Total bike cost is PKR 199,000, with PKR 90,000 government subsidy, PKR 0 down payment, and the remaining PKR 109,000 repaid over 36 months at PKR 3,028/month. A valid driving license or DLIMS learner permit is mandatory."
            answerUr="وزیراعلیٰ پنجاب الیکٹرک بائیک سکیم کے تحت bikes.punjab.gov.pk پر درخواستیں لائیو ہیں (آخری تاریخ 4 اکتوبر 2026)۔ صوبے کے 33,000 سے زائد سکولوں، کالجوں اور یونیورسٹیوں کے طلبہ کے لیے 100,000 ای بائیکس مختص ہیں۔ حکومت 90 ہزار روپے سبسڈی اور مکمل مارک اپ فراہم کر رہی ہے، جبکہ ڈاؤن پیمنٹ صفر اور ماہانہ قسط صرف 3,028 روپے (36 ماہ) ہے۔ ڈرائیونگ لائسنس یا لرنر پرمٹ لازمی ہے۔"
          />

          {/* CONFIRMED OFFICIAL FINANCIAL BREAKDOWN */}
          <section className="p-6 sm:p-8 rounded-3xl bg-emerald-500/10 dark:bg-emerald-950/20 border-2 border-emerald-300 dark:border-emerald-800/60 shadow-sm space-y-5">
            <div className="flex items-center gap-2.5 text-emerald-900 dark:text-emerald-300 font-serif font-extrabold text-lg sm:text-xl">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <h2>Confirmed Official Pricing: Subsidy, Net Cost &amp; Monthly Installments</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              Earlier internet speculation cited contradictory figures ranging between Rs. 2,100 and Rs. 10,000/month. The Government of Punjab has now finalized and announced the official financial schedule for the 100,000 electric bike distribution:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-sans pt-1">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/40 space-y-1">
                <span className="text-slate-500 dark:text-slate-400 text-[11px] block font-medium">Total Bike Price</span>
                <strong className="text-doc-ink dark:text-white block font-bold text-lg font-mono">PKR 199,000</strong>
                <p className="text-slate-500 text-[11px]">Official market listed retail value per electric bike.</p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/40 space-y-1">
                <span className="text-emerald-600 dark:text-emerald-400 text-[11px] block font-bold">Punjab Govt Subsidy</span>
                <strong className="text-emerald-700 dark:text-emerald-300 block font-bold text-lg font-mono">PKR 90,000</strong>
                <p className="text-slate-500 text-[11px]">Direct upfront capital grant paid by the provincial treasury.</p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/40 space-y-1">
                <span className="text-doc-seal dark:text-amber-400 text-[11px] block font-bold">Student Net Principal</span>
                <strong className="text-doc-seal dark:text-amber-400 block font-bold text-lg font-mono">PKR 109,000</strong>
                <p className="text-slate-500 text-[11px]">Total amount repaid by the student with zero advance required.</p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/40 space-y-1">
                <span className="text-blue-600 dark:text-blue-400 text-[11px] block font-bold">Monthly Installment</span>
                <strong className="text-blue-700 dark:text-blue-300 block font-bold text-lg font-mono">PKR 3,028 / mo</strong>
                <p className="text-slate-500 text-[11px]">36 monthly installments (PKR 109,000 ÷ 36 months).</p>
              </div>
            </div>

            {/* Additional Policy Subsidies */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs font-sans">
              <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-emerald-200 dark:border-emerald-800/40">
                <strong className="text-doc-ink dark:text-white block font-bold text-xs mb-1">
                  1. Zero Down Payment (PKR 0 Advance)
                </strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Chief Minister Maryam Nawaz waived the initial down payment requirement. Students are not required to pay PKR 20,000 to PKR 25,000 in upfront cash.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-emerald-200 dark:border-emerald-800/40">
                <strong className="text-doc-ink dark:text-white block font-bold text-xs mb-1">
                  2. 100% Markup &amp; Insurance Covered
                </strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  The Bank of Punjab facility is 100% interest-free for students. Punjab Government pays all commercial markup, comprehensive insurance, and official registration taxes.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-emerald-200 dark:border-emerald-800/40">
                <strong className="text-doc-ink dark:text-white block font-bold text-xs mb-1">
                  3. Free Safety Kit &amp; Training
                </strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Every selected student receives a certified full-face safety helmet, heavy-duty crash protection rods, and free access to a 2-day certified motorcycle safety riding clinic.
                </p>
              </div>
            </div>
          </section>

          {/* Fee Table Visual */}
          <FeeTableVisual
            titleEn="Official Financial Ledger: CM Punjab E-Bike Scheme (2026)"
            titleUr="وزیراعلیٰ پنجاب ای بائیک سکیم: مصدقہ فنانشل و سبسڈی شیڈول 2026"
            subtitleEn="Verified breakdown of motorcycle cost, Punjab government subsidy, student payable principal, and monthly installment schedule"
            subtitleUr="موٹرسائیکل کی کل قیمت، حکومتی سبسڈی، طالب علم کی واجب الادا رقم اور ماہانہ اقساط کا جدول"
            rows={feeScheduleRows}
            noteEn="Important: Applications on bikes.punjab.gov.pk are 100% free. Never pay application fees or agent tokens to anyone."
            noteUr="اہم نوٹ: bikes.punjab.gov.pk پر رجسٹریشن بالکل مفت ہے۔ کسی ایجنٹ یا تھرڈ پارٹی کو کوئی فیس ادا نہ کریں۔"
          />

          {/* Dedicated Section: Pink Electric Bikes for Female Students */}
          <section className="p-6 sm:p-8 rounded-3xl bg-pink-500/10 dark:bg-pink-950/20 border-2 border-pink-300 dark:border-pink-800/60 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-pink-900 dark:text-pink-300 font-serif font-extrabold text-lg sm:text-xl">
              <Heart className="w-6 h-6 text-pink-600 dark:text-pink-400 shrink-0" />
              <h2>Dedicated Pink Electric Bikes &amp; Equal Quota for Female Students</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              A major highlight of this provincial initiative is the strong emphasis on female mobility and financial independence:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans pt-1">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-pink-200 dark:border-pink-800/40 space-y-1.5">
                <span className="text-pink-600 dark:text-pink-400 font-bold uppercase tracking-wider text-[10px] block font-mono">Special Colorway</span>
                <strong className="text-doc-ink dark:text-white block font-bold text-sm">Signature Pink Electric Bikes</strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Female students can select distinctive pink-colored electric scooters/motorcycles engineered specifically with ergonomic step-through frames for comfortable daily commuting.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-pink-200 dark:border-pink-800/40 space-y-1.5">
                <span className="text-pink-600 dark:text-pink-400 font-bold uppercase tracking-wider text-[10px] block font-mono">Equal Allocation</span>
                <strong className="text-doc-ink dark:text-white block font-bold text-sm">Dedicated Female Quota</strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  The scheme implements an equal male-to-female allocation across all 36 Punjab districts, ensuring female students compete fairly within their own dedicated balloting pool.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-pink-200 dark:border-pink-800/40 space-y-1.5">
                <span className="text-pink-600 dark:text-pink-400 font-bold uppercase tracking-wider text-[10px] block font-mono">License Requirement</span>
                <strong className="text-doc-ink dark:text-white block font-bold text-sm">Learner Permit Fully Accepted</strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Female students who do not yet have a permanent motorcycle license can apply using a DLIMS learner driving permit, which can be acquired online in 15 minutes at dlims.punjab.gov.pk.
                </p>
              </div>
            </div>
          </section>

          {/* Broadened Eligibility Criteria Checklist */}
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Prerequisites Checklist</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                Who Is Eligible to Apply on bikes.punjab.gov.pk?
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Eligibility has been expanded province-wide. Verify that you satisfy all six mandatory conditions before submitting:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">1. School, College &amp; University Students</strong>
                  <p className="text-slate-600 dark:text-slate-300">
                    Must be a regular student enrolled in a recognized <strong>school (matric / higher secondary), intermediate college, or university</strong> across 33,000+ public and private registered institutions in Punjab. (Previously limited only to university students).
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">2. Age Limit (Minimum 18 Years)</strong>
                  <p className="text-slate-600 dark:text-slate-300">
                    Applicant must be at least 18 years old on the date of application submission, as mandated under the Motor Vehicles Ordinance to legally obtain a driver&apos;s license and execute banking contracts.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <IdCard className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">3. Valid CNIC / B-Form &amp; Punjab Residence</strong>
                  <p className="text-slate-600 dark:text-slate-300">
                    Must hold a valid 13-digit Computerized National Identity Card (CNIC) or Smart B-Form issued by NADRA, with permanent or educational domicile in Punjab province.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <Car className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">4. Motorcycle License OR Learner Permit</strong>
                  <p className="text-slate-600 dark:text-slate-300">
                    A valid motorcycle Driving License or active Learner&apos;s Driving Permit issued by Punjab Traffic Police / DLIMS is strictly mandatory. If you do not have one, you can acquire an online learner permit in 15 minutes before applying.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">5. Co-Borrower / Financial Guarantor</strong>
                  <p className="text-slate-600 dark:text-slate-300">
                    Because students generally do not possess an independent credit profile, a parent, legal guardian, or blood relative with verifiable CNIC and income/utility proof must co-sign the Bank of Punjab installment agreement.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <Bike className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">6. Single CNIC Registration Rule</strong>
                  <p className="text-slate-600 dark:text-slate-300">
                    Each CNIC is permitted exactly one active application on the PITB portal. Submitting duplicate applications or entering false academic/license details will result in automated system disqualification.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Process Steps Diagram */}
          <ProcessStepsDiagram
            badgeEn="OFFICIAL WORKFLOW (SEPTEMBER - OCTOBER 2026)"
            badgeUr="درخواست کا مرحلہ وار طریقہ کار"
            titleEn="Step-by-Step: How to Apply & Receive Your Electric Bike"
            titleUr="ای بائیک سکیم میں آن لائن اپلائی اور وصولی کا مکمل طریقہ کار"
            subtitleEn="6 verified chronological stages from online portal registration to PITB computerized balloting and zero-advance delivery"
            subtitleUr="رجسٹریشن سے لے کر قرعہ اندازی اور بغیر ایڈوانس ادائیگی بائیک وصولی تک تمام مراحل"
            steps={applicationSteps}
          />

          {/* KEY DIFFERENTIATOR: Side-by-Side Comparison of 3 Schemes */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Avoid Misinformation</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                Comparing 3 Distinct Schemes Often Confused Online
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Citizens frequently confuse the Punjab Student E-Bike Scheme with the provincial Teacher Scheme and the Federal PAVE program. Understand their portals, target audiences, and financial terms:
              </p>
            </div>

            <ComparisonVisual
              titleEn="Punjab Student Bike vs Teacher Bike vs Federal PAVE Program"
              titleUr="طلبہ بائیک سکیم، اساتذہ سکیم اور وفاقی پیو سکیم میں واضح فرق"
              subtitleEn="Official portals, target beneficiaries, financing bodies, and geographic jurisdictions"
              subtitleUr="مستند سرکاری ویب سائٹس، مستفیدین، فنانسنگ پارٹنرز اور دائرہ اختیار"
              items={[
                {
                  titleEn: "CM Punjab Student E-Bike Scheme",
                  titleUr: "وزیراعلیٰ پنجاب طلبہ ای بائیک سکیم",
                  subtitleEn: "bikes.punjab.gov.pk",
                  subtitleUr: "صرف ریگولر سکول، کالج و یونیورسٹی طلبہ کے لیے",
                  badgeEn: "STUDENTS ONLY (OPEN NOW)",
                  badgeUr: "طلبہ کے لیے (لائیو)",
                  badgeVariant: "emerald",
                  pointsEn: [
                    "Open now (5 Sept to 4 Oct 2026) on bikes.punjab.gov.pk.",
                    "100,000 electric bikes for regular school, college, and university students.",
                    "Zero down payment (PKR 0 advance) with PKR 90,000 govt capital subsidy.",
                    "PKR 3,028/month over 36 months via Bank of Punjab (BOP) with zero markup.",
                    "Signature pink electric bikes and equal quota for female students.",
                  ],
                  features: [
                    { labelEn: "Official Portal", valueEn: "bikes.punjab.gov.pk", isPositive: true },
                    { labelEn: "Target Audience", valueEn: "Schools, Colleges & Unis", isPositive: true },
                    { labelEn: "Down Payment", valueEn: "PKR 0 (Waived Off)", isPositive: true },
                    { labelEn: "Monthly EMI", valueEn: "PKR 3,028 / month (36 mos)", isPositive: true },
                    { labelEn: "Financing Partner", valueEn: "Bank of Punjab (0% Markup)", isPositive: true },
                  ],
                  recommendedForEn: "Full-time students in Punjab seeking affordable, eco-friendly daily transport with zero advance payment.",
                },
                {
                  titleEn: "CM Punjab Teacher E-Bike Scheme",
                  titleUr: "وزیراعلیٰ پنجاب اساتذہ ای بائیک سکیم",
                  subtitleEn: "ptf.punjab.gov.pk",
                  subtitleUr: "پنجاب ٹیچرز فاؤنڈیشن برائے سرکاری اساتذہ",
                  badgeEn: "GOVT TEACHERS",
                  badgeUr: "اساتذہ کے لیے",
                  badgeVariant: "brass",
                  pointsEn: [
                    "Administered separately by the Punjab Teachers Foundation (PTF).",
                    "Applications accepted via ptf.punjab.gov.pk (NOT bikes.punjab.gov.pk).",
                    "Restricted to permanent or contract government school teachers (up to 55 years).",
                    "Requires employee payslip, service certificate, and driving license.",
                    "Subsidized interest-free installments to relieve teacher commuting expenses.",
                  ],
                  features: [
                    { labelEn: "Official Portal", valueEn: "ptf.punjab.gov.pk", isPositive: true },
                    { labelEn: "Target Audience", valueEn: "Government School Teachers", isPositive: true },
                    { labelEn: "Down Payment", valueEn: "Varies by Teacher Grade", isPositive: null },
                    { labelEn: "Geographic Scope", valueEn: "Punjab Province Only", isPositive: null },
                    { labelEn: "Financing Body", valueEn: "Punjab Teachers Foundation", isPositive: true },
                  ],
                  recommendedForEn: "Serving public school educators in Punjab needing green, cost-effective daily travel.",
                },
                {
                  titleEn: "Federal PAVE Electric Vehicle Program",
                  titleUr: "وفاقی پیو (PAVE) الیکٹرک وہیکل سبسڈی پروگرام",
                  subtitleEn: "pave.gov.pk",
                  subtitleUr: "وفاقی حکومت کا ملک گیر سبسڈی پروگرام",
                  badgeEn: "NATIONWIDE FEDERAL",
                  badgeUr: "ملک گیر وفاقی",
                  badgeVariant: "blue",
                  pointsEn: [
                    "Initiated by Federal Ministry of Industries & Production / EDB.",
                    "Applications processed at pave.gov.pk.",
                    "Open to all Pakistani citizens nationwide across all four provinces, AJK & GB.",
                    "Covers electric two-wheelers, e-rickshaws, and electric three-wheeler cargo loaders.",
                    "Direct upfront SBP cash subsidy (PKR 50,000 to PKR 80,000) deposited post-delivery.",
                  ],
                  features: [
                    { labelEn: "Official Portal", valueEn: "pave.gov.pk", isPositive: true },
                    { labelEn: "Target Audience", valueEn: "General Public Nationwide", isPositive: true },
                    { labelEn: "Down Payment", valueEn: "Paid to Manufacturer", isPositive: null },
                    { labelEn: "Geographic Scope", valueEn: "All Pakistan (Federal)", isPositive: null },
                    { labelEn: "Subsidy Mechanism", valueEn: "State Bank Direct Subsidy", isPositive: true },
                  ],
                  recommendedForEn: "Citizens, delivery riders, and commercial transporters across Pakistan wanting federal EV grants.",
                },
              ]}
            />
          </section>

          {/* Dedicated Cross-Link for Punjab Government Teachers */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm font-sans">
            <div className="space-y-1">
              <span className="text-amber-800 dark:text-amber-300 font-bold uppercase tracking-wider text-[11px] block font-mono">
                Looking for Punjab School Teachers Scheme?
              </span>
              <p className="text-slate-700 dark:text-slate-300">
                Government school teachers apply through the separate <strong>Punjab Teachers Foundation (PTF) E-Bike Scheme</strong> on <code className="text-amber-800 dark:text-amber-300 font-bold">ptf.punjab.gov.pk</code> with 30–40% subsidy and interest-free installments.
              </p>
            </div>
            <Link
              href="/education/ptf-punjab-teacher-e-bike-scheme-2026"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs shrink-0 shadow-sm transition"
            >
              <span>Read Teacher E-Bike Guide</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Scam Protection Alert */}
          <section className="p-6 sm:p-8 rounded-3xl bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-300 dark:border-rose-800 space-y-4">
            <div className="flex items-center gap-2.5 text-rose-800 dark:text-rose-300 font-serif font-extrabold text-xl">
              <ShieldCheck className="w-6 h-6 text-rose-600 dark:text-rose-400 shrink-0" />
              <h2>Scam Warning: 100% Free Registration &amp; Automated E-Balloting</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              With applications live, fraudsters on Facebook, TikTok, WhatsApp, and Telegram attempt to deceive students with fake &quot;guaranteed allotment&quot; claims. Keep these protective facts in mind:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs font-sans">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900 space-y-1.5">
                <strong className="text-rose-700 dark:text-rose-400 block font-bold">100% Automated PITB Draw</strong>
                <p className="text-slate-600 dark:text-slate-300">
                  Balloting is managed algorithmically by the Punjab Information Technology Board (PITB). No politician, dealer, bank officer, or agent can guarantee selection.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900 space-y-1.5">
                <strong className="text-rose-700 dark:text-rose-400 block font-bold">Zero Application Fee</strong>
                <p className="text-slate-600 dark:text-slate-300">
                  Registering on bikes.punjab.gov.pk is completely free. Anyone asking for &quot;token fees&quot; or &quot;scrutiny charges&quot; via JazzCash, EasyPaisa, or Nayapay is an illegal scammer.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900 space-y-1.5">
                <strong className="text-rose-700 dark:text-rose-400 block font-bold">Avoid Third-Party Portals</strong>
                <p className="text-slate-600 dark:text-slate-300">
                  Never submit your CNIC, password, or student credentials on unofficial blog websites or mock &quot;result checker&quot; forms that harvest private student data.
                </p>
              </div>
            </div>
          </section>

          {/* Tracking Application Status Stages */}
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center gap-2 text-doc-ink dark:text-white font-serif font-extrabold text-xl">
              <Info className="w-5 h-5 text-doc-brass shrink-0" />
              <h2>How to Track Your Application Status on bikes.punjab.gov.pk</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              After submitting your profile, log into <a href="https://bikes.punjab.gov.pk" target="_blank" rel="noopener noreferrer" className="text-doc-seal dark:text-amber-400 underline font-mono font-bold">bikes.punjab.gov.pk</a> with your CNIC and password. Your personal student dashboard displays one of the following official status badges:
            </p>

            <div className="space-y-3 font-sans text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-[11px] font-bold shrink-0 mt-0.5">SUBMITTED</span>
                <div>
                  <strong className="text-doc-ink dark:text-white block font-bold">Application Successfully Received</strong>
                  <p className="text-slate-600 dark:text-slate-300">Your profile, educational record, and driving license details have been logged into the PITB database awaiting institutional verification.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono text-[11px] font-bold shrink-0 mt-0.5">UNDER SCRUTINY</span>
                <div>
                  <strong className="text-doc-ink dark:text-white block font-bold">Verification in Progress</strong>
                  <p className="text-slate-600 dark:text-slate-300">Your educational institution is certifying your regular enrollment, and your motorcycle license or DLIMS learner permit is being cross-checked against Punjab Traffic Police databases.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[11px] font-bold shrink-0 mt-0.5">SELECTED IN BALLOT</span>
                <div>
                  <strong className="text-doc-ink dark:text-white block font-bold">Successful in Computerized Draw</strong>
                  <p className="text-slate-600 dark:text-slate-300">Congratulations! Your name was drawn in the computerized e-ballot. Download the Bank of Punjab verification letter and follow instructions to visit your assigned branch.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-mono text-[11px] font-bold shrink-0 mt-0.5">BOP PROCESSING</span>
                <div>
                  <strong className="text-doc-ink dark:text-white block font-bold">Zero-Markup Facility Approval</strong>
                  <p className="text-slate-600 dark:text-slate-300">Bank of Punjab branch officers have approved your co-borrower&apos;s documentation. Collect your delivery dispatch token to claim your vehicle without paying any upfront down payment.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-slate-500/10 text-slate-600 dark:text-slate-400 font-mono text-[11px] font-bold shrink-0 mt-0.5">NOT SELECTED</span>
                <div>
                  <strong className="text-doc-ink dark:text-white block font-bold">Retained for Subsequent Allocation Batches</strong>
                  <p className="text-slate-600 dark:text-slate-300">Your profile was not drawn in this initial balloting round due to quota limits. Your verified data remains securely archived in the PITB system for consideration in ongoing provincial expansion batches without re-registering.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Ad Zone */}
          <AdPlacementZone format="horizontal" />

          {/* Cross-linking Section */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
              <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
                Related Student Welfare &amp; Licensing Utilities on Pakistan Info Hub
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link
                href="/education/pm-laptop-scheme-2026-eligibility-status-check"
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
              >
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Federal Welfare</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  PM Laptop Scheme 2026 →
                </h3>
                <p className="text-xs text-slate-500 mt-1">Check merit lists, student eligibility, and HEC distribution schedules.</p>
              </Link>

              <Link
                href="/traffic/driving-license-online-apply-renewal-dlims-2026"
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
              >
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Mandatory Prerequisite</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  DLIMS Driving License Online →
                </h3>
                <p className="text-xs text-slate-500 mt-1">How to obtain an instant online motorcycle learner permit in 15 minutes.</p>
              </Link>

              <Link
                href="/education/hec-degree-attestation-new-blockchain-system-2026"
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
              >
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Academic Verification</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  HEC Degree Attestation →
                </h3>
                <p className="text-xs text-slate-500 mt-1">Verify recognized universities, degree programs, and QR credentials.</p>
              </Link>
            </div>
          </section>

          {/* FAQ Accordion Visual */}
          <FAQAccordionVisual
            titleEn="Frequently Asked Questions: CM Punjab E-Bike Scheme 2026"
            titleUr="عام طور پر پوچھے جانے والے ضروری سوالات و جوابات"
            subtitleEn="Confirmed answers on open application dates, school/college eligibility, zero down payment, pink bikes, and installment schedules"
            subtitleUr="درخواست کی تاریخوں، سکول و کالج کی اہلیت، صفر ڈاؤن پیمنٹ، پنک بائیکس اور اقساط سے متعلق اہم سوالات"
            items={[
              {
                questionEn: "When do online applications open and what is the last date to apply?",
                questionUr: "آن لائن درخواستیں کب کھلی ہیں اور اپلائی کرنے کی آخری تاریخ کیا ہے؟",
                answerEn: "Chief Minister Maryam Nawaz officially announced the opening of online applications on September 5, 2026. The official portal bikes.punjab.gov.pk is accepting applications until the deadline of October 4, 2026.",
                answerUr: "وزیراعلیٰ مریم نواز کے اعلان کے مطابق آن لائن درخواستیں 5 ستمبر 2026 سے لائیو ہیں اور اپلائی کرنے کی آخری تاریخ 4 اکتوبر 2026 ہے۔",
              },
              {
                questionEn: "Are school and college students eligible to apply, or only university students?",
                questionUr: "کیا سکول اور کالج کے طلبہ بھی اہل ہیں یا صرف یونیورسٹی کے؟",
                answerEn: "Eligibility has been significantly broadened. Regular students of recognized schools (matriculation/intermediate levels), colleges, and universities across 33,000+ public and private institutions throughout Punjab are now eligible to apply, provided they are at least 18 years old and possess a motorcycle driving license or learner permit.",
                answerUr: "اہلیت کا دائرہ کار وسیع کر دیا گیا ہے۔ پنجاب کے 33 ہزار سے زائد سرکاری و نجی سکولوں (میٹرک و انٹر)، کالجوں اور یونیورسٹیوں کے باقاعدہ طلبہ اپلائی کر سکتے ہیں بشرطیکہ ان کی عمر 18 سال ہو اور ان کے پاس لرنر پرمٹ یا لائسنس ہو۔",
              },
              {
                questionEn: "What is the exact price, down payment, and monthly installment for students?",
                questionUr: "طلبہ کے لیے بائیک کی کل قیمت، ڈاؤن پیمنٹ اور ماہانہ قسط کتنی ہے؟",
                answerEn: "The total market price of the electric bike is PKR 199,000. The Punjab Government pays a direct subsidy of PKR 90,000, reducing the student's payable principal to PKR 109,000. Initial down payment is PKR 0 (completely waived off). The remaining PKR 109,000 is repaid in 36 monthly installments of approximately PKR 3,028 per month with zero bank markup.",
                answerUr: "الیکٹرک بائیک کی کل قیمت 199,000 روپے ہے۔ پنجاب حکومت 90,000 روپے کی براہ راست کیش سبسڈی دے رہی ہے، جس کے بعد طالب علم کی اصل واجب الادا رقم 109,000 روپے ہے۔ ڈاؤن پیمنٹ صفر (0 روپے) ہے اور ماہانہ قسط صرف 3,028 روپے (36 ماہ کے لیے) بغیر کسی سود کے ہے۔",
              },
              {
                questionEn: "Are pink-colored electric bikes specifically reserved for female students?",
                questionUr: "کیا طالبات کے لیے خصوصی پنک (گلابی) الیکٹرک بائیکس دستیاب ہیں؟",
                answerEn: "Yes! To support female student mobility and encourage green commuting, the Punjab Government has specifically manufactured pink-colored electric bikes for female applicants, supported by an equal male-to-female quota across all 36 Punjab districts and complimentary safety helmets.",
                answerUr: "جی ہاں! طالبات کے تحفظ اور خود مختاری کے لیے حکومت نے خصوصی طور پر گلابی (Pink) الیکٹرک بائیکس مختص کی ہیں، جن کے لیے تمام 36 اضلاع میں مساوی کوٹہ اور مفت حفاظتی ہیلمٹ فراہم کیے جا رہے ہیں۔",
              },
              {
                questionEn: "Can I apply using a Learner Driving Permit instead of a permanent driving license?",
                questionUr: "اگر میرے پاس پکا ڈرائیونگ لائسنس نہ ہو تو کیا لرنر پرمٹ پر اپلائی ہو سکتا ہے؟",
                answerEn: "Yes! A valid motorcycle Learner's Driving Permit issued by Punjab Traffic Police / DLIMS is fully acceptable for application submission. You can obtain an instant online learner permit in 15 minutes at dlims.punjab.gov.pk and enter its tracking number on bikes.punjab.gov.pk.",
                answerUr: "جی ہاں! پنجاب ٹریفک پولیس کا کمپیوٹرائزڈ لرنر پرمٹ مکمل طور پر قبول کیا جاتا ہے۔ آپ dlims.punjab.gov.pk سے 15 منٹ میں لرنر حاصل کر کے اس کا نمبر بائیک پورٹل پر درج کر سکتے ہیں۔",
              },
              {
                questionEn: "How does the computerized balloting work and how are winners selected?",
                questionUr: "کمپیوٹرائزڈ قرعہ اندازی کا طریقہ کار کیا ہے اور کامیاب امیدوار کیسے چنے جاتے ہیں؟",
                answerEn: "All verified applications enter an automated, algorithmic provincial draw conducted transparently by the Punjab Information Technology Board (PITB). The draw adheres strictly to district quotas and gender allocation ratios. Results are announced publicly on bikes.punjab.gov.pk.",
                answerUr: "اہل امیدواروں کا انتخاب پنجاب انفارمیشن ٹیکنالوجی بورڈ (PITB) کی شفاف کمپیوٹرائزڈ قرعہ اندازی کے ذریعے ضلعی کوٹہ اور مساوی تناسب کے تحت خودکار طریقے سے کیا جاتا ہے، جس کے نتائج پورٹل پر دیکھے جا سکتے ہیں۔",
              },
              {
                questionEn: "Is there any application or processing fee on bikes.punjab.gov.pk?",
                questionUr: "کیا پورٹل پر درخواست جمع کرانے کی کوئی فیس ہے؟",
                answerEn: "No. Registration and application submission on the official portal bikes.punjab.gov.pk is 100% free of charge. Do not pay any agent, third-party blog, or social media caller for application processing.",
                answerUr: "بالکل نہیں! آفیشل پورٹل پر رجسٹریشن مکمل طور پر مفت ہے۔ کسی بھی ایجنٹ یا غیر مصدقہ ویب سائٹ کو کوئی فیس ادا نہ کریں۔",
              },
            ]}
          />
        </article>
      </main>
    </>
  );
}
