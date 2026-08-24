'use client';

import React from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { ShieldCheck, ArrowRight, ArrowDown } from 'lucide-react';

export interface StepFlowItem {
  number: number | string;
  titleEn: string;
  titleUr: string;
  descEn: string;
  descUr: string;
  icon?: React.ReactNode;
  tagEn?: string;
  tagUr?: string;
  noteEn?: string;
  noteUr?: string;
}

interface StepFlowDiagramProps {
  titleEn?: string;
  titleUr?: string;
  subtitleEn?: string;
  subtitleUr?: string;
  badgeEn?: string;
  badgeUr?: string;
  steps: StepFlowItem[];
  className?: string;
}

export const StepFlowDiagram: React.FC<StepFlowDiagramProps> = ({
  titleEn = 'Step-by-Step Official Workflow',
  titleUr = 'سرکاری طریقہ کار کے مراحل',
  subtitleEn = 'Verified chronological sequence under 2026 statutory regulations',
  subtitleUr = 'سال 2026 کے ضوابط کے تحت تصدیق شدہ مراحل',
  badgeEn = 'VERIFIED PROCESS FLOW',
  badgeUr = 'مصدقہ مرحلہ وار خاکہ',
  steps,
  className = '',
}) => {
  const { t } = useLanguage();

  return (
    <figure
      aria-label={t(titleEn, titleUr)}
      className={`my-8 p-5 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white border border-doc-brass/30 shadow-xl overflow-hidden relative ${className}`}
    >
      {/* Background Blueprint Grid Watermark */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />

      {/* Header Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <h3 className="text-base sm:text-lg font-serif font-bold text-white tracking-wide">
              {t(titleEn, titleUr)}
            </h3>
          </div>
          {subtitleEn && (
            <p className="text-xs text-slate-400 font-sans">
              {t(subtitleEn, subtitleUr)}
            </p>
          )}
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-doc-ink/80 border border-doc-brass/40 text-[11px] font-mono text-doc-brass">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="font-bold tracking-wider uppercase">{t(badgeEn, badgeUr)}</span>
        </div>
      </div>

      {/* Responsive Workflow Container */}
      {/* Desktop / Tablet: Grid with SVG Horizontal Connectors */}
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between p-4 rounded-xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700/70 hover:border-doc-brass/60 transition-all duration-200 shadow-sm"
            >
              <div>
                {/* Step Top Bar: Icon + Numbered Circle */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-700 flex items-center justify-center text-doc-brass shadow-inner group-hover:border-doc-brass/50 transition-colors">
                    {st.icon}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {st.tagEn && (
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/50">
                        {t(st.tagEn, st.tagUr)}
                      </span>
                    )}
                    <span className="w-7 h-7 rounded-full bg-gradient-to-br from-doc-brass to-amber-600 text-doc-ink font-mono font-black text-xs flex items-center justify-center shadow-md">
                      {st.number}
                    </span>
                  </div>
                </div>

                {/* Step Title */}
                <h4 className="text-sm font-serif font-bold text-white mb-1.5 leading-snug group-hover:text-amber-300 transition-colors">
                  {t(st.titleEn, st.titleUr)}
                </h4>

                {/* Step Description */}
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {t(st.descEn, st.descUr)}
                </p>
              </div>

              {/* Optional Note / Sub-indicator */}
              {st.noteEn && (
                <div className="mt-3 pt-2.5 border-t border-slate-700/60 text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <span>ℹ️</span>
                  <span>{t(st.noteEn, st.noteUr)}</span>
                </div>
              )}

              {/* Desktop Connecting Arrow (shown between cards on large screens) */}
              {idx < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-slate-900 border border-doc-brass/40 items-center justify-center text-doc-brass shadow-md pointer-events-none"
                >
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Schema Caption */}
      <figcaption className="relative z-10 mt-5 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 font-sans">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-doc-brass shrink-0" />
          <span>{t('Follow steps in direct numerical order. Avoid unverified middle-men or agents.', 'مراحل پر بالترتیب عمل کریں۔ غیر تصدیق شدہ ایجنٹوں یا مڈل مین سے ہوشیار رہیں۔')}</span>
        </span>
        <span className="font-mono text-[11px] text-slate-500">PAKISTAN INFO HUB • 2026 DIRECTORY</span>
      </figcaption>
    </figure>
  );
};
