import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  HelpCircle,
  ExternalLink,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  Smartphone,
  Users,
  Sparkles,
  ArrowRight,
  FileText,
  BadgeCheck,
  Building
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NADRA CNIC New Rules 2026 – Free First-Time Card, Fees & Biometric Directives | Pakistan Info Hub',
  description:
    'Complete guide to NADRA CNIC rules in 2026: Free first-time CNIC for citizens 18+, updated Normal/Urgent/Executive fee table, mandatory mobile SIM linking, biometric family verification, Smart CNIC transition, and Interior Ministry reforms.',
  keywords: [
    'NADRA CNIC new rules 2026',
    'first time CNIC free NADRA',
    'NADRA Smart CNIC fee 2026',
    'NADRA biometric verification rules',
    'Pak Identity online CNIC apply',
    'Mohsin Naqvi NADRA directives 2026',
    'NADRA urgent normal executive fee schedule',
  ],
  openGraph: {
    title: 'NADRA CNIC New Rules 2026 – Free First-Time Card & Updated Fees',
    description:
      'Official 2026 guide on NADRA identity card regulations: Free first card for 18+, biometric rules, mobile linkage, and Pak-ID online renewal steps.',
    url: 'https://www.pakistaninfohub.com/nadra/cnic-new-rules-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/nadra/cnic-new-rules-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'NADRA Services', item: 'https://www.pakistaninfohub.com/nadra' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'CNIC New Rules 2026',
          item: 'https://www.pakistaninfohub.com/nadra/cnic-new-rules-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'NADRA CNIC New Rules 2026 – Free First-Time Card, Fees & Biometric Directives',
      description:
        'A comprehensive public guide explaining the 2026 NADRA identity card regulations, fee schedules, mobile linking requirements, and biometric verification procedures.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-20',
      dateModified: '2026-08-21',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/nadra/cnic-new-rules-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the first-time CNIC completely free in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Under official NADRA policy and Ministry of Interior directives, any Pakistani citizen applying for their first CNIC upon reaching the age of 18 is exempt from standard processing fees under the Normal delivery category (Rs. 0). If the applicant opts for Urgent or Executive processing, standard expedited charges apply.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if my mobile number is not registered against my own CNIC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NADRA now strictly requires a biometric mobile number registered under the applicant’s own CNIC for all identity verifications and online Pak-ID transactions. If the number belongs to someone else, one-time passwords (OTP) and identity security alerts will fail. For minors applying for juvenile cards/B-Form, a parent’s registered number is mandatory.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the temporary birth certificate facilitation valid until December 31, 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To assist citizens in rural and underserved areas who face bureaucratic hurdles obtaining computerized Union Council birth certificates, NADRA allows first-time applicants aged 18+ to apply with physical birth documentation or school certificates, provided they are accompanied by a blood relative (parent or sibling) for live biometric family linkage verification.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between a standard CNIC and a Smart CNIC (SNIC)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A standard CNIC is a printed magnetic stripe card, while a Smart CNIC (SNIC) features an embedded microchip containing encrypted biometric data, photograph, and digital identity keys. NADRA strongly encourages Smart CNIC adoption (Normal fee: PKR 750) because it resists physical tampering, enables contactless authentication, and integrates seamlessly with international travel and banking security standards.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I renew an expired CNIC online without visiting a NADRA center?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Citizens can renew their expired CNIC, request a duplicate, or modify marital status/address entirely online through the official Pak-ID portal (id.nadra.gov.pk) or the Pak-ID mobile app with fingerprint capture via smartphone camera and home courier delivery.',
          },
        },
      ],
    },
  ],
};

