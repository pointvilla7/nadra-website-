'use client';

import React, { useState } from 'react';
import { Calculator, ShieldCheck, ExternalLink, CheckCircle2, Clock } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export const PassportFeeCalculator: React.FC = () => {
  const { t } = useLanguage();

  const [passportType, setPassportType] = useState<'mrp' | 'epassport'>('mrp');
  const [pages, setPages] = useState<36 | 72 | 100>(36);
  const [validity, setValidity] = useState<5 | 10>(5);
  const [urgency, setUrgency] = useState<'normal' | 'urgent' | 'fasttrack'>('normal');

  // Fee calculation matrix based on official 2026 DGIP rates
  const calculateFee = (): { amount: number; timeline: string } => {
    if (passportType === 'epassport') {
      if (validity === 5) {
        if (urgency === 'normal') return { amount: 9000, timeline: '15 Working Days' };
        if (urgency === 'urgent') return { amount: 15000, timeline: '7 Working Days' };
        return { amount: 20000, timeline: '2 Working Days (Fast Track)' };
      } else {
        if (urgency === 'normal') return { amount: 13500, timeline: '15 Working Days' };
        if (urgency === 'urgent') return { amount: 22500, timeline: '7 Working Days' };
        return { amount: 27000, timeline: '2 Working Days (Fast Track)' };
      }
    }

    // Standard MRP
    if (pages === 36) {
      if (validity === 5) {
        if (urgency === 'normal') return { amount: 4500, timeline: '21 Working Days' };
        if (urgency === 'urgent') return { amount: 7500, timeline: '5 Working Days' };
        return { amount: 12500, timeline: '2 Working Days (Fast Track)' };
      } else {
        if (urgency === 'normal') return { amount: 6700, timeline: '21 Working Days' };
        if (urgency === 'urgent') return { amount: 11200, timeline: '5 Working Days' };
        return { amount: 16200, timeline: '2 Working Days (Fast Track)' };
      }
    } else if (pages === 72) {
      if (validity === 5) {
        if (urgency === 'normal') return { amount: 8200, timeline: '21 Working Days' };
        if (urgency === 'urgent') return { amount: 13500, timeline: '5 Working Days' };
        return { amount: 18500, timeline: '2 Working Days (Fast Track)' };
      } else {
        if (urgency === 'normal') return { amount: 12400, timeline: '21 Working Days' };
        if (urgency === 'urgent') return { amount: 20200, timeline: '5 Working Days' };
        return { amount: 25200, timeline: '2 Working Days (Fast Track)' };
      }
    } else {
      // 100 pages
      if (validity === 5) {
        if (urgency === 'normal') return { amount: 9000, timeline: '21 Working Days' };
        if (urgency === 'urgent') return { amount: 18000, timeline: '5 Working Days' };
        return { amount: 23000, timeline: '2 Working Days (Fast Track)' };
      } else {
        if (urgency === 'normal') return { amount: 13500, timeline: '21 Working Days' };
        if (urgency === 'urgent') return { amount: 27000, timeline: '5 Working Days' };
        return { amount: 32000, timeline: '2 Working Days (Fast Track)' };
      }
    }
  };

  const { amount, timeline } = calculateFee();

  return (
    <div className="my-8 rounded-2xl doc-card border-2 border-doc-brass/40 p-6 md:p-8 shadow-doc-card bg-doc-ink text-white relative overflow-hidden">
      {/* Decorative Watermark */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-doc-brass/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-doc-brass/30">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-doc-brass/20 text-doc-brass border border-doc-brass/40">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif font-extrabold text-lg md:text-xl text-white">
              {t('Interactive Passport Fee Calculator (2026)', 'انٹرایکٹو پاسپورٹ فیس کیلکولیٹر 2026')}
            </h3>
            <p className="text-xs text-slate-300">
              {t('Official DGIP Fee Calculator by Type, Pages & Urgency', 'صفحات، میعاد اور ڈیلیوری کی بنیاد پر فوری فیس کا حساب')}
            </p>
          </div>
        </div>

        <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-doc-seal text-white uppercase tracking-widest">
          DGIP-VERIFIED
        </span>
      </div>

      {/* Calculator Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Passport Type */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-doc-brass mb-2">
            {t('Passport Category:', 'پاسپورٹ کی قسم:')}
          </label>
          <select
            value={passportType}
            onChange={(e) => setPassportType(e.target.value as any)}
            className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-doc-brass/40 text-white focus:outline-none focus:border-doc-brass text-xs font-semibold cursor-pointer"
          >
            <option value="mrp">Standard MRP Passport</option>
            <option value="epassport">e-Passport (Chip Embedded)</option>
          </select>
        </div>

        {/* Booklet Pages */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-doc-brass mb-2">
            {t('Booklet Size (Pages):', 'صفحات کی تعداد:')}
          </label>
          <select
            value={pages}
            onChange={(e) => setPages(Number(e.target.value) as any)}
            disabled={passportType === 'epassport'}
            className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-doc-brass/40 text-white focus:outline-none focus:border-doc-brass text-xs font-semibold cursor-pointer disabled:opacity-50"
          >
            <option value={36}>36 Pages Booklet</option>
            <option value={72}>72 Pages Booklet</option>
            <option value={100}>100 Pages Booklet</option>
          </select>
        </div>

        {/* Validity */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-doc-brass mb-2">
            {t('Validity Period:', 'میعاد کی مدت:')}
          </label>
          <select
            value={validity}
            onChange={(e) => setValidity(Number(e.target.value) as any)}
            className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-doc-brass/40 text-white focus:outline-none focus:border-doc-brass text-xs font-semibold cursor-pointer"
          >
            <option value={5}>5 Years Validity</option>
            <option value={10}>10 Years Validity</option>
          </select>
        </div>

        {/* Urgency Delivery Tier */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-doc-brass mb-2">
            {t('Delivery Urgency:', 'ڈیلیوری کی رفتار:')}
          </label>
          <select
            value={urgency}
            onChange={(e) => setUrgency(e.target.value as any)}
            className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-doc-brass/40 text-white focus:outline-none focus:border-doc-brass text-xs font-semibold cursor-pointer"
          >
            <option value="normal">Normal Processing</option>
            <option value="urgent">Urgent Processing</option>
            <option value="fasttrack">Fast Track (2 Days)</option>
          </select>
        </div>
      </div>

      {/* Calculated Total Fee Display Card */}
      <div className="p-6 rounded-2xl bg-slate-950/90 border border-doc-brass/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase text-doc-brass font-bold flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            {t('Official Payable Fee:', 'کل واجب الادا آفیشل فیس:')}
          </span>
          <div className="text-3xl md:text-4xl font-mono font-extrabold text-white mt-1">
            PKR {amount.toLocaleString()}
          </div>
          <p className="text-xs text-slate-400 flex items-center gap-1 mt-1 font-sans">
            <Clock className="w-3.5 h-3.5 text-doc-brass" />
            <span>{t(`Estimated Delivery Timeline: ${timeline}`, `اندازاً ڈلیوری کا وقت: ${timeline}`)}</span>
          </p>
        </div>

        <a
          href="https://fee.dgip.gov.pk/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-doc-seal hover:bg-red-700 text-white font-mono font-bold text-xs flex items-center justify-center gap-2 transition shadow-lg shrink-0"
        >
          <span>{t('GENERATE PSID ON DGIP PORTAL', 'ڈی جی آئی پی پورٹل پر فیس چالان بنائیں')}</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Trust Footer */}
      <div className="mt-4 pt-3 border-t border-doc-brass/20 text-[11px] text-slate-400 flex items-center gap-1.5 font-sans">
        <ShieldCheck className="w-4 h-4 text-doc-brass shrink-0" />
        <span>
          {t('Fee PSID can be paid online via Passport Fee Asan Mobile App, Easypaisa, JazzCash, or 1Link Internet Banking.', 'فیس کی ادائیگی پاسپورٹ فیس آسان ایپ یا بینکنگ پورٹل سے ممکن ہے۔')}
        </span>
      </div>
    </div>
  );
};
