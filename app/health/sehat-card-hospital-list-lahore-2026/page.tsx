import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { StepFlowDiagram } from '@/components/StepFlowDiagram';
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
  Hospital,
  HeartPulse,
  Building2,
  FileCheck,
  Send,
  FileText,
  BadgeCheck,
  CreditCard,
  PhoneCall,
  Stethoscope,
  Check,
  AlertCircle,
  MapPin,
  Shield
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sehat Card Hospital List Lahore 2026: Panel Hospitals',
  description:
    'View the 2026 list of Lahore hospitals accepting the Sehat Card. Find participating public and private hospitals, cashless admission rules, and panel updates.',
  keywords: [
    'sehat card hospital list lahore 2026',
    'lahore hospitals accepting sehat card',
    'phimc empanelled hospitals lahore',
    'sehat sahulat program private hospitals lahore',
    'mayo hospital jinnah hospital sehat card counter',
    'how to use sehat card at hospital lahore',
  ],
  openGraph: {
    title: 'Sehat Card Hospital List Lahore 2026: Panel Hospitals',
    description:
      'View the 2026 list of Lahore hospitals accepting the Sehat Card. Find participating public and private hospitals, cashless admission rules, and panel updates.',
    url: 'https://www.pakistaninfohub.com/health/sehat-card-hospital-list-lahore-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/health/sehat-card-hospital-list-lahore-2026' },
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
          name: 'Health & Medical Services',
          item: 'https://www.pakistaninfohub.com/health',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Sehat Card Hospital List Lahore 2026',
          item: 'https://www.pakistaninfohub.com/health/sehat-card-hospital-list-lahore-2026',
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Find and Use Empanelled Sehat Card Hospitals in Lahore',
      description:
        'Official step-by-step procedure to find participating Lahore hospitals on the PHIMC directory and receive cashless inpatient medical treatment.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Verify Current Hospital Status on PHIMC Portal',
          text: 'Visit phimc.punjab.gov.pk or call 0800-09009 to verify that your target hospital in Lahore is currently active on the empanelled panel.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Bring Original CNIC / B-Form',
          text: 'Bring your original Computerized National Identity Card (CNIC) or child B-Form to the hospital (your CNIC functions as the Sehat Card).',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Visit the Hospital Sehat Sahulat Facilitation Desk',
          text: 'Proceed directly to the dedicated Sehat Sahulat Program (SSP) counter inside the hospital for real-time biometric and eligibility authentication.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Receive Cashless Inpatient Treatment',
          text: 'Once approved by State Life / PHIMC desk officers, all prescribed inpatient room, diagnostic, surgical, and post-discharge medicines are billed directly to the government.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the hospital list on this page permanent and complete?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Hospital panels are dynamic and subject to ongoing audits, renewal contracts, and government policy revisions by the Punjab Health Initiative Management Company (PHIMC). While we list representative major institutions, you should always verify the live active list on phimc.punjab.gov.pk or call 0800-09009 before scheduling non-emergency treatment.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if my chosen private hospital says it is no longer on the Sehat panel?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If a private hospital has temporarily suspended Sehat Card services, you can either select an alternative empanelled private facility from the PHIMC live portal or visit any major government teaching hospital (such as Mayo, Jinnah, Services, or LGH), where Sehat Sahulat desks operate continuously.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the Sehat Card cover Outpatient (OPD) clinic consultations and daily medicines?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The Sehat Sahulat Program is an Inpatient (IPD) health insurance scheme covering hospitalization, surgeries, day-care procedures (like dialysis and chemotherapy), and emergency admissions. Routine outpatient (OPD) doctor checkups and daily walk-in pharmacy purchases are not covered.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the annual treatment limit per family under the Sehat Card in Punjab?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under the standard Sehat Sahulat Program, each eligible family is allocated up to Rs. 1,000,000 (10 Lakh PKR) per year for secondary and priority tertiary inpatient healthcare treatments across empanelled hospitals.',
          },
        },
      ],
    },
  ],
};

