import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  BookOpen,
  ExternalLink,
  ShieldCheck,
  HelpCircle,
  MessageSquare,
} from 'lucide-react';

// ──────────────────────────────────────────────────────────────
// Metadata
// ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'BISE Result Checker 2026 – All Pakistan Board Results Online | Pakistan Info Hub',
  description:
    'Check your BISE 2026 Matric & Intermediate result from BISE Lahore, Rawalpindi, Multan, Gujranwala, Faisalabad, Sahiwal, BSEK/BIEK Karachi, BISE Peshawar, and Federal Board. Includes official links and SMS codes.',
  keywords: [
    'BISE result 2026',
    'Pakistan board result 2026',
    'BISE Lahore result',
    'Matric result 2026',
    'Inter result 2026',
    'BSEK result 2026',
    'BIEK result 2026',
    'board result check online',
  ],
  openGraph: {
    title: 'BISE Result Checker 2026 – All Pakistan Boards',
    description:
      'Official links and SMS codes to check your 2026 Matric/Intermediate result from any BISE board in Pakistan.',
    url: 'https://www.pakistaninfohub.com/education/bise-result-checker-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/education/bise-result-checker-2026',
  },
};

// ──────────────────────────────────────────────────────────────
// Dynamic import (CSR only — prevents hydration mismatch)
// ──────────────────────────────────────────────────────────────
const BISEResultHelper = dynamic(
  () => import('@/components/BISEResultHelper').then((m) => ({ default: m.BISEResultHelper })),
  { ssr: false, loading: () => <div className="h-[480px] rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" /> }
);

// ──────────────────────────────────────────────────────────────
// JSON-LD Schemas
// ──────────────────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Education', item: 'https://www.pakistaninfohub.com/education' },
        { '@type': 'ListItem', position: 3, name: 'BISE Result Checker 2026', item: 'https://www.pakistaninfohub.com/education/bise-result-checker-2026' },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'BISE Result Checker 2026',
      description:
        'A guided tool that directs Pakistani students to the correct official board result portal and provides SMS shortcodes for checking Matric and Intermediate exam results.',
      url: 'https://www.pakistaninfohub.com/education/bise-result-checker-2026',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
    },
    {
      '@type': 'HowTo',
      name: 'How to Check Your BISE Board Result 2026 Online',
      description: 'Step-by-step guide to checking your Matric or Intermediate board result in Pakistan.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Select Your Board', text: 'Choose your BISE board from the list (e.g., BISE Lahore, Rawalpindi, Karachi).' },
        { '@type': 'HowToStep', position: 2, name: 'Select Exam Type', text: 'Select Matric/SSC or Intermediate/HSSC, and Annual or Supplementary.' },
        { '@type': 'HowToStep', position: 3, name: 'Open Official Portal', text: 'Click the link to open the official board result portal and enter your Roll Number.' },
        { '@type': 'HowToStep', position: 4, name: 'Alternatively, Use SMS', text: 'Send your Roll Number via SMS to the board\'s official shortcode for instant results.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How can I check my BISE Lahore result 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Go to result.biselahore.com, enter your Roll Number, select your exam type (Matric or Inter), complete the CAPTCHA, and click "View Result". Alternatively, send your Roll Number via SMS to 80029.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the SMS code to check board results in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SMS codes vary by board: BISE Lahore (80029), Rawalpindi (80026), Multan (80023), Gujranwala (80029), Faisalabad (80024), Sahiwal (80025), BSEK/BIEK Karachi (8583), Peshawar (8055), Federal Board (800055).',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I check my result online without a CAPTCHA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most BISE Punjab boards require a CAPTCHA for online result checks. BSEK Karachi (bsek.edu.pk) and Federal Board (fbise.edu.pk) currently do not require a CAPTCHA. The SMS method works for all boards without a CAPTCHA.',
          },
        },
        {
          '@type': 'Question',
          name: 'When are BISE Lahore Matric results 2026 announced?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'BISE Lahore typically announces Matric (SSC Part-II) Annual results in late July or early August. Check biselahore.com for the official announcement date.',
          },
        },
      ],
    },
  ],
};

