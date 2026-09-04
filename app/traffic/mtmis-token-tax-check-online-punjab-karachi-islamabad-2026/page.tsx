import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram } from '@/components/visuals';
import {
  Car,
  Search,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Smartphone,
  CreditCard,
  Building,
  CheckCircle2,
  HelpCircle,
  Clock,
  Coins,
  MapPin,
  Check,
  AlertCircle,
  Layers,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MTMIS Token Tax Check Online 2026: Punjab, Karachi & Islamabad Guide',
  description:
    'Complete verified guide to online vehicle verification and token tax check across Punjab (MTMIS), Sindh/Karachi (Excise Sindh), and Islamabad (City App). Check ownership, engine/chassis numbers, revised FY2026-27 tax slabs, and cashless payment methods.',
  keywords: [
    'mtmis punjab token tax',
    'mtmis karachi',
    'mtmis islamabad token tax',
    'mtmis vehicle verification online 2026',
    'punjab excise token tax check online',
    'sindh excise vehicle verification karachi',
    'islamabad excise token tax invoice value',
    'epay punjab token tax psid',
    'online car verification pakistan',
  ],
  openGraph: {
    title: 'MTMIS Token Tax Check Online 2026: Punjab, Karachi & Islamabad Guide',
    description:
      'Official portals, revised FY2026-27 tax slabs, and payment guides for Punjab MTMIS, Sindh Excise, and Islamabad Federal vehicle token tax.',
    url: 'https://www.pakistaninfohub.com/traffic/mtmis-token-tax-check-online-punjab-karachi-islamabad-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/traffic/mtmis-token-tax-check-online-punjab-karachi-islamabad-2026',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Traffic & Vehicle Services', item: 'https://www.pakistaninfohub.com/traffic' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'MTMIS Token Tax Check Online 2026',
          item: 'https://www.pakistaninfohub.com/traffic/mtmis-token-tax-check-online-punjab-karachi-islamabad-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'MTMIS Token Tax Check Online 2026: Punjab, Karachi & Islamabad Systems Explained',
      description:
        'A comprehensive public guide clarifying provincial vehicle verification systems in Pakistan: Punjab MTMIS, Sindh Excise, Islamabad Federal portal, revised 2026-27 invoice-value tax rates, and cashless ePay processing.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-04',
      dateModified: '2026-09-04',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/traffic/mtmis-token-tax-check-online-punjab-karachi-islamabad-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Check and Pay Vehicle Token Tax Online in Pakistan',
      description: 'Step-by-step procedure to verify vehicle registration details and pay annual token tax via provincial excise portals.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Identify Correct Provincial Portal',
          text: 'Use MTMIS for Punjab (mtmis.excise.punjab.gov.pk), Sindh Excise for Karachi (excise.gos.pk), or Islamabad Excise for ICT (islamabadexcise.gov.pk).',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Enter Vehicle Registration Number',
          text: 'Enter the exact alphanumeric registration number (e.g., LEA-21-1234 or ICT-ABC-123) to retrieve live ownership and tax records.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Inspect Token Tax Due Date & Arrears',
          text: 'Verify the "Tax Paid Upto" date and review any outstanding late payment surcharges.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Generate Payment PSID via Official App',
          text: 'Use ePay Punjab for Punjab, City Islamabad App for ICT, or ePay Sindh for Karachi to generate a 17-digit or 19-digit PSID.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Pay Cashless via 1Link or Mobile Wallet',
          text: 'Settle the tax amount via JazzCash, Easypaisa, mobile banking app, or ATM using the generated PSID.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is MTMIS available in Karachi or Islamabad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Technically no. "MTMIS" (Motor Transport Management Information System) is specifically the trademarked IT system operated by the Punjab Information Technology Board (PITB) for Punjab Excise. While motorists colloquially search for "MTMIS Karachi" or "MTMIS Islamabad", Sindh operates under the Sindh Excise & Taxation Department (excise.gos.pk), and Islamabad operates under the Islamabad Excise & Taxation Department (islamabadexcise.gov.pk).',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I check if my token tax is paid without an app?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In Punjab, you can check via SMS by sending your vehicle registration number (e.g. LEA 1234) to shortcode 8785. Alternatively, open any mobile web browser and visit mtmis.excise.punjab.gov.pk (for Punjab), excise.gos.pk (for Sindh), or islamabadexcise.gov.pk (for Islamabad) without installing any application.',
          },
        },
        {
          '@type': 'Question',
          name: 'What info do I need to check my vehicle online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You only need the official vehicle registration number (letters and numbers). Some portals (like Islamabad) may optionally prompt for the chassis number or owner CNIC to confirm identity before revealing full sensitive ownership records.',
          },
        },
        {
          '@type': 'Question',
          name: 'My Islamabad vehicle isn’t on a smart card — what do I do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vehicles registered in Islamabad that still have legacy paper registration books cannot pay token tax online through the City Islamabad App. The owner must physically visit the Excise & Taxation Office in Sector H-9 Islamabad with the original registration book, CNIC, and vehicle to convert the record to a computerized Smart Card before digital token tax payments become active.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I verify a vehicle before buying it?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, this is strongly recommended. Checking a vehicle on the respective provincial portal before purchasing confirms whether the seller is the legal registered owner on government record, verifies that the engine and chassis numbers match the physical stamps, and ensures there are no unpaid token tax arrears or active police seizure flags.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if I don’t pay token tax on time?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Late payment attracts statutory compounding penalties (typically 10% to 100% of the principal tax amount depending on duration of delay). In addition, traffic police can impound the vehicle or confiscate registration documents during routine highway and city checkpoints, and ownership transfer is legally blocked until all arrears are cleared.',
          },
        },
      ],
    },
  ],
};

