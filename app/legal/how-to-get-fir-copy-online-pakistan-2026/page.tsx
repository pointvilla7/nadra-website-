import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { StepFlowDiagram } from '@/components/StepFlowDiagram';
import {
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  Shield,
  Building,
  FileCheck,
  Send,
  FileText,
  BadgeCheck,
  Scale,
  Users,
  Smartphone,
  Check,
  AlertCircle,
  FileSpreadsheet,
  IdCard,
  Lock,
  Search,
  Printer,
  FileDown
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Get FIR Copy Online in Pakistan 2026: Certified Copy & PKM Guide | Pakistan Info Hub',
  description:
    'Step-by-step Pakistani citizen guide on obtaining a certified, stamped copy of an FIR (First Information Report): Punjab Police PKM centers & mobile app, Islamabad Facilitation Centers, Sindh Police, legal rights under Section 154 CrPC, and required documents.',
  keywords: [
    'how to get fir copy online pakistan 2026',
    'certified copy of fir punjab police pkm',
    'punjab police app copy of fir download',
    'islamabad police facilitation center fir copy',
    'sindh police fir copy cplc',
    'section 154 crpc certified fir copy legal right',
    'police khidmat markaz fir copy fee and requirements',
  ],
  openGraph: {
    title: 'How to Get FIR Copy Online in Pakistan 2026: Certified Copy & PKM Guide',
    description:
      'Official guide to obtaining a stamped, certified FIR copy in Punjab, Islamabad, and Sindh for legal, insurance, or court bail purposes.',
    url: 'https://www.pakistaninfohub.com/legal/how-to-get-fir-copy-online-pakistan-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/legal/how-to-get-fir-copy-online-pakistan-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Police & Legal Services',
          item: 'https://www.pakistaninfohub.com/legal',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'How to Get FIR Copy Online 2026',
          item: 'https://www.pakistaninfohub.com/legal/how-to-get-fir-copy-online-pakistan-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'How to Get a Certified FIR Copy Online in Pakistan (2026 Citizen Guide)',
      description:
        'A comprehensive legal and practical guide to obtaining an official, stamped, and signed certified copy of a First Information Report (FIR) across Punjab, Islamabad, Sindh, and Khyber Pakhtunkhwa.',
      url: 'https://www.pakistaninfohub.com/legal/how-to-get-fir-copy-online-pakistan-2026',
      datePublished: '2026-08-26T00:00:00+05:00',
      dateModified: '2026-08-26T00:00:00+05:00',
      author: {
        '@type': 'Organization',
        name: 'Pakistan Info Hub Editorial Team',
        url: 'https://www.pakistaninfohub.com/editorial-team',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Pakistan Info Hub',
        url: 'https://www.pakistaninfohub.com',
      },
    },
    {
      '@type': 'HowTo',
      name: 'How to Obtain a Certified Copy of an FIR in Pakistan',
      description:
        'Official step-by-step procedure for Pakistani citizens and complainants to obtain a signed and stamped copy of a registered FIR.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Collect Basic Case Identifiers',
          text: 'Note down the FIR Number, Police Station Name (Thana), District, and Year of registration.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Carry Original CNIC & Photocopy',
          text: 'Have the original National Identity Card (CNIC) of the complainant or authorized legal counsel ready.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Apply via Mobile App or Visit Police Khidmat Markaz (PKM)',
          text: 'In Punjab, apply via the Punjab Police Pakistan mobile app or visit any Police Khidmat Markaz (PKM). In Islamabad, visit PKM F-6 / Police Facilitation Center. In Sindh, visit the concerned police station record desk.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Receive Signed & Stamped Certified Copy',
          text: 'The desk officer verifies the record in the Police Station Record Management System (PSRMS) and prints an officially stamped certified copy on the spot.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is there a government fee for getting a certified copy of an FIR?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In Punjab, obtaining a certified copy of an FIR at Police Khidmat Markaz (PKM) or via the Punjab Police app is free of charge. In Islamabad, PKM centers charge a nominal counter processing fee (approximately Rs. 200). Under Section 154 CrPC, the first copy issued to the complainant upon registration at the police station is 100% free by law.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I do not remember my FIR number or exact registration date?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can visit any Police Khidmat Markaz (PKM) or the concerned police station with your original CNIC. The desk officer can search the centralized Police Record Management System (PSRMS) by your CNIC number, complainant name, and approximate time frame to locate the exact FIR record.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can an advocate or family member obtain the FIR copy on my behalf?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. A licensed advocate can obtain a certified copy by presenting a signed Power of Attorney (Wakalatnama) or legal representation memo. Close family members can also apply if they carry the complainant’s original CNIC copy and written authorization letter.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is getting a certified FIR copy different from checking FIR status online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Checking FIR status online (via portals like cms.punjabpolice.gov.pk or 1787 SMS) tells you the current investigation stage, assigned Investigation Officer (IO), or challan status on your screen. Getting a certified copy gives you the official physical paper document, stamped and signed with the police station seal, which is legally required for court bail, insurance theft claims, bank disputes, or visa/passport replacements.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can an accused person or their legal counsel obtain a copy of the FIR?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. An FIR is a public legal document once lodged. The accused or their legal defense counsel has the statutory right under Police Rules 1934 (Rule 24.5) and court procedural rules to inspect and obtain a certified copy for preparing pre-arrest bail (Bail Before Arrest) or defending the charges before the Area Magistrate.',
          },
        },
      ],
    },
  ],
};

