import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  Activity,
  Hospital,
  HeartPulse,
  Smartphone,
  PhoneCall,
  RotateCcw,
  Check,
  X,
  FileCheck
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sehat Card Active Status by Province 2026 – Punjab, KP, Islamabad, AJK & GB | Pakistan Info Hub',
  description:
    'Current 2026 Sehat Card active status across Pakistan: Federal restoration for Islamabad (ICT), AJK & Gilgit-Baltistan, KP Sehat Card Plus universal coverage, Punjab private panel rules, Balochistan Health Card, and 8500/9780 SMS check methods.',
  keywords: [
    'Sehat Card active status by province 2026',
    'Islamabad Sehat Card restoration 2026',
    'KP Sehat Card Plus 10 lakh limit',
    'Punjab Sehat Card hospital list 2026',
    'AJK Gilgit Baltistan Sehat Sahulat active',
    'check Sehat Card status by CNIC 8500',
    'secondary vs tertiary care Sehat Card limit',
  ],
  openGraph: {
    title: 'Sehat Card Active Status by Province 2026 – Complete Regional Breakdown',
    description:
      'Verified guide to Sehat Sahulat coverage across Punjab, KP, Islamabad, AJK, GB, Balochistan, and Sindh with annual renewal and hospital guidelines.',
    url: 'https://www.pakistaninfohub.com/health/sehat-card-active-status-by-province-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/health/sehat-card-active-status-by-province-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Health & Sehat Card', item: 'https://www.pakistaninfohub.com/health' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Sehat Card Province Status 2026',
          item: 'https://www.pakistaninfohub.com/health/sehat-card-active-status-by-province-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Sehat Card Active Status by Province 2026: Regional Coverage, ICT/AJK Restoration & 8500 Verification Guide',
      description:
        'A comprehensive public health reference outlining current operational status, treatment limits, annual balance renewals, and panel hospital access across all Pakistani administrative regions.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-20',
      dateModified: '2026-08-21',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/health/sehat-card-active-status-by-province-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the Sehat Card currently working in Islamabad (ICT), AJK, and Gilgit-Baltistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Following a temporary suspension in 2024 caused by settlement dues, the Federal Government restored and relaunched the Sehat Sahulat Program for Islamabad Capital Territory, Azad Jammu & Kashmir, and Gilgit-Baltistan. Eligible permanent residents can access free inpatient treatment at 42+ designated public and private panel hospitals.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between Secondary Care and Tertiary Care on the Sehat Card?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Secondary Care covers general inpatient hospitalizations, standard maternity/delivery, minor surgeries, fractures, and emergency admissions (typically up to PKR 60,000 to 100,000 per family per year). Tertiary (Priority) Care covers complex, life-threatening interventions including cardiac surgeries/stents, chemotherapy, neurosurgery, kidney dialysis, and trauma management (up to PKR 1,000,000 per family per year).',
          },
        },
        {
          '@type': 'Question',
          name: 'When does the Sehat Card annual treatment balance reset?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under government insurance agreements with State Life Insurance Corporation (SLIC), household coverage balances automatically renew every fiscal year on July 1.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I check if my CNIC has active Sehat Card coverage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For Punjab, Islamabad (ICT), AJK, Gilgit-Baltistan, and Balochistan: SMS your 13-digit CNIC number (without dashes) to 8500. For Khyber Pakhtunkhwa residents under Sehat Card Plus: SMS your CNIC to 9780. You can also verify live coverage directly at the Sehat Sahulat reception desk in any empaneled hospital.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Sindh have a universal Sehat Card program?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sindh does not participate in the federal universal Sehat Sahulat Program. Instead, Sindh provides fully subsidized specialized care directly through its autonomous public hospital networks such as the National Institute of Cardiovascular Diseases (NICVD), Sindh Institute of Urology and Transplantation (SIUT), and Cyberknife JPMC.',
          },
        },
      ],
    },
  ],
};

