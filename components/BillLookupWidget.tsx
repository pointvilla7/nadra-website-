'use client';

import React, { useState } from 'react';
import { Search, ExternalLink, ShieldCheck, Zap, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';
import { BILL_PROVIDERS, BillProvider } from '@/lib/data/bills';
import { useLanguage } from '@/lib/context/LanguageContext';

interface BillLookupWidgetProps {
  providerId: 'lesco' | 'kelectric' | 'suigas' | 'wapda';
}

export const BillLookupWidget: React.FC<BillLookupWidgetProps> = ({ providerId }) => {
  const { t } = useLanguage();
  const provider: BillProvider = BILL_PROVIDERS[providerId] || BILL_PROVIDERS.lesco;
  
  const [refNum, setRefNum] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCheckBill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!refNum.trim()) {
      setErrorMsg(t('Please enter a reference or account number', 'برائے مہربانی اپنا ریفرنس یا اکاؤنٹ نمبر درج کریں'));
      return;
    }

    if (refNum.replace(/[^0-9]/g, '').length < 8) {
      setErrorMsg(t(`Please enter a valid numeric number (e.g. ${provider.sampleRef})`, `درست ہندسوں کا نمبر درج کریں (مثلاً ${provider.sampleRef})`));
      return;
    }

    setErrorMsg('');
    setIsSubmitted(true);
  };

  return (
    <div className="my-8 rounded-2xl glass-card border border-amber-500/30 p-6 md:p-8 shadow-xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 text-white relative overflow-hidden">
      {/* Background Accent Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Title Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-5 h-5 text-amber-400" />
            <h3 className="font-extrabold text-lg md:text-xl text-white">
              {t(provider.nameEn, provider.nameUr)}
            </h3>
          </div>
          <p className="text-xs text-slate-300">
            {t('Instant Bill Reference Lookup Portal', 'فوری آن لائن بل ریفرنس معلوماتی ٹول')}
          </p>
        </div>

        <span className="text-xs font-bold px-3 py-1 rounded-full gold-badge">
          {provider.code} {t('Official Search', 'آفیشل تلاشی')}
        </span>
      </div>

      {/* Input Form */}
      <form onSubmit={handleCheckBill} className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-amber-200 mb-2">
            {t(`Enter ${provider.refDigitLength}-Digit Reference / Account Number:`, `${provider.refDigitLength} ہندسوں کا ریفرنس نمبر درج کریں:`)}
          </label>
          <div className="relative flex items-center">
            <input
              type="text"
              value={refNum}
              onChange={(e) => {
                setRefNum(e.target.value);
                setErrorMsg('');
                setIsSubmitted(false);
              }}
              placeholder={`e.g. ${provider.sampleRef}`}
              className="w-full pl-4 pr-12 py-3.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-base font-mono tracking-wider transition"
            />
            <button
              type="submit"
              className="absolute right-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center gap-1 transition shadow-lg"
            >
              <Search className="w-4 h-4" />
              <span>{t('Check Bill', 'بل دیکھئے')}</span>
            </button>
          </div>
          {errorMsg && (
            <p className="text-xs font-semibold text-rose-400 mt-2 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errorMsg}</span>
            </p>
          )}
          <p className="text-[11px] text-slate-400 mt-1.5">
            {t(`Tip: You can find this reference number on the top-left of your printed ${provider.code} paper bill.`, `ہدایت: آپ اپنا ریفرنس نمبر اپنے کاغذ کے بل پر دیکھ سکتے ہیں۔`)}
          </p>
        </div>
      </form>

      {/* Results / Direct Link Drawer Placeholder */}
      {isSubmitted && (
        <div className="mt-6 pt-6 border-t border-slate-800 animate-fadeIn space-y-4">
          <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold flex items-center gap-1 text-sm text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {t('Reference Verified:', 'ریفرنس نمبر کی تصدیق:')} {refNum}
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-900 font-mono text-[10px]">
                {provider.code}-PORTAL
              </span>
            </div>
            <p>
              {t(
                `Your bill query for reference number ${refNum} is ready. Click the official button below to view and download your original PDF duplicate bill directly from ${provider.nameEn}.`,
                `آپ کے ریفرنس نمبر ${refNum} کی معلومات تیار ہیں۔ آفیشل بٹن پر کلک کر کے اصل بل ڈاؤن لوڈ کریں۔`
              )}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={provider.officialPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-glow-emerald"
            >
              <FileText className="w-4 h-4" />
              <span>{t(`Open ${provider.code} Official Bill Portal`, `${provider.code} کے آفیشل پورٹل پر جائیں`)}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <span className="text-[11px] text-slate-400">
              {t(`Helpline: ${provider.helpline}`, `ہیلپ لائن: ${provider.helpline}`)}
            </span>
          </div>
        </div>
      )}

      {/* Provider Details Bar */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>{t('Direct link to official company server', 'کمپنی کے آفیشل سرور کے ساتھ براہ راست رابطہ')}</span>
        </div>
        <span>{t(`Help Center Hotline: ${provider.helpline}`, `رابطہ نمبر: ${provider.helpline}`)}</span>
      </div>
    </div>
  );
};
