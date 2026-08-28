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
  title: 'Islamabad Vehicle Verification Online 2026 – ICT Excise Car & Bike Registration Check | Pakistan Info Hub',
  description:
    'Verify Islamabad (ICT) vehicle registration online 2026 via official Islamabad Excise portal (islamabadexcise.gov.pk) & City Islamabad App. Check registered owner name, chassis/engine numbers, smart card delivery, and token tax status.',
  keywords: [
    'Islamabad vehicle verification online 2026',
    'ICT excise car registration check',
    'Islamabad bike registration verification',
    'City Islamabad app vehicle verification',
    'islamabadexcise gov pk vehicle check',
    'Islamabad token tax online check',
    'ICT excise smart card tracking',
  ],
  openGraph: {
    title: 'Islamabad Vehicle Verification Online 2026 – ICT Excise Registration Check',
    description:
      'Official guide to verifying Islamabad registered cars, motorcycles, owner identity, chassis numbers, and token tax clearance.',
    url: 'https://www.pakistaninfohub.com/traffic/islamabad-vehicle-verification-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/traffic/islamabad-vehicle-verification-2026' },
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
          name: 'Islamabad Vehicle Verification 2026',
          item: 'https://www.pakistaninfohub.com/traffic/islamabad-vehicle-verification-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Islamabad Vehicle Verification Online 2026: ICT Excise Car, Bike & Token Tax Check Guide',
      description:
        'A comprehensive guide to checking Islamabad Capital Territory vehicle registration, registered owner details, chassis authenticity, and token tax status via official ICT Excise portals.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/traffic/islamabad-vehicle-verification-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Verify an Islamabad Registered Vehicle Online',
      description: 'Step-by-step instructions to authenticate Islamabad vehicle ownership records on ICT Excise web and mobile portals.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Access Islamabad Excise Portal or City App',
          text: 'Open your browser to islamabadexcise.gov.pk or launch the official "City Islamabad" mobile application.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Navigate to Vehicle Verification',
          text: 'Select the Online Vehicle Details / Verification service section.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Enter Islamabad Registration Number',
          text: 'Type your vehicle number (e.g. ICT-LEA-1234, GA-123, or IDL-5678) and registration date if prompted.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Inspect Owner, Chassis & Token Tax Records',
          text: 'Review the authenticated record displaying Owner Name, Father Name, Make/Model, Engine/Chassis Number, and Token Tax Paid-Up-To date.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the official website for Islamabad vehicle verification in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The authentic official website is islamabadexcise.gov.pk, maintained by the Excise & Taxation Department, Islamabad Capital Territory (ICT) Administration.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I verify an Islamabad vehicle using a mobile app?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The Government of Pakistan has integrated vehicle verification into the official "City Islamabad" mobile app, available on Google Play Store and Apple App Store.',
          },
        },
        {
          '@type': 'Question',
          name: 'What information is required to check ICT vehicle details?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You only need the Islamabad vehicle registration number (e.g., GA-123 or IDL-5678). In some verification portals, entering the registration date printed on your registration book/card provides enhanced verification.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I pay Islamabad vehicle token tax online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can pay ICT vehicle token tax using the City Islamabad App or 1Bill PSID via JazzCash, EasyPaisa, or any online mobile banking application without visiting the Excise office in H-9 Islamabad.',
          },
        },
      ],
    },
  ],
};

