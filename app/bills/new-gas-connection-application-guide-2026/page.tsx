import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  HelpCircle,
  ExternalLink,
  Flame,
  Building,
  FileText,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Coins,
  ChevronRight,
  ShieldAlert,
  Search,
  Info,
  Layers,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'New Gas Connection Policy 2026: SNGPL & SSGC Status & Rules | Pakistan Info Hub',
  description:
    'Current 2026 policy status for new domestic gas connections in Pakistan across SNGPL and SSGC. Understand ongoing moratorium restrictions, RLNG tariff options, application tracking, required documents, and scam warnings.',
  keywords: [
    'new gas connection apply online 2026',
    'sngpl new gas connection status 2026',
    'ssgc new gas meter ban policy',
    'pakistan gas connection moratorium 2026',
    'rlng gas connection fee sngpl',
    'sui gas new connection demand notice',
    'sngpl online application tracking',
    'ssgc new connection documents',
  ],
  openGraph: {
    title: 'New Gas Connection Policy Guide 2026 (SNGPL & SSGC)',
    description:
      'Official policy breakdown of new domestic natural gas connection availability in Pakistan: Moratorium status, RLNG rules, application tracking, and official SNGPL/SSGC advice.',
    url: 'https://www.pakistaninfohub.com/bills/new-gas-connection-application-guide-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/bills/new-gas-connection-application-guide-2026' },
};

