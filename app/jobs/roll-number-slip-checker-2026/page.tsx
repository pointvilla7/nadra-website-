import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, FAQAccordionVisual } from '@/components/visuals';
import { HelpCircle, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roll Number Slip Checker 2026 – FPSC, PPSC, SPSC, KPPSC, NTS & ETEA | Pakistan Info Hub',
  description:
    'Download and check roll number slips and admission letters online by CNIC for FPSC (CSS), PPSC, SPSC, KPPSC, BPSC, NTS, and ETEA competitive exams and job tests.',
  keywords: [
    'roll number slip checker 2026 Pakistan',
    'PPSC admission letter download by CNIC',
    'FPSC roll number slip 2026',
    'NTS roll no slip download',
    'KPPSC ability test roll number',
    'SPSC admission slip check',
  ],
  openGraph: {
    title: 'Roll Number Slip Checker 2026 – FPSC, PPSC, SPSC, NTS Online',
    description:
      'Format validator and guided one-click portal access for downloading competitive exam roll number slips and test center call letters.',
    url: 'https://www.pakistaninfohub.com/jobs/roll-number-slip-checker-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/jobs/roll-number-slip-checker-2026' },
};

const RollNumberSlipChecker = dynamic(
  () => import('@/components/RollNumberSlipChecker').then((m) => ({ default: m.RollNumberSlipChecker })),
  { ssr: false, loading: () => <div className="h-[480px] rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" /> }
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Jobs Portal', item: 'https://www.pakistaninfohub.com/jobs' },
        { '@type': 'ListItem', position: 3, name: 'Roll Number Slip Checker 2026', item: 'https://www.pakistaninfohub.com/jobs/roll-number-slip-checker-2026' },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Pakistan Roll Number Slip Checker 2026',
      description: 'Online directory and format validator for checking test centers and downloading admission letters for FPSC, PPSC, NTS, and provincial PSCs.',
      url: 'https://www.pakistaninfohub.com/jobs/roll-number-slip-checker-2026',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I download my PPSC admission letter online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Visit ppsc.gop.pk, select "Download Admission Letter", enter your 13-digit CNIC number, choose your applied post/case number, and click Submit to print your official exam roll number slip.',
          },
        },
        {
          '@type': 'Question',
          name: 'When are FPSC and NTS roll number slips uploaded?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Testing agencies and public service commissions typically upload admission certificates 7 to 10 days before the scheduled test date. Candidates receive an SMS alert on their registered mobile number.',
          },
        },
      ],
    },
  ],
};

