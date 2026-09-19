import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  ProcessStepsDiagram,
  FeeTableVisual,
} from '@/components/visuals';
import {
  Home,
  ShieldCheck,
  AlertTriangle,
  ExternalLink,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  Info,
  Check,
  XCircle,
  Smartphone,
  Building2,
  FileCheck2,
  ArrowRight,
  MapPin,
  FileText,
  PhoneCall,
  Scale,
  Landmark,
  BadgeAlert,
  HelpCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Apni Zameen Apna Ghar Scheme Punjab 2026: Free 3-Marla Plots, Status & Rules',
  description:
    'Official consumer guide to CM Maryam Nawaz Apni Zameen Apna Ghar (AZAG) Scheme. Check current registration status, Phase 1 balloting details (1,892 plots in 19 districts), landless eligibility, Rs. 200 e-stamp affidavit rules, and difference from ACAG loans.',
  keywords: [
    'apni zameen apna ghar punjab free plot scheme 2026',
    'azag punjab gov pk registration status',
    'cm punjab free 3 marla plot scheme',
    'phata free plots balloting result 2026',
    'difference between apni zameen apna ghar and apni chhat apna ghar',
    'apni zameen apna ghar phase 2 announcement',
    'azag punjab helpline 042-111-333-267',
    'free plot eligibility criteria landless families punjab',
  ],
  openGraph: {
    title: 'Apni Zameen Apna Ghar Scheme Punjab 2026: Free 3-Marla Plots & Status',
    description:
      'Verified guide to CM Punjab Free Plot Scheme (AZAG): Phase 1 balloting status, 3-marla residential plot eligibility for landless families, affidavit rules, and ACAG loan comparison.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/property/apni-zameen-apna-ghar-punjab-free-plot-scheme-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/property/apni-zameen-apna-ghar-punjab-free-plot-scheme-2026',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com/' },
        { '@type': 'ListItem', position: 2, name: 'Property & Land Records', item: 'https://www.pakistaninfohub.com/property' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Apni Zameen Apna Ghar Scheme 2026',
          item: 'https://www.pakistaninfohub.com/property/apni-zameen-apna-ghar-punjab-free-plot-scheme-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Apni Zameen Apna Ghar Scheme Punjab 2026: Free 3-Marla Plots, Status & Rules',
      description:
        'Comprehensive guide to the Government of Punjab Apni Zameen Apna Ghar free plot scheme for landless families, explaining Phase 1 balloting results, Phase 2 status, document verification, and comparison with ACAG housing loans.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-19',
      dateModified: '2026-09-19',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/property/apni-zameen-apna-ghar-punjab-free-plot-scheme-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Apply and Verify Allotment for Apni Zameen Apna Ghar Scheme',
      description:
        'Official 5-step process from verifying landlessness to submitting online applications during open windows, clearing computerized balloting, and completing physical document verification.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Confirm Landlessness & District Eligibility',
          text: 'Verify that neither you, your spouse, nor your dependent children own any residential, commercial, or agricultural land or house anywhere in Pakistan, and that your CNIC shows permanent residence in the district where the scheme is located.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Submit Application on Official Portal When Window Opens',
          text: 'During active government intake phases, submit your application for free at azag.punjab.gov.pk by entering your CNIC, marital status, and district details. No application or processing fees are ever charged.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Transparent Computerized Balloting by PITB / PHATA',
          text: 'Eligible applications undergo automated digital balloting executed by the Punjab Information Technology Board (PITB) across designated housing schemes in participating Punjab districts.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Submit Rs. 200 E-Stamp Affidavit to District DC Office',
          text: 'Shortlisted applicants must submit physical verification documents, including CNIC copies and a formal declaration on Rs. 200 e-stamp paper attested by an Oath Commissioner, to their District Deputy Commissioner Office or PHATA field office within 30 days.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Plot Allotment Letter & Subsequent ACAG Loan Access',
          text: 'After physical field scrutiny, successful beneficiaries receive official allotment letters for their 3-Marla residential plot and become eligible to apply for the Apni Chhat Apna Ghar interest-free construction loan (up to Rs. 1.5 million) to build their home.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is registration currently open for Apni Zameen Apna Ghar in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Phase 1 registration has officially concluded, and computerized balloting for 1,892 plots across 23 schemes in 19 districts has already taken place. As of September 2026, the official portal (azag.punjab.gov.pk) is operating in status-tracking mode for past applicants. Phase 2 has not opened for new public intake yet. Beware of any third-party websites claiming that applications are currently open.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between Apni Zameen Apna Ghar (AZAG) and Apni Chhat Apna Ghar (ACAG)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Apni Zameen Apna Ghar (AZAG) provides a 100% FREE 3-Marla residential plot to completely landless families who own zero property in Pakistan. In contrast, Apni Chhat Apna Ghar (ACAG) provides an interest-free construction loan of up to Rs. 1.5 million (payable over 7 years at Rs. 14,000/month) to citizens who ALREADY own a 1–5 marla urban plot or up to 10 marla rural plot. AZAG plot winners can later apply for the ACAG loan to finance their home construction.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I apply if I or my spouse own an inherited rural plot or partial share in a property?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The scheme strictly mandates total landlessness. Revenue authorities and the Punjab Land Record Authority (PLRA) cross-check provincial property and mutation databases against the CNICs of the applicant and spouse. If any ownership or inheritance share is discovered, the application is rejected.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Overseas Pakistanis or government employees apply for free plots?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The program is strictly targeted at resident, low-income, homeless families living in Punjab. Government employees eligible for federal or provincial official housing quotas and Overseas Pakistanis do not meet the poverty and vulnerability criteria for this free plot program.',
          },
        },
        {
          '@type': 'Question',
          name: 'What documents must be submitted if my name appears in the balloting list?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Shortlisted candidates must provide copies of their CNIC and spouse’s CNIC, family registration certificate (FRC), recent passport photos, and an affidavit on Rs. 200 e-stamp paper attested by an Oath Commissioner declaring zero property ownership and truthful income statements. These must be delivered to the local District Deputy Commissioner Office or PHATA field office within the prescribed scrutiny window.',
          },
        },
      ],
    },
  ],
};

