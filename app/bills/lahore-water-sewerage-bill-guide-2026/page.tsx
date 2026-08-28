import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, ComparisonVisual, FAQAccordionVisual } from '@/components/visuals';
import { RelatedArticles } from '@/components/RelatedArticles';
import { InlineContextualLink } from '@/components/InlineContextualLink';
import {
  Droplet,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  Search,
  FileCheck,
  Building,
  Smartphone,
  PhoneCall,
  Scale,
  BadgeAlert,
  FileText,
  CreditCard
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WASA Lahore Water & Sewerage Bill Online Check 2026 – Duplicate Bill & ePay Guide | Pakistan Info Hub',
  description:
    'Check and download WASA Lahore duplicate water & sewerage bill online 2026 at wasa.punjab.gov.pk. Enter 8-digit consumer number, view monthly tariff slabs, pay via ePay Punjab / 1Bill / JazzCash, and resolve billing disputes via 1334 helpline.',
  keywords: [
    'WASA Lahore water bill online check 2026',
    'WASA Lahore duplicate bill download',
    'wasa punjab gov pk bill search',
    'Lahore water sewerage bill payment ePay',
    'WASA Lahore consumer number 8 digit',
    'WASA Lahore tariff slabs 2026',
    'WASA complaint helpline 1334 Lahore',
  ],
  openGraph: {
    title: 'WASA Lahore Water & Sewerage Bill Online Check 2026 – Duplicate Bill Guide',
    description:
      'Step-by-step guide to checking, downloading duplicate copies, and paying WASA Lahore water and sanitation bills via official channels.',
    url: 'https://www.pakistaninfohub.com/bills/lahore-water-sewerage-bill-guide-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/bills/lahore-water-sewerage-bill-guide-2026' },
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
          name: 'WASA Lahore Water Bill Guide 2026',
          item: 'https://www.pakistaninfohub.com/bills/lahore-water-sewerage-bill-guide-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'WASA Lahore Water & Sewerage Bill Guide 2026: Online Duplicate Check, ePay & Tariff Structure',
      description:
        'Official citizen guide to checking WASA Lahore water bills online, retrieving 8-digit consumer numbers, paying via cashless ePay Punjab, and filing complaints.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/bills/lahore-water-sewerage-bill-guide-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Check and Download WASA Lahore Water Bill Online',
      description: 'Step-by-step instructions to check and print your duplicate water bill from WASA Lahore.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Open Official WASA Lahore Portal',
          text: 'Visit wasa.punjab.gov.pk and click on the Duplicate Bill service section.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Enter 8-Digit Consumer Number',
          text: 'Locate the 8-digit Consumer Number (Account ID) printed at the top-left of any previous WASA paper bill and enter it.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Generate and View Duplicate Bill',
          text: 'Click Submit to view the complete bill breakdown including current charges, sewerage surcharge, and due date.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Pay Online via ePay Punjab or Banking Apps',
          text: 'Use the 1Bill / PSID biller code to pay instantly via ePay Punjab, JazzCash, EasyPaisa, or mobile banking.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where can I find my 8-digit WASA Lahore consumer number?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your 8-digit consumer number (also labeled as Account Number or Consumer ID) is prominently printed in the top-left box of your printed paper bill, directly above your name and property address.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I pay my WASA Lahore bill online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can pay using the ePay Punjab mobile app, or via any mobile banking app under 1Bill Bill Payment using the WASA Lahore biller code. Payments are also accepted at JazzCash, EasyPaisa, and Bank of Punjab (BOP) branches.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if my water bill shows an incorrect plot size or excessive billing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If your bill has incorrect plot dimensions or unmetered discrepancies, visit your local WASA Town Revenue Office with your property ownership documents (Fard/Registry) and CNIC, or register an official grievance by calling the 1334 WASA Toll-Free Helpline.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the official WASA Lahore helpline number for complaints?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The official 24/7 WASA Lahore complaint helpline is 1334 (toll-free from landline and mobile). You can also register sanitation and dirty water complaints via the "Punjab WASA" mobile app.',
          },
        },
      ],
    },
  ],
};

