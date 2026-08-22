'use client';

import React, { useState } from 'react';
import {
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ExternalLink,
  MessageSquare,
  Copy,
  Check,
  PhoneCall,
  Search,
  Lock,
  Radio,
  AlertTriangle,
  Info
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import Link from 'next/link';

export function PtaImeiStatusChecker() {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const [imeiInput, setImeiInput] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const cleanImei = imeiInput.replace(/[^0-9]/g, '');
  const isValidLength = cleanImei.length === 15;

  const handleCopy = () => {
    if (!cleanImei) return;
    navigator.clipboard.writeText(cleanImei);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleVerifyFormat = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidLength) {
      setChecked(true);
    }
  };

  return (
    <div className="doc-card p-5 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <InteractiveToolBadge labelEn="PTA DIRBS IMEI VERIFIER" labelUr="آئی ایم ای آئی تصدیق" variant="seal" />
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              SMS Shortcode 8484
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-doc-ink dark:text-white">
            {isUrdu ? 'پی ٹی اے ڈیوائس رجسٹریشن (IMEI) تصدیقی گائیڈ' : 'PTA Device (IMEI) Status Verification Helper'}
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
          <PhoneCall className="w-3.5 h-3.5 text-doc-brass" />
          <span>Dial *#06# to get IMEI</span>
        </div>
      </div>

      {/* 15-Digit Format Validator Input */}
      <form onSubmit={handleVerifyFormat} className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
              {isUrdu ? '15 ہندسوں پر مشتمل آئی ایم ای آئی نمبر درج کریں:' : 'Enter 15-Digit Mobile IMEI Number:'}
            </label>
            <span
              className={`text-xs font-mono font-bold ${
                cleanImei.length === 15
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-slate-400'
              }`}
            >
              {cleanImei.length} / 15 Digits
            </span>
          </div>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-mono font-bold">
              IMEI:
            </span>
            <input
              type="text"
              inputMode="numeric"
              maxLength={15}
              value={imeiInput}
              onChange={(e) => {
                setImeiInput(e.target.value.replace(/[^0-9]/g, ''));
                setChecked(false);
              }}
              placeholder="e.g. 352018091234567"
              className="w-full min-h-[48px] pl-16 pr-24 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-doc-ink dark:text-white font-mono font-bold text-lg focus:outline-none focus:ring-2 focus:ring-doc-brass tracking-wider"
            />

            {cleanImei.length > 0 && (
              <button
                type="button"
                onClick={handleCopy}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 text-xs font-mono font-bold flex items-center gap-1 transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            )}
          </div>

          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
            {isUrdu
              ? 'ڈوئل سم فون کے لیے دونوں آئی ایم ای آئی (IMEI 1 اور IMEI 2) چیک کرنا ضروری ہے۔'
              : 'For Dual-SIM devices, verify both IMEI 1 and IMEI 2 slots to ensure full network clearance.'}
          </p>
        </div>

        <button
          type="submit"
          disabled={!isValidLength}
          className={`w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 ${
            isValidLength
              ? 'bg-doc-ink text-white hover:bg-slate-800 shadow-md cursor-pointer'
              : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
          }`}
        >
          <Search className="w-4 h-4" />
          <span>{isUrdu ? 'آئی ایم ای آئی چیک کے طریقے دیکھیں' : 'Validate & View Official Check Methods'}</span>
        </button>
      </form>

      {/* Guided Verification Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Method 1: Instant Free SMS to 8484 */}
        <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-doc-brass font-bold text-sm">
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Method 1: Instant Free SMS to 8484</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            Send your 15-digit IMEI number via SMS to the official PTA shortcode <strong>8484</strong> from any Pakistani mobile network. You will receive an immediate automated confirmation SMS indicating your device compliance status and applicable tax.
          </p>
          <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">SMS Format:</span>
            <span className="text-amber-400 font-bold">{cleanImei || '352018091234567'}</span>
            <span className="text-emerald-400 font-bold">→ Send to 8484</span>
          </div>
        </div>

        {/* Method 2: Official PTA DIRBS Web Portal */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-doc-seal font-bold text-sm">
            <ExternalLink className="w-4 h-4" />
            <span>Method 2: Official PTA DIRBS Portal</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            PTA provides an official online lookup portal protected by CAPTCHA verification to prevent automated scraping. Open the official DIRBS website to perform a direct browser-based IMEI inquiry.
          </p>
          <a
            href="https://dirbs.pta.gov.pk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full min-h-[44px] px-4 py-2 rounded-xl bg-doc-seal text-white hover:bg-doc-seal/90 font-bold text-xs font-sans transition shadow-xs"
          >
            <span>Open Official DIRBS Web Portal (dirbs.pta.gov.pk)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Educational Status Explainer */}
      <div className="space-y-4 pt-2">
        <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
          {isUrdu ? 'پی ٹی اے رزلٹ سٹیٹس کا کیا مطلب ہے؟' : 'Understanding PTA DIRBS Status Responses'}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans">
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-1.5">
            <div className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Compliant / PTA Approved</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Device is GSMA valid, PTA approved, and custom duties are fully paid. All local SIMs will function permanently with zero risk of blocking.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-1.5">
            <div className="flex items-center gap-1.5 text-amber-800 dark:text-amber-300 font-bold">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Device IMEI is Valid (Non-Compliant)</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Device is genuine GSMA standard, but PTA registration tax has not been paid. You have a <strong>60-day grace period</strong> to pay tax before network disconnection.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 space-y-1.5">
            <div className="flex items-center gap-1.5 text-red-800 dark:text-red-300 font-bold">
              <AlertCircle className="w-4 h-4 text-red-600" />
              <span>Blocked / Blacklisted</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Device is blocked because the 60-day tax window expired, or the phone was reported stolen, cloned, or fraudulent under Section 29 PTA Act.
            </p>
          </div>
        </div>
      </div>

      {/* Internal Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
        <Link
          href="/mobile-pta/tax-calculator-2026"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-doc-seal hover:text-doc-brass transition"
        >
          <span>Calculate PTA Registration Tax (Passport vs CNIC) →</span>
        </Link>
        <Link
          href="/mobile-pta/sim-information-system-guide"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-doc-brass hover:underline transition"
        >
          <span>Check Total SIMs on CNIC (*8888#) →</span>
        </Link>
      </div>
    </div>
  );
}
