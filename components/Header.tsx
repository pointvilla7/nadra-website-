'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Moon, Sun, Globe, Menu, X, ChevronDown, ShieldCheck, Zap, Type } from 'lucide-react';
import { useLanguage, Language, FontSize } from '@/lib/context/LanguageContext';
import { CATEGORIES } from '@/lib/data/categories';

interface HeaderProps {
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const { language, setLanguage, fontSize, setFontSize, liteMode, setLiteMode, t } = useLanguage();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark') || 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full doc-nav border-b border-doc-brass/30 transition-colors">
      {/* Top Banner Bar */}
      <div className="bg-doc-ink text-doc-paper text-xs py-1.5 px-4 border-b border-doc-brass/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium overflow-hidden text-ellipsis whitespace-nowrap">
            <ShieldCheck className="w-3.5 h-3.5 text-doc-brass shrink-0" />
            <span className="truncate">
              {t(
                'Pakistan Official Services Information Portal • Updated August 2026',
                'پاکستان آفیشل پورٹل معلومات و رہنمائی • اگست 2026',
                'Pakistan Official Services Information Portal • Updated August 2026'
              )}
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Font Size Selector */}
            <div className="hidden sm:flex items-center gap-1 bg-doc-paper/10 text-doc-paper border border-doc-brass/30 rounded px-1.5 py-0.5 text-[11px] font-mono">
              <Type className="w-3 h-3 text-doc-brass" />
              <button
                onClick={() => setFontSize('sm')}
                className={`px-1 rounded ${fontSize === 'sm' ? 'bg-doc-seal text-white font-bold' : 'opacity-70 hover:opacity-100'}`}
                title="Small text"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('md')}
                className={`px-1 rounded ${fontSize === 'md' ? 'bg-doc-seal text-white font-bold' : 'opacity-70 hover:opacity-100'}`}
                title="Medium text"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-1 rounded ${fontSize === 'lg' ? 'bg-doc-seal text-white font-bold' : 'opacity-70 hover:opacity-100'}`}
                title="Large text"
              >
                A+
              </button>
            </div>

            {/* Lite Mode Toggle Button */}
            <button
              onClick={() => setLiteMode(!liteMode)}
              className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-bold transition ${
                liteMode
                  ? 'bg-amber-500 text-slate-950'
                  : 'bg-doc-paper/10 text-slate-300 hover:text-white border border-doc-brass/30'
              }`}
              title="Toggle low-data lite mode"
            >
              <Zap className="w-3 h-3 fill-current" />
              <span>{liteMode ? 'LITE ON' : 'Lite Mode'}</span>
            </button>

            {/* 3-Mode Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 px-2.5 py-0.5 rounded bg-doc-seal text-white font-semibold hover:opacity-90 transition shadow-sm text-xs"
              >
                <Globe className="w-3 h-3" />
                <span>
                  {language === 'en' ? 'English' : language === 'ur' ? 'اردو' : 'Roman Urdu'}
                </span>
                <ChevronDown className="w-3 h-3 opacity-80" />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 top-full mt-1 w-36 bg-white dark:bg-doc-dark-card border border-doc-brass/40 rounded-lg shadow-xl py-1 z-50 text-xs text-doc-ink dark:text-slate-200">
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 font-medium hover:bg-doc-paper dark:hover:bg-slate-800 transition ${
                      language === 'en' ? 'bg-doc-seal/10 font-bold text-doc-seal' : ''
                    }`}
                  >
                    English (UK)
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('ur');
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 font-serif font-bold hover:bg-doc-paper dark:hover:bg-slate-800 transition ${
                      language === 'ur' ? 'bg-doc-seal/10 text-doc-seal' : ''
                    }`}
                  >
                    اردو (Nastaliq)
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('roman');
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 font-sans font-semibold hover:bg-doc-paper dark:hover:bg-slate-800 transition ${
                      language === 'roman' ? 'bg-doc-seal/10 text-doc-seal' : ''
                    }`}
                  >
                    Roman Urdu 🇵🇰
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-doc-ink text-doc-brass border border-doc-brass/40 flex items-center justify-center font-bold text-xl shadow-doc-card transition-transform group-hover:scale-105 shrink-0">
            🇵🇰
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-extrabold text-xl tracking-tight text-doc-ink dark:text-doc-dark-paper">
                Pakistan Info Hub
              </span>
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-1.5 py-0.5 rounded bg-doc-seal text-white">
                2026
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-none">
              {t(
                'Verified Public Utility & Service Portal',
                'پاکستان کا بااعتماد معلومات پورٹل',
                'Pakistan Ka Ba-Etemad Utility Portal'
              )}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <Link
            href="/"
            className="px-3 py-2 rounded-lg text-sm font-semibold text-doc-ink dark:text-slate-200 hover:text-doc-seal dark:hover:text-red-400 transition"
          >
            {t('Home', 'صفحہ اول', 'Home')}
          </Link>

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold text-doc-ink dark:text-slate-200 hover:text-doc-seal dark:hover:text-red-400 transition"
            >
              <span>{t('Categories', 'کیٹیگریز', 'Categories')}</span>
              <ChevronDown className="w-4 h-4 opacity-70" />
            </button>

            {dropdownOpen && (
              <div
                onMouseLeave={() => setDropdownOpen(false)}
                className="absolute top-full left-0 mt-1 w-64 doc-card rounded-xl shadow-2xl py-2 z-50 animate-fadeIn"
              >
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/${cat.slug}`}
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-doc-paper dark:hover:bg-slate-800 transition text-sm text-slate-800 dark:text-slate-200"
                  >
                    <span className="font-serif font-semibold">{t(cat.nameEn, cat.nameUr)}</span>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${cat.badgeBg} ${cat.badgeText}`}>
                      {cat.slug.toUpperCase()}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {CATEGORIES.slice(0, 4).map((cat) => (
            <Link
              key={cat.id}
              href={`/${cat.slug}`}
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-doc-seal dark:hover:text-red-400 transition"
            >
              {t(cat.nameEn, cat.nameUr)}
            </Link>
          ))}
        </nav>

        {/* Right Action Icons */}
        <div className="flex items-center gap-2">
          {/* Live Search Trigger Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-doc-paper border border-doc-brass/40 text-xs font-medium transition"
            aria-label="Open search dialog"
          >
            <Search className="w-4 h-4 text-doc-seal dark:text-red-400" />
            <span className="hidden sm:inline-block font-sans">
              {t('Search guide...', 'تلاش کریں...', 'Search guide...')}
            </span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-doc-paper dark:bg-slate-900 border rounded text-slate-500">
              ⌘K
            </kbd>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition"
            aria-label="Toggle dark theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-doc-ink" />}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-doc-ink dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden doc-card border-t border-doc-brass/30 px-4 pt-3 pb-6 space-y-4 animate-slideDown">
          <div className="grid grid-cols-2 gap-2">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/${cat.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-3 rounded-xl bg-doc-paper dark:bg-slate-800/80 hover:bg-white transition"
              >
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.accentColor }} />
                <span className="text-xs font-bold font-serif text-slate-800 dark:text-slate-200">
                  {t(cat.nameEn, cat.nameUr)}
                </span>
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-doc-brass/20 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono font-bold text-doc-brass uppercase">{t('Language:', 'زبان:', 'Zaban:')}</span>
              <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-lg border border-doc-brass/30">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 text-[11px] font-bold rounded transition ${
                    language === 'en' ? 'bg-doc-seal text-white shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('ur')}
                  className={`px-2 py-1 text-[11px] font-bold rounded font-serif transition ${
                    language === 'ur' ? 'bg-doc-seal text-white shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  اردو
                </button>
                <button
                  onClick={() => setLanguage('roman')}
                  className={`px-2 py-1 text-[11px] font-bold rounded transition ${
                    language === 'roman' ? 'bg-doc-seal text-white shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Roman
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between text-xs text-slate-600 dark:text-slate-300 gap-2">
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                {t('About Us', 'ہمارے بارے میں')}
              </Link>
              <Link href="/how-we-verify" onClick={() => setMobileMenuOpen(false)}>
                {t('Methodology', 'طریقہ کار')}
              </Link>
              <Link href="/disclaimer" onClick={() => setMobileMenuOpen(false)}>
                {t('Disclaimer', 'دستبرداری')}
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                {t('Contact', 'رابطہ')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
