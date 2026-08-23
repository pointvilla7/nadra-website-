'use client';

import React from 'react';
import { ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { ARTICLES } from '@/lib/data/articles';
import Link from 'next/link';
import styles from './RecentlyVerifiedTicker.module.css';

export function formatRelativeVerification(dateStr: string, t: (en: string, ur?: string) => string): string {
  if (!dateStr) return t('Verified Today', 'آج تصدیق شدہ');
  
  const verifiedDate = new Date(dateStr);
  if (isNaN(verifiedDate.getTime())) {
    return dateStr;
  }

  const now = new Date();
  const diffMs = now.getTime() - verifiedDate.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0 && diffHours < 1) {
    return t('Just Updated', 'ابھی اپڈیٹ ہوا');
  } else if (diffDays <= 0) {
    return t('Verified Today', 'آج تصدیق شدہ');
  } else if (diffDays === 1) {
    return t('Verified Yesterday', 'کل تصدیق شدہ');
  } else if (diffDays > 1 && diffDays < 30) {
    return t(`Verified ${diffDays}d ago`, `${diffDays} دن پہلے`);
  } else {
    return dateStr;
  }
}

/** Single ticker item pill */
const TickerItem: React.FC<{
  slug: string;
  labelEn: string;
  labelUr: string;
  time: string;
  t: (en: string, ur?: string) => string;
}> = ({ slug, labelEn, labelUr, time, t }) => (
  <Link
    href={slug}
    className="min-h-[44px] flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-doc-brass/30 text-slate-200 hover:text-white transition shrink-0 group"
  >
    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
    <span className="font-serif font-bold text-doc-paper group-hover:text-doc-brass transition whitespace-nowrap shrink-0 text-xs sm:text-sm">
      {t(labelEn, labelUr)}
    </span>
    <span className="font-mono text-[10px] text-doc-brass flex items-center gap-1.5 bg-doc-ink/90 px-2 py-1 rounded-md border border-doc-brass/20 shrink-0 whitespace-nowrap">
      <Clock className="w-3 h-3 text-slate-400 shrink-0" />
      {time}
    </span>
    <div className="w-5 h-5 rounded-full bg-slate-700/60 group-hover:bg-doc-brass/20 flex items-center justify-center shrink-0 transition">
      <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-doc-brass transition" />
    </div>
  </Link>
);

export const RecentlyVerifiedTicker: React.FC = () => {
  const { t } = useLanguage();

  const tickerConfig = [
    { key: 'cnic-kaise-banaye', labelEn: 'NADRA Smart CNIC Fee 2026', labelUr: 'نادرا سمارٹ شناختی کارڈ فیس 2026' },
    { key: 'fee-2026', labelEn: 'Pakistani e-Passport Fee Chart', labelUr: 'پاکستان ای پاسپورٹ فیس شیڈول 2026' },
    { key: 'fbr-filer-status-check-cnic', labelEn: 'FBR Active Taxpayer List (ATL)', labelUr: 'ایف بی آر ایکٹو ٹیکس پیئر لسٹ' },
    { key: 'hajj-balloting-result-check-online', labelEn: 'MORA Hajj 2026 Balloting Results', labelUr: 'حج قرعہ اندازی نتائج 2026' },
    { key: 'sehat-card-eligibility-check-by-cnic', labelEn: 'Universal Sehat Card (1M PKR Limit)', labelUr: 'صحت کارڈ 10 لاکھ علاج سہولت' },
    { key: 'bisp-eligibility-check-by-cnic', labelEn: 'BISP 8171 Kafaalat Quarterly Amount & Schedule (Check via 8171 Portal)', labelUr: 'بے نظیر کفالت سہ ماہی قسط و شیڈول (8171 پورٹل سے تصدیق)' },
    { key: 'property-mutation-check-by-cnic', labelEn: 'PLRA Land Record Mutation (Intiqal)', labelUr: 'اراضی ریکارڈ انتقال تصدیق' },
    { key: 'beoe-protector-registration-overseas-employment-2026', labelEn: 'BEOE Protector Registration (Rs. 9,200)', labelUr: 'اوورسیز پروٹیکٹر فیس شیڈول' },
    { key: 'apni-chhat-apna-ghar', labelEn: 'Apni Chhat Housing Loan (1.5M PKR)', labelUr: 'اپنی چھت اپنا گھر 15 لاکھ بلا سود قرضہ' },
    { key: 'e-challan-check-online', labelEn: 'PSCA Punjab E-Challan Rates', labelUr: 'سیف سٹی پنجاب ای چالان ریٹس' },
  ];

  const updates = tickerConfig.map((item) => {
    const article = ARTICLES[item.key];
    const lastVerified = article ? article.lastVerified : 'August 16, 2026';
    const fullPath = article ? article.fullPath : '/';

    return {
      labelEn: item.labelEn,
      labelUr: item.labelUr,
      slug: fullPath,
      time: formatRelativeVerification(lastVerified, t),
    };
  });

  return (
    <div className="w-full rounded-2xl p-3 sm:p-4 border border-doc-brass/30 bg-doc-ink text-white my-6 sm:my-8 shadow-doc-card min-h-[88px] md:min-h-[64px]">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-3 sm:gap-4">

        {/* ── LABEL: Non-animated, flex-shrink-0, stacks above on mobile ── */}
        <div className="w-full md:w-auto flex items-center justify-between md:justify-start gap-2.5 shrink-0 border-b md:border-b-0 md:border-r border-doc-brass/30 pb-2.5 md:pb-0 md:pr-4">
          <div className="flex items-center gap-2 shrink-0">
            <div className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-doc-brass shrink-0">
              {t('LIVE VERIFIED TICKER', 'لائیو مصدقہ معلومات')}
            </span>
          </div>
          <span className="md:hidden font-mono text-[10px] uppercase tracking-wider text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-doc-brass/20 shrink-0">
            {t('2026 Live', '2026 لائیو')}
          </span>
        </div>

        {/* ── SCROLLING TRACK: Scoped CSS Module, overflow:hidden ONLY on this div ── */}
        <div className={styles.viewport}>
          <div className={styles.track}>
            {/* First copy of items */}
            {updates.map((item, i) => (
              <TickerItem key={`a-${i}`} {...item} t={t} />
            ))}
            {/* Second copy for seamless loop (translateX(-50%) lands exactly here) */}
            {updates.map((item, i) => (
              <TickerItem key={`b-${i}`} {...item} t={t} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
