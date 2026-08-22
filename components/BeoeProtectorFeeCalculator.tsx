'use client';

import React, { useState } from 'react';
import {
  Calculator,
  ShieldCheck,
  Coins,
  Receipt,
  CheckCircle2,
  FileCheck,
  Plane,
  Building,
  QrCode,
  AlertCircle,
  HelpCircle,
  ExternalLink,
  Info
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import Link from 'next/link';

export function BeoeProtectorFeeCalculator() {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const [applicantType, setApplicantType] = useState<'direct' | 'oep'>('direct');
  const [oepServiceFee, setOepServiceFee] = useState<string>('0');

  const feeItems = [
    {
      id: 'opf',
      nameEn: 'OPF Welfare Fund Contribution',
      nameUr: 'او پی ایف ویلفیئر فنڈ',
      amount: 4000,
      detailEn: 'Lifetime OPF membership, education scholarships (OPEF), and family repatriation coverage.',
      detailUr: 'او پی ایف تاحیات ممبرشپ، بچوں کے تعلیمی وظائف اور ہنگامی مالی امداد۔',
    },
    {
      id: 'insurance',
      nameEn: 'State Life Emigrants Insurance Premium',
      nameUr: 'اسٹیٹ لائف انشورنس پریمیم (5 سال)',
      amount: 2500,
      detailEn: '5-year life insurance policy with Rs. 1,000,000 sum assured for overseas workers.',
      detailUr: '5 سالہ لائف انشورنس جس میں 10 لاکھ روپے کا بیمہ کور شامل ہے۔',
    },
    {
      id: 'registration',
      nameEn: 'BEOE Government Registration Fee',
      nameUr: 'بیورو آف ایمیگریشن رجسٹریشن فیس',
      amount: 2500,
      detailEn: 'Official government protectorate clearance stamp and verification fee.',
      detailUr: 'حکومتی پروٹیکٹر اسٹیمپ اور ریکارڈ اندراج کی سرکاری فیس۔',
    },
    {
      id: 'oec',
      nameEn: 'OEC / IT Processing Cess',
      nameUr: 'او ای سی و آئی ٹی پروسیسنگ سیس',
      amount: 200,
      detailEn: 'Centralized database processing and QR code validation cess.',
      detailUr: 'ڈیجیٹل پورٹل اور تصدیقی ریکارڈ کی فیس۔',
    },
  ];

  const totalGovtFee = feeItems.reduce((acc, item) => acc + item.amount, 0); // 9,200
  const agentFeeNum = applicantType === 'oep' ? parseFloat(oepServiceFee.replace(/,/g, '')) || 0 : 0;
  const totalPayable = totalGovtFee + agentFeeNum;

  const formatPKR = (val: number) => {
    return Math.round(val).toLocaleString('en-PK');
  };

  return (
    <div className="doc-card p-5 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <InteractiveToolBadge labelEn="BEOE EMIGRATION FEE CALCULATOR" labelUr="پروٹیکٹر فیس کیلکولیٹر" variant="seal" />
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              Cashless QR System 2026
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-doc-ink dark:text-white">
            {isUrdu ? 'پروٹیکٹر رجسٹریشن فیس کیلکولیٹر' : 'BEOE Protector Fee Breakdown Calculator'}
          </h2>
        </div>

        {/* Applicant Type Toggle */}
        <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
          <button
            type="button"
            onClick={() => setApplicantType('direct')}
            className={`min-h-[44px] px-4 py-2 text-xs font-bold rounded-lg transition ${
              applicantType === 'direct'
                ? 'bg-doc-ink text-white shadow'
                : 'text-slate-600 dark:text-slate-400 hover:text-doc-ink'
            }`}
          >
            {isUrdu ? 'براہ راست ویزہ (Direct Emigrant)' : 'Direct Emigrant'}
          </button>
          <button
            type="button"
            onClick={() => setApplicantType('oep')}
            className={`min-h-[44px] px-4 py-2 text-xs font-bold rounded-lg transition ${
              applicantType === 'oep'
                ? 'bg-doc-ink text-white shadow'
                : 'text-slate-600 dark:text-slate-400 hover:text-doc-ink'
            }`}
          >
            {isUrdu ? 'ایجنٹ کے ذریعے (Via OEP)' : 'Through OEP / Agent'}
          </button>
        </div>
      </div>

      {/* Summary Highlight Box */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-slate-900 text-white border border-slate-800">
        <div className="space-y-1">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            {isUrdu ? 'سرکاری فیس (Fixed Govt Fee)' : 'Official Government Fee'}
          </span>
          <div className="text-2xl sm:text-3xl font-serif font-extrabold text-amber-400 font-mono">
            Rs. {formatPKR(totalGovtFee)}
          </div>
          <span className="text-[11px] text-slate-400 font-sans block">
            {isUrdu ? 'تمام ممالک کے لیے یکساں' : 'Fixed across all countries'}
          </span>
        </div>

        <div className="space-y-1">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            {isUrdu ? 'انشورنس کور (State Life)' : 'Life Insurance Coverage'}
          </span>
          <div className="text-2xl sm:text-3xl font-serif font-extrabold text-emerald-400 font-mono">
            Rs. 1,000,000
          </div>
          <span className="text-[11px] text-slate-400 font-sans block">
            {isUrdu ? '5 سالہ مدت کے لیے مؤثر' : 'Valid for 5 years overseas'}
          </span>
        </div>

        <div className="space-y-1">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            {applicantType === 'oep'
              ? (isUrdu ? 'کل متوقع رقم (بشمول ایجنٹ)' : 'Total Payable (with Agent)')
              : (isUrdu ? 'کل قابل ادا رقم (100% سرکاری)' : 'Total Official Payable')}
          </span>
          <div className="text-2xl sm:text-3xl font-serif font-extrabold text-emerald-300 font-mono">
            Rs. {formatPKR(totalPayable)}
          </div>
          <span className="text-[11px] text-slate-400 font-sans block">
            {isUrdu ? 'بینک چالان / ڈیجیٹل کیو آر' : 'Paid via NBP / 1Link PSID'}
          </span>
        </div>
      </div>

      {/* Itemized Fee Breakdown Table */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Receipt className="w-5 h-5 text-doc-brass" />
          <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
            {isUrdu ? 'سرکاری فیسوں کی مکمل تفصیل (Itemized Breakdown)' : 'Itemized Official Fee Breakdown'}
          </h3>
        </div>

        <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          {/* Mobile Swipe Hint */}
          <div className="md:hidden flex items-center justify-between px-3 py-1.5 bg-doc-ink/5 dark:bg-slate-800/60 text-[11px] font-mono text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
            <span>{isUrdu ? 'فیس تفصیلات کے لیے سکرول کریں' : 'Swipe sideways to view details'}</span>
            <span className="text-[10px] text-slate-400">3 Columns</span>
          </div>

          <div className="table-scroll-container">
            <table className="w-full text-xs font-sans min-w-[480px]">
              <thead className="bg-doc-ink text-white text-[11px] font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left min-w-[140px]">{isUrdu ? 'فیس کی مد' : 'Fee Component'}</th>
                  <th className="px-4 py-3 text-left min-w-[200px]">{isUrdu ? 'تفصیل و فوائد' : 'Description & Benefits'}</th>
                  <th className="px-4 py-3 text-right min-w-[120px]">{isUrdu ? 'رقم (روپے)' : 'Amount (PKR)'}</th>
                </tr>
              </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {feeItems.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition"
                >
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white">
                    {isUrdu ? item.nameUr : item.nameEn}
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                    {isUrdu ? item.detailUr : item.detailEn}
                  </td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-doc-seal">
                    Rs. {formatPKR(item.amount)}
                  </td>
                </tr>
              ))}

              {/* Agent fee row if OEP mode */}
              {applicantType === 'oep' && (
                <tr className="bg-amber-50/50 dark:bg-amber-950/20">
                  <td className="px-4 py-3 font-serif font-bold text-amber-800 dark:text-amber-300">
                    {isUrdu ? 'او ای پی ایجنٹ سروس چارجز (اختیاری)' : 'Licensed OEP Agency Charges'}
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-2">
                      <span>{isUrdu ? 'ایجنٹ کے ساتھ طے شدہ فیس درج کریں:' : 'Enter agreed promoter service fee:'}</span>
                      <input
                        type="text"
                        inputMode="numeric"
                        value={oepServiceFee}
                        onChange={(e) => setOepServiceFee(e.target.value.replace(/[^0-9]/g, ''))}
                        placeholder="0"
                        className="w-28 px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-right font-mono font-bold text-xs focus:ring-1 focus:ring-doc-brass"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-amber-700 dark:text-amber-400">
                    Rs. {formatPKR(agentFeeNum)}
                  </td>
                </tr>
              )}

              <tr className="bg-slate-100 dark:bg-slate-800/80 font-bold">
                <td colSpan={2} className="px-4 py-3 text-doc-ink dark:text-white font-mono uppercase text-right">
                  {isUrdu ? 'کل واجب الادا رقم:' : 'Total Amount Payable:'}
                </td>
                <td className="px-4 py-3 text-right font-mono text-emerald-600 dark:text-emerald-400 text-sm">
                  Rs. {formatPKR(totalPayable)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

      {/* Cashless Payment Notice */}
      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-xs font-sans">
        <div className="flex items-center gap-2 font-bold text-doc-ink dark:text-white">
          <QrCode className="w-4 h-4 text-doc-brass" />
          <span>{isUrdu ? 'کیش لیس ادائیگی کا طریقہ (QR / 1Link e-Challan)' : 'Cashless Payment Method (NBP & 1Link)'}</span>
        </div>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          {isUrdu
            ? 'بیورو آف ایمیگریشن نے نقد رقوم وصولی مکمل بند کر دی ہے۔ تمام فیسیں نیشنل بینک آف پاکستان (NBP)، ون لنک (1Link) یا آن لائن بینکنگ ایپ میں ڈیجیٹل پی ایس آئی ڈی (PSID) / کیو آر کوڈ کے ذریعے جمع ہوتی ہیں۔'
            : 'BEOE has discontinued physical cash payments at protector counters. Fees are paid digitally via NBP counters, 1Link ATMs, mobile banking apps, or the official QR-based e-challan system.'}
        </p>
      </div>

      {/* Required Documents Checklist */}
      <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-2 text-xs font-sans">
        <div className="flex items-center gap-2 font-bold text-doc-brass">
          <FileCheck className="w-4 h-4 text-emerald-400" />
          <span>{isUrdu ? 'پروٹیکٹر آفس کے لیے ضروری دستاویزات' : 'Mandatory Document Checklist for Protectorate'}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-1 text-slate-300">
          <div className="p-2 rounded bg-slate-800 border border-slate-700 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Original Passport with Visa</span>
          </div>
          <div className="p-2 rounded bg-slate-800 border border-slate-700 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Valid CNIC / NICOP</span>
          </div>
          <div className="p-2 rounded bg-slate-800 border border-slate-700 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Signed Employment Contract</span>
          </div>
          <div className="p-2 rounded bg-slate-800 border border-slate-700 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>GAMCA Medical Report (Gulf)</span>
          </div>
        </div>
      </div>

      {/* Internal Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
        <Link
          href="/jobs/beoe-protector-registration-overseas-employment-2026"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-doc-seal hover:text-doc-brass transition"
        >
          <span>Read Full BEOE Protector Registration Guide →</span>
        </Link>
        <Link
          href="/overseas/opf-scholarship-children-spouses-overseas-pakistanis-2026"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-doc-brass hover:underline transition"
        >
          <span>How to Claim OPF Scholarships with Protector →</span>
        </Link>
      </div>
    </div>
  );
}
