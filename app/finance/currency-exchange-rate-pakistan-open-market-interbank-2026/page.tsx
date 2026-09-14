import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, FAQAccordionVisual } from '@/components/visuals';
import {
  DollarSign,
  TrendingUp,
  ShieldCheck,
  Building2,
  ExternalLink,
  AlertTriangle,
  HelpCircle,
  Clock,
  Landmark,
  Plane,
  Scale,
  Receipt,
  FileCheck2,
  Lock,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Currency Exchange Rate Converter Pakistan 2026 – Live Interbank & Open Market Rates | Pakistan Info Hub',
  description:
    'Convert USD, EUR, GBP, SAR, AED to PKR with our live currency exchange rate converter for Pakistan. Compare SBP interbank benchmarks, open market cash counter spreads, SBP-licensed exchangers, and international travel cash limits.',
  keywords: [
    'currency exchange rate converter Pakistan',
    'usd to pkr open market today',
    'interbank rate pakistan today',
    'open market vs interbank difference',
    'currency converter pakistan pkr',
    'sar to pkr exchange rate 2026',
    'aed to pkr live rate',
    'licensed exchange companies pakistan sbp',
    'how much foreign currency can i carry from pakistan',
  ],
  openGraph: {
    title: 'Currency Exchange Rate Converter Pakistan 2026 – Live Interbank & Open Market Rates',
    description:
      'Live interactive currency converter and verified civic guide explaining Pakistan interbank vs open market exchange rates, SBP regulations, licensed exchange companies, and travel cash limits.',
    url: 'https://www.pakistaninfohub.com/finance/currency-exchange-rate-pakistan-open-market-interbank-2026',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/finance/currency-exchange-rate-pakistan-open-market-interbank-2026',
  },
};

const CurrencyConverterWidget = dynamic(
  () => import('@/components/CurrencyConverterWidget').then((m) => ({ default: m.CurrencyConverterWidget })),
  {
    ssr: false,
    loading: () => (
      <div className="my-8 h-[440px] rounded-3xl bg-slate-100 dark:bg-slate-800 animate-pulse border border-slate-200 dark:border-slate-700" />
    ),
  }
);

const breadcrumbs = [
  { nameEn: 'Banking & Financial Services', nameUr: 'بینکنگ و مالیاتی سروسز', url: '/finance' },
  { nameEn: 'Currency Converter & Exchange Rates 2026', nameUr: 'کرنسی کنورٹر و ایکسچینج ریٹ 2026' },
];

