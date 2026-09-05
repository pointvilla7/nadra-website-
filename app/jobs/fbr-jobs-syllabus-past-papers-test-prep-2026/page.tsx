import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, FAQAccordionVisual } from '@/components/visuals';
import {
  GraduationCap,
  BookOpen,
  FileCheck2,
  FileText,
  Search,
  ExternalLink,
  Clock,
  HelpCircle,
  TrendingDown,
  ArrowRight,
  Sparkles,
  Info,
  Calendar,
  Lock,
  Building2,
  AlertTriangle,
  Send,
  Users,
  Building,
  User,
  Check,
  Award,
  Scale,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  Layers,
  FileQuestion,
  Dumbbell,
  BadgeAlert,
  Download,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FBR Jobs Syllabus, Sepoy Criteria & Past Papers Guide 2026',
  description:
    'Complete cadre-by-cadre guide to FBR jobs syllabus (Inspector Inland Revenue, Customs Inspector, Sepoy BS-05, Stenotypist, UDC/LDC), physical test standards, FPSC vs RTO roll number slip downloads, and test prep.',
  keywords: [
    'fbr past paper',
    'fbr past papers',
    'fbr sepoy past paper',
    'fbr syllabus',
    'fbr roll number slip download',
    'fbr sepoy physical test height chest',
    'inspector inland revenue syllabus fpsc',
    'inspector customs syllabus fpsc',
    'fbr jobs test preparation 2026',
  ],
  openGraph: {
    title: 'FBR Jobs Syllabus, Sepoy Criteria & Past Papers Guide 2026',
    description:
      'Cadre-by-cadre syllabus breakdown for FBR recruitment: Inspector BS-16, Sepoy BS-05 physical standards, FPSC vs RTO testing bodies, and roll number slip access.',
    url: 'https://www.pakistaninfohub.com/jobs/fbr-jobs-syllabus-past-papers-test-prep-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/jobs/fbr-jobs-syllabus-past-papers-test-prep-2026',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Jobs & Careers', item: 'https://www.pakistaninfohub.com/jobs' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'FBR Jobs Syllabus, Sepoy Criteria & Test Prep',
          item: 'https://www.pakistaninfohub.com/jobs/fbr-jobs-syllabus-past-papers-test-prep-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'FBR Jobs Syllabus, Sepoy Physical Standards & Test Prep Guide 2026: FPSC vs RTO Recruitment',
      description:
        'Authoritative test preparation guide detailing cadre-specific syllabi for FBR jobs, physical measurement criteria for Sepoy (BS-05), roll number slip retrieval mechanisms, and the truth about official past papers.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/jobs/fbr-jobs-syllabus-past-papers-test-prep-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Download FBR Test Roll Number Slips',
      description: 'Step-by-step instructions for downloading roll number slips / admission certificates depending on whether the post is conducted by FPSC or FBR Regional Tax Offices.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Identify the Conducting Authority',
          text: 'Verify whether your applied post is recruited through Federal Public Service Commission (FPSC for BS-16+ Inspector cadres) or directly by FBR Regional Tax Offices / National Job Portal (NJP for BS-01 to BS-15 staff).',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'For FPSC Posts: Access Admission Certificate',
          text: 'Visit fpsc.gov.pk under "Admission Certificates", enter your 13-digit CNIC and select your case number to download and print the computerized roll number slip.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'For RTO / Departmental Posts: Check NJP or FBR Portal',
          text: 'Log into njp.gov.pk or visit fbr.gov.pk under the relevant Regional Tax Office vacancy section to download candidate screening lists and physical test call letters.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Prepare Test Day Dossier',
          text: 'Print the slip on clean white paper and carry original CNIC, educational transcripts, and prescribed sportswear (for Sepoy physical evaluation).',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is there one single universal FBR syllabus for all jobs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. FBR recruitment is divided into distinct professional and technical cadres. Inspector Inland Revenue focuses on Sales Tax, Income Tax, and Federal Excise laws; Inspector Customs emphasizes General Intelligence, English, and Arithmetic; Sepoy (BS-05) requires a physical running/measurement test followed by basic Matric-level screening; while Stenotypists are evaluated on 80/40 wpm shorthand and typing speeds.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the exact physical test requirements for FBR Sepoy (BS-05)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For male candidates, the minimum height is 5 feet 6 inches, chest measurement must be 32 inches with 1.5-inch expansion (33.5 inches), and a running test of 1.6 km (1 mile) in 7 to 8 minutes. For female candidates, the minimum height is 5 feet 2 inches and a 1 km walk/run in 10 minutes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does FPSC or FBR conduct my recruitment test?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Officer cadres (BS-16 and above, such as Inspector Inland Revenue, Inspector Customs / Intelligence Officer, and Appraising Officers) are recruited nationally through the Federal Public Service Commission (FPSC). Staff cadres (BS-01 to BS-15, such as Sepoy, Stenotypist, UDC, LDC, and Driver) are recruited departmentally by FBR Regional Tax Offices (RTOs) or Customs Directorates via the National Job Portal (njp.gov.pk).',
          },
        },
        {
          '@type': 'Question',
          name: 'Where do I download my FBR roll number slip?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If you applied for an FPSC-advertised post (BS-16+), download your Admission Certificate directly from fpsc.gov.pk roughly 7 to 10 days before the test date using your CNIC. If you applied for departmental posts (BS-05 to BS-15), roll number slips or test schedules are downloaded through your candidate profile on the National Job Portal (njp.gov.pk) or published on fbr.gov.pk under regional vacancy notifications.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are official FBR past papers published anywhere?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No official past paper archive exists on fbr.gov.pk or fpsc.gov.pk. Testing agencies do not release official question booklets or answer keys for lower-grade departmental screenings. For FPSC exams, candidates should prepare using previous General Recruitment MCQ trend compilations and statutory tax law acts rather than paying commercial vendors for unverified "leaked papers".',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the upper age limit for FBR jobs, and is relaxation granted?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The standard advertised age bracket is typically 18 to 25 years for BS-05 to BS-14, and 20 to 28 years for BS-16 posts. Under Federal Government Civil Servants rules, a general 5-year age relaxation is routinely granted to all candidates, extending the effective maximum age to 30 or 33 years depending on the cadre.',
          },
        },
      ],
    },
  ],
};

