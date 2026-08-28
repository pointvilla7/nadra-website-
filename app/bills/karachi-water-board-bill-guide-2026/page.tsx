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
  title: 'Karachi Water Board (KWSC) Bill Online Check 2026 – Duplicate Bill & Payment Guide | Pakistan Info Hub',
  description:
    'Check and download Karachi Water & Sewerage Corporation (KWSC / KWSB) water bill online 2026 at kwsc.gos.pk. Enter 10-digit consumer ID, pay via 1Bill / Kuickpay / JazzCash, book official water tankers, and register complaints via 1339 helpline.',
  keywords: [
    'Karachi water board bill check online 2026',
    'KWSC Karachi duplicate water bill download',
    'kwsc gos pk consumer bill search',
    'KWSB Karachi water bill payment online',
    'KWSC consumer ID lookup',
    'Karachi water tanker booking 1339 OTS',
    'KWSC helpline number Karachi',
  ],
  openGraph: {
    title: 'Karachi Water Board (KWSC) Bill Online Check 2026 – Duplicate Bill Guide',
    description:
      'Official citizen guide to checking, downloading duplicate copies, and paying KWSC Karachi water bills via digital channels.',
    url: 'https://www.pakistaninfohub.com/bills/karachi-water-board-bill-guide-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/bills/karachi-water-board-bill-guide-2026' },
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
          name: 'KWSC Karachi Water Bill Guide 2026',
          item: 'https://www.pakistaninfohub.com/bills/karachi-water-board-bill-guide-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Karachi Water & Sewerage Corporation (KWSC) Bill Guide 2026: Online Duplicate Check & Payment',
      description:
        'A comprehensive guide to verifying KWSC Karachi water bills online, retrieving consumer IDs, paying via 1Bill / Kuickpay, and booking official water tankers via 1339.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/bills/karachi-water-board-bill-guide-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Check and Pay KWSC Karachi Water Bill Online',
      description: 'Step-by-step instructions to check and print your duplicate water bill from KWSC Karachi.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Visit KWSC Official Portal',
          text: 'Access the official Government of Sindh portal for KWSC at kwsc.gos.pk.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Enter Consumer ID / Account Number',
          text: 'Type your 10-digit or 12-digit Consumer ID printed on the front of your KWSB / KWSC paper bill.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download Duplicate Bill',
          text: 'Inspect the billing statement showing current water charges, sewerage fee, arrears, and due date.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Pay via 1Bill or Mobile Banking',
          text: 'Use 1Bill, Kuickpay, JazzCash, EasyPaisa, or mobile banking to complete cashless bill settlement.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the difference between KWSB and KWSC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The former Karachi Water and Sewerage Board (KWSB) was restructured and officially reconstituted as the Karachi Water and Sewerage Corporation (KWSC) under the KWSC Act 2023 to modernize billing, infrastructure, and citizen services.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where do I find my KWSC consumer number in Karachi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your Consumer ID (10 or 12 digits) is located at the upper portion of your water bill, directly above your consumer name and property plot number.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I book an official subsidized water tanker in Karachi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can book an official KWSC water tanker by calling the 24/7 central helpline 1339 or by utilizing the KWSC Online Tanker Service (OTS) portal / mobile app at officially notified government rates.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I pay my KWSC water bill via online banking in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. KWSC bills can be paid online via 1Bill 1Link bill payment, Kuickpay, JazzCash, EasyPaisa, and all commercial banking applications (Meezan, HBL, UBL, Bank Alfalah).',
          },
        },
      ],
    },
  ],
};

