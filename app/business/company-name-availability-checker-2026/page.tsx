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
  Briefcase,
  Building,
  CheckCircle2,
  FileText,
  DollarSign,
  ShieldCheck,
  Scale,
  Layers,
  Sparkles,
  AlertTriangle
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SECP Company Name Check Online Pakistan 2026 – eZfile Availability & Rules | Pakistan Info Hub',
  description:
    'Check proposed company name availability against SECP naming rules in Pakistan. Instant validator for restricted keywords, required legal suffixes ((Private) Limited / SMC), and direct guide to the official SECP eZfile portal.',
  keywords: [
    'SECP company name check online Pakistan 2026',
    'SECP name availability search',
    'SECP ezfile company registration',
    'SECP restricted words list',
    'private limited company name rules Pakistan',
    'single member company smc pvt name suffix',
    'SECP name reservation fee 2026',
  ],
  openGraph: {
    title: 'SECP Company Name Check Online Pakistan 2026 – eZfile Availability',
    description:
      'Client-side company name validator, restricted keyword detector, and official SECP eZfile registration guide for Pakistani startups and businesses.',
    url: 'https://www.pakistaninfohub.com/business/company-name-availability-checker-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/business/company-name-availability-checker-2026' },
};

const CompanyNameAvailabilityChecker = dynamic(
  () =>
    import('@/components/CompanyNameAvailabilityChecker').then((m) => ({
      default: m.CompanyNameAvailabilityChecker,
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
        { '@type': 'ListItem', position: 2, name: 'Business & SECP Registration', item: 'https://www.pakistaninfohub.com/business' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'SECP Company Name Availability Checker 2026',
          item: 'https://www.pakistaninfohub.com/business/company-name-availability-checker-2026',
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'SECP Company Name Availability & Rules Checker 2026',
      description:
        'An interactive validation tool to verify company naming compliance with the Companies Act 2017, detect restricted keywords, format statutory suffixes, and navigate official SECP eZfile portal services.',
      url: 'https://www.pakistaninfohub.com/business/company-name-availability-checker-2026',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
    },
    {
      '@type': 'HowTo',
      name: 'How to Reserve and Register a Company Name on SECP eZfile (2026)',
      description:
        'Step-by-step instructions to check name availability, avoid prohibited keywords, and submit your formal name reservation on the official SECP eZfile portal.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Check Name Compliance',
          text: 'Select your entity structure (SMC-Pvt, Pvt Ltd, or LLP) and test your proposed brand name against SECP restricted word patterns in our validator.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Open Official SECP eZfile Portal',
          text: 'Navigate to ezfile.secp.gov.pk and log in using your digital PIN and CNIC credentials.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Submit Name Reservation Form',
          text: 'Provide up to 3 proposed name choices in order of preference and enter your business principal activity sector.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Pay Statutory Fee & Obtain Approval',
          text: 'Pay the PKR 1,000 name reservation fee via 1Link, debit/credit card, or ADC challan. Upon approval, your name is reserved for 60 calendar days.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does an SECP company name reservation remain valid in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Once the Registrar approves your name reservation application on the eZfile portal, the name is reserved exclusively for your company for a period of 60 calendar days. You must submit your incorporation documents (Memorandum & Articles of Association) within this 60-day window.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if my proposed company name is rejected by SECP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SECP allows you to provide 3 prioritized name choices on a single application. If the first choice is identical or deceptively similar to an existing entity, the registrar evaluates your secondary or tertiary options without requiring an extra fee. If all 3 are rejected, you will receive a formal rejection letter with specific reasons and can file a fresh application with modified distinct branding.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between a Single Member Company (SMC) and a Private Limited company?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Single Member Company (SMC-Private Limited) is owned and directed by a single individual (100% solo shareholding), requiring the suffix "(SMC-Private) Limited". A standard Private Limited company requires a minimum of 2 directors/shareholders and carries the suffix "(Private) Limited". Both offer identical limited liability protection.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a lawyer or consultant to register a company on SECP eZfile?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The SECP eZfile digital platform is designed for direct self-registration by startup founders and business owners. Standardized digital Memorandum and Articles of Association templates are automatically generated by the system.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the total official fee for incorporating a small private limited company in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For a company with authorized capital of up to PKR 100,000, the official SECP costs are: PKR 1,000 (Name Reservation) + PKR 1,500 to 2,500 (Online Incorporation Base Fee) + PKR 200 (User Registration PIN), bringing total government statutory fees to approximately PKR 2,700 to 3,700.',
          },
        },
      ],
    },
  ],
};

