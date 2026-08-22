import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  Building2,
  FileCheck,
  Globe2,
  Clock,
  Coins,
  MapPin,
  Stamp,
  ArrowRight,
  AlertTriangle
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Police Character Certificate Online Apply Pakistan 2026 – Fee, Process & Portals | Pakistan Info Hub',
  description:
    'Complete guide to applying for a Police Character Certificate (PCC / Clearance) across Punjab (PKM), Sindh (PRVS), Islamabad (ICT), KPK, Balochistan & AJK. Learn typical fees (PKR 350–1000), timelines, MOFA apostille attestation, and overseas procedures.',
  keywords: [
    'Police character certificate online apply Pakistan 2026',
    'Punjab police khidmat markaz character certificate',
    'Sindh police character certificate PRVS',
    'Islamabad police character certificate online',
    'police clearance certificate fee Pakistan',
    'MOFA police certificate attestation apostille',
    'overseas Pakistani police character certificate',
  ],
  openGraph: {
    title: 'Police Character Certificate Online Apply Pakistan 2026 – Fee & Portals',
    description:
      'Province-wise guide and official portal navigator for Pakistan Police Character Certificates, criminal background clearance, and MOFA foreign visa attestation.',
    url: 'https://www.pakistaninfohub.com/certificates/police-character-certificate-online-apply-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/certificates/police-character-certificate-online-apply-2026' },
};

const PoliceCharacterCertificateHelper = dynamic(
  () =>
    import('@/components/PoliceCharacterCertificateHelper').then((m) => ({
      default: m.PoliceCharacterCertificateHelper,
    })),
  {
    ssr: false,
    loading: () => <div className="h-[480px] rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" />,
  }
);

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
          name: 'Police Character Certificate 2026',
          item: 'https://www.pakistaninfohub.com/certificates/police-character-certificate-online-apply-2026',
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Pakistan Police Character Certificate Online Navigator 2026',
      description:
        'An interactive civic guide and official portal bridge to verify requirements, fees, processing timelines, and attestation steps for Police Character Certificates across all Pakistani provinces.',
      url: 'https://www.pakistaninfohub.com/certificates/police-character-certificate-online-apply-2026',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
    },
    {
      '@type': 'HowTo',
      name: 'How to Get a Police Character Certificate in Pakistan (2026)',
      description:
        'Step-by-step instructions to apply for a Police Clearance Certificate in your province, complete criminal verification, and obtain MOFA attestation for foreign visas.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Select Province & Gather Documents',
          text: 'Prepare your original CNIC/NICOP, passport copy, 2 passport-size photographs, and proof of residence (utility bill or rental agreement).',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Submit Application (Online or Khidmat Markaz)',
          text: 'Apply via your provincial portal (e.g. pkm.punjab.gov.pk for Punjab, prvs.sindhpolice.gov.pk for Sindh, or islamabadpolice.gov.pk) or visit your nearest Police Khidmat Markaz.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Pay Government Fee',
          text: 'Pay the government processing fee (typically ranging from PKR 350 to PKR 1,000 depending on the province and standard/urgent processing).',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Collect Verified Certificate',
          text: 'After local police station and Criminal Record Office (CRO) verification (typically 3 to 10 working days), collect your security-stamped certificate with QR code.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Attest via MOFA (For Foreign Travel)',
          text: 'If moving abroad for immigration, work, or study, register on apostille.mofa.gov.pk to obtain Ministry of Foreign Affairs (MOFA) apostille or consular attestation.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I apply for a Police Character Certificate from a different district than the address on my CNIC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In Punjab, yes! Thanks to the centralized Police Khidmat Markaz (PKM) network, you can apply from any PKM center in any district of Punjab regardless of your permanent address. In other provinces (Sindh, KPK, Balochistan, Islamabad), you can apply in your current residential district by providing valid proof of residence, such as a utility bill in your name or a registered tenancy agreement.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can Overseas Pakistanis get a Police Character Certificate without traveling to Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Overseas Pakistanis can obtain a PCC through two main routes: (1) In Punjab, apply directly through the Punjab Police Global Portal (pkm.punjab.gov.pk), or (2) Issue a formal Authority Letter (Power of Attorney) in the name of a close blood relative in Pakistan, get it attested at the nearest Pakistani Embassy or Consulate abroad, and have your representative submit it to the local District Police Officer (DPO) or Khidmat Markaz.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if my province does not have a fully online application portal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In regions like Balochistan or Azad Jammu & Kashmir where online portal integration is in-progress, visit the Central Police Office (CPO), District SSP Office, or local Police Facilitation Center in person with your original CNIC, passport copy, 2 photographs, and affidavit. The local Special Branch and police station will conduct the background check manually.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does the entire process take including MOFA and embassy attestation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The initial police clearance certificate takes approximately 3 to 10 working days. MOFA Apostille/attestation takes 1 to 3 working days via apostille.mofa.gov.pk. If destination embassy legalization is also required (e.g. UAE, Saudi Arabia, Qatar), add another 3 to 7 working days. The full end-to-end process typically takes around 2 to 3 weeks.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the validity period of a Police Character Certificate in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Police Character Certificate is officially valid for 6 months from its date of issuance. Foreign embassies and immigration departments (such as Canada, UK, USA, Australia, and Gulf nations) strictly require the certificate to be within its 6-month validity window at the time of visa submission.',
          },
        },
      ],
    },
  ],
};

