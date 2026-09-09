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
  Bike,
  FileCheck2,
  CheckCircle2,
  Calendar,
  Clock,
  IdCard,
  Building2,
  AlertTriangle,
  ArrowRight,
  PhoneCall,
  Mail,
  Zap,
  Briefcase,
  Info
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'PTF Punjab Teacher E-Bike Scheme 2026: Apply Online, Eligibility & Subsidy',
  description:
    'Complete official guide to the Punjab Teachers Foundation (PTF) Teacher E-Bike Scheme 2026: Online registration at ptf.punjab.gov.pk, 30–40% government subsidy, 0% markup installment plans (PKR 3,600–4,200/mo), and eligibility criteria.',
  keywords: [
    'ptf punjab e bike',
    'punjab teachers foundation e bike scheme',
    'ptf.punjab.gov.pk apply online',
    'cm punjab teacher e bike scheme 2026',
    'punjab govt teacher electric bike subsidy',
    'ptf e bike eligibility criteria',
    'teacher e bike installment schedule 2026',
    'punjab teachers foundation portal',
    'sed punjab teacher bike scheme',
  ],
  openGraph: {
    title: 'PTF Punjab Teacher E-Bike Scheme 2026: Official Portal & Apply Guide',
    description:
      'Verified guide for Punjab government school teachers applying for subsidized electric bikes via ptf.punjab.gov.pk. Interest-free installments, 30–40% subsidy, and full documentation guide.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/education/ptf-punjab-teacher-e-bike-scheme-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/education/ptf-punjab-teacher-e-bike-scheme-2026',
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
          name: 'PTF Punjab Teacher E-Bike Scheme 2026',
          item: 'https://www.pakistaninfohub.com/education/ptf-punjab-teacher-e-bike-scheme-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'PTF Punjab Teacher E-Bike Scheme 2026: Apply Online, Eligibility & Subsidy',
      description:
        'Comprehensive manual for government school educators across Punjab seeking subsidized electric motorbikes through the Punjab Teachers Foundation (PTF) with 30-40% government subsidy and zero markup.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-09',
      dateModified: '2026-09-09',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/education/ptf-punjab-teacher-e-bike-scheme-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Apply for PTF Punjab Teacher E-Bike Scheme Online (2026)',
      description:
        'Official 6-step online registration procedure for Punjab government teachers using the PTF portal ptf.punjab.gov.pk.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Access Punjab Teachers Foundation Portal',
          text: 'Visit ptf.punjab.gov.pk and create or sign in to your PTF foundation account using your 13-digit CNIC and registered mobile number.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Enter Service & School Information',
          text: 'Enter your Personal/PESS number, designation, school EMIS code, and posting district as registered with the School Education Department.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Upload Mandatory Credentials',
          text: 'Upload scanned copies of your CNIC, recent payslip, service certificate, and valid motorcycle driving license or DLIMS learner permit.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Select Electric Bike Specifications',
          text: 'Choose your desired electric motorcycle model and review the subsidized interest-free installment terms.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Submit Application & Print Acknowledgment Slip',
          text: 'Submit the application online and download the computer-generated verification receipt for administrative record.',
        },
        {
          '@type': 'HowToStep',
          position: 6,
          name: 'BOP Scrutiny & Delivery',
          text: 'Complete physical document verification at the designated Bank of Punjab branch and collect your e-bike from authorized dealerships.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is this the same as the student CM Punjab E-Bike Scheme?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. This is a separate initiative run by the Punjab Teachers Foundation (PTF) exclusively for government teachers on ptf.punjab.gov.pk. The student scheme operates separately on bikes.punjab.gov.pk.',
          },
        },
        {
          '@type': 'Question',
          name: 'Am I eligible if I teach at a private school?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Generally no. The scheme is specifically budgeted for permanent and contract teachers serving under the Punjab School Education Department registered with PTF. Private school educators are not covered under this specific provincial quota.',
          },
        },
        {
          '@type': 'Question',
          name: "What is the monthly installment for the teacher e-bike scheme?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Monthly installments are estimated between PKR 3,600 and PKR 4,200 over a 24 to 36 month repayment tenure, backed by a 30% to 40% government subsidy and 0% markup.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a driving license already, or can I apply with a learner permit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "A valid motorcycle driving license or an active DLIMS learner's driving permit issued by Punjab Police is fully accepted during the online application process.",
          },
        },
        {
          '@type': 'Question',
          name: 'Is the PTF Teacher E-Bike Scheme currently accepting applications?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, applications are open in parallel with the provincial transport rollout (September to October 2026). If the PTF web portal faces temporary server latency, teachers can verify schedules with their District Education Authority (DEA) or PTF office in Lahore.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens after I submit my application on the PTF portal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Applications undergo computerized service verification with School Education Department records, followed by District Education Authority scrutiny, Bank of Punjab account linking, and SMS intimation for bike collection.',
          },
        },
      ],
    },
  ],
};