const faqs = [
  {
    questionEn: "What is the difference between open market and interbank rate in Pakistan?",
    questionUr: "پاکستان میں اوپن مارکیٹ اور انٹر بینک ریٹ میں کیا فرق ہے؟",
    answerEn:
      "The Interbank Rate is the official wholesale foreign exchange rate set between licensed commercial banks under State Bank of Pakistan (SBP) oversight; it is used for international trade settlements, letters of credit (LCs), and official wire remittances. The Open Market Rate is the retail rate offered by SBP-licensed Exchange Companies to individual citizens for physical cash currency purchases (such as international travel, overseas tuition fees, or Umrah). Open market rates include a modest vendor margin (typically 0.5% to 1.25%) to cover physical cash handling and transport.",
    answerUr:
      "انٹر بینک ریٹ وہ تھوک ریٹ ہے جو اسٹیٹ بینک کی نگرانی میں کمرشل بینکوں کے درمیان بین الاقوامی درآمدات، برآمدات اور آن لائن ترسیلات زر کے لیے لاگو ہوتا ہے۔ اوپن مارکیٹ ریٹ وہ ریٹ ہے جو لائسنس یافتہ منی ایکسچینج کمپنیاں عام شہریوں کو سفر، تعلیم یا ذاتی ضرورت کے لیے نقد غیر ملکی کرنسی فراہم کرنے پر لگاتی ہیں۔ اس میں کیش ہینڈلنگ کا معمولی منافع شامل ہوتا ہے۔",
  },
  {
    questionEn: "Is it legal to exchange foreign currency anywhere other than a bank?",
    questionUr: "کیا بینک کے علاوہ کسی اور جگہ سے غیر ملکی کرنسی تبدیل کروانا قانونی ہے؟",
    answerEn:
      "Yes, provided you deal strictly with an exchange company officially licensed by the State Bank of Pakistan (such as Dollar East, Wall Street Exchange, AA Exchange, or commercial bank exchange subsidiaries like HBL Currency Exchange or MCB Exchange). Exchanging currency with unauthorized street dealers, roadside touts, or unregistered informal brokers is strictly illegal under the Foreign Exchange Regulation Act (FERA) 1947 and exposes citizens to criminal prosecution, confiscation, and counterfeit notes.",
    answerUr:
      "جی ہاں، بشرطیکہ وہ کمپنی اسٹیٹ بینک آف پاکستان سے باقاعدہ لائسنس یافتہ ہو (جیسے ڈالر ایسٹ، وال سٹریٹ، یا بینکوں کی ایکسچینج کمپنیاں)۔ سڑک پر کھڑے غیر مجاز افراد یا بغیر لائسنس ایجنٹوں سے کرنسی بدلوانا فارن ایکسچینج ریگولیشن ایکٹ 1947 کے تحت سنگین غیر قانونی جرم ہے۔",
  },
  {
    questionEn: "How much foreign currency can I legally carry when traveling from Pakistan?",
    questionUr: "پاکستان سے بیرون ملک سفر کے دوران کتنا غیر ملکی زرمبادلہ ساتھ لے جانے کی اجازت ہے؟",
    answerEn:
      "Under State Bank of Pakistan and Pakistan Customs regulations, adult passengers (18 years and above) can carry up to USD 5,000 (or equivalent) in cash foreign currency per overseas visit, subject to an annual ceiling of USD 30,000. For minors (under 18 years), the per-visit allowance is USD 2,500 with an annual ceiling of USD 15,000. You must retain original purchase receipts from an SBP-authorized exchange company and declare amounts at airport customs via the official Pass Track declaration form.",
    answerUr:
      "اسٹیٹ بینک اور کسٹمز قوانین کے مطابق 18 سال یا زائد عمر کے بالغ مسافر ایک سفر پر زیادہ سے زیادہ 5,000 امریکی ڈالر (یا مساوی رقم) نقد لے جا سکتے ہیں (سالانہ حد 30,000 ڈالر ہے)۔ 18 سال سے کم عمر کے لیے فی دورہ حد 2,500 ڈالر ہے۔ باقاعدہ رسید پاس رکھنا اور کسٹمز کے پاس ڈکلیئر کرنا لازمی ہے۔",
  },
  {
    questionEn: "Why do exchange rates differ slightly between different exchange companies?",
    questionUr: "مختلف ایکسچینج کمپنیوں کے ریٹس میں معمولی فرق کیوں ہوتا ہے؟",
    answerEn:
      "Unlike the central interbank rate which has a published daily weighted average, retail open market cash rates operate on localized supply and demand. Exchange booths factor in their physical cash inventory, logistics costs, security transport of paper notes, and district-level demand. Consequently, retail selling rates for cash notes may vary by 20 to 50 paisas across major licensed brands.",
    answerUr:
      "اوپن مارکیٹ میں نقد کرنسی کی دستیابی، بینک برانچ کے کرائے، کیش سیکیورٹی اور مقامی طلب و رسد کی وجہ سے مختلف لائسنس یافتہ ایکسچینج کاؤنٹرز کے ریٹس میں 20 سے 50 پیسے تک کا معمولی فرق ہو سکتا ہے۔",
  },
  {
    questionEn: "Is online or mobile app-based currency exchange legal in Pakistan?",
    questionUr: "کیا پاکستان میں موبائل ایپ یا آن لائن کرنسی ایکسچینج قانونی ہے؟",
    answerEn:
      "Online foreign currency exchange is only legal when conducted through regulated digital banking channels, such as Roshan Digital Accounts (RDA), authorized commercial bank foreign currency accounts (FE-25), or SBP-licensed remittance gateways. Unregulated online forex trading apps and peer-to-peer cryptocurrency platforms operating without SBP licenses violate Pakistani foreign exchange laws and carry severe financial risk.",
    answerUr:
      "آن لائن فارن ایکسچینج صرف انہی چینلز کے ذریعے قانونی ہے جنہیں اسٹیٹ بینک نے منظوری دی ہو، جیسے روشن ڈیجیٹل اکاؤنٹ (RDA) یا بینکوں کے باضابطہ فارن کرنسی اکاؤنٹس۔ غیر ملکی آن لائن ٹریڈنگ یا غیر مجاز ایپس غیر قانونی ہیں۔",
  },
  {
    questionEn: "Where can I check today's exact official exchange rate?",
    questionUr: "آج کا درست سرکاری ایکسچینج ریٹ کہاں سے چیک کیا جا سکتا ہے؟",
    answerEn:
      "You can view real-time interbank reference benchmarks directly on this page using our live converter tool. For statutory legal settlements and official weighted-average closing rates, consult the State Bank of Pakistan's official daily bulletin published on sbp.org.pk under the 'Economic Data - Daily Weighted Average Exchange Rates' section.",
    answerUr:
      "آپ اسی صفحے پر موجود لائیو کنورٹر سے ہر گھنٹے کے ریٹس دیکھ سکتے ہیں۔ اس کے علاوہ سرکاری روزانہ کلوزنگ ریٹس کے لیے اسٹیٹ بینک آف پاکستان کی آفیشل ویب سائٹ (sbp.org.pk) پر روزانہ شام 4 بجے جاری ہونے والا بلیٹن دیکھا جا سکتا ہے۔",
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Banking & Financial Services',
          item: 'https://www.pakistaninfohub.com/finance',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Currency Exchange Rate Converter Pakistan 2026',
          item: 'https://www.pakistaninfohub.com/finance/currency-exchange-rate-pakistan-open-market-interbank-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Currency Exchange Rate Converter Pakistan 2026 – Live Interbank & Open Market Rates',
      description:
        'A comprehensive public guide and live converter for Pakistani Rupee (PKR) exchange rates, explaining the difference between SBP interbank benchmarks and open market retail cash counters.',
      author: {
        '@type': 'Organization',
        name: 'Pakistan Info Hub Editorial Desk',
        url: 'https://www.pakistaninfohub.com/editorial-team',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Pakistan Info Hub',
        url: 'https://www.pakistaninfohub.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.pakistaninfohub.com/icon.png',
        },
      },
      datePublished: '2026-09-14T09:00:00+05:00',
      dateModified: '2026-09-14T16:00:00+05:00',
      mainEntityOfPage:
        'https://www.pakistaninfohub.com/finance/currency-exchange-rate-pakistan-open-market-interbank-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.questionEn,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answerEn,
        },
      })),
    },
  ],
};

