import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { HelpCircle, ExternalLink, Smartphone, ShieldCheck, CheckCircle2, AlertTriangle, MessageSquare, PhoneCall, Search } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PTA Mobile IMEI Check: How to Check if Mobile is PTA Approved Online (8484) | Pakistan Info Hub',
  description:
    'PTA mobile IMEI check online 2026: Learn how to check if mobile is PTA approved via free SMS to 8484, dial *#06# to find your 15-digit IMEI, use official portal dirbs.pta.gov.pk, and verify Compliant vs Blocked status before buying any phone.',
  keywords: [
    'pta mobile imei check',
    'how to check mobile pta approved',
    'how to check pta approved mobile',
    'pta mobile registration online check',
    'dirbs pta gov pk imei check online',
    'how to check stolen phone imei pakistan',
    'verify pta approval 8484 sms free',
  ],
  openGraph: {
    title: 'PTA Mobile IMEI Check: How to Check if Mobile is PTA Approved Online (8484)',
    description:
      'Step-by-step verification guide and 15-digit IMEI helper to check PTA device registration, compliant status, and 8484 SMS service.',
    url: 'https://www.pakistaninfohub.com/mobile-pta/pta-mobile-imei-check',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/mobile-pta/pta-mobile-imei-check' },
};

const PtaImeiStatusChecker = dynamic(
  () => import('@/components/PtaImeiStatusChecker').then((m) => ({ default: m.PtaImeiStatusChecker })),
  { ssr: false, loading: () => <div className="h-[480px] rounded-3xl bg-slate-100 dark:bg-slate-800 animate-pulse" /> }
);

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
          name: 'PTA Mobile IMEI Check',
          item: 'https://www.pakistaninfohub.com/mobile-pta/pta-mobile-imei-check',
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'PTA Mobile IMEI Check & Device Verification Helper 2026',
      description:
        'Guided verification helper for formatting and checking mobile phone IMEI registration status on PTA DIRBS portal and SMS shortcode 8484.',
      url: 'https://www.pakistaninfohub.com/mobile-pta/pta-mobile-imei-check',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I check if my mobile is PTA approved?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To check if your mobile is PTA approved: Dial *#06# on your device keypad to view your 15-digit IMEI number, then send the 15 digits via free SMS to 8484 from any Pakistani SIM card. You will receive an immediate reply confirming whether the phone is Compliant (Approved), Non-Compliant, or Blocked.',
          },
        },
        {
          '@type': 'Question',
          name: 'How to check PTA approved mobile online through DIRBS website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Visit the official PTA DIRBS web portal at dirbs.pta.gov.pk, enter your 15-digit IMEI number into the search field, solve the security CAPTCHA, and click Verify. The system will display the exact brand, model, and registration status of the device.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the 8484 SMS IMEI check service free of cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Checking your mobile IMEI by sending an SMS to 8484 is 100% free of charge across all mobile networks in Pakistan (Jazz, Zong, Telenor, Ufone).',
          },
        },
        {
          '@type': 'Question',
          name: 'What does "Device IMEI is Valid (Non-Compliant)" mean?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non-Compliant means your mobile phone hardware is genuine GSMA standard, but PTA customs duty has not been paid. PTA grants a 60-day grace period from the date of first SIM insertion to pay the tax before the phone is disconnected.',
          },
        },
      ],
    },
  ],
};