const FAQS_LIST = [
  {
    question: 'Are new domestic gas connections available in Pakistan in 2026?',
    answer:
      'New domestic natural gas connections remain broadly suspended or strictly restricted in most regions across SNGPL (Punjab, KPK, Islamabad) and SSGC (Sindh, Balochistan) due to severe natural gas depletion. Demand notice issuance for standard system gas is frozen in most residential areas.',
  },
  {
    question: 'What is the RLNG gas connection policy?',
    answer:
      'In select areas where new connections are conditionally permitted by the Ministry of Energy, they are issued strictly under the RLNG (Re-gasified Liquefied Natural Gas) tariff. RLNG tariffs are significantly higher than traditional domestic system gas tariffs.',
  },
  {
    question: 'How can I check the status of a pending SNGPL or SSGC gas application?',
    answer:
      'If you submitted an application prior to the moratorium, you can track its status online using your application reference number on sngpl.com.pk (for Punjab/KPK/Islamabad) or ssgc.com.pk (for Sindh/Balochistan).',
  },
  {
    question: 'What documents are required if SNGPL or SSGC opens new applications in my area?',
    answer:
      'Standard requirements include applicant CNIC copy, proof of property ownership (Registry or Fard), gas NOC from property owner (if renting), neighbor’s gas bill copy (for main line reference), and a house gas piping safety certificate from a certified contractor.',
  },
  {
    question: 'Should I pay private contractors claiming they can install a new Sui gas meter?',
    answer:
      'NO. SNGPL and SSGC explicitly warn citizens against paying private contractors or middlemen. Neither company uses third-party agents. Applications and Demand Notice payments must occur exclusively through official company portals or zonal offices.',
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
          name: 'New Gas Connection Policy Guide 2026',
          item: 'https://www.pakistaninfohub.com/bills/new-gas-connection-application-guide-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'New Gas Connection Policy 2026: SNGPL & SSGC Status & Restrictions',
      description:
        'Official 2026 policy breakdown explaining the ongoing natural gas connection moratorium across SNGPL and SSGC, RLNG options, application tracking, and consumer advice.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-29',
      dateModified: '2026-09-29',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/bills/new-gas-connection-application-guide-2026',
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

export default function NewGasConnectionPage() {
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
              { nameEn: 'New Gas Connection Policy Guide 2026', nameUr: 'نیا گیس میٹر کنکشن پالیسی 2026' },
            ]}
          />

          {/* Page Header */}
          <div className="mt-4 mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <VerifiedBadge textEn="SNGPL & SSGC Official Policy 2026" textUr="سوئی ناردرن و سوئی سدرن گیس پالیسی" />
              <InteractiveToolBadge labelEn="Energy Moratorium Advisory" labelUr="انرجی پالیسی رہنمائی" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              New Gas Connection Policy &amp; Status Guide 2026
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              Transparent public guide on new domestic gas connection availability across <strong>SNGPL</strong> (Punjab, KPK, Islamabad) and <strong>SSGC</strong> (Sindh, Balochistan): Moratorium status, RLNG rules, application tracking, and scam warnings.
            </p>
          </div>

          {/* Direct Answer Box */}
          <DirectAnswerBox
            topicTitleEn="New Gas Connection Policy Status 2026"
            topicTitleUr="نیا گیس میٹر کنکشن کی موجودہ صورتحال 2026"
            answerEn="New domestic natural gas connections in Pakistan remain broadly suspended across SNGPL and SSGC due to energy supply shortages and gas depletion. Demand notice issuance for standard system gas is frozen in most residential areas. Where conditionally opened, connections are restricted to higher RLNG tariffs."
            answerUr="پاکستان میں قدرتی گیس کی شارٹیج کی وجہ سے سوئی ناردرن (SNGPL) اور سوئی سدرن (SSGC) کی جانب سے نئے گھریلو گیس کنکشن پر پابندی اور تعطل برقرار ہے۔ بعض مخصوص علاقوں میں جہاں کنکشن کی اجازت ہے، وہ صرف مہنگے آر ایل این جی (RLNG) ٹیرف کے تحت دیے جا رہے ہیں۔"
          />

          {/* Policy Moratorium Alert Banner */}
          <div className="my-8 bg-gradient-to-r from-amber-950/90 via-slate-900 to-slate-950 border-2 border-amber-500/40 rounded-3xl p-6 shadow-2xl text-amber-100">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-500/20 text-amber-400 rounded-2xl shrink-0 mt-1">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300">
                  <span>Current Policy Advisory 2026</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  Ongoing Moratorium on Domestic Natural Gas Meters
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Due to rapid depletion of indigenous gas reserves and high international RLNG import costs, the Ministry of Energy maintains a <strong>strict restriction on new domestic natural gas connections</strong>.
                </p>
                <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
                  Citizens planning new home construction or tenancy are advised <strong>not to rely solely on Sui gas availability</strong>. Many households are transitioning to LPG cylinders, induction cooktops, or solar water heaters.
                </p>
              </div>
            </div>
          </div>

          {/* Scam Warning Box */}
          <div className="my-8 bg-rose-950/40 border-2 border-rose-600/40 rounded-3xl p-6 shadow-xl text-rose-100">
            <div className="flex items-start gap-4">
              <ShieldAlert className="w-6 h-6 text-rose-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Scam Warning: Beware of Fake Gas Meter Agents
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                  SNGPL and SSGC explicitly warn consumers that private agents and contractors claiming they can &quot;arrange a new meter from back-door channels&quot; are committing fraud. Neither company engages third-party contractors for application processing.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.sngpl.com.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl font-bold text-xs transition inline-flex items-center gap-1.5"
                  >
                    <span>Check SNGPL Portal (sngpl.com.pk)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.ssgc.com.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-bold text-xs border border-slate-700 transition inline-flex items-center gap-1.5"
                  >
                    <span>Check SSGC Portal (ssgc.com.pk)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Ad Placement */}
          <div className="my-8">
            <AdPlacementZone slotId="new-gas-connection-top" />
          </div>

          {/* Detailed Content Sections */}
          <div className="mt-10 space-y-10">
            {/* System Gas vs RLNG Tariff Rules */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    System Gas vs RLNG Tariff Policy Explained
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    How gas allocation rules apply when connection windows open.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-600 dark:text-amber-400 font-bold text-[11px]">
                    System Gas (Suspended)
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mt-2 mb-1">
                    Indigenous Natural Gas
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Low-cost domestic gas extracted from local fields. Issuance of new Demand Notices under this category has been frozen to preserve supply for existing consumers.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-[11px]">
                    RLNG Tariff (Conditional)
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mt-2 mb-1">
                    Imported Liquefied Natural Gas
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    When the government allows new connections in approved housing societies, they are billed under imported RLNG rates (full cost recovery tariff without subsidy).
                  </p>
                </div>
              </div>
            </section>

            {/* Tracking Existing Pending Applications */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl">
                  <Search className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Tracking Previously Submitted Applications
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    If you registered an application prior to the moratorium:
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                    SNGPL Application Tracking (Punjab, KPK, Islamabad)
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    Visit <strong>sngpl.com.pk</strong>, navigate to Customer Services &gt; Online Tracking, and enter your 10-digit application reference number or CNIC.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                    SSGC Application Tracking (Sindh &amp; Balochistan)
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    Visit <strong>ssgc.com.pk</strong>, go to Customer Web Portal &gt; New Connection Status, and enter your registration number to check seniorities.
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

            {/* Cross-Link Card for Electricity & Bill Checkers */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-semibold">
                  <Flame className="w-4 h-4" />
                  <span>Utility Connection Services</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold">
                  Need a New Electricity Meter Instead?
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
                  While new gas connections are restricted, new electricity connections can be registered online through the central ENC portal. Read our step-by-step electricity guide.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/bills/new-electricity-connection-application-guide-2026"
                  className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm rounded-xl transition shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                >
                  <span>New Electricity Guide</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/bills/fesco-bill-check-online-duplicate-2026"
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm rounded-xl border border-slate-700 transition flex items-center justify-center gap-2"
                >
                  <span>Duplicate Bill Tools</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
