import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, ComparisonVisual, FAQAccordionVisual, FeeTableVisual } from '@/components/visuals';
import {
  GraduationCap,
  Calculator,
  Award,
  Calendar,
  Clock,
  Building2,
  CheckCircle2,
  AlertTriangle,
  FileCheck2,
  ArrowRight,
  Info,
  ShieldCheck,
  ExternalLink,
  BookOpen,
  MapPin,
  Stethoscope,
  Sparkles,
  Layers,
  HelpCircle,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'MDCAT Result 2026 & Medical College Merit Admission: PMDC Aggregate Formula & Portals',
  description:
    'Comprehensive verified guide to MDCAT 2026 results, official PM&DC 50-40-10 aggregate formula with worked examples, centralized provincial medical college admission portals (UHS, DUHS, KMU, BUMHS, SZABMU), and document verification.',
  keywords: [
    'mdcat result 2026',
    'medical college merit admission 2026',
    'pmdc aggregate formula calculator',
    'uhs merit list 2026 mbbs bds',
    'kmu centralized admission portal',
    'duhs sindh medical college admission 2026',
    'bumhs quetta mbbs merit list',
    'szabmu merit list 2026',
    'mdcat passing percentage 2026',
    'fsc matric mdcat weightage formula',
  ],
  openGraph: {
    title: 'MDCAT Result 2026 & Medical College Merit Admission Guide',
    description:
      'Verified guide to MDCAT 2026 results, PM&DC merit aggregate calculation, provincial centralized admission portals, and step-by-step document confirmation.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/education/mdcat-result-medical-college-merit-admission-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/education/mdcat-result-medical-college-merit-admission-2026',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com/' },
        { '@type': 'ListItem', position: 2, name: 'Education', item: 'https://www.pakistaninfohub.com/education' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'MDCAT Result & Medical College Merit Admission 2026',
          item: 'https://www.pakistaninfohub.com/education/mdcat-result-medical-college-merit-admission-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'MDCAT Result 2026 & Medical College Merit Admission: PMDC Aggregate Formula & Portals',
      description:
        'Authoritative consumer guide detailing the MDCAT 2026 examination schedule, PM&DC 50-40-10 aggregate calculation formula with worked examples, centralized provincial medical college admission portals, and merit list procedures.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-09',
      dateModified: '2026-09-09',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/education/mdcat-result-medical-college-merit-admission-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Calculate Medical College Aggregate & Apply for Centralized MBBS/BDS Admission in Pakistan',
      description:
        'Step-by-step procedure for pre-medical students to compute PM&DC merit aggregate score, apply through provincial admitting university portals, and confirm college allocation.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Download Official MDCAT Scorecard',
          text: 'Retrieve your official roll number result card from the PM&DC national portal (mdcat.pmdc.pk) or your provincial conducting university portal.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Calculate Weighted Aggregate Score',
          text: 'Apply the PM&DC formula: 10% Matriculation + 40% FSc Pre-Medical + 50% MDCAT score (out of 180).',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Register on Provincial Centralized Portal',
          text: 'Open your respective provincial admitting portal (UHS for Punjab, DUHS/LUMHS for Sindh, KMU for KP, BUMHS for Balochistan, SZABMU for Federal/ICT).',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Submit College Preference Priority List',
          text: 'Carefully rank public and private medical/dental colleges in your strict order of preference before the lock deadline.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Track Provisional & Selection Merit Lists',
          text: 'Review provisional merit lists for objections, then track Selection Round 1, Round 2, and Round 3 upward movement lists.',
        },
        {
          '@type': 'HowToStep',
          position: 6,
          name: 'Confirm Admission with Documents and Fee Challan',
          text: 'Visit the designated admitting college within 3 to 5 days with original credentials, medical fitness certificate, and paid bank fee challan.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'When will MDCAT 2026 results be announced?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The MDCAT 2026 examination is scheduled for Sunday, September 20, 2026 (rescheduled by PM&DC). Official results are typically compiled and announced within 7 to 10 days of the test date, making early October 2026 the expected result window.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is my aggregate merit score calculated for MBBS/BDS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'According to the official PM&DC regulations, the aggregate is calculated as: 10% Matriculation + 40% Intermediate (FSc Pre-Medical) + 50% MDCAT. The formula is: (Matric % × 0.10) + (FSc % × 0.40) + (MDCAT Marks / 180 × 50).',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I apply to public medical colleges in a different province?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Generally no for general open-merit seats. Public medical colleges strictly admit candidates who possess the domicile of that respective province. However, a limited number of reciprocal seats (e.g., Punjab seats in KP or Sindh and vice versa) and federal quota seats are allocated through inter-provincial quotas managed by provincial health departments.',
          },
        },
        {
          '@type': 'Question',
          name: "What happens if I don't make the first merit list?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Candidates who miss the first selection list should monitor the 2nd and 3rd upgraded selection lists. When higher-merit candidates forfeit their seats or opt for another college/BDS, seats fall vacant and the closing merit drops downward. You can also explore BDS or centralized private medical college admissions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a private medical college option if I miss public college merit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Private medical colleges conduct centralized admissions through the designated provincial university under PM&DC supervision. Candidates must meet the minimum PM&DC qualifying cut-off (55% for MBBS, 50% for BDS). Private medical college merit is lower than public sector, but tuition fees are significantly higher.',
          },
        },
        {
          '@type': 'Question',
          name: 'What original documents do I need for physical admission confirmation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You must provide original Matric/SSC Sanad and mark sheet, FSc Pre-Medical Sanad/DMC (or IBCC equivalence), official MDCAT 2026 result card, original Domicile certificate (and PRC for Sindh), CNIC/B-Form, father’s CNIC, 8–12 passport photographs, medical fitness certificate from a DHQ/teaching hospital, PKR 100/500 stamp paper surety bond, and the paid admission fee challan.',
          },
        },
      ],
    },
  ],
};

