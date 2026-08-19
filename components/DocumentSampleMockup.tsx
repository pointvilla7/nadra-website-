'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { ShieldCheck, Info, Sparkles, ZoomIn, CheckCircle2, Lock } from 'lucide-react';

export type DocumentType = 
  | 'cnic' 
  | 'passport' 
  | 'nikahnama' 
  | 'fard' 
  | 'estamp' 
  | 'sehatcard' 
  | 'domicile' 
  | 'ntn' 
  | 'bill' 
  | 'drivinglicense';

interface DocumentSampleMockupProps {
  documentType: DocumentType;
  titleEn?: string;
  titleUr?: string;
  captionEn?: string;
  captionUr?: string;
}

export const DocumentSampleMockup: React.FC<DocumentSampleMockupProps> = ({
  documentType,
  titleEn,
  titleUr,
  captionEn,
  captionUr
}) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'front' | 'security'>('front');

  const renderDocument = () => {
    switch (documentType) {
      case 'cnic':
        return (
          <div className="w-full max-w-md mx-auto bg-gradient-to-br from-emerald-900 via-teal-950 to-slate-900 text-white rounded-2xl p-5 border-2 border-emerald-500/40 shadow-2xl relative overflow-hidden font-mono">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-emerald-500/30 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-xs font-bold font-serif">🇵🇰</span>
                <div>
                  <div className="text-[11px] font-bold tracking-wider text-emerald-300 font-serif">GOVERNMENT OF PAKISTAN</div>
                  <div className="text-[9px] text-slate-300">National Database & Registration Authority</div>
                </div>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                SMART CNIC
              </span>
            </div>

            {/* Card Body */}
            <div className="grid grid-cols-3 gap-3 items-center mb-4">
              {/* Photo Box */}
              <div className="w-full aspect-[3/4] bg-slate-800/80 rounded-xl border border-emerald-500/30 flex flex-col items-center justify-center text-center p-2 relative">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center mb-1 text-slate-400">👤</div>
                <span className="text-[8px] text-slate-400">SPECIMEN PHOTO</span>
                <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-500/80 flex items-center justify-center text-[7px]">✓</div>
              </div>

              {/* Data Fields */}
              <div className="col-span-2 space-y-2 text-left">
                <div>
                  <div className="text-[8px] text-slate-400 uppercase">Identity Number (شناختی کارڈ نمبر)</div>
                  <div className="text-xs font-bold text-amber-300 tracking-wider bg-black/40 px-2 py-1 rounded border border-amber-500/30 inline-block">
                    35202-XXXXXXX-X
                  </div>
                </div>
                <div>
                  <div className="text-[8px] text-slate-400 uppercase">Citizen Name (نام)</div>
                  <div className="text-[11px] font-bold text-white">CITIZEN NAME SPECIMEN</div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[9px]">
                  <div>
                    <span className="text-slate-400 block text-[8px]">GENDER</span>
                    <span className="text-slate-200">M / F</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[8px]">EXPIRY DATE</span>
                    <span className="text-emerald-300 font-bold">10 YRS / LIFETIME</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Microchip & Security Bar */}
            <div className="flex items-center justify-between border-t border-emerald-500/20 pt-2 text-[8px] text-slate-400">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Microchip Embedded & QR Verified</span>
              </div>
              <span className="text-slate-500">PAK-ID SECURE SPECIMEN</span>
            </div>
          </div>
        );

      case 'passport':
        return (
          <div className="w-full max-w-md mx-auto bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 text-white rounded-2xl p-5 border-2 border-blue-500/40 shadow-2xl relative overflow-hidden font-mono">
            {/* Passport Header */}
            <div className="flex items-center justify-between border-b border-blue-500/30 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-lg">🇵🇰</span>
                <div>
                  <div className="text-xs font-bold tracking-wider text-blue-300 font-serif">ISLAMIC REPUBLIC OF PAKISTAN</div>
                  <div className="text-[9px] text-slate-300">Machine Readable Passport (MRP)</div>
                </div>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                OFFICIAL
              </span>
            </div>

            {/* Passport Data Page */}
            <div className="grid grid-cols-3 gap-3 items-center mb-3">
              <div className="w-full aspect-[3/4] bg-slate-800/90 rounded-xl border border-blue-500/30 flex flex-col items-center justify-center p-2 text-center">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center mb-1 text-slate-400">🛂</div>
                <span className="text-[8px] text-slate-400">DIGITAL PHOTO</span>
              </div>

              <div className="col-span-2 space-y-1.5 text-left text-[10px]">
                <div>
                  <span className="text-[8px] text-slate-400 block">PASSPORT NO. (پاسپورٹ نمبر)</span>
                  <span className="font-bold text-amber-300 tracking-wider bg-black/40 px-2 py-0.5 rounded border border-amber-500/30">
                    AA1234567 (9 Digits)
                  </span>
                </div>
                <div>
                  <span className="text-[8px] text-slate-400 block">NATIONALITY</span>
                  <span className="text-white font-bold">PAKISTANI (PAK)</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[9px]">
                  <div>
                    <span className="text-[8px] text-slate-400 block">BOOKLET</span>
                    <span>36 / 72 / 100 Pgs</span>
                  </div>
                  <div>
                    <span className="text-[8px] text-slate-400 block">VALIDITY</span>
                    <span className="text-emerald-300 font-bold">5 / 10 Years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* MRZ Optical Code Bar */}
            <div className="bg-black/60 p-2 rounded-lg border border-white/10 text-[8px] tracking-widest text-slate-400 text-left font-mono">
              P&lt;PAKCITIZEN&lt;&lt;SPECIMEN&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;<br />
              AA12345678PAK8501015M31010123520212345678&lt;42
            </div>
          </div>
        );

      case 'nikahnama':
        return (
          <div className="w-full max-w-md mx-auto bg-gradient-to-br from-amber-950/90 via-slate-900 to-amber-950 text-amber-100 rounded-2xl p-5 border-2 border-amber-500/40 shadow-2xl relative font-serif">
            <div className="text-center border-b border-amber-500/30 pb-3 mb-3">
              <div className="text-xs font-bold tracking-widest text-amber-300">نکاح نامہ رجسٹریشن فارم (نمونہ)</div>
              <div className="text-[10px] text-slate-300 font-sans">Muslim Family Laws Ordinance 1961 – Union Council MRC</div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-left text-[10px] font-sans mb-3">
              <div className="p-2 rounded bg-black/40 border border-amber-500/20">
                <span className="text-[8px] text-amber-400 block font-bold">کالم 13-16: حق مہر (Dower)</span>
                <span className="text-slate-200">موجل / غیر موجل مہر تفصیل</span>
              </div>
              <div className="p-2 rounded bg-black/40 border border-amber-500/20">
                <span className="text-[8px] text-amber-400 block font-bold">کالم 18-19: طلاق تفویض</span>
                <span className="text-slate-200">حق طلاق تفویض کا اندراج</span>
              </div>
              <div className="p-2 rounded bg-black/40 border border-amber-500/20">
                <span className="text-[8px] text-amber-400 block font-bold">شناختی کوائف</span>
                <span className="text-slate-200">دلہا، دلہن و گواہان کے CNIC</span>
              </div>
              <div className="p-2 rounded bg-black/40 border border-amber-500/20">
                <span className="text-[8px] text-amber-400 block font-bold">یونین کونسل اندراج</span>
                <span className="text-emerald-300 font-bold">NADRA MRC سیکیورٹی پیپر</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[9px] text-amber-300/80 border-t border-amber-500/20 pt-2 font-sans">
              <span>🏛️ یونین کونسل مہر و دستخط</span>
              <span className="text-emerald-400 font-bold">30 دن میں اندراج لازمی</span>
            </div>
          </div>
        );

      case 'estamp':
        return (
          <div className="w-full max-w-md mx-auto bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white rounded-2xl p-5 border-2 border-indigo-500/40 shadow-2xl relative font-mono">
            <div className="flex items-center justify-between border-b border-indigo-500/30 pb-2 mb-3">
              <div className="text-left">
                <div className="text-[11px] font-bold text-indigo-300 font-serif">GOVERNMENT OF PUNJAB</div>
                <div className="text-[9px] text-slate-400">e-Stamping System (Challan 32-A)</div>
              </div>
              <div className="w-10 h-10 bg-white p-1 rounded border border-slate-300 flex items-center justify-center text-slate-900 text-xs font-bold">
                QR
              </div>
            </div>

            <div className="space-y-2 text-left text-[10px] mb-3">
              <div>
                <span className="text-[8px] text-slate-400 block">16-DIGIT e-STAMP CERTIFICATE / PSID</span>
                <span className="font-bold text-amber-300 tracking-wider bg-black/40 px-2 py-0.5 rounded border border-amber-500/30 inline-block">
                  PB-LHR-2026-XXXXXXXXXXXX
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[9px]">
                <div>
                  <span className="text-[8px] text-slate-400 block">DEED TYPE</span>
                  <span className="text-white">Baye / Rent / Affidavit</span>
                </div>
                <div>
                  <span className="text-[8px] text-slate-400 block">STAMP VALUE</span>
                  <span className="text-emerald-300 font-bold">PKR 100 / DC Rate %</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[8px] text-slate-400 border-t border-indigo-500/20 pt-2">
              <span className="text-emerald-400">✓ SMS 8100 Verification Active</span>
              <span>1Link & Bank Payable</span>
            </div>
          </div>
        );

      case 'fard':
        return (
          <div className="w-full max-w-md mx-auto bg-gradient-to-br from-stone-900 via-amber-950/80 to-stone-950 text-stone-100 rounded-2xl p-5 border-2 border-amber-600/40 shadow-2xl relative font-mono">
            <div className="flex items-center justify-between border-b border-amber-500/30 pb-2 mb-3">
              <div className="text-left">
                <div className="text-[11px] font-bold text-amber-300 font-serif">PUNJAB LAND RECORDS AUTHORITY</div>
                <div className="text-[9px] text-slate-300">Computerized Fard Malkiat (فرد ملکیت)</div>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                ARC ISSUED
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-left text-[10px] mb-3">
              <div className="p-1.5 rounded bg-black/40 border border-amber-500/20">
                <span className="text-[8px] text-slate-400 block">KHEWAT NO.</span>
                <span className="text-amber-300 font-bold">142/180</span>
              </div>
              <div className="p-1.5 rounded bg-black/40 border border-amber-500/20">
                <span className="text-[8px] text-slate-400 block">KHATUNI NO.</span>
                <span className="text-slate-200">540</span>
              </div>
              <div className="p-1.5 rounded bg-black/40 border border-amber-500/20">
                <span className="text-[8px] text-slate-400 block">AREA (رقبہ)</span>
                <span className="text-emerald-300 font-bold">1 Kanal 4 Marla</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[8px] text-slate-400 border-t border-amber-500/20 pt-2">
              <span>Purpose: Baye (Sale) / Zamanat (Bail)</span>
              <span className="text-emerald-400 font-bold">Valid for 30 Days</span>
            </div>
          </div>
        );

      case 'sehatcard':
        return (
          <div className="w-full max-w-md mx-auto bg-gradient-to-br from-emerald-900 via-teal-950 to-slate-900 text-white rounded-2xl p-5 border-2 border-emerald-500/40 shadow-2xl relative font-mono">
            <div className="flex items-center justify-between border-b border-emerald-500/30 pb-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">🏥</span>
                <div>
                  <div className="text-[11px] font-bold text-emerald-300 font-serif">SEHAT SAHULAT PROGRAM</div>
                  <div className="text-[9px] text-slate-300">National Health Insurance Card</div>
                </div>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                100% FREE
              </span>
            </div>

            <div className="space-y-2 text-left text-[10px] mb-3">
              <div>
                <span className="text-[8px] text-slate-400 block">FAMILY COVERAGE LIMIT</span>
                <div className="text-sm font-bold text-amber-300 tracking-wider">
                  PKR 1,000,000 / Year (10 Lakh)
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[9px]">
                <div>
                  <span className="text-[8px] text-slate-400 block">CHECK VIA SMS</span>
                  <span className="text-white font-bold">Send CNIC to 8500</span>
                </div>
                <div>
                  <span className="text-[8px] text-slate-400 block">IDENTIFIER</span>
                  <span className="text-emerald-300 font-bold">Original CNIC / B-Form</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[8px] text-slate-400 border-t border-emerald-500/20 pt-2">
              <span className="text-emerald-400">1,000+ Empaneled Hospitals</span>
              <span>Cashless Indoor Surgeries</span>
            </div>
          </div>
        );

      case 'ntn':
        return (
          <div className="w-full max-w-md mx-auto bg-gradient-to-br from-slate-900 via-sky-950 to-slate-950 text-white rounded-2xl p-5 border-2 border-sky-500/40 shadow-2xl relative font-mono">
            <div className="flex items-center justify-between border-b border-sky-500/30 pb-2 mb-3">
              <div className="text-left">
                <div className="text-[11px] font-bold text-sky-300 font-serif">FEDERAL BOARD OF REVENUE</div>
                <div className="text-[9px] text-slate-300">National Tax Number (NTN) Certificate</div>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                ACTIVE FILER
              </span>
            </div>

            <div className="space-y-2 text-left text-[10px] mb-3">
              <div>
                <span className="text-[8px] text-slate-400 block">NATIONAL TAX NUMBER (NTN)</span>
                <span className="font-bold text-amber-300 tracking-wider bg-black/40 px-2 py-0.5 rounded border border-amber-500/30 inline-block">
                  7-Digit NTN / 13-Digit CNIC
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[9px]">
                <div>
                  <span className="text-[8px] text-slate-400 block">CATEGORY</span>
                  <span className="text-white">Individual / Business / AOP</span>
                </div>
                <div>
                  <span className="text-[8px] text-slate-400 block">REGISTRATION</span>
                  <span className="text-emerald-300 font-bold">100% Free on Iris 2.0</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[8px] text-slate-400 border-t border-sky-500/20 pt-2">
              <span>FBR Active Taxpayer List (ATL)</span>
              <span className="text-emerald-400">0% Cash Withdrawal WHT</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full max-w-md mx-auto bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-5 border border-slate-700 text-center font-mono">
            <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">OFFICIAL DOCUMENT SPECIMEN</div>
            <div className="text-sm font-bold text-doc-brass">VERIFIED CITIZEN FORMAT</div>
          </div>
        );
    }
  };

  return (
    <figure className="my-6 p-4 sm:p-6 bg-slate-900/60 dark:bg-doc-dark-card/90 rounded-2xl border border-doc-brass/30 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-doc-brass animate-pulse" />
          <h3 className="text-sm font-bold font-serif text-slate-100 flex items-center gap-1.5">
            <span>{t(titleEn || 'Official Document Reference Mockup', titleUr || 'سرکاری دستاویز کا تصدیق شدہ نمونہ')}</span>
          </h3>
        </div>
        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30 self-start sm:self-auto flex items-center gap-1">
          <ShieldCheck className="w-3 h-3" />
          <span>{t('GENERIC SPECIMEN (NO REAL DATA)', 'نمونہ دستاویز (کوئی ذاتی ڈیٹا نہیں)')}</span>
        </span>
      </div>

      {/* Render Document */}
      <div className="py-2">
        {renderDocument()}
      </div>

      {captionEn && (
        <figcaption className="mt-3 text-center text-xs text-slate-400 dark:text-slate-400 font-sans italic">
          ℹ️ {t(captionEn, captionUr || captionEn)}
        </figcaption>
      )}
    </figure>
  );
};
