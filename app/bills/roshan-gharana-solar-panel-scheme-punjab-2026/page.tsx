import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  ProcessStepsDiagram,
  ComparisonVisual,
  FeeTableVisual,
} from '@/components/visuals';
import {
  Sun,
  ShieldCheck,
  AlertTriangle,
  Send,
  ExternalLink,
  CheckCircle2,
  Clock,
  BatteryCharging,
  Zap,
  HelpCircle,
  Layers,
  Sparkles,
  Info,
  Check,
  XCircle,
  Smartphone,
  Building2,
  FileCheck2,
  ArrowRight,
  Gauge,
  Tractor,
  DollarSign,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roshan Gharana Solar Scheme Punjab 2026: Free Solar Panels, 8800 SMS & Ballot Status',
  description:
    'Complete official guide to CM Maryam Nawaz Roshan Gharana Solar Scheme in Punjab. Verified 0–200 electricity units cutoff, free 550W/1,100W kit specs, 8800 SMS syntax, district balloting rules, and debunking fake application deadlines.',
  keywords: [
    'roshan gharana solar scheme punjab 2026',
    'cm punjab free solar panel scheme',
    'roshan gharana scheme 8800 sms registration',
    'maryam nawaz free solar panels 200 units',
    'cmsolarscheme punjab gov pk registration',
    'roshan gharana solar scheme balloting status',
    'free solar panel scheme eligibility criteria punjab',
    'difference between roshan gharana and net metering',
    'cm solar tubewell scheme 95 subsidy agriculture',
  ],
  openGraph: {
    title: 'Roshan Gharana Solar Panel Scheme Punjab 2026: Official Guide & Ballot Rules',
    description:
      'Verified guide to CM Punjab Free Solar Scheme (Roshan Gharana): 0–200 units threshold, 550W & 1,100W kit specifications, official 8800 SMS registration, balloting criteria, and net-metering comparison.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/roshan-gharana-solar-panel-scheme-punjab-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/bills/roshan-gharana-solar-panel-scheme-punjab-2026',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com/' },
        { '@type': 'ListItem', position: 2, name: 'Utility Bills & Energy', item: 'https://www.pakistaninfohub.com/bills' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Roshan Gharana Solar Scheme 2026',
          item: 'https://www.pakistaninfohub.com/bills/roshan-gharana-solar-panel-scheme-punjab-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Roshan Gharana Solar Scheme Punjab 2026: Free Solar Panels, 8800 SMS & Ballot Status',
      description:
        'Authoritative consumer guide detailing the Government of Punjab Roshan Gharana Free Solar Panel Program for households consuming 0–200 electricity units, registration via 8800 SMS, balloting rules, and net metering differences.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-19',
      dateModified: '2026-09-19',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/bills/roshan-gharana-solar-panel-scheme-punjab-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Register and Check Ballot Status for Roshan Gharana Solar Scheme',
      description:
        'Official 5-step workflow to verify monthly consumption, apply via 8800 SMS or the Punjab Energy Department portal, clear computerized balloting, and receive free solar installation.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Verify 6-Month Electricity Consumption Under 200 Units',
          text: 'Check your electricity bill from LESCO, FESCO, GEPCO, MEPCO, or IESCO to ensure your average consumption over the past 6 months has remained strictly under 200 units and sanctioned load is ≤ 2 kW.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Submit Application via SMS to 8800 or Official Portal',
          text: 'Send an SMS to 8800 containing your CNIC number (without dashes) followed by a space and your 14-digit electricity bill reference number, or submit through the official portal at cmsolarscheme.punjab.gov.pk.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'PITB Computerized District Balloting',
          text: 'Eligible applications undergo digital computerized balloting executed by the Punjab Information Technology Board (PITB) based on population-weighted quotas across all 36 districts of Punjab.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Physical On-Site Verification by District Administration',
          text: 'Shortlisted candidates undergo physical field verification by the local Assistant Commissioner and DISCO technical staff to inspect the sanctioned load, meter status, and verify no electricity theft history.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Free Equipment Handover & Certified Installation',
          text: 'Selected beneficiaries receive a complete Tier-1 solar system (panels, hybrid inverter, battery storage, and wiring) installed free of charge by provincial certified contractors with barcoded tracking.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What if my household consumes more than 200 units of electricity per month?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Households consuming more than 200 units per month are strictly ineligible for the free Roshan Gharana small solar kit. The free scheme is legally reserved for protected, low-income domestic consumers. Homes using 300 to 800+ units per month need a much larger system (5kW to 10kW) to power refrigerators and air conditioners, which must be installed privately under NEPRA’s Net Metering / Net Billing framework.',
          },
        },
        {
          '@type': 'Question',
          name: 'Am I guaranteed a solar system if I submit an application via 8800 SMS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Submitting an application does not guarantee selection. Because millions of households qualify in Punjab while Phase 1 targets approximately 100,000 households, beneficiaries are chosen through a transparent, computerized lottery (balloting) managed by PITB across Punjab’s 36 districts.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the Roshan Gharana solar kit really 100% free, or are there hidden fees?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For the 0–200 units consumption bracket, the system is 100% free. The Government of Punjab finances the solar panels, hybrid inverter, battery backup, mounting structure, cabling, and certified installation. The provincial government has warned citizens that no application fee, agent fee, or installation charge should ever be paid to anyone.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is this free solar kit different from rooftop Net Metering?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Roshan Gharana kit is an off-grid or hybrid mini-system (550W to 1,100W) designed to run 1–2 ceiling fans and LED lights directly with a small battery backup. It does not export surplus power to the grid. In contrast, rooftop Net Metering requires a three-phase green bidirectional smart meter and a minimum 5kW to 10kW private solar setup that sells electricity back to DISCOs at NEPRA-approved buyback rates.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a confirmed application deadline, such as April 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Third-party content-farm websites that claim an "April 2026 application deadline" are publishing fabricated urgency. The scheme operates in structured phases directly notified by the Punjab Energy Department. Official enrollment windows and phase expansions are published exclusively through cmsolarscheme.punjab.gov.pk and energy.punjab.gov.pk.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this the same scheme as the 95% subsidized solar tubewells for farmers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The CM Solar Tubewell Scheme is a distinct agricultural program administered by the Punjab Agriculture Department under the Chief Minister Kissan Package. That program provides up to 95% subsidies (or fixed grants of Rs. 500,000 to Rs. 1,000,000) specifically to farmers for converting high-horsepower agricultural tube wells to solar power.',
          },
        },
      ],
    },
  ],
};

