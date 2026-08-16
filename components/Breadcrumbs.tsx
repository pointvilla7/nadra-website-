'use client';

import React from 'react';
import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export interface BreadcrumbItem {
  nameEn: string;
  nameUr: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { t } = useLanguage();

  return (
    <nav className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 py-3 my-2 overflow-x-auto whitespace-nowrap">
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
      >
        <Home className="w-3.5 h-3.5" />
        <span>{t('Home', 'ہوم')}</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const name = t(item.nameEn, item.nameUr);

        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            {item.url && !isLast ? (
              <Link
                href={item.url}
                className="hover:text-emerald-600 dark:hover:text-emerald-400 transition font-medium"
              >
                {name}
              </Link>
            ) : (
              <span className="font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[200px] sm:max-w-xs">
                {name}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
