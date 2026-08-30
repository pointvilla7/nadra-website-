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
  Search,
  Truck,
  QrCode,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Driving License Status Check Online 2026: Track DLIMS Punjab, Sindh, KP & Islamabad | Pakistan Info Hub',
  description:
    'Step-by-step guide to tracking driving license application, printing, and postal delivery status across Pakistan: DLIMS Punjab (dlims.punjab.gov.pk), Sindh DLS, KP Traffic Police, Islamabad ITP, Pakistan Post UMS tracking, and delay troubleshooting.',
  keywords: [
    'driving license status check online 2026',
    'DLIMS punjab driving license tracking by CNIC',
    'track driving license delivery pakistan post dlims',
    'sindh driving license tracking dls sindh police',
    'islamabad traffic police license status check',
    'dlims status under printing what it means',
    'driving license tracking token number',
    'dlims punjab gov pk tracking',
  ],
  openGraph: {
    title: 'Driving License Status Check Online 2026: Track DLIMS Punjab, Sindh & Islamabad',
    description:
      'Track your driving license application, printing, and courier dispatch in real-time across Pakistan via official provincial portals.',
    url: 'https://www.pakistaninfohub.com/traffic/driving-license-status-check-online-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/traffic/driving-license-status-check-online-2026' },
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
          name: 'Driving License Status Check Online',
          item: 'https://www.pakistaninfohub.com/traffic/driving-license-status-check-online-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Driving License Status Check Online 2026: Track DLIMS Punjab, Sindh, KP & Islamabad Applications',
      description:
        'A comprehensive procedural tracking guide explaining how to inspect driving license application stages, card printing queues, courier dispatch numbers, and troubleshooting delays in Pakistan.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-30',
      dateModified: '2026-08-30',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/traffic/driving-license-status-check-online-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Track Driving License Application Status Online in Pakistan',
      description:
        'Step-by-step procedure to check your driving license issuance and dispatch status using your CNIC or token tracking ID.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Open Provincial Tracking Portal',
          text: 'Visit dlims.punjab.gov.pk (for Punjab), dls.sindhpolice.gov.pk (for Sindh), or your respective provincial traffic portal.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Enter 13-Digit CNIC or Application Token',
          text: 'Type your 13-digit CNIC number (without dashes) into the tracking query bar.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Inspect Status Lifecycle Stage',
          text: 'Review whether your application is In-Scrutiny, Test Approved, Card Under Printing, or Dispatched with Pakistan Post.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Track Postal Courier Delivery',
          text: 'If status indicates Dispatched, copy the UMS tracking barcode and monitor live delivery to your residential address.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How soon after passing my driving test can I check my license status online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your driving test result updates to the centralized DLIMS database within 24 to 48 hours of passing your road and theory tests. Once updated, your application transitions to "Under Printing / Approval Pending" on the tracking portal.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if the tracking portal displays "No Record Found"?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ensure you entered your 13-digit CNIC without hyphens or spaces. If you recently renewed online, allow up to 24 hours for bank payment synchronization. If the issue persists, check using your 16-digit Application Tracking Token ID or visit your local Traffic Police Licensing Center.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I check driving license tracking status on behalf of a family member?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Provincial tracking portals are public-facing and only require the applicant’s valid 13-digit CNIC number or application tracking ID to view the public processing status.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I legally drive while my physical card is showing "Under Printing" or "Dispatched"?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! In Punjab, Sindh, and Islamabad, once your regular license is approved, you can download your official digital e-Driving License (with QR code) directly from the DLIMS portal or mobile app. Traffic wardens across Pakistan legally recognize this digital e-license.',
          },
        },
      ],
    },
  ],
};

