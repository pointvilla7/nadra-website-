'use client';

import React, { useState, useMemo } from 'react';
import {
  Mail,
  Search,
  CheckCircle2,
  AlertCircle,
  Clock,
  Truck,
  Package,
  MapPin,
  ExternalLink,
  Copy,
  Check,
  PhoneCall,
  ShieldCheck,
  ArrowRight,
  Info,
  Building,
  HelpCircle
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import Link from 'next/link';

export function PakPostTrackingHelper() {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const [trackingInput, setTrackingInput] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [hasChecked, setHasChecked] = useState<boolean>(false);

  const cleanTracking = trackingInput.trim().toUpperCase();

  // Detect tracking number format and postal service type
  const trackingAnalysis = useMemo(() => {
    if (!cleanTracking) return null;

    let serviceTypeEn = 'General Postal Article / Parcel';
    let serviceTypeUr = 'عام پارسل یا ڈاک';
    let serviceCode = 'STANDARD';
    let isInternational = false;
    let isValid = false;

    // EMS / International (e.g. EP123456789PK, EE123456789PK)
    if (/^(EP|EE|EA|EM|EC|CP|CD|RU|RR|RA|RT)[0-9]{9}PK$/i.test(cleanTracking)) {
      isValid = true;
      isInternational = true;
      if (cleanTracking.startsWith('EP') || cleanTracking.startsWith('EE') || cleanTracking.startsWith('EA')) {
        serviceTypeEn = 'EMS Express International Post';
        serviceTypeUr = 'ای ایم ایس ایکسپریس بین الاقوامی ڈاک';
        serviceCode = 'EMS';
      } else if (cleanTracking.startsWith('CP') || cleanTracking.startsWith('CD')) {
        serviceTypeEn = 'International Postal Parcel';
        serviceTypeUr = 'بین الاقوامی پارسل پوسٹ';
        serviceCode = 'PARCEL';
      } else {
        serviceTypeEn = 'Registered International Post';
        serviceTypeUr = 'رجسٹرڈ بین الاقوامی خط یا ڈاک';
        serviceCode = 'REGISTERED';
      }
    }
    // Domestic UMS (e.g. UM123456789PK, UMS123456, or 9-11 digit numeric/alphanumeric)
    else if (/^(UM|UMS|UP)[0-9]{7,9}(PK)?$/i.test(cleanTracking)) {
      isValid = true;
      serviceTypeEn = 'UMS (Urgent Mail Service) Domestic';
      serviceTypeUr = 'یو ایم ایس (ارجنٹ میل سروس) ملکی ڈاک';
      serviceCode = 'UMS';
    }
    // Standard 9 to 13 digits (numeric barcode from GPO receipt)
    else if (/^[0-9]{8,14}$/.test(cleanTracking)) {
      isValid = true;
      serviceTypeEn = 'Domestic GPO Barcode / Registered Mail';
      serviceTypeUr = 'ملکی جی پی او بارکوڈ / رجسٹرڈ ڈاک';
      serviceCode = 'DOMESTIC_NUMERIC';
    }
    // Generic alphanumeric format
    else if (cleanTracking.length >= 6 && cleanTracking.length <= 16) {
      isValid = true;
      serviceTypeEn = 'Pakistan Post Tracking Number';
      serviceTypeUr = 'پاکستان پوسٹ ٹریکنگ نمبر';
      serviceCode = 'GENERIC';
    }

    return {
      isValid,
      isInternational,
      serviceTypeEn,
      serviceTypeUr,
      serviceCode,
    };
  }, [cleanTracking]);

  const handleCopy = () => {
    if (!cleanTracking) return;
    navigator.clipboard.writeText(cleanTracking);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (cleanTracking.length >= 6) {
      setHasChecked(true);
    }
  };

  return (
    <div className="doc-card p-5 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <InteractiveToolBadge labelEn="PAKISTAN POST TRACKER" labelUr="پاکستان پوسٹ ٹریکر" variant="seal" />
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              UMS &amp; GPO Live 2026
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-doc-ink dark:text-white">
            {isUrdu ? 'پاکستان پوسٹ پارسل و یو ایم ایس ٹریکنگ ہیلپر' : 'Pakistan Post Parcel & UMS Tracking Helper'}
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
          <PhoneCall className="w-3.5 h-3.5 text-doc-brass" />
          <span>Helpline: 051-111-111-117</span>
        </div>
      </div>

      {/* Tracking Number Input Form */}
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
              {isUrdu ? 'ٹریکنگ نمبر / بارکوڈ درج کریں (UMS، EMS یا رجسٹرڈ ڈاک):' : 'Enter Tracking ID / Barcode (UMS, EMS, or Registered Post):'}
            </label>
            <span className="text-xs font-mono text-slate-400">
              e.g. EP123456789PK / UM987654321
            </span>
          </div>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-mono font-bold">
              TRACK:
            </span>
            <input
              type="text"
              value={trackingInput}
              onChange={(e) => {
                setTrackingInput(e.target.value);
                setHasChecked(false);
              }}
              placeholder="e.g. EP123456789PK or 123456789"
              className="w-full min-h-[48px] pl-20 pr-24 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-doc-ink dark:text-white font-mono font-bold text-lg focus:outline-none focus:ring-2 focus:ring-doc-brass tracking-wider"
            />

            {cleanTracking.length > 0 && (
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

          {/* Auto-detected Service Badge */}
          {trackingAnalysis && trackingAnalysis.isValid && (
            <div className="flex items-center gap-2 pt-1 text-xs font-sans">
              <span className="font-mono text-slate-500 font-bold">Detected Service:</span>
              <span className="px-2.5 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-doc-brass border border-doc-brass/30 font-serif font-bold text-xs">
                {isUrdu ? trackingAnalysis.serviceTypeUr : trackingAnalysis.serviceTypeEn}
              </span>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={cleanTracking.length < 5}
          className={`w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 ${
            cleanTracking.length >= 5
              ? 'bg-doc-ink text-white hover:bg-slate-800 shadow-md cursor-pointer'
              : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
          }`}
        >
          <Search className="w-4 h-4" />
          <span>{isUrdu ? 'آفیشل پورٹل پر ٹریک کریں' : 'Track on Official Pakistan Post Portal'}</span>
        </button>
      </form>

      {/* Guided Tracking Portal Launch Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Portal 1: Domestic UMS & Standard Tracking */}
        <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-doc-brass font-bold text-sm">
              <Truck className="w-4 h-4 text-amber-400" />
              <span>1. Domestic UMS &amp; Parcel Tracking (ep.gov.pk)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Access Pakistan Post&apos;s primary Electronic Postal system (ep.gov.pk). Ideal for Urgent Mail Service (UMS), standard parcels, and GPO registered posts across Pakistan.
            </p>
          </div>

          <a
            href="https://ep.gov.pk/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-2 w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-doc-brass text-doc-ink hover:bg-amber-400 font-bold text-xs font-sans transition shadow-sm"
          >
            <span>Launch Domestic Tracking (ep.gov.pk)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Portal 2: International Express (EMS) & Overseas Tracking */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-doc-seal font-bold text-sm">
              <Package className="w-4 h-4 text-doc-seal" />
              <span>2. International Postal Tracking (Universal Postal Union)</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              For overseas parcels and EMS Express mail starting with <code>EP</code>, <code>RU</code>, or <code>CP</code> and ending with <code>PK</code>.
            </p>
          </div>

          <a
            href="https://ep.gov.pk/international_tracking.asp"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-2 w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-doc-seal text-white hover:bg-doc-seal/90 font-bold text-xs font-sans transition shadow-sm"
          >
            <span>Launch International Tracking Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Official Status Timeline Explainer */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-doc-brass" />
          <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
            {isUrdu ? 'پاکستان پوسٹ ٹریکنگ سٹیٹس کے مراحل' : 'Understanding Pakistan Post Tracking Statuses'}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs font-sans">
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
            <span className="w-5 h-5 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-[10px]">1</span>
            <span className="font-bold text-doc-ink dark:text-white block">Item Booked</span>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Parcel received at origin GPO/Sub Post Office counter.</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
            <span className="w-5 h-5 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-[10px]">2</span>
            <span className="font-bold text-doc-ink dark:text-white block">Dispatched to AMO</span>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Bagged &amp; in transit via Air Mail / Rail Mail Sorting Office.</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
            <span className="w-5 h-5 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-[10px]">3</span>
            <span className="font-bold text-doc-ink dark:text-white block">Received at Dest GPO</span>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Arrived at destination delivery post office.</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
            <span className="w-5 h-5 rounded-full bg-amber-600 text-white font-mono font-bold flex items-center justify-center text-[10px]">4</span>
            <span className="font-bold text-doc-ink dark:text-white block">Out for Delivery</span>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Handed over to beat postman for doorstep delivery.</p>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-1">
            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-[10px]">5</span>
            <span className="font-bold text-emerald-800 dark:text-emerald-300 block">Delivered</span>
            <p className="text-[11px] text-slate-600 dark:text-slate-300">Successfully delivered and signed by recipient.</p>
          </div>
        </div>
      </div>

      {/* Security Advisory Callout */}
      <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-1.5 text-xs font-sans text-slate-700 dark:text-slate-300">
        <div className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-300">
          <AlertCircle className="w-4 h-4" />
          <span>Official Pakistan Post Fraud Warning</span>
        </div>
        <p className="leading-relaxed">
          Pakistan Post explicitly warns citizens that they <strong>never ask for online card payments, OTPs, or courier delivery fees via SMS or WhatsApp links</strong>. Only use official portals ending in <code>.gov.pk</code>.
        </p>
      </div>

      {/* Internal Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
        <Link
          href="/pakistan-post/overview-guide-2026"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-doc-seal hover:text-doc-brass transition"
        >
          <span>Pakistan Post Services &amp; UMS Delivery Guide →</span>
        </Link>
        <Link
          href="/pakistan-post/post-office-locator-2026"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-doc-brass hover:underline transition"
        >
          <span>Find Nearest Post Office &amp; GPO Locations →</span>
        </Link>
      </div>
    </div>
  );
}
