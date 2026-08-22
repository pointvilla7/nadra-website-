import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  Building2,
  FileCheck,
  Search,
  Clock,
  MapPin,
  Stamp,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Police Character Certificate Tracking Status Online 2026 Pakistan – PKM, PRVS & ICT | Pakistan Info Hub',
  description:
    'Track your Pakistan Police Character Certificate (PCC) application status online. Enter your PKM token ID, PRVS case number, or ICT application code to verify local police verification, approval, and collection readiness.',
  keywords: [
    'Police character certificate tracking status Pakistan 2026',
    'Punjab police khidmat markaz tracking status',
    'PKM token status check online',
    'Sindh police PRVS character certificate track',
    'Islamabad police character certificate status',
    'pkm punjab gov pk tracking',
    'police clearance certificate tracking Pakistan',
  ],
  openGraph: {
    title: 'Police Character Certificate Tracking Status Online 2026 Pakistan',
    description:
      'Check real-time criminal record clearance and delivery status for Police Character Certificates across Punjab, Sindh, Islamabad, and KPK.',
    url: 'https://www.pakistaninfohub.com/certificates/police-character-certificate-tracking-status-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/certificates/police-character-certificate-tracking-status-2026' },
};

const PoliceCharacterCertificateTrackingWidget = dynamic(
  () =>
    import('@/components/PoliceCharacterCertificateTrackingWidget').then((m) => ({
      default: m.PoliceCharacterCertificateTrackingWidget,
    })),
  {
    ssr: false,
    loading: () => <div className="h-[480px] rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" />,
  }
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Birth, Death & Domicile', item: 'https://www.pakistaninfohub.com/certificates' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Police Character Certificate Tracking 2026',
          item: 'https://www.pakistaninfohub.com/certificates/police-character-certificate-tracking-status-2026',
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Pakistan Police Character Certificate Tracking Helper 2026',
      description:
        'A dedicated tracking assistance tool to verify application status, explain verification stages, copy reference numbers, and navigate official provincial police verification portals.',
      url: 'https://www.pakistaninfohub.com/certificates/police-character-certificate-tracking-status-2026',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
    },
    {
      '@type': 'HowTo',
      name: 'How to Track Police Character Certificate Status in Pakistan (2026)',
      description:
        'Step-by-step instructions to locate your application token, check background verification progress online, and collect your certificate.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Locate Your Application / Token ID',
          text: 'Find the tracking reference number printed at the top of your PKM submission receipt or received via SMS confirmation.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Select Issuing Province',
          text: 'Select your province (Punjab PKM, Sindh PRVS, Islamabad ICT, KPK PAL, Balochistan, AJK) to access the correct provincial verification portal.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Enter Details on Official Portal',
          text: 'Navigate to the official portal (e.g. pkm.punjab.gov.pk or prvs.sindhpolice.gov.pk) and enter your CNIC and tracking token.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Collect Certificate When Ready',
          text: 'When your status updates to "Ready for Collection", visit your local facilitation center with your original CNIC and delivery slip to collect your certificate.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long after applying can I track my Police Character Certificate online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your tracking record typically becomes active in the provincial online database within 24 to 48 hours after biometric submission at a Police Khidmat Markaz (PKM) or online portal. If you submitted over the weekend or on a public holiday, tracking updates will appear on the next working day.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if the tracking portal shows "No Record Found"?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If your search returns "No Record Found", double-check that you entered your CNIC without dashes and typed the exact Application ID printed on your receipt slip. If fewer than 48 hours have passed since submission, wait another day for system synchronization. If the issue persists, visit your local PKM counter or call the provincial helpline (1787 for Punjab, 1915 for Islamabad).',
          },
        },
        {
          '@type': 'Question',
          name: 'Who should I contact if my verification is delayed beyond the normal timeline?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If your certificate has been pending for more than 7 to 10 working days, contact your provincial police helpline: Punjab Police IG Complaint Cell (1787), Islamabad Police Khidmat Helpline (1915), Sindh CPLC (021-99212626), or KPK Police Facilitation (1415), citing your application reference number.',
          },
        },
        {
          '@type': 'Question',
          name: 'What documents are required to collect the physical certificate from the counter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To collect your printed Police Character Certificate from the Police Khidmat Markaz, you must present your original valid CNIC/NICOP and the original paper delivery token/receipt slip issued at the time of application submission.',
          },
        },
      ],
    },
  ],
};