export default function CurrencyExchangeRatePage() {
  return (
    <article className="space-y-8 animate-fadeIn max-w-5xl mx-auto px-4 sm:px-6 py-4">
      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Header Section */}
      <header className="rounded-3xl glass-card border border-emerald-500/30 p-6 sm:p-10 space-y-4 bg-gradient-to-br from-[#0B1120] via-[#1B2A4A] to-[#0B1120] text-white shadow-xl relative overflow-hidden">
        <div className="flex flex-wrap items-center gap-2">
          <VerifiedBadge variant="inline" textEn="SBP REGULATORY COMPLIANT 2026" textUr="اسٹیٹ بینک ضوابط 2026" />
          <InteractiveToolBadge
            labelEn="LIVE CURRENCY CONVERTER"
            labelUr="لائیو کرنسی کنورٹر"
            variant="gold"
          />
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight leading-tight">
          Currency Exchange Rate Converter Pakistan 2026
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl font-sans">
          Convert US Dollars, Euros, British Pounds, Saudi Riyals, and UAE Dirhams into Pakistani Rupees (PKR) with real-time interbank feeds. Understand the distinction between SBP interbank wholesale rates and open-market cash exchange counters, licensed exchange companies, and statutory foreign currency travel limits.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300 font-mono">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-doc-brass" />
            <span>Updated: September 2026 Reference Baseline</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Verified Against SBP Foreign Exchange Regulations</span>
          </div>
        </div>
      </header>

      {/* Direct Answer Box (40-60 Words) */}
      <DirectAnswerBox
        topicTitleEn="Open Market vs. Interbank Rate in Pakistan"
        topicTitleUr="اوپن مارکیٹ بمقابلہ انٹر بینک کرنسی ریٹ"
        answerEn="The Interbank Rate is the official wholesale electronic benchmark used by commercial banks under State Bank of Pakistan (SBP) oversight for trade, letters of credit, and home remittances. The Open Market Rate is the retail cash rate offered by licensed exchange companies to individual travelers and citizens, which includes a modest cash handling margin (typically 0.5%–1.25%). Check live rates using our converter below."
        answerUr="انٹر بینک ریٹ اسٹیٹ بینک کی نگرانی میں بینکوں کے مابین بین الاقوامی تجارت اور ترسیلات زر کے لیے لاگو ہونے والا تھوک ریٹ ہے۔ اوپن مارکیٹ ریٹ لائسنس یافتہ منی ایکسچینج کاؤنٹرز کا ریٹ ہے جو عام شہریوں کو نقد کرنسی فروخت کرنے پر دیا جاتا ہے اور اس میں کیش ہینڈلنگ کا معمولی مارجن شامل ہوتا ہے۔"
      />

      {/* Live Interactive Converter Tool */}
      <section id="converter-tool">
        <CurrencyConverterWidget />
      </section>

      {/* Important Advisory Callout */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs sm:text-sm leading-relaxed space-y-1.5 font-sans">
        <div className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-300">
          <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
          <span>Note on Dynamic Rate Fluctuations & Retail Cash Availability</span>
        </div>
        <p>
          Foreign currency exchange rates in Pakistan fluctuate throughout the day based on global currency movements and local demand. While the interbank rate serves as the national anchor, retail counters at exchange companies set their buying and selling rates depending on physical paper note availability in your city. Never rely on unverified social media screenshots—always verify current counter quotes before finalizing transactions.
        </p>
      </div>

      {/* Section 1: Detailed Explainer - Interbank vs Open Market */}
      <section className="rounded-3xl bg-white dark:bg-doc-dark-card border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-doc-seal tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>Market Structure Demystified</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
            Understanding Open Market vs. Interbank Exchange Rates in Pakistan
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Many Pakistani citizens and overseas workers are confused when the rate quoted on the news differs from the price they receive at a local exchange counter. In Pakistan, the foreign exchange market operates under two distinct, regulated tiers:
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 dark:bg-slate-900/80 font-mono text-[11px] font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-3 sm:p-4">Feature</th>
                <th className="p-3 sm:p-4 bg-emerald-500/5 text-emerald-800 dark:text-emerald-300">
                  Interbank Market (SBP)
                </th>
                <th className="p-3 sm:p-4 bg-amber-500/5 text-amber-800 dark:text-amber-300">
                  Open Market (Exchange Counters)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              <tr>
                <td className="p-3 sm:p-4 font-bold text-doc-ink dark:text-white">Primary Purpose</td>
                <td className="p-3 sm:p-4">
                  Import/export commercial billing, national debt servicing, government settlements, and incoming home remittances through banking channels.
                </td>
                <td className="p-3 sm:p-4">
                  Retail individual transactions, foreign travel cash notes, student overseas tuition fees, and medical travel expenses.
                </td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-bold text-doc-ink dark:text-white">Participants</td>
                <td className="p-3 sm:p-4">
                  State Bank of Pakistan and Authorized Commercial Banks (e.g. HBL, Meezan, MCB, NBP, Standard Chartered).
                </td>
                <td className="p-3 sm:p-4">
                  General public, overseas tourists, and SBP-Licensed Exchange Companies (and bank-owned exchange counters).
                </td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-bold text-doc-ink dark:text-white">Medium of Exchange</td>
                <td className="p-3 sm:p-4">
                  100% digital bank ledger transfers (SWIFT, Raast, interbank electronic wire). Zero physical paper cash movement.
                </td>
                <td className="p-3 sm:p-4">
                  Physical foreign currency banknotes (paper cash) or direct account-to-counter retail transfers.
                </td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-bold text-doc-ink dark:text-white">Pricing Mechanism</td>
                <td className="p-3 sm:p-4">
                  Centralized daily weighted average determined by national interbank liquidity and SBP reference rates.
                </td>
                <td className="p-3 sm:p-4">
                  Interbank rate plus a retail spread (~0.5% to 1.25%) accounting for paper note transport, vault security, and counter operations.
                </td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-bold text-doc-ink dark:text-white">Documentation Required</td>
                <td className="p-3 sm:p-4">
                  Commercial LCs, Form-E / Form-I, NTN, verified corporate bank accounts.
                </td>
                <td className="p-3 sm:p-4">
                  Original CNIC/NICOP/Passport for transactions $500+, plus travel visa/ticket proof for transactions $1,000+.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Ad Placement */}
      <AdPlacementZone slotId="currency-exchange-mid" format="horizontal" />

      {/* Section 2: SBP Reforms & Licensed Exchange Companies */}
      <section className="rounded-3xl bg-white dark:bg-doc-dark-card border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-doc-seal tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Institutional Consumer Protection</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
            SBP Structural Reforms & Licensed Currency Exchangers in Pakistan
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Under recent State Bank of Pakistan reforms, the central bank consolidated currency dealers into a unified regulatory regime to protect consumers and eliminate black-market volatility. Former &quot;Category B&quot; exchange houses were required to merge or upgrade with a mandatory minimum paid-up capital of PKR 500 million, while leading commercial banks established dedicated exchange company subsidiaries.
          </p>
        </div>

        {/* Directory of Authorized Entities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Bank-Owned Exchange Companies */}
          <div className="p-5 rounded-2xl bg-doc-paper dark:bg-doc-dark-base border border-doc-brass/30 space-y-3">
            <div className="flex items-center gap-2 font-serif font-bold text-base text-doc-ink dark:text-white">
              <Landmark className="w-4 h-4 text-doc-seal" />
              <span>Commercial Bank Exchange Subsidiaries</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Operated with direct bank backing, offering maximum transparency, standardized receipts, and electronic anti-counterfeit screening:
            </p>
            <ul className="space-y-1.5 text-xs font-medium text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>HBL Currency Exchange Company</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>MCB Exchange Company Limited</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>UBL Currency Exchange (Pvt) Ltd</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Bank Alfalah Currency Exchange</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Meezan Exchange Company (Islamic Forex)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>National Bank of Pakistan (NBP) Forex Desks</span>
              </li>
            </ul>
          </div>

          {/* Independent Licensed Exchangers */}
          <div className="p-5 rounded-2xl bg-doc-paper dark:bg-doc-dark-base border border-doc-brass/30 space-y-3">
            <div className="flex items-center gap-2 font-serif font-bold text-base text-doc-ink dark:text-white">
              <Building2 className="w-4 h-4 text-doc-brass" />
              <span>SBP Full-Fledged Exchange Companies</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Established non-bank financial firms authorized for nationwide retail cash purchases, outward personal travel allowances, and utility remittances:
            </p>
            <ul className="space-y-1.5 text-xs font-medium text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-doc-brass" />
                <span>Dollar East Exchange Company</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-doc-brass" />
                <span>Wall Street Exchange Company</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-doc-brass" />
                <span>AA Exchange Company (Pvt) Limited</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-doc-brass" />
                <span>Paracha Exchange Company</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-doc-brass" />
                <span>Habib Qatar International Exchange</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-doc-brass" />
                <span>Ravi Exchange & Link Exchange Network</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Consumer Warning Box: Illegal Hundi & Black Market Risks */}
        <div className="p-5 rounded-2xl bg-rose-500/10 border-2 border-rose-500/30 text-rose-950 dark:text-rose-200 space-y-3">
          <div className="flex items-center gap-2 font-serif font-bold text-base text-rose-700 dark:text-rose-300">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <span>Critical Consumer Warning: Never Deal With Unlicensed Currency Dealers</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed font-sans">
            Under Section 4 and Section 23 of the <strong>Foreign Exchange Regulation Act (FERA) 1947</strong>, buying or selling foreign currency through unauthorized street vendors, WhatsApp dealers, or unregulated informal networks (commonly known as <em>Hundi</em> or <em>Hawala</em>) is a severe criminal offense.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
            <div className="p-3 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-rose-500/20">
              <strong className="block text-rose-800 dark:text-rose-300 mb-1">Confiscation & FIA Arrest</strong>
              Funds handled through illegal dealers are subject to immediate seizure by Federal Investigation Agency (FIA) teams.
            </div>
            <div className="p-3 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-rose-500/20">
              <strong className="block text-rose-800 dark:text-rose-300 mb-1">Counterfeit Currency Risks</strong>
              Street touts frequently dispense high-quality fake paper notes that will be detected and seized at international airport customs.
            </div>
            <div className="p-3 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-rose-500/20">
              <strong className="block text-rose-800 dark:text-rose-300 mb-1">Zero Legal Recourse</strong>
              Without an official machine-printed SBP invoice with your CNIC recorded, you cannot claim lost or stolen funds.
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What Moves Exchange Rates in Pakistan */}
      <section className="rounded-3xl bg-white dark:bg-doc-dark-card border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-doc-seal tracking-wider">
            <TrendingUp className="w-4 h-4" />
            <span>Economic Fundamentals Explained</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
            What Factors Move the Pakistani Rupee Exchange Rate Day to Day?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Under Pakistan’s market-based exchange rate framework, the value of the Rupee against foreign currencies is determined by real-time foreign currency inflows and outflows. Key drivers include:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 font-bold text-doc-ink dark:text-white">
              <Building2 className="w-4 h-4 text-emerald-600" />
              <span>1. Worker Remittances Inflows</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Foreign currency sent home by millions of overseas Pakistanis in Saudi Arabia, UAE, UK, and North America via regular banking corridors and{' '}
              <Link
                href="/finance/roshan-digital-account-2026-eligibility-apply"
                className="text-doc-seal underline font-semibold hover:text-doc-ink transition"
              >
                Roshan Digital Accounts (RDA)
              </Link>{' '}
              creates vital foreign currency supply that stabilizes the Rupee.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 font-bold text-doc-ink dark:text-white">
              <Receipt className="w-4 h-4 text-doc-seal" />
              <span>2. Import Demand (Energy & Machinery)</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Pakistan is a net energy importer. When international crude oil, RLNG, and edible oil prices rise, Pakistani commercial banks must purchase large volumes of USD to settle import letters of credit, placing downward pressure on the PKR.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 font-bold text-doc-ink dark:text-white">
              <Landmark className="w-4 h-4 text-doc-brass" />
              <span>3. SBP Monetary Policy & Interest Rates</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              The State Bank of Pakistan’s Monetary Policy Committee sets the benchmark policy rate. Higher interest rates encourage domestic Rupee deposits and discourage speculative dollar accumulation, reinforcing currency stability.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 font-bold text-doc-ink dark:text-white">
              <Scale className="w-4 h-4 text-blue-600" />
              <span>4. External Debt Servicing & Multilateral Inflows</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Timely debt repayments to multilateral lenders (IMF, World Bank, Asian Development Bank) require substantial dollar outflows, while loan tranches and bilateral deposits bolster central bank reserves.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Cash Travel Limits (Customs & SBP Rules) */}
      <section className="rounded-3xl bg-white dark:bg-doc-dark-card border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-doc-seal tracking-wider">
            <Plane className="w-4 h-4 text-doc-brass" />
            <span>International Traveler Guide</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
            State Bank & Pakistan Customs Cash Carrying Limits for Travel
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            If you are traveling abroad for tourism, employment, Hajj/Umrah, or higher education, strict statutory limits govern the amount of physical paper cash you can carry through Pakistani international airports:
          </p>
        </div>

        {/* Limits Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase">
                Adult Passenger (18+ Years)
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-mono text-[10px] font-extrabold">
                MAX LIMIT
              </span>
            </div>
            <div className="text-2xl font-serif font-extrabold text-emerald-900 dark:text-emerald-100">
              USD 5,000 <span className="text-sm font-sans font-normal text-slate-600 dark:text-slate-300">/ visit</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Subject to an annual cumulative ceiling of <strong>USD 30,000</strong> (or equivalent in other foreign currencies like SAR, AED, EUR, GBP).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/30 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-blue-800 dark:text-blue-300 uppercase">
                Minor Passenger (Under 18 Years)
              </span>
              <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-[10px] font-extrabold">
                MINORS
              </span>
            </div>
            <div className="text-2xl font-serif font-extrabold text-blue-900 dark:text-blue-100">
              USD 2,500 <span className="text-sm font-sans font-normal text-slate-600 dark:text-slate-300">/ visit</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Subject to an annual cumulative ceiling of <strong>USD 15,000</strong> across all overseas journeys.
            </p>
          </div>
        </div>

        {/* Rules Checklist */}
        <div className="p-5 rounded-2xl bg-doc-paper dark:bg-doc-dark-base border border-doc-brass/30 space-y-3 text-xs sm:text-sm">
          <h3 className="font-serif font-bold text-doc-ink dark:text-white text-base">
            Mandatory Travel Compliance Checklist Before Departure:
          </h3>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300 font-sans">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Original Purchase Receipts:</strong> Always retain the machine-printed purchase receipt from an SBP-authorized exchange company or commercial bank showing your name and CNIC/Passport number.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Customs Declaration Form:</strong> If carrying currency approaching legal thresholds, file a declaration with Pakistan Customs either at airport declaration desks or digitally through the official <strong>Pass Track</strong> portal.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Pakistani Rupee (PKR) Export Prohibition:</strong> Exporting physical Pakistani Rupee cash notes exceeding <strong>PKR 10,000</strong> (or PKR 3,000 to India) is strictly banned by customs law.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 5: Step-by-Step Currency Exchange Procedure */}
      <section className="space-y-4">
        <ProcessStepsDiagram
          titleEn="How to Legally Purchase Foreign Currency in Pakistan (4 Steps)"
          titleUr="پاکستان میں غیر ملکی کرنسی قانونی طور پر خریدنے کا طریقہ کار"
          steps={[
            {
              number: 1,
              titleEn: 'Check Live Interbank Reference Rates',
              titleUr: 'لائیو انٹر بینک ریٹ چیک کریں',
              descEn: 'Use our online converter above to calculate current mid-market rates and estimate the retail cash counter margin.',
              descUr: 'آن لائن کنورٹر سے موجودہ مارکیٹ ریٹ اور اوپن مارکیٹ کاؤنٹر مارجن کا جائزہ لیں۔',
            },
            {
              number: 2,
              titleEn: 'Locate an SBP-Licensed Exchange Company',
              titleUr: 'لائسنس یافتہ ایکسچینج کمپنی کا انتخاب',
              descEn: 'Visit a licensed exchange booth (Dollar East, Wall Street, AA Exchange) or commercial bank forex desk (HBL, MCB, Meezan).',
              descUr: 'اسٹیٹ بینک سے منظور شدہ مجاز منی ایکسچینج کمپنی یا بینک کاؤنٹر پر تشریف لے جائیں۔',
            },
            {
              number: 3,
              titleEn: 'Present Original Identity & Travel Proof',
              titleUr: 'اصل شناختی کارڈ اور سفری دستاویزات',
              descEn: 'Provide original CNIC/NICOP (required for all transactions $500+) and confirmed air ticket/visa (for purchases $1,000+).',
              descUr: 'اصل شناختی کارڈ اور ایک ہزار ڈالر سے زائد پر کنفرم ایئر ٹکٹ و ویزا فراہم کریں۔',
            },
            {
              number: 4,
              titleEn: 'Collect Official Receipt & Verify Notes',
              titleUr: 'باقاعدہ پرنٹ شدہ رسید اور کیش تصدیق',
              descEn: 'Obtain an SBP machine-generated invoice with transaction details and verify note security threads before leaving the counter.',
              descUr: 'مشین سے پرنٹ شدہ باقاعدہ رسید وصول کریں اور کیش کے سیکیورٹی فیچرز چیک کریں۔',
            },
          ]}
        />
      </section>

      {/* Cross-Linking Section */}
      <section className="rounded-3xl bg-gradient-to-br from-[#0B1120] to-[#1B2A4A] text-white p-6 sm:p-8 space-y-4 shadow-md">
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">
            EXPLORE RELATED CIVIC BANKING GUIDES
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-white">
            Helpful Financial Tools & Verification Services
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            Ensure smooth international remittances and verify banking data with our verified civic directory:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <Link
            href="/finance/pakistan-iban-number-check-validator-2026"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-doc-brass transition flex flex-col justify-between group"
          >
            <div>
              <div className="text-xs font-mono font-bold text-doc-brass uppercase mb-1">
                Remittance Tool
              </div>
              <h4 className="font-serif font-bold text-sm text-white group-hover:text-doc-brass transition">
                Pakistan IBAN Number Check & Validator
              </h4>
              <p className="text-[11px] text-slate-300 mt-1">
                Validate 24-character ISO 13616 check-digits for overseas wire transfers.
              </p>
            </div>
            <div className="mt-3 flex items-center gap-1 text-xs font-bold text-emerald-400">
              <span>Open Tool</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/finance/roshan-digital-account-2026-eligibility-apply"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-doc-brass transition flex flex-col justify-between group"
          >
            <div>
              <div className="text-xs font-mono font-bold text-doc-brass uppercase mb-1">
                Overseas Pakistanis
              </div>
              <h4 className="font-serif font-bold text-sm text-white group-hover:text-doc-brass transition">
                Roshan Digital Account (RDA) 2026
              </h4>
              <p className="text-[11px] text-slate-300 mt-1">
                Digital foreign currency account opening for NRPs, Naya Pakistan Certificates, and repatriation rules.
              </p>
            </div>
            <div className="mt-3 flex items-center gap-1 text-xs font-bold text-emerald-400">
              <span>View Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/finance/how-to-open-bank-account-online-pakistan-2026"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-doc-brass transition flex flex-col justify-between group"
          >
            <div>
              <div className="text-xs font-mono font-bold text-doc-brass uppercase mb-1">
                Digital Banking
              </div>
              <h4 className="font-serif font-bold text-sm text-white group-hover:text-doc-brass transition">
                Open Bank Account Online in Pakistan
              </h4>
              <p className="text-[11px] text-slate-300 mt-1">
                Asaan Digital Accounts, Biometric Video KYC, and simplified zero-balance accounts.
              </p>
            </div>
            <div className="mt-3 flex items-center gap-1 text-xs font-bold text-emerald-400">
              <span>View Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </section>

      {/* Section 6: Interactive FAQs Visual */}
      <section className="space-y-4">
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions: Currency Exchange & Forex Rates in Pakistan"
          titleUr="اکثر پوچھے جانے والے سوالات: کرنسی ایکسچینج اور فارن ریٹس"
          items={faqs}
        />
      </section>

      {/* Institutional Disclaimer */}
      <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
        <p>
          <strong>Public Information Disclaimer:</strong> Pakistan Info Hub is an independent civic information platform and does not offer foreign currency trading, currency broking, investment advisory, or financial services. Exchange rates displayed are provided for informational and educational purposes based on public market feeds. For legal contracts, business transactions, and official valuations, always verify exact binding rates directly with your authorized commercial bank or an SBP-licensed exchange company.
        </p>
      </div>
    </article>
  );
}
