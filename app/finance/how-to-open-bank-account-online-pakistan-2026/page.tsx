import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ComparisonVisual, ProcessStepsDiagram, FAQAccordionVisual } from '@/components/visuals';
import {
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  CreditCard,
  Building,
  Smartphone,
  Landmark,
  UserCheck,
  Scale,
  ArrowRight,
  BookOpen,
  Globe,
  Coins
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Open a Bank Account Online in Pakistan 2026: SBP Asaan & Digital Account Guide | Pakistan Info Hub',
  description:
    'Complete guide to opening a bank account online in Pakistan without visiting a branch: SBP Asaan Digital Account rules, biometric video KYC with NADRA, required documents, Current vs Savings vs Islamic accounts, and same-day activation.',
  keywords: [
    'how to open bank account online pakistan 2026',
    'asaan digital account open online',
    'online bank account opening without branch visit',
    'sbp digital onboarding framework',
    'meezan bank online account opening',
    'hbl digital account apply cnic',
    'biometric verification bank account pakistan',
  ],
  openGraph: {
    title: 'How to Open a Bank Account Online in Pakistan 2026: SBP Asaan & Digital Account Guide',
    description:
      'Step-by-step digital onboarding process for opening Current, Savings, and Asaan bank accounts online in Pakistan using biometric NADRA verification.',
    url: 'https://www.pakistaninfohub.com/finance/how-to-open-bank-account-online-pakistan-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/finance/how-to-open-bank-account-online-pakistan-2026' },
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
          name: 'Open Bank Account Online',
          item: 'https://www.pakistaninfohub.com/finance/how-to-open-bank-account-online-pakistan-2026',
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Open a Bank Account Online in Pakistan via Biometric Verification',
      description:
        'Official procedure for opening an online digital bank account or SBP Asaan account in Pakistan using mobile biometric verification and NADRA database matching.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Download Official Bank Mobile App',
          text: 'Install your chosen commercial or Islamic bank’s official digital onboarding mobile app from Google Play Store or Apple App Store.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Enter CNIC and Mobile Number',
          text: 'Provide your 13-digit CNIC number, date of issuance, and an active mobile number registered in your own name for OTP verification.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Perform Biometric Video / Selfie KYC',
          text: 'Follow on-screen prompts for live facial liveness check or mobile camera biometric fingerprint scanning matched in real time against NADRA records.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Select Account Type',
          text: 'Choose between an Asaan Digital Account (basic CNIC, no proof of income), standard Current Account, or Profit-Bearing Savings Account.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Instant Activation and Debit Card Delivery',
          text: 'Receive your live IBAN and account number within 24 to 48 hours, with your personalized UnionPay, PayPak, Visa, or Mastercard debit card delivered to your residential address.',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'How to Open a Bank Account Online in Pakistan 2026: SBP Digital Onboarding Framework',
      description:
        'Comprehensive guide explaining the standardized online bank account opening framework across Pakistani banks, account categories, and biometric requirements.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/finance/how-to-open-bank-account-online-pakistan-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I need to visit a physical bank branch to open a bank account in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Under the State Bank of Pakistan’s Digital Onboarding Framework, most major banks allow resident Pakistani citizens to open full digital accounts entirely online via their official mobile apps using real-time biometric and facial verification matched against NADRA records.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I open a bank account with just my CNIC and without proof of income?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. You can open an SBP "Asaan Account" or "Asaan Digital Account" using only your valid CNIC/SNIC and an active biometric SIM card registered in your name. Asaan accounts require no salary slips or proof of business income, subject to standard transaction limits (typically up to PKR 1,000,000 monthly total debits/credits).',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if the bank mobile app cannot verify my biometric fingerprints?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If smartphone camera contactless fingerprint scanning fails, ensure you are scanning in a well-lit area against a plain white background. Alternatively, complete the application using Video KYC (live agent video call) or visit any branch or 1Link biometric ATM of that bank to complete a 30-second biometric scan.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between an Asaan Account and a Regular Current/Savings Account?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An Asaan Account is a simplified inclusion account requiring zero proof of income and no minimum balance maintenance, but it has monthly debit/credit turnover limits. Regular Current and Savings accounts offer unlimited transaction ceilings and commercial facilities (such as chequebooks, foreign currency, and credit cards) but require formal proof of income (salary slip, employment letter, or tax returns).',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between Islamic and Conventional bank accounts in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Conventional bank savings accounts operate on fixed interest (Riba), whereas Islamic bank savings accounts (such as Meezan Bank, BankIslami, or Islamic windows of commercial banks) operate on Shariah-compliant profit-and-loss sharing principles (Mudarabah or Musharakah) where returns fluctuate based on actual pool investments.',
          },
        },
      ],
    },
  ],
};