export default function MtmisTokenTaxPage() {
  const breadcrumbs = [
    { nameEn: 'Traffic & Vehicle Services', nameUr: 'ٹریفک و گاڑیوں کی سروسز', url: '/traffic' },
    { nameEn: 'MTMIS Token Tax Check Online 2026', nameUr: 'ایم ٹی ایم آئی ایس ٹوکن ٹیکس چیک 2026' },
  ];

  const workflowSteps = [
    {
      stepNumber: 1,
      titleEn: 'Select Correct Provincial Portal',
      titleUr: 'درست صوبائی پورٹل کا انتخاب',
      descEn: 'Punjab: mtmis.excise.punjab.gov.pk | Sindh: excise.gos.pk | Islamabad: islamabadexcise.gov.pk.',
      descUr: 'پنجاب، سندھ یا اسلام آباد کے لیے متعلقہ سرکاری ویب سائٹ کا انتخاب کریں۔',
      badgeEn: 'PORTAL SELECTION',
      badgeUr: 'پورٹل کا انتخاب',
    },
    {
      stepNumber: 2,
      titleEn: 'Enter Vehicle Registration Number',
      titleUr: 'گاڑی کا رجسٹریشن نمبر درج کریں',
      descEn: 'Input the alphanumeric plate number (e.g., LEA-20-4567 or ICT-XYZ-890) without special characters.',
      descUr: 'گاڑی کی نمبر پلیٹ کا مکمل نمبر بغیر کسی غیر ضروری علامت کے درج کریں۔',
      badgeEn: 'INSTANT LOOKUP',
      badgeUr: 'فوری تصدیق',
    },
    {
      stepNumber: 3,
      titleEn: 'Review Ownership & Tax Paid Status',
      titleUr: 'مالک کے کوائف اور ٹیکس ریکارڈ کی جانچ',
      descEn: 'Verify vehicle make, model, chassis, engine number, and the exact "Tax Paid Upto" date displayed.',
      descUr: 'گاڑی کا چیسس، انجن نمبر، مالک کا نام اور آخری ادا شدہ ٹوکن ٹیکس کی تاریخ دیکھیں۔',
      badgeEn: 'FREE VERIFICATION',
      badgeUr: 'مفت تصدیق',
    },
    {
      stepNumber: 4,
      titleEn: 'Generate Payment PSID',
      titleUr: 'آن لائن ادائیگی کے لیے PSID بنائیں',
      descEn: 'To pay due tax, launch ePay Punjab, City Islamabad App, or ePay Sindh to calculate tax and generate a PSID.',
      descUr: 'ٹیکس ادا کرنے کے لیے متعلقہ ایپ سے چالان (PSID) جنریٹ کریں۔',
      badgeEn: '1LINK / EPAY',
      badgeUr: 'ای پے سسٹم',
    },
    {
      stepNumber: 5,
      titleEn: 'Complete Cashless Payment',
      titleUr: 'کیش لیس فیس کی ادائیگی',
      descEn: 'Pay via JazzCash, Easypaisa, mobile banking app, or ATM. Status updates to "Paid" in the system automatically.',
      descUr: 'بینکنگ ایپ یا موبائل والٹ سے فیس جمع کروائیں؛ سسٹم میں اسٹیٹس خودکار طور پر اپ ڈیٹ ہو جائے گا۔',
      badgeEn: 'INSTANT CLEARANCE',
      badgeUr: 'فوری کلیئرنس',
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
            <InteractiveToolBadge labelEn="VEHICLE EXCISE PORTALS" labelUr="ایکسائز و موٹر وہیکل پورٹل" variant="seal" />
            <VerifiedBadge textEn="2026-27 TAX RULES" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            MTMIS Token Tax Check Online 2026: Punjab, Karachi &amp; Islamabad Guide
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              ایم ٹی ایم آئی ایس ٹوکن ٹیکس آن لائن چیک: پنجاب، کراچی، اسلام آباد اور کے پی کے
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            A comprehensive, verified guide clarifying vehicle verification across Pakistan: resolving the common
            &quot;MTMIS Karachi&quot; and &quot;MTMIS Islamabad&quot; search misnomer, detailing official portals for every
            province, explaining the revised FY2026-27 invoice-value tax rates, and guiding you through cashless token tax
            settlement via ePay.
          </p>
        </header>

        {/* Direct Answer Box (56 words - within 40-60 words) */}
        <DirectAnswerBox
          topicTitleEn="Can You Check Token Tax on MTMIS for Karachi and Islamabad?"
          topicTitleUr="کیا کراچی اور اسلام آباد کے لیے بھی ایم ٹی ایم آئی ایس ہے؟"
          answerEn="MTMIS specifically refers to Punjab's Motor Transport Management Information System (mtmis.excise.punjab.gov.pk). Searchers looking for Karachi or Islamabad are using the name colloquially; Sindh vehicles are verified via excise.gos.pk, while Islamabad uses islamabadexcise.gov.pk and the City Islamabad App. This guide covers verified token tax checking, revised 2026-27 tax slabs, and cashless online payments across all three jurisdictions."
          answerUr="لفظ 'MTMIS' دراصل پنجاب کے موٹر ٹرانسپورٹ مینجمنٹ سسٹم کے لیے مخصوص ہے۔ کراچی اور اسلام آباد میں اس نام سے کوئی الگ سسٹم نہیں ہے۔ سندھ کی گاڑیاں excise.gos.pk اور اسلام آباد کی گاڑیاں islamabadexcise.gov.pk اور سٹی ایپ کے ذریعے چیک ہوتی ہیں۔ یہ گائیڈ پنجاب، سندھ اور اسلام آباد کے تصدیقی پورٹلز، نئے 2026-27 ٹیکس سلیبس اور آن لائن ادائیگی کی تفصیل فراہم کرتی ہے۔"
        />

        {/* Section 1: Resolving the Naming Confusion */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Search className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Resolving the MTMIS Name Confusion: Punjab vs. Karachi vs. Islamabad
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 space-y-2 text-xs sm:text-sm font-sans">
            <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-bold text-sm sm:text-base">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0" />
              <span>Searching for &quot;MTMIS Karachi&quot; or &quot;MTMIS Islamabad&quot;? Here is the Reality</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              In Pakistan, motorists frequently use <strong>&quot;MTMIS&quot;</strong> as a generic umbrella term for checking car registration
              and token tax online, much like using &quot;Photocopy&quot; for xerox. However, <strong>MTMIS (Motor Transport Management Information System)
              is strictly the registered system of Punjab Excise</strong>, built and maintained by the Punjab Information Technology Board (PITB).
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              If your car has a <strong>Sindh/Karachi</strong> number plate, searching on Punjab&apos;s MTMIS will return &quot;Record Not Found.&quot;
              You must use <strong>Sindh Excise (excise.gos.pk)</strong>. Similarly, <strong>Islamabad (ICT)</strong> vehicles must be verified
              through the <strong>Islamabad Excise portal (islamabadexcise.gov.pk)</strong> or the <strong>City Islamabad App</strong>.
            </p>
          </div>
        </section>

        {/* Section 2: Master Province-by-Province Comparison Table */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Province-by-Province Vehicle Verification &amp; Token Tax Portals
            </h2>
          </div>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[640px]">
                <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 text-left">Province / Jurisdiction</th>
                    <th className="px-4 py-3 text-left">Official System Name</th>
                    <th className="px-4 py-3 text-left">Official Verification Portal</th>
                    <th className="px-4 py-3 text-left">How to Pay Token Tax</th>
                    <th className="px-4 py-3 text-left">Key Prerequisite</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-sm">
                      Punjab
                    </td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">
                      MTMIS Punjab
                    </td>
                    <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                      mtmis.excise.punjab.gov.pk
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-700 dark:text-slate-200">
                      <strong>ePay Punjab App</strong> (17-digit PSID via 1Link/ATM)
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                      SMS check via <strong>8785</strong> also active
                    </td>
                  </tr>

                  <tr className="bg-slate-50/60 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-sm">
                      Sindh (Karachi)
                    </td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">
                      Sindh Excise &amp; Taxation
                    </td>
                    <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                      excise.gos.pk
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-700 dark:text-slate-200">
                      <strong>ePay Sindh</strong> / <strong>Excise Sindh App</strong> (19-digit PSID)
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                      Select 2-wheel / 4-wheel category on portal
                    </td>
                  </tr>

                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-sm">
                      Islamabad (ICT)
                    </td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">
                      Islamabad Excise Online
                    </td>
                    <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                      islamabadexcise.gov.pk
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-700 dark:text-slate-200">
                      <strong>City Islamabad App</strong> / <strong>PAK App</strong>
                    </td>
                    <td className="px-4 py-3 text-xs font-bold text-amber-700 dark:text-amber-300">
                      Must be converted to Smart Card
                    </td>
                  </tr>

                  <tr className="bg-slate-50/60 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-sm">
                      Khyber Pakhtunkhwa
                    </td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">
                      KP Excise MV Records
                    </td>
                    <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                      kpexcise.gov.pk/mvrecords
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-700 dark:text-slate-200">
                      <strong>Zama KP App</strong> (e-Payment PSID)
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                      District code selection required on search
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 3: Punjab MTMIS & FY2026-27 Rules */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Building className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Punjab MTMIS: Online Verification, SMS 8785 &amp; FY2026-27 Slabs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white flex items-center gap-2">
                <Search className="w-4 h-4 text-doc-brass" />
                How to Verify Punjab Vehicles
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Web Portal:</strong> Visit <code>mtmis.excise.punjab.gov.pk</code>. Enter the vehicle registration number (e.g. <code>LEA 1234</code> or <code>LEA-21-1234</code>).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>SMS Service:</strong> Type your registration number in your messaging app and send it to <strong>8785</strong> to get an instant verification SMS.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Information Displayed:</strong> Owner name, father name, chassis number, engine number, make, model, registration date, and &quot;Tax Paid Upto&quot; date.
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white flex items-center gap-2">
                <Coins className="w-4 h-4 text-doc-brass" />
                FY2026-27 Punjab Token Tax Revisions
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-doc-brass shrink-0 mt-2" />
                  <span>
                    <strong>10% Early-Payment Rebate:</strong> Punjab Excise offers a 10% rebate on annual token tax if paid on or before <strong>August 31</strong> of the financial year.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-doc-brass shrink-0 mt-2" />
                  <span>
                    <strong>Invoice-Value Shift for &gt;1000cc:</strong> For vehicles above 1000cc, Punjab moved from static engine brackets to calculating tax as a percentage of the vehicle invoice value (e.g. 0.3% for 1001–2000cc, 0.4% above 2000cc).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-doc-brass shrink-0 mt-2" />
                  <span>
                    <strong>Paying via ePay:</strong> Open <strong>ePay Punjab</strong>, choose Excise &amp; Taxation &gt; Token Tax, enter plate number, and pay the generated 17-digit PSID via any 1Link banking app or ATM.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Islamabad Finance Act 2026 & Smart Card Prerequisite */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <CreditCard className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Islamabad (ICT): Finance Act 2026 Invoice-Value Rules &amp; Smart Card Rule
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 font-sans text-xs sm:text-sm">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Under the <strong>Finance Act 2026</strong>, the Islamabad Capital Territory (ICT) administration overhauled the vehicle token tax
              framework, eliminating fixed engine-capacity brackets for vehicles above 1,000cc:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-mono text-xs text-doc-brass font-bold uppercase block">Up to 1,000cc</span>
                <span className="font-serif font-bold text-base text-doc-ink dark:text-white block">PKR 20,000 / Year</span>
                <p className="text-xs text-slate-500">Flat statutory annual token tax rate regardless of vehicle price.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-mono text-xs text-doc-brass font-bold uppercase block">1,001cc to 2,000cc</span>
                <span className="font-serif font-bold text-base text-doc-ink dark:text-white block">0.25% of Invoice Value</span>
                <p className="text-xs text-slate-500">Calculated on the vehicle&apos;s original factory/dealer invoice amount.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-mono text-xs text-doc-brass font-bold uppercase block">Above 2,000cc</span>
                <span className="font-serif font-bold text-base text-doc-ink dark:text-white block">0.35% of Invoice Value</span>
                <p className="text-xs text-slate-500">Higher bracket for luxury and commercial SUVs based on original invoice.</p>
              </div>
            </div>

            {/* Smart Card Caveat */}
            <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 space-y-2">
              <div className="flex items-center gap-2 text-red-800 dark:text-red-300 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Critical Islamabad Requirement: Must Be on Smart Card</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                The <strong>City Islamabad App</strong> and <strong>PAK App</strong> retrieve vehicle records <strong>only for vehicles that have already been converted to a computerized Smart Card</strong>.
                If your car still has the old physical registration book (paper booklet), the system will fail to generate an online PSID.
                <strong>What to do:</strong> The vehicle owner must visit the Excise &amp; Taxation Office in Sector H-9 Islamabad with the original registration book, CNIC, and car to convert the file to a Smart Card before online payments work.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Sindh / Karachi & KP Portals */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Sindh (Karachi) &amp; Khyber Pakhtunkhwa (KP) Official Systems
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">Sindh (Karachi) Excise Online</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Sindh vehicles are checked via the dedicated <strong>Sindh Excise, Taxation &amp; Narcotics Control Department</strong> portal:
              </p>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                <li><strong>Website:</strong> <code>excise.gos.pk/vehicle/vehicle_search</code></li>
                <li><strong>Mobile App:</strong> <em>Excise Sindh</em> (Google Play &amp; App Store)</li>
                <li><strong>Payment:</strong> <em>ePay Sindh</em> (<code>epay.gos.pk</code>) generates a 19-digit PSID for 1Link payment</li>
                <li><strong>Coverage:</strong> All Karachi districts, Hyderabad, Sukkur, Larkana, and Mirpurkhas</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">Khyber Pakhtunkhwa (KP) MV Records</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                KP vehicle verification and token tax payments are managed through:
              </p>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                <li><strong>Website:</strong> <code>kpexcise.gov.pk/mvrecords</code></li>
                <li><strong>Mobile App:</strong> <em>Zama KP</em> (official KP provincial citizen app)</li>
                <li><strong>Payment:</strong> In-app PSID generation for mobile wallets and bank transfers</li>
                <li><strong>Coverage:</strong> Peshawar, Mardan, Abbottabad, Swat, and all settled districts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: ProcessStepsDiagram */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Car className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step Online Verification &amp; Payment Process Flow
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Follow this verified workflow to confirm ownership records and settle annual token tax across any provincial jurisdiction.
          </p>

          <ProcessStepsDiagram
            steps={workflowSteps}
            titleEn="Verified Cross-Province Token Tax Process"
            titleUr="تمام صوبوں کے لیے ٹوکن ٹیکس چیک اور ادائیگی کا طریقہ"
            subtitleEn="Chronological sequence from provincial portal selection to cashless receipt"
            subtitleUr="صوبائی پورٹل کے انتخاب سے لے کر کیش لیس رسید حاصل کرنے تک کے مراحل"
            badgeEn="OFFICIAL 2026 WORKFLOW"
            badgeUr="سرکاری طریقہ کار 2026"
            variant="dark"
          />
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 7: Cross-Linking to Traffic Cluster */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Related Traffic &amp; Vehicle Services on Pakistan Info Hub
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/traffic/token-tax-calculator-2026"
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Calculator Tool</span>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  Token Tax Calculator 2026 →
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Calculate annual excise token dues by engine displacement, filer status &amp; vehicle type.
                </p>
              </div>
              <span className="text-xs font-semibold text-doc-brass mt-3 inline-block">Calculate Tax →</span>
            </Link>

            <Link
              href="/traffic/vehicle-ownership-transfer-online-punjab-2026"
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Transfer Guide</span>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  Vehicle Ownership Transfer Punjab →
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Step-by-step biometric vehicle transfer via Pak ID app and ePay Punjab.
                </p>
              </div>
              <span className="text-xs font-semibold text-doc-brass mt-3 inline-block">Transfer Guide →</span>
            </Link>

            <Link
              href="/traffic/e-challan-check-online"
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Safe City Tool</span>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  E-Challan Check Online →
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Lookup PSCA electronic traffic camera challans by CNIC and vehicle number.
                </p>
              </div>
              <span className="text-xs font-semibold text-doc-brass mt-3 inline-block">Check Challans →</span>
            </Link>

            <Link
              href="/traffic/driving-license-status-check-online-2026"
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">License Tracking</span>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  Driving License Tracker →
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Track DLIMS driving license smart card dispatch and testing appointments.
                </p>
              </div>
              <span className="text-xs font-semibold text-doc-brass mt-3 inline-block">Track License →</span>
            </Link>
          </div>
        </section>

        {/* Section 8: Frequently Asked Questions */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (MTMIS &amp; Token Tax Online)
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'Is MTMIS available in Karachi or Islamabad?',
                a: 'Technically no. "MTMIS" (Motor Transport Management Information System) is specifically the trademarked IT system operated by the Punjab Information Technology Board (PITB) for Punjab Excise. While motorists colloquially search for "MTMIS Karachi" or "MTMIS Islamabad", Sindh operates under the Sindh Excise & Taxation Department (excise.gos.pk), and Islamabad operates under the Islamabad Excise & Taxation Department (islamabadexcise.gov.pk).',
              },
              {
                q: 'How do I check if my token tax is paid without an app?',
                a: 'In Punjab, you can check via SMS by sending your vehicle registration number (e.g. LEA 1234) to shortcode 8785. Alternatively, open any mobile web browser and visit mtmis.excise.punjab.gov.pk (for Punjab), excise.gos.pk (for Sindh), or islamabadexcise.gov.pk (for Islamabad) without installing any application.',
              },
              {
                q: 'What info do I need to check my vehicle online?',
                a: 'You only need the official vehicle registration number (letters and numbers). Some portals (like Islamabad) may optionally prompt for the chassis number or owner CNIC to confirm identity before revealing full sensitive ownership records.',
              },
              {
                q: 'My Islamabad vehicle isn’t on a smart card — what do I do?',
                a: 'Vehicles registered in Islamabad that still have legacy paper registration books cannot pay token tax online through the City Islamabad App. The owner must physically visit the Excise & Taxation Office in Sector H-9 Islamabad with the original registration book, CNIC, and vehicle to convert the record to a computerized Smart Card before digital token tax payments become active.',
              },
              {
                q: 'Can I verify a vehicle before buying it?',
                a: 'Yes, this is strongly recommended. Checking a vehicle on the respective provincial portal before purchasing confirms whether the seller is the legal registered owner on government record, verifies that the engine and chassis numbers match the physical stamps, and ensures there are no unpaid token tax arrears or active police seizure flags.',
              },
              {
                q: 'What happens if I don’t pay token tax on time?',
                a: 'Late payment attracts statutory compounding penalties (typically 10% to 100% of the principal tax amount depending on duration of delay). In addition, traffic police can impound the vehicle or confiscate registration documents during routine highway and city checkpoints, and ownership transfer is legally blocked until all arrears are cleared.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="doc-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-doc-brass shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Official Sources Cited */}
        <section className="text-xs text-slate-500 dark:text-slate-400 font-sans space-y-2 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-300">Official Provincial Excise Portals Verified:</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2">
            {[
              { label: 'Punjab MTMIS Official Portal', url: 'https://mtmis.excise.punjab.gov.pk/' },
              { label: 'Sindh Excise, Taxation & Narcotics Control', url: 'https://excise.gos.pk/' },
              { label: 'Islamabad Excise & Taxation Department (ICT)', url: 'https://islamabadexcise.gov.pk/' },
              { label: 'KP Excise, Taxation & Narcotics Control', url: 'https://kpexcise.gov.pk/mvrecords' },
            ].map((src) => (
              <a
                key={src.url}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-doc-seal transition"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{src.label}:</span>
                <span className="font-mono underline">{src.url}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
