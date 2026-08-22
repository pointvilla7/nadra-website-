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
  Coins,
  Scale,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  HeartHandshake,
  Building,
  Info,
  Calendar,
  Wallet
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Zakat Calculator 2026: Calculate 2.5% on Gold, Silver, Cash & Business | Pakistan Info Hub',
  description:
    'Calculate your 2.5% Zakat online for 2026: Real-time calculation on cash, bank savings, gold & silver (grams or tola), business merchandise, and investments with Silver & Gold Nisab options.',
  keywords: [
    'zakat calculator 2026',
    'zakat calculator pakistan',
    'gold nisab calculator',
    'silver nisab zakat 2026',
    'how to calculate zakat on gold',
    'zakat rate pakistan 2026',
    'zakat on cash and savings',
  ],
  openGraph: {
    title: 'Zakat Calculator 2026: Calculate 2.5% on Gold, Silver, Cash & Business',
    description:
      'Interactive Zakat calculation tool for Pakistani Muslims with dual Silver & Gold Nisab benchmarks and asset valuation guidance.',
    url: 'https://www.pakistaninfohub.com/hajj-umrah/zakat-calculator-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/hajj-umrah/zakat-calculator-2026' },
};

const ZakatCalculator = dynamic(
  () => import('@/components/ZakatCalculator').then((m) => ({ default: m.ZakatCalculator })),
  { ssr: false, loading: () => <div className="h-[520px] rounded-3xl bg-slate-100 dark:bg-slate-800 animate-pulse" /> }
);

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
          name: 'Zakat Calculator 2026',
          item: 'https://www.pakistaninfohub.com/hajj-umrah/zakat-calculator-2026',
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Pakistan Zakat Calculator 2026',
      description:
        'Interactive financial utility for calculating 2.5% Zakat on cash, gold, silver, business inventory, and investments with custom market rates and Nisab benchmarks.',
      url: 'https://www.pakistaninfohub.com/hajj-umrah/zakat-calculator-2026',
      applicationCategory: 'FinancialApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
    },
    {
      '@type': 'Article',
      headline: 'Zakat Calculator 2026: Complete Guide to Nisab, Rates and Eligible Assets',
      description:
        'A comprehensive public guide to calculating Zakat in Pakistan, evaluating Nisab thresholds for gold and silver, deductible debts, and Quranic beneficiaries.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/hajj-umrah/zakat-calculator-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Should I use the Gold Nisab or the Silver Nisab for calculating Zakat?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most contemporary scholars and Islamic finance councils recommend using the Silver Nisab (612.36 grams / approx. 52.5 tola) because its lower monetary threshold enables more individuals to fulfill this pillar of Islam and provides greater support to impoverished recipients. However, some scholars permit using the Gold Nisab (87.48 grams / approx. 7.5 tola) if wealth is solely stored in gold. Both options are supported in classical and contemporary jurisprudence.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is personal gold jewelry subject to Zakat?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'There is a well-known scholarly difference of opinion. In the Hanafi school of thought, all gold and silver jewelry is subject to Zakat regardless of whether it is worn regularly or stored. In the Shafi\'i, Maliki, and Hanbali schools, personal jewelry used within reasonable customary limits is exempt. If you adhere to the Hanafi school or wish to practice precaution, calculate Zakat on the total gold weight.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do outstanding debts affect my Zakat calculation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Immediate liabilities and short-term debts due at the time of calculation (such as unpaid bills, rent due, or personal loans due immediately) can be deducted from your total gross zakatable assets. Long-term debts (such as a 15-year housing loan) are generally deducted only to the extent of the upcoming year’s due installments.',
          },
        },
        {
          '@type': 'Question',
          name: 'When during the year should I calculate and pay Zakat?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zakat is due once every lunar year (Hawl / 354 days) from the date your net wealth first equaled or exceeded the Nisab. Many Muslims choose to calculate and disburse their Zakat during the blessed month of Ramadan to seek multiplied rewards, but the obligation is strictly tied to your personal annual Hawl cycle.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who is eligible to receive Zakat according to Islamic law?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Holy Quran specifies eight eligible categories of recipients in Surah At-Tawbah (9:60): (1) The poor (Fuqara), (2) The destitute (Masakeen), (3) Zakat administrators, (4) Those whose hearts are to be reconciled, (5) In freeing captives, (6) Debtors in genuine distress (Gharimeen), (7) In the cause of Allah (Fi Sabilillah), and (8) The stranded traveler (Ibn al-Sabil). Zakat cannot be given to direct ascendants (parents/grandparents), descendants (children/grandchildren), or spouses.',
          },
        },
      ],
    },
  ],
};