export default function DrivingLicenseStatusCheckPage() {
  const breadcrumbs = [
    { nameEn: 'Driving & Traffic Verification', nameUr: 'ڈرائیونگ لائسنس و ٹریفک تصدیق', url: '/traffic' },
    { nameEn: 'Driving License Status Check Online 2026', nameUr: 'ڈرائیونگ لائسنس آن لائن ٹریکنگ 2026' },
  ];

  const trackingSteps = [
    {
      number: 1,
      titleEn: 'Access Provincial Portal / Tracking Tab',
      titleUr: 'صوبائی پورٹل / ٹریکنگ ٹیب کھولیں',
      descEn: 'Visit dlims.punjab.gov.pk/track (Punjab), dls.sindhpolice.gov.pk (Sindh), or islamabadpolice.gov.pk.',
      descUr: 'متعلقہ صوبائی ٹریفک پورٹل یا ایپ پر ٹریکنگ کے آپشن پر جائیں۔',
      tagEn: 'Direct URL',
      tagUr: 'پورٹل لنک',
    },
    {
      number: 2,
      titleEn: 'Enter 13-Digit CNIC (No Dashes)',
      titleUr: '13 ہندسوں کا شناختی کارڈ نمبر درج کریں',
      descEn: 'Input your 13-digit CNIC number or the 16-digit application token ID printed on your learner receipt.',
      descUr: 'شناختی کارڈ نمبر بغیر ڈیش کے یا ٹوکن نمبر درج کریں۔',
      tagEn: 'CNIC / Token ID',
      tagUr: 'شناختی کارڈ',
    },
    {
      number: 3,
      titleEn: 'Verify Application Stage & Details',
      titleUr: 'مرحلہ اور پراسیسنگ کا سٹیٹس دیکھیں',
      descEn: 'Inspect current milestone: Scrutiny, Test Passed, Security Card Printing, or Postal Courier Dispatch.',
      descUr: 'چیک کریں کہ آیا کارڈ پرنٹنگ کے عمل میں ہے، پاس ہو چکا ہے یا ڈاک کے ذریعے روانہ ہو گیا ہے۔',
      tagEn: 'Live Status',
      tagUr: 'لائیو سٹیٹس',
    },
    {
      number: 4,
      titleEn: 'Track Postal Delivery & Download e-License',
      titleUr: 'ڈاک ٹریکنگ اور ڈیجیٹل ای-لائسنس',
      descEn: 'If dispatched, copy the Pakistan Post UMS tracking ID. You can instantly download your digital QR e-license while awaiting physical delivery.',
      descUr: 'ڈاک کا ٹریکنگ نمبر معلوم کریں اور گھر بیٹھے فوری ڈیجیٹل ای-لائسنس ڈاؤن لوڈ کریں۔',
      tagEn: 'e-License Ready',
      tagUr: 'ای-لائسنس',
    },
  ];

  const faqs = [
    {
      questionEn: 'How soon after passing my driving test can I check my license status online?',
      questionUr: 'ڈرائیونگ ٹیسٹ پاس کرنے کے کتنی دیر بعد آن لائن سٹیٹس دیکھا جا سکتا ہے؟',
      answerEn: 'Your driving test result updates to the centralized DLIMS database within 24 to 48 hours of passing your road and theory tests. Once updated, your application transitions to "Under Printing / Approval Pending" on the tracking portal.',
      answerUr: 'ٹیسٹ پاس کرنے کے 24 سے 48 گھنٹوں کے اندر ریکارڈ آن لائن اپ ڈیٹ ہو جاتا ہے اور سٹیٹس "Under Printing" نظر آنے لگتا ہے۔',
    },
    {
      questionEn: 'What should I do if the tracking portal displays "No Record Found"?',
      questionUr: 'اگر ٹریکنگ پورٹل پر "No Record Found" لکھا آئے تو کیا کریں؟',
      answerEn: 'Ensure you entered your 13-digit CNIC without hyphens or spaces. If you recently renewed online, allow up to 24 hours for bank payment synchronization. If the issue persists, check using your 16-digit Application Tracking Token ID or visit your local Traffic Police Licensing Center.',
      answerUr: 'شناختی کارڈ نمبر بغیر ڈیش کے لکھیں۔ اگر آن لائن فیس ادا کی ہے تو 24 گھنٹے انتظار کریں۔ پھر بھی مسئلہ ہو تو ٹوکن نمبر درج کریں یا لائسنسنگ سنٹر جائیں۔',
    },
    {
      questionEn: 'Can I check driving license tracking status on behalf of a family member?',
      questionUr: 'کیا میں کسی فیملی ممبر کے لائسنس کا سٹیٹس چیک کر سکتا ہوں؟',
      answerEn: 'Yes. Provincial tracking portals are public-facing and only require the applicant’s valid 13-digit CNIC number or application tracking ID to view the public processing status.',
      answerUr: 'جی ہاں، پورٹل پر صرف 13 ہندسوں کا شناختی کارڈ نمبر درج کر کے کسی بھی فیملی ممبر کی درخواست کا سٹیٹس دیکھا جا سکتا ہے۔',
    },
    {
      questionEn: 'Can I legally drive while my physical card is showing "Under Printing" or "Dispatched"?',
      questionUr: 'جب تک اصل کارڈ موصول نہ ہو کیا ڈیجیٹل لائسنس پر گاڑی چلا سکتے ہیں؟',
      answerEn: 'Yes! In Punjab, Sindh, and Islamabad, once your regular license is approved, you can download your official digital e-Driving License (with QR code) directly from the DLIMS portal or mobile app. Traffic wardens across Pakistan legally recognize this digital e-license.',
      answerUr: 'جی ہاں! پنجاب، سندھ اور اسلام آباد میں منظور شدہ ای-لائسنس (کیو آر کوڈ کے ساتھ) موبائل میں دکھا کر گاڑی چلانا قانونی طور پر مکمل جائز ہے۔',
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
            <InteractiveToolBadge labelEn="DRIVING LICENSE TRACKER" labelUr="ڈرائیونگ لائسنس ٹریکر" variant="seal" />
            <span className="text-xs text-slate-400 font-bold">•</span>
            <VerifiedBadge variant="header" textEn="DLIMS 2026 TRACKING" textUr="مصدقہ آن لائن ٹریکنگ 2026" />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold tracking-tight leading-tight">
            Driving License Status Check Online (2026): Track DLIMS Punjab, Sindh, KP &amp; Islamabad
          </h1>

          <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            Track your new driving license, learner permit, or renewal application in real-time. Check card printing queues, Pakistan Post UMS dispatch numbers, and download your instant digital e-license.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-doc-brass font-mono">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Search className="w-3.5 h-3.5 text-doc-brass" />
              <span>Track by 13-Digit CNIC</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Truck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Pakistan Post UMS Tracking</span>
            </span>
          </div>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How Do You Check Your Driving License Status Online in Pakistan?"
          topicTitleUr="پاکستان میں ڈرائیونگ لائسنس کا سٹیٹس آن لائن کیسے چیک کریں؟"
          answerEn="To check your driving license status: Visit your provincial portal (dlims.punjab.gov.pk for Punjab, dls.sindhpolice.gov.pk for Sindh, or islamabadpolice.gov.pk for Islamabad). Click 'Tracking', enter your 13-digit CNIC (without dashes), and view your live processing stage (Under Printing, Dispatched, or Delivered). If dispatched, you can track postal delivery via Pakistan Post UMS."
          answerUr="ڈرائیونگ لائسنس کا سٹیٹس چیک کرنے کے لیے اپنے صوبائی پورٹل (پنجاب کے لیے dlims.punjab.gov.pk، سندھ کے لیے dls.sindhpolice.gov.pk اور اسلام آباد کے لیے islamabadpolice.gov.pk) پر جائیں۔ 'Tracking' پر کلک کر کے اپنا 13 ہندسوں کا شناختی کارڈ نمبر لکھیں اور پرنٹنگ یا ڈاک کا سٹیٹس معلوم کریں۔"
        />

        {/* Section 1: Province-by-Province Tracking Portals Directory */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <Globe className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Official Provincial Driving License Tracking Portals
            </h2>
          </div>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
                <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 text-left">Province / Territory</th>
                    <th className="px-4 py-3 text-left">Official Tracking Portal</th>
                    <th className="px-4 py-3 text-left">Required Input</th>
                    <th className="px-4 py-3 text-left">Digital e-License Feature</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                      Punjab
                    </td>
                    <td className="px-4 py-3 text-xs font-mono text-doc-seal">
                      dlims.punjab.gov.pk/track
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                      13-digit CNIC or Tracking Token ID
                    </td>
                    <td className="px-4 py-3 text-xs">
                      <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                        <Check className="w-3.5 h-3.5" /> Instant PDF QR e-License
                      </span>
                    </td>
                  </tr>

                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                      Sindh
                    </td>
                    <td className="px-4 py-3 text-xs font-mono text-doc-seal">
                      dls.sindhpolice.gov.pk
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                      CNIC Number &amp; License Number
                    </td>
                    <td className="px-4 py-3 text-xs">
                      <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                        <Check className="w-3.5 h-3.5" /> Online Verification &amp; e-Slip
                      </span>
                    </td>
                  </tr>

                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                      Islamabad (ICT)
                    </td>
                    <td className="px-4 py-3 text-xs font-mono text-doc-seal">
                      islamabadpolice.gov.pk
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                      CNIC / Token Appointment Number
                    </td>
                    <td className="px-4 py-3 text-xs">
                      <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                        <Check className="w-3.5 h-3.5" /> ITP Digital Verification
                      </span>
                    </td>
                  </tr>

                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                      Khyber Pakhtunkhwa
                    </td>
                    <td className="px-4 py-3 text-xs font-mono text-doc-seal">
                      dlims.kp.gov.pk
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                      CNIC / Token Barcode
                    </td>
                    <td className="px-4 py-3 text-xs">
                      <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                        <Check className="w-3.5 h-3.5" /> KP Traffic Tracking Active
                      </span>
                    </td>
                  </tr>

                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                      Balochistan
                    </td>
                    <td className="px-4 py-3 text-xs font-mono text-slate-500">
                      Local Licensing Center / In-Person Ledger
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                      Original Token Slip &amp; CNIC
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-500">
                      In-Person Counter Collection
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Tracking Procedure */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              How to Check Your Status Step-by-Step
            </h2>
          </div>

          <ProcessStepsDiagram
            steps={trackingSteps}
            titleEn="Driving License Tracking &amp; Delivery Flow"
            titleUr="ڈرائیونگ لائسنس ٹریکنگ کا طریقہ کار"
            subtitleEn="From portal lookup to Pakistan Post UMS courier delivery and digital e-license download"
            subtitleUr="آن لائن تلاش سے لے کر ڈاک ڈلیوری اور ڈیجیٹل لائسنس ڈاؤن لوڈ تک"
            variant="dark"
          />
        </section>

        {/* Section 3: Understanding What Each Status Means */}
        <section className="doc-card rounded-2xl p-6 sm:p-8 border border-doc-brass/30 space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-doc-brass" />
            <h2 className="text-xl font-serif font-bold text-doc-ink dark:text-white">
              What Does Your Tracking Status Result Mean?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800 border border-doc-brass/20 space-y-2">
              <span className="font-bold text-doc-ink dark:text-white text-sm block">1. Application Under Scrutiny / Review</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Your online renewal or fresh application has been submitted and fee paid. Traffic licensing officers are verifying your biometric data, CNIC validity, and traffic violation records.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800 border border-doc-brass/20 space-y-2">
              <span className="font-bold text-amber-700 dark:text-amber-300 text-sm block">2. Card Under Printing (Printing Queue)</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Your driving test has been approved and your plastic smart card is in the central security printing queue at PITB / Traffic Police headquarters.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800 border border-doc-brass/20 space-y-2">
              <span className="font-bold text-emerald-700 dark:text-emerald-400 text-sm block">3. Dispatched via Pakistan Post (UMS)</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The physical card has been printed and handed over to Pakistan Post for doorstep delivery. A tracking barcode (e.g. <code>UM123456789PK</code>) is displayed on the screen.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800 border border-doc-brass/20 space-y-2">
              <span className="font-bold text-blue-700 dark:text-blue-400 text-sm block">4. Ready for Collection / Delivered</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The card has reached your delivery post office or designated Traffic Police Licensing counter for physical handover.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Delay Factors & Troubleshooting */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Why Is Your Driving License Delayed? Common Causes &amp; Solutions
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>
              If your application status has remained unchanged for more than 15 working days, check for these common root causes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="font-bold text-doc-ink dark:text-white text-sm block">Biometric Mismatch</span>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  NADRA biometric verification may have failed during online renewal. Visit any licensing counter to perform fresh biometric fingerprint capture.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="font-bold text-doc-ink dark:text-white text-sm block">Address Incomplete / Returned</span>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  If the postman could not locate your address, the parcel is returned to the district Traffic Police Licensing Center (RTO) where it can be collected in person.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="font-bold text-doc-ink dark:text-white text-sm block">Printing Queue Backlog</span>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  High application volumes after province-wide crackdowns create temporary smart card printing queues. Your digital e-license remains 100% legally valid in the interim.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ Accordion */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Driving License Tracking)
            </h2>
          </div>

          <FAQAccordionVisual items={faqs} />
        </section>

        {/* Cross-Linking Hub */}
        <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
            Related Driving License &amp; Traffic Resources
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <Link
              href="/traffic/driving-license-online-apply-renewal-dlims-2026"
              className="p-3.5 rounded-xl border border-doc-brass/30 hover:border-doc-seal bg-slate-50 dark:bg-slate-800 transition flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <span className="font-bold text-doc-ink dark:text-white block group-hover:text-doc-seal transition">
                  Driving License Apply &amp; Renewal Guide 2026 →
                </span>
                <span className="text-slate-500 dark:text-slate-400">Complete fee schedule, learner rules, and DLIMS apply steps</span>
              </div>
            </Link>

            <Link
              href="/traffic/e-challan-check-online"
              className="p-3.5 rounded-xl border border-doc-brass/30 hover:border-doc-seal bg-slate-50 dark:bg-slate-800 transition flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <span className="font-bold text-doc-ink dark:text-white block group-hover:text-doc-seal transition">
                  E-Challan Online Check &amp; Pay →
                </span>
                <span className="text-slate-500 dark:text-slate-400">Check vehicle fines and traffic violations online</span>
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
