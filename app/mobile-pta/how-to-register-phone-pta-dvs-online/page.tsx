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
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Register Phone with PTA Online 2026: DVS App, PSID & Bank Payment | Pakistan Info Hub',
  description:
    'Step-by-step guide on how to register imported mobile phones with PTA DIRBS in Pakistan: How to generate 17-digit PSID code online, pay customs tax via mobile banking apps/1Link/ATM, and unblock devices within 24 hours.',
  keywords: [
    'how to register mobile phone PTA online 2026',
    'generate PTA PSID code dirbs pta gov pk',
    'pay PTA tax online 1Link banking app',
    'how long does PTA take to unblock phone after payment',
    'PTA DVS app registration guide',
    'register dual SIM phone with PTA',
  ],
  openGraph: {
    title: 'How to Register Phone with PTA Online 2026: DVS App, PSID & Bank Payment',
    description:
      'Complete procedural walkthrough to register imported smartphones with PTA DIRBS, generate PSID codes, and pay customs duty.',
    url: 'https://www.pakistaninfohub.com/mobile-pta/how-to-register-phone-pta-dvs-online',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/mobile-pta/how-to-register-phone-pta-dvs-online' },
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
          name: 'How to Register Phone with PTA Online',
          item: 'https://www.pakistaninfohub.com/mobile-pta/how-to-register-phone-pta-dvs-online',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'How to Register an Imported Phone with PTA DIRBS Online in 2026',
      description:
        'A comprehensive procedural guide for registering smartphones in Pakistan, generating 17-digit PSID payment vouchers, and restoring cellular network connectivity.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/mobile-pta/how-to-register-phone-pta-dvs-online',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does PTA take to unblock a mobile phone after tax payment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Once the PSID is paid through 1Link (online banking, ATM, or bank counter), the FBR system automatically reconciles the payment and sends a clearance signal to PTA DIRBS. Cellular network connectivity is typically restored within 2 to 24 hours.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I register a Dual-SIM phone with PTA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When creating your application on dirbs.pta.gov.pk, select "Dual SIM" and enter both IMEI 1 and IMEI 2. PTA will generate a single consolidated PSID tax code covering both SIM slots under one customs assessment.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I pay PTA tax in installments?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Official government PTA customs duty must be paid in a single lump-sum PSID payment. However, several Pakistani commercial banks (e.g. Bank Alfalah, Silkbank, Faysal Bank) offer installment credit card plans for PTA tax payments.',
          },
        },
      ],
    },
  ],
};

