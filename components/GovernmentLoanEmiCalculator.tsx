'use client';

import React, { useState } from 'react';
import {
  Building2,
  Calculator,
  Share2,
  Check,
  ShieldCheck,
  ExternalLink,
  Sparkles,
  Info,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export type SchemeType = 'apni_chhat' | 'pm_youth_t1' | 'pm_youth_t2' | 'commercial';

export const GovernmentLoanEmiCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [scheme, setScheme] = useState<SchemeType>('apni_chhat');
  const [loanAmount, setLoanAmount] = useState<number>(1500000);
  const [tenureYears, setTenureYears] = useState<number>(7);
  const [copied, setCopied] = useState(false);

  const calculateLoan = () => {
    const principal = Math.max(50000, Math.min(25000000, Number(loanAmount) || 0));
    const years = Math.max(1, Math.min(25, Number(tenureYears) || 1));
    const months = years * 12;

    if (scheme === 'apni_chhat') {
      // 0% Interest Free: PKR 1,500,000 / 84 months (after 3 month grace period) ≈ PKR 14,000/month flat
      const monthlyInstallment = Math.round(principal / months);
      return {
        monthlyInstallment,
        totalPayable: principal,
        totalInterest: 0,
        markupRateText: '0% (Interest-Free / بلاتسود)',
        gracePeriod: '3 Months (3 ماہ گریس پیریڈ)',
        officialSource: 'Government of Punjab Housing Department',
        portalUrl: 'https://acag.punjab.gov.pk/',
      };
    }

    if (scheme === 'pm_youth_t1') {
      // Subsidized 5% markup
      const annualRate = 0.05;
      const monthlyRate = annualRate / 12;
      const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
      const totalPayable = Math.round(emi * months);
      return {
        monthlyInstallment: Math.round(emi),
        totalPayable,
        totalInterest: totalPayable - principal,
        markupRateText: '5% Fixed Subsidized',
        gracePeriod: '6 Months',
        officialSource: 'PM Youth Programme & SBP',
        portalUrl: 'https://pmyp.gov.pk/',
      };
    }

    if (scheme === 'pm_youth_t2') {
      // Subsidized 7% markup
      const annualRate = 0.07;
      const monthlyRate = annualRate / 12;
      const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
      const totalPayable = Math.round(emi * months);
      return {
        monthlyInstallment: Math.round(emi),
        totalPayable,
        totalInterest: totalPayable - principal,
        markupRateText: '7% Subsidized',
        gracePeriod: '6 Months',
        officialSource: 'PM Youth Programme & SBP',
        portalUrl: 'https://pmyp.gov.pk/',
      };
    }

    // Commercial Bank Housing Loan (15% benchmark)
    const annualRate = 0.15;
    const monthlyRate = annualRate / 12;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayable = Math.round(emi * months);
    return {
      monthlyInstallment: Math.round(emi),
      totalPayable,
      totalInterest: totalPayable - principal,
      markupRateText: '15% Floating Bank Rate',
      gracePeriod: 'None',
      officialSource: 'State Bank of Pakistan (SBP)',
      portalUrl: 'https://www.sbp.org.pk/',
    };
  };

  const result = calculateLoan();

  const handleShare = () => {
    const text = `Government Loan EMI Calculation (2026):\nScheme: ${scheme.toUpperCase()}\nLoan Amount: PKR ${loanAmount.toLocaleString()}\nTenure: ${tenureYears} Years\nMonthly Installment: PKR ${result.monthlyInstallment.toLocaleString()}\nTotal Markup: PKR ${result.totalInterest.toLocaleString()}\nGrace Period: ${result.gracePeriod}\nVerified via Pakistan Info Hub (pakistaninfohub.com)`;

    if (navigator.share) {
      navigator.share({ title: 'Government Loan EMI Calculator', text }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className="rounded-3xl border-2 border-doc-brass/30 bg-[#FAF9F6] dark:bg-[#1E2A3F] p-6 sm:p-8 space-y-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-doc-ink dark:bg-slate-800 text-white flex items-center justify-center">
            <Building2 className="w-5 h-5 text-doc-brass" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 dark:text-white">
              {t('Govt Housing & Business Loan EMI Calculator 2026', 'حکومتی ہاؤسنگ و بزنس لون قسط کیلکولیٹر')}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
              {t('Official 0% interest and subsidized monthly installment calculations.', 'اپنی چھت اپنا گھر اور پی ایم یوتھ لون کی ماہانہ اقساط کا بااعتماد تخمینہ۔')}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-sans font-bold hover:border-doc-brass transition self-start sm:self-auto"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5 text-doc-brass" />}
          <span>{copied ? t('Copied!', 'کاپی ہو گیا!') : t('Share Result', 'شیئر کریں')}</span>
        </button>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Scheme Type */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold font-serif text-slate-800 dark:text-slate-200">
            {t('Select Loan Scheme:', 'اسکیم منتخب کریں:')}
          </label>
          <select
            value={scheme}
            onChange={(e) => {
              const newScheme = e.target.value as SchemeType;
              setScheme(newScheme);
              if (newScheme === 'apni_chhat') {
                setLoanAmount(1500000);
                setTenureYears(7);
              }
            }}
            className="w-full h-11 px-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm font-sans font-medium text-slate-900 dark:text-white focus:outline-none focus:border-doc-brass"
          >
            <option value="apni_chhat">{t('CM Punjab "Apni Chhat Apna Ghar" (0% Interest)', 'اپنی چھت اپنا گھر (0% سود فری)')}</option>
            <option value="pm_youth_t1">{t('PM Youth Loan Tier 1 (Up to 5 Lakh)', 'پی ایم یوتھ لون ٹیئر 1 (5 لاکھ تک)')}</option>
            <option value="pm_youth_t2">{t('PM Youth Loan Tier 2 (Up to 15 Lakh)', 'پی ایم یوتھ لون ٹیئر 2 (15 لاکھ تک)')}</option>
            <option value="commercial">{t('Commercial Bank Home Loan (15% Floating)', 'کمرشل بینک ہوم لون')}</option>
          </select>
        </div>

        {/* Loan Amount */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold font-serif text-slate-800 dark:text-slate-200">
            {t('Loan Amount (PKR):', 'قرض کی رقم (روپے):')}
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={50000}
            max={25000000}
            step={50000}
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full h-11 px-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-white focus:outline-none focus:border-doc-brass"
          />
        </div>

        {/* Tenure Years */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold font-serif text-slate-800 dark:text-slate-200">
            {t('Repayment Tenure (Years):', 'مدت ادائیگی (سال):')}
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={1}
            max={25}
            value={tenureYears}
            onChange={(e) => setTenureYears(Number(e.target.value))}
            className="w-full h-11 px-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-white focus:outline-none focus:border-doc-brass"
          />
        </div>
      </div>

      {/* Result Card */}
      <div className="p-5 sm:p-6 rounded-2xl border-2 border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 space-y-4 animate-fadeIn">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block">
              {t('ESTIMATED MONTHLY INSTALLMENT', 'ماہانہ قسط کا تخمینہ')}
            </span>
            <div className="text-2xl sm:text-3xl font-mono font-extrabold text-slate-900 dark:text-white mt-0.5">
              PKR {result.monthlyInstallment.toLocaleString()} / mo
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <div className="px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 block">{t('Markup / Interest', 'سود / مارک اپ')}</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">{result.markupRateText}</span>
            </div>
            <div className="px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 block">{t('Grace Period', 'گریس پیریڈ')}</span>
              <span className="font-bold">{result.gracePeriod}</span>
            </div>
          </div>
        </div>

        {/* Source citation */}
        <div className="pt-3 border-t border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-sans">
          <span>
            {t('Based on rates effective August 2026, source:', 'مصدقہ حکومتی گزٹ اگست 2026، ماخذ:')}{' '}
            <a
              href={result.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-doc-brass underline font-bold inline-flex items-center gap-0.5"
            >
              <span>{result.officialSource}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">
            ✓ 0% Hidden Processing Charges
          </span>
        </div>
      </div>
    </div>
  );
};
