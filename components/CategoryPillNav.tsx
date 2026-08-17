'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CATEGORIES } from '@/lib/data/categories';
import { useLanguage } from '@/lib/context/LanguageContext';

export const CategoryPillNav: React.FC = () => {
  const { t } = useLanguage();
  const pathname = usePathname();

  return (
    <div className="w-full bg-doc-paper/80 dark:bg-doc-dark-card/90 backdrop-blur border-b border-doc-brass/20 py-2.5 px-4 sticky top-16 z-30 overflow-x-auto no-scrollbar shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center gap-2 min-w-max">
        <Link
          href="/"
          className={`min-h-[40px] px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition flex items-center gap-1.5 shrink-0 ${
            pathname === '/'
              ? 'bg-doc-ink text-white shadow-md'
              : 'bg-white dark:bg-doc-dark-base text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-doc-brass'
          }`}
        >
          <span>📌</span>
          <span>{t('ALL RECORDS', 'تمام ریکارڈز', 'ALL RECORDS')}</span>
        </Link>

        {CATEGORIES.map((cat) => {
          const isActive = pathname.startsWith(`/${cat.slug}`);

          return (
            <Link
              key={cat.id}
              href={`/${cat.slug}`}
              className={`min-h-[40px] px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 shrink-0 ${
                isActive
                  ? 'bg-doc-seal text-white shadow-md'
                  : 'bg-white dark:bg-doc-dark-base text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-doc-brass'
              }`}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.accentColor }} />
              <span className="font-serif">{t(cat.nameEn, cat.nameUr)}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
