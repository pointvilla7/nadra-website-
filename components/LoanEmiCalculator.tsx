'use client';

import React, { useState, useMemo } from 'react';
import {
  Landmark,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  PieChart,
  DollarSign,
  TrendingDown,
  ExternalLink,
  Info
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

interface SchemePreset {
  id: string;
  nameEn: string;
  nameUr: string;
  principal: number;
  tenureYears: number;
  rate: number;
  badge: string;
  applyUrl: string;
}

const LOAN_PRESETS: SchemePreset[] = [
  {
    id: 'apni-chhat',
    nameEn: 'Apni Chhat Apna Ghar (CM Punjab)',
    nameUr: 'اپنی چھت اپنا گھر سکیم (15 لاکھ)',
    principal: 1500000,
    tenureYears: 7,
    rate: 0,
    badge: '0% Interest-Free',
    applyUrl: 'https://acag.punjab.gov.pk/',
  },
  {
    id: 'pm-youth-t1',
    nameEn: 'PM Youth Loan (Tier 1)',
    nameUr: 'وزیر اعظم یوتھ لون (ٹائر 1)',
    principal: 500000,
    tenureYears: 3,
    rate: 0,
    badge: '0% Subsidized',
    applyUrl: 'https://pmyp.gov.pk/',
  },
  {
    id: 'pm-youth-t2',
    nameEn: 'PM Youth Loan (Tier 2)',
    nameUr: 'وزیر اعظم یوتھ لون (ٹائر 2)',
    principal: 1500000,
    tenureYears: 5,
    rate: 5,
    badge: '5% Fixed Markup',
    applyUrl: 'https://pmyp.gov.pk/',
  },
  {
    id: 'akhuwat',
    nameEn: 'Akhuwat Interest-Free Loan',
    nameUr: 'اخوت بلاسود قرضہ سکیم',
    principal: 100000,
    tenureYears: 2,
    rate: 0,
    badge: '100% Qarz-e-Hasna',
    applyUrl: 'https://akhuwat.org.pk/',
  },
  {
    id: 'hbfc-housing',
    nameEn: 'HBFC Ghar Pakistan Housing',
    nameUr: 'ایچ بی ایف سی گھر پاکستان',
    principal: 3000000,
    tenureYears: 15,
    rate: 11.5,
    badge: 'Long-term Mortgage',
    applyUrl: 'https://www.hbfc.com.pk/',
  },
];

export const LoanEmiCalculator: React.FC = () => {
  const { t } = useLanguage();

  const [principal, setPrincipal] = useState<number>(1500000);
  const [tenureYears, setTenureYears] = useState<number>(7);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [activePreset, setActivePreset] = useState<string>('apni-chhat');

  const handleSelectPreset = (preset: SchemePreset) => {
    setActivePreset(preset.id);
    setPrincipal(preset.principal);
    setTenureYears(preset.tenureYears);
    setInterestRate(preset.rate);
  };

  // Financial Math Calculation
  const calculation = useMemo(() => {
    const P = Math.max(1000, principal || 0);
    const n = Math.max(1, (tenureYears || 1) * 12);
    const annualRate = Math.max(0, interestRate || 0);

    let monthlyEmi = 0;
    let totalPayable = 0;
    let totalInterest = 0;

    if (annualRate === 0) {
      monthlyEmi = Math.round(P / n);
      totalPayable = P;
      totalInterest = 0;
    } else {
      const r = annualRate / 12 / 100;
      const factor = Math.pow(1 + r, n);
      monthlyEmi = Math.round((P * r * factor) / (factor - 1));
      totalPayable = monthlyEmi * n;
      totalInterest = totalPayable - P;
    }

    const principalPercent = totalPayable > 0 ? Math.round((P / totalPayable) * 100) : 100;
    const interestPercent = 100 - principalPercent;

    return {
      monthlyEmi,
      totalPayable,
      totalInterest,
      totalMonths: n,
      principalPercent,
      interestPercent,
    };
  }, [principal, tenureYears, interestRate]);

  return (
    <div className="my-8 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-doc-ink overflow-hidden shadow-lg">
      {/* Header */}
      <div className="px-5 py-4 bg-doc-ink text-white flex items-center justify-between gap-3 border-b border-doc-brass/20">
        <div className="flex items-center gap-2.5">
          <Calculator className="w-5 h-5 text-doc-brass shrink-0" />
          <div>
            <h3 className="font-serif font-bold text-sm text-white leading-tight">
              {t('Pakistan Govt Loan & EMI Installment Calculator 2026', 'قرضہ قسط و ای ایم آئی کیلکولیٹر 2026')}
            </h3>
            <p className="text-[10px] text-slate-400 font-mono">
              {t('Apni Chhat Apna Ghar, PM Youth Loan & Akhuwat Slabs', 'اپنی چھت اپنا گھر اور پی ایم یوتھ لون ریٹس')}
            </p>
          </div>
        </div>
        <InteractiveToolBadge labelEn="EMI CALCULATOR" labelUr="قسط کیلکولیٹر" variant="gold" />
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Preset Schemes Selector */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-doc-seal dark:text-red-400" />
            <span>{t('Popular Govt Loan Schemes (1-Click Presets):', 'مقبول ترین سرکاری قرضہ سکیمیں:')}</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {LOAN_PRESETS.map((preset) => {
              const isSelected = activePreset === preset.id;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => handleSelectPreset(preset)}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition min-h-[64px] ${
                    isSelected
                      ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                      : 'bg-doc-paper/70 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-serif font-bold text-xs leading-tight">{t(preset.nameEn, preset.nameUr)}</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold shrink-0">
                      {preset.badge}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    PKR {(preset.principal / 100000).toFixed(1)} Lakh • {preset.tenureYears} Yrs • {preset.rate}%
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Custom Input Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 border-t border-slate-200 dark:border-slate-800">
          {/* Principal Amount */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs">
              <label className="font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass">
                {t('Loan Amount (PKR):', 'قرض کی رقم (روپے):')}
              </label>
            </div>
            <input
              type="number"
              min={10000}
              max={30000000}
              step={50000}
              value={principal}
              onChange={(e) => {
                setPrincipal(Number(e.target.value));
                setActivePreset('');
              }}
              className="w-full px-4 py-3 rounded-xl bg-doc-paper dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-doc-ink dark:text-white font-mono font-bold text-base focus:outline-none focus:border-doc-seal"
            />
            <p className="text-[10px] font-mono text-slate-500">
              PKR {(principal || 0).toLocaleString()} ({(principal / 100000).toFixed(2)} Lakh)
            </p>
          </div>

          {/* Loan Tenure */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs">
              <label className="font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass">
                {t('Tenure (Years):', 'مدت (سال):')}
              </label>
              <span className="font-mono text-slate-400">{tenureYears * 12} Months</span>
            </div>
            <input
              type="number"
              min={1}
              max={25}
              value={tenureYears}
              onChange={(e) => {
                setTenureYears(Number(e.target.value));
                setActivePreset('');
              }}
              className="w-full px-4 py-3 rounded-xl bg-doc-paper dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-doc-ink dark:text-white font-mono font-bold text-base focus:outline-none focus:border-doc-seal"
            />
            <p className="text-[10px] font-mono text-slate-500">{tenureYears} Years Repayment Period</p>
          </div>

          {/* Interest / Markup Rate */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs">
              <label className="font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass">
                {t('Annual Markup Rate (%):', 'شرح منافع / سود (%):')}
              </label>
              {interestRate === 0 && (
                <span className="font-mono font-bold text-emerald-500 text-[10px]">0% (INTEREST-FREE)</span>
              )}
            </div>
            <input
              type="number"
              min={0}
              max={30}
              step={0.5}
              value={interestRate}
              onChange={(e) => {
                setInterestRate(Number(e.target.value));
                setActivePreset('');
              }}
              className="w-full px-4 py-3 rounded-xl bg-doc-paper dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-doc-ink dark:text-white font-mono font-bold text-base focus:outline-none focus:border-doc-seal"
            />
            <p className="text-[10px] font-mono text-slate-500">
              {interestRate === 0 ? 'Shariah-compliant / Subsidy' : `${interestRate}% per annum`}
            </p>
          </div>
        </div>

        {/* Calculation Result Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/60 space-y-5 relative overflow-hidden shadow-xl animate-fadeIn">
          <div aria-hidden="true" className="absolute top-0 right-0 w-48 h-48 bg-doc-brass/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-doc-brass/30 pb-4">
            <div>
              <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-emerald-500/30">
                {interestRate === 0 ? 'INTEREST-FREE INSTALLMENT' : 'MONTHLY ESTIMATED EMI'}
              </span>
              <h4 className="text-xl font-serif font-extrabold text-white mt-1">
                {t('Monthly Installment Payment:', 'ماہانہ قسط کی رقم:')}
              </h4>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-[10px] font-mono text-slate-400 uppercase">MONTHLY REPAYMENT</p>
              <p className="text-3xl sm:text-4xl font-mono font-extrabold text-doc-brass tracking-tight">
                PKR {calculation.monthlyEmi.toLocaleString()}
                <span className="text-xs text-slate-400 font-normal"> / month</span>
              </p>
            </div>
          </div>

          {/* 3 Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans text-xs">
            <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800 space-y-0.5">
              <p className="text-[10px] font-mono text-slate-400 uppercase">{t('Principal Borrowed', 'اصل رقم')}</p>
              <p className="text-base font-mono font-bold text-white">PKR {principal.toLocaleString()}</p>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800 space-y-0.5">
              <p className="text-[10px] font-mono text-slate-400 uppercase">{t('Total Markup / Profit', 'کل منافع / مارک اپ')}</p>
              <p className="text-base font-mono font-bold text-amber-400">
                PKR {calculation.totalInterest.toLocaleString()}
              </p>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800 space-y-0.5">
              <p className="text-[10px] font-mono text-slate-400 uppercase">{t('Total Amount Payable', 'کل واجب الادا رقم')}</p>
              <p className="text-base font-mono font-bold text-emerald-400">
                PKR {calculation.totalPayable.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Visual Percentage Bar */}
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between text-[11px] font-mono text-slate-400">
              <span>Principal: {calculation.principalPercent}%</span>
              <span>Markup: {calculation.interestPercent}%</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden flex">
              <div style={{ width: `${calculation.principalPercent}%` }} className="bg-emerald-500 h-full" />
              <div style={{ width: `${calculation.interestPercent}%` }} className="bg-amber-500 h-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400 font-sans leading-relaxed flex items-center justify-between">
        <span>{t('Instant calculation — Zero data transmitted', 'فوری حساب — کوئی ڈیٹا جمع نہیں کیا جاتا')}</span>
        <span>{t('Government subsidies subject to bank approval', 'سرکاری سبسیڈی بینک منظوری سے مشروط ہے')}</span>
      </div>
    </div>
  );
};
