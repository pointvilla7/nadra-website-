'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShieldCheck, TrendingUp, Sparkles, CheckCircle2, ArrowRight, BookOpen, Clock, Zap } from 'lucide-react';
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

export default function HomePage() {
  const { t } = useLanguage();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
    <div className="space-y-12 sm:space-y-24 animate-fadeIn pb-16">
      {/* Search Modal Trigger */}
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* REDESIGNED SPLIT HERO SECTION WITH CUSTOM SVG ILLUSTRATION */}
      <HeroSection onOpenSearch={() => setIsSearchOpen(true)} />

      {/* RECENTLY UPDATED GUIDES CARD GRID */}
      <RecentlyUpdatedGuides />

      {/* TRUST INDICATORS BAR — CONSISTENT CREAM-50 CARDS WITH 56PX CIRCULAR ICONS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="doc-card p-5 sm:p-6 rounded-[12px] border border-[#F1F5F9] dark:border-slate-800 flex items-center gap-3.5 bg-[#FAF9F6] dark:bg-[#1E2A3F]">
          <div className="w-12 h-12 rounded-full bg-[#F3F1EC] dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200/60 dark:border-slate-700 text-[#0F9D6D]">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-serif font-medium text-[#0B1120] dark:text-white">
              {t('Gazette Verified', 'مصدقہ معلومات')}
            </h4>
            <p className="text-xs text-[#475569] dark:text-slate-400 font-sans">{t('Official government sources', 'سرکاری گزٹ کے مطابق')}</p>
          </div>
        </div>

        <div className="doc-card p-5 sm:p-6 rounded-[12px] border border-[#F1F5F9] dark:border-slate-800 flex items-center gap-3.5 bg-[#FAF9F6] dark:bg-[#1E2A3F]">
          <div className="w-12 h-12 rounded-full bg-[#F3F1EC] dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200/60 dark:border-slate-700 text-[#B8860B]">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-serif font-medium text-[#0B1120] dark:text-white">
              {t('Fresh 2026 Data', 'تازہ ترین 2026')}
            </h4>
            <p className="text-xs text-[#475569] dark:text-slate-400 font-sans">{t('Verified August 2026', 'اگست 2026 اپڈیٹ')}</p>
          </div>
        </div>

        <div className="doc-card p-5 sm:p-6 rounded-[12px] border border-[#F1F5F9] dark:border-slate-800 flex items-center gap-3.5 bg-[#FAF9F6] dark:bg-[#1E2A3F]">
          <div className="w-12 h-12 rounded-full bg-[#F3F1EC] dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200/60 dark:border-slate-700 text-[#1E2A3F] dark:text-slate-300">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-serif font-medium text-[#0B1120] dark:text-white">
              {t('Interactive Tools', 'آن لائن ٹولز')}
            </h4>
            <p className="text-xs text-[#475569] dark:text-slate-400 font-sans">{t('Instant bill & result lookup', 'بل اور رزلٹ چیک کریں')}</p>
          </div>
        </div>

        <div className="doc-card p-5 sm:p-6 rounded-[12px] border border-[#F1F5F9] dark:border-slate-800 flex items-center gap-3.5 bg-[#FAF9F6] dark:bg-[#1E2A3F]">
          <div className="w-12 h-12 rounded-full bg-[#F3F1EC] dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200/60 dark:border-slate-700 text-[#0F9D6D]">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-serif font-medium text-[#0B1120] dark:text-white">
              {t('Bilingual Support', 'اردو اور انگلش')}
            </h4>
            <p className="text-xs text-[#475569] dark:text-slate-400 font-sans">{t('Full RTL Urdu rendering', 'آسان اردو ترجمہ')}</p>
          </div>
        </div>
      </section>

      {/* CATEGORIES GRID SECTION */}
      <ScrollReveal delayMs={50}>
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#B8860B]" />
                <h2 className="text-[24px] sm:text-[32px] font-serif font-semibold text-[#0B1120] dark:text-white leading-[1.2]">
                  {t('Verified Public Directory Categories', 'اہم کیٹیگریز اور شعبہ جات')}
                </h2>
              </div>
              <p className="text-sm text-[#475569] dark:text-slate-400 mt-1 font-sans">
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
      </ScrollReveal>

      {/* Tasteful Mid Homepage Ad */}
      <AdPlacementZone slotId="homepage-middle" format="horizontal" />

      {/* TRENDING GUIDES SECTION */}
      <ScrollReveal delayMs={100}>
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#B8860B]" />
              <h2 className="text-[24px] sm:text-[32px] font-serif font-semibold text-[#0B1120] dark:text-white leading-[1.2]">
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
                  className="doc-card rounded-[12px] p-5 sm:p-8 border border-[#F1F5F9] dark:border-slate-800 hover:shadow-doc-hover hover:-translate-y-0.5 flex flex-col justify-between transition-all duration-200 group bg-[#FAF9F6] dark:bg-[#1E2A3F]"
                >
                  <div className="space-y-3">
                    {/* Clean single-line meta row: plain slate-600 uppercase category + quiet emerald checkmark */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[11px] font-sans font-semibold text-[#475569] dark:text-slate-400 uppercase tracking-wider">
                        {t(cat.nameEn, cat.nameUr)}
                      </span>
                      <VerifiedBadge variant="card" textEn="Verified Aug 2026" textUr="مصدقہ اگست 2026" />
                    </div>

                    <Link href={article.fullPath}>
                      <h3 className="text-[18px] sm:text-[22px] font-serif font-medium text-[#0B1120] dark:text-white group-hover:text-[#B8860B] dark:group-hover:text-[#D4A017] transition line-clamp-2 leading-snug">
                        {t(article.titleEn, article.titleUr)}
                      </h3>
                    </Link>

                    <p className="text-xs text-[#475569] dark:text-slate-300 line-clamp-3 leading-relaxed font-sans">
                      {t(article.directAnswerEn, article.directAnswerUr)}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#F1F5F9] dark:border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-[#475569] dark:text-slate-400 font-sans">
                      {t('Last Verified:', 'تاریخ:')} {article.lastVerified}
                    </span>
                    <Link
                      href={article.fullPath}
                      className="font-semibold text-[#B8860B] hover:text-[#D4A017] hover:underline flex items-center gap-1 group/link transition"
                    >
                      <span>{t('Read Full Guide', 'مکمل گائیڈ', 'Mukammal Guide Parhein')}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 transition-transform group-hover/link:translate-x-0.5 rtl:group-hover/link:-translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </ScrollReveal>

      {/* WHY PAKISTAN INFO HUB Section — Seamless Cream-50 Card */}
      <ScrollReveal delayMs={150}>
        <section className="rounded-[12px] doc-card border border-[#F1F5F9] dark:border-slate-800 p-6 sm:p-10 space-y-6 bg-[#FAF9F6] dark:bg-[#1E2A3F]">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-[24px] sm:text-[32px] font-serif font-semibold text-[#0B1120] dark:text-white leading-[1.2]">
              {t('Why Trust Pakistan Info Hub?', 'پاکستان انفو ہب کا انتخاب کیوں؟')}
            </h2>
            <p className="text-sm text-[#475569] dark:text-slate-300 leading-relaxed font-sans">
              {t(
                'Designed around the "Verified Document" aesthetic, Pakistan Info Hub eliminates clickbait rumors and unverified agent claims. Every fee figure and process step is cross-checked against official Gazette notifications.',
                'ہماری ویب سائٹ پر آپ کو غیر متعلقہ اشتہارات کے بجائے ہمیشہ بااعتماد اور تصدیق شدہ سرکاری ڈیٹا ملے گا۔'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#F1F5F9] dark:border-slate-800">
            <div className="space-y-1.5">
              <h3 className="font-serif font-medium text-sm text-[#0B1120] dark:text-white">
                {t('AEO Executive Summaries', 'فوری جواب کا خلاصہ')}
              </h3>
              <p className="text-xs text-[#475569] dark:text-slate-400 leading-relaxed font-sans">
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
      </ScrollReveal>
    </div>
  );
}
