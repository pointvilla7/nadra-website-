import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  Building,
  FileCheck,
  Landmark,
  CreditCard,
  QrCode,
  Check,
  Receipt,
  MapPin,
  Scale
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'e-Stamping Challan 32-A Online Guide 2026 – Punjab, Sindh, KPK & Islamabad | Pakistan Info Hub',
  description:
    'Complete guide to e-Stamping in Pakistan: Generate Challan Form 32-A online via official Board of Revenue portals (Punjab, Sindh, KP & Islamabad), automatic DC valuation rate calculations, bank payments (NBP, BOP, Sindh Bank), integrated CVT/mutation fees, and authenticity verification.',
  keywords: [
    'e-Stamping Challan 32-A online Pakistan 2026',
    'Punjab e-Stamping portal es.punjab.gov.pk',
    'Sindh e-Stamping estamps.gos.pk Challan 32-A',
    'KP e-Stamping portal Challan Form 32-A',
    'Islamabad ICT e-Stamping portal 2026',
    'DC rate property valuation calculator Pakistan',
    'Stamp duty Capital Value Tax CVT registration fee Challan 32-A',
    'verify e-Stamp certificate number Pakistan',
    'Bank of Punjab NBP e-Stamp collection',
  ],
  openGraph: {
    title: 'e-Stamping Challan 32-A Online Guide 2026 – Pakistan Property Stamp Papers',
    description:
      'Step-by-step manual for generating Challan Form 32-A online, DC valuation rate calculations, bank payment options, and e-stamp verification across Punjab, Sindh, KP, and Islamabad.',
    url: 'https://www.pakistaninfohub.com/property/e-stamping-challan-32a-online-guide-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/property/e-stamping-challan-32a-online-guide-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Property & Land Mutation', item: 'https://www.pakistaninfohub.com/property' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'e-Stamping Challan 32-A Online Guide 2026',
          item: 'https://www.pakistaninfohub.com/property/e-stamping-challan-32a-online-guide-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'e-Stamping Challan 32-A Online Guide 2026: Generation, DC Rate Calculation & Bank Payment in Pakistan',
      description:
        'A definitive property legal guide explaining how e-Stamping replaced physical stamp papers in Pakistan, how to generate Challan Form 32-A online, automated DC rate calculations, and multi-tax payment.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/property/e-stamping-challan-32a-online-guide-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I need to register a user account to generate a Challan Form 32-A online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The provincial e-Stamping portals in Punjab (es.punjab.gov.pk), Sindh (estamps.gos.pk), and KPK provide public access without mandatory account registration. Any citizen, property buyer, seller, or deed writer can directly access the form, enter the transaction details, and generate a printable 32-A Challan.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I verify that an e-Stamp paper or certificate is authentic and not counterfeit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every official e-Stamp certificate contains a unique 16-character e-Stamp ID, a quick-response QR code, and a watermark. You can verify its authenticity by visiting your provincial portal\'s "Verification" section (e.g. es.punjab.gov.pk/verify) and entering the 16-character number, or by scanning the QR code with any smartphone camera.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if my Challan 32-A or issued e-Stamp certificate expires before I use it?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An unpaid Challan Form 32-A has a validity window (typically 7 to 30 days depending on provincial revenue rules) during which payment must be deposited at the bank; if it expires before payment, you simply generate a fresh Challan online for free. Once paid and the physical security e-Stamp certificate is issued by the bank, it remains legally valid for registry execution and mutation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a single Challan 32-A cover Stamp Duty, CVT, Registration Fee, and Mutation Fees together?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Modernized e-Stamping portals integrate all property transaction dues—Stamp Duty under the Stamp Act, Capital Value Tax (CVT), Registration Fees under the Registration Act, and Land Mutation / Intiqal charges—into a single consolidated Challan 32-A payment slip.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why did Pakistan replace physical traditional stamp papers with e-Stamping?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Traditional physical stamp papers were prone to widespread fraud, including back-dated paper forgery, black-market overcharging by stamp vendors, and tax leakage. The e-Stamping system uses central databases, real-time DC valuation rates, and digital watermarks to ensure 100% transparency.',
          },
        },
      ],
    },
  ],
};

