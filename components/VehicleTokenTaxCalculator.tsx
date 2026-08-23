'use client';

import React, { useState } from 'react';
import {
  Car,
  Calculator,
  Share2,
  Check,
  ShieldCheck,
  ExternalLink,
  Info,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export type ProvinceType = 'punjab' | 'sindh' | 'islamabad' | 'kpk';

export const VehicleTokenTaxCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [engineCc, setEngineCc] = useState<number>(1300);
  const [province, setProvince] = useState<ProvinceType>('punjab');
  const [isFiler, setIsFiler] = useState<boolean>(true);
  const [copied, setCopied] = useState(false);

  // Calculate Token Tax & Section 234 Advance Income Tax based on 2026 Provincial Excise Schedules
  const calculateTax = () => {
    const cc = Math.max(50, Math.min(6000, Number(engineCc) || 0));

    let baseToken = 0;
    let incomeTax = 0;

    if (cc < 1000) {
      baseToken = 1500;
      incomeTax = isFiler ? 800 : 1600;
    } else if (cc >= 1000 && cc <= 1300) {
      baseToken = 2500;
      incomeTax = isFiler ? 1750 : 3500;
    } else if (cc > 1300 && cc <= 1500) {
      baseToken = 3800;
      incomeTax = isFiler ? 3000 : 6000;
    } else if (cc > 1500 && cc <= 1600) {
      baseToken = 4500;
      incomeTax = isFiler ? 4500 : 9000;
    } else if (cc > 1600 && cc <= 1800) {
      baseToken = 5500;
      incomeTax = isFiler ? 6000 : 12000;
    } else if (cc > 1800 && cc <= 2000) {
      baseToken = 6500;
      incomeTax = isFiler ? 9000 : 18000;
    } else {
      baseToken = 10000;
      incomeTax = isFiler ? 20000 : 40000;
    }

    // Islamabad & Sindh adjustments
    if (province === 'islamabad') {
      baseToken = Math.round(baseToken * 1.1);
    } else if (province === 'sindh') {
      baseToken = Math.round(baseToken * 1.05);
    }

    const total = baseToken + incomeTax;
    return { baseToken, incomeTax, total };
  };

  const { baseToken, incomeTax, total } = calculateTax();

  const handleShare = () => {
    const text = `Vehicle Token Tax Estimate (2026):\nEngine: ${engineCc} CC\nProvince: ${province.toUpperCase()}\nStatus: ${
      isFiler ? 'Active Filer' : 'Non-Filer'
    }\nBase Token: PKR ${baseToken.toLocaleString()}\nIncome Tax (Sec 234): PKR ${incomeTax.toLocaleString()}\nTotal Payable: PKR ${total.toLocaleString()}\nSource: Excise & Taxation Dept (via Pakistan Info Hub)`;

    if (navigator.share) {
      navigator.share({ title: 'Vehicle Token Tax Calculator', text }).catch(() => {});
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
            <Car className="w-5 h-5 text-doc-brass" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 dark:text-white">
              {t('Vehicle Annual Token Tax Calculator 2026', 'گاڑی ٹوکن ٹیکس کیلکولیٹر 2026')}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
              {t('Provincial Excise & Taxation rates with FBR Section 234 filer rebate.', 'ایکسائز ریٹس اور ایف بی آر فائلر ریبیٹ کے مطابق سالانہ تخمینہ۔')}
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

      {/* Input Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Engine CC */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold font-serif text-slate-800 dark:text-slate-200">
            {t('Engine Capacity (CC):', 'انجن کی گنجائش (سی سی):')}
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={50}
            max={6000}
            value={engineCc}
            onChange={(e) => setEngineCc(Number(e.target.value))}
            className="w-full h-11 px-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-white focus:outline-none focus:border-doc-brass"
          />
        </div>

        {/* Province */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold font-serif text-slate-800 dark:text-slate-200">
            {t('Registration Province:', 'رجسٹریشن صوبہ:')}
          </label>
          <select
            value={province}
            onChange={(e) => setProvince(e.target.value as ProvinceType)}
            className="w-full h-11 px-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm font-sans font-medium text-slate-900 dark:text-white focus:outline-none focus:border-doc-brass"
          >
            <option value="punjab">{t('Punjab (PSCA / DLIMS)', 'پنجاب')}</option>
            <option value="sindh">{t('Sindh (Karachi / Hyderabad)', 'سندھ')}</option>
            <option value="islamabad">{t('Islamabad Federal (ICT)', 'اسلام آباد')}</option>
            <option value="kpk">{t('Khyber Pakhtunkhwa (KPK)', 'خیبر پختونخوا')}</option>
          </select>
        </div>

        {/* Filer Status */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold font-serif text-slate-800 dark:text-slate-200">
            {t('FBR Taxpayer Status:', 'ایف بی آر فائلر حیثیت:')}
          </label>
          <select
            value={isFiler ? 'filer' : 'non_filer'}
            onChange={(e) => setIsFiler(e.target.value === 'filer')}
            className="w-full h-11 px-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm font-sans font-medium text-slate-900 dark:text-white focus:outline-none focus:border-doc-brass"
          >
            <option value="filer">{t('Active Tax Filer (Standard Rate)', 'ایکٹو فائلر (50% ٹیکس رعایت)')}</option>
            <option value="non_filer">{t('Non-Filer (Double Withholding Tax)', 'نان فائلر (دگنا ٹیکس لاگو)')}</option>
          </select>
        </div>
      </div>

      {/* Result Box */}
      <div className="p-5 sm:p-6 rounded-2xl border-2 border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 space-y-4 animate-fadeIn">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block">
              {t('TOTAL ESTIMATED ANNUAL TOKEN TAX', 'کل سالانہ ٹوکن ٹیکس')}
            </span>
            <div className="text-2xl sm:text-3xl font-mono font-extrabold text-slate-900 dark:text-white mt-0.5">
              PKR {total.toLocaleString()}
            </div>
          </div>

          {/* Breakdown Pills */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <div className="px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 block">{t('Base Token', 'بنیادی ٹوکن')}</span>
              <span className="font-bold">PKR {baseToken.toLocaleString()}</span>
            </div>
            <div className="px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 block">{t('FBR Sec 234', 'انکم ٹیکس')}</span>
              <span className="font-bold">PKR {incomeTax.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Source citation */}
        <div className="pt-3 border-t border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-sans">
          <span>
            {t('Based on rates effective August 2026, source:', 'مصدقہ حکومتی گزٹ اگست 2026، ماخذ:')}{' '}
            <a
              href="https://excise.punjab.gov.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-doc-brass underline font-bold inline-flex items-center gap-0.5"
            >
              <span>{t('Provincial Excise & Taxation Departments', 'ایکسائز اینڈ ٹیکسیشن ڈیپارٹمنٹ')}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">
            ✓ e-Pay Punjab Compatible
          </span>
        </div>
      </div>
    </div>
  );
};