export default function SehatCardActiveStatusPage() {
  const breadcrumbs = [
    { nameEn: 'Health & Sehat Card', nameUr: 'صحت سہولت و ہسپتال' },
    { nameEn: 'Sehat Card Province Status 2026', nameUr: 'صحت کارڈ صوبائی سٹیٹس و بحالی 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="PROVINCIAL HEALTH STATUS" labelUr="صوبائی ہیلتھ سٹیٹس" variant="seal" />
            <VerifiedBadge textEn="STATE LIFE & NHSR&C COMPLIANT" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Sehat Card Active Status by Province: Coverage &amp; Restoration 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              صحت کارڈ صوبائی سٹیٹس 2026: اسلام آباد، کے پی، پنجاب اور آزاد کشمیر میں بحالی
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Following past administrative suspensions and funding reallocations, understand the exact current operational
            status of the Sehat Sahulat Program across all Pakistani provinces, secondary vs. tertiary care limits, and how
            to check your active status.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="Which Regions Currently Have Active Sehat Card Coverage?"
          topicTitleUr="کن علاقوں میں اس وقت صحت کارڈ فعال ہے؟"
          answerEn="Sehat Card coverage is currently ACTIVE across Khyber Pakhtunkhwa (Sehat Card Plus, universal public/private), Islamabad (ICT), Azad Jammu & Kashmir, Gilgit-Baltistan (federally restored at 42+ hospitals), Punjab (empaneled private & tertiary networks), and Balochistan (Health Card / State Life)."
          answerUr="اس وقت صحت کارڈ خیبر پختونخوا (صحت کارڈ پلس، یونیورسل)، اسلام آباد (وفاقی بحالی)، آزاد کشمیر، گلگت بلتستان، پنجاب (پینل پرائیویٹ ہسپتال) اور بلوچستان میں فعال ہے۔ سندھ میں وفاقی پروگرام کی بجائے خود مختار صوبائی ہسپتالوں (NICVD/SIUT) کے ذریعے مفت علاج فراہم کیا جاتا ہے۔"
        />

        {/* Section 1: Province-by-Province Coverage Breakdown Table */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Hospital className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Province-by-Province Sehat Card Operational Status
            </h2>
          </div>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Province / Region</th>
                  <th className="px-4 py-3 text-left">Current Status</th>
                  <th className="px-4 py-3 text-left">Annual Limit</th>
                  <th className="px-4 py-3 text-left">Hospital Network</th>
                  <th className="px-4 py-3 text-left">SMS Verification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Khyber Pakhtunkhwa (KP)
                  </td>
                  <td className="px-4 py-3 text-xs">
                    <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                      <Check className="w-3.5 h-3.5" /> 100% Universal Active
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    PKR 1,000,000 / family
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    All public MTI hospitals &amp; designated private panel
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-doc-seal">
                    CNIC to 9780
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Islamabad Capital (ICT)
                  </td>
                  <td className="px-4 py-3 text-xs">
                    <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                      <Check className="w-3.5 h-3.5" /> Restored &amp; Active
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    PKR 1,000,000 / family
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    42+ public &amp; private hospitals in Islamabad/Rawalpindi
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-doc-seal">
                    CNIC to 8500
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Azad Jammu &amp; Kashmir (AJK)
                  </td>
                  <td className="px-4 py-3 text-xs">
                    <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                      <Check className="w-3.5 h-3.5" /> Restored &amp; Active
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    PKR 1,000,000 / family
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    District headquarters &amp; empanelled national centers
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-doc-seal">
                    CNIC to 8500
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Gilgit-Baltistan (GB)
                  </td>
                  <td className="px-4 py-3 text-xs">
                    <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                      <Check className="w-3.5 h-3.5" /> Restored &amp; Active
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    PKR 1,000,000 / family
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Regional DHQs &amp; empanelled tertiary hospitals
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-doc-seal">
                    CNIC to 8500
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Punjab
                  </td>
                  <td className="px-4 py-3 text-xs">
                    <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                      <Check className="w-3.5 h-3.5" /> Active (Private Panel)
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    PKR 1,000,000 / family
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Authorized private hospitals &amp; specialized units
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-doc-seal">
                    CNIC to 8500
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Balochistan
                  </td>
                  <td className="px-4 py-3 text-xs">
                    <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                      <Check className="w-3.5 h-3.5" /> Active (Health Card)
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    PKR 1,000,000 / family
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    1,000+ national public &amp; private panel hospitals
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-doc-seal">
                    CNIC to 8500
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Sindh
                  </td>
                  <td className="px-4 py-3 text-xs">
                    <span className="inline-flex items-center gap-1 font-bold text-amber-600 dark:text-amber-400">
                      Autonomous Model
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-500">
                    100% Free Specialized Care
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    NICVD, SIUT, JPMC, Gambat Liver Institute
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-500">
                    Hospital Direct
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>

        {/* Section 2: Secondary Care vs Tertiary Care Limits */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Understanding Your Coverage: Secondary vs. Priority Tertiary Care
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-seal text-sm block">1. Secondary Care (Basic Inpatient)</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Covers standard hospitalizations including normal/cesarean delivery maternity care, general surgeries (appendectomy, hernia, gallbladder), fractures, and acute infectious disease management.
              </p>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 font-mono text-doc-ink dark:text-white">
                Standard Annual Limit: Up to PKR 60,000 – 100,000 / family
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm block">2. Priority / Tertiary Care (Major Diseases)</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Covers life-saving complex procedures: open-heart surgery, coronary angioplasty (stents), chemotherapy &amp; radiation, kidney dialysis, neurosurgery, accidental trauma, and chronic organ failure.
              </p>
              <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 font-mono text-emerald-700 dark:text-emerald-300 font-bold">
                Priority Annual Limit: Up to PKR 1,000,000 / family
              </div>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 3: Step-by-Step Status Verification */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              How to Check Your Card Status Before Visiting a Hospital
            </h2>
          </div>

          <div className="space-y-3 font-sans text-xs">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  Send Your 13-Digit CNIC via SMS
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Type your 13-digit CNIC number without any spaces or hyphens. Send to <strong>8500</strong> (for Punjab, ICT, AJK, GB, Balochistan) or <strong>9780</strong> (for KP). You will receive an immediate automated confirmation of your eligibility.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  Check the Official Panel Hospital Directory
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Always confirm that your intended hospital is actively empaneled for your specific treatment. Visit <code>sehatsahulat.com.pk</code> or call the official 24/7 toll-free helpline at <strong>0800-09009</strong>.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  Present Original CNIC at Hospital Sehat Desk
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  There is no physical plastic card. Present the patient&apos;s original CNIC (or B-Form for minors) at the hospital&apos;s dedicated Sehat Sahulat facilitation counter for biometric admission.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Health &amp; Welfare Verification Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/welfare/sehat-card-eligibility-checker-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Interactive Tool</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Sehat Card Eligibility Checker →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check family qualification criteria &amp; limits.</p>
            </Link>

            <Link
              href="/welfare/pmt-score-explained-bisp-eligibility-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Welfare Scoring</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                BISP PMT Score Explained →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Understand the NSER poverty ranking formula.</p>
            </Link>

            <Link
              href="/health/sehat-card-hospital-list-near-me"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Hospital Search</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Panel Hospital Directory →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Find empaneled hospitals across major cities.</p>
            </Link>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Sehat Card Provincial Status)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Is the Sehat Card currently working in Islamabad (ICT), AJK, and Gilgit-Baltistan?',
                a: 'Yes. Following a temporary suspension in 2024 caused by settlement dues, the Federal Government restored and relaunched the Sehat Sahulat Program for Islamabad Capital Territory, Azad Jammu & Kashmir, and Gilgit-Baltistan. Eligible permanent residents can access free inpatient treatment at 42+ designated public and private panel hospitals.',
              },
              {
                q: 'What is the difference between Secondary Care and Tertiary Care on the Sehat Card?',
                a: 'Secondary Care covers general inpatient hospitalizations, standard maternity/delivery, minor surgeries, fractures, and emergency admissions (typically up to PKR 60,000 to 100,000 per family per year). Tertiary (Priority) Care covers complex, life-threatening interventions including cardiac surgeries/stents, chemotherapy, neurosurgery, kidney dialysis, and trauma management (up to PKR 1,000,000 per family per year).',
              },
              {
                q: 'When does the Sehat Card annual treatment balance reset?',
                a: 'Under government insurance agreements with State Life Insurance Corporation (SLIC), household coverage balances automatically renew every fiscal year on July 1.',
              },
              {
                q: 'How do I check if my CNIC has active Sehat Card coverage?',
                a: 'For Punjab, Islamabad (ICT), AJK, Gilgit-Baltistan, and Balochistan: SMS your 13-digit CNIC number (without dashes) to 8500. For Khyber Pakhtunkhwa residents under Sehat Card Plus: SMS your CNIC to 9780. You can also verify live coverage directly at the Sehat Sahulat reception desk in any empaneled hospital.',
              },
              {
                q: 'Does Sindh have a universal Sehat Card program?',
                a: 'Sindh does not participate in the federal universal Sehat Sahulat Program. Instead, Sindh provides fully subsidized specialized care directly through its autonomous public hospital networks such as the National Institute of Cardiovascular Diseases (NICVD), Sindh Institute of Urology and Transplantation (SIUT), and Cyberknife JPMC.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">{faq.q}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Sehat Sahulat Program Official Portal (Federal)', url: 'https://sehatsahulat.com.pk/' },
            { label: 'State Life Insurance Corporation Health Division', url: 'https://statelife.com.pk/' },
            { label: 'Ministry of National Health Services, Regulations & Coordination', url: 'https://nhsrc.gov.pk/' },
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
