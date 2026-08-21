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
  Smartphone,
  Globe,
  Info,
  CheckCircle2,
  Lock,
  ArrowRight,
  TrendingDown,
  Building2,
  Car,
  Landmark,
  BadgePercent
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

export const FbrActiveTaxpayerHelper: React.FC = () => {
  const { t } = useLanguage();

  const [cnicInput, setCnicInput] = useState('');
  const [copiedCnic, setCopiedCnic] = useState(false);
  const [copiedSms, setCopiedSms] = useState(false);
  const [validated, setValidated] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'online' | 'sms'>('online');

  // Format raw digits to CNIC pattern: XXXXX-XXXXXXX-X
  const formatCnic = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 13);
    if (digits.length <= 5) return digits;
    if (digits.length <= 12) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
    return `${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12, 13)}`;
  };

  const cleanCnic = cnicInput.replace(/\D/g, '');
  const formattedCnic = formatCnic(cnicInput);
  const smsMessageBody = `ATL ${cleanCnic}`;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const formatted = formatCnic(rawVal);
    setCnicInput(formatted);
    setValidated(false);
    setErrorMsg(null);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();

    if (!cleanCnic) {
      setErrorMsg(
        t(
          'Please enter your 13-digit CNIC to verify format and check Active Taxpayer status.',
          'ایکٹو ٹیکس پیئر سٹیٹس چیک کرنے کے لیے اپنا 13 ہندسوں کا شناختی کارڈ درج کریں۔'
        )
      );
      setValidated(false);
      return;
    }

    if (cleanCnic.length !== 13) {
      setErrorMsg(
        t(
          `CNIC must be exactly 13 digits. You entered ${cleanCnic.length} digits.`,
          `شناختی کارڈ کے پورے 13 ہندسے ہونے چاہئیں۔ آپ نے ${cleanCnic.length} ہندسے درج کیے۔`
        )
      );
      setValidated(false);
      return;
    }

    // Basic sanity check on first digit (1-7 for Pakistan provinces/territories)
    const firstDigit = parseInt(cleanCnic[0], 10);
    if (firstDigit < 1 || firstDigit > 7) {
      setErrorMsg(
        t(
          'Invalid CNIC initial province code. CNICs in Pakistan begin with digits 1 through 7.',
          'شناختی کارڈ کا پہلا ہندسہ درست نہیں۔ پاکستانی شناختی کارڈ 1 تا 7 سے شروع ہوتے ہیں۔'
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
    const textToCopy = formattedCnic;
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopiedCnic(true);
        setTimeout(() => setCopiedCnic(false), 2500);
      });
    }
  };

  const handleCopySms = () => {
    if (!cleanCnic) return;
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(smsMessageBody).then(() => {
        setCopiedSms(true);
        setTimeout(() => setCopiedSms(false), 2500);
      });
    }
  };

  return (
    <div className="my-8 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-doc-ink overflow-hidden shadow-xl">
      {/* Header Bar */}
      <div className="px-5 py-4 bg-doc-ink text-white flex items-center justify-between gap-3 border-b border-doc-brass/20">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-doc-brass shrink-0" />
          <div>
            <h3 className="font-serif font-bold text-sm text-white leading-tight">
              {t(
                'Official FBR Active Taxpayer (ATL) Status Helper 2026',
                'ایف بی آر ایکٹو ٹیکس پیئر (فائلر) سٹیٹس ہیلپر 2026'
              )}
            </h3>
            <p className="text-[10px] text-slate-400 font-mono">
              {t(
                'Client-Side CNIC Validator • 9966 SMS Generator • Official Iris Portal Direct',
                'شناختی کارڈ تصدیق • 9966 ایس ایم ایس کوڈ • سرکاری آئرس پورٹل رسائی'
              )}
            </p>
          </div>
        </div>
        <InteractiveToolBadge labelEn="FBR TAX HELPER" labelUr="ایف بی آر ہیلپر" variant="gold" />
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Why Active Taxpayer Status Matters Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="p-3 rounded-xl bg-amber-500/10 dark:bg-slate-800/80 border border-doc-brass/30 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-doc-brass font-mono text-[11px] font-bold">
              <Building2 className="w-3.5 h-3.5" />
              <span>{t('Property Tax', 'پراپرٹی ٹیکس')}</span>
            </div>
            <p className="text-xs font-bold text-doc-ink dark:text-white mt-1">
              {t('3% vs 10.5%+ WHT', '3 فیصد بمقابلہ 10.5%+')}
            </p>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
              {t('On purchase/sale', 'خرید و فروخت پر')}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-emerald-500/10 dark:bg-slate-800/80 border border-emerald-500/30 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-mono text-[11px] font-bold">
              <Car className="w-3.5 h-3.5" />
              <span>{t('Vehicle Purchase', 'گاڑی کی خریداری')}</span>
            </div>
            <p className="text-xs font-bold text-doc-ink dark:text-white mt-1">
              {t('Up to 66% Lower Tax', '66 فیصد تک کم ٹیکس')}
            </p>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
              {t('Excise registration', 'رجسٹریشن پر')}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-blue-500/10 dark:bg-slate-800/80 border border-blue-500/30 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-mono text-[11px] font-bold">
              <Landmark className="w-3.5 h-3.5" />
              <span>{t('Bank Cash / Profits', 'بینک کیش و منافع')}</span>
            </div>
            <p className="text-xs font-bold text-doc-ink dark:text-white mt-1">
              {t('15% vs 30% Profit Tax', '15 فیصد بمقابلہ 30 فیصد')}
            </p>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
              {t('No cash withdrawal tax', 'کیش پر ٹیکس چھوٹ')}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-purple-500/10 dark:bg-slate-800/80 border border-purple-500/30 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400 font-mono text-[11px] font-bold">
              <BadgePercent className="w-3.5 h-3.5" />
              <span>{t('Prize Bonds / Shares', 'پرائز بانڈ و شیئرز')}</span>
            </div>
            <p className="text-xs font-bold text-doc-ink dark:text-white mt-1">
              {t('15% vs 30% WHT', '15 فیصد بمقابلہ 30 فیصد')}
            </p>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
              {t('On winnings & div.', 'انعامات و منافع پر')}
            </span>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleVerify} className="space-y-3">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="fbr-cnic-input"
                className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass"
              >
                {t(
                  'Enter 13-Digit CNIC Number (Citizen / Filer):',
                  '13 ہندسوں کا شناختی کارڈ نمبر درج کریں (شہری یا فائلر):'
                )}
              </label>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                {t('FORMAT: 12345-1234567-1', 'فارمیٹ: 1-1234567-12345')}
              </span>
            </div>

            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  id="fbr-cnic-input"
                  type="text"
                  inputMode="numeric"
                  maxLength={15}
                  value={formattedCnic}
                  onChange={handleInputChange}
                  placeholder="35202-1234567-1"
                  className="w-full pl-4 pr-16 py-3 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-doc-ink dark:text-white font-mono text-base font-bold placeholder-slate-400 focus:outline-none focus:border-doc-seal tracking-wider shadow-inner"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400">
                  <span className={cleanCnic.length === 13 ? 'text-emerald-500 font-bold' : ''}>
                    {cleanCnic.length}
                  </span>
                  /13
                </div>
              </div>

              {cleanCnic.length > 0 && (
                <button
                  type="button"
                  id="btn-copy-cnic-top"
                  onClick={handleCopyCnic}
                  className="px-3.5 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-doc-brass font-mono font-bold text-xs shrink-0 flex items-center gap-1.5 transition"
                  title={t('Copy CNIC to clipboard', 'شناختی کارڈ کاپی کریں')}
                >
                  {copiedCnic ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-doc-brass" />
                  )}
                  <span className="hidden sm:inline">{copiedCnic ? 'COPIED' : 'COPY CNIC'}</span>
                </button>
              )}
            </div>
          </div>

          <button
            type="submit"
            id="btn-validate-cnic"
            className="w-full py-3.5 px-4 rounded-xl bg-doc-ink hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-mono font-bold text-sm flex items-center justify-center gap-2 transition shadow-md min-h-[48px] border border-doc-brass/40"
          >
            <Search className="w-4 h-4 text-doc-brass" />
            <span>
              {t('VALIDATE CNIC & PREPARE ATL VERIFICATION', 'شناختی کارڈ فارمیٹ چیک کریں اور تصدیق کا طریقہ دیکھیں')}
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
                    {t('CNIC Format Validated (13 Digits)', 'شناختی کارڈ فارمیٹ درست ہے')}
                  </p>
                  <p className="font-mono font-bold text-lg text-white tracking-widest">
                    {formattedCnic}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  id="btn-copy-cnic-result"
                  onClick={handleCopyCnic}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs font-mono font-bold flex items-center gap-1.5 transition text-slate-200"
                >
                  {copiedCnic ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-doc-brass" />}
                  <span>{copiedCnic ? t('COPIED!', 'کاپی ہو گیا!') : t('Copy CNIC', 'شناختی کارڈ کاپی')}</span>
                </button>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/30">
                  READY
                </span>
              </div>
            </div>

            {/* Verification Method Tabs */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 p-1 bg-slate-900 rounded-xl border border-slate-800">
                <button
                  type="button"
                  id="tab-online-portal"
                  onClick={() => setActiveTab('online')}
                  className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-2 transition ${
                    activeTab === 'online'
                      ? 'bg-doc-brass text-doc-ink shadow-md font-extrabold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  <span>{t('Method 1: Online Iris Portal (Instant)', 'طریقہ 1: آفیشل آئرس پورٹل (آن لائن)')}</span>
                </button>

                <button
                  type="button"
                  id="tab-sms-portal"
                  onClick={() => setActiveTab('sms')}
                  className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-2 transition ${
                    activeTab === 'sms'
                      ? 'bg-doc-brass text-doc-ink shadow-md font-extrabold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>{t('Method 2: SMS to 9966 (No Internet)', 'طریقہ 2: 9966 ایس ایم ایس (بغیر انٹرنیٹ)')}</span>
                </button>
              </div>

              {/* TAB 1: ONLINE IRIS PORTAL */}
              {activeTab === 'online' && (
                <div className="space-y-4 pt-1 animate-fadeIn">
                  <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800 space-y-3">
                    <p className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Globe className="w-4 h-4 text-emerald-400" />
                      <span>{t('How to verify Active Taxpayer Status on FBR Iris Portal:', 'ایف بی آر آئرس پورٹل پر چیک کرنے کا طریقہ:')}</span>
                    </p>
                    <ol className="text-xs text-slate-300 space-y-2 list-decimal list-inside leading-relaxed">
                      <li>
                        {t('Your CNIC ', 'آپ کا شناختی کارڈ ')}
                        <strong className="font-mono text-doc-brass">{cleanCnic}</strong>
                        {t(' has been validated. Click "Copy CNIC" if needed.', ' تصدیق شدہ ہے۔ آپ "Copy CNIC" کا بٹن دبا سکتے ہیں۔')}
                      </li>
                      <li>
                        {t(
                          'Click the gold "Check on FBR Portal" button below to open the official FBR Iris portal (https://iris.fbr.gov.pk/) in a new tab.',
                          'نیچے دیے گئے سنہری بٹن "Check on FBR Portal" پر کلک کریں تاکہ نیا ٹیب ایف بی آر کی آفیشل ویب سائٹ کھولے۔'
                        )}
                      </li>
                      <li>
                        {t(
                          'Select "Active Taxpayer List (Income Tax)", paste your 13-digit CNIC into the Registration No field, enter the Captcha code, and click "Verify".',
                          'پورٹل پر رجسٹریشن نمبر میں اپنا 13 ہندسوں کا شناختی کارڈ پیسٹ کریں، کیپچا کوڈ درج کریں اور "Verify" کا بٹن دبائیں۔'
                        )}
                      </li>
                      <li>
                        {t(
                          'The portal displays your registration date, ATL Status (Active / Inactive), and surcharge status.',
                          'پورٹل آپ کا نام، تاریخ رجسٹریشن اور ایکٹو یا نان ایکٹو سٹیٹس ظاہر کر دے گا۔'
                        )}
                      </li>
                    </ol>
                  </div>

                  {/* Primary CTA button */}
                  <a
                    href="https://iris.fbr.gov.pk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="btn-fbr-portal"
                    className="w-full py-4 px-5 rounded-xl bg-gradient-to-r from-doc-brass via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-doc-ink font-mono font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 transition shadow-xl min-h-[52px]"
                  >
                    <span>{t('Check on FBR Portal (iris.fbr.gov.pk) →', 'ایف بی آر پورٹل پر ایکٹو سٹیٹس چیک کریں ←')}</span>
                    <ExternalLink className="w-5 h-5 shrink-0" />
                  </a>
                </div>
              )}

              {/* TAB 2: SMS VERIFICATION (9966) */}
              {activeTab === 'sms' && (
                <div className="space-y-4 pt-1 animate-fadeIn">
                  <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800 space-y-3">
                    <p className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Smartphone className="w-4 h-4 text-emerald-400" />
                      <span>{t('FBR 9966 SMS Verification Procedure:', 'ایف بی آر 9966 ایس ایم ایس طریقہ کار:')}</span>
                    </p>

                    <div className="p-3 bg-slate-950 rounded-lg border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">
                          {t('SMS Recipient / Shortcode:', 'ایس ایم ایس بھیجنے کا نمبر:')}
                        </span>
                        <span className="text-lg font-mono font-extrabold text-doc-brass">9966</span>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">
                          {t('SMS Text Body:', 'میسج کا متن:')}
                        </span>
                        <span className="text-sm font-mono font-bold text-emerald-400">{smsMessageBody}</span>
                      </div>

                      <button
                        type="button"
                        id="btn-copy-sms-body"
                        onClick={handleCopySms}
                        className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs font-mono font-bold text-white flex items-center justify-center gap-1.5 transition shrink-0"
                      >
                        {copiedSms ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-doc-brass" />}
                        <span>{copiedSms ? t('SMS COPIED', 'کاپی ہو گیا') : t('COPY SMS TEXT', 'ایس ایم ایس کاپی')}</span>
                      </button>
                    </div>

                    <div className="text-xs text-slate-300 space-y-1.5 leading-relaxed pt-1">
                      <p className="font-semibold text-white">
                        {t('Steps on your mobile phone:', 'اپنے موبائل پر مراحل:')}
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-slate-300">
                        <li>
                          {t('Open your mobile SMS messaging app.', 'اپنے موبائل میں میسجز ایپ کھولیں۔')}
                        </li>
                        <li>
                          {t('Send message: ', 'یہ میسج لکھیں: ')}
                          <code className="px-1.5 py-0.5 rounded bg-slate-800 text-doc-brass font-mono font-bold">
                            {smsMessageBody}
                          </code>
                          {t(' to ', ' اور بھیجیں ')}
                          <strong className="text-white font-mono">9966</strong>.
                        </li>
                        <li>
                          {t('Standard SMS charges (~PKR 2 + tax) apply.', 'معمولی ایس ایم ایس چارجز لاگو ہوں گے۔')}
                        </li>
                        <li>
                          {t('FBR will reply immediately with: "ATL Status: Active" or "ATL Status: Inactive" along with registration date.', 'ایف بی آر فوراً جوابی میسج میں ایکٹو یا نان ایکٹو سٹیٹس اور تاریخ بھیجے گا۔')}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <a
                    href={`sms:9966?body=${encodeURIComponent(smsMessageBody)}`}
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-sm flex items-center justify-center gap-2 transition shadow-md min-h-[48px]"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>{t('Open SMS App with 9966 Template →', 'موبائل پر 9966 ایس ایم ایس کھولیں ←')}</span>
                  </a>
                </div>
              )}
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
              '100% Privacy Guarantee: CNIC is processed client-side only and never recorded or transmitted.',
              '100٪ رازداری کی ضمانت: شناختی کارڈ صرف براؤزر میں پراسیس ہوتا ہے اور کہیں محفوظ نہیں کیا جاتا۔'
            )}
          </span>
        </span>
        <span className="font-mono text-[10px] text-slate-500">FBR ATL VERIFICATION 2026</span>
      </div>
    </div>
  );
};
