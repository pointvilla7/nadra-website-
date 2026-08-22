'use client';

import React, { useState, useMemo } from 'react';
import {
  Calculator,
  Coins,
  Receipt,
  Scale,
  Sparkles,
  TrendingDown,
  Info,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Percent,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import Link from 'next/link';

interface SlabBreakdown {
  slabNumber: number;
  rangeEn: string;
  rangeUr: string;
  rateLabel: string;
  taxableInSlab: number;
  taxForSlab: number;
}

export function IncomeTaxCalculator() {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const [salaryMode, setSalaryMode] = useState<'monthly' | 'annual'>('monthly');
  const [salaryInput, setSalaryInput] = useState<string>('200000');
  const [deductionsInput, setDeductionsInput] = useState<string>('0');

  const presets = [
    { labelEn: 'Rs. 50k / mo', labelUr: '50 ہزار / ماہ', monthly: 50000 },
    { labelEn: 'Rs. 100k / mo', labelUr: '1 لاکھ / ماہ', monthly: 100000 },
    { labelEn: 'Rs. 150k / mo', labelUr: '1.5 لاکھ / ماہ', monthly: 150000 },
    { labelEn: 'Rs. 200k / mo', labelUr: '2 لاکھ / ماہ', monthly: 200000 },
    { labelEn: 'Rs. 350k / mo', labelUr: '3.5 لاکھ / ماہ', monthly: 350000 },
    { labelEn: 'Rs. 500k / mo', labelUr: '5 لاکھ / ماہ', monthly: 500000 },
  ];

  const calculation = useMemo(() => {
    const rawVal = parseFloat(salaryInput.replace(/,/g, '')) || 0;
    const deductions = parseFloat(deductionsInput.replace(/,/g, '')) || 0;

    const annualGross = salaryMode === 'monthly' ? rawVal * 12 : rawVal;
    const monthlyGross = salaryMode === 'monthly' ? rawVal : rawVal / 12;

    const annualTaxable = Math.max(0, annualGross - (salaryMode === 'monthly' ? deductions * 12 : deductions));
    const monthlyTaxable = annualTaxable / 12;

    let totalAnnualTax = 0;
    const slabs: SlabBreakdown[] = [];

    // Slab 1: Up to 600,000 (0%)
    const slab1Portion = Math.min(annualTaxable, 600000);
    slabs.push({
      slabNumber: 1,
      rangeEn: 'Up to Rs. 600,000',
      rangeUr: '6 لاکھ روپے تک',
      rateLabel: '0%',
      taxableInSlab: slab1Portion,
      taxForSlab: 0,
    });

    // Slab 2: 600,001 to 1,200,000 (1%)
    if (annualTaxable > 600000) {
      const slab2Portion = Math.min(annualTaxable - 600000, 600000);
      const tax2 = slab2Portion * 0.01;
      totalAnnualTax += tax2;
      slabs.push({
        slabNumber: 2,
        rangeEn: 'Rs. 600,001 – 1,200,000',
        rangeUr: '6 لاکھ تا 12 لاکھ',
        rateLabel: '1%',
        taxableInSlab: slab2Portion,
        taxForSlab: tax2,
      });
    }

    // Slab 3: 1,200,001 to 2,200,000 (11%)
    if (annualTaxable > 1200000) {
      const slab3Portion = Math.min(annualTaxable - 1200000, 1000000);
      const tax3 = slab3Portion * 0.11;
      totalAnnualTax += tax3;
      slabs.push({
        slabNumber: 3,
        rangeEn: 'Rs. 1,200,001 – 2,200,000',
        rangeUr: '12 لاکھ تا 22 لاکھ',
        rateLabel: '11%',
        taxableInSlab: slab3Portion,
        taxForSlab: tax3,
      });
    }

    // Slab 4: 2,200,001 to 3,200,000 (20%)
    if (annualTaxable > 2200000) {
      const slab4Portion = Math.min(annualTaxable - 2200000, 1000000);
      const tax4 = slab4Portion * 0.20;
      totalAnnualTax += tax4;
      slabs.push({
        slabNumber: 4,
        rangeEn: 'Rs. 2,200,001 – 3,200,000',
        rangeUr: '22 لاکھ تا 32 لاکھ',
        rateLabel: '20%',
        taxableInSlab: slab4Portion,
        taxForSlab: tax4,
      });
    }

    // Slab 5: 3,200,001 to 4,100,000 (25%)
    if (annualTaxable > 3200000) {
      const slab5Portion = Math.min(annualTaxable - 3200000, 900000);
      const tax5 = slab5Portion * 0.25;
      totalAnnualTax += tax5;
      slabs.push({
        slabNumber: 5,
        rangeEn: 'Rs. 3,200,001 – 4,100,000',
        rangeUr: '32 لاکھ تا 41 لاکھ',
        rateLabel: '25%',
        taxableInSlab: slab5Portion,
        taxForSlab: tax5,
      });
    }

    // Slab 6: 4,100,001 to 5,600,000 (29%)
    if (annualTaxable > 4100000) {
      const slab6Portion = Math.min(annualTaxable - 4100000, 1500000);
      const tax6 = slab6Portion * 0.29;
      totalAnnualTax += tax6;
      slabs.push({
        slabNumber: 6,
        rangeEn: 'Rs. 4,100,001 – 5,600,000',
        rangeUr: '41 لاکھ تا 56 لاکھ',
        rateLabel: '29%',
        taxableInSlab: slab6Portion,
        taxForSlab: tax6,
      });
    }

    // Slab 7: 5,600,001 to 7,000,000 (32%)
    if (annualTaxable > 5600000) {
      const slab7Portion = Math.min(annualTaxable - 5600000, 1400000);
      const tax7 = slab7Portion * 0.32;
      totalAnnualTax += tax7;
      slabs.push({
        slabNumber: 7,
        rangeEn: 'Rs. 5,600,001 – 7,000,000',
        rangeUr: '56 لاکھ تا 70 لاکھ',
        rateLabel: '32%',
        taxableInSlab: slab7Portion,
        taxForSlab: tax7,
      });
    }

    // Slab 8: Above 7,000,000 (35%)
    if (annualTaxable > 7000000) {
      const slab8Portion = annualTaxable - 7000000;
      const tax8 = slab8Portion * 0.35;
      totalAnnualTax += tax8;
      slabs.push({
        slabNumber: 8,
        rangeEn: 'Above Rs. 7,000,000',
        rangeUr: '70 لاکھ روپے سے زائد',
        rateLabel: '35%',
        taxableInSlab: slab8Portion,
        taxForSlab: tax8,
      });
    }

    const monthlyTax = totalAnnualTax / 12;
    const effectiveRate = annualGross > 0 ? (totalAnnualTax / annualGross) * 100 : 0;
    const annualTakeHome = annualGross - totalAnnualTax;
    const monthlyTakeHome = monthlyGross - monthlyTax;

    return {
      annualGross,
      monthlyGross,
      annualTaxable,
      monthlyTaxable,
      totalAnnualTax,
      monthlyTax,
      effectiveRate,
      annualTakeHome,
      monthlyTakeHome,
      slabs,
    };
  }, [salaryMode, salaryInput, deductionsInput]);

  const formatPKR = (val: number) => {
    return Math.round(val).toLocaleString('en-PK');
  };

  return (
    <div className="doc-card p-5 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <InteractiveToolBadge labelEn="FINANCE ACT 2026-27 SLABS" labelUr="فنانس ایکٹ ٹیکس سلیبس" variant="seal" />
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              Tax Year 2027 Live
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-doc-ink dark:text-white">
            {isUrdu ? 'تنخواہ دار افراد انکم ٹیکس کیلکولیٹر' : 'Salaried Income Tax Calculator'}
          </h2>
        </div>

        {/* Mode Toggle */}
        <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
          <button
            type="button"
            onClick={() => setSalaryMode('monthly')}
            className={`min-h-[44px] px-4 py-2 text-xs font-bold rounded-lg transition ${
              salaryMode === 'monthly'
                ? 'bg-doc-ink text-white shadow'
                : 'text-slate-600 dark:text-slate-400 hover:text-doc-ink'
            }`}
          >
            {isUrdu ? 'ماہانہ تنخواہ' : 'Monthly Salary'}
          </button>
          <button
            type="button"
            onClick={() => setSalaryMode('annual')}
            className={`min-h-[44px] px-4 py-2 text-xs font-bold rounded-lg transition ${
              salaryMode === 'annual'
                ? 'bg-doc-ink text-white shadow'
                : 'text-slate-600 dark:text-slate-400 hover:text-doc-ink'
            }`}
          >
            {isUrdu ? 'سالانہ تنخواہ' : 'Annual Salary'}
          </button>
        </div>
      </div>

      {/* Input Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
            {salaryMode === 'monthly'
              ? (isUrdu ? 'ماہانہ مجموعی تنخواہ (Gross Salary)' : 'Monthly Gross Salary (PKR)')
              : (isUrdu ? 'سالانہ مجموعی تنخواہ (Gross Salary)' : 'Annual Gross Salary (PKR)')}
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-mono font-bold text-sm">
              Rs.
            </span>
            <input
              type="text"
              inputMode="numeric"
              value={salaryInput}
              onChange={(e) => setSalaryInput(e.target.value.replace(/[^0-9]/g, ''))}
              placeholder="e.g. 200000"
              className="w-full min-h-[48px] pl-12 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-doc-ink dark:text-white font-mono font-bold text-lg focus:outline-none focus:ring-2 focus:ring-doc-brass"
            />
          </div>

          {/* Presets */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {presets.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setSalaryMode('monthly');
                  setSalaryInput(preset.monthly.toString());
                }}
                className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 text-slate-700 dark:text-slate-300 transition-all duration-150"
              >
                {isUrdu ? preset.labelUr : preset.labelEn}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
              {salaryMode === 'monthly'
                ? (isUrdu ? 'ماہانہ ٹیکس چھوٹ / کٹوتیاں (اختیاری)' : 'Monthly Deductions / Credits (Optional)')
                : (isUrdu ? 'سالانہ ٹیکس چھوٹ / کٹوتیاں (اختیاری)' : 'Annual Deductions / Credits (Optional)')}
            </label>
            <span className="text-[10px] text-slate-400 font-sans">Section 61-63</span>
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-mono font-bold text-sm">
              Rs.
            </span>
            <input
              type="text"
              inputMode="numeric"
              value={deductionsInput}
              onChange={(e) => setDeductionsInput(e.target.value.replace(/[^0-9]/g, ''))}
              placeholder="e.g. 0"
              className="w-full min-h-[48px] pl-12 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-doc-ink dark:text-white font-mono font-bold text-lg focus:outline-none focus:ring-2 focus:ring-doc-brass transition"
            />
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
            {isUrdu
              ? 'زکوٰۃ، ڈونیشنز، یا انشورنس پریمیم کی کٹوتی جو قابل ٹیکس آمدن کو کم کرتی ہے۔'
              : 'Allowable deductions like Zakat paid, charitable donations under Sec 61, or pension contributions.'}
          </p>
        </div>
      </div>

      {/* Summary Highlight Box */}
      <div key={salaryInput + deductionsInput} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 animate-resultPopIn">
        <div className="space-y-1">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            {isUrdu ? 'ماہانہ ٹیکس کٹوتی' : 'Monthly Tax Deduction'}
          </span>
          <div className="text-2xl sm:text-3xl font-serif font-extrabold text-amber-400 font-mono">
            Rs. {formatPKR(calculation.monthlyTax)}
          </div>
          <span className="text-[11px] text-slate-400 font-sans block">
            {isUrdu ? 'تنخواہ سے ماہانہ منہا رقم' : 'Est. payroll withholding'}
          </span>
        </div>

        <div className="space-y-1">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            {isUrdu ? 'سالانہ کل ٹیکس' : 'Total Annual Tax'}
          </span>
          <div className="text-2xl sm:text-3xl font-serif font-extrabold text-white font-mono">
            Rs. {formatPKR(calculation.totalAnnualTax)}
          </div>
          <span className="text-[11px] text-slate-400 font-sans block">
            {isUrdu ? 'ٹیکس سال 2027 کی کل واجب الادا رقم' : 'Full year liability (TY 2027)'}
          </span>
        </div>

        <div className="space-y-1">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            {isUrdu ? 'مؤثر ٹیکس ریٹ' : 'Effective Tax Rate'}
          </span>
          <div className="text-2xl sm:text-3xl font-serif font-extrabold text-emerald-400 font-mono">
            {calculation.effectiveRate.toFixed(2)}%
          </div>
          <span className="text-[11px] text-slate-400 font-sans block">
            {isUrdu ? 'مجموعی تنخواہ کا فیصد' : 'Of total gross earnings'}
          </span>
        </div>

        <div className="space-y-1">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            {isUrdu ? 'ماہانہ خالص تنخواہ (Take-Home)' : 'Monthly Take-Home Pay'}
          </span>
          <div className="text-2xl sm:text-3xl font-serif font-extrabold text-emerald-300 font-mono">
            Rs. {formatPKR(calculation.monthlyTakeHome)}
          </div>
          <span className="text-[11px] text-slate-400 font-sans block">
            {isUrdu ? `سالانہ: Rs. ${formatPKR(calculation.annualTakeHome)}` : `Annual: Rs. ${formatPKR(calculation.annualTakeHome)}`}
          </span>
        </div>
      </div>

      {/* Progressive Slab Breakdown Table */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-doc-brass" />
          <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
            {isUrdu ? 'ترقی پسند سلیب کے مطابق ٹیکس کا تفصیلی حساب (Progressive Slabs)' : 'Progressive Tax Slab Breakdown'}
          </h3>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          {isUrdu
            ? 'پاکستان میں پروگریسو ٹیکس سسٹم لاگو ہے۔ آپ کی پوری تنخواہ پر سب سے اونچا ریٹ نہیں لگتا بلکہ ہر سلیب کے اندر موجود رقم پر الگ ریٹ لاگو ہوتا ہے:'
            : 'Pakistan enforces a progressive bracket system. Your entire salary is not taxed at the highest bracket rate; only the portion falling within each slab is taxed at that slab’s specific rate:'}
        </p>

        <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          {/* Mobile Swipe Hint */}
          <div className="md:hidden flex items-center justify-between px-3 py-1.5 bg-doc-ink/5 dark:bg-slate-800/60 text-[11px] font-mono text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
            <span className="flex items-center gap-1.5">
              <ArrowRight className="w-3.5 h-3.5 text-doc-brass" />
              <span>{isUrdu ? 'مکمل سلیب تفصیلات کے لیے سکرول کریں' : 'Swipe sideways to view all slabs'}</span>
            </span>
            <span className="text-[10px] text-slate-400">5 Columns</span>
          </div>

          <div className="table-scroll-container">
            <table className="w-full text-xs font-sans min-w-[560px]">
              <thead className="bg-doc-ink text-white text-[11px] font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left min-w-[80px]">Slab</th>
                  <th className="px-4 py-3 text-left min-w-[150px]">{isUrdu ? 'سلیب کی حد' : 'Income Range (PKR)'}</th>
                  <th className="px-4 py-3 text-left min-w-[90px]">{isUrdu ? 'ٹیکس ریٹ' : 'Tax Rate'}</th>
                  <th className="px-4 py-3 text-right min-w-[120px]">{isUrdu ? 'اس سلیب میں قابل ٹیکس رقم' : 'Amount in Slab'}</th>
                  <th className="px-4 py-3 text-right min-w-[120px]">{isUrdu ? 'ٹیکس واجب الادا' : 'Tax in Slab (PKR)'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {calculation.slabs.map((slab) => (
                  <tr
                    key={slab.slabNumber}
                    className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition"
                  >
                    <td className="px-4 py-3 font-mono font-bold text-doc-seal">
                      Slab {slab.slabNumber}
                    </td>
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white">
                      {isUrdu ? slab.rangeUr : slab.rangeEn}
                    </td>
                    <td className="px-4 py-3 font-mono text-slate-600 dark:text-slate-300">
                      {slab.rateLabel}
                    </td>
                    <td className="px-4 py-3 text-right font-mono font-bold text-doc-ink dark:text-white table-cell-nowrap">
                      Rs. {formatPKR(slab.taxableInSlab)}
                    </td>
                    <td className="px-4 py-3 text-right font-mono font-bold text-amber-600 dark:text-amber-400 table-cell-nowrap">
                      Rs. {formatPKR(slab.taxForSlab)}
                    </td>
                  </tr>
                ))}
                <tr className="bg-slate-100 dark:bg-slate-800/80 font-bold">
                  <td colSpan={3} className="px-4 py-3 text-doc-ink dark:text-white font-mono uppercase text-right">
                    {isUrdu ? 'کل سالانہ ٹیکس واجب الادا:' : 'Total Annual Tax Liability:'}
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-doc-ink dark:text-white table-cell-nowrap">
                    Rs. {formatPKR(calculation.annualTaxable)}
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-emerald-600 dark:text-emerald-400 text-sm table-cell-nowrap">
                    Rs. {formatPKR(calculation.totalAnnualTax)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Disclaimers & Next Steps */}
      <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-2 text-xs font-sans text-slate-700 dark:text-slate-300">
        <div className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-300">
          <AlertCircle className="w-4 h-4" />
          <span>Statutory Compliance &amp; Estimation Notice</span>
        </div>
        <p className="leading-relaxed">
          This calculator applies exclusively to salaried individuals whose salary constitutes more than 75% of their total taxable income under the Finance Act 2026-27 (Tax Year 2027). The high-income surcharge on earnings exceeding Rs. 10M has been abolished. Actual tax liability may vary based on adjustable advance taxes (vehicle token, mobile recharge, banking) and final wealth reconciliation on FBR IRIS 2.0.
        </p>
      </div>

      {/* Internal Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
        <Link
          href="/tax/how-to-file-income-tax-return-salaried-iris-2026"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-doc-seal hover:text-doc-brass transition"
        >
          <span>How to File Form 114(I) on FBR IRIS 2.0 →</span>
        </Link>
        <Link
          href="/tax/fbr-active-taxpayer-status-helper-2026"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-doc-brass hover:underline transition"
        >
          <span>Check Active Taxpayer List (ATL) Status →</span>
        </Link>
      </div>
    </div>
  );
}
