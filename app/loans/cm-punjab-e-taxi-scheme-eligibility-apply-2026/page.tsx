import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { RelatedArticles } from '@/components/RelatedArticles';
import {
  ProcessStepsDiagram,
  FeeTableVisual,
} from '@/components/visuals';
import {
  Car,
  ShieldCheck,
  AlertTriangle,
  ExternalLink,
  CheckCircle2,
  Clock,
  Zap,
  Sparkles,
  Info,
  Check,
  XCircle,
  Smartphone,
  Building2,
  FileCheck2,
  ArrowRight,
  MapPin,
  FileText,
  PhoneCall,
  Scale,
  Landmark,
  BadgeAlert,
  HelpCircle,
  Radio,
  UserCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'CM Punjab E-Taxi Scheme 2026: Eligibility, Portal Status & Installment Plan',
  description:
    'Authoritative guide to CM Maryam Nawaz E-Taxi Scheme Punjab 2026. Check official portal status (e-taxi.punjab.gov.pk), verified 0% markup 5-year installment terms, 60% women subsidy, fake domain warnings (ebiz.punjab-govt.pk), and Phase 2 updates.',
  keywords: [
    'cm punjab e taxi scheme 2026',
    'e-taxi punjab gov pk official portal',
    'punjab electric taxi installment plan',
    'cm maryam nawaz e taxi scheme eligibility',
    'ebiz punjab-govt pk fake domain alert',
    'punjab e taxi phase 2 registration date',
    'electric taxi subsidy women quota punjab',
    'pitb e taxi scheme helpline 042 111 333 267',
  ],
  openGraph: {
    title: 'CM Punjab E-Taxi Scheme 2026: Eligibility, Portal Status & Installment Plan',
    description:
      'Verified guide to CM Punjab Electric Taxi Scheme: official portal status, 0% markup financing, confirmed criteria vs unconfirmed media claims, and anti-scam warnings.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/loans/cm-punjab-e-taxi-scheme-eligibility-apply-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/loans/cm-punjab-e-taxi-scheme-eligibility-apply-2026',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com/' },
        { '@type': 'ListItem', position: 2, name: 'Govt Loan Schemes', item: 'https://www.pakistaninfohub.com/loans' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'CM Punjab E-Taxi Scheme 2026',
          item: 'https://www.pakistaninfohub.com/loans/cm-punjab-e-taxi-scheme-eligibility-apply-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'CM Punjab E-Taxi Scheme 2026: Eligibility, Portal Status & Installment Plan',
      description:
        'Detailed breakdown of the Punjab Chief Minister Electric Taxi Scheme: verified government portal, Phase 1 pilot rollout, financial terms, confirmed prerequisites, and scam warnings against fake registration domains.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/loans/cm-punjab-e-taxi-scheme-eligibility-apply-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How the CM Punjab E-Taxi Scheme Official Application and Allocation Works',
      description:
        'Official 5-step procedure from licensing verification to digital submission via e-taxi.punjab.gov.pk, balloting, down payment subsidy, and vehicle handover.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Verify Driving License & Residency',
          text: 'Confirm possession of a valid CNIC with Punjab domicile and an unexpired LTV or HTV commercial driving license.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Apply via Official Portal (When Active)',
          text: 'Submit driver details only through the verified PITB portal at e-taxi.punjab.gov.pk. Avoid unverified third-party domains.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'PITB Transparent Digital Balloting',
          text: 'Clear computerized balloting conducted by PITB and the Punjab Transport Department to allocate vehicles fairly.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Down Payment & BOP Financing Execution',
          text: 'Deposit the applicant share of down payment (subsidized 50% for general, 60% for women) and execute 5-year zero-markup financing via Bank of Punjab.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Vehicle Handover & PSCA Integration',
          text: 'Take delivery of the electric taxi, equipped with PSCA emergency panic buttons and authorized ride-hailing tracking.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the CM Punjab E-Taxi Scheme portal currently open for new applications?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Phase 1 registration (piloted with 1,100 electric vehicles in Lahore) is currently closed. Applications for Phase 2 expansion across 148 Punjab tehsils have not officially opened yet. Beware of fake sites claiming registration is active.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the genuine official portal URL for the Punjab E-Taxi Scheme?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The only authentic official portal is e-taxi.punjab.gov.pk, maintained by the Punjab Information Technology Board (PITB). Third-party websites such as ebiz.punjab-govt.pk are unverified and fraudulent.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the confirmed financial terms and subsidies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The scheme provides 100% interest-free (zero markup) financing over a 5-year repayment tenure (60 monthly installments) with a 3-month initial grace period. The Punjab government provides a 50% down-payment subsidy for general male applicants and a 60% down-payment subsidy for female drivers.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the confirmed vs unconfirmed eligibility criteria?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Officially confirmed: Punjab domicile, valid CNIC, active LTV/HTV driving license, clean police record, and no bank loan defaults. Unconfirmed media claims: exact age limits (variously reported as 21-45 or 21-55) and an annual income cap of Rs. 600,000, which have not been verified by an official gazette notification.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I contact the official helpline for the E-Taxi scheme?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can contact the official PITB citizen helpline at 042-111-333-267 (Monday to Friday, 9:00 AM to 5:00 PM) or email support@etaxi.pitb.gov.pk.',
          },
        },
      ],
    },
  ],
};

