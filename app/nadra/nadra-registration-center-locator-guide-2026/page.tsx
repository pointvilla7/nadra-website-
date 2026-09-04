import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  ProcessStepsDiagram,
  ComparisonVisual,
  FAQAccordionVisual,
} from '@/components/visuals';
import {
  ShieldCheck,
  Building,
  MapPin,
  Clock,
  Search,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  ExternalLink,
  CreditCard,
  Smartphone,
  Truck,
  Store,
  PhoneCall,
  UserCheck,
  Sparkles,
  HelpCircle,
  Layers,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NADRA Registration Center Locator Guide 2026 – Nearest NRC, Mega Centers & e-Sahulat | Pakistan Info Hub',
  description:
    'Find your nearest NADRA Registration Center (NRC): Mega 24/7 centers, Executive branches, Mobile Registration Vans (MRVs), and 17,000+ e-Sahulat franchise counters. Verified timings, token rules, and visit checklist.',
  keywords: [
    'nadra registration center locator 2026',
    'nadra mega center north nazimabad',
    'nadra branchless banking',
    'nearest nadra office rawalpindi lahore karachi islamabad',
    'nadra mega center timings 24 7',
    'nadra executive center appointment booking',
    'nadra e-sahulat vs nrc center difference',
    'nadra helpline 1777 center location',
    'nadra mobile registration van schedule',
    'what to bring to nadra center first visit',
  ],
  openGraph: {
    title: 'NADRA Registration Center Locator Guide 2026 – Branch Finder & Timings',
    description:
      'Official guide to locating your nearest NADRA center: Mega 24/7 hubs, Executive centers, Mobile Vans, and e-Sahulat counters across Pakistan.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/nadra/nadra-registration-center-locator-guide-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/nadra/nadra-registration-center-locator-guide-2026',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com/' },
        { '@type': 'ListItem', position: 2, name: 'NADRA Services', item: 'https://www.pakistaninfohub.com/nadra' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'NADRA Registration Center Locator Guide 2026',
          item: 'https://www.pakistaninfohub.com/nadra/nadra-registration-center-locator-guide-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'NADRA Registration Center Locator Guide 2026: Mega Centers, Executive Desks, e-Sahulat & Timings',
      description:
        'A comprehensive public guide explaining how to find your nearest NADRA office, the service tiers across Mega Centers, regular NRCs, and e-Sahulat franchises, and what to expect during in-person visits.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-30',
      dateModified: '2026-09-03',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/nadra/nadra-registration-center-locator-guide-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I need an appointment before visiting a NADRA Registration Center?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For 95% of NADRA centers across Pakistan, appointments are not required; citizens operate on a first-come, first-served walk-in token system. However, select Executive Centers in major cities (Islamabad Blue Area, Lahore DHA, Karachi Clifton) offer optional online appointment scheduling via the Pak Identity portal or Rahbar app for express priority service.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can any NADRA Registration Center handle my request, or must I visit my home district center?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NADRA operates an entirely nationwide unified database. You can visit ANY NADRA Registration Center anywhere in Pakistan for CNIC renewals, duplicate smart cards, FRC issuance, and address modifications, regardless of where your permanent or present address is registered.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the main difference between a Regular NRC, a Mega Center, and an Executive Center?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Regular NRCs handle all services during standard office hours (8:30 AM – 4:30 PM). Executive Centers charge a premium fast-track fee for expedited queue tokens and air-conditioned lounges with extended hours (8:30 AM – 10:30 PM). Mega Centers operate 24 hours a day, 7 days a week (24/7) in metropolitan cities like Lahore, Karachi, Rawalpindi, and Peshawar.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use an e-Sahulat franchise counter instead of visiting a full NADRA center?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'e-Sahulat franchise counters (available in over 17,000 neighborhood retail shops) can handle basic biometric verification, utility bill payments, citizen verification for banks, and fee chalan deposits. However, for fresh CNIC enrollment, photograph capture, iris scanning, card collection, or FRC issuance, you must visit a full NRC or use the official Pak ID mobile app.',
          },
        },
      ],
    },
  ],
};

