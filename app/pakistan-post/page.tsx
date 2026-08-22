import React from 'react';
import { CATEGORIES } from '@/lib/data/categories';
import { ARTICLES } from '@/lib/data/articles';
import { CategoryPillNav } from '@/components/CategoryPillNav';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SchemaInjector } from '@/components/SchemaInjector';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { ShieldCheck, FileText, CheckCircle2, ArrowRight, Mail, Truck, Building, Search, Package, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pakistan Post 2026: UMS Parcel Tracking, GPO Directory & Postage Rates | Pakistan Info Hub',
  description: 'Official guides and verified tracking tools for Pakistan Post: Urgent Mail Service (UMS) tracking (ep.gov.pk), international EMS shipping, General Post Office (GPO) directory, 5-digit postal codes, and delivery schedules.',
  openGraph: {
    title: 'Pakistan Post 2026: UMS Parcel Tracking, GPO Directory & Postage Rates',
    description: 'Official guides and verified tracking tools for Pakistan Post, UMS parcel tracking (ep.gov.pk), GPO directory, and postal codes.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/pakistan-post',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/pakistan-post' },
};

export default function PakistanPostHubPage() {
  const category = CATEGORIES.find((c) => c.slug === 'pakistan-post') || {
    id: 'pakistan-post',
    slug: 'pakistan-post',
    nameEn: 'Pakistan Post',
    nameUr: 'پاکستان پوسٹ',
    taglineEn: 'UMS Parcel Tracking, GPO Directory & Postal Services',
    taglineUr: 'یو ایم ایس پارسل ٹریکنگ، جی پی او ڈائریکٹری اور ڈاک کی خدمات',
    descriptionEn: 'Official tracking tools and public guides for Pakistan Post: Track domestic Urgent Mail Service (UMS) and international EMS parcels (ep.gov.pk), find nearest General Post Offices (GPOs), lookup 5-digit postal codes, and calculate postage rates.',
    popularSearches: [
      { en: 'Pakistan Post Tracking (90.5k/mo)', ur: 'پاکستان پوسٹ ٹریکنگ', slug: '/pakistan-post/tracking-2026' },
      { en: 'Pakistan Post Guide (135k/mo)', ur: 'پاکستان پوسٹ سروسز گائیڈ', slug: '/pakistan-post/overview-guide-2026' },
      { en: 'Post Office Near Me (GPO)', ur: 'قریبی ڈاکخانہ و جی پی او', slug: '/pakistan-post/post-office-locator-2026' },
    ],
  };

  return (
    <>
      <SchemaInjector
        customSchema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Pakistan Post Services & Tracking | Pakistan Info Hub',
          url: 'https://www.pakistaninfohub.com/pakistan-post',
          description: 'Official tracking tools and public guides for Pakistan Post, UMS parcel tracking, GPO directory, and postal codes.',
        }}
      />
      <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto font-sans">
        <Breadcrumbs items={[{ nameEn: category.nameEn, nameUr: category.nameUr }]} />

        {/* Hero Header */}
        <header className="bg-doc-paper dark:bg-doc-dark-card border-2 border-doc-brass/40 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <VerifiedBadge variant="header" textEn="VERIFIED PUBLIC POSTAL REPOSITORY" />
              <span className="font-mono text-xs text-doc-seal uppercase tracking-widest font-bold">
                OFFICIAL UMS &amp; GPO GUIDES
              </span>
            </div>
            <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-doc-ink dark:text-slate-100 tracking-tight leading-tight">
              {category.nameEn}
              <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
                {category.nameUr}
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              {category.descriptionEn}
            </p>
          </div>
        </header>

        <CategoryPillNav />

        {/* High-Demand Queries Navigation Chips */}
        <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/30 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-doc-brass" />
              <span>High-Demand Services &amp; Online Tools</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { en: 'Pakistan Post Tracking (90.5k/mo)', ur: 'پاکستان پوسٹ ٹریکنگ', slug: '/pakistan-post/tracking-2026' },
              { en: 'Pakistan Post Guide (135k/mo)', ur: 'پاکستان پوسٹ گائیڈ', slug: '/pakistan-post/overview-guide-2026' },
              { en: 'Post Office Near Me (GPO) (27.1k/mo)', ur: 'قریبی ڈاکخانہ و جی پی او', slug: '/pakistan-post/post-office-locator-2026' },
            ].map((item) => (
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

        {/* Featured Hero: #1 Highest Intent Tool (Pakistan Post Tracking) */}
        <Link
          href="/pakistan-post/tracking-2026"
          className="p-6 sm:p-8 rounded-3xl bg-doc-ink text-white border border-doc-brass/50 hover:border-doc-brass transition group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl relative overflow-hidden"
        >
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-doc-brass text-doc-ink font-mono font-bold text-xs uppercase tracking-wider">
                Most Requested Tool (90,500 Searches/Mo)
              </span>
            </div>
            <h2 className="font-serif font-extrabold text-2xl sm:text-3xl text-white group-hover:text-amber-300 transition">
              Pakistan Post Tracking 2026: Track Your Parcel Online →
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              Real-time shipment lookup for Urgent Mail Service (UMS), international EMS, and registered post. Format-validate your 9-13 digit tracking number and check delivery progress on ep.gov.pk.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl bg-doc-brass text-doc-ink font-bold text-sm shadow-md group-hover:bg-amber-400 transition">
            <span>Track Parcel Online</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Complete Section Guides Directory */}
        <div className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            All Pakistan Post Guides &amp; Directory Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                slug: 'tracking-2026',
                fullPath: '/pakistan-post/tracking-2026',
                titleEn: 'Pakistan Post Tracking 2026: Track Your Parcel & UMS Mail Online',
                descEn: 'Track your Pakistan Post shipments, UMS, international EMS, and GPO registered mail in real-time.',
                date: 'August 22, 2026',
                icon: Truck,
              },
              {
                slug: 'overview-guide-2026',
                fullPath: '/pakistan-post/overview-guide-2026',
                titleEn: 'Pakistan Post 2026: Services, UMS Tracking & Post Office Guide',
                descEn: 'Comprehensive guide to Pakistan Post operations, domestic UMS services, international EMS shipping, and delivery rates.',
                date: 'August 22, 2026',
                icon: Mail,
              },
              {
                slug: 'post-office-locator-2026',
                fullPath: '/pakistan-post/post-office-locator-2026',
                titleEn: 'Pakistan Post Office Near Me: GPO Locations, Postal Codes & Contact 2026',
                descEn: 'Find nearest General Post Offices (GPOs), 5-digit postal codes, operating hours, and counter services across Pakistan.',
                date: 'August 22, 2026',
                icon: Building,
              },
            ].map((art) => {
              const IconComp = art.icon;
              return (
                <Link
                  key={art.slug}
                  href={art.fullPath}
                  className="doc-card rounded-2xl p-5 border border-doc-brass/30 hover:border-doc-seal hover:shadow-md transition flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verified {art.date}</span>
                      </span>
                      <IconComp className="w-4 h-4 text-doc-brass group-hover:text-doc-seal transition" />
                    </div>
                    <h3 className="font-serif font-bold text-base text-doc-ink dark:text-slate-100 group-hover:text-doc-seal dark:group-hover:text-red-400 transition">
                      {art.titleEn}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {art.descEn}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-3 border-t border-doc-brass/20 text-xs font-mono font-bold text-doc-seal dark:text-red-300">
                    <span>View Full Resource</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
