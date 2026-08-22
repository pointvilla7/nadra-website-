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
  FileCheck,
  FileText,
  Calculator,
  Scale,
  Building,
  Check,
  AlertCircle,
  Receipt,
  UserCheck,
  Lock
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to File Income Tax Return for Salaried Individuals 2026 – FBR IRIS 2.0 Guide | Pakistan Info Hub',
  description:
    'Complete, step-by-step 2026 tax filing guide for salaried persons on FBR IRIS 2.0 (iris.fbr.gov.pk): Form 114(I) simplified declaration, July-June fiscal tax year, salary withholding tax deductions, wealth statement reconciliation (Section 116), and Active Taxpayer List (ATL) maintenance.',
  keywords: [
    'how to file income tax return salaried person FBR IRIS 2026',
    'FBR IRIS 2.0 simplified salaried return form 114 1',
    'wealth statement reconciliation section 116 FBR iris',
    'tax year 2026 deadline 30 September salaried Pakistan',
    'employer salary withholding tax certificate section 149',
    'FBR active taxpayer list ATL status filer benefits',
    'overseas Pakistani remote tax return filing iris',
    'iris fbr gov pk login CNIC username',
  ],
  openGraph: {
    title: 'How to File Salaried Income Tax Return 2026 – FBR IRIS 2.0 Guide',
    description:
      'Step-by-step manual for salaried employees in Pakistan: simplified Form 114(I), salary certificates, wealth reconciliation, and September 30 deadline.',
    url: 'https://www.pakistaninfohub.com/tax/how-to-file-income-tax-return-salaried-iris-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/tax/how-to-file-income-tax-return-salaried-iris-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Tax & FBR Services', item: 'https://www.pakistaninfohub.com/tax' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Salaried Tax Filing Guide 2026',
          item: 'https://www.pakistaninfohub.com/tax/how-to-file-income-tax-return-salaried-iris-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'How to File Income Tax Return for Salaried Persons on FBR IRIS 2.0: Step-by-Step 2026 Guide',
      description:
        'A comprehensive public tax guidance manual detailing the simplified Form 114(1) salaried declaration on FBR IRIS 2.0, fiscal year rules, employer tax certificates, and wealth statement reconciliation.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/tax/how-to-file-income-tax-return-salaried-iris-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I need to hire an expensive tax consultant or lawyer for a straightforward salaried return?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. If your income comes strictly from an employer salary (with tax already deducted under Section 149), filing on FBR IRIS 2.0 takes under 20 minutes using the simplified Form 114(1). All you need is your annual employer salary certificate, bank statements, and estimated living expenses.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does "Wealth Statement Reconciliation" mean and why is it the biggest sticking point?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under Section 116, FBR requires mathematical proof of your financial movement: (Closing Net Assets minus Opening Net Assets) MUST EQUAL (Total Inflows/Income minus Total Outflows/Living Expenses). If this mathematical formula does not balance to exactly 0.00, IRIS will flag an "Unreconciled Amount" and block final submission.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the exact tax period covered by Tax Year 2026 in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In Pakistan, the fiscal tax year runs from July 1 to June 30, not the calendar year. Tax Year 2026 covers all income earned, taxes deducted, assets purchased, and expenses incurred between July 1, 2025 and June 30, 2026. The statutory annual filing deadline is September 30, 2026.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Overseas Pakistanis file an income tax return remotely on FBR IRIS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Non-resident and overseas Pakistanis can log in to iris.fbr.gov.pk using their 13-digit CNIC/NICOP. Foreign-source salary earned abroad is generally exempt from Pakistani income tax under Section 51, but filing is essential to maintain Active Taxpayer List (ATL) status for domestic property, banking, and vehicle transactions.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if I miss the September 30 filing deadline?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Missing the statutory deadline results in your name being excluded or marked inactive on the Active Taxpayer List (ATL). Inactive status subjects you to double withholding tax rates (up to 100% higher) on banking cash withdrawals, vehicle token tax, dividend payments, and real estate purchases, alongside potential penalties under Section 182.',
          },
        },
      ],
    },
  ],
};

