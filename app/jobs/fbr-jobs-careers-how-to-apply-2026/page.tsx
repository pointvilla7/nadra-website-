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
  X,
  BookOpen,
  GraduationCap,
  Award
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FBR Jobs & Careers 2026 – How to Apply, FPSC vs NJP Channels & Avoid Scams | Pakistan Info Hub',
  description:
    'Complete evergreen guide to Federal Board of Revenue (FBR) careers: FPSC competitive recruitment for IRS & Customs (BPS-17+ & BPS-16), National Job Portal (NJP) departmental posts, testing agencies, HRMS distinction, and official scam verification.',
  keywords: [
    'FBR jobs 2026',
    'FBR careers how to apply',
    'Inland Revenue Service recruitment',
    'Pakistan Customs Service jobs',
    'FBR recruitment portal njp gov pk',
    'FPSC Inspector Inland Revenue',
    'FBR fake job scam warning',
    'FBR HRMS portal explanation',
    'FBR job eligibility criteria',
    'Appraising officer customs FPSC',
  ],
  openGraph: {
    title: 'FBR Jobs & Careers 2026 – How to Apply, FPSC vs NJP Channels & Scam Protection',
    description:
      'Evergreen official guide to applying for FBR careers: IRS, Customs, ministerial roles, FPSC vs NJP recruitment channels, eligibility rules, and scam avoidance.',
    url: 'https://www.pakistaninfohub.com/jobs/fbr-jobs-careers-how-to-apply-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/jobs/fbr-jobs-careers-how-to-apply-2026' },
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
          name: 'FBR Jobs & Careers Official Application Guide',
          item: 'https://www.pakistaninfohub.com/jobs/fbr-jobs-careers-how-to-apply-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'FBR Jobs & Careers in Pakistan: Official Recruitment Channels, Career Tracks & Scam Protection Guide 2026',
      description:
        'An authoritative, evergreen citizen guide explaining official Federal Board of Revenue (FBR) recruitment mechanisms, FPSC vs NJP portals, career tracks (IRS, Customs, Support), fee deposit verification, and scam protection.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-01',
      dateModified: '2026-09-01',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/jobs/fbr-jobs-careers-how-to-apply-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Apply for Legitimate FBR Vacancies Online in Pakistan',
      description: 'Step-by-step procedure to locate, verify, and submit applications for genuine Federal Board of Revenue positions.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Determine Post Classification & Channel',
          text: 'Check if the role is gazetted/officer level BPS-16/17+ (conducted via FPSC at fpsc.gov.pk) or departmental/support level BPS-01 to BPS-15 (conducted via National Job Portal at njp.gov.pk).',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Verify Advertisement on Official FBR Domain',
          text: 'Cross-check the vacancy circular directly on fbr.gov.pk under Careers / Vacancy Announcements. Never trust unverified WhatsApp screenshots.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Deposit Legitimate Fee via National Treasury Challan or 1Link PSID',
          text: 'For FPSC posts, deposit the official fee (Rs. 300 for BPS-16/17) at National Bank of Pakistan (NBP) / State Bank or via 1Link PSID. Never transfer funds to personal EasyPaisa or JazzCash accounts.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Submit Application via Official Designated Portal',
          text: 'Complete your profile on fpsc.gov.pk or njp.gov.pk with accurate academic, CNIC, and domicile details before the announced closing deadline.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How is FBR recruitment different from FPSC\'s other job recruitments?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'FBR does not conduct recruitment for all its posts under one single method. Gazetted officer positions (Inland Revenue Service and Pakistan Customs Service at BPS-17+, as well as BPS-16 posts like Inspector Inland Revenue and Preventive Officer) are recruited exclusively by the Federal Public Service Commission (FPSC) through the CSS competitive exam or FPSC General Recruitment. Non-gazetted and ministerial support roles (BPS-01 to BPS-15 like Data Entry Operators, UDC, LDC, and Customs Sepoys) are recruited through direct departmental processes advertised on FBR\'s website and processed via the National Job Portal (njp.gov.pk) or authorized testing agencies.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to pass the CSS competitive exam to work at FBR?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The CSS competitive examination is mandatory only for induction into the Class-I Civil Superior Services cadre (BPS-17 Assistant Collector Customs and Assistant Commissioner Inland Revenue). Thousands of other professional and administrative positions in FBR — including Inspectors (BPS-16), Appraising/Valuation Officers (BPS-16), Data Entry Operators (BPS-14), Auditors, Steno-typists, and Clerks — are recruited through FPSC General Recruitment or the National Job Portal without requiring the CSS exam.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the FBR HRMS portal, and can public candidates apply for jobs there?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, public applicants cannot apply for jobs on the FBR HRMS portal. FBR\'s HRMS (Human Resource Management Solution) is an internal administrative software strictly reserved for existing in-service FBR employees to manage service records, performance evaluations, and leave. External job seekers must apply through the National Job Portal (njp.gov.pk) or the FPSC portal (fpsc.gov.pk).',
          },
        },
        {
          '@type': 'Question',
          name: 'How often does FBR announce new career opportunities?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'FBR does not have a fixed calendar month for general hiring. Vacancies are advertised periodically as departmental requirements arise, sanctioned by the Ministry of Finance. FPSC advertises BPS-16 and BPS-17 FBR posts through its monthly Consolidated Advertisements, whereas large-scale departmental recruitment drives (for customs field formations and regional tax offices) are typically announced 1–2 times per fiscal year on fbr.gov.pk and in leading national newspapers.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there an application fee for FBR jobs, and how must it be paid?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For FPSC-advertised positions (BPS-16 and BPS-17), an official processing fee (Rs. 300 for BPS-16/17) is payable exclusively into the State Bank of Pakistan / National Bank of Pakistan under Government Treasury Head C02101-Organs of State Exam Fee (FPSC) or via 1Link PSID. For direct departmental posts advertised on NJP (njp.gov.pk), applications are often 100% free unless an external testing agency (like NTS) is formally designated, in which case fees are paid only via 1Link invoice codes. FBR NEVER collects money via personal EasyPaisa or JazzCash accounts.',
          },
        },
      ],
    },
  ],
};

