import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { StepFlowDiagram } from '@/components/StepFlowDiagram';
import { FAQAccordionVisual } from '@/components/visuals/FAQAccordionVisual';
import {
  QrCode,
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Search,
  ExternalLink,
  PhoneCall,
  Clock,
  HelpCircle,
  TrendingDown,
  ArrowRight,
  Sparkles,
  Info,
  Calendar,
  Lock,
  Building2,
  RefreshCw,
  Landmark,
  BadgeAlert,
  Send,
  CreditCard,
  Ban,
  Radio,
  Receipt,
  Gift,
  ShieldCheck,
  ShoppingBag,
  Store,
  Users,
  Building,
  User,
  Check,
  Copy,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FBR POS Invoice Verification & Prize Scheme Guide 2026',
  description:
    'Complete guide to FBR POS invoice verification via Tax Asaan app & SMS 9966, Tier-1 retailer rules, Pakki Receipt verification status, and honest operational status of the FBR prize scheme.',
  keywords: [
    'fbr pos invoice verification',
    'fbr online portal',
    'aop stands for in fbr',
    'fbr pos prize scheme 2026',
    'tax asaan app invoice verification',
    'sms 9966 invoice verification',
    'fbr pakki receipt check',
    'tier 1 retailer pos integration fbr',
    'association of persons income tax pakistan',
  ],
  openGraph: {
    title: 'FBR POS Invoice Verification & Prize Scheme Guide 2026',
    description:
      'How to verify FBR QR-coded shopping invoices, confirm retailer tax transmission, resolve unverified receipts, and navigate the FBR online portal ecosystem.',
    url: 'https://www.pakistaninfohub.com/tax/fbr-pos-invoice-verification-prize-scheme-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/tax/fbr-pos-invoice-verification-prize-scheme-2026',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Tax & FBR Services', item: 'https://www.pakistaninfohub.com/tax' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'FBR POS Invoice Verification & Prize Scheme',
          item: 'https://www.pakistaninfohub.com/tax/fbr-pos-invoice-verification-prize-scheme-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'FBR POS Invoice Verification & Prize Scheme Guide 2026: Tier-1 Receipts, SMS 9966 & Portal Ecosystem',
      description:
        'Authoritative consumer guide detailing how to verify FBR Point of Sale (POS) computerized retail receipts via Tax Asaan app and SMS 9966, handling unverified invoices, and distinguishing portal access.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/tax/fbr-pos-invoice-verification-prize-scheme-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Verify an FBR POS Invoice via Tax Asaan or SMS',
      description: 'Step-by-step verification method for retail sales receipts issued by Tier-1 integrated enterprises across Pakistan.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Demand a Computerized Pakki Receipt',
          text: 'Request a computerized POS invoice featuring an official 16-digit FBR Invoice Number and QR code at checkout.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Open Tax Asaan App or SMS Interface',
          text: 'Launch the official Tax Asaan app (POS menu > Verify Invoice) or draft a message on your mobile phone to 9966.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Scan QR Code or Send Exact SMS Format',
          text: 'Scan the printed QR code in-app, or send SMS formatted strictly as: INV <space> CNIC <space> InvoiceNumber to 9966.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Inspect Verification Status',
          text: 'Confirm the system displays "Verified" along with registered retailer details, or flags "Unverified" for non-reported sales.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I need the Tax Asaan mobile app, or does SMS 9966 work too?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both work reliably. The Tax Asaan app provides instant camera-based QR code scanning and detailed business data, while SMS 9966 allows quick verification on any phone by texting "INV <CNIC> <InvoiceNumber>".',
          },
        },
        {
          '@type': 'Question',
          name: 'What does it mean if my shopping receipt shows "Unverified"?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An "Unverified" status means the retailer collected general sales tax (GST) from you at checkout but failed to transmit the transaction record to the central FBR computerized server. You can report this tax suppression directly via the "Report Invoice" button inside the Tax Asaan app.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the FBR POS prize scheme still active in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. While the computerized POS invoice verification system remains 100% active and mandatory for Tier-1 retailers, the computerized monthly cash prize draws (historically Rs. 53 million monthly) remain officially suspended and inactive. The FBR verification tool is currently an audit and consumer transparency instrument rather than an active lottery.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does every single grocery shop or retail receipt qualify?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Only Tier-1 retailers (national/international retail chains, air-conditioned shopping malls, large department stores with 1,000+ sq ft area, and businesses with annual electricity bills exceeding statutory thresholds) are legally mandated to integrate with FBR POS systems. Small neighborhood karyana stores and unregistered standalone shops do not issue FBR QR-coded receipts.',
          },
        },
        {
          '@type': 'Question',
          name: 'What exactly is a "Tier-1 Retailer" under Sales Tax law?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under Section 2(43A) of the Sales Tax Act 1990, Tier-1 retailers include retail chains operating across multiple branches, businesses in air-conditioned malls, stores with bulk electricity utility bills, and retailers importing or selling branded luxury goods.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there any fee or charge to verify an FBR invoice?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Invoice verification is 100% free on the Tax Asaan mobile app and FBR online web portal. If verifying via SMS to 9966, standard cellular SMS carrier fees (approx. Rs. 2.00 plus tax) apply depending on your network operator.',
          },
        },
      ],
    },
  ],
};