const systemTierRows = [
  {
    serviceEn: 'Tier 1: Up to 100 Units / month',
    serviceUr: 'پہلا مرحلہ: 100 یونٹ ماہانہ تک',
    normal: '550-Watt Solar Kit',
    urgent: '100% Free (Govt Funded)',
    executive: '1 Panel + Inverter + Battery',
    validity: 'Single-phase connection',
  },
  {
    serviceEn: 'Tier 2: 101 to 200 Units / month',
    serviceUr: 'دوسرا مرحلہ: 101 سے 200 یونٹ ماہانہ',
    normal: '1,100-Watt (1.1 kW) Kit',
    urgent: '100% Free (Govt Funded)',
    executive: '2 Panels + Inverter + Battery',
    validity: 'Single-phase connection',
  },
  {
    serviceEn: 'Tier 3: 201 to 500 Units / month',
    serviceUr: 'تیسرا مرحلہ: 201 سے 500 یونٹ ماہانہ',
    normal: 'Proposed 90% Subsidy Plan',
    urgent: '10% User Equity / Installments',
    executive: 'Multi-kW (Phased Expansion)',
    validity: 'Separate provincial framework',
  },
  {
    serviceEn: 'Above 500 Units / month (Heavy Load)',
    serviceUr: '500 یونٹ سے زائد (بھاری بجلی استعمال)',
    normal: 'Private Net Metering System',
    urgent: 'Self-Financed by Consumer',
    executive: '5 kW to 10 kW Grid-Tied System',
    validity: 'Three-phase smart meter',
  },
];

