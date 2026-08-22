import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  HelpCircle,
  ExternalLink,
  Mail,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Truck,
  Package,
  Building,
  Clock,
  Coins,
  ArrowRight,
  MapPin,
  Search,
  Globe,
  FileCheck
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pakistan Post 2026: Services, UMS Tracking & Post Office Guide | Pakistan Info Hub',
  description:
    'Comprehensive guide to Pakistan Post in 2026: Urgent Mail Service (UMS), international EMS parcel delivery, registered mail, money orders, post office locations, delivery timelines, and official parcel tracking.',
  keywords: [
    'pakistan post',
    'pakistan post office tracking',
    'ums online tracking',
    'pakistan post services guide 2026',
    'pakistan post parcel delivery rates',
    'ums urgent mail service pakistan',
    'gpo pakistan post office',
  ],
  openGraph: {
    title: 'Pakistan Post 2026: Services, UMS Tracking & Post Office Guide',
    description:
      'Complete civic guide to Pakistan Post services, UMS parcel delivery rates, GPO networks, and tracking.',
    url: 'https://www.pakistaninfohub.com/pakistan-post/overview-guide-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/pakistan-post/overview-guide-2026' },
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
          name: 'Pakistan Post Guide 2026',
          item: 'https://www.pakistaninfohub.com/pakistan-post/overview-guide-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Pakistan Post 2026: Services, UMS Tracking & Post Office Directory Guide',
      description:
        'A comprehensive public guide explaining Pakistan Post operations, domestic UMS services, international EMS shipping, parcel delivery rates, and post office network.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/pakistan-post/overview-guide-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services are offered by Pakistan Post?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pakistan Post offers domestic Urgent Mail Service (UMS), international Express Mail Service (EMS), Registered Post, Postal Parcels, Electronic Money Orders (EMO), utility bill collection, military and BISP pension disbursements, and Postal Life Insurance (PLI).',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does Pakistan Post UMS delivery take across Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'UMS (Urgent Mail Service) delivers within 24 hours for major city-to-city routes (e.g. Islamabad, Lahore, Karachi), 48 hours for secondary district centers, and 3 to 5 business days for remote rural union councils.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Pakistan Post compare to private courier companies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pakistan Post offers significantly more economical postage rates and reaches remote rural villages through its nationwide network of over 13,000 post offices, where private couriers often do not operate. Private couriers may offer faster specialized commercial delivery in major metropolitan hubs.',
          },
        },
      ],
    },
  ],
};

