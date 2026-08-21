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
  Scale,
  Building,
  Gavel,
  ShieldCheck,
  FileText,
  Clock,
  Coins,
  Globe2,
  Users,
  AlertTriangle,
  Landmark,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Succession Certificate Pakistan 2026 – NADRA vs Court, 2025 Amendment & Fees | Pakistan Info Hub',
  description:
    'Complete guide to obtaining a Succession Certificate and Letters of Administration in Pakistan. Compare NADRA SFU (15–25 days) vs Civil Court, 2025 Amendment Act rules, PKR 10k/20k fee schedule, 14-day objection period, and overseas biometrics.',
  keywords: [
    'succession certificate Pakistan NADRA vs court 2026',
    'letters of administration nadra fee',
    'nadra succession facilitation unit process',
    'succession certificate amendment act 2025',
    'succession nadra gov pk online apply',
    'legal heir certificate Pakistan bank account claim',
    'overseas Pakistani succession biometric embassy',
  ],
  openGraph: {
    title: 'Succession Certificate Pakistan 2026 – NADRA vs Court & 2025 Act',
    description:
      'Official procedure, fee breakdown (PKR 10,000 / 20,000), 2025 Amendment concurrent jurisdiction rules, and overseas biometric guidelines for inheritance claims in Pakistan.',
    url: 'https://www.pakistaninfohub.com/legal/succession-certificate-legal-heir-nadra-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/legal/succession-certificate-legal-heir-nadra-2026' },
};

const SuccessionCertificateHelper = dynamic(
  () =>
    import('@/components/SuccessionCertificateHelper').then((m) => ({
      default: m.SuccessionCertificateHelper,
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
        { '@type': 'ListItem', position: 2, name: 'Police & Legal Services', item: 'https://www.pakistaninfohub.com/legal' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Succession Certificate & Legal Heirs 2026',
          item: 'https://www.pakistaninfohub.com/legal/succession-certificate-legal-heir-nadra-2026',
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Pakistan Succession Certificate & Letters of Administration Navigator 2026',
      description:
        'An interactive civic and legal guide to compare NADRA administrative succession issuance against civil court litigation under the Letters of Administration and Succession Certificates (Amendment) Act 2025.',
      url: 'https://www.pakistaninfohub.com/legal/succession-certificate-legal-heir-nadra-2026',
      applicationCategory: 'LegalApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
    },
    {
      '@type': 'HowTo',
      name: 'How to Obtain a Succession Certificate via NADRA in Pakistan (2026)',
      description:
        'Step-by-step procedure to file an application, publish newspaper notices, complete the 14-day objection period, give biometrics, and receive the certificate.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Gather Required Documents',
          text: 'Obtain the deceased’s Union Council death certificate, NADRA CNIC cancellation certificate, Family Registration Certificate (FRC), and list of all movable/immovable assets.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Submit Application at NADRA SFU',
          text: 'One legal heir visits a designated NADRA Succession Facilitation Unit (SFU) or accesses succession.nadra.gov.pk to initiate the case.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Public Notice & 14-Day Objection Window',
          text: 'NADRA publishes an official notice in leading English and Urdu daily newspapers and observes a mandatory 14-day public waiting period.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Biometric Verification of All Heirs',
          text: 'All surviving legal heirs undergo fingerprint biometric verification at any NADRA registration center in Pakistan or designated Pakistan Missions abroad.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Certificate Issuance & Asset Claim',
          text: 'Receive the official QR-coded Succession Certificate or Letters of Administration to claim bank balances, shares, pensions, and transfer property titles.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What happens if one of the legal heirs refuses to give biometric verification at NADRA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NADRA requires 100% unanimous biometric consent from all legal heirs listed on the Family Registration Certificate (FRC). If an heir refuses, is untraceable, or disputes their share, NADRA cannot issue the certificate. In such cases, legal heirs must utilize the Civil Court route under the Succession Act 1925, where a judge evaluates legal shares and issues a binding court decree.',
          },
        },
        {
          '@type': 'Question',
          name: 'What occurs during the 14-day newspaper objection period if an objection is filed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If any third party, undisclosed heir, creditor, or financial institution lodges a formal written objection during the 14-day statutory publication window, NADRA will temporarily halt processing. If the dispute is substantive and cannot be resolved amicably among heirs, the application is referred to the competent Civil Court for judicial adjudication.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between a Succession Certificate and Letters of Administration?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Succession Certificate applies specifically to movable financial assets (bank accounts, national savings certificates, company shares, vehicle transfers, and insurance payouts). Letters of Administration apply to immovable real estate property (plots, houses, agricultural land, and commercial buildings). NADRA issues both under the same unified facilitation framework.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Overseas Pakistani legal heirs provide fingerprints without traveling to Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Overseas Pakistani legal heirs do not need to travel to Pakistan. Once the case is registered by a representative in Pakistan, overseas heirs can visit designated Pakistan Embassies and Consulates abroad (e.g. London, Manchester, Birmingham, Bradford, Dubai, Abu Dhabi, Riyadh, Jeddah, Doha, Chicago, Houston, Toronto) to complete live biometric authentication.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the official government fee for a NADRA Succession Certificate in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For total asset valuations below PKR 100,000, the statutory NADRA fee is PKR 10,000. For asset valuations equal to or exceeding PKR 100,000, the statutory fee is PKR 20,000 (PKR 22,000 in Sindh). Duplicate or amended certificates cost PKR 5,000.',
          },
        },
      ],
    },
  ],
};

