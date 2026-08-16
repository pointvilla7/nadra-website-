'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight, FileText, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { ARTICLES, Article } from '@/lib/data/articles';
import { CATEGORIES } from '@/lib/data/categories';

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Article[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled externally or passed
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase().trim();
    const articlesArray = Object.values(ARTICLES);

    const filtered = articlesArray.filter((art) => {
      return (
        art.titleEn.toLowerCase().includes(q) ||
        art.titleUr.toLowerCase().includes(q) ||
        art.metaDescriptionEn.toLowerCase().includes(q) ||
        art.metaDescriptionUr.toLowerCase().includes(q) ||
        art.slug.toLowerCase().includes(q) ||
        art.categoryId.toLowerCase().includes(q)
      );
    });

    setResults(filtered.slice(0, 8));
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl glass-card rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-all">
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90">
          <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t(
              'Search CNIC, Passport fee, LESCO bill, BISE results...',
              'شناختی کارڈ، پاسپورٹ فیس، لیسکو بل، رزلٹ تلاش کریں...'
            )}
            className="w-full pl-3 pr-8 bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none text-base font-medium"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-semibold rounded bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
          >
            ESC
          </button>
        </div>

        {/* Search Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 bg-slate-50/50 dark:bg-slate-950/50">
          {query.trim() === '' ? (
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {t('Popular Quick Searches', 'مقبول ترین تلاشیں')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CATEGORIES.flatMap((c) => c.popularSearches).slice(0, 6).map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.slug}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-emerald-50 dark:hover:bg-slate-800/80 border border-slate-200/60 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200 transition"
                  >
                    <span>{t(item.en, item.ur)}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-500 opacity-60" />
                  </Link>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                {t(`Found ${results.length} results`, `${results.length} نتائج مل گئے`)}
              </p>
              {results.map((art) => (
                <Link
                  key={art.slug}
                  href={art.fullPath}
                  onClick={onClose}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-emerald-50/80 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-800 transition group"
                >
                  <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition truncate">
                      {t(art.titleEn, art.titleUr)}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                      {t(art.directAnswerEn, art.directAnswerUr)}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition shrink-0 mt-1" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center text-slate-400">
              <p className="text-sm font-medium">
                {t('No matching guides found for "', 'کوئی معلومات نہیں ملی برائے "')}
                {query}"
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {t('Try searching with broader terms like CNIC, Passport, or LESCO.', 'نادرا، پاسپورٹ یا بل کے الفاظ لکھ کر دیکھیں۔')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
