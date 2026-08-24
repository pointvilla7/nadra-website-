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
  Home,
  Building,
  FileCheck,
  Send,
  FileText,
  BadgeCheck,
  CreditCard,
  Landmark,
  FileSpreadsheet,
  Check,
  AlertCircle,
  Receipt,
  Scale
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Property Tax Online Check & Payment in Pakistan 2026: Punjab, Sindh & KP Portals | Pakistan Info Hub',
  description:
    'Complete guide to checking and paying annual urban property tax online in Pakistan: How to use ePay Punjab (PT-10 number), ePay Sindh (Property Account Number), generate 1-Link PSIDs, claim early payment rebates, and avoid late surcharges.',
  keywords: [
    'property tax online check pakistan 2026',
    'epay punjab property tax pt-10 psid',
    'sindh excise property tax portal karachi',
    'how to pay property tax online jazzcash easypaisa',
    'property tax vs stamp duty difference',
    'excise taxation department property tax rebate',
  ],
  openGraph: {
    title: 'Property Tax Online Check & Payment in Pakistan 2026: Provincial Guide',
    description:
      'Official citizen guide to annual property tax verification and online payment via ePay Punjab, ePay Sindh, and 1-Link PSID banking across Pakistan.',
    url: 'https://www.pakistaninfohub.com/property/property-tax-online-check-pay-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/property/property-tax-online-check-pay-2026' },
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
          name: 'Property & Land Records',
          item: 'https://www.pakistaninfohub.com/property',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Property Tax Online Check & Pay (2026)',
          item: 'https://www.pakistaninfohub.com/property/property-tax-online-check-pay-2026',
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Check and Pay Annual Property Tax Online in Pakistan',
      description:
        'Official step-by-step procedure to check urban immovable property tax dues and pay digitally via provincial government portals and 1-Link PSID.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Locate Your Unique Property Identification Number',
          text: 'Find your unique 17-digit Property Tax Number (PT-10 / PIN) from a previous tax challan in Punjab or your Property Account Number in Sindh.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Enter Number on Provincial ePay Portal',
          text: 'Open ePay Punjab (epay.punjab.gov.pk), ePay Sindh (epay.gos.pk), or taxportal.excise.gos.pk and select "Excise & Taxation > Property Tax".',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Generate 1-Link PSID Number',
          text: 'Review the assessed annual tax, applicable early-payment rebate, and generate your 1-Link Payment Slip Identifier (PSID).',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Pay Online via Banking App or Mobile Wallet',
          text: 'Log into your mobile banking app, ATM, JazzCash, or EasyPaisa, navigate to Bill Payment / 1-Bill Gov Dues, enter the PSID, and complete payment.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the difference between Property Tax and Stamp Duty (e-Stamping)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Stamp Duty (paid via e-Stamping Challan 32-A) is a ONE-TIME transaction tax paid during the purchase, sale, or transfer of a property. Property Tax is an ANNUAL recurring municipal tax collected every year by the provincial Excise and Taxation Department on properties you already own, calculated based on the property’s Annual Rental Value (ARV), location, and covered area.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I find my Property Tax Number if I lost my previous bill?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can retrieve your property tax identifier by: (1) Visiting your district Excise and Taxation office with your property registry/deed, (2) Searching by owner CNIC or property location on the provincial Excise web portal, or (3) Calling the provincial Excise helpline (1035 in Punjab or 021-111-374-634 in Sindh).',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a discount or rebate for paying property tax early in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! In Punjab, the Excise and Taxation Department typically offers a 5% rebate on the total annual property tax for taxpayers who pay their full annual dues in a lump sum on or before September 30 of the financial year. Sindh and other provinces also announce periodic early-filing incentives.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I still pay property tax in person at a bank branch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. You can generate a computerized PSID challan online and take the printed voucher to any designated commercial bank branch (National Bank of Pakistan, Bank of Punjab, Sindh Bank, etc.) or 1-Link participating Over-The-Counter (OTC) banking desk.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if I do not pay property tax on time?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under the Urban Immovable Property Tax Act 1958, non-payment of property tax incurs monthly cumulative penalty surcharges. Continued non-compliance can lead to the issuance of attachment warrants, freezing of property transfer NOCs, and physical sealing of commercial or rented premises by the Excise inspectorate.',
          },
        },
      ],
    },
  ],
};

