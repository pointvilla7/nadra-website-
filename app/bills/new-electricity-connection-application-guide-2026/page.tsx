import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  HelpCircle,
  ExternalLink,
  Zap,
  Building,
  FileText,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Coins,
  ChevronRight,
  ShieldAlert,
  Search,
  Layers,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'New Electricity Connection Guide 2026: ENC Portal, Fees & Documents | Pakistan Info Hub',
  description:
    'Complete guide to applying for a new electricity connection online in Pakistan via the ENC portal (enc.com.pk) for LESCO, IESCO, FESCO, MEPCO, PESCO, GEPCO, and K-Electric. Required documents, demand notice payment, load categories, and installation timeline.',
  keywords: [
    'new electricity connection apply online 2026',
    'enc com pk application portal',
    'lesco new connection apply online',
    'iesco new connection demand notice',
    'fesco new meter application documents',
    'electricity meter installation time pakistan',
    'k electric new connection procedure',
    'mepco new connection tracking id',
  ],
  openGraph: {
    title: 'New Electricity Connection Application Guide 2026 (ENC Portal)',
    description:
      'Step-by-step procedure for applying for a new electricity meter in Pakistan: Online application on enc.com.pk, document checklist, Demand Notice payment, and DISCO verification.',
    url: 'https://www.pakistaninfohub.com/bills/new-electricity-connection-application-guide-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/bills/new-electricity-connection-application-guide-2026' },
};

const FAQS_LIST = [
  {
    question: 'How do I apply for a new electricity connection online in Pakistan?',
    answer:
      'You can apply online through the official Electricity New Connection (ENC) portal at enc.com.pk for all government DISCOs (LESCO, IESCO, FESCO, MEPCO, PESCO, GEPCO, HESCO, QESCO, SEPCO). Select your DISCO, fill out the form, receive a Tracking ID, and upload required documents.',
  },
  {
    question: 'What documents are required for a new domestic electricity connection?',
    answer:
      'Required documents include an attested copy of applicant CNIC, proof of property ownership (Registry, Fard-e-Malkiat, or Allotment Letter), a copy of a neighbor’s paid electricity bill (for reference location), a Wiring Test Certificate from a licensed electrical contractor, and an affidavit on Rs. 100 stamp paper stating no prior dues exist.',
  },
  {
    question: 'What is a Demand Notice (DN) and how is it paid?',
    answer:
      'A Demand Notice is the official fee voucher issued by your DISCO after verifying your site and load requirements. It includes meter security deposits and line extension charges. Once generated, you can download it from enc.com.pk and pay at designated commercial bank branches.',
  },
  {
    question: 'How long does it take to get a new electricity meter installed?',
    answer:
      'For Category 1 connections (up to 15 kW domestic/commercial single-phase or three-phase), meters are typically installed within 15 to 30 days after paying the Demand Notice. High-load Category 2 and 3 connections may take 45 to 60 days.',
  },
  {
    question: 'How do Karachi residents apply for a K-Electric connection?',
    answer:
      'K-Electric operates its own separate portal at ke.com.pk or through KE Customer Care Centers. Karachi residents register online, schedule a site survey, pay the Demand Notice, and get energized directly through K-Electric.',
  },
];

