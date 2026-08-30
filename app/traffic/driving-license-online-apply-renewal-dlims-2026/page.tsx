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
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  Car,
  FileCheck,
  Smartphone,
  CreditCard,
  MapPin,
  Calendar,
  AlertCircle,
  Check,
  Award,
  Globe
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Driving License Online Apply & Renewal DLIMS 2026 – Punjab, Sindh, KP, Islamabad & Balochistan | Pakistan Info Hub',
  description:
    'Complete 2026 guide to Pakistani driving licenses: Online apply and renewal via DLIMS 2.0 Punjab (PITB), Sindh DLS, KP Traffic, Islamabad ITP, Balochistan in-person rules, 42-day learner waiting period, fee schedule, Juvenile Driving Permit (ages 16-18), expired renewal penalties, and courier delivery.',
  keywords: [
    'DLIMS Punjab online driving license apply 2026',
    'driving license renewal fee Punjab DLIMS 2.0',
    'Sindh driving license online renewal DLS',
    'Islamabad traffic police license online appointment',
    'KP driving license apply online PTAP',
    'learner driving permit 42 days waiting period',
    'Juvenile driving permit Punjab age 16 18',
    'expired driving license renewal penalty fine Pakistan',
    'international driving permit IDP Pakistan fee',
    'Dastak app driving license doorstep service',
  ],
  openGraph: {
    title: 'Driving License Online Apply & Renewal DLIMS 2026 – Complete Pakistan Guide',
    description:
      'Step-by-step guide to DLIMS 2.0 online learner permits, driving test bookings, expired license renewals, 2026 fee structure, and provincial license systems across Pakistan.',
    url: 'https://www.pakistaninfohub.com/traffic/driving-license-online-apply-renewal-dlims-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/traffic/driving-license-online-apply-renewal-dlims-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Traffic & Vehicle Services', item: 'https://www.pakistaninfohub.com/traffic' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Driving License Online Apply & Renewal DLIMS 2026',
          item: 'https://www.pakistaninfohub.com/traffic/driving-license-online-apply-renewal-dlims-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Driving License Online Apply & Renewal Guide 2026: DLIMS, Learner Permit, Fees & Provincial Systems',
      description:
        'A comprehensive public transport and traffic licensing manual detailing DLIMS 2.0 digital workflows, learner permit waiting rules, provincial portals, juvenile permits, and renewal penalty tiers in Pakistan.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/traffic/driving-license-online-apply-renewal-dlims-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What if my driving license expired years ago — do I have to re-take the driving test?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In Punjab (DLIMS) and Islamabad, routine expired license renewals generally do not require a fresh driving test regardless of expiry length. However, late surcharges apply: a 50% surcharge if expired by 1 to 3 months, 100% surcharge if expired up to 1 year, and up to 2.5 times the standard renewal fee if expired beyond 1 year. In some provinces like Sindh and Balochistan, licenses expired for over 3 to 5 years may require physical verification or administrative re-assessment at a District Licensing Branch.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I drive alone on public roads using only a Learner Driving Permit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Legally, a learner permit holder cannot drive alone. You must be accompanied by a licensed driver sitting in the front passenger seat, and your vehicle must display red "L" plates on both the front and rear. Driving unaccompanied on a learner permit is an offense liable to traffic challans under the Motor Vehicles Ordinance.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does the entire driving license process take from learner to smart card?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The learner permit is issued instantly online (as a downloadable PDF). You must hold the learner permit for a mandatory 42-day waiting period before taking the practical driving test. After passing the computerized sign test (E-Sign) and practical track test, your permanent plastic Smart Card driving license is printed and delivered by courier to your doorstep within 5 to 10 working days.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I apply for or renew a driving license online if I live in Sindh, KP, or Islamabad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sindh offers online appointment pre-booking and online renewal services via dls.sindhpolice.gov.pk for selected categories, though biometric capture and fresh tests require visiting a designated Driving License Branch in Karachi or Hyderabad. KP operates the PTAP portal and Rabta mobile app for digital fee collection and learner issuance. Islamabad Traffic Police (ITP) provides digital appointment booking and cashless e-payments with Pakistan Post delivery.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the Punjab Juvenile Driving Permit for teenagers aged 16 to 18?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Punjab Government introduced a Juvenile Driving Permit specifically for teenagers aged 16 to 18 to legally ride motorcycles and scooters (up to 125cc). It requires physical presence of a parent/guardian, original B-Form, signed parental consent affidavit, passing the computerized sign test and riding track test, and payment of a PKR 500 annual fee. It is valid until the rider turns 18.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I verify if a driving license is authentic online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For Punjab, visit dlims.punjab.gov.pk/verify and enter the applicant\'s 13-digit CNIC number without hyphens. For Sindh, use dls.sindhpolice.gov.pk/online-verification. For KP, verify via the KP Police DLIMS portal or Rabta app. For Islamabad, check through islamabadpolice.gov.pk.',
          },
        },
      ],
    },
  ],
};

