import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  HelpCircle,
  ExternalLink,
  Car,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  FileCheck,
  Smartphone,
  PhoneCall,
  XCircle,
  HelpCircle as QuestionIcon,
  ShieldAlert
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Traffic Challan Paid But Showing Pending / Unpaid Online 2026 – Solution & Timelines | Pakistan Info Hub',
  description:
    'Paid your traffic e-challan but it still shows as pending or unpaid online? Learn why 24–72 hour bank batch sync delays happen in ePay Punjab / 1Link, what proof to save, how to avoid double payment, and PSCA helpline contacts.',
  keywords: [
    'traffic challan paid but showing unpaid online',
    'e-challan pending after payment ePay Punjab',
    'PSCA challan payment not updated',
    '1Link challan payment verification delay',
    'challan paid bank deduction proof TID',
    'Punjab traffic police challan helpline 0800-02222',
  ],
  openGraph: {
    title: 'Traffic Challan Paid But Showing Pending Online – Fix & Resolution 2026',
    description:
      'Step-by-step guide on resolving online e-challan sync delays, verifying payment transaction IDs, avoiding double payments, and contacting safe city helplines.',
    url: 'https://www.pakistaninfohub.com/traffic/challan-paid-but-showing-pending-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/traffic/challan-paid-but-showing-pending-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Traffic & Vehicle Verification', item: 'https://www.pakistaninfohub.com/traffic' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Challan Paid But Showing Pending',
          item: 'https://www.pakistaninfohub.com/traffic/challan-paid-but-showing-pending-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Traffic Challan Paid But Showing Pending or Unpaid Online: Causes, Timelines & Resolution Guide',
      description:
        'A practical diagnostic guide for motorists in Pakistan whose online e-challans remain marked as pending after bank payment deduction.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-20',
      dateModified: '2026-08-21',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/traffic/challan-paid-but-showing-pending-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does it take for a paid traffic challan to update to "Paid" online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'While payments made via ePay Punjab or mobile banking (1Link) are often reconciled within a few hours, batch synchronization between commercial bank ledgers and the Punjab Safe Cities Authority (PSCA) or Traffic Police database can take 24 to 72 hours (up to 3 business days, especially over weekends or public holidays).',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I pay the challan again if it still shows "Unpaid" after 24 hours?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NO! Do not pay the challan a second time. If your bank account or mobile wallet was debited and you received a Transaction ID (TID) or confirmation SMS, your payment is legally recorded. Paying twice will result in duplicate deductions that require extensive bureaucratic paperwork at the Excise or Traffic office to refund.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will my vehicle get blacklisted or stopped by traffic wardens while the status is pending?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. If a traffic officer stops you or questions an unpaid challan, simply present the digital receipt or bank SMS showing the Transaction ID (TID), paid amount, and payment timestamp. Traffic authorities recognize bank gateway sync delays and accept timestamped transaction proofs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who should I contact if the challan remains unpaid after 72 hours?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For Punjab/Lahore PSCA e-challans, call the official toll-free PSCA helpline at 0800-02222 or 15, or lodge a ticket through the PSCA Public Safety App. For Sindh/Karachi e-challans, contact the Sindh Police Traffic helpline at 1915 or CPLC (021-99212626). For Islamabad, dial 1915.',
          },
        },
      ],
    },
  ],
};

