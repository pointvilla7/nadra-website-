import React from 'react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SchemaInjector } from '@/components/SchemaInjector';

const BFormFrcStatusChecker = dynamic(
  () => import('@/components/BFormFrcStatusChecker').then((mod) => mod.BFormFrcStatusChecker),
  { ssr: false }
);
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { GeoTrustBadge } from '@/components/GeoTrustBadge';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ShieldCheck, MessageSquare, ExternalLink, HelpCircle, FileCheck, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'B-Form / FRC Status — 3 Ways to Check Instantly: NADRA Guide 2026',
  description: 'Verified guide to check NADRA B-Form (CRC) and Family Registration Certificate (FRC) application status via SMS 8400, official Pak-ID portal, and collection centers.',
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/nadra/b-form-frc-status-check',
  },
  openGraph: {
    title: 'B-Form / FRC Status — 3 Ways to Check Instantly: NADRA Guide 2026',
    description: 'Track your NADRA B-Form and FRC certificate status using official SMS 8400 and Pak-ID portal instructions.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/nadra/b-form-frc-status-check',
  },
};

export default function BFormFrcStatusCheckPage() {
  const breadcrumbs = [
    { nameEn: 'NADRA Services', nameUr: 'نادرا سروسز', url: '/nadra' },
    { nameEn: 'B-Form / FRC Status Guide', nameUr: 'بی فارم و ایف آر سی سٹیٹس' },
  ];

  const author = {
    name: 'Editorial Team',
    role: 'Civic Documentation Analyst',
  };

  const officialSource = {
    name: 'National Database and Registration Authority (NADRA)',
    url: 'https://id.nadra.gov.pk/',
  };

  const faqs = [
    {
      questionEn: 'How can I check NADRA B-Form status via SMS in Pakistan?',
      questionUr: 'ایس ایم ایس کے ذریعے نادرا بی فارم کا سٹیٹس کیسے چیک کریں؟',
      answerEn: 'Type your 12-digit NADRA Tracking ID without hyphens or spaces and send it as an SMS to 8400 from any Pakistani mobile network (Jazz, Zong, Telenor, Ufone). You will receive an instant reply showing In-Process, Printed, or Dispatched status.',
      answerUr: 'اپنا 12 ہندسوں کا نادرا ٹریکنگ نمبر 8400 پر میسج کریں۔ آپ کو فوری طور پر درخواست کی صورتحال کا جواب موصول ہو جائے گا۔',
    },
    {
      questionEn: 'How long does NADRA take to process and issue a B-Form (CRC)?',
      questionUr: 'نادرا سے بی فارم کتنے دنوں میں بنتا ہے؟',
      answerEn: 'Normal processing for Child Registration Certificate (B-Form) takes up to 31 calendar days for PKR 50. Executive counter applications take PKR 500 and are printed and delivered on the same day.',
      answerUr: 'نارمل فیس 50 روپے میں 31 دن لگتے ہیں جبکہ ایگزیکٹو کاؤنٹر سے 500 روپے فیس کے ساتھ اسی دن بی فارم مل جاتا ہے۔',
    },
    {
      questionEn: 'What is the processing time for a Family Registration Certificate (FRC)?',
      questionUr: 'ایف آر سی (FRC) سرٹیفکیٹ کتنی دیر میں ملتا ہے؟',
      answerEn: 'At physical NADRA Registration Centers (NRC), an FRC is issued within 15 to 30 minutes after biometric verification. If applied online via Pak-ID portal, the digital PDF certificate is issued in 1 to 2 working days.',
      answerUr: 'نادرا سینٹر پر 15 سے 30 منٹ میں فوری پرنٹ ملتا ہے جبکہ آن لائن پورٹل پر 1 سے 2 دن میں پی ڈی ایف ای میل کیا جاتا ہے۔',
    },
    {
      questionEn: 'What does "Dispatched" status mean on NADRA tracking?',
      questionUr: 'نادرا ٹریکنگ میں Dispatched کا کیا مطلب ہے؟',
      answerEn: '"Dispatched" means your physical certificate has been sent via courier to your provided residential address or is ready for physical collection at your registered NRC counter.',
      answerUr: 'اس کا مطلب ہے کہ آپ کی دستاویز پرنٹ ہو کر متعلقہ نادرا سینٹر یا بذریعہ ڈاک روانہ کر دی گئی ہے۔',
    },
  ];

  // HowTo JSON-LD Schema
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
        url: 'https://www.pakistaninfohub.com/nadra/b-form-frc-status-check#method-sms',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Check Online at id.nadra.gov.pk Portal',
        text: 'Visit the official NADRA Pak-ID portal (id.nadra.gov.pk), log in with your registered account credentials, and view your tracking ID under Existing Applications.',
        url: 'https://www.pakistaninfohub.com/nadra/b-form-frc-status-check#method-online',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Verify Status Labels & NRC Collection',
        text: 'Understand official status meanings: In-Process (under verification), Printed (certificate generated at Islamabad facility), or Dispatched (ready for counter pickup or courier delivery).',
        url: 'https://www.pakistaninfohub.com/nadra/b-form-frc-status-check#method-labels',
      },
    ],
  };

  return (
    <div className="space-y-8 md:space-y-12 animate-fadeIn max-w-5xl mx-auto">
      {/* Schema Injection */}
      <SchemaInjector breadcrumbs={breadcrumbs} faqs={faqs} customSchema={howToSchema} />

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

        {/* GEO Trust Badge */}
        <GeoTrustBadge
          lastVerified="August 28, 2026"
          officialSource={officialSource}
          author={author}
        />
      </header>

      {/* AEO Direct Answer Box */}
      <DirectAnswerBox
        topicTitleEn="How to Check B-Form and FRC Status in 2026 (In Short)"
        topicTitleUr="بی فارم اور ایف آر سی سٹیٹس چیک کرنے کا طریقہ"
        answerEn="Send your 12-digit NADRA Tracking ID via SMS to 8400 (cost PKR 2+tax) or check free online at id.nadra.gov.pk under 'Existing Applications'. Normal B-Form processing takes 31 days (PKR 50), while Executive counter processing takes same day (PKR 500). FRC takes 15 minutes at NRC counters."
        answerUr="اپنا 12 ہندسوں کا ٹریکنگ نمبر 8400 پر ایس ایم ایس بھیجیں یا id.nadra.gov.pk پر چیک کریں۔ نارمل بی فارم 31 دن (50 روپے) اور ایگزیکٹو کاؤنٹر پر اسی دن (500 روپے) ملتا ہے۔ ایف آر سی 15 منٹ میں تیار ہو جاتی ہے۔"
      />

      {/* Standalone Numeric Facts Highlights */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-xl doc-card border border-doc-brass/30 bg-white dark:bg-doc-dark-card text-center">
          <span className="text-[11px] font-mono uppercase text-slate-500 font-bold">NADRA SMS Shortcode</span>
          <div className="text-xl font-mono font-extrabold text-doc-seal dark:text-red-400 mt-0.5">8400</div>
          <span className="text-[11px] text-slate-500">Standard SMS rate</span>
        </div>
        <div className="p-4 rounded-xl doc-card border border-doc-brass/30 bg-white dark:bg-doc-dark-card text-center">
          <span className="text-[11px] font-mono uppercase text-slate-500 font-bold">Online Portal</span>
          <div className="text-lg font-mono font-extrabold text-doc-ink dark:text-white mt-0.5">id.nadra.gov.pk</div>
          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">Pak-ID Dashboard</span>
        </div>
        <div className="p-4 rounded-xl doc-card border border-doc-brass/30 bg-white dark:bg-doc-dark-card text-center">
          <span className="text-[11px] font-mono uppercase text-slate-500 font-bold">NADRA Helpline</span>
          <div className="text-xl font-mono font-extrabold text-doc-brass mt-0.5">1777</div>
          <span className="text-[11px] text-slate-500">From mobile phones</span>
        </div>
      </section>

      {/* Primary Tool Mount — Centered Card */}
      <section className="py-2 flex justify-center">
        <BFormFrcStatusChecker />
      </section>

      {/* FAQs Section */}
      <FAQAccordion faqs={faqs} />

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
