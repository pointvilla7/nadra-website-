'use client';

import React from 'react';
import { ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { ARTICLES } from '@/lib/data/articles';
import Link from 'next/link';

export function formatRelativeVerification(dateStr: string, t: (en: string, ur?: string) => string): string {
  if (!dateStr) return t('Verified Today', 'آج تصدیق شدہ');
  
  const verifiedDate = new Date(dateStr);
  if (isNaN(verifiedDate.getTime())) {
    return dateStr;
  }

  const now = new Date();
  const diffMs = now.getTime() - verifiedDate.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0 && diffHours < 1) {
    return t('Just Updated', 'ابھی اپڈیٹ ہوا');
  } else if (diffDays <= 0) {
    return t('Verified Today', 'آج تصدیق شدہ');
  } else if (diffDays === 1) {
    return t('Verified Yesterday', 'کل تصدیق شدہ');
  } else if (diffDays > 1 && diffDays < 30) {
    return t(`Verified ${diffDays}d ago`, `${diffDays} دن پہلے`);
  } else {
    return dateStr;
  }
}

export const RecentlyVerifiedTicker: React.FC = () => {
  const { t } = useLanguage();

  const staticItems = [
    {
      key: 'cnic-kaise-banaye',
      labelEn: 'NADRA Smart CNIC Fee 2026',
      labelUr: 'نادرا سمارٹ شناختی کارڈ فیس 2026',
    },
    {
      key: 'fee-2026',
      labelEn: 'Pakistani e-Passport Fee Chart',
      labelUr: 'پاکستان ای پاسپورٹ فیس شیڈول 2026',
    },
    {
      key: 'bisp-eligibility-check-by-cnic',
      labelEn: 'BISP 8171 Kafaalat (Check via Portal)',
      labelUr: 'بے نظیر کفالت 8171 پورٹل تصدیق',
    },
  ];

  return (
    <div className="w-full rounded-2xl p-3 sm:p-4 border border-doc-brass/30 bg-doc-ink text-white my-6 sm:my-8 shadow-doc-card">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 sm:gap-4">
        {/* Title Label */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-doc-brass shrink-0">
            {t('VERIFIED CIVIC UPDATES (2026)', 'مصدقہ حکومتی معلومات (2026)')}
          </span>
        </div>

        {/* Static, standard responsive grid/flex of verified items — NO animation, NO scroll, NO touch trapping */}
        <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 flex-wrap">
          {staticItems.map((item, idx) => {
            const article = ARTICLES[item.key];
            const lastVerified = article ? article.lastVerified : 'August 16, 2026';
            const fullPath = article ? article.fullPath : '/';
            const formattedTime = formatRelativeVerification(lastVerified, t);

            return (
              <Link
                key={idx}
                href={fullPath}
                className="flex-1 min-w-[200px] min-h-[44px] flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-doc-brass/30 text-slate-200 hover:text-white transition group"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-serif font-bold text-doc-paper group-hover:text-doc-brass transition text-xs sm:text-sm truncate">
                    {t(item.labelEn, item.labelUr)}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="font-mono text-[10px] text-doc-brass flex items-center gap-1 bg-doc-ink px-1.5 py-0.5 rounded border border-doc-brass/20">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {formattedTime}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-doc-brass transition" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
