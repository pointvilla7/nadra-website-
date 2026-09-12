'use client';

import { VerifiedBadge } from '@/components/VerifiedBadge';
import { ScrollReveal } from '@/components/ScrollReveal';
import React from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/lib/data/categories';
import { ARTICLES } from '@/lib/data/articles';
import { useLanguage } from '@/lib/context/LanguageContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ShieldCheck, ArrowRight, Plane, Sparkles } from 'lucide-react';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { SchemaInjector } from '@/components/SchemaInjector';
import { CategoryHeroIllustration } from '@/components/visuals';

export default function PassportCategoryPage() {
  const { t } = useLanguage();
  const category = CATEGORIES.find((c) => c.id === 'passport') || CATEGORIES[0];
  const articles = Object.values(ARTICLES).filter((a) => a.categoryId === 'passport');
  const breadcrumbs = [{ nameEn: category.nameEn, nameUr: category.nameUr }];

  return (
    <div className="space-y-10 md:space-y-16 animate-fadeIn">
      <SchemaInjector
        breadcrumbs={breadcrumbs}
        categoryName={category.nameEn}
        categoryArticles={articles}
      />
      <Breadcrumbs items={breadcrumbs} />

      {/* Category Header — Brand Seal + Ink Design */}
      <header className="rounded-3xl doc-card border-2 border-doc-brass/40 p-6 sm:p-8 md:p-10 relative overflow-hidden bg-doc-ink text-white shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-doc-seal/20 text-doc-seal dark:text-red-300 border border-doc-brass/30">
                <Plane className="w-6 h-6 text-doc-brass" />
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">
                {t('Official Category Portal', 'آفیشل کیٹیگری پورٹل')}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight">
              {t(category.nameEn, category.nameUr)}
            </h1>

            <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed font-sans">
              {t(category.descriptionEn, category.descriptionUr)}
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {category.popularSearches.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.slug}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-doc-brass/30 transition shadow-sm"
                >
                  • {t(item.en, item.ur)}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <CategoryHeroIllustration category="passport" />
          </div>
        </div>
      </header>

      {/* INTERACTIVE TOOLS SHOWCASE SECTION */}
      <ScrollReveal delayMs={40}>
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-doc-brass/30 pb-2">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-doc-brass/20 text-doc-brass border border-doc-brass/40">
                <Sparkles className="w-4 h-4 text-doc-seal" />
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
                {t('Interactive Passport Tools & Calculators', 'انٹرایکٹو پاسپورٹ ٹولز اور کیلکولیٹرز')}
              </h2>
            </div>
            <span className="text-xs font-mono font-bold text-doc-brass">
              {t('Instant Tools', 'فوری ٹولز')}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Tool 1: Passport Fee Calculator Card */}
            <div className="doc-card rounded-2xl p-6 border-2 border-doc-brass/40 hover:border-doc-brass hover:scale-[1.01] hover:-translate-y-0.5 flex flex-col justify-between transition-all duration-300 group shadow-md bg-gradient-to-br from-white to-doc-paper/60 dark:from-doc-dark-card dark:to-slate-900/90">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-doc-brass/20 text-amber-900 dark:text-amber-300 font-mono text-[11px] font-extrabold uppercase border border-doc-brass/40">
                    <Sparkles className="w-3.5 h-3.5 text-doc-brass animate-pulse" />
                    <span>{t('INTERACTIVE TOOL', 'انٹرایکٹو ٹول')}</span>
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-500">2026 RATES</span>
                </div>

                <Link href="/passport/fee-calculator">
                  <h3 className="text-lg font-serif font-bold text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                    {t('Passport Fee Calculator 2026', 'پاسپورٹ فیس کیلکولیٹر (تمام کیٹیگریز)')}
                  </h3>
                </Link>

                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {t(
                    'Instant fee calculation for 36, 72, 100 pages, and e-Passports for minors & adults with Normal, Urgent & Fast Track delivery.',
                    'عام پاسپورٹ، ای پاسپورٹ، بچوں اور بڑوں کے لیے نارمل، ارجنٹ اور فاسٹ ٹریک فیس کا فوری حساب۔'
                  )}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-doc-brass/20 flex items-center justify-between font-mono text-[11px]">
                <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>DGIP Verified</span>
                </span>
                <Link
                  href="/passport/fee-calculator"
                  className="font-bold text-doc-seal dark:text-red-400 hover:underline flex items-center gap-1 px-3 py-1.5 rounded-lg bg-doc-seal/10 hover:bg-doc-seal hover:text-white transition"
                >
                  <span>{t('Open Calculator', 'کیلکولیٹر کھولیں')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Tool 2: Passport Tracking Status Card */}
            <div className="doc-card rounded-2xl p-6 border-2 border-doc-brass/40 hover:border-doc-brass hover:scale-[1.01] hover:-translate-y-0.5 flex flex-col justify-between transition-all duration-300 group shadow-md bg-gradient-to-br from-white to-doc-paper/60 dark:from-doc-dark-card dark:to-slate-900/90">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-doc-ink/10 text-doc-ink dark:text-slate-200 font-mono text-[11px] font-extrabold uppercase border border-doc-ink/30 dark:border-slate-700">
                    <Sparkles className="w-3.5 h-3.5 text-doc-brass animate-pulse" />
                    <span>{t('GUIDED TOOL', 'رہنما ٹول')}</span>
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-500">SMS & PORTAL</span>
                </div>

                <Link href="/passport/tracking-status">
                  <h3 className="text-lg font-serif font-bold text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                    {t('Passport Tracking Status Guide', 'پاسپورٹ ٹریکنگ سٹیٹس گائیڈ')}
                  </h3>
                </Link>

                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {t(
                    'Track Machine Readable Passport & e-Passport printing status using 11-digit token and SMS 9988 instructions.',
                    'اپنے پاسپورٹ کی پرنٹنگ اور ڈیلیوری کا سٹیٹس 11 ہندسوں کے ٹوکن اور ایس ایم ایس 9988 سے چیک کریں۔'
                  )}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-doc-brass/20 flex items-center justify-between font-mono text-[11px]">
                <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>100% Private</span>
                </span>
                <Link
                  href="/passport/tracking-status"
                  className="font-bold text-doc-seal dark:text-red-400 hover:underline flex items-center gap-1 px-3 py-1.5 rounded-lg bg-doc-seal/10 hover:bg-doc-seal hover:text-white transition"
                >
                  <span>{t('Track Status', 'سٹیٹس دیکھیں')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ARTICLES GRID SECTION */}
      <ScrollReveal delayMs={60}>
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-doc-seal" />
            <h2 className="text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
              {t('Passport & Travel Verified Records (2026)', 'پاسپورٹ اور ٹریول کی تصدیق شدہ فائلز')}
            </h2>
          </div>
          <span className="text-xs font-mono font-bold text-doc-brass">
            {articles.length} {t('Files Available', 'فائلز دستیاب')}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.slug}
              className="doc-card rounded-2xl p-6 border border-doc-brass/20 hover:border-doc-brass/50 hover:scale-[1.01] hover:-translate-y-0.5 flex flex-col justify-between transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-doc-seal/10 text-doc-seal dark:text-red-300 border border-doc-brass/20">
                    PASSPORT OFFICIAL
                  </span>
                  <VerifiedBadge variant="card" />
                </div>

                <Link href={article.fullPath}>
                  <h3 className="text-lg font-serif font-bold text-doc-ink dark:text-white group-hover:text-doc-seal transition line-clamp-2">
                    {t(article.titleEn, article.titleUr)}
                  </h3>
                </Link>

                <p className="text-xs text-slate-700 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {t(article.directAnswerEn, article.directAnswerUr)}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-doc-brass/20 flex items-center justify-between font-mono text-[11px]">
                <span className="text-slate-500">{article.lastVerified}</span>
                <Link
                  href={article.fullPath}
                  className="font-bold text-doc-seal dark:text-red-400 hover:underline flex items-center gap-1"
                >
                  <span>{t('Read Full Guide', 'مکمل گائیڈ', 'Mukammal Guide Parhein')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      </ScrollReveal>

      {/* Ad Zone */}
      <AdPlacementZone slotId="passport-category-bottom" format="horizontal" />
    </div>
  );
}
