import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, ComparisonVisual, FAQAccordionVisual, FeeTableVisual } from '@/components/visuals';
import {
  Sprout,
  CreditCard,
  Wheat,
  ShieldCheck,
  AlertTriangle,
  Send,
  ExternalLink,
  CheckCircle2,
  Clock,
  Building2,
  FileCheck2,
  Sparkles,
  HelpCircle,
  BellRing,
  Info,
  Check,
  XCircle,
  Landmark,
  Coins,
  Tractor,
  PhoneCall,
  UserCheck,
  Scale
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'CM Punjab Kisan Card 2026: 8070 SMS Apply, Eligibility & Rs. 150,000 Loan',
  description:
    'Complete verified guide to Chief Minister Punjab Kisan Card 2026: Apply via 8070 SMS (PKC format), official portal agripunjab.gov.pk, Rs. 150,000 interest-free loan for fertilizer and seeds, 1 to 12.5 acres eligibility, BOP biometric collection & PITB scam alert.',
  keywords: [
    'cm punjab kisan card apply 2026',
    '8070 kisan card apply online',
    'kisan card 8070 sms registration format',
    'punjab kisan card eligibility criteria 12.5 acres',
    'bank of punjab kisan card loan 150000',
    'kisan card check status online',
    'difference between kisan card and asaan karobar card',
    'how to spot fake kisan card websites',
    'agripunjab gov pk kisan card',
  ],
  openGraph: {
    title: 'CM Punjab Kisan Card 2026: 8070 SMS Apply, Eligibility & Rs. 150,000 Loan',
    description:
      'Official verified guide to CM Maryam Nawaz Kisan Card: Rs. 150,000 interest-free agriculture financing via 8070 SMS and Bank of Punjab. Land limits, fertilizer subsidies & scam protection.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/loans/cm-punjab-kisan-card-apply-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/loans/cm-punjab-kisan-card-apply-2026',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com/' },
        { '@type': 'ListItem', position: 2, name: 'Govt Loans & Subsidies', item: 'https://www.pakistaninfohub.com/loans' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'CM Punjab Kisan Card 2026',
          item: 'https://www.pakistaninfohub.com/loans/cm-punjab-kisan-card-apply-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'CM Punjab Kisan Card 2026: 8070 SMS Apply, Eligibility & Rs. 150,000 Loan',
      description:
        'Authoritative agricultural finance guide explaining how small and medium farmers across Punjab can apply for Rs. 150,000 interest-free crop loans and input subsidies via 8070 SMS, PLRA land verification, and Bank of Punjab card issuance.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-16',
      dateModified: '2026-09-16',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/loans/cm-punjab-kisan-card-apply-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Apply for CM Punjab Kisan Card via 8070 SMS',
      description:
        'Official 5-step registration and collection process for Punjab farmers using 8070 SMS shortcode and Bank of Punjab biometric counters.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Confirm Land Records with PLRA',
          text: 'Verify that your agricultural landholding (1 to 12.5 acres) is registered under your own CNIC in the computerised Punjab Land Records Authority (PLRA) database and that your SIM card is registered to your CNIC.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Send Application SMS to 8070',
          text: 'From your registered SIM, text: PKC [Space] [13-digit CNIC without dashes] to 8070. For example: PKC 3520112345671 to 8070.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Automated Land & Credit Scrutiny',
          text: 'The Agriculture Department cross-checks land records with PLRA and checks your credit history (e-CIB) with the Bank of Punjab to ensure no bank default exists.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Receive Approval SMS & Visit BOP / Tehsil Center',
          text: 'Upon clearance, you will receive an SMS confirmation instructing you to visit your designated Bank of Punjab (BOP) branch or Tehsil Agriculture Office with your original CNIC.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Biometric Verification & Card Activation',
          text: 'Complete on-spot biometric verification, collect your chip-enabled Kisan Card, and utilize the interest-free credit limit (Rs. 30,000/acre up to Rs. 150,000) at registered agricultural input dealers.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is 8070 and how does it work for Kisan Card?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '8070 is the official Punjab Government telecommunication SMS gateway for the Kisan Card scheme. Farmers do not need to fill lengthy online forms. Simply type PKC followed by a space and your 13-digit CNIC number (without dashes), and send it to 8070 from a mobile SIM registered in your own name.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the exact land ownership limits to qualify for Kisan Card?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Farmers owning between 1 acre and 12.5 acres of agricultural land in Punjab are eligible. The land must be officially recorded in the Punjab Land Records Authority (PLRA) computerized system under the applicant\'s own CNIC. Tenant farmers without computerised fard in their name cannot apply under the primary landholder quota.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the maximum loan limit and how is it calculated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Kisan Card provides interest-free crop production financing at Rs. 30,000 per acre, capped at a maximum of Rs. 150,000 per crop season (calculated for up to 5 acres). The loan has a 6-month repayment cycle aligned with harvest seasons (Rabi & Kharif). As long as you repay upon crop harvest, zero interest/markup is charged.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the Kisan Card the same as the Asaan Karobar Card?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No! They are completely separate schemes for different target audiences. The CM Punjab Kisan Card is strictly for agricultural farmers owning 1 to 12.5 acres of farmland to buy fertilizers, seeds, and pesticides. In contrast, the Asaan Karobar Card (akc.punjab.gov.pk) is an SME credit facility of up to PKR 10 Lakh for urban and rural retail shopkeepers, traders, and small business entrepreneurs.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I check the status of my Kisan Card application?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can check your application status by sending your CNIC to 8070 or visiting your local Tehsil Agriculture Extension Office or designated Bank of Punjab branch. Status stages include: Application Under PLRA Verification, Approved for Biometric Collection, Card Ready at BOP, or Rejected due to land record mismatch.',
          },
        },
      ],
    },
  ],
};