export default function ZakatCalculatorPage() {
  const breadcrumbs = [
    { nameEn: 'Hajj & Umrah Services', nameUr: 'حج و عمرہ سروسز' },
    { nameEn: 'Zakat Calculator 2026', nameUr: 'زکوٰۃ کیلکولیٹر 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="ISLAMIC CIVIC FINANCE" labelUr="اسلامی مالیاتی گائیڈ" variant="seal" />
            <VerifiedBadge textEn="SHARIAH NISAB BENCHMARK 2026" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Zakat Calculator 2026: Calculate 2.5% on Gold, Silver, Cash &amp; Business
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              آن لائن زکوٰۃ کیلکولیٹر 2026: سونے، چاندی، نقد رقم اور مالِ تجارت پر زکوٰۃ کا حساب
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Calculate your annual <strong>2.5% Zakat obligation</strong> accurately.
            Input your cash, bank balances, gold and silver holdings (grams or tola), trade merchandise, and investments
            with flexible <strong>Silver Nisab</strong> (recommended) and <strong>Gold Nisab</strong> benchmarks based on today&apos;s market rates.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is Zakat, the 2.5% Rate, and How is Nisab Evaluated?"
          topicTitleUr="زکوٰۃ کیا ہے، 2.5 فیصد شرح اور نصاب کا کیا طریقہ ہے؟"
          answerEn="Zakat is an obligatory pillar of Islam due at 2.5% (1/40th) of net qualifying wealth held for one full lunar year (Hawl). It becomes payable when net wealth meets or exceeds the Nisab threshold: either 612.36 grams of silver (approx. 52.5 tola — widely recommended) or 87.48 grams of gold (approx. 7.5 tola)."
          answerUr="زکوٰۃ اسلام کا بنیادی فرض ہے جو نصاب کے برابر یا زائد مال پر ایک قمری سال گزرنے کے بعد 2.5 فیصد (چالیسواں حصہ) ادا کی جاتی ہے۔ نصاب کی دو شرعی حدیں ہیں: 612.36 گرام چاندی (تقریباً 52.5 تولہ) یا 87.48 گرام سونا (تقریباً 7.5 تولہ)۔"
        />

        {/* Interactive Zakat Calculator Mount */}
        <ZakatCalculator />

        {/* Section 1: Detailed Assets Breakdown (Zakatable vs Exempt) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Which Assets are Zakatable vs Exempt?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            {/* Zakatable Assets */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/60 space-y-3">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Zakatable Assets (جن پر زکوٰۃ لاگو ہے)</span>
              </div>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span><strong>Cash &amp; Liquid Funds:</strong> Currency in hand, savings accounts, current accounts, mobile wallets (EasyPaisa/JazzCash), and prize bonds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span><strong>Gold &amp; Silver:</strong> Bullion bars, coins, and jewelry (evaluated at current scrap/pure metal market rate).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span><strong>Business Merchandise:</strong> Finished goods, raw materials for resale, and trading stock at current wholesale market value.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span><strong>Trade Investments &amp; Stocks:</strong> Full value of trading shares or the liquid zakatable underlying asset portion of long-term investment funds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span><strong>Good Receivables:</strong> Loans given to others that you have realistic expectation of recovering.</span>
                </li>
              </ul>
            </div>

            {/* Exempt Assets */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-doc-seal" />
                <span>Exempt Personal &amp; Fixed Assets (مستثنیٰ اثاثے)</span>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span><strong>Primary Residence:</strong> The house or apartment you live in, regardless of market value.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span><strong>Personal Transport:</strong> Cars, motorcycles, or bicycles used for personal family commuting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span><strong>Household Goods:</strong> Furniture, appliances, kitchen utensils, electronics, and personal clothing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span><strong>Tools of Profession:</strong> Machinery, medical equipment, computers, or tools used to earn a livelihood (not held for resale).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span><strong>Precious Gemstones:</strong> Diamonds, rubies, and pearls (unless held as trading inventory).</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 2: Eligible Quranic Beneficiaries */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Who is Eligible to Receive Zakat? (Surah At-Tawbah 9:60)
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            The Holy Quran explicitly defines the eight lawful categories of Zakat recipients in Surah At-Tawbah (Verse 60).
            When distributing your Zakat, prioritize genuine hardship cases, impoverished relatives (who are not direct dependents), and trusted, audited non-profit welfare organizations serving widows, orphans, and medical patients:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-sans">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-bold text-doc-ink dark:text-white block">1. The Poor (الفقراء)</span>
              <p className="text-slate-500">Individuals with little to no income or assets below the Nisab.</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-bold text-doc-ink dark:text-white block">2. The Destitute (المساكين)</span>
              <p className="text-slate-500">Those in extreme poverty unable to meet basic daily subsistence.</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-bold text-doc-ink dark:text-white block">3. Debtors in Distress (الغارمين)</span>
              <p className="text-slate-500">People burdened with genuine debt without means of repayment.</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-bold text-doc-ink dark:text-white block">4. Stranded Travelers (ابن السبيل)</span>
              <p className="text-slate-500">Travelers cut off from resources during lawful journey.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong>Important Note on Ineligible Recipients:</strong> Zakat cannot be given to direct ascendants (parents, grandparents), direct descendants (children, grandchildren), or one&apos;s spouse, as supporting them is already a personal legal/moral responsibility.
          </div>
        </section>

        {/* Section 3: Religious & Legal Disclaimer */}
        <section className="p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 space-y-2 text-xs font-sans text-slate-700 dark:text-slate-300">
          <div className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-300 text-sm">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>Important Religious &amp; Educational Disclaimer</span>
          </div>
          <p className="leading-relaxed">
            This Zakat Calculator is an <strong>educational estimation tool</strong> provided to assist Pakistani Muslims in calculating standard personal and business Zakat. It does not constitute a formal religious edict (fatwa).
            If you have complex financial holdings (such as commercial real estate developments, agricultural produce/Ushr, livestock, private equity partnerships, or intricate derivative portfolios), please consult a qualified Islamic jurisprudence scholar (Mufti) or a certified Islamic financial advisor.
          </p>
        </section>

        {/* Section 4: Related Islamic & Civic Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Islamic Services &amp; Guides on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/hajj-umrah/nusuk-app-guide-pakistani-pilgrims-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Pilgrimage Guide</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Nusuk App &amp; Umrah Visa 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Step-by-step permit booking and biometric guidelines for pilgrims.</p>
            </Link>

            <Link
              href="/hajj-umrah/hajj-policy-2026-pakistan-application-guide"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Hajj 2026</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Govt Hajj Scheme &amp; Sponsorship →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Official Ministry package costs, bank balloting, and quota rules.</p>
            </Link>

            <Link
              href="/tax/income-tax-calculator-salaried-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Tax Finance</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                FBR Income Tax Calculator 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Calculate salaried tax brackets and monthly payroll deductions.</p>
            </Link>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Zakat &amp; Nisab Rules)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Should I use the Gold Nisab or the Silver Nisab for calculating Zakat?',
                a: 'Most contemporary scholars and Islamic finance councils recommend using the Silver Nisab (612.36 grams / approx. 52.5 tola) because its lower monetary threshold enables more individuals to fulfill this pillar of Islam and provides greater support to impoverished recipients. However, some scholars permit using the Gold Nisab (87.48 grams / approx. 7.5 tola) if wealth is solely stored in gold. Both options are supported in classical and contemporary jurisprudence.',
              },
              {
                q: 'Is personal gold jewelry subject to Zakat?',
                a: 'There is a well-known scholarly difference of opinion. In the Hanafi school of thought, all gold and silver jewelry is subject to Zakat regardless of whether it is worn regularly or stored. In the Shafi\'i, Maliki, and Hanbali schools, personal jewelry used within reasonable customary limits is exempt. If you adhere to the Hanafi school or wish to practice precaution, calculate Zakat on the total gold weight.',
              },
              {
                q: 'How do outstanding debts affect my Zakat calculation?',
                a: 'Immediate liabilities and short-term debts due at the time of calculation (such as unpaid bills, rent due, or personal loans due immediately) can be deducted from your total gross zakatable assets. Long-term debts (such as a 15-year housing loan) are generally deducted only to the extent of the upcoming year’s due installments.',
              },
              {
                q: 'When during the year should I calculate and pay Zakat?',
                a: 'Zakat is due once every lunar year (Hawl / 354 days) from the date your net wealth first equaled or exceeded the Nisab. Many Muslims choose to calculate and disburse their Zakat during the blessed month of Ramadan to seek multiplied rewards, but the obligation is strictly tied to your personal annual Hawl cycle.',
              },
              {
                q: 'Who is eligible to receive Zakat according to Islamic law?',
                a: 'The Holy Quran specifies eight eligible categories of recipients in Surah At-Tawbah (9:60): (1) The poor (Fuqara), (2) The destitute (Masakeen), (3) Zakat administrators, (4) Those whose hearts are to be reconciled, (5) In freeing captives, (6) Debtors in genuine distress (Gharimeen), (7) In the cause of Allah (Fi Sabilillah), and (8) The stranded traveler (Ibn al-Sabil). Zakat cannot be given to direct ascendants (parents/grandparents), descendants (children/grandchildren), or spouses.',
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
          <p className="font-bold text-slate-700 dark:text-slate-400">Classical &amp; Statutory References Cited:</p>
          {[
            { label: 'Holy Quran (Surah At-Tawbah, 9:60)', url: 'https://quran.com/9/60' },
            { label: 'Ministry of Religious Affairs & Interfaith Harmony Pakistan', url: 'https://mora.gov.pk/' },
            { label: 'State Bank of Pakistan (SBP) Zakat Collection Notifications', url: 'https://www.sbp.org.pk/' },
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
