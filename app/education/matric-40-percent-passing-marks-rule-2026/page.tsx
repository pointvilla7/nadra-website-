import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  HelpCircle,
  ExternalLink,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  BookOpen,
  Award,
  Layers,
  FileText,
  Calendar,
  Sparkles,
  School
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Matric & Inter 40% Passing Marks Rule 2026 – IBCC Grading Policy & Phasing | Pakistan Info Hub',
  description:
    'Complete guide to IBCC new grading policy 2026: 40% passing marks rule implementation, 10-point grading scale (A++ to U), phase-wise rollout (9th/11th in 2026 vs 10th/12th in 2027), and provincial BISE board details.',
  keywords: [
    'IBCC 40 percent passing marks rule 2026',
    'matric passing marks 33 to 40 percent',
    'FBISE 9th class 40 percent rule 2026',
    '10th class passing marks 2026 33 percent',
    'IBCC new grading policy 10 point scale',
    'intermediate passing marks FSc 2026',
    'BISE Lahore Rawalpindi Karachi passing criteria',
  ],
  openGraph: {
    title: 'Matric & Inter 40% Passing Marks Rule 2026 – IBCC Grading Policy',
    description:
      'Verified guide on Pakistan education boards new 40% passing criteria: Which grades are affected in 2026, 10th class exemption, and the new 10-point grading formula.',
    url: 'https://www.pakistaninfohub.com/education/matric-40-percent-passing-marks-rule-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/education/matric-40-percent-passing-marks-rule-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Education & Results', item: 'https://www.pakistaninfohub.com/education' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Matric 40% Passing Marks Rule 2026',
          item: 'https://www.pakistaninfohub.com/education/matric-40-percent-passing-marks-rule-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Matric & Intermediate 40% Passing Marks Rule 2026: IBCC Grading Policy & Student Phasing Guide',
      description:
        'A comprehensive public reference explaining the Inter Board Coordination Commission (IBCC) 40% passing marks policy, phase-wise implementation across 9th, 10th, 11th, and 12th grades, and the new 10-point grading system.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-20',
      dateModified: '2026-08-21',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/education/matric-40-percent-passing-marks-rule-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does the 40% passing marks rule apply to 10th class (Matric) students in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Students appearing for the SSC Part-II (10th Class) First Annual Examination in 2026 are NOT affected by the 40% rule. They remain under the old 33% passing requirement. The 40% passing rule applies to 10th class starting in 2027.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which students are affected by the 40% passing marks requirement in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The 40% passing marks rule is active in 2026 exclusively for: (1) 9th Class (SSC Part-I) students, and (2) 11th Class / 1st Year (HSSC Part-I) students appearing in their respective annual board exams.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was the GPA/CGPA grading system implemented alongside the 40% passing rule?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The originally proposed US-style GPA/CGPA formula was dropped by the IBCC following extensive stakeholder reviews. Instead, educational boards adopted a streamlined 10-point alphabetical grading scale (A++, A+, A, B++, B+, B, C+, C, D, and U for Ungraded/Fail) while retaining traditional percentage mark sheets.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if a student scores below 40% in a subject under the new policy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under the new 10-point scale, any subject score below 40% is classified as "U" (Ungraded). The student will be required to reappear in the supplementary examination for that specific subject to achieve passing status.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does this rule apply uniformly across all Pakistani education boards?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The policy was established by the Inter Board Coordination Commission (IBCC) and applies across the Federal Board (FBISE) as well as all provincial boards of intermediate and secondary education (BISEs) in Punjab, Sindh, Khyber Pakhtunkhwa, Balochistan, and Azad Jammu & Kashmir.',
          },
        },
      ],
    },
  ],
};

