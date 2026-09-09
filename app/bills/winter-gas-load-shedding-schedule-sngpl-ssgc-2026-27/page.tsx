import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, ComparisonVisual, FAQAccordionVisual, FeeTableVisual } from '@/components/visuals';
import {
  Flame,
  Clock,
  Calendar,
  Building2,
  ShieldCheck,
  AlertTriangle,
  PhoneCall,
  ExternalLink,
  CheckCircle2,
  FileCheck2,
  ArrowRight,
  Info,
  Sparkles,
  Zap,
  HelpCircle,
  Layers,
  MapPin,
  Check
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Winter Gas Load-Shedding Schedule 2026–27: SNGPL & SSGC Timings & Rules',
  description:
    'Comprehensive verified guide to winter gas load-shedding in Pakistan: SNGPL (Punjab & KP) and SSGC (Sindh & Balochistan) supply hours, historical 3-slot baseline, 2026 RLNG new connection rules, and official verification channels.',
  keywords: [
    'winter gas load shedding schedule sngpl ssgc 2026 27',
    'sngpl winter gas timings lahore islamabad',
    'ssgc gas load management karachi quetta',
    'sui gas supply hours breakfast lunch dinner',
    'sngpl 3 slot gas schedule 2026',
    'rlng new domestic connection apply 2026',
    'sui gas helpline 1199',
    'gas pressure drop winter pakistan',
  ],
  openGraph: {
    title: 'Winter Gas Load-Shedding Schedule 2026–27: SNGPL & SSGC Timings',
    description:
      'Verified guide to winter gas supply in Pakistan: SNGPL vs SSGC regional coverage, historical 3-slot cooking schedule, 2026 RLNG connection process, and official 1199 helpline.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/winter-gas-load-shedding-schedule-sngpl-ssgc-2026-27',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/bills/winter-gas-load-shedding-schedule-sngpl-ssgc-2026-27',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com/' },
        { '@type': 'ListItem', position: 2, name: 'Utility Bills', item: 'https://www.pakistaninfohub.com/bills' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Winter Gas Load-Shedding Schedule 2026–27',
          item: 'https://www.pakistaninfohub.com/bills/winter-gas-load-shedding-schedule-sngpl-ssgc-2026-27',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Winter Gas Load-Shedding Schedule 2026–27: SNGPL & SSGC Timings & Rules',
      description:
        'Authoritative consumer guide explaining SNGPL and SSGC winter gas supply hours, the confirmed historical 3-slot domestic baseline, 2026 RLNG new connection resumption, and how to verify official notices.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-09',
      dateModified: '2026-09-09',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/bills/winter-gas-load-shedding-schedule-sngpl-ssgc-2026-27',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is SNGPL the same company as SSGC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. They are two distinct public gas utilities serving different provinces. SNGPL operates in Punjab, Khyber Pakhtunkhwa (KP), Islamabad Capital Territory, and AJK. SSGC serves Sindh (including Karachi and Hyderabad) and Balochistan (including Quetta).',
          },
        },
        {
          '@type': 'Question',
          name: "Has this year's (2026–27) gas schedule been announced?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. As of September 9, 2026, the official 2026–27 winter load-shedding schedule has not yet been announced by SNGPL or SSGC. Competing websites sharing undated schedules are recycling last year’s 2025–26 plan. Official schedules are typically gazetted in late October or November.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does gas pressure drop or get cut off in winter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Domestic gas demand surges up to 400% during winter due to water geysers and space heaters, while domestic natural gas field extraction is depleting by 8–10% annually. This drop in pipeline pressure (line-pack) forces utilities to ration gas during non-cooking hours.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are industrial users affected by domestic gas load-shedding?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Generally no. Export-oriented industries and zero-rated manufacturing units are usually exempt from domestic schedule cuts, though they pay higher commercial or RLNG rates to sustain uninterrupted production.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I apply for a new gas connection in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Following the resumption of new domestic gas connections in 2026 (ending a 4-year ban), households can apply online via sngpl.com.pk (Punjab/KP) or SSGC facilitation centers under the RLNG (Regasified Liquefied Natural Gas) tariff.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where can I check the official current schedule myself?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Exclusively visit sngpl.com.pk (under "Low Pressure / Media Notices") or ssgc.com.pk (under "Customer Announcements"), or call the universal toll-free gas emergency helpline at 1199. Never rely on unverified social media screenshots.',
          },
        },
      ],
    },
  ],
};

