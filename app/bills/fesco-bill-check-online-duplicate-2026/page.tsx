import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, FAQAccordionVisual } from '@/components/visuals';
import { FescoBillValidator } from '@/components/FescoBillValidator';
import {
  HelpCircle,
  ExternalLink,
  Zap,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ArrowRight,
  FileText,
  Building,
  Phone,
  CreditCard,
  Flame,
  Smartphone,
  Check,
  AlertCircle,
  MapPin,
  FileSearch,
  Receipt,
  Scale,
  Percent,
  Info,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'FESCO Bill Online Check 2026 – Duplicate Electricity Bill Download | Pakistan Info Hub',
  description:
    'Check and download your FESCO online bill 2026. Validate your 14-digit reference number or 10-digit customer ID, copy with one click, and access the official PITC duplicate bill portal for Faisalabad, Sargodha, Jhang, Chiniot, and surrounding districts.',
  keywords: [
    'fesco bill',
    'fesco online bill',
    'fesco bill check',
    'online fesco bill check',
    'fesco web bill',
    'fesco duplicate bill',
    'fesco bill pay',
    'fesco electricity bill',
    'fesco bill check online 2026',
    'fesco bill download pdf',
    'fesco reference number check',
    'fesco customer id duplicate bill',
    'fesco bill faisalabad sargodha jhang',
    'bill pitc com pk fescobill',
  ],
  openGraph: {
    title: 'FESCO Bill Online Check 2026 – Duplicate Electricity Bill Download',
    description:
      'Format validator and direct official portal navigation for FESCO electricity bills. Check your duplicate bill online using your 14-digit reference number or 10-digit customer ID.',
    url: 'https://www.pakistaninfohub.com/bills/fesco-bill-check-online-duplicate-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/bills/fesco-bill-check-online-duplicate-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Utility Bills', item: 'https://www.pakistaninfohub.com/bills' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'FESCO Bill Online Check 2026',
          item: 'https://www.pakistaninfohub.com/bills/fesco-bill-check-online-duplicate-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'FESCO Bill Online Check 2026: Official Duplicate Bill Download & Payment Guide',
      description:
        'Comprehensive, independent civic guide on checking FESCO duplicate bills online, locating reference numbers vs customer IDs, SMS bill checking, and official payment channels.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub Civic Desk' },
      publisher: {
        '@type': 'Organization',
        name: 'Pakistan Info Hub',
        url: 'https://www.pakistaninfohub.com',
      },
      datePublished: '2026-09-11',
      dateModified: '2026-09-11',
    },
    {
      '@type': 'HowTo',
      name: 'How to Check and Print Your FESCO Duplicate Electricity Bill Online',
      description:
        'Step-by-step verified instructions to locate your reference number, validate format locally, and retrieve your official FESCO PDF bill from the PITC government gateway.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Locate 14-Digit Reference Number or 10-Digit Customer ID',
          text: 'Check the top-left Consumer Detail section of any previous paper bill or your mobile payment app history.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Validate Format Locally',
          text: 'Enter the digits into our format checker to verify numeric integrity without sending data to any private server.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Copy Clean Digits',
          text: 'Click Copy to save the formatted number directly to your clipboard.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Open Official PITC Portal',
          text: 'Navigate directly to bill.pitc.com.pk/fescobill and paste your number to download or print your official bill with barcode.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What if I do not have my reference number or lost my paper bill?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If you have lost your paper bill, first check transaction history in banking apps or digital wallets (JazzCash, EasyPaisa) where previous bill payments are saved. If unavailable, visit your local FESCO Sub-Divisional Office (SDO) or Customer Services Centre with the registered consumer CNIC and meter serial number. Staff can search their departmental database to retrieve your 14-digit reference number.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I check my FESCO bill online using only my CNIC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Neither the official FESCO website nor the national PITC portal supports querying electricity bills using only a CNIC number. Because multiple electricity meters can be registered under a single property or landlord, the system strictly requires the 14-digit Reference Number or 10-digit Customer ID.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I know if my FESCO bill is already paid?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When you retrieve your duplicate bill from the official PITC portal, look at the "Payment Status" or "Paid" stamp. Additionally, entering your 14-digit reference number in any 1Link mobile banking app (HBL, Meezan, Alfalah, etc.) or JazzCash/EasyPaisa will display a "Bill Status: Paid" message with an outstanding balance of PKR 0 if payment has cleared.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is FPA on my electricity bill and why does it change monthly?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'FPA stands for Fuel Price Adjustment. It is a mandatory monthly tariff adjustment determined by NEPRA reflecting variations in actual fuel costs (furnace oil, RLNG, coal, gas) incurred by thermal power generation plants compared to baseline reference tariffs. Because generation costs fluctuate each month, NEPRA approves retrospective adjustments that appear on bills with a 1 to 2 month lag.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I pay my FESCO bill through JazzCash or EasyPaisa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Both JazzCash and EasyPaisa support instant FESCO bill payments. Open the app, select "Electricity Bill", choose "FESCO", enter your 14-digit Reference Number, verify the consumer name and payable amount, and confirm the transaction. You will receive an instant digital receipt with a transaction ID.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if I pay after the due date?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If you pay after the printed due date, a Late Payment Surcharge (LPS) is added to your account. Under NEPRA rules, payments made within 3 days after the due date incur a 5% surcharge, while payments delayed beyond 3 days incur a full 10% surcharge. Persistent non-payment past the subsequent billing cycle can lead to formal disconnection notices.',
          },
        },
      ],
    },
  ],
};

