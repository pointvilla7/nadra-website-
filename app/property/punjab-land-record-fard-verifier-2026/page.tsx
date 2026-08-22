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
  ShieldCheck,
  Building,
  FileCheck,
  QrCode,
  Landmark,
  BadgeCheck,
  MapPin,
  Clock,
  Coins,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Punjab Fard Online Kaise Nikale 2026 – PLRA Land Record & Fard Malkiat Verifier | Pakistan Info Hub',
  description:
    'Complete guide on Punjab Fard online kaise nikale in 2026. Validate your CNIC & Khewat number, check computerized Fard Malkiat on the official Punjab Land Records Authority (PLRA) portal (punjab-zameen.gov.pk), and download your official QR-verified title deed.',
  keywords: [
    'Punjab Fard online kaise nikale 2026',
    'PLRA land record check by CNIC',
    'punjab zameen fard download',
    'fard malkiat online punjab',
    'khewat number check online',
    'arazi record center fard fee',
    'punjab land records authority official portal',
  ],
  openGraph: {
    title: 'Punjab Fard Online Kaise Nikale 2026 – PLRA Land Record & Fard Verifier',
    description:
      'Check and verify your Punjab computerized Fard Malkiat (Record of Rights) by CNIC & Khewat number with one-click access to the official PLRA Punjab Zameen portal.',
    url: 'https://www.pakistaninfohub.com/property/punjab-land-record-fard-verifier-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/property/punjab-land-record-fard-verifier-2026' },
};

const PunjabLandRecordFardVerifier = dynamic(
  () =>
    import('@/components/PunjabLandRecordFardVerifier').then((m) => ({
      default: m.PunjabLandRecordFardVerifier,
    })),
  {
    ssr: false,
    loading: () => <div className="h-[480px] rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" />,
  }
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Property & Land Mutation', item: 'https://www.pakistaninfohub.com/property' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Punjab Land Record Fard Verifier 2026',
          item: 'https://www.pakistaninfohub.com/property/punjab-land-record-fard-verifier-2026',
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Punjab Land Record Fard Verifier 2026',
      description:
        'An interactive civic navigator to validate CNIC and Khewat numbers and access the official Punjab Land Records Authority (PLRA) portal for online computerized Fard issuance and land title verification.',
      url: 'https://www.pakistaninfohub.com/property/punjab-land-record-fard-verifier-2026',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
    },
    {
      '@type': 'HowTo',
      name: 'How to Get and Verify Punjab Fard Online (2026)',
      description:
        'Step-by-step instructions to search, pay, and download your official computerized Fard Malkiat (Record of Rights) from the Punjab Land Records Authority.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Validate CNIC and Khewat',
          text: 'Enter your 13-digit CNIC and optional Khewat/Khatooni number in the verification tool to confirm formatting client-side.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Open Official PLRA Punjab Zameen Portal',
          text: 'Click "Open Punjab Zameen Portal" to navigate to the official portal (punjab-zameen.gov.pk) or launch the Punjab Zameen mobile app.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Select Location & Search Record',
          text: 'Choose your District, Tehsil, and Mauza/Village, then paste your CNIC or enter your Khewat number to view your property record.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Pay Official Fee & Download PDF',
          text: 'Generate a PSID challan, pay the official PKR 150 – 250 fee via ePay Punjab or mobile banking, and immediately download your verified digital Fard with QR code.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Kya Punjab mein Fard online mil sakti hai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Punjab Land Records Authority (PLRA) provides official online Fard issuance through their portal (punjab-zameen.gov.pk) and the Punjab Zameen mobile app. You can search by your 13-digit CNIC, pay the fee online via ePay Punjab / 1Link, and download a computerized Fard with an authentic QR code.',
          },
        },
        {
          '@type': 'Question',
          name: 'Punjab online Fard ki sarkari fees kitni hai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The official government fee for issuing a computerized Fard for personal record or verification (Fard Baraye Malkiat) is PKR 150 to PKR 250 per copy. Payment is made directly through government 1Link / ePay Punjab channels without any middleman or agent fees.',
          },
        },
        {
          '@type': 'Question',
          name: 'Online Fard nikalne mein kitna time lagta hai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If your CNIC is already linked to your land record at an Arazi Record Center (ARC), obtaining a Fard online takes less than 5 minutes. You search your record, pay via mobile banking, and get an instant downloadable PDF. If visiting a physical Arazi Record Center, the process takes approximately 15 to 30 minutes with biometric verification.',
          },
        },
        {
          '@type': 'Question',
          name: 'Computerized Fard ki legal validity kitni hoti hai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Fard issued for personal record (Fard Baraye Malkiat) remains a valid proof of ownership unless a new mutation (Intiqal) takes place. However, a Fard issued specifically for property sale (Fard Baraye Baye) or court surety (Fard Baraye Zamanat) typically has an active validity window of 30 to 90 days as per PLRA and Registration rules.',
          },
        },
        {
          '@type': 'Question',
          name: 'Agar online CNIC se record na mile toh kya karna chahiye?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If your record does not show up online by CNIC, your old manual revenue record (Jamabandi) may not yet have your computerized CNIC linked to your name. You should visit your local Tehsil Arazi Record Center (ARC) or Dehi Markaz Maal (DMM) with your original CNIC and old manual Fard/registry to have your CNIC registered in the computerized database.',
          },
        },
      ],
    },
  ],
};

