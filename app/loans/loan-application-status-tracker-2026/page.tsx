import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { HelpCircle, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Govt Loan Application Status Tracker 2026 – Apni Chhat, PM Youth Loan | Pakistan Info Hub',
  description:
    'Track loan application status online for Apni Chhat Apna Ghar, PM Youth Business Loan, Akhuwat, and HBFC. CNIC verification, balloting result, and disbursement stages.',
  keywords: [
    'loan application status tracker Pakistan 2026',
    'Apni Chhat Apna Ghar status check by CNIC',
    'PM youth loan status tracking',
    'Akhuwat loan application tracking',
    'check govt loan approval status',
  ],
  openGraph: {
    title: 'Govt Loan Application Status Tracker 2026 – Apni Chhat, PM Youth Loan',
    description:
      'Format validator and guided one-click access to official government loan application portals and balloting dashboards.',
    url: 'https://pakistaninfohub.com/loans/loan-application-status-tracker-2026',
  },
  alternates: { canonical: 'https://pakistaninfohub.com/loans/loan-application-status-tracker-2026' },
};

const LoanStatusTracker = dynamic(
  () => import('@/components/LoanStatusTracker').then((m) => ({ default: m.LoanStatusTracker })),
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
        { '@type': 'ListItem', position: 3, name: 'Loan Status Tracker 2026', item: 'https://pakistaninfohub.com/loans/loan-application-status-tracker-2026' },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Pakistan Govt Loan Application Status Tracker 2026',
      description: 'Online guided tracker for monitoring application status, balloting draws, and disbursement for Apni Chhat, PM Youth Loan, and Akhuwat.',
      url: 'https://pakistaninfohub.com/loans/loan-application-status-tracker-2026',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://pakistaninfohub.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I check my Apni Chhat Apna Ghar application status online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Visit acag.punjab.gov.pk, log in with your 13-digit CNIC and password created during registration, and view your application verification status, balloting draw result, and sanction status.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does PM Youth Loan approval take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PM Youth Business Loan applications typically take 25–45 working days from submission to formal bank credit evaluation, sanction, and disbursement into your business bank account.',
          },
        },
      ],
    },
  ],
};

export default function LoanStatusTrackerPage() {
  const breadcrumbs = [
    { nameEn: 'Govt Loans', nameUr: 'سرکاری قرضہ سکیمیں' },
    { nameEn: 'Loan Status Tracker 2026', nameUr: 'لون سٹیٹس ٹریکر 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn">
        <Breadcrumbs items={breadcrumbs} />

        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="STATUS TRACKER" labelUr="سٹیٹس ٹریکر" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Govt Loan Application Status Tracker 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              سرکاری قرضہ درخواست سٹیٹس ٹریکر (اپنی چھت، پی ایم یوتھ، اخوت، گرین ٹریکٹر)
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-sans">
            Validate your CNIC format, review official approval roadmap stages, and navigate straight to your official
            scheme dashboard for balloting results and disbursement status.
          </p>
        </header>

        <DirectAnswerBox
          topicTitleEn="How to Check Your Govt Loan Application Status Online"
          topicTitleUr="سرکاری لون کی درخواست کا سٹیٹس کیسے چیک کریں؟"
          answerEn="To check your loan status: (1) Select your program (Apni Chhat Apna Ghar, PM Youth Loan, Akhuwat, or HBFC), (2) Validate your 13-digit CNIC, (3) Click 'Copy CNIC', and (4) Click 'Open Official Dashboard' to log into your applicant portal and check balloting, sanction letters, and bank disbursement status."
          answerUr="لون سٹیٹس چیک کرنے کے لیے: (1) لون پروگرام منتخب کریں، (2) 13 ہندسوں کا شناختی کارڈ درج کریں، (3) کاپی دبائیں، اور (4) آفیشل پورٹل پر جا کر لاگ ان کریں اور قرعہ اندازی و بینک ٹرانسفر کا سٹیٹس دیکھیں۔"
        />

        <section aria-label="Govt Loan Status Tracker Tool">
          <LoanStatusTracker />
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
                q: 'What does "Under Scrutiny" or "Under Verification" status mean?',
                a: 'It indicates that your NADRA biometric records, family tree, and property ownership land documents are currently being validated by government verification officers prior to the computerized balloting phase.',
              },
              {
                q: 'How will I be notified when my loan is sanctioned?',
                a: 'You will receive an official SMS notification on your registered mobile number from the government portal (e.g. 8070, 8171, or government shortcodes) with instructions to visit the designated bank branch with your original CNIC.',
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
            { label: 'Apni Chhat Apna Ghar Application Dashboard', url: 'https://acag.punjab.gov.pk/' },
            { label: 'Prime Minister Youth Program Official Portal', url: 'https://pmyp.gov.pk/' },
            { label: 'Akhuwat Islamic Microfinance Official System', url: 'https://akhuwat.org.pk/' },
            { label: 'CM Punjab Green Tractor Scheme Portal', url: 'https://gts.punjab.gov.pk/' },
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
