import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  HelpCircle,
  ExternalLink,
  Globe,
  Plane,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Clock,
  Coins,
  ChevronRight,
  ShieldAlert,
  UserCheck,
  Building,
  Info,
  BadgeCheck,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pakistan e-Visa Guide 2026: Official Portal, VPA Suspension & Fees | Pakistan Info Hub',
  description:
    'Complete guide to applying for a Pakistan e-Visa in 2026 via visa.nadra.gov.pk. Includes the 1 January 2026 Visa Prior to Arrival (VPA) suspension update, Tourist/Business visa fees, 7-10 day processing times, and scam alerts for foreign visitors.',
  keywords: [
    'pakistan evisa foreign visitors 2026',
    'visa nadra gov pk official portal',
    'pakistan visa prior to arrival suspended 2026',
    'pakistan tourist evisa requirements',
    'pakistan business evisa fee',
    'pakistan visa processing time 2026',
    'pakistan entry visa for foreign nationals',
    'how to get pakistan visa online 2026',
  ],
  openGraph: {
    title: 'Pakistan e-Visa Guide 2026: Official Portal, VPA Suspension & Fees',
    description:
      'Official step-by-step guide for foreign nationals traveling to Pakistan in 2026: Online e-Visa application via visa.nadra.gov.pk, VPA suspension rules, requirements, and scam protection.',
    url: 'https://www.pakistaninfohub.com/overseas/pakistan-evisa-foreign-visitors-guide-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/overseas/pakistan-evisa-foreign-visitors-guide-2026' },
};

const FAQS_LIST = [
  {
    question: 'Do foreign nationals need a visa to visit Pakistan in 2026?',
    answer:
      'Yes. As of 1 January 2026, Pakistan suspended its free Visa Prior to Arrival (VPA) scheme. Almost all foreign travelers must obtain an approved online e-Visa via the official portal (visa.nadra.gov.pk) before boarding their flight, unless exempt under specific bilateral treaties (such as Chinese passport holders for up to 30 days) or entering on a valid NICOP/POC card.',
  },
  {
    question: 'What is the official website for applying for a Pakistan e-Visa?',
    answer:
      'The ONLY official, government-authorized website for Pakistan online visa applications is visa.nadra.gov.pk. It is managed by NADRA in coordination with the Ministry of Foreign Affairs (MOFA) and the Directorate General of Immigration & Passports (DGIP). Avoid third-party commercial agent sites.',
  },
  {
    question: 'How long does a Pakistan e-Visa take to process in 2026?',
    answer:
      'Standard Tourist and Business e-Visa applications take 7 to 10 business days to process. Applicants are strongly advised to apply at least 2 weeks before their intended travel date.',
  },
  {
    question: 'Is the Visa Prior to Arrival (VPA) still free in 2026?',
    answer:
      'No. The free Visa Prior to Arrival (VPA) system that previously permitted citizens of 126 countries 48-hour automated entry authorization was suspended on 1 January 2026. All foreign tourists must now pay the standard e-Visa fee applicable to their nationality.',
  },
  {
    question: 'Can dual citizens with Pakistani origin travel without a foreign e-Visa?',
    answer:
      'Yes. Overseas Pakistanis holding a valid National Identity Card for Overseas Pakistanis (NICOP) or Pakistan Origin Card (POC) can enter Pakistan visa-free on their foreign passport by presenting their original NICOP/POC at airport immigration.',
  },
];

