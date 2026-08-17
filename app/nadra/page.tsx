'use client';

import { VerifiedBadge } from '@/components/VerifiedBadge';
import React from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/lib/data/categories';
import { ARTICLES } from '@/lib/data/articles';
import { useLanguage } from '@/lib/context/LanguageContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ShieldCheck, ArrowRight, CreditCard, Sparkles } from 'lucide-react';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { SchemaInjector } from '@/components/SchemaInjector';

export default function NadraCategoryPage() {
  const { t } = useLanguage();
  const category = CATEGORIES.find((c) => c.id === 'nadra') || CATEGORIES[0];
  const nadraArticles = Object.values(ARTICLES).filter((a) => a.categoryId === 'nadra');

  const breadcrumbs = [{ nameEn: category.nameEn, nameUr: category.nameUr }];

  return (
    <div className="space-y-10 md:space-y-16 animate-fadeIn">
      <SchemaInjector breadcrumbs={breadcrumbs} />
      <Breadcrumbs items={breadcrumbs} />

      {/* Category Header — Brand Seal + Ink Design */}
      <header className="rounded-3xl doc-card border-2 border-doc-brass/40 p-8 md:p-10 space-y-4 relative overflow-hidden bg-doc-ink text-white shadow-2xl">
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
      </header>

      {/* ARTICLES GRID SECTION */}
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

      {/* Ad Zone */}
      <AdPlacementZone slotId="nadra-category-bottom" format="horizontal" />
    </div>
  );
}
