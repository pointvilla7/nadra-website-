'use client';

import React, { useState } from 'react';
import { ExternalLink, Copy, Check, ShieldCheck, Lock, AlertCircle, Info } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export const PassportTrackingWidget: React.FC = () => {
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
          'برائے مہربانی پہلے اپنا ٹریکنگ / ٹوکن نمبر درج کریں۔',
          'Barae meharbani pehle apna tracking ID daraj karein.'
        )
      );
      return null;
    }

    if (cleanId.length !== 11) {
      setErrorMsg(
        t(
          'Please enter a valid 11-digit Passport Token Number (e.g. 70351234567).',
          'برائے مہربانی 11 ہندسوں کا درست پاسپورٹ ٹوکن نمبر درج کریں (مثال: 70351234567)۔',
          'Barae meharbani 11-digit drust Passport token number daraj karein (e.g. 70351234567).'
        )
      );
      return null;
    }

    setErrorMsg('');
    return 'https://onlinemrp.dgip.gov.pk/';
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
          'برائے مہربانی پہلے اپنا ٹریکنگ / ٹوکن نمبر درج کریں۔',
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
              {t('Verified DGIP Links 2026', 'تصدیق شدہ آفیشل پاسپورٹ پورٹل', 'Verified DGIP Links')}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-serif font-extrabold text-doc-ink dark:text-white mt-1.5">
            {t('Passport Application Status Tracking', 'پاسپورٹ درخواست ٹریکنگ پورٹل', 'Passport Application Status Tracking')}
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
            {t('Enter your 11-Digit Passport Token / Tracking Number:', 'اپنا 11 ہندسوں کا پاسپورٹ ٹوکن یا ٹریکنگ نمبر درج کریں:', 'Apna 11-digit Passport token number daraj karein:')}
          </label>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
            {t(
              'Example: 11-digit token number printed on your receipt (e.g. 70351234567)',
              'مثال: پاسپورٹ ٹوکن کی رسید پر لکھا 11 ہندسوں کا نمبر (مثلاً 70351234567)',
              'Example: 11-digit token number (e.g. 70351234567)'
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
                placeholder="e.g. 70351234567"
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
                    {t('Copied ID!', 'نمبر کاپی ہو گیا!', 'Copied ID!')}
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-doc-seal" />
                  <span>{t('Copy ID', 'نمبر کاپی کریں', 'Copy ID')}</span>
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
            <span>{t('Check Status on Official DGIP Site', 'آفیشل پاسپورٹ پورٹل پر سٹیٹس چیک کریں', 'Check Status on Official DGIP Site')}</span>
            <ExternalLink className="w-4 h-4" />
          </button>

          <p className="text-xs text-center text-slate-500 dark:text-slate-400 font-medium">
            {t(
              "You'll be taken to DGIP's official website (onlinemrp.dgip.gov.pk) to see your real-time status securely.",
              'کلک کرنے پر آپ کو پاسپورٹ ڈائریکٹوریٹ کی آفیشل ویب سائٹ (onlinemrp.dgip.gov.pk) پر بھیجا جائے گا۔',
              "You'll be taken to DGIP's official website to see your real-time status securely."
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
            'You can track your MRP application status by sending your Token Number in a blank SMS to 9988 from any mobile phone in Pakistan.',
            'پاکستان میں سائلین اپنا ٹوکن نمبر 9988 پر ایس ایم ایس بھیج کر بھی پاسپورٹ کی تازہ ترین صورتحال معلوم کر سکتے ہیں۔',
            'Send your token number via SMS to 9988 to check passport status in Pakistan.'
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
            'Pakistan Info Hub does not access or store your tracking ID or application data. You will check your status directly and securely on DGIP’s own official website.',
            'پاکستان انفو ہب آپ کا پاسپورٹ ٹوکن نمبر یا ذاتی ڈیٹا محفوظ نہیں کرتا۔ آپ اپنا سٹیٹس ڈائریکٹوریٹ جنرل آف امیگریشن اینڈ پاسپورٹس کی ویب سائٹ پر چیک کرتے ہیں۔',
            'Pakistan Info Hub does not access or store your tracking ID. You check directly on official DGIP portal.'
          )}
        </p>
      </div>
    </div>
  );
};