const processSteps = [
  {
    stepNumber: 1,
    icon: <Gauge className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Check 6-Month Units on Your Bill',
    titleUr: 'بجلی کے بل پر 6 ماہ کے یونٹس چیک کریں',
    descEn: 'Inspect your latest electricity bill from LESCO, FESCO, GEPCO, MEPCO, or IESCO. Your average consumption over the preceding 6 months must not exceed 200 units, and your sanctioned load must be ≤ 2 kW.',
    descUr: 'اپنے لیسکو، فیسکو، گیپکو، میپکو یا آئیسکو کے بل پر پچھلے 6 ماہ کا اوسط استعمال چیک کریں۔ یہ لازمی طور پر 200 یونٹ یا اس سے کم اور منظور شدہ لوڈ 2 کلو واٹ تک ہونا چاہیے۔',
    tagEn: 'Pre-check',
    tagUr: 'پہلی شرط',
  },
  {
    stepNumber: 2,
    icon: <Smartphone className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Apply via SMS 8800 or Official Web Portal',
    titleUr: 'ایس ایم ایس 8800 یا سرکاری پورٹل پر اپلائی کریں',
    descEn: 'From your active mobile number, send an SMS to 8800 formatted as: [CNIC without dashes] [14-digit Reference Number]. Alternatively, apply online at cmsolarscheme.punjab.gov.pk.',
    descUr: 'اپنے موبائل سے 8800 پر میسج بھیجیں: [شناختی کارڈ بغیر ڈیش] [14 ہندسوں کا ریفرنس نمبر]۔ یا حکومت کے پورٹل cmsolarscheme.punjab.gov.pk پر اندراج کریں۔',
    tagEn: 'Free Registration',
    tagUr: 'مفت رجسٹریشن',
  },
  {
    stepNumber: 3,
    icon: <FileCheck2 className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Computerized Digital Balloting by PITB',
    titleUr: 'پی آئی ٹی بی کی خودکار شفاف قرعہ اندازی',
    descEn: 'Because applicant volumes exceed the 100,000 Phase 1 allocation, PITB conducts transparent computerized balloting with quotas apportioned district-by-district across all 36 Punjab districts.',
    descUr: 'درخواستوں کی تعداد زیادہ ہونے کے باعث پنجاب انفارمیشن ٹیکنالوجی بورڈ (PITB) تمام 36 اضلاع کے لیے کوٹہ کے تحت خودکار قرعہ اندازی کرتا ہے۔',
    tagEn: 'District Quota',
    tagUr: 'ضلعی کوٹہ',
  },
  {
    stepNumber: 4,
    icon: <Building2 className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Field Verification by District Administration',
    titleUr: 'ضلعی انتظامیہ اور ڈسکوز کی فیلڈ تصدیق',
    descEn: 'Shortlisted households receive a site inspection by local administration and DISCO personnel to verify roof space, verify electricity meter integrity, and ensure zero pending theft FIRs.',
    descUr: 'قرعہ اندازی میں کامیاب افراد کے گھروں پر ضلعی انتظامیہ اور متعلقہ بجلی کمپنی کی ٹیم چھت کی جگہ، میٹر کی درستگی اور چوری سے پاک ریکارڈ کی تصدیق کرتی ہے۔',
    tagEn: 'Verification',
    tagUr: 'فیلڈ تصدیق',
  },
  {
    stepNumber: 5,
    icon: <Sun className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Zero-Cost Installation & Barcoded Handover',
    titleUr: 'مفت تنصیب اور بارکوڈ شدہ سولر کٹ کی فراہمی',
    descEn: 'Certified provincial contractors install the panels, inverter, battery backup, and complete wiring free of cost. Barcoded QR tags link the equipment to your CNIC to prevent illegal resale.',
    descUr: 'حکومتی سرٹیفائیڈ کنٹریکٹرز سولر پینلز، انورٹر، بیٹری اور وائرنگ بالکل مفت نصب کرتے ہیں۔ آلات پر کیو آر کوڈ ہوتا ہے تاکہ اسے غیر قانونی طور پر بیچا نہ جا سکے۔',
    tagEn: 'Zero Expense',
    tagUr: 'مکمل مفت',
  },
];

