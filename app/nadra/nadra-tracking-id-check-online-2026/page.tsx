import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, FAQAccordionVisual } from '@/components/visuals';
import {
  HelpCircle,
  ExternalLink,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  Smartphone,
  Truck,
  FileText,
  Search,
  ArrowRight,
  Sparkles,
  Info,
  Check,
  XCircle,
  PhoneCall,
  Hash,
  Layers,
  MapPin,
  Calendar
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NADRA Tracking ID Check Online 2026 – CNIC Status via 8400 SMS & Portal',
  description:
    'Complete guide to NADRA Tracking ID check online: Track CNIC, NICOP, and FRC status via SMS 8400 or id.nadra.gov.pk. Understand status meanings (In Process, Dispatched, Objection), receipt token format, and courier tracking.',
  keywords: [
    'nadra tracking id check online 2026',
    'nadra tracking',
    'nadra id card tracking',
    'how to track nadra id card',
    'nadra card tracking',
    'nadra tracking 8400 sms format',
    'pak identity tracking portal',
    'nadra tracking status meanings',
    'nadra cnic dispatched courier tracking',
    'nadra objection raised solution',
  ],
  openGraph: {
    title: 'NADRA Tracking ID Check Online 2026 – CNIC Status via 8400 & Portal',
    description:
      'Track your NADRA CNIC, NICOP, or FRC application instantly. Verified guide covering SMS 8400 syntax, Pak-ID web dashboard, tracking ID token slip location, and status meanings.',
    url: 'https://www.pakistaninfohub.com/nadra/nadra-tracking-id-check-online-2026',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/nadra/nadra-tracking-id-check-online-2026' },
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
          name: 'NADRA Tracking ID Check Online 2026',
          item: 'https://www.pakistaninfohub.com/nadra/nadra-tracking-id-check-online-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'NADRA Tracking ID Check Online 2026: Check CNIC Status via SMS 8400 & Pak-ID Portal',
      description:
        'Authoritative public manual detailing how to track NADRA CNIC, Smart Card, NICOP, and FRC applications online and via SMS 8400, including tracking ID token slips, status code definitions, and courier delivery.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-03',
      dateModified: '2026-09-03',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/nadra/nadra-tracking-id-check-online-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Check Your NADRA Tracking ID Status Online and via SMS',
      description: 'Step-by-step verified procedure for tracking your national identity card application in Pakistan.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Locate Your 10 to 12-Digit Tracking ID',
          text: 'Check the top-left or top-right portion of your original printed NADRA token receipt slip (e.g. 100123456789). On digital Pak-ID applications, check your Application Inbox tracking reference.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Method A: Send SMS to 8400',
          text: 'From any Pakistani mobile number (Jazz, Zong, Telenor, Ufone), write your Tracking ID without hyphens or spaces and send it to shortcode 8400. You will receive an automated status SMS within 60 seconds.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Method B: Check Online via Pak-ID Portal',
          text: 'Visit the official Pak-ID portal (id.nadra.gov.pk) or open the Pak Identity app. Log into your account to inspect detailed logistical milestones, courier tracking codes, and biometric verification status.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Interpret Status & Track Courier',
          text: 'If your status displays "Dispatched", note the courier consignment number (TCS or Pakistan Post) to track home delivery, or visit your registered NRC if "Ready for Collection" is shown.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where do I find my NADRA Tracking ID on the token receipt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your Tracking ID is a 10 to 12-digit computerized sequence printed clearly at the top of the paper receipt (token slip) given to you by the data entry operator at the NADRA Registration Center (NRC) after biometric capture and fee payment. For online applications, it appears as the "Application Tracking ID" in your Pak-ID portal dashboard.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does it cost to check NADRA tracking status via SMS 8400?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sending an SMS to shortcode 8400 costs approximately Rs. 2 + applicable federal/provincial telecom taxes across all Pakistani cellular networks (Jazz, Zong, Telenor, Ufone). In contrast, online tracking on id.nadra.gov.pk and the Pak-ID app is 100% free of charge.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does "Card Sent for Printing" status mean?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This status means your personal data, photograph, signatures, and biometric fingerprint clearances have been successfully verified and approved by NADRA HQ. Your physical chip-based Smart CNIC has entered the automated laser printing and personalization queue at NADRA’s central production facility in Islamabad.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does "Dispatched" mean, and how can I track the courier?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When your status changes to "Dispatched", your card has been packaged and handed over to NADRA’s contracted delivery partner (usually TCS Express Courier or Pakistan Post Urgent Mail Service). You will receive an automated SMS containing a courier consignment tracking number, which you can paste into the courier tracking website to view real-time delivery to your doorstep.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if my tracking status shows "Objection Raised" or "Deferred"?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An "Objection Raised" or "Deferred" status indicates an administrative hold—typically caused by a biometric fingerprint quality query, missing gazette documentation for name changes, or a family tree discrepancy. If you applied online, log in to id.nadra.gov.pk to view the specific objection note. If you applied at an NRC, visit the same center with your original token slip and relevant supporting documents to clear the hold.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I track a lost or forgotten Tracking ID using just my CNIC number?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If you applied online via Pak-ID, you can easily retrieve your Tracking ID by logging in with your registered email and password. If you applied at a physical NRC and lost your paper token, SMS 8400 requires the Tracking ID, not your CNIC number. To retrieve your lost token number, you must call the NADRA Helpline at 1777 (mobile) or 051-111-786-100, or visit your nearest NRC counter with your original CNIC copy.',
          },
        },
      ],
    },
  ],
};

