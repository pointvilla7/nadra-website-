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
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  Globe,
  Plane,
  Car,
  FileText,
  FileCheck,
  CreditCard,
  Building2,
  Check,
  Sparkles,
  Info
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'International Driving Permit Pakistan (2026): Apply Online, Requirements & Fees | Pakistan Info Hub',
  description:
    'Complete official guide to obtaining an International Driving Permit (IDP) in Pakistan for 2026: DLIMS online application, Police Khidmat Markaz steps, 1949/1968 Geneva Convention rules, fee schedule, validity period, and foreign country acceptance.',
  keywords: [
    'international driving permit pakistan 2026',
    'apply international driving license dlims punjab',
    'international driving license fee pakistan 2026',
    'police khidmat markaz international driving permit',
    'islamabad traffic police international driving license',
    'sindh driving license international permit apply',
    'geneva convention international driving permit pakistan',
    'international driving license validity 1 year',
  ],
  openGraph: {
    title: 'International Driving Permit Pakistan 2026: Apply Online & Requirements',
    description:
      'Official step-by-step guide to applying for a Pakistani International Driving Permit (IDP), required travel documents, 1-year validity rules, and driving overseas.',
    url: 'https://www.pakistaninfohub.com/traffic/international-driving-permit-pakistan-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/traffic/international-driving-permit-pakistan-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Driving & Traffic Verification', item: 'https://www.pakistaninfohub.com/traffic' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'International Driving Permit Pakistan Guide',
          item: 'https://www.pakistaninfohub.com/traffic/international-driving-permit-pakistan-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'International Driving Permit (IDP) Pakistan 2026: Application Process, Fees & Global Rules',
      description:
        'A comprehensive civic travel guide detailing how Pakistani national driving license holders can obtain an official 1-year International Driving Permit via DLIMS, Police Khidmat Markaz, and provincial traffic authorities.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-30',
      dateModified: '2026-08-30',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/traffic/international-driving-permit-pakistan-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Apply for an International Driving Permit (IDP) in Pakistan',
      description:
        'Step-by-step guide to applying for an official International Driving Permit through provincial traffic licensing authorities.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Prepare Essential Travel & Licensing Documents',
          text: 'Gather your valid original Pakistani driving license, CNIC, Pakistani Passport (valid 6+ months), valid visa or air ticket, and 2 passport-sized photographs.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Submit Application Online or at Police Khidmat Markaz',
          text: 'Apply via the DLIMS 2.0 portal / Dastak doorstep service or visit any Police Khidmat Markaz (PKM) / Traffic Licensing branch.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Pay Provincial IDP Fee',
          text: 'Pay the official government IDP fee (PKR 1,000 to PKR 1,500) via ePay PSID, cash counter, or digital 1Link banking.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Collect Multi-Language IDP Booklet',
          text: 'Collect your official printed 1-year multi-language International Driving Permit booklet or receive it via postal courier.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I drive overseas using only the International Driving Permit (IDP)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. An International Driving Permit is a supplementary translation document, not a standalone license. You must always carry your original physical Pakistani driving license alongside the IDP. Presenting an IDP without the domestic license is legally invalid abroad.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long is a Pakistani International Driving Permit valid?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An IDP issued in Pakistan under the UN Road Traffic Conventions is strictly valid for one (1) year from the date of issuance, or until the expiry of your underlying domestic Pakistani driving license (whichever comes first).',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I apply for an International Driving Permit with a Learner Permit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. An IDP can only be issued against a permanent regular driving license. Holders of Learner Permits, Juvenile Permits, or provisional slips are not eligible for an international permit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use an IDP if I move abroad on a permanent work or residency visa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An IDP is designed primarily for tourists, short-term business travelers, and temporary visitors (typically up to 90 to 180 days). Once you establish permanent residency or secure a work visa in countries like the UK, USA, UAE, or Canada, local traffic laws require you to convert or pass a local driving test.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can an International Driving Permit be renewed while living abroad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. IDPs cannot be renewed from overseas embassies because physical biometric verification and provincial traffic database synchronization are required. You must apply for a new IDP upon visiting Pakistan or obtain a local driving permit in your resident country.',
          },
        },
      ],
    },
  ],
};