const phaseOneDistricts = [
  {
    serviceEn: 'Faisalabad Division (Faisalabad, Jhang, T.T. Singh)',
    serviceUr: 'فیصل آباد ڈویژن (فیصل آباد، جھنگ، ٹوبہ ٹیک سنگھ)',
    normal: '3-Marla Residential',
    urgent: '100% Free (Zero Land Cost)',
    executive: 'PHATA Housing Schemes',
    validity: 'Balloting Completed',
  },
  {
    serviceEn: 'Sahiwal & Okara Districts',
    serviceUr: 'ساہیوال اور اوکاڑہ اضلاع',
    normal: '3-Marla Residential',
    urgent: '100% Free (Zero Land Cost)',
    executive: 'PHATA Housing Schemes',
    validity: 'Balloting Completed',
  },
  {
    serviceEn: 'Multan Division (Khanewal, Lodhran, Vehari)',
    serviceUr: 'ملتان ڈویژن (خانیوال، لودھراں، وہاڑی)',
    normal: '3-Marla Residential',
    urgent: '100% Free (Zero Land Cost)',
    executive: 'PHATA Housing Schemes',
    validity: 'Balloting Completed',
  },
  {
    serviceEn: 'Sargodha & Mandi Bahauddin Districts',
    serviceUr: 'سرگودھا اور منڈی بہاؤالدین اضلاع',
    normal: '3-Marla Residential',
    urgent: '100% Free (Zero Land Cost)',
    executive: 'PHATA Housing Schemes',
    validity: 'Balloting Completed',
  },
  {
    serviceEn: 'D.G. Khan Division (Layyah, Muzaffargarh)',
    serviceUr: 'ڈی جی خان ڈویژن (لیہ، مظفر گڑھ)',
    normal: '3-Marla Residential',
    urgent: '100% Free (Zero Land Cost)',
    executive: 'PHATA Housing Schemes',
    validity: 'Balloting Completed',
  },
  {
    serviceEn: 'Rawalpindi Division (Attock, Jhelum)',
    serviceUr: 'راولپنڈی ڈویژن (اٹک، جہلم)',
    normal: '3-Marla Residential',
    urgent: '100% Free (Zero Land Cost)',
    executive: 'PHATA Housing Schemes',
    validity: 'Balloting Completed',
  },
];

