'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileCheck2,
  MessageSquare,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Info,
  RotateCcw,
  Smartphone,
  Sparkles,
  ArrowRight,
  Lock,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

interface BFormFrcStatusCheckerProps {
  compact?: boolean;
  className?: string;
  hideHeader?: boolean;
}

export const BFormFrcStatusChecker: React.FC<BFormFrcStatusCheckerProps> = ({
  compact = false,
  className = '',
  hideHeader = false,
}) => {
  const { t } = useLanguage();

  const [trackingId, setTrackingId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValidated, setIsValidated] = useState(false);
  const [copiedSms, setCopiedSms] = useState(false);

  // Normalize: remove non-digits
  const cleanId = trackingId.replace(/[^0-9]/g, '');

  const validateInput = (value: string): boolean => {
    const digitsOnly = value.replace(/[^0-9]/g, '');
    if (!digitsOnly) {
      setErrorMessage(
        t(
          'Please enter your 12-digit NADRA Tracking ID.',
          'برائے مہربانی اپنا 12 ہندسوں کا نادرا ٹریکنگ آئی ڈی درج کریں۔'
        )
      );
      setIsValidated(false);
      return false;
    }

    if (digitsOnly.length !== 12) {
      setErrorMessage(
        t(
          `Tracking ID must be exactly 12 digits (you entered ${digitsOnly.length} digits). Example: 101234567890`,
          `ٹریکنگ آئی ڈی کے 12 ہندسے ہونے چاہئیں (آپ نے ${digitsOnly.length} ہندسے درج کیے)۔ مثال: 101234567890`
        )
      );
      setIsValidated(false);
      return false;
    }

    setErrorMessage('');
    setIsValidated(true);
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    setTrackingId(rawVal);
    const digitsOnly = rawVal.replace(/[^0-9]/g, '');

    // Auto-validate once 12 digits are reached
    if (digitsOnly.length === 12) {
      setErrorMessage('');
      setIsValidated(true);
    } else if (digitsOnly.length > 12) {
      setErrorMessage(
        t(
          'Tracking ID cannot exceed 12 digits. Please remove extra digits.',
          'ٹریکنگ آئی ڈی 12 ہندسوں سے زیادہ نہیں ہو سکتی۔'
        )
      );
      setIsValidated(false);
    } else {
      if (isValidated) {
        setIsValidated(false);
      }
      if (errorMessage) {
        setErrorMessage('');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateInput(trackingId);
  };

  const handleReset = () => {
    setTrackingId('');
    setErrorMessage('');
    setIsValidated(false);
    setCopiedSms(false);
  };

  const handleCopySms = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(cleanId || '101234567890');
      setCopiedSms(true);
      setTimeout(() => setCopiedSms(false), 2500);
    }
  };

  return (
    <div
      className={`w-full max-w-[520px] mx-auto rounded-2xl doc-card border-2 border-doc-brass/40 shadow-xl overflow-hidden bg-white dark:bg-doc-dark-card text-doc-ink dark:text-slate-100 transition-all ${className}`}
    >
      {/* Header Banner */}
      {!hideHeader && (
        <div className="bg-doc-ink text-white p-5 sm:p-6 border-b-2 border-doc-brass/40 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-48 h-48 bg-doc-seal/15 rounded-full blur-2xl pointer-events-none"
          />

          <div className="flex items-center justify-between gap-2 mb-2">
            <InteractiveToolBadge labelEn="STATUS CHECK GUIDE" labelUr="سٹیٹس گائیڈ ٹول" variant="seal" />
            <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-bold">
              <Lock className="w-3.5 h-3.5" />
              <span>100% PRIVATE & SAFE</span>
            </div>
          </div>

          <div className="flex items-start gap-3 mt-3">
            <div className="p-2.5 rounded-xl bg-doc-brass/20 text-doc-brass border border-doc-brass/40 shrink-0">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-tight">
                {t('B-Form / FRC Status Check Guide', 'بی فارم اور ایف آر سی سٹیٹس گائیڈ')}
              </h2>
              <p className="text-xs text-slate-300 mt-1 font-sans">
                {t(
                  '3 verified official methods to track your Child Registration or Family Certificate',
                  'نادرا بی فارم اور فیملی رجسٹریشن سرٹیفکیٹ کا سٹیٹس چیک کرنے کے 3 مصدقہ طریقے'
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Body */}
      <div className="p-5 sm:p-6 space-y-6">
        {/* Tracking ID Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label
              htmlFor="tracking-input"
              className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass mb-1.5"
            >
              {t('Enter your 12-Digit NADRA Tracking ID:', 'اپنا 12 ہندسوں کا نادرا ٹریکنگ آئی ڈی درج کریں:')}
            </label>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
              {t(
                'Found on top of your physical NADRA receipt token (e.g. 101234567890)',
                'نادرا ٹوکن کی رسید پر درج 12 ہندسوں کا نمبر (مثال: 101234567890)'
              )}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch gap-2">
              <div className="relative flex-1">
                <input
                  id="tracking-input"
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  maxLength={16}
                  value={trackingId}
                  onChange={handleChange}
                  placeholder="e.g. 101234567890"
                  className={`w-full px-4 py-3.5 rounded-xl bg-doc-paper/70 dark:bg-slate-800 border ${
                    errorMessage
                      ? 'border-rose-500 ring-1 ring-rose-500'
                      : isValidated
                      ? 'border-emerald-500 ring-1 ring-emerald-500'
                      : 'border-slate-300 dark:border-slate-700'
                  } text-doc-ink dark:text-white placeholder-slate-400 focus:outline-none focus:border-doc-seal text-base font-mono font-bold tracking-wider transition min-h-[48px]`}
                />
                {isValidated && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center gap-1 font-mono">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>VALID</span>
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="px-5 py-3.5 rounded-xl bg-doc-seal hover:bg-doc-seal/90 text-white font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition shadow-sm shrink-0 min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal"
              >
                <span>{t('CHECK OPTIONS', 'سٹیٹس آپشنز دیکھیں')}</span>
              </button>
            </div>

            {/* Inline Error Message */}
            {errorMessage && (
              <p
                role="alert"
                className="text-xs font-bold text-rose-600 dark:text-rose-400 mt-2 flex items-center gap-1.5 animate-fadeIn"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </p>
            )}
          </div>
        </form>

        {/* GUIDED RESULTS SECTION (Appears immediately upon valid 12-digit entry) */}
        {isValidated ? (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-doc-brass/30 pb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                {t('Tracking ID Confirmed: ', 'تصدیق شدہ ٹریکنگ کوڈ: ')}
                <span className="font-mono text-doc-ink dark:text-white ml-1">{cleanId}</span>
              </span>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs font-mono font-semibold text-slate-500 hover:text-doc-seal dark:text-slate-400 flex items-center gap-1 transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t('Reset', 'دوبارہ')}</span>
              </button>
            </div>

            <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {t(
                'Choose one of the 3 official NADRA channels below to check your real status securely:',
                'اپنی درخواست کا اصل سٹیٹس معلوم کرنے کے لیے نیچے دیے گئے 3 آفیشل طریقوں میں سے کوئی ایک منتخب کریں:'
              )}
            </p>

            {/* WAY 1: SMS Channel (8400) */}
            <div className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800/90 border border-doc-brass/30 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-doc-seal text-white font-mono font-bold text-xs flex items-center justify-center">
                    1
                  </span>
                  <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                    {t('Method 1: Check via SMS (Code 8400)', 'طریقہ 1: ایس ایم ایس 8400 کے ذریعے')}
                  </h3>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                  {t('Fastest via Mobile', 'موبائل پر فوری')}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-mono text-[11px]">{t('SMS Message Format:', 'ایس ایم ایس کا طریقہ:')}</span>
                  <span className="text-[11px] font-mono text-doc-seal font-bold">SEND TO 8400</span>
                </div>
                <div className="font-mono text-sm font-extrabold text-doc-ink dark:text-white tracking-wider">
                  {cleanId}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2">
                <a
                  href={`sms:8400?body=${cleanId}`}
                  className="w-full sm:flex-1 py-2.5 px-3 rounded-lg bg-doc-ink hover:bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center gap-1.5 transition min-h-[44px]"
                >
                  <Smartphone className="w-3.5 h-3.5 text-doc-brass" />
                  <span>{t('OPEN SMS IN PHONE', 'موبائل ایس ایم ایس کھولیں')}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopySms}
                  className="w-full sm:w-auto py-2.5 px-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-mono font-bold text-xs flex items-center justify-center gap-1.5 hover:border-doc-brass transition min-h-[44px]"
                >
                  {copiedSms ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-doc-seal" />}
                  <span>{copiedSms ? t('COPIED!', 'کاپی ہو گیا!') : t('COPY CODE', 'کوڈ کاپی کریں')}</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                {t(
                  'Cost note: Standard mobile network charges apply (~PKR 2 + tax per SMS from Jazz, Zong, Telenor, or Ufone).',
                  'فیس نوٹ: عام موبائل نیٹ ورک چارجز لاگو ہوں گے (تقریباً 2 روپے علاوہ ٹیکس فی ایس ایم ایس)۔'
                )}
              </p>
            </div>

            {/* WAY 2: Online Pak-ID Portal */}
            <div className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800/90 border border-doc-brass/30 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-doc-seal text-white font-mono font-bold text-xs flex items-center justify-center">
                    2
                  </span>
                  <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                    {t('Method 2: Check Online at NADRA Portal', 'طریقہ 2: نادرا پورٹل پر آن لائن')}
                  </h3>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                  {t('Live Detailed View', 'تفصیلی لائیو ویو')}
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                {t(
                  "Instructions: Click below to open id.nadra.gov.pk. Log in with your Pak-ID account, go to 'Existing Applications', and look for tracking ID ",
                  'طریقہ کار: نادرا کی سرکاری ویب سائٹ کھول کر اپنے پاک آئی ڈی اکاؤنٹ سے لاگ ان کریں اور Existing Applications میں ٹریکنگ آئی ڈی '
                )}
                <span className="font-mono font-bold text-doc-ink dark:text-white">
                  {cleanId}
                </span>
                .
              </p>

              <a
                href="https://id.nadra.gov.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-doc-seal hover:bg-red-700 text-white font-mono font-bold text-xs flex items-center justify-center gap-2 transition shadow-md min-h-[44px]"
              >
                <span>{t('OPEN ID.NADRA.GOV.PK PORTAL', 'نادرا پاک آئی ڈی پورٹل کھولیں')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* WAY 3: Status Labels Explanation */}
            <div className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800/90 border border-doc-brass/30 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-doc-seal text-white font-mono font-bold text-xs flex items-center justify-center">
                  3
                </span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  {t('Method 3: Understanding NADRA Status Labels', 'طریقہ 3: نادرا سٹیٹس کا مفہوم سمجھیں')}
                </h3>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 font-sans">
                {t(
                  'When you receive an SMS or check online, you will see one of these official stages:',
                  'جب آپ سٹیٹس چیک کریں گے تو آپ کو مندرجہ ذیل میں سے کوئی ایک مرحلہ نظر آئے گا:'
                )}
              </p>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 dark:bg-amber-900/60 dark:text-amber-200 font-mono font-bold text-[10px] shrink-0 uppercase">
                    In-Process
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 leading-snug">
                    {t(
                      'Application is undergoing document verification, family tree matching, or counter supervisor approval.',
                      'درخواست کی دستاویزات، فیملی شجرہ اور بائیو میٹرک تصدیق کا عمل جاری ہے۔'
                    )}
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900 dark:bg-blue-900/60 dark:text-blue-200 font-mono font-bold text-[10px] shrink-0 uppercase">
                    Printed
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 leading-snug">
                    {t(
                      'Your official B-Form (CRC) or FRC certificate has been printed and quality verified at the NADRA facility.',
                      'آپ کا بی فارم یا فیملی سرٹیفکیٹ نادرا کے ہیڈ آفس میں پرنٹ ہو چکا ہے۔'
                    )}
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 dark:bg-emerald-900/60 dark:text-emerald-200 font-mono font-bold text-[10px] shrink-0 uppercase">
                    Dispatched
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 leading-snug">
                    {t(
                      'Document is dispatched via courier or ready for physical counter collection at your registered NRC office.',
                      'دستاویز متعلقہ نادرا سینٹر یا بذریعہ ڈاک آپ کے پتے پر روانہ کر دی گئی ہے۔'
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Initial Guidance Box */
          <div className="p-4 rounded-xl bg-doc-paper/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-serif font-bold text-sm">
              <Info className="w-4 h-4 text-doc-seal shrink-0" />
              <span>{t('Where to find your 12-Digit Tracking ID?', '12 ہندسوں کا ٹریکنگ نمبر کہاں ہوتا ہے؟')}</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              {t(
                'When you apply for a Child Registration Certificate (B-Form) or Family Registration Certificate (FRC) at any NADRA center, you receive a printed paper token receipt with a 12-digit barcode tracking number.',
                'جب آپ نادرا سینٹر سے بی فارم یا ایف آر سی بنواتے ہیں تو آپ کو ایک کاغذ کی رسید دی جاتی ہے جس پر بارکوڈ کے ساتھ 12 ہندسوں کا ٹریکنگ نمبر درج ہوتا ہے۔'
              )}
            </p>
          </div>
        )}

        {/* Privacy Trust Footer */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-1 font-sans">
          <p className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-doc-seal shrink-0" />
            <span>{t('Client-Side Guided Helper', 'محفوظ کلائنٹ سائیڈ گائیڈ')}</span>
          </p>
          <p className="leading-relaxed">
            {t(
              'Pakistan Info Hub does not scrape NADRA servers or store your tracking ID. All official status updates are checked directly through NADRA’s verified 8400 SMS shortcode and official portal.',
              'پاکستان انفو ہب آپ کا ڈیٹا یا ٹریکنگ نمبر محفوظ نہیں کرتا۔ تمام تصدیق براہِ راست نادرا کے آفیشل 8400 ایس ایم ایس اور پورٹل سے ہوتی ہے۔'
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
