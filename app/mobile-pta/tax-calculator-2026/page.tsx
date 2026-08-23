import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { HelpCircle, ExternalLink, Smartphone, ShieldCheck, CheckCircle2, AlertTriangle, Layers, CreditCard, QrCode } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PTA Mobile Tax Calculator 2026: Passport vs CNIC Duty Rates | Pakistan Info Hub',
  description:
    'Calculate exact PTA mobile phone registration tax and customs duty in Pakistan for 2026. Compare Passport vs CNIC registration rates for iPhone 16/15/14, Samsung Galaxy S24, and Android devices across all FBR C&F USD brackets. Instant client-side calculator.',
  keywords: [
    'PTA mobile tax calculator 2026 Pakistan',
    'PTA tax on iPhone 16 Pro Max 15 Pro',
    'PTA mobile registration tax on passport vs CNIC',
    'FBR mobile phone customs duty slabs 2026',
    'how to pay PTA tax PSID online 1Link',
    'DIRBS mobile phone tax check online',
    'Samsung S24 Ultra PTA tax Pakistan',
  ],
  openGraph: {
    title: 'PTA Mobile Tax Calculator 2026: Passport vs CNIC Duty Rates',
    description:
      'Real-time calculation of PTA DIRBS mobile phone registration duty, customs taxes, and 18% GST for smartphones imported into Pakistan.',
    url: 'https://www.pakistaninfohub.com/mobile-pta/tax-calculator-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/mobile-pta/pta-mobile-tax-check-online' },
};

const PtaMobileTaxCalculator = dynamic(
  () => import('@/components/PtaMobileTaxCalculator').then((m) => ({ default: m.PtaMobileTaxCalculator })),
  { ssr: false, loading: () => <div className="h-[520px] rounded-3xl bg-slate-100 dark:bg-slate-800 animate-pulse" /> }
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Mobile & PTA Services', item: 'https://www.pakistaninfohub.com/mobile-pta' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'PTA Mobile Tax Calculator 2026',
          item: 'https://www.pakistaninfohub.com/mobile-pta/tax-calculator-2026',
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'PTA Mobile Phone Registration Tax Calculator 2026',
      description:
        'Client-side utility for estimating PTA DIRBS registration tax, customs duty, regulatory duty, and sales tax for mobile devices in Pakistan.',
      url: 'https://www.pakistaninfohub.com/mobile-pta/tax-calculator-2026',
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
          name: 'Why is PTA mobile tax cheaper on a Passport compared to a CNIC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Federal Board of Revenue (FBR) provides a subsidized customs duty structure for international travelers and overseas Pakistanis bringing a personal mobile phone under passenger baggage rules. Registration on a CNIC represents local commercial/resident importation and is subject to full regulatory duty and higher withholding taxes.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long can I use an unregistered phone in Pakistan before it gets blocked?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An imported mobile phone can be used with a local Pakistani SIM card for up to 60 days without paying PTA tax. After 60 days from the date of first SIM insertion, PTA DIRBS will automatically block all local cellular network connectivity until the tax is paid.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Overseas Pakistanis use their phone tax-free during temporary visits?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Overseas Pakistanis and foreign tourists can register their mobile device for up to 120 days tax-free per visit through PTA’s Temporary Mobile Registration System (TTRS) at dirbs.pta.gov.pk/ttrs by providing their passport, arrival date, and local SIM number.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I pay the PTA tax after generating the PSID code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Once you generate your 17-digit PSID on the PTA DIRBS portal (or via *8484#), you can pay the tax within 30 days via any mobile banking app (under 1Link / FBR / GOP Tax Payments), ATM, JazzCash, Easypaisa, or in person at any commercial bank branch.',
          },
        },
      ],
    },
  ],
};

