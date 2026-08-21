'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Building2,
  ExternalLink,
  CheckCircle2,
  Clock,
  Coins,
  MapPin,
  FileText,
  Globe,
  Globe2,
  Sparkles,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Stamp,
  Users,
  Check
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

export type ProvinceKey = 'punjab' | 'sindh' | 'islamabad' | 'kpk' | 'balochistan' | 'ajk';

interface ProvinceConfig {
  id: ProvinceKey;
  nameEn: string;
  nameUr: string;
  isOnlineAvailable: boolean;
  onlineMode: 'Full Online & Walk-in' | 'Online Application' | 'In-Person & Digital' | 'In-Person Facilitation';
  onlineModeUr: string;
  portalUrl: string;
  portalName: string;
  feeRange: string;
  feeRangeUr: string;
  processingTime: string;
  processingTimeUr: string;
  centerTypeEn: string;
  centerTypeUr: string;
  overseasProcedureEn: string;
  overseasProcedureUr: string;
}

const PROVINCES: Record<ProvinceKey, ProvinceConfig> = {
  punjab: {
    id: 'punjab',
    nameEn: 'Punjab (PKM Portal)',
    nameUr: 'پنجاب (پولیس خدمت مرکز)',
    isOnlineAvailable: true,
    onlineMode: 'Full Online & Walk-in',
    onlineModeUr: 'آن لائن پورٹل و خدمت مرکز',
    portalUrl: 'https://pkm.punjab.gov.pk/public',
    portalName: 'Punjab Police Global PKM Portal (pkm.punjab.gov.pk)',
    feeRange: 'PKR 350 – 500 (Standard fee)',
    feeRangeUr: '350 تا 500 روپے سرکاری فیس',
    processingTime: '3 – 5 Working Days',
    processingTimeUr: '3 تا 5 دفتری ایام',
    centerTypeEn: 'Police Khidmat Markaz (PKM) located in all 36 Punjab districts + Mobile PKM Vans.',
    centerTypeUr: 'پنجاب کے تمام 36 اضلاع میں قائم پولیس خدمت مراکز اور موبائل وینز۔',
    overseasProcedureEn: 'Apply online via Global PKM Portal or authorize a blood relative via Embassy-attested Power of Attorney.',
    overseasProcedureUr: 'آن لائن پورٹل سے درخواست دیں یا قونصل خانے سے تصدیق شدہ اتھارٹی لیٹر کے ذریعے قریبی رشتے دار کو نامزد کریں۔',
  },
  sindh: {
    id: 'sindh',
    nameEn: 'Sindh (PRVS / CPLC)',
    nameUr: 'سندھ (پولیس ویریفکیشن سسٹم)',
    isOnlineAvailable: true,
    onlineMode: 'Online Application',
    onlineModeUr: 'آن لائن درخواست و CPLC سینٹر',
    portalUrl: 'https://prvs.sindhpolice.gov.pk/',
    portalName: 'Sindh Police Record Verification System (prvs.sindhpolice.gov.pk)',
    feeRange: 'PKR 500 – 1,000 (Standard / Urgent)',
    feeRangeUr: '500 تا 1,000 روپے (نارمل / ارجنٹ)',
    processingTime: '5 – 10 Working Days',
    processingTimeUr: '5 تا 10 دفتری ایام',
    centerTypeEn: 'CPLC Central Reporting Cell (Governor House Karachi), DPO Offices & Khidmat Markaz.',
    centerTypeUr: 'سی پی ایل سی (گورنر ہاؤس کراچی) اور سندھ کے تمام ضلعی پولیس دفاتر۔',
    overseasProcedureEn: 'Overseas applicants apply through Pakistani Embassy authority letter submitted to CPLC / SSP office by representative.',
    overseasProcedureUr: 'پاکستانی سفارتخانے سے تصدیق شدہ اتھارٹی لیٹر کے ساتھ نامزد نمائندہ سی پی ایل سی میں جمع کروائے۔',
  },
  islamabad: {
    id: 'islamabad',
    nameEn: 'Islamabad Capital (ICT)',
    nameUr: 'اسلام آباد کیپیٹل ٹیریٹری (ICT)',
    isOnlineAvailable: true,
    onlineMode: 'Full Online & Walk-in',
    onlineModeUr: 'آن لائن پورٹل و خدمت مرکز',
    portalUrl: 'https://islamabadpolice.gov.pk/',
    portalName: 'Islamabad Police Facilitation Portal (islamabadpolice.gov.pk)',
    feeRange: 'PKR 500 – 1,000 (Challan fee)',
    feeRangeUr: '500 تا 1,000 روپے چالان فیس',
    processingTime: '3 – 5 Working Days',
    processingTimeUr: '3 تا 5 دفتری ایام',
    centerTypeEn: 'ICT Police Khidmat Markaz (F-6 Super Market, G-14, H-11 & Traffic HQ).',
    centerTypeUr: 'پولیس خدمت مرکز اسلام آباد (سپر مارکیٹ F-6، سیکٹر G-14 اور ٹریفک ہیڈکوارٹر)۔',
    overseasProcedureEn: 'Apply through ICT Online Portal or submit through authorized representative with Embassy authorization.',
    overseasProcedureUr: 'آفیشل آن لائن پورٹل سے اپلائی کریں یا سفارتخانے سے تصدیق شدہ مختار نامے کے ساتھ نمائندہ بھیجیں۔',
  },
  kpk: {
    id: 'kpk',
    nameEn: 'Khyber Pakhtunkhwa (KPK)',
    nameUr: 'خیبر پختونخوا (پولیس آسانی مرکز)',
    isOnlineAvailable: true,
    onlineMode: 'Online Application',
    onlineModeUr: 'آن لائن پورٹل و پولیس سہولت مرکز',
    portalUrl: 'https://clearance.kppolice.gov.pk/',
    portalName: 'KPK Police Clearance Portal (clearance.kppolice.gov.pk)',
    feeRange: 'PKR 300 – 500 (Government fee)',
    feeRangeUr: '300 تا 500 روپے سرکاری فیس',
    processingTime: '3 – 7 Working Days',
    processingTimeUr: '3 تا 7 دفتری ایام',
    centerTypeEn: 'Police Asan Markaz (PAL Facilitation Centers) in Peshawar, Mardan, Swat, Abbottabad, etc.',
    centerTypeUr: 'پشاور، مردان، سوات اور ایبٹ آباد میں پولیس آسان مراکز (PAL)۔',
    overseasProcedureEn: 'Online registration on clearance.kppolice.gov.pk with representative verification in district PAL center.',
    overseasProcedureUr: 'آن لائن رجسٹریشن کے بعد قریبی رشتے دار کو متعلقہ ضلعی مرکز بھیج کر تصدیق کروائی جا سکتی ہے۔',
  },
  balochistan: {
    id: 'balochistan',
    nameEn: 'Balochistan (CPO Quetta)',
    nameUr: 'بلوچستان (سنٹرل پولیس آفس)',
    isOnlineAvailable: false,
    onlineMode: 'In-Person & Digital',
    onlineModeUr: 'ان پرسن اور ضلعی پولیس سہولت مرکز',
    portalUrl: 'https://balochistanpolice.gov.pk/',
    portalName: 'Balochistan Police Official Portal (balochistanpolice.gov.pk)',
    feeRange: 'PKR 300 – 600 (Challan fee)',
    feeRangeUr: '300 تا 600 روپے بینک چالان',
    processingTime: '7 – 14 Working Days',
    processingTimeUr: '7 تا 14 دفتری ایام',
    centerTypeEn: 'Central Police Office (CPO) Quetta, DPO Offices & Regional Police Facilitation Centers.',
    centerTypeUr: 'سنٹرل پولیس آفس (CPO) کوئٹہ اور ضلعی ایس ایس پی دفاتر۔',
    overseasProcedureEn: 'Authority letter attested by Pakistani Embassy authorizing blood relative in Quetta/district to file application.',
    overseasProcedureUr: 'قریبی سفارتخانے سے تصدیق شدہ اتھارٹی لیٹر کے ذریعے کوئٹہ یا آبائی ضلع کے ڈی پی او آفس میں جمع کروائیں۔',
  },
  ajk: {
    id: 'ajk',
    nameEn: 'Azad Jammu & Kashmir (AJK)',
    nameUr: 'آزاد جموں و کشمیر (AJK)',
    isOnlineAvailable: false,
    onlineMode: 'In-Person Facilitation',
    onlineModeUr: 'ضلعی ایس ایس پی آفس و خدمت مرکز',
    portalUrl: 'https://ajkpolice.gov.pk/',
    portalName: 'AJK Police Portal (ajkpolice.gov.pk) & PKM Network',
    feeRange: 'PKR 300 – 500 (Official fee)',
    feeRangeUr: '300 تا 500 روپے سرکاری فیس',
    processingTime: '7 – 14 Working Days',
    processingTimeUr: '7 تا 14 دفتری ایام',
    centerTypeEn: 'District SSP Offices (Muzaffarabad, Mirpur, Rawalakot, Kotli) & coordinated PKM counters.',
    centerTypeUr: 'مظفرآباد، میرپور، راولا کوٹ اور کوٹلی کے ضلعی ایس ایس پی دفاتر۔',
    overseasProcedureEn: 'Diaspora can apply through Embassy authority letter or through reciprocal Punjab PKM counters for Mirpur diaspora.',
    overseasProcedureUr: 'پاکستانی سفارتخانے سے تصدیق شدہ لیٹر کے ذریعے یا پنجاب پولیس خدمت مرکز باہمی کاؤنٹرز سے۔',
  },
};

