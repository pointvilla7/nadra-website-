'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calculator, Globe, Clock, ArrowRight, ShieldCheck, ExternalLink, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

/**
 * NADRA NICOP Official 2026 Fee Structure
 * 
 * OFFICIAL ZONE CLASSIFICATION NOTE:
 * According to NADRA's published rate card and Pak-ID portal (id.nadra.gov.pk):
 * - Zone A: High-income / Western countries (USA, UK, Canada, European Union, Australia, New Zealand, Norway, Japan, etc.)
 * - Zone B: Middle East, GCC nations (Saudi Arabia, UAE, Qatar, Oman, Kuwait, Bahrain), and all other countries.
 * A third zone ("Zone C") does NOT officially exist in NADRA's published schedule for NICOP / Smart NICOP.
 * Therefore, this calculator officially models Zone A and Zone B as specified by NADRA regulations.
 */

export type NicopZone = 'zoneA' | 'zoneB';
export type NicopSpeed = 'normal' | 'urgent' | 'executive';

export interface FeeDetail {
  amount: number;
  currency: string;
  timelineEn: string;
  timelineUr: string;
  timelineRoman: string;
}

export const NICOP_FEE_RATES: Record<NicopZone, {
  nameEn: string;
  nameUr: string;
  nameRoman: string;
  countriesEn: string;
  countriesUr: string;
  speeds: Record<NicopSpeed, FeeDetail>;
}> = {
  zoneA: {
    nameEn: 'Zone A (USA, UK, Canada, Europe, Australia)',
    nameUr: 'زون A (امریکہ، برطانیہ، کینیڈا، یورپ، آسٹریلیا)',
    nameRoman: 'Zone A (USA, UK, Canada, Europe, Australia)',
    countriesEn: 'USA, UK, Canada, EU / Schengen, Australia, New Zealand, Japan & Western nations',
    countriesUr: 'امریکہ، برطانیہ، کینیڈا، یورپ، آسٹریلیا اور نیوزی لینڈ',
    speeds: {
      normal: {
        amount: 39,
        currency: 'USD',
        timelineEn: '30–45 Working Days',
        timelineUr: '30 تا 45 کام کے دن',
        timelineRoman: '30–45 Working Days',
      },
      urgent: {
        amount: 59,
        currency: 'USD',
        timelineEn: '15–20 Working Days',
        timelineUr: '15 تا 20 کام کے دن',
        timelineRoman: '15–20 Working Days',
      },
      executive: {
        amount: 79,
        currency: 'USD',
        timelineEn: '7–10 Working Days',
        timelineUr: '7 تا 10 کام کے دن',
        timelineRoman: '7–10 Working Days',
      },
    },
  },
  zoneB: {
    nameEn: 'Zone B (Middle East, GCC, Asia & Other Countries)',
    nameUr: 'زون B (سعودی عرب، متحدہ عرب امارات، گلف و دیگر ممالک)',
    nameRoman: 'Zone B (Middle East, GCC, Asia & Other Countries)',
    countriesEn: 'Saudi Arabia, UAE, Qatar, Oman, Kuwait, Bahrain, Malaysia & remaining countries',
    countriesUr: 'سعودی عرب، دبئی، شارجہ، قطر، عمان، بحرین، کویت اور دیگر ممالک',
    speeds: {
      normal: {
        amount: 20,
        currency: 'USD',
        timelineEn: '30–45 Working Days',
        timelineUr: '30 تا 45 کام کے دن',
        timelineRoman: '30–45 Working Days',
      },
      urgent: {
        amount: 39,
        currency: 'USD',
        timelineEn: '15–20 Working Days',
        timelineUr: '15 تا 20 کام کے دن',
        timelineRoman: '15–20 Working Days',
      },
      executive: {
        amount: 59,
        currency: 'USD',
        timelineEn: '7–10 Working Days',
        timelineUr: '7 تا 10 کام کے دن',
        timelineRoman: '7–10 Working Days',
      },
    },
  },
};

interface NicopFeeCalculatorProps {
  compact?: boolean;
  className?: string;
  hideHeader?: boolean;
}

