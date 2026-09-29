import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, ComparisonVisual, FAQAccordionVisual } from '@/components/visuals';
import {
  ShieldCheck,
  AlertTriangle,
  Scale,
  FileCheck,
  PhoneCall,
  Users,
  CheckCircle2,
  Building,
  HeartHandshake,
  ShieldAlert,
  ArrowRight,
  HelpCircle,
  FileText,
  Lock,
  ExternalLink,
  BookOpen,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Punjab Child Marriage Restraint Ordinance 2026 Explained – Minimum Age 18 & Legal Rules | Pakistan Info Hub',
  description:
    'Factual civic guide on the Punjab Child Marriage Restraint (Amendment) Ordinance / Act 2026: 18-year minimum age limit for males and females, cognizable non-bailable penalties, Nikah Registrar CNIC checks, minority protection context, and helpline reporting (1121).',
  keywords: [
    'Punjab Child Marriage Restraint Ordinance 2026',
    'Punjab child marriage act 2026 minimum age 18',
    'underage marriage laws Punjab penalties',
    'non bailable non compoundable child marriage Pakistan',
    'Nikah Khawan age verification CNIC B-Form',
    'child protection helpline 1121 Punjab CPWB',
    'Sindh vs Punjab child marriage restraint law',
    'forced marriage Christian Hindu minority girls protection Punjab',
  ],
  openGraph: {
    title: 'Punjab Child Marriage Restraint Ordinance 2026 Explained – Minimum Age 18 & Rules',
    description:
      'Clear, factual explainer on Punjab’s updated Child Marriage Restraint law: 18-year minimum marriage age for both genders, non-bailable penalties, Nikah Nama registration impact, and emergency helplines.',
    url: 'https://www.pakistaninfohub.com/family-registration/punjab-child-marriage-restraint-ordinance-2026-explained',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/family-registration/punjab-child-marriage-restraint-ordinance-2026-explained',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Marriage & Family Registration',
          item: 'https://www.pakistaninfohub.com/family-registration',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Punjab Child Marriage Ordinance 2026',
          item: 'https://www.pakistaninfohub.com/family-registration/punjab-child-marriage-restraint-ordinance-2026-explained',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Punjab Child Marriage Restraint Ordinance 2026 Explained: Minimum Age 18, Penalties & Registration Rules',
      description:
        'A factual civic reference guide detailing the statutory reforms under the Punjab Child Marriage Restraint Ordinance/Act 2026, setting the minimum legal age for marriage to 18 years for both genders, criminal penalties, Nikah Registrar obligations, and reporting channels.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-29',
      dateModified: '2026-09-29',
      mainEntityOfPage:
        'https://www.pakistaninfohub.com/family-registration/punjab-child-marriage-restraint-ordinance-2026-explained',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does the Punjab Child Marriage Restraint Ordinance 2026 apply to all religions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The law applies universally to all residents and citizens living in the province of Punjab, regardless of their religion, caste, or background.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a court or guardian issue a special permission or waiver for marriage under 18 in Punjab?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The 2026 statutory amendment establishes an absolute minimum age threshold of 18 years for both males and females without any court-sanctioned exception or judicial waiver.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can parents or Nikah registrars be prosecuted if an underage marriage was solemnized but not registered officially?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Solemnizing, arranging, or facilitating an unregistered child marriage is a criminal offense under the law, and police are authorized to arrest offenders without a warrant regardless of Union Council registration.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the minimum age of marriage 18 in all other provinces of Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sindh enacted a uniform minimum age of 18 in 2013, and Punjab enacted 18 years in 2026. Other regions (Federal Capital ICT, Khyber Pakhtunkhwa, and Balochistan) remain under their respective legal frameworks where legislative updates continue to be evaluated.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should you do if an underage child marriage is being planned in Punjab?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You should report immediately to the Child Protection & Welfare Bureau (CPWB) Helpline at 1121 or Emergency Police at 15. Reports can be submitted confidentially.',
          },
        },
      ],
    },
  ],
};

