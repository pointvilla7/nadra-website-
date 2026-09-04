import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  Calculator,
  Coins,
  Scale,
  Receipt,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Info,
  TrendingDown,
  Percent,
  Check,
  Building,
  ArrowRight,
  Sparkles,
  Calendar,
  Layers,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Income Tax on Salary Slabs & Calculator Pakistan 2026-27 | FBR Rates',
  description:
    'Complete guide to income tax on salary in Pakistan for FY2026-27 (Tax Year 2027): Official Finance Act 2026 salaried slabs, 0% tax-free threshold up to Rs. 600,000, interactive salary tax calculator, and progressive tax bracket mechanics.',
  keywords: [
    'income tax on salary',
    'income tax on salary in pakistan',
    'salary income tax calculator',
    'salary income tax slabs',
    'income tax exemption for salaried persons in pakistan',
    'fbr salary tax slabs 2026 27',
    'pakistan salary tax deduction formula',
    'finance act 2026 salaried slabs',
  ],
  openGraph: {
    title: 'Income Tax on Salary Slabs & Calculator Pakistan 2026-27 | FBR Rates',
    description:
      'Verified FBR tax slabs for salaried individuals for FY2026-27. Calculate your monthly tax deduction, annual liability, and net take-home salary.',
    url: 'https://www.pakistaninfohub.com/tax/income-tax-on-salary-slabs-calculator-pakistan-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/tax/income-tax-on-salary-slabs-calculator-pakistan-2026',
  },
};

const IncomeTaxCalculator = dynamic(
  () => import('@/components/IncomeTaxCalculator').then((m) => ({ default: m.IncomeTaxCalculator })),
  { ssr: false, loading: () => <div className="h-[520px] rounded-3xl bg-slate-100 dark:bg-slate-800 animate-pulse" /> }
);

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
          name: 'Income Tax on Salary Slabs & Calculator',
          item: 'https://www.pakistaninfohub.com/tax/income-tax-on-salary-slabs-calculator-pakistan-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Income Tax on Salary Slabs & Calculator Pakistan 2026-27: Finance Act Rates Explained',
      description:
        'Authoritative FBR tax guide for salaried individuals in Pakistan covering the FY2026-27 budget revisions, progressive slab formulas, 75% salary qualification rule, and client-side tax computation.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-04',
      dateModified: '2026-09-04',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/tax/income-tax-on-salary-slabs-calculator-pakistan-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Calculate Income Tax on Salary in Pakistan',
      description: 'Step-by-step progressive formula calculation for Pakistani salaried income under FBR rules.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Determine Annual Gross Taxable Salary',
          text: 'Sum your 12-month base pay and taxable allowances. Exclude tax-exempt medical allowance up to 10% of basic pay.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Identify Applicable Tax Slab',
          text: 'Compare your annual taxable figure against the 8 statutory FBR slabs for FY2026-27.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Calculate Base Tax Plus Progressive Rate',
          text: 'Take the fixed base tax for your slab and add the specified percentage applied strictly to the amount exceeding the slab threshold.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Compute Monthly Paycheck Withholding',
          text: 'Divide total annual tax liability by 12 to find the exact payroll deduction under Section 149.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What’s the current income tax slab for salaried persons?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For FY2026-27 (Tax Year 2027), annual salary up to Rs. 600,000 is 100% tax-free (0%). From Rs. 600,001 to Rs. 1,200,000, tax is 1% of the amount exceeding Rs. 600,000. Higher progressive brackets range from 11%, 20%, 25%, 29%, 32%, to a top rate of 35% on annual income exceeding Rs. 7,000,000.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I pay tax on my whole salary or just the amount above the threshold?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You pay tax strictly on the incremental portion exceeding each slab threshold, NOT your entire salary. For instance, if you earn Rs. 650,000 annually, you pay 1% tax only on the Rs. 50,000 above the Rs. 600,000 exemption limit—resulting in just Rs. 500 total tax for the entire year.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a separate slab for non-salaried income?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The Federal Board of Revenue maintains separate, steeper tax slabs for non-salaried individuals, sole proprietors, and AOPs. The salaried slabs apply exclusively if your salary income constitutes more than 75% of your total taxable income during the fiscal year.',
          },
        },
        {
          '@type': 'Question',
          name: 'What counts as "salary income" for this calculation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Salary income encompasses base salary, bonuses, commissions, house rent allowance, utility allowances, and perquisites. Standard medical reimbursement or allowance up to 10% of basic pay is exempt from tax under Clause 139, Part I of the Second Schedule to the Income Tax Ordinance.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is tax actually deducted — monthly or yearly?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Employers are legally mandated under Section 149 of the Income Tax Ordinance 2001 to deduct tax on a monthly pay-as-you-earn (PAYE) basis. The employer estimates your total annual taxable salary, calculates annual tax liability, and withholds one-twelfth (1/12th) each month.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if my income changes mid-year?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If you receive an increment, promotion bonus, or switch employers mid-year, your employer recalculates your projected annual income for the full fiscal year and adjusts the remaining monthly deductions accordingly to ensure accurate end-of-year tax settlement.',
          },
        },
      ],
    },
  ],
};

