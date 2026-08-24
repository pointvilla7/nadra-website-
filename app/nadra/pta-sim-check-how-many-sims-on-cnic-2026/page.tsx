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
  Smartphone,
  ShieldAlert,
  Building,
  FileCheck,
  Send,
  FileText,
  BadgeCheck,
  Scale,
  Fingerprint,
  Radio,
  Lock,
  Search,
  AlertCircle,
  Check,
  PhoneCall,
  UserX
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PTA SIM Check 2026: How Many SIMs on My CNIC (668 & cnic.sims.pk) | Pakistan Info Hub',
  description:
    'Official, safe guide to checking active SIMs registered on your CNIC in Pakistan: Learn how to use PTA shortcode 668, the free cnic.sims.pk portal, 667 MNP ownership checks, the 5-SIM limit, and how to stay safe from illegal fake SIM tracker websites.',
  keywords: [
    'how many sims on my cnic 2026',
    'pta sim information system 668',
    'cnic sims pk check online',
    'check sim owner details pakistan scam warning',
    'svms vs dirbs pta difference',
    'remove unauthorized sim from cnic biometric',
    'how to check sim registration 667 mnp',
  ],
  openGraph: {
    title: 'PTA SIM Check 2026: How Many SIMs on My CNIC (668 & cnic.sims.pk)',
    description:
      'Verified guide to checking active mobile connections on your CNIC using official PTA SVMS channels, with essential scam-protection warnings against third-party tracker sites.',
    url: 'https://www.pakistaninfohub.com/nadra/pta-sim-check-how-many-sims-on-cnic-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/nadra/pta-sim-check-how-many-sims-on-cnic-2026' },
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
          name: 'NADRA Services',
          item: 'https://www.pakistaninfohub.com/nadra',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'PTA SIM Check by CNIC 2026',
          item: 'https://www.pakistaninfohub.com/nadra/pta-sim-check-how-many-sims-on-cnic-2026',
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Check How Many SIMs are Registered on Your CNIC in Pakistan',
      description:
        'Official step-by-step procedure to check total active mobile connections registered against a Computerized National Identity Card using PTA shortcode 668 or the cnic.sims.pk web portal.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Choose Verification Channel (SMS or Web)',
          text: 'Decide whether to use the 668 SMS shortcode (Rs. 2 + tax, works offline) or the official cnic.sims.pk web portal (100% free with CAPTCHA).',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Enter 13-Digit CNIC Number Without Hyphens',
          text: 'Type your clean 13-digit CNIC number (e.g. 3520112345671) without dashes or spaces.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Receive Operator-Wise Breakdown',
          text: 'View the count of registered voice and data SIMs across Jazz, Zong, Telenor, Ufone (PTML), SCOM, and Onic.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Reconcile Count or Disown Unknown Connections',
          text: 'Compare the returned count against your family SIMs. If an unauthorized SIM exists, visit the relevant telecom franchise with your original CNIC for biometric unlinking.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I check someone else’s SIM count or owner details using just their phone number?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Under Pakistan Telecommunication Authority (PTA) regulations and the Prevention of Electronic Crimes Act (PECA 2016), subscriber databases are strictly confidential. There is no legal public tool that allows anyone to look up another person’s name, address, or CNIC using their mobile number. Official systems only allow citizens to verify the count of SIMs registered to their own CNIC.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the 668 SMS service free or does it cost balance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sending your 13-digit CNIC to shortcode 668 costs approximately Rs. 2 + applicable telecom tax per SMS across all Pakistani mobile operators. If you want a completely free method, you can visit the official PTA web portal at cnic.sims.pk on any browser.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the maximum number of SIMs allowed on a single CNIC in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under standard PTA licensing limits, an individual Pakistani citizen can have a maximum of 5 voice SIM cards registered simultaneously across all mobile networks. In addition, up to 3 data-only (broadband/dongle) SIMs are permitted, bringing the total theoretical ceiling to 8 SIMs per CNIC.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between PTA SIM Check (SVMS) and PTA Device Verification (DIRBS)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SVMS (Subscriber Verification Management System via 668 or cnic.sims.pk) counts how many mobile phone numbers/SIM cards are registered to your national identity (CNIC). In contrast, DIRBS (Device Identification, Registration and Blocking System via 8484) checks whether your physical smartphone handset/IMEI is legally approved and customs-tax-paid. They are two entirely separate systems.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if the SIM count on my CNIC is higher than expected?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'First, check whether you or your immediate family members previously purchased an internet device (dongle/mifi), a smart watch SIM, or an old number that was never officially cancelled. If the connection is genuinely unrecognized, visit the customer service center (franchise) of the concerned telecom network with your original CNIC to submit a biometric disownment/cancellation form.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I check the registration details of the specific SIM currently in my phone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'From the active SIM inside your handset, send the word "MNP" (or blank SMS depending on network) to shortcode 667. You will receive an automated reply showing the registered owner’s name, partially masked CNIC, and connection activation date for that specific line.',
          },
        },
      ],
    },
  ],
};

