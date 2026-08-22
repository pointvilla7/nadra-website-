import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Smartphone,
  CreditCard,
  QrCode,
  ArrowRight,
  FileCheck,
  Building,
  AlertCircle,
  Calculator,
  Plane,
  Clock,
  Search,
  Download
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PTA Mobile Registration 2026: Complete Online Guide & DVS Portal | Pakistan Info Hub',
  description:
    'Complete guide to PTA mobile registration in Pakistan: How to register mobile with PTA online (DVS app & DIRBS portal), calculate customs tax, compare Passport vs CNIC rates, 120-day overseas temporary registration, and 60-day grace period rules.',
  keywords: [
    'pta mobile registration',
    'how to register mobile with pta',
    'how to pta approved mobile',
    'pta mobile registration online check',
    'pta mobile registration online free',
    'pta dirbs app download',
    'mobile service in pakistan',
    'register imported phone pta 2026',
  ],
  openGraph: {
    title: 'PTA Mobile Registration 2026: Complete Online Guide & DVS Portal',
    description:
      'Step-by-step roadmap to PTA mobile registration in Pakistan. Learn how to generate 17-digit PSID vouchers, pay customs duty via 1Link, and register phones on Passport vs CNIC.',
    url: 'https://www.pakistaninfohub.com/mobile-pta/pta-mobile-registration-guide-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/mobile-pta/pta-mobile-registration-guide-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Mobile & PTA Services', item: 'https://www.pakistaninfohub.com/mobile-pta' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'PTA Mobile Registration Guide 2026',
          item: 'https://www.pakistaninfohub.com/mobile-pta/pta-mobile-registration-guide-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'PTA Mobile Registration 2026: Complete Online Guide on How to Register Mobile with PTA',
      description:
        'A comprehensive civic manual on how to register imported mobile phones with PTA DIRBS in Pakistan, compare Passport vs CNIC registration, generate PSID codes, and understand the 60-day grace period.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/mobile-pta/pta-mobile-registration-guide-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I register my mobile with PTA in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To register your mobile with PTA: (1) Find your 15-digit IMEI by dialing *#06#, (2) Log in to the official DIRBS portal at dirbs.pta.gov.pk or use the PTA DVS app, (3) Submit your CNIC or Passport details with device IMEIs to generate a 17-digit PSID code, and (4) Pay the tax via any mobile banking app or ATM under 1Link FBR/GOP Tax Payments. Your device will be approved within 24 hours.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I do PTA mobile registration online free of cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PTA mobile registration is only free for Overseas Pakistanis and foreign tourists staying up to 120 days per visit via the Temporary Mobile Registration System (TTRS at dirbs.pta.gov.pk/ttrs). For local residents and permanent use, statutory FBR customs duties and taxes apply based on the phone’s USD valuation.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the grace period before an unregistered mobile phone gets blocked by PTA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When a local Pakistani SIM card is inserted into an unregistered device for the first time, PTA DIRBS grants a statutory 60-day grace period. If customs tax is not paid within 60 days, all local SIM signals are automatically blocked until payment is completed.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between registering on a Passport vs CNIC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Registering a phone on a valid Passport with recent international arrival immigration stamps qualifies for passenger baggage concessions with lower customs duty and reduced regulatory duty. Registering on a CNIC is classified as local commercial importation and carries higher regulatory duty and taxes.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I check if my mobile is already PTA approved?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dial *#06# to get your 15-digit IMEI number, then send it via free SMS to 8484 from any Pakistani SIM, or enter it online at dirbs.pta.gov.pk. You will instantly receive a response indicating Compliant (Approved), Non-Compliant, or Blocked.',
          },
        },
      ],
    },
  ],
};

