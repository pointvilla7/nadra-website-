'use client';

import React, { useState } from 'react';
import {
  Briefcase,
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
  FileText,
  Clock,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

export type CommissionKey = 'fpsc' | 'ppsc' | 'spsc' | 'kppsc' | 'bpsc' | 'nts' | 'etea';

interface CommissionConfig {
  id: CommissionKey;
  nameEn: string;
  nameUr: string;
  jurisdiction: string;
  portalUrl: string;
  helpline: string;
  queryParam: string;
  instructionsEn: string;
  instructionsUr: string;
}

const COMMISSIONS: Record<CommissionKey, CommissionConfig> = {
  fpsc: {
    id: 'fpsc',
    nameEn: 'FPSC (Federal Public Service Commission)',
    nameUr: 'فیڈرل پبلک سروس کمیشن (وفاقی ملازمتیں)',
    jurisdiction: 'Federal / CSS / General Recruitment (BS-16 to BS-20)',
    portalUrl: 'https://online.fpsc.gov.pk/',
    helpline: '051-9205075 / 051-111-000-248',
    queryParam: '13-Digit CNIC without dashes',
    instructionsEn: 'CSS and General Recruitment admission certificates are issued 7–10 days before the scheduled exam date.',
    instructionsUr: 'سی ایس ایس اور جنرل بھرتی کی رول نمبر سلپ امتحان سے 7 تا 10 دن قبل جاری کی جاتی ہے۔',
  },
  ppsc: {
    id: 'ppsc',
    nameEn: 'PPSC (Punjab Public Service Commission)',
    nameUr: 'پنجاب پبلک سروس کمیشن (لاہور)',
    jurisdiction: 'Punjab Provincial Departments (PMS, Lecturers, Sub-Inspectors)',
    portalUrl: 'https://www.ppsc.gop.pk/',
    helpline: '042-99202762 / 042-99200161',
    queryParam: '13-Digit CNIC & Select Post Applied',
    instructionsEn: 'Download PPSC Admission Letter with test center, reporting time, and roll number by entering your CNIC and selecting your specific case number.',
    instructionsUr: 'شناختی کارڈ درج کر کے اور اپنی پوسٹ منتخب کر کے ایڈمشن لیٹر ڈاؤن لوڈ کریں۔',
  },
  spsc: {
    id: 'spsc',
    nameEn: 'SPSC (Sindh Public Service Commission)',
    nameUr: 'سندھ پبلک سروس کمیشن (حیدرآباد / کراچی)',
    jurisdiction: 'Sindh Provincial Civil Services & Medical/Educator posts',
    portalUrl: 'https://spsc.gos.pk/',
    helpline: '022-9200694 / 022-9200246',
    queryParam: '13-Digit CNIC Number',
    instructionsEn: 'SPSC online admission letters contain candidate picture, exam session time, and designated test hall.',
    instructionsUr: 'سندھ پبلک سروس کمیشن کے امتحانی مرکز اور رول نمبر کے لیے شناختی کارڈ استعمال کریں۔',
  },
  kppsc: {
    id: 'kppsc',
    nameEn: 'KPPSC (Khyber Pakhtunkhwa Public Service)',
    nameUr: 'خیبر پختونخوا پبلک سروس کمیشن (پشاور)',
    jurisdiction: 'KPK Provincial Govt Departments & PMS',
    portalUrl: 'https://kppsc.gov.pk/',
    helpline: '091-9214131 / 091-9212897',
    queryParam: '13-Digit CNIC or Roll Number',
    instructionsEn: 'Ability tests and screening examination call letters are downloadable using candidate CNIC.',
    instructionsUr: 'خیبر پختونخوا کے امتحانی کال لیٹرز شناختی کارڈ کے ذریعے حاصل کریں۔',
  },
  bpsc: {
    id: 'bpsc',
    nameEn: 'BPSC (Balochistan Public Service Commission)',
    nameUr: 'بلوچستان پبلک سروس کمیشن (کوئٹہ)',
    jurisdiction: 'Balochistan Civil Service (BCS) & Departmental Posts',
    portalUrl: 'https://bpsc.gob.pk/',
    helpline: '081-9201550',
    queryParam: 'CNIC & Application Tracking ID',
    instructionsEn: 'Download Balochistan competitive exam roll number slips and written test schedule.',
    instructionsUr: 'تحریری امتحان کے رول نمبر سلپ اور شیڈول کے لیے شناختی کارڈ درج کریں۔',
  },
  nts: {
    id: 'nts',
    nameEn: 'NTS (National Testing Service)',
    nameUr: 'نیشنل ٹیسٹنگ سروس (این ٹی ایس)',
    jurisdiction: 'NAT, GAT, Educator Screening & Public Sector Tests',
    portalUrl: 'https://www.nts.org.pk/',
    helpline: '051-844-4441',
    queryParam: '13-Digit CNIC without dashes',
    instructionsEn: 'Access the "List of Candidates" and print your official NTS Roll No Slip with barcode and test venue.',
    instructionsUr: 'امیدواروں کی لسٹ میں جا کر اپنا بارکوڈ والا رول نمبر سلپ پرنٹ کریں۔',
  },
  etea: {
    id: 'etea',
    nameEn: 'ETEA (Educational Testing & Evaluation Agency KPK)',
    nameUr: 'ای ٹی ای اے (ای ٹی اے کے پی کے)',
    jurisdiction: 'KPK Police, Medical & Departmental Recruitment Tests',
    portalUrl: 'https://etea.edu.pk/',
    helpline: '091-9219049',
    queryParam: '13-Digit CNIC Number',
    instructionsEn: 'Download ETEA physical test, screening test, and interview call slips using 13-digit CNIC.',
    instructionsUr: 'ای ٹی ای اے سکریننگ ٹیسٹ اور فزیکل ٹیسٹ کی رول نمبر سلپ حاصل کریں۔',
  },
};

export const RollNumberSlipChecker: React.FC = () => {
  const { t } = useLanguage();

  const [activeCommission, setActiveCommission] = useState<CommissionKey>('fpsc');
  const [cnicInput, setCnicInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [validated, setValidated] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const comm = COMMISSIONS[activeCommission];
  const cleanCnic = cnicInput.replace(/[^0-9]/g, '');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();

    if (!cleanCnic) {
      setErrorMsg(t('Please enter your 13-digit CNIC to look up roll number slips.', 'رول نمبر سلپ جاننے کے لیے 13 ہندسوں کا شناختی کارڈ درج کریں۔'));
      setValidated(false);
      return;
    }

    if (cleanCnic.length !== 13) {
      setErrorMsg(t(`CNIC must be exactly 13 digits. You entered ${cleanCnic.length} digits.`, `شناختی کارڈ کے پورے 13 ہندسے ہونے چاہئیں۔ آپ نے ${cleanCnic.length} ہندسے درج کیے۔`));
      setValidated(false);
      return;
    }

    setErrorMsg(null);
    setValidated(false);

    if (activeCommission === 'nts') {
      setLoading(true);
      setResult(null);

      fetch('/api/checker/nts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cnic: cleanCnic }),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          if (data.success) {
            setResult(data);
            setValidated(true);
          } else {
            setErrorMsg(data.message || 'Error checking NTS status.');
          }
        })
        .catch(() => {
          setLoading(false);
          setErrorMsg('Connection error. Please try again.');
        });
    } else {
      setResult(null);
      setValidated(true);
    }
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
          <Briefcase className="w-5 h-5 text-doc-brass shrink-0" />
          <div>
            <h3 className="font-serif font-bold text-sm text-white leading-tight">
              {t('Official Govt Roll Number Slip & Admission Letter Navigator 2026', 'سرکاری رول نمبر سلپ و ایڈمشن لیٹر گائیڈ 2026')}
            </h3>
            <p className="text-[10px] text-slate-400 font-mono">
              {t('FPSC, PPSC, SPSC, KPPSC, BPSC, NTS & ETEA Test Gateways', 'پبلک سروس کمیشنز اور این ٹی ایس امتحانی سلپس')}
            </p>
          </div>
        </div>
        <InteractiveToolBadge labelEn="ADMISSION SLIP PORTAL" labelUr="رول نمبر پورٹل" variant="gold" />
      </div>

      <div className="p-5 sm:p-6 space-y-5">
        {/* Commission Selector */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
            <Building className="w-4 h-4 text-doc-seal dark:text-red-400" />
            <span>{t('Select Commission / Testing Agency:', 'امتحانی کمیشن یا ایجنسی منتخب کریں:')}</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {(Object.keys(COMMISSIONS) as CommissionKey[]).map((key) => {
              const isSelected = activeCommission === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setActiveCommission(key);
                    setValidated(false);
                    setErrorMsg(null);
                  }}
                  className={`py-2.5 px-2 rounded-xl border text-center font-mono text-xs font-bold transition-all min-h-[44px] flex items-center justify-center ${
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

        {/* Info Banner */}
        <div className="p-3 rounded-xl bg-doc-paper dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-sans flex items-start gap-2.5">
          <Info className="w-4 h-4 text-doc-brass shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-doc-ink dark:text-white">{t(comm.nameEn, comm.nameUr)}</p>
            <p className="text-slate-600 dark:text-slate-300 text-[11px] mt-0.5">
              <span className="font-semibold">{t('Jurisdiction:', 'دائرہ کار:')}</span> {comm.jurisdiction}
            </p>
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
            <span>{t(`FORMAT & GET ${activeCommission.toUpperCase()} ADMISSION SLIP`, `${activeCommission.toUpperCase()} رول نمبر سلپ حاصل کریں`)}</span>
          </button>
        </form>

        {/* Error Notice */}
        {errorMsg && (
          <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200 text-xs flex items-center gap-2 font-sans">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="p-6 rounded-2xl border-2 border-dashed border-doc-brass/30 bg-doc-paper dark:bg-slate-900/60 animate-pulse space-y-3 font-sans">
            <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-1/4"></div>
            <div className="h-20 bg-slate-200 dark:bg-slate-800 rounded-xl w-full"></div>
          </div>
        )}

        {/* Verified & Guided Access */}
        {validated && !loading && (
          result && result.status === 'DEGRADED' ? (
            <div className="p-5 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/60 space-y-4 animate-fadeIn font-sans">
              <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/50 text-amber-100 text-xs space-y-3">
                <p className="font-bold text-sm text-amber-300 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  <span>{t('Direct Query Offline', 'آن لائن تصدیق عارضی طور پر بند ہے')}</span>
                </p>
                <p className="leading-relaxed text-slate-300">
                  {result.message}
                </p>
                <div className="pt-2">
                  <a
                    href={result.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-doc-brass to-amber-500 hover:from-amber-500 hover:to-amber-400 text-doc-ink font-mono font-bold text-xs flex items-center justify-center gap-2 transition shadow-lg min-h-[44px]"
                  >
                    <span>{t('Open Official Portal', 'آفیشل پورٹل کھولیں')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ) : activeCommission === 'nts' && result ? (
            <div className="p-5 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/60 space-y-4 animate-fadeIn font-sans">
              <div className="flex items-center justify-between border-b border-doc-brass/30 pb-3">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-[10px] font-mono text-doc-brass uppercase font-bold">{t('NTS ADMISSION SLIP TICKET', 'نیشنل ٹیسٹنگ سروس سلپ')}</p>
                    <p className="font-mono font-extrabold text-base tracking-wider">{result.identifier}</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] border border-emerald-500/30 font-bold uppercase">
                  {result.status}
                </span>
              </div>

              {/* NTS Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
                <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 space-y-1">
                  <span className="text-slate-500 block text-[9px] uppercase font-mono">{t('Candidate Name', 'امیدوار کا نام')}</span>
                  <span className="font-bold text-white text-sm">{result.candidateName}</span>
                </div>
                <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 space-y-1">
                  <span className="text-slate-500 block text-[9px] uppercase font-mono">{t('Roll Number', 'رول نمبر')}</span>
                  <span className="font-mono text-white text-sm font-bold">{result.rollNo}</span>
                </div>
                <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 space-y-1 sm:col-span-2">
                  <span className="text-slate-500 block text-[9px] uppercase font-mono">{t('Test Title', 'ٹیسٹ کا نام')}</span>
                  <span className="font-bold text-white text-sm">{result.testTitle}</span>
                </div>
                <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 space-y-1">
                  <span className="text-slate-500 block text-[9px] uppercase font-mono">{t('Test Date', 'ٹیسٹ کی تاریخ')}</span>
                  <span className="font-bold text-white text-sm">{result.testDate}</span>
                </div>
                <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 space-y-1">
                  <span className="text-slate-500 block text-[9px] uppercase font-mono">{t('Verification Score', 'حاصل کردہ نمبر')}</span>
                  <span className="font-mono text-white text-sm font-bold">{result.score} / {result.totalMarks} ({result.percentile} Percentile)</span>
                </div>
                <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 space-y-1 sm:col-span-2">
                  <span className="text-slate-500 block text-[9px] uppercase font-mono">{t('Designated Test Center', 'امتحانی سینٹر')}</span>
                  <span className="text-slate-350 text-[11px] leading-relaxed">{result.center}</span>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 border-t border-purple-950 pt-2 italic">
                ⚠️ {result.message}
              </p>

              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <button
                  onClick={() => {
                    if (typeof window !== 'undefined') window.print();
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-850 hover:bg-slate-800 text-white font-mono font-bold text-xs flex items-center justify-center gap-1.5 transition border border-slate-700 min-h-[40px]"
                >
                  <span>🖨️ {t('Print Admission Slip', 'سلپ پرنٹ کریں')}</span>
                </button>
                <a
                  href={comm.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-doc-brass to-amber-500 hover:from-amber-500 hover:to-amber-400 text-doc-ink font-mono font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-lg min-h-[40px]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{t('Verify on NTS Portal', 'آفیشل پورٹل پر دیکھیں')}</span>
                </a>
              </div>

              <div className="pt-2 border-t border-doc-brass/20 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-doc-brass" />
                  <span>Helpline: {comm.helpline}</span>
                </span>
              </div>
            </div>
          ) : (
            <div className="p-5 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/60 space-y-4 animate-fadeIn font-sans">
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

              <div className="text-xs text-slate-300 space-y-2">
                <p className="font-bold text-white">
                  {t('Instructions to Download & Print Your Slip:', 'رول نمبر سلپ ڈاؤن لوڈ کرنے کا طریقہ:')}
                </p>
                <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-300 pl-1 leading-relaxed">
                  <li>{t('Click "COPY" to copy your 13-digit CNIC to clipboard.', 'پہلے کاپی کا بٹن دبائیں تاکہ شناختی کارڈ نمبر محفوظ ہو جائے۔')}</li>
                  <li>{t(`Click "OPEN OFFICIAL ${activeCommission.toUpperCase()} PORTAL" below.`, `نیچے دیے گئے آفیشل بٹن پر کلک کریں۔`)}</li>
                  <li>{t('Paste your CNIC into the admission slip query field and print your original PDF certificate with center instructions.', 'شناختی کارڈ پیسٹ کر کے اپنی رول نمبر سلپ پرنٹ کریں۔')}</li>
                </ol>
              </div>

              <a
                href={comm.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-doc-brass to-amber-500 hover:from-amber-500 hover:to-amber-400 text-doc-ink font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-lg min-h-[48px]"
              >
                <span>{t(`OPEN OFFICIAL ${activeCommission.toUpperCase()} ADMISSION SLIP PORTAL`, `آفیشل ${activeCommission.toUpperCase()} پورٹل کھولیں`)}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="pt-2 border-t border-doc-brass/20 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-doc-brass" />
                  <span>Helpline: {comm.helpline}</span>
                </span>
              </div>
            </div>
          )
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400 font-sans flex items-center justify-between">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>{t('Zero candidate personal data stored or cached', 'امیدوار کا کوئی ڈیٹا جمع نہیں کیا جاتا')}</span>
        </span>
      </div>
    </div>
  );
};
