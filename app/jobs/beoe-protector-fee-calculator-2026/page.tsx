import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { HelpCircle, ExternalLink, ShieldCheck, FileCheck, Plane, CheckCircle2, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BEOE Protector Fee Calculator 2026: Official Government Fee Breakdown | Pakistan Info Hub',
  description:
    'Calculate official BEOE protector registration fees in Pakistan: Itemized breakdown of OPF Welfare Fund (Rs. 4,000), State Life Insurance (Rs. 2,500), BEOE Registration (Rs. 2,500), and OEC Cess (Rs. 200) totaling Rs. 9,200. Direct emigrant vs OEP agent rates and cashless QR payments.',
  keywords: [
    'BEOE protector fee calculator Pakistan 2026',
    'protector registration fee breakdown direct emigrant',
    'OPF welfare fund 4000 protector fee',
    'State Life emigrants insurance 2500 coverage',
    'OEP agency charges vs government protector fee',
    'cashless protector fee NBP QR code 1Link',
    'beoe gov pk protector fee schedule',
  ],
  openGraph: {
    title: 'BEOE Protector Fee Calculator 2026: Official Government Fee Breakdown',
    description:
      'Interactive itemized calculator for official Pakistani overseas protectorate fees: OPF fund, State Life insurance, registration, and total Rs. 9,200 fee.',
    url: 'https://www.pakistaninfohub.com/jobs/beoe-protector-fee-calculator-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/jobs/beoe-protector-fee-calculator-2026' },
};

const BeoeProtectorFeeCalculator = dynamic(
  () => import('@/components/BeoeProtectorFeeCalculator').then((m) => ({ default: m.BeoeProtectorFeeCalculator })),
  { ssr: false, loading: () => <div className="h-[480px] rounded-3xl bg-slate-100 dark:bg-slate-800 animate-pulse" /> }
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Jobs & Career Portal', item: 'https://www.pakistaninfohub.com/jobs' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'BEOE Protector Fee Calculator 2026',
          item: 'https://www.pakistaninfohub.com/jobs/beoe-protector-fee-calculator-2026',
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'BEOE Protector Fee Calculator 2026',
      description:
        'Official government fee calculator and itemized breakdown for overseas employment protectorate registration in Pakistan.',
      url: 'https://www.pakistaninfohub.com/jobs/beoe-protector-fee-calculator-2026',
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
          name: 'Does the official government protector fee change depending on the destination country?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The official government fee for BEOE protector registration is exactly Rs. 9,200 regardless of whether you are traveling to Saudi Arabia, UAE, Qatar, Oman, Malaysia, the UK, or any other country. It is universally fixed across all destination countries.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the Rs. 9,200 protector fee a one-time fee or does it have to be paid annually?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The protector fee is paid once per foreign employment visa/contract. The State Life insurance coverage included in the fee remains valid for a full 5 years, and OPF membership granted through it is valid for a lifetime.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I go through a private recruitment agent (OEP) instead of applying directly?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The government component of the fee remains exactly Rs. 9,200. However, licensed Overseas Employment Promoters (OEPs) are legally permitted to charge a regulated service fee (capped under Rule 15A of the Emigration Rules). Always ensure your agent is actively licensed by checking beoe.gov.pk.',
          },
        },
      ],
    },
  ],
};

