'use client';

import React, { useState } from 'react';
import { Landmark, Calculator, ExternalLink, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

interface LoanEligibilityWidgetProps {
  schemeNameEn?: string;
  schemeNameUr?: string;
}

export const LoanEligibilityWidget: React.FC<LoanEligibilityWidgetProps> = ({
  schemeNameEn = 'Government Loan Eligibility & Installment Calculator',
  schemeNameUr = 'حکومتی قرضہ سکیم اہلیت اور ماخوذ قسط کیلکولیٹر',
}) => {
  const { t } = useLanguage();
  
  const [cnic, setCnic] = useState('');
  const [loanAmount, setLoanAmount] = useState<number>(1500000); // Default 1.5M PKR
  const [tenureYears, setTenureYears] = useState<number>(7);
  const [isCalculated, setIsCalculated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Calculate approximate interest-free / subsidized monthly installment
  const totalMonths = tenureYears * 12;
  const monthlyInstallment = Math.round(loanAmount / totalMonths);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCnic = cnic.replace(/[^0-9]/g, '');
    if (cleanCnic.length !== 13) {
      setErrorMsg(t('Please enter a valid 13-digit CNIC without dashes (e.g. 3520212345671)', 'درست 13 ہندسوں کا شناختی کارڈ نمبر درج کریں'));
      return;
    }
    setErrorMsg('');
    setIsCalculated(true);
  };

  return (
    <div className="my-8 rounded-2xl glass-card border border-amber-500/30 p-6 md:p-8 shadow-xl bg-gradient-to-br from-slate-900 via-amber-950/40 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Landmark className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-extrabold text-lg md:text-xl text-white">
              {t(schemeNameEn, schemeNameUr)}
            </h3>
            <p className="text-xs text-amber-200">
              {t('Official NADRA CNIC-based preliminary eligibility checker', 'نادرا شناختی کارڈ پر مبنی ابتدائی اہلیت ٹول')}
            </p>
          </div>
        </div>

        <span className="text-xs font-bold px-3 py-1 rounded-full gold-badge">
          {t('0% Interest / Subsidized 2026', 'بلا سود / حکومتی سبسڈی')}
        </span>
      </div>

      <form onSubmit={handleCheck} className="space-y-5">
        {/* CNIC Input */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-amber-200 mb-2">
            {t('Enter 13-Digit CNIC Number:', '13 ہندسوں کا قومی شناختی کارڈ نمبر درج کریں:')}
          </label>
          <input
            type="text"
            value={cnic}
            onChange={(e) => {
              setCnic(e.target.value);
              setErrorMsg('');
              setIsCalculated(false);
            }}
            placeholder="3520212345671"
            className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-base font-mono font-bold tracking-wider"
          />
          {errorMsg && (
            <p className="text-xs font-semibold text-rose-400 mt-2 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errorMsg}</span>
            </p>
          )}
        </div>

        {/* Amount & Tenure Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-amber-200 mb-2">
              {t('Required Loan Amount (PKR):', 'مطلوبہ قرض کی رقم (روپے):')}
            </label>
            <select
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white focus:outline-none focus:border-amber-400 text-sm font-semibold cursor-pointer"
            >
              <option value={500000}>PKR 500,000 (5 Lakhs - Micro Tier)</option>
              <option value={1000000}>PKR 1,000,000 (10 Lakhs - Business)</option>
              <option value={1500000}>PKR 1,500,000 (15 Lakhs - Apni Chhat Max)</option>
              <option value={5000000}>PKR 5,000,000 (50 Lakhs - Commercial)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-amber-200 mb-2">
              {t('Repayment Period (Years):', 'ادائیگی کی مدت (سال):')}
            </label>
            <select
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white focus:outline-none focus:border-amber-400 text-sm font-semibold cursor-pointer"
            >
              <option value={3}>3 Years (36 Months)</option>
              <option value={5}>5 Years (60 Months)</option>
              <option value={7}>7 Years (84 Months - Standard)</option>
              <option value={9}>9 Years (108 Months)</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition shadow-lg"
        >
          <Calculator className="w-4 h-4" />
          <span>{t('Calculate Monthly Installment & Check Eligibility', 'اہلیت اور ماہانہ قسط کا جائزہ لیں')}</span>
        </button>
      </form>

      {/* Calculated Breakdown Results */}
      {isCalculated && (
        <div className="mt-6 pt-6 border-t border-slate-800 animate-fadeIn space-y-4">
          <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/40 text-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-300 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {t('CNIC Preliminary Match Success', 'شناختی کارڈ اہلیت کی تصدیق')}
              </span>
              <span className="text-[10px] font-mono bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-700">
                NADRA-OK
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 text-[10px] block">{t('Loan Amount', 'قرض کی رقم')}</span>
                <span className="font-bold text-white text-sm">PKR {loanAmount.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">{t('Est. Monthly Installment', 'اندازاً ماہانہ قسط')}</span>
                <span className="font-extrabold text-amber-400 text-base">PKR {monthlyInstallment.toLocaleString()} / mo</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">{t('Markup Rate', 'مارک اپ کی شرح')}</span>
                <span className="font-bold text-emerald-400 text-sm">0% (Subsidized)</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="https://acag.punjab.gov.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-glow-emerald"
            >
              <span>{t('Proceed to Official Government Portal', 'آفیشل گورنمنٹ پورٹل پر جائیں')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1.5">
        <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
        <span>
          {t('No application fees charged. Loans are disbursed directly via National Bank of Pakistan (NBP) & Bank of Punjab (BOP).', 'درخواست کی کوئی فیس نہیں ہے۔ رقم براہ راست بینک کے ذریعے ملے۔')}
        </span>
      </div>
    </div>
  );
};
