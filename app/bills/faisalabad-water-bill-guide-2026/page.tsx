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
  title: 'WASA Faisalabad Water Bill Online Check 2026 – Duplicate Bill & Payment Guide | Pakistan Info Hub',
  description:
    'Check and download WASA Faisalabad duplicate water & sewerage bill online 2026 at wasafaisalabad.gop.pk. Enter 10-digit account number, view domestic/commercial tariff slabs, pay via ePay Punjab / JazzCash / EasyPaisa, and register complaints via 1334 helpline.',
  keywords: [
    'WASA Faisalabad water bill online check 2026',
    'WASA Faisalabad duplicate bill download',
    'wasafaisalabad gop pk consumer bill search',
    'Faisalabad water sewerage bill payment ePay',
    'WASA Faisalabad 10 digit account number',
    'WASA Faisalabad helpline 1334',
    'Faisalabad Development Authority water bill',
  ],
  openGraph: {
    title: 'WASA Faisalabad Water Bill Online Check 2026 – Duplicate Bill Guide',
    description:
      'Official citizen guide to checking, downloading duplicate copies, and paying WASA Faisalabad water and sanitation bills via online channels.',
    url: 'https://www.pakistaninfohub.com/bills/faisalabad-water-bill-guide-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/bills/faisalabad-water-bill-guide-2026' },
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
          name: 'WASA Faisalabad Water Bill Guide 2026',
          item: 'https://www.pakistaninfohub.com/bills/faisalabad-water-bill-guide-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'WASA Faisalabad Water & Sewerage Bill Guide 2026: Online Duplicate Check, ePay & Tariff Structure',
      description:
        'A comprehensive guide to verifying WASA Faisalabad water bills online, retrieving 10-digit account numbers, paying via cashless ePay Punjab, and resolving disputes via 1334 helpline.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/bills/faisalabad-water-bill-guide-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Check and Download WASA Faisalabad Water Bill Online',
      description: 'Step-by-step instructions to check and print your duplicate water bill from WASA Faisalabad.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Open Official WASA Faisalabad Portal',
          text: 'Visit wasafaisalabad.gop.pk and select the Duplicate Bill option from the citizen services menu.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Enter 10-Digit Account Number',
          text: 'Locate your 10-digit Account Number printed on the top section of any previous WASA paper bill.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Fetch and Review Duplicate Bill',
          text: 'Click Submit to view current water supply charges, sewerage fee, arrears, and the due date.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Pay Online via ePay Punjab or Mobile Banking',
          text: 'Use ePay Punjab or 1Bill to complete instant payment via JazzCash, EasyPaisa, or banking apps.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where can I find my 10-digit WASA Faisalabad account number?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your 10-digit account number is printed in the top section of your physical paper bill, directly above your consumer name and property address.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I pay my WASA Faisalabad bill online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can pay using the official ePay Punjab mobile application by selecting WASA Faisalabad, or through any mobile banking app, JazzCash, and EasyPaisa via 1Bill.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the WASA Faisalabad complaint helpline number?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The official 24/7 WASA Faisalabad complaint helpline is 1334 (toll-free). You can also register sanitation and dirty water complaints at your local Town WASA Directorate.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I pay my WASA Faisalabad bill after the due date online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Online digital channels like ePay Punjab and banking apps automatically compute the late payment surcharge after the due date, allowing you to settle the bill without visiting a branch.',
          },
        },
      ],
    },
  ],
};

