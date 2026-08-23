'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Fuse from 'fuse.js';
import {
  Search,
  X,
  Clock,
  ArrowRight,
  CornerDownLeft,
  SearchX,
  Trash2,
  Sparkles,
  CreditCard,
  Plane,
  GraduationCap,
  FileText,
  Briefcase,
  Landmark,
  HeartHandshake,
  Car,
  Calculator,
  Globe,
  Building,
  Users,
  Award,
  Compass,
  Activity,
  Scale,
  CloudLightning,
  Smartphone,
  Mail,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { ARTICLES } from '@/lib/data/articles';
import { CATEGORIES } from '@/lib/data/categories';

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchableItem {
  id: string;
  slug: string;
  fullPath: string;
  titleEn: string;
  titleUr: string;
  categoryNameEn: string;
  categoryNameUr: string;
  categoryId: string;
  descriptionEn: string;
  descriptionUr: string;
  directAnswerEn: string;
  tags: string[];
}

const RECENT_SEARCHES_KEY = 'pih_recent_searches';
const MAX_RECENT_SEARCHES = 5;

// Popular fallback guides when empty state occurs
const POPULAR_GUIDES_FALLBACK = [
  {
    key: 'cnic-kaise-banaye',
    titleEn: 'NADRA Smart CNIC Application & Fee 2026',
    titleUr: 'نادرا سمارٹ شناختی کارڈ فیس و طریقہ 2026',
    category: 'NADRA',
    path: '/nadra/cnic-kaise-banaye',
  },
  {
    key: 'fee-2026',
    titleEn: 'Pakistani e-Passport 36/72 Page Fee Chart',
    titleUr: 'پاکستان ای پاسپورٹ فیس شیڈول 2026',
    category: 'Passport',
    path: '/passport/fee-2026',
  },
  {
    key: 'fbr-filer-status-check-cnic',
    titleEn: 'FBR Active Taxpayer List (ATL) Filer Check',
    titleUr: 'ایف بی آر ایکٹو ٹیکس پیئر لسٹ تصدیق',
    category: 'Tax & FBR',
    path: '/tax/fbr-filer-status-check-cnic',
  },
  {
    key: 'bisp-eligibility-check-by-cnic',
    titleEn: 'BISP 8171 Kafaalat 10,500 Payment Verification',
    titleUr: 'بے نظیر کفالت 8171 پورٹل اہلیت',
    category: 'Welfare',
    path: '/welfare/bisp-eligibility-check-by-cnic',
  },
];

function getCategoryIcon(categoryId: string, className = 'w-4 h-4') {
  switch (categoryId) {
    case 'nadra':
    case 'family-registration':
      return <CreditCard className={className} />;
    case 'passport':
      return <Plane className={className} />;
    case 'education':
      return <GraduationCap className={className} />;
    case 'bills':
      return <Sparkles className={className} />;
    case 'jobs':
      return <Briefcase className={className} />;
    case 'loans':
      return <Calculator className={className} />;
    case 'welfare':
      return <HeartHandshake className={className} />;
    case 'traffic':
      return <Car className={className} />;
    case 'tax':
    case 'finance':
      return <Landmark className={className} />;
    case 'overseas':
      return <Globe className={className} />;
    case 'property':
      return <Building className={className} />;
    case 'certificates':
      return <Award className={className} />;
    case 'hajj-umrah':
      return <Compass className={className} />;
    case 'health':
      return <Activity className={className} />;
    case 'legal':
      return <Scale className={className} />;
    case 'alerts':
      return <CloudLightning className={className} />;
    case 'mobile-pta':
      return <Smartphone className={className} />;
    case 'pakistan-post':
      return <Mail className={className} />;
    default:
      return <FileText className={className} />;
  }
}

export const SearchBar: React.FC<SearchBarProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const router = useRouter();

  const [rawQuery, setRawQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // 1. Build Static Search Index at Build/Client initialization
  const searchIndex = useMemo<SearchableItem[]>(() => {
    const categoryMap = new Map<string, { nameEn: string; nameUr: string }>();
    CATEGORIES.forEach((c) => categoryMap.set(c.id, { nameEn: c.nameEn, nameUr: c.nameUr }));

    return Object.values(ARTICLES).map((art) => {
      const cat = categoryMap.get(art.categoryId) || { nameEn: 'Civic Services', nameUr: 'عوامی خدمات' };
      return {
        id: art.slug,
        slug: art.slug,
        fullPath: art.fullPath || `/${art.slug}`,
        titleEn: art.titleEn,
        titleUr: art.titleUr,
        categoryNameEn: cat.nameEn,
        categoryNameUr: cat.nameUr,
        categoryId: art.categoryId,
        descriptionEn: art.metaDescriptionEn || '',
        descriptionUr: art.metaDescriptionUr || '',
        directAnswerEn: art.directAnswerEn || '',
        tags: [
          art.categoryId,
          art.slug.replace(/-/g, ' '),
          art.titleEn.toLowerCase(),
          cat.nameEn.toLowerCase(),
        ],
      };
    });
  }, []);

  // 2. Configure Fuse.js with Typo-Tolerant Fuzziness
  const fuse = useMemo(() => {
    return new Fuse(searchIndex, {
      keys: [
        { name: 'titleEn', weight: 0.45 },
        { name: 'titleUr', weight: 0.25 },
        { name: 'tags', weight: 0.2 },
        { name: 'categoryNameEn', weight: 0.1 },
      ],
      threshold: 0.4,
      ignoreLocation: true,
      minMatchCharLength: 2,
      shouldSort: true,
    });
  }, [searchIndex]);

  // Load Recent Searches from localStorage on modal open
  useEffect(() => {
    try {
      const saved = localStorage.getItem(RECENT_SEARCHES_KEY);
      if (saved) {
        setRecentSearches(JSON.parse(saved));
      }
    } catch {
      // Ignore localStorage read error
    }
  }, [isOpen]);

  // Save query to recent searches
  const saveRecentSearch = useCallback((term: string) => {
    const trimmed = term.trim();
    if (!trimmed || trimmed.length < 2) return;
    try {
      setRecentSearches((prev) => {
        const updated = [trimmed, ...prev.filter((s) => s.toLowerCase() !== trimmed.toLowerCase())].slice(
          0,
          MAX_RECENT_SEARCHES
        );
        localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
        return updated;
      });
    } catch {
      // Ignore localStorage write error
    }
  }, []);

  const removeRecentSearch = (termToRemove: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const updated = recentSearches.filter((s) => s !== termToRemove);
      setRecentSearches(updated);
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const clearAllRecentSearches = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      setRecentSearches([]);
      localStorage.removeItem(RECENT_SEARCHES_KEY);
    } catch {
      // Ignore
    }
  };

  // 300ms Debouncing for Search Query
  useEffect(() => {
    if (rawQuery !== debouncedQuery) {
      setIsSearching(true);
    }
    const handler = setTimeout(() => {
      setDebouncedQuery(rawQuery);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(handler);
  }, [rawQuery, debouncedQuery]);

  // Multi-term fuzzy search with token fallback
  const searchResults = useMemo(() => {
    const q = debouncedQuery.trim();
    if (!q) return [];

    // First attempt direct fuse search
    const directResults = fuse.search(q, { limit: 8 });
    if (directResults.length > 0) {
      return directResults.map((r) => r.item);
    }

    // Tokenized fallback for multi-word misspellings
    const words = q.split(/\s+/).filter((w) => w.length >= 2);
    if (words.length > 1) {
      const scores = new Map<string, { item: SearchableItem; count: number }>();
      words.forEach((word) => {
        const res = fuse.search(word);
        res.forEach((r) => {
          const current = scores.get(r.item.fullPath) || { item: r.item, count: 0 };
          current.count += 1;
          scores.set(r.item.fullPath, current);
        });
      });

      return Array.from(scores.values())
        .sort((a, b) => b.count - a.count)
        .slice(0, 8)
        .map((entry) => entry.item);
    }

    return [];
  }, [debouncedQuery, fuse]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchResults]);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setRawQuery('');
      setDebouncedQuery('');
      setSelectedIndex(0);
      const timer = setTimeout(() => inputRef.current?.focus(), 70);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Keyboard navigation handler
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
      return;
    }

    if (searchResults.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < searchResults.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : searchResults.length - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const selected = searchResults[selectedIndex];
        if (selected) {
          saveRecentSearch(rawQuery);
          onClose();
          router.push(selected.fullPath);
        }
      }
    }
  };

  // Auto-scroll selected item into view
  useEffect(() => {
    if (listRef.current) {
      const selectedEl = listRef.current.children[selectedIndex] as HTMLElement;
      if (selectedEl) {
        selectedEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex]);

  // Global Ctrl+K / Cmd+K shortcut listener
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Global civic search"
    >
      {/* Search Modal Container (Full-screen on mobile, centered dialog on desktop) */}
      <div
        className="w-full h-full sm:h-auto sm:max-h-[85vh] sm:max-w-2xl bg-white dark:bg-[#0B1120] border-0 sm:border border-slate-200 dark:border-slate-800 sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── TOP SEARCH INPUT ROW ── */}
        <div className="relative flex items-center gap-3 px-4 sm:px-6 py-4 sm:py-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-[#111C35]/60">
          <Search className="w-5 h-5 text-doc-brass shrink-0" />
          
          <input
            ref={inputRef}
            type="text"
            value={rawQuery}
            onChange={(e) => setRawQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t(
              'Search 275+ verified civic guides, CNIC, Passport, Tax...',
              'شناختی کارڈ، پاسپورٹ فیس، ٹیکس، صحت کارڈ یا 275+ سرکاری گائیڈز تلاش کریں...'
            )}
            className="w-full bg-transparent text-sm sm:text-base font-sans text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none"
            aria-autocomplete="list"
            aria-controls="search-suggestions"
          />

          {/* Clear Input Button */}
          {rawQuery && (
            <button
              onClick={() => setRawQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-white transition"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          {/* Close/Cancel Button */}
          <button
            onClick={onClose}
            className="px-2.5 py-1 rounded-lg text-xs font-sans font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-200/60 dark:bg-slate-800/80 transition"
            aria-label="Close search"
          >
            {t('Esc', 'بند کریں')}
          </button>
        </div>

        {/* ── SEARCH BODY / DROPDOWN RESULTS ── */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 max-h-[calc(100vh-140px)] sm:max-h-[60vh]">
          
          {/* STATE A: Recent Searches (When input is empty) */}
          {!rawQuery.trim() && (
            <div className="space-y-4">
              {recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-doc-brass" />
                      {t('Recent Searches', 'حالیہ تلاشیں')}
                    </span>
                    <button
                      onClick={clearAllRecentSearches}
                      className="text-xs font-sans text-slate-400 hover:text-rose-500 transition flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" />
                      {t('Clear all', 'سب ختم کریں')}
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((term, idx) => (
                      <button
                        key={idx}
                        onClick={() => setRawQuery(term)}
                        className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/90 hover:bg-doc-brass/15 border border-slate-200 dark:border-slate-700 text-xs font-sans text-slate-700 dark:text-slate-200 transition"
                      >
                        <Clock className="w-3 h-3 text-slate-400 group-hover:text-doc-brass" />
                        <span>{term}</span>
                        <span
                          onClick={(e) => removeRecentSearch(term, e)}
                          className="text-slate-400 hover:text-rose-500 rounded-full p-0.5"
                          title="Remove"
                        >
                          <X className="w-3 h-3" />
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Searches quick starter */}
              <div className="pt-2">
                <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2.5">
                  {t('Trending Public Services', 'مشہور سرکاری سروسز')}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {POPULAR_GUIDES_FALLBACK.map((g) => (
                    <Link
                      key={g.key}
                      href={g.path}
                      onClick={() => {
                        saveRecentSearch(g.titleEn);
                        onClose();
                      }}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-850/60 hover:bg-amber-500/10 border border-slate-200/80 dark:border-slate-800 hover:border-doc-brass/40 transition group"
                    >
                      <div className="min-w-0 pr-2">
                        <span className="text-xs font-serif font-bold text-slate-900 dark:text-white group-hover:text-doc-brass transition truncate block">
                          {t(g.titleEn, g.titleUr)}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                          {g.category}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-doc-brass group-hover:translate-x-0.5 transition" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STATE B: Search Results Found */}
          {debouncedQuery.trim() && searchResults.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {t(
                    `Found ${searchResults.length} Verified Results`,
                    `${searchResults.length} مصدقہ نتائج دستیاب`
                  )}
                </span>
                <span className="hidden sm:inline text-[11px] font-mono text-slate-400">
                  {t('Use ↑ ↓ to navigate, ↵ to open', '↑ ↓ سے انتخاب کریں، ↵ سے کھولیں')}
                </span>
              </div>

              <ul id="search-suggestions" ref={listRef} className="space-y-2" role="listbox">
                {searchResults.map((item, idx) => {
                  const isSelected = idx === selectedIndex;

                  return (
                    <li
                      key={item.id}
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => {
                        saveRecentSearch(rawQuery);
                        onClose();
                        router.push(item.fullPath);
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`group relative flex items-start gap-3.5 p-3.5 rounded-xl cursor-pointer transition-all duration-150 border ${
                        isSelected
                          ? 'bg-amber-500/10 dark:bg-slate-800 border-doc-brass shadow-sm'
                          : 'bg-slate-50/70 dark:bg-[#111C35]/50 border-slate-200/70 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      {/* Category Icon */}
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border mt-0.5 ${
                          isSelected
                            ? 'bg-doc-brass/20 text-doc-brass border-doc-brass/40'
                            : 'bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-300/60 dark:border-slate-700'
                        }`}
                      >
                        {getCategoryIcon(item.categoryId)}
                      </div>

                      {/* Content Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-doc-brass px-2 py-0.5 rounded bg-doc-brass/10 border border-doc-brass/20">
                            {t(item.categoryNameEn, item.categoryNameUr)}
                          </span>
                          <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            2026 Verified
                          </span>
                        </div>

                        {/* Title */}
                        <h4
                          className={`text-sm sm:text-base font-serif font-bold transition line-clamp-1 ${
                            isSelected ? 'text-doc-brass' : 'text-slate-900 dark:text-white'
                          }`}
                        >
                          {t(item.titleEn, item.titleUr)}
                        </h4>

                        {/* URL Preview */}
                        <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate mt-0.5">
                          pakistaninfohub.com{item.fullPath}
                        </p>
                      </div>

                      {/* Trailing Selection Indicator */}
                      <div className="flex items-center shrink-0 self-center">
                        <div
                          className={`w-6 h-6 rounded-md flex items-center justify-center transition ${
                            isSelected
                              ? 'bg-doc-brass text-white'
                              : 'bg-slate-200/60 dark:bg-slate-800 text-slate-400'
                          }`}
                        >
                          <CornerDownLeft className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* STATE C: Empty State (No Results Matching Query) */}
          {debouncedQuery.trim() && searchResults.length === 0 && !isSearching && (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-doc-brass flex items-center justify-center mx-auto">
                <SearchX className="w-7 h-7" />
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-serif font-bold text-slate-900 dark:text-white">
                  {t(`No guides found for "${debouncedQuery}"`, `"${debouncedQuery}" کے لیے کوئی گائیڈ نہیں ملی`)}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans max-w-md mx-auto mt-1">
                  {t(
                    'Try checking your spelling, or explore these popular verified civic guides:',
                    'براہ کرم الفاظ کی املا چیک کریں، یا ان مقبول ترین سرکاری سروسز میں سے منتخب کریں:'
                  )}
                </p>
              </div>

              {/* Recommended alternatives */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-start pt-2 max-w-xl mx-auto">
                {POPULAR_GUIDES_FALLBACK.map((g) => (
                  <Link
                    key={g.key}
                    href={g.path}
                    onClick={() => {
                      saveRecentSearch(g.titleEn);
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 hover:bg-amber-500/10 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex items-center justify-between group"
                  >
                    <div className="min-w-0 pr-2">
                      <span className="text-xs font-serif font-bold text-slate-900 dark:text-white group-hover:text-doc-brass transition truncate block">
                        {t(g.titleEn, g.titleUr)}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">{g.category}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-doc-brass" />
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* ── MODAL FOOTER ── */}
        <div className="hidden sm:flex items-center justify-between px-5 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#111C35]/60 text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[10px]">
                ↑
              </kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[10px]">
                ↓
              </kbd>
              {t('Navigate', 'انتخاب')}
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[10px]">
                ↵
              </kbd>
              {t('Open Guide', 'گائیڈ کھولیں')}
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[10px]">
                Esc
              </kbd>
              {t('Close', 'بند')}
            </span>
          </div>

          <span className="text-doc-brass font-semibold">
            {t('275+ Verified Civic Guides (2026)', '275+ مصدقہ عوامی گائیڈز')}
          </span>
        </div>

      </div>
    </div>
  );
};
