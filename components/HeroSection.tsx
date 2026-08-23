'use client';

import React from 'react';
import Link from 'next/link';
import { Search, ShieldCheck, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/context/LanguageContext';
import { CivicServicesIllustration } from '@/components/CivicServicesIllustration';

interface HeroSectionProps {
  onOpenSearch: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSearch }) => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0B1120] via-[#111C35] to-[#1B2A4A] border border-[#1E2A3F] p-5 sm:p-8 lg:p-12 text-white shadow-2xl">
      {/* Ambient background light gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_50%_50%,rgba(184,134,11,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle_at_50%_50%,rgba(15,157,109,0.1),transparent_70%)] pointer-events-none" />

      {/* Grid Layout: Left Content (7 cols) + Right Custom Vector Art (5 cols) */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* ── LEFT COLUMN: Headline, Prominent Search, CTA & Quick Links ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-start"
        >
          
          {/* Top Trust Badge Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-doc-brass/30 text-xs shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-mono font-bold tracking-wider text-doc-brass uppercase text-[11px] sm:text-xs">
              {t('GOVERNMENT GAZETTE CITATIONS • 2026', 'مصدقہ حکومتی گزٹ معلومات • 2026')}
            </span>
          </div>

          {/* Main Fraunces Serif Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-bold tracking-tight text-white leading-[1.15]">
            {t(
              'Official Civic & Public Services Directory of Pakistan',
              'پاکستان کا مصدقہ اور بااعتماد عوامی معلومات پورٹل'
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-xl mx-auto lg:mx-0">
            {t(
              'Verified step-by-step document procedures, fee schedules, and interactive tools for NADRA, Passports, Tax/FBR, Hajj, Property, Health, and 18 civic service categories.',
              'شناختی کارڈ، پاسپورٹ فیس، ایف بی آر ٹیکس، حج، اراضی ریکارڈ، صحت کارڈ اور تمام سرکاری شعبہ جات کی مستند اور تازہ ترین رہنمائی۔'
            )}
          </p>

          {/* ── PROMINENT MODERN SAAS SEARCH BAR ── */}
          <div className="pt-1">
            <button
              onClick={onOpenSearch}
              type="button"
              className="w-full flex items-center justify-between p-2.5 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-700/80 hover:border-doc-brass dark:hover:border-doc-brass shadow-lg hover:shadow-xl transition-all duration-200 group text-start cursor-pointer focus:outline-none focus:ring-4 focus:ring-doc-brass/25"
            >
              <div className="flex items-center gap-3 min-w-0 pl-1 sm:pl-2">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Search className="w-5 h-5 text-doc-brass" />
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
                <span className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-[#B8860B] hover:bg-[#D4A017] text-white font-sans font-bold text-xs transition-all duration-200 shadow-sm group-hover:shadow-md min-h-[40px]">
                  <span>{t('SEARCH', 'تلاش کریں')}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </button>
          </div>

          {/* Quick Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
            <Link
              href="/bills/utility-bill-checker-2026"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#B8860B] hover:bg-[#D4A017] text-white font-sans font-semibold text-xs shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 min-h-[42px] hover:scale-[1.01] active:scale-[0.99]"
            >
              <Zap className="w-4 h-4 text-amber-200" />
              <span>{t('ONLINE BILL CHECKER 2026', 'آن لائن بجلی و گیس بل چیکر')}</span>
            </Link>
            <Link
              href="/tracker"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-sans font-semibold text-xs border border-slate-700 hover:border-slate-600 transition flex items-center justify-center gap-2 min-h-[42px] hover:scale-[1.01] active:scale-[0.99]"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t('UNIFIED APPLICATION TRACKER', 'درخواست ٹریکنگ پورٹل')}</span>
            </Link>
          </div>

          {/* Trending Guides Row */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-sans text-slate-300">
            <span className="text-doc-brass font-semibold">{t('TRENDING:', 'مشہور سروسز:')}</span>
            <Link href="/nadra/cnic-kaise-banaye" className="hover:text-white transition underline underline-offset-2">
              CNIC Smart Card
            </Link>
            <span>•</span>
            <Link href="/tax/fbr-filer-status-check-cnic" className="hover:text-white transition underline underline-offset-2">
              FBR Filer Status
            </Link>
            <span>•</span>
            <Link href="/hajj-umrah/hajj-balloting-result-check-online" className="hover:text-white transition underline underline-offset-2">
              Hajj Balloting
            </Link>
            <span>•</span>
            <Link href="/health/sehat-card-eligibility-check-by-cnic" className="hover:text-white transition underline underline-offset-2">
              Sehat Card
            </Link>
            <span>•</span>
            <Link href="/property/property-mutation-check-by-cnic" className="hover:text-white transition underline underline-offset-2">
              Property Mutation
            </Link>
          </div>

        </motion.div>

        {/* ── RIGHT COLUMN: Custom Vector Illustration (CNIC, Passport, Document) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex items-center justify-center"
        >
          <CivicServicesIllustration className="max-w-[440px] sm:max-w-[480px] lg:max-w-none" />
        </motion.div>

      </div>
    </section>
  );
};
