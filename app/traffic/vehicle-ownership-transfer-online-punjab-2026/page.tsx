import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, FeeTableVisual, FAQAccordionVisual } from '@/components/visuals';
import {
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  Car,
  FileCheck,
  Smartphone,
  CreditCard,
  MapPin,
  Calendar,
  AlertCircle,
  Check,
  Award,
  Globe,
  Fingerprint,
  FileText,
  Scale,
  Sparkles,
  Layers,
  Info
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vehicle Ownership Transfer Online Punjab 2026: Biometric Pak ID & ePay Guide | Pakistan Info Hub',
  description:
    'Complete official guide to transferring car and motorcycle ownership in Punjab for 2026: Online initiation via ePay Punjab, NADRA Pak ID mobile biometric verification, Transfer Order (TO) forms, fee structure, Smart Card charges, and out-of-province re-registration.',
  keywords: [
    'vehicle ownership transfer online punjab 2026',
    'punjab excise biometric vehicle transfer pak id app',
    'epay punjab vehicle transfer fee psid',
    'car ownership transfer fee schedule punjab excise',
    'open letter car transfer penalty punjab',
    'transfer of ownership TO form punjab excise',
    'punjab excise out of province vehicle re-registration',
    'smart card fee vehicle transfer punjab',
  ],
  openGraph: {
    title: 'Vehicle Ownership Transfer Online Punjab 2026: Biometric Pak ID & ePay Guide',
    description:
      'Step-by-step verified guide to Punjab Excise vehicle ownership transfer, digital biometric authentication via Pak ID, transfer fees, and legal protections against open-letter fraud.',
    url: 'https://www.pakistaninfohub.com/traffic/vehicle-ownership-transfer-online-punjab-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/traffic/vehicle-ownership-transfer-online-punjab-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Driving & Traffic Verification', item: 'https://www.pakistaninfohub.com/traffic' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Vehicle Ownership Transfer Online Punjab',
          item: 'https://www.pakistaninfohub.com/traffic/vehicle-ownership-transfer-online-punjab-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Vehicle Ownership Transfer Online Punjab (2026): Complete Biometric Pak ID & ePay Guide',
      description:
        'Official procedural guide detailing how to transfer car and bike registration records under Punjab Excise & Taxation, remote biometric verification using NADRA Pak ID, fee tariffs, and out-of-province re-registration.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-30',
      dateModified: '2026-08-30',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/traffic/vehicle-ownership-transfer-online-punjab-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Transfer Vehicle Ownership Online in Punjab (2026)',
      description:
        'Step-by-step procedure for buying or selling a used vehicle and transferring official registration in Punjab using ePay and NADRA biometric verification.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Initiate Transfer on ePay Punjab',
          text: 'The buyer opens the ePay Punjab app or portal, enters the vehicle registration number and buyer CNIC, and generates the 17-digit PSID.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Deposit Transfer & Smart Card Fees',
          text: 'Pay the generated PSID via mobile banking, ATM, or 1Link. Settling the fee unlocks the biometric verification queue in NADRA records.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Complete Biometric Verification on Pak ID App',
          text: 'Both the seller and the buyer log into the NADRA Pak ID mobile app or visit an e-Sahulat center to perform live facial and fingerprint biometric verification.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Excise Processing & Smart Card Delivery',
          text: 'Excise & Taxation approves the record within 48 hours and issues an updated Smart Card with the buyer registered as the lawful owner.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What happens if a vehicle is sold on an "Open Letter" and not legally transferred?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Selling on an "Open Transfer Letter" is illegal. The original registered owner remains legally liable for all traffic e-challans, unpaid token taxes, vehicle theft reports, and criminal liabilities resulting from accidents. Always ensure official biometric transfer through Punjab Excise.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do the buyer and seller need to visit the Excise office in person?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. With the integration of ePay Punjab and the NADRA Pak ID mobile app, both buyer and seller can perform biometric facial and fingerprint verification remotely from their smartphones. An office visit is only necessary if physical vehicle file inspection or special engine alteration scrutiny is required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a deadline after purchasing a used car to complete the transfer of ownership?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Under the Motor Vehicles Ordinance, the purchaser is legally required to complete the transfer of ownership within 30 days of purchase. Delaying transfer incurs late surcharges on the base transfer tariff.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can an out-of-province vehicle (e.g. Islamabad, Sindh, KPK) be re-registered in Punjab?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Punjab Excise operates a re-registration framework for vehicles permanently relocating to Punjab. The owner must submit an official No Objection Certificate (NOC) from the parent provincial excise authority, clearance of token taxes, and physical inspection at a designated Punjab Motor Registering Authority (MRA) center.',
          },
        },
      ],
    },
  ],
};

