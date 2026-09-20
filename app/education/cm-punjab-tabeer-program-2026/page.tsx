import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { RelatedArticles } from '@/components/RelatedArticles';
import {
  ProcessStepsDiagram,
  FeeTableVisual,
} from '@/components/visuals';
import {
  GraduationCap,
  ShieldCheck,
  Globe,
  Briefcase,
  CheckCircle2,
  Clock,
  Sparkles,
  Info,
  Check,
  AlertTriangle,
  Building2,
  FileCheck2,
  ArrowRight,
  Plane,
  PhoneCall,
  DollarSign,
  HelpCircle,
  Award,
  Layers,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'CM Punjab Tabeer Program 2026: PSDF Apply, Eligibility & GCC Jobs',
  description:
    'Complete guide to CM Maryam Nawaz Tabeer Program implemented by PSDF (psdf.org.pk). Check eligibility (age 18–35), monthly training stipend, free certification, Parwaaz Card support, and overseas job placement in Saudi Arabia & GCC.',
  keywords: [
    'cm punjab tabeer program 2026',
    'psdf tabeer program apply online',
    'psdf org pk official portal registration',
    'punjab skills development fund overseas jobs',
    'tabeer program gcc job placement saudi arabia',
    'parwaaz card punjab youth stipend',
    'psdf free technical training stipend eligibility',
    '0800 hunar psdf helpline 48627',
  ],
  openGraph: {
    title: 'CM Punjab Tabeer Program 2026: PSDF Apply, Eligibility & GCC Jobs',
    description:
      'Official guide to CM Punjab Tabeer Program by PSDF: free technical training, monthly stipend, Parwaaz Card financial assistance, and legal overseas placements in the GCC.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/education/cm-punjab-tabeer-program-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/education/cm-punjab-tabeer-program-2026',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com/' },
        { '@type': 'ListItem', position: 2, name: 'Education & Training', item: 'https://www.pakistaninfohub.com/education' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'CM Punjab Tabeer Program 2026',
          item: 'https://www.pakistaninfohub.com/education/cm-punjab-tabeer-program-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'CM Punjab Tabeer Program 2026: PSDF Apply, Eligibility & GCC Jobs',
      description:
        'Authoritative breakdown of the Chief Minister Punjab Tabeer Program executed by Punjab Skills Development Fund (PSDF), offering free technical training, monthly stipends, and legal overseas job placement to GCC countries.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/education/cm-punjab-tabeer-program-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Apply for the CM Punjab Tabeer Program via PSDF',
      description:
        'Official 5-step roadmap from profile registration on psdf.org.pk to technical training with stipend, international trade testing, employer interviews, and legal overseas deployment.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Register on PSDF Citizen Portal',
          text: 'Visit the authentic Punjab Skills Development Fund website (psdf.org.pk) and register your basic profile using CNIC, phone number, and academic credentials.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Select In-Demand Trade Course',
          text: 'Choose an eligible technical trade aligned with overseas employer quotas (e.g., hospitality, logistics, healthcare, electromechanical).',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Undergo Technical & Language Training',
          text: 'Attend mandatory classroom and practical training at certified PSDF partner institutes while receiving a monthly financial stipend.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Pass International Assessment & Employer Interview',
          text: 'Clear formal trade testing for globally recognized certification and participate in direct interviews conducted with vetted overseas employers.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Parwaaz Card Support & Legal GCC Departure',
          text: 'Utilize Parwaaz Card financial support for medical tests and visa endorsement, complete BEOE Protector registration, and safely deploy abroad.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the CM Punjab Tabeer Program and who manages it?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Tabeer Program is a premier youth empowerment and overseas employment initiative launched under Chief Minister Maryam Nawaz Sharif’s "Hunarmand Naujawan" vision. It is executed directly by the Punjab Skills Development Fund (PSDF) in partnership with international employers in GCC nations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the training completely free, and do participants receive a stipend?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. 100% of the tuition, lab training, uniform, and testing fees are fully funded by the Punjab Government. Trainees also receive a monthly stipend throughout the training duration to support transport and living expenses.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the confirmed age limit and educational requirement?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Applicants must be permanent residents of Punjab aged between 18 and 35 years. Educational requirements vary by trade: basic technical courses accept Middle/Matric, while specialized technical roles require Intermediate or DAE.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the Parwaaz Card and how does it relate to Tabeer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Parwaaz Card is a specialized financial assistance tool for youth selected for overseas placements. It helps bridge initial costs such as medical tests, passport issuance, visa processing, and pre-departure logistical expenses.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the official website and helpline for applying?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The only official website is psdf.org.pk. You can contact the PSDF toll-free helpline at 0800-HUNAR (0800-48627) or UAN 042-111-11-PSDF (042-111-117-733).',
          },
        },
      ],
    },
  ],
};

