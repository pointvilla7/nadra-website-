'use client';

import React, { useState } from 'react';
import {
  HeartHandshake,
  Search,
  ExternalLink,
  ShieldCheck,
  Check,
  Copy,
  AlertCircle,
  FileCheck,
  Building,
  Info,
  Phone,
  MessageSquare,
  Activity,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

export type SehatRegionKey = 'national' | 'punjab' | 'kpk' | 'ict';

interface SehatRegionConfig {
  id: SehatRegionKey;
  nameEn: string;
  nameUr: string;
  smsShortcode: string;
  portalUrl: string;
  helpline: string;
  annualCoverage: string;
  annualCoverageUr: string;
}

const SEHAT_REGIONS: Record<SehatRegionKey, SehatRegionConfig> = {
  national: {
    id: 'national',
    nameEn: 'National Sehat Sahulat Program (Federal / AJK / GB)',
    nameUr: 'قومی صحت سہولت پروگرام (وفاق، آزاد کشمیر و جی بی)',
    smsShortcode: '8500',
    portalUrl: 'https://www.pmhealthprogram.gov.pk/check-your-eligibility/',
    helpline: '0800-07582',
    annualCoverage: 'PKR 1,000,000 per family per annum',
    annualCoverageUr: '10 لاکھ روپے سالانہ فی خاندان مفت علاج',
  },
  punjab: {
    id: 'punjab',
    nameEn: 'Punjab Sehat Sahulat Card (PHIMC)',
    nameUr: 'پنجاب صحت سہولت کارڈ (پی ایچ آئی ایم سی)',
    smsShortcode: '8500',
    portalUrl: 'https://phimc.punjab.gov.pk/',
    helpline: '0800-07582 / 042-99332647',
    annualCoverage: 'Up to PKR 1,000,000 per family per year',
    annualCoverageUr: '10 لاکھ روپے سالانہ ان ڈور ہسپتال علاج',
  },
  kpk: {
    id: 'kpk',
    nameEn: 'KPK Sehat Card Plus (Universal Healthcare)',
    nameUr: 'خیبر پختونخوا صحت کارڈ پلس (تمام اضلاع)',
    smsShortcode: '8500',
    portalUrl: 'https://sehatcardplus.gov.pk/',
    helpline: '0800-89898',
    annualCoverage: '100% Free Universal Medical Coverage',
    annualCoverageUr: 'کے پی کے کے تمام شہریوں کے لیے 100٪ مفت علاج',
  },
  ict: {
    id: 'ict',
    nameEn: 'Islamabad ICT & Balochistan Sehat Program',
    nameUr: 'اسلام آباد و بلوچستان صحت پروگرام',
    smsShortcode: '8500',
    portalUrl: 'https://www.pmhealthprogram.gov.pk/',
    helpline: '0800-07582',
    annualCoverage: 'PKR 1,000,000 per registered family',
    annualCoverageUr: '10 لاکھ روپے تک مفت ان ڈور میڈیکل کور',
  },
};

export const SehatCardChecker: React.FC = () => {
  const { t } = useLanguage();

  const [activeRegion, setActiveRegion] = useState<SehatRegionKey>('national');
  const [cnicInput, setCnicInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [validated, setValidated] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const region = SEHAT_REGIONS[activeRegion];
  const cleanCnic = cnicInput.replace(/[^0-9]/g, '');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();

    if (!cleanCnic) {
      setErrorMsg(t('Please enter your 13-digit CNIC to check Sehat Card eligibility.', 'صحت کارڈ اہلیت جاننے کے لیے 13 ہندسوں کا شناختی کارڈ درج کریں۔'));
      setValidated(false);
      return;
    }

    if (cleanCnic.length !== 13) {
      setErrorMsg(t(`CNIC must be exactly 13 digits. You entered ${cleanCnic.length} digits.`, `شناختی کارڈ کے پورے 13 ہندسے ہونے چاہئیں۔ آپ نے ${cleanCnic.length} ہندسے درج کیے۔`));
      setValidated(false);
      return;
    }

    setErrorMsg(null);
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
          <HeartHandshake className="w-5 h-5 text-doc-brass shrink-0" />
          <div>
            <h3 className="font-serif font-bold text-sm text-white leading-tight">
              {t('Official Sehat Card Eligibility & Hospital Check 2026', 'صحت سہولت کارڈ آن لائن اہلیت و ہسپتال گائیڈ 2026')}
            </h3>
            <p className="text-[10px] text-slate-400 font-mono">
              {t('National Sehat Sahulat, Punjab PHIMC & KPK Sehat Card Plus', 'قومی صحت پروگرام، پنجاب اور خیبر پختونخوا صحت کارڈ')}
            </p>
          </div>
        </div>
        <InteractiveToolBadge labelEn="HEALTH DIRECTORY" labelUr="صحت گائیڈ" variant="gold" />
      </div>

      <div className="p-5 sm:p-6 space-y-5">
        {/* Region Selector */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-doc-seal dark:text-red-400" />
            <span>{t('Select Your Healthcare Region:', 'اپنا ریجن منتخب کریں:')}</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {(Object.keys(SEHAT_REGIONS) as SehatRegionKey[]).map((key) => {
              const r = SEHAT_REGIONS[key];
              const isSelected = activeRegion === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setActiveRegion(key);
                    setValidated(false);
                    setErrorMsg(null);
                  }}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition min-h-[58px] ${
                    isSelected
                      ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                      : 'bg-doc-paper/70 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
                  }`}
                >
                  <span className="font-serif font-bold text-xs leading-tight">{t(r.nameEn.split('(')[0], r.nameUr.split('(')[0])}</span>
                  <span className="text-[10px] font-mono text-emerald-500 font-bold mt-1">{t(r.annualCoverageUr, r.annualCoverage)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleVerify} className="space-y-3">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass">
                {t('Citizen CNIC Number (13 Digits):', 'شہری کا 13 ہندسوں کا شناختی کارڈ نمبر:')}
              </label>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                SMS TO 8500 OR CHECK ONLINE
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
            <span>{t(`VERIFY CNIC FOR SEHAT CARD 2026`, `صحت کارڈ کے لیے شناختی کارڈ تصدیق کریں`)}</span>
          </button>
        </form>

        {/* Error Notice */}
        {errorMsg && (
          <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200 text-xs flex items-center gap-2 font-sans">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Verified & Guided Access */}
        {validated && (
          <div className="p-5 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/60 space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-doc-brass/30 pb-3">
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-emerald-400" />
                <div>
                  <p className="text-[10px] font-mono text-doc-brass uppercase font-bold">CNIC FORMAT VALIDATED</p>
                  <p className="font-mono font-extrabold text-base tracking-wider">{cleanCnic}</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] border border-emerald-500/30">
                READY
              </span>
            </div>

            {/* Instant SMS Check Option */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/40 space-y-2 text-xs font-sans">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <MessageSquare className="w-4 h-4" />
                <span>{t('Instant Free SMS Eligibility Method (Recommended):', 'فوری مفت ایس ایم ایس کا طریقہ:')}</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {t(
                  `Send your 13-digit CNIC "${cleanCnic}" without dashes via SMS to 8500 from any Pakistani SIM. You will immediately receive your family card number, eligibility status, and empaneled hospitals.`,
                  `اپنے موبائل سے شناختی کارڈ نمبر "${cleanCnic}" بغیر ڈیشز کے 8500 پر ایس ایم ایس کریں۔ فوری طور پر کارڈ نمبر اور اہلیت کا جوابی میسج موصول ہو جائے گا۔`
                )}
              </p>
            </div>

            {/* Direct Web Portal CTA */}
            <div className="space-y-2">
              <p className="font-bold text-xs text-white">
                {t('Or Check Eligibility on Official Web Portal:', 'یا آفیشل ویب پورٹل سے تصدیق کریں:')}
              </p>
              <a
                href={region.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-doc-brass to-amber-500 hover:from-amber-500 hover:to-amber-400 text-doc-ink font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-lg min-h-[48px]"
              >
                <span>{t(`OPEN OFFICIAL ${region.nameEn.split('(')[0].toUpperCase()} PORTAL`, `آفیشل پورٹل پر اہلیت دیکھیں`)}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 border-t border-doc-brass/20 flex items-center justify-between text-xs text-slate-400 font-sans">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-doc-brass" />
                <span>24/7 Helpline: {region.helpline}</span>
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400 font-sans flex items-center justify-between">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>{t('100% Free government public service', 'حکومت پاکستان کی 100٪ مفت عوامی سہولت')}</span>
        </span>
      </div>
    </div>
  );
};
