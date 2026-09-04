import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, ComparisonVisual, FAQAccordionVisual } from '@/components/visuals';
import {
  Bike,
  Zap,
  ShieldCheck,
  AlertTriangle,
  FileCheck2,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  GraduationCap,
  Scale,
  DollarSign,
  Calendar,
  AlertCircle,
  Clock,
  IdCard,
  Building2,
  ChevronRight,
  Info,
  Car
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'CM Punjab E-Bike Scheme 2026: Eligibility, Online Apply & BOP Installment Plan',
  description:
    'Comprehensive verified guide to Chief Minister Punjab E-Bike Scheme: Online application at bikes.punjab.gov.pk, driving license rules, Bank of Punjab interest-free financing, computerized e-balloting, and transparent breakdown of conflicting figures.',
  keywords: [
    'cm punjab e bike scheme 2026',
    'bikes.punjab.gov.pk online apply',
    'punjab student e bike eligibility criteria',
    'bank of punjab e bike installment plan',
    'punjab e bike balloting result 2026',
    'cm punjab electric bike driving license rule',
    'punjab e bike phase 2 application portal',
    'e bike vs p bike punjab scheme',
  ],
  openGraph: {
    title: 'CM Punjab E-Bike Scheme 2026: Eligibility, Apply & BOP Installments',
    description:
      'Official student guide to bikes.punjab.gov.pk: Eligibility checklist, driving license requirement, zero-markup BOP financing, and distinction from teacher and federal PAVE schemes.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/education/cm-punjab-e-bike-scheme-2026-eligibility-apply',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/education/cm-punjab-e-bike-scheme-2026-eligibility-apply',
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
          name: 'CM Punjab E-Bike Scheme 2026',
          item: 'https://www.pakistaninfohub.com/education/cm-punjab-e-bike-scheme-2026-eligibility-apply',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'CM Punjab E-Bike Scheme 2026: Eligibility, Online Apply & BOP Installment Plan',
      description:
        'Authoritative public guide explaining how regular college and university students in Punjab can apply for subsidized electric and petrol motorcycles on bikes.punjab.gov.pk, with transparent analysis of fluctuating installment estimates.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-04',
      dateModified: '2026-09-04',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/education/cm-punjab-e-bike-scheme-2026-eligibility-apply',
    },
    {
      '@type': 'HowTo',
      name: 'How to Apply for Chief Minister Punjab E-Bike Scheme Online',
      description:
        'Official 6-step application procedure for regular students across Punjab using the PITB portal bikes.punjab.gov.pk.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Account Registration on bikes.punjab.gov.pk',
          text: 'Register with your 13-digit CNIC or B-Form number and an active mobile number registered in your own name.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Upload Academic & Licensing Credentials',
          text: 'Upload your valid university/college student card and enter your permanent motorcycle driving license or learner permit number.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Select Vehicle Stream (E-Bike or P-Bike)',
          text: 'Choose either an Electric Bike (battery-powered) or Petrol Bike (combustion engine). You cannot choose both.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Computerized PITB E-Balloting',
          text: 'Your verified application enters the automated provincial lottery draw conducted by the Punjab Information Technology Board.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Bank of Punjab (BOP) Physical Verification',
          text: 'Selected applicants visit the designated BOP branch with their co-borrower/guarantor to sign the zero-markup facility documents.',
        },
        {
          '@type': 'HowToStep',
          position: 6,
          name: 'Down Payment Challan & Vehicle Collection',
          text: 'Pay the prescribed down payment at BOP and collect your registered motorcycle, helmet, and warranty card from the authorized dealership.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I apply for both an E-Bike and a Petrol Bike simultaneously?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The portal strictly restricts each CNIC to a single active application. You must choose either an Electric Bike or a Petrol Bike (P-Bike) at the time of submission.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I only have a Learner Driving Permit and not a permanent driving license?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A valid motorcycle Learner Driving Permit issued by Punjab Traffic Police (or DLIMS) is fully acceptable for applying. However, the permit must be active and in the applicant\'s own name.',
          },
        },
        {
          '@type': 'Question',
          name: 'Am I guaranteed to get a bike if I fulfill all the eligibility criteria?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Meeting eligibility allows your application to enter the computerized e-balloting. Because application numbers routinely exceed available quotas, final allotment is determined strictly by randomized automated draw.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is the Punjab Student E-Bike Scheme different from the Federal PAVE Scheme?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The CM Punjab E-Bike Scheme (bikes.punjab.gov.pk) is a provincial program specifically for enrolled students in Punjab with Bank of Punjab financing. The Federal PAVE scheme (pave.gov.pk) is a nationwide federal subsidy program for all citizens covering e-bikes, e-rickshaws, and loaders.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are government school teachers eligible through bikes.punjab.gov.pk?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. bikes.punjab.gov.pk is strictly for enrolled university and college students. Government teachers have a separate dedicated program administered by the Punjab Teachers Foundation at ptf.punjab.gov.pk.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if my name is not selected in the computerized balloting?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If you are not selected, you forfeit nothing. Your registration remains archived in the PITB system, and you are fully eligible to enter subsequent allocation phases without penalty or duplicate filing fees.',
          },
        },
      ],
    },
  ],
};

