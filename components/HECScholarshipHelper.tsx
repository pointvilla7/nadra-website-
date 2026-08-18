'use client';

import React, { useState } from 'react';
import {
  Award,
  ExternalLink,
  ShieldCheck,
  Lock,
  CheckCircle2,
  Phone,
  Mail,
  Info,
  ChevronDown,
  Globe,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

// =============================================================
// HEC SCHOLARSHIP DATA — verified from HEC official portal
// Why Guided Helper: Status is ONLY visible after login to
// eportal.hec.gov.pk — no public anonymous lookup exists.
// =============================================================

export interface HECScholarship {
  id: string;
  nameEn: string;
  nameUr: string;
  targetEn: string;
  targetUr: string;
  portalUrl: string;
  openNow: boolean;
}

export const HEC_SCHOLARSHIPS: HECScholarship[] = [
  {
    id: 'need-based',
    nameEn: 'Need-Based Scholarship (NBS)',
    nameUr: 'ضرورت پر مبنی سکالرشپ',
    targetEn: 'Financial need-based students enrolled in HEC-recognized universities',
    targetUr: 'مستحق طالب علم جو HEC منظور شدہ یونیورسٹیوں میں داخل ہیں',
    portalUrl: 'https://eportal.hec.gov.pk',
    openNow: true,
  },
  {
    id: 'indigenous',
    nameEn: 'Indigenous PhD Fellowship',
    nameUr: 'انڈیجینس پی ایچ ڈی فیلوشپ',
    targetEn: 'Pakistani nationals for PhD programs at HEC-recognized universities',
    targetUr: 'پاکستانی طالب علم جو HEC منظور شدہ اداروں میں پی ایچ ڈی کر رہے ہیں',
    portalUrl: 'https://eportal.hec.gov.pk',
    openNow: false,
  },
  {
    id: 'overseas',
    nameEn: 'Overseas Scholarship (Phase III)',
    nameUr: 'اوورسیز سکالرشپ فیز III',
    targetEn: 'Faculty members for PhD abroad at top-ranked universities',
    targetUr: 'یونیورسٹی فیکلٹی کے لیے بیرون ملک پی ایچ ڈی',
    portalUrl: 'https://eportal.hec.gov.pk',
    openNow: false,
  },
  {
    id: 'merit',
    nameEn: "Prime Minister's Merit Scholarship",
    nameUr: 'وزیراعظم میرٹ سکالرشپ',
    targetEn: 'Top academic achievers in Pakistan for undergraduate studies',
    targetUr: 'اعلیٰ نتائج حاصل کرنے والے طالب علم برائے گریجویشن',
    portalUrl: 'https://eportal.hec.gov.pk',
    openNow: true,
  },
  {
    id: 'uraan',
    nameEn: 'Uraan Pakistan Scholarship',
    nameUr: 'اڑان پاکستان سکالرشپ',
    targetEn: 'Talented students from underprivileged areas for higher education',
    targetUr: 'پسماندہ علاقوں کے ہونہار طالب علم برائے اعلیٰ تعلیم',
    portalUrl: 'https://eportal.hec.gov.pk',
    openNow: true,
  },
];

const LOGIN_STEPS = [
  {
    step: 1,
    titleEn: 'Go to HEC E-Portal',
    titleUr: 'HEC ای پورٹل پر جائیں',
    descEn: 'Open your browser and go to eportal.hec.gov.pk',
    descUr: 'اپنے براؤزر میں eportal.hec.gov.pk کھولیں',
    url: 'https://eportal.hec.gov.pk',
    urlLabel: 'Open HEC E-Portal',
  },
  {
    step: 2,
    titleEn: 'Click "Login" / "Sign In"',
    titleUr: '"لاگ ان" بٹن دبائیں',
    descEn: 'Click the Login button on the top-right corner of the page.',
    descUr: 'صفحہ کے اوپر دائیں طرف "Login" بٹن دبائیں۔',
  },
  {
    step: 3,
    titleEn: 'Enter Your CNIC & Password',
    titleUr: 'شناختی کارڈ اور پاس ورڈ درج کریں',
    descEn: 'Use the CNIC (without dashes) and the password you registered with.',
    descUr: 'اپنا شناختی کارڈ نمبر (بغیر ڈیش) اور رجسٹریشن کا پاس ورڈ درج کریں۔',
  },
  {
    step: 4,
    titleEn: 'Go to "My Applications"',
    titleUr: '"میری درخواستیں" سیکشن کھولیں',
    descEn: 'After login, navigate to "My Applications" in the dashboard to see your scholarship status.',
    descUr: 'لاگ ان کے بعد ڈیش بورڈ میں "My Applications" پر جائیں تاکہ سکالرشپ کی صورتحال دیکھ سکیں۔',
  },
];

interface HECScholarshipHelperProps {
  compact?: boolean;
  className?: string;
  hideHeader?: boolean;
}

export const HECScholarshipHelper: React.FC<HECScholarshipHelperProps> = ({
  compact = false,
  className = '',
  hideHeader = false,
}) => {
  const { t } = useLanguage();
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [troubleshootOpen, setTroubleshootOpen] = useState(false);

  return (
    <div
      className={`w-full max-w-[560px] mx-auto rounded-2xl doc-card border-2 border-doc-brass/40 shadow-xl overflow-hidden bg-white dark:bg-doc-dark-card text-doc-ink dark:text-slate-100 transition-all ${className}`}
    >
      {/* Header */}
      {!hideHeader && (
        <div className="bg-doc-ink text-white p-5 sm:p-6 border-b-2 border-doc-brass/40 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-48 h-48 bg-doc-seal/15 rounded-full blur-2xl pointer-events-none"
          />
          <div className="flex items-center justify-between gap-2 mb-2">
            <InteractiveToolBadge labelEn="STATUS GUIDE" labelUr="سٹیٹس گائیڈ" variant="gold" />
            <div className="flex items-center gap-1 text-[11px] font-mono text-amber-400 font-bold">
              <Lock className="w-3.5 h-3.5" />
              <span>LOGIN REQUIRED</span>
            </div>
          </div>
          <div className="flex items-start gap-3 mt-3">
            <div className="p-2.5 rounded-xl bg-doc-brass/20 text-doc-brass border border-doc-brass/40 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-tight">
                {t('HEC Scholarship Status 2026', 'ایچ ای سی سکالرشپ سٹیٹس 2026')}
              </h2>
              <p className="text-xs text-slate-300 mt-1 font-sans">
                {t(
                  'Step-by-step guide to check your HEC scholarship status on the official portal',
                  'سرکاری HEC پورٹل پر سکالرشپ سٹیٹس چیک کرنے کی مرحلہ وار رہنمائی'
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Why Login Required Notice */}
      <div className="px-5 pt-4 pb-0">
        <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs font-sans text-amber-800 dark:text-amber-300 flex items-start gap-2">
          <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
          <span>
            {t(
              'HEC scholarship status can only be viewed after logging into your HEC applicant account at eportal.hec.gov.pk — no public anonymous lookup exists for security reasons.',
              'HEC سکالرشپ سٹیٹس صرف eportal.hec.gov.pk پر اپنے اکاؤنٹ سے لاگ ان کرنے کے بعد دیکھا جا سکتا ہے — سیکیورٹی کی وجہ سے عوامی لُک اپ موجود نہیں۔'
            )}
          </span>
        </div>
      </div>

      {/* Main Body */}
      <div className="p-5 sm:p-6 space-y-5">
        {/* Step-by-Step Guide */}
        <div className="space-y-2.5">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-doc-ink dark:text-doc-brass">
            {t('How to Check Your Status (Step by Step)', 'اپنا سٹیٹس کیسے چیک کریں (مرحلہ وار)')}
          </p>
          <div className="space-y-2">
            {LOGIN_STEPS.map((step) => (
              <div
                key={step.step}
                className="rounded-xl border border-doc-brass/30 bg-doc-paper dark:bg-slate-800/80 overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full flex items-center gap-3 p-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal"
                  onClick={() => setExpandedStep(expandedStep === step.step ? null : step.step)}
                  aria-expanded={expandedStep === step.step}
                >
                  <span className="w-7 h-7 rounded-full bg-doc-seal text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    {step.step}
                  </span>
                  <span className="flex-1 font-serif font-bold text-sm text-doc-ink dark:text-white">
                    {t(step.titleEn, step.titleUr)}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-doc-brass transition-transform ${expandedStep === step.step ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedStep === step.step && (
                  <div className="px-4 pb-4 space-y-2">
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                      {t(step.descEn, step.descUr)}
                    </p>
                    {step.url && (
                      <a
                        href={step.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 py-2 px-3 rounded-lg bg-doc-seal text-white font-mono font-bold text-xs hover:bg-red-700 transition min-h-[40px]"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>{t(step.urlLabel!, step.urlLabel!)}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Link */}
        <a
          href="https://eportal.hec.gov.pk"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 px-5 rounded-xl bg-doc-ink hover:bg-slate-800 text-doc-brass border-2 border-doc-brass/50 font-mono font-extrabold text-sm flex items-center justify-center gap-2 transition shadow-xl min-h-[52px]"
        >
          <span>{t('OPEN HEC E-PORTAL (eportal.hec.gov.pk)', 'HEC ای پورٹل کھولیں')}</span>
          <ExternalLink className="w-4 h-4" />
        </a>

        {/* Available Scholarships */}
        <div className="space-y-2.5">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-doc-ink dark:text-doc-brass">
            {t('Major HEC Scholarships 2026', 'اہم HEC سکالرشپس 2026')}
          </p>
          <div className="space-y-2">
            {HEC_SCHOLARSHIPS.map((s) => (
              <div
                key={s.id}
                className="flex items-start gap-3 p-3 rounded-xl bg-doc-paper dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700"
              >
                <div
                  className={`mt-0.5 w-2 h-2 rounded-full shrink-0 ${
                    s.openNow ? 'bg-emerald-500' : 'bg-slate-400 dark:bg-slate-600'
                  }`}
                />
                <div>
                  <p className="font-serif font-bold text-xs text-doc-ink dark:text-white">
                    {t(s.nameEn, s.nameUr)}
                    <span
                      className={`ml-2 text-[10px] font-mono font-bold ${
                        s.openNow ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'
                      }`}
                    >
                      {s.openNow ? t('Open Now', 'اب کھلی ہے') : t('Closed / TBA', 'بند / TBA')}
                    </span>
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 font-sans mt-0.5">
                    {t(s.targetEn, s.targetUr)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <button
            type="button"
            className="w-full flex items-center justify-between gap-2 p-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal"
            onClick={() => setTroubleshootOpen(!troubleshootOpen)}
            aria-expanded={troubleshootOpen}
          >
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              {t('Troubleshooting Login Issues', 'لاگ ان میں مسئلہ؟')}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-doc-brass transition-transform ${troubleshootOpen ? 'rotate-180' : ''}`}
            />
          </button>
          {troubleshootOpen && (
            <div className="px-4 pb-4 space-y-2 text-xs font-sans text-slate-600 dark:text-slate-300">
              <ul className="space-y-1.5 list-disc ml-4">
                <li>{t('Forgot password? Click "Forgot Password" on the login page and reset via your registered email.', 'پاس ورڈ بھول گئے؟ لاگ ان صفحے پر "Forgot Password" کلک کریں۔')}</li>
                <li>{t('Seeing "No Record Found"? Check the Announcements tab in your dashboard — some updates appear there.', '"No Record Found" دکھ رہا ہے؟ اپنے ڈیش بورڈ میں Announcements ٹیب چیک کریں۔')}</li>
                <li>{t('Try clearing browser cache or use a different browser (Chrome recommended).', 'براؤزر کیش صاف کریں یا دوسرا براؤزر آزمائیں (Chrome تجویز کردہ ہے)۔')}</li>
                <li>{t('If account not found, contact HEC helpdesk with your CNIC and application reference.', 'اگر اکاؤنٹ نہیں ملتا تو HEC ہیلپ ڈیسک سے اپنے CNIC اور درخواست نمبر کے ساتھ رابطہ کریں۔')}</li>
              </ul>
            </div>
          )}
        </div>

        {/* HEC Contact Info */}
        <div className="p-4 rounded-xl bg-doc-ink text-white border border-doc-brass/40 space-y-3">
          <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-doc-brass">
            {t('HEC Helpdesk & Contact', 'HEC ہیلپ ڈیسک رابطہ')}
          </p>
          <div className="space-y-2">
            <a
              href="tel:+925190401704"
              className="flex items-center gap-2 text-sm hover:text-doc-brass transition min-h-[36px]"
            >
              <Phone className="w-4 h-4 text-doc-brass shrink-0" />
              <span className="font-mono font-bold">+92 51 9040 1704</span>
              <span className="text-xs text-slate-400 font-sans">{t('(HEC Main)', '(HEC ہیڈکوارٹر)')}</span>
            </a>
            <a
              href="mailto:info@hec.gov.pk"
              className="flex items-center gap-2 text-sm hover:text-doc-brass transition min-h-[36px]"
            >
              <Mail className="w-4 h-4 text-doc-brass shrink-0" />
              <span className="font-mono font-bold">info@hec.gov.pk</span>
            </a>
            <a
              href="https://hec.gov.pk/english/scholarshipsgrants"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-doc-brass transition min-h-[36px]"
            >
              <Globe className="w-4 h-4 text-doc-brass shrink-0" />
              <span className="font-mono text-xs">hec.gov.pk/english/scholarshipsgrants</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans space-y-1">
          <p className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-doc-seal shrink-0" />
            <span>{t('Independent Guide — Not Affiliated with HEC', 'آزادانہ گائیڈ — HEC سے وابستہ نہیں')}</span>
          </p>
          <p className="leading-relaxed">
            {t(
              'Pakistan Info Hub is an independent portal, not affiliated with HEC or any government department. Always check the official HEC website for the latest scholarship announcements.',
              'پاکستان انفو ہب ایچ ای سی یا کسی حکومتی ادارے سے وابستہ نہیں۔ سکالرشپ کی تازہ ترین معلومات کے لیے ہمیشہ سرکاری HEC ویب سائٹ دیکھیں۔'
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
