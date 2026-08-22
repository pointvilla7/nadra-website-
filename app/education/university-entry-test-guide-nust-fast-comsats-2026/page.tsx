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
  GraduationCap,
  BookOpen,
  Scale,
  Calendar,
  Layers,
  Award,
  Check,
  BarChart,
  School,
  AlertCircle,
  Compass
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'University Entry Test Guide 2026: NUST NET, FAST NU & COMSATS Comparison | Pakistan Info Hub',
  description:
    'Comprehensive evergreen structural guide to Pakistan’s top university entry tests: NUST NET (multiple series, best score rule), FAST-NUCES admission test (speed & negative marking), and COMSATS NTS-NAT. Compare test formats, weightings, SAT/ACT alternative streams, and multi-university preparation strategies.',
  keywords: [
    'university entry test guide Pakistan 2026',
    'NUST NET multiple series best score system',
    'FAST NUCES entry test pattern negative marking',
    'COMSATS NTS NAT test format aggregate formula',
    'NUST NET vs FAST vs COMSATS comparison table',
    'SAT ACT national seats admission NUST FAST',
    'engineering computing university admission guide Pakistan',
    'ugadmissions nust edu pk nu edu pk',
  ],
  openGraph: {
    title: 'University Entry Test Guide 2026: NUST NET, FAST NU & COMSATS Comparison',
    description:
      'Evergreen comparison of Pakistani university entrance exams: NUST NET series, FAST-NU computerized tests, COMSATS NTS-NAT, weightings, and preparation strategy.',
    url: 'https://www.pakistaninfohub.com/education/university-entry-test-guide-nust-fast-comsats-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/education/university-entry-test-guide-nust-fast-comsats-2026' },
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
          name: 'University Entry Test Guide 2026',
          item: 'https://www.pakistaninfohub.com/education/university-entry-test-guide-nust-fast-comsats-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Pakistan University Entry Test Guide 2026: NUST NET, FAST-NU & COMSATS Systems Compared',
      description:
        'An evergreen structural guide detailing how Pakistan’s top engineering and computing university entrance exams operate, multi-series scoring mechanics, negative marking differences, and SAT alternatives.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/education/university-entry-test-guide-nust-fast-comsats-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I use a single entry test score (such as NUST NET) to apply for FAST or COMSATS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Unlike medical college admissions which use a unified national MDCAT, engineering and computing institutions in Pakistan conduct independent entrance exams. NUST requires the NET, FAST conducts its own NU test (or accepts SAT), and COMSATS accepts the NTS-NAT. If you wish to apply to all three, you must sit for each university\'s designated test separately.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does NUST\'s multiple series system work and which score is used?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NUST conducts the NET in 4 sequential series (NET-1, NET-2, NET-3, NET-4) throughout the academic year. You can attempt one, two, three, or all four series. NUST\'s centralized admission portal automatically retains and counts your single HIGHEST score for the final composite merit calculation, giving applicants multiple chances to improve.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the FAST entrance test mandatory if I already have a competitive SAT score?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. FAST-NUCES offers an alternative admission track based on SAT scores for undergraduate programs. Applicants with qualifying SAT scores can apply directly under the SAT merit category and are exempted from sitting the physical NU entry test.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does NUST or FAST have negative marking in their entrance exams?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NUST NET has NO negative marking (you receive +1 for correct answers and 0 for blank/incorrect answers, making it advantageous to attempt all 200 questions). In contrast, FAST-NUCES entry tests frequently enforce negative marking (typically -0.25 for incorrect answers in math and physics sections), requiring high precision and selective answering.',
          },
        },
        {
          '@type': 'Question',
          name: 'What minimum intermediate (FSc / A-Level) percentage is required to sit these tests?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most top institutions (including NUST and FAST) mandate a minimum of 60% aggregate marks in HSSC / FSc Part-1 or equivalent IBCC equivalence (O/A-Levels). For COMSATS, minimum eligibility is generally 50% for standard undergraduate computing/engineering disciplines.',
          },
        },
      ],
    },
  ],
};

