'use client';

import React from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { ShieldCheck, CheckCircle2, ArrowRight, ArrowDown } from 'lucide-react';

export interface ProcessStepItem {
  number?: number | string;
  stepNumber?: number | string;
  titleEn?: string;
  titleUr?: string;
  descEn?: string;
  descUr?: string;
  detailEn?: string;
  detailUr?: string;
  icon?: React.ReactNode;
  tagEn?: string;
  tagUr?: string;
  badgeEn?: string;
  badgeUr?: string;
}

export interface ProcessStepsDiagramProps {
  steps: ProcessStepItem[];
  titleEn?: string;
  titleUr?: string;
  subtitleEn?: string;
  subtitleUr?: string;
  badgeEn?: string;
  badgeUr?: string;
  variant?: 'dark' | 'paper' | 'navy';
  className?: string;
}

export const ProcessStepsDiagram: React.FC<ProcessStepsDiagramProps> = ({
  steps,
  titleEn = 'Step-by-Step Official Workflow',
  titleUr = 'مرحلہ وار سرکاری طریقہ کار',
  subtitleEn = 'Verified chronological sequence under 2026 civic regulations',
  subtitleUr = 'سال 2026 کے سرکاری ضوابط کے تحت تصدیق شدہ مراحل',
  badgeEn = 'VERIFIED PROCESS FLOW',
  badgeUr = 'مصدقہ مرحلہ وار خاکہ',
  variant = 'dark',
  className = '',
}) => {
  const { t } = useLanguage();

  if (!steps || steps.length === 0) return null;

  const isDark = variant === 'dark' || variant === 'navy';

  return (
    <figure
      aria-label={t(titleEn, titleUr)}
      className={`my-8 p-4 sm:p-6 md:p-8 rounded-2xl border shadow-xl overflow-hidden relative ${
        isDark
          ? 'bg-gradient-to-b from-navy-950 via-slate-900 to-navy-950 text-white border-doc-brass/30'
          : 'bg-doc-paper dark:bg-slate-900 text-doc-ink dark:text-white border-doc-brass/40'
      } ${className}`}
    >
      {/* Background Decorative SVG Blueprint Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="processGrid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#D4A017" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#processGrid)" />
      </svg>

      {/* Header Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-doc-brass/25 pb-4 mb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <h3 className="text-base sm:text-lg md:text-xl font-serif font-extrabold tracking-wide">
              {t(titleEn, titleUr)}
            </h3>
          </div>
          {subtitleEn && (
            <p className={`text-xs font-sans ${isDark ? 'text-slate-400' : 'text-slate-600 dark:text-slate-400'}`}>
              {t(subtitleEn, subtitleUr)}
            </p>
          )}
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-doc-ink/80 dark:bg-black/60 border border-doc-brass/40 text-[11px] font-mono text-doc-brass">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="font-bold tracking-wider uppercase">{t(badgeEn, badgeUr)}</span>
        </div>
      </div>

      {/* Desktop / Tablet: Horizontal Stepper Grid with Connecting Arrows */}
      <div className="relative z-10 hidden md:block">
        <div
          className={`grid gap-4 items-stretch ${
            steps.length === 2
              ? 'grid-cols-2'
              : steps.length === 3
              ? 'grid-cols-3'
              : steps.length === 4
              ? 'grid-cols-4'
              : 'grid-cols-3 lg:grid-cols-5'
          }`}
        >
          {steps.map((st, idx) => {
            const stepNum = st.number ?? st.stepNumber ?? idx + 1;
            const title = t(st.titleEn || '', st.titleUr || '');
            const desc = t(st.descEn || st.detailEn || '', st.descUr || st.detailUr || '');
            const tag = st.tagEn || st.badgeEn ? t(st.tagEn || st.badgeEn || '', st.tagUr || st.badgeUr || '') : null;
            const isLast = idx === steps.length - 1;

            return (
              <div key={idx} className="relative flex flex-col justify-between group">
                <div
                  className={`h-full flex flex-col justify-between p-4 rounded-xl border transition-all duration-200 shadow-sm ${
                    isDark
                      ? 'bg-slate-850/80 hover:bg-slate-800 border-slate-700/80 hover:border-doc-brass/60'
                      : 'bg-white dark:bg-slate-850 hover:bg-amber-50/40 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-doc-brass'
                  }`}
                >
                  <div>
                    {/* Top Row: Icon + Numbered Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-doc-ink/90 dark:bg-black border border-doc-brass/30 flex items-center justify-center text-doc-brass shadow-inner group-hover:scale-105 transition-transform shrink-0">
                        {st.icon || <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                      </div>

                      <div className="flex items-center gap-1">
                        {tag && (
                          <span className="text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/50">
                            {tag}
                          </span>
                        )}
                        <span className="w-6 h-6 rounded-full bg-gradient-to-br from-doc-brass to-amber-600 text-doc-ink font-mono font-black text-xs flex items-center justify-center shadow-md">
                          {stepNum}
                        </span>
                      </div>
                    </div>

                    {/* Step Title */}
                    <h4 className="text-sm font-serif font-bold leading-snug mb-1.5 text-doc-ink dark:text-white">
                      {title}
                    </h4>

                    {/* Step Description */}
                    {desc && (
                      <p className={`text-xs leading-relaxed font-sans ${isDark ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}`}>
                        {desc}
                      </p>
                    )}
                  </div>

                  {/* Micro Footer Indicator */}
                  <div className="mt-3 pt-2 border-t border-slate-200/40 dark:border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>Step {stepNum} of {steps.length}</span>
                    <span className="text-emerald-400 font-bold">✓ Verified</span>
                  </div>
                </div>

                {/* Connecting Right Arrow for Horizontal Flow */}
                {!isLast && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-doc-ink border border-doc-brass/60 items-center justify-center text-doc-brass shadow-md pointer-events-none">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile View: Vertical Timeline with Connecting Line (Zero horizontal overflow at 375px) */}
      <div className="relative z-10 md:hidden space-y-3">
        {steps.map((st, idx) => {
          const stepNum = st.number ?? st.stepNumber ?? idx + 1;
          const title = t(st.titleEn || '', st.titleUr || '');
          const desc = t(st.descEn || st.detailEn || '', st.descUr || st.detailUr || '');
          const tag = st.tagEn || st.badgeEn ? t(st.tagEn || st.badgeEn || '', st.tagUr || st.badgeUr || '') : null;
          const isLast = idx === steps.length - 1;

          return (
            <div key={idx} className="relative flex gap-3.5">
              {/* Left Column: Number badge and vertical connector line */}
              <div className="flex flex-col items-center shrink-0">
                <span className="w-7 h-7 rounded-full bg-gradient-to-br from-doc-brass to-amber-600 text-doc-ink font-mono font-black text-xs flex items-center justify-center shadow-md z-10">
                  {stepNum}
                </span>
                {!isLast && (
                  <div className="w-0.5 grow bg-gradient-to-b from-doc-brass/60 to-doc-brass/20 my-1 rounded-full" />
                )}
              </div>

              {/* Right Column: Card Content */}
              <div
                className={`grow p-3.5 rounded-xl border mb-1.5 ${
                  isDark
                    ? 'bg-slate-850/90 border-slate-700/80 text-white'
                    : 'bg-white dark:bg-slate-850 border-slate-200 dark:border-slate-700 text-doc-ink dark:text-white'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-1.5">
                    {st.icon && <span className="text-doc-brass text-xs">{st.icon}</span>}
                    <h4 className="text-xs sm:text-sm font-serif font-bold">{title}</h4>
                  </div>
                  {tag && (
                    <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.2 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/50 shrink-0">
                      {tag}
                    </span>
                  )}
                </div>

                {desc && (
                  <p className={`text-[11px] leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}`}>
                    {desc}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </figure>
  );
};
