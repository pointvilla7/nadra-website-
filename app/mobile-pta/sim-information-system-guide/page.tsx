import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Radio,
  PhoneCall,
  Lock,
  UserCheck,
  AlertCircle,
  Smartphone,
  Layers,
  FileCheck,
  Building
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PTA SIM Information System Guide 2026: *8888#, 668 & Fraud Protection | Pakistan Info Hub',
  description:
    'Official civic guide to checking SIM cards registered against your CNIC in Pakistan: How to use PTA SIM Information System (*8888# and 668 SMS), understand the 5-SIM biometric limit, and block unauthorized fraudulent numbers at operator franchises.',
  keywords: [
    'PTA SIM information system guide 2026',
    'how to check SIMs on my CNIC *8888#',
    'PTA 668 SMS CNIC check free',
    'maximum SIM limit per CNIC Pakistan 5 SIMs',
    'how to block unknown SIM on my name PTA',
    'cnic sims pk official portal guide',
  ],
  openGraph: {
    title: 'PTA SIM Information System Guide 2026: *8888#, 668 & Fraud Protection',
    description:
      'Step-by-step self-service guide to checking registered SIM cards on your CNIC, 5-SIM biometric limit, and blocking unauthorized telecom numbers in Pakistan.',
    url: 'https://www.pakistaninfohub.com/mobile-pta/sim-information-system-guide',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/mobile-pta/sim-information-system-guide' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Mobile & PTA Services', item: 'https://www.pakistaninfohub.com/mobile-pta' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'PTA SIM Information System Guide',
          item: 'https://www.pakistaninfohub.com/mobile-pta/sim-information-system-guide',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'PTA SIM Information System: How to Verify SIMs on Your CNIC and Block Fraudulent Numbers',
      description:
        'A comprehensive self-protection civic guide on how citizens in Pakistan can verify telecom SIM cards registered against their national ID using *8888#, 668 SMS, and the official PTA SIM portal.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/mobile-pta/sim-information-system-guide',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the maximum number of SIM cards a citizen can register on one CNIC in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under PTA telecom regulations, an individual citizen can register a maximum of 5 voice SIM cards across all cellular operators (Jazz, Zong, Telenor, Ufone) plus up to 3 data-only Broadband SIM cards per CNIC.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I check how many SIM cards are registered on my CNIC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can check your SIM count through two official self-service methods: (1) Send your 13-digit CNIC number (without dashes) via SMS to shortcode 668, or (2) Dial *8888# from your mobile phone. You will receive an operator-wise breakdown of all active SIMs.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if I find an unauthorized or unknown SIM registered on my CNIC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Visit the nearest customer service center (franchise) of the relevant cellular operator with your original CNIC. Request immediate biometric disowning and blocking of the unauthorized SIM number to protect yourself from identity theft and cybercrime liability.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can someone check SIM information of another person online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. To protect citizen privacy and prevent harassment, PTA SIM verification is designed strictly for personal self-checking via your own mobile device. Unauthorized inquiry of third-party telecom data is a punishable offense under the Prevention of Electronic Crimes Act (PECA).',
          },
        },
      ],
    },
  ],
};

