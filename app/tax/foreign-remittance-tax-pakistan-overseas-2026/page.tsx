import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { StepFlowDiagram } from '@/components/StepFlowDiagram';
import {
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  Landmark,
  Building,
  FileCheck,
  Send,
  FileText,
  BadgeCheck,
  CreditCard,
  Banknote,
  Shield,
  Check,
  AlertCircle,
  FileSpreadsheet,
  Globe2,
  Scale
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Foreign Remittance Tax in Pakistan 2026: Section 111(4), Rs. 5M Limit & FBR Rules | Pakistan Info Hub',
  description:
    'Authoritative tax guide for overseas Pakistanis and their families: Learn why foreign remittances via banking channels are 100% tax-free under Section 111(4), what happens above Rs. 5 million, Proceeds Realization Certificates (PRC), and avoiding Hawala/Hundi tax penalties.',
  keywords: [
    'foreign remittance tax pakistan 2026',
    'section 111 4 income tax ordinance foreign remittance',
    '5 million limit foreign remittance pakistan tax',
    'proceeds realization certificate prc fbr',
    'is money sent from abroad taxable in pakistan',
    'hawala hundi tax penalty fbr pakistan',
  ],
  openGraph: {
    title: 'Foreign Remittance Tax in Pakistan 2026: Section 111(4) & FBR Rules',
    description:
      'Verified guide to foreign remittance taxation in Pakistan: Section 111(4) exemption, Rs. 5M threshold rules, bank PRCs, and wealth reconciliation on Iris.',
    url: 'https://www.pakistaninfohub.com/tax/foreign-remittance-tax-pakistan-overseas-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/tax/foreign-remittance-tax-pakistan-overseas-2026' },
};

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
          name: 'FBR Tax & Iris',
          item: 'https://www.pakistaninfohub.com/tax',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Foreign Remittance Tax Rules 2026',
          item: 'https://www.pakistaninfohub.com/tax/foreign-remittance-tax-pakistan-overseas-2026',
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Receive and Document Foreign Remittances Tax-Free in Pakistan',
      description:
        'Official step-by-step procedure for overseas Pakistanis and resident recipients to receive foreign exchange through banking channels, secure PRCs, and reconcile assets on FBR Iris.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Send Funds via Licensed Banking Channels',
          text: 'Send foreign exchange directly through State Bank of Pakistan (SBP) authorized commercial banks, Roshan Digital Accounts (RDA), or licensed MTOs (Western Union, MoneyGram via bank counters).',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Encash into PKR and Obtain Bank PRC',
          text: 'Ensure the receiving scheduled bank encashes foreign currency into PKR and request an official Proceeds Realization Certificate (PRC / FRC) showing the sender name and foreign exchange voucher number.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Declare Under Inflow in FBR Wealth Statement',
          text: 'When filing your annual tax return on FBR Iris, declare the total remitted PKR amount under "Foreign Remittance (Non-Taxable Inflow)" in the Wealth Statement reconciliation section.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Retain PRC for Traceable Asset Purchases',
          text: 'Safely preserve digital and paper PRC copies. If you later purchase real estate, vehicles, or stocks, the PRC serves as absolute legal proof of legitimate fund origin.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I have to pay income tax on money sent by my family member working abroad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No! Foreign remittances sent to Pakistan for family support through official banking channels are completely exempt from income tax. Under Section 111(4) of the Income Tax Ordinance 2001, foreign exchange encashed through scheduled banks carries full immunity from source inquiry up to Rs. 5 million per year.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if annual foreign remittances exceed Rs. 5 million (50 Lakh PKR)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Exceeding Rs. 5 million does NOT mean the money is automatically taxed. It simply means the "no-questions-asked" statutory immunity expires, giving FBR the legal authority to ask for basic documentation (such as bank Proceeds Realization Certificates, proof of relationship with the overseas sender, or proof of the sender’s foreign employment). If documented as genuine family support, gift, or personal savings, the money remains 100% tax-free.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is money received via Western Union or MoneyGram safe from FBR tax scrutiny?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, provided the funds are collected through authorized commercial bank branches or licensed exchange companies and an official foreign remittance receipt or PRC is obtained. However, receiving cash through informal or unlicensed agents without a banking trail does not qualify for Section 111(4) protection.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between family remittance and freelance IT export income?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Family remittances are gratuitous transfers (gifts, household maintenance, savings) sent by overseas relatives and are 100% tax-free. In contrast, funds received by resident freelancers or IT exporters for professional software, design, or consulting services are classified as "Export of IT Services" and are taxed at a reduced concessional rate of 0.25% (if registered with PSEB/FBR) under the final tax regime.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is Hawala / Hundi dangerous under Pakistani tax laws?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hawala and Hundi are informal, unlicensed cash settlement channels. Money received through Hawala leaves zero official banking trail. If deposited into a Pakistani bank account, FBR treats it as "Unexplained Income" under Section 111, imposing penal income tax rates of up to 35% plus heavy surcharges and potential Anti-Money Laundering (AML) inquiries.',
          },
        },
      ],
    },
  ],
};