export default function MatricPassingMarksRule2026Page() {
  const breadcrumbs = [
    { nameEn: 'Education & Results', nameUr: 'تعلیم و نتائج' },
    { nameEn: 'Matric 40% Passing Rule 2026', nameUr: 'میٹرک 40 فیصد پاسنگ مارکس پالیسی 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="ACADEMIC POLICY DIRECTIVE" labelUr="تعلیمی پالیسی نوٹیفکیشن" variant="gold" />
            <VerifiedBadge textEn="IBCC & FBISE NOTIFIED 2026" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Matric &amp; Inter 40% Passing Marks Rule 2026: IBCC Grading &amp; Phasing Guide
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              میٹرک و انٹر 40 فیصد پاسنگ مارکس پالیسی 2026: کون سے طلباء متاثر ہوں گے؟
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            The Inter Board Coordination Commission (IBCC) has officially raised the minimum passing marks for secondary
            and higher secondary examinations from 33% to 40%. Understand the exact phase-wise implementation schedule,
            which specific classes fall under the old vs new rules in 2026, and the official 10-point grading formula.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="Does the 40% Passing Rule Affect My 2026 Exam?"
          topicTitleUr="کیا 40 فیصد پاسنگ کا نیا قانون آپ کے 2026 کے امتحانات پر لاگو ہے؟"
          answerEn="In 2026, the 40% passing rule applies ONLY to 9th Class (SSC Part-I) and 11th Class (HSSC Part-I) examinations. Students appearing in 10th Class (Matric) and 12th Class (2nd Year) in 2026 remain protected under the old 33% passing rule. The 10th and 12th grades will transition to 40% in 2027."
          answerUr="2026 کے امتحانات میں 40 فیصد پاسنگ کا اصول صرف نویں (9th) اور گیارہویں (11th) جماعت پر لاگو ہے۔ دسویں (10th) اور بارہویں (12th) کے 2026 سالانہ امتحانات پرانا 33 فیصد پاسنگ اصول ہی برقرار رہے گا۔ دسویں اور بارہویں جماعت پر نیا اصول 2027 سے لاگو ہوگا۔"
        />

        {/* Section 1: Phased Implementation Matrix */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Grade-by-Grade Implementation Timeline (2026 vs 2027)
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 font-sans">
            To prevent unfair disruption for senior students halfway through their two-year cycle, the IBCC structured
            the transition in two strict phases:
          </p>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Class / Academic Tier</th>
                  <th className="px-4 py-3 text-left text-emerald-300">2026 Annual Exams</th>
                  <th className="px-4 py-3 text-left text-amber-300">2027 Annual Exams</th>
                  <th className="px-4 py-3 text-left text-slate-300">Status &amp; Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    9th Class (SSC Part-I)
                  </td>
                  <td className="px-4 py-3 font-mono font-bold text-rose-600 dark:text-rose-400 text-xs">
                    NEW RULE (40% Passing)
                  </td>
                  <td className="px-4 py-3 font-mono text-rose-600 dark:text-rose-400 text-xs">40% Passing</td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">Active starting First Annual 2026</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    10th Class (SSC Part-II / Matric)
                  </td>
                  <td className="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400 text-xs">
                    OLD RULE (33% Passing)
                  </td>
                  <td className="px-4 py-3 font-mono text-rose-600 dark:text-rose-400 text-xs">40% Passing</td>
                  <td className="px-4 py-3 text-xs text-emerald-700 dark:text-emerald-400 font-bold">
                    Protected under 33% for 2026
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    11th Class (HSSC Part-I / 1st Year)
                  </td>
                  <td className="px-4 py-3 font-mono font-bold text-rose-600 dark:text-rose-400 text-xs">
                    NEW RULE (40% Passing)
                  </td>
                  <td className="px-4 py-3 font-mono text-rose-600 dark:text-rose-400 text-xs">40% Passing</td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">Active starting First Annual 2026</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    12th Class (HSSC Part-II / 2nd Year)
                  </td>
                  <td className="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400 text-xs">
                    OLD RULE (33% Passing)
                  </td>
                  <td className="px-4 py-3 font-mono text-rose-600 dark:text-rose-400 text-xs">40% Passing</td>
                  <td className="px-4 py-3 text-xs text-emerald-700 dark:text-emerald-400 font-bold">
                    Protected under 33% for 2026
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>

        {/* Section 2: The New 10-Point Grading Scale Breakdown */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              The Official IBCC 10-Point Grading Formula
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 font-sans">
            The previous 7-grade system (A-1, A, B, C, D, E, F) has been replaced with a calibrated 10-point scale.
            Note that the originally proposed GPA system was <strong>dropped</strong>; boards now issue alphabetical grades
            alongside raw marks:
          </p>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Percentage Range</th>
                  <th className="px-4 py-3 text-left text-emerald-300">New Grade</th>
                  <th className="px-4 py-3 text-left text-slate-300">Descriptor / Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-2.5 font-mono text-xs text-slate-700 dark:text-slate-300">96% – 100%</td>
                  <td className="px-4 py-2.5 font-mono font-bold text-emerald-600 dark:text-emerald-400 text-xs">A++</td>
                  <td className="px-4 py-2.5 text-xs text-slate-600 dark:text-slate-300 font-semibold">Extraordinary</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-2.5 font-mono text-xs text-slate-700 dark:text-slate-300">91% – 95%</td>
                  <td className="px-4 py-2.5 font-mono font-bold text-emerald-600 dark:text-emerald-400 text-xs">A+</td>
                  <td className="px-4 py-2.5 text-xs text-slate-600 dark:text-slate-300 font-semibold">Exceptional</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-2.5 font-mono text-xs text-slate-700 dark:text-slate-300">86% – 90%</td>
                  <td className="px-4 py-2.5 font-mono font-bold text-emerald-600 dark:text-emerald-400 text-xs">A</td>
                  <td className="px-4 py-2.5 text-xs text-slate-600 dark:text-slate-300">Outstanding</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-2.5 font-mono text-xs text-slate-700 dark:text-slate-300">81% – 85%</td>
                  <td className="px-4 py-2.5 font-mono font-bold text-blue-600 dark:text-blue-400 text-xs">B++</td>
                  <td className="px-4 py-2.5 text-xs text-slate-600 dark:text-slate-300">Excellent</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-2.5 font-mono text-xs text-slate-700 dark:text-slate-300">76% – 80%</td>
                  <td className="px-4 py-2.5 font-mono font-bold text-blue-600 dark:text-blue-400 text-xs">B+</td>
                  <td className="px-4 py-2.5 text-xs text-slate-600 dark:text-slate-300">Very Good</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-2.5 font-mono text-xs text-slate-700 dark:text-slate-300">71% – 75%</td>
                  <td className="px-4 py-2.5 font-mono font-bold text-blue-600 dark:text-blue-400 text-xs">B</td>
                  <td className="px-4 py-2.5 text-xs text-slate-600 dark:text-slate-300">Good</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-2.5 font-mono text-xs text-slate-700 dark:text-slate-300">61% – 70%</td>
                  <td className="px-4 py-2.5 font-mono font-bold text-amber-600 dark:text-amber-400 text-xs">C+</td>
                  <td className="px-4 py-2.5 text-xs text-slate-600 dark:text-slate-300">Fairly Good</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-2.5 font-mono text-xs text-slate-700 dark:text-slate-300">51% – 60%</td>
                  <td className="px-4 py-2.5 font-mono font-bold text-amber-600 dark:text-amber-400 text-xs">C</td>
                  <td className="px-4 py-2.5 text-xs text-slate-600 dark:text-slate-300">Above Average</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-2.5 font-mono text-xs text-slate-700 dark:text-slate-300">40% – 50%</td>
                  <td className="px-4 py-2.5 font-mono font-bold text-slate-600 dark:text-slate-400 text-xs">D</td>
                  <td className="px-4 py-2.5 text-xs text-slate-600 dark:text-slate-300">Emerging / Passing Floor</td>
                </tr>
                <tr className="bg-red-50/60 dark:bg-red-950/30 hover:bg-red-50 dark:hover:bg-red-950/50 transition">
                  <td className="px-4 py-2.5 font-mono text-xs font-bold text-red-600 dark:text-red-400">Below 40%</td>
                  <td className="px-4 py-2.5 font-mono font-bold text-red-600 dark:text-red-400 text-xs">U</td>
                  <td className="px-4 py-2.5 text-xs text-red-600 dark:text-red-400 font-bold">Ungraded (Fail)</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 3: Why Was This Change Made? */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <School className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Why Did Pakistan Raise Passing Marks from 33% to 40%?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold uppercase font-mono text-[10px]">
                REASON 1 • INTERNATIONAL PARITY
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Global Academic Benchmarks
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The 33% passing threshold was established during the colonial era. Most international exam boards (Cambridge,
                IB, and regional boards) require minimum 40% to 50% for core concept mastery.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase font-mono text-[10px]">
                REASON 2 • ROOTING OUT ROTE LEARNING
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Conceptual Curriculum Focus
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                A 40% standard discourages selective syllabus preparation and forces students to engage with analytical
                and Student Learning Outcome (SLO) based questions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-purple-600 dark:text-purple-400 font-bold uppercase font-mono text-[10px]">
                REASON 3 • INTER-BOARD EQUIVALENCE
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Uniform Medical &amp; Engineering Entry
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Standardizing passing and grading formulas across all 29 BISE boards in Pakistan ensures fair MDCAT and ECAT
                admissions without provincial inflation bias.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Related Education Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Education &amp; Examination Verification Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/education/bise-result-checker-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Board Results</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                BISE Board Result Checker 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check 9th, 10th, 11th, and 12th class results by roll number.</p>
            </Link>

            <Link
              href="/jobs/roll-number-slip-checker-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Exam Slips</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Roll Number Slip Checker 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Download board and competitive exam roll number slips.</p>
            </Link>

            <Link
              href="/jobs/nts-result-scorecard-checker-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Test Scorecards</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NTS Result &amp; Scorecard Checker →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Verify NAT, GAT, and recruitment scorecard marks.</p>
            </Link>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (40% Passing Rule)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Does the 40% passing marks rule apply to 10th class (Matric) students in 2026?',
                a: 'No. Students appearing for the SSC Part-II (10th Class) First Annual Examination in 2026 are NOT affected by the 40% rule. They remain under the old 33% passing requirement. The 40% passing rule applies to 10th class starting in 2027.',
              },
              {
                q: 'Which students are affected by the 40% passing marks requirement in 2026?',
                a: 'The 40% passing marks rule is active in 2026 exclusively for: (1) 9th Class (SSC Part-I) students, and (2) 11th Class / 1st Year (HSSC Part-I) students appearing in their respective annual board exams.',
              },
              {
                q: 'Was the GPA/CGPA grading system implemented alongside the 40% passing rule?',
                a: 'No. The originally proposed US-style GPA/CGPA formula was dropped by the IBCC following extensive stakeholder reviews. Instead, educational boards adopted a streamlined 10-point alphabetical grading scale (A++, A+, A, B++, B+, B, C+, C, D, and U for Ungraded/Fail) while retaining traditional percentage mark sheets.',
              },
              {
                q: 'What happens if a student scores below 40% in a subject under the new policy?',
                a: 'Under the new 10-point scale, any subject score below 40% is classified as "U" (Ungraded). The student will be required to reappear in the supplementary examination for that specific subject to achieve passing status.',
              },
              {
                q: 'Does this rule apply uniformly across all Pakistani education boards?',
                a: 'Yes. The policy was established by the Inter Board Coordination Commission (IBCC) and applies across the Federal Board (FBISE) as well as all provincial boards of intermediate and secondary education (BISEs) in Punjab, Sindh, Khyber Pakhtunkhwa, Balochistan, and Azad Jammu & Kashmir.',
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
            { label: 'Inter Board Coordination Commission (IBCC) Official Portal', url: 'https://ibcc.edu.pk/' },
            { label: 'Federal Board of Intermediate and Secondary Education (FBISE)', url: 'https://www.fbise.edu.pk/' },
            { label: 'Ministry of Federal Education & Professional Training Pakistan', url: 'https://mofept.gov.pk/' },
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
