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
  FileCheck,
  Building,
  Users,
  Check,
  AlertCircle,
  FileText,
  UserX,
  Scale
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Death Certificate Registration Process 2026 – Union Council, CRMS & NADRA Cancellation | Pakistan Info Hub',
  description:
    'Step-by-step guide to registering a death in Pakistan: Union Council, Cantonment Board & CDA procedures, required documents (hospital slip vs home death witness attestation), free 1-year registration rules, and mandatory NADRA CNIC cancellation certificate for inheritance.',
  keywords: [
    'death certificate registration process Pakistan 2026',
    'Union Council computerized death certificate CRMS',
    'how to register death at home without hospital certificate',
    'NADRA CNIC cancellation certificate for deceased',
    'death certificate fee timeline Punjab Sindh KPK ICT',
    'difference between death certificate and succession certificate',
    'two witness attestation for death registration',
    'CDA Cantonment Board death reporting',
  ],
  openGraph: {
    title: 'Death Certificate Registration Process 2026 – Union Council & NADRA Guide',
    description:
      'A respectful, practical guide to registering a death at your local Union Council / Cantonment, required proofs, free 1-year registration timeline, and NADRA CNIC cancellation.',
    url: 'https://www.pakistaninfohub.com/certificates/death-certificate-registration-process-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/certificates/death-certificate-registration-process-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Birth, Death & Domicile', item: 'https://www.pakistaninfohub.com/certificates' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Death Certificate Registration Process 2026',
          item: 'https://www.pakistaninfohub.com/certificates/death-certificate-registration-process-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Death Certificate Registration Process in Pakistan 2026: Union Council, CRMS & NADRA CNIC Cancellation',
      description:
        'A comprehensive, respectful procedural guide explaining how to register a death at the local Union Council or Cantonment Board, required documents, witness rules, fee schedules, and subsequent NADRA CNIC cancellation.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/certificates/death-certificate-registration-process-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who is legally eligible to apply for a computerized Death Certificate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Only first-degree direct blood relatives and legal dependents of the deceased are authorized to apply. This includes the surviving spouse (widow/widower), adult sons or daughters, parents, or real biological siblings. Distant relatives or unrelated acquaintances cannot apply on their own.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I register a death if it occurred at home with no hospital death slip?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When a death occurs at home, you do not need a hospital record. Instead, provide a signed Graveyard / Cemetery (Qabristan) burial receipt and an attestation from two adult male/female witnesses who personally knew the deceased and reside in the same locality, presenting their original CNICs and signatures/thumbprints before the Union Council Secretary.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it necessary to cancel the deceased person’s CNIC at NADRA after getting the Union Council Death Certificate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, this is an essential legal step. Surrendering the deceased\'s physical CNIC at a NADRA center (or via Pak-Identity online for overseas heirs) generates the official "NADRA Cancellation Certificate". This permanently freezes the identity to prevent fraudulent bank or SIM misuse and is mandatory for legal inheritance, bank account unfreezing, and Succession Certificates.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the key difference between a Death Certificate and a Succession Certificate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Death Certificate (issued by the Union Council/CRMS) merely certifies the factual occurrence and date of death. A Succession Certificate (issued by NADRA or a Civil Court) legally identifies all rightful legal heirs and specifies their exact inheritance shares to distribute moveable financial assets, bank funds, and property.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is death registration free if done within one year in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under provincial Local Government regulations (such as Punjab Local Government rules), standard death registration submitted within the prescribed statutory period (typically up to one year) is 100% free of government tax, with only a nominal computer printing/stationery charge (Rs. 100-200). Late registrations beyond one year require magistrate/AC verification and a late fee.',
          },
        },
      ],
    },
  ],
};