const historicalBaselineRows = [
  {
    serviceEn: 'Morning Breakfast Window (SNGPL)',
    serviceUr: 'صبح ناشتے کا وقت (سوئی ناردرن)',
    normal: '5:30 AM – 8:30 AM',
    urgent: '3 Hours Full Pressure',
    executive: 'Dedicated Meal Slot',
    tagEn: 'Breakfast Slot',
  },
  {
    serviceEn: 'Midday Lunch Window (SNGPL)',
    serviceUr: 'دوپہر کے کھانے کا وقت (سوئی ناردرن)',
    normal: '11:30 AM – 1:30 PM',
    urgent: '2 Hours Full Pressure',
    executive: 'Dedicated Meal Slot',
    tagEn: 'Lunch Slot',
  },
  {
    serviceEn: 'Evening Dinner Window (SNGPL)',
    serviceUr: 'رات کے کھانے کا وقت (سوئی ناردرن)',
    normal: '5:30 PM – 8:30 PM',
    urgent: '3 Hours Full Pressure',
    executive: 'Dedicated Meal Slot',
    tagEn: 'Dinner Slot',
  },
  {
    serviceEn: 'Total Daily Domestic Full Pressure Hours',
    serviceUr: 'روزانہ کل گیس فراہمی کے اوقات',
    normal: '7 to 8 Hours Daily',
    urgent: 'Rationed Cooking Supply',
    executive: 'Remaining Hours Low/Off',
    tagEn: 'Daily Total',
  },
  {
    serviceEn: 'Nighttime Pressure Curtailment (SSGC)',
    serviceUr: 'رات کے اوقات میں گیس بندش (سوئی سدرن)',
    normal: '10:00 PM – 5:00 AM',
    urgent: 'Line-Pack Building Window',
    executive: 'Sindh & Balochistan Towns',
    tagEn: 'Night Curtailment',
  },
  {
    serviceEn: 'Universal Gas Emergency Helpline',
    serviceUr: 'سوئی گیس ایمرجنسی ہیلپ لائن',
    normal: '1199 (Toll-Free 24/7)',
    urgent: 'SNGPL & SSGC Unified',
    executive: 'Pressure Complaint Dispatch',
    tagEn: '24/7 Support',
  },
];

const verificationSteps = [
  {
    stepNumber: '01',
    titleEn: 'Identify Your Provincial Gas Provider',
    titleUr: 'اپنی گیس کمپنی کی شناخت کریں',
    descEn:
      'Confirm whether your premises are supplied by SNGPL (Punjab, Khyber Pakhtunkhwa, Islamabad, AJK) or SSGC (Sindh, Balochistan). Never apply a Punjab schedule to a Karachi home.',
    descUr:
      'اپنا صوبائی گیس ادارہ چیک کریں: پنجاب و خیبر پختونخوا کے لیے سوئی ناردرن (SNGPL) اور سندھ و بلوچستان کے لیے سوئی سدرن (SSGC) ہے۔',
  },
  {
    stepNumber: '02',
    titleEn: 'Access the Official Web Portal Notices',
    titleUr: 'آفیشل ویب سائٹ کے نوٹسز دیکھیں',
    descEn:
      'Visit sngpl.com.pk (Media Releases / Low Pressure Notices) or ssgc.com.pk (Company Announcements). Avoid forwarded WhatsApp screenshots or undated social media images.',
    descUr:
      'سوئی ناردرن (sngpl.com.pk) یا سوئی سدرن (ssgc.com.pk) کی آفیشل ویب سائٹ کھولیں۔ واٹس ایپ پر آنے والی پرانی تصاویر پر یقین نہ کریں۔',
  },
  {
    stepNumber: '03',
    titleEn: 'Check Regional Customer Facilitation Feeds',
    titleUr: 'ریجنل کسٹمر فیسیلیٹیشن سنٹر سے تصدیق',
    descEn:
      'Local gas pressure varies by elevation and city infrastructure. In sub-zero cities like Quetta or Abbottabad, local sub-offices release neighborhood-specific pressure bulletins.',
    descUr:
      'کوئٹہ یا ایبٹ آباد جیسے شدید سرد علاقوں میں ضلعی دفاتر مقامی پائپ لائن پریشر کے مطابق الگ اوقات جاری کرتے ہیں۔',
  },
  {
    stepNumber: '04',
    titleEn: 'Call the Unified Gas Helpline 1199',
    titleUr: 'یونیفائیڈ ہیلپ لائن 1199 پر رابطہ کریں',
    descEn:
      'If your burner has zero pressure during official cooking hours, dial 1199. Keep your 10 or 11-digit Consumer Number (printed on your gas bill) ready for complaint registration.',
    descUr:
      'مقررہ اوقات میں گیس نہ آنے کی صورت میں فوری 1199 پر کال کریں۔ بل پر درج اپنا کنزیومر نمبر لازمی پاس رکھیں۔',
  },
];

