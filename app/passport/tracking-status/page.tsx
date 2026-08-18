import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SchemaInjector } from '@/components/SchemaInjector';
import { PassportTrackingWidget } from '@/components/PassportTrackingWidget';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { GeoTrustBadge } from '@/components/GeoTrustBadge';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ShieldCheck, MessageSquare, ExternalLink, HelpCircle, FileCheck, ArrowRight, Plane, Clock, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Passport Tracking Status 2026: Track via Token & SMS 9988',
  description: 'Track your Pakistani passport status online at tracking.dgip.gov.pk or via SMS 9988. Free guided lookup for MRP and e-Passport printing and delivery.',
  alternates: {
    canonical: 'https://pakistaninfohub.com/passport/tracking-status',
  },
  openGraph: {
    title: 'Passport Tracking Status 2026: Track via Token & SMS 9988',
    description: 'Track your Pakistani passport status online at tracking.dgip.gov.pk or via SMS 9988. Free guided lookup for MRP and e-Passport printing and delivery.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/passport/tracking-status',
  },
};

export default function PassportTrackingPage() {
  const breadcrumbs = [
    { nameEn: 'Passport & Travel', nameUr: 'پاسپورٹ اور ٹریول', url: '/passport' },
    { nameEn: 'Passport Tracking Status', nameUr: 'پاسپورٹ ٹریکنگ سٹیٹس' },
  ];

  const author = {
    name: 'Editorial Team',
    role: 'Passport & Immigration Desk',
  };

  const officialSource = {
    name: 'Directorate General of Immigration & Passports (DGIP)',
    url: 'https://tracking.dgip.gov.pk/',
  };

  const faqs = [
    {
      questionEn: 'How long does passport tracking status take to update online?',
      questionUr: 'پاسپورٹ ٹریکنگ سٹیٹس آن لائن کتنے دنوں میں اپڈیٹ ہوتا ہے؟',
      answerEn: 'After biometric submission at your Regional Passport Office, token records appear on tracking.dgip.gov.pk within 24 to 48 hours. Normal processing status updates take 15-21 days, while Urgent takes 5-7 days.',
      answerUr: 'پاسپورٹ آفس میں بائیو میٹرک کے بعد 24 سے 48 گھنٹوں کے اندر ریکارڈ سسٹم میں ظاہر ہو جاتا ہے۔ نارمل درخواست کا سٹیٹس 15 سے 21 دنوں میں اپڈیٹ ہوتا ہے۔',
    },
    {
      questionEn: 'How can I track my Pakistani passport status via SMS?',
      questionUr: 'ایس ایم ایس کے ذریعے پاسپورٹ کیسے ٹریک کریں؟',
      answerEn: 'Send your 11-digit Token Number without hyphens to 9988 from any mobile network in Pakistan (Jazz, Zong, Telenor, Ufone). You will receive an instant SMS reply showing whether your passport is In-Printing or Dispatched.',
      answerUr: 'اپنا 11 ہندسوں کا ٹوکن نمبر 9988 پر میسج کریں۔ آپ کو فوراً پرنٹنگ یا ڈلیوری کا سٹیٹس موصول ہو جائے گا۔',
    },
    {
      questionEn: 'What does "In-Printing" status mean on DGIP tracking?',
      questionUr: 'پاسپورٹ ٹریکنگ میں In-Printing کا کیا مطلب ہے؟',
      answerEn: '"In-Printing" indicates that your identity data and security clearance are fully approved, and your physical passport booklet is being serialized and printed at DGIP headquarters in Islamabad.',
      answerUr: 'اس کا مطلب ہے کہ تمام بائیو میٹرک اور سیکیورٹی کلیئرنس مکمل ہو چکی ہے اور پاسپورٹ اسلام آباد ہیڈ کوارٹر میں پرنٹ ہو رہا ہے۔',
    },
    {
      questionEn: 'What documents do I need to collect my ready passport?',
      questionUr: 'تیار پاسپورٹ وصول کرنے کے لیے کن کاغذات کی ضرورت ہے؟',
      answerEn: 'To collect your passport from the Regional Passport Office counter, bring your original valid CNIC/NICOP and your original printed Delivery Token slip.',
      answerUr: 'پاسپورٹ وصول کرنے کے لیے اپنا اصل شناختی کارڈ اور پاسپورٹ آفس کی اصل ٹوکن رسید ہمراہ لائیں۔',
    },
  ];

  // HowTo JSON-LD Schema
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Track Pakistani Passport Application Status (2026)',
    description: 'Step-by-step instructions to track Machine Readable Passport (MRP) or e-Passport printing and dispatch status via SMS 9988 and tracking.dgip.gov.pk.',
    totalTime: 'PT2M',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Locate 11-Digit Token Number',
        text: 'Find the 11-digit token reference number printed near the top of your official passport delivery slip.',
        url: 'https://pakistaninfohub.com/passport/tracking-status#step-1',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Check Online at tracking.dgip.gov.pk or Send SMS to 9988',
        text: 'Enter the 11-digit number on tracking.dgip.gov.pk or SMS the token to 9988 from your mobile phone.',
        url: 'https://pakistaninfohub.com/passport/tracking-status#step-2',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Verify Status and Collect Passport',
        text: 'Once the status shows Ready for Collection, visit your Regional Passport Office with your original CNIC and delivery slip to collect your passport.',
        url: 'https://pakistaninfohub.com/passport/tracking-status#step-3',
      },
    ],
  };

  return (
    <div className="space-y-8 md:space-y-12 animate-fadeIn max-w-5xl mx-auto">
      {/* Schema Injection */}
      <SchemaInjector breadcrumbs={breadcrumbs} faqs={faqs} customSchema={howToSchema} />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Header */}
      <header className="rounded-3xl doc-card border-2 border-doc-brass/40 p-6 sm:p-8 md:p-10 space-y-4 relative overflow-hidden bg-doc-ink text-white shadow-2xl">
        <div className="flex flex-wrap items-center gap-2">
          <InteractiveToolBadge labelEn="GUIDED TRACKING TOOL" labelUr="آن لائن ٹریکنگ ٹول" variant="navy" />
          <span className="text-xs text-slate-400 font-bold">•</span>
          <VerifiedBadge variant="header" textEn="OFFICIAL DGIP CHANNELS" textUr="آفیشل پاسپورٹ چینلز" />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold tracking-tight leading-tight">
          Pakistani Passport Application Tracking (2026)
        </h1>

        <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed font-sans">
          Verify real-time printing and delivery status of your Machine Readable Passport (MRP) or e-Passport. Enter your 11-digit token number below for instant guided instructions.
        </p>

        {/* GEO Trust Badge */}
        <GeoTrustBadge
          lastVerified="August 17, 2026"
          officialSource={officialSource}
          author={author}
        />
      </header>

      {/* AEO Direct Answer Box */}
      <DirectAnswerBox
        topicTitleEn="How to Track Pakistani Passport Status in 2026"
        topicTitleUr="پاکستانی پاسپورٹ ٹریکنگ کا طریقہ 2026"
        answerEn="To track Pakistani passport status, send your 11-digit Token Number via SMS to 9988 (cost PKR 2+tax) or check free online at tracking.dgip.gov.pk. Normal passport processing takes 21–30 working days, Urgent takes 7–10 working days, and Fast Track takes 2–4 working days."
        answerUr="پاسپورٹ کا سٹیٹس جاننے کے لیے 11 ہندسوں کا ٹوکن نمبر 9988 پر ایس ایم ایس بھیجیں یا tracking.dgip.gov.pk پر مفت چیک کریں۔ نارمل پاسپورٹ 21 تا 30 دن اور ارجنٹ 7 تا 10 دن میں تیار ہوتا ہے۔"
      />

      {/* Numeric Highlights Bar */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-xl doc-card border border-doc-brass/30 bg-white dark:bg-doc-dark-card text-center">
          <span className="text-[11px] font-mono uppercase text-slate-500 font-bold">SMS Shortcode</span>
          <div className="text-xl font-mono font-extrabold text-doc-seal dark:text-red-400 mt-0.5">9988</div>
          <span className="text-[11px] text-slate-500">PKR 2 + tax per query</span>
        </div>
        <div className="p-4 rounded-xl doc-card border border-doc-brass/30 bg-white dark:bg-doc-dark-card text-center">
          <span className="text-[11px] font-mono uppercase text-slate-500 font-bold">Online Portal</span>
          <div className="text-lg font-mono font-extrabold text-doc-ink dark:text-white mt-0.5">tracking.dgip.gov.pk</div>
          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">100% Free 24/7</span>
        </div>
        <div className="p-4 rounded-xl doc-card border border-doc-brass/30 bg-white dark:bg-doc-dark-card text-center">
          <span className="text-[11px] font-mono uppercase text-slate-500 font-bold">Official Helpline</span>
          <div className="text-xl font-mono font-extrabold text-doc-brass mt-0.5">0800-00000</div>
          <span className="text-[11px] text-slate-500">Toll-Free in Pakistan</span>
        </div>
      </section>

      {/* Main Interactive Tool Mount */}
      <section className="py-2 flex justify-center">
        <PassportTrackingWidget />
      </section>

      {/* FAQs Section */}
      <FAQAccordion faqs={faqs} />

      {/* Related Fee Links */}
      <section className="p-6 rounded-2xl bg-doc-paper dark:bg-doc-dark-card border border-doc-brass/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
            Need to Check Passport Fees for New Application or Renewal?
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
            Use our interactive Passport Fee Calculator to check exact fees for 36, 72, 100 pages, and e-Passports.
          </p>
        </div>
        <Link
          href="/passport/fee-calculator"
          className="px-5 py-3 rounded-xl bg-doc-seal text-white hover:bg-red-700 font-mono font-bold text-xs flex items-center gap-1.5 transition shadow-sm shrink-0 min-h-[44px]"
        >
          <span>OPEN FEE CALCULATOR</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
