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
  Car,
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
  FileText
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sindh Excise Vehicle Verification Online 2026 – Karachi & Sindh Registration Check | Pakistan Info Hub',
  description:
    'Online Sindh vehicle verification 2026 via official Excise portal (excise.gos.pk). Check Karachi & Sindh car, bike, and commercial registration, CPLC record clearance, registered owner name, chassis number, and token tax status.',
  keywords: [
    'Sindh excise vehicle verification online 2026',
    'Karachi car registration check online',
    'Sindh bike registration check excise gos pk',
    'CPLC vehicle verification Karachi',
    'Sindh motor vehicle tax check online',
    'excise gos pk vehicle verification 4 wheeler',
    'check car ownership Sindh Pakistan',
  ],
  openGraph: {
    title: 'Sindh Excise Vehicle Verification Online 2026 – Karachi & Sindh Registration Check',
    description:
      'Check Karachi & Sindh vehicle registration, legal ownership records, CPLC clearance, and token tax records via official Sindh Excise portal.',
    url: 'https://www.pakistaninfohub.com/traffic/sindh-excise-vehicle-verification-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/traffic/sindh-excise-vehicle-verification-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Traffic & Vehicles', item: 'https://www.pakistaninfohub.com/traffic' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Sindh Vehicle Verification 2026',
          item: 'https://www.pakistaninfohub.com/traffic/sindh-excise-vehicle-verification-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Sindh Excise Vehicle Verification Online 2026: Karachi Car, Bike & CPLC Record Check Guide',
      description:
        'Authoritative guide to verifying Sindh registered vehicles, checking CPLC crime clearance, registered owner identity, and token tax records via excise.gos.pk.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/traffic/sindh-excise-vehicle-verification-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Verify a Sindh / Karachi Registered Vehicle Online',
      description: 'Step-by-step instructions to authenticate vehicle ownership and tax status on the Government of Sindh Excise database.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Visit Sindh Excise Official Portal',
          text: 'Access the official Government of Sindh Excise department portal at excise.gos.pk or the direct verification page.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Select 4-Wheeler or 2-Wheeler Category',
          text: 'Choose whether you are verifying a car/commercial vehicle (4-Wheeler) or motorcycle (2-Wheeler).',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Enter Registration Number',
          text: 'Type the vehicle registration number (e.g. BEE-123 or KHL-1234) without dashes or spaces.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Verify Owner, CPLC & Tax Details',
          text: 'Examine the official record card displaying Registered Owner Name, Make/Model, Chassis Number, Engine Number, and Tax Paid Up To date.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the official website for Sindh vehicle verification in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The official website for Sindh vehicle verification is excise.gos.pk, managed by the Excise, Taxation & Narcotics Control Department, Government of Sindh.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I check if a vehicle in Karachi is cleared by CPLC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can verify vehicle criminal clearance through the Citizens-Police Liaison Committee (CPLC) by calling the CPLC 24/7 Call Center at 1102 or (021) 35682222, or by checking the CPLC status integrated on the Sindh Excise online portal.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I verify both motorcycles and cars on Sindh Excise portal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The Sindh Excise portal features dedicated tabs for 4-Wheelers (Cars, Jeeps, Commercial Trucks) and 2-Wheelers (Motorcycles, Scooters).',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I pay Sindh vehicle token tax online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sindh vehicle token tax can be paid through the official "Excise Sindh" mobile application, 1Bill invoice through mobile banking apps, JazzCash, EasyPaisa, or at designated National Bank of Pakistan (NBP) branches.',
          },
        },
      ],
    },
  ],
};

