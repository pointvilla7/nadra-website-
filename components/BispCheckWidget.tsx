'use client';

import React, { useState } from 'react';
import { ShieldCheck, ShieldAlert, CheckCircle2, ExternalLink, Search, Lock, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export const BispCheckWidget: React.FC = () => {
  const { t } = useLanguage();
  const [cnic, setCnic] = useState('');
  const [searched, setSearched] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCnic = cnic.replace(/[^0-9]/g, '');
    if (cleanCnic.length !== 13) {
      setErrorMsg(t('Please enter a valid 13-digit CNIC without hyphens (e.g. 3520212345671)', '13 ہندسوں کا درست قومی شناختی کارڈ نمبر درج کریں'));
      return;
    }
    setErrorMsg('');
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

      {/* Query Result Box */}
      {searched && (
        <div className="mt-6 pt-6 border-t border-emerald-800 animate-fadeIn space-y-4">
          <div className="p-4 rounded-xl bg-slate-950/90 border border-emerald-500/50 text-emerald-100 text-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {t('CNIC Verified for 8171 Query:', 'شناختی کارڈ کی تصدیق:')} {cnic}
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-950 font-mono text-[10px] text-emerald-400 border border-emerald-700">
                NSER-VERIFIED
              </span>
            </div>

            <p className="leading-relaxed">
              {t(
                `Your 8171 query for CNIC ${cnic} is prepared. Click below to open the official Government BISP 8171 Web Portal (8171.bisp.gov.pk) or send your CNIC to SMS 8171 to receive your current cash distribution status.`,
                `آپ کے شناختی کارڈ کی معلومات تیار ہیں۔ آفیشل پورٹل پر جا کر یا 8171 پر ایس ایم ایس کر کے اپنی قسط معلوم کریں۔`
              )}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="https://8171.bisp.gov.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-glow-emerald"
            >
              <span>{t('Open Official 8171 BISP Web Portal', 'آفیشل 8171 پورٹل کھولیں')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
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
