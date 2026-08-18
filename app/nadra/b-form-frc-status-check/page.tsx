import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SchemaInjector } from '@/components/SchemaInjector';
import { BFormFrcStatusChecker } from '@/components/BFormFrcStatusChecker';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { ShieldCheck, MessageSquare, ExternalLink, HelpCircle, FileCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'B-Form / FRC Status — 3 Ways to Check Instantly: NADRA Guide 2026',
  description: 'Verified guide to check NADRA B-Form (CRC) and Family Registration Certificate (FRC) application status via SMS 8400, official Pak-ID portal, and collection centers.',
  openGraph: {
    title: 'B-Form / FRC Status — 3 Ways to Check Instantly: NADRA Guide 2026',
    description: 'Track your NADRA B-Form and FRC certificate status using official SMS 8400 and Pak-ID portal instructions.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/nadra/b-form-frc-status-check',
  },
};

export default function BFormFrcStatusCheckPage() {
  const breadcrumbs = [
    { nameEn: 'NADRA Services', nameUr: 'نادرا سروسز', url: '/nadra' },
    { nameEn: 'B-Form / FRC Status Guide', nameUr: 'بی فارم و ایف آر سی سٹیٹس' },
  ];

  // HowTo JSON-LD Schema describing the 3 official ways to check status
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Check NADRA B-Form & FRC Status (3 Official Ways)',
    description: 'Step-by-step guide to verify your NADRA Child Registration Certificate (B-Form) or Family Registration Certificate (FRC) processing status using SMS 8400, online portal, or center pickup.',
    totalTime: 'PT3M',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Check via NADRA SMS Shortcode (8400)',
        text: 'From any mobile phone in Pakistan, create an SMS with your 12-digit NADRA tracking ID and send it to 8400. You will receive an instant reply showing In-Process, Printed, or Dispatched status.',
        url: 'https://pakistaninfohub.com/nadra/b-form-frc-status-check#method-sms',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Check Online at id.nadra.gov.pk Portal',
        text: 'Visit the official NADRA Pak-ID portal (id.nadra.gov.pk), log in with your registered account credentials, and view your tracking ID under Existing Applications.',
        url: 'https://pakistaninfohub.com/nadra/b-form-frc-status-check#method-online',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Verify Status Labels & NRC Collection',
        text: 'Understand official status meanings: In-Process (under verification), Printed (certificate generated at Islamabad facility), or Dispatched (ready for counter pickup or courier delivery).',
        url: 'https://pakistaninfohub.com/nadra/b-form-frc-status-check#method-labels',
      },
    ],
  };

  return (
    <div className="space-y-8 md:space-y-12 animate-fadeIn max-w-5xl mx-auto">
      {/* Schema Injection */}
      <SchemaInjector breadcrumbs={breadcrumbs} customSchema={howToSchema} />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Page Header */}
      <header className="rounded-3xl doc-card border-2 border-doc-brass/40 p-6 sm:p-8 md:p-10 space-y-4 relative overflow-hidden bg-doc-ink text-white shadow-2xl">
        <div className="flex flex-wrap items-center gap-2">
          <InteractiveToolBadge labelEn="STATUS CHECK GUIDE" labelUr="سٹیٹس گائیڈ" variant="seal" />
          <span className="text-xs text-slate-400 font-bold">•</span>
          <VerifiedBadge variant="header" textEn="100% PRIVATE CLIENT-SIDE" textUr="محفوظ کلائنٹ سائیڈ" />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold tracking-tight leading-tight">
          B-Form / FRC Status — 3 Ways to Check Instantly
        </h1>

        <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed font-sans">
          Track the progress of your Child Registration Certificate (B-Form / CRC) and Family Registration Certificate (FRC). Enter your 12-digit receipt tracking number below for instant guided instructions.
        </p>
      </header>

      {/* Primary Tool Mount — Centered Card */}
      <section className="py-2 flex justify-center">
        <BFormFrcStatusChecker />
      </section>

      {/* FAQs / Helpful Guidance Section */}
      <section className="doc-card rounded-2xl p-6 sm:p-8 border border-doc-brass/30 space-y-6">
        <div className="flex items-center gap-2 border-b border-doc-brass/30 pb-3">
          <FileCheck className="w-5 h-5 text-doc-seal" />
          <h2 className="text-xl font-serif font-extrabold text-doc-ink dark:text-white">
            Common Questions About B-Form & FRC Processing
          </h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans">
          <div className="p-4 rounded-xl bg-doc-paper/80 dark:bg-slate-800/80 border border-doc-brass/20 space-y-1.5">
            <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
              How many days does NADRA take to issue a B-Form (CRC)?
            </h3>
            <p className="leading-relaxed">
              Standard B-Form processing takes up to <strong>31 calendar days</strong> for Normal counter applications (PKR 50 fee). Executive counter applications (PKR 500 fee) are typically printed and handed over on the <strong>same day</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-doc-paper/80 dark:bg-slate-800/80 border border-doc-brass/20 space-y-1.5">
            <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
              How quickly is a Family Registration Certificate (FRC) issued?
            </h3>
            <p className="leading-relaxed">
              At physical NADRA Registration Centers (NRC), an FRC is issued within <strong>15 to 30 minutes</strong> after biometric verification. If applied online via the Pak-ID portal, the digital PDF certificate is emailed to you in <strong>1 to 2 business days</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-doc-paper/80 dark:bg-slate-800/80 border border-doc-brass/20 space-y-1.5">
            <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
              What should I do if the 8400 SMS service returns "No Record Found"?
            </h3>
            <p className="leading-relaxed">
              Ensure you have typed the exact 12-digit number without any hyphens or spaces. If you recently visited the center today, allow <strong>24 hours</strong> for the regional server to synchronize your record with NADRA headquarters.
            </p>
          </div>
        </div>
      </section>

      {/* Guide Links */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl doc-card border border-doc-brass/30 flex flex-col justify-between space-y-3">
          <div>
            <span className="font-mono text-[10px] uppercase font-bold text-doc-seal">OFFICIAL MANUAL</span>
            <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white mt-1">
              NADRA B-Form Registration Guide
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
              Complete union council birth certificate requirements, PKR 50 fee schedule, and registration steps.
            </p>
          </div>
          <Link
            href="/nadra/b-form-kaise-banaye"
            className="text-xs font-mono font-bold text-doc-seal dark:text-red-400 hover:underline flex items-center gap-1 pt-2"
          >
            <span>READ B-FORM GUIDE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="p-6 rounded-2xl doc-card border border-doc-brass/30 flex flex-col justify-between space-y-3">
          <div>
            <span className="font-mono text-[10px] uppercase font-bold text-doc-seal">OFFICIAL MANUAL</span>
            <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white mt-1">
              Family Registration Certificate (FRC) Guide
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
              Learn how to get an FRC by Birth, Marriage, or Adoption with official fee rates and requirements.
            </p>
          </div>
          <Link
            href="/nadra/family-registration-certificate"
            className="text-xs font-mono font-bold text-doc-seal dark:text-red-400 hover:underline flex items-center gap-1 pt-2"
          >
            <span>READ FRC GUIDE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