export default function HowToGetFirCopyPage() {
  const breadcrumbs = [
    { nameEn: 'Police & Legal Services', nameUr: 'پولیس و قانونی خدمات', url: '/legal' },
    { nameEn: 'How to Get FIR Copy Online 2026', nameUr: 'ایف آئی آر کی مصدقہ کاپی حاصل کرنے کا طریقہ 2026' },
  ];

  const firCopySteps = [
    {
      number: 1,
      icon: <Search className="w-5 h-5" />,
      titleEn: 'Gather Case Identifiers',
      titleUr: 'کیس کی بنیادی تفصیلات معلوم کریں',
      descEn: 'Have your FIR Number, Police Station Name (Thana), District, and Year ready.',
      descUr: 'ایف آئی آر نمبر، تھانہ کا نام، ضلع اور اندراج کا سال معلوم کر کے رکھیں۔',
      tagEn: 'Step 1',
      tagUr: 'مرحلہ 1',
    },
    {
      number: 2,
      icon: <IdCard className="w-5 h-5" />,
      titleEn: 'Prepare Original CNIC',
      titleUr: 'اصل شناختی کارڈ اور فوٹو کاپی',
      descEn: 'Carry the original CNIC of the complainant or an authorization letter for a lawyer/representative.',
      descUr: 'مدعی کا اصل قومی شناختی کارڈ اور دو فوٹو کاپیاں ساتھ رکھیں۔',
      tagEn: 'Verification',
      tagUr: 'شناخت',
    },
    {
      number: 3,
      icon: <Building className="w-5 h-5" />,
      titleEn: 'Apply via PKM or App',
      titleUr: 'پولیس خدمت مرکز یا ایپ پر درخواست',
      descEn: 'Visit any Police Khidmat Markaz or use the Punjab Police Pakistan mobile app (Services > Copy of FIR).',
      descUr: 'کسی بھی قریبی پولیس خدمت مرکز جائیں یا پنجاب پولیس موبائل ایپ کے ذریعے اپلائی کریں۔',
      tagEn: 'Submission',
      tagUr: 'درخواست',
    },
    {
      number: 4,
      icon: <Printer className="w-5 h-5" />,
      titleEn: 'Receive Certified Copy',
      titleUr: 'مہر و دستخط شدہ مصدقہ نقل وصولی',
      descEn: 'The computerized system verifies the record in PSRMS and issues the stamped certified copy in 5–10 minutes.',
      descUr: 'ریکارڈ کی تصدیق کے بعد 5 سے 10 منٹ میں سرکاری مہر کے ساتھ مصدقہ کاپی وصول کریں۔',
      tagEn: 'Certified Document',
      tagUr: 'مصدقہ نقل',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="POLICE RECORD & LEGAL COPIES" labelUr="مصدقہ نقول ایف آئی آر" variant="navy" />
            <VerifiedBadge textEn="SECTION 154 CrPC & POLICE RULES 1934" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            How to Get a Certified Copy of FIR in Pakistan (2026 Guide)
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              ایف آئی آر کی مصدقہ نقل: پنجاب، اسلام آباد اور سندھ میں آن لائن و خدمت مرکز سے کاپی حاصل کرنے کا طریقہ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Need an official, stamped, and signed copy of a First Information Report (FIR) for court proceedings, insurance claims, or lost official documents? Here is the exact provincial procedure to obtain your certified FIR copy through Police Khidmat Markaz (PKM) centers and mobile applications.
          </p>
        </header>

        {/* Crucial Distinguisher Banner */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-blue-950/40 border border-blue-200 dark:border-blue-800 text-xs font-sans space-y-3 shadow-sm">
          <div className="flex items-center gap-2 font-bold text-doc-ink dark:text-blue-300 text-sm">
            <ShieldCheck className="w-5 h-5 text-doc-seal" />
            <span>Important Distinction: Checking Status vs. Getting an Official Copy</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700 dark:text-slate-300 leading-relaxed">
            <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700">
              <strong className="text-doc-ink dark:text-white block mb-1 text-xs">1. Checking FIR Status (Tracking)</strong>
              Use this if you simply want to know which Investigation Officer (IO) is handling the case or whether the police challan (Section 173 CrPC) has been submitted to court.
              <div className="mt-2">
                <Link
                  href="/legal/how-to-check-fir-status-online"
                  className="inline-flex items-center gap-1 font-bold text-doc-seal hover:text-doc-brass transition underline text-xs"
                >
                  <span>Go to FIR Status Checker &amp; Tracker Guide →</span>
                </Link>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700">
              <strong className="text-doc-ink dark:text-white block mb-1 text-xs">2. Getting a Certified Copy (This Page)</strong>
              Use this if you need the <strong>physical, signed, and stamped legal document</strong> with the police station seal. This certified copy is legally mandatory for court bail, insurance theft recovery, replacement of lost passport/CNIC, or bank claims.
            </div>
          </div>
        </div>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="Your Legal Right to a Certified FIR Copy in Pakistan"
          topicTitleUr="پاکستان میں ایف آئی آر کی مصدقہ نقل حاصل کرنے کا قانونی حق"
          answerEn="Under Section 154 of the Code of Criminal Procedure (CrPC), obtaining a certified copy of a registered FIR is your statutory right. In Punjab, request it via the Punjab Police mobile app or visit any Police Khidmat Markaz (PKM) with your CNIC and FIR number for an instant stamped copy. In Islamabad, visit PKM F-6; in Sindh, obtain it directly from the concerned police station record desk."
          answerUr="ضابطہ فوجداری (CrPC) کی دفعہ 154 کے تحت ایف آئی آر درج ہونے کے بعد اس کی مصدقہ نقل حاصل کرنا شہری کا بنیادی قانونی حق ہے۔ پنجاب میں آپ پنجاب پولیس ایپ یا کسی بھی قریبی پولیس خدمت مرکز (PKM) سے فوری مہر شدہ کاپی حاصل کر سکتے ہیں۔ اسلام آباد میں خدمت مرکز F-6 اور سندھ میں متعلقہ تھانے کے ریکارڈ ڈیسک سے کاپی جاری کی جاتی ہے۔"
        />

        {/* Legal Context & Computerization */}
        <section className="p-6 rounded-2xl bg-amber-50/70 dark:bg-slate-900/80 border border-amber-200/80 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-doc-seal dark:text-amber-400 font-serif font-bold text-lg">
            <Scale className="w-5 h-5 shrink-0" />
            <h2>The Legal Mandate &amp; Elimination of Fake FIRs (PSRMS System)</h2>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Under <strong>Section 154 CrPC</strong> and <strong>Rule 24.5 of the Police Rules 1934</strong>, a copy of the First Information Report must be provided forthwith, free of cost, to the informant/complainant. No police official or Station House Officer (SHO) has the legal discretion to deny a copy once a case is entered into the official register.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            In the past, manual paper registers (Register No. 1 and Daily Diary / Roznamcha) were vulnerable to backdating, missing pages, and unauthorized tampering. Today, the <strong>Police Station Record Management System (PSRMS)</strong>—engineered by the Punjab Information Technology Board (PITB) and integrated with NADRA—digitizes every FIR with a unique system timestamp and barcode across all 700+ Punjab police stations and Sindh police divisions. This reform has drastically minimized fake FIR registrations and ensured that citizens can retrieve their computerized records from any authorized facilitation center in the province.
          </p>
        </section>

        {/* Section 1: Provincial Step-by-Step Breakdown */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Building className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step Guide by Province (Punjab, Islamabad &amp; Sindh)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            {/* Punjab */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 font-mono font-bold text-[11px]">
                  PUNJAB (LAHORE, RAWALPINDI, MULTAN, FAISALABAD)
                </span>
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">100% Free</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Police Khidmat Markaz (PKM) &amp; Mobile App
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Punjab Police has completely decentralized FIR copy issuance. You do not need to visit a traditional police station:
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li>
                  <strong>Method 1 — Police Khidmat Markaz (In-Person):</strong> Visit any of the 130+ PKM centers across Punjab. Bring your original CNIC and mention the FIR Number and Thana. The desk officer pulls the record from PSRMS, prints the computerized copy, and stamps it with the official PKM seal within <strong>5 to 10 minutes</strong>.
                </li>
                <li>
                  <strong>Method 2 — &quot;Punjab Police Pakistan&quot; Mobile App:</strong> Download the official app from Google Play / Apple App Store, log in, navigate to <em>Services &gt; Copy of FIR</em>, enter your CNIC and FIR details, and submit your request. You will receive notifications and instructions for digital pickup.
                </li>
                <li>
                  <strong>Important Note on CMS Portal:</strong> The website <code>cms.punjabpolice.gov.pk</code> is designed strictly for lodging and tracking complaint status; it does not host public downloadable FIR copies due to privacy regulations.
                </li>
                <li>
                  <strong>Overseas Pakistanis:</strong> Citizens living abroad can request verified copies through the <strong>PKM Global Portal</strong> (<code>pkm.punjab.gov.pk/public/app/embassies</code>) via designated Pakistani embassies.
                </li>
              </ul>
            </div>

            {/* Islamabad */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 font-mono font-bold text-[11px]">
                  ISLAMABAD CAPITAL TERRITORY (ICT)
                </span>
                <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">~Rs. 200 Fee at PKM</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Public Facilitation Centers (PFC) &amp; PKM Centers
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Islamabad Police provides computerized public services across modern facilitation centers:
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li>
                  <strong>Primary Location — PKM F-6 (24/7 Service):</strong> The central Police Khidmat Markaz at F-6 Islamabad operates round-the-clock counters for issuing certified copies of FIRs and lost document reports.
                </li>
                <li>
                  <strong>Additional Centers:</strong> You can also visit PKM branches in G-8/1, H-11, Gulberg Greens, or the concerned police station.
                </li>
                <li>
                  <strong>Requirements &amp; Fee:</strong> Present original CNIC and FIR details. A nominal counter processing fee (approx. Rs. 200) is paid at the token counter.
                </li>
                <li>
                  <strong>Overseas Affidavits &amp; Police Character:</strong> ICT Police also provides specific downloadable affidavit templates for overseas character verifications (learn more in our{' '}
                  <Link
                    href="/certificates/police-character-certificate-online-apply-2026"
                    className="text-doc-seal dark:text-blue-400 font-bold underline"
                  >
                    Police Character Certificate Guide
                  </Link>
                  ).
                </li>
              </ul>
            </div>

            {/* Sindh */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-mono font-bold text-[11px]">
                  SINDH (KARACHI, HYDERABAD, SUKKUR)
                </span>
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">Police Station / CPLC</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Concerned Police Station &amp; CPLC Assistance
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Sindh Police operates computerized PSRMS in coordination with CPLC (Citizens Police Liaison Committee):
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li>
                  <strong>Concerned Police Station Desk:</strong> In Sindh, the official certified and stamped copy is primarily obtained from the Record Moharrir / SHO of the police station where the FIR was registered.
                </li>
                <li>
                  <strong>CPLC Verification Desk (Helpline 1102):</strong> The Citizens Police Liaison Committee (<code>cplc.org.pk</code>) maintains a synchronized crime and FIR database at the Governor House Secretariat, assisting citizens in verifying FIR records for stolen vehicles, mobile phones, or extortion cases.
                </li>
                <li>
                  <strong>Sindh Police Services Portal:</strong> The mobile app allows case status tracking and complaint monitoring across Karachi and interior Sindh.
                </li>
              </ul>
            </div>

            {/* KPK & Balochistan */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 font-mono font-bold text-[11px]">
                  KHYBER PAKHTUNKHWA &amp; BALOCHISTAN
                </span>
                <span className="text-[11px] font-bold text-purple-700 dark:text-purple-300">PAL Desks</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Police Assistance Lines (PAL) &amp; Record Branches
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                In KP (Peshawar, Mardan, Abbottabad) and Balochistan (Quetta):
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li>
                  <strong>KP Police Assistance Lines (PAL):</strong> Citizens can visit the computerized PAL center in their district with their CNIC to obtain an instant computerized copy.
                </li>
                <li>
                  <strong>Balochistan Police:</strong> Obtain certified copies directly through the record clerk (Moharrir) at the respective district police station or Central Police Office (CPO) facilitation counter.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Flow Diagram */}
        <StepFlowDiagram
          titleEn="Step-by-Step Flow to Obtain a Certified FIR Copy"
          titleUr="ایف آئی آر کی مصدقہ نقل حاصل کرنے کا طریقہ کار"
          subtitleEn="4 straightforward steps from identifying your case to receiving the signed legal document"
          subtitleUr="کیس کی معلومات سے لے کر مہر شدہ کاپی وصول کرنے کے 4 مراحل"
          steps={firCopySteps}
        />

        {/* Section 3: Required Information & Documents */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileSpreadsheet className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Information &amp; Documents Checklist
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Before visiting a Police Khidmat Markaz or submitting your request through the mobile application, make sure you have the following information and documents ready:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">1. FIR Number</span>
                <p className="text-slate-600 dark:text-slate-300">
                  The specific registration number (e.g., FIR No. 245/2026) issued at the time of lodging.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">2. Police Station Name</span>
                <p className="text-slate-600 dark:text-slate-300">
                  The exact Thana and District where the incident occurred and was registered.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">3. Year &amp; Date of Incident</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Approximate date or year of registration to help the database officer filter search records.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">4. Original CNIC &amp; Photocopy</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Valid CNIC of the complainant or applicant seeking the certified copy.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">5. Purpose of Copy</span>
                <p className="text-slate-600 dark:text-slate-300">
                  State the purpose (e.g., Court bail application, vehicle insurance claim, lost passport replacement).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">6. Authorization (If Represented)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Signed Power of Attorney (Wakalatnama) if an advocate is applying on your behalf.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 4: Why You Need a Certified Copy (Legal Scenarios) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Common Legal &amp; Administrative Uses of a Certified FIR Copy
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-sans">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-ink dark:text-white text-sm block">1. Court Bail &amp; Defense</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Required by trial courts, Sessions Courts, and High Courts for granting Pre-Arrest Bail (Bail Before Arrest) or Post-Arrest Bail.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-ink dark:text-white text-sm block">2. Insurance Theft Claims</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Mandatory for motor insurance companies, bank loan settlements, and asset loss claims for stolen cars, motorcycles, or commercial property.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-ink dark:text-white text-sm block">3. Passport &amp; CNIC Loss</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Required by the Directorate General of Immigration &amp; Passports (DGI&amp;P) and NADRA when applying for duplicate documents after robbery or theft.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-ink dark:text-white text-sm block">4. Banking &amp; Cyber Crime</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Used to dispute unauthorized financial transactions, SIM cloning, or freeze fraudulent bank accounts with State Bank of Pakistan compliance teams.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Frequently Asked Questions */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Citizen Legal Clarifications)
            </h2>
          </div>

          <div className="space-y-3 font-sans text-xs">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Is there any fee to obtain a certified copy of an FIR?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Under Section 154 CrPC, the first copy provided to the complainant at the time of lodging is 100% free by law. In Punjab, Police Khidmat Markaz (PKM) centers issue computerized certified copies free of charge. In Islamabad, PKM counters charge a nominal processing fee of around Rs. 200.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                What if I forgot my FIR number or year of registration?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                You do not need to worry. Visit any Police Khidmat Markaz with your original CNIC. The desk officer can search the centralized PSRMS database by your CNIC number, complainant name, and Thana jurisdiction to trace the exact FIR record on screen.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Can a lawyer or legal representative request the FIR copy for me?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Yes. A practicing advocate can apply on your behalf by presenting a signed Power of Attorney (Wakalatnama) along with their Bar Council card. Immediate family members can also apply if they bring the complainant’s original CNIC copy and a signed authorization letter.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                How is getting a certified copy different from checking FIR status online?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Checking status online (such as via 1787 SMS or CMS portals) provides an on-screen update regarding the investigation phase, IO assignment, and challan status. A certified copy is the formal, ink-stamped and signed evidentiary paper document required by courts, insurance underwriters, and official embassies.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Can the accused person or their family get a copy of the FIR?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Yes. Under Pakistani criminal jurisprudence and Rule 24.5 of the Police Rules 1934, once an FIR is officially registered, it becomes a public record in legal proceedings. The accused or their legal defense counsel is legally entitled to obtain a copy to prepare their defense and file for Pre-Arrest Bail before the competent Magistrate or Sessions Judge.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Related Legal & Police Guides */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Police &amp; Legal Verification Utilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/legal/how-to-check-fir-status-online"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Companion Guide</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                How to Check FIR Status Online
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Track police investigation stage, IO details, and 1787 SMS portal updates.
              </p>
            </Link>

            <Link
              href="/legal/punjab-khidmat-markaz-police-services"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-seal font-bold uppercase block">PKM Directory</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Police Khidmat Markaz (14 Services)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Complete directory of citizen services available at PKM counters across Punjab.
              </p>
            </Link>

            <Link
              href="/certificates/police-character-certificate-online-apply-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-emerald-600 font-bold uppercase block">Background Clearance</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Police Character Certificate (PCC)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                How to apply for background clearance for overseas immigration, visas, and jobs.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
