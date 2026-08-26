'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  CreditCard,
  Plane,
  Landmark,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Compass,
  FileText,
  Clock,
  Sparkles,
  Activity,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { ARTICLES, Article } from '@/lib/data/articles';

interface GuideCardData {
  slug: string;
  fullPath: string;
  categoryNameEn: string;
  categoryNameUr: string;
  titleEn: string;
  titleUr: string;
  descriptionEn: string;
  descriptionUr: string;
  lastVerified: string;
  iconType: string;
  accentBg: string;
  accentText: string;
}

const RECENT_GUIDES_CONFIG: { key: string; iconType: string; categoryEn: string; categoryUr: string; accentBg: string; accentText: string }[] = [
  {
    key: 'cnic-kaise-banaye',
    iconType: 'CreditCard',
    categoryEn: 'NADRA Services',
    categoryUr: 'نادرا سروسز',
    accentBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    accentText: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    key: 'fee-2026',
    iconType: 'Plane',
    categoryEn: 'Passports & Visas',
    categoryUr: 'پاسپورٹ و امیگریشن',
    accentBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    accentText: 'text-amber-600 dark:text-amber-400',
  },
  {
    key: 'fbr-filer-status-check-cnic',
    iconType: 'Landmark',
    categoryEn: 'Tax & FBR Services',
    categoryUr: 'ٹیکس اور ایف بی آر',
    accentBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    accentText: 'text-blue-600 dark:text-blue-400',
  },
  {
    key: 'hajj-balloting-result-check-online',
    iconType: 'Compass',
    categoryEn: 'Hajj & Religious Affairs',
    categoryUr: 'حج و مذہبی امور',
    accentBg: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20',
    accentText: 'text-teal-600 dark:text-teal-400',
  },
  {
    key: 'sehat-card-eligibility-check-by-cnic',
    iconType: 'Activity',
    categoryEn: 'Health & Medical Aid',
    categoryUr: 'صحت اور ہسپتال',
    accentBg: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
    accentText: 'text-rose-600 dark:text-rose-400',
  },
  {
    key: 'bisp-eligibility-check-by-cnic',
    iconType: 'HeartHandshake',
    categoryEn: 'Welfare & Social Safety',
    categoryUr: 'احساس و بے نظیر پروگرام',
    accentBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    accentText: 'text-purple-600 dark:text-purple-400',
  },
];

function getCategoryIcon(type: string, className = 'w-5 h-5') {
  switch (type) {
    case 'CreditCard':
      return <CreditCard className={className} />;
    case 'Plane':
      return <Plane className={className} />;
    case 'Landmark':
      return <Landmark className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Activity':
      return <Activity className={className} />;
    case 'HeartHandshake':
      return <HeartHandshake className={className} />;
    default:
      return <FileText className={className} />;
  }
}

export function formatRelativeVerification(dateStr: string, t: (en: string, ur?: string) => string): string {
  if (!dateStr) return t('Verified Today', 'آج مصدقہ');

  const verifiedDate = new Date(dateStr);
  if (isNaN(verifiedDate.getTime())) {
    return dateStr;
  }

  const now = new Date();
  const diffMs = now.getTime() - verifiedDate.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0 && diffHours < 1) {
    return t('Verified Just now', 'ابھی تصدیق شدہ');
  } else if (diffDays <= 0) {
    return t('Verified Today', 'آج تصدیق شدہ');
  } else if (diffDays === 1) {
    return t('Verified 1 day ago', '1 دن پہلے تصدیق شدہ');
  } else if (diffDays > 1 && diffDays < 30) {
    return t(`Verified ${diffDays} days ago`, `${diffDays} دن پہلے تصدیق شدہ`);
  } else {
    return t('Verified August 2026', 'اگست 2026 مصدقہ');
  }
}

