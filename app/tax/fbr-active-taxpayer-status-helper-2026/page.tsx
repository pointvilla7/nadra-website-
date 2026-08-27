import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, FAQAccordionVisual } from '@/components/visuals';
import {
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  Building2,
  Car,
  Landmark,
  BadgePercent,
  CheckCircle2,
  FileText,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FBR Active Taxpayer Status Helper 2026 – Check ATL Status by CNIC & 9966 SMS | Pakistan Info Hub',
  description:
    'Check your FBR Active Taxpayer List (ATL) status online by 13-digit CNIC or 9966 SMS code. Complete guide to tax filer benefits, reduced withholding tax rates on property and banking, and Iris 2.0 portal access.',
  keywords: [
    'FBR Active Taxpayer Status 2026',
    'ATL status check by CNIC',
    'FBR 9966 SMS check',
    'FBR tax filer verification',
    'Active Taxpayer List Iris portal',
    'filer vs non-filer tax rates 2026',
    'property withholding tax filer',
  ],
  openGraph: {
    title: 'FBR Active Taxpayer Status Helper 2026 – Check ATL Status by CNIC & 9966 SMS',
    description:
      'Client-side CNIC validator, 9966 SMS code generator, and direct Iris portal link for checking Active Taxpayer List (ATL) status in Pakistan.',
    url: 'https://www.pakistaninfohub.com/tax/fbr-active-taxpayer-status-helper-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/tax/fbr-active-taxpayer-status-helper-2026' },
};

const FbrActiveTaxpayerHelper = dynamic(
  () => import('@/components/FbrActiveTaxpayerHelper').then((m) => ({ default: m.FbrActiveTaxpayerHelper })),
  { ssr: false, loading: () => <div className="h-[480px] rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" /> }
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Tax & FBR Services', item: 'https://www.pakistaninfohub.com/tax' },
        { '@type': 'ListItem', position: 3, name: 'FBR Active Taxpayer Status 2026', item: 'https://www.pakistaninfohub.com/tax/fbr-active-taxpayer-status-helper-2026' },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'FBR Active Taxpayer Status Helper 2026',
      description:
        'An interactive civic navigator to validate CNIC format, generate FBR 9966 SMS verification syntax, and provide direct one-click access to the official Iris Active Taxpayer List verification page.',
      url: 'https://www.pakistaninfohub.com/tax/fbr-active-taxpayer-status-helper-2026',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
    },
    {
      '@type': 'HowTo',
      name: 'How to Check FBR Active Taxpayer Status (ATL) Online or via 9966 SMS (2026)',
      description: 'Step-by-step instructions to verify your tax filer status on the Federal Board of Revenue (FBR) Active Taxpayers List.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Enter 13-Digit CNIC',
          text: 'Input your 13-digit Computerized National Identity Card number into the helper tool to validate formatting client-side.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Copy CNIC or SMS Code',
          text: 'Click "Copy CNIC" to copy your formatted identity digits or copy the "ATL [CNIC]" SMS syntax.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Method A: Verify on Official FBR Iris Portal',
          text: 'Click "Check on FBR Portal" to open iris.fbr.gov.pk in a new tab, paste your CNIC into the Registration No field, solve the captcha, and view real-time ATL status.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Method B: SMS to 9966',
          text: 'Send SMS with text "ATL <13-digit CNIC>" to shortcode 9966 from your mobile phone to receive immediate SMS confirmation from FBR.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does "Active Taxpayer" status mean in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An Active Taxpayer (Filer) is an individual or business who has submitted their annual Income Tax Return for the relevant tax year with the Federal Board of Revenue (FBR) before the statutory deadline (or after paying the ATL surcharge), entitling them to significantly reduced withholding tax rates across banking, property transactions, motor vehicles, and investment dividends.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I check my ATL status via SMS on mobile?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Type "ATL [space] [13-digit CNIC without dashes]" (for example: ATL 3520212345671) and send it to 9966. FBR will reply within seconds with your name, registration date, and Active or Inactive status.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is my status showing "Inactive" despite having an NTN?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Having a National Tax Number (NTN) alone does not make you an Active Taxpayer. You must file your annual Income Tax Return (Form 114) for the active tax year on FBR Iris. If you filed after the statutory due date, you must pay the ATL Surcharge (PKR 1,000 for individuals, PKR 10,000 for AOPs, PKR 20,000 for companies) via CPR Challan to become active.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the main tax benefits of being an Active Taxpayer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Active Taxpayers pay substantially lower advance withholding taxes: 3% vs 10.5%+ on property purchases (Section 236K), 3% vs 6%+ on property sales (Section 236C), 50% to 66% lower advance tax on new vehicle registration (Section 231B), 15% vs 30% tax on bank savings profits (Section 151), and exemption from cash withdrawal withholding tax under Section 231AB.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Pakistan Info Hub store or transmit my CNIC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. This tool operates 100% locally in your client browser memory. Your CNIC is neither stored, logged, nor transmitted to any remote server. It simply validates the formatting, generates SMS templates, and directs you safely to the official FBR Iris portal.',
          },
        },
      ],
    },
  ],
};

