'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { CreditCard, Clock, Layers, Table as TableIcon, CheckCircle2, ShieldAlert, Sparkles, Coins } from 'lucide-react';

export interface FeeVisualRow {
  serviceEn: string;
  serviceUr?: string;
  normal?: string;
  urgent?: string;
  executive?: string;
  validity?: string;
  icon?: React.ReactNode;
  category?: string;
  tagEn?: string;
}

export interface FeeTableVisualProps {
  rows: FeeVisualRow[];
  titleEn?: string;
  titleUr?: string;
  subtitleEn?: string;
  subtitleUr?: string;
  noteEn?: string;
  noteUr?: string;
  className?: string;
}

export const FeeTableVisual: React.FC<FeeTableVisualProps> = ({
  rows,
  titleEn = 'Official Fee Schedule & Delivery Ledger (2026)',
  titleUr = 'آفیشل فیس شیڈول و ڈلیوری لیجر 2026',
  subtitleEn = 'Verified government rates and turnaround timeframes across processing tiers',
  subtitleUr = 'تمام کیٹیگریز کے تصدیق شدہ سرکاری نرخ اور ڈلیوری کا دورانیہ',
  noteEn,
  noteUr,
  className = '',
}) => {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('table');

  if (!rows || rows.length === 0) return null;

  return (
    <div className={`my-8 overflow-hidden rounded-2xl border border-doc-brass/40 bg-white dark:bg-slate-900 shadow-doc-card ${className}`}>
      {/* Header Bar with Seal Badge */}
      <div className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-950 px-4 sm:px-6 py-4 text-white flex flex-wrap items-center justify-between gap-3 border-b border-doc-brass/40">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <Coins className="w-5 h-5 text-doc-brass shrink-0" />
            <h3 className="font-serif font-extrabold text-base sm:text-lg text-white">
              {t(titleEn, titleUr)}
            </h3>
          </div>
          {subtitleEn && (
            <p className="text-xs text-slate-300 font-sans">
              {t(subtitleEn, subtitleUr)}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile View Toggle */}
          <div className="flex sm:hidden items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700 text-[11px]">
            <button
              type="button"
              onClick={() => setViewMode('table')}
              className={`px-2 py-1 rounded flex items-center gap-1 transition ${
                viewMode === 'table' ? 'bg-doc-brass text-doc-ink font-bold shadow-xs' : 'text-slate-400'
              }`}
            >
              <TableIcon className="w-3 h-3" />
              <span>Table</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('cards')}
              className={`px-2 py-1 rounded flex items-center gap-1 transition ${
                viewMode === 'cards' ? 'bg-doc-brass text-doc-ink font-bold shadow-xs' : 'text-slate-400'
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>Cards</span>
            </button>
          </div>

          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-doc-seal text-white uppercase tracking-widest shadow-xs">
            {t('Official Rates', 'مصدقہ نرخ')}
          </span>
        </div>
      </div>

      {/* Editorial Disclaimer / Note if provided */}
      {noteEn && (
        <div className="bg-amber-500/10 dark:bg-amber-950/40 border-b border-amber-500/30 px-4 sm:px-6 py-2 text-[11px] font-mono text-amber-800 dark:text-amber-300 flex items-center justify-between">
          <span>{t(noteEn, noteUr || '')}</span>
          <span className="font-bold uppercase tracking-wider text-[10px] bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded">
            2026 Active Rates
          </span>
        </div>
      )}

      {/* Desktop / Large Screen Table View */}
      <div className={`overflow-x-auto ${viewMode === 'cards' ? 'hidden sm:block' : 'block'}`}>
        <table className="w-full text-left border-collapse text-xs font-sans">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850/80 text-doc-ink dark:text-slate-300">
              <th className="py-3 px-4 sm:px-6 font-serif font-bold text-xs uppercase tracking-wider">
                {t('Service Type / Document', 'دستاویز / سروس')}
              </th>
              <th className="py-3 px-3 sm:px-4 font-mono font-bold text-xs text-slate-700 dark:text-slate-300">
                {t('Normal', 'نارمل')}
              </th>
              <th className="py-3 px-3 sm:px-4 font-mono font-bold text-xs text-amber-800 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-950/20">
                {t('Urgent', 'ارجنٹ')}
              </th>
              <th className="py-3 px-3 sm:px-4 font-mono font-bold text-xs text-doc-seal dark:text-red-400 bg-red-50/40 dark:bg-red-950/20">
                {t('Executive / Fast', 'ایگزیکٹو')}
              </th>
              <th className="py-3 px-4 sm:px-6 font-mono font-bold text-xs text-slate-700 dark:text-slate-300">
                {t('Validity / Period', 'مدت / میعاد')}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {rows.map((row, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <tr
                  key={idx}
                  className={`transition hover:bg-amber-50/30 dark:hover:bg-slate-800/60 ${
                    isEven ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/60 dark:bg-slate-900/40'
                  }`}
                >
                  {/* Service Title */}
                  <td className="py-3.5 px-4 sm:px-6 font-serif font-bold text-xs sm:text-sm text-doc-ink dark:text-white">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-doc-brass shrink-0" />
                      <span>{t(row.serviceEn, row.serviceUr || '')}</span>
                    </div>
                  </td>

                  {/* Normal Fee */}
                  <td className="py-3.5 px-3 sm:px-4 font-mono font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 inline-block">
                      {row.normal || '—'}
                    </span>
                  </td>

                  {/* Urgent Fee */}
                  <td className="py-3.5 px-3 sm:px-4 font-mono font-bold text-xs sm:text-sm text-amber-900 dark:text-amber-300 bg-amber-50/30 dark:bg-amber-950/10">
                    <span className="px-2 py-1 rounded bg-amber-100/80 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700 inline-block">
                      {row.urgent || '—'}
                    </span>
                  </td>

                  {/* Executive Fee */}
                  <td className="py-3.5 px-3 sm:px-4 font-mono font-bold text-xs sm:text-sm text-doc-seal dark:text-red-300 bg-red-50/20 dark:bg-red-950/10">
                    <span className="px-2 py-1 rounded bg-red-100/80 dark:bg-red-950/60 border border-red-300 dark:border-red-800 inline-block">
                      {row.executive || '—'}
                    </span>
                  </td>

                  {/* Validity */}
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-xs text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-doc-brass shrink-0" />
                      <span>{row.validity || 'Standard'}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Stack View (at 375px mobile) */}
      <div className={`sm:hidden p-3 space-y-3 ${viewMode === 'table' ? 'hidden' : 'block'}`}>
        {rows.map((row, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-doc-brass/30 bg-slate-50 dark:bg-slate-850 p-3.5 space-y-2.5 shadow-xs"
          >
            <div className="flex items-start justify-between gap-2 border-b border-slate-200 dark:border-slate-700 pb-2">
              <span className="font-serif font-bold text-xs text-doc-ink dark:text-white">
                {t(row.serviceEn, row.serviceUr || '')}
              </span>
              {row.validity && (
                <span className="text-[9px] font-mono font-bold uppercase text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700 shrink-0">
                  {row.validity}
                </span>
              )}
            </div>

            <div className="grid grid-cols-3 gap-1.5 text-center text-xs font-mono">
              <div className="p-1.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <span className="text-[9px] text-slate-400 block mb-0.5">NORMAL</span>
                <span className="font-bold text-[11px] text-slate-800 dark:text-slate-200">{row.normal || '—'}</span>
              </div>
              <div className="p-1.5 rounded bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
                <span className="text-[9px] text-amber-700 dark:text-amber-400 block mb-0.5 font-bold">URGENT</span>
                <span className="font-bold text-[11px] text-amber-900 dark:text-amber-300">{row.urgent || '—'}</span>
              </div>
              <div className="p-1.5 rounded bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800">
                <span className="text-[9px] text-doc-seal dark:text-red-400 block mb-0.5 font-bold">EXECUTIVE</span>
                <span className="font-bold text-[11px] text-doc-seal dark:text-red-300">{row.executive || '—'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
