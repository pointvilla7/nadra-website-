'use client';

import React from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { Check, X, ShieldAlert, Sparkles } from 'lucide-react';

interface ComparisonRow {
  featureEn: string;
  featureUr: string;
  itemAEn: string;
  itemAUr: string;
  itemBEn: string;
  itemBUr: string;
  advantageA?: boolean;
}

interface ComparisonInfographicProps {
  titleEn: string;
  titleUr: string;
  nameAEn: string;
  nameAUr: string;
  nameBEn: string;
  nameBUr: string;
  rows: ComparisonRow[];
}

export const ComparisonInfographic: React.FC<ComparisonInfographicProps> = ({
  titleEn,
  titleUr,
  nameAEn,
  nameAUr,
  nameBEn,
  nameBUr,
  rows
}) => {
  const { t } = useLanguage();

  return (
    <figure className="my-6 p-4 sm:p-6 bg-slate-900/80 dark:bg-doc-dark-card/90 rounded-2xl border border-doc-brass/30 shadow-lg font-sans">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <h3 className="text-sm font-bold font-serif text-slate-100 uppercase tracking-wider flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-doc-brass" />
          <span>{t(titleEn, titleUr)}</span>
        </h3>
        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
          VISUAL COMPARISON
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-700 bg-slate-800/80 text-white font-serif">
              <th className="p-3 font-bold">{t('Key Feature', 'بنیادی خصوصیت')}</th>
              <th className="p-3 font-bold text-emerald-400 border-l border-slate-700">{t(nameAEn, nameAUr)}</th>
              <th className="p-3 font-bold text-amber-400 border-l border-slate-700">{t(nameBEn, nameBUr)}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                <td className="p-3 font-medium text-slate-300">
                  {t(row.featureEn, row.featureUr)}
                </td>
                <td className="p-3 text-emerald-300 font-semibold border-l border-slate-800">
                  {t(row.itemAEn, row.itemAUr)}
                </td>
                <td className="p-3 text-amber-300 border-l border-slate-800">
                  {t(row.itemBEn, row.itemBUr)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <figcaption className="mt-3 text-center text-xs text-slate-400 italic">
        ℹ️ {t('Comparative analysis based on 2026 statutory regulations.', 'سال 2026 کے سرکاری قوانین کے مطابق موازنہ۔')}
      </figcaption>
    </figure>
  );
};