export default function NadraCenterLocatorGuidePage() {
  const breadcrumbs = [
    { nameEn: 'NADRA Services', nameUr: 'نادرا سروسز', url: '/nadra' },
    { nameEn: 'Registration Center Locator 2026', nameUr: 'نادرا سنٹر لوکیٹر گائیڈ' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn max-w-5xl mx-auto">
        <Breadcrumbs items={breadcrumbs} />

        {/* Page Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="CIVIC DIRECTORY" labelUr="سرکاری ڈائریکٹری" variant="seal" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            NADRA Registration Center Locator Guide 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              قریبی نادرا رجسٹریشن سنٹر، میگا 24/7 برانچز و ای-سہولت لوکیٹر
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Find your nearest National Database and Registration Authority (NADRA) facility across Pakistan. Understand the key service differences between Regular NRCs, 24/7 Mega Centers, Executive lounges, Mobile Vans, and local e-Sahulat franchise counters.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Find Your Nearest NADRA Center & Choose the Right Facility"
          topicTitleUr="قریبی نادرا سنٹر کیسے تلاش کریں اور درست برانچ کا انتخاب کیسے کریں؟"
          answerEn="To locate your nearest NADRA center: (1) Use the official NADRA location portal at nadra.gov.pk/ngrids; (2) Open the official Pak ID mobile app on your smartphone for GPS-guided nearest center routing; or (3) Dial NADRA Helpline 1777 (from mobile) or (051) 111-786-100. Choose your facility based on your need: Regular NRCs offer standard-fee walk-in service (8:30 AM–4:30 PM); Executive Centers provide expedited priority queues with extended evening hours; Mega Centers operate 24/7 in major cities; and 17,000+ local e-Sahulat shop counters handle quick biometric verifications and bill payments without visiting a full registration center."
          answerUr="قریبی نادرا سنٹر تلاش کرنے کا سرکاری طریقہ: (1) نادرا کی آفیشل ویب سائٹ nadra.gov.pk/ngrids پر جائیں؛ (2) پاک آئی ڈی (Pak ID) موبائل ایپ سے جی پی ایس لوکیشن چیک کریں؛ یا (3) ہیلپ لائن 1777 پر کال کریں۔ اگر جلدی کام کروانا ہو تو ایگزیکٹو سنٹر (صبح 8:30 تا رات 10:30) یا میگا سنٹر (24 گھنٹے اوپن) کا انتخاب کریں۔ اگر صرف بائیومیٹرک تصدیق یا بل جمع کروانا ہو تو نادرا کے بجائے محلے کے ای-سہولت فرنچائز کاؤنٹر سے فوری کام ہو جاتا ہے۔"
        />

        {/* Section: The 4 NADRA Service Tiers (Comparison Visual) */}
        <section className="space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-doc-seal dark:text-doc-brass text-xs font-mono font-bold uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Service Tier Comparison</span>
            </div>
            <h2 className="text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
              The 4 NADRA Facility Tiers: Which One Should You Visit?
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Not all NADRA facilities offer the same services, timings, or fee structures. Compare before heading out:
            </p>
          </div>

          <ComparisonVisual
            titleEn="NADRA Facility Tiers & Capabilities"
            titleUr="نادرا دفاتر کی اقسام اور سہولیات کا موازنہ"
            subtitleEn="From 24/7 Mega hubs to local neighborhood e-Sahulat franchise shops"
            subtitleUr="میگا سنٹرز، ایگزیکٹو برانچز اور ای-سہولت کاؤنٹرز کی تفصیلی درجہ بندی"
            items={[
              {
                titleEn: "Mega Centers (24/7)",
                titleUr: "میگا رجسٹریشن سنٹرز (24 گھنٹے)",
                subtitleEn: "Metropolitan Flagship Hubs",
                subtitleUr: "بڑے شہروں کے مرکزی دفاتر",
                badgeEn: "Open 24/7",
                badgeUr: "24 گھنٹے فعال",
                badgeVariant: "emerald",
                isPopular: true,
                pointsEn: [
                  "Open 24 hours a day, 7 days a week, 365 days a year.",
                  "Over 30+ simultaneous counters for maximum processing speed.",
                  "Handles all CNIC, NICOP, FRC, Smart Card, and Succession applications.",
                ],
                features: [
                  { labelEn: "Operating Hours", valueEn: "24 Hours / 7 Days" },
                  { labelEn: "Token System", valueEn: "Walk-in Automated Token" },
                  { labelEn: "Locations", valueEn: "Lahore, Karachi, RWP, Peshawar, Islamabad" },
                ],
                recommendedForEn: "Employed professionals, night-shift workers, and applicants needing urgent documentation.",
              },
              {
                titleEn: "Executive Centers",
                titleUr: "ایگزیکٹو نادرا سنٹرز",
                subtitleEn: "Fast-Track Priority Lounges",
                subtitleUr: "فاسٹ ٹریک پریمیم سروس",
                badgeEn: "Express Queue",
                badgeUr: "تیز ترین پراسیسنگ",
                badgeVariant: "brass",
                pointsEn: [
                  "Air-conditioned premium lounges with minimal queue wait times.",
                  "Extended working hours (typically 8:30 AM to 10:30 PM).",
                  "Dedicated senior citizen and women priority counters.",
                ],
                features: [
                  { labelEn: "Operating Hours", valueEn: "8:30 AM – 10:30 PM" },
                  { labelEn: "Processing Fee", valueEn: "Standard + Executive Surcharge" },
                  { labelEn: "Appointments", valueEn: "Optional via Pak ID Portal" },
                ],
                recommendedForEn: "Families with infants, senior citizens, and applicants looking to avoid long public queues.",
              },
              {
                titleEn: "Regular NRCs & Mobile Vans",
                titleUr: "عام رجسٹریشن سنٹرز و موبائل وین",
                subtitleEn: "Tehsil & Rural Coverage",
                subtitleUr: "تحصیل و دیہاتی کوریج",
                badgeEn: "Standard Fees",
                badgeUr: "معمول کی فیس",
                badgeVariant: "navy",
                pointsEn: [
                  "Located in every tehsil and district headquarters across Pakistan.",
                  "Zero executive surcharge; lowest official government card fees.",
                  "Mobile Registration Vans (MRVs) visit remote union councils on announced schedules.",
                ],
                features: [
                  { labelEn: "Operating Hours", valueEn: "8:30 AM – 4:30 PM (Mon-Sat)" },
                  { labelEn: "Service Scope", valueEn: "Complete Card & B-Form Services" },
                  { labelEn: "Van Schedule", valueEn: "Announced via Local Administration" },
                ],
                recommendedForEn: "Standard applicants seeking lowest official rates and rural community members.",
              },
              {
                titleEn: "e-Sahulat Franchise Shops",
                titleUr: "ای-سہولت فرنچائز کاؤنٹرز",
                subtitleEn: "17,000+ Local Neighborhood Shops",
                subtitleUr: "محلے کی دکانوں پر نادرا سروس",
                badgeEn: "Local Retail",
                badgeUr: "محلے کا کاؤنٹر",
                badgeVariant: "blue",
                pointsEn: [
                  "Located in local mobile shops, general stores, and commercial bazaars.",
                  "Instant biometric verification for banking, SIM cards, and government schemes.",
                  "CANNOT capture live photographs or enroll fresh CNICs.",
                ],
                features: [
                  { labelEn: "Operating Hours", valueEn: "Local Market Hours (8 AM – 10 PM)" },
                  { labelEn: "Core Services", valueEn: "Biometrics, Bill Pay, Fee Chalan" },
                  { labelEn: "Physical Cards", valueEn: "Not Issued Here" },
                ],
                recommendedForEn: "Citizens needing fast biometric attestation, Ehsaas verification, or utility bill deposits.",
              },
            ]}
          />
        </section>

        {/* Step-by-Step: How to Use the Official Locator */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step: How to Locate & Plan Your NADRA Center Visit"
          titleUr="قریبی نادرا سنٹر تلاش کرنے اور دورہ پلان کرنے کا 4 مرحلہ وار طریقہ"
          subtitleEn="From official portal search to document preparation, token collection, and tracking"
          subtitleUr="آن لائن لوکیٹر سے لے کر کاغذات کی تیاری، ٹوکن اور ٹریکنگ تک"
          steps={[
            {
              number: 1,
              titleEn: "Check Official Locator on nadra.gov.pk/ngrids",
              titleUr: "آفیشل ویب سائٹ پر قریبی برانچ تلاش کریں",
              descEn: "Visit nadra.gov.pk/ngrids or open the Pak ID app. Select your province, city, and center type (Mega, Executive, Regular) to see exact branch addresses and active hours.",
              descUr: "نادرا کی پورٹل یا پاک آئی ڈی ایپ پر اپنے شہر کے سنٹرز کی فہرست اور دفتری اوقات دیکھیں۔",
              tagEn: "Online Locator",
              tagUr: "آن لائن لوکیٹر",
            },
            {
              number: 2,
              titleEn: "Prepare Mandatory Documents & Relatives",
              titleUr: "ضروری کاغذات اور خونی گواہ کی تیاری",
              descEn: "For fresh CNIC: bring original B-Form/CRC + parent or blood relative CNIC for biometric attestation. For renewal/modification: bring your old CNIC and supporting proof (Nikahnama, degree).",
              descUr: "پہلی بار کارڈ بنوانے کے لیے بی فارم اور والدین کے شناختی کارڈ، جبکہ تجدید کے لیے پرانا کارڈ ساتھ لائیں۔",
              tagEn: "Document Prep",
              tagUr: "کاغذات کی تیاری",
            },
            {
              number: 3,
              titleEn: "Collect Electronic Token at Reception",
              titleUr: "کاؤنٹر سے ڈیجیٹل ٹوکن حاصل کریں",
              descEn: "Walk in (or show optional executive appointment barcode). The receptionist verifies basic documents and issues an automated queue token with your designated counter number.",
              descUr: "ریسیپشن پر کاغذات چیک کروا کے کمپیوٹرائزڈ ٹوکن حاصل کریں اور انتظار گاہ میں بیٹھیں۔",
              tagEn: "Queue Token",
              tagUr: "ٹوکن کاؤنٹر",
            },
            {
              number: 4,
              titleEn: "Enroll Biometrics & Collect Tracking Receipt",
              titleUr: "بائیومیٹرک اندراج اور ٹریکنگ رسید وصولی",
              descEn: "Complete digital photography, 10-fingerprint scanning, iris scan, and data verification. Pay the official fee and receive your stamped receipt containing a 12-digit Tracking ID.",
              descUr: "تصویر، فنگر پرنٹس اور ڈیٹا کی تصدیق کے بعد فیس ادا کریں اور 12 ہندسوں کی ٹریکنگ رسید لیں۔",
              tagEn: "Tracking ID",
              tagUr: "ٹریکنگ رسید",
            },
          ]}
        />

        {/* Section: When e-Sahulat is Enough vs When You Need a Full NRC */}
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-doc-brass text-xs font-mono font-bold uppercase tracking-wider">
              <Store className="w-4 h-4" />
              <span>Practical Citizen Tip</span>
            </div>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-doc-ink dark:text-white">
              Save Time: When e-Sahulat is Enough vs When You Must Visit a Full NRC
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>What e-Sahulat Franchise Shops CAN Do (No NRC Needed):</span>
              </div>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Biometric Verification:</strong> For telecom SIM issuance, Ehsaas/BISP financial aid, and bank account verifications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Citizen Verification Service (CVS):</strong> Quick digital attestation of identity credentials for corporate institutions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Fee Deposits &amp; Bill Payments:</strong> Direct payment of utility bills and government fee vouchers without bank queues.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 space-y-3">
              <div className="flex items-center gap-2 text-rose-800 dark:text-rose-300 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>What Requires a Full NADRA Center (e-Sahulat CANNOT Do):</span>
              </div>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">✕</span>
                  <span><strong>Fresh CNIC Enrollment:</strong> Live official digital camera capture, iris scan, and signature enrollment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">✕</span>
                  <span><strong>Family Certificates &amp; B-Form:</strong> Issuing Child Registration Certificates (CRC) or Family Registration Certificates (FRC).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">✕</span>
                  <span><strong>Physical Card Delivery:</strong> Collecting printed Smart CNICs, NICOP cards, or cancelation certificates.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dedicated Section: Mega Centers 24/7 (e.g. North Nazimabad) & Branchless Banking */}
        <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Specialized Service Tiers</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
              NADRA Mega Centers (24/7) &amp; Branchless Banking Network
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              Two of the most frequently searched NADRA facilities are round-the-clock 24/7 Mega Centers and neighborhood branchless banking e-Sahulat counters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mega Centers 24/7 Highlight */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
                  24/7 NON-STOP
                </span>
                <Clock className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
                NADRA Mega Centers: 24/7 Round-the-Clock Facilities
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                To serve working professionals and eliminate daylight rush, NADRA operates flagship <strong>24/7 Mega Centers</strong> in metropolitan hubs. These multi-story complexes operate three non-stop shifts with hundreds of automated counters.
              </p>
              <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700 pt-3">
                <p>
                  <strong>Spotlight: NADRA Mega Center North Nazimabad (Karachi):</strong> Located at Block L, North Nazimabad near Sakhi Hassan, this is Karachi’s busiest 24/7 Mega hub. It features dedicated executive female counters, senior citizen priority lanes, computerized queue tokens, and full enrollment capabilities (Smart CNIC, NICOP, FRC, and CRC B-Form).
                </p>
                <p>
                  <strong>Other Major 24/7 Mega Centers:</strong> Karachi (Siemens Chowrangi SITE &amp; DHA Phase 1), Lahore (DHA Phase 4 Commercial &amp; Shimla Hill), Islamabad (Mauve Area G-10), and Rawalpindi (Murree Road Rehmanabad).
                </p>
              </div>
            </div>

            {/* Branchless Banking & e-Sahulat */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold">
                  17,000+ OUTLETS
                </span>
                <Store className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
                NADRA Branchless Banking &amp; e-Sahulat Network
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                <strong>NADRA Branchless Banking</strong> operates through authorized retail franchise merchants equipped with secure biometric POS terminals across every village, town, and commercial market in Pakistan.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700 pt-3">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Telecom &amp; Bank Biometric Verification:</strong> Real-time thumbprint authentication for SIM issuance and branchless wallet activation (JazzCash, EasyPaisa, SadaPay).</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Government Fee Collection:</strong> Deposit Rs. 100 NIMS vaccination certificate fees, utility bills (LESCO, K-Electric, SNGPL), and recruitment test fees without visiting commercial bank branches.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Cash Disbursement:</strong> Financial aid distribution under BISP / Kafalat social welfare programs.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section: Cross-Linking to Detailed Process Guides */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related NADRA Documentation &amp; Tracking Guides
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Learn the exact document checklist, fee slabs, and digital tracking procedures before your visit:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
            <Link
              href="/nadra/nadra-tracking-id-check-online-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Card Tracking</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NADRA Tracking ID Check →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check receipt token status via 8400 SMS and online portal.</p>
            </Link>

            <Link
              href="/nadra/nadra-helpline-complaint-directory-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Helpline 1777</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Helpline &amp; Complaint Directory →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Official phone directory, 1777 mobile code, and dispute resolution.</p>
            </Link>

            <Link
              href="/nadra/executive-center-timings-fees"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Express Service</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Executive Center Timings &amp; Fees →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Executive fee slabs, fast-track token rules &amp; VIP lounge timings.</p>
            </Link>

            <Link
              href="/nadra/lost-stolen-cnic-replacement-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Card Replacement</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Lost/Stolen CNIC Replacement →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Police report requirements and duplicate smart card procedure.</p>
            </Link>
          </div>
        </section>

        {/* FAQ Accordion Visual */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (NADRA Center Visits & Locators)"
          titleUr="نادرا رجسٹریشن سنٹرز سے متعلق عام سوالات"
          subtitleEn="Key guidelines on appointment bookings, cross-district jurisdiction, and 24/7 Mega centers"
          subtitleUr="اپوائنٹمنٹ کے تقاضے، ملک بھر کے کسی بھی سنٹر سے پراسیسنگ اور میگا برانچز کے فوائد"
          items={[
            {
              questionEn: "Do I need an appointment before visiting a NADRA Registration Center?",
              questionUr: "کیا نادرا سنٹر جانے سے پہلے پیشگی اپوائنٹمنٹ لینا ضروری ہے؟",
              answerEn: "For 95% of NADRA centers across Pakistan, appointments are not required; citizens operate on a first-come, first-served walk-in token system. However, select Executive Centers in major cities (Islamabad Blue Area, Lahore DHA, Karachi Clifton) offer optional online appointment scheduling via the Pak Identity portal or Rahbar app for express priority service.",
              answerUr: "نہیں! پاکستان بھر کے 95 فیصد نادرا سنٹرز پر پیشگی اپوائنٹمنٹ کی ضرورت نہیں ہوتی، آپ براہ راست جا کر ٹوکن لے سکتے ہیں۔ البتہ بڑے شہروں کے چند ایگزیکٹو سنٹرز میں پاک آئی ڈی پورٹل کے ذریعے آن لائن ٹائم بک کروانے کی اختیاری سہولت موجود ہے۔",
            },
            {
              questionEn: "Can any NADRA Registration Center handle my request, or must I visit my home district center?",
              questionUr: "کیا میں کسی بھی نادرا دفتر جا سکتا ہوں یا صرف اپنے آبائی ضلع کے سنٹر جانا لازمی ہے؟",
              answerEn: "NADRA operates an entirely nationwide unified database. You can visit ANY NADRA Registration Center anywhere in Pakistan for CNIC renewals, duplicate smart cards, FRC issuance, and address modifications, regardless of where your permanent or present address is registered.",
              answerUr: "نادرا کا ڈیٹا بیس پورے ملک میں آن لائن منسلک ہے۔ آپ کا شناختی کارڈ کسی بھی شہر یا صوبے کا ہو، آپ پاکستان بھر میں اپنے قریبی کسی بھی نادرا سنٹر جا کر تمام سہولیات حاصل کر سکتے ہیں۔",
            },
            {
              questionEn: "What is the main difference between a Regular NRC, a Mega Center, and an Executive Center?",
              questionUr: "عام نادرا سنٹر، میگا سنٹر اور ایگزیکٹو سنٹر میں بنیادی فرق کیا ہے؟",
              answerEn: "Regular NRCs handle all services during standard office hours (8:30 AM – 4:30 PM). Executive Centers charge a premium fast-track fee for expedited queue tokens and air-conditioned lounges with extended hours (8:30 AM – 10:30 PM). Mega Centers operate 24 hours a day, 7 days a week (24/7) in metropolitan cities like Lahore, Karachi, Rawalpindi, and Peshawar.",
              answerUr: "عام سنٹر عام دفتری اوقات (8:30 تا 4:30) میں عام فیس پر کام کرتے ہیں۔ ایگزیکٹو سنٹرز اضافی فیس لے کر ایئرکنڈیشنڈ لاؤنج اور رات 10:30 تک تیز ترین سروس دیتے ہیں، جبکہ میگا سنٹرز بڑے شہروں میں 24 گھنٹے بلا تعطل کھلے رہتے ہیں۔",
            },
            {
              questionEn: "Can I complete my CNIC renewal online instead of visiting a physical NADRA center?",
              questionUr: "کیا میں نادرا دفتر جائے بغیر گھر بیٹھے شناختی کارڈ کی تجدید کروا سکتا ہوں؟",
              answerEn: "Yes! If your CNIC is expired or expiring within 6 months, you can renew it 100% online through the official Pak ID mobile app or pakidentity.nadra.gov.pk. The app uses your smartphone camera for facial photo capture and digital fingerprint scanning, and delivers your Smart CNIC to your doorstep.",
              answerUr: "جی ہاں! اگر آپ کے شناختی کارڈ کی معیاد ختم ہو چکی ہے تو آپ پاک آئی ڈی (Pak ID) موبائل ایپ سے موبائل کیمرے کے ذریعے تصویر اور فنگر پرنٹس اسکین کر کے آن لائن اپلائی کر سکتے ہیں اور کارڈ بذریعہ ڈاک گھر منگوا سکتے ہیں۔",
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official NADRA Public Portals &amp; Helplines Cited:</p>
          {[
            {
              label: 'National Database and Registration Authority (NADRA Official Portal)',
              url: 'https://www.nadra.gov.pk',
            },
            {
              label: 'NADRA Center Locator (Official Branch Finder)',
              url: 'https://www.nadra.gov.pk/ngrids',
            },
            {
              label: 'Pak Identity Online Registration Portal & Mobile App',
              url: 'https://pakidentity.nadra.gov.pk',
            },
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
