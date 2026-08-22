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
  Landmark,
  FileCheck,
  TrendingUp,
  RotateCcw,
  Check,
  Users,
  Percent,
  Calculator,
  ShieldAlert
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kamyab Jawan & PM Youth Loan Scheme 2026 – Current Status, Tiers & Apply | Pakistan Info Hub',
  description:
    'Is Kamyab Jawan still active? Complete 2026 status of the Prime Minister’s Youth Business & Agriculture Loan Scheme (PMYB&ALS). Learn current loan tiers (Tier 1 interest-free up to Rs. 0.5M, Tier 2 at 5% up to Rs. 1.5M, Tier 3 at 7% up to Rs. 7.5M), eligibility (21-45 years), participating banks, and online apply at pmyp.gov.pk.',
  keywords: [
    'Kamyab Jawan loan current status 2026',
    'Prime Minister Youth Business and Agriculture Loan Scheme PMYB ALS',
    'PM Youth Loan Scheme interest free Tier 1',
    'pmyp gov pk online loan application form',
    'Kamyab Jawan program renamed PM youth programme',
    'NBP BOP Bank of Khyber PM youth business loan',
    'PM loan scheme eligibility age 21 to 45',
    'subsidized business loans Pakistan 2026',
  ],
  openGraph: {
    title: 'Kamyab Jawan & PM Youth Loan Scheme 2026 – Current Status & Apply',
    description:
      'Official clarification on the current status of Kamyab Jawan / PMYB&ALS: Loan tiers, interest rates, eligibility criteria, and step-by-step online application guide.',
    url: 'https://www.pakistaninfohub.com/loans/kamyab-jawan-pm-youth-loan-current-status-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/loans/kamyab-jawan-pm-youth-loan-current-status-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Govt Loans', item: 'https://www.pakistaninfohub.com/loans' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Kamyab Jawan / PM Youth Loan Status 2026',
          item: 'https://www.pakistaninfohub.com/loans/kamyab-jawan-pm-youth-loan-current-status-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Kamyab Jawan & PM Youth Loan Current Status 2026: Official PMYB&ALS Tiers, Markup & Online Apply',
      description:
        'A comprehensive public financial guide explaining the transition from Kamyab Jawan to PMYB&ALS, 3-tier loan structure (up to Rs. 7.5M), 0% to 7% markup rates, and official application instructions via pmyp.gov.pk.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/loans/kamyab-jawan-pm-youth-loan-current-status-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is "Kamyab Jawan" still the active official name of the federal youth loan program?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The "Kamyab Jawan" branding has been officially retired. The program has been revived and restructured under its parent title: the Prime Minister\'s Youth Business & Agriculture Loan Scheme (PMYB&ALS), administered through the official portal at pmyp.gov.pk.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why was the loan scheme temporarily paused in 2022?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In July 2022, the State Bank of Pakistan (SBP) temporarily paused disbursements during a federal macroeconomic review to restructure subsidy mechanisms and integrate microfinance/agriculture portfolios. The scheme was fully revived in December 2022 under PMYB&ALS with Tier 1 micro-loans made 100% interest-free (0% markup).',
          },
        },
        {
          '@type': 'Question',
          name: 'Which commercial banks and institutions are currently participating in the scheme?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Lead public and private banks include National Bank of Pakistan (NBP), Bank of Punjab (BOP), Bank of Khyber (BOK), Habib Bank Limited (HBL), United Bank Limited (UBL), Allied Bank (ABL), Askari Bank, Meezan Bank, Bank Alfalah, and approved microfinance institutions like Akhuwat and NRSP.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the current age limits and can IT/freelancers apply at age 18?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The standard eligible age bracket is 21 to 45 years for general business and agriculture loans. However, for IT/E-Commerce and digital startup ventures, the government lowered the minimum age requirement to 18 years (requiring at least matriculation or equivalent qualification).',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to submit physical paperwork at a bank branch to apply?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Physical application forms are not accepted at bank counters. All applications must be submitted 100% online through the official government portal at pmyp.gov.pk. You will be assigned a trackable registration number and contacted by your chosen partner bank once preliminary credit scoring is approved.',
          },
        },
      ],
    },
  ],
};

