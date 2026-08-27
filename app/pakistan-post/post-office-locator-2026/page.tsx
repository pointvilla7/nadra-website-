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
  MapPin,
  Building,
  PhoneCall,
  Clock,
  Search,
  CheckCircle2,
  Mail,
  ArrowRight,
  ShieldCheck,
  Globe
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pakistan Post Office Near Me: GPO Locations, Postal Codes & Contact 2026 | Pakistan Info Hub',
  description:
    'Find Pakistan Post office near you: Official directory of General Post Offices (GPOs), 5-digit postal codes, operating hours, counter services, and contact numbers for Islamabad, Lahore, Karachi, Rawalpindi, Peshawar, Quetta, and Multan.',
  keywords: [
    'pakistan post office',
    'pakistan post office near me',
    'gpo locations pakistan',
    'pakistan postal codes directory',
    'lahore gpo timing',
    'karachi gpo address',
    'islamabad gpo postal code 44000',
    'gpo tracking',
  ],
  openGraph: {
    title: 'Pakistan Post Office Near Me: GPO Locations, Postal Codes & Contact 2026',
    description:
      'Official directory of Pakistan Post GPOs, postal codes, and branch operating hours across all major cities in Pakistan.',
    url: 'https://www.pakistaninfohub.com/pakistan-post/post-office-locator-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/pakistan-post/post-office-locator-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Pakistan Post', item: 'https://www.pakistaninfohub.com/pakistan-post' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Pakistan Post Office Locator',
          item: 'https://www.pakistaninfohub.com/pakistan-post/post-office-locator-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Pakistan Post Office Near Me: GPO Directory, 5-Digit Postal Codes and Timings',
      description:
        'A comprehensive guide to finding the nearest Pakistan Post office and GPO branch, looking up postal codes, and checking counter operating schedules.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/pakistan-post/post-office-locator-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I find the nearest Pakistan Post office near me?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can locate your nearest Pakistan Post office by searching "Pakistan Post Office" on Google Maps or by visiting your city’s central General Post Office (GPO). Pakistan Post operates over 13,000 branches and sub-post offices nationwide.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the operating hours of General Post Offices (GPOs) in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standard Pakistan Post sub-offices operate Monday to Saturday from 9:00 AM to 4:00 PM (with a Friday prayer break from 12:30 PM to 2:00 PM). Major central GPOs in Karachi, Lahore, Islamabad, and Rawalpindi maintain 24/7 round-the-clock urgent mail counters for booking.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the postal code for Islamabad, Lahore, and Karachi GPO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The central GPO postal codes are: Islamabad GPO (44000), Lahore GPO (54000), Karachi GPO (74000), Rawalpindi GPO (46000), and Peshawar GPO (25000).',
          },
        },
      ],
    },
  ],
};

