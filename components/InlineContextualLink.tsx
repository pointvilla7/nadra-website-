'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { Article, ARTICLES } from '@/lib/data/articles';
import { useLanguage } from '@/lib/context/LanguageContext';

interface InlineContextualLinkProps {
  currentArticle?: Article;
  targetSlug?: string;
  customLabelEn?: string;
  customLabelUr?: string;
  customNoteEn?: string;
  customNoteUr?: string;
  className?: string;
}

// Intelligent contextual pairing map for inline callouts
const CONTEXTUAL_PAIRS: Record<string, { slug: string; noteEn: string; noteUr: string; labelEn: string; labelUr: string }> = {
  // Police & Verification
  'police-character-certificate-tracking-status-2026': {
    slug: 'police-character-certificate-online-apply-2026',
    labelEn: 'Online Application Guide',
    labelUr: 'آن لائن درخواست گائیڈ',
    noteEn: 'Applying for the first time? See the complete PKM & PRVS document requirements and fee breakdown.',
    noteUr: 'پہلی بار درخواست دے رہے ہیں؟ ضروری کاغذات اور فیس کی مکمل تفصیلات دیکھیں۔',
  },
  'police-character-certificate-online-apply-2026': {
    slug: 'police-character-certificate-tracking-status-2026',
    labelEn: 'Live Status Tracker',
    labelUr: 'لائیو ٹریکنگ سٹیٹس',
    noteEn: 'Already submitted? Track your criminal record clearance and counter collection status.',
    noteUr: 'درخواست جمع کروا چکے ہیں؟ پولیس کلیئرنس اور سرٹیفکیٹ کا لائیو سٹیٹس چیک کریں۔',
  },
  'how-to-check-fir-status-online': {
    slug: 'police-character-certificate-tracking-status-2026',
    labelEn: 'Police Clearance Tracking',
    labelUr: 'پولیس کلیئرنس ٹریکنگ',
    noteEn: 'Need an official police character certificate for visa or job? Check online verification rules.',
    noteUr: 'ویزہ یا نوکری کے لیے پولیس کریکٹر سرٹیفکیٹ درکار ہے؟ آن لائن تصدیق کے قواعد دیکھیں۔',
  },

  // NADRA & CNIC
  'cnic-vs-nicop-vs-poc-comparison': {
    slug: 'cnic-kaise-banaye',
    labelEn: 'CNIC Online Application',
    labelUr: 'شناختی کارڈ آن لائن طریقہ',
    noteEn: 'Need to apply or renew your Smart CNIC? See step-by-step Pak-ID procedures.',
    noteUr: 'سمارٹ شناختی کارڈ بنوانے یا تجدید کا مکمل اور آسان طریقہ دیکھیں۔',
  },
  'cnic-kaise-banaye': {
    slug: 'cnic-new-rules-2026',
    labelEn: 'NADRA New Rules 2026',
    labelUr: 'نادرا نئے قواعد 2026',
    noteEn: 'Check 2026 policy updates on family tree verification, biometric rules, and fee structures.',
    noteUr: 'بائیو میٹرک، فیملی ٹری اور نادرا فیس کے سال 2026 کے نئے سرکاری قواعد دیکھیں۔',
  },

  // Vehicles & Excise
  'kpk-excise-vehicle-verification': {
    slug: 'token-tax-calculator-2026',
    labelEn: 'Vehicle Token Tax Calculator',
    labelUr: 'ٹوکن ٹیکس کیلکولیٹر',
    noteEn: 'Calculate exact annual motor vehicle token tax and filer vs non-filer withholding rates.',
    noteUr: 'گاڑی کے انجن پاور اور فائلر / نان فائلر کے لحاظ سے سالانہ ٹوکن ٹیکس کا حساب کریں۔',
  },

  // Bills & Utilities
  'wssp-peshawar-water-bill-guide': {
    slug: 'utility-bill-checker-2026',
    labelEn: 'Universal Bill Checker',
    labelUr: 'یوٹیلیٹی بل چیکر',
    noteEn: 'Check duplicate electricity, sui gas, and water bills across all distribution companies.',
    noteUr: 'تمام کمپنیوں کے بجلی، گیس اور پانی کے ڈپلیکیٹ بل ایک کلک میں چیک کریں۔',
  },

  // Health & Sehat Card
  'sehat-card-eligibility-check-by-cnic': {
    slug: 'sehat-card-active-status-by-province-2026',
    labelEn: 'Provincial Sehat Card Status',
    labelUr: 'صوبائی صحت کارڈ سٹیٹس',
    noteEn: 'Check hospital admission limits, free emergency packages, and panel hospitals by province.',
    noteUr: 'صوبہ وار پینل ہسپتالوں کی فہرست، فری ایمرجنسی پیکیج اور علاج کی حد دیکھیں۔',
  },

  // Passport
  'fee-2026': {
    slug: 'passport-new-rules-2026-cashless-epassport',
    labelEn: 'e-Passport & Cashless Rules',
    labelUr: 'ای پاسپورٹ اور کیش لیس قواعد',
    noteEn: 'Learn about mandatory 1Bill digital fee payment and chip-embedded e-Passport requirements.',
    noteUr: 'ڈیجیٹل فیس ادائیگی کے طریقہ کار اور چپ والے ای پاسپورٹ کے نئے قواعد دیکھیں۔',
  },

  // Tax
  'fbr-filer-status-check-cnic': {
    slug: 'income-tax-calculator-salaried-2026',
    labelEn: 'Income Tax Calculator 2026',
    labelUr: 'انکم ٹیکس کیلکولیٹر 2026',
    noteEn: 'Calculate monthly and annual salaried tax deductions under the latest Finance Act slabs.',
    noteUr: 'تنخواہ پر ماہانہ اور سالانہ انکم ٹیکس کٹوتی کا فوری اور درست حساب کریں۔',
  },
};

