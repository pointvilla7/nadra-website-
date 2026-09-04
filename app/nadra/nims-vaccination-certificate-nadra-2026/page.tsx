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
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  ShieldAlert,
  Smartphone,
  PhoneCall,
  FileCheck,
  Download,
  Plane,
  Baby,
  Syringe,
  QrCode,
  CreditCard,
  Building,
  Sparkles,
  Info,
  Check,
  X
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NIMS Vaccination Certificate NADRA 2026 – Polio, Travel & Child B-Form Download',
  description:
    'Complete official guide to NIMS NADRA vaccination certificates: How to download international travel Polio (OPV), Yellow Fever, and COVID-19 certificates at nims.nadra.gov.pk. Rs. 100 fee, Child B-Form (CRC) linkage, and troubleshooting.',
  keywords: [
    'nims vaccination certificate nadra 2026',
    'nims nadra gov pk download certificate',
    'nadra polio vaccination certificate for travel',
    'nims child b form vaccination certificate',
    'polio certificate for international travel pakistan',
    'nims certificate fee 100 rupees',
    'how to verify nims certificate qr code',
    'nims data not found solution',
    'yellow fever certificate nadra',
  ],
  openGraph: {
    title: 'NIMS Vaccination Certificate NADRA 2026 – Travel & Child B-Form Guide',
    description:
      'Official guide to downloading NADRA NIMS vaccination certificates for travel (Polio, COVID-19, Yellow Fever). Fee details, B-Form linkage, and step-by-step portal download.',
    url: 'https://www.pakistaninfohub.com/nadra/nims-vaccination-certificate-nadra-2026',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/nadra/nims-vaccination-certificate-nadra-2026' },
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
          name: 'NIMS Vaccination Certificate Guide 2026',
          item: 'https://www.pakistaninfohub.com/nadra/nims-vaccination-certificate-nadra-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'NIMS Vaccination Certificate NADRA 2026: Polio, COVID-19, Travel & Child B-Form Guide',
      description:
        'Authoritative citizen manual detailing the National Immunization Management System (NIMS) portal, mandatory international travel polio certification, childhood immunization linkage via B-Form, payment options, and certificate printing.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-03',
      dateModified: '2026-09-03',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/nadra/nims-vaccination-certificate-nadra-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Download an Official Vaccination Certificate from NIMS NADRA',
      description: 'Step-by-step procedure to generate and download a QR-verified immunization certificate on nims.nadra.gov.pk.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Administer Vaccine & Record Entry',
          text: 'Visit a designated government hospital, vaccination counter, or District Health Office (DHO). Ensure the health worker uploads your dose data to the NIMS database and stamps your physical card.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Access Official NIMS Portal',
          text: 'Visit nims.nadra.gov.pk and select your required certificate category (Polio Vaccination for international travel, COVID-19, or Yellow Fever).',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Enter CNIC or Child B-Form (CRC) Number',
          text: 'Type the 13-digit CNIC number (or Child Registration Certificate number for minors) along with the card/B-form issue date, and solve the security CAPTCHA.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Pay Official Fee (PKR 100)',
          text: 'Pay the statutory PKR 100 fee online via Credit/Debit card, JazzCash, EasyPaisa, or by depositing at any nearby NADRA e-Sahulat retail franchise.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Download QR-Verified PDF Certificate',
          text: 'Immediately download the official high-resolution PDF certificate featuring the official NADRA/Ministry of Health stamp, passport number (if entered), and scannable QR verification code.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is NIMS and what is its official portal website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NIMS stands for National Immunization Management System. It is the centralized digital health database engineered by NADRA for the Ministry of National Health Services. The official portal is nims.nadra.gov.pk.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is a Polio Vaccination Certificate still mandatory for traveling abroad from Pakistan in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Under World Health Organization (WHO) International Health Regulations (IHR), all Pakistani citizens and residents departing Pakistan after a stay of more than 4 weeks are required to carry a valid, officially verified Polio Vaccination Certificate (Oral Polio Vaccine OPV or Inactivated Poliovirus Vaccine IPV) administered within the preceding 12 months. Airlines and airport immigration check this certificate before boarding.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the official fee for downloading a NIMS vaccination certificate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The official fee is PKR 100 per certificate. This is a one-time charge per certificate category. Once paid, you can re-download and print your certificate at any time from the portal without paying again.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I download a vaccination certificate for my minor child under 18?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For infants and children under 18 who do not possess an adult CNIC, enter the 13-digit Child Registration Certificate (CRC / B-Form) number issued by NADRA. When taking your child to the health facility for the polio drops or vaccines, always present the original B-Form so the health worker records the exact CRC number in NIMS.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if NIMS shows "Record Not Found" after vaccination?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A "Record Not Found" error occurs when the health facility staff has not yet synced or entered your vaccination entry into the centralized server. Return to the health facility or District Health Office (DHO) where the vaccine was administered, present your stamped physical card, and request immediate data entry into the NIMS portal.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I add or update my Passport Number on the NIMS certificate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. When generating your certificate on nims.nadra.gov.pk, the portal prompts you to optionally enter your valid Passport Number and nationality. Adding your passport number is strongly recommended for international travelers, as foreign immigration authorities cross-match the passport number on the certificate with your travel document.',
          },
        },
      ],
    },
  ],
};