const MAJOR_GPOS = [
  { city: 'Islamabad', name: 'Islamabad GPO', postalCode: '44000', location: 'Sector G-6/2, Melody Market Area', timing: '9:00 AM – 4:00 PM (24/7 Urgent Counter)', phone: '051-9201564' },
  { city: 'Rawalpindi', name: 'Rawalpindi GPO', postalCode: '46000', location: 'The Mall, Saddar Cantonment', timing: '9:00 AM – 4:00 PM (24/7 Urgent Counter)', phone: '051-9270831' },
  { city: 'Lahore', name: 'Lahore GPO', postalCode: '54000', location: 'The Mall Road, Near Anarkali', timing: '9:00 AM – 4:00 PM (24/7 Urgent Counter)', phone: '042-99211321' },
  { city: 'Karachi', name: 'Karachi GPO', postalCode: '74000', location: 'I.I. Chundrigar Road, City Center', timing: '9:00 AM – 4:00 PM (24/7 Urgent Counter)', phone: '021-99211244' },
  { city: 'Peshawar', name: 'Peshawar GPO', postalCode: '25000', location: 'Saddar Road, Peshawar Cantonment', timing: '9:00 AM – 4:00 PM', phone: '091-9211210' },
  { city: 'Quetta', name: 'Quetta GPO', postalCode: '87300', location: 'Zarghoon Road, Near Railway Station', timing: '9:00 AM – 4:00 PM', phone: '081-9201582' },
  { city: 'Multan', name: 'Multan GPO', postalCode: '60000', location: 'Dera Adda / Cantt Area', timing: '9:00 AM – 4:00 PM', phone: '061-9200424' },
  { city: 'Faisalabad', name: 'Faisalabad GPO', postalCode: '38000', location: 'Railway Road, Near Clock Tower', timing: '9:00 AM – 4:00 PM', phone: '041-9200155' },
  { city: 'Hyderabad', name: 'Hyderabad GPO', postalCode: '71000', location: 'Saddar, Cantonment Area', timing: '9:00 AM – 4:00 PM', phone: '022-9200211' },
  { city: 'Gujranwala', name: 'Gujranwala GPO', postalCode: '52250', location: 'G.T. Road, Trust Plaza', timing: '9:00 AM – 4:00 PM', phone: '055-9200350' },
  { city: 'Sialkot', name: 'Sialkot GPO', postalCode: '51310', location: 'Paris Road, City Center', timing: '9:00 AM – 4:00 PM', phone: '052-9250100' },
  { city: 'Abbottabad', name: 'Abbottabad GPO', postalCode: '22010', location: 'The Mall, Near Supply', timing: '9:00 AM – 4:00 PM', phone: '0992-9310115' },
];

