import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ExternalLink, HelpCircle, ShieldCheck, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'University Merit List Checker 2026 – PU, UET, NUST, COMSATS, NED | Pakistan Info Hub',
  description:
    'Check your university admission merit list for 2026. Direct links to PU, UET, NUST, COMSATS, LUMS, QAU, NED, and University of Karachi official merit list portals with Ctrl+F search guide.',
  keywords: [
    'university merit list 2026 Pakistan',
    'PU merit list 2026',
    'NUST merit list 2026',
    'UET admission merit list',
    'COMSATS merit list',
    'NED merit list 2026',
    'university admission list Pakistan',
  ],
  openGraph: {
    title: 'University Merit List Tracker 2026 – All Pakistan Universities',
    description: 'Direct links to official merit list portals for PU, UET, NUST, COMSATS, NED, and more.',
    url: 'https://pakistaninfohub.com/education/university-merit-list-checker-2026',
  },
  alternates: { canonical: 'https://pakistaninfohub.com/education/university-merit-list-checker-2026' },
};

const MeritListIndex = dynamic(
  () => import('@/components/MeritListIndex').then((m) => ({ default: m.MeritListIndex })),
  { ssr: false, loading: () => <div className="h-[480px] rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" /> }
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Education', item: 'https://pakistaninfohub.com/education' },
        { '@type': 'ListItem', position: 3, name: 'University Merit List Checker 2026', item: 'https://pakistaninfohub.com/education/university-merit-list-checker-2026' },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'University Merit List Tracker 2026',
      description: 'An index of official Pakistani university admission merit list portals with direct links and Ctrl+F search instructions.',
      url: 'https://pakistaninfohub.com/education/university-merit-list-checker-2026',
      applicationCategory: 'EducationalApplication',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://pakistaninfohub.com' },
    },
    {
      '@type': 'HowTo',
      name: 'How to Check Your Name in a University Merit List 2026',
      description: 'Guide to finding your name in a Pakistani university admission merit list.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Find Your University', text: 'Use the tool below to find your university and click the "View Merit List" button.' },
        { '@type': 'HowToStep', position: 2, name: 'Open the Merit List', text: 'The official merit list page or PDF will open. For PDFs, wait for it to fully load.' },
        { '@type': 'HowToStep', position: 3, name: 'Search with Ctrl+F', text: 'Press Ctrl+F (Windows) or Cmd+F (Mac) to open the browser search box.' },
        { '@type': 'HowToStep', position: 4, name: 'Type Your Roll No or CNIC', text: 'Enter your Roll Number, application ID, or CNIC. Your row will be highlighted if selected.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I check PU merit list 2026?',
          acceptedAnswer: { '@type': 'Answer', text: 'Visit admissions.pu.edu.pk and navigate to the Merit Lists section. Select your program (BS 1st or 5th semester) to view the HTML table. Use Ctrl+F to search your Roll Number or CNIC.' },
        },
        {
          '@type': 'Question',
          name: 'Can I check NUST merit list without login?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes — NUST\'s undergraduate admissions portal (ugadmissions.nust.edu.pk) allows checking selection status by Registration Number without requiring full login credentials.' },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between merit lists 1, 2, and 3?',
          acceptedAnswer: { '@type': 'Answer', text: 'Universities release multiple merit lists as earlier-selected candidates may withdraw after paying fees. The 1st merit list has the highest aggregate required. Each subsequent list includes candidates from lower aggregate scores who become eligible as seats free up.' },
        },
        {
          '@type': 'Question',
          name: 'What happens if my name is not on the merit list?',
          acceptedAnswer: { '@type': 'Answer', text: 'If your name is not on the current merit list, wait for the next merit list to be released. Universities typically release 3-5 merit lists. You may also appear on a waiting list. Contact the university admissions office if uncertain about your status.' },
        },
      ],
    },
  ],
};

