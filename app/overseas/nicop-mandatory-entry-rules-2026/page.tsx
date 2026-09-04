import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, FAQAccordionVisual } from '@/components/visuals';
import {
  HelpCircle,
  ExternalLink,
  Plane,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  Globe,
  CreditCard,
  FileX,
  FileCheck,
  ShieldAlert,
  AlertCircle,
  Building
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NICOP Mandatory Entry Rules 2026 – Overseas Pakistanis Foreign Passport Policy | Pakistan Info Hub',
  description:
    'Complete guide to Pakistan FIA mandatory NICOP entry rules in 2026: Valid unexpired NICOP required for foreign passport visa-free travel, airline denied boarding directives, renewal receipts discontinued, and quick eVisa alternatives.',
  keywords: [
    'NICOP mandatory foreign passport 2026',
    'Pakistan visa free entry foreign passport NICOP',
    'expired NICOP travel Pakistan airline boarding',
    'NICOP renewal receipt not accepted 2026',
    'FIA Pakistan immigration rules foreign passport',
    'overseas Pakistani visa on arrival landing permit',
    'British American Pakistani NICOP rules',
  ],
  openGraph: {
    title: 'NICOP Mandatory Entry Rules 2026 – Foreign Passport Travel Guide',
    description:
      'Urgent advisory for overseas Pakistanis traveling on foreign passports: Strict 2026 FIA rules on valid Smart NICOP, airline boarding checks, and eVisa solutions.',
    url: 'https://www.pakistaninfohub.com/overseas/nicop-mandatory-entry-rules-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/overseas/nicop-mandatory-entry-rules-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Overseas Pakistanis', item: 'https://www.pakistaninfohub.com/overseas' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Mandatory NICOP Entry Rules 2026',
          item: 'https://www.pakistaninfohub.com/overseas/nicop-mandatory-entry-rules-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'NICOP Mandatory Entry Rules 2026: Valid Card Requirement for Foreign Passport Holders & Airline Boarding Guide',
      description:
        'An authoritative advisory detailing the Federal Investigation Agency (FIA) border control rules, unexpired Smart NICOP mandates, airline boarding enforcement, and fast-track eVisa alternatives.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-20',
      dateModified: '2026-08-21',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/overseas/nicop-mandatory-entry-rules-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I travel to Pakistan visa-free if my NICOP is expired but I have a NADRA renewal receipt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Under the strictly enforced FIA border regulations, an online renewal receipt or application token is NO LONGER accepted as a valid substitute for an unexpired physical card. International airlines have been instructed to deny boarding at departure airports to passengers holding foreign passports without a valid, physically active NICOP or an approved Pakistani visa.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does this mandatory NICOP rule apply to people traveling on a Pakistani passport?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. If you hold a valid, unexpired Pakistani passport (Machine Readable Passport or e-Passport), you have an unconditional constitutional right to enter Pakistan regardless of the status of your NICOP or CNIC.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if my flight is in a few days and my NICOP is expired?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Do not attempt to fly with an expired NICOP or renewal token. Instead, apply immediately for an electronic Pakistani Tourist/Family Visit Visa online via the official Pakistan Online Visa System (visa.nadra.gov.pk). E-Visas are typically processed and issued within 24 to 48 hours and allow hassle-free airline boarding on your foreign passport.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does this rule target only British Pakistanis or all foreign passport holders?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The rule applies uniformly across all countries worldwide (UK, US, Canada, EU, Gulf States, Australia, etc.). Rumors circulating on social media claiming a specific ban on British Pakistanis are completely false; the regulation is a universal border compliance standard for anyone entering Pakistan on any foreign passport.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I get a 72-hour landing permit or visa-on-arrival at Pakistani airports without a valid NICOP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The previous discretionary practice of issuing emergency landing permits or waivers for expired cards has been discontinued. Because international airlines conduct strict document verification prior to boarding, you will not be allowed to board your outbound flight without a valid NICOP or pre-approved eVisa.',
          },
        },
      ],
    },
  ],
};

