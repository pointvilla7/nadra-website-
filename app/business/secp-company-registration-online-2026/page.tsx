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
  Building,
  FileCheck,
  Clock,
  Coins,
  Search,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Briefcase,
  Layers,
  Scale,
  Info,
  ShieldAlert,
  FileText
} from 'lucide-react';
import Link from 'next/link';


export const metadata: Metadata = {
  title: 'SECP Company Registration Online 2026 – eZfile Portal Guide | Pakistan Info Hub',
  description:
    'Register a Private Limited (Pvt Ltd), Single Member Company (SMC), or LLP online in Pakistan via SECP eZfile in 4 hours. Official fee schedule, Memorandum & Articles of Association, and automated FBR NTN.',
  keywords: [
    'secp company registration online 2026',
    'secp ezfile portal company setup',
    'pvt ltd company registration fee pakistan',
    'smc registration secp pakistan',
    'llp partnership registration secp',
    'how to register company in pakistan secp',
  ],
  openGraph: {
    title: 'SECP Company Registration Online 2026 – Pvt Ltd Formation Guide',
    description:
      'Register a Private Limited (Pvt Ltd) or Single Member Company (SMC) online in Pakistan via SECP eZfile. Fees, MoA/AoA, and 4-hour incorporation.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/business/secp-company-registration-online-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/business/secp-company-registration-online-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com/' },
        { '@type': 'ListItem', position: 2, name: 'Business & Tax', item: 'https://www.pakistaninfohub.com/business' },
        { '@type': 'ListItem', position: 3, name: 'SECP Company Registration Online', item: 'https://www.pakistaninfohub.com/business/secp-company-registration-online-2026' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does SECP online company registration take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Through SECP eZfile fast-track digital incorporation workflows, company registration is typically approved within 4 hours to 1 working day if documents and fee payments are complete.',
          },
        },
        {
          '@type': 'Question',
          name: 'What documents are required to register a company in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copies of CNIC/NICOP/Passports of all proposed directors/subscribers, digital Memorandum of Association (MoA), Articles of Association (AoA), registered office address, and online 1Link fee payment receipt.',
          },
        },
      ],
    },
  ],
};

