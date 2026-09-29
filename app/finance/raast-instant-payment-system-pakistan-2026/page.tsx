import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, ComparisonVisual, FAQAccordionVisual } from '@/components/visuals';
import {
  Landmark,
  Zap,
  ShieldCheck,
  Smartphone,
  QrCode,
  Globe,
  Coins,
  Store,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  FileText,
  Lock,
  ExternalLink,
  Building2,
  Users,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Raast Instant Payment System Pakistan 2026: SBP Registration & Rules | Pakistan Info Hub',
  description:
    'Complete State Bank of Pakistan (SBP) Raast guide 2026: Instant 24/7 money transfers using mobile number/CNIC, zero-fee P2P rules, Raast ID vs IBAN, BISP digital transfers, overseas remittance routing, and Rs 3.5B merchant QR subsidy.',
  keywords: [
    'SBP Raast instant payment system Pakistan 2026',
    'how to register Raast ID JazzCash EasyPaisa',
    'Raast ID vs IBAN difference Pakistan',
    'BISP Raast digital cash transfer 8171',
    'SBP merchant QR payment subsidy 3.5 billion',
    'Raast foreign remittance exchange companies SBP',
    'State Bank of Pakistan digital payment gateway',
  ],
  openGraph: {
    title: 'Raast Instant Payment System Pakistan 2026: SBP Registration & Rules',
    description:
      'Clear, practical public guide to State Bank of Pakistan’s Raast payment platform: 24/7 instant free transfers, mobile number Raast ID, BISP disbursements, and merchant QR subsidies.',
    url: 'https://www.pakistaninfohub.com/finance/raast-instant-payment-system-pakistan-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/finance/raast-instant-payment-system-pakistan-2026',
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
          name: 'Raast Instant Payment System 2026',
          item: 'https://www.pakistaninfohub.com/finance/raast-instant-payment-system-pakistan-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Raast Instant Payment System Pakistan 2026: SBP Registration, Raast ID vs IBAN & Merchant Rules',
      description:
        'A comprehensive, practical civic reference detailing the State Bank of Pakistan (SBP) Raast instant payment platform, including Raast ID registration, zero-fee P2P rules, BISP welfare transfers, home remittances, and merchant QR subsidies.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-29',
      dateModified: '2026-09-29',
      mainEntityOfPage:
        'https://www.pakistaninfohub.com/finance/raast-instant-payment-system-pakistan-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is Raast the same as JazzCash or EasyPaisa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Raast is a centralized national payment infrastructure operated directly by the State Bank of Pakistan (SBP). Commercial banks and mobile wallets (JazzCash, EasyPaisa, SadaPay, etc.) connect to Raast to allow instant, fee-free transfers between different banks and wallets.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is a Raast ID different from an IBAN?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An IBAN is a 24-character international bank account number (e.g. PK36SCBL0000001123456702). A Raast ID is a simple alias—typically your 11-digit mobile number—linked directly to your underlying IBAN inside your banking app, allowing people to send you money without needing your full IBAN.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a traditional bank account or can I use a mobile wallet for Raast?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can use either! Raast works seamlessly across both traditional commercial bank accounts (HBL, Meezan, UBL, Allied Bank, etc.) and branchless digital wallets (EasyPaisa, JazzCash, SadaPay, NayaPay).',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there any fees for sending money via Raast?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Person-to-Person (P2P) transactions via Raast are completely free of charge for retail individual customers across Pakistan.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Raast safe and secure?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Raast is Pakistan’s official state-backed digital payment gateway, encrypted and managed by the State Bank of Pakistan with bank-grade security protocols.',
          },
        },
      ],
    },
  ],
};

