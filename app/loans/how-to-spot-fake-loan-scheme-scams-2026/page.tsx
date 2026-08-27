import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ComparisonVisual, FAQAccordionVisual } from '@/components/visuals';
import {
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  ShieldAlert,
  Smartphone,
  PhoneCall,
  Landmark,
  FileWarning,
  Lock,
  Layers,
  SearchCheck,
  Building
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Spot Fake Govt Loan Scams 2026 – Protect from Fraud | Pakistan Info Hub',
  description:
    'Protect yourself from fake loan scams in Pakistan: Spot fraudulent WhatsApp/Facebook schemes (PM Youth Loan, Akhuwat, Apni Chhat Apna Ghar), avoid upfront processing fee traps, verify legitimate portals, and report to NCCIA/FIA on 1991.',
  keywords: [
    'fake loan scheme scams Pakistan',
    'Akhuwat fake loan WhatsApp scam',
    'PM youth loan processing fee fraud',
    'Apni Chhat Apna Ghar fake agents',
    'report loan scam FIA 1991 NCCIA',
    'how to verify government loan portal Pakistan',
    'easy loan app scam protection Pakistan',
  ],
  openGraph: {
    title: 'How to Spot Fake Govt Loan Scams 2026 – Fraud Protection Guide',
    description:
      'Essential safety guide on recognizing fake government loan schemes, identifying advance fee scams, and reporting cyber fraud in Pakistan.',
    url: 'https://www.pakistaninfohub.com/loans/how-to-spot-fake-loan-scheme-scams-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/loans/how-to-spot-fake-loan-scheme-scams-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Govt Loans', item: 'https://www.pakistaninfohub.com/loans' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Spot Fake Loan Scams',
          item: 'https://www.pakistaninfohub.com/loans/how-to-spot-fake-loan-scheme-scams-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'How to Spot Fake Government Loan Scheme Scams in Pakistan: Red Flags & NCCIA Reporting Guide',
      description:
        'A comprehensive public protection reference explaining how to identify fraudulent microloan scams, recognize illegal advance fee demands, and verify authentic government schemes.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-20',
      dateModified: '2026-08-21',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/loans/how-to-spot-fake-loan-scheme-scams-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do legitimate government loan schemes charge an upfront processing fee via EasyPaisa or JazzCash?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NO. Official government loan schemes (such as the PM Youth Business Loan, Apni Chhat Apna Ghar, and Punjab Rozgar Scheme) NEVER require applicants to send upfront cash or "registration fees" to private mobile numbers. If an agent or WhatsApp contact demands money before approving a loan, it is guaranteed to be a fraudulent scam.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Akhuwat Foundation offer online or WhatsApp loans?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Akhuwat Foundation does NOT offer online loan applications through WhatsApp, Facebook, or third-party websites. All legitimate Akhuwat interest-free loans require personal visits to their physical branch offices for verification and community guarantees.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I verify if a loan application website is official?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Official government loan initiatives in Pakistan operate exclusively on ".gov.pk" domains (such as pmyp.gov.pk or acag.punjab.gov.pk). Websites ending in .com, .blogspot, .site, or links shared directly inside WhatsApp groups are unverified and should never receive your personal CNIC details.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where should I report a fake loan scam or financial fraud in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Report the scam immediately to the National Cyber Crime Investigation Agency (NCCIA / formerly FIA Cyber Crime) by dialing helpline 1991, filing a digital ticket at complaint.nccia.gov.pk, or lodging a banking complaint with the State Bank of Pakistan (SBP) helpline at 1025.',
          },
        },
      ],
    },
  ],
};