export default function FbrActiveTaxpayerStatusHelperPage() {
  const breadcrumbs = [
    { nameEn: 'Tax & FBR Services', nameUr: 'ٹیکس اور ایف بی آر سروسز' },
    { nameEn: 'FBR Active Taxpayer Status 2026', nameUr: 'ایکٹو ٹیکس پیئر سٹیٹس 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Page Title & Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="FBR TAX NAVIGATOR" labelUr="ایف بی آر رہنمائی" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            FBR Active Taxpayer Status Helper 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              ایف بی آر ایکٹو ٹیکس پیئر (فائلر) سٹیٹس تصدیق و پورٹل رہنمائی
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Validate your 13-digit CNIC locally, generate instant 9966 SMS verification codes, copy clean digits with one
            click, and access the official Federal Board of Revenue Iris Active Taxpayer List (ATL) portal. 100% privacy
            safe — no citizen data is stored.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Check FBR Active Taxpayer (ATL) Status in Pakistan (2026)"
          topicTitleUr="پاکستان میں ایف بی آر ایکٹو ٹیکس پیئر سٹیٹس چیک کرنے کا طریقہ"
          answerEn="To verify your ATL status: (1) SMS Method: Send 'ATL <13-digit CNIC>' (e.g. ATL 3520212345671) to 9966 from your mobile for instant reply, or (2) Online Portal: Validate your CNIC in our helper above, copy it, click 'Check on FBR Portal' to open https://iris.fbr.gov.pk/, and enter your CNIC under 'Active Taxpayer List (Income Tax)' with captcha. Active status saves you up to 70% on withholding taxes on property, banking, and vehicles."
          answerUr="ایکٹو ٹیکس پیئر سٹیٹس معلوم کرنے کے دو طریقے ہیں: (1) ایس ایم ایس کے ذریعے: اپنے موبائل سے 'ATL [شناختی کارڈ نمبر]' لکھ کر 9966 پر میسج بھیجیں اور فوری جواب پائیں، (2) آن لائن پورٹل: اوپر دیے گئے ٹول میں شناختی کارڈ تصدیق کریں، کاپی کریں اور ایف بی آر آئرس پورٹل بٹن پر کلک کر کے سرکاری سائٹ پر کیپچا کوڈ کے ساتھ چیک کریں۔ ایکٹو فائلر ہونے سے پراپرٹی، گاڑی اور بینکنگ میں 70 فیصد تک ٹیکس بچت ہوتی ہے۔"
        />

        {/* Interactive Helper Tool */}
        <section aria-label="FBR Active Taxpayer Status Helper Tool">
          <FbrActiveTaxpayerHelper />
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 1: What Active Taxpayer Status Means and Why It Matters */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-doc-brass" />
            What is &quot;Active Taxpayer&quot; Status &amp; Why It Matters in 2026
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base space-y-4">
            <p>
              Under the <strong>Income Tax Ordinance, 2001</strong>, the Federal Board of Revenue (FBR) maintains the
              <strong> Active Taxpayers List (ATL)</strong> — a published register of all individuals, companies, and
              Associations of Persons (AOPs) who have submitted their annual income tax returns within the legally
              stipulated timeframes.
            </p>
            <p>
              Holding an &quot;Active&quot; status (popularly referred to as a <strong>Tax Filer</strong>) provides substantial
              legal and financial benefits in Pakistan. Non-filers or inactive taxpayers face punitive withholding tax
              rates, higher transaction charges at financial institutions, and restrictions on high-value asset purchases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 bg-white dark:bg-slate-900">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-doc-seal dark:text-red-400" />
                1. Property Registration &amp; Sale (Sections 236C &amp; 236K)
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                When buying real estate, Active Taxpayers pay only <strong>3% advance withholding tax</strong>, whereas
                inactive taxpayers and non-filers are charged progressive rates reaching <strong>10.5% to 15%+</strong> of
                the recorded FBR property valuation table or DC rate. On property sales, filers pay 3% compared to 6% to 10%
                for non-filers.
              </p>
            </div>

            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 bg-white dark:bg-slate-900">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white flex items-center gap-2">
                <Car className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                2. Motor Vehicle Purchase &amp; Registration (Section 231B)
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Purchasing and registering a new car with the Excise Department carries up to <strong>200% to 300% higher advance tax</strong> for
                non-filers depending on engine capacity (e.g. 1000cc, 1300cc, 1800cc, or SUVs). Filers pay standard baseline rates.
              </p>
            </div>

            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 bg-white dark:bg-slate-900">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white flex items-center gap-2">
                <Landmark className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                3. Banking Profits &amp; Cash Transactions (Sections 151 &amp; 231AB)
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Withholding tax on bank profits (savings accounts, Term Deposit Receipts, National Savings schemes) is capped at <strong>15% for active filers</strong> versus
                <strong> 30% to 35% for non-filers</strong>. Furthermore, active filers are fully exempt from cash withdrawal withholding taxes.
              </p>
            </div>

            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 bg-white dark:bg-slate-900">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white flex items-center gap-2">
                <BadgePercent className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                4. Stock Dividends, Prize Bonds &amp; International Remittances
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Dividend withholding on Pakistan Stock Exchange (PSX) listed shares is <strong>15% for filers</strong> compared to <strong>30% for non-filers</strong>.
                Tax on Prize Bond winnings is 15% for filers versus 30% for non-filers.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Detailed Tax Rates Comparison Table */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white">
            2026 Withholding Tax Rates: Active Filer vs Non-Filer Comparison
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Official statutory rate differentials enacted in the Finance Act and Income Tax Rules 2026:
          </p>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Transaction Type</th>
                  <th className="px-4 py-3 text-left">Income Tax Section</th>
                  <th className="px-4 py-3 text-left text-emerald-300">Active Taxpayer Rate</th>
                  <th className="px-4 py-3 text-left text-red-300">Inactive / Non-Filer Rate</th>
                  <th className="px-4 py-3 text-left">Tax Saving</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  {
                    type: 'Property Purchase (Immovable Property)',
                    section: 'Section 236K',
                    filer: '3% of Fair Market Value',
                    nonFiler: '10.5% – 15% (Tiered)',
                    saving: 'Up to 75% Lower Tax',
                  },
                  {
                    type: 'Property Sale / Transfer',
                    section: 'Section 236C',
                    filer: '3% of Gross Consideration',
                    nonFiler: '6% – 10% (Tiered)',
                    saving: '50% to 70% Lower Tax',
                  },
                  {
                    type: 'Bank Profit / Savings Account Yield',
                    section: 'Section 151',
                    filer: '15% Final Tax',
                    nonFiler: '30% – 35% Deducted at Source',
                    saving: '50% Lower Tax',
                  },
                  {
                    type: 'Prize Bond Winning Amount',
                    section: 'Section 156',
                    filer: '15% on Winnings',
                    nonFiler: '30% on Winnings',
                    saving: '50% Lower Tax',
                  },
                  {
                    type: 'PSX Listed Company Dividends',
                    section: 'Section 150',
                    filer: '15% Advance Tax',
                    nonFiler: '30% Advance Tax',
                    saving: '50% Lower Tax',
                  },
                  {
                    type: 'New Car Registration (Under 1000cc)',
                    section: 'Section 231B',
                    filer: 'PKR 10,000 – 20,000',
                    nonFiler: 'PKR 30,000 – 60,000 (3x)',
                    saving: '66% Lower Tax',
                  },
                  {
                    type: 'New Car Registration (Over 2000cc)',
                    section: 'Section 231B',
                    filer: 'PKR 200,000 – 400,000',
                    nonFiler: 'PKR 600,000 – 1,200,000 (3x)',
                    saving: '66% Lower Tax',
                  },
                  {
                    type: 'Cash Withdrawal > PKR 50,000/day',
                    section: 'Section 231AB',
                    filer: '0% (Exempt)',
                    nonFiler: '0.6% on Full Withdrawn Sum',
                    saving: '100% Tax Free',
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition"
                  >
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">{row.type}</td>
                    <td className="px-4 py-3 font-mono text-slate-500 text-xs">{row.section}</td>
                    <td className="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400 text-xs">
                      {row.filer}
                    </td>
                    <td className="px-4 py-3 font-mono font-semibold text-doc-seal dark:text-red-400 text-xs">
                      {row.nonFiler}
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-mono font-bold text-[11px]">
                        {row.saving}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </section>

        {/* Section 3: How to Reactivate Inactive Status (ATL Surcharge Rules) */}
        <section className="doc-card p-6 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-slate-900/60 space-y-4">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-doc-brass" />
            How to Restore Inactive Taxpayer Status (ATL Surcharge Rates)
          </h2>
          <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
            <p>
              If your status shows <strong>Inactive</strong> despite having filed your return late (after the official 30th
              September / extended deadline), you must pay the statutory <strong>ATL Surcharge Challan</strong> under Section 182A
              via FBR e-Payment (1Link, online banking, or NBP counter):
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 block">
                  Individual (Salaried / Business)
                </span>
                <span className="text-xl font-mono font-extrabold text-doc-ink dark:text-white mt-1 block">
                  PKR 1,000
                </span>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">One-Time Surcharge</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 block">
                  Association of Persons (AOP)
                </span>
                <span className="text-xl font-mono font-extrabold text-doc-ink dark:text-white mt-1 block">
                  PKR 10,000
                </span>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">Partnership / Firm</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 block">
                  Corporate / Pvt Ltd Company
                </span>
                <span className="text-xl font-mono font-extrabold text-doc-ink dark:text-white mt-1 block">
                  PKR 20,000
                </span>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">Corporate Entity</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
              * Once the CPR payment challan is realized, FBR systems update your name to the Active Taxpayer List (ATL) on
              the next automated server sync (usually within 24 to 48 hours).
            </p>
          </div>
        </section>

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step Verification & Active Taxpayer List (ATL) Activation Workflow"
          titleUr="ایف بی آر ایکٹیو ٹیکس پیئر لسٹ (ATL) میں شامل ہونے کا مرحلہ وار طریقہ"
          subtitleEn="4-stage process from status check via 9966 SMS to Iris return filing and surcharge activation"
          subtitleUr="9966 ایس ایم ایس کے ذریعے تصدیق سے لے کر گوشوارے جمع کروانے اور ایکٹیو ہونے تک کے مراحل"
          steps={[
            {
              number: 1,
              titleEn: "Check Status via 9966 SMS or Iris",
              titleUr: "9966 ایس ایم ایس یا آئرس پر اسٹیٹس چیک",
              descEn: "Send 'ATL <13-digit CNIC>' to 9966 from your mobile phone or verify online on the FBR Iris portal.",
              descUr: "اپنے موبائل سے 'ATL <13 ہندسوں کا شناختی کارڈ>' لکھ کر 9966 پر بھیجیں یا آن لائن پورٹل پر چیک کریں۔",
              tagEn: "9966 SMS / Iris",
              tagUr: "اسٹیٹس چیک",
            },
            {
              number: 2,
              titleEn: "File Income Tax Return on Iris 2.0",
              titleUr: "آئرس پورٹل پر سالانہ انکم ٹیکس ریٹرن فائل کریں",
              descEn: "Log into iris.fbr.gov.pk, declare your annual salary/business income and wealth statement, and submit the return.",
              descUr: "ایف بی آر کے آن لائن پورٹل پر اپنی سالانہ آمدنی، بینک بیلنس اور اثاثوں کا گوشوارہ جمع کروائیں۔",
              tagEn: "Iris Return",
              tagUr: "گوشوارہ فائل",
            },
            {
              number: 3,
              titleEn: "Generate & Pay Surcharge (If Late)",
              titleUr: "لیٹ فائلنگ سرچارج چالان ادا کریں",
              descEn: "If filing after the statutory deadline, generate an ATL Surcharge PSID (PKR 1,000 for salaried, PKR 10,000 for AOPs) and pay via 1Link.",
              descUr: "آخری تاریخ گزرنے کے بعد 1000 روپے (سیلری) کا چالان بنا کر کسی بھی بینک یا موبائل ایپ سے جمع کروائیں۔",
              tagEn: "1Link PSID",
              tagUr: "سرچارج چالان",
            },
            {
              number: 4,
              titleEn: "Active Status & Reduced Withholding",
              titleUr: "فوری ایکٹیو اسٹیٹس اور ٹیکس میں 50 فیصد بچت",
              descEn: "FBR updates your status to Active; enjoy standard withholding tax rates on banking, property, and vehicle transactions.",
              descUr: "ایف بی آر سسٹم آپ کا نام ایکٹیو لسٹ میں شامل کر دیتا ہے جس سے بینکوں اور جائیداد پر اضافی ودہولڈنگ ٹیکس ختم ہو جاتا ہے۔",
              tagEn: "ATL Active",
              tagUr: "ایکٹیو ٹیکس پیئر",
            },
          ]}
        />

        {/* Section 4: Related Tax Guides */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Tax &amp; FBR Filing Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/tax/ntn-registration-online-pakistan"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Step 1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NTN Online Registration Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Create your official FBR Iris account and 7-digit NTN.</p>
            </Link>

            <Link
              href="/tax/how-to-become-tax-filer-pakistan-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Step 2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                How to Become a Tax Filer in 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Complete tutorial for salaried and business individuals.</p>
            </Link>

            <Link
              href="/tax/withholding-tax-rates-filers-non-filers"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Reference</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Full Withholding Tax Schedules →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Comprehensive schedule for all Income Tax Ordinance sections.</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (FBR Active Taxpayer Status)"
          titleUr="ایف بی آر ایکٹیو ٹیکس پیئر اسٹیٹس سے متعلق عام سوالات"
          subtitleEn="Essential guidelines on weekly Iris database sync cycles, 9966 SMS for overseas Pakistanis, NTN vs Active status, and banking verifications"
          subtitleUr="ہفتہ وار لسٹ اپ ڈیٹ، اوورسیز پاکستانیوں کے لیے آن لائن تصدیق، این ٹی این کا فرق اور بینکوں کے قانونی اختیارات"
          items={[
            {
              questionEn: "How frequently is the FBR Active Taxpayer List (ATL) updated?",
              questionUr: "ایف بی آر کی ایکٹیو ٹیکس پیئر لسٹ (ATL) کتنی دیر بعد اپ ڈیٹ ہوتی ہے؟",
              answerEn: "The FBR updates the Active Taxpayers List on its central Iris server every Monday at midnight (weekly cycle). Any tax return filed or ATL surcharge paid during the week will typically reflect in the active database on the following Monday.",
              answerUr: "ایف بی آر ہر پیر کی رات 12 بجے مرکزی سرور پر لسٹ اپ ڈیٹ کرتا ہے۔ ہفتے کے دوران جمع کروایا گیا ریٹرن یا سرچارج چالان اگلے پیر کو لائیو لسٹ میں ظاہر ہو جاتا ہے۔",
            },
            {
              questionEn: "Can an overseas Pakistani or NRP check ATL status via 9966 SMS?",
              questionUr: "کیا بیرون ملک مقیم پاکستانی 9966 ایس ایم ایس پر اسٹیٹس چیک کر سکتے ہیں؟",
              answerEn: "The 9966 SMS shortcode works on all local Pakistani cellular networks (Jazz, Zong, Telenor, Ufone, Onic). For overseas Pakistanis using international numbers, checking via the official Iris online portal (iris.fbr.gov.pk) with their 13-digit CNIC or NICOP is recommended.",
              answerUr: "9966 ایس ایم ایس صرف پاکستانی سموں پر کام کرتا ہے۔ بیرون ملک مقیم پاکستانی اپنے شناختی کارڈ یا نائیکوپ نمبر کے ذریعے ایف بی آر کی ویب سائٹ پر براہ راست مفت چیک کر سکتے ہیں۔",
            },
            {
              questionEn: "What is the difference between an NTN and an Active Taxpayer status?",
              questionUr: "این ٹی این (NTN) اور ایکٹیو ٹیکس پیئر (فائلر) میں کیا فرق ہے؟",
              answerEn: "An NTN (National Tax Number) is your permanent tax registration identification with FBR (for individuals, it equals their 13-digit CNIC). However, having an NTN does not make you an Active Taxpayer. You only attain Active status when you submit your annual income tax return for the relevant tax year before the due date.",
              answerUr: "این ٹی این صرف ٹیکس رجسٹریشن نمبر ہوتا ہے۔ صرف این ٹی این بنوانے سے بندہ فائلر نہیں بنتا، جب تک آپ ہر سال اپنی سالانہ انکم ٹیکس ریٹرن جمع نہ کروائیں آپ ایکٹیو ٹیکس پیئر نہیں کہلاتے۔",
            },
            {
              questionEn: "Is it legal for banks or car dealers to check my ATL status?",
              questionUr: "کیا بینک، گاڑیوں کے شوروم اور پراپرٹی رجسٹرار کا میرا ٹیکس اسٹیٹس چیک کرنا قانونی ہے؟",
              answerEn: "Yes. Under federal tax legislation, all scheduled commercial banks, property registrar sub-registrars, motor vehicle registration authorities, and withholding agents are legally required to verify your real-time ATL status on Iris before applying withholding tax rates.",
              answerUr: "جی ہاں! انکم ٹیکس آرڈیننس کے تحت تمام بینکوں، موٹر رجسٹریشن اتھارٹیز اور پراپرٹی دفاتر کے لیے لازمی ہے کہ وہ نان فائلر ودہولڈنگ ٹیکس کاٹنے سے پہلے آپ کا نام لسٹ میں چیک کریں۔",
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Federal Board of Revenue (FBR) Official Portal', url: 'https://www.fbr.gov.pk/' },
            { label: 'FBR Iris 2.0 Tax Filing Portal', url: 'https://iris.fbr.gov.pk/' },
            { label: 'Income Tax Ordinance 2001 (Section 181A & 182A ATL Rules)', url: 'https://www.fbr.gov.pk/income-tax-ordinance-2001/51149/131252' },
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