const portalRows = [
  {
    serviceEn: 'Punjab Public & Private Medical Colleges',
    serviceUr: 'پنجاب میڈیکل و ڈینٹل کالجز',
    normal: 'University of Health Sciences (UHS), Lahore',
    urgent: 'uhs.edu.pk / admissions.uhs.edu.pk',
    executive: '3,400+ Public MBBS Seats',
    tagEn: 'Punjab Portal',
  },
  {
    serviceEn: 'Sindh Public Medical Colleges (Regional/Zonal)',
    serviceUr: 'سندھ پبلک میڈیکل کالجز (ریجنل سسٹم)',
    normal: 'DUHS Karachi / JSMU / LUMHS Jamshoro / SMBBMU',
    urgent: 'admissions.duhs.edu.pk | lumhs.edu.pk',
    executive: 'Karachi & Interior District Tagged Seats',
    tagEn: 'Sindh Portals',
  },
  {
    serviceEn: 'Khyber Pakhtunkhwa (KP) Medical Colleges',
    serviceUr: 'خیبر پختونخوا میڈیکل کالجز',
    normal: 'Khyber Medical University (KMU), Peshawar',
    urgent: 'cas.kmu.edu.pk / kmu.edu.pk',
    executive: 'Centralized Admission System (CAS)',
    tagEn: 'KP Portal',
  },
  {
    serviceEn: 'Balochistan Medical & Dental Colleges',
    serviceUr: 'بلوچستان میڈیکل و ڈینٹل کالجز',
    normal: 'Bolan University of Medical & Health Sciences (BUMHS)',
    urgent: 'bumhs.edu.pk',
    executive: 'Quetta, Makran, Loralai, Jhalawan Colleges',
    tagEn: 'Balochistan Portal',
  },
  {
    serviceEn: 'Federal Capital (ICT), AJK, GB & Quota Seats',
    serviceUr: 'وفاقی دارالحکومت، آزاد کشمیر و گلگت بلتستان',
    normal: 'SZABMU, Islamabad',
    urgent: 'szabmu.edu.pk',
    executive: 'Federal Medical College (FMC) & Quotas',
    tagEn: 'Federal Portal',
  },
  {
    serviceEn: 'National Regulatory Body & Master Scorecard',
    serviceUr: 'قومی نگراں ادارہ و رزلٹ پورٹل',
    normal: 'Pakistan Medical and Dental Council (PM&DC)',
    urgent: 'pmdc.pk / mdcat.pmdc.pk',
    executive: 'National Eligibility Database & Policies',
    tagEn: 'National Regulator',
  },
];