export default function InternationalDrivingPermitPage() {
  const breadcrumbs = [
    { nameEn: 'Driving & Traffic Verification', nameUr: 'ڈرائیونگ لائسنس و ٹریفک تصدیق', url: '/traffic' },
    { nameEn: 'International Driving Permit Pakistan 2026', nameUr: 'بین الاقوامی ڈرائیونگ پرمٹ پاکستان 2026' },
  ];

  const idpSteps = [
    {
      number: 1,
      titleEn: 'Document Preparation & Validity Check',
      titleUr: 'دستاویزات کی تیاری اور تصدیق',
      descEn: 'Ensure your domestic Pakistani driving license is permanent and valid. Prepare original CNIC, Passport (6+ months validity), valid Visa/ticket, and 2 photographs.',
      descUr: 'اصل ڈرائیونگ لائسنس، شناختی کارڈ، پاسپورٹ (کم از کم 6 ماہ میعاد)، ویزا کاپی اور تصاویر تیار کریں۔',
      tagEn: 'Permanent License Required',
      tagUr: 'مستقل لائسنس',
    },
    {
      number: 2,
      titleEn: 'Submit Online or Visit PKM / Licensing Branch',
      titleUr: 'آن لائن درخواست یا خدمت مرکز وزٹ',
      descEn: 'Apply online through the DLIMS 2.0 portal / Dastak service, or walk in to any Police Khidmat Markaz (PKM) or Traffic Police Licensing Headquarters.',
      descUr: 'ڈی ایل آئی ایم ایس پورٹل یا قریبی پولیس خدمت مرکز پر جا کر درخواست جمع کروائیں۔',
      tagEn: 'DLIMS / PKM Centers',
      tagUr: 'خدمت مرکز',
    },
    {
      number: 3,
      titleEn: 'Fee Settlement (PKR 1,000 – 1,500)',
      titleUr: 'سرکاری فیس چالان کی ادائیگی',
      descEn: 'Deposit the provincial IDP fee via ePay PSID, 1Link mobile banking, or the licensing center cash counter.',
      descUr: 'ای پے پنجاب یا بینک کاؤنٹر کے ذریعے مقررہ سرکاری فیس ادا کریں۔',
      tagEn: 'PSID / Cash Counter',
      tagUr: 'سرکاری فیس',
    },
    {
      number: 4,
      titleEn: 'Collection of 1-Year Multi-Language Booklet',
      titleUr: 'ایک سالہ بین الاقوامی کتابچہ وصولی',
      descEn: 'Receive the official multi-language International Driving Permit booklet (translated into 7 international languages) across the counter or via courier delivery.',
      descUr: '7 عالمی زبانوں پر مشتمل آفیشل انٹرنیشنل پرمٹ بکلیٹ اسی دن یا بذریعہ ڈاک حاصل کریں۔',
      tagEn: '1-Year International Validity',
      tagUr: '1 سال میعاد',
    },
  ];

  const faqs = [
    {
      questionEn: 'Can I drive overseas using only the International Driving Permit (IDP)?',
      questionUr: 'کیا میں صرف انٹرنیشنل پرمٹ دکھا کر بیرون ملک گاڑی چلا سکتا ہوں؟',
      answerEn: 'No. An International Driving Permit is a supplementary translation document, not a standalone license. You must always carry your original physical Pakistani driving license alongside the IDP. Presenting an IDP without the domestic license is legally invalid abroad.',
      answerUr: 'نہیں، انٹرنیشنل پرمٹ اصل پاکستانی لائسنس کا ترجمہ ہے۔ بیرون ملک ڈرائیونگ کے وقت اصل پاکستانی لائسنس اور انٹرنیشنل پرمٹ دونوں ساتھ رکھنا لازمی ہے۔',
    },
    {
      questionEn: 'How long is a Pakistani International Driving Permit valid?',
      questionUr: 'پاکستانی انٹرنیشنل ڈرائیونگ پرمٹ کی میعاد کتنی ہوتی ہے؟',
      answerEn: 'An IDP issued in Pakistan under the UN Road Traffic Conventions is strictly valid for one (1) year from the date of issuance, or until the expiry of your underlying domestic Pakistani driving license (whichever comes first).',
      answerUr: 'اقوام متحدہ کے کنونشن کے تحت انٹرنیشنل ڈرائیونگ پرمٹ کی میعاد جاری ہونے کی تاریخ سے ٹھیک 1 سال ہوتی ہے۔',
    },
    {
      questionEn: 'Can I apply for an International Driving Permit with a Learner Permit?',
      questionUr: 'کیا لرنر پرمٹ پر انٹرنیشنل لائسنس بن سکتا ہے؟',
      answerEn: 'No. An IDP can only be issued against a permanent regular driving license. Holders of Learner Permits, Juvenile Permits, or provisional slips are not eligible for an international permit.',
      answerUr: 'نہیں، انٹرنیشنل پرمٹ کے لیے مستقل (Regular) ڈرائیونگ لائسنس کا ہونا لازمی ہے۔ لرنر پرمٹ پر انٹرنیشنل لائسنس جاری نہیں ہوتا۔',
    },
    {
      questionEn: 'Can I use an IDP if I move abroad on a permanent work or residency visa?',
      questionUr: 'کیا مستقل رہائش یا ورک ویزا پر بھی انٹرنیشنل پرمٹ چلتا ہے؟',
      answerEn: 'An IDP is designed primarily for tourists, short-term business travelers, and temporary visitors (typically up to 90 to 180 days). Once you establish permanent residency or secure a work visa in countries like the UK, USA, UAE, or Canada, local traffic laws require you to convert or pass a local driving test.',
      answerUr: 'انٹرنیشنل پرمٹ وزٹ ویزا اور سیاحوں کے لیے ہوتا ہے۔ مستقل رہائش یا ملازمت کی صورت میں مقیم ملک کا مقامی ڈرائیونگ لائسنس حاصل کرنا ضروری ہوتا ہے۔',
    },
    {
      questionEn: 'Can an International Driving Permit be renewed while living abroad?',
      questionUr: 'کیا بیرون ملک سفارتخانے سے انٹرنیشنل لائسنس کی تجدید ہو سکتی ہے؟',
      answerEn: 'No. IDPs cannot be renewed from overseas embassies because physical biometric verification and provincial traffic database synchronization are required. You must apply for a new IDP upon visiting Pakistan or obtain a local driving permit in your resident country.',
      answerUr: 'نہیں، سفارتخانوں سے انٹرنیشنل پرمٹ رینیو نہیں ہوتا۔ پاکستان آ کر نیا پرمٹ بنوانا ہوگا یا متعلقہ ملک کا لائسنس لینا ہوگا۔',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn max-w-5xl mx-auto font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Header */}
        <header className="rounded-3xl border-2 border-doc-brass/40 p-6 sm:p-8 md:p-10 space-y-4 relative overflow-hidden bg-doc-ink text-white shadow-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="INTERNATIONAL DRIVING PERMIT" labelUr="بین الاقوامی ڈرائیونگ پرمٹ" variant="seal" />
            <span className="text-xs text-slate-400 font-bold">•</span>
            <VerifiedBadge variant="header" textEn="1949 / 1968 GENEVA CONVENTION" textUr="اقوام متحدہ مصدقہ گائیڈ 2026" />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold tracking-tight leading-tight">
            International Driving Permit Pakistan (2026): Online Apply, DLIMS Rules, Fees &amp; Global Acceptance
          </h1>

          <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            Everything Pakistani travelers need to know about driving overseas. Learn how to obtain an official 1-year International Driving Permit (IDP) through DLIMS and Police Khidmat Markaz, fee schedules, and global country recognition.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-doc-brass font-mono">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Globe className="w-3.5 h-3.5 text-doc-brass" />
              <span>Recognized in 150+ Countries</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>1-Year Official Validity</span>
            </span>
          </div>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is an International Driving Permit (IDP) in Pakistan & What are its Limits?"
          topicTitleUr="پاکستان میں انٹرنیشنل ڈرائیونگ پرمٹ کیا ہے اور اس کی قانونی حیثیت کیا ہے؟"
          answerEn="An International Driving Permit (IDP) is an official multi-language translation booklet (authorized under UN Geneva & Vienna Conventions) that allows Pakistani license holders to drive legally in over 150 countries. It is NOT a standalone license—it is strictly valid for 1 year and MUST always be presented alongside your original Pakistani driving license."
          answerUr="انٹرنیشنل ڈرائیونگ پرمٹ (IDP) اقوام متحدہ کے کنونشن کے تحت جاری کردہ ایک آفیشل کتابچہ ہے جو آپ کے اصل پاکستانی لائسنس کا مختلف زبانوں میں ترجمہ فراہم کرتا ہے۔ یہ اکیلا کارآمد نہیں ہوتا، بلکہ اس کی میعاد 1 سال ہوتی ہے اور سفر کے دوران اصل پاکستانی لائسنس ساتھ رکھنا لازمی ہے۔"
        />

        {/* Section 1: Required Documents & Eligibility */}
        <section className="doc-card rounded-2xl p-6 sm:p-8 border border-doc-brass/30 space-y-4">
          <div className="flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-xl font-serif font-bold text-doc-ink dark:text-white">
              Eligibility &amp; Required Documents Checklist
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Before applying at a Police Khidmat Markaz or through the DLIMS online portal, ensure you have the following mandatory documents:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800 border border-doc-brass/20 space-y-2">
              <span className="font-bold text-doc-ink dark:text-white text-sm block">1. Driving License &amp; CNIC</span>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-300 list-disc list-inside">
                <li>Original permanent Pakistani Driving License (must have remaining validity)</li>
                <li>Original CNIC / NICOP and 1 clear photocopy</li>
                <li><em>Note: Learner permits and provisional slips are not accepted</em></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800 border border-doc-brass/20 space-y-2">
              <span className="font-bold text-doc-seal text-sm block">2. Travel Documents &amp; Photos</span>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-300 list-disc list-inside">
                <li>Original Pakistani Passport with at least 6 months validity</li>
                <li>Copy of valid foreign Visa or confirmed return air ticket</li>
                <li>Two (2) passport-size color photographs (white background)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Application Procedure */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <CheckCircle2 className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step Application Workflow
            </h2>
          </div>

          <ProcessStepsDiagram
            steps={idpSteps}
            titleEn="International Driving Permit Issuance Lifecycle"
            titleUr="بین الاقوامی ڈرائیونگ پرمٹ حاصل کرنے کا طریقہ"
            subtitleEn="From document verification to DLIMS/PKM counter submission and 1-year booklet collection"
            subtitleUr="دستاویزات کی جانچ سے لے کر خدمت مرکز درخواست اور کتابچہ وصولی تک"
            variant="dark"
          />
        </section>

        {/* Section 3: Fee Schedule & Validity Overview */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-doc-brass" />
            <h2 className="text-xl font-serif font-bold text-doc-ink dark:text-white">
              Fee Schedule &amp; Issuing Authority Details
            </h2>
          </div>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[500px]">
                <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 text-left">Province / Territory</th>
                    <th className="px-4 py-3 text-left">Issuing Authority</th>
                    <th className="px-4 py-3 text-left">Standard Fee</th>
                    <th className="px-4 py-3 text-left">Official Validity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                  <tr className="bg-white dark:bg-slate-900">
                    <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Punjab</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">DLIMS 2.0 / Police Khidmat Markaz</td>
                    <td className="px-4 py-3 font-mono font-bold text-doc-seal">PKR 1,000 – 1,500</td>
                    <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">1 Year</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-800/40">
                    <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Islamabad (ICT)</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Islamabad Traffic Police (ITP) HQ</td>
                    <td className="px-4 py-3 font-mono font-bold text-doc-seal">PKR 1,050 – 2,050</td>
                    <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">1 Year</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-900">
                    <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Sindh</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Sindh Police DLS Branches (Clifton/Nazimabad)</td>
                    <td className="px-4 py-3 font-mono font-bold text-doc-seal">PKR 1,000 – 1,400</td>
                    <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">1 Year</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-800/40">
                    <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Khyber Pakhtunkhwa</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">KP Traffic Police Licensing Directorate</td>
                    <td className="px-4 py-3 font-mono font-bold text-doc-seal">PKR 1,000</td>
                    <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">1 Year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4: Country Specific Advice & Bilateral Agreements */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Plane className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Global Acceptance &amp; Destination Verification Rules
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            <p>
              The Pakistani IDP conforms to the <strong>1949 Geneva Convention on Road Traffic</strong> and the <strong>1968 Vienna Convention</strong>. Over 150 countries accept this document for temporary tourist car rentals and short-term visits, including the United States, United Kingdom, Canada, Australia, European Union member states, Turkey, Saudi Arabia, and the United Arab Emirates.
            </p>
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 text-xs text-blue-950 dark:text-blue-200 space-y-1">
              <strong className="block font-bold">Destination Country Check:</strong>
              <p>
                Some jurisdictions (such as the UK) allow tourist driving on a valid Pakistani license without an IDP for up to 12 months, whereas car rental agencies in Europe, the USA, and UAE strictly mandate presenting both the IDP booklet and national card. Always check with your destination country&apos;s embassy or rental agency prior to travel.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ Accordion */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (International Driving Permit)
            </h2>
          </div>

          <FAQAccordionVisual items={faqs} />
        </section>

        {/* Cross-Linking Hub */}
        <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
            Related Driving License &amp; Traffic Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <Link
              href="/traffic/driving-license-online-apply-renewal-dlims-2026"
              className="p-3.5 rounded-xl border border-doc-brass/30 hover:border-doc-seal bg-slate-50 dark:bg-slate-800 transition flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <span className="font-bold text-doc-ink dark:text-white block group-hover:text-doc-seal transition">
                  DLIMS License Apply &amp; Renewal →
                </span>
                <span className="text-slate-500 dark:text-slate-400">Domestic license application &amp; fee structure</span>
              </div>
            </Link>

            <Link
              href="/traffic/driving-license-status-check-online-2026"
              className="p-3.5 rounded-xl border border-doc-brass/30 hover:border-doc-seal bg-slate-50 dark:bg-slate-800 transition flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <span className="font-bold text-doc-ink dark:text-white block group-hover:text-doc-seal transition">
                  Driving License Tracker →
                </span>
                <span className="text-slate-500 dark:text-slate-400">Track DLIMS card printing &amp; UMS dispatch</span>
              </div>
            </Link>

            <Link
              href="/traffic/vehicle-ownership-transfer-online-punjab-2026"
              className="p-3.5 rounded-xl border border-doc-brass/30 hover:border-doc-seal bg-slate-50 dark:bg-slate-800 transition flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <span className="font-bold text-doc-ink dark:text-white block group-hover:text-doc-seal transition">
                  Vehicle Ownership Transfer →
                </span>
                <span className="text-slate-500 dark:text-slate-400">Punjab Excise biometric transfer &amp; ePay</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Ad Placement Zone */}
        <AdPlacementZone format="horizontal" />
      </div>
    </>
  );
}
