'use client';

import React from 'react';
import { CalendarCheck, ShieldCheck, ExternalLink, UserCheck } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { VerifiedBadge } from './VerifiedBadge';

interface GeoTrustBadgeProps {
  lastVerified: string;
  officialSource: {
    name: string;
    url: string;
  };
  author?: {
    name: string;
    role: string;
  };
}

export const GeoTrustBadge: React.FC<GeoTrustBadgeProps> = ({
  lastVerified,
  officialSource,
  author,
}) => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl doc-card border-l-4 border-l-doc-seal my-4 text-xs">
      <div className="flex items-center gap-3">
        <VerifiedBadge variant="header" textEn="INDEPENDENTLY VERIFIED RECORD" />
        <div className="space-y-0.5">
          <div className="flex items-center gap-1.5 font-bold text-doc-ink dark:text-doc-dark-paper">
            <CalendarCheck className="w-3.5 h-3.5 text-doc-seal dark:text-red-400" />
            <span>{t('LAST VERIFIED ON:', 'مصدقہ تاریخ:')}</span>
            <span className="font-mono text-doc-seal dark:text-red-300 font-extrabold">{lastVerified}</span>
          </div>
          {author && (
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              {t('Verified by:', 'بذریعہ:')} <span className="font-bold text-slate-700 dark:text-slate-300">{author.name}</span> ({author.role})
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