export default function LahoreWaterSewerageBillGuidePage() {
  const breadcrumbs = [
    { nameEn: 'Utility Bills', nameUr: 'یوٹیلیٹی بلز' },
    { nameEn: 'WASA Lahore Water Bill Guide 2026', nameUr: 'واسا لاہور واٹر بل گائیڈ 2026' },
  ];

  const billingSteps = [
    {
      stepNumber: 1,
      titleEn: 'Access Official WASA Lahore Billing Portal',
      titleUr: 'واسا لاہور آفیشل پورٹل کھولیں',
      detailEn:
        'Open wasa.punjab.gov.pk on your device and navigate to the "Duplicate Bill" section.',
      detailUr:
        'اپنے موبائل یا کمپیوٹر پر wasa.punjab.gov.pk کھولیں اور "Duplicate Bill" سیکشن پر کلک کریں۔',
      badgeEn: 'PORTAL CHECK',
      badgeUr: 'پورٹل رسائی',
    },
    {
      stepNumber: 2,
      titleEn: 'Locate & Enter 8-Digit Consumer Number',
      titleUr: '8 ہندسوں کا کنزیومر نمبر درج کریں',
      detailEn:
        'Find the 8-digit Account Number printed on the top-left box of your previous paper bill and type it without hyphens.',
      detailUr:
        'اپنے پرانے بل کے اوپری بائیں کونے میں لکھا 8 ہندسوں کا کنزیومر اکاؤنٹ نمبر بغیر ڈیشز کے درج کریں۔',
      badgeEn: 'CONSUMER ID',
      badgeUr: 'کنزیومر نمبر',
    },
    {
      stepNumber: 3,
      titleEn: 'Fetch & Download Printable PDF Bill',
      titleUr: 'بل ڈاؤن لوڈ اور تفصیلات چیک کریں',
      detailEn:
        'Review current water tariff, sewerage maintenance charges, arrears, and the exact payable due date.',
      detailUr:
        'موجودہ واٹر سپلائی چارجز، سیوریج مینٹیننس فیس، بقایا جات اور آخری تاریخ کا بغور جائزہ لیں۔',
      badgeEn: 'DUPLICATE BILL',
      badgeUr: 'ڈپلیکیٹ بل',
    },
    {
      stepNumber: 4,
      titleEn: 'Pay Digitally via ePay Punjab or 1Bill',
      titleUr: 'ای پے پنجاب یا 1Bill سے آن لائن ادا کریں',
      detailEn:
        'Use ePay Punjab, JazzCash, EasyPaisa, or your mobile banking app to settle the amount instantly without branch queues.',
      detailUr:
        'ای پے پنجاب ایپ، ایزی پیسہ، جاز کیش یا آن لائن بینکنگ سے 1Bill کے ذریعے فوری ادائیگی مکمل کریں۔',
      badgeEn: 'CASHLESS PAY',
      badgeUr: 'آن لائن ادائیگی',
    },
  ];

  const billingTariffComparison = [
    {
      titleEn: 'Unmetered Domestic',
      titleUr: 'غیر میٹرڈ گھریلو کنکشن',
      subtitleEn: 'Plot Size Base Tariff',
      subtitleUr: 'پلاٹ کے رقبے پر مبنی ٹیرف',
      badgeEn: 'RESIDENTIAL',
      badgeUr: 'رہائشی',
      badgeVariant: 'navy' as const,
      pointsEn: [
        'Billed quarterly or bi-monthly based on plot marla size (3, 5, 10, 20 Marla)',
        'Fixed water supply + fixed sewerage surcharge',
        'Annual drainage development fees included',
        'Automatic billing generated by Town Revenue Office',
      ],
      pointsUr: [
        'پلاٹ کے رقبے (3، 5، 10 مرلہ یا 1 کنال) کے حساب سے فکسڈ بل',
        'مقررہ واٹر سپلائی فیس اور سیوریج سرچارج',
        'سالانہ ڈرینج ڈویلپمنٹ چارجز شامل',
        'متعلقہ ٹاؤن ریونیو آفس کی جانب سے خودکار بل جاری',
      ],
    },
    {
      titleEn: 'Metered Domestic & Commercial',
      titleUr: 'میٹرڈ گھریلو و کمرشل کنکشن',
      subtitleEn: 'Actual Volumetric Consumption',
      subtitleUr: 'استعمال شدہ پانی کی اصل مقدار',
      badgeEn: 'METERED',
      badgeUr: 'میٹرڈ ٹیرف',
      badgeVariant: 'brass' as const,
      pointsEn: [
        'Billed per 1,000 Gallons (or cubic meters) recorded by flow meter',
        'Tiered volumetric slabs (0-5,000 Gallons, 5,000-10,000 Gallons, etc.)',
        'Higher commercial multipliers for plazas, car washes & restaurants',
        'Mandatory industrial waste disposal cess (if applicable)',
      ],
      pointsUr: [
        'ہر ایک ہزار گیلن پانی کے استعمال کے مطابق چارجز',
        'استعمال کے مختلف سلیبس (0 تا 5000 گیلن اور اس سے زائد)',
        'پلازوں، سروس اسٹیشنز اور ہوٹلوں کے لیے کمرشل ریٹس',
        'صنعتی فضلے کی نکاسی پر اضافی قانونی سیس',
      ],
      isPopular: true,
    },
    {
      titleEn: 'Dispute & Rectification',
      titleUr: 'بل درستگی اور شکایات',
      subtitleEn: 'Town Revenue Directorate',
      subtitleUr: 'ٹاؤن ریونیو ڈائریکٹوریٹ',
      badgeEn: 'RESOLVE',
      badgeUr: 'شکایت ازالہ',
      badgeVariant: 'emerald' as const,
      pointsEn: [
        'Correction of wrong plot dimensions on revenue records',
        'Removal of ghost arrears after presenting bank paid receipts',
        'Meter replacement request for dead/foggy water meters',
        'Grievance escalation via 1334 Toll-Free Helpline',
      ],
      pointsUr: [
        'پلاٹ کے غلط سائز اور کیٹیگری کی درستگی',
        'ادا شدہ بل کی رسید دکھا کر سابقہ بقایا جات کا خاتمہ',
        'خراب یا بند پانی کے میٹر کی تبدیلی کی درخواست',
        '1334 ہیلپ لائن کے ذریعے شکایت درج کروانے کی سہولت',
      ],
    },
  ];

  const faqItems = [
    {
      questionEn: 'How can I download a duplicate WASA Lahore water bill online?',
      questionUr: 'واسا لاہور کا ڈپلیکیٹ پانی کا بل آن لائن کیسے ڈاؤن لوڈ کریں؟',
      answerEn:
        'Visit wasa.punjab.gov.pk, click on "Duplicate Bill", enter your 8-digit consumer number, and view your bill. You can save it as a PDF or print it for physical bank payment.',
      answerUr:
        'ویب سائٹ wasa.punjab.gov.pk پر جا کر ڈپلیکیٹ بل منتخب کریں، اپنا 8 ہندسوں کا کنزیومر نمبر درج کریں اور پی ڈی ایف فارمیٹ میں بل پرنٹ کر لیں۔',
    },
    {
      questionEn: 'How do I pay my WASA Lahore bill through ePay Punjab?',
      questionUr: 'ای پے پنجاب ایپ کے ذریعے واسا بل کیسے ادا کریں؟',
      answerEn:
        'Open the ePay Punjab app, select "WASA", choose "WASA Lahore", enter your 8-digit consumer number to generate a PSID, and pay seamlessly using 1Bill, JazzCash, EasyPaisa, or mobile banking.',
      answerUr:
        'ای پے پنجاب ایپ کھول کر واسا لاہور منتخب کریں، کنزیومر نمبر لکھ کر پی ایس آئی ڈی بنائیں اور ایزی پیسہ، جاز کیش یا بینک ایپ سے ادا کریں۔',
    },
    {
      questionEn: 'What should I do if my water bill shows an incorrect plot size?',
      questionUr: 'اگر واٹر بل میں پلاٹ کا سائز غلط درج ہو تو کیا کریں؟',
      answerEn:
        'Visit your local WASA Town Revenue Office with an attested copy of your property Registry / Fard and CNIC. The revenue inspector will update your plot dimensions and issue an adjusted bill.',
      answerUr:
        'اپنے علاقے کے واسا ٹاؤن ریونیو آفس جا کر فرد یا رجسٹری کی کاپی اور شناختی کارڈ پیش کریں۔ متعلقہ افسر پلاٹ کا سائز درست کر کے نیا بل جاری کرے گا۔',
    },
    {
      questionEn: 'What is the WASA Lahore complaint helpline number?',
      questionUr: 'واسا لاہور کی شکایات ہیلپ لائن کا نمبر کیا ہے؟',
      answerEn:
        'Dial 1334 (toll-free across Lahore) for sewerage blockages, contaminated water supply, pipeline leakages, and billing grievances, available 24/7.',
      answerUr:
        'سیوریج بندش، گندے پانی کی سپلائی یا بلنگ کے مسائل کے لیے واسا کی 24 گھنٹے فعال ٹول فری ہیلپ لائن 1334 پر کال کریں۔',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="WASA LAHORE DIRECTORY" labelUr="واسا لاہور ڈائریکٹری" variant="gold" />
            <VerifiedBadge textEn="WASA LAHORE 2026 VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            WASA Lahore Water &amp; Sewerage Bill Online Check 2026: Duplicate Bill Guide
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              واسا لاہور پانی اور سیوریج بل آن لائن چیک، ڈپلیکیٹ بل ڈاؤن لوڈ اور ای پے ادائیگی
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Need to check or pay your Water and Sanitation Agency (WASA) Lahore water bill? Learn how to retrieve your 8-digit
            consumer number, download duplicate PDF bills, pay cashless via ePay Punjab &amp; 1Bill, and resolve billing disputes.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Check and Pay WASA Lahore Water Bill Online in 2026?"
          topicTitleUr="واسا لاہور کا واٹر بل آن لائن چیک اور ادا کرنے کا طریقہ کیا ہے؟"
          answerEn="Visit wasa.punjab.gov.pk and select the Duplicate Bill option. Enter your 8-digit Consumer Number (found on the top-left of previous bills) to view and download your duplicate bill. To pay digitally, open ePay Punjab, select WASA Lahore, enter your consumer ID to generate a 1Bill PSID, and pay via JazzCash, EasyPaisa, or mobile banking."
          answerUr="واسا کی آفیشل ویب سائٹ wasa.punjab.gov.pk پر جا کر Duplicate Bill کا آپشن منتخب کریں۔ اپنے پرانے بل کے اوپری بائیں کونے پر لکھا 8 ہندسوں کا کنزیومر نمبر درج کریں اور بل ڈاؤن لوڈ کریں۔ آن لائن ادائیگی کے لیے ای پے پنجاب ایپ استعمال کریں اور 1Bill، ایزی پیسہ یا جاز کیش سے ادا کریں۔"
        />

        {/* In-Article Contextual Companion Tool */}
        <InlineContextualLink
          targetSlug="utility-bill-checker-2026"
          customLabelEn="Universal Pakistan Utility Bill Checker"
          customLabelUr="تمام کمپنیوں کا یوٹیلیٹی بل چیکر"
          customNoteEn="Check and download duplicate bills for LESCO, K-Electric, IESCO, Sui Gas, and WASA across all major cities."
          customNoteUr="لیسکو بجلی، سوئی گیس اور دیگر تمام یوٹیلیٹی سروسز کے ڈپلیکیٹ بل فوری چیک کریں۔"
        />

        {/* Section 1: ProcessStepsDiagram */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Droplet className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step: How to Check &amp; Pay WASA Lahore Bill
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Follow this step-by-step workflow to check your consumer dues and complete digital payment without visiting town offices:
          </p>

          <ProcessStepsDiagram
            steps={billingSteps}
            titleEn="WASA Lahore Water Bill Inquiry & Digital Payment Sequence"
            titleUr="واسا لاہور واٹر بل معلوم کرنے اور آن لائن ادائیگی کا مرحلہ وار طریقہ"
            subtitleEn="Direct electronic billing integration on PITB & WASA Lahore servers"
            subtitleUr="پنجاب آئی ٹی بورڈ اور واسا لاہور کے سنٹرل بلنگ سرورز سے براہ راست ڈیٹا"
            variant="dark"
          />
        </section>

        {/* Section 2: Tariff Breakdown */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              WASA Lahore Tariff Slabs &amp; Dispute Resolution
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Understand how WASA calculates domestic vs commercial water charges across Lahore towns (Ravi, Shalimar, Gulgberg, Data Ganj Bakhsh, Nishtar, Allama Iqbal, Samanabad, Jubilee Town):
          </p>

          <ComparisonVisual
            items={billingTariffComparison}
            titleEn="WASA Lahore Billing & Tariff Structure"
            titleUr="واسا لاہور ٹیرف کیٹیگریز اور بل درستگی گائیڈ"
            subtitleEn="Domestic plot-size rates vs metered consumption parameters"
            subtitleUr="گھریلو پلاٹ ریٹس بمقابلہ میٹرڈ کمرشل کنکشن چارجز"
          />
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 3: City Sibling Cross-Links */}
        <section className="p-6 rounded-2xl bg-doc-paper dark:bg-slate-900 border border-doc-brass/30 space-y-4">
          <div className="flex items-center gap-2">
            <Building className="w-6 h-6 text-doc-seal" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Water &amp; Sanitation Bill Guides in Other Major Cities
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Check and pay water utility bills for Karachi, Faisalabad, and Peshawar via our dedicated urban service guides:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-sans">
            <Link
              href="/bills/karachi-water-board-bill-guide-2026"
              className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex flex-col justify-between group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-blue-700 dark:text-blue-400 uppercase">KARACHI (KWSC)</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                  Karachi Water Board (KWSC) →
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-[11px]">
                  KWSC Karachi consumer ID check, duplicate bill, online payment, and tanker helpline 1339.
                </p>
              </div>
            </Link>

            <Link
              href="/bills/faisalabad-water-bill-guide-2026"
              className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex flex-col justify-between group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase">FAISALABAD (WASA)</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                  WASA Faisalabad Bill Guide →
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-[11px]">
                  WASA Faisalabad consumer account lookup, duplicate bill print, and 1334 helpline.
                </p>
              </div>
            </Link>

            <Link
              href="/bills/wssp-peshawar-water-bill-guide"
              className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex flex-col justify-between group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-doc-brass uppercase">PESHAWAR (WSSP)</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                  WSSP Peshawar Water Bill →
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-[11px]">
                  Peshawar WSSP tariff slabs, Bank of Khyber counters, and 1337 sanitation helpline.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <FAQAccordionVisual
          items={faqItems}
          titleEn="Frequently Asked Questions (WASA Lahore Water Bill)"
          titleUr="عام طور پر پوچھے جانے والے سوالات (واسا لاہور واٹر بل)"
          subtitleEn="Essential billing, tariff, and dispute resolution guidelines verified for 2026"
          subtitleUr="واسا لاہور رولز 2026 کے مطابق بلنگ اور شکایات سے متعلق مصدقہ سوالات و جوابات"
        />

        {/* Section 5: High-Discovery Related Articles */}
        <RelatedArticles
          explicitSlugs={[
            '/bills/lesco-bill-check-online',
            '/bills/utility-bill-checker-2026',
            '/bills/sngpl-bill-check-online',
          ]}
          titleEn="Recommended Next Steps: Lahore Utility Services"
          titleUr="اگلے مفید مراحل: لاہور کی دیگر یوٹیلیٹی سروسز"
          subtitleEn="Explore LESCO electricity bill inquiry, universal bill checker, and SNGPL gas duplicate bills"
          subtitleUr="لیسکو بجلی بل، سوئی گیس بل اور ہمہ گیر یوٹیلیٹی چیکر دیکھیں"
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Water and Sanitation Agency (WASA) Lahore', url: 'https://wasa.punjab.gov.pk/' },
            { label: 'Punjab Information Technology Board (PITB)', url: 'https://pitb.gov.pk/' },
            { label: 'ePay Punjab Revenue Portal', url: 'https://epay.punjab.gov.pk/' },
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
