import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { HelpCircle, ExternalLink, Scale, FileText, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Salaried Income Tax Calculator 2026-27 Pakistan – Finance Act Slabs | Pakistan Info Hub',
  description:
    'Instant client-side Income Tax Calculator for salaried individuals in Pakistan under the Finance Act 2026-27 (Tax Year 2027): Calculate monthly tax deduction, annual liability, effective rate, take-home pay, and progressive slab breakdown. 100% private, client-side only.',
  keywords: [
    'salaried income tax calculator Pakistan 2026 2027',
    'FBR salary tax calculator tax year 2027',
    'Finance Act 2026 salaried tax slabs Pakistan',
    'monthly salary tax deduction formula FBR',
    'tax free salary limit Pakistan 600000',
    'progressive income tax slabs salaried employees',
    'salaried take home pay calculator Pakistan',
  ],
  openGraph: {
    title: 'Salaried Income Tax Calculator 2026-27 Pakistan – Finance Act Slabs',
    description:
      'Real-time calculation of monthly tax withholding, annual tax liability, effective rate, and net take-home salary under Pakistan’s latest progressive tax slabs.',
    url: 'https://www.pakistaninfohub.com/tax/income-tax-calculator-salaried-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/tax/income-tax-calculator-salaried-2026' },
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
          name: 'Salaried Income Tax Calculator 2026',
          item: 'https://www.pakistaninfohub.com/tax/income-tax-calculator-salaried-2026',
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Pakistan Salaried Income Tax Calculator 2026-2027',
      description:
        'Client-side financial utility for estimating monthly tax withholding, annual tax liability, and net take-home pay under Pakistan’s Finance Act 2026-27 progressive slabs.',
      url: 'https://www.pakistaninfohub.com/tax/income-tax-calculator-salaried-2026',
      applicationCategory: 'FinancialApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is this calculator accurate for business or freelance income as well?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. This calculator is specifically configured for salaried individuals where salary constitutes more than 75% of total taxable income. Non-salaried individuals, sole proprietors, AOPs, and businesses are subject to different, higher tax slabs with a lower initial threshold and different rate progressions under the Income Tax Ordinance 2001.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if my employer already deducts income tax from my monthly salary?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your employer deducts tax at source under Section 149 based on this exact annual tax formula divided by 12. You can compare this tool’s estimated monthly deduction with your monthly pay slip. At year-end, you will declare these withholding deductions on FBR IRIS Form 114(I).',
          },
        },
        {
          '@type': 'Question',
          name: 'Does this calculation include the high-income surcharge on salaries above Rs. 10 million?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under the Finance Act 2026-27, the previous 9% surcharge on high-income salaried individuals earning over Rs. 10 million has been abolished, and the restructured top bracket applies 35% on income exceeding Rs. 7 million.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is any portion of my salary data stored or sent to any server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. This calculator operates 100% on your device (client-side JavaScript). None of your salary, deductions, or calculations are ever saved, tracked, or transmitted across the internet.',
          },
        },
      ],
    },
  ],
};

