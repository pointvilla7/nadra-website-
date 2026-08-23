'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, LayoutGrid, Compass } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

interface MobileBottomNavProps {
  onOpenSearch: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenSearch }) => {
  const { t } = useLanguage();
  const pathname = usePathname();

  const isHomeActive = pathname === '/';
  const isTrackerActive = pathname.startsWith('/tracker');
  const isCategoriesActive = pathname.includes('category') || pathname.includes('sitemap');

  const scrollToCategories = (e: React.MouseEvent) => {
    if (pathname === '/') {
      const el = document.getElementById('categories');
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-lg border-t border-slate-200/90 dark:border-slate-800 shadow-[0_-4px_20px_rgba(0,0,0,0.12)] transition-transform"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="grid grid-cols-4 items-center h-16 px-1 max-w-md mx-auto">
        
        {/* 1. HOME */}
        <Link
          href="/"
          className={`flex flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-xl transition-all ${
            isHomeActive
              ? 'text-doc-brass dark:text-amber-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
          aria-current={isHomeActive ? 'page' : undefined}
        >
          <div className="relative">
            <Home className="w-5 h-5" />
            {isHomeActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-doc-brass" />
            )}
          </div>
          <span className="text-[10px] font-mono tracking-tight mt-1">
            {t('Home', 'ہوم')}
          </span>
        </Link>

        {/* 2. SEARCH (Triggers Modal) */}
        <button
          onClick={onOpenSearch}
          type="button"
          className="flex flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all active:scale-95"
          aria-label="Open search directory"
        >
          <div className="relative">
            <Search className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono tracking-tight mt-1">
            {t('Search', 'تلاش')}
          </span>
        </button>

        {/* 3. CATEGORIES */}
        <Link
          href="/#categories"
          onClick={scrollToCategories}
          className={`flex flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-xl transition-all ${
            isCategoriesActive
              ? 'text-doc-brass dark:text-amber-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <div className="relative">
            <LayoutGrid className="w-5 h-5" />
            {isCategoriesActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-doc-brass" />
            )}
          </div>
          <span className="text-[10px] font-mono tracking-tight mt-1">
            {t('Categories', 'شعبہ جات')}
          </span>
        </Link>

        {/* 4. TRACKER */}
        <Link
          href="/tracker"
          className={`flex flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-xl transition-all ${
            isTrackerActive
              ? 'text-doc-brass dark:text-amber-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
          aria-current={isTrackerActive ? 'page' : undefined}
        >
          <div className="relative">
            <Compass className="w-5 h-5" />
            {isTrackerActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-doc-brass" />
            )}
          </div>
          <span className="text-[10px] font-mono tracking-tight mt-1">
            {t('Tracker', 'ٹریکر')}
          </span>
        </Link>

      </div>
    </nav>
  );
};
