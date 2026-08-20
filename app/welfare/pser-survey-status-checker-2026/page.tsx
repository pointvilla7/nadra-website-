import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { HelpCircle, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PSER Survey Status Checker 2026 – Punjab Socio-Economic Registry Online Check | Pakistan Info Hub',
  description:
    'Check your Punjab Socio-Economic Registry (PSER) survey and registration status online by CNIC. Eligibility guide for Kisan Card, Himmat Card, and Apni Chhat schemes.',
  keywords: [
    'PSER survey status check online 2026',
    'Punjab Socio-Economic Registry CNIC check',
    'PSER registration status pser.punjab.gov.pk',
    'Kisan Card PSER survey verification',
    'Himmat Card eligibility status check',
  ],
  openGraph: {
    title: 'PSER Survey Status Checker 2026 – Punjab Socio-Economic Registry',
    description:
      'Format validator and direct portal access for checking PSER survey completion, PMT score, and welfare scheme eligibility in Punjab.',
    url: 'https://www.pakistaninfohub.com/welfare/pser-survey-status-checker-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/welfare/pser-survey-status-checker-2026' },
};

const PserSurveyChecker = dynamic(
  () => import('@/components/PserSurveyChecker').then((m) => ({ default: m.PserSurveyChecker })),
  { ssr: false, loading: () => <div className="h-[480px] rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" /> }
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Social Welfare & Relief', item: 'https://www.pakistaninfohub.com/welfare' },
        { '@type': 'ListItem', position: 3, name: 'PSER Survey Status 2026', item: 'https://www.pakistaninfohub.com/welfare/pser-survey-status-checker-2026' },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Punjab PSER Survey Status Checker 2026',
      description: 'Online guided navigator for checking household registration and PMT score in the Punjab Socio-Economic Registry.',
      url: 'https://www.pakistaninfohub.com/welfare/pser-survey-status-checker-2026',
      applicationCategory: 'GovernmentApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is PSER and why is it mandatory in Punjab?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PSER (Punjab Socio-Economic Registry) is the unified social registry established by the Government of Punjab. Completing a PSER household survey is mandatory to qualify for the CM Kisan Card, Himmat Card, Apni Chhat Apna Ghar loan, and Honhaar Scholarships.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where can I complete my PSER survey physically in Punjab?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can complete your physical PSER registration at any of the 5,000+ Union Council facilitation desks across Punjab or at designated Khidmat Marakiz with your family CNICs and utility bills.',
          },
        },
      ],
    },
  ],
};

export default function PserSurveyCheckerPage() {
  const breadcrumbs = [
    { nameEn: 'Social Welfare & Relief', nameUr: 'بے نظیر و احساس پروگرام' },
    { nameEn: 'PSER Survey Status 2026', nameUr: 'پی ایس ای آر سروے 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn">
        <Breadcrumbs items={breadcrumbs} />

        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="PSER DIRECTORY" labelUr="پی ایس ای آر پورٹل" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            PSER Survey Status Checker 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پنجاب سوشو اکنامک رجسٹری (پی ایس ای آر) آن لائن سروے چیکر
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-sans">
            Validate your CNIC, copy your identifier, and navigate to the official Punjab Socio-Economic Registry
            portal to verify your household PMT score and scheme eligibility.
          </p>
        </header>

        <DirectAnswerBox
          topicTitleEn="How to Check Your PSER Survey Status Online"
          topicTitleUr="پی ایس ای آر سروے کا آن لائن سٹیٹس کیسے چیک کریں؟"
          answerEn="To check PSER status: (1) Enter your 13-digit CNIC in our navigator, (2) Click 'Copy CNIC', and (3) Click 'Open Official PSER Portal' (pser.punjab.gov.pk) to view your verified household score and qualify for Kisan Card, Himmat Card, and Apni Chhat schemes. Helpline: 0800-02345."
          answerUr="پی ایس ای آر سٹیٹس چیک کرنے کے لیے: (1) 13 ہندسوں کا شناختی کارڈ درج کریں، (2) کاپی دبائیں، اور (3) آفیشل پورٹل (pser.punjab.gov.pk) پر جا کر لاگ ان کریں اور کسان کارڈ، ہمت کارڈ اور اپنی چھت سکیم کی اہلیت دیکھیں۔ ہیلپ لائن: 02345-0800۔"
        />

        <section aria-label="PSER Survey Status Checker Tool">
          <PserSurveyChecker />
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
                q: 'What documents are required for PSER registration?',
                a: 'You need the original CNIC of the head of family, CNICs/B-Forms of all household members, electricity/gas utility bills, and agricultural land ownership documents (for farmers applying for Kisan Card).',
              },
              {
                q: 'Is online self-registration available on PSER?',
                a: 'Yes, citizens can self-register their household survey by creating an account on pser.punjab.gov.pk or by visiting their local Union Council office.',
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
            { label: 'Punjab Socio-Economic Registry (PSER) Portal', url: 'https://pser.punjab.gov.pk/' },
            { label: 'Planning & Development Board Government of Punjab', url: 'https://pnd.punjab.gov.pk/' },
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