const faqs = [
  {
    questionEn: 'Is SNGPL the same company as SSGC?',
    questionUr: 'کیا سوئی ناردرن (SNGPL) اور سوئی سدرن (SSGC) ایک ہی کمپنی ہیں؟',
    answerEn:
      'No. They are two separate public utility companies regulated by OGRA. SNGPL (Sui Northern Gas Pipelines Ltd) serves consumers across Punjab, Khyber Pakhtunkhwa (KP), Islamabad Capital Territory, and Azad Jammu & Kashmir. SSGC (Sui Southern Gas Company) serves consumers across Sindh (including Karachi, Hyderabad, Sukkur) and Balochistan (including Quetta and Ziarat). Their operational schedules and pipeline networks are completely independent.',
    answerUr:
      'ہرگز نہیں! یہ دونوں الگ الگ سرکاری کمپنیاں ہیں۔ سوئی ناردرن پنجاب، خیبر پختونخوا، اسلام آباد اور آزاد کشمیر کو گیس دیتی ہے۔ جبکہ سوئی سدرن سندھ (بشمول کراچی) اور بلوچستان کو گیس فراہم کرتی ہے۔ دونوں کا شیڈول اور نیٹ ورک الگ ہوتا ہے۔',
  },
  {
    questionEn: "Has this year's (2026–27) winter gas schedule been announced?",
    questionUr: 'کیا سال 2026–27 کے لیے موسم سرما کا نیا شیڈول جاری ہو چکا ہے؟',
    answerEn:
      'No. As of September 9, 2026, neither SNGPL nor SSGC has formally announced the 2026–27 winter load-shedding schedule. Competing online blogs that present a live schedule are currently recycling last winter’s 2025–26 timetable without disclosing the date. Official seasonal load management notifications are typically gazetted in late October or November once winter temperatures drop and system pressure changes.',
    answerUr:
      'نہیں! 9 ستمبر 2026 تک نہ تو سوئی ناردرن اور نہ ہی سوئی سدرن نے نیا شیڈول جاری کیا ہے۔ انٹرنیٹ پر گردش کرنے والے شیڈولز پچھلے سال (2025–26) کے ہیں۔ نیا شیڈول عام طور پر اکتوبر کے آخر یا نومبر میں جاری کیا جاتا ہے۔',
  },
  {
    questionEn: 'Why does gas pressure drop or get cut off in winter?',
    questionUr: 'موسم سرما میں گیس کا پریشر کیوں کم ہوتا ہے یا گیس کیوں بند ہوتی ہے؟',
    answerEn:
      'Pakistan faces an acute natural gas supply gap: domestic gas production from fields like Sui and Qadirpur is declining by roughly 8% to 10% annually, while winter demand surges by nearly 400% due to household water geysers and space heaters. The resulting drop in pipeline transmission pressure (line-pack) forces utilities to close valves outside meal times to build sufficient pressure for breakfast, lunch, and dinner.',
    answerUr:
      'پاکستان کے مقامی گیس ذخائر تیزی سے کم ہو رہے ہیں جبکہ سردیوں میں گیزر اور ہیٹر چلنے سے گھریلو طلب میں 400 فیصد تک اضافہ ہو جاتا ہے۔ پائپ لائن میں پریشر برقرار رکھنے کے لیے کمپنیوں کو کھانے کے اوقات کے علاوہ گیس بند کرنا پڑتی ہے۔',
  },
  {
    questionEn: 'Are industrial and commercial users affected too?',
    questionUr: 'کیا فیکٹریاں اور کمرشل ادارے بھی اس لوڈ شیڈنگ سے متاثر ہوتے ہیں؟',
    answerEn:
      'Industrial units are generally handled under different priority tiers. Export-oriented industries (textiles, pharmaceuticals) are typically shielded from domestic rolling blackouts to prevent economic shutdowns, though they pay significantly higher commercial or imported RLNG rates. Non-export industries and commercial CNG stations often face weekly "gas holidays" during peak December–January freezes.',
    answerUr:
      'برآمدی صنعتوں (ٹیکسٹائل، ادویات) کو ملکی معیشت کی خاطر گھریلو شیڈول سے مستثنیٰ رکھا جاتا ہے لیکن وہ مہنگے آر ایل این جی نرخ ادا کرتی ہیں۔ البتہ سی این جی اسٹیشنز اور عام فیکٹریوں کو سردیوں میں گیس کی بندش کا سامنا کرنا پڑتا ہے۔',
  },
  {
    questionEn: 'How can households apply for a new gas connection in 2026?',
    questionUr: 'سال 2026 میں گھریلو گیس کا نیا کنکشن کیسے حاصل کریں؟',
    answerEn:
      'In 2026, the federal government resumed processing new domestic gas connections, formally lifting the moratorium that had been in place since December 2021. However, all new domestic connections are now issued strictly under the RLNG (Regasified Liquefied Natural Gas) tariff determined monthly by OGRA. Consumers can apply online on sngpl.com.pk (Punjab/KP) or at SSGC Customer Facilitation Centers (Sindh/Balochistan) by submitting CNIC, proof of ownership/registry, a neighbor’s gas bill, and an RLNG tariff undertaking.',
    answerUr:
      'وفاقی حکومت نے 2021 سے لگی چار سالہ پابندی ختم کر کے 2026 میں نئے گھریلو کنکشن کی بحالی کی اجازت دی ہے۔ تاہم اب نئے کنکشن صرف درآمدی آر ایل این جی (RLNG) نرخوں پر ملتے ہیں۔ شہری شناختی کارڈ، فرد/رجسٹری اور پڑوسی کے بل کے ساتھ سوئی ناردرن کی ویب سائٹ یا سوئی سدرن کے دفاتر میں اپلائی کر سکتے ہیں۔',
  },
  {
    questionEn: 'Where can I check the official current schedule myself?',
    questionUr: 'شہری خود آفیشل اور درست شیڈول کہاں سے دیکھ سکتے ہیں؟',
    answerEn:
      'Always check directly on the official utility websites: sngpl.com.pk for Punjab and Khyber Pakhtunkhwa, and ssgc.com.pk for Sindh and Balochistan. You can also dial 1199 from any landline or mobile to connect directly with regional dispatch controllers. Never rely on forwarded WhatsApp messages or unverified social media screenshots.',
    answerUr:
      'صرف اور صرف آفیشل ویب سائٹس sngpl.com.pk اور ssgc.com.pk ملاحظہ کریں یا کسی بھی فون سے ہیلپ لائن 1199 پر رابطہ کریں۔ سوشل میڈیا یا واٹس ایپ پر وائرل پرانے شیڈولز پر قطعی بھروسہ نہ کریں۔',
  },
];

