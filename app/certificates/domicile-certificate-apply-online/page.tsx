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
  MapPin,
  Stamp,
  ArrowRight,
  AlertTriangle,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Domicile Certificate Apply Online Pakistan 2026 – Punjab, Sindh, KPK & ICT Guide | Pakistan Info Hub',
  description:
    'Complete guide to applying for a computerized Domicile Certificate in Pakistan across Punjab (e-Khidmat Markaz), Sindh, KPK, and Islamabad (ICT). Requirements, fees, and processing times.',
  keywords: [
    'domicile certificate apply online 2026',
    'punjab e-khidmat markaz domicile',
    'sindh domicile online application',
    'islamabad ict domicile certificate',
    'domicile certificate requirements pakistan',
    'kpk domicile verification online',
  ],
  openGraph: {
    title: 'Domicile Certificate Apply Online – Punjab, Sindh, KPK & ICT Guide 2026',
    description:
      'Step-by-step procedures, required documents, fee challans, and online appointment booking for computerized domicile certificates in Pakistan.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/certificates/domicile-certificate-apply-online',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/certificates/domicile-certificate-apply-online' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com/' },
        { '@type': 'ListItem', position: 2, name: 'Certificates', item: 'https://www.pakistaninfohub.com/certificates' },
        { '@type': 'ListItem', position: 3, name: 'Domicile Certificate Apply Online', item: 'https://www.pakistaninfohub.com/certificates/domicile-certificate-apply-online' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can a person hold two domicile certificates from different districts in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Under the Pakistan Citizenship Act 1951, holding dual domiciles is strictly illegal. If you move permanently to a new district, you must formally cancel your previous domicile before applying for a new one.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the official government fee for a computerized domicile certificate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Official government fees range from PKR 200 to PKR 500 depending on the province, paid via National Bank of Pakistan (NBP) or e-Khidmat Markaz digital billing.',
          },
        },
      ],
    },
  ],
};

