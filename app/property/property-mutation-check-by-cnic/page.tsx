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
  Building,
  FileCheck,
  Clock,
  Coins,
  Search,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  MapPin,
  Landmark,
  Scale
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Property Mutation Check by CNIC 2026 – Online Intiqal & PLRA Fard Record | Pakistan Info Hub',
  description:
    'Check property mutation (Intiqal) status online in Pakistan by 13-digit CNIC. Verify digital land ownership, Khewat number, Khasra details, and PLRA Arazi Record Center entries across Punjab, Sindh, and KPK.',
  keywords: [
    'property mutation check by cnic 2026',
    'plra intiqal check online punjab',
    'sindh zameen property verification cnic',
    'check fard by cnic pakistan',
    'land mutation status online pakistan',
    'khasra number check by cnic',
  ],
  openGraph: {
    title: 'Property Mutation Check by CNIC – PLRA Arazi Record Center Guide 2026',
    description:
      'Check property mutation (Intiqal) status online in Pakistan by 13-digit CNIC. Verify digital land ownership, Khewat number, and plot dimensions.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/property/property-mutation-check-by-cnic',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/property/property-mutation-check-by-cnic' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com/' },
        { '@type': 'ListItem', position: 2, name: 'Property & Land', item: 'https://www.pakistaninfohub.com/property' },
        { '@type': 'ListItem', position: 3, name: 'Property Mutation Check by CNIC', item: 'https://www.pakistaninfohub.com/property/property-mutation-check-by-cnic' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does an Intiqal (Mutation) independently guarantee legal title of property?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Under Pakistani property law, an Intiqal (mutation) is primarily a fiscal land revenue entry recorded for tax assessment purposes. A registered Sale Deed (Registry / Baynama) executed before the Sub-Registrar remains the primary conclusive proof of title.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I check my land record (Fard) online in Punjab?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Visit the Punjab Land Records Authority (PLRA) portal at punjab-zameen.gov.pk or download the PLRA Digital Fard mobile app, select your District, Tehsil, and Mauza, and input your 13-digit CNIC to view your ownership details.',
          },
        },
      ],
    },
  ],
};

