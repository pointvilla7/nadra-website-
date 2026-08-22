import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ExternalLink, HelpCircle, Phone, AlertTriangle, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'WAPDA Complaint Status Tracker 2026 – Check Electricity Complaints Online | Pakistan Info Hub',
  description:
    'Track electricity complaints online using PITC CCMS portal, 118 nationwide helpline, and 8118 SMS. Covers LESCO, IESCO, FESCO, GEPCO, MEPCO, PESCO, HESCO, SEPCO, QESCO, and K-Electric.',
  keywords: [
    'WAPDA complaint status 2026',
    'PITC CCMS complaint tracking',
    'LESCO electricity complaint',
    '118 electricity helpline Pakistan',
    '8118 SMS complaint',
    'electricity breakdown complaint',
    'DISCO complaint portal',
  ],
  openGraph: {
    title: 'WAPDA Complaint Status Tracker 2026 – All Pakistan Electricity Companies',
    description:
      'Track your electricity complaint online via PITC CCMS, 118 call center, and 8118 SMS across all DISCOs.',
    url: 'https://www.pakistaninfohub.com/bills/wapda-complaint-status-tracker-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/bills/wapda-complaint-status-tracker-2026' },
};

const WAPDAComplaintTracker = dynamic(
  () => import('@/components/WAPDAComplaintTracker').then((m) => ({ default: m.WAPDAComplaintTracker })),
  { ssr: false, loading: () => <div className="h-[480px] rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" /> }
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Utility Bills', item: 'https://www.pakistaninfohub.com/bills' },
        { '@type': 'ListItem', position: 3, name: 'WAPDA Complaint Status Tracker 2026', item: 'https://www.pakistaninfohub.com/bills/wapda-complaint-status-tracker-2026' },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'WAPDA Complaint Status Tracker 2026',
      description:
        'A comprehensive guide and tool to track electricity complaint status across Pakistan via PITC CCMS, 118 helpline, and 8118 SMS.',
      url: 'https://www.pakistaninfohub.com/bills/wapda-complaint-status-tracker-2026',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
    },
    {
      '@type': 'HowTo',
      name: 'How to Track Electricity Complaint Status in Pakistan 2026',
      description: 'Step-by-step instructions to register and track electricity breakdown or billing complaints.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Online via PITC CCMS', text: 'Visit ccms.pitc.com.pk and enter your 14-digit Reference Number or Complaint Ticket Number to view live resolution status.' },
        { '@type': 'HowToStep', position: 2, name: 'Call 118 Toll-Free', text: 'Dial 118 from any mobile network or landline (available 24/7 nationwide) to speak with a representative.' },
        { '@type': 'HowToStep', position: 3, name: 'Send SMS to 8118', text: 'Type "pitc <14-digit reference number>" and send to 8118 to lodge or check complaint status via SMS.' },
        { '@type': 'HowToStep', position: 4, name: 'Use DISCO App', text: 'Download LESCO Light or KE Live mobile app to track live line repairs and load-shedding schedules.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I track my electricity complaint online in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Go to the official PITC CCMS portal at ccms.pitc.com.pk. Select "Track by Reference" or "Track by Ticket", enter your 14-digit consumer reference number or ticket number, and click Submit to see the real-time resolution status.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the nationwide electricity complaint helpline number?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The universal toll-free helpline number for all electricity companies (LESCO, IESCO, FESCO, GEPCO, MEPCO, PESCO, HESCO, SEPCO, QESCO, and K-Electric) is 118. It is operational 24 hours a day, 7 days a week.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I send an electricity complaint via SMS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Type "pitc <14-digit reference number>" and send it to 8118 (for WAPDA DISCOs) or 8119 (for K-Electric in Karachi). You will receive an SMS confirmation with a tracking ticket number.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who should I contact for transformer breakdown or fire emergency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For emergency transformer faults, sparking wires, or electrical hazards, immediately dial 118 or call Rescue 1122. Keep bystanders away from downed power lines.',
          },
        },
      ],
    },
  ],
};