export default function PakPostOfficeLocatorPage() {
  const breadcrumbs = [
    { nameEn: 'Pakistan Post', nameUr: 'پاکستان پوسٹ' },
    { nameEn: 'Post Office Directory & GPO', nameUr: 'پوسٹ آفس و جی پی او ڈائریکٹری' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="GPO & BRANCH DIRECTORY" labelUr="ڈاکخانہ ڈائریکٹری" variant="seal" />
            <VerifiedBadge textEn="POSTAL CODE DIRECTORY 2026" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Pakistan Post Office Near Me: GPO Locations, Postal Codes &amp; Contact 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پاکستان پوسٹ آفس و جی پی او لوکیشنز، 5 ہندسوں کے پوسٹل کوڈز اور اوقات کار
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Find your nearest <strong>Pakistan Post office</strong> and General Post Office (GPO).
            Lookup official 5-digit postal codes, counter working hours, 24/7 urgent mail desks, and landline contacts across Pakistan.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How Do You Locate the Nearest Pakistan Post Office and Find Your Postal Code?"
          topicTitleUr="قریبی ڈاکخانہ اور پوسٹل کوڈ کیسے تلاش کریں؟"
          answerEn="To find your nearest post office: Visit your city's central General Post Office (GPO) or search 'Pakistan Post Office' on Google Maps. Pakistan Post operates over 13,000 local branches. Postal codes in Pakistan are 5 digits, where the first two digits represent the postal division."
          answerUr="قریبی ڈاکخانہ تلاش کرنے کے لیے اپنے شہر کے مرکزی جنرل پوسٹ آفس (GPO) جائیں یا گوگل میپس پر تلاش کریں۔ پاکستان میں تمام پوسٹل کوڈز 5 ہندسوں پر مشتمل ہوتے ہیں جن کے پہلے 2 ہندسے متعلقہ ڈویژن کو ظاہر کرتے ہیں۔"
        />

        {/* Section 1: Major Cities GPO Directory Table */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building className="w-6 h-6 text-doc-brass" />
              <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
                Major City General Post Offices (GPOs) in Pakistan
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400">12 Major Central Hubs</span>
          </div>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-xs font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-[11px] font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">City</th>
                  <th className="px-4 py-3 text-left">GPO Branch</th>
                  <th className="px-4 py-3 text-center">Postal Code</th>
                  <th className="px-4 py-3 text-left">Address / Area</th>
                  <th className="px-4 py-3 text-left">Counter Hours</th>
                  <th className="px-4 py-3 text-right">Phone Number</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {MAJOR_GPOS.map((gpo) => (
                  <tr key={gpo.city} className="bg-white dark:bg-slate-900 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition">
                    <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">{gpo.city}</td>
                    <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-300">{gpo.name}</td>
                    <td className="px-4 py-3 text-center font-mono font-bold text-doc-seal bg-slate-50 dark:bg-slate-800/60 rounded">
                      {gpo.postalCode}
                    </td>
                    <td className="px-4 py-3 text-slate-500 dark:text-slate-400">{gpo.location}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{gpo.timing}</td>
                    <td className="px-4 py-3 text-right font-mono text-slate-700 dark:text-slate-300">{gpo.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 2: How to Find Nearest Sub-Post Office via Google Maps */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              How to Find Your Nearest Sub-Post Office (13,000+ Branches)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Google Maps Search</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Open Google Maps on your phone and search for <code>&quot;Pakistan Post Office near me&quot;</code> to find the closest sub-branch and neighborhood postbox.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">General Post Office (GPO)</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Every district headquarters in Pakistan has a central GPO offering full customs clearance, UMS booking, parcel packaging, and money orders.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Call Postal Helpline</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Dial <strong>051-111-111-117</strong> to inquire about specific branch timings, postal code verification, and parcel hold locations.
              </p>
            </div>
          </div>
        </section>

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step Post Office &amp; Postal Code Search Workflow (2026)"
          titleUr="پاکستان پوسٹ آفس اور پوسٹل کوڈ تلاش کرنے کا 4 مرحلہ وار طریقہ"
          subtitleEn="How to identify your local delivery branch, verify official postal codes, and access parcel counters"
          subtitleUr="اپنے قریبی ڈاکخانے کی لوکیشن، درست پوسٹل کوڈ اور پارسل سروس کے اوقات معلوم کرنے کا طریقہ"
          steps={[
            {
              number: 1,
              titleEn: "Identify Administrative Postal Circle",
              titleUr: "صوبائی پوسٹل سرکل کا تعین کریں",
              descEn: "Pakistan Post is structured across major circles: Punjab, Sindh, KPK, Balochistan, and Federal Capital/AJK.",
              descUr: "پاکستان پوسٹ کے متعلقہ صوبائی یا علاقائی سرکل کا انتخاب کریں۔",
              tagEn: "Postal Circle",
              tagUr: "پوسٹل سرکل",
            },
            {
              number: 2,
              titleEn: "Select District & Local Delivery Zone",
              titleUr: "ضلع، تحصیل اور متعلقہ علاقہ منتخب کریں",
              descEn: "Filter by your municipal district and neighborhood delivery zone to locate assigned delivery staff.",
              descUr: "اپنے ضلع اور قریبی محلے یا ٹاؤن کی ڈلیوری حدود کو چیک کریں۔",
              tagEn: "Local Zone",
              tagUr: "ڈلیوری زون",
            },
            {
              number: 3,
              titleEn: "Locate GPO or Sub-Post Office",
              titleUr: "مرکزی جی پی او یا قریبی سب پوسٹ آفس تلاش کریں",
              descEn: "Identify the main General Post Office (GPO) for specialized services or local sub-post offices for regular mail.",
              descUr: "بڑی سروسز کے لیے مرکزی جی پی او اور عام ڈاک کے لیے قریبی سب پوسٹ آفس کا پتہ دیکھیں۔",
              tagEn: "GPO Branch",
              tagUr: "ڈاکخانہ برانچ",
            },
            {
              number: 4,
              titleEn: "Verify 5-Digit Code & Counter Hours",
              titleUr: "5 ہندسوں کا پوسٹل کوڈ اور کاؤنٹر اوقات تصدیق کریں",
              descEn: "Ensure your destination parcel carries the verified 5-digit postal code to avoid transit delays.",
              descUr: "پارسل اور خطوط پر درست 5 ہندسوں کا پوسٹل کوڈ درج کریں تاکہ ڈاک کی ترسیل میں تاخیر نہ ہو۔",
              tagEn: "Postal Code",
              tagUr: "پوسٹل کوڈ",
            },
          ]}
        />

        {/* Section 3: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Postal Resources on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/pakistan-post/tracking-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Parcel Tracking</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Pakistan Post Tracking 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Track UMS and EMS shipments in real-time.</p>
            </Link>

            <Link
              href="/pakistan-post/overview-guide-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Services Guide</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Pakistan Post Overview &amp; Tariffs →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Complete mail rates, timelines, and courier comparison.</p>
            </Link>

            <Link
              href="/passport/tracking-status"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Identity Tracking</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Pakistani Passport Status Check →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check passport dispatch and postal delivery.</p>
            </Link>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Pakistan Post Office Locations)"
          titleUr="پاکستان پوسٹ آفس اور جی پی او سے متعلق عام سوالات"
          subtitleEn="Essential guidelines on finding local branches, 24/7 GPO emergency counters, major city postal codes, and weekend timings"
          subtitleUr="قریبی ڈاکخانہ تلاش کرنے، 24 گھنٹے اوپن جی پی او کاؤنٹرز اور بڑے شہروں کے پوسٹل کوڈز کی تفصیل"
          items={[
            {
              questionEn: "How do I find the nearest Pakistan Post office near me?",
              questionUr: "اپنے قریب ترین پاکستان پوسٹ کا ڈاکخانہ کیسے تلاش کریں؟",
              answerEn: "You can locate your nearest Pakistan Post office by searching \"Pakistan Post Office\" on Google Maps or by visiting your city’s central General Post Office (GPO). Pakistan Post operates over 13,000 branches and sub-post offices nationwide.",
              answerUr: "گوگل میپس پر 'Pakistan Post' سرچ کریں یا اپنے شہر کے مرکزی جی پی او (GPO) تشریف لے جائیں۔ پاکستان پوسٹ ملک بھر میں 13،000 سے زائد برانچوں اور سب پوسٹ آفسز کا نیٹ ورک چلاتا ہے۔",
            },
            {
              questionEn: "What are the operating hours of General Post Offices (GPOs) in Pakistan?",
              questionUr: "پاکستان میں جی پی او اور ڈاکخانوں کے دفتری اوقات کیا ہیں؟",
              answerEn: "Standard Pakistan Post sub-offices operate Monday to Saturday from 9:00 AM to 4:00 PM (with a Friday prayer break from 12:30 PM to 2:00 PM). Major central GPOs in Karachi, Lahore, Islamabad, and Rawalpindi maintain 24/7 round-the-clock urgent mail counters for booking.",
              answerUr: "عام برانچیں پیر تا ہفتہ صبح 9:00 سے شام 4:00 بجے تک کھلی رہتی ہیں۔ جبکہ کراچی، لاہور، اسلام آباد اور راولپنڈی کے مرکزی جی پی او میں ارجنٹ بکنگ کے لیے 24 گھنٹے کاؤنٹرز فعال رہتے ہیں۔",
            },
            {
              questionEn: "What is the postal code for Islamabad, Lahore, and Karachi GPO?",
              questionUr: "اسلام آباد، لاہور اور کراچی جی پی او کا پوسٹل کوڈ کیا ہے؟",
              answerEn: "The central GPO postal codes are: Islamabad GPO (44000), Lahore GPO (54000), Karachi GPO (74000), Rawalpindi GPO (46000), and Peshawar GPO (25000).",
              answerUr: "مرکزی شہروں کے پوسٹل کوڈز درج ذیل ہیں: اسلام آباد جی پی او (44000)، لاہور جی پی او (54000)، کراچی جی پی او (74000)، راولپنڈی جی پی او (46000) اور پشاور جی پی او (25000)۔",
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Statutory Sources Cited:</p>
          {[
            { label: 'Pakistan Post Official Portal', url: 'https://pakpost.gov.pk/' },
            { label: 'Pakistan Post GPO Directory & Postal Code Finder', url: 'https://ep.gov.pk/' },
            { label: 'Ministry of Communications, Government of Pakistan', url: 'https://communication.gov.pk/' },
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