export default function WinterGasLoadSheddingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-100">
        {/* PROMINENT DATED BANNER */}
        <div className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-amber-50 py-3 px-4 text-xs sm:text-sm font-sans border-b border-amber-600/50 shadow-sm">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-slate-950 font-extrabold px-2 py-0.5 rounded text-[11px] uppercase tracking-wide">
                Season 2026–27
              </span>
              <span>
                <strong>Official Status (As of September 9, 2026):</strong> The 2026–27 winter gas schedule has <em>not yet been announced</em>. Below is last year&apos;s verified baseline for reference.
              </span>
            </div>
            <span className="hidden md:inline-flex items-center gap-1 text-amber-200 text-xs font-mono">
              Gas Emergency: <strong>1199</strong>
            </span>
          </div>
        </div>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { nameEn: 'Utility Bills', nameUr: 'یوٹیلیٹی بلز', url: '/bills' },
              {
                nameEn: 'Winter Gas Schedule 2026–27',
                nameUr: 'موسم سرما گیس لوڈ شیڈنگ شیڈول',
                url: '/bills/winter-gas-load-shedding-schedule-sngpl-ssgc-2026-27',
              },
            ]}
          />

          {/* Article Header */}
          <header className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="flex flex-wrap items-center gap-2">
              <VerifiedBadge />
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                <Flame className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                SNGPL &amp; SSGC Natural Gas Supply
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-doc-brass" />
                2026–2027 Winter Baseline
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-doc-ink dark:text-white tracking-tight leading-tight">
              Winter Gas Load-Shedding Schedule 2026–27: SNGPL &amp; SSGC Timings &amp; Rules
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Authoritative, honest public advisory regarding winter gas load management across Pakistan. Understand the regional divide between <strong>SNGPL</strong> (Punjab, KP, Islamabad) and <strong>SSGC</strong> (Sindh, Balochistan), review last winter&apos;s confirmed <strong>3-slot mealtime baseline</strong>, learn the resumed <strong>2026 RLNG new connection policy</strong>, and verify official announcements directly from primary utility sources.
            </p>

            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-2 font-mono">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-doc-brass" /> Last Verified: September 9, 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-doc-brass" /> 6-Minute Read
              </span>
              <span className="flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-doc-brass" /> Regulated By: OGRA &amp; Ministry of Energy
              </span>
            </div>
          </header>

          {/* DATED CALLOUT: NOT YET ANNOUNCED DISCLAIMER */}
          <div className="p-5 sm:p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-300 dark:border-amber-800/60 shadow-sm space-y-3">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-200 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 text-sm font-sans">
                <strong className="text-amber-950 dark:text-amber-200 text-base font-serif block">
                  Honest Public Notice: Official 2026–27 Schedule Pending Announcement
                </strong>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                  <strong>As of September 9, 2026, the official 2026–27 winter gas schedule has not yet been announced by SNGPL or SSGC.</strong> Several competing websites are currently recycling last winter&apos;s (2025–26) schedule as if it were current, which is misleading for consumers trying to plan daily heating and cooking.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm font-semibold">
                  We present last winter&apos;s confirmed schedule below strictly as a reference baseline so households understand what to expect. The moment SNGPL or SSGC issues this year&apos;s gazetted timetable (typically released in late October or November), this page will be updated immediately. Bookmark this page for verified updates.
                </p>
              </div>
            </div>
          </div>

          {/* Direct Answer Box */}
          <DirectAnswerBox
            topicTitleEn="Direct Answer: Winter Gas Supply & Schedule Status (2026–27)"
            topicTitleUr="فوری خلاصہ: موسم سرما گیس شیڈول کی تازہ ترین صورتحال 2026–27"
            answerEn="Pakistan's winter gas supply is managed separately by SNGPL (Punjab, KP, Islamabad, AJK) and SSGC (Sindh, Balochistan). The official 2026–27 winter schedule has not yet been announced as of September 2026. For reference, last winter's SNGPL domestic baseline provided gas across 3 meal slots: 5:30–8:30 AM, 11:30 AM–1:30 PM, and 5:30–8:30 PM (total 8 hours). Check official notices exclusively at sngpl.com.pk, ssgc.com.pk, or helpline 1199."
            answerUr="پاکستان میں گیس کی ترسیل دو الگ کمپنیاں کرتی ہیں: پنجاب، خیبر پختونخوا اور اسلام آباد کے لیے سوئی ناردرن (SNGPL) اور سندھ و بلوچستان کے لیے سوئی سدرن (SSGC)۔ ستمبر 2026 تک اس سال کا نیا شیڈول جاری نہیں ہوا۔ پچھلے سال کے ریکارڈ کے مطابق سوئی ناردرن نے تین اوقات (صبح 5:30 تا 8:30، دوپہر 11:30 تا 1:30 اور شام 5:30 تا 8:30) میں کل 8 گھنٹے گیس فراہم کی تھی۔ مستند شیڈول کے لیے صرف sngpl.com.pk، ssgc.com.pk یا ہیلپ لائن 1199 دیکھیں۔"
          />

          <AdPlacementZone slotId="after-direct-answer" />

          {/* REGIONAL COVERAGE EXPLAINER: SNGPL VS SSGC */}
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center gap-2.5 text-doc-ink dark:text-white font-serif font-extrabold text-xl sm:text-2xl">
              <MapPin className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0" />
              <h2>Two Separate Companies, Different Networks: SNGPL vs SSGC</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Many consumers mistakenly assume Pakistan has a single national gas schedule. In reality, Pakistan&apos;s transmission grid is divided between two entirely separate public entities operating under distinct geographical licenses:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-amber-700 dark:text-amber-400 font-bold uppercase tracking-wider text-[10px] font-mono">Northern Utility</span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-[10px] font-bold">Punjab &amp; KP</span>
                </div>
                <strong className="text-doc-ink dark:text-white block font-bold text-base font-serif">
                  Sui Northern Gas Pipelines Limited (SNGPL)
                </strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>Jurisdiction:</strong> All 36 districts of Punjab (Lahore, Rawalpindi, Faisalabad, Multan, Gujranwala), Khyber Pakhtunkhwa (Peshawar, Mardan, Abbottabad), Islamabad Capital Territory (ICT), and Azad Jammu &amp; Kashmir.
                </p>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 text-slate-500 text-[11px] flex justify-between">
                  <span>Portal: <a href="https://www.sngpl.com.pk" target="_blank" rel="noopener noreferrer" className="text-amber-700 dark:text-amber-400 underline font-mono">sngpl.com.pk</a></span>
                  <span>Helpline: <strong className="text-slate-800 dark:text-slate-200">1199</strong></span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-blue-700 dark:text-blue-400 font-bold uppercase tracking-wider text-[10px] font-mono">Southern Utility</span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-[10px] font-bold">Sindh &amp; Balochistan</span>
                </div>
                <strong className="text-doc-ink dark:text-white block font-bold text-base font-serif">
                  Sui Southern Gas Company (SSGC)
                </strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>Jurisdiction:</strong> All districts of Sindh (Karachi, Hyderabad, Sukkur, Larkana) and Balochistan (Quetta, Ziarat, Kalat, Gwadar).
                </p>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 text-slate-500 text-[11px] flex justify-between">
                  <span>Portal: <a href="https://www.ssgc.com.pk" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-400 underline font-mono">ssgc.com.pk</a></span>
                  <span>Helpline: <strong className="text-slate-800 dark:text-slate-200">1199</strong></span>
                </div>
              </div>
            </div>
          </section>

          {/* REFERENCE SCHEDULE TABLE: LAST WINTER BASELINE */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Historical Reference Baseline</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                Last Winter&apos;s (2025–26) Confirmed Schedule for Reference
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                The schedule below reflects the actual verified supply windows implemented during the previous winter season (December 2025 through February 2026). Do not assume these exact hours will apply in 2026–27 until gazetted:
              </p>
            </div>

            <FeeTableVisual
              titleEn="Historical Supply Timetable: Winter 2025–26 Reference Baseline"
              titleUr="گزشتہ موسم سرما (2025–26) کا مصدقہ گیس شیڈول برائے حوالہ"
              subtitleEn="Confirmed domestic cooking windows and pressure management hours implemented by SNGPL & SSGC"
              subtitleUr="سوئی ناردرن اور سوئی سدرن کے تصدیق شدہ اوقات کار اور پریشر مینجمنٹ تفصیلات"
              rows={historicalBaselineRows}
              noteEn="Important: This table represents last winter's schedule for planning reference. SNGPL and SSGC have NOT yet published the 2026–27 notification as of September 2026."
              noteUr="اہم وضاحت: یہ شیڈول گزشتہ سال کا ہے تاکہ شہری پیشگی منصوبہ بندی کر سکیں۔ سال 2026–27 کا باضابطہ شیڈول ابھی جاری نہیں ہوا۔"
            />
          </section>

          {/* VERIFYING CURRENT SCHEDULE YOURSELF */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Self-Verification Protocol</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                How to Verify the Real Schedule Yourself at Any Time
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Even if online portals are slow to update, you can confirm genuine operational notices in four reliable steps:
              </p>
            </div>

            <ProcessStepsDiagram
              titleEn="Official Schedule Verification Roadmap"
              titleUr="سوئی گیس شیڈول کی از خود تصدیق کا طریقہ کار"
              subtitleEn="Avoid viral misinformation and check live line-pack notifications directly from the source"
              subtitleUr="سوشل میڈیا افواہوں سے بچیں اور اصل گیس کمپنی سے براہ راست معلومات حاصل کریں"
              steps={verificationSteps}
            />

            {/* Helpline Assistance Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-doc-ink dark:text-white block text-sm">
                    Unified Sui Gas Emergency Helpline: 1199
                  </strong>
                  <span className="text-slate-500 dark:text-slate-400">
                    Accessible across Pakistan from any PTCL landline or mobile network (SNGPL &amp; SSGC)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.sngpl.com.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition font-mono font-semibold"
                >
                  <span>sngpl.com.pk</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://www.ssgc.com.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition font-mono font-semibold"
                >
                  <span>ssgc.com.pk</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </section>

          <AdPlacementZone slotId="mid-content" />

          {/* COMPARISON VISUAL: SNGPL VS SSGC VS INDUSTRIAL */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Sectoral Policy Comparison</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                Comparing Winter Supply: SNGPL vs SSGC vs Industrial Consumers
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Understand how different categories of gas consumers are prioritized under the Federal Merit Order:
              </p>
            </div>

            <ComparisonVisual
              titleEn="Pakistan Winter Gas Allocation Matrix"
              titleUr="موسم سرما گیس ترسیل کا تقابلی جائزہ"
              subtitleEn="Detailed breakdown of domestic quotas, provincial variances, and commercial exemptions"
              subtitleUr="گھریلو صارفین، صوبائی ضوابط اور صنعتی ترسیل کا مرحلہ وار موازنہ"
              items={[
                {
                  titleEn: "SNGPL Domestic (Punjab & KP)",
                  titleUr: "سوئی ناردرن گھریلو صارفین (پنجاب و کے پی)",
                  subtitleEn: "Coverage: Punjab, KP, Islamabad, AJK",
                  subtitleUr: "پنجاب، خیبر پختونخوا، اسلام آباد",
                  badgeEn: "3-SLOT MEAL SCHEDULE",
                  badgeUr: "3 اوقات کا شیڈول",
                  badgeVariant: "brass",
                  pointsEn: [
                    "Rationed into three daily cooking windows: breakfast, lunch, and dinner.",
                    "Provides approximately 7 to 8 hours of full line-pack pressure daily.",
                    "Outside meal slots, supply drops to pilot-light pressure or complete cut-off.",
                    "Heavily affected by sub-zero demand in northern areas (Murree, Abbottabad).",
                    "Over 7.5 million domestic consumers connected across the network.",
                  ],
                  features: [
                    { labelEn: "Supply Hours", valueEn: "3 Meal Slots (~8 hrs daily)", isPositive: true },
                    { labelEn: "Nighttime Supply", valueEn: "Low / Nil Pressure", isPositive: false },
                    { labelEn: "Cooking Priority", valueEn: "Protected Breakfast & Dinner", isPositive: true },
                    { labelEn: "Billing Tier", valueEn: "Protected vs Non-Protected Slabs", isPositive: null },
                    { labelEn: "Official Helpline", valueEn: "1199 (24/7 Center)", isPositive: true },
                  ],
                  recommendedForEn: "Households in Punjab and KP who must plan water heating and cooking around fixed meal slots.",
                },
                {
                  titleEn: "SSGC Domestic (Sindh & Balochistan)",
                  titleUr: "سوئی سدرن گھریلو صارفین (سندھ و بلوچستان)",
                  subtitleEn: "Coverage: Sindh, Balochistan",
                  subtitleUr: "سندھ، بلوچستان",
                  badgeEn: "NIGHT PRESSURE CURTAILMENT",
                  badgeUr: "رات کے اوقات میں بندش",
                  badgeVariant: "emerald",
                  pointsEn: [
                    "Historically manages supply via overnight pressure shutdowns (10 PM to 5 AM).",
                    "Extreme geographic divergence: sub-zero Quetta vs mild-winter Karachi.",
                    "In Balochistan, low pressure poses severe freezing risks for room heaters.",
                    "Karachi faces tail-end pressure drops in dense localities (Korangi, Lyari).",
                    "Regulated independently under SSGC load-management circulars.",
                  ],
                  features: [
                    { labelEn: "Supply Hours", valueEn: "Daytime Supply with Night Cuts", isPositive: true },
                    { labelEn: "Nighttime Supply", valueEn: "10:00 PM – 5:00 AM Shutdown", isPositive: false },
                    { labelEn: "Cooking Priority", valueEn: "Morning & Afternoon Open", isPositive: true },
                    { labelEn: "Billing Tier", valueEn: "OGRA Prescribed Slabs", isPositive: null },
                    { labelEn: "Official Helpline", valueEn: "1199 (Regional CFCs)", isPositive: true },
                  ],
                  recommendedForEn: "Residents in Karachi and Quetta monitoring localized line-pack pressure alerts.",
                },
                {
                  titleEn: "Industrial & Export Consumers",
                  titleUr: "صنعتی اور برآمدی ادارے",
                  subtitleEn: "Textiles, Chemicals, Captive Power",
                  subtitleUr: "ٹیکسٹائل، کھاد اور فیکٹریاں",
                  badgeEn: "EXEMPT FROM DOMESTIC CUTS",
                  badgeUr: "گھریلو کٹوتی سے مستثنیٰ",
                  badgeVariant: "blue",
                  pointsEn: [
                    "Prioritized to sustain employment, national exports, and GDP growth.",
                    "Exempted from the domestic 3-slot mealtime schedule.",
                    "Pay significantly higher commercial rates or blend with imported RLNG.",
                    "Non-export industrial units face designated weekly 'gas holidays'.",
                    "Subject to government power plant gas diversion orders during crisis peaks.",
                  ],
                  features: [
                    { labelEn: "Supply Hours", valueEn: "Continuous (Export Units)", isPositive: true },
                    { labelEn: "Nighttime Supply", valueEn: "Uninterrupted", isPositive: true },
                    { labelEn: "Gas Tariff", valueEn: "Higher Commercial / RLNG Rate", isPositive: false },
                    { labelEn: "Load Shedding", valueEn: "Rotational Gas Holidays", isPositive: null },
                    { labelEn: "Regulatory Tier", valueEn: "Priority Merit Order 1-2", isPositive: true },
                  ],
                  recommendedForEn: "Industrialists and commercial manufacturers operating on dedicated high-pressure lines.",
                },
              ]}
            />
          </section>

          {/* RESUMPTION OF RLNG NEW DOMESTIC CONNECTIONS IN 2026 */}
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center gap-2.5 text-doc-ink dark:text-white font-serif font-extrabold text-xl sm:text-2xl">
              <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0" />
              <h2>Resumption of New Domestic Gas Connections in 2026 (RLNG Policy)</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              A major policy development in 2026 was the federal government&apos;s decision to <strong>formally end the four-year moratorium on new domestic gas connections</strong>, which had been suspended since December 2021 due to severe domestic supply shortfalls. However, new connections operate under fundamentally revised financial rules:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider text-[10px] block font-mono">
                  Tariff Mechanism
                </span>
                <strong className="text-doc-ink dark:text-white block font-bold text-sm">RLNG (Imported LNG) Tariffs Only</strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  New domestic applicants cannot receive heavily subsidized &quot;system gas.&quot; Instead, new meters are billed at full market-indexed RLNG rates determined monthly by OGRA.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider text-[10px] block font-mono">
                  Pending Applicants
                </span>
                <strong className="text-doc-ink dark:text-white block font-bold text-sm">Priority for 2021 Backlog</strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Citizens who previously applied before December 2021 and paid urgent demand notices receive priority installation if they sign an undertaking agreeing to RLNG billing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider text-[10px] block font-mono">
                  Application Workflow
                </span>
                <strong className="text-doc-ink dark:text-white block font-bold text-sm">Online &amp; CFC Submission</strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Applications are accepted via the SNGPL portal (sngpl.com.pk) or SSGC Customer Facilitation Centers with CNIC, proof of property ownership, and a neighbor&apos;s gas bill.
                </p>
              </div>
            </div>

            {/* Cross-link to Smart Meters and Bill Checkers */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <span className="text-slate-600 dark:text-slate-300">
                Are you curious how utility billing and modern automated meters work in Pakistan?
              </span>
              <div className="flex flex-wrap gap-2 shrink-0">
                <Link
                  href="/bills/smart-meter-pakistan-price-how-it-works-2026"
                  className="inline-flex items-center gap-1 text-doc-burgundy dark:text-red-300 font-bold hover:underline"
                >
                  <span>Smart Meters (AMI) Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-slate-400">•</span>
                <Link
                  href="/bills/utility-bill-checker-2026"
                  className="inline-flex items-center gap-1 text-doc-burgundy dark:text-red-300 font-bold hover:underline"
                >
                  <span>Utility Bill Checker Tool</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </section>

          {/* GENUINE FAQ SECTION */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Frequently Asked Questions</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                Frequently Asked Questions: Winter Gas Schedule &amp; Rules
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Direct, transparent answers addressing seasonal gas shortages, load-shedding schedules, and connection policies:
              </p>
            </div>

            <FAQAccordionVisual
              titleEn="Winter Gas Load-Shedding: Frequently Asked Questions (2026–27)"
              titleUr="موسم سرما گیس لوڈ شیڈنگ: عام طور پر پوچھے جانے والے ضروری سوالات"
              subtitleEn="Verified answers regarding SNGPL and SSGC supply hours, 1199 helpline, and RLNG applications"
              subtitleUr="سوئی ناردرن اور سوئی سدرن کے اوقات کار، 1199 ہیلپ لائن اور آر ایل این جی کنکشن کی معلومات"
              items={faqs}
            />
          </section>

          {/* CROSS-LINKING AND UTILITY RESOURCES */}
          <section className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-md space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">Related Utility &amp; Energy Guides</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold tracking-tight">
                Explore Additional Pakistan Utility Guides
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Check duplicate electricity and gas bills, verify smart meter installations, and stay informed on seasonal tariffs:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              <Link
                href="/bills/utility-bill-checker-2026"
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition flex items-center justify-between group"
              >
                <div>
                  <strong className="text-white block font-bold text-sm group-hover:text-amber-400 transition">
                    Utility Bill Checker 2026 (All DISCOs &amp; Sui Gas)
                  </strong>
                  <span className="text-slate-400">Instant duplicate bill downloads for SNGPL, SSGC &amp; LESCO</span>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 transform group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="/bills/smart-meter-pakistan-price-how-it-works-2026"
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition flex items-center justify-between group"
              >
                <div>
                  <strong className="text-white block font-bold text-sm group-hover:text-amber-400 transition">
                    Smart Meters (AMI) in Pakistan: Prices &amp; Rollout
                  </strong>
                  <span className="text-slate-400">Advanced automated metering, solar net billing &amp; prepaid pilots</span>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 transform group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="/alerts/smog-air-quality-aqi-advisory-punjab"
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition flex items-center justify-between group"
              >
                <div>
                  <strong className="text-white block font-bold text-sm group-hover:text-amber-400 transition">
                    Smog &amp; AQI Advisory Punjab (2026–27)
                  </strong>
                  <span className="text-slate-400">School 8:45 AM timings, green lockdowns &amp; 1373 helpline</span>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 transform group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="/alerts/emergency-helpline-numbers-pakistan"
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition flex items-center justify-between group"
              >
                <div>
                  <strong className="text-white block font-bold text-sm group-hover:text-amber-400 transition">
                    Emergency Helpline Directory Pakistan
                  </strong>
                  <span className="text-slate-400">Sui Gas 1199, Electricity 118, Rescue 1122 &amp; Police 15</span>
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
