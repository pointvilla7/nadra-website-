import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  ProcessStepsDiagram,
  ComparisonVisual,
  FAQAccordionVisual,
} from '@/components/visuals';
import {
  ShieldCheck,
  Building,
  FileCheck,
  Clock,
  Search,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Scale,
  ExternalLink,
  MapPin,
  FileText,
  UserCheck,
  Car,
  HeartPulse,
  PhoneCall,
  Smartphone,
  Globe,
  HelpCircle,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Police Khidmat Markaz (PKM) Services Hub Guide 2026 – 14 Public Services & Tracking | Pakistan Info Hub',
  description:
    'Complete 2026 guide to Punjab Police Khidmat Markaz (PKM): 14 citizen services, Integrated Khidmat Markaz cross-district access, hospital Medico-Legal Counters, online tracking via pkm.punjab.gov.pk, and provincial facilitation centers.',
  keywords: [
    'police khidmat markaz services guide 2026',
    'pkm punjab gov pk online tracking',
    'police khidmat markaz character certificate',
    'integrated khidmat markaz system cross district',
    'medico legal certificate dhq hospital pkm counter',
    'tenant verification police khidmat markaz',
    'fir copy police khidmat markaz punjab',
    'police khidmat markaz timings rawalpindi lahore faisalabad',
  ],
  openGraph: {
    title: 'Police Khidmat Markaz (PKM) Services Hub Guide 2026 – Punjab Police & PITB',
    description:
      'Everything you need to know about Police Khidmat Markaz: 14 public services, any-district access, hospital MLC counters, and tracking.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/legal/police-khidmat-markaz-services-guide-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/legal/police-khidmat-markaz-services-guide-2026',
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
          name: 'Police Khidmat Markaz (PKM) Services Hub Guide 2026',
          item: 'https://www.pakistaninfohub.com/legal/police-khidmat-markaz-services-guide-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Police Khidmat Markaz (PKM) Services Hub Guide 2026: 14 Public Facilitations, Any-District Access & Tracking',
      description:
        'Authoritative public facilitation manual explaining the Integrated Police Khidmat Markaz system developed by Punjab Police and PITB, hospital-based Medico Legal counters, and online tracking workflows.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-30',
      dateModified: '2026-08-30',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/legal/police-khidmat-markaz-services-guide-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I have to visit a Police Khidmat Markaz in my home district where my CNIC address is registered?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Under the upgraded Integrated Khidmat Markaz System developed by PITB and Punjab Police, all 36 district centers are digitally unified. You can apply for Police Character Certificates, driving learner permits/renewals, tenant verifications, and FIR copies at ANY PKM center in Punjab regardless of whether your CNIC is from Lahore, Rawalpindi, Multan, or another district.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I file a formal complaint against police officer misconduct or corruption at a Police Khidmat Markaz?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every PKM center has a dedicated public complaint registration desk connected to the IGP Complaint Cell 1787. You can lodge complaints regarding non-registration of FIRs, illegal detentions, police misbehavior, or faulty investigations with an official computerized tracking number.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the standard operating timings of Police Khidmat Markaz centers across Punjab?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standard district PKM centers operate Monday through Saturday from 9:00 AM to 5:00 PM (with a Friday prayer break). Additionally, flagship Mega PKM Centers in major cities (such as Lahore Gulberg / Liberty, Rawalpindi Mall Road, and Multan) operate 24/7 or in two extended shifts (8:00 AM to 10:00 PM).',
          },
        },
        {
          '@type': 'Question',
          name: 'How is a Police Khidmat Markaz different from a traditional police station (Thana)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A PKM is a modern, civilian-friendly digital facilitation hub equipped with electronic queue tokens, air-conditioned waiting halls, and PITB data counters focused exclusively on public document issuance and verifications. Unlike a traditional police station (Thana), PKMs do not hold lockups, execute arrests, or conduct custodial interrogations.',
          },
        },
      ],
    },
  ],
};

