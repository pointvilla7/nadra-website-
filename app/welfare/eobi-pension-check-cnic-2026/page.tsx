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
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  Building,
  Briefcase,
  Users,
  FileText,
  BadgeCheck,
  Scale
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'EOBI Pension Check by CNIC 2026: Status, Registration & Monthly Rates | Pakistan Info Hub',
  description:
    'Check your EOBI pension status online by CNIC for 2026: Verify insured person employment history, employer contribution records, minimum pension amounts (Rs. 10,000 to Rs. 11,500), age 60 eligibility, and claim registration on eobi.gov.pk.',
  keywords: [
    'eobi pension check by cnic 2026',
    'eobi status check online',
    'eobi insured person verification cnic',
    'eobi minimum pension amount 2026',
    'eobi registration check pakistan',
    'how to check eobi pension by cnic',
    'eobi helpline number 08000-3624',
  ],
  openGraph: {
    title: 'EOBI Pension Check by CNIC 2026: Status, Registration & Monthly Rates',
    description:
      'Online status checker and guide for Employees Old-Age Benefits Institution (EOBI) insured persons and private-sector pensioners in Pakistan.',
    url: 'https://www.pakistaninfohub.com/welfare/eobi-pension-check-cnic-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/welfare/eobi-pension-check-cnic-2026' },
};

const EobiPensionHelper = dynamic(
  () => import('@/components/EobiPensionHelper').then((m) => ({ default: m.EobiPensionHelper })),
  { ssr: false, loading: () => <div className="h-[480px] rounded-3xl bg-slate-100 dark:bg-slate-800 animate-pulse" /> }
);

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
          name: 'Social Welfare & Relief',
          item: 'https://www.pakistaninfohub.com/welfare',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'EOBI Pension Check by CNIC 2026',
          item: 'https://www.pakistaninfohub.com/welfare/eobi-pension-check-cnic-2026',
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Check EOBI Pension Status by CNIC Online in Pakistan',
      description:
        'Step-by-step procedure to verify your Employees Old-Age Benefits Institution (EOBI) registration, contribution months, and pension claim online using your 13-digit CNIC.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Enter 13-Digit CNIC',
          text: 'Type your 13-digit CNIC without dashes into the verification helper to validate its format and copy it to your clipboard.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Launch Official EOBI Portal',
          text: 'Open the official EOBI website at eobi.gov.pk during operational server hours (Monday to Friday, 9 AM to 7 PM).',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'View Insured Contribution History',
          text: 'Select Individual Information / Insured Person Details, paste your CNIC, and submit to inspect your active employment contribution history and pension eligibility status.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I check my EOBI pension and registration status online with my CNIC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can check your status by visiting the official EOBI web portal at eobi.gov.pk, navigating to the "Individual Information / Insured Person Details" section, entering your 13-digit CNIC without hyphens, and clicking submit. The portal displays your registration status (Active/Inactive), employer contribution history, and total insured service months.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the current minimum monthly EOBI pension in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The statutory minimum monthly pension historically stood at Rs. 8,500 and was subsequently increased to Rs. 10,000. Under recent Federal Cabinet notifications, the minimum monthly pension has been enhanced to Rs. 11,500 with retroactive disbursement adjustments. Beneficiaries should confirm their exact monthly credit via their designated EOBI bank ATM account or regional office.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the minimum age and service duration required to receive an EOBI old-age pension?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To qualify for a full lifelong old-age pension under the EOB Act 1976, an insured worker (both male and female) must have reached 60 years of age (55 years for certified mineworkers) and accumulated at least 15 years (180 months) of insurable employment contributions. Workers with fewer than 15 years of service are eligible for an Old-Age Grant or pro-rated benefits.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if my CNIC shows "No Record" even though I worked in private companies for years?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If your online record is blank, your previous employer may have defaulted on mandatory registration or failed to submit contribution schedules. To resolve this: (1) Contact your company’s HR/Accounts department to obtain your EOBI Registration Number (Form PE-01/PI-02), (2) Gather proof of employment including appointment letters, pay slips with EOBI deductions, and bank salary credit statements, and (3) Visit your nearest EOBI Regional Office to lodge a formal complaint for retroactive record recovery.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is EOBI pension subject to income tax in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Monthly pensions and gratuity grants received from EOBI are 100% exempt from income tax under the Second Schedule (Part I, Section 53) of the Income Tax Ordinance 2001.',
          },
        },
      ],
    },
  ],
};