export default function IslamabadVehicleVerificationPage() {
  const breadcrumbs = [
    { nameEn: 'Traffic & Vehicles', nameUr: 'ٹریفک و موٹر گاڑی سروسز' },
    { nameEn: 'Islamabad Vehicle Verification 2026', nameUr: 'اسلام آباد گاڑی آن لائن تصدیق 2026' },
  ];

  const verificationSteps = [
    {
      stepNumber: 1,
      titleEn: 'Access Islamabad Excise Portal or City App',
      titleUr: 'اسلام آباد ایکسائز پورٹل یا سٹی ایپ کھولیں',
      detailEn:
        'Open islamabadexcise.gov.pk or download the official "City Islamabad" app on your iOS or Android smartphone.',
      detailUr:
        'اپنے موبائل یا کمپیوٹر پر islamabadexcise.gov.pk کھولیں یا آفیشل "سٹی اسلام آباد" ایپ استعمال کریں۔',
      badgeEn: 'PORTAL CHECK',
      badgeUr: 'پورٹل رسائی',
    },
    {
      stepNumber: 2,
      titleEn: 'Select Vehicle Verification Service',
      titleUr: 'وہیکل ویریفیکیشن سروس منتخب کریں',
      detailEn:
        'Click on the "Vehicle Verification" or "Excise Services" tab from the main administrative menu.',
      detailUr:
        'مین مینو سے آن لائن گاڑی تصدیق (Vehicle Verification) کا آپشن منتخب کریں۔',
      badgeEn: 'SERVICE',
      badgeUr: 'سروس انتخاب',
    },
    {
      stepNumber: 3,
      titleEn: 'Enter ICT Registration Number',
      titleUr: 'اسلام آباد کا رجسٹریشن نمبر درج کریں',
      detailEn:
        'Type your vehicle registration plate digits (e.g. GA-123, IDL-5678, or ICT-LEA-1234).',
      detailUr:
        'گاڑی کا درست نمبر درج کریں (جیسے GA-123، IDL-5678 یا لیپ ٹاپ سیریز کا نمبر)۔',
      badgeEn: 'INPUT NUMBER',
      badgeUr: 'نمبر درج کریں',
    },
    {
      stepNumber: 4,
      titleEn: 'Examine Registered Owner & Tax Status',
      titleUr: 'مالک کا نام، چیسس اور ٹوکن ٹیکس چیک کریں',
      detailEn:
        'Confirm registered owner name, chassis/engine numbers against physical car plates, and token tax clearance date.',
      detailUr:
        'رجسٹرڈ مالک کا نام، چیسس اور انجن نمبر اور ٹوکن ٹیکس کی آخری تاریخ فوری طور پر تصدیق کریں۔',
      badgeEn: 'RECORD CHECK',
      badgeUr: 'ریکارڈ تصدیق',
    },
  ];

  const informationDisclosedComparison = [
    {
      titleEn: 'Owner & Registration',
      titleUr: 'مالک اور رجسٹریشن',
      subtitleEn: 'ICT Administrative Record',
      subtitleUr: 'اسلام آباد ایکسائز ریکارڈ',
      badgeEn: 'OWNER INFO',
      badgeUr: 'مالک تفصیل',
      badgeVariant: 'navy' as const,
      pointsEn: [
        'Registered Owner Full Legal Name',
        'Father / Husband Name',
        'Registration Date & Series Code',
        'Smart Registration Card Issuance Status',
      ],
      pointsUr: [
        'رجسٹرڈ مالک کا مکمل قانونی نام',
        'والد یا شوہر کا نام',
        'رجسٹریشن کی تاریخ اور سیریز کوڈ',
        'سمارٹ کارڈ کے اجراء کی تفصیلات',
      ],
    },
    {
      titleEn: 'Engine & Chassis Specs',
      titleUr: 'انجن اور چیسس تفصیلات',
      subtitleEn: 'Authentic Vehicle Dossier',
      subtitleUr: 'گاڑی کی تکنیکی تصدیق',
      badgeEn: 'VEHICLE SPECS',
      badgeUr: 'گاڑی کی تفصیل',
      badgeVariant: 'brass' as const,
      pointsEn: [
        'Complete Chassis / VIN Number',
        'Engine Serial Number',
        'Make, Model, Year of Manufacture & Body Type',
        'Horsepower (CC), Color & Seating Capacity',
      ],
      pointsUr: [
        'گاڑی کا اصل چیسس / فریم نمبر',
        'انجن کا سیریل نمبر',
        'گاڑی کی کمپنی، ماڈل اور تیاری کا سال',
        'انجن کی طاقت (CC)، رنگ اور سیٹوں کی تعداد',
      ],
      isPopular: true,
    },
    {
      titleEn: 'Tax & Compliance',
      titleUr: 'ٹوکن ٹیکس اور کلیئرنس',
      subtitleEn: 'Token Tax & Impound Check',
      subtitleUr: 'ٹیکس اور قانونی کلیئرنس',
      badgeEn: 'COMPLIANCE',
      badgeUr: 'ٹیکس کلیئرنس',
      badgeVariant: 'emerald' as const,
      pointsEn: [
        'Token Tax Paid Up To Date (Annual or Lifetime)',
        'Arrears / Surcharges (if overdue)',
        'Police Crime & FIR Clearance Flag',
        'Bank Lease Hypothecation Clearance (NOC)',
      ],
      pointsUr: [
        'ٹوکن ٹیکس کی ادائیگی کی آخری تاریخ',
        'واجب الادا بقایا جات یا جرمانے',
        'پولیس کرائم و ایف آئی آر کلیئرنس سٹیٹس',
        'بینک فنانس یا لیز کلیئرنس (NOC) سٹیٹس',
      ],
    },
  ];

  const faqItems = [
    {
      questionEn: 'What is the official website for Islamabad vehicle verification in 2026?',
      questionUr: 'سال 2026 میں اسلام آباد کی گاڑیوں کی تصدیق کے لیے سرکاری پورٹل کون سا ہے؟',
      answerEn:
        'The authentic website is islamabadexcise.gov.pk, operated by the Excise & Taxation Department, ICT Administration. You can also verify on the official "City Islamabad" mobile application.',
      answerUr:
        'اسلام آباد کی گاڑیوں کی تصدیق کے لیے آفیشل پورٹل islamabadexcise.gov.pk ہے۔ آپ "City Islamabad" موبائل ایپ کے ذریعے بھی تصدیق کر سکتے ہیں۔',
    },
    {
      questionEn: 'Can I verify both motorcycles and cars on the ICT portal?',
      questionUr: 'کیا اسلام آباد پورٹل پر کار اور موٹر سائیکل دونوں کی تصدیق ہو سکتی ہے؟',
      answerEn:
        'Yes. All private cars, commercial vehicles, government transport, and motorcycles registered in Islamabad Capital Territory can be checked.',
      answerUr:
        'جی ہاں! اسلام آباد میں رجسٹرڈ تمام پرائیویٹ کاروں، موٹر سائیکلوں اور کمرشل گاڑیوں کا ڈیٹا اس پورٹل پر دستیاب ہے۔',
    },
    {
      questionEn: 'How can I pay Islamabad vehicle token tax online?',
      questionUr: 'اسلام آباد میں گاڑی کا ٹوکن ٹیکس آن لائن کیسے ادا کیا جاتا ہے؟',
      answerEn:
        'You can generate a 1Bill PSID in the City Islamabad app and pay via JazzCash, EasyPaisa, 1Link ATM, or your mobile banking app without visiting the H-9 Excise office.',
      answerUr:
        'آپ "City Islamabad" ایپ میں 1Bill پی ایس آئی ڈی جنریٹ کر کے ایزی پیسہ، جاز کیش یا بینک ایپ کے ذریعے گھر بیٹھے ٹوکن ٹیکس ادا کر سکتے ہیں۔',
    },
    {
      questionEn: 'Why does my car show "Record Not Found" on the Islamabad Excise portal?',
      questionUr: 'اسلام آباد پورٹل پر "Record Not Found" آنے کی کیا وجوہات ہو سکتی ہیں؟',
      answerEn:
        'This usually happens if the number is entered without correct alphabetical formatting (e.g., GA-123 or IDL-5678) or if a newly registered vehicle has not completed dealer reconciliation (takes 3-5 days).',
      answerUr:
        'اگر گاڑی کا نمبر غلط فارمیٹ میں لکھا جائے یا نئی رجسٹریشن کے بعد ڈیٹا اپ لوڈ ہونے میں 3 سے 5 دن کی تاخیر ہو تو یہ مسئلہ آ سکتا ہے۔',
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
            <InteractiveToolBadge labelEn="ICT EXCISE DIRECTORY" labelUr="اسلام آباد ایکسائز ڈائریکٹری" variant="navy" />
            <VerifiedBadge textEn="ICT EXCISE 2026 VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Islamabad Vehicle Verification Online 2026: ICT Car &amp; Bike Registration Check
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              اسلام آباد ایکسائز گاڑی اور موٹر سائیکل آن لائن تصدیق، چیسس اور ٹوکن ٹیکس ریکارڈ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Buying an Islamabad (ICT) registered car or motorcycle? Verify authentic vehicle ownership particulars,
            chassis and engine numbers, smart registration card status, and token tax clearance via the official Islamabad Excise portal.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Verify an Islamabad Registered Vehicle Online in 2026?"
          topicTitleUr="اسلام آباد میں گاڑی کی آن لائن تصدیق کرنے کا طریقہ کیا ہے؟"
          answerEn="Access the official portal at islamabadexcise.gov.pk or download the City Islamabad app. Enter the Islamabad registration number (e.g. GA-123 or IDL-5678) and submit your search. The database will immediately present the registered owner name, chassis number, engine number, vehicle make/model, and token tax clearance status."
          answerUr="اسلام آباد ایکسائز کے پورٹل islamabadexcise.gov.pk پر جائیں یا City Islamabad ایپ کھولیں۔ گاڑی کا رجسٹریشن نمبر (جیسے GA-123 یا IDL-5678) درج کریں اور سرچ کریں۔ سسٹم فوری طور پر رجسٹرڈ مالک کا نام، چیسس نمبر، انجن نمبر، میک و ماڈل اور ٹوکن ٹیکس کی آخری تاریخ ظاہر کر دے گا۔"
        />

        {/* In-Article Contextual Companion Tool */}
        <InlineContextualLink
          targetSlug="token-tax-calculator-2026"
          customLabelEn="Vehicle Token Tax Calculator 2026"
          customLabelUr="گاڑی کا سالانہ ٹوکن ٹیکس کیلکولیٹر"
          customNoteEn="Calculate exact ICT vehicle token tax, withholding tax, and filer rebate rates for Islamabad registered vehicles."
          customNoteUr="اسلام آباد کی گاڑیوں کے لیے درست سالانہ ٹوکن ٹیکس اور فائلر رعایت کی شرح چیک کریں۔"
        />

        {/* Section 1: ProcessStepsDiagram */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Car className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step: How to Check Islamabad Vehicle Registration
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Follow this verified 4-step procedure before completing your vehicle purchase or transfer in Islamabad:
          </p>

          <ProcessStepsDiagram
            steps={verificationSteps}
            titleEn="Official Islamabad ICT Vehicle Verification Workflow"
            titleUr="اسلام آباد وہیکل ویریفیکیشن کا مرحلہ وار طریقہ کار"
            subtitleEn="Direct query on ICT Administration and Islamabad Excise database"
            subtitleUr="اسلام آباد ایڈمنسٹریشن اور ایکسائز سرورز سے تصدیق شدہ ڈیٹا"
            variant="dark"
          />
        </section>

        {/* Section 2: What Information is Revealed */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              What Information Does Islamabad Excise Verification Show?
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            The Islamabad vehicle registry produces a verified record encompassing three vital compliance domains:
          </p>

          <ComparisonVisual
            items={informationDisclosedComparison}
            titleEn="Islamabad Vehicle Record Parameter Dossier"
            titleUr="اسلام آباد وہیکل ریکارڈ اور قانونی معلومات کا خلاصہ"
            subtitleEn="Crucial verification metrics to authenticate before executing purchase agreements"
            subtitleUr="خریداری کا معاہدہ کرنے سے پہلے جانچنے کے لیے ضروری قانونی و فنی معلومات"
          />
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 3: Provincial Sibling Cross-Links */}
        <section className="p-6 rounded-2xl bg-doc-paper dark:bg-slate-900 border border-doc-brass/30 space-y-4">
          <div className="flex items-center gap-2">
            <Building className="w-6 h-6 text-doc-seal" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Verify Vehicles in Other Provinces &amp; Territories
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            If your car or motorcycle is registered in Punjab, Sindh, or KPK, access our dedicated provincial portals:
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
              href="/traffic/sindh-excise-vehicle-verification-2026"
              className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex flex-col justify-between group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase">SINDH EXCISE</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                  Sindh Vehicle Verification →
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-[11px]">
                  Karachi &amp; Sindh 2-wheeler/4-wheeler registration, CPLC status, and tax check via excise.gos.pk.
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
          titleEn="Frequently Asked Questions (Islamabad Vehicle Verification)"
          titleUr="عام طور پر پوچھے جانے والے سوالات (اسلام آباد گاڑی تصدیق)"
          subtitleEn="Essential legal and procedural answers verified by ICT Excise 2026 regulations"
          subtitleUr="اسلام آباد ایکسائز اینڈ ٹیکسیشن قوانین 2026 کے مطابق مصدقہ جوابات"
        />

        {/* Section 5: High-Discovery Related Articles */}
        <RelatedArticles
          explicitSlugs={[
            '/traffic/islamabad-traffic-police-echallan',
            '/traffic/token-tax-calculator-2026',
            '/traffic/vehicle-verification-online-2026',
          ]}
          titleEn="Recommended Next Steps: Islamabad Traffic & Vehicle Services"
          titleUr="اگلے مفید مراحل: اسلام آباد ٹریفک و گاڑی سروسز"
          subtitleEn="Explore Islamabad e-challan inquiry, token tax calculation, and nationwide verification"
          subtitleUr="اسلام آباد ای چالان، ٹوکن ٹیکس اور قومی گاڑیوں کا ریکارڈ دیکھیں"
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Islamabad Excise & Taxation Portal', url: 'https://islamabadexcise.gov.pk/' },
            { label: 'Islamabad Capital Territory Administration', url: 'https://ictadministration.gov.pk/' },
            { label: 'National Information Technology Board (NITB) - City Islamabad App', url: 'https://nitb.gov.pk/' },
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