export default function PropertyMutationPage() {
  const breadcrumbs = [
    { nameEn: 'Property & Land', nameUr: 'جائیداد و اراضی', url: '/property' },
    { nameEn: 'Property Mutation Check', nameUr: 'اراضی انتقال چیک آن لائن' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="LAND RECORDS" labelUr="اراضی ریکارڈ" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Property Mutation Check by CNIC 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              اراضی انتقال و فرد آن لائن چیک بذریعہ شناختی کارڈ (پنجاب، سندھ و کے پی کے)
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Authoritative guide to verifying computerized land records, property mutation (Intiqal) status, Khewat ownership shares, and digital Fard issuance through PLRA, Sindh Zameen, and provincial land revenue authorities.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Check Property Mutation (Intiqal) by CNIC (2026 Overview)"
          topicTitleUr="شناختی کارڈ سے زمین کا انتقال کیسے چیک کریں؟"
          answerEn="To check property mutation online: (1) Visit your provincial portal — Punjab Land Records Authority (punjab-zameen.gov.pk), Sindh Zameen Portal (sindhzameen.gos.pk), or KPK LRMIS (services.kpmis.gov.pk). (2) Select your District, Tehsil, and Mauza (Revenue Estate). (3) Enter your 13-digit CNIC without dashes or search by Khewat/Khasra number. (4) View the computerized ownership record, sanctioned mutation date, and download your digital Fard Malkiat."
          answerUr="اراضی انتقال آن لائن چیک کرنے کا طریقہ: (1) متعلقہ صوبائی پورٹل (پنجاب اراضی ریکارڈ، سندھ زمین یا کے پی کے ایل آر ایم آئی ایس) پر جائیں۔ (2) اپنا ضلع، تحصیل اور موضع منتخب کریں۔ (3) اپنا 13 ہندسوں کا شناختی کارڈ یا خسرہ نمبر درج کریں۔ (4) کمپیوٹرائزڈ ملکیت، منظور شدہ انتقال کی تاریخ اور ڈیجیٹل فرد ملکیت ڈاؤن لوڈ کریں۔"
        />

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step Computerized Property Mutation &amp; Fard Verification (2026)"
          titleUr="اراضی انتقال اور ڈیجیٹل فرد چیک کرنے کا 4 مرحلہ وار طریقہ کار"
          subtitleEn="From selecting district and revenue mauza to CNIC search, biometric verification, and digital Fard download"
          subtitleUr="ضلع اور موضع کے انتخاب سے لے کر شناختی کارڈ سرچ اور ڈیجیٹل فرد ملکیت کے حصول تک"
          steps={[
            {
              number: 1,
              titleEn: "Select Province & Land Portal",
              titleUr: "صوبائی اراضی ریکارڈ پورٹل منتخب کریں",
              descEn: "Navigate to PLRA (Punjab), Sindh Zameen, or KPK LRMIS web portal or mobile app.",
              descUr: "پنجاب اراضی ریکارڈ اتھارٹی (PLRA)، سندھ زمین یا خیبر پختونخوا کے آفیشل پورٹل پر جائیں۔",
              tagEn: "Portal Access",
              tagUr: "پورٹل سلیکشن",
            },
            {
              number: 2,
              titleEn: "Choose District, Tehsil & Mauza",
              titleUr: "ضلع، تحصیل اور موضع (ریونیو اسٹیٹ) منتخب کریں",
              descEn: "Use dropdown filters to pinpoint your exact revenue estate, deha, or urban patwar circle.",
              descUr: "ڈراپ ڈاؤن مینو سے اپنے ضلع، متعلقہ تحصیل اور پٹوار سرکل یا موضع کا انتخاب کریں۔",
              tagEn: "Location",
              tagUr: "علاقہ سلیکشن",
            },
            {
              number: 3,
              titleEn: "Enter 13-Digit CNIC / Khasra No",
              titleUr: "13 ہندسوں کا شناختی کارڈ یا خسرہ نمبر درج کریں",
              descEn: "Input the owner's CNIC without dashes, or search by Khewat, Khatooni, or Khasra parcel number.",
              descUr: "زمین کے مالک کا شناختی کارڈ بغیر ڈیشز کے درج کریں یا کھیوٹ/خسرہ نمبر کے ذریعے سرچ کریں۔",
              tagEn: "CNIC Search",
              tagUr: "شناختی کارڈ سرچ",
            },
            {
              number: 4,
              titleEn: "View Mutation & Download Digital Fard",
              titleUr: "منظور شدہ انتقال دیکھیں اور ڈیجیٹل فرد حاصل کریں",
              descEn: "Inspect active mutation (Intiqal) status, verified square footage/marla area, and download QR-coded digital Fard.",
              descUr: "انتقال کی قانونی حیثیت، رقبہ اور کیو آر کوڈ والی تصدیق شدہ فرد ملکیت فوری ڈاؤن لوڈ کریں۔",
              tagEn: "Digital Fard",
              tagUr: "ڈیجیٹل فرد",
            },
          ]}
        />

        <AdPlacementZone format="horizontal" />

        {/* Section 1: Related Property Guides */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Property, Legal &amp; Revenue Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/property/property-tax-online-check-pay-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Tax Challan</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Property Tax Challan Online →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Download Excise PIN/PT-10 challan and calculate 5% rebate.</p>
            </Link>

            <Link
              href="/legal/succession-certificate-legal-heir-nadra-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Inheritance</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NADRA Succession Certificate →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Inherit property and transfer land mutation among legal heirs.</p>
            </Link>

            <Link
              href="/legal/tenant-police-verification-online-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Tenancy</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Tenant Police Verification Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Register rental contracts online with Punjab Police & ICT.</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Property Mutation &amp; Land Records)"
          titleUr="اراضی انتقال اور ریونیو ریکارڈ سے متعلق عام سوالات"
          subtitleEn="Essential guidelines on legal title differences, mutation fees, biometric ARC verification, and resolving land disputes"
          subtitleUr="رجسٹری و انتقال کا فرق، سرکاری فیس، اراضی ریکارڈ سینٹر میں بائیومیٹرک تصدیق اور تنازعات کا حل"
          items={[
            {
              questionEn: "Does an Intiqal (Mutation) independently guarantee legal title of property?",
              questionUr: "کیا اراضی انتقال (Intiqal) تنہا جائیداد کی مکمل قانونی ملکیت کا ثبوت ہے؟",
              answerEn: "No. Under Pakistani property law, an Intiqal (mutation) is primarily a fiscal land revenue entry recorded for tax assessment purposes. A registered Sale Deed (Registry / Baynama) executed before the Sub-Registrar remains the primary conclusive proof of title.",
              answerUr: "ہرگز نہیں! سپریم کورٹ آف پاکستان کے فیصلوں کے مطابق انتقال صرف سرکاری مالیاتی ریکارڈ میں نام کی منتقلی ہے تاکہ ٹیکس وصول کیا جا سکے۔ اصل قانونی ملکیت کا بنیادی ثبوت سب رجسٹرار کے سامنے رجسٹرڈ بیع نامہ (رجسٹری) ہی ہوتا ہے۔",
            },
            {
              questionEn: "How can I check my land record (Fard) online in Punjab?",
              questionUr: "پنجاب میں آن لائن فرد ملکیت کیسے حاصل کی جا سکتی ہے؟",
              answerEn: "Visit the Punjab Land Records Authority (PLRA) portal at punjab-zameen.gov.pk or download the PLRA Digital Fard mobile app, select your District, Tehsil, and Mauza, and input your 13-digit CNIC to view your ownership details.",
              answerUr: "پنجاب لینڈ ریکارڈ اتھارٹی کی ویب سائٹ punjab-zameen.gov.pk پر جا کر یا ڈیجیٹل فرد ایپ پر ضلع، تحصیل اور موضع کا انتخاب کریں اور شناختی کارڈ درج کر کے فرد حاصل کریں۔",
            },
            {
              questionEn: "What is the fee for obtaining a computerized Fard Malkiat in Pakistan?",
              questionUr: "کمپیوٹرائزڈ فرد ملکیت کے حصول کی سرکاری فیس کتنی ہے؟",
              answerEn: "The standard official fee for a computerized Fard for record/verification purposes is PKR 100 to PKR 300 via e-Pay or at Arazi Record Centers (ARC). Fard for Sale / Transfer carries higher regulatory stamp duty based on property valuation tables.",
              answerUr: "معلومات اور ریکارڈ کی غرض سے کمپیوٹرائزڈ فرد کی فیس 100 سے 300 روپے ہے جو ای پے یا اراضی ریکارڈ سینٹر پر ادا کی جاتی ہے۔ بیع یا ٹرانسفر کے لیے فرد کی فیس جائیداد کی سرکاری ویلیو کے مطابق ہوتی ہے۔",
            },
            {
              questionEn: "How long does it take for a property mutation to be sanctioned after Registry?",
              questionUr: "رجسٹری کروانے کے بعد اراضی ریکارڈ میں انتقال درج ہونے میں کتنا وقت لگتا ہے؟",
              answerEn: "Under modernized PLRA systems, automated sub-registrar integration sanctions the mutation within 3 to 7 working days following biometric verification of both buyer and seller at the Arazi Record Center (ARC).",
              answerUr: "ڈیجیٹل سسٹم کے تحت سب رجسٹرار سے رجسٹری ہونے کے بعد خریدار اور بیچنے والے کی بائیومیٹرک تصدیق پر 3 سے 7 دن میں انتقال کمپیوٹرائزڈ ریکارڈ میں درج ہو جاتا ہے۔",
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Punjab Land Records Authority (PLRA)', url: 'https://punjab-zameen.gov.pk/' },
            { label: 'Sindh Land Administration & Revenue Management (Sindh Zameen)', url: 'https://sindhzameen.gos.pk/' },
            { label: 'KPK Land Record Management Information System (LRMIS)', url: 'https://services.kpmis.gov.pk/' },
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