export default function NicopMandatoryEntryRulesPage() {
  const breadcrumbs = [
    { nameEn: 'Overseas Pakistanis', nameUr: 'اوورسیز پاکستانیز' },
    { nameEn: 'Mandatory NICOP Entry Rules 2026', nameUr: 'غیر ملکی پاسپورٹ پر نائیکوپ کی لازمی شرط' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="URGENT TRAVEL ADVISORY" labelUr="اہم سفری ہدایت نامہ" variant="gold" />
            <VerifiedBadge textEn="FIA & DGI&P ENFORCEMENT 2026" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            NICOP Mandatory Entry Rules 2026: Foreign Passport Travel Requirements
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              اوورسیز پاکستانیوں کے لیے نائیکوپ قوانین: غیر ملکی پاسپورٹ پر سفر کی شرائط
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Under recent Federal Investigation Agency (FIA) border control directives, overseas Pakistanis traveling on
            foreign passports (British, American, Canadian, Australian, EU, etc.) face strict enforcement: a valid, unexpired
            Smart NICOP or a valid Pakistani visa is mandatory to board international flights.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What Do I Need to Travel to Pakistan on a Foreign Passport Right Now?"
          topicTitleUr="غیر ملکی پاسپورٹ پر پاکستان سفر کے لیے کیا ضروری ہے؟"
          answerEn="You MUST have either: (1) A valid, unexpired physical Smart NICOP, OR (2) An approved Pakistani eVisa stamped/printed with your foreign passport. Airlines are instructed to DENY BOARDING if your NICOP is expired; renewal receipts and landing permits are NO LONGER accepted."
          answerUr="غیر ملکی پاسپورٹ پر سفر کرنے والے پاکستانیوں کے پاس لازمی طور پر: (1) اصل کارآمد اسمارٹ نائیکوپ (NICOP)، یا (2) منظور شدہ پاکستانی ای ویزا ہونا ضروری ہے۔ ایکسپائرڈ نائیکوپ یا رینیول رسید پر ائیرلائنز جہاز پر سوار نہیں ہونے دیں گی۔"
        />

        {/* URGENT HIGHLIGHT BANNER: Airline Denied Boarding Advisory */}
        <section className="p-6 rounded-2xl bg-gradient-to-r from-red-900 via-slate-900 to-doc-ink text-white border-2 border-red-500 shadow-2xl space-y-4">
          <div className="flex items-center gap-3 border-b border-red-500/30 pb-3">
            <ShieldAlert className="w-7 h-7 text-red-400 shrink-0 animate-pulse" />
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-red-300 uppercase">
                AIRLINE DEPARTURE PROTOCOL • CRITICAL NOTICE
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-white">
                Airlines Enforce Pre-Boarding Verification
              </h2>
            </div>
          </div>

          <div className="space-y-3 text-sm text-slate-200 leading-relaxed font-sans">
            <p>
              The most common point of confusion: travelers assume immigration checks only occur upon landing at Islamabad, Lahore, or Karachi.
              In reality, <strong>Pakistani immigration authorities issued direct compliance notices to international airlines</strong> (including Emirates, Qatar Airways, British Airways, Virgin Atlantic, Saudia, Gulf Air, and PIA).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-red-500/40 space-y-1">
                <span className="font-bold text-red-300 block">1. Check-In Gate Rejection</span>
                <p className="text-slate-300">
                  Airline counter staff at London Heathrow, JFK, Toronto, Dubai, etc., will inspect your physical NICOP validity before issuing boarding passes.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-red-500/40 space-y-1">
                <span className="font-bold text-red-300 block">2. Renewal Tokens Rejected</span>
                <p className="text-slate-300">
                  Paper printouts showing &quot;NICOP Renewal in Process&quot; or Pak-ID tracking slips are <strong>not valid travel documents</strong>.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-red-500/40 space-y-1">
                <span className="font-bold text-red-300 block">3. Heavy Airline Fines</span>
                <p className="text-slate-300">
                  Airlines face thousands of dollars in carrier fines and repatriation costs for transporting passengers with invalid documents, causing zero-tolerance gate enforcement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Addressing the Confusion (Old Guidance vs 2026 Enforcement) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Why Is There Confusion? Old Guidelines vs Current Enforcement
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Many overseas Pakistanis are caught off guard because older blog posts and legacy immigration notices
            indicated that an expired card plus a NADRA tracking slip was sufficient. Here is the definitive clarification:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 space-y-2 opacity-80">
              <span className="text-slate-500 font-bold uppercase font-mono text-[10px]">
                PREVIOUS / OUTDATED PRACTICE
              </span>
              <h3 className="font-serif font-bold text-sm text-slate-700 dark:text-slate-300">
                Discretionary Receipts &amp; Landing Permits
              </h3>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-400 list-disc list-inside">
                <li>Travelers occasionally boarded with expired cards and renewal slips.</li>
                <li>Immigration officers at Pakistani airports granted emergency landing waivers.</li>
                <li>Inconsistent enforcement across different international carriers.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700/60 space-y-2">
              <span className="text-emerald-700 dark:text-emerald-400 font-bold uppercase font-mono text-[10px]">
                CURRENT OFFICIAL ENFORCEMENT (2026)
              </span>
              <h3 className="font-serif font-bold text-sm text-emerald-900 dark:text-emerald-200">
                Strict Physical NICOP or eVisa Mandatory
              </h3>
              <ul className="space-y-1.5 text-emerald-950 dark:text-emerald-100 list-disc list-inside">
                <li><strong>No physical valid card = No boarding.</strong></li>
                <li>Digital tracking receipts or paper tokens strictly barred for travel.</li>
                <li>Uniform standard applied to British, US, Canadian, and European passports.</li>
              </ul>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 2: What to Do If Your Travel Is Imminent */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Emergency Action Plan: What to Do Based on Your Travel Date
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm">
                <CreditCard className="w-5 h-5" />
                <span>Scenario A: Travel is More Than 10–14 Days Away</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Apply immediately for an <strong>Executive Smart NICOP Renewal</strong> on the official Pak-ID portal (<code>id.nadra.gov.pk</code>).
                Executive processing delivers the physical card via DHL courier to your international address within 7 to 10 working days.
              </p>
              <Link
                href="/nadra/nicop-fee-calculator"
                className="inline-flex items-center gap-1 text-doc-seal font-bold hover:underline"
              >
                <span>Calculate Zone A/B Executive Fees →</span>
              </Link>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                <Globe className="w-5 h-5" />
                <span>Scenario B: Flight is in Less Than 7 Days (Fastest Fix)</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Do NOT wait for a physical NICOP. Apply for an <strong>Electronic Tourist / Family Visit Visa</strong> at <code>visa.nadra.gov.pk</code>.
                Pakistan eVisas for origin-Pakistan foreign citizens are typically approved and emailed within 24 to 48 hours, allowing instant boarding.
              </p>
              <a
                href="https://visa.nadra.gov.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-600 font-bold hover:underline"
              >
                <span>Apply on Pakistan Online Visa Portal →</span>
              </a>
            </div>
          </div>
        </section>

        {/* Section 3: Pre-Flight Checklist */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Pre-Flight Travel Checklist for Overseas Pakistanis
            </h2>
          </div>

          <div className="space-y-2.5 text-xs font-sans">
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Check Expiry Date:</strong> Ensure your Smart NICOP validity extends beyond your scheduled date of departure from Pakistan.
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Matching Names:</strong> Confirm that the name on your foreign passport corresponds with the name on your NICOP or visa.
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Physical Original Card:</strong> Pack the physical Smart NICOP in your hand carry. Digital smartphone photos or photocopies are rejected at airline counters.
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Children / Minors:</strong> Verify that minor children holding foreign passports possess their own individual valid Smart NICOPs or family visit visas.
              </span>
            </div>
          </div>
        </section>

        {/* Section 4: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Overseas &amp; Passport Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/passport/passport-new-rules-2026-cashless-epassport"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Passport Reforms</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Passport New Rules 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Cashless QR payments, 14-day delivery, and e-passports.</p>
            </Link>

            <Link
              href="/nadra/nicop-fee-calculator"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Fee Calculator</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NICOP Fee Calculator 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Calculate Zone A and Zone B renewal fees in USD/GBP/EUR.</p>
            </Link>

            <Link
              href="/overseas/nicop-renewal-from-abroad"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Step-by-Step Guide</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Renew NICOP from Abroad →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Pak-ID mobile app biometric fingerprint capture guide.</p>
            </Link>
          </div>
        </section>

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Pre-Travel Compliance Checklist for Overseas Pakistanis"
          titleUr="بیرون ملک مقیم پاکستانیوں کے لیے سفر سے قبل تصدیقی مراحل"
          subtitleEn="4 mandatory checkpoints before booking flights to avoid airport boarding denial"
          subtitleUr="ایئرپورٹ پر آف لوڈ ہونے سے بچنے کے لیے 4 لازمی احتیاطی تدابیر"
          steps={[
            {
              number: 1,
              titleEn: "Inspect Physical NICOP Expiry",
              titleUr: "اصل شناختی کارڈ کی تاریخ دیکھیں",
              descEn: "Confirm you hold an unexpired physical Smart NICOP. Digital photos or paper renewal receipts are NO LONGER accepted for travel.",
              descUr: "یقینی بنائیں کہ اصل اسمارٹ نائیکوپ موجود ہے اور زائد المیعاد نہیں ہے۔ رسید یا تصویر قابل قبول نہیں۔",
              tagEn: "Physical Card",
              tagUr: "اصل کارڈ",
            },
            {
              number: 2,
              titleEn: "Check Foreign Passport Validity",
              titleUr: "غیر ملکی پاسپورٹ کی میعاد",
              descEn: "Ensure your foreign passport (US, UK, Canadian, EU, etc.) has at least 6 months validity from departure date.",
              descUr: "غیر ملکی پاسپورٹ کی کم از کم 6 ماہ میعاد باقی ہونا ضروری ہے۔",
              tagEn: "Passport",
              tagUr: "پاسپورٹ",
            },
            {
              number: 3,
              titleEn: "Pak-ID Renewal (>30 Days)",
              titleUr: "پاک آئی ڈی ایپ سے تجدید",
              descEn: "If expired and flight is more than 4 weeks away, submit urgent renewal via the Pak-ID app with biometric fingerprint capture.",
              descUr: "اگر وقت باقی ہے تو پاک آئی ڈی ایپ سے فنگر پرنٹس اسکین کر کے ارجنٹ کارڈ منگوائیں۔",
              tagEn: "Pak-ID App",
              tagUr: "ایپ تجدید",
            },
            {
              number: 4,
              titleEn: "Fast-Track 24h eVisa (<7 Days)",
              titleUr: "ہنگامی 24 گھنٹے ای ویزا",
              descEn: "If travel is imminent, do NOT risk airport rejection. Apply online at visa.nadra.gov.pk for guaranteed airline boarding clearance.",
              descUr: "اگر پرواز میں چند دن باقی ہیں تو ویزا پورٹل سے فوری الیکٹرانک ویزا حاصل کریں۔",
              tagEn: "24h eVisa",
              tagUr: "ای ویزا",
            },
          ]}
        />

        {/* FAQ Section */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Mandatory NICOP Rule)"
          titleUr="نائیکوپ لازمی ہونے کے قانون کے متعلق عام سوالات"
          subtitleEn="Critical guidelines on renewal tokens, landing permits, and airline boarding policies"
          subtitleUr="تجدید کی رسید، لینڈنگ پرمٹ اور ایئرپورٹ بورڈنگ سے متعلق اہم قانونی وضاحت"
          items={[
            {
              questionEn: "Can I travel to Pakistan visa-free if my NICOP is expired but I have a NADRA renewal receipt?",
              questionUr: "اگر نائیکوپ ایکسپائر ہو لیکن تجدید کی رسید ہو تو کیا سفر ہو سکتا ہے؟",
              answerEn: "No. Under the strictly enforced FIA border regulations, an online renewal receipt or application token is NO LONGER accepted as a valid substitute for an unexpired physical card. International airlines have been instructed to deny boarding at departure airports to passengers holding foreign passports without a valid, physically active NICOP or an approved Pakistani visa.",
              answerUr: "نہیں، ایف آئی اے کے سخت احکامات کے تحت نادرا کی رسید پر سفر کی اجازت ختم کر دی گئی ہے۔ ایئرلائنز اصل کارڈ کے بغیر مسافر کو بورڈنگ پاس جاری نہیں کرتیں۔",
            },
            {
              questionEn: "Does this mandatory NICOP rule apply to people traveling on a Pakistani passport?",
              questionUr: "کیا یہ قانون پاکستانی پاسپورٹ پر سفر کرنے والوں پر بھی لاگو ہوتا ہے؟",
              answerEn: "No. If you hold a valid, unexpired Pakistani passport (Machine Readable Passport or e-Passport), you have an unconditional constitutional right to enter Pakistan regardless of the status of your NICOP or CNIC.",
              answerUr: "نہیں! اگر آپ کے پاس درست پاکستانی پاسپورٹ ہے تو آپ بغیر نائیکوپ کے بھی قانونی طور پر وطن داخل ہو سکتے ہیں۔",
            },
            {
              questionEn: "What should I do if my flight is in a few days and my NICOP is expired?",
              questionUr: "اگر پرواز میں چند دن باقی ہوں اور نائیکوپ زائد المیعاد ہو تو کیا کریں؟",
              answerEn: "Do not attempt to fly with an expired NICOP or renewal token. Instead, apply immediately for an electronic Pakistani Tourist/Family Visit Visa online via the official Pakistan Online Visa System (visa.nadra.gov.pk). E-Visas are typically processed and issued within 24 to 48 hours and allow hassle-free airline boarding on your foreign passport.",
              answerUr: "ایکسپائر کارڈ پر ایئرپورٹ ہرگز نہ جائیں۔ فوری طور پر سرکاری پورٹل visa.nadra.gov.pk پر جا کر 24 سے 48 گھنٹوں میں آن لائن ویزا حاصل کریں۔",
            },
            {
              questionEn: "Does this rule target only British Pakistanis or all foreign passport holders?",
              questionUr: "کیا یہ قانون صرف برطانوی پاکستانیوں کے لیے ہے یا تمام ممالک کے لیے؟",
              answerEn: "The rule applies uniformly across all countries worldwide (UK, US, Canada, EU, Gulf States, Australia, etc.). Rumors circulating on social media claiming a specific ban on British Pakistanis are completely false; the regulation is a universal border compliance standard for anyone entering Pakistan on any foreign passport.",
              answerUr: "یہ قانون برطانیہ، امریکہ، کینیڈا اور خلیجی ممالک سمیت تمام غیر ملکی پاسپورٹ ہولڈرز پر یکساں لاگو ہے۔ کسی ایک ملک سے کوئی تفریق نہیں۔",
            },
            {
              questionEn: "Can I get a 72-hour landing permit or visa-on-arrival at Pakistani airports without a valid NICOP?",
              questionUr: "کیا پاکستانی ایئرپورٹ پہنچ کر 72 گھنٹے کا ایمرجنسی لینڈنگ پرمٹ مل سکتا ہے؟",
              answerEn: "No. The previous discretionary practice of issuing emergency landing permits or waivers for expired cards has been discontinued. Because international airlines conduct strict document verification prior to boarding, you will not be allowed to board your outbound flight without a valid NICOP or pre-approved eVisa.",
              answerUr: "نہیں، پرواز سے قبل ہی بورڈنگ روک دی جاتی ہے اور ایئرپورٹ پر ہنگامی لینڈنگ پرمٹ کی سابقہ سہولت اب مکمل طور پر ختم کر دی گئی ہے۔",
            },
          ]}
        />

        {/* Related Overseas Guides */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-doc-brass" />
            <h2 className="text-xl font-serif font-bold text-doc-ink dark:text-white">
              Related Overseas Pakistanis Utilities &amp; Legal Guides
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/overseas/overseas-pakistanis-voting-rights-current-status-2026"
              className="p-4 rounded-xl border border-doc-seal/30 bg-doc-seal/5 dark:bg-doc-seal/10 hover:border-doc-seal transition group"
            >
              <span className="text-xs font-mono text-doc-seal font-bold uppercase block">Legal Status 2026</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1 flex items-center justify-between">
                Overseas Voting Rights Status →
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Why online and postal voting is currently inactive, and what expats can actually do.
              </p>
            </Link>

            <Link
              href="/overseas/poc-card-pakistan-apply-online"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Former Citizens &amp; Spouses</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1 flex items-center justify-between">
                POC Card Online Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Pakistan Origin Card fees, eligibility, and rights for foreign passport holders.
              </p>
            </Link>

            <Link
              href="/nadra/voter-registration-check-cnic-ecp-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-emerald-600 font-bold uppercase block">ECP 8300 Verification</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1 flex items-center justify-between">
                Voter Registration by CNIC →
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Verify your registered home constituency, polling block code, and serial number.
              </p>
            </Link>
          </div>
        </section>

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Federal Investigation Agency (FIA) Immigration Wing', url: 'https://fia.gov.pk/' },
            { label: 'Pakistan Online Visa System (POVS)', url: 'https://visa.nadra.gov.pk/' },
            { label: 'Pak Identity (Pak-ID) Overseas Services', url: 'https://id.nadra.gov.pk/' },
            { label: 'Directorate General of Immigration & Passports (DGI&P)', url: 'https://dgip.gov.pk/' },
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