const admissionSteps = [
  {
    stepNumber: '01',
    titleEn: 'Download Official MDCAT Scorecard',
    titleUr: 'آفیشل ایم ڈی کیٹ رزلٹ کارڈ ڈاؤن لوڈ کریں',
    descEn:
      'Access mdcat.pmdc.pk or your regional university portal with your Roll Number and CNIC. Download and print multiple colored copies of your official computerized scorecard.',
    descUr:
      'پی ایم ڈی سی کی ویب سائٹ (mdcat.pmdc.pk) سے اپنا رول نمبر اور شناختی کارڈ درج کر کے آفیشل کمپیوٹرائزڈ رزلٹ کارڈ ڈاؤن لوڈ اور پرنٹ کریں۔',
  },
  {
    stepNumber: '02',
    titleEn: 'Compute Your Exact Aggregate Percentage',
    titleUr: 'پی ایم ڈی سی فارمولا کے مطابق اپنا ایگریگیٹ نکالیں',
    descEn:
      'Apply the official PM&DC weightage: Matric (10%) + FSc Pre-Medical (40%) + MDCAT (50%). Verify you cross the 55% MBBS (99/180) or 50% BDS (90/180) qualifying benchmark.',
    descUr:
      'میٹرک کا 10 فیصد، ایف ایس سی پری میڈیکل کا 40 فیصد اور ایم ڈی کیٹ کا 50 فیصد ملا کر اپنا مجموعی میرٹ اسکور چیک کریں۔ ایم بی بی ایس کے لیے 55 فیصد پاسنگ مارکس لازمی ہیں۔',
  },
  {
    stepNumber: '03',
    titleEn: 'Register on Provincial Centralized Portal',
    titleUr: 'صوبائی سینٹرلائزڈ پورٹل پر آن لائن اکاؤنٹ بنائیں',
    descEn:
      'Log into your provincial admitting university portal (UHS for Punjab, KMU for KP, DUHS/LUMHS for Sindh, BUMHS for Balochistan, SZABMU for Federal). Upload scanned original documents.',
    descUr:
      'اپنے صوبے کے سرکاری داخلہ پورٹل (پنجاب کے لیے یو ایچ ایس، کے پی کے لیے کے ایم یو، سندھ کے لیے ڈاؤ/لومز) پر اکاؤنٹ بنا کر تمام اسناد اپلوڈ کریں۔',
  },
  {
    stepNumber: '04',
    titleEn: 'Lock College Preference Priority Order',
    titleUr: 'میڈیکل کالجز کی ترجیحی فہرست (Preference List) لاک کریں',
    descEn:
      'Carefully rank colleges in your strict personal priority order (e.g., King Edward first, Allama Iqbal second). Once locked, preference order cannot be altered.',
    descUr:
      'اپنی پسند کے مطابق کالجز کی ترجیحی ترتیب منتخب کریں۔ خیال رہے کہ فیس جمع ہونے پر اپ گریڈیشن صرف اوپر دی گئی ترجیحات میں ہی ہو سکتی ہے۔',
  },
  {
    stepNumber: '05',
    titleEn: 'Review Provisional Lists & File Objections',
    titleUr: 'عارضی میرٹ لسٹ چیک کریں اور اعتراضات جمع کروائیں',
    descEn:
      'Examine the provisional merit list to verify your name, marks, domicile category, and aggregate calculation. Submit online objections within the 48-hour window if any error appears.',
    descUr:
      'عارضی میرٹ لسٹ میں اپنے نمبر اور ایگریگیٹ کی تصدیق کریں۔ اگر کوئی غلطی ہو تو مقررہ 48 گھنٹوں کے اندر آن لائن اعتراض داخل کریں۔',
  },
  {
    stepNumber: '06',
    titleEn: 'Confirm Allotment with Documents & Fee Challan',
    titleUr: 'کالج میں اصل کاغذات اور فیس چالان کے ساتھ داخلہ کنفرم کریں',
    descEn:
      'When your name appears on the official Selection List, report physically to the designated admitting college within 3 to 5 working days with original files and deposited bank challan.',
    descUr:
      'سلیکشن لسٹ میں نام آنے پر 3 سے 5 دن کے اندر اندر مقررہ کالج میں اصل اسناد، میڈیکل سرٹیفکیٹ اور ادا شدہ فیس چالان جمع کروا کر داخلہ پکا کریں۔',
  },
];

