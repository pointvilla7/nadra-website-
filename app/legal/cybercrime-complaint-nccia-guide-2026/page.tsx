import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { StepFlowDiagram, StepFlowItem } from '@/components/StepFlowDiagram';
import { ComparisonVisual, ComparisonItem } from '@/components/visuals/ComparisonVisual';
import { FAQAccordionVisual, FAQVisualItem } from '@/components/visuals/FAQAccordionVisual';
import { NcciaComplaintHelper } from '@/components/NcciaComplaintHelper';
import {
  ShieldAlert,
  ShieldCheck,
  PhoneCall,
  Globe,
  FileText,
  AlertTriangle,
  Lock,
  CreditCard,
  UserX,
  Smartphone,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Scale,
  Building,
  ArrowRight,
  HelpCircle,
  Clock,
  Send,
  EyeOff,
  Info,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to File Cybercrime Complaint in Pakistan (2026): NCCIA Portal & 1799 Helpline | Pakistan Info Hub',
  description:
    'Complete 2026 citizen guide on filing cybercrime complaints in Pakistan with the National Cyber Crimes Investigation Agency (NCCIA). Learn why FIA no longer accepts cyber complaints, verified 24/7 helpline 1799, complaint.nccia.gov.pk online steps, and regional reporting centers.',
  keywords: [
    'cybercrime complaint pakistan 2026',
    'how to file cybercrime complaint in pakistan',
    'nccia complaint online registration',
    'nccia helpline 1799 pakistan',
    'complaint nccia gov pk tracking',
    'fia cyber crime wing defunct nccia',
    'online fraud complaint easypaisa jazzcash',
    'social media blackmail complaint pakistan peca',
  ],
  openGraph: {
    title: 'How to File Cybercrime Complaint in Pakistan (2026): NCCIA Portal & 1799 Helpline',
    description:
      'Step-by-step guide to reporting online financial fraud, blackmail, and harassment to the newly separated National Cyber Crimes Investigation Agency (NCCIA).',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/legal/cybercrime-complaint-nccia-guide-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/legal/cybercrime-complaint-nccia-guide-2026',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com/' },
        { '@type': 'ListItem', position: 2, name: 'Police & Legal Services', item: 'https://www.pakistaninfohub.com/legal' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Cybercrime Complaint NCCIA Guide 2026',
          item: 'https://www.pakistaninfohub.com/legal/cybercrime-complaint-nccia-guide-2026',
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to File a Cybercrime Complaint with NCCIA in Pakistan',
      description:
        'Step-by-step procedure to register a formal cybercrime complaint with the National Cyber Crimes Investigation Agency (NCCIA) via online web portal, 24/7 helpline 1799, or regional reporting centers.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Preserve Unaltered Digital Evidence',
          text: 'Take full uncropped screenshots showing date, time, and sender phone number or profile URL before blocking the suspect. Obtain stamped bank statements or transaction IDs for financial fraud.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Select Intake Channel (Helpline 1799 or Web Portal)',
          text: 'For active ongoing emergencies or financial account freezing, immediately dial toll-free helpline 1799. For standard reporting, visit the official portal complaint.nccia.gov.pk.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Fill Online Registration Form on complaint.nccia.gov.pk',
          text: 'Enter your 13-digit CNIC, mobile number, incident date, suspect identity/platform, detailed chronological narrative, and upload documentary proof files.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Obtain Tracking ID & Attend In-Person Inquiry if Summoned',
          text: 'Save the computerized complaint tracking ID. If required by the Cyber Crime Reporting Centre (CCRC) for forensic verification, bring your original CNIC and evidence printouts.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does the FIA Cyber Crime Wing still handle online fraud and harassment complaints?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Cybercrime investigation powers have officially transitioned from the Federal Investigation Agency (FIA) to the newly established National Cyber Crimes Investigation Agency (NCCIA) under Section 51 of the Prevention of Electronic Crimes Act (PECA) 2016 (Gazette notification S.R.O. 626(I)/2024). The FIA complaint portal (complaint.fia.gov.pk) no longer processes cybercrime complaints.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the correct official helpline number for cybercrime complaints in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The verified, official 24/7 toll-free helpline for the National Cyber Crimes Investigation Agency (NCCIA) is 1799. Old numbers previously associated with the FIA Cybercrime Wing (such as 1991) are deprecated for cyber matters. Scraper blog numbers like 9911 or 11345786 are unverified and inaccurate.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there any fee to file a cybercrime complaint with NCCIA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Filing a cybercrime complaint with NCCIA is 100% free of cost under Pakistani law. Government officers and police investigators will never charge any fee, commission, or processing charge. Anyone asking for an upfront fee or recovery percentage to retrieve scammed money is an imposter.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if the official NCCIA website (complaint.nccia.gov.pk) is unreachable or down?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The NCCIA portal is protected by Cloudflare WAF and can occasionally experience bot challenge blocks, network filtering, or temporary maintenance downtime. If the online portal cannot be reached, immediately dial the 24/7 toll-free helpline 1799, email helpdesk@nccia.gov.pk with your evidence attachments, or walk into your nearest regional Cyber Crime Reporting Centre (CCRC).',
          },
        },
        {
          '@type': 'Question',
          name: 'Can NCCIA freeze scammed funds sent through EasyPaisa, JazzCash, or bank transfers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, but timing is critical. If reported within the first 1 to 2 hours of the fraudulent transaction, NCCIA and your bank or mobile wallet operator can issue an emergency regulatory freeze on the beneficiary account before the scammer withdraws the cash at an ATM or agent shop.',
          },
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'How to File Cybercrime Complaint in Pakistan (2026): NCCIA Portal & 1799 Helpline Guide',
      description:
        'Comprehensive citizen legal manual detailing the transition of cyber offenses from FIA to NCCIA, verified contact channels, evidence preservation, and PECA 2016 rights.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-10-02',
      dateModified: '2026-10-02',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/legal/cybercrime-complaint-nccia-guide-2026',
    },
  ],
};

