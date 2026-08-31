import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  ProcessStepsDiagram,
  FeeTableVisual,
  ComparisonVisual,
  FAQAccordionVisual,
} from '@/components/visuals';
import {
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  Briefcase,
  Layers,
  Scale,
  FileCheck,
  Building,
  Globe,
  Info,
  UserCheck,
  Search,
  BookOpen,
  Sparkles,
  ShieldAlert,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Trademark Registration Pakistan 2026 – IPO e-Filing, Fees & Process Guide | Pakistan Info Hub',
  description:
    'Neutral, step-by-step guide to trademark registration in Pakistan via IPO-Pakistan: Form TM-55 search, TM-1/TM-2 filing, official Rs. 3,000 & Rs. 9,000 fees, single-class rule, Trademark Journal opposition period, and 10-year renewal.',
  keywords: [
    'trademark registration pakistan 2026',
    'ipo pakistan online trademark registration',
    'trademark filing fee pakistan ipo',
    'form tm 1 tm 55 ipo pakistan',
    'trademark nice classification single class pakistan',
    'pakistan trademark journal opposition 2 months',
    'trademark vs patent vs copyright pakistan',
    'brand name registration pakistan ipo portal',
  ],
  openGraph: {
    title: 'Trademark Registration in Pakistan (IPO Guide 2026) – Official Fees & Process',
    description:
      'Everything you need to know about registering a brand name, logo, or slogan with IPO-Pakistan. Official fee breakdown, single-class filing rule, and self-filing vs attorney assistance.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/business/trademark-registration-pakistan-ipo-guide-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/business/trademark-registration-pakistan-ipo-guide-2026',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com/' },
        { '@type': 'ListItem', position: 2, name: 'Business & SECP Registration', item: 'https://www.pakistaninfohub.com/business' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Trademark Registration Pakistan (IPO Guide 2026)',
          item: 'https://www.pakistaninfohub.com/business/trademark-registration-pakistan-ipo-guide-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Trademark Registration Pakistan (IPO Official Guide 2026): Forms, Fees & Process',
      description:
        'A neutral, comprehensive manual explaining the statutory trademark registration workflow in Pakistan under the Trademarks Ordinance 2001, single-class filing rules, official IPO fee schedules, and self-filing eligibility.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-30',
      dateModified: '2026-08-30',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/business/trademark-registration-pakistan-ipo-guide-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I file for multiple product categories in one single trademark application in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Pakistan strictly operates a single-class trademark filing system under the international Nice Classification (Classes 1 to 45). Multi-class applications are not permitted. If your business sells clothing (Class 25) and operates an online retail store (Class 35), you must submit two separate applications with separate official government filing fees (Rs. 3,000 per class).',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if someone objects to my trademark during the Trademark Journal publication period?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Once your mark is published in the official monthly Trademarks Journal, there is a mandatory 2-month statutory opposition period. Any third party who believes your mark conflicts with their prior rights can file a Notice of Opposition (Form TM-5). You are then served notice and must submit a formal Counter-Statement (Form TM-6) within 2 months, followed by evidence submission and a hearing before the Registrar of Trademarks.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does trademark protection last in Pakistan, and can it be renewed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A registered trademark in Pakistan is valid for an initial period of 10 years from the date of application. It can be renewed indefinitely for successive 10-year terms by filing Form TM-12 along with the prescribed renewal fee before expiry.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I legally need a lawyer or trademark agent to register my trademark in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, if you are an individual Pakistani citizen, sole proprietor, or local company resident in Pakistan, you have full legal right to file directly through the IPO-Pakistan e-Services portal or at regional IPO counters without hiring an attorney. However, foreign applicants domiciled outside Pakistan are legally required to appoint an authorized trademark agent or advocate via Form TM-48 (Power of Attorney).',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does the entire trademark registration process take from filing to certificate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The realistic timeline typically ranges from 6 to 18 months. This timeline accounts for preliminary examination (1-3 months), responding to any official examination discrepancies/hearings (2-4 months), publication in the official Trademarks Journal, the statutory 2-month public opposition window, and final certificate issuance (Form TM-11).',
          },
        },
      ],
    },
  ],
};

