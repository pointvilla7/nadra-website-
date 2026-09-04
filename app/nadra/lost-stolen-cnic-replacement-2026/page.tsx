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
  CreditCard,
  FileCheck,
  Smartphone,
  ShieldAlert,
  Building,
  Check,
  RotateCcw,
  AlertCircle,
  FileText,
  PhoneCall
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lost or Stolen CNIC Replacement Guide 2026 – Reprint vs Renewal Rules | Pakistan Info Hub',
  description:
    'Lost or had your Pakistani CNIC stolen? Step-by-step 2026 guide on applying for a Duplicate/Reprint Smart CNIC via the Pak-ID app or NADRA centers. Fee table (Rs. 750 Normal, Rs. 1,500 Urgent, Rs. 2,500 Executive), police FIR guidelines, token slip usage, and Reprint vs Renewal distinction.',
  keywords: [
    'lost stolen CNIC replacement NADRA 2026',
    'NADRA CNIC reprint fee normal urgent executive',
    'duplicate Smart CNIC apply online Pak ID',
    'difference between CNIC reprint and renewal NADRA',
    'stolen CNIC police FIR report Roznamcha',
    'NADRA token slip temporary ID validity',
    'can I change address in lost CNIC reprint',
    'NADRA helpline 051 111 786 100',
  ],
  openGraph: {
    title: 'Lost or Stolen CNIC Replacement Guide 2026 – NADRA Reprint vs Renewal',
    description:
      'Step-by-step procedure to replace a lost, snatched, or damaged Pakistani CNIC: Pak-ID online apply, police reporting, fee structure, and token slip rules.',
    url: 'https://www.pakistaninfohub.com/nadra/lost-stolen-cnic-replacement-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/nadra/lost-stolen-cnic-replacement-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'NADRA Services', item: 'https://www.pakistaninfohub.com/nadra' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Lost Stolen CNIC Replacement 2026',
          item: 'https://www.pakistaninfohub.com/nadra/lost-stolen-cnic-replacement-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Lost or Stolen CNIC Replacement Guide 2026: Reprint vs Renewal Rules & Pak-ID Online Apply',
      description:
        'A comprehensive public documentation guide outlining what to do when a Pakistani CNIC is lost or stolen, how to apply for a Duplicate Reprint, police FIR filing, fees, and token slip validity.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-09-03',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/nadra/lost-stolen-cnic-replacement-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the exact difference between applying for a "Reprint" versus "Renewal" for a lost CNIC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You apply for a "Reprint" (Duplicate) when your lost or damaged card is STILL VALID (has not crossed its expiry date); it retains your original expiry date and 13-digit CNIC number. You apply for a "Renewal" ONLY if the lost card was already expired or within 6 months of expiring, which grants a fresh 10-year validity.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I change my address or marital status while applying for a lost CNIC replacement?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The "Reprint" category strictly prints a duplicate of your existing database record without modifications. If you need to change your address, name spelling, or marital status, you must select the "Modification" category and provide supporting legal proofs (Nikkahnama, utility bill, or registry).',
          },
        },
        {
          '@type': 'Question',
          name: 'Is a Police FIR / Roznamcha report mandatory before applying for a lost card?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If your card was stolen or snatched in a crime, lodging a Police FIR / Daily Diary (Roznamcha) report at the nearest Police Station or Police Khidmat Markaz (PKM) is strongly recommended to protect you against identity theft, fraudulent SIM issuance, or unauthorized financial transactions. For simple misplacement at home, NADRA allows direct online application via Pak-ID without demanding an FIR.',
          },
        },
        {
          '@type': 'Question',
          name: 'What can I use the NADRA Acknowledgment / Token Slip for while waiting for delivery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The token slip containing your Tracking ID and QR code serves as interim proof of identity for routine domestic travel boarding checks, police verification, and civic interactions. However, it CANNOT be used for high-security biometric transactions such as opening new bank accounts, issuing cellular SIMs, or executing property registries, which strictly require the physical Smart Card microchip.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if my lost CNIC was already expired years ago?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Select the "Renewal" category on the Pak-ID app or at the NRC counter. You do not need to pay for both Reprint and Renewal; the single renewal process replaces your lost card and extends validity for a fresh 10-year cycle.',
          },
        },
      ],
    },
  ],
};

