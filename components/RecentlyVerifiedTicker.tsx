'use client';

import React from 'react';
import { ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { ARTICLES } from '@/lib/data/articles';
import Link from 'next/link';

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

export const RecentlyVerifiedTicker: React.FC = () => {
  const { t } = useLanguage();

  const tickerConfig = [
    { key: 'cnic-kaise-banaye', labelEn: 'NADRA Smart CNIC Fee 2026', labelUr: 'نادرا سمارٹ شناختی کارڈ فیس 2026' },
    { key: 'fee-2026', labelEn: 'Pakistani e-Passport Fee Chart', labelUr: 'پاکستان ای پاسپورٹ فیس شیڈول 2026' },
    { key: 'fbr-filer-status-check-cnic', labelEn: 'FBR Active Taxpayer List (ATL)', labelUr: 'ایف بی آر ایکٹو ٹیکس پیئر لسٹ' },
    { key: 'hajj-balloting-result-check-online', labelEn: 'MORA Hajj 2026 Balloting Results', labelUr: 'حج قرعہ اندازی نتائج 2026' },
    { key: 'sehat-card-eligibility-check-by-cnic', labelEn: 'Universal Sehat Card (1M PKR Limit)', labelUr: 'صحت کارڈ 10 لاکھ علاج سہولت' },
    { key: 'bisp-eligibility-check-by-cnic', labelEn: 'BISP 8171 Kafaalat 10,500 PKR Schedule', labelUr: 'بے نظیر کفالت 10,500 روپے قسط شیڈول' },
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

  // Duplicate items for continuous seamless loop
  const tickerItems = [...updates, ...updates];

  return (
    <div className="w-full doc-card rounded-2xl p-3 md:p-4 border border-doc-brass/30 bg-doc-ink text-white my-6 shadow-doc-card overflow-hidden min-h-[72px] md:min-h-[60px]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        {/* Ticker Title Label */}
        <div className="flex items-center gap-2 shrink-0 border-b md:border-b-0 md:border-r border-doc-brass/30 pb-2 md:pb-0 md:pr-4">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-doc-brass">
            {t('LIVE VERIFIED TICKER', 'لائیو مصدقہ معلومات')}
          </span>
        </div>

        {/* Continuous Marquee Row with Gradient Edge Masks */}
        <div className="relative w-full overflow-hidden ticker-fade-mask py-1">
          <div className="animate-marquee items-center gap-4">
            {tickerItems.map((item, index) => (
              <Link
                key={index}
                href={item.slug}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-doc-brass/30 text-slate-200 hover:text-white transition shrink-0 group shadow-sm"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="font-serif font-bold text-doc-paper group-hover:text-doc-brass transition truncate">
                  {t(item.labelEn, item.labelUr)}
                </span>
                <span className="font-mono text-[10px] text-doc-brass flex items-center gap-1 bg-doc-ink px-1.5 py-0.5 rounded border border-doc-brass/20 shrink-0">
                  <Clock className="w-3 h-3 text-slate-400" />
                  {item.time}
                </span>
                <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-white transition shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
