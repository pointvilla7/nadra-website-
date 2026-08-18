'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calculator,
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  Clock,
  User,
  Users,
  FileText,
  Sparkles,
  AlertCircle,
  ArrowRight,
  Info,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

export type ApplicantAge = 'adult' | 'minor';
export type PassportCategory = 'mrp36' | 'mrp72' | 'mrp100' | 'epassport36';
export type PassportValidity = 5 | 10;
export type DeliveryTier = 'normal' | 'urgent' | 'fasttrack';

interface PassportFeeCalculatorProps {
  compact?: boolean;
  className?: string;
  hideHeader?: boolean;
}

export const PassportFeeCalculator: React.FC<PassportFeeCalculatorProps> = ({
  compact = false,
  className = '',
  hideHeader = false,
}) => {
  const { t } = useLanguage();

  const [ageGroup, setAgeGroup] = useState<ApplicantAge>('adult');
  const [category, setCategory] = useState<PassportCategory>('mrp36');
  const [validity, setValidity] = useState<PassportValidity>(5);
  const [delivery, setDelivery] = useState<DeliveryTier>('normal');

  // If ageGroup is minor and validity was 10, auto-switch to 5
  const effectiveValidity: PassportValidity = ageGroup === 'minor' ? 5 : validity;

  // Rate Matrix from official 2026 DGIP Schedule
  const getCalculation = (): { fee: number; timelineEn: string; timelineUr: string } => {
    // e-Passport 36 Pages
    if (category === 'epassport36') {
      if (effectiveValidity === 5) {
        if (delivery === 'normal') return { fee: 9000, timelineEn: '15 Working Days', timelineUr: '15 کام کے دن' };
        if (delivery === 'urgent') return { fee: 15000, timelineEn: '7 Working Days', timelineUr: '7 کام کے دن' };
        return { fee: 20000, timelineEn: '2 Working Days (Fast Track)', timelineUr: '2 کام کے دن (فاسٹ ٹریک)' };
      } else {
        if (delivery === 'normal') return { fee: 13500, timelineEn: '15 Working Days', timelineUr: '15 کام کے دن' };
        if (delivery === 'urgent') return { fee: 22500, timelineEn: '7 Working Days', timelineUr: '7 کام کے دن' };
        return { fee: 27000, timelineEn: '2 Working Days (Fast Track)', timelineUr: '2 کام کے دن (فاسٹ ٹریک)' };
      }
    }

    // Standard MRP 36 Pages
    if (category === 'mrp36') {
      if (effectiveValidity === 5) {
        if (delivery === 'normal') return { fee: 4500, timelineEn: '21–30 Working Days', timelineUr: '21 تا 30 کام کے دن' };
        if (delivery === 'urgent') return { fee: 7500, timelineEn: '5–7 Working Days', timelineUr: '5 تا 7 کام کے دن' };
        return { fee: 12500, timelineEn: '2 Working Days (Fast Track)', timelineUr: '2 کام کے دن (فاسٹ ٹریک)' };
      } else {
        if (delivery === 'normal') return { fee: 6700, timelineEn: '21–30 Working Days', timelineUr: '21 تا 30 کام کے دن' };
        if (delivery === 'urgent') return { fee: 11200, timelineEn: '5–7 Working Days', timelineUr: '5 تا 7 کام کے دن' };
        return { fee: 16200, timelineEn: '2 Working Days (Fast Track)', timelineUr: '2 کام کے دن (فاسٹ ٹریک)' };
      }
    }

    // Standard MRP 72 Pages
    if (category === 'mrp72') {
      if (effectiveValidity === 5) {
        if (delivery === 'normal') return { fee: 8200, timelineEn: '21–30 Working Days', timelineUr: '21 تا 30 کام کے دن' };
        if (delivery === 'urgent') return { fee: 13500, timelineEn: '5–7 Working Days', timelineUr: '5 تا 7 کام کے دن' };
        return { fee: 18500, timelineEn: '2 Working Days (Fast Track)', timelineUr: '2 کام کے دن (فاسٹ ٹریک)' };
      } else {
        if (delivery === 'normal') return { fee: 12400, timelineEn: '21–30 Working Days', timelineUr: '21 تا 30 کام کے دن' };
        if (delivery === 'urgent') return { fee: 20200, timelineEn: '5–7 Working Days', timelineUr: '5 تا 7 کام کے دن' };
        return { fee: 25200, timelineEn: '2 Working Days (Fast Track)', timelineUr: '2 کام کے دن (فاسٹ ٹریک)' };
      }
    }

    // Standard MRP 100 Pages
    if (effectiveValidity === 5) {
      if (delivery === 'normal') return { fee: 9000, timelineEn: '21–30 Working Days', timelineUr: '21 تا 30 کام کے دن' };
      if (delivery === 'urgent') return { fee: 18000, timelineEn: '5–7 Working Days', timelineUr: '5 تا 7 کام کے دن' };
      return { fee: 23000, timelineEn: '2 Working Days (Fast Track)', timelineUr: '2 کام کے دن (فاسٹ ٹریک)' };
    } else {
      if (delivery === 'normal') return { fee: 13500, timelineEn: '21–30 Working Days', timelineUr: '21 تا 30 کام کے دن' };
      if (delivery === 'urgent') return { fee: 27000, timelineEn: '5–7 Working Days', timelineUr: '5 تا 7 کام کے دن' };
      return { fee: 32000, timelineEn: '2 Working Days (Fast Track)', timelineUr: '2 کام کے دن (فاسٹ ٹریک)' };
    }
  };

  const { fee, timelineEn, timelineUr } = getCalculation();

  return (
    <div
      className={`w-full max-w-[520px] mx-auto rounded-2xl doc-card border-2 border-doc-brass/40 shadow-xl overflow-hidden bg-white dark:bg-doc-dark-card text-doc-ink dark:text-slate-100 transition-all ${className}`}
    >
      {/* Header Banner */}
      {!hideHeader && (
        <div className="bg-doc-ink text-white p-5 sm:p-6 border-b-2 border-doc-brass/40 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-48 h-48 bg-doc-brass/10 rounded-full blur-2xl pointer-events-none"
          />

          <div className="flex items-center justify-between gap-2 mb-2">
            <InteractiveToolBadge labelEn="INTERACTIVE CALCULATOR" labelUr="آن لائن کیلکولیٹر" variant="gold" />
            <span className="text-[11px] font-mono font-bold text-doc-brass uppercase tracking-wider">
              DGIP 2026 RATES
            </span>
          </div>

          <div className="flex items-start gap-3 mt-3">
            <div className="p-2.5 rounded-xl bg-doc-brass/20 text-doc-brass border border-doc-brass/40 shrink-0">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-tight">
                {t('Pakistan Passport Fee Calculator', 'پاکستان پاسپورٹ فیس کیلکولیٹر')}
              </h2>
              <p className="text-xs text-slate-300 mt-1 font-sans">
                {t(
                  'Calculate exact fee for MRP, e-Passport, minors & adults with delivery timelines',
                  'عام پاسپورٹ، ای پاسپورٹ، بچوں اور بڑوں کے لیے فیس کا فوری اور خودکار حساب'
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Form Body */}
      <div className="p-5 sm:p-6 space-y-6">
        {/* STEP 1: Age Category */}
        <div className="space-y-2.5">
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-doc-seal dark:text-red-400" />
              <span>{t('Step 1: Applicant Age Category', 'مرحلہ 1: سائل کی عمر کی کیٹیگری')}</span>
            </span>
          </label>

          <div
            role="radiogroup"
            aria-label={t('Applicant Age Category', 'عمر کی کیٹیگری')}
            className="grid grid-cols-2 gap-2.5"
          >
            <button
              type="button"
              role="radio"
              aria-checked={ageGroup === 'adult'}
              onClick={() => setAgeGroup('adult')}
              className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all min-h-[50px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal ${
                ageGroup === 'adult'
                  ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                  : 'bg-doc-paper/60 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
              }`}
            >
              <div>
                <span className="font-serif font-bold text-sm block">
                  {t('Adult (18+)', 'بالغ شہری (18+)')}
                </span>
                <span className="text-[10px] opacity-80">
                  {t('5 or 10 Year Validity', '5 یا 10 سال میعاد')}
                </span>
              </div>
              <span
                className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                  ageGroup === 'adult'
                    ? 'border-doc-brass bg-doc-brass text-doc-ink font-bold'
                    : 'border-slate-400 dark:border-slate-600'
                }`}
              >
                {ageGroup === 'adult' && '✓'}
              </span>
            </button>

            <button
              type="button"
              role="radio"
              aria-checked={ageGroup === 'minor'}
              onClick={() => {
                setAgeGroup('minor');
                setValidity(5);
              }}
              className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all min-h-[50px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal ${
                ageGroup === 'minor'
                  ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                  : 'bg-doc-paper/60 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
              }`}
            >
              <div>
                <span className="font-serif font-bold text-sm block">
                  {t('Minor (Under 18)', 'نابالغ بچہ (18 سال سے کم)')}
                </span>
                <span className="text-[10px] opacity-80">
                  {t('5 Year Validity Only', 'صرف 5 سال میعاد')}
                </span>
              </div>
              <span
                className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                  ageGroup === 'minor'
                    ? 'border-doc-brass bg-doc-brass text-doc-ink font-bold'
                    : 'border-slate-400 dark:border-slate-600'
                }`}
              >
                {ageGroup === 'minor' && '✓'}
              </span>
            </button>
          </div>
        </div>

        {/* STEP 2: Booklet Size & Type */}
        <div className="space-y-2.5">
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-doc-seal dark:text-red-400" />
              <span>{t('Step 2: Booklet Type & Pages', 'مرحلہ 2: پاسپورٹ کی قسم و صفحات')}</span>
            </span>
          </label>

          <div
            role="radiogroup"
            aria-label={t('Passport Category', 'پاسپورٹ کی قسم')}
            className="grid grid-cols-2 sm:grid-cols-4 gap-2"
          >
            <button
              type="button"
              role="radio"
              aria-checked={category === 'mrp36'}
              onClick={() => setCategory('mrp36')}
              className={`p-2.5 rounded-xl border text-center flex flex-col items-center justify-center transition-all min-h-[54px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal ${
                category === 'mrp36'
                  ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                  : 'bg-doc-paper/60 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
              }`}
            >
              <span className="font-bold text-xs sm:text-sm">36 Pages</span>
              <span className="text-[10px] opacity-80 mt-0.5">Standard MRP</span>
            </button>

            <button
              type="button"
              role="radio"
              aria-checked={category === 'mrp72'}
              onClick={() => setCategory('mrp72')}
              className={`p-2.5 rounded-xl border text-center flex flex-col items-center justify-center transition-all min-h-[54px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal ${
                category === 'mrp72'
                  ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                  : 'bg-doc-paper/60 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
              }`}
            >
              <span className="font-bold text-xs sm:text-sm">72 Pages</span>
              <span className="text-[10px] opacity-80 mt-0.5">Frequent</span>
            </button>

            <button
              type="button"
              role="radio"
              aria-checked={category === 'mrp100'}
              onClick={() => setCategory('mrp100')}
              className={`p-2.5 rounded-xl border text-center flex flex-col items-center justify-center transition-all min-h-[54px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal ${
                category === 'mrp100'
                  ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                  : 'bg-doc-paper/60 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
              }`}
            >
              <span className="font-bold text-xs sm:text-sm">100 Pages</span>
              <span className="text-[10px] opacity-80 mt-0.5">Jumbo MRP</span>
            </button>

            <button
              type="button"
              role="radio"
              aria-checked={category === 'epassport36'}
              onClick={() => setCategory('epassport36')}
              className={`p-2.5 rounded-xl border text-center flex flex-col items-center justify-center transition-all min-h-[54px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal ${
                category === 'epassport36'
                  ? 'bg-doc-seal text-white border-doc-seal shadow-md'
                  : 'bg-doc-paper/60 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
              }`}
            >
              <span className="font-bold text-xs sm:text-sm">e-Passport</span>
              <span className="text-[10px] opacity-80 mt-0.5">Chip 36 Pgs</span>
            </button>
          </div>
        </div>

        {/* STEP 3: Validity */}
        <div className="space-y-2.5">
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-doc-seal dark:text-red-400" />
              <span>{t('Step 3: Validity Period', 'مرحلہ 3: میعاد کی مدت')}</span>
            </span>
            {ageGroup === 'minor' && (
              <span className="text-[10px] text-amber-700 dark:text-amber-300 font-sans font-semibold">
                {t('10-Year disabled for minors', 'بچوں کے لیے 10 سالہ میعاد ممنوع ہے')}
              </span>
            )}
          </label>

          <div
            role="radiogroup"
            aria-label={t('Validity Period', 'میعاد کی مدت')}
            className="grid grid-cols-2 gap-2.5"
          >
            <button
              type="button"
              role="radio"
              aria-checked={effectiveValidity === 5}
              onClick={() => setValidity(5)}
              className={`py-3 px-4 rounded-xl border text-center transition-all min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal ${
                effectiveValidity === 5
                  ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                  : 'bg-doc-paper/60 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
              }`}
            >
              <span className="font-serif font-bold text-sm">{t('5 Years Validity', '5 سال میعاد')}</span>
            </button>

            <button
              type="button"
              role="radio"
              disabled={ageGroup === 'minor'}
              aria-checked={effectiveValidity === 10}
              onClick={() => setValidity(10)}
              className={`py-3 px-4 rounded-xl border text-center transition-all min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal ${
                ageGroup === 'minor'
                  ? 'opacity-40 cursor-not-allowed bg-slate-100 dark:bg-slate-800/40 border-dashed border-slate-300 dark:border-slate-700 text-slate-400'
                  : effectiveValidity === 10
                  ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                  : 'bg-doc-paper/60 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
              }`}
            >
              <span className="font-serif font-bold text-sm">{t('10 Years Validity', '10 سال میعاد')}</span>
            </button>
          </div>

          {ageGroup === 'minor' && (
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
              <Info className="w-3.5 h-3.5 inline mr-1 text-doc-brass" />
              {t(
                'DGIP regulations strictly restrict children under 18 to 5-year passports due to facial appearance changes.',
                'حکومتی پالیسی کے مطابق 18 سال سے کم عمر بچوں کو چہرے کی تبدیلی کی وجہ سے صرف 5 سالہ پاسپورٹ جاری ہوتا ہے۔'
              )}
            </p>
          )}
        </div>

        {/* STEP 4: Delivery Tier */}
        <div className="space-y-2.5">
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-doc-seal dark:text-red-400" />
              <span>{t('Step 4: Delivery Urgency Tier', 'مرحلہ 4: ڈیلیوری کی رفتار')}</span>
            </span>
          </label>

          <div
            role="radiogroup"
            aria-label={t('Delivery Tier', 'ڈیلیوری کی رفتار')}
            className="grid grid-cols-3 gap-2"
          >
            <button
              type="button"
              role="radio"
              aria-checked={delivery === 'normal'}
              onClick={() => setDelivery('normal')}
              className={`py-3 px-2 rounded-xl border text-center flex flex-col items-center justify-center transition-all min-h-[54px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal ${
                delivery === 'normal'
                  ? 'bg-doc-seal text-white border-doc-seal shadow-md'
                  : 'bg-doc-paper/60 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
              }`}
            >
              <span className="font-bold text-xs sm:text-sm">{t('Normal', 'نارمل')}</span>
              <span className="text-[10px] opacity-85 mt-0.5 font-mono">21–30 Days</span>
            </button>

            <button
              type="button"
              role="radio"
              aria-checked={delivery === 'urgent'}
              onClick={() => setDelivery('urgent')}
              className={`py-3 px-2 rounded-xl border text-center flex flex-col items-center justify-center transition-all min-h-[54px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal ${
                delivery === 'urgent'
                  ? 'bg-doc-seal text-white border-doc-seal shadow-md'
                  : 'bg-doc-paper/60 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
              }`}
            >
              <span className="font-bold text-xs sm:text-sm">{t('Urgent', 'ارجنٹ')}</span>
              <span className="text-[10px] opacity-85 mt-0.5 font-mono">5–7 Days</span>
            </button>

            <button
              type="button"
              role="radio"
              aria-checked={delivery === 'fasttrack'}
              onClick={() => setDelivery('fasttrack')}
              className={`py-3 px-2 rounded-xl border text-center flex flex-col items-center justify-center transition-all min-h-[54px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal ${
                delivery === 'fasttrack'
                  ? 'bg-doc-seal text-white border-doc-seal shadow-md'
                  : 'bg-doc-paper/60 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
              }`}
            >
              <span className="font-bold text-xs sm:text-sm">{t('Fast Track', 'فاسٹ ٹریک')}</span>
              <span className="text-[10px] opacity-85 mt-0.5 font-mono">2 Days</span>
            </button>
          </div>
        </div>

        {/* RESULT AREA — Instant Dynamic Calculation */}
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
                {t('Payable Official Fee', 'کل سرکاری فیس')}
              </span>

              {/* Large Bold Fee */}
              <div className="text-3xl sm:text-4xl font-mono font-extrabold text-white mt-1 tracking-tight">
                PKR {fee.toLocaleString()}
              </div>

              {/* Processing Time */}
              <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-2 font-sans">
                <Clock className="w-4 h-4 text-doc-brass shrink-0" />
                <span>
                  {t('Estimated Processing Timeline:', 'اندازاً ڈلیوری کا وقت:')}{' '}
                  <strong className="text-white font-semibold">{t(timelineEn, timelineUr)}</strong>
                </span>
              </p>
            </div>

            {/* Direct Official Link */}
            <a
              href="https://fee.dgip.gov.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-doc-seal hover:bg-red-700 text-white font-mono font-bold text-xs flex items-center justify-center gap-2 transition shadow-md shrink-0 min-h-[44px]"
            >
              <span>{t('GENERATE PSID', 'آن لائن چالان بنائیں')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* How to Apply / Full Rate Card Link */}
        <div className="pt-1 text-center">
          <Link
            href="/passport/fee-2026"
            className="inline-flex items-center gap-1.5 text-xs font-serif font-bold text-doc-seal dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:underline transition py-1"
          >
            <span>{t('View complete 2026 Passport Fee Tables & Payment Methods', 'مکمل پاسپورٹ فیس چارٹ اور بینکنگ طریقے دیکھیں')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Official One-Line Disclaimer */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-1.5 leading-relaxed font-sans">
          <AlertCircle className="w-4 h-4 text-doc-brass shrink-0 mt-0.5" />
          <p>
            {t(
              'Fees are based on DGIP’s published rate card and may change — confirm at tracking.dgip.gov.pk before payment.',
              'فیسیں ڈائریکٹوریٹ جنرل آف پاسپورٹس کے شائع کردہ ریٹ کارڈ پر مبنی ہیں۔ ادائیگی سے پہلے tracking.dgip.gov.pk پر تصدیق کریں۔'
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
