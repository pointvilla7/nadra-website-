import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ExternalLink, HelpCircle, ShieldCheck, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Utility Bill Checker 2026 – LESCO, K-Electric, SNGPL & SSGC Gas Bills | Pakistan Info Hub',
  description:
    'Check your LESCO electricity bill online with live duplicate bill lookup, plus official guides for K-Electric Karachi, SNGPL Sui Northern, and SSGC Sui Southern gas bills. 100% privacy safe.',
  keywords: [
    'LESCO bill check online 2026',
    'duplicate electricity bill Pakistan',
    'K-Electric bill check',
    'SNGPL gas bill online',
    'SSGC duplicate bill',
    'online bill check Pakistan',
    'PITC bill check',
  ],
  openGraph: {
    title: 'Utility Bill Checker 2026 – LESCO, K-Electric, SNGPL & SSGC',
    description:
      'Check your electricity and gas bills online. Live LESCO bill lookup by 14-digit reference number plus official K-Electric and Sui Gas portals.',
    url: 'https://pakistaninfohub.com/bills/utility-bill-checker-2026',
  },
  alternates: { canonical: 'https://pakistaninfohub.com/bills/utility-bill-checker-2026' },
};

const UtilityBillChecker = dynamic(
  () => import('@/components/UtilityBillChecker').then((m) => ({ default: m.UtilityBillChecker })),
  { ssr: false, loading: () => <div className="h-[480px] rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" /> }
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Utility Bills', item: 'https://pakistaninfohub.com/bills' },
        { '@type': 'ListItem', position: 3, name: 'Utility Bill Checker 2026', item: 'https://pakistaninfohub.com/bills/utility-bill-checker-2026' },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Utility Bill Checker 2026',
      description:
        'An interactive civic tool to check LESCO electricity bills live and navigate official billing portals for K-Electric, SNGPL, and SSGC.',
      url: 'https://pakistaninfohub.com/bills/utility-bill-checker-2026',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://pakistaninfohub.com' },
    },
    {
      '@type': 'HowTo',
      name: 'How to Check Your LESCO Electricity Bill Online 2026',
      description: 'Step-by-step instructions to check and print your duplicate LESCO electricity bill online.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Find 14-Digit Reference Number', text: 'Locate the 14-digit reference number printed on the top section of any previous paper bill.' },
        { '@type': 'HowToStep', position: 2, name: 'Enter into Bill Checker', text: 'Type your 14-digit number into the LESCO tab of our bill checker tool.' },
        { '@type': 'HowToStep', position: 3, name: 'View Bill & Due Date', text: 'Click "Check LESCO Bill Live" to view your payable amount, due date, billing month, and units consumed.' },
        { '@type': 'HowToStep', position: 4, name: 'Print or Download', text: 'Use the print button or open the full official PITC bill PDF for bank counter payments.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I check my LESCO bill online without an app?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can check your LESCO bill directly using our tool above or by visiting the official PITC portal at bill.pitc.com.pk/lescobill/. Enter your 14-digit Reference Number to view and print your duplicate bill instantly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where do I find my reference number on an electricity bill?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your 14-digit Reference Number is printed at the top-left or top-right box of your physical electricity bill. It consists of a 2-digit batch, 1-digit sub-division, and customer number (e.g. 14112345678901).',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between SNGPL and SSGC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SNGPL (Sui Northern Gas Pipelines Limited) supplies natural gas to Punjab, Khyber Pakhtunkhwa (KPK), Islamabad, and AJK. SSGC (Sui Southern Gas Company) supplies Sindh (including Karachi) and Balochistan.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I pay my bill online after checking the amount?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Once you have verified the payable amount and due date, you can pay via 1Link banking apps (HBL, Meezan, UBL, etc.), Easypaisa, JazzCash, Nayapay, or SadaPay using your 14-digit consumer reference number.',
          },
        },
      ],
    },
  ],
};

