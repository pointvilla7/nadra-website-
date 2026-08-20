'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Search,
  ExternalLink,
  Check,
  Copy,
  AlertCircle,
  FileCheck,
  Building,
  Info,
  Phone,
  Layers,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

const PSER_BENEFITS = [
  { nameEn: 'CM Punjab Kisan Card', nameUr: 'کسان کارڈ (1.5 لاکھ بلاسود زرعی قرضہ)', badge: 'Agriculture' },
  { nameEn: 'Himmat Card for Persons with Disabilities', nameUr: 'ہمت کارڈ (10,500 سہ ماہی وظیفہ)', badge: 'Special Persons' },
  { nameEn: 'Apni Chhat Apna Ghar Housing Scheme', nameUr: 'اپنی چھت اپنا گھر سکیم (15 لاکھ)', badge: 'Housing' },
  { nameEn: 'Honhaar Undergraduate Scholarship', nameUr: 'ہونہار سکالرشپ پروگرام', badge: 'Higher Education' },
  { nameEn: 'Punjab Rashan & Nigehban Relief', nameUr: 'نگہبان راشن ریلیف پیکج', badge: 'Food Subsidy' },
];

export const PserSurveyChecker: React.FC = () => {
  const { t } = useLanguage();

  const [cnicInput, setCnicInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [validated, setValidated] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const cleanCnic = cnicInput.replace(/[^0-9]/g, '');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();

    if (!cleanCnic) {
      setErrorMsg(t('Please enter your 13-digit CNIC to check PSER registration status.', 'پی ایس ای آر رجسٹریشن کے لیے 13 ہندسوں کا شناختی کارڈ درج کریں۔'));
      setValidated(false);
      return;
    }

    if (cleanCnic.length !== 13) {
      setErrorMsg(t(`CNIC must be exactly 13 digits. You entered ${cleanCnic.length} digits.`, `شناختی کارڈ کے پورے 13 ہندسے ہونے چاہئیں۔ آپ نے ${cleanCnic.length} ہندسے درج کیے۔`));
      setValidated(false);
      return;
    }

    setErrorMsg(null);
    setLoading(true);
    setResult(null);
    setValidated(false);

    setErrorMsg(null);
    setLoading(false);
    setResult({
      success: true,
      cnic: cleanCnic,
      status: 'VERIFICATION READY',
      officialUrl: 'https://pser.punjab.gov.pk/',
    });
    setValidated(true);
  };

  const handleCopy = () => {
    if (!cleanCnic) return;

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(cleanCnic).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  return (
    <div className="my-8 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-doc-ink overflow-hidden shadow-lg">
      {/* Header */}
      <div className="px-5 py-4 bg-doc-ink text-white flex items-center justify-between gap-3 border-b border-doc-brass/20">
        <div className="flex items-center gap-2.5">
          <Layers className="w-5 h-5 text-doc-brass shrink-0" />
          <div>
            <h3 className="font-serif font-bold text-sm text-white leading-tight">
              {t('Official PSER Survey Status & Eligibility Navigator 2026', 'پی ایس ای آر سروے رجسٹریشن و اہلیت گائیڈ 2026')}
            </h3>
            <p className="text-[10px] text-slate-400 font-mono">
              {t('Punjab Socio-Economic Registry (Kisan Card, Himmat Card & Housing)', 'پنجاب سوشو اکنامک رجسٹری — کسان، ہمت کارڈ و راشن')}
            </p>
          </div>
        </div>
        <InteractiveToolBadge labelEn="PSER DIRECTORY" labelUr="پی ایس ای آر پورٹل" variant="gold" />
      </div>

      <div className="p-5 sm:p-6 space-y-5">
        {/* Linked Schemes Showcase */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-doc-seal dark:text-red-400" />
            <span>{t('All 5 Government Schemes Requiring PSER Survey:', 'وہ تمام سرکاری سکیمیں جن کے لیے پی ایس ای آر لازمی ہے:')}</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {PSER_BENEFITS.map((b, i) => (
              <div key={i} className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-doc-paper/70 dark:bg-slate-800/60 flex flex-col justify-between">
                <span className="font-serif font-bold text-xs text-doc-ink dark:text-white leading-tight">{t(b.nameEn, b.nameUr)}</span>
                <span className="text-[9px] font-mono text-doc-brass mt-1 font-semibold">{b.badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleVerify} className="space-y-3">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass">
                {t('Head of Family CNIC Number (13 Digits):', 'سربراہ خاندان کا شناختی کارڈ نمبر:')}
              </label>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                REQUIRED FOR SURVEY
              </span>
            </div>

            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={15}
                  value={cnicInput}
                  onChange={(e) => {
                    setCnicInput(e.target.value);
                    setValidated(false);
                    setErrorMsg(null);
                  }}
                  placeholder="35202-1234567-1"
                  className="w-full pl-4 pr-16 py-3 rounded-xl bg-doc-paper dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-doc-ink dark:text-white font-mono text-base font-bold placeholder-slate-400 focus:outline-none focus:border-doc-seal tracking-wider"
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
                  onClick={handleCopy}
                  className="px-3.5 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-700 bg-doc-paper dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-doc-brass font-mono font-bold text-xs shrink-0 flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-doc-brass" />}
                  <span className="hidden sm:inline">{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-doc-ink hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-mono font-bold text-sm flex items-center justify-center gap-2 transition shadow-md min-h-[48px] border border-doc-brass/40"
          >
            <Search className="w-4 h-4 text-doc-brass" />
            <span>{t(`VERIFY CNIC FOR PSER SURVEY 2026`, `پی ایس ای آر سروے کے لیے شناختی کارڈ تصدیق کریں`)}</span>
          </button>
        </form>
        {/* Loading State */}
        {loading && (
          <div className="p-6 rounded-2xl border-2 border-dashed border-doc-brass/30 bg-doc-paper dark:bg-slate-900/60 animate-pulse space-y-3 font-sans">
            <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-1/4"></div>
            <div className="h-20 bg-slate-200 dark:bg-slate-800 rounded-xl w-full"></div>
          </div>
        )}

        {/* Verified & Guided Access */}
        {validated && result && !loading && (
          <div className="p-5 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/60 space-y-4 animate-fadeIn font-sans">
            {true ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-doc-brass/30 pb-3 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-doc-brass" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-doc-brass font-bold uppercase tracking-wider">
                        {t('CNIC Format Verified', 'شناختی کارڈ فارمیٹ درست ہے')}
                      </p>
                      <p className="font-mono font-bold text-base text-white tracking-wider">
                        {result.cnic}
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/30">
                    VERIFIED
                  </span>
                </div>

                <div className="text-xs text-slate-300 space-y-3 pt-2">
                  <p className="font-bold text-white text-sm flex items-center gap-1.5 border-b border-slate-800 pb-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>{t('Guide to Check PSER Survey Status:', 'سروے اہلیت معلوم کرنے کا طریقہ:')}</span>
                  </p>
                  <div className="grid grid-cols-1 gap-2.5">
                    <div className="flex items-start gap-2.5 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                      <span className="w-5 h-5 rounded-md bg-doc-brass text-doc-ink font-mono font-extrabold text-[11px] flex items-center justify-center shrink-0">1</span>
                      <p className="leading-normal">{t(`Copy CNIC number ${result.cnic} to check.`, `شناختی کارڈ نمبر ${result.cnic} کاپی کریں۔`)}</p>
                    </div>
                    <div className="flex items-start gap-2.5 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                      <span className="w-5 h-5 rounded-md bg-doc-brass text-doc-ink font-mono font-extrabold text-[11px] flex items-center justify-center shrink-0">2</span>
                      <p className="leading-normal">{t('Click the gold button below to open the official Punjab Socio-Economic Registry portal.', 'نیچے دیے گئے بٹن پر کلک کر کے آفیشل پنجاب سوشل اکنامک رجسٹری پورٹل کھولیں۔')}</p>
                    </div>
                    <div className="flex items-start gap-2.5 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                      <span className="w-5 h-5 rounded-md bg-doc-brass text-doc-ink font-mono font-extrabold text-[11px] flex items-center justify-center shrink-0">3</span>
                      <p className="leading-normal">{t('Log in with your credentials or check survey status directly to view your PMT score and housing details.', 'سرکاری پورٹل پر شناختی کارڈ کے ساتھ سائن ان کریں اور اپنا پی ایم ٹی اسکور اور سروے کی تفصیلات دیکھیں۔')}</p>
                    </div>
                  </div>
                </div>

                <a
                  href={result.officialUrl}
                  target="_blank"
                  rel="nofollow noopener"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-doc-brass to-amber-500 hover:from-amber-500 hover:to-amber-400 text-doc-ink font-mono font-bold text-sm flex items-center justify-center gap-2 transition shadow-lg min-h-[48px]"
                >
                  <span>{t('Check PSER Registry on Official Portal →', 'آفیشل پورٹل پر PSER سروے کی تفصیل چیک کریں ←')}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ) : null}
          </div>
        )}

        {/* Error Notice */}
        {errorMsg && (
          <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200 text-xs flex items-center gap-2 font-sans">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400 font-sans flex items-center justify-between">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>{t('Over 5,000 Union Council Registration Centers active across Punjab', 'پنجاب کی 5000 سے زائد یونین کونسلز میں رجسٹریشن کاؤنٹرز قائم ہیں')}</span>
        </span>
      </div>
    </div>
  );
};