export default function PoliceCharacterCertificateTrackingStatusPage() {
  const breadcrumbs = [
    { nameEn: 'Birth, Death & Domicile', nameUr: 'پیدائش، وفات اور ڈومیسائل' },
    { nameEn: 'Police Certificate Tracking 2026', nameUr: 'کریکٹر سرٹیفکیٹ ٹریکنگ 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="STATUS TRACKER" labelUr="سٹیٹس ٹریکر" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Police Character Certificate Tracking Status 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پولیس کریکٹر سرٹیفکیٹ درخواست ٹریکنگ، تصدیقی مراحل اور وصولی گائیڈ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Already applied for a Police Clearance Certificate? Check your application status across <strong>Punjab Police
            Khidmat Markaz (PKM)</strong>, <strong>Sindh PRVS</strong>, <strong>Islamabad ICT</strong>, and <strong>KPK PAL</strong>.
            Understand verification stages, copy your token number, and access official tracking portals.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Track Police Character Certificate Status in Pakistan (2026)"
          topicTitleUr="پاکستان میں پولیس کریکٹر سرٹیفکیٹ ٹریک کرنے کا طریقہ"
          answerEn="To track your Police Character Certificate: (1) Locate the Application ID or Token Number on your PKM receipt or confirmation SMS, (2) Open your province's official tracking portal (e.g. pkm.punjab.gov.pk or prvs.sindhpolice.gov.pk), (3) Enter your CNIC and tracking number to verify if your status is Under Verification, Approved, or Ready for Collection."
          answerUr="پولیس کریکٹر سرٹیفکیٹ ٹریک کرنے کے لیے: (1) اپنی رسید یا موصول ہونے والے ایس ایم ایس سے ایپلیکیشن ٹوکن نمبر تلاش کریں، (2) اپنے متعلقہ صوبے کا آفیشل پورٹل (جیسے pkm.punjab.gov.pk یا prvs.sindhpolice.gov.pk) کھولیں، اور (3) شناختی کارڈ و ٹوکن نمبر درج کر کے اپنا تازہ ترین سٹیٹس معلوم کریں۔"
        />

        {/* Interactive Tracking Widget */}
        <section aria-label="Police Character Certificate Tracking Status Helper">
          <PoliceCharacterCertificateTrackingWidget />
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 1: Where to Find Your Tracking Number & Understanding Stages */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white flex items-center gap-2">
            <Search className="w-6 h-6 text-doc-brass" />
            Where to Find Your Application Tracking Number
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base space-y-4">
            <p>
              When you submit your application at a Police Khidmat Markaz counter or through a provincial online portal,
              a unique tracking code is generated. You can find this reference in three primary locations:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 text-doc-seal dark:text-red-400 font-mono text-xs font-bold uppercase">
                <FileCheck className="w-4 h-4" />
                <span>1. Paper Delivery Slip</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Printed Receipt Header
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Printed near the top barcode on your physical receipt slip issued at the PKM or Police Facilitation counter
                (labeled as <em>Tracking ID</em>, <em>Token No</em>, or <em>Case ID</em>).
              </p>
            </div>

            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold uppercase">
                <PhoneCall className="w-4 h-4" />
                <span>2. Confirmation SMS</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Official SMS Sender ID
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Sent automatically to your registered Pakistani mobile number from official sender IDs such as{' '}
                <strong>8333</strong>, <strong>PUNJAB-POLICE</strong>, <strong>ICT-POLICE</strong>, or <strong>PRVS-SINDH</strong>.
              </p>
            </div>

            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold uppercase">
                <Building2 className="w-4 h-4" />
                <span>3. Online Portal Dashboard</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Applicant Account Log
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Visible under <em>&quot;My Applications&quot;</em> when logged into your registered profile on{' '}
                <code className="font-mono text-xs text-doc-brass">pkm.punjab.gov.pk</code> or{' '}
                <code className="font-mono text-xs text-doc-brass">prvs.sindhpolice.gov.pk</code>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: What Each Status Label Means */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white">
            Detailed Explanation of Police Verification Status Labels
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Understand what each status message indicates during the 3 to 10-day background check cycle:
          </p>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Status Label</th>
                  <th className="px-4 py-3 text-left text-emerald-300">Stage Meaning</th>
                  <th className="px-4 py-3 text-left">Expected Duration</th>
                  <th className="px-4 py-3 text-left">Required Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  {
                    status: 'Application Submitted / Received',
                    meaning: 'Application registered in system; queued for local Thana assignment.',
                    duration: 'Day 1 – 2',
                    action: 'No action needed; record is syncing.',
                  },
                  {
                    status: 'Under Police Verification / In-Process',
                    meaning: 'Local police station and Criminal Record Office (CRO) checking FIR records.',
                    duration: 'Day 2 – 5',
                    action: 'Police officer may call or visit address for verification.',
                  },
                  {
                    status: 'Approved & Signed by SSP / DPO',
                    meaning: 'Clean criminal record certified; official digital authorization granted.',
                    duration: 'Day 4 – 6',
                    action: 'Security certificate is being queued for printing.',
                  },
                  {
                    status: 'Ready for Collection / Dispatched',
                    meaning: 'QR-coded certificate printed with embossed seal and available at counter.',
                    duration: 'Day 5 – 7',
                    action: 'Visit PKM center with original CNIC and receipt slip.',
                  },
                  {
                    status: 'Objection / Adverse Record Found',
                    meaning: 'Unresolved FIR or identity mismatch identified during record check.',
                    duration: 'Immediate',
                    action: 'Visit issuing DPO / SSP office with court clearance documents.',
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition"
                  >
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">{row.status}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300 text-xs">{row.meaning}</td>
                    <td className="px-4 py-3 font-mono text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                      {row.duration}
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400 text-xs">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </section>

        {/* Section 3: Next Steps After Collection (MOFA & Embassy) */}
        <section className="doc-card p-6 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-slate-900/60 space-y-4">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white flex items-center gap-2">
            <Stamp className="w-5 h-5 text-doc-brass" />
            Next Step: Ministry of Foreign Affairs (MOFA) Attestation
          </h2>
          <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
            <p>
              Once you collect your physical Police Character Certificate, remember that foreign embassies and immigration
              authorities (such as Canada, UK, Australia, UAE, Saudi Arabia) require an official <strong>Ministry of Foreign
              Affairs (MOFA) Apostille or consular attestation stamp</strong> before accepting the document.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
              <div>
                <span className="font-bold text-doc-ink dark:text-white text-xs block">Official MOFA Apostille Portal:</span>
                <span className="font-mono text-xs text-doc-seal">https://apostille.mofa.gov.pk/</span>
              </div>
              <a
                href="https://apostille.mofa.gov.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-doc-ink hover:bg-slate-800 text-white font-mono font-bold text-xs flex items-center gap-1.5 transition min-h-[44px]"
              >
                <span>OPEN MOFA PORTAL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Section 4: Related Civic & Certificate Guides */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Police &amp; Certificate Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/certificates/police-character-certificate-online-apply-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">New Application</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Police Certificate Online Apply Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Province-by-province application rules, documents, and fees.</p>
            </Link>

            <Link
              href="/passport/tracking-status"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Passport Status</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Passport Application Tracking Online →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Track Machine Readable and e-Passport delivery via token.</p>
            </Link>

            <Link
              href="/nadra/b-form-frc-status-check"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">NADRA Tracking</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NADRA B-Form &amp; FRC Status Check →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check Family Registration Certificate status via SMS 8400.</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            Frequently Asked Questions (PCC Status Tracking)
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'How long after applying can I track my Police Character Certificate online?',
                a: 'Your tracking record typically becomes active in the provincial online database within 24 to 48 hours after biometric submission at a Police Khidmat Markaz (PKM) or online portal. If you submitted over the weekend or on a public holiday, tracking updates will appear on the next working day.',
              },
              {
                q: 'What should I do if the tracking portal shows "No Record Found"?',
                a: 'If your search returns "No Record Found", double-check that you entered your CNIC without dashes and typed the exact Application ID printed on your receipt slip. If fewer than 48 hours have passed since submission, wait another day for system synchronization. If the issue persists, visit your local PKM counter or call the provincial helpline (1787 for Punjab, 1915 for Islamabad).',
              },
              {
                q: 'Who should I contact if my verification is delayed beyond the normal timeline?',
                a: 'If your certificate has been pending for more than 7 to 10 working days, contact your provincial police helpline: Punjab Police IG Complaint Cell (1787), Islamabad Police Khidmat Helpline (1915), Sindh CPLC (021-99212626), or KPK Police Facilitation (1415), citing your application reference number.',
              },
              {
                q: 'What documents are required to collect the physical certificate from the counter?',
                a: 'To collect your printed Police Character Certificate from the Police Khidmat Markaz, you must present your original valid CNIC/NICOP and the original paper delivery token/receipt slip issued at the time of application submission.',
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
            { label: 'Punjab Police Khidmat Markaz Portal', url: 'https://pkm.punjab.gov.pk/public' },
            { label: 'Sindh Police Record Verification System (PRVS)', url: 'https://prvs.sindhpolice.gov.pk/' },
            { label: 'Islamabad Capital Territory Police Portal', url: 'https://islamabadpolice.gov.pk/' },
            { label: 'KPK Police Clearance System', url: 'https://clearance.kppolice.gov.pk/' },
            { label: 'Ministry of Foreign Affairs (MOFA) Apostille Portal', url: 'https://apostille.mofa.gov.pk/' },
          ].map((src) => (
            <a
              key={src.url}
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-doc-seal"
            >
              <ExternalLink className="w-3 h-3" />
              {src.label}: <span className="font-mono">{src.url}</span>
            </a>
          ))}
        </section>
      </div>
    </>
  );
}