export default function PtaMobileTaxCalculatorPage() {
  const breadcrumbs = [
    { nameEn: 'Mobile & PTA Services', nameUr: 'موبائل و پی ٹی اے سروسز' },
    { nameEn: 'PTA Mobile Tax Calculator', nameUr: 'پی ٹی اے موبائل ٹیکس کیلکولیٹر 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="PTA DIRBS TAX ESTIMATOR" labelUr="پی ٹی اے ٹیکس ٹول" variant="seal" />
            <VerifiedBadge textEn="FBR CUSTOMS & DIRBS COMPLIANT" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            PTA Mobile Tax Calculator 2026: Passport vs CNIC Duty Rates
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پی ٹی اے موبائل فون رجسٹریشن ٹیکس، کسٹم ڈیوٹی اور فیس شیڈول 2026
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Calculate the exact PTA DIRBS registration tax for imported smartphones (iPhones, Samsung, Google Pixel, Android)
            under Pakistan&apos;s latest FBR Customs valuation rulings. Compare passenger baggage Passport rates against local CNIC rates.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How is PTA Mobile Phone Registration Tax Calculated in Pakistan?"
          topicTitleUr="پاکستان میں موبائل فون پر پی ٹی اے ٹیکس کا حساب کیسے ہوتا ہے؟"
          answerEn="PTA mobile tax is determined by the phone's C&F valuation in USD across 6 brackets, combining Customs Duty, Regulatory Duty, 18% Sales Tax, and Mobile Levy. Registering on a Passport (for international travelers) is significantly cheaper than registering on a local resident CNIC. Phones can be used tax-free for 60 days before blocking."
          answerUr="پی ٹی اے ٹیکس موبائل فون کی ڈالر قیمت (C&F ویلیو) کے مطابق 6 سلیبس میں لاگو ہوتا ہے۔ پاسپورٹ پر رجسٹریشن (سفری رعایت) کی فیس مقامی شناختی کارڈ کی نسبت نمایاں طور پر کم ہوتی ہے۔ غیر رجسٹرڈ فون پاکستان میں سم ڈالنے کے بعد 60 دن تک بغیر ٹیکس چل سکتا ہے۔"
        />

        {/* Interactive Calculator Mount */}
        <PtaMobileTaxCalculator />

        {/* Section 1: Official Slabs Reference Table */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Official FBR Customs Mobile Phone Valuation Slabs (2026)
            </h2>
          </div>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-xs font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-[11px] font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">C&amp;F USD Value Bracket</th>
                  <th className="px-4 py-3 text-left">Device Category</th>
                  <th className="px-4 py-3 text-right">Passport Rate (Approx PKR)</th>
                  <th className="px-4 py-3 text-right">CNIC Rate (Approx PKR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 font-mono font-bold text-doc-seal">Up to $30</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Basic 2G/3G Feature Phone</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">Rs. 530</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-slate-800 dark:text-slate-200">Rs. 650</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 font-mono font-bold text-doc-seal">$30 – $100</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Entry 4G Smartphone</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">Rs. 4,900</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-slate-800 dark:text-slate-200">Rs. 6,323</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 font-mono font-bold text-doc-seal">$100 – $200</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Budget Smartphone (3GB/4GB RAM)</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">Rs. 17,580</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-slate-800 dark:text-slate-200">Rs. 19,561</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 font-mono font-bold text-doc-seal">$200 – $350</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Mid-Range (Redmi Note, Galaxy A-series)</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">Rs. 35,000 – 45,000</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-slate-800 dark:text-slate-200">Rs. 45,000 – 55,000</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 font-mono font-bold text-doc-seal">$350 – $500</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Upper Mid-Range &amp; Older Flagships</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">Rs. 65,000 – 75,000</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-slate-800 dark:text-slate-200">Rs. 85,000 – 95,000</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 font-mono font-bold text-doc-seal">Above $500</td>
                  <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Flagships (iPhone 15/16 Pro Max, S24 Ultra)</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">Rs. 135,000 – 145,000</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-amber-600 dark:text-amber-400">Rs. 160,000 – 175,000</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 2: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related PTA &amp; Overseas Telecom Guides on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/mobile-pta/imei-check-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Device Verification</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                PTA DIRBS IMEI Status Check (8484) →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Verify if your phone is PTA compliant or blocked.</p>
            </Link>

            <Link
              href="/mobile-pta/sim-information-system-guide"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">SIM Verification</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                PTA SIM Information System (*8888#) →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check total SIMs registered against your CNIC.</p>
            </Link>

            <Link
              href="/overseas/nicop-mandatory-entry-rules-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Overseas Identity</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Overseas Pakistani Travel Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">120-day tax-free temporary mobile registration rules.</p>
            </Link>
          </div>
        </section>

        {/* Section 3: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (PTA Mobile Registration Tax)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Why is PTA mobile tax cheaper on a Passport compared to a CNIC?',
                a: 'The Federal Board of Revenue (FBR) provides a subsidized customs duty structure for international travelers and overseas Pakistanis bringing a personal mobile phone under passenger baggage rules. Registration on a CNIC represents local commercial/resident importation and is subject to full regulatory duty and higher withholding taxes.',
              },
              {
                q: 'How long can I use an unregistered phone in Pakistan before it gets blocked?',
                a: 'An imported mobile phone can be used with a local Pakistani SIM card for up to 60 days without paying PTA tax. After 60 days from the date of first SIM insertion, PTA DIRBS will automatically block all local cellular network connectivity until the tax is paid.',
              },
              {
                q: 'Can Overseas Pakistanis use their phone tax-free during temporary visits?',
                a: 'Yes. Overseas Pakistanis and foreign tourists can register their mobile device for up to 120 days tax-free per visit through PTA’s Temporary Mobile Registration System (TTRS) at dirbs.pta.gov.pk/ttrs by providing their passport, arrival date, and local SIM number.',
              },
              {
                q: 'How do I pay the PTA tax after generating the PSID code?',
                a: 'Once you generate your 17-digit PSID on the PTA DIRBS portal (or via *8484#), you can pay the tax within 30 days via any mobile banking app (under 1Link / FBR / GOP Tax Payments), ATM, JazzCash, Easypaisa, or in person at any commercial bank branch.',
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
            { label: 'PTA Device Identification, Registration and Blocking System (DIRBS)', url: 'https://dirbs.pta.gov.pk/' },
            { label: 'Federal Board of Revenue (FBR) Mobile Device Valuation Rulings', url: 'https://fbr.gov.pk/' },
            { label: 'Pakistan Telecommunication Authority (PTA) Official Portal', url: 'https://pta.gov.pk/' },
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
