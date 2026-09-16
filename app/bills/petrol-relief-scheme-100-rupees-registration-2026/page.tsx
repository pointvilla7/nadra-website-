import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, ComparisonVisual, FAQAccordionVisual, FeeTableVisual } from '@/components/visuals';
import {
  Fuel,
  Bike,
  Car,
  ShieldCheck,
  AlertTriangle,
  Send,
  ExternalLink,
  CheckCircle2,
  Clock,
  MapPin,
  FileCheck2,
  QrCode,
  Sparkles,
  HelpCircle,
  Layers,
  BellRing,
  Info,
  Check,
  XCircle,
  Smartphone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Petrol Relief Scheme 2026: Rs. 100/Litre Subsidy, 9771 Registration & Quotas',
  description:
    'Complete official guide to Prime Minister Petrol Relief Scheme 2026: Rs. 100/litre subsidy on petrol for motorcycles, rickshaws, and cars up to 800cc. Check 9771 SMS registration syntax, monthly quotas (20L vs 30L), rollout dates, and pump token redemption.',
  keywords: [
    'petrol relief scheme 100 rupees registration 2026',
    'pm fuel relief scheme 2026 pakistan',
    '9771 sms registration petrol scheme',
    'petrol subsidy 800cc cars motorcycles pakistan',
    'how to register for petrol relief 9771',
    'fuel relief token tok 9771',
    'petrol relief scheme quotas 20 litres 30 litres',
    'petrol relief scheme islamabad nationwide dates',
    'difference between petrol relief and e bike scheme',
  ],
  openGraph: {
    title: 'Petrol Relief Scheme 2026: Rs. 100/Litre Subsidy, 9771 Registration & Quotas',
    description:
      'Verified guide to Federal Fuel Relief Scheme 2026: Rs. 100/litre discount via 9771 SMS for motorcycles (20L/month) and ≤800cc cars (30L/month). Check eligibility, excise rules & pump token redemption.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/petrol-relief-scheme-100-rupees-registration-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/bills/petrol-relief-scheme-100-rupees-registration-2026',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com/' },
        { '@type': 'ListItem', position: 2, name: 'Utility Bills & Energy', item: 'https://www.pakistaninfohub.com/bills' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Petrol Relief Scheme 2026',
          item: 'https://www.pakistaninfohub.com/bills/petrol-relief-scheme-100-rupees-registration-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Petrol Relief Scheme 2026: Rs. 100/Litre Subsidy, 9771 Registration & Quotas',
      description:
        'Authoritative consumer guide explaining the Prime Minister Fuel Relief Scheme providing Rs. 100 per litre petrol subsidy on monthly quotas for motorcycles, rickshaws, and cars up to 800cc via 9771 SMS code.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-16',
      dateModified: '2026-09-16',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/bills/petrol-relief-scheme-100-rupees-registration-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Register and Claim Petrol Relief via 9771 SMS',
      description:
        'Official 5-step process to register your vehicle, verify excise data, obtain a dynamic fuel token, and receive Rs. 100/litre discount at participating petrol stations.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Confirm SIM & Vehicle Registration in Your Name',
          text: 'Ensure the mobile SIM card is registered to your own CNIC (via PTA *#06# / 668) and the motorcycle or ≤800cc car is officially registered under your CNIC in provincial excise records.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Send Registration SMS to 9771',
          text: 'From your registered SIM, text: REG [CNIC without dashes] [Vehicle Number] [Province Code] [Registration Date DDMMYYYY] to 9771. (Province Codes: I for Islamabad, P for Punjab, S for Sindh, K for KPK, B for Balochistan, A for AJK, G for GB).',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Receive Confirmation & Quota Approval',
          text: 'The automated system validates your records against NADRA and Provincial Excise databases, replying with your approved monthly quota (20L for 2/3 wheelers or 30L for ≤800cc cars).',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Generate Fuel Token Before Visiting Petrol Pump',
          text: 'Before fueling, send TOK to 9771. You will receive an SMS containing a secure digital fuel token with an expiry window and remaining monthly quota.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Present Token at Participating Pump POS',
          text: 'Show the token SMS to the fuel station cashier or pump attendant. The POS terminal verifies the code and deducts Rs. 100 per litre directly from your bill at the pump.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Am I eligible for the Rs. 100 petrol subsidy if I drive a 1,000cc car?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The Federal Petrol Relief Scheme strictly caps four-wheeled passenger vehicles at an engine capacity of 800cc (such as Suzuki Mehran, Suzuki Alto 660cc/800cc, Daihatsu Cuore, and Prince Pearl). Cars with engine displacements above 800cc (e.g., 1,000cc Suzuki Cultus, Wagon R, Toyota Vitz, or larger sedans) are completely excluded from the subsidy.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the exact monthly petrol quota and maximum cash savings?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Motorcycles, Qingqi rickshaws, and auto-rickshaws (two- and three-wheelers) receive a subsidized quota of up to 20 litres per month, equating to a maximum financial relief of Rs. 2,000 per month. Small cars up to 800cc receive up to 30 litres per month, providing a maximum financial relief of Rs. 3,000 per month. Any fuel purchased above your monthly quota is billed at regular retail price.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the exact SMS format to register on 9771?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Send an SMS to 9771 in the format: REG [CNIC without dashes] [Vehicle Registration Number] [Province Code] [Registration Date DDMMYYYY]. For example: REG 3520112345671 LEB1234 P 15032021. Province codes are: I (Islamabad), P (Punjab), S (Sindh), K (Khyber Pakhtunkhwa), B (Balochistan), A (Azad Jammu and Kashmir), and G (Gilgit-Baltistan).',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I register if the vehicle is on an open transfer letter or registered in a relative\'s name?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The automated verification engine cross-references the applicant\'s CNIC against the provincial Excise & Taxation vehicle registration database. If the vehicle is registered under another person\'s name or kept on an open letter, registration will be rejected. You must transfer vehicle ownership to your own CNIC at your provincial excise department to qualify.',
          },
        },
        {
          '@type': 'Question',
          name: 'When does the scheme start in Islamabad and nationwide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The scheme rolled out first in Islamabad Capital Territory starting from midnight between September 14 and 15, 2026. The nationwide rollout across Punjab, Sindh, Khyber Pakhtunkhwa, Balochistan, AJK, and Gilgit-Baltistan begins at 11:59 PM on September 16, 2026 (night of September 16-17, 2026).',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this the same as the Punjab E-Bike Scheme or Federal PAVE Scheme?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, these are entirely distinct initiatives. The Petrol Relief Scheme provides an ongoing operational discount of Rs. 100/litre on petrol for existing combustion motorcycles and small cars. The CM Punjab E-Bike Scheme provides interest-free installment financing to buy new electric motorcycles for students (125,000+ bikes with zero down payment). The Federal PAVE Scheme offers capital cash grants for purchasing electric vehicles.',
          },
        },
      ],
    },
  ],
};

