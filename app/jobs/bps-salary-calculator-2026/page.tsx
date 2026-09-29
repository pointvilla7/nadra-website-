import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  HelpCircle,
  ExternalLink,
  Calculator,
  Briefcase,
  Building,
  FileText,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Coins,
  ChevronRight,
  MapPin,
  Scale,
  Award,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BPS Salary Calculator 2026 Pakistan: Revised Basic Pay Scales | Pakistan Info Hub',
  description:
    'Calculate your government employee salary online under Federal Revised Basic Pay Scales 2026 (RBPS-2026). Includes BPS-1 to BPS-22 basic pay, 7% Ad-hoc Relief 2026, frozen house rent, 50% revised conveyance allowance, and FBR income tax estimates.',
  keywords: [
    'bps salary calculator 2026 pakistan',
    'revised basic pay scales 2026 chart',
    'bps 17 salary in pakistan 2026',
    'finance division pay scale notification 2026',
    'adhoc relief allowance 2026 7 percent',
    'bps 16 gross salary calculator',
    'bps pay scale chart 1 to 22',
    'government employee salary slip calculation',
    'bps 20 salary allowance breakdown',
  ],
  openGraph: {
    title: 'BPS Salary Calculator 2026 Pakistan (RBPS-2026 Revised Scales)',
    description:
      'Real-time basic pay scale calculator for Pakistani civil servants (BPS 1 to 22) based on Finance Division Office Memorandum F.1(2)IMP/2026.',
    url: 'https://www.pakistaninfohub.com/jobs/bps-salary-calculator-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/jobs/bps-salary-calculator-2026' },
};

const BpsSalaryCalculator = dynamic(
  () => import('@/components/BpsSalaryCalculator').then((m) => ({ default: m.BpsSalaryCalculator })),
  { ssr: false, loading: () => <div className="h-[600px] rounded-3xl bg-slate-900 animate-pulse border border-slate-800" /> }
);