const APPLICATION_STEPS = [
  {
    stepNumber: 1,
    titleEn: 'Create Account on Official Government Portal',
    titleUr: 'آفیشل پورٹل پر اکاؤنٹ بنائیں',
    detailEn: 'Visit the official portal visa.nadra.gov.pk, register a personal account, and verify your email address. Never use third-party intermediary websites.',
  },
  {
    stepNumber: 2,
    titleEn: 'Select Visa Category & Entry Type',
    titleUr: 'ویزا کیٹیگری اور مدت منتخب کریں',
    detailEn: 'Choose your visa category (Tourist, Business, Transit) and entry preference (Single Entry or Multiple Entry).',
  },
  {
    stepNumber: 3,
    titleEn: 'Complete Online Application Form',
    titleUr: 'آن لائن درخواست فارم مکمل کریں',
    detailEn: 'Fill in passport details, contact information, travel itinerary, flight details, and Pakistani host/hotel address accurately.',
  },
  {
    stepNumber: 4,
    titleEn: 'Upload Required Documents',
    titleUr: 'مطلوبہ دستاویزات اپ لوڈ کریں',
    detailEn: 'Upload scanned copies of your passport valid for >6 months, recent passport-size photograph (white background), hotel booking/invitation letter, and return flight itinerary.',
  },
  {
    stepNumber: 5,
    titleEn: 'Pay e-Visa Fee Online',
    titleUr: 'آن لائن ویزا فیس کی ادائیگی',
    detailEn: 'Pay the applicable visa fee using an international credit or debit card (Visa/Mastercard). Fees vary by nationality and visa type.',
  },
  {
    stepNumber: 6,
    titleEn: 'Receive & Print Approved e-Visa PDF',
    titleUr: 'ای ویزا کی منظوری اور پرنٹ کی وصولی',
    detailEn: 'Upon approval (7–10 business days), download the electronic visa grant notice (PDF) sent to your email, print a copy, and carry it with your passport.',
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
          name: 'Overseas Pakistanis & Immigration',
          item: 'https://www.pakistaninfohub.com/overseas',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Pakistan e-Visa Foreign Visitors Guide 2026',
          item: 'https://www.pakistaninfohub.com/overseas/pakistan-evisa-foreign-visitors-guide-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Pakistan e-Visa Guide 2026: Official Portal, VPA Suspension & Fees for Foreign Visitors',
      description:
        'Detailed immigration guide explaining Pakistan online e-Visa requirements, January 2026 VPA suspension policy update, visa categories, 7-10 day processing timelines, and official portal verification.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-29',
      dateModified: '2026-09-29',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/overseas/pakistan-evisa-foreign-visitors-guide-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Apply for a Pakistan e-Visa Online in 2026',
      description: 'Step-by-step instructions for foreign nationals applying for a Pakistan e-Visa via the official visa.nadra.gov.pk portal.',
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

export default function PakistanEvisaPage() {
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
              { nameEn: 'Overseas & Immigration', nameUr: 'اوورسیز و امیگریشن', url: '/overseas' },
              { nameEn: 'Pakistan e-Visa Foreign Visitors Guide 2026', nameUr: 'پاکستان ای ویزا گائیڈ 2026' },
            ]}
          />

          {/* Page Header */}
          <div className="mt-4 mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <VerifiedBadge textEn="MOFA & DGIP Immigration Policy 2026" textUr="وزارتِ خارجہ پالیسی 2026" />
              <InteractiveToolBadge labelEn="Official Portal Guide" labelUr="آفیشل پورٹل گائیڈ" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Pakistan e-Visa Guide 2026: Rules for Foreign Visitors
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              Essential entry guidelines for foreign tourists, business travelers, and transit visitors to Pakistan: Online application via <strong>visa.nadra.gov.pk</strong>, VPA scheme suspension rules, processing times, and scam alerts.
            </p>
          </div>

          {/* Direct Answer Box */}
          <DirectAnswerBox
            topicTitleEn="Pakistan e-Visa & Entry Requirements 2026"
            topicTitleUr="غیر ملکیوں کے لیے پاکستان ای ویزا کے نئے قوانین 2026"
            answerEn="Effective January 1, 2026, Pakistan suspended its free Visa Prior to Arrival (VPA) scheme. Foreign tourists must apply online prior to travel through the official government portal (visa.nadra.gov.pk). Processing takes 7–10 business days. Tourist, Business, and Transit e-Visas are available, with fees varying by nationality."
            answerUr="یکم جنوری 2026 سے پاکستان نے فری ویزا آن ارائیول (VPA) کی سہولت معطل کر دی ہے۔ تمام غیر ملکی سیاحوں کے لیے آفیشل پورٹل (visa.nadra.gov.pk) سے آن لائن ای ویزا اپلائی کرنا لازمی ہے۔ ویزا پروسیسنگ 7 تا 10 ورکنگ دنوں میں ہوتی ہے۔"
          />

          {/* Major Policy Update Alert Banner */}
          <div className="my-8 bg-gradient-to-r from-amber-950/80 via-slate-900 to-slate-950 border-2 border-amber-500/40 rounded-3xl p-6 shadow-2xl text-amber-100">
            <div className="flex items-start gap-3">
              <div className="p-3 bg-amber-500/20 text-amber-400 rounded-2xl shrink-0 mt-1">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300">
                  <span>Major Policy Change Effective 1 January 2026</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  Suspension of Free &quot;Visa Prior to Arrival&quot; (VPA) Scheme
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Foreign travelers must note that the previous free 48-hour automated <strong>Visa Prior to Arrival (VPA)</strong> system (formerly applicable to 126 nationalities) was <strong>OFFICIALLY SUSPENDED on January 1, 2026</strong>.
                </p>
                <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
                  All foreign passport holders must now obtain an issued electronic visa (e-Visa) <strong>BEFORE boarding their flight to Pakistan</strong>. Do not travel relying on outdated blogs claiming free visa on arrival exists.
                </p>
              </div>
            </div>
          </div>

          {/* Scam Warning Box */}
          <div className="my-8 bg-rose-950/40 border-2 border-rose-600/40 rounded-3xl p-6 shadow-xl text-rose-100">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-6 h-6 text-rose-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Scam Warning: Only Use the Official Government Portal
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                  Multiple third-party commercial websites mimic official government portals, charging excessive fees or issuing fraudulent visas. The Government of Pakistan officially advises:
                </p>
                <div className="p-3 bg-slate-900/90 rounded-xl border border-rose-500/30 text-xs text-rose-200 font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span>Official Government Portal: <strong>visa.nadra.gov.pk</strong></span>
                  <a
                    href="https://visa.nadra.gov.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-rose-600 hover:bg-rose-500 text-white rounded-lg font-bold text-[11px] transition inline-flex items-center gap-1 self-start sm:self-auto"
                  >
                    <span>Visit Official Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  * Note: The Ministry of Foreign Affairs (MOFA) and DGIP have explicitly declared they have NO collaboration with any private agency or third-party visa processing website.
                </p>
              </div>
            </div>
          </div>

          {/* Ad Placement */}
          <div className="my-8">
            <AdPlacementZone slotId="evisa-foreign-visitors-top" />
          </div>

          {/* Detailed Content Sections */}
          <div className="mt-10 space-y-10">
            {/* Visa Categories Breakdown */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Pakistan e-Visa Categories, Stay Durations &amp; Fees
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Visa fees vary by nationality based on bilateral reciprocal agreements.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Tourist Visa */}
                <div className="p-5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">1. Tourist e-Visa</h3>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold">
                        Most Common
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                      Issued for tourism, sightseeing, visiting friends, and cultural trips.
                    </p>
                    <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 mb-4">
                      <li><strong>Validity:</strong> 3 Months to 1 Year</li>
                      <li><strong>Allowed Stay:</strong> 30 to 90 Days</li>
                      <li><strong>Fee Range:</strong> ~$5 to $60 USD (varies by passport)</li>
                      <li><strong>Processing Time:</strong> 7–10 Business Days</li>
                    </ul>
                  </div>
                  <div className="text-[11px] text-slate-400 bg-slate-100 dark:bg-slate-900 p-2.5 rounded-xl">
                    Required: Passport, Photo, Hotel Booking or Host Invitation Letter
                  </div>
                </div>

                {/* Business Visa */}
                <div className="p-5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">2. Business e-Visa</h3>
                      <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[11px] font-bold">
                        Commercial
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                      Issued to business executives, trade delegates, and investors.
                    </p>
                    <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 mb-4">
                      <li><strong>Validity:</strong> Up to 5 Years (Multiple Entry)</li>
                      <li><strong>Allowed Stay:</strong> 30 to 90 Days per visit</li>
                      <li><strong>Fee Range:</strong> ~$25 to $120 USD</li>
                      <li><strong>Processing Time:</strong> 7–10 Business Days</li>
                    </ul>
                  </div>
                  <div className="text-[11px] text-slate-400 bg-slate-100 dark:bg-slate-900 p-2.5 rounded-xl">
                    Required: E-INV Invitation Letter or Chamber of Commerce Letter
                  </div>
                </div>

                {/* Transit Visa */}
                <div className="p-5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">3. Transit e-Visa</h3>
                      <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[11px] font-bold">
                        Short Stay
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                      Issued for international passengers changing flights in Pakistan.
                    </p>
                    <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 mb-4">
                      <li><strong>Validity:</strong> Single Entry</li>
                      <li><strong>Allowed Stay:</strong> Up to 72 Hours</li>
                      <li><strong>Fee Range:</strong> ~$5 to $20 USD</li>
                      <li><strong>Processing Time:</strong> 3–5 Business Days</li>
                    </ul>
                  </div>
                  <div className="text-[11px] text-slate-400 bg-slate-100 dark:bg-slate-900 p-2.5 rounded-xl">
                    Required: Confirmed Onward Flight Ticket to 3rd Country
                  </div>
                </div>
              </div>
            </section>

            {/* Step-by-Step Application Guide */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Step-by-Step Pakistan e-Visa Online Application Procedure
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    How foreign nationals apply via the official visa.nadra.gov.pk portal.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {APPLICATION_STEPS.map((step) => (
                  <div
                    key={step.stepNumber}
                    className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/60 flex items-start gap-4"
                  >
                    <span className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-extrabold flex items-center justify-center shrink-0 text-sm">
                      {step.stepNumber}
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                        {step.titleEn}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {step.detailEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Exemptions & Dual Nationals */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Exemptions &amp; Dual Citizenship Provisions
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                    <BadgeCheck className="w-4 h-4 text-emerald-500" />
                    <span>Chinese Passport Holders (Visa-Free)</span>
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Under current bilateral agreements, citizens of the People&apos;s Republic of China holding ordinary passports are granted visa-free entry for up to 30 days.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                    <BadgeCheck className="w-4 h-4 text-emerald-500" />
                    <span>NICOP &amp; POC Holders (Dual Nationals)</span>
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Foreign passport holders of Pakistani origin who possess a valid NICOP or POC card do not require an e-Visa and enter visa-free.
                  </p>
                </div>
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

            {/* Cross-Link Card for NICOP & Overseas Hub */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-semibold">
                  <Globe className="w-4 h-4" />
                  <span>Overseas Pakistanis Hub</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold">
                  Applying for NICOP or POC Card Online?
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
                  If you are an overseas Pakistani or dual citizen, explore our dedicated guides for Pak-ID NICOP renewals, Zone A/B fee structures, and POC cards.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/overseas/nicop-mandatory-entry-rules-2026"
                  className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm rounded-xl transition shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                >
                  <span>NICOP Rules 2026</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/overseas/poc-card-pakistan-apply-online"
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm rounded-xl border border-slate-700 transition flex items-center justify-center gap-2"
                >
                  <span>POC Card Guide</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