const quotaScheduleRows = [
  {
    serviceEn: 'Motorcycles & Scooters (2-Wheelers)',
    serviceUr: 'موٹرسائیکلز اور سکوٹرز (2 ویلرز)',
    normal: '20 Litres / month',
    urgent: 'Rs. 100 / Litre Discount',
    executive: 'Max Rs. 2,000 / month',
    tagEn: '2-Wheelers',
  },
  {
    serviceEn: 'Auto-Rickshaws & Qingqi (3-Wheelers)',
    serviceUr: 'آٹو رکشہ اور چنگ چی (3 ویلرز)',
    normal: '20 Litres / month',
    urgent: 'Rs. 100 / Litre Discount',
    executive: 'Max Rs. 2,000 / month',
    tagEn: '3-Wheelers',
  },
  {
    serviceEn: 'Small Cars (Up to 800cc Engine)',
    serviceUr: 'چھوٹی گاڑیاں (800 سی سی تک انجن)',
    normal: '30 Litres / month',
    urgent: 'Rs. 100 / Litre Discount',
    executive: 'Max Rs. 3,000 / month',
    tagEn: '≤800cc Cars',
  },
  {
    serviceEn: 'Cars Above 800cc (1000cc, 1300cc+)',
    serviceUr: '800 سی سی سے بڑی گاڑیاں (کلٹس، ویگن آر وغیرہ)',
    normal: '0 Litres (Ineligible)',
    urgent: 'No Subsidy Available',
    executive: 'Full Market Price',
    tagEn: 'Excluded',
  },
  {
    serviceEn: 'Commercial Trucks, Buses & Heavy Transport',
    serviceUr: 'کمرشل ٹرک، بسیں اور بھاری ٹرانسپورٹ',
    normal: '0 Litres (Ineligible)',
    urgent: 'Not Covered',
    executive: 'Full Market Price',
    tagEn: 'Excluded',
  },
];

const registrationSteps = [
  {
    number: 1,
    icon: <Smartphone className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Verify SIM & Vehicle Ownership Match',
    titleUr: 'سم اور گاڑی کی ملکیت کی تصدیق',
    descEn: 'Ensure the mobile SIM card is registered to your own CNIC. Your motorcycle or ≤800cc car must also be officially registered under your CNIC in provincial excise records.',
    descUr: 'موبائل سم کارڈ آپ کے اپنے شناختی کارڈ پر رجسٹرڈ ہونا ضروری ہے۔ اس کے علاوہ گاڑی یا بائیک کا ایکسائز ریکارڈ بھی آپ کے اپنے نام پر ہونا لازمی ہے۔',
    tagEn: 'Pre-requisite',
    tagUr: 'بنیادی شرط',
  },
  {
    number: 2,
    icon: <Send className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Send SMS to 9771 in Prescribed Format',
    titleUr: 'مخصوص فارمیٹ میں 9771 پر ایس ایم ایس ارسال کریں',
    descEn: 'From your own registered SIM, send an SMS to 9771 formatted as: REG [CNIC] [Vehicle Number] [Province Code] [Registration Date DDMMYYYY].',
    descUr: 'اپنی سم سے 9771 پر میسج بھیجیں: REG [شناختی کارڈ بغیر ڈیش] [گاڑی کا نمبر] [صوبائی کوڈ] [رجسٹریشن تاریخ DDMMYYYY]۔',
    tagEn: 'SMS Code: 9771',
    tagUr: 'میسج کوڈ 9771',
  },
  {
    number: 3,
    icon: <FileCheck2 className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Automated NADRA & Excise Verification',
    titleUr: 'نادرا اور ایکسائز کی خودکار تصدیق',
    descEn: 'The central system cross-checks vehicle chassis and engine numbers against provincial excise databases. Once verified, you will receive confirmation of your monthly fuel quota.',
    descUr: 'مرکزی سسٹم صوبائی ایکسائز ڈیٹا بیس سے ریکارڈ میچ کرے گا۔ تصدیق مکمل ہونے پر آپ کو ماہانہ کوٹہ کی منظوری کا تصدیقی میسج موصول ہوگا۔',
    tagEn: 'Automated Check',
    tagUr: 'ڈیجیٹل جانچ',
  },
  {
    number: 4,
    icon: <QrCode className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Request Fuel Token: Text TOK to 9771',
    titleUr: 'فیول ٹوکن کا حصول: 9771 پر TOK لکھ کر بھیجیں',
    descEn: 'Before visiting the petrol station, send an SMS with TOK to 9771. You will receive a single-use digital relief token code with quota balance.',
    descUr: 'پیٹرول پمپ جانے سے قبل 9771 پر TOK لکھ کر بھیجیں۔ آپ کو ایک مخصوص ڈیجیٹل فیول ٹوکن کوڈ موصول ہوگا جس میں بقیہ کوٹہ درج ہوگا۔',
    tagEn: 'Token Generation',
    tagUr: 'ٹوکن جنریشن',
  },
  {
    number: 5,
    icon: <Fuel className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Redeem Rs. 100/Litre Discount at Pump POS',
    titleUr: 'پمپ پی او ایس مشین پر فی لیٹر 100 روپے رعایت حاصل کریں',
    descEn: 'Show your token SMS to the pump attendant or cashier at participating fuel stations (PSO, Shell, Total, etc.). The POS terminal deducts Rs. 100/litre on eligible litres.',
    descUr: 'نامزد پیٹرول پمپ پر کیشیئر یا عملے کو ٹوکن دکھائیں۔ پی او ایس مشین کے ذریعے فی لیٹر 100 روپے کی فوری رعایت بل میں سے منہا کر دی جائے گی۔',
    tagEn: 'Point of Sale Relief',
    tagUr: 'فوری رعایت',
  },
];