export default function UniversityEntryTestGuidePage() {
  const breadcrumbs = [
    { nameEn: 'Education & Results', nameUr: 'تعلیم اور امتحانات' },
    { nameEn: 'University Entry Test Guide', nameUr: 'یونیورسٹی انٹری ٹیسٹ گائیڈ 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="EVERGREEN ADMISSIONS GUIDE" labelUr="ایڈمیشن ٹیسٹ اسٹرکچر" variant="seal" />
            <VerifiedBadge textEn="NUST, FAST & COMSATS FRAMEWORK" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Pakistan University Entry Test Guide 2026: NUST NET, FAST &amp; COMSATS Compared
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              یونیورسٹی انٹری ٹیسٹ گائیڈ: نسٹ (NET)، فاسٹ اور کامسیٹس ٹیسٹ پیٹرن اور تیاری کی حکمت عملی
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            An evergreen structural guide explaining how Pakistan&apos;s leading engineering and computing universities manage
            their entrance exams. Understand why there is no single shared national test, how NUST&apos;s multi-series &quot;best score&quot;
            rule works, FAST&apos;s negative marking mechanics, and how to balance overlapping application windows.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="Is There a Single Shared Entry Test for Pakistani Engineering & Computing Universities?"
          topicTitleUr="کیا پاکستان کی تمام انجینئرنگ و آئی ٹی یونیورسٹیوں کا ایک ہی انٹری ٹیسٹ ہوتا ہے؟"
          answerEn="No. Unlike medical colleges which share a single national MDCAT, engineering and computing universities (NUST, FAST-NUCES, COMSATS, GIKI, PIEAS) run completely independent entry test systems. NUST requires its own NET (best score across 4 series), FAST conducts the NU Test, and COMSATS accepts NTS-NAT. You must register and prepare for each test separately."
          answerUr="نہیں! میڈیکل کے MDCAT کے برعکس، انجینئرنگ اور کمپیوٹر سائنس کی تمام بڑی یونیورسٹیاں اپنے الگ انٹری ٹیسٹ لیتی ہیں۔ نسٹ اپنا NET ٹیسٹ لیتی ہے، فاسٹ اپنا کمپیوٹرائزڈ ٹیسٹ لیتی ہے اور کامسیٹس NTS ٹیسٹ قبول کرتی ہے۔ طلباء کو ہر ادارے کے لیے الگ تیاری کرنی پڑتی ہے۔"
        />

        {/* Section 1: Side-by-Side Comparison Matrix */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Side-by-Side Comparison: NUST vs. FAST vs. COMSATS
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Key operational differences between Pakistan&apos;s three most popular computing and engineering admissions frameworks:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="w-full text-sm font-sans">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Feature / Metric</th>
                  <th className="px-4 py-3 text-left">NUST (NET)</th>
                  <th className="px-4 py-3 text-left">FAST-NUCES (NU Test)</th>
                  <th className="px-4 py-3 text-left">COMSATS (NTS NAT)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Test Administrator
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    NUST In-House System
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    FAST-NUCES In-House System
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    National Testing Service (NTS)
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Frequency &amp; Attempts
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    4 Series (NET 1–4) / Best score counts
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    Single Testing Window per intake (Fall/Spring)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    Monthly NTS NAT cycles (valid 1 year)
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Negative Marking?
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    NO (0 penalty for wrong answers)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-red-600 dark:text-red-400">
                    YES (-0.25 penalty per wrong answer)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    NO
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Test Mode
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Computerized (Islamabad) &amp; Paper (Regional)
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    100% Computerized at FAST campus labs
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Paper-based OMR answer sheets
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Core Subject Weightage
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Math (40%), Physics (30%), Chem/CS (15%), Eng (10%), Intelligence (5%)
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Adv Math (50%), Basic Math (20%), Analytical (20%), English (10%)
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Subject Math/CS (30%), Analytical (20%), Quantitative (20%), English (20%)
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Merit Formula Weightage
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    75% NET + 15% HSSC-1 + 10% Matric
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    50% NU Test + 50% HSSC/Matric
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    50% NTS + 40% HSSC + 10% Matric
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Alternative Paths
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-doc-seal">
                    ACT / SAT Stream (Separate merit list)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-doc-seal">
                    SAT (BS Computing/BBA) &amp; NTS-NAT
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-doc-seal">
                    NTS-NAT / GAT General
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: How NUST's Multi-Series "Best Score" System Works */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Understanding NUST&apos;s Multi-Series &quot;Best Score&quot; System
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 font-sans text-xs">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Many first-time applicants are confused about how NUST runs 4 distinct testing series per admission cycle:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white block">NET-1 (Nov–Dec)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Early winter series. Best for students aiming to benchmark their early preparation on FSc-1 syllabus.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white block">NET-2 (Feb–Mar)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Mid-year series. Ideal for gauging progress after mid-term intermediate revision.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white block">NET-3 (Apr–May)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Spring series. Held alongside regional paper-based testing centers in Karachi, Quetta, and Gilgit.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white block">NET-4 (Jun–Jul)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Final summer series right after intermediate board exams. Highest attendance volume.
                </p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold">
              Key Rule: Each series requires separate online registration and fee. You do NOT have to take all four. NUST&apos;s portal automatically selects your SINGLE HIGHEST score out of all attempts.
            </div>
          </div>
        </section>

        {/* Section 3: Strategic Planning for Overlapping Windows */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Compass className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Strategic Planning: Applying to Multiple Universities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Build a Core Math Foundation</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Advanced Mathematics (Integration, Differentiation, Trigonometry, Analytic Geometry) represents 40% to 50% of the aggregate across NUST, FAST, and NTS. Mastering FSc/A-Level Math first prepares you for all three tests simultaneously.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Practice Speed &amp; Accuracy for FAST</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                While NUST NET rewards attempting every question (no negative marking), FAST penalizes blind guessing. Practice timed mock exams with negative marking penalties to build discipline for FAST&apos;s speed-focused testing environment.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Secure NTS-NAT as a Versatile Backup</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Because NTS-NAT scores remain valid for 1 year and are accepted by COMSATS, Air University, FAST (optional), and over 50 public universities, taking an early NAT test hedges your admission risk.
              </p>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 4: Live Official Portal Note */}
        <section className="space-y-4">
          <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 font-sans text-xs">
            <div className="flex items-center gap-2 text-doc-brass font-bold text-sm">
              <AlertCircle className="w-5 h-5 text-amber-400" />
              <span>Important Note on Admission Schedules &amp; Fees</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Exact application opening dates, test slot bookings, fee vouchers, and closing deadlines are revised by university senates for each annual intake (Fall and Spring cycles). Always verify the live active schedule directly on official university portals:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <a
                href="https://ugadmissions.nust.edu.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition flex items-center justify-between text-doc-brass"
              >
                <span>NUST Portal: ugadmissions.nust.edu.pk</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://nu.edu.pk/Admissions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition flex items-center justify-between text-doc-brass"
              >
                <span>FAST Portal: nu.edu.pk</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.comsats.edu.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition flex items-center justify-between text-doc-brass"
              >
                <span>COMSATS Portal: comsats.edu.pk</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Section 5: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Education &amp; Admissions Tools on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/education/university-merit-list-checker-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Merit Tool</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                University Merit List Checker →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check closing merit trends for computing and engineering.</p>
            </Link>

            <Link
              href="/education/mdcat-aggregate-calculator-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Medical Stream</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                MDCAT Aggregate Calculator →
              </h3>
              <p className="text-xs text-slate-500 mt-1">PMDC 50-40-10 medical merit calculator.</p>
            </Link>

            <Link
              href="/education/bise-lahore-result-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Board Results</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                BISE Intermediate Results Portal →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check Matric and FSc Part 1 &amp; 2 official gazettes.</p>
            </Link>
          </div>
        </section>

        {/* Section 6: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (University Entry Tests Pakistan)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Can I use a single entry test score (such as NUST NET) to apply for FAST or COMSATS?',
                a: 'No. Unlike medical college admissions which use a unified national MDCAT, engineering and computing institutions in Pakistan conduct independent entrance exams. NUST requires the NET, FAST conducts its own NU test (or accepts SAT), and COMSATS accepts the NTS-NAT. If you wish to apply to all three, you must sit for each university\'s designated test separately.',
              },
              {
                q: 'How does NUST\'s multiple series system work and which score is used?',
                a: 'NUST conducts the NET in 4 sequential series (NET-1, NET-2, NET-3, NET-4) throughout the academic year. You can attempt one, two, three, or all four series. NUST\'s centralized admission portal automatically retains and counts your single HIGHEST score for the final composite merit calculation, giving applicants multiple chances to improve.',
              },
              {
                q: 'Is the FAST entrance test mandatory if I already have a competitive SAT score?',
                a: 'No. FAST-NUCES offers an alternative admission track based on SAT scores for undergraduate programs. Applicants with qualifying SAT scores can apply directly under the SAT merit category and are exempted from sitting the physical NU entry test.',
              },
              {
                q: 'Does NUST or FAST have negative marking in their entrance exams?',
                a: 'NUST NET has NO negative marking (you receive +1 for correct answers and 0 for blank/incorrect answers, making it advantageous to attempt all 200 questions). In contrast, FAST-NUCES entry tests frequently enforce negative marking (typically -0.25 for incorrect answers in math and physics sections), requiring high precision and selective answering.',
              },
              {
                q: 'What minimum intermediate (FSc / A-Level) percentage is required to sit these tests?',
                a: 'Most top institutions (including NUST and FAST) mandate a minimum of 60% aggregate marks in HSSC / FSc Part-1 or equivalent IBCC equivalence (O/A-Levels). For COMSATS, minimum eligibility is generally 50% for standard undergraduate computing/engineering disciplines.',
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
            { label: 'NUST Undergraduate Admissions Directorate', url: 'https://ugadmissions.nust.edu.pk/' },
            { label: 'National University of Computer & Emerging Sciences (FAST-NUCES)', url: 'https://nu.edu.pk/' },
            { label: 'COMSATS University Islamabad (CUI) Admissions Office', url: 'https://www.comsats.edu.pk/' },
            { label: 'National Testing Service (NTS Pakistan)', url: 'https://www.nts.org.pk/' },
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
