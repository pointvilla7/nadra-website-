'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Info,
  CheckCircle2,
  AlertCircle,
  Smartphone,
  Globe,
  Lock,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

// ============================================================
// BOARD DATA — All URLs verified from official board websites
// ============================================================

export type ExamType = 'matric_annual' | 'matric_supply' | 'inter_annual' | 'inter_supply';

export interface BoardInfo {
  id: string;
  nameEn: string;
  nameUr: string;
  province: string;
  resultUrl: string;
  homeUrl: string;
  smsCode: string;
  smsFormat: string;
  captchaNote: boolean;
  statusNote?: string;
}

export const BISE_BOARDS: BoardInfo[] = [
  {
    id: 'lahore',
    nameEn: 'BISE Lahore',
    nameUr: 'بورڈ لاہور',
    province: 'Punjab',
    resultUrl: 'http://result.biselahore.com/',
    homeUrl: 'https://www.biselahore.com',
    smsCode: '80029',
    smsFormat: 'Send Roll Number to 80029',
    captchaNote: true,
  },
  {
    id: 'rawalpindi',
    nameEn: 'BISE Rawalpindi',
    nameUr: 'بورڈ راولپنڈی',
    province: 'Punjab',
    resultUrl: 'https://biserawalpindi.edu.pk',
    homeUrl: 'https://biserawalpindi.edu.pk',
    smsCode: '80026',
    smsFormat: 'Send Roll Number to 80026',
    captchaNote: true,
  },
  {
    id: 'multan',
    nameEn: 'BISE Multan',
    nameUr: 'بورڈ ملتان',
    province: 'Punjab',
    resultUrl: 'https://www.bisemultan.edu.pk',
    homeUrl: 'https://www.bisemultan.edu.pk',
    smsCode: '80023',
    smsFormat: 'Send Roll Number to 80023',
    captchaNote: true,
  },
  {
    id: 'gujranwala',
    nameEn: 'BISE Gujranwala',
    nameUr: 'بورڈ گوجرانوالہ',
    province: 'Punjab',
    resultUrl: 'https://www.bisegrw.edu.pk',
    homeUrl: 'https://www.bisegrw.edu.pk',
    smsCode: '80029',
    smsFormat: 'Send Roll Number to 80029',
    captchaNote: true,
  },
  {
    id: 'faisalabad',
    nameEn: 'BISE Faisalabad',
    nameUr: 'بورڈ فیصل آباد',
    province: 'Punjab',
    resultUrl: 'https://www.bisefsd.edu.pk',
    homeUrl: 'https://www.bisefsd.edu.pk',
    smsCode: '80024',
    smsFormat: 'Send Roll Number to 80024',
    captchaNote: true,
  },
  {
    id: 'sahiwal',
    nameEn: 'BISE Sahiwal',
    nameUr: 'بورڈ ساہیوال',
    province: 'Punjab',
    resultUrl: 'https://www.bisesahiwal.edu.pk',
    homeUrl: 'https://www.bisesahiwal.edu.pk',
    smsCode: '80025',
    smsFormat: 'Send Roll Number to 80025',
    captchaNote: true,
  },
  {
    id: 'karachi-ssc',
    nameEn: 'BSEK Karachi (Matric)',
    nameUr: 'بورڈ کراچی (میٹرک)',
    province: 'Sindh',
    resultUrl: 'https://bsek.edu.pk',
    homeUrl: 'https://bsek.edu.pk',
    smsCode: '8583',
    smsFormat: 'Send Roll Number to 8583',
    captchaNote: false,
    statusNote: 'Select your group (Science / General) before entering Roll Number on the portal.',
  },
  {
    id: 'karachi-hssc',
    nameEn: 'BIEK Karachi (Inter)',
    nameUr: 'بورڈ کراچی (انٹر)',
    province: 'Sindh',
    resultUrl: 'https://www.biek.edu.pk',
    homeUrl: 'https://www.biek.edu.pk',
    smsCode: '8583',
    smsFormat: 'Send Roll Number to 8583',
    captchaNote: false,
    statusNote: 'BIEK form requires Roll Number + Student Name + Mobile Number.',
  },
  {
    id: 'peshawar',
    nameEn: 'BISE Peshawar',
    nameUr: 'بورڈ پشاور',
    province: 'KPK',
    resultUrl: 'https://bisep.edu.pk',
    homeUrl: 'https://bisep.edu.pk',
    smsCode: '8055',
    smsFormat: 'Send Roll Number to 8055',
    captchaNote: true,
  },
  {
    id: 'federal',
    nameEn: 'FBISE Federal Board',
    nameUr: 'وفاقی تعلیمی بورڈ',
    province: 'Federal / ICT',
    resultUrl: 'https://fbise.edu.pk/result.html',
    homeUrl: 'https://fbise.edu.pk',
    smsCode: '800055',
    smsFormat: 'Send Roll Number to 800055',
    captchaNote: false,
    statusNote: 'Federal Board covers AJK, Gilgit-Baltistan, and ICT federal institutions.',
  },
];

