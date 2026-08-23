'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Clock,
  Zap,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { CATEGORIES } from '@/lib/data/categories';
import { ARTICLES } from '@/lib/data/articles';
import { useLanguage } from '@/lib/context/LanguageContext';
import { CategoryCard } from '@/components/CategoryCard';
import { SearchBar } from '@/components/SearchBar';
import { HeroSection } from '@/components/HeroSection';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { RecentlyUpdatedGuides } from '@/components/RecentlyUpdatedGuides';
import { ScrollReveal } from '@/components/ScrollReveal';
import { LiveTrustStatsWidget } from '@/components/LiveTrustStatsWidget';
import { AuthorityTrustBadges } from '@/components/AuthorityTrustBadges';

export default function HomePage() {
  const { t } = useLanguage();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isRecordsExpanded, setIsRecordsExpanded] = useState(false);

  const trendingArticles = [
    ARTICLES['cnic-kaise-banaye'],
    ARTICLES['fee-2026'],
    ARTICLES['fbr-filer-status-check-cnic'],
    ARTICLES['hajj-balloting-result-check-online'],
    ARTICLES['property-mutation-check-by-cnic'],
    ARTICLES['sehat-card-eligibility-check-by-cnic'],
    ARTICLES['bisp-eligibility-check-by-cnic'],
    ARTICLES['apni-chhat-apna-ghar'],
    ARTICLES['e-challan-check-online'],
  ].filter(Boolean);

  return (
    <div className="space-y-8 sm:space-y-16 lg:space-y-20 animate-fadeIn pb-16">
      {/* Search Modal Trigger */}
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* REDESIGNED SPLIT HERO SECTION WITH CUSTOM SVG ILLUSTRATION */}
      <HeroSection onOpenSearch={() => setIsSearchOpen(true)} />

      {/* LIVE DYNAMIC CITIZEN VERIFICATION METRICS WIDGET */}
      <LiveTrustStatsWidget />

      {/* RECENTLY UPDATED GUIDES CARD GRID */}
      <RecentlyUpdatedGuides />

      {/* TRUST INDICATORS BAR — COMPACT ON MOBILE, FULL-SIZE ON DESKTOP */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
        <div className="doc-card p-3.5 sm:p-6 rounded-xl border border-[#F1F5F9] dark:border-slate-800 flex items-center gap-2.5 sm:gap-3.5 bg-[#FAF9F6] dark:bg-[#1E2A3F]">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F3F1EC] dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200/60 dark:border-slate-700 text-[#0F9D6D]">
            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-serif font-bold text-[#0B1120] dark:text-white">
              {t('Gazette Verified', 'مصدقہ معلومات')}
            </h4>
            <p className="text-[11px] sm:text-xs text-[#475569] dark:text-slate-400 font-sans line-clamp-1">
              {t('Official govt sources', 'سرکاری گزٹ کے مطابق')}
            </p>
          </div>
        </div>

        <div className="doc-card p-3.5 sm:p-6 rounded-xl border border-[#F1F5F9] dark:border-slate-800 flex items-center gap-2.5 sm:gap-3.5 bg-[#FAF9F6] dark:bg-[#1E2A3F]">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F3F1EC] dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200/60 dark:border-slate-700 text-[#B8860B]">
            <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-serif font-bold text-[#0B1120] dark:text-white">
              {t('Fresh 2026 Data', 'تازہ ترین 2026')}
            </h4>
            <p className="text-[11px] sm:text-xs text-[#475569] dark:text-slate-400 font-sans line-clamp-1">
              {t('Verified August 2026', 'اگست 2026 اپڈیٹ')}
            </p>
          </div>
        </div>

        <div className="doc-card p-3.5 sm:p-6 rounded-xl border border-[#F1F5F9] dark:border-slate-800 flex items-center gap-2.5 sm:gap-3.5 bg-[#FAF9F6] dark:bg-[#1E2A3F]">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F3F1EC] dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200/60 dark:border-slate-700 text-[#1E2A3F] dark:text-slate-300">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-serif font-bold text-[#0B1120] dark:text-white">
              {t('Interactive Tools', 'آن لائن ٹولز')}
            </h4>
            <p className="text-[11px] sm:text-xs text-[#475569] dark:text-slate-400 font-sans line-clamp-1">
              {t('Instant fee lookup', 'فیس و بل چیکر')}
            </p>
          </div>
        </div>

        <div className="doc-card p-3.5 sm:p-6 rounded-xl border border-[#F1F5F9] dark:border-slate-800 flex items-center gap-2.5 sm:gap-3.5 bg-[#FAF9F6] dark:bg-[#1E2A3F]">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F3F1EC] dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200/60 dark:border-slate-700 text-[#0F9D6D]">
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-serif font-bold text-[#0B1120] dark:text-white">
              {t('Bilingual Support', 'اردو اور انگلش')}
            </h4>
            <p className="text-[11px] sm:text-xs text-[#475569] dark:text-slate-400 font-sans line-clamp-1">
              {t('Full Urdu translation', 'آسان اردو ترجمہ')}
            </p>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES SECTION: HORIZONTAL SNAP-SCROLL CAROUSEL ON MOBILE, GRID ON DESKTOP ── */}
      <ScrollReveal delayMs={50}>
        <section id="categories" className="space-y-4 sm:space-y-6 scroll-mt-20">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-doc-brass" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#0B1120] dark:text-white leading-tight">
                  {t('Verified Public Directory Categories', 'اہم کیٹیگریز اور شعبہ جات')}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 font-sans">
                {t('Purpose-built guides for Pakistani citizens and overseas Pakistanis.', 'شہریوں کی سہولت کے لیے 21 اہم کیٹیگریز۔')}
              </p>
            </div>

            {/* Mobile swipe indicator */}
            <span className="sm:hidden text-[11px] font-mono font-semibold text-doc-brass shrink-0">
              {t('Swipe →', 'سوائپ کریں ←')}
            </span>
          </div>

          {/* Carousel container on mobile, Grid on tablet/desktop */}
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-x-visible pb-4 pt-1 -mx-4 sm:mx-0 px-4 sm:px-0 snap-x snap-mandatory scrollbar-none">
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Mid Homepage Ad Zone */}
      <AdPlacementZone slotId="homepage-middle" format="horizontal" />

      {/* ── MOST REQUESTED OFFICIAL RECORDS (COLLAPSIBLE ACCORDION ON MOBILE) ── */}
      <ScrollReveal delayMs={100}>
        <section className="space-y-4 sm:space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-doc-brass" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#0B1120] dark:text-white leading-tight">
                {t('Most Requested Official Records (2026)', 'مقبول ترین معلومات اور فائلز')}
              </h2>
            </div>
          </div>

          {/* Records Grid (Mobile collapses to 3 unless expanded, desktop shows all 9) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {trendingArticles.map((article, idx) => {
              const cat = CATEGORIES.find((c) => c.id === article.categoryId) || CATEGORIES[0];
              const isHiddenOnMobile = !isRecordsExpanded && idx >= 3;

              return (
                <div
                  key={article.slug}
                  className={`doc-card rounded-2xl p-4 sm:p-7 border border-[#F1F5F9] dark:border-slate-800 hover:shadow-lg hover:-translate-y-0.5 flex flex-col justify-between transition-all duration-200 group bg-[#FAF9F6] dark:bg-[#1E2A3F] ${
                    isHiddenOnMobile ? 'hidden sm:flex' : 'flex'
                  }`}
                >
                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        {t(cat.nameEn, cat.nameUr)}
                      </span>
                      <VerifiedBadge variant="card" textEn="Verified Aug 2026" textUr="مصدقہ اگست 2026" />
                    </div>

                    <Link href={article.fullPath}>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-[#0B1120] dark:text-white group-hover:text-doc-brass transition line-clamp-2 leading-snug">
                        {t(article.titleEn, article.titleUr)}
                      </h3>
                    </Link>

                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 sm:line-clamp-3 leading-relaxed font-sans">
                      {t(article.directAnswerEn, article.directAnswerUr)}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 sm:pt-4 sm:mt-4 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400 font-sans text-[11px]">
                      {t('Verified:', 'تصدیق:')} {article.lastVerified}
                    </span>
                    <Link
                      href={article.fullPath}
                      className="font-semibold text-doc-brass hover:text-amber-600 dark:hover:text-amber-300 flex items-center gap-1 group/link transition"
                    >
                      <span>{t('Read Guide', 'مکمل گائیڈ')}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Accordion Toggle Button */}
          <div className="sm:hidden pt-1 flex justify-center">
            <button
              onClick={() => setIsRecordsExpanded(!isRecordsExpanded)}
              type="button"
              className="w-full min-h-[44px] py-2.5 px-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-800 text-xs font-bold font-sans text-slate-800 dark:text-slate-200 hover:border-doc-brass flex items-center justify-center gap-2 shadow-xs transition active:scale-[0.98]"
            >
              <span>
                {isRecordsExpanded
                  ? t('Show Less Records', 'کم ریکارڈز دیکھیں')
                  : t(`Show More Records (+${trendingArticles.length - 3} more)`, `مزید ریکارڈز دیکھیں (+${trendingArticles.length - 3})`)}
              </span>
              {isRecordsExpanded ? <ChevronUp className="w-4 h-4 text-doc-brass" /> : <ChevronDown className="w-4 h-4 text-doc-brass" />}
            </button>
          </div>
        </section>
      </ScrollReveal>

      {/* ── AUTHORITY & TRUST GUARANTEE BADGES ── */}
      <ScrollReveal delayMs={120}>
        <AuthorityTrustBadges />
      </ScrollReveal>

      {/* WHY PAKISTAN INFO HUB Section */}
      <ScrollReveal delayMs={160}>
        <section className="rounded-2xl doc-card border border-[#F1F5F9] dark:border-slate-800 p-5 sm:p-10 space-y-4 sm:space-y-6 bg-[#FAF9F6] dark:bg-[#1E2A3F]">
          <div className="max-w-3xl space-y-2 sm:space-y-3">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#0B1120] dark:text-white leading-tight">
              {t('Why Trust Pakistan Info Hub?', 'پاکستان انفو ہب کا انتخاب کیوں؟')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              {t(
                'Designed around the "Verified Document" standard, Pakistan Info Hub eliminates clickbait rumors and unverified agent claims. Every fee figure and process step is cross-checked against official Gazette notifications.',
                'ہماری ویب سائٹ پر آپ کو غیر متعلقہ اشتہارات کے بجائے ہمیشہ بااعتماد اور تصدیق شدہ سرکاری ڈیٹا ملے گا۔'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-3 sm:pt-4 border-t border-[#F1F5F9] dark:border-slate-800">
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-sm text-[#0B1120] dark:text-white">
                {t('AEO Executive Summaries', 'فوری جواب کا خلاصہ')}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                {t(
                  '40-60 word Direct Answer Boxes at the top of every guide for fast reading on mobile.',
                  'ہر آرٹیکل کے شروع میں اہم جواب کا 50 الفاظ پر مشتمل آسان خلاصہ۔'
                )}
              </p>
            </div>

            <div className="space-y-1">
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

            <div className="space-y-1">
              <h3 className="font-serif font-bold text-sm text-emerald-600 dark:text-emerald-400">
                {t('Bilingual Urdu Rendering', 'اردو اور انگلش کا بااعتماد امتزاج')}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {t(
                  'Authentic typography with proper line heights and instant one-click translation.',
                  'ایک کلک کے ساتھ تمام معلومات آسان اردو میں پڑھیں۔'
                )}
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
