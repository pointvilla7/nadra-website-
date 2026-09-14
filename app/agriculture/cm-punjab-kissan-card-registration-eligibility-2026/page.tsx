import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, FAQAccordionVisual } from '@/components/visuals';
import {
  Sprout,
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Building2,
  ExternalLink,
  FileText,
  Phone,
  CreditCard,
  Tractor,
  SunMedium,
  HelpCircle,
  Clock,
  ArrowRight,
  Coins,
  Scale,
  Landmark,
  Sparkles,
  Lock,
  XCircle,
  Info,
  MapPin,
  UserCheck,
  Wheat,
  Send,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'CM Punjab Kissan Card 2026: Registration, Eligibility, 8070 SMS & BOP Guide | Pakistan Info Hub',
  description:
    'Complete verified guide to Chief Minister Punjab Kissan Card 2026. Official 8070 SMS registration, 1 to 25 acres eligibility, Rs 150,000 to Rs 300,000 interest-free loans, BOP biometric collection, and critical scam warning.',
  keywords: [
    'kissan card registration pakistan',
    'cm punjab kissan card 2026',
    'kisan card 8070 sms code',
    'kissan card bop eligibility',
    'punjab agriculture department kissan card',
    'kissan card fake status checker scam',
    'kissan card land limit 12.5 25 acres',
    'kissan card interest free loan 300000',
    'benazir hari card vs kissan card',
    'cm green tractor scheme 2026',
  ],
  openGraph: {
    title: 'CM Punjab Kissan Card 2026: Registration, Eligibility, 8070 SMS & BOP Guide',
    description:
      'Verified guide to CM Punjab Kissan Card: 8070 SMS registration, 1–25 acre land eligibility, Rs 150K–300K zero-markup loans, PLRA land verification, and protection against third-party CNIC harvesting scams.',
    url: 'https://www.pakistaninfohub.com/agriculture/cm-punjab-kissan-card-registration-eligibility-2026',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/agriculture/cm-punjab-kissan-card-registration-eligibility-2026',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Agriculture & Farmer Services',
          item: 'https://www.pakistaninfohub.com/agriculture',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'CM Punjab Kissan Card 2026',
          item: 'https://www.pakistaninfohub.com/agriculture/cm-punjab-kissan-card-registration-eligibility-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'CM Punjab Kissan Card 2026: Registration, Eligibility, 8070 SMS & BOP Guide',
      description:
        'Official framework analysis of the Chief Minister Punjab Kissan Card initiative, resolving landholding limits (1 to 25 acres), seasonal loan limits (Rs. 150,000 to Rs. 300,000), multi-agency verification, and data security warnings.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-06-15',
      dateModified: '2026-09-14',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/agriculture/cm-punjab-kissan-card-registration-eligibility-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Apply for CM Punjab Kissan Card via 8070 SMS',
      description: 'Official multi-step verification process to register for the Chief Minister Punjab Kissan Card via SMS 8070.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Verify Mobile SIM Registration',
          text: 'Ensure the mobile SIM you are using is registered biometrically in your own name and CNIC with your cellular operator.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Send Application SMS to 8070',
          text: 'Open SMS and type PKC [Space] 13-digit CNIC (without dashes or spaces, e.g. PKC 3520112345671) and send to 8070.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Automated 4-Agency Screening',
          text: 'PITB runs your CNIC through NADRA (identity), PLRA (computerized land ownership in Punjab), PMD (SIM match), and SBP eCIB (loan defaulter clearance).',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Receive Official Approval SMS',
          text: 'Successful applicants receive an approval SMS detailing the designated Bank of Punjab (BOP) branch or Agriculture Extension Center for card pickup.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Biometric Verification & Physical Card Handover',
          text: 'Visit the assigned BOP branch with your original CNIC and registered mobile phone. Complete biometric thumbprint verification to receive your chip-and-PIN Kissan Card (100% free of charge).',
        },
        {
          '@type': 'HowToStep',
          position: 6,
          name: 'Purchase Subsidized Inputs at Registered Dealers',
          text: 'Use the card at authorized fertilizer, seed, and pesticide dealer POS terminals across Punjab to access interest-free crop financing and direct subsidies.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the CM Punjab Kissan Card available to farmers outside Punjab (Sindh, KP, Balochistan)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The CM Punjab Kissan Card is strictly an initiative of the Government of Punjab, funded entirely from the Punjab provincial budget. To qualify, your agricultural land must be physically situated in Punjab and computerized under the Punjab Land Records Authority (PLRA). Farmers in Sindh must apply for the Benazir Hari Card (via Sindh Bank), while Khyber Pakhtunkhwa operates its own separate Kisan Card through the Bank of Khyber.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much land do I need to qualify: 12.5 acres or 25 acres?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both figures exist in official records because the program evolved in two phases. Phase 1 launched with a strict ceiling of up to 12.5 acres for smallholder subsistence farmers. In Phase 2, Chief Minister Maryam Nawaz Sharif officially approved expanding the ceiling up to 25 acres to include medium-scale farmers. If you own between 1 and 25 acres of computerized agricultural land in Punjab, you are eligible to apply.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I check my Kissan Card application status safely without falling for scams?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Only check your application status by sending an SMS from your registered SIM to 8070, calling the official Punjab Agriculture Helpline at 0800-17000, or visiting your local Agriculture Extension Office or Bank of Punjab branch in person. Never enter your CNIC or mobile number into third-party blogs or unofficial "status checker" widgets that display fake loading animations—these sites harvest sensitive personal data.',
          },
        },
        {
          '@type': 'Question',
          name: 'What agricultural inputs can I actually buy with the loan and subsidy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Kissan Card balance is locked exclusively to approved agricultural inputs at registered point-of-sale (POS) vendor machines. You can purchase DAP fertilizer, Urea, certified agricultural seeds (wheat, cotton, rice, maize), approved pesticides and weedicides, and seasonal farm fuel (diesel). The card cannot be used for general retail purchases or non-agricultural withdrawals.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there any registration or card issuance fee for the Kissan Card?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Registration and card issuance are 100% free of charge. Although an initial Rs. 1,000 processing fee was proposed in early working papers, the Chief Minister and Punjab Cabinet officially abolished this fee so that no financial burden falls on smallholder farmers.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if my application is rejected due to eCIB or PLRA records?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If rejected for PLRA reasons, visit your local Arazi Record Center (ARC) to confirm your land fard is fully computerized and that your CNIC is accurately linked to the land title. If rejected due to eCIB (State Bank Credit Information Bureau), you must visit the commercial bank or ZTBL branch where you have overdue loan defaults, settle the liability, and obtain a debt clearance certificate to update your credit bureau record.',
          },
        },
      ],
    },
  ],
};