const FAQS_LIST = [
  {
    question: 'What is BPS-17 starting basic pay in 2026?',
    answer:
      'Under the Revised Basic Pay Scales 2026 (RBPS-2026), BPS-17 starting minimum basic pay is PKR 54,140 per month (up from PKR 45,070 under BPS-2022), with an annual increment of PKR 4,110 and a maximum basic scale of PKR 136,340.',
  },
  {
    question: 'How was the new RBPS-2026 pay scale created?',
    answer:
      'The Finance Division (Office Memorandum F.1(2)IMP/2026 dated 21 July 2026) merged the 15% Ad-hoc Relief Allowance 2022 and the 10% Ad-hoc Relief Allowance 2025 directly into running basic pay to form the new RBPS-2026 structure.',
  },
  {
    question: 'What is the Ad-hoc Relief Allowance 2026 and does it count for pension?',
    answer:
      'The Ad-hoc Relief Allowance 2026 is set at 7% of running basic pay under RBPS-2026. It is subject to FBR income tax and payable during leave/LPR, but does NOT count towards pension, gratuity, or House Rent Allowance calculations.',
  },
  {
    question: 'How is House Rent Allowance (HRA) calculated under the 2026 revision?',
    answer:
      'House Rent Allowance was frozen at its June 30, 2026 pre-revision level. It is calculated as 45% of pre-revision basic pay for specified Category A/B cities (Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, Quetta, Hyderabad, Faisalabad, Multan, Gujranwala, Sialkot) and 30% for other stations.',
  },
  {
    question: 'Does this calculator apply to provincial civil servants in Punjab, Sindh, KPK, and Balochistan?',
    answer:
      'Yes. Provincial finance departments issue matching notifications adopting the federal RBPS-2026 pay scale framework. You can select between Federal and Provincial scope in our calculator above for complete clarity.',
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
          name: 'Jobs & Employment',
          item: 'https://www.pakistaninfohub.com/jobs',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'BPS Salary Calculator 2026',
          item: 'https://www.pakistaninfohub.com/jobs/bps-salary-calculator-2026',
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Pakistan BPS Salary Calculator 2026',
      description:
        'Interactive financial utility for calculating government civil servant monthly pay breakdowns across BPS-1 to BPS-22 under Federal RBPS-2026.',
      url: 'https://www.pakistaninfohub.com/jobs/bps-salary-calculator-2026',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
    },
    {
      '@type': 'Article',
      headline: 'BPS Salary Calculator 2026 Pakistan: Revised Basic Pay Scales & Allowances',
      description:
        'Complete guide to Pakistan civil service salary structure in 2026, explaining RBPS-2026 allowance mergers, 7% ARA 2026, frozen house rent, 50% conveyance revision, and DDO fixation rules.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-29',
      dateModified: '2026-09-29',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/jobs/bps-salary-calculator-2026',
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

export default function BpsSalaryPage() {
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
              { nameEn: 'Jobs & Employment', nameUr: 'نوکریاں و روزگار', url: '/jobs' },
              { nameEn: 'BPS Salary Calculator 2026', nameUr: 'بی پی ایس تنخواہ کیلکولیٹر 2026' },
            ]}
          />

          {/* Page Header */}
          <div className="mt-4 mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <VerifiedBadge textEn="Finance Division OM F.1(2)IMP/2026 Verified" textUr="وزارتِ خزانہ 2026 پے اسکیل الائنڈ" />
              <InteractiveToolBadge labelEn="BPS-1 to BPS-22 Calculator" labelUr="بی پی ایس 1 تا 22 پے کیلکولیٹر" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              BPS Salary Calculator 2026 Pakistan
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              Calculate your exact monthly basic pay, ad-hoc relief allowances, house rent, conveyance, medical allowance, FBR income tax, and net take-home salary for Federal and Provincial Government civil servants (BPS 1 to 22).
            </p>
          </div>

          {/* Direct Answer Box */}
          <DirectAnswerBox
            topicTitleEn="BPS Salary Structure 2026 in Pakistan"
            topicTitleUr="پاکستان میں سرکاری ملازمین کا نیا پے اسکیل 2026"
            answerEn="Government pay scales were revised effective July 1, 2026 (Finance Division OM F.1(2)IMP/2026 dated July 21, 2026). Old ad-hoc allowances (15% from 2022 & 10% from 2025) were merged into basic pay (RBPS-2026), and a new 7% Ad-hoc Relief 2026 was added. House rent remains frozen, while conveyance allowance increased 50%."
            answerUr="پاکستان میں 1 جولائی 2026 سے پے اسکیلز کو ریواز کر کے RBPS-2026 نافذ کیا گیا ہے۔ پرانے ایڈہاک الاؤنسز بنیادی تنخواہ میں ضم کر دیے گئے ہیں اور 7 فیصد نیا ایڈہاک الاؤنس 2026 دیا گیا ہے۔ مکان کا کرایہ منجمند جبکہ سواری الاؤنس میں 50 فیصد اضافہ ہوا ہے۔"
          />

          {/* Main Interactive Tool Component */}
          <BpsSalaryCalculator />

          {/* Ad Zone */}
          <div className="my-8">
            <AdPlacementZone slotId="bps-salary-calculator-top" />
          </div>

          {/* Educational Content & Analysis Sections */}
          <div className="mt-12 space-y-10">
            {/* Section 1: RBPS-2026 Pay Scale Overhaul */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                  <Scale className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  The Revised Basic Pay Scales 2026 (RBPS-2026) Overhaul
                </h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                On <strong>July 21, 2026</strong>, the Finance Division of Pakistan promulgated Office Memorandum <code>No. F.1(2)IMP/2026</code>, formally revising the basic pay scales and allowances for civil servants of the Federal Government with retrospective effect from <strong>July 1, 2026</strong>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">1. Permanent Allowance Merger</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Ad-hoc Relief Allowance 2022 (15%) and Ad-hoc Relief Allowance 2025 (10%) were absorbed directly into basic pay.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">2. New 7% ARA 2026</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    A fresh 7% Ad-hoc Relief Allowance 2026 was introduced on running basic pay under RBPS-2026.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">3. 50% Conveyance Revision</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Conveyance Allowance was increased by 50% for all eligible employees across BPS-1 to BPS-19.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Important Nuances for ARA 2026 & Pensions */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-2xl">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Key Rules: Taxability, Pension Exclusion &amp; Frozen House Rent
                </h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                When analyzing your monthly payslip or planning long-term retirement benefits, civil servants must take note of three critical operational guidelines:
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>ARA 2026 Taxability:</strong> The 7% Ad-hoc Relief Allowance 2026 is fully subject to FBR Income Tax. It is included in your total annual taxable income when determining your income tax slab.
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Pension Exclusion:</strong> The 7% ARA 2026 will <em>not</em> form part of basic pay for the calculation of pension, gratuity, or retirement benefits. Only your running basic pay under RBPS-2026 qualifies for pension calculations.
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Frozen House Rent Allowance:</strong> House Rent Allowance (HRA) is frozen at the amount admissible as of June 30, 2026. It is <em>not</em> automatically recalculated as 45% of the new RBPS-2026 basic pay.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Federal vs Provincial Pay Scale Adoption */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl">
                  <Building className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Federal vs Provincial Government Implementation Status
                </h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                The Office Memorandum issued on 21 July 2026 directly governs all Federal Government ministries, divisions, attached departments, armed forces civil personnel, and federal autonomous bodies.
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                For provincial civil servants in <strong>Punjab, Sindh, Khyber Pakhtunkhwa, and Balochistan</strong>, implementation occurs following matching notifications issued by respective provincial finance departments. Historically, provincial governments mirror federal pay scale charts and allowance mergers.
              </p>
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

            {/* Cross-Link Card to Income Tax Calculator & Jobs Portal */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-semibold">
                  <Coins className="w-4 h-4" />
                  <span>Salary Tax &amp; Job Utilities</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold">
                  Calculate FBR Salaried Income Tax Slabs 2026
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
                  Calculate exact FBR monthly withholding income tax for salaried government and private sector employees in Pakistan with our interactive tax slab tool.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/tax/income-tax-calculator-salaried-2026"
                  className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm rounded-xl transition shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                >
                  <span>Salary Tax Tool</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/jobs/verified-govt-jobs-sources-avoid-scams-2026"
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm rounded-xl border border-slate-700 transition flex items-center justify-center gap-2"
                >
                  <span>Govt Jobs Guide</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
