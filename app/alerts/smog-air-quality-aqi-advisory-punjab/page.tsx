import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, ComparisonVisual, FAQAccordionVisual, FeeTableVisual } from '@/components/visuals';
import {
  Wind,
  AlertTriangle,
  Clock,
  Calendar,
  Building2,
  ShieldCheck,
  PhoneCall,
  CheckCircle2,
  FileCheck2,
  ArrowRight,
  School,
  Car,
  HeartPulse,
  Flame,
  Info,
  Layers,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Smog Air Quality (AQI) Advisory Punjab 2026–27: School Timings, Fines & Rules',
  description:
    'Comprehensive seasonal guide for Punjab smog season 2026–27: Historical school timing changes (8:45 AM rule), violation fines (up to Rs 1M), AQI crisis triggers, 1373 helpline, and public health guidelines.',
  keywords: [
    'smog air quality aqi advisory punjab',
    'punjab smog school timings 2026',
    'lahore aqi smog advisory',
    'epa punjab smog notification',
    'school opening 8 45 am punjab',
    'smog fine school violation punjab',
    'smog helpline 1373 epa',
    'green punjab app smog complaint',
    'punjab school smog closure rules',
  ],
  openGraph: {
    title: 'Smog Air Quality (AQI) Advisory Punjab 2026–27: School Timings & Guidelines',
    description:
      'Proactive guide to Punjab smog season: 8:45 AM school timings, fine structures for violations, AQI hazard escalation, 1373 helpline, and family health precautions.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/alerts/smog-air-quality-aqi-advisory-punjab',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/alerts/smog-air-quality-aqi-advisory-punjab',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com/' },
        { '@type': 'ListItem', position: 2, name: 'Alerts', item: 'https://www.pakistaninfohub.com/alerts' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Smog & Air Quality (AQI) Advisory Punjab',
          item: 'https://www.pakistaninfohub.com/alerts/smog-air-quality-aqi-advisory-punjab',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Smog Air Quality (AQI) Advisory Punjab 2026–27: School Timings, Fines & Rules',
      description:
        'Official preparedness guide detailing Punjab annual winter smog patterns, EPA regulatory triggers, 8:45 AM school start restrictions, violation penalties up to Rs 1 million, and citizen health guidelines.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-09',
      dateModified: '2026-09-09',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/alerts/smog-air-quality-aqi-advisory-punjab',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'When does smog season usually start in Punjab?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Historically, smog begins building in mid-to-late October, intensifies through November and December as atmospheric temperatures drop, and typically runs through January 31 across Lahore and central Punjab districts.',
          },
        },
        {
          '@type': 'Question',
          name: "Will my child's school definitely change timings?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Based on consistent regulations enforced across 2023, 2024, and 2025, schools are prohibited from opening before 8:45 AM once smog levels elevate. The formal notification for the 2026–27 season is expected from the Punjab School Education Department in mid-to-late October.',
          },
        },
        {
          '@type': 'Question',
          name: 'What AQI level triggers complete school closures?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Complete school closures or transition to online learning are typically triggered when the Air Quality Index (AQI) enters the 'Hazardous' range (300+ to 400+) consistently over multiple days in high-burden districts like Lahore, Gujranwala, and Faisalabad.",
          },
        },
        {
          '@type': 'Question',
          name: 'How do I report a smoke-emitting vehicle or factory?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Citizens can report violations 24/7 by calling the Punjab EPA Anti-Smog Helpline at 1373 or by lodging a geo-tagged complaint with photographic evidence through the official 'Green Punjab' mobile application.",
          },
        },
        {
          '@type': 'Question',
          name: 'Are private schools also covered by these smog rules?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All government anti-smog directives, including the 8:45 AM start restriction and emergency closures, apply equally to all public and private schools, academies, and special education institutions across Punjab.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do to protect my family during smog season?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wear tight-fitting N95 or KN95 masks outdoors, avoid outdoor exercise during early morning and late evening peaks, keep windows sealed, stay hydrated, and ensure vulnerable family members have access to prescribed inhalers.',
          },
        },
      ],
    },
  ],
};

