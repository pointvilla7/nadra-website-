import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, FeeTableVisual, FAQAccordionVisual } from '@/components/visuals';
import { HelpCircle, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sehat Card Eligibility Checker 2026 – Check Status by CNIC Online & 8500 SMS | Pakistan Info Hub',
  description:
    'Check Sehat Sahulat Card eligibility and hospital coverage online by 13-digit CNIC or 8500 SMS. Free 1 Million PKR medical treatment guide for Punjab, KPK, ICT, and Federal programs.',
  keywords: [
    'Sehat Card eligibility check by CNIC 2026',
    '8500 SMS Sehat Card status',
    'Punjab Sehat Card check online',
    'KPK Sehat Card Plus verification',
    'Sehat Sahulat Program hospital list',
  ],
  openGraph: {
    title: 'Sehat Card Eligibility Checker 2026 – Check Status by CNIC Online',
    description:
      'Format validator, 8500 SMS instruction generator, and direct portal access for Pakistan Sehat Sahulat Card programs.',
    url: 'https://www.pakistaninfohub.com/welfare/sehat-card-eligibility-checker-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/welfare/sehat-card-eligibility-checker-2026' },
};

const SehatCardChecker = dynamic(
  () => import('@/components/SehatCardChecker').then((m) => ({ default: m.SehatCardChecker })),
  { ssr: false, loading: () => <div className="h-[480px] rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" /> }
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Social Welfare & Relief', item: 'https://www.pakistaninfohub.com/welfare' },
        { '@type': 'ListItem', position: 3, name: 'Sehat Card Eligibility 2026', item: 'https://www.pakistaninfohub.com/welfare/sehat-card-eligibility-checker-2026' },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Pakistan Sehat Card Eligibility Checker 2026',
      description: 'Online directory and 8500 SMS guide for verifying Sehat Sahulat Card health insurance eligibility and empaneled hospitals.',
      url: 'https://www.pakistaninfohub.com/welfare/sehat-card-eligibility-checker-2026',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I check my Sehat Card status by SMS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Send your 13-digit CNIC number without dashes or spaces to 8500 from any Pakistani mobile network. You will receive an immediate SMS reply confirming your family eligibility and card number.',
          },
        },
        {
          '@type': 'Question',
          name: 'What medical treatments are covered under Sehat Sahulat Program?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sehat Card covers inpatient hospitalizations, cardiovascular surgeries, cancer treatments (chemotherapy and radiation), renal dialysis, neurosurgery, emergency medical admissions, and maternity care up to PKR 1,000,000 per family annually.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a physical plastic card to receive treatment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. In all empaneled public and private hospitals, your original NADRA CNIC or B-Form (for minors) serves as your electronic Sehat Card at the hospital reception counter.',
          },
        },
      ],
    },
  ],
};