export default function FakeLoanScamProtectionPage() {
  const breadcrumbs = [
    { nameEn: 'Govt Loans', nameUr: 'سرکاری قرضہ سکیمیں' },
    { nameEn: 'Spot Fake Loan Scams', nameUr: 'جعلی قرضہ اسکیموں اور فراڈ سے بچاؤ' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="FINANCIAL SAFETY ADVISORY" labelUr="مالی تحفظ و آگاہی" variant="navy" />
            <VerifiedBadge textEn="NCCIA & SBP FRAUD ALERT 2026" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            How to Spot Fake Govt Loan Scams: Red Flags &amp; Fraud Protection
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              جعلی سرکاری قرضہ سکیموں کی پہچان: ایڈوانس فیس فراڈ سے بچنے کی گائیڈ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Scammers frequently exploit vulnerable citizens by setting up fake WhatsApp groups, social media ads,
            and phishing websites impersonating the PM Youth Loan, Akhuwat Foundation, and Apni Chhat Apna Ghar.
            Learn the major red flags to watch for, what legitimate programs never ask, and how to report fraud.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is the #1 Sign of a Fake Loan Scheme?"
          topicTitleUr="جعلی قرضہ سکیم کی سب سے بڑی نشانی کیا ہے؟"
          answerEn="The #1 red flag is a demand for upfront 'processing fees', 'file charges', or 'insurance deposits' sent to a personal JazzCash/EasyPaisa number. Legitimate government schemes (PM Youth Loan, Apni Chhat Apna Ghar, Akhuwat) NEVER ask for advance money transfers before loan disbursement."
          answerUr="سب سے بڑا فراڈ یہ ہے کہ قرض منظور کرنے کے لیے ایزی پیسہ یا جاز کیش پر ایڈوانس 'فائل چارجز' یا 'پروسیسنگ فیس' مانگی جاتی ہے۔ حکومت پاکستان اور اخوت فاؤنڈیشن کبھی بھی قرض دینے سے پہلے کسی پرائیویٹ نمبر پر پیشگی رقم کا مطالبہ نہیں کرتے۔"
        />

        {/* URGENT WARNING BANNER: Major Red Flags */}
        <section className="p-6 rounded-2xl bg-gradient-to-r from-red-950 via-slate-900 to-doc-ink text-white border-2 border-red-500 shadow-2xl space-y-4">
          <div className="flex items-center gap-3 border-b border-red-500/30 pb-3">
            <ShieldAlert className="w-7 h-7 text-red-400 shrink-0 animate-pulse" />
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-red-300 uppercase">
                CRITICAL WARNING • CONSUMER PROTECTION
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-white">
                4 Dead Giveaways That a Loan Offer is 100% Fake
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-sans">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-red-500/40 space-y-1">
              <span className="font-bold text-red-300 block">1. Advance Payment via Mobile Wallet</span>
              <p className="text-slate-300 leading-relaxed">
                They demand Rs. 1,500 to Rs. 10,000 sent via JazzCash, EasyPaisa, or SadaPay to a personal CNIC/mobile account as &quot;loan registration charges&quot;.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-red-500/40 space-y-1">
              <span className="font-bold text-red-300 block">2. WhatsApp-Only Communication</span>
              <p className="text-slate-300 leading-relaxed">
                All interaction happens through WhatsApp chats, audio messages, and personal mobile calls rather than registered bank branches or official `.gov.pk` portals.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-red-500/40 space-y-1">
              <span className="font-bold text-red-300 block">3. &quot;100% Guaranteed Approval in 2 Hours&quot;</span>
              <p className="text-slate-300 leading-relaxed">
                No bank or microfinance institution can guarantee approval without credit checks, e-CIB history, and verification. Guaranteed approval claims are pure scams.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-red-500/40 space-y-1">
              <span className="font-bold text-red-300 block">4. Fake Akhuwat &quot;Online Loan&quot; Forms</span>
              <p className="text-slate-300 leading-relaxed">
                Akhuwat does <strong>NOT</strong> disburse loans online. Any website or social media page claiming to be &quot;Akhuwat Online Loan Application&quot; is fraudulent.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Side-by-Side Comparison: Genuine Programs vs Scammers */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Genuine Government Loans vs Fraudulent Scammers
            </h2>
          </div>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Evaluation Criteria</th>
                  <th className="px-4 py-3 text-left text-emerald-300">Legitimate Scheme (PMYP / ACAG)</th>
                  <th className="px-4 py-3 text-left text-rose-300">Fraudulent Scammer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Application Channel
                  </td>
                  <td className="px-4 py-3 text-xs text-emerald-700 dark:text-emerald-300 font-medium">
                    Official <code>.gov.pk</code> portal or designated commercial bank branch
                  </td>
                  <td className="px-4 py-3 text-xs text-rose-600 dark:text-rose-400 font-bold">
                    WhatsApp chat, Facebook inbox, or unofficial <code>.com / .site</code> URL
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Upfront Payment
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    Rs. 0 (Zero advance money to personal accounts)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-rose-600 dark:text-rose-400">
                    Demands Rs. 1,500 – 10,000 via mobile wallet before loan approval
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Verification Method
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    NADRA biometric, physical site visit, and formal banking e-CIB report
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Promises instant clearance without checking financial background
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Disbursement Process
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Direct transfer into applicant’s formal bank account in commercial bank
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Claims to send millions directly via EasyPaisa or JazzCash
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 2: Step-by-Step Verification Checklist */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <SearchCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              What to Do Before Applying: 4-Step Verification Checklist
            </h2>
          </div>

          <div className="space-y-3 font-sans text-xs">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  Check the Website Domain Extension (.gov.pk)
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Always inspect the browser address bar. Government loan schemes are hosted exclusively on government servers
                  ending in <strong>.gov.pk</strong> (e.g., <code>https://pmyp.gov.pk/</code> or <code>https://acag.punjab.gov.pk/</code>).
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  Never Disclose Sensitive Banking Credentials
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  No legitimate loan officer will ever ask for your ATM PIN, mobile banking password, CVV number, or One-Time Passwords (OTP) sent to your phone.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  Visit the Local Bank Branch or Akhuwat Office in Person
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  If an individual contacts you offering a loan, take their details and verify them directly with the nearest physical branch of National Bank (NBP), Bank of Punjab (BOP), or Akhuwat before proceeding.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">4</span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  Report Scammer Numbers Immediately to NCCIA (1991)
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Save screenshots of the chat, the fraudulent bank/wallet numbers provided, and report them to prevent other citizens from being defrauded.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Official Complaint & Reporting Channels */}
        <section className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 font-sans">
          <div className="flex items-center gap-2 text-doc-brass font-bold text-sm">
            <PhoneCall className="w-5 h-5 text-emerald-400" />
            <span>Where to Report Loan Fraud &amp; Fake Schemes in Pakistan</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
              <span className="font-bold text-emerald-400 block">NCCIA Cyber Crime Helpline (Formerly FIA)</span>
              <p className="text-slate-300">Dial <strong>1991</strong> or lodge an online complaint at <a href="https://complaint.nccia.gov.pk" target="_blank" rel="noopener noreferrer" className="text-doc-brass underline">complaint.nccia.gov.pk</a>.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
              <span className="font-bold text-emerald-400 block">State Bank Consumer Helpline</span>
              <p className="text-slate-300">For banking scams and illegal lending apps, dial <strong>1025</strong> or email <span className="font-mono">cpd.helpdesk@sbp.org.pk</span>.</p>
            </div>
          </div>
        </section>

        {/* Comparison Visual: Real vs Fake Loan Schemes */}
        <ComparisonVisual
          titleEn="Legitimate Government Loan Schemes vs Fraudulent Scam Red Flags"
          titleUr="سرکاری قرضہ اسکیمیں بمقابلہ جعلی لون مافیا اور فراڈ کے خطرے کی علامات"
          subtitleEn="Side-by-side comparison of official disbursement channels, verification standards, and scammer tactics"
          subtitleUr="بینکنگ ضوابط، فیسوں کی حقیقت اور دھوکہ دہی سے بچاؤ کا تقابلی جائزہ"
          items={[
            {
              titleEn: "Legitimate Government Schemes",
              titleUr: "اصلی سرکاری قرضہ اسکیمیں",
              subtitleEn: "SECP & SBP Regulated Banking",
              subtitleUr: "اسٹیٹ بینک اور حکومت سے منظور شدہ",
              badgeEn: "Verified Legal",
              badgeUr: "تصدیق شدہ",
              badgeVariant: "emerald",
              isPopular: true,
              pointsEn: [
                "Official '.gov.pk' web portals (e.g. pmyp.gov.pk or acag.punjab.gov.pk)",
                "Zero advance registration or processing fee sent to private mobile numbers",
                "Disbursed directly through designated commercial banks (NBP, BOP, Meezan, HBL)",
                "Formal NADRA biometric verification and transparent repayment schedules"
              ],
              recommendedForEn: "Entrepreneurs, farmers, and homeowners seeking authentic state-backed financing",
              recommendedForUr: "کاروبار، زراعت یا گھر کی تعمیر کے لیے باقاعدہ سرکاری بینکوں سے رجوع کرنے والے شہری"
            },
            {
              titleEn: "Fraudulent Loan Scams & Apps",
              titleUr: "جعلی لون ایپس اور فراڈیے",
              subtitleEn: "Unregulated Exploitation & Blackmail",
              subtitleUr: "غیر قانونی ایپس اور بلیک میلنگ",
              badgeEn: "Danger / Scam",
              badgeUr: "فراڈ الرٹ",
              badgeVariant: "seal",
              pointsEn: [
                "Demands advance 'file processing fee' or 'security deposit' via EasyPaisa/JazzCash",
                "Operates exclusively via WhatsApp messages, Facebook ads, or untrusted APKs",
                "Forces access to your smartphone contacts, SMS, and private photo galleries",
                "Extortion, aggressive threats, and public shaming if hidden inflated interest is not paid"
              ],
              recommendedForEn: "Immediate reporting to NCCIA Helpline 1991 and SBP Helpline 1025",
              recommendedForUr: "ایسی ایپس سے فوری طور پر بچیں اور ان کی فوری شکایت NCCIA ہیلپ لائن 1991 پر درج کروائیں"
            }
          ]}
        />

        {/* Section 4: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Verified Government Loan Tools &amp; Calculators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/loans/emi-calculator-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Loan Calculator</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Loan EMI Calculator 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Calculate exact monthly installments for verified bank loans.</p>
            </Link>

            <Link
              href="/loans/apni-chhat-apna-ghar"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Housing Scheme</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Apni Chhat Apna Ghar Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Official guide to Punjab’s 1.5 Million interest-free housing loan.</p>
            </Link>

            <Link
              href="/loans/loan-application-status-tracker-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Status Tracker</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Loan Application Status Tracker →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Track official government loan applications safely.</p>
            </Link>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Loan Scam Protection)"
          titleUr="جعلی قرضہ اسکیموں اور فراڈ سے متعلق اہم سوالات"
          subtitleEn="Essential guidelines on advance wallet payments, Akhuwat WhatsApp myths, verifying gov.pk portals, and reporting fraud"
          subtitleUr="ایڈوانس فیس کا فراڈ، اخوت فاؤنڈیشن کی حقیقت، سرکاری ویب سائٹس کی تصدیق اور رپورٹنگ کی مکمل تفصیل"
          items={[
            {
              questionEn: "Do legitimate government loan schemes charge an upfront processing fee via EasyPaisa or JazzCash?",
              questionUr: "کیا اصلی سرکاری قرضہ اسکیمیں ایزی پیسہ یا جاز کیش پر ایڈوانس فیس مانگتی ہیں؟",
              answerEn: "NO. Official government loan schemes (such as the PM Youth Business Loan, Apni Chhat Apna Ghar, and Punjab Rozgar Scheme) NEVER require applicants to send upfront cash or \"registration fees\" to private mobile numbers. If an agent or WhatsApp contact demands money before approving a loan, it is guaranteed to be a fraudulent scam.",
              answerUr: "ہرگز نہیں! کوئی بھی سرکاری اسکیم واٹس ایپ پر یا کسی پرائیویٹ موبائل نمبر پر ایڈوانس فیس نہیں مانگتی۔ لون کی منظوری سے پہلے پیسے مانگنے والا 100 فیصد دھوکہ باز ہے۔",
            },
            {
              questionEn: "Does Akhuwat Foundation offer online or WhatsApp loans?",
              questionUr: "کیا اخوت فاؤنڈیشن واٹس ایپ یا آن لائن لون فراہم کرتی ہے؟",
              answerEn: "No. Akhuwat Foundation does NOT offer online loan applications through WhatsApp, Facebook, or third-party websites. All legitimate Akhuwat interest-free loans require personal visits to their physical branch offices for verification and community guarantees.",
              answerUr: "نہیں! اخوت فاؤنڈیشن کا کوئی آن لائن یا واٹس ایپ لون سسٹم نہیں ہے۔ اخوت کا بلا سود قرضہ حاصل کرنے کے لیے ان کی قریبی برانچ میں خود جانا پڑتا ہے۔",
            },
            {
              questionEn: "How can I verify if a loan application website is official?",
              questionUr: "کیسے پتہ چلے کہ قرضے کی ویب سائٹ اصلی سرکاری ہے یا جعلی؟",
              answerEn: "Official government loan initiatives in Pakistan operate exclusively on \".gov.pk\" domains (such as pmyp.gov.pk or acag.punjab.gov.pk). Websites ending in .com, .blogspot, .site, or links shared directly inside WhatsApp groups are unverified and should never receive your personal CNIC details.",
              answerUr: "تمام سرکاری اسکیموں کے لنک کے آخر میں لازمی '.gov.pk' آتا ہے۔ ڈاٹ کام، بلاگ اسپاٹ یا واٹس ایپ پر آنے والے لنکس پر کبھی بھی اپنا شناختی کارڈ یا ذاتی معلومات درج نہ کریں۔",
            },
            {
              questionEn: "Where should I report a fake loan scam or financial fraud in Pakistan?",
              questionUr: "لون فراڈ یا بلیک میلنگ کی صورت میں فوری شکایت کہاں درج کروائیں؟",
              answerEn: "Report the scam immediately to the National Cyber Crime Investigation Agency (NCCIA / formerly FIA Cyber Crime) by dialing helpline 1991, filing a digital ticket at complaint.nccia.gov.pk, or lodging a banking complaint with the State Bank of Pakistan (SBP) helpline at 1025.",
              answerUr: "فوری طور پر سائبر کرائم ایجنسی (NCCIA) کی ہیلپ لائن 1991 پر کال کریں، یا اسٹیٹ بینک کی ہیلپ لائن 1025 پر شکایت درج کروائیں۔",
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'National Cyber Crime Investigation Agency (NCCIA)', url: 'https://complaint.nccia.gov.pk/' },
            { label: 'Prime Minister’s Youth Programme (PMYP) Official Portal', url: 'https://pmyp.gov.pk/' },
            { label: 'State Bank of Pakistan (SBP) Consumer Protection', url: 'https://www.sbp.org.pk/' },
            { label: 'Akhuwat Official Website', url: 'https://akhuwat.org.pk/' },
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
