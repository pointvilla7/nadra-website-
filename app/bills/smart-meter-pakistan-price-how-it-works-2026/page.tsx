import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, FeeTableVisual, FAQAccordionVisual } from '@/components/visuals';
import {
  HelpCircle,
  ExternalLink,
  Zap,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  Sun,
  BatteryCharging,
  Layers,
  FileText,
  Building,
  Gauge,
  Radio,
  Smartphone,
  RefreshCw,
  Check,
  Cpu,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Smart Meters (AMI) in Pakistan 2026 – Prices, Installation & How It Works | Pakistan Info Hub',
  description:
    'Complete verified guide to NEPRA & DISCO Advanced Metering Infrastructure (AMI) smart meters in Pakistan: 2026 LESCO prices, automated 15-min readings, solar net-billing bidirectional meter rules, and prepaid pilot comparison.',
  keywords: [
    'smart meter price Pakistan 2026',
    'AMI meter installation LESCO IESCO',
    'smart meter vs prepaid meter Pakistan',
    'bidirectional smart meter solar cost',
    'NEPRA smart meter rollout 2027',
    'LESCO prepaid meter Allama Iqbal Town',
    'how AMI smart meters work Pakistan',
    'electricity meter replacement cost DISCO',
  ],
  openGraph: {
    title: 'Smart Meters (AMI) in Pakistan 2026 – Prices, Installation & How It Works',
    description:
      'Verified guide to Pakistan smart electricity meters: AMI technology, LESCO/IESCO pricing breakdown, automated billing, prepaid pilot, and solar net billing rules.',
    url: 'https://www.pakistaninfohub.com/bills/smart-meter-pakistan-price-how-it-works-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/bills/smart-meter-pakistan-price-how-it-works-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Utility Bills', item: 'https://www.pakistaninfohub.com/bills' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Smart Meters (AMI) Pakistan 2026',
          item: 'https://www.pakistaninfohub.com/bills/smart-meter-pakistan-price-how-it-works-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Smart Electricity Meters (AMI) in Pakistan 2026: Pricing, Working & Prepaid Pilot Guide',
      description:
        'Comprehensive guide to Pakistan’s nationwide Advanced Metering Infrastructure (AMI) smart meter transition, pricing breakdown, automated telemetry, and prepaid electricity pilot.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub Editorial Team' },
      publisher: {
        '@type': 'Organization',
        name: 'Pakistan Info Hub',
        url: 'https://www.pakistaninfohub.com',
      },
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I have to pay for a smart meter replacement if my existing meter is working normally?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under standard DISCO replacement schedules, routine infrastructure transitions to AMI smart meters initiated by the power company in designated operational phases are funded through DISCO capital development budgets without direct upfront consumer surcharges. However, if you apply for a new connection, load extension, or voluntary early smart upgrade, you must pay the approved Demand Notice charges.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is a smart meter the same as a prepaid electricity meter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. While prepaid electricity meters utilize smart AMI communication hardware, they operate on a pay-as-you-go recharge model where power is cut automatically when balance expires. Standard AMI smart meters, by contrast, operate on normal monthly postpaid billing cycles with 100% automated telemetry to eliminate manual reading errors.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will my electricity bill increase or decrease after getting an AMI smart meter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The statutory tariff rate per unit (kWh) set by NEPRA remains identical. However, smart meters record exact consumption down to the second and prevent artificial slab jumps caused by late meter readings. Consumers frequently see fewer disputes, elimination of estimated/detection bills, and accurate peak vs off-peak time-of-use calculations.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I install rooftop solar panels — do I have to pay for the bidirectional smart meter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under NEPRA Prosumer Regulations, when an approved rooftop solar system is commissioned under the net billing framework, the DISCO installs a compliant bidirectional smart meter capable of independently measuring exported solar units and imported grid units.',
          },
        },
        {
          '@type': 'Question',
          name: 'How frequently does an AMI smart meter report consumption to the power company?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AMI smart meters in Pakistan transmit encrypted consumption, voltage, and load telemetry to the DISCO central control center automatically every 15 minutes via cellular GPRS SIMs or localized RF mesh networks.',
          },
        },
      ],
    },
  ],
};

