import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, ComparisonVisual, FAQAccordionVisual } from '@/components/visuals';
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
  Award,
  Sparkles,
  MapPin
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NADRA Jobs & Careers 2026 – How to Apply, Official Portal & Scam Warnings',
  description:
    'Complete evergreen guide to NADRA careers: Official application process via careers.nadra.gov.pk, IT & software roles, NRC customer service & data entry walk-in tests, eligibility rules, and fake job scam warnings.',
  keywords: [
    'nadra jobs 2026',
    'nadra careers how to apply',
    'careers nadra gov pk online apply',
    'nadra data entry operator jobs',
    'nadra walk in test interview regional office',
    'nadra software engineer careers',
    'nadra fake job scam warning',
    'nadra recruitment eligibility criteria',
    'nadra test roll number slip',
  ],
  openGraph: {
    title: 'NADRA Jobs & Careers 2026 – How to Apply, Official Channels & Scam Protection',
    description:
      'Evergreen official guide to applying for NADRA careers: IT, software engineering, customer service, walk-in recruitment channels, and scam protection.',
    url: 'https://www.pakistaninfohub.com/nadra/nadra-jobs-careers-how-to-apply-2026',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/nadra/nadra-jobs-careers-how-to-apply-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'NADRA Services', item: 'https://www.pakistaninfohub.com/nadra' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'NADRA Jobs & Careers Guide 2026',
          item: 'https://www.pakistaninfohub.com/nadra/nadra-jobs-careers-how-to-apply-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'NADRA Jobs & Careers Guide 2026: Official Recruitment Channels, Walk-In Tests & Scam Protection',
      description:
        'An authoritative, evergreen citizen guide explaining official NADRA career tracks, the careers.nadra.gov.pk portal, walk-in testing procedures at Regional Head Offices, document requirements, and scam verification.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-03',
      dateModified: '2026-09-03',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/nadra/nadra-jobs-careers-how-to-apply-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Apply for Legitimate NADRA Vacancies in Pakistan',
      description: 'Step-by-step procedure to locate, verify, and submit applications for genuine NADRA positions.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Visit the Official NADRA Careers Portal',
          text: 'Open careers.nadra.gov.pk directly in your browser. Cross-verify with national daily newspapers (Jang, Dawn, The News, Express) where NADRA publishes formal advertisements.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Determine Recruitment Stream (Online vs Walk-In)',
          text: 'Technical and professional roles require online submission on careers.nadra.gov.pk. Operational branch roles (Data Entry Operators, Customer Service) often specify direct walk-in tests and interviews at Regional Head Offices.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Assemble Original Credentials & Domicile',
          text: 'Ensure you hold an original valid CNIC, verified educational degrees/certificates, local district domicile, and experience letters. NADRA strictly enforces district-level domicile quotas for field positions.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Participate in Screening Tests & Interview',
          text: 'Attend typing tests (for DEOs, typically 30+ WPM benchmark), written computer aptitude examinations, and panel interviews. Legitimate appointments never require upfront private mobile wallet fees.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the official website for NADRA job applications?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The only official job portal for NADRA is careers.nadra.gov.pk. Official career circulars are also posted on the main portal nadra.gov.pk under Careers and announced in mainstream national print newspapers. NADRA does not use generic blog sites, Google Forms, or WhatsApp groups for recruiting.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does NADRA charge an application or test fee for jobs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NADRA’s direct departmental recruitments and walk-in interviews are 100% free of charge. NADRA never asks applicants to deposit registration fees, interview security, or medical screening charges into private EasyPaisa, JazzCash, or individual bank accounts. Any request for mobile money transfers is a confirmed fraud.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the typing speed and qualification requirements for a Data Entry Operator (DEO)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For Customer Service Executives and Data Entry Operators (DEOs), the minimum qualification is typically Intermediate (FA/FSc/ICS) or Graduation from a recognized board/university, combined with a computer typing speed of at least 30 to 40 words per minute (WPM). Basic proficiency in MS Office and database entry is tested on-site.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can an applicant apply for NADRA jobs outside their registered domicile district?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For nationwide IT, software architecture, and executive corporate roles at NADRA Headquarters (Islamabad), applications are open nationwide on merit. However, for NRC counter staff, data entry operators, and field verification roles, recruitment is strictly location-specific based on district domicile to ensure staff belong to the local community.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do walk-in tests and interviews work at NADRA Regional Head Offices?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For operational branch positions, NADRA regularly conducts walk-in tests. Candidates must appear directly at the designated Regional Head Office (e.g. Islamabad, Lahore, Karachi, Peshawar, Quetta, Sukkur, Multan) on the dates specified in the newspaper circular, carrying their original CNIC, educational transcripts, domicile, and photocopies.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are NADRA jobs permanent or contract-based?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most modern NADRA recruitments (both technical specialists and NRC operational teams) are initially structured as 1 to 3-year renewable contracts or project-based agreements, subject to satisfactory performance and organizational requirements. Senior civil posts governed by federal statutory quotas follow government civil service rules.',
          },
        },
      ],
    },
  ],
};

