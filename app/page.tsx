'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShieldCheck, TrendingUp, Sparkles, CheckCircle2, ArrowRight, BookOpen, Clock, Zap } from 'lucide-react';
import { CATEGORIES } from '@/lib/data/categories';
import { ARTICLES } from '@/lib/data/articles';
import { useLanguage } from '@/lib/context/LanguageContext';
import { CategoryCard } from '@/components/CategoryCard';
import { SearchBar } from '@/components/SearchBar';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { VerifiedSeal } from '@/components/VerifiedSeal';
import { RecentlyVerifiedTicker } from '@/components/RecentlyVerifiedTicker';

export default function HomePage() {
  const { t } = useLanguage();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const trendingArticles = [
    ARTICLES['cnic-kaise-banaye'],
    ARTICLES['bisp-eligibility-check-by-cnic'],
    ARTICLES['apni-chhat-apna-ghar'],
    ARTICLES['fee-2026'],
    ARTICLES['lesco-bill-check-online'],
    ARTICLES['e-challan-check-online'],
  ].filter(Boolean);

  return (
    <div className="space-y-12 md:space-y-20 animate-fadeIn pb-12">
      {/* Search Modal Trigger */}
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* HERO SECTION - VERIFIED DOCUMENT DESIGN */}
      <section className="relative overflow-hidden rounded-3xl bg-doc-ink border-2 border-doc-brass/40 p-8 sm:p-12 text-white shadow-2xl">
        {/* Background Watermark Stamp Graphic */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full border-8 border-dashed border-doc-brass/10 pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center space-y-6">
          {/* Top Stamp Seal + Trust Badge */}
          <div className="flex items-center justify-center gap-3">
            <VerifiedSeal size="md" year="2026" />
            <div className="text-left border-l border-doc-brass/40 pl-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-doc-brass block">
                VERIFIED PUBLIC DIRECTORY
              </span>
              <span className="text-xs text-slate-300 font-medium block">
                {t('100% Original • Gazette Citation Verified 2026', 'مصدقہ 2026 • 100٪ اصلی معلومات')}
              </span>
            </div>
          </div>

          {/* Main Fraunces Serif Headline */}
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold tracking-tight text-white leading-tight">
            {t(
              'Official Civic & Public Services Directory of Pakistan',
              'پاکستان کا مصدقہ اور بااعتماد معلومات پورٹل'
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            {t(
              'Verified step-by-step document procedures, fee schedules, online tracking tools for NADRA CNIC, Passports, BISE Education, Utility bills, Govt Loans, BISP 8171, and Traffic services.',
              'شناختی کارڈ، پاسپورٹ فیس، تعلیمی رزلٹ، کے الیکٹرک و لیسکو بل، بلا سود قرضے اور بے نظیر 8171 کی مصدقہ رہنمائی۔'
            )}
          </p>

          {/* Big Search Bar Component */}
          <div className="pt-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-full max-w-xl mx-auto flex items-center justify-between p-4 rounded-2xl bg-doc-paper dark:bg-slate-900 border-2 border-doc-brass/50 hover:border-doc-seal text-doc-ink dark:text-slate-200 shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-doc-seal dark:text-red-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm md:text-base font-sans font-medium text-slate-500">
                  {t(
                    'Search CNIC, BISP 8171, Passport fee, LESCO bill...',
                    'شناختی کارڈ، بے نظیر 8171، پاسپورٹ فیس، بل تلاش کریں...'
                  )}
                </span>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-doc-seal hover:bg-doc-seal/90 text-white font-mono font-bold text-xs shadow-sm transition">
                {t('SEARCH DIRECTORY', 'تلاش کریں')}
              </span>
            </button>
          </div>

          {/* Quick Trending Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            <span className="text-doc-brass font-bold">{t('QUICK LOOKUP:', 'فوری تلاش:')}</span>
            <Link
              href="/nadra/cnic-kaise-banaye"
              className="px-3 py-1 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-doc-brass/30 transition shadow-sm"
            >
              CNIC Apply
            </Link>
            <Link
              href="/welfare/bisp-eligibility-check-by-cnic"
              className="px-3 py-1 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-doc-brass/30 transition shadow-sm"
            >
              BISP 8171
            </Link>
            <Link
              href="/loans/apni-chhat-apna-ghar"
              className="px-3 py-1 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-doc-brass/30 transition shadow-sm"
            >
              Apni Chhat Loan
            </Link>
            <Link
              href="/passport/fee-2026"
              className="px-3 py-1 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-doc-brass/30 transition shadow-sm"
            >
              Passport Fee 2026
            </Link>
          </div>
        </div>
      </section>

      {/* LIVE RECENTLY VERIFIED TICKER */}
      <RecentlyVerifiedTicker />

      {/* TRUST INDICATORS BAR */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="doc-card p-4 rounded-2xl border border-doc-brass/20 flex items-center gap-3 transition-all hover:border-doc-brass/40">
          <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-serif font-bold text-doc-ink dark:text-white">
              {t('Gazette Verified', 'مصدقہ معلومات')}
            </h4>
            <p className="text-[11px] text-slate-500">{t('Official government sources', 'سرکاری گزٹ کے مطابق')}</p>
          </div>
        </div>

        <div className="doc-card p-4 rounded-2xl border border-doc-brass/20 flex items-center gap-3 transition-all hover:border-doc-brass/40">
          <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-serif font-bold text-doc-ink dark:text-white">
              {t('Fresh 2026 Data', 'تازہ ترین 2026')}
            </h4>
            <p className="text-[11px] text-slate-500 font-mono">{t('Verified August 2026', 'اگست 2026 اپڈیٹ')}</p>
          </div>
        </div>

        <div className="doc-card p-4 rounded-2xl border border-doc-brass/20 flex items-center gap-3 transition-all hover:border-doc-brass/40">
          <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-serif font-bold text-doc-ink dark:text-white">
              {t('Interactive Tools', 'آن لائن ٹولز')}
            </h4>
            <p className="text-[11px] text-slate-500">{t('Instant bill & result lookup', 'بل اور رزلٹ چیک کریں')}</p>
          </div>
        </div>

        <div className="doc-card p-4 rounded-2xl border border-doc-brass/20 flex items-center gap-3 transition-all hover:border-doc-brass/40">
          <div className="p-2.5 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-serif font-bold text-doc-ink dark:text-white">
              {t('Bilingual Support', 'اردو اور انگلش')}
            </h4>
            <p className="text-[11px] text-slate-500">{t('Full RTL Urdu rendering', 'آسان اردو ترجمہ')}</p>
          </div>
        </div>
      </section>

      {/* CATEGORIES GRID SECTION */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-doc-seal" />
              <h2 className="text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
                {t('Verified Public Directory Categories', 'اہم کیٹیگریز اور شعبہ جات')}
              </h2>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {t('Purpose-built guides for Pakistani citizens and overseas Pakistanis.', 'شہریوں کی سہولت کے لیے خصوصی کیٹیگریز۔')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Tasteful Mid Homepage Ad */}
      <AdPlacementZone slotId="homepage-middle" format="horizontal" />

      {/* TRENDING GUIDES SECTION */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-doc-seal" />
            <h2 className="text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
              {t('Most Requested Official Records (2026)', 'مقبول ترین معلومات اور فائلز')}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingArticles.map((article) => {
            const cat = CATEGORIES.find((c) => c.id === article.categoryId) || CATEGORIES[0];
            return (
              <div
                key={article.slug}
                className="doc-card rounded-2xl p-6 border border-doc-brass/20 hover:border-doc-brass/50 hover:scale-[1.01] hover:-translate-y-0.5 flex flex-col justify-between transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded ${cat.badgeBg} ${cat.badgeText}`}>
                      {t(cat.nameEn, cat.nameUr)}
                    </span>
                    <span className="text-[11px] text-doc-seal dark:text-red-400 font-bold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {t('VERIFIED', 'مصدقہ')}
                    </span>
                  </div>

                  <Link href={article.fullPath}>
                    <h3 className="text-base font-serif font-bold text-doc-ink dark:text-white group-hover:text-doc-seal transition line-clamp-2">
                      {t(article.titleEn, article.titleUr)}
                    </h3>
                  </Link>

                  <p className="text-xs text-slate-700 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {t(article.directAnswerEn, article.directAnswerUr)}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-doc-brass/20 flex items-center justify-between font-mono text-[11px]">
                  <span className="text-slate-500">
                    {t('Verified:', 'تاریخ:')} {article.lastVerified}
                  </span>
                  <Link
                    href={article.fullPath}
                    className="font-bold text-doc-seal dark:text-red-400 hover:underline flex items-center gap-1"
                  >
                    <span>{t('READ FILE', 'مکمل فائل')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY PAKISTAN INFO HUB Section */}
      <section className="rounded-3xl doc-card border-2 border-doc-brass/40 p-8 md:p-10 space-y-6">
        <div className="max-w-3xl space-y-3">
          <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-doc-ink dark:text-white">
            {t('Why Trust Pakistan Info Hub?', 'پاکستان انفو ہب کا انتخاب کیوں؟')}
          </h2>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {t(
              'Designed around the "Verified Document" aesthetic, Pakistan Info Hub eliminates clickbait rumors and unverified agent claims. Every fee figure and process step is cross-checked against official Gazette notifications.',
              'ہماری ویب سائٹ پر آپ کو غیر متعلقہ اشتہارات کے بجائے ہمیشہ بااعتماد اور تصدیق شدہ سرکاری ڈیٹا ملے گا۔'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-doc-brass/30">
          <div className="space-y-1.5">
            <h3 className="font-serif font-bold text-sm text-doc-seal dark:text-red-400">
              {t('AEO Executive Summaries', 'فوری جواب کا خلاصہ')}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {t(
                '40-60 word Direct Answer Boxes at the top of every guide for fast reading on mobile & AI engines.',
                'ہر آرٹیکل کے شروع میں اہم جواب کا 50 الفاظ پر مشتمل آسان خلاصہ۔'
              )}
            </p>
          </div>

          <div className="space-y-1.5">
            <h3 className="font-serif font-bold text-sm text-doc-brass">
              {t('Official Source Citations', 'آفیشل ذرائع کی تصدیق')}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {t(
                'Direct source links to official NADRA, DGIP, WAPDA, BISP, and PSCA portals.',
                'تمام فیس اور رابطہ نمبرز سرکاری ویب سائٹس سے تصدیق شدہ ہیں۔'
              )}
            </p>
          </div>

          <div className="space-y-1.5">
            <h3 className="font-serif font-bold text-sm text-doc-verified dark:text-emerald-400">
              {t('Bilingual Noto Nastaliq', 'اردو اور انگلش کا بااعتماد امتزاج')}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {t(
                'Authentic Noto Nastaliq Urdu rendering with proper vertical line heights.',
                'ایک کلک کے ساتھ تمام معلومات آسان اردو میں پڑھیں۔'
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