export const NicopFeeCalculator: React.FC<NicopFeeCalculatorProps> = ({
  compact = false,
  className = '',
  hideHeader = false,
}) => {
  const { t } = useLanguage();

  const [zone, setZone] = useState<NicopZone>('zoneA');
  const [speed, setSpeed] = useState<NicopSpeed>('normal');

  const currentZoneData = NICOP_FEE_RATES[zone];
  const currentSpeedData = currentZoneData.speeds[speed];

  return (
    <div
      className={`w-full max-w-[500px] mx-auto rounded-2xl doc-card border-2 border-doc-brass/40 shadow-xl overflow-hidden bg-white dark:bg-doc-dark-card text-doc-ink dark:text-slate-100 transition-all ${className}`}
    >
      {/* Header Banner - Dark Navy Verified Document Header */}
      {!hideHeader && (
        <div className="bg-doc-ink text-white p-5 sm:p-6 border-b-2 border-doc-brass/40 relative overflow-hidden">
          {/* Subtle Watermark */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-48 h-48 bg-doc-brass/10 rounded-full blur-2xl pointer-events-none"
          />

          <div className="flex items-center justify-between gap-2 mb-2">
            <InteractiveToolBadge labelEn="INTERACTIVE CALCULATOR" labelUr="انٹرایکٹو کیلکولیٹر" variant="gold" />
            <span className="text-[11px] font-mono font-bold text-doc-brass uppercase tracking-wider">
              NADRA 2026 RATES
            </span>
          </div>

          <div className="flex items-start gap-3 mt-3">
            <div className="p-2.5 rounded-xl bg-doc-brass/20 text-doc-brass border border-doc-brass/40 shrink-0">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-tight">
                {t('NICOP Fee Calculator', 'نائیکوپ فیس کیلکولیٹر')}
              </h2>
              <p className="text-xs text-slate-300 mt-1 font-sans">
                {t(
                  'Instant fee check for Overseas Pakistani Cards (Smart NICOP)',
                  'سمندر پار پاکستانیوں کے لیے نائیکوپ فیس اور ڈیلیوری کا فوری حساب'
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Form Body */}
      <div className="p-5 sm:p-6 space-y-6">
        {/* STEP 1: Select Country Zone */}
        <div className="space-y-2.5">
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-doc-seal dark:text-red-400" />
              <span>{t('Step 1: Select Country Zone', 'مرحلہ 1: اپنا ملک / زون منتخب کریں')}</span>
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-sans normal-case">
              {zone === 'zoneA' ? 'Western / OECD' : 'GCC / Middle East'}
            </span>
          </label>

          <div
            role="radiogroup"
            aria-label={t('Country Zone Selection', 'زون کا انتخاب')}
            className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
          >
            {/* Zone A Button */}
            <button
              type="button"
              role="radio"
              aria-checked={zone === 'zoneA'}
              onClick={() => setZone('zoneA')}
              className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all min-h-[56px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal ${
                zone === 'zoneA'
                  ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                  : 'bg-doc-paper/60 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-serif font-bold text-sm">
                  {t('Zone A', 'زون A')}
                </span>
                <span
                  className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                    zone === 'zoneA'
                      ? 'border-doc-brass bg-doc-brass text-doc-ink font-bold'
                      : 'border-slate-400 dark:border-slate-600'
                  }`}
                >
                  {zone === 'zoneA' && '✓'}
                </span>
              </div>
              <span className="text-[11px] opacity-80 mt-1 line-clamp-1">
                {t('USA, UK, Canada, Europe, Australia', 'امریکہ، برطانیہ، یورپ، آسٹریلیا')}
              </span>
            </button>

            {/* Zone B Button */}
            <button
              type="button"
              role="radio"
              aria-checked={zone === 'zoneB'}
              onClick={() => setZone('zoneB')}
              className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all min-h-[56px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal ${
                zone === 'zoneB'
                  ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                  : 'bg-doc-paper/60 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-serif font-bold text-sm">
                  {t('Zone B', 'زون B')}
                </span>
                <span
                  className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                    zone === 'zoneB'
                      ? 'border-doc-brass bg-doc-brass text-doc-ink font-bold'
                      : 'border-slate-400 dark:border-slate-600'
                  }`}
                >
                  {zone === 'zoneB' && '✓'}
                </span>
              </div>
              <span className="text-[11px] opacity-80 mt-1 line-clamp-1">
                {t('Saudi, UAE, Qatar, GCC & others', 'سعودی عرب، امارات، گلف و دیگر')}
              </span>
            </button>
          </div>

          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
            <span className="font-semibold text-doc-seal dark:text-doc-brass">
              {t('Included Countries: ', 'شامل ممالک: ')}
            </span>
            {t(currentZoneData.countriesEn, currentZoneData.countriesUr)}
          </p>
        </div>

        {/* STEP 2: Select Processing Speed */}
        <div className="space-y-2.5">
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-doc-seal dark:text-red-400" />
              <span>{t('Step 2: Select Processing Speed', 'مرحلہ 2: پروسیسنگ کی رفتار منتخب کریں')}</span>
            </span>
          </label>

          <div
            role="radiogroup"
            aria-label={t('Processing Speed Selection', 'رفتار کا انتخاب')}
            className="grid grid-cols-3 gap-2"
          >
            {/* Normal Speed */}
            <button
              type="button"
              role="radio"
              aria-checked={speed === 'normal'}
              onClick={() => setSpeed('normal')}
              className={`py-3 px-2 rounded-xl border text-center flex flex-col items-center justify-center transition-all min-h-[54px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal ${
                speed === 'normal'
                  ? 'bg-doc-seal text-white border-doc-seal shadow-md'
                  : 'bg-doc-paper/60 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
              }`}
            >
              <span className="font-bold text-xs sm:text-sm">{t('Normal', 'نارمل')}</span>
              <span className="text-[10px] opacity-85 mt-0.5 font-mono">
                ${currentZoneData.speeds.normal.amount} USD
              </span>
            </button>

            {/* Urgent Speed */}
            <button
              type="button"
              role="radio"
              aria-checked={speed === 'urgent'}
              onClick={() => setSpeed('urgent')}
              className={`py-3 px-2 rounded-xl border text-center flex flex-col items-center justify-center transition-all min-h-[54px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal ${
                speed === 'urgent'
                  ? 'bg-doc-seal text-white border-doc-seal shadow-md'
                  : 'bg-doc-paper/60 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
              }`}
            >
              <span className="font-bold text-xs sm:text-sm">{t('Urgent', 'ارجنٹ')}</span>
              <span className="text-[10px] opacity-85 mt-0.5 font-mono">
                ${currentZoneData.speeds.urgent.amount} USD
              </span>
            </button>

            {/* Executive Speed */}
            <button
              type="button"
              role="radio"
              aria-checked={speed === 'executive'}
              onClick={() => setSpeed('executive')}
              className={`py-3 px-2 rounded-xl border text-center flex flex-col items-center justify-center transition-all min-h-[54px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal ${
                speed === 'executive'
                  ? 'bg-doc-seal text-white border-doc-seal shadow-md'
                  : 'bg-doc-paper/60 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
              }`}
            >
              <span className="font-bold text-xs sm:text-sm">{t('Executive', 'ایگزیکٹو')}</span>
              <span className="text-[10px] opacity-85 mt-0.5 font-mono">
                ${currentZoneData.speeds.executive.amount} USD
              </span>
            </button>
          </div>
        </div>

        {/* RESULT AREA — Instant Dynamic Display */}
        <div
          aria-live="polite"
          className="p-5 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/50 shadow-lg relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-32 h-32 bg-doc-brass/10 rounded-full blur-xl pointer-events-none"
          />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase text-doc-brass font-extrabold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {t('Calculated Payable Fee', 'واجب الادا سرکاری فیس')}
              </span>

              {/* Large Bold Fee */}
              <div className="text-4xl sm:text-5xl font-mono font-extrabold text-white mt-1 tracking-tight">
                ${currentSpeedData.amount}{' '}
                <span className="text-xl font-sans text-doc-brass font-bold">
                  {currentSpeedData.currency}
                </span>
              </div>

              {/* Processing Time */}
              <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-2 font-sans">
                <Clock className="w-4 h-4 text-doc-brass shrink-0" />
                <span>
                  {t('Estimated Processing Time:', 'اندازاً پروسیسنگ وقت:')}{' '}
                  <strong className="text-white font-semibold">
                    {t(currentSpeedData.timelineEn, currentSpeedData.timelineUr)}
                  </strong>
                </span>
              </p>
            </div>

            {/* Direct Official Apply Link */}
            <a
              href="https://id.nadra.gov.pk/e-nicop/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-doc-seal hover:bg-red-700 text-white font-mono font-bold text-xs flex items-center justify-center gap-2 transition shadow-md shrink-0 min-h-[44px]"
            >
              <span>{t('APPLY ON PAK-ID', 'پاک آئی ڈی پر اپلائی کریں')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* How to Apply Guide Link */}
        <div className="pt-1 text-center">
          <Link
            href="/nadra/nicop-apply-online"
            className="inline-flex items-center gap-1.5 text-xs font-serif font-bold text-doc-seal dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:underline transition py-1"
          >
            <span>{t('Need full step-by-step instructions? Read the NICOP Online Guide', 'نائیکوپ بنوانے اور تجدید کی مکمل گائیڈ پڑھیں')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Official One-Line Disclaimer */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-1.5 leading-relaxed font-sans">
          <AlertCircle className="w-4 h-4 text-doc-brass shrink-0 mt-0.5" />
          <p>
            {t(
              'Fees are indicative based on NADRA’s published rate card and may change — confirm final amount at id.nadra.gov.pk before payment.',
              'فیسیں نادرا کے شائع شدہ ریٹ کارڈ پر مبنی ہیں۔ فیس ادا کرنے سے پہلے id.nadra.gov.pk پر حتمی رقم کی تصدیق کریں۔'
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