export default function RoshanGharanaSolarSchemePunjabPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans pb-16">
        {/* Top Sticky Breadcrumb Bar */}
        <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 py-2.5 flex items-center justify-between">
            <Breadcrumbs
              items={[
                { nameEn: 'Utility Bills & Energy', nameUr: 'یوٹیلیٹی بلز و توانائی', url: '/bills' },
                {
                  nameEn: 'Roshan Gharana Solar Scheme 2026',
                  nameUr: 'روشن گھرانہ سولر سکیم 2026',
                  url: '/bills/roshan-gharana-solar-panel-scheme-punjab-2026',
                },
              ]}
            />
            <VerifiedBadge textEn="Punjab Energy Dept • Sept 2026 Data" textUr="محکمہ توانائی پنجاب • ستمبر 2026" />
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 pt-6 space-y-8">
          {/* Header Section */}
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <InteractiveToolBadge
                labelEn="PUNJAB GOVT INITIATIVE"
                labelUr="حکومت پنجاب پروگرام"
                variant="gold"
              />
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold tracking-wide flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>ROSHAN GHARANA PROGRAM (روشن گھرانہ پروگرام)</span>
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-doc-ink dark:text-white tracking-tight leading-tight">
              CM Punjab Free Solar Panel Scheme (Roshan Gharana) 2026: Eligibility, 8800 SMS &amp; Ballot Verification
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              The honest, verified guide to Chief Minister Maryam Nawaz Sharif&apos;s Roshan Gharana Solar Scheme across Punjab. Learn exact eligibility rules (strictly <strong>0–200 units/month</strong>), system sizes (550W and 1,100W kits with battery storage), official registration syntax via shortcode <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs font-mono text-doc-seal dark:text-amber-400 font-bold">8800</code>, digital balloting mechanics, and why higher-consumption households must choose Net Metering instead.
            </p>
          </header>

          {/* Direct Answer Box */}
          <DirectAnswerBox
            topicTitleEn="Direct Answer: CM Punjab Roshan Gharana Solar Panel Scheme (2026)"
            topicTitleUr="خلاصہ: وزیر اعلیٰ پنجاب مفت سولر پینل سکیم (روشن گھرانہ)"
            answerEn="The Punjab Roshan Gharana Scheme provides 100% free small solar panel kits (550W for ≤100 units/month; 1,100W for 101–200 units/month) including panels, hybrid inverter, battery storage, and complete installation to protected domestic consumers in Punjab. Households consuming MORE than 200 units/month are strictly ineligible. Beneficiaries are chosen through transparent computerized balloting conducted by PITB across Punjab's 36 districts—applying via SMS to 8800 or the official portal does NOT guarantee selection. No application fees or agent charges apply."
            answerUr="پنجاب روشن گھرانہ سکیم کے تحت 0 سے 200 یونٹ بجلی استعمال کرنے والے گھریلو صارفین کو مکمل مفت سولر کٹ (550 واٹ تا 1100 واٹ مع سولر پینلز، انورٹر اور بیٹری) فراہم کی جاتی ہے۔ 200 یونٹ سے زائد بجلی استعمال کرنے والے گھرانے اس مفت سکیم کے اہل نہیں ہیں۔ درخواست دہندگان میں سے شفاف قرعہ اندازی (کمپیوٹرائزڈ بیلٹنگ) کے ذریعے قرعہ نکلنے والوں کو کٹس دی جاتی ہیں۔ 8800 پر ایس ایم ایس یا سرکاری پورٹل پر درخواست دینے سے فوری سولر پینل ملنے کی ضمانت نہیں ہوتی۔"
          />

          {/* CRITICAL HONEST ADVISORY: Debunking False Deadlines & Content-Farm Clickbait */}
          <section className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-amber-500/10 border border-amber-500/30 text-slate-800 dark:text-slate-200 space-y-3">
            <div className="flex items-center gap-2.5">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
              <h2 className="font-serif text-lg sm:text-xl font-bold text-amber-900 dark:text-amber-200">
                Honest Advisory: Debunking Fake &quot;April 2026 Deadlines&quot; &amp; Third-Party Scams
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 font-sans">
              Numerous commercial content farms (such as <em>apkxec.org</em>, <em>jinkosolarpanelpriceinpakistan.com</em>, <em>punjabscheme.com.pk</em>, and <em>solarcitizen.com.pk</em>) publish recycled articles inventing fictitious application deadlines like <strong>&quot;Apply before April 2026 deadline&quot;</strong> or creating countdown timers to induce panic.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5" /> FALSE CLAIM FROM SPAM SITES
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  &quot;Hurry! Registration closes on a hard date in April 2026. Pay Rs. 500 processing fee to secure your free solar panel kit immediately.&quot;
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800/60 space-y-1.5">
                <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED GROUND REALITY
                </span>
                <p className="text-xs text-emerald-900 dark:text-emerald-200">
                  The scheme operates in phased cohorts governed by official Punjab Government gazettes. Balloting is executed district-by-district. <strong>Registration is 100% free</strong>, and official updates appear only at{' '}
                  <a
                    href="https://cmsolarscheme.punjab.gov.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-bold text-emerald-800 dark:text-emerald-300 inline-flex items-center gap-0.5"
                  >
                    cmsolarscheme.punjab.gov.pk <ExternalLink className="w-2.5 h-2.5" />
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://energy.punjab.gov.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-bold text-emerald-800 dark:text-emerald-300 inline-flex items-center gap-0.5"
                  >
                    energy.punjab.gov.pk <ExternalLink className="w-2.5 h-2.5" />
                  </a>.
                </p>
              </div>
            </div>
          </section>

          {/* Core Eligibility Checklist */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-doc-ink dark:text-white">
                Official Eligibility Criteria: Who Qualifies &amp; Who Does Not
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              To protect public resources, the Punjab Energy Department and PITB enforce rigorous automated filters against provincial electricity distribution company (DISCO) billing databases. Review the checklist below before applying:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Eligible Card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-500/30 shadow-sm space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600">
                    <Check className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    Eligible Applicants (0–200 Units Bracket)
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Punjab CNIC Holder:</strong> Permanent resident of Punjab with a valid NADRA CNIC.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Usage ≤ 200 Units/Month:</strong> Average domestic consumption over the past 6 consecutive billing cycles must not exceed 200 units.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Sanctioned Load ≤ 2 kW:</strong> Connection must be registered with a sanctioned domestic load of 2 kW or lower.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Active Domestic Connection:</strong> Must have an operational single-phase domestic meter with LESCO, FESCO, GEPCO, MEPCO, or IESCO (Punjab territory).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Clean Billing History:</strong> No unpaid electricity arrears or active payment disputes on the connection.</span>
                  </li>
                </ul>
              </div>

              {/* Ineligible Card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-red-500/30 shadow-sm space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div className="p-1.5 rounded-lg bg-red-50 dark:bg-red-950/60 text-red-600">
                    <XCircle className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    Explicitly Ineligible Applicants
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span><strong>Usage Over 200 Units:</strong> Anyone consuming 201+ units/month (e.g., 500–800 units) is automatically rejected.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span><strong>Commercial &amp; Industrial Connections:</strong> Shops, commercial plazas, tube wells, and industrial meters cannot apply.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span><strong>Power Theft Record:</strong> Any household with past meter tampering, illegal kunda connections, or an active FIR under the Electricity Act.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span><strong>Three-Phase Meters:</strong> Standard three-phase heavy residential connections are excluded from this small free kit scheme.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span><strong>Multiple Applications:</strong> Only one solar system is allowed per electricity bill reference number and per household.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Ad Placement Zone 1 */}
          <AdPlacementZone
            slotId="bills-roshan-gharana-top"
            format="horizontal"
          />

          {/* STRATEGIC DIFFERENTIATOR: Using 200 to 800+ Units? Net Metering vs Free Kit */}
          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-navy-950 via-slate-900 to-navy-950 text-white border border-doc-brass/40 shadow-xl space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-doc-brass/20 text-doc-brass text-xs font-mono font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" /> Critical Consumer Distinction
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Using 500–800+ Units a Month? Why You Need Net Metering, Not Roshan Gharana
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              One of the most common mistakes Pakistani consumers make is confusing <strong>government welfare relief</strong> with <strong>rooftop solar power generation</strong>. Most competing websites fail to clarify this distinction:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <span className="font-mono font-bold text-amber-300 uppercase tracking-wider text-[11px] block">
                  FREE ROSHAN GHARANA KIT (0–200 UNITS)
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Provides a <strong>550W to 1,100W off-grid or hybrid mini-setup</strong>. This capacity can run only 1 ceiling fan, 2–3 LED bulbs, and charge a mobile phone during daytime hours with modest nighttime battery backup. It <strong>cannot</strong> run an inverter air conditioner, refrigerator, iron, or water pump.
                </p>
                <div className="pt-2 text-xs text-amber-200/90 font-medium">
                  Ideal for: Low-income families living in 2–3 marla homes seeking basic lighting relief.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <span className="font-mono font-bold text-emerald-300 uppercase tracking-wider text-[11px] block">
                  GRID-TIED NET METERING (500–1,000+ UNITS)
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Requires a <strong>5 kW to 10 kW+ private rooftop solar system</strong> connected to a three-phase bidirectional smart meter. It generates 600 to 1,400 units monthly to run multiple 1.5-ton ACs and heavy appliances, while selling surplus electricity back to the DISCO.
                </p>
                <div className="pt-2 text-xs text-emerald-200/90 font-medium">
                  Ideal for: Middle and upper-middle class households seeking near-zero electricity bills.
                </div>
              </div>
            </div>

            {/* Direct Cross-Linking Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-doc-brass/10 border border-doc-brass/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                  <span>Planning a Private Rooftop Solar Installation?</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-extrabold uppercase">
                    New 2026 Rules
                  </span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Read our verified breakdowns of NEPRA&apos;s transition from 1:1 net metering to net billing and smart meter installation charges:
                </p>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap gap-2 shrink-0">
                <Link
                  href="/bills/net-metering-net-billing-change-2026"
                  className="px-3.5 py-2 rounded-lg bg-doc-brass hover:bg-doc-brass/90 text-navy-950 font-bold text-xs transition flex items-center gap-1.5 shadow-sm"
                >
                  <span>Net Metering 2026 Rules</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/bills/smart-meter-pakistan-price-how-it-works-2026"
                  className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition flex items-center gap-1.5 border border-white/20"
                >
                  <span>Smart Meter (AMI) Guide</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
                </Link>
              </div>
            </div>
          </section>

          {/* Process Steps Diagram Component */}
          <section id="application-workflow" className="space-y-4">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-doc-brass" />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-doc-ink dark:text-white">
                Step-by-Step Official Application &amp; Installation Workflow
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Follow the official chronological pipeline established by the Punjab Energy Department and the Punjab Information Technology Board (PITB):
            </p>

            <ProcessStepsDiagram
              steps={processSteps}
              titleEn="Roshan Gharana Selection &amp; Handover Process"
              titleUr="روشن گھرانہ سولر کٹ کے حصول کا سرکاری طریقہ کار"
              subtitleEn="From 8800 SMS submission to physical inspection and zero-cost installation"
              subtitleUr="8800 پر میسج بھیجنے سے فیلڈ تصدیق اور مفت تنصیب تک کے 5 مراحل"
              variant="dark"
            />
          </section>

          {/* Detailed SMS Syntax & Portal Guidance */}
          <section className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-blue-600" />
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                How to Send the 8800 Registration SMS Correctly
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              If an official intake window is active, you can submit your candidacy directly from your mobile handset without visiting any government office. Ensure the following syntax:
            </p>

            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 font-mono text-xs sm:text-sm space-y-2">
              <div className="text-slate-500 dark:text-slate-400 text-xs">Recipient Shortcode:</div>
              <div className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400">8800</div>
              <div className="text-slate-500 dark:text-slate-400 text-xs pt-1">SMS Text Body:</div>
              <div className="p-2.5 rounded bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-emerald-400 font-bold">
                [CNIC without dashes] [Space] [14-Digit Electricity Bill Reference Number]
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-[11px] pt-1">
                <strong>Example:</strong> <code>3520112345671 08112345678900</code>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400 font-sans">
              <p>
                • <strong>SIM Requirement:</strong> Send the SMS preferably from a mobile SIM registered under the same CNIC as the applicant to facilitate automated NADRA identity matching.
              </p>
              <p>
                • <strong>Bill Reference Number:</strong> The 14-digit alphanumeric reference number is located at the top-left or top-right of your LESCO, FESCO, GEPCO, MEPCO, or IESCO bill. If your bill has a letter &apos;U&apos; or &apos;R&apos; at the end, omit the letter or include digits as formatted on the portal.
              </p>
            </div>
          </section>

          {/* System Hardware Specifications Breakdown */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <BatteryCharging className="w-5 h-5 text-amber-500" />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-doc-ink dark:text-white">
                Hardware Specifications: 550W vs 1,100W Free Kits
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              The Government of Punjab tenders Tier-1 solar manufacturers to assemble standardized, pre-tested packages for selected households:
            </p>

            <FeeTableVisual
              rows={systemTierRows}
              titleEn="Roshan Gharana System Capacity &amp; Cost Tiers"
              titleUr="روشن گھرانہ سولر سسٹم کی صلاحیت اور اخراجات کا چارٹ"
              subtitleEn="Official classification based on monthly electricity consumption brackets"
              subtitleUr="ماہانہ بجلی کے استعمال کی بنیاد پر سرکاری درجہ بندی اور لاگت"
              noteEn="Verified under Punjab Energy Department and PITB technical specifications for Roshan Gharana 2026."
              noteUr="محکمہ توانائی پنجاب اور پی آئی ٹی بی کے تصدیق شدہ تکنیکی ضوابط برائے روشن گھرانہ 2026۔"
            />
          </section>

          {/* Ad Placement Zone 2 */}
          <AdPlacementZone
            slotId="bills-roshan-gharana-mid"
            format="banner"
          />

          {/* SEPARATE SCHEME: CM Punjab Solar Tubewell Scheme for Farmers */}
          <section className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5">
              <Tractor className="w-5 h-5 text-emerald-600" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Notice: CM Solar Tubewell Scheme for Farmers (Up to 95% Subsidy)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Many agricultural readers mistakenly confuse the domestic Roshan Gharana scheme with the <strong>Chief Minister Solar Tubewell Program</strong> launched under the Punjab Kissan Package. These are two completely distinct government programs:
            </p>

            <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2 font-bold text-emerald-900 dark:text-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Distinct Agricultural Subsidy Structure:</span>
              </div>
              <ul className="list-disc list-inside space-y-1.5 pl-1">
                <li><strong>Administered by:</strong> Punjab Agriculture Department (not the urban domestic energy branch). Official portal:{' '}
                  <a
                    href="https://agripunjab.gov.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline text-emerald-800 dark:text-emerald-300 inline-flex items-center gap-0.5"
                  >
                    agripunjab.gov.pk <ExternalLink className="w-3 h-3" />
                  </a>.
                </li>
                <li><strong>Subsidy Amount:</strong> Up to <strong>95% government subsidy</strong> or fixed capital contributions:
                  <ul className="list-circle list-inside pl-4 pt-1 space-y-1">
                    <li>Rs. 500,000 subsidy for a 10 kW agricultural tubewell system.</li>
                    <li>Rs. 750,000 subsidy for a 15 kW agricultural tubewell system.</li>
                    <li>Rs. 1,000,000 subsidy for a 20 kW agricultural tubewell system.</li>
                  </ul>
                </li>
                <li><strong>Eligibility:</strong> Requires proof of cultivable agricultural land ownership in Punjab and an existing diesel or electric agricultural tube well connection.</li>
              </ul>
            </div>
          </section>

          {/* Useful Tools & DISCO Duplicate Bill Checkers */}
          <section className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-doc-brass" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Check Your DISCO Reference Number &amp; 6-Month Usage History
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              To verify if your monthly units are under the 200-unit threshold, generate an instant duplicate bill online using our free verification utilities across all Punjab DISCOs:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 pt-1">
              <Link
                href="/bills/lesco-bill-check-online"
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass/50 text-center transition group"
              >
                <span className="block font-bold text-xs sm:text-sm text-slate-800 dark:text-white group-hover:text-doc-brass">
                  LESCO Lahore
                </span>
                <span className="text-[10px] text-slate-500">Check Bill &amp; Units</span>
              </Link>
              <Link
                href="/bills/fesco-bill-check-online-duplicate-2026"
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass/50 text-center transition group"
              >
                <span className="block font-bold text-xs sm:text-sm text-slate-800 dark:text-white group-hover:text-doc-brass">
                  FESCO Faisalabad
                </span>
                <span className="text-[10px] text-slate-500">Check Bill &amp; Units</span>
              </Link>
              <Link
                href="/bills/gepco-bill-check-online"
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass/50 text-center transition group"
              >
                <span className="block font-bold text-xs sm:text-sm text-slate-800 dark:text-white group-hover:text-doc-brass">
                  GEPCO Gujranwala
                </span>
                <span className="text-[10px] text-slate-500">Check Bill &amp; Units</span>
              </Link>
              <Link
                href="/bills/mepco-bill-check-online"
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass/50 text-center transition group"
              >
                <span className="block font-bold text-xs sm:text-sm text-slate-800 dark:text-white group-hover:text-doc-brass">
                  MEPCO Multan
                </span>
                <span className="text-[10px] text-slate-500">Check Bill &amp; Units</span>
              </Link>
              <Link
                href="/bills/iesco-bill-check-online"
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass/50 text-center transition group"
              >
                <span className="block font-bold text-xs sm:text-sm text-slate-800 dark:text-white group-hover:text-doc-brass">
                  IESCO Rawalpindi
                </span>
                <span className="text-[10px] text-slate-500">Check Bill &amp; Units</span>
              </Link>
            </div>

            <div className="pt-2 text-center">
              <Link
                href="/bills/utility-bill-checker-2026"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                <span>Open Universal Pakistan Utility Bill Checker 2026</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

          {/* Frequently Asked Questions (FAQ) */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-doc-brass" />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-doc-ink dark:text-white">
                Frequently Asked Questions (FAQ)
              </h2>
            </div>

            <div className="space-y-3">
              <details className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group">
                <summary className="font-bold text-sm sm:text-base text-slate-900 dark:text-white cursor-pointer list-none flex items-center justify-between gap-3">
                  <span>What if my average electricity consumption exceeds 200 units a month?</span>
                  <span className="text-doc-brass font-mono text-lg transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                  Households consuming more than 200 units per month are strictly ineligible for the free Roshan Gharana small solar kit. The free scheme is legally reserved for protected, low-income domestic consumers. Homes using 300 to 800+ units per month need a much larger system (5kW to 10kW) to power refrigerators and air conditioners, which must be installed privately under NEPRA’s Net Metering / Net Billing framework. You can read our detailed guide to{' '}
                  <Link href="/bills/net-metering-net-billing-change-2026" className="text-blue-600 dark:text-blue-400 font-bold underline">
                    NEPRA Net Metering to Net Billing Rules 2026
                  </Link>.
                </p>
              </details>

              <details className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group">
                <summary className="font-bold text-sm sm:text-base text-slate-900 dark:text-white cursor-pointer list-none flex items-center justify-between gap-3">
                  <span>Am I guaranteed to receive a solar system once I apply via 8800 SMS?</span>
                  <span className="text-doc-brass font-mono text-lg transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                  No. Submitting an application does not guarantee selection. Because millions of households qualify across Punjab while Phase 1 targets approximately 100,000 households, beneficiaries are chosen through a transparent, computerized lottery (balloting) managed by PITB across Punjab&apos;s 36 districts. Shortlisted names then undergo strict field verification before any equipment is dispatched.
                </p>
              </details>

              <details className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group">
                <summary className="font-bold text-sm sm:text-base text-slate-900 dark:text-white cursor-pointer list-none flex items-center justify-between gap-3">
                  <span>Is the Roshan Gharana solar kit really 100% free or are there hidden fees?</span>
                  <span className="text-doc-brass font-mono text-lg transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                  For the 0–200 units consumption bracket, the system is 100% free. The Government of Punjab finances the solar panels, hybrid inverter, battery backup, mounting structure, cabling, and certified installation. The provincial government has explicitly warned citizens that no application fee, agent fee, or installation charge should ever be paid to anyone.
                </p>
              </details>

              <details className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group">
                <summary className="font-bold text-sm sm:text-base text-slate-900 dark:text-white cursor-pointer list-none flex items-center justify-between gap-3">
                  <span>How does this free solar kit differ from rooftop Net Metering?</span>
                  <span className="text-doc-brass font-mono text-lg transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                  The Roshan Gharana kit is an off-grid or hybrid mini-system (550W to 1,100W) designed to run 1–2 ceiling fans and LED lights directly with a small battery backup. It does not export surplus power to the grid. In contrast, rooftop Net Metering requires a three-phase green bidirectional smart meter and a minimum 5kW to 10kW private solar setup that sells electricity back to DISCOs at NEPRA-approved buyback rates. Read our{' '}
                  <Link href="/bills/smart-meter-pakistan-price-how-it-works-2026" className="text-blue-600 dark:text-blue-400 font-bold underline">
                    Smart Meter AMI Pakistan Guide
                  </Link>{' '}
                  for details.
                </p>
              </details>

              <details className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group">
                <summary className="font-bold text-sm sm:text-base text-slate-900 dark:text-white cursor-pointer list-none flex items-center justify-between gap-3">
                  <span>Is there an official cutoff deadline like April 2026?</span>
                  <span className="text-doc-brass font-mono text-lg transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                  No. Third-party content-farm websites that claim an &quot;April 2026 application deadline&quot; are publishing fabricated urgency. The scheme operates in structured phases directly notified by the Punjab Energy Department. Official enrollment windows and phase expansions are published exclusively through cmsolarscheme.punjab.gov.pk and energy.punjab.gov.pk.
                </p>
              </details>
            </div>
          </section>

          {/* Official Verification Sources & Legal Disclaimer */}
          <footer className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-500 dark:text-slate-400 font-sans">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Primary Verification Source: Government of Punjab Energy Department &amp; PITB</span>
              </div>
              <div>
                <span>Last Editorial Verification: September 2026</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-[11px] leading-relaxed">
              <strong>Public Disclaimer:</strong> Pakistan Info Hub is an independent civic information platform and is not affiliated with the Government of Punjab or any provincial electric distribution company. This guide is compiled strictly for consumer education and fraud prevention. To apply or verify your balloting status, access only official government domains ending in <code>.punjab.gov.pk</code>.
            </div>
          </footer>
        </article>
      </main>
    </>
  );
}