export default function FescoBillOnlinePage() {
  const breadcrumbs = [
    { nameEn: 'Utility Bills', nameUr: 'یوٹیلیٹی بلز' },
    { nameEn: 'FESCO Bill Online Check 2026', nameUr: 'فیسکو بل آن لائن 2026' },
  ];

  const stepsData = [
    {
      number: 1,
      titleEn: 'Locate Your Reference No. or Customer ID',
      titleUr: 'ریفرنس نمبر یا کسٹمر آئی ڈی تلاش کریں',
      descEn:
        'Look in the top-left "Consumer Detail" box of any previous paper bill. Alternatively, check past payment receipts in JazzCash, EasyPaisa, or your banking app.',
      descUr:
        'پرانے کاغذی بل کے اوپر بائیں خانے میں 14 ہندسوں کا ریفرنس نمبر دیکھیں۔ یا موبائل والٹ کی سابقہ ہسٹری چیک کریں۔',
      tagEn: '14 or 10 Digits',
      tagUr: '14 یا 10 ہندسے',
      icon: <FileText className="w-5 h-5" />,
    },
    {
      number: 2,
      titleEn: 'Validate Format on Our Tool',
      titleUr: 'ہمارے ٹول پر فارمیٹ چیک کریں',
      descEn:
        'Paste or type the number in the validator above. Our browser-based checker confirms the digit count and batch prefix without transmitting any data to external servers.',
      descUr:
        'اپنا نمبر درج کر کے فارمیٹ چیک کریں۔ یہ تصدیق مکمل طور پر آپ کے براؤزر میں ہوتی ہے اور کوئی ڈیٹا محفوظ نہیں ہوتا۔',
      tagEn: '100% Private',
      tagUr: 'محفوظ',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    },
    {
      number: 3,
      titleEn: 'One-Click Copy to Clipboard',
      titleUr: 'ایک کلک میں نمبر کاپی کریں',
      descEn:
        'Click the "COPY" button to store the clean, verified numeric sequence onto your clipboard, eliminating manual typing errors on government portals.',
      descUr:
        'کاپی بٹن دبا کر نمبر اپنے کلپ بورڈ میں محفوظ کریں تاکہ سرکاری ویب سائٹ پر ٹائپنگ کی غلطی سے بچا جا سکے۔',
      tagEn: 'Zero Typo',
      tagUr: 'غلطی سے پاک',
      icon: <Zap className="w-5 h-5 text-doc-brass" />,
    },
    {
      number: 4,
      titleEn: 'Open Official PITC Portal & Search',
      titleUr: 'سرکاری پورٹل کھول کر نمبر پیسٹ کریں',
      descEn:
        'Click the direct deep-link button to open the official national PITC duplicate bill page (bill.pitc.com.pk/fescobill). Paste your number into the search field and submit.',
      descUr:
        'ڈائریکٹ بٹن پر کلک کر کے آفیشل PITC پورٹل کھولیں، نمبر پیسٹ کریں اور "Submit" پر کلک کریں۔',
      tagEn: 'Official Gateway',
      tagUr: 'سرکاری پورٹل',
      icon: <ExternalLink className="w-5 h-5" />,
    },
    {
      number: 5,
      titleEn: 'View, Download or Print PDF Bill',
      titleUr: 'بل ڈاؤن لوڈ یا پرنٹ کریں',
      descEn:
        'Your authentic FESCO electricity bill will load with full meter readings, due date, FPA calculation, and official scannable barcode ready for online or bank counter payment.',
      descUr:
        'آپ کا اصل بل اسکین ایبل بارکوڈ، ریڈنگز اور واجب الادا رقم کے ساتھ کھل جائے گا جسے آپ محفوظ یا پرنٹ کر سکتے ہیں۔',
      tagEn: 'Barcode PDF',
      tagUr: 'بارکوڈ پرنٹ',
      icon: <Receipt className="w-5 h-5 text-emerald-400" />,
    },
  ];

  const faqItems = [
    {
      questionEn: 'What if I do not have my reference number or lost my paper bill?',
      questionUr: 'اگر ریفرنس نمبر گم ہو جائے یا کاغذی بل نہ ملے تو کیا کریں؟',
      answerEn:
        'If you do not have a physical bill, first inspect previous transaction SMS alerts from FESCO (shortcode 8118) or transaction history inside your banking app, JazzCash, or EasyPaisa where previous electricity bills were paid. If still unavailable, you cannot search by CNIC online; you must visit your nearest FESCO Sub-Divisional Office (SDO) or Customer Services Centre with the registered owner’s original CNIC and meter number. Staff can search their billing database by address and meter serial number to provide your reference number.',
      answerUr:
        'اگر پرانا بل نہیں ہے تو پہلے جاز کیش، ایزی پیسہ یا بینکنگ ایپ کی ہسٹری چیک کریں جہاں سابقہ بل کا ریفرنس نمبر محفوظ ہوتا ہے۔ اگر وہاں بھی نہ ملے تو اپنے قریبی فیسکو کسٹمر سروس سنٹر یا ایس ڈی او آفس اصل شناختی کارڈ اور میٹر نمبر کے ہمراہ تشریف لے جائیں، عملہ ڈیٹا بیس سے آپ کا ریفرنس نمبر نکال دے گا۔',
    },
    {
      questionEn: 'Can I check my FESCO bill online using only my CNIC?',
      questionUr: 'کیا شناختی کارڈ نمبر (CNIC) سے فیسکو بل چیک ہو سکتا ہے؟',
      answerEn:
        'No. Online DISCO billing systems managed by PITC (including FESCO) do not support bill queries via CNIC alone. This security measure prevents unauthorized individuals from viewing electricity bills across properties. You strictly require either the 14-digit Reference Number or the 10-digit Customer ID printed on your physical electricity meter invoice.',
      answerUr:
        'نہیں، سرکاری PITC پورٹل پر صرف شناختی کارڈ کے ذریعے بل دیکھنے کی سہولت موجود نہیں ہے۔ سکیورٹی وجوہات کی بنا پر بل چیک کرنے کے لیے 14 ہندسوں کا ریفرنس نمبر یا 10 ہندسوں کا کسٹمر آئی ڈی لازمی ہے۔',
    },
    {
      questionEn: 'How do I know if my FESCO bill is already paid?',
      questionUr: 'کیسے معلوم ہوگا کہ فیسکو بجلی کا بل ادا ہو چکا ہے یا نہیں؟',
      answerEn:
        'There are two reliable ways: (1) When you download the duplicate bill from the official PITC portal, the status box will display "Paid" with transaction details once cleared by the bank, or (2) Open any 1Bill-integrated mobile banking app (HBL, Meezan, Bank Alfalah, etc.) or JazzCash/EasyPaisa, navigate to Utility Bills > FESCO, and enter your reference number. If paid, the payable balance will show PKR 0 or "Bill Already Paid". Note that digital payments usually take 24 to 48 hours to update on the government billing portal.',
      answerUr:
        'اس کی تصدیق کے دو آسان طریقے ہیں: (1) آفیشل پورٹل پر ڈپلیکیٹ بل ڈاؤن لوڈ کریں، اگر بل ادا ہو چکا ہو تو اس پر ادائیگی کی تفصیل درج ہوتی ہے، (2) کسی بھی بینکنگ ایپ یا جاز کیش/ایزی پیسہ میں فیسکو بل منتخب کر کے ریفرنس نمبر درج کریں، اگر بل ادا ہو تو رقم صفر (PKR 0) ظاہر ہوگی۔',
    },
    {
      questionEn: 'What is FPA on my electricity bill and why does it change monthly?',
      questionUr: 'بجلی کے بل میں FPA کیا ہوتا ہے اور یہ ہر ماہ کیوں بدلتا ہے؟',
      answerEn:
        'FPA stands for Fuel Price Adjustment. Electricity in Pakistan is generated using a combination of hydel, nuclear, and thermal sources (coal, RLNG, and furnace oil). Because international and domestic fuel costs fluctuate continuously, NEPRA conducts monthly public hearings to calculate the difference between estimated generation fuel costs and actual costs. This variance is passed on to consumers as an FPA surcharge or credit, typically with a 1 to 2 month lag. It is a national regulatory charge, not a local FESCO penalty.',
      answerUr:
        'ایف پی اے کا مطلب فیول پرائس ایڈجسٹمنٹ ہے۔ بجلی پیدا کرنے والے ایندھن (کوئلہ، فرنس آئل، گیس) کی قیمتوں میں بین الاقوامی اور ملکی سطح پر اتار چڑھاؤ کی بنیاد پر نیپرا ہر ماہ ایندھن کے اصل اخراجات کا تخمینہ لگا کر فی یونٹ ایڈجسٹمنٹ منظور کرتا ہے۔ یہ فرق ہر ماہ بل میں شامل کیا جاتا ہے۔',
    },
    {
      questionEn: 'Can I pay my FESCO bill through JazzCash, EasyPaisa, or bank mobile apps?',
      questionUr: 'کیا فیسکو بل جاز کیش، ایزی پیسہ یا بینک موبائل ایپ سے ادا ہو سکتا ہے؟',
      answerEn:
        'Yes. FESCO is fully integrated with 1LINK 1Bill, enabling payments through all Pakistani mobile banking apps (Meezan Bank, HBL, UBL, MCB, Allied Bank, Bank of Punjab, etc.) as well as microfinance wallets (JazzCash, EasyPaisa, SadaPay, NayaPay). Search for "FESCO" under Utility Bills, input your 14-digit reference number, verify the consumer name, and pay instantly. Always take a screenshot of the digital transaction receipt.',
      answerUr:
        'جی ہاں! فیسکو ون بل سسٹم سے منسلک ہے۔ آپ تمام بینک ایپس (میزان، ایچ بی ایل، یو بی ایل وغیرہ) اور جاز کیش، ایزی پیسہ، نیا پے سے فوری ادائیگی کر سکتے ہیں۔ بل کا ریفرنس نمبر درج کرنے کے بعد صارف کا نام ضرور چیک کریں اور ادائیگی کی رسید کا اسکرین شاٹ محفوظ رکھیں۔',
    },
    {
      questionEn: 'What happens if I pay my FESCO electricity bill after the due date?',
      questionUr: 'آخری تاریخ گزرنے کے بعد بل ادا کرنے پر کتنا جرمانہ لگتا ہے؟',
      answerEn:
        'If payment is made past the due date printed on the bill, a Late Payment Surcharge (LPS) is applied. Under NEPRA regulations, payments cleared within 3 days after the due date incur a 5% surcharge, while payments made after 3 days incur the full 10% late surcharge. If you face genuine financial difficulties, you can visit your local Sub-Divisional Officer (SDO) prior to the due date to request an official extension or payment in installments.',
      answerUr:
        'آخری تاریخ کے بعد ادائیگی پر لیٹ پیمنٹ سرچارج (LPS) لاگو ہوتا ہے۔ نیپرا کے نئے ضوابط کے تحت آخری تاریخ کے 3 دن کے اندر ادائیگی پر 5 فیصد جبکہ 3 دن کے بعد 10 فیصد جرمانہ لگتا ہے۔ مجبوری کی صورت میں تاریخ گزرنے سے پہلے مقامی ایس ڈی او سے رابطہ کر کے تاریخ میں توسیع یا اقساط کروائی جا سکتی ہیں۔',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={breadcrumbs} />

        {/* Page Hero Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="CIVIC NAVIGATION GUIDE" labelUr="سرکاری بل گائیڈ" variant="gold" />
            <VerifiedBadge />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white leading-[1.15]">
            FESCO Bill Online Check 2026: Duplicate Electricity Bill Download
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1.5 font-bold">
              فیسکو آن لائن بجلی بل چیک اور ڈپلیکیٹ بل ڈاؤن لوڈ گائیڈ 2026
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Quickly check, validate, and download your Faisalabad Electric Supply Company (FESCO) duplicate electricity bill.
            Validate your 14-digit reference number or 10-digit customer ID client-side, copy with a single click, and access
            the official PITC government billing portal with 100% data privacy.
          </p>
        </header>

        {/* Direct Answer Box (SEO / AEO Snippet Requirement: 40-60 words) */}
        <DirectAnswerBox
          topicTitleEn="How to Check Your FESCO Electricity Bill Online"
          topicTitleUr="فیسکو بجلی کا بل آن لائن چیک کرنے کا طریقہ"
          answerEn="To check your FESCO electricity bill online, locate your 14-digit Reference Number or 10-digit Customer ID on your physical bill. Validate and copy it below, then open FESCO's official PITC billing portal (bill.pitc.com.pk/fescobill) to download your genuine PDF bill. This independent guide connects you to official government channels without storing data."
          answerUr="فیسکو بجلی کا آن لائن بل چیک کرنے کے لیے اپنے کاغذی بل سے 14 ہندسوں کا ریفرنس نمبر یا 10 ہندسوں کا کسٹمر آئی ڈی تلاش کریں۔ نیچے دیے گئے ٹول سے فارمیٹ چیک کر کے نمبر کاپی کریں اور پی آئی ٹی سی کے آفیشل پورٹل (bill.pitc.com.pk/fescobill) پر جا کر اصل پی ڈی ایف بل حاصل کریں۔ یہ ایک آزاد معلوماتی گائیڈ ہے جو آپ کو سرکاری پورٹل تک محفوظ رسائی فراہم کرتی ہے۔"
        />

        {/* Interactive Client-Side Validator & Portal Navigator */}
        <section aria-label="FESCO Bill Reference Validator and Portal Navigator">
          <FescoBillValidator />
        </section>

        {/* Prominent Trust & Safety Callout */}
        <section className="p-6 sm:p-7 rounded-2xl bg-amber-500/10 border-2 border-amber-500/40 text-doc-ink dark:text-white space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 text-amber-600 dark:text-amber-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h2 className="font-serif font-extrabold text-lg sm:text-xl text-doc-ink dark:text-white">
                Consumer Safety Warning: Avoid Unofficial Scraper Sites & Casino Spam
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                Independent Civic Notice Regarding Unverified Third-Party Bill Portals
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm font-sans pt-1">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-700/60 space-y-2">
              <span className="font-mono font-bold text-amber-700 dark:text-amber-300 uppercase text-[11px] block">
                🚩 Invasive Content Mills
              </span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                Several third-party websites targeting "FESCO bill check" are low-grade content farms. Investigations have
                revealed pages awkwardly inserting unrelated online casino and gambling promotional text (such as "Winpkr"
                and "PK365"), posing deceptive redirection and malware risks.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-700/60 space-y-2">
              <span className="font-mono font-bold text-emerald-700 dark:text-emerald-300 uppercase text-[11px] block">
                🔒 Verify the Real Domain
              </span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                Always ensure you are accessing FESCO’s actual duplicate bill portal at{' '}
                <strong className="text-doc-ink dark:text-white font-mono">bill.pitc.com.pk/fescobill</strong> or the official
                company website at <strong className="text-doc-ink dark:text-white font-mono">fesco.com.pk</strong> before
                relying on bill data or meter readings.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-700/60 space-y-2">
              <span className="font-mono font-bold text-rose-700 dark:text-rose-300 uppercase text-[11px] block">
                💳 Never Pay Unverified Links
              </span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                Never enter banking passwords, ATM PINs, or pay electricity bills through private online payment links. Use
                only 1Bill-approved commercial banking apps (HBL, Meezan, Alfalah), JazzCash, EasyPaisa, or physical bank
                counters.
              </p>
            </div>
          </div>
        </section>

        {/* Ad Placement Zone */}
        <AdPlacementZone format="horizontal" />

        {/* Step-by-Step Guided Process Diagram */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-doc-ink dark:text-white">
              Step-by-Step: How to Check & Print Your Official FESCO Duplicate Bill
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
              Follow this verified 5-step process to download your official PDF invoice with a scannable bank barcode.
            </p>
          </div>

          <ProcessStepsDiagram
            steps={stepsData}
            titleEn="Official FESCO Duplicate Bill Retrieval Sequence"
            titleUr="فیسکو ڈپلیکیٹ بل حاصل کرنے کا سرکاری طریقہ کار"
            subtitleEn="Verified procedure for downloading genuine PDF bills under DISCO standards"
            subtitleUr="سرکاری معیار کے مطابق بل ڈاؤن لوڈ کرنے کے تصدیق شدہ مراحل"
          />
        </section>

        {/* Anatomy of a FESCO Bill: Reference Number vs Customer ID */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-doc-ink dark:text-white">
              Where to Find Your Reference Number vs Customer ID on a Paper Bill
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
              Understanding the two numeric identifiers printed on FESCO physical invoices and how to use them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 14-Digit Reference Number Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-doc-brass/20 text-doc-brass flex items-center justify-center font-mono font-bold text-sm">
                    14
                  </span>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-doc-ink dark:text-white">
                    14-Digit Reference Number (Primary)
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold">
                  UNIVERSAL
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                The 14-digit Reference Number is the historical and most reliable identifier used across all Pakistani power
                distribution companies. It is permanently assigned to your physical electricity connection.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs space-y-1.5">
                <p className="text-[10px] uppercase font-bold text-slate-500">Sample Reference Number Structure:</p>
                <p className="text-sm font-bold text-doc-seal dark:text-amber-400 tracking-wider">
                  13 12345 6789012 U
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 dark:text-slate-400 pt-1 border-t border-slate-200 dark:border-slate-800">
                  <div><strong>13:</strong> Batch Code (Faisalabad)</div>
                  <div><strong>12345:</strong> Sub-Division Code</div>
                  <div><strong>6789012:</strong> Account Number</div>
                  <div><strong>U / R:</strong> Urban / Rural Category</div>
                </div>
              </div>

              <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <p className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
                  <MapPin className="w-3.5 h-3.5 text-doc-brass shrink-0" />
                  <span>Printed Location on Bill:</span>
                </p>
                <p className="pl-5 leading-relaxed">
                  Look in the prominent highlighted box in the upper-left quadrant of the bill, labeled "REFERENCE NO."
                </p>
              </div>
            </div>

            {/* 10-Digit Customer ID Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-500 flex items-center justify-center font-mono font-bold text-sm">
                    10
                  </span>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-doc-ink dark:text-white">
                    10-Digit Customer ID (Digital Consumer)
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-bold">
                  COMPUTERIZED
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                The Customer ID (or Consumer ID) is a newer 10-digit unique digital identity introduced with DISCO computerized
                enterprise billing systems to track consumer accounts across digital channels.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs space-y-1.5">
                <p className="text-[10px] uppercase font-bold text-slate-500">Sample Customer ID Structure:</p>
                <p className="text-sm font-bold text-doc-brass tracking-wider">
                  1234567890
                </p>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 pt-1 border-t border-slate-200 dark:border-slate-800">
                  Consists of exactly 10 numeric digits without any alphabetical suffix or division prefix hyphens.
                </p>
              </div>

              <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <p className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
                  <MapPin className="w-3.5 h-3.5 text-doc-brass shrink-0" />
                  <span>Printed Location on Bill:</span>
                </p>
                <p className="pl-5 leading-relaxed">
                  Located directly adjacent to or right underneath the consumer name and tariff description in the "Consumer
                  Detail" table.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SMS-Based Bill Check Alternative */}
        <section className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-navy-950 via-slate-900 to-navy-950 text-white border border-doc-brass/30 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-doc-brass/20 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-doc-brass">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-lg sm:text-xl text-white">
                  SMS-Based Bill Alert Option (No Internet Required)
                </h2>
                <p className="text-xs text-slate-400 font-mono">
                  Official Shortcode: 8118 (Verified National Gateway)
                </p>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold border border-emerald-500/30">
              OFFLINE METHOD
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            If you do not have active internet access or are using a basic mobile phone, you can register your mobile number
            with FESCO's automated SMS billing notification system to receive monthly bill summaries, payable amounts, and
            due date reminders automatically.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono pt-1">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 space-y-2">
              <span className="text-doc-brass font-bold uppercase text-[11px] block">
                Step 1: Compose SMS
              </span>
              <p className="text-slate-300 text-xs">
                Open your messaging application and type:
              </p>
              <div className="p-2.5 rounded bg-black border border-slate-800 text-emerald-400 font-bold tracking-wider text-sm">
                REG [14-Digit Reference Number]
              </div>
              <p className="text-[10px] text-slate-400">
                Example: <span className="text-slate-200">REG 13123456789012</span>
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 space-y-2">
              <span className="text-doc-brass font-bold uppercase text-[11px] block">
                Step 2: Send to Shortcode 8118
              </span>
              <p className="text-slate-300 text-xs">
                Send this text message to the verified shortcode:
              </p>
              <div className="p-2.5 rounded bg-black border border-slate-800 text-amber-300 font-bold tracking-wider text-base text-center">
                8118
              </div>
              <p className="text-[10px] text-slate-400">
                You will receive an automated confirmation SMS from FESCO/PITC confirming your connection registration.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-400 flex items-start gap-2 font-sans">
            <Info className="w-4 h-4 text-doc-brass shrink-0 mt-0.5" />
            <span>
              <strong>Note on Shortcode 8334:</strong> While some older websites mention shortcode 8334, that code was used
              historically or by other regional DISCOs. For FESCO and the centralized PITC billing registry,{' '}
              <strong className="text-white font-mono">8118</strong> is the active, verified official gateway for billing alerts
              and complaint tracking.
            </span>
          </div>
        </section>

        {/* FESCO Coverage Area (8 Districts) */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-doc-ink dark:text-white">
              FESCO Operational Coverage Area (8 Punjab Districts)
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
              Faisalabad Electric Supply Company distributes electricity to over 4.5 million consumers across 8 major
              districts of central and western Punjab.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { district: 'Faisalabad', ur: 'فیصل آباد', type: 'Headquarters & Industrial Hub' },
              { district: 'Sargodha', ur: 'سرگودھا', type: 'Operation Circle' },
              { district: 'Jhang', ur: 'جھنگ', type: 'Operation Circle' },
              { district: 'Toba Tek Singh', ur: 'ٹوبہ ٹیک سنگھ', type: 'Operation Division' },
              { district: 'Chiniot', ur: 'چنیوٹ', type: 'Operation Division' },
              { district: 'Mianwali', ur: 'میانوالی', type: 'Operation Circle' },
              { district: 'Khushab', ur: 'خوشاب', type: 'Operation Division' },
              { district: 'Bhakkar', ur: 'بھکر', type: 'Operation Division' },
            ].map((dist) => (
              <div
                key={dist.district}
                className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-sm text-doc-ink dark:text-white">{dist.district}</span>
                  <span className="text-xs text-doc-brass font-serif">{dist.ur}</span>
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-sans">{dist.type}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fuel Price Adjustment (FPA) Explainer */}
        <section className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
                Understanding Fuel Price Adjustment (FPA) on Your FESCO Bill
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Why electricity bills fluctuate even when monthly consumed units remain constant
              </p>
            </div>
          </div>

          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
            <p>
              One of the most frequent citizen inquiries received across Punjab is:{' '}
              <em>"Why did my FESCO bill increase significantly this month even though my unit consumption stayed exactly the same?"</em>{' '}
              The primary cause is the <strong>Fuel Price Adjustment (FPA)</strong> line item.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-mono font-bold text-doc-seal dark:text-red-400 text-xs uppercase block">
                  1. Generation Fuel Variance
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  NEPRA establishes baseline reference tariffs for power generation fuels (coal, RLNG, furnace oil, imported fuel).
                  When actual global or local prices change, the difference must be recovered.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-mono font-bold text-doc-brass text-xs uppercase block">
                  2. 1 to 2 Month Retrospective Lag
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  FPA is never charged in real time. NEPRA conducts public hearings to audit previous generation months.
                  Therefore, an FPA charge appearing on your current bill reflects fuel costs from 1 or 2 months earlier.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-xs uppercase block">
                  3. Uniform & Non-Negotiable
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  FPA rates are mandated federally by NEPRA across all DISCOs. Local FESCO sub-division offices (SDOs) cannot
                  waive, reduce, or alter this statutory charge at the counter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Channels, Grace Period & LPS */}
        <section className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
                FESCO Bill Payment Channels, Due Dates & Late Surcharges
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Approved digital wallets, 1Link banking, counter payments & NEPRA surcharge rules
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm font-sans">
            {/* Payment Methods */}
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Accepted Official Payment Channels:</span>
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2 bg-slate-50 dark:bg-slate-950 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                  <span className="font-bold text-doc-brass">Mobile Wallets:</span>
                  <span>JazzCash, EasyPaisa, SadaPay, and NayaPay using the 14-digit Reference Number.</span>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 dark:bg-slate-950 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                  <span className="font-bold text-doc-brass">Online Banking (1Bill):</span>
                  <span>All major banks (HBL, Meezan Bank, Alfalah, UBL, MCB, Allied Bank, NBP, BOP).</span>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 dark:bg-slate-950 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                  <span className="font-bold text-doc-brass">Physical Counters:</span>
                  <span>All scheduled commercial bank branches and Pakistan Post Office counter windows.</span>
                </li>
              </ul>
            </div>

            {/* Grace Period & Surcharges */}
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-doc-brass" />
                <span>Due Date Grace Period & Late Surcharge (LPS):</span>
              </h3>
              <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 space-y-2 text-xs text-amber-950 dark:text-amber-200">
                <p className="font-semibold leading-relaxed">
                  FESCO bills typically allow an initial payment window of <strong>7 to 10 days</strong> from the generation
                  date before the Late Payment Surcharge is levied.
                </p>
                <div className="space-y-1 pt-1 border-t border-amber-200 dark:border-amber-800">
                  <div className="flex justify-between">
                    <span>Payment within 3 days after due date:</span>
                    <strong className="font-mono">5% Surcharge</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment delayed past 3 days:</span>
                    <strong className="font-mono">10% Full Surcharge</strong>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                  💡 Tip: If you anticipate payment delays, visit your local Sub-Divisional Officer (SDO) before the due date
                  to request an official due-date extension or installment plan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Helplines & Customer Services Directory */}
        <section className="p-6 sm:p-7 rounded-2xl bg-doc-ink text-white space-y-4 border border-doc-brass/30">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-doc-brass/20 pb-3">
            <div className="flex items-center gap-2.5">
              <Phone className="w-5 h-5 text-doc-brass" />
              <h2 className="font-serif font-bold text-xl text-white">
                FESCO Official Helplines & Civic Contact Directory
              </h2>
            </div>
            <span className="text-xs font-mono text-doc-brass">24/7 NATIONWIDE SERVICE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-slate-400 uppercase font-mono text-[10px]">National Electricity Helpline</span>
              <p className="text-xl font-mono font-bold text-doc-brass">118</p>
              <p className="text-slate-400 text-[11px]">Toll-free 24/7 power failure & breakdown complaints</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-slate-400 uppercase font-mono text-[10px]">FESCO Toll-Free Helpline</span>
              <p className="text-xl font-mono font-bold text-white">0800-66554</p>
              <p className="text-slate-400 text-[11px]">Direct FESCO customer care and billing queries</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-slate-400 uppercase font-mono text-[10px]">Online Complaint Portal (CCMS)</span>
              <p className="text-base font-mono font-bold text-emerald-400">ccms.pitc.com.pk</p>
              <p className="text-slate-400 text-[11px]">File formal complaints with trackable tracking IDs</p>
            </div>
          </div>
        </section>

        {/* Citizen FAQ Accordion */}
        <FAQAccordionVisual
          items={faqItems}
          titleEn="Frequently Asked Questions: FESCO Bill Check & Payments"
          titleUr="فیسکو بجلی بل کے متعلق عام سوالات اور تصدیق شدہ جوابات"
          subtitleEn="Verified operational, legal & portal guidance for FESCO consumers"
          subtitleUr="صارفین کے لیے سرکاری و تکنیکی ضوابط کی روشنی میں مصدقہ وضاحت"
        />

        {/* Related Civic & Utility Guides (Cross-Linking) */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white">
              Related Utility Billing & Power Guides
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
              Explore other verified guides across the Pakistan Info Hub utility bill repository.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/bills/utility-bill-checker-2026"
              className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-doc-brass transition shadow-xs space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-doc-seal dark:text-red-400 uppercase">Interactive Tool</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-doc-brass group-hover:translate-x-1 transition" />
              </div>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-brass transition">
                Universal Utility Bill Checker 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                All-in-one portal navigator covering LESCO, IESCO, MEPCO, K-Electric Karachi, SNGPL, and SSGC gas bills.
              </p>
            </Link>

            <Link
              href="/bills/smart-meter-pakistan-price-how-it-works-2026"
              className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-doc-brass transition shadow-xs space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase">AMI Guide</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-doc-brass group-hover:translate-x-1 transition" />
              </div>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-brass transition">
                Smart Meters (AMI) Pakistan 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                Automated 15-minute readings, replacement costs, solar net-billing meters, and prepaid electricity pilots.
              </p>
            </Link>

            <Link
              href="/bills/net-metering-net-billing-change-2026"
              className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-doc-brass transition shadow-xs space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">Solar Regulations</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-doc-brass group-hover:translate-x-1 transition" />
              </div>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-brass transition">
                Net Metering to Net Billing Transition 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                Detailed policy breakdown on NEPRA buyback tariffs, solar return on investment, and grid export adjustments.
              </p>
            </Link>
          </div>
        </section>

        {/* Official Sources Cited */}
        <footer className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1.5 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Citations & Regulatory References:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 font-mono">
            {[
              { label: 'PITC FESCO Duplicate Bill Gateway', url: 'http://bill.pitc.com.pk/fescobill/' },
              { label: 'Faisalabad Electric Supply Company (FESCO)', url: 'https://www.fesco.com.pk/' },
              { label: 'National Electric Power Regulatory Authority (NEPRA)', url: 'https://nepra.org.pk/' },
              { label: 'PITC National Customer Complaint Management (CCMS)', url: 'https://ccms.pitc.com.pk/' },
            ].map((src) => (
              <a
                key={src.url}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-doc-brass transition"
              >
                <ExternalLink className="w-3 h-3 shrink-0" />
                <span>{src.label}</span>
              </a>
            ))}
          </div>
          <p className="text-[10px] text-slate-400 pt-2 leading-relaxed font-sans">
            Disclaimer: Pakistan Info Hub is an independent civic information platform providing format validation and direct
            navigation links to official government billing gateways. We are not affiliated with FESCO, WAPDA, or PITC. All
            trademark rights belong to their respective government entities.
          </p>
        </footer>
      </div>
    </>
  );
}
