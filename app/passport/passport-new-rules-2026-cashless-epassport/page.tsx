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
  QrCode,
  Globe2,
  Smartphone,
  Sparkles,
  ArrowRight,
  FileText,
  Briefcase,
  Layers,
  CreditCard
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Passport New Rules 2026: Cashless QR Payment, E-Passport & Mandatory NICOP Entry | Pakistan Info Hub',
  description:
    'Complete guide to Pakistan Passport rules in 2026: 100% cashless QR code payments via JazzCash/EasyPaisa (effective July 1, 2026), 14-day normal delivery, e-passport transition, MRP validity, and urgent mandatory NICOP entry rules for overseas Pakistanis.',
  keywords: [
    'Pakistan passport new rules 2026',
    'passport cashless payment QR code',
    'passport fee jazzcash easypaisa 2026',
    'e-passport Pakistan MRP validity',
    'NICOP mandatory visa free entry Pakistan foreign passport',
    'passport delivery 14 days normal 2026',
    'Business Passport Pakistan Mohsin Naqvi',
  ],
  openGraph: {
    title: 'Passport New Rules 2026: Cashless QR Payment, E-Passport & Mandatory NICOP Entry',
    description:
      'Official 2026 guide on DGI&P passport reforms: Cashless QR payments, faster 14-day delivery, e-passports, and critical mandatory NICOP travel rules for foreign passport holders.',
    url: 'https://www.pakistaninfohub.com/passport/passport-new-rules-2026-cashless-epassport',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/passport/passport-new-rules-2026-cashless-epassport' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Passport & Travel', item: 'https://www.pakistaninfohub.com/passport' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Passport New Rules 2026 (Cashless & NICOP)',
          item: 'https://www.pakistaninfohub.com/passport/passport-new-rules-2026-cashless-epassport',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Pakistan Passport New Rules 2026: Cashless QR Payments, E-Passport & Mandatory NICOP Travel Rules',
      description:
        'A verified regulatory guide covering the Directorate General of Immigration & Passports (DGI&P) cashless payment policy, e-passport updates, and critical travel requirements for overseas Pakistanis.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-20',
      dateModified: '2026-08-21',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/passport/passport-new-rules-2026-cashless-epassport',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I pay the passport fee with cash at a passport office in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Effective July 1, 2026, all passport offices across Pakistan have completely discontinued cash counters. Fees must be paid digitally by scanning the token QR code via mobile banking apps (JazzCash, EasyPaisa, SadaPay, NayaPay, or bank apps) or generating a PSID voucher through the Passport Fee Asaan app/web.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can overseas Pakistanis with an expired NICOP travel visa-free on a foreign passport?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. As of mid-2026, Pakistani immigration authorities and international airlines strictly enforce that foreign passport holders of Pakistani origin MUST hold a valid, unexpired Smart NICOP to enter Pakistan without a visa. If your NICOP is expired, cancelled, or missing, airlines are instructed to deny boarding unless you have a valid Pakistani visa or valid Pakistani passport.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to replace my existing Machine Readable Passport (MRP) immediately with an e-passport?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No forced replacement is required. While Pakistan is progressively transitioning all new issuances to electronic biometric e-passports (with embedded NFC microchips), all existing Machine Readable Passports (MRPs) remain 100% valid until their respective expiration date.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the standard delivery timeline for passports in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under recent DGI&P operational directives, standard (Normal) passport delivery has been accelerated to approximately 10 to 14 working days, Urgent delivery takes 4 to 5 working days, and Fast-Track Executive passports are printed within 2 working days.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the Business Passport initiative?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Business Passport is a dedicated travel document category championed by Interior Minister Mohsin Naqvi and DGI&P in consultation with the FBR. Designed for verified, high-contributing tax filers and corporate leaders, it provides expedited document processing and facilitates simplified visa facilitation with international partner embassies.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I pay via QR code at the passport office counter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When your token is generated at the entrance counter, a dynamic QR code is printed on your receipt. Open any Pakistani mobile wallet (JazzCash, EasyPaisa, SadaPay) or banking app, tap "Scan QR" or "1-Bill / QR", scan the receipt code, confirm the applicant name and amount, and approve the instant transfer.',
          },
        },
      ],
    },
  ],
};

