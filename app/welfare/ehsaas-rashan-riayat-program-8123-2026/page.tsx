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
  ShoppingBag,
  Store,
  Smartphone,
  ShieldAlert,
  Building,
  FileCheck,
  Send,
  FileText,
  BadgeCheck,
  Percent,
  Fingerprint,
  Radio,
  Check,
  AlertCircle,
  HelpCircle as QuestionIcon
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ehsaas Rashan Riayat 8123 Guide 2026: Grocery Subsidy, Eligibility & Scam Warnings | Pakistan Info Hub',
  description:
    'Comprehensive verified guide to the Ehsaas Rashan Riayat program: How to check eligibility via SMS 8123, targeted 30–40% grocery discounts on flour, ghee, pulses, and sugar at Utility Stores, NSER PMT score thresholds, and essential scam-protection warnings.',
  keywords: [
    'ehsaas rashan program 8123 check online 2026',
    'ehsaas rashan riayat eligibility cnic',
    'bisp rashan subsidy utility stores',
    '8123 vs 8171 code difference',
    'rashan discount atta ghee daal sugar',
    'nser dynamic survey rashan registration',
  ],
  openGraph: {
    title: 'Ehsaas Rashan Riayat 8123 Guide 2026: Grocery Subsidy & Eligibility Check',
    description:
      'Official guide to checking your Ehsaas Rashan Riayat grocery subsidy via 8123, understanding Utility Store discounts, and avoiding fake agent registration scams.',
    url: 'https://www.pakistaninfohub.com/welfare/ehsaas-rashan-riayat-program-8123-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/welfare/ehsaas-rashan-riayat-program-8123-2026' },
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
          name: 'Social Welfare & Relief',
          item: 'https://www.pakistaninfohub.com/welfare',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Ehsaas Rashan Riayat Program 8123 (2026)',
          item: 'https://www.pakistaninfohub.com/welfare/ehsaas-rashan-riayat-program-8123-2026',
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Check and Avail Ehsaas Rashan Riayat Grocery Subsidy in Pakistan',
      description:
        'Step-by-step procedure to verify eligibility for targeted food subsidies on kitchen staples via shortcode 8123 and redeem discounts at authorized stores.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Send 13-Digit CNIC to Shortcode 8123',
          text: 'Send your 13-digit CNIC number (without dashes) via SMS from a SIM registered in your own name to official shortcode 8123.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Receive Official Status Response',
          text: 'Read the automated confirmation SMS stating whether your household is eligible under the current NSER PMT score threshold.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Visit a Registered Utility Store or Karyana Merchant',
          text: 'Take your original CNIC and registered mobile phone to the nearest Utility Stores of Pakistan (USC) branch or an authorized Rashan POS Karyana store.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Complete Biometric Verification & Claim Discount',
          text: 'Provide your thumb impression on the point-of-sale device and receive a subsidized discount (up to 30–40%) on flour (atta), cooking oil/ghee, sugar, and pulses.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is Ehsaas Rashan Riayat a cash payment like BISP Kafaalat?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Ehsaas Rashan Riayat is strictly a targeted commodity price subsidy, not a cash grant. You do not receive cash in your bank or mobile wallet; instead, you receive an immediate point-of-sale discount (commonly 30% to 40%) at the checkout counter when purchasing designated essential groceries (flour, ghee/oil, sugar, pulses) at registered stores.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does my CNIC show "Record Not Found" or "Ineligible" on 8123?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This typically happens if your household has not completed the NSER (National Socio-Economic Registry) Dynamic Survey at a local BISP/Ehsaas Tehsil Center, or if your household Proxy Means Test (PMT) score exceeds the qualifying cut-off (typically PMT ≤ 32 or 40 depending on provincial phase). You can visit your nearest BISP Tehsil Office with your original CNIC and electricity bill to update your household survey.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there any fee to register or check eligibility for Ehsaas Rashan 8123?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Checking eligibility via 8123 costs only standard telecom SMS charges (around Rs. 1–2), and registering through official BISP/Ehsaas Tehsil Centers is 100% free. Any agent, Facebook post, or WhatsApp contact demanding a fee (e.g. Rs. 500 to Rs. 2,000) for "guaranteed enrollment" is running an illegal scam.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between SMS code 8123 and 8171?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Shortcode 8123 is specifically dedicated to the Rashan Riayat food subsidy program. Shortcode 8171 is the master portal for BISP Kafaalat unconditional quarterly cash transfers (Rs. 10,500/quarter) and Taleemi Wazaif student stipends. While both draw from the same NSER socioeconomic database, they serve separate benefit mechanisms.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which shops and stores accept the Ehsaas Rashan discount?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The discount is redeemable at: (1) All nationwide Utility Stores Corporation (USC) branches, and (2) Specially registered private Karyana merchants equipped with the official Android POS/NBP digital verification app displaying the official Ehsaas Rashan banner.',
          },
        },
      ],
    },
  ],
};

