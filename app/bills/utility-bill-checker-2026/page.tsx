import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ExternalLink, HelpCircle, ShieldCheck, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Official Utility Bill Portal Access 2026 – LESCO, K-Electric, SNGPL & SSGC Gas Bills | Pakistan Info Hub',
  description:
    'Format validator and guided one-click access to official duplicate bill portals for LESCO, IESCO, FESCO, MEPCO, K-Electric Karachi, SNGPL Sui Northern, and SSGC gas bills. 100% privacy safe.',
  keywords: [
    'official bill portal Pakistan',
    'LESCO bill check 2026',
    'duplicate electricity bill Pakistan',
    'K-Electric bill portal',
    'SNGPL gas bill duplicate',
    'SSGC duplicate bill',
    'online bill reference number validator',
    'PITC bill portal',
  ],
  openGraph: {
    title: 'Official Utility Bill Portal Access 2026 – LESCO, K-Electric, SNGPL & SSGC',
    description:
      'Validate your reference number and get guided direct access to official duplicate bill portals for electricity, gas, and water utilities across Pakistan.',
    url: 'https://www.pakistaninfohub.com/bills/utility-bill-checker-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/bills/utility-bill-checker-2026' },
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
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Utility Bills', item: 'https://www.pakistaninfohub.com/bills' },
        { '@type': 'ListItem', position: 3, name: 'Utility Bill Portal Access 2026', item: 'https://www.pakistaninfohub.com/bills/utility-bill-checker-2026' },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Utility Bill Portal Access & Format Validator 2026',
      description:
        'An interactive civic navigation tool to validate utility reference numbers and access official billing portals for LESCO, IESCO, FESCO, MEPCO, K-Electric, SNGPL, and SSGC.',
      url: 'https://www.pakistaninfohub.com/bills/utility-bill-checker-2026',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
    },
    {
      '@type': 'HowTo',
      name: 'How to Check and Print Your Duplicate Utility Bill Online (2026)',
      description: 'Step-by-step instructions to validate your reference number and open the official provider bill portal.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Find Reference / Account Number', text: 'Locate the 14-digit reference number (or 13-digit for K-Electric, 11-digit for SNGPL, 10-digit for SSGC) printed on your physical bill.' },
        { '@type': 'HowToStep', position: 2, name: 'Validate Format', text: 'Enter your number into our validator to confirm the digit count and subdivision prefix match official standards.' },
        { '@type': 'HowToStep', position: 3, name: 'Copy Number', text: 'Click "Copy Number" to copy your clean reference digits to your clipboard.' },
        { '@type': 'HowToStep', position: 4, name: 'Open Official Portal', text: 'Click "Open Official Bill Portal" to navigate directly to the specific query portal and paste your number to download your bill PDF.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I check my electricity bill online on the official portal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Select your electricity distribution company (e.g. LESCO, IESCO, FESCO, MEPCO, K-Electric), validate your 14-digit reference number using our tool, copy it, and click "Open Official Bill Portal". Paste your number on the official PITC or K-Electric page to view and print your duplicate bill.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where do I find my reference number on a physical paper bill?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your 14-digit Reference Number is printed at the top-left or top-right box of your physical electricity bill. It consists of a 2-digit batch, 1-digit sub-division, and customer number (e.g. 14 11234 5678901).',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between SNGPL and SSGC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SNGPL (Sui Northern Gas Pipelines Limited) supplies natural gas to Punjab, Khyber Pakhtunkhwa (KPK), Islamabad, and AJK with 11-digit Consumer Numbers. SSGC (Sui Southern Gas Company) supplies Sindh (including Karachi) and Balochistan with 10-digit Customer Numbers.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I pay my bill online after retrieving it from the official portal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Once you have verified the payable amount and due date on the official portal, you can pay via 1Link banking apps (HBL, Meezan, UBL, etc.), Easypaisa, JazzCash, Nayapay, or SadaPay using your consumer reference number.',
          },
        },
      ],
    },
  ],
};

