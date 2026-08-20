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
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { RecentlyVerifiedTicker } from '@/components/RecentlyVerifiedTicker';
import { ScrollReveal } from '@/components/ScrollReveal';

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
    <div className="space-y-12 sm:space-y-24 animate-fadeIn pb-16">
      {/* Search Modal Trigger */}
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* HERO SECTION - EXACT NAVY-950 BACKGROUND */}
      <section className="relative overflow-hidden rounded-[12px] bg-[#0B1120] border border-[#1E2A3F] p-6 sm:p-12 text-white shadow-2xl">
        {/* Subtle Ambient Radial Light */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(184,134,11,0.15),rgba(255,255,255,0))] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center space-y-6">
          {/* Top Stamp Seal + Trust Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-staggerIn">
            <VerifiedBadge variant="stamp" />
            <div className="text-center sm:text-start border-t sm:border-t-0 sm:border-s border-[#1E2A3F] pt-2 sm:pt-0 sm:ps-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#D4A017] uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#0F9D6D]" />
                <span>{t('INDEPENDENTLY VERIFIED CIVIC DIRECTORY', 'آزادانہ مصدقہ عوامی ڈائریکٹری')}</span>
              </span>
              <span className="text-xs text-[#CBD5E1] font-normal block mt-1 font-sans">
                {t('100% Original Gazette Citations • Updated August 2026', 'مصدقہ 2026 • 100٪ اصلی معلومات')}
              </span>
            </div>
          </div>

          {/* Main Fraunces Serif Headline (H1: 48px desktop / 32px mobile) */}
          <h1 className="text-[32px] sm:text-[48px] font-serif font-semibold tracking-tight text-white leading-[1.1]">
            {t(
              'Official Civic & Public Services Directory of Pakistan',
              'پاکستان کا مصدقہ اور بااعتماد معلومات پورٹل'
            )}
          </h1>

          <p className="text-base text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed font-sans font-normal">
            {t(
              'Verified step-by-step document procedures, fee schedules, online tracking tools for NADRA CNIC, Passports, BISE Education, Utility bills, Govt Loans, BISP 8171, and Traffic services.',
              'شناختی کارڈ، پاسپورٹ فیس، تعلیمی رزلٹ، کے الیکٹرک و لیسکو بل، بلا سود قرضے اور بے نظیر 8171 کی مصدقہ رہنمائی۔'
            )}
          </p>

          {/* Prominent Search Bar Component */}
          <div className="pt-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-full max-w-xl mx-auto flex items-center justify-between p-3 sm:p-4 rounded-[12px] bg-[#FAF9F6] dark:bg-[#1E2A3F] border border-[#CBD5E1] dark:border-slate-700 hover:border-[#B8860B] text-[#0B1120] dark:text-white shadow-doc-card hover:shadow-doc-hover transition-all duration-200 group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-[#B8860B] group-hover:scale-110 transition-transform" />
                <span className="text-sm md:text-base font-sans font-medium text-[#475569] dark:text-slate-300">
                  {t(
                    'Search CNIC, BISP 8171, Passport fee, LESCO bill...',
                    'شناختی کارڈ، بے نظیر 8171، پاسپورٹ فیس، بل تلاش کریں...'
                  )}
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[8px] bg-[#B8860B] hover:bg-[#D4A017] text-white font-sans font-semibold text-xs transition-transform group-hover:scale-105 min-h-[40px]">
                <span>{t('SEARCH DIRECTORY', 'تلاش کریں')}</span>
              </span>
            </button>
          </div>

          {/* Primary CTA Buttons (Solid Gold-600 & Outline Slate-300) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/bills/utility-bill-checker-2026"
              className="w-full sm:w-auto px-6 py-3 rounded-[8px] bg-[#B8860B] hover:bg-[#D4A017] text-white font-sans font-semibold text-xs shadow-xs transition flex items-center justify-center gap-2 min-h-[44px] hover:scale-[1.01] active:scale-[0.98]"
            >
              <span>⚡ {t('ONLINE BILL CHECKER 2026', 'آن لائن بجلی و گیس بل چیکر')}</span>
            </Link>
            <Link
              href="/tracker"
              className="w-full sm:w-auto px-6 py-3 rounded-[8px] bg-transparent hover:bg-[#1E2A3F]/60 text-[#CBD5E1] font-sans font-semibold text-xs border border-[#CBD5E1]/40 hover:border-[#CBD5E1] transition flex items-center justify-center gap-2 min-h-[44px] hover:scale-[1.01] active:scale-[0.98]"
            >
              <span>🔍 {t('UNIFIED APPLICATION TRACKER', 'درخواست ٹریکنگ پورٹل')}</span>
            </Link>
          </div>

          {/* Quick Trending Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-[13px] font-sans text-[#CBD5E1]">
            <span className="text-[#D4A017] font-semibold">{t('TRENDING GUIDES:', 'مشہور سروسز:')}</span>
            <Link
              href="/nadra/cnic-kaise-banaye"
              className="hover:text-white transition underline underline-offset-2"
            >
              CNIC Apply
            </Link>
            <span>•</span>
            <Link
              href="/welfare/bisp-eligibility-check-by-cnic"
              className="hover:text-white transition underline underline-offset-2"
            >
              BISP 8171
            </Link>
            <span>•</span>
            <Link
              href="/loans/apni-chhat-apna-ghar"
              className="hover:text-white transition underline underline-offset-2"
            >
              Apni Chhat Loan
            </Link>
            <span>•</span>
            <Link
              href="/passport/fee-2026"
              className="hover:text-white transition underline underline-offset-2"
            >
              Passport Fee 2026
            </Link>
          </div>
        </div>
      </section>

      {/* LIVE RECENTLY VERIFIED TICKER */}
      <RecentlyVerifiedTicker />

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
        <section className="space-y-6 cv-auto">
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
        <section className="space-y-6 cv-auto">
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
        <section className="rounded-[12px] doc-card border border-[#F1F5F9] dark:border-slate-800 p-6 sm:p-10 space-y-6 cv-auto bg-[#FAF9F6] dark:bg-[#1E2A3F]">
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