const verifiedCriteria = [
  {
    parameter: 'Residency & Identity',
    status: 'Verified Official',
    details: 'Valid Computerized National Identity Card (CNIC) with permanent Punjab residency.',
    officialSource: 'Punjab Transport Department Gazette',
  },
  {
    parameter: 'Driving License',
    status: 'Verified Official',
    details: 'Valid, unexpired commercial driving license (LTV or HTV) registered in Punjab DLIMS.',
    officialSource: 'Punjab Traffic Police / DLIMS',
  },
  {
    parameter: 'Criminal & Police Clearance',
    status: 'Verified Official',
    details: 'Clean record with zero criminal convictions; verified via Police Khidmat Markaz (PKM).',
    officialSource: 'Punjab Safe Cities Authority / Police',
  },
  {
    parameter: 'Credit History',
    status: 'Verified Official',
    details: 'Applicant must not be an active loan defaulter in the State Bank of Pakistan e-CIB credit database.',
    officialSource: 'Bank of Punjab (BOP) Financing Guidelines',
  },
  {
    parameter: 'Financing Markup',
    status: 'Verified Official',
    details: 'Strictly 0% interest (zero markup), fully subsidized by the Government of Punjab over 5 years.',
    officialSource: 'CM Punjab Green Mobility Vision 2030',
  },
  {
    parameter: 'Women Driver Quota',
    status: 'Verified Official',
    details: '30% reserved vehicle quota for female drivers with enhanced 60% down-payment subsidy (vs 50% for men).',
    officialSource: 'CM Punjab Secretariat Policy Directives',
  },
];

const unconfirmedCriteria = [
  {
    parameter: 'Age Bracket',
    status: 'Unconfirmed / Conflicted',
    details: 'Widely cited in media as 21–45 years, while some secondary portals claim 21–55 years. Official notification for Phase 2 has not confirmed the final cap.',
    caution: 'Do not pay any intermediary claiming an age waiver.',
  },
  {
    parameter: 'Annual Income Ceiling',
    status: 'Unconfirmed / Speculative',
    details: 'Some unofficial blogs report a maximum annual income ceiling of Rs. 600,000 (~Rs. 50,000/month), but this is not specified in the official scheme gazette.',
    caution: 'Wait for the official Phase 2 portal guidelines before self-disqualifying.',
  },
  {
    parameter: 'Educational Qualification',
    status: 'Unconfirmed / Preferential',
    details: 'Content farms suggest Matriculation is mandatory; however, government releases indicate priority for educated youth without disqualifying experienced drivers.',
    caution: 'Driving license and clean record remain the primary statutory barriers.',
  },
];

