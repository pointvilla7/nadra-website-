import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { HelpCircle, ExternalLink, Smartphone, ShieldCheck, CheckCircle2, AlertTriangle, Layers, CreditCard, QrCode, Calculator, Apple } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PTA Mobile Tax Check Online 2026: Calculator & iPhone Duty Rates | Pakistan Info Hub',
  description:
    'PTA mobile tax check online and instant calculator 2026: Calculate exact customs duty, regulatory duty, and 18% GST on iPhone 16/15/14, Samsung Galaxy S24, and Android. Compare Passport vs CNIC rates across all FBR USD slabs.',
  keywords: [
    'pta mobile tax check online',
    'iphone tax in pakistan',
    'how to check pta tax on mobile',
    'pta calculator',
    'pta mobile tax calculator 2026',
    'iphone 16 pro max pta tax pakistan',
    'fbr mobile customs duty slabs 2026',
    'pta tax on passport vs cnic',
  ],
  openGraph: {
    title: 'PTA Mobile Tax Check Online 2026: Calculator & iPhone Duty Rates',
    description:
      'Real-time calculation of PTA DIRBS mobile phone registration duty, customs taxes, and 18% GST for smartphones imported into Pakistan.',
    url: 'https://www.pakistaninfohub.com/mobile-pta/pta-mobile-tax-check-online',
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
          name: 'PTA Mobile Tax Check Online',
          item: 'https://www.pakistaninfohub.com/mobile-pta/pta-mobile-tax-check-online',
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'PTA Mobile Tax Check Online & Calculator 2026',
      description:
        'Pure client-side interactive tool for checking PTA DIRBS mobile registration tax, customs duty, regulatory duty, and sales tax in Pakistan.',
      url: 'https://www.pakistaninfohub.com/mobile-pta/pta-mobile-tax-check-online',
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
          name: 'How do I check PTA tax on mobile online in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can check PTA tax online by using our client-side PTA Mobile Tax Calculator or by sending your 15-digit IMEI to 8484 via SMS. Alternatively, log in to dirbs.pta.gov.pk with your CNIC/Passport to generate an official 17-digit PSID voucher showing the exact payable duty.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much is PTA tax on an iPhone in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PTA tax on flagship iPhones (iPhone 16 Pro Max, 15 Pro Max, 14 Pro Max) ranges between Rs. 135,000 to Rs. 145,000 on a Passport, and Rs. 160,000 to Rs. 175,000 on a CNIC. Older base models (iPhone 13, 12, 11) range between Rs. 40,000 to Rs. 95,000 depending on C&F valuation brackets.',
          },
        },
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

