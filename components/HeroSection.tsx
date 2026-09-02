import React from 'react';
import Link from 'next/link';
import { Search, ShieldCheck, ArrowRight, Zap } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { CATEGORIES } from '@/lib/data/categories';
import { CivicServicesIllustration } from '@/components/CivicServicesIllustration';

interface HeroSectionProps {
  onOpenSearch: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSearch }) => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0B1120] via-[#1B2A4A] to-[#2E4270] border border-[#2E4270]/60 p-4 sm:p-7 lg:p-11 text-white shadow-2xl">
      {/* Ambient background light gradients */}
      <div className="absolute -top-12 -right-12 w-80 sm:w-96 h-80 sm:h-96 bg-[radial-gradient(circle_at_50%_50%,rgba(212,160,23,0.14),transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-80 sm:w-96 h-80 sm:h-96 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.12),transparent_70%)] pointer-events-none" />

      {/* Grid Layout: Left Content (7 cols on lg) + Right Custom Vector Art (5 cols on lg) */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
        
        {/* ── LEFT COLUMN: Headline, Prominent Search, CTA & Quick Links ── */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-start">
          
          {/* Top Trust Badge Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/85 border border-doc-brass/35 text-xs shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-mono font-bold tracking-wider text-doc-brass uppercase text-[11px] sm:text-xs">
              {t('GOVERNMENT GAZETTE CITATIONS • 2026', 'مصدقہ حکومتی گزٹ معلومات • 2026')}
            </span>
          </div>

          {/* Main Fraunces Serif Headline (h1 for SEO & Accessibility) */}
          <h1 className="text-2xl sm:text-4xl lg:text-[46px] font-serif font-bold tracking-tight text-white leading-[1.15]">
            {t(
              'Official Civic & Public Services Directory of Pakistan',
              'پاکستان کا مصدقہ اور بااعتماد عوامی معلومات پورٹل'
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed font-sans max-w-xl mx-auto lg:mx-0">
            {t(
              `Verified step-by-step document procedures, fee schedules, and interactive tools for NADRA, Passports, Tax/FBR, Hajj, Property, Health, and all ${CATEGORIES.length} civic service categories.`,
              `شناختی کارڈ، پاسپورٹ فیس، ایف بی آر ٹیکس، حج، اراضی ریکارڈ، صحت کارڈ اور تمام ${CATEGORIES.length} سرکاری شعبہ جات کی مستند اور تازہ ترین رہنمائی۔`
            )}
          </p>

          {/* ── PROMINENT MODERN SAAS SEARCH BAR (Focal Point with 16px radius, soft drop shadow, smooth transition) ── */}
          <div className="pt-1">
            <button
              onClick={onOpenSearch}
              type="button"
              aria-label="Open global civic services directory search"
              className="w-full min-h-[48px] sm:min-h-[56px] flex items-center justify-between p-2 sm:p-3 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-slate-200/90 dark:border-slate-700/80 hover:border-doc-brass dark:hover:border-doc-brass shadow-md hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-doc-brass/30 transition-all duration-300 group text-start cursor-pointer"
            >
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pl-1.5 sm:pl-2.5">
                <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <Search className="w-4 sm:w-5 h-4 sm:h-5 text-doc-brass" />
                </div>
                <span className="text-xs sm:text-sm md:text-base font-sans font-medium text-slate-500 dark:text-slate-400 truncate">
                  {t(
                    'Search CNIC, FBR Tax, Hajj, Sehat Card, Passport...',
                    'شناختی کارڈ، ایف بی آر ٹیکس، حج، صحت کارڈ، پاسپورٹ...'
                  )}
                </span>
              </div>
              
              <div className="flex items-center gap-2 shrink-0">
                {/* Desktop Keyboard shortcut badge */}
                <span className="hidden sm:inline-flex items-center px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400">
                  Ctrl+K
                </span>
                
                {/* Search Button Pill */}
                <span className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-[#B8860B] hover:bg-[#D4A017] text-white font-sans font-bold text-xs transition-all duration-200 shadow-sm group-hover:shadow-md min-h-[38px] sm:min-h-[40px]">
                  <span>{t('SEARCH', 'تلاش کریں')}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </button>
          </div>

          {/* Quick Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1">
            <Link
              href="/bills/utility-bill-checker-2026"
              prefetch={false}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#B8860B] hover:bg-[#D4A017] text-white font-sans font-semibold text-xs shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 min-h-[44px] hover:scale-[1.01] active:scale-[0.99]"
            >
              <Zap className="w-4 h-4 text-amber-200" />
              <span>{t('ONLINE BILL CHECKER 2026', 'آن لائن بجلی و گیس بل چیکر')}</span>
            </Link>
            <Link
              href="/tracker"
              prefetch={false}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-sans font-semibold text-xs border border-slate-700 hover:border-slate-600 transition flex items-center justify-center gap-2 min-h-[44px] hover:scale-[1.01] active:scale-[0.99]"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t('UNIFIED APPLICATION TRACKER', 'درخواست ٹریکنگ پورٹل')}</span>
            </Link>
          </div>

          {/* Trending Guides Row */}
          <div className="pt-1.5 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-sans text-slate-300">
            <span className="text-doc-brass font-semibold">{t('TRENDING:', 'مشہور سروسز:')}</span>
            <Link href="/nadra/cnic-kaise-banaye" prefetch={false} className="hover:text-white transition underline underline-offset-2">
              CNIC Smart Card
            </Link>
            <span>•</span>
            <Link href="/tax/fbr-filer-status-check-cnic" prefetch={false} className="hover:text-white transition underline underline-offset-2">
              FBR Filer Status
            </Link>
            <span>•</span>
            <Link href="/hajj-umrah/hajj-balloting-result-check-online" prefetch={false} className="hover:text-white transition underline underline-offset-2">
              Hajj Balloting
            </Link>
            <span>•</span>
            <Link href="/health/sehat-card-eligibility-check-by-cnic" prefetch={false} className="hover:text-white transition underline underline-offset-2">
              Sehat Card
            </Link>
            <span>•</span>
            <Link href="/property/property-mutation-check-by-cnic" prefetch={false} className="hover:text-white transition underline underline-offset-2">
              Property Mutation
            </Link>
          </div>

        </div>

        {/* ── RIGHT COLUMN: Custom Vector Illustration (Desktop / Large Viewport only) ── */}
        <div className="hidden lg:flex lg:col-span-5 items-center justify-center pt-2 lg:pt-0">
          <CivicServicesIllustration className="max-w-[380px] sm:max-w-[440px] lg:max-w-none" />
        </div>

      </div>
    </section>
  );
};
