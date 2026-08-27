'use client';

import React from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { Check, X, Shield, Star, Info, ArrowRight, CheckCircle2 } from 'lucide-react';

export interface ComparisonItem {
  titleEn: string;
  titleUr?: string;
  subtitleEn?: string;
  subtitleUr?: string;
  badgeEn?: string;
  badgeUr?: string;
  badgeVariant?: 'seal' | 'brass' | 'emerald' | 'navy' | 'blue';
  icon?: React.ReactNode;
  pointsEn?: string[];
  pointsUr?: string[];
  features?: Array<{
    labelEn: string;
    labelUr?: string;
    valueEn: string;
    valueUr?: string;
    isPositive?: boolean | null;
  }>;
  recommendedForEn?: string;
  recommendedForUr?: string;
  isPopular?: boolean;
}

export interface ComparisonVisualProps {
  items: ComparisonItem[];
  titleEn?: string;
  titleUr?: string;
  subtitleEn?: string;
  subtitleUr?: string;
  className?: string;
}

export const ComparisonVisual: React.FC<ComparisonVisualProps> = ({
  items,
  titleEn = 'Side-by-Side Document & Service Comparison',
  titleUr = 'موازنہ و فرق کا تفصیلی جائزہ',
  subtitleEn = 'Key legal distinctions, eligibility parameters & operational differences',
  subtitleUr = 'قانونی فرق، اہلیت اور استعمال کی ضروری تفصیلات',
  className = '',
}) => {
  const { t } = useLanguage();

  if (!items || items.length === 0) return null;

  const getBadgeStyle = (variant: string = 'brass') => {
    switch (variant) {
      case 'seal':
        return 'bg-doc-seal text-white border-red-500/40';
      case 'emerald':
        return 'bg-emerald-600 text-white border-emerald-400/40';
      case 'navy':
        return 'bg-navy-950 text-doc-brass border-doc-brass/40';
      case 'blue':
        return 'bg-blue-600 text-white border-blue-400/40';
      case 'brass':
      default:
        return 'bg-doc-brass text-doc-ink font-bold border-amber-400/40';
    }
  };

  return (
    <div className={`my-8 space-y-4 ${className}`}>
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-doc-brass/30 pb-3">
        <div>
          <h3 className="text-lg sm:text-xl font-serif font-extrabold text-doc-ink dark:text-white">
            {t(titleEn, titleUr)}
          </h3>
          {subtitleEn && (
            <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-0.5">
              {t(subtitleEn, subtitleUr)}
            </p>
          )}
        </div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 self-start sm:self-auto">
          {t('Comparative Analysis', 'تقابلی جائزہ')}
        </span>
      </div>

      {/* Side-by-Side Cards Grid */}
      <div
        className={`grid gap-4 ${
          items.length === 2
            ? 'grid-cols-1 md:grid-cols-2'
            : items.length === 3
            ? 'grid-cols-1 md:grid-cols-3'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
        }`}
      >
        {items.map((item, idx) => {
          const badgeStyle = getBadgeStyle(item.badgeVariant);
          const isHighlight = item.isPopular;

          return (
            <div
              key={idx}
              className={`relative flex flex-col justify-between rounded-2xl border transition-all duration-200 overflow-hidden shadow-sm ${
                isHighlight
                  ? 'border-doc-brass ring-1 ring-doc-brass/50 bg-amber-50/40 dark:bg-slate-900 shadow-doc-card'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass/60'
              }`}
            >
              {/* Top Accent Strip */}
              <div
                className={`h-1.5 w-full ${
                  isHighlight
                    ? 'bg-gradient-to-r from-doc-brass via-amber-400 to-doc-seal'
                    : 'bg-gradient-to-r from-slate-400 to-slate-600 dark:from-slate-700 dark:to-slate-600'
                }`}
              />

              <div className="p-4 sm:p-5 space-y-4 grow">
                {/* Header with Icon and Badges */}
                <div className="flex items-start justify-between gap-2">
                  <div className="w-11 h-11 rounded-xl bg-doc-ink/5 dark:bg-slate-800 border border-doc-brass/30 flex items-center justify-center text-doc-seal dark:text-doc-brass shrink-0 shadow-inner">
                    {item.icon || <Shield className="w-5 h-5" />}
                  </div>

                  {item.badgeEn && (
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border shadow-xs ${badgeStyle}`}
                    >
                      {t(item.badgeEn, item.badgeUr || '')}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h4 className="text-base font-serif font-extrabold text-doc-ink dark:text-white leading-snug">
                    {t(item.titleEn, item.titleUr || '')}
                  </h4>
                  {item.subtitleEn && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-sans mt-0.5">
                      {t(item.subtitleEn, item.subtitleUr || '')}
                    </p>
                  )}
                </div>

                {/* Key Points / Features */}
                {item.pointsEn && item.pointsEn.length > 0 && (
                  <ul className="space-y-2 text-xs font-sans text-slate-700 dark:text-slate-300">
                    {item.pointsEn.map((pt, pIdx) => {
                      const urPt = item.pointsUr && item.pointsUr[pIdx] ? item.pointsUr[pIdx] : undefined;
                      return (
                        <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{t(pt, urPt || '')}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Structured Features Table if provided */}
                {item.features && item.features.length > 0 && (
                  <div className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-3 text-xs font-sans">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start justify-between gap-2 py-1 border-b border-slate-100/60 dark:border-slate-800/60 last:border-none">
                        <span className="text-slate-500 dark:text-slate-400 font-medium">
                          {t(feat.labelEn, feat.labelUr || '')}:
                        </span>
                        <span className="font-bold text-right text-doc-ink dark:text-slate-200">
                          {t(feat.valueEn, feat.valueUr || '')}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

                {/* Bottom Target Recommendation Bar */}
              {item.recommendedForEn && (
                <div className="p-3 bg-doc-ink/5 dark:bg-slate-800/80 border-t border-doc-brass/20 text-xs font-sans">
                  <span className="text-[10px] font-mono uppercase font-bold text-doc-seal dark:text-doc-brass block mb-0.5">
                    {t('Target Beneficiary:', 'مستفید ہونے والے:')}
                  </span>
                  <p className="text-slate-700 dark:text-slate-200 text-[11px] leading-snug font-medium">
                    {t(item.recommendedForEn, item.recommendedForUr || '')}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
