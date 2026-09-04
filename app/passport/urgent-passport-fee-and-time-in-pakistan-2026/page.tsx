import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram } from '@/components/visuals';
import {
  Plane,
  Clock,
  Coins,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  FileText,
  CreditCard,
  Building,
  ArrowRight,
  AlertCircle,
  HelpCircle,
  Sparkles,
  Zap,
  Layers,
  MapPin,
  RefreshCw,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Urgent Passport Fee and Time in Pakistan 2026: Official Rates & Delivery Timelines',
  description:
    'Complete guide to urgent passport fee and time in Pakistan for 2026. Official DGIP fee tables for 36/72/100 pages, MRP vs e-Passport rates, 5-day official vs 10–15 day real-world delivery times, and cashless PSID payment.',
  keywords: [
    'urgent passport fee and time in pakistan',
    'urgent passport fee and time',
    'urgent passport fee in pakistan',
    'urgent passport time',
    'urgent passport time in pakistan',
    'urgent passport delivery time',
    'urgent passport',
    'passport urgent fee in pakistan',
    'urgent passport renewal',
    'pakistan urgent passport fee',
  ],
  openGraph: {
    title: 'Urgent Passport Fee and Time in Pakistan 2026: Official Rates & Delivery Timelines',
    description:
      'Verified 2026 DGIP fee structure for urgent MRP and e-Passports, official 5-working-day timeline vs real-world delivery backlogs, and step-by-step application instructions.',
    url: 'https://www.pakistaninfohub.com/passport/urgent-passport-fee-and-time-in-pakistan-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/passport/urgent-passport-fee-and-time-in-pakistan-2026',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Passport & Travel', item: 'https://www.pakistaninfohub.com/passport' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Urgent Passport Fee and Time Guide',
          item: 'https://www.pakistaninfohub.com/passport/urgent-passport-fee-and-time-in-pakistan-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Urgent Passport Fee and Time in Pakistan 2026: Official Rates & Real-World Delivery Timelines',
      description:
        'A comprehensive guide to Pakistani urgent passport fees, 5-working-day official processing vs real-world delays, Fast Track executive options, and cashless PSID payments under DGIP regulations.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-04',
      dateModified: '2026-09-04',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/passport/urgent-passport-fee-and-time-in-pakistan-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Apply for an Urgent Passport in Pakistan',
      description: 'The verified step-by-step procedure to apply for and receive an urgent passport under DGIP regulations.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Calculate Fee & Generate PSID',
          text: 'Use the official Passport Fee Asaan mobile app or DGIP web portal to generate your 17-digit Payment Slip Identification (PSID) selecting the Urgent delivery tier.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Pay Fee Online via 1Link or Mobile Wallet',
          text: 'Pay the exact urgent fee via JazzCash, Easypaisa, 1Link Internet Banking, or ATM before arriving at the passport office.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Visit Regional or Executive Passport Office',
          text: 'Bring your original computerized CNIC/NICOP and previous passport (if renewal) to the regional passport office or Executive Mega Centre.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Biometric Capture & Data Verification',
          text: 'Complete digital photograph capture, 10-fingerprint biometric scanning, and personal biographical data review at the service counters.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Assistant Director Interview & Token Receipt',
          text: 'Appear before the Assistant Director / Zonal Incharge for final file approval and collect your 11-digit tracking token slip.',
        },
        {
          '@type': 'HowToStep',
          position: 6,
          name: 'Track Status & Collect Passport',
          text: 'Track application progress via the DGIP portal or SMS to 9988. Collect the printed booklet from the office counter upon SMS notification.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much extra does urgent cost compared to normal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For a standard 36-page 5-year Machine Readable Passport, urgent costs PKR 7,500 compared to PKR 4,500 for normal (an extra PKR 3,000). For a 10-year 36-page passport, urgent costs PKR 11,200 compared to PKR 6,700 for normal (an extra PKR 4,500).',
          },
        },
        {
          '@type': 'Question',
          name: 'Is 5 working days guaranteed for urgent passports?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The 5-working-day timeframe published by DGIP is a target under optimal operational conditions. In practice, during high seasonal demand (Hajj/Umrah or student admissions) or centralized printing backlogs, urgent delivery commonly takes 10 to 15 working days. Never book non-refundable travel based solely on the 5-day minimum.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I upgrade from normal to urgent after applying?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Officially, once an application has been processed and submitted under the Normal category, you cannot pay the fee difference to convert the existing token to Urgent. In cases of acute humanitarian or medical emergency, applicants can petition the Assistant Director / Zonal Incharge with written proof to request administrative acceleration.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does urgent apply to renewals the same way as new passports?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The urgent fee structure, processing channels, and delivery timelines apply identically to both fresh passport applications and passport renewals (whether due to expiry, exhausted pages, or wear and tear).',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Fast Track available in my city?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Fast Track (2 working days) is available in 47 major cities across Pakistan at designated Executive Passport Offices (EPOs) and major Regional Passport Offices (RPOs), including Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, Quetta, Multan, Faisalabad, and Sialkot.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if my travel is in 3 days — do I have any option?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If your travel is within 72 hours, standard Urgent processing (5 working days) will not arrive in time. You should apply under the Fast Track service (2 working days) at the nearest Executive Passport Office early in the morning, presenting confirmed travel tickets and visa documents.',
          },
        },
      ],
    },
  ],
};