const rollNumberSteps = [
  {
    stepNumber: '01',
    titleEn: 'Determine Conducting Authority',
    titleUr: 'بھرتی کرنے والے ادارے کی تصدیق',
    descEn: 'Check whether your post is FPSC-regulated (BS-16+ Inspector) or RTO-departmental (BS-05 to BS-15).',
    descUr: 'جانچیں کہ آپ کا عہدہ ایف پی ایس سی (گریڈ 16) کا ہے یا ریجنل ٹیکس آفس (گریڈ 5 تا 15) کا۔',
    badgeEn: 'FPSC vs RTO',
    badgeUr: 'ادارے کی شناخت',
  },
  {
    stepNumber: '02',
    titleEn: 'Access Respective Portal Ahead of Test',
    titleUr: 'متعلقہ پورٹل سے سلپ کا حصول',
    descEn: 'Visit fpsc.gov.pk for Inspector Admission Certificates, or njp.gov.pk/fbr.gov.pk for RTO slips.',
    descUr: 'انسپکٹر کے لیے ایف پی ایس سی اور نچلے سکیلز کے لیے این جے پی یا ایف بی آر پورٹل چیک کریں۔',
    badgeEn: '7–10 Days Prior',
    badgeUr: 'ٹیسٹ سے قبل',
  },
  {
    stepNumber: '03',
    titleEn: 'Enter CNIC & Retrieve Computerized Slip',
    titleUr: 'شناختی کارڈ سے رول نمبر ڈاؤن لوڈ',
    descEn: 'Submit your 13-digit CNIC (without dashes) to print the verified examination slip with venue details.',
    descUr: 'شناختی کارڈ نمبر درج کر کے رول نمبر سلپ، ٹیسٹ سنٹر اور وقت کا پرنٹ لیں۔',
    badgeEn: 'Instant PDF',
    badgeUr: 'پرنٹ سلپ',
  },
  {
    stepNumber: '04',
    titleEn: 'Assemble Mandatory Test-Day Dossier',
    titleUr: 'امتحانی دستاویزات کی تیاری',
    descEn: 'Carry original computerized CNIC, printed admission slip, clipboard, and blue/black ballpoint pens.',
    descUr: 'اصل شناختی کارڈ، پرنٹ شدہ سلپ اور ضروری امتحانی سامان ہمراہ لائیں۔',
    badgeEn: 'Test Entry',
    badgeUr: 'امتحان میں شمولیت',
  },
];

