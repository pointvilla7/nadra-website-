import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { StepFlowDiagram } from '@/components/StepFlowDiagram';
import {
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  Shield,
  Home,
  Building,
  FileCheck,
  Send,
  FileText,
  BadgeCheck,
  Scale,
  Users,
  Smartphone,
  Check,
  AlertCircle,
  FileSpreadsheet,
  IdCard,
  Lock
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tenant Police Verification Online Pakistan 2026: Landlord Registration & PKM Guide | Pakistan Info Hub',
  description:
    'Complete Pakistani citizen guide to tenant police verification (Karayadari registration): Mandatory landlord rules under the Temporary Residents Act 2015, Punjab Police PKM app, Sindh Police registration, required documents, and criminal penalties for non-compliance.',
  keywords: [
    'tenant police verification online pakistan 2026',
    'punjab police karayadari form online pkm',
    'sindh temporary residents act tenant registration',
    'documents required tenant police verification',
    'landlord tenant registration legal penalty',
    'police khidmat markaz tenant verification free',
  ],
  openGraph: {
    title: 'Tenant Police Verification Online Pakistan 2026: Landlord Registration Guide',
    description:
      'Official guide for Pakistani landlords: Register tenants online via Punjab Police PKM and Sindh Police, mandatory documents, and avoiding legal penalties.',
    url: 'https://www.pakistaninfohub.com/legal/tenant-police-verification-online-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/legal/tenant-police-verification-online-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Police & Legal Services',
          item: 'https://www.pakistaninfohub.com/legal',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Tenant Police Verification Online 2026',
          item: 'https://www.pakistaninfohub.com/legal/tenant-police-verification-online-2026',
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Complete Tenant Police Verification in Pakistan (for Landlords)',
      description:
        'Official step-by-step procedure for Pakistani landlords to register new tenants with the police under the Information of Temporary Residents Act 2015.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Execute Written Rent Agreement',
          text: 'Sign an official rent agreement (Iqrar Nama Karayadaran) on legal stamp paper with the tenant and two witnesses.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Gather Tenant Credentials & Photograph',
          text: 'Collect clear CNIC copies of the landlord, tenant, witnesses, and a passport-size photograph of the primary tenant.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Submit Online or Visit Police Khidmat Markaz (PKM)',
          text: 'Submit through the "Punjab Police Pakistan" mobile app, PKM Global portal (pkm.punjabpolice.gov.pk), Sindh Police counters, or visit the nearest Police Khidmat Markaz / local police station.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Receive Official Verification Certificate',
          text: 'The police desk performs an instant criminal record check in the PSRMS database and issues an official Tenant Registration Certificate free of charge.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is Tenant Police Verification the same as a Police Character Certificate (PCC)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Tenant Police Verification (Karayadari Registration) is a mandatory legal reporting obligation for LANDLORDS to notify the local police station about who is occupying their rental property. A Police Character Certificate (PCC) is an individual background clearance certificate requested by a CITIZEN/TENANT for their own visa applications, immigration, or employment.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there any fee to register a tenant with the police in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Tenant police verification is 100% FREE of charge across Punjab Police, Sindh Police, KP Police, and Islamabad Police. There are zero government fees. If any middleman or station staff demands payment, report it immediately to the police helpline (1787 in Punjab or 15).',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if a landlord does not register their tenant with the police?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under Section 3 & 4 of the Information of Temporary Residents Act 2015 (in Punjab and Sindh), failing to register a tenant within the stipulated period (typically 15 days) is a cognizable criminal offence. The police can lodge a formal FIR against the landlord, resulting in fines and imprisonment of up to 6 months to 1 year.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do hostel owners and property managers also have to register student residents?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The law explicitly applies to private hostels, guesthouses, rented rooms, and commercial godowns. Hostel managers must maintain a verified log of every student resident and transmit their CNIC details to the local police station.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does the tenant registration process take at Police Khidmat Markaz?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If you visit a Police Khidmat Markaz (PKM) with all required documents (CNICs, rent agreement, and photograph), the entire verification and computerized certificate issuance takes approximately 15 to 20 minutes on the spot.',
          },
        },
      ],
    },
  ],
};

