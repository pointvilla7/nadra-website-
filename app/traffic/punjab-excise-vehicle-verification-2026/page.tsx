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
  HelpCircle,
  FileText
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Punjab Excise Vehicle Verification Online 2026 – MTMIS Car & Bike Registration Check | Pakistan Info Hub',
  description:
    'Check Punjab vehicle verification online 2026 via official MTMIS portal (mtmis.excise.punjab.gov.pk). Search car & bike registration by number, verify registered owner name, chassis/engine numbers, and token tax clearance status.',
  keywords: [
    'Punjab excise vehicle verification 2026',
    'MTMIS Punjab vehicle verification online',
    'mtmis excise punjab gov pk check',
    'Lahore car registration check online',
    'Punjab bike registration check by number',
    'check car token tax status Punjab',
    'ePay Punjab vehicle token tax 2026',
    'biometric vehicle transfer Punjab MTMIS',
  ],
  openGraph: {
    title: 'Punjab Excise Vehicle Verification Online 2026 – MTMIS Registration Check',
    description:
      'Official guide to verifying car, bike, and commercial vehicle ownership records across Lahore, Rawalpindi, Faisalabad, and all Punjab districts.',
    url: 'https://www.pakistaninfohub.com/traffic/punjab-excise-vehicle-verification-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/traffic/punjab-excise-vehicle-verification-2026' },
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
          name: 'Punjab Vehicle Verification 2026',
          item: 'https://www.pakistaninfohub.com/traffic/punjab-excise-vehicle-verification-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Punjab Excise Vehicle Verification Online 2026: Official MTMIS Registration & Token Tax Check Guide',
      description:
        'A comprehensive guide to verifying vehicle registration, registered owner particulars, engine and chassis numbers, and token tax records via Punjab MTMIS.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/traffic/punjab-excise-vehicle-verification-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Verify a Punjab Registered Vehicle Online via MTMIS',
      description: 'Step-by-step instructions to check car and bike registration records on the Punjab Excise MTMIS database.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Access Official Punjab MTMIS Portal',
          text: 'Open your web browser and navigate directly to the official government portal at mtmis.excise.punjab.gov.pk.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Enter Vehicle Registration Number',
          text: 'Type your vehicle registration number in the standard format (e.g. LEA-20-1234 or LE-19-5678) without unnecessary symbols.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Complete Captcha and Submit Search',
          text: 'Solve the security captcha verification box and click Search to query the Excise central database.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Review Owner, Chassis & Token Tax Records',
          text: 'Inspect the detailed record card showing Registered Owner Name, Father Name, Chassis Number, Engine Number, Make/Model, and Token Tax paid up to date.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What official website should I use for Punjab vehicle verification?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The only authentic official portal for Punjab vehicle verification is mtmis.excise.punjab.gov.pk, maintained by the Punjab Information Technology Board (PITB) for the Excise, Taxation & Narcotics Control Department Government of the Punjab.',
          },
        },
        {
          '@type': 'Question',
          name: 'What details does the Punjab MTMIS verification display?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Punjab MTMIS provides comprehensive information including Registered Owner Name, Father Name, City/District of Registration, Make and Model, Manufacturing Year, Engine Number, Chassis Number, Seating Capacity, CPLC status, and the exact date up to which Token Tax has been cleared.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is my vehicle registration showing "No Record Found" in Punjab MTMIS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If your search returns "No Record Found", ensure you entered the registration number with the correct year hyphenation (e.g., LEA-18-1234 rather than LEA181234). Brand new vehicle registrations may take 3 to 7 working days to synchronize from the dealer counter into the central MTMIS database.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I pay unpaid Punjab vehicle token tax online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. You can generate a 1Bill PSID through the official ePay Punjab mobile application or web portal and pay vehicle token tax instantly via JazzCash, EasyPaisa, 1Link ATMs, or online mobile banking apps.',
          },
        },
      ],
    },
  ],
};