export default function PtaMobileTaxCheckOnlinePage() {
  const breadcrumbs = [
    { nameEn: 'Mobile & PTA Services', nameUr: 'موبائل و پی ٹی اے سروسز' },
    { nameEn: 'PTA Mobile Tax Check Online', nameUr: 'پی ٹی اے موبائل ٹیکس چیک آن لائن 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="PTA TAX CALCULATOR" labelUr="پی ٹی اے ٹیکس چیک آن لائن" variant="seal" />
            <VerifiedBadge textEn="FBR CUSTOMS & DIRBS COMPLIANT" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            PTA Mobile Tax Check Online 2026: Calculator &amp; iPhone Duty Rates
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پی ٹی اے موبائل ٹیکس چیک آن لائن، آئی فون ڈیوٹی ریٹس اور کسٹم فیس کیلکولیٹر
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Calculate your exact PTA DIRBS registration tax and customs duty in seconds.
            Check <strong>how to check pta tax on mobile</strong>, compare Passport traveler rates against CNIC resident rates,
            and view the complete <strong>iPhone tax in Pakistan</strong> breakdown across all generations.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How Much is PTA Tax on Mobile Phones and How is it Checked Online in Pakistan?"
          topicTitleUr="پاکستان میں موبائل فون پر کتنا پی ٹی اے ٹیکس ہے اور آن لائن کیسے چیک کریں؟"
          answerEn="PTA mobile tax is determined by the phone's C&F valuation in USD across 6 brackets, combining Customs Duty, Regulatory Duty, 18% Sales Tax, and Mobile Levy. Registering on a Passport is significantly cheaper than registering on a CNIC. Flagship iPhones range from Rs. 135,000 to Rs. 175,000 depending on registration type."
          answerUr="پی ٹی اے ٹیکس موبائل فون کی ڈالر قیمت (C&F ویلیو) کے مطابق 6 سلیبس میں لاگو ہوتا ہے۔ پاسپورٹ پر رجسٹریشن مقامی شناختی کارڈ سے 15 سے 30 ہزار سستی ہوتی ہے۔ فلیگ شپ آئی فون پر پاسپورٹ پر 1.35 تا 1.45 لاکھ اور شناختی کارڈ پر 1.60 تا 1.75 لاکھ روپے تک ٹیکس بنتا ہے۔"
        />

        {/* Interactive Calculator Mount */}
        <PtaMobileTaxCalculator />

        {/* Section 1: Dedicated iPhone Tax in Pakistan Breakdown */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              iPhone Tax in Pakistan (2026 Official Breakdown)
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans">
            Pre-calculated reference table showing estimated PTA duty on popular Apple iPhone models under current FBR Customs valuation rulings:
          </p>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-xs font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-[11px] font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Apple iPhone Model</th>
                  <th className="px-4 py-3 text-left">FBR USD Valuation</th>
                  <th className="px-4 py-3 text-right">Tax on Passport (PKR)</th>
                  <th className="px-4 py-3 text-right">Tax on CNIC (PKR)</th>
                  <th className="px-4 py-3 text-right">Passport Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">iPhone 16 Pro Max / 16 Pro</td>
                  <td className="px-4 py-3 font-mono text-slate-500">$1,199 / $999 USD</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">Rs. 136,000</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-amber-600 dark:text-amber-400">Rs. 162,500</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">Save ~Rs. 26,500</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">iPhone 15 Pro Max / 15 Pro</td>
                  <td className="px-4 py-3 font-mono text-slate-500">$1,099 / $899 USD</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">Rs. 131,000</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-amber-600 dark:text-amber-400">Rs. 157,500</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">Save ~Rs. 26,500</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">iPhone 14 Pro Max / 14 Pro</td>
                  <td className="px-4 py-3 font-mono text-slate-500">$899 / $799 USD</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">Rs. 120,500</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-amber-600 dark:text-amber-400">Rs. 147,000</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">Save ~Rs. 26,500</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">iPhone 14 / 13 Standard</td>
                  <td className="px-4 py-3 font-mono text-slate-500">$699 / $599 USD</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">Rs. 110,800</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-amber-600 dark:text-amber-400">Rs. 137,200</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">Save ~Rs. 26,400</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">iPhone 12 / 11 / XR</td>
                  <td className="px-4 py-3 font-mono text-slate-500">$420 / $350 USD</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">Rs. 68,000</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-amber-600 dark:text-amber-400">Rs. 89,500</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">Save ~Rs. 21,500</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>

        {/* Section 2: Complete FBR Valuation Slabs Table */}
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
                  <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">Rs. 33,000 – 45,000</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-slate-800 dark:text-slate-200">Rs. 41,000 – 55,000</td>
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

        {/* Section 3: Related Guides */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related PTA &amp; Overseas Telecom Guides on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/mobile-pta/pta-mobile-registration-guide-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Registration Guide</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                PTA Mobile Registration Guide 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Step-by-step procedure to generate PSID and register your phone.</p>
            </Link>

            <Link
              href="/mobile-pta/pta-mobile-imei-check"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Device Verification</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                PTA Mobile IMEI Check (8484) →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Verify if your device is officially approved or blocked.</p>
            </Link>

            <Link
              href="/mobile-pta/sim-information-system-guide"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">SIM Check</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                PTA SIM Information System (*8888#) →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check total registered SIMs and biometric limits on your CNIC.</p>
            </Link>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (PTA Mobile Tax &amp; iPhone Duty)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'How do I check PTA tax on mobile online in Pakistan?',
                a: 'You can check PTA tax online by using our client-side PTA Mobile Tax Calculator or by sending your 15-digit IMEI to 8484 via SMS. Alternatively, log in to dirbs.pta.gov.pk with your CNIC/Passport to generate an official 17-digit PSID voucher showing the exact payable duty.',
              },
              {
                q: 'How much is PTA tax on an iPhone in Pakistan?',
                a: 'PTA tax on flagship iPhones (iPhone 16 Pro Max, 15 Pro Max, 14 Pro Max) ranges between Rs. 135,000 to Rs. 145,000 on a Passport, and Rs. 160,000 to Rs. 175,000 on a CNIC. Older base models (iPhone 13, 12, 11) range between Rs. 40,000 to Rs. 95,000 depending on C&F valuation brackets.',
              },
              {
                q: 'Why is PTA mobile tax cheaper on a Passport compared to a CNIC?',
                a: 'The Federal Board of Revenue (FBR) provides a subsidized customs duty structure for international travelers and overseas Pakistanis bringing a personal mobile phone under passenger baggage rules. Registration on a CNIC represents local commercial/resident importation and is subject to full regulatory duty and higher withholding taxes.',
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
