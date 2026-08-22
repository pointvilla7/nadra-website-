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
  CheckCircle2,
  AlertTriangle,
  CreditCard,
  Building,
  Hash,
  Globe,
  FileText,
  BadgeCheck,
  Send
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pakistan IBAN Number Check & Validator 2026 – ISO 13616 Format & Checksum | Pakistan Info Hub',
  description:
    'Validate 24-character Pakistan IBAN numbers online: Check ISO 13616 MOD-97 mathematical checksum, verify 4-letter bank codes (HBL, UBL, Meezan, SCB), extract account digits, and format IBANs for international remittances.',
  keywords: [
    'pakistan iban number check',
    'iban validator pakistan',
    'pakistan iban format 2026',
    'check iban number online pakistan',
    'iso 13616 mod 97 iban pakistan',
    'pakistan bank code iban lookup',
    'meezan bank iban check',
    'hbl iban validator',
  ],
  openGraph: {
    title: 'Pakistan IBAN Number Check & Validator 2026 – ISO 13616 Format & Checksum',
    description:
      'Real-time ISO 13616 MOD-97 checksum validator and format inspector for 24-character Pakistani bank account IBANs.',
    url: 'https://www.pakistaninfohub.com/finance/pakistan-iban-number-check-validator-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/finance/pakistan-iban-number-check-validator-2026' },
};

const IbanValidator = dynamic(
  () => import('@/components/IbanValidator').then((m) => ({ default: m.IbanValidator })),
  { ssr: false, loading: () => <div className="h-[480px] rounded-3xl bg-slate-100 dark:bg-slate-800 animate-pulse" /> }
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Banking & Financial Services',
          item: 'https://www.pakistaninfohub.com/finance',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Pakistan IBAN Validator 2026',
          item: 'https://www.pakistaninfohub.com/finance/pakistan-iban-number-check-validator-2026',
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Pakistan IBAN Validator 2026',
      description:
        'Client-side ISO 13616 MOD-97 checksum validator for 24-character Pakistani International Bank Account Numbers.',
      url: 'https://www.pakistaninfohub.com/finance/pakistan-iban-number-check-validator-2026',
      applicationCategory: 'FinancialApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the structure of an IBAN in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Pakistan IBAN consists of exactly 24 alphanumeric characters: (1) Country Code "PK" (positions 1-2), (2) 2-digit MOD-97 security check digits (positions 3-4), (3) 4-letter Bank Identifier Code such as SCBL, MEZN, or HABB (positions 5-8), and (4) 16-digit Basic Bank Account Number / BBAN representing the domestic branch and account digits (positions 9-24).',
          },
        },
        {
          '@type': 'Question',
          name: 'Does a valid IBAN checksum mean the bank account is active and belongs to a specific person?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The ISO 13616 MOD-97 algorithm verifies mathematical format integrity and ensures there are no transposed or mistyped digits. It cannot access live banking ledgers to confirm if an account is currently active, dormant, or the legal name of the account holder.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where can I find my official Pakistani IBAN number?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can find your official IBAN on: (1) Your bank mobile app account details screen, (2) The top portion of your printed cheque leaves, (3) Your monthly PDF bank e-statement, or (4) By using your bank’s official online IBAN generator tool.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is an IBAN required for receiving foreign remittances and freelancer earnings in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The State Bank of Pakistan (SBP) mandates the 24-digit IBAN standard for all cross-border SWIFT wire transfers, international home remittances, and freelancer payment payouts (such as Payoneer, Wise, and Upwork) to eliminate manual routing errors and ensure automated Straight-Through Processing (STP).',
          },
        },
      ],
    },
  ],
};

