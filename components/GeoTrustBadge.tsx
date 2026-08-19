'use client';

import React from 'react';
import { CalendarCheck, ShieldCheck, ExternalLink, UserCheck } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { VerifiedBadge } from './VerifiedBadge';

interface GeoTrustBadgeProps {
  lastVerified: string;
  officialSource?: {
    name: string;
    url: string;
  };
  author?: {
    name: string;
    role: string;
  };
  categorySlug?: string;
}

export const GeoTrustBadge: React.FC<GeoTrustBadgeProps> = ({
  lastVerified,
  officialSource = { name: 'Official Gazette of Pakistan', url: 'https://pakistaninfohub.com' },
  author,
}) => {
  const { t } = useLanguage();

  // Dynamic relative time computation from lastVerified date
  const getRelativeText = (dateString: string) => {
    try {
      const targetDate = new Date(dateString);
      if (isNaN(targetDate.getTime())) return t('Recently updated', 'حال ہی میں اپ ڈیٹ');
      const now = new Date();
      const diffMs = Math.max(0, now.getTime() - targetDate.getTime());
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      
      if (diffDays === 0) return t('Updated today', 'آج تصدیق شدہ');
      if (diffDays === 1) return t('Updated 1 day ago', '1 دن پہلے تصدیق شدہ');
      if (diffDays < 30) return t(`Updated ${diffDays} days ago`, `${diffDays} دن پہلے تصدیق شدہ`);
      const diffMonths = Math.floor(diffDays / 30);
      return t(`Updated ${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`, `${diffMonths} ماہ قبل تصدیق شدہ`);
    } catch {
      return t('Recently updated', 'حال ہی میں اپ ڈیٹ');
    }
  };

  const relativeTime = getRelativeText(lastVerified);

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl doc-card border-l-4 border-l-doc-seal my-4 text-xs">
      <div className="flex items-center gap-3">
        <VerifiedBadge variant="header" textEn="INDEPENDENTLY VERIFIED RECORD" />
        <div className="space-y-0.5">
          <div className="flex flex-wrap items-center gap-1.5 font-bold text-doc-ink dark:text-doc-dark-paper">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0 motion-reduce:animate-none" />
            <CalendarCheck className="w-3.5 h-3.5 text-doc-seal dark:text-red-400 shrink-0" />
            <span>{relativeTime}</span>
            <span className="text-slate-400 font-normal">•</span>
            <span className="font-mono text-doc-seal dark:text-red-300 font-extrabold">{lastVerified}</span>
          </div>
          {author && (
            <p className="text-[11px] text-slate-600 dark:text-slate-300 font-medium flex items-center flex-wrap gap-1">
              <span>{t('Written by:', 'تحریر:')}</span>
              <a href="/editorial-team" className="font-bold text-slate-800 dark:text-slate-100 hover:text-doc-seal underline underline-offset-2">
                {author.name}
              </a>
              <span className="text-slate-400">·</span>
              <span>{t('Reviewed by:', 'تصدیق:')}</span>
              <a href="/editorial-team" className="font-bold text-doc-seal dark:text-red-300 hover:underline">
                Editorial Review Board
              </a>
            </p>
          )}
        </div>
      </div>

      {/* Official Source Citation Link */}
      <a
        href={officialSource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-doc-paper dark:bg-doc-dark-base hover:bg-white text-doc-ink dark:text-doc-dark-paper border border-doc-brass/50 font-bold transition shrink-0"
      >
        <ShieldCheck className="w-3.5 h-3.5 text-doc-verified" />
        <span>{t(`Source: ${officialSource.name}`, `آفیشل ذریعہ: ${officialSource.name}`)}</span>
        <ExternalLink className="w-3 h-3 ml-0.5 text-doc-brass" />
      </a>
    </div>
  );
};
