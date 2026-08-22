import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  HelpCircle,
  ExternalLink,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  UserCheck,
  MapPin,
  Scale,
  FileWarning,
  Building,
  Landmark,
  BadgeAlert
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FPSC & PPSC Age Relaxation & Quota Rules 2026 – Eligibility & Domicile Guide | Pakistan Info Hub',
  description:
    'Complete guide to FPSC and PPSC age relaxation rules in 2026: 5-year general age relaxation, 10-year government servant quota, provincial domicile requirements, age calculation cut-off date, and common rejection pitfalls.',
  keywords: [
    'FPSC age relaxation rules 2026',
    'PPSC 5 years general age relaxation',
    'government servant age relaxation FPSC',
    'PMS Punjab age limit 32 years',
    'FPSC provincial quota distribution percentages',
    'domicile certificate rules for federal jobs',
    'age calculation closing date FPSC PPSC',
  ],
  openGraph: {
    title: 'FPSC & PPSC Age Relaxation & Quota Rules 2026 – Eligibility & Domicile Guide',
    description:
      'Evergreen reference guide for government job applicants: How age relaxation works, provincial quotas, self-domicile rules, and avoiding rejection.',
    url: 'https://www.pakistaninfohub.com/jobs/fpsc-ppsc-age-relaxation-quota-rules-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/jobs/fpsc-ppsc-age-relaxation-quota-rules-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Jobs Portal', item: 'https://www.pakistaninfohub.com/jobs' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'FPSC & PPSC Age Relaxation Rules',
          item: 'https://www.pakistaninfohub.com/jobs/fpsc-ppsc-age-relaxation-quota-rules-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'FPSC & PPSC Age Relaxation, Quota & Domicile Rules 2026: Official Reference Guide',
      description:
        'An authoritative, evergreen explainer covering Federal and Provincial Public Service Commission age relaxation limits, quota formulas, domicile verification, and candidate disqualification traps.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-20',
      dateModified: '2026-08-21',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/jobs/fpsc-ppsc-age-relaxation-quota-rules-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How is candidate age calculated for FPSC and PPSC jobs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your age is calculated strictly as of the official closing date for application submission specified in the job advertisement (in exact years, months, and days). Being even one day above the upper limit (including admissible relaxation) leads to automatic rejection.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the 5-year general age relaxation granted automatically?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Under federal and provincial government notification rules, a 5-year general age relaxation in the upper age limit is admissible to all candidates across the board, over and above the base age limit prescribed in the recruitment rules.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I combine multiple age relaxation categories (e.g. Govt Servant + 5 Years General)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. In FPSC and PPSC recruitment, age relaxations are non-cumulative. A candidate who qualifies under multiple concession categories (e.g., government service and special quota) is granted the benefit of only the single most advantageous category.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can female candidates apply using their husband or father’s domicile certificate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All applicants (both male and female) must possess a self-domicile certificate issued in their own name on or before the closing date. Married women may update their domicile to their husband’s district, but the certificate itself must be in the applicant’s own name.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do employees of private companies, banks, or autonomous bodies qualify for Government Servant relaxation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Government servant age relaxation (up to 10 years) applies exclusively to regular/permanent employees of federal or provincial civil ministries and departments with at least 2 years of continuous service. Employees of autonomous authorities, state-owned corporations, semi-government bodies, public sector banks, and project/contract staff are ineligible.',
          },
        },
      ],
    },
  ],
};