export default function FBRJobsCareersHowToApplyPage() {
  const breadcrumbs = [
    { nameEn: 'Jobs Portal', nameUr: 'نوکریاں اور ملازمتیں' },
    { nameEn: 'FBR Jobs & Careers Guide', nameUr: 'ایف بی آر نوکریاں اور کیریئر رہنمائی' },
  ];

  const fbrRecruitmentChannels = [
    {
      titleEn: 'FPSC Competitive (CSS Cadre BPS-17+)',
      titleUr: 'سی ایس ایس مقابلہ امتحان (گریڈ 17+)',
      subtitleEn: 'Inland Revenue (IRS) & Customs (PCS) Officers',
      subtitleUr: 'اسسٹنٹ کمشنر ان لینڈ ریونیو و کسٹمز آفیسرز',
      badgeEn: 'GAZETTED CLASS-I',
      badgeUr: 'کلاس ون گزیٹڈ آفیسرز',
      badgeVariant: 'navy' as const,
      pointsEn: [
        'Entry through annual Central Superior Services (CSS) competitive exam by FPSC',
        'Leads to Assistant Commissioner (IRS) and Assistant Collector (Customs)',
        'Mandatory 16 years education / Bachelor’s degree (2nd division)',
        'Career progression up to BPS-21 / BPS-22 (Chief Commissioner, Member FBR)',
      ],
      pointsUr: [
        'فیڈرل پبلک سروس کمیشن کے سالانہ سی ایس ایس امتحان کے ذریعے انتخاب',
        'اسسٹنٹ کمشنر (IRS) اور اسسٹنٹ کلیکٹر (کسٹمز) کا عہدہ',
        'کم از کم 16 سالہ تعلیم / گریجویشن سیکنڈ ڈویژن لازمی',
        'گریڈ 21 اور 22 (ممبر ایف بی آر، چیف کمشنر) تک ترقی کے مواقع',
      ],
      isPopular: true,
    },
    {
      titleEn: 'FPSC General Recruitment (BPS-16)',
      titleUr: 'ایف پی ایس سی جنرل بھرتی (گریڈ 16)',
      subtitleEn: 'Inspectors, Appraising & Preventive Officers',
      subtitleUr: 'انسپکٹر ان لینڈ ریونیو، پریوینٹو و اپریزنگ آفیسرز',
      badgeEn: 'FPSC RECRUITMENT',
      badgeUr: 'ایف پی ایس سی سلیکشن',
      badgeVariant: 'emerald' as const,
      pointsEn: [
        'Advertised in FPSC Monthly Consolidated Advertisements (fpsc.gov.pk)',
        'Roles: Inspector Inland Revenue (BPS-16), Appraising Officer, Preventive Officer',
        'Screening MCQs test (English, IT, Tax/Customs laws, General Knowledge) + Interview',
        'Standard FPSC Challan fee (Rs. 300) deposited only at NBP / 1Link PSID',
      ],
      pointsUr: [
        'ایف پی ایس سی کے ماہانہ اشتہارات کے ذریعے اعلان (fpsc.gov.pk)',
        'عہدے: انسپکٹر ان لینڈ ریونیو، اپریزنگ آفیسر، پریوینٹو آفیسر',
        'تحریری ایم سی کیوز اسکریننگ ٹیسٹ اور تفصیلی انٹرویو',
        'فیس صرف این بی پی چالان یا 1Link پی ایس آئی ڈی سے جمع ہوتی ہے',
      ],
    },
    {
      titleEn: 'National Job Portal (NJP) & Departmental (BPS-01 to 15)',
      titleUr: 'نیشنل جاب پورٹل و محکمہ جاتی بھرتی (گریڈ 1 تا 15)',
      subtitleEn: 'Technical, Ministerial & Field Support Staff',
      subtitleUr: 'ڈیٹا انٹری آپریٹر، کلرک، اسٹینو ٹائپسٹ اور سپاہی',
      badgeEn: 'DIRECT / NJP',
      badgeUr: 'براہ راست بھرتی',
      badgeVariant: 'brass' as const,
      pointsEn: [
        'Advertised on fbr.gov.pk & processed online via National Job Portal (njp.gov.pk)',
        'Posts: Data Entry Operator (BPS-14), Steno-typist (BPS-14), UDC (BPS-11), LDC (BPS-09), Customs Sepoy (BPS-05)',
        'Quota system applied strictly by regional Field Formations (RTOs, LTOs, Collectorates)',
        'Skill tests (typing, shorthand) and physical standards conducted locally',
      ],
      pointsUr: [
        'ایف بی آر ویب سائٹ پر اشتہار اور این جے پی (njp.gov.pk) پر آن لائن درخواست',
        'عہدے: ڈیٹا انٹری آپریٹر، اسٹینو، یو ڈی سی، ایل ڈی سی، کسٹمز سپاہی',
        'علاقائی فیلڈ فارمیشنز (آر ٹی اوز، کلیکٹریٹس) کے علاقائی کوٹہ کے تحت بھرتی',
        'ٹائپنگ، شارٹ ہینڈ اور جسمانی معیار کے ٹیسٹ لیے جاتے ہیں',
      ],
    },
    {
      titleEn: 'Authorized Screening Agencies (e.g. NTS)',
      titleUr: 'مجاز ٹیسٹنگ ایجنسیاں (جیسے این ٹی ایس)',
      subtitleEn: 'Preliminary Screening for Large Scale Pools',
      subtitleUr: 'ابتدائی اسکریننگ اور فزیکل ٹیسٹس',
      badgeEn: 'TESTING AGENCY',
      badgeUr: 'ٹیسٹنگ سروس',
      badgeVariant: 'blue' as const,
      pointsEn: [
        'Used when FBR specifically outsources initial screening for thousands of candidates',
        'Conducts written aptitude tests, computer skill tests, or physical measurements (Sepoys)',
        'Applications submitted on agency portal (e.g. nts.org.pk) with official 1Link fee invoice',
        'Final merit list and appointments remain strictly under FBR Selection Board authority',
      ],
      pointsUr: [
        'جب ایف بی آر بڑی تعداد کے لیے ابتدائی اسکریننگ آؤٹ سورس کرے',
        'لیاقت ٹیسٹ، کمپیوٹر ٹیسٹ یا سپاہی کا فزیکل ٹیسٹ منعقد کرنا',
        'فیس صرف ایجنسی کے نامزد 1Link انوائس یا بینک چالان کے ذریعے وصولی',
        'حتمی سلیکشن اور تقرری کا اختیار مکمل طور پر ایف بی آر بورڈ کے پاس ہوتا ہے',
      ],
    },
  ];

  const processSteps = [
    {
      stepNumber: 1,
      titleEn: 'Check Official Vacancy Notices on Verified Portals',
      titleUr: 'تصدیق شدہ سرکاری پورٹلز پر اشتہار دیکھیں',
      detailEn:
        'Visit the official FBR portal (fbr.gov.pk/Jobs-Vacancy-Announcements) or FPSC (fpsc.gov.pk). Never rely on WhatsApp forwards or unverified social media graphics.',
      detailUr:
        'ہمیشہ ایف بی آر کی آفیشل ویب سائٹ یا فیڈرل پبلک سروس کمیشن کے پورٹل پر اشتہار چیک کریں۔ غیر تصدیق شدہ واٹس ایپ پیغامات پر بھروسہ نہ کریں۔',
    },
    {
      stepNumber: 2,
      titleEn: 'Identify Post BPS & Apply on the Correct Official Channel',
      titleUr: 'عہدے کا گریڈ اور متعلقہ اپلائی چینل منتخب کریں',
      detailEn:
        'For BPS-16/17+ (Inspectors, Appraising Officers, CSS Cadres), apply through FPSC Online. For BPS-01 to BPS-15 (Clerks, DEOs, Sepoys), submit your profile on the National Job Portal (njp.gov.pk).',
      detailUr:
        'گریڈ 16 اور 17 کے لیے ایف پی ایس سی پورٹل پر درخواست دیں۔ گریڈ 1 تا 15 کے لیے نیشنل جاب پورٹل (njp.gov.pk) پر آن لائن فارم جمع کروائیں۔',
    },
    {
      stepNumber: 3,
      titleEn: 'Deposit Prescribed Fee via Treasury Challan or 1Link PSID',
      titleUr: 'سرکاری چالان یا 1Link کے ذریعے فیس جمع کروائیں',
      detailEn:
        'FPSC fees (Rs. 300 for BPS-16/17) must be deposited in NBP/SBP or paid through 1Link PSID under Head C02101. NJP departmental applications are generally free. Red flag: Never send money to personal mobile wallets.',
      detailUr:
        'ایف پی ایس سی فیس صرف این بی پی یا اسٹیٹ بینک میں جمع ہوتی ہے یا 1Link سے۔ این جے پی پر اکثر درخواستیں مفت ہوتی ہیں۔ کبھی کسی ذاتی ایزی پیسہ یا جاز کیش اکاؤنٹ میں رقم نہ بھیجیں۔',
    },
    {
      stepNumber: 4,
      titleEn: 'Appear for Screening, Physical, or Skill Assessments',
      titleUr: 'اسکریننگ، ٹائپنگ یا فزیکل ٹیسٹ میں شرکت کریں',
      detailEn:
        'Download your official Roll Number Slip from fpsc.gov.pk or the designated testing body. Attend MCQs tests, typing examinations (for DEO/LDC), or physical runs (for Customs Sepoys).',
      detailUr:
        'آفیشل ویب سائٹ سے رول نمبر سلپ ڈاؤن لوڈ کریں اور ٹیسٹ سینٹر پر اصل شناختی کارڈ کے ساتھ حاضر ہوں۔',
    },
    {
      stepNumber: 5,
      titleEn: 'Document Verification & Departmental Interview',
      titleUr: 'دستاویزات کی تصدیق اور انٹرویو',
      detailEn:
        'Shortlisted candidates submit attested academic transcripts, CNIC, and domicile certificate. Qualifying the departmental selection board leads to formal offer letters verified on fbr.gov.pk.',
      detailUr:
        'شارٹ لسٹ ہونے والے امیدواروں کی تعلیمی اسناد، ڈومیسائل اور شناختی کارڈ کی جانچ کے بعد انٹرویو اور میڈیکل ہوتا ہے۔',
    },
  ];

  const faqItems = [
    {
      questionEn: 'How is FBR recruitment different from FPSC\'s other job recruitments?',
      questionUr: 'ایف بی آر کی بھرتی دیگر سرکاری نوکریوں اور ایف پی ایس سی سے کیسے مختلف ہے؟',
      answerEn:
        'FBR operates under a bifurcated recruitment structure. Senior officer ranks (Inland Revenue Service and Pakistan Customs Service at BPS-17+ via the CSS exam, and BPS-16 posts like Inspector Inland Revenue and Preventive Officer) are conducted strictly by the Federal Public Service Commission (FPSC). In contrast, clerical, ministerial, and operational support positions (BPS-01 to BPS-15 such as Data Entry Operators, UDCs, LDCs, Steno-typists, and Customs Sepoys) are recruited through direct departmental processes advertised on FBR\'s website and processed via the National Job Portal (njp.gov.pk) or authorized screening agencies.',
      answerUr:
        'ایف بی آر میں بھرتی دو الگ راستوں سے ہوتی ہے۔ گریڈ 16 اور 17 کے گزیٹڈ عہدے (ان لینڈ ریونیو، کسٹمز، انسپکٹرز) فیڈرل پبلک سروس کمیشن (FPSC) کے ذریعے سی ایس ایس یا جنرل ریکروٹمنٹ سے پر ہوتے ہیں۔ جبکہ گریڈ 1 تا 15 کے عہدے (ڈیٹا انٹری آپریٹر، کلرک، سپاہی) نیشنل جاب پورٹل (njp.gov.pk) اور ایف بی آر کے براہ راست اشتہارات کے ذریعے بھرتی کیے جاتے ہیں۔',
    },
    {
      questionEn: 'Do I need to take the CSS competitive examination to work at FBR?',
      questionUr: 'کیا ایف بی آر میں ملازمت کے لیے سی ایس ایس (CSS) امتحان پاس کرنا لازمی ہے؟',
      answerEn:
        'No. The CSS exam is required ONLY for induction into the Class-I Civil Superior Services cadre (BPS-17 Assistant Collector Customs and Assistant Commissioner Inland Revenue). You do not need CSS for hundreds of other positions such as Inspector Inland Revenue (BPS-16), Appraising Officer (BPS-16), Data Entry Operator (BPS-14), Assistant, Auditor, Steno-typist, or Customs Sepoy. These are filled through FPSC General Recruitment or NJP departmental exams based on standard subject/academic qualifications.',
      answerUr:
        'نہیں! سی ایس ایس امتحان صرف گریڈ 17 کے افسران (اسسٹنٹ کمشنر ان لینڈ ریونیو اور اسسٹنٹ کلیکٹر کسٹمز) کے لیے لازمی ہے۔ انسپکٹر (گریڈ 16)، اپریزنگ آفیسر، ڈیٹا انٹری آپریٹر، کلرک اور دیگر سینکڑوں اسامیوں کے لیے سی ایس ایس کی ضرورت نہیں ہوتی۔',
    },
    {
      questionEn: 'What is the FBR HRMS portal, and can job seekers apply there?',
      questionUr: 'ایف بی آر ایچ آر ایم ایس (HRMS) کیا ہے اور کیا نوکری کے خواہش مند اس پر فارم جمع کر سکتے ہیں؟',
      answerEn:
        'The FBR HRMS (Human Resource Management Solution) is an internal management system strictly for active, currently-serving FBR employees to handle payroll, attendance, performance appraisals (PERs/ACRs), and internal transfers. It is NOT a public recruitment portal. External candidates must NEVER look for application forms on the internal HRMS module; all public vacancies are posted on fbr.gov.pk/Jobs-Vacancy-Announcements and processed through njp.gov.pk or fpsc.gov.pk.',
      answerUr:
        'ایف بی آر ایچ آر ایم ایس (HRMS) صرف ادارے کے حاضر سروس ملازمین کے لیے اندرونی پورٹل ہے جس پر حاضری، تنخواہ اور ریکارڈ رکھا جاتا ہے۔ نوکری کے خواہش مند افراد اس پورٹل پر اپلائی نہیں کر سکتے، ان کے لیے نیشنل جاب پورٹل (njp.gov.pk) یا ایف پی ایس سی کی ویب سائٹ ہے۔',
    },
    {
      questionEn: 'How often does FBR post new job openings, and where are they officially published?',
      questionUr: 'ایف بی آر میں نئی ملازمتوں کے اشتہارات کتنی بار آتے ہیں اور کہاں شائع ہوتے ہیں؟',
      answerEn:
        'FBR job openings are announced periodically based on sanctioned departmental vacancies approved by the Federal Cabinet and Finance Division. FPSC features FBR gazetted vacancies across its monthly consolidated advertisements throughout the year. Departmental drives for field formations (Regional Tax Offices, Large Taxpayers Offices, and Customs Collectorates across Karachi, Lahore, Islamabad, Quetta, Peshawar, etc.) are published in national English/Urdu daily newspapers and on fbr.gov.pk, typically 1 to 2 times annually.',
      answerUr:
        'ایف بی آر میں جب بھی اسامیاں خالی ہوتی ہیں، وفاقی حکومت کی منظوری سے اشتہارات جاری کیے جاتے ہیں۔ ایف پی ایس سی اپنے ماہانہ اشتہارات میں گریڈ 16 اور 17 کی اسامیاں دیتا ہے، جبکہ فیلڈ دفاتر (آر ٹی اوز اور کسٹمز کلیکٹریٹس) کے لیے سال میں ایک یا دو بار بڑے اشتہارات اخبارات اور fbr.gov.pk پر آتے ہیں۔',
    },
    {
      questionEn: 'Is there an application fee for FBR jobs, and how is it safely paid?',
      questionUr: 'کیا ایف بی آر کی نوکریوں کے لیے کوئی فیس ہوتی ہے اور اس کی ادائیگی کا محفوظ طریقہ کیا ہے؟',
      answerEn:
        'For FPSC recruitments (BPS-16/17), the government fee (Rs. 300 for BPS-16 and BPS-17) is deposited strictly into the State Bank / National Bank of Pakistan under Government Treasury Head C02101 or via official 1Link PSID. For direct departmental posts on NJP, applications are usually free. Red flag warning: Legitimate government departments NEVER ask applicants to send money to personal JazzCash or EasyPaisa mobile numbers. Any request for mobile wallet transfers is a cyber scam.',
      answerUr:
        'ایف پی ایس سی کی اسامیوں کے لیے 300 روپے فیس نیشنل بینک چالان یا 1Link کے ذریعے سرکاری خزانے میں جمع ہوتی ہے۔ نیشنل جاب پورٹل پر زیادہ تر نوکریاں مفت ہوتی ہیں۔ یاد رکھیں کہ سرکاری محکمے کبھی بھی ایزی پیسہ یا جاز کیش پر فیس نہیں مانگتے۔',
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
            <InteractiveToolBadge labelEn="FBR RECRUITMENT PATHWAYS 2026" labelUr="ایف بی آر بھرتی و کیریئر گائیڈ" variant="navy" />
            <VerifiedBadge textEn="FBR & FPSC VERIFIED CHANNELS" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            FBR Jobs &amp; Careers in Pakistan: Official Application Channels, Career Tracks &amp; Scam Protection Guide
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              ایف بی آر میں ملازمت: اصلی بھرتی پورٹلز، کیریئر شعبے اور جعلی اشتہارات سے بچاؤ کی مکمل رہنمائی
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Aspiring to build a career in Pakistan&apos;s apex tax administration? The Federal Board of Revenue (FBR) recruits through distinct
            official federal pipelines. Learn how competitive officer cadres, professional inspectors, and departmental support staff are inducted,
            how to apply on genuine government portals, and how to verify real advertisements against cyber recruitment scams.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How Does FBR Recruitment Work and Where Should You Apply?"
          topicTitleUr="ایف بی آر میں بھرتی کا کیا طریقہ کار ہے اور کہاں اپلائی کرنا چاہیے؟"
          answerEn="FBR recruits through two primary official streams: (1) Federal Public Service Commission (fpsc.gov.pk) for competitive BPS-17+ officers (CSS exam for Inland Revenue & Customs) and BPS-16 posts (Inspectors, Appraising Officers); and (2) Direct Departmental Recruitment via the National Job Portal (njp.gov.pk) for BPS-01 to BPS-15 support roles (DEO, Clerks, Steno, Sepoys). FBR's internal HRMS portal is strictly for existing employees and cannot be used by job seekers. Genuine application fees are deposited exclusively via NBP treasury challans or 1Link PSIDs — never via personal mobile wallets."
          answerUr="ایف بی آر میں بھرتی دو اہم طریقوں سے ہوتی ہے: (1) فیڈرل پبلک سروس کمیشن (fpsc.gov.pk) کے ذریعے گریڈ 17+ آفیسرز (سی ایس ایس) اور گریڈ 16 کے انسپکٹرز کی بھرتی؛ اور (2) نیشنل جاب پورٹل (njp.gov.pk) کے ذریعے گریڈ 1 تا 15 کے سپورٹ اسٹاف (ڈیٹا انٹری، کلرک، سپاہی) کی بھرتی۔ ایف بی آر کا اندرونی HRMS پورٹل نوکری کے امیدواروں کے لیے نہیں ہے۔ فیس صرف این بی پی چالان یا 1Link سے ادا ہوتی ہے۔"
        />

        {/* 4 Recruitment Channels Comparison Visual */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-doc-seal" />
              <h2 className="text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
                The 4 Official Channels of FBR Recruitment
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl">
              Understanding which portal handles your target position prevents wasted application effort and protects you from fraudulent third-party portals.
            </p>
          </div>

          <ComparisonVisual
            items={fbrRecruitmentChannels}
          />
        </section>

        {/* Career Tracks in Detail */}
        <section className="rounded-3xl border border-doc-brass/30 bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-doc-brass/20 pb-4">
            <Building className="w-7 h-7 text-doc-brass shrink-0" />
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
                FBR&apos;s Core Career Tracks: IRS, Customs &amp; Technical Support
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                A breakdown of organizational wings, operational roles, and day-to-day functions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Inland Revenue Service */}
            <div className="rounded-2xl bg-white dark:bg-slate-800 p-5 border border-slate-200 dark:border-slate-700 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-doc-navy dark:text-blue-400 font-bold text-sm">
                <Scale className="w-5 h-5 text-doc-seal" />
                <span>1. Inland Revenue Service (IRS)</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                The domestic tax administration wing responsible for direct taxation (Income Tax), Sales Tax, and Federal Excise Duty (FED).
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Officer Cadres:</strong> Assistant Commissioner (BPS-17), Deputy Commissioner, Commissioner, Chief Commissioner.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Operational Posts:</strong> Inspector Inland Revenue (BPS-16), Audit Officers, Tax Associates.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Workplace:</strong> Regional Tax Offices (RTOs), Medium Taxpayer Units (MTOs), and Large Taxpayers Offices (LTOs).</span>
                </li>
              </ul>
            </div>

            {/* Pakistan Customs Service */}
            <div className="rounded-2xl bg-white dark:bg-slate-800 p-5 border border-slate-200 dark:border-slate-700 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-doc-navy dark:text-blue-400 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-doc-seal" />
                <span>2. Pakistan Customs Service (PCS)</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Guards Pakistan&apos;s economic borders, regulates international trade, prevents smuggling, and assesses customs tariffs and import duties.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Officer Cadres:</strong> Assistant Collector (BPS-17), Deputy Collector, Collector, Director General.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Operational Posts:</strong> Appraising / Valuation Officers (BPS-16), Preventive Officers (BPS-16), Customs Sepoys (BPS-05).</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Workplace:</strong> Seaports (Karachi Port, Port Qasim, Gwadar), International Airports, Dry Ports, Border Customs Stations (Torkham, Chaman, Wagah).</span>
                </li>
              </ul>
            </div>

            {/* IT, Technical & Support Services */}
            <div className="rounded-2xl bg-white dark:bg-slate-800 p-5 border border-slate-200 dark:border-slate-700 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-doc-navy dark:text-blue-400 font-bold text-sm">
                <Briefcase className="w-5 h-5 text-doc-seal" />
                <span>3. IT, PRAL &amp; Ministerial Support</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                The technical backbone powering digital tax declarations, online Iris 2.0 returns, data warehousing, and day-to-day administration.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>IT &amp; PRAL:</strong> Software Engineers, Database Administrators, Network Specialists (Pakistan Revenue Automation Ltd).</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Ministerial Staff:</strong> Data Entry Operators (BPS-14), Steno-typists (BPS-14), UDC (BPS-11), LDC (BPS-09).</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Ancillary Support:</strong> Drivers, Dispatch Riders, Record Keepers, Notice Servers, Security Personnel.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process Flow Diagram */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-doc-seal" />
              <h2 className="text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
                Step-by-Step Procedure to Apply for Real FBR Vacancies
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl">
              Follow this structured roadmap to submit valid applications and avoid disqualification due to incorrect portal usage or fraudulent links.
            </p>
          </div>

          <ProcessStepsDiagram
            steps={processSteps}
          />
        </section>

        {/* Official Portals Directory — Evergreen & Reliable */}
        <section className="rounded-3xl border-2 border-doc-brass/40 bg-gradient-to-br from-doc-ink via-slate-900 to-doc-ink text-white p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex items-center gap-3 border-b border-doc-brass/30 pb-4">
            <Globe className="w-7 h-7 text-doc-brass shrink-0" />
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-white">
                Official Directory: Where to Check Current, Genuine FBR Openings
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Bookmark these official .gov.pk government portals for real-time, verified announcements.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-doc-brass font-mono">FBR Official Website</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">PRIMARY</span>
              </div>
              <p className="text-slate-300 text-xs">
                All official recruitment notifications, circulars, syllabi, and shortlists are published under the Careers / Vacancy Announcements section.
              </p>
              <a
                href="https://www.fbr.gov.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-doc-brass font-bold hover:underline text-xs pt-1"
              >
                <span>fbr.gov.pk</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-doc-brass font-mono">FPSC Official Portal</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 font-bold">GAZETTED BPS-16/17+</span>
              </div>
              <p className="text-slate-300 text-xs">
                Recruitment portal for CSS exams, Inspector Inland Revenue, Appraising &amp; Preventive Officers, and senior statistical analysts.
              </p>
              <a
                href="https://www.fpsc.gov.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-doc-brass font-bold hover:underline text-xs pt-1"
              >
                <span>fpsc.gov.pk</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-doc-brass font-mono">National Job Portal</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-900/60 text-amber-300 font-bold">DEPARTMENTAL BPS 1-15</span>
              </div>
              <p className="text-slate-300 text-xs">
                Federal Government single-window platform for submitting online applications for clerical, technical, and customs field positions.
              </p>
              <a
                href="https://njp.gov.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-doc-brass font-bold hover:underline text-xs pt-1"
              >
                <span>njp.gov.pk</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-doc-ink/90 border border-doc-brass/30 text-xs space-y-2">
            <span className="font-bold text-doc-brass flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
              Important Clarification: The Internal FBR HRMS Portal
            </span>
            <p className="text-slate-300 leading-relaxed">
              You may see references to the &quot;FBR HRMS portal&quot; (Human Resource Management Solution) in online forums. Please note that
              this portal is <strong>strictly an internal administration tool</strong> for currently serving FBR officers to manage service records,
              leave, and Annual Confidential Reports (ACRs). <strong>Job applicants cannot submit applications on the internal HRMS.</strong> Always use
              the public recruitment portals listed above.
            </p>
          </div>
        </section>

        {/* FBR Recruitment Scam Warning Box (Cross-Linked) */}
        <section className="p-6 rounded-2xl bg-gradient-to-r from-red-950 via-slate-900 to-doc-ink text-white border-2 border-red-500 shadow-2xl space-y-4">
          <div className="flex items-center gap-3 border-b border-red-500/30 pb-3">
            <ShieldAlert className="w-8 h-8 text-red-400 shrink-0 animate-pulse" />
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-red-300 uppercase">
                SCAM ALERT &amp; CITIZEN ADVISORY • FAKE FBR RECRUITMENT CIRCULARS
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-white">
                How to Spot Fake FBR Job Circulars &amp; Fraudulent Appointment Letters
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
            Because FBR is a prestigious federal institution, fraudulent recruitment syndicates regularly circulate counterfeit job advertisements,
            fabricated &quot;Selection Letters&quot;, and bogus interview call notices demanding &quot;Medical Screening Fees&quot; or &quot;Uniform Deposits&quot;
            via personal EasyPaisa and JazzCash accounts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-red-500/40 space-y-1">
              <span className="font-bold text-red-300 flex items-center gap-1.5">
                <FileWarning className="w-4 h-4 text-red-400 shrink-0" />
                1. Demand for Mobile Wallet Fees
              </span>
              <p className="text-slate-300">
                Real FBR and FPSC processes <strong>never</strong> ask for fee payments to personal mobile wallets or Easypaisa/JazzCash numbers.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-red-500/40 space-y-1">
              <span className="font-bold text-red-300 flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-red-400 shrink-0" />
                2. Unofficial Email / WhatsApp Links
              </span>
              <p className="text-slate-300">
                Official communications come only from <code className="text-amber-300">@fbr.gov.pk</code> or <code className="text-amber-300">@fpsc.gov.pk</code> domains, never from generic Gmail, Yahoo, or WhatsApp accounts.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-red-500/40 space-y-1">
              <span className="font-bold text-red-300 flex items-center gap-1.5">
                <BadgeAlert className="w-4 h-4 text-red-400 shrink-0" />
                3. Direct Appointment &quot;Guarantees&quot;
              </span>
              <p className="text-slate-300">
                Anyone claiming to provide direct FBR appointments for money is committing a criminal offence. All hirings follow strict merit quotas.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-red-500/30">
            <span className="text-slate-300">
              For complete nationwide scam patterns, testing agency registries, and reporting procedures:
            </span>
            <Link
              href="/jobs/verified-govt-jobs-sources-avoid-scams-2026"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold transition shadow"
            >
              <span>Read Verified Govt Jobs &amp; Scam Avoidance Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* General Eligibility & Quota Overview */}
        <section className="rounded-3xl border border-doc-brass/30 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center gap-3 border-b border-doc-brass/20 pb-4">
            <GraduationCap className="w-7 h-7 text-doc-brass shrink-0" />
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
                General Eligibility Patterns, Provincial Quotas &amp; Age Rules
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Standard baseline requirements applicable to Federal Board of Revenue recruitment.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-doc-seal" />
                Educational Qualifications by Role Level
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <strong>BPS-17 (Assistant Commissioner / Collector):</strong> 16 years education (Master’s or 4-year Bachelor’s in Economics, Commerce, Law, Business Administration, Computer Science, or equivalent) via CSS.
                </li>
                <li className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <strong>BPS-16 (Inspector Inland Revenue / Customs Officer):</strong> Bachelor&apos;s degree (14 or 16 years) with Economics, Business Administration, Commerce, Statistics, Law, or Computer Science.
                </li>
                <li className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <strong>BPS-09 to BPS-14 (Clerical &amp; Technical):</strong> Intermediate (FA/FSc/ICom/ICS) or Bachelor&apos;s with mandatory typing speed certification (30 to 40 wpm).
                </li>
                <li className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <strong>BPS-05 (Customs Sepoy):</strong> Matriculation (Science/Arts) with specified physical measurements (Height: 5&apos;6&quot;, Chest: 32&quot;-33.5&quot;, and 1-mile physical running test).
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-doc-seal" />
                Federal Quotas &amp; General Age Relaxation
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                As a federal department, FBR strictly allocates positions based on the official Federal Government Provincial Quota formula:
              </p>
              <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 text-xs">
                <li className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <span>Open Merit (All Pakistan)</span>
                  <span className="font-mono font-bold text-doc-seal">7.5%</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <span>Punjab (Including ICT)</span>
                  <span className="font-mono font-bold text-doc-seal">50%</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <span>Sindh (Rural: 11.4% | Urban: 7.6%)</span>
                  <span className="font-mono font-bold text-doc-seal">19%</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <span>Khyber Pakhtunkhwa (KPK)</span>
                  <span className="font-mono font-bold text-doc-seal">11.5%</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <span>Balochistan</span>
                  <span className="font-mono font-bold text-doc-seal">6%</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <span>Ex-FATA (3%), AJK (2%), Gilgit-Baltistan (1%)</span>
                  <span className="font-mono font-bold text-doc-seal">6%</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/jobs/fpsc-ppsc-age-relaxation-quota-rules-2026"
                  className="text-xs font-bold text-doc-seal dark:text-red-400 hover:underline flex items-center gap-1"
                >
                  <span>Read full 5-year General Age Relaxation &amp; Government Servant Rules</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Genuinely Useful FAQ Section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-doc-seal" />
              <h2 className="text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
                Frequently Asked Questions About FBR Careers
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl">
              Authoritative answers to the most common questions regarding FBR recruitment, testing procedures, fee payments, and qualifications.
            </p>
          </div>

          <FAQAccordionVisual items={faqItems} />
        </section>

        {/* Cross-Linking Related Guides */}
        <section className="rounded-3xl border border-doc-brass/30 bg-slate-50 dark:bg-slate-900/40 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-serif font-bold text-doc-ink dark:text-white">
            Related Official Recruitment &amp; Public Sector Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link
              href="/jobs/verified-govt-jobs-sources-avoid-scams-2026"
              className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition group shadow-sm"
            >
              <span className="text-xs font-mono font-bold text-doc-seal dark:text-red-400">RECRUITMENT SAFETY</span>
              <h3 className="text-sm font-bold text-doc-ink dark:text-white group-hover:text-doc-seal transition mt-1">
                Verified Govt Jobs Sources &amp; Scam Avoidance Guide 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Official federal and provincial portals (FPSC, PPSC, SPSC, KPPSC, NTS) and NCCIA cyber reporting.
              </p>
            </Link>

            <Link
              href="/jobs/fpsc-ppsc-age-relaxation-quota-rules-2026"
              className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition group shadow-sm"
            >
              <span className="text-xs font-mono font-bold text-doc-seal dark:text-red-400">AGE &amp; QUOTAS</span>
              <h3 className="text-sm font-bold text-doc-ink dark:text-white group-hover:text-doc-seal transition mt-1">
                FPSC &amp; PPSC Age Relaxation &amp; Quota Rules 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                5-year general relaxation, 10-year govt servant quotas, and domicile calculation rules.
              </p>
            </Link>

            <Link
              href="/tax/fbr-active-taxpayer-status-helper-2026"
              className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition group shadow-sm"
            >
              <span className="text-xs font-mono font-bold text-doc-seal dark:text-red-400">FBR TAX SERVICES</span>
              <h3 className="text-sm font-bold text-doc-ink dark:text-white group-hover:text-doc-seal transition mt-1">
                FBR Active Taxpayer List (ATL) Status Check 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Check FBR tax filer status by CNIC, SMS 9966 lookup, and Iris portal verification.
              </p>
            </Link>
          </div>
        </section>

        {/* Ad Placement */}
        <AdPlacementZone slotId="jobs-article-bottom" format="horizontal" />
      </div>
    </>
  );
}