const kisanFinancialLedgerRows = [
  {
    serviceEn: 'Financing Limit per Acre',
    serviceUr: 'فی ایکڑ زرعی قرض کی حد',
    normal: 'Rs. 30,000 per Acre',
    urgent: 'Zero Markup / Interest-Free',
    executive: 'For Fertilizer & Certified Seeds',
    tagEn: 'Per Acre',
  },
  {
    serviceEn: 'Maximum Credit per Crop Season',
    serviceUr: 'زیادہ سے زیادہ قرض فی فصل',
    normal: 'Up to Rs. 150,000 (5 Acres Cap)',
    urgent: '100% Subsidized by Punjab Govt',
    executive: 'Seasonal Production Facility',
    tagEn: 'Max Limit',
  },
  {
    serviceEn: 'Markup / Interest Charged to Farmer',
    serviceUr: 'کسان سے وصول کیا جانے والا سود',
    normal: '0% (Completely Interest-Free)',
    urgent: 'Paid by Provincial Treasury',
    executive: 'No Bank Spread Charged',
    tagEn: '0% Interest',
  },
  {
    serviceEn: 'Repayment Tenure & Crop Cycle',
    serviceUr: 'قرض کی واپسی کی مدت',
    normal: '6 Months (Aligned with Harvest)',
    urgent: 'Rabi (Wheat) & Kharif (Cotton/Rice)',
    executive: 'Lump-Sum Post-Harvest Repayment',
    tagEn: '6-Month Cycle',
  },
  {
    serviceEn: 'Eligible Landholding Threshold',
    serviceUr: 'زرعی اراضی کی حد',
    normal: '1 Acre to 12.5 Acres',
    urgent: 'Verified via PLRA Database',
    executive: 'Small & Medium Landholders',
    tagEn: '1–12.5 Acres',
  },
  {
    serviceEn: 'Participating Financial Partner',
    serviceUr: 'شراکت دار بینک',
    normal: 'The Bank of Punjab (BOP)',
    urgent: 'Tehsil Centers & Branches',
    executive: 'Direct Biometric Issuance',
    tagEn: 'BOP Network',
  },
];