export default function SuccessionCertificateLegalHeirPage() {
  const breadcrumbs = [
    { nameEn: 'Police & Legal Services', nameUr: 'پولیس، ایف آئی آر اور قانونی سروسز' },
    { nameEn: 'Succession Certificate NADRA 2026', nameUr: 'جانشینی سرٹیفکیٹ نادرا 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="LEGAL & INHERITANCE" labelUr="وراثت و جانشینی" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Succession Certificate &amp; Letters of Administration 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              نادرا جانشینی سرٹیفکیٹ بمقابلہ سول کورٹ، 2025 ترمیمی ایکٹ اور فیس شیڈول
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            A practical, verified guide for surviving legal heirs in Pakistan. Compare <strong>NADRA Succession Facilitation Units</strong>
            (15–25 days fast track) against the <strong>Civil Court route</strong>, understand the <strong>2025 Amendment Act</strong>
            concurrent jurisdiction update, and verify fees, 14-day public notices, and overseas biometrics.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Get a Succession Certificate in Pakistan (2026)"
          topicTitleUr="پاکستان میں جانشینی سرٹیفکیٹ (وراثت نامہ) حاصل کرنے کا طریقہ"
          answerEn="Surviving legal heirs can obtain a Succession Certificate (for bank accounts, shares, vehicles) and Letters of Administration (for property) via NADRA in 15–25 days (PKR 10,000 for assets <100k, PKR 20,000 for ≥100k). Following the 2025 Amendment Act, heirs can freely choose either NADRA or the Civil Court without needing a decline certificate."
          answerUr="متوفی کے قانونی ورثاء نادرا سے 15 تا 25 دن میں جانشینی سرٹیفکیٹ (بینک اکاؤنٹس، شیئرز وغیرہ) اور لیٹرز آف ایڈمنسٹریشن (پراپرٹی) حاصل کر سکتے ہیں۔ فیس 10 ہزار (1 لاکھ سے کم اثاثے) یا 20 ہزار روپے ہے۔ 2025 ترمیمی ایکٹ کے بعد ورثاء بغیر نادرا این او سی کے براہ راست سول کورٹ کا راستہ بھی اختیار کر سکتے ہیں۔"
        />

        {/* Interactive Comparison & Process Tool */}
        <section aria-label="Succession Certificate Route Navigator Tool">
          <SuccessionCertificateHelper />
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 1: Practical Importance of Succession Certificate */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white flex items-center gap-2">
            <Landmark className="w-6 h-6 text-doc-brass" />
            Why a Succession Certificate is Mandatory After a Family Death
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base space-y-4">
            <p>
              Under Pakistani civil law, when an individual passes away, their bank accounts are immediately frozen,
              and their title to movable/immovable assets cannot be transferred on simple word or family understanding.
              Financial and regulatory institutions—including commercial banks, the State Bank of Pakistan, Central
              Directorate of National Savings (CDNS), SECP stockbrokers, and insurance companies—<strong>strictly require
              a legally authenticated Succession Certificate</strong> before disbursing any funds to the legal heirs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 text-doc-seal dark:text-red-400 font-mono text-xs font-bold uppercase">
                <Coins className="w-4 h-4" />
                <span>1. Bank Balances &amp; Savings</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Account Unfreezing &amp; Claim
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Releases deceased&apos;s current/saving accounts, fixed term deposits (TDR), prize bonds, and National Savings
                Bahbood/Pensioner certificates directly into the heirs&apos; bank accounts.
              </p>
            </div>

            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold uppercase">
                <Building className="w-4 h-4" />
                <span>2. Real Estate &amp; Land</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Letters of Administration
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Authorizes the designated administrator to execute property mutations (Intiqal) at PLRA Arazi Record
                Centres, excise departments, and housing society registrar offices.
              </p>
            </div>

            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold uppercase">
                <FileText className="w-4 h-4" />
                <span>3. Corporate &amp; Pension Dues</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Shares, Cars &amp; Life Insurance
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Facilitates the liquidation of company stock shares via CDC, transfer of motor vehicle ownership at
                Excise offices, and settlement of State Life/private insurance death claims.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Detailed Side-by-Side Comparison (NADRA vs Civil Court) */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white">
            Comparison Matrix: NADRA SFU vs Civil Court Litigation
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Understand the critical differences between the administrative NADRA route and the traditional judicial route:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="w-full text-sm font-sans">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Feature / Parameter</th>
                  <th className="px-4 py-3 text-left text-emerald-300">NADRA Facilitation Unit (SFU)</th>
                  <th className="px-4 py-3 text-left text-amber-300">Civil Court Route</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  {
                    feature: 'Governing Law',
                    nadra: 'Letters of Administration & Succession Act 2021 (Amended 2025)',
                    court: 'Succession Act, 1925',
                  },
                  {
                    feature: 'Typical Processing Time',
                    nadra: '15 to 25 Calendar Days',
                    court: '6 to 18+ Months',
                  },
                  {
                    feature: 'Government Fee',
                    nadra: 'Fixed PKR 10,000 (<100k) / PKR 20,000 (≥100k)',
                    court: 'Court Fee Stamps + Newspaper Cost',
                  },
                  {
                    feature: 'Legal Counsel Requirement',
                    nadra: 'Self-application (No lawyer mandatory)',
                    court: 'Advocate / Legal Counsel mandatory',
                  },
                  {
                    feature: 'Consent Requirement',
                    nadra: '100% Unanimous Biometric Consent of all heirs',
                    court: 'Judge decides shares if an heir disputes/objects',
                  },
                  {
                    feature: 'Overseas Heirs Biometrics',
                    nadra: 'Available at Pakistan Missions in major global cities',
                    court: 'Power of Attorney attested by foreign mission',
                  },
                  {
                    feature: 'Best Suited For',
                    nadra: 'Undisputed, straightforward inheritance cases',
                    court: 'Disputed heirs, minor guardians, contested property',
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition"
                  >
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">{row.feature}</td>
                    <td className="px-4 py-3 font-mono font-semibold text-emerald-600 dark:text-emerald-400 text-xs">
                      {row.nadra}
                    </td>
                    <td className="px-4 py-3 font-mono text-slate-600 dark:text-slate-300 text-xs">{row.court}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Required Documents Checklist */}
        <section className="doc-card p-6 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-slate-900/60 space-y-4">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-doc-brass" />
            Mandatory Documents Checklist for NADRA Succession Application
          </h2>
          <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
            <p>
              Ensure you have collected and prepared the following certified documents before visiting the NADRA
              Succession Facilitation Unit:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>1. Deceased Individual&apos;s Records</span>
                </span>
                <ul className="text-xs text-slate-500 dark:text-slate-400 list-disc list-inside space-y-0.5">
                  <li>Original Union Council / Municipal Death Certificate</li>
                  <li>NADRA CNIC Cancellation Certificate</li>
                  <li>Family Registration Certificate (FRC by Birth &amp; Marriage)</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>2. Legal Heirs &amp; Asset Proofs</span>
                </span>
                <ul className="text-xs text-slate-500 dark:text-slate-400 list-disc list-inside space-y-0.5">
                  <li>Original CNICs/NICOPs of all surviving legal heirs</li>
                  <li>Bank account balance maintenance certificates</li>
                  <li>Registered property registry, Fard Malkiat, or share CDS certificates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Related Civic & Legal Guides */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Legal &amp; Family Documentation Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/nadra/b-form-frc-status-check"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Mandatory FRC</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Family Registration Certificate (FRC) →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check FRC issuance and legal heir tree validation.</p>
            </Link>

            <Link
              href="/certificates/death-certificate-registration-process"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Death Registration</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Death Certificate Registration Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Union council reporting and CNIC cancellation steps.</p>
            </Link>

            <Link
              href="/property/intiqal-registration-online-punjab"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Property Transfer</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Inheritance Mutation (Wirasat Intiqal) →
              </h3>
              <p className="text-xs text-slate-500 mt-1">How property is transferred to legal heirs at Arazi Record Centres.</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            Frequently Asked Questions (Succession &amp; Legal Heirs)
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'What happens if one of the legal heirs refuses to give biometric verification at NADRA?',
                a: 'NADRA requires 100% unanimous biometric consent from all legal heirs listed on the Family Registration Certificate (FRC). If an heir refuses, is untraceable, or disputes their share, NADRA cannot issue the certificate. In such cases, legal heirs must utilize the Civil Court route under the Succession Act 1925, where a judge evaluates legal shares and issues a binding court decree.',
              },
              {
                q: 'What occurs during the 14-day newspaper objection period if an objection is filed?',
                a: 'If any third party, undisclosed heir, creditor, or financial institution lodges a formal written objection during the 14-day statutory publication window, NADRA will temporarily halt processing. If the dispute is substantive and cannot be resolved amicably among heirs, the application is referred to the competent Civil Court for judicial adjudication.',
              },
              {
                q: 'What is the difference between a Succession Certificate and Letters of Administration?',
                a: 'A Succession Certificate applies specifically to movable financial assets (bank accounts, national savings certificates, company shares, vehicle transfers, and insurance payouts). Letters of Administration apply to immovable real estate property (plots, houses, agricultural land, and commercial buildings). NADRA issues both under the same unified facilitation framework.',
              },
              {
                q: 'Can Overseas Pakistani legal heirs provide fingerprints without traveling to Pakistan?',
                a: 'Yes! Overseas Pakistani legal heirs do not need to travel to Pakistan. Once the case is registered by a representative in Pakistan, overseas heirs can visit designated Pakistan Embassies and Consulates abroad (e.g. London, Manchester, Birmingham, Bradford, Dubai, Abu Dhabi, Riyadh, Jeddah, Doha, Chicago, Houston, Toronto) to complete live biometric authentication.',
              },
              {
                q: 'What is the official government fee for a NADRA Succession Certificate in 2026?',
                a: 'For total asset valuations below PKR 100,000, the statutory NADRA fee is PKR 10,000. For asset valuations equal to or exceeding PKR 100,000, the statutory fee is PKR 20,000 (PKR 22,000 in Sindh). Duplicate or amended certificates cost PKR 5,000.',
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
            { label: 'Official NADRA Succession Facilitation Portal', url: 'https://succession.nadra.gov.pk/' },
            { label: 'National Database and Registration Authority (NADRA)', url: 'https://www.nadra.gov.pk/' },
            { label: 'Letters of Administration and Succession Certificates Act 2021 & Amendment Act 2025', url: 'https://www.pakistancode.gov.pk/' },
            { label: 'Ministry of Foreign Affairs (MOFA) Consular Missions Directory', url: 'https://mofa.gov.pk/' },
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
