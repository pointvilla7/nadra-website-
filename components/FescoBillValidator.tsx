'use client';

import React, { useState } from 'react';
import {
  Zap,
  ShieldCheck,
  ExternalLink,
  Copy,
  Check,
  Info,
  HelpCircle,
  FileText,
  AlertCircle,
  Phone,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

type InputMode = 'reference' | 'customer';

export const FescoBillValidator: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { t } = useLanguage();
  const [mode, setMode] = useState<InputMode>('reference');
  const [inputVal, setInputVal] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [showDiagram, setShowDiagram] = useState(false);

  const cleanDigits = inputVal.replace(/[^0-9]/g, '');
  const requiredLength = mode === 'reference' ? 14 : 10;

  const handleModeSwitch = (newMode: InputMode) => {
    setMode(newMode);
    setInputVal('');
    setErrorMsg(null);
    setIsValidated(false);
    setCopied(false);
  };

  const handleValidate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cleanDigits) {
      setErrorMsg(
        t(
          `Please enter your ${mode === 'reference' ? '14-digit Reference Number' : '10-digit Customer ID'}.`,
          `آگے بڑھنے کے لیے اپنا ${mode === 'reference' ? '14 ہندسوں کا ریفرنس نمبر' : '10 ہندسوں کا کسٹمر آئی ڈی'} درج کریں۔`
        )
      );
      setIsValidated(false);
      return;
    }

    if (cleanDigits.length !== requiredLength) {
      setErrorMsg(
        t(
          `FESCO ${mode === 'reference' ? 'Reference Number requires exactly 14 numeric digits' : 'Customer ID requires exactly 10 digits'}. You entered ${cleanDigits.length} digit${cleanDigits.length === 1 ? '' : 's'}.`,
          `فیسکو ${mode === 'reference' ? 'ریفرنس نمبر کے لیے صحیح 14 ہندسے' : 'کسٹمر آئی ڈی کے لیے 10 ہندسے'} درکار ہیں۔ آپ نے ${cleanDigits.length} ہندسے درج کیے۔`
        )
      );
      setIsValidated(false);
      return;
    }

    setErrorMsg(null);
    setIsValidated(true);
  };

  const handleCopy = () => {
    if (!cleanDigits) return;
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard
        .writeText(cleanDigits)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        })
        .catch(() => fallbackCopy(cleanDigits));
    } else {
      fallbackCopy(cleanDigits);
    }
  };

  const fallbackCopy = (text: string) => {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Ignored
    }
  };

  return (
    <div
      className={`my-8 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-doc-ink overflow-hidden shadow-xl ${className}`}
    >
      {/* Top Header */}
      <div className="px-5 py-4 bg-doc-ink text-white flex flex-wrap items-center justify-between gap-3 border-b border-doc-brass/20">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-doc-brass">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-sm sm:text-base text-white leading-tight">
              {t('FESCO Official Bill Portal Navigator', 'فیسکو آفیشل بل پورٹل نیویگیٹر')}
            </h3>
            <p className="text-[11px] text-slate-400 font-mono">
              {t('Client-Side Format Validator + Instant Copy Tool', 'مقامی فارمیٹ تصدیق + فوری کاپی ٹول')}
            </p>
          </div>
        </div>
        <InteractiveToolBadge labelEn="HONEST GUIDED FLOW" labelUr="شفاف رہنمائی" variant="gold" />
      </div>

      {/* Privacy Notice Banner */}
      <div className="px-5 pt-4 pb-0">
        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-300 font-sans">
          <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
          <span className="leading-relaxed">
            {t(
              '100% Privacy Guarantee: Zero consumer data is transmitted to or stored on our servers. Number validation happens strictly inside your browser before redirecting to FESCO’s official gateway.',
              'پرائیویسی گارنٹی: آپ کا کوئی بھی ذاتی یا بل ڈیٹا ہمارے سرور پر نہیں بھیجا جاتا۔ تمام تصدیق براؤزر میں ہوتی ہے جس کے بعد آپ آفیشل سرکاری گیٹ وے پر جاتے ہیں۔'
            )}
          </span>
        </div>
      </div>

      {/* Body Form */}
      <div className="p-5 sm:p-6 space-y-5">
        {/* Identifier Mode Switcher */}
        <div className="space-y-2">
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass">
            {t('Select Lookup Identifier Type', 'نمبر کی قسم منتخب کریں')}
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleModeSwitch('reference')}
              className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all min-h-[56px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal ${
                mode === 'reference'
                  ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                  : 'bg-white dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-xs sm:text-sm">
                  {t('14-Digit Reference No.', '14 ہندسوں کا ریفرنس نمبر')}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">
                  {t('Standard', 'معیاری')}
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 mt-1">
                {t('Printed in top-left box', 'بل کے اوپر بائیں خانے میں')}
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleModeSwitch('customer')}
              className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all min-h-[56px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal ${
                mode === 'customer'
                  ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                  : 'bg-white dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-xs sm:text-sm">
                  {t('10-Digit Customer ID', '10 ہندسوں کا کسٹمر آئی ڈی')}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-500/20 text-slate-300">
                  {t('Alternative', 'متبادل')}
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 mt-1">
                {t('Printed near consumer name', 'صارف کے نام کے ساتھ')}
              </span>
            </button>
          </div>
        </div>

        {/* Input & Form */}
        <form onSubmit={handleValidate} className="space-y-3">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass">
                {mode === 'reference'
                  ? t('Enter 14-Digit FESCO Reference Number', '14 ہندسوں کا فیسکو ریفرنس نمبر درج کریں')
                  : t('Enter 10-Digit FESCO Customer ID', '10 ہندسوں کا کسٹمر آئی ڈی درج کریں')}
              </label>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                {mode === 'reference' ? 'REQUIRES 14 DIGITS' : 'REQUIRES 10 DIGITS'}
              </span>
            </div>

            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9\s]*"
                  maxLength={requiredLength + 4}
                  placeholder={
                    mode === 'reference'
                      ? t('e.g. 13 12345 6789012', 'مثال: 13 12345 6789012')
                      : t('e.g. 1234567890', 'مثال: 1234567890')
                  }
                  value={inputVal}
                  onChange={(e) => {
                    setInputVal(e.target.value);
                    setErrorMsg(null);
                    setIsValidated(false);
                  }}
                  className="w-full ps-4 pe-16 py-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-doc-ink dark:text-white font-mono text-base font-bold placeholder-slate-400 focus:outline-none focus:border-doc-brass focus:ring-1 focus:ring-doc-brass transition tracking-wider"
                  aria-label={mode === 'reference' ? 'FESCO Reference Number' : 'FESCO Customer ID'}
                />
                <div className="absolute end-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400">
                  <span className={cleanDigits.length === requiredLength ? 'text-emerald-500 font-bold' : ''}>
                    {cleanDigits.length}
                  </span>
                  /{requiredLength}
                </div>
              </div>

              {/* Instant Copy Button */}
              {cleanDigits.length > 0 && (
                <button
                  type="button"
                  onClick={handleCopy}
                  title={t('Copy number to clipboard', 'کلپ بورڈ پر کاپی کریں')}
                  className="px-4 py-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-doc-brass hover:text-doc-ink dark:hover:text-white active:scale-95 transition-all duration-150 flex items-center gap-1.5 text-xs font-mono font-bold shrink-0 select-none"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500 animate-checkmarkPop" />
                      <span className="hidden sm:inline text-emerald-600 font-bold">{t('COPIED', 'کاپی شدہ')}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-doc-brass" />
                      <span className="hidden sm:inline">{t('COPY', 'کاپی')}</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Helper Info & Diagram Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <p className="text-[11px] text-slate-600 dark:text-slate-400 font-sans flex items-center gap-1">
                <Info className="w-3.5 h-3.5 text-doc-brass shrink-0" />
                <span>
                  {mode === 'reference'
                    ? t(
                        'FESCO bills typically begin with batch code 13 (Faisalabad division).',
                        'فیسکو بل عام طور پر بیچ کوڈ 13 (فیصل آباد ریجن) سے شروع ہوتے ہیں۔'
                      )
                    : t(
                        '10-digit Customer ID is printed in the consumer detail box.',
                        '10 ہندسوں کا کسٹمر آئی ڈی بل کے کوائف والے خانے میں درج ہوتا ہے۔'
                      )}
                </span>
              </p>
              <button
                type="button"
                onClick={() => setShowDiagram(!showDiagram)}
                className="text-[11px] font-mono text-doc-seal dark:text-amber-400 hover:underline flex items-center gap-1 shrink-0 font-semibold"
              >
                <HelpCircle className="w-3 h-3" />
                <span>
                  {showDiagram
                    ? t('Hide Bill Diagram', 'تصویر چھپائیں')
                    : t('Where to find on paper bill?', 'کاغذی بل پر یہ کہاں ہے؟')}
                </span>
              </button>
            </div>
          </div>

          {/* Interactive Visual Paper Bill Reference Diagram */}
          {showDiagram && (
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-slate-300 dark:border-slate-700 pb-2">
                <p className="font-mono text-xs font-bold text-doc-ink dark:text-white flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-doc-brass" />
                  <span>{t('FESCO Physical Bill Sample Layout', 'فیسکو کاغذی بل کا خاکہ')}</span>
                </p>
                <span className="text-[10px] font-mono text-slate-500 uppercase">2026 Format</span>
              </div>

              {/* Mockup Bill Header */}
              <div className="p-3 bg-white dark:bg-slate-950 rounded-lg border border-slate-300 dark:border-slate-800 text-[11px] font-mono space-y-2.5">
                <div className="flex justify-between items-center border-b border-dashed border-slate-300 dark:border-slate-800 pb-2">
                  <div>
                    <span className="font-serif font-black text-xs text-doc-seal dark:text-red-400 block">
                      FAISALABAD ELECTRIC SUPPLY COMPANY (FESCO)
                    </span>
                    <span className="text-[9px] text-slate-500">ELECTRICITY CONSUMPTION BILL</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold">
                    ACTIVE
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {/* Reference Number Box (Highlighted) */}
                  <div
                    className={`p-2.5 rounded-lg border-2 transition-all ${
                      mode === 'reference'
                        ? 'bg-amber-100 dark:bg-amber-950/70 border-amber-500 ring-2 ring-amber-400/40 text-amber-950 dark:text-amber-200'
                        : 'bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <p className="text-[9px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 flex items-center justify-between">
                      <span>★ 14-DIGIT REFERENCE NO.</span>
                      {mode === 'reference' && <span className="text-[8px] font-bold">SELECTED</span>}
                    </p>
                    <p className="font-mono font-bold text-xs sm:text-sm tracking-wider mt-0.5">
                      13 12345 6789012 U
                    </p>
                    <p className="text-[9px] text-slate-500 dark:text-slate-400 mt-1">
                      (2-digit Batch + 5-digit Subdiv + 7-digit Account + Suffix)
                    </p>
                  </div>

                  {/* Customer ID Box (Highlighted) */}
                  <div
                    className={`p-2.5 rounded-lg border-2 transition-all ${
                      mode === 'customer'
                        ? 'bg-amber-100 dark:bg-amber-950/70 border-amber-500 ring-2 ring-amber-400/40 text-amber-950 dark:text-amber-200'
                        : 'bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <p className="text-[9px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 flex items-center justify-between">
                      <span>★ 10-DIGIT CUSTOMER ID</span>
                      {mode === 'customer' && <span className="text-[8px] font-bold">SELECTED</span>}
                    </p>
                    <p className="font-mono font-bold text-xs sm:text-sm tracking-wider mt-0.5">
                      1234567890
                    </p>
                    <p className="text-[9px] text-slate-500 dark:text-slate-400 mt-1">
                      (Unique 10-digit consumer account identity)
                    </p>
                  </div>
                </div>

                <div className="p-2 rounded bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-[10px] flex items-center justify-between">
                  <span>Consumer: <strong>MUHAMMAD ALI</strong></span>
                  <span>Tariff: <strong>A-1a (01) Dom</strong></span>
                  <span>District: <strong>Faisalabad</strong></span>
                </div>
              </div>
            </div>
          )}

          {/* Validate Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 rounded-xl bg-doc-ink hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 active:scale-[0.99] text-white font-mono font-bold text-sm flex items-center justify-center gap-2 transition-all duration-150 shadow-md min-h-[48px] border border-doc-brass/40"
          >
            <FileText className="w-4 h-4 text-doc-brass" />
            <span>
              {mode === 'reference'
                ? t('VERIFY 14-DIGIT REFERENCE NUMBER FORMAT', '14 ہندسوں کے ریفرنس نمبر کی تصدیق کریں')
                : t('VERIFY 10-DIGIT CUSTOMER ID FORMAT', '10 ہندسوں کے کسٹمر آئی ڈی کی تصدیق کریں')}
            </span>
          </button>
        </form>

        {/* Error Notice */}
        {errorMsg && (
          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200 animate-fadeIn space-y-1">
            <div className="flex items-center gap-2 font-mono font-bold text-xs">
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>{t('Format Check Notice', 'فارمیٹ کی غلطی')}</span>
            </div>
            <p className="text-xs font-sans pl-6 leading-relaxed">{errorMsg}</p>
          </div>
        )}

        {/* Validated Result & Official Deep-Link Gateway */}
        {isValidated && !errorMsg && (
          <div className="p-5 rounded-2xl bg-doc-ink border-2 border-doc-brass/60 space-y-4 text-white relative overflow-hidden animate-resultPopIn font-sans">
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-48 h-48 bg-doc-brass/10 rounded-full blur-2xl pointer-events-none"
            />

            {/* Header Result */}
            <div className="flex items-center justify-between border-b border-doc-brass/30 pb-3 gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-doc-brass font-bold uppercase tracking-wider">
                    {t('Format Verified Successfully', 'فارمیٹ کامیابی سے چیک ہو گیا')}
                  </p>
                  <p className="font-mono font-bold text-base text-white tracking-wider">
                    {cleanDigits}
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/30">
                {cleanDigits.length} DIGITS VALID
              </span>
            </div>

            {/* Step-by-step guidance */}
            <div className="space-y-2 text-xs text-slate-300">
              <p className="font-bold text-white text-sm flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{t('Next Steps on the Official FESCO Portal:', 'سرکاری پورٹل پر بل حاصل کرنے کا طریقہ:')}</span>
              </p>
              <div className="space-y-2 font-sans">
                <div className="flex items-start gap-2 bg-slate-900/70 p-2.5 rounded-lg border border-slate-800">
                  <span className="w-5 h-5 rounded bg-doc-brass text-doc-ink font-mono font-black text-xs flex items-center justify-center shrink-0">
                    1
                  </span>
                  <p className="leading-snug">
                    {t(
                      'Click "COPY NUMBER" below so the verified number is ready on your clipboard.',
                      'نیچے "نمبر کاپی کریں" پر کلک کریں تاکہ نمبر کلپ بورڈ میں محفوظ ہو جائے۔'
                    )}
                  </p>
                </div>
                <div className="flex items-start gap-2 bg-slate-900/70 p-2.5 rounded-lg border border-slate-800">
                  <span className="w-5 h-5 rounded bg-doc-brass text-doc-ink font-mono font-black text-xs flex items-center justify-center shrink-0">
                    2
                  </span>
                  <p className="leading-snug">
                    {t(
                      'Click the golden button to open the official government duplicate bill portal (bill.pitc.com.pk/fescobill).',
                      'سنہری بٹن پر کلک کر کے سرکاری ڈپلیکیٹ بل پورٹل (bill.pitc.com.pk/fescobill) کھولیں۔'
                    )}
                  </p>
                </div>
                <div className="flex items-start gap-2 bg-slate-900/70 p-2.5 rounded-lg border border-slate-800">
                  <span className="w-5 h-5 rounded bg-doc-brass text-doc-ink font-mono font-black text-xs flex items-center justify-center shrink-0">
                    3
                  </span>
                  <p className="leading-snug">
                    {t(
                      'Paste your number into the search field, submit, and instantly view or print your official PDF bill with scannable barcode.',
                      'سرکاری صفحے پر نمبر پیسٹ کریں اور بارکوڈ والا اصل پی ڈی ایف بل فوری ڈاؤن لوڈ یا پرنٹ کریں۔'
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-1">
              <button
                type="button"
                onClick={handleCopy}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono font-bold text-xs flex items-center justify-center gap-2 transition border border-slate-700 select-none min-h-[42px]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">
                      {t('COPIED TO CLIPBOARD!', 'کلپ بورڈ پر کاپی ہو گیا!')}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-doc-brass" />
                    <span>COPY {cleanDigits} TO CLIPBOARD</span>
                  </>
                )}
              </button>

              {/* Direct Deep-link Button to PITC FESCO portal */}
              <a
                href="http://bill.pitc.com.pk/fescobill/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-doc-brass to-amber-500 hover:from-amber-500 hover:to-amber-400 text-doc-ink font-mono font-bold text-sm flex items-center justify-center gap-2 transition shadow-lg min-h-[48px]"
              >
                <ExternalLink className="w-4 h-4 shrink-0" />
                <span>{t('OPEN OFFICIAL FESCO BILL PORTAL (PITC) →', 'آفیشل فیسکو بل پورٹل کھولیں ←')}</span>
              </a>

              <p className="text-[10px] text-slate-400 text-center font-mono pt-1">
                Official Government Gateway: <span className="text-doc-brass">http://bill.pitc.com.pk/fescobill/</span>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer Helplines */}
      <div className="px-5 py-3.5 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-sans">
        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
          <Phone className="w-3.5 h-3.5 text-doc-brass" />
          <span>
            {t('24/7 Helpline:', '24 گھنٹے ہیلپ لائن:')}{' '}
            <strong className="text-doc-ink dark:text-white font-mono">118</strong> /{' '}
            <strong className="text-doc-ink dark:text-white font-mono">0800-66554</strong>
          </span>
        </div>
        <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
          <span>SMS Alerts: <strong>8118</strong></span>
        </div>
      </div>
    </div>
  );
};