export default function PunjabChildMarriageOrdinancePage() {
  const breadcrumbs = [
    { nameEn: 'Marriage & Family Registration', nameUr: 'شادی و خاندانی اندراج' },
    { nameEn: 'Punjab Child Marriage Law 2026', nameUr: 'پنجاب چائلڈ میرج آرڈیننس 2026' },
  ];

  const stepsData = [
    {
      stepNumber: 1,
      titleEn: 'Age Verification via CNIC / B-Form',
      titleUr: 'شناختی کارڈ یا بی فارم سے عمر کی تصدیق',
      detailEn:
        'Prior to solemnizing any marriage, the Nikah Khawan must physically inspect official NADRA CNICs or Smart Card/B-Forms to ensure both bride and groom are at least 18 years old.',
      detailUr:
        'نکاح خواں کے لیے قانونی طور پر لازمی ہے کہ وہ نکاح کا خطبہ پڑھانے سے پہلے نادرا کا اصل شناختی کارڈ یا بی فارم دیکھ کر تصدیق کرے کہ دونوں فریقین 18 سال مکمل کر چکے ہیں۔',
    },
    {
      stepNumber: 2,
      titleEn: 'Executing Official Nikah Nama',
      titleUr: 'سرکاری نکاح نامہ پر اندارج',
      detailEn:
        'The Nikah Nama is recorded using government-issued forms, explicitly detailing CNIC numbers, full birth dates, and identity details of both spouses, guardians, and two adult witnesses.',
      detailUr:
        'عمر کی تصدیق کے بعد سرکاری چار کاپیوں والے نکاح نامہ پر فریقین، ان کے سرپرستوں اور باقاعدہ گواہان کے شناختی کارڈ نمبرز اور تاریخِ پیدائش درج کی جاتی ہے۔',
    },
    {
      stepNumber: 3,
      titleEn: 'Union Council Registration & CRMS Input',
      titleUr: 'یونین کونسل میں اندراج اور نادرا ویریفکیشن',
      detailEn:
        'The Nikah Registrar deposits the official duplicate copy with the local Union Council. The Union Council Secretary verifies identity details against NADRA Civil Registration Management System (CRMS) before issuing the computerized Marriage Registration Certificate (MRC).',
      detailUr:
        'نکاح خواں مقررہ مدت میں دوسری کاپی یونین کونسل سیکرٹری کو جمع کرواتا ہے، جو نادرا سی آر ایم ایس سسٹم میں دوبارہ 18 سال کی تصدیق کر کے کمپیوٹرائزڈ شادی سرٹیفکیٹ جاری کرتا ہے۔',
    },
  ];

  const faqItems = [
    {
      questionEn: 'Does the Punjab Child Marriage Restraint 2026 law apply to all religions?',
      questionUr: 'کیا 2026 کا پنجاب چائلڈ میرج ریسٹرینٹ قانون تمام مذاہب پر لاگو ہوتا ہے؟',
      answerEn:
        'Yes. The Child Marriage Restraint (Amendment) legislation applies universally to all citizens and residents living in Punjab, regardless of whether they belong to Muslim, Christian, Hindu, Sikh, or other faith communities.',
      answerUr:
        'جی ہاں، یہ قانون بلا تفریقِ مذہب پنجاب کے تمام باشندوں (مسلم، مسیحی، ہندو، سکھ وغیرہ) پر یکساں اور عمومی طور پر لاگو ہوتا ہے۔',
    },
    {
      questionEn: 'Can a Family Court judge issue a special permission or waiver for marriage under 18 in Punjab?',
      questionUr: 'کیا فیملی کورٹ 18 سال سے کم عمر میں شادی کے لیے کوئی خاص اجازت دے سکتی ہے؟',
      answerEn:
        'No. Unlike earlier statutory frameworks where puberty or judicial discretion was sometimes argued, the updated law establishes an absolute minimum age limit of 18 years for both genders with no judicial waiver provisions.',
      answerUr:
        'جی نہیں، اس ترمیمی قانون میں 18 سال کی کم از کم حد مطلق ہے اور عدالتی استثنیٰ یا اجازت کی کوئی گنجائش نہیں رکھی گئی ہے۔',
    },
    {
      questionEn: 'Can parents or Nikah registrars be prosecuted even if the marriage was not officially registered?',
      questionUr: 'اگر زیرِ عمر شادی یونین کونسل میں رجسٹر نہ ہوئی ہو تب بھی کیا والدین یا نکاح خواں پر مقدمہ چل سکتا ہے؟',
      answerEn:
        'Yes. The legal offense applies to the act of solemnizing, arranging, contracting, or facilitating an underage marriage itself. Lack of Union Council registration does not protect facilitators or parents from police arrest and criminal prosecution.',
      answerUr:
        'جی ہاں، قانون کی نظر میں زیرِ عمر شادی کا انعقاد، اہتمام یا معاہدہ کرنا بذاتِ خود ایک باقاعدہ جرم ہے۔ یونین کونسل میں عدم اندراج سے سہولت کار یا والدین سزا سے نہیں بچ سکتے۔',
    },
    {
      questionEn: 'Is the legal marriage age 18 across all other provinces in Pakistan?',
      questionUr: 'کیا پاکستان کے تمام صوبوں میں شادی کی کم از کم عمر 18 سال ہی ہے؟',
      answerEn:
        'Sindh established a uniform minimum age of 18 through the Sindh Child Marriage Restraint Act in 2013, and Punjab updated its law to 18 years in 2026. In ICT, KP, and Balochistan, reforms remain under legislative consideration under prevailing statutory structures.',
      answerUr:
        'سندھ نے 2013 میں جبکہ پنجاب نے 2026 میں لڑکے اور لڑکی دونوں کے لیے 18 سال حد مقرر کی۔ دیگر علاقوں (اسلام آباد، کے پی، بلوچستان) میں اس قانون سازی کے لیے ترامیم زیرِ غور ہیں۔',
    },
    {
      questionEn: 'What happens to a marriage that took place before this 2026 law was enacted?',
      questionUr: 'اس 2026 کے قانون سے پہلے ہونے والی شادیوں کا کیا قانونی سٹیٹس ہے؟',
      answerEn:
        'Criminal statutes generally operate prospectively from their date of enactment. Marriages solemnized prior to the passage of the 2026 amendment are governed by the statutory framework in force at the time of solemnization, though legal validity and civil rights remain subject to Family Court rulings.',
      answerUr:
        'فوجداری قوانین عام طور پر اپنی منظوری کی تاریخ سے نافذ العمل ہوتے ہیں۔ اس ترمیمی قانون سے پہلے طے پانے والی شادیاں اس وقت کے مروجہ قانون کے تحت دیکھی جاتی ہیں، تاہم ان کے سول اور خاندانی حقوق کا فیصلہ فیملی کورٹ کے ذریعے ہوتا ہے۔',
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
            <InteractiveToolBadge labelEn="PUNJAB STATUTORY REFORM" labelUr="پنجاب فیملی لاء ترمیم" variant="seal" />
            <VerifiedBadge textEn="STATUTORY MINIMUM AGE: 18 YEARS" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white leading-tight">
            Punjab Child Marriage Restraint Ordinance 2026 Explained: Minimum Age 18, Penalties &amp; Registration Rules
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پنجاب چائلڈ میرج ریسٹرینٹ آرڈیننس 2026: شادی کی کم از کم عمر 18 سال، نا قابلِ ضمانت سزا اور رجسٹریشن قواعد
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl font-sans">
            An authoritative, neutral public reference detailing the legal updates introduced under the Punjab Child Marriage Restraint (Amendment) legislation: setting a uniform legal marriage age of 18 years for both males and females, classifying violations as non-bailable offenses, defining Nikah Registrar duties, and explaining reporting helplines across Punjab.
          </p>
        </header>

        <AdPlacementZone slotId="top-banner" format="horizontal" />

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="Core Legal Rule: Minimum Age 18 for Both Genders in Punjab"
          topicTitleUr="پنجاب میں شادی کی کم از کم عمر 18 سال کا بنیادی قانون"
          answerEn="Under the Punjab Child Marriage Restraint (Amendment) Ordinance / Act 2026, the legal minimum age for marriage in the province of Punjab is 18 years for BOTH males and females. Contracting, officiating, or facilitating a marriage involving anyone under 18 is classified as a cognizable (police can arrest without a warrant), non-bailable, and non-compoundable (cannot be privately settled) criminal offense. Nikah Registrars must verify CNIC or B-Form age credentials prior to solemnization, and adult offenders face 2 to 3 years rigorous imprisonment, fines up to PKR 500,000, and up to 7 years for cohabitation."
          answerUr="پنجاب چائلڈ میرج ریسٹرینٹ آرڈیننس/ایکٹ 2026 کے مطابق پنجاب بھر میں شادی کی کم از کم قانونی عمر لڑکے اور لڑکی دونوں کے لیے بلا استثنیٰ 18 سال مقرر کی گئی ہے۔ 18 سال سے کم عمر میں شادی کا انعقاد، اہتمام یا معاونت کرنا قابلِ دست اندازی پولیس (بغیر وارنٹ گرفتاری)، نا قابلِ ضمانت اور نا قابلِ راضی نامہ جرم ہے۔ نکاح خواں پر لازمی ہے کہ وہ شناختی کارڈ یا بی فارم سے 18 سال کی تصدیق کرے، جبکہ خلاف ورزی پر بالغ فریقین اور والدین کو 3 سال تک قیدِ با مشقت اور 5 لاکھ روپے تک جرمانہ ہو سکتا ہے۔"
        />

        {/* Key Statutory Summary Grid */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-doc-brass/30 pb-3">
            <Scale className="w-6 h-6 text-doc-seal dark:text-red-400" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Key Legal Overview &amp; Statutory Provisions
              <span className="block text-xs font-mono font-normal text-slate-700 dark:text-slate-300">
                قانون کی اہم ترین دفعات اور جدید سزاؤں کا جائزہ
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="doc-card p-6 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-doc-dark-card space-y-3">
              <div className="w-10 h-10 rounded-xl bg-doc-seal/10 text-doc-seal flex items-center justify-center font-bold">
                18+
              </div>
              <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
                Uniform Marriage Age (18 Years)
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                Removes the historical gender disparity (previously 16 for females and 18 for males under the 1929 Act). Minimum legal age is now <strong>18 years for everyone</strong> in Punjab.
              </p>
            </div>

            <div className="doc-card p-6 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-doc-dark-card space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300 flex items-center justify-center font-bold">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
                Non-Bailable Offense Classification
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                Offenses are classified as <strong>cognizable</strong> (police arrest without warrant), <strong>non-bailable</strong> (bail is not a statutory right), and <strong>non-compoundable</strong> (private settlements between families are invalid).
              </p>
            </div>

            <div className="doc-card p-6 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-doc-dark-card space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
                Child Protection &amp; Best Interests
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                The law explicitly specifies that the <strong>minor child party is not an offender</strong>, framing legal proceedings around the &quot;best interests of the child&quot; while prosecuting adult facilitators.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: What Specifically Changed & Current Legal Status */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-doc-brass/30 pb-3">
            <BookOpen className="w-6 h-6 text-doc-seal dark:text-red-400" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              1. What Specifically Changed &amp; Current Legal Status
              <span className="block text-xs font-mono font-normal text-slate-700 dark:text-slate-300">
                قانون میں نئی ترامیم اور موجودہ قانونی حیثیت
              </span>
            </h2>
          </div>

          <div className="prose dark:prose-invert max-w-none space-y-4 text-slate-800 dark:text-slate-200 leading-relaxed">
            <p>
              The Government of Punjab promulgated the <strong>Child Marriage Restraint (Amendment) Ordinance 2026</strong>, which was enacted into provincial law by the Punjab Assembly (Punjab Child Marriage Restraint Act 2026). This statutory update modernized the century-old Child Marriage Restraint Act 1929 to bring Punjab’s legal standards in line with international child-protection benchmarks and regional precedents.
            </p>
            <div className="bg-amber-50 dark:bg-amber-950/40 border-l-4 border-amber-500 p-4 rounded-r-xl space-y-2">
              <h4 className="font-bold text-amber-900 dark:text-amber-200 text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                Current Legal Status in Punjab
              </h4>
              <p className="text-xs text-amber-950 dark:text-amber-100 font-sans">
                The 18-year minimum marriage age is currently <strong>fully active and enforceable legal statutory law across all districts of Punjab</strong>. It governs all Nikah Registrars, Union Councils, police authorities, and Family Courts within the province.
              </p>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                <strong>Removal of Gender Disparity:</strong> Under previous statutes, the minimum age for females was 16 years while males required 18 years. The 2026 legislation establishes a uniform age threshold of <strong>18 years for both genders</strong>.
              </li>
              <li>
                <strong>Absolute Statutory Limit (No Court Exceptions):</strong> The updated framework removes subjective puberty justifications in court. The age of 18 is an absolute statutory bar with no provisions for judicial waivers or parental exceptions.
              </li>
              <li>
                <strong>Non-Compoundable Nature:</strong> Because child marriage is non-compoundable, private family compromises, financial settlements, or out-of-court agreements cannot be used to drop criminal charges once an offense is registered.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: Who Can Be Held Responsible & Statutory Penalties */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-doc-brass/30 pb-3">
            <ShieldAlert className="w-6 h-6 text-doc-seal dark:text-red-400" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              2. Who Can Be Held Legally Responsible &amp; Statutory Penalties
              <span className="block text-xs font-mono font-normal text-slate-700 dark:text-slate-300">
                قانونی طور پر ذمہ دار افراد اور مقررہ سزائیں
              </span>
            </h2>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            The law establishes strict legal accountability for all adult participants, facilitators, and officiants involved in planning, solemnizing, or executing an underage marriage:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Penalty Card 1 */}
            <div className="doc-card p-5 rounded-2xl border-2 border-red-200 dark:border-red-900/60 bg-red-50/50 dark:bg-red-950/20 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-red-600 text-white">
                  ADULT CONTRACTING PARTY
                </span>
                <Users className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Adult Who Marries a Minor (<span className="text-red-600 font-extrabold">Under 18</span>)
              </h3>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 font-sans list-disc pl-4">
                <li><strong>Imprisonment:</strong> 2 to 3 years rigorous imprisonment.</li>
                <li><strong>Monetary Fine:</strong> Fines up to <strong>PKR 500,000</strong>.</li>
                <li><strong>Cohabitation Offense:</strong> Co-habiting with a minor under a child marriage is classified as child abuse, carrying <strong>5 to 7 years imprisonment</strong> and fines up to <strong>PKR 1,000,000</strong>.</li>
              </ul>
            </div>

            {/* Penalty Card 2 */}
            <div className="doc-card p-5 rounded-2xl border-2 border-amber-200 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/20 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-amber-600 text-white">
                  NIKAH REGISTRARS / KHAWANS
                </span>
                <FileCheck className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Marriage Officiants &amp; Union Council Registrars
              </h3>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 font-sans list-disc pl-4">
                <li><strong>Imprisonment:</strong> Up to 1 year imprisonment.</li>
                <li><strong>Monetary Fine:</strong> Fines up to <strong>PKR 100,000</strong>.</li>
                <li><strong>Administrative Sanctions:</strong> Mandatory cancellation and permanent revocation of the official Nikah Registrar license.</li>
              </ul>
            </div>

            {/* Penalty Card 3 */}
            <div className="doc-card p-5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-slate-700 text-white">
                  PARENTS &amp; GUARDIANS
                </span>
                <Users className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Parents, Guardians &amp; Event Facilitators
              </h3>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 font-sans list-disc pl-4">
                <li><strong>Imprisonment:</strong> 2 to 3 years rigorous imprisonment for promoting, permitting, or failing to prevent a child marriage.</li>
                <li><strong>Monetary Fine:</strong> Statutory fines up to PKR 500,000.</li>
              </ul>
            </div>

            {/* Penalty Card 4 */}
            <div className="doc-card p-5 rounded-2xl border-2 border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-emerald-600 text-white">
                  MINOR PROTECTION GUARANTEE
                </span>
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                The Underage Child / Minor Victim
              </h3>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 font-sans list-disc pl-4">
                <li><strong>Zero Criminal Liability:</strong> Under Section 7 of the updated act, the minor child party is explicitly exempt from criminal prosecution.</li>
                <li><strong>Protection Status:</strong> The child is treated strictly as a victim requiring state protection, care, and legal safeguard.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: How This Affects Nikah Nama Registration Going Forward */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-doc-brass/30 pb-3">
            <FileText className="w-6 h-6 text-doc-seal dark:text-red-400" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              3. How This Affects Nikah Nama &amp; Union Council Registration
              <span className="block text-xs font-mono font-normal text-slate-700 dark:text-slate-300">
                نکاح نامہ اور یونین کونسل کے کمپیوٹرائزڈ اندراج پر اثرات
              </span>
            </h2>
          </div>

          <div className="prose dark:prose-invert max-w-none space-y-4 text-slate-800 dark:text-slate-200 leading-relaxed text-sm">
            <p>
              The 2026 reform directly impacts how Nikah Namas are processed at local Union Councils across Punjab. Nikah Registrars and Union Council Secretaries are subject to mandatory digital and documentary checks:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Mandatory CNIC / B-Form Verification:</strong> Before solemnizing any Nikah, the registrar must inspect original NADRA CNICs (for adults) or official B-Forms / Smart Cards issued by NADRA to verify that both parties are 18 or older.
              </li>
              <li>
                <strong>Mandatory Refusal of Registration:</strong> Union Councils are required to refuse registration if either party is under 18 years old. Attempting to register an underage marriage by submitting falsified age records constitutes a separate forgery offense.
              </li>
              <li>
                <strong>Integration with NADRA CRMS:</strong> The computerized Marriage Registration Certificate (MRC) portal checks birth dates against NADRA’s Civil Registration Management System (CRMS), automatically flagging any entry where an individual is under 18.
              </li>
            </ul>
          </div>

          {/* Prominent Cross-Link Box */}
          <div className="p-6 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/40 shadow-md space-y-4">
            <div className="flex items-center gap-2 text-doc-brass">
              <BookOpen className="w-5 h-5" />
              <h3 className="font-serif font-bold text-lg text-white">
                Related Family &amp; Legal Guides on This Portal
              </h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              For complete step-by-step guidance on official marriage documentation, Union Council registration procedures, and legal dissolution rights in Pakistan, explore our verified public guides:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <Link
                href="/family-registration/nikah-nama-vs-marriage-certificate-mrc-2026"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-doc-brass/30 hover:border-doc-brass text-white transition group"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-doc-brass">COMPUTERIZED REGISTRATION</div>
                  <div className="text-sm font-bold font-serif group-hover:text-amber-300 transition">
                    Nikah Nama vs Marriage Certificate (MRC) 2026 &rarr;
                  </div>
                </div>
              </Link>
              <Link
                href="/family-registration/talaq-khula-legal-process-pakistan-2026"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-doc-brass/30 hover:border-doc-brass text-white transition group"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-doc-brass">DISSOLUTION &amp; FAMILY LAWS</div>
                  <div className="text-sm font-bold font-serif group-hover:text-amber-300 transition">
                    Talaq &amp; Khula Legal Process in Pakistan 2026 &rarr;
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Process Diagram Component */}
          <ProcessStepsDiagram
            steps={stepsData}
            titleEn="Step-by-Step Age Verification & Nikah Registration Flow"
            titleUr="عمر کی تصدیق اور آن لائن رجسٹریشن کا مرحلہ وار طریقہ کار"
            subtitleEn="How Union Councils and Nikah Registrars strictly enforce age compliance"
            subtitleUr="یونین کونسل اور نکاح خواں کی 18 سال کی تصدیق کی باقاعدہ ترتیب"
          />
        </section>

        <AdPlacementZone slotId="mid-content" format="rectangle" />

        {/* Section 4: Purpose, Protection of Minority Girls & Inter-Provincial Comparison */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-doc-brass/30 pb-3">
            <HeartHandshake className="w-6 h-6 text-doc-seal dark:text-red-400" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              4. Minority Protection Context &amp; Comparison with Sindh Law
              <span className="block text-xs font-mono font-normal text-slate-700 dark:text-slate-300">
                اقلیتی بچیوں کا تحفظ اور سندھ کے قانون سے تقابل
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="doc-card p-6 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-doc-dark-card space-y-3">
              <div className="flex items-center gap-2 text-doc-seal">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
                  Protection of Minority Girls
                </h3>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                Human rights advocates and minority community representatives welcomed the 2026 reform as a critical legal shield against the forced conversion and underage marriage of Christian, Hindu, and other minority girls. By removing puberty-based legal defense loopholes in court, the law ensures that <strong>no girl under 18 can be legally married under any religious pretext</strong>.
              </p>
            </div>

            <div className="doc-card p-6 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-doc-dark-card space-y-3">
              <div className="flex items-center gap-2 text-doc-ink dark:text-white">
                <Building className="w-5 h-5 text-doc-brass" />
                <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
                  Comparison with Sindh (2013 vs 2026)
                </h3>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                Sindh enacted the landmark <em>Sindh Child Marriage Restraint Act</em> in 2013, setting the minimum marriage age to 18 for both males and females. Punjab’s 2026 reform aligns Punjab with Sindh’s standard, closing cross-provincial jurisdictional loopholes where underage marriages were previously moved across provincial borders to evade stricter laws.
              </p>
            </div>
          </div>

          {/* Comparison Table Visual */}
          <ComparisonVisual
            titleEn="Regional Comparison of Child Marriage Legislation in Pakistan"
            titleUr="پاکستان کے مختلف صوبوں میں شادی کی قانونی عمر کا تقابل"
            subtitleEn="Key statutory differences between provincial child marriage restraint laws"
            subtitleUr="مختلف صوبائی قوانین میں عمر کی ترامیم اور عدالتی دائرہ کار"
            items={[
              {
                titleEn: 'Punjab (2026 Legislation)',
                subtitleEn: 'Punjab Child Marriage Restraint (Amendment) Ordinance/Act 2026',
                badgeEn: 'UPDATED 2026',
                badgeVariant: 'seal',
                features: [
                  { labelEn: 'Minimum Female Age', valueEn: '18 Years (Mandatory)', isPositive: true },
                  { labelEn: 'Minimum Male Age', valueEn: '18 Years (Mandatory)', isPositive: true },
                  { labelEn: 'Offense Type', valueEn: 'Cognizable & Non-Bailable', isPositive: true },
                  { labelEn: 'Court Waiver Permission', valueEn: 'None (Absolute Limit)', isPositive: true },
                ],
              },
              {
                titleEn: 'Sindh (2013 Legislation)',
                subtitleEn: 'Sindh Child Marriage Restraint Act 2013',
                badgeEn: 'ESTABLISHED 2013',
                badgeVariant: 'emerald',
                features: [
                  { labelEn: 'Minimum Female Age', valueEn: '18 Years (Mandatory)', isPositive: true },
                  { labelEn: 'Minimum Male Age', valueEn: '18 Years (Mandatory)', isPositive: true },
                  { labelEn: 'Offense Type', valueEn: 'Cognizable & Non-Bailable', isPositive: true },
                  { labelEn: 'Court Waiver Permission', valueEn: 'None (Absolute Limit)', isPositive: true },
                ],
              },
            ]}
          />
        </section>

        {/* Section 5: Where & How to Report a Suspected Case */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-doc-brass/30 pb-3">
            <PhoneCall className="w-6 h-6 text-doc-seal dark:text-red-400" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              5. Where &amp; How to Report a Suspected Underage Marriage
              <span className="block text-xs font-mono font-normal text-slate-700 dark:text-slate-300">
                مشکوک زیرِ عمر شادی کی اطلاع دینے کے سرکاری ذرائع
              </span>
            </h2>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            If you suspect an underage child marriage is being planned, solemnized, or has taken place in Punjab, state helplines and statutory agencies provide immediate protection and legal intervention. Reports can be filed confidentially:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Helpline 1 */}
            <div className="p-6 rounded-2xl bg-emerald-900 text-white space-y-3 shadow-md relative overflow-hidden">
              <div className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-widest">
                CPWB HELPLINE
              </div>
              <div className="text-4xl font-extrabold font-mono text-white tracking-tight">1121</div>
              <h3 className="font-serif font-bold text-base text-emerald-100">
                Child Protection &amp; Welfare Bureau
              </h3>
              <p className="text-xs text-emerald-200 leading-relaxed font-sans">
                Toll-free 24/7 emergency helpline dedicated to child protection, child abuse prevention, and stopping child marriages across Punjab.
              </p>
            </div>

            {/* Helpline 2 */}
            <div className="p-6 rounded-2xl bg-doc-ink text-white space-y-3 shadow-md relative overflow-hidden">
              <div className="text-xs font-mono font-bold text-doc-brass uppercase tracking-widest">
                POLICE EMERGENCY
              </div>
              <div className="text-4xl font-extrabold font-mono text-white tracking-tight">15</div>
              <h3 className="font-serif font-bold text-base text-slate-100">
                Punjab Emergency Police
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Immediate police response to stop ongoing or scheduled illegal underage marriage ceremonies and arrest facilitators on-site.
              </p>
            </div>

            {/* Helpline 3 */}
            <div className="p-6 rounded-2xl bg-amber-900 text-white space-y-3 shadow-md relative overflow-hidden">
              <div className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
                HUMAN RIGHTS
              </div>
              <div className="text-4xl font-extrabold font-mono text-white tracking-tight">1099</div>
              <h3 className="font-serif font-bold text-base text-amber-100">
                Ministry of Human Rights Helpline
              </h3>
              <p className="text-xs text-amber-200 leading-relaxed font-sans">
                Federal and provincial human rights legal aid helpline for reporting child rights violations and seeking legal guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Frequently Asked Questions (Sensitively Worded) */}
        <section className="space-y-6">
          <FAQAccordionVisual
            items={faqItems}
            titleEn="Frequently Asked Questions (Sensitively Worded Citizen Guidance)"
            titleUr="قانون و سزاؤں سے متعلق ضروری اور حساس سوالات کے جوابات"
            subtitleEn="Factual legal answers regarding religious application, prior marriages, and enforcement"
            subtitleUr="پنجاب فیملی لاز کی روشنی میں عوام کی رہنمائی کے لیے تصدیق شدہ تفصیلات"
          />
        </section>

        {/* Legal Disclaimer Box */}
        <div className="p-5 rounded-xl border border-doc-brass/40 bg-doc-paper dark:bg-doc-dark-card space-y-2 text-xs text-slate-600 dark:text-slate-400 font-sans">
          <div className="flex items-center gap-2 font-bold text-doc-ink dark:text-slate-200 uppercase font-mono text-[11px]">
            <ShieldCheck className="w-4 h-4 text-doc-brass" />
            <span>Civic Information Disclaimer</span>
          </div>
          <p>
            This article is published strictly as a factual, neutral public civic guide to educate citizens on the provisions of the Punjab Child Marriage Restraint legislation. It does not constitute formal legal representation or legal advice. Individuals seeking assistance with specific ongoing legal matters or Family Court proceedings should consult a qualified advocate or contact the official Punjab Child Protection &amp; Welfare Bureau (1121).
          </p>
        </div>

        <AdPlacementZone slotId="bottom-banner" format="horizontal" />
      </div>
    </>
  );
}