export default function FaisalabadWaterBillGuidePage() {
  const breadcrumbs = [
    { nameEn: 'Utility Bills', nameUr: 'یوٹیلیٹی بلز' },
    { nameEn: 'WASA Faisalabad Water Bill Guide 2026', nameUr: 'واسا فیصل آباد واٹر بل گائیڈ 2026' },
  ];

  const billingSteps = [
    {
      stepNumber: 1,
      titleEn: 'Access Official WASA Faisalabad Portal',
      titleUr: 'واسا فیصل آباد آفیشل پورٹل کھولیں',
      detailEn:
        'Open wasafaisalabad.gop.pk on your device and navigate to the "Duplicate Bill" section.',
      detailUr:
        'اپنے کمپیوٹر یا موبائل پر wasafaisalabad.gop.pk کھولیں اور "Duplicate Bill" کے آپشن پر جائیں۔',
      badgeEn: 'PORTAL CHECK',
      badgeUr: 'پورٹل رسائی',
    },
    {
      stepNumber: 2,
      titleEn: 'Enter 10-Digit Account Number',
      titleUr: '10 ہندسوں کا اکاؤنٹ نمبر درج کریں',
      detailEn:
        'Find the 10-digit Account Number printed on the top section of your bill and type it without hyphens.',
      detailUr:
        'اپنے پرانے واٹر بل پر درج 10 ہندسوں کا اکاؤنٹ نمبر احتیاط سے لکھیں۔',
      badgeEn: 'ACCOUNT ID',
      badgeUr: 'اکاؤنٹ نمبر',
    },
    {
      stepNumber: 3,
      titleEn: 'Fetch & Download Printable PDF Bill',
      titleUr: 'بل ڈاؤن لوڈ اور تفصیلات چیک کریں',
      detailEn:
        'Review current water supply tariff, sewerage maintenance fee, arrears, and the exact payment due date.',
      detailUr:
        'موجودہ واٹر چارجز، سیوریج فیس، بقایا جات اور آخری تاریخ کی تصدیق کریں۔',
      badgeEn: 'DUPLICATE BILL',
      badgeUr: 'ڈپلیکیٹ بل',
    },
    {
      stepNumber: 4,
      titleEn: 'Pay Digitally via ePay Punjab or 1Bill',
      titleUr: 'ای پے پنجاب یا 1Bill سے ادائیگی کریں',
      detailEn:
        'Use ePay Punjab, JazzCash, EasyPaisa, or mobile banking to complete instant cashless settlement.',
      detailUr:
        'ای پے پنجاب ایپ، ایزی پیسہ، جاز کیش یا بینک ایپ کے ذریعے فوری بل ادا کریں۔',
      badgeEn: 'CASHLESS PAY',
      badgeUr: 'آن لائن ادائیگی',
    },
  ];

  const billingTariffComparison = [
    {
      titleEn: 'Domestic Residential',
      titleUr: 'گھریلو رہائشی کنکشن',
      subtitleEn: 'Plot Area Slabs (Marla)',
      subtitleUr: 'پلاٹ کے رقبے پر مبنی ٹیرف',
      badgeEn: 'RESIDENTIAL',
      badgeUr: 'رہائشی',
      badgeVariant: 'navy' as const,
      pointsEn: [
        'Quarterly billing structured on residential plot size (3, 5, 10, 20 Marla)',
        'Fixed water supply + sewerage maintenance component',
        'Standard sanitation maintenance charges included',
        'Automatic billing generated by Town Revenue Office',
      ],
      pointsUr: [
        'پلاٹ کے سائز (3، 5، 10، 20 مرلہ) کے مطابق سہ ماہی بلنگ',
        'مقررہ واٹر سپلائی اور سیوریج مینٹیننس چارجز',
        'شہری صفائی اور ڈرینج سروس فیس شامل',
        'متعلقہ ٹاؤن ریونیو آفس کی جانب سے خودکار بلنگ',
      ],
    },
    {
      titleEn: 'Commercial & Industrial',
      titleUr: 'کمرشل و صنعتی کنکشن',
      subtitleEn: 'Textile Mills & Markets',
      subtitleUr: 'ٹیکسٹائل اور تجارتی مراکز',
      badgeEn: 'COMMERCIAL',
      badgeUr: 'کمرشل ٹیرف',
      badgeVariant: 'brass' as const,
      pointsEn: [
        'Higher commercial tariffs for textile processing, dyeing units & markets',
        'Mandatory industrial effluent disposal charges',
        'Volumetric flow meter calculations for heavy industrial consumers',
        'Special environmental compliance surcharge',
      ],
      pointsUr: [
        'ٹیکسٹائل ملز، پروسیسنگ یونٹس اور مارکیٹوں کے لیے کمرشل ریٹس',
        'صنعتی فضلے کی نکاسی پر خصوصی چارجز',
        'بڑی صنعتوں کے لیے فلو میٹر کے ذریعے پیمائش',
        'ماحولیاتی تحفظ کا لازمی سرچارج',
      ],
      isPopular: true,
    },
    {
      titleEn: 'Dispute & Rectification',
      titleUr: 'بل درستگی اور شکایات',
      subtitleEn: '1334 Toll-Free Helpline',
      subtitleUr: '1334 ٹول فری ہیلپ لائن',
      badgeEn: 'RESOLVE',
      badgeUr: 'شکایت ازالہ',
      badgeVariant: 'emerald' as const,
      pointsEn: [
        'Correction of incorrect property dimensions in Lyallpur, Madina, Jinnah & Iqbal Towns',
        'Reconciliation of ghost arrears after submitting paid bank receipts',
        'Pipeline leakage and low water pressure complaint escalation',
        'Direct resolution via 1334 Citizen Helpline',
      ],
      pointsUr: [
        'لائل پور، مدینہ، جناح اور اقبال ٹاؤن میں پلاٹ سائز کی درستگی',
        'بینک رسید دکھا کر سابقہ بقایا جات کا ریکارڈ سے خاتمہ',
        'پائپ لائن لیکیج اور کم پریشر کی شکایات کا اندراج',
        '1334 ہیلپ لائن کے ذریعے فوری کارروائی اور ازالہ',
      ],
    },
  ];

  const faqItems = [
    {
      questionEn: 'How can I download a duplicate WASA Faisalabad water bill online?',
      questionUr: 'واسا فیصل آباد کا ڈپلیکیٹ بل آن لائن کیسے ڈاؤن لوڈ کریں؟',
      answerEn:
        'Visit wasafaisalabad.gop.pk, click on "Duplicate Bill", enter your 10-digit account number, and download or print your current bill.',
      answerUr:
        'ویب سائٹ wasafaisalabad.gop.pk پر جا کر ڈپلیکیٹ بل آپشن منتخب کریں، 10 ہندسوں کا اکاؤنٹ نمبر درج کریں اور بل پرنٹ کریں۔',
    },
    {
      questionEn: 'How do I pay my WASA Faisalabad bill through ePay Punjab?',
      questionUr: 'ای پے پنجاب ایپ سے واسا فیصل آباد کا بل کیسے ادا کریں؟',
      answerEn:
        'Open the ePay Punjab app, choose "WASA", select "WASA Faisalabad", enter your 10-digit account number to generate a 1Bill PSID, and pay via JazzCash, EasyPaisa, or mobile banking.',
      answerUr:
        'ای پے پنجاب ایپ میں واسا فیصل آباد منتخب کریں، اکاؤنٹ نمبر لکھ کر پی ایس آئی ڈی بنائیں اور ایزی پیسہ یا بینک ایپ سے ادا کریں۔',
    },
    {
      questionEn: 'What is the WASA Faisalabad complaint helpline number?',
      questionUr: 'واسا فیصل آباد کی شکایات ہیلپ لائن کا نمبر کیا ہے؟',
      answerEn:
        'Dial 1334 (toll-free across Faisalabad) for contaminated water supply, sewer blockages, or billing disputes, available 24/7.',
      answerUr:
        'گندے پانی کی سپلائی، سیوریج بندش یا بلنگ کی شکایات کے لیے 24 گھنٹے فعال ٹول فری ہیلپ لائن 1334 پر کال کریں۔',
    },
    {
      questionEn: 'What should I do if my water bill shows paid arrears?',
      questionUr: 'اگر ادا شدہ رقم دوبارہ بل میں بقایا جات کے طور پر آ جائے تو کیا کریں؟',
      answerEn:
        'Visit your local WASA Town Revenue Directorate with your stamped bank receipts. The revenue inspector will update your ledger balance.',
      answerUr:
        'متعلقہ ٹاؤن واسا ریونیو آفس جا کر اپنی مہر شدہ بینک رسیدیں پیش کریں تاکہ ریکارڈ فوری اپ ڈیٹ کیا جا سکے۔',
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
            <InteractiveToolBadge labelEn="WASA FAISALABAD DIRECTORY" labelUr="واسا فیصل آباد ڈائریکٹری" variant="gold" />
            <VerifiedBadge textEn="WASA FAISALABAD 2026 VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            WASA Faisalabad Water Bill Online Check 2026: Duplicate Bill &amp; Payment Guide
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              واسا فیصل آباد پانی اور سیوریج بل آن لائن چیک، ڈپلیکیٹ بل ڈاؤن لوڈ اور ای پے ادائیگی
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Need to check or pay your Water and Sanitation Agency (WASA) Faisalabad water bill? Learn how to retrieve your 10-digit
            account number, download duplicate PDF bills, pay cashless via ePay Punjab &amp; 1Bill, and resolve billing disputes.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Check and Pay WASA Faisalabad Water Bill Online in 2026?"
          topicTitleUr="واسا فیصل آباد کا واٹر بل آن لائن چیک اور ادا کرنے کا طریقہ کیا ہے؟"
          answerEn="Visit wasafaisalabad.gop.pk and select the Duplicate Bill option. Enter your 10-digit Account Number (printed on top of previous bills) to generate and download your duplicate bill. To pay digitally, open ePay Punjab, select WASA Faisalabad, enter your account ID to generate a 1Bill PSID, and pay via JazzCash, EasyPaisa, or mobile banking."
          answerUr="واسا کی ویب سائٹ wasafaisalabad.gop.pk پر جا کر Duplicate Bill کا آپشن منتخب کریں۔ اپنے پرانے بل پر لکھا 10 ہندسوں کا اکاؤنٹ نمبر درج کر کے ڈپلیکیٹ بل ڈاؤن لوڈ کریں۔ آن لائن ادائیگی کے لیے ای پے پنجاب ایپ یا ایزی پیسہ / جاز کیش میں 1Bill کے ذریعے رقم ادا کریں۔"
        />

        {/* In-Article Contextual Companion Tool */}
        <InlineContextualLink
          targetSlug="utility-bill-checker-2026"
          customLabelEn="Universal Pakistan Utility Bill Checker"
          customLabelUr="تمام کمپنیوں کا یوٹیلیٹی بل چیکر"
          customNoteEn="Check electricity duplicate bills for FESCO, Sui Gas duplicate bills, and other utility providers across Faisalabad."
          customNoteUr="فیسکو بجلی بل، سوئی گیس بل اور دیگر یوٹیلیٹی بلز آن لائن چیک کریں۔"
        />

        {/* Section 1: ProcessStepsDiagram */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Droplet className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step: How to Check &amp; Pay WASA Faisalabad Bill
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Follow this step-by-step workflow to check your consumer dues and complete digital payment without visiting town offices:
          </p>

          <ProcessStepsDiagram
            steps={billingSteps}
            titleEn="WASA Faisalabad Water Bill Inquiry & Digital Payment Sequence"
            titleUr="واسا فیصل آباد واٹر بل معلوم کرنے اور آن لائن ادائیگی کا طریقہ"
            subtitleEn="Electronic billing integration on Government of Punjab & WASA Faisalabad servers"
            subtitleUr="حکومت پنجاب اور واسا فیصل آباد کے اصل بلنگ ڈیٹا بیس سے تصدیق شدہ طریقہ"
            variant="dark"
          />
        </section>

        {/* Section 2: Tariff Breakdown */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              WASA Faisalabad Tariff Slabs &amp; Dispute Resolution
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Understand how WASA calculates domestic vs commercial water charges across Faisalabad towns (Lyallpur Town, Madina Town, Jinnah Town, Iqbal Town):
          </p>

          <ComparisonVisual
            items={billingTariffComparison}
            titleEn="WASA Faisalabad Billing & Tariff Structure"
            titleUr="واسا فیصل آباد ٹیرف کیٹیگریز اور بل درستگی گائیڈ"
            subtitleEn="Domestic residential plot-size rates vs commercial industrial parameters"
            subtitleUr="گھریلو رہائشی پلاٹ ریٹس بمقابلہ ٹیکسٹائل اور کمرشل کنکشن چارجز"
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
            Check and pay water utility bills for Lahore, Karachi, and Peshawar via our dedicated urban service guides:
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
          titleEn="Frequently Asked Questions (WASA Faisalabad Water Bill)"
          titleUr="عام طور پر پوچھے جانے والے سوالات (واسا فیصل آباد واٹر بل)"
          subtitleEn="Essential billing, tariff, and dispute resolution guidelines verified for 2026"
          subtitleUr="واسا فیصل آباد رولز 2026 کے مطابق بلنگ اور شکایات سے متعلق مصدقہ سوالات و جوابات"
        />

        {/* Section 5: High-Discovery Related Articles */}
        <RelatedArticles
          explicitSlugs={[
            '/bills/fesco-bill-check-online',
            '/bills/utility-bill-checker-2026',
            '/bills/sngpl-bill-check-online',
          ]}
          titleEn="Recommended Next Steps: Faisalabad Utility Services"
          titleUr="اگلے مفید مراحل: فیصل آباد کی دیگر یوٹیلیٹی سروسز"
          subtitleEn="Explore FESCO electricity bill inquiry, universal bill checker, and SNGPL gas duplicate bills"
          subtitleUr="فیسکو بجلی بل، سوئی گیس بل اور ہمہ گیر یوٹیلیٹی چیکر دیکھیں"
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Water and Sanitation Agency (WASA) Faisalabad', url: 'https://wasafaisalabad.gop.pk/' },
            { label: 'Faisalabad Development Authority (FDA)', url: 'https://fda.gop.pk/' },
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
