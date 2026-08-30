import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, FeeTableVisual, FAQAccordionVisual } from '@/components/visuals';
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
  Scale,
  Globe2,
  Sparkles,
  Info
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'eStamping Citizen Portal & Challan 32-A Online Guide 2026 – Punjab, Sindh & Islamabad | Pakistan Info Hub',
  description:
    'Complete guide to Pakistan’s official eStamping Citizen Portal (Punjab es.punjab-zameen.gov.pk / es.punjab.gov.pk, Sindh estamps.gos.pk & Islamabad): Generate Challan Form 32-A online, automated DC rate valuation, 2026 Board of Revenue digital white paper updates, bank payments (NBP, BOP), and instant QR code verification.',
  keywords: [
    'eStamping Citizen Portal 2026',
    'eStamping citizen portal punjab',
    'eStampCitizenPortal online challan 32-A',
    'Punjab e-Stamping portal es.punjab-zameen.gov.pk',
    'Sindh e-Stamping estamps.gos.pk citizen portal',
    'Islamabad e-stamping ban on manual stamp papers 2026',
    'KP e-Stamping portal Challan Form 32-A',
    'DC rate property valuation calculator Pakistan',
    'Stamp duty Capital Value Tax CVT registration fee Challan 32-A',
    'verify e-Stamp certificate number Pakistan',
    'Bank of Punjab NBP e-Stamp collection',
  ],
  openGraph: {
    title: 'eStamping Citizen Portal & Challan 32-A Online Guide 2026 – Pakistan Property Stamp Papers',
    description:
      'Step-by-step guide to navigating the eStamping Citizen Portal, generating Challan Form 32-A online, automated DC rates, BOP/NBP bank payments, and e-stamp verification across Punjab, Sindh, KP, and Islamabad.',
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
          name: 'eStamping Citizen Portal & Challan 32-A Guide',
          item: 'https://www.pakistaninfohub.com/property/e-stamping-challan-32a-online-guide-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'eStamping Citizen Portal & Challan 32-A Online Guide 2026: Generation, DC Rates & Bank Payment in Pakistan',
      description:
        'A definitive property legal guide explaining how the eStamping Citizen Portal replaced physical stamp papers in Pakistan, how to generate Challan Form 32-A online, automated DC rate calculations, and 2026 Board of Revenue reforms.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-29',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/property/e-stamping-challan-32a-online-guide-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I need to register a user account to use the eStamping Citizen Portal and generate Challan 32-A?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The official eStamping Citizen Portal in Punjab (es.punjab-zameen.gov.pk/eStampCitizenPortal/ or es.punjab.gov.pk) and Sindh (estamps.gos.pk) provides open public access without mandatory login registration. Any citizen, property buyer, seller, or deed writer can directly input property metrics and print a Challan 32-A free of charge.',
          },
        },
        {
          '@type': 'Question',
          name: 'What 2026 e-Stamping changes were implemented in Punjab and Islamabad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In 2026, the Punjab Board of Revenue (BoR) Full Board accelerated digital reforms by approving the Digital White Paper e-Stamp System to phase out manual paper stocks. Simultaneously, effective February 13, 2026, the Islamabad Capital Territory (ICT) Administration completely abolished traditional manual stamp papers, making digital e-stamping (via Pakistan Khidmat Centres and digital ESI IDs) strictly mandatory.',
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
    { nameEn: 'eStamping Citizen Portal & Challan 32-A Guide', nameUr: 'ای اسٹامپنگ سٹیزن پورٹل چالان 32-A گائیڈ 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="ESTAMPING CITIZEN PORTAL" labelUr="ای اسٹامپنگ سٹیزن پورٹل" variant="seal" />
            <VerifiedBadge textEn="BOARD OF REVENUE & PITB VERIFIED" />
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">• Last Verified: August 29, 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            eStamping Citizen Portal &amp; Challan 32-A Online Guide 2026: Generation, DC Rates &amp; Bank Payment
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              ای اسٹامپنگ سٹیزن پورٹل اور چالان 32-A آن لائن گائیڈ 2026: ڈی سی ریٹ، بینک ادائیگی اور تصدیق کا طریقہ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            A comprehensive, practical guide to Pakistan&apos;s official <strong>eStamping Citizen Portal</strong> across Punjab, Sindh, Khyber
            Pakhtunkhwa, and Islamabad. Learn how the <strong>eStamp Citizen Portal</strong> automates Challan Form 32-A generation, automated DC valuation rate calculations,
            multi-tax consolidation (Stamp Duty, CVT, Registration, Mutation), bank payment branches, and online verification.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is the eStamping Citizen Portal & How Does Challan Form 32-A Work?"
          topicTitleUr="ای اسٹامپنگ سٹیزن پورٹل کیا ہے اور چالان 32-A کیسے کام کرتا ہے؟"
          answerEn="The official eStamping Citizen Portal (managed by provincial Boards of Revenue and PITB at es.punjab-zameen.gov.pk and estamps.gos.pk) allows citizens to generate Challan Form 32-A online without middleman fees. The portal auto-calculates stamp duty and provincial taxes via official DC valuation tables. Pay via 1Link PSID or at designated banks (BOP, NBP, Sindh Bank) to receive an authentic, QR-coded e-stamp certificate."
          answerUr="صوبائی بورڈ آف ریونیو اور پی آئی ٹی بی کا آفیشل 'ای اسٹامپنگ سٹیزن پورٹل' شہریوں کو بغیر کسی ایجنٹ کے مفت چالان 32-A بنانے کی سہولت دیتا ہے۔ پورٹل پر ڈی سی ریٹ کے مطابق اسٹامپ ڈیوٹی خودکار حساب سے نکلتی ہے۔ ون لنک (PSID) یا نامزد بینکوں (BOP/NBP) میں ادائیگی کے بعد کیو آر کوڈ والا اصل ای اسٹامپ حاصل کیا جا سکتا ہے۔"
        />

        {/* 2026 System Updates Alert Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-300 dark:border-amber-700/60 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
            <strong className="font-serif font-bold text-amber-900 dark:text-amber-300 block text-base">
              2026 Policy Milestones: Punjab BoR Digital Expansion &amp; Islamabad Manual Stamp Ban
            </strong>
            <p className="leading-relaxed">
              <strong>1. Punjab Board of Revenue (BoR) Full Board Reforms:</strong> In 2026, the Full Board chaired by the Senior Member Board of Revenue (SMBR) finalized high-level policy agendas accelerating the <em>Digital White Paper e-Stamp System</em>, eliminating dependencies on legacy physical paper stocks and synchronizing e-stamping with Arazi Record Centres (PLRA).
            </p>
            <p className="leading-relaxed">
              <strong>2. Islamabad (ICT) Abolition of Manual Stamp Papers:</strong> Effective <strong>February 13, 2026</strong>, the Islamabad Capital Territory Administration completely outlawed all conventional manual stamp papers for official, judicial, and deed-writing use. All Islamabad property transactions must now utilize digital e-stamping processed via Pakistan Khidmat Centres and digital ESI IDs.
            </p>
          </div>
        </div>

        {/* Section 1: Province-by-Province Availability & Portal Links */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Building className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Province-by-Province eStamping Citizen Portal Directory
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Every provincial government provides a dedicated <strong>Citizen Portal</strong> for e-stamping, backed by official Board of Revenue databases and 1Link digital payment routing.
          </p>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Province / Territory</th>
                  <th className="px-4 py-3 text-left">Citizen Portal Access</th>
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
                    es.punjab-zameen.gov.pk/eStampCitizenPortal/ <br />
                    <span className="text-slate-500 font-sans text-[11px]">(Also: es.punjab.gov.pk)</span>
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
                    Pakistan Khidmat Centres (G-9) &amp; ESI ID
                  </td>
                  <td className="px-4 py-3 text-xs">
                    <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                      <Check className="w-3.5 h-3.5" /> 100% Mandatory (Manual Papers Abolished Feb 2026)
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
                    Phased Pilot in Quetta &amp; Gilgit; Digital Transition System
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
          </div>
        </section>

        {/* Section 2: Using the eStamping Citizen Portal */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Receipt className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Using the eStamping Citizen Portal: How to Generate Challan 32-A Step-by-Step
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Navigating the <strong>eStamp Citizen Portal</strong> requires no login credentials. Anyone can generate an official Challan Form 32-A in four straightforward stages:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Access Portal &amp; Choose Deed</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Visit <code>es.punjab-zameen.gov.pk/eStampCitizenPortal/</code> or <code>estamps.gos.pk</code>. Select <strong>Non-Judicial</strong> (property sale, gift, mortgage, affidavit) or <strong>Judicial</strong> (court fee). Select District, Tehsil, and Mouza.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Enter Party &amp; Land Metrics</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Input 13-digit CNIC numbers and legal names of the First Party (Seller/Donor) and Second Party (Buyer/Donee). Enter land area (Marla/Kanal/Sq Ft), constructed area, and Khasra/Khewat number.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Automatic DC Rate Computation</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The <strong>Citizen Portal</strong> automatically queries official District Collector valuation tables, computing Stamp Duty, CVT, and Registration fee. Click <strong>&quot;Generate Challan 32-A&quot;</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs">4</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Pay &amp; Receive e-Stamp</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Print Challan 32-A and pay via 1Link PSID, ePay app, or at BOP/NBP/Sindh Bank branches. Collect your official e-Stamp security certificate with a machine-verifiable QR code.
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
                Calculated automatically by the Citizen Portal based on property location.
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
              How to Verify Authenticity on the Citizen Portal &amp; Prevent Fraud
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

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step eStamping Citizen Portal &amp; Challan 32-A Workflow"
          titleUr="ای اسٹامپنگ سٹیزن پورٹل اور چالان فارم 32-A کا مرحلہ وار طریقہ کار"
          subtitleEn="4-stage verified sequence from DC valuation to security stamp certificate issuance"
          subtitleUr="ڈی سی ریٹ کیلکولیشن سے لے کر مستند ای اسٹامپ کے حصول تک کے 4 مراحل"
          steps={[
            {
              number: 1,
              titleEn: "Citizen Portal Data & DC Valuation",
              titleUr: "سٹیزن پورٹل پر ڈیٹا کا اندراج و ڈی سی ریٹ",
              descEn: "Access the eStamping Citizen Portal. Enter buyer & seller CNICs, tehsil, mauza, and plot dimensions to automatically fetch official DC valuation rates.",
              descUr: "صوبائی پورٹل پر خریدار، فروخت کنندہ اور جائیداد کی پیمائش درج کر کے ڈی سی ریٹ معلوم کریں۔",
              tagEn: "Citizen Portal",
              tagUr: "ڈیٹا اندراج",
            },
            {
              number: 2,
              titleEn: "Generate Challan 32-A",
              titleUr: "چالان فارم 32-A جنریٹ کریں",
              descEn: "System computes Stamp Duty, CVT, and mutation fees, generating a printable 16-digit Challan 32-A PSID.",
              descUr: "سسٹم خودکار طریقے سے اسٹامپ ڈیوٹی، سی وی ٹی اور میوٹیشن فیس کا چالان اور پی ایس آئی ڈی جاری کرتا ہے۔",
              tagEn: "PSID / 32-A",
              tagUr: "چالان",
            },
            {
              number: 3,
              titleEn: "Bank / ePay Fee Payment",
              titleUr: "بینک یا آن لائن ادائیگی",
              descEn: "Deposit payment over-the-counter at NBP/BOP designated branches or instantly via ePay Punjab / 1Link.",
              descUr: "نامزد بینک برانچ، 1Link موبائل بینکنگ یا ای پے ایپ کے ذریعے فیس ادا کریں۔",
              tagEn: "Payment",
              tagUr: "ادائیگی",
            },
            {
              number: 4,
              titleEn: "Print Security e-Stamp",
              titleUr: "سیکیورٹی ای اسٹامپ وصولی",
              descEn: "Collect watermarked judicial/non-judicial e-Stamp paper with 16-character alphanumeric ID and QR code for Sub-Registrar execution.",
              descUr: "16 ہندسوں کے شناختی نمبر اور کیو آر کوڈ سے لیس سرکاری ای اسٹامپ وصول کر کے رجسٹری درج کروائیں۔",
              tagEn: "e-Stamp Deed",
              tagUr: "ای اسٹامپ",
            },
          ]}
        />

        {/* Fee Structure Table */}
        <FeeTableVisual
          titleEn="Standard Property Transaction Tax &amp; Fee Schedule 2026"
          titleUr="پراپرٹی خرید و فروخت سرکاری ٹیکس و فیس شیڈول 2026"
          subtitleEn="Statutory rates under the Stamp Act, Capital Value Tax (CVT) and Registration Act"
          subtitleUr="اسٹامپ ایکٹ، سی وی ٹی اور رجسٹریشن ایکٹ کے تحت لاگو سرکاری ریٹس"
          noteEn="Rates vary slightly across Punjab, Sindh, KPK, and Islamabad based on urban vs rural classification."
          rows={[
            {
              serviceEn: "Stamp Duty (Transfer of Immovable Property)",
              serviceUr: "اسٹامپ ڈیوٹی (جائیداد منتقلی)",
              normal: "3% of DC Rate",
              urgent: "3% Fixed",
              executive: "Direct e-Stamp",
              validity: "Until Deed Executed",
            },
            {
              serviceEn: "Capital Value Tax (CVT)",
              serviceUr: "کیپیٹل ویلیو ٹیکس (CVT)",
              normal: "1% to 2%",
              urgent: "1% to 2%",
              executive: "Provincial BOR",
              validity: "Per Transaction",
            },
            {
              serviceEn: "Sub-Registrar Registration Fee",
              serviceUr: "سب رجسٹرار رجسٹریشن فیس",
              normal: "1% of Value",
              urgent: "1% of Value",
              executive: "Challan 32-A",
              validity: "Deed Registration",
            },
            {
              serviceEn: "PLRA / Revenue Mutation (Intiqal) Fee",
              serviceUr: "اراضی ریکارڈ انتقال فیس",
              normal: "PKR 500 – 1,000",
              urgent: "PKR 1,000",
              executive: "Integrated ARC",
              validity: "Official Record",
            },
          ]}
        />

        {/* FAQ Section */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (eStamping Citizen Portal &amp; Challan 32-A)"
          titleUr="ای اسٹامپنگ سٹیزن پورٹل اور چالان 32-A کے متعلق عام سوالات"
          subtitleEn="Essential guidelines on generation, expiry, verification, and 2026 policy rules"
          subtitleUr="چالان کی میعاد، فیس جمع کروانے اور کیو آر تصدیق سے متعلق ضروری معلومات"
          items={[
            {
              questionEn: "Do I need to register a user account to use the eStamping Citizen Portal and generate Challan 32-A?",
              questionUr: "کیا چالان 32-A بنانے کے لیے اکاؤنٹ بنانا لازمی ہے؟",
              answerEn: "No. The official eStamping Citizen Portal in Punjab (es.punjab-zameen.gov.pk/eStampCitizenPortal/ or es.punjab.gov.pk) and Sindh (estamps.gos.pk) provides open public access without mandatory login registration. Any citizen, property buyer, seller, or deed writer can directly input property metrics and print a Challan 32-A free of charge.",
              answerUr: "نہیں، پنجاب، سندھ اور کے پی کے ای اسٹامپ پورٹلز پر بغیر اکاؤنٹ بنائے کوئی بھی شہری یا وکیل براہ راست ڈیٹا درج کر کے مفت چالان 32-A جنریٹ کر سکتا ہے۔",
            },
            {
              questionEn: "What 2026 e-Stamping changes were implemented in Punjab and Islamabad?",
              questionUr: "سال 2026 میں پنجاب اور اسلام آباد میں کیا اہم تبدیلیاں کی گئی ہیں؟",
              answerEn: "In 2026, the Punjab Board of Revenue (BoR) Full Board accelerated digital reforms by approving the Digital White Paper e-Stamp System to phase out manual paper stocks. Simultaneously, effective February 13, 2026, the Islamabad Capital Territory (ICT) Administration completely abolished traditional manual stamp papers, making digital e-stamping (via Pakistan Khidmat Centres and digital ESI IDs) strictly mandatory.",
              answerUr: "2026 میں پنجاب بورڈ آف ریونیو نے ڈیجیٹل وائٹ پیپر سسٹم کی منظوری دی، جبکہ اسلام آباد میں 13 فروری 2026 سے تمام دستی اسٹامپ پیپرز مکمل طور پر بند کر کے ای اسٹامپ لازمی قرار دے دیا گیا ہے۔",
            },
            {
              questionEn: "How do I verify that an e-Stamp paper or certificate is authentic and not counterfeit?",
              questionUr: "ای اسٹامپ پیپر کے اصلی ہونے کی تصدیق کیسے کی جائے؟",
              answerEn: "Every official e-Stamp certificate contains a unique 16-character e-Stamp ID, a quick-response QR code, and a watermark. You can verify its authenticity by visiting your provincial portal's 'Verification' section (e.g. es.punjab.gov.pk/verify) and entering the 16-character number, or by scanning the QR code with any smartphone camera.",
              answerUr: "ہر ای اسٹامپ پر 16 ہندسوں کا منفرد کوڈ اور کیو آر کوڈ ہوتا ہے۔ پورٹل پر جا کر یہ نمبر لکھیں یا موبائل سے کیو آر اسکین کر کے فوری تصدیق کریں۔",
            },
            {
              questionEn: "What happens if my Challan 32-A or issued e-Stamp certificate expires before I use it?",
              questionUr: "اگر چالان 32-A کی تاریخ نکل جائے تو کیا طریقہ ہے؟",
              answerEn: "An unpaid Challan Form 32-A has a validity window (typically 7 to 30 days depending on provincial revenue rules) during which payment must be deposited at the bank; if it expires before payment, you simply generate a fresh Challan online for free. Once paid and the physical security e-Stamp certificate is issued by the bank, it remains legally valid for registry execution and mutation.",
              answerUr: "اگر غیر ادا شدہ چالان کی تاریخ گزر جائے تو دوبارہ مفت نیا چالان جنریٹ کریں۔ جبکہ بینک سے فیس ادا کر کے حاصل کردہ ای اسٹامپ رجسٹری ہونے تک کارآمد رہتا ہے۔",
            },
            {
              questionEn: "Can a single Challan 32-A cover Stamp Duty, CVT, Registration Fee, and Mutation Fees together?",
              questionUr: "کیا ایک ہی چالان میں اسٹامپ ڈیوٹی، سی وی ٹی اور میوٹیشن فیس جمع ہو سکتی ہے؟",
              answerEn: "Yes. Modernized e-Stamping portals integrate all property transaction dues—Stamp Duty under the Stamp Act, Capital Value Tax (CVT), Registration Fees under the Registration Act, and Land Mutation / Intiqal charges—into a single consolidated Challan 32-A payment slip.",
              answerUr: "جی ہاں! جدید ای اسٹامپنگ نظام کے تحت اسٹامپ ڈیوٹی، سی وی ٹی، سب رجسٹرار فیس اور انتقال فیس کا ایک ہی مشترکہ چالان بنتا ہے۔",
            },
            {
              questionEn: "Why did Pakistan replace physical traditional stamp papers with e-Stamping?",
              questionUr: "پاکستان نے پرانے کاغذی اسٹامپ پیپرز کو ای اسٹامپنگ سے کیوں تبدیل کیا؟",
              answerEn: "Traditional physical stamp papers were prone to widespread fraud, including back-dated paper forgery, black-market overcharging by stamp vendors, and tax leakage. The e-Stamping system uses central databases, real-time DC valuation rates, and digital watermarks to ensure 100% transparency.",
              answerUr: "پرانے اسٹامپ پیپرز میں بیک ڈیٹ کا فراڈ، بلیک مارکیٹنگ اور ٹیکس چوری عام تھی۔ ای اسٹامپ نے شفافیت قائم کر کے دھوکہ دہی کا مکمل خاتمہ کر دیا ہے۔",
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Punjab eStamping Citizen Portal (PITB / BOR Punjab)', url: 'https://es.punjab-zameen.gov.pk/eStampCitizenPortal/' },
            { label: 'Punjab e-Stamping Portal', url: 'https://es.punjab.gov.pk/' },
            { label: 'Board of Revenue Sindh e-Stamping Citizen Portal', url: 'https://estamps.gos.pk/' },
            { label: 'Khyber Pakhtunkhwa e-Stamping Revenue Directorate', url: 'https://e-stamping.kp.gov.pk/' },
            { label: 'ICT Administration Islamabad Khidmat Centres', url: 'https://ictadministration.gov.pk/' },
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