const fineScheduleRows = [
  {
    serviceEn: 'First Violation: School Opening Before 8:45 AM',
    serviceUr: 'پہلی خلاف ورزی: اسکول 8:45 سے پہلے کھولنے پر',
    normal: 'Rs 100,000 – 500,000',
    urgent: 'Official Show-Cause Notice',
    executive: 'Deputy Commissioner Fine',
    tagEn: '1st Offense',
  },
  {
    serviceEn: 'Repeat Violation: Persistent Non-Compliance',
    serviceUr: 'دوبارہ خلاف ورزی: مسلسل اسکول جلدی کھولنے پر',
    normal: 'Rs 600,000 – 1,000,000',
    urgent: 'Campus Sealing Action',
    executive: 'Cancellation of School Registration',
    tagEn: 'Repeat Offense',
  },
  {
    serviceEn: 'Smoke-Emitting Commercial Vehicle (Buses/Trucks)',
    serviceUr: 'دھواں چھوڑنے والی کمرشل گاڑیاں (بس، ٹرک)',
    normal: 'Rs 2,000 – 5,000 Challan',
    urgent: 'Vehicle Impoundment',
    executive: 'Impounded at Police Station',
    tagEn: 'Traffic Squad',
  },
  {
    serviceEn: 'Agricultural Stubble / Crop Residue Burning',
    serviceUr: 'فصلوں کی باقیات یا پرالی جلانے پر جرمانہ',
    normal: 'Rs 50,000+ per Acre',
    urgent: 'FIR under Section 188 PPC',
    executive: 'Non-Bailable Arrest Warrant',
    tagEn: 'Strict Ban',
  },
  {
    serviceEn: 'Industrial Unit Operating Without Air Scrubber',
    serviceUr: 'اسموگ کنٹرول فلٹر کے بغیر چلنے والی فیکٹری',
    normal: 'Immediate Sealing of Factory',
    urgent: 'Rs 500,000+ Heavy Fine',
    executive: 'Electricity/Gas Disconnection',
    tagEn: 'Industrial EPA',
  },
  {
    serviceEn: 'Solid Waste / Plastic Garbage Open Burning',
    serviceUr: 'کھلے عام کوڑا کرکٹ جلانے کی ممانعت',
    normal: 'Rs 5,000 – 25,000',
    urgent: 'Municipal Corporation Challan',
    executive: 'Spot Administrative Recovery',
    tagEn: 'Municipal Code',
  },
];

const reportSteps = [
  {
    stepNumber: '01',
    titleEn: 'Identify the Environmental Violation',
    titleUr: 'ماحولیاتی خلاف ورزی کی نشاندہی کریں',
    descEn:
      'Spot the violation: a school operating before 8:45 AM during restricted periods, heavy smoke from trucks/buses, crop burning in fields, or un-scrubbed industrial factory emissions.',
    descUr:
      'خلاف ورزی دیکھیں: پابندی کے باوجود 8:45 سے پہلے کھلا اسکول، دھواں چھوڑتی گاڑیاں، فصل کی پرالی جلانا یا بغیر فلٹر کے چلنے والی فیکٹری۔',
  },
  {
    stepNumber: '02',
    titleEn: 'Capture Evidence & Precise Location',
    titleUr: 'تصویر، ویڈیو اور درست پتہ نوٹ کریں',
    descEn:
      'If safe to do so, note the exact address, landmark, school campus name, or vehicle registration number. Capture a clear photo or short video clip.',
    descUr:
      'حفاظت کا خیال رکھتے ہوئے اسکول کا نام، گاڑی کا نمبر، فیکٹری کا پتہ یا جی پی ایس لوکیشن اور ممکن ہو تو تصویر نوٹ کریں۔',
  },
  {
    stepNumber: '03',
    titleEn: 'Dial 1373 Helpline or Open Green Punjab App',
    titleUr: '1373 ہیلپ لائن ملائیں یا گرین پنجاب ایپ کھولیں',
    descEn:
      'Contact the Punjab EPA 24/7 Anti-Smog Helpline at 1373 (toll-free) or submit your report via the official "Green Punjab" mobile app on Android/iOS.',
    descUr:
      'محکمہ تحفظ ماحول کی 24 گھنٹے فعال ہیلپ لائن 1373 پر کال کریں یا پی آئی ٹی بی کی گرین پنجاب موبائل ایپ کے ذریعے آن لائن شکایت درج کریں۔',
  },
  {
    stepNumber: '04',
    titleEn: 'Receive Complaint Tracking Ticket',
    titleUr: 'شکایت نمبر (ٹکٹ) حاصل کریں',
    descEn:
      'The operator generates a digital ticket and sends you an SMS reference number for monitoring progress through the provincial control room.',
    descUr:
      'آپ کو ایس ایم ایس کے ذریعے یونیک کمپلینٹ نمبر موصول ہوگا جس سے کارروائی کی لائیو ٹریکنگ ممکن ہوگی۔',
  },
  {
    stepNumber: '05',
    titleEn: 'District Anti-Smog Squad Enforcement',
    titleUr: 'ضلعی اینٹی سموگ سکواڈ کی فوری کارروائی',
    descEn:
      'Mobile enforcement teams comprising EPA inspectors, traffic police, and district administration visit the site to issue challans, seal campuses, or impound vehicles.',
    descUr:
      'ای پی اے انسپکٹرز اور ٹریفک پولیس پر مشتمل موبائل سکواڈ موقع پر پہنچ کر جرمانہ، سیلنگ یا گاڑی بند کرنے کی قانونی کارروائی کرتا ہے۔',
  },
];

