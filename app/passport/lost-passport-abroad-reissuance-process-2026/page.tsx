import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, FAQAccordionVisual } from '@/components/visuals';
import {
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  Plane,
  FileCheck,
  Building,
  AlertCircle,
  FileText,
  CreditCard,
  ShieldAlert,
  Globe,
  Compass,
  PhoneCall
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lost Pakistani Passport Abroad Guide 2026 – Reissuance & Emergency Outpass | Pakistan Info Hub',
  description:
    'Lost or had your Pakistani passport stolen abroad? Step-by-step 2026 consular guide on filing a local police report, applying at the nearest Pakistani Embassy or Consulate, verification timelines (3-6 weeks), and obtaining an Emergency Travel Document (Outpass) for urgent flights.',
  keywords: [
    'lost Pakistani passport abroad reissuance 2026',
    'Pakistani embassy emergency travel document outpass',
    'lost passport police report overseas Pakistan mission',
    'DGIP lost passport verification delay abroad',
    'how to apply duplicate Pakistani passport in UK USA UAE',
    'complaints passport interior gov pk overseas',
    'emergency outpass for Pakistani returning home',
  ],
  openGraph: {
    title: 'Lost Pakistani Passport Abroad Guide 2026 – Embassy Reissuance & Outpass',
    description:
      'A calm, practical manual for overseas Pakistanis: local police reporting, embassy MRP/e-Passport application, DGIP Islamabad verification, and emergency travel documents.',
    url: 'https://www.pakistaninfohub.com/passport/lost-passport-abroad-reissuance-process-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/passport/lost-passport-abroad-reissuance-process-2026' },
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
          name: 'Lost Passport Abroad Reissuance 2026',
          item: 'https://www.pakistaninfohub.com/passport/lost-passport-abroad-reissuance-process-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Lost Pakistani Passport Abroad: Reissuance Process, Embassy Timelines & Emergency Outpass Guide 2026',
      description:
        'A comprehensive public consular guide explaining what to do when a Pakistani passport is lost or stolen overseas, mandatory host-country police reporting, DGIP verification realities, and emergency outpass procedures.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/passport/lost-passport-abroad-reissuance-process-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does it really take to get a replacement passport issued abroad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Because a lost passport requires formal security verification, cancellation of the old record, and clearance from the Directorate General of Immigration & Passports (DGIP) headquarters in Islamabad before a new booklet can be printed and dispatched via diplomatic courier, the process typically takes 3 to 6 weeks. If you do not have your old passport number or copy, it can take longer.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if I need to return to Pakistan immediately for an emergency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If you have an urgent family emergency, medical situation, or expired foreign visa, visit the nearest Pakistan Embassy or Consulate General in person to apply for an Emergency Travel Document (ETD / Outpass). An ETD is typically issued within 1 to 3 working days and allows direct, one-way travel back to Pakistan.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I fly to other foreign countries or transit long layovers using an Emergency Outpass (ETD)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. An Emergency Travel Document (Outpass) is strictly a single-entry, one-way travel document valid exclusively for returning directly to Pakistan. International airlines and foreign border authorities will not allow you to board flights with third-country layovers requiring transit visas.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I do not have a photocopy or record of my lost passport number?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The embassy can trace your record using your 13-digit NADRA CNIC / NICOP number. However, this manual record search in DGIP centralized archives requires additional processing time. Having a digital photo or scan of your lost passport\'s data page significantly speeds up the clearance.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where can I escalate complaints if my passport reissuance is excessively delayed overseas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can register an official complaint directly with the Ministry of Interior\'s Overseas Passport Cell at complaints.passport@interior.gov.pk or log a formal ticket on the Prime Minister\'s Performance Delivery Unit (PMDU) Pakistan Citizen\'s Portal.',
          },
        },
      ],
    },
  ],
};