export default function PakPostOverviewGuidePage() {
  const breadcrumbs = [
    { nameEn: 'Pakistan Post', nameUr: 'پاکستان پوسٹ' },
    { nameEn: 'Services & Overview Guide', nameUr: 'خدمات اور مکمل گائیڈ 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="PAKISTAN POST PILLAR GUIDE" labelUr="پاکستان پوسٹ گائیڈ" variant="seal" />
            <VerifiedBadge textEn="MINISTRY OF COMMUNICATIONS & PAKPOST VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Pakistan Post 2026: Services, UMS Tracking &amp; Post Office Guide
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پاکستان پوسٹ مکمل گائیڈ: یو ایم ایس سروس، بین الاقوامی پارسلز اور ڈلیوری ریٹس
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Your all-in-one public directory for <strong>Pakistan Post</strong>.
            Explore core postal services, Urgent Mail Service (UMS) rates, international EMS shipping,
            postal life insurance, delivery timelines, and official parcel tracking.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is Pakistan Post and What Services Does It Provide?"
          topicTitleUr="پاکستان پوسٹ کیا ہے اور کون سی سہولیات فراہم کرتا ہے؟"
          answerEn="Pakistan Post is Pakistan's national public postal operator under the Ministry of Communications, operating over 13,000 post offices. It provides affordable domestic Urgent Mail Service (UMS), international EMS parcels, registered mail, electronic money orders (EMO), utility bill payments, and pension disbursement nationwide."
          answerUr="پاکستان پوسٹ وزارت مواصلات کے تحت پاکستان کا سرکاری ڈاک کا ادارہ ہے جس کے ملک بھر میں 13,000 سے زائد ڈاکخانے ہیں۔ یہ ارجنٹ میل سروس (UMS)، بین الاقوامی ای ایم ایس، رجسٹرڈ ڈاک، منی آرڈر، یوٹیلٹی بلز کی وصولی اور پنشن کی ادائیگی فراہم کرتا ہے۔"
        />

        {/* Quick Action Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/pakistan-post/tracking-2026"
            className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 hover:border-doc-brass transition group flex items-center justify-between shadow-lg"
          >
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-doc-brass uppercase flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-amber-400" />
                <span>Track Your Shipment</span>
              </span>
              <h2 className="font-serif font-bold text-base text-white group-hover:text-doc-brass transition">
                Pakistan Post Tracking 2026 (UMS &amp; GPO) →
              </h2>
              <p className="text-xs text-slate-300 font-sans">
                Real-time parcel status lookup on official ep.gov.pk system.
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-amber-400 shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/pakistan-post/post-office-locator-2026"
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-doc-seal transition group flex items-center justify-between shadow-sm"
          >
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-doc-seal uppercase flex items-center gap-1.5">
                <Building className="w-4 h-4 text-doc-seal" />
                <span>Find Your Local Branch</span>
              </span>
              <h2 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                Post Office Near Me &amp; GPO Directory →
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                GPO postal codes, city locations, and counter working hours.
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-doc-seal shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Section 1: Core Services Overview */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Package className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Primary Public Services of Pakistan Post
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">UMS (Urgent Mail Service)</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Fast domestic overnight courier delivery between major cities with door-to-door postman delivery and computerized barcode tracking.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">EMS Express International</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Affordable worldwide parcel and document delivery affiliated with the Universal Postal Union (UPU) with tracking ending in <code>PK</code>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Registered Post &amp; Parcels</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Secure signed legal and governmental mail transmission, passport dispatches from DGIP, court notices, and bulk book post.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Delivery Timelines Table */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Standard Delivery Timelines &amp; Coverage
            </h2>
          </div>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-xs font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-[11px] font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Service Type</th>
                  <th className="px-4 py-3 text-left">Coverage Area</th>
                  <th className="px-4 py-3 text-left">Expected Delivery Timeline</th>
                  <th className="px-4 py-3 text-right">Tracking Availability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">UMS City-to-City</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Major Hubs (ISB, LHR, KHI, RWP, PEW, MUX)</td>
                  <td className="px-4 py-3 font-mono text-emerald-600 font-bold">24 – 48 Hours (Overnight)</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">Online at ep.gov.pk</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">UMS Rural / Remote</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Tehsils &amp; Rural Union Councils</td>
                  <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300">2 – 4 Business Days</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">Online at ep.gov.pk</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Registered Air Mail</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Nationwide across all districts</td>
                  <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300">3 – 6 Business Days</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">Signature on Delivery</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">EMS International</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Gulf (UAE, Saudi), UK, USA, Europe</td>
                  <td className="px-4 py-3 font-mono text-doc-brass font-bold">5 – 8 Business Days</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-doc-seal">UPU Global Tracking</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 3: Pakistan Post vs Private Couriers */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Truck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Pakistan Post vs Private Couriers (Key Differences)
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-2">
              <span className="font-bold text-doc-brass text-sm block">1. Universal Nationwide Reach</span>
              <p className="text-slate-300 leading-relaxed">
                With over 13,000 branches reaching virtually every village and union council in Pakistan, Pakistan Post provides delivery services to remote mountainous and rural destinations where private couriers do not maintain delivery operations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-2">
              <span className="font-bold text-emerald-400 text-sm block">2. Government Postal Rates &amp; Tariffs</span>
              <p className="text-slate-300 leading-relaxed">
                Regulated statutory postage rates make Pakistan Post the most cost-effective option for heavy parcels, book posts, overseas expatriate letters, and official governmental communications.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Civic Resources on Pakistan Info Hub
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
              href="/pakistan-post/post-office-locator-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Office Locator</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                GPO Locations &amp; Postal Codes →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Find General Post Offices and branch contact numbers.</p>
            </Link>

            <Link
              href="/overseas/nicop-mandatory-entry-rules-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Overseas Services</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Overseas Travel &amp; Documents →
              </h3>
              <p className="text-xs text-slate-500 mt-1">International postal and NICOP delivery guidelines.</p>
            </Link>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Pakistan Post)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'What services are offered by Pakistan Post?',
                a: 'Pakistan Post offers domestic Urgent Mail Service (UMS), international Express Mail Service (EMS), Registered Post, Postal Parcels, Electronic Money Orders (EMO), utility bill collection, military and BISP pension disbursements, and Postal Life Insurance (PLI).',
              },
              {
                q: 'How long does Pakistan Post UMS delivery take across Pakistan?',
                a: 'UMS (Urgent Mail Service) delivers within 24 hours for major city-to-city routes (e.g. Islamabad, Lahore, Karachi), 48 hours for secondary district centers, and 3 to 5 business days for remote rural union councils.',
              },
              {
                q: 'How does Pakistan Post compare to private courier companies?',
                a: 'Pakistan Post offers significantly more economical postage rates and reaches remote rural villages through its nationwide network of over 13,000 post offices, where private couriers often do not operate. Private couriers may offer faster specialized commercial delivery in major metropolitan hubs.',
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
            { label: 'Pakistan Post Official Portal', url: 'https://pakpost.gov.pk/' },
            { label: 'Pakistan Post Electronic Postal (EP) System', url: 'https://ep.gov.pk/' },
            { label: 'Post Office Act 1898', url: 'https://pakistancode.gov.pk/' },
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