export default function DrivingLicenseOnlineApplyPage() {
  const breadcrumbs = [
    { nameEn: 'Traffic & Vehicle Services', nameUr: 'ٹریفک و گاڑیوں کی سروسز' },
    { nameEn: 'Driving License DLIMS 2026', nameUr: 'ڈرائیونگ لائسنس آن لائن گائیڈ 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="DLIMS 2.0 & PROVINCIAL PORTALS" labelUr="ڈرائیونگ لائسنس پورٹل" variant="seal" />
            <VerifiedBadge textEn="PUNJAB TRAFFIC POLICE & PITB VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Driving License Online Apply &amp; Renewal Guide 2026: DLIMS, Learner Permit &amp; Test Rules
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              ڈرائیونگ لائسنس آن لائن اپلائی اور تجدید 2026: ڈی ایل آئی ایم ایس پنجاب، لرنر پرمٹ اور ٹیسٹ فیس
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Everything you need to know about getting or renewing your driving license in Pakistan: how Punjab&apos;s
            DLIMS 2.0 digital portal works, province-by-province online vs. in-person availability, the 42-day learner rule,
            the 2026 fee table, juvenile permits for ages 16–18, and expired license renewal penalties.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How Do I Apply For or Renew a Driving License in Pakistan in 2026?"
          topicTitleUr="پاکستان میں ڈرائیونگ لائسنس حاصل یا تجدید کرنے کا کیا طریقہ ہے؟"
          answerEn="In Punjab, the entire learner permit and routine renewal process is 100% online via DLIMS 2.0 (dlims.punjab.gov.pk) or the Dastak App. For fresh licenses, apply online for a learner permit, hold it for 42 days, pass the E-Sign and physical driving track test at any Licensing Center, and receive your Smart Card via courier. Sindh, KP, and Islamabad offer online appointments and digital portals, while Balochistan currently requires in-person visits to District Transport Offices."
          answerUr="پنجاب میں لرنر پرمٹ اور عام تجدید مکمل طور پر ڈی ایل آئی ایم ایس 2.0 (dlims.punjab.gov.pk) یا دستک ایپ سے آن لائن ہو جاتی ہے۔ نئے لائسنس کے لیے 42 دن بعد ای سائن اور فزیکل ٹیسٹ پاس کرنا لازمی ہے۔ سندھ، کے پی اور اسلام آباد میں آن لائن بکنگ اور لرنر سہولت میسر ہے جبکہ بلوچستان میں ڈسٹرکٹ ٹرانسپورٹ آفس جانا پڑتا ہے۔"
        />

        {/* Section 1: Province-by-Province Digital Readiness */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Province-by-Province Driving License Digital Availability
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            While Punjab operates the most fully digitized end-to-end traffic management system in Pakistan, each province has
            distinct digital capabilities, portal links, and in-person requirements.
          </p>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Province / Territory</th>
                  <th className="px-4 py-3 text-left">Online Portal / App</th>
                  <th className="px-4 py-3 text-left">Online Capabilities</th>
                  <th className="px-4 py-3 text-left">In-Person Steps Required</th>
                  <th className="px-4 py-3 text-left">Card Delivery</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Punjab (DLIMS 2.0)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-doc-seal">
                    dlims.punjab.gov.pk &amp; Dastak App
                  </td>
                  <td className="px-4 py-3 text-xs">
                    <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                      <Check className="w-3.5 h-3.5" /> 100% Online (Learner, Renewal, Endorsement, E-License)
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Computerized Sign Test + Practical Driving Track Test (Fresh applicants only)
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Doorstep Courier (Pakistan Post / TCS)
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Sindh (DLS Sindh Police)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-doc-seal">
                    dls.sindhpolice.gov.pk
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-700 dark:text-slate-300">
                    Online appointment pre-booking, fee calculation &amp; online renewal for eligible smart cards
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Biometric capture, medical fitness check, and driving test at Clifton, Nazimabad, Korangi, or Hyderabad branches
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Branch Collection / Courier
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Khyber Pakhtunkhwa (KP)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-doc-seal">
                    dl.kppolice.gov.pk &amp; Rabta App
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-700 dark:text-slate-300">
                    Online learner permit generation, digital fee payment via Easypaisa/JazzCash
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Traffic sign test and vehicle road driving test at District Traffic Police testing ground
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Courier / Branch Counter
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Islamabad Capital (ICT / ITP)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-doc-seal">
                    islamabadpolice.gov.pk
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-700 dark:text-slate-300">
                    Online appointment scheduling, e-Challan payment, and digital license verification
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Physical attendance at ITP Headquarters (Faizabad) or F-8 Citizen Facilitation Center for touch-screen test &amp; driving track
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Pakistan Post Urgent Mail
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Balochistan
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-500">
                    In-Person Licensing System
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-500">
                    Online verification portal available; direct online applications currently limited
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Physical visit to District Transport Office (DTO) / Traffic Police Licensing Branch (e.g. Quetta Cantt) with medical certificate
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Direct Branch Collection
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step New License Journey */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Car className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step: The Complete New Driving License Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Apply for Learner Permit</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Log in to <code>dlims.punjab.gov.pk</code> or your provincial app. Upload CNIC front/back and a passport-size photo with white background. Pay the PKR 1,000 fee via 1Link/ePay PSID. Download your computerized PDF learner permit instantly.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Mandatory 42-Day Wait</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                By law, fresh applicants must hold their learner permit for a minimum waiting period of <strong>42 consecutive days</strong> before the system allows you to book or attempt the practical driving test. Use this period to practice driving.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Pass E-Sign &amp; Track Test</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Visit your nearest Licensing Center (or Police Khidmat Markaz). Pass the touch-screen Computerized E-Sign test (traffic signs &amp; road rules), followed by the practical on-track vehicle driving test (reversing, parallel parking, 'L' track).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs">4</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Smart Card Courier</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Upon passing, your biometric profile is sent for central printing. A high-security microchip Smart Card driving license is printed and delivered directly to your registered postal address via courier within 5 to 10 working days.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Renewing an Existing / Expired License */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Renewing an Expired License &amp; Late Surcharge Rules
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-doc-brass" /> Online Renewal Process (No Retest Required)
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                For routine renewals in Punjab and Islamabad, you do <strong>not</strong> have to re-appear for a driving test or sign test. Follow these steps:
              </p>
              <ol className="space-y-1.5 text-slate-600 dark:text-slate-300 list-decimal list-inside leading-relaxed">
                <li>Log in to the DLIMS portal or open the <strong>Dastak App</strong> on your smartphone.</li>
                <li>Select <strong>&quot;License Renewal&quot;</strong> and enter your CNIC &amp; existing License Number.</li>
                <li>Upload fresh photo (white background), scanned CNIC, and current license image.</li>
                <li>Pay the auto-generated PSID through mobile banking, ATM, or JazzCash/Easypaisa.</li>
                <li>Download your temporary digital e-license receipt immediately while your physical card is dispatched.</li>
              </ol>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" /> Late Surcharge Penalty Schedule
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                If your license has already expired, provincial traffic rules enforce structured late surcharges on the base renewal fee:
              </p>
              <div className="space-y-2 pt-1">
                <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex justify-between items-center">
                  <span className="font-bold text-emerald-800 dark:text-emerald-300">Within 30 Days of Expiry:</span>
                  <span className="font-mono font-bold text-emerald-700 dark:text-emerald-300">Standard Fee (Zero Fine)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex justify-between items-center">
                  <span className="font-bold text-amber-800 dark:text-amber-300">1 to 3 Months Expired:</span>
                  <span className="font-mono font-bold text-amber-700 dark:text-amber-300">50% Late Surcharge</span>
                </div>
                <div className="p-2.5 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 flex justify-between items-center">
                  <span className="font-bold text-red-800 dark:text-red-300">3 Months to 1 Year Expired:</span>
                  <span className="font-mono font-bold text-red-700 dark:text-red-300">100% Surcharge (Double Fee)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 flex justify-between items-center">
                  <span className="font-bold text-purple-800 dark:text-purple-300">Over 1 Year Expired:</span>
                  <span className="font-mono font-bold text-purple-700 dark:text-purple-300">Up to 2.5x Standard Fee</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 4: 2026 Driving License Fee Table */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Official Driving License Fee Schedule 2026
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Official government fee rates under DLIMS 2.0 (rates are uniform across major categories in Punjab; other provinces follow closely aligned schedules).
          </p>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Vehicle Category</th>
                  <th className="px-4 py-3 text-left">Learner Permit Fee</th>
                  <th className="px-4 py-3 text-left">Regular License (1–5 Years)</th>
                  <th className="px-4 py-3 text-left">Test &amp; Courier Charges</th>
                  <th className="px-4 py-3 text-left">Standard Validity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Motorcycle (Solo)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    PKR 1,000
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    PKR 500 / year (PKR 2,500 for 5 Yrs)
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Test: PKR 150 | Courier: PKR 480
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    5 Years
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Car / Jeep (Motor Car)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    PKR 1,000
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    PKR 1,350 / year (PKR 6,750 for 5 Yrs)
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Test: PKR 150 | Courier: PKR 480
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    5 Years
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Motorcycle + Motor Car (Combined)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    PKR 2,000 (PKR 1,000 each)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    PKR 1,850 / year
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Test: PKR 300 | Courier: PKR 480
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    5 Years
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    LTV (Light Transport Vehicle)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    PKR 1,000
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    PKR 1,850 / year
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Test: PKR 200 | Courier: PKR 480
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    3–5 Years
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    HTV (Heavy Transport Vehicle)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    PKR 1,000
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    PKR 2,350 / year
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Test: PKR 250 | Courier: PKR 480
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    3 Years
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Duplicate Driving License
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-500">
                    N/A
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    PKR 1,000 (Base Duplicate Fee)
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Courier: PKR 480
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Remaining original validity
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>

        {/* Section 5: Juvenile & International Driving Permits */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Specialized Permits: Juvenile (16–18) &amp; International (IDP)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="font-bold text-doc-seal text-sm block">1. Punjab Juvenile Driving Permit (Ages 16–18)</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Designed to regulate teenage riders safely, Punjab introduced legal permits for minors aged 16 to 18 to operate motorcycles and electric scooters (up to 125cc).
              </p>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside">
                <li><strong>Mandatory Guardian Presence:</strong> Parent or legal guardian must accompany the applicant to the licensing center.</li>
                <li><strong>Required Proofs:</strong> Original NADRA B-Form/Smart Child Card, parent CNIC, and signed parental consent affidavit.</li>
                <li><strong>Testing:</strong> Must pass computerized traffic sign test and practical riding track test.</li>
                <li><strong>Fee:</strong> PKR 500 annual permit fee. Valid until the holder celebrates their 18th birthday.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm block">2. International Driving Permit (IDP)</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Issued by Traffic Police licensing branches under the 1968 Vienna Convention, permitting Pakistani license holders to legally drive in 150+ signatory countries.
              </p>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside">
                <li><strong>Eligibility:</strong> Must hold a valid, unexpired Pakistani National Driving Smart Card.</li>
                <li><strong>Mandatory Documents:</strong> Original Passport with valid international visa/ticket, original CNIC, 2 passport-size photos, and medical fitness form.</li>
                <li><strong>Official Fee:</strong> Approximately PKR 4,000 to PKR 5,000 (includes courier/dispatch).</li>
                <li><strong>Validity:</strong> Exactly 1 year from the date of issuance (non-renewable abroad; fresh permit required upon return).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: Cross-Link to Internal Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Vehicle &amp; Transport Tools on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/traffic/token-tax-calculator-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Excise Tax</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Token Tax Calculator 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Calculate annual excise token taxes for cars &amp; bikes.</p>
            </Link>

            <Link
              href="/traffic/vehicle-verification-online-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">MTMIS Verification</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Vehicle Verification Online →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check vehicle owner name, chassis number, and taxes.</p>
            </Link>

            <Link
              href="/traffic/challan-paid-but-showing-pending-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Challan Fix</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Paid Challan Showing Pending →
              </h3>
              <p className="text-xs text-slate-500 mt-1">How to reconcile unverified e-Challan payments.</p>
            </Link>
          </div>
        </section>

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step Driving License Issuance & Test Workflow (DLIMS 2026)"
          titleUr="ڈرائیونگ لائسنس کے حصول کا 4 مرحلہ وار طریقہ کار"
          subtitleEn="4-stage verified sequence from online learner permit to doorstep Smart Card delivery"
          subtitleUr="لرنر پرمٹ سے لے کر اسمارٹ لائسنس کی گھر پر وصولی تک کے 4 مراحل"
          steps={[
            {
              number: 1,
              titleEn: "Instant Online Learner Permit",
              titleUr: "آن لائن لرنر پرمٹ کا حصول",
              descEn: "Register on dlims.punjab.gov.pk or visit Khidmat Markaz with original CNIC (Fee PKR 500/year).",
              descUr: "شناختی کارڈ کے ساتھ پورٹل پر اندراج کر کے فوری ڈیجیٹل لرنر لائسنس ڈاؤن لوڈ کریں۔",
              tagEn: "Day 1 (Instant)",
              tagUr: "فوری لرنر",
            },
            {
              number: 2,
              titleEn: "Mandatory 42-Day Practice",
              titleUr: "42 دن کی لازمی ڈرائیونگ پریکٹس",
              descEn: "Practice driving with red 'L' plates displayed on vehicle, accompanied by a licensed driver.",
              descUr: "گاڑی پر 'L' پلیٹ لگا کر کسی لائسنس ہولڈر ڈرائیور کے ساتھ 42 دن پریکٹس مکمل کریں۔",
              tagEn: "42-Day Window",
              tagUr: "42 دن وقفہ",
            },
            {
              number: 3,
              titleEn: "E-Sign & Practical Track Test",
              titleUr: "کمپیوٹرائزڈ سائن اور پریکٹیکل ٹیسٹ",
              descEn: "Appear at Traffic Police Testing Center to pass the automated computer sign test (E-Sign) and vehicle track test.",
              descUr: "ٹریفک پولیس سنٹر جا کر ٹریفک اشاروں کا کمپیوٹر ٹیسٹ اور گاڑی چلانے کا پریکٹیکل ٹیسٹ پاس کریں۔",
              tagEn: "Test Day",
              tagUr: "ٹیسٹ ڈے",
            },
            {
              number: 4,
              titleEn: "Smart Card Printed & Delivered",
              titleUr: "اسمارٹ کارڈ پرنٹنگ اور ہوم ڈلیوری",
              descEn: "Upon passing, permanent chip-embedded Smart Driving License is dispatched to your home address via Pakistan Post (5–10 days).",
              descUr: "کامیابی کے بعد چپ والا اسمارٹ لائسنس پاکستان پوسٹ کے ذریعے 5 سے 10 دنوں میں گھر پہنچا دیا جاتا ہے۔",
              tagEn: "Doorstep Delivery",
              tagUr: "ہوم ڈلیوری",
            },
          ]}
        />

        {/* Fee Structure Table */}
        <FeeTableVisual
          titleEn="Official Driving License Statutory Fee Schedule 2026 (Punjab & Federal)"
          titleUr="ڈرائیونگ لائسنس کا سرکاری فیس شیڈول 2026"
          subtitleEn="Category-wise annual statutory fees for Learner, Regular Smart Card, Commercial HTV, and International"
          subtitleUr="موٹر سائیکل، کار، ایل ٹی وی، ایچ ٹی وی اور انٹرنیشنل لائسنس کی فیس کی تفصیل"
          noteEn="All fees can be paid seamlessly via ePay Punjab, 1Link mobile banking, ATM, or over-the-counter at bank branches."
          rows={[
            {
              serviceEn: "Motorcycle / Scooter License (5 Years)",
              serviceUr: "موٹر سائیکل لائسنس (5 سالہ)",
              normal: "PKR 500 / year",
              urgent: "PKR 2,500 (5 Yrs)",
              executive: "ePay PSID",
              validity: "5 Years Validity",
            },
            {
              serviceEn: "Motor Car / Jeep / LTV License (5 Years)",
              serviceUr: "کار / جیپ / ایل ٹی وی لائسنس (5 سالہ)",
              normal: "PKR 900 / year",
              urgent: "PKR 4,500 (5 Yrs)",
              executive: "ePay PSID",
              validity: "5 Years Validity",
            },
            {
              serviceEn: "Heavy Transport Vehicle (HTV) Commercial",
              serviceUr: "کمرشل ایچ ٹی وی لائسنس",
              normal: "PKR 2,000 / year",
              urgent: "PKR 2,000 / year",
              executive: "Track Test Req.",
              validity: "3 Years Renewable",
            },
            {
              serviceEn: "International Driving Permit (1949 Geneva Conv.)",
              serviceUr: "بین الاقوامی ڈرائیونگ پرمٹ",
              normal: "PKR 1,000 Fixed",
              urgent: "PKR 1,000",
              executive: "Passport + Valid DL",
              validity: "1 Year Global",
            },
            {
              serviceEn: "Juvenile Permit (Teenagers 16–18 Yrs - 125cc)",
              serviceUr: "نوعمر ڈرائیونگ پرمٹ (16 تا 18 سال)",
              normal: "PKR 500 / year",
              urgent: "PKR 500",
              executive: "Parent Consent Req.",
              validity: "Until 18th Birthday",
            },
          ]}
        />

        {/* Section 7: FAQs */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Driving License DLIMS 2026)"
          titleUr="ڈرائیونگ لائسنس کے متعلق عام سوالات"
          subtitleEn="Essential guidelines on expired licenses, learner restrictions, timelines, and online verification"
          subtitleUr="زائد المیعاد لائسنس پر جرمانے، لرنر کے ساتھ ڈرائیونگ، کتنا وقت لگتا ہے اور آن لائن تصدیق"
          items={[
            {
              questionEn: "What if my driving license expired years ago — do I have to re-take the driving test?",
              questionUr: "اگر لائسنس کئی سال پرانا ایکسپائر ہو چکا ہو تو کیا دوبارہ ٹیسٹ دینا پڑے گا؟",
              answerEn: "In Punjab (DLIMS) and Islamabad, routine expired license renewals generally do not require a fresh driving test regardless of expiry length. However, late surcharges apply: a 50% surcharge if expired by 1 to 3 months, 100% surcharge if expired up to 1 year, and up to 2.5 times the standard renewal fee if expired beyond 1 year. In some provinces like Sindh and Balochistan, licenses expired for over 3 to 5 years may require physical verification or administrative re-assessment at a District Licensing Branch.",
              answerUr: "پنجاب اور اسلام آباد میں پرانے ایکسپائر لائسنس کی تجدید کے لیے دوبارہ ٹیسٹ نہیں لیا جاتا لیکن لیٹ فیس کا جرمانہ عائد ہوتا ہے۔ سندھ اور بلوچستان میں 3 سے 5 سال پرانے لائسنس پر فزیکل تصدیق درکار ہوتی ہے۔",
            },
            {
              questionEn: "Can I drive alone on public roads using only a Learner Driving Permit?",
              questionUr: "کیا صرف لرنر پرمٹ پر اکیلے گاڑی چلائی جا سکتی ہے؟",
              answerEn: "No. Legally, a learner permit holder cannot drive alone. You must be accompanied by a licensed driver sitting in the front passenger seat, and your vehicle must display red 'L' plates on both the front and rear. Driving unaccompanied on a learner permit is an offense liable to traffic challans under the Motor Vehicles Ordinance.",
              answerUr: "نہیں، قانون کے مطابق لرنر ہولڈر اکیلے گاڑی نہیں چلا سکتا۔ فرنٹ سیٹ پر لائسنس یافتہ ڈرائیور کا ہونا اور گاڑی کے آگے پیچھے سرخ رنگ کا 'L' اسٹیکر لگانا لازمی ہے۔",
            },
            {
              questionEn: "How long does the entire driving license process take from learner to smart card?",
              questionUr: "لرنر پرمٹ سے لے کر اسمارٹ کارڈ گھر پہنچنے تک کتنا وقت لگتا ہے؟",
              answerEn: "The learner permit is issued instantly online (as a downloadable PDF). You must hold the learner permit for a mandatory 42-day waiting period before taking the practical driving test. After passing the computerized sign test (E-Sign) and practical track test, your permanent plastic Smart Card driving license is printed and delivered by courier to your doorstep within 5 to 10 working days.",
              answerUr: "لرنر فوری آن لائن مل جاتا ہے جس کے بعد 42 دن کا لازمی انتظار ہوتا ہے۔ ٹیسٹ پاس کرنے کے بعد 5 سے 10 دنوں میں اسمارٹ کارڈ بذریعہ ڈاک گھر پہنچ جاتا ہے۔",
            },
            {
              questionEn: "Can I apply for or renew a driving license online if I live in Sindh, KP, or Islamabad?",
              questionUr: "کیا سندھ، کے پی کے اور اسلام آباد کے رہائشی آن لائن لائسنس بنوا سکتے ہیں؟",
              answerEn: "Sindh offers online appointment pre-booking and online renewal services via dls.sindhpolice.gov.pk for selected categories, though biometric capture and fresh tests require visiting a designated Driving License Branch in Karachi or Hyderabad. KP operates the PTAP portal and Rabta mobile app for digital fee collection and learner issuance. Islamabad Traffic Police (ITP) provides digital appointment booking and cashless e-payments with Pakistan Post delivery.",
              answerUr: "سندھ میں dls.sindhpolice.gov.pk سے اپائنٹمنٹ اور آن لائن تجدید، کے پی میں رابطہ ایپ، اور اسلام آباد میں آئی ٹی پی پورٹل کے ذریعے ڈیجیٹل سروسز دستیاب ہیں۔",
            },
            {
              questionEn: "What is the Punjab Juvenile Driving Permit for teenagers aged 16 to 18?",
              questionUr: "16 سے 18 سال کے نوجوانوں کے لیے جووینائل ڈرائیونگ پرمٹ کیا ہے؟",
              answerEn: "The Punjab Government introduced a Juvenile Driving Permit specifically for teenagers aged 16 to 18 to legally ride motorcycles and scooters (up to 125cc). It requires physical presence of a parent/guardian, original B-Form, signed parental consent affidavit, passing the computerized sign test and riding track test, and payment of a PKR 500 annual fee. It is valid until the rider turns 18.",
              answerUr: "16 سے 18 سال کے نوجوانوں کو موٹر سائیکل (125cc تک) چلانے کے لیے والدین کی اجازت اور ٹیسٹ پاس کرنے پر 500 روپے سالانہ فیس کے ساتھ جووینائل پرمٹ جاری کیا جاتا ہے۔",
            },
            {
              questionEn: "How do I verify if a driving license is authentic online?",
              questionUr: "ڈرائیونگ لائسنس کے اصلی ہونے کی آن لائن تصدیق کیسے کریں؟",
              answerEn: "For Punjab, visit dlims.punjab.gov.pk/verify and enter the applicant's 13-digit CNIC number without hyphens. For Sindh, use dls.sindhpolice.gov.pk/online-verification. For KP, verify via the KP Police DLIMS portal or Rabta app. For Islamabad, check through islamabadpolice.gov.pk.",
              answerUr: "پنجاب کے لیے dlims.punjab.gov.pk/verify پر شناختی کارڈ نمبر لکھیں۔ سندھ، کے پی کے اور اسلام آباد کے ٹریفک پورٹلز پر بھی شناختی کارڈ سے فوری تصدیق دستیاب ہے۔",
            },
          ]}
        />

        {/* Related Driving & Traffic Verification Guides */}
        <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
            Related Driving License &amp; Traffic Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <Link
              href="/traffic/driving-license-status-check-online-2026"
              className="p-3.5 rounded-xl border border-doc-brass/30 hover:border-doc-seal bg-slate-50 dark:bg-slate-800 transition flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <span className="font-bold text-doc-ink dark:text-white block group-hover:text-doc-seal transition">
                  License Status Check →
                </span>
                <span className="text-slate-500 dark:text-slate-400">Track DLIMS smart card dispatch</span>
              </div>
            </Link>

            <Link
              href="/traffic/international-driving-permit-pakistan-2026"
              className="p-3.5 rounded-xl border border-doc-brass/30 hover:border-doc-seal bg-slate-50 dark:bg-slate-800 transition flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <span className="font-bold text-doc-ink dark:text-white block group-hover:text-doc-seal transition">
                  International Permit (IDP) →
                </span>
                <span className="text-slate-500 dark:text-slate-400">Drive in 150+ countries abroad</span>
              </div>
            </Link>

            <Link
              href="/traffic/vehicle-ownership-transfer-online-punjab-2026"
              className="p-3.5 rounded-xl border border-doc-brass/30 hover:border-doc-seal bg-slate-50 dark:bg-slate-800 transition flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <span className="font-bold text-doc-ink dark:text-white block group-hover:text-doc-seal transition">
                  Vehicle Transfer Punjab →
                </span>
                <span className="text-slate-500 dark:text-slate-400">Pak ID biometrics &amp; ePay</span>
              </div>
            </Link>

            <Link
              href="/traffic/e-challan-check-online"
              className="p-3.5 rounded-xl border border-doc-brass/30 hover:border-doc-seal bg-slate-50 dark:bg-slate-800 transition flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <span className="font-bold text-doc-ink dark:text-white block group-hover:text-doc-seal transition">
                  E-Challan Check &amp; Pay →
                </span>
                <span className="text-slate-500 dark:text-slate-400">Verify Safe City traffic fines</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Punjab Police DLIMS 2.0 Official Portal', url: 'https://dlims.punjab.gov.pk/' },
            { label: 'Sindh Police Driving License Branch (DLS)', url: 'https://dls.sindhpolice.gov.pk/' },
            { label: 'Islamabad Traffic Police (ITP) Licensing Division', url: 'https://islamabadpolice.gov.pk/' },
            { label: 'Punjab Dastak Facilitation Services', url: 'https://dastak.punjab.gov.pk/' },
            { label: 'Khyber Pakhtunkhwa Police Traffic Branch', url: 'https://dl.kppolice.gov.pk/' },
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