export default function PassportNewRules2026Page() {
  const breadcrumbs = [
    { nameEn: 'Passport & Travel', nameUr: 'پاسپورٹ اور ٹریول' },
    { nameEn: 'Passport New Rules 2026 (Cashless & NICOP)', nameUr: 'پاسپورٹ نئے قواعد، کیش لیس و نائیکوپ 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="PASSPORT & TRAVEL REFORMS" labelUr="پاسپورٹ و سفر کے نئے قواعد" variant="gold" />
            <VerifiedBadge textEn="DGI&P OFFICIAL NOTIFICATION 2026" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Passport New Rules 2026: Cashless QR Payments, E-Passport &amp; Mandatory NICOP Entry
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پاسپورٹ کے نئے قواعد 2026: کیش لیس کیو آر پیمنٹ، ای پاسپورٹ اور نائیکوپ ٹریول شرائط
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Under recent Directorate General of Immigration &amp; Passports (DGI&amp;P) circulars and Federal Ministry of Interior
            reforms, passport issuance in Pakistan has transitioned to 100% cashless QR-code payments, faster 14-day delivery,
            and strict mandatory NICOP entry rules for overseas Pakistanis holding foreign passports.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What are the Key Passport & Travel Changes in 2026?"
          topicTitleUr="2026 میں پاسپورٹ اور سفر کے اہم نئے قوانین کیا ہیں؟"
          answerEn="Starting July 1, 2026, all passport offices in Pakistan are 100% cashless (fees paid via QR code on mobile apps like JazzCash/EasyPaisa). Normal passport delivery is reduced to 14 days. Overseas Pakistanis traveling on foreign passports MUST hold a valid, unexpired NICOP for visa-free entry; expired cards will result in denied airline boarding."
          answerUr="یکم جولائی 2026 سے تمام پاسپورٹ دفاتر کیش لیس ہو چکے ہیں اور فیس کیو آر کوڈ کے ذریعے جاز کیش/ایزی پیسہ سے ادا ہوتی ہے۔ نارمل پاسپورٹ کی مدت 14 دن کر دی گئی ہے۔ غیر ملکی پاسپورٹ رکھنے والے پاکستانیوں کے لیے بغیر ویزا داخلے کے لیے کارآمد نائیکوپ (NICOP) لازمی ہے، زائد المیعاد کارڈ پر فلائٹ میں سوار نہیں ہونے دیا جائے گا۔"
        />

        {/* URGENT HIGHLIGHT BANNER: Mandatory NICOP Rule for Overseas Pakistanis */}
        <section className="p-6 rounded-2xl bg-gradient-to-r from-red-900 via-slate-900 to-doc-ink text-white border-2 border-red-500 shadow-2xl space-y-4 relative overflow-hidden">
          <div aria-hidden="true" className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-red-500/30 pb-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 animate-bounce" />
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-red-300 uppercase">
                  URGENT TRAVEL ADVISORY • OVERSEAS PAKISTANIS
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-white">
                  Mandatory Valid NICOP Rule for Visa-Free Entry (2026)
                </h2>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-200 border border-red-400/50 text-xs font-mono font-bold shrink-0">
              STRICT AIRLINE ENFORCEMENT
            </span>
          </div>

          <div className="space-y-3 text-sm text-slate-200 leading-relaxed font-sans">
            <p>
              If you are a Pakistani expatriate or foreign citizen of Pakistani origin holding a foreign passport (British, American,
              Canadian, Australian, EU, etc.), please note this critical change before booking travel to Pakistan:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-red-500/40 space-y-1">
                <span className="font-bold text-red-300 block">1. Valid Smart NICOP Required</span>
                <p className="text-slate-300">
                  You can only enter Pakistan visa-free if your Smart NICOP is currently <strong>valid and unexpired</strong>.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-red-500/40 space-y-1">
                <span className="font-bold text-red-300 block">2. Expired Cards Rejected</span>
                <p className="text-slate-300">
                  Expired, cancelled, or physical photocopies of NICOP are <strong>no longer accepted</strong> for visa exemptions.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-red-500/40 space-y-1">
                <span className="font-bold text-red-300 block">3. Denied Boarding Policy</span>
                <p className="text-slate-300">
                  Airlines worldwide will deny boarding unless you produce: (a) Valid NICOP, (b) Valid Pakistani Visa, or (c) Valid Pakistani Passport.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/overseas/nicop-mandatory-entry-rules-2026"
                className="py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold text-xs flex items-center gap-1.5 transition shadow-md"
              >
                <span>Read Full NICOP Mandatory Entry Rules Guide →</span>
              </Link>
              <Link
                href="/nadra/nicop-fee-calculator"
                className="py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs flex items-center gap-1.5 transition shadow-md"
              >
                <span>Check NICOP Renewal Fees (Zone A / B) →</span>
              </Link>
              <Link
                href="/overseas/nicop-renewal-from-abroad"
                className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 font-mono font-bold text-xs flex items-center gap-1.5 transition"
              >
                <span>How to Renew NICOP Online via Pak-ID →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 1: Cashless Payment System Breakdown */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <QrCode className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              100% Cashless Passport Offices: How QR Code Payment Works
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Effective <strong>July 1, 2026</strong>, physical cash counters across all Regional Passport Offices (RPOs)
            and Executive Passport Offices (EPOs) in Pakistan have been permanently eliminated to prevent queue congestion,
            reduce agent extortion, and guarantee instant revenue reconciliation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs font-sans">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Collect Token</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Visit the passport counter. Your entry token is printed with a dynamic, encrypted 1-Bill QR code.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Open Mobile App</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Open JazzCash, EasyPaisa, SadaPay, NayaPay, or your bank&apos;s mobile app and select &quot;QR Scanner&quot; or &quot;Govt Fees&quot;.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Scan &amp; Confirm</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Scan the token QR code. The app automatically fetches your exact fee amount, category, and applicant name.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs">4</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Instant Verification</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Approve payment via biometric/PIN. The passport officer&apos;s screen turns green instantly for data entry.
              </p>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 2: E-Passport Transition & Machine Readable Passport (MRP) Validity */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              E-Passport Transition &amp; Existing MRP Validity Explained
            </h2>
          </div>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base space-y-3 font-sans">
            <p>
              Pakistan has approved the full transition to <strong>biometric electronic passports (e-Passports)</strong>,
              which incorporate an ICAO-compliant contactless microchip embedded with facial recognition biometrics and
              fingerprint data. This advancement significantly enhances passport security and accelerates automated
              e-Gate clearance at international airports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700/60 space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Existing Passports Remain 100% Valid</span>
              </div>
              <p className="text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed font-sans">
                You do <strong>NOT</strong> need to discard or prematurely replace your standard Machine Readable Passport (MRP).
                All valid MRPs will remain fully recognized by international border control and airlines until their original
                expiry date. You only upgrade to an e-passport upon regular renewal.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-300 dark:border-blue-700/60 space-y-2">
              <div className="flex items-center gap-2 text-blue-800 dark:text-blue-300 font-bold text-sm">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <span>Upcoming &quot;Business Passport&quot; Scheme</span>
              </div>
              <p className="text-xs text-blue-900 dark:text-blue-200 leading-relaxed font-sans">
                In coordination with the FBR, DGI&amp;P is finalizing a special &quot;Business Passport&quot; category for high-volume
                tax filers and corporate leaders, featuring priority processing, specialized visa facilitation, and dedicated
                consular support.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Delivery Timelines Table */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Current Passport Processing Timelines (2026 Updates)
            </h2>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="w-full text-sm font-sans">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Processing Tier</th>
                  <th className="px-4 py-3 text-left text-emerald-300">New 2026 Delivery Window</th>
                  <th className="px-4 py-3 text-left text-slate-300">Previous Duration</th>
                  <th className="px-4 py-3 text-left text-amber-300">Key Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Normal Category
                  </td>
                  <td className="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400 text-xs">
                    10 – 14 Working Days
                  </td>
                  <td className="px-4 py-3 font-mono text-slate-500 text-xs">21 Working Days</td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">Standard postal delivery or office collection</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Urgent Category
                  </td>
                  <td className="px-4 py-3 font-mono font-bold text-amber-600 dark:text-amber-400 text-xs">
                    4 – 5 Working Days
                  </td>
                  <td className="px-4 py-3 font-mono text-slate-500 text-xs">7 Working Days</td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">Expedited printing and fast courier dispatch</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Fast-Track Executive
                  </td>
                  <td className="px-4 py-3 font-mono font-bold text-purple-600 dark:text-purple-400 text-xs">
                    2 Working Days
                  </td>
                  <td className="px-4 py-3 font-mono text-slate-500 text-xs">2 Working Days</td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">Executive Mega Centre VIP processing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Related Tools & Navigators */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Passport Tools &amp; Calculators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/passport/fee-calculator"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Official Fees</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Passport Fee Calculator 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Calculate exact 36/72/100 page 5 &amp; 10 year passport costs.</p>
            </Link>

            <Link
              href="/passport/tracking-status"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Application Tracker</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Passport Tracking Status Online →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Track token dispatch and printing via 9988 SMS.</p>
            </Link>

            <Link
              href="/overseas/nicop-renewal-from-abroad"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Overseas Support</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NICOP Renewal from Abroad →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Renew your Smart NICOP before traveling to Pakistan.</p>
            </Link>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Passport Rules &amp; Travel 2026)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Can I pay the passport fee with cash at a passport office in 2026?',
                a: 'No. Effective July 1, 2026, all passport offices across Pakistan have completely discontinued cash counters. Fees must be paid digitally by scanning the token QR code via mobile banking apps (JazzCash, EasyPaisa, SadaPay, NayaPay, or bank apps) or generating a PSID voucher through the Passport Fee Asaan app/web.',
              },
              {
                q: 'Can overseas Pakistanis with an expired NICOP travel visa-free on a foreign passport?',
                a: 'No. As of mid-2026, Pakistani immigration authorities and international airlines strictly enforce that foreign passport holders of Pakistani origin MUST hold a valid, unexpired Smart NICOP to enter Pakistan without a visa. If your NICOP is expired, cancelled, or missing, airlines are instructed to deny boarding unless you have a valid Pakistani visa or valid Pakistani passport.',
              },
              {
                q: 'Do I need to replace my existing Machine Readable Passport (MRP) immediately with an e-passport?',
                a: 'No forced replacement is required. While Pakistan is progressively transitioning all new issuances to electronic biometric e-passports (with embedded NFC microchips), all existing Machine Readable Passports (MRPs) remain 100% valid until their respective expiration date.',
              },
              {
                q: 'What is the standard delivery timeline for passports in 2026?',
                a: 'Under recent DGI&P operational directives, standard (Normal) passport delivery has been accelerated to approximately 10 to 14 working days, Urgent delivery takes 4 to 5 working days, and Fast-Track Executive passports are printed within 2 working days.',
              },
              {
                q: 'What is the Business Passport initiative?',
                a: 'The Business Passport is a dedicated travel document category championed by Interior Minister Mohsin Naqvi and DGI&P in consultation with the FBR. Designed for verified, high-contributing tax filers and corporate leaders, it provides expedited document processing and facilitates simplified visa facilitation with international partner embassies.',
              },
              {
                q: 'How do I pay via QR code at the passport office counter?',
                a: 'When your token is generated at the entrance counter, a dynamic QR code is printed on your receipt. Open any Pakistani mobile wallet (JazzCash, EasyPaisa, SadaPay) or banking app, tap "Scan QR" or "1-Bill / QR", scan the receipt code, confirm the applicant name and amount, and approve the instant transfer.',
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
            { label: 'Directorate General of Immigration & Passports (DGI&P)', url: 'https://dgip.gov.pk/' },
            { label: 'Ministry of Interior Government of Pakistan', url: 'https://interior.gov.pk/' },
            { label: 'National Database and Registration Authority (NADRA)', url: 'https://www.nadra.gov.pk/' },
            { label: 'Pakistan Online Visa System (POVS)', url: 'https://visa.nadra.gov.pk/' },
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
