import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, FeeTableVisual, FAQAccordionVisual } from '@/components/visuals';
import {
  HelpCircle,
  ExternalLink,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  Smartphone,
  Users,
  Sparkles,
  ArrowRight,
  FileText,
  BadgeCheck,
  Building
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NADRA CNIC New Rules 2026 – Free First-Time Card, Fees & Biometric Directives | Pakistan Info Hub',
  description:
    'Complete guide to NADRA CNIC rules in 2026: Free first-time CNIC for citizens 18+, updated Normal/Urgent/Executive fee table, mandatory mobile SIM linking, biometric family verification, Smart CNIC transition, and Interior Ministry reforms.',
  keywords: [
    'NADRA CNIC new rules 2026',
    'first time CNIC free NADRA',
    'NADRA Smart CNIC fee 2026',
    'NADRA biometric verification rules',
    'Pak Identity online CNIC apply',
    'Mohsin Naqvi NADRA directives 2026',
    'NADRA urgent normal executive fee schedule',
  ],
  openGraph: {
    title: 'NADRA CNIC New Rules 2026 – Free First-Time Card & Updated Fees',
    description:
      'Official 2026 guide on NADRA identity card regulations: Free first card for 18+, biometric rules, mobile linkage, and Pak-ID online renewal steps.',
    url: 'https://www.pakistaninfohub.com/nadra/cnic-new-rules-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/nadra/cnic-new-rules-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'NADRA Services', item: 'https://www.pakistaninfohub.com/nadra' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'CNIC New Rules 2026',
          item: 'https://www.pakistaninfohub.com/nadra/cnic-new-rules-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'NADRA CNIC New Rules 2026 – Free First-Time Card, Fees & Biometric Directives',
      description:
        'A comprehensive public guide explaining the 2026 NADRA identity card regulations, fee schedules, mobile linking requirements, and biometric verification procedures.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-20',
      dateModified: '2026-08-21',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/nadra/cnic-new-rules-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the first-time CNIC completely free in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Under official NADRA policy and Ministry of Interior directives, any Pakistani citizen applying for their first CNIC upon reaching the age of 18 is exempt from standard processing fees under the Normal delivery category (Rs. 0). If the applicant opts for Urgent or Executive processing, standard expedited charges apply.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if my mobile number is not registered against my own CNIC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NADRA now strictly requires a biometric mobile number registered under the applicant’s own CNIC for all identity verifications and online Pak-ID transactions. If the number belongs to someone else, one-time passwords (OTP) and identity security alerts will fail. For minors applying for juvenile cards/B-Form, a parent’s registered number is mandatory.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the temporary birth certificate facilitation valid until December 31, 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To assist citizens in rural and underserved areas who face bureaucratic hurdles obtaining computerized Union Council birth certificates, NADRA allows first-time applicants aged 18+ to apply with physical birth documentation or school certificates, provided they are accompanied by a blood relative (parent or sibling) for live biometric family linkage verification.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between a standard CNIC and a Smart CNIC (SNIC)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A standard CNIC is a printed magnetic stripe card, while a Smart CNIC (SNIC) features an embedded microchip containing encrypted biometric data, photograph, and digital identity keys. NADRA strongly encourages Smart CNIC adoption (Normal fee: PKR 750) because it resists physical tampering, enables contactless authentication, and integrates seamlessly with international travel and banking security standards.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I renew an expired CNIC online without visiting a NADRA center?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Citizens can renew their expired CNIC, request a duplicate, or modify marital status/address entirely online through the official Pak-ID portal (id.nadra.gov.pk) or the Pak-ID mobile app with fingerprint capture via smartphone camera and home courier delivery.',
          },
        },
      ],
    },
  ],
};

