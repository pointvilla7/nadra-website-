import React from 'react';
import { CATEGORIES } from '@/lib/data/categories';
import { ARTICLES } from '@/lib/data/articles';
import { CategoryPillNav } from '@/components/CategoryPillNav';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SchemaInjector } from '@/components/SchemaInjector';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { ShieldCheck, FileText, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CategoryHeroIllustration } from '@/components/visuals';

export const metadata: Metadata = {
  title: 'Hajj & Umrah Services | Pakistan Info Hub',
  description: 'MORA Government Hajj scheme registration, Nusuk online Umrah visa application steps, and balloting results by CNIC.',
  openGraph: {
    title: 'Hajj & Umrah Services | Pakistan Info Hub',
    description: 'MORA Government Hajj scheme registration, Nusuk online Umrah visa application steps, and balloting results by CNIC.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/hajj-umrah',
  },
};

export default function Page() {
  const category = CATEGORIES.find((c) => c.slug === 'hajj-umrah') || CATEGORIES[0];
  const articles = Object.values(ARTICLES).filter((a) => a.categoryId === 'hajj-umrah');

  return (
    <>
      <SchemaInjector
        customSchema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Hajj & Umrah Services | Pakistan Info Hub',
          url: 'https://www.pakistaninfohub.com/hajj-umrah',
          description: 'MORA Government Hajj scheme registration, Nusuk online Umrah visa application steps, and balloting results by CNIC.',
        }}
      />
      <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
        <Breadcrumbs items={[{ nameEn: category.nameEn, nameUr: category.nameUr }]} />

        {/* Hero Header */}
        <header className="bg-doc-paper dark:bg-doc-dark-card border-2 border-doc-brass/40 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <VerifiedBadge variant="header" textEn="VERIFIED PUBLIC REPOSITORY" />
                <span className="font-mono text-xs text-doc-seal uppercase tracking-widest font-bold">
                  {articles.length} OFFICIAL GUIDES
                </span>
              </div>
              <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-doc-ink dark:text-slate-100 tracking-tight leading-tight">
                {category.nameEn}
              </h1>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                {category.descriptionEn}
              </p>
            </div>

            <div className="md:col-span-4 flex justify-center">
              <CategoryHeroIllustration category="hajj-umrah" />
            </div>
          </div>
        </header>

        <CategoryPillNav />

        {/* Popular Services & Interactive Tools */}
        {category.popularSearches && category.popularSearches.length > 0 && (
          <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/30 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-doc-brass" />
                <span>Featured Online Tools &amp; Popular Services</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.popularSearches.map((item) => (
                <Link
                  key={item.slug}
                  href={item.slug}
                  className="px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-doc-ink hover:text-white dark:hover:bg-slate-700 text-doc-ink dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-medium transition flex items-center gap-1.5"
                >
                  <span className="font-serif font-bold">{item.en}</span>
                  <span className="text-[10px] text-slate-400 font-sans">({item.ur})</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((art) => (
            <Link
              key={art.slug}
              href={art.fullPath}
              className="doc-card rounded-2xl p-5 border border-doc-brass/30 hover:border-doc-seal hover:shadow-md transition flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified {art.lastVerified}</span>
                  </span>
                  <FileText className="w-4 h-4 text-doc-brass group-hover:text-doc-seal transition" />
                </div>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-slate-100 group-hover:text-doc-seal dark:group-hover:text-red-400 transition">
                  {art.titleEn}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {art.metaDescriptionEn}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 mt-3 border-t border-doc-brass/20 text-xs font-mono font-bold text-doc-seal dark:text-red-300">
                <span>View Full Procedure</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
