import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { HelpCircle, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'NTS, PPSC & FPSC Result & Scorecard Checker 2026 – Check by CNIC | Pakistan Info Hub',
  description:
    'Check test results, merit lists, and Detailed Marks Certificates (DMC) online by CNIC for NTS (NAT/GAT), PPSC, FPSC (CSS), ETEA, and PTS tests in Pakistan.',
  keywords: [
    'NTS result check by CNIC 2026',
    'PPSC written test result DMC download',
    'FPSC CSS marks sheet online',
    'ETEA test result scorecard',
    'PTS merit list check online',
  ],
  openGraph: {
    title: 'NTS, PPSC & FPSC Result & Scorecard Checker 2026 – Check by CNIC',
    description:
      'Format validator and direct portal gateway for checking competitive exam marks, percentiles, and interview merit lists.',
    url: 'https://pakistaninfohub.com/jobs/nts-result-scorecard-checker-2026',
  },
  alternates: { canonical: 'https://pakistaninfohub.com/jobs/nts-result-scorecard-checker-2026' },
};

const NtsResultScorecardHelper = dynamic(
  () => import('@/components/NtsResultScorecardHelper').then((m) => ({ default: m.NtsResultScorecardHelper })),
  { ssr: false, loading: () => <div className="h-[480px] rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" /> }
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Jobs Portal', item: 'https://pakistaninfohub.com/jobs' },
        { '@type': 'ListItem', position: 3, name: 'Result & Scorecard Checker 2026', item: 'https://pakistaninfohub.com/jobs/nts-result-scorecard-checker-2026' },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Pakistan NTS, PPSC & FPSC Result Scorecard Checker 2026',
      description: 'Online directory and format validator for checking recruitment exam results, marks sheets, and interview qualifiers across Pakistani testing agencies.',
      url: 'https://pakistaninfohub.com/jobs/nts-result-scorecard-checker-2026',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://pakistaninfohub.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I check my NTS test score online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Visit nts.org.pk, navigate to the Results section, select your test title, enter your 13-digit CNIC number without dashes, and complete the verification code to view your marks sheet and percentile score.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I download a PPSC Detailed Marks Certificate (DMC)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'On ppsc.gop.pk, visit the DMC section, enter your CNIC and test roll number to download your complete subject-wise marks breakdown.',
          },
        },
      ],
    },
  ],
};

export default function NtsResultScorecardPage() {
  const breadcrumbs = [
    { nameEn: 'Jobs Portal', nameUr: 'نوکریاں اور ملازمتیں' },
    { nameEn: 'Result & Scorecard Checker 2026', nameUr: 'رزلٹ و ڈی ایم سی چیکر 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn">
        <Breadcrumbs items={breadcrumbs} />

        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="RESULT PORTAL" labelUr="رزلٹ پورٹل" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            NTS, PPSC & FPSC Result & Scorecard Checker 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              امتحانی رزلٹ کارڈ، ڈی ایم سی اور میرٹ لسٹ چیکر (این ٹی ایس، پی پی ایس سی، ایف پی ایس سی)
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-sans">
            Validate your CNIC, copy your identifier, and open the official result portal for NTS, PPSC, FPSC, ETEA,
            or PTS to view your marks, DMC, and interview qualifications.
          </p>
        </header>

        <DirectAnswerBox
          topicTitleEn="How to Check Govt Recruitment Test Results Online in Pakistan"
          topicTitleUr="پاکستان میں سرکاری امتحانی رزلٹ اور مارکس کارڈ چیک کرنے کا طریقہ"
          answerEn="To check your test scorecard: (1) Select testing agency (NTS, PPSC, FPSC, ETEA, or PTS), (2) Enter your 13-digit CNIC, (3) Click 'Copy CNIC', and (4) Click 'Open Official Result Portal' to check your subject marks, passing status, and merit rank directly on the testing authority's server."
          answerUr="رزلٹ چیک کرنے کے لیے: (1) ادارہ منتخب کریں (این ٹی ایس، پی پی ایس سی وغیرہ)، (2) 13 ہندسوں کا شناختی کارڈ درج کریں، (3) کاپی دبائیں، اور (4) آفیشل پورٹل پر جا کر اپنے تفصیلی نمبر، پرسنٹائل اور انٹرویو کی اہلیت دیکھیں۔"
        />

        <section aria-label="Result Scorecard Checker Tool">
          <NtsResultScorecardHelper />
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
                q: 'What is the validity period of an NTS NAT or GAT scorecard?',
                a: 'NTS NAT (National Aptitude Test) and GAT (Graduate Assessment Test) results remain officially valid for two (2) years from the date of test declaration for university admissions and HEC scholarship applications.',
              },
              {
                q: 'How can I apply for paper rechecking or re-counting?',
                a: 'Candidates can submit an online paper rechecking application on the testing agency portal within 10 to 15 days of result declaration along with a nominal bank challan fee (typically PKR 500).',
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
            { label: 'National Testing Service (NTS) Result Archive', url: 'https://www.nts.org.pk/' },
            { label: 'Punjab Public Service Commission (PPSC) Results', url: 'https://www.ppsc.gop.pk/' },
            { label: 'Federal Public Service Commission (FPSC) Recommendations', url: 'https://www.fpsc.gov.pk/' },
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
