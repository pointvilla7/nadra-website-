import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { StepFlowDiagram } from '@/components/StepFlowDiagram';
import {
  ShieldAlert,
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Search,
  ExternalLink,
  PhoneCall,
  Clock,
  HelpCircle,
  TrendingDown,
  ArrowRight,
  Sparkles,
  Info,
  Calendar,
  Lock,
  Building,
  RefreshCw,
  Landmark,
  BadgeAlert,
  Send,
  CreditCard,
  Ban,
  Radio,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FBR Active Taxpayer (ATL) Check & SIM Block Recovery Guide 2026',
  description:
    'Complete guide to check FBR Active Taxpayer List (ATL) status via SMS 9966 or portal, Section 114B PTA SIM block mechanism, September 30 deadline, and step-by-step SIM unblocking.',
  keywords: [
    'fbr active taxpayer',
    'fbr sim block',
    'fbr atl status check online',
    'atl check sms 9966',
    'section 114b sim block',
    'unblock fbr sim pta',
    'fbr active taxpayer list 2026',
    'income tax return deadline 30 september 2026',
    'active taxpayer surcharge section 182a',
  ],
  openGraph: {
    title: 'FBR Active Taxpayer (ATL) Check & SIM Block Recovery Guide 2026',
    description:
      'Check your ATL filer status instantly, understand why PTA blocks SIMs under FBR Section 114B, and learn the exact step-by-step restoration procedure.',
    url: 'https://www.pakistaninfohub.com/tax/fbr-active-taxpayer-atl-check-sim-block-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/tax/fbr-active-taxpayer-atl-check-sim-block-2026',
  },
};

const FbrActiveTaxpayerHelper = dynamic(
  () => import('@/components/FbrActiveTaxpayerHelper').then((m) => ({ default: m.FbrActiveTaxpayerHelper })),
  { ssr: false, loading: () => <div className="h-[460px] rounded-3xl bg-slate-100 dark:bg-slate-800 animate-pulse" /> }
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Tax & FBR Services', item: 'https://www.pakistaninfohub.com/tax' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'FBR Active Taxpayer (ATL) Check & SIM Block Guide',
          item: 'https://www.pakistaninfohub.com/tax/fbr-active-taxpayer-atl-check-sim-block-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'FBR Active Taxpayer List (ATL) Check & Section 114B SIM Block Recovery Guide 2026',
      description:
        'Official operational manual explaining FBR Active Taxpayer List (ATL) status verification, Section 114B PTA SIM disconnections, September 30 filing cutoff, and automated recovery procedures.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/tax/fbr-active-taxpayer-atl-check-sim-block-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Restore FBR-Blocked SIM Cards and Regain ATL Status',
      description: 'Step-by-step restoration process for mobile SIM cards blocked under FBR Section 114B Income Tax General Orders.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Verify Current ATL Status',
          text: 'Send SMS "ATL <13-digit CNIC>" to 9966 or check e.fbr.gov.pk to confirm your inactive status.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'File Overdue Return on IRIS 2.0',
          text: 'Log into iris.fbr.gov.pk and officially submit your complete annual income tax return.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Pay Section 182A Surcharge (If Applicable)',
          text: 'If filing after the statutory deadline, generate a CPR / PSID challan in IRIS for the ATL inclusion surcharge and clear it via 1Link.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Wait for Weekly ATL Refresh Cycle',
          text: 'Allow 24 to 48 hours for FBR database reconciliation and the official Monday ATL publication cycle.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Verify Network Reactivation',
          text: 'Confirm PTA receives automated FBR clearance. In case of network delay, present your Active CPR receipt to your telecom operator franchise.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I check if my SIM is at risk of being blocked by FBR?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your SIM is at risk if you are legally required to file an income tax return (earning taxable salary above Rs. 600,000, owning property/vehicles, or running commercial businesses) but fail to file by the September 30 deadline. Check your status instantly by texting "ATL <13-digit CNIC>" to 9966. If the response shows "Inactive" or "Record Not Found", you are subject to Section 114B Income Tax General Orders (ITGO).',
          },
        },
        {
          '@type': 'Question',
          name: 'I already filed my tax return — why is my SIM still blocked?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Merely saving a draft return does not qualify; the return must be officially submitted with a verification PIN. If you filed after the statutory deadline (September 30), your name will not appear on the ATL until you pay the Section 182A ATL reinstatement surcharge via PSID. Furthermore, the FBR ATL updates weekly (every Monday), and PTA automated telecom unblocking queues take 24 to 48 hours following database synchronization.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does mobile SIM reactivation take after I file?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Once your return is submitted and any required Section 182A surcharge is settled via 1Bill/e-Pay, your record appears on the ATL in 24 to 48 hours. PTA telecom carrier automated scripts restore connectivity within 24 to 72 hours of FBR database clearance. You do not need to purchase a new SIM card.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does an FBR SIM block affect all my phone numbers or just one?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under Section 114B, the ITGO order applies against the individual\'s 13-digit CNIC. The PTA directs all cellular operators (Jazz, Zong, Telenor, Ufone, Onic) to suspend outgoing and incoming services on all SIM cards registered under that specific CNIC.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I have never filed a tax return before in my life?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'First-time filers can register instantly on the FBR IRIS portal (iris.fbr.gov.pk) using their CNIC, mobile number, and email. Once registered, file your return for the current tax year. First-time filers who submit their initial return before the deadline avoid late penalties and are placed directly onto the Active Taxpayer List.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I appeal or contest a SIM block, or is filing the only fix?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Filing your pending return is the fastest, statutory remedy. However, if you believe you were blocked erroneously (for instance, if you were genuinely exempt from filing or were included due to identity error), you can submit a grievance to your Regional Tax Office (RTO) Commissioner Inland Revenue or contact the FBR helpline at 051-111-772-772 for manual exclusion from the ITGO roster.',
          },
        },
      ],
    },
  ],
};