export default function PtaSimCheckPage() {
  const breadcrumbs = [
    { nameEn: 'NADRA & Telecom Services', nameUr: 'نادرا و ٹیلی کام سروسز', url: '/nadra' },
    { nameEn: 'PTA SIM Check by CNIC 2026', nameUr: 'شناختی کارڈ پر سموں کی تعداد معلوم کریں 2026' },
  ];

  const simCheckSteps = [
    {
      number: 1,
      icon: <Smartphone className="w-5 h-5" />,
      titleEn: 'Send CNIC to 668 (or Web)',
      titleUr: '668 پر شناختی کارڈ نمبر بھیجیں',
      descEn: 'Send your 13-digit CNIC (no dashes) via SMS to 668 (Rs. 2+tax) or enter it on the free portal cnic.sims.pk.',
      descUr: 'بغیر ڈیش کے 13 ہندسوں کا شناختی کارڈ نمبر 668 پر ایس ایم ایس کریں یا پورٹل پر درج کریں۔',
      tagEn: 'Step 1',
      tagUr: 'مرحلہ 1',
    },
    {
      number: 2,
      icon: <Radio className="w-5 h-5" />,
      titleEn: 'Inspect Operator Breakdown',
      titleUr: 'نیٹ ورک وائز سموں کی تفصیل دیکھیں',
      descEn: 'The automated system returns active voice & data SIM counts across Jazz, Zong, Telenor, Ufone, SCOM, and Onic.',
      descUr: 'سسٹم تمام نیٹ ورکس (جاز، زونگ، ٹیلی نار، یوفون، ایس کام) پر ایکٹو سموں کی لسٹ فراہم کرے گا۔',
      tagEn: 'Instant Reply',
      tagUr: 'فوری جواب',
    },
    {
      number: 3,
      icon: <Fingerprint className="w-5 h-5" />,
      titleEn: 'Check 667 on Active SIMs',
      titleUr: 'اپنے فون کی سم پر 667 بھیجیں',
      descEn: 'Send "MNP" to 667 from your current handset to verify the exact owner name and masked CNIC on that specific line.',
      descUr: 'اپنے نمبر کی ملکیت جانچنے کے لیے اسی سم سے 667 پر MNP لکھ کر بھیجیں۔',
      tagEn: 'Device Level',
      tagUr: 'موبائل چیک',
    },
    {
      number: 4,
      icon: <UserX className="w-5 h-5" />,
      titleEn: 'Disown Unknown Numbers',
      titleUr: 'غیر متعلقہ سم کا بائیومیٹرک خاتمہ',
      descEn: 'If any unrecognized SIM appears, visit the operator franchise with your original CNIC for immediate biometric blocking.',
      descUr: 'اگر کوئی فالتو سم موجود ہو تو اصل شناختی کارڈ کے ہمراہ فرنچائز جا کر فوری بلاک کروائیں۔',
      tagEn: 'Franchise Action',
      tagUr: 'فرنچائز حل',
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
            <InteractiveToolBadge labelEn="PTA SIM INFORMATION SYSTEM" labelUr="پی ٹی اے سم تصدیقی سسٹم" variant="navy" />
            <VerifiedBadge textEn="SVMS & NADRA DATABASE 2026" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            PTA SIM Check: How Many SIMs Are Registered on Your CNIC (2026 Guide)
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              شناختی کارڈ پر کل کتنی سمیں رجسٹرڈ ہیں؟ پی ٹی اے 668 اور آن لائن تصدیق کا محفوظ طریقہ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Concerned that unauthorized mobile connections might be linked to your national identity? Here is the safe, legal, and official way to check your SIM count in Pakistan—without falling for illegal third-party &quot;SIM tracker&quot; scam websites.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Check How Many SIMs are on Your CNIC in Pakistan"
          topicTitleUr="اپنے شناختی کارڈ پر سموں کی تعداد کیسے معلوم کریں؟"
          answerEn="To check how many SIMs are registered to your CNIC: Send your 13-digit CNIC (without dashes) via SMS to shortcode 668 (costs Rs. 2 + tax) or visit the official free web portal at cnic.sims.pk. The reply displays your operator-wise count (Jazz, Zong, Telenor, Ufone/PTML, SCOM). Pakistani regulations limit each citizen to a maximum of 5 voice SIMs."
          answerUr="اپنے شناختی کارڈ پر رجسٹرڈ سموں کی تعداد جاننے کے لیے 13 ہندسوں کا شناختی کارڈ نمبر بغیر ڈیش کے 668 پر ایس ایم ایس کریں (فیس 2 روپے جمع ٹیکس) یا سرکاری پورٹل cnic.sims.pk پر مفت دیکھیں۔ پی ٹی اے قوانین کے تحت ایک شناختی کارڈ پر زیادہ سے زیادہ 5 وائس سمیں رکھنے کی اجازت ہے۔"
        />

        {/* Friendly Conversational Intro */}
        <section className="p-6 rounded-2xl bg-amber-50/70 dark:bg-slate-900/80 border border-amber-200/80 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-doc-seal dark:text-amber-400 font-serif font-bold text-lg">
            <ShieldCheck className="w-5 h-5 shrink-0" />
            <h2>Let&apos;s Protect Your Identity Without Panicking</h2>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Every Pakistani has received one of those late-night spam messages or heard a rumor that someone could be misusing their CNIC for an illegal SIM. It is completely natural to want peace of mind.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            However, when people search online for answers, they frequently end up on dangerous, predatory websites claiming they can &quot;track any phone number&quot; or reveal private family addresses for Rs. 1,000. Let&apos;s be completely candid: <strong>those sites are illegal, dangerous, and often harvest your personal data</strong>. The Pakistan Telecommunication Authority (PTA) and NADRA have built simple, official self-check tools that take less than 30 seconds to use.
          </p>
        </section>

        {/* Section 1: The Two Official Self-Check Methods */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Radio className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              The 2 Official &amp; Safe Ways to Check Your SIM Count
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Method A: SMS to Shortcode 668 (Works Offline)
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>How to use:</strong> Open your SMS app, type your <strong>13-digit CNIC number</strong> without dashes or spaces (e.g., <code>3520112345671</code>), and send it to <strong>668</strong>.</li>
                <li><strong>Cost:</strong> Approx. <strong>Rs. 2 + tax</strong> deducted from your mobile prepaid balance or added to your postpaid bill.</li>
                <li><strong>What you receive:</strong> An automated SMS response listing the exact number of active voice and broadband SIMs registered against that CNIC across each mobile operator.</li>
                <li><strong>Best for:</strong> Quick offline checks when you do not have active mobile data or Wi-Fi.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Method B: PTA Official Web Portal (100% Free)
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Official URL:</strong> Visit the verified government portal at <code>cnic.sims.pk</code>.</li>
                <li><strong>How to use:</strong> Enter your 13-digit CNIC number, tick the &quot;I am not a robot&quot; CAPTCHA box, and click Submit.</li>
                <li><strong>Cost:</strong> <strong>100% Free of charge</strong>.</li>
                <li><strong>What you receive:</strong> A clean tabular breakdown showing your active Voice SIM count, Data SIM count, and Total connections per network.</li>
                <li><strong>Best for:</strong> Checking from a laptop or smartphone browser without spending mobile balance.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Visual Flow Diagram */}
        <StepFlowDiagram
          titleEn="Official SIM Verification &amp; Identity Safety Flow"
          titleUr="شناختی کارڈ پر سموں کی محفوظ تصدیق کا طریقہ"
          subtitleEn="Follow this safe path to verify, reconcile, and protect your mobile connections"
          subtitleUr="سموں کی جانچ، تصدیق اور غیر قانونی نمبرز کے خاتمے کے 4 مراحل"
          steps={simCheckSteps}
        />

        {/* Section 3: SVMS vs DIRBS Distinction */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Crucial Distinction: SVMS (SIMs) vs. DIRBS (Devices)
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Many blogs and social media pages confuse two completely different regulatory systems operated by PTA. Here is the difference:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex items-center gap-2 text-doc-ink dark:text-white font-bold text-sm">
                  <Smartphone className="w-4 h-4 text-doc-brass" />
                  <h3>SVMS (SIM Verification) — Shortcode 668</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>What it verifies:</strong> The relationship between a <em>Person (CNIC)</em> and their <em>Mobile Numbers (SIM Cards)</em>.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Jointly managed by PTA and NADRA to prevent identity fraud and ensure biometric compliance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex items-center gap-2 text-doc-ink dark:text-white font-bold text-sm">
                  <Lock className="w-4 h-4 text-doc-seal" />
                  <h3>DIRBS (Device Verification) — Shortcode 8484</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>What it verifies:</strong> The physical <em>Mobile Phone Hardware (IMEI)</em>, customs tax compliance, and legal import status.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  You check this by dialing <code>*#06#</code> on your phone keypad to get the 15-digit IMEI and sending it to <strong>8484</strong>. It has nothing to do with how many SIMs you own.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Checking the Active SIM in Your Handset (667) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <PhoneCall className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Checking the Exact SIM in Your Phone: Shortcode 667
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              While 668 tells you the <em>total count</em> of SIMs on your CNIC, it does not reveal the phone numbers themselves due to privacy safeguards. If you want to confirm who owns the <strong>specific physical SIM card currently inside your handset</strong>:
            </p>

            <div className="p-4 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs leading-relaxed space-y-2 border border-slate-800 shadow-inner">
              <p className="text-doc-brass font-bold">1. Open your SMS messaging app.</p>
              <p>2. Type the letters: <span className="text-emerald-400 font-bold">MNP</span></p>
              <p>3. Send the SMS to shortcode: <span className="text-emerald-400 font-bold">667</span></p>
              <p className="pt-2 text-slate-400">Response format:</p>
              <p className="pl-3 text-amber-300">Name: [Registered Owner Name]</p>
              <p className="pl-3 text-amber-300">CNIC: [Masked CNIC e.g. 35201-*******-1]</p>
              <p className="pl-3 text-amber-300">Connection Date: [DD/MM/YYYY]</p>
            </div>

            <p className="text-slate-500 dark:text-slate-400 text-[11px] italic">
              ℹ️ Note: This only works for the SIM card actively transmitting the SMS. You cannot query someone else&apos;s number using 667 from your phone.
            </p>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 5: Scam Warning Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-rose-600" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Critical Warning: The Reality of &quot;Live SIM Tracker&quot; Scam Sites
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 space-y-4 text-xs font-sans">
            <div className="space-y-2 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              <p>
                If you have seen Facebook ads, YouTube videos, or shady blogs claiming you can &quot;Find anyone&apos;s home address, CNIC, and location by typing their phone number,&quot; <strong>be extremely cautious</strong>.
              </p>
              <p>
                Here is the legal and technical reality under Pakistani law:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800 space-y-1.5">
                <span className="font-mono font-bold text-rose-700 dark:text-rose-400 uppercase text-xs block">1. Highly Illegal (PECA 2016)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Accessing or sharing third-party citizen data is a non-bailable criminal offense under Section 14 &amp; 16 of the Prevention of Electronic Crimes Act.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800 space-y-1.5">
                <span className="font-mono font-bold text-rose-700 dark:text-rose-400 uppercase text-xs block">2. 1,300+ Sites Blocked</span>
                <p className="text-slate-600 dark:text-slate-300">
                  PTA and the National Cyber Crime Investigation Agency (NCCIA) have actively blocked over <strong>1,300+ illegal SIM database sites</strong> and proxy domains.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800 space-y-1.5">
                <span className="font-mono font-bold text-rose-700 dark:text-rose-400 uppercase text-xs block">3. Fake &amp; Dangerous Data</span>
                <p className="text-slate-600 dark:text-slate-300">
                  These sites charge Rs. 500 to Rs. 5,000 via EasyPaisa/JazzCash and return decade-old leaked scraps or fake generated names, while infecting devices with malware.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: What to Do If Count is Higher Than Expected */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              What to Do If You Find an Unrecognized SIM on Your CNIC
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              If the 668 count shows 4 SIMs on Jazz, but you only remember buying 2, <strong>do not panic</strong>. Follow this practical checklist:
            </p>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                <div>
                  <h3 className="font-bold text-doc-ink dark:text-white text-sm">Check for Forgotten Family &amp; Data Devices</h3>
                  <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                    Did you buy a 4G Wi-Fi Cloud device (Jazz Digit, Zong Bolt, Ufone CharJi) or a SIM for a child or parent 3 years ago? Data SIMs are often counted in the total registry.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                <div>
                  <h3 className="font-bold text-doc-ink dark:text-white text-sm">Visit the Operator Franchise in Person</h3>
                  <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                    Take your original CNIC to the official customer service center (CSC/Franchise) of the operator where the extra SIM is registered. Request the representative to print your active numbers list.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                <div>
                  <h3 className="font-bold text-doc-ink dark:text-white text-sm">Biometrically Disown and Surrender the SIM (Form D)</h3>
                  <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                    If an unauthorized number is confirmed, complete the biometric disownment process at the biometric machine. The operator will permanently block the SIM and de-link it from your CNIC within 24–48 hours.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center shrink-0 text-xs">4</span>
                <div>
                  <h3 className="font-bold text-doc-ink dark:text-white text-sm">Lodge a Formal PTA Complaint If the Franchise Delays</h3>
                  <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                    If a franchise representative refuses to remove the unverified number, file an online complaint at the <strong>PTA Complaint Management System (CMS)</strong> at <code>complaint.pta.gov.pk</code> or call the toll-free helpline at <strong>0800-55055</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Statutory Limits & Operator Overview */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              SIM Allocation Rules &amp; Operator Directory (2026)
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="table-scroll-container">
                <table className="w-full text-xs font-sans min-w-[540px]">
                  <thead className="bg-doc-ink text-white text-[11px] font-mono uppercase tracking-wider">
                    <tr>
                      <th className="px-4 py-3 text-left">Category / Network</th>
                      <th className="px-4 py-3 text-left">Statutory Limit</th>
                      <th className="px-4 py-3 text-left">Check Channel</th>
                      <th className="px-4 py-3 text-right">Helpline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Voice SIMs (All Networks Combined)</td>
                      <td className="px-4 py-3 font-mono font-bold text-emerald-600">Max 5 SIMs per CNIC</td>
                      <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300">SMS 668 / cnic.sims.pk</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-doc-seal">PTA 0800-55055</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Data / MBB Broadband SIMs</td>
                      <td className="px-4 py-3 font-mono font-bold text-amber-600">Up to 3 Data SIMs</td>
                      <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300">Included in SVMS breakdown</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-slate-600">Operator Franchise</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Jazz (PMCL)</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Subject to 5-SIM limit</td>
                      <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300">SMS 668</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">111</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Zong (CMPak)</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Subject to 5-SIM limit</td>
                      <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300">SMS 668</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">310</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Telenor &amp; Ufone (PTML)</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Subject to 5-SIM limit</td>
                      <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300">SMS 668</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">345 / 333</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">SCOM (AJK &amp; GB)</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Subject to 5-SIM limit</td>
                      <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300">SMS 668</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">111-726-666</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Genuinely Useful FAQ */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Real Answers, No Fluff)
            </h2>
          </div>

          <div className="space-y-3 font-sans text-xs">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Can I check someone else&apos;s SIM count using their phone number?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                No. PTA regulations and data privacy laws strictly prohibit third-party lookups. The 668 SMS and <code>cnic.sims.pk</code> portals only work by entering a CNIC, and they only return total numbers of connections on that CNIC, not the phone numbers of strangers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Why does my SIM count seem higher than what I actually use?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                This is very common. The most frequent causes are: (1) An old SIM you stopped using that was never formally closed at a franchise, (2) A 4G Wi-Fi dongle or MBB broadband device registered in your name, or (3) A number you bought for a family member years ago.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Is the 668 SMS free or does it deduct balance?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The 668 SMS service costs standard government telecom SMS tariff (around Rs. 2 + tax). If you have zero balance, you can use the official PTA web portal at <code>cnic.sims.pk</code> on Wi-Fi for completely free.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                What is the difference between checking my CNIC&apos;s SIM count and checking my phone&apos;s IMEI status?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                SIM checking (SVMS via 668) checks the legal connection between your <strong>national identity (CNIC)</strong> and cellular networks. Device checking (DIRBS via 8484) checks whether your <strong>physical smartphone handset</strong> is PTA-approved and customs tax compliant.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                How do I permanently remove a SIM I do not recognize?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Visit the customer service center (CSC) or main franchise of the network operator where the SIM is listed with your original CNIC. Ask for a <strong>Biometric Disownment Form (Form D)</strong>. The representative will take your thumb impression to instantly deactivate and purge the line from your record.
              </p>
            </div>
          </div>
        </section>

        {/* Section 9: Related Links */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Identity &amp; Device Verification Utilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/mobile-pta/pta-mobile-registration-guide-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Device DIRBS</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                PTA Mobile Registration Guide 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                DIRBS 8484 IMEI verification and mobile tax calculation.
              </p>
            </Link>

            <Link
              href="/nadra/cnic-new-rules-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-seal font-bold uppercase block">NADRA Identity</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                CNIC New Rules 2026 Directory
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Biometric verification, smart cards, and family tree records.
              </p>
            </Link>

            <Link
              href="/nadra/senior-citizen-card-pakistan-explained-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-emerald-600 font-bold uppercase block">Senior Rights</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Senior Citizen Benefits Explained 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                NADRA facial recognition and statutory public concessions.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