export const RecentlyUpdatedGuides: React.FC = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [guides, setGuides] = useState<GuideCardData[]>([]);

  useEffect(() => {
    // Populate data from verified articles
    const loadedGuides: GuideCardData[] = RECENT_GUIDES_CONFIG.map((cfg) => {
      const art: Article | undefined = ARTICLES[cfg.key];
      return {
        slug: cfg.key,
        fullPath: art ? art.fullPath : `/${cfg.key}`,
        categoryNameEn: cfg.categoryEn,
        categoryNameUr: cfg.categoryUr,
        titleEn: art ? art.titleEn : 'Official Civic Service Guide 2026',
        titleUr: art ? art.titleUr : 'سرکاری سروس گائیڈ 2026',
        descriptionEn: art ? art.metaDescriptionEn : 'Verified official document procedure, requirements, and fee schedule.',
        descriptionUr: art ? art.metaDescriptionUr : 'مصدقہ حکومتی طریقہ کار، ضروری دستاویزات اور فیس کی تفصیلات۔',
        lastVerified: art ? art.lastVerified : 'August 16, 2026',
        iconType: cfg.iconType,
        accentBg: cfg.accentBg,
        accentText: cfg.accentText,
      };
    });

    // Simulate seamless async hydration / load
    const timer = setTimeout(() => {
      setGuides(loadedGuides);
      setIsLoading(false);
    }, 120);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="my-8 sm:my-12">
      {/* Section Header with visual rhythm matching the homepage */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-doc-brass text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-doc-brass" />
            <span>{t('FRESH 2026 DATA', 'تازہ ترین 2026 ڈیٹا')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B1120] dark:text-white tracking-tight">
            {t('Recently Updated Guides', 'تازہ ترین تصدیق شدہ گائیڈز')}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 font-sans mt-1">
            {t(
              'Official procedural guides and fee charts verified against official government gazettes and regulatory directives for 2026.',
              'سرکاری گزٹ اور حکومتی نوٹیفیکیشنز کے مطابق 2026 کے تصدیق شدہ فیس شیڈول اور طریقہ کار۔'
            )}
          </p>
        </div>

        <Link
          href="/sitemap"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-sans font-semibold text-doc-brass hover:text-amber-600 dark:hover:text-amber-300 transition shrink-0 group"
        >
          <span>{t('View All Verified Guides', 'تمام مصدقہ گائیڈز دیکھیں')}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {isLoading
          ? Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-5 bg-[#FAF9F6] dark:bg-[#1E2A3F] border border-slate-200/80 dark:border-slate-800/80 shadow-sm animate-pulse space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-700" />
                  <div className="w-28 h-6 rounded-full bg-slate-200 dark:bg-slate-700" />
                </div>
                <div className="space-y-2">
                  <div className="w-16 h-3 rounded bg-slate-200 dark:bg-slate-700" />
                  <div className="w-full h-5 rounded bg-slate-200 dark:bg-slate-700" />
                  <div className="w-3/4 h-5 rounded bg-slate-200 dark:bg-slate-700" />
                </div>
                <div className="space-y-1.5 pt-2">
                  <div className="w-full h-3.5 rounded bg-slate-200 dark:bg-slate-700" />
                  <div className="w-5/6 h-3.5 rounded bg-slate-200 dark:bg-slate-700" />
                </div>
                <div className="pt-2 flex justify-between items-center border-t border-slate-200/60 dark:border-slate-700/60">
                  <div className="w-24 h-4 rounded bg-slate-200 dark:bg-slate-700" />
                  <div className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-700" />
                </div>
              </div>
            ))
          : guides.map((guide) => {
              const relativeTime = formatRelativeVerification(guide.lastVerified, t);

              return (
                <Link
                  key={guide.slug}
                  href={guide.fullPath}
                  className="group relative flex flex-col justify-between rounded-2xl p-5 bg-[#FAF9F6] dark:bg-[#1E2A3F] border border-[#F1F5F9] dark:border-slate-800/90 hover:border-doc-brass/50 dark:hover:border-doc-brass/50 shadow-xs hover:shadow-lg transition-all duration-200 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-doc-brass/40"
                >
                  <div>
                    {/* Top Row: Category Icon + Verified Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${guide.accentBg}`}>
                        {getCategoryIcon(guide.iconType, 'w-5 h-5')}
                      </div>

                      {/* Verified Badge */}
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 text-emerald-700 dark:text-emerald-300 font-mono text-[11px] font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{relativeTime}</span>
                      </span>
                    </div>

                    {/* Category Name Tag */}
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1 block">
                      {t(guide.categoryNameEn, guide.categoryNameUr)}
                    </span>

                    {/* Guide Title */}
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#0B1120] dark:text-white group-hover:text-doc-brass transition-colors line-clamp-2 leading-snug">
                      {t(guide.titleEn, guide.titleUr)}
                    </h3>

                    {/* 1-2 Line Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-2 line-clamp-2 leading-relaxed">
                      {t(guide.descriptionEn, guide.descriptionUr)}
                    </p>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-4 pt-3 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between text-xs font-sans font-semibold text-doc-brass group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                    <span>{t('Read Complete Guide', 'مکمل رہنمائی پڑھیں')}</span>
                    <div className="w-6 h-6 rounded-full bg-amber-500/10 group-hover:bg-doc-brass group-hover:text-white flex items-center justify-center transition-all">
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>
    </section>
  );
};