export default function HowToRegisterPhonePtaOnlinePage() {
  const breadcrumbs = [
    { nameEn: 'Mobile & PTA Services', nameUr: 'موبائل و پی ٹی اے سروسز' },
    { nameEn: 'Register Phone Online', nameUr: 'فون آن لائن رجسٹر کرنے کا طریقہ 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="PTA DIRBS REGISTRATION" labelUr="آن لائن ڈیوائس رجسٹریشن" variant="seal" />
            <VerifiedBadge textEn="FBR & DIRBS PAYMENT COMPLIANT" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            How to Register Phone with PTA Online 2026: DVS App, PSID &amp; Bank Payment
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پی ٹی اے ڈیوائس آن لائن رجسٹریشن، پی ایس آئی ڈی (PSID) جنریشن اور بینک ادائیگی گائیڈ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            A comprehensive procedural guide on how to register imported mobile phones with PTA DIRBS in Pakistan.
            Generate your official 17-digit PSID payment voucher online, pay through any mobile banking app or ATM,
            and unblock cellular network connectivity within 24 hours.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How Do You Register an Imported Phone with PTA and Pay the Tax in Pakistan?"
          topicTitleUr="پاکستان میں امپورٹڈ فون پی ٹی اے سے رجسٹر اور ٹیکس کیسے ادا کریں؟"
          answerEn="To register your phone: (1) Go to dirbs.pta.gov.pk and create an account using your CNIC/Passport, (2) Enter your 15-digit IMEI number(s) to generate a 17-digit PSID payment code, and (3) Pay the tax via any online banking app under 1Link FBR/GOP Tax Payments. Network service activates within 24 hours."
          answerUr="فون رجسٹر کرنے کے لیے: (1) سرکاری پورٹل (dirbs.pta.gov.pk) پر لاگ ان کریں، (2) آئی ایم ای آئی نمبر درج کر کے 17 ہندسوں کا PSID چالان بنائیں، اور (3) کسی بھی بینکنگ ایپ یا اے ٹی ایم سے ون لنک کے ذریعے فیس ادا کریں۔ 24 گھنٹے میں فون ایکٹیو ہو جائے گا۔"
        />

        {/* Section 1: 4-Stage Step-by-Step Walkthrough */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              The 4-Step Registration &amp; Activation Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Create DIRBS Account</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Visit <code>dirbs.pta.gov.pk</code> and select &quot;Individual / Commercial Registration&quot;. Sign up with your CNIC, email, and mobile number.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Submit Device IMEIs</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Choose registration type (Passport for travelers or CNIC for residents). Enter 15-digit IMEI 1 and IMEI 2 (for dual-SIM phones).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Generate 17-Digit PSID</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The FBR Customs engine automatically calculates total duty and sends a 17-digit PSID voucher to your SMS and email with 30 days validity.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs">4</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Pay via 1Link &amp; Activate</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Pay via 1Link / GOP tax bill payment on banking apps, ATM, or Easypaisa/JazzCash. Device activates on all Pakistani networks within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: How to Pay PSID */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <CreditCard className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              How to Pay the PTA PSID Code Online &amp; Offline
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="font-bold text-doc-ink dark:text-white block">1. Mobile Banking Apps</span>
              <p className="text-slate-600 dark:text-slate-300">Open your bank app (HBL, Meezan, UBL, Alfalah, etc.), go to <strong>Bill Payments &gt; FBR / GOP Tax</strong>, enter your 17-digit PSID, and confirm payment.</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="font-bold text-doc-seal block">2. ATMs &amp; Over the Counter</span>
              <p className="text-slate-600 dark:text-slate-300">Insert your debit card at any 1Link ATM, select &quot;1Bill / Tax Payment&quot;, or take your printed PSID slip to any commercial bank branch counter.</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="font-bold text-emerald-600 dark:text-emerald-400 block">3. JazzCash &amp; Easypaisa</span>
              <p className="text-slate-600 dark:text-slate-300">Navigate to <strong>Govt Taxes &gt; FBR Mobile Tax</strong>, enter the PSID, and pay directly from your mobile wallet balance.</p>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 3: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Mobile &amp; PTA Services on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/mobile-pta/tax-calculator-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Tax Estimator</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                PTA Mobile Tax Calculator 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check expected duty amount before generating your PSID.</p>
            </Link>

            <Link
              href="/mobile-pta/imei-check-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">IMEI Verification</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                PTA IMEI Status Check (8484) →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Verify if payment has been processed and device is compliant.</p>
            </Link>

            <Link
              href="/mobile-pta/overseas-temporary-registration-120-days-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Overseas Portal</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                120-Day Temporary Registration →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Tax-free temporary mobile registration for expatriates.</p>
            </Link>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (PTA Phone Registration)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'How long does PTA take to unblock a mobile phone after tax payment?',
                a: 'Once the PSID is paid through 1Link (online banking, ATM, or bank counter), the FBR system automatically reconciles the payment and sends a clearance signal to PTA DIRBS. Cellular network connectivity is typically restored within 2 to 24 hours.',
              },
              {
                q: 'How do I register a Dual-SIM phone with PTA?',
                a: 'When creating your application on dirbs.pta.gov.pk, select "Dual SIM" and enter both IMEI 1 and IMEI 2. PTA will generate a single consolidated PSID tax code covering both SIM slots under one customs assessment.',
              },
              {
                q: 'Can I pay PTA tax in installments?',
                a: 'Official government PTA customs duty must be paid in a single lump-sum PSID payment. However, several Pakistani commercial banks (e.g. Bank Alfalah, Silkbank, Faysal Bank) offer installment credit card plans for PTA tax payments.',
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
            { label: 'Federal Board of Revenue (FBR) e-Payment System', url: 'https://e.fbr.gov.pk/' },
            { label: '1Link Bill Payment Gateway', url: 'https://1link.net.pk/' },
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
