import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, FeeTableVisual, FAQAccordionVisual } from '@/components/visuals';
import type { ProcessStepItem, FeeVisualRow, FAQVisualItem } from '@/components/visuals';
import {
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  Accessibility,
  Heart,
  Award,
  Building,
  Check,
  AlertCircle,
  PhoneCall,
  Home,
  FileCheck,
  GraduationCap,
  Bus,
  Sparkles,
  CreditCard,
  UserCheck,
  Scale,
  Search,
  ShieldAlert,
  Info
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CM Punjab Himmat Card 2026: Rs. 10,500 Quarterly Stipend, Eligibility & BOP ATM Apply | Pakistan Info Hub',
  description:
    'Complete official guide to the CM Punjab Himmat Card 2026 for persons with disabilities (PWDs). Verified Rs. 10,500 quarterly stipend (Rs. 3,500/mo equivalent), PMT score <= 45, DPMIS portal check, DHQ medical board certificate, Bank of Punjab ATM pickup, and helpline 1312.',
  keywords: [
    'Himmat Card Punjab 2026 apply online',
    'Himmat card stipend amount quarterly 10500',
    'CRPD Punjab disability card status check',
    'DPMIS disability registration Punjab swd',
    'Himmat card PMT score requirement 45',
    'Bank of Punjab Himmat card ATM pickup',
    'Punjab social welfare disability helpline 1312',
    'CM Maryam Nawaz Himmat Card scheme 2026',
    'disability certificate Punjab DHQ medical board'
  ],
  openGraph: {
    title: 'CM Punjab Himmat Card 2026: Rs. 10,500 Quarterly Stipend & Application Guide',
    description:
      'Verified official details on Punjab Himmat Card: Rs. 10,500 quarterly financial assistance, PMT score <= 45 rule, DPMIS registration, and free BOP ATM card collection.',
    url: 'https://www.pakistaninfohub.com/health/himmat-card-punjab-disabled-persons-apply-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/health/himmat-card-punjab-disabled-persons-apply-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Health & Sehat Card Hub', item: 'https://www.pakistaninfohub.com/health' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Punjab Himmat Card Guide 2026',
          item: 'https://www.pakistaninfohub.com/health/himmat-card-punjab-disabled-persons-apply-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'CM Punjab Himmat Card 2026: Rs. 10,500 Quarterly Stipend, Eligibility & BOP ATM Apply',
      description:
        'A comprehensive, dignified civic guide detailing the official Punjab Government Himmat Card initiative: financial support of Rs. 10,500 every three months, relaxed PMT cutoff <= 45, DPMIS validation, and Bank of Punjab ATM card issuance.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-17',
      dateModified: '2026-09-17',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/health/himmat-card-punjab-disabled-persons-apply-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Apply for and Collect the Punjab Himmat Card',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Obtain a Valid Provincial Disability Certificate',
          text: 'Appear before the District Disability Assessment Board at your local DHQ Hospital to receive a certified disability assessment categorized as non-fit for economic work.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Enroll / Update Record in DPMIS Database',
          text: 'Ensure your CNIC and disability profile are actively entered into the Disabled Persons Management Information System (DPMIS) maintained by the Social Welfare Department.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Submit Application via SWD Office or CRPD Portal',
          text: 'Lodge your application through the official Social Welfare portal (crpd.punjab.gov.pk) or in person at your Tehsil Social Welfare Office.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Social Scrutiny & NSER PMT Score Verification',
          text: 'The department cross-checks your National Socio-Economic Registry (NSER) data to confirm your PMT score is 45 or below with no duplicate welfare pensions.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Biometric Card Collection at Bank of Punjab',
          text: 'Upon receiving an approval SMS from the government, visit the designated Bank of Punjab (BOP) branch with your original Special CNIC for biometric activation and ATM card pickup.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the Punjab Himmat Card stipend paid monthly or quarterly?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The official Punjab Government stipend is strictly QUARTERLY (Rs. 10,500 every three months), which equals Rs. 3,500 per month. Claims by unofficial websites stating "Rs. 10,500 monthly" or "Rs. 7,500 monthly" are inaccurate and contradict official CRPD and Punjab Government gazetted regulations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need an official Disability Certificate before applying for the Himmat Card?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. An official Disability Certificate issued by the Social Welfare Department Punjab (via a District Medical Assessment Board at a government DHQ Hospital) is a mandatory legal prerequisite. Without it, your record cannot be authenticated in the DPMIS provincial database.',
          },
        },
        {
          '@type': 'Question',
          name: 'What PMT poverty score is required for Himmat Card eligibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'According to crpd.punjab.gov.pk, the applicant family’s BISP NSER Proxy Means Test (PMT) score must not exceed 45. This relaxed ceiling (compared to the standard BISP Kafaalat limit of 32) recognizes the higher care and medical expenses incurred by families of persons with severe disabilities.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a person receive both the Himmat Card and BISP Kafaalat simultaneously?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. To ensure fair and transparent redistribution of public welfare funds, individuals receiving cash stipends from BISP Kafaalat, Bait-ul-Maal, Zakat committees, or Punjab Social Protection Authority (PSPA) cannot draw simultaneous cash aid from the Himmat Card.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there any registration or card fee for the Himmat Card?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Registration, verification, and Bank of Punjab ATM card issuance are 100% FREE. Any intermediary, agent, or unauthorized person asking for Rs. 2,000 or any processing fee is committing fraud. Report all such extortion immediately to toll-free helpline 1312.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can a severely immobile or bed-ridden applicant collect their card?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For individuals with severe physical immobility who cannot travel to Bank of Punjab branches, the Social Welfare Department coordinates with local district administration and BOP mobile teams for home-based biometric verification and doorstep delivery.',
          },
        },
      ],
    },
  ],
};

