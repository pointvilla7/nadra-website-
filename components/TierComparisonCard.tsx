'use client';

import React from 'react';
import { Zap, Clock, ShieldAlert, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

interface TierComparisonCardProps {
  category?: string;
  className?: string;
}

export const TierComparisonCard: React.FC<TierComparisonCardProps> = ({
  category = 'general',
  className = '',
}) => {
  const { t } = useLanguage();

  return (
    <section
      aria-label="Service Processing Tiers Comparison"
      className={`my-8 doc-card rounded-2xl border border-doc-brass/40 p-6 sm:p-8 bg-doc-paper dark:bg-doc-dark-card space-y-6 shadow-sm ${className}`}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-doc-brass/20 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-doc-ink text-doc-paper dark:bg-slate-900 border border-doc-brass/30">
            <Zap className="w-5 h-5 text-doc-brass" />
          </div>
          <div>
            <h3 className="font-serif font-extrabold text-lg text-doc-ink dark:text-white">
              {t('Normal vs. Urgent vs. Executive Delivery Comparison', 'نارمل بمقابلہ ارجنٹ بمقابلہ ایگزیکٹو فیس و رفتار کا موازنہ')}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              {t('AEO Quick Guide: Which processing speed should you choose?', 'فوری تجزیہ: آپ کے لیے کون سا آپشن بہترین ہے؟')}
            </p>
          </div>
        </div>
        <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded bg-doc-seal text-white uppercase tracking-wider">
          {t('AEO Summary', 'فوری موازنہ')}
        </span>
      </div>

      {/* 3-Column Comparative Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Tier 1: Normal */}
        <div className="rounded-xl border border-slate-300 dark:border-slate-800 p-5 bg-white dark:bg-doc-dark-base flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                {t('Normal Processing', 'نارمل پروسیسنگ')}
              </span>
              <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {t('Budget', 'کم ترین فیس')}
              </span>
            </div>
            <p className="font-mono text-xs text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{t('15 to 30 Business Days', '15 سے 30 کاروباری دن')}</span>
            </p>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 pt-2">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{t('Lowest official government fee rate', 'سب سے کم سرکاری فیس ریٹ')}</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{t('Standard NRC / DGIP counter queue', 'عام کاؤنٹر سروس')}</span>
              </li>
            </ul>
          </div>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500">
            <strong>{t('Best for:', 'بہترین برائے:')}</strong> {t('Routine updates with no strict travel deadline', 'جنہیں فوری دستاویز کی ضرورت نہ ہو')}
          </div>
        </div>

        {/* Tier 2: Urgent */}
        <div className="rounded-xl border-2 border-amber-500/50 p-5 bg-white dark:bg-doc-dark-base flex flex-col justify-between space-y-4 shadow-sm relative overflow-hidden">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                {t('Urgent Delivery', 'ارجنٹ ڈلیوری')}
              </span>
              <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-800 dark:text-amber-300">
                {t('Popular', 'مقبول ترین')}
              </span>
            </div>
            <p className="font-mono text-xs text-amber-700 dark:text-amber-400 font-semibold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{t('4 to 15 Business Days', '4 سے 15 کاروباری دن')}</span>
            </p>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 pt-2">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>{t('Expedited printing & priority courier', 'ترجیحی پرنٹنگ اور کورئیر')}</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>{t('Balanced cost vs. speed ratio', 'مناسب فیس اور تیز رفتار سروس')}</span>
              </li>
            </ul>
          </div>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500">
            <strong>{t('Best for:', 'بہترین برائے:')}</strong> {t('Citizens with job or academic deadlines', 'ملازمت یا داخلے کی تاریخ کے لیے')}
          </div>
        </div>

        {/* Tier 3: Executive / Fast Track */}
        <div className="rounded-xl border-2 border-doc-seal/60 p-5 bg-white dark:bg-doc-dark-base flex flex-col justify-between space-y-4 shadow-sm relative overflow-hidden">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-serif font-bold text-sm text-doc-seal dark:text-red-400">
                {t('Executive / Fast Track', 'ایگزیکٹو / فاسٹ ٹریک')}
              </span>
              <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-doc-seal text-white">
                {t('Fastest', 'فوری ترین')}
              </span>
            </div>
            <p className="font-mono text-xs text-doc-seal dark:text-red-400 font-semibold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>{t('2 to 4 Business Days', '2 سے 4 کاروباری دن')}</span>
            </p>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 pt-2">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-doc-seal shrink-0 mt-0.5" />
                <span>{t('Dedicated VIP lounge & zero wait time', 'ایگزیکٹو لاؤنج اور فوری باری')}</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-doc-seal shrink-0 mt-0.5" />
                <span>{t('Direct HQ dispatch via air courier', 'ہیڈ کوارٹر سے ڈائریکٹ ڈسپیچ')}</span>
              </li>
            </ul>
          </div>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500">
            <strong>{t('Best for:', 'بہترین برائے:')}</strong> {t('Urgent international travel or legal emergency', 'ہنگامی سفر یا قانونی ضروریات')}
          </div>
        </div>
      </div>
    </section>
  );
};