export default function CybercrimeComplaintNcciaPage() {
  const breadcrumbs = [
    { nameEn: 'Police & Legal Services', nameUr: 'پولیس و قانونی خدمات', url: '/legal' },
    { nameEn: 'Cybercrime Complaint NCCIA Guide 2026', nameUr: 'سائبر کرائم شکایت این سی سی آئی اے 2026' },
  ];

  const comparisonItems: ComparisonItem[] = [
    {
      titleEn: 'Defunct FIA Cyber Crime Wing (Obsolete Route)',
      titleUr: 'ایف آئی اے سائبر کرائم ونگ (سابقہ غیر فعال ادارہ)',
      subtitleEn: 'No longer designated or authorized to handle cyber offenses under PECA',
      subtitleUr: 'پیکا ایکٹ کے تحت سائبر مقدمات سننے کا اختیار ختم ہو چکا ہے',
      badgeEn: 'DEFUNCT / DO NOT USE',
      badgeUr: 'غیر فعال راستہ',
      badgeVariant: 'seal',
      pointsEn: [
        'The general FIA portal (complaint.fia.gov.pk) explicitly does NOT process cybercrime cases anymore.',
        'Old helpline 1991 is deprecated and no longer designated for cyber emergency dispatch.',
        'Submitting cyber fraud on the FIA portal leads to severe delays, automatic rejection, or case loss.',
        'FIA powers are now restricted to immigration, border control, money laundering, and federal corruption.',
      ],
      pointsUr: [
        'ایف آئی اے کا جنرل پورٹل اب سائبر شکایات وصول نہیں کرتا۔',
        'پرانا ہیلپ لائن نمبر 1991 سائبر معاملات کے لیے بند ہو چکا ہے۔',
        'ایف آئی اے پورٹل پر سائبر کیس جمع کرانے سے درخواست مسترد یا غیر معینہ تاخیر کا شکار ہو سکتی ہے۔',
        'ایف آئی اے اب صرف امیگریشن، اینٹی کرپشن اور غیر قانونی وائٹ کالر کرائمز تک محدود ہے۔',
      ],
    },
    {
      titleEn: 'National Cyber Crimes Investigation Agency (NCCIA - Current)',
      titleUr: 'نیشنل سائبر کرائمز انویسٹی گیشن ایجنسی (NCCIA - موجودہ ادارہ)',
      subtitleEn: 'Sole designated statutory agency under Section 51 of PECA 2016',
      subtitleUr: 'پیکا ایکٹ 2016 کے سیکشن 51 کے تحت واحد مجاز سرکاری ادارہ',
      badgeEn: 'OFFICIAL AGENCY 2026',
      badgeUr: 'سرکاری مجاز ادارہ',
      badgeVariant: 'emerald',
      isPopular: true,
      pointsEn: [
        'Created under Gazette S.R.O. 626(I)/2024 as the sole investigating body for all digital crimes.',
        'Live dedicated digital complaint form at complaint.nccia.gov.pk with secure file upload.',
        'Verified 24/7 nationwide toll-free cyber emergency helpline: 1799.',
        'Specialized Cyber Crime Reporting Centres (CCRC) and digital forensic laboratories operational nationwide.',
      ],
      pointsUr: [
        'سرکاری گزٹ S.R.O. 626(I)/2024 کے تحت قائم کردہ باضابطہ خودمختار ادارہ۔',
        'مخصوص آن لائن شکایت پورٹل complaint.nccia.gov.pk ثبوت اپلوڈ کرنے کی سہولت کے ساتھ فعال۔',
        'پورے پاکستان کے لیے تصدیق شدہ 24/7 ٹول فری ہیلپ لائن: 1799۔',
        'ملک بھر میں جدید ڈیجیٹل فرانزک لیبارٹریز اور سائبر کرائم رپورٹنگ سینٹرز فعال۔',
      ],
    },
  ];

  const processSteps: StepFlowItem[] = [
    {
      number: 1,
      icon: <Lock className="w-5 h-5 text-amber-500" />,
      titleEn: 'Preserve Unaltered Digital Evidence',
      titleUr: 'ڈیجیٹل ثبوتوں کو محفوظ کریں',
      descEn:
        'Capture full uncropped screenshots displaying visible timestamps, sender phone numbers, and profile URLs. Export full WhatsApp chat backups (.txt) and secure official stamped bank transaction IDs.',
      descUr:
        'مکمل سکرین شاٹس لیں جن میں تاریخ، وقت اور ملزم کا نمبر نظر آئے۔ واٹس ایپ چیٹ کا بیک اپ محفوظ کریں اور بینک سٹیٹمنٹ حاصل کریں۔',
      tagEn: 'Prerequisite',
      tagUr: 'لازمی مرحلہ',
      noteEn: 'Never delete messages or block suspects before capturing complete uncropped evidence.',
      noteUr: 'ثبوت محفوظ کرنے سے پہلے ملزم کو ہرگز بلاک یا پیغامات ڈیلیٹ نہ کریں۔',
    },
    {
      number: 2,
      icon: <PhoneCall className="w-5 h-5 text-emerald-500" />,
      titleEn: 'Contact Helpline 1799 or Open Portal',
      titleUr: 'ہیلپ لائن 1799 یا آن لائن پورٹل کا انتخاب',
      descEn:
        'If experiencing active financial theft or urgent blackmail threats, immediately dial 24/7 toll-free helpline 1799 for emergency intake. For standard filings, open complaint.nccia.gov.pk.',
      descUr:
        'ہنگامی مالیاتی فراڈ یا فوری بلیک میلنگ کی صورت میں 1799 پر کال کریں۔ عام شکایت کے لیے پورٹل استعمال کریں۔',
      tagEn: 'Intake Channel',
      tagUr: 'شکایت کا ذریعہ',
      noteEn: 'Helpline 1799 is free from any mobile network or landline in Pakistan.',
      noteUr: '1799 ہیلپ لائن تمام موبائل نیٹ ورکس سے بالکل مفت ہے۔',
    },
    {
      number: 3,
      icon: <FileText className="w-5 h-5 text-blue-500" />,
      titleEn: 'Submit Complaint Form with Dossier',
      titleUr: 'آن لائن فارم اور کوائف کا اندراج',
      descEn:
        'Enter your 13-digit CNIC, mobile number, platform used by scammer, incident chronological narrative, and attach evidence files. Ensure file names are clear and legible.',
      descUr:
        'اپنا شناختی کارڈ نمبر، موبائل نمبر، واقعے کی تفصیل اور ثبوت اپلوڈ کر کے فارم جمع کروائیں۔',
      tagEn: 'Submission',
      tagUr: 'درخواست کا اندراج',
      noteEn: 'Government filing is 100% free under PECA law; zero fees required.',
      noteUr: 'شکایت درج کرانے کی کوئی فیس نہیں ہے، یہ سروس بالکل مفت ہے۔',
    },
    {
      number: 4,
      icon: <Scale className="w-5 h-5 text-purple-500" />,
      titleEn: 'Obtain Tracking ID & Verification',
      titleUr: 'ٹریکنگ نمبر اور تفتیشی کارروائی',
      descEn:
        'Save the unique computerized Complaint ID. An Inquiry Officer (IO) from the regional CCRC is assigned to evaluate technical logs, request IP records from telecoms, and summon parties if required.',
      descUr:
        'کمپیوٹرائزڈ ٹریکنگ نمبر محفوظ کریں۔ متعلقہ رپورٹنگ سینٹر کا تفتیشی افسر فرانزک شواہد کی بنیاد پر کارروائی کرے گا۔',
      tagEn: 'Investigation',
      tagUr: 'قانونی کارروائی',
      noteEn: 'Bring original CNIC and printed evidence if summoned to your regional CCRC station.',
      noteUr: 'اگر طلب کیا جائے تو اصل شناختی کارڈ اور ثبوتوں کے پرنٹ ساتھ لے کر جائیں۔',
    },
  ];

  const faqItems: FAQVisualItem[] = [
    {
      questionEn: 'Why do many online articles and blogs still instruct citizens to go to FIA?',
      questionUr: 'انٹرنیٹ پر زیادہ تر مضامین اب بھی ایف آئی اے جانے کا کیوں کہتے ہیں؟',
      answerEn:
        'Because the transition of the Cyber Crime Wing from the FIA into the independent National Cyber Crimes Investigation Agency (NCCIA) occurred through federal notifications in 2024 and 2025. Many generic blog aggregators and outdated law directories have not updated their content. Submitting a cyber complaint on the general FIA portal (complaint.fia.gov.pk) will result in a notification stating that cybercrime complaints are no longer accepted there.',
      answerUr:
        'کیونکہ سائبر کرائم کی ذمہ داری ایف آئی اے سے این سی سی آئی اے کو 2024 اور 2025 کے نوٹیفیکیشنز کے تحت منتقل کی گئی ہے۔ انٹرنیٹ پر پرانے بلاگز اپڈیٹ نہیں ہوئے ہیں۔ اگر آپ ایف آئی اے پورٹل پر سائبر شکایت درج کرائیں گے تو وہ مسترد ہو جائے گی۔',
    },
    {
      questionEn: 'What is the verified helpline number for cybercrime complaints?',
      questionUr: 'سائبر کرائم کی شکایات کے لیے مصدقہ ہیلپ لائن نمبر کیا ہے؟',
      answerEn:
        'The verified, live 24/7 toll-free helpline is 1799. We have verified this directly from the official NCCIA header on nccia.gov.pk and complaint.nccia.gov.pk. Old numbers like 1991 (the old FIA cybercrime helpline) are defunct for cyber complaints. Unofficial numbers found on low-quality scraper sites (such as 9911 or 11345786) are mixed up with unrelated municipal services and must not be used.',
      answerUr:
        'مصدقہ 24/7 ٹول فری ہیلپ لائن 1799 ہے۔ یہ نمبر این سی سی آئی اے کی سرکاری ویب سائٹ پر موجود ہے۔ پرانا نمبر 1991 اب غیر فعال ہے اور انٹرنیٹ پر موجود دیگر غیر مصدقہ نمبرز پر بھروسہ نہ کریں۔',
    },
    {
      questionEn: 'What should I do if the official complaint portal (complaint.nccia.gov.pk) does not open?',
      questionUr: 'اگر سرکاری شکایت پورٹل complaint.nccia.gov.pk نہ کھلے تو کیا کریں؟',
      answerEn:
        'The NCCIA website and complaint portal are protected by Cloudflare Web Application Firewall (WAF) to prevent malicious cyber attacks. If you are using a VPN, proxy connection, or if the portal is undergoing server maintenance, you may see a connection timeout or 403 Forbidden screen. Do not delay your reporting: immediately call toll-free helpline 1799, email helpdesk@nccia.gov.pk with your CNIC and evidence, or visit your nearest Cyber Crime Reporting Centre (CCRC) in person.',
      answerUr:
        'این سی سی آئی اے کا پورٹل کلاؤڈ فلیئر سکیورٹی کے تحت ہے۔ اگر آپ وی پی این استعمال کر رہے ہیں یا ویب سائٹ عارضی طور پر بند ہے تو فوراً 1799 پر کال کریں یا helpdesk@nccia.gov.pk پر ای میل بھیجیں یا قریبی رپورٹنگ سینٹر تشریف لے جائیں۔',
    },
    {
      questionEn: 'Can someone help me recover money lost to a WhatsApp or EasyPaisa scam for a fee?',
      questionUr: 'کیا کوئی پرائیویٹ ریکوری ایجنٹ فیس لے کر میرے فراڈ کے پیسے واپس دلوا سکتا ہے؟',
      answerEn:
        'CRITICAL CAUTION: Absolutely NOT. Anyone on Facebook, TikTok, Instagram, or WhatsApp claiming to be a "Cyber Recovery Expert", "Ethical Hacker", or "FIA Recovery Agent" charging an advance fee or recovery commission is running a secondary scam. NCCIA is a sovereign law enforcement body; its services are 100% free under PECA. Never send money or share bank OTPs with anyone promising to retrieve your lost funds.',
      answerUr:
        'خبردار: بالکل نہیں۔ سوشل میڈیا پر خود کو ہیکر یا ریکوری ایجنٹ ظاہر کر کے پیسے مانگنے والے خود فراڈیے ہیں۔ این سی سی آئی اے کی تمام خدمات بالکل مفت ہیں۔ رقم کی بازیابی کے نام پر کسی کو ایک روپیہ بھی نہ دیں۔',
    },
    {
      questionEn: 'What legal sections under PECA 2016 apply to cyber blackmail and unauthorized photos?',
      questionUr: 'پیکا ایکٹ 2016 کے تحت بلیک میلنگ اور تصاویر کے غلط استعمال پر کون سی دفعات لاگو ہوتی ہیں؟',
      answerEn:
        'Cyber blackmail, morphing, and non-consensual photo or video dissemination are severe criminal offenses under Section 21 (Cyber Stalking) and Section 24 (Cyber Terrorism or offensive content) of the Prevention of Electronic Crimes Act (PECA), 2016. Offenses carry statutory imprisonment of up to 5 years and substantial fines.',
      answerUr:
        'پیکا ایکٹ 2016 کے سیکشن 21 (سائبر سٹاکنگ) اور سیکشن 24 کے تحت کسی کو ہراساں کرنا یا تصاویر ایڈیٹ کر کے بلیک میل کرنا سنگین جرم ہے جس میں 5 سال تک قید اور بھاری جرمانہ ہو سکتا ہے۔',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn max-w-5xl mx-auto font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Page Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="CYBERCRIME REPORTING DIRECTORY" labelUr="سائبر کرائم رپورٹنگ گائیڈ" variant="seal" />
            <VerifiedBadge textEn="STATUTORY PECA PROCEDURE 2026" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            How to File a Cybercrime Complaint in Pakistan (2026): NCCIA Portal, 1799 Helpline &amp; Evidence Guide
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پاکستان میں سائبر کرائم کی شکایت درج کرانے کا طریقہ: این سی سی آئی اے پورٹل، 1799 ہیلپ لائن اور رپورٹنگ سینٹرز
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Fallen victim to online banking fraud, WhatsApp blackmail, social media hacking, or fake profile harassment?
            Here is the authoritative, verified citizen guide explaining the formal transfer of cybercrime authority from FIA to
            the National Cyber Crimes Investigation Agency (NCCIA), verified contact channels, and evidence protocols.
          </p>
        </header>

        {/* Direct Answer Box (40-60 words strictly enforced) */}
        <DirectAnswerBox
          topicTitleEn="How Do You File a Cybercrime Complaint in Pakistan?"
          topicTitleUr="پاکستان میں سائبر کرائم کی شکایت کیسے درج کروائیں؟"
          answerEn="Cybercrime complaints in Pakistan have officially transitioned from FIA to the National Cyber Crime Investigation Agency (NCCIA). The FIA complaint portal no longer handles cyber offenses. File online at complaint.nccia.gov.pk, call the verified 24/7 toll-free helpline 1799, or visit a regional NCCIA reporting center with your CNIC and transaction or chat evidence."
          answerUr="پاکستان میں سائبر کرائم کی شکایات اب ایف آئی اے کے بجائے نیشنل سائبر کرائم انویسٹی گیشن ایجنسی (NCCIA) کے سپرد کر دی گئی ہیں۔ ایف آئی اے پورٹل اب سائبر شکایات وصول نہیں کرتا۔ شکایت کے لیے complaint.nccia.gov.pk استعمال کریں، 24/7 ٹول فری ہیلپ لائن 1799 پر کال کریں، یا اپنے شناختی کارڈ اور ثبوتوں کے ساتھ قریبی NCCIA رپورٹنگ سینٹر تشریف لے جائیں۔"
        />

        {/* Section 1: Major Institutional Change (FIA to NCCIA) */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              The Major Institutional Shift: Why You Must NOT File on the FIA Portal Anymore
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-amber-50/70 dark:bg-slate-900/80 border border-amber-200/80 dark:border-slate-800 space-y-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-doc-seal dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-base text-doc-seal dark:text-amber-300">
                  Critical Warning: FIA Cyber Crime Wing is Legally Defunct
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  For years, citizens were told to visit the Federal Investigation Agency (FIA) or its portal for any online fraud or harassment.
                  <strong> That is no longer the case.</strong>
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Under <strong>Section 51</strong> of the <strong>Prevention of Electronic Crimes Act (PECA), 2016</strong>, the federal government officially notified the creation of the
                  <strong> National Cyber Crimes Investigation Agency (NCCIA)</strong> via <em>The Gazette of Pakistan</em> (S.R.O. 626(I)/2024). All cybercrime investigative powers, personnel, forensic facilities, and pending inquiries previously housed within the FIA Cybercrime Wing were transferred to the NCCIA.
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  The FIA’s public complaint portal (<code className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-xs font-mono font-bold">complaint.fia.gov.pk</code>)
                  explicitly removed cybercrime from its operational dropdown categories. Submitting your cyber harassment or financial fraud complaint on the FIA website will cause severe delay or rejection. You must use the official NCCIA channels detailed below.
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Visual: Old vs New */}
          <ComparisonVisual
            titleEn="Side-by-Side: Defunct FIA Cyber Wing vs. Active NCCIA (2026)"
            titleUr="پرانا ایف آئی اے سائبر ونگ بمقابلہ نیا این سی سی آئی اے ادارہ"
            subtitleEn="Key institutional, portal & contact differences every Pakistani citizen must know"
            subtitleUr="ادارہ جاتی تبدیلی اور شکایات درج کرانے کا درست طریقہ کار"
            items={comparisonItems}
          />
        </section>

        {/* Section 2: What Counts as Reportable Cybercrime under PECA */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              What Counts as Reportable Cybercrime in Pakistan?
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            The Prevention of Electronic Crimes Act (PECA), 2016 defines clear categories of digital crimes that fall under the exclusive investigative jurisdiction of the NCCIA:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-sans">
            {/* Category 1 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-doc-brass font-serif font-bold text-sm">
                <CreditCard className="w-4 h-4" />
                <h3>Financial &amp; Banking Fraud</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Unauthorized fund transfers via EasyPaisa, JazzCash, Raast, or online bank accounts; fake lottery and Benazir Income Support Program (BISP) prize scams; and fraudulent loan apps charging predatory markup.
              </p>
              <span className="inline-block text-[10px] font-mono font-bold text-doc-seal dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded">
                PECA Sec 13 &amp; 14
              </span>
            </div>

            {/* Category 2 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-red-600 font-serif font-bold text-sm">
                <Lock className="w-4 h-4" />
                <h3>Blackmail &amp; Sextortion</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Extortion using private photos, videos, or audio; deepfakes and AI image morphing; threatening to leak personal media unless money is paid; and coercion for sexual favors.
              </p>
              <span className="inline-block text-[10px] font-mono font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/60 px-2 py-0.5 rounded">
                PECA Sec 21 &amp; 24
              </span>
            </div>

            {/* Category 3 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-purple-600 font-serif font-bold text-sm">
                <UserX className="w-4 h-4" />
                <h3>Identity Theft &amp; Impersonation</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Creating fake social media accounts using your name, photos, or CNIC; impersonating government officials, armed forces, or judges; and running fraudulent business pages under another company’s trademark.
              </p>
              <span className="inline-block text-[10px] font-mono font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded">
                PECA Sec 16
              </span>
            </div>

            {/* Category 4 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-blue-600 font-serif font-bold text-sm">
                <ShieldAlert className="w-4 h-4" />
                <h3>Account Hacking &amp; Malware</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Unauthorized takeover of WhatsApp, Facebook, Instagram, Gmail, or corporate servers; deployment of ransomware, spyware, or keyloggers; and unauthorized password changes.
              </p>
              <span className="inline-block text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded">
                PECA Sec 3 &amp; 4
              </span>
            </div>

            {/* Category 5 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 font-serif font-bold text-sm">
                <Smartphone className="w-4 h-4" />
                <h3>SIM Fraud &amp; Spoofing</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Biometric SIM fraud where unauthorized mobile numbers are activated on your CNIC without consent; spoofing bank official numbers to steal OTPs; and SIM swap fraud.
              </p>
              <span className="inline-block text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                PECA Sec 17 &amp; PTA Rules
              </span>
            </div>

            {/* Category 6 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-serif font-bold text-sm">
                <EyeOff className="w-4 h-4" />
                <h3>Cyberstalking &amp; Harassment</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Repeated unwanted messaging, virtual stalking, abusive voice notes, doxxing (publishing home addresses or phone numbers publicly to incite harassment), and gender-based cyber violence.
              </p>
              <span className="inline-block text-[10px] font-mono font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                PECA Sec 20 &amp; 21
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Interactive Evidence Checklist & Regional Reporting Centers */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Building className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Interactive Evidence Builder &amp; Regional Police Station Directory
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Use the interactive utility below to select your incident type and get a customized evidence preparation list,
            along with direct contact info for your regional Cyber Crime Reporting Centre (CCRC):
          </p>

          <NcciaComplaintHelper />
        </section>

        {/* Section 4: Step-by-Step Reporting Workflow */}
        <StepFlowDiagram
          titleEn="Official NCCIA Cybercrime Complaint Filing Workflow"
          titleUr="این سی سی آئی اے میں سائبر کرائم شکایت درج کرانے کا مرحلہ وار طریقہ کار"
          subtitleEn="Statutory procedure under Prevention of Electronic Crimes Act (PECA) 2016"
          subtitleUr="پیکا ایکٹ 2016 کے تحت تصدیق شدہ 4 مراحل"
          steps={processSteps}
        />

        {/* Section 5: Golden Rules for Evidence Preservation */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              The 5 Golden Rules of Preserving Cyber Evidence (Before Filing)
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Cybercrime cases stand or fall on the technical integrity of digital evidence. Under Pakistani evidentiary law
              (Qanun-e-Shahadat Order &amp; PECA Chapter IV), digital trails must remain unaltered. Follow these five rules strictly:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="font-mono font-bold text-doc-brass text-sm">Rule 1</span>
                <h4 className="font-serif font-bold text-doc-ink dark:text-white">Never Crop Screenshots</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Keep the full device screen visible, including the top status bar (battery percentage, carrier signal, time)
                  and bottom navigation. Cropped images are routinely challenged in court as potentially manipulated.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="font-mono font-bold text-doc-brass text-sm">Rule 2</span>
                <h4 className="font-serif font-bold text-doc-ink dark:text-white">Record Full Profile URLs (Not Just Usernames)</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Scammers frequently change their display names or profile pictures. Copy the exact unique URL link of the profile
                  (e.g., <code className="text-[11px] font-mono">facebook.com/profile.php?id=1000...</code> or <code className="text-[11px] font-mono">instagram.com/handle</code>).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="font-mono font-bold text-doc-brass text-sm">Rule 3</span>
                <h4 className="font-serif font-bold text-doc-ink dark:text-white">Export Full WhatsApp Chat with Media</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Open the chat &gt; tap Contact Info &gt; Export Chat &gt; &quot;Attach Media&quot;. This produces an unedited <code className="text-[11px] font-mono">.txt</code> transcript
                  with exact server timestamps that forensic officers can verify against telecom metadata.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="font-mono font-bold text-doc-brass text-sm">Rule 4</span>
                <h4 className="font-serif font-bold text-doc-ink dark:text-white">Get Stamped Bank Statement for Transactions</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  In financial fraud cases, standard app screenshots are not enough for court proceedings. Visit your bank branch or
                  download an official e-statement bearing the Transaction ID (TID), sender account, beneficiary IBAN, and date/time.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5 md:col-span-2">
                <span className="font-mono font-bold text-doc-brass text-sm">Rule 5</span>
                <h4 className="font-serif font-bold text-doc-ink dark:text-white">Screen Record Disappearing or Expiring Messages</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  If the perpetrator is sending &quot;View Once&quot; photos, disappearing messages, or deleting messages for everyone, use a secondary mobile phone to record video of the chat screen in real time. Do NOT attempt to take screenshots of &quot;View Once&quot; media on WhatsApp or Instagram, as the app blocks it or notifies the sender.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Critical Caution Against Imposters & Scammers */}
        <section className="space-y-4">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-red-950/90 to-slate-900 border-2 border-red-500/60 text-white space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <ShieldAlert className="w-7 h-7 text-red-400 shrink-0" />
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-red-500/20 text-red-300 px-2.5 py-0.5 rounded border border-red-500/40">
                  Critical Citizen Caution
                </span>
                <h3 className="text-lg sm:text-xl font-serif font-extrabold text-white mt-1">
                  Beware of Fake &quot;Cyber Recovery Agents&quot; &amp; Imposter Facebook Pages
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              When citizens lose money in online investment scams or EasyPaisa fraud, they frequently search for help on Google, Facebook, or TikTok.
              A widespread secondary scam network operates by running ads titled <em>&quot;FIA Cyber Help Desk&quot;</em>, <em>&quot;Ethical Hacker Money Recovery&quot;</em>, or <em>&quot;NCCIA Legal Recovery Cell&quot;</em>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs font-sans">
              <div className="p-3.5 rounded-xl bg-red-900/30 border border-red-800/60 space-y-1">
                <span className="font-bold text-red-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  NCCIA Filing is 100% Free
                </span>
                <p className="text-slate-300">
                  Neither the NCCIA, the FIA, nor any Pakistani police department charges any fee to file a cybercrime complaint or freeze a fraudulent bank account.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-red-900/30 border border-red-800/60 space-y-1">
                <span className="font-bold text-red-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  No Agency Asks for Recovery Advance
                </span>
                <p className="text-slate-300">
                  Anyone asking for a &quot;file opening fee&quot;, &quot;server access charge&quot;, or 10% recovery commission is an active fraudster. Block them immediately.
                </p>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <Info className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                Always confirm you are dealing only with the official domain <strong>nccia.gov.pk</strong>, <strong>complaint.nccia.gov.pk</strong>, or the verified toll-free helpline <strong>1799</strong>.
              </span>
            </div>
          </div>
        </section>

        {/* Section 7: Portal Availability & Cloudflare Downtime Fallback */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Official Portal Live Status &amp; What to Do During Downtime
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 text-xs font-sans">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Live Verification Status: Operational Behind Cloudflare WAF
              </span>
              <span className="text-[11px] text-slate-400 font-mono">Last Verified Live: October 2026</span>
            </div>

            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              The official portal (<code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono font-bold">complaint.nccia.gov.pk</code>)
              and main website (<code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono font-bold">nccia.gov.pk</code>) are actively deployed under the Ministry of Interior and Narcotics Control.
            </p>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Understanding Potential Downtime &amp; 403 Challenges:</strong> Because the portal handles sensitive sovereign cyber inquiries, it is protected by enterprise Cloudflare security with automated challenge mitigation. As observed by independent monitors in late 2026, visitors accessing via corporate VPNs, mobile proxies, or during server load may occasionally receive a <em>403 Forbidden</em>, Cloudflare Turnstile block, or connection timeout.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <h4 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                If the Online Portal is Inaccessible, Use These 3 Immediate Fallbacks:
              </h4>
              <ol className="list-decimal list-inside space-y-1.5 text-slate-600 dark:text-slate-300">
                <li>
                  <strong>Call Toll-Free Helpline 1799:</strong> Operates 24 hours a day, 7 days a week. The intake officer logs your initial complaint directly into the sovereign case tracking system.
                </li>
                <li>
                  <strong>Email helpdesk@nccia.gov.pk:</strong> Send your 13-digit CNIC, mobile phone number, city, chronological incident statement, and attach uncropped screenshot files.
                </li>
                <li>
                  <strong>Walk into Your Regional CCRC Station:</strong> Visit in person (e.g., Tech Society Canal Road in Lahore, Gulistan-e-Johar in Karachi, or Sector G-10/4 in Islamabad) with your CNIC and evidence printouts.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 8: Institutional Oversight & Accountability Context */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Institutional Oversight &amp; Accountability
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              As part of the institutional transition from the FIA to the NCCIA, the federal government established dedicated internal accountability and compliance wings directly subordinate to the Director General (DG) NCCIA and the Ministry of Interior.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Citizens who experience procedural delay, unlawful demand for money, or refusal to register a valid PECA complaint can escalate their grievance directly to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
              <li><strong>DG NCCIA Grievance Cell:</strong> NCCIA Headquarters, National Police Foundation Building, Sector G-10/4, Islamabad.</li>
              <li><strong>Ministry of Interior Public Complaint Desk:</strong> Pak Secretariat, Islamabad.</li>
              <li><strong>Prime Minister’s Performance Delivery Unit (PMDU):</strong> Via the Pakistan Citizen Portal (PCP) mobile application under the Cyber Crime category.</li>
            </ul>
          </div>
        </section>

        {/* Section 9: Frequently Asked Questions (FAQAccordionVisual) */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Citizen Guidance 2026)"
          titleUr="سائبر کرائم شکایات سے متعلق ضروری سوالات و جوابات"
          subtitleEn="Verified legal, operational & portal clarifications under PECA 2016"
          subtitleUr="پیکا ایکٹ 2016 اور این سی سی آئی اے ضوابط کی روشنی میں تصدیق شدہ جوابات"
          items={faqItems}
        />

        {/* Section 10: Verified Government Sources & Legal Citations */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Official Regulatory Sources &amp; Legal Citations
          </h2>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-sans space-y-2 text-slate-600 dark:text-slate-400">
            <p>
              This guide is compiled from verified public statutory sources, gazette notifications, and direct official portal verifications:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Prevention of Electronic Crimes Act (PECA), 2016:</strong> Act No. XL of 2016, specifically Section 51 (Power to establish specialized investigation agency) and procedural chapters.
              </li>
              <li>
                <strong>The Gazette of Pakistan Extraordinary:</strong> S.R.O. 626(I)/2024 notifying the establishment, powers, and functions of the National Cyber Crimes Investigation Agency (NCCIA).
              </li>
              <li>
                <strong>Ministry of Interior &amp; Narcotics Control, Government of Pakistan:</strong> Administrative oversight orders transferring assets, personnel, and cyber jurisdictions from FIA to NCCIA.
              </li>
              <li>
                <strong>Official NCCIA Online Portal &amp; Helpline Registry:</strong> <code className="font-mono">nccia.gov.pk</code>, <code className="font-mono">complaint.nccia.gov.pk</code>, and 24/7 Helpline 1799.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 11: Related Police & Legal Services Links */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Police &amp; Legal Services Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/legal/online-fir-registration-punjab-police"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-seal font-bold uppercase block">Police 1787</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Online FIR Complaint Punjab Police
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                How to report physical crimes, thefts, and police non-registration of FIRs.
              </p>
            </Link>

            <Link
              href="/legal/police-khidmat-markaz-services-guide-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-emerald-600 font-bold uppercase block">PKM Network</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Police Khidmat Markaz 14 Services
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Character certificates, tenant verifications, and certified FIR copies.
              </p>
            </Link>

            <Link
              href="/legal/consumer-court-complaint-how-to-file-pakistan-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Consumer Court</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Consumer Court Complaint Guide
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                How to recover money for defective goods and commercial services without a lawyer.
              </p>
            </Link>
          </div>
        </section>

        {/* Section 12: Independent Site Disclaimer */}
        <div className="p-4 rounded-xl bg-navy-900 border-l-4 border-red-600 text-slate-300 text-xs font-sans space-y-1">
          <p className="font-bold text-white uppercase tracking-wider text-[11px]">
            Independent Civic Information Portal Disclaimer
          </p>
          <p className="leading-relaxed">
            Pakistan Info Hub (pakistaninfohub.com) is an independent public information platform dedicated to educating citizens
            on statutory rights and administrative workflows. We are NOT affiliated with, authorized by, or endorsed by the
            National Cyber Crimes Investigation Agency (NCCIA), the Federal Investigation Agency (FIA), or the Government of Pakistan.
            All official filings, inquiries, and legal proceedings must be routed through official government channels at <code className="text-amber-400">nccia.gov.pk</code> or by dialing 1799.
          </p>
        </div>
      </div>
    </>
  );
}