export default function SindhExciseVehicleVerificationPage() {
  const breadcrumbs = [
    { nameEn: 'Traffic & Vehicles', nameUr: 'ٹریفک و موٹر گاڑی سروسز' },
    { nameEn: 'Sindh Vehicle Verification 2026', nameUr: 'سندھ گاڑی آن لائن تصدیق 2026' },
  ];

  const verificationSteps = [
    {
      stepNumber: 1,
      titleEn: 'Access Official Sindh Excise Portal',
      titleUr: 'سندھ ایکسائز کا آفیشل پورٹل کھولیں',
      detailEn:
        'Open excise.gos.pk on your device. Ensure you are on the verified .gos.pk provincial government domain.',
      detailUr:
        'اپنے براؤزر پر excise.gos.pk کھولیں اور یقینی بنائیں کہ آپ اصل سرکاری ڈومین پر موجود ہیں۔',
      badgeEn: 'PORTAL CHECK',
      badgeUr: 'پورٹل تصدیق',
    },
    {
      stepNumber: 2,
      titleEn: 'Select Vehicle Type (2-Wheeler or 4-Wheeler)',
      titleUr: 'گاڑی یا موٹر سائیکل کی کیٹیگری منتخب کریں',
      detailEn:
        'Click on "Online Vehicle Verification" and choose either 4-Wheelers (Cars/Vans/Commercial) or 2-Wheelers (Motorcycles).',
      detailUr:
        'آن لائن وہیکل ویریفیکیشن پر کلک کریں اور کار یا موٹر سائیکل کی مخصوص کیٹیگری منتخب کریں۔',
      badgeEn: 'CATEGORY',
      badgeUr: 'کیٹیگری انتخاب',
    },
    {
      stepNumber: 3,
      titleEn: 'Enter Sindh Registration Number',
      titleUr: 'سندھ رجسٹریشن نمبر درج کریں',
      detailEn:
        'Type your vehicle plate characters (e.g. BEE-123 for cars or KHL-1234 for bikes) into the search field.',
      detailUr:
        'گاڑی کا درست نمبر درج کریں (جیسے کار کے لیے BEE-123 یا بائیک کے لیے KHL-1234)۔',
      badgeEn: 'INPUT NUMBER',
      badgeUr: 'نمبر درج کریں',
    },
    {
      stepNumber: 4,
      titleEn: 'Inspect Ownership, CPLC & Tax Status',
      titleUr: 'مالک کا نام، سی پی ایل سی اور ٹیکس چیک کریں',
      detailEn:
        'Verify registered owner name, chassis/engine matching physical vehicle plates, CPLC clearance status, and tax paid date.',
      detailUr:
        'رجسٹرڈ مالک کا نام، چیسس اور انجن نمبر، سی پی ایل سی کلیئرنس اور ٹوکن ٹیکس کی آخری تاریخ تصدیق کریں۔',
      badgeEn: 'VERIFY RECORD',
      badgeUr: 'ریکارڈ تصدیق',
    },
  ];

  const informationDisclosedComparison = [
    {
      titleEn: 'Owner & Registration',
      titleUr: 'مالک اور رجسٹریشن',
      subtitleEn: 'Legal Registered Profile',
      subtitleUr: 'رجسٹرڈ مالک کا ریکارڈ',
      badgeEn: 'OWNER INFO',
      badgeUr: 'مالک تفصیل',
      badgeVariant: 'navy' as const,
      pointsEn: [
        'Registered Owner Full Name',
        'Registration Date & City/District (Karachi, Hyderabad, etc.)',
        'Class of Vehicle (Private / Commercial / Govt)',
        'Transfer / Registration Status',
      ],
      pointsUr: [
        'رجسٹرڈ مالک کا مکمل نام',
        'رجسٹریشن کی تاریخ اور متعلقہ شہر (کراچی، حیدرآباد)',
        'گاڑی کی کلاس (پرائیویٹ، کمرشل یا سرکاری)',
        'ٹرانسفر اور رجسٹریشن سٹیٹس',
      ],
    },
    {
      titleEn: 'Chassis & Engine',
      titleUr: 'چیسس اور انجن',
      subtitleEn: 'Physical Vehicle Match',
      subtitleUr: 'گاڑی کی تکنیکی تصدیق',
      badgeEn: 'CHASSIS CHECK',
      badgeUr: 'چیسس چیک',
      badgeVariant: 'brass' as const,
      pointsEn: [
        '17-Digit Vehicle Chassis / VIN Number',
        'Engine Serial Number',
        'Make, Model Name & Year of Manufacture',
        'Color, Fuel Type & Seating Capacity',
      ],
      pointsUr: [
        'گاڑی کا اصل چیسس / فریم نمبر',
        'انجن کا سیریل نمبر',
        'گاڑی کی کمپنی، ماڈل اور تیاری کا سال',
        'رنگ، فیول کی قسم اور سیٹوں کی تعداد',
      ],
      isPopular: true,
    },
    {
      titleEn: 'Tax & CPLC Clearance',
      titleUr: 'ٹیکس اور سی پی ایل سی',
      subtitleEn: 'Crime & Token Tax Check',
      subtitleUr: 'کرمنل ریکارڈ و ٹیکس کلیئرنس',
      badgeEn: 'CPLC & TAX',
      badgeUr: 'ٹیکس و سی پی ایل سی',
      badgeVariant: 'emerald' as const,
      pointsEn: [
        'Motor Vehicle Tax Paid Up To Date',
        'CPLC Crime & Stolen Record Status',
        'Bank Hire-Purchase / Finance Hypothecation Flag',
        'Exemptions or Late Surcharges (if applicable)',
      ],
      pointsUr: [
        'موٹر وہیکل ٹیکس کی کلیئرنس تاریخ',
        'سی پی ایل سی چوری یا کرمنل کیس سٹیٹس',
        'بینک لیز یا فنانس کا اندراج',
        'ٹیکس چھوٹ یا لیٹ فیس کی تفصیلات',
      ],
    },
  ];

  const faqItems = [
    {
      questionEn: 'What is the official website for Sindh vehicle verification in 2026?',
      questionUr: 'سال 2026 میں سندھ کی گاڑیوں کی تصدیق کے لیے سرکاری ویب سائٹ کون سی ہے؟',
      answerEn:
        'The only official website is excise.gos.pk, managed by the Sindh Excise, Taxation & Narcotics Control Department. Avoid unofficial APK apps that request unnecessary phone permissions.',
      answerUr:
        'سندھ گاڑیوں کی تصدیق کے لیے واحد سرکاری ویب سائٹ excise.gos.pk ہے۔ غیر مصدقہ ایپس پر ذاتی ڈیٹا درج نہ کریں۔',
    },
    {
      questionEn: 'How do I check CPLC clearance for Karachi vehicles?',
      questionUr: 'کراچی میں گاڑی کی سی پی ایل سی (CPLC) کلیئرنس کیسے چیک کریں؟',
      answerEn:
        'Before purchasing a vehicle in Karachi, verify its status on the CPLC hotline at 1102 or (021) 35682222, or confirm the CPLC clearance tag generated during the Sindh Excise online check.',
      answerUr:
        'کراچی میں گاڑی خریدنے سے پہلے سی پی ایل سی ہیلپ لائن 1102 یا 35682222-021 پر کال کر کے تصدیق کریں کہ گاڑی کسی واردات یا چوری میں مطلوب تو نہیں۔',
    },
    {
      questionEn: 'Can I check motorcycle registration on the Sindh Excise portal?',
      questionUr: 'کیا سندھ ایکسائز پورٹل پر موٹر سائیکل کی تصدیق بھی ہو سکتی ہے؟',
      answerEn:
        'Yes. Click on the "2-Wheeler" tab on excise.gos.pk and type your bike registration number (e.g. KHL-1234) to view owner name, engine, chassis, and tax status.',
      answerUr:
        'جی ہاں! سندھ ایکسائز پورٹل پر "2-Wheeler" آپشن منتخب کر کے موٹر سائیکل کا نمبر درج کریں اور مکمل ریکارڈ چیک کریں۔',
    },
    {
      questionEn: 'How can I pay Sindh vehicle token tax online?',
      questionUr: 'سندھ میں گاڑی کا ٹوکن ٹیکس آن لائن کیسے ادا کریں؟',
      answerEn:
        'You can pay motor vehicle tax via the official "Excise Sindh" mobile app, online banking 1Bill invoice, JazzCash, EasyPaisa, or at authorized National Bank of Pakistan (NBP) counters.',
      answerUr:
        'آپ "Excise Sindh" ایپ، 1Bill، جاز کیش، ایزی پیسہ یا نیشنل بینک کی نامزد برانچز کے ذریعے ٹوکن ٹیکس ادا کر سکتے ہیں۔',
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
            <InteractiveToolBadge labelEn="SINDH EXCISE DIRECTORY" labelUr="سندھ ایکسائز ڈائریکٹری" variant="navy" />
            <VerifiedBadge textEn="SINDH EXCISE 2026 VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Sindh Excise Vehicle Verification Online 2026: Karachi Car &amp; Bike Check
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              سندھ ایکسائز گاڑی اور موٹر سائیکل آن لائن تصدیق، سی پی ایل سی اور ٹیکس ریکارڈ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Purchasing a vehicle registered in Karachi, Hyderabad, Sukkur, or Larkana? Verify vehicle ownership particulars,
            CPLC crime clearance, chassis number authenticity, and motor vehicle tax status through the official Sindh Excise database.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Verify a Sindh Registered Vehicle Online in 2026?"
          topicTitleUr="سندھ میں گاڑی یا موٹر سائیکل کی آن لائن تصدیق کیسے کی جاتی ہے؟"
          answerEn="Visit the official Sindh Excise portal at excise.gos.pk. Choose 4-Wheelers (for cars/vans) or 2-Wheelers (for motorcycles), enter your registration number (e.g. BEE-123 or KHL-1234), and submit search. The system will immediately display the registered owner name, chassis number, engine number, CPLC status, and tax clearance record."
          answerUr="سندھ ایکسائز کے آفیشل پورٹل excise.gos.pk پر جائیں۔ کار کے لیے 4-Wheeler یا بائیک کے لیے 2-Wheeler منتخب کریں، رجسٹریشن نمبر درج کریں اور سرچ کریں۔ پورٹل فوری طور پر رجسٹرڈ مالک کا نام، چیسس و انجن نمبر، سی پی ایل سی کلیئرنس اور موٹر وہیکل ٹیکس کا ریکارڈ ظاہر کر دے گا۔"
        />

        {/* In-Article Contextual Companion Tool */}
        <InlineContextualLink
          targetSlug="token-tax-calculator-2026"
          customLabelEn="Vehicle Token Tax Calculator 2026"
          customLabelUr="گاڑی کا سالانہ ٹوکن ٹیکس کیلکولیٹر"
          customNoteEn="Verify Sindh annual token tax rates for filers vs non-filers across different engine cc capacities."
          customNoteUr="سندھ میں گاڑی کے انجن پاور کے مطابق فائلر اور نان فائلر ٹوکن ٹیکس کی تفصیلات دیکھیں۔"
        />

        {/* Section 1: ProcessStepsDiagram */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Car className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step: How to Check Sindh Vehicle Registration
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Follow this verified procedure before transferring money or finalizing any vehicle purchase in Sindh:
          </p>

          <ProcessStepsDiagram
            steps={verificationSteps}
            titleEn="Official Sindh Excise Vehicle Verification Procedure"
            titleUr="سندھ ایکسائز گاڑی تصدیق کا مرحلہ وار طریقہ کار"
            subtitleEn="Electronic database query on Sindh Excise & Taxation servers"
            subtitleUr="حکومت سندھ ایکسائز اینڈ ٹیکسیشن کے اصل سرورز سے براہ راست تصدیق"
            variant="dark"
          />
        </section>

        {/* Section 2: What Information is Revealed */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              What Information Does Sindh Excise Verification Disclose?
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            The Sindh Excise system validates three critical aspects of vehicle legality and financial clearance:
          </p>

          <ComparisonVisual
            items={informationDisclosedComparison}
            titleEn="Sindh Vehicle Record Breakdown"
            titleUr="سندھ وہیکل ریکارڈ اور تکنیکی معلومات"
            subtitleEn="Key parameters to cross-check before making payment or signing transfer letters"
            subtitleUr="رقم کی ادائیگی سے قبل چیک کرنے والے اہم قانونی اور سیکیورٹی نکات"
          />
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 3: Provincial Sibling Cross-Links */}
        <section className="p-6 rounded-2xl bg-doc-paper dark:bg-slate-900 border border-doc-brass/30 space-y-4">
          <div className="flex items-center gap-2">
            <Building className="w-6 h-6 text-doc-seal" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Verify Vehicles in Other Provinces &amp; Federal Territory
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Check vehicle registration records in Punjab, Islamabad, and Khyber Pakhtunkhwa using our dedicated portals:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-sans">
            <Link
              href="/traffic/punjab-excise-vehicle-verification-2026"
              className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex flex-col justify-between group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase">PUNJAB MTMIS</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                  Punjab Vehicle Verification →
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-[11px]">
                  Lahore &amp; Punjab MTMIS vehicle check, owner name, chassis number, and ePay token tax.
                </p>
              </div>
            </Link>

            <Link
              href="/traffic/islamabad-vehicle-verification-2026"
              className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex flex-col justify-between group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-blue-700 dark:text-blue-400 uppercase">FEDERAL ICT</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                  Islamabad Vehicle Verification →
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-[11px]">
                  Islamabad (ICT) registered cars, City Islamabad app lookup, and token tax status.
                </p>
              </div>
            </Link>

            <Link
              href="/traffic/kpk-excise-vehicle-verification"
              className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex flex-col justify-between group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-doc-brass uppercase">KHYBER PAKHTUNKHWA</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                  KPK Vehicle Verification →
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-[11px]">
                  Peshawar &amp; KPK Zama KP app vehicle title, non-customs paid (NCP) check, and excise tokens.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <FAQAccordionVisual
          items={faqItems}
          titleEn="Frequently Asked Questions (Sindh Vehicle Verification)"
          titleUr="عام طور پر پوچھے جانے والے سوالات (سندھ گاڑی تصدیق)"
          subtitleEn="Essential legal and procedural answers verified by Sindh Excise & CPLC regulations"
          subtitleUr="سندھ ایکسائز اینڈ ٹیکسیشن قوانین اور سی پی ایل سی ضوابط کے مطابق مصدقہ جوابات"
        />

        {/* Section 5: High-Discovery Related Articles */}
        <RelatedArticles
          explicitSlugs={[
            '/traffic/sindh-driving-license-online-apply',
            '/traffic/token-tax-calculator-2026',
            '/traffic/vehicle-verification-online-2026',
          ]}
          titleEn="Recommended Next Steps: Vehicle & Licensing Services"
          titleUr="اگلے مفید مراحل: گاڑیوں کی دیگر اہم سروسز"
          subtitleEn="Explore Sindh driving license apply, nationwide vehicle verification, and token tax calculator"
          subtitleUr="سندھ ڈرائیونگ لائسنس، قومی وہیکل ڈیٹا اور ٹوکن ٹیکس کیلکولیٹر"
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Sindh Excise, Taxation & Narcotics Control Portal', url: 'https://excise.gos.pk/' },
            { label: 'Government of Sindh Official Portal', url: 'https://sindh.gov.pk/' },
            { label: 'Citizens-Police Liaison Committee (CPLC) Karachi', url: 'https://cplc.org.pk/' },
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
