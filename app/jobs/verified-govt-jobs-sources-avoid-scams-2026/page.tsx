import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ComparisonVisual, ProcessStepsDiagram, FAQAccordionVisual } from '@/components/visuals';
import {
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  ShieldAlert,
  Smartphone,
  PhoneCall,
  Landmark,
  FileWarning,
  Lock,
  Layers,
  SearchCheck,
  Building,
  Globe,
  Briefcase,
  UserCheck,
  FileCheck,
  Scale,
  BadgeAlert,
  Check,
  X
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Verified Govt Jobs Sources in Pakistan 2026 – Official Portals & Avoid Scams | Pakistan Info Hub',
  description:
    'Complete guide to finding genuine government jobs in Pakistan: Official federal & provincial portals (FPSC, PPSC, SPSC, KPPSC, BPSC, NTS, NJP), spot fake job scams, avoid advance fee traps, and NCCIA reporting.',
  keywords: [
    'today govt jobs in pakistan',
    'verified govt jobs sources pakistan 2026',
    'official govt job portals Pakistan',
    'how to spot fake job scams pakistan',
    'FPSC official website fpsc gov pk',
    'PPSC online apply ppsc gop pk',
    'NTS official jobs nts org pk',
    'National Planning and Development Authority scam',
    'report job scam NCCIA 1991',
    'genuine government job application fee Pakistan',
  ],
  openGraph: {
    title: 'Verified Govt Jobs Sources 2026 – Official Portals & Scam Avoidance Guide',
    description:
      'Learn where to find real government job openings across Pakistan and protect yourself from fraudulent recruitment rings and advance fee scams.',
    url: 'https://www.pakistaninfohub.com/jobs/verified-govt-jobs-sources-avoid-scams-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/jobs/verified-govt-jobs-sources-avoid-scams-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Jobs Portal', item: 'https://www.pakistaninfohub.com/jobs' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Verified Govt Jobs Sources & Scam Protection',
          item: 'https://www.pakistaninfohub.com/jobs/verified-govt-jobs-sources-avoid-scams-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Verified Government Jobs Sources in Pakistan: Official Portals Directory & Scam Protection Guide 2026',
      description:
        'An authoritative, evergreen citizen guide identifying legitimate federal and provincial recruitment portals, warning against active fake testing agencies and job scams, and explaining official fee payment protocols.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/jobs/verified-govt-jobs-sources-avoid-scams-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Verify a Government Job Advertisement Before Applying in Pakistan',
      description: 'Step-by-step procedure to authenticate public sector job vacancies and prevent financial loss to cyber scammers.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Locate Vacancy Directly on Official Commission Domain',
          text: 'Visit the official provincial or federal commission website ending in .gov.pk, .gop.pk, .gos.pk, or .gob.pk and locate the advertisement under Active Jobs.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Validate Case Number, BPS Scale & Syllabus',
          text: 'Confirm the official advertisement number, post reference code, required qualification, and closing date in the official PDF notification.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Cross-Check via Official Landline Helpline',
          text: 'If in doubt, call the commission official exchange directly from their verified directory, never trusting phone numbers printed on social media graphics.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Pay Fee Strictly via Official Treasury Challan or 1Link PSID',
          text: 'Deposit application fees exclusively through National Bank of Pakistan (NBP) / State Bank treasury challans or authorized government 1Link PSIDs, never to personal mobile wallets.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do genuine government jobs in Pakistan ever charge application fees via EasyPaisa or JazzCash personal accounts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NO. Legitimate government departments, Public Service Commissions (FPSC, PPSC, SPSC, KPPSC, BPSC), and authorized testing agencies (NTS, ETEA) NEVER instruct candidates to send application or processing fees to personal mobile wallet numbers or personal bank accounts. Genuine fees are deposited strictly through National Bank of Pakistan (NBP) treasury challans or automated 1Link / 1Bill PSID channels directly credited into the government exchequer.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I report a fake government job advertisement or recruitment scam in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You should report fraudulent job ads, fake testing agencies, and extortionate wallet numbers immediately to the National Cyber Crime Investigation Agency (NCCIA / formerly FIA Cyber Crime) by dialing helpline 1991 or 1799, or by lodging an electronic complaint at complaint.nccia.gov.pk.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why did scammers use the name "National Planning and Development Authority" in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Scammers deliberately fabricate authentic-sounding titles mimicking real institutions (like the Planning Commission and Ministry of Planning, Development & Special Initiatives) to exploit credibility. In February 2026, NCCIA busted a criminal ring operating under this fake name that issued counterfeit roll number slips and defrauded 10,763 candidates before being dismantled.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it safe to apply for government jobs shared exclusively in WhatsApp groups or Facebook posts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You should never apply directly through third-party links or contact numbers shared inside WhatsApp groups or Facebook ads. While legitimate vacancies are often discussed online, you must always open your browser independently, navigate to the official commission website (e.g., ppsc.gop.pk or fpsc.gov.pk), and verify that the advertisement exists on the portal before submitting personal documents or paying any fee.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the genuine government website domain rules in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'All authentic federal and provincial government institutions in Pakistan operate strictly under official top-level subdomains: .gov.pk (Federal and KP), .gop.pk (Punjab), .gos.pk (Sindh), and .gob.pk (Balochistan). Websites ending in .com, .org, .site, .xyz, or hosted on free platforms like Blogspot claiming to be government hiring departments are fraudulent.',
          },
        },
      ],
    },
  ],
};