export default function PoliceKhidmatMarkazHubPage() {
  const breadcrumbs = [
    { nameEn: 'Police & Legal Services', nameUr: 'پولیس و قانونی خدمات', url: '/legal' },
    { nameEn: 'Police Khidmat Markaz Hub 2026', nameUr: 'پولیس خدمت مرکز گائیڈ' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn max-w-5xl mx-auto">
        <Breadcrumbs items={breadcrumbs} />

        {/* Page Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="CIVIC FACILITATION HUB" labelUr="عوامی سہولت مرکز" variant="navy" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Police Khidmat Markaz (PKM) Services Hub 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پولیس خدمت مرکز پنجاب – 14 عوامی خدمات، طریقہ کار و آن لائن ٹریکنگ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Authoritative guide to Punjab Police's digitized facilitation network developed with the Punjab Information Technology Board (PITB). Understand what services PKM provides, how the any-district integrated system works, hospital Medico-Legal counters, and how to route your request to the right portal.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is Police Khidmat Markaz & Where Should You Go?"
          topicTitleUr="پولیس خدمت مرکز کیا ہے اور آپ کو کہاں جانا چاہیے؟"
          answerEn="Police Khidmat Markaz (PKM) is Punjab Police's centralized, computer-automated citizen facilitation center system active across all 36 districts of Punjab. Developed in partnership with PITB, it provides 14 core civil services (including Police Character Certificates, Tenant & Domestic Staff Verification, Certified FIR Copies, Driving Learner & Renewal, and Loss Reports) in a dignified, non-thana environment with automated token queuing. Crucially, under the Integrated Khidmat Markaz System, you do NOT need to visit your home district—any PKM in Punjab can process your application regardless of your CNIC domicile. You can track your application status anytime on pkm.punjab.gov.pk using your e-receipt number or CNIC."
          answerUr="پولیس خدمت مرکز (PKM) پنجاب پولیس اور پی آئی ٹی بی کا جدید ترین کمپیوٹرائزڈ عوامی سہولت نیٹ ورک ہے جو پنجاب کے تمام 36 اضلاع میں فعال ہے۔ یہ روایتی تھانے کے بجائے ایک پرسکون ماحول میں 14 اہم خدمات (جیسے پولیس کریکٹر سرٹیفکیٹ، کرایہ دار تصدیق، مصدقہ ایف آئی آر کاپی اور ڈرائیونگ لائسنس) فراہم کرتا ہے۔ 'انٹیگریٹڈ سسٹم' کے تحت آپ اپنے آبائی ضلع کے بجائے پنجاب کے کسی بھی خدمت مرکز پر جا کر سروس حاصل کر سکتے ہیں۔ آپ اپنی درخواست کا سٹیٹس pkm.punjab.gov.pk پر ای-رسید نمبر کے ذریعے ٹریک کر سکتے ہیں۔"
        />

        {/* 14 Core Services Directory Grid (Cross-Linking to Detailed Guides) */}
        <section className="space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-doc-seal dark:text-doc-brass text-xs font-mono font-bold uppercase tracking-wider">
              <Building className="w-4 h-4" />
              <span>Public Service Directory</span>
            </div>
            <h2 className="text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
              Complete Directory of 14 Services Available at PKM
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Select any core service below to open our complete, step-by-step verification and requirements guide:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Service 1: Character Certificate */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-doc-brass transition flex flex-col justify-between space-y-3 group">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                    01
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                    Overseas &amp; Visa
                  </span>
                </div>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                  Police Character Certificate (PCC)
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Official clearance certificate required for foreign immigration, overseas study, employment visas, and government jobs. Issued within 3 working days with QR code authentication.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <Link
                  href="/certificates/police-character-certificate-online-apply-2026"
                  className="text-xs font-bold text-doc-seal dark:text-doc-brass hover:underline flex items-center gap-1"
                >
                  <span>Step-by-Step PCC Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <Link
                  href="/certificates/police-character-certificate-tracking-status-2026"
                  className="text-[11px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  Track Status →
                </Link>
              </div>
            </div>

            {/* Service 2: Tenant Verification */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-doc-brass transition flex flex-col justify-between space-y-3 group">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
                    02
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded">
                    Mandatory Tenancy
                  </span>
                </div>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                  Tenant Registration &amp; Police Verification
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Statutory registration of tenants and property owners under the Punjab Information of Temporary Residents Act to avoid legal penalties and Section 188 charges.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <Link
                  href="/legal/tenant-police-verification-online-2026"
                  className="text-xs font-bold text-doc-seal dark:text-doc-brass hover:underline flex items-center gap-1"
                >
                  <span>Tenant Verification Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Service 3: Certified Copy of FIR */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-doc-brass transition flex flex-col justify-between space-y-3 group">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 flex items-center justify-center font-bold text-xs">
                    03
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded">
                    Court &amp; Legal Copy
                  </span>
                </div>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                  Copy of FIR (First Information Report)
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Certified official computerized copy of registered FIRs provided to victims, complainants, or legal representatives without needing to deal with Thana Moharrir delays.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <Link
                  href="/legal/how-to-get-fir-copy-online-pakistan-2026"
                  className="text-xs font-bold text-doc-seal dark:text-doc-brass hover:underline flex items-center gap-1"
                >
                  <span>How to Get Certified FIR Copy</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Service 4: Driving License & Learner Permit */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-doc-brass transition flex flex-col justify-between space-y-3 group">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 flex items-center justify-center font-bold text-xs">
                    04
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded">
                    DLIMS System
                  </span>
                </div>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                  Driving License Renewal &amp; Learner Permit
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Instant issuance of learner driving permits, computerized test token processing, regular driving license renewal, and International Driving Permit (IDP) processing.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <Link
                  href="/traffic/driving-license-online-apply-renewal-dlims-2026"
                  className="text-xs font-bold text-doc-seal dark:text-doc-brass hover:underline flex items-center gap-1"
                >
                  <span>DLIMS License Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Service 5: Loss/Stolen Report (Rapat) */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-doc-brass transition flex flex-col justify-between space-y-3 group">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 flex items-center justify-center font-bold text-xs">
                    05
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded">
                    Instant Rapat
                  </span>
                </div>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                  Loss Report of CNIC, Passport or Documents
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Instant computerized Daily Diary (Roznamcha) entry and stamped loss certificate required by NADRA, Passport Office, or educational boards for duplicate re-issuance.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <Link
                  href="/nadra/lost-stolen-cnic-replacement-2026"
                  className="text-xs font-bold text-doc-seal dark:text-doc-brass hover:underline flex items-center gap-1"
                >
                  <span>Lost CNIC Replacement Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Service 6: Domestic Staff & Employee Verification */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-doc-brass transition flex flex-col justify-between space-y-3 group">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-400 flex items-center justify-center font-bold text-xs">
                    06
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded">
                    Security Screen
                  </span>
                </div>
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white group-hover:text-doc-seal transition">
                  Domestic Employee &amp; Driver Police Verification
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Criminal background screening and biometric registration for housemaids, cooks, private drivers, security guards, and corporate workers across Punjab police databases.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500">Free biometric counter service at all PKMs</span>
              </div>
            </div>
          </div>

          {/* Remaining Core Services Quick Reference List */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
            <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white uppercase tracking-wider">
              Additional Public Services Handled at PKM Counters:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs text-slate-700 dark:text-slate-300 font-sans">
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <strong className="block text-doc-ink dark:text-white">07. Crime Reporting</strong>
                Immediate electronic receipt for non-cognizable reports.
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <strong className="block text-doc-ink dark:text-white">08. Police Misconduct Complaints</strong>
                Direct routing to IGP 1787 complaint monitoring unit.
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <strong className="block text-doc-ink dark:text-white">09. Stolen Vehicle Verification</strong>
                Clearance check against Anti-Car Lifting Cell (ACLC) database.
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <strong className="block text-doc-ink dark:text-white">10. Medico-Legal Certificates</strong>
                Dedicated police counters inside DHQ hospitals for injury cases.
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <strong className="block text-doc-ink dark:text-white">11. Women Protection Desks</strong>
                Confidential assistance for domestic violence &amp; harassment.
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <strong className="block text-doc-ink dark:text-white">12. National Status Verification</strong>
                Verification reports for security clearance and citizenship status.
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <strong className="block text-doc-ink dark:text-white">13. Legal Heir Verification</strong>
                Police verification assisting NADRA succession certificates.
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <strong className="block text-doc-ink dark:text-white">14. PKM Global for Overseas</strong>
                Remote verification through Pakistani Embassies in 40+ countries.
              </div>
            </div>
          </div>
        </section>

        {/* Process Diagram: How to Apply & Track */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step PKM Visit & Online Tracking Workflow"
          titleUr="پولیس خدمت مرکز جانے اور درخواست ٹریک کرنے کا طریقہ"
          subtitleEn="From automated token issuance to biometric submission and pkm.punjab.gov.pk tracking"
          subtitleUr="ٹوکن کے حصول سے لے کر بائیومیٹرک اندراج اور آن لائن سٹیٹس چیک کرنے تک"
          steps={[
            {
              number: 1,
              titleEn: "Visit Any PKM in Punjab",
              titleUr: "کسی بھی قریبی خدمت مرکز تشریف لے جائیں",
              descEn: "Under the Integrated Khidmat Markaz System, visit any PKM center in Punjab regardless of your CNIC permanent address. No appointment booking is required.",
              descUr: "انٹیگریٹڈ سسٹم کے تحت اپنے قریبی کسی بھی خدمت مرکز جائیں، پیشگی اپوائنٹمنٹ کی ضرورت نہیں۔",
              tagEn: "Walk-In Token",
              tagUr: "ٹوکن حاصل کریں",
            },
            {
              number: 2,
              titleEn: "Biometric & Document Submission",
              titleUr: "بائیومیٹرک اور ضروری کاغذات جمع کروائیں",
              descEn: "When your electronic token is called, present your original CNIC, passport-size photographs, and relevant documents. Digital fingerprints and live photo are captured on spot.",
              descUr: "اصل شناختی کارڈ اور ضروری دستاویزات کاؤنٹر پر پیش کریں، جہاں فنگر پرنٹ اور تصویر موقع پر لی جاتی ہے۔",
              tagEn: "Desk Processing",
              tagUr: "کاؤنٹر پراسیسنگ",
            },
            {
              number: 3,
              titleEn: "Receive Computerized e-Receipt",
              titleUr: "کمپیوٹرائزڈ ای-رسید حاصل کریں",
              descEn: "Pay nominal official fee (if applicable) and collect your stamped e-Receipt containing a unique 10-digit Tracking ID and delivery timeline.",
              descUr: "سرکاری فیس ادا کر کے ای-رسید حاصل کریں جس پر منفرد ٹریکنگ نمبر اور تاریخ درج ہوتی ہے۔",
              tagEn: "e-Receipt ID",
              tagUr: "ٹریکنگ رسید",
            },
            {
              number: 4,
              titleEn: "Track Online on pkm.punjab.gov.pk",
              titleUr: "پورٹل پر آن لائن سٹیٹس چیک کریں",
              descEn: "Visit pkm.punjab.gov.pk, enter your CNIC or Tracking ID to check clearance stages. Receive automated SMS when your certificate is ready for collection.",
              descUr: "پورٹل پر ٹریکنگ نمبر درج کریں یا موبائل پر ایس ایم ایس وصول ہونے پر تصدیقی سرٹیفکیٹ وصول کریں۔",
              tagEn: "Online Tracking",
              tagUr: "آن لائن ٹریکنگ",
            },
          ]}
        />

        {/* Section: Hospital Medico-Legal Counters (MLC) */}
        <section className="p-6 sm:p-8 rounded-3xl bg-blue-50/70 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-900/60 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-400 flex items-center justify-center text-blue-700 dark:text-blue-300 shrink-0">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-blue-800 dark:text-blue-400">
                Hospital Facilitation Feature
              </span>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-doc-ink dark:text-white">
                Police Khidmat Counters at DHQ Hospitals (Medico-Legal Certificates)
              </h2>
            </div>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Historically, an injured victim of physical assault, road accident, or domestic violence had to first visit a local police station (Thana) to obtain a physical Police Docket before government hospital doctors would perform an examination and issue a <strong>Medico-Legal Certificate (MLC)</strong>.
          </p>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-blue-200/80 dark:border-blue-900/40 space-y-2">
            <div className="flex items-center gap-2 text-blue-900 dark:text-blue-300 font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>How the DHQ Hospital Police Counter Works (No Thana Visit Required)</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Punjab Police has stationed automated <strong>Police Khidmat Counters directly inside all District Headquarters (DHQ) and major Teaching Hospitals</strong>. The victim or attendants can approach the hospital counter directly. The police staff registers the incident electronically in the PITB portal and issues the medical docket immediately to the attending Doctor/Medial Officer on duty.
            </p>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section: PKM vs Thana Comparison & Other Provincial Equivalents */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
              Police Facilitation Systems Across Pakistan
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              How Punjab PKM compares with Islamabad, Balochistan, and Sindh public facilitation counters:
            </p>
          </div>

          <ComparisonVisual
            titleEn="Police Public Facilitation Systems Comparison"
            titleUr="پنجاب پولیس خدمت مرکز اور دیگر صوبائی ماڈلز کا تقابلی جائزہ"
            subtitleEn="Civilian-friendly portals, mobile vans, and provincial coverage"
            subtitleUr="عوامی مراکز، موبائل وین سروس اور صوبائی دائرہ کار"
            items={[
              {
                titleEn: "Punjab Police Khidmat Markaz (PKM)",
                titleUr: "پنجاب پولیس خدمت مرکز (پی کے ایم)",
                subtitleEn: "All 36 Districts of Punjab + PITB",
                subtitleUr: "پنجاب کے 36 اضلاع اور ہسپتال",
                badgeEn: "Fully Integrated",
                badgeUr: "مکمل انٹیگریٹڈ",
                badgeVariant: "emerald",
                isPopular: true,
                pointsEn: [
                  "Unified across 36 districts: visit any center regardless of CNIC domicile.",
                  "Hospital Medico-Legal Counters inside all DHQs.",
                  "24/7 Mega centers in major metropolitan cities.",
                ],
                features: [
                  { labelEn: "Online Tracking", valueEn: "pkm.punjab.gov.pk" },
                  { labelEn: "Complaints Helpline", valueEn: "IGP 1787 Helpline" },
                  { labelEn: "Overseas Support", valueEn: "PKM Global Portal" },
                ],
                recommendedForEn: "All Punjab residents, overseas Pakistanis, and domestic workers.",
              },
              {
                titleEn: "Islamabad Mobile Khidmat Markaz",
                titleUr: "اسلام آباد پولیس سہولت مراکز و موبائل وین",
                subtitleEn: "Islamabad Capital Territory (ICT)",
                subtitleUr: "اسلام آباد کیپیٹل ٹیریٹری",
                badgeEn: "Mobile & Static",
                badgeUr: "سہولت وین",
                badgeVariant: "brass",
                pointsEn: [
                  "Flagship facilitation centers at F-6 and traffic headquarters.",
                  "State-of-the-art Mobile Khidmat Vans visiting sectors and universities.",
                  "Integrated driving licenses, tenant registration, and character verification.",
                ],
                features: [
                  { labelEn: "Online Portal", valueEn: "islamabadpolice.gov.pk" },
                  { labelEn: "Helpline", valueEn: "ICT Police 15 / 1715" },
                  { labelEn: "Mobile Vans", valueEn: "Sector-wise Schedule" },
                ],
                recommendedForEn: "Islamabad Capital Territory residents and federal employees.",
              },
              {
                titleEn: "Balochistan & Sindh Police Centers",
                titleUr: "بلوچستان و سندھ پولیس پبلک فیسیلیٹیشن",
                subtitleEn: "Quetta, Karachi & Divisional Centers",
                subtitleUr: "کوئٹہ، کراچی اور ڈویژنل دفاتر",
                badgeEn: "Provincial Desks",
                badgeUr: "صوبائی ڈیسک",
                badgeVariant: "navy",
                pointsEn: [
                  "Balochistan: Police Facilitation Centers in Quetta and major districts.",
                  "Sindh: Specialized CPLC (Citizens-Police Liaison Committee) & Facilitation Desks.",
                  "Character certificate and driving license verification facilities.",
                ],
                features: [
                  { labelEn: "Sindh System", valueEn: "CPLC / Sindh Police Portal" },
                  { labelEn: "Balochistan Center", valueEn: "PFC Quetta / DPO Offices" },
                  { labelEn: "Core Focus", valueEn: "Clearance & Tenancy" },
                ],
                recommendedForEn: "Residents of Sindh and Balochistan provinces seeking police verifications.",
              },
            ]}
          />
        </section>

        {/* Section: Operating Hours & Official Access */}
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-4">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-doc-brass" />
            <span>Operating Timings, Tracking Portal &amp; Emergency Helplines</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase block">
                Standard District Centers
              </span>
              <p className="text-xs font-bold text-doc-ink dark:text-white">Monday to Saturday</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">9:00 AM to 5:00 PM (Standard Hours)</p>
              <p className="text-[11px] text-slate-400 pt-1">Friday Prayer Break: 1:00 PM - 2:00 PM</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="text-[11px] font-mono font-bold text-doc-brass uppercase block">
                Mega City Centers (Lahore/RWP)
              </span>
              <p className="text-xs font-bold text-doc-ink dark:text-white">24/7 or Double Shift</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">8:00 AM to 10:00 PM / 24 Hours</p>
              <p className="text-[11px] text-slate-400 pt-1">Gulberg Lahore, Mall Road Rawalpindi</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="text-[11px] font-mono font-bold text-doc-seal dark:text-red-400 uppercase block">
                Official Helplines
              </span>
              <p className="text-xs font-bold text-doc-ink dark:text-white">IGP Police Complaint: 1787</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Emergency Police: 15</p>
              <p className="text-[11px] font-mono text-slate-400 pt-1">Portal: pkm.punjab.gov.pk</p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3 items-center">
            <a
              href="https://pkm.punjab.gov.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-doc-ink dark:bg-slate-800 text-white hover:bg-doc-seal text-xs font-medium transition"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Official PKM Tracking Portal (pkm.punjab.gov.pk)</span>
            </a>
            <span className="text-xs text-slate-500">Track e-Receipt and Find Nearest District Khidmat Markaz</span>
          </div>
        </section>

        {/* FAQ Accordion Visual */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Police Khidmat Markaz PKM)"
          titleUr="پولیس خدمت مرکز سے متعلق عام سوالات و جوابات"
          subtitleEn="Essential guidelines regarding jurisdiction, fees, complaints, and legal scope"
          subtitleUr="دائرہ اختیار، فیسیں، شکایات اور قانونی دائرہ کار سے متعلق اہم ترین سوالات"
          items={[
            {
              questionEn: "Do I have to visit a Police Khidmat Markaz in my home district where my CNIC address is registered?",
              questionUr: "کیا مجھے اپنے آبائی ضلع کے خدمت مرکز جانا لازمی ہے جہاں کا میرا شناختی کارڈ ہے؟",
              answerEn: "No. Under the upgraded Integrated Khidmat Markaz System developed by PITB and Punjab Police, all 36 district centers are digitally unified. You can apply for Police Character Certificates, driving learner permits/renewals, tenant verifications, and FIR copies at ANY PKM center in Punjab regardless of whether your CNIC is from Lahore, Rawalpindi, Multan, or another district.",
              answerUr: "نہیں! پی آئی ٹی بی کے انٹیگریٹڈ سسٹم کے تحت پنجاب کے تمام 36 اضلاع آپس میں آن لائن منسلک ہیں۔ آپ کا شناختی کارڈ کسی بھی ضلع کا ہو، آپ پنجاب کے کسی بھی خدمت مرکز پر جا کر کریکٹر سرٹیفکیٹ، ڈرائیونگ لائسنس اور کرایہ دار تصدیق کی سروس حاصل کر سکتے ہیں۔",
            },
            {
              questionEn: "Can I file a formal complaint against police officer misconduct or corruption at a Police Khidmat Markaz?",
              questionUr: "کیا پولیس اہلکاروں کی بدعنوانی یا زیادتی کے خلاف پولیس خدمت مرکز پر شکایت درج ہو سکتی ہے؟",
              answerEn: "Yes. Every PKM center has a dedicated public complaint registration desk connected to the IGP Complaint Cell 1787. You can lodge complaints regarding non-registration of FIRs, illegal detentions, police misbehavior, or faulty investigations with an official computerized tracking number.",
              answerUr: "جی ہاں! ہر خدمت مرکز پر آئی جی پی کمپلینٹ سیل 1787 کا باقاعدہ کاؤنٹر موجود ہوتا ہے، جہاں ایف آئی آر درج نہ ہونے، پولیس کے نامناسب رویے یا ناجائز ہراسانی کے خلاف کمپیوٹرائزڈ شکایت درج کروا کر ٹریکنگ نمبر حاصل کیا جا سکتا ہے۔",
            },
            {
              questionEn: "What are the standard operating timings of Police Khidmat Markaz centers across Punjab?",
              questionUr: "پنجاب بھر میں پولیس خدمت مراکز کے دفتری اوقات کیا ہیں؟",
              answerEn: "Standard district PKM centers operate Monday through Saturday from 9:00 AM to 5:00 PM (with a Friday prayer break). Additionally, flagship Mega PKM Centers in major cities (such as Lahore Gulberg / Liberty, Rawalpindi Mall Road, and Multan) operate 24/7 or in two extended shifts (8:00 AM to 10:00 PM).",
              answerUr: "عام ضلعی مراکز پیر تا ہفتہ صبح 9:00 بجے سے شام 5:00 بجے تک کھلے رہتے ہیں۔ جبکہ بڑے شہروں (جیسے لاہور لبرٹی و مال روڈ راولپنڈی) میں میگا خدمت مراکز 24 گھنٹے یا رات 10 بجے تک بلا تعطل خدمات فراہم کرتے ہیں۔",
            },
            {
              questionEn: "How is a Police Khidmat Markaz different from a traditional police station (Thana)?",
              questionUr: "پولیس خدمت مرکز اور روایتی تھانے میں بنیادی فرق کیا ہے؟",
              answerEn: "A PKM is a modern, civilian-friendly digital facilitation hub equipped with electronic queue tokens, air-conditioned waiting halls, and PITB data counters focused exclusively on public document issuance and verifications. Unlike a traditional police station (Thana), PKMs do not hold lockups, execute arrests, or conduct custodial interrogations.",
              answerUr: "پولیس خدمت مرکز ایک جدید، پرسکون اور ڈیجیٹل سہولت سنٹر ہے جہاں بغیر خوف کے کاؤنٹرز پر کام ہوتا ہے۔ یہاں تھانوں کی طرح حوالات، قیدی یا تفتیشی کارروائیاں نہیں ہوتیں بلکہ صرف عوامی دستاویزات اور تصدیقات جاری کی جاتی ہیں۔",
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources &amp; Public Portals Cited:</p>
          {[
            {
              label: 'Punjab Police Khidmat Markaz Portal (Government of Punjab)',
              url: 'https://pkm.punjab.gov.pk',
            },
            {
              label: 'Punjab Information Technology Board (PITB Citizen Facilitation)',
              url: 'https://www.pitb.gov.pk',
            },
            {
              label: 'Punjab Police Official Portal & IGP 1787 Complaint Cell',
              url: 'https://punjabpolice.gov.pk',
            },
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