export default function EhsaasRashanGuidePage() {
  const breadcrumbs = [
    { nameEn: 'Social Welfare & Relief', nameUr: 'سوشل ویلفیئر و ریلیف', url: '/welfare' },
    { nameEn: 'Ehsaas Rashan Riayat Program 8123 (2026)', nameUr: 'احساس راشن رعایت پروگرام 8123 گائیڈ 2026' },
  ];

  const rashanSteps = [
    {
      number: 1,
      icon: <Smartphone className="w-5 h-5" />,
      titleEn: 'Send CNIC to 8123',
      titleUr: '8123 پر شناختی کارڈ نمبر بھیجیں',
      descEn: 'Send your clean 13-digit CNIC (without dashes) via SMS to official shortcode 8123 from your registered SIM.',
      descUr: 'اپنے نام رجسٹرڈ سم سے 13 ہندسوں کا شناختی کارڈ بغیر ڈیش کے 8123 پر ایس ایم ایس کریں۔',
      tagEn: 'SMS Verification',
      tagUr: 'مفت تصدیق',
    },
    {
      number: 2,
      icon: <CheckCircle2 className="w-5 h-5" />,
      titleEn: 'Receive Eligibility SMS',
      titleUr: 'اہلیت کا جوابی میسج حاصل کریں',
      descEn: 'The system checks your NSER PMT score and replies with your confirmation and household quota status.',
      descUr: 'سسٹم این ایس ای آر غربت اسکور چیک کر کے آپ کو راشن رعایت کی تصدیق کا پیغام بھیجے گا۔',
      tagEn: 'Instant Status',
      tagUr: 'فوری تصدیق',
    },
    {
      number: 3,
      icon: <Store className="w-5 h-5" />,
      titleEn: 'Visit Utility Store / Karyana',
      titleUr: 'یوٹیلیٹی اسٹور یا کریانہ شاپ جائیں',
      descEn: 'Take your original CNIC and mobile phone to an authorized Utility Store or registered Rashan merchant.',
      descUr: 'اصل شناختی کارڈ اور موبائل فون ہمراہ لے کر منظور شدہ یوٹیلیٹی اسٹور یا دکان پر تشریف لے جائیں۔',
      tagEn: 'Store Visit',
      tagUr: 'دکان تشریف آوری',
    },
    {
      number: 4,
      icon: <Percent className="w-5 h-5" />,
      titleEn: 'Biometric Discount Claim',
      titleUr: 'بائیومیٹرک تصدیق اور رعایت کا حصول',
      descEn: 'Provide your thumbprint on the POS scanner to receive an instant 30–40% discount on flour, ghee, sugar, and pulses.',
      descUr: 'بائیومیٹرک تصدیق کروا کر آٹا، گھی، دالوں اور چینی پر فوری 30 سے 40 فیصد رعایت حاصل کریں۔',
      tagEn: 'Checkout Saving',
      tagUr: 'خریداری رعایت',
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
            <InteractiveToolBadge labelEn="FOOD SUBSIDY DIRECTORY" labelUr="راشن رعایت و سبسڈی پورٹل" variant="navy" />
            <VerifiedBadge textEn="NSER & UTILITY STORES 2026" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Ehsaas Rashan Riayat Program 8123 (2026 Guide)
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              احساس راشن رعایت 8123: آٹا، گھی، چینی اور دالوں پر سبسڈی معلوم کرنے کا طریقہ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Need relief on monthly kitchen expenses? Here is the complete, honest guide to the Ehsaas Rashan Riayat grocery subsidy: how the 8123 SMS check works, which grocery items qualify, where to redeem discounts, and how to stay safe from fake agent scams.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is Ehsaas Rashan Riayat and How to Check It?"
          topicTitleUr="احساس راشن رعایت پروگرام کیا ہے اور اہلیت کیسے چیک کریں؟"
          answerEn="Ehsaas Rashan Riayat provides eligible low-income families with a targeted 30% to 40% grocery subsidy on flour (atta), cooking oil/ghee, pulses (daal), and sugar at registered Utility Stores and authorized Karyana shops. It is a point-of-sale discount, not a cash payment. Send your 13-digit CNIC to shortcode 8123 to verify eligibility."
          answerUr="احساس راشن رعایت پروگرام کم آمدن خاندانوں کو یوٹیلیٹی اسٹورز اور رجسٹرڈ کریانہ دکانوں سے آٹا، گھی، دالیں اور چینی خریدنے پر 30 سے 40 فیصد تک رعایت فراہم کرتا ہے۔ یہ نقد رقم کے بجائے اشیاء پر رعایت ہے۔ اپنی اہلیت جانچنے کے لیے 13 ہندسوں کا شناختی کارڈ نمبر 8123 پر ایس ایم ایس کریں۔"
        />

        {/* Conversational Intro */}
        <section className="p-6 rounded-2xl bg-amber-50/70 dark:bg-slate-900/80 border border-amber-200/80 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-doc-seal dark:text-amber-400 font-serif font-bold text-lg">
            <ShoppingBag className="w-5 h-5 shrink-0" />
            <h2>Understanding Grocery Subsidies vs. Cash Transfers</h2>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            When grocery inflation hits, the most practical relief is lowering the bill on kitchen staples. Many families confuse Ehsaas Rashan Riayat with standard BISP cash assistance.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Here is the core fact: <strong>Rashan Riayat does not deposit cash into your pocket</strong>. Instead, when you walk into a Utility Store or registered Karyana merchant to buy a 10kg bag of flour or 2kg of cooking oil, the system applies an instant 30% to 40% price deduction right at the cash register upon scanning your thumbprint.
          </p>
        </section>

        {/* Section 1: Subsidized Commodities & Discount Structure */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Percent className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Which Kitchen Staples Are Covered Under the Subsidy?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-sans">
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-2xl">🌾</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Wheat Flour (Atta)</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Subsidized per 10kg/20kg bag at designated rates, reducing the cost per kg significantly below market prices.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-2xl">🫗</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Cooking Oil &amp; Ghee</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Targeted subsidy per kg/liter on approved cooking oil and vanaspati ghee brands at Utility Stores.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-2xl">🍲</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Pulses (Daal)</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Price reductions on essential lentils including Daal Chana, Daal Moong, Daal Masoor, and White Gram.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-2xl">🥣</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Sugar (Cheeni)</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Controlled price quota per family per month to protect households from market price spikes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Flow Diagram */}
        <StepFlowDiagram
          titleEn="Step-by-Step 8123 Rashan Verification &amp; Purchase Process"
          titleUr="راشن رعایت اہلیت چیک کرنے اور سبسڈی حاصل کرنے کا طریقہ"
          subtitleEn="Follow this simple 4-step path from SMS verification to store checkout"
          subtitleUr="ایس ایم ایس بھیجنے سے لے کر دکان پر بائیومیٹرک رعایت حاصل کرنے کے 4 مراحل"
          steps={rashanSteps}
        />

        {/* Section 3: Eligibility & NSER PMT Score Mechanics */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              How Eligibility Is Determined: The NSER PMT Score
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Just like BISP Kafaalat, the Rashan Riayat program relies on the <strong>National Socio-Economic Registry (NSER)</strong> database. Your household&apos;s poverty index is measured on a scale from 0 to 100 known as the <em>Proxy Means Test (PMT) Score</em>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">PMT Score Threshold</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Households with a PMT score typically <strong>under 32 to 40</strong> qualify for full targeted grocery relief.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">Priority Demographics</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Widows, female-headed families, disabled individuals, and registered daily wage earners receive automatic priority.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">Not Found? Update NSER</span>
                <p className="text-slate-600 dark:text-slate-300">
                  If 8123 returns &quot;Record not found,&quot; visit your local BISP Tehsil office for a <strong>free Dynamic Survey update</strong>.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-600 dark:text-slate-400">Want to understand exactly how PMT scores are calculated?</span>
              <Link
                href="/welfare/pmt-score-explained-bisp-eligibility-2026"
                className="font-bold text-doc-seal hover:text-doc-brass transition inline-flex items-center gap-1"
              >
                <span>Read Full PMT Guide →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 4: Code Disambiguation Table */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Radio className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Understanding Welfare Shortcodes: 8123 vs. 8171 vs. 8500
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Many citizens get confused by the different 8-series SMS shortcodes operated by the government. Here is the clear breakdown:
            </p>

            <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="table-scroll-container">
                <table className="w-full text-xs font-sans min-w-[540px]">
                  <thead className="bg-doc-ink text-white text-[11px] font-mono uppercase tracking-wider">
                    <tr>
                      <th className="px-4 py-3 text-left">Shortcode</th>
                      <th className="px-4 py-3 text-left">Program Name</th>
                      <th className="px-4 py-3 text-left">Benefit Type</th>
                      <th className="px-4 py-3 text-right">Redemption Channel</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="bg-amber-50/50 dark:bg-amber-950/20">
                      <td className="px-4 py-3 font-mono font-bold text-doc-seal dark:text-amber-400">8123</td>
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Ehsaas Rashan Riayat</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Grocery Item Subsidy (30–40% discount)</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-doc-ink dark:text-white">Utility Stores &amp; Karyana POS</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-mono font-bold text-emerald-600">8171</td>
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">BISP Kafaalat &amp; Taleemi Wazaif</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Direct Cash Payment (Quarterly Rs. 10,500)</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">Bank Alfalah / HBL Connect / Campsites</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-mono font-bold text-blue-600">8500</td>
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Sehat Sahulat Program</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Free Inpatient Hospital Treatment (Up to 1M)</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-blue-600">Empaneled Public &amp; Private Hospitals</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 5: Scam Warning Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-rose-600" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Critical Warning: Watch Out for Fake Rashan Registration Scams
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 space-y-4 text-xs font-sans">
            <div className="space-y-2 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              <p>
                Because food subsidies are high in demand, fraudsters regularly create fake Facebook posts and WhatsApp chains claiming: <em>&quot;Ehsaas Rashan Package Rs. 25,000 cash approved, click this link to register!&quot;</em>
              </p>
              <p>
                Protect yourself and your family with these 3 safety rules:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800 space-y-1.5">
                <span className="font-mono font-bold text-rose-700 dark:text-rose-400 uppercase text-xs block">1. 100% Free Registration</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Government welfare programs NEVER charge an enrollment fee. Anyone asking for Rs. 500 to Rs. 2,000 via EasyPaisa or JazzCash is an impostor.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800 space-y-1.5">
                <span className="font-mono font-bold text-rose-700 dark:text-rose-400 uppercase text-xs block">2. Only 8123 and 8171</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Official SMS comes ONLY from 8123 or 8171. If you receive a text from a standard 11-digit mobile number (e.g. 0300-XXXXXXX), it is a fake phishing message.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800 space-y-1.5">
                <span className="font-mono font-bold text-rose-700 dark:text-rose-400 uppercase text-xs block">3. Never Share OTPs</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Never give away your mobile wallet PIN or the OTP sent to your phone. Scammers use fake Rashan verification promises to wipe out your bank balance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Frequently Asked Questions */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Real Answers, No Fluff)
            </h2>
          </div>

          <div className="space-y-3 font-sans text-xs">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Is this program different from BISP Kafaalat quarterly payments?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Yes. BISP Kafaalat pays cash (Rs. 10,500 every three months) to eligible female heads of families. Rashan Riayat provides an on-the-spot grocery price discount when buying flour, ghee, sugar, and pulses at Utility Stores. You can be eligible for both if your PMT score qualifies.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Why does my CNIC reply say &quot;Record not found&quot; on 8123?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                This means your CNIC is not yet enrolled in the updated NSER dynamic survey database. Visit your local BISP Tehsil Center with your original CNIC and household electricity bill to complete the free survey.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Is there any fee to check status on 8123?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                No. Standard mobile network SMS charges (approx. Rs. 1 to 2) apply. There is no official enrollment fee whatsoever.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Which stores accept the Ehsaas Rashan discount?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                All branches of the Utility Stores Corporation (USC) across Pakistan, as well as private neighborhood Karyana merchants who have installed the official Android POS device and display the authorized Rashan banner.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Related Links */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Welfare &amp; Financial Relief Utilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/welfare/pmt-score-explained-bisp-eligibility-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">PMT Score Guide</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                PMT Score Explained 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                How poverty score cut-offs determine welfare and subsidy eligibility.
              </p>
            </Link>

            <Link
              href="/welfare/bisp-kafaalat-vs-nashonuma-vs-taleemi-wazaif-explained-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-seal font-bold uppercase block">Welfare Comparison</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                BISP Kafaalat vs. Nashonuma vs. Taleemi Wazaif
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Quarterly stipends, nutrition support, and education allowances.
              </p>
            </Link>

            <Link
              href="/welfare/eobi-pension-check-cnic-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-emerald-600 font-bold uppercase block">Pension Portal</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                EOBI Pension Check by CNIC 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Official EOBI portal verification and monthly pension withdrawal rules.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