export default function MeritListCheckerPage() {
  const breadcrumbs = [
    { nameEn: 'Education', nameUr: 'تعلیم' },
    { nameEn: 'University Merit List 2026', nameUr: 'یونیورسٹی میرٹ لسٹ 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="space-y-10 md:space-y-14 animate-fadeIn">
        <Breadcrumbs items={breadcrumbs} />

        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="MERIT LIST INDEX" labelUr="میرٹ لسٹ انڈیکس" variant="navy" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            University Merit List Checker 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              یونیورسٹی میرٹ لسٹ ٹریکر
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-sans">
            Find direct links to official merit list portals for major Pakistani universities. Most merit lists
            are published as HTML tables or PDFs — use the Ctrl+F search method to find your name instantly.
          </p>
        </header>

        <DirectAnswerBox
          topicTitleEn="How to Check University Merit List 2026"
          topicTitleUr="یونیورسٹی میرٹ لسٹ چیک کرنے کا طریقہ"
          answerEn="To check your university merit list 2026: (1) Find your university below and click 'View Merit List', (2) Press Ctrl+F (Windows) or Cmd+F (Mac) on the page, (3) Type your Roll Number or CNIC to find your row. NUST and NED allow direct public lookup by roll number. PU and COMSATS publish HTML tables. UET and LUMS require portal login."
          answerUr="یونیورسٹی میرٹ لسٹ چیک کرنے کے لیے: (1) نیچے اپنی یونیورسٹی تلاش کریں اور 'View Merit List' کلک کریں، (2) صفحے پر Ctrl+F دبائیں، (3) اپنا رول نمبر یا شناختی کارڈ نمبر لکھیں۔ NUST اور NED پر براہ راست رول نمبر سے چیک کر سکتے ہیں۔"
        />

        <section aria-label="University Merit List Index Tool">
          <MeritListIndex />
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Why No Live Lookup Section */}
        <section className="doc-card p-6 rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30 space-y-3">
          <h2 className="font-serif font-bold text-lg text-doc-ink dark:text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600 shrink-0" />
            Why There&apos;s No Single Live Checker for All Universities
          </h2>
          <p className="text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
            Unlike a government ID portal with a single database, each Pakistani university operates its own
            independent admission system. Most publish merit lists as:
          </p>
          <ul className="text-sm text-slate-700 dark:text-slate-300 font-sans space-y-1 ml-4 list-disc">
            <li><strong>HTML tables</strong> (PU, COMSATS) — searchable with Ctrl+F</li>
            <li><strong>PDF downloads</strong> (QAU, KU) — downloadable and Ctrl+F searchable</li>
            <li><strong>Portal login</strong> (UET, LUMS) — requires your own credentials</li>
            <li><strong>Public lookup by ID</strong> (NUST, NED) — use the portal directly</li>
          </ul>
          <p className="text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
            We provide direct links to each official portal rather than claiming a unified live tracker that
            doesn&apos;t exist for most institutions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              { q: 'How do I check PU merit list 2026?', a: 'Visit admissions.pu.edu.pk and navigate to the Merit Lists section. Select your program to view the HTML list. Use Ctrl+F to search your Roll Number or CNIC in the page.' },
              { q: 'Can I check NUST merit list without login?', a: 'Yes — NUST\'s UG portal (ugadmissions.nust.edu.pk) allows checking selection status by Registration Number without full login. This is one of the few Pakistani universities with a public no-login lookup.' },
              { q: 'What is the difference between merit lists 1, 2, and 3?', a: 'Universities release multiple merit lists as earlier-selected candidates may not pay their fees. The 1st merit list has the highest aggregate required. Each subsequent list opens seats for candidates with lower aggregates.' },
              { q: 'What happens if my name is not on the merit list?', a: 'Wait for the next merit list — universities typically release 3-5 rounds. If not selected after all rounds, contact the admissions office directly. Some programs maintain waiting lists.' },
            ].map((faq, idx) => (
              <div key={idx} className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">{faq.q}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Punjab University Admissions', url: 'https://admissions.pu.edu.pk' },
            { label: 'NUST UG Admissions', url: 'https://ugadmissions.nust.edu.pk' },
            { label: 'UET Admissions', url: 'https://admission.uet.edu.pk' },
            { label: 'COMSATS Admissions', url: 'https://admission.comsats.edu.pk' },
            { label: 'NED Admissions', url: 'https://admission.neduet.edu.pk' },
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