export default function TenantVerificationGuidePage() {
  const breadcrumbs = [
    { nameEn: 'Police & Legal Services', nameUr: 'پولیس و قانونی خدمات', url: '/legal' },
    { nameEn: 'Tenant Police Verification Online 2026', nameUr: 'کرایہ دار پولیس تصدیق و اندراج 2026' },
  ];

  const verificationSteps = [
    {
      number: 1,
      icon: <FileText className="w-5 h-5" />,
      titleEn: 'Execute Rent Agreement',
      titleUr: 'کرایہ نامہ معاہدہ تحریر کریں',
      descEn: 'Draft an official tenancy agreement on legal stamp paper signed by the landlord, tenant, and two witnesses.',
      descUr: 'اسٹامپ پیپر پر قانونی کرایہ داری معاہدہ تحریر کریں جس پر دو گواہوں کے دستخط موجود ہوں۔',
      tagEn: 'Agreement',
      tagUr: 'معاہدہ',
    },
    {
      number: 2,
      icon: <IdCard className="w-5 h-5" />,
      titleEn: 'Prepare CNICs & Photograph',
      titleUr: 'شناختی کارڈز اور تصویر',
      descEn: 'Collect attested CNIC copies of the owner, tenant, and 2 witnesses along with a passport-size photo of the tenant.',
      descUr: 'مالک مکان، کرایہ دار اور گواہوں کے شناختی کارڈز اور کرایہ دار کی تصویر تیار رکھیں۔',
      tagEn: 'Documents',
      tagUr: 'دستاویزات',
    },
    {
      number: 3,
      icon: <Smartphone className="w-5 h-5" />,
      titleEn: 'Submit via App or PKM',
      titleUr: 'ایپ یا خدمت مرکز میں اندراج',
      descEn: 'Submit through the Punjab Police App / PKM portal (pkm.punjabpolice.gov.pk) or visit the nearest Khidmat Markaz.',
      descUr: 'پنجاب پولیس ایپ، آن لائن پورٹل یا قریبی پولیس خدمت مرکز جا کر فارم جمع کروائیں۔',
      tagEn: 'Submission',
      tagUr: 'فارم جمع',
    },
    {
      number: 4,
      icon: <BadgeCheck className="w-5 h-5" />,
      titleEn: 'Instant Certificate Issuance',
      titleUr: 'تصدیقی سرٹیفکیٹ کی فوری وصولی',
      descEn: 'Police run a background clearance check on the PSRMS criminal database and issue an official registration certificate.',
      descUr: 'کرمنل ریکارڈ چیک کے بعد 15 سے 20 منٹ میں باضابطہ کمپیوٹرائزڈ تصدیقی سرٹیفکیٹ حاصل کریں۔',
      tagEn: 'Completed',
      tagUr: 'سرٹیفکیٹ جاری',
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
            <InteractiveToolBadge labelEn="LANDLORD CIVIC COMPLIANCE" labelUr="مالکان مکان قانونی ذمہ داری" variant="navy" />
            <VerifiedBadge textEn="TEMPORARY RESIDENTS ACT 2015" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Tenant Police Verification Online Pakistan (2026 Landlord Guide)
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              کرایہ دار پولیس تصدیق: پنجاب پولیس ایپ، خدمت مرکز اور سندھ میں اندراج کا طریقہ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Renting out a house, flat, commercial shop, or hostel room in Pakistan? Under provincial security laws, landlords are legally obligated to register tenant particulars with the police. Here is how to complete the process online or at a Police Khidmat Markaz (PKM) for free.
          </p>
        </header>

        {/* Crucial Distinguisher Banner */}
        <div className="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 text-xs font-sans space-y-2">
          <div className="flex items-center gap-2 font-bold text-doc-ink dark:text-blue-300 text-sm">
            <Shield className="w-4 h-4 text-doc-seal" />
            <span>Who Is This Guide For? (Landlords vs. Tenants)</span>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong>This page is for LANDLORDS &amp; PROPERTY MANAGERS</strong> fulfilling their mandatory statutory duty to report occupants under the <em>Information of Temporary Residents Act 2015</em>.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            If you are an individual tenant seeking a <strong>Police Character Certificate (PCC)</strong> for your own foreign visa or job application, read our dedicated guide here:
          </p>
          <Link
            href="/certificates/police-character-certificate-online-apply-2026"
            className="inline-flex items-center gap-1.5 font-bold text-doc-seal hover:text-doc-brass transition underline text-xs"
          >
            <span>Read Police Character Certificate (PCC) Online Guide 2026 →</span>
          </Link>
        </div>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How Tenant Police Verification Works in Pakistan"
          topicTitleUr="پاکستان میں کرایہ دار پولیس تصدیق کیسے کروائی جاتی ہے؟"
          answerEn="Under the Information of Temporary Residents Act 2015, landlords in Pakistan must register new tenants with the local police within 15 days of moving in. The service is 100% free. You can register online via the Punjab Police App / PKM portal (pkm.punjabpolice.gov.pk) or in person at any Police Khidmat Markaz (PKM) or local police station with CNIC copies and the rent agreement."
          answerUr="انفارمیشن آف ٹیمپریری ریذیڈنٹس ایکٹ 2015 کے تحت مالک مکان کے لیے کرایہ دار کا اندراج کروانا قانونی طور پر لازمی ہے۔ یہ سروس مکمل طور پر مفت ہے۔ پنجاب پولیس موبائل ایپ، پی کے ایم پورٹل (pkm.punjabpolice.gov.pk) یا قریبی پولیس خدمت مرکز جا کر کرایہ نامہ اور شناختی کارڈ جمع کروا کے 15 منٹ میں تصدیق مکمل ہو جاتی ہے۔"
        />

        {/* Conversational Intro */}
        <section className="p-6 rounded-2xl bg-amber-50/70 dark:bg-slate-900/80 border border-amber-200/80 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-doc-seal dark:text-amber-400 font-serif font-bold text-lg">
            <Home className="w-5 h-5 shrink-0" />
            <h2>Why Tenant Verification is Protection for Landlords, Not Harassment</h2>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Many property owners view tenant registration as an unwanted police hassle. However, in Pakistan&apos;s legal framework, <strong>the law holds the property owner accountable</strong> if an unverified tenant engages in criminal, anti-state, or unlawful activities inside a rented building.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Taking 15 minutes to register your tenant protects you legally against criminal FIRs and provides official peace of mind. Both Punjab and Sindh Police have modernized this process so you don&apos;t even have to step inside a traditional police station.
          </p>
        </section>

        {/* Section 1: Provincial Breakdown */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Building className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              How to Register in Your Province (Punjab, Sindh &amp; Islamabad)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            {/* Punjab */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 font-mono font-bold text-[11px]">
                PUNJAB (LAHORE, RWP, MULTAN, FAISALABAD)
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Punjab Information of Temporary Residents Act 2015
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Method 1 (Mobile App):</strong> Download the official <em>&quot;Punjab Police Pakistan&quot;</em> app on Android/iOS, select <strong>&quot;Tenant Registration / کرایہ داری فارم&quot;</strong>, enter tenant CNIC details, and upload the rent agreement photos.</li>
                <li><strong>Method 2 (Police Khidmat Markaz):</strong> Visit any District PKM with original CNICs and tenancy deed. The desk officer verifies the tenant in the Criminal Record Management System (CRMS) and prints an official certificate in 15 minutes.</li>
                <li><strong>Method 3 (Overseas Landlords):</strong> Overseas Pakistani owners can register via the <strong>PKM Global Portal</strong> (<code>pkm.punjabpolice.gov.pk</code>).</li>
              </ul>
            </div>

            {/* Sindh */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-mono font-bold text-[11px]">
                SINDH (KARACHI, HYDERABAD, SUKKUR)
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Sindh Information of Temporary Residents Act 2015
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Method 1 (Sindh Police Portal / Counters):</strong> Submit particulars through the official Sindh Police Khidmat Counters or via the designated tenant verification system on <code>sindhpolice.gov.pk</code>.</li>
                <li><strong>Method 2 (Local Police Station / DPO):</strong> Submit Form Karayadari along with CNIC copies of the owner and tenant at the local Police Station (Thana) under whose jurisdiction the property falls.</li>
                <li><strong>Hostel &amp; Hotel Rules:</strong> Managers of commercial hostels and guesthouses in Karachi are required to submit weekly digitized tenant logs.</li>
              </ul>
            </div>

            {/* Islamabad */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 font-mono font-bold text-[11px]">
                ISLAMABAD CAPITAL TERRITORY (ICT)
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                ICT Police Khidmat Markaz &amp; Rent Regulations
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Registration Desks:</strong> Islamabad Police operates dedicated counters at the PKM F-6 and mobile facilitation vans across ICT sectors.</li>
                <li><strong>Foreign Tenants:</strong> If renting to foreign nationals, registration must also be reported to the Foreigners Registration Desk (FRO).</li>
              </ul>
            </div>

            {/* KP */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 font-mono font-bold text-[11px]">
                KHYBER PAKHTUNKHWA (PESHAWAR, MARDAN)
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                KP Police Assistance Lines (PAL)
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Registration Desks:</strong> Visit any district <em>Police Assistance Line (PAL)</em> counter with the tenancy agreement.</li>
                <li><strong>Processing:</strong> Data is synchronized directly with the district security branch and a computerized acknowledgement receipt is issued.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Flow Diagram */}
        <StepFlowDiagram
          titleEn="Step-by-Step Tenant Police Verification Flow"
          titleUr="کرایہ دار پولیس تصدیق و رجسٹریشن کا طریقہ کار"
          subtitleEn="How landlords can complete tenant registration in under 20 minutes"
          subtitleUr="معاہدہ لکھنے سے لے کر تصدیقی سرٹیفکیٹ حاصل کرنے کے 4 مراحل"
          steps={verificationSteps}
        />

        {/* Section 3: Required Documents Checklist */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileSpreadsheet className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Required Documents Checklist for Landlords
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Make sure you have clear, readable copies of the following documents before starting the online application or visiting a Police Khidmat Markaz:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">1. Landlord’s CNIC</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Original and 1 clear photocopy of the property owner / legal attorney&apos;s CNIC.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">2. Tenant’s CNIC</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Original and 1 photocopy of the primary tenant&apos;s CNIC (and B-Forms for minors).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">3. Rent Agreement</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Original signed tenancy agreement (Iqrar Nama) on legal stamp paper.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">4. Tenant Photograph</span>
                <p className="text-slate-600 dark:text-slate-300">
                  1 fresh passport-size colored photograph of the primary tenant.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">5. Witness CNICs</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Photocopies of CNICs of the two witnesses who signed the tenancy agreement.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">6. Property Dealer CNIC</span>
                <p className="text-slate-600 dark:text-slate-300">
                  If rented through an estate agent, copy of the property dealer’s CNIC and stamp.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 4: Legal Penalties for Non-Compliance */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-rose-600" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Legal Penalties for Landlords Who Fail to Register
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 space-y-4 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Under <strong>Sections 3, 4 &amp; 9 of the Punjab and Sindh Information of Temporary Residents Acts 2015</strong>, tenant registration is NOT optional. Failing to report an occupant within the statutory period (typically 15 days of occupancy) triggers the following consequences:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800 space-y-1">
                <span className="font-mono font-bold text-rose-700 dark:text-rose-400 uppercase text-xs block">1. Criminal FIR Registration</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Police are mandated to lodge a formal criminal FIR against the landlord, property dealer, and tenant under Section 188 PPC and the Temporary Residents Act.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800 space-y-1">
                <span className="font-mono font-bold text-rose-700 dark:text-rose-400 uppercase text-xs block">2. Imprisonment &amp; Fines</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Offenders face summary trial carrying potential imprisonment of <strong>up to 6 months to 1 year</strong> and heavy statutory fines.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800 space-y-1">
                <span className="font-mono font-bold text-rose-700 dark:text-rose-400 uppercase text-xs block">3. Joint Liability for Crimes</span>
                <p className="text-slate-600 dark:text-slate-300">
                  If an unregistered tenant is involved in terror, extortion, or narcotics, the landlord is legally interrogated as a suspected facilitator.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Frequently Asked Questions */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Landlord Legal Clarifications)
            </h2>
          </div>

          <div className="space-y-3 font-sans text-xs">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Is tenant police verification really free of cost?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Yes. Police Khidmat Markaz (PKM) and police stations do NOT charge any fee for tenant registration. It is a completely free public service. Never pay bribes or unofficial &quot;file charges&quot; to anyone.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                What if I am renting out my house to a close relative or family friend?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                If there is a tenancy arrangement where rent is exchanged, police registration is legally recommended to prevent future civil disputes or search operations. If immediate family members (parents, children) reside with you, registration under the temporary residents act is not required.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                How long does the verification take at Police Khidmat Markaz?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                If you arrive with all required documents (CNIC copies, rent agreement, and photograph), the PKM desk officer enters the data into the central police network and issues the computerized certificate within 15 to 20 minutes.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                What should I do when a tenant vacates my property?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                When a tenancy contract ends and the tenant leaves, notify your local police station or PKM to mark the tenancy record as &quot;Vacated / Closed&quot; so that you are no longer tied to that occupant&apos;s future activities.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Related Links */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Police &amp; Legal Verification Utilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/certificates/police-character-certificate-online-apply-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Individual Clearance</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Police Character Certificate (PCC) 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                How tenants and citizens obtain background clearance for visas and jobs.
              </p>
            </Link>

            <Link
              href="/legal/punjab-khidmat-markaz-police-services"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-seal font-bold uppercase block">PKM Directory</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Police Khidmat Markaz Services Directory
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                14 essential civic police services available under one roof.
              </p>
            </Link>

            <Link
              href="/legal/right-to-information-act-pakistan-how-to-file-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-emerald-600 font-bold uppercase block">Citizen Rights</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Right to Information (RTI) Guide 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Article 19-A procedures for requesting public and police records.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
