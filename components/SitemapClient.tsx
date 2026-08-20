'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CATEGORIES } from '@/lib/data/categories';
import { ARTICLES } from '@/lib/data/articles';
import { useLanguage } from '@/lib/context/LanguageContext';
import { Search, Compass, ChevronRight, Link2, BookOpen } from 'lucide-react';

export const SitemapClient: React.FC = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const cleanQuery = searchQuery.toLowerCase().trim();

  return (
    <div className="min-h-screen bg-doc-paper dark:bg-slate-900 py-6 sm:py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { nameEn: 'Sitemap', nameUr: 'سائٹ میپ', url: '/sitemap' }
          ]}
        />

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex p-3 rounded-2xl bg-doc-ink text-doc-paper dark:bg-slate-800 border border-doc-brass/30 mb-2">
            <Compass className="w-8 h-8 text-doc-brass" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-doc-ink dark:text-white tracking-tight">
            {t('HTML Site Sitemap Directory', 'سائٹ کا مکمل معلوماتی نقشہ')}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t(
              'Browse through all 18 civic service categories and access over 100+ verified guides, interactive status trackers, and duplicate bill utility checkers.',
              'تمام 18 کیٹیگریز اور 100 سے زائد تصدیق شدہ گائیڈز، چالان و شناختی کارڈ ٹریکرز اور بل چیکنگ ٹولز تک آسان رسائی حاصل کریں۔'
            )}
          </p>

          {/* Search/Filter Box */}
          <div className="relative max-w-md mx-auto pt-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('Search guides and checkers...', 'گائیڈز یا ٹولز تلاش کریں...')}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-doc-ink dark:text-white placeholder-slate-400 focus:outline-none focus:border-doc-seal text-sm font-semibold shadow-sm transition"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-5 pointer-events-none" />
          </div>
        </div>

        {/* Categories & Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {CATEGORIES.map((cat) => {
            // Find articles under this category
            const categoryArticles = Object.values(ARTICLES).filter(
              (art) => art.categoryId === cat.id
            );

            // Filter articles if search query is active
            const filteredArticles = categoryArticles.filter(
              (art) =>
                art.titleEn.toLowerCase().includes(cleanQuery) ||
                (art.titleUr && art.titleUr.includes(cleanQuery))
            );

            if (cleanQuery && filteredArticles.length === 0) {
              return null;
            }

            return (
              <div
                key={cat.id}
                className="bg-white dark:bg-doc-dark-card rounded-2xl border border-doc-brass/20 dark:border-slate-800 p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
                    <span
                      className="w-3.5 h-3.5 rounded-full shrink-0"
                      style={{ backgroundColor: cat.accentColor }}
                    />
                    <div>
                      <h2 className="font-serif font-extrabold text-base text-doc-ink dark:text-white leading-tight">
                        {t(cat.nameEn, cat.nameUr)}
                      </h2>
                      <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">
                        {cat.id} Category
                      </span>
                    </div>
                  </div>

                  {/* Guides List */}
                  <ul className="space-y-2.5">
                    {(cleanQuery ? filteredArticles : categoryArticles).map((art) => (
                      <li key={art.slug} className="group">
                        <Link
                          href={art.fullPath}
                          className="flex items-start gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-355 hover:text-doc-seal dark:hover:text-emerald-400 transition"
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-doc-brass shrink-0 mt-0.5 group-hover:translate-x-0.5 transition" />
                          <span className="leading-snug">{t(art.titleEn.split('|')[0].trim(), art.titleUr?.split(':')[0].trim())}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Category Link */}
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono font-bold text-doc-brass">
                  <span>{categoryArticles.length} {t('TOTAL GUIDES', 'کل لنکس')}</span>
                  <Link
                    href={`/${cat.slug}`}
                    className="flex items-center gap-1 hover:text-doc-seal transition"
                  >
                    <span>{t('VIEW CATEGORY', 'کیٹیگری کھولیں')}</span>
                    <Link2 className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Statistics Summary */}
        <div className="p-6 rounded-2xl bg-slate-950 text-white border border-doc-brass/30 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-doc-brass" />
            <div>
              <p className="text-white font-bold">{t('PUBLIC RECORD VERIFICATION DIRECTORY', 'شہری دستاویزات معلوماتی نقشہ')}</p>
              <p className="text-[10px] text-slate-400 font-sans mt-0.5">
                {t('All directories are audited daily and match 2026 governmental regulations.', 'تمام لنکس روزانہ آڈٹ ہوتے ہیں اور سرکاری قوانین کے مطابق ہیں۔')}
              </p>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold shrink-0">
            {Object.keys(ARTICLES).length} {t('VERIFIED PORTALS ACTIVE', 'تصدیق شدہ لنکس فعال')}
          </span>
        </div>

      </div>
    </div>
  );
};
