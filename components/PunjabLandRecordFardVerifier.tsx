'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Search,
  ExternalLink,
  Check,
  Copy,
  AlertCircle,
  FileCheck2,
  Building,
  Smartphone,
  Globe,
  Info,
  CheckCircle2,
  Lock,
  MapPin,
  FileText,
  BadgeCheck,
  Download,
  HelpCircle
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

export const PunjabLandRecordFardVerifier: React.FC = () => {
  const { t } = useLanguage();

  const [cnicInput, setCnicInput] = useState('');
  const [khewatInput, setKhewatInput] = useState('');
  const [fardType, setFardType] = useState<'baraye-malkiat' | 'baraye-baye' | 'baraye-zamanat'>('baraye-malkiat');
  const [copiedCnic, setCopiedCnic] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);
  const [validated, setValidated] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Format raw digits to CNIC pattern: XXXXX-XXXXXXX-X
  const formatCnic = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 13);
    if (digits.length <= 5) return digits;
    if (digits.length <= 12) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
    return `${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12, 13)}`;
  };

  const cleanCnic = cnicInput.replace(/\D/g, '');
  const formattedCnic = formatCnic(cnicInput);
  const cleanKhewat = khewatInput.trim();

  const handleCnicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const formatted = formatCnic(rawVal);
    setCnicInput(formatted);
    setValidated(false);
    setErrorMsg(null);
  };

  const handleKhewatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKhewatInput(e.target.value);
    setValidated(false);
    setErrorMsg(null);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();

    if (!cleanCnic) {
      setErrorMsg(
        t(
          'Please enter your 13-digit CNIC to verify land record credentials.',
          'اراضی ریکارڈ تصدیق کے لیے اپنا 13 ہندسوں کا قومی شناختی کارڈ نمبر درج کریں۔'
        )
      );
      setValidated(false);
      return;
    }

    if (cleanCnic.length !== 13) {
      setErrorMsg(
        t(
          `CNIC must be exactly 13 digits. You entered ${cleanCnic.length} digits.`,
          `شناختی کارڈ کے پورے 13 ہندسے ہونے لازمی ہیں۔ آپ نے ${cleanCnic.length} ہندسے درج کیے۔`
        )
      );
      setValidated(false);
      return;
    }

    const firstDigit = parseInt(cleanCnic[0], 10);
    if (firstDigit < 1 || firstDigit > 7) {
      setErrorMsg(
        t(
          'Invalid CNIC province initial digit. Pakistani CNICs begin with digits 1 through 7 (e.g. 3 for Punjab).',
          'شناختی کارڈ کا پہلا ہندسہ درست نہیں۔ پاکستانی شناختی کارڈ 1 تا 7 سے شروع ہوتے ہیں (پنجاب کے لیے عموماً 3)۔'
        )
      );
      setValidated(false);
      return;
    }

    if (cleanKhewat && !/^[\d\/\-\s]+$/.test(cleanKhewat)) {
      setErrorMsg(
        t(
          'Khewat / Khatooni number should only contain digits and valid separators like / or - (e.g. 142 or 45/2).',
          'کھوٹ یا کھتونی نمبر میں صرف ہندسے اور علامت / یا - درج کریں (مثلاً 142 یا 45/2)۔'
        )
      );
      setValidated(false);
      return;
    }

    setErrorMsg(null);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setValidated(true);
    }, 200);
  };

  const handleCopyCnic = () => {
    if (!cleanCnic) return;
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(formattedCnic).then(() => {
        setCopiedCnic(true);
        setTimeout(() => setCopiedCnic(false), 2500);
      });
    }
  };

  const handleCopyAll = () => {
    if (!cleanCnic) return;
    const summaryText = cleanKhewat
      ? `CNIC: ${formattedCnic} | Khewat: ${cleanKhewat} | Fard Type: ${fardType}`
      : `CNIC: ${formattedCnic} | Fard Type: ${fardType}`;

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(summaryText).then(() => {
        setCopiedAll(true);
        setTimeout(() => setCopiedAll(false), 2500);
      });
    }
  };

  return (
    <div className="my-8 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-doc-ink overflow-hidden shadow-xl">
      {/* Header Bar */}
      <div className="px-5 py-4 bg-doc-ink text-white flex items-center justify-between gap-3 border-b border-doc-brass/20">
        <div className="flex items-center gap-2.5">
          <Building className="w-5 h-5 text-doc-brass shrink-0" />
          <div>
            <h3 className="font-serif font-bold text-sm text-white leading-tight">
              {t(
                'Punjab Land Record Fard (Record of Rights) Verifier 2026',
                'پنجاب لینڈ ریکارڈ فرد ملکیت تصدیق و پورٹل رہنمائی 2026'
              )}
            </h3>
            <p className="text-[10px] text-slate-400 font-mono">
              {t(
                'Client-Side CNIC Validator • PLRA Official Portal Bridge • 100% Privacy Safe',
                'شناختی کارڈ و کھوٹ تصدیق • پنجاب لینڈ ریکارڈ اتھارٹی آفیشل پورٹل'
              )}
            </p>
          </div>
        </div>
        <InteractiveToolBadge labelEn="PROPERTY NAVIGATOR" labelUr="اراضی پورٹل" variant="gold" />
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Quick Explainer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-amber-500/10 dark:bg-slate-800/80 border border-doc-brass/30 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-doc-brass font-mono text-xs font-bold">
              <FileText className="w-4 h-4" />
              <span>{t('What is Fard?', 'فرد ملکیت کیا ہے؟')}</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-200 mt-1 leading-snug">
              {t(
                'Official government title deed proving legal land ownership, total area, and shares in Punjab.',
                'پنجاب میں زمین یا مکان کی قانونی ملکیت، رقبہ اور خسرہ نمبر کا مستند سرکاری ثبوت۔'
              )}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-500/10 dark:bg-slate-800/80 border border-emerald-500/30 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
              <BadgeCheck className="w-4 h-4" />
              <span>{t('Instant QR Verification', 'کیو آر کوڈ تصدیق')}</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-200 mt-1 leading-snug">
              {t(
                'Computerized digital Fard contains a unique barcode & QR code accepted by banks, courts, and registrars.',
                'کمپیوٹرائزڈ فرد پر کیو آر کوڈ ہوتا ہے جو بینکوں اور رجسٹری دفاتر میں فوری مانی جاتی ہے۔'
              )}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-blue-500/10 dark:bg-slate-800/80 border border-blue-500/30 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold">
              <Globe className="w-4 h-4" />
              <span>{t('PLRA Official Fee', 'سرکاری فیس')}</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-200 mt-1 leading-snug">
              {t(
                'Government fee is only PKR 150 – 250 payable via ePay Punjab, JazzCash, Easypaisa, or 1Link.',
                'سرکاری فیس صرف 150 تا 250 روپے ہے جو ای پے پنجاب یا بینک ایپ سے ادا ہو جاتی ہے۔'
              )}
            </p>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleVerify} className="space-y-4">
          {/* Fard Purpose Selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
              <FileCheck2 className="w-4 h-4 text-doc-brass" />
              <span>{t('Select Purpose of Fard (Record of Rights):', 'فرد کی قسم یا مقصد منتخب کریں:')}</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                {
                  id: 'baraye-malkiat',
                  nameEn: 'Fard Malkiat (Record/Proof)',
                  nameUr: 'فرد برائے ملکیت (ریکارڈ / ذاتی ثبوت)',
                  desc: 'For personal record, visa, or general proof',
                },
                {
                  id: 'baraye-baye',
                  nameEn: 'Fard Baraye Baye (Sale/Transfer)',
                  nameUr: 'فرد برائے بیع (خرید و فروخت / انتقال)',
                  desc: 'Mandatory for property sale or registry',
                },
                {
                  id: 'baraye-zamanat',
                  nameEn: 'Fard Baraye Zamanat (Bail/Loan)',
                  nameUr: 'فرد برائے ضمانت / بینک لون',
                  desc: 'For court surety bail or bank mortgage',
                },
              ].map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => {
                    setFardType(type.id as any);
                    setValidated(false);
                  }}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition min-h-[56px] ${
                    fardType === type.id
                      ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
                  }`}
                >
                  <span className="font-serif font-bold text-xs leading-tight">{t(type.nameEn, type.nameUr)}</span>
                  <span className="text-[10px] font-sans text-slate-400 mt-1">{type.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* CNIC and Optional Khewat Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* CNIC Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="plra-cnic-input"
                  className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass"
                >
                  {t('Landowner CNIC (13 Digits):', 'مالک زمین کا شناختی کارڈ نمبر:')}
                  <span className="text-doc-seal ml-1">*</span>
                </label>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                  {cleanCnic.length}/13
                </span>
              </div>

              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    id="plra-cnic-input"
                    type="text"
                    inputMode="numeric"
                    maxLength={15}
                    value={formattedCnic}
                    onChange={handleCnicChange}
                    placeholder="35202-1234567-1"
                    className="w-full pl-4 pr-10 py-3 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-doc-ink dark:text-white font-mono text-base font-bold placeholder-slate-400 focus:outline-none focus:border-doc-seal tracking-wider shadow-inner"
                  />
                  {cleanCnic.length === 13 && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  )}
                </div>

                {cleanCnic.length > 0 && (
                  <button
                    type="button"
                    id="btn-copy-cnic-plra"
                    onClick={handleCopyCnic}
                    className="px-3.5 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-doc-brass font-mono font-bold text-xs shrink-0 flex items-center gap-1.5 transition min-h-[44px]"
                    title={t('Copy CNIC to clipboard', 'شناختی کارڈ کاپی کریں')}
                  >
                    {copiedCnic ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-doc-brass" />}
                    <span className="hidden sm:inline">{copiedCnic ? 'COPIED' : 'COPY'}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Optional Khewat / Khatooni Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="plra-khewat-input"
                  className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass"
                >
                  {t('Khewat / Khatooni # (Optional):', 'کھوٹ یا کھتونی نمبر (اختیاری):')}
                </label>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                  {t('Optional search aid', 'تلاش میں مددگار')}
                </span>
              </div>

              <input
                id="plra-khewat-input"
                type="text"
                maxLength={12}
                value={khewatInput}
                onChange={handleKhewatChange}
                placeholder="e.g. 142 or 45/2"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-doc-ink dark:text-white font-mono text-base placeholder-slate-400 focus:outline-none focus:border-doc-seal shadow-inner"
              />
            </div>
          </div>

          <button
            type="submit"
            id="btn-validate-fard-inputs"
            className="w-full py-3.5 px-4 rounded-xl bg-doc-ink hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-mono font-bold text-sm flex items-center justify-center gap-2 transition shadow-md min-h-[48px] border border-doc-brass/40"
          >
            <Search className="w-4 h-4 text-doc-brass" />
            <span>
              {t('VALIDATE CREDENTIALS & PREPARE PLRA PORTAL ACCESS', 'شناختی کارڈ تصدیق کریں اور سرکاری پورٹل رسائی تیار کریں')}
            </span>
          </button>
        </form>

        {/* Error Notice */}
        {errorMsg && (
          <div
            role="alert"
            className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200 text-xs flex items-center gap-2 font-sans animate-fadeIn"
          >
            <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Loading Indicator */}
        {loading && (
          <div className="p-6 rounded-2xl border-2 border-dashed border-doc-brass/30 bg-doc-paper dark:bg-slate-900/60 animate-pulse space-y-3 font-sans">
            <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-1/3"></div>
            <div className="h-16 bg-slate-200 dark:bg-slate-800 rounded-xl w-full"></div>
          </div>
        )}

        {/* Verification Result & Guided Fallback Box */}
        {validated && !loading && (
          <div className="p-5 sm:p-6 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/60 space-y-5 animate-fadeIn font-sans shadow-2xl">
            {/* Header Status */}
            <div className="flex flex-wrap items-center justify-between border-b border-doc-brass/30 pb-3 gap-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-doc-brass font-bold uppercase tracking-wider">
                    {t('Credentials Validated For PLRA Search', 'سرکاری پورٹل کے لیے کوائف تیار ہیں')}
                  </p>
                  <p className="font-mono font-bold text-lg text-white tracking-wider">
                    {formattedCnic} {cleanKhewat ? `• Khewat: ${cleanKhewat}` : ''}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  id="btn-copy-all-plra"
                  onClick={handleCopyAll}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs font-mono font-bold flex items-center gap-1.5 transition text-slate-200 min-h-[44px]"
                >
                  {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-doc-brass" />}
                  <span>{copiedAll ? t('COPIED!', 'کاپی ہو گیا!') : t('Copy All Info', 'تمام کوائف کاپی')}</span>
                </button>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/30">
                  READY
                </span>
              </div>
            </div>

            {/* Guided Step-by-Step Instructions */}
            <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800 space-y-3">
              <p className="text-xs font-bold text-white flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>
                  {t(
                    'Step-by-Step Guide to Download Computerized Fard on Punjab Zameen Portal:',
                    'پنجاب زمین پورٹل پر آن لائن فرد حاصل کرنے کا آسان طریقہ:'
                  )}
                </span>
              </p>
              <ol className="text-xs text-slate-300 space-y-2.5 list-decimal list-inside leading-relaxed">
                <li>
                  {t(
                    'Click the gold button below to open the official Punjab Land Records Authority portal (https://www.punjab-zameen.gov.pk/).',
                    'نیچے دیے گئے سنہری بٹن پر کلک کریں تاکہ نیا ٹیب پنجاب لینڈ ریکارڈ اتھارٹی کا آفیشل پورٹل کھولے۔'
                  )}
                </li>
                <li>
                  {t(
                    'Select your property location: District (ضلع), Tehsil (تحصیل), and Mauza/Village (موضع).',
                    'اپنی زمین کا ضلع، تحصیل اور موضع یا گاؤں منتخب کریں۔'
                  )}
                </li>
                <li>
                  {t('Choose search method "By CNIC", paste your validated CNIC ', 'تلاش بذریعہ شناختی کارڈ منتخب کریں اور اپنا کاپی شدہ شناختی کارڈ ')}
                  <strong className="font-mono text-doc-brass">{cleanCnic}</strong>
                  {t(' (or search by Name / Khewat number).', ' درج کریں (یا کھوٹ نمبر سے تلاش کریں)۔')}
                </li>
                <li>
                  {t(
                    'Confirm ownership record details, generate PSID payment code, and pay PKR 150 – 250 fee via ePay Punjab, JazzCash, Easypaisa, or 1Link mobile banking.',
                    'اپنے نام کے ریکارڈ کی تصدیق کریں، پی ایس آئی ڈی چالان بنائیں اور 150 تا 250 روپے فیس ای پے یا بینک ایپ سے ادا کریں۔'
                  )}
                </li>
                <li>
                  {t(
                    'Instantly download and print your official Computerized Fard with digital QR verification code.',
                    'فوری طور پر کیو آر کوڈ اور بارکوڈ والی مستند کمپیوٹرائزڈ فرد ڈاؤن لوڈ اور پرنٹ کریں۔'
                  )}
                </li>
              </ol>
            </div>

            {/* Action Buttons: Direct Links to Official Portal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <a
                href="https://www.punjab-zameen.gov.pk/"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-plra-main-portal"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-doc-brass via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-doc-ink font-mono font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-xl min-h-[48px]"
              >
                <span>{t('Open Punjab Zameen Portal (Official) →', 'آفیشل پنجاب زمین پورٹل کھولیں ←')}</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>

              <a
                href="https://onlinefard.punjab-zameen.gov.pk/"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-plra-direct-fard"
                className="w-full py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition min-h-[48px]"
              >
                <span>{t('Direct Online Fard Service →', 'ڈائریکٹ آن لائن فرد سروس ←')}</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Footer Trust Guarantee */}
      <div className="px-5 py-3.5 bg-slate-50 dark:bg-slate-900/70 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 font-sans flex flex-wrap items-center justify-between gap-2">
        <span className="flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
          <span>
            {t(
              '100% Privacy Guarantee: CNIC & property details are processed locally in your browser and never logged or stored.',
              '100٪ رازداری کی ضمانت: شناختی کارڈ اور کھوٹ نمبر صرف آپ کے براؤزر میں پراسیس ہوتا ہے اور کہیں محفوظ نہیں ہوتا۔'
            )}
          </span>
        </span>
        <span className="font-mono text-[10px] text-slate-500">PLRA ZAMEEN SERVICES 2026</span>
      </div>
    </div>
  );
};
