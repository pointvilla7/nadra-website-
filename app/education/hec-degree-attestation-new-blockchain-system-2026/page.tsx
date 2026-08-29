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
  Link as LinkIcon
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HEC Degree Attestation 2026: New Blockchain e-Attestation System Guide | Pakistan Info Hub',
  description:
    'Complete guide to HEC’s new paperless Degree Attestation System (DAS) launched May 2026. Learn how the blockchain e-certificate works, online verification via eservices.hec.gov.pk, 25+ ERP universities, Rs. 3,000 fee, and why physical visits are discontinued.',
  keywords: [
    'hec degree attestation new blockchain system 2026',
    'hec degree attestation online apply eservices',
    'hec e-attestation certificate qr code verification',
    'hec vs ibcc attestation difference',
    'hec degree attestation fee 2026',
    'hec erp integrated universities nust comsats lums',
    'eservices hec gov pk das portal',
    'hec attestation name mismatch cnic nikkahnama',
  ],
  openGraph: {
    title: 'HEC Degree Attestation 2026: New Blockchain System & Online Guide',
    description:
      'Official guide to HEC’s fully digital, blockchain-secured Degree Attestation System (DAS). 100% paperless process, fee schedules, ERP pre-verification, and international acceptance.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/education/hec-degree-attestation-new-blockchain-system-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/education/hec-degree-attestation-new-blockchain-system-2026' },
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
          name: 'HEC Degree Attestation Blockchain System',
          item: 'https://www.pakistaninfohub.com/education/hec-degree-attestation-new-blockchain-system-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'HEC Degree Attestation 2026: Complete Guide to the New Blockchain e-Attestation System',
      description:
        'Official procedural guide detailing the Higher Education Commission (HEC) paperless Degree Attestation System, blockchain QR verification, ERP university integration, and step-by-step digital application instructions.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-29',
      dateModified: '2026-08-29',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/education/hec-degree-attestation-new-blockchain-system-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Apply for HEC Degree e-Attestation Online in Pakistan',
      description:
        'Step-by-step procedure for applying for digital, blockchain-backed higher education degree attestation via HEC e-Services.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Create Account on HEC e-Services Portal',
          text: 'Visit eservices.hec.gov.pk, register using your 13-digit CNIC and mobile number, and complete biometric verification.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Fill Profile & Academic History',
          text: 'Enter all educational qualifications from Matric/O-Levels through your highest terminal degree, uploading high-resolution scanned copies.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Submit Application for Online Scrutiny',
          text: 'Select the Degree Attestation System (DAS) and submit for initial online scrutiny by HEC and ERP-integrated university registrars.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Pay Standardized Processing Fee',
          text: 'Generate the official 1Link / KuickPay PSID (Rs. 3,000 per document) and pay via mobile banking or ATM.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Download Blockchain e-Attestation Certificate',
          text: 'Once approved, download your tamper-proof e-Attestation Certificate embedded with an immutable QR code for global verification.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I still need to visit an HEC regional center or send physical original documents via courier?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. As of May 11, 2026, the Higher Education Commission completely discontinued in-person walk-in appointments and courier document delivery. The system is 100% digital and paperless. All document scrutiny, payment, and certificate issuance occur directly through eservices.hec.gov.pk.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the new digital e-Attestation Certificate accepted by international embassies and foreign employers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! The digital e-Attestation Certificate is secured with cryptographic blockchain technology. International universities, employers, and foreign embassies can scan the unique QR code on the certificate to instantly view verified graduation records directly from HEC servers without manual courier delays.',
          },
        },
        {
          '@type': 'Question',
          name: 'What qualifications are covered by HEC versus IBCC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'HEC attests ONLY higher education degrees—including Bachelor’s (14 & 16-year BS), Master’s (MA/MSc/MS), MPhil, PhD, and Postgraduate Diplomas from HEC-recognized universities. Matric (SSC), Intermediate (HSSC), and O/A-Level equivalence certificates must be attested through the Inter Boards Coordination Commission (IBCC).',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens to degrees that were attested before May 11, 2026 under the old physical system?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'All prior physical attestations featuring the traditional HEC stamp and barcode ticket remain 100% legally valid and recognized indefinitely. You do not need to re-attest or convert existing attested degrees unless an employer specifically demands a digital e-Attestation Certificate.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if the name on my university degree does not match my CNIC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If your name differs due to marriage, upload your Computerized Nikkahnama / Union Council Marriage Registration Certificate (MRC). For spelling errors or formal name changes, upload an official Affidavit attested by a First Class Magistrate along with an original National Newspaper cutting announcing the formal name correction.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I still need Ministry of Foreign Affairs (MOFA) attestation after HEC attestation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, if you are traveling abroad for higher studies, employment, or immigration (such as GCC work visas or European admissions), the host country embassy typically mandates Ministry of Foreign Affairs (MOFA) attestation as the final sovereign validation after HEC e-Attestation.',
          },
        },
      ],
    },
  ],
};