export default function BeoeProtectorFeeCalculatorPage() {
  const breadcrumbs = [
    { nameEn: 'Jobs & Career Portal', nameUr: 'ملازمت اور روزگار پورٹل' },
    { nameEn: 'BEOE Protector Fee Calculator', nameUr: 'پروٹیکٹر رجسٹریشن فیس کیلکولیٹر 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="BEOE OFFICIAL FEE TOOL" labelUr="سرکاری پروٹیکٹر فیس" variant="seal" />
            <VerifiedBadge textEn="BEOE & OPF COMPLIANT" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            BEOE Protector Fee Calculator 2026: Official Government Breakdown
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              اوورسیز پروٹیکٹر فیس کا سرکاری حساب: او پی ایف فنڈ، انشورنس اور کل اخراجات
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Calculate the exact official government fees required to protect your overseas employment visa in Pakistan.
            Understand the complete Rs. 9,200 itemized breakdown, compare direct vs OEP agent costs, and verify cashless QR payment methods.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is the Total Official Government Fee for BEOE Protector Registration?"
          topicTitleUr="پروٹیکٹر رجسٹریشن کی کل سرکاری فیس کتنی ہے؟"
          answerEn="The total official government fee for BEOE protector registration is Rs. 9,200 for all destination countries. This comprises: OPF Welfare Fund (Rs. 4,000), State Life Emigrants Insurance for 5 years (Rs. 2,500), BEOE Registration Fee (Rs. 2,500), and OEC Processing Cess (Rs. 200)."
          answerUr="تمام ممالک کے لیے پروٹیکٹر رجسٹریشن کی کل سرکاری فیس 9,200 روپے ہے۔ جس میں او پی ایف ویلفیئر فنڈ (4,000 روپے)، 5 سالہ اسٹیٹ لائف انشورنس (2,500 روپے)، رجسٹریشن فیس (2,500 روپے) اور او ای سی سیس (200 روپے) شامل ہے۔ یہ فیس ڈیجیٹل طور پر ادا ہوتی ہے۔"
        />

        {/* Interactive Calculator Mount */}
        <BeoeProtectorFeeCalculator />

        {/* Section 1: Direct vs Agent Breakdown */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Understanding Government Fees vs. Private Agent Charges
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 font-sans text-xs">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Every year, over 750,000 Pakistani workers register with the Protectorate of Emigrants. Protect yourself from overcharging:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="font-bold text-doc-seal text-sm block">1. Direct Emigrant (Direct Employment Visa)</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  If you secured your visa directly through a relative, direct company contract, or personal sponsor abroad, you only pay the exact government fee of <strong>Rs. 9,200</strong> at the NBP bank counter or via QR e-challan. No extra charges apply.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="font-bold text-doc-brass text-sm block">2. Via Licensed OEP (Recruitment Agency)</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  The government receipt remains <strong>Rs. 9,200</strong>. Private recruitment agencies charge an additional service fee regulated by the Emigration Rules 1979. Never pay fees without an official stamped receipt from a valid BEOE-licensed agency.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 2: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Overseas &amp; Employment Services on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/jobs/beoe-protector-registration-overseas-employment-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Protector Guide</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                BEOE Protector Registration Guide 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Step-by-step clearance process at regional protector offices.</p>
            </Link>

            <Link
              href="/overseas/opf-scholarship-children-spouses-overseas-pakistanis-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">OPF Benefits</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                OPF Scholarship Scheme (OPEF) →
              </h3>
              <p className="text-xs text-slate-500 mt-1">How mandatory protector registration unlocks college scholarships.</p>
            </Link>

            <Link
              href="/overseas/nicop-mandatory-entry-rules-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Identity Card</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NADRA Smart NICOP Overseas Rules →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Mandatory NICOP entry guidelines for expatriates.</p>
            </Link>
          </div>
        </section>

        {/* Section 3: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (BEOE Protector Fees)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Does the official government protector fee change depending on the destination country?',
                a: 'No. The official government fee for BEOE protector registration is exactly Rs. 9,200 regardless of whether you are traveling to Saudi Arabia, UAE, Qatar, Oman, Malaysia, the UK, or any other country. It is universally fixed across all destination countries.',
              },
              {
                q: 'Is the Rs. 9,200 protector fee a one-time fee or does it have to be paid annually?',
                a: 'The protector fee is paid once per foreign employment visa/contract. The State Life insurance coverage included in the fee remains valid for a full 5 years, and OPF membership granted through it is valid for a lifetime.',
              },
              {
                q: 'What if I go through a private recruitment agent (OEP) instead of applying directly?',
                a: 'The government component of the fee remains exactly Rs. 9,200. However, licensed Overseas Employment Promoters (OEPs) are legally permitted to charge a regulated service fee (capped under Rule 15A of the Emigration Rules). Always ensure your agent is actively licensed by checking beoe.gov.pk.',
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
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Statutory Sources Cited:</p>
          {[
            { label: 'Bureau of Emigration & Overseas Employment (BEOE) Official Fee Schedule', url: 'https://beoe.gov.pk/' },
            { label: 'Overseas Pakistanis Foundation (OPF) Welfare Fund Ordinance', url: 'https://www.opf.org.pk/' },
            { label: 'State Life Insurance Corporation of Pakistan (Emigrants Scheme)', url: 'https://statelife.com.pk/' },
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