export default function PunjabLandRecordFardVerifierPage() {
  const breadcrumbs = [
    { nameEn: 'Property & Land Mutation', nameUr: 'زمین، جائیداد اور انتقال' },
    { nameEn: 'Punjab Land Record Fard Verifier 2026', nameUr: 'پنجاب فرد ملکیت تصدیق 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header Section */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="PROPERTY NAVIGATOR" labelUr="اراضی پورٹل" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Punjab Land Record Fard Verifier 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پنجاب لینڈ ریکارڈ فرد ملکیت — آن لائن چیک، فیس و تصدیق کا طریقہ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Learn how to get your computerized <strong>Fard Malkiat</strong> (Record of Rights / فرد ملکیت) in Punjab
            online. Validate your 13-digit CNIC and Khewat credentials locally, copy clean details, and access the
            official Punjab Land Records Authority portal (punjab-zameen.gov.pk) safely.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Get and Verify Punjab Fard Online (2026)"
          topicTitleUr="پنجاب میں آن لائن فرد ملکیت حاصل کرنے کا طریقہ"
          answerEn="To get your Punjab Fard online: (1) Visit the official PLRA portal (punjab-zameen.gov.pk) or Punjab Zameen App, (2) Select your District, Tehsil, and Mauza/Village, (3) Search by your 13-digit CNIC or Khewat number, (4) Pay the PKR 150 – 250 fee via ePay Punjab or mobile banking, and (5) Download your digital QR-verified Fard instantly."
          answerUr="پنجاب میں آن لائن فرد حاصل کرنے کے لیے: (1) پنجاب لینڈ ریکارڈ اتھارٹی کے آفیشل پورٹل (punjab-zameen.gov.pk) یا ایپ پر جائیں، (2) اپنا ضلع، تحصیل اور موضع منتخب کریں، (3) 13 ہندسوں کا شناختی کارڈ یا کھوٹ نمبر درج کریں، (4) ای پے پنجاب سے 150 تا 250 روپے فیس ادا کریں، اور (5) کیو آر کوڈ والی تصدیق شدہ فرد ڈاؤن لوڈ کریں۔"
        />

        {/* Interactive Verifier Tool */}
        <section aria-label="Punjab Land Record Fard Verifier Tool">
          <PunjabLandRecordFardVerifier />
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 1: What is a Fard in Plain Language */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white flex items-center gap-2">
            <Building className="w-6 h-6 text-doc-brass" />
            What is a &quot;Fard&quot; and Why Do You Need It?
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base space-y-4">
            <p>
              In simple terms, a <strong>Fard (فرد ملکیت / Record of Rights)</strong> is the official government document
              that certifies exactly who owns a piece of land or property in Punjab, how much area they hold (measured in
              Kanal, Marla, and Sarsahi), and their specific shares in a village settlement or urban mahol.
            </p>
            <p>
              Before the computerized Land Records Management and Information System (LRMIS), people had to search for
              the local village Patwari and wait days for a handwritten manual paper. Today, the <strong>Punjab Land
              Records Authority (PLRA)</strong> has computerized land records across all 36 districts of Punjab. You can
              now download your authentic computerized Fard online with a machine-readable barcode and QR code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 text-doc-seal dark:text-red-400 font-mono text-xs font-bold uppercase">
                <FileCheck className="w-4 h-4" />
                <span>1. For Buying &amp; Selling</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Fard Baraye Baye (فرد برائے بیع)
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Required before registering any sale deed or executing an Intiqal (mutation). It temporarily freezes the
                land parcel so the seller cannot double-sell the property to multiple buyers.
              </p>
            </div>

            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>2. Proof of Ownership</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Fard Malkiat (فرد برائے ریکارڈ)
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Used as legal evidence for personal records, foreign visa applications, building approval plans, or utility
                meter connections (electricity, gas, tube well).
              </p>
            </div>

            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold uppercase">
                <Landmark className="w-4 h-4" />
                <span>3. Loans &amp; Court Surety</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Fard Zamanat (فرد برائے ضمانت)
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Required when offering property as collateral for commercial bank loans, agricultural credit, or court
                surety bail bonds (ضمانت).
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Key Revenue Terms Explained Plainly */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white">
            Understanding Punjab Land Terms: Khewat, Khatooni &amp; Khasra
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Many citizens get confused by revenue terms when searching for their land. Here is what each term means:
          </p>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Term</th>
                  <th className="px-4 py-3 text-left">Urdu Name</th>
                  <th className="px-4 py-3 text-left">Plain Language Meaning</th>
                  <th className="px-4 py-3 text-left">Real-Life Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  {
                    term: 'Mauza / Mahal',
                    urdu: 'موضع / دیہہ',
                    meaning: 'The specific revenue village or designated urban census block where land is situated.',
                    example: 'Mauza Kahna Nau, Lahore',
                  },
                  {
                    term: 'Khewat Number',
                    urdu: 'کھوٹ نمبر',
                    meaning: 'The ownership account number assigned to a joint group of owners or single owner.',
                    example: 'Khewat # 142 / 1',
                  },
                  {
                    term: 'Khatooni Number',
                    urdu: 'کھتونی نمبر',
                    meaning: 'The holding or tenancy record number showing who is in physical possession/cultivation.',
                    example: 'Khatooni # 284',
                  },
                  {
                    term: 'Khasra Number',
                    urdu: 'خسرہ نمبر',
                    meaning: 'The specific survey plot number of the physical parcel on the revenue survey map (Shajra).',
                    example: 'Khasra # 1205 / 4',
                  },
                  {
                    term: 'Intiqal (Mutation)',
                    urdu: 'انتقال اراضی',
                    meaning: 'The official change of ownership in the government register following a sale, gift, or inheritance.',
                    example: 'Intiqal # 4591',
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition"
                  >
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">{row.term}</td>
                    <td className="px-4 py-3 font-serif font-bold text-doc-seal dark:text-red-400 text-xs">{row.urdu}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300 text-xs">{row.meaning}</td>
                    <td className="px-4 py-3 font-mono font-semibold text-slate-700 dark:text-slate-300 text-xs">
                      {row.example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </section>

        {/* Section 3: Digital Fard vs Manual Patwari Fard Comparison */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white">
            Digital Computerized Fard vs Old Manual Patwari Fard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border-2 border-emerald-500/30 bg-emerald-50/20 dark:bg-emerald-950/10 space-y-3">
              <h3 className="font-serif font-bold text-base text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-emerald-600" />
                Modern PLRA Computerized Fard
              </h3>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2 list-disc list-inside leading-relaxed">
                <li>Issued in 5 minutes online or at Arazi Record Centers (ARC).</li>
                <li>Fixed official government fee of PKR 150 – 250 paid via digital banking.</li>
                <li>Includes tamper-proof QR code and unique document verification ID.</li>
                <li>Accepted by all Pakistani banks, courts, embassies, and sub-registrars.</li>
                <li>Centralized database reduces land fraud, fake registries, and unauthorized sales.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <h3 className="font-serif font-bold text-base text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Clock className="w-5 h-5 text-slate-400" />
                Old Manual Patwari Fard (Legacy)
              </h3>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 list-disc list-inside leading-relaxed">
                <li>Required visiting the Patwari’s personal office and multiple follow-ups.</li>
                <li>Arbitrary unofficial fees and long waiting times.</li>
                <li>Handwritten in complex Urdu script prone to alterations and disputes.</li>
                <li>High risk of outdated ownership records and unrecorded mutations.</li>
                <li>Phased out across all computerized tehsils of Punjab.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Related Property Guides */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Punjab Property &amp; Mutation Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/property/intiqal-registration-online-punjab"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Process</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Online Intiqal Registration Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">How property ownership transfer is recorded at PLRA.</p>
            </Link>

            <Link
              href="/property/property-mutation-check-by-cnic"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Verification</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Property Mutation Status by CNIC →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check pending mutation approvals and token numbers.</p>
            </Link>

            <Link
              href="/property/registry-vs-intiqal-difference"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Legal Guide</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Registry vs Intiqal: What is the Difference? →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Understand the legal difference between registered deed and revenue mutation.</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            Frequently Asked Questions (Punjab Fard Online)
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'Kya Punjab mein Fard online mil sakti hai?',
                a: 'Yes! Punjab Land Records Authority (PLRA) provides official online Fard issuance through their portal (punjab-zameen.gov.pk) and the Punjab Zameen mobile app. You can search by your 13-digit CNIC, pay the fee online via ePay Punjab / 1Link, and download a computerized Fard with an authentic QR code.',
              },
              {
                q: 'Punjab online Fard ki sarkari fees kitni hai?',
                a: 'The official government fee for issuing a computerized Fard for personal record or verification (Fard Baraye Malkiat) is PKR 150 to PKR 250 per copy. Payment is made directly through government 1Link / ePay Punjab channels without any middleman or agent fees.',
              },
              {
                q: 'Online Fard nikalne mein kitna time lagta hai?',
                a: 'If your CNIC is already linked to your land record at an Arazi Record Center (ARC), obtaining a Fard online takes less than 5 minutes. You search your record, pay via mobile banking, and get an instant downloadable PDF. If visiting a physical Arazi Record Center, the process takes approximately 15 to 30 minutes with biometric verification.',
              },
              {
                q: 'Computerized Fard ki legal validity kitni hoti hai?',
                a: 'A Fard issued for personal record (Fard Baraye Malkiat) remains a valid proof of ownership unless a new mutation (Intiqal) takes place. However, a Fard issued specifically for property sale (Fard Baraye Baye) or court surety (Fard Baraye Zamanat) typically has an active validity window of 30 to 90 days as per PLRA and Registration rules.',
              },
              {
                q: 'Agar online CNIC se record na mile toh kya karna chahiye?',
                a: 'If your record does not show up online by CNIC, your old manual revenue record (Jamabandi) may not yet have your computerized CNIC linked to your name. You should visit your local Tehsil Arazi Record Center (ARC) or Dehi Markaz Maal (DMM) with your original CNIC and old manual Fard/registry to have your CNIC registered in the computerized database.',
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
            { label: 'Punjab Land Records Authority (PLRA) Official Portal', url: 'https://www.punjab-zameen.gov.pk/' },
            { label: 'PLRA Online Fard Issuance Service', url: 'https://onlinefard.punjab-zameen.gov.pk/' },
            { label: 'Punjab Land Records Authority Act 2017 & Citizen Service Charter', url: 'https://plra.punjab.gov.pk/' },
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