export default function SimInformationSystemGuidePage() {
  const breadcrumbs = [
    { nameEn: 'Mobile & PTA Services', nameUr: 'موبائل و پی ٹی اے سروسز' },
    { nameEn: 'PTA SIM Information Guide', nameUr: 'پی ٹی اے سم معلومات سسٹم گائیڈ 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="PTA TELECOM SECURITY" labelUr="پی ٹی اے ٹیلی کام سیکیورٹی" variant="seal" />
            <VerifiedBadge textEn="PTA SIM COMPLIANCE & 668 VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            PTA SIM Information System Guide 2026: *8888#, 668 &amp; Fraud Protection
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              شناختی کارڈ پر جاری شدہ سمز کی تصدیق، 5 سمز کی حد اور غیر متعلقہ نمبرز بلاک کروانے کا طریقہ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Protect your identity and avoid telecom fraud. Learn how to verify the exact number of active cellular SIM cards
            registered on your CNIC using PTA&apos;s official self-service shortcodes (668 and *8888#), understand legal biometric limits,
            and instantly block unauthorized numbers at operator franchises.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How Do You Check Active SIMs on Your CNIC and What is the Legal Limit in Pakistan?"
          topicTitleUr="اپنے شناختی کارڈ پر سمز کیسے چیک کریں اور قانونی حد کیا ہے؟"
          answerEn="You can check your registered SIM count by sending your 13-digit CNIC (without dashes) via SMS to 668 or dialing *8888#. Under PTA regulations, a single citizen can register a maximum of 5 voice SIMs across all mobile operators. Any unrecognized SIM should be immediately blocked at the operator's franchise with your original CNIC."
          answerUr="اپنے شناختی کارڈ کے 13 ہندسے بغیر ڈیش کے 668 پر ایس ایم ایس بھیجیں یا *8888# ڈائل کریں۔ پی ٹی اے کے تحت ایک شناختی کارڈ پر زیادہ سے زیادہ 5 وائس سمز رجسٹر ہو سکتی ہیں۔ کوئی بھی غیر متعلقہ سم نظر آنے پر متعلقہ کمپنی کی فرنچائز جا کر اصل شناختی کارڈ کے ساتھ فوری بلاک کروائیں۔"
        />

        {/* Section 1: 3 Official Self-Check Methods */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Radio className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Official Self-Service Methods to Check Your SIM Count
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">SMS CNIC to 668</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Open your messaging app, type your 13-digit CNIC number without any spaces or dashes (e.g. <code>3520180912345</code>), and send it to <strong>668</strong>. You will receive an operator-wise count (Jazz, Zong, Telenor, Ufone).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Dial USSD *8888#</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Dial <strong>*8888#</strong> directly from any registered SIM card in Pakistan. Follow the on-screen USSD prompts to view active SIM subscriptions linked to your biometric profile.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Official PTA Web Portal</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Visit the official <strong>cnic.sims.pk</strong> web portal, enter your CNIC number, solve the security CAPTCHA, and view your verified telecom registration record.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Statutory Limits & Security Rules */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Lock className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Statutory SIM Limits &amp; Biometric Regulations in Pakistan
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-2">
              <span className="font-bold text-doc-brass text-sm block">1. 5-SIM Biometric Cap per CNIC</span>
              <p className="text-slate-300 leading-relaxed">
                Under PTA regulations and National Action Plan (NAP) telecom directives, a maximum of <strong>5 active voice SIM cards</strong> can be registered against a single CNIC across all cellular mobile operators combined.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-2">
              <span className="font-bold text-emerald-400 text-sm block">2. Broadband &amp; Data SIM Allowance</span>
              <p className="text-slate-300 leading-relaxed">
                Citizens are additionally allowed up to <strong>3 dedicated data-only / wireless broadband SIMs</strong> (for 4G Wi-Fi routers and dongles) beyond the 5-voice SIM cap.
              </p>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 3: How to Block Unauthorized SIMs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              How to Block Unauthorized SIMs Registered in Your Name
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-3 font-sans text-xs">
            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm">
              <AlertCircle className="w-5 h-5" />
              <span>Immediate Protocol for Unrecognized Telecom Numbers</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              If the 668 SMS inquiry reveals active SIM cards from a network you never purchased, take these immediate actions to prevent criminal misuse of your identity:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-slate-800 dark:text-slate-200">
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold block">1. Visit Franchise</span>
                <p className="text-slate-600 dark:text-slate-300">Go to the official customer care center of the operator (Jazz, Zong, Telenor, Ufone) with your original physical CNIC.</p>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold block">2. Biometric Disownment</span>
                <p className="text-slate-600 dark:text-slate-300">Fill out the official SIM Disownment Form and perform biometric thumb verification on the BVS device.</p>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold block">3. Lodge PTA Complaint</span>
                <p className="text-slate-600 dark:text-slate-300">If the franchise delays, file a formal complaint at <code>complaint.pta.gov.pk</code> or call PTA helpline <strong>0800-55055</strong>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related PTA &amp; Identity Resources on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/mobile-pta/imei-check-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Device Status</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                PTA IMEI Status Check (8484) →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check if a mobile device is PTA approved or blocked.</p>
            </Link>

            <Link
              href="/mobile-pta/tax-calculator-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Tax Estimator</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                PTA Mobile Tax Calculator 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Calculate Passport vs CNIC mobile registration duty.</p>
            </Link>

            <Link
              href="/nadra/lost-stolen-cnic-replacement-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Identity Security</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Lost CNIC Replacement Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Protect your identity if your physical CNIC was misplaced.</p>
            </Link>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (PTA SIM Verification)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'What is the maximum number of SIM cards a citizen can register on one CNIC in Pakistan?',
                a: 'Under PTA telecom regulations, an individual citizen can register a maximum of 5 voice SIM cards across all cellular operators (Jazz, Zong, Telenor, Ufone) plus up to 3 data-only Broadband SIM cards per CNIC.',
              },
              {
                q: 'How do I check how many SIM cards are registered on my CNIC?',
                a: 'You can check your SIM count through two official self-service methods: (1) Send your 13-digit CNIC number (without dashes) via SMS to shortcode 668, or (2) Dial *8888# from your mobile phone. You will receive an operator-wise breakdown of all active SIMs.',
              },
              {
                q: 'What should I do if I find an unauthorized or unknown SIM registered on my CNIC?',
                a: 'Visit the nearest customer service center (franchise) of the relevant cellular operator with your original CNIC. Request immediate biometric disowning and blocking of the unauthorized SIM number to protect yourself from identity theft and cybercrime liability.',
              },
              {
                q: 'Can someone check SIM information of another person online?',
                a: 'No. To protect citizen privacy and prevent harassment, PTA SIM verification is designed strictly for personal self-checking via your own mobile device. Unauthorized inquiry of third-party telecom data is a punishable offense under the Prevention of Electronic Crimes Act (PECA).',
              },
            ].map((faq, idx) => (
              <div key={idx} className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">{faq.q}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Statutory Sources Cited:</p>
          {[
            { label: 'PTA SIM Information System (CNIC SIM Verification)', url: 'https://cnic.sims.pk/' },
            { label: 'Pakistan Telecommunication Authority (PTA) Consumer Complaints', url: 'https://complaint.pta.gov.pk/' },
            { label: 'Prevention of Electronic Crimes Act (PECA 2016)', url: 'https://pakistancode.gov.pk/' },
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