const feeScheduleRows = [
  {
    serviceEn: 'Total Electric Bike Market Value',
    serviceUr: 'الیکٹرک بائیک کی کل قیمت',
    normal: 'PKR 200,000 – 250,000',
    urgent: 'Certified EV Models',
    executive: 'Approved Fleet Value',
    tagEn: 'Retail Price',
  },
  {
    serviceEn: 'Punjab Government / PTF Subsidy',
    serviceUr: 'حکومتی و پی ٹی ایف کیش سبسڈی',
    normal: '30% – 40% (PKR 70,000 – 90,000)',
    urgent: 'Direct Grant',
    executive: '100% Treasury Funded',
    tagEn: 'Govt Subsidy',
  },
  {
    serviceEn: 'Teacher Net Payable Principal',
    serviceUr: 'استاد کی اصل واجب الادا رقم',
    normal: 'PKR 130,000 – 150,000',
    urgent: 'Financed Principal',
    executive: 'Spread Over 24–36 Mos',
    tagEn: 'Net Principal',
  },
  {
    serviceEn: 'Estimated Monthly Installment',
    serviceUr: 'تخمینہ ماہانہ قسط',
    normal: 'PKR 3,600 – 4,200 / month',
    urgent: 'Monthly Deduction',
    executive: '0% Interest Markup Plan',
    tagEn: 'Easy EMI',
  },
  {
    serviceEn: 'Bank Markup & Interest Rate',
    serviceUr: 'بینک مارک اپ اور سود کی شرح',
    normal: '0% (Interest-Free)',
    urgent: 'Fully Subsidized',
    executive: 'Shariah Compliant Terms',
    tagEn: 'Zero Markup',
  },
  {
    serviceEn: 'Maintenance & Warranty Support',
    serviceUr: 'وارنٹی اور بیٹری مینٹیننس',
    normal: 'FREE (1st Year Package)',
    urgent: '1-Year Battery Warranty',
    executive: 'Free Helmet Included',
    tagEn: 'Free Perks',
  },
];

const processSteps = [
  {
    stepNumber: '01',
    titleEn: 'Create Profile on ptf.punjab.gov.pk',
    titleUr: 'پی ٹی ایف پورٹل پر پروفائل بنائیں',
    descEn:
      'Access the official Punjab Teachers Foundation portal (ptf.punjab.gov.pk). Register using your 13-digit CNIC, mobile number registered in your name, and create secure login credentials.',
    descUr:
      'پنجاب ٹیچرز فاؤنڈیشن کی آفیشل ویب سائٹ ptf.punjab.gov.pk پر جائیں اور اپنے شناختی کارڈ اور موبائل نمبر کے ذریعے لاگ ان بنائیں۔',
  },
  {
    stepNumber: '02',
    titleEn: 'Input Service & Departmental Details',
    titleUr: 'ملازمت اور سکول کی تفصیلات درج کریں',
    descEn:
      'Fill in your employment profile including Personal/PESS Number, designation (PST, EST, SST), School EMIS code, tehsil, and district. Details are auto-checked against School Education Department records.',
    descUr:
      'اپنا پرسنل نمبر (PESS)، موجودہ عہدہ، سکول کوڈ (EMIS) اور ضلع درج کریں۔ یہ ریکارڈ محکمہ تعلیم کے ڈیٹا بیس سے خودکار تصدیق کیا جاتا ہے۔',
  },
  {
    stepNumber: '03',
    titleEn: 'Upload Scanned Documents & Driving License',
    titleUr: 'ضروری کاغذات اور ڈرائیونگ لائسنس اپلوڈ کریں',
    descEn:
      'Attach clear PDF or JPG scans: CNIC (front & back), recent salary slip, service certificate from head of institution, passport photo, and valid driving license or DLIMS learner permit.',
    descUr:
      'شناختی کارڈ، حالیہ تنخواہ کی سلپ، سروس سرٹیفکیٹ، تصویر اور ٹریفک پولیس کا پکا لائسنس یا لرنر پرمٹ سکین کر کے اپلوڈ کریں۔',
  },
  {
    stepNumber: '04',
    titleEn: 'Select Electric Bike Specifications',
    titleUr: 'الیکٹرک بائیک اور قسط کے پلان کا انتخاب',
    descEn:
      'Select your preferred authorized electric motorcycle model and review the installment repayment schedule (24 or 36 months) and salary deduction authorization.',
    descUr:
      'منظور شدہ الیکٹرک بائیک ماڈل اور 24 یا 36 ماہ کے قسطوں کے پلان کا جائزہ لے کر فارم کو حتمی شکل دیں۔',
  },
  {
    stepNumber: '05',
    titleEn: 'Submit Application & Print Verification Slip',
    titleUr: 'درخواست جمع کروائیں اور رسید حاصل کریں',
    descEn:
      'Submit the application online. Generate and print the computer-generated PTF Acknowledgment Slip containing your unique tracking application number.',
    descUr:
      'فارم آن لائن جمع کرائیں اور کمپیوٹرائزڈ تصدیقی رسید (Acknowledgment Slip) پرنٹ کر کے اپنے پاس محفوظ رکھیں۔',
  },
  {
    stepNumber: '06',
    titleEn: 'Departmental Scrutiny & Vehicle Handover',
    titleUr: 'سکروٹنی اور الیکٹرک بائیک کی فراہمی',
    descEn:
      'Following verification by the District Education Authority (DEA) and Bank of Punjab (BOP), successful teachers receive an SMS intimation to collect their vehicle from the authorized dealer.',
    descUr:
      'ڈسٹرکٹ ایجوکیشن اتھارٹی اور بینک آف پنجاب کی تصدیق کے بعد ایس ایم ایس موصول ہونے پر نامزد ڈیلرشپ سے بائیک حوالے کر دی جائے گی۔',
  },
];

