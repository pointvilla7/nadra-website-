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
  ShieldCheck,
  Building2,
  FileCheck,
  Clock,
  Coins,
  Search,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Plane,
  Users
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hajj Balloting Result Check Online 2026 by CNIC & Bank Tracking | Pakistan Info Hub',
  description:
    'Check Government Hajj scheme balloting results 2026 online by 13-digit CNIC or bank tracking reference number. View successful applicant lists, waiting queue, and remaining fee submission deadlines.',
  keywords: [
    'hajj balloting result check online 2026',
    'government hajj scheme result 2026 by cnic',
    'ministry of religious affairs hajj list',
    'hajj tracking number check pakistan',
    'hajj lottery result 2026 pak',
  ],
  openGraph: {
    title: 'Hajj Balloting Result Check Online 2026 by CNIC & Bank Reference',
    description:
      'Live inquiry portal and verification guide for Ministry of Religious Affairs (MORA) Government Hajj balloting results.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/hajj-umrah/hajj-balloting-result-check-online',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/hajj-umrah/hajj-balloting-result-check-online' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com/' },
        { '@type': 'ListItem', position: 2, name: 'Hajj & Umrah', item: 'https://www.pakistaninfohub.com/hajj-umrah' },
        { '@type': 'ListItem', position: 3, name: 'Hajj Balloting Result Check Online', item: 'https://www.pakistaninfohub.com/hajj-umrah/hajj-balloting-result-check-online' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How can I check my Government Hajj balloting result online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Visit the official Ministry of Religious Affairs portal at hajjinfo.org or mopr.gov.pk, enter your 13-digit CNIC number without dashes (or your 7-digit bank tracking number), and click Search to see your selection status.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if my name is on the waiting list in the Hajj draw?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Applicants on the waiting list are offered slots on a strict priority basis as successful applicants cancel or fail to submit their final installment payments and medical fitness certificates before the designated deadline.',
          },
        },
      ],
    },
  ],
};