export default function UtilityBillCheckerPage() {
  const breadcrumbs = [
    { nameEn: 'Utility Bills', nameUr: 'یوٹیلیٹی بلز' },
    { nameEn: 'Utility Bill Checker 2026', nameUr: 'یوٹیلیٹی بل چیکر 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn">
        <Breadcrumbs items={breadcrumbs} />

        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="INTERACTIVE TOOL" labelUr="انٹرایکٹو ٹول" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Utility Bill Checker 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              آن لائن یوٹیلیٹی بل چیکر (بجلی و گیس)
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-sans">
            Check your LESCO electricity bill live by entering your 14-digit reference number, or get guided access to
            official duplicate bill portals for K-Electric, SNGPL Sui Northern, and SSGC Sui Southern gas.
          </p>
        </header>

        <DirectAnswerBox
          topicTitleEn="How to Check Your Electricity & Gas Bill Online"
          topicTitleUr="آن لائن بجلی اور گیس کا بل چیک کرنے کا طریقہ"
          answerEn="To check your utility bill in 2026: (1) Select your company (LESCO, K-Electric, SNGPL, or SSGC), (2) Enter your 14-digit reference number for LESCO to get live bill amount and due date instantly, (3) For KE, SNGPL, and SSGC, use the direct official portal buttons. All queries are ephemeral — no consumer data is stored."
          answerUr="یوٹیلیٹی بل چیک کرنے کے لیے: (1) اپنی کمپنی (لیسکو، کے الیکٹرک، سوئی ناردرن یا سوئی سدرن) منتخب کریں، (2) لیسکو کے لیے 14 ہندسوں کا ریفرنس نمبر درج کر کے فوری واجب الادا رقم اور آخری تاریخ دیکھیں، (3) کے الیکٹرک اور سوئی گیس کے لیے آفیشل پورٹل لنکس کا استعمال کریں۔"
        />

        <section aria-label="Utility Bill Checker Tool">
          <UtilityBillChecker />
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Breakdown of Utility Providers */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white">
            Utility Companies & Identification Reference Formats
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="w-full text-sm font-sans">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Company</th>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Identifier Format</th>
                  <th className="px-4 py-3 text-left">Coverage</th>
                  <th className="px-4 py-3 text-left">Official Portal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  { name: 'LESCO', type: 'Electricity', format: '14-Digit Reference No', region: 'Lahore, Kasur, Okara, Sheikhupura', url: 'bill.pitc.com.pk', href: 'http://bill.pitc.com.pk/lescobill/' },
                  { name: 'K-Electric', type: 'Electricity', format: '13-Digit Account No', region: 'Karachi, Dhabeji, Hub', url: 'ke.com.pk', href: 'https://www.ke.com.pk/' },
                  { name: 'SNGPL', type: 'Natural Gas', format: '11-Digit Consumer No', region: 'Punjab, KPK, Islamabad, AJK', url: 'sngpl.com.pk', href: 'https://www.sngpl.com.pk/' },
                  { name: 'SSGC', type: 'Natural Gas', format: '10-Digit Customer No', region: 'Sindh (Karachi, Hyderabad) & Balochistan', url: 'ssgc.com.pk', href: 'https://www.ssgc.com.pk/' },
                ].map((row) => (
                  <tr key={row.name} className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">{row.name}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400 text-xs">{row.type}</td>
                    <td className="px-4 py-3 font-mono font-semibold text-doc-seal dark:text-red-400 text-xs">{row.format}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400 text-xs">{row.region}</td>
                    <td className="px-4 py-3">
                      <a href={row.href} target="_blank" rel="noopener noreferrer" className="text-doc-seal hover:underline flex items-center gap-1 font-mono text-xs">
                        {row.url} <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'How do I check my LESCO bill online without an app?',
                a: 'You can check your LESCO bill using our tool above or directly at bill.pitc.com.pk/lescobill/. Simply enter your 14-digit Reference Number to view the payable amount, billing month, and due date.',
              },
              {
                q: 'Where is the 14-digit reference number located on a paper bill?',
                a: 'Look in the top-left or top-right box of your physical electricity bill. It consists of a 2-digit batch number, 1-digit sub-division code, and customer ID.',
              },
              {
                q: 'What should I do if my LESCO bill shows "Bill Not Found"?',
                a: 'Ensure you have typed all 14 digits without spaces or dashes. If you recently shifted or got a new meter connection, verify the reference number printed on your latest physical bill.',
              },
              {
                q: 'What is the helpline number for electricity and gas complaints?',
                a: 'For electricity (LESCO, IESCO, FESCO, GEPCO, MEPCO, PESCO, KE): dial 118 (toll-free 24/7). For Sui Gas (SNGPL and SSGC): dial 1199.',
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
            { label: 'PITC Electricity Bill Portal', url: 'http://bill.pitc.com.pk/lescobill/' },
            { label: 'LESCO Official Portal', url: 'http://www.lesco.gov.pk/' },
            { label: 'K-Electric Official Digital Billing', url: 'https://www.ke.com.pk/' },
            { label: 'SNGPL Sui Northern Gas Pipelines Ltd', url: 'https://www.sngpl.com.pk/' },
            { label: 'SSGC Sui Southern Gas Company', url: 'https://www.ssgc.com.pk/' },
          ].map((src) => (
            <a key={src.url} href={src.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-doc-seal">
              <ExternalLink className="w-3 h-3" />
              {src.label}: <span className="font-mono">{src.url}</span>
            </a>
          ))}
        </section>
      </div>
    </>
  );
}
