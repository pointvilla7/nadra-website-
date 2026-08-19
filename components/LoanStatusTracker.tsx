'use client';

import React, { useState } from 'react';
import {
  Landmark,
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
  Clock,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

export type LoanSchemeKey = 'apnichhat' | 'pmyouth' | 'akhuwat' | 'hbfc' | 'greentractor';

interface SchemeConfig {
  id: LoanSchemeKey;
  nameEn: string;
  nameUr: string;
  maxAmount: string;
  portalUrl: string;
  helpline: string;
  verificationMethod: string;
  verificationMethodUr: string;
  approvalStages: { stage: string; descEn: string; descUr: string }[];
}

const LOAN_SCHEMES: Record<LoanSchemeKey, SchemeConfig> = {
  apnichhat: {
    id: 'apnichhat',
    nameEn: 'Apni Chhat Apna Ghar Scheme (Punjab)',
    nameUr: 'اپنی چھت اپنا گھر سکیم (پنجاب)',
    maxAmount: 'PKR 1,500,000 (15 Lakh)',
    portalUrl: 'https://acag.punjab.gov.pk/',
    helpline: '0800-09100 / (042) 99030100',
    verificationMethod: '13-Digit CNIC / Portal Citizen Login',
    verificationMethodUr: '13 ہندسوں کا شناختی کارڈ یا پورٹل لاگ ان',
    approvalStages: [
      { stage: '1. Scrutiny', descEn: 'NADRA biometric & PSER land registry verification', descUr: 'نادرا بائیو میٹرک اور اراضی ریکارڈ کی تصدیق' },
      { stage: '2. Balloting', descEn: 'District-wise computerized electronic balloting', descUr: 'ضلعی سطح پر کمپیوٹرائزڈ قرعہ اندازی' },
      { stage: '3. Inspection', descEn: 'PHATA field officer physical site inspection', descUr: 'پنجاب ہاؤسنگ اتھارٹی کی موقع پر تصدیق' },
      { stage: '4. Disbursement', descEn: '3-tranche bank transfer via designated bank account', descUr: 'بینک اکاؤنٹ میں 3 اقساط میں رقم کی منتقلی' },
    ],
  },
  pmyouth: {
    id: 'pmyouth',
    nameEn: 'PM Youth Business & Agriculture Loan (Tier 1/2/3)',
    nameUr: 'وزیر اعظم یوتھ بزنس اینڈ ایگریکلچر لون',
    maxAmount: 'Up to PKR 7,500,000 (75 Lakh)',
    portalUrl: 'https://pmyp.gov.pk/',
    helpline: '051-9214444 / 051-9214445',
    verificationMethod: '13-Digit CNIC & Application Reference ID',
    verificationMethodUr: 'شناختی کارڈ اور درخواست ریفرنس نمبر',
    approvalStages: [
      { stage: '1. Credit Check', descEn: 'State Bank e-CIB credit history evaluation', descUr: 'اسٹیٹ بینک ای سی آئی بی کریڈٹ ہسٹری جانچ' },
      { stage: '2. Bank Review', descEn: 'NBP / BOP / Bank of Khyber feasibility assessment', descUr: 'بینک کی جانب سے بزنس پلان کا جائزہ' },
      { stage: '3. Sanction', descEn: 'Formal sanction letter issue with subsidized rate', descUr: 'سبسیڈائزڈ ریٹ پر منظوری کا لیٹر جاری ہونا' },
      { stage: '4. Disbursement', descEn: 'Disbursement into commercial business account', descUr: 'کاروباری بینک اکاؤنٹ میں رقم کی ادائیگی' },
    ],
  },
  akhuwat: {
    id: 'akhuwat',
    nameEn: 'Akhuwat Islamic Microfinance Interest-Free Loans',
    nameUr: 'اخوت اسلامک مائیکرو فنانس بلاسود قرضے',
    maxAmount: 'PKR 50,000 – PKR 500,000',
    portalUrl: 'https://akhuwat.org.pk/',
    helpline: '042-111-448-464',
    verificationMethod: 'CNIC & Local Branch Token Number',
    verificationMethodUr: 'شناختی کارڈ اور برانچ ٹوکن نمبر',
    approvalStages: [
      { stage: '1. Application', descEn: 'Submission at local Akhuwat branch or mosque committee', descUr: 'قریبی اخوت برانچ یا مسجد کمیٹی میں فارم جمع کروانا' },
      { stage: '2. Social Appraisal', descEn: 'Community social appraisal & guarantor verification', descUr: 'کمیونٹی اور ضامن کی تصدیق' },
      { stage: '3. Approval', descEn: 'Loan committee Qarz-e-Hasna approval', descUr: 'قرض حسنہ کمیٹی کی منظوری' },
      { stage: '4. Cheque Issue', descEn: 'Interest-free cheque issuance ceremony', descUr: 'بلاسود چیک کا اجرا' },
    ],
  },
  hbfc: {
    id: 'hbfc',
    nameEn: 'HBFC Ghar Pakistan Housing Loan Scheme',
    nameUr: 'ایچ بی ایف سی گھر پاکستان ہاؤسنگ سکیم',
    maxAmount: 'Up to PKR 25,000,000',
    portalUrl: 'https://www.hbfc.com.pk/',
    helpline: '021-35641711 / 0800-42321',
    verificationMethod: '13-Digit CNIC / HBFC Lead ID',
    verificationMethodUr: 'شناختی کارڈ یا ایچ بی ایف سی لیڈ آئی ڈی',
    approvalStages: [
      { stage: '1. Title Search', descEn: 'Legal scrutiny of property ownership documents', descUr: 'اراضی اور جائیداد کے کاغذات کی قانونی جانچ' },
      { stage: '2. Valuation', descEn: 'Approved survey firm property valuation', descUr: 'منظور شدہ سروے کمپنی کی جانب سے تخمینہ' },
      { stage: '3. Approval', descEn: 'Credit committee long-term mortgage sanction', descUr: 'طویل مدتی مارگیج کی باقاعدہ منظوری' },
      { stage: '4. Disbursement', descEn: 'Direct pay order issued to seller / builder', descUr: 'فروخت کنندہ یا تعمیراتی کمپنی کو ادائیگی' },
    ],
  },
  greentractor: {
    id: 'greentractor',
    nameEn: 'CM Punjab Green Tractor Scheme 2026',
    nameUr: 'وزیراعلی پنجاب گرین ٹریکٹر سکیم 2026',
    maxAmount: 'PKR 1,000,000 (10 Lakh Subsidy)',
    portalUrl: 'https://gts.punjab.gov.pk/',
    helpline: '0800-17000 / (042) 99200732',
    verificationMethod: '13-Digit Kissan CNIC Verification',
    verificationMethodUr: 'کسان شناختی کارڈ کے ذریعے تصدیق',
    approvalStages: [
      { stage: '1. Kissan Card', descEn: 'Punjab Agriculture Department landholding check', descUr: 'زرعی اراضی اور کسان کارڈ ریکارڈ کی جانچ' },
      { stage: '2. Balloting', descEn: 'Transparent computerized district quota draw', descUr: 'ضلعی کوٹہ کے تحت شفاف کمپیوٹرائزڈ قرعہ اندازی' },
      { stage: '3. Allotment', descEn: 'Subsidy voucher allotment for authorized tractor maker', descUr: 'ٹریکٹر ساز کمپنی کے نام سبسڈی واؤچر کا اجرا' },
      { stage: '4. Delivery', descEn: 'Tractor delivery at subsidized subsidized price', descUr: 'سبسیڈائزڈ قیمت پر ٹریکٹر کی ہینڈ اوور' },
    ],
  },
};

export const LoanStatusTracker: React.FC = () => {
  const { t } = useLanguage();

  const [activeScheme, setActiveScheme] = useState<LoanSchemeKey>('apnichhat');
  const [cnicInput, setCnicInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [validated, setValidated] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const scheme = LOAN_SCHEMES[activeScheme];

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = cnicInput.replace(/[^0-9]/g, '');

    if (!clean) {
      setErrorMsg(t('Please enter your 13-digit CNIC to track loan status.', 'لون سٹیٹس جاننے کے لیے 13 ہندسوں کا شناختی کارڈ درج کریں۔'));
      setValidated(false);
      return;
    }

    if (clean.length !== 13) {
      setErrorMsg(t(`CNIC must be exactly 13 digits. You entered ${clean.length} digits.`, `شناختی کارڈ کے پورے 13 ہندسے ہونے چاہئیں۔ آپ نے ${clean.length} ہندسے درج کیے۔`));
      setValidated(false);
      return;
    }

    setErrorMsg(null);
    setValidated(true);
  };

  const handleCopy = () => {
    const clean = cnicInput.replace(/[^0-9]/g, '');
    if (!clean) return;

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(clean).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  const cleanCnic = cnicInput.replace(/[^0-9]/g, '');

  return (
    <div className="my-8 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-doc-ink overflow-hidden shadow-lg">
      {/* Header */}
      <div className="px-5 py-4 bg-doc-ink text-white flex items-center justify-between gap-3 border-b border-doc-brass/20">
        <div className="flex items-center gap-2.5">
          <Landmark className="w-5 h-5 text-doc-brass shrink-0" />
          <div>
            <h3 className="font-serif font-bold text-sm text-white leading-tight">
              {t('Official Govt Loan Application Status Tracker 2026', 'سرکاری قرضہ درخواست ٹریکر 2026')}
            </h3>
            <p className="text-[10px] text-slate-400 font-mono">
              {t('Apni Chhat, PM Youth Loan & Akhuwat Dashboard Navigator', 'اپنی چھت اور پی ایم یوتھ لون پورٹل رہنمائی')}
            </p>
          </div>
        </div>
        <InteractiveToolBadge labelEn="STATUS NAVIGATOR" labelUr="سٹیٹس ٹریکر" variant="gold" />
      </div>

      <div className="p-5 sm:p-6 space-y-5">
        {/* Scheme Selector */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
            <Building className="w-4 h-4 text-doc-seal dark:text-red-400" />
            <span>{t('Select Government Loan Program:', 'سرکاری لون پروگرام منتخب کریں:')}</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {(Object.keys(LOAN_SCHEMES) as LoanSchemeKey[]).map((key) => {
              const s = LOAN_SCHEMES[key];
              const isSelected = activeScheme === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setActiveScheme(key);
                    setValidated(false);
                    setErrorMsg(null);
                  }}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition min-h-[58px] ${
                    isSelected
                      ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                      : 'bg-doc-paper/70 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
                  }`}
                >
                  <span className="font-serif font-bold text-xs leading-tight">{t(s.nameEn, s.nameUr)}</span>
                  <span className="text-[10px] font-mono text-slate-400 mt-1">{s.maxAmount}</span>
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
                {t('Applicant CNIC Number (13 Digits):', 'امیدوار کا شناختی کارڈ نمبر:')}
              </label>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                REQUIRES 13 DIGITS
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
            <span>{t(`VERIFY CNIC & OPEN ${scheme.nameEn.split(' ')[0]} PORTAL`, `شناختی کارڈ تصدیق کریں اور پورٹل کھولیں`)}</span>
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

            {/* Stage-by-Stage Roadmap */}
            <div className="space-y-2 text-xs font-sans">
              <p className="font-bold text-white flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-doc-brass" />
                <span>{t('Official Application Approval Stages:', 'قرضہ درخواست کی منظوری کے مراحل:')}</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[11px]">
                {scheme.approvalStages.map((st, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                    <p className="font-bold text-doc-brass">{st.stage}</p>
                    <p className="text-slate-300 text-[10px] font-sans mt-0.5">{t(st.descEn, st.descUr)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <a
              href={scheme.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-doc-brass to-amber-500 hover:from-amber-500 hover:to-amber-400 text-doc-ink font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-lg min-h-[48px]"
            >
              <span>{t(`OPEN OFFICIAL ${scheme.nameEn.toUpperCase()} DASHBOARD`, `آفیشل پورٹل لاگ ان پر جائیں`)}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="pt-2 border-t border-doc-brass/20 flex items-center justify-between text-xs text-slate-400 font-sans">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-doc-brass" />
                <span>Helpline: {scheme.helpline}</span>
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400 font-sans flex items-center justify-between">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>{t('100% Ephemeral — Zero CNIC storage', 'کوئی شناختی کارڈ نمبر محفوظ نہیں کیا جاتا')}</span>
        </span>
      </div>
    </div>
  );
};