export default function ChallanPaidShowingPendingPage() {
  const breadcrumbs = [
    { nameEn: 'Traffic & Vehicle Verification', nameUr: 'ٹریفک و گاڑیوں کی تصدیق' },
    { nameEn: 'Challan Paid But Showing Pending', nameUr: 'چالان ادا کرنے کے بعد آن لائن پینڈنگ کا حل' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="TRAFFIC ADVISORY & TROUBLESHOOTING" labelUr="ٹریفک گائیڈ و حل" variant="seal" />
            <VerifiedBadge textEn="PSCA & 1LINK COMPLIANT ADVISORY" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Traffic Challan Paid But Showing Pending / Unpaid Online (2026 Solution)
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              چالان فیس ادا کر دی لیکن آن لائن پینڈنگ ہے؟ وجوہات اور درست حل
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            If your bank account or JazzCash/EasyPaisa wallet was debited for an e-challan but the official portal
            still marks it as &quot;Pending&quot; or &quot;Unpaid&quot;, do not panic. Learn why 24–72 hour bank gateway synchronization
            delays occur, what proof to retain, and how to verify settlement without paying twice.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="Why Does a Paid Challan Still Show as Pending Online?"
          topicTitleUr="فیس کٹنے کے بعد بھی چالان آن لائن کیوں شو ہو رہا ہے؟"
          answerEn="This is caused by bank reconciliation delays between 1Link/ePay Punjab and the Traffic Police database, typically taking 24 to 72 hours to reflect. DO NOT pay again. Save your bank Transaction ID (TID) / SMS receipt as legal proof; it protects your vehicle from fines and blacklisting."
          answerUr="بینک (1Link) اور ٹریفک پولیس ڈیٹا بیس کے درمیان ڈیٹا سنک ہونے میں 24 سے 72 گھنٹے لگتے ہیں۔ دوبارہ فیس ہرگز ادا نہ کریں۔ اپنے بینک کا ٹرانزیکشن آئی ڈی (TID) یا ایس ایم ایس ثبوت کے طور پر محفوظ رکھیں۔ یہ رسید آپ کی قانونی حفاظت کے لیے کافی ہے۔"
        />

        {/* URGENT ADVISORY: What NOT To Do */}
        <section className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/60 space-y-3">
          <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-serif font-bold text-base">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            <span>Crucial Rule: Do NOT Pay the Challan a Second Time!</span>
          </div>
          <p className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed font-sans">
            Motorists frequently panic and pay a second time when checking the portal an hour later. Government refund
            mechanisms for duplicate e-challan payments involve extensive physical documentation at the Excise/Treasury
            office and can take weeks to process. If your money left your bank, your obligation is fulfilled.
          </p>
        </section>

        {/* Section 1: Why This Synchronization Delay Happens */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Why Online E-Challan Portals Take 24 to 72 Hours to Update
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            When you make an electronic payment via your mobile banking app, the transaction passes through three distinct layers:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold uppercase font-mono text-[10px]">
                LAYER 1 • INSTANT DEBIT
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Your Bank / Mobile Wallet
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Your bank immediately deducts the funds and generates an authenticated Transaction ID (TID) and confirmation SMS.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-purple-600 dark:text-purple-400 font-bold uppercase font-mono text-[10px]">
                LAYER 2 • BATCH CLEARING
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                1Link / ePay Clearing Gateway
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Payment records are compiled into batches and transferred to the State Bank / Government Treasury account.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase font-mono text-[10px]">
                LAYER 3 • DATABASE RECONCILIATION
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Police Safe City Portal Update
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The PSCA or Traffic Police server runs automated nightly scripts to mark matching PSID numbers as &quot;Paid&quot;.
              </p>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 2: Step-by-Step Resolution Guide */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              What You Should Actually Do: 4-Step Resolution Checklist
            </h2>
          </div>

          <div className="space-y-3 font-sans">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
              <div className="space-y-1 text-xs">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  Capture and Save Proof of Payment (TID &amp; SMS)
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Take a clear screenshot of the bank transfer confirmation showing the <strong>Transaction Reference Number (TID)</strong>,
                  the PSID number paid against, the exact date and timestamp, and keep the bank SMS stored on your phone.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
              <div className="space-y-1 text-xs">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  Allow a 24 to 72 Hour Settlement Window
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Do not repeatedly query the portal on the same day. Most payments reconcile within 1 to 2 business days.
                  If the payment was made on Friday evening or over a public holiday, allow until Tuesday morning.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
              <div className="space-y-1 text-xs">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  Verify via the Official ePay Punjab Mobile App
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  The web portal occasionally displays cached records. Open the official <strong>ePay Punjab mobile app</strong>,
                  navigate to the Traffic Challan section, enter your PSID, and check the live financial ledger status.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">4</span>
              <div className="space-y-1 text-xs">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  Contact Safe City or Traffic Police Helpline (If &gt; 72 Hours)
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  If the status remains unpaid after 3 business days, call the official toll-free PSCA helpline at <strong>0800-02222</strong> (Punjab)
                  or <strong>1915</strong> (Sindh/Islamabad). Provide your vehicle registration number, PSID, and bank Transaction ID (TID) for manual clearance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Roadside Stops & Vehicle Transfer Protection */}
        <section className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 font-sans">
          <div className="flex items-center gap-2 text-doc-brass font-bold text-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>Legal Protection: Will My Vehicle Face Blacklisting or Roadside Impound?</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong>No.</strong> Traffic police wardens and Automated Number Plate Recognition (ANPR) cameras flag vehicles
            with unresolved challans. However, if you are stopped at a picket, simply showing your digital payment receipt
            with the Transaction ID (TID) and payment timestamp is accepted as valid legal compliance. Wardens can cross-reference
            the TID in their field device without issuing secondary fines.
          </p>
        </section>

        {/* Section 4: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Traffic &amp; Vehicle Verification Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/traffic/vehicle-verification-online-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Vehicle Registration</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                MTMIS Vehicle Verification 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check owner name, engine/chassis number, and registration status.</p>
            </Link>

            <Link
              href="/traffic/token-tax-calculator-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Excise Tax</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Vehicle Token Tax Calculator 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Calculate annual motor vehicle token taxes for filers vs non-filers.</p>
            </Link>

            <Link
              href="/traffic/e-challan-check-online"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Challan Lookup</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Online E-Challan Check Portal →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Search pending challans by vehicle registration &amp; CNIC.</p>
            </Link>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Pending Challan Resolution)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'How long does it take for a paid traffic challan to update to "Paid" online?',
                a: 'While payments made via ePay Punjab or mobile banking (1Link) are often reconciled within a few hours, batch synchronization between commercial bank ledgers and the Punjab Safe Cities Authority (PSCA) or Traffic Police database can take 24 to 72 hours (up to 3 business days, especially over weekends or public holidays).',
              },
              {
                q: 'Should I pay the challan again if it still shows "Unpaid" after 24 hours?',
                a: 'NO! Do not pay the challan a second time. If your bank account or mobile wallet was debited and you received a Transaction ID (TID) or confirmation SMS, your payment is legally recorded. Paying twice will result in duplicate deductions that require extensive bureaucratic paperwork at the Excise or Traffic office to refund.',
              },
              {
                q: 'Will my vehicle get blacklisted or stopped by traffic wardens while the status is pending?',
                a: 'No. If a traffic officer stops you or questions an unpaid challan, simply present the digital receipt or bank SMS showing the Transaction ID (TID), paid amount, and payment timestamp. Traffic authorities recognize bank gateway sync delays and accept timestamped transaction proofs.',
              },
              {
                q: 'Who should I contact if the challan remains unpaid after 72 hours?',
                a: 'For Punjab/Lahore PSCA e-challans, call the official toll-free PSCA helpline at 0800-02222 or 15, or lodge a ticket through the PSCA Public Safety App. For Sindh/Karachi e-challans, contact the Sindh Police Traffic helpline at 1915 or CPLC (021-99212626). For Islamabad, dial 1915.',
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
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Punjab Safe Cities Authority (PSCA) E-Challan Portal', url: 'https://echallan.psca.gop.pk/' },
            { label: 'ePay Punjab Government Financial Gateway', url: 'https://epay.punjab.gov.pk/' },
            { label: 'Punjab Police 15 & Traffic Advisory Services', url: 'https://punjabpolice.gov.pk/' },
            { label: 'Islamabad Traffic Police (ITP) E-Challan Services', url: 'https://islamabadpolice.gov.pk/' },
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
