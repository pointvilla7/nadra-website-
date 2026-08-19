import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { HelpCircle, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Govt Loan EMI Calculator 2026 – Apni Chhat, PM Youth Loan, Akhuwat | Pakistan Info Hub',
  description:
    'Calculate monthly installments (EMI) for Apni Chhat Apna Ghar (0% interest), PM Youth Business Loan, and Akhuwat. Instant calculation with amortization schedule.',
  keywords: [
    'Govt loan EMI calculator Pakistan 2026',
    'Apni Chhat Apna Ghar installment calculator',
    'PM youth loan monthly installment',
    'Akhuwat loan calculator',
    'interest free loan calculator Pakistan',
  ],
  openGraph: {
    title: 'Govt Loan EMI Calculator 2026 – Apni Chhat, PM Youth Loan',
    description:
      'Instant monthly installment and markup calculation for Pakistan government loan schemes and housing initiatives.',
    url: 'https://pakistaninfohub.com/loans/emi-calculator-2026',
  },
  alternates: { canonical: 'https://pakistaninfohub.com/loans/emi-calculator-2026' },
};

const LoanEmiCalculator = dynamic(
  () => import('@/components/LoanEmiCalculator').then((m) => ({ default: m.LoanEmiCalculator })),
  { ssr: false, loading: () => <div className="h-[480px] rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" /> }
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Govt Loans', item: 'https://pakistaninfohub.com/loans' },
        { '@type': 'ListItem', position: 3, name: 'EMI Calculator 2026', item: 'https://pakistaninfohub.com/loans/emi-calculator-2026' },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Pakistan Govt Loan EMI Calculator 2026',
      description: 'Online financial calculator for estimating monthly installments and markup for Pakistani government loan schemes.',
      url: 'https://pakistaninfohub.com/loans/emi-calculator-2026',
      applicationCategory: 'FinancialApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://pakistaninfohub.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the monthly installment for Apni Chhat Apna Ghar scheme?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For the Apni Chhat Apna Ghar 1.5 Million PKR loan with a 7-year repayment period (84 months) at 0% markup, the monthly installment is approximately PKR 17,857.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is PM Youth Loan Tier 1 interest-free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. PM Youth Business & Agriculture Loan Tier 1 provides up to PKR 500,000 at 0% markup with a 3-year repayment tenure.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the EMI calculator compute monthly installments?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For 0% interest loans, the principal is divided equally by total repayment months. For markup-bearing loans, standard reducing-balance amortization formula is applied.',
          },
        },
      ],
    },
  ],
};

export default function LoanEmiCalculatorPage() {
  const breadcrumbs = [
    { nameEn: 'Govt Loans', nameUr: 'سرکاری قرضہ سکیمیں' },
    { nameEn: 'EMI Calculator 2026', nameUr: 'قسط کیلکولیٹر 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn">
        <Breadcrumbs items={breadcrumbs} />

        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="FINANCIAL CALCULATOR" labelUr="مالیاتی کیلکولیٹر" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Govt Loan EMI Calculator 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              سرکاری قرضہ قسط و ای ایم آئی کیلکولیٹر (اپنی چھت، پی ایم یوتھ، اخوت)
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-sans">
            Calculate your exact monthly installments, total markup, and principal amortization across all major Pakistani
            federal and provincial government loan schemes.
          </p>
        </header>

        <DirectAnswerBox
          topicTitleEn="How Monthly Loan Installments (EMI) Are Calculated in Pakistan"
          topicTitleUr="پاکستان میں سرکاری قرضوں کی ماہانہ قسط کا حساب"
          answerEn="For interest-free schemes like Apni Chhat Apna Ghar (PKR 15 Lakh / 7 Years), the monthly installment is PKR 17,857 (Principal ÷ 84 months). For markup loans like PM Youth Tier 2 (5%), monthly payments use reducing balance amortization. Calculations are 100% free and private."
          answerUr="بلاسود سکیموں (جیسے اپنی چھت اپنا گھر 15 لاکھ روپے / 7 سال) کے لیے ماہانہ قسط 17,857 روپے بنتی ہے۔ مارک اپ والی سکیموں (جیسے پی ایم یوتھ ٹائر 2) کے لیے ریڈیوسنگ بیلنس فارمولا لاگو ہوتا ہے۔ حساب کتاب مکمل مفت اور پرائیویٹ ہے۔"
        />

        <section aria-label="Govt Loan EMI Calculator Tool">
          <LoanEmiCalculator />
        </section>

        <AdPlacementZone format="horizontal" />

        {/* FAQs */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Are there any hidden processing charges for government loans in Pakistan?',
                a: 'Most government subsidized programs (Apni Chhat, PM Youth Tier 1) waive upfront processing fees. However, participating commercial banks may charge nominal documentation or NADRA verification fees (typically PKR 100–500).',
              },
              {
                q: 'What is the grace period before the first installment starts?',
                a: 'Apni Chhat Apna Ghar offers an initial grace period of 3 months post-construction completion before monthly installments commence. PM Youth Loan offers up to 6 months grace period on principal repayment.',
              },
              {
                q: 'Can I repay the loan early without penalty?',
                a: 'Yes, government subsidized and interest-free loans permit early early full or partial prepayment without any pre-settlement penalties.',
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
            { label: 'Apni Chhat Apna Ghar Housing Scheme Portal', url: 'https://acag.punjab.gov.pk/' },
            { label: 'Prime Minister Youth Business & Agriculture Loan', url: 'https://pmyp.gov.pk/' },
            { label: 'Akhuwat Islamic Microfinance Foundation', url: 'https://akhuwat.org.pk/' },
            { label: 'House Building Finance Company (HBFC)', url: 'https://www.hbfc.com.pk/' },
          ].map((src) => (
            <a key={src.url} href={src.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-doc-seal">
              <ExternalLink className="w-3 h-3" />
              {src.label}: <span className="font-mono">{src.url}</span>
            </a>
          ))}
        </section>
      </div>
    </>
  );
}
