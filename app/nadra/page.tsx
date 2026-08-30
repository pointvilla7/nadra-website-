'use client';

import { VerifiedBadge } from '@/components/VerifiedBadge';
import { ScrollReveal } from '@/components/ScrollReveal';
import React from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/lib/data/categories';
import { ARTICLES } from '@/lib/data/articles';
import { useLanguage } from '@/lib/context/LanguageContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ShieldCheck, ArrowRight, CreditCard, Sparkles } from 'lucide-react';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { SchemaInjector } from '@/components/SchemaInjector';
import { CategoryHeroIllustration } from '@/components/visuals';

export default function NadraCategoryPage() {
  const { t } = useLanguage();
  const category = CATEGORIES.find((c) => c.id === 'nadra') || CATEGORIES[0];
  const nadraArticles = Object.values(ARTICLES).filter((a) => a.categoryId === 'nadra');

  const breadcrumbs = [{ nameEn: category.nameEn, nameUr: category.nameUr }];

  return (
    <div className="space-y-10 md:space-y-16 animate-fadeIn">
      <SchemaInjector
        breadcrumbs={breadcrumbs}
        categoryName={category.nameEn}
        categoryArticles={nadraArticles}
      />
      <Breadcrumbs items={breadcrumbs} />

      {/* Category Header — Brand Seal + Ink Design */}
      <header className="rounded-3xl doc-card border-2 border-doc-brass/40 p-6 sm:p-8 md:p-10 relative overflow-hidden bg-doc-ink text-white shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-doc-seal/20 text-doc-seal dark:text-red-300 border border-doc-brass/30">
                <CreditCard className="w-6 h-6 text-doc-brass" />
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
            <CategoryHeroIllustration category="nadra" />
          </div>
        </div>
      </header>

      {/* First-Time Visitor Orientation Guide */}
      <ScrollReveal delayMs={20}>
        <section className="doc-card rounded-2xl p-6 sm:p-8 border-2 border-doc-brass/30 bg-gradient-to-r from-doc-paper/80 via-white to-doc-paper/50 dark:from-doc-dark-card dark:to-slate-900/90 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-doc-seal/10 text-doc-seal dark:text-red-300 border border-doc-brass/30">
              <ShieldCheck className="w-5 h-5 text-doc-seal" />
            </span>
            <div>
              <h2 className="text-xl font-serif font-bold text-doc-ink dark:text-white">
                {t('First Time Applying for a NADRA Document?', 'پہلی بار نادرا شناختی یا فیملی دستاویز بنوا رہے ہیں؟')}
              </h2>
              <p className="text-xs font-mono text-slate-500">
                {t('Official 2026 Orientation & Channel Guide', 'آفیشل رہنمائی اور چینل گائیڈ برائے شہری')}
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            {t(
              'The National Database & Registration Authority (NADRA) manages Pakistan\'s citizen identity framework. Depending on whether you live in Pakistan or abroad, you can apply either in person at a NADRA Registration Center (NRC / Mega Center) or 100% online through the official Pak-ID mobile app and web portal. Choose a category below to access step-by-step document checklists, official 2026 government fee tables, delivery timelines, and direct status check tools.',
              'نیشنل ڈیٹا بیس اینڈ رجسٹریشن اتھارٹی (نادرا) پاکستان کے تمام شہریوں کے شناختی و خاندانی ریکارڈ کا مرکزی ادارہ ہے۔ اگر آپ پاکستان میں مقیم ہیں یا بیرون ملک، آپ نادرا میگا سنٹرز میں جا کر یا گھر بیٹھے پاک آئی ڈی (Pak-ID) موبائل ایپ اور پورٹل کے ذریعے آن لائن درخواست دے سکتے ہیں۔ نیچے دی گئی کیٹیگریز میں سے مطلوبہ سروس منتخب کر کے فیس، مطلوبہ کاغذات اور ٹریکنگ کا مکمل طریقہ جانیے۔'
            )}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-white/90 dark:bg-slate-800/80 border border-doc-brass/20 space-y-1">
              <div className="text-xs font-bold text-doc-seal font-mono">{t('1. Pak-ID Online Portal', '1۔ پاک آئی ڈی آن لائن')}</div>
              <p className="text-xs text-slate-600 dark:text-slate-400">{t('Renewals, NICOP, POC, and digital FRC with biometric phone scan.', 'تجدید، نائیکوپ، پی او سی اور ڈیجیٹل ایف آر سی۔')}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/90 dark:bg-slate-800/80 border border-doc-brass/20 space-y-1">
              <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 font-mono">{t('2. NRC Mega Centers (24/7)', '2۔ نادرا میگا سنٹرز (24/7)')}</div>
              <p className="text-xs text-slate-600 dark:text-slate-400">{t('First-time CNIC at age 18, fingerprint updates, and marital status changes.', '18 سال کی عمر میں پہلا شناختی کارڈ اور فنگر پرنٹ کی تجدید۔')}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/90 dark:bg-slate-800/80 border border-doc-brass/20 space-y-1">
              <div className="text-xs font-bold text-amber-700 dark:text-amber-400 font-mono">{t('3. SMS Tracking (8400 / 7000)', '3۔ ایس ایم ایس ٹریکنگ (8400)')}</div>
              <p className="text-xs text-slate-600 dark:text-slate-400">{t('Track application status by texting your Tracking ID to 8400.', 'ٹریکنگ آئی ڈی 8400 پر ایس ایم ایس کر کے اسٹیٹس جانیے۔')}</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* INTERACTIVE TOOLS SHOWCASE SECTION */}
      <ScrollReveal delayMs={40}>
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-doc-brass/30 pb-2">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-doc-brass/20 text-doc-brass border border-doc-brass/40">
                <Sparkles className="w-4 h-4 text-doc-seal" />
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
                {t('Interactive NADRA Tools & Calculators', 'انٹرایکٹو نادرا ٹولز اور کیلکولیٹرز')}
              </h2>
            </div>
            <span className="text-xs font-mono font-bold text-doc-brass">
              {t('Instant Helpers', 'فوری ٹولز')}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Tool 1: NICOP Fee Calculator Card */}
            <div className="doc-card rounded-2xl p-6 border-2 border-doc-brass/40 hover:border-doc-brass hover:scale-[1.01] hover:-translate-y-0.5 flex flex-col justify-between transition-all duration-300 group shadow-md bg-gradient-to-br from-white to-doc-paper/60 dark:from-doc-dark-card dark:to-slate-900/90">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-doc-brass/20 text-amber-900 dark:text-amber-300 font-mono text-[11px] font-extrabold uppercase border border-doc-brass/40">
                    <Sparkles className="w-3.5 h-3.5 text-doc-brass animate-pulse" />
                    <span>{t('INTERACTIVE TOOL', 'انٹرایکٹو ٹول')}</span>
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-500">2026 RATES</span>
                </div>

                <Link href="/nadra/nicop-fee-calculator">
                  <h3 className="text-lg font-serif font-bold text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                    {t('NICOP Fee Calculator 2026', 'نائیکوپ فیس کیلکولیٹر (سمندر پار پاکستانی)')}
                  </h3>
                </Link>

                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {t(
                    'Instant fee check for Overseas Pakistani Cards based on Country Zone A & B and Normal, Urgent, or Executive speed.',
                    'سمندر پار پاکستانیوں کے لیے زون اے اور بی کے لحاظ سے نائیکوپ فیس کا فوری اور خودکار حساب۔'
                  )}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-doc-brass/20 flex items-center justify-between font-mono text-[11px]">
                <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Instant Rates</span>
                </span>
                <Link
                  href="/nadra/nicop-fee-calculator"
                  className="font-bold text-doc-seal dark:text-red-400 hover:underline flex items-center gap-1 px-3 py-1.5 rounded-lg bg-doc-seal/10 hover:bg-doc-seal hover:text-white transition"
                >
                  <span>{t('Open Calculator', 'کیلکولیٹر کھولیں')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Tool 2: B-Form / FRC Status Checker Card */}
            <div className="doc-card rounded-2xl p-6 border-2 border-doc-brass/40 hover:border-doc-brass hover:scale-[1.01] hover:-translate-y-0.5 flex flex-col justify-between transition-all duration-300 group shadow-md bg-gradient-to-br from-white to-doc-paper/60 dark:from-doc-dark-card dark:to-slate-900/90">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-doc-seal/10 text-doc-seal dark:text-red-300 font-mono text-[11px] font-extrabold uppercase border border-doc-seal/30">
                    <Sparkles className="w-3.5 h-3.5 text-doc-seal animate-pulse" />
                    <span>{t('INTERACTIVE TOOL', 'انٹرایکٹو ٹول')}</span>
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-500">100% PRIVATE</span>
                </div>

                <Link href="/nadra/b-form-frc-status-check">
                  <h3 className="text-lg font-serif font-bold text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                    {t('B-Form / FRC Status Check Guide', 'بی فارم و ایف آر سی سٹیٹس گائیڈ')}
                  </h3>
                </Link>

                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {t(
                    'Track Child Registration Certificate (B-Form) and Family Registration Certificate (FRC) using official SMS 8400 and Pak-ID portal.',
                    'بی فارم اور ایف آر سی سرٹیفکیٹ کا سٹیٹس چیک کرنے کے 3 آفیشل طریقے (ایس ایم ایس 8400 اور پورٹل)۔'
                  )}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-doc-brass/20 flex items-center justify-between font-mono text-[11px]">
                <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>3 Official Methods</span>
                </span>
                <Link
                  href="/nadra/b-form-frc-status-check"
                  className="font-bold text-doc-seal dark:text-red-400 hover:underline flex items-center gap-1 px-3 py-1.5 rounded-lg bg-doc-seal/10 hover:bg-doc-seal hover:text-white transition"
                >
                  <span>{t('Check Status', 'سٹیٹس دیکھیں')}</span>
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
              {t('Official NADRA Guides & Rate Charts', 'نادرا گائیڈز اور فیس چارٹس')}
            </h2>
          </div>
          <span className="text-xs font-mono font-bold text-doc-brass">
            {nadraArticles.length} {t('Files Available', 'فائلز دستیاب')}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nadraArticles.map((article) => (
            <div
              key={article.slug}
              className="doc-card rounded-2xl p-6 border border-doc-brass/20 hover:border-doc-brass/50 hover:scale-[1.01] hover:-translate-y-0.5 flex flex-col justify-between transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-doc-seal/10 text-doc-seal dark:text-red-300 border border-doc-brass/20">
                    {t('NADRA OFFICIAL', 'نادرا آفیشل')}
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
      <AdPlacementZone slotId="nadra-category-bottom" format="horizontal" />
    </div>
  );
}