export default function SalariedTaxFilingGuidePage() {
  const breadcrumbs = [
    { nameEn: 'Tax & FBR Services', nameUr: 'ٹیکس اور ایف بی آر سروسز' },
    { nameEn: 'Salaried Tax Filing Guide', nameUr: 'تنخواہ دار افراد انکم ٹیکس ریٹرن فائلنگ 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="FBR IRIS 2.0 SALARIED FILER" labelUr="ایف بی آر انکم ٹیکس گائیڈ" variant="seal" />
            <VerifiedBadge textEn="INCOME TAX ORDINANCE 2001 VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            How to File Income Tax Return for Salaried Persons 2026: FBR IRIS 2.0 Step-by-Step
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              تنخواہ دار افراد کے لیے انکم ٹیکس گوشوارے جمع کروانے کا آسان آن لائن طریقہ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Filing your annual tax return as a salaried employee is straightforward once you understand how FBR&apos;s IRIS 2.0
            portal works. Master the simplified Form 114(I), understand the July-to-June tax cycle, calculate employer withholding
            deductions, and easily balance the Wealth Statement (Section 116) reconciliation without hiring an expensive lawyer.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="Who is Eligible for the Simplified Salaried Tax Return on FBR IRIS?"
          topicTitleUr="ایف بی آر پر تنخواہ دار افراد کا آسان فارم کون جمع کروا سکتا ہے؟"
          answerEn="Any individual whose salary constitutes more than 50% of their total taxable annual income can use the simplified Declaration Form 114(I) on FBR IRIS 2.0 (iris.fbr.gov.pk). Login with your 13-digit CNIC, declare gross salary and employer tax deductions, reconcile your Section 116 wealth statement to zero, and submit before September 30."
          answerUr="وہ تمام افراد جن کی سالانہ آمدن کا 50 فیصد یا اس سے زائد حصہ تنخواہ پر مشتمل ہو، وہ ایف بی آر پورٹل (iris.fbr.gov.pk) پر آسان فارم 114(I) جمع کروا سکتے ہیں۔ شناختی کارڈ سے لاگ ان کریں، تنخواہ اور کٹوتی کا اندراج کریں، ویلتھ اسٹیٹمنٹ ریکنسائل کریں اور 30 ستمبر سے پہلے فائل کریں۔"
        />

        {/* Section 1: Pakistan's Tax Year vs Calendar Year Clarification */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Understanding Pakistan&apos;s Tax Year (July to June Fiscal Cycle)
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 font-sans text-xs">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              The single most common confusion for first-time filers is mixing up the calendar year with the fiscal tax year:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white block">Tax Year 2026 Period</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Covers all financial transactions, salary earned, and tax deducted between <strong>July 1, 2025 and June 30, 2026</strong>.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-seal block">Statutory Filing Deadline</span>
                <p className="text-slate-600 dark:text-slate-300">
                  The standard annual deadline for salaried individuals and AOPs is <strong>September 30, 2026</strong>.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 block">Active Taxpayer List (ATL)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Filing on time automatically maintains your 100% active &quot;Filer&quot; status on FBR&apos;s centralized ATL roster.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Filing Workflow on IRIS 2.0 */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step: Filing Your Salaried Return on FBR IRIS 2.0
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Log in to IRIS</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Visit <code>iris.fbr.gov.pk</code>. Enter your 13-digit CNIC (no dashes) as Registration No. / Login and your password.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Select Form 114(I)</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Click <strong>Declaration → &quot;Salary Return for Individuals - Form 114(I)&quot;</strong>. Select Tax Year <strong>&quot;2026&quot;</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Enter Salary &amp; Deductions</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Enter your annual Gross Salary under Code 1000. Under <strong>Adjustable Tax (Section 149)</strong>, enter the tax deducted by your employer. Click Calculate.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs">4</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Wealth Statement (116)</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Declare your personal assets as of June 30, 2026. Complete the <strong>Reconciliation</strong> until the unreconciled amount displays exactly <code>0.00</code>. Submit!
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Wealth Statement Reconciliation Explained in Plain Language */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Wealth Statement (Section 116) Reconciliation Demystified
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 font-sans text-xs">
            <div className="flex items-center gap-2 text-doc-brass font-bold text-sm">
              <Lock className="w-5 h-5 text-emerald-400" />
              <span>Why IRIS Blocks Submission &amp; How to Fix It in 2 Minutes</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Section 116 of the Income Tax Ordinance requires every filer to prove where their wealth went. The FBR system enforces a strict mathematical rule:
            </p>
            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 font-mono text-xs text-emerald-300 space-y-1">
              <p>Change in Net Wealth = (Net Assets of Current Year) − (Net Assets of Previous Year)</p>
              <p>Accounting Balance = (Total Declared Income / Inflows) − (Personal Expenses / Outflows)</p>
              <p className="text-doc-brass font-bold">Unreconciled Amount MUST = 0.00</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-slate-300">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="font-bold text-emerald-400 block mb-1">If Unreconciled is POSITIVE (+):</span>
                <p>You declared more income/assets than you accounted for in expenses. Increase your &quot;Personal / Household Expenses (Code 7089)&quot; or bank balance to balance it out.</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="font-bold text-red-400 block mb-1">If Unreconciled is NEGATIVE (−):</span>
                <p>Your expenses or asset purchases exceeded your declared income. Verify your declared net salary or reduce overstated personal expenses.</p>
              </div>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 4: What Happens If You Do Not File */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Consequences of Non-Filing: Inactive ATL Penalties
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 space-y-2">
              <span className="font-bold text-red-800 dark:text-red-300 text-sm block">1. 100% Higher Banking Tax</span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Non-filers face double withholding tax on bank cash withdrawals exceeding Rs. 50,000 per day and higher tax deductions on profit on debt (bank savings).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 space-y-2">
              <span className="font-bold text-red-800 dark:text-red-300 text-sm block">2. Double Vehicle &amp; Property Tax</span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Purchasing, registering, or transferring motor vehicles and real estate properties incurs up to 200% higher Advance Income Tax for non-filers.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 space-y-2">
              <span className="font-bold text-red-800 dark:text-red-300 text-sm block">3. Statutory Fines (Section 182)</span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                FBR can issue automated penalty notices under Section 182 for late filing, requiring penalty payment plus late surcharge to reactivate ATL status.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Tax &amp; FBR Verification Tools on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/tax/fbr-active-taxpayer-status-helper-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Status Helper</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                FBR Active Taxpayer Status Checker →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Verify live ATL active standing via CNIC &amp; SMS.</p>
            </Link>

            <Link
              href="/tax/how-to-become-tax-filer-pakistan-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Registration</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                How to Become a Filer in Pakistan →
              </h3>
              <p className="text-xs text-slate-500 mt-1">NTN registration and profile creation on IRIS 2.0.</p>
            </Link>

            <Link
              href="/tax/withholding-tax-rates-filers-non-filers"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Tax Slabs</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Withholding Tax Slabs 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Complete rate comparison for filers vs non-filers.</p>
            </Link>
          </div>
        </section>

        {/* Section 6: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Salaried Tax Filing)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Do I need to hire an expensive tax consultant or lawyer for a straightforward salaried return?',
                a: 'No. If your income comes strictly from an employer salary (with tax already deducted under Section 149), filing on FBR IRIS 2.0 takes under 20 minutes using the simplified Form 114(1). All you need is your annual employer salary certificate, bank statements, and estimated living expenses.',
              },
              {
                q: 'What does "Wealth Statement Reconciliation" mean and why is it the biggest sticking point?',
                a: 'Under Section 116, FBR requires mathematical proof of your financial movement: (Closing Net Assets minus Opening Net Assets) MUST EQUAL (Total Inflows/Income minus Total Outflows/Living Expenses). If this mathematical formula does not balance to exactly 0.00, IRIS will flag an "Unreconciled Amount" and block final submission.',
              },
              {
                q: 'What is the exact tax period covered by Tax Year 2026 in Pakistan?',
                a: 'In Pakistan, the fiscal tax year runs from July 1 to June 30, not the calendar year. Tax Year 2026 covers all income earned, taxes deducted, assets purchased, and expenses incurred between July 1, 2025 and June 30, 2026. The statutory annual filing deadline is September 30, 2026.',
              },
              {
                q: 'Can Overseas Pakistanis file an income tax return remotely on FBR IRIS?',
                a: 'Yes. Non-resident and overseas Pakistanis can log in to iris.fbr.gov.pk using their 13-digit CNIC/NICOP. Foreign-source salary earned abroad is generally exempt from Pakistani income tax under Section 51, but filing is essential to maintain Active Taxpayer List (ATL) status for domestic property, banking, and vehicle transactions.',
              },
              {
                q: 'What happens if I miss the September 30 filing deadline?',
                a: 'Missing the statutory deadline results in your name being excluded or marked inactive on the Active Taxpayer List (ATL). Inactive status subjects you to double withholding tax rates (up to 100% higher) on banking cash withdrawals, vehicle token tax, dividend payments, and real estate purchases, alongside potential penalties under Section 182.',
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
            { label: 'Federal Board of Revenue (FBR) IRIS 2.0 Portal', url: 'https://iris.fbr.gov.pk/' },
            { label: 'Income Tax Ordinance 2001 (Sections 114, 116 & 149)', url: 'https://fbr.gov.pk/' },
            { label: 'FBR Active Taxpayer List (ATL) Inquiry System', url: 'https://e.fbr.gov.pk/' },
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
