import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram } from '@/components/visuals';
import {
  GraduationCap,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  ShieldCheck,
  ShieldAlert,
  HelpCircle,
  School,
  Calendar,
  FileText,
  Smartphone,
  Users,
  Building,
  ArrowRight,
  Info,
  Clock,
  Coins,
  AlertCircle,
  BookOpen,
  Check,
  XCircle,
  HelpCircle as QuestionIcon,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Benazir Taleemi Wazaif 2026: Check Online, Eligibility & Registration Guide',
  description:
    'Complete official guide to Benazir Taleemi Wazaif 2026: Online status check via 8171, in-person registration steps at BISP Tehsil Offices, quarterly stipend amounts (Rs. 2,500 to Rs. 5,000), 70% attendance rules, and scam warnings.',
  keywords: [
    'benazir taleemi wazaif',
    'benazir taleemi wazaif check online',
    'benazir taleemi wazaif registration',
    'bisp taleemi wazaif stipend amount 2026',
    '8171 taleemi wazaif check cnic',
    'benazir taleemi wazaif school verification slip',
    'benazir taleemi wazaif 70 attendance rule',
    'bisp student scholarship quarterly payment',
  ],
  openGraph: {
    title: 'Benazir Taleemi Wazaif 2026: Check Online, Eligibility & Registration Guide',
    description:
      'Authoritative guide to Benazir Taleemi Wazaif: 8171 online status check, mandatory in-person Tehsil office registration, updated quarterly stipend rates, and school attendance requirements.',
    url: 'https://www.pakistaninfohub.com/welfare/benazir-taleemi-wazaif-check-online-registration-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/welfare/benazir-taleemi-wazaif-check-online-registration-2026',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Social Welfare & Relief', item: 'https://www.pakistaninfohub.com/welfare' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Benazir Taleemi Wazaif Guide',
          item: 'https://www.pakistaninfohub.com/welfare/benazir-taleemi-wazaif-check-online-registration-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Benazir Taleemi Wazaif 2026: Check Online, Eligibility & Tehsil Office Registration',
      description:
        'A comprehensive public guide clarifying Benazir Taleemi Wazaif enrollment procedures, 8171 online status checks, quarterly cash stipend amounts, and mandatory school compliance conditions under BISP.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-04',
      dateModified: '2026-09-04',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/welfare/benazir-taleemi-wazaif-check-online-registration-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Register Children for Benazir Taleemi Wazaif',
      description: 'The verified step-by-step procedure to enroll school-going children in the BISP education stipend program.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: "Verify Mother's Kafaalat Status",
          text: 'Confirm that the child’s mother is an active, approved Benazir Kafaalat beneficiary via the 8171 portal or SMS.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Obtain & Complete School Verification Slip',
          text: 'Get an official admission verification slip stamped and signed by the headmaster or principal of the child’s school.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Visit Nearest BISP Tehsil Office',
          text: 'Bring the mother’s original CNIC, the child’s NADRA B-Form, and the stamped school slip to the local BISP Tehsil Office.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Biometric & NADRA CRC Verification',
          text: 'BISP enrollment staff cross-match the child’s B-Form with NADRA records and register the school EMIS code.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Maintain 70% School Attendance',
          text: 'Ensure the child maintains at least 70% quarterly school attendance to receive regular quarterly disbursements.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I register my child online, or do I have to visit a BISP office?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You cannot register your child online. While eligibility and payment status can be verified online through the 8171 web portal, the initial registration strictly requires an in-person visit to your nearest BISP Tehsil Office with the child’s NADRA B-Form and an institution-attested school admission slip.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my child eligible if I’m not already a Kafaalat beneficiary?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Benazir Taleemi Wazaif is a conditional cash transfer built directly on top of the Benazir Kafaalat program. A child is eligible only if their mother is an active, verified Benazir Kafaalat recipient with a qualifying PMT score (32 or below) in the National Socio-Economic Registry (NSER). Families not enrolled in Kafaalat cannot receive Taleemi Wazaif.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does the stipend pay and how often?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Stipends are paid quarterly directly to the registered mother. For Primary students (Class 1–5), boys receive Rs. 2,500 and girls receive Rs. 3,000. For Secondary students (Class 6–10), boys receive Rs. 3,500 and girls receive Rs. 4,000. For Higher Secondary students (Class 11–12), boys receive Rs. 4,500 and girls receive Rs. 5,000. In addition, girls who successfully graduate from primary school receive a one-time bonus grant of Rs. 3,000.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if my child’s school attendance drops below 70%?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If a child’s attendance falls below the mandatory 70% quarterly threshold during compliance monitoring, the stipend payment for that specific quarter is temporarily paused, not permanently cancelled. Once regular attendance is restored to 70% or above in the subsequent quarter, payments resume automatically.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to re-register if my child changes schools?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. If your child moves to another school or advances from middle to high school, you must notify your local BISP Tehsil Office and submit a fresh admission verification slip stamped by the new school administration. If you do not update the school details, BISP compliance monitors cannot verify attendance at the old school, which will halt stipend disbursements.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there really a Benazir Taleemi Wazaif mobile app?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No public mobile app exists for citizen registration or beneficiary self-service. The “Waseela-e-Taleem” app found in official press releases is an internal, restricted tool built solely for BISP field staff and compliance monitors to record attendance in schools. Any app on the Google Play Store or third-party APK websites claiming to offer online registration for citizens is fake and poses a severe risk of personal data theft.',
          },
        },
      ],
    },
  ],
};

