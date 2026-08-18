'use client';

import React, { useState } from 'react';
import {
  ExternalLink,
  Copy,
  Check,
  ShieldCheck,
  Lock,
  AlertCircle,
  PhoneCall,
  Info,
  RotateCcw,
  Smartphone,
  CheckCircle2,
  FileSearch,
  Building2,
  Printer,
  Truck,
  PackageCheck,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

interface PassportTrackingWidgetProps {
  compact?: boolean;
  className?: string;
  hideHeader?: boolean;
}

export const PassportTrackingWidget: React.FC<PassportTrackingWidgetProps> = ({
  compact = false,
  className = '',
  hideHeader = false,
}) => {
  const { t } = useLanguage();
  const [tokenNumber, setTokenNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValidated, setIsValidated] = useState(false);
  const [copiedSms, setCopiedSms] = useState(false);

  const cleanToken = tokenNumber.replace(/[^0-9]/g, '');

  const validateInput = (value: string): boolean => {
    const digitsOnly = value.replace(/[^0-9]/g, '');
    if (!digitsOnly) {
      setErrorMessage(
        t(
          'Please enter your 11-digit Passport Token Number.',
          'برائے مہربانی اپنا 11 ہندسوں کا پاسپورٹ ٹوکن نمبر درج کریں۔'
        )
      );
      setIsValidated(false);
      return false;
    }

    if (digitsOnly.length !== 11) {
      setErrorMessage(
        t(
          `Passport token number must be exactly 11 digits (you entered ${digitsOnly.length} digits). Example: 70351234567`,
          `پاسپورٹ ٹوکن نمبر کے 11 ہندسے ہونے چاہئیں (آپ نے ${digitsOnly.length} ہندسے درج کیے)۔ مثال: 70351234567`
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
    setTokenNumber(rawVal);
    const digitsOnly = rawVal.replace(/[^0-9]/g, '');

    if (digitsOnly.length === 11) {
      setErrorMessage('');
      setIsValidated(true);
    } else if (digitsOnly.length > 11) {
      setErrorMessage(
        t(
          'Token number cannot exceed 11 digits. Please remove extra digits.',
          'پاسپورٹ ٹوکن نمبر 11 ہندسوں سے زیادہ نہیں ہو سکتا۔'
        )
      );
      setIsValidated(false);
    } else {
      if (isValidated) setIsValidated(false);
      if (errorMessage) setErrorMessage('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateInput(tokenNumber);
  };

  const handleReset = () => {
    setTokenNumber('');
    setErrorMessage('');
    setIsValidated(false);
    setCopiedSms(false);
  };

  const handleCopySms = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(cleanToken || '70351234567');
      setCopiedSms(true);
      setTimeout(() => setCopiedSms(false), 2500);
    }
  };

  return (
    <div
      className={`w-full max-w-[540px] mx-auto rounded-2xl doc-card border-2 border-doc-brass/40 shadow-xl overflow-hidden bg-white dark:bg-doc-dark-card text-doc-ink dark:text-slate-100 transition-all ${className}`}
    >
      {/* Header Banner */}
      {!hideHeader && (
        <div className="bg-doc-ink text-white p-5 sm:p-6 border-b-2 border-doc-brass/40 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-48 h-48 bg-doc-seal/15 rounded-full blur-2xl pointer-events-none"
          />

          <div className="flex items-center justify-between gap-2 mb-2">
            <InteractiveToolBadge labelEn="GUIDED TRACKING HELPER" labelUr="پاسپورٹ ٹریکنگ گائیڈ" variant="navy" />
            <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-bold">
              <Lock className="w-3.5 h-3.5" />
              <span>100% PRIVATE & SAFE</span>
            </div>
          </div>

          <div className="flex items-start gap-3 mt-3">
            <div className="p-2.5 rounded-xl bg-doc-brass/20 text-doc-brass border border-doc-brass/40 shrink-0">
              <FileSearch className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-tight">
                {t('Passport Application Status Tracking', 'پاسپورٹ ٹریکنگ سٹیٹس گائیڈ')}
              </h2>
              <p className="text-xs text-slate-300 mt-1 font-sans">
                {t(
                  'Track Machine Readable Passport (MRP) & e-Passport via official DGIP portal & SMS 9988',
                  'ڈائریکٹوریٹ جنرل آف امیگریشن اینڈ پاسپورٹس کے پورٹل اور ایس ایم ایس 9988 سے سٹیٹس معلوم کریں'
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Body */}
      <div className="p-5 sm:p-6 space-y-6">
        {/* Token Input Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label
              htmlFor="passport-token-input"
              className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass mb-1.5"
            >
              {t('Enter your 11-Digit Passport Token Number:', 'اپنا 11 ہندسوں کا پاسپورٹ ٹوکن نمبر درج کریں:')}
            </label>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
              {t(
                'Printed at top-right of your Passport Delivery Slip (e.g. 70351234567)',
                'پاسپورٹ آفس سے موصول ہونے والی ڈیلیوری رسید پر لکھا 11 ہندسوں کا ٹوکن نمبر (مثال: 70351234567)'
              )}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch gap-2">
              <div className="relative flex-1">
                <input
                  id="passport-token-input"
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  maxLength={15}
                  value={tokenNumber}
                  onChange={handleChange}
                  placeholder="e.g. 70351234567"
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
                <span>{t('CHECK TRACKING', 'ٹریکنگ آپشنز')}</span>
              </button>
            </div>

            {/* Inline Error */}
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

        {/* GUIDED RESULTS SECTION */}
        {isValidated ? (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-doc-brass/30 pb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                {t('Token Number Confirmed: ', 'تصدیق شدہ پاسپورٹ ٹوکن: ')}
                <span className="font-mono text-doc-ink dark:text-white ml-1">{cleanToken}</span>
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

            {/* ACTION 1: Direct Link to DGIP Portal */}
            <div className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800/90 border border-doc-brass/30 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-doc-seal text-white font-mono font-bold text-xs flex items-center justify-center">
                    1
                  </span>
                  <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                    {t('Method 1: Track on Official DGIP Portal', 'طریقہ 1: آفیشل پاسپورٹ پورٹل پر ٹریک کریں')}
                  </h3>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                  {t('Free Online', 'مفت آن لائن')}
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                {t(
                  "Click the button below to open DGIP's official tracking portal. Enter your 11-digit token and select your issuing Regional Passport Office.",
                  'نیچے دیے گئے بٹن پر کلک کر کے ڈی جی آئی پی کا سرکاری ٹریکنگ پورٹل کھولیں اور اپنا ٹوکن نمبر درج کریں۔'
                )}
              </p>

              <a
                href="https://tracking.dgip.gov.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-doc-seal hover:bg-red-700 text-white font-mono font-bold text-xs flex items-center justify-center gap-2 transition shadow-md min-h-[44px]"
              >
                <span>{t('OPEN TRACKING.DGIP.GOV.PK', 'ڈی جی آئی پی ٹریکنگ پورٹل کھولیں')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* ACTION 2: SMS 9988 Tracking */}
            <div className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800/90 border border-doc-brass/30 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-doc-seal text-white font-mono font-bold text-xs flex items-center justify-center">
                    2
                  </span>
                  <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                    {t('Method 2: Track via SMS (Code 9988)', 'طریقہ 2: ایس ایم ایس 9988 کے ذریعے')}
                  </h3>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                  {t('Instant Reply', 'فوری جواب')}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-mono text-[11px]">{t('SMS Message Format:', 'ایس ایم ایس کا طریقہ:')}</span>
                  <span className="text-[11px] font-mono text-doc-seal font-bold">SEND TO 9988</span>
                </div>
                <div className="font-mono text-sm font-extrabold text-doc-ink dark:text-white tracking-wider">
                  {cleanToken}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2">
                <a
                  href={`sms:9988?body=${cleanToken}`}
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
                  <span>{copiedSms ? t('COPIED!', 'کاپی ہو گیا!') : t('COPY TOKEN', 'ٹوکن کاپی کریں')}</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                {t(
                  'Cost note: Standard mobile network charges apply (~PKR 2 + tax per SMS on Jazz, Zong, Telenor, or Ufone).',
                  'فیس نوٹ: عام موبائل نیٹ ورک چارجز لاگو ہوں گے (تقریباً 2 روپے علاوہ ٹیکس فی ایس ایم ایس)۔'
                )}
              </p>
            </div>

            {/* ACTION 3: Plain-Language Status Labels Explanation */}
            <div className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800/90 border border-doc-brass/30 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-doc-seal text-white font-mono font-bold text-xs flex items-center justify-center">
                  3
                </span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  {t('What Does Your Passport Status Mean?', 'پاسپورٹ سٹیٹس کا مفہوم سمجھیں')}
                </h3>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono font-bold text-[10px] shrink-0 uppercase">
                    Application Received
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 leading-snug">
                    {t(
                      'Your token has been captured at the Regional Passport Office counter and entered into the DGIP system.',
                      'آپ کی درخواست پاسپورٹ آفس کاؤنٹر پر موصول ہو کر سسٹم میں درج ہو چکی ہے۔'
                    )}
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 font-mono font-bold text-[10px] shrink-0 uppercase">
                    Data Entry / Under Verification
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 leading-snug">
                    {t(
                      'Biometrics and personal details are being cross-verified against NADRA and security clearance databases.',
                      'نادرا اور سیکیورٹی کلیئرنس ریکارڈ سے بائیو میٹرک تصدیق کی جا رہی ہے۔'
                    )}
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-900 dark:text-blue-200 font-mono font-bold text-[10px] shrink-0 uppercase">
                    Printing / In-Printing
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 leading-snug">
                    {t(
                      'Passport booklet is actively being printed and serialized at the central DGIP headquarters printing facility in Islamabad.',
                      'پاسپورٹ بکلیٹ مرکزی ہیڈ کوارٹر اسلام آباد میں پرنٹنگ مرحلے میں ہے۔'
                    )}
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/60 text-purple-900 dark:text-purple-200 font-mono font-bold text-[10px] shrink-0 uppercase">
                    Dispatched
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 leading-snug">
                    {t(
                      'Your printed passport has been sealed and dispatched via secure courier to your regional passport office or overseas mission.',
                      'پرنٹ شدہ پاسپورٹ متعلقہ ریجنل پاسپورٹ آفس یا سفارت خانے کو روانہ کر دیا گیا ہے۔'
                    )}
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-200 font-mono font-bold text-[10px] shrink-0 uppercase">
                    Ready for Collection
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 leading-snug">
                    {t(
                      'Passport has arrived at your local passport office counter. Bring your original CNIC and delivery slip to collect.',
                      'پاسپورٹ آپ کے مقامی پاسپورٹ آفس پہنچ چکا ہے۔ اصل شناختی کارڈ اور رسید لا کر وصول کریں۔'
                    )}
                  </span>
                </div>
              </div>
            </div>

            {/* ACTION 4: Official Helpline */}
            <div className="p-3.5 rounded-xl bg-doc-ink/5 dark:bg-slate-800 border border-doc-brass/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-doc-seal shrink-0" />
                <div>
                  <span className="font-bold text-doc-ink dark:text-white">
                    {t('DGIP Official Helpline:', 'پاسپورٹ ہیلپ لائن:')}
                  </span>{' '}
                  <span className="text-slate-600 dark:text-slate-300">0800-00000 / 051-111-344-777</span>
                </div>
              </div>
              <a
                href="tel:080000000"
                className="px-3 py-1.5 rounded-lg bg-doc-ink text-white font-mono font-bold text-[11px] hover:bg-slate-800 transition"
              >
                CALL
              </a>
            </div>
          </div>
        ) : (
          /* Initial Guidance */
          <div className="p-4 rounded-xl bg-doc-paper/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-serif font-bold text-sm">
              <Info className="w-4 h-4 text-doc-seal shrink-0" />
              <span>{t('Where to find your 11-Digit Token Number?', '11 ہندسوں کا ٹوکن نمبر کہاں ہوتا ہے؟')}</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              {t(
                'When you complete data entry and biometric capture at any Regional Passport Office (RPO), you receive a printed paper Delivery Token slip. Your 11-digit Token Number (e.g. 70351234567) is printed in bold near the top.',
                'جب آپ پاسپورٹ آفس میں بائیو میٹرک اور تصویر مکمل کرواتے ہیں تو آپ کو ایک رسید دی جاتی ہے جس کے اوپر 11 ہندسوں کا ٹوکن نمبر درج ہوتا ہے۔'
              )}
            </p>
          </div>
        )}

        {/* Transparency & Safety Guarantee */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-1 font-sans">
          <p className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-doc-seal shrink-0" />
            <span>{t('Client-Side Guided Helper', 'محفوظ کلائنٹ سائیڈ گائیڈ')}</span>
          </p>
          <p className="leading-relaxed">
            {t(
              'Pakistan Info Hub does not scrape DGIP servers or store your token number. All official tracking is done directly through DGIP’s verified 9988 SMS shortcode and official tracking.dgip.gov.pk portal.',
              'پاکستان انفو ہب آپ کا پاسپورٹ ٹوکن نمبر محفوظ نہیں کرتا۔ تمام تصدیق براہِ راست ڈی جی آئی پی کے 9988 ایس ایم ایس اور آفیشل پورٹل سے ہوتی ہے۔'
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