const faqs = [
  {
    questionEn: 'Is this the same as the student CM Punjab E-Bike Scheme?',
    questionUr: 'کیا یہ طلبہ والی وزیراعلیٰ پنجاب ای بائیک سکیم ہی ہے؟',
    answerEn:
      'No. This is an entirely separate initiative managed specifically by the Punjab Teachers Foundation (PTF) for government school teachers via ptf.punjab.gov.pk. The student scheme operates separately through the Higher Education / Transport portal at bikes.punjab.gov.pk.',
    answerUr:
      'ہرگز نہیں! یہ پنجاب ٹیچرز فاؤنڈیشن (PTF) کی جانب سے صرف سرکاری سکول اساتذہ کے لیے الگ سکیم ہے جس کی درخواستیں ptf.punjab.gov.pk پر ہوتی ہیں۔ طلبہ کی سکیم کا پورٹل bikes.punjab.gov.pk الگ ہے۔',
  },
  {
    questionEn: 'Am I eligible if I teach at a private school?',
    questionUr: 'کیا پرائیویٹ سکول کے اساتذہ بھی اہل ہیں؟',
    answerEn:
      'Generally no. The PTF Teacher E-Bike Scheme is specifically funded from public welfare and educational endowments for permanent and contract teachers serving under the School Education Department, Government of the Punjab. Private school teachers cannot apply unless registered under an officially notified PTF partnership program.',
    answerUr:
      'عام طور پر نہیں۔ یہ سکیم محکمہ سکول ایجوکیشن پنجاب کے تحت کام کرنے والے مستقل اور کنٹریکٹ اساتذہ کے لیے ہے۔ پرائیویٹ سکول کے اساتذہ اس مخصوص کوٹے کے تحت درخواست نہیں دے سکتے۔',
  },
  {
    questionEn: 'What is the exact monthly installment and repayment tenure?',
    questionUr: 'ماہانہ قسط اور ادائیگی کی مدت کتنی ہے؟',
    answerEn:
      'The monthly installment is estimated between PKR 3,600 and PKR 4,200, payable across 24 to 36 equal monthly installments. The Punjab Government provides a 30% to 40% capital subsidy and absorbs 100% of the commercial bank markup, making the financing strictly interest-free.',
    answerUr:
      'ماہانہ قسط تقریباً 3,600 سے 4,200 روپے کے درمیان ہے جو 24 سے 36 ماہ کے دوران ادا کی جائے گی۔ حکومت پنجاب 30 سے 40 فیصد کیش سبسڈی دیتی ہے اور بینک مارک اپ خود برداشت کرتی ہے۔',
  },
  {
    questionEn: 'Do I need a driving license already, or can I apply with a learner permit?',
    questionUr: 'کیا ڈرائیونگ لائسنس پہلے سے ہونا ضروری ہے یا لرنر پرمٹ پر اپلائی ہو سکتا ہے؟',
    answerEn:
      'You can apply using either a permanent motorcycle driving license OR an active DLIMS motorcycle learner driving permit issued by Punjab Police. You do not need to wait for your permanent test to submit your PTF application.',
    answerUr:
      'آپ پکے لائسنس کے علاوہ پنجاب پولیس کے ڈرائیونگ لرنر پرمٹ (DLIMS) کی بنیاد پر بھی اپلائی کر سکتے ہیں۔ فوری لرنر پرمٹ آن لائن حاصل کر کے فارم پر درج کیا جا سکتا ہے۔',
  },
  {
    questionEn: 'Is the PTF scheme currently accepting applications?',
    questionUr: 'کیا پی ٹی ایف سکیم کی درخواستیں اس وقت کھلی ہیں؟',
    answerEn:
      'Yes, the scheme is open alongside the provincial Phase 2 transport rollout (September 2026). However, because government servers experience periodic maintenance and high traffic spikes, teachers facing DNS or loading issues on ptf.punjab.gov.pk are advised to check through their respective District Education Authority (DEA) or contact the PTF central office helpline at 042-111-333-267.',
    answerUr:
      'جی ہاں، ستمبر 2026 کے فیز کے تحت درخواستیں جاری ہیں۔ اگر سرکاری پورٹل پر رش کی وجہ سے سرور سلو ہو تو اساتذہ اپنے ڈسٹرکٹ ایجوکیشن آفس (DEA) یا پی ٹی ایف ہیلپ لائن 267-333-111-042 سے بھی رہنمائی لے سکتے ہیں۔',
  },
  {
    questionEn: 'What happens after I submit my application on the PTF portal?',
    questionUr: 'پی ٹی ایف پورٹل پر درخواست جمع کرانے کے بعد کا کیا طریقہ کار ہے؟',
    answerEn:
      'After submission, your service record is verified against the School Education Department SIS/PESS database. Applications are scrutinized by the District Education Authority (DEA) and the Bank of Punjab (BOP). Once approved, teachers receive an official SMS notification to complete loan paperwork and collect their bike from an authorized dealership.',
    answerUr:
      'درخواست کے بعد آپ کے سروس ریکارڈ کی تصدیق محکمہ تعلیم کے ریکارڈ سے کی جاتی ہے۔ منظوری کے بعد اساتذہ کو ایس ایم ایس کے ذریعے اطلاع دی جاتی ہے اور بینک کی کارروائی کے بعد نامزد ڈیلر سے موٹرسائیکل مل جاتی ہے۔',
  },
];

export default function PtfPunjabTeacherEBikePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-100">
        {/* Urgent Teacher Portal Distinction Banner */}
        <div className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-amber-50 py-3 px-4 text-xs sm:text-sm font-sans border-b border-amber-600/50 shadow-sm">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-slate-950 font-extrabold px-2 py-0.5 rounded text-[11px] uppercase tracking-wide">
                Teacher Specific
              </span>
              <span>
                <strong>Punjab Teachers Foundation (PTF) E-Bike Scheme 2026:</strong> For government school teachers via <code className="bg-amber-950/60 px-1 py-0.5 rounded text-amber-200">ptf.punjab.gov.pk</code>.
              </span>
            </div>
            <Link
              href="/education/cm-punjab-e-bike-scheme-2026-eligibility-apply"
              className="hidden sm:inline-flex items-center gap-1 text-amber-200 hover:text-white font-bold underline shrink-0 text-xs"
            >
              Looking for Student Scheme? &rarr;
            </Link>
          </div>
        </div>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { nameEn: 'Education', nameUr: 'تعلیم', url: '/education' },
              {
                nameEn: 'PTF Teacher E-Bike Scheme',
                nameUr: 'اساتذہ ای بائیک سکیم',
                url: '/education/ptf-punjab-teacher-e-bike-scheme-2026',
              },
            ]}
          />

          {/* Article Header */}
          <header className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="flex flex-wrap items-center gap-2">
              <VerifiedBadge />
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-doc-brass/10 text-doc-brass border border-doc-brass/20">
                <GraduationCap className="w-3.5 h-3.5" />
                School Education Department Punjab
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Interest-Free Financing (0% Markup)
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-doc-ink dark:text-white tracking-tight leading-tight">
              PTF Punjab Teacher E-Bike Scheme 2026: Apply Online, Eligibility &amp; Subsidy
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Authoritative, verified guide to the subsidized electric motorcycle scheme administered by the <strong>Punjab Teachers Foundation (PTF)</strong> for public school teachers across Punjab. Learn exact eligibility rules, 30–40% subsidy breakdown, interest-free monthly installments, and how to apply on <code className="text-doc-burgundy dark:text-red-300 font-mono text-sm bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">ptf.punjab.gov.pk</code>.
            </p>

            {/* Quick Metadata Bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-2 font-mono">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-doc-brass" /> Last Verified: September 9, 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-doc-brass" /> 6-Minute Read
              </span>
              <span className="flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-doc-brass" /> Authority: Punjab Teachers Foundation (PTF)
              </span>
            </div>
          </header>

          {/* CRITICAL DISTINCTION CALLOUT: TEACHER VS STUDENT SCHEME */}
          <div className="p-5 sm:p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-300 dark:border-amber-800/60 shadow-sm space-y-3">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-200 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-sm font-sans">
                <strong className="text-amber-950 dark:text-amber-200 text-base font-serif block">
                  Important Distinction: Teachers Scheme vs Student E-Bike Scheme
                </strong>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  The Punjab Government operates <strong>two completely separate electric bike programs</strong> that are often confused by searchers:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/50 space-y-1">
                    <span className="font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider block font-mono">This Guide (Educators)</span>
                    <strong className="text-doc-ink dark:text-white block">PTF Teacher E-Bike Scheme</strong>
                    <p className="text-slate-600 dark:text-slate-400">
                      Exclusively for permanent/contract government school teachers. Administered by Punjab Teachers Foundation via <span className="font-semibold text-amber-700 dark:text-amber-300">ptf.punjab.gov.pk</span>.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block font-mono">For Students</span>
                    <strong className="text-doc-ink dark:text-white block">CM Punjab 100,000 E-Bike Scheme</strong>
                    <p className="text-slate-600 dark:text-slate-400">
                      Exclusively for school, college, and university students. Zero down payment, PKR 3,028/mo, applied at <span className="font-semibold text-emerald-600 dark:text-emerald-400">bikes.punjab.gov.pk</span>.
                    </p>
                    <Link
                      href="/education/cm-punjab-e-bike-scheme-2026-eligibility-apply"
                      className="inline-flex items-center gap-1 text-doc-burgundy dark:text-red-300 hover:underline font-bold pt-1"
                    >
                      Read Student E-Bike Guide &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Answer Box */}
          <DirectAnswerBox
            topicTitleEn="Direct Answer: PTF Punjab Teacher E-Bike Scheme (2026)"
            topicTitleUr="فوری جواب: پنجاب ٹیچرز فاؤنڈیشن ای بائیک سکیم 2026"
            answerEn="The PTF Punjab Teacher E-Bike Scheme is an exclusive provincial welfare program providing subsidized, interest-free electric motorcycles to permanent and contract government school teachers (up to 55 years old) across Punjab. The government provides a 30%–40% direct subsidy with monthly installments between PKR 3,600 and PKR 4,200 (0% markup) via ptf.punjab.gov.pk. A valid driving license or DLIMS motorcycle learner permit is mandatory."
            answerUr="یہ سکیم پنجاب ٹیچرز فاؤنڈیشن کی جانب سے صرف سرکاری سکولوں کے مستقل اور کنٹریکٹ اساتذہ (زیادہ سے زیادہ 55 سال عمر) کے لیے شروع کی گئی ہے۔ حکومت پنجاب 30 سے 40 فیصد کیش سبسڈی فراہم کرتی ہے اور بقیہ رقم 0 فیصد شرح سود پر 3,600 تا 4,200 روپے ماہانہ اقساط میں ptf.punjab.gov.pk پر دی جاتی ہے۔ موٹرسائیکل ڈرائیونگ لائسنس یا لرنر پرمٹ لازمی ہے۔"
          />

          <AdPlacementZone slotId="after-direct-answer" />

          {/* Verified Financial Breakdown Table */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Verified Financial Matrix</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                PTF Teacher E-Bike Cost, Subsidy &amp; Monthly Installments
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Transparent breakdown of electric bike market retail prices, government cash subsidy, and net teacher monthly repayments:
              </p>
            </div>

            <FeeTableVisual
              titleEn="Official Financial Ledger: PTF Teacher E-Bike Scheme (2026)"
              titleUr="پی ٹی ایف اساتذہ ای بائیک سکیم: مصدقہ فنانشل و سبسڈی شیڈول 2026"
              subtitleEn="Verified cost schedule based on School Education Department & Punjab Teachers Foundation financing terms"
              subtitleUr="محکمہ سکول ایجوکیشن اور پنجاب ٹیچرز فاؤنڈیشن کی منظور شدہ فنانشل تفصیلات"
              rows={feeScheduleRows}
              noteEn="Important: Installments are deducted directly through official payroll or designated Bank of Punjab (BOP) accounts with 0% interest markup."
              noteUr="اہم نوٹ: اقساط بینک آف پنجاب یا سیلری اکاؤنٹ کے ذریعے بغیر کسی اضافی سود کے 2 تا 3 سال میں منہا کی جائیں گی۔"
            />
          </section>

          {/* Key Advantages for Educators */}
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center gap-2.5 text-doc-ink dark:text-white font-serif font-extrabold text-xl">
              <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0" />
              <h2>Why the PTF E-Bike Scheme Matters for Punjab Teachers</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Public school educators in Punjab travel an average of 15 to 45 kilometers daily to reach assigned rural and peri-urban schools. With petrol prices exceeding PKR 260/liter, fuel expenses consume a disproportionate share of monthly salaries. Key structural advantages of this program include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider text-[10px] block font-mono">Fuel Savings</span>
                <strong className="text-doc-ink dark:text-white block font-bold text-sm">Save PKR 12,000–18,000/Month</strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Electric motorcycles run at roughly PKR 0.80 to PKR 1.20 per kilometer compared to PKR 6.50+ per kilometer on conventional petrol 70cc/125cc motorcycles.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider text-[10px] block font-mono">Priority Allocation</span>
                <strong className="text-doc-ink dark:text-white block font-bold text-sm">Female &amp; Remote Teachers First</strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  PTF policy gives preference to female teachers commuting long distances and educators posted in hard-to-reach rural school clusters.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider text-[10px] block font-mono">Zero Markup Facility</span>
                <strong className="text-doc-ink dark:text-white block font-bold text-sm">100% Shariah Compliant Terms</strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Because the Punjab Government absorbs the entire banking margin, educators pay back strictly the net principal amount with no interest or compounding penalty.
                </p>
              </div>
            </div>
          </section>

          {/* Full Eligibility Criteria Checklist */}
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Prerequisites Checklist</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                Who Is Eligible to Apply on ptf.punjab.gov.pk?
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Applicants must meet all six mandatory institutional criteria set by the School Education Department and PTF:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">1. Government School Teacher Status</strong>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                    Must be an actively serving teacher (permanent or contractual) in a Punjab government primary, middle, high, or higher secondary school under the School Education Department (SED).
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <IdCard className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">2. PTF Foundation Registration &amp; PESS Number</strong>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                    The teacher must be registered with the Punjab Teachers Foundation (PTF) and hold a valid employee Personal Number / PESS registration code in provincial payroll records.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <Bike className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">3. Valid Motorcycle Driving License or DLIMS Permit</strong>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                    Must possess either a permanent motorcycle driving license OR a valid motorcycle learner&apos;s driving permit issued by Punjab Traffic Police via DLIMS.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <Calendar className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">4. Age Limit (Maximum 55 Years)</strong>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                    Applicant must not exceed 55 years of age on the date of application, ensuring sufficient remaining service duration to service the 2–3 year installment plan.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <Building2 className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">5. Punjab Domicile &amp; CNIC</strong>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                    Must be a permanent citizen holding a valid 13-digit computerized national identity card (CNIC) and provincial domicile from any of Punjab&apos;s 36 districts.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <FileCheck2 className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">6. Clean Bank &amp; Departmental Standing</strong>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                    Must not be a loan defaulter with the Bank of Punjab (BOP) or under active PEEDA departmental disciplinary proceedings resulting in salary freeze.
                  </p>
                </div>
              </div>
            </div>

            {/* Note on Private School Teachers */}
            <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 text-xs text-rose-900 dark:text-rose-200 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Can Private School Teachers Apply?</strong> No. Private school educators are not eligible for this specific PTF scheme, as funding is disbursed directly through government payroll authorizations. However, private school teachers can participate in the nationwide <strong>Federal PAVE Electric Vehicle Program</strong> (administered at <code className="font-mono text-rose-700 dark:text-rose-300">pave.gov.pk</code>), which is open to all Pakistani citizens.
              </p>
            </div>
          </section>

          {/* Mandatory Documents Checklist */}
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-doc-ink dark:text-white font-serif font-extrabold text-xl">
              <FileCheck2 className="w-6 h-6 text-doc-brass shrink-0" />
              <h2>Mandatory Documents to Prepare Before Applying</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Have high-resolution digital scans (PDF or JPEG format, maximum 2MB per file) ready prior to opening the PTF application portal:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans pt-1">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Original CNIC (Front and Back scan)</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Latest Monthly Salary Slip (showing Personal/PESS Number)</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Service Certificate / Headmaster Attestation Letter</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Valid Motorcycle Driving License OR DLIMS Learner Permit</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Recent Passport-Size Photograph (White or Blue Background)</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Mobile SIM registered to applicant&apos;s own CNIC (for OTP verification)</span>
              </div>
            </div>
          </section>

          {/* Application Roadmap ProcessStepsDiagram */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Application Roadmap</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                How to Apply for PTF Teacher E-Bike Scheme Online
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Follow this step-by-step registration workflow to submit your application on the official PTF portal:
              </p>
            </div>

            <ProcessStepsDiagram
              titleEn="Official Step-by-Step Procedure: PTF Teacher E-Bike Scheme (2026)"
              titleUr="پی ٹی ایف اساتذہ ای بائیک سکیم: آن لائن اپلائی کا مرحلہ وار طریقہ کار"
              subtitleEn="Official online application, verification, and delivery process via ptf.punjab.gov.pk"
              subtitleUr="آفیشل پورٹل پر رجسٹریشن، تصدیق اور الیکٹرک بائیک کے حصول کا مکمل راستہ"
              steps={processSteps}
            />
          </section>

          <AdPlacementZone slotId="mid-content" />

          {/* Comparison Visual: Teacher Scheme vs Student Scheme vs Federal PAVE */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Comparative Analysis</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                Compare: PTF Teacher Scheme vs Student Scheme vs Federal PAVE
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Confused by multiple e-bike schemes? Compare eligibility, portal URLs, and financial terms side-by-side:
              </p>
            </div>

            <ComparisonVisual
              titleEn="E-Bike Programs in Pakistan (2026 Matrix)"
              titleUr="پاکستان میں ای بائیک پروگرامز کا تقابلی جائزہ"
              subtitleEn="Clear side-by-side comparison to help citizens choose the exact portal matching their eligibility profile"
              subtitleUr="اپنی اہلیت کے مطابق درست سرکاری پورٹل کا انتخاب کرنے کے لیے موازنہ"
              items={[
                {
                  titleEn: "PTF Teacher E-Bike Scheme",
                  titleUr: "پی ٹی ایف اساتذہ ای بائیک سکیم",
                  subtitleEn: "ptf.punjab.gov.pk",
                  subtitleUr: "پنجاب ٹیچرز فاؤنڈیشن برائے سرکاری اساتذہ",
                  badgeEn: "GOVT EDUCATORS",
                  badgeUr: "اساتذہ کے لیے",
                  badgeVariant: "brass",
                  pointsEn: [
                    "Administered exclusively by Punjab Teachers Foundation (PTF).",
                    "Official portal: ptf.punjab.gov.pk (NOT bikes.punjab.gov.pk).",
                    "Restricted to serving permanent/contract government teachers (up to 55 yrs).",
                    "Government subsidy: 30% to 40% non-repayable grant.",
                    "Estimated installments: PKR 3,600 to 4,200/month with 0% markup.",
                  ],
                  features: [
                    { labelEn: "Official Portal", valueEn: "ptf.punjab.gov.pk", isPositive: true },
                    { labelEn: "Target Beneficiaries", valueEn: "Government School Teachers", isPositive: true },
                    { labelEn: "Govt Subsidy", valueEn: "30% – 40% (Up to PKR 90k)", isPositive: true },
                    { labelEn: "Monthly EMI", valueEn: "PKR 3,600 – 4,200 / month", isPositive: true },
                    { labelEn: "Financing Body", valueEn: "PTF / Bank of Punjab", isPositive: true },
                  ],
                  recommendedForEn: "Public school teachers in Punjab looking for subsidized eco-friendly commuting with payroll-deducted installments.",
                },
                {
                  titleEn: "CM Punjab Student E-Bike Scheme",
                  titleUr: "وزیراعلیٰ پنجاب سٹوڈنٹ ای بائیک سکیم",
                  subtitleEn: "bikes.punjab.gov.pk",
                  subtitleUr: "طلبہ کے لیے ایک لاکھ الیکٹرک بائیکس",
                  badgeEn: "STUDENTS ONLY",
                  badgeUr: "صرف طلبہ کے لیے",
                  badgeVariant: "emerald",
                  pointsEn: [
                    "Administered by Higher Education Department & PITB.",
                    "Official portal: bikes.punjab.gov.pk.",
                    "Open to regular students of 33,000+ schools, colleges, and universities.",
                    "Zero down payment (PKR 0 advance) and PKR 90,000 govt grant.",
                    "PKR 3,028/month over 36 months + signature pink bikes for female students.",
                  ],
                  features: [
                    { labelEn: "Official Portal", valueEn: "bikes.punjab.gov.pk", isPositive: true },
                    { labelEn: "Target Beneficiaries", valueEn: "School, College & Uni Students", isPositive: true },
                    { labelEn: "Govt Subsidy", valueEn: "PKR 90,000 Cash Subsidy", isPositive: true },
                    { labelEn: "Monthly EMI", valueEn: "PKR 3,028 / month (36 mos)", isPositive: true },
                    { labelEn: "Special Quota", valueEn: "50,000 Pink Bikes for Girls", isPositive: true },
                  ],
                  recommendedForEn: "Bona fide students in Punjab wanting zero-advance electric bikes with affordable student installments.",
                },
                {
                  titleEn: "Federal PAVE Electric Vehicle Program",
                  titleUr: "وفاقی پیو (PAVE) الیکٹرک وہیکل سبسڈی",
                  subtitleEn: "pave.gov.pk",
                  subtitleUr: "وفاقی حکومت کا ملک گیر سبسڈی پروگرام",
                  badgeEn: "ALL PAKISTANIS",
                  badgeUr: "تمام شہری",
                  badgeVariant: "blue",
                  pointsEn: [
                    "Initiated by Federal Ministry of Industries & Production / EDB.",
                    "Applications processed at pave.gov.pk.",
                    "Open to all Pakistani citizens nationwide across all four provinces, AJK & GB.",
                    "Includes private school teachers, gig workers, and commercial riders.",
                    "Direct upfront SBP cash subsidy (PKR 50,000 to PKR 80,000) post-purchase.",
                  ],
                  features: [
                    { labelEn: "Official Portal", valueEn: "pave.gov.pk", isPositive: true },
                    { labelEn: "Target Beneficiaries", valueEn: "General Public Nationwide", isPositive: true },
                    { labelEn: "Govt Subsidy", valueEn: "PKR 50,000 – 80,000 SBP Grant", isPositive: true },
                    { labelEn: "Monthly EMI", valueEn: "Commercial Auto Financing", isPositive: null },
                    { labelEn: "Geographic Scope", valueEn: "All 4 Provinces, AJK & GB", isPositive: true },
                  ],
                  recommendedForEn: "Private sector employees, freelancers, and citizens nationwide seeking federal EV cashback grants.",
                },
              ]}
            />
          </section>

          {/* Portal Latency & District Office Fallback */}
          <section className="p-6 sm:p-8 rounded-3xl bg-slate-100 dark:bg-slate-900/70 border border-slate-300 dark:border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-doc-ink dark:text-white font-serif font-extrabold text-xl">
              <Info className="w-5 h-5 text-doc-brass shrink-0" />
              <h2>Portal Access &amp; Technical Troubleshooting</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              Provincial servers frequently encounter heavy traffic loads and DNS routing updates during open enrollment periods. Keep these practical troubleshooting guidelines in mind:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <strong className="text-doc-ink dark:text-white font-bold block text-sm">Server Timeout / DNS Notice</strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  If <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-amber-700 dark:text-amber-400">ptf.punjab.gov.pk</code> displays a temporary gateway error, try accessing during off-peak hours (early morning 6 AM–9 AM or late evening). Avoid public VPNs that trigger provincial firewall blocks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <strong className="text-doc-ink dark:text-white font-bold block text-sm">Offline Facilitation at DEA</strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Teachers unable to submit online can visit their respective <strong>District Education Authority (DEA)</strong> or District Education Officer (DEO) Elementary/Secondary office for physical facilitation.
                </p>
              </div>
            </div>

            {/* Official Contact Details */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-doc-brass shrink-0" />
                <span>
                  <strong>PTF Helpline:</strong> <span className="font-mono font-bold text-slate-800 dark:text-slate-200">042-111-333-267</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-doc-brass shrink-0" />
                <span>
                  <strong>Official Email:</strong> <span className="font-mono text-slate-800 dark:text-slate-200">punjabteachersfoundation.ptf@gmail.com</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-doc-brass shrink-0" />
                <span>
                  <strong>Head Office:</strong> 9-A, Hall Road / Mozang Chungi, Lahore
                </span>
              </div>
            </div>
          </section>

          {/* Genuine FAQ Section */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Frequently Asked Questions</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                Frequently Asked Questions: PTF Teacher E-Bike Scheme
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Direct, transparent answers addressing common queries and misconceptions regarding the educator e-bike initiative:
              </p>
            </div>

            <FAQAccordionVisual
              titleEn="Teacher E-Bike Scheme: Frequently Asked Questions (2026)"
              titleUr="اساتذہ ای بائیک سکیم: عام طور پر پوچھے جانے والے سوالات"
              subtitleEn="Verified answers regarding eligibility, monthly installments, license rules, and application status"
              subtitleUr="اہلیت، ماہانہ اقساط، لائسنس کی شرائط اور پورٹل کی مصدقہ معلومات"
              items={faqs}
            />
          </section>

          {/* Cross-linking and Additional Education Resources */}
          <section className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-md space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">Related Civic &amp; Education Guides</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold tracking-tight">
                Explore Additional Educational Initiatives in Pakistan
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Stay updated with verified government education programs, student transportation schemes, and teacher welfare guides:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              <Link
                href="/education/cm-punjab-e-bike-scheme-2026-eligibility-apply"
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition flex items-center justify-between group"
              >
                <div>
                  <strong className="text-white block font-bold text-sm group-hover:text-amber-400 transition">
                    CM Punjab Student E-Bike Scheme (100,000 Bikes)
                  </strong>
                  <span className="text-slate-400">Zero down payment, PKR 3,028/mo, bikes.punjab.gov.pk</span>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 transform group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="/traffic/driving-license-online-apply-renewal-dlims-2026"
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition flex items-center justify-between group"
              >
                <div>
                  <strong className="text-white block font-bold text-sm group-hover:text-amber-400 transition">
                    DLIMS Learner Permit &amp; License Online Apply (2026)
                  </strong>
                  <span className="text-slate-400">Get your motorcycle learner permit in 15 minutes</span>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 transform group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="/education/pm-laptop-scheme-2026-eligibility-status-check"
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition flex items-center justify-between group"
              >
                <div>
                  <strong className="text-white block font-bold text-sm group-hover:text-amber-400 transition">
                    Prime Minister Laptop Scheme Phase 2026
                  </strong>
                  <span className="text-slate-400">HEC eligibility, merit lists, and online registration</span>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 transform group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="/education/hec-degree-attestation-new-blockchain-system-2026"
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition flex items-center justify-between group"
              >
                <div>
                  <strong className="text-white block font-bold text-sm group-hover:text-amber-400 transition">
                    HEC Degree Attestation Blockchain System
                  </strong>
                  <span className="text-slate-400">Digital verification for teachers and degree holders</span>
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