export default function EobiPensionPage() {
  const breadcrumbs = [
    { nameEn: 'Social Welfare & Relief', nameUr: 'سوشل ویلفیئر و ریلیف' },
    { nameEn: 'EOBI Pension Check by CNIC', nameUr: 'ای او بی آئی پنشن تصدیق 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="EOBI PENSION PORTAL" labelUr="ای او بی آئی پنشن پورٹل" variant="seal" />
            <VerifiedBadge textEn="EOB ACT 1976 STATUTORY DIRECTORY" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            EOBI Pension Check by CNIC 2026: Status, Registration &amp; Monthly Rates
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              شناختی کارڈ کے ذریعے ای او بی آئی پنشن سٹیٹس، ملازم رجسٹریشن اور ماہانہ پنشن کی تصدیق
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Verify your <strong>EOBI insured person status</strong>, contribution history, and monthly pension eligibility.
            Validate your 13-digit CNIC number, learn how to access the official database at <code>eobi.gov.pk</code>,
            and discover your legal rights under the <strong>Employees&apos; Old-Age Benefits Act 1976</strong>.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is EOBI and How Do You Check Pension Status with Your CNIC?"
          topicTitleUr="ای او بی آئی کیا ہے اور شناختی کارڈ سے پنشن کیسے معلوم کریں؟"
          answerEn="EOBI is Pakistan's federal social security program for private-sector workers. To check your status: Enter your 13-digit CNIC into the official EOBI portal at eobi.gov.pk (under Individual Information). Workers aged 60 with 15+ years of registered service qualify for a monthly pension (minimum rate periodically notified between Rs. 10,000 and Rs. 11,500 per month; confirm active individual disbursement via eobi.gov.pk)."
          answerUr="ای او بی آئی پرائیویٹ سیکٹر کے ملازمین کے لیے وفاقی پنشن ادارہ ہے۔ اپنا سٹیٹس چیک کرنے کے لیے 13 ہندسوں کا شناختی کارڈ نمبر سرکاری پورٹل (eobi.gov.pk) پر درج کریں۔ 60 سال کی عمر اور 15 سالہ سروس والے ملازمین ماہانہ پنشن (سرکاری نوٹیفکیشن کے تحت 10,000 تا 11,500 روپے کے درمیان؛ اصل رقم پورٹل سے چیک کریں) کے حقدار ہیں۔"
        />

        {/* Interactive Guided Fallback Tool Mount */}
        <EobiPensionHelper />

        {/* Section 1: EOBI Legal Framework & Contribution Structure */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              EOBI Legal Framework, Contribution Rates &amp; Employer Obligations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">5+ Employees Mandate</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Under Section 1(4) of the EOB Act 1976, any commercial establishment or factory employing <strong>5 or more workers</strong> must legally register all employees with EOBI within 30 days of joining.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">6% Statutory Contribution</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Total monthly contribution is 6% calculated against the statutory minimum wage: <strong>5% paid by the employer</strong> and <strong>1% deducted from the employee&apos;s salary</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Tax-Exempt Benefits</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                All EOBI old-age pensions, invalidity pensions, and survivors&apos; pensions are <strong>100% exempt from income tax</strong> under the Second Schedule of the Income Tax Ordinance 2001.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Minimum Pension Amount & Eligibility Rules */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Minimum Monthly Pension Rates &amp; Qualifying Conditions
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-xs font-sans min-w-[540px]">
                <thead className="bg-doc-ink text-white text-[11px] font-mono uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 text-left">Benefit Category</th>
                    <th className="px-4 py-3 text-left">Minimum Age</th>
                    <th className="px-4 py-3 text-left">Required Insured Service</th>
                    <th className="px-4 py-3 text-right">Monthly Amount / Entitlement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="bg-white dark:bg-slate-900">
                    <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Old-Age Full Pension</td>
                    <td className="px-4 py-3 font-mono font-bold text-slate-700 dark:text-slate-300">60 Years (55 for Mineworkers)</td>
                    <td className="px-4 py-3 font-mono text-emerald-600 font-bold">15 Years (180 Months)</td>
                    <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">Rs. 10,000 – Rs. 11,500 / Month</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-900">
                    <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Old-Age Grant (Lump-Sum)</td>
                    <td className="px-4 py-3 font-mono font-bold text-slate-700 dark:text-slate-300">60 Years</td>
                    <td className="px-4 py-3 font-mono text-amber-600 font-bold">2 to 14 Years (24–179 Months)</td>
                    <td className="px-4 py-3 text-right font-mono font-bold text-amber-600">One-time lump sum grant</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-900">
                    <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Invalidity Pension</td>
                    <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300">Before Age 60 (Permanent Disability)</td>
                    <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300">5 Years (or 3 of last 5 years)</td>
                    <td className="px-4 py-3 text-right font-mono font-bold text-doc-seal">Monthly minimum pension</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-900">
                    <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Survivors&apos; / Widow Pension</td>
                    <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300">Upon Death of Insured Person</td>
                    <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300">36 Months insurable service</td>
                    <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">100% Lifelong Pension to Widow</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5 text-slate-600 dark:text-slate-300">
              <strong className="text-doc-ink dark:text-white">Statutory Rate Transparency Note:</strong>
              <p>
                While older regulatory notices specified Rs. 8,500 and Rs. 10,000, the Federal Cabinet enhanced the minimum monthly pension to <strong>Rs. 11,500</strong> with retroactive adjustments. Because individual pension formulas depend on average wage calculations and years of insurable service, pensioners are advised to verify their precise monthly credit on their designated bank account statement or EOBI portal ledger.
              </p>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 3: Related Welfare Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Social Welfare &amp; Financial Utilities on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/welfare/bisp-eligibility-check-by-cnic"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Stipend Check</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                BISP 8171 Eligibility Check →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Verify Benazir Kafaalat quarterly payment eligibility by CNIC.</p>
            </Link>

            <Link
              href="/welfare/pmt-score-explained-bisp-eligibility-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Poverty Score</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                PMT Score Formula &amp; Cutoff 32 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Understand Proxy Means Test ranking and dynamic re-survey steps.</p>
            </Link>

            <Link
              href="/hajj-umrah/zakat-calculator-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Islamic Finance</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Zakat Calculator 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Calculate 2.5% Zakat on cash, gold, silver, and business assets.</p>
            </Link>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (EOBI Pension &amp; Insured Status)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'How do I check my EOBI pension and registration status online with my CNIC?',
                a: 'You can check your status by visiting the official EOBI web portal at eobi.gov.pk, navigating to the "Individual Information / Insured Person Details" section, entering your 13-digit CNIC without hyphens, and clicking submit. The portal displays your registration status (Active/Inactive), employer contribution history, and total insured service months.',
              },
              {
                q: 'What is the current minimum monthly EOBI pension in Pakistan?',
                a: 'The statutory minimum monthly pension historically stood at Rs. 8,500 and was subsequently increased to Rs. 10,000. Under recent Federal Cabinet notifications, the minimum monthly pension has been enhanced to Rs. 11,500 with retroactive disbursement adjustments. Beneficiaries should confirm their exact monthly credit via their designated EOBI bank ATM account or regional office.',
              },
              {
                q: 'What is the minimum age and service duration required to receive an EOBI old-age pension?',
                a: 'To qualify for a full lifelong old-age pension under the EOB Act 1976, an insured worker (both male and female) must have reached 60 years of age (55 years for certified mineworkers) and accumulated at least 15 years (180 months) of insurable employment contributions. Workers with fewer than 15 years of service are eligible for an Old-Age Grant or pro-rated benefits.',
              },
              {
                q: 'What should I do if my CNIC shows "No Record" even though I worked in private companies for years?',
                a: 'If your online record is blank, your previous employer may have defaulted on mandatory registration or failed to submit contribution schedules. To resolve this: (1) Contact your company’s HR/Accounts department to obtain your EOBI Registration Number (Form PE-01/PI-02), (2) Gather proof of employment including appointment letters, pay slips with EOBI deductions, and bank salary credit statements, and (3) Visit your nearest EOBI Regional Office to lodge a formal complaint for retroactive record recovery.',
              },
              {
                q: 'Is EOBI pension subject to income tax in Pakistan?',
                a: 'No. Monthly pensions and gratuity grants received from EOBI are 100% exempt from income tax under the Second Schedule (Part I, Section 53) of the Income Tax Ordinance 2001.',
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
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Statutory Sources Cited:</p>
          {[
            { label: 'Employees Old-Age Benefits Institution (EOBI) Official Portal', url: 'https://eobi.gov.pk/' },
            { label: 'Employees Old-Age Benefits Act 1976', url: 'https://pakistancode.gov.pk/' },
            { label: 'Ministry of Overseas Pakistanis and Human Resource Development', url: 'https://ophrd.gov.pk/' },
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