const kisanSteps = [
  {
    number: 1,
    icon: <Wheat className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Verify Land Record & SIM Ownership',
    titleUr: 'اراضی ریکارڈ اور سم کارڈ کی تصدیق',
    descEn: 'Ensure 1 to 12.5 acres of agricultural land is registered in your name in the Punjab Land Records Authority (PLRA) computer system, and your mobile SIM matches your CNIC.',
    descUr: 'پنجاب لینڈ ریکارڈ اتھارٹی (PLRA) کے کمپیوٹر میں 1 سے ساڑھے 12 ایکڑ زمین اپنے نام پر ہونے کی تصدیق کریں اور سم اپنے شناختی کارڈ پر رجسٹرڈ رکھیں۔',
    tagEn: 'Prerequisite',
    tagUr: 'بنیادی شرط',
  },
  {
    number: 2,
    icon: <Send className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Send SMS to 8070: PKC [CNIC]',
    titleUr: '8070 پر ایس ایم ایس بھیجیں: PKC [شناختی کارڈ]',
    descEn: 'From your own registered SIM card, text: PKC [Space] [13-digit CNIC without dashes] to shortcode 8070 (e.g. PKC 3520112345671).',
    descUr: 'اپنی سم سے 8070 پر میسج بھیجیں: PKC لکھ کر سپیس دیں اور بغیر ڈیش 13 ہندسوں کا شناختی کارڈ نمبر لکھیں۔',
    tagEn: 'SMS Code: 8070',
    tagUr: 'میسج کوڈ 8070',
  },
  {
    number: 3,
    icon: <FileCheck2 className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Automated Land & e-CIB Scrutiny',
    titleUr: 'اراضی اور کریڈٹ ہسٹری کی خودکار جانچ',
    descEn: 'The provincial central server automatically verifies your computerized land records with PLRA and checks your banking credit history with the Bank of Punjab.',
    descUr: 'محکمہ زراعت کا سسٹم خودکار طور پر آپ کا لینڈ ریکارڈ اور بینک آف پنجاب سے نادہندگی کی جانچ کرے گا۔',
    tagEn: 'Automated Check',
    tagUr: 'خودکار تصدیق',
  },
  {
    number: 4,
    icon: <Building2 className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Visit BOP Branch or Tehsil Center',
    titleUr: 'بینک آف پنجاب برانچ یا تحصیل سنٹر تشریف لے جائیں',
    descEn: 'Upon receiving approval SMS from 8070, visit your assigned Bank of Punjab branch or Tehsil Agriculture Extension Office with your original CNIC.',
    descUr: 'منظوری کا میسج ملنے پر اپنے اصل شناختی کارڈ کے ہمراہ نامزد بینک آف پنجاب برانچ یا تحصیل زراعت آفس جائیں۔',
    tagEn: 'Biometrics',
    tagUr: 'بائیو میٹرک',
  },
  {
    number: 5,
    icon: <CreditCard className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Receive Chip Card & Buy Subsidized Inputs',
    titleUr: 'کسان کارڈ وصول کریں اور سبسڈی پر کھاد بیج خریدیں',
    descEn: 'Complete biometric verification, collect your activated Kisan Card, and swipe at registered agro-dealers to purchase fertilizer and seeds with Rs. 150,000 zero-markup credit.',
    descUr: 'بائیو میٹرک تصدیق مکمل کر کے کسان کارڈ حاصل کریں اور رجسٹرڈ کھاد و بیج ڈیلرز سے فی ایکڑ 30 ہزار روپے بلا سود کریڈٹ استعمال کریں۔',
    tagEn: 'Card Delivery',
    tagUr: 'کارڈ کی فراہمی',
  },
];