export default function OpenBankAccountOnlinePage() {
  const breadcrumbs = [
    { nameEn: 'Banking & Financial Services', nameUr: 'بینکنگ و مالیاتی سروسز' },
    { nameEn: 'Open Bank Account Online 2026', nameUr: 'آن لائن بینک اکاؤنٹ گائیڈ' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="DIGITAL BANKING GUIDE" labelUr="ڈیجیٹل بینکنگ گائیڈ" variant="seal" />
            <VerifiedBadge textEn="STATE BANK OF PAKISTAN (SBP) FRAMEWORK" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            How to Open a Bank Account Online in Pakistan 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              برانچ جائے بغیر گھر بیٹھے آن لائن بینک اکاؤنٹ کھولنے کا مکمل شرعی و قانونی طریقہ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            A comprehensive, evergreen structural guide to opening an individual or business bank account digitally in Pakistan.
            Learn how the <strong>State Bank of Pakistan (SBP) Digital Onboarding Framework</strong> works, explore
            <strong> Asaan Digital Accounts</strong> without salary slips, understand biometric video KYC, and choose the right account type.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="Can You Open a Pakistani Bank Account Entirely Online Without Visiting a Branch?"
          topicTitleUr="کیا پاکستان میں برانچ جائے بغیر آن لائن بینک اکاؤنٹ کھل سکتا ہے؟"
          answerEn="Yes. Under the State Bank of Pakistan's digital framework, resident Pakistani citizens can open an active bank account online through official bank mobile apps. You only need a valid CNIC, an active SIM registered in your name, and smartphone biometric/video KYC verification matched directly against NADRA."
          answerUr="جی ہاں۔ اسٹیٹ بینک آف پاکستان کے منظور شدہ فریم ورک کے تحت آپ کسی بھی برانچ جائے بغیر بینک کی آفیشل موبائل ایپ کے ذریعے 100 فیصد آن لائن اکاؤنٹ کھول سکتے ہیں۔ اس کے لیے صرف اصل شناختی کارڈ، اپنے نام رجسٹرڈ سم اور نادرا سے بائیومیٹرک یا ویڈیو تصدیق درکار ہوتی ہے۔"
        />

        {/* Section 1: Step-by-Step Digital Account Opening Flow */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              The 5-Step Digital Onboarding Process in Pakistan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-xs font-sans">
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Install Bank App</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Download the official app (HBL, Meezan, Alfa, UBL Digital, MCB Live) from verified app stores.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">CNIC &amp; SIM Verification</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Enter your 13-digit CNIC number and verify ownership via an SMS OTP sent to your biometric SIM.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Biometric Video KYC</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Scan your fingerprints with your camera or complete a live facial selfie matched against NADRA.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-emerald-700 text-white font-mono font-bold flex items-center justify-center text-xs">4</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Choose Account Type</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Select an Asaan Account (no income proof), standard Current, or profit-bearing Savings account.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-amber-700 text-white font-mono font-bold flex items-center justify-center text-xs">5</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Live Activation</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Your 24-character IBAN is activated within 24–48 hours, and your physical debit card is dispatched.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Account Categories Explained */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Understanding Main Bank Account Categories in Pakistan
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Before applying, review the primary account classifications established by the State Bank of Pakistan so you select the tier appropriate for your financial needs:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            {/* Asaan Digital Account */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/60 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-mono font-bold text-[11px]">
                  Zero Income Proof Required
                </span>
                <span className="text-xs font-serif font-bold text-doc-seal">Financial Inclusion</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">1. Asaan &amp; Asaan Digital Account</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Designed specifically for students, homemakers, freelance starters, and self-employed individuals. Requires only a CNIC and basic personal information. No minimum balance penalties apply. Monthly turnover limits are capped at standard SBP inclusion thresholds (e.g. PKR 1,000,000).
              </p>
            </div>

            {/* Regular Current Account */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 font-mono font-bold text-[11px]">
                  Commercial &amp; High Volume
                </span>
                <span className="text-xs font-serif font-bold text-doc-ink dark:text-white">0% Profit / Riba-Free</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">2. Standard Current Account</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Ideal for salaried professionals, traders, and businesses requiring unlimited transaction volumes. Requires a salary slip, job letter, or business NTN. Does not earn any profit or interest.
              </p>
            </div>

            {/* Savings & PLS Account */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-mono font-bold text-[11px]">
                  Profit Bearing
                </span>
                <span className="text-xs font-serif font-bold text-doc-brass">Monthly Yield</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">3. Savings / PLS Account</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Earns a monthly or bi-annual return on deposited balances. Subject to withholding tax (15% for tax filers, 30% for non-filers) and annual Zakat deduction unless a CZ-50 Zakat exemption declaration is submitted.
              </p>
            </div>

            {/* Islamic Banking vs Conventional */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-doc-brass/20 text-doc-ink dark:text-amber-200 font-mono font-bold text-[11px]">
                  Shariah Compliant
                </span>
                <span className="text-xs font-serif font-bold text-emerald-600">Mudarabah Model</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">4. Islamic Banking Accounts</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Available at dedicated Islamic banks (e.g. Meezan Bank, BankIslami) or Islamic branches of conventional banks. Operates under Shariah supervisory boards on profit-and-loss sharing principles without fixed interest.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Key Decision Factors Before Choosing a Bank */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              What to Evaluate Before Choosing an Online Bank
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-sans">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="font-bold text-doc-ink dark:text-white block">1. Mobile App Reliability</span>
              <p className="text-slate-500">Check app ratings for smooth biometric login, biometric approval, and 24/7 uptime.</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="font-bold text-doc-ink dark:text-white block">2. Raast &amp; 1Link Support</span>
              <p className="text-slate-500">Ensure instant zero-fee Raast P2P interbank transfers and wide 1Link ATM coverage.</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="font-bold text-doc-ink dark:text-white block">3. Inbound Remittances</span>
              <p className="text-slate-500">Verify direct integration with Payoneer, Wise, and SWIFT if you receive international funds.</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="font-bold text-doc-ink dark:text-white block">4. Branch Proximity</span>
              <p className="text-slate-500">Check physical branch locations in your city in case manual locker or cash deposits are needed.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Overseas Pakistanis Note */}
        <section className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-xs font-sans leading-relaxed">
          <div className="flex items-center gap-2 font-bold text-doc-ink dark:text-white text-sm">
            <Globe className="w-4 h-4 text-doc-brass" />
            <span>Specialized Options for Non-Resident Pakistanis (Roshan Digital Account)</span>
          </div>
          <p className="text-slate-600 dark:text-slate-300">
            If you are an overseas Pakistani holding a valid NICOP or POC residing abroad, you can open a specialized <strong>Roshan Digital Account (RDA)</strong> entirely online in PKR, USD, EUR, or GBP. RDA allows seamless tax-free investments into Naya Pakistan Certificates (NPC), Pakistan Stock Exchange (PSX), and direct bill payments in Pakistan.
          </p>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 5: Related Financial Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Banking &amp; Financial Tools on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/finance/pakistan-iban-number-check-validator-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">IBAN Tool</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Pakistan IBAN Validator 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Validate 24-character IBAN format and ISO 13616 MOD-97 checksum.</p>
            </Link>

            <Link
              href="/nadra/pak-id-biometric-verification-fix"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">NADRA Biometrics</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Biometric Verification Fix Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Troubleshoot mobile camera biometric scanning and facial verification.</p>
            </Link>

            <Link
              href="/tax/income-tax-calculator-salaried-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Tax Calculations</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                FBR Salaried Income Tax Calculator →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Calculate monthly payroll deductions under latest budget tax slabs.</p>
            </Link>
          </div>
        </section>

        {/* Comparison Visual: Asaan Account vs Full Digital Account */}
        <ComparisonVisual
          titleEn="Asaan Digital Account vs Standard Current / Savings Account"
          titleUr="آسان ڈیجیٹل اکاؤنٹ بمقابلہ ریگولر کرنٹ و سیونگز اکاؤنٹ"
          subtitleEn="Documentation requirements, monthly turnover limits, and onboarding requirements comparison"
          subtitleUr="کاغذات کی شرائط، ماہانہ ٹرانزیکشن کی حد اور اسٹیٹ بینک قوانین کا تقابلی جائزہ"
          items={[
            {
              titleEn: "SBP Asaan Digital Account",
              titleUr: "اسٹیٹ بینک آسان ڈیجیٹل اکاؤنٹ",
              subtitleEn: "Zero Income Proof Required",
              subtitleUr: "آمدنی کے ثبوت کے بغیر فوری اکاؤنٹ",
              badgeEn: "CNIC Only",
              badgeUr: "صرف شناختی کارڈ",
              badgeVariant: "emerald",
              isPopular: true,
              pointsEn: [
                "Open with only valid original CNIC and biometric mobile SIM",
                "Zero salary slip or proof of business income required",
                "Monthly credit/debit turnover limit up to PKR 1,000,000",
                "Includes free mobile banking, Raast P2P transfers, and debit card"
              ],
              recommendedForEn: "Students, housewives, freelancers starting out, and individuals without formal salary slips",
              recommendedForUr: "طلباء، گھریلو خواتین اور ان تمام افراد کے لیے جن کے پاس سیلری سلپ یا آمدنی کا ثبوت نہیں"
            },
            {
              titleEn: "Standard Current / Savings / Freelancer",
              titleUr: "ریگولر کرنٹ / سیونگز / فری لانسر اکاؤنٹ",
              subtitleEn: "Uncapped High-Volume Banking",
              subtitleUr: "بغیر حد کے مکمل کمرشل بینکنگ",
              badgeEn: "Full Commercial",
              badgeUr: "مکمل بینکنگ",
              badgeVariant: "brass",
              pointsEn: [
                "Requires formal proof of income (salary slip, NTN return, or freelance invoices)",
                "No transaction ceiling (unlimited monthly debit/credit volume)",
                "Eligible for physical chequebooks, foreign currency, and credit cards",
                "Freelancer accounts permit up to 50% USD retention in foreign currency pockets"
              ],
              recommendedForEn: "Salaried professionals, business owners, and high-earning digital exporters",
              recommendedForUr: "تنخواہ دار ملازمین، کاروباری افراد اور بڑے پیمانے پر فری لانسنگ کرنے والوں کے لیے"
            }
          ]}
        />

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step Online Bank Account Opening Workflow (SBP 2026)"
          titleUr="آن لائن بینک اکاؤنٹ کھولنے کا 4 مرحلہ وار طریقہ کار"
          subtitleEn="4-stage digital onboarding from app installation to instant IBAN activation"
          subtitleUr="ایپ ڈاؤن لوڈ سے لے کر ویڈیو کے وائی سی اور کارڈ کی ترسیل تک کے 4 مراحل"
          steps={[
            {
              number: 1,
              titleEn: "Download Bank Mobile App",
              titleUr: "بینک کی آفیشل ایپ ڈاؤن لوڈ کریں",
              descEn: "Install official app (e.g. HBL, Meezan, Alfalah, Nayapay, Sadapay) and select 'Open New Account'.",
              descUr: "متعلقہ بینک کی تصدیق شدہ ایپ انسٹال کر کے 'نیا اکاؤنٹ کھولیں' کا انتخاب کریں۔",
              tagEn: "Mobile App",
              tagUr: "ایپ ڈاؤن لوڈ",
            },
            {
              number: 2,
              titleEn: "Scan CNIC & Contact Info",
              titleUr: "شناختی کارڈ اور معلومات کا اندراج",
              descEn: "Photograph original CNIC front/back and enter your mobile number registered on your own CNIC.",
              descUr: "اپنے اصل شناختی کارڈ کی دونوں طرف سے تصویر لیں اور اپنے نام پر رجسٹرڈ سم کا نمبر درج کریں۔",
              tagEn: "CNIC Scan",
              tagUr: "شناختی کارڈ",
            },
            {
              number: 3,
              titleEn: "Biometric & Video KYC",
              titleUr: "بائیومیٹرک اور لائیو ویڈیو کے وائی سی",
              descEn: "Perform contactless camera fingerprint scanning or complete a 60-second live video call with a bank agent.",
              descUr: "کیمرے سے انگلیوں کے نشانات اسکین کریں یا بینک نمائندے کے ساتھ مختصر ویڈیو کال مکمل کریں۔",
              tagEn: "NADRA Match",
              tagUr: "ویڈیو تصدیق",
            },
            {
              number: 4,
              titleEn: "Instant IBAN & Debit Card",
              titleUr: "فوری اکاؤنٹ نمبر اور ڈیبٹ کارڈ",
              descEn: "Your 24-character IBAN is generated immediately; order free Mastercard/PayPak/Visa debit card to your address.",
              descUr: "آپ کا 24 ہندسوں کا آئی بی اے این فوری بن جائے گا اور ڈیبٹ کارڈ ڈاک کے ذریعے گھر بھیج دیا جائے گا۔",
              tagEn: "Account Ready",
              tagUr: "اکاؤنٹ فعال",
            },
          ]}
        />

        {/* Section 6: FAQs */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Online Bank Account Opening)"
          titleUr="آن لائن بینک اکاؤنٹ کھولنے سے متعلق عام سوالات"
          subtitleEn="Essential guidelines on branchless opening, CNIC-only accounts, biometric failures, and Islamic vs Conventional"
          subtitleUr="گھر بیٹھے اکاؤنٹ، آمدنی کے ثبوت کے بغیر اکاؤنٹ، فنگر پرنٹ مسائل اور اسلامی بینکنگ کی تفصیلی معلومات"
          items={[
            {
              questionEn: "Do I need to visit a physical bank branch to open a bank account in Pakistan?",
              questionUr: "کیا پاکستان میں بینک اکاؤنٹ کھولنے کے لیے برانچ جانا ضروری ہے؟",
              answerEn: "No. Under the State Bank of Pakistan's Digital Onboarding Framework, most major banks allow resident Pakistani citizens to open full digital accounts entirely online via their official mobile apps using real-time biometric and facial verification matched against NADRA records.",
              answerUr: "نہیں! اسٹیٹ بینک کے ڈیجیٹل فریم ورک کے تحت آپ گھر بیٹھے موبائل ایپ کے ذریعے نادرا سے بائیومیٹرک تصدیق کروا کے چند منٹوں میں مکمل اکاؤنٹ کھول سکتے ہیں۔",
            },
            {
              questionEn: "Can I open a bank account with just my CNIC and without proof of income?",
              questionUr: "کیا بغیر سیلری سلپ اور آمدنی کے ثبوت کے صرف شناختی کارڈ پر اکاؤنٹ کھل سکتا ہے؟",
              answerEn: "Yes. You can open an SBP 'Asaan Account' or 'Asaan Digital Account' using only your valid CNIC/SNIC and an active biometric SIM card registered in your name. Asaan accounts require no salary slips or proof of business income, subject to standard transaction limits (typically up to PKR 1,000,000 monthly total debits/credits).",
              answerUr: "جی ہاں! اسٹیٹ بینک کا 'آسان ڈیجیٹل اکاؤنٹ' صرف شناختی کارڈ پر کھلتا ہے جس کے لیے کسی سیلری سلپ یا کاروبار کے ثبوت کی ضرورت نہیں ہوتی (ماہانہ حد 10 لاکھ روپے تک ہوتی ہے)۔",
            },
            {
              questionEn: "What should I do if the bank mobile app cannot verify my biometric fingerprints?",
              questionUr: "اگر موبائل ایپ سے انگلیوں کے نشانات اسکین نہ ہو رہے ہوں تو کیا حل ہے؟",
              answerEn: "If smartphone camera contactless fingerprint scanning fails, ensure you are scanning in a well-lit area against a plain white background. Alternatively, complete the application using Video KYC (live agent video call) or visit any branch or 1Link biometric ATM of that bank to complete a 30-second biometric scan.",
              answerUr: "اچھی روشنی اور سفید پس منظر میں اسکین کریں، یا ایپ میں 'ویڈیو کے وائی سی' کا آپشن منتخب کریں جہاں بینک نمائندہ لائیو ویڈیو کال پر چہرے کی تصدیق کر لیتا ہے۔",
            },
            {
              questionEn: "What is the difference between an Asaan Account and a Regular Current/Savings Account?",
              questionUr: "آسان اکاؤنٹ اور ریگولر کرنٹ یا سیونگز اکاؤنٹ میں کیا فرق ہے؟",
              answerEn: "An Asaan Account is a simplified inclusion account requiring zero proof of income and no minimum balance maintenance, but it has monthly debit/credit turnover limits. Regular Current and Savings accounts offer unlimited transaction ceilings and commercial facilities (such as chequebooks, foreign currency, and credit cards) but require formal proof of income (salary slip, employment letter, or tax returns).",
              answerUr: "آسان اکاؤنٹ میں آمدنی کے ثبوت کی ضرورت نہیں ہوتی مگر ماہانہ ٹرانزیکشن کی حد ہوتی ہے۔ ریگولر اکاؤنٹ میں لامحدود لین دین کی سہولت ملتی ہے مگر آمدنی کا ثبوت دینا لازمی ہوتا ہے۔",
            },
            {
              questionEn: "What is the difference between Islamic and Conventional bank accounts in Pakistan?",
              questionUr: "پاکستان میں اسلامی اور روایتی (کنوینشنل) بینکنگ میں کیا فرق ہے؟",
              answerEn: "Conventional bank savings accounts operate on fixed interest (Riba), whereas Islamic bank savings accounts (such as Meezan Bank, BankIslami, or Islamic windows of commercial banks) operate on Shariah-compliant profit-and-loss sharing principles (Mudarabah or Musharakah) where returns fluctuate based on actual pool investments.",
              answerUr: "روایتی بینکوں میں طے شدہ سود کا نظام ہوتا ہے، جبکہ اسلامی بینک (جیسے میزان بینک) شریعت کے مطابق نفع و نقصان کی شراکت (مضاربہ) کی بنیاد پر حلال منافع فراہم کرتے ہیں۔",
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Regulatory Sources Cited:</p>
          {[
            { label: 'State Bank of Pakistan (SBP) Digital Onboarding of Resident Pakistanis Framework', url: 'https://www.sbp.org.pk/' },
            { label: 'State Bank of Pakistan (SBP) Asaan Account & Asaan Digital Account Directives', url: 'https://www.sbp.org.pk/' },
            { label: 'NADRA Pak-ID Verisys Biometric Verification System', url: 'https://www.nadra.gov.pk/' },
          ].map((src) => (
            <a
              key={src.url}
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-doc-seal"
            >
              <ExternalLink className="w-3 h-3" />
              {src.label}: <span className="font-mono">{src.url}</span>
            </a>
          ))}
        </section>
      </div>
    </>
  );
}