export default function EStampingChallan32AGuidePage() {
  const breadcrumbs = [
    { nameEn: 'Property & Land Mutation', nameUr: 'زمین، جائیداد اور انتقال' },
    { nameEn: 'e-Stamping Challan 32-A Guide', nameUr: 'ای اسٹامپنگ چالان 32-A آن لائن گائیڈ 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="PROVINCIAL REVENUE E-SERVICES" labelUr="ای اسٹامپنگ و ریونیو سروسز" variant="seal" />
            <VerifiedBadge textEn="BOARD OF REVENUE & PITB VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            e-Stamping Challan 32-A Online Guide 2026: Generation, DC Rates &amp; Payment in Pakistan
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              ای اسٹامپنگ چالان 32-A آن لائن گائیڈ 2026: ڈی سی ریٹ، بینک ادائیگی اور تصدیق کا طریقہ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            A comprehensive, practical guide to Pakistan&apos;s digital e-Stamping system across Punjab, Sindh, Khyber
            Pakhtunkhwa, and Islamabad. Learn how Challan Form 32-A works, automated DC valuation rate calculations,
            multi-tax consolidation (Stamp Duty, CVT, Registration, Mutation), bank payment branches, and online verification.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is e-Stamping in Pakistan & How Does Challan Form 32-A Work?"
          topicTitleUr="پاکستان میں ای اسٹامپنگ کیا ہے اور چالان 32-A کیسے کام کرتا ہے؟"
          answerEn="e-Stamping is the government's digital stamp paper system (managed by provincial Boards of Revenue and PITB) that replaced physical stamp papers to eliminate fake back-dated papers and fraud. Citizens generate Challan Form 32-A online for free, which auto-calculates stamp duty and taxes based on official DC rates. After paying at designated banks (NBP, BOP, Sindh Bank, BOK) or via 1Link PSID, a tamper-proof e-stamp certificate is issued the same day."
          answerUr="ای اسٹامپنگ پنجاب، سندھ، کے پی اور اسلام آباد کے بورڈ آف ریونیو کا ڈیجیٹل سسٹم ہے جس نے جعلی اور پرانے اسٹامپ پیپرز کا خاتمہ کر دیا ہے۔ شہری پورٹل پر مفت چالان 32-A بناتے ہیں جہاں ڈی سی ریٹ کے مطابق فیس خود بخود نکل آتی ہے۔ بینک (NBP/BOP) میں ادائیگی کے بعد اسی دن کیو آر کوڈ والا اصل ای اسٹامپ مل جاتا ہے۔"
        />

        {/* Section 1: Province-by-Province Availability */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Building className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Province-by-Province e-Stamping Operational Status
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            e-Stamping is active across all major administrative territories in Pakistan, backed by official provincial
            revenue portals and designated banking networks.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="w-full text-sm font-sans">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Province / Territory</th>
                  <th className="px-4 py-3 text-left">Official Portal</th>
                  <th className="px-4 py-3 text-left">Operational Scope</th>
                  <th className="px-4 py-3 text-left">Designated Bank Network</th>
                  <th className="px-4 py-3 text-left">Digital Payment (PSID)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Punjab
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-doc-seal">
                    es.punjab.gov.pk
                  </td>
                  <td className="px-4 py-3 text-xs">
                    <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                      <Check className="w-3.5 h-3.5" /> 100% Active in all 36+ Districts
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    The Bank of Punjab (BOP) &amp; National Bank of Pakistan (NBP)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-emerald-700 dark:text-emerald-300 font-bold">
                    ePay Punjab &amp; 1Link
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Sindh
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-doc-seal">
                    estamps.gos.pk
                  </td>
                  <td className="px-4 py-3 text-xs">
                    <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                      <Check className="w-3.5 h-3.5" /> Active across Karachi, Hyderabad &amp; all Districts
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Sindh Bank &amp; National Bank of Pakistan (NBP)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-emerald-700 dark:text-emerald-300 font-bold">
                    ePay Sindh &amp; 1Link PSID
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Khyber Pakhtunkhwa (KP)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-doc-seal">
                    e-stamping.kp.gov.pk
                  </td>
                  <td className="px-4 py-3 text-xs">
                    <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                      <Check className="w-3.5 h-3.5" /> Active in Peshawar, Mardan, Swat &amp; all Districts
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    The Bank of Khyber (BOK) &amp; NBP
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-emerald-700 dark:text-emerald-300 font-bold">
                    KP Pay &amp; Digital PSID
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Islamabad Capital (ICT)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-doc-seal">
                    ict.estamp.gov.pk
                  </td>
                  <td className="px-4 py-3 text-xs">
                    <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                      <Check className="w-3.5 h-3.5" /> Active (Integrated with PLRA/PITB)
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    National Bank of Pakistan (NBP) Capital Branches
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-emerald-700 dark:text-emerald-300 font-bold">
                    1Link 1Bill PSID
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Balochistan &amp; GB
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-500">
                    estamping.gob.pk
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-500">
                    Phased Pilot in Quetta &amp; Gilgit; Transitional Barcode System
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    State Bank Treasury / NBP Principal Branches
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-500">
                    Treasury Challan 32-A
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Step-by-Step Challan 32-A Generation */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Receipt className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step: How to Generate Challan 32-A &amp; Obtain e-Stamps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Select Deed &amp; Location</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Visit your provincial e-stamping portal. Select whether you need a <strong>Non-Judicial</strong> (property sale deed, gift, mortgage, lease, affidavit) or <strong>Judicial</strong> stamp paper. Choose District, Tehsil, and Mouza.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Enter Party &amp; Land Details</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Provide CNIC numbers, names, and contact details of both the First Party (Seller/Donor) and Second Party (Buyer/Donee). Enter land area (Marla/Kanal/Sq Feet), constructed area, and Khasra/Khewat number.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Auto DC Rate Calculation</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The portal automatically cross-references the official District Collector (DC) valuation table and calculates the exact Stamp Duty, CVT, and Registration fee. Review the summary and click <strong>&quot;Generate Challan 32-A&quot;</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs">4</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Pay &amp; Receive e-Stamp</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Print Challan 32-A and pay at any designated bank branch (BOP, Sindh Bank, BOK, NBP) or pay via online PSID. The bank teller immediately prints and issues the official e-Stamp security certificate with a live QR code.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Taxes Covered by Challan 32-A */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              What Taxes &amp; Fees Does Challan 32-A Consolidate?
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Previously, citizens had to purchase separate manual treasury challans for every individual tax component.
            The e-Stamping Challan Form 32-A combines all transaction dues into one consolidated invoice:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="font-bold text-doc-seal text-sm block">1. Stamp Duty (Stamp Act 1899)</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The primary provincial levy on transferring immovable property, agreements, mortgages, powers of attorney, and legal affidavits. The rate applies directly to the official DC valuation or declared deed value (whichever is higher).
              </p>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 font-mono text-doc-ink dark:text-white">
                Calculated automatically by the portal based on property location.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm block">2. Capital Value Tax (CVT) &amp; Registration Fee</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Covers provincial Capital Value Tax on urban property transfers, along with official Sub-Registrar deed recording fees under the Registration Act 1908.
              </p>
              <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 font-mono text-emerald-700 dark:text-emerald-300 font-bold">
                Integrated in the same Challan: Single payment slip for all registry dues.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="font-bold text-doc-brass text-sm block">3. Mutation / Intiqal Fees</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Where land records are computerized under the Punjab Land Records Authority (PLRA) or provincial revenue boards, government mutation fees for updating the Fard and owner title are included.
              </p>
              <div className="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 font-mono text-amber-800 dark:text-amber-300">
                Directly syncs with Arazi Record Centers (ARC) and sub-registrar desks.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="font-bold text-purple-600 dark:text-purple-400 text-sm block">4. Local Government / Zila Council Tax</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Municipal corporation transfer taxes (such as Metropolitan Corporation Lahore (MCL) or rural Zila Council transfer tax) are computed and added seamlessly where applicable.
              </p>
              <div className="p-2.5 rounded-lg bg-purple-50 dark:bg-purple-950/40 font-mono text-purple-800 dark:text-purple-300">
                Prevents manual overcharging and eliminates hidden agent commissions.
              </div>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 4: Security, QR Code & Verification */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <QrCode className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              How to Verify Authenticity &amp; Prevent Fraud
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 font-sans text-xs">
            <div className="flex items-center gap-2 text-doc-brass font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Multi-Layer Anti-Counterfeit Security Features</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Every genuine e-Stamp paper printed by authorized bank branches carries distinct cryptographic and physical
              security markers that can be checked instantly:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                <span className="font-bold text-emerald-400 block">16-Character e-Stamp ID</span>
                <p className="text-slate-300">
                  Each certificate has a unique alphanumeric ID printed at the top. Enter this ID at <code>es.punjab.gov.pk/verify</code> or <code>estamps.gos.pk</code> to see matching buyer/seller names, amount paid, and property details.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                <span className="font-bold text-emerald-400 block">Instant QR Code Scan</span>
                <p className="text-slate-300">
                  Scan the high-density QR code on the top-right of the paper using any smartphone camera to open the live government database record showing the exact date and timestamp of issuance.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                <span className="font-bold text-emerald-400 block">Single-Use Deed Lock</span>
                <p className="text-slate-300">
                  Once a Sub-Registrar registers the deed, the e-Stamp certificate is marked as <strong>&quot;Utilized / Consumed&quot;</strong> in the central database, preventing duplicate reuse of the same paper.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Related Property Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Property &amp; Land Record Tools on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/property/punjab-land-record-fard-verifier-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">PLRA Verifier</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Punjab Fard Online Verifier 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Verify ownership title, Khewat, and Khasra online.</p>
            </Link>

            <Link
              href="/property/intiqal-registration-online-punjab"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Mutation Guide</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Intiqal Registration Online →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Complete steps for property ownership transfer.</p>
            </Link>

            <Link
              href="/property/property-tax-calculator-pakistan-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Tax Slabs</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Property Tax Slabs 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Calculate annual urban property rental value taxes.</p>
            </Link>
          </div>
        </section>

        {/* Section 6: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (e-Stamping &amp; Challan 32-A)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Do I need to register a user account to generate a Challan Form 32-A online?',
                a: 'No. The provincial e-Stamping portals in Punjab (es.punjab.gov.pk), Sindh (estamps.gos.pk), and KPK provide public access without mandatory account registration. Any citizen, property buyer, seller, or deed writer can directly access the form, enter the transaction details, and generate a printable 32-A Challan.',
              },
              {
                q: 'How do I verify that an e-Stamp paper or certificate is authentic and not counterfeit?',
                a: 'Every official e-Stamp certificate contains a unique 16-character e-Stamp ID, a quick-response QR code, and a watermark. You can verify its authenticity by visiting your provincial portal\'s "Verification" section (e.g. es.punjab.gov.pk/verify) and entering the 16-character number, or by scanning the QR code with any smartphone camera.',
              },
              {
                q: 'What happens if my Challan 32-A or issued e-Stamp certificate expires before I use it?',
                a: 'An unpaid Challan Form 32-A has a validity window (typically 7 to 30 days depending on provincial revenue rules) during which payment must be deposited at the bank; if it expires before payment, you simply generate a fresh Challan online for free. Once paid and the physical security e-Stamp certificate is issued by the bank, it remains legally valid for registry execution and mutation.',
              },
              {
                q: 'Can a single Challan 32-A cover Stamp Duty, CVT, Registration Fee, and Mutation Fees together?',
                a: 'Yes. Modernized e-Stamping portals integrate all property transaction dues—Stamp Duty under the Stamp Act, Capital Value Tax (CVT), Registration Fees under the Registration Act, and Land Mutation / Intiqal charges—into a single consolidated Challan 32-A payment slip.',
              },
              {
                q: 'Why did Pakistan replace physical traditional stamp papers with e-Stamping?',
                a: 'Traditional physical stamp papers were prone to widespread fraud, including back-dated paper forgery, black-market overcharging by stamp vendors, and tax leakage. The e-Stamping system uses central databases, real-time DC valuation rates, and digital watermarks to ensure 100% transparency.',
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
            { label: 'Punjab e-Stamping Official Portal (PITB / BOR Punjab)', url: 'https://es.punjab.gov.pk/' },
            { label: 'Board of Revenue Sindh e-Stamping System', url: 'https://estamps.gos.pk/' },
            { label: 'Khyber Pakhtunkhwa e-Stamping Revenue Directorate', url: 'https://e-stamping.kp.gov.pk/' },
            { label: 'Islamabad Capital Territory (ICT) e-Services', url: 'https://ict.estamp.gov.pk/' },
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
