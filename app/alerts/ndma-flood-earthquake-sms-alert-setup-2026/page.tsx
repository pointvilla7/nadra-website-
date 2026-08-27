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
  Bell,
  Smartphone,
  Radio,
  Download,
  ShieldAlert,
  Waves,
  HeartHandshake,
  ListChecks,
  BatteryCharging,
  PhoneCall,
  Activity,
  Layers
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NDMA Flood & Earthquake SMS Alert Setup 2026 – Early Warning Guide | Pakistan Info Hub',
  description:
    'Complete guide to setting up NDMA disaster alerts in Pakistan: Download the official Pak NDMA-Disaster Alert mobile app (Android & iOS), enable Jazz/PTA geo-fenced SMS flood warnings, subscribe to PMD Flood Forecasting, and assemble an emergency prep kit.',
  keywords: [
    'NDMA disaster alert app Pakistan 2026',
    'NDMA Jazz SMS flood warning early warning system',
    'flood alert setup Pakistan PMD FFD',
    'earthquake emergency alerts Pakistan app',
    'monsoon flood warning SMS setup Jazz Telenor Zong',
    'disaster early warning system DEW Pakistan',
    'emergency preparedness kit checklist Pakistan',
  ],
  openGraph: {
    title: 'NDMA Flood & Earthquake SMS Alert Setup 2026 – Disaster Early Warning Guide',
    description:
      'Step-by-step public safety guide on activating official NDMA smartphone alerts, geo-fenced flood SMS warnings, and river discharge bulletins in Pakistan.',
    url: 'https://www.pakistaninfohub.com/alerts/ndma-flood-earthquake-sms-alert-setup-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/alerts/ndma-flood-earthquake-sms-alert-setup-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Disaster Alerts', item: 'https://www.pakistaninfohub.com/alerts' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'NDMA Alert Setup',
          item: 'https://www.pakistaninfohub.com/alerts/ndma-flood-earthquake-sms-alert-setup-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'NDMA Flood & Earthquake SMS Alert Setup 2026: Mobile App Configuration & Disaster Early Warning Guide',
      description:
        'An essential public preparedness manual detailing how citizens across Pakistan can activate real-time disaster warnings via the Pak NDMA app, geo-fenced telecom SMS alerts, and PMD flood bulletins.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-20',
      dateModified: '2026-08-21',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/alerts/ndma-flood-earthquake-sms-alert-setup-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I need an active internet connection to receive NDMA SMS flood alerts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The Disaster Early Warning (DEW) SMS service operated by NDMA, PTA, and mobile network operators (Jazz, Telenor, Zong, Ufone) uses cellular broadcast towers. Geo-fenced SMS alerts are delivered directly to your standard mobile phone messaging inbox even if you have zero mobile data or no Wi-Fi connection.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the Pak NDMA-Disaster Alert app free to download?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The Pak NDMA-Disaster Alert mobile application is 100% free of charge on both the Google Play Store (Android) and the Apple App Store (iOS). It requires no subscription fee or paid account.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the geo-fenced SMS system work for all mobile networks in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'While Jazz has been a primary early partner under the DEW-3 initiative, the Pakistan Telecommunication Authority (PTA) mandates all cellular mobile operators (CMOs) including Telenor, Zong, and Ufone to broadcast emergency public safety messages to mobile subscribers located in active disaster-threat zones.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where can I see live river flow and flood levels in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can monitor live hydro-meteorological river discharge rates, dam water levels (Tarbela, Mangla), and upstream flood surges through the Pakistan Meteorological Department Flood Forecasting Division at ffd.pmd.gov.pk.',
          },
        },
      ],
    },
  ],
};