export default function NadraTrackingIdPage() {
  const breadcrumbs = [
    { nameEn: 'NADRA Services', nameUr: 'نادرا سروسز', url: '/nadra' },
    { nameEn: 'NADRA Tracking ID Check Online 2026', nameUr: 'نادرا ٹریکنگ آئی ڈی چیک آن لائن 2026' },
  ];

  const trackingSteps = [
    {
      number: 1,
      icon: <FileText className="w-5 h-5" />,
      titleEn: 'Locate Token Tracking ID',
      titleUr: 'رسید سے ٹریکنگ نمبر دیکھیں',
      descEn: 'Find the 10 to 12-digit tracking number printed near the barcode at the top of your NADRA counter token slip.',
      descUr: 'نادرا سینٹر کی فیس رسید پر بارکوڈ کے ساتھ لکھا 10 سے 12 ہندسوں کا ٹریکنگ نمبر تلاش کریں۔',
      tagEn: '10–12 Digits',
      tagUr: '10 تا 12 ہندسے',
    },
    {
      number: 2,
      icon: <Smartphone className="w-5 h-5" />,
      titleEn: 'Send SMS to 8400 (or Web)',
      titleUr: '8400 پر ایس ایم ایس یا پورٹل',
      descEn: 'Send your clean Tracking ID without hyphens to shortcode 8400 (Rs. 2+tax) or check free on id.nadra.gov.pk.',
      descUr: 'بغیر ڈیش کے ٹریکنگ نمبر 8400 پر بھیجیں یا پاک آئی ڈی ویب سائٹ پر فری سٹیٹس دیکھیں۔',
      tagEn: 'Fastest Way',
      tagUr: 'فوری طریقہ',
    },
    {
      number: 3,
      icon: <Clock className="w-5 h-5" />,
      titleEn: 'Read Status Code & Date',
      titleUr: 'مرحلہ وار سٹیٹس اور تفصیل',
      descEn: 'Instant automated reply confirms whether your application is In Process, Sent for Printing, or Dispatched.',
      descUr: 'میسج میں دیکھیں کہ شناختی کارڈ پراسیس میں ہے، پرنٹنگ کے لیے بھیج دیا گیا ہے یا روانہ ہو چکا ہے۔',
      tagEn: 'Live Status',
      tagUr: 'لائیو اپڈیٹ',
    },
    {
      number: 4,
      icon: <Truck className="w-5 h-5" />,
      titleEn: 'Courier Tracking or NRC Pickup',
      titleUr: 'کوریئر ہوم ڈلیوری یا سینٹر سے وصولی',
      descEn: 'If dispatched, monitor TCS/Pakistan Post parcel tracking, or collect from your selected NRC branch with original slip.',
      descUr: 'ڈسپیچ ہونے کی صورت میں کوریئر ٹریک کریں یا اپنی اصل ٹوکن رسید لے کر متعلقہ نادرا سینٹر پہنچیں۔',
      tagEn: 'Delivery Phase',
      tagUr: 'وصولی مرحلہ',
    },
  ];

  const statusDefinitions = [
    {
      statusEn: 'Application Submitted / In Process',
      statusUr: 'درخواست موصول / پراسیس میں',
      badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 border-blue-200 dark:border-blue-800',
      descEn: 'Your documents and biometric capture were received. Internal verification and security cross-checks against the national database are underway. Normal timeline: 10–25 working days depending on delivery tier.',
      descUr: 'آپ کا ڈیٹا اور فنگر پرنٹ نادرا سسٹم میں کامیابی سے درج ہو چکے ہیں اور قواعد کے مطابق تصدیق کا عمل جاری ہے۔',
      actionEn: 'No action required. Allow processing days according to your service tier (Normal, Urgent, Executive).',
    },
    {
      statusEn: 'Approved & Sent for Printing',
      statusUr: 'منظور شدہ / پرنٹنگ پریس میں',
      badge: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 border-amber-200 dark:border-amber-800',
      descEn: 'Biometrics, photo, and family tree records have passed verification. Your Smart CNIC card chip and high-security polycarbonate card are being personalized at NADRA HQ in Islamabad.',
      descUr: 'تمام کوائف اور بائیو میٹرک منظور ہو چکے ہیں۔ سمارٹ کارڈ اسلام آباد ہیڈ کوارٹر میں پرنٹنگ کے عمل میں ہے۔',
      actionEn: 'Card printing completes in 2–4 days. Next update will confirm handover to dispatch.',
    },
    {
      statusEn: 'Printed & Dispatched',
      statusUr: 'پرنٹ مکمل / روانہ کر دیا گیا',
      badge: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
      descEn: 'Your card has been printed and handed over to the courier (TCS Express or Pakistan Post UMS). An automated SMS notification provides the parcel consignment tracking number.',
      descUr: 'کارڈ پرنٹ ہو کر کوریئر کے حوالے کر دیا گیا ہے۔ آپ کو ٹریکنگ نمبر بذریعہ ایس ایم ایس موصول ہو گا۔',
      actionEn: 'Copy the consignment number to TCS/Pakistan Post website. Delivery to major cities takes 24–48 hours.',
    },
    {
      statusEn: 'Ready for Collection (At NRC)',
      statusUr: 'سینٹر پر تیار برائے وصولی',
      badge: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300 border-purple-200 dark:border-purple-800',
      descEn: 'If you chose in-person collection at an NRC center instead of home delivery, your physical smart card is stored in the dispatch counter vault of your applied branch.',
      descUr: 'اگر آپ نے سینٹر سے وصولی کا انتخاب کیا تھا تو آپ کا شناختی کارڈ متعلقہ نادرا سینٹر کے ڈلیوری کاؤنٹر پر موجود ہے۔',
      actionEn: 'Visit the NRC in person with your original token receipt slip and old CNIC (if renewing) to collect your new card.',
    },
    {
      statusEn: 'Objection Raised / Deferred',
      statusUr: 'اعتراض / التوا کا شکار',
      badge: 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300 border-rose-200 dark:border-rose-800',
      descEn: 'A discrepancy occurred—such as fingerprint smearing, a name spelling variation requiring gazette/school proof, or an unverified family member listed under your tree.',
      descUr: 'درخواست میں کسی قسم کا اعتراض سامنے آیا ہے (مثلاً فنگر پرنٹ میں خرابی، خاندانی شجرہ میں ابہام یا دستاویزی کمی)۔',
      actionEn: 'Log in to id.nadra.gov.pk to read the specific note, or visit the applied NRC counter with original documents.',
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
            <InteractiveToolBadge labelEn="NADRA TRACKING SERVICE 2026" labelUr="نادرا شناختی کارڈ ٹریکنگ" variant="navy" />
            <VerifiedBadge textEn="SMS 8400 & PAK-ID PORTAL VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            NADRA Tracking ID Check Online 2026: Check CNIC Status via SMS 8400 &amp; Portal
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              نادرا ٹریکنگ آئی ڈی چیک آن لائن: 8400 ایس ایم ایس اور پاک آئی ڈی پورٹل سے سٹیٹس معلوم کریں
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Wondering when your Smart CNIC, NICOP, or Family Registration Certificate (FRC) will arrive? Use this complete, verified guide to check your application progress using your official <strong>Tracking ID</strong> via SMS 8400 or the official Pak-ID web dashboard.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Check Your NADRA Tracking ID Status in Pakistan (2026)"
          topicTitleUr="نادرا ٹریکنگ آئی ڈی کا سٹیٹس کیسے چیک کریں؟"
          answerEn="To track your NADRA application: Send your 10 to 12-digit Tracking ID via SMS to shortcode 8400 (costs approx Rs. 2 + tax across Jazz, Zong, Telenor, and Ufone) or visit id.nadra.gov.pk to track for free online. The automated system returns your exact processing milestone: In Process, Approved & Sent for Printing, Dispatched (with courier tracking number), Ready for Collection at NRC, or Objection Raised."
          answerUr="اپنے نادرا شناختی کارڈ، نائیکوپ یا ایف آر سی کی تیاری کی صورتحال جاننے کے لیے رسید پر درج 10 سے 12 ہندسوں کی ٹریکنگ آئی ڈی لکھ کر 8400 پر ایس ایم ایس بھیجیں (فیس 2 روپے جمع ٹیکس) یا سرکاری پورٹل id.nadra.gov.pk پر مفت چیک کریں۔ فوری جوابی پیغام میں آپ کو بتایا جائے گا کہ کارڈ زیرِ پروسیس ہے، پرنٹنگ کے لیے بھیج دیا گیا ہے، یا بذریعہ کوریئر ارسال کر دیا گیا ہے۔"
        />

        {/* Conversational Intro Box */}
        <section className="p-6 rounded-2xl bg-amber-50/70 dark:bg-slate-900/80 border border-amber-200/80 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-doc-seal dark:text-amber-400 font-serif font-bold text-lg">
            <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
            <span>Tracking Verification Overview (2026 Update)</span>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Every citizen who applies for an identity document at a NADRA Registration Center (NRC), an Executive Mega Center, or through the Pak-ID mobile app receives a computer-generated <strong>Tracking ID</strong>. This unique sequence is the master key to your file: you do not need to stand in long queues or pay private agents to inquire about your card. Below is everything you need to decode your tracking receipt, query the official databases, and track courier logistics to your doorstep.
          </p>
        </section>

        {/* Tracking ID Anatomy Guide */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Documentation Aid</span>
              <h2 className="font-serif font-extrabold text-xl sm:text-2xl text-doc-ink dark:text-white">
                Where is the Tracking ID on Your NADRA Receipt Slip?
              </h2>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold">
              TOKEN ANATOMY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="flex items-center gap-2 font-serif font-bold text-base text-doc-ink dark:text-white">
                <Hash className="w-5 h-5 text-doc-seal dark:text-amber-400" />
                <span>Physical NRC Counter Token Slip</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                When you visit an NRC or Mega Center, the fee counter clerk hands you a printed thermal receipt paper. Look at the <strong>top header</strong> right below the NADRA emblem:
              </p>
              <div className="p-3 rounded-lg bg-slate-900 text-emerald-400 font-mono text-xs sm:text-sm space-y-1">
                <p className="text-slate-400"># SAMPLE TOKEN RECEIPT HEADER</p>
                <p className="text-white font-bold">NADRA REGISTRATION CENTER ISLAMABAD</p>
                <p><span className="text-amber-300 font-bold">Tracking ID:</span> 100482910482</p>
                <p><span className="text-slate-400">Token No:</span> NRC-042 | <span className="text-slate-400">Date:</span> 03/09/2026</p>
                <p><span className="text-slate-400">Service:</span> Smart CNIC (Urgent 15 Days)</p>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tip: The sequence is always numeric (10 to 12 digits). Do not confuse it with your counter queue token number (e.g. &apos;A-12&apos;).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="flex items-center gap-2 font-serif font-bold text-base text-doc-ink dark:text-white">
                <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Pak-ID Online / Mobile App Applications</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                If you applied through the <strong>Pak Identity</strong> web portal or mobile app for card renewal or modification:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Log in with your registered email and password at <strong>id.nadra.gov.pk</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Click on <strong>Existing Applications</strong> or <strong>Application Inbox</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Your 10 to 12-digit Tracking Reference is prominently listed alongside the payment receipt.</span>
                </li>
              </ul>
              <div className="pt-2">
                <a
                  href="https://id.nadra.gov.pk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <span>Open Official Pak-ID Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps Diagram */}
        <ProcessStepsDiagram
          badgeEn="OFFICIAL PROCEDURE 2026"
          badgeUr="سرکاری طریقہ کار"
          titleEn="Step-by-Step NADRA Application Tracking Workflow"
          titleUr="نادرا ٹریکنگ سٹیٹس چیک کرنے کا مرحلہ وار طریقہ"
          subtitleEn="Follow these 4 verified steps to query your national identity card, NICOP, or juvenile registration status."
          subtitleUr="اپنے شناختی کارڈ یا نائیکوپ کی تیاری کا سٹیٹس معلوم کرنے کے لیے ان چار مصدقہ مراحل پر عمل کریں۔"
          steps={trackingSteps}
        />

        {/* Status Code Meanings Breakdown */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Status Code Glossary</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
              What Does Your NADRA Tracking Status Mean?
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              When you send an SMS to 8400 or check online, you will receive one of the following official status descriptions. Here is what each status signifies and what action you should take.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {statusDefinitions.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3 transition-all hover:border-doc-brass/50"
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-mono font-bold text-xs text-doc-ink dark:text-white">
                      {idx + 1}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
                      {item.statusEn}
                    </h3>
                  </div>
                  <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold border ${item.badge}`}>
                    {item.statusUr}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.descEn}
                </p>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                  <Info className="w-4 h-4 text-doc-brass shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-doc-ink dark:text-white">Action to Take: </strong>
                    {item.actionEn}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Courier Dispatch & Delivery Tracking Section */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white space-y-6">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Truck className="w-4 h-4" />
            <span>Logistics & Courier Delivery</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold tracking-tight">
            How to Track Your Physical CNIC Delivery After Dispatch
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            Once NADRA prints your Smart CNIC, it is assigned a courier parcel tracking number. How you receive it depends on the collection option you selected when applying:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2.5">
              <h3 className="font-serif font-bold text-base text-amber-300">Option 1: Home Courier Delivery</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Available for Pak-ID online applications and Executive NRC counters. TCS Express Courier or Pakistan Post delivers directly to your present address. The postman/courier driver requires biometric fingerprint verification or the original old CNIC of the recipient.
              </p>
              <div className="pt-1 text-xs text-slate-400">
                Tracking URL:{' '}
                <a
                  href="https://www.tcsexpress.com/tracking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline inline-flex items-center gap-1 font-mono"
                >
                  tcsexpress.com <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2.5">
              <h3 className="font-serif font-bold text-emerald-400">Option 2: NRC Counter Collection</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Standard for normal fee applicants. When your tracking status confirms <strong>Ready for Collection</strong>, visit the specific NRC where you applied. Bring your original paper token receipt slip and old CNIC (which the clerk clips and cancels).
              </p>
              <div className="pt-1 text-xs text-slate-400">
                Helpline for queries: <strong className="text-white font-mono">1777</strong> (Mobile shortcode)
              </div>
            </div>
          </div>
        </section>

        {/* Processing Timelines Comparison */}
        <section className="space-y-4">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Delivery Timelines</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
              Expected Tracking Time by Service Tier (2026)
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              Before raising an inquiry or complaint, check whether your application is still within the official statutory delivery period.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
              <thead className="bg-slate-100 dark:bg-slate-800 font-serif font-bold text-doc-ink dark:text-white">
                <tr>
                  <th className="p-3.5 border-b border-slate-200 dark:border-slate-700">Application Tier</th>
                  <th className="p-3.5 border-b border-slate-200 dark:border-slate-700">Official Fee (Smart Card)</th>
                  <th className="p-3.5 border-b border-slate-200 dark:border-slate-700">Official Delivery Window</th>
                  <th className="p-3.5 border-b border-slate-200 dark:border-slate-700">Typical Tracking Update Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="p-3.5 font-bold text-doc-ink dark:text-white">Normal Category</td>
                  <td className="p-3.5 font-mono">PKR 750 (Free for 1st-time age 18+)</td>
                  <td className="p-3.5">31 Calendar Days</td>
                  <td className="p-3.5 text-xs text-slate-500">Status changes to &apos;Sent for Printing&apos; around Day 18–22.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-doc-ink dark:text-white">Urgent Category</td>
                  <td className="p-3.5 font-mono">PKR 1,500</td>
                  <td className="p-3.5">15 Calendar Days</td>
                  <td className="p-3.5 text-xs text-slate-500">Status changes to &apos;Sent for Printing&apos; around Day 7–10.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-doc-ink dark:text-white">Executive Category</td>
                  <td className="p-3.5 font-mono">PKR 2,500</td>
                  <td className="p-3.5 font-bold text-emerald-600 dark:text-emerald-400">7 Calendar Days</td>
                  <td className="p-3.5 text-xs text-slate-500">Status updates within 48–72 hours; express courier dispatch.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Ad Zone */}
        <AdPlacementZone format="horizontal" />

        {/* Cross-linking Section */}
        <section className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h2 className="font-serif font-extrabold text-xl text-doc-ink dark:text-white">
            Related NADRA Identity Guides &amp; Checkers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            <Link
              href="/nadra/cnic-new-rules-2026"
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex items-center justify-between group"
            >
              <span className="font-bold text-doc-ink dark:text-white group-hover:text-doc-seal">CNIC New Rules 2026</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-doc-seal" />
            </Link>
            <Link
              href="/nadra/nicop-fee-calculator"
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex items-center justify-between group"
            >
              <span className="font-bold text-doc-ink dark:text-white group-hover:text-doc-seal">NICOP Fee Calculator</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-doc-seal" />
            </Link>
            <Link
              href="/nadra/b-form-frc-status-check"
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex items-center justify-between group"
            >
              <span className="font-bold text-doc-ink dark:text-white group-hover:text-doc-seal">B-Form &amp; FRC Status</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-doc-seal" />
            </Link>
            <Link
              href="/nadra/lost-stolen-cnic-replacement-2026"
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex items-center justify-between group"
            >
              <span className="font-bold text-doc-ink dark:text-white group-hover:text-doc-seal">Lost CNIC Replacement</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-doc-seal" />
            </Link>
          </div>
        </section>

        {/* FAQ Accordion Visual */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions: NADRA Tracking & Status 2026"
          titleUr="عام سوالات: نادرا ٹریکنگ اور شناختی کارڈ سٹیٹس"
          subtitleEn="Expert verified answers to the most common questions regarding 8400 SMS tracking, token slip recovery, and courier delays."
          subtitleUr="ایس ایم ایس 8400، گمشدہ ٹوکن اور کوریئر تاخیر کے بارے میں مصدقہ سوالات و جوابات۔"
          items={[
            {
              questionEn: "Where do I find my NADRA Tracking ID on the token receipt?",
              questionUr: "نادرا ٹریکنگ آئی ڈی فیس رسید پر کہاں لکھی ہوتی ہے؟",
              answerEn: "Your Tracking ID is a 10 to 12-digit computerized sequence printed clearly at the top of the paper receipt (token slip) given to you after biometric enrollment at the NADRA center counter. For online applications, it is the 'Application Tracking ID' in your Pak-ID portal inbox.",
              answerUr: "12 ہندسوں کا ٹریکنگ نمبر نادرا کاؤنٹر سے ملنے والی فیس رسید کے اوپر بارکوڈ کے قریب لکھا ہوتا ہے۔",
            },
            {
              questionEn: "How much does it cost to check NADRA tracking status via SMS 8400?",
              questionUr: "ایس ایم ایس 8400 کے ذریعے سٹیٹس معلوم کرنے پر کتنا بیلنس کٹتا ہے؟",
              answerEn: "Sending your Tracking ID to 8400 costs approximately Rs. 2 + applicable taxes per SMS across all Pakistani mobile networks (Jazz, Zong, Telenor, Ufone). Checking online at id.nadra.gov.pk is completely free.",
              answerUr: "8400 پر ایس ایم ایس بھیجنے پر تقریباً 2 روپے جمع ٹیکس لاگو ہوتا ہے جبکہ پورٹل پر چیک کرنا بالکل مفت ہے۔",
            },
            {
              questionEn: "What does 'Card Sent for Printing' status mean?",
              questionUr: "کارڈ کی پرنٹنگ کا سٹیٹس کا کیا مطلب ہے؟",
              answerEn: "It means all biometric, data, and family tree checks have passed. Your Smart CNIC chip and physical card are in the automated printing queue at NADRA HQ in Islamabad. Printing typically finishes in 2 to 4 working days.",
              answerUr: "اس کا مطلب ہے کہ تمام بائیو میٹرک اور نادرا ریکارڈز کلیئر ہو چکے ہیں اور کارڈ اسلام آباد پریس میں پرنٹ ہو رہا ہے۔",
            },
            {
              questionEn: "What does 'Dispatched' mean, and how can I track the courier?",
              questionUr: "ڈسپیچ کا کیا مطلب ہے اور پارسل کیسے ٹریک کریں؟",
              answerEn: "When your status shows 'Dispatched', the card has been packaged and handed over to TCS or Pakistan Post. You will receive an SMS containing a consignment tracking number to monitor live delivery on the courier website.",
              answerUr: "ڈسپیچ کا مطلب ہے کہ کارڈ کوریئر کے سپرد کر دیا گیا ہے۔ آپ کو کوریئر ٹریکنگ کوڈ کے ساتھ ایس ایم ایس موصول ہوگا۔",
            },
            {
              questionEn: "What should I do if my tracking status shows 'Objection Raised'?",
              questionUr: "اگر ٹریکنگ میں اعتراض یا التوا آ جائے تو کیا کرنا چاہیے؟",
              answerEn: "Log in to id.nadra.gov.pk to view the exact objection note (e.g. fingerprint smearing or gazette certificate required for name modification). If applied at an NRC, visit your center with original token slip and relevant supporting proof to clear the hold.",
              answerUr: "پاک آئی ڈی ویب سائٹ پر جا کر اعتراض کی وجہ دیکھ لیں یا اصل رسید کے ہمراہ متعلقہ نادرا سینٹر جا کر مسئلہ حل کروائیں۔",
            },
            {
              questionEn: "What if I lost my token receipt and do not know my Tracking ID?",
              questionUr: "اگر ٹوکن رسید گم ہو جائے تو ٹریکنگ نمبر کیسے معلوم کریں؟",
              answerEn: "If you applied online, simply log in to your Pak-ID account to view your Tracking ID. If you applied at an NRC, call the NADRA Helpline at 1777 (mobile) or 051-111-786-100, or visit any NRC counter with your original CNIC or B-Form number to retrieve your token details.",
              answerUr: "آن لائن پورٹل پر لاگ ان ہو کر ٹریکنگ نمبر دیکھ سکتے ہیں یا 1777 ہیلپ لائن پر کال کر کے اصل شناختی کارڈ نمبر بتا کر معلوم کریں۔",
            },
          ]}
        />
      </div>
    </>
  );
}
