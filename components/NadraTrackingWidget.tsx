'use client';

import React, { useState } from 'react';
import { ExternalLink, Copy, Check, ShieldCheck, Lock, AlertCircle, PhoneCall, Info } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export const NadraTrackingWidget: React.FC = () => {
  const { t } = useLanguage();
  const [trackingId, setTrackingId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const cleanId = trackingId.replace(/[^0-9]/g, '');

  const validateAndGetUrl = (): string | null => {
    if (!trackingId.trim()) {
      setErrorMsg(
        t(
          'Please enter your tracking ID first.',
          'برائے مہربانی پہلے اپنا ٹریکنگ آئی ڈی درج کریں۔',
          'Barae meharbani pehle apna tracking ID daraj karein.'
        )
      );
      return null;
    }

    if (cleanId.length !== 10) {
      setErrorMsg(
        t(
          'Please enter a valid 10-digit NADRA Tracking ID (e.g. 1012345678).',
          'برائے مہربانی 10 ہندسوں کا درست نادرا ٹریکنگ آئی ڈی درج کریں (مثال: 1012345678)۔',
          'Barae meharbani 10-digit drust NADRA tracking ID daraj karein (e.g. 1012345678).'
        )
      );
      return null;
    }

    setErrorMsg('');
    return 'https://id.nadra.gov.pk/';
  };

  const handleRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const url = validateAndGetUrl();
    if (url && typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopy = () => {
    if (!trackingId.trim()) {
      setErrorMsg(
        t(
          'Please enter your tracking ID first.',
          'برائے مہربانی پہلے اپنا ٹریکنگ آئی ڈی درج کریں۔',
          'Barae meharbani pehle apna tracking ID daraj karein.'
        )
      );
      return;
    }

    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(trackingId.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="my-8 rounded-2xl doc-card border border-doc-brass/40 p-6 md:p-8 shadow-md bg-white dark:bg-doc-dark-card space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-doc-brass/30">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-doc-seal/10 text-doc-seal dark:text-red-400 font-mono text-[11px] font-extrabold uppercase tracking-wider">
              {t('Official Redirect Assistant', 'آفیشل ریڈائریکٹ اسسٹنٹ', 'Official Redirect Assistant')}
            </span>
            <span className="text-xs text-slate-400 font-bold">•</span>
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              {t('Verified Portal Links 2026', 'تصدیق شدہ آفیشل پورٹل', 'Verified Portal Links')}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-serif font-extrabold text-doc-ink dark:text-white mt-1.5">
            {t('NADRA CNIC Application Tracking', 'نادرا شناختی کارڈ ٹریکنگ آن لائن', 'NADRA CNIC Tracking Assistant')}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 font-semibold px-3 py-1.5 rounded-lg bg-doc-paper dark:bg-slate-800 border border-doc-brass/30">
          <Lock className="w-3.5 h-3.5 text-doc-seal" />
          <span>{t('100% Client-Side Safe', '100٪ محفوظ کلائنٹ سائیڈ', '100% Client-Side Safe')}</span>
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={handleRedirect} className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-doc-ink dark:text-slate-100 mb-1">
            {t('Enter your 10-Digit Tracking ID:', 'اپنا 10 ہندسوں کا نادرا ٹریکنگ آئی ڈی درج کریں:', 'Apna 10-digit NADRA tracking ID daraj karein:')}
          </label>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
            {t(
              'Example: 10-digit receipt number (e.g. 1012345678 or 101-1234567-8)',
              'مثال: رسید پر لکھا 10 ہندسوں کا ٹریکنگ نمبر (مثلاً 1012345678)',
              'Example: 10-digit receipt number (e.g. 1012345678)'
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={trackingId}
                onChange={(e) => {
                  setTrackingId(e.target.value);
                  setErrorMsg('');
                }}
                placeholder="e.g. 1012345678"
                className="w-full px-4 py-3.5 rounded-xl bg-doc-paper dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-doc-ink dark:text-white placeholder-slate-400 focus:outline-none focus:border-doc-seal text-base font-mono font-bold tracking-wider transition"
              />
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className="px-4 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition shrink-0 min-h-[48px]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                    {t('Copied ID!', 'آئی ڈی کاپی ہو گیا!', 'Copied ID!')}
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-doc-seal" />
                  <span>{t('Copy ID', 'آئی ڈی کاپی کریں', 'Copy ID')}</span>
                </>
              )}
            </button>
          </div>

          {errorMsg && (
            <p className="text-xs font-bold text-rose-600 dark:text-rose-400 mt-2 flex items-center gap-1.5 animate-fadeIn">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </p>
          )}
        </div>

        {/* Action Button & Reassurance */}
        <div className="space-y-2 pt-2">
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-doc-seal hover:bg-doc-seal/90 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md transition transform active:scale-[0.99] min-h-[48px]"
          >
            <span>{t('Check Status on Official NADRA Site', 'آفیشل نادرا ویب سائٹ پر سٹیٹس چیک کریں', 'Check Status on Official NADRA Site')}</span>
            <ExternalLink className="w-4 h-4" />
          </button>

          <p className="text-xs text-center text-slate-500 dark:text-slate-400 font-medium">
            {t(
              "You'll be taken to NADRA's official website (id.nadra.gov.pk) to see your real-time status securely.",
              'کلک کرنے پر آپ کو نادرا کی آفیشل ویب سائٹ (id.nadra.gov.pk) پر سیکیور طریقے سے بھیجا جائے گا۔',
              "You'll be taken to NADRA's official website to see your real-time status securely."
            )}
          </p>
        </div>
      </form>

      {/* SMS Alternative Box */}
      <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 text-xs flex items-start gap-2.5">
        <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold">
            {t('SMS Tracking Option (Pakistan):', 'ایس ایم ایس ٹریکنگ کا طریقہ:', 'SMS Tracking Option:')}
          </span>{' '}
          {t(
            'You can also send your 10-digit Tracking ID via SMS to 8400 from any mobile phone in Pakistan to receive status updates.',
            'پاکستان میں موجود سائلین اپنا 10 ہندسوں کا ٹریکنگ نمبر 8400 پر ایس ایم ایس کر کے بھی سٹیٹس معلوم کر سکتے ہیں۔',
            'Pakistani residents can send 10-digit tracking ID to 8400 via SMS.'
          )}
        </div>
      </div>

      {/* Transparency & Trust Disclaimer */}
      <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
        <p className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
          <ShieldCheck className="w-3.5 h-3.5 text-doc-seal" />
          <span>{t('Privacy & Data Safety Guarantee', 'پرائیویسی اور ڈیٹا سیکیورٹی گارنٹی', 'Privacy & Data Safety')}</span>
        </p>
        <p className="leading-relaxed">
          {t(
            'Pakistan Info Hub does not access or store your tracking ID or application data. You will check your status directly and securely on NADRA’s own official website.',
            'پاکستان انفو ہب آپ کا ٹریکنگ آئی ڈی یا ذاتی ڈیٹا محفوظ یا پروسیس نہیں کرتا۔ آپ اپنا سٹیٹس براہِ راست نادرا کے اپنے آفیشل پورٹل پر چیک کرتے ہیں۔',
            'Pakistan Info Hub does not access or store your tracking ID. You check directly on official NADRA portal.'
          )}
        </p>
      </div>
    </div>
  );
};