export default function CmPunjabKissanCardPage() {
  const breadcrumbs = [
    { nameEn: 'Agriculture & Farmer Services', nameUr: 'زراعت اور کسان سروسز', href: '/agriculture' },
    { nameEn: 'CM Punjab Kissan Card 2026', nameUr: 'وزیر اعلیٰ پنجاب کسان کارڈ 2026' },
  ];

  // Process Steps
  const processSteps = [
    {
      stepNumber: 1,
      titleEn: 'Verify Biometric SIM Registration',
      titleUr: 'بائیو میٹرک سم کی تصدیق',
      descEn:
        'The mobile SIM used for application must be biometrically registered in your own name and CNIC. Applications sent from family members’ or retailers’ SIM cards are automatically rejected by PMD/PTA cross-checks.',
      descUr: 'درخواست کے لیے استعمال ہونے والی سم لازمی طور پر آپ کے اپنے شناختی کارڈ پر رجسٹرڈ ہونی چاہیے۔ کسی دوسرے کی سم سے بھیجی گئی درخواست مسترد ہو جاتی ہے۔',
      tagEn: 'Step 1: Mobile Pre-check',
      tagUr: 'مرحلہ 1',
    },
    {
      stepNumber: 2,
      titleEn: 'Send SMS to 8070',
      titleUr: '8070 پر ایس ایم ایس بھیجیں',
      descEn:
        'Compose a new SMS: Type PKC [space] followed by your 13-digit CNIC without hyphens or spaces (e.g., PKC 3520112345671). Send this SMS directly to the official shortcode 8070.',
      descUr: 'موبائل سے PKC لکھ کر سپیس دیں اور بغیر ڈیش کے 13 ہندسوں کا شناختی کارڈ نمبر لکھ کر 8070 پر ایس ایم ایس بھیجیں۔',
      tagEn: 'Step 2: 8070 Application',
      tagUr: 'مرحلہ 2',
    },
    {
      stepNumber: 3,
      titleEn: 'Automated 4-Tier System Screening',
      titleUr: 'خودکار حکومتی تصدیقی نظام',
      descEn:
        'PITB routes your application through a unified automated pipeline: NADRA validates identity, PLRA verifies computerized landholdings in Punjab, PMD confirms SIM ownership, and SBP eCIB verifies you are not a bank loan defaulter.',
      descUr: 'نادرا، پنجاب لینڈ ریکارڈ اتھارٹی، پی ایم ڈی اور اسٹیٹ بینک ای سی آئی بی کے ذریعے زمین کی ملکیت، سم کی تصدیق اور قرض نادہندگی کی خودکار جانچ کی جاتی ہے۔',
      tagEn: 'Step 3: Multi-Agency Check',
      tagUr: 'مرحلہ 3',
    },
    {
      stepNumber: 4,
      titleEn: 'Receive Official Approval Notification',
      titleUr: 'منظوری کا آفیشل ایس ایم ایس',
      descEn:
        'Once cleared, you receive an official confirmation SMS notifying you of your eligibility and designating your assigned Bank of Punjab (BOP) branch or Tehsil Agriculture Extension Center.',
      descUr: 'اہلیت کی منظوری کے بعد آپ کو 8070 سے کنفرمیشن میسج موصول ہو گا جس میں بینک آف پنجاب کی نامزد برانچ کا پتہ درج ہو گا۔',
      tagEn: 'Step 4: Approval SMS',
      tagUr: 'مرحلہ 4',
    },
    {
      stepNumber: 5,
      titleEn: 'Biometric Card Handover at BOP Branch',
      titleUr: 'بینک آف پنجاب سے بائیو میٹرک وصولی',
      descEn:
        'Visit your assigned Bank of Punjab branch carrying your original CNIC and registered mobile phone. Complete biometric fingerprint scanning to receive your personalized chip-and-PIN Kissan Card. Registration is 100% free (no fee).',
      descUr: 'اصل شناختی کارڈ اور موبائل فون کے ہمراہ بینک برانچ تشریف لے جائیں اور انگوٹھے کے نشان کی تصدیق کروا کر اپنا کارڈ وصول کریں۔ رجسٹریشن فیس مکمل معاف ہے۔',
      tagEn: 'Step 5: Card Collection',
      tagUr: 'مرحلہ 5',
    },
    {
      stepNumber: 6,
      titleEn: 'Input Purchase via Registered POS Dealers',
      titleUr: 'رجسٹرڈ ڈیلرز سے کھاد اور بیج کی خریداری',
      descEn:
        'Activate your card PIN and present it at authorized fertilizer, certified seed, and pesticide dealer POS terminals across Punjab. Benefit from zero-interest seasonal credit and direct government price subsidies.',
      descUr: 'کارڈ کی مدد سے نامزد زرعی ڈیلرز کی پی او ایس مشینوں پر ڈی اے پی، یوریا اور تصدیق شدہ بیج بلاسود قرضے اور حکومتی سبسڈی کے ساتھ خریدیں۔',
      tagEn: 'Step 6: Farm Input Utilization',
      tagUr: 'مرحلہ 6',
    },
  ];

  // FAQs
  const kissanCardFaqs = [
    {
      questionEn: 'Is the CM Punjab Kissan Card available to farmers outside Punjab (Sindh, KP, Balochistan)?',
      questionUr: 'کیا وزیر اعلیٰ پنجاب کسان کارڈ پنجاب سے باہر (سندھ، کے پی، بلوچستان) کے کسانوں کے لیے بھی ہے؟',
      answerEn:
        'No. The CM Punjab Kissan Card is an exclusively provincial initiative funded entirely by the Government of Punjab for lands located within Punjab province. The computerized verification system connects strictly to the Punjab Land Records Authority (PLRA). If your land is situated in Sindh, you should explore the Sindh government’s Benazir Hari Card (issued through Sindh Bank). Farmers in Khyber Pakhtunkhwa have access to the KP Kisan Card (Bank of Khyber), whereas Balochistan currently operates direct district-level subsidy distributions.',
      answerUr:
        'ہرگز نہیں۔ یہ کارڈ مکمل طور پر حکومت پنجاب کا صوبائی فلاحی منصوبہ ہے اور اس کے فنڈز صرف پنجاب کے کسانوں کے لیے مختص ہیں۔ اس کا تصدیقی نظام صرف پنجاب لینڈ ریکارڈ اتھارٹی (PLRA) سے منسلک ہے۔ سندھ کے کاشتکاروں کے لیے سندھ حکومت کا بینظیر ہاری کارڈ (سندھ بینک)، خیبر پختونخوا کے لیے کے پی کسان کارڈ (بینک آف خیبر) موجود ہے، جبکہ بلوچستان میں ضلعی سطح پر براہ راست سبسڈی تقسیم کی جاتی ہے۔',
    },
    {
      questionEn: 'How much land do I need to qualify: 12.5 acres or 25 acres?',
      questionUr: 'کسان کارڈ کے لیے کتنی زمین کا ہونا ضروری ہے: ساڑھے 12 ایکڑ یا 25 ایکڑ؟',
      answerEn:
        'Both figures appear across official news reports because the program expanded in two distinct phases. Phase 1 launched with a strict smallholder ceiling of 1 to 12.5 acres. In Phase 2, Chief Minister Maryam Nawaz Sharif and the Punjab Cabinet formally expanded eligibility up to 25 acres to bring medium-sized farmers into the safety net. Therefore, if you own anywhere between 1 and 25 acres of computerized agricultural land in Punjab, you currently qualify to apply.',
      answerUr:
        'یہ دونوں اعداد و شمار سرکاری طور پر درست ہیں کیونکہ یہ سکیم دو مرحلوں میں چلی ہے۔ پہلے مرحلے میں حد 1 سے 12.5 ایکڑ رکھی گئی تھی۔ بعد ازاں وزیر اعلیٰ مریم نواز شریف کی منظوری سے اہلیت کا دائرہ کار بڑھا کر 25 ایکڑ تک کر دیا گیا تاکہ درمیانے درجے کے کاشتکار بھی فائدہ اٹھا سکیں۔ لہٰذا 1 سے 25 ایکڑ تک اراضی رکھنے والے تمام کسان اہل ہیں۔',
    },
    {
      questionEn: 'How do I check my Kissan Card application status safely without falling for online scams?',
      questionUr: 'کسان کارڈ کا اسٹیٹس آن لائن فراڈ سے بچ کر محفوظ طریقے سے کیسے چیک کریں؟',
      answerEn:
        'The Government of Punjab does NOT operate any open third-party web tool for status checking. To verify your application status safely, send an SMS with your CNIC to 8070, call the official Punjab Agriculture Helpline toll-free at 0800-17000 (Monday to Sunday, 8:00 AM to 8:00 PM), or visit your nearest Bank of Punjab branch or Tehsil Agriculture Extension Office. Never enter your CNIC or registered phone number on third-party blogs or unofficial "status checker" portals.',
      answerUr:
        'حکومت پنجاب نے انٹرنیٹ پر عام ویب سائٹس پر اسٹیٹس چیک کرنے کا کوئی ٹول نہیں بنایا۔ اسٹیٹس کی تصدیق کے صرف 3 مصدقہ طریقے ہیں: (1) 8070 پر اپنے شناختی کارڈ کے ساتھ ایس ایم ایس بھیجیں، (2) محکمہ زراعت کی ٹول فری ہیلپ لائن 17000-0800 پر کال کریں، یا (3) بینک آف پنجاب کی قریبی برانچ یا زراعت توسیع کے دفتر تشریف لے جائیں۔ کسی نجی ویب سائٹ پر اپنا شناختی کارڈ نمبر ہرگز درج نہ کریں۔',
    },
    {
      questionEn: 'What agricultural inputs can I actually buy with the loan and subsidy?',
      questionUr: 'کسان کارڈ کے قرضے اور سبسڈی سے کون سی زرعی اشیاء خریدی جا سکتی ہیں؟',
      answerEn:
        'The Kissan Card balance is closed-loop and restricted exclusively to verified agricultural inputs at registered point-of-sale (POS) vendor dealers. You can purchase DAP fertilizer, Urea, certified agricultural seeds (wheat, cotton, paddy/rice, maize, oilseeds), approved pesticides, weedicides, and seasonal farm fuel (diesel for tractors and tube-wells). The card cannot be used for general shopping, consumer ATM withdrawals, or non-agricultural transactions.',
      answerUr:
        'کسان کارڈ کی رقم صرف نامزد زرعی ڈیلرز کے پاس لگی پی او ایس مشینوں پر ہی استعمال ہو سکتی ہے۔ اس سے آپ ڈی اے پی کھاد، یوریا، تصدیق شدہ بیج (گندم، کپاس، دھان، مکئی وغیرہ)، کیڑے مار ادویات اور زرعی ڈیزل خرید سکتے ہیں۔ یہ رقم اے ٹی ایم سے کیش نہیں نکلوائی جا سکتی اور نہ ہی کسی غیر زرعی دکان پر چلتی ہے۔',
    },
    {
      questionEn: 'Is there any registration or card issuance fee for the Kissan Card?',
      questionUr: 'کیا کسان کارڈ حاصل کرنے کی کوئی رجسٹریشن یا جاری کرنے کی فیس ہے؟',
      answerEn:
        'No. Registration, SMS submission, and card issuance are 100% free of charge. Although an initial Rs. 1,000 processing fee was proposed during early feasibility drafts, the Chief Minister and Punjab Cabinet formally abolished all charges so that zero cost is imposed on farmers.',
      answerUr:
        'بالکل نہیں۔ کسان کارڈ کی رجسٹریشن، تصدیق اور کارڈ کی وصولی مکمل طور پر مفت ہے۔ ابتدائی تجاویز میں 1,000 روپے پروسیسنگ فیس کی بات کی گئی تھی، لیکن وزیر اعلیٰ اور پنجاب کابینہ نے تمام فیسیں باقاعدہ معاف کر دی ہیں تاکہ کسانوں پر کوئی مالی بوجھ نہ پڑے۔',
    },
    {
      questionEn: 'What should I do if my application is rejected due to eCIB or PLRA records?',
      questionUr: 'اگر درخواست اراضی ریکارڈ (PLRA) یا کریڈٹ بیورو (eCIB) کی وجہ سے مسترد ہو تو کیا کریں؟',
      answerEn:
        'If rejected for PLRA reasons, visit your local Arazi Record Center (ARC) to confirm that your land ownership fard is computerized and that your CNIC is accurately attached to the land registry. If rejected due to eCIB (State Bank Credit Information Bureau), it means you have an outstanding default or overdue balance on past loans with a commercial bank or Zarai Taraqiati Bank Limited (ZTBL). You must clear your outstanding debt with the respective lending bank, obtain an official Debt Clearance Certificate (NOC), and request an eCIB credit update.',
      answerUr:
        'اگر اراضی ریکارڈ کی خرابی ہو تو اپنے قریبی اراضی ریکارڈ سینٹر (ARC) جا کر اپنی کمپیوٹرائزڈ فرد درست کروائیں اور شناختی کارڈ لنک کروائیں۔ اگر eCIB کی وجہ سے مسترد ہو تو اس کا مطلب ہے کہ کسی بینک یا زرعی ترقیاتی بینک (ZTBL) کا پرانا قرض واجب الادا ہے۔ وہ بقایا جات کلیئر کروا کر بینک سے این او سی لیں تاکہ کریڈٹ بیورو میں ریکارڈ اپ ڈیٹ ہو سکے۔',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbs} />

          {/* Header Section */}
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                <Sprout className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                PUNJAB AGRICULTURE DEPARTMENT &amp; BOP OFFICIAL
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                2026 EXPANSION TO 25 ACRES
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-doc-ink dark:text-white tracking-tight leading-tight">
              CM Punjab Kissan Card 2026: Registration, Eligibility, 8070 SMS &amp; BOP Guide
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 font-serif" dir="rtl">
              وزیر اعلیٰ پنجاب کسان کارڈ 2026: رجسٹریشن کا طریقہ، 8070 ایس ایم ایس کوڈ، اہلیت کے مصدقہ قوانین اور بینک آف پنجاب گائیڈ
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <VerifiedBadge />
              <InteractiveToolBadge />
              <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-doc-seal" />
                Updated &amp; Fact-Checked September 2026
              </span>
            </div>
          </header>

          {/* Direct Answer Box */}
          <DirectAnswerBox
            topicTitleEn="What is the CM Punjab Kissan Card and What Are Its Core Benefits in 2026?"
            topicTitleUr="وزیر اعلیٰ پنجاب کسان کارڈ کیا ہے اور اس کے بنیادی فوائد کیا ہیں؟"
            answerEn="The CM Punjab Kissan Card is an exclusively provincial agriculture initiative launched by the Punjab Agriculture Department with PITB and Bank of Punjab (BOP). It provides eligible Punjab farmers owning up to 25 acres with zero-markup seasonal crop loans up to Rs. 300,000 and direct purchase subsidies on certified seeds, DAP, and urea fertilizer through biometric POS terminals."
            answerUr="وزیر اعلیٰ پنجاب کسان کارڈ حکومت پنجاب کا زرعی فلاحی منصوبہ ہے جو محکمہ زراعت، پی آئی ٹی بی اور بینک آف پنجاب کے اشتراک سے چلایا جا رہا ہے۔ یہ پنجاب میں 25 ایکڑ تک اراضی رکھنے والے کاشتکاروں کو 3 لاکھ روپے تک کا بلاسود موسمی قرضہ اور تصدیق شدہ بیج، ڈی اے پی اور یوریا کھاد پر فوری سبسڈی فراہم کرتا ہے۔"
          />

          {/* CRITICAL SCAM WARNING BANNER */}
          <section className="doc-card p-5 sm:p-6 rounded-2xl border-2 border-red-500/60 bg-gradient-to-br from-red-50 via-white to-red-50/40 dark:from-red-950/40 dark:via-slate-900 dark:to-red-950/20 shadow-md space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-red-100 dark:bg-red-950/80 text-red-600 dark:text-red-400 shrink-0 mt-0.5 border border-red-200 dark:border-red-800">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-red-600 text-white">
                    CRITICAL SAFETY ALERT
                  </span>
                  <span className="text-xs font-mono text-red-600 dark:text-red-400 font-semibold">
                    Beware of Fake Status Checkers
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-serif font-bold text-red-900 dark:text-red-200">
                  Urgent Warning: Fake Online &ldquo;Status Checker&rdquo; Portals Harvesting Farmer CNICs
                </h2>
                <p className="text-sm text-red-800/90 dark:text-red-300 font-serif" dir="rtl">
                  اہم انتباہ: جعلی ویب سائٹس پر شناختی کارڈ نمبر اور موبائل نمبر درج مت کریں!
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-red-200 dark:border-red-900/50 space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                <strong>The Scam Pattern Discovered:</strong> Multiple fraudulent third-party blogs and fake portal clones have set up unauthorized &ldquo;Online Kissan Card Status Checkers&rdquo;. When a farmer types their 13-digit CNIC and mobile number, the site displays a staged fake loading animation (e.g. <em>&ldquo;Checking Land Records... Compiling Report 92%&rdquo;</em>), and then directs the visitor to visit a physical branch for biometric verification.
              </p>
              <div className="flex items-start gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500 text-red-900 dark:text-red-300 text-xs">
                <AlertTriangle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
                <span>
                  <strong>Why This is Dangerous:</strong> These third-party sites have zero connection with the Punjab Government, PITB, or the Bank of Punjab. They exist solely to harvest rural citizens&apos; CNICs, cell numbers, and landholding data for spam networks, SIM frauds, and illegal credit marketing.
                </span>
              </div>
              <p className="font-medium text-slate-900 dark:text-white">
                How to Protect Yourself:
              </p>
              <ul className="space-y-1.5 list-disc list-inside text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <strong>Only use official SMS 8070:</strong> Send your CNIC from your own mobile SIM to shortcode <strong>8070</strong>.
                </li>
                <li>
                  <strong>Only consult official portals:</strong> Verify announcements solely on <span className="font-mono text-emerald-700 dark:text-emerald-400 font-semibold">agripunjab.gov.pk</span> or <span className="font-mono text-emerald-700 dark:text-emerald-400 font-semibold">bop.com.pk</span>.
                </li>
                <li>
                  <strong>Call the official toll-free helpline:</strong> Speak directly to Agriculture Department representatives at <span className="font-mono font-bold text-slate-900 dark:text-white">0800-17000</span> (toll-free).
                </li>
              </ul>
            </div>
          </section>

          {/* Program Architecture & Multi-Agency Verification Pipeline */}
          <section className="doc-card p-5 sm:p-6 rounded-2xl border border-doc-brass/30 bg-gradient-to-br from-emerald-50/40 via-white to-emerald-50/20 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-950/20 shadow-sm space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 shrink-0 mt-0.5">
                <Landmark className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-serif font-bold text-doc-ink dark:text-white">
                  Program Architecture: The Unified 4-Agency Digital Pipeline
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                  The CM Punjab Kissan Card is managed by the <strong>Punjab Information Technology Board (PITB)</strong> and <strong>Punjab Agriculture Department</strong>. It integrates four separate state databases into a single automated pipeline:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold">
                  <UserCheck className="w-4 h-4" />
                  NADRA
                </div>
                <p className="text-sm font-serif font-bold text-slate-900 dark:text-white">Identity &amp; Biometrics</p>
                <p className="text-[11px] text-slate-500 leading-tight">Validates active CNIC status, citizen age, and biometric fingerprint profile.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold">
                  <FileText className="w-4 h-4" />
                  PLRA
                </div>
                <p className="text-sm font-serif font-bold text-slate-900 dark:text-white">Computerized Land Records</p>
                <p className="text-[11px] text-slate-500 leading-tight">Scans Punjab Land Records Authority database for verified agricultural acreage.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold">
                  <Phone className="w-4 h-4" />
                  PMD / PTA
                </div>
                <p className="text-sm font-serif font-bold text-slate-900 dark:text-white">SIM Ownership Match</p>
                <p className="text-[11px] text-slate-500 leading-tight">Cross-checks mobile number to confirm SIM is biometrically tied to applicant&apos;s CNIC.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold">
                  <CreditCard className="w-4 h-4" />
                  SBP eCIB &amp; BOP
                </div>
                <p className="text-sm font-serif font-bold text-slate-900 dark:text-white">Credit &amp; Card Issuance</p>
                <p className="text-[11px] text-slate-500 leading-tight">Screens against loan default watchlists; Bank of Punjab prints EMV chip card.</p>
              </div>
            </div>
          </section>

          {/* Full Eligibility Checklist (Resolved Figures) */}
          <section id="eligibility" className="doc-card p-5 sm:p-6 rounded-2xl border border-doc-brass/30 bg-white dark:bg-slate-900 shadow-sm space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="space-y-1">
                <h2 className="text-lg sm:text-xl font-serif font-bold text-doc-ink dark:text-white">
                  Official Eligibility Criteria Checklist (2026 Updated Rules)
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                  To be approved by the PITB automated pipeline, the applicant must satisfy every condition below:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-serif font-bold text-sm">
                  <Wheat className="w-4 h-4 shrink-0" />
                  1. Agricultural Land Size (1 to 25 Acres)
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  The applicant must be a registered agricultural landowner cultivating between <strong>1 acre and 25 acres</strong> of land. Phase 1 originally capped eligibility at 12.5 acres; Phase 2 officially expanded this ceiling to 25 acres.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-serif font-bold text-sm">
                  <MapPin className="w-4 h-4 shrink-0" />
                  2. Computerized Land Records in Punjab (PLRA)
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  The land must be physically located in Punjab province and entered into the <strong>Punjab Land Records Authority (PLRA)</strong> computerized database with a verified Fard Malkiat linked to your CNIC.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-serif font-bold text-sm">
                  <Phone className="w-4 h-4 shrink-0" />
                  3. Biometric SIM on Farmer&apos;s Own CNIC
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  The mobile phone number used to send the application SMS must be registered in the farmer&apos;s own name and CNIC in the Pakistan Telecommunication Authority (PTA) database.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-serif font-bold text-sm">
                  <Scale className="w-4 h-4 shrink-0" />
                  4. SBP eCIB Clean Credit History (No Default)
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  The applicant must not be a defaulter on agricultural or commercial bank loans in the State Bank of Pakistan&apos;s Electronic Credit Information Bureau (eCIB) or Zarai Taraqiati Bank Limited (ZTBL).
                </p>
              </div>
            </div>
          </section>

          {/* ProcessStepsDiagram Component */}
          <ProcessStepsDiagram
            titleEn="Step-by-Step Kissan Card Registration & Issuance Workflow"
            titleUr="کسان کارڈ رجسٹریشن اور وصولی کا باقاعدہ طریقہ کار"
            steps={processSteps}
          />

          {/* Benefits & Financial Terms Breakdown Table */}
          <section className="doc-card p-5 sm:p-6 rounded-2xl border border-doc-brass/30 bg-white dark:bg-slate-900 shadow-sm space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 shrink-0 mt-0.5">
                <Coins className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="space-y-1">
                <h2 className="text-lg sm:text-xl font-serif font-bold text-doc-ink dark:text-white">
                  Kissan Card Financial Package, Loan Limits &amp; Subsidies
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                  Detailed breakdown of loan ceilings, seasonal repayment terms, and input subsidies authorized by the Punjab Government:
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-mono text-[11px] uppercase">
                    <th className="py-3 px-4">Feature / Benefit</th>
                    <th className="py-3 px-4">Official Parameter (2026)</th>
                    <th className="py-3 px-4">Operational Guidelines</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">
                      Seasonal Loan Limit
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      Up to Rs. 150,000 – Rs. 300,000
                    </td>
                    <td className="py-3 px-4 text-xs">
                      Calculated at Rs. 30,000 to Rs. 40,000 per acre depending on crop season (Rabi vs Kharif) and acreage.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">
                      Markup / Interest Rate
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      0% (Zero Interest / Markup-Free)
                    </td>
                    <td className="py-3 px-4 text-xs">
                      The full commercial markup is 100% subsidized and paid directly to Bank of Punjab by the Punjab Government.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">
                      Repayment Tenure
                    </td>
                    <td className="py-3 px-4 font-mono">
                      6 Months (One Crop Season)
                    </td>
                    <td className="py-3 px-4 text-xs">
                      Repaid after crop harvest. Prompt repayment unlocks immediate eligibility for the next crop cycle.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">
                      Direct Subsidy Entitlement
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-doc-seal dark:text-amber-400">
                      Up to Rs. 50,000 / Season
                    </td>
                    <td className="py-3 px-4 text-xs">
                      Applied instantly at POS purchase for DAP fertilizer, Urea, certified wheat/cotton seed bags.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">
                      Permitted Purchases
                    </td>
                    <td className="py-3 px-4">
                      DAP, Urea, Certified Seeds, Pesticides, Diesel
                    </td>
                    <td className="py-3 px-4 text-xs">
                      Locked to agricultural inputs only. Non-agricultural POS terminals and general cash withdrawals are disabled.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">
                      Registration &amp; Issuance Fee
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      Rs. 0 (Free of Charge)
                    </td>
                    <td className="py-3 px-4 text-xs">
                      Initial Rs. 1,000 processing fee was officially abolished and waived by Chief Minister Maryam Nawaz.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">
                      Card Format &amp; Security
                    </td>
                    <td className="py-3 px-4">
                      EMV Chip &amp; Biometric PIN Debit Card
                    </td>
                    <td className="py-3 px-4 text-xs">
                      Issued via Bank of Punjab with personalized farmer name, CNIC, and biometric verification safeguard.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Ad Placement 1 */}
          <AdPlacementZone slotId="kissan-card-mid" format="horizontal" />

          {/* Honest Note Resolving Conflicting Online Information */}
          <section className="doc-card p-5 sm:p-6 rounded-2xl border border-doc-brass/30 bg-gradient-to-br from-amber-50/50 via-white to-amber-50/20 dark:from-slate-900 dark:via-slate-900 dark:to-amber-950/20 shadow-sm space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 shrink-0 mt-0.5">
                <Scale className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-serif font-bold text-doc-ink dark:text-white">
                  Honest Clarification: Resolving Conflicting Figures Found Across Online Sites
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                  Why do different websites quote different land sizes and loan limits? Here is the exact official background:
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5 text-xs sm:text-sm">
                  <Info className="w-4 h-4 text-emerald-600" />
                  Conflict 1: Land Holding Limit (12.5 Acres vs 25 Acres)
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Many online articles write &ldquo;maximum 12.5 acres&rdquo; because they repeat the initial Phase 1 criteria launched in early 2024. However, following extensive farmer feedback that medium-scale growers were left unprotected, the Chief Minister and Punjab Cabinet formally expanded the program ceiling to <strong>25 acres</strong> for Phase 2. Both 1–12.5 acre smallholders and 12.5–25 acre medium farmers are eligible.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5 text-xs sm:text-sm">
                  <Info className="w-4 h-4 text-emerald-600" />
                  Conflict 2: Seasonal Loan Limit (Rs. 150,000 vs Rs. 300,000)
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Phase 1 fixed the per-farmer ceiling at Rs. 150,000 (calculated at Rs. 30,000/acre for up to 5 acres). Due to steep increases in input costs (DAP prices rising above Rs. 13,000/bag and certified seed prices), the Punjab Government expanded the maximum seasonal financing ceiling up to <strong>Rs. 300,000</strong> per farmer (at Rs. 30,000–Rs. 40,000 per acre) across major cropping seasons.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5 text-xs sm:text-sm">
                  <Info className="w-4 h-4 text-emerald-600" />
                  Conflict 3: Registration Fee (Rs. 1,000 vs Free)
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Early policy documents suggested a Rs. 1,000 processing fee payable at the Bank of Punjab upon card collection. This was publicly abolished by the Chief Minister before full roll-out. If any bank staff or agent demands a card fee, report it immediately to the 0800-17000 helpline.
                </p>
              </div>
            </div>
          </section>

          {/* Provincial Schemes Breakdown: Punjab vs Sindh vs KP vs Balochistan */}
          <section className="doc-card p-5 sm:p-6 rounded-2xl border border-doc-brass/30 bg-white dark:bg-slate-900 shadow-sm space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="space-y-1">
                <h2 className="text-lg sm:text-xl font-serif font-bold text-doc-ink dark:text-white">
                  Provincial Scope: Do Other Provinces Have Equivalent Farmer Cards?
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                  The CM Kissan Card is strictly a Punjab-provincial program. If your land is outside Punjab, here is the current status in your province:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">Sindh Province</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300">Active</span>
                </div>
                <h3 className="font-serif font-bold text-sm text-slate-900 dark:text-white">Benazir Hari Card</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Issued via <strong>Sindh Bank</strong> by the Government of Sindh. Specifically targets peasant farmers and sharecroppers (haris) holding up to 12.5 acres, delivering direct cash transfers and input subsidies.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">KP Province</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300">Active</span>
                </div>
                <h3 className="font-serif font-bold text-sm text-slate-900 dark:text-white">KP Kisan Card</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Issued through the <strong>Bank of Khyber (BOK)</strong>. Registered farmers receive subsidies directly for certified seeds, fertilizers, and agricultural equipment under the KP Agriculture Extension Department.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase">Balochistan</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300">District Subsidy</span>
                </div>
                <h3 className="font-serif font-bold text-sm text-slate-900 dark:text-white">Departmental Relief Schemes</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Balochistan currently does not operate a centralized digital smart-card. Agricultural subsidies, solar tube-well conversions, and subsidized seeds are distributed directly through Deputy Commissioners and District Agriculture Offices.
                </p>
              </div>
            </div>
          </section>

          {/* Adjacent Punjab Farmer Welfare Schemes */}
          <section id="adjacent-schemes" className="doc-card p-5 sm:p-6 rounded-2xl border border-doc-brass/30 bg-white dark:bg-slate-900 shadow-sm space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 shrink-0 mt-0.5">
                <Tractor className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
              </div>
              <div className="space-y-1">
                <h2 className="text-lg sm:text-xl font-serif font-bold text-doc-ink dark:text-white">
                  Related Punjab Farmer Programs (Complementary Initiatives)
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                  The Punjab Agriculture Department operates several adjacent flagship initiatives designed to run alongside the Kissan Card:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-serif font-bold text-sm">
                  <Tractor className="w-4 h-4 text-emerald-600 shrink-0" />
                  CM Punjab Green Tractor Scheme 2026
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Provides a direct flat subsidy of <strong>Rs. 10 Lakh to Rs. 15 Lakh per tractor</strong> to farmers owning between 1 and 50 acres. Allocations are decided through transparent electronic balloting conducted by PITB.
                </p>
                <div className="pt-1">
                  <span className="inline-flex items-center text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
                    Official balloting via agri.punjab.gov.pk
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-serif font-bold text-sm">
                  <SunMedium className="w-4 h-4 text-amber-500 shrink-0" />
                  CM Solarization of Agricultural Tube-Wells
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Converts diesel and high-cost electric agricultural tube-wells to solar power. The Punjab Government covers up to <strong>67% of the solar installation cost</strong>, with the remaining 33% contributed by the beneficiary farmer.
                </p>
                <div className="pt-1">
                  <span className="inline-flex items-center text-[11px] font-mono text-amber-600 dark:text-amber-400">
                    Administered through Punjab Energy &amp; Agri Departments
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Official Helplines & Safe Verification Box */}
          <section className="doc-card p-5 sm:p-6 rounded-2xl border border-doc-brass/30 bg-gradient-to-br from-slate-900 to-navy-950 text-white shadow-lg space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-white/10 text-doc-brass shrink-0">
                <Phone className="w-5 h-5 text-amber-400" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-serif font-bold text-white">
                  Official Punjab Agriculture &amp; BOP Helplines
                </h2>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Only communicate with these verified government endpoints. No government officer will ever ask for your card PIN or bank OTP:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[11px] font-mono uppercase text-slate-400">Application Shortcode</span>
                <p className="text-xl font-mono font-bold text-amber-300">8070</p>
                <p className="text-[11px] text-slate-300">Send: PKC [CNIC] from your own SIM</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[11px] font-mono uppercase text-slate-400">Agriculture Toll-Free</span>
                <p className="text-xl font-mono font-bold text-emerald-300">0800-17000</p>
                <p className="text-[11px] text-slate-300">Free call from any phone (8 AM – 8 PM)</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[11px] font-mono uppercase text-slate-400">Bank of Punjab (BOP)</span>
                <p className="text-xl font-mono font-bold text-cyan-300">042-111-267-200</p>
                <p className="text-[11px] text-slate-300">Card activation &amp; POS transaction support</p>
              </div>
            </div>
          </section>

          {/* FAQs Component */}
          <FAQAccordionVisual
            titleEn="Frequently Asked Questions: CM Punjab Kissan Card (2026)"
            titleUr="وزیر اعلیٰ پنجاب کسان کارڈ سے متعلق عام سوالات اور مصدقہ جوابات"
            items={kissanCardFaqs}
          />

          {/* Ad Placement 2 */}
          <AdPlacementZone slotId="kissan-card-bottom" format="horizontal" />

          {/* Footer Backlink to Hub */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800">
            <Link
              href="/agriculture"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Agriculture &amp; Farmer Services Hub
            </Link>
            <div className="text-xs text-slate-500 font-mono">
              Independent Civic Information • Updated September 2026
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
