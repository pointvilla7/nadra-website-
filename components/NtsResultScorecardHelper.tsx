'use client';

import React, { useState } from 'react';
import {
  FileText,
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
  Award,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

export type TestingAgencyKey = 'nts' | 'ppsc' | 'fpsc' | 'etea' | 'pts';

interface AgencyConfig {
  id: TestingAgencyKey;
  nameEn: string;
  nameUr: string;
  portalUrl: string;
  helpline: string;
  passingMarks: string;
  passingMarksUr: string;
  descriptionEn: string;
  descriptionUr: string;
}

const TESTING_AGENCIES: Record<TestingAgencyKey, AgencyConfig> = {
  nts: {
    id: 'nts',
    nameEn: 'NTS (National Testing Service Pakistan)',
    nameUr: 'نیشنل ٹیسٹنگ سروس (این ٹی ایس رزلٹ)',
    portalUrl: 'https://www.nts.org.pk/',
    helpline: '051-844-4441',
    passingMarks: '50% (NAT / GAT / Job Screening)',
    passingMarksUr: '50 فیصد نمبر (پاسنگ مارکس)',
    descriptionEn: 'Check NAT undergraduate, GAT postgraduate, Educator, and Public Sector Recruitment scorecards with subject breakdown.',
    descriptionUr: 'نیٹ، گیٹ اور بھرتی ٹیسٹس کے تفصیلی مارکس اور رزلٹ کارڈ شناختی کارڈ سے دیکھیں۔',
  },
  ppsc: {
    id: 'ppsc',
    nameEn: 'PPSC Final Merit Lists & Written Results',
    nameUr: 'پنجاب پبلک سروس کمیشن تحریری و حتمی نتائج',
    portalUrl: 'https://www.ppsc.gop.pk/',
    helpline: '042-99202762',
    passingMarks: '40% per subject, 50% aggregate',
    passingMarksUr: 'ہر مضمون میں 40 فیصد، مجموعی 50 فیصد',
    descriptionEn: 'View official PPSC written examination qualifiers, single candidate detailed marks certificate (DMC), and final merit recommendation lists.',
    descriptionUr: 'پی پی ایس سی کی تحریری امتحانی پاس لسٹ اور تفصیلی مارکس سرٹیفکیٹ (ڈی ایم سی) ڈاؤن لوڈ کریں۔',
  },
  fpsc: {
    id: 'fpsc',
    nameEn: 'FPSC Results & Merit Recommendations',
    nameUr: 'فیڈرل پبلک سروس کمیشن رزلٹس و سفارشات',
    portalUrl: 'https://www.fpsc.gov.pk/',
    helpline: '051-9205075',
    passingMarks: '33% per subject, 50% aggregate (CSS)',
    passingMarksUr: 'ہر پرچہ 33 فیصد، مجموعی 50 فیصد (سی ایس ایس)',
    descriptionEn: 'Official CSS competitive examination marks sheets, General Recruitment screening results, and interview schedule lists.',
    descriptionUr: 'سی ایس ایس اور وفاقی بھرتیوں کے مارکس شیٹس اور انٹرویو لسٹس چیک کریں۔',
  },
  etea: {
    id: 'etea',
    nameEn: 'ETEA Screening & Entrance Test Results',
    nameUr: 'ای ٹی ای اے امتحانی نتائج و میرٹ لسٹس',
    portalUrl: 'https://etea.edu.pk/',
    helpline: '091-9219049',
    passingMarks: 'Varies by Department (typically 40–50%)',
    passingMarksUr: 'محکمہ کی پالیسی کے مطابق',
    descriptionEn: 'KPK Police, Health, School Education Department screening test answer keys, marks, and provisional merit standings.',
    descriptionUr: 'کے پی کے پولیس، محکمہ تعلیم اور صحت کے امتحانی رزلٹ اور میرٹ لسٹ دیکھیں۔',
  },
  pts: {
    id: 'pts',
    nameEn: 'PTS (Pakistan Testing Service)',
    nameUr: 'پاکستان ٹیسٹنگ سروس (پی ٹی ایس)',
    portalUrl: 'https://pts.org.pk/',
    helpline: '051-111-111-787',
    passingMarks: '50% Minimum Qualifying Standard',
    passingMarksUr: '50 فیصد کوالیفائنگ معیار',
    descriptionEn: 'WAPDA, Police, and Autonomous Agency recruitment test results, objection forms, and interview call letters.',
    descriptionUr: 'واپڈا اور پولیس بھرتی ٹیسٹس کے رزلٹ کارڈز اور اعتراضات کی جانچ۔',
  },
};

export const NtsResultScorecardHelper: React.FC = () => {
  const { t } = useLanguage();

  const [activeAgency, setActiveAgency] = useState<TestingAgencyKey>('nts');
  const [cnicInput, setCnicInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [validated, setValidated] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const agency = TESTING_AGENCIES[activeAgency];
  const cleanCnic = cnicInput.replace(/[^0-9]/g, '');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();

    if (!cleanCnic) {
      setErrorMsg(t('Please enter your 13-digit CNIC to look up test results.', 'رزلٹ جاننے کے لیے 13 ہندسوں کا شناختی کارڈ درج کریں۔'));
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
          <Award className="w-5 h-5 text-doc-brass shrink-0" />
          <div>
            <h3 className="font-serif font-bold text-sm text-white leading-tight">
              {t('Official NTS, PPSC & FPSC Result & Scorecard Navigator 2026', 'این ٹی ایس و پبلک سروس کمیشن رزلٹ و ڈی ایم سی چیکر 2026')}
            </h3>
            <p className="text-[10px] text-slate-400 font-mono">
              {t('Competitive Exam Merit Lists & Detailed Marks Certificates (DMC)', 'تفصیلی مارکس سرٹیفکیٹ، میرٹ لسٹس اور انٹرویو نتائج')}
            </p>
          </div>
        </div>
        <InteractiveToolBadge labelEn="RESULT PORTAL" labelUr="رزلٹ پورٹل" variant="gold" />
      </div>

      <div className="p-5 sm:p-6 space-y-5">
        {/* Agency Selector */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
            <Building className="w-4 h-4 text-doc-seal dark:text-red-400" />
            <span>{t('Select Testing Authority:', 'امتحانی ادارہ منتخب کریں:')}</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {(Object.keys(TESTING_AGENCIES) as TestingAgencyKey[]).map((key) => {
              const isSelected = activeAgency === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setActiveAgency(key);
                    setValidated(false);
                    setErrorMsg(null);
                  }}
                  className={`py-2.5 px-3 rounded-xl border text-center font-mono text-xs font-bold transition-all min-h-[44px] flex items-center justify-center ${
                    isSelected
                      ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                      : 'bg-doc-paper/70 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
                  }`}
                >
                  {key.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Agency Info */}
        <div className="p-3 rounded-xl bg-doc-paper dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-sans flex items-start gap-2.5">
          <Info className="w-4 h-4 text-doc-brass shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-doc-ink dark:text-white">{t(agency.nameEn, agency.nameUr)}</p>
            <p className="text-slate-600 dark:text-slate-300 text-[11px] mt-0.5">{t(agency.descriptionEn, agency.descriptionUr)}</p>
            <p className="text-emerald-500 text-[10px] font-mono font-bold mt-1">Passing Benchmark: {t(agency.passingMarksUr, agency.passingMarks)}</p>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleVerify} className="space-y-3">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass">
                {t('Candidate CNIC Number (13 Digits):', 'امیدوار کا شناختی کارڈ نمبر:')}
              </label>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                13 DIGITS REQUIRED
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
            <span>{t(`VERIFY CNIC & GET ${activeAgency.toUpperCase()} SCORECARD`, `${activeAgency.toUpperCase()} رزلٹ کارڈ حاصل کریں`)}</span>
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

            <div className="text-xs text-slate-300 font-sans space-y-2">
              <p className="font-bold text-white">
                {t('How to View Your Scorecard & Merit Position:', 'رزلٹ کارڈ اور میرٹ پوزیشن دیکھنے کا طریقہ:')}
              </p>
              <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-300 pl-1 leading-relaxed">
                <li>{t('Click "COPY" to copy your 13-digit CNIC to clipboard.', 'پہلے کاپی کا بٹن دبائیں تاکہ شناختی کارڈ نمبر محفوظ ہو جائے۔')}</li>
                <li>{t(`Click "OPEN OFFICIAL ${activeAgency.toUpperCase()} RESULT PORTAL" below.`, `نیچے دیے گئے آفیشل پورٹل بٹن پر کلک کریں۔`)}</li>
                <li>{t('Paste your CNIC into the result search engine to view total marks obtained, percentile score, and interview eligibility.', 'پورٹل پر شناختی کارڈ درج کر کے حاصل کردہ نمبر، پرسنٹائل اور انٹرویو اہلیت دیکھیں۔')}</li>
              </ol>
            </div>

            <a
              href={agency.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-doc-brass to-amber-500 hover:from-amber-500 hover:to-amber-400 text-doc-ink font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-lg min-h-[48px]"
            >
              <span>{t(`OPEN OFFICIAL ${activeAgency.toUpperCase()} RESULT PORTAL`, `آفیشل ${activeAgency.toUpperCase()} رزلٹ پورٹل کھولیں`)}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="pt-2 border-t border-doc-brass/20 flex items-center justify-between text-xs text-slate-400 font-sans">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-doc-brass" />
                <span>Helpline: {agency.helpline}</span>
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400 font-sans flex items-center justify-between">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>{t('100% Client-side validation — Zero data stored', 'براؤزر میں فارمیٹ تصدیق — کوئی ڈیٹا جمع نہیں ہوتا')}</span>
        </span>
      </div>
    </div>
  );
};