const applicationSteps = [
  {
    number: 1,
    icon: <IdCard className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Register on bikes.punjab.gov.pk',
    titleUr: 'آفیشل پورٹل پر اکاؤنٹ کا اندراج',
    descEn: 'Visit the official government portal bikes.punjab.gov.pk. Create an account using your 13-digit CNIC/B-Form and a SIM registered in your own name.',
    descUr: 'آفیشل ویب پورٹل پر جائیں اور اپنے شناختی کارڈ اور اپنے نام پر رجسٹرڈ سم سے اکاؤنٹ بنائیں۔',
    tagEn: 'Portal Registration',
    tagUr: 'رجسٹریشن',
  },
  {
    number: 2,
    icon: <FileCheck2 className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Enter Academic & Driving License Data',
    titleUr: 'تعلیمی ادارے اور ڈرائیونگ لائسنس کی تصدیق',
    descEn: 'Select your enrolled HEC-recognized college/university, enter your student roll number, and input your valid motorcycle driving license or learner permit number.',
    descUr: 'اپنے کالج یا یونیورسٹی کا انتخاب کریں اور ٹریفک پولیس کا لرنر پرمٹ یا پکا لائسنس نمبر درج کریں۔',
    tagEn: 'Data Verification',
    tagUr: 'ڈیٹا تصدیق',
  },
  {
    number: 3,
    icon: <Bike className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Choose Bike Category (E-Bike or P-Bike)',
    titleUr: 'بائیک کی کیٹیگری کا انتخاب (الیکٹرک یا پیٹرول)',
    descEn: 'Select either an eco-friendly Electric Bike or a traditional Petrol Motorcycle. You can only choose one category per CNIC. Submit the form for free.',
    descUr: 'الیکٹرک یا پیٹرول بائیک میں سے کسی ایک کا انتخاب کریں۔ درخواست فارم جمع کرانا بالکل مفت ہے۔',
    tagEn: 'Category Choice',
    tagUr: 'انتخاب',
  },
  {
    number: 4,
    icon: <Scale className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Computerized PITB E-Balloting',
    titleUr: 'پنجاب آئی ٹی بورڈ کی کمپیوٹرائزڈ قرعہ اندازی',
    descEn: 'Applications exceeding regional quotas enter an automated, algorithmic draw conducted publicly by PITB. Track your selection on the portal dashboard.',
    descUr: 'درخواستوں کی جانچ کے بعد شفاف کمپیوٹرائزڈ قرعہ اندازی کے ذریعے کامیاب طلبہ کا انتخاب کیا جاتا ہے۔',
    tagEn: 'Automated Draw',
    tagUr: 'قرعہ اندازی',
  },
  {
    number: 5,
    icon: <Building2 className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Bank of Punjab (BOP) Verification',
    titleUr: 'بینک آف پنجاب سے فنانسنگ کی منظوری',
    descEn: 'If selected, report to your assigned BOP branch with your parent/guardian co-borrower to sign the zero-interest government financing contract.',
    descUr: 'کامیاب امیدوار اپنے والدین یا سرپرست کے ساتھ نامزد بینک برانچ میں بلا سود فنانسنگ کے کاغذات پر دستخط کریں۔',
    tagEn: 'Bank Approval',
    tagUr: 'بینک تصدیق',
  },
  {
    number: 6,
    icon: <CheckCircle2 className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Challan Deposit & Bike Handover',
    titleUr: 'ڈاؤن پیمنٹ چالان اور موٹرسائیکل کی وصولی',
    descEn: 'Deposit the required down payment challan at BOP. Present the receipt to the designated manufacturer dealership to collect your bike, helmet, and papers.',
    descUr: 'مقررہ ڈاؤن پیمنٹ چالان ادا کریں اور قریبی ڈیلرشپ سے اپنی موٹرسائیکل اور کاغذات وصول کریں۔',
    tagEn: 'Final Delivery',
    tagUr: 'بائیک وصولی',
  },
];

export default function CmPunjabEBikeSchemePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans pb-16">
        {/* Top Breadcrumb Bar */}
        <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 py-2.5 flex items-center justify-between">
            <Breadcrumbs
              items={[
                { nameEn: 'Education', nameUr: 'تعلیم', url: '/education' },
                { nameEn: 'CM Punjab E-Bike Scheme 2026', nameUr: 'وزیراعلیٰ پنجاب ای بائیک سکیم 2026', url: '/education/cm-punjab-e-bike-scheme-2026-eligibility-apply' },
              ]}
            />
            <VerifiedBadge textEn="Verified September 2026" textUr="مصدقہ ستمبر 2026" />
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 pt-8 space-y-8">
          {/* Header Section */}
          <header className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold tracking-wide">
              <Zap className="w-3.5 h-3.5" />
              <span>OFFICIAL STUDENT MOBILITY INITIATIVE</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-doc-ink dark:text-white tracking-tight leading-tight">
              CM Punjab E-Bike Scheme 2026: Eligibility, Online Apply &amp; BOP Installment Plan
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              The complete, independent, and honestly sourced guide to the Chief Minister Punjab Interest-Free Bike Scheme for regular college and university students. Avoid spam misinformation and learn how the official portal <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs font-mono text-doc-seal dark:text-amber-400 font-bold">bikes.punjab.gov.pk</code>, computerized balloting, and Bank of Punjab financing actually work.
            </p>
          </header>

          {/* Direct Answer Box (40-60 words) */}
          <DirectAnswerBox
            topicTitleEn="Summary: CM Punjab Student E-Bike Scheme (2026)"
            topicTitleUr="خلاصہ: وزیراعلیٰ پنجاب طلبہ ای بائیک سکیم 2026"
            answerEn="The Chief Minister Punjab E-Bike Scheme provides subsidized, zero-markup electric and petrol motorcycles to regular college and university students in Punjab through the official portal bikes.punjab.gov.pk. Applicants must hold a valid CNIC/B-Form and a valid motorcycle driving license or learner's permit. Selection is conducted via computerized e-balloting, with financing disbursed through the Bank of Punjab (BOP)."
            answerUr="وزیراعلیٰ پنجاب ای بائیک سکیم کے تحت باقاعدہ کالج اور یونیورسٹی طلبہ bikes.punjab.gov.pk پر مفت آن لائن درخواست جمع کرا سکتے ہیں۔ موٹرسائیکل کا ڈرائیونگ لائسنس یا لرنر پرمٹ لازمی ہے، جبکہ کامیاب طلبہ کا انتخاب پی آئی ٹی بی کی کمپیوٹرائزڈ قرعہ اندازی سے ہوتا ہے اور بینک آف پنجاب بلا سود آسان اقساط فراہم کرتا ہے۔"
          />

          {/* CRITICAL REALITY CHECK: Deconstructing Conflicting Numbers */}
          <section className="p-6 sm:p-8 rounded-3xl bg-amber-500/10 dark:bg-amber-950/20 border-2 border-amber-300 dark:border-amber-800/60 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-amber-900 dark:text-amber-300 font-serif font-extrabold text-lg sm:text-xl">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0" />
              <h2>Honest Reality Check: Why Internet Figures on This Scheme Disagree</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              If you search online, you will find low-quality content farms claiming contradictory details: some promise <em>&quot;20,000 completely free motorcycles,&quot;</em> others state <em>&quot;one lakh bikes with 70,000 subsidy,&quot;</em> while others give monthly installments ranging from Rs. 2,100 to Rs. 10,000. Here is the verified, factual reality behind the confusion:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans pt-1">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800/40 space-y-2">
                <strong className="text-doc-ink dark:text-white block font-bold text-sm">
                  1. The Bikes Are NOT Free Giveaways
                </strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  The Government of Punjab does <strong>not</strong> hand out free bikes. Instead, it pays <strong>100% of the bank markup (interest) and insurance</strong> as an upfront subsidy. The student pays back only the principal price of the bike over a structured 24-month (2-year) Bank of Punjab financing plan.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800/40 space-y-2">
                <strong className="text-doc-ink dark:text-white block font-bold text-sm">
                  2. Total Allocation: Phase 1 vs Expansions
                </strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Phase 1 launched with <strong>20,000 motorcycles</strong> (19,000 petrol + 1,000 electric) allocated across major university cities. Following high demand, the Chief Minister announced expanding the project in phases towards <strong>100,000 units</strong> province-wide. Numbers cited in news stories reflect changing target goals, not a static count.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800/40 space-y-2">
                <strong className="text-doc-ink dark:text-white block font-bold text-sm">
                  3. Installment Amounts (Figures Vary by Vehicle)
                </strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Initial Phase 1 schedules cited ~Rs. 4,900 to Rs. 5,000/month for petrol bikes and ~Rs. 9,000 to Rs. 10,000/month for electric bikes with a down payment of ~Rs. 20,000 to Rs. 25,000. However, subsequent policy reviews proposed slashing down payments and targeting monthly installments around <strong>Rs. 3,000/month</strong> for students. Always verify the precise repayment schedule in your official Bank of Punjab approval letter.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800/40 space-y-2">
                <strong className="text-doc-ink dark:text-white block font-bold text-sm">
                  4. Female Quota &amp; Equal License Rule
                </strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  To empower female students, dedicated quotas (up to 50% for e-bikes) are reserved for women. However, some social media posts mistakenly claim female applicants do not need a driving license. In reality, <strong>a valid motorcycle learner&apos;s permit or permanent license is mandatory for all applicants without exception</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Full Eligibility Criteria Checklist */}
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Prerequisites Checklist</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                Who Is Eligible to Apply on bikes.punjab.gov.pk?
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Before registering an account, verify that you satisfy all six mandatory conditions:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">1. Regular Enrolled Student</strong>
                  <p className="text-slate-600 dark:text-slate-300">
                    Must be a bona fide regular student in an undergraduate or graduate degree program at an HEC-recognized public or private university or college located within Punjab. Distance-learning (e.g. Allama Iqbal Open University, Virtual University) or private candidates are not eligible.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">2. Age Limit (Minimum 18 Years)</strong>
                  <p className="text-slate-600 dark:text-slate-300">
                    Applicant must be at least 18 years of age on the date of application submission, as required under the Motor Vehicles Ordinance to legally obtain a driver&apos;s license and sign banking agreements.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <IdCard className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">3. Valid CNIC / B-Form &amp; Domicile</strong>
                  <p className="text-slate-600 dark:text-slate-300">
                    Must hold a valid 13-digit Computerized National Identity Card (CNIC) or Smart B-Form/CRC issued by NADRA, and maintain permanent or educational residence in Punjab province.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <Car className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">4. Motorcycle License OR Learner Permit</strong>
                  <p className="text-slate-600 dark:text-slate-300">
                    A valid motorcycle Driving License or active Learner&apos;s Driving Permit issued by Punjab Traffic Police / DLIMS is strictly mandatory. If you do not have one, you can acquire an online learner permit in 15 minutes before applying.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">5. Co-Borrower / Financial Guarantor</strong>
                  <p className="text-slate-600 dark:text-slate-300">
                    Because students generally do not possess an established credit score, a parent, guardian, or blood relative with verifiable income/bank statement must serve as a co-borrower on the Bank of Punjab installment agreement.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <Bike className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">6. Single Vehicle Choice Rule</strong>
                  <p className="text-slate-600 dark:text-slate-300">
                    Applicants must choose <strong>EITHER</strong> an Electric Bike (E-Bike) <strong>OR</strong> a Petrol Motorcycle (P-Bike). Submitting multiple applications under one CNIC will cause immediate system disqualification.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Process Steps Diagram */}
          <ProcessStepsDiagram
            badgeEn="APPLICATION WORKFLOW 2026"
            badgeUr="درخواست کا مرحلہ وار طریقہ"
            titleEn="Step-by-Step: How to Apply & Receive Your Motorcycle"
            titleUr="بائیک سکیم میں آن لائن اپلائی اور وصولی کا طریقہ کار"
            subtitleEn="6 verified chronological stages from registration to computerized balloting and dealership handover"
            subtitleUr="رجسٹریشن سے لے کر کمپیوٹرائزڈ قرعہ اندازی اور موٹرسائیکل کی وصولی تک تمام مراحل"
            steps={applicationSteps}
          />

          {/* KEY DIFFERENTIATOR: Side-by-Side Comparison of 3 Schemes */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Avoid Confusion</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                Comparing 3 Distinct Schemes Often Confused Online
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Citizens frequently confuse the Punjab Student E-Bike Scheme with the provincial Teacher Scheme and the Federal PAVE program. Understand the official portals, eligibility, and jurisdictions:
              </p>
            </div>

            <ComparisonVisual
              titleEn="Punjab Student Bike vs Teacher Bike vs Federal PAVE Program"
              titleUr="طلبہ بائیک سکیم، اساتذہ سکیم اور وفاقی پیو سکیم میں واضح فرق"
              subtitleEn="Official portals, target beneficiaries, financing bodies, and geographic jurisdictions"
              subtitleUr="مستند سرکاری ویب سائٹس، مستفیدین، فنانسنگ پارٹنرز اور دائرہ اختیار"
              items={[
                {
                  titleEn: "CM Punjab Student E-Bike Scheme",
                  titleUr: "وزیراعلیٰ پنجاب طلبہ ای بائیک سکیم",
                  subtitleEn: "bikes.punjab.gov.pk",
                  subtitleUr: "صرف ریگولر کالج و یونیورسٹی طلبہ کے لیے",
                  badgeEn: "STUDENTS ONLY",
                  badgeUr: "طلبہ کے لیے",
                  badgeVariant: "emerald",
                  pointsEn: [
                    "Exclusively for regular university and college students in Punjab.",
                    "Applications accepted solely online via bikes.punjab.gov.pk.",
                    "Financed via Bank of Punjab (BOP) with 100% markup paid by Punjab government.",
                    "Requires learner's permit or driving license + parent co-borrower.",
                    "Automated PITB computerized e-balloting.",
                  ],
                  features: [
                    { labelEn: "Official Portal", valueEn: "bikes.punjab.gov.pk", isPositive: true },
                    { labelEn: "Target Audience", valueEn: "Enrolled College / Uni Students", isPositive: true },
                    { labelEn: "Vehicle Options", valueEn: "E-Bike OR Petrol Bike", isPositive: null },
                    { labelEn: "Geographic Scope", valueEn: "Punjab Province Only", isPositive: null },
                    { labelEn: "Financing Partner", valueEn: "Bank of Punjab (BOP)", isPositive: true },
                  ],
                  recommendedForEn: "Full-time college and university students in Punjab seeking affordable daily commute.",
                },
                {
                  titleEn: "CM Punjab Teacher E-Bike Scheme",
                  titleUr: "وزیراعلیٰ پنجاب اساتذہ ای بائیک سکیم",
                  subtitleEn: "ptf.punjab.gov.pk",
                  subtitleUr: "پنجاب ٹیچرز فاؤنڈیشن برائے سرکاری اساتذہ",
                  badgeEn: "GOVT TEACHERS",
                  badgeUr: "اساتذہ کے لیے",
                  badgeVariant: "brass",
                  pointsEn: [
                    "Administered separately by Punjab Teachers Foundation (PTF).",
                    "Applications accepted via ptf.punjab.gov.pk (NOT bikes.punjab.gov.pk).",
                    "Restricted to permanent or contract government school teachers (up to 55 years).",
                    "Requires employee payslip, service certificate, and driving license.",
                    "Provides subsidized interest-free installments to relieve teacher commuting expenses.",
                  ],
                  features: [
                    { labelEn: "Official Portal", valueEn: "ptf.punjab.gov.pk", isPositive: true },
                    { labelEn: "Target Audience", valueEn: "Government School Teachers", isPositive: true },
                    { labelEn: "Vehicle Options", valueEn: "Electric Bikes Only", isPositive: null },
                    { labelEn: "Geographic Scope", valueEn: "Punjab Province Only", isPositive: null },
                    { labelEn: "Financing Body", valueEn: "Punjab Teachers Foundation", isPositive: true },
                  ],
                  recommendedForEn: "Serving public school educators in Punjab needing green, cost-effective daily travel.",
                },
                {
                  titleEn: "Federal PAVE Electric Vehicle Program",
                  titleUr: "وفاقی پیو (PAVE) الیکٹرک وہیکل سبسڈی پروگرام",
                  subtitleEn: "pave.gov.pk",
                  subtitleUr: "وفاقی حکومت کا ملک گیر سبسڈی پروگرام",
                  badgeEn: "NATIONWIDE FEDERAL",
                  badgeUr: "ملک گیر وفاقی",
                  badgeVariant: "blue",
                  pointsEn: [
                    "Initiated by Federal Ministry of Industries & Production / EDB.",
                    "Applications processed at pave.gov.pk.",
                    "Open to all Pakistani citizens nationwide across all four provinces, AJK & GB.",
                    "Covers electric two-wheelers, e-rickshaws, and electric three-wheeler cargo loaders.",
                    "Direct upfront SBP cash subsidy (up to PKR 50,000 to PKR 80,000) deposited post-delivery.",
                  ],
                  features: [
                    { labelEn: "Official Portal", valueEn: "pave.gov.pk", isPositive: true },
                    { labelEn: "Target Audience", valueEn: "General Public Nationwide", isPositive: true },
                    { labelEn: "Vehicle Options", valueEn: "E-Bikes, Rickshaws & Loaders", isPositive: null },
                    { labelEn: "Geographic Scope", valueEn: "All Pakistan (Federal)", isPositive: null },
                    { labelEn: "Subsidy Mechanism", valueEn: "State Bank Direct Subsidy", isPositive: true },
                  ],
                  recommendedForEn: "Citizens, delivery riders, and commercial transporters across Pakistan wanting federal EV grants.",
                },
              ]}
            />
          </section>

          {/* Scam Protection Alert */}
          <section className="p-6 sm:p-8 rounded-3xl bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-300 dark:border-rose-800 space-y-4">
            <div className="flex items-center gap-2.5 text-rose-800 dark:text-rose-300 font-serif font-extrabold text-xl">
              <ShieldCheck className="w-6 h-6 text-rose-600 dark:text-rose-400 shrink-0" />
              <h2>Scam Warning: Computerized E-Balloting Cannot Be Bribed</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              Whenever government schemes are announced, fraudulent agents on Facebook, WhatsApp, and Telegram attempt to deceive students. Keep these protective facts in mind:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs font-sans">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900 space-y-1.5">
                <strong className="text-rose-700 dark:text-rose-400 block font-bold">100% Automated Draw</strong>
                <p className="text-slate-600 dark:text-slate-300">
                  Balloting is managed algorithmically by the Punjab Information Technology Board (PITB). No politician, bureaucrat, bank manager, or agent can insert your name or guarantee selection.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900 space-y-1.5">
                <strong className="text-rose-700 dark:text-rose-400 block font-bold">Zero Application Fee</strong>
                <p className="text-slate-600 dark:text-slate-300">
                  Registering on bikes.punjab.gov.pk is completely free. Anyone asking for &quot;processing charges&quot; or &quot;token fees&quot; via JazzCash, EasyPaisa, or Nayapay is an illegal scammer.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900 space-y-1.5">
                <strong className="text-rose-700 dark:text-rose-400 block font-bold">Only bikes.punjab.gov.pk</strong>
                <p className="text-slate-600 dark:text-slate-300">
                  Never enter your CNIC, password, or student credentials on third-party blog websites or unofficial forms. Official balloting results are published exclusively on the government domain.
                </p>
              </div>
            </div>
          </section>

          {/* Tracking Application Status Stages */}
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center gap-2 text-doc-ink dark:text-white font-serif font-extrabold text-xl">
              <Info className="w-5 h-5 text-doc-brass shrink-0" />
              <h2>How to Track Your Application Status on the Portal</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              After submitting your profile, log into <a href="https://bikes.punjab.gov.pk" target="_blank" rel="noopener noreferrer" className="text-doc-seal dark:text-amber-400 underline font-mono font-bold">bikes.punjab.gov.pk</a> with your CNIC and password. Your personal dashboard displays one of the following official status indicators:
            </p>

            <div className="space-y-3 font-sans text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-[11px] font-bold shrink-0 mt-0.5">SUBMITTED</span>
                <div>
                  <strong className="text-doc-ink dark:text-white block font-bold">Application Successfully Received</strong>
                  <p className="text-slate-600 dark:text-slate-300">Your profile, academic record, and driving license details have been logged into the PITB database awaiting institutional verification.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono text-[11px] font-bold shrink-0 mt-0.5">UNDER SCRUTINY</span>
                <div>
                  <strong className="text-doc-ink dark:text-white block font-bold">Verification in Progress</strong>
                  <p className="text-slate-600 dark:text-slate-300">Your educational institute is certifying your regular enrollment status, and your motorcycle license / learner permit is being cross-checked against Punjab Police records.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[11px] font-bold shrink-0 mt-0.5">SELECTED IN BALLOT</span>
                <div>
                  <strong className="text-doc-ink dark:text-white block font-bold">Successful in Computerized Draw</strong>
                  <p className="text-slate-600 dark:text-slate-300">Congratulations! Your name was drawn in the e-ballot. Download the Bank of Punjab verification letter and follow instructions to visit your designated branch.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-mono text-[11px] font-bold shrink-0 mt-0.5">BOP PROCESSING</span>
                <div>
                  <strong className="text-doc-ink dark:text-white block font-bold">Bank Verification &amp; Challan Generation</strong>
                  <p className="text-slate-600 dark:text-slate-300">Bank of Punjab branch officers have approved your co-borrower&apos;s documentation. Pay your prescribed down payment challan to finalize dealer dispatch.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-slate-500/10 text-slate-600 dark:text-slate-400 font-mono text-[11px] font-bold shrink-0 mt-0.5">NOT SELECTED</span>
                <div>
                  <strong className="text-doc-ink dark:text-white block font-bold">Retained for Future Phases</strong>
                  <p className="text-slate-600 dark:text-slate-300">Your profile was not drawn in this balloting round due to quota limits. Your verified data remains securely stored for consideration in subsequent provincial allocation phases without needing to re-register.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Ad Zone */}
          <AdPlacementZone format="horizontal" />

          {/* Cross-linking Section */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
              <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
                Related Student Welfare &amp; Licensing Utilities on Pakistan Info Hub
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link
                href="/education/pm-laptop-scheme-2026-eligibility-status-check"
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
              >
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Federal Welfare</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  PM Laptop Scheme 2026 →
                </h3>
                <p className="text-xs text-slate-500 mt-1">Check merit lists, student eligibility, and HEC distribution schedule.</p>
              </Link>

              <Link
                href="/traffic/driving-license-online-apply-renewal-dlims-2026"
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
              >
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Mandatory Prerequisite</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  DLIMS Driving License Online →
                </h3>
                <p className="text-xs text-slate-500 mt-1">How to obtain an instant online motorcycle learner permit in 15 minutes.</p>
              </Link>

              <Link
                href="/education/hec-degree-attestation-new-blockchain-system-2026"
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
              >
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Academic Verification</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  HEC Degree Attestation →
                </h3>
                <p className="text-xs text-slate-500 mt-1">Verify recognized universities, degree programs, and QR credentials.</p>
              </Link>
            </div>
          </section>

          {/* FAQ Accordion Visual */}
          <FAQAccordionVisual
            titleEn="Frequently Asked Questions: CM Punjab E-Bike Scheme"
            titleUr="عام طور پر پوچھے جانے والے ضروری سوالات و جوابات"
            subtitleEn="Clear, honest answers on licensing rules, vehicle choice, balloting probabilities, and teacher distinctions"
            subtitleUr="ڈرائیونگ لائسنس کی شرط، قرعہ اندازی، ڈاؤن پیمنٹ اور اساتذہ سکیم سے متعلق بنیادی وضاحتیں"
            items={[
              {
                questionEn: "Can I apply for both an Electric Bike and a Petrol Motorcycle simultaneously?",
                questionUr: "کیا میں ایک ہی وقت میں الیکٹرک اور پیٹرول بائیک دونوں کے لیے اپلائی کر سکتا ہوں؟",
                answerEn: "No. The bikes.punjab.gov.pk portal restricts each 13-digit CNIC to a single active category. You must choose either an Electric Bike or a Petrol Bike (P-Bike). Submitting duplicate applications will result in system disqualification.",
                answerUr: "نہیں! نادرا شناختی کارڈ کے تحت سسٹم صرف ایک درخواست قبول کرتا ہے۔ آپ کو الیکٹرک بائیک یا پیٹرول بائیک میں سے کسی ایک کا انتخاب کرنا ہوگا۔",
              },
              {
                questionEn: "What if I do not have a permanent motorcycle driving license yet?",
                questionUr: "اگر میرے پاس پکا ڈرائیونگ لائسنس نہ ہو تو کیا لرنر پرمٹ پر اپلائی ہو سکتا ہے؟",
                answerEn: "Yes! A valid motorcycle Learner's Driving Permit issued by Punjab Traffic Police / DLIMS is completely acceptable for applying. You can apply for a learner's permit online at dlims.punjab.gov.pk in 15 minutes, receive your permit number instantly, and use it on the bike portal.",
                answerUr: "جی ہاں! پنجاب ٹریفک پولیس کا کمپیوٹرائزڈ لرنر پرمٹ مکمل طور پر قابل قبول ہے۔ آپ DLIMS کی ویب سائٹ سے 15 منٹ میں آن لائن لرنر حاصل کر کے اپلائی کر سکتے ہیں۔",
              },
              {
                questionEn: "Am I guaranteed to receive a motorcycle if I meet all eligibility criteria?",
                questionUr: "کیا تمام شرائط پوری کرنے پر بائیک ملنا سو فیصد یقینی ہے؟",
                answerEn: "No. Meeting the eligibility criteria allows your application to enter the transparent computerized e-balloting draw conducted by PITB. Because hundreds of thousands of students apply for limited quotas, final allotment depends entirely on the randomized computerized draw.",
                answerUr: "نہیں! اہلیت پوری ہونے پر آپ کا نام کمپیوٹرائزڈ قرعہ اندازی میں شامل کیا جاتا ہے۔ کوٹہ سے زیادہ درخواستیں ہونے کی صورت میں قرعہ اندازی کے ذریعے ہی حتمی الاٹمنٹ ہوتی ہے۔",
              },
              {
                questionEn: "How is this scheme different from the Federal PAVE scheme?",
                questionUr: "یہ سکیم وفاقی حکومت کی پیو (PAVE) سکیم سے کیسے مختلف ہے؟",
                answerEn: "The CM Punjab E-Bike Scheme (bikes.punjab.gov.pk) is a provincial initiative exclusively for enrolled college/university students in Punjab, financed by the Bank of Punjab with zero markup. The Federal PAVE scheme (pave.gov.pk) is a nationwide program open to all citizens across all provinces covering e-bikes, e-rickshaws, and loaders with direct State Bank cash subsidies.",
                answerUr: "پنجاب سکیم صرف پنجاب کے طلبہ کے لیے بلا سود بینک فنانسنگ پر ہے، جبکہ وفاقی PAVE سکیم پورے پاکستان کے تمام شہریوں کے لیے الیکٹرک گاڑیوں اور رکشوں پر ڈائریکٹ کیش سبسڈی فراہم کرتی ہے۔",
              },
              {
                questionEn: "Are government school teachers eligible to apply through bikes.punjab.gov.pk?",
                questionUr: "کیا سرکاری سکولوں کے اساتذہ بھی اسی پورٹل سے اپلائی کر سکتے ہیں؟",
                answerEn: "No. bikes.punjab.gov.pk is strictly limited to enrolled college and university students. Government school teachers have a separate, dedicated initiative managed by the Punjab Teachers Foundation at ptf.punjab.gov.pk.",
                answerUr: "نہیں! یہ پورٹل صرف کالج اور یونیورسٹی کے طلبہ کے لیے ہے۔ سرکاری اساتذہ کے لیے پنجاب ٹیچرز فاؤنڈیشن کا الگ پورٹل ptf.punjab.gov.pk مخصوص ہے۔",
              },
              {
                questionEn: "What happens if I am not selected in the computerized balloting round?",
                questionUr: "اگر قرعہ اندازی میں میرا نام نہ نکلے تو کیا ہوگا؟",
                answerEn: "If your name is not selected, you do not pay any penalty or fee. Your profile and verified credentials remain archived in the PITB database, and you are automatically eligible to participate in subsequent phase balloting rounds announced by the government.",
                answerUr: "آپ کی فیس یا رقم ضائع نہیں ہوتی۔ آپ کا ریکارڈ سسٹم میں محفوظ رہتا ہے اور آئندہ فیز کی قرعہ اندازی میں آپ کا نام خود بخود شامل کر لیا جاتا ہے۔",
              },
            ]}
          />
        </article>
      </main>
    </>
  );
}