export default function RollNumberSlipCheckerPage() {
  const breadcrumbs = [
    { nameEn: 'Jobs Portal', nameUr: 'نوکریاں اور ملازمتیں' },
    { nameEn: 'Roll Number Slip Checker 2026', nameUr: 'رول نمبر سلپ چیکر 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn">
        <Breadcrumbs items={breadcrumbs} />

        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="ADMISSION SLIP PORTAL" labelUr="رول نمبر پورٹل" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Roll Number Slip & Admission Letter Checker 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              سرکاری رول نمبر سلپ و ایڈمشن لیٹر چیکر (ایف پی ایس سی، پی پی ایس سی، این ٹی ایس)
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-sans">
            Validate your CNIC, copy your identifier, and open the official admission letter gateway for FPSC, PPSC,
            SPSC, KPPSC, BPSC, NTS, or ETEA recruitment tests.
          </p>
        </header>

        <DirectAnswerBox
          topicTitleEn="How to Download Official Govt Exam Roll Number Slips in Pakistan"
          topicTitleUr="پاکستان میں سرکاری امتحانی رول نمبر سلپ ڈاؤن لوڈ کرنے کا طریقہ"
          answerEn="To download your slip: (1) Select your commission (FPSC, PPSC, SPSC, KPPSC, BPSC, NTS, or ETEA), (2) Enter your 13-digit CNIC, (3) Click 'Copy CNIC', and (4) Click 'Open Official Portal' to enter your CNIC and print your printable PDF admission certificate with test center and seat number."
          answerUr="رول نمبر سلپ ڈاؤن لوڈ کرنے کے لیے: (1) اپنا کمیشن منتخب کریں (ایف پی ایس سی، پی پی ایس سی، این ٹی ایس وغیرہ)، (2) 13 ہندسوں کا شناختی کارڈ درج کریں، (3) کاپی دبائیں، اور (4) آفیشل پورٹل پر جا کر اپنا امتحانی سینٹر، وقت اور رول نمبر دیکھ کر پرنٹ کریں۔"
        />

        <section aria-label="Roll Number Slip Checker Tool">
          <RollNumberSlipChecker />
        </section>

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step Slip Verification &amp; Exam Center Checklist (2026)"
          titleUr="رول نمبر سلپ ڈاؤن لوڈ اور امتحانی مرکز کی تیاری کا طریقہ"
          subtitleEn="4 essential stages from CNIC validation to admission slip printing and center arrival rules"
          subtitleUr="شناختی کارڈ کی تصدیق سے لے کر رول نمبر سلپ کے پرنٹ اور امتحانی سینٹر کے قواعد تک"
          steps={[
            {
              number: 1,
              titleEn: "Select Commission & Enter CNIC",
              titleUr: "متعلقہ ٹیسٹنگ ایجنسی یا کمیشن منتخب کریں",
              descEn: "Select FPSC, PPSC, SPSC, KPPSC, BPSC, NTS, or ETEA; input your 13-digit CNIC number without hyphens.",
              descUr: "متعلقہ پبلک سروس کمیشن یا ٹیسٹنگ ایجنسی کا انتخاب کریں اور 13 ہندسوں کا شناختی کارڈ درج کریں۔",
              tagEn: "Portal & CNIC",
              tagUr: "کمیشن اور شناختی کارڈ",
            },
            {
              number: 2,
              titleEn: "Locate Post & Case Number",
              titleUr: "درخواست دی گئی اسامی اور کیس نمبر منتخب کریں",
              descEn: "Choose your specific job title and advertisement/case number from the official commission dropdown.",
              descUr: "پورٹل پر اپنی مطلوبہ پوسٹ اور اشتہار یا کیس نمبر کا انتخاب کریں۔",
              tagEn: "Job Case",
              tagUr: "کیس نمبر",
            },
            {
              number: 3,
              titleEn: "Verify Center, Time & Seat Number",
              titleUr: "امتحانی سینٹر، تاریخ اور سیٹ نمبر کی تصدیق کریں",
              descEn: "Check test venue address, reporting time, roll number, and specific test syllabus or instructions.",
              descUr: "امتحانی ہال کا پتہ، رپورٹنگ ٹائم، رول نمبر اور امتحانی ہدایات کو اچھی طرح چیک کریں۔",
              tagEn: "Test Venue",
              tagUr: "سینٹر و وقت",
            },
            {
              number: 4,
              titleEn: "Print Clean Admission Slip & Bring CNIC",
              titleUr: "سلپ پرنٹ کریں اور اصل شناختی کارڈ ساتھ لے جائیں",
              descEn: "Print a clear copy on A4 paper; ensure you carry your original Smart CNIC and admission slip to the exam hall.",
              descUr: "سلپ کا صاف پرنٹ نکالیں اور امتحان کے دن اصل سمارٹ شناختی کارڈ ساتھ لانا ہرگز نہ بھولیں۔",
              tagEn: "Exam Day",
              tagUr: "امتحانی دن",
            },
          ]}
        />

        <AdPlacementZone format="horizontal" />

        {/* FAQs */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Roll Number Slips &amp; Test Day Rules)"
          titleUr="رول نمبر سلپ اور امتحانی قواعد سے متعلق عام سوالات"
          subtitleEn="Mandatory documents for exam hall entry, photo corrections, SMS alert timelines, and electronic item bans"
          subtitleUr="امتحانی ہال میں داخلے کے لیے ضروری اشیاء، تصویر کی تصحیح اور الیکٹرانک آلات کی ممانعت"
          items={[
            {
              questionEn: "What items are mandatory to bring to the exam center?",
              questionUr: "امتحانی مرکز میں کون سی چیزیں ساتھ لانا لازمی ہیں؟",
              answerEn: "Candidates must bring: (1) Original printed Admission Certificate / Roll Number Slip, (2) Original Computerized National Identity Card (Smart CNIC), (3) Transparent clipboard, and (4) Blue/black ballpoint pens. Mobile phones and digital watches are strictly banned.",
              answerUr: "امیدوار کے پاس: (1) رول نمبر سلپ کا اصل پرنٹ، (2) نادرا کا اصل سمارٹ شناختی کارڈ، (3) شفاف کلپ بورڈ، اور (4) نیلا یا کالا بال پوائنٹ ہونا لازمی ہے۔ موبائل فون اور ڈیجیٹل گھڑیاں سخت منع ہیں۔",
            },
            {
              questionEn: "What should I do if my roll number slip has a picture or name error?",
              questionUr: "اگر رول نمبر سلپ پر تصویر یا نام میں غلطی ہو تو کیا کریں؟",
              answerEn: "Immediately contact the respective commission’s facilitation center via telephone or email at least 3 working days before the test to request an urgent correction or bring an attested passport photograph with your original CNIC to the test center.",
              answerUr: "ٹیسٹ سے کم از کم 3 دن قبل متعلقہ کمیشن کے ہیلپ ڈیسک پر رابطہ کریں یا تصدیق شدہ پاسپورٹ سائز تصویر اور اصل شناختی کارڈ کے ہمراہ امتحانی سینٹر کے سپریٹنڈنٹ سے رجوع کریں۔",
            },
            {
              questionEn: "When are FPSC, PPSC, and NTS roll number slips uploaded before exams?",
              questionUr: "امتحان سے کتنے دن پہلے رول نمبر سلپس پورٹل پر اپلوڈ ہوتی ہیں؟",
              answerEn: "Testing agencies and public service commissions typically upload admission certificates 7 to 10 days before the scheduled test date. Candidates receive an official SMS alert on their registered mobile number.",
              answerUr: "پبلک سروس کمیشن اور این ٹی ایس عام طور پر ٹیسٹ کی تاریخ سے 7 سے 10 دن قبل سلپس اپلوڈ کرتے ہیں اور امیدوار کو موبائل پر ایس ایم ایس الرٹ بھی بھیجا جاتا ہے۔",
            },
            {
              questionEn: "Can I show my roll number slip on a mobile phone instead of printing it?",
              questionUr: "کیا کاغذ پر پرنٹ نکالنے کے بجائے موبائل میں رول نمبر سلپ دکھائی جا سکتی ہے؟",
              answerEn: "No. Mobile phones are completely prohibited inside the examination premises. You must carry a physically printed paper copy of the admission certificate.",
              answerUr: "ہرگز نہیں! امتحانی ہال کے اندر موبائل فون لے جانے کی قطعی اجازت نہیں ہوتی، اس لیے کاغذ پر پرنٹ شدہ سلپ لانا لازمی ہے۔",
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Federal Public Service Commission (FPSC)', url: 'https://www.fpsc.gov.pk/' },
            { label: 'Punjab Public Service Commission (PPSC)', url: 'https://www.ppsc.gop.pk/' },
            { label: 'National Testing Service (NTS)', url: 'https://www.nts.org.pk/' },
            { label: 'Sindh Public Service Commission (SPSC)', url: 'https://spsc.gos.pk/' },
          ].map((src) => (
            <a key={src.url} href={src.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-doc-seal">
              <ExternalLink className="w-3 h-3" />
              {src.label}: <span className="font-mono">{src.url}</span>
            </a>
          ))}
        </section>
      </div>
    </>
  );
}