export default function NimsVaccinationCertificatePage() {
  const breadcrumbs = [
    { nameEn: 'NADRA Services', nameUr: 'نادرا سروسز', url: '/nadra' },
    { nameEn: 'NIMS Vaccination Certificate 2026', nameUr: 'نمز ویکسینیشن سرٹیفکیٹ 2026' },
  ];

  const certificateSteps = [
    {
      number: 1,
      icon: <Syringe className="w-5 h-5" />,
      titleEn: 'Administer Vaccine & Record',
      titleUr: 'ویکسین لگوائیں اور اندراج',
      descEn: 'Visit a government hospital or DHO center. Ensure your dose is entered into NIMS and your physical card is stamped.',
      descUr: 'سرکاری ہسپتال یا ڈی ایچ او سے ویکسین لگوا کر تصدیقی انٹری نمز پورٹل پر لازمی کروائیں۔',
      tagEn: 'Health Facility',
      tagUr: 'ہسپتال مرحلہ',
    },
    {
      number: 2,
      icon: <ExternalLink className="w-5 h-5" />,
      titleEn: 'Visit nims.nadra.gov.pk',
      titleUr: 'نمز پورٹل کھولیں',
      descEn: 'Open the official portal and select your certificate type: Polio (Travel), COVID-19, or Yellow Fever.',
      descUr: 'آفیشل ویب سائٹ کھولیں اور پولیو (بیرون ملک سفر) یا کورونا سرٹیفکیٹ منتخب کریں۔',
      tagEn: 'Official Domain',
      tagUr: 'سرکاری پورٹل',
    },
    {
      number: 3,
      icon: <CreditCard className="w-5 h-5" />,
      titleEn: 'Enter CNIC / B-Form & Pay Rs. 100',
      titleUr: 'شناختی کارڈ درج کریں اور فیس',
      descEn: 'Type your 13-digit CNIC (or Child CRC B-Form number) and pay the PKR 100 fee via card, JazzCash, EasyPaisa, or e-Sahulat.',
      descUr: '13 ہندسوں کا شناختی کارڈ یا بچوں کا بی فارم نمبر لکھیں اور 100 روپے فیس جمع کرائیں۔',
      tagEn: 'PKR 100 Fee',
      tagUr: '100 روپے فیس',
    },
    {
      number: 4,
      icon: <Download className="w-5 h-5" />,
      titleEn: 'Download QR-Verified PDF',
      titleUr: 'کیو آر کوڈ والا سرٹیفکیٹ ڈاؤنلوڈ',
      descEn: 'Instantly download the official PDF certificate with scannable QR verification for airline and immigration clearance.',
      descUr: 'فوری طور پر بارکوڈ اور کیو آر کوڈ والا اصل پی ڈی ایف سرٹیفکیٹ ڈاؤنلوڈ اور پرنٹ کریں۔',
      tagEn: 'Instant PDF',
      tagUr: 'فوری پرنٹ',
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
            <InteractiveToolBadge labelEn="HEALTH & IMMIGRATION 2026" labelUr="صحت و سفری دستاویزات" variant="navy" />
            <VerifiedBadge textEn="NIMS.NADRA.GOV.PK VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            NIMS Vaccination Certificate NADRA 2026: Polio, International Travel &amp; Child B-Form Guide
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              نادرا نمز ویکسینیشن سرٹیفکیٹ: پولیو، بیرون ملک سفر اور بچوں کے بی فارم سے ڈاؤنلوڈ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Planning international travel or need an official immunization record for school admission? Here is the complete official guide to using NADRA’s <strong>National Immunization Management System (NIMS)</strong> to download certified Polio, Yellow Fever, and COVID-19 vaccination certificates.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Download a NIMS NADRA Vaccination Certificate in Pakistan (2026)"
          topicTitleUr="نادرا نمز سے ویکسینیشن سرٹیفکیٹ ڈاؤنلوڈ کرنے کا طریقہ"
          answerEn="To download an official vaccination certificate: Visit nims.nadra.gov.pk, select your required category (Polio Travel Certificate, COVID-19, or Yellow Fever), enter your 13-digit CNIC (or child's B-Form/CRC number for minors), enter your passport number if traveling, and pay the PKR 100 fee online via debit/credit card, JazzCash, EasyPaisa, or e-Sahulat. Your official QR-coded certificate is available for instant download."
          answerUr="نمز پورٹل سے سرکاری سرٹیفکیٹ ڈاؤنلوڈ کرنے کے لیے nims.nadra.gov.pk پر جائیں، مطلوبہ سرٹیفکیٹ منتخب کریں (سفر کے لیے پولیو، کورونا یا یلو فیور)، 13 ہندسوں کا شناختی کارڈ یا بچوں کا بی فارم نمبر درج کریں، اور 100 روپے کی فیس ڈیبٹ کارڈ، جاز کیش، ایزی پیسہ یا ای سہولت کے ذریعے ادا کریں۔ تصدیق شدہ کیو آر کوڈ والا سرٹیفکیٹ فوری ڈاؤنلوڈ ہو جائے گا۔"
        />

        {/* Conversational Overview Box */}
        <section className="p-6 rounded-2xl bg-amber-50/70 dark:bg-slate-900/80 border border-amber-200/80 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-doc-seal dark:text-amber-400 font-serif font-bold text-lg">
            <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
            <span>Why NIMS Remains Essential in 2026</span>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            While general domestic pandemic restrictions have ended, <strong>NIMS</strong> remains Pakistan’s mandatory sovereign digital immunization portal. Under World Health Organization (WHO) International Health Regulations (IHR), Pakistani travelers and their children require an official digital <strong>Polio Vaccination Certificate</strong> stamped within the preceding 12 months when flying internationally. Furthermore, routine childhood immunization records administered under the Expanded Programme on Immunization (EPI) link directly to child identity through NADRA B-Form (CRC) records.
          </p>
        </section>

        {/* Primary Certificate Categories */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Certification Streams</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
              Types of Certificates Issued by NIMS NADRA
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              Select the appropriate stream on the NIMS homepage based on your intended destination and civic requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Category 1: Polio */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-serif font-bold text-lg">
                <Plane className="w-5 h-5 shrink-0" />
                <h3>1. Polio Travel Certificate</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong>Mandatory for International Travel:</strong> All Pakistani citizens and children residing in Pakistan for more than 4 weeks must hold this certificate before boarding international flights.
              </p>
              <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1 list-disc pl-5">
                <li>Valid for 12 calendar months from dose date.</li>
                <li>Requires OPV (Oral Drops) or IPV (Injection).</li>
                <li>Must be entered by government hospital / DHO counter.</li>
              </ul>
              <div className="pt-2 text-xs font-mono font-bold text-rose-600 dark:text-rose-400">
                Official Fee: PKR 100
              </div>
            </div>

            {/* Category 2: Yellow Fever */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-serif font-bold text-lg">
                <Syringe className="w-5 h-5 shrink-0" />
                <h3>2. Yellow Fever Certificate</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong>Endemic Travel Requirement:</strong> Required for travelers traveling to or returning from African and South American nations endemic for yellow fever transmission.
              </p>
              <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1 list-disc pl-5">
                <li>Administered at designated Port Health Offices.</li>
                <li>Valid for life after 10 days of vaccination.</li>
                <li>Printed with international health regulations seal.</li>
              </ul>
              <div className="pt-2 text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                Official Fee: PKR 100
              </div>
            </div>

            {/* Category 3: COVID-19 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-serif font-bold text-lg">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <h3>3. COVID-19 &amp; Booster Records</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong>Hajj, Umrah &amp; Overseas Visas:</strong> Required by Saudi authorities for pilgrims, international employment visas, and overseas higher education admissions.
              </p>
              <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1 list-disc pl-5">
                <li>Contains complete history of primary and booster doses.</li>
                <li>QR code verified by foreign health border systems.</li>
                <li>Downloadable in Urdu and English formats.</li>
              </ul>
              <div className="pt-2 text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                Official Fee: PKR 100
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps Diagram */}
        <ProcessStepsDiagram
          badgeEn="PORTAL WORKFLOW 2026"
          badgeUr="ڈاؤنلوڈ کا طریقہ"
          titleEn="Step-by-Step Procedure to Download Your Certificate"
          titleUr="نمز نادرا سے ویکسینیشن سرٹیفکیٹ حاصل کرنے کا مرحلہ وار طریقہ"
          subtitleEn="Follow these 4 verified steps to generate your official government immunization certificate."
          subtitleUr="اپنا سرکاری کیو آر تصدیق شدہ سرٹیفکیٹ حاصل کرنے کے لیے ان مراحل پر عمل کریں۔"
          steps={certificateSteps}
        />

        {/* Child B-Form & Routine Childhood Immunization */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex items-center gap-2 font-serif font-extrabold text-xl text-doc-ink dark:text-white">
            <Baby className="w-6 h-6 text-doc-seal dark:text-amber-400 shrink-0" />
            <span>How Child B-Form (CRC) Connects to Immunization Records</span>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            For parents traveling abroad with infants and children, or seeking documentation for school enrollment, understanding the connection between <strong>NADRA B-Form (Child Registration Certificate / CRC)</strong> and health databases is crucial:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <strong className="text-doc-ink dark:text-white block font-bold">1. Minor Identity Identifier</strong>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Minors do not possess adult CNICs. Their 13-digit sequence printed on the NADRA B-Form (CRC) serves as their permanent national identity number. When visiting a health facility, always provide the exact B-Form number so the nurse or DHO data operator assigns the vaccination to that child’s national record.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <strong className="text-doc-ink dark:text-white block font-bold">2. NIMS Travel Polio vs EPI Routine Card</strong>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Routine childhood shots (BCG, Measles, Pentavalent, Rotavirus) are logged in the provincial <strong>Expanded Programme on Immunization (EPI)</strong> physical yellow card. However, for <em>international travel clearance</em>, the official QR-coded Polio Certificate generated via NIMS is the only document accepted by airport immigration.
              </p>
            </div>
          </div>
        </section>

        {/* Troubleshooting Common Issues */}
        <section className="p-6 sm:p-8 rounded-2xl bg-amber-50/70 dark:bg-slate-900/80 border border-amber-200/80 dark:border-slate-800 space-y-5">
          <div className="flex items-center gap-2 font-serif font-extrabold text-xl text-doc-seal dark:text-amber-400">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <span>Troubleshooting NIMS Certificate Download Issues</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 space-y-2">
              <strong className="text-doc-ink dark:text-white block font-bold">Issue: &quot;Record Not Found&quot;</strong>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                This occurs when the hospital staff forgot to upload your dose. Visit the vaccination counter or District Health Office (DHO) with your stamped card and demand immediate upload to NIMS.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 space-y-2">
              <strong className="text-doc-ink dark:text-white block font-bold">Issue: Missing Passport Number</strong>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                If your certificate only shows your CNIC, log back in to nims.nadra.gov.pk. The portal permits you to add or modify your passport number free of charge before printing for foreign travel.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 space-y-2">
              <strong className="text-doc-ink dark:text-white block font-bold">Issue: Payment Deducted but Failed</strong>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Wait 15 minutes for 1Link bank reconciliation. Re-enter your CNIC and click &apos;Check Payment Status&apos;. If still pending, pay at any nearby NADRA e-Sahulat franchise shop.
              </p>
            </div>
          </div>
        </section>

        {/* Ad Zone */}
        <AdPlacementZone format="horizontal" />

        {/* Cross-linking Section */}
        <section className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h2 className="font-serif font-extrabold text-xl text-doc-ink dark:text-white">
            Related NADRA Child &amp; Travel Documentation Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            <Link
              href="/nadra/b-form-frc-status-check"
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex items-center justify-between group"
            >
              <span className="font-bold text-doc-ink dark:text-white group-hover:text-doc-seal">B-Form &amp; FRC Status</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-doc-seal" />
            </Link>
            <Link
              href="/nadra/b-form-kaise-banaye"
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex items-center justify-between group"
            >
              <span className="font-bold text-doc-ink dark:text-white group-hover:text-doc-seal">B-Form Kaise Banaye</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-doc-seal" />
            </Link>
            <Link
              href="/nadra/nicop-apply-online"
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex items-center justify-between group"
            >
              <span className="font-bold text-doc-ink dark:text-white group-hover:text-doc-seal">NICOP Overseas Card</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-doc-seal" />
            </Link>
            <Link
              href="/nadra/nadra-helpline-complaint-directory-2026"
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex items-center justify-between group"
            >
              <span className="font-bold text-doc-ink dark:text-white group-hover:text-doc-seal">NADRA Helpline Directory</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-doc-seal" />
            </Link>
          </div>
        </section>

        {/* FAQ Accordion Visual */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions: NIMS Vaccination Certificate 2026"
          titleUr="عام سوالات: نمز ویکسینیشن سرٹیفکیٹ اور سفری پولیو کارڈ"
          subtitleEn="Direct verified answers to common inquiries regarding international travel rules, B-Form issuance, and payment methods."
          subtitleUr="بیرون ملک سفر، بچوں کے پولیو قطرے، فیس اور نادرا پورٹل سے متعلق تفصیلی سوالات و جوابات۔"
          items={[
            {
              questionEn: "Is a Polio certificate still required for international travel from Pakistan in 2026?",
              questionUr: "کیا 2026 میں پاکستان سے باہر سفر کے لیے پولیو سرٹیفکیٹ اب بھی لازمی ہے؟",
              answerEn: "Yes. Under World Health Organization (WHO) International Health Regulations (IHR), all Pakistani citizens and residents departing after a stay of over 4 weeks must hold a valid Polio Vaccination Certificate administered within the preceding 12 months.",
              answerUr: "جی ہاں! عالمی ادارہ صحت (WHO) کے قوانین کے تحت پاکستان سے بیرون ملک سفر کرنے والے تمام مسافروں کے لیے پولیو سرٹیفکیٹ لازمی ہے جو پچھلے ایک سال کے دوران لیا گیا ہو۔",
            },
            {
              questionEn: "What is the fee to download a vaccination certificate on NIMS?",
              questionUr: "نمز پورٹل سے ویکسینیشن سرٹیفکیٹ ڈاؤنلوڈ کرنے کی سرکاری فیس کتنی ہے؟",
              answerEn: "The official fee is PKR 100 per certificate. This is a one-time charge per certificate category. Once paid, you can re-download and print your certificate at any time without paying again.",
              answerUr: "سرکاری فیس صرف 100 روپے فی سرٹیفکیٹ ہے۔ ایک بار فیس ادا کرنے کے بعد آپ جب چاہیں دوبارہ مفت پرنٹ نکال سکتے ہیں۔",
            },
            {
              questionEn: "Can I download a vaccination certificate for my child using their B-Form?",
              questionUr: "کیا بچوں کے بی فارم سے ان کا پولیو سرٹیفکیٹ نکل سکتا ہے؟",
              answerEn: "Yes. For children under 18 who do not possess a CNIC, enter the 13-digit Child Registration Certificate (CRC / B-Form) number issued by NADRA to generate and print their official travel certificate.",
              answerUr: "جی ہاں! 18 سال سے کم عمر بچوں کے لیے نادرا بی فارم پر درج 13 ہندسوں کا سی آر سی نمبر لکھ کر سرٹیفکیٹ حاصل کیا جا سکتا ہے۔",
            },
            {
              questionEn: "What should I do if the portal says 'Record Not Found'?",
              questionUr: "اگر پورٹل پر ڈیٹا نہ ملے (Record Not Found) تو کیا کرنا چاہیے؟",
              answerEn: "Visit the hospital or District Health Office (DHO) where the vaccine was administered, present your stamped physical vaccination card, and request immediate data entry into the NIMS database.",
              answerUr: "متعلقہ ہسپتال یا ڈی ایچ او آفس جا کر اپنا مہر شدہ کارڈ دکھائیں اور عملے سے کہیں کہ وہ فوری طور پر نمز پورٹل پر اندراج کریں۔",
            },
            {
              questionEn: "How long is a NIMS Polio certificate valid for travel?",
              questionUr: "پولیو ویکسینیشن سرٹیفکیٹ کتنے عرصے کے لیے کارآمد ہوتا ہے؟",
              answerEn: "The international Polio travel certificate is valid for exactly 12 calendar months (1 year) from the date of vaccine administration. If your travel occurs after 12 months, you must receive fresh drops/injection and update your certificate.",
              answerUr: "پولیو سرٹیفکیٹ ویکسین لگنے کی تاریخ سے ٹھیک ایک سال (12 ماہ) کے لیے قابلِ قبول ہوتا ہے، جس کے بعد دوبارہ قطرے پلوانا لازمی ہے۔",
            },
            {
              questionEn: "What payment methods are supported on the NIMS portal?",
              questionUr: "نمز پورٹل پر فیس کی ادائیگی کے کون سے طریقے دستیاب ہیں؟",
              answerEn: "You can pay the PKR 100 fee online using any debit/credit card (Visa, Mastercard, PayPak), mobile wallets (JazzCash, EasyPaisa), or in cash at any NADRA e-Sahulat franchise counter.",
              answerUr: "آپ فیس کسی بھی بینک کے اے ٹی ایم/ڈیبٹ کارڈ، ایزی پیسہ، جاز کیش یا قریبی نادرا ای سہولت فرنچائز سے نقد جمع کرا سکتے ہیں۔",
            },
          ]}
        />
      </div>
    </>
  );
}