export default function CmPunjabKisanCardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans pb-16">
        {/* Top Breadcrumb Bar */}
        <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 py-2.5 flex items-center justify-between">
            <Breadcrumbs
              items={[
                { nameEn: 'Govt Loans & Subsidies', nameUr: 'سرکاری قرضے و سبسڈی', url: '/loans' },
                {
                  nameEn: 'CM Punjab Kisan Card 2026',
                  nameUr: 'وزیراعلیٰ پنجاب کسان کارڈ 2026',
                  url: '/loans/cm-punjab-kisan-card-apply-2026',
                },
              ]}
            />
            <VerifiedBadge textEn="Verified September 16, 2026 • Live Scheme" textUr="مصدقہ 16 ستمبر 2026 • فعال سکیم" />
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 pt-6 space-y-8">
          {/* URGENT LIVE BANNER */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-700 via-green-700 to-teal-800 text-white p-4 sm:p-5 shadow-lg border border-emerald-500/40">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/10 backdrop-blur shrink-0 mt-0.5">
                  <Sprout className="w-5 h-5 text-amber-300 animate-bounce" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950/70 text-emerald-200 text-[10px] font-mono font-extrabold uppercase tracking-wider">
                      AGRICULTURE DEPARTMENT PUNJAB • 2026
                    </span>
                    <span className="text-xs text-emerald-100 font-medium">BOP Partnership</span>
                  </div>
                  <p className="text-sm sm:text-base font-bold text-white mt-1 leading-snug">
                    Rs. 150,000 Interest-Free Production Loans via SMS 8070
                  </p>
                  <p className="text-xs text-emerald-100 mt-0.5 font-sans">
                    Targeting small &amp; medium farmers (1 to 12.5 acres). Subsidized DAP, Urea &amp; certified seeds with zero bank markup.
                  </p>
                </div>
              </div>
              <a
                href="#sms-registration-method"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-emerald-950 font-bold text-xs sm:text-sm hover:bg-emerald-50 transition shadow-md shrink-0 self-stretch sm:self-auto justify-center"
              >
                <span>SMS 8070 Format Below</span>
                <Send className="w-3.5 h-3.5 text-emerald-800" />
              </a>
            </div>
          </div>

          {/* CRITICAL SECURITY & SCAM PROTECTION (TOP PRIORITY) */}
          <section className="p-5 sm:p-6 rounded-3xl bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-300 dark:border-rose-800 space-y-3">
            <div className="flex items-center gap-2 text-rose-800 dark:text-rose-300 font-serif font-extrabold text-lg sm:text-xl">
              <AlertTriangle className="w-6 h-6 text-rose-600 dark:text-rose-400 shrink-0" />
              <h2>Urgent Alert: Beware of Fake 8070 Registration Websites &amp; Agents</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              The Punjab Information Technology Board (PITB) and Agriculture Department have warned farmers about fake websites and fraudulent social media callers pretending to offer &quot;instant online Kisan Card approval&quot;. Protect your CNIC and biometric data:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs font-sans">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900 space-y-1">
                <strong className="text-rose-700 dark:text-rose-400 block font-bold">Only SMS 8070 Is Official</strong>
                <p className="text-slate-600 dark:text-slate-300">Registration is done strictly by SMS to shortcode 8070 or directly at your local government Tehsil Agriculture Office. Never submit CNIC on third-party blogs.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900 space-y-1">
                <strong className="text-rose-700 dark:text-rose-400 block font-bold">Zero Registration Fee</strong>
                <p className="text-slate-600 dark:text-slate-300">Applying via 8070 costs only normal telco SMS charges (approx. Rs. 1). There is NO registration or agent scrutiny fee. Never send JazzCash to middle-men.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900 space-y-1">
                <strong className="text-rose-700 dark:text-rose-400 block font-bold">In-Person Biometrics Only</strong>
                <p className="text-slate-600 dark:text-slate-300">Biometric fingerprint verification is conducted strictly inside Bank of Punjab branches or official Tehsil centers. Never give your thumb impression to roaming private agents.</p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-rose-200 dark:border-rose-900 flex items-center justify-between gap-3 text-xs">
              <span className="text-slate-700 dark:text-slate-300">Official Agriculture Department Helpline:</span>
              <div className="flex items-center gap-2 shrink-0 font-mono font-bold text-rose-700 dark:text-rose-400">
                <span>Toll-Free: 0800-17000</span>
                <span>•</span>
                <span>BOP: 042-111-333-267</span>
              </div>
            </div>
          </section>

          {/* Header Section */}
          <header className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold tracking-wide">
              <Sprout className="w-3.5 h-3.5" />
              <span>PUNJAB FARMER WELFARE INITIATIVE • RS. 150,000 ZERO-MARKUP FACILITY</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-doc-ink dark:text-white tracking-tight leading-tight">
              CM Punjab Kisan Card 2026: 8070 SMS Apply, Eligibility &amp; Rs. 150,000 Loan
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              The verified, independent public guide to Chief Minister Maryam Nawaz&apos;s Kisan Card initiative for farmers across Punjab. Learn how to apply via official SMS shortcode <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs font-mono text-doc-seal dark:text-amber-400 font-bold">8070</code>, verify land records with the Punjab Land Records Authority (PLRA), obtain Rs. 30,000/acre (up to Rs. 150,000) interest-free financing for fertilizers and seeds, and check your approval status.
            </p>
          </header>

          {/* Direct Answer Box */}
          <DirectAnswerBox
            topicTitleEn="Direct Answer: CM Punjab Kisan Card (2026)"
            topicTitleUr="خلاصہ: وزیراعلیٰ پنجاب کسان کارڈ 2026"
            answerEn="The CM Punjab Kisan Card provides small and medium farmers owning 1 to 12.5 acres of agricultural land with interest-free production loans of Rs. 30,000 per acre (up to Rs. 150,000 per crop season for up to 5 acres). Managed jointly with the Bank of Punjab (BOP), the card enables digital subsidized purchases of DAP, Urea, certified seeds, and pesticides. To apply, text PKC [Space] [CNIC without dashes] to 8070 from a SIM registered in your own name. After automated PLRA land verification, collect your card with biometric verification at designated BOP branches."
            answerUr="وزیراعلیٰ پنجاب کسان کارڈ 1 سے ساڑھے 12 ایکڑ اراضی کے مالک کسانوں کو فی ایکڑ 30,000 روپے (زیادہ سے زیادہ 150,000 روپے فی فصل) بلا سود زرعی قرضہ فراہم کرتا ہے۔ یہ منصوبہ بینک آف پنجاب کے تعاون سے ڈی اے پی، یوریا، بیج اور زرعی ادویات کی خریداری کے لیے ہے۔ اپلائی کرنے کے لیے اپنی سم سے 8070 پر میسج بھیجیں: PKC [سپیس] [شناختی کارڈ بغیر ڈیش]۔ پی ایل آر اے لینڈ ریکارڈ کی تصدیق کے بعد بینک آف پنجاب سے بائیو میٹرک کے ذریعے کارڈ جاری ہوتا ہے۔"
          />

          {/* Core Financial Ledger Table */}
          <FeeTableVisual
            titleEn="Official Kisan Card Financing Terms &amp; Production Ledger (2026)"
            titleUr="کسان کارڈ کے مصدقہ مالیاتی ضوابط اور قرض کی حدود 2026"
            subtitleEn="Confirmed per-acre financing, maximum seasonal ceiling, repayment timeline, and bank markup subsidy"
            subtitleUr="فی ایکڑ قرض کی رقم، زیادہ سے زیادہ حد، 6 ماہ کی مدت اور حکومت پنجاب کی مکمل سبسڈی"
            rows={kisanFinancialLedgerRows}
            noteEn="Important: The Kisan Card loan is 100% interest-free provided the principal is repaid upon crop harvest within the 6-month seasonal cycle. Loans not repaid within 6 months may accrue standard commercial bank markup."
            noteUr="اہم نوٹ: فصل کی کٹائی کے بعد 6 ماہ کے اندر اصل رقم کی بروقت واپسی پر کوئی سود یا مارک اپ لاگو نہیں ہوگا۔ بروقت ادائیگی نہ کرنے کی صورت میں بینک کے عام قواعد لاگو ہو سکتے ہیں۔"
          />

          {/* SMS Registration Syntax Section */}
          <section id="sms-registration-method" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Official 8070 Gateway</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                How to Apply via SMS to Shortcode 8070 (Step-by-Step)
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                The Punjab Government eliminated paper queues by routing all initial applications through telecommunication shortcode <strong>8070</strong>:
              </p>
            </div>

            {/* Exact SMS Format Box */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-700 space-y-4 font-mono text-xs sm:text-sm">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs">Official SMS Syntax Format</span>
                <span className="text-slate-400 text-xs font-sans">Send to Shortcode: <strong className="text-white font-mono">8070</strong></span>
              </div>

              <div className="p-3 bg-black/50 rounded-xl border border-slate-700/80 text-emerald-400 select-all break-all leading-relaxed">
                PKC &lt;13_DIGIT_CNIC_WITHOUT_DASHES&gt;
              </div>

              <div className="space-y-2 text-xs font-sans text-slate-300">
                <p className="font-bold text-white">Live Example:</p>
                <p className="font-mono bg-slate-800/80 p-2.5 rounded-lg text-amber-300 border border-slate-700">
                  PKC 3520112345671
                </p>
                <p className="text-[11px] text-slate-400">
                  (Type PKC, followed by a single space, then your 13-digit CNIC without hyphens, and send to 8070).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 text-xs text-slate-300 font-sans space-y-1">
                <strong className="text-white block font-bold">Mandatory Pre-condition:</strong>
                <p>The mobile SIM sending this text MUST be registered to the same CNIC as the landholder in the Pakistan Telecommunication Authority (PTA) database. If sent from a son&apos;s, brother&apos;s, or friend&apos;s SIM, the system returns a &quot;SIM CNIC Mismatch&quot; error.</p>
              </div>
            </div>

            {/* Application Status Tracking */}
            <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 space-y-3 text-xs sm:text-sm font-sans">
              <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-300 font-bold text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                <h3>How to Check Application Status &amp; Processing Stages</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                After texting 8070, your profile advances through four standard verification stages:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/40 space-y-1">
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-[10px] font-bold">STAGE 1</span>
                  <strong className="text-doc-ink dark:text-white block font-bold text-xs">PLRA Land Verification</strong>
                  <p className="text-slate-500 text-[11px]">System cross-checks whether your CNIC holds computerized agricultural land records (1 to 12.5 acres).</p>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/40 space-y-1">
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono text-[10px] font-bold">STAGE 2</span>
                  <strong className="text-doc-ink dark:text-white block font-bold text-xs">Credit &amp; e-CIB Clearance</strong>
                  <p className="text-slate-500 text-[11px]">Bank of Punjab ensures the applicant has no active default on past agricultural loans.</p>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/40 space-y-1">
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-mono text-[10px] font-bold">STAGE 3</span>
                  <strong className="text-doc-ink dark:text-white block font-bold text-xs">Approval Notification SMS</strong>
                  <p className="text-slate-500 text-[11px]">Farmer receives an automated SMS with assigned BOP branch or Tehsil Agriculture Center.</p>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/40 space-y-1">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-bold">STAGE 4</span>
                  <strong className="text-doc-ink dark:text-white block font-bold text-xs">Biometric Card Handover</strong>
                  <p className="text-slate-500 text-[11px]">Farmer visits with original CNIC, completes fingerprint scan, and receives the activated card.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Eligibility Criteria Section */}
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Mandatory Criteria</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                Kisan Card Eligibility Checklist (Punjab)
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Confirm you meet all mandatory conditions before sending your SMS to 8070:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <Wheat className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">1. Landholding Limit (1 to 12.5 Acres)</strong>
                  <p className="text-slate-600 dark:text-slate-300">
                    Must own at least 1 acre and not more than 12.5 acres of cultivated agricultural land in Punjab province. (Farmers owning &gt;12.5 acres are deemed commercial scale and excluded).
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <FileCheck2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">2. Computerised Land Record (PLRA)</strong>
                  <p className="text-slate-600 dark:text-slate-300">
                    The land must be registered under your CNIC in the computerised Punjab Land Records Authority (PLRA) Arazi Record Center. Manual unverified patwari records cannot be verified electronically.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <UserCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">3. Valid CNIC &amp; Punjab Residence</strong>
                  <p className="text-slate-600 dark:text-slate-300">
                    Applicant must possess a valid, unexpired CNIC issued by NADRA with permanent address located inside Punjab province.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <Landmark className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">4. Clean Credit History (No Default)</strong>
                  <p className="text-slate-600 dark:text-slate-300">
                    Applicant must not be a loan defaulter of ZTBL, Bank of Punjab, or any other commercial or microfinance bank under State Bank e-CIB guidelines.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Process Steps Diagram */}
          <ProcessStepsDiagram
            badgeEn="OFFICIAL REGISTRATION & CARD ISSUANCE WORKFLOW"
            badgeUr="درخواست اور وصولی کے مراحل"
            titleEn="Step-by-Step: From 8070 SMS to Kisan Card Collection"
            titleUr="8070 ایس ایم ایس سے لے کر کسان کارڈ کے حصول تک مرحلہ وار رہنمائی"
            subtitleEn="5 verified stages: land verification, SMS dispatch, BOP approval, biometric confirmation, and input purchase"
            subtitleUr="لینڈ ریکارڈ کی تصدیق، ایس ایم ایس، بائیو میٹرک جانچ اور کھاد و بیج کے لیے کارڈ کا استعمال"
            steps={kisanSteps}
          />

          {/* KEY COMPARISON: KISAN CARD VS ASAAN KAROBAR CARD */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Clear Distinction</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                Kisan Card vs. Asaan Karobar Card: Understanding the Difference
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Many online blogs confusingly lump these two initiatives together. They are distinct schemes managed by different provincial departments with separate mandates:
              </p>
            </div>

            <ComparisonVisual
              titleEn="CM Punjab Kisan Card vs. Asaan Karobar Card"
              titleUr="وزیراعلیٰ پنجاب کسان کارڈ بمقابلہ آسان کاروبار کارڈ"
              subtitleEn="Key differences in target audience, eligibility proof, credit limits, and official channels"
              subtitleUr="مستفیدین، اہلیت کی بنیادی شرط، قرض کی رقم اور آفیشل پورٹل میں واضح فرق"
              items={[
                {
                  titleEn: "CM Punjab Kisan Card",
                  titleUr: "وزیراعلیٰ پنجاب کسان کارڈ",
                  subtitleEn: "SMS 8070 / agripunjab.gov.pk",
                  subtitleUr: "صرف پنجاب کے کاشتکاروں کے لیے",
                  badgeEn: "FARMERS ONLY",
                  badgeUr: "صرف کسانوں کے لیے",
                  badgeVariant: "emerald",
                  pointsEn: [
                    "Exclusively for agricultural landholders in Punjab owning 1 to 12.5 acres.",
                    "Rs. 30,000 per acre up to Rs. 150,000 interest-free crop production financing.",
                    "Used specifically for agricultural inputs: DAP/Urea fertilizers, seeds, and pesticides.",
                    "Primary eligibility check: Computerized land records via PLRA Arazi Record Center.",
                    "Application channel: SMS PKC [CNIC] to 8070. No fee required.",
                  ],
                  features: [
                    { labelEn: "Target Audience", valueEn: "Agricultural Farmers", isPositive: true },
                    { labelEn: "Credit Limit", valueEn: "Up to Rs. 150,000 / Crop", isPositive: true },
                    { labelEn: "Mandatory Proof", valueEn: "PLRA Land Record (1–12.5 Acres)", isPositive: true },
                    { labelEn: "Repayment Tenure", valueEn: "6 Months (Seasonal Harvest)", isPositive: null },
                    { labelEn: "Application Method", valueEn: "SMS to 8070", isPositive: true },
                  ],
                  recommendedForEn: "Agricultural growers in Punjab needing seasonal working capital for wheat, cotton, rice, and sugarcane inputs.",
                },
                {
                  titleEn: "Asaan Karobar Card (Punjab)",
                  titleUr: "آسان کاروبار کارڈ (پنجاب)",
                  subtitleEn: "akc.punjab.gov.pk",
                  subtitleUr: "صرف دکانداروں، تاجروں اور چھوٹے کاروبار کے لیے",
                  badgeEn: "SMEs & SHOPKEEPERS",
                  badgeUr: "دکاندار و تاجر",
                  badgeVariant: "brass",
                  pointsEn: [
                    "Designed for retail shopkeepers, wholesale traders, and commercial startups in Punjab.",
                    "Up to PKR 1,000,000 (10 Lakh) interest-free revolving line of credit.",
                    "Used for commercial inventory stock, vendor supplies, utility bills, and up to 25% cash.",
                    "Primary eligibility check: FBR NTN & Active Taxpayer List (ATL) compliance.",
                    "Application channel: Online portal akc.punjab.gov.pk (PKR 500 fee via 17-digit PSID).",
                  ],
                  features: [
                    { labelEn: "Target Audience", valueEn: "Shopkeepers & Urban SMEs", isPositive: true },
                    { labelEn: "Credit Limit", valueEn: "Up to PKR 10 Lakh (1 Million)", isPositive: true },
                    { labelEn: "Mandatory Proof", valueEn: "FBR Tax Filer Status (NTN)", isPositive: true },
                    { labelEn: "Repayment Tenure", valueEn: "3 Years (Revolving Line)", isPositive: true },
                    { labelEn: "Application Method", valueEn: "Online Portal akc.punjab.gov.pk", isPositive: true },
                  ],
                  recommendedForEn: "Small commercial retailers, artisans, and business entrepreneurs in Punjab needing continuous business revolving credit.",
                },
              ]}
            />
          </section>

          {/* Cross-Link Card to Asaan Karobar Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-900 to-emerald-900 text-white shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-teal-300 font-mono text-[10px] uppercase font-bold tracking-wider block">
                Looking for Small Business / Shopkeeper Loans Instead?
              </span>
              <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                Asaan Karobar Card: Up to PKR 10 Lakh Interest-Free Revolving Credit
              </h3>
              <p className="text-xs text-teal-100 max-w-xl">
                If you operate a retail shop or commercial enterprise, apply on <code className="text-white font-mono bg-teal-800/80 px-1 rounded">akc.punjab.gov.pk</code> for up to PKR 1,000,000 interest-free financing with Bank of Punjab.
              </p>
            </div>
            <Link
              href="/business/asaan-karobar-card-punjab-apply-2026"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-teal-950 font-bold text-xs hover:bg-teal-50 transition shadow shrink-0"
            >
              <span>View Asaan Karobar Guide →</span>
            </Link>
          </div>

          {/* Ad Zone */}
          <AdPlacementZone format="horizontal" />

          {/* Related Rural & Loan Resources on Pakistan Info Hub */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
              <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
                Related Agricultural &amp; Loan Utilities on Pakistan Info Hub
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link
                href="/loans/punjab-green-tractor-scheme-2026"
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
              >
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Tractor Subsidy</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  Punjab Green Tractor Scheme →
                </h3>
                <p className="text-xs text-slate-500 mt-1">Check balloting results, tractor subsidy amount, and balloting quota.</p>
              </Link>

              <Link
                href="/property/punjab-land-record-fard-verifier-2026"
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
              >
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Land Verification</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  PLRA Fard Online Verifier →
                </h3>
                <p className="text-xs text-slate-500 mt-1">Verify agricultural land ownership records and fard online.</p>
              </Link>

              <Link
                href="/loans/how-to-spot-fake-loan-scheme-scams-2026"
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
              >
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Scam Safety</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  How to Spot Fake Loan Scams →
                </h3>
                <p className="text-xs text-slate-500 mt-1">Protect against unauthorized fee agents and fake WhatsApp loan calls.</p>
              </Link>
            </div>
          </section>

          {/* FAQ Accordion Visual */}
          <FAQAccordionVisual
            titleEn="Frequently Asked Questions: CM Punjab Kisan Card 2026"
            titleUr="عام طور پر پوچھے جانے والے ضروری سوالات و جوابات"
            subtitleEn="Confirmed answers on 8070 SMS registration, land limits, fertilizer discounts, and card activation"
            subtitleUr="8070 ایس ایم ایس کا طریقہ، زمین کی حد، کھاد کی خریداری اور کسان کارڈ کے حصول کے جوابات"
            items={[
              {
                questionEn: "What is the exact 8070 SMS format to apply for Kisan Card?",
                questionUr: "کسان کارڈ کے لیے 8070 پر میسج بھیجنے کا صحیح طریقہ کیا ہے؟",
                answerEn: "From a mobile phone SIM registered under your own CNIC, open your messaging app, type 'PKC' followed by a space and your 13-digit CNIC number without hyphens (e.g., PKC 3520112345671), and send it to 8070. You will receive an immediate acknowledgment SMS from the Punjab Government.",
                answerUr: "اپنے نام کی سم سے میسج میں جائیں، انگریزی میں PKC لکھیں، ایک سپیس دیں اور بغیر ڈیش 13 ہندسوں کا شناختی کارڈ نمبر لکھیں (مثلاً PKC 3520112345671) اور 8070 پر بھیج دیں۔ آپ کو فوری تصدیقی میسج موصول ہوگا۔",
              },
              {
                questionEn: "Can a farmer with more than 12.5 acres of land qualify for Kisan Card?",
                questionUr: "کیا ساڑھے 12 ایکڑ سے زیادہ زمین کے مالک کسان بھی اہل ہیں؟",
                answerEn: "No. The Chief Minister Punjab Kisan Card is strictly targeted at small and subsistence farmers owning between 1 and 12.5 acres of agricultural land. Landholders with more than 12.5 acres are classified as large commercial farmers and do not qualify for this subsidized production loan.",
                answerUr: "بالکل نہیں۔ یہ سکیم صرف چھوٹے اور درمیانے درجے کے کاشتکاروں کے لیے ہے جن کے پاس 1 سے ساڑھے 12 ایکڑ تک اراضی ہے۔ ساڑھے 12 ایکڑ سے زائد زمین رکھنے والے بڑے زمیندار اس سبسڈی سکیم کے اہل نہیں ہیں۔",
              },
              {
                questionEn: "How is the loan disbursed and can I withdraw cash from an ATM?",
                questionUr: "قرض کیسے ملے گا اور کیا اے ٹی ایم سے کیش نکلوایا جا سکتا ہے؟",
                answerEn: "The Kisan Card is primarily designed for cashless, subsidized agricultural purchases. The credit limit (Rs. 30,000 per acre up to Rs. 150,000) is loaded onto your chip card and is redeemed by swiping at authorized agricultural dealer POS machines to purchase DAP, Urea, approved seeds, and pesticides. Direct cash withdrawal is not the primary mechanism to ensure funds are not diverted away from crops.",
                answerUr: "کسان کارڈ بنیادی طور پر فصل کی کھاد اور بیج کے لیے ہے۔ منظور شدہ رقم (فی ایکڑ 30 ہزار روپے) کارڈ پر منتقل کی جاتی ہے جسے آپ نامزد کھاد و بیج ڈیلرز کی پی او ایس مشینوں پر سوائپ کر کے استعمال کر سکتے ہیں۔ اس کا مقصد یہ یقینی بنانا ہے کہ رقم صرف زراعت پر خرچ ہو۔",
              },
              {
                questionEn: "When and how does the farmer repay the Rs. 150,000 loan?",
                questionUr: "کسان کو 150,000 روپے کا قرض کب اور کیسے واپس کرنا ہوگا؟",
                answerEn: "The loan is structured on a 6-month seasonal cycle aligned with crop harvest (e.g., after harvesting wheat in Rabi, or cotton/rice in Kharif). Farmers repay the lump-sum principal amount drawn through any Bank of Punjab branch, online banking, or designated collection centers. As long as you repay within the 6-month window, zero interest or markup is charged.",
                answerUr: "قرض کی واپسی فصل کی کٹائی کے وقت (6 ماہ بعد) یکمشت کرنا ہوتی ہے۔ کسان بینک آف پنجاب کی کسی بھی برانچ میں جا کر اصل رقم جمع کرا سکتا ہے۔ 6 ماہ کے اندر اصل رقم کی واپسی پر کوئی سود یا اضافی چارجز نہیں ہوتے۔",
              },
              {
                questionEn: "How do I know if my Kisan Card application has been approved?",
                questionUr: "کسان کارڈ کی منظوری کا پتہ کیسے چلے گا؟",
                answerEn: "Once your computerized land records are validated by PLRA and Bank of Punjab clears your credit record, an official approval SMS will be sent to your mobile phone from 8070. The message specifies your designated Bank of Punjab branch or Tehsil Agriculture Center where you must bring your original CNIC for biometric verification and card collection.",
                answerUr: "اراضی ریکارڈ اور بینک تصدیق مکمل ہوتے ہی 8070 سے آپ کے فون پر باضابطہ منظوری کا میسج آئے گا، جس میں نامزد بینک برانچ کا پتہ درج ہوگا۔ وہاں جا کر اصل شناختی کارڈ دکھا کر اور انگوٹھا لگا کر کارڈ وصول کیا جا سکتا ہے۔",
              },
            ]}
          />
        </article>
      </main>
    </>
  );
}
