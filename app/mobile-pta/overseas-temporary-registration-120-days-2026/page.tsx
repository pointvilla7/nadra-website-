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
  Plane,
  Clock,
  Coins,
  ArrowRight,
  Smartphone,
  Globe,
  FileCheck,
  AlertCircle,
  QrCode,
  UserCheck
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '120-Day Temporary PTA Mobile Registration 2026: Overseas Pakistanis & Tourists | Pakistan Info Hub',
  description:
    'Complete guide to PTA Temporary Mobile Registration System (TTRS) for overseas Pakistanis and foreign tourists: How to register your personal phone 100% tax-free for up to 120 days per visit via dirbs.pta.gov.pk/ttrs with passport and arrival details.',
  keywords: [
    '120 days temporary PTA mobile registration overseas Pakistanis',
    'TTRS PTA portal dirbs pta gov pk ttrs',
    'temporary phone registration tourist Pakistan tax free',
    'PTA mobile registration for overseas Pakistanis 2026',
    'how to register foreign phone during vacation Pakistan',
  ],
  openGraph: {
    title: '120-Day Temporary PTA Mobile Registration 2026: Overseas Pakistanis & Tourists',
    description:
      'Step-by-step roadmap to temporary 120-day tax-free mobile phone registration in Pakistan for expatriates and international visitors.',
    url: 'https://www.pakistaninfohub.com/mobile-pta/overseas-temporary-registration-120-days-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/mobile-pta/overseas-temporary-registration-120-days-2026' },
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
          name: '120-Day Temporary Mobile Registration',
          item: 'https://www.pakistaninfohub.com/mobile-pta/overseas-temporary-registration-120-days-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: '120-Day Temporary PTA Mobile Registration: Tax-Free TTRS Guide for Overseas Pakistanis and Tourists',
      description:
        'A comprehensive civic guide explaining how expatriates and foreign travelers visiting Pakistan can use their personal smartphones for up to 120 days without paying customs duty or PTA taxes.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/mobile-pta/overseas-temporary-registration-120-days-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can Overseas Pakistanis use their phone in Pakistan without paying PTA tax?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Overseas Pakistanis, NICOP holders, and foreign tourists can register their mobile phone for up to 120 days tax-free per visit through PTA’s Temporary Mobile Registration System (TTRS) at dirbs.pta.gov.pk/ttrs upon arrival.',
          },
        },
        {
          '@type': 'Question',
          name: 'What documents are required for 120-day temporary registration on TTRS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You will need: (1) Valid foreign passport and entry immigration stamp / date of arrival in Pakistan, (2) National ID (CNIC or NICOP), (3) Active Pakistani SIM registered in your name, and (4) 15-digit IMEI number(s) of your device obtained by dialing *#06#.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I apply for the 120-day tax-free registration on subsequent visits to Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The 120-day temporary registration facility is available on every trip/visit to Pakistan, provided the applicant has fresh international arrival stamps verified against FIA immigration records.',
          },
        },
      ],
    },
  ],
};