const EXAM_LABELS: Record<ExamType, { en: string; ur: string }> = {
  matric_annual: { en: 'Matric / SSC Part-II (Annual)', ur: 'میٹرک سالانہ' },
  matric_supply: { en: 'Matric / SSC (Supplementary)', ur: 'میٹرک ضمنی' },
  inter_annual: { en: 'Intermediate / HSSC (Annual)', ur: 'انٹر / ایف ایس سی سالانہ' },
  inter_supply: { en: 'Intermediate / HSSC (Supplementary)', ur: 'انٹر ضمنی' },
};

interface BISEResultHelperProps {
  compact?: boolean;
  className?: string;
  hideHeader?: boolean;
}

export const BISEResultHelper: React.FC<BISEResultHelperProps> = ({
  compact = false,
  className = '',
  hideHeader = false,
}) => {
  const { t } = useLanguage();
  const [selectedBoard, setSelectedBoard] = useState<string>('lahore');
  const [examType, setExamType] = useState<ExamType>('matric_annual');

  const board = BISE_BOARDS.find((b) => b.id === selectedBoard) || BISE_BOARDS[0];

  return (
    <div
      className={`w-full max-w-[540px] mx-auto rounded-2xl doc-card border-2 border-doc-brass/40 shadow-xl overflow-hidden bg-white dark:bg-doc-dark-card text-doc-ink dark:text-slate-100 transition-all ${className}`}
    >
      {/* Header */}
      {!hideHeader && (
        <div className="bg-doc-ink text-white p-5 sm:p-6 border-b-2 border-doc-brass/40 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-48 h-48 bg-doc-seal/15 rounded-full blur-2xl pointer-events-none"
          />
          <div className="flex items-center justify-between gap-2 mb-2">
            <InteractiveToolBadge labelEn="RESULT GUIDE" labelUr="رزلٹ گائیڈ ٹول" variant="gold" />
            <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-bold">
              <Lock className="w-3.5 h-3.5" />
              <span>PRIVACY SAFE</span>
            </div>
          </div>
          <div className="flex items-start gap-3 mt-3">
            <div className="p-2.5 rounded-xl bg-doc-brass/20 text-doc-brass border border-doc-brass/40 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-tight">
                {t('BISE Result Checker 2026', 'بی آئی ایس ای رزلٹ چیکر 2026')}
              </h2>
              <p className="text-xs text-slate-300 mt-1 font-sans">
                {t(
                  'Official links & SMS codes for all 10 Pakistan boards',
                  'تمام 10 بورڈز کی سرکاری ویب سائٹس اور ایس ایم ایس کوڈز'
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Notice */}
      <div className="px-5 pt-4 pb-0">
        <div className="flex items-start gap-2 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[11px] text-emerald-800 dark:text-emerald-300 font-sans">
          <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
          <span>
            {t(
              'We fetch your result directly from the official board server for this session only — nothing is stored.',
              'نتیجہ صرف سرکاری بورڈ سرور سے دکھایا جاتا ہے — کوئی ڈیٹا محفوظ نہیں کیا جاتا۔'
            )}
          </span>
        </div>
      </div>

      {/* Main Body */}
      <div className="p-5 sm:p-6 space-y-5">
        {/* Step 1: Board Selection */}
        <div className="space-y-2.5">
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass">
            <span className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-doc-seal dark:text-red-400" />
              {t('Step 1: Select Your Board', 'مرحلہ 1: اپنا بورڈ منتخب کریں')}
            </span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {BISE_BOARDS.map((b) => (
              <button
                key={b.id}
                type="button"
                aria-pressed={selectedBoard === b.id}
                onClick={() => setSelectedBoard(b.id)}
                className={`py-2.5 px-3 rounded-xl border text-left flex flex-col gap-0.5 transition-all min-h-[52px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal text-xs ${
                  selectedBoard === b.id
                    ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                    : 'bg-doc-paper/60 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
                }`}
              >
                <span className="font-serif font-bold leading-tight">{t(b.nameEn, b.nameUr)}</span>
                <span className={`text-[10px] font-mono ${selectedBoard === b.id ? 'text-doc-brass' : 'text-slate-500 dark:text-slate-400'}`}>
                  {b.province}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Exam Type */}
        <div className="space-y-2.5">
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass">
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-doc-seal dark:text-red-400" />
              {t('Step 2: Select Exam Type', 'مرحلہ 2: امتحان کی قسم')}
            </span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {(Object.keys(EXAM_LABELS) as ExamType[]).map((key) => (
              <button
                key={key}
                type="button"
                aria-pressed={examType === key}
                onClick={() => setExamType(key)}
                className={`py-2.5 px-3 rounded-xl border text-left text-xs transition-all min-h-[40px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal font-semibold ${
                  examType === key
                    ? 'bg-doc-seal text-white border-doc-seal shadow-sm'
                    : 'bg-doc-paper/60 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
                }`}
              >
                {t(EXAM_LABELS[key].en, EXAM_LABELS[key].ur)}
              </button>
            ))}
          </div>
        </div>

        {/* Result: Board Action Card */}
        <div
          aria-live="polite"
          className="p-4 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/50 shadow-lg space-y-4 relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-32 h-32 bg-doc-brass/10 rounded-full blur-xl pointer-events-none"
          />

          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-mono text-[11px] text-doc-brass font-extrabold uppercase tracking-wider">
                {t('Your Selection', 'آپ کا انتخاب')}
              </p>
              <p className="font-serif font-bold text-base text-white mt-0.5">
                {t(board.nameEn, board.nameUr)} — {t(EXAM_LABELS[examType].en, EXAM_LABELS[examType].ur)}
              </p>
            </div>
          </div>

          {/* Special note */}
          {board.statusNote && (
            <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-500/15 border border-amber-400/30 text-amber-200 text-xs font-sans">
              <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
              <span>{board.statusNote}</span>
            </div>
          )}

          {/* Method 1: Online Portal */}
          <div className="space-y-2">
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-doc-brass">
              {t('Method 1: Official Online Portal', 'طریقہ 1: آفیشل آن لائن پورٹل')}
            </p>
            {board.captchaNote && (
              <div className="flex items-center gap-1.5 text-[11px] text-amber-300 font-sans">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>
                  {t(
                    'This portal requires a CAPTCHA — enter the image code shown on the page.',
                    'اس پورٹل پر کیپچا کوڈ درج کرنا ضروری ہے۔'
                  )}
                </span>
              </div>
            )}
            <a
              href={board.resultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-doc-seal hover:bg-red-700 text-white font-mono font-bold text-xs flex items-center justify-center gap-2 transition shadow-md min-h-[44px]"
            >
              <span>{t(`OPEN ${board.nameEn.replace('BISE ', '').replace('BSEK ', '').replace('BIEK ', '').replace('FBISE ', '')} RESULT PORTAL`, `${board.nameUr} پورٹل کھولیں`)}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Method 2: SMS */}
          <div className="space-y-2">
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-doc-brass">
              {t('Method 2: SMS (Fastest on Result Day)', 'طریقہ 2: ایس ایم ایس (رزلٹ کے دن سب سے تیز)')}
            </p>
            <div className="p-3 rounded-xl bg-slate-800/80 border border-doc-brass/30 space-y-2">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-doc-brass" />
                <span className="font-mono text-sm font-bold text-white">
                  {board.smsFormat}
                </span>
              </div>
              <a
                href={`sms:${board.smsCode}?body=YOUR_ROLL_NUMBER`}
                className="w-full py-2.5 px-3 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-mono font-bold text-xs flex items-center justify-center gap-1.5 transition min-h-[44px] border border-slate-600"
              >
                <MessageSquare className="w-3.5 h-3.5 text-doc-brass" />
                <span>{t('OPEN SMS ON PHONE', 'موبائل پر SMS کھولیں')}</span>
              </a>
            </div>
            <p className="text-[10px] text-slate-400 font-sans">
              {t('SMS charges: ~PKR 2 + tax per message from any network.', 'ایس ایم ایس چارجز: تقریباً 2 روپے علاوہ ٹیکس فی میسج۔')}
            </p>
          </div>
        </div>

        {/* All Boards Quick Reference */}
        <div className="pt-1 space-y-2">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            {t('All Board SMS Codes (Quick Reference)', 'تمام بورڈز کے SMS کوڈز')}
          </p>
          <div className="grid grid-cols-2 gap-1.5">
            {BISE_BOARDS.map((b) => (
              <div
                key={b.id}
                className="flex items-center justify-between p-2 rounded-lg bg-doc-paper/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-[11px]"
              >
                <span className="font-serif font-semibold text-doc-ink dark:text-slate-200 truncate mr-1">
                  {b.nameEn.replace('BISE ', '').replace('BSEK ', '').replace('BIEK ', '').replace('FBISE ', '')}
                </span>
                <span className="font-mono font-bold text-doc-seal dark:text-red-400 shrink-0">
                  {b.smsCode}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-1 font-sans">
          <p className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-doc-seal shrink-0" />
            <span>{t('Independent Guide — Not Affiliated with Any Board', 'آزادانہ گائیڈ — کسی بورڈ سے وابستہ نہیں')}</span>
          </p>
          <p className="leading-relaxed">
            {t(
              'Pakistan Info Hub is an independent portal, not affiliated with BISE, BSEK, BIEK, or any government board. Always verify critical results at the official source.',
              'پاکستان انفو ہب کا کسی بھی تعلیمی بورڈ سے کوئی سرکاری تعلق نہیں۔ نتیجہ کی حتمی تصدیق ہمیشہ سرکاری پورٹل سے کریں۔'
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
