import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, FeeTableVisual, FAQAccordionVisual, ComparisonVisual } from '@/components/visuals';
import {
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  GraduationCap,
  FileCheck,
  Building,
  QrCode,
  Globe2,
  Scale,
  Award,
  AlertCircle,
  FileText,
  BadgeCheck,
  Check,
  Layers,
  Sparkles,
  Users,
  Send,
  Truck
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IBCC Matric & Intermediate Attestation Guide 2026: SSC, HSSC & O/A-Levels | Pakistan Info Hub',
  description:
    'Complete guide to IBCC attestation and equivalence in Pakistan for 2026: Matric (SSC), Intermediate (HSSC), O-Level/A-Level equivalence, lifetime QR code rules, fee structure, and appointment booking at attest.ibcc.edu.pk.',
  keywords: [
    'ibcc matric intermediate attestation guide 2026',
    'ibcc attestation online appointment attest ibcc edu pk',
    'ibcc o level a level equivalence certificate',
    'ibcc lifetime qr code verification',
    'bise board verification before ibcc',
    'ibcc attestation fee per document 2026',
    'ibcc blood relative document submission',
    'ibcc vs hec attestation difference',
  ],
  openGraph: {
    title: 'IBCC Matric & Intermediate Attestation Guide 2026: SSC, HSSC & O/A-Levels',
    description:
      'Verified guide to IBCC attestation: SSC, HSSC, Cambridge equivalence, lifetime QR code validation, board prerequisites, and authorized submission rules.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/education/ibcc-matric-intermediate-attestation-guide-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/education/ibcc-matric-intermediate-attestation-guide-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Education & Results', item: 'https://www.pakistaninfohub.com/education' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'IBCC Matric & Inter Attestation Guide',
          item: 'https://www.pakistaninfohub.com/education/ibcc-matric-intermediate-attestation-guide-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'IBCC Matric and Intermediate Attestation Guide 2026: Complete SSC, HSSC and Equivalence Process',
      description:
        'Official comprehensive guide to authenticating secondary and higher secondary school certificates through the Inter Boards Coordination Commission (IBCC), lifetime QR code verification, and authorized representative submissions.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-29',
      dateModified: '2026-08-29',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/education/ibcc-matric-intermediate-attestation-guide-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Attest Matric and Intermediate Certificates with IBCC in Pakistan',
      description:
        'Step-by-step procedure for verifying SSC, HSSC, or O/A-Level equivalence certificates through the official IBCC Attestation Portal.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Get Prior Verification from Issuing BISE Board',
          text: 'Submit original certificates to your respective Board of Intermediate and Secondary Education (BISE) to receive a sealed verification envelope.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Register on IBCC Attestation Portal',
          text: 'Create an online profile at attest.ibcc.edu.pk, enter personal details, and input academic credentials.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Pay Fee via 1Bill / Bank Challan',
          text: 'Generate the system fee voucher (approx. PKR 1,000–1,200 per original document) and deposit via mobile banking or bank branch.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Book In-Person Appointment or Select Courier Mode',
          text: 'Select your preferred appointment date/time slot at an IBCC regional office or opt for designated courier submission.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Receive Attested Certificates with Lifetime QR Code',
          text: 'Collect your authenticated certificates embedded with an official, permanent QR code for lifetime online verification.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I need both HEC and IBCC attestation if I hold both an FSc/A-Levels and a Bachelor’s degree?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, if a foreign embassy, university, or immigration program requests full educational verification. IBCC validates your secondary (Matric/SSC/O-Level) and higher secondary (FSc/HSSC/A-Level) credentials, while HEC validates your university Bachelor’s and Master’s degrees. Neither body attests the other’s jurisdiction.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the lifetime QR code benefit on IBCC attested documents?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'All modern certificates attested by IBCC feature an official digital QR code. Scanning the QR code instantly verifies the certificate against IBCC centralized records. Once attested with this QR code, the attestation is permanent and does not require repeat verification, even if foreign embassies make recurring requests.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if my older certificates were attested by IBCC without a QR code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Older attestations issued before the digital QR code implementation may be rejected by foreign embassies or electronic verification systems. In such cases, you must apply for re-attestation through the IBCC portal to receive a certificate updated with the modern QR code stamp.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can someone else submit and collect my documents at the IBCC office?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. An authorized immediate blood relative (father, mother, brother, sister, or spouse) can submit documents on your behalf. They must bring an Authority Letter signed by you, their original CNIC + copy, and a copy of your CNIC. Alternatively, applications can be dispatched through designated courier services.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I cancel an IBCC attestation request online after generating the challan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The IBCC portal does not allow online cancellation or fee reversals once an application form is finalized. If you made an error, you must visit an IBCC regional office or contact the official helpline for administrative amendments.',
          },
        },
      ],
    },
  ],
};