export default function SehatCardHospitalListLahorePage() {
  const breadcrumbs = [
    { nameEn: 'Health & Medical Services', nameUr: 'صحت اور طبی سہولیات', url: '/health' },
    { nameEn: 'Sehat Card Hospital List Lahore (2026)', nameUr: 'صحت کارڈ ہسپتال لسٹ لاہور 2026' },
  ];

  const hospitalSteps = [
    {
      number: 1,
      icon: <Hospital className="w-5 h-5" />,
      titleEn: 'Check Live List on PHIMC',
      titleUr: 'پورٹل پر ہسپتال کا سٹیٹس چیک کریں',
      descEn: 'Verify if your target hospital is actively accepting patients via phimc.punjab.gov.pk or helpline 0800-09009.',
      descUr: 'پورٹل یا ہیلپ لائن سے تصدیق کریں کہ ہسپتال پینل پر فعال ہے۔',
      tagEn: 'Live Verification',
      tagUr: 'آن لائن تصدیق',
    },
    {
      number: 2,
      icon: <CreditCard className="w-5 h-5" />,
      titleEn: 'Bring Original CNIC / B-Form',
      titleUr: 'اصل شناختی کارڈ یا ب فارم لائیں',
      descEn: 'Your Smart CNIC serves as your physical card; bring original B-Forms for children under 18.',
      descUr: 'اصل سمارٹ شناختی کارڈ ہی آپ کا صحت کارڈ ہے، بچوں کا ب فارم لائیں۔',
      tagEn: 'Identity Proof',
      tagUr: 'شناختی دستاویز',
    },
    {
      number: 3,
      icon: <Building2 className="w-5 h-5" />,
      titleEn: 'Report to Sehat Sahulat Desk',
      titleUr: 'ہسپتال میں صحت سہولت کاؤنٹر جائیں',
      descEn: 'Visit the dedicated hospital SSP counter for instant biometric verification and admission token.',
      descUr: 'ہسپتال کے اندر مخصوص کاؤنٹر سے بائیومیٹرک تصدیق کروائیں۔',
      tagEn: 'Counter Token',
      tagUr: 'ٹوکن کاؤنٹر',
    },
    {
      number: 4,
      icon: <HeartPulse className="w-5 h-5" />,
      titleEn: '100% Cashless Treatment',
      titleUr: 'مفت علاج اور ادویات کی وصولی',
      descEn: 'Undergo approved inpatient surgery or treatment with zero out-of-pocket charges up to Rs. 1M/family.',
      descUr: '10 لاکھ روپے سالانہ حد تک بالکل مفت داخلہ اور آپریشن۔',
      tagEn: 'Cashless Care',
      tagUr: 'کیش لیس علاج',
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
            <InteractiveToolBadge labelEn="PUNJAB PHIMC DIRECTORY" labelUr="پنجاب ہیلتھ کیئر پینل" variant="navy" />
            <VerifiedBadge textEn="EMPANELLED HOSPITALS 2026" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Sehat Card Hospital List Lahore 2026: Panel Hospitals
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              صحت کارڈ ہسپتال لسٹ لاہور: سرکاری و نجی ہسپتال، پینل لسٹ اور کیش لیس علاج
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Looking for hospitals in Lahore that accept the Sehat Sahulat Card? Here is the verified list of participating government teaching hospitals and private healthcare centers, along with cashless admission rules and Rs. 1,000,000 family coverage limits.
          </p>
        </header>

        {/* Distinct Feature Banner */}
        <div className="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 text-xs font-sans space-y-2">
          <div className="flex items-center gap-2 font-bold text-doc-ink dark:text-blue-300 text-sm">
            <Shield className="w-4 h-4 text-doc-seal" />
            <span>Finding a Hospital vs. Checking Card Eligibility</span>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong>This page is specifically for locating hospitals in Lahore that accept the Sehat Card.</strong> If you haven&apos;t verified whether your family is eligible or want to check province-wide program status, use our other dedicated guides:
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/welfare/sehat-card-eligibility-checker-2026"
              className="font-bold text-doc-seal hover:text-doc-brass transition underline text-xs"
            >
              Check Sehat Card Eligibility by CNIC (8500 SMS) →
            </Link>
            <span className="text-slate-300 dark:text-slate-600">|</span>
            <Link
              href="/health/sehat-card-active-status-by-province-2026"
              className="font-bold text-doc-seal hover:text-doc-brass transition underline text-xs"
            >
              Sehat Card Active Status by Province (Punjab/KP/Sindh) →
            </Link>
          </div>
        </div>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="Which Hospitals in Lahore Accept the Sehat Card?"
          topicTitleUr="لاہور کے کون سے ہسپتالوں میں صحت کارڈ چلتا ہے؟"
          answerEn="To find verified hospitals in Lahore accepting the Sehat Card, check the live official directory on phimc.punjab.gov.pk or call helpline 0800-09009. Major government teaching hospitals (Mayo, Jinnah, Services, LGH) and participating private hospitals accept the card for cashless inpatient admissions and surgeries up to Rs. 1,000,000 per family/year."
          answerUr="لاہور میں صحت کارڈ قبول کرنے والے ہسپتالوں کی تازہ ترین فہرست پی ایچ آئی ایم سی پورٹل (phimc.punjab.gov.pk) یا ہیلپ لائن 0800-09009 سے حاصل کی جا سکتی ہے۔ تمام بڑے سرکاری ہسپتال (میو، جناح، سروسز، جنرل) اور پینل پر موجود نجی ہسپتال 10 لاکھ روپے تک سالانہ کیش لیس علاج فراہم کرتے ہیں۔"
        />

        {/* Conversational Advice on Dynamic Lists */}
        <section className="p-6 rounded-2xl bg-amber-50/70 dark:bg-slate-900/80 border border-amber-200/80 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-doc-seal dark:text-amber-400 font-serif font-bold text-lg">
            <HeartPulse className="w-5 h-5 shrink-0" />
            <h2>Important Rule: Always Verify Before Visiting a Private Hospital</h2>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Here is a realistic piece of advice from experience: <strong>hospital panels are not permanently carved in stone</strong>. Private hospitals frequently negotiate billing quotas with State Life and PHIMC, meaning a private clinic active on the panel last month might temporarily suspend new non-emergency admissions this week.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            To avoid disappointment or unexpected hospital bills, always use the 2-minute verification method: check the official PHIMC portal or make a quick phone call to the hospital&apos;s Sehat Sahulat counter before traveling.
          </p>
        </section>

        {/* Section 1: Representative Major Hospitals in Lahore */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Hospital className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Major Empanelled Hospitals in Lahore (Representative Examples)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            {/* Government Teaching Hospitals */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-mono font-bold text-[11px]">
                GOVERNMENT TEACHING HOSPITALS (PERMANENT DESKS)
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Public Sector Tertiary Care Institutions
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Government teaching hospitals maintain permanent 24/7 Sehat Sahulat facilitation desks for all clinical departments:
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Mayo Hospital</strong> (Hospital Road, Anarkali) — Comprehensive surgeries, oncology, trauma.</li>
                <li><strong>Jinnah Hospital</strong> (Faisal Town) — Cardiology, general surgery, maternity, pediatrics.</li>
                <li><strong>Lahore General Hospital (LGH)</strong> (Ferozepur Road) — Neurosurgery, orthopedics, emergency care.</li>
                <li><strong>Services Hospital</strong> (Jail Road) — Internal medicine, endocrinology, general surgery.</li>
                <li><strong>Sir Ganga Ram Hospital</strong> (Queen&apos;s Road) — Gynecology, obstetrics, pediatrics.</li>
                <li><strong>Shaikh Zayed Hospital</strong> (Muslim Town) — Nephrology, kidney transplant, liver care.</li>
                <li><strong>Punjab Institute of Cardiology (PIC)</strong> (Jail Road) — Cardiac bypass, angioplasty, stents.</li>
              </ul>
            </div>

            {/* Private Empanelled Hospitals */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 font-mono font-bold text-[11px]">
                PRIVATE EMPANELLED HOSPITALS (VERIFY STATUS FIRST)
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Participating Private Health Networks
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                These major private institutions have historically participated in the panel (always confirm active quota before admission):
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Doctors Hospital &amp; Medical Center</strong> (Johar Town) — Specialized surgeries, ICU care.</li>
                <li><strong>Hameed Latif Hospital</strong> (New Garden Town) — Maternal care, neonatal ICU, laparoscopy.</li>
                <li><strong>Fatima Memorial Hospital (FMH)</strong> (Shadman) — General medicine, pediatrics, rheumatology.</li>
                <li><strong>Ittefaq Hospital (Trust)</strong> (Model Town) — General surgery, cardiology, orthopedic care.</li>
                <li><strong>Farooq Hospital</strong> (West Wood / Allama Iqbal Town branches) — Dialysis, general inpatient care.</li>
                <li><strong>National Hospital &amp; Medical Centre</strong> (DHA Phase 1) — Neurosurgery, critical care.</li>
                <li><strong>Surgimed Hospital</strong> (Gulberg II) — ENT, ophthalmology, general surgical procedures.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Flow Diagram */}
        <StepFlowDiagram
          titleEn="Step-by-Step Sehat Card Admission Procedure"
          titleUr="ہسپتال داخلے اور کیش لیس علاج کے 4 مراحل"
          subtitleEn="How to verify panel status and access cashless hospital treatment"
          subtitleUr="پی ایچ آئی ایم سی پورٹل سے تصدیق اور کاؤنٹر سے منظوری کا طریقہ"
          steps={hospitalSteps}
        />

        {/* Section 3: Inpatient Coverage vs OPD Exclusion */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              What Is Covered vs. What Is Excluded (Inpatient vs. OPD)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 space-y-3">
              <span className="font-mono font-bold text-emerald-800 dark:text-emerald-300 uppercase text-xs block">
                ✓ FULLY COVERED (INPATIENT &amp; DAY-CARE PROCEDURES)
              </span>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Hospitalization &amp; Bed Charges:</strong> General ward and semi-private room charges during indoor admission.</li>
                <li><strong>Major &amp; Minor Surgeries:</strong> Appendectomy, gallbladder removal (laparoscopic), hernia, fractures, and bypass surgery.</li>
                <li><strong>Maternity Care:</strong> Normal delivery, C-section operations, and post-natal infant care.</li>
                <li><strong>Critical Illnesses:</strong> Cancer chemotherapy, kidney dialysis, neurosurgery, and cardiovascular stents.</li>
                <li><strong>In-Hospital Diagnostics:</strong> MRI, CT scans, blood tests, and ultrasound done during admission.</li>
                <li><strong>Post-Discharge Medicines:</strong> Prescribed essential medicines for up to 5–7 days following discharge.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 space-y-3">
              <span className="font-mono font-bold text-rose-800 dark:text-rose-300 uppercase text-xs block">
                ✗ STRICTLY NOT COVERED (OUTPATIENT &amp; ELECTIVE)
              </span>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Outpatient (OPD) Visits:</strong> Routine walk-in clinic doctor consultations without 24-hour admission.</li>
                <li><strong>Daily Retail Pharmacy:</strong> Routine walk-in prescriptions bought from commercial medical stores.</li>
                <li><strong>Cosmetic &amp; Aesthetic Procedures:</strong> Plastic surgery, teeth whitening, hair transplants.</li>
                <li><strong>Routine Dental &amp; Vision Checkups:</strong> Eye checkups for spectacles and dental scaling/fillings.</li>
                <li><strong>Non-Empanelled Clinics:</strong> Any treatment received at private clinics not officially on the PHIMC panel.</li>
              </ul>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 4: How to Check Live PHIMC List */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <PhoneCall className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              How to Check the Official Live Hospital Directory
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Use these 3 official government channels to verify the exact status of any hospital before traveling:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">1. PHIMC Web Portal</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Visit <code>phimc.punjab.gov.pk</code>, select &quot;Empanelled Hospitals&quot;, and filter by District &quot;Lahore&quot;.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">2. Toll-Free Helpline</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Call the toll-free helpline at <strong>0800-09009</strong> to speak with a representative regarding active panel facilities.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">3. State Life Sehat App</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Download the <em>&quot;Sehat Sahulat App&quot;</em> on Android/iOS to locate nearby empanelled hospitals with real-time GPS maps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step Hospital Admission & Sehat Card Treatment Flow"
          titleUr="صحت کارڈ کے ذریعے ہسپتال میں داخلے اور مفت علاج کا طریقہ کار"
          subtitleEn="4-stage verified sequence from eligibility verification to 100% cashless discharge"
          subtitleUr="8500 میسج سے لے کر 10 لاکھ روپے تک کے مفت انڈور علاج تک کے 4 مراحل"
          steps={[
            {
              number: 1,
              titleEn: "Verify Eligibility (8500 SMS)",
              titleUr: "8500 میسج سے اہلیت چیک کریں",
              descEn: "Send 13-digit CNIC to 8500 SMS to verify family head entitlement and active health insurance quota.",
              descUr: "شناختی کارڈ نمبر 8500 پر بھیج کر اپنے خاندان کی اہلیت اور فعال کوٹہ معلوم کریں۔",
              tagEn: "SMS 8500",
              tagUr: "اہلیت چیک",
            },
            {
              number: 2,
              titleEn: "Choose Empaneled Hospital",
              titleUr: "پینل ہسپتال کا انتخاب",
              descEn: "Select from Lahore's major public teaching hospitals (Mayo, Jinnah, Services) or verified private panel facilities.",
              descUr: "لاہور کے سرکاری تدریسی یا منظور شدہ نجی پینل ہسپتالوں میں سے قریبی ہسپتال کا انتخاب کریں۔",
              tagEn: "Panel List",
              tagUr: "ہسپتال لسٹ",
            },
            {
              number: 3,
              titleEn: "Visit Sehat Sahulat Counter",
              titleUr: "صحت سہولت کاؤنٹر پر اندراج",
              descEn: "Present patient original CNIC (or B-Form for minors) at the dedicated hospital reception desk for biometric admission.",
              descUr: "ہسپتال کے مخصوص صحت کاؤنٹر پر اصل شناختی کارڈ یا بچوں کا ب فارم پیش کر کے انٹری کروائیں۔",
              tagEn: "CNIC Desk",
              tagUr: "کاؤنٹر",
            },
            {
              number: 4,
              titleEn: "100% Cashless Treatment",
              titleUr: "مکمل مفت انڈور علاج",
              descEn: "Receive free indoor surgeries, diagnostic tests, hospital stay, and discharge medications up to PKR 1,000,000/year.",
              descUr: "آپریشن، ادویات، ٹیسٹ اور داخلے کے تمام اخراجات حکومت کے فنڈ سے خودکار ادا ہوں گے۔",
              tagEn: "Free Inpatient",
              tagUr: "مفت علاج",
            },
          ]}
        />

        {/* Section 5: Frequently Asked Questions */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Sehat Card Lahore Usage)"
          titleUr="صحت کارڈ لاہور کے استعمال سے متعلق عام سوالات"
          subtitleEn="Essential guidelines on hospital lists, panel suspensions, OPD coverage, and CNIC as card"
          subtitleUr="پینل ہسپتالوں، او پی ڈی کوریج اور اصل شناختی کارڈ کے استعمال کی مکمل تفصیل"
          items={[
            {
              questionEn: "Is the hospital list on this page complete and guaranteed current?",
              questionUr: "کیا اس صفحے پر دی گئی ہسپتالوں کی فہرست حتمی اور تازہ ترین ہے؟",
              answerEn: "No list on any third-party website can guarantee 100% real-time accuracy because hospital contracts are audited and updated periodically by the Punjab government. We list the most well-known, established institutions, but you should always check the live database at phimc.punjab.gov.pk before admission.",
              answerUr: "پنجاب ہیلتھ انیشی ایٹو مینجمنٹ کمپنی وقتاً فوقتاً پینل ہسپتالوں کا جائزہ لیتی ہے۔ داخلے سے قبل ہمیشہ آفیشل پورٹل phimc.punjab.gov.pk پر لائیو فہرست ضرور دیکھیں۔",
            },
            {
              questionEn: "What if my chosen hospital says it is no longer on the Sehat panel?",
              questionUr: "اگر نجی ہسپتال میں صحت کارڈ کی سہولت عارضی بند ہو تو کیا کریں؟",
              answerEn: "If a private hospital has temporarily suspended its panel operations, you can visit any of Lahore's major public teaching hospitals (such as Mayo, Jinnah, Services, or Lahore General Hospital), where Sehat Sahulat facilitation desks operate around the clock without interruption.",
              answerUr: "نجی ہسپتال میں رکاوٹ کی صورت میں لاہور کے بڑے سرکاری ہسپتالوں (میو، جناح، سروسز یا جنرل ہسپتال) تشریف لے جائیں جہاں صحت کاؤنٹرز 24 گھنٹے فعال رہتے ہیں۔",
            },
            {
              questionEn: "Does OPD get covered under the Sehat Card at all?",
              questionUr: "کیا او پی ڈی اور عام چیک اپ صحت کارڈ میں شامل ہے؟",
              answerEn: "No. OPD consultations and routine walk-in doctor checkups are not covered under the Sehat Sahulat Program. Coverage begins when a patient is formally admitted as an indoor patient (inpatient) or requires designated day-care procedures like chemotherapy or hemodialysis.",
              answerUr: "نہیں، صحت کارڈ صرف ہسپتال میں باقاعدہ داخلے (انڈور مریض) یا مخصوص اہم طریقہ علاج جیسے ڈائلیسز اور کیموتھراپی کے لیے لاگو ہوتا ہے۔",
            },
            {
              questionEn: "Do I need a separate plastic Sehat Card to get admitted?",
              questionUr: "کیا علاج کے لیے کوئی الگ پلاسٹک کارڈ درکار ہوتا ہے؟",
              answerEn: "No separate plastic card is required. In Punjab, your original NADRA Computerized National Identity Card (CNIC) serves as your digital Sehat Card. For children under 18, their NADRA B-Form along with the parent's CNIC is used.",
              answerUr: "کسی الگ کارڈ کی ضرورت نہیں ہے۔ آپ کا اصل نادرا شناختی کارڈ ہی ڈیجیٹل صحت کارڈ کے طور پر کام کرتا ہے، اور بچوں کے لیے ب فارم استعمال ہوتا ہے۔",
            },
          ]}
        />

        {/* Section 6: Related Links */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Health &amp; Welfare Utilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/welfare/sehat-card-eligibility-checker-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Eligibility Check</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Sehat Card Eligibility Checker 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                SMS 8500 verification, PMT score cutoffs, and family record sync.
              </p>
            </Link>

            <Link
              href="/health/sehat-card-active-status-by-province-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-seal font-bold uppercase block">Provincial Status</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Sehat Card Status by Province
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Active coverage in Punjab, KP, Sindh, Balochistan &amp; Islamabad.
              </p>
            </Link>

            <Link
              href="/health/disability-certificate-special-cnic-apply-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-emerald-600 font-bold uppercase block">Special Healthcare</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Disability Medical Certificate Guide
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Medical board evaluation, wheelchair logo CNIC, and benefits.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