export default function PetrolReliefSchemePage() {
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
                { nameEn: 'Utility Bills & Energy', nameUr: 'یوٹیلیٹی بلز و توانائی', url: '/bills' },
                {
                  nameEn: 'Petrol Relief Scheme 2026',
                  nameUr: 'پیٹرول ریلیف سکیم 2026',
                  url: '/bills/petrol-relief-scheme-100-rupees-registration-2026',
                },
              ]}
            />
            <VerifiedBadge textEn="Verified September 16, 2026 • Live Scheme" textUr="مصدقہ 16 ستمبر 2026 • لائیو سکیم" />
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 pt-6 space-y-8">
          {/* URGENT LIVE ROLLOUT BANNER */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white p-4 sm:p-5 shadow-lg border border-amber-500/40">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/10 backdrop-blur shrink-0 mt-0.5">
                  <BellRing className="w-5 h-5 text-amber-200 animate-bounce" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded-full bg-amber-950/70 text-amber-200 text-[10px] font-mono font-extrabold uppercase tracking-wider">
                      LIVE IMPLEMENTATION • SEPT 2026
                    </span>
                    <span className="text-xs text-amber-100 font-medium">Federal Fuel Subsidy</span>
                  </div>
                  <p className="text-sm sm:text-base font-bold text-white mt-1 leading-snug">
                    Islamabad: Live (Midnight Sept 14–15) • Nationwide: Starts 11:59 PM Sept 16, 2026
                  </p>
                  <p className="text-xs text-amber-100 mt-0.5 font-sans">
                    Rs. 100/litre direct relief on petrol for motorcycles (20L/mo) and ≤800cc cars (30L/mo). SMS registration active via <strong>9771</strong>.
                  </p>
                </div>
              </div>
              <a
                href="#registration-process"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-amber-900 font-bold text-xs sm:text-sm hover:bg-amber-50 transition shadow-md shrink-0 self-stretch sm:self-auto justify-center"
              >
                <span>Registration Syntax Below</span>
                <Send className="w-3.5 h-3.5 text-amber-700" />
              </a>
            </div>
          </div>

          {/* ACTIVE EVOLVING NOTICE */}
          <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60 flex items-start gap-3 text-xs sm:text-sm font-sans">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-blue-900 dark:text-blue-200 font-bold block">
                Recently Launched Scheme Notice (Active Implementation Phase)
              </strong>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                This scheme is in immediate phased execution. Operational mechanics (such as POS terminal integration across private dealer pumps and automated excise API responses) are continuously updating. Our editorial desk verifies facts directly with the Ministry of Energy (Petroleum Division) and Oil Marketing Companies. Check the <strong>Last Verified date: September 16, 2026</strong> for current ground reality.
              </p>
            </div>
          </div>

          {/* Header Section */}
          <header className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-mono font-bold tracking-wide">
              <Fuel className="w-3.5 h-3.5" />
              <span>PRIME MINISTER FUEL RELIEF INITIATIVE • RS. 100/LITRE SUBSIDY</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-doc-ink dark:text-white tracking-tight leading-tight">
              Petrol Relief Scheme 2026: Rs. 100/Litre Subsidy, 9771 SMS Registration &amp; Quotas
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              The verified, independent public guide to the Government of Pakistan&apos;s targeted Fuel Relief Scheme. Learn how to register via official SMS shortcode <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs font-mono text-doc-seal dark:text-amber-400 font-bold">9771</code>, check monthly petrol quotas for motorcycles (20 litres) and small cars up to 800cc (30 litres), generate digital pump tokens, and claim your direct discount at fuel stations nationwide.
            </p>
          </header>

          {/* Direct Answer Box */}
          <DirectAnswerBox
            topicTitleEn="Direct Answer: Prime Minister Petrol Relief Scheme (2026)"
            topicTitleUr="خلاصہ: وزیر اعظم پیٹرول ریلیف سکیم 2026"
            answerEn="The Government of Pakistan provides a direct subsidy of Rs. 100 per litre on petrol. Motorcycles and rickshaws receive up to 20 litres/month (max Rs. 2,000 relief); small cars up to 800cc receive up to 30 litres/month (max Rs. 3,000 relief). Cars above 800cc are excluded. To register, send an SMS to 9771 in the format: REG [CNIC] [Vehicle Number] [Province Code] [Registration Date DDMMYYYY] from a SIM registered in your own name. Before visiting a pump, text TOK to 9771 to generate your redemption token."
            answerUr="حکومت پاکستان کی پیٹرول ریلیف سکیم کے تحت پیٹرول پر فی لیٹر 100 روپے کی براہ راست رعایت دی جا رہی ہے۔ موٹر سائیکل اور رکشہ کو ماہانہ 20 لیٹر (زیادہ سے زیادہ 2,000 روپے ریلیف) اور 800 سی سی تک چھوٹی گاڑیوں کو ماہانہ 30 لیٹر (زیادہ سے زیادہ 3,000 روپے ریلیف) دیا جائے گا۔ 800 سی سی سے بڑی گاڑیاں اس میں شامل نہیں۔ رجسٹریشن کے لیے اپنے نام کی سم سے 9771 پر میسج بھیجیں: REG [شناختی کارڈ] [گاڑی نمبر] [صوبائی کوڈ] [رجسٹریشن تاریخ]۔ پمپ جانے سے قبل 9771 پر TOK لکھ کر ٹوکن حاصل کریں۔"
          />

          {/* KEY CORE FACTS AT A GLANCE */}
          <section className="p-6 sm:p-8 rounded-3xl bg-amber-500/10 dark:bg-amber-950/20 border-2 border-amber-300 dark:border-amber-800/60 shadow-sm space-y-5">
            <div className="flex items-center gap-2.5 text-amber-900 dark:text-amber-300 font-serif font-extrabold text-lg sm:text-xl">
              <CheckCircle2 className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0" />
              <h2>Key Highlights &amp; Financial Parameters (Confirmed September 2026)</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              Announced by the Federal Government to insulate lower-income and middle-income commuters from global crude oil fluctuations, the scheme operates under strict monthly quota ceilings:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-sans pt-1">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800/40 space-y-1">
                <span className="text-slate-500 dark:text-slate-400 text-[11px] block font-medium">Relief Amount</span>
                <strong className="text-doc-ink dark:text-white block font-bold text-lg font-mono">Rs. 100 / Litre</strong>
                <p className="text-slate-500 text-[11px]">Direct deduction applied at participating fuel pump POS.</p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800/40 space-y-1">
                <span className="text-amber-700 dark:text-amber-400 text-[11px] block font-bold">2 &amp; 3-Wheelers Quota</span>
                <strong className="text-amber-700 dark:text-amber-300 block font-bold text-lg font-mono">20 Litres / mo</strong>
                <p className="text-slate-500 text-[11px]">Motorcycles, Rickshaws &amp; Qingqi (Max Rs. 2,000 savings).</p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800/40 space-y-1">
                <span className="text-doc-seal dark:text-amber-400 text-[11px] block font-bold">Small Cars (≤800cc)</span>
                <strong className="text-doc-seal dark:text-amber-400 block font-bold text-lg font-mono">30 Litres / mo</strong>
                <p className="text-slate-500 text-[11px]">Mehran, Alto 660/800, Cuore, Pearl (Max Rs. 3,000 savings).</p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800/40 space-y-1">
                <span className="text-blue-600 dark:text-blue-400 text-[11px] block font-bold">Official SMS Channel</span>
                <strong className="text-blue-700 dark:text-blue-300 block font-bold text-lg font-mono">SMS: 9771</strong>
                <p className="text-slate-500 text-[11px]">Sole authorized government platform for registration &amp; tokens.</p>
              </div>
            </div>

            {/* Implementation Dates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs font-sans">
              <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-amber-200 dark:border-amber-800/40 space-y-1">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold">
                  <Check className="w-4 h-4" />
                  <span>Phase 1: Islamabad Capital Territory (ICT)</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong>Operational Date:</strong> Midnight between <strong>September 14 and 15, 2026</strong>. Successfully deployed across designated OMC pumps in Islamabad and Rawalpindi fringe stations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-amber-200 dark:border-amber-800/40 space-y-1">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold">
                  <Clock className="w-4 h-4" />
                  <span>Phase 2: Nationwide Rollout (All Provinces + AJK/GB)</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong>Operational Date:</strong> Starting at <strong>11:59 PM on September 16, 2026</strong> (night of September 16–17, 2026) across Punjab, Sindh, Khyber Pakhtunkhwa, Balochistan, Azad Kashmir, and Gilgit-Baltistan.
                </p>
              </div>
            </div>
          </section>

          {/* Fee & Quota Table Visual */}
          <FeeTableVisual
            titleEn="Vehicle Eligibility & Monthly Subsidy Quota Ledger (2026)"
            titleUr="گاڑیوں کی اہلیت اور ماہانہ سبسڈی کوٹہ کا مکمل شیڈول"
            subtitleEn="Detailed breakdown of monthly allowable litres, discount per litre, and maximum rupee savings"
            subtitleUr="گاڑی کی کیٹیگری، ماہانہ لیٹرز، فی لیٹر رعایت اور کل ماہانہ بچت کا موازنہ"
            rows={quotaScheduleRows}
            noteEn="Important: Any petrol pumped beyond your monthly 20L or 30L quota is billed at normal prevailing market rates."
            noteUr="اہم نوٹ: ماہانہ 20 یا 30 لیٹر کے مقررہ کوٹہ سے زائد خریدا جانے والا پیٹرول عام مارکیٹ ریٹ پر ملے گا۔"
          />

          {/* REGISTRATION DETAILED SECTION */}
          <section id="registration-process" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Step-by-Step Instructions</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                How to Register for Petrol Relief via SMS Code 9771
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                The government has deployed an automated SMS gateway to avoid crowding and bureaucratic delays. Follow this exact format carefully:
              </p>
            </div>

            {/* Exact SMS Syntax Box */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-700 space-y-4 font-mono text-xs sm:text-sm">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-amber-400 font-bold uppercase tracking-wider text-xs">Official SMS Syntax Format</span>
                <span className="text-slate-400 text-xs font-sans">Send to Shortcode: <strong className="text-white font-mono">9771</strong></span>
              </div>

              <div className="p-3 bg-black/50 rounded-xl border border-slate-700/80 text-emerald-400 select-all break-all leading-relaxed">
                REG &lt;CNIC_WITHOUT_DASHES&gt; &lt;VEHICLE_NUMBER&gt; &lt;PROVINCE_CODE&gt; &lt;REGISTRATION_DATE_DDMMYYYY&gt;
              </div>

              <div className="space-y-2 text-xs font-sans text-slate-300">
                <p className="font-bold text-white">Live Example:</p>
                <p className="font-mono bg-slate-800/80 p-2.5 rounded-lg text-amber-300 border border-slate-700">
                  REG 3520112345671 LEB1234 P 15032021
                </p>
                <p className="text-[11px] text-slate-400">
                  (Translates to: CNIC 35201-1234567-1, Punjab registration number LEB-1234, Province Punjab [P], Vehicle registered on 15 March 2021).
                </p>
              </div>

              {/* Province Codes Table */}
              <div className="pt-2">
                <strong className="text-white text-xs block mb-2 font-sans">Official Single-Letter Province Codes:</strong>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-2 rounded bg-slate-800 border border-slate-700 flex justify-between">
                    <span className="text-slate-300">Islamabad:</span>
                    <strong className="text-amber-300 font-mono">I</strong>
                  </div>
                  <div className="p-2 rounded bg-slate-800 border border-slate-700 flex justify-between">
                    <span className="text-slate-300">Punjab:</span>
                    <strong className="text-amber-300 font-mono">P</strong>
                  </div>
                  <div className="p-2 rounded bg-slate-800 border border-slate-700 flex justify-between">
                    <span className="text-slate-300">Sindh:</span>
                    <strong className="text-amber-300 font-mono">S</strong>
                  </div>
                  <div className="p-2 rounded bg-slate-800 border border-slate-700 flex justify-between">
                    <span className="text-slate-300">KPK:</span>
                    <strong className="text-amber-300 font-mono">K</strong>
                  </div>
                  <div className="p-2 rounded bg-slate-800 border border-slate-700 flex justify-between">
                    <span className="text-slate-300">Balochistan:</span>
                    <strong className="text-amber-300 font-mono">B</strong>
                  </div>
                  <div className="p-2 rounded bg-slate-800 border border-slate-700 flex justify-between">
                    <span className="text-slate-300">AJK:</span>
                    <strong className="text-amber-300 font-mono">A</strong>
                  </div>
                  <div className="p-2 rounded bg-slate-800 border border-slate-700 flex justify-between">
                    <span className="text-slate-300">Gilgit-Baltistan:</span>
                    <strong className="text-amber-300 font-mono">G</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* How Token Generation Works */}
            <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 space-y-3 text-xs sm:text-sm font-sans">
              <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-bold text-base">
                <QrCode className="w-5 h-5 text-amber-700 dark:text-amber-400" />
                <h3>How to Generate and Use Your Fuel Token (Before Fueling)</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Registration on 9771 is a <strong>one-time setup</strong>. However, to prevent fraud and misuse, relief is disbursed via a <strong>dynamic SMS token</strong>:
              </p>
              <ol className="list-decimal list-inside space-y-1.5 text-slate-700 dark:text-slate-300 ml-1">
                <li>Before arriving at the petrol station, text <code className="bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded font-mono font-bold text-amber-800 dark:text-amber-300">TOK</code> to <strong className="font-mono">9771</strong>.</li>
                <li>The system responds with a short token code (e.g., <code className="bg-white dark:bg-slate-900 px-1 rounded font-mono text-doc-seal">PR-839201</code>) and your remaining litres balance for the month.</li>
                <li>Show this SMS to the pump operator before dispensing fuel. The operator inputs the token into their point-of-sale (POS) terminal.</li>
                <li>The POS terminal validates the code in real-time, deducts <strong>Rs. 100 per litre</strong> from the total bill, and updates your monthly quota automatically.</li>
              </ol>
            </div>
          </section>

          {/* Process Steps Diagram */}
          <ProcessStepsDiagram
            badgeEn="OFFICIAL REGISTRATION & REDEMPTION WORKFLOW"
            badgeUr="رجسٹریشن اور ریلیف کے مراحل"
            titleEn="Step-by-Step: From 9771 SMS to Petrol Pump Discount"
            titleUr="9771 میسج سے لے کر پیٹرول پمپ پر رعایت تک مکمل طریقہ کار"
            subtitleEn="5 sequential steps to register your vehicle, receive quota approval, generate a fuel token, and save Rs. 100/litre"
            subtitleUr="گاڑی کا اندراج، کوٹہ کی منظوری، فیول ٹوکن جنریشن اور پمپ پر فی لیٹر 100 روپے بچت"
            steps={registrationSteps}
          />

          {/* EXPLICIT CLARIFICATIONS: WHAT IS VERIFIED VS STILL EVOLVING */}
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Ground Reality &amp; Transparency</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                What Is Verified vs. What Is Still Unconfirmed
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Because this scheme is being implemented right now, rumors and unverified claims circulate online. Here is the strict factual distinction:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans">
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 space-y-3">
                <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Officially Verified &amp; Confirmed</span>
                </div>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Rs. 100/Litre Subsidy:</strong> Confirmed direct reduction on petrol.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Monthly Quotas:</strong> 20L for motorcycles/rickshaws; 30L for cars up to 800cc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>SMS Shortcode:</strong> 9771 is the official, operational telecommunication gateway.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Rollout Timeline:</strong> Islamabad live as of Sept 14–15; nationwide activation 11:59 PM Sept 16, 2026.</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 space-y-3">
                <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold">
                  <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <span>Unconfirmed / Watch for Official Updates</span>
                </div>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Web Portal / Mobile App:</strong> There is currently <em>NO authorized standalone website or mobile app</em> for registration. 9771 SMS is the only live channel. Do NOT download unofficial APKs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Rural / Independent Pumps:</strong> Major OMCs (PSO, Total Parco, Shell) have POS terminals active first. Smaller dealer pumps in remote rural sectors may take additional days to integrate POS connectivity.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>BISP / Poverty Score Link:</strong> Initial rollout is vehicle-based (≤800cc/2-wheelers + excise check). A potential secondary filter via PMT score has been discussed in cabinet but is not currently active for 9771 SMS approval.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CRITICAL ELIGIBILITY CAVEATS (OPEN LETTER & EXCISE) */}
          <section className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white space-y-5">
            <div className="flex items-center gap-2.5 text-amber-400 font-serif font-extrabold text-xl">
              <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0" />
              <h2>Three Strict Technical Rules to Avoid Registration Rejection</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Thousands of citizens receive automated rejection SMS responses on 9771 due to three common compliance failures:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans pt-1">
              <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
                <span className="text-amber-400 font-mono font-bold uppercase text-[11px] block">Condition 1</span>
                <strong className="text-white block text-sm">SIM Must Match Applicant CNIC</strong>
                <p className="text-slate-300 leading-relaxed">
                  The mobile number sending the 9771 SMS must be registered under your own CNIC in the PTA database. If using a SIM registered in a parent&apos;s, spouse&apos;s, or friend&apos;s name, the SMS will be rejected.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
                <span className="text-amber-400 font-mono font-bold uppercase text-[11px] block">Condition 2</span>
                <strong className="text-white block text-sm">Vehicle in Your Own Name (No Open Letters)</strong>
                <p className="text-slate-300 leading-relaxed">
                  Vehicles bought on &quot;open transfer letters&quot; or still registered to a previous owner cannot be approved. The system verifies provincial Excise &amp; Taxation records. Transfer vehicle ownership to your CNIC first.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
                <span className="text-amber-400 font-mono font-bold uppercase text-[11px] block">Condition 3</span>
                <strong className="text-white block text-sm">One Vehicle Per CNIC Rule</strong>
                <p className="text-slate-300 leading-relaxed">
                  Citizens owning multiple vehicles (e.g., two motorcycles or a motorcycle and an 800cc car) can only claim subsidy on <strong>one vehicle per CNIC</strong>. The system will register the first valid submission.
                </p>
              </div>
            </div>
          </section>

          {/* KEY COMPARISON: SIDE-BY-SIDE OF 3 DISTINCT SCHEMES */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Avoid Confusion</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                Comparing 3 Distinct Transport Schemes (Petrol Relief vs. E-Bike vs. PAVE)
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Many citizens confuse the monthly petrol discount with electric bike distribution schemes. Understand the crucial differences:
              </p>
            </div>

            <ComparisonVisual
              titleEn="Petrol Relief vs. Punjab E-Bike Scheme vs. Federal PAVE"
              titleUr="پیٹرول ریلیف سکیم، پنجاب ای بائیک سکیم اور وفاقی پیو پروگرام میں فرق"
              subtitleEn="Distinct platforms, eligibility rules, funding mechanisms, and citizen benefits"
              subtitleUr="مختلف پورٹلز، اہلیت، فنڈنگ کے طریقہ کار اور شہریوں کے لیے فوائد"
              items={[
                {
                  titleEn: "Federal Petrol Relief Scheme 2026",
                  titleUr: "وفاقی پیٹرول ریلیف سکیم 2026",
                  subtitleEn: "SMS 9771 (Ministry of Petroleum)",
                  subtitleUr: "ایس ایم ایس 9771 (وزارت پیٹرولیم)",
                  badgeEn: "MONTHLY FUEL RELIEF (LIVE)",
                  badgeUr: "ماہانہ ایندھن ریلیف",
                  badgeVariant: "brass",
                  pointsEn: [
                    "Direct Rs. 100/litre discount on petrol at the pump.",
                    "Quota: 20L/mo for 2/3-wheelers; 30L/mo for ≤800cc cars.",
                    "Applies to existing conventional petrol vehicles.",
                    "Nationwide coverage across all provinces, ICT, AJK & GB.",
                    "Registered solely via SMS 9771; token generated via TOK to 9771.",
                  ],
                  features: [
                    { labelEn: "Registration Channel", valueEn: "SMS to 9771", isPositive: true },
                    { labelEn: "Benefit Type", valueEn: "Rs. 100/Litre Discount", isPositive: true },
                    { labelEn: "Target Vehicles", valueEn: "Motorcycles & ≤800cc Cars", isPositive: true },
                    { labelEn: "Monthly Cap", valueEn: "20L to 30L / month", isPositive: null },
                    { labelEn: "Scope", valueEn: "Nationwide (All Pakistan)", isPositive: true },
                  ],
                  recommendedForEn: "Daily commuters and small-car owners seeking immediate operational relief on monthly petrol expenses.",
                },
                {
                  titleEn: "CM Punjab E-Bike Scheme 2026",
                  titleUr: "وزیراعلیٰ پنجاب ای بائیک سکیم 2026",
                  subtitleEn: "bikes.punjab.gov.pk (BOP Financing)",
                  subtitleUr: "پورٹل bikes.punjab.gov.pk (بینک آف پنجاب)",
                  badgeEn: "STUDENT FINANCING (OPEN)",
                  badgeUr: "طلبہ فنانسنگ",
                  badgeVariant: "emerald",
                  pointsEn: [
                    "Financing to purchase brand-new electric motorcycles.",
                    "Expanded to 125,000+ electric bikes for Punjab students.",
                    "Zero down payment (waived by CM Maryam Nawaz); Rs. 90,000 govt cash grant.",
                    "Monthly installment ~Rs. 3,000/month with zero markup over 36 months.",
                    "Dedicated pink e-bikes for female students.",
                  ],
                  features: [
                    { labelEn: "Registration Channel", valueEn: "bikes.punjab.gov.pk", isPositive: true },
                    { labelEn: "Benefit Type", valueEn: "New Electric Motorcycle", isPositive: true },
                    { labelEn: "Target Vehicles", valueEn: "Regular Students (Punjab)", isPositive: true },
                    { labelEn: "Down Payment", valueEn: "Rs. 0 (Waived Off)", isPositive: true },
                    { labelEn: "Scope", valueEn: "Punjab Province Only", isPositive: null },
                  ],
                  recommendedForEn: "Students in Punjab wanting to transition permanently away from petrol to green electric mobility.",
                },
                {
                  titleEn: "Federal PAVE Electric Vehicle Program",
                  titleUr: "وفاقی پیو (PAVE) ای وی سبسڈی پروگرام",
                  subtitleEn: "pave.gov.pk (EDB / MoIP)",
                  subtitleUr: "پورٹل pave.gov.pk (وزارت صنعت و پیداوار)",
                  badgeEn: "FEDERAL EV GRANTS",
                  badgeUr: "وفاقی ای وی گرانٹس",
                  badgeVariant: "blue",
                  pointsEn: [
                    "Capital subsidy for commercial & consumer electric vehicle purchases.",
                    "Covers electric two-wheelers, e-rickshaws, and electric three-wheelers.",
                    "Upfront cash subsidy (Rs. 50,000 to Rs. 80,000) deposited directly via SBP.",
                    "Open to all Pakistani citizens nationwide.",
                    "Aimed at long-term decarbonization and green industrialization.",
                  ],
                  features: [
                    { labelEn: "Registration Channel", valueEn: "pave.gov.pk", isPositive: true },
                    { labelEn: "Benefit Type", valueEn: "Direct Capital Cash Grant", isPositive: true },
                    { labelEn: "Target Vehicles", valueEn: "Commercial & Private EVs", isPositive: true },
                    { labelEn: "Down Payment", valueEn: "Paid to Dealership", isPositive: null },
                    { labelEn: "Scope", valueEn: "All Pakistan (Federal)", isPositive: true },
                  ],
                  recommendedForEn: "Transporters, delivery riders, and businesses buying new commercial or consumer electric vehicles.",
                },
              ]}
            />
          </section>

          {/* CROSS-LINK PROMO CARD TO E-BIKE SCHEME */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-900 to-teal-900 text-white shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-emerald-300 font-mono text-[10px] uppercase font-bold tracking-wider block">
                Looking for Electric Bike Subsidies Instead?
              </span>
              <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                CM Punjab Student E-Bike Scheme (125,000+ Bikes • Zero Down Payment)
              </h3>
              <p className="text-xs text-emerald-100 max-w-xl">
                If you are a regular student in Punjab, applications are open on <code className="text-white font-mono bg-emerald-800/80 px-1 rounded">bikes.punjab.gov.pk</code> until October 4, 2026. Get a brand-new electric bike with PKR 0 advance and PKR 3,028/month installments.
              </p>
            </div>
            <Link
              href="/education/cm-punjab-e-bike-scheme-2026-eligibility-apply"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-emerald-900 font-bold text-xs hover:bg-emerald-50 transition shadow shrink-0"
            >
              <span>View E-Bike Guide →</span>
            </Link>
          </div>

          {/* SCAM WARNING & SAFETY DIRECTIVE */}
          <section className="p-6 sm:p-8 rounded-3xl bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-300 dark:border-rose-800 space-y-4">
            <div className="flex items-center gap-2.5 text-rose-800 dark:text-rose-300 font-serif font-extrabold text-xl">
              <AlertTriangle className="w-6 h-6 text-rose-600 dark:text-rose-400 shrink-0" />
              <h2>Scam Alert: 9771 Is 100% Free — Beware of Fake Links &amp; Callers</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              With high public interest, cybercriminals have created fraudulent WhatsApp groups, fake Facebook ads, and phishing websites mimicking official government portals. Protect yourself:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs font-sans">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900 space-y-1.5">
                <strong className="text-rose-700 dark:text-rose-400 block font-bold">Only SMS Shortcode 9771</strong>
                <p className="text-slate-600 dark:text-slate-300">
                  The government has NOT authorized any 11-digit mobile numbers (e.g., 0300, 0315) or WhatsApp bots for registration. Never send CNIC or OTPs to personal phone numbers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900 space-y-1.5">
                <strong className="text-rose-700 dark:text-rose-400 block font-bold">No Registration Fee</strong>
                <p className="text-slate-600 dark:text-slate-300">
                  Sending SMS to 9771 costs standard telco SMS rates (approx. Rs. 1–2). There is ZERO registration or token fee. Anyone asking for payment via JazzCash or EasyPaisa is an illegal fraudster.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900 space-y-1.5">
                <strong className="text-rose-700 dark:text-rose-400 block font-bold">No APKs or Phishing Forms</strong>
                <p className="text-slate-600 dark:text-slate-300">
                  Do not install APK files or submit your vehicle registration book photos on unofficial third-party blogs. There is no mobile application for the 9771 fuel scheme yet.
                </p>
              </div>
            </div>
          </section>

          {/* Ad Zone */}
          <AdPlacementZone format="horizontal" />

          {/* Related Energy & Licensing Links */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
              <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
                Related Transport &amp; Energy Utilities on Pakistan Info Hub
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link
                href="/traffic/punjab-excise-vehicle-verification-2026"
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
              >
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Excise Database</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  Punjab Vehicle Verification →
                </h3>
                <p className="text-xs text-slate-500 mt-1">Verify vehicle ownership, engine cc, and registration date online.</p>
              </Link>

              <Link
                href="/traffic/driving-license-status-check-online-2026"
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
              >
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Licensing</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  DLIMS Driving License Status →
                </h3>
                <p className="text-xs text-slate-500 mt-1">Check online status of your motorcycle and car driving license.</p>
              </Link>

              <Link
                href="/bills/utility-bill-checker-2026"
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
              >
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Energy Relief</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  Utility Bill Checker 2026 →
                </h3>
                <p className="text-xs text-slate-500 mt-1">Check electricity, gas, and water bill subsidies and tariffs.</p>
              </Link>
            </div>
          </section>

          {/* FAQ Accordion Visual */}
          <FAQAccordionVisual
            titleEn="Frequently Asked Questions: Petrol Relief Scheme 2026"
            titleUr="عام طور پر پوچھے جانے والے ضروری سوالات و جوابات"
            subtitleEn="Verified answers on engine eligibility, 9771 registration errors, monthly quotas, and pump redemption"
            subtitleUr="انجن کی گنجائش، 9771 ایس ایم ایس ایررز، ماہانہ کوٹہ اور پمپ پر رعایت سے متعلق جوابات"
            items={[
              {
                questionEn: "Am I eligible if I own a 1,000cc car like Suzuki Cultus or Wagon R?",
                questionUr: "کیا 1000 سی سی گاڑی (مثلاً کلٹس یا ویگن آر) والے افراد بھی اس سکیم کے لیے اہل ہیں؟",
                answerEn: "No. The Prime Minister's Petrol Relief Scheme strictly caps four-wheeled motor vehicles at an engine capacity of 800cc. Popular eligible models include Suzuki Mehran (796cc), Suzuki Alto (658cc / 800cc), Daihatsu Cuore (847cc/800cc variants under excise classification), and Prince Pearl. Cars with 1,000cc or larger engines (such as Suzuki Cultus, Wagon R, Swift, Toyota Vitz, Yaris, or Honda City) are strictly excluded from the fuel subsidy.",
                answerUr: "بالکل نہیں۔ پیٹرول ریلیف سکیم کے تحت 4 ویلرز کے لیے زیادہ سے زیادہ حد 800 سی سی رکھی گئی ہے۔ اس میں سوزوکی مہران، سوزوکی آلٹو (660 سی سی)، ڈائی ہاٹسو کورے اور پرنس پرل وغیرہ شامل ہیں۔ 1000 سی سی یا اس سے بڑی گاڑیاں (جیسے کلٹس، ویگن آر، وٹز یا سٹی) اس سبسڈی کے لیے اہل نہیں ہیں۔",
              },
              {
                questionEn: "How do I register for the petrol relief scheme?",
                questionUr: "پیٹرول ریلیف سکیم کے لیے رجسٹریشن کا طریقہ کار کیا ہے؟",
                answerEn: "You register by sending an SMS to 9771 from a mobile SIM registered under your own CNIC. Use the format: REG [CNIC without dashes] [Vehicle Registration Number] [Province Code] [Registration Date DDMMYYYY]. For example: REG 3520112345671 LEB1234 P 15032021. Province codes are: I (Islamabad), P (Punjab), S (Sindh), K (KPK), B (Balochistan), A (AJK), and G (GB).",
                answerUr: "رجسٹریشن کے لیے اپنے شناختی کارڈ پر رجسٹرڈ سم سے 9771 پر میسج بھیجیں: REG [شناختی کارڈ بغیر ڈیش] [گاڑی نمبر] [صوبائی کوڈ] [رجسٹریشن تاریخ DDMMYYYY]۔ مثال کے طور پر: REG 3520112345671 LEB1234 P 15032021۔ صوبائی کوڈز: I (اسلام آباد)، P (پنجاب)، S (سندھ)، K (خیبر پختونخوا)، B (بلوچستان)، A (آزاد کشمیر)، اور G (گلگت بلتستان) ہیں۔",
              },
              {
                questionEn: "When does the scheme start in my city?",
                questionUr: "یہ سکیم میرے شہر میں کب سے شروع ہو رہی ہے؟",
                answerEn: "The scheme became operational in Islamabad Capital Territory starting from midnight between September 14 and 15, 2026. The nationwide rollout across all four provinces (Punjab, Sindh, Khyber Pakhtunkhwa, Balochistan) as well as Azad Jammu & Kashmir and Gilgit-Baltistan starts at 11:59 PM on September 16, 2026 (night of September 16–17, 2026).",
                answerUr: "یہ سکیم اسلام آباد میں 14 اور 15 ستمبر 2026 کی درمیانی رات سے لائیو ہو چکی ہے۔ جبکہ ملک کے باقی تمام صوبوں (پنجاب، سندھ، خیبر پختونخوا، بلوچستان، آزاد کشمیر اور گلگت بلتستان) میں یہ سکیم 16 ستمبر 2026 کی رات 11:59 بجے (16 اور 17 ستمبر کی درمیانی شب) سے نافذ العمل ہو رہی ہے۔",
              },
              {
                questionEn: "Is this scheme the same as the Electric Bike Scheme?",
                questionUr: "کیا یہ سکیم الیکٹرک بائیک سکیم جیسی ہی ہے؟",
                answerEn: "No. The Petrol Relief Scheme is a federal operational discount providing Rs. 100/litre relief on monthly petrol purchases for owners of existing petrol-powered motorcycles, rickshaws, and small cars. In contrast, the CM Punjab E-Bike Scheme is an asset financing program providing 125,000+ new electric motorcycles to students in Punjab with zero down payment and ~Rs. 3,000/month installment plans.",
                answerUr: "نہیں، یہ دونوں بالکل الگ سکیمیں ہیں۔ پیٹرول ریلیف سکیم عام پیٹرول والی بائیک اور چھوٹی گاڑیوں کے ایندھن پر ماہانہ 100 روپے فی لیٹر رعایت دیتی ہے۔ جبکہ وزیراعلیٰ پنجاب ای بائیک سکیم طلبہ کو نئی الیکٹرک موٹرسائیکل خریدنے کے لیے بلاسود اقساط اور صفر ڈاؤن پیمنٹ کی سہولت فراہم کرتی ہے۔",
              },
              {
                questionEn: "What happens if my vehicle is registered in someone else's name or on an open letter?",
                questionUr: "اگر میری گاڑی کسی اور کے نام پر ہے یا اوپن لیٹر پر ہے تو کیا ریلیف ملے گا؟",
                answerEn: "No, your registration will be automatically rejected. The central verification server matches your CNIC against the provincial Excise & Taxation department records. If the vehicle is registered under a previous owner's CNIC, the system will state 'Record Mismatch'. You must complete the legal transfer of vehicle ownership to your own CNIC at your local excise office before applying on 9771.",
                answerUr: "ایسی صورت میں رجسٹریشن خودکار طور پر مسترد ہو جائے گی۔ سسٹم آپ کا شناختی کارڈ صوبائی ایکسائز ڈیٹا بیس سے میچ کرتا ہے۔ اگر گاڑی پرانے مالک کے نام پر ہے تو 'Record Mismatch' کا میسج آئے گا۔ ریلیف حاصل کرنے کے لیے ایکسائز دفتر سے گاڑی کی ٹرانسفر اپنے شناختی کارڈ پر کروانا لازمی ہے۔",
              },
            ]}
          />
        </article>
      </main>
    </>
  );
}
