'use client';

import React, { useState } from 'react';
import {
  Calculator,
  ShieldCheck,
  Share2,
  Check,
  Clock,
  ExternalLink,
  CreditCard,
  Building2,
  FileCheck2,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export type DocCategory = 'cnic' | 'nicop_a' | 'nicop_b' | 'frc' | 'mrp_36' | 'epassport_36';
export type ProcessingTier = 'normal' | 'urgent' | 'executive';

interface FeeResult {
  feePkr: number | string;
  feeUsd?: number;
  deliveryDays: string;
  deliveryDaysUr: string;
  sourceAuthority: string;
  portalUrl: string;
}

export const CivicDocumentFeeCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [docType, setDocType] = useState<DocCategory>('cnic');
  const [tier, setTier] = useState<ProcessingTier>('normal');
  const [copied, setCopied] = useState(false);

  const calculateFee = (): FeeResult => {
    switch (docType) {
      case 'cnic':
        if (tier === 'normal')
          return {
            feePkr: 750,
            deliveryDays: '15 Working Days',
            deliveryDaysUr: '15 کام کے دن',
            sourceAuthority: 'NADRA Gazette Notification',
            portalUrl: 'https://id.nadra.gov.pk/',
          };
        if (tier === 'urgent')
          return {
            feePkr: 1500,
            deliveryDays: '7 Working Days',
            deliveryDaysUr: '7 کام کے دن',
            sourceAuthority: 'NADRA Gazette Notification',
            portalUrl: 'https://id.nadra.gov.pk/',
          };
        return {
          feePkr: 2500,
          deliveryDays: '2–3 Working Days (Executive)',
          deliveryDaysUr: '2 تا 3 کام کے دن (ایگزیکٹو)',
          sourceAuthority: 'NADRA Gazette Notification',
          portalUrl: 'https://id.nadra.gov.pk/',
        };

      case 'nicop_a':
        if (tier === 'normal')
          return {
            feePkr: 'USD $39 (~PKR 10,900)',
            feeUsd: 39,
            deliveryDays: '15 Working Days',
            deliveryDaysUr: '15 کام کے دن',
            sourceAuthority: 'NADRA Pak-ID Zone A Matrix',
            portalUrl: 'https://id.nadra.gov.pk/',
          };
        if (tier === 'urgent')
          return {
            feePkr: 'USD $57 (~PKR 15,900)',
            feeUsd: 57,
            deliveryDays: '7 Working Days',
            deliveryDaysUr: '7 کام کے دن',
            sourceAuthority: 'NADRA Pak-ID Zone A Matrix',
            portalUrl: 'https://id.nadra.gov.pk/',
          };
        return {
          feePkr: 'USD $75 (~PKR 21,000)',
          feeUsd: 75,
          deliveryDays: '3 Working Days (Executive)',
          deliveryDaysUr: '3 کام کے دن (ایگزیکٹو)',
          sourceAuthority: 'NADRA Pak-ID Zone A Matrix',
          portalUrl: 'https://id.nadra.gov.pk/',
        };

      case 'nicop_b':
        if (tier === 'normal')
          return {
            feePkr: 'USD $20 (~PKR 5,600)',
            feeUsd: 20,
            deliveryDays: '15 Working Days',
            deliveryDaysUr: '15 کام کے دن',
            sourceAuthority: 'NADRA Pak-ID Zone B Matrix',
            portalUrl: 'https://id.nadra.gov.pk/',
          };
        if (tier === 'urgent')
          return {
            feePkr: 'USD $30 (~PKR 8,400)',
            feeUsd: 30,
            deliveryDays: '7 Working Days',
            deliveryDaysUr: '7 کام کے دن',
            sourceAuthority: 'NADRA Pak-ID Zone B Matrix',
            portalUrl: 'https://id.nadra.gov.pk/',
          };
        return {
          feePkr: 'USD $40 (~PKR 11,200)',
          feeUsd: 40,
          deliveryDays: '3 Working Days (Executive)',
          deliveryDaysUr: '3 کام کے دن (ایگزیکٹو)',
          sourceAuthority: 'NADRA Pak-ID Zone B Matrix',
          portalUrl: 'https://id.nadra.gov.pk/',
        };

      case 'frc':
        return {
          feePkr: 1000,
          deliveryDays: 'Instant / Same Day',
          deliveryDaysUr: 'فوری / اسی وقت جاری',
          sourceAuthority: 'NADRA NRC Schedule',
          portalUrl: 'https://id.nadra.gov.pk/',
        };

      case 'mrp_36':
        if (tier === 'normal')
          return {
            feePkr: 4500,
            deliveryDays: '21–30 Working Days',
            deliveryDaysUr: '21 تا 30 کام کے دن',
            sourceAuthority: 'DGIP Official Fee Schedule 2026',
            portalUrl: 'https://onlinemrp.dgip.gov.pk/',
          };
        if (tier === 'urgent')
          return {
            feePkr: 7500,
            deliveryDays: '5–7 Working Days',
            deliveryDaysUr: '5 تا 7 کام کے دن',
            sourceAuthority: 'DGIP Official Fee Schedule 2026',
            portalUrl: 'https://onlinemrp.dgip.gov.pk/',
          };
        return {
          feePkr: 12500,
          deliveryDays: '2 Working Days (Fast Track)',
          deliveryDaysUr: '2 کام کے دن (فاسٹ ٹریک)',
          sourceAuthority: 'DGIP Official Fee Schedule 2026',
          portalUrl: 'https://onlinemrp.dgip.gov.pk/',
        };

      case 'epassport_36':
        if (tier === 'normal')
          return {
            feePkr: 9000,
            deliveryDays: '15 Working Days',
            deliveryDaysUr: '15 کام کے دن',
            sourceAuthority: 'DGIP Cashless e-Passport 2026',
            portalUrl: 'https://onlinemrp.dgip.gov.pk/',
          };
        if (tier === 'urgent')
          return {
            feePkr: 15000,
            deliveryDays: '7 Working Days',
            deliveryDaysUr: '7 کام کے دن',
            sourceAuthority: 'DGIP Cashless e-Passport 2026',
            portalUrl: 'https://onlinemrp.dgip.gov.pk/',
          };
        return {
          feePkr: 20000,
          deliveryDays: '2 Working Days (Executive Fast Track)',
          deliveryDaysUr: '2 کام کے دن (ایگزیکٹو فاسٹ ٹریک)',
          sourceAuthority: 'DGIP Cashless e-Passport 2026',
          portalUrl: 'https://onlinemrp.dgip.gov.pk/',
        };
    }
  };

  const result = calculateFee();

  const handleShare = () => {
    const text = `Pakistan Civic Fee Lookup (2026):\nDocument: ${docType.toUpperCase()}\nSpeed: ${tier.toUpperCase()}\nOfficial Fee: ${
      typeof result.feePkr === 'number' ? `PKR ${result.feePkr.toLocaleString()}` : result.feePkr
    }\nDelivery: ${result.deliveryDays}\nVerified via Pakistan Info Hub (pakistaninfohub.com)`;

    if (navigator.share) {
      navigator.share({ title: 'Pakistan Civic Fee Calculator', text }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className="rounded-3xl border-2 border-doc-brass/30 bg-[#FAF9F6] dark:bg-[#1E2A3F] p-6 sm:p-8 space-y-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-doc-ink dark:bg-slate-800 text-white flex items-center justify-center">
            <Calculator className="w-5 h-5 text-doc-brass" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 dark:text-white">
              {t('Official CNIC & Passport Fee Calculator 2026', 'نادرا شناختی کارڈ و پاسپورٹ فیس کیلکولیٹر')}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
              {t('Instant fee lookup based on gazette-verified statutory rates.', 'سرکاری گزٹ کے مطابق درست فیس اور ڈلیوری ٹائم۔')}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-sans font-bold hover:border-doc-brass transition self-start sm:self-auto"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5 text-doc-brass" />}
          <span>{copied ? t('Copied!', 'کاپی ہو گیا!') : t('Share Result', 'شیئر کریں')}</span>
        </button>
      </div>

      {/* Selectors Form Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Document Type Dropdown */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold font-serif text-slate-800 dark:text-slate-200">
            {t('1. Select Document Type:', '1. دستاویز کی قسم منتخب کریں:')}
          </label>
          <select
            value={docType}
            onChange={(e) => setDocType(e.target.value as DocCategory)}
            className="w-full h-11 px-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm font-sans font-medium text-slate-900 dark:text-white focus:outline-none focus:border-doc-brass"
          >
            <option value="cnic">{t('NADRA Smart CNIC (National Identity Card)', 'نادرا سمارٹ شناختی کارڈ')}</option>
            <option value="nicop_a">{t('NICOP Zone A (Europe, US, Canada, UK, Gulf)', 'نائیکوپ زون اے (یورپ، خلیجی ممالک)')}</option>
            <option value="nicop_b">{t('NICOP Zone B (Other International Countries)', 'نائیکوپ زون بی (دیگر ممالک)')}</option>
            <option value="frc">{t('Family Registration Certificate (FRC)', 'فیملی رجسٹریشن سرٹیفکیٹ (ایف آر سی)')}</option>
            <option value="mrp_36">{t('Machine Readable Passport MRP (36 Pages - 5 Yrs)', 'مشین ریڈ ایبل پاسپورٹ (36 صفحات)')}</option>
            <option value="epassport_36">{t('e-Passport Chip Based 2026 (36 Pages - 5 Yrs)', 'نیا ای پاسپورٹ 2026 (36 صفحات)')}</option>
          </select>
        </div>

        {/* Processing Speed Dropdown */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold font-serif text-slate-800 dark:text-slate-200">
            {t('2. Processing Speed Tier:', '2. پراسیسنگ سپیڈ منتخب کریں:')}
          </label>
          <select
            value={tier}
            onChange={(e) => setTier(e.target.value as ProcessingTier)}
            disabled={docType === 'frc'}
            className="w-full h-11 px-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm font-sans font-medium text-slate-900 dark:text-white focus:outline-none focus:border-doc-brass disabled:opacity-50"
          >
            <option value="normal">{t('Normal Speed (Standard Delivery)', 'نارمل فیس (معمول کی ڈلیوری)')}</option>
            <option value="urgent">{t('Urgent Speed (Fast Processing)', 'ارجنٹ فیس (تیز ترین)')}</option>
            <option value="executive">{t('Executive / Fast Track (2–3 Days)', 'ایگزیکٹو / فاسٹ ٹریک (2 تا 3 دن)')}</option>
          </select>
        </div>
      </div>

      {/* Real-time Calculation Result Box with Micro-Animation */}
      <div className="p-5 sm:p-6 rounded-2xl border-2 border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 space-y-4 animate-fadeIn">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block">
              {t('TOTAL OFFICIAL STATUTORY FEE', 'کل سرکاری واجب الادا فیس')}
            </span>
            <div className="text-2xl sm:text-3xl font-mono font-extrabold text-slate-900 dark:text-white mt-0.5">
              {typeof result.feePkr === 'number'
                ? `PKR ${result.feePkr.toLocaleString()}`
                : result.feePkr}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-sans text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-3 rounded-xl border border-emerald-500/20">
            <Clock className="w-4 h-4 text-doc-brass shrink-0" />
            <div>
              <span className="text-[10px] font-mono text-slate-400 block">{t('Estimated Delivery', 'ڈلیوری کا تخمینہ')}:</span>
              <span className="font-bold">{t(result.deliveryDays, result.deliveryDaysUr)}</span>
            </div>
          </div>
        </div>

        {/* Source citation */}
        <div className="pt-3 border-t border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-sans">
          <span>
            {t('Based on rates effective August 2026, source:', 'مصدقہ حکومتی گزٹ اگست 2026، ماخذ:')}{' '}
            <a
              href={result.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-doc-brass underline font-bold inline-flex items-center gap-0.5"
            >
              <span>{result.sourceAuthority}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">
            ✓ 0% Agent Commission
          </span>
        </div>
      </div>
    </div>
  );
};
