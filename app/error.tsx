'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ShieldAlert, RefreshCw, Home, Search, BookOpen } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useLanguage();

  useEffect(() => {
    // Log internal error safely
    console.error('Unhandled platform error:', error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full text-center space-y-8 doc-card bg-doc-paper dark:bg-doc-dark-card border-2 border-red-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        {/* Seal Watermark */}
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full border-8 border-dashed border-red-500/10 pointer-events-none" />

        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/10 text-red-600 dark:text-red-400 rounded-2xl border border-red-500/30">
            <ShieldAlert className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
          <span className="block font-mono text-xs text-red-600 dark:text-red-400 uppercase tracking-widest font-bold">
            SYSTEM NOTICE • TEMPORARY SERVICE RECOVERY
          </span>
          <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-doc-ink dark:text-slate-100">
            {t(
              'Something Went Wrong Loading This Resource',
              'معلومات لوڈ کرنے میں عارضی دشواری'
            )}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed font-sans">
            {t(
              'An unexpected runtime issue occurred while generating this verified document guide. You can retry the request or return to the main portal directory.',
              'صفحہ لوڈ کرتے وقت غیر متوقع مسئلہ پیش آیا ہے۔ براہ کرم دوبارہ کوشش کریں یا مرکزی پورٹل پر واپس جائیں۔'
            )}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto min-h-[48px] px-6 py-3 bg-[#0B1120] text-white hover:bg-[#1B2A4A] dark:bg-slate-800 dark:hover:bg-slate-700 font-sans font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <RefreshCw className="w-4 h-4 text-doc-brass" />
            <span>{t('Try Again', 'دوبارہ کوشش کریں')}</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto min-h-[48px] px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-doc-brass font-sans font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>{t('Return to Homepage', 'ہوم پیج پر جائیں')}</span>
          </Link>
        </div>

        {/* Popular Recovery Links */}
        <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 space-y-3 text-start max-w-md mx-auto">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block text-center">
            {t('Popular Verified Portals:', 'مقبول ترین معلوماتی پورٹلز:')}
          </span>
          <div className="grid grid-cols-2 gap-2 text-xs font-sans font-semibold">
            <Link
              href="/nadra/cnic-kaise-banaye"
              className="p-2.5 rounded-lg bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-doc-brass transition flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-doc-brass shrink-0" />
              <span className="truncate">CNIC Smart Card</span>
            </Link>
            <Link
              href="/bills/utility-bill-checker-2026"
              className="p-2.5 rounded-lg bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-doc-brass transition flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-doc-brass shrink-0" />
              <span className="truncate">Online Bill Checker</span>
            </Link>
            <Link
              href="/tax/fbr-filer-status-check-cnic"
              className="p-2.5 rounded-lg bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-doc-brass transition flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-doc-brass shrink-0" />
              <span className="truncate">FBR Active Taxpayer</span>
            </Link>
            <Link
              href="/passport/fee-calculator"
              className="p-2.5 rounded-lg bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-doc-brass transition flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-doc-brass shrink-0" />
              <span className="truncate">Passport Calculator</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