export default function RaastInstantPaymentPage() {
  const breadcrumbs = [
    { nameEn: 'Banking & Financial Services', nameUr: 'بینکنگ و مالیاتی سروسز' },
    { nameEn: 'Raast Instant Payment System 2026', nameUr: 'راست فوری ادائیگی سسٹم 2026' },
  ];

  const registrationSteps = [
    {
      stepNumber: 1,
      titleEn: 'Open Mobile Banking / Wallet App',
      titleUr: 'اپنی بینکنگ یا والٹ ایپ کھولیں',
      detailEn:
        'Log into your commercial bank app (HBL, Meezan, UBL, Alfalah) or branchless wallet app (JazzCash, EasyPaisa, SadaPay, NayaPay).',
      detailUr:
        'اپنے موبائل پر بینکنگ ایپ یا ایزی پیسہ/جائز کیش ایپ لاگ ان کریں۔',
    },
    {
      stepNumber: 2,
      titleEn: 'Navigate to Raast ID Management',
      titleUr: 'راست آئی ڈی مینجمنٹ پر جائیں',
      detailEn:
        'Go to Account Settings, Profile, or Fund Transfers and tap "Raast ID Management" or "Link Raast ID".',
      detailUr:
        'ایپ میں سیٹنگز یا فنڈ ٹرانسفر کے شعبے میں جا کر "Raast ID Management" منتخب کریں۔',
    },
    {
      stepNumber: 3,
      titleEn: 'Link Mobile Number & Confirm OTP',
      titleUr: 'موبائل نمبر لنک کریں اور آن لائن تصدیق کریں',
      detailEn:
        'Select the bank account or wallet you wish to connect to your registered mobile number, enter the one-time password (OTP), and complete activation.',
      detailUr:
        'اپنا موبائل نمبر اپنے مطلوبہ بینک اکاؤنٹ سے منسلک کریں اور او ٹی پی کوڈ سے منٹوں میں یکمشت تصدیق مکمل کریں۔',
    },
  ];

  const faqItems = [
    {
      questionEn: 'Is Raast the same as JazzCash or EasyPaisa?',
      questionUr: 'کیا راست (Raast) جائز کیش یا ایزی پیسہ کا متبادل یا نیا نام ہے؟',
      answerEn:
        'No. Raast is a national payment infrastructure operated directly by the State Bank of Pakistan (SBP). Commercial banks and mobile wallets like JazzCash, EasyPaisa, SadaPay, and NayaPay integrate with Raast to allow instant, fee-free transfers across different financial institutions.',
      answerUr:
        'جی نہیں، راست اسٹیٹ بینک آف پاکستان کا مرکزی قومی ڈیجیٹل پیمنٹ ریل ہے۔ تمام تجارتی بینک اور موبائل والٹس (جائز کیش، ایزی پیسہ، نایا پے) راست سے منسلک ہیں تا کہ فنڈز مختلف بینکوں کے درمیان سیکنڈز میں منتقل ہو سکیں۔',
    },
    {
      questionEn: 'How is a Raast ID different from an IBAN?',
      questionUr: 'راست آئی ڈی 24 ہندسوں کے آئی بی اے این (IBAN) سے کیسے مختلف ہے؟',
      answerEn:
        'An IBAN is a 24-character international account number (e.g. PK36SCBL0000001123456702). A Raast ID is a simple alias—typically your 11-digit mobile number—linked directly to your IBAN inside your banking app. You can share your mobile number instead of remembering or copying a long IBAN.',
      answerUr:
        'آئی بی اے این 24 ہندسوں کا بین الاقوامی اکاؤنٹ نمبر ہوتا ہے۔ راست آئی ڈی آپ کے اسی 24 ہندسوں کے IBAN کا ایک آسان شارٹ کٹ (موبائل نمبر) ہے جس سے فنڈز وصول کرنے کے لیے لمبا نمبر شیئر کرنے کی ضرورت نہیں رہتی۔',
    },
    {
      questionEn: 'Do I need a commercial bank account or can I use a mobile wallet?',
      questionUr: 'کیا راست استعمال کرنے کے لیے روایتی بینک اکاؤنٹ کا ہونا ضروری ہے؟',
      answerEn:
        'You can use either! Raast operates universally across traditional commercial bank accounts (HBL, Meezan, UBL, SCB, Allied Bank, etc.) and branchless digital wallets (EasyPaisa, JazzCash, SadaPay, NayaPay).',
      answerUr:
        'آپ دونوں استعمال کر سکتے ہیں! راست تمام روایتی بینک اکاؤنٹس اور برانچ لیس موبائل والٹس (ایزی پیسہ، جائز کیش وغیرہ) پر یکساں کام کرتا ہے۔',
    },
    {
      questionEn: 'Are there any fees for sending money via Raast?',
      questionUr: 'کیا راست کے ذریعے رقم منتقل کرنے پر کوئی چارجز یا کٹوتی ہوتی ہے؟',
      answerEn:
        'No. Person-to-Person (P2P) fund transfers via Raast are completely free of transaction fees for retail customers across Pakistan.',
      answerUr:
        'جی نہیں! عام شہریوں کے لیے راست کے ذریعے باہمی رقم کی منتقلی (P2P) بالکل مفت اور زیرو فیس ہے۔',
    },
    {
      questionEn: 'Is Raast safe and secure?',
      questionUr: 'کیا راست آن لائن پیمنٹ سسٹم محفوظ ہے؟',
      answerEn:
        'Yes. Raast is directly managed, encrypted, and monitored by the State Bank of Pakistan with biometric and bank-grade ISO security protocols.',
      answerUr:
        'جی ہاں! راست اسٹیٹ بینک آف پاکستان کا اپنا قومی نظام ہے جو اسٹیٹ لیول کی اعلیٰ ترین انکرپشن اور بائیومیٹرک سیکیورٹی کے تحت کام کرتا ہے۔',
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
            <InteractiveToolBadge labelEn="STATE BANK OF PAKISTAN DFS" labelUr="اسٹیٹ بینک راست سسٹم" variant="seal" />
            <VerifiedBadge textEn="INSTANT 24/7 ZERO-FEE P2P NET" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white leading-tight">
            Raast Instant Payment System Pakistan 2026: SBP Registration &amp; Rules
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              راست (Raast) انسٹنٹ پیمنٹ سسٹم: اسٹیٹ بینک رجسٹریشن، آئی ڈی گائیڈ اور مرچنٹ کیو آر قوانین
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl font-sans">
            An authoritative civic guide to the State Bank of Pakistan (SBP) <strong>Raast</strong> (&quot;Direct Path&quot;) instant payment gateway: registering your mobile number as a Raast ID, instant 24/7 zero-fee transfers, BISP digital welfare disbursements, foreign remittance routing, and the Rs 3.5 Billion merchant QR subsidy scheme.
          </p>
        </header>

        <AdPlacementZone slotId="top-banner" format="horizontal" />

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is SBP Raast & How Does It Work?"
          topicTitleUr="اسٹیٹ بینک راست (Raast) کا مختصر تعارف اور کام کرنے کا طریقہ"
          answerEn="Raast ('Direct Path') is Pakistan’s premier instant payment platform developed by the State Bank of Pakistan (SBP) with support from the Bill & Melinda Gates Foundation and World Bank. It allows citizens to send and receive money 24/7 in seconds using a simple 'Raast ID' (typically your mobile number or CNIC) linked directly to your bank account or mobile wallet (JazzCash, EasyPaisa, SadaPay, etc.) without needing long 24-character IBAN numbers. Person-to-Person (P2P) transfers are 100% free of charge."
          answerUr="راست (Raast) اسٹیٹ بینک آف پاکستان کا قائم کردہ قومی انسٹنٹ پیمنٹ سسٹم ہے۔ اس کے ذریعے پاکستان کا ہر شہری 24 گھنٹے سیکنڈز میں رقم منتقل کر سکتا ہے۔ 24 ہندسوں کے طویل IBAN کی جگہ صرف اپنے موبائل نمبر یا شناختی کارڈ کو راست آئی ڈی بنا کر کسی بھی بینک یا موبائل والٹ (جائز کیش، ایزی پیسہ، نایا پے) سے فوراً رقم بھیجی یا منگوائی جا سکتی ہے۔ عام شہریوں کے لیے یہ سروس مکمل طور پر مفت ہے۔"
        />

        {/* Key Features Overview Grid */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-doc-brass/30 pb-3">
            <Zap className="w-6 h-6 text-doc-seal dark:text-red-400" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Core Pillars of SBP Raast Platform
              <span className="block text-xs font-mono font-normal text-slate-700 dark:text-slate-300">
                راست ڈیجیٹل پیمنٹ سسٹم کی بنیادی خصوصیات
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="doc-card p-6 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-doc-dark-card space-y-3">
              <div className="w-10 h-10 rounded-xl bg-doc-seal/10 text-doc-seal flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
                Instant Settlement (24/7/365)
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                Funds land in the recipient&apos;s account within <strong>seconds</strong>, regardless of bank holidays, weekends, or late hours.
              </p>
            </div>

            <div className="doc-card p-6 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-doc-dark-card space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 flex items-center justify-center font-bold">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
                Simple Mobile Number Alias
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                No need to type 24-character IBAN numbers. Your <strong>11-digit mobile number</strong> acts as your direct payment address.
              </p>
            </div>

            <div className="doc-card p-6 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-doc-dark-card space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300 flex items-center justify-center font-bold">
                <Coins className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
                Zero Retail P2P Fee
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                Person-to-Person retail transfers are <strong>100% free of fee</strong> for citizens, backed by SBP&apos;s cost-recovery infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: ProcessStepsDiagram & Raast ID vs IBAN */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-doc-brass/30 pb-3">
            <Smartphone className="w-6 h-6 text-doc-seal dark:text-red-400" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Registration Guide: How to Link Your Raast ID
              <span className="block text-xs font-mono font-normal text-slate-700 dark:text-slate-300">
                اپنے موبائل نمبر کو راست آئی ڈی بنانے کا مرحلہ وار طریقہ
              </span>
            </h2>
          </div>

          <ProcessStepsDiagram
            steps={registrationSteps}
            titleEn="Step-by-Step Raast ID Registration Process"
            titleUr="راست آئی ڈی کی رجسٹریشن اور ایکٹیویشن کا آسان طریقہ"
            subtitleEn="Works across all major commercial bank apps, EasyPaisa, JazzCash, SadaPay & NayaPay"
            subtitleUr="تمام بینکنگ ایپس، ایزی پیسہ اور جائز کیش پر یکساں اور فوری طریقہ"
          />

          {/* Raast ID vs IBAN Comparison */}
          <ComparisonVisual
            titleEn="Raast ID vs IBAN: Key Distinctions for Everyday Banking"
            titleUr="راست آئی ڈی اور آئی بی اے این (IBAN) میں بنیادی فرق"
            subtitleEn="Understanding when to use your simple Raast mobile alias vs your 24-character IBAN"
            subtitleUr="موبائل نمبر شارٹ کٹ اور 24 ہندسوں کے رسمی اکاؤنٹ نمبر کا موازنہ"
            items={[
              {
                titleEn: 'Raast ID (Mobile Alias)',
                subtitleEn: '11-Digit Mobile Number linked inside your App',
                badgeEn: 'FASTEST & EASIEST',
                badgeVariant: 'seal',
                features: [
                  { labelEn: 'Format', valueEn: '03XX-XXXXXXX (11 Digits)', isPositive: true },
                  { labelEn: 'Primary Use', valueEn: 'Domestic Instant Transfers 24/7', isPositive: true },
                  { labelEn: 'Transfer Speed', valueEn: 'Instant (Under 5 Seconds)', isPositive: true },
                  { labelEn: 'Fee for P2P', valueEn: 'PKR 0 (Free)', isPositive: true },
                  { labelEn: 'Setup Effort', valueEn: '1-Click App Linkage', isPositive: true },
                ],
              },
              {
                titleEn: 'Pakistan IBAN (ISO 13616)',
                subtitleEn: '24-Character Standardized Bank Account Number',
                badgeEn: 'FORMAL STANDARD',
                badgeVariant: 'navy',
                features: [
                  { labelEn: 'Format', valueEn: 'PK36 SCBL 0000 0011 2345 6702', isPositive: true },
                  { labelEn: 'Primary Use', valueEn: 'Formal & International Transfers', isPositive: true },
                  { labelEn: 'Transfer Speed', valueEn: 'Instant via Raast / RTGS', isPositive: true },
                  { labelEn: 'Fee for P2P', valueEn: 'PKR 0 (via Raast Rail)', isPositive: true },
                  { labelEn: 'Setup Effort', valueEn: 'Default Bank Account Number', isPositive: true },
                ],
              },
            ]}
          />

          {/* Prominent Link to IBAN Validator Tool */}
          <div className="p-5 rounded-2xl bg-slate-900 text-white border border-doc-brass/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-doc-brass uppercase font-bold tracking-widest">
                VERIFY YOUR 24-DIGIT BANK NUMBER
              </span>
              <h4 className="font-serif font-bold text-base text-white">
                Need to verify your full 24-character Pakistan IBAN?
              </h4>
              <p className="text-xs text-slate-300 font-sans">
                Use our client-side ISO 13616 MOD-97 checksum validator to extract bank codes and verify IBAN formatting.
              </p>
            </div>
            <Link
              href="/finance/pakistan-iban-number-check-validator-2026"
              className="px-4 py-2.5 rounded-xl bg-doc-brass text-doc-ink font-bold font-mono text-xs hover:bg-amber-400 transition flex items-center gap-1.5 shrink-0"
            >
              <span>Launch IBAN Validator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Section 3: Impact on Specific Groups (BISP, Remittances, Small Businesses) */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-doc-brass/30 pb-3">
            <Users className="w-6 h-6 text-doc-seal dark:text-red-400" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              3. What SBP Raast Means for Key Beneficiary Groups
              <span className="block text-xs font-mono font-normal text-slate-700 dark:text-slate-300">
                مختلف طبقات (بے نظیر کافل، بیرونی ترسیلات، دکاندار) کے لیے فوائد
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Beneficiary Card 1 */}
            <div className="doc-card p-6 rounded-2xl border-2 border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20 space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
                <HeartHandshake className="w-6 h-6" />
                <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
                  BISP &amp; Welfare Beneficiaries
                </h3>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                Under SBP directives, BISP quarterly Kafaalat cash transfers are transitioning to direct <strong>Raast disbursements</strong> into beneficiaries&apos; bank accounts and digital wallets.
              </p>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 font-sans list-disc pl-4">
                <li>Eliminates long agent agent queues and biometric fraud.</li>
                <li>Ensures full cash grant lands directly without middleman cuts.</li>
              </ul>
              <div className="pt-2 border-t border-emerald-200 dark:border-emerald-900">
                <Link
                  href="/welfare/benazir-taleemi-wazaif-check-online-registration-2026"
                  className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-300 hover:underline flex items-center gap-1"
                >
                  <span>BISP 8171 Kafaalat Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Beneficiary Card 2 */}
            <div className="doc-card p-6 rounded-2xl border-2 border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 space-y-4">
              <div className="flex items-center gap-2 text-blue-800 dark:text-blue-300">
                <Globe className="w-6 h-6" />
                <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
                  Overseas Pakistanis (Remittances)
                </h3>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                As of 2026, SBP permits <strong>Exchange Companies and international payment hubs (e.g. Buna platform)</strong> to route home remittances through Raast.
              </p>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 font-sans list-disc pl-4">
                <li>Instant deposit into recipient&apos;s Raast ID in seconds.</li>
                <li>Fully documented, official remittance channels.</li>
              </ul>
              <div className="pt-2 border-t border-blue-200 dark:border-blue-900">
                <Link
                  href="/tax/foreign-remittance-tax-pakistan-overseas-2026"
                  className="text-xs font-mono font-bold text-blue-800 dark:text-blue-300 hover:underline flex items-center gap-1"
                >
                  <span>Remittance Tax Exemptions Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Beneficiary Card 3 */}
            <div className="doc-card p-6 rounded-2xl border-2 border-amber-200 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/20 space-y-4">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300">
                <Store className="w-6 h-6" />
                <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
                  Small Business &amp; Merchants (QR Subsidy)
                </h3>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                The Federal Govt allocated a <strong>Rs 3.5 Billion Merchant Subsidy</strong> (running Sept 2025 – June 2026) for Person-to-Merchant (P2M) QR payments.
              </p>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 font-sans list-disc pl-4">
                <li>Reimburses banks 0.5% or up to Rs 100 per transaction.</li>
                <li>Allows small shopkeepers to accept digital QR payments with zero or near-zero MDR charges.</li>
              </ul>
              <div className="pt-2 border-t border-amber-200 dark:border-amber-900">
                <Link
                  href="/finance/how-to-open-bank-account-online-pakistan-2026"
                  className="text-xs font-mono font-bold text-amber-800 dark:text-amber-300 hover:underline flex items-center gap-1"
                >
                  <span>Asaan Business Account Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <AdPlacementZone slotId="mid-content" format="rectangle" />

        {/* Section 4: FAQ Accordion */}
        <section className="space-y-6">
          <FAQAccordionVisual
            items={faqItems}
            titleEn="Frequently Asked Questions (Citizen Guidance)"
            titleUr="راست آن لائن پیمنٹ سے متعلق عام طور پر پوچھے جانے والے سوالات"
            subtitleEn="Verified answers based on State Bank of Pakistan (SBP) Raast operating guidelines"
            subtitleUr="اسٹیٹ بینک آف پاکستان کے منظور شدہ ڈائریکٹو کی روشنی میں تصدیق شدہ جوابات"
          />
        </section>

        {/* Legal & Banking Disclaimer Box */}
        <div className="p-5 rounded-xl border border-doc-brass/40 bg-doc-paper dark:bg-doc-dark-card space-y-2 text-xs text-slate-600 dark:text-slate-400 font-sans">
          <div className="flex items-center gap-2 font-bold text-doc-ink dark:text-slate-200 uppercase font-mono text-[11px]">
            <ShieldCheck className="w-4 h-4 text-doc-brass" />
            <span>Banking Educational Reference Disclaimer</span>
          </div>
          <p>
            This public civic reference guide is compiled strictly from official State Bank of Pakistan (SBP) Raast directives and press releases. Pakistan Info Hub is an independent information repository and does not process financial transactions. For specific account issues, Raast ID unlinking, or transaction disputes, please log into your commercial bank mobile app or contact your bank&apos;s official 24/7 helpline.
          </p>
        </div>

        <AdPlacementZone slotId="bottom-banner" format="horizontal" />
      </div>
    </>
  );
}