const processSteps = [
  {
    number: '01',
    titleEn: 'Shop at a Tier-1 Retailer',
    titleUr: 'ٹیئر ون ریٹیلر سے خریداری',
    descEn: 'Purchase goods from integrated shopping malls, branded outlets, or departmental chains.',
    descUr: 'ایف بی آر سے منسلک شاپنگ مالز یا برانڈڈ سٹورز سے خریداری کریں۔',
    tagEn: 'Tier-1 Outlets',
    tagUr: 'منسلک سٹورز',
  },
  {
    number: '02',
    titleEn: 'Obtain QR-Coded Computer Receipt',
    titleUr: 'کیو آر کوڈ والی پکی رسید حاصل کریں',
    descEn: 'Ensure the receipt has a 16-digit FBR Invoice Number and a scannable computerized barcode.',
    descUr: 'رسید پر 16 ہندسوں کا ایف بی آر انوائس نمبر اور کیو آر کوڈ چیک کریں۔',
    tagEn: 'Pakki Receipt',
    tagUr: 'مصدقہ رسید',
  },
  {
    number: '03',
    titleEn: 'Verify via Tax Asaan or SMS 9966',
    titleUr: 'ٹیکس آسان ایپ یا 9966 سے تصدیق',
    descEn: 'Scan with Tax Asaan app or text "INV <CNIC> <InvoiceNumber>" to 9966.',
    descUr: 'ایپ سے کیو آر کوڈ اسکین کریں یا 9966 پر ایس ایم ایس بھیجیں۔',
    tagEn: 'Instant Check',
    tagUr: 'فوری تصدیق',
  },
  {
    number: '04',
    titleEn: 'Review Live Verification Status',
    titleUr: 'ریکارڈ کی تصدیق یا رپورٹنگ',
    descEn: 'Confirm "Verified" receipt status or report tax evasion directly if marked "Unverified".',
    descUr: 'اگر رسید ان ویریفائیڈ آئے تو ایپ کے ذریعے فوری شکایت درج کروائیں۔',
    tagEn: 'Citizen Audit',
    tagUr: 'شہری احتساب',
  },
];