export default function PtaMobileImeiCheckOnlinePage() {
  const breadcrumbs = [
    { nameEn: 'Mobile & PTA Services', nameUr: 'موبائل و پی ٹی اے سروسز' },
    { nameEn: 'PTA Mobile IMEI Check', nameUr: 'پی ٹی اے آئی ایم ای آئی تصدیق 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="PTA DIRBS IMEI CHECK" labelUr="آئی ایم ای آئی تصدیق" variant="seal" />
            <VerifiedBadge textEn="DIRBS & 8484 VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            PTA Mobile IMEI Check: How to Check if Mobile is PTA Approved Online
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              موبائل فون پی ٹی اے تصدیق چیک کرنے کا طریقہ، 8484 ایس ایم ایس اور چوری شدہ فونز کی جانچ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Verify whether any mobile phone is officially PTA Approved, Non-Compliant, or Blocked before purchasing.
            Check your 15-digit IMEI code via free SMS to 8484, dial *#06#, or access the official PTA DIRBS web verification gateway.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How Do You Check if a Mobile Phone is PTA Approved in Pakistan?"
          topicTitleUr="پاکستان میں موبائل فون کی پی ٹی اے رجسٹریشن کیسے معلوم کریں؟"
          answerEn="To check if your mobile is PTA approved: Dial *#06# to get your 15-digit IMEI, then send the 15 digits via free SMS to 8484 from any Pakistani SIM card. You will immediately receive a reply confirming if the device is Compliant (Approved), Non-Compliant (Tax Pending), or Blocked."
          answerUr="فون کا اسٹیٹس معلوم کرنے کے لیے *#06# ڈائل کر کے 15 ہندسوں کا آئی ایم ای آئی نمبر حاصل کریں، پھر اسے 8484 پر مفت ایس ایم ایس بھیجیں۔ پی ٹی اے فوری تصدیق کرے گا کہ فون منظور شدہ ہے، غیر رجسٹرڈ ہے یا بلاک ہے۔"
        />

        {/* Interactive Helper Mount */}
        <PtaImeiStatusChecker />

        {/* Section 1: 3 Official Ways to Check Device IMEI */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              3 Official Methods for PTA Mobile Registration Online Check
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">SMS to Shortcode 8484</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Send only the 15-digit IMEI to <strong>8484</strong>. Works 24/7 on all Pakistani telecom operators without requiring internet connection.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">DIRBS Web Portal</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Visit <code>dirbs.pta.gov.pk</code>, enter your IMEI, solve the security CAPTCHA, and view full model specifications and compliance status.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">PTA DVS Android App</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Download the official <strong>PTA Device Verification System (DVS)</strong> app from Google Play Store to scan barcodes directly from phone retail boxes.
              </p>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 2: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related PTA &amp; Mobile Services on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/mobile-pta/pta-mobile-registration-guide-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Registration Guide</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                PTA Mobile Registration Guide 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Complete step-by-step guide to registering your phone with PTA.</p>
            </Link>

            <Link
              href="/mobile-pta/pta-mobile-tax-check-online"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Tax Estimator</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                PTA Mobile Tax Check Online →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Compare Passport vs CNIC duty rates across all phone models.</p>
            </Link>

            <Link
              href="/mobile-pta/sim-information-system-guide"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">SIM Check</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                PTA SIM Information System (*8888#) →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check total registered SIMs and biometric limits on your CNIC.</p>
            </Link>
          </div>
        </section>

        {/* Section 3: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (IMEI &amp; PTA Approval Check)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'How do I check if my mobile is PTA approved?',
                a: 'To check if your mobile is PTA approved: Dial *#06# on your device keypad to view your 15-digit IMEI number, then send the 15 digits via free SMS to 8484 from any Pakistani SIM card. You will receive an immediate reply confirming whether the phone is Compliant (Approved), Non-Compliant, or Blocked.',
              },
              {
                q: 'How to check PTA approved mobile online through DIRBS website?',
                a: 'Visit the official PTA DIRBS web portal at dirbs.pta.gov.pk, enter your 15-digit IMEI number into the search field, solve the security CAPTCHA, and click Verify. The system will display the exact brand, model, and registration status of the device.',
              },
              {
                q: 'Is the 8484 SMS IMEI check service free of cost?',
                a: 'Yes. Checking your mobile IMEI by sending an SMS to 8484 is 100% free of charge across all mobile networks in Pakistan (Jazz, Zong, Telenor, Ufone).',
              },
              {
                q: 'What does "Device IMEI is Valid (Non-Compliant)" mean?',
                a: 'Non-Compliant means your mobile phone hardware is genuine GSMA standard, but PTA customs duty has not been paid. PTA grants a 60-day grace period from the date of first SIM insertion to pay the tax before the phone is disconnected.',
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
            { label: 'Pakistan Telecommunication Authority (PTA) Consumer Support', url: 'https://pta.gov.pk/' },
            { label: 'Pakistan Telecom Re-organization Act 1996 (Section 29)', url: 'https://pakistancode.gov.pk/' },
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
