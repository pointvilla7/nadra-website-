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
  title: '9th Class Result 2026 & BISE Board Result Checker Online | Pakistan Info Hub',
  description:
    'Check 9th class result 2026 (SSC Part-I) and Matric/Inter results for BISE Lahore, Faisalabad, Rawalpindi, Gujranwala, Multan, Sargodha, Sahiwal, Bahawalpur, DG Khan, Federal Board, BSEK Karachi, BISE Peshawar, and AJK Mirpur with roll number & SMS codes.',
  keywords: [
    '9th class result 2026',
    '9th class result check online',
    'class 9 result 2026 punjab board',
    'bise lahore 9th result 2026',
    'bise faisalabad 9th class result',
    'bise rawalpindi 9th result 2026',
    'BISE result 2026',
    'Pakistan board result 2026',
    'Matric result 2026',
    'Inter result 2026',
    'board result check online',
  ],
  openGraph: {
    title: '9th Class Result 2026 & BISE Board Result Checker – All Pakistan Boards',
    description:
      'Check 9th class result 2026 and Matric/Inter exam marks sheets online with official portal links and verified SMS shortcodes for all BISE boards.',
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
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
              🔴 9th Class Result 2026 Live
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            9th Class Result 2026 & BISE Board Checker
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              نہم کلاس رزلٹ 2026 اور تمام پاکستانی تعلیمی بورڈز
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-sans">
            Check your <strong>9th class result 2026 (SSC Part-I)</strong>, 10th (Matric), and Intermediate annual exam results across all Punjab educational boards (BISE Lahore, Faisalabad, Rawalpindi, Sargodha, Gujranwala, Multan, Sahiwal, Bahawalpur, DG Khan), Federal Board (FBISE), and AJK Mirpur. Select your board below to open the official server portal or send an SMS directly to the verified board shortcode.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Check 9th Class Result 2026 Online & via SMS"
          topicTitleUr="نہم کلاس رزلٹ 2026 آن لائن اور ایس ایم ایس سے چیک کرنے کا طریقہ"
          answerEn="9th Class (SSC Part-I) Annual Results 2026 across Punjab boards were officially announced today, Wednesday, September 2, 2026 at 10:00 AM. To check: (1) Select your board below or use the dedicated board link, (2) click the official portal link and enter your Roll Number, or (3) for instant lookup when servers are busy, send your Roll Number via SMS to your board's verified code (e.g. 800291 for Lahore, 800240 for Faisalabad, 800296 for Rawalpindi, 800290 for Sargodha, 800299 for Gujranwala, 5050 for FBISE / AJK)."
          answerUr="پنجاب کے تمام تعلیمی بورڈز نے نہم کلاس (9th) سالانہ رزلٹ 2026 کا باقاعدہ اعلان آج بروز بدھ 2 ستمبر 2026 کو صبح 10:00 بجے کر دیا ہے۔ رزلٹ چیک کرنے کے 2 طریقے ہیں: (1) نیچے اپنا بورڈ منتخب کر کے سرکاری ویب سائٹ پر رول نمبر درج کریں، یا (2) سرور ڈاؤن ہونے کی صورت میں اپنے بورڈ کے مخصوص کوڈ پر رول نمبر بذریعہ SMS بھیجیں (مثلاً لاہور 800291، فیصل آباد 800240، راولپنڈی 800296، سرگودھا 800290، گوجرانوالہ 800299)۔"
        />

        {/* Dedicated Board Links Grid */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass">
              Dedicated 9th Class Result 2026 Board Portals
            </h2>
            <Link
              href="/education/matric-40-percent-passing-marks-rule-2026"
              className="text-xs font-semibold text-doc-seal dark:text-amber-400 hover:underline flex items-center gap-1"
            >
              <span>40% Passing Marks Rule Explained</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {[
              { name: 'Lahore Board', slug: '/education/9th-class-result-2026-lahore-board', code: '800291' },
              { name: 'Faisalabad Board', slug: '/education/9th-class-result-2026-faisalabad-board', code: '800240' },
              { name: 'Rawalpindi Board', slug: '/education/9th-class-result-2026-rawalpindi-board', code: '800296' },
              { name: 'Sargodha Board', slug: '/education/9th-class-result-2026-sargodha-board', code: '800290' },
              { name: 'Gujranwala Board', slug: '/education/9th-class-result-2026-gujranwala-board', code: '800299' },
              { name: 'Multan Board', slug: '/education/9th-class-result-2026-multan-board', code: '800293' },
              { name: 'Sahiwal Board', slug: '/education/9th-class-result-2026-sahiwal-board', code: '800292' },
              { name: 'Bahawalpur Board', slug: '/education/9th-class-result-2026-bahawalpur-board', code: '800298' },
              { name: 'Federal Board', slug: '/education/9th-class-result-2026-federal-board', code: '5050' },
              { name: 'AJK Mirpur Board', slug: '/education/9th-class-result-2026-ajk-mirpur-board', code: '5050' },
            ].map((board) => (
              <Link
                key={board.slug}
                href={board.slug}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass dark:hover:border-doc-brass transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div className="font-serif font-bold text-xs text-doc-ink dark:text-white">
                  {board.name}
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono mt-2 text-slate-500 dark:text-slate-400">
                  <span>SMS: {board.code}</span>
                  <span className="text-doc-seal font-bold">Check &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Interactive Tool */}
        <section aria-label="BISE Result Checker Tool">
          <BISEResultHelper />
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Why Guided Helper Section */}
        <section className="doc-card p-6 rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 space-y-3">
          <h2 className="font-serif font-bold text-lg text-doc-ink dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
            Why We Direct You to Official Portals
          </h2>
          <p className="text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
            All Punjab BISE boards utilize CAPTCHAs and session tokens to safeguard candidate records. Direct server querying prevents overloaded proxy issues. For maximum speed on announcement day, use the verified SMS codes listed below or click the direct portal link with your roll number.
          </p>
        </section>

        {/* All Board URLs Table */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white">
              All 14 BISE Board Result Portals & SMS Codes 2026
            </h2>
            <Link
              href="/education/matric-40-percent-passing-marks-rule-2026"
              className="text-xs font-semibold text-doc-seal dark:text-amber-400 hover:underline"
            >
              Read: Matric Passing Marks 33% vs 40% Rule &rarr;
            </Link>
          </div>
          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Board</th>
                  <th className="px-4 py-3 text-left">Province / Region</th>
                  <th className="px-4 py-3 text-left">Official Result URL</th>
                  <th className="px-4 py-3 text-left">SMS Code</th>
                  <th className="px-4 py-3 text-left">Dedicated Guide</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  { board: 'BISE Lahore', prov: 'Punjab', url: 'result.biselahore.com', href: 'https://result.biselahore.com/', sms: '800291', link: '/education/9th-class-result-2026-lahore-board' },
                  { board: 'BISE Faisalabad', prov: 'Punjab', url: 'bisefsd.edu.pk', href: 'https://www.bisefsd.edu.pk', sms: '800240', link: '/education/9th-class-result-2026-faisalabad-board' },
                  { board: 'BISE Rawalpindi', prov: 'Punjab', url: 'biserawalpindi.edu.pk', href: 'https://biserawalpindi.edu.pk', sms: '800296', link: '/education/9th-class-result-2026-rawalpindi-board' },
                  { board: 'BISE Sargodha', prov: 'Punjab', url: 'bisesargodha.edu.pk', href: 'https://www.bisesargodha.edu.pk', sms: '800290', link: '/education/9th-class-result-2026-sargodha-board' },
                  { board: 'BISE Gujranwala', prov: 'Punjab', url: 'bisegrw.edu.pk', href: 'https://www.bisegrw.edu.pk', sms: '800299', link: '/education/9th-class-result-2026-gujranwala-board' },
                  { board: 'BISE Multan', prov: 'Punjab', url: 'bisemultan.edu.pk', href: 'https://www.bisemultan.edu.pk', sms: '800293', link: '/education/9th-class-result-2026-multan-board' },
                  { board: 'BISE Sahiwal', prov: 'Punjab', url: 'bisesahiwal.edu.pk', href: 'https://www.bisesahiwal.edu.pk', sms: '800292', link: '/education/9th-class-result-2026-sahiwal-board' },
                  { board: 'BISE Bahawalpur', prov: 'Punjab', url: 'bisebwp.edu.pk', href: 'https://www.bisebwp.edu.pk', sms: '800298', link: '/education/9th-class-result-2026-bahawalpur-board' },
                  { board: 'BISE DG Khan', prov: 'Punjab', url: 'bisedgkhan.edu.pk', href: 'https://www.bisedgkhan.edu.pk', sms: '800295', link: null },
                  { board: 'FBISE Federal Board', prov: 'Federal / ICT', url: 'fbise.edu.pk', href: 'https://fbise.edu.pk/result-main.php', sms: '5050 (FB [Roll])', link: '/education/9th-class-result-2026-federal-board' },
                  { board: 'AJK Board Mirpur', prov: 'AJK', url: 'ajkbise.net', href: 'https://ajkbise.net', sms: '5050', link: '/education/9th-class-result-2026-ajk-mirpur-board' },
                  { board: 'BSEK Karachi (SSC)', prov: 'Sindh', url: 'bsek.edu.pk', href: 'https://bsek.edu.pk', sms: '8583', link: null },
                  { board: 'BIEK Karachi (HSSC)', prov: 'Sindh', url: 'biek.edu.pk', href: 'https://www.biek.edu.pk', sms: '8583', link: null },
                  { board: 'BISE Peshawar', prov: 'KPK', url: 'bisep.edu.pk', href: 'https://bisep.edu.pk', sms: '8055', link: null },
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
                    <td className="px-4 py-3">
                      {row.link ? (
                        <Link href={row.link} className="text-xs font-semibold text-doc-brass hover:underline">
                          9th Result Page &rarr;
                        </Link>
                      ) : (
                        <span className="text-xs text-slate-400">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
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