export default function HajjBallotingResultPage() {
  const breadcrumbs = [
    { nameEn: 'Hajj & Umrah', nameUr: 'حج و عمرہ', url: '/hajj-umrah' },
    { nameEn: 'Hajj Balloting Result', nameUr: 'حج قرعہ اندازی رزلٹ' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="HAJJ VERIFICATION" labelUr="حج تصدیق" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Hajj Balloting Result Check Online 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              سرکاری حج قرعہ اندازی رزلٹ آن لائن چیک (شناختی کارڈ اور ٹریکنگ نمبر سے)
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Verify your selection status in the Government Regular and Sponsorship Hajj scheme balloting administered by the Ministry of Religious Affairs &amp; Interfaith Harmony (MORA).
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Check Government Hajj Balloting Results (2026)"
          topicTitleUr="حج قرعہ اندازی کا رزلٹ آن لائن کیسے چیک کریں؟"
          answerEn="To check your Hajj balloting result: (1) Visit the official Ministry portal at hajjinfo.org or mopr.gov.pk. (2) Enter your 13-digit CNIC number without dashes or your 7-digit bank application reference number. (3) Click 'Search / تلاش کریں' to view your selection status, assigned group leader, and flight schedule quota. (4) If selected, pay the remaining installment at your designated bank branch within the announced window."
          answerUr="حج رزلٹ چیک کرنے کا طریقہ: (1) وزارت مذہبی امور کے پورٹل hajjinfo.org پر جائیں۔ (2) اپنا 13 ہندسوں کا شناختی کارڈ نمبر یا 7 ہندسوں کا بینک ٹریکنگ نمبر درج کریں۔ (3) 'سرچ' پر کلک کر کے اپنی کامیابی اور گروپ کی تفصیل دیکھیں۔ (4) منتخب ہونے کی صورت میں مقررہ دنوں کے اندر باقی ماندہ رقم بینک میں جمع کروائیں۔"
        />

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step Hajj Balloting Result &amp; Post-Selection Process (2026)"
          titleUr="حج قرعہ اندازی رزلٹ اور کامیابی کے بعد اگلے 4 ضروری مراحل"
          subtitleEn="From online verification to biometric capture, medical clearance, and flight allocation"
          subtitleUr="آن لائن رزلٹ چیک کرنے سے لے کر بائیومیٹرک اندراج، میڈیکل فٹنس اور پرواز کی روانگی تک کے مراحل"
          steps={[
            {
              number: 1,
              titleEn: "Check Status on MORA Portal",
              titleUr: "وزارت مذہبی امور کے پورٹل پر رزلٹ چیک کریں",
              descEn: "Visit hajjinfo.org or mopr.gov.pk; enter your 13-digit CNIC or bank tracking reference to verify selection.",
              descUr: "سرکاری پورٹل پر اپنا شناختی کارڈ یا بینک ریفرنس درج کر کے دیکھیں کہ آپ کا نام قرعہ اندازی میں منتخب ہوا ہے یا نہیں۔",
              tagEn: "Portal Check",
              tagUr: "آن لائن رزلٹ",
            },
            {
              number: 2,
              titleEn: "Deposit Remaining Package Dues",
              titleUr: "نامزد بینک برانچ میں باقی واجبات جمع کروائیں",
              descEn: "Successful pilgrims must deposit the second package installment at their designated bank branch before the cutoff date.",
              descUr: "کامیاب عازمین اپنے متعلقہ بینک میں حج پیکیج کی دوسری قسط مقررہ آخری تاریخ سے پہلے جمع کروائیں۔",
              tagEn: "Bank Payment",
              tagUr: "بینک ادائیگی",
            },
            {
              number: 3,
              titleEn: "Biometric & Medical Fitness Clearance",
              titleUr: "بائیومیٹرک اندراج اور میڈیکل فٹنس سرٹیفکیٹ",
              descEn: "Complete biometric fingerprint verification at Tasheel / Saudi Visa Bio app and obtain mandatory polio/meningitis vaccine card.",
              descUr: "سعودی ویزا بائیو ایپ یا سہولت سینٹر سے فنگر پرنٹس کروائیں اور سرکاری ہسپتال سے حفاظتی ویکسینیشن کارڈ حاصل کریں۔",
              tagEn: "Biometric & Health",
              tagUr: "بائیومیٹرک و ویکسین",
            },
            {
              number: 4,
              titleEn: "Haji Camp Training & Flight Schedule",
              titleUr: "حاجی کیمپ میں تربیتی سیشن اور پاسپورٹ وصولی",
              descEn: "Attend mandatory local Haji Camp training sessions, collect your passport and travel bag, and confirm your direct flight date.",
              descUr: "ضلعی حاجی کیمپ میں مناسک حج کی تربیت لیں، پیکیج سامان اور ویزا لگا پاسپورٹ حاصل کر کے فلائٹ کا انتظار کریں۔",
              tagEn: "Flight & Departure",
              tagUr: "پرواز و روانگی",
            },
          ]}
        />

        <AdPlacementZone format="horizontal" />

        {/* Section 1: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Hajj, Umrah &amp; Travel Utilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/hajj-umrah/nusuk-app-guide-pakistani-pilgrims-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Umrah Permits</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Nusuk App Guide 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Rawdah permit bookings and Umrah slot reservations on Nusuk.</p>
            </Link>

            <Link
              href="/passport/passport-new-rules-2026-cashless-epassport"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Passports</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Passport New Rules 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Cashless QR fee payments and 14-day delivery timeline.</p>
            </Link>

            <Link
              href="/overseas/nicop-mandatory-entry-rules-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Overseas</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NICOP Travel Rules 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Mandatory entry regulations for expatriates and overseas Pakistanis.</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Hajj Balloting & Results)"
          titleUr="حج قرعہ اندازی اور نتائج سے متعلق عام سوالات"
          subtitleEn="Essential guidelines on checking ballot status, sponsorship scheme exemptions, waiting lists, and refund policies"
          subtitleUr="نتائج کی تصدیق، اسپانسر شپ اسکیم کی چھوٹ، ویٹنگ لسٹ اور رقم کی واپسی کے قواعد"
          items={[
            {
              questionEn: "How can I check my Government Hajj balloting result online?",
              questionUr: "حج قرعہ اندازی کا نتیجہ آن لائن کیسے چیک کیا جا سکتا ہے؟",
              answerEn: "Visit the official Ministry of Religious Affairs portal at hajjinfo.org or mopr.gov.pk, enter your 13-digit CNIC number without dashes (or your 7-digit bank tracking number), and click Search to see your selection status.",
              answerUr: "وزارت مذہبی امور کی ویب سائٹ hajjinfo.org پر جا کر اپنا 13 ہندسوں کا شناختی کارڈ یا بینک ٹریکنگ نمبر درج کریں اور سرچ پر کلک کر کے فوری اسٹیٹس معلوم کریں۔",
            },
            {
              questionEn: "Is there a balloting draw for the Sponsorship Hajj Scheme?",
              questionUr: "کیا اسپانسر شپ حج اسکیم کے لیے بھی قرعہ اندازی ہوتی ہے؟",
              answerEn: "No. The Sponsorship Hajj Scheme (funded in foreign USD remittances by overseas sponsors) is exempt from lottery balloting and processed on a first-come, first-served basis up to the allocated quota.",
              answerUr: "نہیں! اسپانسر شپ اسکیم (جو غیر ملکی زرمبادلہ ڈالرز میں جمع ہوتی ہے) قرعہ اندازی سے مستثنیٰ ہوتی ہے اور درخواست دہندگان کو براہ راست منتخب کیا جاتا ہے۔",
            },
            {
              questionEn: "What happens if my name is on the waiting list in the Hajj draw?",
              questionUr: "اگر قرعہ اندازی میں نام ویٹنگ لسٹ میں آئے تو کیا طریقہ کار ہوگا؟",
              answerEn: "Applicants on the waiting list are offered slots on a strict priority basis as successful applicants cancel or fail to submit their final installment payments and medical fitness certificates before the designated deadline.",
              answerUr: "ویٹنگ لسٹ والے افراد کو ترجیحی بنیادوں پر اس وقت موقع دیا جاتا ہے جب منتخب عازمین میں سے کوئی اپنی سیٹ کینسل کروائے یا دوسری قسط جمع نہ کروا سکے۔",
            },
            {
              questionEn: "How do unsuccessful applicants get their refund from the bank?",
              questionUr: "ناکام امیدواروں کو ان کے جمع کروائے گئے پیسے کیسے واپس ملتے ہیں؟",
              answerEn: "If not selected in the regular ballot or waiting list, the designated bank branch automatically processes a 100% refund without deduction upon presentation of the original bank application receipt and CNIC.",
              answerUr: "قرعہ اندازی میں نام نہ آنے کی صورت میں متعلقہ بینک برانچ اصل رسید اور شناختی کارڈ دکھانے پر پوری رقم بغیر کسی کٹوتی کے فوری واپس کر دیتی ہے۔",
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Ministry of Religious Affairs & Interfaith Harmony (MORA)', url: 'https://mopr.gov.pk/' },
            { label: 'Official Hajj Information Portal Pakistan', url: 'https://hajjinfo.org/' },
            { label: 'Saudi Ministry of Hajj and Umrah (Nusuk Platform)', url: 'https://www.nusuk.sa/' },
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