export default function CompanyNameAvailabilityCheckerPage() {
  const breadcrumbs = [
    { nameEn: 'Business & SECP Registration', nameUr: 'کاروبار اور ایس ای سی پی رجسٹریشن' },
    { nameEn: 'SECP Company Name Checker 2026', nameUr: 'کمپنی نام چیکر 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="SECP BUSINESS TOOL" labelUr="ایس ای سی پی بزنس ٹول" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            SECP Company Name Availability &amp; Rules Checker 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              ایس ای سی پی کمپنی نام کی دستیابی، قانونی اصول و رجسٹریشن رہنمائی
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Validate your proposed business name against the <strong>Companies Act 2017</strong> naming regulations.
            Detect prohibited keywords, format mandatory legal suffixes ((Private) Limited / SMC / LLP), and access the
            official SECP eZfile registration portal. 100% client-side privacy.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Check SECP Company Name Availability in Pakistan (2026)"
          topicTitleUr="پاکستان میں ایس ای سی پی کمپنی کا نام چیک کرنے کا طریقہ"
          answerEn="To check and reserve a company name: (1) Ensure your name is unique, at least 3 characters, and free of restricted words (Bank, State, National, Council), (2) Attach the required suffix like '(Private) Limited' or '(SMC-Private) Limited', and (3) Reserve your name on the official SECP eZfile portal (ezfile.secp.gov.pk) for PKR 1,000."
          answerUr="کمپنی کا نام چیک اور محفوظ کرنے کے لیے: (1) نام منفرد ہو اور ممنوعہ الفاظ (جیسے Bank, National, State) سے پاک ہو، (2) قانونی لاحقہ مثلاً (Private) Limited یا (SMC-Private) Limited شامل کریں، اور (3) آفیشل eZfile پورٹل (ezfile.secp.gov.pk) پر 1000 روپے فیس کے ساتھ 60 دن کے لیے نام ریزرو کروائیں۔"
        />

        {/* Interactive Tool */}
        <section aria-label="SECP Company Name Availability Checker Tool">
          <CompanyNameAvailabilityChecker />
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 1: SECP Naming Principles and Guidelines */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white flex items-center gap-2">
            <Scale className="w-6 h-6 text-doc-brass" />
            SECP Company Naming Rules Under Companies Act 2017
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base space-y-4">
            <p>
              Under <strong>Section 10 of the Companies Act, 2017</strong> and the <strong>Companies (Incorporation) Regulations</strong>,
              the Securities and Exchange Commission of Pakistan (SECP) reviews all proposed business names to ensure they
              are distinctive, truthful, and do not mislead consumers or infringe upon existing registered entities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 text-doc-seal dark:text-red-400 font-mono text-xs font-bold uppercase">
                <Building className="w-4 h-4" />
                <span>1. Distinctiveness &amp; Similarity</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Identical &amp; Deceptive Names
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                A proposed name cannot be identical or phonetically similar to any existing active company or foreign
                corporation in Pakistan. Merely changing &quot;Pvt&quot; or adding plural &quot;s&quot; does not make a name distinctive.
              </p>
            </div>

            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>2. Trademark Protection</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Registered Trade Names (IPO)
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                You cannot register a company name that copies a well-known brand or registered trademark under the
                Trade Marks Ordinance 2001 (e.g. Apple, Toyota, Engro) unless you possess legitimate written authorization.
              </p>
            </div>

            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold uppercase">
                <AlertTriangle className="w-4 h-4" />
                <span>3. Restricted Keywords</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Special Licensing &amp; Patronage
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Words like <em>Bank, Takaful, Modaraba, Federal, National, Authority, University</em> are restricted and
                require prior regulatory No-Objection Certificates (NOC) from SBP, HEC, or federal authorities.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Comparison of Corporate Structures */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white">
            SECP Legal Company Structures &amp; Suffix Requirements
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Compare key parameters across the standard business registration categories in Pakistan:
          </p>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Company Structure</th>
                  <th className="px-4 py-3 text-left text-emerald-300">Statutory Suffix</th>
                  <th className="px-4 py-3 text-left">Min Shareholders</th>
                  <th className="px-4 py-3 text-left">Liability Protection</th>
                  <th className="px-4 py-3 text-left">Target Audience</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  {
                    type: 'Single Member Company (SMC)',
                    suffix: '(SMC-Private) Limited',
                    members: '1 Director (Solo)',
                    liability: 'Limited to Share Capital',
                    target: 'Solo founders, IT consultants, individual owners',
                  },
                  {
                    type: 'Private Limited Company (Pvt Ltd)',
                    suffix: '(Private) Limited',
                    members: 'Min 2 Directors',
                    liability: 'Limited to Share Capital',
                    target: 'Startups, partnerships, trading firms, SMEs',
                  },
                  {
                    type: 'Limited Liability Partnership (LLP)',
                    suffix: 'LLP',
                    members: 'Min 2 Partners',
                    liability: 'Limited to Partner Contribution',
                    target: 'Professional service firms (Law, Audit, Medical)',
                  },
                  {
                    type: 'Public Limited Company',
                    suffix: 'Limited',
                    members: 'Min 3 (Unlisted) / 7 (Listed)',
                    liability: 'Limited to Share Value',
                    target: 'Large scale corporations raising public equity',
                  },
                  {
                    type: 'Non-Profit / Section 42',
                    suffix: 'Foundation / Association',
                    members: 'Min 3 Promoters',
                    liability: 'Limited by Guarantee',
                    target: 'Charitable trusts, NGOs, welfare organizations',
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition"
                  >
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">{row.type}</td>
                    <td className="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400 text-xs">
                      {row.suffix}
                    </td>
                    <td className="px-4 py-3 font-mono text-slate-600 dark:text-slate-300 text-xs">{row.members}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300 text-xs">{row.liability}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400 text-xs">{row.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </section>

        {/* Section 3: End-to-End Incorporation Guide */}
        <section className="doc-card p-6 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-slate-900/60 space-y-4">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-doc-brass" />
            End-to-End Company Incorporation Steps on SECP eZfile
          </h2>
          <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
            <ol className="list-decimal list-inside space-y-2 text-slate-600 dark:text-slate-300">
              <li>
                <strong>Create User Account (PIN):</strong> Register on <code className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono text-doc-ink dark:text-doc-brass">ezfile.secp.gov.pk</code> with your CNIC/Passport and mobile number (PKR 200 fee).
              </li>
              <li>
                <strong>Reserve Company Name:</strong> Submit 3 prioritized name options and pay the PKR 1,000 name reservation fee (approval granted in 1–2 working days).
              </li>
              <li>
                <strong>Submit Incorporation Application:</strong> Fill in company registered office address, authorized share capital (e.g. PKR 100,000), principal line of business, and director details.
              </li>
              <li>
                <strong>Sign Digitally &amp; Pay Dues:</strong> Electronically sign with your SECP digital PIN and settle statutory filing fees via 1Link, debit/credit card, or mobile banking.
              </li>
              <li>
                <strong>Download Incorporation Certificate:</strong> SECP issues your official digital <strong>Certificate of Incorporation</strong> along with the company&apos;s 7-digit Corporate Universal Identification Number (CUIN).
              </li>
            </ol>
          </div>
        </section>

        {/* Section 4: Related Business Guides */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Business &amp; SECP Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/business/secp-company-registration-online-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Complete Guide</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                SECP Company Registration Online 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Step-by-step tutorial for Pvt Ltd &amp; SMC incorporation.</p>
            </Link>

            <Link
              href="/business/sole-proprietorship-ntn-registration"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Sole Proprietor</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Sole Proprietorship NTN Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">How to register an individual business name on FBR Iris.</p>
            </Link>

            <Link
              href="/tax/ntn-registration-online-pakistan"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Tax NTN</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Corporate NTN Registration Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">How company NTN and sales tax (STRN) are activated.</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            Frequently Asked Questions (SECP Company Names)
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'How long does an SECP company name reservation remain valid in Pakistan?',
                a: 'Once the Registrar approves your name reservation application on the eZfile portal, the name is reserved exclusively for your company for a period of 60 calendar days. You must submit your incorporation documents (Memorandum & Articles of Association) within this 60-day window.',
              },
              {
                q: 'What happens if my proposed company name is rejected by SECP?',
                a: 'SECP allows you to provide 3 prioritized name choices on a single application. If the first choice is identical or deceptively similar to an existing entity, the registrar evaluates your secondary or tertiary options without requiring an extra fee. If all 3 are rejected, you will receive a formal rejection letter with specific reasons and can file a fresh application with modified distinct branding.',
              },
              {
                q: 'What is the difference between a Single Member Company (SMC) and a Private Limited company?',
                a: 'A Single Member Company (SMC-Private Limited) is owned and directed by a single individual (100% solo shareholding), requiring the suffix "(SMC-Private) Limited". A standard Private Limited company requires a minimum of 2 directors/shareholders and carries the suffix "(Private) Limited". Both offer identical limited liability protection.',
              },
              {
                q: 'Do I need a lawyer or consultant to register a company on SECP eZfile?',
                a: 'No. The SECP eZfile digital platform is designed for direct self-registration by startup founders and business owners. Standardized digital Memorandum and Articles of Association templates are automatically generated by the system.',
              },
              {
                q: 'What is the total official fee for incorporating a small private limited company in Pakistan?',
                a: 'For a company with authorized capital of up to PKR 100,000, the official SECP costs are: PKR 1,000 (Name Reservation) + PKR 1,500 to 2,500 (Online Incorporation Base Fee) + PKR 200 (User Registration PIN), bringing total government statutory fees to approximately PKR 2,700 to 3,700.',
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
            { label: 'Securities and Exchange Commission of Pakistan (SECP)', url: 'https://www.secp.gov.pk/' },
            { label: 'Official SECP eZfile Online Portal', url: 'https://ezfile.secp.gov.pk/' },
            { label: 'Companies Act 2017 & Companies (Incorporation) Regulations', url: 'https://www.secp.gov.pk/laws/acts/' },
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