export default function FpscPpscAgeRelaxationRulesPage() {
  const breadcrumbs = [
    { nameEn: 'Jobs Portal', nameUr: 'نوکریاں اور ملازمتیں' },
    { nameEn: 'FPSC & PPSC Age Relaxation Rules', nameUr: 'ایف پی ایس سی و پی پی ایس سی عمر رعایت و کوٹہ قواعد' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="CIVIL SERVICE RECRUITMENT GUIDE" labelUr="سرکاری بھرتی رہنمائی" variant="navy" />
            <VerifiedBadge textEn="ESTABLISHMENT DIVISION & PSC RULES 2026" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            FPSC &amp; PPSC Age Relaxation &amp; Quota Rules 2026: Complete Guide
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              ایف پی ایس سی اور پی پی ایس سی عمر کی رعایت، ڈومیسائل اور کوٹہ کے قواعد
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Navigating competitive government job eligibility in Pakistan requires a precise understanding of statutory
            age relaxations, provincial quotas, and self-domicile criteria. Understand how age is calculated, who qualifies
            for concessions, and how to prevent rejection during document scrutiny.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How Much Age Relaxation is Allowed for FPSC & PPSC Jobs?"
          topicTitleUr="ایف پی ایس سی اور پی پی ایس سی میں عمر کی کتنی رعایت ملتی ہے؟"
          answerEn="A 5-year general age relaxation is automatically admissible to all candidates over the advertised upper age limit. Regular government employees (with ≥ 2 years service) and disabled candidates receive up to 10 years. Relaxations are non-cumulative, and age is calculated strictly as of the application closing date."
          answerUr="تمام امیدواروں کے لیے بالائی عمر کی حد میں 5 سال کی عمومی رعایت (General Age Relaxation) بغیر کسی درخواست کے لاگو ہوتی ہے۔ دو سال سروس والے ریگولر سرکاری ملازمین اور معذور افراد کو 10 سال تک رعایت ملتی ہے۔ عمر کا حساب اشتہار کی آخری تاریخ (Closing Date) کے مطابق کیا جاتا ہے۔"
        />

        {/* Section 1: Complete Age Relaxation Categories Breakdown */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Official Age Relaxation Schedule by Category
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 font-sans">
            Under Establishment Division S.R.O. regulations and Provincial Civil Service rules, the following upper age concessions apply:
          </p>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Candidate Category</th>
                  <th className="px-4 py-3 text-left text-emerald-300">Upper Age Relaxation</th>
                  <th className="px-4 py-3 text-left text-slate-300">Mandatory Prerequisite / Proof</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    General Public / Open Candidates
                  </td>
                  <td className="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400 text-xs">
                    5 Years
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Automatically applied to all applicants (e.g. 28 + 5 = 33 years)
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Regular Government Servants
                  </td>
                  <td className="px-4 py-3 font-mono font-bold text-blue-600 dark:text-blue-400 text-xs">
                    Up to 10 Years (Max Age 55)
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Minimum 2 years continuous regular civil service + Departmental NOC
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Special Persons / Disabled Candidates
                  </td>
                  <td className="px-4 py-3 font-mono font-bold text-purple-600 dark:text-purple-400 text-xs">
                    Up to 10 Years
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Official Disability Certificate issued by Social Welfare Council
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Widows / Children of Deceased Civil Servants
                  </td>
                  <td className="px-4 py-3 font-mono font-bold text-amber-600 dark:text-amber-400 text-xs">
                    5 Years
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Parent died while in active government service + Death in service cert
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Ex-Servicemen (Armed Forces)
                  </td>
                  <td className="px-4 py-3 font-mono font-bold text-slate-700 dark:text-slate-300 text-xs">
                    Military Service Period + 5 Years
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Military Discharge Certificate (Max ceiling applies)
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Scheduled Castes, Buddhist &amp; Recognized Tribal Areas
                  </td>
                  <td className="px-4 py-3 font-mono font-bold text-teal-600 dark:text-teal-400 text-xs">
                    3 Years
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Belonging to scheduled castes, Ex-FATA, Balochistan, AJK, or GB
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    PMS Punjab (BS-17) Combined Competitive Exam
                  </td>
                  <td className="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400 text-xs">
                    Relaxed to 32 Years (2026/2027)
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Special two-year relief directive issued by Government of Punjab
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>

        {/* Section 2: Domicile & Federal Provincial Quota Mechanics */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Federal Provincial Quota Formula &amp; Self-Domicile Rules
            </h2>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed text-sm font-sans space-y-3">
            <p>
              In all Federal Public Service Commission (FPSC) recruitments for BS-16 and above posts, vacancies are allocated
              according to the statutory national quota distribution:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-sans">
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xl font-bold font-mono text-doc-ink dark:text-white">7.5%</span>
              <span className="block text-[11px] text-slate-500 font-medium mt-0.5">Open Merit (All Pak)</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xl font-bold font-mono text-doc-ink dark:text-white">50%</span>
              <span className="block text-[11px] text-slate-500 font-medium mt-0.5">Punjab Quota</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xl font-bold font-mono text-doc-ink dark:text-white">11.4%</span>
              <span className="block text-[11px] text-slate-500 font-medium mt-0.5">Sindh (Rural)</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xl font-bold font-mono text-doc-ink dark:text-white">7.6%</span>
              <span className="block text-[11px] text-slate-500 font-medium mt-0.5">Sindh (Urban)</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xl font-bold font-mono text-doc-ink dark:text-white">11.5%</span>
              <span className="block text-[11px] text-slate-500 font-medium mt-0.5">Khyber Pakhtunkhwa</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xl font-bold font-mono text-doc-ink dark:text-white">6%</span>
              <span className="block text-[11px] text-slate-500 font-medium mt-0.5">Balochistan</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xl font-bold font-mono text-doc-ink dark:text-white">3%</span>
              <span className="block text-[11px] text-slate-500 font-medium mt-0.5">Ex-FATA (Merged)</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xl font-bold font-mono text-doc-ink dark:text-white">3%</span>
              <span className="block text-[11px] text-slate-500 font-medium mt-0.5">AJK (2%) &amp; GB (1%)</span>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 3: Top 5 Disqualification Traps */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileWarning className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              5 Critical Mistakes That Get PSC Applications Rejected
            </h2>
          </div>

          <div className="space-y-3 font-sans text-xs">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <BadgeAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  1. Domicile Certificate Issued AFTER Closing Date
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Your self-domicile certificate must be signed and issued on or before the closing date. Even if you submitted
                  an application for domicile prior to the cutoff, if the signing date on the certificate is late, your candidature is cancelled.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <BadgeAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  2. Missing Departmental Permission Certificate (NOC)
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Government employees claiming service age relaxation or currently employed in any public sector department
                  MUST secure a formal Departmental Permission Certificate (NOC) before applying. Failing to produce this during
                  scrutiny results in debarment.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <BadgeAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  3. Attempting to Stack Multiple Relaxations (Cumulative Claim)
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Relaxations do NOT compound. You cannot claim 5 years general relaxation AND 10 years government service
                  to get 15 years. You receive only the single largest concession you are entitled to.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <BadgeAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  4. Submitting Father’s or Husband’s Domicile
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  The law requires a <strong>self-domicile certificate</strong>. Attaching your father’s domicile with an affidavit
                  is strictly invalid for competitive public service examinations.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <BadgeAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  5. Over-Age by a Single Calendar Day
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Age calculation is exact to the day. If the max age is 33 years and 0 days on October 15, being 33 years and 1 day
                  on that date causes automated disqualification. Always compute with an exact date-of-birth calculator.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Recruitment &amp; Test Preparation Navigators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/jobs/roll-number-slip-checker-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Exam Slips</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Roll Number Slip Checker 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Download FPSC, PPSC, and NTS admission certificates.</p>
            </Link>

            <Link
              href="/jobs/nts-result-scorecard-checker-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Merit Scorecard</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NTS Result Scorecard Checker →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Verify NAT/GAT scorecards and candidate percentiles.</p>
            </Link>

            <Link
              href="/certificates/police-character-certificate-online-apply-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Pre-Employment</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Police Character Certificate Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Apply for security clearance and character certificates.</p>
            </Link>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Age Relaxation &amp; Quota)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'How is candidate age calculated for FPSC and PPSC jobs?',
                a: 'Your age is calculated strictly as of the official closing date for application submission specified in the job advertisement (in exact years, months, and days). Being even one day above the upper limit (including admissible relaxation) leads to automatic rejection.',
              },
              {
                q: 'Is the 5-year general age relaxation granted automatically?',
                a: 'Yes. Under federal and provincial government notification rules, a 5-year general age relaxation in the upper age limit is admissible to all candidates across the board, over and above the base age limit prescribed in the recruitment rules.',
              },
              {
                q: 'Can I combine multiple age relaxation categories (e.g. Govt Servant + 5 Years General)?',
                a: 'No. In FPSC and PPSC recruitment, age relaxations are non-cumulative. A candidate who qualifies under multiple concession categories (e.g., government service and special quota) is granted the benefit of only the single most advantageous category.',
              },
              {
                q: 'Can female candidates apply using their husband or father’s domicile certificate?',
                a: 'No. All applicants (both male and female) must possess a self-domicile certificate issued in their own name on or before the closing date. Married women may update their domicile to their husband’s district, but the certificate itself must be in the applicant’s own name.',
              },
              {
                q: 'Do employees of private companies, banks, or autonomous bodies qualify for Government Servant relaxation?',
                a: 'No. Government servant age relaxation (up to 10 years) applies exclusively to regular/permanent employees of federal or provincial civil ministries and departments with at least 2 years of continuous service. Employees of autonomous authorities, state-owned corporations, semi-government bodies, public sector banks, and project/contract staff are ineligible.',
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
            { label: 'Federal Public Service Commission (FPSC) General Instructions', url: 'https://fpsc.gov.pk/' },
            { label: 'Punjab Public Service Commission (PPSC) Regulations', url: 'https://ppsc.gop.pk/' },
            { label: 'Establishment Division Government of Pakistan Recruitment Rules', url: 'https://establishment.gov.pk/' },
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
