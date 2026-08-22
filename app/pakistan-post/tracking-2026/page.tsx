import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { HelpCircle, ExternalLink, Mail, ShieldCheck, CheckCircle2, AlertTriangle, Truck, Package, PhoneCall, Building } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pakistan Post Tracking 2026: Track Your Parcel & UMS Mail Online | Pakistan Info Hub',
  description:
    'Pakistan Post tracking online 2026: Track your parcel, Urgent Mail Service (UMS), international EMS, and GPO registered post online. Enter your 9-13 digit tracking number to get real-time delivery status, dispatch updates, and helpline support.',
  keywords: [
    'pakistan post tracking',
    'pakistan post tracking number',
    'how to track pakistan post parcel',
    'ums tracking',
    'gpo tracking',
    'pakistan post international tracking',
    'ums online tracking',
    'pakpost ep gov pk tracking',
  ],
  openGraph: {
    title: 'Pakistan Post Tracking 2026: Track Your Parcel & UMS Mail Online',
    description:
      'Real-time parcel tracking guide and helper for Pakistan Post, UMS, EMS Express, and GPO registered mail across Pakistan.',
    url: 'https://www.pakistaninfohub.com/pakistan-post/tracking-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/pakistan-post/tracking-2026' },
};

const PakPostTrackingHelper = dynamic(
  () => import('@/components/PakPostTrackingHelper').then((m) => ({ default: m.PakPostTrackingHelper })),
  { ssr: false, loading: () => <div className="h-[480px] rounded-3xl bg-slate-100 dark:bg-slate-800 animate-pulse" /> }
);

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
          name: 'Pakistan Post Tracking 2026',
          item: 'https://www.pakistaninfohub.com/pakistan-post/tracking-2026',
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Pakistan Post Parcel & UMS Tracking Helper 2026',
      description:
        'Interactive verification and tracking tool for Pakistan Post UMS, international EMS, and GPO registered mail.',
      url: 'https://www.pakistaninfohub.com/pakistan-post/tracking-2026',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I track my Pakistan Post parcel online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To track your Pakistan Post parcel: (1) Locate the 9 to 13-digit tracking ID on your postal receipt, (2) Enter the tracking number into our Pakistan Post tracking tool or visit the official portal at ep.gov.pk, and (3) Click search to view the real-time status from dispatch to delivery.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is UMS tracking in Pakistan Post?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'UMS (Urgent Mail Service) is Pakistan Post’s premier domestic express delivery service for documents and parcels. UMS tracking numbers usually begin with "UM" or consist of a 9-digit barcode number that can be tracked nationwide via ep.gov.pk.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I track international parcels sent via Pakistan Post?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'International parcels and EMS items sent via Pakistan Post have a 13-character tracking code ending in "PK" (e.g. EP123456789PK or RU123456789PK). These can be tracked on ep.gov.pk/international_tracking.asp and through the destination country’s national postal portal.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if my Pakistan Post tracking status is not updating?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If your tracking status has not updated for more than 48 hours, contact the official Pakistan Post helpline at 051-111-111-117 or visit your local destination General Post Office (GPO) with your booking receipt.',
          },
        },
      ],
    },
  ],
};

