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
  Building,
  Smartphone,
  QrCode,
  Calendar,
  Check,
  AlertCircle,
  Users,
  Compass
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nusuk App Guide for Pakistani Umrah Pilgrims 2026: Permits & BRN Rules | Pakistan Info Hub',
  description:
    'Essential 2026 guide to the Saudi Nusuk platform for Pakistani pilgrims: Understand why Umrah visas require a licensed operator and Nusuk BRN hotel booking, how to book Umrah and Rawdah (Riaz-ul-Jannah) permits, QR code check-in, and Urdu app features.',
  keywords: [
    'Nusuk app guide Pakistani pilgrims 2026',
    'how to book Rawdah Riaz ul Jannah permit Nusuk app',
    'Nusuk Umrah visa licensed operator Pakistan BRN',
    'Nusuk Masar booking reference number hotel requirement',
    'Nusuk app Urdu language download Google Play iOS',
    'can Pakistani apply Umrah visa directly Nusuk app',
    'Nusuk vs Nusuk Hajj platform difference',
  ],
  openGraph: {
    title: 'Nusuk App Guide for Pakistani Umrah Pilgrims 2026: Permits & BRN Rules',
    description:
      'Official guidelines for Pakistani pilgrims using the Nusuk app: Operator visa processing, BRN hotel linkage, and booking Rawdah / Umrah entry permits.',
    url: 'https://www.pakistaninfohub.com/hajj-umrah/nusuk-app-guide-pakistani-pilgrims-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/hajj-umrah/nusuk-app-guide-pakistani-pilgrims-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Hajj & Umrah Services', item: 'https://www.pakistaninfohub.com/hajj-umrah' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Nusuk App Guide 2026',
          item: 'https://www.pakistaninfohub.com/hajj-umrah/nusuk-app-guide-pakistani-pilgrims-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Nusuk App Guide for Pakistani Umrah Pilgrims 2026: Operator Visas, BRN & Rawdah Permits',
      description:
        'A comprehensive practical guide detailing the mandatory role of the Saudi Nusuk platform, the operator visa process, BRN hotel verification, and booking Riaz-ul-Jannah visit slots.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/hajj-umrah/nusuk-app-guide-pakistani-pilgrims-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can Pakistani citizens apply for an Umrah visa directly on the Nusuk app without a travel agent?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Pakistani passport holders cannot apply for an individual Umrah e-visa directly through the consumer Nusuk app. You must process your visa through a licensed Pakistani Umrah travel operator who lodges the application through the official B2B Nusuk Masar platform alongside a verified Booking Reference Number (BRN).',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if I have a valid Umrah visa but do not book a Rawdah permit in the Nusuk app?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You will be denied entry to the Noble Rawdah (Riaz-ul-Jannah) in Masjid an-Nabawi. Saudi security strictly scans live QR code permits from the Nusuk app at the courtyard gates. Screenshots or printed visas alone are not accepted.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a Nusuk BRN (Booking Reference Number) and why is it mandatory?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under Saudi Arabia’s "No Booking, No Visa" policy, your Umrah visa must be electronically tied to a confirmed hotel accommodation registered on the official Nusuk system. Third-party unintegrated hotel bookings cannot generate a valid BRN, leading to visa rejection.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the Nusuk mobile application available in the Urdu language?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The Nusuk app (available for free on Android and iOS) includes full Urdu language interface support, allowing Pakistani pilgrims to easily navigate profile settings, prayers timings, and permit schedules.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the regular Nusuk app used for Hajj 2026 as well?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The regular Nusuk app handles year-round Umrah and Rawdah visits. Hajj applications and package allocations are managed through a completely separate, dedicated platform known as Nusuk Hajj and the Pakistani Ministry of Religious Affairs quota balloting.',
          },
        },
      ],
    },
  ],
};