export default function NdmaDisasterAlertSetupPage() {
  const breadcrumbs = [
    { nameEn: 'Disaster Alerts', nameUr: 'قدرتی آفات و ایمرجنسی الرٹس' },
    { nameEn: 'NDMA Alert Setup', nameUr: 'این ڈی ایم اے ڈیزاسٹر و ایس ایم ایس الرٹ سیٹ اپ' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="EMERGENCY PREPAREDNESS GUIDE" labelUr="ہنگامی تیاری و انتباہ" variant="gold" />
            <VerifiedBadge textEn="NDMA & PMD OFFICIAL CHANNELS" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            NDMA Flood &amp; Earthquake Alert Setup: Mobile App &amp; SMS Guide 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              سیلاب اور زلزلے کے قبل از وقت الرٹس: این ڈی ایم اے ایپ اور ایس ایم ایس ایکٹیویشن
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Early warning saves lives. Learn how to configure the official &quot;Pak NDMA-Disaster Alert&quot; smartphone app,
            receive automated location-based SMS flood warnings on your cellular phone without internet, and prepare an
            essential family emergency kit.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How Do I Get Official Disaster Early Warnings in Pakistan?"
          topicTitleUr="پاکستان میں قدرتی آفات کے فوری الرٹس کیسے حاصل کریں؟"
          answerEn="You can receive alerts through two official channels: (1) The free 'Pak NDMA-Disaster Alert' app (Google Play & Apple Store) for push warnings and live hazard maps, and (2) Geo-fenced SMS flood alerts automatically broadcasted by NDMA/PTA across mobile networks (Jazz, Zong, Telenor, Ufone) in high-risk zones."
          answerUr="دو اہم طریقوں سے الرٹس ملتے ہیں: (1) گوگل پلے اور ایپل ایپ اسٹور سے 'Pak NDMA-Disaster Alert' ایپ انسٹال کر کے، اور (2) این ڈی ایم اے اور پی ٹی اے کے خودکار لوکیشن بیسڈ ایس ایم ایس کے ذریعے جو بغیر انٹرنیٹ کے خطرے والے علاقوں کے تمام موبائل نمبرز پر بھیجے جاتے ہیں۔"
        />

        {/* Section 1: Official Smartphone App Setup */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Method 1: Pak NDMA-Disaster Alert Mobile App (Android &amp; iOS)
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            The National Disaster Management Authority (NDMA) operates an official mobile platform engineered for community risk
            communication, live monsoon radar updates, and color-coded alert levels (Red = Evacuation / Severe, Orange = Warning, Yellow = Advisory).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-sans">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Download the App</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Search <strong>&quot;Pak NDMA-Disaster Alert&quot;</strong> on Google Play Store or Apple App Store. Ensure the developer is listed as NDMA Pakistan.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Enable GPS Location</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Grant &quot;While using the app&quot; location permissions so the system can deliver district-specific warnings for your immediate geographical area.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Turn on Push Notifications</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Allow high-priority push notifications so audible safety alerts can trigger even when your phone is locked during night hours.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Geo-Fenced SMS Alerts (No Internet Required) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Radio className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Method 2: Geo-Fenced SMS Flood Early Warnings (Jazz &amp; All Networks)
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 font-sans text-xs">
            <div className="flex items-center gap-2 text-doc-brass font-bold text-sm">
              <Radio className="w-5 h-5 text-emerald-400" />
              <span>Disaster Early Warning System (DEW) Mechanics</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Under the NDMA and PTA telecom disaster framework, <strong>geo-fencing technology</strong> automatically targets mobile
              tower clusters located in active floodplains, river discharge paths (Indus, Chenab, Ravi, Sutlej, Jhelum), and hill torrent zones.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                <span className="font-bold text-emerald-400 block">Automatic Delivery</span>
                <p className="text-slate-300">
                  No sign-up fee or manual registration required. If your SIM connects to a tower in a designated warning zone, you receive the SMS automatically.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                <span className="font-bold text-emerald-400 block">Works on Feature Phones</span>
                <p className="text-slate-300">
                  Standard 2G/3G keypad phones receive these emergency text messages in Urdu and English without any data plan or smartphone required.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                <span className="font-bold text-emerald-400 block">PTA Verified Sender</span>
                <p className="text-slate-300">
                  Alerts originate strictly from verified government sender IDs (such as &quot;NDMA&quot; or &quot;Govt of Pakistan&quot;) containing actionable safety instructions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 3: PMD Flood Forecasting Division (FFD) Bulletins */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Waves className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Method 3: Live River Discharge Reports (PMD Flood Forecasting)
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            For farmers, riverside residents, and logistics planners requiring exact hydro-meteorological river discharge rates:
          </p>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 font-sans text-xs">
            <ul className="space-y-2 text-slate-600 dark:text-slate-300 list-disc list-inside leading-relaxed">
              <li>
                <strong>Official Portal:</strong> Visit the Flood Forecasting Division at <a href="https://ffd.pmd.gov.pk" target="_blank" rel="noopener noreferrer" className="text-doc-seal font-bold underline">ffd.pmd.gov.pk</a>.
              </li>
              <li>
                <strong>Daily River Discharge Bulletins:</strong> View 24-hour inflow/outflow cusecs data for major barrages (Kotri, Sukkur, Guddu, Taunsa, Chashma) and dams (Tarbela, Mangla).
              </li>
              <li>
                <strong>Flash Flood Advisories:</strong> Access specialized rainstorm radar projections for KP, Punjab, Balochistan, and Gilgit-Baltistan nullahs.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4: Practical Emergency Kit Checklist */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Household Emergency Preparedness Checklist (72-Hour Kit)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-sans">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-seal text-sm block">1. Sustenance &amp; Hydration</span>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1 list-disc list-inside">
                <li>3-day supply of bottled/purified drinking water (3 liters/person/day).</li>
                <li>Non-perishable dry rations: roasted chickpeas, biscuits, dates, canned goods.</li>
                <li>Water purification tablets (chlorine/aquatabs).</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm block">2. Medical &amp; Sanitation</span>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1 list-disc list-inside">
                <li>Essential prescription medicines (insulin, hypertension, inhalers).</li>
                <li>First-aid kit: bandages, antiseptic liquid (Pyodine), ORS packets, painkillers.</li>
                <li>Mosquito repellent lotion/spray (dengue &amp; malaria prevention).</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-blue-600 dark:text-blue-400 text-sm block">3. Power &amp; Lighting</span>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1 list-disc list-inside">
                <li>Fully charged heavy-duty power bank with compatible phone charging cables.</li>
                <li>LED emergency torches / flashlights with extra batteries.</li>
                <li>Battery-powered AM/FM radio for offline news broadcasts.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-purple-600 dark:text-purple-400 text-sm block">4. Documents &amp; Emergency Contacts</span>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1 list-disc list-inside">
                <li>Waterproof zip-lock pouch containing original CNICs, property fards, and cash.</li>
                <li><strong>Rescue 1122</strong> (Ambulance &amp; Disaster Rescue).</li>
                <li><strong>NDMA National Helpline:</strong> 111-157-103 | <strong>PDMA Sindh:</strong> 1736.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Related Disaster Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Emergency &amp; Public Safety Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/alerts/pakistan-emergency-helpline-numbers-directory-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Helpline Directory</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Emergency Helpline Directory 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Rescue 1122, Edhi 115, PDMA &amp; Police numbers.</p>
            </Link>

            <Link
              href="/alerts/flood-alert-pakistan-ndma-pdma"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Live Advisory</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Flood Alert Tracking Portal →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Real-time river surge and barrage status.</p>
            </Link>

            <Link
              href="/alerts/monsoon-warning-pdma-updates"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Weather Alerts</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Monsoon Rain Warnings →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Urban flooding forecasts and travel warnings.</p>
            </Link>
          </div>
        </section>

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step NDMA & PTA Disaster Early Warning Setup"
          titleUr="این ڈی ایم اے اور پی ٹی اے ڈیزاسٹر الرٹس فعال کرنے کا طریقہ"
          subtitleEn="4-stage verified sequence to enable automated cellular SMS and push notifications"
          subtitleUr="ایپ ڈاؤن لوڈ سے لے کر سیلولر ایمرجنسی پیغامات موصول کرنے تک کے 4 مراحل"
          steps={[
            {
              number: 1,
              titleEn: "Download Pak NDMA App",
              titleUr: "این ڈی ایم اے ایپ انسٹال کریں",
              descEn: "Install the official Pak NDMA-Disaster Alert app for free from Google Play Store or Apple App Store.",
              descUr: "گوگل پلے یا ایپل ایپ اسٹور سے سرکاری 'Pak NDMA' ایپ مفت انسٹال کریں۔",
              tagEn: "Free Download",
              tagUr: "ایپ ڈاؤن لوڈ",
            },
            {
              number: 2,
              titleEn: "Enable Location & Emergency Alerts",
              titleUr: "لوکیشن اور الرٹ براڈکاسٹ فعال کریں",
              descEn: "Grant GPS location permissions and ensure 'Wireless Emergency Alerts' is turned ON in phone settings.",
              descUr: "موبائل سیٹنگز میں وائرلیس ایمرجنسی الرٹس آن کریں اور جی پی ایس لوکیشن آن رکھیں۔",
              tagEn: "Phone Settings",
              tagUr: "موبائل سیٹنگز",
            },
            {
              number: 3,
              titleEn: "Select District & Hazard Types",
              titleUr: "ضلع اور خطرات کا انتخاب",
              descEn: "Configure alerts for river floods, monsoon rainstorms, earthquakes, glacial lake bursts, and heatwaves.",
              descUr: "اپنے ضلع کا انتخاب کریں اور سیلاب، زلزلہ اور بارشوں کے الرٹس سیٹ کریں۔",
              tagEn: "Preferences",
              tagUr: "ترجیحات",
            },
            {
              number: 4,
              titleEn: "Receive Offline SMS & Push Alerts",
              titleUr: "ایس ایم ایس اور پش نوٹیفکیشن",
              descEn: "Receive instant geo-fenced early warning SMS via mobile towers (even without active mobile data) before hazards strike.",
              descUr: "موبائل ڈیٹا بند ہونے کے باوجود ٹاورز کے ذریعے لائیو وارننگ ایس ایم ایس حاصل کریں۔",
              tagEn: "Early Warning",
              tagUr: "بروقت اطلاع",
            },
          ]}
        />

        {/* Section 6: FAQs */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Disaster Alerts & Setup)"
          titleUr="قدرتی آفات اور ہنگامی الرٹس کے متعلق عام سوالات"
          subtitleEn="Essential guidelines on offline SMS, app charges, telecom networks, and live river tracking"
          subtitleUr="بغیر انٹرنیٹ ایس ایم ایس، مفت ایپ، موبائل نیٹ ورکس اور دریاؤں کے بہاؤ کی معلومات"
          items={[
            {
              questionEn: "Do I need an active internet connection to receive NDMA SMS flood alerts?",
              questionUr: "کیا سیلاب اور زلزلے کے ایمرجنسی ایس ایم ایس کے لیے انٹرنیٹ لازمی ہے؟",
              answerEn: "No. The Disaster Early Warning (DEW) SMS service operated by NDMA, PTA, and mobile network operators (Jazz, Telenor, Zong, Ufone) uses cellular broadcast towers. Geo-fenced SMS alerts are delivered directly to your standard mobile phone messaging inbox even if you have zero mobile data or no Wi-Fi connection.",
              answerUr: "نہیں! پی ٹی اے اور این ڈی ایم اے کے تحت ایمرجنسی ایس ایم ایس موبائل ٹاور براڈکاسٹ کے ذریعے براہ راست ہر سم پر آتے ہیں، چاہے آپ کے پاس انٹرنیٹ یا بیلنس نہ بھی ہو۔",
            },
            {
              questionEn: "Is the Pak NDMA-Disaster Alert app free to download?",
              questionUr: "کیا پاک این ڈی ایم اے ڈیزاسٹر الرٹ ایپ بالکل مفت ہے؟",
              answerEn: "Yes. The Pak NDMA-Disaster Alert mobile application is 100% free of charge on both the Google Play Store (Android) and the Apple App Store (iOS). It requires no subscription fee or paid account.",
              answerUr: "جی ہاں! یہ سرکاری موبائل ایپ اینڈرائیڈ اور آئی فون دونوں پر 100 فیصد مفت دستیاب ہے اور اس کا کوئی ماہانہ چارج نہیں ہے۔",
            },
            {
              questionEn: "Does the geo-fenced SMS system work for all mobile networks in Pakistan?",
              questionUr: "کیا یہ ایمرجنسی سسٹم پاکستان کے تمام موبائل نیٹ ورکس پر کام کرتا ہے؟",
              answerEn: "While Jazz has been a primary early partner under the DEW-3 initiative, the Pakistan Telecommunication Authority (PTA) mandates all cellular mobile operators (CMOs) including Telenor, Zong, and Ufone to broadcast emergency public safety messages to mobile subscribers located in active disaster-threat zones.",
              answerUr: "جی ہاں! پی ٹی اے کی ہدایات کے تحت جاز، زونگ، ٹیلی نار اور یوفون سمیت تمام نیٹ ورکس خطرے سے دوچار علاقوں میں مفت ہنگامی پیغامات پہنچانے کے پابند ہیں۔",
            },
            {
              questionEn: "Where can I see live river flow and flood levels in Pakistan?",
              questionUr: "پاکستان کے دریاؤں اور ڈیموں میں پانی کے لائیو بہاؤ کی معلومات کہاں سے ملیں گی؟",
              answerEn: "You can monitor live hydro-meteorological river discharge rates, dam water levels (Tarbela, Mangla), and upstream flood surges through the Pakistan Meteorological Department Flood Forecasting Division at ffd.pmd.gov.pk.",
              answerUr: "محکمہ موسمیات کے فلڈ فورکاسٹنگ ڈویژن کی آفیشل ویب سائٹ ffd.pmd.gov.pk پر منگلا، تربیلا ڈیم اور تمام ہیڈ ورکس کے لائیو پانی کے بہاؤ کے اعداد و شمار دیکھے جا سکتے ہیں۔",
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'National Disaster Management Authority (NDMA) Pakistan', url: 'https://ndma.gov.pk/' },
            { label: 'PMD Flood Forecasting Division (FFD)', url: 'https://ffd.pmd.gov.pk/' },
            { label: 'Pakistan Telecommunication Authority (PTA)', url: 'https://pta.gov.pk/' },
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