export default function KarachiWaterBoardBillGuidePage() {
  const breadcrumbs = [
    { nameEn: 'Utility Bills', nameUr: 'یوٹیلیٹی بلز' },
    { nameEn: 'KWSC Karachi Water Bill Guide 2026', nameUr: 'کراچی واٹر بورڈ (KWSC) بل گائیڈ 2026' },
  ];

  const billingSteps = [
    {
      stepNumber: 1,
      titleEn: 'Access Official KWSC Web Portal',
      titleUr: 'آفیشل کے ڈبلیو ایس سی پورٹل کھولیں',
      detailEn:
        'Open kwsc.gos.pk on your browser. Ensure you are on the verified Government of Sindh .gos.pk domain.',
      detailUr:
        'اپنے براؤزر پر kwsc.gos.pk کھولیں اور تصدیق کریں کہ آپ اصل سرکاری ڈومین پر موجود ہیں۔',
      badgeEn: 'PORTAL CHECK',
      badgeUr: 'پورٹل رسائی',
    },
    {
      stepNumber: 2,
      titleEn: 'Enter Consumer ID / Account Number',
      titleUr: 'کنزیومر آئی ڈی / اکاؤنٹ نمبر درج کریں',
      detailEn:
        'Type your 10 or 12-digit Consumer ID printed at the top-center of your KWSC water billing voucher.',
      detailUr:
        'اپنے واٹر بل پر درج 10 یا 12 ہندسوں کا کنزیومر آئی ڈی نمبر احتیاط سے درج کریں۔',
      badgeEn: 'CONSUMER ID',
      badgeUr: 'کنزیومر نمبر',
    },
    {
      stepNumber: 3,
      titleEn: 'View Detailed Monthly Charges',
      titleUr: 'ماہانہ بل کی مکمل تفصیلات چیک کریں',
      detailEn:
        'Review volumetric supply charges, sewerage maintenance, arrears, and the exact payment due date.',
      detailUr:
        'پانی کے چارجز، سیوریج فیس، سابقہ بقایا جات اور آخری تاریخ کی تصدیق کریں۔',
      badgeEn: 'DUPLICATE BILL',
      badgeUr: 'ڈپلیکیٹ بل',
    },
    {
      stepNumber: 4,
      titleEn: 'Settle via 1Bill, Kuickpay or Banking App',
      titleUr: '1Bill یا بینکنگ ایپ سے ادائیگی کریں',
      detailEn:
        'Pay using 1Bill, Kuickpay, JazzCash, EasyPaisa, or at authorized bank branch counters across Karachi.',
      detailUr:
        '1Bill انوائس، کوئیک پے، جاز کیش، ایزی پیسہ یا بینک برانچ کے ذریعے باآسانی بل ادا کریں۔',
      badgeEn: 'DIGITAL PAY',
      badgeUr: 'آن لائن ادائیگی',
    },
  ];

  const kwscServiceComparison = [
    {
      titleEn: 'Regular Pipeline Billing',
      titleUr: 'پائپ لائن واٹر بلنگ',
      subtitleEn: 'Monthly / Quarterly Consumer Bills',
      subtitleUr: 'ماہانہ و سہ ماہی واٹر بلز',
      badgeEn: 'PIPELINE',
      badgeUr: 'پائپ لائن سپلائی',
      badgeVariant: 'navy' as const,
      pointsEn: [
        'Calculated based on plot area (e.g. 60 sq yds, 120 sq yds, 240 sq yds, 500+ sq yds)',
        'Sewerage conservancy fee integrated into total payable sum',
        'Payable through 1Bill, Kuickpay, ATMs, and digital wallets',
        'Town Revenue Office handles meter checks and billing disputes',
      ],
      pointsUr: [
        'پلاٹ کے رقبے (60، 120، 240، 500 گز) کے مطابق بلنگ',
        'سیوریج اور کنزروینسی فیس بل میں شامل',
        '1Bill، کوئیک پے اور ڈیجیٹل والٹس کے ذریعے ادائیگی',
        'ٹاؤن ریونیو آفس سے بلنگ درستگی کی سہولت',
      ],
    },
    {
      titleEn: 'Online Tanker Service (OTS)',
      titleUr: 'آن لائن ٹینکر سروس (OTS)',
      subtitleEn: 'Official Subsidized Water Delivery',
      subtitleUr: 'سرکاری کنٹرولڈ واٹر ٹینکر',
      badgeEn: 'OTS TANKER',
      badgeUr: 'واٹر ٹینکر',
      badgeVariant: 'brass' as const,
      pointsEn: [
        'Book official tankers via KWSC OTS mobile app or 1339 helpline',
        'Fixed government subsidized pricing per 1,000 / 2,000 / 3,000 Gallons',
        'GPS tracking of dispatched tankers to prevent black marketing',
        'Digital receipt generated with unique driver code and vehicle number',
      ],
      pointsUr: [
        'او ٹی ایس ایپ یا 1339 ہیلپ لائن کے ذریعے ٹینکر کی بکنگ',
        '1000، 2000 اور 3000 گیلن کے لیے سرکاری مقررہ نرخ',
        'بلیک مارکیٹنگ روکنے کے لیے ٹینکر کی جی پی ایس ٹریکنگ',
        'ڈرائیور کوڈ اور گاڑی کے نمبر کے ساتھ ڈیجیٹل رسید',
      ],
      isPopular: true,
    },
    {
      titleEn: 'Complaints & Dispute Desk',
      titleUr: 'شکایات اور واٹر کنکشن',
      subtitleEn: '1339 Central Helpline',
      subtitleUr: '1339 سینٹرل ہیلپ لائن',
      badgeEn: 'RESOLVE',
      badgeUr: 'شکایت ازالہ',
      badgeVariant: 'emerald' as const,
      pointsEn: [
        'Pipeline leakage and contamination grievance redressal',
        'Illegal connection reporting and disconnection enforcement',
        'Billing adjustment for unoccupied or under-construction plots',
        'Water shortage escalation to respective town executive engineers',
      ],
      pointsUr: [
        'پائپ لائن لیکیج اور گندے پانی کی شکایات کا ازالہ',
        'غیر قانونی کنکشنز کی روک تھام اور کارروائی',
        'خالی یا زیر تعمیر پلاٹس کے لیے بلنگ میں ایڈجسٹمنٹ',
        'پانی کی قلت پر متعلقہ ٹاؤن ایگزیکٹو انجینئر کو شکایت',
      ],
    },
  ];

  const faqItems = [
    {
      questionEn: 'How can I download a duplicate KWSC Karachi water bill online?',
      questionUr: 'کراچی واٹر بورڈ (KWSC) کا ڈپلیکیٹ بل آن لائن کیسے حاصل کریں؟',
      answerEn:
        'Visit kwsc.gos.pk, navigate to the billing section, enter your 10-digit consumer ID, and download your printable duplicate billing statement.',
      answerUr:
        'ویب سائٹ kwsc.gos.pk پر جا کر بلنگ سیکشن میں جائیں، اپنا 10 ہندسوں کا کنزیومر آئی ڈی درج کریں اور بل ڈاؤن لوڈ کریں۔',
    },
    {
      questionEn: 'How do I pay my Karachi water bill online in 2026?',
      questionUr: 'کراچی کا واٹر بل آن لائن کیسے ادا کریں؟',
      answerEn:
        'KWSC bills can be settled using 1Bill on mobile banking apps, Kuickpay, JazzCash, EasyPaisa, or at designated National Bank (NBP) and Meezan Bank counters.',
      answerUr:
        'آپ 1Bill، کوئیک پے، ایزی پیسہ، جاز کیش یا میزان بینک و نیشنل بینک کے ذریعے آن لائن بل ادا کر سکتے ہیں۔',
    },
    {
      questionEn: 'What is the official KWSC Karachi complaint and tanker helpline?',
      questionUr: 'کراچی واٹر بورڈ کی شکایات اور ٹینکر بکنگ کا ہیلپ لائن نمبر کیا ہے؟',
      answerEn:
        'Dial 1339 (24/7 central helpline across Karachi) for dirty water complaints, main pipeline bursts, or to book an official subsidized water tanker.',
      answerUr:
        'کراچی میں گندے پانی، پائپ لائن لیکیج یا سرکاری واٹر ٹینکر بکنگ کے لیے 1339 پر 24 گھنٹے رابطہ کیا جا سکتا ہے۔',
    },
    {
      questionEn: 'What should I do if my water bill shows old paid arrears?',
      questionUr: 'اگر ادا شدہ پرانا بل دوبارہ بقایا جات کے ساتھ آ جائے تو کیا کریں؟',
      answerEn:
        'Visit your respective KWSC Town Billing Office with your stamped bank payment receipts. The revenue officer will reconcile your payment and update the ledger.',
      answerUr:
        'اپنے علاقے کے کے ڈبلیو ایس سی ٹاؤن بلنگ آفس جا کر اصل مہر شدہ رسیدیں پیش کریں، ریونیو آفیسر ریکارڈ اپ ڈیٹ کر دے گا۔',
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
            <InteractiveToolBadge labelEn="KWSC KARACHI DIRECTORY" labelUr="کراچی واٹر بورڈ ڈائریکٹری" variant="gold" />
            <VerifiedBadge textEn="KWSC KARACHI 2026 VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Karachi Water Board (KWSC) Bill Online Check 2026: Duplicate Bill &amp; Payment
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              کراچی واٹر بورڈ (KWSC) بل آن لائن چیک، ڈپلیکیٹ بل ڈاؤن لوڈ اور 1339 ٹینکر گائیڈ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Looking to check, download, or pay your Karachi Water &amp; Sewerage Corporation (KWSC / formerly KWSB) bill?
            Learn how to look up your 10-digit consumer ID, pay via 1Bill &amp; Kuickpay, and book official subsidized water tankers via 1339.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Check and Pay KWSC Karachi Water Bill Online in 2026?"
          topicTitleUr="کراچی واٹر بورڈ (KWSC) کا بل آن لائن چیک اور ادا کرنے کا طریقہ کیا ہے؟"
          answerEn="Visit kwsc.gos.pk and navigate to the billing section. Enter your 10-digit Consumer ID (printed on top of your water bill) to generate and download your duplicate bill. To pay online, select 1Bill or Kuickpay in your mobile banking app, enter your biller reference number, and pay via JazzCash, EasyPaisa, or banking apps."
          answerUr="کراچی واٹر کارپوریشن کی آفیشل ویب سائٹ kwsc.gos.pk پر جائیں۔ اپنے بل پر لکھا 10 ہندسوں کا کنزیومر آئی ڈی درج کر کے ڈپلیکیٹ بل ڈاؤن لوڈ کریں۔ آن لائن ادائیگی کے لیے اپنی موبائل بینکنگ ایپ یا ایزی پیسہ / جاز کیش میں 1Bill یا کوئیک پے منتخب کر کے رقم ادا کریں۔"
        />

        {/* In-Article Contextual Companion Tool */}
        <InlineContextualLink
          targetSlug="utility-bill-checker-2026"
          customLabelEn="Universal Pakistan Utility Bill Checker"
          customLabelUr="تمام کمپنیوں کا یوٹیلیٹی بل چیکر"
          customNoteEn="Check electricity duplicate bills for K-Electric, SSGC gas bills, and other utility providers across Karachi."
          customNoteUr="کے الیکٹرک بجلی، سوئی سدرن گیس اور دیگر یوٹیلیٹی بلز آن لائن چیک کریں۔"
        />

        {/* Section 1: ProcessStepsDiagram */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Droplet className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step: How to Check &amp; Pay KWSC Karachi Bill
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Follow this step-by-step workflow to check your consumer dues and complete digital payment without visiting town offices:
          </p>

          <ProcessStepsDiagram
            steps={billingSteps}
            titleEn="KWSC Karachi Water Bill Inquiry & Digital Payment Sequence"
            titleUr="کراچی واٹر بورڈ بل معلوم کرنے اور آن لائن ادائیگی کا مرحلہ وار طریقہ"
            subtitleEn="Electronic billing integration on Government of Sindh & KWSC servers"
            subtitleUr="حکومت سندھ اور کراچی واٹر کارپوریشن کے اصل ڈیٹا بیس سے تصدیق شدہ طریقہ"
            variant="dark"
          />
        </section>

        {/* Section 2: Services Breakdown */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              KWSC Karachi Pipeline Billing, Tanker Services &amp; Helpline
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Explore key KWSC civic services across Karachi districts (District South, East, Central, West, Korangi, Malir, Keamari):
          </p>

          <ComparisonVisual
            items={kwscServiceComparison}
            titleEn="KWSC Karachi Civic Services & Dispute Matrix"
            titleUr="کراچی واٹر سروسز اور شکایات کا طریقہ کار"
            subtitleEn="Pipeline supply vs official OTS tanker booking parameters"
            subtitleUr="پائپ لائن سپلائی اور سرکاری او ٹی ایس واٹر ٹینکر کا موازنہ"
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
            Check and pay water utility bills for Lahore, Faisalabad, and Peshawar via our dedicated urban service guides:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-sans">
            <Link
              href="/bills/lahore-water-sewerage-bill-guide-2026"
              className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex flex-col justify-between group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase">LAHORE (WASA)</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                  WASA Lahore Bill Guide →
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-[11px]">
                  WASA Lahore 8-digit consumer lookup, duplicate bill print, and ePay Punjab payment.
                </p>
              </div>
            </Link>

            <Link
              href="/bills/faisalabad-water-bill-guide-2026"
              className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex flex-col justify-between group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-blue-700 dark:text-blue-400 uppercase">FAISALABAD (WASA)</span>
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
          titleEn="Frequently Asked Questions (KWSC Karachi Water Bill)"
          titleUr="عام طور پر پوچھے جانے والے سوالات (کراچی واٹر بل)"
          subtitleEn="Essential billing, tanker booking, and dispute resolution answers verified for 2026"
          subtitleUr="کراچی واٹر اینڈ سیوریج کارپوریشن رولز 2026 کے مطابق مصدقہ سوالات و جوابات"
        />

        {/* Section 5: High-Discovery Related Articles */}
        <RelatedArticles
          explicitSlugs={[
            '/bills/k-electric-duplicate-bill',
            '/bills/ssgc-duplicate-bill-check',
            '/bills/utility-bill-checker-2026',
          ]}
          titleEn="Recommended Next Steps: Karachi Utility Services"
          titleUr="اگلے مفید مراحل: کراچی کی دیگر یوٹیلیٹی سروسز"
          subtitleEn="Explore K-Electric electricity duplicate bills, SSGC gas bills, and universal bill checker"
          subtitleUr="کے الیکٹرک بجلی بل، سوئی سدرن گیس اور دیگر یوٹیلیٹی بلز دیکھیں"
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Karachi Water & Sewerage Corporation (KWSC)', url: 'https://www.kwsc.gos.pk/' },
            { label: 'Government of Sindh Services Portal', url: 'https://sindh.gov.pk/' },
            { label: 'Citizens-Police Liaison Committee (CPLC)', url: 'https://cplc.org.pk/' },
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