export default function PakPostTrackingPage() {
  const breadcrumbs = [
    { nameEn: 'Pakistan Post', nameUr: 'پاکستان پوسٹ' },
    { nameEn: 'Pakistan Post Tracking', nameUr: 'پاکستان پوسٹ ٹریکنگ 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="PAKISTAN POST TRACKING" labelUr="پاکستان پوسٹ ٹریکنگ" variant="seal" />
            <VerifiedBadge textEn="OFFICIAL UMS & EP.GOV.PK VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Pakistan Post Tracking 2026: Track Your Parcel &amp; UMS Mail Online
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پاکستان پوسٹ آن لائن ٹریکنگ، یو ایم ایس (UMS) پارسل اور جی پی او رجسٹری معلوم کرنے کا طریقہ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Track your Pakistan Post shipments, Urgent Mail Service (UMS), international EMS, and registered mail.
            Learn <strong>how to track pakistan post parcel</strong>, validate your 9-13 digit tracking number, and launch official live tracking on <code>ep.gov.pk</code>.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How Do You Track a Pakistan Post Parcel or UMS Letter Online?"
          topicTitleUr="پاکستان پوسٹ پارسل یا یو ایم ایس ڈاک آن لائن کیسے ٹریک کریں؟"
          answerEn="To track your parcel: Find the 9 to 13-digit tracking number on your booking receipt (e.g. EP123456789PK or 9-digit UMS barcode), enter it into the official Pakistan Post portal at ep.gov.pk, and click Search. You will see the complete delivery journey from origin GPO to final delivery."
          answerUr="پارسل ٹریک کرنے کے لیے: بکنگ رسید پر موجود 9 سے 13 ہندسوں کا ٹریکنگ نمبر (جیسے EP123456789PK یا UMS کوڈ) سرکاری ویب سائٹ (ep.gov.pk) پر درج کر کے سرچ کریں۔ آپ کے پارسل کے بک ہونے سے لے کر ڈلیوری تک تمام تفصیلات سامنے آ جائیں گی۔"
        />

        {/* Interactive Helper Mount */}
        <PakPostTrackingHelper />

        {/* Section 1: Where to Find Your Tracking Number */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Mail className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Where to Find Your Pakistan Post Tracking Number
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">UMS Booking Receipt</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Printed directly below the barcode on the counter carbon copy slip (usually 9 to 11 digits or starting with <code>UM</code>).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">EMS International Label</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                A 13-character S10 code starting with <code>EP</code>, <code>EE</code>, or <code>CP</code> and ending with <code>PK</code> (e.g. <code>EP123456789PK</code>).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Registered Post Slip</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Found on the red or blue registration stamp affixed to registered letters and government document parcels (e.g. <code>RU123456789PK</code>).
              </p>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 2: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Postal &amp; Delivery Resources on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/pakistan-post/overview-guide-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Pillar Guide</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Pakistan Post Services &amp; UMS Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Complete overview of mail rates, parcel delivery, and tariffs.</p>
            </Link>

            <Link
              href="/pakistan-post/post-office-locator-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Branch Directory</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Pakistan Post Office Near Me (GPO) →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Find General Post Offices, postal codes, and counter timings.</p>
            </Link>

            <Link
              href="/passport/tracking-status"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Identity Tracking</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Pakistani Passport Tracking Status →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Track passport delivery dispatched via Pakistan Post.</p>
            </Link>
          </div>
        </section>

        {/* Section 3: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Pakistan Post Tracking)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'How do I track my Pakistan Post parcel online?',
                a: 'To track your Pakistan Post parcel: (1) Locate the 9 to 13-digit tracking ID on your postal receipt, (2) Enter the tracking number into our Pakistan Post tracking tool or visit the official portal at ep.gov.pk, and (3) Click search to view the real-time status from dispatch to delivery.',
              },
              {
                q: 'What is UMS tracking in Pakistan Post?',
                a: 'UMS (Urgent Mail Service) is Pakistan Post’s premier domestic express delivery service for documents and parcels. UMS tracking numbers usually begin with "UM" or consist of a 9-digit barcode number that can be tracked nationwide via ep.gov.pk.',
              },
              {
                q: 'How do I track international parcels sent via Pakistan Post?',
                a: 'International parcels and EMS items sent via Pakistan Post have a 13-character tracking code ending in "PK" (e.g. EP123456789PK or RU123456789PK). These can be tracked on ep.gov.pk/international_tracking.asp and through the destination country’s national postal portal.',
              },
              {
                q: 'What should I do if my Pakistan Post tracking status is not updating?',
                a: 'If your tracking status has not updated for more than 48 hours, contact the official Pakistan Post helpline at 051-111-111-117 or visit your local destination General Post Office (GPO) with your booking receipt.',
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
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Statutory Sources Cited:</p>
          {[
            { label: 'Pakistan Post Electronic Postal Tracking (EP)', url: 'https://ep.gov.pk/' },
            { label: 'Pakistan Post Official Portal', url: 'https://pakpost.gov.pk/' },
            { label: 'Universal Postal Union (UPU) Global Tracking System', url: 'https://www.upu.int/' },
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
