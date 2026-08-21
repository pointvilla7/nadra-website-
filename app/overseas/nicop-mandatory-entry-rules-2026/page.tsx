import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  HelpCircle,
  ExternalLink,
  Plane,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  Globe,
  CreditCard,
  FileX,
  FileCheck,
  ShieldAlert,
  AlertCircle,
  Building
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NICOP Mandatory Entry Rules 2026 – Overseas Pakistanis Foreign Passport Policy | Pakistan Info Hub',
  description:
    'Complete guide to Pakistan FIA mandatory NICOP entry rules in 2026: Valid unexpired NICOP required for foreign passport visa-free travel, airline denied boarding directives, renewal receipts discontinued, and quick eVisa alternatives.',
  keywords: [
    'NICOP mandatory foreign passport 2026',
    'Pakistan visa free entry foreign passport NICOP',
    'expired NICOP travel Pakistan airline boarding',
    'NICOP renewal receipt not accepted 2026',
    'FIA Pakistan immigration rules foreign passport',
    'overseas Pakistani visa on arrival landing permit',
    'British American Pakistani NICOP rules',
  ],
  openGraph: {
    title: 'NICOP Mandatory Entry Rules 2026 – Foreign Passport Travel Guide',
    description:
      'Urgent advisory for overseas Pakistanis traveling on foreign passports: Strict 2026 FIA rules on valid Smart NICOP, airline boarding checks, and eVisa solutions.',
    url: 'https://www.pakistaninfohub.com/overseas/nicop-mandatory-entry-rules-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/overseas/nicop-mandatory-entry-rules-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Overseas Pakistanis', item: 'https://www.pakistaninfohub.com/overseas' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Mandatory NICOP Entry Rules 2026',
          item: 'https://www.pakistaninfohub.com/overseas/nicop-mandatory-entry-rules-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'NICOP Mandatory Entry Rules 2026: Valid Card Requirement for Foreign Passport Holders & Airline Boarding Guide',
      description:
        'An authoritative advisory detailing the Federal Investigation Agency (FIA) border control rules, unexpired Smart NICOP mandates, airline boarding enforcement, and fast-track eVisa alternatives.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-20',
      dateModified: '2026-08-21',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/overseas/nicop-mandatory-entry-rules-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I travel to Pakistan visa-free if my NICOP is expired but I have a NADRA renewal receipt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Under the strictly enforced FIA border regulations, an online renewal receipt or application token is NO LONGER accepted as a valid substitute for an unexpired physical card. International airlines have been instructed to deny boarding at departure airports to passengers holding foreign passports without a valid, physically active NICOP or an approved Pakistani visa.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does this mandatory NICOP rule apply to people traveling on a Pakistani passport?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. If you hold a valid, unexpired Pakistani passport (Machine Readable Passport or e-Passport), you have an unconditional constitutional right to enter Pakistan regardless of the status of your NICOP or CNIC.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if my flight is in a few days and my NICOP is expired?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Do not attempt to fly with an expired NICOP or renewal token. Instead, apply immediately for an electronic Pakistani Tourist/Family Visit Visa online via the official Pakistan Online Visa System (visa.nadra.gov.pk). E-Visas are typically processed and issued within 24 to 48 hours and allow hassle-free airline boarding on your foreign passport.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does this rule target only British Pakistanis or all foreign passport holders?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The rule applies uniformly across all countries worldwide (UK, US, Canada, EU, Gulf States, Australia, etc.). Rumors circulating on social media claiming a specific ban on British Pakistanis are completely false; the regulation is a universal border compliance standard for anyone entering Pakistan on any foreign passport.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I get a 72-hour landing permit or visa-on-arrival at Pakistani airports without a valid NICOP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The previous discretionary practice of issuing emergency landing permits or waivers for expired cards has been discontinued. Because international airlines conduct strict document verification prior to boarding, you will not be allowed to board your outbound flight without a valid NICOP or pre-approved eVisa.',
          },
        },
      ],
    },
  ],
};