export default function PtaMobileRegistrationGuidePage() {
  const breadcrumbs = [
    { nameEn: 'Mobile & PTA Services', nameUr: 'موبائل و پی ٹی اے سروسز' },
    { nameEn: 'PTA Mobile Registration Guide', nameUr: 'پی ٹی اے موبائل رجسٹریشن گائیڈ 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="PTA DIRBS REGISTRATION GUIDE" labelUr="پی ٹی اے رجسٹریشن گائیڈ" variant="seal" />
            <VerifiedBadge textEn="DIRBS & FBR COMPLIANT 2026" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            PTA Mobile Registration 2026: Complete Online Guide
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پی ٹی اے موبائل رجسٹریشن، آن لائن ڈی وی ایس پورٹل اور فیس ادائیگی کا مکمل طریقہ کار
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            The definitive walkthrough on <strong>how to register mobile with PTA</strong> in Pakistan.
            Learn how the Device Identification, Registration and Blocking System (DIRBS) works, generate 17-digit PSID payment codes,
            compare Passport vs CNIC rates, claim 120-day tax-free registration for overseas visitors, and avoid network blocking.
          </p>
        </header>

        {/* Direct Answer Box (AEO / Featured Snippet Optimized) */}
        <DirectAnswerBox
          topicTitleEn="How Do You Register an Imported Mobile Phone with PTA in Pakistan?"
          topicTitleUr="پاکستان میں امپورٹڈ موبائل فون پی ٹی اے سے رجسٹر کیسے کروائیں؟"
          answerEn="To register your mobile with PTA: Dial *#06# to get your 15-digit IMEI, log into the official DIRBS portal at dirbs.pta.gov.pk, enter your CNIC or Passport details to generate a 17-digit PSID code, and pay the tax through any mobile banking app or ATM under 1Link FBR/GOP Tax Payments. Your device is approved within 24 hours."
          answerUr="فون رجسٹر کرنے کے لیے: *#06# ملا کر آئی ایم ای آئی حاصل کریں، سرکاری پورٹل (dirbs.pta.gov.pk) پر لاگ ان کر کے پاسپورٹ یا شناختی کارڈ پر 17 ہندسوں کا PSID چالان بنائیں، اور کسی بھی بینکنگ ایپ سے ون لنک کے ذریعے فیس ادا کریں۔ 24 گھنٹے میں فون فعال ہو جائے گا۔"
        />

        {/* Quick Action Navigation Buttons (Linking to Tax Calculator & IMEI Check) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/mobile-pta/pta-mobile-tax-check-online"
            className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 hover:border-doc-brass transition group flex items-center justify-between shadow-lg"
          >
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-doc-brass uppercase flex items-center gap-1.5">
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>Calculate Your Tax First</span>
              </span>
              <h2 className="font-serif font-bold text-base text-white group-hover:text-doc-brass transition">
                PTA Mobile Tax Check &amp; Calculator 2026 →
              </h2>
              <p className="text-xs text-slate-300 font-sans">
                Check exact duty on iPhones, Samsung, and Android (Passport vs CNIC).
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-amber-400 shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/mobile-pta/pta-mobile-imei-check"
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-doc-seal transition group flex items-center justify-between shadow-sm"
          >
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-doc-seal uppercase flex items-center gap-1.5">
                <Search className="w-4 h-4 text-doc-seal" />
                <span>Verify Approval Status</span>
              </span>
              <h2 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                PTA Mobile IMEI Check (8484 SMS) →
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                Check if your device is Compliant, Non-Compliant, or Blocked.
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-doc-seal shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Section 1: What is PTA DIRBS Registration */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              What is PTA Mobile Registration (DIRBS)?
            </h2>
          </div>
          <div className="doc-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
            <p>
              The <strong>Device Identification, Registration and Blocking System (DIRBS)</strong> was established by the Pakistan Telecommunication Authority (PTA) under Section 29 of the Pakistan Telecommunication (Re-organization) Act 1996. It is designed to curtail illegal mobile smuggling, protect intellectual property, ensure counterfeit-free devices, and safeguard consumer security against phone theft and cloning.
            </p>
            <p>
              Every cellular mobile device (smartphones, feature phones, 4G Wi-Fi dongles, and tablets with SIM slots) connected to Pakistani telecom operators (Jazz, Zong, Telenor, Ufone) must be registered in the central DIRBS registry and cleared with Federal Board of Revenue (FBR) customs duty.
            </p>
          </div>
        </section>

        {/* Section 2: 3 Ways to Register Mobile with PTA */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              3 Methods to Register an Imported Phone with PTA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">DIRBS Web Portal Online</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Visit <code>dirbs.pta.gov.pk</code>, create an individual user account, submit your 15-digit IMEI(s), and generate an official 17-digit PSID voucher.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">PTA DVS Mobile App</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Download the official <strong>PTA Device Verification System (DVS)</strong> app on Android from Google Play Store to scan phone box barcodes and initiate verification.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Dial USSD *8484#</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Dial <strong>*8484#</strong> directly from your mobile keypad and follow the on-screen USSD prompts to register personal devices using your CNIC or Passport.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Passport vs CNIC Registration Differences */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <CreditCard className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Passport vs CNIC Registration: Which One Should You Choose?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 text-white space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-base text-emerald-400">Passport Registration (Traveler Rate)</span>
                <Plane className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-slate-300 leading-relaxed">
                Intended for international travelers and overseas Pakistanis returning with personal baggage. Qualifies for subsidized customs duty, reduced regulatory duty, and saves between <strong>Rs. 15,000 to Rs. 30,000</strong> compared to CNIC on flagship devices.
              </p>
              <span className="text-[11px] text-emerald-300 font-mono block">
                Requirement: Must have valid foreign entry immigration stamp within 60 days.
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-white space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-base text-amber-400">CNIC Registration (Local Resident Rate)</span>
                <CreditCard className="w-4 h-4 text-amber-400" />
              </div>
              <p className="text-slate-300 leading-relaxed">
                Standard route for local Pakistani residents who purchased an imported non-PTA device locally or do not possess recent international travel stamps. Subject to full standard FBR regulatory duty, sales tax, and mobile levy.
              </p>
              <span className="text-[11px] text-slate-400 font-mono block">
                Allowance: Up to 5 mobile devices can be registered per CNIC per calendar year.
              </span>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 4: 120-Day Temporary Registration for Overseas Visitors */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Plane className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              120-Day Free Temporary Registration for Overseas Pakistanis &amp; Tourists
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 text-xs font-sans">
            <div className="flex items-center gap-2 text-doc-seal font-bold text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>Temporary Mobile Registration System (TTRS) — 100% Tax-Free</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              If you are an expatriate Pakistani, NICOP holder, or foreign tourist visiting Pakistan on vacation, you <strong>do not need to pay permanent customs duty</strong>. PTA provides the TTRS portal allowing you to register and use your personal smartphone for up to 120 days completely tax-free per international trip.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/mobile-pta/overseas-temporary-registration-120-days-2026"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-doc-brass hover:underline"
              >
                <span>Read Full 120-Day Temporary Registration Guide (TTRS) →</span>
              </Link>
              <Link
                href="/overseas/nicop-mandatory-entry-rules-2026"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-doc-seal hover:underline"
              >
                <span>Cross-Check Overseas Pakistani Travel &amp; NICOP Rules →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 5: Step-by-Step Payment & Activation Workflow */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Timeline, 60-Day Grace Period &amp; PSID Payment Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-ink dark:text-white text-sm block">1. 60-Day Grace Period</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                From the exact day a Pakistani SIM is inserted into an unregistered device, you have a <strong>60-calendar-day timer</strong>. The phone operates normally during this window.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-seal text-sm block">2. Generate 17-Digit PSID</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Log into <code>dirbs.pta.gov.pk</code>, input IMEI 1 and IMEI 2 (for dual-SIM phones), and receive your official FBR PSID payment voucher with 30-day validity.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm block">3. Pay &amp; Unblock in 24h</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Pay the PSID via any banking app (1Link / GOP Tax Payments), ATM, or Easypaisa/JazzCash. FBR sends clearance to DIRBS, restoring network connectivity within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related PTA &amp; Civic Services on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/mobile-pta/pta-mobile-tax-check-online"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Tax Estimator</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                PTA Mobile Tax Check Online →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Instant duty calculation for iPhone 16/15, Samsung, and Android.</p>
            </Link>

            <Link
              href="/mobile-pta/pta-mobile-imei-check"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">IMEI Verification</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                PTA Mobile IMEI Check (8484) →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Verify device compliance before buying or paying customs duty.</p>
            </Link>

            <Link
              href="/mobile-pta/sim-information-system-guide"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">SIM Verification</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                PTA SIM Information System (*8888#) →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check total registered SIMs and biometric limits on your CNIC.</p>
            </Link>
          </div>
        </section>

        {/* Section 7: FAQs (Exact Question Keywords) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (PTA Mobile Registration)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'How do I register my mobile with PTA in Pakistan?',
                a: 'To register your mobile with PTA: (1) Find your 15-digit IMEI by dialing *#06#, (2) Log in to the official DIRBS portal at dirbs.pta.gov.pk or use the PTA DVS app, (3) Submit your CNIC or Passport details with device IMEIs to generate a 17-digit PSID code, and (4) Pay the tax via any mobile banking app or ATM under 1Link FBR/GOP Tax Payments. Your device will be approved within 24 hours.',
              },
              {
                q: 'Can I do PTA mobile registration online free of cost?',
                a: 'PTA mobile registration is only free for Overseas Pakistanis and foreign tourists staying up to 120 days per visit via the Temporary Mobile Registration System (TTRS at dirbs.pta.gov.pk/ttrs). For local residents and permanent use, statutory FBR customs duties and taxes apply based on the phone’s USD valuation.',
              },
              {
                q: 'What is the grace period before an unregistered mobile phone gets blocked by PTA?',
                a: 'When a local Pakistani SIM card is inserted into an unregistered device for the first time, PTA DIRBS grants a statutory 60-day grace period. If customs tax is not paid within 60 days, all local SIM signals are automatically blocked until payment is completed.',
              },
              {
                q: 'What is the difference between registering on a Passport vs CNIC?',
                a: 'Registering a phone on a valid Passport with recent international arrival immigration stamps qualifies for passenger baggage concessions with lower customs duty and reduced regulatory duty. Registering on a CNIC is classified as local commercial importation and carries higher regulatory duty and taxes.',
              },
              {
                q: 'How do I check if my mobile is already PTA approved?',
                a: 'Dial *#06# to get your 15-digit IMEI number, then send it via free SMS to 8484 from any Pakistani SIM, or enter it online at dirbs.pta.gov.pk. You will instantly receive a response indicating Compliant (Approved), Non-Compliant, or Blocked.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">{faq.q}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Statutory Sources Cited:</p>
          {[
            { label: 'PTA Device Identification, Registration and Blocking System (DIRBS)', url: 'https://dirbs.pta.gov.pk/' },
            { label: 'Pakistan Telecommunication Authority (PTA) Official Portal', url: 'https://pta.gov.pk/' },
            { label: 'Federal Board of Revenue (FBR) Baggage & Device Import Rules', url: 'https://fbr.gov.pk/' },
            { label: '1Link Official Bill Payment System', url: 'https://1link.net.pk/' },
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