export default function SalariedIncomeTaxCalculatorPage() {
  const breadcrumbs = [
    { nameEn: 'Tax & FBR Services', nameUr: 'ٹیکس اور ایف بی آر سروسز' },
    { nameEn: 'Salaried Income Tax Calculator', nameUr: 'تنخواہ دار افراد انکم ٹیکس کیلکولیٹر 2026-27' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="CLIENT-SIDE REAL-TIME TAX CALCULATOR" labelUr="آن لائن ٹیکس کیلکولیٹر" variant="seal" />
            <VerifiedBadge textEn="FINANCE ACT 2026-27 COMPLIANT" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Salaried Income Tax Calculator 2026-27: Finance Act Slabs &amp; Take-Home Pay
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              تنخواہ دار ملازمین کے لیے انکم ٹیکس کیلکولیٹر: ماہانہ کٹوتی اور خالص تنخواہ کا حساب
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Calculate your exact monthly payroll tax deduction, annual liability, effective tax rate, and net take-home salary
            under Pakistan&apos;s latest restructured progressive tax slabs (Tax Year 2027). Runs 100% privately on your device.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is the Tax-Free Threshold and How is Salaried Tax Calculated in Pakistan?"
          topicTitleUr="پاکستان میں تنخواہ پر ٹیکس فری حد اور ٹیکس کا حساب کیسے لگایا جاتا ہے؟"
          answerEn="Under the Finance Act 2026-27, annual taxable salary up to Rs. 600,000 (Rs. 50,000/month) is 100% tax-free (0%). Income above Rs. 600,000 is taxed progressively across 8 brackets starting at 1%, up to 35% on income exceeding Rs. 7,000,000. The previous 9% surcharge on high earners has been abolished."
          answerUr="فنانس ایکٹ کے تحت سالانہ 6 لاکھ روپے (50 ہزار ماہانہ) تک کی تنخواہ مکمل ٹیکس فری (0%) ہے۔ 6 لاکھ سے زائد آمدن پر 1 فیصد سے لے کر 35 فیصد تک 8 مختلف سلیبس کے تحت ٹیکس لگتا ہے۔ 1 کروڑ سے زائد آمدن پر سابقہ 9 فیصد سرچارج ختم کر دیا گیا ہے۔"
        />

        {/* Interactive Calculator Mount */}
        <IncomeTaxCalculator />

        {/* Section 1: How the Progressive System Works */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Understanding Pakistan&apos;s Progressive Slab System
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 font-sans text-xs">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              A widespread misconception among employees is believing that entering a higher tax bracket means their entire salary is taxed at that higher rate. In reality, Pakistan uses a <strong>marginal progressive slab model</strong>:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white block">1. First Rs. 600,000</span>
                <p className="text-slate-600 dark:text-slate-300">Always taxed at 0%, regardless of whether you earn Rs. 800,000 or Rs. 10,000,000 annually.</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-seal block">2. Next Rs. 600,000 (to 1.2M)</span>
                <p className="text-slate-600 dark:text-slate-300">Only the portion between 600k and 1.2M is taxed at 1% (maximum Rs. 6,000 for this slice).</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 block">3. Higher Slices</span>
                <p className="text-slate-600 dark:text-slate-300">Each subsequent tranche of income is taxed only at its corresponding rate, keeping your overall effective rate much lower.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Complete Official Slabs Reference Table */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Official Salaried Tax Slabs (Finance Act 2026-27 / Tax Year 2027)
            </h2>
          </div>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-xs font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-[11px] font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Slab</th>
                  <th className="px-4 py-3 text-left">Annual Taxable Salary Range</th>
                  <th className="px-4 py-3 text-left">Official Tax Rate Formula</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 font-mono font-bold text-doc-seal">1</td>
                  <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Up to Rs. 600,000</td>
                  <td className="px-4 py-3 font-mono text-emerald-600 dark:text-emerald-400">0% (Tax-Free)</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 font-mono font-bold text-doc-seal">2</td>
                  <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Rs. 600,001 – Rs. 1,200,000</td>
                  <td className="px-4 py-3 font-mono text-slate-600 dark:text-slate-300">1% of amount exceeding Rs. 600,000</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 font-mono font-bold text-doc-seal">3</td>
                  <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Rs. 1,200,001 – Rs. 2,200,000</td>
                  <td className="px-4 py-3 font-mono text-slate-600 dark:text-slate-300">Rs. 6,000 + 11% of amount exceeding Rs. 1,200,000</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 font-mono font-bold text-doc-seal">4</td>
                  <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Rs. 2,200,001 – Rs. 3,200,000</td>
                  <td className="px-4 py-3 font-mono text-slate-600 dark:text-slate-300">Rs. 116,000 + 20% of amount exceeding Rs. 2,200,000</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 font-mono font-bold text-doc-seal">5</td>
                  <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Rs. 3,200,001 – Rs. 4,100,000</td>
                  <td className="px-4 py-3 font-mono text-slate-600 dark:text-slate-300">Rs. 316,000 + 25% of amount exceeding Rs. 3,200,000</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 font-mono font-bold text-doc-seal">6</td>
                  <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Rs. 4,100,001 – Rs. 5,600,000</td>
                  <td className="px-4 py-3 font-mono text-slate-600 dark:text-slate-300">Rs. 541,000 + 29% of amount exceeding Rs. 4,100,000</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 font-mono font-bold text-doc-seal">7</td>
                  <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Rs. 5,600,001 – Rs. 7,000,000</td>
                  <td className="px-4 py-3 font-mono text-slate-600 dark:text-slate-300">Rs. 976,000 + 32% of amount exceeding Rs. 5,600,000</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 font-mono font-bold text-doc-seal">8</td>
                  <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Above Rs. 7,000,000</td>
                  <td className="px-4 py-3 font-mono font-bold text-amber-600 dark:text-amber-400">Rs. 1,424,000 + 35% of amount exceeding Rs. 7,000,000</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 3: Related FBR Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Tax &amp; FBR Verification Tools on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/tax/how-to-file-income-tax-return-salaried-iris-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Filing Guide</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                How to File Salaried Return (IRIS 2.0) →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Step-by-step Form 114(I) and wealth statement reconciliation.</p>
            </Link>

            <Link
              href="/tax/fbr-active-taxpayer-status-helper-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Status Helper</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                FBR Active Taxpayer Status Checker →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check live ATL filer standing via CNIC &amp; SMS.</p>
            </Link>

            <Link
              href="/tax/withholding-tax-rates-filers-non-filers"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Tax Rates</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Withholding Tax Rates 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Compare banking, property, and vehicle tax for filers vs non-filers.</p>
            </Link>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Salaried Income Tax)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Is this calculator accurate for business or freelance income as well?',
                a: 'No. This calculator is specifically configured for salaried individuals where salary constitutes more than 75% of total taxable income. Non-salaried individuals, sole proprietors, AOPs, and businesses are subject to different, higher tax slabs with a lower initial threshold and different rate progressions under the Income Tax Ordinance 2001.',
              },
              {
                q: 'What if my employer already deducts income tax from my monthly salary?',
                a: 'Your employer deducts tax at source under Section 149 based on this exact annual tax formula divided by 12. You can compare this tool’s estimated monthly deduction with your monthly pay slip. At year-end, you will declare these withholding deductions on FBR IRIS Form 114(I).',
              },
              {
                q: 'Does this calculation include the high-income surcharge on salaries above Rs. 10 million?',
                a: 'Under the Finance Act 2026-27, the previous 9% surcharge on high-income salaried individuals earning over Rs. 10 million has been abolished, and the restructured top bracket applies 35% on income exceeding Rs. 7 million.',
              },
              {
                q: 'Is any portion of my salary data stored or sent to any server?',
                a: 'No. This calculator operates 100% on your device (client-side JavaScript). None of your salary, deductions, or calculations are ever saved, tracked, or transmitted across the internet.',
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
            { label: 'Federal Board of Revenue (FBR) Salient Features & Tax Slabs', url: 'https://fbr.gov.pk/' },
            { label: 'Income Tax Ordinance 2001 (First Schedule, Part I, Division I)', url: 'https://pakistancode.gov.pk/' },
            { label: 'FBR IRIS 2.0 E-Filing System', url: 'https://iris.fbr.gov.pk/' },
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
