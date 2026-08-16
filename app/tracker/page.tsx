'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ExternalLink, ShieldCheck, ArrowRight, CheckCircle2, AlertCircle, Compass } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { VerifiedSeal } from '@/components/VerifiedSeal';
import { SchemaInjector } from '@/components/SchemaInjector';

export default function UnifiedTrackerPage() {
  const { t } = useLanguage();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [detectedType, setDetectedType] = useState<{
    name: string;
    portalName: string;
    targetUrl: string;
    instruction: string;
  } | null>(null);

  const handleInputChange = (val: string) => {
    setTrackingNumber(val);
    const clean = val.trim().toUpperCase();

    if (!clean) {
      setDetectedType(null);
      return;
    }

    // Detection rules
    if (clean.startsWith('NAD') || clean.length === 12 || clean.includes('TRACK')) {
      setDetectedType({
        name: 'NADRA CNIC / Card Tracking',
        portalName: 'NADRA Pak-ID Tracking Portal',
        targetUrl: 'https://id.nadra.gov.pk/e-id/tracking',
        instruction: 'Valid NADRA tracking ID detected. Click below to check live status on Pak-ID.',
      });
    } else if (clean.startsWith('PB') || clean.startsWith('PK') || clean.length === 9) {
      setDetectedType({
        name: 'Machine Readable Passport Tracking',
        portalName: 'DGIP Passport Tracking System',
        targetUrl: 'https://tracking.dgip.gov.pk/',
        instruction: 'Passport tracking token detected. Click below to verify passport print status.',
      });
    } else if (clean.startsWith('ACAG') || clean.startsWith('PMY') || clean.startsWith('LOAN')) {
      setDetectedType({
        name: 'Government Loan Application',
        portalName: 'Apni Chhat / PM Youth Loan Portal',
        targetUrl: 'https://acag.punjab.gov.pk/',
        instruction: 'Govt housing loan tracking reference detected.',
      });
    } else if (clean.length === 13 && /^\d+$/.test(clean)) {
      setDetectedType({
        name: 'BISP 8171 / CNIC Welfare Status',
        portalName: 'BISP 8171 Official Web Portal',
        targetUrl: 'https://8171.bisp.gov.pk/',
        instruction: '13-digit CNIC format detected. Proceed to 8171 portal for BISP Kafaalat status.',
      });
    } else {
      setDetectedType({
        name: 'General Public Tracking ID',
        portalName: 'Official Government Gateway',
        targetUrl: 'https://id.nadra.gov.pk/',
        instruction: 'Click below to route your tracking request to the verified portal.',
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (detectedType?.targetUrl && typeof window !== 'undefined') {
      window.open(detectedType.targetUrl, '_blank');
    }
  };

  return (
    <>
      <SchemaInjector
        customSchema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Unified Application Tracker | Passport, NADRA, BISP & Loans - Pakistan Info Hub',
          url: 'https://pakistaninfohub.com/tracker',
          description: 'Single unified tracking hub for Pakistan citizens to verify NADRA CNIC status, Passport tracking, BISP 8171 eligibility, and Govt loan applications.',
        }}
      />

      <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
        {/* Header */}
        <header className="bg-doc-paper dark:bg-doc-dark-card border-2 border-doc-brass/40 rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden text-center space-y-4">
          <div className="inline-flex items-center gap-2">
            <VerifiedSeal size="sm" year="2026" />
            <span className="font-mono text-xs text-doc-seal uppercase tracking-widest font-bold">
              UNIFIED CIVIC TRACKING GATEWAY
            </span>
          </div>
          <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-doc-ink dark:text-slate-100">
            {t('Unified Application Tracking Hub', 'آل ان ون ٹریکنگ پورٹل', 'Unified Application Tracker')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            {t(
              'Paste any passport tracking number, NADRA tracking ID, CNIC digits, or loan reference below. Our system automatically routes you to the verified official portal.',
              'پاسپورٹ ٹریکنگ نمبر، نادرا ٹوکن یا 13 ہندسوں کا شناختی کارڈ نمبر درج کریں اور متعلقہ پورٹل پر ری ڈائریکٹ ہوں۔'
            )}
          </p>
        </header>

        {/* Input & Routing Form */}
        <div className="bg-white dark:bg-doc-dark-base border border-doc-brass/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-xs font-mono font-bold text-doc-brass uppercase">
              {t('Enter Tracking ID / Reference / CNIC', 'ٹریکنگ نمبر یا شناختی کارڈ درج کریں')}
            </label>

            <div className="relative">
              <input
                type="text"
                placeholder={t('e.g. 10293847561, PB123456, or 35201-1234567-1', 'مثال: 10293847561 یا شناختی کارڈ نمبر')}
                value={trackingNumber}
                onChange={(e) => handleInputChange(e.target.value)}
                className="w-full px-4 py-3.5 pl-11 text-sm bg-doc-paper dark:bg-doc-dark-card border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-doc-seal font-mono"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
            </div>

            {detectedType && (
              <div className="bg-doc-paper dark:bg-doc-dark-card border border-doc-brass/40 rounded-xl p-4 space-y-2 animate-fadeIn">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-doc-seal font-mono uppercase">{detectedType.name}</span>
                  <span className="text-doc-verified flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Auto Detected</span>
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {detectedType.instruction}
                </p>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-doc-ink text-white font-bold text-xs rounded-lg hover:bg-doc-ink/90 transition shadow flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <span>Proceed to {detectedType.portalName}</span>
                    <ExternalLink className="w-4 h-4 text-doc-brass" />
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Quick Shortcut Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/nadra/tracking-id"
            className="p-4 rounded-xl bg-doc-paper dark:bg-doc-dark-card border border-doc-brass/30 hover:border-doc-seal transition space-y-2"
          >
            <span className="font-mono text-[10px] text-doc-seal font-bold uppercase">NADRA TRACKING</span>
            <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-slate-100">
              {t('NADRA Card Status Guide', 'نادرا کارڈ سٹیٹس گائیڈ')}
            </h3>
          </Link>

          <Link
            href="/passport/tracking-status"
            className="p-4 rounded-xl bg-doc-paper dark:bg-doc-dark-card border border-doc-brass/30 hover:border-doc-seal transition space-y-2"
          >
            <span className="font-mono text-[10px] text-doc-seal font-bold uppercase">PASSPORT TRACKING</span>
            <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-slate-100">
              {t('Passport Print Status Guide', 'پاسپورٹ ٹریکنگ گائیڈ')}
            </h3>
          </Link>

          <Link
            href="/welfare/bisp-payment-check"
            className="p-4 rounded-xl bg-doc-paper dark:bg-doc-dark-card border border-doc-brass/30 hover:border-doc-seal transition space-y-2"
          >
            <span className="font-mono text-[10px] text-doc-seal font-bold uppercase">BISP 8171 PORTAL</span>
            <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-slate-100">
              {t('BISP 8171 Payment Check', 'بے نظیر 8171 چیک')}
            </h3>
          </Link>
        </div>
      </div>
    </>
  );
}
