'use client';

import React from 'react';
import { FeeItem } from '@/lib/data/articles';
import { useLanguage } from '@/lib/context/LanguageContext';
import { CreditCard, Clock } from 'lucide-react';

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

  if (!feeItems || feeItems.length === 0) return null;

  return (
    <div className="my-8 overflow-hidden rounded-2xl doc-card border border-doc-brass/40 shadow-doc-card">
      {/* Table Header Title */}
      <div className="bg-doc-ink px-6 py-4 text-white flex items-center justify-between border-b border-doc-brass/40">
        <div className="flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-doc-brass" />
          <h3 className="font-serif font-bold text-base md:text-lg text-white">
            {t(titleEn, titleUr)}
          </h3>
        </div>
        <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-doc-seal text-white uppercase tracking-widest">
          {t('Official Rates', 'مصدقہ نرخ')}
        </span>
      </div>

      {/* Responsive Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs md:text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800/90 text-doc-ink dark:text-doc-dark-paper font-bold uppercase tracking-wider border-b border-doc-brass/30">
            <tr>
              <th scope="col" className="px-6 py-3.5 font-serif">
                {t('Category / Document Service', 'سروس / تفصیلا ت')}
              </th>
              <th scope="col" className="px-6 py-3.5 font-mono">
                {t('Normal Delivery', 'نارمل فیس')}
              </th>
              <th scope="col" className="px-6 py-3.5 font-mono">
                {t('Urgent Delivery', 'ارجنٹ فیس')}
              </th>
              <th scope="col" className="px-6 py-3.5 font-mono text-doc-seal dark:text-red-400">
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
                <td className="px-6 py-4 font-bold text-doc-ink dark:text-white font-serif">
                  {t(item.serviceEn, item.serviceUr)}
                </td>
                <td className="px-6 py-4 font-mono font-semibold text-slate-700 dark:text-slate-300">
                  {item.normal}
                </td>
                <td className="px-6 py-4 font-mono font-bold text-amber-700 dark:text-amber-400">
                  {item.urgent}
                </td>
                <td className="px-6 py-4 font-mono font-extrabold text-doc-seal dark:text-red-400">
                  {item.executive}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Info Note */}
      <div className="bg-doc-paper dark:bg-slate-900/60 px-6 py-3 border-t border-doc-brass/30 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5 font-sans">
        <Clock className="w-3.5 h-3.5 text-doc-seal" />
        <span>
          {t(
            'Fees are payable directly at official government counters or authorized e-banking portals.',
            'فیس نادرا یا پاسپورٹ کاؤنٹر پر یا ای بینکنگ کے ذریعے براہ راست جمع کروائیں۔'
          )}
        </span>
      </div>
    </div>
  );
};