export default function DomicileCertificatePage() {
  const breadcrumbs = [
    { nameEn: 'Certificates', nameUr: 'سرٹیفکیٹس', url: '/certificates' },
    { nameEn: 'Domicile Certificate Online', nameUr: 'ڈومیسائل سرٹیفکیٹ آن لائن' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="CIVIC CERTIFICATES" labelUr="سرکاری دستاویزات" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Domicile Certificate Apply Online Pakistan 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              ڈومیسائل سرٹیفکیٹ آن لائن اپلائی گائیڈ (پنجاب، سندھ، کے پی کے، اسلام آباد)
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Authoritative guide on obtaining your computerized Domicile Certificate (PRC / Form P) for government jobs (CSS, PPSC, FPSC, SPSC, KPPSC), university admissions (MDCAT, ECAT), and quota entitlements.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Apply for a Domicile Certificate in Pakistan (2026 Overview)"
          topicTitleUr="پاکستان میں ڈومیسائل سرٹیفکیٹ بنوانے کا مختصر طریقہ"
          answerEn="To obtain a computerized Domicile Certificate in Pakistan: (1) Prepare your original CNIC/B-Form, father's CNIC, matric/educational certificate, utility bill or registered rent deed, and 2 passport photos. (2) Pay the official fee (PKR 200–500) via Bank Challan 32-A or e-Pay. (3) Visit your district e-Khidmat Markaz (Punjab), Deputy Commissioner (DC) Office, or ICT Citizen Facilitation Center for biometric entry. (4) Receive your computerized certificate within 3 to 7 working days."
          answerUr="ڈومیسائل سرٹیفکیٹ حاصل کرنے کا طریقہ: (1) اپنا اصل شناختی کارڈ/بے فارم، والد کا شناختی کارڈ، تعلیمی اسناد، یوٹیلیٹی بل یا کرایہ نامہ اور 2 تصاویر تیار کریں۔ (2) 200 سے 500 روپے فیس چالان یا ای پے سے ادا کریں۔ (3) ای خدمت مرکز، ڈی سی آفس یا فیسیلیٹیشن سینٹر میں بائیومیٹرک اندراج کروائیں۔ (4) 3 سے 7 دن میں کمپیوٹرائزڈ ڈومیسائل حاصل کریں۔"
        />

        {/* Section 1: Required Documents & Eligibility */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Mandatory Document Checklist for Domicile Issuance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-sans">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="font-bold text-doc-ink dark:text-white text-sm block">1. Applicant CNIC / B-Form</span>
              <p className="text-slate-600 dark:text-slate-300">Original NADRA Smart CNIC (or Form-B for applicants under 18) with 2 attested photocopies.</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="font-bold text-doc-ink dark:text-white text-sm block">2. Father / Guardian CNIC</span>
              <p className="text-slate-600 dark:text-slate-300">Copy of father’s CNIC or death certificate if deceased, along with father’s domicile if available.</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="font-bold text-doc-ink dark:text-white text-sm block">3. Academic Certificates</span>
              <p className="text-slate-600 dark:text-slate-300">Matriculation certificate, school leaving certificate, or latest degree proving education in district.</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="font-bold text-doc-ink dark:text-white text-sm block">4. Residence Proof / Utility Bill</span>
              <p className="text-slate-600 dark:text-slate-300">Electricity/gas bill in applicant/father’s name or registered tenancy agreement proving local stay.</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="font-bold text-doc-ink dark:text-white text-sm block">5. Passport Photographs</span>
              <p className="text-slate-600 dark:text-slate-300">2 to 4 passport-size photographs with blue or white background taken within last 6 months.</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="font-bold text-doc-ink dark:text-white text-sm block">6. Affidavit / Stamp Paper</span>
              <p className="text-slate-600 dark:text-slate-300">Non-judicial stamp paper affidavit stating applicant does not hold domicile of any other district.</p>
            </div>
          </div>
        </section>

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step Computerized Domicile Application Workflow (2026)"
          titleUr="ڈومیسائل سرٹیفکیٹ کے حصول کا 4 مرحلہ وار طریقہ کار"
          subtitleEn="From document preparation to biometric appointment and certificate collection"
          subtitleUr="کاغذات کی تیاری سے لے کر بائیومیٹرک اندراج اور سرٹیفکیٹ وصولی تک کے مراحل"
          steps={[
            {
              number: 1,
              titleEn: "Document Preparation & Fee Payment",
              titleUr: "کاغذات اور فیس چالان کی ادائیگی",
              descEn: "Gather CNIC, education certificates, and proof of residence; pay the PKR 200–500 fee challan via e-Pay or NBP branch.",
              descUr: "شناختی کارڈ، تعلیمی اسناد اور رہائشی ثبوت اکٹھے کریں اور بینک چالان یا ای پے کے ذریعے فیس ادا کریں۔",
              tagEn: "Documents & Fee",
              tagUr: "فیس و کاغذات",
            },
            {
              number: 2,
              titleEn: "e-Khidmat / DC Office Appointment",
              titleUr: "ای خدمت مرکز یا ڈی سی آفس میں اپائنٹمنٹ",
              descEn: "Book an online appointment at your district e-Khidmat Markaz (Punjab) or visit the Deputy Commissioner facilitation desk.",
              descUr: "اپنے ضلع کے ای خدمت مرکز پر آن لائن ٹوکن لیں یا ڈپٹی کمشنر آفس کے سہولت کاؤنٹر پر تشریف لے جائیں۔",
              tagEn: "Appointment",
              tagUr: "اپائنٹمنٹ",
            },
            {
              number: 3,
              titleEn: "Biometric Capture & Record Entry",
              titleUr: "بائیومیٹرک فنگر پرنٹس اور ڈیٹا اندراج",
              descEn: "Desk officer scans original documents, captures live digital photographs, and records biometric fingerprints.",
              descUr: "کاؤنٹر نمائندہ اصل دستاویزات اسکین کرتا ہے، لائیو تصویر لیتا ہے اور بائیومیٹرک فنگر پرنٹ کا اندراج کرتا ہے۔",
              tagEn: "Biometrics",
              tagUr: "بائیومیٹرک",
            },
            {
              number: 4,
              titleEn: "Verification & Certificate Collection",
              titleUr: "ڈی سی تصدیق اور کمپیوٹرائزڈ سرٹیفکیٹ وصولی",
              descEn: "Assistant Commissioner / DC signs computerized record; collect official QR-coded domicile certificate within 3–7 working days.",
              descUr: "ڈپٹی کمشنر کی منظوری کے بعد 3 سے 7 دنوں میں کیو آر کوڈ والا اصل کمپیوٹرائزڈ ڈومیسائل سرٹیفکیٹ وصول کریں۔",
              tagEn: "Collection",
              tagUr: "ڈومیسائل وصولی",
            },
          ]}
        />

        <AdPlacementZone format="horizontal" />

        {/* Section 2: Related Links */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Civic &amp; Examination Verification Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/certificates/police-character-certificate-online-apply-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Clearance</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Police Character Certificate 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Apply for online police verification and character certificate.</p>
            </Link>

            <Link
              href="/jobs/roll-number-slip-checker-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Job Slips</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Roll Number Slip Checker →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check PPSC, FPSC, NTS, and board test roll number slips.</p>
            </Link>

            <Link
              href="/legal/succession-certificate-legal-heir-nadra-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">NADRA Legal</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Succession Certificate Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Biometric inheritance and legal heir certificates via NADRA.</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Domicile Certificate in Pakistan)"
          titleUr="ڈومیسائل سرٹیفکیٹ سے متعلق عام سوالات"
          subtitleEn="Essential guidelines on dual domicile laws, fee structures, validity, and changing districts"
          subtitleUr="دوہری ڈومیسائل کی ممانعت، فیس کا شیڈول، تاحیات میعاد اور پتہ تبدیل کرنے کا طریقہ"
          items={[
            {
              questionEn: "Can a person hold two domicile certificates from different districts in Pakistan?",
              questionUr: "کیا ایک شخص پاکستان کے دو مختلف اضلاع سے ڈومیسائل بنوا سکتا ہے؟",
              answerEn: "No. Under the Pakistan Citizenship Act 1951, holding dual domiciles is strictly illegal. If you move permanently to a new district, you must formally cancel your previous domicile before applying for a new one.",
              answerUr: "ہرگز نہیں! پاکستان سٹیزن شپ ایکٹ 1951 کے تحت ایک وقت میں دو ڈومیسائل رکھنا غیر قانونی ہے۔ نیا ڈومیسائل بنوانے کے لیے پرانا سرٹیفکیٹ منسوخ کروانا لازمی ہوتا ہے۔",
            },
            {
              questionEn: "What is the official government fee for a computerized domicile certificate?",
              questionUr: "کمپیوٹرائزڈ ڈومیسائل سرٹیفکیٹ کی سرکاری فیس کتنی ہوتی ہے؟",
              answerEn: "Official government fees range from PKR 200 to PKR 500 depending on the province, paid via National Bank of Pakistan (NBP) or e-Khidmat Markaz digital billing.",
              answerUr: "سرکاری فیس 200 سے 500 روپے کے درمیان ہوتی ہے جو نیشنل بینک یا ای خدمت مرکز کے کاؤنٹر پر جمع کروائی جاتی ہے۔",
            },
            {
              questionEn: "What is the validity period of a Domicile Certificate?",
              questionUr: "ڈومیسائل سرٹیفکیٹ کی میعاد (ویلیڈیٹی) کتنے سال ہوتی ہے؟",
              answerEn: "A Domicile Certificate is valid for life as long as the applicant remains a resident of that district and does not apply for a domicile in another administrative region.",
              answerUr: "ڈومیسائل سرٹیفکیٹ تاحیات (Life Time) کارآمد رہتا ہے جب تک کہ شہری مستقل طور پر کسی دوسرے ضلع منتقل نہ ہو جائے۔",
            },
            {
              questionEn: "Can a married woman use her husband's domicile for government jobs and admissions?",
              questionUr: "کیا شادی کے بعد خاتون اپنے شوہر کے ضلع کا ڈومیسائل استعمال کر سکتی ہے؟",
              answerEn: "Yes. After marriage, a woman has the legal right under Pakistani law to either retain her father's domicile or apply for a transfer to her husband's domicile district by attaching her computerized Marriage Registration Certificate (Nikahnama/NADRA MRC).",
              answerUr: "جی ہاں! شادی کے بعد خاتون کو اختیار ہوتا ہے کہ وہ اپنے والد کے ضلع کا ڈومیسائل برقرار رکھے یا نکاح نامہ دکھا کر شوہر کے ضلع کا نیا ڈومیسائل بنوا لے۔",
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Punjab e-Khidmat Markaz Citizen Services', url: 'https://services.punjab.gov.pk/' },
            { label: 'Islamabad Citizen Facilitation Center (ICT)', url: 'https://ictislamabad.gov.pk/' },
            { label: 'Ministry of Interior Government of Pakistan (Citizenship Rules 1951)', url: 'https://interior.gov.pk/' },
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