export default function SECPCompanyRegistrationPage() {
  const breadcrumbs = [
    { nameEn: 'Business & Tax', nameUr: 'کاروبار و ٹیکس', url: '/business' },
    { nameEn: 'SECP Company Registration', nameUr: 'ایس ای سی پی کمپنی رجسٹریشن' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="CORPORATE DIRECTORY" labelUr="کارپوریٹ گائیڈ" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            SECP Company Registration Online 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              ایس ای سی پی آن لائن کمپنی رجسٹریشن گائیڈ (پرائیویٹ لمیٹڈ، سنگل ممبر و ایل ایل پی)
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Authoritative guide to incorporating a Private Limited Company (Pvt Ltd), Single Member Company (SMC-Pvt Ltd), or Limited Liability Partnership (LLP) in Pakistan through the SECP eZfile digital portal.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Register a Company with SECP Pakistan (2026 Overview)"
          topicTitleUr="ایس ای سی پی میں کمپنی رجسٹر کروانے کا طریقہ"
          answerEn="To register a company online with SECP: (1) Create an account on the SECP eZfile portal (ezfile.secp.gov.pk). (2) Apply for digital Name Reservation (PKR 500 online fee). (3) Complete the digital Incorporation Form, submit Memorandum & Articles of Association (MoA/AoA), and add director CNICs. (4) Pay the registration fee via 1Link/e-Pay (starting PKR 2,000 for up to 100k capital). (5) Receive your Digital Certificate of Incorporation and automatic FBR Company NTN within 4 hours to 1 working day."
          answerUr="ایس ای سی پی میں کمپنی رجسٹریشن کا طریقہ: (1) آفیشل eZfile پورٹل پر اکاؤنٹ بنائیں۔ (2) کمپنی نام کی منظوری حاصل کریں (فیس 500 روپے)۔ (3) ڈیجیٹل فارم میں میمورنڈم اور آرٹیکلز آف ایسوسی ایشن اور ڈائریکٹرز کے شناختی کارڈ منسلک کریں۔ (4) 1Link سے فیس ادا کریں۔ (5) 4 گھنٹے سے 1 دن میں ڈیجیٹل سرٹیفکیٹ اور کمپنی کا خودکار FBR این ٹی این حاصل کریں۔"
        />

        {/* Portal Architecture & STARR Myth Clarification Banner */}
        <div className="rounded-2xl border border-doc-brass/40 bg-doc-paper dark:bg-doc-dark-card p-5 sm:p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 text-doc-ink dark:text-white font-serif font-bold text-lg sm:text-xl border-b border-doc-brass/30 pb-3">
            <Info className="w-5 h-5 text-doc-brass shrink-0" />
            <span>Official Portal Architecture: eZfile vs Legacy eServices &amp; &ldquo;STARR&rdquo; Clarification</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 space-y-2">
              <span className="font-mono font-bold text-xs uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Current Active System: SECP eZfile Portal
              </span>
              <p>
                The Securities and Exchange Commission of Pakistan has consolidated corporate registrations onto the <strong>eZfile portal</strong> (accessible at <code className="font-mono text-xs bg-emerald-100 dark:bg-emerald-900/50 px-1 py-0.5 rounded text-emerald-900 dark:text-emerald-200">ezfile.secp.gov.pk</code> and <code className="font-mono text-xs bg-emerald-100 dark:bg-emerald-900/50 px-1 py-0.5 rounded text-emerald-900 dark:text-emerald-200">eservices.secp.gov.pk/eServices/</code>). The legacy standalone &ldquo;eServices&rdquo; workflow has been modernized into this single-window platform offering combined name reservation, incorporation filing, automated FBR Corporate NTN generation, and provincial social security registration in one session.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20 space-y-2">
              <span className="font-mono font-bold text-xs uppercase tracking-wider text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Clarification on the &ldquo;STARR&rdquo; Portal Myth
              </span>
              <p>
                Some third-party articles and outdated blogs mistakenly refer to a separate &ldquo;STARR&rdquo; portal (<span className="font-mono text-xs text-slate-500 line-through">starr.secp.gov.pk</span>) for company name reservation. In Pakistani regulatory infrastructure, <strong>STARR</strong> stands for the <em>Sales Tax Automated Refund Repository</em> administered exclusively by the <strong>FBR</strong> for processing sales tax refunds. <strong>SECP does NOT operate a separate STARR portal for name reservations</strong>. All name searches and reservations are conducted 100% inside SECP eZfile.
              </p>
            </div>
          </div>
        </div>

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step SECP Company Incorporation Workflow (2026)"
          titleUr="ایس ای سی پی کمپنی رجسٹریشن کا 4 مرحلہ وار طریقہ کار"
          subtitleEn="From name availability reservation to eZfile filing, 1Link fee payment, and automatic FBR NTN issuance"
          subtitleUr="کمپنی نام کی منظوری سے لے کر ڈیجیٹل فارم، فیس ادائیگی اور خودکار کارپوریٹ این ٹی این کے حصول تک"
          steps={[
            {
              number: 1,
              titleEn: "Name Availability & Reservation",
              titleUr: "کمپنی کا نام منتخب اور ریزرو کریں",
              descEn: "Search proposed business names on SECP eZfile; submit name reservation application with an online fee of PKR 500.",
              descUr: "ای زیڈ فائل پورٹل پر کمپنی کا منفرد نام تلاش کریں اور 500 روپے فیس جمع کروا کے نام کی فوری منظوری حاصل کریں۔",
              tagEn: "Name Check",
              tagUr: "نام ریزرویشن",
            },
            {
              number: 2,
              titleEn: "Fill eZfile Incorporation Application",
              titleUr: "ڈیجیٹل میمورنڈم اور آرٹیکلز فارم پر کریں",
              descEn: "Select company type (Pvt Ltd, SMC, LLP), enter authorized/paid-up capital, business objects, registered office, and director details.",
              descUr: "کمپنی کی قسم منتخب کریں، سرمایہ، کاروباری مقاصد اور تمام ڈائریکٹرز کے شناختی کارڈ اور پتے کا اندراج کریں۔",
              tagEn: "eZfile Forms",
              tagUr: "ڈیجیٹل فارم",
            },
            {
              number: 3,
              titleEn: "Pay Digital Fee Challan via 1Link",
              titleUr: "آن لائن بینکنگ یا ون لنک سے فیس ادا کریں",
              descEn: "Generate PSID voucher; pay SECP registration fees and digital stamp duties via ATM, Internet Banking, or Credit Card.",
              descUr: "پی ایس آئی ڈی چالان جنریٹ کریں اور موبائل ایپ، ون لنک اے ٹی ایم یا کریڈٹ کارڈ سے فیس جمع کروائیں۔",
              tagEn: "Fee Payment",
              tagUr: "فیس ادائیگی",
            },
            {
              number: 4,
              titleEn: "Certificate & Auto FBR NTN Issuance",
              titleUr: "سرٹیفکیٹ اور خودکار کمپنی این ٹی این وصولی",
              descEn: "SECP registrar approves within 4 hours; download digital Certificate of Incorporation and receive integrated FBR Company NTN.",
              descUr: "رجسٹرار کی ڈیجیٹل منظوری کے بعد سرٹیفکیٹ ڈاؤن لوڈ کریں اور کمپنی کا خودکار FBR این ٹی این حاصل کریں۔",
              tagEn: "Incorporation",
              tagUr: "کمپنی رجسٹریشن",
            },
          ]}
        />

        {/* Fee Table Visual */}
        <FeeTableVisual
          titleEn="SECP Official Incorporation Fee Structure (2026 Slabs)"
          titleUr="ایس ای سی پی کمپنی رجسٹریشن کا آفیشل فیس شیڈول (2026)"
          subtitleEn="Capital-based fee schedule for Private Limited, Single Member, and LLP formations via eZfile"
          subtitleUr="رجسٹرڈ کیپیٹل کے مطابق پرائیویٹ لمیٹڈ، سنگل ممبر اور ایل ایل پی کی فیس کی تفصیل"
          noteEn="* Note: Online filing via eZfile offers up to 50% discount compared to physical offline counter submissions."
          noteUr="* نوٹ: آن لائن ای زیڈ فائل پورٹل سے اپلائی کرنے پر روایتی مینوئل جمع کروانے کے مقابلے میں 50 فیصد تک فیس میں رعایت ملتی ہے۔"
          rows={[
            {
              serviceEn: "Company Name Reservation (All Entities)",
              serviceUr: "کمپنی نام کی ریزرویشن (تمام اقسام)",
              normal: "PKR 500 (Online)",
              urgent: "PKR 1,000 (Offline)",
              executive: "Instant Check",
              validity: "Valid for 60 Days"
            },
            {
              serviceEn: "Pvt Ltd / SMC (Capital up to PKR 100,000)",
              serviceUr: "پرائیویٹ لمیٹڈ / سنگل ممبر (1 لاکھ روپے تک کیپیٹل)",
              normal: "PKR 2,000",
              urgent: "PKR 4,000 (Fast-Track)",
              executive: "Same Day",
              validity: "Perpetual (Lifelong)"
            },
            {
              serviceEn: "Pvt Ltd (Capital PKR 100k to 1,000,000)",
              serviceUr: "پرائیویٹ لمیٹڈ (1 لاکھ سے 10 لاکھ روپے کیپیٹل)",
              normal: "PKR 2,000 + PKR 500/100k",
              urgent: "PKR 6,000",
              executive: "4 Hours",
              validity: "Perpetual (Lifelong)"
            },
            {
              serviceEn: "Limited Liability Partnership (LLP)",
              serviceUr: "لمیٹڈ لائبلٹی پارٹنرشپ (ایل ایل پی)",
              normal: "PKR 2,500",
              urgent: "PKR 5,000",
              executive: "Same Day",
              validity: "Perpetual (Lifelong)"
            }
          ]}
        />

        {/* Itemized Fee Breakdown Card (PKR 1,500 to 2,700 Total) */}
        <div className="rounded-2xl border border-doc-brass/40 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-doc-brass/30 pb-3">
            <h3 className="font-serif font-bold text-lg sm:text-xl text-doc-ink dark:text-white flex items-center gap-2">
              <Coins className="w-5 h-5 text-doc-brass" />
              Itemized Cost Breakdown for Minimum Authorized Capital (PKR 100,000)
            </h3>
            <span className="font-mono text-xs font-bold text-doc-seal dark:text-doc-brass bg-doc-paper dark:bg-slate-800 px-2.5 py-1 rounded border border-doc-brass/30">
              Total Range: PKR 1,500 – 2,700
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Legal consultants and corporate guides often quote total initial online filing costs ranging from <strong>PKR 1,500 to PKR 2,700</strong>. This variation occurs depending on whether name reservation is filed separately or bundled within single-step incorporation, and the number of user registration profiles created:
          </p>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
            <div className="table-scroll-container">
              <table className="w-full text-xs sm:text-sm font-sans min-w-[550px]">
                <thead className="bg-doc-ink text-white font-mono uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="px-4 py-3 text-left">Fee Component</th>
                    <th className="px-4 py-3 text-left">Online Tariff (eZfile)</th>
                    <th className="px-4 py-3 text-left">Filing Frequency</th>
                    <th className="px-4 py-3 text-left">Why It Varies</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="bg-white dark:bg-slate-900">
                    <td className="px-4 py-3 font-semibold text-slate-800 dark:text-slate-200">
                      1. User Profile &amp; Digital PIN Registration
                    </td>
                    <td className="px-4 py-3 font-mono font-bold text-doc-seal dark:text-doc-brass">
                      PKR 200 / user
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">One-time per director</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                      Single-member company requires 1 user (PKR 200); 2-director Pvt Ltd requires 2 profiles (PKR 400).
                    </td>
                  </tr>
                  <tr className="bg-slate-50/60 dark:bg-slate-800/40">
                    <td className="px-4 py-3 font-semibold text-slate-800 dark:text-slate-200">
                      2. Company Name Reservation
                    </td>
                    <td className="px-4 py-3 font-mono font-bold text-doc-seal dark:text-doc-brass">
                      PKR 500 – 1,000
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">Valid for 60 Days</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                      PKR 500 when bundled in combined single-step incorporation; PKR 1,000 if reserved independently in advance.
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-900">
                    <td className="px-4 py-3 font-semibold text-slate-800 dark:text-slate-200">
                      3. Statutory Incorporation Fee (Up to PKR 100k Capital)
                    </td>
                    <td className="px-4 py-3 font-mono font-bold text-doc-seal dark:text-doc-brass">
                      PKR 1,500 – 2,000
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">One-time base fee</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                      Concessional digital rate under the Seventh Schedule to the Companies Act, 2017.
                    </td>
                  </tr>
                  <tr className="bg-emerald-50/50 dark:bg-emerald-950/20 font-bold">
                    <td className="px-4 py-3 text-emerald-900 dark:text-emerald-300">
                      Total Itemized Government Cost (User + Name + Incorporation)
                    </td>
                    <td className="px-4 py-3 font-mono text-emerald-800 dark:text-emerald-300 text-sm">
                      PKR 1,500 – 2,700
                    </td>
                    <td className="px-4 py-3 text-emerald-900 dark:text-emerald-300" colSpan={2}>
                      Standalone filing (~PKR 1,500) | Bundled setup (~PKR 2,200) | 2-Director separate reservation (~PKR 2,700).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 2026 Regulatory Order Update: SRO 328(I)/2026 & Digital Share Conversion */}
        <div className="rounded-2xl border border-doc-brass/40 bg-doc-paper dark:bg-doc-dark-card p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-doc-ink dark:text-white font-serif font-bold text-lg sm:text-xl border-b border-doc-brass/30 pb-3">
            <Scale className="w-5 h-5 text-doc-brass shrink-0" />
            <span>2026 SECP Regulatory Update: S.R.O. 328(I)/2026 &amp; Mandatory Book-Entry Shares</span>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <ShieldAlert className="w-5 h-5 text-doc-seal shrink-0 mt-0.5" />
              <div>
                <strong className="text-doc-ink dark:text-white block font-sans text-sm">
                  Mandatory Digital Share Conversion (Section 72, Companies Act 2017):
                </strong>
                Under regulatory directives issued in 2026 (including <strong>S.R.O. 328(I)/2026</strong> and <strong>S.R.O. 327(I)/2026</strong>), physical paper share certificates are being phased out across all corporate entities. Newly incorporated Private Limited and SMC companies must maintain electronic, book-entry securities through an SECP-recognized digital register or Central Depository System (CDS), eliminating physical share certificate fraud and streamlining title transfers.
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <FileText className="w-5 h-5 text-doc-brass shrink-0 mt-0.5" />
              <div>
                <strong className="text-doc-ink dark:text-white block font-sans text-sm">
                  Ultimate Beneficial Ownership (UBO) Compliance on Form 45:
                </strong>
                All companies incorporated in 2026 must declare natural persons exercising beneficial ownership or voting rights of 10% or more directly during the initial eZfile incorporation stage to ensure compliance with FATF and national anti-money laundering regulations.
              </div>
            </div>
          </div>
        </div>

        <AdPlacementZone format="horizontal" />


        {/* Section 1: Related Business Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Corporate &amp; Tax Compliance Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/business/pseb-freelancer-registration-tax-benefits-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">IT Exports</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                PSEB Freelancer Registration →
              </h3>
              <p className="text-xs text-slate-500 mt-1">0.25% concessional tax rate & SBP remittance accounts.</p>
            </Link>

            <Link
              href="/tax/fbr-active-taxpayer-status-helper-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Tax Status</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                FBR Active Taxpayer Helper →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Verify Active Taxpayer List (ATL) status by NTN or CNIC.</p>
            </Link>

            <Link
              href="/business/trademark-registration-pakistan-ipo-guide-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">IP Rights</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                IPO Trademark Registration 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Protect your company brand name and logo in Pakistan.</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (SECP Company Incorporation)"
          titleUr="ایس ای سی پی کمپنی رجسٹریشن سے متعلق عام سوالات"
          subtitleEn="Essential guidelines on incorporation timelines, minimum directors, FBR NTN integration, and foreign shareholding"
          subtitleUr="رجسٹریشن کا دورانیہ، کم از کم ڈائریکٹرز کی تعداد، ایف بی آر این ٹی این کا انضمام اور غیر ملکی سرمایہ کاری"
          items={[
            {
              questionEn: "How long does SECP online company registration take?",
              questionUr: "ایس ای سی پی میں آن لائن کمپنی رجسٹریشن میں کتنا وقت لگتا ہے؟",
              answerEn: "Through SECP eZfile fast-track digital incorporation workflows, company registration is typically approved within 4 hours to 1 working day if documents and fee payments are complete.",
              answerUr: "ای زیڈ فائل کے تحت کاغذات اور فیس مکمل ہونے کی صورت میں کمپنی رجسٹریشن عام طور پر 4 گھنٹے سے 1 دن کے اندر مکمل ہو جاتی ہے۔",
            },
            {
              questionEn: "What is the minimum number of directors required for a company in Pakistan?",
              questionUr: "پاکستان میں کمپنی بنانے کے لیے کم از کم کتنے ڈائریکٹرز درکار ہوتے ہیں؟",
              answerEn: "For a Single Member Company (SMC-Pvt Ltd), exactly 1 director is required. For a standard Private Limited Company (Pvt Ltd), a minimum of 2 directors/shareholders is mandatory. For a Public Limited Company, at least 3 directors are required.",
              answerUr: "سنگل ممبر کمپنی کے لیے صرف 1 ڈائریکٹر، عام پرائیویٹ لمیٹڈ کمپنی کے لیے کم از کم 2 ڈائریکٹرز اور پبلک لمیٹڈ کے لیے کم از کم 3 ڈائریکٹرز لازمی ہیں۔",
            },
            {
              questionEn: "Is an FBR NTN automatically issued when a company is registered with SECP?",
              questionUr: "کیا کمپنی رجسٹریشن کے ساتھ ہی ایف بی آر این ٹی این خودکار طریقے سے بن جاتا ہے؟",
              answerEn: "Yes! Under SECP and FBR system integration, when your digital incorporation certificate is approved, a 7-digit Corporate NTN is automatically generated without needing a separate visit to the tax office.",
              answerUr: "جی ہاں! ایس ای سی پی اور ایف بی آر کے مشترکہ سسٹم کے تحت جیسے ہی سرٹیفکیٹ جاری ہوتا ہے، کمپنی کا 7 ہندسوں پر مشتمل کارپوریٹ این ٹی این خودکار طور پر بن جاتا ہے۔",
            },
            {
              questionEn: "Can foreign nationals or Overseas Pakistanis register a company in Pakistan?",
              questionUr: "کیا اوورسیز پاکستانی یا غیر ملکی شہری پاکستان میں کمپنی رجسٹر کروا سکتے ہیں؟",
              answerEn: "Yes. Overseas Pakistanis with a valid NICOP and foreign nationals with a valid passport can incorporate a company 100% online through the SECP eZfile portal without requiring physical presence.",
              answerUr: "جی ہاں! اوورسیز پاکستانی اپنے نائیکوپ اور غیر ملکی شہری اپنے پاسپورٹ کے ذریعے eZfile پورٹل پر بغیر پاکستان آئے 100 فیصد آن لائن کمپنی رجسٹر کروا سکتے ہیں۔",
            },
            {
              questionEn: "Is there a separate \"STARR\" portal for SECP name reservation?",
              questionUr: "کیا کمپنی نام کی منظوری کے لیے STARR کا الگ پورٹل ہے؟",
              answerEn: "No. STARR (Sales Tax Automated Refund Repository) is an FBR system used exclusively for sales tax refund processing. SECP does not operate a STARR portal; all name availability checks and name reservations are performed 100% inside the SECP eZfile platform.",
              answerUr: "نہیں! سٹار (STARR) ایف بی آر کا سیلز ٹیکس ریفنڈ سسٹم ہے اور اس کا کمپنی نام سے کوئی تعلق نہیں۔ کمپنی کا نام اور رجسٹریشن صرف اور صرف ایس ای سی پی کے آفیشل eZfile پورٹل سے ہوتی ہے۔",
            },
            {
              questionEn: "Why do fee quotes for minimum capital (PKR 100,000) vary between PKR 1,500 and PKR 2,700?",
              questionUr: "1 لاکھ کیپیٹل والی کمپنی کی فیس 1500 سے 2700 روپے کے درمیان کیوں بیان کی جاتی ہے؟",
              answerEn: "The base statutory online incorporation filing fee is PKR 1,500–2,000. When adding the mandatory eZfile user profile registration (PKR 200 per director) and name reservation fee (PKR 500 bundled, or PKR 1,000 if reserved independently), the total itemized government tariff ranges between PKR 1,500 and PKR 2,700.",
              answerUr: "بنیادی رجسٹریشن فیس 1,500 سے 2,000 روپے ہے۔ جب اس میں فی ڈائریکٹر یوزر اکاؤنٹ (200 روپے) اور نام ریزرویشن (500 سے 1,000 روپے) شامل کیے جائیں تو کل سرکاری خرچ 1,500 سے 2,700 روپے بنتا ہے۔",
            },
            {
              questionEn: "What is SECP's 2026 mandate on digital book-entry shares (S.R.O. 328(I)/2026)?",
              questionUr: "ایس ای سی پی کا ڈیجیٹل شیئرز (SRO 328) سے متعلق نیا قانون کیا ہے؟",
              answerEn: "Under S.R.O. 328(I)/2026 pursuant to Section 72 of the Companies Act 2017, companies are mandated to convert physical paper share certificates into electronic book-entry form via the Central Depository System (CDS) or digital share registers to curb title fraud.",
              answerUr: "کمپنیز ایکٹ کے سیکشن 72 اور SRO 328 کے تحت تمام کمپنیوں کے کاغذی شیئرز کو ڈیجیٹل بک انٹری سسٹم (سی ڈی ایس) میں تبدیل کرنا لازمی قرار دیا گیا ہے تاکہ جعلسازی کا خاتمہ ہو۔",
            },

          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Securities and Exchange Commission of Pakistan (SECP)', url: 'https://www.secp.gov.pk/' },
            { label: 'SECP eZfile Portal', url: 'https://ezfile.secp.gov.pk/' },
            { label: 'Federal Board of Revenue (FBR)', url: 'https://fbr.gov.pk/' },
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
