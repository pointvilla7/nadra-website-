'use client';

import React, { useState } from 'react';
import { ShieldCheck, ShieldAlert, CheckCircle2, ExternalLink, Search, Lock, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export const BispCheckWidget: React.FC = () => {
  const { t } = useLanguage();
  const [cnic, setCnic] = useState('');
  const [searched, setSearched] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCnic = cnic.replace(/[^0-9]/g, '');
    if (cleanCnic.length !== 13) {
      setErrorMsg(t('Please enter a valid 13-digit CNIC without hyphens (e.g. 3520212345671)', '13 ہندسوں کا درست قومی شناختی کارڈ نمبر درج کریں'));
      return;
    }
    setErrorMsg('');
    setLoading(true);
    setResult(null);
    setSearched(false);

    setErrorMsg('');
    setLoading(false);
    setResult({
      success: true,
      cnic: cleanCnic,
      status: 'VERIFICATION READY',
      officialUrl: 'https://8171.bisp.gov.pk/',
    });
    setSearched(true);
  };

  return (
    <div className="my-8 rounded-2xl glass-card border border-emerald-500/40 p-6 md:p-8 shadow-xl bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Anti-Scam Verification Trust Banner */}
      <div className="bg-amber-950/80 border border-amber-600/50 rounded-xl p-3.5 mb-6 text-amber-200 text-xs flex items-start gap-2.5">
        <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-amber-300">
            {t('CRITICAL ANTI-SCAM WARNING', 'جعلسازوں اور فراڈ سے ہوشیار رہیں')}
          </h4>
          <p className="mt-0.5 leading-relaxed">
            {t(
              'BISP & Benazir Kafaalat registration is 100% FREE! Never pay money to agents, WhatsApp groups, or unofficial websites. Official verification is ONLY done via 8171 SMS or 8171.bisp.gov.pk.',
              'بی ایس پی رجسٹریشن بالکل مفت ہے۔ کسی ایجنٹ، واٹس ایپ یا نجی شخص کو پیسے نہ دیں۔ آن لائن اہلیت صرف 8171 پورٹل کے ذریعے مفت چیک ہوتی ہے۔'
            )}
          </p>
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-emerald-800/60">
        <div>
          <h3 className="font-extrabold text-lg md:text-xl text-white flex items-center gap-2">
            <span>{t('BISP 8171 CNIC Eligibility Portal', 'بی ایس پی 8171 شناختی کارڈ اہلیت پورٹل')}</span>
            <span className="text-xs px-2 py-0.5 rounded gold-badge font-bold">2026</span>
          </h3>
          <p className="text-xs text-emerald-200 mt-1">
            {t('Verify Benazir Kafaalat (10,500 PKR) and Taleemi Wazaif payment status', 'بے نظیر کفالت 10,500 روپے اور تعلیمی وظائف کا جائزہ')}
          </p>
        </div>

        <div className="flex items-center gap-1 text-xs text-emerald-300 font-semibold px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-700">
          <Lock className="w-3.5 h-3.5 text-emerald-400" />
          <span>{t('SSL Encrypted Query', 'محفوظ سرور')}</span>
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={handleCheck} className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-emerald-200 mb-2">
            {t('Enter Beneficiary 13-Digit CNIC Number:', 'مستحق فرد کا 13 ہندسوں کا شناختی کارڈ نمبر درج کریں:')}
          </label>
          <div className="relative flex items-center">
            <input
              type="text"
              value={cnic}
              onChange={(e) => {
                setCnic(e.target.value);
                setErrorMsg('');
                setSearched(false);
                setResult(null);
              }}
              placeholder="3520212345671"
              className="w-full pl-4 pr-32 py-3.5 rounded-xl bg-slate-950/80 border border-emerald-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 text-base font-mono font-bold tracking-wider"
            />
            <button
              type="submit"
              className="absolute right-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1 transition shadow-glow-emerald"
            >
              <Search className="w-4 h-4" />
              <span>{t('Verify 8171', '8171 تصدیق')}</span>
            </button>
          </div>
          {errorMsg && (
            <p className="text-xs font-semibold text-rose-400 mt-2 flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>{errorMsg}</span>
            </p>
          )}
        </div>
      </form>

      {/* Loading State */}
      {loading && (
        <div className="mt-6 pt-6 border-t border-emerald-800 animate-pulse space-y-3 font-sans">
          <div className="h-4 bg-emerald-900/60 rounded w-1/4"></div>
          <div className="h-10 bg-emerald-900/60 rounded w-full"></div>
        </div>
      )}

      {/* Query Result Box */}
      {searched && result && !loading && (
        <div className="mt-6 pt-6 border-t border-emerald-800 animate-fadeIn space-y-4 font-sans text-white">
          <div className="p-5 rounded-2xl bg-slate-950 border-2 border-emerald-500/40 space-y-4 relative overflow-hidden font-sans">
            <div className="flex items-center justify-between border-b border-emerald-500/30 pb-3 gap-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                    {t('Format Verified', 'نمبر فارمیٹ درست ہے')}
                  </p>
                  <p className="font-mono font-bold text-base text-white tracking-wider">
                    {result.cnic}
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/30">
                CNIC OK
              </span>
            </div>

            <div className="text-xs text-slate-300 space-y-3 pt-2">
              <p className="font-bold text-white text-sm flex items-center gap-1.5 border-b border-emerald-800/40 pb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{t('Guide to Check BISP 8171 Status:', 'اهلیت معلوم کرنے کا طریقہ:')}</span>
              </p>
              <div className="grid grid-cols-1 gap-2.5">
                <div className="flex items-start gap-2.5 bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-800/40">
                  <span className="w-5 h-5 rounded-md bg-emerald-600 text-white font-mono font-extrabold text-[11px] flex items-center justify-center shrink-0">1</span>
                  <p className="leading-normal">{t(`Copy CNIC number ${result.cnic} to check.`, `شناختی کارڈ نمبر ${result.cnic} کو کاپی کریں۔`)}</p>
                </div>
                <div className="flex items-start gap-2.5 bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-800/40">
                  <span className="w-5 h-5 rounded-md bg-emerald-600 text-white font-mono font-extrabold text-[11px] flex items-center justify-center shrink-0">2</span>
                  <p className="leading-normal">{t('Click the button below to open the official government 8171 portal in a new tab.', 'نیچے دیے گئے بٹن پر کلک کر کے سرکاری 8171 پورٹل کو نئے ٹیب میں کھولیں۔')}</p>
                </div>
                <div className="flex items-start gap-2.5 bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-800/40">
                  <span className="w-5 h-5 rounded-md bg-emerald-600 text-white font-mono font-extrabold text-[11px] flex items-center justify-center shrink-0">3</span>
                  <p className="leading-normal">{t('Paste your CNIC, enter the 4-digit security code shown on the official page, and press Enter to view eligibility.', 'سرکاری پورٹل پر شناختی کارڈ درج کریں، تصویر میں دیا گیا 4 ہندسوں کا سیکیورٹی کوڈ لکھیں اور اہلیت معلوم کریں۔')}</p>
                </div>
              </div>
            </div>

            <a
              href="https://8171.bisp.gov.pk/"
              target="_blank"
              rel="nofollow noopener"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-mono font-bold text-sm flex items-center justify-center gap-2 transition shadow-lg min-h-[48px]"
            >
              <span>{t('Check BISP Status on the Official Portal →', 'آفیشل 8171 پورٹل پر اہلیت چیک کریں ←')}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      {/* Trust Footer */}
      <div className="mt-6 pt-4 border-t border-emerald-800/60 flex items-center justify-between text-xs text-emerald-300">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{t('Official BISP Toll-Free Helpline: 0800-26477', 'بے نظیر ٹول فری ہیلپ لائن: 0800-26477')}</span>
        </span>
      </div>
    </div>
  );
};