export default function IbanValidatorPage() {
  const breadcrumbs = [
    { nameEn: 'Banking & Financial Services', nameUr: 'بینکنگ و مالیاتی سروسز' },
    { nameEn: 'Pakistan IBAN Validator 2026', nameUr: 'آئی بی اے این ویلیڈیٹر 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="BANKING & FINANCIAL UTILITY" labelUr="بینکنگ یوٹیلیٹی" variant="seal" />
            <VerifiedBadge textEn="STATE BANK OF PAKISTAN (SBP) STANDARD" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Pakistan IBAN Number Check &amp; Validator 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پاکستان انٹرنیشنل بینک اکاؤنٹ نمبر (IBAN) کی تصدیق اور چیک سم ویلیڈیشن
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Validate any <strong>24-character Pakistan IBAN</strong> in real-time.
            Verify compliance with the <strong>ISO 13616 international standard</strong>, calculate the
            mathematical <strong>MOD-97 checksum</strong>, inspect 4-letter bank identifier codes, and generate clean formatted IBANs for wire transfers.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is an IBAN and How Does Pakistan's 24-Character Format Work?"
          topicTitleUr="آئی بی اے این کیا ہے اور پاکستان کا 24 ہندسوں کا فارمیٹ کیسے کام کرتا ہے؟"
          answerEn="An IBAN (International Bank Account Number) is an internationally standardized bank account identifier. In Pakistan, every IBAN consists of exactly 24 characters: the country code 'PK', 2 check digits (calculated via MOD-97 algorithm), a 4-letter bank code (e.g., SCBL, MEZN, HABB), and the 16-digit domestic account number."
          answerUr="آئی بی اے این بین الاقوامی سطح پر تسلیم شدہ بینک اکاؤنٹ نمبر ہے۔ پاکستان میں ہر آئی بی اے این 24 ہندسوں پر مشتمل ہوتا ہے: ملکی کوڈ (PK)، 2 سیکیورٹی چیک ڈیجٹس، 4 حروف پر مشتمل بینک کوڈ (جیسے SCBL، MEZN، HABB) اور 16 ہندسوں کا اکاؤنٹ نمبر۔"
        />

        {/* Interactive Tool Mount */}
        <IbanValidator />

        {/* Section 1: Anatomy of Pakistan IBAN */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Hash className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Anatomy of a 24-Character Pakistani IBAN
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Under State Bank of Pakistan regulations, all commercial, Islamic, and microfinance banks adhere to the ISO 13616 format. Here is how each segment of the 24-character string functions:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-sans">
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="px-2 py-0.5 rounded bg-doc-ink text-white font-mono font-bold text-[11px]">
                Positions 1–2
              </span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Country Code (PK)</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Identifies Pakistan per ISO 3166-1 alpha-2 standards for automated global routing.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="px-2 py-0.5 rounded bg-doc-brass text-white font-mono font-bold text-[11px]">
                Positions 3–4
              </span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Check Digits (02–98)</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Two mathematical checksum digits generated by the MOD-97 algorithm to prevent typing errors.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="px-2 py-0.5 rounded bg-doc-seal text-white font-mono font-bold text-[11px]">
                Positions 5–8
              </span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Bank Code (4 Letters)</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Unique 4-letter mnemonic assigned to each Pakistani bank (e.g., <code>MEZN</code>, <code>HABB</code>, <code>UNIL</code>).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="px-2 py-0.5 rounded bg-emerald-700 text-white font-mono font-bold text-[11px]">
                Positions 9–24
              </span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">BBAN (16 Digits)</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Basic Bank Account Number padded with leading zeros, containing branch code and account ledger number.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Where to Find Your IBAN */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <CreditCard className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Where to Find Your Bank IBAN in Pakistan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-sm text-doc-ink dark:text-white block">1. Mobile Banking App</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Log in to your bank&apos;s mobile app (HBL Mobile, Meezan Mobile, Alfa, etc.), tap your account card, and look for &quot;Account Details / IBAN&quot; to copy it instantly.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-sm text-doc-ink dark:text-white block">2. Cheque Book Leaves</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Your 24-character IBAN is pre-printed along the left margin or above your account title on every page of your physical chequebook.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-sm text-doc-ink dark:text-white block">3. Monthly Account Statement</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Download your monthly e-statement PDF from Internet banking; the full IBAN is prominently displayed in the top account header.
              </p>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 3: Related Financial Guides */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Banking &amp; Financial Utilities on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/finance/how-to-open-bank-account-online-pakistan-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Digital Banking</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                How to Open Bank Account Online 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">State Bank Asaan Digital Account onboarding and video KYC steps.</p>
            </Link>

            <Link
              href="/hajj-umrah/zakat-calculator-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Islamic Finance</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Zakat Calculator 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Calculate 2.5% Zakat on cash, gold, and business investments.</p>
            </Link>

            <Link
              href="/tax/income-tax-calculator-salaried-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Tax Finance</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                FBR Salaried Income Tax Calculator 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Calculate monthly payroll tax deductions under latest budget slabs.</p>
            </Link>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (IBAN Format &amp; Transfers)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'What is the structure of an IBAN in Pakistan?',
                a: 'A Pakistan IBAN consists of exactly 24 alphanumeric characters: (1) Country Code "PK" (positions 1-2), (2) 2-digit MOD-97 security check digits (positions 3-4), (3) 4-letter Bank Identifier Code such as SCBL, MEZN, or HABB (positions 5-8), and (4) 16-digit Basic Bank Account Number / BBAN representing the domestic branch and account digits (positions 9-24).',
              },
              {
                q: 'Does a valid IBAN checksum mean the bank account is active and belongs to a specific person?',
                a: 'No. The ISO 13616 MOD-97 algorithm verifies mathematical format integrity and ensures there are no transposed or mistyped digits. It cannot access live banking ledgers to confirm if an account is currently active, dormant, or the legal name of the account holder.',
              },
              {
                q: 'Where can I find my official Pakistani IBAN number?',
                a: 'You can find your official IBAN on: (1) Your bank mobile app account details screen, (2) The top portion of your printed cheque leaves, (3) Your monthly PDF bank e-statement, or (4) By using your bank’s official online IBAN generator tool.',
              },
              {
                q: 'Why is an IBAN required for receiving foreign remittances and freelancer earnings in Pakistan?',
                a: 'The State Bank of Pakistan (SBP) mandates the 24-digit IBAN standard for all cross-border SWIFT wire transfers, international home remittances, and freelancer payment payouts (such as Payoneer, Wise, and Upwork) to eliminate manual routing errors and ensure automated Straight-Through Processing (STP).',
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
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Standards Cited:</p>
          {[
            { label: 'State Bank of Pakistan (SBP) IBAN Regulations & Guidelines', url: 'https://www.sbp.org.pk/' },
            { label: 'ISO 13616 Financial Services — International Bank Account Number (IBAN)', url: 'https://www.iso.org/' },
            { label: '1Link Pakistan Interbank Clearing & Settlement Network', url: 'https://1link.net.pk/' },
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