const financingRows = [
  {
    serviceEn: 'Government Down-Payment Subsidy (General / Male)',
    serviceUr: 'حکومتی ڈاؤن پیمنٹ سبسڈی (عام / مرد ڈرائیورز)',
    normal: '50% Govt Covered',
    urgent: 'Direct Provincial Grant',
    validity: 'Phase 1 Terms',
  },
  {
    serviceEn: 'Government Down-Payment Subsidy (Women Drivers)',
    serviceUr: 'حکومتی ڈاؤن پیمنٹ سبسڈی (خواتین ڈرائیورز)',
    normal: '60% Govt Covered',
    urgent: 'Enhanced Provincial Grant',
    validity: '30% Women Quota',
  },
  {
    serviceEn: 'Financing Markup Rate (Interest)',
    serviceUr: 'شرح سود / مارک اپ',
    normal: '0% (Interest-Free)',
    urgent: 'Zero Hidden Charges',
    validity: '60 Months Tenor',
  },
  {
    serviceEn: 'Repayment Tenure',
    serviceUr: 'قرض کی واپسی کی مدت',
    normal: '5 Years (60 Months)',
    urgent: '3-Month Initial Grace Period',
    validity: 'Bank of Punjab Facility',
  },
  {
    serviceEn: 'Safety Equipment & Smart Integration',
    serviceUr: 'حفاظتی آلات اور سمارٹ کیمرہ',
    normal: '100% Free Standard',
    urgent: 'PSCA Panic Button + GPS',
    validity: 'Factory Fitted',
  },
];

