'use client';

import React, { useState, useMemo } from 'react';
import {
  Smartphone,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Coins,
  Receipt,
  ExternalLink,
  Layers,
  ArrowRight,
  Plane,
  CreditCard,
  QrCode
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import Link from 'next/link';

interface PhonePreset {
  id: string;
  name: string;
  brand: string;
  usdValue: number;
  badge: string;
}

const POPULAR_PHONES: PhonePreset[] = [
  { id: 'ip16pm', name: 'iPhone 16 Pro / Pro Max', brand: 'Apple', usdValue: 1199, badge: 'Flagship >$500' },
  { id: 'ip15pm', name: 'iPhone 15 Pro / Pro Max', brand: 'Apple', usdValue: 999, badge: 'Flagship >$500' },
  { id: 'ip14', name: 'iPhone 14 / 13 Standard', brand: 'Apple', usdValue: 699, badge: 'Premium >$500' },
  { id: 'ip11', name: 'iPhone 11 / XR / 12', brand: 'Apple', usdValue: 420, badge: 'Tier $350–$500' },
  { id: 's24u', name: 'Samsung Galaxy S24 / S23 Ultra', brand: 'Samsung', usdValue: 1199, badge: 'Flagship >$500' },
  { id: 'pixel8', name: 'Google Pixel 8 / 8 Pro / 9', brand: 'Google', usdValue: 799, badge: 'Premium >$500' },
  { id: 'midrange', name: 'Mid-Range (Redmi Note / Galaxy A55)', brand: 'Android', usdValue: 280, badge: 'Tier $200–$350' },
  { id: 'budget', name: 'Budget Smartphone (Under $150)', brand: 'Android', usdValue: 140, badge: 'Tier $100–$200' },
];

export function PtaMobileTaxCalculator() {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const [regType, setRegType] = useState<'passport' | 'cnic'>('passport');
  const [selectedPreset, setSelectedPreset] = useState<string>('ip16pm');
  const [customUsd, setCustomUsd] = useState<string>('1199');
  const [isCustomMode, setIsCustomMode] = useState<boolean>(false);

  // Approximate USD to PKR exchange rate for C&F valuation conversion
  const USD_TO_PKR = 280;

  const calculation = useMemo(() => {
    const usd = Math.max(1, parseFloat(customUsd.replace(/,/g, '')) || 100);
    const pkrEquiv = usd * USD_TO_PKR;

    let baseDuty = 0;
    let regulatoryDuty = 0;
    let salesTax = 0;
    let mobileLevy = 0;
    let bracketNameEn = '';
    let bracketNameUr = '';

    if (usd <= 30) {
      bracketNameEn = 'Up to $30 (Basic Feature Phone)';
      bracketNameUr = '30 ڈالر تک (بنیادی فون)';
      baseDuty = regType === 'passport' ? 430 : 550;
      regulatoryDuty = 0;
      salesTax = 0;
      mobileLevy = 100;
    } else if (usd <= 100) {
      bracketNameEn = '$30 – $100 (Entry Smartphone)';
      bracketNameUr = '30 تا 100 ڈالر (انٹری فون)';
      baseDuty = regType === 'passport' ? 3200 : 4323;
      regulatoryDuty = 500;
      salesTax = 1200;
      mobileLevy = 300;
    } else if (usd <= 200) {
      bracketNameEn = '$100 – $200 (Budget Smartphone)';
      bracketNameUr = '100 تا 200 ڈالر (بجٹ سمارٹ فون)';
      baseDuty = regType === 'passport' ? 9580 : 11561;
      regulatoryDuty = 2500;
      salesTax = 4500;
      mobileLevy = 1000;
    } else if (usd <= 350) {
      bracketNameEn = '$200 – $350 (Mid-Range Device)';
      bracketNameUr = '200 تا 350 ڈالر (مڈ رینج فون)';
      baseDuty = regType === 'passport' ? 12200 : 14661;
      regulatoryDuty = regType === 'passport' ? 8000 : 11000;
      salesTax = pkrEquiv * 0.18 * (regType === 'passport' ? 0.7 : 0.9);
      mobileLevy = 3000;
    } else if (usd <= 500) {
      bracketNameEn = '$350 – $500 (Upper Mid-Range)';
      bracketNameUr = '350 تا 500 ڈالر (اپر مڈ رینج)';
      baseDuty = regType === 'passport' ? 17800 : 23420;
      regulatoryDuty = regType === 'passport' ? 15000 : 20000;
      salesTax = pkrEquiv * 0.18;
      mobileLevy = 5000;
    } else {
      // Above $500 (Flagships: iPhone 14/15/16 Pro, S24 Ultra, etc.)
      bracketNameEn = 'Above $500 (Flagship / Luxury Device)';
      bracketNameUr = '500 ڈالر سے زائد (فلیگ شپ ڈیوائس)';
      baseDuty = regType === 'passport' ? 27600 : 37007;
      regulatoryDuty = regType === 'passport' ? 38000 : 49000;
      salesTax = pkrEquiv * 0.18;
      mobileLevy = regType === 'passport' ? 10000 : 16000;
    }

    const totalTax = Math.round(baseDuty + regulatoryDuty + salesTax + mobileLevy);

    // Alternate calculation for comparison callout
    let altTotal = 0;
    if (regType === 'passport') {
      // Calculate CNIC equivalent
      const cnicBase = usd > 500 ? 37007 : usd > 350 ? 23420 : usd > 200 ? 14661 : usd > 100 ? 11561 : usd > 30 ? 4323 : 550;
      const cnicRD = usd > 500 ? 49000 : usd > 350 ? 20000 : usd > 200 ? 11000 : usd > 100 ? 2500 : 500;
      const cnicST = usd > 200 ? pkrEquiv * 0.18 : usd > 100 ? 4500 : usd > 30 ? 1200 : 0;
      const cnicLevy = usd > 500 ? 16000 : usd > 350 ? 5000 : usd > 200 ? 3000 : usd > 100 ? 1000 : 300;
      altTotal = Math.round(cnicBase + cnicRD + cnicST + cnicLevy);
    } else {
      // Calculate Passport equivalent
      const passBase = usd > 500 ? 27600 : usd > 350 ? 17800 : usd > 200 ? 12200 : usd > 100 ? 9580 : usd > 30 ? 3200 : 430;
      const passRD = usd > 500 ? 38000 : usd > 350 ? 15000 : usd > 200 ? 8000 : usd > 100 ? 2500 : 500;
      const passST = usd > 200 ? pkrEquiv * 0.18 * (usd <= 350 ? 0.7 : 1) : usd > 100 ? 4500 : usd > 30 ? 1200 : 0;
      const passLevy = usd > 500 ? 10000 : usd > 350 ? 5000 : usd > 200 ? 3000 : usd > 100 ? 1000 : 100;
      altTotal = Math.round(passBase + passRD + passST + passLevy);
    }

    const difference = Math.abs(totalTax - altTotal);

    return {
      usd,
      pkrEquiv,
      bracketNameEn,
      bracketNameUr,
      baseDuty,
      regulatoryDuty,
      salesTax,
      mobileLevy,
      totalTax,
      altTotal,
      difference,
    };
  }, [regType, customUsd]);

  const handleSelectPreset = (preset: PhonePreset) => {
    setSelectedPreset(preset.id);
    setCustomUsd(preset.usdValue.toString());
    setIsCustomMode(false);
  };

  const formatPKR = (val: number) => {
    return Math.round(val).toLocaleString('en-PK');
  };

  return (
    <div className="doc-card p-5 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <InteractiveToolBadge labelEn="PTA DIRBS TAX CALCULATOR" labelUr="پی ٹی اے ٹیکس کیلکولیٹر" variant="seal" />
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              DIRBS 2026 Live
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-doc-ink dark:text-white">
            {isUrdu ? 'پی ٹی اے موبائل فون رجسٹریشن ٹیکس کیلکولیٹر' : 'PTA Mobile Registration Tax Calculator'}
          </h2>
        </div>

        {/* Registration Type Selector: Passport vs CNIC */}
        <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
          <button
            type="button"
            onClick={() => setRegType('passport')}
            className={`min-h-[44px] px-4 py-2 text-xs font-bold rounded-lg transition flex items-center gap-1.5 ${
              regType === 'passport'
                ? 'bg-doc-ink text-white shadow'
                : 'text-slate-600 dark:text-slate-400 hover:text-doc-ink'
            }`}
          >
            <Plane className="w-3.5 h-3.5" />
            <span>{isUrdu ? 'پاسپورٹ پر (سفری رعایت)' : 'Passport (Traveler Rate)'}</span>
          </button>
          <button
            type="button"
            onClick={() => setRegType('cnic')}
            className={`min-h-[44px] px-4 py-2 text-xs font-bold rounded-lg transition flex items-center gap-1.5 ${
              regType === 'cnic'
                ? 'bg-doc-ink text-white shadow'
                : 'text-slate-600 dark:text-slate-400 hover:text-doc-ink'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>{isUrdu ? 'شناختی کارڈ (مقامی)' : 'CNIC (Local Rate)'}</span>
          </button>
        </div>
      </div>

      {/* Device Preset Selector */}
      <div className="space-y-3">
        <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
          {isUrdu ? 'مقبول فون ماڈل منتخب کریں یا اپنی قیمت درج کریں:' : 'Select Popular Model or Enter Custom Value:'}
        </label>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {POPULAR_PHONES.map((phone) => (
            <button
              key={phone.id}
              type="button"
              onClick={() => handleSelectPreset(phone)}
              className={`p-3 rounded-xl border text-left transition ${
                !isCustomMode && selectedPreset === phone.id
                  ? 'border-doc-brass bg-amber-50/50 dark:bg-amber-950/20 shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <span className="text-[10px] font-mono font-bold text-doc-seal block">{phone.brand}</span>
              <span className="font-serif font-bold text-xs text-doc-ink dark:text-white block truncate">
                {phone.name}
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block mt-0.5">
                ${phone.usdValue} USD
              </span>
            </button>
          ))}
        </div>

        {/* Custom USD Input Mode */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setIsCustomMode(!isCustomMode)}
            className="text-xs font-mono font-bold text-doc-brass hover:underline flex items-center gap-1"
          >
            <span>{isCustomMode ? '← Use Model Presets' : '+ Enter Custom Phone USD Value'}</span>
          </button>

          {isCustomMode && (
            <div className="mt-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                {isUrdu ? 'فون کی سرکاری تخمینہ قیمت (USD میں):' : 'Declared Phone C&F Value in USD:'}
              </label>
              <div className="relative max-w-xs">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono font-bold text-slate-400">$</span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={customUsd}
                  onChange={(e) => setCustomUsd(e.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="e.g. 999"
                  className="w-full min-h-[44px] pl-8 pr-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 font-mono font-bold text-doc-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-doc-brass"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Result Display Hero Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="space-y-1">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              {isUrdu ? 'کل متوقع پی ٹی اے ٹیکس / کسٹم ڈیوٹی' : 'Total Estimated PTA Duty & Tax'}
            </span>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-amber-400 font-mono">
              Rs. {formatPKR(calculation.totalTax)}
            </div>
          </div>

          <div className="space-y-1 text-right">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              {isUrdu ? 'رجسٹریشن موڈ' : 'Registration Route'}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-doc-brass/20 text-amber-300 font-mono font-bold text-xs border border-doc-brass/30">
              {regType === 'passport' ? 'Passport (Traveler)' : 'CNIC (Resident)'}
            </span>
            <span className="text-[11px] text-slate-400 font-mono block mt-1">
              Valued at ${calculation.usd} USD (~Rs. {formatPKR(calculation.pkrEquiv)})
            </span>
          </div>
        </div>

        {/* Itemized Tax Breakdown Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-sans">
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-1">
            <span className="text-slate-400 text-[11px] block">{isUrdu ? 'بنیادی کسٹم ڈیوٹی' : 'Customs Base Duty'}</span>
            <span className="text-white font-mono font-bold text-sm block">Rs. {formatPKR(calculation.baseDuty)}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-1">
            <span className="text-slate-400 text-[11px] block">{isUrdu ? 'ریگولیٹری ڈیوٹی (RD)' : 'Regulatory Duty (RD)'}</span>
            <span className="text-white font-mono font-bold text-sm block">Rs. {formatPKR(calculation.regulatoryDuty)}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-1">
            <span className="text-slate-400 text-[11px] block">{isUrdu ? 'سیلز ٹیکس (18% GST)' : 'Sales Tax (18% GST)'}</span>
            <span className="text-white font-mono font-bold text-sm block">Rs. {formatPKR(calculation.salesTax)}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-1">
            <span className="text-slate-400 text-[11px] block">{isUrdu ? 'موبائل فون لیوی' : 'Federal Mobile Levy'}</span>
            <span className="text-white font-mono font-bold text-sm block">Rs. {formatPKR(calculation.mobileLevy)}</span>
          </div>
        </div>

        {/* Passport vs CNIC Comparison Banner */}
        <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-800/80 flex items-center justify-between gap-4 text-xs">
          <div className="space-y-0.5">
            <span className="font-bold text-emerald-300 block">
              {regType === 'passport'
                ? (isUrdu ? 'پاسپورٹ پر رجسٹریشن کی بچت:' : 'Passport Route Savings vs. CNIC:')
                : (isUrdu ? 'پاسپورٹ پر رجسٹریشن سے ممکنہ بچت:' : 'Potential Savings with a Valid Passport:')}
            </span>
            <p className="text-slate-300 text-[11px]">
              {regType === 'passport'
                ? `You save approximately Rs. ${formatPKR(calculation.difference)} compared to registering on a CNIC.`
                : `Registering with an active passport & foreign travel stamp saves approx Rs. ${formatPKR(calculation.difference)}.`}
            </p>
          </div>
          <span className="font-mono font-extrabold text-emerald-400 text-base shrink-0">
            Save ~Rs. {formatPKR(calculation.difference)}
          </span>
        </div>
      </div>

      {/* Official Payment Instructions & Disclaimer */}
      <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-2 text-xs font-sans text-slate-700 dark:text-slate-300">
        <div className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-300">
          <AlertCircle className="w-4 h-4" />
          <span>Official PTA DIRBS Verification &amp; Payment Notice</span>
        </div>
        <p className="leading-relaxed">
          This calculator provides estimated statutory figures based on FBR Customs valuation rulings and PTA DIRBS tariff schedules. Exact payable duty is determined when you generate an official PSID on the PTA DIRBS portal. You can pay your generated PSID through online banking apps (1Link Bill Payment), ATM, JazzCash/Easypaisa, or at any commercial bank counter.
        </p>
      </div>

      {/* External Official Portal Deep Link */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
        <a
          href="https://dirbs.pta.gov.pk/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-doc-seal hover:text-doc-brass transition"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Official PTA DIRBS Web Portal (Generate PSID) →</span>
        </a>
        <Link
          href="/mobile-pta/imei-check-2026"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-doc-brass hover:underline transition"
        >
          <span>Check IMEI Registration Status (8484) →</span>
        </Link>
      </div>
    </div>
  );
}
