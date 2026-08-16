'use client';

import React from 'react';
import { ShieldCheck, Lock, CheckCircle2, EyeOff, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export const PrivacyTrustBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-doc-paper dark:bg-doc-dark-card border-2 border-doc-verified/40 rounded-xl p-5 my-8 space-y-3 shadow-sm text-doc-ink dark:text-slate-100">
      <div className="flex items-center justify-between border-b border-doc-verified/20 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-doc-verified/15 text-doc-verified">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-sm">
            {t('Privacy & Safe Portal Guarantee', 'محفوظ پورٹل اور پرائیویسی ضمانت', 'Privacy & Safety Promise')}
          </h3>
        </div>
        <span className="font-mono text-[10px] font-bold text-doc-verified uppercase tracking-wider bg-doc-verified/10 px-2.5 py-0.5 rounded border border-doc-verified/30">
          100% AD-SAFE & CLEAN
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700 dark:text-slate-300">
        <div className="flex items-center gap-2 bg-white dark:bg-doc-dark-base p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
          <EyeOff className="w-4 h-4 text-doc-seal shrink-0" />
          <span>{t('Zero Popup Ads or Redirects', 'کوئی فالتو اشتہار یا پاپ اپ نہیں')}</span>
        </div>
        <div className="flex items-center gap-2 bg-white dark:bg-doc-dark-base p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
          <Lock className="w-4 h-4 text-doc-seal shrink-0" />
          <span>{t('No CNIC / Data Stored on Server', 'کوئی ڈیمو گرافک ڈیٹا محفوظ نہیں ہوتا')}</span>
        </div>
        <div className="flex items-center gap-2 bg-white dark:bg-doc-dark-base p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
          <CheckCircle2 className="w-4 h-4 text-doc-verified shrink-0" />
          <span>{t('Direct Links Only to .gov.pk Portals', 'صرف آفیشل ویب سائٹس کا لنک')}</span>
        </div>
      </div>
    </div>
  );
};
