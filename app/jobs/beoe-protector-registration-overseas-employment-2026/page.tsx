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
  Plane,
  Briefcase,
  Globe,
  FileCheck,
  ShieldAlert,
  CreditCard,
  Building,
  Check,
  UserCheck,
  HeartHandshake
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BEOE Protector Registration 2026 – Overseas Employment Guide & Fees | Pakistan Info Hub',
  description:
    'Complete guide to BEOE Protector of Emigrants registration in Pakistan: Step-by-step e-Protector online apply at beoe.gov.pk, Rs. 9,200 fee breakdown (OPF, State Life insurance, OEC), direct emigrant vs OEP agency process, GAMCA medical report, and fake agent verification.',
  keywords: [
    'BEOE protector registration online 2026',
    'e-Protector fee Pakistan direct emigrant',
    'Bureau of Emigration overseas employment protector',
    'Protector of Emigrants stamp passport FIA check',
    'OPF welfare fund fee Rs 4000 State Life insurance Rs 2500',
    'GAMCA medical fitness certificate Gulf work visa',
    'Overseas Employment Promoter OEP license verification',
    'BEOE online emigrant registration delta',
    'NBP QR cashless payment BEOE protector',
  ],
  openGraph: {
    title: 'BEOE Protector Registration 2026 – Overseas Employment Complete Guide',
    description:
      'Official manual for getting Protector clearance under the Emigration Ordinance 1979: e-Protector online portal, fee schedule, mandatory documents, and FIA airport immigration rules.',
    url: 'https://www.pakistaninfohub.com/jobs/beoe-protector-registration-overseas-employment-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/jobs/beoe-protector-registration-overseas-employment-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Jobs Portal', item: 'https://www.pakistaninfohub.com/jobs' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'BEOE Protector Registration 2026',
          item: 'https://www.pakistaninfohub.com/jobs/beoe-protector-registration-overseas-employment-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'BEOE Protector Registration 2026: Overseas Employment e-Protector Guide, Fees & OEP Verification',
      description:
        'A comprehensive public guidance manual detailing the mandatory Bureau of Emigration & Overseas Employment (BEOE) Protector registration, Rs. 9,200 fee breakdown, GAMCA medicals, and immigration clearance.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/jobs/beoe-protector-registration-overseas-employment-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What happens if I try to board an international flight on a work visa without the Protector stamp?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Federal Investigation Agency (FIA) immigration counters at all Pakistani international airports electronically check the BEOE centralized database. If you hold a foreign employment or work visa but lack valid Protector registration, you will be offloaded and barred from boarding under Section 8 of the Emigration Ordinance 1979.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to redo the Protector registration every time I travel back to the same foreign job?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. If you are returning to Pakistan on annual leave or vacation and resuming work with the exact same employer in the same country under a valid visa/iqama, your initial Protector endorsement remains legally valid. You only need a fresh Protector registration if you change employers, obtain a new foreign work visa, or switch to a new country.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I verify if an Overseas Employment Promoter (OEP) or recruitment agent is genuine?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Visit the official BEOE portal at beoe.gov.pk/oep-search and search by the agency name or license number. The portal shows whether the OEP license is active, expired, suspended, or blacklisted, along with the authorized permissions granted for specific foreign recruitment demands. Never deal with unlicensed sub-agents.',
          },
        },
        {
          '@type': 'Question',
          name: 'What insurance and welfare benefits do I receive after paying the Rs. 9,200 protector fee?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your registration includes PKR 2,500 for State Life Insurance Corporation premium (which covers comprehensive life and permanent disability insurance of PKR 1,000,000 for 5 years) and PKR 4,000 for the Overseas Pakistanis Foundation (OPF) Welfare Fund, granting automatic OPF membership for emergency repatriation, family welfare grants, and school quotas.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is a physical visit to a Protectorate of Emigrants (PE) office still mandatory?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Direct emigrants can complete the entire document submission, fee payment via NBP QR/1Link, pre-departure digital orientation, and e-Protector certificate issuance 100% online through beoe.gov.pk without visiting a regional PE office in person.',
          },
        },
      ],
    },
  ],
};