export default function PoliceCharacterCertificateOnlineApplyPage() {
  const breadcrumbs = [
    { nameEn: 'Birth, Death & Domicile', nameUr: 'پیدائش، وفات اور ڈومیسائل' },
    { nameEn: 'Police Character Certificate 2026', nameUr: 'پولیس کریکٹر سرٹیفکیٹ 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="PCC NAVIGATOR" labelUr="کریکٹر سرٹیفکیٹ" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Police Character Certificate Online Apply 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پولیس کریکٹر سرٹیفکیٹ (کلیئرنس) آن لائن اپلائی، فیس اور وزارت خارجہ تصدیق
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            A comprehensive, province-by-province guide to obtaining a <strong>Police Character Certificate (PCC)</strong> in
            Pakistan. Compare official portals (Punjab PKM, Sindh PRVS, Islamabad ICT, KPK PAL, Balochistan, AJK),
            typical government fees (PKR 350–1000), timelines, and MOFA apostille requirements.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Get a Police Character Certificate in Pakistan (2026)"
          topicTitleUr="پاکستان میں پولیس کریکٹر سرٹیفکیٹ حاصل کرنے کا طریقہ"
          answerEn="Because there is no single national portal, apply through your province's system: (1) Punjab: Apply online via pkm.punjab.gov.pk or visit any PKM center (PKR 350–500), (2) Sindh: prvs.sindhpolice.gov.pk or CPLC, (3) Islamabad: islamabadpolice.gov.pk, (4) KPK: clearance.kppolice.gov.pk. Processing takes 3–10 days. For foreign visas, get MOFA attestation via apostille.mofa.gov.pk."
          answerUr="پاکستان میں کوئی ایک مشترکہ قومی پورٹل نہیں بلکہ ہر صوبے کا الگ نظام ہے: پنجاب میں pkm.punjab.gov.pk یا کسی بھی خدمت مرکز سے 350 تا 500 روپے میں ملتا ہے، سندھ میں prvs.sindhpolice.gov.pk، اسلام آباد میں islamabadpolice.gov.pk اور کے پی کے میں clearance.kppolice.gov.pk سے اپلائی کریں۔ پروسیسنگ میں 3 تا 10 دن لگتے ہیں۔ بیرون ملک ویزا کے لیے وزارت خارجہ (MOFA) تصدیق لازمی ہے۔"
        />

        {/* Interactive Province Navigator Component */}
        <section aria-label="Police Character Certificate Province Navigator">
          <PoliceCharacterCertificateHelper />
        </section>

        {/* Tracking Callout Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-doc-ink to-slate-900 border border-doc-brass/40 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase text-doc-brass tracking-wider">
              ALREADY APPLIED?
            </span>
            <h3 className="font-serif font-bold text-base text-white">
              Track Your Police Character Certificate Application Status
            </h3>
            <p className="text-xs text-slate-300">
              Have your PKM Token Number, PRVS Case ID, or ICT Application Code? Check your live police verification and collection status.
            </p>
          </div>
          <Link
            href="/certificates/police-character-certificate-tracking-status-2026"
            className="px-5 py-3 rounded-xl bg-doc-brass hover:bg-amber-400 text-doc-ink font-mono font-bold text-xs flex items-center gap-1.5 transition shrink-0 shadow min-h-[44px]"
          >
            <span>TRACK STATUS NOW →</span>
          </Link>
        </div>

        <AdPlacementZone format="horizontal" />

        {/* Section 1: Why the System is Province-Specific */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white flex items-center gap-2">
            <Building2 className="w-6 h-6 text-doc-brass" />
            Understanding the Province-Specific Police Clearance System
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base space-y-4">
            <p>
              In Pakistan, police and law enforcement are provincial subjects under the 18th Constitutional Amendment.
              Consequently, <strong>there is no single centralized federal portal</strong> for Police Character Certificates.
              Each provincial police department maintains its own Criminal Record Office (CRO) database, local Thana
              verification network, and citizen facilitation counters (Police Khidmat Markaz).
            </p>
            <p>
              Whether you are applying for immigration (Canada, Australia, UK, USA), a work permit in the Gulf (UAE, Saudi
              Arabia, Qatar, Oman), foreign higher education, or international licensing, you must obtain your certificate
              from the province where you currently reside or have resided for the relevant verification period.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 text-doc-seal dark:text-red-400 font-mono text-xs font-bold uppercase">
                <FileCheck className="w-4 h-4" />
                <span>1. Criminal Record Verification</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                CRO &amp; Local Thana Check
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                The local police station verifies that you have no active FIRs, criminal convictions, or absconder records
                registered against your CNIC across provincial databases.
              </p>
            </div>

            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold uppercase">
                <Stamp className="w-4 h-4" />
                <span>2. Security Features</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                QR Code &amp; Embossed Seal
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Modern certificates are issued on specialized security paper containing an authentic QR code, digital
                tracking number, and the signature of the Senior Superintendent of Police (SSP / DPO).
              </p>
            </div>

            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold uppercase">
                <Clock className="w-4 h-4" />
                <span>3. Validity Period</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Strict 6-Month Window
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                A Police Character Certificate is strictly valid for 6 months from the date of issue. Foreign visa
                authorities will reject expired certificates, requiring a fresh application.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Comprehensive Province Comparison Table */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white">
            Province-by-Province Portal, Fee &amp; Timeline Comparison
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Overview of official portals, typical government fees, and submission methods across Pakistan:
          </p>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Province / Region</th>
                  <th className="px-4 py-3 text-left text-emerald-300">Official Portal</th>
                  <th className="px-4 py-3 text-left">Submission Mode</th>
                  <th className="px-4 py-3 text-left">Typical Fee</th>
                  <th className="px-4 py-3 text-left">Processing Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  {
                    prov: 'Punjab',
                    portal: 'pkm.punjab.gov.pk',
                    url: 'https://pkm.punjab.gov.pk/public',
                    mode: 'Online & Any District PKM Center',
                    fee: 'PKR 350 – 500',
                    time: '3 – 5 Working Days',
                  },
                  {
                    prov: 'Sindh',
                    portal: 'prvs.sindhpolice.gov.pk',
                    url: 'https://prvs.sindhpolice.gov.pk/',
                    mode: 'Online PRVS & CPLC Centers',
                    fee: 'PKR 500 – 1,000',
                    time: '5 – 10 Working Days',
                  },
                  {
                    prov: 'Islamabad (ICT)',
                    portal: 'islamabadpolice.gov.pk',
                    url: 'https://islamabadpolice.gov.pk/',
                    mode: 'Online & ICT Khidmat Markaz (F-6, G-14)',
                    fee: 'PKR 500 – 1,000',
                    time: '3 – 5 Working Days',
                  },
                  {
                    prov: 'KPK',
                    portal: 'clearance.kppolice.gov.pk',
                    url: 'https://clearance.kppolice.gov.pk/',
                    mode: 'Online & Police Asan Markaz (PAL)',
                    fee: 'PKR 300 – 500',
                    time: '3 – 7 Working Days',
                  },
                  {
                    prov: 'Balochistan',
                    portal: 'balochistanpolice.gov.pk',
                    url: 'https://balochistanpolice.gov.pk/',
                    mode: 'CPO Quetta & District DPO Offices',
                    fee: 'PKR 300 – 600',
                    time: '7 – 14 Working Days',
                  },
                  {
                    prov: 'AJK',
                    portal: 'ajkpolice.gov.pk',
                    url: 'https://ajkpolice.gov.pk/',
                    mode: 'District SSP Offices & PKM Counters',
                    fee: 'PKR 300 – 500',
                    time: '7 – 14 Working Days',
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition"
                  >
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">{row.prov}</td>
                    <td className="px-4 py-3">
                      <a
                        href={row.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-doc-seal hover:underline flex items-center gap-1 font-mono text-xs"
                      >
                        {row.portal} <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300 text-xs">{row.mode}</td>
                    <td className="px-4 py-3 font-mono font-semibold text-emerald-600 dark:text-emerald-400 text-xs">
                      {row.fee}
                    </td>
                    <td className="px-4 py-3 font-mono text-slate-600 dark:text-slate-300 text-xs">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </section>

        {/* Section 3: Why MOFA and Embassy Attestations Are Required */}
        <section className="doc-card p-6 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-slate-900/60 space-y-4">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white flex items-center gap-2">
            <Stamp className="w-5 h-5 text-doc-brass" />
            Why MOFA and Foreign Embassy Attestations Are Necessary
          </h2>
          <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
            <p>
              While a Police Character Certificate is legally binding within Pakistan, foreign governments and immigration
              officers cannot directly authenticate a local provincial police stamp. To bridge this legal gap:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="font-bold text-doc-ink dark:text-white text-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>1. MOFA Apostille / Attestation</span>
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                  The Ministry of Foreign Affairs (MOFA) verifies the authenticity of the issuing police official’s
                  signature. For Apostille member countries, this single government stamp is all that is required.
                </p>
                <a
                  href="https://apostille.mofa.gov.pk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono font-bold text-doc-seal dark:text-red-400 hover:underline flex items-center gap-1 pt-1"
                >
                  <span>apostille.mofa.gov.pk</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="font-bold text-doc-ink dark:text-white text-xs flex items-center gap-1.5">
                  <Globe2 className="w-4 h-4 text-amber-500" />
                  <span>2. Destination Embassy Legalization</span>
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                  For non-Apostille nations (such as UAE, Saudi Arabia, Qatar, Kuwait), the MOFA-attested certificate must
                  receive a final consular stamp from that country&apos;s embassy or authorized visa center in Islamabad/Karachi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Related Civic & Overseas Guides */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Document &amp; Overseas Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/overseas/pakistan-embassy-attestation-documents"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Overseas Guide</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Embassy Document Attestation Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Power of Attorney and authority letter verification steps.</p>
            </Link>

            <Link
              href="/certificates/police-character-certificate-tracking-status-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Application Status</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Police Certificate Status Tracking →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Track PKM Token, PRVS Case ID, or ICT Application Code online.</p>
            </Link>

            <Link
              href="/certificates/domicile-certificate-apply-online"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Citizenship</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Domicile Online Application Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Online domicile issuance in Punjab, Sindh, and KPK.</p>
            </Link>

            <Link
              href="/passport/renewal-documents"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Passports</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Passport Renewal Document Checklist →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Required documents for fast-track and e-Passport issuance.</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            Frequently Asked Questions (Police Character Certificates)
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'Can I apply for a Police Character Certificate from a different district than the address on my CNIC?',
                a: 'In Punjab, yes! Thanks to the centralized Police Khidmat Markaz (PKM) network, you can apply from any PKM center in any district of Punjab regardless of your permanent address. In other provinces (Sindh, KPK, Balochistan, Islamabad), you can apply in your current residential district by providing valid proof of residence, such as a utility bill in your name or a registered tenancy agreement.',
              },
              {
                q: 'How can Overseas Pakistanis get a Police Character Certificate without traveling to Pakistan?',
                a: 'Overseas Pakistanis can obtain a PCC through two main routes: (1) In Punjab, apply directly through the Punjab Police Global Portal (pkm.punjab.gov.pk), or (2) Issue a formal Authority Letter (Power of Attorney) in the name of a close blood relative in Pakistan, get it attested at the nearest Pakistani Embassy or Consulate abroad, and have your representative submit it to the local District Police Officer (DPO) or Khidmat Markaz.',
              },
              {
                q: 'What should I do if my province does not have a fully online application portal?',
                a: 'In regions like Balochistan or Azad Jammu & Kashmir where online portal integration is in-progress, visit the Central Police Office (CPO), District SSP Office, or local Police Facilitation Center in person with your original CNIC, passport copy, 2 photographs, and affidavit. The local Special Branch and police station will conduct the background check manually.',
              },
              {
                q: 'How long does the entire process take including MOFA and embassy attestation?',
                a: 'The initial police clearance certificate takes approximately 3 to 10 working days. MOFA Apostille/attestation takes 1 to 3 working days via apostille.mofa.gov.pk. If destination embassy legalization is also required (e.g. UAE, Saudi Arabia, Qatar), add another 3 to 7 working days. The full end-to-end process typically takes around 2 to 3 weeks.',
              },
              {
                q: 'What is the validity period of a Police Character Certificate in Pakistan?',
                a: 'A Police Character Certificate is officially valid for 6 months from its date of issuance. Foreign embassies and immigration departments (such as Canada, UK, USA, Australia, and Gulf nations) strictly require the certificate to be within its 6-month validity window at the time of visa submission.',
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
            { label: 'Punjab Police Khidmat Markaz Global Portal', url: 'https://pkm.punjab.gov.pk/public' },
            { label: 'Sindh Police Record Verification System (PRVS)', url: 'https://prvs.sindhpolice.gov.pk/' },
            { label: 'Islamabad Capital Territory Police Portal', url: 'https://islamabadpolice.gov.pk/' },
            { label: 'KPK Police Clearance System', url: 'https://clearance.kppolice.gov.pk/' },
            { label: 'Ministry of Foreign Affairs (MOFA) Apostille Portal', url: 'https://apostille.mofa.gov.pk/' },
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