export default function BenazirTaleemiWazaifPage() {
  const breadcrumbs = [
    { nameEn: 'Social Welfare & Relief', nameUr: 'سوشل ویلفیئر اور ریلیف', url: '/welfare' },
    { nameEn: 'Benazir Taleemi Wazaif 2026', nameUr: 'بے نظیر تعلیمی وظائف 2026' },
  ];

  const registrationSteps = [
    {
      stepNumber: 1,
      titleEn: "Verify Mother's Kafaalat Status",
      titleUr: 'والدہ کی کفالت اہلیت کی تصدیق',
      descEn: 'Check via the 8171 web portal or send CNIC to 8171 to ensure the mother is an active Benazir Kafaalat recipient.',
      descUr: '8171 پورٹل یا ایس ایم ایس کے ذریعے تصدیق کریں کہ والدہ بینظیر کفالت کی فعال بینیفشری ہیں۔',
      badgeEn: 'ONLINE PREREQUISITE',
      badgeUr: 'آن لائن شرط',
    },
    {
      stepNumber: 2,
      titleEn: 'Obtain School Verification Slip',
      titleUr: 'اسکول تصدیق نامہ حاصل کریں',
      descEn: 'Collect the official admission slip from the school or BISP office; get it stamped and signed by the school head.',
      descUr: 'بچے کے اسکول کے ہیڈ ماسٹر یا پرنسپل سے داخلہ سلپ پر تصدیقی مہر اور دستخط کروائیں۔',
      badgeEn: 'SCHOOL ATTESTATION',
      badgeUr: 'اسکول تصدیق',
    },
    {
      stepNumber: 3,
      titleEn: 'Visit BISP Tehsil Office',
      titleUr: 'بی آئی ایس پی تحصیل دفتر تشریف لائیں',
      descEn: "The mother visits with her original CNIC, the child's computerized NADRA B-Form, and the stamped school slip.",
      descUr: 'والدہ اپنے اصل شناختی کارڈ، بچے کے نادرا ب فارم اور تصدیق شدہ اسکول سلپ کے ساتھ دفتر تشریف لائیں۔',
      badgeEn: 'IN-PERSON ENROLLMENT',
      badgeUr: 'دفتری حاضری',
    },
    {
      stepNumber: 4,
      titleEn: 'Biometric & System Enrollment',
      titleUr: 'بائیو میٹرک تصدیق اور رجسٹریشن',
      descEn: 'BISP desk officers verify the B-Form against NADRA records, log the school EMIS code, and issue an enrollment slip.',
      descUr: 'نادرا ڈیٹابیس سے ب فارم کی تصدیق اور اسکول کا ای ایم آئی ایس کوڈ سسٹم میں درج کیا جاتا ہے۔',
      badgeEn: 'FREE REGISTRATION',
      badgeUr: 'مفت رجسٹریشن',
    },
    {
      stepNumber: 5,
      titleEn: 'Maintain 70% Quarterly Attendance',
      titleUr: '70 فیصد سہ ماہی حاضری یقینی بنائیں',
      descEn: 'Compliance monitors track quarterly attendance. Once 70%+ attendance is certified, stipends are disbursed via 8171.',
      descUr: 'اسکول میں 70 فیصد حاضری برقرار رکھیں تاکہ ہر تین ماہ بعد وظیفہ والدہ کے کھاتے میں منتقل ہو۔',
      badgeEn: 'QUARTERLY PAYMENT',
      badgeUr: 'سہ ماہی ادائیگی',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header Section */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="BISP EDUCATION STIPENDS" labelUr="تعلیمی وظائف پروگرام" variant="seal" />
            <VerifiedBadge textEn="2026 OFFICIAL RULES" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Benazir Taleemi Wazaif 2026: Check Online, Eligibility &amp; Office Registration Guide
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              بے نظیر تعلیمی وظائف: 8171 آن لائن چیک، اہلیت، وظیفہ ریٹس اور رجسٹریشن کا مکمل طریقہ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            A verified, evidence-backed civic guide addressing the critical truth about Benazir Taleemi Wazaif: resolving
            widespread online misinformation about &quot;online registration forms,&quot; breaking down exact quarterly
            stipends (Rs. 2,500 to Rs. 5,000), detailing the strict 70% school attendance condition, and outlining the
            mandatory in-person Tehsil Office enrollment workflow.
          </p>
        </header>

        {/* Direct Answer Box (59 words - strictly within 40-60 words requirement) */}
        <DirectAnswerBox
          topicTitleEn="Can You Register for Benazir Taleemi Wazaif Online in 2026?"
          topicTitleUr="کیا بے نظیر تعلیمی وظائف کی رجسٹریشن آن لائن ہو سکتی ہے؟"
          answerEn="Benazir Taleemi Wazaif is BISP's conditional education stipend for school-going children whose mothers are active Benazir Kafaalat beneficiaries. Online registration does not exist; initial child enrollment strictly requires an in-person visit to your local BISP Tehsil Office with the child's NADRA B-Form and a stamped school verification slip. Only eligibility and disbursement status can be checked online via 8171."
          answerUr="بے نظیر تعلیمی وظائف بینظیر انکم سپورٹ پروگرام (BISP) کا تعلیمی وظیفہ ہے، جو صرف ان بچوں کو ملتا ہے جن کی والدہ پہلے سے بینظیر کفالت کی فعال بینیفشری ہوں۔ تعلیمی وظائف کی آن لائن رجسٹریشن کا کوئی طریقہ موجود نہیں ہے؛ بچے کا اندراج کروانے کے لیے نادرا ب فارم اور اسکول داخلہ تصدیق نامہ لے کر قریبی بی آئی ایس پی تحصیل دفتر جانا لازمی ہے۔ آن لائن صرف 8171 پورٹل کے ذریعے اہلیت اور وظیفے کا اسٹیٹس چیک کیا جا سکتا ہے۔"
        />

        {/* Section 1: Resolving the Online Registration Contradiction */}
        <section className="space-y-5">
          <div className="flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Benazir Taleemi Wazaif Check Online: What You Can &amp; Cannot Do on the Web
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 space-y-3 font-sans text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-bold text-sm sm:text-base">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0" />
              <span>Resolving the Widespread Online Registration Myth</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Many unofficial blogs and clickbait content sites claim parents can &quot;fill an online admission form on bisp.gov.pk&quot;
              or &quot;register directly through an Android app.&quot; <strong>This is completely false.</strong> As verified directly
              with the Benazir Income Support Programme, <strong>no citizen-facing online registration portal exists</strong> for
              enrolling children into Taleemi Wazaif. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* What CAN be done online */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-base">
                <CheckCircle2 className="w-5 h-5" />
                <h3>WHAT CAN BE CHECKED ONLINE (8171 Portal)</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Quarterly Payment Status:</strong> Check whether the child&apos;s education stipend for the current quarter has been credited alongside the mother&apos;s Kafaalat cash.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Mother&apos;s Kafaalat Eligibility:</strong> Verify the mother&apos;s NSER status by entering her 13-digit CNIC on the official portal (<code>8171.bisp.gov.pk</code>).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>SMS Inquiry via 8171:</strong> Send the mother&apos;s CNIC number without dashes to shortcode <strong>8171</strong> from her registered mobile SIM card.
                  </span>
                </li>
              </ul>
              <div className="pt-2">
                <a
                  href="https://8171.bisp.gov.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
                >
                  Visit Official 8171 Web Portal <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* What CANNOT be done online */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-red-200 dark:border-red-900 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-red-700 dark:text-red-400 font-bold text-base">
                <XCircle className="w-5 h-5" />
                <h3>WHAT CANNOT BE DONE ONLINE (In-Person Only)</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                  <span>
                    <strong>Initial Child Enrollment:</strong> You cannot submit a child&apos;s name or B-Form over the internet. Physical inspection of the child&apos;s original NADRA CRC is mandatory.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                  <span>
                    <strong>School Attestation Verification:</strong> The stamped admission slip signed by the school principal must be physically scanned and logged by BISP desk officers.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                  <span>
                    <strong>Biometric Mother Verification:</strong> The mother must appear physically at the BISP Tehsil Registration Desk to authorize child linking.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Full Eligibility Checklist */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Benazir Taleemi Wazaif Eligibility Criteria (Mandatory Checklist)
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            The most frequent reason for application rejection or missed stipends is misunderstanding the core prerequisite:
            <strong> Taleemi Wazaif is not a standalone public scholarship.</strong> It is an education conditional cash transfer
            reserved solely for verified beneficiary households.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-doc-brass/10 flex items-center justify-center text-doc-brass font-bold">
                1
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">Mother Active Beneficiary</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                The child&apos;s mother must already be an active, approved recipient of the quarterly Benazir Kafaalat cash transfer (NSER PMT score ≤ 32).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-doc-brass/10 flex items-center justify-center text-doc-brass font-bold">
                2
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">Computerized NADRA B-Form</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                The child must hold a computerized Child Registration Certificate (B-Form) from NADRA explicitly naming the registered mother.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-doc-brass/10 flex items-center justify-center text-doc-brass font-bold">
                3
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">Recognized School Enrollment</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                The student must be enrolled in an official government school or a BISP-registered private/semi-government institution.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-doc-brass/10 flex items-center justify-center text-doc-brass font-bold">
                4
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">70% Quarterly Attendance</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                The student must attend at least 70% of total academic days per quarter. Payment is held if attendance falls below this mark.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Age Limits & Class Bands (Explaining the Overlap) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <School className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Age Limits &amp; Educational Class Bands (Why Ages Overlap)
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Many parents and educational observers notice that BISP&apos;s official age categories overlap (e.g. ages 8–12 appear in both
            Primary and Secondary bands). <strong>This is not an error; it is an intentional policy design.</strong> In low-income rural
            and semi-urban households, children frequently start primary school later than normal or experience temporary schooling gaps
            due to poverty. The overlapping age windows prevent over-age students from being prematurely disqualified.
          </p>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[560px]">
                <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 text-left">Education Tier</th>
                    <th className="px-4 py-3 text-left">Class Range</th>
                    <th className="px-4 py-3 text-left">Eligible Age Bracket</th>
                    <th className="px-4 py-3 text-left">Operational Condition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-sm">
                      Primary Education
                    </td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">
                      Class 1 to Class 5
                    </td>
                    <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                      4 to 12 Years
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                      Must be enrolled in regular grade 1–5 classes; CRC verified
                    </td>
                  </tr>

                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-sm">
                      Secondary (Matric)
                    </td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">
                      Class 6 to Class 10
                    </td>
                    <td className="px-4 py-3 text-xs font-mono font-bold text-blue-700 dark:text-blue-400">
                      8 to 18 Years
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                      Middle &amp; high school tiers; quarterly attendance monitored
                    </td>
                  </tr>

                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-sm">
                      Higher Secondary (Inter)
                    </td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-300">
                      Class 11 to Class 12 (FA / FSc / I.Com)
                    </td>
                    <td className="px-4 py-3 text-xs font-mono font-bold text-doc-brass">
                      13 to 22 Years
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                      College/higher secondary verification slip renewed annually
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4: Current Quarterly Stipend Amounts (2026 Rates) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Benazir Taleemi Wazaif Quarterly Stipend Amounts (2026 Schedule)
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Under official federal directives, <strong>stipends for female students are set significantly higher than boys</strong> at
            every single education level. This gender-affirmative subsidy directly combats female dropout rates in low-income
            communities. In addition, girls who successfully graduate from primary school receive an extra one-time graduation incentive.
          </p>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[560px]">
                <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 text-left">Education Level</th>
                    <th className="px-4 py-3 text-left">Boys Stipend (Per Quarter)</th>
                    <th className="px-4 py-3 text-left">Girls Stipend (Per Quarter)</th>
                    <th className="px-4 py-3 text-left">Special Bonuses / Incentives</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-sm">
                      Primary (Class 1–5)
                    </td>
                    <td className="px-4 py-3 font-mono font-bold text-slate-700 dark:text-slate-200">
                      Rs. 2,500 <span className="text-xs font-normal text-slate-500">/ quarter</span>
                    </td>
                    <td className="px-4 py-3 font-mono font-bold text-emerald-700 dark:text-emerald-400">
                      Rs. 3,000 <span className="text-xs font-normal text-slate-500">/ quarter</span>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                      <strong className="text-emerald-700 dark:text-emerald-400">Rs. 3,000 One-Time Bonus</strong> for girls upon completing Grade 5
                    </td>
                  </tr>

                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-sm">
                      Secondary (Class 6–10)
                    </td>
                    <td className="px-4 py-3 font-mono font-bold text-slate-700 dark:text-slate-200">
                      Rs. 3,500 <span className="text-xs font-normal text-slate-500">/ quarter</span>
                    </td>
                    <td className="px-4 py-3 font-mono font-bold text-emerald-700 dark:text-emerald-400">
                      Rs. 4,000 <span className="text-xs font-normal text-slate-500">/ quarter</span>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                      Standard quarterly conditional disbursement based on 70% attendance
                    </td>
                  </tr>

                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-sm">
                      Higher Secondary (Class 11–12)
                    </td>
                    <td className="px-4 py-3 font-mono font-bold text-slate-700 dark:text-slate-200">
                      Rs. 4,500 <span className="text-xs font-normal text-slate-500">/ quarter</span>
                    </td>
                    <td className="px-4 py-3 font-mono font-bold text-emerald-700 dark:text-emerald-400">
                      Rs. 5,000 <span className="text-xs font-normal text-slate-500">/ quarter</span>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                      Paid directly to mother’s designated BISP digital bank account
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 space-y-1">
            <p className="font-bold text-slate-800 dark:text-slate-200">
              Clarification on Older / Conflicting Stipend Numbers:
            </p>
            <p>
              Some older government leaflets and legacy articles from 2021–2023 quote lower figures (such as Rs. 1,500 to Rs. 2,000
              for primary, and Rs. 2,500 to Rs. 3,500 for secondary). These older rates were subsequently enhanced by the federal
              cabinet to match cost-of-living adjustments. The figures tabulated above reflect the current operational rates.
            </p>
          </div>
        </section>

        {/* Section 5: The 70% Attendance Rule & School Transfers */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              The 70% Attendance Rule &amp; What Happens if a Child Transfers Schools
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-doc-brass" />
                What if School Attendance Drops Below 70%?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                BISP compliance monitors audit school attendance records at the conclusion of every three-month quarter. If a registered
                student attended less than 70% of classes during that quarter:
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 list-disc list-inside">
                <li>
                  <strong>Payment is Paused, NOT Cancelled:</strong> The child is <em>not</em> disqualified permanently. Only the stipend for that deficient quarter is withheld.
                </li>
                <li>
                  <strong>Automatic Resumption:</strong> As soon as the student maintains 70%+ attendance in the following quarter, normal quarterly payments resume automatically.
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-doc-brass" />
                What if the Child Changes or Transfers Schools?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                This is one of the most common causes of unexplained stipend stoppages. Because BISP&apos;s digital system links each child to a specific school EMIS code:
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 list-disc list-inside">
                <li>
                  <strong>Must Notify BISP:</strong> If your child transfers to a different school or advances to a new high school, you must obtain a fresh admission slip stamped by the new school.
                </li>
                <li>
                  <strong>Update at Tehsil Office:</strong> Submit the updated slip to your local BISP Tehsil Office. If un-updated, field monitors will mark the child absent at their old school.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: ProcessStepsDiagram - Verified Registration Process */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Building className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Benazir Taleemi Wazaif Registration: Step-by-Step Enrollment Workflow
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Because online enrollment forms do not exist, follow this verified 5-stage chronological procedure to register your children at the nearest BISP Tehsil Registration Desk.
          </p>

          <ProcessStepsDiagram
            steps={registrationSteps}
            titleEn="Verified In-Person Registration & Compliance Workflow"
            titleUr="تعلیمی وظائف رجسٹریشن اور اسکول حاضری کا مصدقہ طریقہ کار"
            subtitleEn="Chronological sequence from school attestation to quarterly disbursement"
            subtitleUr="اسکول سلپ کی تصدیق سے لے کر سہ ماہی وظیفہ کی وصولی تک کے مراحل"
            badgeEn="OFFICIAL PROCEDURE 2026"
            badgeUr="سرکاری ضوابط 2026"
            variant="dark"
          />
        </section>

        {/* Section 7: Required Documents Checklist */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Mandatory Documents to Carry to the BISP Tehsil Office
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 font-sans text-xs sm:text-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="font-mono text-xs text-doc-brass font-bold uppercase block">Document 1</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Mother&apos;s Original CNIC</h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  Valid computerized national identity card. The mother must be the registered beneficiary under Benazir Kafaalat.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="font-mono text-xs text-doc-brass font-bold uppercase block">Document 2</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">NADRA Computerized B-Form (CRC)</h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  Original computerized Child Registration Certificate issued by NADRA. The mother&apos;s CNIC must be registered as parent.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="font-mono text-xs text-doc-brass font-bold uppercase block">Document 3</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">School Attestation Slip</h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  Admission verification certificate signed and stamped by the school headmaster/principal with school name, class, and EMIS code.
                </p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>
                <strong>Reminder:</strong> Photocopies are retained by the office, but original documents must be shown for instant verification.
              </span>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 8: Scam Warnings & The Mobile App Myth */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Public Security Warning: Registration is 100% Free &amp; The Mobile App Myth
            </h2>
          </div>

          <div className="space-y-4 font-sans text-xs sm:text-sm">
            {/* 100% Free Warning */}
            <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-bold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
                <span>Zero Fee Policy: Never Pay Any Agent or Center Worker</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Registration for Benazir Taleemi Wazaif is <strong>strictly 100% free of cost</strong>. No agent, middleman, school official,
                or BISP employee has legal authority to charge fees for admission forms, tokens, biometric processing, or &quot;expedited approval.&quot;
                If anyone demands money, immediately file a complaint with BISP&apos;s toll-free helpline at <strong>0800-26477</strong>.
              </p>
            </div>

            {/* Debunking the Fake App */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-doc-ink dark:text-white font-bold text-sm sm:text-base">
                <Smartphone className="w-5 h-5 text-doc-seal" />
                <span>Beware of Fake &quot;Benazir Taleemi Wazaif&quot; Mobile Apps</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                There is <strong>no official mobile application on the Google Play Store or Apple App Store</strong> for citizens to
                register children or collect funds.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                <p>
                  <strong>Why do some news reports mention an app?</strong> The software named <em>&quot;Waseela-e-Taleem Android App&quot;</em> is
                  an internal tablet-based application built by PITB exclusively for official BISP field monitors to record attendance in
                  partner schools. It is password-protected and not accessible to the public.
                </p>
                <p className="text-red-600 dark:text-red-400 font-medium">
                  Never download third-party APK files or enter your CNIC numbers, OTP codes, or phone numbers into random Google Play apps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Cross-Linking to Related Guides */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Related BISP &amp; Social Welfare Guides on Pakistan Info Hub
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/welfare/bisp-eligibility-check-by-cnic"
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Eligibility Check</span>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  BISP Eligibility Check by CNIC →
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  How to check mother&apos;s Benazir Kafaalat registration status online via 8171.
                </p>
              </div>
              <span className="text-xs font-semibold text-doc-brass mt-3 inline-block">Check CNIC Status →</span>
            </Link>

            <Link
              href="/welfare/bisp-how-to-register"
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Registration Guide</span>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  BISP How to Register (NSER) →
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Dynamic survey registration at Tehsil offices for families not yet in Kafaalat.
                </p>
              </div>
              <span className="text-xs font-semibold text-doc-brass mt-3 inline-block">Survey Guide →</span>
            </Link>

            <Link
              href="/welfare/pmt-score-explained-bisp-eligibility-2026"
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Poverty Score</span>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  PMT Score Explained 2026 →
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Understand the 32 cutoff score, NSER indicators, and how to request a re-survey.
                </p>
              </div>
              <span className="text-xs font-semibold text-doc-brass mt-3 inline-block">Score Guide →</span>
            </Link>

            <Link
              href="/welfare/bisp-kafaalat-vs-nashonuma-vs-taleemi-wazaif-explained-2026"
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Program Comparison</span>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  Kafaalat vs Nashonuma vs Taleemi Wazaif →
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Full side-by-side comparison of conditions, benefits, and centers for all three schemes.
                </p>
              </div>
              <span className="text-xs font-semibold text-doc-brass mt-3 inline-block">Compare Programs →</span>
            </Link>
          </div>
        </section>

        {/* Section 10: Frequently Asked Questions */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Benazir Taleemi Wazaif)
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'Can I register my child online, or do I have to visit a BISP office?',
                a: 'You cannot register your child online. While eligibility and payment status can be verified online through the 8171 web portal, the initial registration strictly requires an in-person visit to your nearest BISP Tehsil Office with the child’s NADRA B-Form and an institution-attested school admission slip.',
              },
              {
                q: 'Is my child eligible if I’m not already a Kafaalat beneficiary?',
                a: 'No. Benazir Taleemi Wazaif is a conditional cash transfer built directly on top of the Benazir Kafaalat program. A child is eligible only if their mother is an active, verified Benazir Kafaalat recipient with a qualifying PMT score (32 or below) in the National Socio-Economic Registry (NSER). Families not enrolled in Kafaalat cannot receive Taleemi Wazaif.',
              },
              {
                q: 'How much does the stipend pay and how often?',
                a: 'Stipends are paid quarterly directly to the registered mother. For Primary students (Class 1–5), boys receive Rs. 2,500 and girls receive Rs. 3,000. For Secondary students (Class 6–10), boys receive Rs. 3,500 and girls receive Rs. 4,000. For Higher Secondary students (Class 11–12), boys receive Rs. 4,500 and girls receive Rs. 5,000. In addition, girls who successfully graduate from primary school receive a one-time bonus grant of Rs. 3,000.',
              },
              {
                q: 'What happens if my child’s school attendance drops below 70%?',
                a: 'If a child’s attendance falls below the mandatory 70% quarterly threshold during compliance monitoring, the stipend payment for that specific quarter is temporarily paused, not permanently cancelled. Once regular attendance is restored to 70% or above in the subsequent quarter, payments resume automatically.',
              },
              {
                q: 'Do I need to re-register if my child changes schools?',
                a: 'Yes. If your child moves to another school or advances from middle to high school, you must notify your local BISP Tehsil Office and submit a fresh admission verification slip stamped by the new school administration. If you do not update the school details, BISP compliance monitors cannot verify attendance at the old school, which will halt stipend disbursements.',
              },
              {
                q: 'Is there really a Benazir Taleemi Wazaif mobile app?',
                a: 'No public mobile app exists for citizen registration or beneficiary self-service. The “Waseela-e-Taleem” app found in official press releases is an internal, restricted tool built solely for BISP field staff and compliance monitors to record attendance in schools. Any app on the Google Play Store or third-party APK websites claiming to offer online registration for citizens is fake and poses a severe risk of personal data theft.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="doc-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white flex items-start gap-2">
                  <QuestionIcon className="w-5 h-5 text-doc-brass shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Official Sources Cited */}
        <section className="text-xs text-slate-500 dark:text-slate-400 font-sans space-y-2 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-300">Official Government Sources Verified:</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2">
            {[
              { label: 'Benazir Income Support Programme Official Portal', url: 'https://bisp.gov.pk/' },
              { label: 'BISP 8171 Web Eligibility Portal', url: 'https://8171.bisp.gov.pk/' },
              { label: 'Ministry of Poverty Alleviation & Social Safety (PASS)', url: 'https://pass.gov.pk/' },
            ].map((src) => (
              <a
                key={src.url}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-doc-seal transition"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{src.label}:</span>
                <span className="font-mono underline">{src.url}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