export default function SmartMeterPakistanGuidePage() {
  const breadcrumbs = [
    { nameEn: 'Utility Bills', nameUr: 'یوٹیلیٹی بلز' },
    { nameEn: 'Smart Meters (AMI) Pakistan 2026', nameUr: 'اسمارٹ میٹرز (AMI) پاکستان 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans max-w-5xl mx-auto">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="NEPRA AMI INFRASTRUCTURE" labelUr="اسمارٹ میٹر رہنمائی" variant="gold" />
            <VerifiedBadge textEn="DISCO & NEPRA COMPLIANT" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Smart Electricity Meters (AMI) in Pakistan 2026: Prices, Working &amp; Prepaid Guide
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">
            Last verified: August 2026 • Sources: NEPRA, LESCO, IESCO, K-Electric, Ministry of Energy Power Division
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="Every 15 Minutes Automated Telemetry"
          topicTitleUr="ہر 15 منٹ بعد خودکار ریڈنگ ترسیل"
          answerEn="An Advanced Metering Infrastructure (AMI) smart meter is a digital electricity meter that automatically records and transmits real-time consumption data to your power distribution company (DISCO) every 15 minutes via cellular/RF networks. Under NEPRA directives, all DISCOs (LESCO, IESCO, K-Electric, MEPCO) are transitioning to mandatory AMI smart meters for new connections and urban upgrades by 2027 to eliminate manual meter reading, prevent overbilling, and support real-time time-of-use tariffs."
          answerUr="اسمارٹ میٹر (AMI) جدید ڈیجیٹل بجلی کا میٹر ہے جو ہر 15 منٹ بعد سم اور ریڈیو فریکوئنسی کے ذریعے بجلی کے استعمال کا لائیو ڈیٹا خودکار طریقے سے لیسکو، کے الیکٹرک یا آئیسکو کو بھیجتا ہے۔ نیپرا کے احکامات کے مطابق 2027 تک تمام نئے کنکشنز اور پرانے میٹرز کو جدید اسمارٹ میٹرز میں تبدیل کیا جا رہا ہے تاکہ اوور بلنگ اور دستی ریڈنگ کا مکمل خاتمہ ہو۔"
        />

        <AdPlacementZone slotId="smart-meter-top" format="horizontal" />

        {/* Section 1: What is an AMI Smart Meter & Key Benefits */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-doc-brass" />
              <span className="font-mono text-xs uppercase tracking-widest text-doc-brass font-bold">
                CORE TECHNOLOGY &amp; FUNCTIONALITY
              </span>
            </div>
            <h2 className="font-serif font-extrabold text-2xl text-doc-ink dark:text-slate-100">
              What is an AMI Smart Meter and What Actually Changes for Consumers?
            </h2>
          </div>

          <div className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base space-y-4">
            <p>
              For decades, electricity billing across Pakistan has relied on manual meter readers walking door-to-door with handheld cameras or mobile phones. This outdated practice has frequently resulted in <strong>delayed readings, estimated bills, artificial slab jumps, and widespread consumer complaints</strong>.
            </p>
            <p>
              To modernize the national grid and restore public trust, the <strong>National Electric Power Regulatory Authority (NEPRA)</strong> and the Ministry of Energy have mandated the comprehensive rollout of <strong>Advanced Metering Infrastructure (AMI)</strong>. Unlike conventional mechanical or static digital meters, an AMI smart meter functions as an intelligent two-way communication terminal.
            </p>
          </div>

          {/* 4 Core Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-doc-paper dark:bg-doc-dark-card border border-doc-brass/30 space-y-2">
              <div className="flex items-center gap-2 text-doc-ink dark:text-white font-bold font-serif text-base">
                <Radio className="w-5 h-5 text-doc-seal" />
                <span>15-Minute Automated Telemetry</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                The meter transmits encrypted energy consumption packets directly to the DISCO’s central database every 15 minutes using an internal cellular eSIM or secure Radio Frequency (RF) mesh network. No human meter reader ever needs to visit your premises.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-doc-paper dark:bg-doc-dark-card border border-doc-brass/30 space-y-2">
              <div className="flex items-center gap-2 text-doc-ink dark:text-white font-bold font-serif text-base">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Elimination of Artificial Slab Creep</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Because timestamps are locked digitally on the 30th or 31st day of the billing cycle, DISCOs cannot arbitrarily stretch your billing window to 33–35 days to push protected lifeline consumers into higher, expensive tariff brackets.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-doc-paper dark:bg-doc-dark-card border border-doc-brass/30 space-y-2">
              <div className="flex items-center gap-2 text-doc-ink dark:text-white font-bold font-serif text-base">
                <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Real-Time Consumer App Visibility</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Consumers can log into official DISCO customer mobile applications (such as LESCO Light, K-Electric Live, or IESCO Customer Portal) to track live hourly load curves, peak-hour energy consumption, and projected monthly bills before month-end.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-doc-paper dark:bg-doc-dark-card border border-doc-brass/30 space-y-2">
              <div className="flex items-center gap-2 text-doc-ink dark:text-white font-bold font-serif text-base">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span>Instant Outage &amp; Tamper Detection</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                The meter immediately transmits an emergency &quot;last-gasp&quot; signal to the grid sub-division if power cuts out or if magnetic tampering, neutral bypass, or enclosure opening is attempted, enabling faster line fault restoration.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Current Pricing & Solar Net Billing Exemption */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Coins className="w-5 h-5 text-doc-brass" />
              <span className="font-mono text-xs uppercase tracking-widest text-doc-brass font-bold">
                PRICING &amp; DISCO DEMAND NOTICES
              </span>
            </div>
            <h2 className="font-serif font-extrabold text-2xl text-doc-ink dark:text-slate-100">
              Smart Meter Pricing Breakdown &amp; Who Pays for Replacement
            </h2>
          </div>

          <div className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base space-y-4">
            <p>
              Smart meter procurement and installation charges are determined by statutory DISCO engineering schedules approved by NEPRA. In major utilities like LESCO (Lahore Electric Supply Company), prices for new connections were recently revised to reflect global semiconductor and cellular module costs:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong>Single-Phase AMI Base Unit:</strong> Recently reported at approximately <strong>PKR 11,665</strong> (hardware cost only).
              </li>
              <li>
                <strong>Single-Phase Complete Installation Package:</strong> Recently reported at approximately <strong>PKR 17,700</strong> (which includes the smart meter unit, up to 10 meters of heavy-gauge service cable, and terminal accessories). If cable distance exceeds 10 meters, additional per-meter cable charges apply.
              </li>
              <li>
                <strong>Full New Connection Demand Notice:</strong> When combined with security deposits and connection registration charges, total demand notice amounts for new single-phase residential meters frequently range from <strong>PKR 20,500 to PKR 21,300</strong>.
              </li>
              <li>
                <strong>Three-Phase AMI Smart Meters:</strong> For commercial or residential 3-phase loads (over 5 kW), complete demand notice packages generally range from <strong>PKR 35,000 to PKR 48,000</strong>.
              </li>
            </ul>
          </div>

          {/* Pricing Disclaimer Alert */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-500/40 space-y-2">
            <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-bold text-sm">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>Price Transparency &amp; DISCO Variations Note:</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              These figures reflect recently reported official tariff schedules. Because hardware procurement contracts and dollar-rupee parity fluctuate, prices vary across different DISCOs (LESCO, IESCO, FESCO, MEPCO, PESCO, K-Electric). Always confirm the exact payable amount on your official printed Demand Notice before depositing funds.
            </p>
          </div>

          {/* Important Solar Net Billing Highlight */}
          <div className="p-5 sm:p-6 rounded-3xl bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-500/40 space-y-3">
            <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-200 font-bold text-base font-serif">
              <Sun className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>Rooftop Solar &amp; Net Billing Bidirectional Smart Meter Policy</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              If you install an approved rooftop solar panel system (5 kW or larger) and apply for grid synchronization under the current{' '}
              <Link
                href="/bills/net-metering-net-billing-change-2026"
                className="text-doc-seal dark:text-emerald-400 font-bold underline hover:opacity-80 transition"
              >
                NEPRA Net Metering to Net Billing Regulations 2026
              </Link>
              , the DISCO installs a compliant <strong>bidirectional (green) smart meter</strong> to independently measure imported and exported units as part of your sanctioned interconnection framework.
            </p>
          </div>

          {/* Defective Meter Policy Update */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-doc-brass" />
              <span>What Happens if Your Old Meter is Defective or Burnt?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              In a recent policy directive, utilities like LESCO have decided to replace burnt, sluggish, or defective single-phase meters with <strong>conventional static meters free of cost</strong> to relieve immediate financial stress on consumers, while reserving mandatory AMI smart meter fee payments for <strong>new connection applicants and major grid upgrade zones</strong>.
            </p>
          </div>
        </section>

        {/* Section 3: Standard AMI vs Prepaid Electricity Pilot */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-doc-brass" />
              <span className="font-mono text-xs uppercase tracking-widest text-doc-brass font-bold">
                CRITICAL DISTINCTION
              </span>
            </div>
            <h2 className="font-serif font-extrabold text-2xl text-doc-ink dark:text-slate-100">
              Standard AMI Smart Meter vs. The New Prepaid Electricity Pilot
            </h2>
          </div>

          <div className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base space-y-4">
            <p>
              Many consumers confuse <strong>AMI Smart Meters</strong> with <strong>Prepaid Electricity Meters</strong>. While both rely on smart digital hardware, their commercial billing rules are completely different:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-doc-paper dark:bg-doc-dark-card border-2 border-doc-brass/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm font-serif text-doc-ink dark:text-white">
                  Standard AMI Smart Meter (Nationwide)
                </span>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-doc-ink/10 dark:bg-slate-700 text-doc-ink dark:text-slate-200">
                  Postpaid Model
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                You consume electricity throughout the month as usual. At the end of the 30-day cycle, the smart meter sends the exact final reading, and an official utility bill is generated. You pay your bill within the standard due date through mobile banking or bank counters.
              </p>
              <div className="text-xs font-mono text-doc-seal dark:text-doc-brass font-bold">
                ✓ Active rollout across all major DISCOs
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-doc-paper dark:bg-doc-dark-card border-2 border-emerald-500/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm font-serif text-doc-ink dark:text-white">
                  Prepaid Smart Meter Pilot (LESCO)
                </span>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                  Pay-As-You-Go
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Operates exactly like a prepaid mobile phone balance. You load balance into the meter via mobile wallet (EasyPaisa, JazzCash, or bank app). Electricity flows as long as credit exists; when balance reaches zero, supply disconnects automatically until recharged.
              </p>
              <div className="text-xs font-mono text-emerald-700 dark:text-emerald-300 font-bold">
                ✓ Currently piloted in select areas (e.g. Allama Iqbal Town, Lahore)
              </div>
            </div>
          </div>
        </section>

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step Smart Meter Installation & Activation Workflow"
          titleUr="اسمارٹ میٹر کی تنصیب اور ایکٹیویشن کا مرحلہ وار طریقہ کار"
          subtitleEn="4-stage verified sequence from DISCO demand notice to 15-minute telemetry billing"
          subtitleUr="ڈیمانڈ نوٹس کے اجراء سے لے کر خودکار بلنگ تک کے 4 مراحل"
          steps={[
            {
              number: 1,
              titleEn: "Application / Upgrade Demand Notice",
              titleUr: "درخواست اور ڈیمانڈ نوٹس کا اجراء",
              descEn: "Apply for a new electricity connection via the ENC portal or receive a DISCO phase-wise smart meter replacement notification.",
              descUr: "آن لائن پورٹل پر نئے کنکشن کی درخواست دیں یا لیسکو/آئیسکو سے اسمارٹ میٹر کی تبدیلی کا نوٹس حاصل کریں۔",
              tagEn: "ENC Portal",
              tagUr: "ڈیمانڈ نوٹس",
            },
            {
              number: 2,
              titleEn: "Fee Deposit & Site Survey",
              titleUr: "فیس کی ادائیگی اور وائرنگ معائنہ",
              descEn: "Pay the approved Demand Notice at any 1Link bank/app. The sub-division line staff verifies service line cable distance (~10m).",
              descUr: "کسی بھی بینک یا موبائل ایپ سے ڈیمانڈ نوٹس جمع کروائیں اور بجلی کی تار کی پیمائش کروائیں۔",
              tagEn: "1Link PSID",
              tagUr: "چالان ادائیگی",
            },
            {
              number: 3,
              titleEn: "Meter Installation & SIM Pairing",
              titleUr: "میٹر کی تنصیب اور سم ایکٹیویشن",
              descEn: "Authorized DISCO technicians mount the tamper-resistant AMI unit, activate the internal cellular eSIM, and register the opening reading.",
              descUr: "سرکاری لائن سٹاف نیا اسمارٹ میٹر لگا کر اندرونی سم ایکٹیویٹ کرتا ہے اور ابتدائی ریڈنگ محفوظ کرتا ہے۔",
              tagEn: "eSIM Paired",
              tagUr: "تنصیب مکمل",
            },
            {
              number: 4,
              titleEn: "Live Telemetry & Automated Bills",
              titleUr: "لائیو ٹیلی میٹری اور خودکار بلنگ",
              descEn: "Meter begins transmitting 15-minute consumption data. You receive 100% accurate, error-free monthly bills without human visits.",
              descUr: "میٹر ہر 15 منٹ بعد ڈیٹا بھیجنا شروع کر دیتا ہے اور بغیر کسی انسانی مداخلت کے درست بل جاری ہوتا ہے۔",
              tagEn: "15-Min Telemetry",
              tagUr: "خودکار بلنگ",
            },
          ]}
        />

        {/* Fee Structure Table */}
        <FeeTableVisual
          titleEn="Official Smart Meter (AMI) Fee Schedule 2026 (Reported DISCO Rates)"
          titleUr="اسمارٹ میٹر (AMI) کا سرکاری فیس شیڈول 2026"
          subtitleEn="Category-wise statutory rates for single-phase, three-phase, and solar net-billing meters"
          subtitleUr="سنگل فیز، تھری فیز اور سولر نیٹ بلنگ بائی ڈائریکشنل میٹر کی فیس کی تفصیل"
          noteEn="Prices are based on recently reported LESCO & NEPRA schedules. Final Demand Notice totals include municipal duties and load security deposits."
          rows={[
            {
              serviceEn: "Single-Phase AMI Smart Meter (Base Unit)",
              serviceUr: "سنگل فیز اسمارٹ میٹر (بنیادی یونٹ)",
              normal: "PKR 11,665 approx.",
              urgent: "Standard Demand Notice",
              executive: "Hardware Only",
              validity: "New / Upgraded Connection",
            },
            {
              serviceEn: "Single-Phase Installation Package (with 10m Cable)",
              serviceUr: "سنگل فیز مکمل پیکیج (10 میٹر کیبل سمیت)",
              normal: "PKR 17,700 approx.",
              urgent: "Total DN ~PKR 21,300",
              executive: "Cable + Unit + Box",
              validity: "Complete Residential Install",
            },
            {
              serviceEn: "Three-Phase AMI Smart Meter Package (Load > 5kW)",
              serviceUr: "تھری فیز اسمارٹ میٹر پیکیج (5 کلوواٹ سے زائد)",
              normal: "PKR 35,000 – 48,000",
              urgent: "Official DN Schedule",
              executive: "High Load Industrial/Res",
              validity: "Commercial / Large Home",
            },
            {
              serviceEn: "Defective / Burnt Meter Standard Replacement",
              serviceUr: "خراب یا جلے ہوئے میٹر کی تبدیلی",
              normal: "FREE (Static Meter)",
              urgent: "No Consumer Charge",
              executive: "LESCO SDO Policy",
              validity: "Faulty Meter Exchange",
            },
            {
              serviceEn: "Solar Net Billing Bidirectional Smart Meter (5kW+)",
              serviceUr: "سولر نیٹ بلنگ گرین بائی ڈائریکشنل میٹر",
              normal: "Included in Sanction",
              urgent: "NEPRA Prosumer Sched.",
              executive: "Import & Export Telemetry",
              validity: "Net Billing Contract Term",
            },
          ]}
        />

        <AdPlacementZone slotId="smart-meter-mid" format="horizontal" />

        {/* Section 6: FAQs */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Smart Meters Pakistan 2026)"
          titleUr="اسمارٹ میٹرز (AMI) پاکستان سے متعلق عام سوالات"
          subtitleEn="Essential guidelines on replacement charges, prepaid electricity, bill accuracy, and solar integration"
          subtitleUr="میٹر تبدیلی کی فیس، پری پیڈ بجلی کی حقیقت، بلوں میں کمی بیشی اور سولر نیٹ بلنگ کی تفصیل"
          items={[
            {
              questionEn: "Do I have to pay for a smart meter replacement if my existing meter is working normally?",
              questionUr: "اگر میرا پرانا میٹر بالکل ٹھیک چل رہا ہو تو کیا مجھے اسمارٹ میٹر کے پیسے دینے ہوں گے؟",
              answerEn: "Under standard DISCO replacement schedules, routine infrastructure transitions to AMI smart meters initiated by the power company in designated operational phases are funded through DISCO capital development budgets without direct upfront consumer surcharges. However, if you apply for a new connection, load extension, or voluntary early smart upgrade, you must pay the approved Demand Notice charges.",
              answerUr: "لیسکو یا دیگر کمپنیوں کی طرف سے اپنے علاقے میں شیڈول کے مطابق میٹر کی عمومی تبدیلی کا خرچہ کمپنی خود برداشت کرتی ہے۔ البتہ نیا کنکشن لگوانے یا لوڈ بڑھوانے کی صورت میں ڈیمانڈ نوٹس کے تحت فیس ادا کرنا لازمی ہے۔",
            },
            {
              questionEn: "Is a smart meter the same as a prepaid electricity meter?",
              questionUr: "کیا اسمارٹ میٹر اور پری پیڈ بجلی کا میٹر ایک ہی چیز ہیں؟",
              answerEn: "No. While prepaid electricity meters utilize smart AMI communication hardware, they operate on a pay-as-you-go recharge model where power is cut automatically when balance expires. Standard AMI smart meters, by contrast, operate on normal monthly postpaid billing cycles with 100% automated telemetry to eliminate manual reading errors.",
              answerUr: "نہیں! عام اسمارٹ میٹر پر پہلے کی طرح مہینے بعد بل آتا ہے لیکن اس میں ریڈنگ 100 فیصد خودکار ہوتی ہے۔ پری پیڈ میٹر موبائل بیلنس کی طرح کام کرتا ہے جس میں پہلے ریچارج کرنا پڑتا ہے اور بیلنس ختم ہونے پر بجلی بند ہو جاتی ہے۔",
            },
            {
              questionEn: "Will my electricity bill increase or decrease after getting an AMI smart meter?",
              questionUr: "کیا اسمارٹ میٹر لگنے سے بجلی کا بل زیادہ آئے گا یا کم؟",
              answerEn: "The statutory tariff rate per unit (kWh) set by NEPRA remains identical. However, smart meters record exact consumption down to the second and prevent artificial slab jumps caused by late meter readings. Consumers frequently see fewer disputes, elimination of estimated/detection bills, and accurate peak vs off-peak time-of-use calculations.",
              answerUr: "فی یونٹ بجلی کا سرکاری ریٹ بالکل وہی رہتا ہے۔ البتہ اسمارٹ میٹر سے اوور بلنگ، اندازے سے لگائے گئے یونٹس اور تاریخ آگے پیچھے ہونے کا مسئلہ ختم ہو جاتا ہے جس سے بل بالکل درست اور حقیقت کے مطابق آتا ہے۔",
            },
            {
              questionEn: "What if I install rooftop solar panels — do I have to pay for the bidirectional smart meter?",
              questionUr: "اگر میں گھر پر سولر پینلز لگواؤں تو کیا گرین میٹر کے الگ پیسے دینے ہوں گے؟",
              answerEn: "Under NEPRA Prosumer Regulations, when an approved rooftop solar system is commissioned under the net billing framework, the DISCO installs a compliant bidirectional smart meter capable of independently measuring exported solar units and imported grid units.",
              answerUr: "نیپرا نیٹ بلنگ قوانین کے تحت منظور شدہ سولر سسٹم کی منظوری کے بعد ڈسٹری بیوشن کمپنی بائی ڈائریکشنل اسمارٹ گرین میٹر لگا کر دیتی ہے جو آنے اور جانے والی بجلی کا الگ الگ لائیو حساب رکھتا ہے۔",
            },
            {
              questionEn: "How frequently does an AMI smart meter report consumption to the power company?",
              questionUr: "اسمارٹ میٹر کتنی دیر بعد بجلی کے استعمال کا ڈیٹا کمپنی کو بھیجتا ہے؟",
              answerEn: "AMI smart meters in Pakistan transmit encrypted consumption, voltage, and load telemetry to the DISCO central control center automatically every 15 minutes via cellular GPRS SIMs or localized RF mesh networks.",
              answerUr: "پاکستان میں نصب شدہ AMI اسمارٹ میٹرز ہر 15 منٹ بعد سم اور وائرلیس سگنلز کے ذریعے مرکزی ڈیٹا بیس کو بجلی کے استعمال اور وولٹیج کی مکمل رپورٹ خودکار بھیجتے ہیں۔",
            },
          ]}
        />

        {/* Section 7: Related Utilities & Cross-Links */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Electricity &amp; Utility Billing Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/bills/net-metering-net-billing-change-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Solar Policy 2026</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Net Metering to Net Billing Rules →
              </h3>
              <p className="text-xs text-slate-500 mt-1">NEPRA solar buyback rates, grandfathering, and smart meters.</p>
            </Link>

            <Link
              href="/bills/utility-bill-checker-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-seal font-bold uppercase block">Bill Downloads</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Online Utility Bill Checker →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check and download duplicate bills for LESCO, IESCO, FESCO &amp; K-Electric.</p>
            </Link>

            <Link
              href="/bills/wapda-complaint-status-tracker-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-emerald-600 font-bold uppercase block">DISCO Support</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                WAPDA Complaint Status Tracker →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Track overbilling, meter replacement, and line fault tickets.</p>
            </Link>
          </div>
        </section>

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Regulatory Sources Cited:</p>
          {[
            { label: 'National Electric Power Regulatory Authority (NEPRA) AMI Directives', url: 'https://nepra.org.pk/' },
            { label: 'Lahore Electric Supply Company (LESCO) Smart Metering & Tariff Schedule', url: 'https://www.lesco.gov.pk/' },
            { label: 'Ministry of Energy (Power Division) Advanced Metering Infrastructure Program', url: 'https://mowp.gov.pk/' },
            { label: 'Islamabad Electric Supply Company (IESCO) AMI Customer Portal', url: 'https://iesco.com.pk/' },
          ].map((src) => (
            <a
              key={src.url}
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-doc-seal"
            >
              <ExternalLink className="w-3 h-3" />
              {src.label}: <span className="font-mono">{src.url}</span>
            </a>
          ))}
        </section>
      </div>
    </>
  );
}