export default function NusukAppGuidePage() {
  const breadcrumbs = [
    { nameEn: 'Hajj & Umrah Services', nameUr: 'حج اور عمرہ سروسز' },
    { nameEn: 'Nusuk App Guide', nameUr: 'نسک ایپ عمرہ و ریاض الجنہ گائیڈ 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="SAUDI NUSUK PLATFORM GUIDE" labelUr="نسک پورٹل اور ایپ گائیڈ" variant="seal" />
            <VerifiedBadge textEn="MINISTRY OF HAJJ & UMRAH VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Nusuk App Guide for Pakistani Pilgrims 2026: Umrah Visas, BRN &amp; Rawdah Permits
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پاکستانی زائرین کے لیے نسک (Nusuk) ایپ گائیڈ: عمرہ ویزہ، ہوٹل BRN اور ریاض الجنہ پرمٹ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            A comprehensive, practical guide clearing up common misconceptions about Saudi Arabia&apos;s Nusuk platform. Learn why
            Pakistani pilgrims must obtain their visa through a licensed travel operator, the mandatory &quot;No Booking, No Visa&quot; BRN
            hotel rule, and how to successfully book Umrah and Rawdah (Riaz-ul-Jannah) permits on your phone.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="Can Pakistani Citizens Apply for an Umrah Visa Directly on the Nusuk App?"
          topicTitleUr="کیا پاکستانی شہری نسک ایپ سے براہ راست عمرہ ویزہ حاصل کر سکتے ہیں؟"
          answerEn="No. Pakistani citizens cannot apply directly for an Umrah visa through the individual Nusuk consumer app. You must process your visa through a licensed Pakistani Umrah travel operator using the Nusuk Masar platform. Once your visa is approved with a valid hotel BRN, download the Nusuk app to book your mandatory Umrah and Rawdah permits."
          answerUr="نہیں! پاکستانی شہری نسک ایپ سے براہ راست عمرہ ویزہ اپلائی نہیں کر سکتے۔ ویزہ منظور شدہ ٹریول ایجنٹ کے ذریعے نسک مسار پورٹل سے ہوٹل BRN کے ساتھ لگے گا۔ ویزہ ملنے کے بعد آپ نسک ایپ ڈاؤن لوڈ کر کے عمرہ اور ریاض الجنہ کے پرمٹ خود بک کریں گے۔"
        />

        {/* Section 1: Travel Operator Role vs Pilgrim Role */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Who Does What? Travel Operator vs. Pilgrim Responsibilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-seal text-sm block">1. Licensed Umrah Operator (Before Travel)</span>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-300 list-disc list-inside">
                <li>Applies for the electronic Umrah Visa via the <strong>Nusuk Masar</strong> B2B portal.</li>
                <li>Generates the mandatory <strong>Booking Reference Number (BRN)</strong> for authorized hotels.</li>
                <li>Provides the official Visa Document with the 10-digit Saudi Visa Number and MOFA reference.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-brass text-sm block">2. Pilgrim (On Phone / In Saudi Arabia)</span>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-300 list-disc list-inside">
                <li>Downloads the free <strong>Nusuk App</strong> from Google Play Store or Apple App Store.</li>
                <li>Creates a profile using Passport Number, Visa Number, and Nationality.</li>
                <li>Selects date and time slots to generate live <strong>QR Code Entry Permits</strong> for Umrah &amp; Rawdah.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: The Mandatory Hotel BRN Rule */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Building className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              The &quot;No Booking, No Visa&quot; Rule &amp; Nusuk BRN
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 font-sans text-xs">
            <div className="flex items-center gap-2 text-doc-brass font-bold text-sm">
              <AlertCircle className="w-5 h-5 text-amber-400" />
              <span>Why Third-Party Hotel Bookings Can Cause Visa Rejection</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              The Saudi Ministry of Hajj &amp; Umrah strictly enforces a pre-integrated housing protocol. Your Umrah visa cannot be issued without a verified <strong>Booking Reference Number (BRN)</strong> generated directly by a Saudi-licensed hospitality provider on the Nusuk Masar network.
            </p>
            <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-300">
              <strong>Caution:</strong> Hotel reservations made on unintegrated consumer websites (such as generic booking portals) do NOT generate a valid Nusuk BRN. Always confirm with your Pakistani travel agent that your Makkah and Madinah hotels are registered on the Nusuk platform.
            </div>
          </div>
        </section>

        {/* Section 3: Step-by-Step Booking of Rawdah & Umrah Permits */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <QrCode className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step: Booking Umrah &amp; Rawdah Permits in the App
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Install &amp; Set Language</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Download the <strong>Nusuk</strong> app. Select <strong>Urdu</strong> or English from the language toggle.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Register as Visitor</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Choose &quot;Visitor/International&quot;. Enter your 10-digit Visa Number, Passport Number, DOB, and Email.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Select Rawdah Slot</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Tap <strong>&quot;Prophet&apos;s Mosque Services&quot; → &quot;Praying in the Noble Rawdah&quot;</strong>. Choose your gender, date, and time slot.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs">4</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Show Active QR Code</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Arrive 15 minutes before your slot. Present the live active QR permit in your app to the security gate officers.
              </p>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 4: Nusuk (Umrah) vs Nusuk Hajj Difference */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Compass className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Nusuk (Umrah) vs. Nusuk Hajj: Key Platform Differences
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 font-sans text-xs">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Do not confuse the everyday Nusuk mobile app with the separate annual Hajj management system:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white block">Nusuk App (Year-Round Umrah)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Used by all international pilgrims to book individual time slots for Tawaf, Umrah, and visits to Riaz-ul-Jannah.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-seal block">Nusuk Hajj Platform (Annual Hajj)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  A dedicated portal for international Hajj quotas and package bookings, distinct from Pakistan&apos;s Government/Private quota system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step Nusuk App Registration &amp; Permit Booking Workflow (2026)"
          titleUr="نسک (Nusuk) ایپ پر رجسٹریشن اور ریاض الجنہ پرمٹ بکنگ کا طریقہ"
          subtitleEn="4-stage procedure from travel operator BRN visa to live QR gate access in Makkah and Madinah"
          subtitleUr="ٹریول ایجنٹ کے ذریعے ویزا کے اندراج سے لے کر حرم شریف کے دروازوں پر کیو آر کوڈ اسکین کرنے تک کے مراحل"
          steps={[
            {
              number: 1,
              titleEn: "Obtain Umrah Visa with Verified BRN",
              titleUr: "منظور شدہ ٹریول ایجنٹ سے ویزا اور ہوٹل BRN حاصل کریں",
              descEn: "Apply through a licensed Pakistani operator; ensure your visa is electronically linked to a verified hotel Booking Reference Number (BRN).",
              descUr: "اپنا عمرہ ویزا منظور شدہ ٹریول ایجنٹ کے ذریعے اپلائی کریں اور یقینی بنائیں کہ اس کے ساتھ تصدیق شدہ ہوٹل BRN منسلک ہے۔",
              tagEn: "Visa & BRN",
              tagUr: "ویزا و ہوٹل",
            },
            {
              number: 2,
              titleEn: "Download & Create Nusuk Account",
              titleUr: "موبائل میں نسک ایپ ڈاؤن لوڈ کر کے اکاؤنٹ بنائیں",
              descEn: "Install the official Nusuk app (Play Store/App Store); select 'International Visitor' and register using your passport and visa number.",
              descUr: "گوگل پلے اسٹور سے نسک ایپ ڈاؤن لوڈ کریں، 'انٹرنیشنل وزیٹر' منتخب کریں اور پاسپورٹ و ویزا نمبر درج کر کے سائن اپ کریں۔",
              tagEn: "Nusuk App",
              tagUr: "نسک ایپ",
            },
            {
              number: 3,
              titleEn: "Book Umrah & Rawdah Time Slots",
              titleUr: "عمرہ طواف اور ریاض الجنہ (روضہ رسولؐ) کا پرمٹ بک کریں",
              descEn: "Select available date and color-coded time slot for noble Rawdah (Riaz-ul-Jannah) and Umrah tawaf; add family members to your group.",
              descUr: "ایپ میں ریاض الجنہ کی زیارت کے لیے تاریخ اور وقت کا انتخاب کریں اور اپنے ہمراہ اہلخانہ کو بھی پرمٹ میں شامل کریں۔",
              tagEn: "Slot Booking",
              tagUr: "پرمٹ سلاٹ",
            },
            {
              number: 4,
              titleEn: "Scan Live QR Code at Mosque Gates",
              titleUr: "حرم کے دروازے پر لائیو کیو آر کوڈ اسکین کروائیں",
              descEn: "Arrive at the designated gate 15 minutes before your slot; present the active dynamic QR permit inside the Nusuk app for entry.",
              descUr: "مقررہ وقت سے 15 منٹ پہلے متعلقہ گیٹ پر پہنچیں اور نسک ایپ کھول کر سیکیورٹی عملے کو ایکٹو کیو آر کوڈ دکھا کر داخل ہوں۔",
              tagEn: "QR Gate Access",
              tagUr: "کیو آر انٹری",
            },
          ]}
        />

        {/* Section 5: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Hajj &amp; Travel Verification Tools on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/hajj-umrah/hajj-application-eligibility-checker-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Hajj Tool</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Hajj Eligibility Checker 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check repeat-pilgrim rules, medical fitness, and sponsorship quota.</p>
            </Link>

            <Link
              href="/hajj-umrah/hajj-balloting-result-check-online"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Ballot Results</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Hajj Balloting Result Checker →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check official Government Scheme draw results by CNIC.</p>
            </Link>

            <Link
              href="/passport/tracking-status"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Passport Status</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Passport Live Tracking Tool →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Track MRP booklet printing and delivery before your trip.</p>
            </Link>
          </div>
        </section>

        {/* Section 6: FAQs */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Nusuk App &amp; Umrah Visas)"
          titleUr="نسک ایپ اور عمرہ ویزا سے متعلق عام سوالات"
          subtitleEn="Essential guidelines on direct individual visas, mandatory Rawdah permits, BRN verification, and Urdu language settings"
          subtitleUr="براہ راست ویزا کے قواعد، ریاض الجنہ کی بکنگ، ہوٹل بی آر این کی شرط اور اردو زبان کی سہولت"
          items={[
            {
              questionEn: "Can Pakistani citizens apply for an Umrah visa directly on the Nusuk app without a travel agent?",
              questionUr: "کیا پاکستانی شہری ٹریول ایجنٹ کے بغیر براہ راست نسک ایپ سے عمرہ ویزا حاصل کر سکتے ہیں؟",
              answerEn: "No. Pakistani passport holders cannot apply for an individual Umrah e-visa directly through the consumer Nusuk app. You must process your visa through a licensed Pakistani Umrah travel operator who lodges the application through the official B2B Nusuk Masar platform alongside a verified Booking Reference Number (BRN).",
              answerUr: "نہیں! پاکستانی پاسپورٹ کے حامل افراد کو اپنا عمرہ ویزا منظور شدہ ٹریول ایجنٹ کے ذریعے ہی لگوانا پڑتا ہے جو سعودی بی ٹو بی مسار سسٹم پر تصدیق شدہ ہوٹل بی آر این کے ساتھ فائل جمع کرواتا ہے۔",
            },
            {
              questionEn: "What happens if I have a valid Umrah visa but do not book a Rawdah permit in the Nusuk app?",
              questionUr: "اگر ویزا ہو لیکن نسک ایپ پر ریاض الجنہ کا پرمٹ بک نہ کیا جائے تو کیا ہوگا؟",
              answerEn: "You will be denied entry to the Noble Rawdah (Riaz-ul-Jannah) in Masjid an-Nabawi. Saudi security strictly scans live QR code permits from the Nusuk app at the courtyard gates. Screenshots or printed visas alone are not accepted.",
              answerUr: "مسجد نبویؐ کے صحن میں سیکیورٹی اہلکار نسک ایپ سے لائیو کیو آر کوڈ اسکین کرتے ہیں۔ پرمٹ کے بغیر ریاض الجنہ میں داخلے کی قطعی اجازت نہیں دی جاتی۔",
            },
            {
              questionEn: "What is a Nusuk BRN (Booking Reference Number) and why is it mandatory?",
              questionUr: "نسک بی آر این (BRN) کیا ہے اور یہ کیوں لازمی ہے؟",
              answerEn: "Under Saudi Arabia’s \"No Booking, No Visa\" policy, your Umrah visa must be electronically tied to a confirmed hotel accommodation registered on the official Nusuk system. Third-party unintegrated hotel bookings cannot generate a valid BRN, leading to visa rejection.",
              answerUr: "سعودی وزارت حج کی پالیسی کے تحت عمرہ ویزا تب ہی منظور ہوتا ہے جب آپ کی رہائش نسک سسٹم پر رجسٹرڈ ہوٹل میں کنفرم ہو، جس سے حاصل ہونے والا نمبر بی آر این کہلاتا ہے۔",
            },
            {
              questionEn: "Is the Nusuk mobile application available in the Urdu language?",
              questionUr: "کیا نسک موبائل ایپ میں اردو زبان کی سہولت موجود ہے؟",
              answerEn: "Yes. The Nusuk app (available for free on Android and iOS) includes full Urdu language interface support, allowing Pakistani pilgrims to easily navigate profile settings, prayers timings, and permit schedules.",
              answerUr: "جی ہاں! نسک ایپ مکمل طور پر اردو زبان میں دستیاب ہے، پاکستانی عازمین سیٹنگز میں جا کر اردو زبان منتخب کر کے باآسانی تمام پرمٹ بک کر سکتے ہیں۔",
            },
            {
              questionEn: "Is the regular Nusuk app used for Hajj 2026 as well?",
              questionUr: "کیا عام نسک ایپ حج کے لیے بھی استعمال ہوتی ہے؟",
              answerEn: "No. The regular Nusuk app handles year-round Umrah and Rawdah visits. Hajj applications and package allocations are managed through a completely separate, dedicated platform known as Nusuk Hajj and the Pakistani Ministry of Religious Affairs quota balloting.",
              answerUr: "نہیں! یہ ایپ صرف سال بھر کے عمرہ اور روضہ رسولؐ کی زیارت کے لیے ہے۔ حج کے لیے ایک الگ پورٹل (Nusuk Hajj) اور وزارت مذہبی امور کی قرعہ اندازی کا نظام کام کرتا ہے۔",
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Saudi Ministry of Hajj and Umrah (Nusuk Platform)', url: 'https://www.nusuk.sa/' },
            { label: 'Ministry of Religious Affairs & Interfaith Harmony Pakistan', url: 'https://mora.gov.pk/' },
            { label: 'General Authority for the Care of the Two Holy Mosques', url: 'https://gph.gov.sa/' },
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