export default function BeoeProtectorRegistrationPage() {
  const breadcrumbs = [
    { nameEn: 'Jobs Portal', nameUr: 'نوکریاں اور ملازمتیں' },
    { nameEn: 'BEOE Protector Registration 2026', nameUr: 'بیورو آف ایمیگریشن پروٹیکٹر رجسٹریشن 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="BEOE & OVERSEAS EMIGRATION" labelUr="اوورسیز پروٹیکٹر گائیڈ" variant="seal" />
            <VerifiedBadge textEn="BEOE & OPF COMPLIANT" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            BEOE Protector Registration 2026: Overseas Work Visa Guide, Fees &amp; e-Protector
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              بیورو آف ایمیگریشن پروٹیکٹر رجسٹریشن 2026: آن لائن اپلائی، فیس شیڈول اور ایئرپورٹ کلیرنس
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Under the Emigration Ordinance 1979, every Pakistani citizen traveling abroad on an employment visa must obtain
            official government &quot;Protection&quot; before departure. Learn how to complete the 100% online e-Protector
            process, understand the Rs. 9,200 fee breakdown, GAMCA medical requirements, and how to avoid fraudulent recruitment agents.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is BEOE Protection & Why is it Mandatory Before Flying?"
          topicTitleUr="پروٹیکٹر رجسٹریشن کیا ہے اور بیرون ملک جانے سے پہلے یہ کیوں لازمی ہے؟"
          answerEn="BEOE Protection is legal government registration under the Emigration Ordinance 1979 that protects overseas Pakistani workers with Rs. 1,000,000 State Life insurance (valid 5 years) and OPF welfare membership. FIA airport immigration strictly bars any employment visa holder from boarding without Protector clearance. The total fee for direct emigrants is Rs. 9,200, payable online via NBP QR/1Link."
          answerUr="پروٹیکٹر ایمیگریشن آرڈیننس 1979 کے تحت قانونی رجسٹریشن ہے جس سے ورکر کو 10 لاکھ کا اسٹیٹ لائف انشورنس اور اوورسیز فاؤنڈیشن کی ممبرشپ ملتی ہے۔ بغیر پروٹیکٹر کے ایف آئی اے ایئرپورٹ پر بورڈنگ نہیں ہونے دیتی۔ ڈائریکٹ ایمیگرنٹ کی کل فیس 9200 روپے ہے جو آن لائن ادا کی جا سکتی ہے۔"
        />

        {/* Section 1: Fee Structure Table */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Official BEOE Fee Structure 2026 (Direct Emigrant)
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            The fee is uniform nationwide for all direct emigrants (individuals who secured their own foreign employment visa).
            Payments are made cashlessly via National Bank of Pakistan (NBP) QR code or 1Link 1Bill PSID:
          </p>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Fee Component</th>
                  <th className="px-4 py-3 text-left">Amount (PKR)</th>
                  <th className="px-4 py-3 text-left">Purpose &amp; Coverage Included</th>
                  <th className="px-4 py-3 text-left">Validity Period</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    OPF Welfare Fund
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-doc-seal">
                    PKR 4,000
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Overseas Pakistanis Foundation membership, emergency repatriation grants, children scholarship quotas
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Full Employment Tenure
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    State Life Insurance Premium
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    PKR 2,500
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Guaranteed PKR 1,000,000 life insurance and accidental disability compensation for designated legal heirs
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    5 Years Comprehensive
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Government Registration Fee
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                    PKR 2,500
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Federal Bureau of Emigration centralized database registration and immigration clearance clearance
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Per Visa Registration
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    OEC Service Processing Fee
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                    PKR 200
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Overseas Employment Certificate digital generation and verification charge
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    One-time
                  </td>
                </tr>

                <tr className="bg-slate-50 dark:bg-slate-800/80 font-bold">
                  <td className="px-4 py-3 font-serif text-doc-ink dark:text-white text-xs">
                    Total Government Fee
                  </td>
                  <td className="px-4 py-3 text-sm font-mono text-doc-seal">
                    PKR 9,200
                  </td>
                  <td colSpan={2} className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Payable cashlessly via NBP QR scan or 1Link / ePay PSID on the e-Protector portal
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Online Registration */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step: e-Protector Online Registration Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Portal Signup</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Visit <code>beoe.gov.pk/online-emigrant-registration-delta</code>. Create an account using your CNIC number, active mobile number, and email. Select <strong>&quot;Direct Emigrant Registration&quot;</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Upload Documents</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Upload clear scans: valid Pakistani Passport, foreign employment visa, signed Foreign Service Agreement (contract), GAMCA medical report (for GCC), and next-of-kin CNIC.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Pay PKR 9,200 Fee</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Scan the NBP QR code or use the 1Link 1Bill PSID in your mobile banking app (EasyPaisa, JazzCash, HBL, Meezan) to complete the cashless payment of Rs. 9,200 instantly.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs">4</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Digital OEC Clearance</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Complete the brief online pre-departure briefing on labor rights. Download your verified digital <strong>Overseas Employment Certificate (OEC)</strong> with QR code, synced live with FIA airport systems.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Required Documents & GAMCA Medical Note */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Mandatory Documents Checklist for Protection
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="font-bold text-doc-seal text-sm block">1. Standard Document Checklist (All Countries)</span>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                <li><strong>Original Valid Passport:</strong> Must have at least 6 months validity remaining.</li>
                <li><strong>Valid Foreign Work Visa:</strong> Electronic visa copy or stamped visa sticker.</li>
                <li><strong>Original CNIC / Smart Card:</strong> Scanned copy of front and back.</li>
                <li><strong>Foreign Service Agreement (FSA):</strong> Employment contract clearly stating job title, basic salary, accommodation, and medical provisions, signed by both employer and worker.</li>
                <li><strong>Nominee / Next of Kin CNIC:</strong> For State Life insurance beneficiary registration.</li>
                <li><strong>Passport-size Photograph:</strong> White background.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="font-bold text-amber-600 dark:text-amber-400 text-sm block">2. Gulf / GCC Workers: GAMCA Medical Mandate</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                For workers traveling to <strong>Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman</strong>, the Gulf Health Council mandates a medical fitness examination:
              </p>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                <li>Must be conducted exclusively at an approved <strong>GAMCA / Wafid medical center</strong> in Pakistan.</li>
                <li>Report must confirm &quot;FIT&quot; status for chest X-ray (tuberculosis), Hepatitis B/C, HIV, and blood tests.</li>
                <li>The online e-Protector system automatically validates your medical barcode directly from the Wafid centralized database.</li>
              </ul>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 4: Direct Emigrant vs OEP Assisted */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Direct Emigrant vs. OEP Agency: Key Process Differences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-ink dark:text-white text-sm block">Direct Emigrant (Individual Visa)</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                You arranged your employment directly (e.g. visa sent by a relative abroad, direct company hire, or online platform). You handle the e-Protector submission yourself and pay the exact Rs. 9,200 government fee. No recruitment service charges apply.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-brass text-sm block">OEP-Assisted (Recruiting Agency)</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                You were hired through a licensed Overseas Employment Promoter (OEP). The agency is legally mandated to process your Protector clearance through their agency portal. By law, OEP service charges are capped by the government, and the agency must issue an official BEOE receipt.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Scam Protection & Verifying OEP Licenses */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Trust &amp; Scam Protection: How to Verify Recruiting Agents (OEPs)
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 font-sans text-xs">
            <div className="flex items-center gap-2 text-doc-brass font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Protect Yourself from Fraudulent Visa Agents</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Fraudulent visa agents and unregistered sub-agents are a serious risk for overseas job seekers.
              Before paying any money or submitting original passports, follow these official verification checks:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                <span className="font-bold text-emerald-400 block">1. Check OEP License Status</span>
                <p className="text-slate-300">
                  Search the agency name at <code>beoe.gov.pk/oep-search</code>. Verify that their government license is <strong>&quot;Active / Valid&quot;</strong> and not suspended or cancelled.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                <span className="font-bold text-emerald-400 block">2. Verify Foreign Job Demand</span>
                <p className="text-slate-300">
                  Check <code>beoe.gov.pk/foreign-jobs</code> to ensure the specific job vacancy and foreign employer quota are officially approved by the Protectorate of Emigrants.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                <span className="font-bold text-emerald-400 block">3. Never Pay Unregistered Sub-Agents</span>
                <p className="text-slate-300">
                  Only deal with the principal license holder at their registered corporate office. Never make cash payments to informal middlemen or social media visa sellers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Overseas &amp; Employment Guides on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/overseas/nicop-mandatory-entry-rules-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Overseas Identity</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NICOP Travel Rules 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Mandatory NICOP entry rules for expatriates.</p>
            </Link>

            <Link
              href="/overseas/pakistan-embassy-attestation-documents"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">MOFA &amp; Embassy</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Embassy Attestation Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Attesting degrees, Nikahnama &amp; contracts for abroad.</p>
            </Link>

            <Link
              href="/jobs/latest-govt-jobs-pakistan"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Employment Hub</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Latest Jobs Portal →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Federal &amp; provincial public career vacancies.</p>
            </Link>
          </div>
        </section>

        {/* Section 7: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (BEOE Protector 2026)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'What happens if I try to board an international flight on a work visa without the Protector stamp?',
                a: 'Federal Investigation Agency (FIA) immigration counters at all Pakistani international airports electronically check the BEOE centralized database. If you hold a foreign employment or work visa but lack valid Protector registration, you will be offloaded and barred from boarding under Section 8 of the Emigration Ordinance 1979.',
              },
              {
                q: 'Do I need to redo the Protector registration every time I travel back to the same foreign job?',
                a: 'No. If you are returning to Pakistan on annual leave or vacation and resuming work with the exact same employer in the same country under a valid visa/iqama, your initial Protector endorsement remains legally valid. You only need a fresh Protector registration if you change employers, obtain a new foreign work visa, or switch to a new country.',
              },
              {
                q: 'How can I verify if an Overseas Employment Promoter (OEP) or recruitment agent is genuine?',
                a: 'Visit the official BEOE portal at beoe.gov.pk/oep-search and search by the agency name or license number. The portal shows whether the OEP license is active, expired, suspended, or blacklisted, along with the authorized permissions granted for specific foreign recruitment demands. Never deal with unlicensed sub-agents.',
              },
              {
                q: 'What insurance and welfare benefits do I receive after paying the Rs. 9,200 protector fee?',
                a: 'Your registration includes PKR 2,500 for State Life Insurance Corporation premium (which covers comprehensive life and permanent disability insurance of PKR 1,000,000 for 5 years) and PKR 4,000 for the Overseas Pakistanis Foundation (OPF) Welfare Fund, granting automatic OPF membership for emergency repatriation, family welfare grants, and school quotas.',
              },
              {
                q: 'Is a physical visit to a Protectorate of Emigrants (PE) office still mandatory?',
                a: 'No. Direct emigrants can complete the entire document submission, fee payment via NBP QR/1Link, pre-departure digital orientation, and e-Protector certificate issuance 100% online through beoe.gov.pk without visiting a regional PE office in person.',
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
            { label: 'Bureau of Emigration & Overseas Employment (BEOE) Official Portal', url: 'https://beoe.gov.pk/' },
            { label: 'Overseas Pakistanis Foundation (OPF) Welfare Division', url: 'https://opf.org.pk/' },
            { label: 'Ministry of Overseas Pakistanis & Human Resource Development', url: 'https://ophrd.gov.pk/' },
            { label: 'State Life Insurance Corporation Emigrant Protection Cell', url: 'https://statelife.com.pk/' },
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
