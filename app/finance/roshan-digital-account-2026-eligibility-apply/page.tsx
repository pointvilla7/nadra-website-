import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ComparisonVisual, ProcessStepsDiagram, FAQAccordionVisual } from '@/components/visuals';
import {
  Landmark,
  Globe,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ArrowRight,
  Sparkles,
  TrendingUp,
  CreditCard,
  Building2,
  Clock,
  Coins,
  FileText,
  UserCheck,
  Percent,
  RefreshCw,
  Info,
  HelpCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roshan Digital Account (RDA) 2026: SBP Rules, Eligibility & Apply | Pakistan Info Hub',
  description:
    'Complete official guide to State Bank of Pakistan Roshan Digital Account (RDA) in 2026. Pre-2026 NRP/POC eligibility vs March 2026 foreign national expansion, NPC investments, SBP 48-hr SLA, and 100% repatriation.',
  keywords: [
    'roshan digital account 2026',
    'roshan digital account eligibility',
    'roshan digital account foreign nationals march 2026',
    'how to apply roshan digital account',
    'naya pakistan certificates vs rda',
    'sbp rda 48 hours approval',
    'roshan digital account repatriation',
    'meezan rda account online apply',
    'hbl roshan digital account 2026',
    'state bank of pakistan rda portal',
  ],
  openGraph: {
    title: 'Roshan Digital Account (RDA) 2026: SBP Rules, Eligibility & Apply',
    description:
      'Verified guide to SBP Roshan Digital Account: Original NRP/POC rules vs March 2026 foreign national expansion, NPC investments, SBP 48-hour directive, and full repatriation.',
    url: 'https://www.pakistaninfohub.com/finance/roshan-digital-account-2026-eligibility-apply',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/finance/roshan-digital-account-2026-eligibility-apply',
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
          name: 'Banking & Financial Services',
          item: 'https://www.pakistaninfohub.com/finance',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Roshan Digital Account 2026',
          item: 'https://www.pakistaninfohub.com/finance/roshan-digital-account-2026-eligibility-apply',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Roshan Digital Account (RDA) 2026: SBP Rules, Eligibility & Application Guide',
      description:
        'Detailed analysis of the State Bank of Pakistan Roshan Digital Account framework, contrasting pre-2026 non-resident Pakistani eligibility against the March 2026 foreign investor expansion.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-03-20',
      dateModified: '2026-09-04',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/finance/roshan-digital-account-2026-eligibility-apply',
    },
    {
      '@type': 'HowTo',
      name: 'How to Open a Roshan Digital Account (RDA) Online',
      description: 'Step-by-step procedure to open an SBP-regulated Roshan Digital Account with a participating commercial bank.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Choose a Participating Bank',
          text: 'Select an authorized Pakistani commercial bank offering RDA services (e.g., Meezan, HBL, UBL, MCB, Allied Bank, Bank Alfalah).',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Select Account Type and Currency',
          text: 'Choose between a Foreign Currency Value Account (FCVA in USD, EUR, GBP, SAR, AED) or an NRP Rupee Value Account (NRVA in PKR), and choose Islamic or conventional banking.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Fill Digital Application & Upload Documents',
          text: 'Provide CNIC/NICOP/POC (or foreign passport for post-March 2026 categories), proof of residency (visa, work permit, Iqama), and income documentation.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Live Video Biometric KYC Verification',
          text: 'Complete live photographic or video verification through the bank digital onboarding interface.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Account Activation & Funding',
          text: 'Receive your 24-character Pakistani IBAN within 48 hours per SBP directive, then fund the account via international wire transfer.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is Naya Pakistan Certificate (NPC) the same product as a Roshan Digital Account (RDA)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. A Roshan Digital Account (RDA) is a specialized digital bank account opened with an authorized Pakistani commercial bank. Naya Pakistan Certificates (NPCs) are sovereign investment instruments issued by the Government of Pakistan that you can choose to purchase through your RDA. An RDA is the vehicle; an NPC is one optional asset held inside it.',
          },
        },
        {
          '@type': 'Question',
          name: 'I am a foreign national with no Pakistani ancestry — can I open a Roshan Digital Account now?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. In a landmark policy shift announced in mid-March 2026 by Federal Finance Minister Muhammad Aurangzeb under Prime Minister Shehbaz Sharif directives, the Government of Pakistan and SBP officially expanded RDA eligibility to include foreign nationals, foreign-registered companies, and institutional investors to invest directly in government securities and capital markets.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to visit Pakistan or an embassy to open or manage an RDA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The entire onboarding process is 100% digital from anywhere in the world. You do not need to visit a physical bank branch, Pakistani embassy, or consulate. Identity verification and document attestations are handled entirely via automated digital portals and video KYC.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I take my money back out of Pakistan whenever I want without SBP approval?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Full repatriability is the cornerstone of SBP Roshan Digital Account framework. The State Bank of Pakistan explicitly guarantees that principal deposits and profits earned through investments (including NPCs, stock market dividends, and property proceeds) can be remitted back to your overseas account anytime without requiring separate prior approval from the central bank.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which banks offer Roshan Digital Accounts and what is the minimum balance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Over 14 major commercial banks participate under SBP framework, including Meezan Bank, HBL, UBL, MCB Bank, Allied Bank, Bank Alfalah, Standard Chartered Pakistan, Faysal Bank, and Bank of Punjab. The State Bank does not mandate a minimum balance, and most major participating banks advertise zero minimum balance requirements, though individual tier rules can vary.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are students, homemakers, and unemployed overseas Pakistanis eligible to open an RDA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. SBP explicitly structured the non-resident individual eligibility criteria to cover employed professionals, self-employed workers, homemakers, full-time students abroad, minor children (under legal guardianship), pensioners, and unemployed residents abroad. Proof of residency abroad and a source of funds declaration (such as allowance or guardian support) are required.',
          },
        },
      ],
    },
  ],
};