export default function VerifiedGovtJobsSourcesScamGuidePage() {
  const breadcrumbs = [
    { nameEn: 'Jobs Portal', nameUr: 'نوکریاں اور ملازمتیں' },
    { nameEn: 'Verified Govt Jobs & Scam Protection', nameUr: 'سرکاری نوکریاں اور فراڈ سے بچاؤ کی گائیڈ' },
  ];

  const officialSourcesComparison = [
    {
      titleEn: 'Federal Jobs (FPSC & NJP)',
      titleUr: 'وفاقی نوکریاں (ایف پی ایس سی و این جے پی)',
      subtitleEn: 'Federal Ministries & Attached Depts',
      subtitleUr: 'وفاقی وزارتیں اور ملحقہ ادارے',
      badgeEn: 'FEDERAL GOVT',
      badgeUr: 'وفاقی حکومت',
      badgeVariant: 'navy' as const,
      pointsEn: [
        'FPSC (fpsc.gov.pk) conducts recruitment for BPS-16 to BPS-22 gazetted posts',
        'National Job Portal (njp.gov.pk) lists contract & regular federal ministerial jobs',
        'Application fee: Paid only via NBP Treasury Challan or 1Link PSID',
        'All notifications published in federal gazette & official portal',
      ],
      pointsUr: [
        'FPSC پر گریڈ 16 تا 22 کی سرکاری بھرتی کی جاتی ہے',
        'این جے پی پورٹل پر وفاقی وزارتوں کی ملازمتیں آتی ہیں',
        'فیس صرف این بی پی چالان یا 1Link پی ایس آئی ڈی سے جمع ہوتی ہے',
        'تمام اشتہارات آفیشل گزٹ میں شائع ہوتے ہیں',
      ],
      isPopular: true,
    },
    {
      titleEn: 'Punjab Commission (PPSC)',
      titleUr: 'پنجاب پبلک سروس کمیشن (پی پی ایس سی)',
      subtitleEn: 'Punjab Provincial Departments',
      subtitleUr: 'پنجاب کے تمام صوبائی محکمے',
      badgeEn: 'PUNJAB GOVT',
      badgeUr: 'حکومت پنجاب',
      badgeVariant: 'emerald' as const,
      pointsEn: [
        'Official Portal: ppsc.gop.pk (Never trust third-party mirrors)',
        'Covers Education, Health, Police, Revenue, and PMS examinations',
        'Fee Payment: 100% cashless via 1Bill / PSID online system (Rs. 600 regular)',
        'Automated SMS / email alerts directly from official PPSC gateway',
      ],
      pointsUr: [
        'سرکاری پورٹل: ppsc.gop.pk',
        'تعلیم، صحت، پولیس، ریونیو اور پی ایم ایس کے امتحانات',
        'فیس کی ادائیگی: 1Bill / PSID کے ذریعے آن لائن',
        'تمام ایس ایم ایس پی پی ایس سی کے آفیشل گیٹ وے سے آتے ہیں',
      ],
    },
    {
      titleEn: 'Sindh, KP & Balochistan (SPSC, KPPSC, BPSC)',
      titleUr: 'سندھ، کے پی اور بلوچستان کمیشنز',
      subtitleEn: 'Provincial Civil Service Commissions',
      subtitleUr: 'صوبائی پبلک سروس کمیشنز',
      badgeEn: 'PROVINCIAL COMMISSIONS',
      badgeUr: 'صوبائی کمیشنز',
      badgeVariant: 'brass' as const,
      pointsEn: [
        'Sindh (SPSC): spsc.gos.pk | KP (KPPSC): kppsc.gov.pk | Balochistan (BPSC): bpsc.gob.pk',
        'KPPSC / ETEA (etea.edu.pk) conducts police & teaching recruitment in KPK',
        'Fee deposited strictly via State Bank / NBP challan under provincial Head of Account',
        'Complete candidate roll numbers & merit lists uploaded publicly',
      ],
      pointsUr: [
        'سندھ (spsc.gos.pk)، کے پی (kppsc.gov.pk)، بلوچستان (bpsc.gob.pk)',
        'کے پی کے میں ایٹا (etea.edu.pk) پولیس و اساتذہ کے ٹیسٹ لیتا ہے',
        'فیس صرف سرکاری چالان پر اسٹیٹ بینک یا این بی پی میں جمع ہوتی ہے',
        'مکمل میرٹ لسٹیں اور رول نمبر آن لائن جاری کیے جاتے ہیں',
      ],
    },
    {
      titleEn: 'Authorized Testing Agencies (NTS)',
      titleUr: 'مجاز ٹیسٹنگ ایجنسیاں (این ٹی ایس)',
      subtitleEn: 'Autonomous Bodies & Semi-Govt',
      subtitleUr: 'خود مختار اور نیم سرکاری ادارے',
      badgeEn: 'AUTHORIZED TESTING',
      badgeUr: 'مجاز ٹیسٹنگ ادارہ',
      badgeVariant: 'blue' as const,
      pointsEn: [
        'National Testing Service: Official portal is nts.org.pk',
        'Conducts recruitment screening for WAPDA, OGRA, universities, and corporations',
        'Testing fees paid via 1Link 1Bill invoice code or designated commercial bank branches',
        'Never charges "registration guarantee" or "direct appointment" fees',
      ],
      pointsUr: [
        'این ٹی ایس کا اصل پورٹل: nts.org.pk',
        'واپڈا، اوگرا، جامعات اور پبلک سیکٹر کمپنیوں کے ٹیسٹ',
        'فیس صرف 1Link انوائس یا نامزد بینک برانچ میں جمع ہوتی ہے',
        'کبھی بھی براہ راست نوکری دلوانے کا کوئی معاوضہ نہیں ہوتا',
      ],
    },
  ];

  const verificationWorkflowSteps = [
    {
      stepNumber: 1,
      titleEn: 'Check the Exact Vacancy on Official .gov.pk Portal',
      titleUr: 'اشتہار کی تصدیق براہ راست آفیشل ویب سائٹ پر کریں',
      detailEn:
        'Open your web browser and independently navigate to the commission website (e.g. fpsc.gov.pk or ppsc.gop.pk). Never rely on a screenshot or shortened link sent in WhatsApp.',
      detailUr:
        'اپنے براؤزر میں کمیشن کی آفیشل ویب سائٹ کھول کر اشتہار دیکھیں۔ واٹس ایپ پر آنے والے اسکرین شاٹس یا نامعلوم لنکس پر کبھی بھروسہ نہ کریں۔',
      badgeEn: 'STEP 1: SOURCE CHECK',
      badgeUr: 'پہلا مرحلہ: پورٹل تصدیق',
    },
    {
      stepNumber: 2,
      titleEn: 'Verify Advertisement Number & Case Reference',
      titleUr: 'کیس نمبر اور اشتہار کا حوالہ چیک کریں',
      detailEn:
        'Every genuine government job carries a unique Advertisement Number and Case/Post Code (e.g. Case No. F.4-120/2026-R or Ad No. 14/2026). Match this code with the official consolidated PDF notification.',
      detailUr:
        'ہر سرکاری آسامی کا ایک مخصوص اشتہار نمبر اور کیس کوڈ ہوتا ہے۔ تصدیق کریں کہ یہ کوڈ کمیشن کے اصل پی ڈی ایف نوٹیفکیشن میں موجود ہے۔',
      badgeEn: 'STEP 2: CASE CODE',
      badgeUr: 'دوسرا مرحلہ: کوڈ چیک',
    },
    {
      stepNumber: 3,
      titleEn: 'Confirm via Official Landline Telephone Exchange',
      titleUr: 'کمیشن کے آفیشل ہیلپ لائن نمبر پر تصدیق کریں',
      detailEn:
        'If you encounter a suspicious post, call the commission official directory helpline (FPSC: 051-111-000-248, PPSC: 042-111-988-722). Never call mobile numbers printed on social media banners.',
      detailUr:
        'کسی بھی شک کی صورت میں کمیشن کے لینڈ لائن ہیلپ لائن نمبر پر رابطہ کریں۔ سوشل میڈیا بینرز پر دیے گئے موبائل نمبرز پر کبھی کال نہ کریں۔',
      badgeEn: 'STEP 3: HELPLINE CONFIRM',
      badgeUr: 'تیسرا مرحلہ: ہیلپ لائن رابطہ',
    },
    {
      stepNumber: 4,
      titleEn: 'Pay Application Fee ONLY via Official Treasury Channels',
      titleUr: 'فیس صرف سرکاری چالان یا 1Link پی ایس آئی ڈی سے ادا کریں',
      detailEn:
        'Never send money to a personal EasyPaisa, JazzCash, or private bank account. Genuine public sector fees must be deposited via National Bank of Pakistan (NBP) Challan or government 1Link / 1Bill PSID.',
      detailUr:
        'ایزی پیسہ، جاز کیش یا کسی پرائیویٹ بینک اکاؤنٹ میں رقم کبھی نہ بھیجیں۔ فیس صرف این بی پی سرکاری چالان یا 1Link پی ایس آئی ڈی پر ادا کی جاتی ہے۔',
      badgeEn: 'STEP 4: SAFE PAYMENT',
      badgeUr: 'چوتھا مرحلہ: محفوظ فیس',
    },
  ];

  const faqItems = [
    {
      questionEn: 'Do genuine government jobs in Pakistan ever charge application fees via EasyPaisa or JazzCash?',
      questionUr: 'کیا سرکاری نوکری کے لیے ایزی پیسہ یا جاز کیش پر فیس مانگی جا سکتی ہے؟',
      answerEn:
        'NO. Official government commissions (FPSC, PPSC, SPSC, KPPSC, BPSC) and authorized testing agencies (NTS, ETEA) NEVER require candidates to transfer processing fees to personal mobile wallet accounts. Application fees must be paid through official National Bank of Pakistan (NBP) treasury challans or institutional 1Link/PSID e-challan systems directly payable to the provincial or federal exchequer.',
      answerUr:
        'بالکل نہیں۔ پاکستان کا کوئی بھی سرکاری ادارہ، پبلک سروس کمیشن یا این ٹی ایس کبھی بھی ذاتی ایزی پیسہ یا جاز کیش اکاؤنٹ پر فیس نہیں مانگتا۔ فیس ہمیشہ نیشنل بینک آف پاکستان (NBP) کے سرکاری چالان یا 1Link پی ایس آئی ڈی کے ذریعے حکومتی خزانے میں جمع ہوتی ہے۔',
    },
    {
      questionEn: 'How do I report a suspected fake job advertisement or recruitment scam in Pakistan?',
      questionUr: 'جعلی نوکری کے اشتہار یا فراڈ کی شکایت کہاں درج کروائیں؟',
      answerEn:
        'Report fraudulent job listings, fake testing agency portals, and extortionate wallet numbers directly to the National Cyber Crime Investigation Agency (NCCIA / formerly FIA Cyber Crime Wing). You can call their dedicated helpline at 1991 (or 1799) or register a formal digital complaint at complaint.nccia.gov.pk. Keep screenshots of the fake ads, chat transcripts, and the mobile wallet numbers provided.',
      answerUr:
        'آپ جعلی اشتہارات اور فراڈیوں کے موبائل نمبرز کی شکایت نیشنل سائبر کرائم انویسٹی گیشن ایجنسی (NCCIA / سابقہ ایف آئی اے سائبر کرائم) کے ہیلپ لائن نمبر 1991 یا 1799 پر درج کروا سکتے ہیں، یا complaint.nccia.gov.pk پر آن لائن شکایت درج کریں۔',
    },
    {
      questionEn: 'Why did scammers use the name "National Planning and Development Authority" in 2026?',
      questionUr: 'جعلسازوں نے "نیشنل پلاننگ اینڈ ڈویلپمنٹ اتھارٹی" کا نام کیوں استعمال کیا؟',
      answerEn:
        'Cyber fraudsters invent impressive, semi-governmental titles to mislead job seekers. In February 2026, NCCIA busted a major syndicate that operated under the fabricated title "National Planning and Development Authority" and set up a fake testing service. They issued bogus roll number slips and charged application fees to 10,763 citizens before being apprehended. Always verify whether an authority exists by checking official federal ministry directories.',
      answerUr:
        'فراڈیے اصل جیسے ملتے جلتے نام استعمال کرتے ہیں تاکہ لوگ دھوکہ کھا جائیں۔ فروری 2026 میں این سی سی آئی اے نے ایک بڑا گینگ پکڑا جس نے "نیشنل پلاننگ اینڈ ڈویلپمنٹ اتھارٹی" کے نام پر جعلی ٹیسٹنگ سروس بنا کر 10,763 نوجوانوں سے فیسیں وصول کی تھیں۔',
    },
    {
      questionEn: 'Is it safe to apply for jobs shared in WhatsApp groups or Facebook posts?',
      questionUr: 'کیا واٹس ایپ گروپس اور فیس بک پر آنے والی نوکریوں پر اپلائی کرنا محفوظ ہے؟',
      answerEn:
        'While authentic job advertisements are often discussed in social media groups, applying directly through unverified links or WhatsApp numbers is dangerous. Fraudsters frequently alter official newspaper clippings to insert their own contact details. Always open your browser, visit the commission official website (e.g. ppsc.gop.pk or fpsc.gov.pk), and verify the vacancy before sharing your CNIC, CV, or paying any fee.',
      answerUr:
        'واٹس ایپ یا فیس بک پر دیے گئے لنکس پر براہ راست کاغذات بھیجنا خطرناک ہو سکتا ہے۔ فراڈیے اکثر پرانے اشتہارات میں اپنے نمبر ڈال کر پھیلا دیتے ہیں۔ ہمیشہ خود براؤزر کھول کر کمیشن کی اصل ویب سائٹ پر جا کر اشتہار چیک کریں۔',
    },
    {
      questionEn: 'How can I identify a genuine government website domain in Pakistan?',
      questionUr: 'پاکستان میں اصلی سرکاری ویب سائٹ کے ڈومین کی پہچان کیا ہے؟',
      answerEn:
        'Genuine civilian government portals in Pakistan are strictly hosted on authorized top-level domains: .gov.pk (Federal & KP), .gop.pk (Government of Punjab), .gos.pk (Government of Sindh), and .gob.pk (Government of Balochistan). Any website ending in .com, .org, .xyz, .site, or .blogspot claiming to be an official government recruitment department is 100% fake.',
      answerUr:
        'پاکستان میں تمام سرکاری محکموں کی ویب سائٹس مخصوص ڈومینز پر ہوتی ہیں: وفاق و کے پی (.gov.pk)، پنجاب (.gop.pk)، سندھ (.gos.pk)، اور بلوچستان (.gob.pk)۔ ڈاٹ کام (.com) یا ڈاٹ سائٹ (.site) والی ویب سائٹس سرکاری نہیں ہوتیں۔',
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
            <InteractiveToolBadge labelEn="RECRUITMENT SAFETY ADVISORY 2026" labelUr="سرکاری بھرتی و تحفظ رہنمائی" variant="navy" />
            <VerifiedBadge textEn="NCCIA & PSC VERIFIED GUIDELINES" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Verified Govt Jobs Sources in Pakistan: Official Portals &amp; Scam Protection Guide
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پاکستان میں اصلی سرکاری نوکریوں کے ذرائع اور جعلی بھرتی کے فراڈ سے بچاؤ کی گائیڈ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Looking for today&apos;s government jobs in Pakistan? Instead of relying on unverified social media forwards or third-party blogs,
            learn where the official, daily-updated government portals are, how genuine recruitment works across all provinces, and how to protect
            yourself from fake testing agencies and advance fee scams.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is the Safest Way to Find Real Govt Jobs & Spot Scams in Pakistan?"
          topicTitleUr="پاکستان میں اصلی سرکاری نوکریاں تلاش کرنے اور فراڈ سے بچنے کا سب سے محفوظ طریقہ کیا ہے؟"
          answerEn="Always search and apply directly on official Public Service Commission portals (fpsc.gov.pk, ppsc.gop.pk, spsc.gos.pk, kppsc.gov.pk, bpsc.gob.pk) or the National Job Portal (njp.gov.pk). The #1 red flag is any demand for application or processing fees sent to a personal EasyPaisa, JazzCash, or private bank account — legitimate government recruitment uses only official bank challans or 1Link PSIDs."
          answerUr="سرکاری نوکریاں ہمیشہ براہ راست آفیشل پبلک سروس کمیشنز (FPSC، PPSC، SPSC، KPPSC، BPSC) یا نیشنل جاب پورٹل (njp.gov.pk) پر چیک کریں۔ سب سے بڑا فراڈ یہ ہے کہ پروسیسنگ یا رجسٹریشن فیس ذاتی ایزی پیسہ، جاز کیش یا پرائیویٹ بینک اکاؤنٹ میں مانگی جاتی ہے — سرکاری فیس صرف این بی پی چالان یا 1Link کے ذریعے جمع ہوتی ہے۔"
        />

        {/* REAL CASE CAUTIONARY WARNING BANNER: February 2026 NCCIA Bust */}
        <section className="p-6 rounded-2xl bg-gradient-to-r from-red-950 via-slate-900 to-doc-ink text-white border-2 border-red-500 shadow-2xl space-y-4">
          <div className="flex items-center gap-3 border-b border-red-500/30 pb-3">
            <ShieldAlert className="w-8 h-8 text-red-400 shrink-0 animate-pulse" />
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-red-300 uppercase">
                CONFIRMED REAL CASE STUDY • NCCIA INVESTIGATION FEBRUARY 2026
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-white">
                Cautionary Real Case: The Fake &quot;National Planning and Development Authority&quot; Scam
              </h2>
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm font-sans leading-relaxed text-slate-200">
            <p>
              In <strong>February 2026</strong>, Pakistan&apos;s <strong>National Cyber Crime Investigation Agency (NCCIA)</strong> (the specialized federal cyber enforcement body established to combat cybercrime) cracked down on and dismantled a sophisticated nationwide fake job syndicate operating under the fabricated name <strong>&quot;National Planning and Development Authority&quot;</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-red-500/40 space-y-1">
                <span className="font-bold text-red-300 block flex items-center gap-1.5">
                  <FileWarning className="w-4 h-4 text-red-400 shrink-0" />
                  1. Fabricated Authority &amp; Portal
                </span>
                <p className="text-slate-300">
                  Scammers created professional-looking social media ads, counterfeit gazette notices, and a fake online &quot;testing agency&quot; website copying official government typography.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-red-500/40 space-y-1">
                <span className="font-bold text-red-300 block flex items-center gap-1.5">
                  <Coins className="w-4 h-4 text-red-400 shrink-0" />
                  2. Advance Wallet Fees Extorted
                </span>
                <p className="text-slate-300">
                  Applicants were required to transfer Rs. 1,000 to Rs. 3,500 as &quot;application &amp; screening charges&quot; to personal mobile wallet accounts (EasyPaisa and JazzCash) registered under proxy CNICs.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-red-500/40 space-y-1">
                <span className="font-bold text-red-300 block flex items-center gap-1.5">
                  <BadgeAlert className="w-4 h-4 text-red-400 shrink-0" />
                  3. 10,763 Victims &amp; Fake Slips
                </span>
                <p className="text-slate-300">
                  The syndicate issued counterfeit roll number slips and fictitious examination dates, defrauding <strong>10,763 applicants</strong> before NCCIA cyber crime operatives raided their call centers and arrested the ringleaders.
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/30 flex items-start gap-2.5 text-xs text-red-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Key Safety Takeaway:</strong> Never judge an advertisement merely by how &quot;official&quot; its logo looks. Genuine government recruitment is ALWAYS published on verified <code>.gov.pk</code> domains with traceable treasury bank challans.
              </span>
            </div>
          </div>
        </section>

        {/* Section 1: Official Sources by Province and Level */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Landmark className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Official Government Recruitment Sources in Pakistan (Always Verified)
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Bookmark these official portals. These are the primary, legal aggregators where federal ministries and provincial governments
            announce vacancies, eligibility criteria, testing syllabi, and final merit lists.
          </p>

          <ComparisonVisual
            items={officialSourcesComparison}
            titleEn="Official Federal & Provincial Recruitment Portals (2026 Directory)"
            titleUr="وفاقی و صوبائی پبلک سروس کمیشنز اور سرکاری ذرائع"
            subtitleEn="Direct official web domains, recruitment scope, and payment protocols"
            subtitleUr="اصل سرکاری ویب سائٹس، بھرتی کا دائرہ کار اور فیس کا طریقہ"
          />

          {/* Quick Links Directory Table */}
          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden mt-4">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[600px]">
                <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 text-left">Commission / Portal</th>
                    <th className="px-4 py-3 text-left">Jurisdiction</th>
                    <th className="px-4 py-3 text-left">Official Domain</th>
                    <th className="px-4 py-3 text-left">Official Payment Method</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white">
                      FPSC (Federal Public Service Commission)
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Federal Gazetted (BPS-16 to 22)</td>
                    <td className="px-4 py-3 font-mono font-bold text-doc-seal dark:text-red-300">
                      <a href="https://www.fpsc.gov.pk" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                        fpsc.gov.pk <ExternalLink className="w-3 h-3 inline" />
                      </a>
                    </td>
                    <td className="px-4 py-3 text-emerald-700 dark:text-emerald-300">NBP Treasury Challan / 1Link PSID</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white">
                      National Job Portal (NJP)
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Federal Ministries &amp; Autonomous Depts</td>
                    <td className="px-4 py-3 font-mono font-bold text-doc-seal dark:text-red-300">
                      <a href="https://njp.gov.pk" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                        njp.gov.pk <ExternalLink className="w-3 h-3 inline" />
                      </a>
                    </td>
                    <td className="px-4 py-3 text-emerald-700 dark:text-emerald-300">Free Online Apply (No mobile fees)</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white">
                      PPSC (Punjab Public Service Commission)
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Punjab Provincial Civil Posts &amp; PMS</td>
                    <td className="px-4 py-3 font-mono font-bold text-doc-seal dark:text-red-300">
                      <a href="https://www.ppsc.gop.pk" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                        ppsc.gop.pk <ExternalLink className="w-3 h-3 inline" />
                      </a>
                    </td>
                    <td className="px-4 py-3 text-emerald-700 dark:text-emerald-300">1Bill / PSID Cashless (Govt of Punjab)</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white">
                      SPSC (Sindh Public Service Commission)
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Sindh Provincial Departments &amp; CCE</td>
                    <td className="px-4 py-3 font-mono font-bold text-doc-seal dark:text-red-300">
                      <a href="https://www.spsc.gos.pk" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                        spsc.gos.pk <ExternalLink className="w-3 h-3 inline" />
                      </a>
                    </td>
                    <td className="px-4 py-3 text-emerald-700 dark:text-emerald-300">NBP / SBP Challan Form</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white">
                      KPPSC &amp; ETEA (Khyber Pakhtunkhwa)
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">KP Civil Posts, Teaching &amp; Police</td>
                    <td className="px-4 py-3 font-mono font-bold text-doc-seal dark:text-red-300">
                      <a href="https://www.kppsc.gov.pk" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                        kppsc.gov.pk <ExternalLink className="w-3 h-3 inline" />
                      </a>
                    </td>
                    <td className="px-4 py-3 text-emerald-700 dark:text-emerald-300">JazzCash / EasyPaisa (via Official ETEA 1Bill only)</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white">
                      BPSC (Balochistan Public Service Commission)
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Balochistan Provincial Posts &amp; BCS</td>
                    <td className="px-4 py-3 font-mono font-bold text-doc-seal dark:text-red-300">
                      <a href="https://www.bpsc.gob.pk" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                        bpsc.gob.pk <ExternalLink className="w-3 h-3 inline" />
                      </a>
                    </td>
                    <td className="px-4 py-3 text-emerald-700 dark:text-emerald-300">Treasury Challan Form (NBP / State Bank)</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white">
                      NTS (National Testing Service)
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Semi-Govt Corporations, WAPDA, Universities</td>
                    <td className="px-4 py-3 font-mono font-bold text-doc-seal dark:text-red-300">
                      <a href="https://www.nts.org.pk" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                        nts.org.pk <ExternalLink className="w-3 h-3 inline" />
                      </a>
                    </td>
                    <td className="px-4 py-3 text-emerald-700 dark:text-emerald-300">1Link 1Bill Invoice / Designated Banks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 2: 5 Major Red Flags of Fake Job Scams */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              5 Major Red Flags: How to Spot a Fake Govt Job Ad
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Scammers rely on predictable psychological tricks to extract money from job seekers. If you spot even one of these
            five red flags, pause immediately and do not send money or documents.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold">
                <X className="w-5 h-5 shrink-0" />
                <h3>1. Application Fee to a Personal Mobile Wallet</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                If the advertisement or contact person asks you to send Rs. 500, Rs. 1,500, or any amount to an individual
                EasyPaisa, JazzCash, SadaPay, or personal bank account number, <strong>it is 100% fraudulent</strong>. Legitimate
                recruitment fees are paid exclusively to the government exchequer via bank challan or corporate 1Link billing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold">
                <X className="w-5 h-5 shrink-0" />
                <h3>2. WhatsApp-Only Communication &amp; Free Email Providers</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Legitimate commissions and federal ministries never conduct official correspondence from <code>@gmail.com</code>,{' '}
                <code>@yahoo.com</code>, or via WhatsApp voice notes. Authentic communications arrive exclusively from verified{' '}
                <code>.gov.pk</code> email servers and registered SMS alphanumeric masks (e.g. &quot;PPSC&quot; or &quot;FPSC&quot;).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold">
                <X className="w-5 h-5 shrink-0" />
                <h3>3. Fake Domain Extensions (.com, .org, .site, .xyz)</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Pakistan civilian government websites are strictly governed under National Telecom Corporation (NTC) protocols
                and end in <strong>.gov.pk</strong>, <strong>.gop.pk</strong> (Punjab), <strong>.gos.pk</strong> (Sindh), or{' '}
                <strong>.gob.pk</strong> (Balochistan). Any website pretending to be a federal or provincial department ending in{' '}
                <code>.com</code> or <code>.site</code> is illegitimate.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold">
                <X className="w-5 h-5 shrink-0" />
                <h3>4. &quot;Direct Appointment Without Test&quot; or False Urgency</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Scammers frequently claim &quot;Direct appointment on minister quota without exam&quot; or create panic with messages like
                &quot;Last 10 seats remaining, apply within 24 hours&quot;. Government recruitment in Pakistan follows strict statutory
                quotas, written screening tests, interviews, and public merit lists.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 md:col-span-2">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold">
                <X className="w-5 h-5 shrink-0" />
                <h3>5. Non-Existent &quot;Authorities&quot; and Testing Agencies</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Fraudsters invent impressive-sounding names (like the fake <em>&quot;National Planning and Development Authority&quot;</em> or
                fabricated &quot;Pakistan Recruitment Testing Bureau&quot;). Always verify whether an organization is an actual statutory body
                by checking the official Federal Ministry of Planning or Establishment Division portal.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: ProcessStepsDiagram: How to Verify Before Applying */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <SearchCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step: How to Verify Any Govt Job Ad Before Applying
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Follow this rigorous 4-step verification sequence every time you come across a government job vacancy advertisement.
          </p>

          <ProcessStepsDiagram
            steps={verificationWorkflowSteps}
            titleEn="Official 4-Step Job Advertisement Verification Sequence"
            titleUr="سرکاری نوکری کے اشتہار کی 4 مرحلہ وار تصدیق کا طریقہ"
            subtitleEn="Protective authentication protocol to verify job legitimacy under 2026 guidelines"
            subtitleUr="سال 2026 کے ضوابط کے تحت ملازمت کی تصدیق کا محفوظ طریقہ کار"
            variant="dark"
          />
        </section>

        {/* Section 4: Official Helpline Directory for Public Verifications */}
        <section className="p-6 rounded-2xl bg-doc-paper dark:bg-slate-900 border border-doc-brass/30 space-y-4">
          <div className="flex items-center gap-2">
            <PhoneCall className="w-6 h-6 text-doc-seal" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Official Helpline &amp; Scam Reporting Directory (Pakistan)
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            If you have doubts regarding a vacancy or wish to report a cyber fraud attempt, use these verified official channels:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-sans">
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-bold text-rose-600 dark:text-rose-400 block flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                NCCIA Cyber Crime Helpline
              </span>
              <p className="text-slate-600 dark:text-slate-300">
                Dial <strong>1991</strong> or <strong>1799</strong>
              </p>
              <p className="text-slate-500 text-[11px]">
                Online portal:{' '}
                <a href="https://complaint.nccia.gov.pk" target="_blank" rel="noopener noreferrer" className="text-doc-seal hover:underline">
                  complaint.nccia.gov.pk
                </a>
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-bold text-doc-ink dark:text-white block flex items-center gap-1.5">
                <Building className="w-4 h-4 text-doc-brass shrink-0" />
                FPSC Federal Helpline
              </span>
              <p className="text-slate-600 dark:text-slate-300">
                UAN: <strong>(051) 111-000-248</strong>
              </p>
              <p className="text-slate-500 text-[11px]">Email: fpsc@fpsc.gov.pk</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-bold text-doc-ink dark:text-white block flex items-center gap-1.5">
                <Building className="w-4 h-4 text-doc-brass shrink-0" />
                PPSC Punjab Helpline
              </span>
              <p className="text-slate-600 dark:text-slate-300">
                UAN: <strong>(042) 111-988-722</strong>
              </p>
              <p className="text-slate-500 text-[11px]">Exchange: (042) 99202762</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-bold text-doc-ink dark:text-white block flex items-center gap-1.5">
                <Building className="w-4 h-4 text-doc-brass shrink-0" />
                SPSC Sindh Helpline
              </span>
              <p className="text-slate-600 dark:text-slate-300">
                Phone: <strong>(022) 9210272</strong>
              </p>
              <p className="text-slate-500 text-[11px]">Hyderabad Head Office</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-bold text-doc-ink dark:text-white block flex items-center gap-1.5">
                <Building className="w-4 h-4 text-doc-brass shrink-0" />
                KPPSC KPK Helpline
              </span>
              <p className="text-slate-600 dark:text-slate-300">
                Phone: <strong>(091) 9214131</strong>
              </p>
              <p className="text-slate-500 text-[11px]">Peshawar Head Office</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-bold text-doc-ink dark:text-white block flex items-center gap-1.5">
                <Building className="w-4 h-4 text-doc-brass shrink-0" />
                National Testing Service (NTS)
              </span>
              <p className="text-slate-600 dark:text-slate-300">
                UAN: <strong>(051) 844-444-1</strong>
              </p>
              <p className="text-slate-500 text-[11px]">Islamabad Call Center</p>
            </div>
          </div>
        </section>

        {/* Section 5: Related Verified Guides and Cross-Links */}
        <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-xl font-serif font-bold text-doc-ink dark:text-white">
              Related Citizen Guides &amp; Scam Protection Resources
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Explore our verified step-by-step guides for overseas employment, civil service rules, and financial fraud prevention:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-sans">
            <Link
              href="/jobs/beoe-protector-registration-overseas-employment-2026"
              className="p-4 rounded-xl border border-doc-brass/30 bg-doc-paper dark:bg-slate-800 hover:border-doc-brass hover:shadow-md transition flex flex-col justify-between group"
            >
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-doc-seal dark:text-red-300 uppercase">OVERSEAS WORK</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                  BEOE Protector Registration 2026 →
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-[11px]">
                  Complete e-Protector fee breakdown (Rs. 9,200), legal OEP verification, and avoiding fake visa agents.
                </p>
              </div>
            </Link>

            <Link
              href="/loans/how-to-spot-fake-loan-scheme-scams-2026"
              className="p-4 rounded-xl border border-doc-brass/30 bg-doc-paper dark:bg-slate-800 hover:border-doc-brass hover:shadow-md transition flex flex-col justify-between group"
            >
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-rose-600 dark:text-rose-400 uppercase">FRAUD PREVENTION</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                  How to Spot Fake Loan Scams →
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-[11px]">
                  Identify fake PM Youth Loan and Akhuwat WhatsApp advance fee traps and report cyber fraudsters.
                </p>
              </div>
            </Link>

            <Link
              href="/jobs/fpsc-ppsc-age-relaxation-quota-rules-2026"
              className="p-4 rounded-xl border border-doc-brass/30 bg-doc-paper dark:bg-slate-800 hover:border-doc-brass hover:shadow-md transition flex flex-col justify-between group"
            >
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-300 uppercase">CIVIL SERVICE RULES</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                  FPSC &amp; PPSC Age Relaxation &amp; Quotas →
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-[11px]">
                  Official 5-year general age relaxation rules, provincial quotas, and cutoff date calculations.
                </p>
              </div>
            </Link>

            <Link
              href="/jobs/roll-number-slip-checker-2026"
              className="p-4 rounded-xl border border-doc-brass/30 bg-doc-paper dark:bg-slate-800 hover:border-doc-brass hover:shadow-md transition flex flex-col justify-between group"
            >
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-doc-brass uppercase">TESTING TOOLS</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                  Roll Number Slip Checker 2026 →
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-[11px]">
                  Verify your examination admission slips for FPSC, PPSC, NTS, and BISE boards securely.
                </p>
              </div>
            </Link>

            <Link
              href="/jobs/nts-result-scorecard-checker-2026"
              className="p-4 rounded-xl border border-doc-brass/30 bg-doc-paper dark:bg-slate-800 hover:border-doc-brass hover:shadow-md transition flex flex-col justify-between group"
            >
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-doc-brass uppercase">RESULTS CHECKER</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                  NTS &amp; PPSC Scorecard Checker →
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-[11px]">
                  Official merit list verifier and computerized test result score checker.
                </p>
              </div>
            </Link>

            <Link
              href="/jobs/beoe-protector-fee-calculator-2026"
              className="p-4 rounded-xl border border-doc-brass/30 bg-doc-paper dark:bg-slate-800 hover:border-doc-brass hover:shadow-md transition flex flex-col justify-between group"
            >
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-doc-seal dark:text-red-300 uppercase">FEE CALCULATOR</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                  BEOE Protector Fee Calculator →
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-[11px]">
                  Calculate accurate OPF, State Life Insurance, and registration fees for foreign employment.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Section 6: FAQ Accordion */}
        <FAQAccordionVisual
          items={faqItems}
          titleEn="Frequently Asked Questions: Govt Jobs & Scam Safety in Pakistan"
          titleUr="عام طور پر پوچھے جانے والے سوالات: سرکاری نوکریاں اور فراڈ سے بچاؤ"
          subtitleEn="Authoritative legal and procedural clarifications verified by 2026 public service regulations"
          subtitleUr="سال 2026 کے سرکاری و قانونی ضوابط کی روشنی میں تصدیق شدہ جوابات"
        />
      </div>
    </>
  );
}