export default function SehatCardCheckerPage() {
  const breadcrumbs = [
    { nameEn: 'Social Welfare & Relief', nameUr: 'بے نظیر و احساس پروگرام' },
    { nameEn: 'Sehat Card Eligibility 2026', nameUr: 'صحت کارڈ اہلیت 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn">
        <Breadcrumbs items={breadcrumbs} />

        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="HEALTH DIRECTORY" labelUr="صحت گائیڈ" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Sehat Card Eligibility Checker 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              صحت سہولت کارڈ آن لائن اہلیت و ہسپتال چیکر (قومی، پنجاب و کے پی کے)
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-sans">
            Check your free 1 Million PKR family health coverage status by 13-digit CNIC, generate your 8500 SMS code,
            and locate empaneled private and government hospitals nationwide.
          </p>
        </header>

        <DirectAnswerBox
          topicTitleEn="How to Check Sehat Card Eligibility in Pakistan (2026)"
          topicTitleUr="پاکستان میں صحت کارڈ کی اہلیت کیسے چیک کریں؟"
          answerEn="To check Sehat Card eligibility: (1) SMS your 13-digit CNIC without dashes to 8500 to receive instant family status, or (2) Enter your CNIC in our navigator to copy and verify on the official Prime Minister Health Program portal (pmhealthprogram.gov.pk). Covers up to PKR 1,000,000/year for inpatient treatment."
          answerUr="صحت کارڈ کی اہلیت جاننے کے لیے: (1) اپنے موبائل سے 13 ہندسوں کا شناختی کارڈ بغیر ڈیشز کے 8500 پر میسج بھیجیں، یا (2) ہمارے ٹول میں شناختی کارڈ درج کر کے آفیشل پورٹل پر چیک کریں۔ فی خاندان سالانہ 10 لاکھ روپے تک مفت ان ڈور علاج کی سہولت میسر ہے۔"
        />

        <section aria-label="Sehat Card Eligibility Checker Tool">
          <SehatCardChecker />
        </section>

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step Sehat Card Verification &amp; Hospital Admission Workflow (2026)"
          titleUr="صحت کارڈ کی تصدیق اور ہسپتال داخلے کا 4 مرحلہ وار طریقہ"
          subtitleEn="How to check family qualification and obtain 100% cashless medical treatment at panel hospitals"
          subtitleUr="اہلیت کی تصدیق سے لے کر پینل ہسپتال میں بائیومیٹرک اندراج اور مفت علاج کے حصول تک"
          steps={[
            {
              number: 1,
              titleEn: "SMS 13-Digit CNIC to 8500 / 9780",
              titleUr: "اپنا 13 ہندسوں کا شناختی کارڈ 8500 پر ایس ایم ایس کریں",
              descEn: "Send CNIC without hyphens to 8500 (Punjab/Federal/AJK/GB) or 9780 (KPK Sehat Card Plus).",
              descUr: "شناختی کارڈ نمبر 8500 پر (پنجاب، اسلام آباد، آزاد کشمیر) یا 9780 پر (کے پی کے) ایس ایم ایس کریں۔",
              tagEn: "SMS Check",
              tagUr: "ایس ایم ایس",
            },
            {
              number: 2,
              titleEn: "Review Eligible Family Members",
              titleUr: "خاندان کے اہل افراد کی تفصیل دیکھیں",
              descEn: "Confirm that your spouse and unmarried children are registered under your NADRA Family Registration Certificate (FRC).",
              descUr: "یقینی بنائیں کہ آپ کے شریک حیات اور غیر شادی شدہ بچے نادرا فیملی ٹری (FRC) میں درج ہیں۔",
              tagEn: "NADRA FRC",
              tagUr: "نادرا فیملی",
            },
            {
              number: 3,
              titleEn: "Visit Sehat Sahulat Counter at Panel Hospital",
              titleUr: "پینل ہسپتال میں صحت سہولت کاؤنٹر پر تشریف لے جائیں",
              descEn: "Bring the patient's original Smart CNIC (or B-Form for minors) to the hospital's dedicated facilitation desk.",
              descUr: "مریض کا اصل شناختی کارڈ یا بچوں کا بے فارم لے کر پینل ہسپتال کے کاؤنٹر پر جائیں۔",
              tagEn: "Hospital Desk",
              tagUr: "ہسپتال کاؤنٹر",
            },
            {
              number: 4,
              titleEn: "Biometric Entry & Cashless Inpatient Treatment",
              titleUr: "بائیومیٹرک اندراج اور 100 فیصد مفت ان ڈور علاج",
              descEn: "Hospital verifies fingerprint and admits patient; bills are settled directly with State Life up to PKR 1,000,000.",
              descUr: "ہسپتال بائیومیٹرک فنگر پرنٹ لگا کر مریض کو داخل کرے گا اور سالانہ 10 لاکھ تک تمام اخراجات حکومت ادا کرے گی۔",
              tagEn: "Free Treatment",
              tagUr: "مفت علاج",
            },
          ]}
        />

        {/* Treatment Limits Breakdown Table */}
        <FeeTableVisual
          titleEn="Sehat Sahulat Program Medical Treatment &amp; Coverage Limits (2026)"
          titleUr="صحت سہولت کارڈ کے تحت مفت علاج اور سالانہ لمٹ کی تفصیل (2026)"
          subtitleEn="Package coverage limits per family per annum under State Life Insurance Corporation"
          subtitleUr="فی خاندان سالانہ بنیادوں پر فراہم کیے جانے والے طبی پیکجز اور انشورنس کوریج"
          noteEn="* Note: Covers inpatient admissions only. Consultations and medicines inside the hospital during admission are 100% free."
          noteUr="* نوٹ: صرف ہسپتال میں داخل مریضوں (ان ڈور) کے لیے ہے۔ داخلے کے دوران ادویات اور ٹیسٹ 100 فیصد مفت ہیں۔"
          rows={[
            {
              serviceEn: "Tertiary / Priority Care (Cardiac, Cancer, Dialysis)",
              serviceUr: "ٹرشری کیئر (ہارٹ سرجری، کینسر، ڈائیلاسز، نیورو)",
              normal: "PKR 1,000,000 / Family",
              urgent: "Cashless Admission",
              executive: "100% Free",
              validity: "Renews Every July 1"
            },
            {
              serviceEn: "Secondary Care (General Inpatient, Surgeries, Fractures)",
              serviceUr: "سیکنڈری کیئر (عام امراض، اپینڈکس، ہڈیوں کے فریکچر)",
              normal: "PKR 60,000 – 100,000",
              urgent: "General Ward",
              executive: "Cashless",
              validity: "Per Family / Year"
            },
            {
              serviceEn: "Maternity & Normal Delivery / C-Section",
              serviceUr: "زچگی، نارمل ڈلیوری اور آپریشن (سی سیکشن)",
              normal: "PKR 17,000 – 35,000",
              urgent: "Includes Mother Care",
              executive: "Free Transport Allowance",
              validity: "Per Delivery"
            },
            {
              serviceEn: "Emergency Inpatient & Accident Trauma Care",
              serviceUr: "ایمرجنسی حادثات اور ٹراما کیئر داخلہ",
              normal: "Full Emergency Coverage",
              urgent: "Immediate Admission",
              executive: "24/7 Panel",
              validity: "Within Annual Limit"
            }
          ]}
        />

        <AdPlacementZone format="horizontal" />

        {/* FAQs */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Sehat Card Eligibility &amp; Coverage)"
          titleUr="صحت کارڈ کی اہلیت اور علاج سے متعلق عام سوالات"
          subtitleEn="Essential guidelines on family coverage, hospital desk admission, plastic card requirements, and renewal cycles"
          subtitleUr="اہل فیملی ممبران، ہسپتال داخلے کا طریقہ، کارڈ کے بغیر علاج اور سالانہ ری نیول کے قواعد"
          items={[
            {
              questionEn: "How do I check my Sehat Card status by SMS?",
              questionUr: "ایس ایم ایس کے ذریعے صحت کارڈ کا اسٹیٹس کیسے معلوم کریں؟",
              answerEn: "Send your 13-digit CNIC number without dashes or spaces to 8500 from any Pakistani mobile network. You will receive an immediate SMS reply confirming your family eligibility and card number.",
              answerUr: "اپنے موبائل سے 13 ہندسوں کا شناختی کارڈ بغیر ڈیشز کے 8500 پر میسج کریں۔ آپ کو جوابی ایس ایم ایس میں اہلیت اور فیملی رجسٹریشن کی تفصیل مل جائے گی۔",
            },
            {
              questionEn: "What medical treatments are covered under Sehat Sahulat Program?",
              questionUr: "صحت سہولت پروگرام میں کون سے علاج شامل ہیں؟",
              answerEn: "Sehat Card covers inpatient hospitalizations, cardiovascular surgeries, cancer treatments (chemotherapy and radiation), renal dialysis, neurosurgery, emergency medical admissions, and maternity care up to PKR 1,000,000 per family annually.",
              answerUr: "صحت کارڈ میں ہسپتال داخلہ، دل کے آپریشن اور اسٹنٹ، کینسر کا مکمل علاج، گردوں کا ڈائیلاسز، نیورو سرجری، ایمرجنسی داخلہ اور زچگی کے تمام اخراجات سالانہ 10 لاکھ روپے تک کور ہوتے ہیں۔",
            },
            {
              questionEn: "Do I need a physical plastic card to receive treatment?",
              questionUr: "کیا علاج کے لیے پلاسٹک کا کارڈ پاس ہونا ضروری ہے؟",
              answerEn: "No. In all empaneled public and private hospitals, your original NADRA CNIC or B-Form (for minors) serves as your electronic Sehat Card at the hospital reception counter.",
              answerUr: "نہیں! کسی الگ پلاسٹک کارڈ کی ضرورت نہیں ہے۔ مریض کا اصل نادرا شناختی کارڈ یا بچوں کا بے فارم ہی ہسپتال کاؤنٹر پر الیکٹرانک صحت کارڈ کے طور پر کام کرتا ہے۔",
            },
            {
              questionEn: "Which family members are covered under one Sehat Card?",
              questionUr: "ایک صحت کارڈ پر خاندان کے کون کون سے افراد علاج کروا سکتے ہیں؟",
              answerEn: "The head of the family, spouse, and all unmarried children listed on the NADRA Family Registration Certificate (FRC) are automatically covered under the primary cardholder.",
              answerUr: "خاندان کا سربراہ، شریک حیات اور نادرا فیملی رجسٹریشن سرٹیفکیٹ (FRC) میں درج تمام غیر شادی شدہ بچے خودکار طور پر علاج کے حقدار ہیں۔",
            },
            {
              questionEn: "What is the procedure when arriving at an empaneled hospital?",
              questionUr: "پینل ہسپتال پہنچنے پر داخلے کا کیا طریقہ کار ہوتا ہے؟",
              answerEn: "Visit the dedicated \"Sehat Sahulat Program Counter\" inside the hospital with the patient’s original CNIC (or B-Form for children). The hospital representative will perform biometric fingerprint verification and register the admission.",
              answerUr: "ہسپتال کے اندر موجود مخصوص 'صحت سہولت کاؤنٹر' پر جائیں اور مریض کا اصل شناختی کارڈ دکھائیں۔ کاؤنٹر عملہ بائیومیٹرک تصدیق کر کے داخلہ پرچی جاری کرے گا۔",
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Prime Minister National Sehat Sahulat Program', url: 'https://www.pmhealthprogram.gov.pk/' },
            { label: 'Punjab Health Initiative Management Company (PHIMC)', url: 'https://phimc.punjab.gov.pk/' },
            { label: 'KPK Sehat Card Plus Universal Health Coverage', url: 'https://sehatcardplus.gov.pk/' },
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
