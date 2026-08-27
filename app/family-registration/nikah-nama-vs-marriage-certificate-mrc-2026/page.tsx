import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ComparisonVisual, ProcessStepsDiagram, FAQAccordionVisual } from '@/components/visuals';
import {
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  FileText,
  FileCheck,
  Building,
  QrCode,
  Users,
  Lock,
  Layers,
  Heart
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nikah Nama vs Marriage Certificate (MRC) 2026 – Key Differences & Registration | Pakistan Info Hub',
  description:
    'Complete guide to the difference between Nikah Nama and NADRA Computerized Marriage Certificate (MRC) in Pakistan: Union Council CRMS registration, why MRC is required for wife CNIC updates and visas, late registration rules, and privacy facts.',
  keywords: [
    'Nikah Nama vs Marriage Certificate MRC',
    'NADRA computerized marriage certificate apply',
    'Union Council CRMS marriage registration fee',
    'wife CNIC change husband name requirement',
    'late marriage registration procedure Pakistan',
    'marriage certificate check online by CNIC',
    'how to get NADRA marriage certificate Union Council',
  ],
  openGraph: {
    title: 'Nikah Nama vs Marriage Certificate (MRC) 2026 – Key Differences & Registration',
    description:
      'Neutral public guide on distinguishing the manual Nikah Nama contract from the official computerized NADRA/Union Council MRC, registration steps, and legal requirements.',
    url: 'https://www.pakistaninfohub.com/family-registration/nikah-nama-vs-marriage-certificate-mrc-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/family-registration/nikah-nama-vs-marriage-certificate-mrc-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Marriage & Family', item: 'https://www.pakistaninfohub.com/family-registration' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Nikah Nama vs MRC',
          item: 'https://www.pakistaninfohub.com/family-registration/nikah-nama-vs-marriage-certificate-mrc-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Nikah Nama vs Marriage Registration Certificate (MRC): Key Differences, CRMS Process & Legal Guide',
      description:
        'A comprehensive public reference explaining the vital distinction between the manual religious Nikah contract and the NADRA-integrated computerized Marriage Registration Certificate.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-20',
      dateModified: '2026-08-21',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/family-registration/nikah-nama-vs-marriage-certificate-mrc-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the Nikah Nama alone sufficient to update a wife’s CNIC or apply for foreign visas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. While a Nikah Nama is a binding Islamic and civil contract, modern government departments (including NADRA, the Directorate General of Immigration & Passports, foreign embassies, and courts) require the official computerized Marriage Registration Certificate (MRC) issued by the Union Council through NADRA’s Civil Registration Management System (CRMS).',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I check or verify a Marriage Certificate online by CNIC in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. There is NO public online portal where citizens can search marriage records by CNIC. In Pakistan, marriage and marital records are treated as strictly private and confidential. Verification is conducted via the encrypted dynamic QR code printed directly on the computerized MRC or in person at the issuing Union Council.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to obtain the computerized Marriage Certificate from the Union Council?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Once the Nikah Registrar or applicant submits the completed Nikah Nama along with copies of bride, groom, and witness CNICs, the Union Council secretary inputs the record into the CRMS database. The computerized certificate is typically printed and handed over within 3 to 7 working days upon payment of the municipal registration fee.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should we do if our marriage was solemnized years ago but never registered with the Union Council?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can complete a "Late Marriage Registration" by visiting the Union Council having jurisdiction over the area where the Nikah took place. Submit the original manual Nikah Nama, CNICs of both spouses and witnesses, and a late registration affidavit along with the statutory late fee. If the original Nikah Nama is lost or decades have passed, a declaratory court decree from a Family Court may be required.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the role of the Nikah Registrar in this process?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under the Muslim Family Laws Ordinance 1961, the licensed Nikah Registrar (Nikah Khawan) who solemnized the marriage is legally bound to deposit the official duplicate copy of the manual Nikah Nama with the relevant local Union Council within the prescribed legal timeframe.',
          },
        },
      ],
    },
  ],
};