export default function IncomeTaxOnSalaryPage() {
  const breadcrumbs = [
    { nameEn: 'Tax & FBR Services', nameUr: 'ٹیکس اور ایف بی آر سروسز', url: '/tax' },
    { nameEn: 'Income Tax on Salary Slabs 2026-27', nameUr: 'تنخواہ ٹیکس سلیبز 2026-27' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="FBR FINANCE ACT 2026" labelUr="فنانس ایکٹ سلیبز" variant="gold" />
            <VerifiedBadge textEn="TAX YEAR 2027 ENFORCED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Income Tax on Salary in Pakistan 2026-27: Slabs, Progressive Rules &amp; Calculator
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پاکستان میں تنخواہ پر انکم ٹیکس سلیبز اور کیلکولیٹر برائے مالی سال 2026-27
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Authoritative, up-to-date guidance on salary taxation under the enacted <strong>Finance Act 2026 (Tax Year 2027)</strong>.
            Review the official restructured progressive slabs, understand the 75% salary qualification rule, debunk the common
            &quot;whole salary taxed at top rate&quot; myth with worked numerical examples, and compute your exact monthly paycheck
            withholding using our client-side calculator.
          </p>
        </header>

        {/* Direct Answer Box (51 words - within 40-60 words) */}
        <DirectAnswerBox
          topicTitleEn="What Are the Current Salaried Income Tax Slabs in Pakistan for FY2026-27?"
          topicTitleUr="مالی سال 2026-27 کے لیے تنخواہ پر انکم ٹیکس سلیبز کیا ہیں؟"
          answerEn="For FY2026-27 (effective 1 July 2026 to 30 June 2027), the income tax exemption limit for salaried individuals in Pakistan is Rs. 600,000 per annum (Rs. 50,000 monthly). Under the Finance Act 2026, revised progressive tax rates range from 1% to a top rate of 35% across eight restructured salary slabs."
          answerUr="مالی سال 2026-27 (یکم جولائی 2026 تا 30 جون 2027) کے لیے تنخواہ دار ملازمین کے لیے سالانہ 6 لاکھ روپے (50 ہزار روپے ماہانہ) تک کی آمدن انکم ٹیکس سے مکمل مستثنیٰ ہے۔ فنانس ایکٹ 2026 کے تحت تنخواہ پر ٹیکس سلیبز 1 فیصد سے شروع ہو کر زیادہ سے زیادہ 35 فیصد تک 8 مختلف کیٹیگریز میں لاگو ہیں۔"
        />

        {/* Tax Year Notice & Background Context */}
        <section className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 space-y-2 text-xs sm:text-sm font-sans">
          <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-bold text-sm sm:text-base">
            <Calendar className="w-5 h-5 text-amber-700 shrink-0" />
            <span>CRITICAL TAX-YEAR TIMING: Enacted FY2026-27 Rates (Tax Year 2027)</span>
          </div>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            In Pakistan, tax years run from <strong>July 1 to June 30</strong>. The rates detailed on this page represent the final,
            enacted statutory rates under the <strong>Finance Act 2026</strong>, applying to all salary earned between{' '}
            <strong>1 July 2026 and 30 June 2027</strong>.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong>What Changed from FY2025-26?</strong> While the tax-free baseline remained at Rs. 600,000, the federal budget
            introduced middle-bracket relief: the Rs. 2.2M–3.2M bracket was reduced from 23% to <strong>20%</strong>, the Rs. 3.2M–4.1M bracket
            from 30% to <strong>25%</strong>, and a new relief tier was established up to Rs. 5.6M at <strong>29%</strong> (averting the previous abrupt jump to 35%).
            Furthermore, the super-surcharge on high-earning salaried individuals was withdrawn.
          </p>
        </section>

        {/* Section 1: Official FY2026-27 Slabs Table */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Receipt className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Official Salaried Income Tax Slabs (FY2026-27 / Tax Year 2027)
            </h2>
          </div>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[620px]">
                <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 text-left">Slab</th>
                    <th className="px-4 py-3 text-left">Annual Taxable Salary (PKR)</th>
                    <th className="px-4 py-3 text-left">Monthly Equivalent</th>
                    <th className="px-4 py-3 text-left bg-doc-brass/20 text-doc-brass">FY2026-27 Statutory Tax Rate</th>
                    <th className="px-4 py-3 text-left">Previous FY25-26 Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="bg-emerald-50/40 dark:bg-emerald-950/20 hover:bg-emerald-100/40 dark:hover:bg-emerald-900/30 transition">
                    <td className="px-4 py-3 font-serif font-bold text-emerald-900 dark:text-emerald-200 text-xs">1</td>
                    <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-800 dark:text-emerald-300">Up to Rs. 600,000</td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">Up to Rs. 50,000</td>
                    <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">0% (Tax-Free Exemption)</td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-500">0% (Unchanged)</td>
                  </tr>

                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">2</td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-200">Rs. 600,001 – 1,200,000</td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">Rs. 50,001 – 100,000</td>
                    <td className="px-4 py-3 text-xs font-mono font-bold text-amber-800 dark:text-amber-300">1% of amount exceeding Rs. 600,000</td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-500">1% (Unchanged)</td>
                  </tr>

                  <tr className="bg-slate-50/60 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">3</td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-200">Rs. 1,200,001 – 2,200,000</td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">Rs. 100,001 – 183,333</td>
                    <td className="px-4 py-3 text-xs font-mono font-bold text-amber-800 dark:text-amber-300">Rs. 6,000 + 11% of excess above 1.2M</td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-500">Rs. 6,000 + 11%</td>
                  </tr>

                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">4</td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-200">Rs. 2,200,001 – 3,200,000</td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">Rs. 183,334 – 266,667</td>
                    <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">Rs. 116,000 + 20% of excess above 2.2M</td>
                    <td className="px-4 py-3 text-xs font-mono text-red-600 dark:text-red-400">Rs. 116,000 + 23% (Reduced)</td>
                  </tr>

                  <tr className="bg-slate-50/60 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">5</td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-200">Rs. 3,200,001 – 4,100,000</td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">Rs. 266,668 – 341,667</td>
                    <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">Rs. 316,000 + 25% of excess above 3.2M</td>
                    <td className="px-4 py-3 text-xs font-mono text-red-600 dark:text-red-400">Rs. 346,000 + 30% (Reduced)</td>
                  </tr>

                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">6</td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-200">Rs. 4,100,001 – 5,600,000</td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">Rs. 341,668 – 466,667</td>
                    <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">Rs. 541,000 + 29% of excess above 4.1M</td>
                    <td className="px-4 py-3 text-xs font-mono text-red-600 dark:text-red-400">35% Top Bracket (New Relief Tier)</td>
                  </tr>

                  <tr className="bg-slate-50/60 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">7</td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-200">Rs. 5,600,001 – 7,000,000</td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">Rs. 466,668 – 583,333</td>
                    <td className="px-4 py-3 text-xs font-mono font-bold text-amber-800 dark:text-amber-300">Rs. 976,000 + 32% of excess above 5.6M</td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-500">35% Surcharge Tier</td>
                  </tr>

                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">8</td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-200">Above Rs. 7,000,000</td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">Above Rs. 583,333</td>
                    <td className="px-4 py-3 text-xs font-mono font-bold text-red-700 dark:text-red-400">Rs. 1,424,000 + 35% of excess above 7M</td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-500">35% + 9% Surcharge</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 2: Interactive Salary Tax Calculator Component */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Interactive Salary Income Tax Calculator (FY2026-27)
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Calculate your exact monthly tax deduction, effective tax percentage, and net take-home pay. All calculations run
            100% privately in your browser with zero data transmitted to external servers.
          </p>

          <IncomeTaxCalculator />
        </section>

        {/* Section 3: Progressive Tax Mechanics & Worked Example */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              How Progressive Taxation Works (Debunking the &quot;Whole Salary&quot; Misconception)
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs sm:text-sm font-sans">
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                The Most Common Salary Tax Myth in Pakistan
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Many employees dread receiving a salary raise, believing: <em>&quot;If my salary crosses Rs. 1,200,000, FBR will tax my whole salary at 11%, leaving me with less money than before.&quot;</em>
              </p>
              <p className="text-emerald-700 dark:text-emerald-400 font-bold">
                This is mathematically false. Pakistan uses a progressive marginal tax system.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Moving into a higher bracket only applies the higher tax percentage to the <strong>extra amount above the threshold</strong>.
                Your previous income chunks continue to be taxed at 0% and 1%. A raise will <em>always</em> increase your net take-home pay.
              </p>
            </div>

            {/* Worked Example Card */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
              <span className="font-mono text-xs text-doc-brass font-bold uppercase block">
                Worked Numerical Example: Annual Salary of Rs. 2,500,000 (~Rs. 208,333/month)
              </span>

              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-700">
                  <span>First Rs. 600,000 (0% Exemption):</span>
                  <span className="font-bold text-emerald-600">Rs. 0</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-700">
                  <span>Next Rs. 600,000 (Rs. 600k to 1.2M @ 1%):</span>
                  <span className="font-bold">Rs. 6,000</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-700">
                  <span>Next Rs. 1,000,000 (Rs. 1.2M to 2.2M @ 11%):</span>
                  <span className="font-bold">Rs. 110,000</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-700">
                  <span>Remaining Rs. 300,000 (Rs. 2.2M to 2.5M @ 20%):</span>
                  <span className="font-bold">Rs. 60,000</span>
                </div>
                <div className="flex justify-between py-1.5 font-bold text-sm bg-doc-ink/5 dark:bg-slate-700/50 px-2 rounded">
                  <span>Total Annual Tax Liability:</span>
                  <span className="text-doc-seal">Rs. 176,000</span>
                </div>
                <div className="flex justify-between py-1 text-xs text-slate-500">
                  <span>Monthly Payroll Withholding (Rs. 176,000 / 12):</span>
                  <span className="font-bold text-slate-700 dark:text-slate-300">Rs. 14,667 / month</span>
                </div>
                <div className="flex justify-between py-1 text-xs text-emerald-700 dark:text-emerald-400 font-bold">
                  <span>Actual Effective Tax Rate:</span>
                  <span>7.04% of total salary (NOT 20%)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Who Qualifies as a Salaried Individual (The 75% Rule) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Building className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Who Qualifies as a Salaried Person? (The Statutory 75% Threshold)
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 font-sans text-xs sm:text-sm">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Under Division I, Part I of the First Schedule to the Income Tax Ordinance 2001, an individual taxpayer is classified
              as a <strong>&quot;Salaried Individual&quot;</strong> only if:
            </p>
            <div className="p-4 rounded-xl bg-doc-brass/10 border border-doc-brass/30 text-amber-900 dark:text-amber-200 font-medium">
              Salary income constitutes <strong>more than 75%</strong> of the individual&apos;s total taxable income for the tax year.
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>What if you earn other income?</strong> If you have freelance earnings, rental income, or business profits that exceed
              25% of your total earnings, you are reclassified as a <strong>&quot;Non-Salaried / Business Individual&quot;</strong>. Non-salaried
              taxpayers do not enjoy the lower 1% and 11% rates; their brackets jump much faster, reaching a 15% rate on income above Rs. 600,000
              and a maximum 45% top rate.
            </p>
          </div>
        </section>

        {/* Section 5: Monthly Payroll Deductions & Mid-Year Changes (Section 149) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Payroll Withholding Under Section 149 &amp; Mid-Year Salary Changes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">How Your Employer Deducts Tax</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Under Section 149 of the Income Tax Ordinance 2001, your employer acts as a withholding agent. At the start of the fiscal
                year, the payroll department projects your expected 12-month earnings, applies the annual slab formula, and deducts 1/12th
                from your pay slip each month.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">What Happens if Your Pay Changes Mid-Year?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                If you receive an increment, annual performance bonus, or switch jobs midway through the year, your employer recalculates
                the projected annual total. The difference in tax is averaged over the remaining months of the fiscal year so that you
                neither overpay nor underpay by June 30.
              </p>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 6: Cross-Linking to Related Guides */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Related FBR Tax &amp; Wealth Services on Pakistan Info Hub
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/tax/how-to-file-income-tax-return-salaried-iris-2026"
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Filing Guide</span>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  File Return on Iris 2.0 →
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Step-by-step salaried return filing, wealth reconciliation &amp; salary certificate submission.
                </p>
              </div>
              <span className="text-xs font-semibold text-doc-brass mt-3 inline-block">Filing Guide →</span>
            </Link>

            <Link
              href="/tax/fbr-active-taxpayer-status-helper-2026"
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">ATL Inquiry</span>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  FBR Active Taxpayer Status →
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Verify your active filer standing on the Active Taxpayer List (ATL) by CNIC.
                </p>
              </div>
              <span className="text-xs font-semibold text-doc-brass mt-3 inline-block">Check Filer Status →</span>
            </Link>

            <Link
              href="/tax/how-to-become-tax-filer-pakistan-2026"
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Registration</span>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  How to Become a Filer →
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Online NTN registration and profile creation for salaried individuals.
                </p>
              </div>
              <span className="text-xs font-semibold text-doc-brass mt-3 inline-block">NTN Guide →</span>
            </Link>

            <Link
              href="/tax/withholding-tax-rates-filers-non-filers"
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">WHT Rates</span>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  Withholding Tax Slabs 2026 →
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Complete rate comparison for filers vs non-filers on banking, property &amp; vehicles.
                </p>
              </div>
              <span className="text-xs font-semibold text-doc-brass mt-3 inline-block">View WHT Rates →</span>
            </Link>
          </div>
        </section>

        {/* Section 7: Frequently Asked Questions */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Income Tax on Salary)
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'What’s the current income tax slab for salaried persons?',
                a: 'For FY2026-27 (Tax Year 2027), annual salary up to Rs. 600,000 is 100% tax-free (0%). From Rs. 600,001 to Rs. 1,200,000, tax is 1% of the amount exceeding Rs. 600,000. Higher progressive brackets range from 11%, 20%, 25%, 29%, 32%, to a top rate of 35% on annual income exceeding Rs. 7,000,000.',
              },
              {
                q: 'Do I pay tax on my whole salary or just the amount above the threshold?',
                a: 'You pay tax strictly on the incremental portion exceeding each slab threshold, NOT your entire salary. For instance, if you earn Rs. 650,000 annually, you pay 1% tax only on the Rs. 50,000 above the Rs. 600,000 exemption limit—resulting in just Rs. 500 total tax for the entire year.',
              },
              {
                q: 'Is there a separate slab for non-salaried income?',
                a: 'Yes. The Federal Board of Revenue maintains separate, steeper tax slabs for non-salaried individuals, sole proprietors, and AOPs. The salaried slabs apply exclusively if your salary income constitutes more than 75% of your total taxable income during the fiscal year.',
              },
              {
                q: 'What counts as "salary income" for this calculation?',
                a: 'Salary income encompasses base salary, bonuses, commissions, house rent allowance, utility allowances, and perquisites. Standard medical reimbursement or allowance up to 10% of basic pay is exempt from tax under Clause 139, Part I of the Second Schedule to the Income Tax Ordinance.',
              },
              {
                q: 'How is tax actually deducted — monthly or yearly?',
                a: 'Employers are legally mandated under Section 149 of the Income Tax Ordinance 2001 to deduct tax on a monthly pay-as-you-earn (PAYE) basis. The employer estimates your total annual taxable salary, calculates annual tax liability, and withholds one-twelfth (1/12th) each month.',
              },
              {
                q: 'What if my income changes mid-year?',
                a: 'If you receive an increment, promotion bonus, or switch employers mid-year, your employer recalculates your projected annual income for the full fiscal year and adjusts the remaining monthly deductions accordingly to ensure accurate end-of-year tax settlement.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="doc-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-doc-brass shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Official Sources Cited */}
        <section className="text-xs text-slate-500 dark:text-slate-400 font-sans space-y-2 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-300">Official Government Tax Statutes Verified:</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2">
            {[
              { label: 'Federal Board of Revenue (FBR) Official Portal', url: 'https://fbr.gov.pk/' },
              { label: 'FBR IRIS 2.0 Tax Filing System', url: 'https://iris.fbr.gov.pk/' },
              { label: 'Finance Act 2026 Gazette of Pakistan', url: 'https://fbr.gov.pk/' },
            ].map((src) => (
              <a
                key={src.url}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-doc-seal transition"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{src.label}:</span>
                <span className="font-mono underline">{src.url}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