const financialRows = [
  {
    serviceEn: 'Course Tuition & Practical Lab Fees',
    serviceUr: 'کورس ٹیوشن اور پریکٹیکل لیب فیس',
    normal: '100% Free (Govt Funded)',
    urgent: 'Zero Out-of-Pocket Expense',
    validity: 'PSDF Accredited Centers',
  },
  {
    serviceEn: 'Monthly Student Training Stipend',
    serviceUr: 'ماہانہ تربیتی وظیفہ (اسٹائپنڈ)',
    normal: 'Provided Monthly',
    urgent: 'Direct to Bank / Mobile Wallet',
    validity: 'Full Course Duration',
  },
  {
    serviceEn: 'International Trade Certification Exam',
    serviceUr: 'بین الاقوامی تجارتی سرٹیفیکیشن امتحان',
    normal: 'Fully Subsidized',
    urgent: 'Globally Recognized Credential',
    validity: 'City & Guilds / TVET Equivalent',
  },
  {
    serviceEn: 'Parwaaz Card Pre-Departure Support',
    serviceUr: 'پرواز کارڈ برائے ابتدائی سفری اخراجات',
    normal: 'Financial Grant / Loan Facility',
    urgent: 'Covers Medical, Visa & Logistics',
    validity: 'For Shortlisted GCC Hires',
  },
  {
    serviceEn: 'BEOE Protector & Foreign Contract Verification',
    serviceUr: 'پروٹیکٹر رجسٹریشن اور ویزا تصدیق',
    normal: 'Official Legal Channel',
    urgent: '100% Verified Overseas Employer',
    validity: 'Bureau of Emigration Registered',
  },
];

const eligibilityChecklist = [
  {
    title: 'Punjab Domicile & Valid CNIC',
    desc: 'Must possess a valid National Identity Card with permanent residence anywhere in Punjab.',
    status: 'Mandatory',
  },
  {
    title: 'Age Bracket (18–35 Years)',
    desc: 'Designed specifically for youth empowerment. Applicants must be between 18 and 35 years old at the time of cohort enrollment.',
    status: 'Mandatory',
  },
  {
    title: 'Academic Threshold',
    desc: 'Minimum Matriculation for technical/commercial trades; Intermediate or DAE for advanced electro-mechanical or healthcare tracks.',
    status: 'Trade Specific',
  },
  {
    title: 'Commitment to Overseas Deployment',
    desc: 'Applicants must commit to completing the full training curriculum, medical screenings, and taking up designated legal overseas positions in the GCC upon selection.',
    status: 'Mandatory',
  },
  {
    title: 'Physical & Medical Fitness',
    desc: 'Ability to clear standard GAMCA (Gulf Approved Medical Centres Association) medical fitness requirements for work visas.',
    status: 'For Overseas Placement',
  },
];

