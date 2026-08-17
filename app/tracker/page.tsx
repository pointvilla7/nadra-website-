'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  FileText,
  Award,
  Car,
  Landmark,
  Compass,
  HelpCircle,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { VerifiedSeal } from '@/components/VerifiedSeal';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SchemaInjector } from '@/components/SchemaInjector';
import { AdPlacementZone } from '@/components/AdPlacementZone';

export default function UnifiedTrackerPage() {
  const { t } = useLanguage();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [detectedType, setDetectedType] = useState<{
    name: string;
    portalName: string;
    targetUrl: string;
    internalGuideUrl?: string;
    instruction: string;
  } | null>(null);

  const handleInputChange = (val: string) => {
    setTrackingNumber(val);
    const clean = val.trim().toUpperCase();

    if (!clean) {
      setDetectedType(null);
      return;
    }

    // Smart detection rules
    if (clean.startsWith('NAD') || clean.length === 12 || clean.includes('TRACK')) {
      setDetectedType({
        name: t('NADRA CNIC / Card Tracking', 'نادرا شناختی کارڈ ٹریکنگ', 'NADRA CNIC / Card Tracking'),
        portalName: 'NADRA Pak-ID Tracking Portal',
        targetUrl: 'https://id.nadra.gov.pk/e-id/tracking',
        internalGuideUrl: '/nadra/tracking-id',
        instruction: t(
          'Valid NADRA tracking reference detected. Click below to verify live status on the Pak-ID system.',
          'نادرا ٹریکنگ ریفرنس مل گیا ہے۔ اپنا سٹیٹس پاک آئی ڈی سسٹم پر دیکھنے کے لیے بٹن دبائیں۔',
          'Valid NADRA tracking reference mil gaya hai. Live status check karne ke liye niche click karein.'
        ),
      });
    } else if (clean.startsWith('PB') || clean.startsWith('PK') || (clean.length === 9 && !/^\d+$/.test(clean))) {
      setDetectedType({
        name: t('Machine Readable Passport Tracking', 'پاسپورٹ ٹریکنگ سسٹم', 'Machine Readable Passport Tracking'),
        portalName: 'DGIP Passport Tracking System',
        targetUrl: 'https://tracking.dgip.gov.pk/',
        internalGuideUrl: '/passport/tracking-status',
        instruction: t(
          'Passport tracking token detected. Click below to check printing and delivery status via DGIP.',
          'پاسپورٹ ٹریکنگ ٹوکن دریافت ہوا ہے۔ ڈی جی آئی پی پر پرنٹنگ سٹیٹس دیکھنے کے لیے کلک کریں۔',
          'Passport tracking token detected. DGIP par printing status check karne ke liye click karein.'
        ),
      });
    } else if (clean.startsWith('ACAG') || clean.startsWith('PMY') || clean.startsWith('LOAN')) {
      setDetectedType({
        name: t('Government Loan Application', 'سرکاری قرضہ سکیم درخواست', 'Government Loan Application'),
        portalName: 'Apni Chhat / PM Youth Loan Portal',
        targetUrl: 'https://acag.punjab.gov.pk/',
        internalGuideUrl: '/loans',
        instruction: t(
          'Govt housing / loan application reference detected.',
          'سرکاری ہاؤسنگ / لون درخواست کا نمبر مل گیا ہے۔',
          'Govt housing / loan reference detected.'
        ),
      });
    } else if (clean.length === 13 && /^\d+$/.test(clean)) {
      setDetectedType({
        name: t('BISP 8171 / CNIC Welfare Status', 'بے نظیر 8171 / شناختی کارڈ اہلیت', 'BISP 8171 / CNIC Welfare Status'),
        portalName: 'BISP 8171 Official Web Portal',
        targetUrl: 'https://8171.bisp.gov.pk/',
        internalGuideUrl: '/welfare/bisp-payment-check',
        instruction: t(
          '13-digit CNIC format detected. Proceed to the 8171 portal for BISP Kafaalat payment status.',
          '13 ہندسوں کا شناختی کارڈ نمبر۔ 8171 بی ایس پی کفالت رقم چیک کرنے کے لیے کلک کریں۔',
          '13-digit CNIC format detected. BISP Kafaalat payment status check karne ke liye click karein.'
        ),
      });
    } else {
      setDetectedType({
        name: t('General Civic Application ID', 'عوامی ایپلیکیشن ٹریکنگ', 'General Civic Application ID'),
        portalName: 'Official Government Gateway',
        targetUrl: 'https://id.nadra.gov.pk/',
        internalGuideUrl: '/nadra/tracking-id',
        instruction: t(
          'Reference ID entered. Select your specific service card below for direct verification links.',
          'ریفرنس نمبر درج کر دیا گیا ہے۔ مزید تفصیل کے لیے نیچے دی گئی کیٹیگریز دیکھیں۔',
          'Reference ID entered. Direct verification links ke liye niche category select karein.'
        ),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (detectedType?.targetUrl && typeof window !== 'undefined') {
      window.open(detectedType.targetUrl, '_blank');
    }
  };

  const breadcrumbs = [
    {
      nameEn: 'Unified Application Tracker',
      nameUr: 'آل ان ون ٹریکنگ پورٹل',
    },
  ];

  const trackingServices = [
    {
      id: 'nadra',
      icon: CreditCard,
      badge: 'NADRA OFFICIAL',
      titleEn: 'NADRA CNIC & Pak-ID Status',
      titleUr: 'نادرا شناختی کارڈ و پاک آئی ڈی ٹریکنگ',
      titleRoman: 'NADRA CNIC & Pak-ID Status',
      descEn: 'Track CNIC renewal, Smart Card, Family Registration Certificate (FRC), & Pak-ID application status.',
      descUr: 'نادرا شناختی کارڈ، اسمارٹ کارڈ، ایف آر سی اور پاک آئی ڈی کا سٹیٹس آن لائن چیک کریں۔',
      descRoman: 'NADRA CNIC, Smart Card, FRC aur Pak-ID application status online check karein.',
      internalLink: '/nadra/tracking-id',
      externalLink: 'https://id.nadra.gov.pk/e-id/tracking',
    },
    {
      id: 'passport',
      icon: FileText,
      badge: 'DGIP PASSPORT',
      titleEn: 'Passport Print & Delivery Status',
      titleUr: 'پاسپورٹ پرنٹنگ اور ڈیلیوری سٹیٹس',
      titleRoman: 'Passport Print & Delivery Status',
      descEn: 'Verify Machine Readable Passport (MRP) & e-Passport printing status, receipt token, & delivery tracking.',
      descUr: 'مشین ریڈ ایبل اور ای پاسپورٹ کا پرنٹنگ اور ڈیلیوری سٹیٹس ٹریکنگ ٹوکن کے ذریعے چیک کریں۔',
      descRoman: 'Machine Readable Passport aur e-Passport printing and delivery status token se check karein.',
      internalLink: '/passport/tracking-status',
      externalLink: 'https://tracking.dgip.gov.pk/',
    },
    {
      id: 'bisp',
      icon: ShieldCheck,
      badge: 'BISP 8171',
      titleEn: 'BISP 8171 Payment & Welfare Status',
      titleUr: 'بے نظیر 8171 ادائیگی و اہلیت پورٹل',
      titleRoman: 'BISP 8171 Payment & Welfare Status',
      descEn: 'Check 8171 Kafaalat quarterly payments, CNIC eligibility status, and NSER survey verification.',
      descUr: 'بے نظیر 8171 کفالت کی سہ ماہی قسط، شناختی کارڈ سے اہلیت اور سروے ریکارڈ چیک کریں۔',
      descRoman: 'BISP 8171 Kafaalat qist, CNIC se aheliyat aur NSER survey record check karein.',
      internalLink: '/welfare/bisp-payment-check',
      externalLink: 'https://8171.bisp.gov.pk/',
    },
    {
      id: 'bise',
      icon: Award,
      badge: 'BISE BOARDS',
      titleEn: 'All Pakistan BISE Exam Results 2026',
      titleUr: 'تمام تعلیمی بورڈز نتائج 2026',
      titleRoman: 'All Pakistan BISE Exam Results 2026',
      descEn: 'Search 9th, 10th (Matric), 11th, and 12th (Inter) annual exam results across all 25+ Pakistan boards.',
      descUr: 'پاکستان کے تمام 25 سے زائد تعلیمی بورڈز کے میٹرک اور انٹر کے نتائج اور گزٹ دیکھیں۔',
      descRoman: 'Pakistan ke tamaam 25+ educational boards ke Matric aur Inter results aur gazette check karein.',
      internalLink: '/education/bise-result-check-2026',
      externalLink: '/education/bise-result-check-2026',
    },
    {
      id: 'traffic',
      icon: Car,
      badge: 'TRAFFIC & EXCISE',
      titleEn: 'Traffic E-Challan & Vehicle Verification',
      titleUr: 'ای چالان فائن اور گاڑی کی تصدیق',
      titleRoman: 'Traffic E-Challan & Vehicle Verification',
      descEn: 'Lookup PSCA Punjab Safe City e-challan fines, Islamabad traffic tickets, and vehicle excise token tax.',
      descUr: 'پنجاب سیف سٹیز ای چالان، اسلام آباد ٹریفک چالان اور ایکسائز گاڑی ٹوکن ٹیکس کی تفصیلات حاصل کریں۔',
      descRoman: 'Punjab PSCA Safe City e-challan fines, Islamabad traffic tickets aur vehicle token tax check karein.',
      internalLink: '/traffic/e-challan-check-online',
      externalLink: 'https://echallan.psca.gop.pk/',
    },
    {
      id: 'loans',
      icon: Landmark,
      badge: 'GOVT SCHEMES',
      titleEn: 'Govt Housing & Youth Loan Status',
      titleUr: 'سرکاری قرضہ جات اور ہاؤسنگ سکیمز',
      titleRoman: 'Govt Housing & Youth Loan Status',
      descEn: 'Track Apni Chhat Apna Ghar, Chief Minister initiatives, & PM Youth Business Loan application status.',
      descUr: 'اپنی چھت اپنا گھر سکیم، وزیراعلیٰ پروگرامز اور وزیراعظم یوتھ لون کی درخواستوں کا سٹیٹس معلوم کریں۔',
      descRoman: 'Apni Chhat Apna Ghar scheme aur PM Youth Business Loan applications ka status check karein.',
      internalLink: '/loans',
      externalLink: '/loans',
    },
  ];

  return (
    <>
      <SchemaInjector
        breadcrumbs={breadcrumbs}
        customSchema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Unified Application Tracker | Passport, NADRA, BISP & Loans - Pakistan Info Hub',
          url: 'https://pakistaninfohub.com/tracker',
          description:
            'Single unified tracking hub for Pakistan citizens to verify NADRA CNIC status, Passport tracking, BISP 8171 eligibility, and Govt loan applications.',
        }}
      />

      <div className="max-w-5xl mx-auto space-y-10 animate-fadeIn pb-12">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Banner Header */}
        <header className="rounded-3xl doc-card border-2 border-doc-brass/40 p-6 sm:p-10 space-y-5 relative overflow-hidden bg-doc-ink text-white shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2">
              <VerifiedSeal size="sm" year="2026" />
              <span className="font-mono text-xs text-doc-brass uppercase tracking-widest font-bold">
                UNIFIED CIVIC TRACKING GATEWAY
              </span>
            </div>
            <VerifiedBadge variant="header" />
          </div>

          <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            {t('What Would You Like to Track?', 'آپ کس ایپلیکیشن کی ٹریکنگ کرنا چاہتے ہیں؟', 'Aap Kis Application Ki Tracking Karna Chahte Hain?')}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed font-sans">
            {t(
              'Finding the right status page across dozens of Pakistan government portals can be overwhelming. We created this unified tracking hub to bring every official status tool—NADRA CNIC tracking, Passport print status, BISP 8171 payments, BISE board results, and traffic fines—into one easy lookup page. Select a service card below or enter your reference token for instant guidance.',
              'پاکستان کے مختلف سرکاری پورٹلز پر اپنی درخواست کا سٹیٹس تلاش کرنا اکثر مشکل ہوتا ہے۔ ہم نے یہ آل ان ون ٹریکنگ پورٹل بنایا ہے تاکہ آپ نادرا، پاسپورٹ، 8171 بی ایس پی، بورڈ رزلٹ اور ای چالان کے تمام تصدیق شدہ لنکس ایک جگہ پر حاصل کر سکیں۔ نیچے دیے گئے سروس کارڈز منتخب کریں یا اپنا ٹریکنگ نمبر درج کریں۔',
              'Pakistan ke mukhtalif sarkari portals par apni application ka status dhoondna mushkil ho sakta hai. Humne yeh unified tracking hub banaya hai taake aap NADRA, Passport, BISP 8171, BISE results aur traffic fines ke official tracking links ek jagah hasil kar sakein. Niche diye gaye cards select karein ya apna tracking token enter karein.'
            )}
          </p>
        </header>

        {/* Interactive Search & Router Tool */}
        <section className="bg-white dark:bg-doc-dark-card border-2 border-doc-brass/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex items-center gap-2 border-b border-doc-brass/20 pb-4">
            <Compass className="w-6 h-6 text-doc-seal" />
            <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
              {t('Instant Reference Lookup & Auto-Router', 'فوری ٹریکنگ تلاش اور آٹو روٹر', 'Instant Reference Lookup & Auto-Router')}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-xs font-mono font-bold text-doc-brass uppercase">
              {t('Enter Tracking ID, Passport Token, or 13-Digit CNIC', 'ٹریکنگ نمبر، پاسپورٹ ٹوکن یا شناختی کارڈ درج کریں', 'Tracking ID, Passport Token ya CNIC enter karein')}
            </label>

            <div className="relative">
              <input
                type="text"
                placeholder={t(
                  'e.g. 10293847561, PB123456, or 35201-1234567-1',
                  'مثال: 10293847561 یا شناختی کارڈ نمبر',
                  'e.g. 10293847561, PB123456, ya 35201-1234567-1'
                )}
                value={trackingNumber}
                onChange={(e) => handleInputChange(e.target.value)}
                className="w-full px-4 py-4 pl-12 text-sm sm:text-base bg-doc-paper dark:bg-doc-dark-base border border-slate-300 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-doc-seal font-mono text-doc-ink dark:text-white shadow-inner"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-4.5" />
            </div>

            {detectedType && (
              <div className="bg-doc-paper dark:bg-doc-dark-base border-2 border-doc-seal/40 rounded-2xl p-5 space-y-3 animate-fadeIn shadow-md">
                <div className="flex flex-wrap items-center justify-between text-xs font-bold gap-2">
                  <span className="text-doc-seal font-mono uppercase text-sm">{detectedType.name}</span>
                  <span className="text-emerald-700 dark:text-emerald-400 flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Auto Detected</span>
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                  {detectedType.instruction}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 bg-doc-ink text-white font-bold text-xs sm:text-sm rounded-xl hover:bg-doc-ink/90 transition shadow-md flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <span>Proceed to {detectedType.portalName}</span>
                    <ExternalLink className="w-4 h-4 text-doc-brass" />
                  </button>

                  {detectedType.internalGuideUrl && (
                    <Link
                      href={detectedType.internalGuideUrl}
                      className="py-3 px-4 bg-doc-paper dark:bg-slate-800 text-doc-ink dark:text-slate-200 border border-doc-brass/40 font-bold text-xs sm:text-sm rounded-xl hover:border-doc-seal transition flex items-center justify-center gap-1.5"
                    >
                      <span>{t('Read Step-by-Step Guide', 'مکمل گائیڈ پڑھیں', 'Mukammal Guide Parhein')}</span>
                      <ArrowRight className="w-4 h-4 text-doc-seal" />
                    </Link>
                  )}
                </div>
              </div>
            )}
          </form>
        </section>

        {/* Tracking Services Hub Cards */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-2xl font-serif font-extrabold text-doc-ink dark:text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-doc-brass" />
              <span>{t('Verified Tracking Directories', 'تصدیق شدہ ٹریکنگ سروسز', 'Verified Tracking Directories')}</span>
            </h2>
            <span className="text-xs font-mono font-bold text-doc-brass bg-doc-paper dark:bg-doc-dark-card px-3 py-1 rounded-full border border-doc-brass/30">
              6 {t('Active Services Available', 'فعال سروسز دستیاب', 'Active Services Available')}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trackingServices.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="doc-card rounded-2xl p-6 border-2 border-doc-brass/30 hover:border-doc-seal hover:scale-[1.01] hover:-translate-y-0.5 flex flex-col justify-between transition-all duration-300 group shadow-md bg-white dark:bg-doc-dark-card"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-doc-paper dark:bg-doc-dark-base border border-doc-brass/30 text-doc-seal">
                        <IconComp className="w-5 h-5 text-doc-seal" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-doc-seal/10 text-doc-seal dark:text-red-300 border border-doc-brass/20 uppercase tracking-wider">
                        {service.badge}
                      </span>
                    </div>

                    <Link href={service.internalLink}>
                      <h3 className="text-lg font-serif font-bold text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                        {t(service.titleEn, service.titleUr, service.titleRoman)}
                      </h3>
                    </Link>

                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t(service.descEn, service.descUr, service.descRoman)}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-doc-brass/20 flex items-center justify-between gap-2 font-mono text-[11px]">
                    <Link
                      href={service.internalLink}
                      className="font-bold text-doc-seal dark:text-red-400 hover:underline flex items-center gap-1"
                    >
                      <span>{t('Read Full Guide', 'مکمل گائیڈ', 'Mukammal Guide Parhein')}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {service.externalLink.startsWith('http') ? (
                      <a
                        href={service.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-doc-ink text-white font-bold text-[10px] hover:bg-doc-ink/90 transition flex items-center gap-1"
                      >
                        <span>PORTAL</span>
                        <ExternalLink className="w-3 h-3 text-doc-brass" />
                      </a>
                    ) : (
                      <Link
                        href={service.externalLink}
                        className="px-3 py-1.5 rounded-lg bg-doc-ink text-white font-bold text-[10px] hover:bg-doc-ink/90 transition flex items-center gap-1"
                      >
                        <span>VIEW</span>
                        <ArrowRight className="w-3 h-3 text-doc-brass" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Informational Guidance Section */}
        <section className="bg-doc-paper dark:bg-doc-dark-card border-2 border-doc-brass/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-seal" />
            <h2 className="font-serif font-extrabold text-xl sm:text-2xl text-doc-ink dark:text-white">
              {t('How Application Tracking Works in Pakistan', 'پاکستان میں ٹریکنگ کیسے کام کرتی ہے؟', 'Pakistan Mein Application Tracking Kaise Kaam Karti Hai?')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div className="space-y-2 p-4 bg-white dark:bg-doc-dark-base rounded-2xl border border-doc-brass/20">
              <span className="font-mono font-bold text-doc-seal text-xs uppercase tracking-wider block">
                STEP 01
              </span>
              <h3 className="font-serif font-bold text-doc-ink dark:text-white">
                {t('Locate Receipt Reference', 'رسید پر ٹریکنگ نمبر ڈھونڈیں', 'Receipt Par Tracking Number Dhoondhein')}
              </h3>
              <p className="leading-relaxed">
                {t(
                  'Every NADRA token, passport application slip, or loan form carries a unique reference code near the barcode.',
                  'تمام نادرا رسیدوں اور پاسپورٹ فارمز پر بارکوڈ کے قریب ٹریکنگ کوڈ موجود ہوتا ہے۔',
                  'Tamaam NADRA receipts aur passport forms par barcode ke kareeb tracking code hota hai.'
                )}
              </p>
            </div>

            <div className="space-y-2 p-4 bg-white dark:bg-doc-dark-base rounded-2xl border border-doc-brass/20">
              <span className="font-mono font-bold text-doc-seal text-xs uppercase tracking-wider block">
                STEP 02
              </span>
              <h3 className="font-serif font-bold text-doc-ink dark:text-white">
                {t('Use Direct Official Portals', 'آفیشل پورٹل پر جائیں', 'Official Portal Par Jayen')}
              </h3>
              <p className="leading-relaxed">
                {t(
                  'Always check tracking on official government servers (.gov.pk or .gop.pk) to prevent credential theft.',
                  'ہمیشہ صرف سرکاری ویب سائٹس (.gov.pk) کے ذریعے اپنا سٹیٹس چیک کریں۔',
                  'Hamesha sirf official government websites (.gov.pk) ke zariye status verify karein.'
                )}
              </p>
            </div>

            <div className="space-y-2 p-4 bg-white dark:bg-doc-dark-base rounded-2xl border border-doc-brass/20">
              <span className="font-mono font-bold text-doc-seal text-xs uppercase tracking-wider block">
                STEP 03
              </span>
              <h3 className="font-serif font-bold text-doc-ink dark:text-white">
                {t('Understand Processing Times', 'پروسیسنگ کا وقت سمجھیں', 'Processing Time Samjhein')}
              </h3>
              <p className="leading-relaxed">
                {t(
                  'Standard CNIC & Passport processing typically updates on official databases within 48 to 72 working hours.',
                  'شناختی کارڈ اور پاسپورٹ ڈیٹا بیس کا سٹیٹس عام طور پر 48 سے 72 گھنٹوں میں اپ ڈیٹ ہوتا ہے۔',
                  'CNIC aur Passport database status aam taur par 48 se 72 ghanton mein update hota hai.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Ad Placement */}
        <AdPlacementZone slotId="tracker-hub-bottom" format="horizontal" />
      </div>
    </>
  );
}
