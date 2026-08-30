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
  Building2,
  Home,
  Users,
  Scale,
  Briefcase,
  AlertOctagon,
  FileText,
  BadgeCheck,
  PhoneCall,
  Check,
  Sparkles,
  Layers,
  Info
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Government Employee Housing Schemes in Pakistan (2026): PGSHF, PWWB & Federal Comparison | Pakistan Info Hub',
  description:
    'Comprehensive guide comparing government and worker housing schemes in Pakistan: PGSHF (Punjab civil servants, HUD&PHED shift, 3-day refunds), PWWB (industrial labor flats & 3-marla plots), FGEHA federal schemes, teacher cooperatives, eligibility criteria, and anti-scam warnings.',
  keywords: [
    'government employee housing schemes pakistan 2026',
    'PGSHF punjab government servants housing foundation',
    'PWWB workers welfare board housing scheme flats',
    'PGSHF refund policy 3 days direct credit',
    'PGSHF HUDPHED shift from SGAD',
    'FGEHA federal government employees housing authority',
    'punjab government teachers cooperative housing society',
    'sundar industrial estate workers flats kasur',
    'apni chhat apna ghar 3 marla scheme punjab',
  ],
  openGraph: {
    title: 'Government Employee Housing Schemes in Pakistan 2026: PGSHF vs PWWB vs FGEHA',
    description:
      'Clear structural breakdown of Pakistan’s public housing bodies: PGSHF provincial schemes, PWWB industrial worker flats, FGEHA federal allotments, and cooperative societies.',
    url: 'https://www.pakistaninfohub.com/property/government-employee-housing-schemes-pakistan-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/property/government-employee-housing-schemes-pakistan-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Property & Land Mutation', item: 'https://www.pakistaninfohub.com/property' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Government Employee Housing Schemes Guide',
          item: 'https://www.pakistaninfohub.com/property/government-employee-housing-schemes-pakistan-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Government Employee & Worker Housing Schemes in Pakistan (2026): PGSHF, PWWB, FGEHA & Cooperatives Explained',
      description:
        'A comprehensive legal and civic guide breaking down the distinct public sector housing authorities in Pakistan, member eligibility, computerized draw balloting, refund procedures, and anti-fraud alerts.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-30',
      dateModified: '2026-08-30',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/property/government-employee-housing-schemes-pakistan-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Am I eligible for PGSHF housing if I work for a private company or semi-government corporation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The Punjab Government Servants Housing Foundation (PGSHF) is exclusively restricted to regular serving and retired employees of the Punjab Provincial Government whose salaries are disbursed via the provincial consolidated fund. Private employees and industrial workers must look to the Punjab Workers Welfare Board (PWWB) instead.',
          },
        },
        {
          '@type': 'Question',
          name: 'What housing scheme applies to government school and college teachers in Punjab?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Regular government teachers in Punjab are eligible for PGSHF membership as provincial civil servants. In addition, teachers frequently hold independent memberships in specialized district-level Government Teachers Cooperative Housing Societies (such as PGTECHS Lahore/Multan), which operate under the Punjab Cooperative Societies Act 1925.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do computerized housing draws (balloting) work across these schemes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Allotment draws are conducted transparently via automated software without manual discretion. In PGSHF, plot allocations are sequenced based on seniority of membership, age of retirement, and contribution history. In PWWB, verified industrial worker applications undergo computerized balloting overseen by district labor committees.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I cancel my PGSHF membership and claim a full refund of monthly deductions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Under revised standard operating procedures, PGSHF members can submit a voluntary withdrawal and refund form along with a stamp paper affidavit and salary slip. Once endorsed by the DDO, the foundation processes the refund via direct bank credit within 3 working days.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if an agent or middleman asks for a fee or bribe promising an allotment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Never pay any individual, agent, or property dealer. All public allotments are strictly automated and computerized. Immediately report extortion or fraudulent promises to the Anti-Corruption Establishment Punjab (Toll-Free Helpline 1350) or the PGSHF official helpline at 0800-22468.',
          },
        },
      ],
    },
  ],
};