const faqsData = [
  {
    questionEn: 'Do I need the Tax Asaan app, or does SMS 9966 work too?',
    questionUr: 'کیا ٹیکس آسان ایپ ضروری ہے یا 9966 ایس ایم ایس بھی کام کرتا ہے؟',
    answerEn:
      'Both methods work reliably. The Tax Asaan mobile app offers the smoothest experience with instant camera-based QR code scanning and detailed business information. However, if you are offline or using a basic feature phone, sending an SMS formatted as "INV <CNIC> <InvoiceNumber>" to 9966 provides immediate confirmation of the invoice\'s legal status in the FBR central database.',
    answerUr:
      'دونوں طریقے مکمل فعال ہیں۔ ٹیکس آسان ایپ پر کیمرے سے کیو آر کوڈ اسکین کرنا نہایت آسان ہے۔ جبکہ کسی بھی موبائل سے 9966 پر "INV [شناختی کارڈ] [انوائس نمبر]" لکھ کر میسج بھیجنے پر بھی فوری جوابی تصدیق موصول ہو جاتی ہے۔',
    category: 'Verification Channels',
  },
  {
    questionEn: 'What does it mean if my shopping receipt shows "Unverified"?',
    questionUr: 'اگر میری رسید "Unverified" ظاہر ہو تو اس کا کیا مطلب ہے؟',
    answerEn:
      'An "Unverified" message means that while the retailer collected sales tax (GST) from your total bill at the counter, their POS machine failed to transmit the transaction record to the FBR central server. This indicates potential tax concealment. You can immediately tap "Report Invoice" inside the Tax Asaan app, upload a snapshot of your receipt, and report the retailer for departmental audit.',
    answerUr:
      'انویرفائیڈ رسید کا مطلب ہے کہ دکاندار نے آپ سے سیلز ٹیکس وصول کر لیا لیکن اس کا اندراج ایف بی آر کے مرکزی سرور پر نہیں کیا۔ یہ ٹیکس چوری کا شبہ ہے۔ آپ ٹیکس آسان ایپ پر رسید کی تصویر اپ لوڈ کر کے موقع پر ہی رپورٹ درج کروا سکتے ہیں۔',
    category: 'Tax Compliance',
  },
  {
    questionEn: 'Is the FBR POS prize scheme still running in 2026?',
    questionUr: 'کیا ایف بی آر انعامی اسکیم 2026 میں بھی فعال ہے؟',
    answerEn:
      'No. While the electronic POS invoice verification framework remains 100% active and legally compulsory for Tier-1 retailers across Pakistan, the computerized monthly cash prize draws (which previously distributed Rs. 53 million monthly to 1,007 ballot winners) remain officially suspended and inactive. Do not rely on outdated articles promising active lottery prizes; invoice verification currently serves as an anti-tax evasion audit tool.',
    answerUr:
      'جی نہیں، اگرچہ رسیدوں کی آن لائن تصدیق کا نظام مکمل فعال اور لازمی ہے، لیکن ماہانہ انعامی قرعہ اندازی فی الوقت معطل ہے۔ انٹرنیٹ پر پرانی خبروں کو دیکھ کر کسی نقد انعام کی توقع نہ رکھیں؛ رسید چیک کرنا اب ٹیکس چوری روکنے کا مصدقہ ذریعہ ہے۔',
    category: 'Prize Status',
  },
  {
    questionEn: 'Does every retailer receipt qualify for FBR verification?',
    questionUr: 'کیا ہر عام دکان کی رسید ایف بی آر سے منسلک ہوتی ہے؟',
    answerEn:
      'No. The law restricts mandatory real-time electronic POS integration exclusively to "Tier-1 Retailers". Small neighborhood karyana stores, local fruit vendors, independent bakeries, and informal retail kiosks do not have integrated FBR computerized cash registers and therefore do not issue FBR QR-coded receipts.',
    answerUr:
      'ہرگز نہیں۔ قانون کے مطابق صرف بڑے ٹیئر ون ریٹیلرز (جیسے شاپنگ مالز، برانڈڈ اسٹورز اور بڑے ڈیپارٹمنٹل اسٹورز) ہی ایف بی آر سسٹم سے منسلک ہیں۔ محلے کے عام کریانہ اسٹورز یا چھوٹی دکانوں کی رسیدوں پر یہ کیو آر کوڈ موجود نہیں ہوتا۔',
    category: 'Retail Eligibility',
  },
  {
    questionEn: 'What legally defines a "Tier-1 Retailer" under FBR rules?',
    questionUr: 'ایف بی آر کے مطابق ٹیئر ون ریٹیلر کون ہوتا ہے؟',
    answerEn:
      'Under Section 2(43A) of the Sales Tax Act 1990, a Tier-1 retailer includes: (1) retail stores operating as part of a national or international chain; (2) outlets operating within air-conditioned shopping malls or plazas; (3) retailers with retail space exceeding 1,000 square feet (2,000 sq ft for jewelers); and (4) retailers whose annual electricity bills exceed specified statutory thresholds.',
    answerUr:
      'سیلز ٹیکس ایکٹ کے سیکشن 2(43A) کے تحت، ٹیئر ون ریٹیلرز میں وہ تمام برانڈز شامل ہیں جن کی ایک سے زائد شاخیں ہوں، ایئر کنڈیشنڈ مالز میں واقع دکانیں، 1000 مربع فٹ سے بڑی دکانیں یا وہ بڑے کاروبار جن کا بجلی کا بل سالانہ حد سے تجاوز کرتا ہو۔',
    category: 'Legal Definition',
  },
  {
    questionEn: 'Is there any service charge or cost to verify an invoice?',
    questionUr: 'کیا رسید کی تصدیق پر کوئی فیس یا خرچہ آتا ہے؟',
    answerEn:
      'Verifying invoices via the official Tax Asaan mobile app or the FBR web portal is completely free of cost. If you verify via SMS 9966, standard mobile network carrier rates for an outgoing SMS (typically around Rs. 2.00 to Rs. 2.50 plus applicable telecom taxes) apply.',
    answerUr:
      'ٹیکس آسان ایپ یا ویب پورٹل سے رسید چیک کرنا بالکل مفت ہے۔ اگر آپ 9966 پر ایس ایم ایس کے ذریعے تصدیق کریں گے تو صرف عام موبائل ایس ایم ایس چارجز (تقریباً 2 سے ڈھائی روپے) لاگو ہوں گے۔',
    category: 'Cost & Fees',
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { nameEn: 'Home', nameUr: 'ہوم', url: '/' },
            { nameEn: 'Tax & FBR Services', nameUr: 'ٹیکس اور ایف بی آر', url: '/tax' },
            {
              nameEn: 'FBR POS Invoice Verification & Prize Scheme',
              nameUr: 'ایف بی آر پی او ایس انوائس ویریفیکیشن و انعامی اسکیم',
            },
          ]}
        />

        {/* Hero Header */}
        <header className="bg-doc-paper dark:bg-doc-dark-card border-2 border-doc-brass/40 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 relative z-10">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <VerifiedBadge variant="header" textEn="RETAIL SALES TAX VERIFIER 2026" />
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-900">
                <QrCode className="w-3.5 h-3.5 text-emerald-600" />
                <span>PAKKI RECEIPT / TIER-1 INTEGRATION</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full border border-slate-300 dark:border-slate-700">
                <Send className="w-3.5 h-3.5 text-doc-seal" />
                <span>SMS SHORTCODE: 9966</span>
              </span>
            </div>

            <h1 className="font-serif font-extrabold text-2xl sm:text-3xl md:text-4xl text-doc-ink dark:text-slate-100 tracking-tight leading-tight">
              FBR POS Invoice Verification &amp; Prize Scheme Guide 2026
            </h1>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans max-w-3xl">
              Learn how to verify computerized retail shopping receipts using the Tax Asaan mobile app and SMS 9966. Discover
              what constitutes a genuine FBR &quot;Pakki Receipt&quot; from Tier-1 retailers, how to spot unverified invoices, and read
              the verified operational facts regarding the FBR POS prize scheme status.
            </p>
          </div>
        </header>

        {/* Direct Answer Box (40-60 words mandatory requirement) */}
        <DirectAnswerBox
          topicTitleEn="Quick Summary: How to Verify FBR POS Invoices & Prize Scheme Status"
          topicTitleUr="فوری خلاصہ: رسید کیسے چیک کریں اور انعامی اسکیم کی کیا پوزیشن ہے؟"
          answerEn="FBR POS invoice verification lets shoppers confirm retailers report collected sales tax. Verify in seconds: scan the receipt's QR code on the Tax Asaan app or text 'INV <CNIC> <InvoiceNumber>' to 9966. While electronic receipt verification remains active and mandatory for Tier-1 retailers, the computerized monthly cash prize draw is currently suspended and inactive."
          answerUr="ایف بی آر پی او ایس انوائس ویریفیکیشن کے ذریعے شہری دکاندار کے سیلز ٹیکس اندراج کی تصدیق کرتے ہیں۔ ٹیکس آسان ایپ پر کیو آر کوڈ اسکین کریں یا 9966 پر ایس ایم ایس بھیجیں۔ اگرچہ رسیدوں کی آن لائن تصدیق مکمل فعال ہے، لیکن نقد انعامی قرعہ اندازی فی الوقت معطل ہے۔"
        />

        {/* Operational Reality Banner: Prize Scheme Status Check */}
        <section className="p-5 sm:p-6 rounded-3xl bg-amber-500/10 border-2 border-amber-500/40 space-y-3 relative overflow-hidden">
          <div className="flex items-start gap-3">
            <BadgeAlert className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h2 className="font-serif font-bold text-base sm:text-lg text-amber-900 dark:text-amber-200">
                Verified Operational Status: POS Monthly Cash Prize Draws Are Currently Suspended
              </h2>
              <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-300/90 leading-relaxed font-sans">
                Many online portals copy older press releases from 2021–2022 promising Rs. 53 million in monthly lottery draws (with
                a Rs. 1 million first prize). <strong>In reality, the FBR officially suspended the prize draw component</strong> to
                re-evaluate the distribution model and audit mechanism. While you should continue verifying your shopping receipts
                to prevent GST embezzlement and ensure legitimate transactions, <strong>no active prize draws are occurring as of 2026</strong>.
                If the Ministry of Finance formally resumes the lottery, this page will update immediately.
              </p>
            </div>
          </div>
        </section>

        {/* StepFlow Process: How POS Verification Works */}
        <section className="space-y-4">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-doc-seal dark:text-red-400 font-bold">
              VERIFICATION WORKFLOW
            </span>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-doc-ink dark:text-slate-100">
              How to Verify a Retail Sales Invoice: Step-by-Step
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans">
              Follow this sequence every time you complete a transaction at an integrated shopping mall or retail chain.
            </p>
          </div>

          <StepFlowDiagram
            titleEn="Citizen Verification Process for FBR POS Receipts"
            titleUr="ایف بی آر رسید کی تصدیق کا مرحلہ وار طریقہ کار"
            subtitleEn="Scan via Tax Asaan or send official 9966 SMS command"
            subtitleUr="ٹیکس آسان ایپ سے کیو آر اسکین کریں یا 9966 پر ایس ایم ایس بھیجیں"
            steps={processSteps}
          />
        </section>

        {/* Verification Channels: Tax Asaan App vs SMS 9966 */}
        <section className="bg-white dark:bg-doc-dark-card border border-doc-brass/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-doc-seal dark:text-red-400 font-mono text-xs uppercase font-bold tracking-wider">
              <Smartphone className="w-4 h-4" />
              <span>OFFICIAL VERIFICATION METHODS</span>
            </div>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-doc-ink dark:text-slate-100">
              Tax Asaan Mobile App vs. SMS 9966: Verified Formats
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tax Asaan App Card */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    <QrCode className="w-3.5 h-3.5" />
                    <span>RECOMMENDED METHOD</span>
                  </span>
                  <span className="text-xs font-sans text-slate-500">Android &amp; iOS</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-slate-100">
                  Method A: Tax Asaan Mobile App
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2 font-sans">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Download official <strong>&quot;Tax Asaan&quot;</strong> app from Play Store or App Store.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Tap <strong>&quot;POS&quot;</strong> on the home screen, then select <strong>&quot;Verify Invoice&quot;</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Point your phone camera at the QR code printed at the foot of your receipt.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Displays live business title, STRN, total tax charged, and instant verified tag.</span>
                  </li>
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-900 dark:text-emerald-300">
                💡 <strong>Audit Benefit:</strong> If an invoice fails, the app provides a one-tap &quot;Report Invoice&quot; button to alert FBR enforcement teams.
              </div>
            </div>

            {/* SMS 9966 Card */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                    <Send className="w-3.5 h-3.5" />
                    <span>NO SMARTPHONE NEEDED</span>
                  </span>
                  <span className="text-xs font-sans text-slate-500">Works on all phones</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-slate-100">
                  Method B: Shortcode SMS to 9966
                </h3>
                <div className="space-y-2">
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans">
                    FBR updated the SMS verification format to record consumer identity. Use this exact syntax:
                  </p>
                  <div className="p-3 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs sm:text-sm space-y-1">
                    <div className="text-slate-400 text-[11px] font-sans">Mandatory Format:</div>
                    <div className="font-bold tracking-wider select-all">
                      INV [13-Digit CNIC] [FBR-Invoice-No]
                    </div>
                    <div className="text-slate-400 text-[11px] pt-1 font-sans">Example:</div>
                    <div className="text-slate-300 text-xs">
                      INV 3520112345671 1002345678901234
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                  Send to <strong>9966</strong>. You will receive an automated response confirming whether that invoice number exists in FBR central ledgers.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs text-blue-900 dark:text-blue-300">
                ⚠️ <strong>Note on Older Formats:</strong> Previous press releases omitted the CNIC. FBR&apos;s active gateway requires your 13-digit CNIC between <code>INV</code> and the invoice number.
              </div>
            </div>
          </div>
        </section>

        {/* Ad Placement Zone */}
        <AdPlacementZone />

        {/* FBR Online Portal Ecosystem: Quick Links & Clarification */}
        <section className="bg-doc-paper dark:bg-doc-dark-card border border-doc-brass/30 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-doc-seal dark:text-red-400 font-bold">
              PORTAL DIRECTORY
            </span>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-doc-ink dark:text-slate-100">
              Understanding the &quot;FBR Online Portal&quot; Ecosystem: IRIS vs. Main Web Portal
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            A frequent point of confusion among taxpayers is searching for the generic &quot;FBR online portal&quot;. The Federal
            Board of Revenue actually operates two distinct digital platforms serving entirely different purposes:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-doc-brass/20 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                  Tax Filing &amp; Registration
                </span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-slate-100">
                FBR IRIS 2.0 Portal (iris.fbr.gov.pk)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                Dedicated secure transactional portal requiring CNIC/password login. Used for:
              </p>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 font-sans">
                <li>• Filing Annual Income Tax Returns (Form 114)</li>
                <li>• Registering for a new National Tax Number (NTN)</li>
                <li>• Reconciling Wealth Statements (Section 116)</li>
                <li>• Generating 17-digit PSID payment challans</li>
              </ul>
              <a
                href="https://iris.fbr.gov.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-doc-seal dark:text-red-300 hover:underline pt-2"
              >
                <span>Launch IRIS 2.0 Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-doc-brass/20 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">
                  Public Inquiries &amp; Verification
                </span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-slate-100">
                FBR Official Web Portal (fbr.gov.pk / e.fbr.gov.pk)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                Public informational and public inquiry database requiring no login credentials. Used for:
              </p>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 font-sans">
                <li>• Active Taxpayer List (ATL) live CNIC lookups</li>
                <li>• POS online computerized invoice verification</li>
                <li>• Reading Finance Acts, SROs &amp; Withholding Tables</li>
                <li>• Locating Regional Tax Offices (RTOs) &amp; helplines</li>
              </ul>
              <a
                href="https://fbr.gov.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-doc-seal dark:text-red-300 hover:underline pt-2"
              >
                <span>Visit FBR Main Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Glossary: What AOP Stands For in FBR */}
        <section className="bg-white dark:bg-doc-dark-card border border-doc-brass/30 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-doc-seal dark:text-red-400 font-mono text-xs uppercase font-bold tracking-wider">
            <Users className="w-4 h-4" />
            <span>TAX GLOSSARY &amp; ENTITY CLASSIFICATION</span>
          </div>

          <h2 className="font-serif font-bold text-xl sm:text-2xl text-doc-ink dark:text-slate-100">
            What Does &quot;AOP&quot; Stand for in FBR?
          </h2>

          <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed space-y-3 font-sans">
            <p>
              In Federal Board of Revenue tax administration and under <strong>Section 80(2) of the Income Tax Ordinance, 2001</strong>,{' '}
              <strong>AOP stands for &quot;Association of Persons&quot;</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4 not-prose">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <div className="flex items-center gap-2 font-serif font-bold text-sm text-doc-ink dark:text-slate-200">
                  <User className="w-4 h-4 text-blue-500" />
                  <span>Individual</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  A single human taxpayer (salaried employee or sole proprietor). Taxed on progressive individual slabs (Rs. 600,000 exemption for salaried, Rs. 400,000 for non-salaried).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-doc-brass/40 space-y-1.5">
                <div className="flex items-center gap-2 font-serif font-bold text-sm text-doc-ink dark:text-slate-200">
                  <Users className="w-4 h-4 text-doc-seal" />
                  <span>AOP (Association of Persons)</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  A partnership firm, joint venture, or body of individuals carrying on business for profit. An AOP has its own separate NTN, files its own return, and is taxed as an independent unit.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <div className="flex items-center gap-2 font-serif font-bold text-sm text-doc-ink dark:text-slate-200">
                  <Building className="w-4 h-4 text-emerald-500" />
                  <span>Company</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  A corporate body incorporated under the Companies Act 2017 with SECP. Subject to a flat corporate tax rate (29% plus super tax) rather than slab schedules.
                </p>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300">
              <strong>Why AOP Classification Matters:</strong> Under FBR rules, an AOP is taxed at steeper non-salaried slab
              rates (with higher top brackets), pays higher ATL reinstatement surcharges (Rs. 10,000 – 50,000 compared to Rs.
              1,000 for standard individuals), and enjoys tax-exempt dividend/profit distributions to its partners once the AOP has
              settled its primary tax liability.
            </p>
          </div>
        </section>

        {/* Visual FAQ Accordion */}
        <FAQAccordionVisual
          items={faqsData}
          titleEn="Frequently Asked Questions: POS Verification & Retail Rules"
          titleUr="عام طور پر پوچھے جانے والے سوالات: رسید تصدیق و قواعد"
          subtitleEn="Verified citizen guidelines for checking sales receipts and identifying fraudulent invoices"
          subtitleUr="رسید چیک کرنے اور جعلی بلوں کی نشاندہی کے متعلق ضروری رہنمائی"
        />

        {/* Cross-Linking Navigation */}
        <section className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-doc-brass/30 space-y-4">
          <div className="flex items-center gap-2 text-doc-seal dark:text-red-400 font-mono text-xs uppercase font-bold tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>ESSENTIAL FBR TAX GUIDES &amp; CITIZEN TOOLS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/tax/fbr-active-taxpayer-atl-check-sim-block-2026"
              className="p-4 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/20 hover:border-doc-seal transition space-y-1.5 group flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-rose-600 dark:text-rose-400 font-bold">Enforcement &amp; ATL</span>
                <h4 className="font-serif font-bold text-sm text-doc-ink dark:text-slate-100 group-hover:text-doc-seal transition">
                  FBR ATL Check &amp; SIM Block Guide
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  Check Active Taxpayer status via SMS 9966, Section 114B PTA SIM disconnections, and 30 Sept deadline.
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-doc-seal dark:text-red-300 flex items-center gap-1 pt-2">
                <span>View SIM Block Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/tax/ntn-registration-online-pakistan"
              className="p-4 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/20 hover:border-doc-seal transition space-y-1.5 group flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-bold">Online NTN</span>
                <h4 className="font-serif font-bold text-sm text-doc-ink dark:text-slate-100 group-hover:text-doc-seal transition">
                  NTN Registration Online Pakistan
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  Complete official procedure to register National Tax Number on IRIS 2.0 for individuals, AOPs, and businesses.
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-doc-seal dark:text-red-300 flex items-center gap-1 pt-2">
                <span>NTN Registration Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/tax/fbr-filer-status-check-cnic"
              className="p-4 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/20 hover:border-doc-seal transition space-y-1.5 group flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">CNIC Verification</span>
                <h4 className="font-serif font-bold text-sm text-doc-ink dark:text-slate-100 group-hover:text-doc-seal transition">
                  FBR Filer Status Check by CNIC
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  Instant CNIC verification on Active Taxpayer List (ATL) to avoid 100% withholding tax penalty.
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-doc-seal dark:text-red-300 flex items-center gap-1 pt-2">
                <span>Check Filer Status</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
