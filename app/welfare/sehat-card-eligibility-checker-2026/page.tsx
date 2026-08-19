import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { HelpCircle, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sehat Card Eligibility Checker 2026 – Check Status by CNIC Online & 8500 SMS | Pakistan Info Hub',
  description:
    'Check Sehat Sahulat Card eligibility and hospital coverage online by 13-digit CNIC or 8500 SMS. Free 1 Million PKR medical treatment guide for Punjab, KPK, ICT, and Federal programs.',
  keywords: [
    'Sehat Card eligibility check by CNIC 2026',
    '8500 SMS Sehat Card status',
    'Punjab Sehat Card check online',
    'KPK Sehat Card Plus verification',
    'Sehat Sahulat Program hospital list',
  ],
  openGraph: {
    title: 'Sehat Card Eligibility Checker 2026 – Check Status by CNIC Online',
    description:
      'Format validator, 8500 SMS instruction generator, and direct portal access for Pakistan Sehat Sahulat Card programs.',
    url: 'https://pakistaninfohub.com/welfare/sehat-card-eligibility-checker-2026',
  },
  alternates: { canonical: 'https://pakistaninfohub.com/welfare/sehat-card-eligibility-checker-2026' },
};

const SehatCardChecker = dynamic(
  () => import('@/components/SehatCardChecker').then((m) => ({ default: m.SehatCardChecker })),
  { ssr: false, loading: () => <div className="h-[480px] rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" /> }
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Social Welfare & Relief', item: 'https://pakistaninfohub.com/welfare' },
        { '@type': 'ListItem', position: 3, name: 'Sehat Card Eligibility 2026', item: 'https://pakistaninfohub.com/welfare/sehat-card-eligibility-checker-2026' },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Pakistan Sehat Card Eligibility Checker 2026',
      description: 'Online directory and 8500 SMS guide for verifying Sehat Sahulat Card health insurance eligibility and empaneled hospitals.',
      url: 'https://pakistaninfohub.com/welfare/sehat-card-eligibility-checker-2026',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://pakistaninfohub.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I check my Sehat Card status by SMS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Send your 13-digit CNIC number without dashes or spaces to 8500 from any Pakistani mobile network. You will receive an immediate SMS reply confirming your family eligibility and card number.',
          },
        },
        {
          '@type': 'Question',
          name: 'What medical treatments are covered under Sehat Sahulat Program?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sehat Card covers inpatient hospitalizations, cardiovascular surgeries, cancer treatments (chemotherapy and radiation), renal dialysis, neurosurgery, emergency medical admissions, and maternity care up to PKR 1,000,000 per family annually.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a physical plastic card to receive treatment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. In all empaneled public and private hospitals, your original NADRA CNIC or B-Form (for minors) serves as your electronic Sehat Card at the hospital reception counter.',
          },
        },
      ],
    },
  ],
};

export default function SehatCardCheckerPage() {
  const breadcrumbs = [
    { nameEn: 'Social Welfare & Relief', nameUr: 'بے نظیر و احساس پروگرام' },
    { nameEn: 'Sehat Card Eligibility 2026', nameUr: 'صحت کارڈ اہلیت 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn">
        <Breadcrumbs items={breadcrumbs} />

        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="HEALTH DIRECTORY" labelUr="صحت گائیڈ" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Sehat Card Eligibility Checker 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              صحت سہولت کارڈ آن لائن اہلیت و ہسپتال چیکر (قومی، پنجاب و کے پی کے)
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-sans">
            Check your free 1 Million PKR family health coverage status by 13-digit CNIC, generate your 8500 SMS code,
            and locate empaneled private and government hospitals nationwide.
          </p>
        </header>

        <DirectAnswerBox
          topicTitleEn="How to Check Sehat Card Eligibility in Pakistan (2026)"
          topicTitleUr="پاکستان میں صحت کارڈ کی اہلیت کیسے چیک کریں؟"
          answerEn="To check Sehat Card eligibility: (1) SMS your 13-digit CNIC without dashes to 8500 to receive instant family status, or (2) Enter your CNIC in our navigator to copy and verify on the official Prime Minister Health Program portal (pmhealthprogram.gov.pk). Covers up to PKR 1,000,000/year for inpatient treatment."
          answerUr="صحت کارڈ کی اہلیت جاننے کے لیے: (1) اپنے موبائل سے 13 ہندسوں کا شناختی کارڈ بغیر ڈیشز کے 8500 پر میسج بھیجیں، یا (2) ہمارے ٹول میں شناختی کارڈ درج کر کے آفیشل پورٹل پر چیک کریں۔ فی خاندان سالانہ 10 لاکھ روپے تک مفت ان ڈور علاج کی سہولت میسر ہے۔"
        />

        <section aria-label="Sehat Card Eligibility Checker Tool">
          <SehatCardChecker />
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
                q: 'Which family members are covered under one Sehat Card?',
                a: 'The head of the family, spouse, and all unmarried children listed on the NADRA Family Registration Certificate (FRC) are automatically covered under the primary cardholder.',
              },
              {
                q: 'What is the procedure when arriving at an empaneled hospital?',
                a: 'Visit the dedicated "Sehat Sahulat Program Counter" inside the hospital with the patient’s original CNIC (or B-Form for children). The hospital representative will perform biometric fingerprint verification and register the admission.',
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
            { label: 'Prime Minister National Sehat Sahulat Program', url: 'https://www.pmhealthprogram.gov.pk/' },
            { label: 'Punjab Health Initiative Management Company (PHIMC)', url: 'https://phimc.punjab.gov.pk/' },
            { label: 'KPK Sehat Card Plus Universal Health Coverage', url: 'https://sehatcardplus.gov.pk/' },
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