const faqs = [
  {
    questionEn: 'When will MDCAT 2026 results be officially announced?',
    questionUr: 'سال 2026 کا ایم ڈی کیٹ رزلٹ کب جاری ہوگا؟',
    answerEn:
      'The MDCAT 2026 examination is scheduled by the PM&DC for Sunday, September 20, 2026. Following test conduction, official carbon copy keys are typically uploaded within 24 hours, and final computerized result scorecards are gazetted on mdcat.pmdc.pk and regional university portals within 7 to 10 days (early October 2026).',
    answerUr:
      'پی ایم ڈی سی کے نوٹیفکیشن کے مطابق ایم ڈی کیٹ 2026 کا امتحان اتوار 20 ستمبر 2026 کو منعقد ہو رہا ہے۔ امتحان کے 24 گھنٹے بعد جوابی کیز اور 7 سے 10 دن کے اندر (اکتوبر کے پہلے ہفتے میں) حتمی رزلٹ آن لائن جاری کر دیا جائے گا۔',
  },
  {
    questionEn: 'How is the PM&DC aggregate merit score calculated?',
    questionUr: 'ایم بی بی ایس اور بی ڈی ایس کے لیے ایگریگیٹ میرٹ کیسے نکالا جاتا ہے؟',
    answerEn:
      'The Pakistan Medical & Dental Council (PM&DC) enforces a mandatory 50-40-10 weighted aggregate formula across all public and private medical colleges in Pakistan: Matriculation contributes 10%, Intermediate (FSc Pre-Medical) contributes 40%, and MDCAT contributes 50%. The formula is: (Matric % × 0.10) + (FSc % × 0.40) + (MDCAT % × 0.50). For instance, an applicant scoring 90% in Matric, 90% in FSc, and 90% in MDCAT secures an exact 90.0000% aggregate.',
    answerUr:
      'پی ایم ڈی سی کے آفیشل فارمولے کے تحت: میٹرک کا 10 فیصد، ایف ایس سی پری میڈیکل کا 40 فیصد اور ایم ڈی کیٹ کا 50 فیصد شمار ہوتا ہے۔ طریقہ کار یہ ہے: (میٹرک فیصد × 0.10) + (ایف ایس سی فیصد × 0.40) + (ایم ڈی کیٹ فیصد × 0.50)۔ تینوں کو جمع کر کے 100 میں سے فائنل ایگریگیٹ بنتا ہے۔',
  },
  {
    questionEn: 'Can I apply to public medical colleges in another province?',
    questionUr: 'کیا ایک صوبے کا طالب علم دوسرے صوبے کے پبلک میڈیکل کالج میں داخلہ لے سکتا ہے؟',
    answerEn:
      'Generally no for open-merit seats. Provincial public medical and dental colleges are 100% reserved for bona-fide domicile holders of that specific province (e.g., Punjab colleges require Punjab domicile; Sindh colleges require Sindh domicile and PRC). However, there are designated Reciprocal Seats (inter-provincial quota agreements) and Federal Quota Seats managed by provincial health departments where a small number of top candidates can study in other provinces.',
    answerUr:
      'اوپن میرٹ پر عام طور پر نہیں۔ پبلک میڈیکل کالجز میں 100 فیصد نشستیں اسی صوبے کے ڈومیسائل ہولڈرز کے لیے مخصوص ہوتی ہیں۔ البتہ ایک دوسرے کے صوبوں کے لیے محدود "باہمی نشستیں" (Reciprocal Seats) موجود ہوتی ہیں جن کے لیے متعلقہ صوبائی پورٹل سے ہی درخواست جاتی ہے۔',
  },
  {
    questionEn: 'What happens if my name does not appear on the 1st Merit List?',
    questionUr: 'اگر پہلی میرٹ لسٹ میں نام نہ آئے تو کیا امید باقی رہتی ہے؟',
    answerEn:
      'Do not panic. A significant percentage of candidates allocated in the 1st Selection List forfeit their seats due to selecting other institutions, financial choices, or higher university preferences. Once unconfirmed seats fall vacant, admitting universities issue the 2nd Selection List and 3rd Selection List, causing the closing merit threshold to drop downward. You can also monitor the centralized BDS merit list or apply to centralized private medical colleges.',
    answerUr:
      'پریشان نہ ہوں! پہلی لسٹ میں نام آنے والے بہت سے طلبہ داخلہ نہیں لیتے یا دوسرے شعبوں میں چلے جاتے ہیں۔ ان خالی نشستوں پر دوسری اور تیسری میرٹ لسٹ جاری کی جاتی ہے جس سے میرٹ نیچے گرتا ہے۔ اس کے علاوہ بی ڈی ایس اور پرائیویٹ میڈیکل کالجز کا آپشن بھی موجود رہتا ہے۔',
  },
  {
    questionEn: 'How do centralized admissions work for private medical colleges?',
    questionUr: 'پرائیویٹ میڈیکل کالجز میں داخلے کا کیا طریقہ کار ہے؟',
    answerEn:
      'Under PM&DC regulations, private medical and dental colleges no longer sell individual admission forms or manage independent admissions. All private college admissions are conducted strictly through the centralized online portal of the provincial admitting university (e.g., UHS in Punjab, KMU in KP). Candidates must fulfill the minimum PM&DC qualifying score (55% for MBBS, 50% for BDS). Merit is determined strictly by the central aggregate formula, though annual tuition fees are substantially higher than public institutions.',
    answerUr:
      'پی ایم ڈی سی قوانین کے تحت اب کوئی پرائیویٹ کالج براہ راست داخلہ فارم نہیں بیچ سکتا۔ تمام پرائیویٹ کالجز کے داخلے بھی صوبائی سرکاری یونیورسٹی کے سنٹرلائزڈ پورٹل کے ذریعے ہی ہوتے ہیں۔ امیدوار کا ایم ڈی کیٹ پاس ہونا ضروری ہے اور سلیکشن پی ایم ڈی سی ایگریگیٹ کی بنیاد پر ہی ہوتی ہے۔',
  },
  {
    questionEn: 'What original documents are mandatory for physical admission confirmation?',
    questionUr: 'کالج میں داخلہ پکا کرنے کے لیے کون سے اصل کاغذات ساتھ لے جانا لازمی ہیں؟',
    answerEn:
      'Once selected, candidates must visit the designated college within the stipulated 3 to 5 days with: (1) Original Matric Sanad & Marks Sheet, (2) Original FSc Pre-Medical Sanad/DMC (or IBCC equivalence), (3) Official MDCAT 2026 Result Card, (4) Original Domicile Certificate (and Sindh PRC/Form-C where applicable), (5) Candidate CNIC or Smart B-Form, (6) Father’s/Guardian’s CNIC, (7) 8–12 recent passport photos, (8) Medical Fitness Certificate issued by a government hospital MS, (9) Prescribed stamp-paper undertaking/affidavit, and (10) Paid bank admission fee challan.',
    answerUr:
      'سلیکشن کے بعد 3 سے 5 دن کے اندر اندر درج ذیل اصل کاغذات جمع کروانا ہوتے ہیں: میٹرک اور ایف ایس سی کی اصل اسناد و مارکس شیٹس، آفیشل ایم ڈی کیٹ رزلٹ کارڈ، اصل ڈومیسائل، شناختی کارڈ یا بی فارم، والد کا شناختی کارڈ، 8 سے 12 تصاویر، سرکاری ہسپتال سے میڈیکل فٹنس سرٹیفکیٹ، اسٹامپ پیپر بیان حلفی اور ادا شدہ فیس چالان۔',
  },
];

export default function MdcatResultMeritAdmissionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-100">
        {/* PROMINENT DATED BANNER */}
        <div className="bg-gradient-to-r from-teal-800 via-emerald-800 to-cyan-900 text-emerald-50 py-3 px-4 text-xs sm:text-sm font-sans border-b border-emerald-600/50 shadow-sm">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-slate-950 font-extrabold px-2 py-0.5 rounded text-[11px] uppercase tracking-wide">
                Session 2026–27
              </span>
              <span>
                <strong>Official Status (As of September 9, 2026):</strong> MDCAT 2026 is officially scheduled for <strong>Sunday, September 20, 2026</strong>. Results are <em>pending</em>; centralized admissions open in October 2026.
              </span>
            </div>
            <span className="hidden md:inline-flex items-center gap-1 text-emerald-200 text-xs font-mono">
              <Calendar className="w-3.5 h-3.5" />
              <span>Exam: Sept 20, 2026</span>
            </span>
          </div>
        </div>

        <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { nameEn: 'Education', nameUr: 'تعلیم', url: '/education' },
              {
                nameEn: 'MDCAT Result & Medical Admission 2026',
                nameUr: 'ایم ڈی کیٹ رزلٹ و میڈیکل ایڈمیشن 2026',
                url: '/education/mdcat-result-medical-college-merit-admission-2026',
              },
            ]}
          />

          {/* PAGE HEADER */}
          <header className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                <Stethoscope className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>MBBS &amp; BDS Admissions 2026–27</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-300 dark:border-blue-800">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>PM&amp;DC 50-40-10 Aggregate Formula</span>
              </span>
              <VerifiedBadge />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-doc-ink dark:text-white tracking-tight leading-tight">
              MDCAT Result 2026 &amp; Medical College Merit Admission: PMDC Formula &amp; Portals
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Authoritative, honestly dated manual for pre-medical candidates across Pakistan. Discover the official 
              PM&amp;DC 50-40-10 merit calculation formula with a worked example, provincial centralized admission portals 
              (UHS, DUHS/LUMHS, KMU, BUMHS, SZABMU), merit list rounds, and mandatory document verification.
            </p>

            {/* Quick Metadata Bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                <span>Exam Date: Sunday, 20 September 2026</span>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Centralized Portals Open: October 2026</span>
              </span>
              <span className="flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                <span>Pass Marks: MBBS 55% (99/180) | BDS 50% (90/180)</span>
              </span>
            </div>
          </header>

          {/* DIRECT ANSWER BOX */}
          <DirectAnswerBox
            topicTitleEn="MDCAT 2026 Current Status & Next Steps in Admission"
            topicTitleUr="ایم ڈی کیٹ 2026 کی موجودہ صورتحال اور داخلے کا اگلا مرحلہ"
            answerEn="As of September 9, 2026, the MDCAT 2026 examination is scheduled for Sunday, September 20, 2026, with results currently pending. Once scorecards are released, centralized admissions for public and private MBBS/BDS colleges will open across provincial university portals (UHS, KMU, DUHS/LUMHS, BUMHS, SZABMU). Merit is calculated using the mandatory PM&DC formula: 50% MDCAT + 40% FSc Pre-Medical + 10% Matric."
            answerUr="9 ستمبر 2026 تک کی مصدقہ صورتحال کے مطابق، ایم ڈی کیٹ 2026 کا امتحان اتوار 20 ستمبر 2026 کو منعقد ہو رہا ہے اور رزلٹ کا انتظار ہے۔ رزلٹ کے فوراً بعد صوبائی یونیورسٹیوں (یو ایچ ایس، کے ایم یو، ڈاؤ، بولان، شہید ذوالفقار علی بھٹو یونیورسٹی) کے سینٹرلائزڈ پورٹلز پر داخلے کھلیں گے۔ میرٹ پی ایم ڈی سی کے 50:40:10 فارمولے پر بنے گا۔"
          />

          {/* AD PLACEMENT ZONE 1 */}
          <AdPlacementZone slotId="mdcat-top-banner" />

          {/* SECTION 1: PMDC AGGREGATE FORMULA EXPLAINED WITH WORKED EXAMPLE */}
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Official Regulatory Standard
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white">
                How Your Merit Aggregate Is Calculated: The PM&amp;DC 50-40-10 Formula
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Every public and private medical college across Punjab, Sindh, Khyber Pakhtunkhwa, Balochistan, and 
                Islamabad is legally bound by the Pakistan Medical and Dental Council (PM&amp;DC) to utilize one uniform 
                mathematical formula. No university is permitted to add custom interviews or internal aptitude tests for open-merit MBBS seats.
              </p>
            </div>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-1">
                <span className="text-xs font-bold uppercase text-emerald-800 dark:text-emerald-300 font-mono">
                  Matriculation / SSC
                </span>
                <div className="text-3xl font-extrabold text-emerald-700 dark:text-emerald-300 font-serif">
                  10%
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  (Matric Marks / Total) &times; 10
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-center space-y-1">
                <span className="text-xs font-bold uppercase text-blue-800 dark:text-blue-300 font-mono">
                  Intermediate / HSSC
                </span>
                <div className="text-3xl font-extrabold text-blue-700 dark:text-blue-300 font-serif">
                  40%
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  (FSc Marks / Total) &times; 40
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-center space-y-1">
                <span className="text-xs font-bold uppercase text-purple-800 dark:text-purple-300 font-mono">
                  MDCAT Score
                </span>
                <div className="text-3xl font-extrabold text-purple-700 dark:text-purple-300 font-serif">
                  50%
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  (MDCAT Marks / 180) &times; 50
                </p>
              </div>
            </div>

            {/* Complete Formula Callout Box */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white font-mono text-xs sm:text-sm space-y-2 border border-slate-800">
              <div className="flex items-center justify-between text-emerald-400 font-bold">
                <span>OFFICIAL MATHEMATICAL EQUATION:</span>
                <span className="text-[11px] uppercase tracking-wider bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  PM&amp;DC Standard
                </span>
              </div>
              <p className="text-amber-300 font-bold text-sm sm:text-base break-all">
                Final Aggregate = [(Matric Marks &divide; 1100) &times; 10] + [(FSc Marks &divide; 1100) &times; 40] + [(MDCAT Marks &divide; 180) &times; 50]
              </p>
              <p className="text-slate-400 text-xs">
                * Note: For O-Levels / A-Levels, use the Equivalence Marks Certificate issued by the Inter Board Coordination Commission (IBCC).
              </p>
            </div>

            {/* REAL WORKED EXAMPLE */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 font-bold text-doc-ink dark:text-white text-base">
                <Calculator className="w-5 h-5 text-emerald-600" />
                <span>Worked Example: Step-by-Step Calculation for a Pre-Medical Student</span>
              </div>

              <p className="text-slate-600 dark:text-slate-300">
                Let us calculate the aggregate of a student with the following verified credentials:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="text-slate-500 text-[11px]">Matric Score</div>
                  <div className="text-base font-bold text-slate-800 dark:text-slate-200">1020 / 1100</div>
                  <div className="text-emerald-600 font-semibold pt-1">
                    (1020 / 1100) &times; 10 = <strong>9.2727%</strong>
                  </div>
                </div>

                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="text-slate-500 text-[11px]">FSc Pre-Medical</div>
                  <div className="text-base font-bold text-slate-800 dark:text-slate-200">1010 / 1100</div>
                  <div className="text-blue-600 font-semibold pt-1">
                    (1010 / 1100) &times; 40 = <strong>36.7272%</strong>
                  </div>
                </div>

                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="text-slate-500 text-[11px]">MDCAT 2026</div>
                  <div className="text-base font-bold text-slate-800 dark:text-slate-200">162 / 180</div>
                  <div className="text-purple-600 font-semibold pt-1">
                    (162 / 180) &times; 50 = <strong>45.0000%</strong>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 flex items-center justify-between">
                <span className="font-bold text-emerald-900 dark:text-emerald-200">
                  Total Calculated Final Aggregate:
                </span>
                <span className="font-mono font-extrabold text-base text-emerald-700 dark:text-emerald-300">
                  9.2727 + 36.7272 + 45.0000 = 91.0000%
                </span>
              </div>
            </div>

            {/* Minimum Qualifying Benchmarks */}
            <div className="border-t border-slate-200 dark:border-slate-800 pt-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-slate-700 dark:text-slate-300">
                  <strong>MBBS Passing Threshold:</strong> Minimum 55% in MDCAT (99 out of 180) + 60% in FSc
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-slate-700 dark:text-slate-300">
                  <strong>BDS Passing Threshold:</strong> Minimum 50% in MDCAT (90 out of 180) + 60% in FSc
                </span>
              </div>
            </div>
          </section>

          {/* SECTION 2: ADMISSION TIMELINE & PROCESS STEPS DIAGRAM */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                End-to-End Workflow
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                From MDCAT Result to College Admission: The 6 Step Process
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                The centralized medical admission cycle in Pakistan operates under strict administrative deadlines. Follow this 6-stage roadmap:
              </p>
            </div>

            <ProcessStepsDiagram
              titleEn="Centralized Medical & Dental College Admission Process (2026–27)"
              titleUr="میڈیکل کالج سنٹرلائزڈ داخلہ پروسیس 2026–27 کے 6 اہم مراحل"
              subtitleEn="Follow each phase from MDCAT result card download to physical fee deposit and college joining"
              subtitleUr="ایم ڈی کیٹ رزلٹ کارڈ سے لے کر فیس جمع کروانے اور کالج جوائننگ تک کا مرحلہ وار روڈ میپ"
              steps={admissionSteps}
            />
          </section>

          {/* AD PLACEMENT ZONE 2 */}
          <AdPlacementZone slotId="mdcat-mid-content" />

          {/* SECTION 3: PROVINCIAL CENTRALIZED ADMISSION PORTALS TABLE */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">
                Provincial Portals Directory
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                Where to Apply: Province-by-Province Centralized Admitting Portals
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Centralized admissions are managed by designated provincial public medical universities. Bookmark your home province portal:
              </p>
            </div>

            <FeeTableVisual
              titleEn="Provincial Centralized Admitting Universities & Official Portals"
              titleUr="صوبائی داخلہ دینے والی سرکاری یونیورسٹیاں اور آفیشل ویب پورٹلز"
              subtitleEn="Verified official admission links for public and private medical colleges across Pakistan"
              subtitleUr="پاکستان بھر کے پبلک اور پرائیویٹ میڈیکل کالجز کے تصدیق شدہ آفیشل لنکس"
              rows={portalRows}
            />

            {/* Provincial Nuance Callout */}
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-xs sm:text-sm text-amber-900 dark:text-amber-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Important Provincial Differences to Keep in Mind:</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-xs text-slate-700 dark:text-slate-300">
                <li>
                  <strong>Punjab (UHS)</strong>: Offers one unified merit list for all 16 public medical colleges. Candidates rank all colleges in their single online application.
                </li>
                <li>
                  <strong>Sindh (Regional System)</strong>: Candidates apply through designated processing universities (DUHS for Karachi, LUMHS for Hyderabad/Interior, SMBBMU for Larkana) based on their district of domicile and Permanent Residence Certificate (PRC / Form-C).
                </li>
                <li>
                  <strong>KPK (KMU CAS)</strong>: Uses the Centralized Admission System (`cas.kmu.edu.pk`) for both public (KMC, AMC, etc.) and private medical colleges in Khyber Pakhtunkhwa.
                </li>
                <li>
                  <strong>Balochistan (BUMHS)</strong>: Handles admissions for Bolan Medical College Quetta, as well as peripheral colleges in Makran, Loralai, and Khuzdar under district quotas.
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 4: MANDATORY DOCUMENTS CHECKLIST FOR PHYSICAL ADMISSION */}
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Physical Joining Dossier
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white">
                Mandatory Documents Checklist for Admission Confirmation
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                When your name is announced in the official selection list, you are typically granted <strong>3 to 5 working days</strong> to 
                deposit your admission dues and submit physical files to the student affairs desk. Having these documents ready beforehand avoids panic:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                  <FileCheck2 className="w-4 h-4 text-emerald-600" />
                  <span>1. Academic Certificates &amp; Transcripts</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  Original Matriculation / SSC Sanad &amp; DMC, plus original FSc Pre-Medical Sanad &amp; DMC. O/A-Level candidates must provide original IBCC Equivalence certificates.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>2. Official MDCAT 2026 Result Card</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  Official computerized printout of your MDCAT result card downloaded directly from the PM&amp;DC portal (`mdcat.pmdc.pk`) showing your QR code.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>3. Domicile &amp; Permanent Residence (PRC)</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  Candidate&apos;s original computerized Domicile Certificate. Candidates in Sindh must also submit the Permanent Residence Certificate (PRC / Form-C).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>4. NADRA Identity Documents</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  Candidate&apos;s original Computerized CNIC or Smart Card (Smart B-Form for candidates under 18), alongside father&apos;s / guardian&apos;s valid CNIC copy.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                  <Stethoscope className="w-4 h-4 text-emerald-600" />
                  <span>5. Medical Fitness Certificate</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  Certificate issued by a Medical Superintendent (MS) of a District Headquarter (DHQ) or public teaching hospital verifying physical, visual, and mental fitness.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  <span>6. Stamp Paper Affidavit &amp; Surety Bond</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  Legal undertaking on PKR 100 or PKR 500 stamp paper attested by an Oath Commissioner, as prescribed in the admitting university prospectus.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 5: MERIT ROUNDS & UPWARD UPGRADE MECHANISM */}
          <section className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-md space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                Strategic Insider Knowledge
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold tracking-tight">
                How Upward Upgrades &amp; Multiple Selection Rounds Work
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Many students mistakenly lose their allocated seats because they do not understand how the centralized 
                upward upgrade mechanism functions. Here is the golden rule:
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>CRITICAL RULE: Always Deposit Fees in Your Allotted Round</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                If your name appears on the 1st Selection List for your <strong>4th preference college</strong>, you 
                <strong> MUST</strong> deposit the admission fee and confirm your seat at that 4th preference college within the deadline.
              </p>
              <p className="text-slate-300 leading-relaxed">
                When seats in higher-preference colleges (Preferences 1, 2, or 3) become vacant in Round 2, you will 
                <strong> automatically be upgraded upward</strong> without paying any extra fee. However, if you fail to deposit 
                fees for your 4th preference in Round 1, your name will be <em>permanently ejected from the entire centralized admission system</em>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
              <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 space-y-1">
                <strong className="text-emerald-300 block font-bold text-sm">1st Selection List</strong>
                <p className="text-slate-400">
                  Highest closing merit. Approximately 20%–30% of allocated students surrender seats for other options or private choices.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 space-y-1">
                <strong className="text-emerald-300 block font-bold text-sm">2nd Upgraded List</strong>
                <p className="text-slate-400">
                  Vacant seats filled by upward movement. The closing merit drops across peripheral and district medical colleges.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 space-y-1">
                <strong className="text-emerald-300 block font-bold text-sm">3rd &amp; Final Waiting Lists</strong>
                <p className="text-slate-400">
                  Fills remaining stray vacancies. Parallel lists for BDS and centralized private medical colleges operate simultaneously.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 6: FAQ ACCORDION */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                MDCAT Result &amp; Admission: Top Questions Answered
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Clear, transparent answers addressing test results, aggregate scores, provincial quotas, and private admissions:
              </p>
            </div>

            <FAQAccordionVisual
              titleEn="MDCAT 2026 &amp; Medical College Admissions: FAQs"
              titleUr="ایم ڈی کیٹ رزلٹ اور میڈیکل داخلوں سے متعلق اہم سوالات و جوابات"
              subtitleEn="Official answers regarding PM&DC pass marks, aggregate calculation, and selection lists"
              subtitleUr="پی ایم ڈی سی پاسنگ مارکس، ایگریگیٹ کیلکولیشن اور میرٹ لسٹوں کی مصدقہ معلومات"
              items={faqs}
            />
          </section>

          {/* CROSS-LINKING SECTION */}
          <section className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-md space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                Related Education &amp; Admissions Guides
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold tracking-tight">
                Explore Additional University &amp; Educational Guides
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Looking for alternative university pathways, scholarship schemes, or provincial certificates? Explore our verified resources:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              <Link
                href="/education/university-entry-test-guide-nust-fast-comsats-2026"
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition flex items-center justify-between group"
              >
                <div>
                  <strong className="text-white block font-bold text-sm group-hover:text-amber-400 transition">
                    Engineering &amp; CS Entry Test Guide 2026
                  </strong>
                  <span className="text-slate-400">NUST NET, FAST NU Test, COMSATS NTS &amp; GIKI admission guide</span>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 transform group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="/education/bise-result-checker-2026"
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition flex items-center justify-between group"
              >
                <div>
                  <strong className="text-white block font-bold text-sm group-hover:text-amber-400 transition">
                    BISE Result Checker 2026 (All Boards)
                  </strong>
                  <span className="text-slate-400">Matric &amp; Intermediate gazette roll number verification</span>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 transform group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="/certificates/domicile-certificate-apply-online"
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition flex items-center justify-between group"
              >
                <div>
                  <strong className="text-white block font-bold text-sm group-hover:text-amber-400 transition">
                    Domicile Certificate Apply Online (Punjab &amp; Sindh)
                  </strong>
                  <span className="text-slate-400">Mandatory provincial residence certificate for medical admission</span>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 transform group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="/education/hec-scholarship-pakistan"
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition flex items-center justify-between group"
              >
                <div>
                  <strong className="text-white block font-bold text-sm group-hover:text-amber-400 transition">
                    HEC Scholarships Guide 2026
                  </strong>
                  <span className="text-slate-400">Need-based undergraduate &amp; medical tuition fee grants</span>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 transform group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
