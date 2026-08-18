import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ExternalLink, HelpCircle, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'HEC Scholarship Status 2026 – Check Your Application Status | Pakistan Info Hub',
  description:
    'Find out how to check your HEC scholarship status on the official eportal.hec.gov.pk. Step-by-step guide for Need-Based, Indigenous PhD, PM Merit, and Uraan Pakistan scholarships. Includes HEC helpline.',
  keywords: [
    'HEC scholarship status 2026',
    'HEC scholarship check',
    'eportal.hec.gov.pk',
    'HEC need based scholarship',
    'HEC indigenous PhD',
    'PM merit scholarship Pakistan',
    'HEC Uraan Pakistan scholarship',
  ],
  openGraph: {
    title: 'HEC Scholarship Status 2026 – Guided Status Checker',
    description: 'Step-by-step guide to check your HEC scholarship application status at eportal.hec.gov.pk.',
    url: 'https://pakistaninfohub.com/education/hec-scholarship-status-2026',
  },
  alternates: { canonical: 'https://pakistaninfohub.com/education/hec-scholarship-status-2026' },
};

const HECScholarshipHelper = dynamic(
  () => import('@/components/HECScholarshipHelper').then((m) => ({ default: m.HECScholarshipHelper })),
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
        { '@type': 'ListItem', position: 3, name: 'HEC Scholarship Status 2026', item: 'https://pakistaninfohub.com/education/hec-scholarship-status-2026' },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Check HEC Scholarship Status 2026',
      description: 'Step-by-step guide to checking your HEC scholarship application status on the official eportal.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Visit HEC E-Portal', text: 'Open eportal.hec.gov.pk in your browser.' },
        { '@type': 'HowToStep', position: 2, name: 'Login', text: 'Click the Login button and enter your CNIC (without dashes) and password.' },
        { '@type': 'HowToStep', position: 3, name: 'Go to My Applications', text: 'After logging in, navigate to the "My Applications" section to see your scholarship status.' },
        { '@type': 'HowToStep', position: 4, name: 'Check Announcements', text: 'If status is unclear, also check the Announcements tab in your dashboard.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I check my HEC scholarship status?',
          acceptedAnswer: { '@type': 'Answer', text: 'Log into eportal.hec.gov.pk with your CNIC and password, then go to "My Applications" in your dashboard to view your scholarship application status.' },
        },
        {
          '@type': 'Question',
          name: 'Can I check HEC scholarship status without logging in?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. HEC scholarship status is only visible after logging into your HEC applicant account at eportal.hec.gov.pk. There is no public anonymous lookup for security reasons.' },
        },
        {
          '@type': 'Question',
          name: 'What is HEC Need-Based Scholarship?',
          acceptedAnswer: { '@type': 'Answer', text: 'The HEC Need-Based Scholarship (NBS) provides financial support to economically disadvantaged students enrolled in HEC-recognized universities in Pakistan. It covers tuition fees and a monthly stipend. Apply through eportal.hec.gov.pk.' },
        },
        {
          '@type': 'Question',
          name: 'What is the HEC helpline number?',
          acceptedAnswer: { '@type': 'Answer', text: 'HEC main helpline: +92 51 9040 1704. Email: info@hec.gov.pk. For scholarship-specific queries, visit hec.gov.pk/english/scholarshipsgrants.' },
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'HEC Scholarship Status Helper 2026',
      description: 'A guided helper that provides step-by-step instructions to check HEC scholarship application status, since the portal requires authenticated login.',
      url: 'https://pakistaninfohub.com/education/hec-scholarship-status-2026',
      applicationCategory: 'EducationalApplication',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://pakistaninfohub.com' },
    },
  ],
};