export default function TrademarkRegistrationGuidePage() {
  const breadcrumbs = [
    { nameEn: 'Business & SECP Registration', nameUr: 'کاروبار و ایس ای سی پی', url: '/business' },
    { nameEn: 'Trademark Registration IPO 2026', nameUr: 'ٹریڈ مارک رجسٹریشن گائیڈ' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn max-w-5xl mx-auto">
        <Breadcrumbs items={breadcrumbs} />

        {/* Page Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="INTELLECTUAL PROPERTY" labelUr="آئی پی او رہنمائی" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Trademark Registration in Pakistan
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              آئی پی او پاکستان ٹریڈ مارک رجسٹریشن گائیڈ 2026 (فیس، فارم و طریقہ کار)
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            An independent, factual guide to protecting your brand name, logo, and slogan through the Intellectual Property Organization of Pakistan (IPO-Pakistan). Learn the exact 5-stage procedure, official government fee schedules, single-class filing rules, and self-filing rights without promotional sales pitches.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is Trademark Registration in Pakistan & How Does It Work?"
          topicTitleUr="پاکستان میں ٹریڈ مارک رجسٹریشن کیا ہے اور اس کا طریقہ کار کیا ہے؟"
          answerEn="A trademark grants exclusive legal ownership over your brand name, logo, device, or slogan in Pakistan under the Trademarks Ordinance 2001, preventing competitors from using identical or confusingly similar marks in commerce. Registration is handled directly by IPO-Pakistan through a 5-step process: (1) Pre-filing search (Form TM-55, Rs. 1,000) to verify uniqueness; (2) Application filing (Form TM-1 for goods / TM-2 for services, Rs. 3,000 per class); (3) Official examination by the Trademark Registry; (4) Publication in the monthly Trademarks Journal with a 2-month public opposition window; and (5) Issuance of the 10-year Registration Certificate (Form TM-11, Rs. 9,000). Pakistani residents and registered businesses can complete the entire process directly via the official IPO e-Services portal."
          answerUr="ٹریڈ مارک آپ کے برانڈ کے نام، لوگو یا نعرے کو قانونی تحفظ فراہم کرتا ہے تاکہ کوئی دوسرا آپ کے کاروبار کی شناخت چرا نہ سکے۔ رجسٹریشن کا عمل آئی پی او پاکستان کے ذریعے 5 مراحل میں ہوتا ہے: (1) ریکارڈ سرچ (فارم TM-55، فیس 1,000 روپے)؛ (2) باقاعدہ درخواست جمع کروانا (فارم TM-1 اشیاء کے لیے / TM-2 سروسز کے لیے، فیس 3,000 روپے فی کلاس)؛ (3) سرکاری جانچ پڑتال؛ (4) ٹریڈ مارک جرنل میں 2 ماہ کے لیے اشتہار؛ اور (5) رجسٹریشن سرٹیفکیٹ کا اجراء (فیس 9,000 روپے) جو 10 سال کے لیے قابل تجدید ہوتا ہے۔ پاکستانی شہری و کمپنیاں یہ عمل خود آن لائن مکمل کر سکتے ہیں۔"
        />

        {/* Step-by-Step Process Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step Trademark Registration Workflow (IPO Pakistan 2026)"
          titleUr="ٹریڈ مارک رجسٹریشن کا 5 مرحلہ وار قانونی طریقہ کار"
          subtitleEn="From preliminary search to application filing, examination, journal publication, and final certificate issuance"
          subtitleUr="ریکارڈ سرچ سے لے کر درخواست، قانونی معائنہ، جرنل میں اشاعت اور سرٹیفکیٹ کے حصول تک"
          steps={[
            {
              number: 1,
              titleEn: "Preliminary Search (Form TM-55)",
              titleUr: "ٹریڈ مارک ریکارڈ کی تلاش (سرچ)",
              descEn: "Submit Form TM-55 (Rs. 1,000 official fee) to verify whether your desired brand name, wordmark, or logo is already registered or pending under identical/similar Nice Classification classes.",
              descUr: "آئی پی او ڈیٹا بیس میں چیک کریں کہ آپ کا مطلوبہ برانڈ نام یا لوگو پہلے سے کسی دوسرے کے نام پر تو درج نہیں (فیس 1,000 روپے)۔",
              tagEn: "Availability Search",
              tagUr: "ریکارڈ چیک",
            },
            {
              number: 2,
              titleEn: "File Application (Form TM-1 or TM-2)",
              titleUr: "باقاعدہ درخواست جمع کروائیں",
              descEn: "Submit Form TM-1 (for goods) or TM-2 (for services) with applicant details, high-resolution visual representation of the mark, and specific Nice Classification class. Official fee is Rs. 3,000 per class.",
              descUr: "فارم TM-1 (پروڈکٹس) یا TM-2 (سروسز) کے تحت لوگو، نام اور متعلقہ نائس کلاس کی تفصیلات جمع کروائیں (سرکاری فیس 3,000 روپے فی کلاس)۔",
              tagEn: "Single-Class Filing",
              tagUr: "فائلنگ فارم",
            },
            {
              number: 3,
              titleEn: "Formal & Substantive Examination",
              titleUr: "سرکاری معائنہ و جانچ پڑتال",
              descEn: "IPO examiners review distinctiveness, deceptive similarity, and statutory compliance under Sections 14 & 17 of Trademarks Ordinance 2001. If issues arise, an Examination Report / Show Cause Notice is issued.",
              descUr: "آئی پی او رجسٹرار قانون کے مطابق نام کی انفرادیت کی جانچ کرتا ہے۔ اگر کوئی اعتراض ہو تو باقاعدہ نوٹس یا جواب طلب کیا جاتا ہے۔",
              tagEn: "Examination (1-3 Mos)",
              tagUr: "قانونی معائنہ",
            },
            {
              number: 4,
              titleEn: "Publication in Trademarks Journal",
              titleUr: "ٹریڈ مارک جرنل میں اشاعت",
              descEn: "Once accepted, the mark is published in the official monthly Trademarks Journal. This opens a mandatory 2-month statutory window for public opposition by third parties claiming prior rights.",
              descUr: "منظوری کے بعد ٹریڈ مارک سرکاری جرنل میں شائع کیا جاتا ہے، جس پر عوام یا دیگر کمپنیوں کو 2 ماہ کے اندر اعتراض کا حق حاصل ہوتا ہے۔",
              tagEn: "2-Month Opposition",
              tagUr: "عوامی اعتراض (2 ماہ)",
            },
            {
              number: 5,
              titleEn: "Registration Certificate (Form TM-11)",
              titleUr: "رجسٹریشن سرٹیفکیٹ کا اجراء",
              descEn: "If no opposition is filed (or opposition is decided in your favor), submit Form TM-11 with Rs. 9,000 statutory fee. The official seal certificate is issued, securing 10 years of protection (renewable).",
              descUr: "اعتراض نہ ہونے کی صورت میں 9,000 روپے حتمی فیس ادا کر کے 10 سالہ قانونی سرٹیفکیٹ حاصل کریں جسے بعد میں مزید تجدید کروایا جا سکتا ہے۔",
              tagEn: "10-Year Protection",
              tagUr: "10 سالہ سرٹیفکیٹ",
            },
          ]}
        />

        {/* Fee Table Visual */}
        <FeeTableVisual
          titleEn="Official IPO-Pakistan Trademark Fee Schedule (2026)"
          titleUr="آئی پی او پاکستان ٹریڈ مارک کا سرکاری فیس شیڈول (2026)"
          subtitleEn="Statutory government fees payable directly to IPO-Pakistan per class of goods/services"
          subtitleUr="آئی پی او پاکستان کو فی کلاس ادا کی جانے والی سرکاری فیسوں کی تفصیلی فہرست"
          noteEn="* Crucial Note: These are non-refundable official statutory government fees. Each class of goods/services requires a separate application and separate filing fee. If you choose to hire a private IP attorney or consultant, their professional service fees (typically PKR 15,000 - 45,000) are separate and not paid to the government."
          noteUr="* اہم نوٹ: یہ حکومت پاکستان کے مقرر کردہ سرکاری چالان ہیں جو ناقابل واپسی ہیں۔ اگر آپ کسی نجی وکیل یا کنسلٹنٹ کی خدمات حاصل کرتے ہیں تو ان کی پیشہ ورانہ فیسیں علیحدہ ہوں گی جو حکومت کے کھاتے میں نہیں جاتیں۔"
          rows={[
            {
              serviceEn: "Preliminary Search Request (Form TM-55)",
              serviceUr: "ٹریڈ مارک ریکارڈ سرچ (فارم TM-55)",
              normal: "PKR 1,000",
              urgent: "PKR 2,000 (Expedited)",
              executive: "1 - 3 Working Days",
              validity: "Advisory Status",
            },
            {
              serviceEn: "Application Filing Fee (Form TM-1 / TM-2)",
              serviceUr: "نئی درخواست فائلنگ فیس (فی کلاس)",
              normal: "PKR 3,000 / Class",
              urgent: "Standard Track",
              executive: "Direct / Portal",
              validity: "Active Application",
            },
            {
              serviceEn: "Registration Certificate Issuance (Form TM-11)",
              serviceUr: "فائنل رجسٹریشن سرٹیفکیٹ فیس (فارم TM-11)",
              normal: "PKR 9,000 / Class",
              urgent: "Standard Issuance",
              executive: "Sealed Certificate",
              validity: "Valid for 10 Years",
            },
            {
              serviceEn: "Renewal Fee Before Expiry (Form TM-12)",
              serviceUr: "10 سال بعد تجدید کی فیس (فارم TM-12)",
              normal: "PKR 4,500 / Class",
              urgent: "PKR 9,000 (Late Grace)",
              executive: "Renewable Indefinitely",
              validity: "Additional 10 Years",
            },
            {
              serviceEn: "Notice of Opposition / Defense (Form TM-5 / TM-6)",
              serviceUr: "اعتراض یا جوابی بیان جمع کروانا",
              normal: "PKR 3,000",
              urgent: "Statutory 2 Months",
              executive: "Registrar Hearing",
              validity: "Case Duration",
            },
          ]}
        />

        <AdPlacementZone format="horizontal" />

        {/* Section: The Crucial Single-Class Filing Rule */}
        <section className="p-6 sm:p-8 rounded-3xl bg-amber-50/60 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-900/60 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-800 dark:text-amber-300 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-amber-800 dark:text-amber-400">
                Crucial Practical Rule
              </span>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-doc-ink dark:text-white">
                Pakistan Strictly Enforces Single-Class Trademark Filing
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Under the international <strong>Nice Classification system</strong>, all commerce is divided into <strong>45 distinct classes</strong> (Classes 1–34 cover tangible goods and physical products; Classes 35–45 cover services, retail, technology, and hospitality).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-amber-200/80 dark:border-amber-900/40 space-y-2">
              <div className="flex items-center gap-2 text-doc-seal dark:text-red-400 font-bold text-sm">
                <ShieldAlert className="w-4 h-4" />
                <span>No Multi-Class Application in Pakistan</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Unlike some jurisdictions (such as the US or EU) where one consolidated application can cover multiple classes, <strong>Pakistan does not allow multi-class filings</strong>. If your brand spans multiple classes, submitting one application covers only one class.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-amber-200/80 dark:border-amber-900/40 space-y-2">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Real-World Business Example</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                If you manufacture ready-made apparel (<strong>Class 25 - Clothing</strong>) and also operate an online retail website (<strong>Class 35 - Retail &amp; Advertising Services</strong>), you must submit <strong>2 separate TM-1/TM-2 applications</strong> and pay the Rs. 3,000 filing fee twice (Total: Rs. 6,000).
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-100/70 dark:bg-amber-900/30 text-xs text-amber-900 dark:text-amber-200 font-sans leading-relaxed">
            💡 <strong>Smart Budgeting Tip:</strong> If your startup or small business has budget constraints, register your <em>primary core class</em> first (the exact good or service generating your primary revenue today), and expand to secondary classes as your business scales.
          </div>
        </section>

        {/* Section: Trademark vs Patent vs Copyright (Comparison Visual) */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
              Trademark vs Patent vs Copyright: What Do They Actually Protect?
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Many business founders confuse these three intellectual property rights. Each serves a completely distinct legal purpose under Pakistani law.
            </p>
          </div>

          <ComparisonVisual
            titleEn="Intellectual Property Rights Comparison (Pakistan)"
            titleUr="ٹریڈ مارک، پیٹنٹ اور کاپی رائٹ میں بنیادی فرق"
            subtitleEn="Clear breakdown of protected assets, governing office, duration, and legal forms"
            subtitleUr="تحفظ کی نوعیت، متعلقہ سرکاری ادارہ، قانونی مدت اور فارمز کا تقابلی جائزہ"
            items={[
              {
                titleEn: "Trademark (TM / ®)",
                titleUr: "ٹریڈ مارک (برانڈ تحفظ)",
                subtitleEn: "Brand Name, Logo & Slogan",
                subtitleUr: "نام، لوگو اور برانڈ شناخت",
                badgeEn: "Brand Identity",
                badgeUr: "کاروباری برانڈ",
                badgeVariant: "brass",
                isPopular: true,
                pointsEn: [
                  "Protects commercial names, logos, catchphrases, and packaging shapes.",
                  "Prevents customer confusion and unauthorized copycat branding.",
                  "Valid for 10 years, renewable indefinitely.",
                ],
                features: [
                  { labelEn: "Governing Law", valueEn: "Trademarks Ordinance 2001" },
                  { labelEn: "Primary Form", valueEn: "Form TM-1 / TM-2" },
                  { labelEn: "Official Term", valueEn: "10 Years (Renewable)" },
                  { labelEn: "Registry Location", valueEn: "TMR Karachi / IPO Islamabad" },
                ],
                recommendedForEn: "Businesses, startups, e-commerce stores, restaurants, and product manufacturers.",
              },
              {
                titleEn: "Patent (Invention)",
                titleUr: "پیٹنٹ (نئی ایجاد)",
                subtitleEn: "Technical Inventions & Machines",
                subtitleUr: "تکنیکی مشینری و ایجادات",
                badgeEn: "Novel Invention",
                badgeUr: "تکنیکی ایجاد",
                badgeVariant: "navy",
                pointsEn: [
                  "Protects novel, non-obvious industrial inventions and functional mechanisms.",
                  "Grants exclusive right to produce, license, or sell the technical innovation.",
                  "Non-renewable maximum term of 20 years.",
                ],
                features: [
                  { labelEn: "Governing Law", valueEn: "Patents Ordinance 2000" },
                  { labelEn: "Primary Form", valueEn: "Form P-1 / P-2" },
                  { labelEn: "Official Term", valueEn: "20 Years (Non-Renewable)" },
                  { labelEn: "Registry Location", valueEn: "Patent Office Karachi / IPO" },
                ],
                recommendedForEn: "Engineers, pharmaceutical companies, hardware inventors, and scientific researchers.",
              },
              {
                titleEn: "Copyright (©)",
                titleUr: "کاپی رائٹ (تخلیقی کام)",
                subtitleEn: "Literary, Artistic & Code Works",
                subtitleUr: "تحریر، سافٹ ویئر کوڈ و ویڈیوز",
                badgeEn: "Creative Works",
                badgeUr: "تخلیقی شاہکار",
                badgeVariant: "emerald",
                pointsEn: [
                  "Protects original written books, software source code, music, films, and artwork.",
                  "Prevents direct copying, piracy, and unauthorized distribution.",
                  "Valid for author's lifetime + 50 years after demise.",
                ],
                features: [
                  { labelEn: "Governing Law", valueEn: "Copyright Ordinance 1962" },
                  { labelEn: "Primary Form", valueEn: "Form CR-1 / CR-2" },
                  { labelEn: "Official Term", valueEn: "Life of Author + 50 Years" },
                  { labelEn: "Registry Location", valueEn: "Copyright Office Karachi / IPO" },
                ],
                recommendedForEn: "Software developers, writers, graphic designers, musicians, and video producers.",
              },
            ]}
          />
        </section>

        {/* Section: Self-Filing vs Hiring a Professional (Neutral Assessment) */}
        <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-doc-dark-card border border-slate-200 dark:border-slate-800 space-y-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-doc-seal dark:text-doc-brass text-xs font-mono font-bold uppercase tracking-wider">
              <Scale className="w-4 h-4" />
              <span>Neutral Practical Assessment</span>
            </div>
            <h2 className="text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
              Do You Need to Hire a Lawyer, or Can You File Yourself?
            </h2>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Most online articles about Pakistani trademarks are written by law firms that frame hiring an attorney as mandatory. The actual legal reality is straightforward:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
                <UserCheck className="w-4 h-4" />
                <span>When You Can Easily Self-File</span>
              </div>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2 font-sans">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Pakistani Residents &amp; Local Businesses:</strong> Any Pakistani citizen, sole proprietor, or company director can register directly on the IPO e-Services portal using their CNIC.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Unique Coined Wordmarks:</strong> If your brand name is completely invented (e.g., &quot;Xylovent&quot;) and has passed a clean TM-55 search with zero conflicts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Cost Consciousness:</strong> You save between PKR 15,000 and PKR 45,000 in professional service fees by paying only official government chalan fees.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 space-y-3">
              <div className="flex items-center gap-2 text-blue-800 dark:text-blue-300 font-bold text-sm">
                <Building className="w-4 h-4" />
                <span>When Professional Help is Needed</span>
              </div>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2 font-sans">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                  <span><strong>Foreign Applicants (Mandatory):</strong> Non-resident foreign nationals and overseas entities are legally required to file through an authorized Pakistani IP advocate with Form TM-48 (Power of Attorney).</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                  <span><strong>Office Objections &amp; Hearings:</strong> If the Registrar issues an objection notice under Section 14 (similarity) or Section 17, drafting formal legal arguments and appearing in hearings benefits from experienced counsel.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                  <span><strong>Opposition Litigation:</strong> If a competitor files a Notice of Opposition (Form TM-5) during the Journal window, navigating evidence submission and registrar trials is complex.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Official IPO Portals & Physical Offices */}
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-4">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white flex items-center gap-2">
            <Globe className="w-5 h-5 text-doc-brass" />
            <span>Official IPO-Pakistan Verification &amp; Filing Access Points</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Always verify that you are communicating directly with official IPO-Pakistan channels rather than unauthorized third-party copycat websites:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="text-[11px] font-mono font-bold text-doc-seal dark:text-red-400 uppercase block">
                Head Office (Islamabad)
              </span>
              <p className="text-xs font-bold text-doc-ink dark:text-white">IPO-Pakistan HQ</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Plot No. 33, Sector G-5/2, Near State Bank of Pakistan, Islamabad.</p>
              <p className="text-[11px] font-mono text-slate-400 pt-1">Tel: (051) 9245831-32</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="text-[11px] font-mono font-bold text-doc-brass uppercase block">
                Trade Marks Registry (Karachi)
              </span>
              <p className="text-xs font-bold text-doc-ink dark:text-white">TMR Regional Directorate</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Plot # CD-3, Sub Plot # 1, Sector 28, KDA Scheme 32, Main University Road, Karachi.</p>
              <p className="text-[11px] font-mono text-slate-400 pt-1">Tel: (021) 99230538</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase block">
                Lahore Regional Office
              </span>
              <p className="text-xs font-bold text-doc-ink dark:text-white">IPO Facilitation Desk</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Lahore Chamber of Commerce &amp; Industry Building / Arfa Software Technology Park, Lahore.</p>
              <p className="text-[11px] font-mono text-slate-400 pt-1">Tel: (042) 99239141</p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3 items-center">
            <a
              href="https://ipo.gov.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-doc-ink dark:bg-slate-800 text-white hover:bg-doc-seal text-xs font-medium transition"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Official IPO-Pakistan Website (ipo.gov.pk)</span>
            </a>
            <span className="text-xs text-slate-500">Official Portal for e-Filing, Fee Challans &amp; Online TM Searches</span>
          </div>
        </section>

        {/* Cross-Linking to Related Business Guides */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Business &amp; Corporate Compliance Guides
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Business owners setting up brand intellectual property often require corporate incorporation and tax filer status:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <Link
              href="/business/secp-company-registration-online-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">SECP Corporate</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                SECP Company Registration Online 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Register Pvt Ltd, SMC, or LLP online via SECP eZfile in 4 hours.</p>
            </Link>

            <Link
              href="/business/pseb-freelancer-registration-tax-benefits-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">IT Exports &amp; Freelancers</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                PSEB Freelancer Registration &amp; Tax →
              </h3>
              <p className="text-xs text-slate-500 mt-1">0.25% concessional tax rate under Section 154A &amp; ePRC verification.</p>
            </Link>

            <Link
              href="/business/sole-proprietorship-ntn-registration"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">FBR Tax Setup</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Sole Proprietorship NTN Registration →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Instant business NTN registration via FBR Iris portal for banking.</p>
            </Link>
          </div>
        </section>

        {/* FAQ Accordion Visual */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Trademark Registration Pakistan)"
          titleUr="آئی پی او ٹریڈ مارک رجسٹریشن سے متعلق عام سوالات"
          subtitleEn="Clear, legally grounded answers to the most common queries faced by Pakistani entrepreneurs and applicants"
          subtitleUr="پاکستانی تاجروں اور کاروباری افراد کے اہم ترین سوالات کے مصدقہ اور آسان جوابات"
          items={[
            {
              questionEn: "Can I file for multiple product categories in one single trademark application in Pakistan?",
              questionUr: "کیا میں ایک ہی درخواست میں متعدد پروڈکٹ کیٹیگریز (کلاسز) کے لیے اپلائی کر سکتا ہوں؟",
              answerEn: "No. Pakistan strictly operates a single-class trademark filing system under the international Nice Classification (Classes 1 to 45). Multi-class applications are not permitted. If your business sells clothing (Class 25) and operates an online retail store (Class 35), you must submit two separate applications with separate official government filing fees (Rs. 3,000 per class).",
              answerUr: "نہیں! پاکستان میں نائس کلاسیفکیشن کے تحت ایک وقت میں ایک کلاس کے لیے ہی درخواست دی جا سکتی ہے۔ اگر آپ کا کاروبار کپڑوں کا ہے (کلاس 25) اور آن لائن دکان کا بھی ہے (کلاس 35) تو آپ کو دو الگ الگ درخواستیں اور الگ فیس (3,000 روپے فی کلاس) جمع کروانی ہو گی۔",
            },
            {
              questionEn: "What happens if someone objects to my trademark during the Trademark Journal publication period?",
              questionUr: "اگر جرنل میں اشاعت کے دوران کوئی میرے ٹریڈ مارک پر اعتراض داخل کر دے تو کیا ہوگا؟",
              answerEn: "Once your mark is published in the official monthly Trademarks Journal, there is a mandatory 2-month statutory opposition period. Any third party who believes your mark conflicts with their prior rights can file a Notice of Opposition (Form TM-5). You are then served notice and must submit a formal Counter-Statement (Form TM-6) within 2 months, followed by evidence submission and a hearing before the Registrar of Trademarks.",
              answerUr: "سرکاری جرنل میں اشاعت کے بعد 2 ماہ کا وقت دیا جاتا ہے۔ اگر کوئی فریق اعتراض (فارم TM-5) داخل کرے تو آپ کو 2 ماہ کے اندر جوابی بیان (فارم TM-6) جمع کروانا ہوتا ہے، جس کے بعد رجسٹرار ثبوتوں کی روشنی میں باقاعدہ سماعت کر کے فیصلہ سناتا ہے۔",
            },
            {
              questionEn: "How long does trademark protection last in Pakistan, and can it be renewed?",
              questionUr: "پاکستان میں ٹریڈ مارک کتنے عرصے کے لیے رجسٹر ہوتا ہے اور کیا اس کی تجدید ہو سکتی ہے؟",
              answerEn: "A registered trademark in Pakistan is valid for an initial period of 10 years from the date of application. It can be renewed indefinitely for successive 10-year terms by filing Form TM-12 along with the prescribed renewal fee before expiry.",
              answerUr: "ٹریڈ مارک کی رجسٹریشن درخواست کی تاریخ سے 10 سال کے لیے کارآمد ہوتی ہے۔ 10 سال مکمل ہونے سے پہلے فارم TM-12 کے ذریعے تجدید کی فیس ادا کر کے اسے لامحدود مدت تک ہر 10 سال بعد رینیو کروایا جا سکتا ہے۔",
            },
            {
              questionEn: "Do I legally need a lawyer or trademark agent to register my trademark in Pakistan?",
              questionUr: "کیا ٹریڈ مارک رجسٹر کروانے کے لیے وکیل یا ایجنٹ کی خدمات لینا قانونی طور پر لازمی ہے؟",
              answerEn: "No, if you are an individual Pakistani citizen, sole proprietor, or local company resident in Pakistan, you have full legal right to file directly through the IPO-Pakistan e-Services portal or at regional IPO counters without hiring an attorney. However, foreign applicants domiciled outside Pakistan are legally required to appoint an authorized trademark agent or advocate via Form TM-48 (Power of Attorney).",
              answerUr: "نہیں! پاکستانی شہریوں اور مقامی کمپنیوں کے لیے وکیل ہائر کرنا لازمی نہیں ہے، آپ براہ راست آئی پی او پورٹل پر خود اپلائی کر سکتے ہیں۔ البتہ غیر ملکی درخواست گزاروں کے لیے پاکستانی وکیل یا رجسٹرڈ ٹریڈ مارک ایجنٹ کے ذریعے اپلائی کرنا قانونی شرط ہے۔",
            },
            {
              questionEn: "How long does the entire trademark registration process take from filing to certificate?",
              questionUr: "درخواست جمع کروانے سے لے کر فائنل سرٹیفکیٹ ملنے تک کتنا وقت لگتا ہے؟",
              answerEn: "The realistic timeline typically ranges from 6 to 18 months. This timeline accounts for preliminary examination (1-3 months), responding to any official examination discrepancies/hearings (2-4 months), publication in the official Trademarks Journal, the statutory 2-month public opposition window, and final certificate issuance (Form TM-11).",
              answerUr: "عام طور پر مکمل عمل میں 6 سے 18 ماہ لگتے ہیں۔ اس میں ابتدائی معائنہ، اگر کوئی دفتری اعتراض ہو تو اس کا جواب، سرکاری جرنل میں 2 ماہ کی اشاعت، اور حتمی سرٹیفکیٹ کی تیاری کا وقت شامل ہے۔",
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Legal Authorities &amp; Sources Cited:</p>
          {[
            {
              label: 'Intellectual Property Organization of Pakistan (IPO-Pakistan)',
              url: 'https://ipo.gov.pk',
            },
            {
              label: 'Trademarks Ordinance 2001 & Trademarks Rules 2004 (Government of Pakistan)',
              url: 'https://ipo.gov.pk/trademarks',
            },
            {
              label: 'Nice Classification of Goods and Services (World Intellectual Property Organization - WIPO)',
              url: 'https://www.wipo.int/classifications/nice/en/',
            },
          ].map((src) => (
            <a
              key={src.url}
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-doc-seal"
            >
              <ExternalLink className="w-3 h-3" />
              {src.label}: <span className="font-mono">{src.url}</span>
            </a>
          ))}
        </section>
      </div>
    </>
  );
}