export default function LostPassportAbroadPage() {
  const breadcrumbs = [
    { nameEn: 'Passport & Travel', nameUr: 'پاسپورٹ اور ٹریول' },
    { nameEn: 'Lost Passport Abroad Guide', nameUr: 'بیرون ملک گم شدہ پاسپورٹ کا اجراء 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="EMBASSY CONSULAR GUIDE" labelUr="سفارتخانہ پاسپورٹ گائیڈ" variant="seal" />
            <VerifiedBadge textEn="DGIP & MOFA COMPLIANT" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Lost Pakistani Passport Abroad Guide 2026: Embassy Reissuance &amp; Emergency Outpass
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              بیرون ملک گم شدہ یا چوری پاسپورٹ کا دوبارہ اجراء: پولیس رپورٹ، ایمرجنسی آؤٹ پاس اور نادرا تصدیق
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Losing your travel document in a foreign country can be overwhelming, but following clear, sequential steps
            ensures you remain legally protected and get home safely. Understand the mandatory local police reporting rule,
            realistic 3-to-6-week verification timelines, and how to obtain an Emergency Outpass for immediate flights.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is the Immediate First Step If You Lose Your Passport Abroad?"
          topicTitleUr="بیرون ملک پاسپورٹ گم ہونے پر سب سے پہلا کام کیا کریں؟"
          answerEn="Immediately file a Loss Report / FIR at the local police station in the city where it was lost to obtain an official police certificate mentioning your passport number. Next, contact the nearest Pakistani Embassy or Consulate with your police report and original NADRA CNIC/NICOP. If you must travel urgently, request an Emergency Travel Document (Outpass)."
          answerUr="سب سے پہلے جس ملک میں پاسپورٹ گم ہوا ہے، وہاں کے مقامی پولیس اسٹیشن میں رپورٹ درج کروا کر پولیس سرٹیفکیٹ حاصل کریں۔ اس کے بعد اپنے نادرا شناختی کارڈ/نائیکوپ کے ساتھ قریبی پاکستانی سفارت خانے سے رجوع کریں۔ ہنگامی واپسی کے لیے ایمرجنسی آؤٹ پاس حاصل کیا جا سکتا ہے۔"
        />

        {/* Section 1: Step-by-Step Consular Reissuance Procedure */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step: How to Replace a Lost Passport Overseas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Local Police Report</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Visit the nearest local police station in your host country. Report the loss/theft and ensure the written police receipt explicitly records your full name and lost passport number.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Embassy Appointment</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Book a consular appointment or visit the nearest Pakistani Embassy / Consulate General. Fill out the official &quot;Lost Passport Reissuance Form&quot;.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Biometrics &amp; DGIP Sync</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Provide live fingerprints, photograph, and submit your valid original NADRA NICOP/CNIC. The mission transmits the loss notification to DGIP Islamabad for cancellation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs">4</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Verification &amp; Collection</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Once headquarters in Islamabad clears the prior record, your new booklet is printed and dispatched via secure diplomatic pouch for collection or postal delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Honest Reality Check on Verification Delays */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Honest Expectation: Why Lost Passport Reissuance Takes 3–6 Weeks
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 font-sans text-xs">
            <div className="flex items-center gap-2 text-doc-seal font-bold text-sm">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span>Understanding the Security Verification Requirement</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Unlike a routine passport renewal (which can be fast-tracked online in a few days), a <strong>Lost Passport</strong> application cannot be printed immediately abroad. International civil aviation and Pakistani national security regulations require:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white block">1. Interpol / Loss Blacklist Lock</span>
                <p className="text-slate-600 dark:text-slate-300">
                  DGIP headquarters must cancel the previous booklet in the central database to ensure the lost booklet cannot be misused by human traffickers or imposters.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white block">2. Issuing Office Cross-Check</span>
                <p className="text-slate-600 dark:text-slate-300">
                  The original regional passport office in Pakistan that issued the lost card must authenticate the physical file and issue a No-Objection clearance.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white block">3. Diplomatic Courier Transit</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Once printed at the security printing press in Islamabad, physical booklets are shipped overseas via scheduled diplomatic bag dispatches.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Emergency Travel Document (Outpass) Option */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Plane className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Need to Fly Home Urgently? Emergency Travel Document (Outpass / ETD)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2">
              <span className="font-bold text-emerald-800 dark:text-emerald-300 text-sm block">
                When to Apply for an Emergency Outpass (ETD)
              </span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                If you cannot afford to wait 3–6 weeks abroad due to a medical emergency, job termination, visa expiration, or urgent family necessity in Pakistan:
              </p>
              <ul className="text-slate-700 dark:text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                <li>Visit the nearest Pakistani Mission in person during morning consular walk-in hours.</li>
                <li>Submit your Police Report, original NADRA CNIC/NICOP, and confirmed one-way flight ticket to Pakistan.</li>
                <li>The mission issues an official <strong>Emergency Travel Document (ETD)</strong> within 1 to 3 working days.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 space-y-2">
              <span className="font-bold text-red-800 dark:text-red-300 text-sm block">
                Strict Limitations of an Emergency Outpass
              </span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Keep these critical operational constraints in mind before booking your flight:
              </p>
              <ul className="text-slate-700 dark:text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                <li><strong>One-Way Only:</strong> Valid strictly for a single journey returning directly to Pakistan. It is surrendered to FIA immigration upon arrival at the Pakistani airport.</li>
                <li><strong>No Transit Tourism:</strong> You cannot leave the airport during layovers or travel onward to third countries. Direct or single-transit connecting flights on the same ticket are strongly recommended.</li>
              </ul>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 4: Preventive Checklist for All Travelers */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Essential Travel Protection: Digital Backup Protocol
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 font-sans text-xs">
            <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
              Always Save These 3 Digital Copies Before Boarding Any International Flight:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="font-bold text-doc-seal block">1. Passport Data Page Scan</span>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  High-resolution photo showing your passport number, expiry date, and signature page stored in your Google Drive, iCloud, or saved in an email draft.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="font-bold text-doc-seal block">2. NADRA Smart Card / NICOP</span>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  Photos of front and back of your 13-digit identity card. This serves as primary citizenship proof for the embassy.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="font-bold text-doc-seal block">3. Foreign Visa &amp; Entry Stamp</span>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  Photo of your host country valid visa sticker, residence permit, or airport entry immigration stamp.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step Lost Passport Reissuance Workflow Abroad (DGIP & MOFA 2026)"
          titleUr="بیرون ملک گمشدہ پاکستانی پاسپورٹ کے دوبارہ حصول کا 5 مرحلہ وار طریقہ"
          subtitleEn="5-stage sequence from host police report to Islamabad HQ verification and new passport dispatch"
          subtitleUr="مقامی پولیس رپورٹ سے لے کر سفارت خانے میں درخواست اور نئے پاسپورٹ کے حصول تک کے مراحل"
          steps={[
            {
              number: 1,
              titleEn: "Host Country Police Report",
              titleUr: "مقامی پولیس اسٹیشن میں رپورٹ",
              descEn: "Visit the local police station in your host city; obtain an official police lost report / crime reference number.",
              descUr: "جس ملک میں پاسپورٹ گم ہوا ہے وہاں کے قریبی تھانے میں رپورٹ درج کروا کے سرکاری تصدیقی پرچی حاصل کریں۔",
              tagEn: "Police Report",
              tagUr: "پولیس رپورٹ",
            },
            {
              number: 2,
              titleEn: "Embassy / Consulate Booking",
              titleUr: "پاکستانی سفارت خانے میں اپائنٹمنٹ",
              descEn: "Book an appointment at the nearest Pakistan Embassy / Consulate General via the official online booking portal.",
              descUr: "قریبی پاکستانی سفارت خانے یا قونصل خانے میں آن لائن اپائنٹمنٹ بک کریں اور مقررہ وقت پر تشریف لے جائیں۔",
              tagEn: "Embassy Visit",
              tagUr: "سفارت خانہ",
            },
            {
              number: 3,
              titleEn: "Document Submission & Biometrics",
              titleUr: "کاغذات اور بائیومیٹرک اندراج",
              descEn: "Submit original CNIC/NICOP, police report, and lost passport copy; complete live digital fingerprint and photo capture.",
              descUr: "اصل شناختی کارڈ/نائیکوپ، پولیس رپورٹ اور پرانے پاسپورٹ کی کاپی جمع کروا کر بائیومیٹرک فنگر پرنٹس دیں۔",
              tagEn: "NICOP & Bio",
              tagUr: "بائیومیٹرک",
            },
            {
              number: 4,
              titleEn: "DGIP Islamabad Security Clearance",
              titleUr: "ڈی جی آئی پی اسلام آباد سے تصدیق",
              descEn: "Embassy transmits data to DGIP HQ Islamabad to cancel old passport in the central system and authorize printing.",
              descUr: "سفارت خانہ ڈیٹا اسلام آباد ہیڈ کوارٹر بھیجتا ہے جہاں پرانا پاسپورٹ بلاک کر کے نیا پرنٹ کرنے کی منظوری دی جاتی ہے۔",
              tagEn: "DGIP Clearance",
              tagUr: "مرکزی تصدیق",
            },
            {
              number: 5,
              titleEn: "Booklet Delivery / Emergency Outpass",
              titleUr: "نیا پاسپورٹ یا ایمرجنسی آؤٹ پاس",
              descEn: "Collect new printed passport (3–6 weeks) or receive a 1-way Emergency Travel Document (ETD) if traveling immediately.",
              descUr: "ڈپلومیٹک ڈاک سے نیا پاسپورٹ وصول کریں یا فوری واپسی کی صورت میں 1 سے 3 دن میں ایمرجنسی ٹریول پرمٹ حاصل کریں۔",
              tagEn: "Passport / ETD",
              tagUr: "پاسپورٹ وصولی",
            },
          ]}
        />

        {/* Section 5: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Passport &amp; Travel Guides on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/passport/passport-new-rules-2026-cashless-epassport"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">New Rules 2026</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Cashless e-Passport Regulations →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Digital fee payments and microchip e-passports.</p>
            </Link>

            <Link
              href="/passport/tracking-status"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Status Tracker</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Passport Live Tracking Tool →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Track DGIP printing and international dispatch progress.</p>
            </Link>

            <Link
              href="/overseas/nicop-mandatory-entry-rules-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Overseas Identity</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NICOP Travel Rules 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Mandatory entry documentation for expatriates.</p>
            </Link>
          </div>
        </section>

        {/* Section 6: FAQs */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Lost Passport Overseas)"
          titleUr="بیرون ملک گمشدہ پاسپورٹ سے متعلق عام سوالات"
          subtitleEn="Essential guidelines on processing wait times, emergency travel documents (ETD/Outpass), transit layovers, and complaints"
          subtitleUr="پروسیسنگ کا وقت، ہنگامی آؤٹ پاس، ٹرانزٹ پروازیں اور اسلام آباد شکایت کے حل کی مکمل تفصیل"
          items={[
            {
              questionEn: "How long does it really take to get a replacement passport issued abroad?",
              questionUr: "بیرون ملک گمشدہ پاسپورٹ بننے میں حقیقت میں کتنا وقت لگتا ہے؟",
              answerEn: "Because a lost passport requires formal security verification, cancellation of the old record, and clearance from the Directorate General of Immigration & Passports (DGIP) headquarters in Islamabad before a new booklet can be printed and dispatched via diplomatic courier, the process typically takes 3 to 6 weeks. If you do not have your old passport number or copy, it can take longer.",
              answerUr: "چونکہ اسلام آباد ہیڈ کوارٹر سے تصدیق اور پرانے پاسپورٹ کی منسوخی لازمی ہوتی ہے، اس لیے سفارت خانے سے نیا پاسپورٹ بننے میں عام طور پر 3 سے 6 ہفتے لگتے ہیں۔",
            },
            {
              questionEn: "What should I do if I need to return to Pakistan immediately for an emergency?",
              questionUr: "اگر کسی ایمرجنسی کی وجہ سے فوری پاکستان واپس جانا ہو تو کیا کریں؟",
              answerEn: "If you have an urgent family emergency, medical situation, or expired foreign visa, visit the nearest Pakistan Embassy or Consulate General in person to apply for an Emergency Travel Document (ETD / Outpass). An ETD is typically issued within 1 to 3 working days and allows direct, one-way travel back to Pakistan.",
              answerUr: "ہنگامی صورتحال میں پاکستانی سفارت خانے جائیں اور 'ایمرجنسی ٹریول ڈاکومنٹ (آؤٹ پاس)' بنوائیں جو 1 سے 3 دن میں جاری ہو جاتا ہے اور صرف پاکستان واپسی کے لیے قابل قبول ہوتا ہے۔",
            },
            {
              questionEn: "Can I fly to other foreign countries or transit long layovers using an Emergency Outpass (ETD)?",
              questionUr: "کیا ایمرجنسی آؤٹ پاس پر کسی تیسرے ملک کی کنیکٹنگ فلائٹ پر سفر کیا جا سکتا ہے؟",
              answerEn: "No. An Emergency Travel Document (Outpass) is strictly a single-entry, one-way travel document valid exclusively for returning directly to Pakistan. International airlines and foreign border authorities will not allow you to board flights with third-country layovers requiring transit visas.",
              answerUr: "نہیں! آؤٹ پاس صرف اور صرف براہ راست پاکستان واپسی کے لیے ہوتا ہے۔ کسی تیسرے ملک میں ٹرانزٹ یا ویزا والے اسٹاپ اوور کے لیے ائیر لائنز بورڈنگ نہیں دیتیں۔",
            },
            {
              questionEn: "What if I do not have a photocopy or record of my lost passport number?",
              questionUr: "اگر میرے پاس گمشدہ پاسپورٹ کا نمبر یا کاپی موجود نہ ہو تو کیا ہوگا؟",
              answerEn: "The embassy can trace your record using your 13-digit NADRA CNIC / NICOP number. However, this manual record search in DGIP centralized archives requires additional processing time. Having a digital photo or scan of your lost passport's data page significantly speeds up the clearance.",
              answerUr: "سفارت خانہ آپ کے 13 ہندسوں کے نادرا شناختی کارڈ/نائیکوپ نمبر سے پرانا ریکارڈ تلاش کر لیتا ہے، تاہم اس میں چند دن کا اضافی وقت لگ سکتا ہے۔",
            },
            {
              questionEn: "Where can I escalate complaints if my passport reissuance is excessively delayed overseas?",
              questionUr: "اگر بیرون ملک پاسپورٹ آنے میں غیر معمولی تاخیر ہو جائے تو شکایت کہاں درج کروائیں؟",
              answerEn: "You can register an official complaint directly with the Ministry of Interior's Overseas Passport Cell at complaints.passport@interior.gov.pk or log a formal ticket on the Prime Minister's Performance Delivery Unit (PMDU) Pakistan Citizen's Portal.",
              answerUr: "آپ وزارت داخلہ کے اوورسیز پاسپورٹ سیل (complaints.passport@interior.gov.pk) پر ای میل بھیج سکتے ہیں یا وزیر اعظم سٹیزن پورٹل ایپ پر شکایت درج کروا سکتے ہیں۔",
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Directorate General of Immigration & Passports (DGIP) Online Portal', url: 'https://onlinemrp.dgip.gov.pk/' },
            { label: 'Ministry of Foreign Affairs (MOFA) Overseas Missions Directory', url: 'https://mofa.gov.pk/' },
            { label: 'DGIP Overseas Citizen Facilitation Desk: complaints.passport@interior.gov.pk', url: 'https://dgip.gov.pk/' },
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