export default function HimmatCardPunjabPage() {
  const breadcrumbs = [
    { nameEn: 'Health & Sehat Card Hub', nameUr: 'صحت و احساس پروگرام' },
    { nameEn: 'Punjab Himmat Card Guide 2026', nameUr: 'وزیراعلیٰ پنجاب ہمت کارڈ 2026' },
  ];

  // Visual component data: Disbursement & Fee Structure
  const feeRows: FeeVisualRow[] = [
    {
      serviceEn: 'Quarterly Cash Stipend (Installment)',
      serviceUr: 'سہ ماہی نقد وظیفہ (قسط)',
      normal: 'Rs. 10,500 / Quarter',
      urgent: 'Every 3 Months',
      executive: 'Equal to Rs. 3,500/month',
      validity: 'Disbursed via BOP ATM',
      tagEn: 'OFFICIAL STIPEND'
    },
    {
      serviceEn: 'Annual Cash Assistance Total',
      serviceUr: 'سالانہ کل مالی معاونت',
      normal: 'Rs. 42,000 / Year',
      urgent: '4 Equal Tranches',
      executive: 'Budgeted by Govt of Punjab',
      validity: 'Direct Bank Credit',
      tagEn: 'ANNUAL ALLOCATION'
    },
    {
      serviceEn: 'Bank of Punjab (BOP) ATM Card Issuance',
      serviceUr: 'بینک آف پنجاب اے ٹی ایم کارڈ کا اجراء',
      normal: 'PKR 0 (Free of Charge)',
      urgent: 'No Hidden Costs',
      executive: 'Biometric Collection',
      validity: 'Multi-year chip card',
      tagEn: '100% FREE CARD'
    },
    {
      serviceEn: 'ATM Cash Withdrawal Charges',
      serviceUr: 'اے ٹی ایم سے رقم نکالنے کے چارجز',
      normal: 'PKR 0 at all BOP ATMs',
      urgent: '1Link Interoperable',
      executive: 'Zero Surcharge on Stipend',
      validity: 'Nationwide ATMs',
      tagEn: 'NO DEDUCTIONS'
    },
    {
      serviceEn: 'Application & DPMIS Verification Fee',
      serviceUr: 'درخواست اور رجسٹریشن فیس',
      normal: 'PKR 0 (Zero Government Fee)',
      urgent: 'Beware of Scammers',
      executive: 'District Social Welfare Dept',
      validity: 'Permanent Record',
      tagEn: 'NO MIDDLEMEN'
    },
    {
      serviceEn: 'Assistive Devices (Wheelchairs, Hearing Aids)',
      serviceUr: 'امدادی آلات (وہیل چیئر، ہیئرنگ ایڈ)',
      normal: 'PKR 0 (Free of Cost)',
      urgent: 'Subject to Clinical Need',
      executive: 'CRPD / SWD Distribution',
      validity: 'Assessed at DHQ Hospital',
      tagEn: 'ADDITIONAL BENEFIT'
    },
  ];

  // Visual component data: Process Steps Roadmap
  const processSteps: ProcessStepItem[] = [
    {
      stepNumber: 1,
      titleEn: 'Obtain Medical Board Disability Certificate',
      titleUr: 'میڈیکل بورڈ سے معذوری سرٹیفکیٹ کا حصول',
      descEn: 'Visit your District Headquarters (DHQ) Hospital and appear before the District Assessment Board to obtain an official Disability Certificate categorized as "Not fit to work".',
      descUr: 'اپنے قریبی ڈی ایچ کیو ہسپتال میں ڈسٹرکٹ اسیسمنٹ بورڈ کے سامنے پیش ہو کر پنجاب معذوری سرٹیفکیٹ حاصل کریں جس پر روزگار کے لیے نااہل درج ہو۔',
      tagEn: 'MANDATORY PREREQUISITE',
      tagUr: 'بنیادی لازمی شرط'
    },
    {
      stepNumber: 2,
      titleEn: 'Verify Active Profile in DPMIS Database',
      titleUr: 'ڈی پی ایم آئی ایس سسٹم میں ریکارڈ کا اندراج',
      descEn: 'Ensure your CNIC and medical classification are synchronized in the provincial Disabled Persons Management Information System (DPMIS) at the local Social Welfare Office.',
      descUr: 'ضلعی سوشل ویلفیئر دفتر سے تصدیق کروائیں کہ آپ کا شناختی کارڈ اور معذوری کا ریکارڈ صوبائی DPMIS ڈیٹا بیس میں درست درج ہے۔',
      tagEn: 'DATABASE SYNC',
      tagUr: 'ڈیٹا بیس تصدیق'
    },
    {
      stepNumber: 3,
      titleEn: 'Submit Application Online or via Tehsil Office',
      titleUr: 'آن لائن پورٹل یا تحصیل دفتر میں درخواست',
      descEn: 'Submit your details via crpd.punjab.gov.pk or visit your Tehsil Social Welfare Officer (TSWO) with original CNIC, Disability Certificate, and registered mobile number.',
      descUr: 'سرکاری پورٹل crpd.punjab.gov.pk پر یا اپنی تحصیل کے سوشل ویلفیئر آفیسر کے دفتر میں اصل شناختی کارڈ اور سرٹیفکیٹ کے ساتھ درخواست جمع کروائیں۔',
      tagEn: 'FREE SUBMISSION',
      tagUr: 'مفت درخواست'
    },
    {
      stepNumber: 4,
      titleEn: 'NSER PMT Score Scrutiny & Home Verification',
      titleUr: 'پی ایم ٹی اسکور اور فیلڈ تصدیق',
      descEn: 'Punjab Social Welfare cross-checks your family poverty PMT score (must be <= 45) in the BISP NSER database and conducts physical field scrutiny to rule out duplicate welfare.',
      descUr: 'محکمہ آپ کے گھرانے کا بی آئی ایس پی پی ایم ٹی اسکور (45 یا اس سے کم) چیک کرتا ہے اور کسی دیگر ڈپلیکیٹ پنشن نہ ہونے کی فیلڈ تصدیق کرتا ہے۔',
      tagEn: 'PMT <= 45 GATEWAY',
      tagUr: 'غربت اسکور جانچ'
    },
    {
      stepNumber: 5,
      titleEn: 'Receive SMS & Collect BOP ATM Card Biometrically',
      titleUr: 'ایس ایم ایس کی موصولی اور بینک آف پنجاب سے کارڈ وصولی',
      descEn: 'Upon receiving official SMS approval, visit the designated Bank of Punjab (BOP) branch with your Special CNIC to biometrically verify and collect your customized Himmat ATM Card.',
      descUr: 'منظوری کا سرکاری ایس ایم ایس موصول ہونے پر اصل خصوصی شناختی کارڈ کے ساتھ نامزد بینک آف پنجاب برانچ جائیں اور بائیومیٹرک تصدیق سے کارڈ وصول کریں۔',
      tagEn: 'BIOMETRIC PICKUP',
      tagUr: 'بائیومیٹرک وصولی'
    },
  ];

  // Visual component data: FAQs
  const faqItems: FAQVisualItem[] = [
    {
      questionEn: 'Is the Himmat Card stipend paid monthly or quarterly?',
      questionUr: 'کیا ہمت کارڈ کا وظیفہ ماہانہ ہے یا سہ ماہی؟',
      answerEn: 'The stipend is strictly QUARTERLY (Rs. 10,500 every three months). This breaks down mathematically to Rs. 3,500 per month, but the government disburses it as a single Rs. 10,500 lump sum four times a year. Beware of deceptive blog sites claiming "Rs. 10,500 per month".',
      answerUr: 'وزیراعلیٰ پنجاب ہمت کارڈ کا وظیفہ مکمل طور پر سہ ماہی ہے یعنی ہر تین ماہ بعد 10,500 روپے کی یکمشت قسط دی جاتی ہے (جو ماہانہ 3,500 روپے کے حساب سے بنتی ہے)۔ کسی بھی غیر مصدقہ ویب سائٹ کے اس دعوے پر یقین نہ کریں کہ یہ رقم ماہانہ 10,500 روپے ہے۔'
    },
    {
      questionEn: 'Do I need a Disability Certificate before applying?',
      questionUr: 'کیا درخواست دینے سے پہلے معذوری سرٹیفکیٹ حاصل کرنا لازمی ہے؟',
      answerEn: 'Yes, absolutely. The Punjab Government uses the Social Welfare Department’s medical assessment database (DPMIS) as the foundational eligibility filter. Applicants must hold an official Disability Certificate issued by a DHQ Hospital Assessment Board declaring them medically unable to work.',
      answerUr: 'جی ہاں، بالکل لازمی ہے۔ ہمت کارڈ کی بنیادی شرط ہی یہ ہے کہ سائل کے پاس پنجاب سوشل ویلفیئر ڈیپارٹمنٹ کے ڈسٹرکٹ میڈیکل بورڈ (DHQ ہسپتال) کا جاری کردہ باقاعدہ معذوری سرٹیفکیٹ موجود ہو جس میں کام کے لیے نااہل (Not fit to work) درج ہو۔'
    },
    {
      questionEn: 'What PMT score do I need and why is it different from BISP?',
      questionUr: 'ہمت کارڈ کے لیے کتنا PMT اسکور درکار ہے اور یہ بی آئی ایس پی سے مختلف کیوں ہے؟',
      answerEn: 'The PMT ceiling for the Himmat Card is set at 45 or below (per crpd.punjab.gov.pk). This is intentionally more generous than the general BISP Kafaalat cutoff of 32, ensuring that families supporting members with disabilities receive financial protection despite somewhat higher household assets.',
      answerUr: 'ہمت کارڈ کے لیے نادرا اور بی آئی ایس پی کے این ایس ای آر سروے میں غربت کا PMT اسکور 45 یا اس سے کم ہونا ضروری ہے۔ حکومت نے معذور افراد کے خاندانوں کے اضافی طبی اخراجات کے پیش نظر اس حد کو عام بی آئی ایس پی کفالت (32 اسکور) سے زیادہ رکھا ہے تاکہ زیادہ مستحقین مستفید ہو سکیں۔'
    },
    {
      questionEn: 'Can a beneficiary receive both Himmat Card and BISP Kafaalat?',
      questionUr: 'کیا ایک شخص ہمت کارڈ اور بی آئی ایس پی کفالت دونوں بیک وقت لے سکتا ہے؟',
      answerEn: 'No. The government strictly enforces an anti-duplication rule. An individual actively receiving BISP Kafaalat, Zakat Fund allowances, Bait-ul-Maal, or Punjab Social Protection Authority (PSPA) cash assistance is excluded from receiving dual financial aid under the Himmat Card.',
      answerUr: 'نہیں، سرکاری قواعد کے تحت کوئی بھی شخص ڈپلیکیٹ مالی امداد نہیں لے سکتا۔ اگر کوئی فرد پہلے سے بی آئی ایس پی کفالت، زکوٰۃ فنڈ، بیت المال یا پی ایس پی اے (PSPA) سے نقد وظیفہ لے رہا ہو تو وہ ہمت کارڈ کے نقد وظیفے کا اہل نہیں ہوگا۔'
    },
    {
      questionEn: 'Is there any fee or payment required to register for the Himmat Card?',
      questionUr: 'کیا ہمت کارڈ کے اندراج یا کارڈ لینے کے لیے کوئی فیس دینی ہوتی ہے؟',
      answerEn: 'Zero fee. The entire process—from medical assessment registration and DPMIS profiling to Bank of Punjab ATM card issuance—is 100% free of cost. Never pay anyone demanding Rs. 2,000 or any agent fee. Report fraud to the official helpline 1312.',
      answerUr: 'رجسٹریشن، تصدیق اور بینک آف پنجاب کا اے ٹی ایم کارڈ جاری ہونے تک پورا عمل 100 فیصد مفت ہے۔ کسی بھی ایجنٹ یا گروہ کو 2,000 روپے یا کوئی فیس ادا نہ کریں۔ کوئی بھی شخص پیسے مانگے تو فوری طور پر ہیلپ لائن 1312 پر شکایت درج کروائیں۔'
    },
    {
      questionEn: 'What if an applicant cannot travel to the bank due to severe immobility?',
      questionUr: 'اگر کوئی معذور فرد شدید معذوری کے باعث بینک جانے سے قاصر ہو تو کیا طریقہ ہے؟',
      answerEn: 'For bed-ridden or severely immobile applicants, families should inform the Tehsil Social Welfare Officer (TSWO) or contact helpline 1312. The Social Welfare Department arranges home verification visits, and Bank of Punjab deploys designated mobile biometric teams for doorstep card delivery.',
      answerUr: 'شدید معذور یا بستر تک محدود افراد کے لیے خاندان والے اپنی تحصیل کے سوشل ویلفیئر آفیسر کو مطلع کر سکتے ہیں یا ہیلپ لائن 1312 پر رابطہ کر سکتے ہیں۔ محکمہ سوشل ویلفیئر گھر پر فیلڈ تصدیق کرواتا ہے اور بینک آف پنجاب کی موبائل ٹیمیں گھر پر بائیومیٹرک تصدیق سے کارڈ حوالے کرتی ہیں۔'
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
            <InteractiveToolBadge labelEn="PUNJAB SOCIAL WELFARE & CRPD" labelUr="سوشل ویلفیئر و تحفظ خصوصی افراد پنجاب" variant="seal" />
            <VerifiedBadge textEn="OFFICIAL 2026 GAZETTE FIGURES VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            CM Punjab Himmat Card 2026: Rs. 10,500 Quarterly Stipend &amp; BOP ATM Apply
            <span className="block text-doc-brass text-xl sm:text-2xl lg:text-3xl mt-2 font-bold">
              وزیراعلیٰ پنجاب ہمت کارڈ 2026: 10,500 روپے سہ ماہی وظیفہ، اہلیت، ڈی پی ایم آئی ایس اور بینک آف پنجاب کارڈ
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed font-sans">
            A comprehensive, dignified civic resource for persons with disabilities (PWDs) and their caregivers in Punjab.
            Clarifying official gazetted rules under Chief Minister Maryam Nawaz Sharif’s landmark social protection initiative:
            accurate disbursement schedules, relaxed BISP PMT requirements, DPMIS database integration, doorstep accessibility,
            and scam-free Bank of Punjab biometric card pickup.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What Does the Punjab Himmat Card Provide and How Much is the Official Stipend?"
          topicTitleUr="پنجاب ہمت کارڈ کیا سہولیات فراہم کرتا ہے اور وظیفہ کی اصل رقم کتنی ہے؟"
          answerEn="The Punjab Himmat Card delivers an official cash stipend of Rs. 10,500 disbursed QUARTERLY (every three months — equal to Rs. 3,500/month) via a customized Bank of Punjab (BOP) ATM card to certified persons with severe disabilities ('not fit to work') whose BISP PMT score is 45 or below. In addition to cash support, cardholders receive free assistive devices, subsidized public transport, and access to the CM Digital Skills Program. Registration is 100% free."
          answerUr="وزیراعلیٰ پنجاب ہمت کارڈ کے تحت روزگار کے لیے نااہل قرار پانے والے معذور افراد کو بینک آف پنجاب (BOP) اے ٹی ایم کارڈ کے ذریعے ہر تین ماہ بعد 10,500 روپے سہ ماہی وظیفہ (ماہانہ 3,500 روپے مساوی) دیا جاتا ہے۔ اس کے لیے پنجاب ڈومیسائل، سوشل ویلفیئر معذوری سرٹیفکیٹ اور PMT اسکور 45 یا اس سے کم ہونا لازمی ہے۔ کارڈ ہولڈرز کو مفت وہیل چیئرز، مفت پبلک ٹرانسپورٹ اور آئی ٹی ٹریننگ کی سہولت بھی ملتی ہے۔ رجسٹریشن بالکل مفت ہے۔"
        />

        {/* CRITICAL ACCURACY CALLOUT: The Rs. 10,500 Quarterly vs Monthly Clarification */}
        <section className="relative overflow-hidden rounded-2xl border-2 border-amber-500/80 bg-gradient-to-br from-amber-50 via-white to-amber-50/40 dark:from-amber-950/40 dark:via-slate-900 dark:to-amber-950/20 p-6 sm:p-8 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-500 text-white rounded-xl shrink-0 shadow-md">
              <Scale className="w-7 h-7" />
            </div>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-200 text-amber-900 dark:bg-amber-900/60 dark:text-amber-200">
                CRITICAL FACT CHECK: OFFICIAL GAZETTED FIGURES
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
                The Rs. 10,500 Truth: Quarterly vs. Monthly Breakdown
                <span className="block text-amber-800 dark:text-amber-300 text-base sm:text-lg font-semibold mt-0.5">
                  10,500 روپے کی حقیقت: ماہانہ بمقابلہ سہ ماہی کی وضاحت
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                A massive volume of predatory third-party blogs and fake social media posts mistakenly advertise the Himmat Card as offering 
                <strong className="text-red-600 dark:text-red-400"> &ldquo;Rs. 10,500 monthly&rdquo;</strong> or <strong className="text-red-600 dark:text-red-400">&ldquo;Rs. 7,500 monthly&rdquo;</strong>. 
                This widespread misinformation causes deep confusion and disappointment among deserving families.
              </p>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-700/50 space-y-2 text-sm">
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Official Figures (Verified from punjab.gov.pk &amp; crpd.punjab.gov.pk):</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-slate-700 dark:text-slate-300 pl-2">
                  <li><strong>Total Quarterly Installment:</strong> <strong>Rs. 10,500 per quarter</strong> (paid every 3 months).</li>
                  <li><strong>Monthly Equivalent:</strong> <strong>Rs. 3,500 per month</strong> (paid as a single Rs. 10,500 installment 4 times a year).</li>
                  <li><strong>Total Annual Welfare:</strong> <strong>Rs. 42,000 per year</strong> transferred directly into the beneficiary&apos;s Bank of Punjab account.</li>
                  <li><strong>Beware of Extortion:</strong> Anyone claiming they can &ldquo;convert your card to Rs. 10,500 monthly&rdquo; in exchange for a fee or bribe is running a criminal extortion scheme.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Overview & Scope */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-doc-brass/10 dark:bg-doc-brass/20 text-doc-brass">
              <Accessibility className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-doc-ink dark:text-white">
              What is the CM Punjab Himmat Card Scheme?
              <span className="block text-slate-500 dark:text-slate-400 text-sm sm:text-base font-normal mt-0.5">
                وزیراعلیٰ پنجاب ہمت کارڈ اسکیم کیا ہے اور کن افراد کے لیے بنائی گئی ہے؟
              </span>
            </h2>
          </div>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-4 leading-relaxed">
            <p>
              The <strong>Himmat Card</strong> is a flagship social inclusion program launched by the Government of Punjab, executed 
              through the <strong>Social Welfare &amp; Bait-ul-Maal Department (SWD)</strong> and the <strong>Council for the Rights of Persons with Disabilities (CRPD)</strong>, 
              in financial partnership with the <strong>Bank of Punjab (BOP)</strong>.
            </p>
            <p>
              Unlike short-term relief packages, the Himmat Card is designed as a sustainable social security net for individuals who are 
              medically categorized as having severe functional impairments that prevent them from participating in open economic employment 
              (classified under provincial health regulations as &ldquo;not fit to work&rdquo;).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="p-4 rounded-xl border border-doc-brass/30 bg-doc-paper dark:bg-slate-800/80 space-y-2">
                <div className="flex items-center gap-2 text-doc-seal dark:text-amber-400 font-bold">
                  <UserCheck className="w-5 h-5" />
                  <span>65,000 to 85,000 PWDs</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Targeted across two initial phases (Phase 1: 40,000; Phase 2: 25,000), expanding systematically towards 85,000 total beneficiaries across all 36 Punjab districts.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-doc-brass/30 bg-doc-paper dark:bg-slate-800/80 space-y-2">
                <div className="flex items-center gap-2 text-doc-seal dark:text-amber-400 font-bold">
                  <Heart className="w-5 h-5" />
                  <span>30% Women Quota</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  A mandatory 30% allocation is legally ring-fenced for female persons with disabilities to address compounded socio-economic vulnerability.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-doc-brass/30 bg-doc-paper dark:bg-slate-800/80 space-y-2">
                <div className="flex items-center gap-2 text-doc-seal dark:text-amber-400 font-bold">
                  <CreditCard className="w-5 h-5" />
                  <span>BOP ATM Chip Card</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Dignified financial autonomy: payments are deposited directly into a personalized Bank of Punjab ATM card without requiring lines at post offices or patwaris.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Complete Eligibility Criteria Matrix */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-doc-ink dark:text-white">
              Official Eligibility Criteria (CRPD Guidelines)
              <span className="block text-slate-500 dark:text-slate-400 text-sm sm:text-base font-normal mt-0.5">
                ہمت کارڈ کے لیے اہلیت کی مکمل شرائط اور جانچ کے اصول
              </span>
            </h2>
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            To ensure funds reach those in genuine need, the Punjab Social Welfare Department enforces six strict eligibility filters:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Rule 1 */}
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 font-serif font-bold text-base text-doc-ink dark:text-white">
                <span className="w-6 h-6 rounded-full bg-doc-brass/20 text-doc-seal dark:text-amber-400 flex items-center justify-center text-xs font-mono">1</span>
                <span>Valid Provincial Disability Certificate</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                The applicant must possess an official Disability Certificate issued under the Punjab Persons with Disabilities Act, 
                issued by a <strong>Medical Assessment Board at a District Headquarters (DHQ) Hospital</strong>. 
                Read our complete guide to <Link href="/health/disability-certificate-special-cnic-apply-2026" className="text-doc-seal dark:text-amber-400 underline font-semibold hover:text-doc-brass">getting a Disability Certificate and Special CNIC</Link>.
              </p>
            </div>

            {/* Rule 2 */}
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 font-serif font-bold text-base text-doc-ink dark:text-white">
                <span className="w-6 h-6 rounded-full bg-doc-brass/20 text-doc-seal dark:text-amber-400 flex items-center justify-center text-xs font-mono">2</span>
                <span>&ldquo;Not Fit to Work&rdquo; Medical Classification</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                The certificate must specify that the individual has a severe functional disability (minimum 40%+ functional impairment) 
                rendering them clinically unable to engage in regular employment or sustained economic livelihood.
              </p>
            </div>

            {/* Rule 3 */}
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 font-serif font-bold text-base text-doc-ink dark:text-white">
                <span className="w-6 h-6 rounded-full bg-doc-brass/20 text-doc-seal dark:text-amber-400 flex items-center justify-center text-xs font-mono">3</span>
                <span>BISP PMT Poverty Score &le; 45</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Per <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">crpd.punjab.gov.pk</code>, 
                the applicant&apos;s household poverty score in the National Socio-Economic Registry (NSER) must not exceed <strong>45</strong>. 
                This threshold is higher than general BISP Kafaalat (score &le; 32) to accommodate medical overheads. Check your status in our <Link href="/welfare/pmt-score-explained-bisp-eligibility-2026" className="text-doc-seal dark:text-amber-400 underline font-semibold hover:text-doc-brass">PMT Score Verification Guide</Link>.
              </p>
            </div>

            {/* Rule 4 */}
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 font-serif font-bold text-base text-doc-ink dark:text-white">
                <span className="w-6 h-6 rounded-full bg-doc-brass/20 text-doc-seal dark:text-amber-400 flex items-center justify-center text-xs font-mono">4</span>
                <span>Active DPMIS Provincial Registration</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                The applicant&apos;s details must be synchronized in the <strong>Disabled Persons Management Information System (DPMIS)</strong>, 
                the centralized digital registry run by the Punjab Social Welfare Department. If your record is missing, your local Tehsil office must update it.
              </p>
            </div>

            {/* Rule 5 */}
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 font-serif font-bold text-base text-doc-ink dark:text-white">
                <span className="w-6 h-6 rounded-full bg-doc-brass/20 text-doc-seal dark:text-amber-400 flex items-center justify-center text-xs font-mono">5</span>
                <span>Punjab Residency &amp; Special CNIC / CRC</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                The applicant must be a permanent resident of Punjab holding a computerized National Identity Card (CNIC) or Child Registration Certificate (B-Form/CRC) 
                featuring the wheelchair accessibility symbol issued by NADRA.
              </p>
            </div>

            {/* Rule 6 */}
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 font-serif font-bold text-base text-doc-ink dark:text-white">
                <span className="w-6 h-6 rounded-full bg-doc-brass/20 text-doc-seal dark:text-amber-400 flex items-center justify-center text-xs font-mono">6</span>
                <span>Exclusivity (No Duplicate Government Aid)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                The applicant must NOT be an active government employee, government pensioner, or currently drawing cash stipends from 
                BISP Kafaalat, Zakat committees, Pakistan Bait-ul-Maal, or Punjab Social Protection Authority (PSPA). Learn more about <Link href="/welfare/bisp-kafaalat-vs-nashonuma-vs-taleemi-wazaif-explained-2026" className="text-doc-seal dark:text-amber-400 underline font-semibold hover:text-doc-brass">BISP Kafaalat rules</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Component: Fee & Stipend Table */}
        <FeeTableVisual
          rows={feeRows}
          titleEn="Punjab Himmat Card Financial Schedule & Benefits Ledger (2026)"
          titleUr="پنجاب ہمت کارڈ مالی شیڈول اور مراعات کا سرکاری لیجر"
          subtitleEn="Verified stipend breakdown, disbursement frequency, and zero-fee guarantees"
          subtitleUr="وظیفہ کی درست رقم، ادائیگی کا دورانیہ اور مفت کارڈ کی سرکاری شرائط"
        />

        {/* Section 3: Step-by-Step Application Workflow */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <Clock className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step Roadmap: From Medical Board to BOP Card
              <span className="block text-slate-500 dark:text-slate-400 text-sm sm:text-base font-normal mt-0.5">
                ہمت کارڈ حاصل کرنے کا مرحلہ وار سرکاری طریقہ کار
              </span>
            </h2>
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            The process consists of five orderly phases designed to confirm clinical assessment, check economic eligibility, and distribute cards securely:
          </p>

          <ProcessStepsDiagram
            steps={processSteps}
            titleEn="Official 5-Stage Himmat Card Registration & Collection Flow"
            titleUr="ہمت کارڈ رجسٹریشن اور وصولی کے 5 مراحل"
            subtitleEn="Chronological civic procedure under CRPD & Punjab Social Welfare Department"
            subtitleUr="پنجاب کونسل برائے تحفظ معذور افراد کے تحت مصدقہ مراحل"
            variant="dark"
          />

          {/* Detailed step writeup */}
          <div className="space-y-6 pt-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-doc-seal dark:text-amber-400" />
                <span>Stage 1: Getting the DHQ Medical Board Assessment</span>
              </h3>
              <p>
                Every candidate must first be clinically assessed by a District Disability Assessment Board. Boards convene on scheduled days at the District Headquarters (DHQ) Hospital 
                under the supervision of the District Health Authority and District Social Welfare Officer.
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-2 text-slate-600 dark:text-slate-400">
                <li>Bring 4 passport-size photographs showing your disability if visible (or medical diagnostic records).</li>
                <li>Bring original CNIC or B-Form, alongside parents&apos; CNICs.</li>
                <li>Ensure the examining physician marks whether the disability allows for vocational training or certifies you as &ldquo;not fit to work&rdquo;.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white flex items-center gap-2">
                <Building className="w-5 h-5 text-doc-seal dark:text-amber-400" />
                <span>Stage 2 &amp; 3: DPMIS Profile Check &amp; Application Filing</span>
              </h3>
              <p>
                Once issued, the disability certificate is entered into the <strong>Disabled Persons Management Information System (DPMIS)</strong>. 
                Citizens can verify their active profile by visiting their Tehsil Social Welfare Office or checking online at <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">crpd.punjab.gov.pk</code>.
              </p>
              <p>
                If your record is active, you can apply directly through the Punjab Social Welfare portal or submit an application form at the office of your Tehsil Social Welfare Officer (TSWO). 
                The department records your biometric thumbprints and mobile number registered in your own name.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-doc-seal dark:text-amber-400" />
                <span>Stage 4 &amp; 5: Scrutiny, SMS Notification &amp; BOP Card Pickup</span>
              </h3>
              <p>
                The Punjab Government executes an automated cross-match against the BISP NSER poverty registry to verify that your household PMT score is 45 or lower, 
                and scrubs data against federal databases (e-CIB / AGPR) to confirm you are not an active government employee or dual pensioner.
              </p>
              <p>
                Approved beneficiaries receive an SMS notification from the Punjab Government. You must then visit the assigned Bank of Punjab (BOP) branch 
                with your original Special CNIC. The bank officer verifies your biometrics on the spot, hands over your sealed Himmat ATM Card, and assists in setting up your 4-digit secret ATM PIN.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Additional Benefits Beyond Cash Stipend */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-doc-ink dark:text-white">
              Additional Benefits Beyond the Cash Stipend
              <span className="block text-slate-500 dark:text-slate-400 text-sm sm:text-base font-normal mt-0.5">
                ہمت کارڈ کے حامل افراد کے لیے دیگر خصوصی حکومتی مراعات
              </span>
            </h2>
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            The Himmat Card serves as an all-in-one civic entitlement card in Punjab, unlocking several non-cash protections:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2">
              <div className="flex items-center gap-2 font-bold text-doc-ink dark:text-white">
                <Accessibility className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>Free Assistive Devices</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Cardholders receive priority clinical allocation of free assistive devices, including customized motorized and manual wheelchairs, 
                white canes for visually impaired persons, hearing aids, and orthopedic prosthetic supports.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2">
              <div className="flex items-center gap-2 font-bold text-doc-ink dark:text-white">
                <Bus className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>Free / Subsidized Public Transit</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Presenting the Himmat Card or Special CNIC grants free travel on the Lahore Metro Bus, Orange Line Metro Train, Multan Metro, 
                and Rawalpindi-Islamabad Metro, alongside a 50% concession on Pakistan Railways trains nationwide.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2">
              <div className="flex items-center gap-2 font-bold text-doc-ink dark:text-white">
                <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>CM Digital Skills Program for PWDs</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                For beneficiaries who are capable of home-based cognitive work, the government provides specialized IT, graphic design, 
                and freelancing bootcamps designed specifically for persons with physical challenges to help establish independent livelihoods.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Verification Portal, Helpline & Doorstep Accessibility */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400">
              <Search className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-doc-ink dark:text-white">
              Official Status Tracking &amp; Helpline 1312
              <span className="block text-slate-500 dark:text-slate-400 text-sm sm:text-base font-normal mt-0.5">
                ہمت کارڈ کا آن لائن اسٹیٹس چیک کرنے اور ہیلپ لائن کا طریقہ
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <span>Online Verification Portals</span>
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To check whether your application has been received, verified, or approved for card issuance, visit the official government web portals:
              </p>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-between">
                  <span className="font-medium text-slate-700 dark:text-slate-200">CRPD Punjab Portal:</span>
                  <a href="https://crpd.punjab.gov.pk" target="_blank" rel="noopener noreferrer" className="text-doc-seal dark:text-amber-400 font-mono font-semibold underline">
                    crpd.punjab.gov.pk
                  </a>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-between">
                  <span className="font-medium text-slate-700 dark:text-slate-200">Social Welfare Punjab:</span>
                  <a href="https://swd.punjab.gov.pk" target="_blank" rel="noopener noreferrer" className="text-doc-seal dark:text-amber-400 font-mono font-semibold underline">
                    swd.punjab.gov.pk
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                Enter your 13-digit CNIC without dashes to review your current application stage and bank branch routing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white flex items-center gap-2">
                <PhoneCall className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <span>Toll-Free Helplines</span>
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                If you face delays, biometric failures, or need doorstep support for bed-ridden family members, reach out through these official channels:
              </p>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-between">
                  <span className="font-bold text-teal-900 dark:text-teal-200">Punjab PWD Helpline:</span>
                  <span className="font-mono text-base font-extrabold text-teal-700 dark:text-teal-300">1312 (Toll-Free)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-between">
                  <span className="font-medium text-slate-700 dark:text-slate-200">Bank of Punjab (BOP) Helpline:</span>
                  <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">042-111-267-200</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-between">
                  <span className="font-medium text-slate-700 dark:text-slate-200">NADRA Doorstep 1777 (Special CNIC):</span>
                  <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">1777</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Scam Warning Box */}
        <section className="relative overflow-hidden rounded-2xl border-2 border-red-500/80 bg-gradient-to-br from-red-50 via-white to-red-50/40 dark:from-red-950/40 dark:via-slate-900 dark:to-red-950/20 p-6 sm:p-8 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-600 text-white rounded-xl shrink-0 shadow-md">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-200 text-red-900 dark:bg-red-900/60 dark:text-red-200">
                OFFICIAL FRAUD ALERT &amp; CITIZEN WARNING
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
                Registration is 100% Free: Beware of Fake Agents &amp; Play Store Apps
                <span className="block text-red-800 dark:text-red-300 text-base sm:text-lg font-semibold mt-0.5">
                  جعلی ایجنٹس اور فیس مانگنے والوں سے ہوشیار رہیں — رجسٹریشن مکمل مفت ہے
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Fraudulent intermediaries have been reported extorting vulnerable families by demanding <strong>Rs. 2,000 &ldquo;registration fees&rdquo;</strong> 
                or circulating fake APK files on Google Play and WhatsApp claiming to be &ldquo;Himmat Card Online Apps&rdquo;.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
                <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-red-200 dark:border-red-900/50 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-red-700 dark:text-red-300">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>No Official Play Store App</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    The Punjab Government does NOT have an official registration app on Google Play. Third-party APKs steal sensitive CNIC data and thumbprint images.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-red-200 dark:border-red-900/50 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-red-700 dark:text-red-300">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>Never Share OTPs or Passwords</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    The government and Bank of Punjab will NEVER call from an 11-digit personal number (e.g. 0300-xxxxxxx) asking for your ATM PIN, OTP, or cash deposits.
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium pt-1">
                If anyone demands money to process your Himmat Card, report their phone number and details immediately to the Punjab Government helpline at <strong className="text-red-700 dark:text-red-400 font-bold">1312</strong> or local police.
              </p>
            </div>
          </div>
        </section>

        {/* Ad Placement Zone */}
        <AdPlacementZone slotId="health-himmat-card-mid" />

        {/* Visual Component: FAQ Accordion */}
        <FAQAccordionVisual
          items={faqItems}
          titleEn="Frequently Asked Questions: Punjab Himmat Card (2026)"
          titleUr="پنجاب ہمت کارڈ کے بارے میں عام سوالات کے مصدقہ جوابات"
          subtitleEn="Verified legal, operational & banking clarifications directly from CRPD and SWD regulations"
          subtitleUr="سوشل ویلفیئر قوانین اور بینک آف پنجاب کے تصدیق شدہ جوابات"
        />

        {/* Section 7: Cross-linking & Related Guides */}
        <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-doc-brass" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Related Welfare &amp; Healthcare Guides
              <span className="block text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-normal">
                متعلقہ معلوماتی گائیڈز اور سرکاری پروگرام
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/health/disability-certificate-special-cnic-apply-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-doc-brass bg-white dark:bg-slate-900 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-doc-seal dark:text-amber-400 uppercase tracking-wider">PRIMARY PREREQUISITE</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-brass">
                  Disability Certificate &amp; Special CNIC Guide 2026 &rarr;
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                  Complete two-stage roadmap: Medical assessment board at DHQ, NADRA Special CNIC, and doorstep 1777 mobile service.
                </p>
              </div>
            </Link>

            <Link
              href="/welfare/pmt-score-explained-bisp-eligibility-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-doc-brass bg-white dark:bg-slate-900 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-doc-seal dark:text-amber-400 uppercase tracking-wider">ELIGIBILITY GATEWAY</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-brass">
                  PMT Score Explained: NSER Poverty Cutoffs &rarr;
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                  How the Proxy Means Test (PMT) is calculated, why Himmat Card uses PMT &le; 45, and how to update your survey.
                </p>
              </div>
            </Link>

            <Link
              href="/welfare/bisp-kafaalat-vs-nashonuma-vs-taleemi-wazaif-explained-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-doc-brass bg-white dark:bg-slate-900 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-doc-seal dark:text-amber-400 uppercase tracking-wider">EXCLUSIVITY RULES</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-brass">
                  BISP Kafaalat vs Nashonuma Explained 2026 &rarr;
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                  Understanding why dual-welfare recipients cannot receive both Himmat Card and active BISP cash stipends.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
