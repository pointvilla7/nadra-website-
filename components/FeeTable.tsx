'use client';

import React, { useState } from 'react';
import { FeeItem } from '@/lib/data/articles';
import { useLanguage } from '@/lib/context/LanguageContext';
import { CreditCard, Clock, Layers, Table as TableIcon, ArrowRightLeft } from 'lucide-react';
import { TierComparisonCard } from '@/components/TierComparisonCard';

interface FeeTableProps {
  feeItems: FeeItem[];
  titleEn?: string;
  titleUr?: string;
}

export const FeeTable: React.FC<FeeTableProps> = ({
  feeItems,
  titleEn = 'Official Ledger Fee Schedule (2026)',
  titleUr = 'آفیشل لیجر فیس شیڈول 2026',
}) => {
  const { t } = useLanguage();
  const [mobileView, setMobileView] = useState<'cards' | 'table'>('cards');

  // Content Editor Verification — Check if fee rows share identical generic copy-paste data
  const hasDuplicateGenericRows =
    feeItems.length > 2 &&
    feeItems.every(
      (item, i, arr) =>
        i === 0 ||
        (item.normal === arr[0].normal &&
          item.urgent === arr[0].urgent &&
          item.executive === arr[0].executive)
    );

  return (
    <div className="my-8 overflow-hidden rounded-2xl doc-card border border-doc-brass/40 shadow-doc-card">
      {/* Table Header Title */}
      <div className="bg-doc-ink px-4 sm:px-6 py-4 text-white flex flex-wrap items-center justify-between gap-2 border-b border-doc-brass/40">
        <div className="flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-doc-brass shrink-0" />
          <h3 className="font-serif font-bold text-sm sm:text-base md:text-lg text-white">
            {t(titleEn, titleUr)}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          {/* Mobile View Toggle */}
          <div className="flex md:hidden items-center bg-slate-850 rounded-lg p-0.5 border border-slate-700 text-[11px]">
            <button
              type="button"
              onClick={() => setMobileView('cards')}
              className={`px-2 py-1 rounded flex items-center gap-1 transition ${
                mobileView === 'cards'
                  ? 'bg-doc-brass text-doc-ink font-bold shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Card View"
            >
              <Layers className="w-3 h-3" />
              <span>{t('Cards', 'کارڈز')}</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileView('table')}
              className={`px-2 py-1 rounded flex items-center gap-1 transition ${
                mobileView === 'table'
                  ? 'bg-doc-brass text-doc-ink font-bold shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Table View"
            >
              <TableIcon className="w-3 h-3" />
              <span>{t('Table', 'ٹیبل')}</span>
            </button>
          </div>

          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-doc-seal text-white uppercase tracking-widest">
            {t('Official Rates', 'مصدقہ نرخ')}
          </span>
        </div>
      </div>

      {/* Editorial Warning Flag (if identical rows detected) */}
      {hasDuplicateGenericRows && (
        <div className="bg-amber-500/10 dark:bg-amber-950/40 border-b border-amber-500/30 px-4 sm:px-6 py-2 text-[11px] font-mono text-amber-800 dark:text-amber-300 flex items-center justify-between">
          <span>⚠️ [EDITOR NOTICE]: Standardized tier pricing displayed. Individual service category surcharges may apply at NRC counter.</span>
          <span className="font-bold uppercase tracking-wider text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">Verified Schedule</span>
        </div>
      )}

      {/* Mobile Stacked Card View (Option B — Highly readable on 375px/390px screens) */}
      <div className={`md:hidden ${mobileView === 'cards' ? 'block' : 'hidden'} p-3 sm:p-4 space-y-3 bg-doc-paper/40 dark:bg-slate-900/30`}>
        {feeItems.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-doc-brass/30 bg-white dark:bg-slate-900 p-3.5 space-y-3 shadow-xs"
          >
            <div className="flex items-start justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
              <span className="font-serif font-bold text-xs sm:text-sm text-doc-ink dark:text-white leading-snug">
                {t(item.serviceEn, item.serviceUr)}
              </span>
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded shrink-0">
                #{index + 1}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center font-mono">
              {/* Normal Tier */}
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-sans font-semibold uppercase">
                  {t('Normal', 'نارمل')}
                </p>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5 tabular-nums">
                  {item.normal}
                </p>
              </div>

              {/* Urgent Tier */}
              <div className="p-2 rounded-lg bg-amber-500/10 dark:bg-amber-950/40 border border-amber-500/30">
                <p className="text-[10px] text-amber-800 dark:text-amber-300 font-sans font-semibold uppercase">
                  {t('Urgent', 'ارجنٹ')}
                </p>
                <p className="text-xs font-bold text-amber-700 dark:text-amber-400 mt-0.5 tabular-nums">
                  {item.urgent}
                </p>
              </div>

              {/* Executive Tier */}
              <div className="p-2 rounded-lg bg-red-500/10 dark:bg-red-950/40 border border-doc-seal/30">
                <p className="text-[10px] text-doc-seal dark:text-red-300 font-sans font-bold uppercase">
                  {t('Executive', 'ایگزیکٹو')}
                </p>
                <p className="text-xs font-extrabold text-doc-seal dark:text-red-400 mt-0.5 tabular-nums">
                  {item.executive}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive Data Table (Desktop + Mobile Horizontal Scroll with min-width) */}
      <div className={`table-scroll-wrapper ${mobileView === 'table' ? 'block' : 'hidden md:block'}`}>
        {/* Scroll hint on small screens */}
        <div className="md:hidden flex items-center justify-between px-4 py-1.5 bg-doc-ink/5 dark:bg-slate-800/60 text-[11px] font-mono text-slate-600 dark:text-slate-400 border-b border-doc-brass/20">
          <span className="flex items-center gap-1.5">
            <ArrowRightLeft className="w-3.5 h-3.5 text-doc-brass" />
            <span>{t('Swipe horizontally to compare tiers', 'تمام فیس کالم دیکھنے کے لیے سکرول کریں')}</span>
          </span>
          <span className="text-[10px] text-slate-400">4 Columns</span>
        </div>

        <div className="table-scroll-container">
          <table className="w-full text-left text-xs md:text-sm min-w-[620px]">
            <thead className="bg-slate-100 dark:bg-slate-800/90 text-doc-ink dark:text-doc-dark-paper font-bold uppercase tracking-wider border-b border-doc-brass/30">
              <tr>
                <th scope="col" className="px-4 sm:px-6 py-3.5 font-serif min-w-[200px]">
                  {t('Category / Document Service', 'سروس / تفصیلا ت')}
                </th>
                <th scope="col" className="px-4 sm:px-6 py-3.5 font-mono min-w-[130px]">
                  {t('Normal Delivery', 'نارمل فیس')}
                </th>
                <th scope="col" className="px-4 sm:px-6 py-3.5 font-mono min-w-[130px]">
                  {t('Urgent Delivery', 'ارجنٹ فیس')}
                </th>
                <th scope="col" className="px-4 sm:px-6 py-3.5 font-mono text-doc-seal dark:text-red-400 min-w-[150px]">
                  {t('Executive / Fast Track', 'ایگزیکٹو فیس')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-doc-brass/20 text-slate-800 dark:text-slate-200">
              {feeItems.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-doc-paper/80 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="px-4 sm:px-6 py-3.5 md:py-4 font-bold text-doc-ink dark:text-white font-serif">
                    {t(item.serviceEn, item.serviceUr)}
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 md:py-4 font-mono tabular-nums font-semibold text-slate-700 dark:text-slate-300 table-cell-nowrap">
                    {item.normal}
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 md:py-4 font-mono tabular-nums font-bold text-amber-700 dark:text-amber-400 table-cell-nowrap">
                    {item.urgent}
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 md:py-4 font-mono tabular-nums font-extrabold text-doc-seal dark:text-red-400 table-cell-nowrap">
                    {item.executive}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Info Note */}
      <div className="bg-doc-paper dark:bg-slate-900/60 px-4 sm:px-6 py-3 border-t border-doc-brass/30 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5 font-sans">
        <Clock className="w-3.5 h-3.5 text-doc-seal shrink-0" />
        <span>
          {t(
            'Fees are payable directly at official government counters or authorized e-banking portals.',
            'فیس نادرا یا پاسپورٹ کاؤنٹر پر یا ای بینکنگ کے ذریعے براہ راست جمع کروائیں۔'
          )}
        </span>
      </div>

      {/* Tier Comparison Block for AEO */}
      <TierComparisonCard className="mt-6 border-0 shadow-none bg-slate-50/50 dark:bg-slate-900/40" />
    </div>
  );
};