export default function DeathCertificateRegistrationPage() {
  const breadcrumbs = [
    { nameEn: 'Birth, Death & Domicile', nameUr: 'پیدائش، وفات اور ڈومیسائل' },
    { nameEn: 'Death Certificate Process 2026', nameUr: 'ڈیتھ سرٹیفکیٹ اور نادرا تنسیخ کارڈ 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="CIVIL REGISTRATION (CRMS)" labelUr="سی آر ایم ایس وفات رجسٹریشن" variant="seal" />
            <VerifiedBadge textEn="UNION COUNCIL & NADRA VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Death Certificate Registration Process 2026: Union Council, CRMS &amp; NADRA Cancellation
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              کمپیوٹرائزڈ ڈیتھ سرٹیفکیٹ اور نادرا شناختی کارڈ تنسیخ کا مکمل قانونی طریقہ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            A calm, respectful, and practical manual for families handling the loss of a loved one. Learn how to obtain
            the computerized Union Council Death Certificate, understand witness rules for home deaths, the free 1-year registration
            timeline, and the crucial follow-up step of canceling the CNIC with NADRA for legal inheritance.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="Where Do You Actually Report a Death in Pakistan?"
          topicTitleUr="پاکستان میں وفات کا اندراج کہاں کروایا جاتا ہے؟"
          answerEn="A death must be reported to the local Union Council (or Cantonment Board / CDA Directorate of Municipal Administration) where the death occurred, NOT directly to NADRA. The local authority registers the event in the Civil Registration Management System (CRMS) and prints the official certificate. Afterward, take this certificate to NADRA to cancel the deceased's CNIC."
          answerUr="وفات کا اندراج نادرا میں نہیں بلکہ متعلقہ یونین کونسل، کنٹونمنٹ بورڈ یا سی ڈی اے میں کروایا جاتا ہے۔ یونین کونسل سی آر ایم ایس (CRMS) سسٹم میں اندراج کر کے کمپیوٹرائزڈ سرٹیفکیٹ جاری کرتی ہے۔ اس کے بعد نادرا جا کر شناختی کارڈ منسوخ کروایا جاتا ہے۔"
        />

        {/* Section 1: Step-by-Step Registration Procedure */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step: Union Council Death Certificate Procedure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Identify Local UC</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Visit the Union Council office, Cantonment Board office, or CDA DMA office in the geographic jurisdiction where the death or burial took place.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Submit Proof Documents</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Submit the hospital death slip (or 2 witness CNIC attestations if passed away at home), graveyard burial receipt, deceased CNIC, and applicant CNIC.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">CRMS Data Entry</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The UC Secretary inputs the deceased&apos;s particulars into the federal <strong>Civil Registration Management System (CRMS)</strong> and prints a draft verification slip.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs">4</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Collect Certificate</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Sign the register and collect the barcoded, official bilingual (Urdu/English) Computerized Death Certificate bearing the Secretary and Chairman&apos;s stamp.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Required Documents & Home Death Witness Rules */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Document Checklist: Hospital Death vs. Home Death
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="font-bold text-doc-seal text-sm block">Scenario A: Death Occurred in Hospital</span>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                <li><strong>Hospital Death Certificate:</strong> Original slip signed and stamped by the attending doctor/medical superintendent.</li>
                <li><strong>Graveyard / Burial Slip:</strong> Receipt from the cemetery caretaker (Gor-kan).</li>
                <li><strong>Deceased CNIC:</strong> Original or clear copy of Computerized National Identity Card.</li>
                <li><strong>Applicant CNIC:</strong> Original CNIC of direct legal heir (spouse, child, parent, sibling).</li>
                <li><strong>Filled UC Application Form:</strong> Standard death declaration form.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="font-bold text-amber-600 dark:text-amber-400 text-sm block">Scenario B: Natural Death at Home (No Hospital Record)</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                If the person passed away peacefully at home, no hospital slip is necessary. You will need:
              </p>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                <li><strong>Two Witness Attestations:</strong> Two adult neighbors/relatives with valid CNICs who personally knew the deceased must sign the witness box.</li>
                <li><strong>Graveyard Receipt:</strong> Official burial confirmation slip from the local cemetery committee.</li>
                <li><strong>Local Verification:</strong> Signature of the local councilor, village lambardar, or prayer leader (Imam Masjid) confirming the date and cause of death.</li>
                <li><strong>Deceased &amp; Applicant CNICs:</strong> As in standard applications.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Fee Schedule & Free 1-Year Rule */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Fee Schedule &amp; Registration Time Windows
            </h2>
          </div>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Time Window</th>
                  <th className="px-4 py-3 text-left">Government Registration Fee</th>
                  <th className="px-4 py-3 text-left">Processing Timeframe</th>
                  <th className="px-4 py-3 text-left">Special Requirements</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Standard (Within 60 Days – 1 Year)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    FREE (Nominal Rs. 100 – 200 print charge)
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    3 to 7 Working Days
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Standard UC Secretary approval without court intervention
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Late Registration (After 1 to 5 Years)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                    PKR 500 – 1,000 (Late fee)
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    7 to 15 Working Days
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Requires Assistant Commissioner (AC) / Magistrate inquiry order
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Delayed Entry (Over 5 Years)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-doc-seal">
                    PKR 1,000 – 2,000
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    15 to 30 Working Days
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Civil Court declaratory order / formal judicial verification
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 4: Mandatory Follow-Up Step: NADRA CNIC Cancellation */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <UserX className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Crucial Next Step: NADRA CNIC Cancellation Certificate
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 font-sans text-xs">
            <div className="flex items-center gap-2 text-doc-seal font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span>Why Canceling the CNIC at NADRA is Mandatory</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Obtaining the Union Council Death Certificate is only part of the legal requirement. You must surrender
              the deceased person&apos;s physical CNIC at a NADRA Registration Center (or through the online Pak-Identity portal for overseas heirs)
              to obtain an official <strong>NADRA Cancellation Certificate</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white block">1. Prevents Identity Fraud</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Permanently deactivates the CNIC number across the telecom, banking, and tax databases so no fraudulent SIM cards or bank loans can be opened in their name.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white block">2. Succession Certificate Prerequisite</span>
                <p className="text-slate-600 dark:text-slate-300">
                  NADRA will NOT process a Succession Certificate (for inheritance distribution) until the deceased person&apos;s card has been formally cancelled in the system.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white block">3. Bank &amp; Pension Release</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Financial institutions, the State Life Insurance Corporation, and government pension departments require the NADRA Cancellation Certificate to release family benefits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Death Certificate vs Succession Certificate */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Death Certificate vs. Succession Certificate: The Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-ink dark:text-white text-sm block">Death Certificate (Union Council / CRMS)</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Confirms only that the individual has passed away, including the exact date, time, and place of death. It does <em>not</em> mention legal heirs or distribute any property or bank money.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-brass text-sm block">Succession Certificate (NADRA / Civil Court)</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Determines the biological and legal heirs (widow, sons, daughters, parents) and their exact Islamic/civil inheritance shares to transfer bank balances, shares, vehicles, and property.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Civil Registration &amp; Legal Succession Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/certificates/succession-certificate-nadra-legal-heirs"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Inheritance Law</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NADRA Succession Certificate Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Biometric inheritance verification for legal heirs.</p>
            </Link>

            <Link
              href="/certificates/police-character-certificate-online-apply-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Police Verification</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Police Character Certificate →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Apply for verified police clearance certificates.</p>
            </Link>

            <Link
              href="/nadra/lost-stolen-cnic-replacement-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">ID Replacement</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Lost CNIC Replacement Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Reprint vs renewal procedures for Smart CNIC.</p>
            </Link>
          </div>
        </section>

        {/* Section 7: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Death Registration Pakistan)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Who is legally eligible to apply for a computerized Death Certificate?',
                a: 'Only first-degree direct blood relatives and legal dependents of the deceased are authorized to apply. This includes the surviving spouse (widow/widower), adult sons or daughters, parents, or real biological siblings. Distant relatives or unrelated acquaintances cannot apply on their own.',
              },
              {
                q: 'How do I register a death if it occurred at home with no hospital death slip?',
                a: 'When a death occurs at home, you do not need a hospital record. Instead, provide a signed Graveyard / Cemetery (Qabristan) burial receipt and an attestation from two adult male/female witnesses who personally knew the deceased and reside in the same locality, presenting their original CNICs and signatures/thumbprints before the Union Council Secretary.',
              },
              {
                q: 'Is it necessary to cancel the deceased person’s CNIC at NADRA after getting the Union Council Death Certificate?',
                a: 'Yes, this is an essential legal step. Surrendering the deceased\'s physical CNIC at a NADRA center (or via Pak-Identity online for overseas heirs) generates the official "NADRA Cancellation Certificate". This permanently freezes the identity to prevent fraudulent bank or SIM misuse and is mandatory for legal inheritance, bank account unfreezing, and Succession Certificates.',
              },
              {
                q: 'What is the key difference between a Death Certificate and a Succession Certificate?',
                a: 'A Death Certificate (issued by the Union Council/CRMS) merely certifies the factual occurrence and date of death. A Succession Certificate (issued by NADRA or a Civil Court) legally identifies all rightful legal heirs and specifies their exact inheritance shares to distribute moveable financial assets, bank funds, and property.',
              },
              {
                q: 'Is death registration free if done within one year in Pakistan?',
                a: 'Under provincial Local Government regulations (such as Punjab Local Government rules), standard death registration submitted within the prescribed statutory period (typically up to one year) is 100% free of government tax, with only a nominal computer printing/stationery charge (Rs. 100-200). Late registrations beyond one year require magistrate/AC verification and a late fee.',
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
            { label: 'Local Government & Community Development Department (CRMS)', url: 'https://lgcd.punjab.gov.pk/' },
            { label: 'Sindh Local Government Civil Registration Division', url: 'https://localgovernment.sindh.gov.pk/' },
            { label: 'Khyber Pakhtunkhwa Local Government Department', url: 'https://lgkp.gov.pk/' },
            { label: 'Capital Development Authority (CDA) Directorate of Municipal Administration', url: 'https://cda.gov.pk/' },
            { label: 'NADRA Civil Registration Management System (CRMS)', url: 'https://www.nadra.gov.pk/' },
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
