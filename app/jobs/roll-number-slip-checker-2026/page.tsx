import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { HelpCircle, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roll Number Slip Checker 2026 – FPSC, PPSC, SPSC, KPPSC, NTS & ETEA | Pakistan Info Hub',
  description:
    'Download and check roll number slips and admission letters online by CNIC for FPSC (CSS), PPSC, SPSC, KPPSC, BPSC, NTS, and ETEA competitive exams and job tests.',
  keywords: [
    'roll number slip checker 2026 Pakistan',
    'PPSC admission letter download by CNIC',
    'FPSC roll number slip 2026',
    'NTS roll no slip download',
    'KPPSC ability test roll number',
    'SPSC admission slip check',
  ],
  openGraph: {
    title: 'Roll Number Slip Checker 2026 – FPSC, PPSC, SPSC, NTS Online',
    description:
      'Format validator and guided one-click portal access for downloading competitive exam roll number slips and test center call letters.',
    url: 'https://www.pakistaninfohub.com/jobs/roll-number-slip-checker-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/jobs/roll-number-slip-checker-2026' },
};

const RollNumberSlipChecker = dynamic(
  () => import('@/components/RollNumberSlipChecker').then((m) => ({ default: m.RollNumberSlipChecker })),
  { ssr: false, loading: () => <div className="h-[480px] rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" /> }
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Jobs Portal', item: 'https://www.pakistaninfohub.com/jobs' },
        { '@type': 'ListItem', position: 3, name: 'Roll Number Slip Checker 2026', item: 'https://www.pakistaninfohub.com/jobs/roll-number-slip-checker-2026' },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Pakistan Roll Number Slip Checker 2026',
      description: 'Online directory and format validator for checking test centers and downloading admission letters for FPSC, PPSC, NTS, and provincial PSCs.',
      url: 'https://www.pakistaninfohub.com/jobs/roll-number-slip-checker-2026',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I download my PPSC admission letter online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Visit ppsc.gop.pk, select "Download Admission Letter", enter your 13-digit CNIC number, choose your applied post/case number, and click Submit to print your official exam roll number slip.',
          },
        },
        {
          '@type': 'Question',
          name: 'When are FPSC and NTS roll number slips uploaded?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Testing agencies and public service commissions typically upload admission certificates 7 to 10 days before the scheduled test date. Candidates receive an SMS alert on their registered mobile number.',
          },
        },
      ],
    },
  ],
};

export default function RollNumberSlipCheckerPage() {
  const breadcrumbs = [
    { nameEn: 'Jobs Portal', nameUr: 'نوکریاں اور ملازمتیں' },
    { nameEn: 'Roll Number Slip Checker 2026', nameUr: 'رول نمبر سلپ چیکر 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn">
        <Breadcrumbs items={breadcrumbs} />

        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="ADMISSION SLIP PORTAL" labelUr="رول نمبر پورٹل" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Roll Number Slip & Admission Letter Checker 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              سرکاری رول نمبر سلپ و ایڈمشن لیٹر چیکر (ایف پی ایس سی، پی پی ایس سی، این ٹی ایس)
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-sans">
            Validate your CNIC, copy your identifier, and open the official admission letter gateway for FPSC, PPSC,
            SPSC, KPPSC, BPSC, NTS, or ETEA recruitment tests.
          </p>
        </header>

        <DirectAnswerBox
          topicTitleEn="How to Download Official Govt Exam Roll Number Slips in Pakistan"
          topicTitleUr="پاکستان میں سرکاری امتحانی رول نمبر سلپ ڈاؤن لوڈ کرنے کا طریقہ"
          answerEn="To download your slip: (1) Select your commission (FPSC, PPSC, SPSC, KPPSC, BPSC, NTS, or ETEA), (2) Enter your 13-digit CNIC, (3) Click 'Copy CNIC', and (4) Click 'Open Official Portal' to enter your CNIC and print your printable PDF admission certificate with test center and seat number."
          answerUr="رول نمبر سلپ ڈاؤن لوڈ کرنے کے لیے: (1) اپنا کمیشن منتخب کریں (ایف پی ایس سی، پی پی ایس سی، این ٹی ایس وغیرہ)، (2) 13 ہندسوں کا شناختی کارڈ درج کریں، (3) کاپی دبائیں، اور (4) آفیشل پورٹل پر جا کر اپنا امتحانی سینٹر، وقت اور رول نمبر دیکھ کر پرنٹ کریں۔"
        />

        <section aria-label="Roll Number Slip Checker Tool">
          <RollNumberSlipChecker />
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
                q: 'What items are mandatory to bring to the exam center?',
                a: 'Candidates must bring: (1) Original printed Admission Certificate / Roll Number Slip, (2) Original Computerized National Identity Card (Smart CNIC), (3) Transparent clipboard, and (4) Blue/black ballpoint pens. Mobile phones and digital watches are strictly banned.',
              },
              {
                q: 'What should I do if my roll number slip has a picture or name error?',
                a: 'Immediately contact the respective commission’s facilitation center via telephone or email at least 3 working days before the test to request an urgent correction or bring an attested passport photograph with your original CNIC to the test center.',
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
            { label: 'Federal Public Service Commission (FPSC)', url: 'https://www.fpsc.gov.pk/' },
            { label: 'Punjab Public Service Commission (PPSC)', url: 'https://www.ppsc.gop.pk/' },
            { label: 'National Testing Service (NTS)', url: 'https://www.nts.org.pk/' },
            { label: 'Sindh Public Service Commission (SPSC)', url: 'https://spsc.gos.pk/' },
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