const recoverySteps = [
  {
    number: '01',
    titleEn: 'Verify Status on ATL',
    titleUr: 'ایکٹو ٹیکس پیئر سٹیٹس چیک کریں',
    descEn: 'Send SMS "ATL <13-digit CNIC>" to 9966 or query e.fbr.gov.pk to verify your current standing.',
    descUr: '9966 پر اپنا 13 ہندسوں کا شناختی کارڈ نمبر ایس ایم ایس کریں اور سٹیٹس معلوم کریں۔',
    tagEn: 'SMS 9966 / Web',
    tagUr: 'فوری تصدیق',
  },
  {
    number: '02',
    titleEn: 'File Overdue Return in IRIS',
    titleUr: 'آئرس پر انکم ٹیکس ریٹرن جمع کروائیں',
    descEn: 'Log in to iris.fbr.gov.pk, complete your income & wealth statement, and submit with your PIN.',
    descUr: 'آئرس پورٹل پر لاگ ان ہو کر گوشوارہ مکمل کریں اور 4 ہندسوں کے پن سے جمع کروائیں۔',
    tagEn: 'Mandatory Submission',
    tagUr: 'لازمی مرحلہ',
  },
  {
    number: '03',
    titleEn: 'Settle Section 182A Surcharge',
    titleUr: 'سیکشن 182A سرچارج ادا کریں',
    descEn: 'If filing past deadline, generate an ATL Surcharge PSID in IRIS and pay via 1Link mobile banking.',
    descUr: 'مقررہ تاریخ کے بعد فائلنگ کی صورت میں چالان تیار کر کے بینکنگ ایپ سے ادائیگی کریں۔',
    tagEn: 'PSID / 1Link',
    tagUr: 'چالان ادائیگی',
  },
  {
    number: '04',
    titleEn: 'Await Automated ATL Cycle',
    titleUr: 'ہفتہ وار اے ٹی ایل اپ ڈیٹ کا انتظار',
    descEn: 'FBR refreshes the ATL database every Monday (24–48h reconciliation) to reflect active standing.',
    descUr: 'ایف بی آر ہر پیر کو فہرست اپ ڈیٹ کرتا ہے جس کے بعد ریکارڈ ایکٹو ہو جاتا ہے۔',
    tagEn: '24–48 Hours',
    tagUr: 'خودکار اپ ڈیٹ',
  },
  {
    number: '05',
    titleEn: 'PTA SIM Reactivation',
    titleUr: 'پی ٹی اے اور سم کی بحالی',
    descEn: 'PTA receives automated FBR clearance and commands telcos to restore outgoing/incoming cellular services.',
    descUr: 'پی ٹی اے ایف بی آر ڈیٹا کے مطابق تمام موبائل کمپنیوں کو سم کھولنے کی ہدایت جاری کرتا ہے۔',
    tagEn: 'Service Restored',
    tagUr: 'مکمل بحالی',
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { nameEn: 'Home', nameUr: 'ہوم', url: '/' },
            { nameEn: 'Tax & FBR Services', nameUr: 'ٹیکس اور ایف بی آر', url: '/tax' },
            {
              nameEn: 'FBR Active Taxpayer (ATL) & SIM Block Guide',
              nameUr: 'ایف بی آر اے ٹی ایل اور سم بلاک گائیڈ',
            },
          ]}
        />

        {/* Hero Header */}
        <header className="bg-doc-paper dark:bg-doc-dark-card border-2 border-doc-brass/40 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/5 dark:bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 relative z-10">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <VerifiedBadge variant="header" textEn="STATUTORY ENFORCEMENT GUIDE 2026" />
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2.5 py-1 rounded-full border border-rose-200 dark:border-rose-900">
                <Radio className="w-3.5 h-3.5 animate-pulse text-rose-600" />
                <span>SECTION 114B / PTA ENFORCEMENT</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-900">
                <Clock className="w-3.5 h-3.5" />
                <span>DEADLINE: 30 SEPTEMBER</span>
              </span>
            </div>

            <h1 className="font-serif font-extrabold text-2xl sm:text-3xl md:text-4xl text-doc-ink dark:text-slate-100 tracking-tight leading-tight">
              FBR Active Taxpayer List (ATL) Check &amp; Section 114B SIM Block Recovery Guide 2026
            </h1>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans max-w-3xl">
              Understand the direct legal connection between FBR Active Taxpayer List status, Section 114B Income Tax General
              Orders (ITGO), and Pakistan Telecommunication Authority (PTA) cellular SIM disconnections. Learn how to check
              your standing in 30 seconds, meet the statutory filing cutoff, and execute the exact steps required to restore
              blocked mobile connections.
            </p>
          </div>
        </header>

        {/* Direct Answer Box (40-60 words mandatory requirement) */}
        <DirectAnswerBox
          topicTitleEn="Quick Summary: What is ATL & Why Does FBR Block SIM Cards?"
          topicTitleUr="فوری خلاصہ: اے ٹی ایل کیا ہے اور سم کیوں بلاک کی جاتی ہے؟"
          answerEn="The FBR Active Taxpayer List (ATL) records citizens who filed income tax returns. Check status in 30 seconds via SMS: send 'ATL <13-digit CNIC>' to 9966 or visit e.fbr.gov.pk. Under Section 114B, FBR directs PTA to block all cellular SIMs on non-filing CNICs. Restoring service requires submitting your overdue return and settling the reinstatement surcharge."
          answerUr="اے ٹی ایل ایف بی آر کی وہ مصدقہ فہرست ہے جس میں گوشوارہ جمع کروانے والوں کے نام شامل ہوتے ہیں۔ 9966 پر شناختی کارڈ میسج کر کے یا پورٹل سے فوری سٹیٹس چیک کریں۔ سیکشن 114B کے تحت نان فائلرز کی تمام سمیں بند کر دی جاتی ہیں۔ سم بحال کروانے کے لیے انکم ٹیکس ریٹرن اور سرچارج جمع کروانا لازمی ہے۔"
        />

        {/* Statutory Filing Deadline Alert Box */}
        <section className="p-5 sm:p-6 rounded-3xl bg-amber-500/10 border-2 border-amber-500/40 space-y-3 relative overflow-hidden">
          <div className="flex items-start gap-3">
            <BadgeAlert className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h2 className="font-serif font-bold text-base sm:text-lg text-amber-900 dark:text-amber-200">
                Critical Calendar Notice: Annual Return Deadline is 30 September 2026
              </h2>
              <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-300/90 leading-relaxed font-sans">
                Under Section 118 of the Income Tax Ordinance 2001, the statutory deadline for salaried individuals, business
                proprietors, and Associations of Persons (AOPs) is <strong>30 September 2026</strong>. While taxpayers often
                speculate about post-deadline grace periods, <strong>official extensions are never guaranteed</strong> by the
                Ministry of Finance or FBR. Waiting for an extension puts you at immediate risk of Section 182 late fines,
                Section 182A reinstatement surcharges, and Section 114B automated telecommunication suspension orders.
              </p>
            </div>
          </div>
        </section>

        {/* Verification & Interactive CNIC Lookup Tool */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-widest text-doc-seal dark:text-red-400 font-bold">
                INSTANT CNIC VERIFIER
              </span>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-doc-ink dark:text-slate-100">
                Check Your Active Taxpayer Standing (Online &amp; SMS 9966)
              </h2>
            </div>
            <InteractiveToolBadge />
          </div>

          <FbrActiveTaxpayerHelper />
        </section>

        {/* Ad Placement Zone */}
        <AdPlacementZone />

        {/* Process Flow: SIM Block Recovery Diagram */}
        <section className="space-y-4">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-doc-seal dark:text-red-400 font-bold">
              SYSTEM RESTORATION BLUEPRINT
            </span>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-doc-ink dark:text-slate-100">
              Complete 5-Step Process: From Inactive Status to Full SIM Reactivation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans">
              Follow this verified legal and technical sequence to clear FBR flags and unblock cellular connections.
            </p>
          </div>

          <StepFlowDiagram
            titleEn="Official FBR ATL Reinstatement & SIM Unblock Flow"
            titleUr="اے ٹی ایل بحالی اور سم ان بلاک کرنے کا سرکاری طریقہ کار"
            subtitleEn="Chronological sequence from IRIS tax filing to PTA automated network restoration"
            subtitleUr="آئرس پر گوشوارہ جمع کروانے سے لے کر پی ٹی اے سگنل بحالی تک کے مصدقہ مراحل"
            steps={recoverySteps}
          />
        </section>

        {/* Deep Technical Explanation: Section 114B & PTA Enforcement */}
        <section className="bg-white dark:bg-doc-dark-card border border-doc-brass/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-doc-seal dark:text-red-400 font-mono text-xs uppercase font-bold tracking-wider">
              <ShieldAlert className="w-4 h-4" />
              <span>STATUTORY MECHANICS &amp; POWERS</span>
            </div>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-doc-ink dark:text-slate-100">
              The Section 114B Mechanism: How &amp; Why PTA Disables Mobile Connections
            </h2>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed space-y-4">
            <p>
              In recent legislative budget reforms, the Federal Board of Revenue was granted sweeping enforcement instruments
              under <strong>Section 114B of the Income Tax Ordinance, 2001</strong>. This provision empowers the Board to issue
              binding <em>Income Tax General Orders (ITGO)</em> ordering state regulatory authorities to disable essential
              services for non-compliant citizens.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 not-prose">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center font-bold">
                  <Ban className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-slate-200">1. Automated ITGO Order</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal font-sans">
                  FBR computers analyze NADRA wealth indicators, bank accounts, and asset registrations to identify non-filers
                  earning taxable income.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                  <Radio className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-slate-200">2. PTA Carrier Directive</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal font-sans">
                  The Pakistan Telecommunication Authority transmits verified CNIC batches to Jazz, Zong, Telenor, and Ufone
                  for service cutoff.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  <RefreshCw className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-slate-200">3. Database Clearance</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal font-sans">
                  Upon verified tax filing and surcharge settlement, FBR emits automated electronic clearance restoring mobile
                  transceivers.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-doc-paper dark:bg-slate-800/50 border border-doc-brass/30 space-y-2">
              <h4 className="font-serif font-bold text-sm text-doc-ink dark:text-slate-100 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-doc-seal" />
                <span>Important Real-World Clarification: Mobile Franchises Cannot Manually Unblock SIMs</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                A common point of consumer frustration is visiting a telecom customer service center (such as Jazz Experience
                Centers or Zong Franchises) demanding that representative staff reactivate a blocked number. Customer service
                reps possess zero manual override switches for Section 114B holds. Telecom networks are legally mandated to
                await automated API batch synchronization directly from the FBR ITGO gateway. Submitting your tax return
                through IRIS is the <em>only</em> lawful key that triggers network restoration.
              </p>
            </div>
          </div>
        </section>

        {/* Comprehensive Comparison: Filer vs Late Filer vs Inactive */}
        <section className="space-y-4">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-doc-seal dark:text-red-400 font-bold">
              FINANCIAL CONSEQUENCE MATRIX
            </span>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-doc-ink dark:text-slate-100">
              Tax Classification Comparison: Filer vs. Late Filer vs. Non-Filer
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans">
              Understanding the distinct legal categories on the Active Taxpayer List and how they impact daily banking and
              asset transactions.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-doc-brass/40 shadow-sm bg-white dark:bg-doc-dark-card">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800/80 text-doc-ink dark:text-slate-200 font-serif font-bold border-b border-doc-brass/30">
                  <th className="p-3.5 sm:p-4">Regulatory Aspect</th>
                  <th className="p-3.5 sm:p-4 text-emerald-800 dark:text-emerald-300">Active Filer (On-Time)</th>
                  <th className="p-3.5 sm:p-4 text-blue-800 dark:text-blue-300">Late Filer (Active via Surcharge)</th>
                  <th className="p-3.5 sm:p-4 text-rose-800 dark:text-rose-300">Non-Filer / Inactive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-sans">
                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-doc-ink dark:text-slate-200">Filing Timing</td>
                  <td className="p-3.5 sm:p-4">Submitted on or before 30 September</td>
                  <td className="p-3.5 sm:p-4">Submitted after 30 Sept + Surcharge cleared</td>
                  <td className="p-3.5 sm:p-4 text-rose-600 dark:text-rose-400 font-medium">Unfiled or unverified</td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-doc-ink dark:text-slate-200">ATL Appearance</td>
                  <td className="p-3.5 sm:p-4 text-emerald-700 dark:text-emerald-400 font-bold">Active (Green)</td>
                  <td className="p-3.5 sm:p-4 text-blue-700 dark:text-blue-400 font-bold">Active (Restored)</td>
                  <td className="p-3.5 sm:p-4 text-rose-700 dark:text-rose-400 font-bold">Inactive (Red)</td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-doc-ink dark:text-slate-200">Cash Withdrawal Tax (Sec 231AB)</td>
                  <td className="p-3.5 sm:p-4">0% (Completely Exempt)</td>
                  <td className="p-3.5 sm:p-4">0% (Completely Exempt)</td>
                  <td className="p-3.5 sm:p-4 text-rose-600 font-bold">0.6% on &gt; Rs. 50,000/day</td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-doc-ink dark:text-slate-200">Car Registration WHT (Sec 231B)</td>
                  <td className="p-3.5 sm:p-4">Standard Base Rate</td>
                  <td className="p-3.5 sm:p-4">Standard Base Rate</td>
                  <td className="p-3.5 sm:p-4 text-rose-600 font-bold">200% to 300% Penalty Rate</td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-doc-ink dark:text-slate-200">Property Purchase WHT (Sec 236K)</td>
                  <td className="p-3.5 sm:p-4">3% to 4% depending on value</td>
                  <td className="p-3.5 sm:p-4">3% to 4% depending on value</td>
                  <td className="p-3.5 sm:p-4 text-rose-600 font-bold">10.5% to 15% Heavy Tariff</td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-doc-ink dark:text-slate-200">Bank Dividend Withholding (Sec 150)</td>
                  <td className="p-3.5 sm:p-4">15% Standard</td>
                  <td className="p-3.5 sm:p-4">15% Standard</td>
                  <td className="p-3.5 sm:p-4 text-rose-600 font-bold">30% Doubled Deduction</td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-doc-ink dark:text-slate-200">Section 114B SIM Block Risk</td>
                  <td className="p-3.5 sm:p-4 text-emerald-600 font-bold">Zero Risk</td>
                  <td className="p-3.5 sm:p-4 text-emerald-600 font-bold">Zero Risk (Cleared)</td>
                  <td className="p-3.5 sm:p-4 text-rose-600 font-bold">Direct Enforcement Target</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Reinstatement Surcharge Rates: Statutory Evolution */}
        <section className="bg-doc-paper dark:bg-doc-dark-card border border-doc-brass/30 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-doc-seal dark:text-red-400 font-bold">
              SECTION 182A SURCHARGE RATES
            </span>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-doc-ink dark:text-slate-100">
              Late Filing Reinstatement Surcharge: Current Statutory Amounts
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Under <strong>Section 182A of the Income Tax Ordinance</strong>, an individual or business entity that submits
            their income tax return after the designated statutory deadline remains classified as &quot;Inactive&quot; on the Active
            Taxpayer List until a formal reinstatement surcharge is paid through an FBR Computerized Payment Receipt (CPR).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-doc-brass/20 space-y-1 text-center">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                Salaried &amp; Individuals
              </span>
              <div className="text-2xl font-serif font-extrabold text-doc-ink dark:text-slate-100">
                Rs. 1,000 – 25,000*
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                *Statutory base fee is Rs. 1,000 for standard salaried filers; recent Finance Act proposals introduced higher
                reinstatement tiers (up to Rs. 25,000) for commercial asset buyers. Verify exact CPR amount on your IRIS screen.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-doc-brass/20 space-y-1 text-center">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                Association of Persons (AOPs)
              </span>
              <div className="text-2xl font-serif font-extrabold text-doc-ink dark:text-slate-100">
                Rs. 10,000 – 50,000
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                Applicable to business partnerships, firms, and joint commercial associations seeking ATL restoration.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-doc-brass/20 space-y-1 text-center">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                Corporate Entities / Companies
              </span>
              <div className="text-2xl font-serif font-extrabold text-doc-ink dark:text-slate-100">
                Rs. 20,000 – 100,000
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                Private and public limited joint-stock corporations under corporate income tax schedules.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-950 dark:text-amber-300 font-sans flex items-start gap-2 mt-2">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>Honest Note on Surcharge Figures Across Portals:</strong> Older articles cite fixed fees of Rs. 1,000 /
              10,000 / 20,000. In recent legislative amendments, higher penalty ceilings were enacted for non-compliant
              high-value asset holders. Always look at the system-generated amount when generating your 17-digit PSID under the
              &quot;Misc / ATL Surcharge&quot; head on IRIS 2.0 to ensure 100% exact payment.
            </span>
          </div>
        </section>

        {/* High-Intent Civic FAQs */}
        <section className="space-y-4">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-doc-seal dark:text-red-400 font-bold">
              VERIFIED RESOLUTIONS
            </span>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-doc-ink dark:text-slate-100">
              Frequently Asked Questions: ATL Verification &amp; SIM Disconnections
            </h2>
          </div>

          <div className="space-y-3">
            <div className="p-5 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/30 space-y-2">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-slate-100 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-doc-seal shrink-0 mt-1" />
                <span>How do I check if my SIM is at risk of being blocked?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-6 font-sans">
                Your SIM is at direct risk if you earn taxable income or own registered immovable property/vehicles and fail to
                file your annual tax return by the September 30 deadline. Check your status instantly: send an SMS containing{' '}
                <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono font-bold">
                  ATL [13-digit CNIC]
                </code>{' '}
                to <strong>9966</strong>. If the reply reads &quot;Inactive&quot; or &quot;Not on ATL&quot;, your CNIC is vulnerable to Section 114B
                ITGO telecom suspension orders.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/30 space-y-2">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-slate-100 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-doc-seal shrink-0 mt-1" />
                <span>I already filed my return — why is my SIM still blocked?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-6 font-sans">
                Three typical factors cause this delay: (1) Saving a draft without completing formal submission using your
                4-digit PIN; (2) Filing past the September 30 deadline without generating and paying the Section 182A
                reinstatement surcharge; (3) Weekly database update cycles — the FBR refreshes the ATL on Monday, and PTA
                automated clearing scripts typically require 24 to 48 hours to communicate with cellular base stations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/30 space-y-2">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-slate-100 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-doc-seal shrink-0 mt-1" />
                <span>How long does mobile SIM reactivation take after I file?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-6 font-sans">
                Under standard FBR and PTA technical protocols, once your return is submitted and your CPR surcharge payment is
                acknowledged, your name is integrated into the active taxpayer registry within 24 to 48 hours. Cellular
                networks reactivate blocked numbers within 1 to 3 days of automated PTA data transfer. You do not need to discard
                your SIM card.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/30 space-y-2">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-slate-100 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-doc-seal shrink-0 mt-1" />
                <span>Does this affect all my mobile SIMs or just one?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-6 font-sans">
                Section 114B orders are issued against your <strong>13-digit CNIC</strong>, not individual phone numbers. This
                means that when PTA executes an ITGO notice, <strong>all SIM cards</strong> registered across Jazz, Zong,
                Telenor, Ufone, and Onic under that identity card face simultaneous service suspension.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/30 space-y-2">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-slate-100 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-doc-seal shrink-0 mt-1" />
                <span>What if I have never filed a tax return before?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-6 font-sans">
                First-time taxpayers can enroll on the FBR IRIS 2.0 portal (iris.fbr.gov.pk) in under 10 minutes using their
                CNIC, an active SIM registered in their name, and an email address. Filing your first return before September 30
                ensures your entry onto the Active Taxpayer List without incurring late penalties.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/30 space-y-2">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-slate-100 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-doc-seal shrink-0 mt-1" />
                <span>Can I appeal against an erroneous SIM block, or is filing the only remedy?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-6 font-sans">
                Submitting your return is always the fastest legal resolution. However, if you are a non-resident overseas
                Pakistani or a student without taxable income who was blocked due to mistaken identity, you can lodge an
                administrative grievance at the FBR central helpline (<strong>051-111-772-772</strong>) or visit your regional
                Commissioner Inland Revenue (RTO) with documented proof of exemption to request immediate ITGO delisting.
              </p>
            </div>
          </div>
        </section>

        {/* Cross-Linking Navigation */}
        <section className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-doc-brass/30 space-y-4">
          <div className="flex items-center gap-2 text-doc-seal dark:text-red-400 font-mono text-xs uppercase font-bold tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>RELATED OFFICIAL FBR TAX GUIDES &amp; CALCULATORS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/tax/income-tax-on-salary-slabs-calculator-pakistan-2026"
              className="p-4 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/20 hover:border-doc-seal transition space-y-1.5 group flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">FY2026-27 Slabs</span>
                <h4 className="font-serif font-bold text-sm text-doc-ink dark:text-slate-100 group-hover:text-doc-seal transition">
                  Income Tax on Salary Slabs &amp; Calculator
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  Check revised budget relief slabs, 0% Rs. 600,000 threshold, and calculate monthly payroll deductions.
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-doc-seal dark:text-red-300 flex items-center gap-1 pt-2">
                <span>View Slabs</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/tax/how-to-file-income-tax-return-salaried-iris-2026"
              className="p-4 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/20 hover:border-doc-seal transition space-y-1.5 group flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-bold">Step-by-Step Filing</span>
                <h4 className="font-serif font-bold text-sm text-doc-ink dark:text-slate-100 group-hover:text-doc-seal transition">
                  How to File Salaried Return on IRIS 2.0
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  Complete walkthrough of IRIS 2.0 form 114(1), wealth reconciliation, and PIN verification before the deadline.
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-doc-seal dark:text-red-300 flex items-center gap-1 pt-2">
                <span>IRIS Filing Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/tax/fbr-pos-invoice-verification-prize-scheme-2026"
              className="p-4 rounded-2xl bg-white dark:bg-doc-dark-card border border-doc-brass/20 hover:border-doc-seal transition space-y-1.5 group flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-purple-600 dark:text-purple-400 font-bold">POS Verification</span>
                <h4 className="font-serif font-bold text-sm text-doc-ink dark:text-slate-100 group-hover:text-doc-seal transition">
                  FBR POS Invoice Verification
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  Verify retail shopping receipts on Tax Asaan or SMS 9966, Pakki Receipt rules &amp; prize scheme status.
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-doc-seal dark:text-red-300 flex items-center gap-1 pt-2">
                <span>Check POS Receipt</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