export default function WAPDAComplaintTrackerPage() {
  const breadcrumbs = [
    { nameEn: 'Utility Bills', nameUr: 'یوٹیلیٹی بلز' },
    { nameEn: 'WAPDA Complaint Status Tracker 2026', nameUr: 'واپڈا بجلی شکایات ٹریکر 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn">
        <Breadcrumbs items={breadcrumbs} />

        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="COMPLAINT HELPER" labelUr="شکایات گائیڈ" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            WAPDA & DISCO Complaint Status Tracker 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              واپڈا بجلی شکایات اور ہیلپ لائن ڈائریکٹری
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-sans">
            Track electricity breakdown and billing complaints online across Pakistan via the PITC CCMS portal,
            universal 118 call center, and 8118 SMS service.
          </p>
        </header>

        <DirectAnswerBox
          topicTitleEn="How to Track Electricity Complaints in Pakistan"
          topicTitleUr="پاکستان میں بجلی کی شکایت ٹریک کرنے کا طریقہ"
          answerEn="To track an electricity complaint in 2026: (1) Go to ccms.pitc.com.pk and enter your 14-digit reference number or complaint ticket ID, (2) Call 118 (toll-free 24/7 helpline for all DISCOs), or (3) Send an SMS containing 'pitc <reference-no>' to 8118 for instant ticket updates."
          answerUr="بجلی کی شکایت ٹریک کرنے کا طریقہ: (1) ccms.pitc.com.pk پر اپنا 14 ہندسوں کا ریفرنس نمبر یا ٹکٹ نمبر درج کریں، (2) 24 گھنٹے مفت ہیلپ لائن 118 ملائیں، یا (3) 'pitc <ریفرنس نمبر>' لکھ کر 8118 پر SMS بھیجیں۔"
        />

        <section aria-label="WAPDA Complaint Tracker Tool">
          <WAPDAComplaintTracker />
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Breakdown of Resolution Times */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white">
            Standard Complaint Resolution Timelines (NEPRA Standards)
          </h2>
          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Complaint Category</th>
                  <th className="px-4 py-3 text-left">Standard Resolution Time</th>
                  <th className="px-4 py-3 text-left">Escalation Authority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  { cat: 'Individual Fuse / Line Fault', time: '3 to 6 Hours', esc: 'Sub-Divisional Officer (SDO)' },
                  { cat: 'Transformer Breakdown / Damage', time: '24 to 48 Hours', esc: 'Executive Engineer (XEN)' },
                  { cat: 'Billing Discrepancy / Overbilling', time: '7 Working Days', esc: 'Revenue Officer (RO) / NEPRA' },
                  { cat: 'New Meter Installation', time: '30 to 45 Days', esc: 'Superintending Engineer (SE)' },
                  { cat: 'Hazardous / Sparking Line Emergency', time: 'Immediate (1 to 2 Hours)', esc: 'DISCO Emergency Squad / 118' },
                ].map((row) => (
                  <tr key={row.cat} className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">{row.cat}</td>
                    <td className="px-4 py-3 font-mono font-semibold text-emerald-600 dark:text-emerald-400 text-xs">{row.time}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400 text-xs">{row.esc}</td>
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
                q: 'How do I check my electricity complaint status online?',
                a: 'Visit ccms.pitc.com.pk and enter your 14-digit reference number or complaint ticket ID to view current progress, assigned technician, and resolution status.',
              },
              {
                q: 'What is the nationwide toll-free electricity complaint number?',
                a: 'The universal helpline for all power distribution companies in Pakistan is 118. It operates 24/7 across all mobile networks and landlines.',
              },
              {
                q: 'How can I escalate an unresolved electricity complaint?',
                a: 'If your DISCO fails to resolve your complaint within NEPRA specified timelines, you can lodge an escalation with the NEPRA Consumer Affairs Division via nepra.org.pk or the Prime Minister Citizen Portal (PMDU app).',
              },
              {
                q: 'Is there an SMS service to lodge electricity complaints?',
                a: 'Yes. Type "pitc <14-digit reference number>" and send it to 8118 (for WAPDA DISCOs) or 8119 (for K-Electric in Karachi).',
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
            { label: 'PITC Centralized Complaint Management System (CCMS)', url: 'https://ccms.pitc.com.pk' },
            { label: 'National Electric Power Regulatory Authority (NEPRA)', url: 'https://nepra.org.pk' },
            { label: 'Ministry of Energy (Power Division)', url: 'https://mowp.gov.pk' },
            { label: 'WAPDA Official Portal', url: 'http://www.wapda.gov.pk' },
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