export default function NadraJobsCareersPage() {
  const breadcrumbs = [
    { nameEn: 'NADRA Services', nameUr: 'نادرا سروسز', url: '/nadra' },
    { nameEn: 'NADRA Jobs & Careers 2026', nameUr: 'نادرا جابز و کیریئرز 2026' },
  ];

  const applicationSteps = [
    {
      number: 1,
      icon: <Globe className="w-5 h-5" />,
      titleEn: 'Check careers.nadra.gov.pk',
      titleUr: 'آفیشل پورٹل پر چیک کریں',
      descEn: 'Visit the official careers portal and cross-reference with national daily newspapers for active vacancy circulars.',
      descUr: 'نادرا کی آفیشل ویب سائٹ careers.nadra.gov.pk اور قومی اخبارات سے اشتہار کی تصدیق کریں۔',
      tagEn: 'Official Domain',
      tagUr: 'سرکاری پورٹل',
    },
    {
      number: 2,
      icon: <Layers className="w-5 h-5" />,
      titleEn: 'Identify Post Type & Channel',
      titleUr: 'عہدے اور طریقہ کار کا تعین',
      descEn: 'Determine whether the role requires online portal submission (IT/HQ roles) or a direct walk-in test (NRC counter staff).',
      descUr: 'دیکھیں کہ کیا آن لائن فارم جمع کرانا ہے یا علاقائی ہیڈ آفس میں واک ان انٹرویو کے لیے جانا ہے۔',
      tagEn: '2 Streams',
      tagUr: 'دو طریقے',
    },
    {
      number: 3,
      icon: <FileCheck className="w-5 h-5" />,
      titleEn: 'Prepare Domicile & Degrees',
      titleUr: 'اصل اسناد اور ڈومیسائل کی تیاری',
      descEn: 'Gather your original valid CNIC, verified HEC/Board educational degrees, and district domicile certificate.',
      descUr: 'اپنا اصل شناختی کارڈ، تعلیمی اسناد اور متعلقہ ضلع کا ڈومیسائل لازمی ہمراہ رکھیں۔',
      tagEn: 'Originals Required',
      tagUr: 'اصل کاغذات',
    },
    {
      number: 4,
      icon: <UserCheck className="w-5 h-5" />,
      titleEn: 'Appear for Test & Interview',
      titleUr: 'ٹیسٹ اور انٹرویو میں شرکت',
      descEn: 'Complete computer typing tests (for DEOs) and technical panel interviews. Legitimate jobs never charge private fees.',
      descUr: 'کمپیوٹر ٹائپنگ ٹیسٹ اور انٹرویو دیں۔ نادرا بھرتی کے لیے کبھی ذاتی اکاؤنٹ میں فیس نہیں لی جاتی۔',
      tagEn: 'Free Process',
      tagUr: 'مفت ٹیسٹ',
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
            <InteractiveToolBadge labelEn="EVERGREEN CAREER GUIDE" labelUr="مستقل کیریئر گائیڈ" variant="navy" />
            <VerifiedBadge textEn="CAREERS.NADRA.GOV.PK COMPLIANT" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            NADRA Jobs &amp; Careers Guide 2026: Official Application Channels, Testing &amp; Scam Alerts
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              نادرا میں ملازمت کا طریقہ کار: آفیشل پورٹل، واک ان ٹیسٹ اور جعلسازی سے بچاؤ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Looking to build a career at Pakistan’s premier digital identity authority? Here is the definitive, evergreen guide explaining how NADRA recruits software engineers, data entry operators, and customer service executives through official channels—without falling victim to rampant fake job scams.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Apply for Genuine NADRA Jobs in Pakistan (2026)"
          topicTitleUr="نادرا میں ملازمت کے لیے درخواست دینے کا درست طریقہ کیا ہے؟"
          answerEn="NADRA recruits through two legitimate channels: (1) Its dedicated career portal at careers.nadra.gov.pk for technical, software engineering, database, and managerial roles; and (2) Published walk-in tests/interviews at Regional Head Offices (Islamabad, Lahore, Karachi, Peshawar, Quetta, Multan, Sukkur) for counter positions like Customer Service Executives and Data Entry Operators. NADRA never uses WhatsApp for hiring and never charges registration fees via EasyPaisa or JazzCash."
          answerUr="نادرا میں بھرتی کے دو مستند طریقے ہیں: اول، careers.nadra.gov.pk پورٹل کے ذریعے سافٹ ویئر انجینئرنگ اور مینجمنٹ کی آسامیوں پر آن لائن اپلائی؛ دوم، روزنامہ اخبارات میں شائع شدہ تاریخوں پر ریجنل ہیڈ آفسز میں ڈیٹا انٹری آپریٹر اور کسٹمر سروس کے لیے براہ راست واک ان ٹیسٹ۔ نادرا کبھی واٹس ایپ پر نوکری آفر نہیں کرتا اور نہ ہی ایزی پیسہ/جاز کیش کے ذریعے فیس مانگتا ہے۔"
        />

        {/* Friendly Conversational Notice */}
        <section className="p-6 rounded-2xl bg-amber-50/70 dark:bg-slate-900/80 border border-amber-200/80 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-doc-seal dark:text-amber-400 font-serif font-bold text-lg">
            <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
            <span>Understanding NADRA&apos;s Independent HR Structure</span>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Unlike many traditional federal ministries that channel all non-gazetted recruitment through testing agencies, the <strong>National Database and Registration Authority (NADRA)</strong> is an autonomous corporate body established under the NADRA Ordinance, 2000. It manages its own Human Resource Management System (HRMS), formulates market-competitive IT compensation packages, and conducts internal technical evaluations directly.
          </p>
        </section>

        {/* Primary Job Categories */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Employment Tracks</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
              Core Career Categories at NADRA
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              NADRA hires professionals across diverse disciplines. Understanding these tracks helps candidates target the correct portal and preparation strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Track 1: IT & Tech */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <Briefcase className="w-5 h-5 shrink-0" />
                <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
                  1. Information Technology &amp; Software Engineering
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                As the custodian of 240+ million citizen records, NADRA operates one of the largest biometric databases in the world. IT roles are recruited on market-based compensation packages.
              </p>
              <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 list-disc pl-5">
                <li>Software Engineers (Java, C#, .NET, Python, Node.js)</li>
                <li>Biometric &amp; Facial Recognition Algorithm Specialists</li>
                <li>Database Administrators (Oracle, PostgreSQL, Big Data)</li>
                <li>Cybersecurity Analysts &amp; SOC Engineers</li>
                <li>Cloud Infrastructure &amp; DevOps Engineers</li>
              </ul>
              <div className="pt-2 text-xs font-bold text-blue-600 dark:text-blue-400">
                Channel: 100% online via careers.nadra.gov.pk
              </div>
            </div>

            {/* Track 2: NRC Branch Operations */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <Building className="w-5 h-5 shrink-0" />
                <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
                  2. NRC Branch Operations &amp; Customer Service
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                These front-line positions staff over 800+ registration centers, Mega Centers, and Mobile Registration Vans (MRVs) across every district in Pakistan.
              </p>
              <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 list-disc pl-5">
                <li>Customer Service Executives (CSE) &amp; Token Clerks</li>
                <li>Data Entry Operators (DEO) (requires 30–40 WPM typing)</li>
                <li>Shift Supervisors &amp; Floor In-charges</li>
                <li>Mobile Registration Van (MRV) Operators &amp; Drivers</li>
                <li>Fingerprint / Biometric Quality Auditors</li>
              </ul>
              <div className="pt-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                Channel: Walk-in tests at Regional Head Offices or portal
              </div>
            </div>

            {/* Track 3: Field Verification */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
                  3. Intelligence, Field Verification &amp; Security
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Field teams conduct physical ground verifications for doubtful family tree cases, succession certificate inquiries, and border district alien verification.
              </p>
              <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 list-disc pl-5">
                <li>Field Verification Officers &amp; Vigilance Staff</li>
                <li>Security Officers for Mega Centers &amp; Headquarters</li>
                <li>Internal Audit &amp; Anti-Corruption Vigilance Units</li>
              </ul>
            </div>

            {/* Track 4: Corporate & Administration */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                <Landmark className="w-5 h-5 shrink-0" />
                <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
                  4. Finance, Legal &amp; Corporate Affairs
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Centralized management at NADRA HQ handles statutory compliance, litigation, public communications, and commercial e-Sahulat partner relations.
              </p>
              <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 list-disc pl-5">
                <li>Legal Counsels &amp; Court Representation Officers</li>
                <li>Chartered Accountants, Financial Analysts &amp; Budget Officers</li>
                <li>Human Resource Officers &amp; Training Instructors</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process Steps Diagram */}
        <ProcessStepsDiagram
          badgeEn="APPLICATION BLUEPRINT 2026"
          badgeUr="درخواست کا طریقہ"
          titleEn="Step-by-Step NADRA Application Procedure"
          titleUr="نادرا کی ملازمت کے لیے درخواست دینے کا مرحلہ وار طریقہ"
          subtitleEn="Follow this verified 4-step workflow to submit your application for genuine vacancies."
          subtitleUr="نادرا کی مستند آسامیوں پر درخواست جمع کرانے کے لیے ان چار مراحل پر عمل کریں۔"
          steps={applicationSteps}
        />

        {/* Regional Head Offices Directory */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex items-center gap-2 font-serif font-extrabold text-xl text-doc-ink dark:text-white">
            <MapPin className="w-5 h-5 text-doc-seal dark:text-amber-400" />
            <span>Where Walk-In Tests &amp; Interviews Take Place</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            When NADRA advertises walk-in tests for counter staff and data entry operators in national newspapers, candidates must report to their respective <strong>Regional Head Office (RHO)</strong>:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <strong className="text-doc-ink dark:text-white block font-bold">RHO Islamabad / Rawalpindi</strong>
              <span className="text-slate-500 dark:text-slate-400">Mauve Area, G-10/4, Islamabad</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <strong className="text-doc-ink dark:text-white block font-bold">RHO Lahore</strong>
              <span className="text-slate-500 dark:text-slate-400">73-Trade Centre, M.A. Johar Town, Lahore</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <strong className="text-doc-ink dark:text-white block font-bold">RHO Karachi</strong>
              <span className="text-slate-500 dark:text-slate-400">29-E, Block 6, PECHS, Shahrah-e-Faisal, Karachi</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <strong className="text-doc-ink dark:text-white block font-bold">RHO Peshawar</strong>
              <span className="text-slate-500 dark:text-slate-400">Plot 30, Sector B-1, Phase 5, Hayatabad, Peshawar</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <strong className="text-doc-ink dark:text-white block font-bold">RHO Quetta</strong>
              <span className="text-slate-500 dark:text-slate-400">Zarghoon Road, Near Railway Station, Quetta</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <strong className="text-doc-ink dark:text-white block font-bold">RHO Multan / Sukkur / Sargodha</strong>
              <span className="text-slate-500 dark:text-slate-400">Designated divisional offices specified per circular</span>
            </div>
          </div>
        </section>

        {/* Scam Protection Alert Section */}
        <section className="p-6 sm:p-8 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-300 dark:border-rose-800 space-y-4">
          <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-serif font-extrabold text-xl">
            <ShieldAlert className="w-6 h-6 shrink-0" />
            <span>Crucial Scam Warning: Fake NADRA Job Advertisements</span>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Due to the high prestige and competitive benefits of government employment, scammers frequently publish forged &quot;NADRA Hiring Circulars&quot; on social media platforms (Facebook, TikTok, WhatsApp groups) with headlines like <em>&quot;15,000 NADRA Vacancies Without Test – Apply on WhatsApp&quot;</em>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800 space-y-2">
              <div className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400 font-bold text-sm">
                <X className="w-4 h-4" />
                <span>Confirmed Scam Tactics</span>
              </div>
              <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5">
                <li>Asking for Rs. 1,000–3,500 fee transfer via EasyPaisa or JazzCash.</li>
                <li>Instructing candidates to submit CVs and CNIC photos over WhatsApp.</li>
                <li>Using unofficial web domains (e.g. <code>nadrajobs-portal.pk</code> or blogspot links).</li>
                <li>Issuing fake &quot;Direct Appointment Letters&quot; without any interview.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 space-y-2">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                <Check className="w-4 h-4" />
                <span>NADRA Official Reality</span>
              </div>
              <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5">
                <li>All recruitment is advertised on <strong>careers.nadra.gov.pk</strong> and print papers.</li>
                <li>NADRA departmental tests and interviews are completely <strong>FREE</strong>.</li>
                <li>Testing and interviews always require in-person physical appearance.</li>
                <li>Appointments undergo multi-tier security and biometric clearance.</li>
              </ul>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/jobs/verified-govt-jobs-sources-avoid-scams-2026"
              className="inline-flex items-center gap-2 text-sm font-bold text-rose-700 dark:text-rose-400 hover:underline"
            >
              <span>Read our complete guide: Verified Govt Job Sources &amp; Scam Avoidance in Pakistan</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Ad Zone */}
        <AdPlacementZone format="horizontal" />

        {/* Cross-linking Section */}
        <section className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h2 className="font-serif font-extrabold text-xl text-doc-ink dark:text-white">
            Related Public Sector Career &amp; Identity Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            <Link
              href="/jobs/fbr-jobs-careers-how-to-apply-2026"
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex items-center justify-between group"
            >
              <span className="font-bold text-doc-ink dark:text-white group-hover:text-doc-seal">FBR Careers 2026</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-doc-seal" />
            </Link>
            <Link
              href="/jobs/verified-govt-jobs-sources-avoid-scams-2026"
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex items-center justify-between group"
            >
              <span className="font-bold text-doc-ink dark:text-white group-hover:text-doc-seal">Govt Jobs Scam Guide</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-doc-seal" />
            </Link>
            <Link
              href="/nadra/nadra-registration-center-locator-guide-2026"
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex items-center justify-between group"
            >
              <span className="font-bold text-doc-ink dark:text-white group-hover:text-doc-seal">NRC Centers Directory</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-doc-seal" />
            </Link>
            <Link
              href="/jobs/fpsc-ppsc-age-relaxation-quota-rules-2026"
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex items-center justify-between group"
            >
              <span className="font-bold text-doc-ink dark:text-white group-hover:text-doc-seal">Age Relaxation Rules</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-doc-seal" />
            </Link>
          </div>
        </section>

        {/* FAQ Accordion Visual */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions: NADRA Jobs & Recruitment 2026"
          titleUr="عام سوالات: نادرا بھرتیاں اور نوکری حاصل کرنے کا طریقہ"
          subtitleEn="Expert verified answers regarding eligibility, typing requirements, walk-in testing dates, and application safety."
          subtitleUr="اہلیت، ٹائپنگ سپیڈ اور امتحانی طریقہ کار سے متعلق تمام بنیادی سوالات کے جوابات۔"
          items={[
            {
              questionEn: "What is the official website for NADRA job applications?",
              questionUr: "نادرا کی نوکریوں کے لیے آفیشل ویب سائٹ کون سی ہے؟",
              answerEn: "The only official job portal for NADRA is careers.nadra.gov.pk. Official career circulars are also announced on nadra.gov.pk and in mainstream national newspapers like Daily Jang and Dawn.",
              answerUr: "نادرا جابز کے لیے واحد مستند ویب پورٹل careers.nadra.gov.pk ہے اور اشتہارات قومی اخبارات میں شائع ہوتے ہیں۔",
            },
            {
              questionEn: "Does NADRA charge an application or testing fee?",
              questionUr: "کیا نادرا ٹیسٹ یا درخواست کی فیس وصول کرتا ہے؟",
              answerEn: "No. Departmental walk-in tests and recruitment at NADRA are 100% free of charge. NADRA never demands fee transfers to private EasyPaisa, JazzCash, or personal accounts.",
              answerUr: "ہرگز نہیں! نادرا واک ان ٹیسٹ اور بھرتی کا عمل بالکل مفت ہے۔ ایزی پیسہ یا جاز کیش کے ذریعے فیس مانگنے والے فراڈیے ہیں۔",
            },
            {
              questionEn: "What are the typing speed requirements for Data Entry Operators?",
              questionUr: "ڈیٹا انٹری آپریٹر کے لیے ٹائپنگ سپیڈ کتنی ہونی چاہیے؟",
              answerEn: "Candidates are typically required to have a minimum typing speed of 30 to 40 words per minute (WPM) with high accuracy, along with basic proficiency in MS Office and database operations.",
              answerUr: "امیدوار کے لیے کم از کم 30 سے 40 الفاظ فی منٹ (WPM) کی ٹائپنگ رفتار اور کمپیوٹر کا بنیادی علم لازمی ہے۔",
            },
            {
              questionEn: "Can I apply for a NADRA counter post in another city?",
              questionUr: "کیا میں اپنے ضلع کے علاوہ کسی دوسرے شہر میں نادرا کی نوکری کے لیے اپلائی کر سکتا ہوں؟",
              answerEn: "For NRC counter positions (DEO, customer service, supervisors), recruitment is strictly location-specific based on district domicile. For HQ technical IT roles, candidates across Pakistan are eligible on merit.",
              answerUr: "سینٹر کے عملے کے لیے متعلقہ ضلع کا ڈومیسائل لازمی ہے جبکہ اسلام آباد ہیڈ کوارٹر کی آئی ٹی پوسٹوں کے لیے پورے پاکستان سے اپلائی ہو سکتا ہے۔",
            },
            {
              questionEn: "What documents must I take to a walk-in interview at NADRA RHO?",
              questionUr: "واک ان انٹرویو کے لیے کون سے کاغذات ساتھ لے جانا ضروری ہیں؟",
              answerEn: "Bring your original valid CNIC, original educational degrees and mark sheets (Matric, Inter, Graduation), district domicile certificate, experience certificates, 2 passport-size photographs, and one set of attested photocopies.",
              answerUr: "اصل شناختی کارڈ، اسناد و ڈگریاں، ڈومیسائل، تجربہ سرٹیفکیٹ، 2 عدد پاسپورٹ سائز تصاویر اور تصدیق شدہ فوٹو کاپیاں۔",
            },
            {
              questionEn: "Are NADRA positions permanent government jobs or contract-based?",
              questionUr: "کیا نادرا کی نوکریاں مستقل سرکاری ہوتی ہیں یا کنٹریکٹ پر؟",
              answerEn: "Most initial appointments for technical specialists and operational staff are on 1 to 3-year renewable contracts based on performance and organizational needs, with market-competitive salaries.",
              answerUr: "زیادہ تر بھرتیاں ایک سے تین سالہ قابلِ تجدید کنٹریکٹ پر ہوتی ہیں جن میں تسلی بخش کارکردگی پر توسیع کی جاتی ہے۔",
            },
          ]}
        />
      </div>
    </>
  );
}
