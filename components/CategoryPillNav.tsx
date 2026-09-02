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
    <div className="relative category-scroll-container w-full bg-[#FAF9F6] dark:bg-[#0B1120] backdrop-blur border-b border-[#F1F5F9] dark:border-slate-800 sticky top-16 z-30 shadow-xs">
      <div className="overflow-x-auto no-scrollbar py-2.5 px-4 scroll-smooth">
        <div className="max-w-7xl mx-auto flex items-center gap-2 min-w-max">
          <Link
            href="/"
            className={`min-h-[44px] sm:min-h-[38px] px-4 sm:px-3.5 py-2 sm:py-1.5 rounded-[999px] text-xs font-sans font-semibold tracking-wider transition flex items-center gap-1.5 shrink-0 ${
              pathname === '/'
                ? 'bg-[#0B1120] text-white shadow-xs'
                : 'bg-[#FAF9F6] dark:bg-[#1E2A3F] text-[#475569] dark:text-slate-300 border border-[#F1F5F9] dark:border-slate-700 hover:border-[#B8860B]'
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
                prefetch={false}
                className={`min-h-[44px] sm:min-h-[38px] px-4 sm:px-3.5 py-2 sm:py-1.5 rounded-[999px] text-xs font-sans font-medium uppercase tracking-wider transition flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? 'bg-[#0B1120] text-white shadow-xs border border-[#0B1120]'
                    : 'bg-[#FAF9F6] dark:bg-[#1E2A3F] text-[#475569] dark:text-slate-300 border border-[#F1F5F9] dark:border-slate-700 hover:border-[#B8860B]'
                }`}
              >
                <span>{t(cat.nameEn, cat.nameUr)}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