export default function VehicleOwnershipTransferPage() {
  const breadcrumbs = [
    { nameEn: 'Driving & Traffic Verification', nameUr: 'ڈرائیونگ لائسنس و ٹریفک تصدیق', url: '/traffic' },
    { nameEn: 'Vehicle Ownership Transfer Online Punjab 2026', nameUr: 'گاڑی ملکیت منتقلی آن لائن پنجاب 2026' },
  ];

  const transferSteps = [
    {
      number: 1,
      titleEn: 'Initiate Transfer via ePay Punjab',
      titleUr: 'ای پے پنجاب پر درخواست کا آغاز',
      descEn: 'The purchaser enters the vehicle registration number and their 13-digit CNIC into the ePay Punjab app/portal to generate the official 17-digit PSID.',
      descUr: 'خریدار ای پے پنجاب ایپ پر گاڑی کا نمبر اور شناختی کارڈ درج کر کے پی ایس آئی ڈی چالان بناتا ہے۔',
      tagEn: 'ePay Punjab',
      tagUr: 'آن لائن چالان',
    },
    {
      number: 2,
      titleEn: 'Settle Transfer & Smart Card Fees',
      titleUr: 'سرکاری فیس چالان کی ادائیگی',
      descEn: 'Pay the transfer fee and Smart Card charges via mobile banking, ATM, or 1Link. Settling the fee activates the biometric window on NADRA records.',
      descUr: 'بینکنگ ایپ یا ون لنک سے فیس ادا کریں۔ فیس ادائیگی کے بعد ہی بائیومیٹرک کی اجازت ملتی ہے۔',
      tagEn: '1Link PSID',
      tagUr: 'فیس ادائیگی',
    },
    {
      number: 3,
      titleEn: 'Biometric via Pak ID / e-Sahulat',
      titleUr: 'پاک آئی ڈی ایپ یا ای سہولت بائیومیٹرک',
      descEn: 'Both the Seller and Buyer complete facial and fingerprint verification using the NADRA Pak ID mobile app or at any NADRA e-Sahulat / Excise franchise.',
      descUr: 'فروخت کنندہ اور خریدار دونوں نادرا پاک آئی ڈی ایپ کے ذریعے موبائل سے بائیومیٹرک تصدیق کرتے ہیں۔',
      tagEn: 'Remote Biometrics',
      tagUr: 'بائیومیٹرک',
    },
    {
      number: 4,
      titleEn: 'Excise Approval & Smart Card Dispatch',
      titleUr: 'محکمہ ایکسائز منظوری و اسمارٹ کارڈ',
      descEn: 'Punjab Excise reviews and updates the central MTMIS database within 48 hours. The updated vehicle Smart Card is delivered via Pakistan Post to the buyer.',
      descUr: 'ایکسائز کا ریکارڈ 48 گھنٹوں میں اپ ڈیٹ ہو جاتا ہے اور نیا اسمارٹ کارڈ بذریعہ ڈاک موصول ہوتا ہے۔',
      tagEn: '48-Hour Processing',
      tagUr: 'نیا اسمارٹ کارڈ',
    },
  ];

  const feeRows = [
    {
      serviceEn: 'Motorcycles & Scooters (All Capacities)',
      serviceUr: 'موٹر سائیکل و اسکوٹر',
      normal: 'PKR 500 – 1,000',
      urgent: 'Smart Card: PKR 530',
      executive: 'Biometric: PKR 200–300',
      validity: 'Permanent Transfer',
      tagEn: 'Two Wheeler',
    },
    {
      serviceEn: 'Motorcars up to 1000cc (e.g. Alto, Cultus, WagonR)',
      serviceUr: 'چھوٹی گاڑیاں (1000 سی سی تک)',
      normal: 'PKR 1,200',
      urgent: 'Smart Card: PKR 530',
      executive: 'Biometric: PKR 200–300',
      validity: 'Permanent Transfer',
      tagEn: 'Economy Cars',
    },
    {
      serviceEn: 'Motorcars 1001cc to 1300cc (e.g. City, Yaris, Swift)',
      serviceUr: 'درمیانی گاڑیاں (1001 تا 1300 سی سی)',
      normal: 'PKR 1,800',
      urgent: 'Smart Card: PKR 530',
      executive: 'Biometric: PKR 200–300',
      validity: 'Permanent Transfer',
      tagEn: 'Sedans',
    },
    {
      serviceEn: 'Motorcars 1301cc to 1800cc (e.g. Civic, Corolla, Elantra)',
      serviceUr: 'بڑی گاڑیاں (1301 تا 1800 سی سی)',
      normal: 'PKR 3,000',
      urgent: 'Smart Card: PKR 530',
      executive: 'Biometric: PKR 200–300',
      validity: 'Permanent Transfer',
      tagEn: 'Executive Sedans',
    },
    {
      serviceEn: 'SUVs & Luxury Vehicles above 1800cc (e.g. Fortuner, Sportage)',
      serviceUr: 'لگژری و ایس یو وی (1800 سی سی سے اوپر)',
      normal: 'PKR 5,000 – 10,000',
      urgent: 'Smart Card: PKR 530',
      executive: 'Biometric: PKR 200–300',
      validity: 'Permanent Transfer',
      tagEn: 'Luxury & 4x4',
    },
  ];

  const faqs = [
    {
      questionEn: 'What happens if a vehicle is sold on an "Open Letter" and not legally transferred?',
      questionUr: 'اگر گاڑی اوپن لیٹر پر بیچی جائے اور نام ٹرانسفر نہ ہو تو کیا خطرات ہیں؟',
      answerEn: 'Selling on an "Open Transfer Letter" is illegal. The original registered owner remains legally liable for all traffic e-challans, unpaid token taxes, vehicle theft reports, and criminal liabilities resulting from accidents. Always ensure official biometric transfer through Punjab Excise.',
      answerUr: 'اوپن لیٹر پر گاڑی بیچنا غیر قانونی ہے۔ گاڑی سے ہونے والے کسی بھی جرم، حادثے یا ای چالان کا قانونی ذمہ دار پرانا مالک ہی رہے گا۔',
    },
    {
      questionEn: 'Do the buyer and seller need to visit the Excise office in person?',
      questionUr: 'کیا خریدار اور بیچنے والے کا ایکسائز آفس جانا لازمی ہے؟',
      answerEn: 'No. With the integration of ePay Punjab and the NADRA Pak ID mobile app, both buyer and seller can perform biometric facial and fingerprint verification remotely from their smartphones. An office visit is only necessary if physical vehicle file inspection or special engine alteration scrutiny is required.',
      answerUr: 'نہیں، ای پے پنجاب اور نادرا پاک آئی ڈی ایپ کے ذریعے گھر بیٹھے موبائل سے بائیومیٹرک ہو جاتی ہے۔ دفتر جانے کی ضرورت نہیں ہے۔',
    },
    {
      questionEn: 'Is there a deadline after purchasing a used car to complete the transfer of ownership?',
      questionUr: 'گاڑی خریدنے کے کتنے دن کے اندر نام ٹرانسفر کروانا لازمی ہے؟',
      answerEn: 'Yes. Under the Motor Vehicles Ordinance, the purchaser is legally required to complete the transfer of ownership within 30 days of purchase. Delaying transfer incurs late surcharges on the base transfer tariff.',
      answerUr: 'قانون کے مطابق خریداری کے 30 دنوں کے اندر ٹرانسفر کروانا لازمی ہے، تاخیر کی صورت میں اضافی لیٹ فیس عائد ہوتی ہے۔',
    },
    {
      questionEn: 'Can an out-of-province vehicle (e.g. Islamabad, Sindh, KPK) be re-registered in Punjab?',
      questionUr: 'کیا سندھ، اسلام آباد یا کے پی کی گاڑی کو پنجاب میں ری رجسٹر کروایا جا سکتا ہے؟',
      answerEn: 'Yes. Punjab Excise operates a re-registration framework for vehicles permanently relocating to Punjab. The owner must submit an official No Objection Certificate (NOC) from the parent provincial excise authority, clearance of token taxes, and physical inspection at a designated Punjab Motor Registering Authority (MRA) center.',
      answerUr: 'جی ہاں، دوسرے صوبے کے ایکسائز آفس سے این او سی (NOC) اور ٹوکن ٹیکس کی کلیئرنس لے کر پنجاب ایکسائز سے ری رجسٹریشن کروائی جا سکتی ہے۔',
    },
    {
      questionEn: 'What documents are required if the registered owner has passed away (Inheritance Transfer)?',
      questionUr: 'اگر گاڑی کا اصل مالک وفات پا چکا ہو تو وراثتی منتقلی کا کیا طریقہ ہے؟',
      answerEn: 'For inheritance transfers, applicants must provide the official NADRA Succession Certificate / Family Registration Certificate (FRC), Court Legal Heir Decree (if disputed), Death Certificate, CNICs of all legal heirs, and No Objection Affidavits in favor of the designated family recipient.',
      answerUr: 'وراثتی منتقلی کے لیے نادرا جانشینی سرٹیفکیٹ (Succession Certificate)، ڈیتھ سرٹیفکیٹ اور تمام وارثوں کے بیان حلفی درکار ہوتے ہیں۔',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn max-w-5xl mx-auto font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Header */}
        <header className="rounded-3xl border-2 border-doc-brass/40 p-6 sm:p-8 md:p-10 space-y-4 relative overflow-hidden bg-doc-ink text-white shadow-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="PUNJAB EXCISE VEHICLE TRANSFER" labelUr="ایکسائز وہیکل ٹرانسفر پنجاب" variant="seal" />
            <span className="text-xs text-slate-400 font-bold">•</span>
            <VerifiedBadge variant="header" textEn="2026 BIOMETRIC PAK ID ROLLOUT" textUr="بائیومیٹرک پاک آئی ڈی 2026" />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold tracking-tight leading-tight">
            Vehicle Ownership Transfer Online Punjab (2026): Biometric Pak ID, ePay Fees &amp; TO Form
          </h1>

          <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            Step-by-step official guide to transferring car, SUV, and motorcycle registration in Punjab. Learn how remote biometric verification works via the Pak ID app, fee structures, and avoiding open-letter legal traps.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-doc-brass font-mono">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Fingerprint className="w-3.5 h-3.5 text-doc-brass" />
              <span>NADRA Pak ID Biometrics</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
              <span>ePay Punjab PSID Settlement</span>
            </span>
          </div>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is Vehicle Ownership Transfer in Punjab & Why is it Legally Mandatory?"
          topicTitleUr="پنجاب میں گاڑی کی ملکیت منتقلی کیا ہے اور یہ کیوں لازمی ہے؟"
          answerEn="Vehicle ownership transfer officially reassigns the Motor Registering Authority (MRA) record from the seller to the buyer. Skipping transfer and driving on an 'Open Transfer Letter' leaves the seller legally and criminally liable for road accidents, unpaid token taxes, and traffic e-challans. In 2026, transfer is completed online via ePay Punjab and NADRA Pak ID biometrics."
          answerUr="گاڑی کی ملکیت منتقلی کے ذریعے ایکسائز ریکارڈ میں پرانے مالک کا نام ہٹا کر خریدار کے نام کا اندراج کیا جاتا ہے۔ اوپن لیٹر پر گاڑی بیچنے سے پرانا مالک تمام حادثات اور ای چالان کا قانونی ذمہ دار رہتا ہے۔ سال 2026 میں تمام ٹرانسفر ای پے پنجاب اور نادرا پاک آئی ڈی بائیومیٹرک سے آن لائن ہوتا ہے۔"
        />

        {/* 2026 Major Policy Update Alert Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-300 dark:border-amber-700/60 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
            <strong className="font-serif font-bold text-amber-900 dark:text-amber-300 block text-base">
              2026 System Updates: Remote Pak ID Biometrics &amp; Out-of-Province Re-Registration
            </strong>
            <p className="leading-relaxed">
              <strong>1. Mandatory Pak ID Biometric Authentication:</strong> Punjab Excise has fully enabled remote facial and fingerprint authentication via the <strong>NADRA Pak ID</strong> mobile app. Both buyer and seller must verify their identities digitally. Crucially, the transfer fee PSID generated on ePay Punjab must be paid <em>before</em> the biometric request unlocks on the Pak ID app.
            </p>
            <p className="leading-relaxed">
              <strong>2. Out-of-Province Vehicle Re-Registration:</strong> Vehicles registered in Islamabad, Sindh, or KPK permanently relocating to Punjab can now be officially re-registered with Punjab registration numbers upon obtaining an Excise NOC and clearing the physical MRA fitness inspection.
            </p>
          </div>
        </div>

        {/* Section 1: Step-by-Step Ownership Transfer Workflow */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <CheckCircle2 className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step Ownership Transfer Procedure
            </h2>
          </div>

          <ProcessStepsDiagram
            steps={transferSteps}
            titleEn="Punjab Excise Vehicle Transfer Sequence (2026)"
            titleUr="پنجاب ایکسائز وہیکل ٹرانسفر کا مرحلہ وار طریقہ کار"
            subtitleEn="From ePay Punjab PSID generation to remote Pak ID biometrics and Smart Card delivery"
            subtitleUr="ای پے چالان سے لے کر موبائل بائیومیٹرک اور اسمارٹ کارڈ وصولی تک"
            variant="dark"
          />
        </section>

        {/* Section 2: Official Fee Structure */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Punjab Vehicle Transfer Fee Structure (2026 Tariff)
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            The total ownership transfer cost consists of the engine capacity-based transfer tariff, the mandatory automated Smart Card fee, and the NADRA biometric processing charge:
          </p>

          <FeeTableVisual
            rows={feeRows}
            titleEn="Punjab Excise Transfer of Ownership Tariff Schedule"
            titleUr="پنجاب ایکسائز وہیکل ٹرانسفر فیس شیڈول 2026"
            subtitleEn="Standard provincial rates computed automatically on ePay Punjab"
            subtitleUr="ای پے پنجاب پورٹل پر لاگو سرکاری فیس کے نرخ"
            noteEn="Advance Withholding Tax (WHT) under the Income Tax Ordinance applies to commercial and high-value private vehicles transferred within 90 days of fresh registration."
            noteUr="نئی رجسٹریشن کے 90 دنوں کے اندر ٹرانسفر کی صورت میں انکم ٹیکس قوانین کے تحت ودہولڈنگ ٹیکس لاگو ہو سکتا ہے۔"
          />
        </section>

        {/* Section 3: Required Documentation Checklist */}
        <section className="doc-card rounded-2xl p-6 sm:p-8 border border-doc-brass/30 space-y-4">
          <div className="flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-xl font-serif font-bold text-doc-ink dark:text-white">
              Required Documents Checklist for Vehicle Transfer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800 border border-doc-brass/20 space-y-1.5">
              <span className="font-bold text-doc-ink dark:text-white text-sm block">1. Identification &amp; TO Form</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Clear CNIC copies of both Buyer and Seller, along with the signed Transfer Order (T.O.) form downloaded from the Excise portal.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800 border border-doc-brass/20 space-y-1.5">
              <span className="font-bold text-doc-seal text-sm block">2. Registration Card &amp; File</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Original vehicle Smart Card / Registration Certificate. Original registration book and file (if issued under the physical return scheme).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800 border border-doc-brass/20 space-y-1.5">
              <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm block">3. Token Tax Clearance</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                All outstanding annual Token Tax dues and PSCA e-challans must be cleared before the Excise database authorizes the transfer request.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Critical Open-Letter Warning */}
        <section className="p-6 sm:p-8 rounded-2xl bg-red-50 dark:bg-red-950/30 border-2 border-red-300 dark:border-red-800 space-y-3">
          <div className="flex items-center gap-2 text-red-700 dark:text-red-400 font-bold text-base">
            <Scale className="w-6 h-6 shrink-0" />
            <span>LEGAL DANGER: Why You Must Never Sell or Buy on an &quot;Open Letter&quot;</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-sans">
            In Pakistan, thousands of vehicle owners sell their cars on informal &quot;open transfer letters&quot; to avoid transfer fees. <strong>This is a critical legal mistake.</strong> If the new driver causes a fatal road accident, commits a robbery, or accumulates hundreds of unpaid Safe City e-challans, police and courts issue arrest warrants against the registered owner on record.
          </p>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-red-200 dark:border-red-800/60 text-xs text-slate-700 dark:text-slate-300 font-sans">
            Always demand immediate biometric verification on the Pak ID app at the time of handing over vehicle possession and cash.
          </div>
        </section>

        {/* Section 5: FAQ Accordion */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Vehicle Ownership Transfer)
            </h2>
          </div>

          <FAQAccordionVisual items={faqs} />
        </section>

        {/* Cross-Linking Hub */}
        <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
            Related Traffic &amp; Vehicle Verification Guides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <Link
              href="/traffic/mtmis-token-tax-check-online-punjab-karachi-islamabad-2026"
              className="p-3.5 rounded-xl border border-doc-brass/30 hover:border-doc-seal bg-slate-50 dark:bg-slate-800 transition flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <span className="font-bold text-doc-ink dark:text-white block group-hover:text-doc-seal transition">
                  MTMIS Token Tax Check Online →
                </span>
                <span className="text-slate-500 dark:text-slate-400">Punjab, Sindh &amp; Islamabad portals</span>
              </div>
            </Link>

            <Link
              href="/traffic/token-tax-calculator-2026"
              className="p-3.5 rounded-xl border border-doc-brass/30 hover:border-doc-seal bg-slate-50 dark:bg-slate-800 transition flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <span className="font-bold text-doc-ink dark:text-white block group-hover:text-doc-seal transition">
                  Token Tax Calculator 2026 →
                </span>
                <span className="text-slate-500 dark:text-slate-400">Calculate annual excise token dues</span>
              </div>
            </Link>

            <Link
              href="/traffic/vehicle-verification-online-2026"
              className="p-3.5 rounded-xl border border-doc-brass/30 hover:border-doc-seal bg-slate-50 dark:bg-slate-800 transition flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <span className="font-bold text-doc-ink dark:text-white block group-hover:text-doc-seal transition">
                  MTMIS Vehicle Verification →
                </span>
                <span className="text-slate-500 dark:text-slate-400">Verify chassis, engine &amp; ownership</span>
              </div>
            </Link>

            <Link
              href="/traffic/driving-license-status-check-online-2026"
              className="p-3.5 rounded-xl border border-doc-brass/30 hover:border-doc-seal bg-slate-50 dark:bg-slate-800 transition flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <span className="font-bold text-doc-ink dark:text-white block group-hover:text-doc-seal transition">
                  Driving License Tracker →
                </span>
                <span className="text-slate-500 dark:text-slate-400">Track DLIMS smart card dispatch</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Ad Placement Zone */}
        <AdPlacementZone format="horizontal" />
      </div>
    </>
  );
}