export default function PropertyTaxGuidePage() {
  const breadcrumbs = [
    { nameEn: 'Property & Land Records', nameUr: 'جائیداد اور اراضی ریکارڈ', url: '/property' },
    { nameEn: 'Property Tax Online Check & Pay (2026)', nameUr: 'پراپرٹی ٹیکس آن لائن چیک و ادائیگی 2026' },
  ];

  const taxSteps = [
    {
      number: 1,
      icon: <Receipt className="w-5 h-5" />,
      titleEn: 'Find Your Property PIN / PT-10',
      titleUr: 'پراپرٹی نمبر یا پی ٹی 10 حاصل کریں',
      descEn: 'Locate your 17-digit property tax number from an old PT-10 challan (Punjab) or Property Account Number (Sindh).',
      descUr: 'سابقہ ٹیکس چالان سے اپنا 17 ہندسوں کا پراپرٹی شناختی نمبر یا اکاؤنٹ نمبر دیکھیں۔',
      tagEn: 'Identifier Lookup',
      tagUr: 'نمبر تلاش',
    },
    {
      number: 2,
      icon: <Building className="w-5 h-5" />,
      titleEn: 'Enter on Provincial Portal',
      titleUr: 'صوبائی ای پے پورٹل پر اندراج',
      descEn: 'Open ePay Punjab (epay.punjab.gov.pk) or ePay Sindh (epay.gos.pk) and select "Property Tax".',
      descUr: 'ای پے پنجاب یا ای پے سندھ پورٹل کھول کر پراپرٹی ٹیکس کی سروس منتخب کریں۔',
      tagEn: 'Online Portal',
      tagUr: 'پورٹل لاگ ان',
    },
    {
      number: 3,
      icon: <FileText className="w-5 h-5" />,
      titleEn: 'Generate 1-Link PSID',
      titleUr: 'پی ایس آئی ڈی چالان بنائیں',
      descEn: 'Review the calculated annual tax dues, apply available early-rebates, and generate your 1-Link PSID.',
      descUr: 'سالانہ ٹیکس واجبات اور رعایتی فیس چیک کر کے 1-Link پی ایس آئی ڈی تیار کریں۔',
      tagEn: 'Challan Created',
      tagUr: 'چالان جنریشن',
    },
    {
      number: 4,
      icon: <CreditCard className="w-5 h-5" />,
      titleEn: 'Pay via Mobile Bank / Wallet',
      titleUr: 'بینکنگ ایپ یا ایزی پیسہ سے ادائیگی',
      descEn: 'Pay using your mobile banking app, ATM, JazzCash, or EasyPaisa under "1-Bill / Gov Taxes" and save the receipt.',
      descUr: 'موبائل بینکنگ ایپ یا ڈیجیٹل والٹ سے 1-Bill منتخب کر کے فوری ادائیگی کریں۔',
      tagEn: 'Instant Clearance',
      tagUr: 'فوری تصدیق',
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
            <InteractiveToolBadge labelEn="PROVINCIAL TAX DIRECTORY" labelUr="صوبائی پراپرٹی ٹیکس پورٹل" variant="navy" />
            <VerifiedBadge textEn="EXCISE & ePAY PORTALS 2026" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Property Tax Online Check &amp; Payment in Pakistan (2026 Guide)
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پراپرٹی ٹیکس آن لائن چیک اور ادائیگی: پنجاب، سندھ، کے پی اور ای پے پی ایس آئی ڈی رہنمائی
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Own a residential or commercial property in Pakistan? Here is the complete guide to checking your annual property tax dues online, finding your PT-10 / Property Account Number, generating a 1-Link PSID on ePay portals, and claiming early-payment rebates.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Check and Pay Property Tax Online in Pakistan"
          topicTitleUr="پاکستان میں پراپرٹی ٹیکس آن لائن چیک اور ادا کیسے کریں؟"
          answerEn="Property tax is an annual recurring provincial tax levied on urban properties, separate from one-time stamp duty. In Punjab, check and pay via ePay Punjab (epay.punjab.gov.pk) or Excise portal (excise.punjab.gov.pk) using your PT-10 number. In Sindh, pay via ePay Sindh (epay.gos.pk) or taxportal.excise.gos.pk using your Property Account Number. Generate a 1-Link PSID to pay via mobile banking."
          answerUr="پراپرٹی ٹیکس ایک سالانہ صوبائی ٹیکس ہے جو شہری اراضی اور مکانات پر لاگو ہوتا ہے۔ پنجاب میں ای پے پنجاب (epay.punjab.gov.pk) پر پی ٹی 10 نمبر سے اور سندھ میں ای پے سندھ (epay.gos.pk) پر پراپرٹی اکاؤنٹ نمبر سے چالان بنتا ہے۔ 1-Link پی ایس آئی ڈی کے ذریعے موبائل بینکنگ یا ایزی پیسہ سے گھر بیٹھے ادائیگی کی جا سکتی ہے۔"
        />

        {/* Conversational Intro: Distinction from Stamp Duty */}
        <section className="p-6 rounded-2xl bg-amber-50/70 dark:bg-slate-900/80 border border-amber-200/80 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-doc-seal dark:text-amber-400 font-serif font-bold text-lg">
            <Home className="w-5 h-5 shrink-0" />
            <h2>Annual Property Tax vs. One-Time Stamp Duty: The Vital Distinction</h2>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            A frequent confusion among Pakistani property owners is mixing up <strong>Stamp Duty (e-Stamping)</strong> with <strong>Urban Immovable Property Tax (UIPT)</strong>.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            When you purchase a house or plot, you pay <em>Stamp Duty, TMA Transfer Tax, and FBR Section 236-K taxes once</em> to register the deed. In contrast, <strong>Property Tax is a recurring annual municipal tax</strong> collected every year by the provincial Excise and Taxation Department to fund public roads, street lighting, and civic infrastructure.
          </p>
        </section>

        {/* Section 1: Provincial Breakdown */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Landmark className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Province-by-Province Official Portals &amp; Systems
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            {/* Punjab */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 font-mono font-bold text-[11px]">
                PUNJAB (LAHORE, RWP, FAISALABAD, MULTAN)
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                ePay Punjab &amp; Excise Department (PT-10 System)
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Official Portals:</strong> <code>epay.punjab.gov.pk</code> or the <em>ePay Punjab App</em>; information portal at <code>excise.punjab.gov.pk</code>.</li>
                <li><strong>Identifier Needed:</strong> 17-digit Property Identification / PIN number from your <strong>PT-10 Challan</strong>.</li>
                <li><strong>Early Rebate:</strong> Punjab offers a <strong>5% lump-sum rebate</strong> for payments completed on or before September 30 each fiscal year.</li>
                <li><strong>Payment Channels:</strong> 1-Link 1-Bill, Mobile Banking, ATMs, JazzCash, EasyPaisa, and Bank of Punjab counters.</li>
              </ul>
            </div>

            {/* Sindh */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-mono font-bold text-[11px]">
                SINDH (KARACHI, HYDERABAD, SUKKUR)
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                ePay Sindh &amp; Excise Tax Portal (taxportal.excise.gos.pk)
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Official Portals:</strong> <code>taxportal.excise.gos.pk</code> and the central payment aggregator at <code>epay.gos.pk</code>.</li>
                <li><strong>Identifier Needed:</strong> Your <strong>Property Account Number</strong> (e.g., <code>999991-02-0000095321</code>) found on municipal tax demand notices.</li>
                <li><strong>Tax Calculation Basis:</strong> Levied on the Annual Rental Value (ARV) and category zoning of the locality.</li>
                <li><strong>Payment Channels:</strong> 19-digit PSID payable via 1-Link, Debit/Credit cards, Sindh Bank, NBP, and digital wallets.</li>
              </ul>
            </div>

            {/* KP */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 font-mono font-bold text-[11px]">
                KHYBER PAKHTUNKHWA (PESHAWAR, MARDAN, ABBOTTABAD)
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                KP Excise, Taxation &amp; ePay KP
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Official Portal:</strong> <code>kpexcise.gov.pk</code> and the <em>Zama KP / ePay KP</em> platform.</li>
                <li><strong>Identifier Needed:</strong> Property Unit Identification Code assigned during urban property GIS surveys.</li>
                <li><strong>Payment Channels:</strong> Mobile banking, Bank of Khyber (BOK), and OTC cash desks.</li>
              </ul>
            </div>

            {/* Islamabad */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 font-mono font-bold text-[11px]">
                ISLAMABAD CAPITAL TERRITORY (ICT / CDA)
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                CDA Revenue Directorate &amp; 1-Bill System
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Official Portal:</strong> Capital Development Authority (CDA) digital tax system via <code>cda.gov.pk</code>.</li>
                <li><strong>Identifier Needed:</strong> Consumer / Plot Number specified on CDA water &amp; property maintenance tax bills.</li>
                <li><strong>Payment Channels:</strong> 1-Bill invoice on any Pakistani banking app or designated 1-Link ATMs.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Flow Diagram */}
        <StepFlowDiagram
          titleEn="Step-by-Step Online Property Tax Verification &amp; Payment"
          titleUr="پراپرٹی ٹیکس آن لائن تصدیق اور ادائیگی کے 4 مراحل"
          subtitleEn="How to look up dues, generate a PSID, and clear your property records"
          subtitleUr="پی ٹی 10 نمبر حاصل کرنے سے لے کر موبائل بینکنگ سے ادائیگی کا مکمل طریقہ"
          steps={taxSteps}
        />

        {/* Section 3: Finding Your Property Identification Number */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Receipt className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              How to Find Your Unique Property Tax Number (PT-10 / PIN)
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Before you can check your dues on ePay, you need your property&apos;s unique identification code. Here are the 3 ways to find it:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">1. Previous Paper Challan</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Look at the top right corner of any previous PT-10 or Excise tax challan. The 17-digit PIN (Property Identification Number) is printed clearly.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">2. Search by CNIC / Plot</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Log into the provincial Excise portal (e.g. <code>excise.punjab.gov.pk</code> or <code>taxportal.excise.gos.pk</code>) and query by owner CNIC or complete plot/sector address.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">3. Excise Office / Helpline</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Call the provincial helpline (<strong>1035</strong> in Punjab or <strong>021-111-374-634</strong> in Sindh) or visit your district Excise facilitation center with your property deed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 4: Consequences of Late Payment */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Penalties &amp; Legal Consequences of Non-Payment
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 space-y-4 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Under the <strong>Urban Immovable Property Tax Act 1958</strong>, failing to pay annual property tax carries escalating legal and financial consequences:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 space-y-1">
                <span className="font-mono font-bold text-amber-800 dark:text-amber-300 uppercase text-xs block">1. Monthly Surcharges</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Late payments incur cumulative monthly penalty surcharges added directly to your outstanding tax ledger.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 space-y-1">
                <span className="font-mono font-bold text-amber-800 dark:text-amber-300 uppercase text-xs block">2. Property Transfer Blocked</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Excise departments refuse to issue the mandatory <strong>Tax Clearance Certificate (PT-1 NOC)</strong>, blocking you from legally selling or gifting the property.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 space-y-1">
                <span className="font-mono font-bold text-amber-800 dark:text-amber-300 uppercase text-xs block">3. Sealing &amp; Attachment</span>
                <p className="text-slate-600 dark:text-slate-300">
                  For severe commercial or rental defaults, the Excise inspectorate holds statutory powers to seal premises or attach tenant rent directly to the treasury.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Frequently Asked Questions */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Property Tax Clarifications)
            </h2>
          </div>

          <div className="space-y-3 font-sans text-xs">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                What is the difference between property tax and stamp duty?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Stamp duty (via e-Stamping Challan 32-A) is a one-time transaction tax paid when purchasing or transferring ownership. Property tax is an annual recurring tax paid every year to the provincial Excise department on real estate you currently own.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Does property tax apply to all properties or are there exemptions?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Exemptions vary by province. In Punjab and Sindh, small residential houses (commonly 5 marla or under 120 sq. yards, subject to category zoning), places of worship, registered charitable trust properties, and houses owned by widows/disabled persons frequently qualify for full or partial tax exemptions upon filing an official application.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Can I pay property tax using JazzCash or EasyPaisa?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Yes! Once you generate your 17-digit PSID on ePay Punjab or ePay Sindh, open the JazzCash or EasyPaisa app, select <strong>Govt Taxes / 1-Bill</strong>, enter the PSID number, and confirm the payment.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                How do I get an official receipt after online payment?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                After completing payment, return to the ePay Punjab or ePay Sindh app and open the &quot;History / Transaction Record&quot; section to download the digitally signed computerized payment voucher with its unique transaction ID.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Related Links */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Land Records &amp; Real Estate Utilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/property/e-stamping-challan-32a-online-guide-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">One-Time Tax</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                e-Stamping Challan 32-A Guide 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Stamp duty calculations, deed registration, and Challan 32-A generation.
              </p>
            </Link>

            <Link
              href="/property/punjab-land-record-fard-verifier-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-seal font-bold uppercase block">Land Records</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Punjab Land Record Fard Verifier
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                PLRA digital Fard verification, Khasra numbers, and ownership deeds.
              </p>
            </Link>

            <Link
              href="/tax/fbr-active-taxpayer-status-helper-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-emerald-600 font-bold uppercase block">Federal FBR Tax</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                FBR Active Taxpayer Status 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Section 236-K real estate tax rates for filers vs. non-filers.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