export default function IbccAttestationGuidePage() {
  const breadcrumbs = [
    { nameEn: 'Education & Results', nameUr: 'تعلیم و امتحانات', url: '/education' },
    { nameEn: 'IBCC Matric & Inter Attestation Guide 2026', nameUr: 'آئی بی سی سی میٹرک و انٹر تصدیق گائیڈ' },
  ];

  const stepsData = [
    {
      number: 1,
      titleEn: 'Prior BISE Board Verification',
      titleUr: 'متعلقہ تعلیمی بورڈ سے تصدیق',
      descEn: 'Before approaching IBCC, your Matric (SSC) and Intermediate (HSSC) certificates must be verified by the issuing BISE board in a sealed envelope.',
      descUr: 'آئی بی سی سی جانے سے پہلے اپنے تعلیمی بورڈ (BISE) سے اصل اسناد کی تصدیق کروانا لازمی ہے۔',
      tagEn: 'Mandatory First Step',
      tagUr: 'پہلا لازمی مرحلہ',
    },
    {
      number: 2,
      titleEn: 'Register on IBCC Online Portal',
      titleUr: 'آئی بی سی سی پورٹل پر رجسٹریشن',
      descEn: 'Create an account on attest.ibcc.edu.pk, fill in the candidate bio-data, and select the specific certificates to be attested.',
      descUr: 'attest.ibcc.edu.pk پر لاگ ان کریں اور اپنی تمام تعلیمی اسناد کا اندراج کریں۔',
      tagEn: 'attest.ibcc.edu.pk',
      tagUr: 'آن لائن رجسٹریشن',
    },
    {
      number: 3,
      titleEn: 'Pay Attestation Fee (1Bill / Bank)',
      titleUr: 'فیس چالان کی ادائیگی',
      descEn: 'Generate the system challan and pay the official fee (PKR 1,000–1,200 per original certificate) via 1Bill, online banking, or designated bank branches.',
      descUr: 'آن لائن چالان جنریٹ کر کے بینک، ون بل یا موبائل ایپ کے ذریعے فیس ادا کریں۔',
      tagEn: 'PKR 1,000–1,200 / Doc',
      tagUr: 'فیس چالان',
    },
    {
      number: 4,
      titleEn: 'Schedule In-Person Slot or Courier',
      titleUr: 'وقت کا انتخاب یا کورئیر سروس',
      descEn: 'Book a walk-in appointment date at your nearest IBCC regional office (Islamabad, Lahore, Karachi, Peshawar, Quetta, Bahawalpur) or choose courier delivery.',
      descUr: 'قریبی آئی بی سی سی دفتر میں تاریخ و وقت منتخب کریں یا منظور شدہ کورئیر کا انتخاب کریں۔',
      tagEn: 'Appointment / Courier',
      tagUr: 'اپائنٹمنٹ',
    },
    {
      number: 5,
      titleEn: 'Receive Lifetime QR Code Attestation',
      titleUr: 'کیو آر کوڈ تصدیق شدہ اسناد وصول کریں',
      descEn: 'Receive your physical certificates embossed with the official IBCC holographic stamp and unique QR code for permanent global verification.',
      descUr: 'کیو آر کوڈ اور ہولوگرافک اسٹیمپ پر مشتمل مصدقہ اسناد وصول کریں جو تاحیات قابل تصدیق ہیں۔',
      tagEn: 'Lifetime QR Stamp',
      tagUr: 'مصدقہ اسناد',
    },
  ];

  const feeRows = [
    {
      serviceEn: 'Original Matric (SSC) Certificate / Sanad',
      serviceUr: 'اصل میٹرک سند (ایس ایس سی)',
      normal: 'PKR 1,000 – 1,200',
      urgent: 'Same-Day Express Available',
      executive: 'Embossed Lifetime QR Code',
      validity: 'Lifetime Valid',
      tagEn: 'Original Sanad',
    },
    {
      serviceEn: 'Original Intermediate (HSSC / FSc / FA) Certificate',
      serviceUr: 'اصل انٹرمیڈیٹ سند (ایف ایس سی / ایف اے)',
      normal: 'PKR 1,000 – 1,200',
      urgent: 'Same-Day Express Available',
      executive: 'Embossed Lifetime QR Code',
      validity: 'Lifetime Valid',
      tagEn: 'Original Sanad',
    },
    {
      serviceEn: 'Detailed Marks Certificate (DMC / Result Card)',
      serviceUr: 'مارکس شیٹ / رزلٹ کارڈ',
      normal: 'PKR 1,000 – 1,200',
      urgent: 'Express Counter Support',
      executive: 'Official Hologram Stamp',
      validity: 'Lifetime Valid',
      tagEn: 'Marks Sheet',
    },
    {
      serviceEn: 'O-Level / A-Level / Foreign Equivalence Certificate',
      serviceUr: 'او لیول و اے لیول مساوی سرٹیفکیٹ',
      normal: 'Per Equivalence Slabs',
      urgent: 'Expedited Processing',
      executive: 'Interlinked with Cambridge Records',
      validity: 'Lifetime Valid',
      tagEn: 'Equivalence',
    },
  ];

  const faqs = [
    {
      questionEn: 'Do I need both HEC and IBCC attestation if I have both an intermediate certificate and a university degree?',
      questionUr: 'اگر میرے پاس انٹر اور یونیورسٹی ڈگری دونوں ہوں تو کیا دونوں اداروں سے تصدیق کروانی ہوگی؟',
      answerEn: 'Yes. If a foreign embassy, overseas employer, or international university requires complete education verification, both bodies must be utilized. IBCC validates your secondary (Matric / SSC) and higher secondary (Intermediate / FSc / A-Level) certificates, while HEC validates your university-level Bachelor’s, Master’s, and PhD degrees.',
      answerUr: 'جی ہاں، میٹرک اور انٹر کے لیے آئی بی سی سی جبکہ یونیورسٹی ڈگریز کے لیے ایچ ای سی سے تصدیق ضروری ہے۔',
    },
    {
      questionEn: 'What is the significance of the IBCC lifetime QR code on attested certificates?',
      questionUr: 'آئی بی سی سی کے تاحیات کیو آر کوڈ کا کیا فائدہ ہے؟',
      answerEn: 'All certificates processed under modern IBCC standards receive a specialized QR code. When scanned with any smartphone camera, the code securely redirects to the official IBCC database, displaying the student’s name, roll number, and issuing board in real-time. This eliminates the need for repeated re-attestation requests from embassies.',
      answerUr: 'کیو آر کوڈ کے ذریعے دنیا بھر کے سفارت خانے اور ادارے فوری آن لائن تصدیق کر سکتے ہیں اور بار بار تصدیق کی ضرورت نہیں پڑتی۔',
    },
    {
      questionEn: 'What should I do if my certificates have an older IBCC stamp without a QR code?',
      questionUr: 'اگر میری پرانی سند پر کیو آر کوڈ کے بغیر اسٹیمپ لگی ہو تو کیا کریں؟',
      answerEn: 'Certificates attested years ago before QR code integration are frequently rejected by digital visa verification portals. You should log in to attest.ibcc.edu.pk, submit a re-attestation request, and receive the modern QR-coded validation stamp.',
      answerUr: 'ڈیجیٹل پورٹل پر بغیر کیو آر کوڈ والی اسناد کے مسترد ہونے کا خدشہ ہوتا ہے، اس لیے پورٹل پر دوبارہ اپلائی کر کے کیو آر اسٹیمپ حاصل کریں۔',
    },
    {
      questionEn: 'Can a family member submit my documents if I am working abroad or in another city?',
      questionUr: 'کیا کوئی خونی رشتے دار میرے کاغذات جمع اور وصول کر سکتا ہے؟',
      answerEn: 'Yes. Immediate blood relatives (parents, siblings, spouse) can submit and collect certificates on your behalf. They must carry an Authority Letter signed by the candidate, a copy of the candidate’s CNIC, and their own original CNIC with a photocopy.',
      answerUr: 'جی ہاں، قریبی خونی رشتے دار (والدین، بہن، بھائی، شریک حیات) اتھارٹی لیٹر اور شناختی کارڈ کی کاپی کے ساتھ کاغذات جمع کروا سکتے ہیں۔',
    },
    {
      questionEn: 'Why must plastic lamination be removed before submitting to IBCC?',
      questionUr: 'آئی بی سی سی میں جمع کروانے سے پہلے لیمینیشن اتارنا کیوں ضروری ہے؟',
      answerEn: 'IBCC physically embosses holographic security stickers and ink stamps directly onto the genuine parchment paper of the certificate. Laminated documents prevent adhesion and will be rejected at the counter.',
      answerUr: 'کیونکہ آئی بی سی سی اصل کاغذ پر سیکیورٹی اسٹیکر اور مہر لگاتی ہے۔ لیمینیشن کی موجودگی میں کاغذات قبول نہیں کیے جاتے۔',
    },
  ];

  const comparisonItems = [
    {
      titleEn: 'BISE Board Verification',
      titleUr: 'تعلیمی بورڈ کی تصدیق',
      subtitleEn: 'Pre-requisite Initial Step (Issuing Board)',
      subtitleUr: 'پہلا بنیادی مرحلہ (متعلقہ بورڈ)',
      badgeEn: 'Step 1 (Mandatory)',
      badgeVariant: 'navy' as const,
      pointsEn: [
        'Conducted by issuing board (e.g. BISE Lahore, BISE Karachi)',
        'Confirms student passed exam from that specific board',
        'Issues verification in a sealed envelope',
        'Prerequisite required BEFORE IBCC submission',
      ],
      pointsUr: [
        'متعلقہ تعلیمی بورڈ سے تصدیق کروائی جاتی ہے',
        'امتحان پاس کرنے اور ریکارڈ کے درست ہونے کا ثبوت',
        'بورڈ مہر بند لفافے میں تصدیق جاری کرتا ہے',
        'آئی بی سی سی جمع کروانے سے پہلے لازمی ہے',
      ],
      recommendedForEn: 'Initial Board Verification',
      recommendedForUr: 'ابتدائی بورڈ تصدیق',
    },
    {
      titleEn: 'IBCC Attestation & Equivalence',
      titleUr: 'آئی بی سی سی تصدیق و ایکویلنس',
      subtitleEn: 'National Federal Accreditation (Matric/Inter)',
      subtitleUr: 'وفاقی سطح پر اسناد کی تصدیق',
      badgeEn: 'Step 2 (Federal)',
      badgeVariant: 'brass' as const,
      pointsEn: [
        'Federal coordination body covering all Pakistani boards',
        'Attests SSC, HSSC, and Cambridge O/A-Levels',
        'Embeds permanent lifetime QR code verification',
        'Required for national universities, jobs & foreign visas',
      ],
      pointsUr: [
        'تمام پاکستانی بورڈز کا مرکزی وفاقی ادارہ',
        'میٹرک، انٹر اور او/اے لیول کی تصدیق',
        'مستقل اور تاحیات کیو آر کوڈ اسٹیمپ',
        'یونیورسٹیز، سرکاری نوکریوں اور ویزا کے لیے لازمی',
      ],
      recommendedForEn: 'Federal Attestation for SSC & HSSC',
      recommendedForUr: 'وفاقی تصدیق برائے میٹرک و انٹر',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn max-w-5xl mx-auto font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Header */}
        <header className="rounded-3xl border-2 border-doc-brass/40 p-6 sm:p-8 md:p-10 space-y-4 relative overflow-hidden bg-doc-ink text-white shadow-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="IBCC ATTESTATION GUIDE" labelUr="آئی بی سی سی تصدیق گائیڈ" variant="gold" />
            <span className="text-xs text-slate-400 font-bold">•</span>
            <VerifiedBadge variant="header" textEn="OFFICIAL 2026 CIVIC RULES" textUr="سرکاری ضوابط 2026" />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold tracking-tight leading-tight">
            IBCC Matric &amp; Intermediate Attestation Guide (2026): SSC, HSSC, Equivalence &amp; QR Code Rules
          </h1>

          <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            Step-by-step verified procedures for authenticating Matriculation (SSC), Intermediate (HSSC), and Cambridge O/A-Level equivalence certificates through the Inter Boards Coordination Commission (IBCC).
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-doc-brass font-mono">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <QrCode className="w-3.5 h-3.5 text-doc-brass" />
              <span>Permanent Lifetime QR Code</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>attest.ibcc.edu.pk</span>
            </span>
          </div>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is IBCC Attestation and How Do You Apply in 2026?"
          topicTitleUr="آئی بی سی سی تصدیق کیا ہے اور اس کا طریقہ کار کیا ہے؟"
          answerEn="IBCC (Inter Boards Coordination Commission) attests Secondary (Matric / SSC) and Higher Secondary (Intermediate / HSSC) certificates, as well as O/A-Level equivalences. First, obtain sealed verification from your issuing BISE board, apply online at attest.ibcc.edu.pk, pay the fee (PKR 1,000–1,200/doc), and submit via appointment, courier, or authorized relative to receive a lifetime QR code."
          answerUr="آئی بی سی سی میٹرک (ایس ایس سی)، انٹر (ایچ ایس ایس سی) اور او/اے لیول ایکویلنس اسناد کی تصدیق کرتا ہے۔ پہلے اپنے تعلیمی بورڈ (BISE) سے مہر بند تصدیق حاصل کریں، پھر attest.ibcc.edu.pk پر آن لائن اپلائی کریں، فیس چالان ادا کریں اور اپائنٹمنٹ، کورئیر یا خونی رشتے دار کے ذریعے جمع کروا کر تاحیات کیو آر کوڈ حاصل کریں۔"
        />

        {/* Section 1: Lifetime QR Code Verification Advantage */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <QrCode className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              The Lifetime QR Code Advantage: Why Repeat Verification Is No Longer Needed
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
              <span className="font-mono font-bold text-xs uppercase px-2.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                Modern Standard
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Permanent QR Code Authentication
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Every newly attested IBCC certificate carries a machine-readable QR code on its reverse side. Scanning this QR code links directly to IBCC&apos;s centralized repository, displaying student identity, marks, and issuing board credentials. This eliminates repetitive verification requests from embassies.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
              <span className="font-mono font-bold text-xs uppercase px-2.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                Older Attestation Notice
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Pre-QR Code Re-Attestation
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                If your Matric or Intermediate certificates were attested prior to the implementation of the digital QR code system (featuring only manual ink stamps), foreign embassies or digital visa portals may demand modern re-attestation to acquire the updated QR code.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Procedure */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step IBCC Attestation Workflow
            </h2>
          </div>

          <ProcessStepsDiagram
            steps={stepsData}
            titleEn="IBCC Attestation & Verification Sequence (2026)"
            titleUr="آئی بی سی سی تصدیق کا مرحلہ وار خاکہ"
            subtitleEn="From initial board sealed verification to physical document return"
            subtitleUr="بورڈ تصدیق سے لے کر کیو آر کوڈ سند وصولی تک"
            variant="dark"
          />
        </section>

        {/* Section 3: BISE Board vs IBCC Distinction */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Understanding the Multi-Tier Requirement: BISE Board vs. IBCC
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Applicants cannot submit certificates directly to IBCC without first securing verification from their local Board of Intermediate and Secondary Education (BISE):
          </p>

          <ComparisonVisual items={comparisonItems} />
        </section>

        {/* Section 4: Who Can Submit on Your Behalf & Courier Rules */}
        <section className="doc-card rounded-2xl p-6 sm:p-8 border border-doc-brass/30 space-y-4">
          <h2 className="text-xl font-serif font-bold text-doc-ink dark:text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-doc-brass" />
            <span>Submission Rules: Who Can Visit the IBCC Counter on Your Behalf?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <div className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800 border border-doc-brass/20 space-y-2">
              <span className="font-bold text-doc-ink dark:text-white text-sm block">1. Immediate Blood Relatives</span>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                If the candidate is abroad or unable to attend in person, an immediate blood relative (father, mother, brother, sister, or spouse) can represent them. The relative must present:
              </p>
              <ul className="list-disc list-inside text-xs space-y-1 text-slate-600 dark:text-slate-300 pt-1">
                <li>Authority Letter signed by the candidate</li>
                <li>Original CNIC of the representative + 1 photocopy</li>
                <li>Photocopy of candidate’s CNIC / Passport</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800 border border-doc-brass/20 space-y-2">
              <span className="font-bold text-doc-seal text-sm block">2. Designated Courier Submission</span>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Applicants who prefer postal submission can select the Courier Delivery option during portal registration. Documents are collected and safely returned via approved national couriers (TCS / Leopards).
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Official Fee Structure */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Official IBCC Attestation Fee Schedule (2026)
            </h2>
          </div>

          <FeeTableVisual
            rows={feeRows}
            titleEn="IBCC Attestation Tariff Ledger"
            titleUr="آئی بی سی سی فیس شیڈول 2026"
            subtitleEn="Standard government rates per document on attest.ibcc.edu.pk"
            subtitleUr="پورٹل کے مطابق فی دستاویز سرکاری فیس کی شرح"
            noteEn="Online applications cannot be cancelled once generated. Always verify candidate name and certificate serial numbers before fee payment."
            noteUr="چالان بننے کے بعد منسوخ نہیں ہو سکتا۔ ادائیگی سے قبل تمام کوائف تسلی سے چیک کریں۔"
          />
        </section>

        {/* Section 6: FAQ Accordion */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (IBCC Attestation 2026)
            </h2>
          </div>

          <FAQAccordionVisual items={faqs} />
        </section>

        {/* Cross-Linking Hub */}
        <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
            Related Academic Verification &amp; Admissions Guides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <Link
              href="/education/hec-degree-attestation-new-blockchain-system-2026"
              className="p-3.5 rounded-xl border border-doc-brass/30 hover:border-doc-seal bg-slate-50 dark:bg-slate-800 transition flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <span className="font-bold text-doc-ink dark:text-white block group-hover:text-doc-seal transition">
                  HEC Blockchain Degree Attestation 2026 →
                </span>
                <span className="text-slate-500 dark:text-slate-400">New paperless BS, Master, and PhD attestation rules</span>
              </div>
            </Link>

            <Link
              href="/education/university-entry-test-guide-nust-fast-comsats-2026"
              className="p-3.5 rounded-xl border border-doc-brass/30 hover:border-doc-seal bg-slate-50 dark:bg-slate-800 transition flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <span className="font-bold text-doc-ink dark:text-white block group-hover:text-doc-seal transition">
                  University Entry Test Guide 2026 →
                </span>
                <span className="text-slate-500 dark:text-slate-400">NUST NET, FAST NU &amp; COMSATS entry test comparison</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Ad Placement Zone */}
        <AdPlacementZone format="horizontal" />
      </div>
    </>
  );
}