const faqsData = [
  {
    questionEn: 'Is there one single universal FBR syllabus for all posts?',
    questionUr: 'کیا ایف بی آر کی تمام اسامیوں کا ایک ہی سلیبس ہوتا ہے؟',
    answerEn:
      'No. FBR recruitment covers distinct administrative, executive, and security functions. Inspector Inland Revenue tests focus heavily on corporate tax statutes (Sales Tax Act 1990, Income Tax Ordinance 2001, and Federal Excise Act 2005). Inspector Customs focuses on General Knowledge, English grammar, and Basic Arithmetic. Sepoy posts require passing a physical endurance test followed by a basic Matriculation-level general test. Stenotypists must demonstrate shorthand and typing speeds rather than general knowledge essays.',
    answerUr:
      'ہرگز نہیں! مختلف اسامیوں کا سلیبس بالکل الگ ہے۔ انسپکٹر انلینڈ ریونیو میں انکم ٹیکس و سیلز ٹیکس قوانین پوچھے جاتے ہیں؛ انسپکٹر کسٹمز میں جنرل نالج، انگریزی اور ریاضی شامل ہوتی ہے؛ سپاہی کے لیے جسمانی دوڑ اور میٹرک سطح کا ٹیسٹ ہوتا ہے؛ جبکہ سٹینوٹائپسٹ کے لیے شارٹ ہینڈ اور ٹائپنگ ٹیسٹ لازمی ہے۔',
    category: 'Syllabus Distinction',
  },
  {
    questionEn: 'What are the exact physical requirements for FBR Sepoy (BS-05)?',
    questionUr: 'ایف بی آر سپاہی (گریڈ 5) کے لیے جسمانی معیار کیا ہے؟',
    answerEn:
      'For male candidates, the minimum height requirement is 5 feet 6 inches (5\'6"), chest measurement must be 32 inches unexpanded with at least 1.5 inches of expansion (32"–33.5"), and a mandatory running trial of 1.6 km (1 mile) in 7 to 8 minutes. For female candidates, the minimum height is 5 feet 2 inches (5\'2") and a 1 km running/walking trial in 10 minutes. Candidates who fail preliminary height/chest measurement are disqualified before the race.',
    answerUr:
      'مرد امیدواروں کے لیے قد کم از کم 5 فٹ 6 انچ، چھاتی 32 انچ (پھیلاؤ کے ساتھ ساڑھے 33 انچ)، اور 1.6 کلومیٹر (ایک میل) کی دوڑ 7 سے 8 منٹ میں مکمل کرنا لازمی ہے۔ خواتین کے لیے قد کم از کم 5 فٹ 2 انچ اور 1 کلومیٹر کا فاصلہ 10 منٹ میں طے کرنا ہوتا ہے۔',
    category: 'Sepoy Criteria',
  },
  {
    questionEn: 'Does FPSC or FBR conduct my examination?',
    questionUr: 'میرا امتحان ایف پی ایس سی لے گا یا ایف بی آر خود؟',
    answerEn:
      'The recruiting authority depends strictly on the Basic Pay Scale (BS). Officer-level posts (BS-16 and BS-17, including Inspector Inland Revenue, Inspector Customs, and Appraising Officers) are recruited nationally through the Federal Public Service Commission (FPSC). Staff cadres (BS-01 to BS-15, including Sepoy, Stenotypist, UDC, LDC, and Data Entry Operator) are conducted departmentally by FBR Regional Tax Offices (RTOs) or Customs Collectorates via the National Job Portal (njp.gov.pk).',
    answerUr:
      'اس کا انحصار سکیل پر ہے۔ گریڈ 16 اور اس سے اوپر کے افسران (جیسے انسپکٹر انلینڈ ریونیو اور کسٹمز انسپکٹر) کا امتحان فیڈرل پبلک سروس کمیشن (FPSC) لیتا ہے۔ جبکہ گریڈ 1 سے 15 تک کی اسامیاں (سپاہی، ایل ڈی سی، یو ڈی سی، سٹینو وغیرہ) ایف بی آر کے ریجنل دفاتر این جے پی کے ذریعے خود منعقد کرتے ہیں۔',
    category: 'Recruiting Authority',
  },
  {
    questionEn: 'Where do I download my FBR roll number slip?',
    questionUr: 'ایف بی آر رول نمبر سلپ کہاں سے ڈاؤن لوڈ کی جائے؟',
    answerEn:
      'For FPSC-administered posts (BS-16+), download your Admission Certificate directly from fpsc.gov.pk under the "Admission Certificate" tab approximately 7 to 10 days before the exam phase. For departmental RTO posts (BS-05 to BS-15), roll number slips and physical call letters are either dispatched to your candidate dashboard on the National Job Portal (njp.gov.pk) or published as regional PDF candidate rosters on fbr.gov.pk.',
    answerUr:
      'گریڈ 16 کے انسپکٹرز اپنی داخلہ سلپ fpsc.gov.pk سے شناختی کارڈ نمبر لکھ کر ڈاؤن لوڈ کرتے ہیں۔ جبکہ سپاہی اور کلرک کی سلپس نیشنل جاب پورٹل (njp.gov.pk) پر لاگ ان کر کے یا ایف بی آر کی آفیشل ویب سائٹ پر اپنے متعلقہ ریجنل آفس کی لسٹ سے حاصل کی جاتی ہیں۔',
    category: 'Roll Number Slip',
  },
  {
    questionEn: 'Are official FBR past papers published anywhere?',
    questionUr: 'کیا ایف بی آر کے مصدقہ پاسٹ پیپرز سرکاری ویب سائٹ پر دستیاب ہیں؟',
    answerEn:
      'No official archive of past question papers is maintained or published by FBR or FPSC. Any website claiming to provide "official original FBR question booklets" is distributing unofficial memory-based recollections. Instead of paying private bookstalls for unverified booklets, candidates should prepare directly from the statutory tax law acts (Income Tax Ordinance 2001, Sales Tax Act 1990) and standard Pakistan Affairs and Basic Arithmetic practice textbooks.',
    answerUr:
      'ایف بی آر یا ایف پی ایس سی کی ویب سائٹ پر پاسٹ پیپرز کا کوئی سرکاری ریکارڈ موجود نہیں ہوتا۔ انٹرنیٹ پر موجود پیپرز امیدواروں کی یادداشت پر مبنی ہوتے ہیں۔ غیر تصدیق شدہ کتابچوں پر پیسے ضائع کرنے کے بجائے متعلقہ ٹیکس قوانین کی کتابوں اور جنرل نالج و میتھ کی بنیادی تیاری پر توجہ دیں۔',
    category: 'Past Papers Truth',
  },
  {
    questionEn: 'What is the upper age limit for FBR jobs, and how does relaxation work?',
    questionUr: 'ایف بی آر نوکریوں کے لیے عمر کی بالائی حد کیا ہے اور کتنی رعایت ملتی ہے؟',
    answerEn:
      'Standard advertised age limits are 18 to 25 years for BS-05 to BS-14, and 20 to 28 years for BS-16 posts. Under Federal Government statutory rules, a general 5-year age relaxation is automatically granted to all applicants, allowing candidates up to 30 or 33 years of age to apply. Additional relaxation of up to 3 years is available for candidates belonging to Scheduled Castes, Buddhist communities, recognized tribes of erstwhile FATA/AJK/Gilgit-Baltistan, and disabled applicants.',
    answerUr:
      'عام طور پر اشتہار میں عمر کی حد 18 سے 25 سال یا 20 سے 28 سال لکھی ہوتی ہے۔ تاہم وفاقی حکومت کی پالیسی کے تحت تمام امیدواروں کو 5 سال کی عمومی عمر رعایت بلا تفریق دی جاتی ہے، جس کے تحت 30 یا 33 سال تک کے افراد اہل ہو جاتے ہیں۔ مخصوص پسماندہ علاقوں اور معذور افراد کو مزید 3 سال رعایت ملتی ہے۔',
    category: 'Age Limit',
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { nameEn: 'Home', nameUr: 'ہوم', url: '/' },
            { nameEn: 'Jobs & Careers', nameUr: 'نوکریاں و کیریئر', url: '/jobs' },
            {
              nameEn: 'FBR Jobs Syllabus, Sepoy Criteria & Test Prep',
              nameUr: 'ایف بی آر نوکریاں سلیبس، سپاہی معیار و تیاری',
            },
          ]}
        />

        {/* Hero Header */}
        <header className="bg-doc-paper dark:bg-doc-dark-card border-2 border-doc-brass/40 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 relative z-10">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <VerifiedBadge variant="header" textEn="OFFICIAL TEST PREPARATION GUIDE 2026" />
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-full border border-blue-200 dark:border-blue-900">
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                <span>CADRE-SPECIFIC SYLLABI</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-900">
                <Dumbbell className="w-3.5 h-3.5 text-emerald-600" />
                <span>SEPOY PHYSICAL CRITERIA</span>
              </span>
            </div>

            <h1 className="font-serif font-extrabold text-2xl sm:text-3xl md:text-4xl text-doc-ink dark:text-slate-100 tracking-tight leading-tight">
              FBR Jobs Syllabus, Sepoy Physical Standards &amp; Test Prep Guide 2026
            </h1>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans max-w-3xl">
              Stop preparing with one-size-fits-all study guides. FBR recruitment spans multiple distinct professional cadres
              with completely different testing bodies (FPSC vs. FBR Regional Tax Offices), physical endurance standards, and
              curriculum structures. Access the verified breakdown for Inspector, Sepoy, Stenotypist, and Ministerial staff below.
            </p>
          </div>
        </header>

        {/* Direct Answer Box (40-60 words mandatory requirement) */}
        <DirectAnswerBox
          topicTitleEn="Quick Summary: What is the FBR Syllabus & Testing Structure?"
          topicTitleUr="فوری خلاصہ: ایف بی آر ٹیسٹ سلیبس اور بھرتی کا اصل طریقہ کار کیا ہے؟"
          answerEn="FBR jobs do not use a single universal syllabus. Higher officer posts (BS-16 Inspector Inland Revenue and Customs) are conducted by FPSC with heavy focus on tax laws, arithmetic, and general intelligence. Lower cadres (BS-05 Sepoy, UDC/LDC, Stenotypist) are recruited departmentally by Regional Tax Offices (RTOs) with mandatory physical trials or skill tests."
          answerUr="ایف بی آر کی تمام اسامیوں کا ایک سلیبس نہیں ہوتا۔ گریڈ 16 کے انسپکٹرز کا امتحان فیڈرل پبلک سروس کمیشن (FPSC) لیتا ہے جس میں ٹیکس قوانین اور جنرل نالج شامل ہے۔ جبکہ سپاہی (گریڈ 5) اور کلرکوں کی بھرتی ریجنل ٹیکس دفاتر این جے پی کے ذریعے خود کرتے ہیں جس میں جسمانی دوڑ اور اسکل ٹیسٹ لازمی ہوتا ہے۔"
        />

        {/* Honest Note on Past Papers Archive */}
        <section className="p-5 sm:p-6 rounded-3xl bg-amber-500/10 border-2 border-amber-500/40 space-y-3 relative overflow-hidden">
          <div className="flex items-start gap-3">
            <BadgeAlert className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h2 className="font-serif font-bold text-base sm:text-lg text-amber-900 dark:text-amber-200">
                Truth About FBR Past Papers: No Official Departmental Archive Exists
              </h2>
              <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-300/90 leading-relaxed font-sans">
                Many online bookstalls and scam blogs sell expensive &quot;Original FBR Solved Past Papers&quot;. <strong>In reality,
                neither the FBR nor the FPSC officially publishes past exam question papers or master answer keys</strong>. For
                departmental tests (Sepoy, LDC/UDC), physical question booklets are collected at the end of each screening session.
                Instead of relying on unverified memory compilations, prepare rigorously using the verified statutory syllabus,
                official tax ordinances (Income Tax Ordinance 2001, Sales Tax Act 1990), and basic quantitative math modules
                detailed below.
              </p>
            </div>
          </div>
        </section>

        {/* Cadre-by-Cadre Master Comparison Matrix */}
        <section className="space-y-4">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-doc-seal dark:text-red-400 font-bold">
              CADRE COMPARISON MATRIX
            </span>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-doc-ink dark:text-slate-100">
              FBR Cadres: Grades, Recruiting Bodies, Syllabi &amp; Mandatory Requirements
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans">
              Compare the exact recruitment track for your target post to ensure you register on the right portal and study the right topics.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-doc-brass/40 shadow-sm bg-white dark:bg-doc-dark-card">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800/80 text-doc-ink dark:text-slate-200 font-serif font-bold border-b border-doc-brass/30">
                  <th className="p-3.5 sm:p-4">Post / Designation</th>
                  <th className="p-3.5 sm:p-4">Basic Pay Scale (BS)</th>
                  <th className="p-3.5 sm:p-4 text-blue-800 dark:text-blue-300">Recruiting Body</th>
                  <th className="p-3.5 sm:p-4">Test Syllabus &amp; Structure</th>
                  <th className="p-3.5 sm:p-4">Special Physical / Skill Criteria</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-sans">
                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-doc-ink dark:text-slate-200">
                    Inspector Inland Revenue
                  </td>
                  <td className="p-3.5 sm:p-4 font-mono font-bold">BS-16</td>
                  <td className="p-3.5 sm:p-4 text-blue-700 dark:text-blue-400 font-bold">
                    FPSC (fpsc.gov.pk)
                  </td>
                  <td className="p-3.5 sm:p-4">
                    <strong>100 MCQs:</strong> Part-I English (20 Marks); Part-II Professional (80 Marks) covering Income Tax Ordinance 2001, Sales Tax Act 1990, Federal Excise Act 2005 &amp; Fiscal Policy.
                  </td>
                  <td className="p-3.5 sm:p-4 text-slate-500">Bachelor&apos;s Degree (Business/Commerce/Economics/Law)</td>
                </tr>

                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-doc-ink dark:text-slate-200">
                    Inspector Customs / Intelligence Officer
                  </td>
                  <td className="p-3.5 sm:p-4 font-mono font-bold">BS-16</td>
                  <td className="p-3.5 sm:p-4 text-blue-700 dark:text-blue-400 font-bold">
                    FPSC (fpsc.gov.pk)
                  </td>
                  <td className="p-3.5 sm:p-4">
                    <strong>100 MCQs:</strong> English Grammar &amp; Vocabulary (20 Marks), Basic Arithmetic/Algebra (20 Marks), General Intelligence, Current Affairs &amp; Pakistan Studies (60 Marks).
                  </td>
                  <td className="p-3.5 sm:p-4 text-slate-500">
                    Second Class Bachelor&apos;s Degree; Height 5&apos;6&quot; (Male) / 5&apos;2&quot; (Female) required at final medical.
                  </td>
                </tr>

                <tr className="bg-emerald-50/40 dark:bg-emerald-950/20">
                  <td className="p-3.5 sm:p-4 font-semibold text-emerald-900 dark:text-emerald-300">
                    Sepoy (Customs / Inland Revenue)
                  </td>
                  <td className="p-3.5 sm:p-4 font-mono font-bold text-emerald-800 dark:text-emerald-400">BS-05</td>
                  <td className="p-3.5 sm:p-4 text-emerald-700 dark:text-emerald-400 font-bold">
                    FBR Regional Office / NJP (njp.gov.pk)
                  </td>
                  <td className="p-3.5 sm:p-4">
                    <strong>Matric-Level Screening:</strong> Basic English grammar, General Knowledge, Islamiat, and simple math operations.
                  </td>
                  <td className="p-3.5 sm:p-4 text-emerald-800 dark:text-emerald-300 font-semibold">
                    Mandatory Physical: Height 5&apos;6&quot;, Chest 32&quot;–33.5&quot;, 1.6 km run in 7–8 mins (Male); Height 5&apos;2&quot;, 1 km run in 10 mins (Female).
                  </td>
                </tr>

                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-doc-ink dark:text-slate-200">
                    Stenotypist
                  </td>
                  <td className="p-3.5 sm:p-4 font-mono font-bold">BS-14</td>
                  <td className="p-3.5 sm:p-4 text-slate-700 dark:text-slate-300 font-bold">
                    FBR Regional Office / NJP
                  </td>
                  <td className="p-3.5 sm:p-4">
                    Skill-based evaluation: Practical shorthand dictation and computerized typing speed assessment.
                  </td>
                  <td className="p-3.5 sm:p-4 text-slate-600 dark:text-slate-400">
                    Intermediate (12 Years) + Minimum 80 wpm shorthand &amp; 40 wpm typing speed; Computer literacy required.
                  </td>
                </tr>

                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-doc-ink dark:text-slate-200">
                    Data Entry Operator (DEO)
                  </td>
                  <td className="p-3.5 sm:p-4 font-mono font-bold">BS-14</td>
                  <td className="p-3.5 sm:p-4 text-slate-700 dark:text-slate-300 font-bold">
                    FBR Regional Office / NJP
                  </td>
                  <td className="p-3.5 sm:p-4">
                    Written screening in Computer Science, MS Office suite, basic networking, and English.
                  </td>
                  <td className="p-3.5 sm:p-4 text-slate-600 dark:text-slate-400">
                    Bachelor&apos;s with Computer Science/Physics/Stats + Minimum 10,000 key depressions per hour typing speed.
                  </td>
                </tr>

                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-doc-ink dark:text-slate-200">
                    Upper Division Clerk (UDC) / LDC
                  </td>
                  <td className="p-3.5 sm:p-4 font-mono font-bold">BS-11 / BS-09</td>
                  <td className="p-3.5 sm:p-4 text-slate-700 dark:text-slate-300 font-bold">
                    FBR Regional Office / NJP
                  </td>
                  <td className="p-3.5 sm:p-4">
                    Screening test covering General Knowledge, Everyday Science, Basic English, and simple Arithmetic.
                  </td>
                  <td className="p-3.5 sm:p-4 text-slate-600 dark:text-slate-400">
                    Intermediate (for UDC) / Matric (for LDC) + Minimum 30 wpm typing speed + 3-week basic IT training course from NITB.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Dedicated Sepoy Section: Physical Criteria */}
        <section className="bg-white dark:bg-doc-dark-card border border-doc-brass/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-doc-seal dark:text-red-400 font-mono text-xs uppercase font-bold tracking-wider">
              <Dumbbell className="w-4 h-4" />
              <span>SECURITY &amp; ENFORCEMENT CADRE</span>
            </div>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-doc-ink dark:text-slate-100">
              FBR Sepoy (BS-05) Physical Standards &amp; Fitness Protocol
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans">
              Unlike ministerial desk roles, the post of Sepoy requires passing rigorous physical measurements and endurance
              running before being eligible for the written screening test.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Male Candidate Criteria */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">
                  Male Candidates
                </span>
                <Users className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-slate-100">
                Physical Measurement &amp; Running Standards
              </h3>
              <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2.5 font-sans">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Minimum Height:</strong> Exactly 5 feet 6 inches (5&apos;6&quot; / 167.6 cm). Measured barefoot.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Chest Measurement:</strong> 32 inches unexpanded, with a mandatory 1.5-inch expansion (32&quot; – 33.5&quot;).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Running Trial:</strong> 1.6 kilometers (1 mile) in 7 to 8 minutes on standard outdoor tracks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Additional Exercises:</strong> 15–20 push-ups and sit-ups (depending on local Customs formation).</span>
                </li>
              </ul>
            </div>

            {/* Female Candidate Criteria */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 uppercase">
                  Female Candidates
                </span>
                <Users className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-slate-100">
                Physical Measurement &amp; Running Standards
              </h3>
              <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2.5 font-sans">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Minimum Height:</strong> Exactly 5 feet 2 inches (5&apos;2&quot; / 157.5 cm). Measured barefoot.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Chest Measurement:</strong> Not applicable to female candidates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Running / Walk Trial:</strong> 1.0 kilometer in 10 minutes on outdoor tracks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Educational Minimum:</strong> Secondary School Certificate (Matriculation) with minimum Grade &apos;C&apos;.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs text-amber-900 dark:text-amber-300 font-sans flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>Crucial Test Day Rule:</strong> Height and chest standards are strictly non-negotiable. Candidates who fall
              even half an inch below the 5&apos;6&quot; or 5&apos;2&quot; requirement are disqualified immediately at the physical measurement
              desk and will not be permitted to run or take the written screening. Wear comfortable jogging shoes and sportswear.
            </span>
          </div>
        </section>

        {/* Ad Placement Zone */}
        <AdPlacementZone />

        {/* ProcessSteps: How to Retrieve Roll Number Slips */}
        <section className="space-y-4">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-doc-seal dark:text-red-400 font-bold">
              SLIP RETRIEVAL PROTOCOL
            </span>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-doc-ink dark:text-slate-100">
              How to Download Your FBR Test Roll Number Slip: FPSC vs. RTO Direct
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans">
              Follow this dual-channel procedure to retrieve your computerized test admission certificate before examination day.
            </p>
          </div>

          <ProcessStepsDiagram
            titleEn="Step-by-Step Roll Number Slip Retrieval Workflow"
            titleUr="رول نمبر سلپ ڈاؤن لوڈ کرنے کا مکمل طریقہ کار"
            subtitleEn="Branched process for FPSC General Recruitment vs. Regional Tax Office screening"
            subtitleUr="ایف پی ایس سی بمقابلہ ریجنل ٹیکس آفس امتحانی داخلہ سلپس"
            steps={rollNumberSteps}
            variant="paper"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">
                  Channel 1: FPSC Posts (BS-16+)
                </span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </div>
              <h4 className="font-serif font-bold text-sm text-doc-ink dark:text-slate-200">
                FPSC Admission Certificate Portal (fpsc.gov.pk)
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                Navigate to <code>fpsc.gov.pk &gt; General Recruitment &gt; Admission Certificates</code>. Enter your 13-digit CNIC
                without dashes, select your Case Number (e.g. F.4-XXX/2026-R), and click Submit. Your computerized roll number
                slip with test center location and session timing will appear as a printable PDF.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                  Channel 2: RTO Departmental Posts (BS-05 to BS-15)
                </span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </div>
              <h4 className="font-serif font-bold text-sm text-doc-ink dark:text-slate-200">
                National Job Portal / FBR Regional Roster (njp.gov.pk)
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                Log in to your dashboard on the <strong>National Job Portal (njp.gov.pk)</strong> under &quot;My Applications&quot; to download
                your call letter. Additionally, check <code>fbr.gov.pk &gt; Careers</code> where regional RTOs (e.g. RTO Lahore,
                RTO Rawalpindi, Corporate Tax Office Karachi) publish PDF candidate roll number rosters for physical venues.
              </p>
            </div>
          </div>
        </section>

        {/* Visual FAQ Accordion */}
        <FAQAccordionVisual
          items={faqsData}
          titleEn="Frequently Asked Questions: FBR Test Prep & Cadre Rules"
          titleUr="عام طور پر پوچھے جانے والے سوالات: تیاری و قواعد"
          subtitleEn="Verified candidate clarifications on syllabi, testing agencies, past papers, and age criteria"
          subtitleUr="سلیبس، امتحانی اداروں اور عمر رعایت کے متعلق ضروری رہنمائی"
        />

        {/* Cross-Linking Navigation */}
        <section className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-doc-brass/30 space-y-4">
          <div className="flex items-center gap-2 text-doc-seal dark:text-red-400 font-mono text-xs uppercase font-bold tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>RELATED RECRUITMENT GUIDES &amp; EXAMINATION TOOLS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/jobs/fbr-jobs-careers-how-to-apply-2026"
              className="p-4 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/20 hover:border-doc-seal transition space-y-1.5 group flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-bold">Application Guide</span>
                <h4 className="font-serif font-bold text-sm text-doc-ink dark:text-slate-100 group-hover:text-doc-seal transition">
                  FBR Jobs &amp; Careers: How to Apply
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  Complete official guide to applying for FBR careers via FPSC vs NJP, testing agencies, and avoiding job scams.
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-doc-seal dark:text-red-300 flex items-center gap-1 pt-2">
                <span>View Application Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/jobs/roll-number-slip-checker-2026"
              className="p-4 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/20 hover:border-doc-seal transition space-y-1.5 group flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">Slip Portal</span>
                <h4 className="font-serif font-bold text-sm text-doc-ink dark:text-slate-100 group-hover:text-doc-seal transition">
                  Roll Number Slip Checker 2026
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  Direct lookup and download links for FPSC, PPSC, NTS, and federal testing agency roll number slips.
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-doc-seal dark:text-red-300 flex items-center gap-1 pt-2">
                <span>Check Slip Status</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/jobs/fpsc-ppsc-age-relaxation-quota-rules-2026"
              className="p-4 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/20 hover:border-doc-seal transition space-y-1.5 group flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-bold">Quota &amp; Age</span>
                <h4 className="font-serif font-bold text-sm text-doc-ink dark:text-slate-100 group-hover:text-doc-seal transition">
                  FPSC &amp; PPSC Age Relaxation Rules
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  Federal statutory 5-year age relaxation, provincial quota distributions, and special category provisions.
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-doc-seal dark:text-red-300 flex items-center gap-1 pt-2">
                <span>View Quota Rules</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