export default function OverseasTemporaryPtaRegistrationPage() {
  const breadcrumbs = [
    { nameEn: 'Mobile & PTA Services', nameUr: 'موبائل و پی ٹی اے سروسز' },
    { nameEn: '120-Day Temporary Registration', nameUr: 'اوورسیز 120 دن عارضی رجسٹریشن 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="PTA TTRS FOR OVERSEAS" labelUr="اوورسیز عارضی رجسٹریشن" variant="seal" />
            <VerifiedBadge textEn="DIRBS TTRS COMPLIANT" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            120-Day Temporary PTA Mobile Registration 2026: Overseas &amp; Tourists
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              اوورسیز پاکستانیوں اور غیر ملکی سیاحوں کے لیے 120 دن کی مفت عارضی موبائل رجسٹریشن
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            A practical guide for expatriate Pakistanis, NICOP holders, and tourists visiting Pakistan.
            Learn how to use your personal smartphone on local cellular networks for up to 120 days completely tax-free
            using the official PTA Temporary Mobile Registration System (TTRS).
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="Can Overseas Pakistanis Register Their Phones Tax-Free for 120 Days in Pakistan?"
          topicTitleUr="کیا اوورسیز پاکستانی 120 دن کے لیے بغیر ٹیکس فون رجسٹر کروا سکتے ہیں؟"
          answerEn="Yes. PTA offers a 100% tax-free Temporary Mobile Registration System (TTRS) for overseas Pakistanis and tourists visiting Pakistan. By submitting your passport, immigration arrival date, and local SIM number at dirbs.pta.gov.pk/ttrs, your device is activated on local cellular networks for up to 120 days per visit."
          answerUr="جی ہاں! پی ٹی اے عارضی موبائل رجسٹریشن پورٹل (TTRS) کے تحت اوورسیز پاکستانی اور غیر ملکی سیاح بغیر کسی ٹیکس کے 120 دن تک اپنا ذاتی فون استعمال کر سکتے ہیں۔ پاسپورٹ اور آمد کی تاریخ درج کر کے پورٹل (dirbs.pta.gov.pk/ttrs) سے مفت رجسٹریشن کروائیں۔"
        />

        {/* Section 1: 4-Step Registration Roadmap */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step: How to Apply on PTA TTRS Portal (dirbs.pta.gov.pk/ttrs)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Obtain Local SIM</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Purchase an active Pakistani SIM card (Jazz, Zong, Telenor, Ufone) registered biometrically on your CNIC, NICOP, or Foreign Passport.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Sign Up on TTRS</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Visit <code>dirbs.pta.gov.pk/ttrs</code> and create an account selecting &quot;Temporary Registration for Overseas Pakistani / Foreigner&quot;.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Enter Travel &amp; IMEI</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Enter your passport number, international arrival date (cross-verified via FIA immigration system), and 15-digit device IMEI(s).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs">4</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">120-Day Activation</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Receive OTP verification on your mobile. Your device is approved for 120 days with zero customs duty or tax liability.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Important Travel Rules */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Key Rules for Temporary Mobile Registration
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-2">
              <span className="font-bold text-doc-brass text-sm block">1. Tied to Your Personal Registered SIM</span>
              <p className="text-slate-300 leading-relaxed">
                The 120-day temporary registration binds the phone IMEI directly with the applicant&apos;s registered mobile number. Inserting an unregistered third-party SIM will not activate the temporary clearance.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-2">
              <span className="font-bold text-emerald-400 text-sm block">2. Automatic Deactivation After 120 Days</span>
              <p className="text-slate-300 leading-relaxed">
                Once the 120 days elapse, the device is deactivated for Pakistani cellular networks unless permanent customs duty is paid. The facility resets on your next international arrival in Pakistan.
              </p>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 3: Related Overseas Services */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Overseas Pakistanis Services on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/overseas/nicop-mandatory-entry-rules-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Overseas Identity</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NADRA Smart NICOP Travel Rules →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Mandatory visa-free entry rules for overseas Pakistanis.</p>
            </Link>

            <Link
              href="/mobile-pta/tax-calculator-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Tax Calculator</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Permanent PTA Mobile Tax Calculator →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Compare Passport vs CNIC rates if you plan to leave the phone in Pakistan.</p>
            </Link>

            <Link
              href="/legal/power-of-attorney-online-overseas-pakistanis-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Legal Services</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Digital Power of Attorney Online →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Attest legal documents online without visiting an embassy.</p>
            </Link>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (120-Day Temporary Registration)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Can Overseas Pakistanis use their phone in Pakistan without paying PTA tax?',
                a: 'Yes. Overseas Pakistanis, NICOP holders, and foreign tourists can register their mobile phone for up to 120 days tax-free per visit through PTA’s Temporary Mobile Registration System (TTRS) at dirbs.pta.gov.pk/ttrs upon arrival.',
              },
              {
                q: 'What documents are required for 120-day temporary registration on TTRS?',
                a: 'You will need: (1) Valid foreign passport and entry immigration stamp / date of arrival in Pakistan, (2) National ID (CNIC or NICOP), (3) Active Pakistani SIM registered in your name, and (4) 15-digit IMEI number(s) of your device obtained by dialing *#06#.',
              },
              {
                q: 'Can I apply for the 120-day tax-free registration on subsequent visits to Pakistan?',
                a: 'Yes. The 120-day temporary registration facility is available on every trip/visit to Pakistan, provided the applicant has fresh international arrival stamps verified against FIA immigration records.',
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
            { label: 'PTA Temporary Mobile Registration System (TTRS)', url: 'https://dirbs.pta.gov.pk/ttrs' },
            { label: 'Federal Board of Revenue (FBR) Baggage Rules for Overseas Pakistanis', url: 'https://fbr.gov.pk/' },
            { label: 'Federal Investigation Agency (FIA) Integrated Border Management System', url: 'https://fia.gov.pk/' },
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