export default function ForeignRemittanceTaxGuidePage() {
  const breadcrumbs = [
    { nameEn: 'FBR Tax & Iris', nameUr: 'ٹیکس، ایف بی آر اور انکم ٹیکس', url: '/tax' },
    { nameEn: 'Foreign Remittance Tax Rules 2026', nameUr: 'بیرون ملک ترسیلات زر ٹیکس قواعد 2026' },
  ];

  const remittanceSteps = [
    {
      number: 1,
      icon: <Globe2 className="w-5 h-5" />,
      titleEn: 'Send via Official Banking Channel',
      titleUr: 'قانونی بینکنگ چینل سے ترسیل',
      descEn: 'Send foreign exchange via SBP commercial banks, Roshan Digital Account (RDA), or licensed MTOs (Western Union / MoneyGram).',
      descUr: 'سٹیٹ بینک کے منظور شدہ بینکوں، روشن ڈیجیٹل اکاؤنٹ یا ویسٹرن یونین سے رقم بھیجیں۔',
      tagEn: 'Official Channel',
      tagUr: 'قانونی بینک',
    },
    {
      number: 2,
      icon: <FileText className="w-5 h-5" />,
      titleEn: 'Obtain Bank PRC / FRC',
      titleUr: 'بینک سے پی آر سی سرٹیفکیٹ لیں',
      descEn: 'Ensure funds are encashed into PKR and obtain the bank’s Proceeds Realization Certificate (PRC).',
      descUr: 'روپوں میں تبدیلی پر بینک سے پروسیڈز رئیلائزیشن سرٹیفکیٹ (PRC) حاصل کریں۔',
      tagEn: 'Bank Certificate',
      tagUr: 'بینک ثبوت',
    },
    {
      number: 3,
      icon: <FileSpreadsheet className="w-5 h-5" />,
      titleEn: 'Declare in Iris Wealth Statement',
      titleUr: 'آئرس ویلتھ گوشوارے میں اندراج',
      descEn: 'Declare the exact PKR amount under "Foreign Remittance (Inflows)" in your annual tax return.',
      descUr: 'سالانہ انکم ٹیکس گوشوارے میں غیر ٹیکس شدہ زر مبادلہ کے خانے میں رقم درج کریں۔',
      tagEn: 'Iris Declaration',
      tagUr: 'گوشوارہ اندراج',
    },
    {
      number: 4,
      icon: <ShieldCheck className="w-5 h-5" />,
      titleEn: 'Retain for Asset Purchases',
      titleUr: 'جائیداد اور گاڑی کی خریداری میں ثبوت',
      descEn: 'Use your preserved PRCs as undisputed legal proof of source when purchasing real estate, vehicles, or mutual funds.',
      descUr: 'پلاٹ یا گاڑی خریدتے وقت ایف بی آر کو قانونی ثبوت کے طور پر پی آر سی پیش کریں۔',
      tagEn: 'Audit Protection',
      tagUr: 'مکمل تحفظ',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="FBR SECTION 111(4) GUIDE" labelUr="ایف بی آر انکم ٹیکس قوانین" variant="navy" />
            <VerifiedBadge textEn="TAX YEAR 2026 VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Foreign Remittance Tax in Pakistan 2026: Section 111(4), Rs. 5M Limit &amp; FBR Rules
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              بیرون ملک سے بھیجی جانے والی رقم پر ٹیکس: دفعہ 111(4)، 50 لاکھ کی حد اور پی آر سی سرٹیفکیٹ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Do you or your family receive financial support from abroad? Here is the clear, reassuring truth about Pakistani tax laws: how remittances through official banking channels are 100% tax-free, what the Rs. 5 million threshold actually means, and why saving your bank PRC protects you from FBR audits.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="Are Foreign Remittances Taxed in Pakistan?"
          topicTitleUr="کیا بیرون ملک سے آنے والے پیسوں پر پاکستان میں ٹیکس کٹتا ہے؟"
          answerEn="Foreign remittances sent to Pakistan through official banking channels are 100% exempt from income tax and protected from source inquiry up to Rs. 5 million per tax year under Section 111(4) of the Income Tax Ordinance. Remittances exceeding Rs. 5 million remain tax-free if documented with bank Proceeds Realization Certificates (PRCs). Hawala/Hundi transfers enjoy zero exemption."
          answerUr="قانونی بینکنگ چینلز کے ذریعے پاکستان بھیجی جانے والی ترسیلات زر پر کوئی انکم ٹیکس نہیں ہے۔ انکم ٹیکس آرڈیننس کی دفعہ 111(4) کے تحت سالانہ 50 لاکھ روپے تک ایف بی آر کوئی ذریعہ آمدن نہیں پوچھ سکتا۔ 50 لاکھ سے زائد رقم بھی بینک پی آر سی (PRC) کے ساتھ مکمل ٹیکس فری ہے۔ حوالہ ہنڈی پر کوئی استثنیٰ نہیں۔"
        />

        {/* Reassuring Intro */}
        <section className="p-6 rounded-2xl bg-amber-50/70 dark:bg-slate-900/80 border border-amber-200/80 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-doc-seal dark:text-amber-400 font-serif font-bold text-lg">
            <Landmark className="w-5 h-5 shrink-0" />
            <h2>The Honest Truth: Pakistan Rewards Official Remittances, It Does Not Tax Them</h2>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            There is widespread anxiety among overseas Pakistanis in the Gulf, UK, USA, and Europe that sending money home will trigger aggressive FBR tax notices for their parents, spouses, or siblings in Pakistan.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Let us put your mind completely at ease: <strong>The Government of Pakistan and State Bank actively incentivize foreign remittances</strong> to build national foreign exchange reserves. Under statutory tax law, genuine family support sent via official banking channels is <strong>entirely tax-exempt</strong>. The only requirement is following the official paper trail.
          </p>
        </section>

        {/* Section 1: Official Channels vs Hawala Risks */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Official Banking Channels vs. The Danger of Hawala / Hundi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            {/* Official Channels */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-mono font-bold text-[11px]">
                ✓ OFFICIAL LICENSED CHANNELS (100% PROTECTED)
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Full Immunity Under Section 111(4)
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Commercial Bank Wire Transfers:</strong> Direct SWIFT / IBAN wire transfers into Pakistani bank accounts.</li>
                <li><strong>Roshan Digital Accounts (RDA):</strong> Digital non-resident accounts in USD, GBP, EUR, or PKR.</li>
                <li><strong>Authorized MTOs:</strong> Western Union, MoneyGram, and Ria remitted through licensed commercial bank counters.</li>
                <li><strong>Licensed Global Fintechs:</strong> Direct digital transfers from platforms like Wise, Remitly, or Payoneer settled into Pakistani scheduled bank accounts.</li>
                <li><strong>Legal Benefit:</strong> Eligible for automated Bank PRC generation and full legal immunity against source audits.</li>
              </ul>
            </div>

            {/* Hawala / Hundi */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-rose-100 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 font-mono font-bold text-[11px]">
                ✗ HAWALA / HUNDI / UNLICENSED (HIGH RISK)
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Zero Tax Protection &amp; Heavy Penalties
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Informal Hand-to-Hand Cash:</strong> Using unlicensed agents, jewelry shops, or money brokers abroad.</li>
                <li><strong>No Banking Trail:</strong> When local cash is handed to your family in Pakistan, no foreign exchange enters the banking system.</li>
                <li><strong>FBR Section 111 Trap:</strong> If your family deposits this cash into a local bank account, FBR treats it as <em>&quot;Unexplained Income&quot;</em>.</li>
                <li><strong>Severe Penalties:</strong> Taxed at standard peak slab rates (up to 35%) plus 100% penalty surcharges and potential Anti-Money Laundering (AML) proceedings.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Flow Diagram */}
        <StepFlowDiagram
          titleEn="Step-by-Step Process for Clean, Tax-Free Remittances"
          titleUr="قانونی طریقے سے رقم بھیجنے اور ٹیکس چھوٹ حاصل کرنے کا طریقہ"
          subtitleEn="How to ensure every dollar, dirham, riyal, or pound is legally documented"
          subtitleUr="بینکنگ چینل سے ترسیل، پی آر سی کے حصول اور ویلتھ گوشوارے کا طریقہ کار"
          steps={remittanceSteps}
        />

        {/* Section 3: What Happens Above Rs. 5 Million ($50 Lakh PKR)? */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Understanding the Rs. 5 Million (50 Lakh PKR) Threshold
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              One of the most misunderstood clauses in the Income Tax Ordinance is <strong>Section 111(4)</strong>. Here is the exact legal reality of what happens when you send more than Rs. 5 million in a tax year:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">Below Rs. 5 Million / Year</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>Statutory Immunity:</strong> FBR cannot legally inquire about the origin of the foreign funds. The simple production of the bank PRC is conclusive proof. No questions asked.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">Above Rs. 5 Million / Year</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>Inquiry Permitted, But Still 100% Tax-Free:</strong> FBR has the statutory right to request documentary confirmation that the money is genuine family maintenance, gift, personal savings, or loan. Once you provide the sender&apos;s overseas job proof/tax return and bank PRC, <strong>zero tax is charged</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: PRCs and Wealth Statement Reconciliation */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Why Bank PRCs Matter for Future Property &amp; Car Purchases
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 space-y-4 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              When foreign exchange arrives in Pakistan, the receiving bank issues a <strong>Proceeds Realization Certificate (PRC)</strong> or <em>Foreign Remittance Certificate (FRC)</em>. This is your golden shield for three crucial reasons:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 space-y-1">
                <span className="font-mono font-bold text-amber-800 dark:text-amber-300 uppercase text-xs block">1. Property Purchases</span>
                <p className="text-slate-600 dark:text-slate-300">
                  When buying a house or plot, FBR Section 236-K / 111 checks will ask where the funds came from. Your PRC instantly satisfies the inquiry.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 space-y-1">
                <span className="font-mono font-bold text-amber-800 dark:text-amber-300 uppercase text-xs block">2. Iris Wealth Reconciliation</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Declaring the remittance under &quot;Foreign Inflow&quot; legitimately increases your net declared wealth on Iris without adding to taxable income.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 space-y-1">
                <span className="font-mono font-bold text-amber-800 dark:text-amber-300 uppercase text-xs block">3. Bank Audit Defense</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Commercial banks are required by SBP to perform AML compliance checks. Providing your PRC keeps your bank account fully operational.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 5: Family Support vs Freelancer Export Income */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Family Remittance vs. Freelance IT Export Income: Key Differences
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="table-scroll-container">
                <table className="w-full text-xs font-sans min-w-[540px]">
                  <thead className="bg-doc-ink text-white text-[11px] font-mono uppercase tracking-wider">
                    <tr>
                      <th className="px-4 py-3 text-left">Feature</th>
                      <th className="px-4 py-3 text-left">Family Support Remittance</th>
                      <th className="px-4 py-3 text-left">Freelance / IT Export Inflow</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Nature of Funds</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Gratuitous transfer (gift, household expenses, savings).</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Payment for professional digital services (coding, design).</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Tax Rate</td>
                      <td className="px-4 py-3 font-mono font-bold text-emerald-600">0% (100% Tax-Exempt)</td>
                      <td className="px-4 py-3 font-mono font-bold text-blue-600">0.25% Final Tax (with PSEB) or 1%</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">FBR Legal Section</td>
                      <td className="px-4 py-3 font-mono text-slate-600">Section 111(4)</td>
                      <td className="px-4 py-3 font-mono text-slate-600">Section 154A (Final Tax Regime)</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Reporting Requirement</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Reported under Wealth Statement Inflows.</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Filed under Export Income on Iris Return.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Frequently Asked Questions */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Overseas Remittance Tax)
            </h2>
          </div>

          <div className="space-y-3 font-sans text-xs">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Do I need to file an income tax return if I only receive family money from abroad?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                If the money received is strictly family maintenance, receiving remittances does not automatically make you liable to pay tax. However, if you own real estate, a vehicle, or maintain substantial bank balances, becoming a registered tax filer and declaring the remittance as a non-taxable inflow is highly recommended to claim Active Taxpayer Status (ATL) benefits.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Does Section 111(4) apply only to NICOP holders or all overseas senders?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Section 111(4) applies to any foreign exchange remitted from outside Pakistan through normal banking channels and encashed in Pakistani Rupees by a scheduled bank, regardless of whether the overseas sender holds a NICOP, POC, or foreign passport.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                How do I get a Proceeds Realization Certificate (PRC) from my bank?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                You can obtain a PRC by submitting a simple written request or visiting the branch of the commercial bank where the remittance was received. Many major Pakistani banks (such as HBL, Meezan, UBL, and MCB) also allow you to download digital e-PRCs directly through their online banking portals.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Can foreign remittances be used to justify buying a house or car?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Yes! Bank PRCs provide 100% undisputed proof of the legal origin of funds when declaring high-value property or vehicle purchases in your FBR wealth statement, protecting you from tax audits and unexplained wealth penalties.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Related Links */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Tax &amp; Overseas Pakistanis Utilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/tax/how-to-file-income-tax-return-salaried-iris-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Iris Return Filing</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                How to File Income Tax Return 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Reconciling wealth statements, foreign inflows, and tax deductions.
              </p>
            </Link>

            <Link
              href="/tax/income-tax-calculator-salaried-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-seal font-bold uppercase block">Tax Slabs 2026</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Income Tax Calculator Salaried 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Current FBR progressive tax slabs and monthly deduction rates.
              </p>
            </Link>

            <Link
              href="/overseas/nicop-mandatory-entry-rules-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-emerald-600 font-bold uppercase block">Overseas Pakistanis</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NICOP Mandatory Entry Rules 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Visa-free entry, dual nationality privileges, and banking rights.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