export default function GovernmentHousingSchemesPage() {
  const breadcrumbs = [
    { nameEn: 'Property & Land Mutation', nameUr: 'زمین، جائیداد اور انتقال', url: '/property' },
    { nameEn: 'Government Employee Housing Schemes Guide 2026', nameUr: 'سرکاری ملازمین ہاؤسنگ سکیمز گائیڈ 2026' },
  ];

  const comparisonItems = [
    {
      titleEn: 'PGSHF (Punjab Govt Employees)',
      titleUr: 'پنجاب گورنمنٹ سرونٹس ہاؤسنگ فاؤنڈیشن',
      subtitleEn: 'Provincial Civil Servants (Serving & Retired)',
      subtitleUr: 'صوبائی سرکاری ملازمین (ملازمت پیشہ و ریٹائرڈ)',
      badgeEn: 'Provincial Civil Servants',
      badgeVariant: 'seal' as const,
      pointsEn: [
        'Mandatory monthly salary deduction from provincial payroll',
        'Administrative oversight: HUD&PHED (Shifted from S&GAD)',
        'Plot/house allotment based on retirement seniority & computerized draw',
        'Voluntary cancellation refunds processed within 3 working days',
        'Active schemes across Lahore, Rawalpindi, Faisalabad, Multan, Sahiwal',
      ],
      pointsUr: [
        'تنخواہ سے ماہانہ کٹوتی کے ذریعے ممبرشپ',
        'محکمہ ہاؤسنگ و اربن ڈویلپمنٹ کے زیر انتظام',
        'ریٹائرمنٹ کی مدت اور قرعہ اندازی پر پلاٹ کی الاٹمنٹ',
        'ممبرشپ کینسل کروانے پر 3 دن میں رقم کی براہ راست واپسی',
        'لاہور، راولپنڈی، فیصل آباد، ملتان اور دیگر شہروں میں اسکیمیں',
      ],
      recommendedForEn: 'Regular Punjab Provincial Government Employees',
      recommendedForUr: 'پنجاب کے ریگولر صوبائی ملازمین',
    },
    {
      titleEn: 'PWWB / PWWF (Industrial Workers)',
      titleUr: 'پنجاب ورکرز ویلفیئر بورڈ / فنڈ',
      subtitleEn: 'Private-Sector Factory & Industrial Labor',
      subtitleUr: 'فیکٹری و صنعتی مزدور (پرائیویٹ سیکٹر)',
      badgeEn: 'Industrial Labor Force',
      badgeVariant: 'brass' as const,
      pointsEn: [
        'Exclusively for registered industrial workers (PESSI / EOBI)',
        'Requires 3+ years continuous industrial service & no prior govt house',
        'Free/subsidized flats (e.g. Sundar Industrial Estate Kasur/Lahore)',
        'Special quotas: 3% for worker widows, 2% for disabled workers',
        'Completely separate from civil servant housing schemes',
      ],
      pointsUr: [
        'سوشل سیکیورٹی (PESSI) یا ای او بی آئی رجسٹرڈ ورکرز کے لیے',
        'کم از کم 3 سالہ مسلسل سروس اور ذاتی گھر نہ ہونے کی شرط',
        'سندر انڈسٹریل اسٹیٹ، قصور اور ملتان میں مفت/رعایتی فلیٹس',
        'بیواؤں کے لیے 3 فیصد اور معذور ورکرز کے لیے 2 فیصد کوٹہ',
        'سرکاری ملازمین اس اسکیم کے اہل نہیں ہیں',
      ],
      recommendedForEn: 'Registered Factory, Mill & Industrial Laborers',
      recommendedForUr: 'رجسٹرڈ فیکٹری اور صنعتی ملازمین',
    },
    {
      titleEn: 'FGEHA (Federal Civil Servants)',
      titleUr: 'فیڈرل گورنمنٹ ایمپلائز ہاؤسنگ اتھارٹی',
      subtitleEn: 'Federal Ministries, Divisions & Autonomous Bodies',
      subtitleUr: 'وفاقی وزارتیں، ڈویژنز اور خود مختار ادارے',
      badgeEn: 'Federal Employees',
      badgeVariant: 'navy' as const,
      pointsEn: [
        'Federal government civil servants, judiciary, and federal police',
        'Administered by Ministry of Housing & Works Islamabad',
        'Membership categories by Basic Pay Scale (BPS-01 to BPS-22)',
        'Schemes concentrated in Islamabad (Sectors G-13, G-14, F-14, Park Road)',
        'Independent of provincial PGSHF arrangements',
      ],
      pointsUr: [
        'وفاقی وزارتوں اور اسلام آباد کے ملازمین کے لیے',
        'وزارت ہاؤسنگ اینڈ ورکس کے تحت خود مختار اتھارٹی',
        'گریڈ (BPS) کے مطابق فلیٹس اور پلاٹوں کی کیٹیگریز',
        'اسلام آباد کے مختلف سیکٹرز میں رہائشی منصوبے',
        'صوبائی فاؤنڈیشنز سے مکمل طور پر الگ ادارہ',
      ],
      recommendedForEn: 'Federal Government Servants in Islamabad & Provinces',
      recommendedForUr: 'وفاقی حکومت کے ملازمین اور افسران',
    },
    {
      titleEn: 'Teachers & Officers Cooperatives',
      titleUr: 'اساتذہ و افسران کوآپریٹو سوسائٹیز',
      subtitleEn: 'Department-Specific Member Cooperative Societies',
      subtitleUr: 'محکمہ جاتی کوآپریٹو ہاؤسنگ سوسائٹیز',
      badgeEn: 'Cooperative Societies',
      badgeVariant: 'emerald' as const,
      pointsEn: [
        'Self-funded societies registered under Cooperative Societies Act 1925',
        'Examples: Punjab Govt Teachers CHS, Civil Secretariat Officers CHS',
        'Governed by elected management committees under Registrar Cooperatives',
        'Financed entirely by member plot installments, not government grants',
        'Open only to certified staff/officers of that specific profession',
      ],
      pointsUr: [
        'کوآپریٹو ایکٹ 1925 کے تحت رجسٹرڈ خود مختار سوسائٹیز',
        'جیسے گورنمنٹ ٹیچرز ہاؤسنگ سوسائٹی یا سیکرٹریٹ آفیسرز سوسائٹی',
        'ممبران کے اپنے فنڈز اور منتخب باڈی کے تحت چلنے والے منصوبے',
        'مخصوص محکمے کے اساتذہ یا افسران ہی ممبر بن سکتے ہیں',
        'حکومتی گرانٹ کی بجائے ممبران کی اقساط پر انحصار',
      ],
      recommendedForEn: 'Teachers, College Professors & Secretariat Cadres',
      recommendedForUr: 'سرکاری اساتذہ اور سیکرٹریٹ کیڈر افسران',
    },
  ];

  const pgshfSteps = [
    {
      number: 1,
      titleEn: 'Enrollment & Monthly Salary Deduction',
      titleUr: 'ممبرشپ کا اندراج و تنخواہ سے کٹوتی',
      descEn: 'Regular Punjab employees submit the PGSHF membership form via their DDO. Fixed monthly contributions are deducted directly from the provincial payroll based on BPS scale.',
      descUr: 'ریگولر ملازمین DDO کے ذریعے فارم جمع کرواتے ہیں اور تنخواہ سے ماہانہ کٹوتی شروع ہوتی ہے۔',
      tagEn: 'BPS Scale Slabs',
      tagUr: 'ماہانہ کٹوتی',
    },
    {
      number: 2,
      titleEn: 'Seniority Queue & Scheme Preference',
      titleUr: 'سینیارٹی لسٹ اور ترجیحی شہر کا انتخاب',
      descEn: 'Members log in to pgshf.gop.pk to view their computerized seniority number and register their geographic station preferences (Lahore, Rawalpindi, Multan, Faisalabad, etc.).',
      descUr: 'پورٹل پر سینیارٹی نمبر چیک کریں اور اپنے ترجیحی شہر کا اندراج کریں۔',
      tagEn: 'pgshf.gop.pk',
      tagUr: 'سینیارٹی ریکارڈ',
    },
    {
      number: 3,
      titleEn: 'Computerized Balloting & Allotment',
      titleUr: 'کمپیوٹرائزڈ قرعہ اندازی و الاٹمنٹ',
      descEn: 'Balloting is conducted via transparent software. Upon retirement (or reaching top seniority), the member receives a provisional allotment letter for their entitled plot size.',
      descUr: 'ریٹائرمنٹ کی بنیاد پر کمپیوٹرائزڈ قرعہ اندازی کے ذریعے پلاٹ الاٹ کیا جاتا ہے۔',
      tagEn: 'Transparent Draw',
      tagUr: 'قرعہ اندازی',
    },
    {
      number: 4,
      titleEn: 'Possession & 3-Day Refund Option',
      titleUr: 'قبضہ یا 3 دن میں رقم کی واپسی',
      descEn: 'Members can take physical possession of developed plots, or opt for voluntary withdrawal where all deposited subscriptions are refunded to their bank within 3 working days.',
      descUr: 'ترقی یافتہ پلاٹ کا قبضہ حاصل کریں یا رضا کارانہ دستبرداری پر 3 دن میں رقم واپس لیں۔',
      tagEn: '3-Day Direct Credit',
      tagUr: 'فوری ریفنڈ',
    },
  ];

  const faqs = [
    {
      questionEn: 'Am I eligible for PGSHF housing if I work for a private company or semi-government corporation?',
      questionUr: 'کیا پرائیویٹ یا خود مختار ادارے کے ملازمین PGSHF کے اہل ہیں؟',
      answerEn: 'No. The Punjab Government Servants Housing Foundation (PGSHF) is legally restricted to regular serving and retired employees of the Punjab Provincial Government whose salaries are disbursed via the provincial consolidated fund. Private employees and industrial workers must apply through the Punjab Workers Welfare Board (PWWB) instead.',
      answerUr: 'نہیں، پی جی ایس ایچ ایف صرف پنجاب حکومت کے ریگولر ملازمین کے لیے ہے۔ پرائیویٹ اور صنعتی ورکرز ورکرز ویلفیئر بورڈ (PWWB) کے اہل ہیں۔',
    },
    {
      questionEn: 'What housing scheme applies to government school and college teachers in Punjab?',
      questionUr: 'پنجاب کے سرکاری اساتذہ کس ہاؤسنگ سکیم کے اہل ہیں؟',
      answerEn: 'Regular government teachers in Punjab are eligible for PGSHF membership as provincial civil servants. In addition, teachers frequently hold independent memberships in specialized district-level Government Teachers Cooperative Housing Societies (such as PGTECHS Lahore/Multan), which operate under the Punjab Cooperative Societies Act 1925.',
      answerUr: 'سرکاری اساتذہ صوبائی ملازم ہونے کے ناطے PGSHF کے اہل ہیں، نیز وہ اساتذہ کی اپنی کوآپریٹو ہاؤسنگ سوسائٹیز کی ممبرشپ بھی لے سکتے ہیں۔',
    },
    {
      questionEn: 'How do computerized housing draws (balloting) work across these schemes?',
      answerEn: 'Allotment draws are conducted transparently via automated software without manual discretion. In PGSHF, plot allocations are sequenced based on seniority of membership, age of retirement, and contribution history. In PWWB, verified industrial worker applications undergo computerized balloting overseen by district labor committees.',
      answerUr: 'تمام قرعہ اندازی مکمل طور پر کمپیوٹرائزڈ ہوتی ہے۔ PGSHF میں سینیارٹی اور ریٹائرمنٹ جبکہ ورکرز بورڈ میں تصدیق شدہ درخواستوں پر شفاف قرعہ اندازی کی جاتی ہے۔',
    },
    {
      questionEn: 'Can I cancel my PGSHF membership and claim a full refund of monthly deductions?',
      questionUr: 'کیا PGSHF کی ممبرشپ منسوخ کروا کے جمع شدہ رقم واپس مل سکتی ہے؟',
      answerEn: 'Yes. Under revised standard operating procedures, PGSHF members can submit a voluntary withdrawal and refund form along with a stamp paper affidavit and salary slip. Once endorsed by the DDO, the foundation processes the refund via direct bank credit within 3 working days.',
      answerUr: 'جی ہاں، بیان حلفی اور کینسلشن فارم جمع کروانے پر DDO تصدیق کے بعد 3 دفتری ایام کے اندر جمع شدہ رقم براہ راست بینک اکاؤنٹ میں واپس بھیج دی جاتی ہے۔',
    },
    {
      questionEn: 'What should I do if an agent or middleman asks for a fee or bribe promising an allotment?',
      questionUr: 'اگر کوئی ایجنٹ یا ڈیلر پلاٹ دلوانے کے نام پر رشوت یا فیس مانگے تو کیا کریں؟',
      answerEn: 'Never pay any individual, agent, or property dealer. All public allotments are strictly automated and computerized. Immediately report extortion or fraudulent promises to the Anti-Corruption Establishment Punjab (Toll-Free Helpline 1350) or the PGSHF official helpline at 0800-22468.',
      answerUr: 'کسی ایجنٹ کو پیسے نہ دیں۔ تمام الاٹمنٹ کمپیوٹرائزڈ ہے۔ فراڈ کی صورت میں اینٹی کرپشن ہیلپ لائن (1350) یا ہیلپ لائن (0800-22468) پر فوری شکایت کریں۔',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn max-w-5xl mx-auto font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Header */}
        <header className="rounded-3xl border-2 border-doc-brass/40 p-6 sm:p-8 md:p-10 space-y-4 relative overflow-hidden bg-doc-ink text-white shadow-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="GOVERNMENT HOUSING DIRECTORY" labelUr="سرکاری ہاؤسنگ گائیڈ" variant="seal" />
            <span className="text-xs text-slate-400 font-bold">•</span>
            <VerifiedBadge variant="header" textEn="OFFICIAL 2026 HOUSING BODIES" textUr="مصدقہ حکومتی ادارے 2026" />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold tracking-tight leading-tight">
            Government Employee &amp; Worker Housing Schemes in Pakistan (2026): PGSHF vs. PWWB vs. FGEHA
          </h1>

          <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            A definitive clarifying guide to Pakistan&apos;s distinct public housing institutions. Learn which scheme covers your employment sector, how computerized balloting works, 3-day refund rules, and anti-scam safeguards.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-doc-brass font-mono">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Building2 className="w-3.5 h-3.5 text-doc-brass" />
              <span>PGSHF (HUD&amp;PHED Oversight)</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
              <span>PWWB Industrial Labor Flats</span>
            </span>
          </div>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="Which Government Housing Scheme Applies to Your Employment Sector?"
          topicTitleUr="آپ کے پیشے کے مطابق کون سی سرکاری ہاؤسنگ سکیم لاگو ہوتی ہے؟"
          answerEn="Public housing in Pakistan is divided among separate bodies: PGSHF serves regular Punjab provincial government employees; PWWB (Workers Welfare Board) provides free/subsidized flats to registered private industrial labor; FGEHA caters to federal civil servants in Islamabad; and cooperative societies serve teachers and officers. Each operates under separate laws with strictly non-transferable eligibility."
          answerUr="پاکستان میں سرکاری ہاؤسنگ اسکیمیں مختلف محکموں میں بٹی ہوئی ہیں: PGSHF صرف پنجاب کے صوبائی سرکاری ملازمین کے لیے ہے، ورکرز ویلفیئر بورڈ (PWWB) فیکٹری و صنعتی مزدوروں کو فلیٹس فراہم کرتا ہے، FGEHA وفاقی ملازمین کے لیے ہے، اور کوآپریٹو سوسائٹیز اساتذہ و افسران کے لیے ہیں۔ ہر ادارے کا قانون اور اہلیت بالکل الگ ہے۔"
        />

        {/* Major Departmental Realignment Alert Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800/60 flex items-start gap-4">
          <Info className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
            <strong className="font-serif font-bold text-blue-900 dark:text-blue-300 block text-base">
              Administrative Update: PGSHF Restructuring Under Housing &amp; Public Health Department
            </strong>
            <p className="leading-relaxed">
              The Punjab Government Servants Housing Foundation (PGSHF) operates under the administrative umbrella of the <strong>Housing, Urban Development and Public Health Engineering Department (HUD&amp;PHED)</strong> (transitioned from S&amp;GAD). The foundation has upgraded its digital services to process voluntary subscription cancellation refunds via direct bank credit within <strong>3 working days</strong>.
            </p>
          </div>
        </div>

        {/* Section 1: Side-by-Side Housing Body Comparison */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <Scale className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Public Housing Landscape Comparison: Know Your Jurisdiction
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            The most common mistake applicants make is applying to the wrong foundation. Review the legal distinctions and eligibility boundaries below:
          </p>

          <ComparisonVisual items={comparisonItems} />
        </section>

        {/* Section 2: PGSHF Membership & Lifecycle */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              How PGSHF Works for Punjab Provincial Civil Servants
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            PGSHF operates as a self-sustaining statutory foundation created under the Punjab Government Servants Housing Foundation Act 2004:
          </p>

          <ProcessStepsDiagram
            steps={pgshfSteps}
            titleEn="PGSHF Allotment &amp; Membership Lifecycle"
            titleUr="پی جی ایس ایچ ایف ممبرشپ اور الاٹمنٹ کا طریقہ کار"
            subtitleEn="From initial salary subscription to computerized draw possession or 3-day refund"
            subtitleUr="ماہانہ تنخواہ کٹوتی سے لے کر الاٹمنٹ یا فوری ریفنڈ تک کے مراحل"
            variant="dark"
          />
        </section>

        {/* Section 3: PWWB Industrial Worker Housing */}
        <section className="doc-card rounded-2xl p-6 sm:p-8 border border-doc-brass/30 space-y-4">
          <div className="flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-doc-brass" />
            <h2 className="text-xl font-serif font-bold text-doc-ink dark:text-white">
              Punjab Workers Welfare Board (PWWB): Housing for Industrial &amp; Factory Labor
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Funded through employer contributions under the Workers Welfare Fund Ordinance 1971, PWWB provides constructed residential flats and plots exclusively to registered private industrial laborers:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800 border border-doc-brass/20 space-y-1.5">
              <span className="font-bold text-doc-ink dark:text-white text-sm block">1. Registration Criteria</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Worker must hold a valid Social Security Card (PESSI) or EOBI registration, with minimum 3 years continuous verified industrial service.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800 border border-doc-brass/20 space-y-1.5">
              <span className="font-bold text-doc-seal text-sm block">2. Active Complexes</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Major multi-story flat developments located at Sundar Industrial Estate (Kasur/Lahore), Sheikhupura, Multan, Taxila, and Gujranwala.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800 border border-doc-brass/20 space-y-1.5">
              <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm block">3. Reserved Quotas</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Statutory quotas reserved for vulnerable categories: 3% for widows of deceased industrial workers and 2% for certified disabled workers.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Critical Anti-Scam Warning */}
        <section className="p-6 sm:p-8 rounded-2xl bg-red-50 dark:bg-red-950/30 border-2 border-red-300 dark:border-red-800 space-y-3">
          <div className="flex items-center gap-2 text-red-700 dark:text-red-400 font-bold text-base">
            <AlertOctagon className="w-6 h-6 shrink-0" />
            <span>CRITICAL FRAUD WARNING: No Middlemen or Bribes for Housing Allotments</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-sans">
            Punjab government housing authorities have issued strict public warnings against fraudulent agents, property dealers, and extortionists who demand &quot;file processing fees&quot; or claim to possess &quot;ministerial draw quotas&quot;. <strong>All official allotments are 100% computerized and tamper-proof.</strong>
          </p>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-red-200 dark:border-red-800/60 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-slate-700 dark:text-slate-300">
              If approached by anyone soliciting money or promising guaranteed allotments, report immediately:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-red-600 text-white font-bold font-mono">
                Anti-Corruption Helpline: 1350
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-doc-brass font-bold font-mono">
                PGSHF Toll-Free: 0800-22468
              </span>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ Accordion */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Government Housing Schemes)
            </h2>
          </div>

          <FAQAccordionVisual items={faqs} />
        </section>

        {/* Cross-Linking Hub */}
        <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
            Related Property, Land Record &amp; Tax Guides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <Link
              href="/property/e-stamping-challan-32a-online-guide-2026"
              className="p-3.5 rounded-xl border border-doc-brass/30 hover:border-doc-seal bg-slate-50 dark:bg-slate-800 transition flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <span className="font-bold text-doc-ink dark:text-white block group-hover:text-doc-seal transition">
                  eStamping Citizen Portal →
                </span>
                <span className="text-slate-500 dark:text-slate-400">Challan 32-A generation &amp; DC rates</span>
              </div>
            </Link>

            <Link
              href="/property/punjab-land-record-fard-verifier-2026"
              className="p-3.5 rounded-xl border border-doc-brass/30 hover:border-doc-seal bg-slate-50 dark:bg-slate-800 transition flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <span className="font-bold text-doc-ink dark:text-white block group-hover:text-doc-seal transition">
                  PLRA Fard Verifier 2026 →
                </span>
                <span className="text-slate-500 dark:text-slate-400">Online land title &amp; Khewat check</span>
              </div>
            </Link>

            <Link
              href="/property/intiqal-registration-online-punjab"
              className="p-3.5 rounded-xl border border-doc-brass/30 hover:border-doc-seal bg-slate-50 dark:bg-slate-800 transition flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <span className="font-bold text-doc-ink dark:text-white block group-hover:text-doc-seal transition">
                  Intiqal Mutation Guide →
                </span>
                <span className="text-slate-500 dark:text-slate-400">Official property transfer process</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Ad Placement Zone */}
        <AdPlacementZone format="horizontal" />
      </div>
    </>
  );
}