export default function PunjabExciseVehicleVerificationPage() {
  const breadcrumbs = [
    { nameEn: 'Traffic & Vehicles', nameUr: 'ٹریفک و موٹر گاڑی سروسز' },
    { nameEn: 'Punjab Vehicle Verification 2026', nameUr: 'پنجاب گاڑی تصدیق و ٹوکن ٹیکس 2026' },
  ];

  const verificationSteps = [
    {
      stepNumber: 1,
      titleEn: 'Navigate to Official Punjab MTMIS Portal',
      titleUr: 'پنجاب ایم ٹی ایم آئی ایس پورٹل کھولیں',
      detailEn:
        'Open mtmis.excise.punjab.gov.pk on your browser. Never use unauthorized third-party phishing sites requesting CNIC card uploads.',
      detailUr:
        'اپنے براؤزر پر mtmis.excise.punjab.gov.pk کھولیں۔ غیر سرکاری ویب سائٹس پر شناختی معلومات کبھی درج نہ کریں۔',
      badgeEn: 'PORTAL CHECK',
      badgeUr: 'آفیشل پورٹل',
    },
    {
      stepNumber: 2,
      titleEn: 'Enter Vehicle Number in Standard Format',
      titleUr: 'گاڑی کا نمبر درست فارمیٹ میں درج کریں',
      detailEn:
        'Enter your registration number with district and year prefix (e.g. LEA-20-1234 for cars or LEM-19-5678 for motorcycles).',
      detailUr:
        'ضلع اور ماڈل سال کے ساتھ نمبر درج کریں (جیسے LEA-20-1234 کاروں کے لیے یا LEM-19-5678 موٹر سائیکل کے لیے)۔',
      badgeEn: 'INPUT FORMAT',
      badgeUr: 'نمبر فارمیٹ',
    },
    {
      stepNumber: 3,
      titleEn: 'Verify Captcha & Query Database',
      titleUr: 'کیپچا تصدیق کر کے سرچ بٹن دبائیں',
      detailEn:
        'Solve the security captcha challenge to prevent automated bot scraping and click the Search button to fetch live Excise records.',
      detailUr:
        'سیکیورٹی کیپچا حل کریں اور سرچ کا بٹن دبا کر لائیو ڈیٹا بیس سے معلومات حاصل کریں۔',
      badgeEn: 'SECURITY',
      badgeUr: 'سیکیورٹی تصدیق',
    },
    {
      stepNumber: 4,
      titleEn: 'Cross-Check Ownership & Tax Clearance',
      titleUr: 'مالک کا نام، چیسس اور ٹوکن ٹیکس چیک کریں',
      detailEn:
        'Confirm registered owner name, chassis number against physical vehicle plate, engine number, and Token Tax Paid-Up-To date.',
      detailUr:
        'اصل گاڑی کی باڈی پر موجود چیسس اور انجن نمبر کا آن لائن ڈیٹا سے موازنہ کریں اور ٹوکن ٹیکس کی تاریخ تصدیق کریں۔',
      badgeEn: 'RECORD CHECK',
      badgeUr: 'ریکارڈ تصدیق',
    },
  ];

  const informationDisclosedComparison = [
    {
      titleEn: 'Owner Particulars',
      titleUr: 'مالک کی تفصیلات',
      subtitleEn: 'Legal Registered Ownership',
      subtitleUr: 'قانونی رجسٹرڈ مالک',
      badgeEn: 'OWNERSHIP',
      badgeUr: 'ملکیت',
      badgeVariant: 'navy' as const,
      pointsEn: [
        'Registered Owner Full Name',
        'Father / Husband Name',
        'Owner City & District Jurisdiction',
        'Biometric Transfer Status (Biometric e-Transfer)',
      ],
      pointsUr: [
        'رجسٹرڈ مالک کا پورا نام',
        'والد یا شوہر کا نام',
        'مالک کا شہر اور متعلقہ ضلع',
        'بائیو میٹرک ٹرانسفر کا سٹیٹس',
      ],
    },
    {
      titleEn: 'Vehicle Specifications',
      titleUr: 'گاڑی کی تکنیکی تفصیلات',
      subtitleEn: 'Engine & Chassis Authenticity',
      subtitleUr: 'انجن اور چیسس کی تصدیق',
      badgeEn: 'SPECS',
      badgeUr: 'گاڑی تفصیل',
      badgeVariant: 'brass' as const,
      pointsEn: [
        'Complete 17-digit Chassis / Frame Number',
        'Engine Serial Number',
        'Make, Model & Manufacturing Year',
        'Color, Body Type & Seating Capacity',
      ],
      pointsUr: [
        'مکمل چیسس اور فریم نمبر',
        'انجن کا سیریل نمبر',
        'کمپنی، ماڈل اور تیاری کا سال',
        'رنگ، باڈی کی قسم اور سیٹوں کی تعداد',
      ],
      isPopular: true,
    },
    {
      titleEn: 'Tax & Legal Standing',
      titleUr: 'ٹیکس و قانونی حیثیت',
      subtitleEn: 'Token Tax & Impound Status',
      subtitleUr: 'ٹوکن ٹیکس اور قانونی کلیئرنس',
      badgeEn: 'TAX STATUS',
      badgeUr: 'ٹیکس سٹیٹس',
      badgeVariant: 'emerald' as const,
      pointsEn: [
        'Token Tax Paid-Up-To Date (Lifetime or Annual)',
        'Arrears / Pending Penalties (if any)',
        'CPLC & Police Stolen / FIR Blocked Status',
        'Bank Lease / HPA Hypothecation Endorsement',
      ],
      pointsUr: [
        'ٹوکن ٹیکس کلیئرنس کی آخری تاریخ',
        'واجب الادا بقایا جات یا جرمانے',
        'پولیس ریکارڈ، چوری یا بلاک سٹیٹس',
        'بینک لیز یا فنانس اندراج کا سٹیٹس',
      ],
    },
  ];

  const faqItems = [
    {
      questionEn: 'What official website should I use for Punjab vehicle verification in 2026?',
      questionUr: 'سال 2026 میں پنجاب کی گاڑیوں کی تصدیق کے لیے کون سی آفیشل ویب سائٹ ہے؟',
      answerEn:
        'The only authentic government website is mtmis.excise.punjab.gov.pk, developed by PITB for the Punjab Excise & Taxation Department. Avoid unverified third-party mobile apps that harvest personal CNICs.',
      answerUr:
        'پنجاب کی گاڑیوں کی تصدیق کے لیے واحد آفیشل پورٹل mtmis.excise.punjab.gov.pk ہے۔ غیر مصدقہ ایپس پر شناختی کارڈ کا ڈیٹا درج کرنے سے گریز کریں۔',
    },
    {
      questionEn: 'What details does the Punjab MTMIS system reveal?',
      questionUr: 'پنجاب ایم ٹی ایم آئی ایس سسٹم پر کون سی تفصیلات ظاہر ہوتی ہیں؟',
      answerEn:
        'The system displays Registered Owner Name, Father Name, City, Registration Date, Vehicle Make and Model, Chassis Number, Engine Number, Color, Seating Capacity, and exact Token Tax clearance dates.',
      answerUr:
        'اس پورٹل پر گاڑی کے مالک کا نام، والد کا نام، رجسٹریشن کی تاریخ، میک و ماڈل، چیسس نمبر، انجن نمبر اور ٹوکن ٹیکس کی ادائیگی کا ریکارڈ ظاہر ہوتا ہے۔',
    },
    {
      questionEn: 'Why is my newly purchased vehicle showing "No Record Found"?',
      questionUr: 'نئی خریدی گئی گاڑی کا ڈیٹا "No Record Found" کیوں آ رہا ہے؟',
      answerEn:
        'New showroom purchases take approximately 3 to 7 working days to be uploaded by the local Excise Registration Authority. Also ensure you enter the number with proper hyphenation (e.g., LEA-24-1234).',
      answerUr:
        'نئی گاڑیوں کا ڈیٹا ایکسائز آفس سے آن لائن سسٹم میں شامل ہونے میں 3 سے 7 ورکنگ دن لگتے ہیں۔ نمبر ہمیشہ درست فارمیٹ میں لکھیں۔',
    },
    {
      questionEn: 'How can I pay unpaid vehicle token tax in Punjab?',
      questionUr: 'پنجاب میں گاڑی کا ٹوکن ٹیکس آن لائن کیسے ادا کریں؟',
      answerEn:
        'You can generate an electronic PSID via the ePay Punjab app or web portal and pay using JazzCash, EasyPaisa, ATM, or internet banking. Your MTMIS record updates to "Paid" within 24 to 48 hours.',
      answerUr:
        'ای پے پنجاب (ePay Punjab) ایپ کے ذریعے 1Bill پی ایس آئی ڈی بنائیں اور ایزی پیسہ، جاز کیش یا بینک ایپ سے ادائیگی کریں۔ ریکارڈ 24 سے 48 گھنٹوں میں اپ ڈیٹ ہو جاتا ہے۔',
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
            <InteractiveToolBadge labelEn="PUNJAB MTMIS DIRECTORY" labelUr="پنجاب ایکسائز ڈائریکٹری" variant="navy" />
            <VerifiedBadge textEn="PUNJAB EXCISE 2026 VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Punjab Excise Vehicle Verification Online 2026: MTMIS Registration Check
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پنجاب ایکسائز گاڑی آن لائن تصدیق، مالک کا نام، چیسس اور ٹوکن ٹیکس ریکارڈ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Buying a used car or motorcycle in Punjab? Verify vehicle registration details online across Lahore, Rawalpindi,
            Faisalabad, Multan, and all 42 districts. Confirm genuine registered owner name, chassis number, and token tax clearance
            via the official Motor Transport Management Information System (MTMIS).
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Verify a Punjab Registered Vehicle Online in 2026?"
          topicTitleUr="پنجاب میں گاڑی کی آن لائن تصدیق کرنے کا سب سے آسان طریقہ کیا ہے؟"
          answerEn="Visit the official Punjab Excise portal at mtmis.excise.punjab.gov.pk. Enter the vehicle registration number (e.g. LEA-20-1234 for cars or LEM-22-5678 for motorcycles), complete the captcha, and click Search. The system instantly reveals the registered owner name, father name, chassis number, engine number, and token tax clearance status."
          answerUr="پنجاب ایکسائز کے آفیشل پورٹل mtmis.excise.punjab.gov.pk پر جائیں۔ گاڑی کا مکمل رجسٹریشن نمبر (جیسے LEA-20-1234) درج کریں اور کیپچا حل کر کے سرچ کریں۔ سسٹم فوری طور پر رجسٹرڈ مالک کا نام، والد کا نام، چیسس نمبر، انجن نمبر اور ٹوکن ٹیکس کلیئرنس ریکارڈ ظاہر کر دے گا۔"
        />

        {/* In-Article Contextual Companion Tool */}
        <InlineContextualLink
          targetSlug="token-tax-calculator-2026"
          customLabelEn="Vehicle Token Tax Calculator 2026"
          customLabelUr="گاڑی کا سالانہ ٹوکن ٹیکس کیلکولیٹر"
          customNoteEn="Planning to buy or pay annual taxes? Calculate exact engine-capacity token tax for filers vs non-filers in Punjab."
          customNoteUr="گاڑی کا سالانہ ٹوکن ٹیکس معلوم کرنا چاہتے ہیں؟ فائلر اور نان فائلر کے لحاظ سے درست ٹیکس کا فوری حساب کریں۔"
        />

        {/* Section 1: ProcessStepsDiagram */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Car className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step: How to Check Punjab Vehicle Registration
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Follow this verified 4-step process on your smartphone or desktop before handing over cash to any private seller:
          </p>

          <ProcessStepsDiagram
            steps={verificationSteps}
            titleEn="Official Punjab MTMIS Vehicle Verification Sequence"
            titleUr="پنجاب ایم ٹی ایم آئی ایس گاڑی تصدیق کا مرحلہ وار طریقہ"
            subtitleEn="Direct electronic verification on Punjab Excise & PITB servers"
            subtitleUr="پنجاب انفارمیشن ٹیکنالوجی بورڈ اور ایکسائز ڈیٹا بیس سے براہ راست تصدیق"
            variant="dark"
          />
        </section>

        {/* Section 2: What Information is Revealed */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              What Information Does Punjab MTMIS Reveal?
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            The Punjab Excise database generates a comprehensive vehicle dossier divided into three essential verification categories:
          </p>

          <ComparisonVisual
            items={informationDisclosedComparison}
            titleEn="Punjab Vehicle Verification Record Breakdown"
            titleUr="پنجاب وہیکل ریکارڈ اور معلومات کا جائزہ"
            subtitleEn="Key parameters to inspect before completing biometric ownership transfer"
            subtitleUr="بائیو میٹرک ٹرانسفر سے قبل چیک کرنے والے اہم تکنیکی اور قانونی نکات"
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
            If your car or motorcycle is registered outside Punjab, access our province-specific verification guides below:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-sans">
            <Link
              href="/traffic/sindh-excise-vehicle-verification-2026"
              className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex flex-col justify-between group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase">SINDH PROVINCE</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                  Sindh Vehicle Verification →
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-[11px]">
                  Karachi &amp; Sindh 2-wheeler/4-wheeler registration, CPLC status, and tax check via excise.gos.pk.
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
          titleEn="Frequently Asked Questions (Punjab MTMIS Verification)"
          titleUr="عام طور پر پوچھے جانے والے سوالات (پنجاب گاڑی تصدیق)"
          subtitleEn="Essential legal and procedural answers verified by Punjab Excise 2026 regulations"
          subtitleUr="پنجاب ایکسائز اینڈ ٹیکسیشن قوانین 2026 کے مطابق مصدقہ جوابات"
        />

        {/* Section 5: High-Discovery Related Articles */}
        <RelatedArticles
          explicitSlugs={[
            '/traffic/token-tax-calculator-2026',
            '/traffic/vehicle-verification-online-2026',
            '/traffic/driving-license-online-apply-renewal-dlims-2026',
          ]}
          titleEn="Recommended Next Steps: Vehicle & Licensing Services"
          titleUr="اگلے مفید مراحل: گاڑیوں کی دیگر اہم سروسز"
          subtitleEn="Explore official token tax calculation, nationwide verification, and DLIMS license renewal"
          subtitleUr="ٹوکن ٹیکس، قومی وہیکل ڈیٹا اور ڈرائیونگ لائسنس کی تجدید کی گائیڈز"
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Punjab Excise MTMIS Portal', url: 'https://mtmis.excise.punjab.gov.pk/' },
            { label: 'Government of the Punjab Portal', url: 'https://punjab.gov.pk/' },
            { label: 'ePay Punjab Portal', url: 'https://epay.punjab.gov.pk/' },
            { label: 'Punjab Information Technology Board (PITB)', url: 'https://pitb.gov.pk/' },
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