export default function LostStolenCnicReplacementPage() {
  const breadcrumbs = [
    { nameEn: 'NADRA Services', nameUr: 'نادرا سروسز' },
    { nameEn: 'Lost Stolen CNIC Replacement', nameUr: 'گم شدہ یا چوری شناختی کارڈ کا متبادل 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="NADRA IDENTITY REPLACEMENT" labelUr="شناختی کارڈ دوبارہ اجراء" variant="seal" />
            <VerifiedBadge textEn="NADRA PAK-ID VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Lost or Stolen CNIC Replacement Guide 2026: Reprint vs Renewal Rules &amp; Pak-ID Apply
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              گم شدہ یا چوری شناختی کارڈ کا دوبارہ اجراء: ری پرنٹ بمقابلہ تجدید اور فیس شیڈول
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Losing your Computerized National Identity Card (CNIC) can feel stressful, but replacing it is a standardized,
            reassuring process. Understand whether to apply under &quot;Reprint&quot; or &quot;Renewal&quot;, how to report theft
            to prevent identity fraud, the 2026 fee structure, and how to apply online via the Pak-ID app.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="Should I Apply for a 'Reprint' or 'Renewal' for a Lost CNIC?"
          topicTitleUr="گم شدہ کارڈ کے لیے ری پرنٹ کروائیں یا تجدید؟"
          answerEn="If your lost CNIC was unexpired (still within its validity date), apply under 'Reprint' (Duplicate) to receive an exact replacement retaining your original expiry date. If your lost card had already expired or has less than 6 months left, apply under 'Renewal' for a fresh 10-year validity. Both can be done online via the Pak-ID app."
          answerUr="اگر گم شدہ شناختی کارڈ کی مدت ختم نہیں ہوئی تھی تو 'ری پرنٹ' (ڈپلیکیٹ) کی درخواست دیں تاکہ پرانی تاریخ والا کارڈ مل جائے۔ اگر کارڈ پہلے سے ایکسپائر تھا تو 'تجدید' (Renewal) کروائیں جس سے 10 سال کی نئی میعاد ملے گی۔ دونوں پاک آئی ڈی ایپ سے آن لائن ہو جاتے ہیں۔"
        />

        {/* Section 1: Immediate Action Steps (FIR & Identity Shield) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Immediate Safety Steps: What to Do First
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">File Police Report (If Stolen)</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                If your wallet or card was stolen/snatched, visit the nearest Police Station or <strong>Police Khidmat Markaz (PKM)</strong> to enter a Daily Diary (Roznamcha/FIR) entry. This provides legal protection if your card is misused in unauthorized activity.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Notify Your Banks</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Call your bank helplines to place a temporary watch on mobile banking or ATM withdrawals if your ATM cards or personal checkbooks were misplaced alongside your CNIC.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Initiate NADRA Application</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Open the official <strong>Pak-ID mobile app</strong> or visit an NRC counter immediately. Once your application is lodged, NADRA&apos;s system registers the card status and generates a trackable token.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Reprint vs Renewal vs Modification Matrix */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <RotateCcw className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Reprint vs. Renewal vs. Modification: Which Category Do You Need?
            </h2>
          </div>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Category Name</th>
                  <th className="px-4 py-3 text-left">When to Select</th>
                  <th className="px-4 py-3 text-left">Validity of New Card</th>
                  <th className="px-4 py-3 text-left">Can Address/Data Change?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Reprint (Duplicate)
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Lost, stolen, or physically broken CNIC that is <strong>still unexpired</strong>
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    Retains original remaining validity
                  </td>
                  <td className="px-4 py-3 text-xs text-red-600 dark:text-red-400 font-bold">
                    No (Exact copy of existing data)
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Renewal
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Lost card was already expired, or expiring within the next 6 months
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                    Fresh 10 Years Validity
                  </td>
                  <td className="px-4 py-3 text-xs text-red-600 dark:text-red-400 font-bold">
                    No (Data remains unchanged)
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Modification
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Lost card + you also need to update marital status, present/permanent address, or spelling
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    Fresh 10 Years Validity
                  </td>
                  <td className="px-4 py-3 text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                    Yes (Supporting proof required)
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>

        {/* Section 3: Official Fee Schedule Table */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Official Lost / Duplicate CNIC Fee Structure 2026
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Official NADRA processing fees for issuing a replacement Smart National Identity Card (SNIC) with microchip:
          </p>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Processing Tier</th>
                  <th className="px-4 py-3 text-left">Official Fee (Smart CNIC)</th>
                  <th className="px-4 py-3 text-left">Delivery Timeframe</th>
                  <th className="px-4 py-3 text-left">Service Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Normal Category
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                    PKR 750
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Approximately 31 Working Days
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Standard home delivery via Pakistan Post / NRC counter pickup
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Urgent Category
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-doc-seal">
                    PKR 1,500
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Approximately 15 Working Days
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Fast-tracked printing and prioritized postal dispatch
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Executive Category
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    PKR 2,500
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Approximately 7 Working Days
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Priority Mega Center processing, VIP lounge &amp; express courier
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 4: Applying Online via Pak-ID vs NRC Center */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              How to Apply: Pak-ID Mobile App vs. Physical NRC Center
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-doc-brass" /> Method A: Pak-ID Mobile App (100% Online)
              </h3>
              <ol className="space-y-1.5 text-slate-600 dark:text-slate-300 list-decimal list-inside leading-relaxed">
                <li>Download the official <strong>Pak-ID app</strong> (Google Play / App Store) or visit <code>id.nadra.gov.pk</code>.</li>
                <li>Log in with your existing credentials and select <strong>&quot;Issue Identity Document&quot; → &quot;CNIC&quot; → &quot;Reprint&quot;</strong>.</li>
                <li>Enter your 13-digit CNIC number and capture a fresh white-background selfie photo.</li>
                <li>Use the app camera to scan all 8 fingerprints on plain white paper under bright natural lighting.</li>
                <li>Pay the fee via Debit/Credit Card or 1Link e-Pay PSID and specify your home postal delivery address.</li>
              </ol>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white flex items-center gap-2">
                <Building className="w-4 h-4 text-doc-seal" /> Method B: Physical NADRA Registration Center (NRC)
              </h3>
              <ol className="space-y-1.5 text-slate-600 dark:text-slate-300 list-decimal list-inside leading-relaxed">
                <li>Visit any nearby NADRA Registration Center, Executive Center, or 24/7 Mega Center.</li>
                <li>Get a token for &quot;Lost CNIC / Duplicate&quot; at the reception desk.</li>
                <li>Provide your 13-digit CNIC number or show a copy/photo of your old card, B-Form, or passport.</li>
                <li>Complete live digital biometric fingerprint capture, digital signature, and facial photograph at the data entry counter.</li>
                <li>Collect your printed official <strong>Acknowledgment Token Slip</strong> containing your live Tracking ID.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 5: What the Acknowledgment Token Slip Can & Cannot Do */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Temporary ID: What the NADRA Token Slip Can &amp; Cannot Be Used For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2">
              <span className="font-bold text-emerald-800 dark:text-emerald-300 text-sm block">
                ✓ What the Token Slip CAN Be Used For
              </span>
              <ul className="text-slate-700 dark:text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                <li>Interim identification for routine domestic travel (domestic airport checks, inter-city railway).</li>
                <li>Proof of identity during routine police stop-and-search verifications.</li>
                <li>Tracking live card printing and postal dispatch progress online at <code>track.nadra.gov.pk</code>.</li>
                <li>Collecting your physical card at the NRC counter once printed.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 space-y-2">
              <span className="font-bold text-red-800 dark:text-red-300 text-sm block">
                ✕ What the Token Slip CANNOT Be Used For
              </span>
              <ul className="text-slate-700 dark:text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                <li>Opening fresh bank accounts or withdrawing over-the-counter cash requiring biometric verification.</li>
                <li>Issuing or transferring mobile cellular SIM cards (requires live BVS biometric machine scan).</li>
                <li>International border immigration or applying for new international visas.</li>
                <li>Executing registered property sale deeds (Intiqal/Registry) before a Sub-Registrar.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step Lost or Stolen CNIC Replacement Workflow"
          titleUr="گمشدہ یا چوری شدہ شناختی کارڈ کے متبادل کا 4 مرحلہ وار طریقہ"
          subtitleEn="From police report to Pak-ID reprint application and secure card receipt"
          subtitleUr="پولیس روزنامچہ رپورٹ سے لے کر نادرا درخواست اور نئے کارڈ کے حصول تک کے مراحل"
          steps={[
            {
              number: 1,
              titleEn: "Police Report (If Stolen)",
              titleUr: "پولیس روزنامچہ رپورٹ (اگر کارڈ چھینا گیا ہو)",
              descEn: "Lodge a Daily Diary (Roznamcha) report at your local Police Station or Khidmat Markaz (PKM) to prevent identity fraud.",
              descUr: "شناختی کارڈ چوری ہونے پر فوری قریبی تھانے یا خدمت مرکز میں روزنامچہ رپورٹ درج کروائیں تاکہ کوئی غلط استعمال نہ کر سکے۔",
              tagEn: "FIR / PKM",
              tagUr: "پولیس رپورٹ",
            },
            {
              number: 2,
              titleEn: "Select Reprint (Duplicate)",
              titleUr: "ڈپلیکیٹ (ری پرنٹ) کا انتخاب",
              descEn: "Log into Pak-ID mobile app / portal or visit NRC; choose 'Reprint' if unexpired, or 'Renewal' if already expired.",
              descUr: "پاک آئی ڈی پورٹل یا نادرا سینٹر پر 'ری پرنٹ' منتخب کریں (اگر تاریخ ختم ہو چکی ہو تو 'تجدید' منتخب کریں)۔",
              tagEn: "Pak-ID / NRC",
              tagUr: "نادرا درخواست",
            },
            {
              number: 3,
              titleEn: "Biometric Verification & Fee",
              titleUr: "بائیومیٹرک تصدیق اور فیس ادائیگی",
              descEn: "Complete camera/live scanner fingerprint capture and pay statutory fee (Normal PKR 750 Smart, Urgent PKR 1,500).",
              descUr: "موبائل کیمرے یا نادرا کاؤنٹر پر فنگر پرنٹس اسکین کروائیں اور مقررہ فیس جمع کروائیں۔",
              tagEn: "Biometrics",
              tagUr: "فنگر پرنٹس",
            },
            {
              number: 4,
              titleEn: "Tracking & Card Collection",
              titleUr: "8400 ٹریکنگ اور نیا کارڈ وصولی",
              descEn: "Track production status using your 11-digit Tracking ID; collect card from NRC counter or receive via home courier.",
              descUr: "8400 ایس ایم ایس سے پراسیس ٹریک کریں اور پرنٹ شدہ نیا اسمارٹ کارڈ نادرا سینٹر یا بذریعہ ڈاک وصول کریں۔",
              tagEn: "Card Delivered",
              tagUr: "کارڈ وصولی",
            },
          ]}
        />

        {/* Section 6: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related NADRA Identity Verification Tools on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <Link
              href="/nadra/cnic-new-rules-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Card Policy</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                CNIC New Rules 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Latest biometric &amp; family registration regulations.</p>
            </Link>

            <Link
              href="/nadra/nadra-tracking-id-check-online-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Card Logistics</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Track Duplicate Card →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check reprint status via 8400 SMS &amp; Pak-ID portal.</p>
            </Link>

            <Link
              href="/nadra/b-form-frc-status-check"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Family Tree</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                B-Form &amp; FRC Status Check →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Verify family certificates &amp; child birth records.</p>
            </Link>

            <Link
              href="/nadra/pak-id-biometric-verification-fix"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">App Helper</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Pak-ID Biometric Fingerprint Fix →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Resolve camera scanning &amp; fingerprint errors.</p>
            </Link>
          </div>
        </section>

        {/* Section 7: FAQs */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Lost CNIC Replacement)"
          titleUr="گمشدہ شناختی کارڈ کے متبادل سے متعلق اہم سوالات"
          subtitleEn="Essential guidelines on reprint vs renewal, police reports, interim token usage, and address modifications"
          subtitleUr="ری پرنٹ بمقابلہ تجدید، پولیس رپورٹ کی قانونی حیثیت، نادرا ٹوکن پرچی کا استعمال اور تفصیلات"
          items={[
            {
              questionEn: "What is the exact difference between applying for a \"Reprint\" versus \"Renewal\" for a lost CNIC?",
              questionUr: "گمشدہ شناختی کارڈ کے لیے 'ری پرنٹ' اور 'تجدید' کی درخواست میں کیا فرق ہے؟",
              answerEn: "You apply for a \"Reprint\" (Duplicate) when your lost or damaged card is STILL VALID (has not crossed its expiry date); it retains your original expiry date and 13-digit CNIC number. You apply for a \"Renewal\" ONLY if the lost card was already expired or within 6 months of expiring, which grants a fresh 10-year validity.",
              answerUr: "اگر کارڈ کی معیاد ابھی باقی تھی تو 'ری پرنٹ' کی درخواست دی جاتی ہے جس پر پرانی ایکسپائری برقرار رہتی ہے۔ اگر کارڈ کی تاریخ ختم ہو چکی تھی تو 'تجدید' کروائی جاتی ہے جس سے نیا 10 سالہ کارڈ جاری ہوتا ہے۔",
            },
            {
              questionEn: "Can I change my address or marital status while applying for a lost CNIC replacement?",
              questionUr: "کیا گمشدہ کارڈ بنواتے وقت پتہ یا ازدواجی حیثیت تبدیل کروائی جا سکتی ہے؟",
              answerEn: "No. The \"Reprint\" category strictly prints a duplicate of your existing database record without modifications. If you need to change your address, name spelling, or marital status, you must select the \"Modification\" category and provide supporting legal proofs (Nikkahnama, utility bill, or registry).",
              answerUr: "نہیں! ری پرنٹ میں پرانا ڈیٹا من و عن پرنٹ ہوتا ہے۔ اگر پتہ یا ازدواجی حیثیت تبدیل کروانی ہو تو 'ترمیم (Modification)' کا انتخاب کریں اور نکاح نامہ یا یوٹیلیٹی بل فراہم کریں۔",
            },
            {
              questionEn: "Is a Police FIR / Roznamcha report mandatory before applying for a lost card?",
              questionUr: "کیا گمشدہ کارڈ کے لیے تھانے میں روزنامچہ رپورٹ درج کروانا لازمی ہے؟",
              answerEn: "If your card was stolen or snatched in a crime, lodging a Police FIR / Daily Diary (Roznamcha) report at the nearest Police Station or Police Khidmat Markaz (PKM) is strongly recommended to protect you against identity theft, fraudulent SIM issuance, or unauthorized financial transactions. For simple misplacement at home, NADRA allows direct online application via Pak-ID without demanding an FIR.",
              answerUr: "اگر کارڈ چھینا گیا ہو تو فوری پولیس روزنامچہ درج کروائیں تاکہ غیر قانونی استعمال سے محفوظ رہ سکیں۔ اگر کارڈ گھر میں کہیں گم ہو گیا ہو تو نادرا پاک آئی ڈی ایپ سے براہ راست بغیر رپورٹ کے بھی نیا کارڈ بن سکتا ہے۔",
            },
            {
              questionEn: "What can I use the NADRA Acknowledgment / Token Slip for while waiting for delivery?",
              questionUr: "نیا کارڈ بننے کے دوران نادرا کی ٹوکن پرچی کن کاموں کے لیے استعمال ہو سکتی ہے؟",
              answerEn: "The token slip containing your Tracking ID and QR code serves as interim proof of identity for routine domestic travel boarding checks, police verification, and civic interactions. However, it CANNOT be used for high-security biometric transactions such as opening new bank accounts, issuing cellular SIMs, or executing property registries, which strictly require the physical Smart Card microchip.",
              answerUr: "ٹوکن پرچی ملکی سفر اور پولیس چیکنگ میں عارضی شناخت کے طور پر قابل قبول ہے۔ البتہ نیا بینک اکاؤنٹ کھولنے، نئی سم نکلوانے یا جائیداد کی رجسٹری کے لیے اصل کارڈ کا ہونا لازمی ہے۔",
            },
            {
              questionEn: "What should I do if my lost CNIC was already expired years ago?",
              questionUr: "اگر گم ہونے والے شناختی کارڈ کی معیاد کئی سال پہلے ختم ہو چکی تھی تو کیا کریں؟",
              answerEn: "Select the \"Renewal\" category on the Pak-ID app or at the NRC counter. You do not need to pay for both Reprint and Renewal; the single renewal process replaces your lost card and extends validity for a fresh 10-year cycle.",
              answerUr: "آپ پاک آئی ڈی ایپ یا نادرا سینٹر پر 'تجدید (Renewal)' کی کیٹیگری منتخب کریں، اس سے ایک ہی فیس میں گمشدہ کارڈ منسوخ ہو کر نیا 10 سالہ کارڈ جاری ہو جائے گا۔",
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'NADRA Pak-Identity Official Portal', url: 'https://id.nadra.gov.pk/' },
            { label: 'National Database and Registration Authority (NADRA) Headquarters', url: 'https://www.nadra.gov.pk/' },
            { label: 'NADRA Official 24/7 Helpline: 051-111-786-100 / Mobile: 1777', url: 'https://www.nadra.gov.pk/contact-us/' },
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