const APPLICATION_STEPS = [
  {
    stepNumber: 1,
    titleEn: 'Access the Official ENC Portal',
    titleUr: 'آفیشل ای این سی پورٹل پر جائیں',
    detailEn: 'Visit enc.com.pk (or ke.com.pk for K-Electric) and select "Apply New Connection" from the main menu.',
  },
  {
    stepNumber: 2,
    titleEn: 'Select DISCO & Connection Category',
    titleUr: 'اپنی تقسیم کار کمپنی اور لوڈ کیٹیگری چنیں',
    detailEn: 'Choose your local distribution company (e.g., LESCO, IESCO, FESCO) and select Category 1 (up to 15 kW for standard domestic/commercial connections).',
  },
  {
    stepNumber: 3,
    titleEn: 'Fill Personal & Property Details',
    titleUr: 'ذاتی معلومات اور اراضی کی تفصیلات درج کریں',
    detailEn: 'Provide applicant CNIC, property address, nearest neighbor’s bill reference number, and sanctioned load requirement.',
  },
  {
    stepNumber: 4,
    titleEn: 'Upload Scanned Documents',
    titleUr: 'ضروری دستاویزات اپ لوڈ کریں',
    detailEn: 'Upload clear scans of CNIC, property ownership document (Registry/Fard), wiring test report, and neighbor’s bill.',
  },
  {
    stepNumber: 5,
    titleEn: 'Site Survey & Demand Notice Generation',
    titleUr: 'سائٹ کا معائنہ اور ڈیمانڈ نوٹس کی وصولی',
    detailEn: 'A local Sub-Divisional Officer (SDO) conducts a site survey. Once approved, download your Demand Notice from enc.com.pk using your Tracking ID.',
  },
  {
    stepNumber: 6,
    titleEn: 'Pay Demand Notice & Meter Installation',
    titleUr: 'ڈیمانڈ نوٹس فیس جمع کروائیں اور میٹر کی تنصیب',
    detailEn: 'Pay the Demand Notice at designated bank branches. Submit paid receipt copy to SDO office; meter installation completes within 15–30 days.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Utility Bills & Services',
          item: 'https://www.pakistaninfohub.com/bills',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'New Electricity Connection Application Guide 2026',
          item: 'https://www.pakistaninfohub.com/bills/new-electricity-connection-application-guide-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'New Electricity Connection Guide 2026: ENC Portal, Fees & Documents',
      description:
        'Official step-by-step guide for applying for a new electricity meter online in Pakistan via enc.com.pk across LESCO, IESCO, FESCO, MEPCO, GEPCO, and K-Electric.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-29',
      dateModified: '2026-09-29',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/bills/new-electricity-connection-application-guide-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Apply for a New Electricity Connection Online in Pakistan',
      description: 'Step-by-step online application instructions via enc.com.pk for Pakistani electricity distribution companies.',
      step: APPLICATION_STEPS.map((s) => ({
        '@type': 'HowToStep',
        position: s.stepNumber,
        name: s.titleEn,
        text: s.detailEn,
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS_LIST.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function NewElectricityConnectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { nameEn: 'Utility Bills & Services', nameUr: 'بجلی، گیس و پانی بلز', url: '/bills' },
              { nameEn: 'New Electricity Connection Guide 2026', nameUr: 'نیا بجلی میٹر کنکشن گائیڈ 2026' },
            ]}
          />

          {/* Page Header */}
          <div className="mt-4 mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <VerifiedBadge textEn="ENC.COM.PK & NEPRA Aligned" textUr="سرکاری ای این سی پورٹل تائید شدہ" />
              <InteractiveToolBadge labelEn="Online ENC Portal Guide" labelUr="آن لائن نیا میٹر پورٹل گائیڈ" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              New Electricity Connection Application Guide 2026
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              Step-by-step procedure for applying for a new domestic or commercial electricity meter online in Pakistan via <strong>enc.com.pk</strong> for LESCO, IESCO, FESCO, MEPCO, PESCO, GEPCO, HESCO, QESCO, SEPCO, and K-Electric.
            </p>
          </div>

          {/* Direct Answer Box */}
          <DirectAnswerBox
            topicTitleEn="New Electricity Connection Process 2026"
            topicTitleUr="نیا بجلی میٹر لگوانے کا طریقہ 2026"
            answerEn="To get a new electricity connection in Pakistan, apply online at enc.com.pk (or ke.com.pk for Karachi). Upload CNIC, property ownership proof, wiring test certificate, and a neighbor’s bill. After a site survey, pay the Demand Notice at a bank. Meters are typically installed within 15–30 days."
            answerUr="پاکستان میں نیا بجلی کا میٹر لگوانے کے لیے آفیشل پورٹل (enc.com.pk) پر آن لائن فارم پر کریں۔ شناختی کارڈ، اراضی ثبوت، وائرنگ ٹیسٹ رپورٹ اور ہمسائے کا بل اپ لوڈ کریں۔ سائٹ معائنے کے بعد ڈیمانڈ نوٹس بینک میں جمع کروائیں، میٹر 15 تا 30 دنوں میں انسٹال ہو جاتا ہے۔"
          />

          {/* Official Portal Callout Banner */}
          <div className="my-8 bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-950 border-2 border-emerald-500/40 rounded-3xl p-6 shadow-2xl text-emerald-100">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-2xl shrink-0 mt-1">
                <Zap className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-xs font-bold text-emerald-300">
                  <span>Central Portal: PITC &amp; NEPRA Standardized</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  Electricity New Connection (ENC) Online Portal
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  All government distribution companies (DISCOs) use the central <strong>enc.com.pk</strong> system. Applicants no longer need to pay illegal middlemen. The online application is completely free; fees are paid strictly via bank-issued Demand Notices.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="https://enc.com.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition inline-flex items-center gap-1.5 shadow-lg shadow-emerald-500/20"
                  >
                    <span>Open ENC Portal (enc.com.pk)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://www.ke.com.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl border border-slate-700 transition inline-flex items-center gap-1.5"
                  >
                    <span>Karachi K-Electric Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Ad Placement */}
          <div className="my-8">
            <AdPlacementZone slotId="new-electricity-connection-top" />
          </div>

          {/* Detailed Content Sections */}
          <div className="mt-10 space-y-10">
            {/* Required Documents Checklist */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Mandatory Document Checklist for New Connection
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Prepare clear scanned copies before starting your ENC portal application.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block mb-1">1. Applicant CNIC Copy</strong>
                    Attested front and back scanned copy of the applicant&apos;s valid Computerized National Identity Card.
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block mb-1">2. Proof of Property Ownership</strong>
                    Registered Title Deed (Registry), Fard-e-Malkiat from PLRA, or Housing Society Allotment Letter in applicant&apos;s name.
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block mb-1">3. Neighbor&apos;s Paid Electricity Bill</strong>
                    Copy of a recent paid bill from an immediate neighbor to establish exact feeder/sub-division location.
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block mb-1">4. Wiring Test Certificate</strong>
                    Certificate issued by a licensed electrical wiring contractor confirming internal premises wiring safety.
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block mb-1">5. Owner NOC (For Tenants)</strong>
                    If renting, a signed No Objection Certificate (NOC) on Rs. 100 stamp paper from the property owner.
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block mb-1">6. Undertaking Affidavit</strong>
                    Affidavit on stamp paper affirming that no previous unpaid electricity arrears exist on the property.
                  </div>
                </div>
              </div>
            </section>

            {/* Load Categories & Timeline */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Load Categories &amp; Installation Timelines
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Sanctioned load determines your connection class and Demand Notice cost.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="p-5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-[11px]">
                    Category 1
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mt-2 mb-1">
                    Up to 15 kW (Domestic/Commercial)
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Single-phase and three-phase meters for residential homes and small shops. Timeline: <strong>15–30 Days</strong> post Demand Notice payment.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold text-[11px]">
                    Category 2
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mt-2 mb-1">
                    16 kW to 70 kW (Commercial/Industrial)
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Medium-scale commercial buildings, plaza floors, and small industrial units. Timeline: <strong>30–45 Days</strong>.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-600 dark:text-purple-400 font-bold text-[11px]">
                    Category 3
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mt-2 mb-1">
                    71 kW to 500 kW (Heavy Industrial)
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Requires dedicated transformer installation and grid station clearance. Timeline: <strong>45–60 Days</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* Step-by-Step HowTo Application */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                  <Zap className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Step-by-Step Application Procedure (enc.com.pk)
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {APPLICATION_STEPS.map((s) => (
                  <div
                    key={s.stepNumber}
                    className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/60 flex items-start gap-4"
                  >
                    <span className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-extrabold flex items-center justify-center shrink-0 text-sm">
                      {s.stepNumber}
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                        {s.titleEn}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {s.detailEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Accordion Section */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Frequently Asked Questions (FAQ)
                </h2>
              </div>

              <div className="space-y-4">
                {FAQS_LIST.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/60"
                  >
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Cross-Link Card for Utility Bill Checkers */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-semibold">
                  <Zap className="w-4 h-4" />
                  <span>Utility Bill Tools</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold">
                  Already Have an Electricity Connection?
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
                  Check your monthly duplicate electricity bill online for FESCO, LESCO, IESCO, MEPCO, GEPCO, and PESCO with our instant bill lookup widgets.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/bills/fesco-bill-check-online-duplicate-2026"
                  className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm rounded-xl transition shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                >
                  <span>FESCO Bill Checker</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/bills/new-gas-connection-application-guide-2026"
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm rounded-xl border border-slate-700 transition flex items-center justify-center gap-2"
                >
                  <span>New Gas Connection Guide</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
