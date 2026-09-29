import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  HelpCircle,
  ExternalLink,
  Moon,
  Sun,
  Clock,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  HeartHandshake,
  Building,
  Info,
  Coins,
  ChevronRight,
  MapPin,
  Scale,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ramzan Sehri & Iftar Timings 2026 Pakistan: City Wise Calendar | Pakistan Info Hub',
  description:
    'Check today’s Sehri end time & Iftar time for Lahore, Karachi, Islamabad, Rawalpindi, Peshawar, Quetta, Faisalabad & all Pakistani cities. Includes full 30-day Ramadan 2026 calendar, Karachi juristic method calculations, and Ruet-e-Hilal moon sighting updates.',
  keywords: [
    'ramzan sehri and iftar timings 2026',
    'ramadan calendar 2026 pakistan',
    'sehri time today lahore',
    'iftar time today karachi',
    'ramadan timing islamabad 2026',
    'sehri end time rawalpindi',
    'karachi method prayer times',
    'roza timing 2026 pakistan',
    'ramadan moon sighting 2026 pakistan',
  ],
  openGraph: {
    title: 'Ramzan Sehri & Iftar Timings 2026 Pakistan (City Wise Schedule)',
    description:
      'Live daily Sehri & Iftar timings for 30+ Pakistani cities with complete 30-day Ramadan 2026 timetable, Karachi calculation method, and mosque buffer guidelines.',
    url: 'https://www.pakistaninfohub.com/hajj-umrah/ramzan-sehri-iftar-timings-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/hajj-umrah/ramzan-sehri-iftar-timings-2026' },
};

const RamzanTimingsCalculator = dynamic(
  () => import('@/components/RamzanTimingsCalculator').then((m) => ({ default: m.RamzanTimingsCalculator })),
  { ssr: false, loading: () => <div className="h-[560px] rounded-3xl bg-slate-900 animate-pulse border border-slate-800" /> }
);