export default function HECScholarshipStatusPage() {
  const breadcrumbs = [
    { nameEn: 'Education', nameUr: 'تعلیم' },
    { nameEn: 'HEC Scholarship Status 2026', nameUr: 'ایچ ای سی سکالرشپ سٹیٹس 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="space-y-10 md:space-y-14 animate-fadeIn">
        <Breadcrumbs items={breadcrumbs} />

        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="STATUS GUIDE" labelUr="سٹیٹس گائیڈ" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            HEC Scholarship Status 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              ایچ ای سی سکالرشپ سٹیٹس
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-sans">
            HEC scholarship status is only visible after logging into the official HEC e-portal. This guide
            walks you through each step — and explains which scholarships are currently open, with HEC
            helpline contact info if you need support.
          </p>
        </header>

        <DirectAnswerBox
          topicTitleEn="How to Check HEC Scholarship Status 2026"
          topicTitleUr="HEC سکالرشپ سٹیٹس چیک کرنے کا طریقہ"
          answerEn="To check your HEC scholarship status in 2026: Go to eportal.hec.gov.pk → click Login → enter your CNIC (without dashes) and password → navigate to 'My Applications' in your dashboard. No public anonymous lookup exists. If you see 'No Record Found', also check the Announcements tab. For help, call HEC at +92 51 9040 1704."
          answerUr="HEC سکالرشپ سٹیٹس چیک کرنے کے لیے: eportal.hec.gov.pk پر جائیں → Login کریں → CNIC (بغیر ڈیش) اور پاس ورڈ درج کریں → 'My Applications' میں جائیں۔ عوامی بغیر لاگ ان سٹیٹس چیک موجود نہیں۔ مسئلے پر +92 51 9040 1704 پر رابطہ کریں۔"
        />

        <section aria-label="HEC Scholarship Status Helper Tool">
          <HECScholarshipHelper />
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Why Login Required */}
        <section className="doc-card p-6 rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 space-y-3">
          <h2 className="font-serif font-bold text-lg text-doc-ink dark:text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-amber-600 shrink-0" />
            Why No Public Lookup Exists for HEC Scholarships
          </h2>
          <p className="text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
            Unlike exam results which are public information, scholarship applications contain sensitive
            personal and financial data. HEC requires authenticated access so that only the applicant can
            view their own status — this protects against data harvesting and identity-related fraud.
            This is consistent with international scholarship portal standards.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
            Third-party sites claiming to offer &quot;public HEC status lookup&quot; cannot provide
            real-time data from HEC&apos;s database and should not be trusted with your CNIC.
          </p>
        </section>

        {/* HEC Scholarship Types */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white">
            Major HEC Scholarships in Pakistan 2026
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="w-full text-sm font-sans">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Scholarship</th>
                  <th className="px-4 py-3 text-left">Target</th>
                  <th className="px-4 py-3 text-left">Portal</th>
                  <th className="px-4 py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  { name: 'Need-Based Scholarship (NBS)', target: 'Financial need-based undergraduates', portal: 'eportal.hec.gov.pk', status: 'Open', statusClass: 'text-emerald-600 dark:text-emerald-400' },
                  { name: 'PM Merit Scholarship', target: 'Top academic achievers (undergraduate)', portal: 'eportal.hec.gov.pk', status: 'Open', statusClass: 'text-emerald-600 dark:text-emerald-400' },
                  { name: 'Uraan Pakistan Scholarship', target: 'Students from underprivileged areas', portal: 'eportal.hec.gov.pk', status: 'Open', statusClass: 'text-emerald-600 dark:text-emerald-400' },
                  { name: 'Indigenous PhD Fellowship', target: 'Pakistani nationals for PhD (local)', portal: 'eportal.hec.gov.pk', status: 'Closed/TBA', statusClass: 'text-slate-500' },
                  { name: 'Overseas Scholarship Phase III', target: 'University faculty for PhD abroad', portal: 'eportal.hec.gov.pk', status: 'Closed/TBA', statusClass: 'text-slate-500' },
                ].map((row) => (
                  <tr key={row.name} className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-semibold text-doc-ink dark:text-white text-xs">{row.name}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400 text-xs">{row.target}</td>
                    <td className="px-4 py-3">
                      <a href="https://eportal.hec.gov.pk" target="_blank" rel="noopener noreferrer" className="text-doc-seal hover:underline flex items-center gap-1 font-mono text-xs">
                        {row.portal} <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                    <td className={`px-4 py-3 font-mono font-bold text-xs ${row.statusClass}`}>{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              { q: 'How do I check my HEC scholarship status?', a: 'Log into eportal.hec.gov.pk with your CNIC and password, then navigate to "My Applications" to view your scholarship status.' },
              { q: 'Can I check HEC scholarship status without logging in?', a: 'No. HEC requires authenticated access for security reasons. No public anonymous lookup exists. Be wary of third-party sites claiming otherwise.' },
              { q: 'What is HEC Need-Based Scholarship?', a: 'The HEC NBS provides tuition fee coverage and monthly stipend to financially disadvantaged students at HEC-recognized universities. Applications are submitted through eportal.hec.gov.pk.' },
              { q: 'What is the HEC helpline number?', a: 'HEC main: +92 51 9040 1704. Email: info@hec.gov.pk. Scholarship-specific info: hec.gov.pk/english/scholarshipsgrants.' },
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
            { label: 'HEC E-Portal (Scholarship Applications)', url: 'https://eportal.hec.gov.pk' },
            { label: 'HEC Scholarships & Grants Page', url: 'https://hec.gov.pk/english/scholarshipsgrants' },
            { label: 'HEC Main Website', url: 'https://hec.gov.pk' },
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
