'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export type VerifiedBadgeVariant = 'stamp' | 'header' | 'card' | 'inline';

interface VerifiedBadgeProps {
  variant?: VerifiedBadgeVariant;
  textEn?: string;
  textUr?: string;
  className?: string;
}

export const VerifiedBadge: React.FC<VerifiedBadgeProps> = ({
  variant = 'inline',
  textEn,
  textUr,
  className = '',
}) => {
  const { t } = useLanguage();

  const labelEn = textEn || (variant === 'stamp' ? 'INDEPENDENTLY VERIFIED' : 'VERIFIED RECORD 2026');
  const labelUr = textUr || (variant === 'stamp' ? 'آزادانہ مصدقہ معلومات' : 'مصدقہ 2026');

  // Variant 1: Large Embossed Stamp Badge (Hero & Major Guide Headers)
  if (variant === 'stamp') {
    return (
      <div
        className={`relative inline-flex items-center justify-center group select-none ${className}`}
        title={t(
          'Independently Verified Record by Pakistan Info Hub (Not affiliated with Govt of Pakistan)',
          'پاکستان انفو ہب کا آزادانہ طور پر تصدیق شدہ ریکارڈ'
        )}
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#B08D57] to-[#8C6D37] p-1 shadow-xl shadow-doc-brass/25 transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none">
          <div className="w-full h-full rounded-full border-2 border-dashed border-[#F7F4EC]/60 bg-doc-ink dark:bg-doc-dark-base flex items-center justify-center relative overflow-hidden shadow-inner">
            {/* Circular Text Path */}
            <svg className="w-full h-full absolute inset-0 animate-spin-slow motion-reduce:animate-none" viewBox="0 0 100 100">
              <path
                id="unifiedSealPath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="fill-doc-brass font-mono font-extrabold tracking-widest text-[8px] uppercase">
                <textPath href="#unifiedSealPath" startOffset="0%">
                  PAKISTAN INFO HUB • INDEPENDENTLY VERIFIED 2026 •
                </textPath>
              </text>
            </svg>

            {/* Central Shield Icon */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center p-1">
              <ShieldCheck className="w-5 h-5 text-doc-brass stroke-[2.5]" />
              <span className="text-[7.5px] font-mono font-extrabold text-doc-paper dark:text-slate-200 tracking-tighter uppercase leading-none mt-0.5">
                VERIFIED
              </span>
            </div>

            {/* Shimmer Glare */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none motion-reduce:hidden" />
          </div>
        </div>
        <div className="absolute -bottom-2 flex gap-1 pointer-events-none z-0 opacity-90">
          <div className="w-2.5 h-4 bg-[#A02334] transform -rotate-12 rounded-b-xs shadow-sm" />
          <div className="w-2.5 h-4 bg-[#B08D57] transform rotate-12 rounded-b-xs shadow-sm" />
        </div>
      </div>
    );
  }

  // Variant 2: Guide Header / Section Level Badge
  if (variant === 'header') {
    return (
      <div
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-doc-paper dark:bg-doc-dark-base border border-doc-brass/40 shadow-sm text-doc-ink dark:text-slate-200 text-xs font-mono font-bold uppercase tracking-wider group hover:border-doc-seal transition ${className}`}
      >
        <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 stroke-[2.5]" />
        <span>{t(labelEn, labelUr)}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse motion-reduce:animate-none" />
      </div>
    );
  }

  // Variant 3: Card Badge (Guide Cards & Index Grids)
  if (variant === 'card') {
    return (
      <div
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-950/20 dark:bg-emerald-950/40 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 text-[11px] font-mono font-extrabold uppercase tracking-tight ${className}`}
      >
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
        <span>{t(labelEn, labelUr)}</span>
      </div>
    );
  }

  // Variant 4: Compact Inline Tag (Tickers, Subheaders & Meta Lines)
  return (
    <span
      className={`inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider ${className}`}
    >
      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
      <span>{t(labelEn, labelUr)}</span>
    </span>
  );
};