export const InlineContextualLink: React.FC<InlineContextualLinkProps> = ({
  currentArticle,
  targetSlug,
  customLabelEn,
  customLabelUr,
  customNoteEn,
  customNoteUr,
  className = '',
}) => {
  const { t } = useLanguage();

  const slug = currentArticle?.slug || '';
  const pairInfo = targetSlug
    ? {
        slug: targetSlug,
        labelEn: customLabelEn || 'Related Guide',
        labelUr: customLabelUr || 'متعلقہ گائیڈ',
        noteEn: customNoteEn || 'Explore the verified companion guide for this process.',
        noteUr: customNoteUr || 'اس کارروائی کے لیے مکمل معلوماتی گائیڈ دیکھیں۔',
      }
    : CONTEXTUAL_PAIRS[slug];

  if (!pairInfo) return null;

  const targetArticle = ARTICLES[pairInfo.slug];
  const targetUrl = targetArticle ? targetArticle.fullPath : `/${pairInfo.slug}`;
  const targetTitle = targetArticle ? t(targetArticle.titleEn, targetArticle.titleUr) : pairInfo.labelEn;

  return (
    <aside
      aria-label={t('Related Civic Tool', 'متعلقہ سرکاری سروس')}
      className={`my-6 p-4 sm:p-5 rounded-2xl border-2 border-doc-brass/50 bg-gradient-to-r from-amber-500/10 via-doc-paper to-white dark:from-amber-950/30 dark:via-doc-dark-card dark:to-slate-900 shadow-sm transition hover:border-doc-brass hover:shadow-md ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-doc-brass/25 text-doc-ink dark:text-amber-300 font-mono text-[10px] font-extrabold uppercase border border-doc-brass/40">
              <Zap className="w-3 h-3 text-doc-brass animate-pulse" />
              <span>{t('YOU MIGHT ALSO NEED', 'ضروری متعلقہ سروس')}</span>
            </span>
            <span className="text-xs font-serif font-bold text-doc-seal dark:text-red-400">
              {t(pairInfo.labelEn, pairInfo.labelUr)}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-sans leading-relaxed">
            {t(pairInfo.noteEn, pairInfo.noteUr)}
          </p>
        </div>

        <Link
          href={targetUrl}
          className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 rounded-xl bg-doc-ink text-white dark:bg-doc-brass dark:text-doc-ink font-mono text-xs font-bold hover:bg-doc-seal dark:hover:bg-amber-400 transition shadow-xs shrink-0 self-start sm:self-auto active:scale-[0.98]"
        >
          <span>{t('Open Guide', 'گائیڈ دیکھیں')}</span>
          <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
        </Link>
      </div>
    </aside>
  );
};