const schemeSteps = [
  {
    stepNumber: 1,
    icon: <Scale className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Landlessness & Identity Verification',
    titleUr: 'بے زمین اور نادرا شناختی تصدیق',
    descEn: 'Confirm that neither the applicant, spouse, nor dependent children own any house, plot, or agricultural land anywhere in Pakistan. The applicant must have a valid Punjab CNIC with native district address.',
    descUr: 'یقینی بنائیں کہ درخواست گزار، اس کی اہلیہ یا بچوں کے نام پاکستان بھر میں کوئی مکان یا زمین نہ ہو۔ شناختی کارڈ پر متعلقہ ضلع کی مستقل رہائش کا اندراج ہونا ضروری ہے۔',
    tagEn: 'Primary Filter',
    tagUr: 'بنیادی شرط',
  },
  {
    stepNumber: 2,
    icon: <Smartphone className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Online Registration via azag.punjab.gov.pk',
    titleUr: 'سرکاری پورٹل پر آن لائن رجسٹریشن',
    descEn: 'When an intake phase is active, candidates register directly through the official e-portal. Applicants enter CNIC, family details, and select their district scheme. No application fee is charged.',
    descUr: 'رجسٹریشن ونڈو کھلی ہونے پر پورٹل azag.punjab.gov.pk پر اپنا شناختی کارڈ اور خاندانی کوائف درج کریں۔ اس کی کوئی فیس نہیں ہے۔',
    tagEn: 'Zero Application Fee',
    tagUr: 'مفت آن لائن اندراج',
  },
  {
    stepNumber: 3,
    icon: <FileCheck2 className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Transparent Computerized Balloting by PITB',
    titleUr: 'پی آئی ٹی بی کی خودکار شفاف قرعہ اندازی',
    descEn: 'Applications are cross-checked against NADRA and PLRA records. Shortlisted candidates are selected through a computerized digital lottery apportioned district-by-district across participating schemes.',
    descUr: 'نادرا اور اراضی ریکارڈ سنٹر سے جانچ کے بعد پنجاب انفارمیشن ٹیکنالوجی بورڈ تمام اضلاع میں کوٹہ کے تحت خودکار قرعہ اندازی کرتا ہے۔',
    tagEn: 'District Quota',
    tagUr: 'ضلعی قرعہ اندازی',
  },
  {
    stepNumber: 4,
    icon: <FileText className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Affidavit & Scrutiny at Deputy Commissioner Office',
    titleUr: 'ڈپٹی کمشنر دفتر میں بیان حلفی اور تصدیق',
    descEn: 'Shortlisted candidates must submit an affidavit on Rs. 200 e-stamp paper (declaring zero land ownership) along with attested CNIC and FRC copies to their District DC Office or PHATA field office within 30 days.',
    descUr: 'قرعہ اندازی میں کامیاب افراد کو 30 دن کے اندر متعلقہ ڈپٹی کمشنر دفتر یا پھاٹا آفس میں 200 روپے کے ای اسٹامپ پیپر پر بیان حلفی اور تصدیق شدہ اسناد جمع کروانی ہوتی ہیں۔',
    tagEn: '30-Day Window',
    tagUr: '30 دن کی مہلت',
  },
  {
    stepNumber: 5,
    icon: <Home className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Plot Allotment Letter & Access to ACAG Loan',
    titleUr: 'پلاٹ الاٹمنٹ اور تعمیراتی قرضے کی سہولت',
    descEn: 'Upon field clearance, PHATA issues a registered allotment letter for the 3-Marla developed plot. Beneficiaries can then immediately apply for the companion Apni Chhat Apna Ghar interest-free loan (up to Rs. 1.5 million) to construct their house.',
    descUr: 'حتمی منظوری کے بعد پھاٹا 3 مرلہ پلاٹ کا باقاعدہ الاٹمنٹ لیٹر جاری کرتا ہے۔ اس کے بعد وہ اپنی چھت اپنا گھر سکیم سے 15 لاکھ کا بلا سود قرضہ لے کر گھر تعمیر کر سکتے ہیں۔',
    tagEn: 'Ownership Transfer',
    tagUr: 'مالکانہ حقوق',
  },
];