// ──────────────────────────────────────────────────────────────
// Page Component
// ──────────────────────────────────────────────────────────────
export default function BISEResultCheckerPage() {
  const breadcrumbs = [
    { nameEn: 'Education', nameUr: 'تعلیم' },
    { nameEn: 'BISE Result Checker 2026', nameUr: 'بورڈ رزلٹ چیکر 2026' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="space-y-10 md:space-y-14 animate-fadeIn">
        <Breadcrumbs items={breadcrumbs} />

        {/* Page Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="INTERACTIVE TOOL" labelUr="انٹرایکٹو ٹول" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            BISE Result Checker 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پاکستان بورڈ رزلٹ چیکر
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-sans">
            Check your Matric (SSC) or Intermediate (HSSC) 2026 result from any major BISE board in Pakistan.
            Select your board below to get the official portal link and SMS shortcode — results are retrieved
            directly from the official board server.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Check BISE Board Result 2026"
          topicTitleUr="بورڈ رزلٹ چیک کرنے کا طریقہ"
          answerEn="To check your BISE 2026 result: (1) Select your board below, (2) click the official portal link, and (3) enter your Roll Number. All major Punjab boards (BISE Lahore, Rawalpindi, Multan, etc.) require a CAPTCHA on the website. For the fastest result without CAPTCHA, send your Roll Number via SMS to your board's shortcode — e.g., 80029 for BISE Lahore."
          answerUr="بورڈ رزلٹ چیک کرنے کا طریقہ: (1) نیچے اپنا بورڈ منتخب کریں، (2) سرکاری پورٹل لنک کھولیں، (3) رول نمبر درج کریں۔ پنجاب کے تمام بورڈز پر کیپچا لازمی ہے۔ سب سے تیز طریقہ SMS ہے — مثال کے طور پر BISE لاہور کے لیے رول نمبر 80029 پر بھیجیں۔"
        />

        {/* Interactive Tool */}
        <section aria-label="BISE Result Checker Tool">
          <BISEResultHelper />
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Why Guided Helper Section */}
        <section className="doc-card p-6 rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 space-y-3">
          <h2 className="font-serif font-bold text-lg text-doc-ink dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
            Why We Don&apos;t Directly Fetch Your Result
          </h2>
          <p className="text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
            After researching all major BISE boards, we found that <strong>every verified board uses either
            an image CAPTCHA, ASP.NET VIEWSTATE tokens, or requires additional PII</strong> (student name,
            mobile number) beyond just a Roll Number. This makes automated server-side fetching technically
            impossible without CAPTCHA-solving, which we will not do.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
            Instead, this tool provides the most direct path to your result: the official portal link (fastest
            online method) and the official SMS shortcode (fastest of all — works when websites are overloaded
            on result day).
          </p>
        </section>

        {/* All Board URLs Table */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white">
            All BISE Board Result Portals 2026
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="w-full text-sm font-sans">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Board</th>
                  <th className="px-4 py-3 text-left">Province</th>
                  <th className="px-4 py-3 text-left">Official Result URL</th>
                  <th className="px-4 py-3 text-left">SMS Code</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  { board: 'BISE Lahore', prov: 'Punjab', url: 'result.biselahore.com', href: 'http://result.biselahore.com/', sms: '80029' },
                  { board: 'BISE Rawalpindi', prov: 'Punjab', url: 'biserawalpindi.edu.pk', href: 'https://biserawalpindi.edu.pk', sms: '80026' },
                  { board: 'BISE Multan', prov: 'Punjab', url: 'bisemultan.edu.pk', href: 'https://www.bisemultan.edu.pk', sms: '80023' },
                  { board: 'BISE Gujranwala', prov: 'Punjab', url: 'bisegrw.edu.pk', href: 'https://www.bisegrw.edu.pk', sms: '80029' },
                  { board: 'BISE Faisalabad', prov: 'Punjab', url: 'bisefsd.edu.pk', href: 'https://www.bisefsd.edu.pk', sms: '80024' },
                  { board: 'BISE Sahiwal', prov: 'Punjab', url: 'bisesahiwal.edu.pk', href: 'https://www.bisesahiwal.edu.pk', sms: '80025' },
                  { board: 'BSEK Karachi (SSC)', prov: 'Sindh', url: 'bsek.edu.pk', href: 'https://bsek.edu.pk', sms: '8583' },
                  { board: 'BIEK Karachi (HSSC)', prov: 'Sindh', url: 'biek.edu.pk', href: 'https://www.biek.edu.pk', sms: '8583' },
                  { board: 'BISE Peshawar', prov: 'KPK', url: 'bisep.edu.pk', href: 'https://bisep.edu.pk', sms: '8055' },
                  { board: 'FBISE Federal', prov: 'Federal', url: 'fbise.edu.pk', href: 'https://fbise.edu.pk/result.html', sms: '800055' },
                ].map((row) => (
                  <tr key={row.board} className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-semibold text-doc-ink dark:text-white">{row.board}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{row.prov}</td>
                    <td className="px-4 py-3">
                      <a
                        href={row.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-doc-seal hover:underline flex items-center gap-1 font-mono text-xs"
                      >
                        {row.url}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                    <td className="px-4 py-3 font-mono font-bold text-doc-seal dark:text-red-400">{row.sms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'How can I check my BISE Lahore result 2026?',
                a: 'Go to result.biselahore.com, select Matric or Inter, enter your Roll Number, complete the CAPTCHA, and click "View Result". Or send your Roll Number via SMS to 80029 for instant results.',
              },
              {
                q: 'What is the SMS code for BISE boards?',
                a: 'Each board has its own code: Lahore (80029), Rawalpindi (80026), Multan (80023), Gujranwala (80029), Faisalabad (80024), Sahiwal (80025), Karachi BSEK/BIEK (8583), Peshawar (8055), Federal Board (800055). SMS charges are approximately PKR 2 + tax per message.',
              },
              {
                q: 'Why does the board website require a CAPTCHA?',
                a: 'BISE Punjab boards use image CAPTCHAs to prevent automated bulk lookups and protect student data. This is standard security practice for government portals with sensitive student information.',
              },
              {
                q: 'When are BISE 2026 results announced?',
                a: 'BISE Matric (SSC) Annual results are typically announced in July–August, and Intermediate (HSSC) Annual results in September–October. Supplementary results follow 2–3 months later. Check your board\'s official website for exact dates.',
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
            { label: 'BISE Lahore Official', url: 'https://www.biselahore.com' },
            { label: 'BSEK Karachi Official', url: 'https://bsek.edu.pk' },
            { label: 'BIEK Karachi Official', url: 'https://www.biek.edu.pk' },
            { label: 'FBISE Federal Board', url: 'https://fbise.edu.pk' },
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