export default function CnicNewRules2026Page() {
  const breadcrumbs = [
    { nameEn: 'NADRA Services', nameUr: 'نادرا سروسز' },
    { nameEn: 'CNIC New Rules 2026', nameUr: 'شناختی کارڈ نئے قواعد 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="CIVIC POLICY UPDATE" labelUr="سرکاری پالیسی اپڈیٹ" variant="seal" />
            <VerifiedBadge textEn="OFFICIAL 2026 GAZETTE NOTIFICATION" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            NADRA CNIC New Rules 2026: Free First Card, Fees &amp; Biometric Directives
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              نادرا شناختی کارڈ نئے قواعد 2026: مفت پہلا کارڈ، فیس اور فنگر پرنٹ شرائط
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Under recent Federal Ministry of Interior directives and NADRA operational reforms, significant updates have
            been introduced for identity card issuance across Pakistan. Learn about free first-time CNIC eligibility,
            the official fee schedule, mandatory SIM registration, and family biometric requirements.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What are the New NADRA CNIC Rules in 2026?"
          topicTitleUr="2026 میں نادرا شناختی کارڈ کے نئے قواعد کیا ہیں؟"
          answerEn="First-time CNIC for Pakistani citizens aged 18+ is completely FREE under the Normal category (15 days). Renewals cost PKR 400 (Normal), PKR 1,150 (Urgent), and PKR 2,150 (Executive) for standard cards; and PKR 750, PKR 1,500, and PKR 2,500 for Smart Cards. Applicants must link a biometric mobile number registered in their own name."
          answerUr="18 سال کی عمر کے شہریوں کے لیے پہلا شناختی کارڈ نارمل کیٹیگری میں بالکل مفت (0 روپے) ہے۔ تجدید فیس عام کارڈ کے لیے 400 (نارمل)، 1150 (ارجنٹ) اور 2150 (ایگزیکٹو) جبکہ اسمارٹ کارڈ کے لیے 750، 1500 اور 2500 روپے ہے۔ درخواست گزار کے اپنے نام پر رجسٹرڈ سم کا ہونا لازمی قرار دیا گیا ہے۔"
        />

        {/* Section 1: Key Policy Changes in 2026 */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              What Actually Changed in 2026: 5 Critical Updates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="doc-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 font-mono text-[11px] font-bold">
                  RULE 1 • FEE WAIVER
                </span>
                <Coins className="w-4 h-4 text-emerald-500" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                100% Free First-Time CNIC
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Every citizen turning 18 applying for their first National Identity Card pays <strong>Rs. 0 (Free)</strong> under
                the standard normal processing category. No registration fees are charged at any NRC in Pakistan.
              </p>
            </div>

            <div className="doc-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-600 dark:text-blue-300 font-mono text-[11px] font-bold">
                  RULE 2 • SIM LINKING
                </span>
                <Smartphone className="w-4 h-4 text-blue-500" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Mandatory Own-Name Mobile SIM
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Your application contact number must be biometrically registered against your own CNIC (or parent’s CNIC
                for minors). Numbers registered to third-party friends or agents are automatically rejected.
              </p>
            </div>

            <div className="doc-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-600 dark:text-amber-300 font-mono text-[11px] font-bold">
                  RULE 3 • FAMILY TREE
                </span>
                <Users className="w-4 h-4 text-amber-500" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Strict Biometric Relative Attestation
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                First-time applicants must be accompanied by a direct blood relative (parent or sibling) who provides
                live biometric fingerprint authentication to verify genuine family tree inclusion.
              </p>
            </div>

            <div className="doc-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-600 dark:text-purple-300 font-mono text-[11px] font-bold">
                  RULE 4 • REVISED DEADLINE
                </span>
                <Clock className="w-4 h-4 text-purple-500" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Birth Certificate Relaxation Until End-2026
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Until December 31, 2026, citizens facing delays in computerized Union Council birth certificates can apply
                with valid school leaving certificates or matriculation Sanad backed by parental biometric verification.
              </p>
            </div>

            <div className="doc-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-600 dark:text-rose-300 font-mono text-[11px] font-bold">
                  RULE 5 • SMART SNIC
                </span>
                <CreditCard className="w-4 h-4 text-rose-500" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Smart Chip (SNIC) Standard Rollout
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                NADRA is systematically phasing out older non-chip cards in favor of chip-based Smart National Identity Cards (SNIC)
                that integrate seamlessly with digital banking, e-governance, and SIM issuance.
              </p>
            </div>

            <div className="doc-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 font-mono text-[11px] font-bold">
                  MINISTERIAL DIRECTIVES
                </span>
                <ShieldCheck className="w-4 h-4 text-cyan-500" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Interior Ministry Service Overhaul
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Under Interior Minister Mohsin Naqvi’s directives, death certificate cancellation fees were waived,
                24/7 Mega Center shifts were expanded, and strict measures against unauthorized agents were deployed.
              </p>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 2: Complete Fee Table 2026 */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Official NADRA CNIC &amp; Smart Card Fee Schedule (2026)
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 font-sans">
            Verified statutory fee rates across Normal (15 working days), Urgent (12 working days), and Executive (6 working days) categories:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="w-full text-sm font-sans">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Service Type</th>
                  <th className="px-4 py-3 text-left text-emerald-300">Normal (15 Days)</th>
                  <th className="px-4 py-3 text-left text-amber-300">Urgent (12 Days)</th>
                  <th className="px-4 py-3 text-left text-rose-300">Executive (6 Days)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    First-Time CNIC (Age 18+)
                  </td>
                  <td className="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400 text-xs">
                    FREE (PKR 0)
                  </td>
                  <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300 text-xs">PKR 1,150</td>
                  <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300 text-xs">PKR 2,150</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Standard CNIC Renewal / Duplicate / Modification
                  </td>
                  <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300 text-xs">PKR 400</td>
                  <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300 text-xs">PKR 1,150</td>
                  <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300 text-xs">PKR 2,150</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Smart CNIC (Chip-based SNIC) – New / Modification
                  </td>
                  <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300 text-xs">PKR 750</td>
                  <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300 text-xs">PKR 1,500</td>
                  <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300 text-xs">PKR 2,500</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Smart NICOP (Overseas Pakistanis – Zone A / B)
                  </td>
                  <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300 text-xs">$39 / $20</td>
                  <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300 text-xs">$57 / $30</td>
                  <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300 text-xs">$75 / $40</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    CNIC Cancellation on Death
                  </td>
                  <td className="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400 text-xs">
                    FREE (Waived)
                  </td>
                  <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300 text-xs">—</td>
                  <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300 text-xs">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Step-by-Step Application Workflow */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              How to Apply for CNIC or Renewal (NRC vs Pak-ID Online)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-doc-seal" />
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                  Option A: Visiting a NADRA Registration Center (NRC)
                </h3>
              </div>
              <ol className="text-xs text-slate-600 dark:text-slate-300 space-y-2 list-decimal list-inside leading-relaxed font-sans">
                <li><strong>Token &amp; Data Entry:</strong> Visit your nearest NRC or 24/7 Mega Center, receive a queue token, and have your bio-data entered.</li>
                <li><strong>Photograph &amp; Biometrics:</strong> Staff captures high-resolution digital photo, 10-fingerprint scans, and digital signature.</li>
                <li><strong>Family Attestation:</strong> Accompanying blood relative (parent/sibling) provides live biometric attestation.</li>
                <li><strong>Receipt &amp; Tracking ID:</strong> Receive a printed form with an 11-digit Tracking ID to monitor status via 8400 SMS.</li>
              </ol>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-emerald-600" />
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                  Option B: Pak-ID Mobile App / Online Portal
                </h3>
              </div>
              <ol className="text-xs text-slate-600 dark:text-slate-300 space-y-2 list-decimal list-inside leading-relaxed font-sans">
                <li><strong>Account Login:</strong> Sign in at <a href="https://id.nadra.gov.pk" target="_blank" rel="noopener noreferrer" className="text-doc-seal underline font-mono">id.nadra.gov.pk</a> or download the Pak-ID app.</li>
                <li><strong>Photograph &amp; Fingerprints:</strong> Use your smartphone camera to capture ICAO-compliant passport photo and fingerprint scans.</li>
                <li><strong>Digital Payment:</strong> Pay the statutory fee using any debit/credit card or mobile banking app.</li>
                <li><strong>Home Delivery:</strong> Your renewed or modified Smart CNIC is dispatched via registered Pakistan Post or TCS courier.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 4: Related Tools & Navigators */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related NADRA Civic Guides &amp; Verification Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/nadra/b-form-frc-status-check"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Family Verification</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                B-Form &amp; FRC Status Check →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Verify family tree records and juvenile birth registration.</p>
            </Link>

            <Link
              href="/nadra/nicop-fee-calculator"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Overseas Pakistanis</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Smart NICOP Fee Calculator 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Calculate Zone A &amp; Zone B foreign currency fee tiers.</p>
            </Link>

            <Link
              href="/legal/succession-certificate-legal-heir-nadra-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Legal Inheritance</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Succession Certificate Guide 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Claim bank accounts and assets under 2025 Amendment Act.</p>
            </Link>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (CNIC Rules 2026)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Is the first-time CNIC completely free in 2026?',
                a: 'Yes. Under official NADRA policy and Ministry of Interior directives, any Pakistani citizen applying for their first CNIC upon reaching the age of 18 is exempt from standard processing fees under the Normal delivery category (Rs. 0). If the applicant opts for Urgent or Executive processing, standard expedited charges apply.',
              },
              {
                q: 'What happens if my mobile number is not registered against my own CNIC?',
                a: 'NADRA now strictly requires a biometric mobile number registered under the applicant’s own CNIC for all identity verifications and online Pak-ID transactions. If the number belongs to someone else, one-time passwords (OTP) and identity security alerts will fail. For minors applying for juvenile cards/B-Form, a parent’s registered number is mandatory.',
              },
              {
                q: 'What is the temporary birth certificate facilitation valid until December 31, 2026?',
                a: 'To assist citizens in rural and underserved areas who face bureaucratic hurdles obtaining computerized Union Council birth certificates, NADRA allows first-time applicants aged 18+ to apply with physical birth documentation or school certificates, provided they are accompanied by a blood relative (parent or sibling) for live biometric family linkage verification.',
              },
              {
                q: 'What is the difference between a standard CNIC and a Smart CNIC (SNIC)?',
                a: 'A standard CNIC is a printed magnetic stripe card, while a Smart CNIC (SNIC) features an embedded microchip containing encrypted biometric data, photograph, and digital identity keys. NADRA strongly encourages Smart CNIC adoption (Normal fee: PKR 750) because it resists physical tampering, enables contactless authentication, and integrates seamlessly with international travel and banking security standards.',
              },
              {
                q: 'Can I renew an expired CNIC online without visiting a NADRA center?',
                a: 'Yes. Citizens can renew their expired CNIC, request a duplicate, or modify marital status/address entirely online through the official Pak-ID portal (id.nadra.gov.pk) or the Pak-ID mobile app with fingerprint capture via smartphone camera and home courier delivery.',
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
            { label: 'Official NADRA Corporate Portal', url: 'https://www.nadra.gov.pk/' },
            { label: 'Pak Identity (Pak-ID) Digital Services', url: 'https://id.nadra.gov.pk/' },
            { label: 'Ministry of Interior Government of Pakistan Directives', url: 'https://interior.gov.pk/' },
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
