'use client';

import React from 'react';
import Link from 'next/link';
import { UserCheck, ShieldCheck, Award, ExternalLink } from 'lucide-react';
import { Author } from '@/lib/data/authors';
import { useLanguage } from '@/lib/context/LanguageContext';

interface AuthorBioProps {
  author: Author;
  lastVerifiedDate?: string;
  className?: string;
}

export const AuthorBio: React.FC<AuthorBioProps> = ({
  author,
  lastVerifiedDate,
  className = '',
}) => {
  const { t } = useLanguage();

  return (
    <div
      className={`my-8 doc-card rounded-2xl p-6 border-l-4 border-l-doc-seal border-doc-brass/30 bg-white dark:bg-doc-dark-card shadow-sm space-y-4 ${className}`}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-doc-brass/20 pb-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-doc-ink text-doc-paper dark:bg-slate-900 border border-doc-brass/40 flex items-center justify-center font-serif font-extrabold text-lg shrink-0 shadow-inner">
            {author.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Link
                href={`/authors/${author.slug}`}
                className="font-serif font-extrabold text-lg text-doc-ink dark:text-white hover:text-doc-seal dark:hover:text-red-400 transition"
              >
                {author.name}
              </Link>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                <UserCheck className="w-3 h-3" />
                <span>{t('VERIFIED RESEARCHER', 'مصدقہ محقق')}</span>
              </span>
            </div>
            <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
              {author.role}
            </p>
          </div>
        </div>

        <Link
          href={`/authors/${author.slug}`}
          className="text-xs font-mono font-bold text-doc-seal dark:text-red-400 hover:underline flex items-center gap-1 shrink-0"
        >
          <span>{t('View Full Bio', 'مکمل پروفائل')}</span>
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>

      <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
        <p>{t(author.bioEn, author.bioUr)}</p>
        <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] font-mono text-slate-500 dark:text-slate-400 border-t border-doc-brass/10">
          <span className="flex items-center gap-1 text-doc-brass-dark dark:text-doc-brass-light font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>{author.credentials}</span>
          </span>
          {lastVerifiedDate && (
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{t('Reviewed & Fact-Checked:', 'تحقیق و تصدیق:')} {lastVerifiedDate}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