const faqs = [
  {
    questionEn: 'When does smog season usually start in Punjab?',
    questionUr: 'پنجاب میں سموگ سیزن عام طور پر کب شروع ہوتا ہے؟',
    answerEn:
      'Based on consistent historical data from recent years (2023, 2024, and 2025), smog typically begins forming in mid-to-late October as wind speeds decrease and crop stubble burning coincides with temperature inversion. The season peaks through November and December and historically runs through January 31.',
    answerUr:
      'ماضی کے ریکارڈ کے مطابق پنجاب میں سموگ عام طور پر اکتوبر کے وسط یا آخری ہفتے میں شروع ہوتی ہے، نومبر اور دسمبر میں شدید ترین ہوتی ہے اور روایتی طور پر 31 جنوری تک جاری رہتی ہے۔',
  },
  {
    questionEn: "Will my child's school definitely change timings?",
    questionUr: 'کیا میرے بچے کے اسکول کے اوقات لازمی تبدیل ہوں گے؟',
    answerEn:
      'While official dates for the 2026–27 winter season await the formal EPA and School Education Department notification (typically issued in October), past precedent has consistently mandated that all public and private schools cannot open before 8:45 AM during the peak smog window to protect children from dense morning airborne toxins.',
    answerUr:
      'اگرچہ سال 2026 کے حتمی نوٹیفکیشن کا انتظار ہے (جو عام طور پر اکتوبر میں جاری ہوتا ہے)، تاہم پچھلے مسلسل تین سالوں کا ضابطہ یہی رہا ہے کہ صبح کے شدید زہریلے دھوئیں سے بچاؤ کے لیے اسکولوں کو 8:45 سے پہلے کھولنے کی ممانعت ہوتی ہے۔',
  },
  {
    questionEn: 'What AQI level triggers school closures rather than just timing changes?',
    questionUr: 'کس اے کیو آئی (AQI) لیول پر اسکول مکمل بند کیے جاتے ہیں؟',
    answerEn:
      'Timing changes (8:45 AM start) typically activate once AQI enters the "Unhealthy" tier (150+). Full closures of schools, colleges, and tuition centers—or transitions to alternate-day hybrid learning—are extreme escalations triggered when the AQI consistently crosses into the "Hazardous" category (300+ to 400+) in worst-affected districts like Lahore, Gujranwala, Sheikhupura, and Faisalabad.',
    answerUr:
      'اوقات کی تبدیلی عام طور پر 150 سے زائد AQI پر لاگو ہوتی ہے۔ اسکولوں کی مکمل چھٹی یا آن لائن کلاسز کا فیصلہ اس وقت کیا جاتا ہے جب ایئر کوالٹی انڈیکس 300 یا 400 سے تجاوز کر کے شدید خطرناک (Hazardous) حد کو چھو لے۔',
  },
  {
    questionEn: 'How do I report a smoke-emitting vehicle or factory?',
    questionUr: 'دھواں چھوڑنے والی گاڑی یا فیکٹری کی شکایت کیسے درج کریں؟',
    answerEn:
      'You can report any environmental violation 24/7 by calling the Punjab Environment Protection Agency (EPA) anti-smog helpline at 1373. Alternatively, download the "Green Punjab" mobile app developed by PITB to upload GPS-tagged pictures and track inspector resolution.',
    answerUr:
      'محکمہ تحفظ ماحول کی 24 گھنٹے ٹول فری ہیلپ لائن 1373 پر کال کر کے یا پی آئی ٹی بی کی "گرین پنجاب" ایپ پر تصویر اپلوڈ کر کے فوری شکایت درج کرائی جا سکتی ہے۔',
  },
  {
    questionEn: 'Are private schools also covered by these smog rules?',
    questionUr: 'کیا نجی (پرائیویٹ) اسکولوں پر بھی یہ قوانین لاگو ہوتے ہیں؟',
    answerEn:
      'Yes. Punjab EPA and School Education Department notifications strictly apply to all educational institutions without exception, including elite private school networks, community schools, and madaris. Schools violating timing rules face fines of Rs 100,000 to Rs 1,000,000 and campus sealing.',
    answerUr:
      'جی ہاں! تمام اینٹی سموگ احکامات تمام سرکاری و نجی اسکولوں پر یکساں لاگو ہوتے ہیں۔ خلاف ورزی کرنے والے نجی اسکولوں پر 1 لاکھ سے 10 لاکھ روپے تک جرمانہ اور کیمپس سیل کیا جا سکتا ہے۔',
  },
  {
    questionEn: 'What should I do to protect my family during smog season?',
    questionUr: 'سموگ سیزن میں اہل خانہ کے تحفظ کے لیے کیا احتیاطی تدابیر اختیار کریں؟',
    answerEn:
      'Wear tight-sealing N95 or KN95 respirators outdoors (cloth/surgical masks do not filter PM2.5 particulates), avoid morning walks and outdoor sports, keep residential windows closed, clean indoors with wet mops rather than dry brooms, install DIY HEPA air filters if feasible, stay well hydrated, and keep emergency inhalers accessible for children and senior citizens with respiratory ailments.',
    answerUr:
      'باہر نکلتے وقت این 95 (N95) ماسک پہنیں، صبح کے وقت ورزش یا سیر سے گریز کریں، کھڑکیاں بند رکھیں، جھاڑو کی بجائے گیلے کپڑے سے صفائی کریں، پانی کا زیادہ استعمال کریں اور سانس یا دل کے مریض ادویات اور انہیلر ہمہ وقت پاس رکھیں۔',
  },
];

export default function SmogAirQualityAdvisoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-100">
        {/* PROACTIVE SEASONAL PREPAREDNESS BANNER */}
        <div className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-amber-50 py-3 px-4 text-xs sm:text-sm font-sans border-b border-amber-600/50 shadow-sm">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-slate-950 font-extrabold px-2 py-0.5 rounded text-[11px] uppercase tracking-wide">
                Seasonal Preparedness
              </span>
              <span>
                <strong>Punjab Smog Advisory 2026–27:</strong> Early guidance &amp; historical patterns ahead of official October EPA notification.
              </span>
            </div>
            <span className="hidden md:inline-flex items-center gap-1 text-amber-200 text-xs font-mono">
              EPA Helpline: <strong>1373</strong>
            </span>
          </div>
        </div>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { nameEn: 'Alerts', nameUr: 'ہنگامی الرٹس', url: '/alerts' },
              {
                nameEn: 'Smog & AQI Advisory Punjab',
                nameUr: 'سموگ و ایئر کوالٹی انڈیکس گائیڈ',
                url: '/alerts/smog-air-quality-aqi-advisory-punjab',
              },
            ]}
          />

          {/* Article Header */}
          <header className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="flex flex-wrap items-center gap-2">
              <VerifiedBadge />
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                <Wind className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                Air Quality Index (AQI) Preparedness
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-doc-brass" />
                2026–2027 Winter Baseline
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-doc-ink dark:text-white tracking-tight leading-tight">
              Smog Air Quality (AQI) Advisory Punjab 2026–27: School Timings, Fines &amp; Rules
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Authoritative citizen preparedness manual for Punjab&apos;s annual winter smog window (mid-to-late October through January 31). Review established historical precedents for mandatory <strong>8:45 AM school start restrictions</strong>, heavy violation penalties up to <strong>Rs 1,000,000</strong>, green lockdown escalations, the <strong>1373 EPA helpline</strong>, and medical air quality precautions.
            </p>

            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-2 font-mono">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-doc-brass" /> Historical Baseline Verified: September 9, 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-doc-brass" /> 6-Minute Read
              </span>
              <span className="flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-doc-brass" /> Authority: Punjab EPA &amp; School Education Dept
              </span>
            </div>
          </header>

          {/* DATED CALLOUT: HISTORICAL PATTERN DISCLAIMER */}
          <div className="p-5 sm:p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-300 dark:border-amber-800/60 shadow-sm space-y-3">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-200 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 text-sm font-sans">
                <strong className="text-amber-950 dark:text-amber-200 text-base font-serif block">
                  Notice: Proactive Baseline Ahead of Official 2026 EPA Notification
                </strong>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                  This advisory reflects the <strong>consistent historical pattern documented across 2023, 2024, and 2025</strong>. Smog is a predictable annual meteorological phenomenon in Punjab that begins when falling winter temperatures trap industrial emissions, vehicular exhaust, and crop stubble smoke close to the ground.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm font-semibold">
                  Once the Environment Protection Agency (EPA) Punjab issues this year&apos;s official gazette notification (typically published in mid-to-late October), this page will be updated immediately with exact notified dates, district lists, and operational instructions. Bookmark this page for real-time updates.
                </p>
              </div>
            </div>
          </div>

          {/* Direct Answer Box */}
          <DirectAnswerBox
            topicTitleEn="Direct Answer: Punjab Smog Guidelines & Expected School Timings (2026–27)"
            topicTitleUr="فوری خلاصہ: پنجاب سموگ ایڈوائزری و اسکولوں کے متوقع اوقات 2026–27"
            answerEn="Punjab's annual smog season historically peaks from mid-to-late October through January 31. Once the Air Quality Index (AQI) crosses 150+ (Unhealthy), government regulations mandate that all public and private schools cannot open before 8:45 AM. Violating schools face fines of Rs 100,000 to Rs 1,000,000 and campus sealing. If AQI exceeds 300+ (Hazardous), emergency escalations like complete school closures or online classes are ordered in hotspot districts. Report violations 24/7 to EPA helpline 1373."
            answerUr="پنجاب میں سموگ کا سیزن روایتی طور پر اکتوبر کے وسط سے 31 جنوری تک رہتا ہے۔ ایئر کوالٹی انڈیکس (AQI) 150 سے بڑھنے پر تمام سرکاری و نجی اسکولوں کے لیے 8:45 سے پہلے کھلنے پر سخت پابندی ہوتی ہے۔ خلاف ورزی پر 1 لاکھ سے 10 لاکھ روپے تک جرمانہ اور اسکول سیل ہو سکتا ہے۔ اے کیو آئی 300 سے تجاوز کرنے پر اسکولوں کی مکمل چھٹی یا آن لائن کلاسز نافذ کی جاتی ہیں۔ شکایات ہیلپ لائن 1373 پر درج کرائی جا سکتی ہیں۔"
          />

          <AdPlacementZone slotId="after-direct-answer" />

          {/* SECTION 1: WHAT TRIGGERS ANTI-SMOG ACTIONS */}
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center gap-2.5 text-doc-ink dark:text-white font-serif font-extrabold text-xl sm:text-2xl">
              <Wind className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0" />
              <h2>What Triggers Government Action: Understanding AQI Thresholds</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Anti-smog interventions are strictly index-linked. The Punjab Environment Protection Department continuously monitors particulate matter (PM2.5 and PM10) concentrations across air quality monitoring stations in Lahore, Faisalabad, Rawalpindi, and Gujranwala:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider text-[10px] block font-mono">
                  AQI 151 – 200 (Unhealthy)
                </span>
                <strong className="text-doc-ink dark:text-white block font-bold text-sm">Initial Operational Restrictions</strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Triggers mandatory 8:45 AM school start times, cancellation of outdoor morning assemblies, mandatory masks for students, and heightened traffic challaning of smoky vehicles.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="text-rose-600 dark:text-rose-400 font-bold uppercase tracking-wider text-[10px] block font-mono">
                  AQI 201 – 300 (Very Unhealthy)
                </span>
                <strong className="text-doc-ink dark:text-white block font-bold text-sm">Green Lockdowns &amp; Squads</strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Mobile anti-smog squads conduct spot raids on polluting brick kilns (without zigzag tech), heavy diesel vehicle checkpoints at city entry points, and anti-littering squad crackdowns.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider text-[10px] block font-mono">
                  AQI 300+ to 500+ (Hazardous)
                </span>
                <strong className="text-doc-ink dark:text-white block font-bold text-sm">Emergency Crisis Escalation</strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Potential total closure of educational institutions or transition to online learning, 50% public/private sector work-from-home quotas, and commercial markets closed by 8:00 PM.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2 & 3: HISTORICAL SCHOOL TIMINGS & FINE STRUCTURE */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Regulatory Framework</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                School Timings &amp; EPA Penalties for Non-Compliance
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Historical baseline of the 8:45 AM school rule and current legally notified fines under the Punjab Environmental Protection Act 1997:
              </p>
            </div>

            <FeeTableVisual
              titleEn="Historical Penalties & Enforcement Schedule: Punjab Smog Regulations"
              titleUr="اینٹی سموگ ضوابط: اسکولوں اور کمرشل سیکٹر پر لاگو قانونی جرمانے"
              subtitleEn="Verified fine structure notified by EPA Punjab and District Administrations"
              subtitleUr="محکمہ تحفظ ماحول اور ضلعی انتظامیہ کے نافذ کردہ باضابطہ جرمانے"
              rows={fineScheduleRows}
              noteEn="Baseline Reference: In the 2024–25 and 2025–26 winter seasons, the 8:45 AM school opening rule was enforced from November through January 31. Official 2026 notification dates will be confirmed in October."
              noteUr="تاریخی حوالہ: پچھلے سیزن میں 8:45 کا وقت یکم نومبر سے 31 جنوری تک نافذ رہا تھا۔ سال 2026 کا نوٹیفکیشن جاری ہوتے ہی فوری اپڈیٹ کر دیا جائے گا۔"
            />
          </section>

          {/* SECTION 4: FULL CLOSURE PRECEDENT & HIGH-BURDEN DISTRICTS */}
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center gap-2.5 text-doc-ink dark:text-white font-serif font-extrabold text-xl sm:text-2xl">
              <School className="w-6 h-6 text-doc-burgundy dark:text-red-400 shrink-0" />
              <h2>Full School Closures: A Possible Escalation, Not an Annual Guarantee</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Parents often ask whether schools will definitely close completely during smog season. <strong>Complete closure is an emergency measure, not an automatic entitlement.</strong> In previous severe seasons, full physical closure (or a shift to 2–3 days online classes per week) was only enacted when air quality entered the catastrophic 400+ AQI threshold.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 text-xs sm:text-sm font-sans">
              <strong className="text-doc-ink dark:text-white block font-bold">
                Districts Historically Included in High-Burden Smog Orders:
              </strong>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                <span className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center font-semibold text-slate-800 dark:text-slate-200">
                  Lahore District
                </span>
                <span className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center font-semibold text-slate-800 dark:text-slate-200">
                  Gujranwala District
                </span>
                <span className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center font-semibold text-slate-800 dark:text-slate-200">
                  Faisalabad District
                </span>
                <span className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center font-semibold text-slate-800 dark:text-slate-200">
                  Multan District
                </span>
                <span className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center font-semibold text-slate-800 dark:text-slate-200">
                  Sheikhupura District
                </span>
                <span className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center font-semibold text-slate-800 dark:text-slate-200">
                  Kasur District
                </span>
                <span className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center font-semibold text-slate-800 dark:text-slate-200">
                  Nankana Sahib
                </span>
                <span className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center font-semibold text-slate-800 dark:text-slate-200">
                  Sialkot District
                </span>
              </div>
              <p className="text-slate-500 text-[11px] leading-relaxed pt-1">
                Note: Less affected southern and northern districts (such as Rawalpindi, Attock, or Bahawalpur) often continue normal operations while central Punjab undergoes special timing rules.
              </p>
            </div>
          </section>

          {/* SECTION 5: PUBLIC HEALTH ADVISORY FOR FAMILIES */}
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center gap-2.5 text-doc-ink dark:text-white font-serif font-extrabold text-xl sm:text-2xl">
              <HeartPulse className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <h2>Public Health Advisory: Protecting Children, Seniors &amp; Vulnerable Groups</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Smog is not merely fog; it is a hazardous suspension of toxic particulate matter (PM2.5), sulfur dioxide, nitrogen oxides, and carbon monoxide. Inhaling this air causes acute bronchitis, asthma exacerbation, and eye irritation:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider text-[10px] block font-mono">
                  Respiratory Gear
                </span>
                <strong className="text-doc-ink dark:text-white block font-bold text-sm">N95 / KN95 Masks Only</strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Cloth masks and loose surgical masks do not filter PM2.5 particles (which are 30 times smaller than a hair strand). Only certified tight-seal N95/KN95 respirators offer real pulmonary protection.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider text-[10px] block font-mono">
                  Timing &amp; Ventilation
                </span>
                <strong className="text-doc-ink dark:text-white block font-bold text-sm">Avoid Morning Outdoor Exposure</strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Toxin concentrations peak between 5:00 AM and 8:30 AM due to thermal inversion. Keep windows sealed overnight and postpone outdoor workouts or walks until afternoon hours when sunlight disperses lower layers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider text-[10px] block font-mono">
                  Indoor Hygiene
                </span>
                <strong className="text-doc-ink dark:text-white block font-bold text-sm">Wet Mopping &amp; Steam Hydration</strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Avoid sweeping with dry brooms, which re-suspends settled particulate dust into the air. Use wet mopping, rinse eyes with clean water, and stay adequately hydrated to keep mucous membranes moist.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 6: REPORTING VIA 1373 & GREEN PUNJAB APP */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Enforcement Hotline</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                How to Report Smog Violations via 1373 Helpline
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Follow this official 5-step reporting mechanism to report schools opening early, polluting factories, or smoky vehicles:
              </p>
            </div>

            <ProcessStepsDiagram
              titleEn="Citizen Reporting Workflow: Punjab Anti-Smog Squads (2026–27)"
              titleUr="ماحولیاتی شکایات درج کرانے کا سرکاری طریقہ کار: اینٹی سموگ ہیلپ لائن 1373"
              subtitleEn="24/7 toll-free helpline and Green Punjab digital complaint tracking system"
              subtitleUr="ٹول فری ہیلپ لائن 1373 اور گرین پنجاب موبائل ایپ کے ذریعے ایکشن کا طریقہ"
              steps={reportSteps}
            />

            {/* Helpline Details Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-doc-ink dark:text-white block text-sm">
                    EPA Punjab Anti-Smog Toll-Free Helpline: 1373
                  </strong>
                  <span className="text-slate-500 dark:text-slate-400">
                    24/7 round-the-clock emergency dispatch control room
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">
                  PDMA Helpline: <strong>1129</strong>
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-mono">
                  Rescue: <strong>1122</strong>
                </span>
              </div>
            </div>
          </section>

          <AdPlacementZone slotId="mid-content" />

          {/* SECTION 7: COMPARISON OF AQI EMERGENCY LEVELS */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Index Analysis</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                Comparing AQI Tiers &amp; Government Intervention Levels
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                How provincial authorities categorize air quality levels and the specific restrictions triggered at each stage:
              </p>
            </div>

            <ComparisonVisual
              titleEn="Punjab Air Quality Index (AQI) Action Matrix"
              titleUr="ایئر کوالٹی انڈیکس (AQI) اور حکومتی پابندیوں کا تقابلی جدول"
              subtitleEn="Clear breakdown of health impacts, school restrictions, and commercial lockdown measures"
              subtitleUr="صحت کے خطرات، اسکولوں کے اوقات اور اینٹی سموگ لاک ڈاؤن کا مرحلہ وار موازنہ"
              items={[
                {
                  titleEn: "Tier 1: Moderate to Unhealthy",
                  titleUr: "مرحلہ 1: اے کیو آئی 100 تا 150",
                  subtitleEn: "AQI Range: 101 – 150",
                  subtitleUr: "حساس افراد کے لیے مضر صحت",
                  badgeEn: "EARLY PRECAUTIONS",
                  badgeUr: "ابتدائی احتیاط",
                  badgeVariant: "brass",
                  pointsEn: [
                    "Atmospheric haze begins thickening in early morning hours.",
                    "Vulnerable individuals (asthma, heart patients) experience throat dryness.",
                    "Schools advise students with respiratory issues to wear masks.",
                    "Outdoor morning sports activities scaled back.",
                    "Traffic police begin awareness checks on heavy transport.",
                  ],
                  features: [
                    { labelEn: "School Timings", valueEn: "Normal (or 8:00 AM Start)", isPositive: null },
                    { labelEn: "School Closure", valueEn: "No Closures", isPositive: true },
                    { labelEn: "Mask Recommendation", valueEn: "Advised for Sensitive Groups", isPositive: null },
                    { labelEn: "Commercial Markets", valueEn: "Normal Business Hours", isPositive: true },
                    { labelEn: "EPA Squad Raids", valueEn: "Routine Surveillance", isPositive: true },
                  ],
                  recommendedForEn: "Citizens with mild allergies who can manage with standard preventive precautions.",
                },
                {
                  titleEn: "Tier 2: Unhealthy & Hazardous",
                  titleUr: "مرحلہ 2: اے کیو آئی 151 تا 300",
                  subtitleEn: "AQI Range: 151 – 300",
                  subtitleUr: "عام شہریوں کے لیے مضر صحت",
                  badgeEn: "8:45 AM MANDATE",
                  badgeUr: "8:45 کے اوقات لاگو",
                  badgeVariant: "emerald",
                  pointsEn: [
                    "Mandatory 8:45 AM school start time legally enforced province-wide.",
                    "Schools opening early fined Rs 100,000 to Rs 1,000,000.",
                    "Complete ban on outdoor school assemblies and sports periods.",
                    "Mandatory mask-wearing for all students and teaching staff.",
                    "1373 hotline active for public reporting of smoking vehicles.",
                  ],
                  features: [
                    { labelEn: "School Timings", valueEn: "Strictly 8:45 AM or Later", isPositive: true },
                    { labelEn: "School Closure", valueEn: "Timing Shift Only", isPositive: null },
                    { labelEn: "Mask Recommendation", valueEn: "Mandatory for All Students", isPositive: true },
                    { labelEn: "Commercial Markets", valueEn: "Targeted Green Lockdowns", isPositive: null },
                    { labelEn: "EPA Squad Raids", valueEn: "Active Daily Impoundments", isPositive: true },
                  ],
                  recommendedForEn: "The typical standard operating mode throughout November and December in Lahore and central Punjab.",
                },
                {
                  titleEn: "Tier 3: Catastrophic Emergency",
                  titleUr: "مرحلہ 3: اے کیو آئی 300 سے 500+",
                  subtitleEn: "AQI Range: 300+ to 500+",
                  subtitleUr: "انتہائی خطرناک اور ایمرجنسی صورتحال",
                  badgeEn: "EMERGENCY CLOSURES",
                  badgeUr: "ہنگامی چھٹی و لاک ڈاؤن",
                  badgeVariant: "seal",
                  pointsEn: [
                    "Enacted only during extreme environmental inversions.",
                    "Full physical school/college closures or mandatory shift to online classes.",
                    "50% mandatory work-from-home policy for government and private offices.",
                    "Commercial markets closed early by 8:00 PM; dining restricted outdoors.",
                    "Heavy trucks banned from entering metropolitan cities without scrubbers.",
                  ],
                  features: [
                    { labelEn: "School Timings", valueEn: "Closed / Online Learning", isPositive: false },
                    { labelEn: "School Closure", valueEn: "Full Physical Closure", isPositive: false },
                    { labelEn: "Mask Recommendation", valueEn: "Strict N95 Mask Enforced", isPositive: true },
                    { labelEn: "Commercial Markets", valueEn: "Early Shutdown at 8:00 PM", isPositive: false },
                    { labelEn: "EPA Squad Raids", valueEn: "Full Emergency Taskforce", isPositive: true },
                  ],
                  recommendedForEn: "Peak pollution spikes where remaining indoors with sealed windows is medically essential.",
                },
              ]}
            />
          </section>

          {/* SECTION 8: FAQ SECTION */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Frequently Asked Questions</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                Frequently Asked Questions: Punjab Smog Guidelines
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Direct answers to common parent, teacher, and commuter questions regarding smog season regulations:
              </p>
            </div>

            <FAQAccordionVisual
              titleEn="Punjab Smog Season: Frequently Asked Questions (2026–27)"
              titleUr="پنجاب سموگ سیزن: عام طور پر پوچھے جانے والے ضروری سوالات"
              subtitleEn="Verified clarifications on school timings, violation fines, AQI thresholds, and family protection"
              subtitleUr="اسکولوں کے اوقات، جرمانوں، اے کیو آئی خطرات اور خاندانی تحفظ کی مصدقہ رہنمائی"
              items={faqs}
            />
          </section>

          {/* Related Resources Navigation */}
          <section className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-md space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">Emergency &amp; Civic Support</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold tracking-tight">
                Related Civic Guides &amp; Helplines in Pakistan
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Access official emergency directories, transit rules, and education initiatives:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              <Link
                href="/alerts/emergency-helpline-numbers-pakistan"
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition flex items-center justify-between group"
              >
                <div>
                  <strong className="text-white block font-bold text-sm group-hover:text-amber-400 transition">
                    Emergency Helpline Numbers Directory (2026)
                  </strong>
                  <span className="text-slate-400">Rescue 1122, Edhi 115, PDMA 1129 &amp; Police 15</span>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 transform group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="/education/cm-punjab-e-bike-scheme-2026-eligibility-apply"
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition flex items-center justify-between group"
              >
                <div>
                  <strong className="text-white block font-bold text-sm group-hover:text-amber-400 transition">
                    CM Punjab Student E-Bike Scheme (100,000 Bikes)
                  </strong>
                  <span className="text-slate-400">Zero-emission electric motorcycles for student transport</span>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 transform group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="/education/ptf-punjab-teacher-e-bike-scheme-2026"
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition flex items-center justify-between group"
              >
                <div>
                  <strong className="text-white block font-bold text-sm group-hover:text-amber-400 transition">
                    PTF Punjab Teacher E-Bike Scheme (2026)
                  </strong>
                  <span className="text-slate-400">Subsidized green commuting for public school teachers</span>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 transform group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="/traffic/e-challan-check-online"
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition flex items-center justify-between group"
              >
                <div>
                  <strong className="text-white block font-bold text-sm group-hover:text-amber-400 transition">
                    Punjab E-Challan &amp; Traffic Violation Checker
                  </strong>
                  <span className="text-slate-400">Check online camera challans and vehicle fitness status</span>
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