export default function UtilityBillCheckerPage() {
  const breadcrumbs = [
    { nameEn: 'Utility Bills', nameUr: 'یوٹیلیٹی بلز' },
    { nameEn: 'Utility Bill Portal Access 2026', nameUr: 'یوٹیلیٹی بل پورٹل 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn">
        <Breadcrumbs items={breadcrumbs} />

        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="INTERACTIVE NAVIGATOR" labelUr="انٹرایکٹو رہنما" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Official Utility Bill Portal Access 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              آفیشل یوٹیلیٹی بل پورٹل رہنمائی (بجلی، گیس و واسا)
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-sans">
            Validate your consumer reference number format client-side, copy it to your clipboard with one click, and
            access specific official duplicate bill portals for LESCO, IESCO, FESCO, MEPCO, K-Electric, SNGPL, and SSGC.
          </p>
        </header>

        <DirectAnswerBox
          topicTitleEn="How to Access Your Official Electricity & Gas Bill Online"
          topicTitleUr="آن لائن آفیشل بجلی اور گیس کا بل چیک کرنے کا طریقہ"
          answerEn="To check your duplicate bill: (1) Select your utility company (LESCO, IESCO, FESCO, MEPCO, KE, SNGPL, SSGC, or WASA), (2) Enter and validate your reference number format, (3) Click 'Copy Number' to copy your clean digits, and (4) Click 'Open Official Portal' to navigate directly to the specific provider billing page and view or download your official PDF bill. 100% private — no consumer data is stored."
          answerUr="آفیشل ڈپلیکیٹ بل حاصل کرنے کے لیے: (1) اپنی یوٹیلیٹی کمپنی منتخب کریں، (2) اپنا ریفرنس نمبر درج کر کے فارمیٹ چیک کریں، (3) کاپی بٹن دبا کر نمبر کلپ بورڈ میں محفوظ کریں، (4) آفیشل پورٹل بٹن پر کلک کر کے براہ راست سرکاری پورٹل پر نمبر پیسٹ کریں اور بل ڈاؤن لوڈ کریں۔ کوئی ڈیٹا محفوظ نہیں کیا جاتا۔"
        />

        <section aria-label="Utility Bill Checker Tool">
          <UtilityBillChecker />
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Breakdown of Utility Providers */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white">
            Utility Companies & Reference Number Formats
          </h2>
          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
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
                  { name: 'LESCO', type: 'Electricity', format: '14-Digit Reference No', region: 'Lahore, Kasur, Okara, Sheikhupura, Nankana', url: 'bill.pitc.com.pk/lescobill', href: 'http://bill.pitc.com.pk/lescobill/' },
                  { name: 'IESCO', type: 'Electricity', format: '14-Digit Reference No', region: 'Islamabad, Rawalpindi, Attock, Jhelum, Chakwal', url: 'bill.pitc.com.pk/iescobill', href: 'http://bill.pitc.com.pk/iescobill/' },
                  { name: 'FESCO', type: 'Electricity', format: '14-Digit Reference No', region: 'Faisalabad, Sargodha, Jhang, T.T. Singh, Chiniot', url: 'bill.pitc.com.pk/fescobill', href: 'http://bill.pitc.com.pk/fescobill/' },
                  { name: 'MEPCO', type: 'Electricity', format: '14-Digit Reference No', region: 'Multan, Sahiwal, Bahawalpur, D.G. Khan, R.Y. Khan', url: 'bill.pitc.com.pk/mepcobill', href: 'http://bill.pitc.com.pk/mepcobill/' },
                  { name: 'GEPCO', type: 'Electricity', format: '14-Digit Reference No', region: 'Gujranwala, Gujrat, Sialkot, Hafizabad, Narowal', url: 'bill.pitc.com.pk/gepcobill', href: 'http://bill.pitc.com.pk/gepcobill/' },
                  { name: 'HESCO', type: 'Electricity', format: '14-Digit Reference No', region: 'Hyderabad, Mirpurkhas, Jamshoro, Thatta, Badin', url: 'bill.pitc.com.pk/hescobill', href: 'http://bill.pitc.com.pk/hescobill/' },
                  { name: 'SEPCO', type: 'Electricity', format: '14-Digit Reference No', region: 'Sukkur, Larkana, Shikarpur, Ghotki, Khairpur', url: 'bill.pitc.com.pk/sepcobill', href: 'http://bill.pitc.com.pk/sepcobill/' },
                  { name: 'PESCO', type: 'Electricity', format: '14-Digit Reference No', region: 'Peshawar, Mardan, Swat, Swabi, Kohat, Bannu, D.I. Khan', url: 'bill.pitc.com.pk/pescobill', href: 'http://bill.pitc.com.pk/pescobill/' },
                  { name: 'QESCO', type: 'Electricity', format: '14-Digit Reference No', region: 'All Balochistan (Quetta, Gwadar, Khuzdar, Chaman, Sibi)', url: 'bill.pitc.com.pk/qescobill', href: 'http://bill.pitc.com.pk/qescobill/' },
                  { name: 'TESCO', type: 'Electricity', format: '14-Digit Reference No', region: 'Former FATA (Khyber, Kurram, Bajaur, Waziristan)', url: 'bill.pitc.com.pk/tescobill', href: 'http://bill.pitc.com.pk/tescobill/' },
                  { name: 'K-Electric', type: 'Electricity', format: '13-Digit Account No', region: 'Karachi, Dhabeji, Gharo, Hub (Balochistan)', url: 'ke.com.pk/bills', href: 'https://www.ke.com.pk/customer-services/billls-and-e-payments/' },
                  { name: 'AJK Electric', type: 'Electricity', format: '14-Digit Account No', region: 'Azad Kashmir (Muzaffarabad, Mirpur, Kotli, Rawalakot)', url: 'ajkelectricity.gov.pk', href: 'https://www.ajkelectricity.gov.pk/' },
                  { name: 'SNGPL', type: 'Natural Gas', format: '11-Digit Consumer No', region: 'Punjab, Khyber Pakhtunkhwa, Islamabad & AJK', url: 'sngpl.com.pk/web/bill', href: 'https://www.sngpl.com.pk/web/bill' },
                  { name: 'SSGC', type: 'Natural Gas', format: '10-Digit Customer No', region: 'Sindh (Karachi, Hyderabad, Sukkur) & Balochistan', url: 'viewbill.ssgc.com.pk', href: 'https://viewbill.ssgc.com.pk/' },
                  { name: 'WASA Lahore', type: 'Water & Sewerage', format: '8-Digit Account No', region: 'Lahore Metropolitan Area', url: 'wasa.punjab.gov.pk', href: 'https://duplicatebill.wasa.punjab.gov.pk/' },
                  { name: 'WASA Faisalabad', type: 'Water & Sewerage', format: '12-Digit Consumer ID', region: 'Faisalabad City & Suburbs', url: 'faisalabadwasa.gop.pk', href: 'http://faisalabadwasa.gop.pk/duplicatebill.aspx' },
                  { name: 'WASA Rawalpindi', type: 'Water & Sewerage', format: '10-Digit Consumer No', region: 'Rawalpindi Municipal Area', url: 'wasa.rawalpindi.gop.pk', href: 'https://wasa.rawalpindi.gop.pk/' },
                  { name: 'WASA Multan', type: 'Water & Sewerage', format: '8-Digit Consumer No', region: 'Multan Metropolitan Area', url: 'wasamultan.gop.pk', href: 'https://wasamultan.gop.pk/duplicatebill' },
                  { name: 'WASA Gujranwala', type: 'Water & Sewerage', format: '8-Digit Consumer ID', region: 'Gujranwala City', url: 'wasag.gop.pk', href: 'https://wasag.gop.pk/duplicate-bill/' },
                  { name: 'WASA Sahiwal', type: 'Water & Sewerage', format: '8-Digit Account No', region: 'Sahiwal City Area', url: 'wasasahiwal.gop.pk', href: 'https://wasasahiwal.gop.pk/' },
                  { name: 'KWSC Karachi', type: 'Water & Sewerage', format: '10-Digit Consumer No', region: 'Karachi Division (All 7 Districts)', url: 'kwsc.gos.pk', href: 'https://www.kwsc.gos.pk/duplicate-bill/' },
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
                q: 'Why does Pakistan Info Hub direct me to the official provider portal?',
                a: 'To guarantee 100% accuracy, authentic security, and official PDF downloads with barcodes suitable for bank counters. We validate your reference format locally so you never waste time entering invalid numbers on government portals.',
              },
              {
                q: 'Where is the 14-digit reference number located on a paper bill?',
                a: 'Look in the top-left or top-right box of your physical electricity bill. It consists of a 2-digit batch number, 1-digit sub-division code, and customer ID (e.g. 14 11234 5678901).',
              },
              {
                q: 'What should I do if the official portal shows "Bill Not Found"?',
                a: 'Ensure you have typed all digits without spaces or dashes. If you recently moved or got a new meter connection, verify the reference number printed on your latest physical bill receipt.',
              },
              {
                q: 'What is the helpline number for electricity and gas complaints?',
                a: 'For electricity (LESCO, IESCO, FESCO, GEPCO, MEPCO, PESCO, KE): dial 118 (toll-free 24/7). For Sui Gas (SNGPL and SSGC): dial 1199. For WASA water services: dial 1334.',
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
            { label: 'K-Electric Official Digital Billing', url: 'https://www.ke.com.pk/customer-services/billls-and-e-payments/' },
            { label: 'SNGPL Sui Northern Gas Pipelines Ltd', url: 'https://www.sngpl.com.pk/web/bill' },
            { label: 'SSGC Sui Southern Gas Company', url: 'https://viewbill.ssgc.com.pk/' },
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