export const PoliceCharacterCertificateHelper: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProvince, setSelectedProvince] = useState<ProvinceKey>('punjab');

  const prov = PROVINCES[selectedProvince];

  return (
    <div className="my-8 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-doc-ink overflow-hidden shadow-xl">
      {/* Header Bar */}
      <div className="px-5 py-4 bg-doc-ink text-white flex items-center justify-between gap-3 border-b border-doc-brass/20">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-doc-brass shrink-0" />
          <div>
            <h3 className="font-serif font-bold text-sm text-white leading-tight">
              {t(
                'Province-Specific Police Clearance Certificate (PCC) Navigator 2026',
                'صوبائی پولیس کریکٹر سرٹیفکیٹ آن لائن گائیڈ 2026'
              )}
            </h3>
            <p className="text-[10px] text-slate-400 font-mono">
              {t(
                'Punjab PKM • Sindh PRVS • Islamabad ICT • KPK PAL • Balochistan & AJK',
                'پنجاب، سندھ، اسلام آباد، خیبر پختونخوا، بلوچستان اور آزاد کشمیر'
              )}
            </p>
          </div>
        </div>
        <InteractiveToolBadge labelEn="PCC NAVIGATOR" labelUr="کریکٹر سرٹیفکیٹ" variant="gold" />
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Step 1: Province Selector */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-doc-seal dark:text-red-400" />
              <span>{t('1. Select Your Province / Territory of Residence:', '1. اپنا صوبہ یا علاقہ منتخب کریں:')}</span>
            </label>
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
              {t('Province-specific jurisdiction', 'صوبائی دائرہ اختیار')}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {(Object.keys(PROVINCES) as ProvinceKey[]).map((key) => {
              const item = PROVINCES[key];
              const isSelected = selectedProvince === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedProvince(key)}
                  className={`p-3 rounded-xl border text-center flex flex-col items-center justify-center transition min-h-[58px] ${
                    isSelected
                      ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
                  }`}
                >
                  <span className="font-serif font-bold text-xs leading-tight">{t(item.nameEn.split('(')[0], item.nameUr.split('(')[0])}</span>
                  <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 mt-1 font-bold">
                    {item.isOnlineAvailable ? 'Online Portal' : 'In-Person'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Dynamic Province Information Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/60 space-y-5 relative overflow-hidden shadow-2xl animate-fadeIn font-sans">
          <div aria-hidden="true" className="absolute top-0 right-0 w-48 h-48 bg-doc-brass/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header of Card */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-doc-brass/30 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-emerald-500/30">
                  {t(prov.onlineMode, prov.onlineModeUr)}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-amber-500/30">
                  VALID FOR 6 MONTHS
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-serif font-extrabold text-white mt-1.5">
                {t(`${prov.nameEn} Character Certificate Guide`, `${prov.nameUr} پولیس تصدیق گائیڈ`)}
              </h4>
            </div>

            <div className="text-left sm:text-right shrink-0">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">{t('Typical Govt Fee', 'سرکاری فیس')}</span>
              <span className="text-xl sm:text-2xl font-mono font-extrabold text-doc-brass">{prov.feeRange.split('(')[0]}</span>
            </div>
          </div>

          {/* 3 Metric Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800 space-y-1">
              <p className="text-[10px] font-mono text-slate-400 uppercase flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-doc-brass" />
                <span>{t('Processing Timeline', 'پروسیسنگ کا وقت')}</span>
              </p>
              <p className="text-sm font-bold text-white">{t(prov.processingTime, prov.processingTimeUr)}</p>
              <span className="text-[10px] text-slate-400 font-mono">Includes CRO background check</span>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800 space-y-1">
              <p className="text-[10px] font-mono text-slate-400 uppercase flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t('Submission Center', 'جمع کروانے کا مرکز')}</span>
              </p>
              <p className="text-xs text-slate-200 leading-snug">{t(prov.centerTypeEn, prov.centerTypeUr)}</p>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800 space-y-1">
              <p className="text-[10px] font-mono text-slate-400 uppercase flex items-center gap-1">
                <Globe2 className="w-3.5 h-3.5 text-amber-400" />
                <span>{t('Overseas Applicants', 'اوورسیز پاکستانیز')}</span>
              </p>
              <p className="text-xs text-slate-200 leading-snug">{t(prov.overseasProcedureEn, prov.overseasProcedureUr)}</p>
            </div>
          </div>

          {/* Official Action Portal Button */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <a
              href={prov.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-doc-brass via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-doc-ink font-mono font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-xl min-h-[48px]"
            >
              <span>{t(`Open Official ${selectedProvince.toUpperCase()} Police Portal →`, `آفیشل پورٹل پر جائیں (${selectedProvince.toUpperCase()}) ←`)}</span>
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>

            <a
              href="https://apostille.mofa.gov.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition min-h-[48px]"
            >
              <span>{t('MOFA Apostille Portal (apostille.mofa.gov.pk) →', 'وزارت خارجہ تصدیق پورٹل ←')}</span>
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>

        {/* Step 3: End-to-End 5-Step Pipeline */}
        <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-doc-brass" />
            <span>{t('Complete 5-Step Process for Foreign Visas & Immigration:', 'غیر ملکی ویزا و امیگریشن کے لیے 5 مرحلہ وار طریقہ کار:')}</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 text-xs">
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5 flex flex-col justify-between">
              <div>
                <span className="w-6 h-6 rounded-md bg-doc-ink text-white font-mono font-bold text-xs flex items-center justify-center">1</span>
                <p className="font-bold text-doc-ink dark:text-white mt-1.5">Apply in Province</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                  Submit CNIC, passport copy, 2 photos, and residential utility bill.
                </p>
              </div>
              <span className="text-[10px] font-mono text-doc-brass font-semibold">Fee: ~PKR 350-1000</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5 flex flex-col justify-between">
              <div>
                <span className="w-6 h-6 rounded-md bg-doc-ink text-white font-mono font-bold text-xs flex items-center justify-center">2</span>
                <p className="font-bold text-doc-ink dark:text-white mt-1.5">Police Verification</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                  Local police station and CRO criminal records database check.
                </p>
              </div>
              <span className="text-[10px] font-mono text-slate-400 font-semibold">3 – 10 Days</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5 flex flex-col justify-between">
              <div>
                <span className="w-6 h-6 rounded-md bg-doc-ink text-white font-mono font-bold text-xs flex items-center justify-center">3</span>
                <p className="font-bold text-doc-ink dark:text-white mt-1.5">Collect Certificate</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                  Receive printed security document with official seal &amp; QR verification.
                </p>
              </div>
              <span className="text-[10px] font-mono text-emerald-500 font-semibold">Valid 6 Months</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5 flex flex-col justify-between">
              <div>
                <span className="w-6 h-6 rounded-md bg-doc-ink text-white font-mono font-bold text-xs flex items-center justify-center">4</span>
                <p className="font-bold text-doc-ink dark:text-white mt-1.5">MOFA Attestation</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                  Ministry of Foreign Affairs apostille or stamp for international validity.
                </p>
              </div>
              <span className="text-[10px] font-mono text-amber-500 font-semibold">apostille.mofa.gov.pk</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5 flex flex-col justify-between">
              <div>
                <span className="w-6 h-6 rounded-md bg-doc-ink text-white font-mono font-bold text-xs flex items-center justify-center">5</span>
                <p className="font-bold text-doc-ink dark:text-white mt-1.5">Embassy Legalization</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                  Final consular stamp at destination embassy (e.g. UAE, Saudi, Qatar, Kuwait).
                </p>
              </div>
              <span className="text-[10px] font-mono text-purple-500 font-semibold">Non-Apostille States</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3.5 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400 font-sans flex flex-wrap items-center justify-between gap-2">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>{t('Zero Data Collection: Informational guided navigator only', '100٪ پرائیویٹ — کوئی ذاتی ڈیٹا محفوظ نہیں کیا جاتا')}</span>
        </span>
        <span className="font-mono">POLICE VERIFICATION 2026</span>
      </div>
    </div>
  );
};