export default function ApniZameenApnaGharPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans pb-16">
        {/* Top Sticky Breadcrumb Bar */}
        <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 py-2.5 flex items-center justify-between">
            <Breadcrumbs
              items={[
                { nameEn: 'Property & Land Records', nameUr: 'زمین و جائیداد', url: '/property' },
                {
                  nameEn: 'Apni Zameen Apna Ghar 2026',
                  nameUr: 'اپنی زمین اپنا گھر 2026',
                  url: '/property/apni-zameen-apna-ghar-punjab-free-plot-scheme-2026',
                },
              ]}
            />
            <VerifiedBadge textEn="PHATA & HUD-PHED Data • Sept 2026" textUr="محکمہ ہاؤسنگ پنجاب • ستمبر 2026" />
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 pt-6 space-y-8">
          {/* CRITICAL LIVE STATUS CALLOUT */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border-2 border-amber-500/40 text-slate-800 dark:text-slate-200 space-y-2.5">
            <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-serif font-bold text-base sm:text-lg">
              <BadgeAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>Current Status Notice: Phase 1 Concluded • Phase 2 Awaited</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              <strong>Registration for Phase 1 is currently CLOSED.</strong> Computerized balloting for the initial allocation of 1,892 residential plots (~2,000 plots) across 23 housing schemes in 19 districts has already taken place. As of September 2026, the official portal at{' '}
              <a
                href="https://azag.punjab.gov.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline text-amber-800 dark:text-amber-300 inline-flex items-center gap-0.5"
              >
                azag.punjab.gov.pk <ExternalLink className="w-3 h-3" />
              </a>{' '}
              is operating in <strong>status tracking and document scrutiny mode</strong> for shortlisted candidates. Please do not trust third-party agents claiming they can submit new applications right now. Monitor the official portal directly for the formal announcement of Phase 2.
            </p>
          </div>

          {/* Header Section */}
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <InteractiveToolBadge
                labelEn="PUNJAB HOUSING WELFARE"
                labelUr="حکومت پنجاب ہاؤسنگ پروگرام"
                variant="gold"
              />
              <span className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-mono font-bold tracking-wide flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                <span>PHATA FREE 3-MARLA PLOT SCHEME (اپنی زمین اپنا گھر)</span>
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-doc-ink dark:text-white tracking-tight leading-tight">
              Apni Zameen Apna Ghar Scheme Punjab 2026: Free 3-Marla Plots, Status, Eligibility &amp; Verification Rules
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              The honest, transparent public reference to Chief Minister Maryam Nawaz Sharif&apos;s Apni Zameen Apna Ghar (AZAG) initiative. Executed by the Punjab Housing &amp; Town Planning Agency (PHATA), this program provides completely free residential land to homeless, landless families. Learn how the program works, verify core statutory criteria versus reported benchmarks, review required e-stamp affidavits, and understand the crucial difference between AZAG and the ACAG loan scheme.
            </p>
          </header>

          {/* Direct Answer Box */}
          <DirectAnswerBox
            topicTitleEn="Direct Answer: Apni Zameen Apna Ghar Free Plot Scheme (2026)"
            topicTitleUr="خلاصہ: اپنی زمین اپنا گھر مفت پلاٹ سکیم پنجاب"
            answerEn="Apni Zameen Apna Ghar (AZAG) provides 100% free, developed 3-Marla residential plots to completely landless, homeless low-income families in Punjab. Executed by PHATA under HUD&PHED, Phase 1 covered 1,892 plots across 23 schemes in 19 districts. Selection is conducted via computerized balloting by PITB, followed by document scrutiny (including a Rs. 200 e-stamp affidavit) at District Deputy Commissioner Offices. Phase 1 registration is currently closed; applicants must monitor azag.punjab.gov.pk for Phase 2 opening announcements. There are zero application or land charges."
            answerUr="اپنی زمین اپنا گھر (AZAG) سکیم کے تحت پنجاب کے بالکل بے زمین اور بے گھر خاندانوں کو 3 مرلہ کے رہائشی پلاٹ مکمل مفت فراہم کیے جاتے ہیں۔ پہلے مرحلے میں 19 اضلاع کی 23 ہاؤسنگ سکیموں میں 1,892 پلاٹس مختص کیے گئے۔ انتخاب پی آئی ٹی بی کے ذریعے شفاف کمپیوٹرائزڈ قرعہ اندازی سے ہوتا ہے، جس کے بعد ڈپٹی کمشنر دفتر میں 200 روپے کے ای اسٹامپ بیان حلفی کے ساتھ تصدیق ہوتی ہے۔ پہلے مرحلے کی رجسٹریشن مکمل ہو چکی ہے اور قرعہ اندازی ہو چکی ہے۔ نئے فیز 2 کے آغاز کے لیے سرکاری پورٹل azag.punjab.gov.pk دیکھیں۔"
          />

          {/* CRITICAL DISTINCTION: AZAG vs ACAG */}
          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-navy-950 via-slate-900 to-navy-950 text-white border border-doc-brass/40 shadow-xl space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-doc-brass/20 text-doc-brass text-xs font-mono font-bold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" /> Essential Program Distinction
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Apni Zameen Apna Ghar (AZAG) vs. Apni Chhat Apna Ghar (ACAG): Don&apos;t Confuse the Two!
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Many citizens and third-party websites mistakenly confuse these two companion housing programs launched by the Government of Punjab. They serve two completely different target groups:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <span className="font-mono font-bold text-amber-300 uppercase tracking-wider text-[11px] block">
                  1. APNI ZAMEEN APNA GHAR (AZAG) — THIS GUIDE
                </span>
                <ul className="space-y-1.5 text-slate-300 leading-relaxed">
                  <li>• <strong>What it provides:</strong> A 100% <strong>FREE 3-Marla residential plot</strong> with zero cost of land.</li>
                  <li>• <strong>Who qualifies:</strong> Completely <strong>landless families</strong> who do not own any land or house anywhere in Pakistan.</li>
                  <li>• <strong>Selection:</strong> Computerized balloting across designated PHATA housing schemes.</li>
                  <li>• <strong>Portal:</strong> <code>azag.punjab.gov.pk</code></li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <span className="font-mono font-bold text-emerald-300 uppercase tracking-wider text-[11px] block">
                  2. APNI CHHAT APNA GHAR (ACAG) — HOUSING LOAN
                </span>
                <ul className="space-y-1.5 text-slate-300 leading-relaxed">
                  <li>• <strong>What it provides:</strong> An <strong>interest-free construction loan of up to Rs. 1.5 million</strong> (15 Lakhs) repaid at ~Rs. 14,000/month over 7 years.</li>
                  <li>• <strong>Who qualifies:</strong> Citizens who <strong>already own</strong> a 1 to 5 marla urban plot or up to 10 marla rural plot.</li>
                  <li>• <strong>Synergy:</strong> Once an AZAG winner gets their plot allotment, they can apply for ACAG to build their home!</li>
                  <li>• <strong>Portal:</strong> <code>acag.punjab.gov.pk</code></li>
                </ul>
              </div>
            </div>

            {/* Direct Cross-Linking Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-doc-brass/10 border border-doc-brass/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                  <span>Already Own a 1–5 Marla Plot in Punjab?</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-extrabold uppercase">
                    Interest-Free Loan
                  </span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  If you already possess land ownership documents (Fard Malkiat or Registry), you do not need AZAG. Apply directly for construction funding:
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href="/loans/apni-chhat-apna-ghar"
                  className="px-4 py-2.5 rounded-lg bg-doc-brass hover:bg-doc-brass/90 text-navy-950 font-bold text-xs transition flex items-center gap-1.5 shadow-sm"
                >
                  <span>Open Apni Chhat 1.5M Loan Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </section>

          {/* Ad Placement Zone 1 */}
          <AdPlacementZone
            slotId="property-azag-top"
            format="horizontal"
          />

          {/* Eligibility Criteria: Confirmed vs Reported */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-doc-ink dark:text-white">
                Eligibility Criteria: Statutory Rules vs. Reported Benchmarks
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              To maintain honesty and protect citizens from misinformation, we separate statutory rules officially verified by PHATA and HUD&amp;PHED from secondary socioeconomic benchmarks widely cited in media reports:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Officially Confirmed Statutory Criteria */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-500/30 shadow-sm space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      Officially Confirmed Statutory Rules
                    </h3>
                    <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase">
                      Statutory PHATA Regulations
                    </span>
                  </div>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Punjab CNIC &amp; Residency:</strong> The applicant must be a permanent resident of Punjab with an address matching the district applied for.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Absolute Landlessness:</strong> Neither the applicant, their spouse, nor dependent children may own any residential plot, agricultural land, or house anywhere in Pakistan.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Age 18+:</strong> Minimum age of 18 years at the time of application. Married family heads are given primary consideration.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Clean Criminal Record:</strong> The applicant must have no active criminal convictions or pending legal abscondence.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Not a Loan Defaulter:</strong> Applicant must not be an active defaulter of any commercial bank or microfinance institution.</span>
                  </li>
                </ul>
              </div>

              {/* Commonly Reported Socioeconomic Benchmarks */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-500/30 shadow-sm space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600">
                    <Info className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      Widely Reported Operational Benchmarks
                    </h3>
                    <span className="text-[10px] font-mono text-blue-600 font-bold uppercase">
                      Socioeconomic Scoring
                    </span>
                  </div>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>Monthly Income &le; Rs. 50,000:</strong> Widely cited across news media as the operational income ceiling for poverty ranking.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>NSER PMT Score &le; 60:</strong> Third-party reports note that National Socio-Economic Registry (NSER) data is referenced to evaluate household vulnerability. (Read our{' '}
                      <Link href="/welfare/pmt-score-explained-bisp-eligibility-2026" className="text-blue-600 dark:text-blue-400 font-bold underline">
                        PMT Score Explained Guide
                      </Link>).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>Vulnerable Groups Prioritization:</strong> Widows, daily-wage laborers, and families with disabled members receive weighted priority during district committee evaluation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>Note on Official Portal:</strong> While income and NSER data are factored into district-level ranking, the primary disqualifier on <code>azag.punjab.gov.pk</code> remains any evidence of prior land ownership.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Process Steps Component */}
          <section id="application-process" className="space-y-4">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-doc-brass" />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-doc-ink dark:text-white">
                Step-by-Step Official Workflow: From Application to Plot Allotment
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              The verified 5-stage procedure established by PHATA, PITB, and the District Administration:
            </p>

            <ProcessStepsDiagram
              steps={schemeSteps}
              titleEn="Apni Zameen Apna Ghar Selection &amp; Allotment Flow"
              titleUr="اپنی زمین اپنا گھر سکیم کے 5 مراحل"
              subtitleEn="From online registration to computerized balloting, e-stamp verification, and plot handover"
              subtitleUr="آن لائن رجسٹریشن سے قرعہ اندازی، تصدیق اور مالکانہ حقوق تک کا مصدقہ طریقہ کار"
              variant="dark"
            />
          </section>

          {/* Document Verification & Rs. 200 E-Stamp Paper Rules */}
          <section className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-doc-brass" />
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Post-Balloting Scrutiny: Rs. 200 E-Stamp Affidavit &amp; Required Documents
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Being selected in the computerized balloting is <strong>conditional</strong> upon passing in-person scrutiny. Shortlisted candidates are provided a strict 30-day window to deliver physical documents to their District Deputy Commissioner Office or designated PHATA Field Office:
            </p>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-3 text-xs sm:text-sm">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Mandatory Document Checklist for Shortlisted Candidates:</span>
              </div>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 pl-1">
                <li>• <strong>Affidavit on Rs. 200 E-Stamp Paper:</strong> An official sworn statement generated through the Punjab e-Stamping portal (Challan 32-A), attested by an Oath Commissioner, declaring that neither the applicant, spouse, nor minor dependents own any house or land anywhere in Pakistan. (See our{' '}
                  <Link href="/property/e-stamping-challan-32a-online-guide-2026" className="font-bold underline text-blue-600 dark:text-blue-400">
                    e-Stamping Challan 32-A Guide
                  </Link>).</li>
                <li>• <strong>CNIC Copies:</strong> Valid NADRA CNIC copies of applicant and spouse.</li>
                <li>• <strong>Family Registration Certificate (FRC):</strong> NADRA-issued FRC confirming household composition and dependents.</li>
                <li>• <strong>Recent Passport Photographs:</strong> 3–4 attested passport-size color photographs.</li>
                <li>• <strong>Proof of Income / Disability:</strong> Salary slip, employer letter, or Social Welfare Department disability certificate (if claiming disability priority).</li>
              </ul>
            </div>
          </section>

          {/* Phase 1 Regional Scope: 1,892 Plots in 19 Districts */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-doc-ink dark:text-white">
                Phase 1 Coverage: 1,892 Plots Across 23 Schemes in 19 Districts
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              The official Government of Punjab notification for Phase 1 encompassed 1,892 residential plots (commonly cited as ~2,000 plots in subsequent announcements) developed across existing PHATA housing schemes:
            </p>

            <FeeTableVisual
              rows={phaseOneDistricts}
              titleEn="Phase 1 Regional Allotments (19 Districts)"
              titleUr="فیز 1 کے اضلاع اور ہاؤسنگ سکیموں کی تفصیل"
              subtitleEn="Official distribution across participating Punjab housing schemes"
              subtitleUr="پنجاب ہاؤسنگ اینڈ ٹاؤن پلاننگ ایجنسی (PHATA) کی تصدیق شدہ سکیمیں"
              noteEn="Phase 1 balloting concluded. Eligible citizens must monitor azag.punjab.gov.pk for Phase 2 regional expansion announcements."
              noteUr="پہلے مرحلے کی قرعہ اندازی مکمل ہو چکی ہے۔ فیز 2 کے اضلاع اور تاریخوں کے لیے سرکاری پورٹل azag.punjab.gov.pk دیکھیں۔"
            />
          </section>

          {/* Ad Placement Zone 2 */}
          <AdPlacementZone
            slotId="property-azag-mid"
            format="banner"
          />

          {/* Official Verification Channels & Anti-Fraud Advisory */}
          <section className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5">
              <PhoneCall className="w-5 h-5 text-blue-600" />
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Official Helpline &amp; Anti-Fraud Warning
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Because public demand for free housing is exceptionally high, fraudulent syndicates operate fake WhatsApp registration groups and paid form counters. Protect yourself by adhering to these verified facts:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px] block">
                  OFFICIAL PUNJAB HELPLINE
                </span>
                <span className="font-bold text-base text-blue-600 dark:text-blue-400 font-mono">
                  042-111-333-267
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Government of Punjab civic helpline for PHATA inquiries, balloting status, and scrutiny complaints.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px] block">
                  OFFICIAL E-PORTAL ONLY
                </span>
                <span className="font-bold text-base text-emerald-600 dark:text-emerald-400 font-mono">
                  azag.punjab.gov.pk
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Never enter your CNIC or upload personal documents on unofficial domains ending in .com, .pk, or .org.
                </p>
              </div>
            </div>
          </section>

          {/* Frequently Asked Questions (FAQ) */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-doc-brass" />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-doc-ink dark:text-white">
                Frequently Asked Questions (FAQ)
              </h2>
            </div>

            <div className="space-y-3">
              <details className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group">
                <summary className="font-bold text-sm sm:text-base text-slate-900 dark:text-white cursor-pointer list-none flex items-center justify-between gap-3">
                  <span>Is registration currently open for Apni Zameen Apna Ghar in 2026?</span>
                  <span className="text-doc-brass font-mono text-lg transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                  No. Phase 1 registration has officially concluded, and computerized balloting for 1,892 plots across 23 schemes in 19 districts has already taken place. As of September 2026, the official portal (<code>azag.punjab.gov.pk</code>) is operating in status-tracking mode for past applicants. Phase 2 has not opened for new public intake yet. Beware of any third-party websites claiming that applications are currently open.
                </p>
              </details>

              <details className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group">
                <summary className="font-bold text-sm sm:text-base text-slate-900 dark:text-white cursor-pointer list-none flex items-center justify-between gap-3">
                  <span>What is the difference between Apni Zameen Apna Ghar and Apni Chhat Apna Ghar?</span>
                  <span className="text-doc-brass font-mono text-lg transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                  Apni Zameen Apna Ghar (AZAG) provides a 100% FREE 3-Marla residential plot to completely landless families who own zero property in Pakistan. In contrast, Apni Chhat Apna Ghar (ACAG) provides an interest-free construction loan of up to Rs. 1.5 million (payable over 7 years at Rs. 14,000/month) to citizens who ALREADY own a 1–5 marla urban plot or up to 10 marla rural plot. AZAG plot winners can later apply for the ACAG loan to finance their home construction. You can read our complete guide to{' '}
                  <Link href="/loans/apni-chhat-apna-ghar" className="text-blue-600 dark:text-blue-400 font-bold underline">
                    Apni Chhat Apna Ghar Housing Loans
                  </Link>.
                </p>
              </details>

              <details className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group">
                <summary className="font-bold text-sm sm:text-base text-slate-900 dark:text-white cursor-pointer list-none flex items-center justify-between gap-3">
                  <span>What happens if I or my spouse own inherited rural land elsewhere in Pakistan?</span>
                  <span className="text-doc-brass font-mono text-lg transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                  The scheme strictly mandates total landlessness. Revenue authorities and the Punjab Land Record Authority (PLRA) cross-check provincial property and mutation databases against the CNICs of the applicant and spouse. If any ownership or inheritance share is discovered, the application is rejected. You can verify land record status via our{' '}
                  <Link href="/property/punjab-land-record-fard-verifier-2026" className="text-blue-600 dark:text-blue-400 font-bold underline">
                    Punjab Fard Online Verifier
                  </Link>.
                </p>
              </details>

              <details className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group">
                <summary className="font-bold text-sm sm:text-base text-slate-900 dark:text-white cursor-pointer list-none flex items-center justify-between gap-3">
                  <span>Can Overseas Pakistanis or government employees apply?</span>
                  <span className="text-doc-brass font-mono text-lg transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                  No. The program is strictly targeted at resident, low-income, homeless families living in Punjab. Government employees eligible for federal or provincial official housing quotas and Overseas Pakistanis do not meet the poverty and vulnerability criteria for this free plot program. Government servants should check our guide to{' '}
                  <Link href="/property/government-employee-housing-schemes-pakistan-2026" className="text-blue-600 dark:text-blue-400 font-bold underline">
                    Government Employee Housing Schemes 2026
                  </Link>.
                </p>
              </details>

              <details className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group">
                <summary className="font-bold text-sm sm:text-base text-slate-900 dark:text-white cursor-pointer list-none flex items-center justify-between gap-3">
                  <span>What documents are required if selected in the computerized balloting?</span>
                  <span className="text-doc-brass font-mono text-lg transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                  Shortlisted candidates must provide copies of their CNIC and spouse’s CNIC, family registration certificate (FRC), recent passport photos, and an affidavit on Rs. 200 e-stamp paper attested by an Oath Commissioner declaring zero property ownership and truthful income statements. These must be delivered to the local District Deputy Commissioner Office or PHATA field office within the prescribed 30-day scrutiny window.
                </p>
              </details>
            </div>
          </section>

          {/* Official Verification Sources & Legal Disclaimer */}
          <footer className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-500 dark:text-slate-400 font-sans">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Primary Verification Source: Punjab Housing &amp; Town Planning Agency (PHATA) &amp; HUD&amp;PHED</span>
              </div>
              <div>
                <span>Last Editorial Verification: September 2026</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-[11px] leading-relaxed">
              <strong>Public Disclaimer:</strong> Pakistan Info Hub is an independent civic information platform and is not affiliated with PHATA or the Government of Punjab. This guide is published strictly for public education and fraud prevention. To verify balloting results or check for Phase 2 updates, access only official government domains ending in <code>.punjab.gov.pk</code>.
            </div>
          </footer>
        </article>
      </main>
    </>
  );
}