export default function NicopMandatoryEntryRulesPage() {
  const breadcrumbs = [
    { nameEn: 'Overseas Pakistanis', nameUr: 'اوورسیز پاکستانیز' },
    { nameEn: 'Mandatory NICOP Entry Rules 2026', nameUr: 'غیر ملکی پاسپورٹ پر نائیکوپ کی لازمی شرط' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="URGENT TRAVEL ADVISORY" labelUr="اہم سفری ہدایت نامہ" variant="gold" />
            <VerifiedBadge textEn="FIA & DGI&P ENFORCEMENT 2026" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            NICOP Mandatory Entry Rules 2026: Foreign Passport Travel Requirements
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              اوورسیز پاکستانیوں کے لیے نائیکوپ قوانین: غیر ملکی پاسپورٹ پر سفر کی شرائط
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Under recent Federal Investigation Agency (FIA) border control directives, overseas Pakistanis traveling on
            foreign passports (British, American, Canadian, Australian, EU, etc.) face strict enforcement: a valid, unexpired
            Smart NICOP or a valid Pakistani visa is mandatory to board international flights.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What Do I Need to Travel to Pakistan on a Foreign Passport Right Now?"
          topicTitleUr="غیر ملکی پاسپورٹ پر پاکستان سفر کے لیے کیا ضروری ہے؟"
          answerEn="You MUST have either: (1) A valid, unexpired physical Smart NICOP, OR (2) An approved Pakistani eVisa stamped/printed with your foreign passport. Airlines are instructed to DENY BOARDING if your NICOP is expired; renewal receipts and landing permits are NO LONGER accepted."
          answerUr="غیر ملکی پاسپورٹ پر سفر کرنے والے پاکستانیوں کے پاس لازمی طور پر: (1) اصل کارآمد اسمارٹ نائیکوپ (NICOP)، یا (2) منظور شدہ پاکستانی ای ویزا ہونا ضروری ہے۔ ایکسپائرڈ نائیکوپ یا رینیول رسید پر ائیرلائنز جہاز پر سوار نہیں ہونے دیں گی۔"
        />

        {/* URGENT HIGHLIGHT BANNER: Airline Denied Boarding Advisory */}
        <section className="p-6 rounded-2xl bg-gradient-to-r from-red-900 via-slate-900 to-doc-ink text-white border-2 border-red-500 shadow-2xl space-y-4">
          <div className="flex items-center gap-3 border-b border-red-500/30 pb-3">
            <ShieldAlert className="w-7 h-7 text-red-400 shrink-0 animate-pulse" />
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-red-300 uppercase">
                AIRLINE DEPARTURE PROTOCOL • CRITICAL NOTICE
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-white">
                Airlines Enforce Pre-Boarding Verification
              </h2>
            </div>
          </div>

          <div className="space-y-3 text-sm text-slate-200 leading-relaxed font-sans">
            <p>
              The most common point of confusion: travelers assume immigration checks only occur upon landing at Islamabad, Lahore, or Karachi.
              In reality, <strong>Pakistani immigration authorities issued direct compliance notices to international airlines</strong> (including Emirates, Qatar Airways, British Airways, Virgin Atlantic, Saudia, Gulf Air, and PIA).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-red-500/40 space-y-1">
                <span className="font-bold text-red-300 block">1. Check-In Gate Rejection</span>
                <p className="text-slate-300">
                  Airline counter staff at London Heathrow, JFK, Toronto, Dubai, etc., will inspect your physical NICOP validity before issuing boarding passes.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-red-500/40 space-y-1">
                <span className="font-bold text-red-300 block">2. Renewal Tokens Rejected</span>
                <p className="text-slate-300">
                  Paper printouts showing &quot;NICOP Renewal in Process&quot; or Pak-ID tracking slips are <strong>not valid travel documents</strong>.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-red-500/40 space-y-1">
                <span className="font-bold text-red-300 block">3. Heavy Airline Fines</span>
                <p className="text-slate-300">
                  Airlines face thousands of dollars in carrier fines and repatriation costs for transporting passengers with invalid documents, causing zero-tolerance gate enforcement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Addressing the Confusion (Old Guidance vs 2026 Enforcement) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Why Is There Confusion? Old Guidelines vs Current Enforcement
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Many overseas Pakistanis are caught off guard because older blog posts and legacy immigration notices
            indicated that an expired card plus a NADRA tracking slip was sufficient. Here is the definitive clarification:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 space-y-2 opacity-80">
              <span className="text-slate-500 font-bold uppercase font-mono text-[10px]">
                PREVIOUS / OUTDATED PRACTICE
              </span>
              <h3 className="font-serif font-bold text-sm text-slate-700 dark:text-slate-300">
                Discretionary Receipts &amp; Landing Permits
              </h3>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-400 list-disc list-inside">
                <li>Travelers occasionally boarded with expired cards and renewal slips.</li>
                <li>Immigration officers at Pakistani airports granted emergency landing waivers.</li>
                <li>Inconsistent enforcement across different international carriers.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700/60 space-y-2">
              <span className="text-emerald-700 dark:text-emerald-400 font-bold uppercase font-mono text-[10px]">
                CURRENT OFFICIAL ENFORCEMENT (2026)
              </span>
              <h3 className="font-serif font-bold text-sm text-emerald-900 dark:text-emerald-200">
                Strict Physical NICOP or eVisa Mandatory
              </h3>
              <ul className="space-y-1.5 text-emerald-950 dark:text-emerald-100 list-disc list-inside">
                <li><strong>No physical valid card = No boarding.</strong></li>
                <li>Digital tracking receipts or paper tokens strictly barred for travel.</li>
                <li>Uniform standard applied to British, US, Canadian, and European passports.</li>
              </ul>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 2: What to Do If Your Travel Is Imminent */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Emergency Action Plan: What to Do Based on Your Travel Date
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm">
                <CreditCard className="w-5 h-5" />
                <span>Scenario A: Travel is More Than 10–14 Days Away</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Apply immediately for an <strong>Executive Smart NICOP Renewal</strong> on the official Pak-ID portal (<code>id.nadra.gov.pk</code>).
                Executive processing delivers the physical card via DHL courier to your international address within 7 to 10 working days.
              </p>
              <Link
                href="/nadra/nicop-fee-calculator"
                className="inline-flex items-center gap-1 text-doc-seal font-bold hover:underline"
              >
                <span>Calculate Zone A/B Executive Fees →</span>
              </Link>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                <Globe className="w-5 h-5" />
                <span>Scenario B: Flight is in Less Than 7 Days (Fastest Fix)</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Do NOT wait for a physical NICOP. Apply for an <strong>Electronic Tourist / Family Visit Visa</strong> at <code>visa.nadra.gov.pk</code>.
                Pakistan eVisas for origin-Pakistan foreign citizens are typically approved and emailed within 24 to 48 hours, allowing instant boarding.
              </p>
              <a
                href="https://visa.nadra.gov.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-600 font-bold hover:underline"
              >
                <span>Apply on Pakistan Online Visa Portal →</span>
              </a>
            </div>
          </div>
        </section>

        {/* Section 3: Pre-Flight Checklist */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Pre-Flight Travel Checklist for Overseas Pakistanis
            </h2>
          </div>

          <div className="space-y-2.5 text-xs font-sans">
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Check Expiry Date:</strong> Ensure your Smart NICOP validity extends beyond your scheduled date of departure from Pakistan.
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Matching Names:</strong> Confirm that the name on your foreign passport corresponds with the name on your NICOP or visa.
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Physical Original Card:</strong> Pack the physical Smart NICOP in your hand carry. Digital smartphone photos or photocopies are rejected at airline counters.
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Children / Minors:</strong> Verify that minor children holding foreign passports possess their own individual valid Smart NICOPs or family visit visas.
              </span>
            </div>
          </div>
        </section>

        {/* Section 4: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Overseas &amp; Passport Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/passport/passport-new-rules-2026-cashless-epassport"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Passport Reforms</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Passport New Rules 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Cashless QR payments, 14-day delivery, and e-passports.</p>
            </Link>

            <Link
              href="/nadra/nicop-fee-calculator"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Fee Calculator</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NICOP Fee Calculator 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Calculate Zone A and Zone B renewal fees in USD/GBP/EUR.</p>
            </Link>

            <Link
              href="/overseas/nicop-renewal-from-abroad"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Step-by-Step Guide</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Renew NICOP from Abroad →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Pak-ID mobile app biometric fingerprint capture guide.</p>
            </Link>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Mandatory NICOP Rule)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Can I travel to Pakistan visa-free if my NICOP is expired but I have a NADRA renewal receipt?',
                a: 'No. Under the strictly enforced FIA border regulations, an online renewal receipt or application token is NO LONGER accepted as a valid substitute for an unexpired physical card. International airlines have been instructed to deny boarding at departure airports to passengers holding foreign passports without a valid, physically active NICOP or an approved Pakistani visa.',
              },
              {
                q: 'Does this mandatory NICOP rule apply to people traveling on a Pakistani passport?',
                a: 'No. If you hold a valid, unexpired Pakistani passport (Machine Readable Passport or e-Passport), you have an unconditional constitutional right to enter Pakistan regardless of the status of your NICOP or CNIC.',
              },
              {
                q: 'What should I do if my flight is in a few days and my NICOP is expired?',
                a: 'Do not attempt to fly with an expired NICOP or renewal token. Instead, apply immediately for an electronic Pakistani Tourist/Family Visit Visa online via the official Pakistan Online Visa System (visa.nadra.gov.pk). E-Visas are typically processed and issued within 24 to 48 hours and allow hassle-free airline boarding on your foreign passport.',
              },
              {
                q: 'Does this rule target only British Pakistanis or all foreign passport holders?',
                a: 'The rule applies uniformly across all countries worldwide (UK, US, Canada, EU, Gulf States, Australia, etc.). Rumors circulating on social media claiming a specific ban on British Pakistanis are completely false; the regulation is a universal border compliance standard for anyone entering Pakistan on any foreign passport.',
              },
              {
                q: 'Can I get a 72-hour landing permit or visa-on-arrival at Pakistani airports without a valid NICOP?',
                a: 'No. The previous discretionary practice of issuing emergency landing permits or waivers for expired cards has been discontinued. Because international airlines conduct strict document verification prior to boarding, you will not be allowed to board your outbound flight without a valid NICOP or pre-approved eVisa.',
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
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Federal Investigation Agency (FIA) Immigration Wing', url: 'https://fia.gov.pk/' },
            { label: 'Pakistan Online Visa System (POVS)', url: 'https://visa.nadra.gov.pk/' },
            { label: 'Pak Identity (Pak-ID) Overseas Services', url: 'https://id.nadra.gov.pk/' },
            { label: 'Directorate General of Immigration & Passports (DGI&P)', url: 'https://dgip.gov.pk/' },
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