export default function UrgentPassportFeeAndTimePage() {
  const breadcrumbs = [
    { nameEn: 'Passport & Travel', nameUr: 'پاسپورٹ اور ٹریول', url: '/passport' },
    { nameEn: 'Urgent Passport Fee & Time 2026', nameUr: 'ارجنٹ پاسپورٹ فیس اور وقت 2026' },
  ];

  const urgentSteps = [
    {
      stepNumber: 1,
      titleEn: 'Generate Urgent PSID via App/Web',
      titleUr: 'پاسپورٹ فیس آسان سے PSID بنائیں',
      descEn: 'Open the official Passport Fee Asaan app or DGIP portal. Select "Urgent", validity, and pages to generate a 17-digit PSID.',
      descUr: 'پاسپورٹ فیس آسان ایپ یا ویب سائٹ کھول کر ارجنٹ کیٹیگری منتخب کریں اور 17 ہندسوں کا چالان نمبر حاصل کریں۔',
      badgeEn: 'PRE-PAYMENT REQUIRED',
      badgeUr: 'پہلے فیس ادا کریں',
    },
    {
      stepNumber: 2,
      titleEn: 'Pay Digitally (1Link, Wallets or ATM)',
      titleUr: 'آن لائن یا اے ٹی ایم سے فیس ادا کریں',
      descEn: 'Pay via JazzCash, Easypaisa, 1Link mobile banking, or any ATM. Verify fee status shows "Paid" before heading out.',
      descUr: 'جاز کیش، ایزی پیسہ، بینک ایپ یا اے ٹی ایم کے ذریعے فیس جمع کروائیں اور اسٹیٹس پیڈ ہونے کی تصدیق کریں۔',
      badgeEn: '100% CASHLESS',
      badgeUr: 'کیش لیس ادائیگی',
    },
    {
      stepNumber: 3,
      titleEn: 'Visit Regional or Executive Office',
      titleUr: 'پاسپورٹ دفتر تشریف لائیں',
      descEn: 'Arrive early at your Regional Passport Office or Executive Mega Centre with original CNIC/NICOP and old passport (if renewing).',
      descUr: 'اپنے اصل شناختی کارڈ اور پرانے پاسپورٹ (تجدید کی صورت میں) کے ساتھ صبح کے اوقات میں دفتر تشریف لائیں۔',
      badgeEn: 'ORIGINALS MANDATORY',
      badgeUr: 'اصل کاغذات لازمی',
    },
    {
      stepNumber: 4,
      titleEn: 'Biometric & Data Processing',
      titleUr: 'بائیو میٹرک اور تصویر کا مرحلہ',
      descEn: 'Undergo digital photograph capture, 10-finger biometric scanning, and biographical data verification at the counters.',
      descUr: 'تصویر، انگلیوں کے نشانات اور کوائف کی کمپیوٹر تصدیق مکمل کروائیں۔',
      badgeEn: 'BIOMETRIC COUNTER',
      badgeUr: 'بائیو میٹرک کاؤنٹر',
    },
    {
      stepNumber: 5,
      titleEn: 'Interview & Token Issuance',
      titleUr: 'اسسٹنٹ ڈائریکٹر انٹرویو و ٹوکن',
      descEn: 'Meet the Assistant Director for file review and approval. Collect your official 11-digit token tracking slip.',
      descUr: 'اسسٹنٹ ڈائریکٹر سے تصدیق کروا کر 11 ہندسوں والی ٹریکنگ سلپ حاصل کریں۔',
      badgeEn: 'OFFICIAL APPROVAL',
      badgeUr: 'سرکاری منظوری',
    },
    {
      stepNumber: 6,
      titleEn: 'Track via 9988 & Collect Passport',
      titleUr: '9988 پر ٹریک کریں اور پاسپورٹ وصول کریں',
      descEn: 'Track printing progress online or SMS token to 9988. Collect from the office or receive via dedicated courier.',
      descUr: 'آن لائن یا 9988 پر ایس ایم ایس بھیج کر اسٹیٹس دیکھیں۔ میسج موصول ہونے پر پاسپورٹ وصول کریں۔',
      badgeEn: '5-DAY TARGET',
      badgeUr: '5 کام کے دن',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="DGIP PRIORITY SERVICES" labelUr="محکمہ پاسپورٹ ترجیحی سروسز" variant="seal" />
            <VerifiedBadge textEn="2026 OFFICIAL TARIFFS" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Urgent Passport Fee and Time in Pakistan 2026: Official Rates &amp; Delivery Timelines
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پاکستان میں ارجنٹ پاسپورٹ کی سرکاری فیس اور ڈیلیوری کا اصل وقت 2026
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            A comprehensive, transparent civic guide resolving the widespread confusion around urgent passport processing in
            Pakistan: complete verified fee tables for 36, 72, and 100 pages across MRP and chip-embedded e-Passports, an honest
            examination of the official 5-working-day target versus real-world delivery backlogs (10–15 days), and mandatory cashless
            PSID payment instructions.
          </p>
        </header>

        {/* Direct Answer Box (57 words - strictly within 40-60 words requirement) */}
        <DirectAnswerBox
          topicTitleEn="What is the Urgent Passport Fee and Delivery Time in Pakistan?"
          topicTitleUr="پاکستان میں ارجنٹ پاسپورٹ کی فیس اور ڈیلیوری کا وقت کیا ہے؟"
          answerEn="The urgent passport fee in Pakistan starts at PKR 7,500 for a 36-page, 5-year Machine Readable Passport (MRP) and PKR 11,200 for 10-year validity. While the Directorate General of Immigration & Passports (DGIP) officially specifies 5 working days for urgent delivery, real-world backlogs frequently stretch delivery to 10–15 days. Never book irreversible travel on the minimum timeline."
          answerUr="پاکستان میں 36 صفحات والے 5 سالہ ارجنٹ پاسپورٹ کی فیس 7,500 روپے اور 10 سالہ پاسپورٹ کی فیس 11,200 روپے ہے۔ اگرچہ محکمہ پاسپورٹ (DGIP) کے مطابق ارجنٹ پاسپورٹ کا سرکاری وقت 5 کام کے دن ہے، لیکن عملی طور پر رش اور پرنٹنگ کی وجہ سے ڈیلیوری میں 10 سے 15 دن لگ سکتے ہیں۔"
        />

        {/* Section 1: Urgent Passport Fee in Pakistan */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Urgent Passport Fee in Pakistan (2026 Official Rate Tables)
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            The fee for an urgent passport in Pakistan is determined by three independent factors: <strong>technology type</strong> (standard
            Machine Readable Passport vs. microchip-embedded e-Passport), <strong>validity</strong> (5 years vs. 10 years), and{' '}
            <strong>page booklet size</strong> (36, 72, or 100 pages). Below is the official DGIP fee schedule:
          </p>

          {/* Table 1: Standard Machine Readable Passport (MRP) Rates */}
          <div className="space-y-2">
            <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-doc-brass" />
              1. Standard Machine Readable Passport (MRP) Fees
            </h3>

            <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="table-scroll-container">
                <table className="w-full text-sm font-sans min-w-[620px]">
                  <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                    <tr>
                      <th className="px-4 py-3 text-left">Booklet Size</th>
                      <th className="px-4 py-3 text-left">Validity</th>
                      <th className="px-4 py-3 text-left">Normal Fee</th>
                      <th className="px-4 py-3 text-left bg-doc-brass/20 text-doc-brass">Urgent Fee (Target 5 Days)</th>
                      <th className="px-4 py-3 text-left">Fast Track Fee (2 Days)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                      <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-sm" rowSpan={2}>
                        36 Pages
                      </td>
                      <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">5 Years</td>
                      <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">PKR 4,500</td>
                      <td className="px-4 py-3 font-mono font-bold text-amber-800 dark:text-amber-300 bg-amber-50/50 dark:bg-amber-950/20">
                        PKR 7,500
                      </td>
                      <td className="px-4 py-3 text-xs font-mono text-purple-700 dark:text-purple-300">PKR 12,500</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                      <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">10 Years</td>
                      <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">PKR 6,700</td>
                      <td className="px-4 py-3 font-mono font-bold text-amber-800 dark:text-amber-300 bg-amber-50/50 dark:bg-amber-950/20">
                        PKR 11,200
                      </td>
                      <td className="px-4 py-3 text-xs font-mono text-purple-700 dark:text-purple-300">PKR 16,200</td>
                    </tr>

                    <tr className="bg-slate-50/60 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                      <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-sm" rowSpan={2}>
                        72 Pages
                      </td>
                      <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">5 Years</td>
                      <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">PKR 8,200</td>
                      <td className="px-4 py-3 font-mono font-bold text-amber-800 dark:text-amber-300 bg-amber-50/50 dark:bg-amber-950/20">
                        PKR 13,500
                      </td>
                      <td className="px-4 py-3 text-xs font-mono text-purple-700 dark:text-purple-300">PKR 18,500</td>
                    </tr>
                    <tr className="bg-slate-50/60 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                      <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">10 Years</td>
                      <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">PKR 12,400</td>
                      <td className="px-4 py-3 font-mono font-bold text-amber-800 dark:text-amber-300 bg-amber-50/50 dark:bg-amber-950/20">
                        PKR 20,200
                      </td>
                      <td className="px-4 py-3 text-xs font-mono text-purple-700 dark:text-purple-300">PKR 25,200</td>
                    </tr>

                    <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                      <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-sm" rowSpan={2}>
                        100 Pages
                      </td>
                      <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">5 Years</td>
                      <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">PKR 9,000</td>
                      <td className="px-4 py-3 font-mono font-bold text-amber-800 dark:text-amber-300 bg-amber-50/50 dark:bg-amber-950/20">
                        PKR 18,000
                      </td>
                      <td className="px-4 py-3 text-xs font-mono text-purple-700 dark:text-purple-300">PKR 23,000</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                      <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">10 Years</td>
                      <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">PKR 13,500</td>
                      <td className="px-4 py-3 font-mono font-bold text-amber-800 dark:text-amber-300 bg-amber-50/50 dark:bg-amber-950/20">
                        PKR 27,000
                      </td>
                      <td className="px-4 py-3 text-xs font-mono text-purple-700 dark:text-purple-300">PKR 32,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Table 2: Microchip e-Passport Rates */}
          <div className="space-y-2 pt-2">
            <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-doc-brass" />
              2. Microchip-Embedded e-Passport Fees (Higher Security Tier)
            </h3>

            <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="table-scroll-container">
                <table className="w-full text-sm font-sans min-w-[620px]">
                  <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                    <tr>
                      <th className="px-4 py-3 text-left">e-Passport Type</th>
                      <th className="px-4 py-3 text-left">Validity</th>
                      <th className="px-4 py-3 text-left">Normal Fee</th>
                      <th className="px-4 py-3 text-left bg-doc-brass/20 text-doc-brass">Urgent Fee</th>
                      <th className="px-4 py-3 text-left">Fast Track Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                      <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-sm" rowSpan={2}>
                        36 Pages e-Passport
                      </td>
                      <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">5 Years</td>
                      <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">PKR 9,000</td>
                      <td className="px-4 py-3 font-mono font-bold text-amber-800 dark:text-amber-300 bg-amber-50/50 dark:bg-amber-950/20">
                        PKR 15,000
                      </td>
                      <td className="px-4 py-3 text-xs font-mono text-purple-700 dark:text-purple-300">PKR 20,000</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                      <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">10 Years</td>
                      <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">PKR 13,500</td>
                      <td className="px-4 py-3 font-mono font-bold text-amber-800 dark:text-amber-300 bg-amber-50/50 dark:bg-amber-950/20">
                        PKR 22,500
                      </td>
                      <td className="px-4 py-3 text-xs font-mono text-purple-700 dark:text-purple-300">PKR 27,000</td>
                    </tr>

                    <tr className="bg-slate-50/60 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                      <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-sm" rowSpan={2}>
                        72 Pages e-Passport
                      </td>
                      <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">5 Years</td>
                      <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">PKR 16,500</td>
                      <td className="px-4 py-3 font-mono font-bold text-amber-800 dark:text-amber-300 bg-amber-50/50 dark:bg-amber-950/20">
                        PKR 27,000
                      </td>
                      <td className="px-4 py-3 text-xs font-mono text-purple-700 dark:text-purple-300">PKR 32,000</td>
                    </tr>
                    <tr className="bg-slate-50/60 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                      <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">10 Years</td>
                      <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">PKR 24,750</td>
                      <td className="px-4 py-3 font-mono font-bold text-amber-800 dark:text-amber-300 bg-amber-50/50 dark:bg-amber-950/20">
                        PKR 40,500
                      </td>
                      <td className="px-4 py-3 text-xs font-mono text-purple-700 dark:text-purple-300">PKR 45,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Explanation of Fee Conflict across third-party sites */}
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 space-y-1 font-sans">
            <p className="font-bold text-slate-800 dark:text-slate-200">
              Why Do Third-Party Websites Quote Conflicting Urgent Fees?
            </p>
            <p>
              Many unofficial blogs still display obsolete fee figures from 2021–2023 (e.g. quoting PKR 5,000 for 36-page urgent MRP).
              The federal government revised passport tariffs under a statutory DGIP notification, establishing the <strong>PKR 7,500</strong> base
              for 36-page 5-year urgent MRP. Furthermore, some sites confuse standard MRP with e-Passports, which add an electronic contactless
              chip and cost exactly PKR 15,000 for 5-year urgent. Always check the exact fee on the official <em>Passport Fee Asaan</em> app
              before payment.
            </p>
          </div>
        </section>

        {/* Section 2: Urgent Passport Time - Official vs Real-World */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Urgent Passport Time in Pakistan: Official 5 Days vs. Real-World Delivery Reality
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 space-y-2 text-xs sm:text-sm font-sans">
            <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-bold text-sm sm:text-base">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
              <span>The Honesty Gap: Why You Should Never Rely on Exactly 5 Days</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Officially, the Directorate General of Immigration &amp; Passports promises urgent passports within <strong>5 working days</strong>.
              However, widespread applicant reports and independent civil audits confirm that <strong>during high-demand periods or printing paper/laminate shortages, urgent delivery routinely extends to 10 to 15 working days</strong> (2 to 3 calendar weeks).
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Crucial Travel Advice:</strong> Never book non-refundable flight tickets or schedule international visa appointments
              assuming your passport will be in hand on day 5. If your departure date is within 7 to 10 days, strongly consider applying via
              <strong> Fast Track (2 working days)</strong> at an Executive Passport Office.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-mono text-xs text-doc-brass font-bold uppercase block">Factor 1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Working Days vs. Calendar Days</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                The 5-day timeline counts only official working days. Saturdays, Sundays, gazetted public holidays, and religious breaks
                (Eid, Muharram) are excluded. A submission on Thursday afternoon will not reach day 5 until the following Thursday.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-mono text-xs text-doc-brass font-bold uppercase block">Factor 2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Centralized Printing Press Backlog</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                All Pakistani passports are printed at the central DGIP facility in Islamabad. When seasonal surges occur (Hajj/Umrah season
                or university intake deadlines), print queues bottleneck, pushing urgent printing to 10–14 days.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-mono text-xs text-doc-brass font-bold uppercase block">Factor 3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Postal Transit to Remote Districts</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                DGIP timelines measure production completion, not final delivery to your doorstep. Secure courier transit from Islamabad to
                remote regional centers (interior Sindh, southern Punjab, Balochistan, Gilgit-Baltistan) adds 2 to 4 transit days.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Normal vs Urgent vs Fast Track Matrix */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Normal vs. Urgent vs. Fast Track: Full Three-Tier Service Comparison
            </h2>
          </div>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[580px]">
                <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 text-left">Service Tier</th>
                    <th className="px-4 py-3 text-left">Official Timeline</th>
                    <th className="px-4 py-3 text-left">Real-World Delivery</th>
                    <th className="px-4 py-3 text-left">36-Pg 5-Yr Fee</th>
                    <th className="px-4 py-3 text-left">Where Available</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-sm">
                      Normal Processing
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-slate-600 dark:text-slate-300">
                      21 Working Days
                    </td>
                    <td className="px-4 py-3 font-mono text-xs font-bold text-amber-700 dark:text-amber-400">
                      30 to 60+ Days (Severe Backlogs)
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-slate-700 dark:text-slate-300">
                      PKR 4,500
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                      All RPOs &amp; District Counters
                    </td>
                  </tr>

                  <tr className="bg-amber-50/40 dark:bg-amber-950/20 hover:bg-amber-100/40 dark:hover:bg-amber-900/30 transition">
                    <td className="px-4 py-3 font-serif font-bold text-amber-900 dark:text-amber-200 text-sm">
                      Urgent Processing
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-amber-800 dark:text-amber-300">
                      05 Working Days
                    </td>
                    <td className="px-4 py-3 font-mono text-xs font-bold text-amber-800 dark:text-amber-300">
                      10 to 15 Working Days
                    </td>
                    <td className="px-4 py-3 font-mono text-xs font-bold text-amber-900 dark:text-amber-200">
                      PKR 7,500
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                      All RPOs &amp; Executive Mega Centres
                    </td>
                  </tr>

                  <tr className="bg-purple-50/40 dark:bg-purple-950/20 hover:bg-purple-100/40 dark:hover:bg-purple-900/30 transition">
                    <td className="px-4 py-3 font-serif font-bold text-purple-900 dark:text-purple-200 text-sm">
                      Fast Track (VIP)
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-purple-800 dark:text-purple-300">
                      02 Working Days
                    </td>
                    <td className="px-4 py-3 font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400">
                      2 to 4 Working Days (Prioritized)
                    </td>
                    <td className="px-4 py-3 font-mono text-xs font-bold text-purple-900 dark:text-purple-200">
                      PKR 12,500
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                      47 Designated Executive Offices Only
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4: Executive Passport Offices & Surcharges */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Building className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Executive Passport Offices (EPO): Facilities &amp; Additional Surcharges
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 font-sans text-xs sm:text-sm">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              To avoid long lines and chaotic waiting rooms at standard Regional Passport Offices, the Ministry of Interior established
              <strong> Executive Passport Offices (EPOs)</strong> and <strong>NADRA Mega Centres</strong> in major urban hubs (e.g. DHA Lahore,
              Blue Area Islamabad, Clifton Karachi, and Rawalpindi).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="font-bold text-doc-ink dark:text-white text-sm block">What Are the Advantages?</span>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  One-window fast processing (usually under 15–20 minutes from token to desk), air-conditioned lounges, digital queue management,
                  and access to Fast Track (2-day) delivery.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="font-bold text-doc-ink dark:text-white text-sm block">The Extra Surcharge (PKR 1,000 to PKR 3,000)</span>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  Applicants visiting Executive Offices must pay a separate <strong>NADRA/Executive service fee</strong> (typically PKR 1,000 to
                  PKR 3,000 depending on location) on top of the standard DGIP passport fee. This surcharge is paid at the EPO counter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: ProcessStepsDiagram - Application & Payment Flow */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <CreditCard className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step Urgent Passport Application &amp; 100% Cashless Payment
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Under DGIP&apos;s digital reform directives, <strong>cash payments at passport office windows are permanently abolished</strong>.
            Follow this verified 6-step chronological workflow to apply:
          </p>

          <ProcessStepsDiagram
            steps={urgentSteps}
            titleEn="Verified Urgent Passport Application & Payment Workflow"
            titleUr="ارجنٹ پاسپورٹ کی درخواست اور فیس ادائیگی کا مکمل طریقہ کار"
            subtitleEn="Chronological sequence from PSID digital generation to final passport collection"
            subtitleUr="آن لائن چالان بنانے سے لے کر پاسپورٹ وصولی تک کے تمام مراحل"
            badgeEn="OFFICIAL 2026 WORKFLOW"
            badgeUr="سرکاری طریقہ کار 2026"
            variant="dark"
          />
        </section>

        {/* Section 6: Urgent Passport Renewal Rules */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <RefreshCw className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Urgent Passport Renewal: Rules, Expired Passports &amp; Stolen Document Policy
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 font-sans text-xs sm:text-sm">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              If your passport has expired, is running out of blank visa pages, or is damaged, you can apply for an <strong>urgent passport renewal</strong> under
              the exact same fee and delivery structure as a new passport.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Standard Urgent Renewal Checklist</h3>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 list-disc list-inside">
                  <li>Original Computerized National Identity Card (CNIC / Smart NICOP) + 1 photocopy</li>
                  <li>Existing/expired original passport + photocopies of first 2 bio pages</li>
                  <li>Paid PSID fee receipt or confirmation SMS on mobile</li>
                  <li>Minors under 18: Father/Mother CNIC + NADRA B-Form / CRC</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 space-y-2">
                <h3 className="font-serif font-bold text-sm text-amber-900 dark:text-amber-200">Lost or Stolen Passport Penalty Rates</h3>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  If renewing a lost passport, you must present an official Police Report (FIR). DGIP imposes statutory lost penalty surcharges:
                </p>
                <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                  <li><strong>1st Time Lost:</strong> Double the standard fee (e.g. PKR 15,000 for 36-pg 5-yr urgent)</li>
                  <li><strong>2nd Time Lost:</strong> Quadruple (4x) the standard fee</li>
                  <li><strong>3rd Time Lost:</strong> Referred to DGIP Directorate for security clearance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 7: Cross-Linking to Passport Cluster */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Related Passport Guides &amp; Tools on Pakistan Info Hub
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/passport/fee-calculator"
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Interactive Tool</span>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  Passport Fee Calculator 2026 →
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Calculate exact fees for minor/adult, 36/72/100 pages across Normal, Urgent &amp; Fast Track.
                </p>
              </div>
              <span className="text-xs font-semibold text-doc-brass mt-3 inline-block">Calculate Fee →</span>
            </Link>

            <Link
              href="/passport/fee-2026"
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Official Rates</span>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  Complete Passport Fee Structure 2026 →
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Comprehensive general fee breakdown with step-by-step 1Link and PSID instructions.
                </p>
              </div>
              <span className="text-xs font-semibold text-doc-brass mt-3 inline-block">View Full Rates →</span>
            </Link>

            <Link
              href="/passport/passport-new-rules-2026-cashless-epassport"
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">New Rules</span>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  Passport New Rules 2026 →
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Cashless QR payment rules, e-Passport chips &amp; mandatory NICOP entry for overseas travellers.
                </p>
              </div>
              <span className="text-xs font-semibold text-doc-brass mt-3 inline-block">Read New Rules →</span>
            </Link>

            <Link
              href="/passport/tracking-status"
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Tracking Tool</span>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  Passport Tracking Status Tool →
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Track passport printing and regional branch delivery using your 11-digit token or SMS to 9988.
                </p>
              </div>
              <span className="text-xs font-semibold text-doc-brass mt-3 inline-block">Track Status →</span>
            </Link>
          </div>
        </section>

        {/* Section 8: Frequently Asked Questions */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Urgent Passport Fee &amp; Time)
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'How much extra does urgent cost compared to normal?',
                a: 'For a standard 36-page 5-year Machine Readable Passport, urgent costs PKR 7,500 compared to PKR 4,500 for normal (an extra PKR 3,000). For a 10-year 36-page passport, urgent costs PKR 11,200 compared to PKR 6,700 for normal (an extra PKR 4,500).',
              },
              {
                q: 'Is 5 working days guaranteed for urgent passports?',
                a: 'No. The 5-working-day timeframe published by DGIP is a target under optimal operational conditions. In practice, during high seasonal demand (Hajj/Umrah or student admissions) or centralized printing backlogs, urgent delivery commonly takes 10 to 15 working days. Never book non-refundable travel based solely on the 5-day minimum.',
              },
              {
                q: 'Can I upgrade from normal to urgent after applying?',
                a: 'Officially, once an application has been processed and submitted under the Normal category, you cannot pay the fee difference to convert the existing token to Urgent. In cases of acute humanitarian or medical emergency, applicants can petition the Assistant Director / Zonal Incharge with written proof to request administrative acceleration.',
              },
              {
                q: 'Does urgent apply to renewals the same way as new passports?',
                a: 'Yes. The urgent fee structure, processing channels, and delivery timelines apply identically to both fresh passport applications and passport renewals (whether due to expiry, exhausted pages, or wear and tear).',
              },
              {
                q: 'Is Fast Track available in my city?',
                a: 'Fast Track (2 working days) is available in 47 major cities across Pakistan at designated Executive Passport Offices (EPOs) and major Regional Passport Offices (RPOs), including Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, Quetta, Multan, Faisalabad, and Sialkot.',
              },
              {
                q: 'What if my travel is in 3 days — do I have any option?',
                a: 'If your travel is within 72 hours, standard Urgent processing (5 working days) will not arrive in time. You should apply under the Fast Track service (2 working days) at the nearest Executive Passport Office early in the morning, presenting confirmed travel tickets and visa documents.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="doc-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-doc-brass shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Official Sources Cited */}
        <section className="text-xs text-slate-500 dark:text-slate-400 font-sans space-y-2 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-300">Official Government Sources Verified:</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2">
            {[
              { label: 'Directorate General of Immigration & Passports (DGIP)', url: 'https://dgip.gov.pk/' },
              { label: 'DGIP Passport Fee Asaan Web Portal', url: 'https://onlinemrp.dgip.gov.pk/' },
              { label: 'Ministry of Interior Government of Pakistan', url: 'https://interior.gov.pk/' },
            ].map((src) => (
              <a
                key={src.url}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-doc-seal transition"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{src.label}:</span>
                <span className="font-mono underline">{src.url}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