export default function CnicNewRules2026Page() {
  const breadcrumbs = [
    { nameEn: 'NADRA Services', nameUr: 'نادرا سروسز' },
    { nameEn: 'CNIC New Rules 2026', nameUr: 'شناختی کارڈ نئے قواعد 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="CIVIC POLICY UPDATE" labelUr="سرکاری پالیسی اپڈیٹ" variant="seal" />
            <VerifiedBadge textEn="OFFICIAL 2026 GAZETTE NOTIFICATION" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            NADRA CNIC New Rules 2026: Free First Card, Fees &amp; Biometric Directives
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              نادرا شناختی کارڈ نئے قواعد 2026: مفت پہلا کارڈ، فیس اور فنگر پرنٹ شرائط
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Under recent Federal Ministry of Interior directives and NADRA operational reforms, significant updates have
            been introduced for identity card issuance across Pakistan. Learn about free first-time CNIC eligibility,
            the official fee schedule, mandatory SIM registration, and family biometric requirements.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What are the New NADRA CNIC Rules in 2026?"
          topicTitleUr="2026 میں نادرا شناختی کارڈ کے نئے قواعد کیا ہیں؟"
          answerEn="First-time CNIC for Pakistani citizens aged 18+ is completely FREE under the Normal category (15 days). Renewals cost PKR 400 (Normal), PKR 1,150 (Urgent), and PKR 2,150 (Executive) for standard cards; and PKR 750, PKR 1,500, and PKR 2,500 for Smart Cards. Applicants must link a biometric mobile number registered in their own name."
          answerUr="18 سال کی عمر کے شہریوں کے لیے پہلا شناختی کارڈ نارمل کیٹیگری میں بالکل مفت (0 روپے) ہے۔ تجدید فیس عام کارڈ کے لیے 400 (نارمل)، 1150 (ارجنٹ) اور 2150 (ایگزیکٹو) جبکہ اسمارٹ کارڈ کے لیے 750، 1500 اور 2500 روپے ہے۔ درخواست گزار کے اپنے نام پر رجسٹرڈ سم کا ہونا لازمی قرار دیا گیا ہے۔"
        />

        {/* Section 1: Key Policy Changes in 2026 */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              What Actually Changed in 2026: 5 Critical Updates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="doc-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 font-mono text-[11px] font-bold">
                  RULE 1 • FEE WAIVER
                </span>
                <Coins className="w-4 h-4 text-emerald-500" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                100% Free First-Time CNIC
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Every citizen turning 18 applying for their first National Identity Card pays <strong>Rs. 0 (Free)</strong> under
                the standard normal processing category. No registration fees are charged at any NRC in Pakistan.
              </p>
            </div>

            <div className="doc-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-600 dark:text-blue-300 font-mono text-[11px] font-bold">
                  RULE 2 • SIM LINKING
                </span>
                <Smartphone className="w-4 h-4 text-blue-500" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Mandatory Own-Name Mobile SIM
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Your application contact number must be biometrically registered against your own CNIC (or parent’s CNIC
                for minors). Numbers registered to third-party friends or agents are automatically rejected.
              </p>
            </div>

            <div className="doc-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-600 dark:text-amber-300 font-mono text-[11px] font-bold">
                  RULE 3 • FAMILY TREE
                </span>
                <Users className="w-4 h-4 text-amber-500" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Strict Biometric Relative Attestation
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                First-time applicants must be accompanied by a direct blood relative (parent or sibling) who provides
                live biometric fingerprint authentication to verify genuine family tree inclusion.
              </p>
            </div>

            <div className="doc-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-600 dark:text-purple-300 font-mono text-[11px] font-bold">
                  RULE 4 • REVISED DEADLINE
                </span>
                <Clock className="w-4 h-4 text-purple-500" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Birth Certificate Relaxation Until End-2026
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Until December 31, 2026, citizens facing delays in computerized Union Council birth certificates can apply
                with valid school leaving certificates or matriculation Sanad backed by parental biometric verification.
              </p>
            </div>

            <div className="doc-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-600 dark:text-rose-300 font-mono text-[11px] font-bold">
                  RULE 5 • SMART SNIC
                </span>
                <CreditCard className="w-4 h-4 text-rose-500" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Smart Chip (SNIC) Standard Rollout
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                NADRA is systematically phasing out older non-chip cards in favor of chip-based Smart National Identity Cards (SNIC)
                that integrate seamlessly with digital banking, e-governance, and SIM issuance.
              </p>
            </div>

            <div className="doc-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 font-mono text-[11px] font-bold">
                  MINISTERIAL DIRECTIVES
                </span>
                <ShieldCheck className="w-4 h-4 text-cyan-500" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Interior Ministry Service Overhaul
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Under Interior Minister Mohsin Naqvi’s directives, death certificate cancellation fees were waived,
                24/7 Mega Center shifts were expanded, and strict measures against unauthorized agents were deployed.
              </p>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 2: Complete Fee Table 2026 */}
        <FeeTableVisual
          titleEn="Official NADRA CNIC & Smart Card Fee Schedule (2026)"
          titleUr="نادرا شناختی کارڈ اور اسمارٹ کارڈ کا سرکاری فیس شیڈول 2026"
          subtitleEn="Verified statutory fee rates across Normal (15 days), Urgent (12 days), and Executive (6 days) categories"
          subtitleUr="نارمل، ارجنٹ اور ایگزیکٹو کیٹیگریز کے تحت نادرا کی تصدیق شدہ فیسیں"
          noteEn="First-time applicants aged 18+ receive Normal delivery 100% free of charge. Cancellation of deceased family member CNIC is completely free."
          noteUr="18 سال کی عمر میں پہلی بار شناختی کارڈ بنوانے پر نارمل فیس بالکل مفت ہے۔ فوت شدہ افراد کا شناختی کارڈ کینسل کروانا بھی مفت ہے۔"
          rows={[
            {
              serviceEn: "First-Time CNIC (Age 18+)",
              serviceUr: "پہلی بار شناختی کارڈ (18 سال یا زائد)",
              normal: "FREE (PKR 0)",
              urgent: "PKR 1,150",
              executive: "PKR 2,150",
              validity: "10 Years / Lifetime (60+)",
            },
            {
              serviceEn: "Standard CNIC Renewal / Duplicate / Modification",
              serviceUr: "شناختی کارڈ تجدید / گمشدہ ڈپلیکیٹ / ترمیم",
              normal: "PKR 400",
              urgent: "PKR 1,150",
              executive: "PKR 2,150",
              validity: "10 Years Validity",
            },
            {
              serviceEn: "Smart CNIC (Chip-based SNIC) – New / Modification",
              serviceUr: "اسمارٹ شناختی کارڈ (چپ والا کارڈ) نیا یا ترمیم",
              normal: "PKR 750",
              urgent: "PKR 1,500",
              executive: "PKR 2,500",
              validity: "10 Years (Encrypted Chip)",
            },
            {
              serviceEn: "Smart NICOP (Overseas Pakistanis – Zone A / B)",
              serviceUr: "نائیکوپ اوورسیز شناختی کارڈ (زون A / B)",
              normal: "$39 / $20",
              urgent: "$57 / $30",
              executive: "$75 / $40",
              validity: "5–10 Years Validity",
            },
            {
              serviceEn: "CNIC Cancellation on Death (Surrender Card)",
              serviceUr: "فوتیدگی پر شناختی کارڈ کی منسوخی",
              normal: "FREE (Waived)",
              urgent: "Standard Process",
              executive: "Waived Fee",
              validity: "Death Certificate Issued",
            },
          ]}
        />

        {/* Section 3: Step-by-Step Application Workflow */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              How to Apply for CNIC or Renewal (NRC vs Pak-ID Online)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-doc-seal" />
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                  Option A: Visiting a NADRA Registration Center (NRC)
                </h3>
              </div>
              <ol className="text-xs text-slate-600 dark:text-slate-300 space-y-2 list-decimal list-inside leading-relaxed font-sans">
                <li><strong>Token &amp; Data Entry:</strong> Visit your nearest NRC or 24/7 Mega Center, receive a queue token, and have your bio-data entered.</li>
                <li><strong>Photograph &amp; Biometrics:</strong> Staff captures high-resolution digital photo, 10-fingerprint scans, and digital signature.</li>
                <li><strong>Family Attestation:</strong> Accompanying blood relative (parent/sibling) provides live biometric attestation.</li>
                <li><strong>Receipt &amp; Tracking ID:</strong> Receive a printed form with an 11-digit Tracking ID to monitor status via 8400 SMS.</li>
              </ol>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-emerald-600" />
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                  Option B: Pak-ID Mobile App / Online Portal
                </h3>
              </div>
              <ol className="text-xs text-slate-600 dark:text-slate-300 space-y-2 list-decimal list-inside leading-relaxed font-sans">
                <li><strong>Account Login:</strong> Sign in at <a href="https://id.nadra.gov.pk" target="_blank" rel="noopener noreferrer" className="text-doc-seal underline font-mono">id.nadra.gov.pk</a> or download the Pak-ID app.</li>
                <li><strong>Photograph &amp; Fingerprints:</strong> Use your smartphone camera to capture ICAO-compliant passport photo and fingerprint scans.</li>
                <li><strong>Digital Payment:</strong> Pay the statutory fee using any debit/credit card or mobile banking app.</li>
                <li><strong>Home Delivery:</strong> Your renewed or modified Smart CNIC is dispatched via registered Pakistan Post or TCS courier.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step CNIC Application & Renewal Process (NADRA 2026)"
          titleUr="نادرا شناختی کارڈ بنوانے اور تجدید کا 4 مرحلہ وار طریقہ"
          subtitleEn="From token issuance to live blood relative attestation and home delivery tracking"
          subtitleUr="ٹوکن حاصل کرنے سے لے کر فنگر پرنٹس، تصدیق اور ہوم ڈلیوری تک کے مراحل"
          steps={[
            {
              number: 1,
              titleEn: "Token & Bio-Data Entry",
              titleUr: "ٹوکن اور معلومات کا اندراج",
              descEn: "Visit NRC / Mega Center or log into Pak-ID mobile app; submit original birth certificate or previous CNIC.",
              descUr: "نادرا سینٹر جائیں یا پاک آئی ڈی ایپ پر لاگ ان کر کے پیدائش کا سرٹیفکیٹ یا پرانا شناختی کارڈ درج کریں۔",
              tagEn: "Token / Portal",
              tagUr: "ٹوکن کا اجراء",
            },
            {
              number: 2,
              titleEn: "Biometrics, Photo & Signature",
              titleUr: "تصویر، بائیومیٹرک اور دستخط",
              descEn: "Capture digital photograph, 10-fingerprint scans, and signature via electronic signature pad or phone camera.",
              descUr: "ڈیجیٹل کیمرے سے تصویر، 10 انگلیوں کے فنگر پرنٹس اور ڈیجیٹل پیڈ پر اپنے دستخط ثبت کریں۔",
              tagEn: "Biometrics",
              tagUr: "فنگر پرنٹس",
            },
            {
              number: 3,
              titleEn: "Live Family Link Attestation",
              titleUr: "خونی رشتے دار کی بائیومیٹرک تصدیق",
              descEn: "Parent, spouse, or sibling provides live biometric verification to confirm legitimate family tree linkage.",
              descUr: "والد، والدہ، بہن یا بھائی نادرا سسٹم پر بائیومیٹرک انگوٹھا لگا کر خاندانی شجرے کی تصدیق کرتے ہیں۔",
              tagEn: "Attestation",
              tagUr: "خاندانی تصدیق",
            },
            {
              number: 4,
              titleEn: "8400 SMS Tracking & Delivery",
              titleUr: "8400 ایس ایم ایس ٹریکنگ اور وصولی",
              descEn: "Track 11-digit Tracking ID via 8400 SMS or online; collect printed card from NRC or receive via courier.",
              descUr: "اپنے ٹریکنگ آئی ڈی کو 8400 پر ایس ایم ایس کر کے اسٹیٹس چیک کریں یا بذریعہ ڈاک کارڈ وصول کریں۔",
              tagEn: "Card Issued",
              tagUr: "کارڈ کی ترسیل",
            },
          ]}
        />

        {/* Section 4: Related Tools & Navigators */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related NADRA Civic Guides &amp; Verification Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/nadra/b-form-frc-status-check"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Family Verification</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                B-Form &amp; FRC Status Check →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Verify family tree records and juvenile birth registration.</p>
            </Link>

            <Link
              href="/nadra/nicop-fee-calculator"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Overseas Pakistanis</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Smart NICOP Fee Calculator 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Calculate Zone A &amp; Zone B foreign currency fee tiers.</p>
            </Link>

            <Link
              href="/legal/succession-certificate-legal-heir-nadra-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Legal Inheritance</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Succession Certificate Guide 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Claim bank accounts and assets under 2025 Amendment Act.</p>
            </Link>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (CNIC Rules 2026)"
          titleUr="نادرا شناختی کارڈ قوانین 2026 سے متعلق اہم سوالات"
          subtitleEn="Essential guidelines on free first-time CNIC, mobile biometric linkage, birth facilitation, and online renewals"
          subtitleUr="پہلی بار مفت شناختی کارڈ، سم بائیومیٹرک تصدیق، برتھ سرٹیفکیٹ رعایت اور پاک آئی ڈی تجدید کی مکمل تفصیل"
          items={[
            {
              questionEn: "Is the first-time CNIC completely free in 2026?",
              questionUr: "کیا 2026 میں پہلی بار شناختی کارڈ بنوانا بالکل مفت ہے؟",
              answerEn: "Yes. Under official NADRA policy and Ministry of Interior directives, any Pakistani citizen applying for their first CNIC upon reaching the age of 18 is exempt from standard processing fees under the Normal delivery category (Rs. 0). If the applicant opts for Urgent or Executive processing, standard expedited charges apply.",
              answerUr: "جی ہاں! 18 سال کی عمر میں پہلی بار شناختی کارڈ بنوانے والے تمام پاکستانی شہریوں کے لیے نارمل کیٹیگری کی فیس بالکل صفر (مفت) ہے۔ اگر آپ ارجنٹ یا ایگزیکٹو کارڈ بنوانا چاہتے ہیں تو متعلقہ فیس ادا کرنا ہوگی۔",
            },
            {
              questionEn: "What happens if my mobile number is not registered against my own CNIC?",
              questionUr: "اگر موبائل سم میرے اپنے شناختی کارڈ پر رجسٹرڈ نہ ہو تو کیا مسئلہ ہوگا؟",
              answerEn: "NADRA now strictly requires a biometric mobile number registered under the applicant’s own CNIC for all identity verifications and online Pak-ID transactions. If the number belongs to someone else, one-time passwords (OTP) and identity security alerts will fail. For minors applying for juvenile cards/B-Form, a parent’s registered number is mandatory.",
              answerUr: "نادرا نے سیکیورٹی کے لیے لازمی قرار دیا ہے کہ سم درخواست گزار کے اپنے شناختی کارڈ پر رجسٹرڈ ہو۔ کسی دوسرے کی سم پر او ٹی پی کوڈ اور نادرا ویریفکیشن مکمل نہیں ہو سکے گی۔",
            },
            {
              questionEn: "What is the temporary birth certificate facilitation valid until December 31, 2026?",
              questionUr: "برتھ سرٹیفکیٹ کے بغیر شناختی کارڈ بنوانے کی کیا رعایت دی گئی ہے؟",
              answerEn: "To assist citizens in rural and underserved areas who face bureaucratic hurdles obtaining computerized Union Council birth certificates, NADRA allows first-time applicants aged 18+ to apply with physical birth documentation or school certificates, provided they are accompanied by a blood relative (parent or sibling) for live biometric family linkage verification.",
              answerUr: "یونین کونسل کے کمپیوٹرائزڈ برتھ سرٹیفکیٹ میں تاخیر کی صورت میں شہری اسکول سرٹیفکیٹ یا مینوئل پرچی کے ساتھ خونی رشتے دار کو ہمراہ لا کر بائیومیٹرک تصدیق سے شناختی کارڈ بنوا سکتے ہیں۔",
            },
            {
              questionEn: "What is the difference between a standard CNIC and a Smart CNIC (SNIC)?",
              questionUr: "عام شناختی کارڈ اور چپ والے اسمارٹ کارڈ میں کیا فرق ہے؟",
              answerEn: "A standard CNIC is a printed magnetic stripe card, while a Smart CNIC (SNIC) features an embedded microchip containing encrypted biometric data, photograph, and digital identity keys. NADRA strongly encourages Smart CNIC adoption (Normal fee: PKR 750) because it resists physical tampering, enables contactless authentication, and integrates seamlessly with international travel and banking security standards.",
              answerUr: "عام کارڈ سادہ پرنٹڈ کارڈ ہوتا ہے جبکہ اسمارٹ کارڈ میں جدید مائیکرو چپ لگی ہوتی ہے جس میں انکرپٹڈ ڈیٹا اور فنگر پرنٹس محفوظ ہوتے ہیں، جو کہ بین الاقوامی سیکیورٹی اور بینکنگ کے لیے زیادہ محفوظ ہے۔",
            },
            {
              questionEn: "Can I renew an expired CNIC online without visiting a NADRA center?",
              questionUr: "کیا نادرا سینٹر جائے بغیر گھر بیٹھے میعاد ختم ہونے والا شناختی کارڈ رینیو ہو سکتا ہے؟",
              answerEn: "Yes. Citizens can renew their expired CNIC, request a duplicate, or modify marital status/address entirely online through the official Pak-ID portal (id.nadra.gov.pk) or the Pak-ID mobile app with fingerprint capture via smartphone camera and home courier delivery.",
              answerUr: "جی ہاں! پاک آئی ڈی پورٹل یا پاک آئی ڈی موبائل ایپ کے ذریعے آپ اپنے اسمارٹ فون کے کیمرے سے فنگر پرنٹس اسکین کر کے شناختی کارڈ کی تجدید کروا سکتے ہیں اور کارڈ بذریعہ ڈاک گھر منگوا سکتے ہیں۔",
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Official NADRA Corporate Portal', url: 'https://www.nadra.gov.pk/' },
            { label: 'Pak Identity (Pak-ID) Digital Services', url: 'https://id.nadra.gov.pk/' },
            { label: 'Ministry of Interior Government of Pakistan Directives', url: 'https://interior.gov.pk/' },
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