const FAQS_LIST = [
  {
    question: 'What time does Sehri end and Iftar start in Lahore today?',
    answer:
      'Sehri time ends at Fajr time (approximately 5:18 AM at the start of Ramadan in February 2026), and Iftar begins at Maghrib sunset time (approximately 5:52 PM). Exact times shift by about 1 minute daily as days lengthen in spring. Select Lahore in our city tool above for real-time daily schedules.',
  },
  {
    question: 'How are Sehri and Iftar times calculated in Pakistan?',
    answer:
      'In Pakistan, prayer times are standardly calculated using the University of Islamic Sciences, Karachi convention (18° Fajr angle, 18° Isha angle, Hanafi juristic method). Sehri end corresponds to astronomical Fajr dawn, while Iftar corresponds to Maghrib sunset.',
  },
  {
    question: 'When will Ramadan 2026 start in Pakistan?',
    answer:
      'Ramadan 2026 in Pakistan is expected to begin on Wednesday, 18 February 2026 or Thursday, 19 February 2026. The exact start date is subject to the official moon-sighting announcement by the Central Ruet-e-Hilal Committee on the 29th of Shaban 1447.',
  },
  {
    question: 'Why do local mosque Azaan times differ by 1 to 2 minutes from online schedules?',
    answer:
      'Local mosques frequently apply a 1 to 2 minute safety buffer (precautionary margin) before calling the Fajr or Maghrib Azaan. Muslims in Pakistan are advised to complete Sehri 2 minutes before the astronomical Fajr time as a precaution.',
  },
  {
    question: 'Does Karachi have different Sehri and Iftar times than Lahore or Islamabad?',
    answer:
      'Yes. Sehri and Iftar times vary across cities due to differences in geographical coordinates (latitude and longitude). Karachi is further west than Lahore, so sunrise and sunset occur roughly 20-25 minutes later in Karachi compared to Lahore.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Hajj & Umrah Services',
          item: 'https://www.pakistaninfohub.com/hajj-umrah',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Ramzan Sehri & Iftar Timings 2026',
          item: 'https://www.pakistaninfohub.com/hajj-umrah/ramzan-sehri-iftar-timings-2026',
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Pakistan Ramzan Sehri & Iftar Timings Tool 2026',
      description:
        'Interactive real-time Sehri end and Iftar timing calculator for 30+ Pakistani cities based on standard astronomical formulas (Karachi Juristic Convention).',
      url: 'https://www.pakistaninfohub.com/hajj-umrah/ramzan-sehri-iftar-timings-2026',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
    },
    {
      '@type': 'Article',
      headline: 'Ramzan Sehri & Iftar Timings 2026 Pakistan: Complete City Wise Schedule & Guide',
      description:
        'Detailed public guide to Ramadan 2026 prayer times across Pakistan, explaining Karachi calculation conventions, Ruet-e-Hilal moon-sighting uncertainty, local mosque buffers, and essential fasting duas.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-29',
      dateModified: '2026-09-29',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/hajj-umrah/ramzan-sehri-iftar-timings-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS_LIST.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function RamzanTimingsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { nameEn: 'Hajj & Umrah', nameUr: 'حج و عمرہ', url: '/hajj-umrah' },
              { nameEn: 'Ramzan Sehri & Iftar Timings 2026', nameUr: 'رمضان سحری و افطار اوقات 2026' },
            ]}
          />

          {/* Page Header */}
          <div className="mt-4 mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <VerifiedBadge textEn="Ruet-e-Hilal & Karachi Standard Aligned" textUr="جامعہ کراچی و رویت ہلال کمیٹی گائیڈ" />
              <InteractiveToolBadge labelEn="Live City Timings & 30-Day Table" labelUr="لائیو شہر کے اوقات و 30 روزہ ٹائم ٹیبل" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Ramzan Sehri &amp; Iftar Timings 2026 Pakistan
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              Find today&apos;s exact Sehri end time (Fajr) and Iftar time (Maghrib) for Lahore, Karachi, Islamabad, Rawalpindi, Peshawar, Quetta, Faisalabad, and 30+ Pakistani cities with complete 30-day Ramadan 2026 timetables.
            </p>
          </div>

          {/* Direct Answer Box */}
          <DirectAnswerBox
            topicTitleEn="Ramzan Sehri & Iftar Timings 2026 in Pakistan"
            topicTitleUr="پاکستان میں رمضان سحری و افطار اوقات 2026"
            answerEn="Ramadan 2026 in Pakistan is expected to begin on February 18–19, 2026, confirmed by the Ruet-e-Hilal Committee moon sighting. Sehri end time equals astronomical Fajr, while Iftar equals Maghrib sunset. Calculated using the University of Islamic Sciences, Karachi convention (18° Fajr/Isha). Local mosques add a 1–2 minute safety buffer."
            answerUr="پاکستان میں رمضان 2026 کا آغاز 18 یا 19 فروری کو رویت ہلال کمیٹی کے چاند کی تصدیق کے بعد ہوگا۔ سحری کا وقت فجر کی اذان تک اور افطار کا وقت مغرب کے غروب آفتاب پر ہوتا ہے جو جامعہ کراچی کے شرعی اصول (18 ڈگری) کے تحت تیار کیا گیا ہے۔"
          />

          {/* Main Interactive Tool Component */}
          <RamzanTimingsCalculator />

          {/* Ad Zone */}
          <div className="my-8">
            <AdPlacementZone slotId="ramzan-timings-top" />
          </div>

          {/* In-Depth Educational Guide Sections */}
          <div className="mt-12 space-y-10">
            {/* Section 1: How Timings Are Calculated */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                  <Scale className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  The Karachi Juristic Convention Explained (18° Fajr &amp; Isha)
                </h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                In Pakistan, prayer times and Ramadan schedules are overwhelmingly based on the <strong>University of Islamic Sciences, Karachi (Jamia Binoria / Jamia Uloom-ul-Islamia Banuri Town)</strong> calculation method. This astronomical model defines:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <li className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60">
                  <strong className="text-emerald-600 dark:text-emerald-400 block mb-1">Fajr Angle: 18.0°</strong>
                  Fajr (and Sehri end) begins when the sun is 18 degrees below the horizon in the eastern sky, signifying true dawn (Subh-e-Sadiq).
                </li>
                <li className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60">
                  <strong className="text-emerald-600 dark:text-emerald-400 block mb-1">Isha Angle: 18.0°</strong>
                  Isha begins when twilight vanishes and the sun dips 18 degrees below the horizon in the west.
                </li>
                <li className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60">
                  <strong className="text-emerald-600 dark:text-emerald-400 block mb-1">Maghrib (Iftar): Sunset Moment</strong>
                  Iftar occurs precisely at sunset when the disk of the sun completely disappears below the western horizon.
                </li>
                <li className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60">
                  <strong className="text-emerald-600 dark:text-emerald-400 block mb-1">Asr Juristic Method: Hanafi</strong>
                  Asr prayer time is calculated according to the Hanafi jurisprudence (shadow of an object equals twice its length plus shadow at noon).
                </li>
              </ul>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                This convention differs from North American (ISNA: 15°) or Muslim World League (MWL: 18°/17°) standards, ensuring alignment with Pakistani masajid and religious decrees (fatwas).
              </p>
            </section>

            {/* Section 2: Moon Sighting & Start Date Uncertainty */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-2xl">
                  <Moon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Ruet-e-Hilal Committee &amp; Ramadan 2026 Start Date Confirmation
                </h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                In Islamic tradition, the start of Ramadan is determined by physical crescent moon sighting (Ruet-e-Hilal). In Pakistan, the official announcement is issued exclusively by the <strong>Central Ruet-e-Hilal Committee of Pakistan</strong> in coordination with the Pakistan Meteorological Department (PMD) and SPARCO.
              </p>

              <div className="p-5 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-700/50 rounded-2xl text-xs sm:text-sm text-amber-900 dark:text-amber-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-300">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Important Date Policy Notice</span>
                </div>
                <p className="leading-relaxed">
                  While astronomical calculations project Ramadan 1447 AH to begin on <strong>Wednesday, 18 February 2026</strong> or <strong>Thursday, 19 February 2026</strong>, the exact date is <strong>NEVER guaranteed in advance</strong>. The official committee meets on the 29th of Shaban to review testimonies across Islamabad, Lahore, Karachi, Peshawar, and Quetta.
                </p>
                <p className="leading-relaxed text-amber-700 dark:text-amber-300/80">
                  Always rely on the official announcement broadcast on Pakistan Television (PTV) and national news channels on the eve of the 29th of Shaban.
                </p>
              </div>
            </section>

            {/* Section 3: Why Sehri & Iftar Times Shift City to City */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Why Sehri &amp; Iftar Times Vary Across Pakistani Cities
                </h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                Pakistan spans over 1,000 kilometers from east to west and over 1,500 kilometers from north to south. Because the sun travels from east to west:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Eastern Cities (Lahore, Sialkot)</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Fajr and sunset occur earlier. Lahore Sehri ends roughly 20-25 minutes earlier than Karachi.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Capital &amp; North (Islamabad, Peshawar)</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Slightly higher latitude affects solar declination, causing daylight length variations in early spring.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Western Cities (Karachi, Quetta)</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Because Karachi is at ~67°E longitude versus Lahore at ~74°E, sunset and Iftar occur approximately 20–25 minutes later in Karachi.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Mosque Buffer Precaution */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-2xl">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  The 1-to-2 Minute Mosque Precautionary Buffer Rule
                </h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                Islamic jurists in Pakistan recommend maintaining a <strong>precautionary interval (Ihtiyat)</strong> regarding fast start and end times:
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>For Sehri (Fasting Start):</strong> Stop eating and drinking at least 2 minutes <em>before</em> the announced Fajr time to guarantee your fast is valid even if your watch or mosque clock is slightly off.
                  </div>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>For Iftar (Fasting End):</strong> Wait until the complete disappearance of the sun and the first audible sound of the Maghrib Azaan from your neighborhood mosque before breaking fast.
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Accordion Section */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Frequently Asked Questions (FAQ)
                </h2>
              </div>

              <div className="space-y-4">
                {FAQS_LIST.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/60"
                  >
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Cross-Link Card to Zakat Calculator */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-semibold">
                  <Coins className="w-4 h-4" />
                  <span>Essential Ramzan Utility</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold">
                  Calculate Your 2.5% Zakat for 2026 Online
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
                  Many Muslims fulfill their annual Zakat obligation during Ramzan to earn multiplied rewards. Use our live Nisab calculator supporting Gold, Silver, Bank Savings, and Business assets.
                </p>
              </div>

              <Link
                href="/hajj-umrah/zakat-calculator-2026"
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm rounded-xl transition shadow-lg shadow-emerald-500/20 flex items-center gap-2 shrink-0"
              >
                <span>Open Zakat Calculator 2026</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