const stepItems = [
  {
    stepNumber: 1,
    titleEn: 'Check Statutory Eligibility & License',
    titleUr: 'بنیادی اہلیت اور ڈرائیونگ لائسنس کی جانچ',
    detailEn:
      'Ensure you possess an unexpired Punjab-issued LTV or HTV license, permanent Punjab CNIC domicile, and no active bank defaults.',
    detailUr:
      'پنجاب کا جاری کردہ کارآمد ایل ٹی وی یا ایچ ٹی وی لائسنس، مستقل شناختی کارڈ اور بینک نادہندگی نہ ہونے کی تسلی کریں۔',
  },
  {
    stepNumber: 2,
    titleEn: 'Monitor Official Portal (e-taxi.punjab.gov.pk)',
    titleUr: 'سرکاری پورٹل پر نظر رکھیں (e-taxi.punjab.gov.pk)',
    detailEn:
      'Only access the authentic .gov.pk address. Never register or submit CNIC data on unauthorized third-party phishing domains.',
    detailUr:
      'صرف مستند ڈومین پر معلومات دیکھیں۔ کسی بھی غیر سرکاری یا جعلی ویب سائٹ پر اپنا شناختی کارڈ ہرگز درج نہ کریں۔',
  },
  {
    stepNumber: 3,
    titleEn: 'Computerized Transparent Balloting (PITB)',
    titleUr: 'پی آئی ٹی بی کی خودکار شفاف قرعہ اندازی',
    detailEn:
      'Upon intake closure, PITB runs an automated public balloting process to select quota-allocated recipients fairly.',
    detailUr:
      'رجسٹریشن بند ہونے پر پنجاب انفارمیشن ٹیکنالوجی بورڈ تمام کوٹہ جات کے تحت کمپیوٹرائزڈ قرعہ اندازی کرے گا۔',
  },
  {
    stepNumber: 4,
    titleEn: 'Submit Remaining Down Payment at BOP',
    titleUr: 'بینک آف پنجاب میں ڈاؤن پیمنٹ کا بقایا حصہ جمع کروانا',
    detailEn:
      'Shortlisted winners deposit their respective 40% (women) or 50% (men) share of the vehicle down payment at designated Bank of Punjab branches.',
    detailUr:
      'کامیاب امیدوار بینک آف پنجاب میں اپنے حصے کی ڈاؤن پیمنٹ جمع کروا کر بلاسود 5 سالہ فنانسنگ کا معاہدہ دستخط کریں گے۔',
  },
  {
    stepNumber: 5,
    titleEn: 'Electric Vehicle Delivery & Safety Onboarding',
    titleUr: 'گاڑی کی ڈیلیوری اور سیف سٹی انٹیگریشن',
    detailEn:
      'Receive your electric taxi fitted with a direct emergency panic button linked to the Punjab Safe Cities Authority (PSCA) and connected to approved ride-hailing apps.',
    detailUr:
      'گاڑی حاصل کریں جس میں سیف سٹیز اتھارٹی سے منسلک ایمرجنسی پینک بٹن اور رائیڈ ہیلنگ ایپس کی سہولت شامل ہے۔',
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen bg-sand-50 dark:bg-navy-950 text-navy-950 dark:text-sand-50 transition-colors py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { nameEn: 'Govt Loan Schemes', nameUr: 'سرکاری قرضہ سکیمیں', url: '/loans' },
              {
                nameEn: 'CM Punjab E-Taxi Scheme 2026',
                nameUr: 'وزیراعلیٰ پنجاب ای ٹیکسی سکیم 2026',
                url: '/loans/cm-punjab-e-taxi-scheme-eligibility-apply-2026',
              },
            ]}
          />

          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <VerifiedBadge
              textEn="Official Punjab Transport Initiative"
              textUr="پنجاب ٹرانسپورٹ ڈیپارٹمنٹ کا تصدیق شدہ منصوبہ"
            />
            <InteractiveToolBadge
              variant="navy"
              labelEn="Anti-Scam & Sourcing Audit"
              labelUr="فراڈ سے بچاؤ اور مصدقہ معلومات"
            />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
              <Clock className="w-3.5 h-3.5" />
              Phase 1 Concluded · Phase 2 Pending
            </span>
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-950 dark:text-sand-50 tracking-tight leading-tight">
              CM Punjab E-Taxi Scheme 2026: Official Portal Status, Eligibility & Installment Plan
            </h1>
            <p className="text-base sm:text-lg text-navy-800/80 dark:text-sand-200/80 leading-relaxed font-sans">
              A transparent, scam-resilient guide to Chief Minister Maryam Nawaz Sharif&apos;s electric taxi initiative.
              Learn which requirements are officially codified, how the 0% markup 5-year financing operates, and how to protect
              yourself from fraudulent imitation websites.
            </p>
          </div>

          {/* Status Advisory Alert: CLOSED FOR PHASE 1 */}
          <div className="rounded-2xl p-5 sm:p-6 bg-amber-500/10 border-2 border-amber-500/30 text-navy-950 dark:text-sand-50 space-y-3 shadow-sm">
            <div className="flex items-start gap-3">
              <BadgeAlert className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h2 className="text-lg font-bold text-amber-900 dark:text-amber-300 font-serif">
                  Current Portal Status: Phase 1 Concluded (Do Not Fall for Fake Forms)
                </h2>
                <p className="text-sm leading-relaxed text-amber-950/80 dark:text-amber-200/90 font-sans">
                  The initial pilot intake for 1,100 electric vehicles in Lahore concluded with computerized balloting.
                  The official registration portal at{' '}
                  <strong className="underline decoration-amber-500 font-mono">e-taxi.punjab.gov.pk</strong> is currently{' '}
                  <span className="font-semibold text-rose-600 dark:text-rose-400">CLOSED</span> for new applicant submissions.
                  Phase 2 expansion across 148 tehsils is scheduled for future notification. Any platform claiming you can
                  &quot;apply today for guaranteed selection&quot; is fraudulent.
                </p>
              </div>
            </div>
          </div>

          {/* CRITICAL SCAM ADVISORY & PHISHING WARNING */}
          <div className="rounded-2xl p-6 bg-rose-500/10 border-2 border-rose-500/40 text-navy-950 dark:text-sand-50 space-y-4 shadow-md">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-7 h-7 text-rose-600 dark:text-rose-400 shrink-0 mt-1" />
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-rose-900 dark:text-rose-300 font-serif">
                  Scam Warning: Beware of Fake Domains Like ebiz.punjab-govt.pk
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-navy-900/90 dark:text-sand-100 font-sans">
                  Independent security audits have flagged fraudulent phishing portals such as{' '}
                  <code className="bg-rose-100 dark:bg-rose-900/40 px-2 py-0.5 rounded text-rose-700 dark:text-rose-300 font-mono text-xs sm:text-sm">
                    ebiz.punjab-govt.pk
                  </code>{' '}
                  attempting to impersonate Punjab Government portals by inserting hyphens (e.g. <em>punjab-govt.pk</em> instead of{' '}
                  <em>punjab.gov.pk</em>).
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-sans">
                  <div className="p-3 rounded-xl bg-white/60 dark:bg-navy-900/60 border border-rose-200 dark:border-rose-900/50">
                    <span className="font-bold text-rose-700 dark:text-rose-300 block mb-1">
                      Fake Domain Red Flags:
                    </span>
                    <ul className="list-disc list-inside space-y-1 text-navy-800 dark:text-sand-200">
                      <li>Uses hyphens like <code>-govt.pk</code> or ends in <code>.online</code>, <code>.pk</code>.</li>
                      <li>Demands &quot;processing fees&quot; via JazzCash, EasyPaisa, or WhatsApp agents.</li>
                      <li>Promises &quot;100% quota allotment without balloting&quot;.</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-xl bg-white/60 dark:bg-navy-900/60 border border-emerald-300 dark:border-emerald-800">
                    <span className="font-bold text-emerald-700 dark:text-emerald-300 block mb-1">
                      Genuine Official Channels:
                    </span>
                    <ul className="list-disc list-inside space-y-1 text-navy-800 dark:text-sand-200">
                      <li>Domain ends strictly in <strong>.punjab.gov.pk</strong> or <strong>.gov.pk</strong>.</li>
                      <li>Official e-Taxi URL is only <code>e-taxi.punjab.gov.pk</code>.</li>
                      <li>All government challans are paid via secure PSID through <strong>e-Pay Punjab</strong>.</li>
                    </ul>
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href="/loans/how-to-spot-fake-loan-scheme-scams-2026"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-rose-700 dark:text-rose-300 hover:underline"
                  >
                    Read our full guide: How to Spot Fake Government Loan Scheme Scams in Pakistan 2026
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Answer Box */}
          <DirectAnswerBox
            topicTitleEn="Direct Answer: CM Punjab E-Taxi Scheme Status & Eligibility (2026)"
            topicTitleUr="خلاصہ: وزیراعلیٰ پنجاب ای ٹیکسی سکیم سٹیٹس و اہلیت"
            answerEn="The CM Punjab E-Taxi Scheme is a provincial green mobility and youth self-employment initiative providing interest-free (0% markup) financing over 5 years for commercial electric taxis, backed by a 50% government down-payment subsidy for men and a 60% subsidy for women drivers. Phase 1 registration (1,100 vehicles in Lahore) is currently closed. For Phase 2, applications will only be accepted through the verified PITB portal (e-taxi.punjab.gov.pk) or through official announcements on punjab.gov.pk. Never trust unverified third-party domains."
            answerUr="وزیراعلیٰ پنجاب ای ٹیکسی سکیم نوجوانوں کو روزگار اور ماحول دوست سفر کی فراہمی کے لیے 5 سالہ بلاسود فنانسنگ کا منصوبہ ہے۔ حکومت مرد ڈرائیوروں کے لیے 50 فیصد اور خواتین کے لیے 60 فیصد ڈاؤن پیمنٹ خود ادا کرتی ہے۔ فیز 1 کی رجسٹریشن بند ہو چکی ہے۔ فیز 2 کے آغاز پر صرف مستند سرکاری پورٹل (e-taxi.punjab.gov.pk) کے ذریعے ہی درخواستیں لی جائیں گی۔ کسی غیر تصدیق شدہ ویب سائٹ پر بھروسہ نہ کریں۔"
          />

          <AdPlacementZone slotId="loan-top" format="horizontal" />

          {/* Scheme Overview & Core Value Proposition */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 dark:text-sand-50">
              Scheme Overview: Green Mobility Meets Economic Empowerment
            </h2>
            <p className="text-base text-navy-800/80 dark:text-sand-200/80 leading-relaxed font-sans">
              Inaugurated as part of the Punjab Green Mobility Vision 2030, the Electric Taxi Scheme addresses two critical
              challenges simultaneously: combating urban smog and air pollution in major metropolitan hubs, and creating viable
              livelihood opportunities for unemployed youth and professional commercial drivers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-sand-100 dark:bg-navy-900 border border-sand-200 dark:border-navy-800 space-y-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-950 dark:text-sand-50 font-serif">100% Electric Taxis</h3>
                <p className="text-xs text-navy-800/70 dark:text-sand-200/70 font-sans leading-relaxed">
                  Equipped with high-efficiency battery packs designed for urban commutes, cutting operational fuel costs by over 70% compared to petrol/CNG cabs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-sand-100 dark:bg-navy-900 border border-sand-200 dark:border-navy-800 space-y-2">
                <div className="w-10 h-10 rounded-lg bg-brass-500/10 flex items-center justify-center text-brass-600 dark:text-brass-400">
                  <Landmark className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-950 dark:text-sand-50 font-serif">Zero-Markup Financing</h3>
                <p className="text-xs text-navy-800/70 dark:text-sand-200/70 font-sans leading-relaxed">
                  Financed through the Bank of Punjab (BOP) with all bank markup and interest absorbed directly by the provincial exchequer.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-sand-100 dark:bg-navy-900 border border-sand-200 dark:border-navy-800 space-y-2">
                <div className="w-10 h-10 rounded-lg bg-navy-600/10 flex items-center justify-center text-navy-600 dark:text-sand-300">
                  <Radio className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-950 dark:text-sand-50 font-serif">PSCA Safety Integrated</h3>
                <p className="text-xs text-navy-800/70 dark:text-sand-200/70 font-sans leading-relaxed">
                  Every vehicle features an integrated SOS panic button routed directly to the Punjab Safe Cities Authority 15 Emergency Response Center.
                </p>
              </div>
            </div>
          </section>

          {/* Verified vs. Unconfirmed Eligibility Criteria Matrix */}
          <section className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 dark:text-sand-50">
                Eligibility Audit: Verified Facts vs. Unconfirmed Media Rumors
              </h2>
              <p className="text-sm text-navy-800/80 dark:text-sand-200/80 font-sans">
                Due to widespread misinformation circulating across commercial blogs, we separate statutorily confirmed requirements
                from unverified figures.
              </p>
            </div>

            {/* Confirmed Criteria Table */}
            <div className="overflow-x-auto rounded-2xl border border-emerald-500/30 bg-sand-100/50 dark:bg-navy-900/40 p-4 space-y-3">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold font-serif text-lg">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Officially Confirmed Statutory Requirements</span>
              </div>
              <table className="w-full text-left text-sm font-sans">
                <thead className="border-b border-sand-300 dark:border-navy-800 text-xs uppercase text-navy-700 dark:text-sand-300">
                  <tr>
                    <th className="py-2.5 px-3">Parameter</th>
                    <th className="py-2.5 px-3">Official Requirement</th>
                    <th className="py-2.5 px-3">Source Channel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand-200 dark:divide-navy-800">
                  {verifiedCriteria.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/40 dark:hover:bg-navy-900/60 transition-colors">
                      <td className="py-3 px-3 font-semibold text-navy-950 dark:text-sand-50">
                        {item.parameter}
                      </td>
                      <td className="py-3 px-3 text-navy-800 dark:text-sand-200">
                        {item.details}
                      </td>
                      <td className="py-3 px-3 text-xs text-navy-600 dark:text-sand-400 italic">
                        {item.officialSource}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Unconfirmed Claims Table */}
            <div className="overflow-x-auto rounded-2xl border border-amber-500/40 bg-amber-500/5 p-4 space-y-3">
              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold font-serif text-lg">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <span>Commonly Reported But Statutorily Unconfirmed Figures</span>
              </div>
              <table className="w-full text-left text-sm font-sans">
                <thead className="border-b border-amber-200 dark:border-amber-900/60 text-xs uppercase text-amber-800 dark:text-amber-300">
                  <tr>
                    <th className="py-2.5 px-3">Parameter</th>
                    <th className="py-2.5 px-3">Conflicting Media Claims</th>
                    <th className="py-2.5 px-3">Applicant Precaution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-200/60 dark:divide-amber-900/30">
                  {unconfirmedCriteria.map((item, idx) => (
                    <tr key={idx} className="hover:bg-amber-500/10 transition-colors">
                      <td className="py-3 px-3 font-semibold text-navy-950 dark:text-sand-50">
                        {item.parameter}
                      </td>
                      <td className="py-3 px-3 text-navy-800 dark:text-sand-200">
                        {item.details}
                      </td>
                      <td className="py-3 px-3 text-xs font-medium text-amber-800 dark:text-amber-300">
                        {item.caution}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Financial Architecture & Down-Payment Structure */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 dark:text-sand-50">
              Financial Architecture: Subsidies & Installment Terms
            </h2>
            <p className="text-base text-navy-800/80 dark:text-sand-200/80 font-sans leading-relaxed">
              Unlike commercial car leases that incur steep interest rates exceeding 20% to 25%, the Punjab Government
              subsidizes the borrowing cost entirely via provincial funding:
            </p>

            <FeeTableVisual
              rows={financingRows}
              titleEn="E-Taxi Financing & Subsidy Breakdown"
              titleUr="ای ٹیکسی فنانسنگ اور حکومتی سبسڈی کی تفصیلات"
              subtitleEn="Official financial parameters applicable under the Bank of Punjab agreement"
              subtitleUr="بینک آف پنجاب اور حکومت پنجاب کے باضابطہ مالیاتی قواعد"
              noteEn="Down payment percentages are calculated against the base factory delivery price approved by the Punjab Transport Department. Installment repayment begins after the 3-month operational grace period."
              noteUr="ڈاؤن پیمنٹ پنجاب ٹرانسپورٹ ڈیپارٹمنٹ کی منظور کردہ قیمت کے مطابق ہوگی۔ 3 ماہ کے رعایتی عرصے کے بعد ماہانہ اقساط شروع ہوں گی۔"
            />
          </section>

          <AdPlacementZone slotId="loan-mid" format="rectangle" />

          {/* Official Application Workflow */}
          <section className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 dark:text-sand-50">
                Official 5-Step Application Procedure (For Active Windows)
              </h2>
              <p className="text-sm text-navy-800/80 dark:text-sand-200/80 font-sans">
                When Phase 2 opens, this is the authentic procedure overseen by the Punjab Information Technology Board (PITB):
              </p>
            </div>

            <ProcessStepsDiagram
              steps={stepItems}
              titleEn="E-Taxi Selection & Allocation Workflow"
              titleUr="ای ٹیکسی درخواست اور قرعہ اندازی کا سرکاری طریقہ کار"
              subtitleEn="Standard operational roadmap from verification to vehicle onboarding"
              subtitleUr="لائسنس تصدیق سے لے کر گاڑی کی ترسیل تک کے 5 مراحل"
            />
          </section>

          {/* Official Helplines & Verification Safeguards */}
          <section className="p-6 rounded-2xl bg-sand-100 dark:bg-navy-900 border border-sand-200 dark:border-navy-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-navy-600/10 text-navy-600 dark:text-sand-200">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-navy-950 dark:text-sand-50">
                  Official Verification & Inquiries Channel
                </h3>
                <p className="text-xs text-navy-800/70 dark:text-sand-200/70 font-sans">
                  Always confirm scheme announcements directly with Punjab Government officials.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 font-sans text-sm">
              <div className="space-y-1">
                <span className="text-xs uppercase text-navy-600 dark:text-sand-400 font-semibold block">
                  Official PITB Helpline
                </span>
                <span className="font-mono font-bold text-base text-navy-950 dark:text-sand-50">
                  042-111-333-267
                </span>
                <p className="text-xs text-navy-700 dark:text-sand-300">
                  Monday to Friday, 9:00 AM – 5:00 PM (Official PITB Citizen Contact Center)
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase text-navy-600 dark:text-sand-400 font-semibold block">
                  Official Technical Support Email
                </span>
                <span className="font-mono font-bold text-base text-navy-950 dark:text-sand-50">
                  support@etaxi.pitb.gov.pk
                </span>
                <p className="text-xs text-navy-700 dark:text-sand-300">
                  For technical portal questions and application status inquiries
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-sand-200 dark:border-navy-800 text-xs text-navy-700 dark:text-sand-300 flex flex-wrap items-center justify-between gap-2 font-sans">
              <span>Main Punjab Portal: <strong className="font-mono">punjab.gov.pk</strong></span>
              <span>Official E-Taxi Portal: <strong className="font-mono">e-taxi.punjab.gov.pk</strong></span>
            </div>
          </section>

          {/* Frequently Asked Questions */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 dark:text-sand-50 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-brass-500" />
              Frequently Asked Questions (Citizen Inquiries)
            </h2>

            <div className="space-y-3 font-sans">
              <div className="p-4 rounded-xl bg-sand-100/60 dark:bg-navy-900/60 border border-sand-200 dark:border-navy-800 space-y-2">
                <h3 className="font-bold text-base text-navy-950 dark:text-sand-50">
                  Is the CM Punjab E-Taxi Scheme portal currently open for applications?
                </h3>
                <p className="text-sm text-navy-800/80 dark:text-sand-200/80 leading-relaxed">
                  No. Phase 1 registration concluded for the initial cohort of 1,100 electric vehicles piloted in Lahore.
                  Applications are currently closed. Do not believe fake social media advertisements claiming registration
                  is ongoing or offering fast-track placement for cash.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-sand-100/60 dark:bg-navy-900/60 border border-sand-200 dark:border-navy-800 space-y-2">
                <h3 className="font-bold text-base text-navy-950 dark:text-sand-50">
                  What makes domains like ebiz.punjab-govt.pk suspicious?
                </h3>
                <p className="text-sm text-navy-800/80 dark:text-sand-200/80 leading-relaxed">
                  Authentic Punjab Government portals strictly follow the structure <code className="font-mono text-xs bg-sand-200 dark:bg-navy-800 px-1 py-0.5 rounded">*.punjab.gov.pk</code>.
                  Domains that insert hyphens such as <code className="font-mono text-xs bg-rose-100 dark:bg-rose-900/30 px-1 py-0.5 rounded">punjab-govt.pk</code> are not officially accredited and are frequently registered by malicious actors to capture citizen CNICs, bank details, or extract unauthorized fees.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-sand-100/60 dark:bg-navy-900/60 border border-sand-200 dark:border-navy-800 space-y-2">
                <h3 className="font-bold text-base text-navy-950 dark:text-sand-50">
                  What are the verified benefits for female applicants?
                </h3>
                <p className="text-sm text-navy-800/80 dark:text-sand-200/80 leading-relaxed">
                  The Government of Punjab has established a 30% reserved quota for female drivers. Additionally, women drivers
                  receive an enhanced down-payment subsidy where the government pays 60% of the initial down payment, compared
                  to 50% for male applicants, making vehicle ownership significantly more affordable for women.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-sand-100/60 dark:bg-navy-900/60 border border-sand-200 dark:border-navy-800 space-y-2">
                <h3 className="font-bold text-base text-navy-950 dark:text-sand-50">
                  Can an applicant with a motorcycle or private car license (LTV) apply?
                </h3>
                <p className="text-sm text-navy-800/80 dark:text-sand-200/80 leading-relaxed">
                  A motorcycle-only license is not eligible. Applicants must hold a valid LTV (Light Transport Vehicle) or HTV
                  commercial driving license registered with Punjab Traffic Police (DLIMS).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-sand-100/60 dark:bg-navy-900/60 border border-sand-200 dark:border-navy-800 space-y-2">
                <h3 className="font-bold text-base text-navy-950 dark:text-sand-50">
                  What should I do if an individual demands money to register my application?
                </h3>
                <p className="text-sm text-navy-800/80 dark:text-sand-200/80 leading-relaxed">
                  Immediately refuse and report the incident. Punjab Government registration is 100% digital and transparent.
                  No government official or bank agent has the discretion to guarantee an e-taxi outside the automated PITB
                  balloting process. Report extortion to the Anti-Corruption Establishment helpline at 1350 or FIA Cybercrime.
                </p>
              </div>
            </div>
          </section>

          <AdPlacementZone slotId="loan-bottom" format="horizontal" />

          {/* Related Articles */}
          <RelatedArticles
            currentSlug="cm-punjab-e-taxi-scheme-eligibility-apply-2026"
            category="loans"
            explicitSlugs={[
              'how-to-spot-fake-loan-scheme-scams-2026',
              'apni-chhat-apna-ghar',
              'cm-punjab-kissan-card-registration-eligibility-2026',
              'driving-license-online-apply-renewal-dlims-2026',
            ]}
          />
        </div>
      </article>
    </>
  );
}