const stepItems = [
  {
    stepNumber: 1,
    titleEn: 'Create Profile on psdf.org.pk',
    titleUr: 'پی ایس ڈی ایف پورٹل پر پروفائل بنائیں',
    detailEn:
      'Register on the official Punjab Skills Development Fund platform (psdf.org.pk). Input CNIC, education, and district particulars.',
    detailUr:
      'پنجاب سکلز ڈویلپمنٹ فنڈ کی سرکاری ویب سائٹ پر اپنا شناختی کارڈ اور تعلیمی کوائف درج کر کے رجسٹر ہوں۔',
  },
  {
    stepNumber: 2,
    titleEn: 'Select Trade & Attend Assessment',
    titleUr: 'شعبہ منتخب کریں اور ابتدائی ٹیسٹ دیں',
    detailEn:
      'Choose from active international trade streams (hospitality, logistics, electromechanical, construction) and complete basic screening.',
    detailUr:
      'اپنی دلچسپی اور تعلیم کے مطابق مطلوبہ شعبے کا انتخاب کریں اور بنیادی اہلیت کا انٹرویو پاس کریں۔',
  },
  {
    stepNumber: 3,
    titleEn: 'Complete Technical Training with Stipend',
    titleUr: 'وظیفے کے ساتھ مکمل تکنیکی تربیت حاصل کریں',
    detailEn:
      'Undergo intensive, hands-on vocational and workplace communication training at authorized partner institutes while receiving a monthly stipend.',
    detailUr:
      'منظور شدہ تربیتی اداروں میں جدید پریکٹیکل کورس مکمل کریں اور ماہانہ مالی وظیفہ حاصل کریں۔',
  },
  {
    stepNumber: 4,
    titleEn: 'International Trade Testing & GCC Interviews',
    titleUr: 'بین الاقوامی ٹریڈ ٹیسٹ اور غیر ملکی انٹرویو',
    detailEn:
      'Obtain international skill certification and attend direct placement interviews with pre-vetted corporate employers from Saudi Arabia, UAE, and Qatar.',
    detailUr:
      'عالمی معیار کا ٹیسٹ پاس کر کے خلیجی ممالک (سعودی عرب، یو اے ای، قطر) کے نمائندوں سے ملازمت کا انٹرویو دیں۔',
  },
  {
    stepNumber: 5,
    titleEn: 'Parwaaz Card Clearance & Legal Departure',
    titleUr: 'پرواز کارڈ مالی معاونت اور قانونی پرواز',
    detailEn:
      'Receive Parwaaz Card financial support for medical and visa fees, get official Protector stamping from BEOE, and begin your international career.',
    detailUr:
      'پرواز کارڈ کی مدد سے میڈیکل و ویزا اخراجات ادا کریں، پروٹیکٹر لگوائیں اور باوقار قانونی روزگار کے لیے روانہ ہوں۔',
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen bg-sand-50 dark:bg-navy-950 text-navy-950 dark:text-sand-50 transition-colors py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { nameEn: 'Education & Training', nameUr: 'تعلیم اور رزلٹ', url: '/education' },
              {
                nameEn: 'CM Punjab Tabeer Program 2026',
                nameUr: 'وزیراعلیٰ پنجاب تعبیر پروگرام 2026',
                url: '/education/cm-punjab-tabeer-program-2026',
              },
            ]}
          />

          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <VerifiedBadge
              textEn="Official PSDF Initiative"
              textUr="پنجاب سکلز ڈویلپمنٹ فنڈ کا باضابطہ منصوبہ"
            />
            <InteractiveToolBadge
              variant="gold"
              labelEn="Hunarmand Naujawan Vision"
              labelUr="ہنرمند نوجوان ویژن"
            />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
              <Globe className="w-3.5 h-3.5" />
              GCC Placement Pipelines (Saudi Arabia & UAE)
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-950 dark:text-sand-50 tracking-tight leading-tight">
              CM Punjab Tabeer Program 2026: PSDF Apply, Eligibility & GCC Overseas Jobs
            </h1>
            <p className="text-base sm:text-lg text-navy-800/80 dark:text-sand-200/80 leading-relaxed font-sans">
              Chief Minister Maryam Nawaz Sharif&apos;s flagship vocational training and overseas placement initiative.
              Executed directly by the Punjab Skills Development Fund (PSDF), the program equips youth with demand-driven
              global certifications, monthly stipends, and legal overseas employment in Saudi Arabia and Gulf nations.
            </p>
          </div>

          {/* Direct Answer Box */}
          <DirectAnswerBox
            topicTitleEn="Direct Answer: CM Punjab Tabeer Program (PSDF) 2026"
            topicTitleUr="خلاصہ: وزیراعلیٰ پنجاب تعبیر پروگرام (پی ایس ڈی ایف) 2026"
            answerEn="The CM Punjab Tabeer Program is an official youth empowerment initiative operated by the Punjab Skills Development Fund (PSDF) under the 'Hunarmand Naujawan' agenda. It offers 100% free technical and trade training, monthly student stipends, internationally accredited certifications, and direct pathways to legal employment in GCC countries (Saudi Arabia, UAE, Qatar). Eligible youth aged 18–35 with a Punjab CNIC can apply directly through the official PSDF portal at psdf.org.pk."
            answerUr="وزیراعلیٰ پنجاب تعبیر پروگرام پنجاب سکلز ڈویلپمنٹ فنڈ (PSDF) کا ایک سرکاری منصوبہ ہے۔ اس میں نوجوانوں کو مفت ٹیکنیکل ٹریننگ، ماہانہ وظیفہ، عالمی سطح پر تسلیم شدہ سرٹیفکیٹ اور خلیجی ممالک (سعودی عرب، یو اے ای، قطر) میں باوقار قانونی ملازمتیں فراہم کی جاتی ہیں۔ 18 سے 35 سال کی عمر کے پنجاب کے رہائشی سرکاری پورٹل psdf.org.pk کے ذریعے آن لائن درخواست دے سکتے ہیں۔"
          />

          <AdPlacementZone slotId="loan-top" format="horizontal" />

          {/* Official Verification Advisory */}
          <div className="rounded-2xl p-5 sm:p-6 bg-sand-100 dark:bg-navy-900 border border-sand-200 dark:border-navy-800 space-y-3">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h2 className="text-lg font-bold text-navy-950 dark:text-sand-50 font-serif">
                  PSDF Official Execution & Anti-Exploitation Guarantee
                </h2>
                <p className="text-sm text-navy-800/80 dark:text-sand-200/80 font-sans leading-relaxed">
                  Unlike private recruitment agents who demand hundreds of thousands of rupees for precarious overseas visas,
                  the Tabeer Program is executed entirely through government-accredited channels. The Punjab Skills Development
                  Fund (PSDF) manages testing, employer tie-ins, and pre-departure readiness under strict regulatory oversight.
                  Never pay any intermediary claiming to sell PSDF admissions or guaranteed foreign contracts.
                </p>
              </div>
            </div>
          </div>

          {/* Program Architecture: Key Pillars */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 dark:text-sand-50">
              Core Pillars: From Classroom Training to GCC Employment
            </h2>
            <p className="text-base text-navy-800/80 dark:text-sand-200/80 font-sans leading-relaxed">
              The Tabeer Program is designed not as a generic theoretical course, but as an end-to-end career pipeline tailored
              to address documented labor market shortages in Gulf Cooperation Council (GCC) countries:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-sand-100 dark:bg-navy-900 border border-sand-200 dark:border-navy-800 space-y-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-950 dark:text-sand-50 font-serif">Global Trade Certification</h3>
                <p className="text-xs text-navy-800/70 dark:text-sand-200/70 font-sans leading-relaxed">
                  Courses comply with National Vocational and Technical Training Commission (NAVTTC) standards and recognized international qualification frameworks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-sand-100 dark:bg-navy-900 border border-sand-200 dark:border-navy-800 space-y-2">
                <div className="w-10 h-10 rounded-lg bg-brass-500/10 flex items-center justify-center text-brass-600 dark:text-brass-400">
                  <Plane className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-950 dark:text-sand-50 font-serif">Direct GCC Placement</h3>
                <p className="text-xs text-navy-800/70 dark:text-sand-200/70 font-sans leading-relaxed">
                  Institutional partnerships connect certified graduates with verified employers in Saudi Arabia, UAE, and Qatar, eliminating illegal human trafficking risks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-sand-100 dark:bg-navy-900 border border-sand-200 dark:border-navy-800 space-y-2">
                <div className="w-10 h-10 rounded-lg bg-navy-600/10 flex items-center justify-center text-navy-600 dark:text-sand-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-950 dark:text-sand-50 font-serif">Parwaaz Card Support</h3>
                <p className="text-xs text-navy-800/70 dark:text-sand-200/70 font-sans leading-relaxed">
                  Financial assistance instrument that covers necessary pre-departure costs such as medical screenings, visa stamps, and documentation fees.
                </p>
              </div>
            </div>
          </section>

          {/* High-Growth Sectors & In-Demand Trades */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 dark:text-sand-50">
              High-Demand Skill Sectors Under the Tabeer Program
            </h2>
            <p className="text-base text-navy-800/80 dark:text-sand-200/80 font-sans leading-relaxed">
              Curricula are customized specifically to meet GCC Mega-Project staffing requirements (including Saudi Arabia Vision 2030 projects):
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-sm">
              <div className="p-4 rounded-xl bg-white/70 dark:bg-navy-900/60 border border-sand-200 dark:border-navy-800 space-y-2">
                <span className="font-bold text-navy-950 dark:text-sand-50 text-base flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-brass-500" />
                  Construction & Infrastructure
                </span>
                <p className="text-xs text-navy-700 dark:text-sand-300 leading-relaxed">
                  Certified heavy equipment operators, industrial scaffolding specialists, HVAC technicians, steel fixers, and commercial electricians.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/70 dark:bg-navy-900/60 border border-sand-200 dark:border-navy-800 space-y-2">
                <span className="font-bold text-navy-950 dark:text-sand-50 text-base flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-emerald-500" />
                  Hospitality & Culinary Arts
                </span>
                <p className="text-xs text-navy-700 dark:text-sand-300 leading-relaxed">
                  Front office operations, culinary chefs, food safety controllers, and hospitality service supervisors for expanding international luxury hotel chains.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/70 dark:bg-navy-900/60 border border-sand-200 dark:border-navy-800 space-y-2">
                <span className="font-bold text-navy-950 dark:text-sand-50 text-base flex items-center gap-2">
                  <Layers className="w-4 h-4 text-sky-500" />
                  Logistics & Fleet Operations
                </span>
                <p className="text-xs text-navy-700 dark:text-sand-300 leading-relaxed">
                  Warehouse inventory managers, automated supply chain assistants, forklift certified drivers, and commercial fleet coordinators.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/70 dark:bg-navy-900/60 border border-sand-200 dark:border-navy-800 space-y-2">
                <span className="font-bold text-navy-950 dark:text-sand-50 text-base flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-rose-500" />
                  Allied Healthcare Support
                </span>
                <p className="text-xs text-navy-700 dark:text-sand-300 leading-relaxed">
                  Patient care technicians, geriatric care assistants, and medical clinic attendants trained in international healthcare hygiene protocols.
                </p>
              </div>
            </div>
          </section>

          {/* Eligibility Criteria Breakdown */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 dark:text-sand-50">
              Eligibility Checklist: Who Qualifies in 2026?
            </h2>
            <p className="text-base text-navy-800/80 dark:text-sand-200/80 font-sans leading-relaxed">
              To ensure opportunities reach deserving, high-potential youth, the Punjab Government enforces straightforward statutory benchmarks:
            </p>

            <div className="space-y-3 font-sans">
              {eligibilityChecklist.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-sand-100/60 dark:bg-navy-900/60 border border-sand-200 dark:border-navy-800 flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-bold text-navy-950 dark:text-sand-50 text-base">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-navy-800/70 dark:text-sand-200/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-sand-200 dark:bg-navy-800 text-navy-800 dark:text-sand-200 shrink-0">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Financial Breakdown & Stipend Visual */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 dark:text-sand-50">
              Financial Support, Stipend & Parwaaz Card Details
            </h2>
            <p className="text-base text-navy-800/80 dark:text-sand-200/80 font-sans leading-relaxed">
              Every stage of the training program is financially safeguarded to prevent low-income candidates from discontinuing courses due to travel or livelihood constraints:
            </p>

            <FeeTableVisual
              rows={financialRows}
              titleEn="Tabeer Program Financial Entitlements"
              titleUr="تعبیر پروگرام کے مالی فوائد اور مراعات کی تفصیل"
              subtitleEn="Official allowances funded by the Punjab Skills Development Fund (PSDF)"
              subtitleUr="پنجاب سکلز ڈویلپمنٹ فنڈ کے منظور شدہ مالیاتی مراعات کے قواعد"
              noteEn="Student stipends are disbursed electronically based on maintaining a minimum 80% monthly class attendance. Parwaaz Card disbursement occurs following successful overseas job selection."
              noteUr="ماہانہ وظیفہ کم از کم 80 فیصد حاضری پر اکاؤنٹ میں بھیجا جاتا ہے۔ پرواز کارڈ کی امداد بیرون ملک ملازمت کے انتخاب کے بعد جاری ہوتی ہے۔"
            />
          </section>

          <AdPlacementZone slotId="loan-mid" format="rectangle" />

          {/* 5-Step Process Diagram */}
          <section className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 dark:text-sand-50">
                Official 5-Step PSDF Application Roadmap
              </h2>
              <p className="text-sm text-navy-800/80 dark:text-sand-200/80 font-sans">
                Follow this direct, transparent process to apply directly through the authorized PSDF platform:
              </p>
            </div>

            <ProcessStepsDiagram
              steps={stepItems}
              titleEn="Tabeer Program Enrollment & Deployment Process"
              titleUr="تعبیر پروگرام میں داخلے اور بیرون ملک روانگی کے 5 مراحل"
              subtitleEn="From digital registration to international departure"
              subtitleUr="آن لائن رجسٹریشن سے لے کر خلیجی ممالک میں تعیناتی تک کا لائحہ عمل"
            />
          </section>

          {/* Documents Required */}
          <section className="p-6 rounded-2xl bg-sand-100 dark:bg-navy-900 border border-sand-200 dark:border-navy-800 space-y-4">
            <h3 className="text-xl font-serif font-bold text-navy-950 dark:text-sand-50 flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-brass-500" />
              Required Documentation for PSDF Enrollment
            </h3>
            <p className="text-xs text-navy-800/80 dark:text-sand-200/80 font-sans">
              Have scanned copies or clear photos ready when completing your online profile:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-sans text-navy-800 dark:text-sand-200">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                Original CNIC (front and back)
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                Punjab Domicile Certificate
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                Matric / Intermediate Marksheet or DAE
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                Passport-sized photographs (white background)
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                Valid Pakistani Machine-Readable Passport (or token)
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                Active Mobile Number registered on your own CNIC
              </li>
            </ul>
          </section>

          {/* Official Helplines & Verification */}
          <section className="p-6 rounded-2xl bg-sand-100 dark:bg-navy-900 border border-sand-200 dark:border-navy-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-navy-600/10 text-navy-600 dark:text-sand-200">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-navy-950 dark:text-sand-50">
                  Official PSDF Contact & Verification Channels
                </h3>
                <p className="text-xs text-navy-800/70 dark:text-sand-200/70 font-sans">
                  Always verify training batches and official overseas job postings directly through PSDF:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 font-sans text-sm">
              <div className="space-y-1">
                <span className="text-xs uppercase text-navy-600 dark:text-sand-400 font-semibold block">
                  PSDF Toll-Free Helpline
                </span>
                <span className="font-mono font-bold text-base text-navy-950 dark:text-sand-50">
                  0800-HUNAR (0800-48627)
                </span>
                <p className="text-xs text-navy-700 dark:text-sand-300">
                  Toll-free from anywhere in Pakistan during official business hours
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase text-navy-600 dark:text-sand-400 font-semibold block">
                  PSDF UAN Telephone
                </span>
                <span className="font-mono font-bold text-base text-navy-950 dark:text-sand-50">
                  042-111-11-PSDF (042-111-117-733)
                </span>
                <p className="text-xs text-navy-700 dark:text-sand-300">
                  Direct headquarters line in Lahore for institutional inquiries
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-sand-200 dark:border-navy-800 text-xs text-navy-700 dark:text-sand-300 flex flex-wrap items-center justify-between gap-2 font-sans">
              <span>Official Website: <strong className="font-mono">psdf.org.pk</strong></span>
              <span>Email: <strong className="font-mono">communications@psdf.org.pk</strong></span>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 dark:text-sand-50 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-brass-500" />
              Frequently Asked Questions (Tabeer Program)
            </h2>

            <div className="space-y-3 font-sans">
              <div className="p-4 rounded-xl bg-sand-100/60 dark:bg-navy-900/60 border border-sand-200 dark:border-navy-800 space-y-2">
                <h3 className="font-bold text-base text-navy-950 dark:text-sand-50">
                  Can an applicant from outside Punjab apply for the Tabeer Program?
                </h3>
                <p className="text-sm text-navy-800/80 dark:text-sand-200/80 leading-relaxed">
                  No. Because this program is financed directly by the Government of Punjab exchequer under Chief Minister Maryam Nawaz Sharif&apos;s youth development budget, applicants must possess a Punjab domicile certificate and a CNIC with permanent residence in a Punjab district.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-sand-100/60 dark:bg-navy-900/60 border border-sand-200 dark:border-navy-800 space-y-2">
                <h3 className="font-bold text-base text-navy-950 dark:text-sand-50">
                  Are female applicants eligible for the Tabeer Program?
                </h3>
                <p className="text-sm text-navy-800/80 dark:text-sand-200/80 leading-relaxed">
                  Yes, female youth are strongly encouraged to apply. Dedicated quotas and specific trade tracks (such as healthcare support, culinary arts, hospitality customer service, and digital trades) are specially organized to facilitate female participation and overseas placements.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-sand-100/60 dark:bg-navy-900/60 border border-sand-200 dark:border-navy-800 space-y-2">
                <h3 className="font-bold text-base text-navy-950 dark:text-sand-50">
                  Do I need an existing passport before applying to PSDF?
                </h3>
                <p className="text-sm text-navy-800/80 dark:text-sand-200/80 leading-relaxed">
                  You can register for training with your CNIC and educational certificates. However, because foreign employer interviews and visa issuance take place quickly after course completion, you will need a valid Machine-Readable Passport prior to trade testing and deployment.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-sand-100/60 dark:bg-navy-900/60 border border-sand-200 dark:border-navy-800 space-y-2">
                <h3 className="font-bold text-base text-navy-950 dark:text-sand-50">
                  How does the Parwaaz Card assist with overseas expenses?
                </h3>
                <p className="text-sm text-navy-800/80 dark:text-sand-200/80 leading-relaxed">
                  The Parwaaz Card acts as a targeted financial buffer. It covers initial out-of-pocket costs such as mandatory GAMCA medical tests, degree attestations, visa stamping charges, and pre-departure orientation expenses so that underprivileged candidates do not have to borrow from private moneylenders.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-sand-100/60 dark:bg-navy-900/60 border border-sand-200 dark:border-navy-800 space-y-2">
                <h3 className="font-bold text-base text-navy-950 dark:text-sand-50">
                  How can I verify if an overseas vacancy or visa offer is authentic?
                </h3>
                <p className="text-sm text-navy-800/80 dark:text-sand-200/80 leading-relaxed">
                  All legitimate employment opportunities under the Tabeer Program are displayed directly on <strong className="font-mono">psdf.org.pk</strong> and cross-registered with the Bureau of Emigration and Overseas Employment (BEOE). Always verify permission numbers and avoid paying unauthorized cash advances.
                </p>
              </div>
            </div>
          </section>

          <AdPlacementZone slotId="loan-bottom" format="horizontal" />

          {/* Related Articles */}
          <RelatedArticles
            currentSlug="cm-punjab-tabeer-program-2026"
            category="education"
            explicitSlugs={[
              'beoe-protector-registration-overseas-employment-2026',
              'beoe-protector-fee-calculator-2026',
              'verified-govt-jobs-sources-avoid-scams-2026',
              'cm-punjab-e-bike-scheme-2026-eligibility-apply',
            ]}
          />
        </div>
      </article>
    </>
  );
}