export default function NikahNamaVsMrcPage() {
  const breadcrumbs = [
    { nameEn: 'Marriage & Family', nameUr: 'نکاح و فیملی رجسٹریشن' },
    { nameEn: 'Nikah Nama vs MRC', nameUr: 'نکاح نامہ بمقابلہ کمپیوٹرائزڈ میرج سرٹیفکیٹ' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="CIVIL REGISTRATION GUIDE" labelUr="سرکاری رجسٹریشن گائیڈ" variant="navy" />
            <VerifiedBadge textEn="CRMS & FAMILY LAWS COMPLIANT" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Nikah Nama vs Marriage Certificate (MRC): Differences &amp; Registration
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              نکاح نامہ اور نادرا میرج سرٹیفکیٹ میں کیا فرق ہے؟ مکمل قانونی طریقہ کار
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Many couples assume the handwritten Nikah Nama signed on their wedding day is all they need.
            Understand why the computerized Marriage Registration Certificate (MRC) is a distinct, mandatory document,
            how the Union Council CRMS system works, and how to register past marriages.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is the Difference Between Nikah Nama and an MRC?"
          topicTitleUr="نکاح نامہ اور میرج سرٹیفکیٹ میں بنیادی فرق کیا ہے؟"
          answerEn="A Nikah Nama is the handwritten Islamic marriage contract signed during the ceremony. The Marriage Registration Certificate (MRC) is the official computerized document issued by the Union Council via NADRA's CRMS database. The computerized MRC is required to update CNICs, apply for visas, and claim legal rights."
          answerUr="نکاح نامہ وہ تحریری شرعی معاہدہ ہے جو نکاح کے وقت گواہوں کی موجودگی میں لکھا جاتا ہے۔ جبکہ میرج رجسٹریشن سرٹیفکیٹ (MRC) یونین کونسل کا نادرا کمپیوٹرائزڈ تصدیقی سرٹیفکیٹ ہے جو شناختی کارڈ میں شوہر کا نام درج کروانے، ویزا اور قانونی امور کے لیے لازمی ہے۔"
        />

        {/* Section 1: Side-by-Side Comparison Table */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Nikah Nama vs Computerized MRC: Detailed Comparison
            </h2>
          </div>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Feature / Parameter</th>
                  <th className="px-4 py-3 text-left text-slate-300">Manual Nikah Nama</th>
                  <th className="px-4 py-3 text-left text-emerald-300">Computerized MRC (NADRA / UC)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Issuing Authority
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Licensed Nikah Registrar / Qazi / Nikah Khawan
                  </td>
                  <td className="px-4 py-3 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    Union Council / Cantonment Board / Arbitration Council
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Document Format
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Handwritten 4-page registered booklet in Urdu (Form II)
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Digital single-sheet certificate in English &amp; Urdu with dynamic QR code
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Primary Legal Function
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Establishes marriage contract, Haq Mehr conditions, and rights
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Official state recognition in NADRA Civil Registration database (CRMS)
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Wife CNIC &amp; Passport Update
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Generally not accepted alone by NADRA
                  </td>
                  <td className="px-4 py-3 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    Mandatory for changing marital status &amp; spouse name
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Embassy &amp; Foreign Visa Use
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Requires separate legal translation &amp; attestation
                  </td>
                  <td className="px-4 py-3 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    Standard international document accepted by MOFA and embassies
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>

        {/* Section 2: Why the Computerized MRC is Essential */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Why You Must Obtain the Computerized Marriage Certificate (MRC)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-sans">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-seal text-sm block">1. Updating Wife&apos;s CNIC</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                NADRA requires the computerized MRC to change the marital status from Single to Married and add the husband&apos;s name.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-blue-600 dark:text-blue-400 text-sm block">2. Family Visas &amp; Immigration</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Foreign embassies (UK, US, Gulf, Canada, Schengen) demand the bilingual NADRA MRC with MOFA attestation for spouse visas.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm block">3. Child Birth Registration</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Issuing a computerized Birth Certificate and B-Form (CRC) for newborns requires parentage verification in NADRA records.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-purple-600 dark:text-purple-400 text-sm block">4. Legal Asset Inheritance</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Claiming bank accounts, pension benefits, and property succession certificates requires verifiable proof of legal marriage.
              </p>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 3: Step-by-Step: How to Register and Obtain MRC */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              How to Register Your Marriage &amp; Obtain the Computerized MRC
            </h2>
          </div>

          <div className="space-y-3 font-sans">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
              <div className="space-y-1 text-xs">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  Identify the Competent Local Union Council
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Visit the Union Council, Cantonment Board, or Arbitration Council office having administrative jurisdiction over the bride&apos;s residential address or the venue where the Nikah took place.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
              <div className="space-y-1 text-xs">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  Submit Required Documents &amp; Copies
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Provide: (1) Original Nikah Nama + copy, (2) Valid CNIC copies of bride and groom, (3) CNIC copies of fathers, (4) CNIC copies of two Nikah witnesses, and (5) Nikah Registrar&apos;s license stamp.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
              <div className="space-y-1 text-xs">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  CRMS Data Entry &amp; Biometric Logging
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  The Union Council secretary inputs the bride/groom bio-data and Mehr details into the official NADRA Civil Registration Management System (CRMS).
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">4</span>
              <div className="space-y-1 text-xs">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  Collect the QR-Coded Computerized MRC
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Pay the standard municipal fee (typically PKR 100 to 500 depending on district/timeliness) and receive the official bilingual NADRA Marriage Registration Certificate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Late Registration for Older Marriages */}
        <section className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 font-sans">
          <div className="flex items-center gap-2 text-doc-brass font-bold text-sm">
            <Clock className="w-5 h-5 text-amber-400" />
            <span>Late Registration: What If Your Marriage Was Never Registered Years Ago?</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            If your marriage took place years ago and was never logged into the computerized system, you can still perform a <strong>Late Marriage Registration</strong>.
            Visit your relevant Union Council with your original manual Nikah Nama, CNICs of both spouses, and a late registration affidavit explaining the delay.
            If the manual Nikah Nama has been lost over time, you may need to obtain a declaratory decree from a Family Court before the Union Council can issue the MRC.
          </p>
        </section>

        {/* Section 5: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Civil &amp; Family Registration Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/family-registration/nikah-nama-registration-process-pakistan"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Nikah Laws</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Nikah Registration Procedure →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Muslim Family Laws Ordinance 1961 rules.</p>
            </Link>

            <Link
              href="/nadra/b-form-frc-status-check"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Family Verification</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                B-Form &amp; FRC Status Check →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Verify family tree records and children registration.</p>
            </Link>

            <Link
              href="/legal/succession-certificate-legal-heir-nadra-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Inheritance Laws</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Succession Certificate Guide 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Claim bank accounts and legal heir assets.</p>
            </Link>
          </div>
        </section>

        {/* Comparison Visual: Nikah Nama vs Computerized MRC */}
        <ComparisonVisual
          titleEn="Nikah Nama (Form II) vs Computerized Marriage Certificate (MRC)"
          titleUr="روایتی نکاح نامہ بمقابلہ کمپیوٹرائزڈ میرج رجسٹریشن سرٹیفکیٹ"
          subtitleEn="Issuing authority, statutory purpose, format, and legal validity comparison"
          subtitleUr="جاری کرنے والے ادارے، قانونی مقاصد اور سفارت خانے کی تصدیق کا تقابلی جائزہ"
          items={[
            {
              titleEn: "Manual Nikah Nama (Form II)",
              titleUr: "روایتی دستی نکاح نامہ (فارم II)",
              subtitleEn: "Islamic Marriage Contract (Solemnization Day)",
              subtitleUr: "شرعی و قانونی معاہدہ نکاح",
              badgeEn: "Primary Deed",
              badgeUr: "بنیادی معاہدہ",
              badgeVariant: "brass",
              pointsEn: [
                "Filled on the wedding day by authorized Nikah Khawan/Registrar",
                "Signed by bride, groom, wali/vakil, and 2 sane adult witnesses",
                "Contains 25 specific legal clauses including Haq Mehr and Talaq delegation",
                "Serves as the foundational legal evidence to register marriage at the local government"
              ],
              recommendedForEn: "Immediate Islamic validity, wedding ceremony execution, and sharia marital proof",
              recommendedForUr: "نکاح کی تقریب، شرعی ایجاب و قبول اور حق مہر کے قانونی ثبوت کے لیے"
            },
            {
              titleEn: "Computerized Marriage Certificate (MRC)",
              titleUr: "کمپیوٹرائزڈ میرج سرٹیفکیٹ (CRMS)",
              subtitleEn: "Union Council / NADRA Database Certificate",
              subtitleUr: "یونین کونسل نادرا ڈیجیٹل سرٹیفکیٹ",
              badgeEn: "Official Government MRC",
              badgeUr: "سرکاری ڈیجیٹل سرٹیفکیٹ",
              badgeVariant: "emerald",
              isPopular: true,
              pointsEn: [
                "Issued by the Union Council/Cantonment Board via NADRA CRMS central system",
                "Bilingual format (Urdu & English) with secure encrypted dynamic QR code",
                "Mandatory for wife's CNIC marital status change (husband name entry)",
                "Required for child Nadra B-Form, spouse visa, MOFA attestation, and foreign immigration"
              ],
              recommendedForEn: "NADRA CNIC update, passport modification, embassy spouse visa, and foreign immigration",
              recommendedForUr: "نادرا کارڈ میں خاوند کا نام درج کروانے، فیملی ویزا اور پاسپورٹ بنوانے کے لیے لازمی"
            }
          ]}
        />

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step Marriage Registration Workflow in Pakistan"
          titleUr="نکاح کے بعد کمپیوٹرائزڈ میرج سرٹیفکیٹ کے حصول کا مرحلہ وار طریقہ"
          subtitleEn="4-stage verified sequence from Nikah ceremony to official CRMS certificate collection"
          subtitleUr="نکاح خواں کے اندراج سے لے کر یونین کونسل کے کیو آر کوڈ سرٹیفکیٹ تک کے 4 مراحل"
          steps={[
            {
              number: 1,
              titleEn: "Solemnize Nikah & Form II",
              titleUr: "نکاح کی تقریب اور فارم II",
              descEn: "Nikah Khawan completes the 4-copy official Nikah Nama with signatures of spouses, vakil, and 2 witnesses.",
              descUr: "نکاح خواں سرکاری نکاح نامے کی چاروں کاپیاں پر کروا کر فریقین اور گواہوں کے دستخط لے۔",
              tagEn: "Nikah Day",
              tagUr: "تقریب نکاح",
            },
            {
              number: 2,
              titleEn: "Deposit Copy at Union Council",
              titleUr: "یونین کونسل میں کاپی جمع",
              descEn: "Nikah Registrar or family submits duplicate copy and CNICs to the local Union Council / Cantonment Office.",
              descUr: "نکاح رجسٹرار یا دولہا متعلقہ یونین کونسل میں نکاح نامے کی سرکاری کاپی جمع کروائے۔",
              tagEn: "UC Deposit",
              tagUr: "یونین کونسل",
            },
            {
              number: 3,
              titleEn: "CRMS Database Entry",
              titleUr: "نادرا سی آر ایم ایس اندراج",
              descEn: "Union Council Secretary enters marriage records into NADRA's centralized Civil Registration Management System.",
              descUr: "یونین کونسل سیکرٹری نادرا کے مرکزی ڈیجیٹل سسٹم میں نکاح کے مکمل کوائف فیڈ کرے۔",
              tagEn: "Data Entry",
              tagUr: "ڈیٹا انٹری",
            },
            {
              number: 4,
              titleEn: "Collect Computerized MRC",
              titleUr: "کمپیوٹرائزڈ سرٹیفکیٹ وصولی",
              descEn: "Pay nominal municipal fee (PKR 100–300) to collect the official bilingual QR-coded Marriage Certificate.",
              descUr: "سرکاری فیس ادا کر کے کیو آر کوڈ سے لیس اصل کمپیوٹرائزڈ سرٹیفکیٹ وصول کریں۔",
              tagEn: "QR Certificate",
              tagUr: "سرٹیفکیٹ وصولی",
            },
          ]}
        />

        {/* Section 6: FAQs */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Nikah Nama vs MRC)"
          titleUr="نکاح نامہ اور میرج رجسٹریشن سرٹیفکیٹ کے متعلق عام سوالات"
          subtitleEn="Essential guidelines on visa requirements, online verification, timelines, and late entry"
          subtitleUr="ویزا شرائط، آن لائن تصدیق، کتنا وقت لگتا ہے اور تاخیری اندراج کی تفصیلی معلومات"
          items={[
            {
              questionEn: "Is the Nikah Nama alone sufficient to update a wife's CNIC or apply for foreign visas?",
              questionUr: "کیا صرف دستی نکاح نامے کی بنیاد پر نادرا شناختی کارڈ یا فیملی ویزا بن سکتا ہے؟",
              answerEn: "No. While a Nikah Nama is a binding Islamic and civil contract, modern government departments (including NADRA, the Directorate General of Immigration & Passports, foreign embassies, and courts) require the official computerized Marriage Registration Certificate (MRC) issued by the Union Council through NADRA's Civil Registration Management System (CRMS).",
              answerUr: "نہیں، نادرا، پاسپورٹ آفس اور غیر ملکی سفارت خانے صرف یونین کونسل کے کمپیوٹرائزڈ میرج سرٹیفکیٹ (MRC) کو تسلیم کرتے ہیں۔ دستی نکاح نامہ اکیلا کافی نہیں ہوتا۔",
            },
            {
              questionEn: "Can I check or verify a Marriage Certificate online by CNIC in Pakistan?",
              questionUr: "کیا شناختی کارڈ نمبر لکھ کر آن لائن نکاح کی تصدیق کی جا سکتی ہے؟",
              answerEn: "No. There is NO public online portal where citizens can search marriage records by CNIC. In Pakistan, marriage and marital records are treated as strictly private and confidential. Verification is conducted via the encrypted dynamic QR code printed directly on the computerized MRC or in person at the issuing Union Council.",
              answerUr: "نہیں! رازداری کی وجہ سے شادی کا ریکارڈ آن لائن سرچ نہیں کیا جا سکتا۔ اصلیت کی جانچ صرف سرٹیفکیٹ پر موجود کیو آر کوڈ کو اسکین کر کے کی جاتی ہے۔",
            },
            {
              questionEn: "How long does it take to obtain the computerized Marriage Certificate from the Union Council?",
              questionUr: "یونین کونسل سے کمپیوٹرائزڈ میرج سرٹیفکیٹ کتنے دنوں میں ملتا ہے؟",
              answerEn: "Once the Nikah Registrar or applicant submits the completed Nikah Nama along with copies of bride, groom, and witness CNICs, the Union Council secretary inputs the record into the CRMS database. The computerized certificate is typically printed and handed over within 3 to 7 working days upon payment of the municipal registration fee.",
              answerUr: "نکاح نامہ اور شناختی کارڈ کی کاپیاں جمع کروانے کے بعد 3 سے 7 کام کے دنوں کے اندر کمپیوٹرائزڈ سرٹیفکیٹ جاری کر دیا جاتا ہے۔",
            },
            {
              questionEn: "What should we do if our marriage was solemnized years ago but never registered with the Union Council?",
              questionUr: "اگر نکاح پرانا ہو اور یونین کونسل میں اندراج نہ کروایا گیا ہو تو کیا طریقہ ہے؟",
              answerEn: "You can complete a 'Late Marriage Registration' by visiting the Union Council having jurisdiction over the area where the Nikah took place. Submit the original manual Nikah Nama, CNICs of both spouses and witnesses, and a late registration affidavit along with the statutory late fee. If the original Nikah Nama is lost or decades have passed, a declaratory court decree from a Family Court may be required.",
              answerUr: "آپ قریبی یونین کونسل میں لیٹ انٹری کا حلف نامہ، اصل نکاح نامہ اور فیس جمع کروا کر تاخیری اندراج کروا سکتے ہیں۔ بہت زیادہ تاخیر پر فیملی کورٹ کی ڈگری درکار ہو سکتی ہے۔",
            },
            {
              questionEn: "What is the role of the Nikah Registrar in this process?",
              questionUr: "اس عمل میں نکاح خواں اور رجسٹرار کی قانونی ذمہ داری کیا ہے؟",
              answerEn: "Under the Muslim Family Laws Ordinance 1961, the licensed Nikah Registrar (Nikah Khawan) who solemnized the marriage is legally bound to deposit the official duplicate copy of the manual Nikah Nama with the relevant local Union Council within the prescribed legal timeframe.",
              answerUr: "مسلم فیملی لاز آرڈیننس 1961 کے تحت نکاح خواں قانونی طور پر پابند ہے کہ وہ نکاح کی کاپی مقررہ وقت کے اندر متعلقہ یونین کونسل میں جمع کروائے۔",
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'National Database and Registration Authority (NADRA) CRMS', url: 'https://www.nadra.gov.pk/' },
            { label: 'Muslim Family Laws Ordinance 1961 Government of Pakistan', url: 'https://pakistancode.gov.pk/' },
            { label: 'Local Government & Community Development Department', url: 'https://lgcd.punjab.gov.pk/' },
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