export default function HecBlockchainAttestationPage() {
  const breadcrumbs = [
    { nameEn: 'Education & Results', nameUr: 'تعلیم و امتحانات', url: '/education' },
    { nameEn: 'HEC Blockchain Degree Attestation Guide 2026', nameUr: 'ایچ ای سی ڈگری تصدیق بلاک چین گائیڈ' },
  ];

  const stepsData = [
    {
      number: 1,
      titleEn: 'Register on HEC e-Services Portal',
      titleUr: 'ایچ ای سی ای-سروسز پورٹل پر اکاؤنٹ بنائیں',
      descEn: 'Create your centralized profile on eservices.hec.gov.pk using your 13-digit CNIC/NICOP and mobile number with SMS OTP verification.',
      descUr: 'اپنے شناختی کارڈ اور موبائل نمبر کے ذریعے eservices.hec.gov.pk پر پروفائل رجسٹر کریں۔',
      tagEn: '100% Online',
      tagUr: 'آن لائن پورٹل',
    },
    {
      number: 2,
      titleEn: 'Complete Profile & Upload Credentials',
      titleUr: 'تعلیمی اسناد اور پروفائل اپ لوڈ کریں',
      descEn: 'Input your academic timeline starting from Matric/O-Levels up to your terminal university degree. Upload clean, color scans of original degrees and transcripts.',
      descUr: 'میٹرک سے یونیورسٹی ڈگری تک تمام تعلیمی ریکارڈ اور واضح اسکین شدہ نقول اپ لوڈ کریں۔',
      tagEn: 'High-Res PDF/JPG',
      tagUr: 'دستاویزات اپ لوڈ',
    },
    {
      number: 3,
      titleEn: 'Digital Scrutiny & ERP Pre-Verification',
      titleUr: 'آن لائن تصدیق و یونیورسٹی اسکروٹنی',
      descEn: 'HEC case officers and participating ERP-integrated universities (NUST, LUMS, COMSATS, etc.) verify your graduation records digitally in real-time.',
      descUr: 'ایچ ای سی افسران اور مربوط یونیورسٹیاں ڈیجیٹل ریکارڈ کے ذریعے ڈگری کی تصدیق کرتی ہیں۔',
      tagEn: 'No Courier',
      tagUr: 'بغیر کورئیر',
    },
    {
      number: 4,
      titleEn: 'Generate PSID & Deposit Fee',
      titleUr: 'چالان (PSID) فیس کی ادائیگی',
      descEn: 'Once scrutinized, generate your 1Link / KuickPay PSID (flat rate of Rs. 3,000 per document) and pay via mobile banking, ATM, or debit card.',
      descUr: 'آن لائن چالان جنریٹ کر کے بینکنگ ایپ، اے ٹی ایم یا ڈیبٹ کارڈ سے 3000 روپے فی دستاویز فیس ادا کریں۔',
      tagEn: 'Rs. 3,000 / Doc',
      tagUr: 'فیس ادائیگی',
    },
    {
      number: 5,
      titleEn: 'Download Blockchain e-Certificate',
      titleUr: 'بلاک چین ای-سرٹیفکیٹ ڈاؤن لوڈ کریں',
      descEn: 'Download your tamper-proof, blockchain-backed digital e-Attestation Certificate containing an immutable QR code for instant global validation.',
      descUr: 'کیو آر کوڈ پر مشتمل مصدقہ ڈیجیٹل سرٹیفکیٹ ڈاؤن لوڈ کریں جو دنیا بھر میں قابل قبول ہے۔',
      tagEn: 'Instant QR Code',
      tagUr: 'کیو آر سرٹیفکیٹ',
    },
  ];

  const feeRows = [
    {
      serviceEn: 'Original University Degree (BS / Master / PhD)',
      serviceUr: 'اصل یونیورسٹی ڈگری (بی ایس / ماسٹرز / پی ایچ ڈی)',
      normal: 'PKR 3,000',
      urgent: 'Paperless Digital Processing',
      executive: 'Blockchain e-Certificate with QR Code',
      validity: 'Lifetime Valid',
      tagEn: 'Standard Tier',
    },
    {
      serviceEn: 'Official Transcript / Detailed Marks Certificate (DMC)',
      serviceUr: 'آفیشل ٹرانسکرپٹ / مارکس شیٹ',
      normal: 'PKR 3,000',
      urgent: 'Digital Verification',
      executive: 'Independent QR Verification Record',
      validity: 'Lifetime Valid',
      tagEn: 'Standard Tier',
    },
    {
      serviceEn: 'Provisional Certificate / Certificate of Completion',
      serviceUr: 'پروویژنل سرٹیفکیٹ / پاسنگ سرٹیفکیٹ',
      normal: 'PKR 3,000',
      urgent: 'Digital Verification',
      executive: 'HEC System Scrutiny',
      validity: 'Valid up to Degree Issuance',
      tagEn: 'Provisional',
    },
    {
      serviceEn: 'HEC Foreign Equivalence Letter Attestation',
      serviceUr: 'غیر ملکی ڈگری مساوی سرٹیفکیٹ',
      normal: 'PKR 3,000',
      urgent: 'Digital Linkage',
      executive: 'Interlinked with Equivalence Portal',
      validity: 'Lifetime Valid',
      tagEn: 'Equivalence',
    },
  ];

  const faqs = [
    {
      questionEn: 'Do I still need to visit an HEC regional center in Islamabad, Lahore, Karachi, Peshawar, or Quetta?',
      questionUr: 'کیا اب بھی ایچ ای سی کے علاقائی دفاتر جانا پڑے گا؟',
      answerEn: 'No. Under the revamped Degree Attestation System launched on May 11, 2026, all in-person physical visits and walk-in counters at HEC regional offices have been completely discontinued. The entire verification lifecycle is 100% digital, paperless, and completed online at eservices.hec.gov.pk.',
      answerUr: 'نہیں، 11 مئی 2026 سے فزیکل وزٹ مکمل طور پر ختم کر دیا گیا ہے۔ اب تمام کام آن لائن پورٹل پر ہوتا ہے۔',
    },
    {
      questionEn: 'Is the new digital blockchain e-Attestation Certificate accepted by foreign embassies and universities?',
      questionUr: 'کیا ڈیجیٹل بلاک چین ای-سرٹیفکیٹ غیر ملکی سفارت خانوں میں قابل قبول ہے؟',
      answerEn: 'Yes. The digital e-Attestation Certificate is cryptographically secured via blockchain technology (developed in partnership with CMPak and Wibbow Technologies). Every issued certificate embeds an immutable QR code and verification hash that international employers, academic institutions, and foreign embassies can scan to independently inspect the official HEC registry in real-time.',
      answerUr: 'جی ہاں، بلاک چین سرٹیفکیٹ پر موجود کیو آر کوڈ کے ذریعے دنیا بھر کے سفارت خانے اور ادارے فوری تصدیق کر سکتے ہیں۔',
    },
    {
      questionEn: 'What is the crucial difference between HEC and IBCC attestation?',
      questionUr: 'ایچ ای سی اور آئی بی سی سی تصدیق میں کیا بنیادی فرق ہے؟',
      answerEn: 'HEC attests ONLY higher education qualifications (Bachelor’s, Master’s, MPhil, PhD degrees and transcripts) awarded by chartered universities. It does NOT attest Secondary School Certificates (Matric / SSC), Higher Secondary Certificates (Intermediate / FSc / FA), or O/A-Levels. All secondary and intermediate qualifications must be attested separately through the Inter Boards Coordination Commission (IBCC).',
      answerUr: 'ایچ ای سی صرف یونیورسٹی ڈگریز (بی ایس، ماسٹرز، پی ایچ ڈی) کی تصدیق کرتا ہے۔ میٹرک، انٹر اور او/اے لیول کے لیے آئی بی سی سی سے رجوع کریں۔',
    },
    {
      questionEn: 'How do ERP-integrated universities accelerate the attestation timeline?',
      questionUr: 'ای آر پی مربوط یونیورسٹیز سے تصدیق کا عمل کیسے تیز ہوتا ہے؟',
      answerEn: 'More than 25 leading Pakistani universities (such as NUST, COMSATS, LUMS, FAST-NUCES, IBA, and others) have interlinked their university management ERP databases directly with HEC’s portal. For graduates of these institutions, degrees are digitally pre-verified upon graduation, allowing rapid attestation approvals without manual registrar correspondence.',
      answerUr: '25 سے زائد بڑی یونیورسٹیز کا ڈیٹا پہلے سے پورٹل سے منسلک ہے، جس کی وجہ سے ڈگری بغیر کسی تاخیر کے فوری تصدیق ہو جاتی ہے۔',
    },
    {
      questionEn: 'What should I do if the name on my degree does not match my CNIC?',
      questionUr: 'اگر ڈگری اور شناختی کارڈ پر نام میں فرق ہو تو کیا کریں؟',
      answerEn: 'If the name discrepancy is due to post-graduation marriage, upload your original Union Council Marriage Registration Certificate (Nikkahnama / MRC) and husband’s CNIC. If the mismatch arises from spelling discrepancies or formal legal changes, you must submit an attested Affidavit from a First Class Magistrate accompanied by a scanned copy of a published newspaper notice announcing the name rectification.',
      answerUr: 'شادی کی صورت میں کمپیوٹرائزڈ نکاح نامہ، یا نام کی تبدیلی کی صورت میں مجسٹریٹ کا بیان حلفی اور اخبار کا اشتہار اپ لوڈ کریں۔',
    },
    {
      questionEn: 'Do I still need Ministry of Foreign Affairs (MOFA) attestation after receiving my HEC e-Certificate?',
      questionUr: 'کیا ایچ ای سی تصدیق کے بعد وزارت خارجہ (MOFA) سے بھی تصدیق ضروری ہے؟',
      answerEn: 'Yes, if you are traveling abroad for overseas employment, immigration, or university enrollment in Gulf (GCC), European, or North American countries. Foreign embassies generally require the sovereign Ministry of Foreign Affairs (MOFA) attestation as the final legal seal following your HEC degree validation.',
      answerUr: 'جی ہاں، بیرون ملک نوکری یا ویزا کے لیے ایچ ای سی کے بعد وزارت خارجہ کی تصدیق لازمی ہوتی ہے۔',
    },
  ];

  const comparisonItems = [
    {
      titleEn: 'HEC Degree Attestation',
      titleUr: 'ایچ ای سی ڈگری تصدیق',
      subtitleEn: 'Higher Education Commission (Universities)',
      subtitleUr: 'ہائر ایجوکیشن کمیشن (یونیورسٹیز)',
      badgeEn: 'Higher Education',
      badgeVariant: 'seal' as const,
      pointsEn: [
        'Bachelor’s (14/16-year BS, BA, BSc)',
        'Master’s (MS, MPhil, MA, MSc)',
        'Doctoral Degrees (PhD) & Post-Docs',
        'Official University Transcripts & DMCs',
        'Foreign Degree Equivalence Letters',
      ],
      pointsUr: [
        'بیچلرز و بی ایس ڈگریز',
        'ماسٹرز، ایم ایس اور ایم فل',
        'ڈاکٹریٹ و پی ایچ ڈی اسناد',
        'یونیورسٹی آفیشل ٹرانسکرپٹس',
        'غیر ملکی ڈگری مساوی سرٹیفکیٹ',
      ],
      recommendedForEn: 'University Graduates & Higher Education',
      recommendedForUr: 'یونیورسٹی گریجویٹس اور اعلیٰ تعلیم',
    },
    {
      titleEn: 'IBCC Certificate Attestation',
      titleUr: 'آئی بی سی سی اسناد تصدیق',
      subtitleEn: 'Inter Boards Coordination Commission (Schools/Colleges)',
      subtitleUr: 'انٹر بورڈز کوآرڈینیشن کمیشن (میٹرک و انٹر)',
      badgeEn: 'Secondary & Higher Secondary',
      badgeVariant: 'brass' as const,
      pointsEn: [
        'Matriculation (SSC / 10th Class) Certificates',
        'Intermediate (HSSC / 12th Class / FSc / FA)',
        'O-Level & A-Level Equivalence Certificates',
        'Technical & Vocational Diplomas (DAE)',
        'Provincial BISE Result Cards',
      ],
      pointsUr: [
        'میٹرک (ایس ایس سی) اسناد',
        'انٹرمیڈیٹ (ایچ ایس ایس سی / ایف ایس سی)',
        'او لیول و اے لیول مساوی اسناد',
        'ٹیکنیکل و ڈپلومہ اسناد (DAE)',
        'تمام تعلیمی بورڈز کے رزلٹ کارڈز',
      ],
      recommendedForEn: 'School, College & Cambridge Students',
      recommendedForUr: 'اسکول، کالج اور او/اے لیول طلباء',
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
            <InteractiveToolBadge labelEn="HEC DEGREE ATTESTATION" labelUr="ایچ ای سی ڈگری تصدیق" variant="seal" />
            <span className="text-xs text-slate-400 font-bold">•</span>
            <VerifiedBadge variant="header" textEn="NEW 2026 BLOCKCHAIN SYSTEM" textUr="نیا بلاک چین سسٹم 2026" />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold tracking-tight leading-tight">
            HEC Degree Attestation (2026): Complete Guide to the New Blockchain e-Attestation System
          </h1>

          <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            Everything Pakistani graduates, overseas professionals, and international applicants need to know about the Higher Education Commission’s 100% paperless Degree Attestation System (DAS) launched in May 2026.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-doc-brass font-mono">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <QrCode className="w-3.5 h-3.5 text-doc-brass" />
              <span>Immutable QR Code Verification</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>eservices.hec.gov.pk</span>
            </span>
          </div>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How Does the New HEC Blockchain Degree Attestation Work in 2026?"
          topicTitleUr="ایچ ای سی کا نیا بلاک چین ڈگری تصدیق نظام کیسے کام کرتا ہے؟"
          answerEn="On May 11, 2026, HEC officially launched a fully paperless, blockchain-secured Degree Attestation System (DAS). In-person visits to HEC centers and physical courier deliveries are completely discontinued. Apply 100% online at eservices.hec.gov.pk, pay the standardized fee of Rs. 3,000 per document, and download a tamper-proof digital e-Attestation Certificate verifiable globally via QR code."
          answerUr="11 مئی 2026 کو ایچ ای سی نے بلاک چین پر مبنی پیپرلیس ڈگری تصدیق کا نیا نظام شروع کر دیا ہے۔ دفاتر کے چکر اور کورئیر سے اصل ڈگریاں بھیجنے کا طریقہ ختم ہو چکا ہے۔ تمام کارروائی eservices.hec.gov.pk پر 3000 روپے فی دستاویز فیس کے ساتھ آن لائن ہوتی ہے اور کیو آر کوڈ پر مشتمل ڈیجیٹل ای-سرٹیفکیٹ جاری کیا جاتا ہے۔"
        />

        {/* Important Urgent Notification Alert Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-300 dark:border-amber-700/60 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
            <strong className="font-serif font-bold text-amber-900 dark:text-amber-300 block text-base">
              Important: Transition Period Ended — 100% Digital Processing Is Mandatory
            </strong>
            <p className="leading-relaxed">
              The old physical attestation submission mechanism and its transition grace period officially closed on <strong>June 30, 2026</strong>. All new applications must be initiated digitally through the revised HEC portal. Physical visits to HEC regional centers (Islamabad, Lahore, Karachi, Peshawar, Quetta) and courier deliveries of physical degrees are no longer accepted under any circumstances.
            </p>
          </div>
        </div>

        {/* Section 1: What Changed & Key Technological Advancements */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <Sparkles className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              What Changed in May 2026 and Why the Revamp Matters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-doc-ink text-white flex items-center justify-center">
                <QrCode className="w-5 h-5 text-doc-brass" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Blockchain Security &amp; QR Code
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Developed in collaboration with CMPak and Wibbow Technologies, every e-Attestation Certificate contains an immutable cryptographic hash. Employers scan the QR code to verify records directly from HEC servers.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-emerald-900 text-white flex items-center justify-center">
                <FileCheck className="w-5 h-5 text-emerald-300" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                100% Paperless &amp; No Risk of Lost Degrees
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Applicants no longer need to surrender original degrees or risk courier loss. Scanned high-resolution copies are uploaded online, and physical documents remain securely in your possession.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-blue-950 text-white flex items-center justify-center">
                <Building className="w-5 h-5 text-blue-300" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                25+ ERP-Integrated Universities
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Graduates from ERP-connected universities (such as NUST, FAST, COMSATS, LUMS, and IBA) benefit from automated pre-verification, dramatically speeding up final approval times.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: HEC vs IBCC Scope Distinction */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Crucial Scope Warning: HEC (Degrees) vs. IBCC (Matric &amp; Inter)
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            One of the most frequent errors made by Pakistani students and visa applicants is submitting high school or intermediate certificates to HEC. HEC does <strong>NOT</strong> attest Matric, Intermediate, or Cambridge qualifications:
          </p>

          <ComparisonVisual items={comparisonItems} />

          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <span className="text-slate-700 dark:text-slate-200">
              Need to attest your 10th (Matric), 12th (Inter / FSc), or O/A-Level certificates?
            </span>
            <Link
              href="/education/ibcc-matric-intermediate-attestation-guide-2026"
              className="px-4 py-2 rounded-lg bg-doc-ink text-white font-bold hover:bg-doc-seal transition flex items-center gap-1.5 shrink-0"
            >
              <span>Read IBCC Attestation Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Section 3: Step-by-Step Official Workflow */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step Application Procedure (e-Services Portal)
            </h2>
          </div>

          <ProcessStepsDiagram
            steps={stepsData}
            titleEn="HEC Digital Attestation Lifecycle (2026)"
            titleUr="ایچ ای سی ڈگری تصدیق کا مکمل طریقہ کار"
            subtitleEn="From initial eservices.hec.gov.pk registration to blockchain e-certificate download"
            subtitleUr="رجسٹریشن سے لے کر بلاک چین سرٹیفکیٹ ڈاؤن لوڈ تک کے مراحل"
            variant="dark"
          />
        </section>

        {/* Section 4: Three Distinct HEC Services Explained */}
        <section className="doc-card rounded-2xl p-6 sm:p-8 border border-doc-brass/30 space-y-4">
          <h2 className="text-xl font-serif font-bold text-doc-ink dark:text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-doc-brass" />
            <span>Three Distinct HEC Services: Ensure You Apply for the Right One</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800 border border-doc-brass/20 space-y-1.5">
              <span className="font-bold text-doc-seal text-sm block">1. Attestation (DAS)</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Confirms that a degree/transcript awarded by an HEC-recognized Pakistani university is genuine and legally recognized. Required for employment and foreign visas.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800 border border-doc-brass/20 space-y-1.5">
              <span className="font-bold text-doc-ink dark:text-white text-sm block">2. Verification (Background Check)</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Direct institutional background verification conducted between HEC and the university registrar upon formal corporate or government request.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800 border border-doc-brass/20 space-y-1.5">
              <span className="font-bold text-doc-brass text-sm block">3. Equivalence (Foreign Degrees)</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Determines the Pakistani academic equivalence of degrees obtained from foreign universities outside Pakistan. Handled via the HEC Foreign Equivalence portal.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Official Fee Structure */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Official HEC Attestation Fee Structure (2026 Revised)
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Under the revamped Degree Attestation System, HEC introduced a streamlined, flat fee structure per document for all original degrees, transcripts, and certificates:
          </p>

          <FeeTableVisual
            rows={feeRows}
            titleEn="HEC Degree Attestation Official Tariff (2026)"
            titleUr="ایچ ای سی ڈگری تصدیق فیس شیڈول 2026"
            subtitleEn="Flat tariff applied per document upload on eservices.hec.gov.pk"
            subtitleUr="آن لائن پورٹل پر فی دستاویز فیس کی سرکاری شرح"
            noteEn="Payments are made digitally via 1Link PSID or KuickPay. Fees are non-refundable once the case enters official scrutiny."
            noteUr="فیس کی ادائیگی ون لنک چالان کے ذریعے ہوتی ہے۔ جانچ شروع ہونے کے بعد فیس ناقابل واپسی ہے۔"
          />
        </section>

        {/* Section 6: Resolving Name Mismatches & Practical Challenges */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              How to Resolve Name Mismatch Between CNIC and University Degree
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>
              A frequent hurdle that delays HEC attestation occurs when the applicant’s name on their university degree does not perfectly match their active NADRA CNIC (often due to post-marriage surname changes or clerical spelling errors).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="font-bold text-doc-ink dark:text-white text-sm block">Case A: Post-Marriage Surname Change</span>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Upload your computerized <strong>Marriage Registration Certificate (Nikkahnama / MRC)</strong> issued by your local Union Council alongside husband&apos;s CNIC. HEC will cross-reference the family tree on NADRA’s database.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="font-bold text-doc-ink dark:text-white text-sm block">Case B: Spelling Discrepancy or Name Correction</span>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Provide an original <strong>Affidavit attested by a First Class Magistrate</strong> affirming that both names belong to the same person, accompanied by an original clipping from a widely circulated national newspaper announcing the name correction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Next Step — MOFA Attestation for Abroad */}
        <section className="p-6 rounded-2xl bg-slate-900 text-white border border-doc-brass/40 space-y-3">
          <div className="flex items-center gap-2 text-doc-brass font-bold text-sm">
            <Globe2 className="w-5 h-5" />
            <span>Next Step for Foreign Study &amp; Employment: Ministry of Foreign Affairs (MOFA)</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            Once you receive your blockchain e-Attestation Certificate from HEC, foreign embassies (such as UAE, Saudi Arabia, Qatar, UK, and European consulates) mandate <strong>Ministry of Foreign Affairs (MOFA) attestation</strong> as the final sovereign authorization. MOFA verifies the HEC digital signature before endorsing the document for consular legalizations.
          </p>
        </section>

        {/* Section 8: FAQ Accordion */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (HEC Attestation 2026)
            </h2>
          </div>

          <FAQAccordionVisual items={faqs} />
        </section>

        {/* Cross-Linking Hub */}
        <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
            Related Academic &amp; Civic Verification Resources
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <Link
              href="/education/ibcc-matric-intermediate-attestation-guide-2026"
              className="p-3.5 rounded-xl border border-doc-brass/30 hover:border-doc-seal bg-slate-50 dark:bg-slate-800 transition flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <span className="font-bold text-doc-ink dark:text-white block group-hover:text-doc-seal transition">
                  IBCC Matric &amp; Intermediate Attestation →
                </span>
                <span className="text-slate-500 dark:text-slate-400">SSC, HSSC, and O/A-Level Equivalence rules</span>
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
                <span className="text-slate-500 dark:text-slate-400">NUST NET, FAST NU &amp; COMSATS scoring criteria</span>
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