export default function KamyabJawanPmYouthLoanPage() {
  const breadcrumbs = [
    { nameEn: 'Govt Loans', nameUr: 'سرکاری قرضہ سکیمیں' },
    { nameEn: 'PM Youth Loan Status 2026', nameUr: 'کامیاب جوان / پی ایم یوتھ لون سٹیٹس 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="FEDERAL YOUTH LOAN SCHEME" labelUr="پی ایم یوتھ بزنس لون" variant="seal" />
            <VerifiedBadge textEn="PMYP & SBP VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Kamyab Jawan &amp; PM Youth Loan Scheme 2026: Current Status, Tiers &amp; Online Apply
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              کامیاب جوان اور وزیر اعظم یوتھ بزنس لون سکیم 2026: موجودہ صورتحال، قرض کی حد اور طریقہ کار
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Clear, factual guidance resolving years of program name changes and status updates. Understand how the former
            Kamyab Jawan scheme operates today as the Prime Minister&apos;s Youth Business &amp; Agriculture Loan Scheme (PMYB&amp;ALS),
            including 0% interest Tier 1 loans, subsidized Tier 2 &amp; 3 rates, eligibility rules, and official portal links.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="Is Kamyab Jawan Still Active and What is it Officially Called in 2026?"
          topicTitleUr="کیا کامیاب جوان سکیم اب بھی فعال ہے اور اس کا موجودہ نام کیا ہے؟"
          answerEn="Yes, the program is fully active under its official revised name: Prime Minister's Youth Business & Agriculture Loan Scheme (PMYB&ALS). 'Kamyab Jawan' branding has been retired. The scheme offers three tiers: Tier 1 up to Rs. 500,000 (0% interest-free), Tier 2 up to Rs. 1.5 million (5% markup), and Tier 3 up to Rs. 7.5 million (7% markup). Apply 100% online at pmyp.gov.pk."
          answerUr="جی ہاں! یہ پروگرام اب 'پرائم منسٹر یوتھ بزنس اینڈ ایگریکلچر لون سکیم' (PMYB&ALS) کے نام سے مکمل فعال ہے جبکہ 'کامیاب جوان' کا نام ختم ہو چکا ہے۔ اس میں 5 لاکھ تک بلاسود (0%) قرض، 15 لاکھ تک 5% اور 75 لاکھ تک 7% مارک اپ پر قرض دیا جا رہا ہے۔ آن لائن درخواست pmyp.gov.pk پر جمع ہوتی ہے۔"
        />

        {/* Section 1: Name Changes & Evolution Timeline */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <RotateCcw className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Why the Names Changed: Brief Program Timeline
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            If you have seen conflicting names across news websites and YouTube videos, here is the official historical context explaining why:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-mono font-bold text-xs text-doc-brass block">2013 – 2018</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">PM Youth Business Loans (PMYBL)</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Originally launched under PML-N government as Prime Minister&apos;s Youth Programme (PMYP), providing subsidized business loans up to Rs. 2 million through NBP.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-mono font-bold text-xs text-doc-seal block">2019 – 2022</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Kamyab Jawan Programme (PMKJ-YES)</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Rebranded by PTI government with expanded tiers up to Rs. 25 million. In July 2022, disbursements were temporarily halted by the State Bank for restructuring.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2">
              <span className="font-mono font-bold text-xs text-emerald-700 dark:text-emerald-300 block">CURRENT STATUS (Active)</span>
              <h3 className="font-serif font-bold text-sm text-emerald-900 dark:text-emerald-100">PMYB&amp;ALS (pmyp.gov.pk)</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Relaunched and currently operational as <strong>Prime Minister&apos;s Youth Business &amp; Agriculture Loan Scheme</strong>, featuring 0% interest micro-loans and specialized agriculture financing.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Current Loan Tiers Table */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Official Loan Tiers, Amounts &amp; Mark-Up Rates
            </h2>
          </div>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Loan Tier</th>
                  <th className="px-4 py-3 text-left">Loan Amount Limit</th>
                  <th className="px-4 py-3 text-left">Mark-Up Rate (Subsidized)</th>
                  <th className="px-4 py-3 text-left">Security / Collateral Required</th>
                  <th className="px-4 py-3 text-left">Repayment Tenor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Tier 1 (T1) Micro-Loan
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                    Up to PKR 500,000 (0.5 Million)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    0% (Interest-Free)
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Clean / Personal Guarantee of borrower (No property collateral)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    Up to 3 Years
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Tier 2 (T2) Small Business
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-doc-seal text-sm">
                    PKR 500,000 to PKR 1,500,000 (1.5 Million)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-doc-seal">
                    5% Fixed per annum
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Personal Guarantee + hypothecation of business stock/machinery
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    Up to 8 Years (1 yr grace)
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Tier 3 (T3) Medium Enterprise
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-doc-brass text-sm">
                    Above PKR 1,500,000 to PKR 7,500,000 (7.5 Million)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-doc-brass">
                    7% Fixed per annum
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Tangible collateral / property mortgage per bank credit policy
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    Up to 8 Years (1 yr grace)
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>

        {/* Section 3: Eligibility & Requirements */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Eligibility Criteria &amp; Mandatory Rules
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="font-bold text-doc-seal text-sm block">Who CAN Apply:</span>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                <li><strong>Age Range:</strong> Pakistani citizens holding valid CNIC aged between <strong>21 and 45 years</strong>.</li>
                <li><strong>IT / E-Commerce Startups:</strong> Minimum age relaxed down to <strong>18 years</strong> (requires minimum matriculation).</li>
                <li><strong>Business Types:</strong> Startups (new businesses) and expansion of existing registered enterprises or agricultural farms.</li>
                <li><strong>Gender Quota:</strong> 25% of total loan volume is strictly allocated for women entrepreneurs.</li>
                <li><strong>Agriculture Loans:</strong> Farmers cultivating land (farm &amp; non-farm activities, tractors, solar tube wells, dairy).</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="font-bold text-red-600 dark:text-red-400 text-sm block">Who CANNOT Apply:</span>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                <li><strong>Government Employees:</strong> Federal, provincial, or semi-government employees are strictly ineligible.</li>
                <li><strong>Bank Defaulters:</strong> Individuals with active defaults on the State Bank&apos;s Electronic Credit Information Bureau (e-CIB).</li>
                <li><strong>Duplicate Family Borrowers:</strong> Multiple members of the same immediate household cannot obtain concurrent Tier 2/3 loans without separate registered business entities.</li>
              </ul>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 4: Step-by-Step Online Application Process */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step: How to Apply Online at pmyp.gov.pk
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Visit pmyp.gov.pk</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Navigate to <code>pmyp.gov.pk</code> and click <strong>&quot;Apply for Loan&quot;</strong>. Enter your CNIC and CNIC issue date to initiate verification.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Select Tier &amp; Bank</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Select your required financing tier (T1, T2, or T3) and choose your preferred executing partner bank (NBP, BOP, BOK, HBL, Meezan, etc.).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Upload Business Plan</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Fill out the online feasibility questionnaire (estimated monthly revenue, operating costs, and required capital expenditure).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs">4</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Track &amp; Verification</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Receive your application registration number via SMS. The assigned bank will conduct physical/credit verification before final sanctioning.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Scam Alert Warning */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Public Warning: Fake Loan Agent Scams
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-2 font-sans text-xs">
            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm">
              <AlertTriangle className="w-5 h-5" />
              <span>Never Pay Any Upfront Registration Fee to Unofficial Agents</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Applying on the official government portal <code>pmyp.gov.pk</code> is <strong>100% free</strong>. The Government of Pakistan and partner banks NEVER ask for upfront processing fees via EasyPaisa, JazzCash, or WhatsApp. Any agent demanding advance cash for &quot;guaranteed loan approval&quot; is running a criminal scam.
            </p>
          </div>
        </section>

        {/* Section 6: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Financial &amp; Loan Calculators on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/loans/emi-calculator-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Calculator Tool</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Loan EMI &amp; Markup Calculator →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Calculate monthly installments for 0%, 5%, and 7% tiers.</p>
            </Link>

            <Link
              href="/loans/how-to-spot-fake-loan-scheme-scams-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Security Guide</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Spotting Fake Loan App Scams →
              </h3>
              <p className="text-xs text-slate-500 mt-1">How to identify illegal digital lending apps in Pakistan.</p>
            </Link>

            <Link
              href="/business/secp-company-registration-online-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Business Setup</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                SECP Company Registration →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Register your startup entity to qualify for Tier 3 funding.</p>
            </Link>
          </div>
        </section>

        {/* Section 7: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (PM Youth Loan 2026)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Is "Kamyab Jawan" still the active official name of the federal youth loan program?',
                a: 'No. The "Kamyab Jawan" branding has been officially retired. The program has been revived and restructured under its parent title: the Prime Minister\'s Youth Business & Agriculture Loan Scheme (PMYB&ALS), administered through the official portal at pmyp.gov.pk.',
              },
              {
                q: 'Why was the loan scheme temporarily paused in 2022?',
                a: 'In July 2022, the State Bank of Pakistan (SBP) temporarily paused disbursements during a federal macroeconomic review to restructure subsidy mechanisms and integrate microfinance/agriculture portfolios. The scheme was fully revived in December 2022 under PMYB&ALS with Tier 1 micro-loans made 100% interest-free (0% markup).',
              },
              {
                q: 'Which commercial banks and institutions are currently participating in the scheme?',
                a: 'Lead public and private banks include National Bank of Pakistan (NBP), Bank of Punjab (BOP), Bank of Khyber (BOK), Habib Bank Limited (HBL), United Bank Limited (UBL), Allied Bank (ABL), Askari Bank, Meezan Bank, Bank Alfalah, and approved microfinance institutions like Akhuwat and NRSP.',
              },
              {
                q: 'What are the current age limits and can IT/freelancers apply at age 18?',
                a: 'The standard eligible age bracket is 21 to 45 years for general business and agriculture loans. However, for IT/E-Commerce and digital startup ventures, the government lowered the minimum age requirement to 18 years (requiring at least matriculation or equivalent qualification).',
              },
              {
                q: 'Do I need to submit physical paperwork at a bank branch to apply?',
                a: 'No. Physical application forms are not accepted at bank counters. All applications must be submitted 100% online through the official government portal at pmyp.gov.pk. You will be assigned a trackable registration number and contacted by your chosen partner bank once preliminary credit scoring is approved.',
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
            { label: 'Prime Minister’s Youth Programme (PMYP) Official Portal', url: 'https://pmyp.gov.pk/' },
            { label: 'State Bank of Pakistan (SBP) PMYB&ALS Circulars', url: 'https://www.sbp.org.pk/' },
            { label: 'National Bank of Pakistan (NBP) PM Youth Loan Desk', url: 'https://www.nbp.com.pk/' },
            { label: 'Bank of Punjab (BOP) PM Youth Business & Agriculture Financing', url: 'https://www.bop.com.pk/' },
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