export default function RoshanDigitalAccountPage() {
  const breadcrumbs = [
    { nameEn: 'Banking & Financial Services', nameUr: 'بینکنگ و مالیاتی سروسز', href: '/finance' },
    { nameEn: 'Roshan Digital Account 2026', nameUr: 'روشن ڈیجیٹل اکاؤنٹ 2026' },
  ];

  // Process Steps
  const processSteps = [
    {
      stepNumber: 1,
      titleEn: 'Select an SBP-Authorized Bank',
      titleUr: 'مجاز کمرشل بینک کا انتخاب',
      descEn:
        'Choose an approved Pakistani commercial bank (e.g., Meezan, HBL, UBL, MCB, ABL, Alfalah) based on your preferred currency (USD, GBP, EUR, AED, SAR, PKR) and banking mode (Islamic or Conventional).',
      descUr: 'اپنی پسند کی کرنسی اور اسلامی یا روایتی بینکنگ کے مطابق اسٹیٹ بینک سے منظور شدہ بینک کا انتخاب کریں۔',
      tagEn: 'Step 1: Selection',
      tagUr: 'مرحلہ 1',
    },
    {
      stepNumber: 2,
      titleEn: 'Select Account Type & Base Currency',
      titleUr: 'اکاؤنٹ کی قسم اور کرنسی منتخب کریں',
      descEn:
        'Select Foreign Currency Value Account (FCVA) to keep funds in foreign exchange, or NRP Rupee Value Account (NRVA) for local PKR transactions, utility bill settlements, and domestic transfers.',
      descUr: 'غیر ملکی کرنسی میں بچت کے لیے FCVA یا پاکستانی روپے میں مقامی لین دین کے لیے NRVA اکاؤنٹ چنیں۔',
      tagEn: 'Step 2: Currency',
      tagUr: 'مرحلہ 2',
    },
    {
      stepNumber: 3,
      titleEn: 'Digital KYC & Document Upload',
      titleUr: 'ڈیجیٹل کاغذات اور شناخت اپ لوڈ کریں',
      descEn:
        'Complete the bank web application form. Upload CNIC/NICOP/POC (or foreign passport for new categories), overseas proof of residence (Iqama/Visa), and income/employment verification.',
      descUr: 'شناختی کارڈ، نائیکوپ یا غیر ملکی پاسپورٹ، ویزا یا اقامہ اور آمدن کا ثبوت پورٹل پر اپ لوڈ کریں۔',
      tagEn: 'Step 3: Documents',
      tagUr: 'مرحلہ 3',
    },
    {
      stepNumber: 4,
      titleEn: 'Live Selfie & Automated Verification',
      titleUr: 'تصویر اور بائیومیٹرک تصدیق',
      descEn:
        'Capture a live facial photograph or short video check through your smartphone or webcam. The bank screens your application against NADRA and international sanctions watchlists.',
      descUr: 'کیمرے سے اپنی لائیو تصویر لیں جس کی بینک اور نادرا سسٹم سے سیکیورٹی ویریفیکیشن کی جاتی ہے۔',
      tagEn: 'Step 4: Verification',
      tagUr: 'مرحلہ 4',
    },
    {
      stepNumber: 5,
      titleEn: '48-Hour SLA Activation & Capital Deployment',
      titleUr: '48 گھنٹے میں اکاؤنٹ فعال و فنڈنگ',
      descEn:
        'Under SBP 48-hour standardized turnaround mandate, the bank sends your 24-character IBAN. Wire funds from your overseas bank to hold foreign currency, trade PSX, or buy Naya Pakistan Certificates.',
      descUr: 'اسٹیٹ بینک کی ہدایات کے تحت 48 گھنٹے میں آئی بی اے این مل جاتا ہے جس میں آپ بیرون ملک سے رقم منتقل کر سکتے ہیں۔',
      tagEn: 'Step 5: Activation',
      tagUr: 'مرحلہ 5',
    },
  ];

  // Comparison items: RDA vs NPC vs Regular Foreign Account
  const comparisonItems = [
    {
      titleEn: 'Roshan Digital Account (RDA)',
      titleUr: 'روشن ڈیجیٹل اکاؤنٹ (RDA)',
      subtitleEn: 'The Core Digital Bank Account',
      subtitleUr: 'بنیادی ڈیجیٹل بینک اکاؤنٹ',
      badgeEn: 'THE BANK ACCOUNT',
      badgeUr: 'ڈیجیٹل بینک اکاؤنٹ',
      badgeVariant: 'emerald' as const,
      pointsEn: [
        'A full-fledged commercial bank account (FCVA or NRVA) regulated by SBP',
        'Opened 100% online in under 48 hours without visiting Pakistan or an embassy',
        '100% full repatriability of principal and profits guaranteed by SBP without prior approval',
        'Enables everyday lifestyle banking: bill payments, mobile top-ups, domestic transfers',
        'Serves as the gateway to invest in PSX stocks, mutual funds, real estate, and NPCs',
      ],
      pointsUr: [
        'اسٹیٹ بینک کے تحت مکمل کمرشل بینک اکاؤنٹ (غیر ملکی کرنسی یا روپے میں)',
        'بغیر کسی برانچ یا سفارتخانے جائے 48 گھنٹے میں 100 فیصد آن لائن افتتاح',
        'بغیر کسی پیشگی اجازت کے اصل رقم اور منافع کی مکمل واپسی (Repatriation) کی ضمانت',
        'پاکستان میں بلوں کی ادائیگی اور روزمرہ بینکنگ کی تمام سہولیات',
        'اسٹاک ایکسچینج، رئیل اسٹیٹ اور نیا پاکستان سرٹیفکیٹس میں سرمایہ کاری کا گیٹ وے',
      ],
      recommendedForEn: 'Overseas Pakistanis, POC holders, and eligible international investors needing digital banking in Pakistan.',
      recommendedForUr: 'بیرون ملک مقیم پاکستانی اور غیر ملکی سرمایہ کار جو پاکستان میں محفوظ ڈیجیٹل بینکنگ چاہتے ہیں۔',
    },
    {
      titleEn: 'Naya Pakistan Certificates (NPCs)',
      titleUr: 'نیا پاکستان سرٹیفکیٹس (NPCs)',
      subtitleEn: 'An Investment Product Inside RDA',
      subtitleUr: 'اکاؤنٹ کے اندر سرمایہ کاری پراڈکٹ',
      badgeEn: 'INVESTMENT ASSET',
      badgeUr: 'سرکاری سرمایہ کاری سکیم',
      badgeVariant: 'brass' as const,
      isPopular: true,
      pointsEn: [
        'Sovereign debt security issued by the Government of Pakistan, NOT a bank account itself',
        'Can ONLY be purchased through an already-active Roshan Digital Account (RDA)',
        'Denominated in USD, PKR, EUR, GBP, SAR, and AED across 3M, 6M, 12M, 3Y, and 5Y tenors',
        'Offers attractive sovereign profit yields with periodic coupon distributions',
        'Full tax shield: final withholding tax on profit; no wealth tax or mandatory tax return filing',
      ],
      pointsUr: [
        'حکومت پاکستان کے جاری کردہ خودمختار تمسکات، یہ بذات خود کوئی بینک اکاؤنٹ نہیں ہے',
        'صرف اور صرف پہلے سے کھلے ہوئے روشن ڈیجیٹل اکاؤنٹ کے ذریعے خریدا جا سکتا ہے',
        'امریکی ڈالر، پاکستانی روپے، یورو اور پاؤنڈ میں 3 ماہ تا 5 سالہ مدت کے لیے دستیاب',
        'پرکشش اور مقررہ منافع جو براہ راست آپ کے اکاؤنٹ میں منتقل ہوتا ہے',
        'منافع پر حتمی ودہولڈنگ ٹیکس کٹوتی، پاکستان میں انکم ٹیکس گوشوارے جمع کرانے کی شرط نہیں',
      ],
      recommendedForEn: 'RDA holders looking for safe, competitive sovereign returns on USD or PKR savings.',
      recommendedForUr: 'وہ کھاتے دار جو اپنے ڈالرز یا روپے پر محفوظ اور پرکشش سرکاری منافع کمانا چاہتے ہیں۔',
    },
    {
      titleEn: 'Standard Non-Resident Account',
      titleUr: 'عام نان ریذیڈنٹ فارن کرنسی اکاؤنٹ',
      subtitleEn: 'Legacy Non-RDA Banking Model',
      subtitleUr: 'روایتی پرانا بینکنگ طریقہ',
      badgeEn: 'LEGACY ACCOUNT',
      badgeUr: 'پرانا بینک اکاؤنٹ',
      badgeVariant: 'seal' as const,
      pointsEn: [
        'Traditional foreign currency account opened before the 2020 RDA framework',
        'Frequently required physical presence in Pakistan or manual embassy document attestation',
        'Repatriation of funds strictly monitored; often required separate formal SBP approvals',
        'No direct integration with Pakistan Stock Exchange (PSX) or Naya Pakistan Certificates',
        'Lacked automated 48-hour SLA directives and specialized remote relationship desks',
      ],
      pointsUr: [
        'پرانا روایتی اکاؤنٹ جس کے لیے اکثر پاکستان میں برانچ وزٹ یا سفارتخانے کی تصدیق لازمی تھی',
        'بیرون ملک رقم واپس بھیجنے کے لیے اسٹیٹ بینک کی کڑی شرائط اور الگ اجازت نامہ درکار ہوتا تھا',
        'اسٹاک مارکیٹ یا این پی سی سرٹیفکیٹس میں براہ راست سرمایہ کاری کی کوئی سہولت نہیں تھی',
        'کوئی 48 گھنٹے کی تیز رفتار سروس نہیں اور کاغذی کارروائی بہت پیچیدہ تھی',
      ],
      recommendedForEn: 'Historical accounts that have largely been superseded by modern RDA digital infrastructure.',
      recommendedForUr: 'پرانے اکاؤنٹس جن کی جگہ اب مکمل طور پر جدید روشن ڈیجیٹل اکاؤنٹ نے لے لی ہے۔',
    },
  ];

  // FAQs
  const rdaFaqs = [
    {
      questionEn: 'Is Naya Pakistan Certificate (NPC) the same thing as a Roshan Digital Account (RDA)?',
      questionUr: 'کیا نیا پاکستان سرٹیفکیٹ اور روشن ڈیجیٹل اکاؤنٹ ایک ہی چیز ہیں؟',
      answerEn:
        'No. This is the single most common misconception online. A Roshan Digital Account (RDA) is a specialized digital bank account opened with a participating Pakistani bank. Naya Pakistan Certificates (NPCs) are sovereign investment instruments issued by the Ministry of Finance / Government of Pakistan that you can buy through your RDA. Think of RDA as the digital wallet and NPCs as one specific high-yield asset you can hold inside it.',
      answerUr:
        'ہرگز نہیں۔ یہ انٹرنیٹ پر سب سے بڑی غلط فہمی ہے۔ روشن ڈیجیٹل اکاؤنٹ ایک بینک اکاؤنٹ ہے، جبکہ نیا پاکستان سرٹیفکیٹ حکومت پاکستان کی ایک سرمایہ کاری پراڈکٹ ہے جسے آپ اپنے روشن ڈیجیٹل اکاؤنٹ کے اندر سے خریدتے ہیں۔ اکاؤنٹ گاڑی کی طرح ہے اور این پی سی اس میں رکھی ایک خاص سرمایہ کاری ہے۔',
    },
    {
      questionEn: 'I am a foreign national with no Pakistani origin or POC card — can I open an RDA now?',
      questionUr: 'میں ایک غیر ملکی شہری ہوں اور میرا پاکستانی پس منظر نہیں، کیا میں اب RDA کھول سکتا ہوں؟',
      answerEn:
        'Yes. Under the historic expansion announced in mid-March 2026 by Federal Minister for Finance Muhammad Aurangzeb upon Prime Minister Shehbaz Sharif instructions, the government formally extended RDA eligibility to foreign nationals, foreign corporations, and institutional investors. Previously restricted strictly to overseas Pakistanis and POC holders, foreign investors can now open accounts remotely to invest in government securities and capital markets.',
      answerUr:
        'جی ہاں! مارچ 2026 میں وزیر خزانہ محمد اورنگزیب کے تاریخی اعلان کے مطابق اب غیر ملکی شہریوں، غیر ملکی کمپنیوں اور بین الاقوامی سرمایہ کاروں کو بھی روشن ڈیجیٹل اکاؤنٹ کھولنے اور این پی سی میں سرمایہ کاری کی باقاعدہ اجازت دے دی گئی ہے۔ پہلے یہ صرف پاکستانیوں اور پی او سی ہولڈرز تک محدود تھا۔',
    },
    {
      questionEn: 'Do I ever need to physically visit Pakistan or an embassy to open or manage my RDA?',
      questionUr: 'کیا اکاؤنٹ کھولنے یا چلانے کے لیے کبھی پاکستان یا سفارتخانے جانا پڑے گا؟',
      answerEn:
        'Never. The entire Roshan Digital Account framework is designed by the State Bank of Pakistan to be 100% paperless and remote. Account application, document submission, facial biometric verification (video KYC), and fund transfers happen entirely through the participating bank secured web portal or mobile application from wherever you live.',
      answerUr:
        'بالکل نہیں۔ اسٹیٹ بینک آف پاکستان کا یہ پورا نظام 100 فیصد ڈیجیٹل اور پیپر لیس ہے۔ درخواست جمع کروانے سے لے کر بائیو میٹرک تصدیق اور فنڈز ٹرانسفر تک سب کچھ موبائل ایپ یا ویب پورٹل سے مکمل ہو جاتا ہے۔',
    },
    {
      questionEn: 'Can I take my money back out of Pakistan whenever I want without SBP permission?',
      questionUr: 'کیا میں اپنی رقم اور منافع بغیر کسی رکاوٹ کے واپس بیرون ملک بھیج سکتا ہوں؟',
      answerEn:
        'Yes. This is the cornerstone statutory guarantee of the SBP RDA initiative. Under SBP regulations, all balances in your Foreign Currency Value Account (FCVA) as well as disinvested funds and profits from Naya Pakistan Certificates, stock trading, or real estate can be fully repatriated back to your overseas origin bank account without seeking any special or separate approval from the State Bank of Pakistan.',
      answerUr:
        'جی ہاں، یہ روشن ڈیجیٹل اکاؤنٹ کا سب سے بڑا بنیادی فائدہ ہے۔ اسٹیٹ بینک آف پاکستان کی قانونی ضمانت کے تحت آپ اپنی اصل رقم اور کمایا گیا منافع (بشمول این پی سی، اسٹاک اور پراپرٹی کا منافع) بغیر کسی پیشگی اجازت یا این او سی کے کسی بھی وقت اپنے غیر ملکی بینک اکاؤنٹ میں واپس بھیج سکتے ہیں۔',
    },
    {
      questionEn: 'Which banks offer Roshan Digital Accounts, and is there a minimum balance requirement?',
      questionUr: 'کون سے پاکستانی بینک RDA کی سہولت دیتے ہیں اور کیا کم سے کم بیلنس رکھنا لازمی ہے؟',
      answerEn:
        'Over 14 premier commercial banks offer RDA under SBP supervision, including Meezan Bank, HBL, UBL, MCB Bank, Allied Bank Limited, Bank Alfalah, Standard Chartered Pakistan, Faysal Bank, and Bank of Punjab. The State Bank of Pakistan does not impose a mandatory minimum balance, and leading commercial banks offer zero-balance account maintenance, although individual institutional account tiers should be verified with your chosen bank.',
      answerUr:
        'پاکستان کے 14 سے زائد بڑے بینک بشمول میزان بینک، ایچ بی ایل، یو بی ایل، ایم سی بی، الائیڈ بینک اور الفلاح یہ سہولت دیتے ہیں۔ اسٹیٹ بینک کی طرف سے کوئی لازمی کم سے کم بیلنس کی شرط نہیں ہے اور زیادہ تر بینک زیرو بیلنس پر اکاؤنٹ فعال رکھتے ہیں۔',
    },
    {
      questionEn: 'What is the practical difference between an FCVA and an NRVA account?',
      questionUr: 'فارن کرنسی (FCVA) اور نان ریذیڈنٹ روپی (NRVA) اکاؤنٹ میں کیا فرق ہے؟',
      answerEn:
        'An FCVA (Foreign Currency Value Account) holds your deposits in foreign currency (such as USD, GBP, EUR, SAR, AED). It protects you against local currency exchange fluctuations and allows you to invest in foreign currency NPCs. An NRVA (NRP Rupee Value Account) holds deposits in Pakistani Rupees (PKR) and is ideal for paying utility bills in Pakistan, family expenses, domestic transfers, and investing in high-yield PKR Naya Pakistan Certificates.',
      answerUr:
        'ایف سی وی اے (FCVA) غیر ملکی کرنسی جیسے ڈالر یا پاؤنڈ میں رہتا ہے اور کرنسی کے اتار چڑھاؤ سے محفوظ رکھتا ہے۔ جبکہ این آر وی اے (NRVA) پاکستانی روپے میں ہوتا ہے جس سے آپ پاکستان میں بجلی گیس کے بل ادا کر سکتے ہیں، فیملی کو پیسے بھیج سکتے ہیں اور روپے والے این پی سی میں منافع کما سکتے ہیں۔',
    },
    {
      questionEn: 'Are overseas students, homemakers, and unemployed non-residents eligible to open an RDA?',
      questionUr: 'کیا بیرون ملک مقیم طلباء، گھریلو خواتین اور بے روزگار افراد بھی RDA کھول سکتے ہیں؟',
      answerEn:
        'Yes. SBP explicitly designed the non-resident individual eligibility criteria to be comprehensive. It covers employed individuals, self-employed professionals, homemakers, full-time students abroad, minor children (under parent or legal guardian custodianship), retirees/pensioners, and unemployed individuals abroad. Non-employed applicants provide an overseas residency permit and a declaration of their funds source (e.g., student allowance, spousal support, or savings).',
      answerUr:
        'جی ہاں! اسٹیٹ بینک نے واضح کیا ہے کہ برسرِ روزگار افراد کے علاوہ طالب علم، گھریلو خواتین، پنشنرز اور بے روزگار غیر مقیم افراد بھی اکاؤنٹ کھول سکتے ہیں۔ اس کے لیے بیرون ملک ویزا/اقامہ اور اخراجات کا اعلامیہ (جیسے شوہر یا والدین کی کفالت) درکار ہوتا ہے۔',
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
                <Globe className="w-3.5 h-3.5" />
                STATE BANK OF PAKISTAN OFFICIAL FRAMEWORK
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                <Sparkles className="w-3.5 h-3.5" />
                UPDATED WITH MARCH 2026 EXPANSION
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-doc-ink dark:text-white tracking-tight leading-tight">
              Roshan Digital Account (RDA) 2026: SBP Rules, Eligibility &amp; Apply Guide
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 font-serif" dir="rtl">
              روشن ڈیجیٹل اکاؤنٹ (RDA) 2026: اسٹیٹ بینک کے مصدقہ قوانین، اہلیت کا نیا دائرہ کار اور آن لائن اپلائی گائیڈ
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <VerifiedBadge />
              <InteractiveToolBadge />
              <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-doc-seal" />
                SBP 48-Hour SLA Mandate
              </span>
            </div>
          </header>

          {/* Direct Answer Box */}
          <DirectAnswerBox
            topicTitleEn="What is Roshan Digital Account (RDA) and Who Can Open One in 2026?"
            topicTitleUr="روشن ڈیجیٹل اکاؤنٹ کیا ہے اور 2026 میں کون کھول سکتا ہے؟"
            answerEn="Roshan Digital Account (RDA) is a State Bank of Pakistan digital banking initiative enabling overseas Pakistanis (NRPs/POC holders) and, since the landmark March 2026 expansion, foreign nationals and corporate entities to open fully repatriable bank accounts remotely in under 48 hours without visiting Pakistan. It unlocks banking, stock trading, real estate, and Naya Pakistan Certificates (NPCs)."
            answerUr="روشن ڈیجیٹل اکاؤنٹ (RDA) اسٹیٹ بینک کا ایک انقلابی ڈیجیٹل پلیٹ فارم ہے جس کے ذریعے بیرون ملک مقیم پاکستانی اور مارچ 2026 کی تاریخی توسیع کے بعد غیر ملکی شہری و کمپنیاں بغیر پاکستان آئے 48 گھنٹے میں آن لائن بینک اکاؤنٹ کھول سکتے ہیں۔ اس میں مکمل رقم واپس بھیجنے کی ضمانت، نیا پاکستان سرٹیفکیٹس اور اسٹاک مارکیٹ میں سرمایہ کاری کی سہولت شامل ہے۔"
          />

          {/* Critical Snapshot & Fact Verification Banner */}
          <section className="doc-card p-5 sm:p-6 rounded-2xl border border-doc-brass/30 bg-gradient-to-br from-amber-50/50 via-white to-amber-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-amber-950/20 shadow-sm space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-doc-brass/10 text-doc-brass shrink-0 mt-0.5">
                <Landmark className="w-5 h-5 text-doc-seal dark:text-amber-400" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base font-serif font-bold text-doc-ink dark:text-white">
                  State Bank of Pakistan (SBP) Framework &amp; Verified Growth Snapshot
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                  Launched on September 10, 2020 under the historic tagline <em>&ldquo;Door Reh Kar Bhi Paas&rdquo;</em>, RDA is not a single bank product but a unified regulatory framework run across 14+ participating commercial banks.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">Growth Milestone</span>
                <p className="text-lg font-mono font-extrabold text-doc-seal dark:text-red-400">900,000+ Accounts</p>
                <p className="text-[11px] text-slate-500 leading-tight">As of end-February 2026, per SBP &amp; Finance Ministry</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">Cumulative Inflows</span>
                <p className="text-lg font-mono font-extrabold text-emerald-600 dark:text-emerald-400">$12+ Billion USD</p>
                <p className="text-[11px] text-slate-500 leading-tight">Total foreign exchange remitted into Pakistan</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">Turnaround Standard</span>
                <p className="text-lg font-mono font-extrabold text-sky-600 dark:text-sky-400">48-Hour Directive</p>
                <p className="text-[11px] text-slate-500 leading-tight">SBP standard SLA across all authorized banks</p>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-1.5 font-sans pt-1 border-t border-slate-200 dark:border-slate-800">
              <Info className="w-3.5 h-3.5 text-doc-seal shrink-0 mt-0.5" />
              <span>
                <strong>Important Notice on Live Data:</strong> Account totals and cumulative inflows are historical snapshots reported as of end-February 2026 and continue to expand monthly. Specific account opening speeds, portal interfaces, and minimum balance policies can vary slightly across individual partner banks.
              </span>
            </div>
          </section>

          {/* TWO CLEARLY SEPARATED ELIGIBILITY SECTIONS */}
          <section className="space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
              <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white flex items-center gap-2">
                <UserCheck className="w-6 h-6 text-doc-seal" />
                Who Qualifies for a Roshan Digital Account in 2026?
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-sans mt-1">
                Understanding the critical legal distinction between the original 2020 foundation and the historic March 2026 expansion.
              </p>
            </div>

            {/* Pillar 1: Who Has Always Been Eligible */}
            <div className="doc-card p-6 rounded-2xl border-2 border-emerald-500/40 bg-emerald-50/20 dark:bg-emerald-950/10 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider">
                    Pillar 1: Original Scheme (Since 2020)
                  </span>
                  <h3 className="text-lg font-serif font-bold text-doc-ink dark:text-white">
                    Non-Resident Pakistanis (NRPs) &amp; POC Holders
                  </h3>
                </div>
                <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                  Still Active &amp; Mainstream
                </span>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                From its launch in 2020 to today, the core foundation of RDA belongs to the global Pakistani diaspora living outside Pakistan for over 182 days in a tax year. The State Bank explicitly defines eligible individuals broadly—far beyond working professionals alone:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
                  <strong className="block text-doc-ink dark:text-white font-serif text-sm">
                    Eligible Individual Categories:
                  </strong>
                  <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span><strong>Employed Professionals:</strong> Salaried expats on valid overseas work contracts.</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span><strong>Self-Employed &amp; Business Owners:</strong> Expats running trade/businesses abroad.</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span><strong>Homemakers (Spouses):</strong> Overseas wives/husbands without formal employment.</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span><strong>University Students:</strong> Students enrolled full-time in colleges/universities abroad.</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span><strong>Minors &amp; Children:</strong> Under age 18, operated by parents or legal guardians.</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span><strong>Pensioners &amp; Retirees:</strong> Living abroad on retirement income or pensions.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
                  <strong className="block text-doc-ink dark:text-white font-serif text-sm">
                    Mandatory Documentation for NRPs:
                  </strong>
                  <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-doc-seal shrink-0" />
                      <span><strong>Identity Card:</strong> Original valid CNIC, SNIC, NICOP, or POC card.</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-doc-seal shrink-0" />
                      <span><strong>Proof of Non-Resident Status:</strong> Valid Visa, Work Permit, Iqama, or foreign passport.</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-doc-seal shrink-0" />
                      <span><strong>Proof of Profession/Income:</strong> Salary slip, tax return, job contract, or student ID card.</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-doc-seal shrink-0" />
                      <span><strong>Live Photo:</strong> Web-camera selfie or biometric live video verification.</span>
                    </li>
                  </ul>
                  <p className="text-[11px] text-slate-500 pt-1">
                    *Resident Pakistanis who have declared assets held abroad with the FBR are also eligible to open an FCVA account.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2: Who Became Eligible in March 2026 */}
            <div className="doc-card p-6 rounded-2xl border-2 border-amber-500/50 bg-amber-50/20 dark:bg-amber-950/15 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 font-mono text-xs font-extrabold uppercase tracking-wider">
                    Pillar 2: March 2026 Historic Expansion
                  </span>
                  <h3 className="text-lg font-serif font-bold text-doc-ink dark:text-white">
                    Foreign Nationals, Foreign Corporates &amp; Institutional Investors
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2 py-0.5 rounded">
                  NEW CATEGORY
                </span>
              </div>

              <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                <p>
                  In mid-March 2026, Federal Minister for Finance and Revenue <strong>Senator Muhammad Aurangzeb</strong>, acting upon directives from Prime Minister Shehbaz Sharif, officially expanded the Roshan Digital Account framework to welcome <strong>foreign individual nationals and international corporate entities</strong> without requiring Pakistani origin or lineage.
                </p>
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-800/60 space-y-2">
                  <h4 className="font-serif font-bold text-sm text-doc-ink dark:text-white flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-doc-brass" />
                    What Changed in March 2026?
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span><strong>Foreign Individuals:</strong> Non-Pakistani nationals without a CNIC or POC can now open an RDA using their national foreign passports.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span><strong>Foreign Companies &amp; Corporates:</strong> Registered offshore enterprises can open business RDAs to channel foreign direct investment and trade capital.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span><strong>Institutional Investors:</strong> Foreign mutual funds, pension funds, and asset managers gain direct digital access to Pakistan sovereign securities (NPCs) and the Pakistan Stock Exchange (PSX).</span>
                    </li>
                  </ul>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  This strategic shift integrates Pakistan directly into global capital rails, providing international investors with competitive yields while safeguarding sovereign foreign exchange reserves.
                </p>
              </div>
            </div>
          </section>

          <AdPlacementZone format="horizontal" />

          {/* Comparison Visual: RDA vs NPC vs Regular Foreign Account */}
          <section className="space-y-3">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
              <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white flex items-center gap-2">
                <RefreshCw className="w-6 h-6 text-doc-brass" />
                The Big Confusion: RDA vs. Naya Pakistan Certificates (NPCs)
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-sans mt-1">
                Never conflate the account with the investment product. Here is how they actually compare side-by-side:
              </p>
            </div>

            <ComparisonVisual
              items={comparisonItems}
              titleEn="Comparing Roshan Digital Account, NPCs & Traditional Non-Resident Banking"
              titleUr="روشن ڈیجیٹل اکاؤنٹ، این پی سی اور روایتی بینکنگ کا مکمل موازنہ"
              subtitleEn="Clear separation between the digital bank account, sovereign debt investments, and legacy banking."
              subtitleUr="بینک اکاؤنٹ، سرمایہ کاری سرٹیفکیٹ اور پرانے فارن اکاؤنٹس کا واضح فرق"
            />
          </section>

          {/* SBP Full Repatriation & Tax Benefits */}
          <section className="doc-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-white space-y-4">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Statutory State Bank Guarantee</span>
            </div>
            <h2 className="text-xl font-serif font-bold text-white">
              Can You Take Your Money Back Out of Pakistan?
            </h2>
            <p className="text-sm text-slate-300 font-sans leading-relaxed">
              The single biggest fear of overseas investors and non-residents has historically been capital repatriation restrictions. SBP explicitly designed Roshan Digital Account to dismantle this barrier completely.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-sans">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-emerald-400 text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>100% Repatriation Without SBP Approval</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Principal deposits in your Foreign Currency Value Account (FCVA) and any profits earned through Naya Pakistan Certificates, stock market trading, or property sales can be wired back to your overseas account at any time without submitting separate approval requests to the central bank.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-amber-300 text-sm">
                  <Percent className="w-4 h-4 shrink-0" />
                  <span>Full Tax Shield on Deposits &amp; Profits</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Withholding tax deducted at source on NPC profit or dividends is full and final. As an RDA holder, you are <strong>not required</strong> to register with the FBR or file annual income tax returns in Pakistan merely because you maintain an RDA or hold sovereign certificates.
                </p>
              </div>
            </div>
          </section>

          {/* ProcessStepsDiagram */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
              <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-doc-seal" />
                Step-by-Step Online Application Workflow
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-sans mt-1">
                How overseas applicants and international investors complete 100% digital onboarding from anywhere in the world.
              </p>
            </div>

            <ProcessStepsDiagram
              steps={processSteps}
              titleEn="5-Stage Digital Onboarding Under SBP 48-Hour SLA"
              titleUr="اسٹیٹ بینک کے 48 گھنٹے کے ضابطے کے تحت 5 مرحلہ وار آن لائن طریقہ کار"
              subtitleEn="From bank selection and digital KYC to IBAN generation and capital deployment"
              subtitleUr="بینک کے انتخاب سے لے کر بائیو میٹرک تصدیق اور اکاؤنٹ کی بحالی تک"
              variant="paper"
            />
          </section>

          {/* Directory of Approved Participating Banks */}
          <section className="doc-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
            <h2 className="text-xl font-serif font-bold text-doc-ink dark:text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-doc-seal" />
              Which Banks Offer Roshan Digital Accounts in 2026?
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              The State Bank of Pakistan licenses premier commercial banks to manage RDA portals. While all operate under the exact same SBP statutory rules, customer experience, mobile application features, and response times across international time zones differ:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 text-xs font-mono">
              {[
                { name: 'Meezan Bank', note: 'Largest Islamic RDA provider' },
                { name: 'Habib Bank (HBL)', note: 'Extensive global network' },
                { name: 'United Bank (UBL)', note: 'Dedicated overseas support' },
                { name: 'MCB Bank', note: 'Fast digital turnaround' },
                { name: 'Allied Bank (ABL)', note: 'Zero minimum balance' },
                { name: 'Bank Alfalah', note: 'Alfa app integration' },
                { name: 'Standard Chartered', note: 'Multinational international rails' },
                { name: 'Bank of Punjab (BOP)', note: 'Public sector backing' },
                { name: 'Faysal Bank', note: 'Full Islamic onboarding' },
                { name: 'Askari Bank', note: 'Armed forces & expat desk' },
                { name: 'Dubai Islamic Bank', note: 'UAE & Gulf corridor strength' },
                { name: 'Habib Metro Bank', note: 'Trade & corporate rails' },
              ].map((bank, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1"
                >
                  <strong className="block text-doc-ink dark:text-white font-sans text-xs">{bank.name}</strong>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block">{bank.note}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans pt-1">
              <strong>Tip for Applicants:</strong> For fastest processing, ensure your registered international mobile number and email address are active and able to receive one-time passwords (OTPs).
            </p>
          </section>

          <AdPlacementZone format="horizontal" />

          {/* Essential Cross-Linking Callout Box */}
          <section className="p-5 rounded-2xl border border-doc-brass/40 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent dark:from-amber-950/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-800 dark:text-amber-300 uppercase">
                <Sparkles className="w-4 h-4 text-doc-brass" />
                <span>Next Step for RDA Holders</span>
              </div>
              <p className="text-sm font-serif font-bold text-doc-ink dark:text-white">
                Validate Your 24-Character Pakistani IBAN Before Wire Transfer
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-sans">
                Once your RDA is approved, use our ISO 13616 MOD-97 IBAN Validator to confirm your bank routing code and check digits before sending foreign funds.
              </p>
            </div>
            <Link
              href="/finance/pakistan-iban-number-check-validator-2026"
              className="shrink-0 px-4 py-2.5 rounded-xl bg-doc-ink dark:bg-white text-white dark:text-doc-ink font-mono font-bold text-xs hover:opacity-90 transition flex items-center gap-1.5 shadow-sm"
            >
              <span>Open IBAN Validator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </section>

          {/* FAQ Accordion Visual */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
              <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-doc-seal" />
                Frequently Asked Questions (FAQs)
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-sans mt-1">
                Real answers addressing confusing points regarding Naya Pakistan Certificates, foreign national rules, and SBP repatriation guarantees.
              </p>
            </div>

            <FAQAccordionVisual
              items={rdaFaqs}
              titleEn="Roshan Digital Account Essential FAQs"
              titleUr="روشن ڈیجیٹل اکاؤنٹ کے بارے میں عمومی سوالات اور ان کے جوابات"
            />
          </section>

          {/* Related Official Guides / Cross-Linking */}
          <section className="space-y-3 pt-2">
            <h2 className="text-lg font-serif font-bold text-doc-ink dark:text-white">
              Related Financial &amp; Overseas Services Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <Link
                href="/finance/pakistan-iban-number-check-validator-2026"
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-doc-seal/50 transition group space-y-1 shadow-xs"
              >
                <span className="text-[11px] font-mono text-doc-brass font-bold uppercase block">Tool</span>
                <strong className="text-sm font-serif text-doc-ink dark:text-white group-hover:text-doc-seal transition block">
                  Pakistan IBAN Validator 2026 &rarr;
                </strong>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Validate 24-character IBAN format and ISO 13616 checksum for wire transfers.
                </p>
              </Link>

              <Link
                href="/finance/how-to-open-bank-account-online-pakistan-2026"
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-doc-seal/50 transition group space-y-1 shadow-xs"
              >
                <span className="text-[11px] font-mono text-doc-brass font-bold uppercase block">Guide</span>
                <strong className="text-sm font-serif text-doc-ink dark:text-white group-hover:text-doc-seal transition block">
                  Open Bank Account Online PK &rarr;
                </strong>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Domestic digital banking, Asaan accounts, and biometric video KYC.
                </p>
              </Link>

              <Link
                href="/overseas/nicop-mandatory-entry-rules-2026"
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-doc-seal/50 transition group space-y-1 shadow-xs"
              >
                <span className="text-[11px] font-mono text-doc-brass font-bold uppercase block">Identity</span>
                <strong className="text-sm font-serif text-doc-ink dark:text-white group-hover:text-doc-seal transition block">
                  NICOP Entry Rules 2026 &rarr;
                </strong>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Mandatory overseas identity requirements for opening NRP bank accounts.
                </p>
              </Link>

              <Link
                href="/tax/foreign-remittance-tax-pakistan-overseas-2026"
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-doc-seal/50 transition group space-y-1 shadow-xs"
              >
                <span className="text-[11px] font-mono text-doc-brass font-bold uppercase block">Taxation</span>
                <strong className="text-sm font-serif text-doc-ink dark:text-white group-hover:text-doc-seal transition block">
                  Foreign Remittance Tax 2026 &rarr;
                </strong>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Tax exemptions on home remittances and overseas bank inflows.
                </p>
              </Link>
            </div>
          </section>

          {/* Official Regulatory Disclaimer */}
          <footer className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-2 font-sans">
            <p className="flex items-start gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Independent Informational Guide:</strong> Pakistan Info Hub is an independent civic portal and is not a financial institution or commercial bank. Roshan Digital Account policies, foreign exchange limits, profit coupons on Naya Pakistan Certificates, and repatriation rules are governed exclusively by the State Bank of Pakistan (SBP) under the Foreign Exchange Regulation Act. Always confirm live interest rates and specific requirements directly on{' '}
                <a
                  href="https://www.sbp.org.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-doc-seal dark:text-amber-400 underline font-mono inline-flex items-center gap-0.5"
                >
                  sbp.org.pk
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>{' '}
                or your selected commercial bank official RDA portal.
              </span>
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
