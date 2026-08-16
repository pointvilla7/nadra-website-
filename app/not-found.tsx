'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Home, ArrowRight, ShieldAlert, Compass } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { CATEGORIES } from '@/lib/data/categories';

export default function NotFound() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && typeof window !== 'undefined') {
      window.location.href = `/?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full text-center space-y-8 doc-card bg-doc-paper dark:bg-doc-dark-card border-2 border-doc-brass/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        {/* Seal Watermark */}
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full border-8 border-dashed border-doc-brass/10 pointer-events-none" />

        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-doc-seal/10 text-doc-seal rounded-2xl border border-doc-brass/30">
            <ShieldAlert className="w-8 h-8 text-doc-seal" />
          </div>
          <span className="block font-mono text-xs text-doc-seal uppercase tracking-widest font-bold">
            ERROR 404 • GAZETTE FILE NOT FOUND
          </span>
          <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-doc-ink dark:text-slate-100">
            {t(
              "We Couldn't Find That Verified Record",
              'مطلوبہ صفحہ یا معلومات نہیں مل سکیں'
            )}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed font-sans">
            {t(
              'The page you requested may have moved or been updated under a new verified official reference number. Try searching below or browse by category.',
              'آپ کا مطلوبہ آرٹیکل منتقل کر دیا گیا ہے یا اس کا لنک تبدیل ہوا ہے۔ براہ کرم ذیل میں سرچ کریں یا کیٹیگری منتخب کریں۔'
            )}
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="max-w-md mx-auto relative">
          <div className="relative">
            <input
              type="text"
              placeholder={t('Search passport fees, CNIC, BISP 8171...', 'سرچ کریں: نادرا، پاسپورٹ، 8171...')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3.5 pl-11 pr-24 text-xs sm:text-sm bg-white dark:bg-doc-dark-base border-2 border-doc-brass/30 rounded-xl focus:outline-none focus:border-doc-seal text-doc-ink dark:text-slate-100 shadow-sm"
            />
            <Search className="w-4 h-4 text-doc-brass absolute left-4 top-4" />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-doc-seal hover:bg-doc-seal/90 text-white font-mono font-bold text-xs rounded-lg transition shadow-sm"
            >
              {t('Search', 'تلاش')}
            </button>
          </div>
        </form>

        {/* Quick Category Suggestions */}
        <div className="space-y-3 pt-4 border-t border-doc-brass/20">
          <div className="flex items-center justify-center gap-2 text-xs font-serif font-bold text-doc-brass">
            <Compass className="w-4 h-4" />
            <span>{t('Browse Popular Official Directories:', 'مقبول سروسز کی فہرست:')}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.slice(0, 6).map((cat) => (
              <Link
                key={cat.id}
                href={`/${cat.slug}`}
                className="px-3 py-1.5 rounded-lg bg-white dark:bg-doc-dark-base border border-doc-brass/30 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-doc-brass hover:text-doc-seal transition shadow-sm"
              >
                {t(cat.nameEn, cat.nameUr)}
              </Link>
            ))}
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-doc-ink hover:bg-doc-ink/90 text-white font-mono font-bold text-xs rounded-xl border border-doc-brass/30 transition shadow-md"
          >
            <Home className="w-4 h-4 text-doc-brass" />
            <span>{t('Return to Portal Homepage', 'صفحہ اول پر جائیں')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
