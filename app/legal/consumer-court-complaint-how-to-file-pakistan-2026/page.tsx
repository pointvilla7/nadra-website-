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
  Scale,
  Building,
  FileCheck,
  Send,
  FileText,
  BadgeCheck,
  ShoppingBag,
  Receipt,
  Gavel,
  ShieldAlert,
  AlertCircle,
  Truck,
  Check
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to File Consumer Court Complaint in Pakistan (2026): Legal Notice & DCPA | Pakistan Info Hub',
  description:
    'Step-by-step guide to filing a consumer court case in Pakistan without a lawyer: How to write the mandatory 15-day legal notice, District Consumer Court filing on plain paper with zero court fees, and the fast-track District Consumer Protection Authority (DCPA) route in Punjab.',
  keywords: [
    'consumer court complaint pakistan 2026',
    'how to file consumer court case without lawyer',
    '15 day legal notice format consumer court pakistan',
    'punjab consumer protection act 2005 filing',
    'district consumer protection authority dcpa complaint',
    'no refund no exchange illegal consumer law pakistan',
    'consumer court compensation damages claim procedure',
  ],
  openGraph: {
    title: 'How to File Consumer Court Complaint in Pakistan (2026): Legal Notice & DCPA',
    description:
      'Empowering citizen guide to recovering damages from defective products and bad services in Pakistan using Consumer Courts and DCPA authorities.',
    url: 'https://www.pakistaninfohub.com/legal/consumer-court-complaint-how-to-file-pakistan-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/legal/consumer-court-complaint-how-to-file-pakistan-2026' },
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
          name: 'Consumer Court Guide 2026',
          item: 'https://www.pakistaninfohub.com/legal/consumer-court-complaint-how-to-file-pakistan-2026',
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to File a Complaint in District Consumer Court in Pakistan',
      description:
        'Step-by-step citizen procedure to serve a 15-day legal notice and lodge a compensation claim in the District Consumer Court without hiring a lawyer.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Serve Mandatory 15-Day Written Legal Notice',
          text: 'Send a written notice on plain paper to the seller/company via registered post or courier, detailing the defect, damages, and remedy sought within 15 days.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Preserve Dispatch & Tracking Proof',
          text: 'Keep a signed copy of the notice and the original courier dispatch slip/tracking receipt as mandatory proof of service for the court.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'File Plain-Paper Complaint in District Consumer Court',
          text: 'If unresolved after 15 days, submit your complaint on plain paper before the District Consumer Court (presided by a District & Sessions Judge) with zero court fees.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Present Evidence & Obtain Judicial Remedy',
          text: 'Present receipts, warranty cards, defect photos, and witness statements personally to secure refund, product replacement, or monetary damages.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I really not need a lawyer to file a case in Consumer Court in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Consumer Courts in Pakistan are specifically designed for the common citizen. You do not need to hire an advocate or pay legal fees. You can draft your claim on a plain piece of paper, attach your receipts and courier slip, and represent yourself directly before the District & Sessions Judge presiding over the court.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there any court fee or expensive stamp paper required to file?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Under provincial Consumer Protection Acts (such as the Punjab Consumer Protection Act 2005), filing a complaint in the District Consumer Court is 100% free with zero court fee required. You only pay nominal courier charges when serving the 15-day legal notice.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if the seller refuses to accept or sign for the courier containing my 15-day legal notice?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If the courier attempts delivery at the seller’s registered business address and the seller refuses to accept it, the courier company stamps "Refused by Addressee" (Inkaar) on the parcel. In legal terms under the General Clauses Act, refusal to accept constitutes valid legal service. You can attach this courier return slip directly to your court complaint.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much financial compensation can a Consumer Court award to a buyer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Consumer Court can order a full refund of the product purchase price, replacement with a brand new defect-free unit, repair costs, actual financial losses suffered, and substantial damages for mental agony, harassment, and litigation expenses incurred by the consumer.',
          },
        },
      ],
    },
  ],
};

export default function ConsumerCourtComplaintPage() {
  const breadcrumbs = [
    { nameEn: 'Police & Legal Services', nameUr: 'پولیس و قانونی سروسز', url: '/legal' },
    { nameEn: 'Consumer Court Complaint Guide 2026', nameUr: 'کنزیومر کورٹ میں شکایت کا طریقہ 2026' },
  ];

  const consumerFlowSteps = [
    {
      number: 1,
      icon: <Receipt className="w-5 h-5" />,
      titleEn: 'Gather Receipts & Evidence',
      titleUr: 'رسیدیں اور ثبوت اکٹھے کریں',
      descEn: 'Collect purchase invoice, warranty card, product photos, defective video clips, and chat correspondence.',
      descUr: 'خریداری کا بل، وارنٹی کارڈ، خرابی کی تصاویر، ویڈیو اور واٹس ایپ پیغامات سنبھالیں۔',
      tagEn: 'Step 1',
      tagUr: 'مرحلہ 1',
    },
    {
      number: 2,
      icon: <Send className="w-5 h-5" />,
      titleEn: 'Serve 15-Day Legal Notice',
      titleUr: '15 دن کا تحریری لیگل نوٹس بھیجیں',
      descEn: 'Send a written notice on plain paper to the seller via registered post/courier. Demand refund or replacement within 15 days.',
      descUr: 'سادہ کاغذ پر نوٹس لکھ کر بذریعہ کورئیر بھیجیں اور 15 دن میں ازالے کا مطالبہ کریں۔',
      tagEn: 'Mandatory Notice',
      tagUr: 'لازمی نوٹس',
    },
    {
      number: 3,
      icon: <FileText className="w-5 h-5" />,
      titleEn: 'File Plain-Paper Claim',
      titleUr: 'کنزیومر کورٹ میں درخواست جمع کرائیں',
      descEn: 'If unresolved after 15 days, submit your plain-paper complaint before the District Consumer Court with zero court fee.',
      descUr: '15 دن بعد بغیر کسی عدالتی فیس کے ڈسٹرکٹ کنزیومر کورٹ میں سادہ درخواست دیں۔',
      tagEn: 'Zero Court Fee',
      tagUr: 'مفت دائرگی',
    },
    {
      number: 4,
      icon: <Gavel className="w-5 h-5" />,
      titleEn: 'Hearing & Compensation Order',
      titleUr: 'سماعت اور ہرجانے کا عدالتی فیصلہ',
      descEn: 'Appear before the Judge without a lawyer. The court can order refund, replacement, and heavy damages for mental agony.',
      descUr: 'وکیل کے بغیر خود پیش ہوں۔ عدالت مکمل رقم واپسی، متبادل پروڈکٹ اور ہرجانے کا حکم دے گی۔',
      tagEn: 'Judicial Remedy',
      tagUr: 'عدالتی ڈگری',
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
            <InteractiveToolBadge labelEn="CONSUMER PROTECTION ACT" labelUr="تحفظ صارفین ایکٹ" variant="gold" />
            <VerifiedBadge textEn="JUDICIAL PROCEDURE DIRECTORY 2026" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            How to File a Consumer Court Complaint in Pakistan (2026): Legal Notice, Evidence &amp; DCPA Routes
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پاکستان میں کنزیومر کورٹ میں شکایت دائر کرنے کا طریقہ: لیگل نوٹس، ہرجانے کا دعویٰ اور ڈی سی پی اے
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Bought a defective mobile phone, received fraudulent dry-cleaning service, or had an airline cancel your flight without a refund? Here is how to hold companies accountable in Pakistan&apos;s Consumer Courts without spending a single rupee on lawyer fees.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How Do You File a Case in Consumer Court in Pakistan?"
          topicTitleUr="پاکستان میں کنزیومر کورٹ میں کیس کیسے دائر کریں؟"
          answerEn="To file in Consumer Court: First send a mandatory 15-day written Legal Notice on plain paper via registered post/courier demanding refund or replacement. If unresolved, file a plain-paper complaint with the District Consumer Court (no lawyer or court fee needed). For quick fines against lack of receipts or price lists in Punjab, lodge a direct complaint with the District Consumer Protection Authority (DCPA) without prior notice."
          answerUr="کنزیومر کورٹ کے لیے: پہلے دکاندار یا کمپنی کو سادہ کاغذ پر 15 دن کا لیگل نوٹس بذریعہ کورئیر بھیجیں۔ اگر ازالہ نہ ہو تو ڈسٹرکٹ کنزیومر کورٹ میں بغیر وکیل اور بغیر فیس سادہ درخواست دائر کریں۔ پنجاب میں بل نہ دینے یا پرائس لسٹ کی خلاف ورزی پر ڈی سی پی اے کو بغیر نوٹس براہ راست شکایت کر سکتے ہیں۔"
        />

        {/* Friendly Conversational Intro */}
        <section className="p-6 rounded-2xl bg-amber-50/70 dark:bg-slate-900/80 border border-amber-200/80 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-doc-seal dark:text-amber-400 font-serif font-bold text-lg">
            <ShoppingBag className="w-5 h-5 shrink-0" />
            <h2>The &quot;No Refund, No Exchange&quot; Myth in Pakistan</h2>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Almost every shopkeeper in Hafeez Centre, Saddar, or Tariq Road has a signboard saying <em>&quot;Kharida hua maal wapas ya tabdeel nahi hoga&quot;</em> (Bought goods will not be returned or exchanged).
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Here is the legal truth: <strong>under Pakistani Consumer Protection Acts, that signboard is completely illegal and null in the eyes of the law</strong>. If a product has a defect, fails to deliver the promised warranty, or a mechanic botches your car repair, the seller is legally obligated to repair, replace, or refund it—and pay compensation for mental harassment.
          </p>
        </section>

        {/* Section 1: The Two Paths Compared */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              The 2 Legal Routes: Consumer Court vs. District Authority (DCPA)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Path A: District Consumer Court (For Compensation &amp; Refunds)
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Presiding Officer:</strong> District &amp; Sessions Judge.</li>
                <li><strong>15-Day Legal Notice:</strong> <strong>Mandatory prerequisite</strong>. If you skip sending the notice via courier, the judge must dismiss the case.</li>
                <li><strong>What You Can Win:</strong> Full cash refund, replacement product, financial losses, legal costs, and damages for mental agony.</li>
                <li><strong>Court Fee:</strong> <strong>Rs. 0 (Zero Court Fee)</strong>. No lawyer required.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Path B: District Consumer Protection Authority / DCPA (Punjab)
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Presiding Officer:</strong> Deputy Commissioner / Notified Authority Director.</li>
                <li><strong>15-Day Legal Notice:</strong> <strong>NOT Required</strong>. You can file directly on day one.</li>
                <li><strong>Primary Focus:</strong> Administrative violations (refusing to issue a receipt, hidden prices, misleading warranty claims, expired dates).</li>
                <li><strong>Outcome:</strong> Swift spot investigations and administrative fines up to <strong>PKR 50,000</strong> against the violator.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Visual Flow Diagram */}
        <StepFlowDiagram
          titleEn="Official Consumer Court Filing Workflow (Pakistan)"
          titleUr="کنزیومر کورٹ میں کیس دائر کرنے کا مکمل عدالتی طریقہ کار"
          subtitleEn="Step-by-step roadmap under provincial Consumer Protection Acts"
          subtitleUr="صوبائی کنزیومر پروٹیکشن ایکٹ کے تحت 4 مرحلہ وار گائیڈ"
          steps={consumerFlowSteps}
        />

        {/* Section 3: How to Draft the 15-Day Legal Notice */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Sample 15-Day Legal Notice: What to Write on Plain Paper
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              You do not need a lawyer&apos;s letterhead. Simply print or write this on a clean A4 sheet:
            </p>

            <div className="p-4 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs leading-relaxed space-y-2 border border-slate-800 shadow-inner">
              <p className="text-doc-brass font-bold">LEGAL NOTICE UNDER SECTION 28(1) OF PUNJAB CONSUMER PROTECTION ACT 2005 (OR RESPECTIVE PROVINCIAL ACT)</p>
              <p className="pt-1 text-slate-400">To: The Manager / Proprietor / CEO</p>
              <p>[Name of Shop / Business / Company]</p>
              <p>[Full Physical Address of the Shop or Corporate Office]</p>
              <p className="pt-2 font-bold text-white">Subject: 15-Day Legal Notice for Defective Product / Faulty Service and Claim for Damages</p>
              <p className="pt-2">Sir / Madam,</p>
              <p>1. That on [Date of Purchase], I purchased [Product Name / Model / Service Description] vide Receipt / Invoice No. [Invoice Number] for a total consideration of Rs. [Amount in PKR].</p>
              <p>2. That the said product has the following critical defects / faults: [Describe defect, e.g., screen flickering, faulty engine, failure to deliver service].</p>
              <p>3. That despite verbal requests on [Date], you have refused to replace or repair the item under valid warranty.</p>
              <p className="pt-1 text-emerald-400">4. YOU ARE HEREBY GIVEN 15 DAYS NOTICE from the receipt of this letter to either:</p>
              <p className="pl-4 text-emerald-400">a) Refund the full purchase price of Rs. [Amount], OR</p>
              <p className="pl-4 text-emerald-400">b) Replace the defective unit with a brand new fault-free product, AND</p>
              <p className="pl-4 text-emerald-400">c) Pay Rs. [Amount] as compensation for financial loss and mental agony.</p>
              <p className="pt-2">In case of failure to remedy the grievance within 15 days, I will initiate formal proceedings before the District Consumer Court at your risk, cost, and legal responsibility.</p>
              <p className="pt-2">Sender Name: [Your Name]</p>
              <p>CNIC: [Your CNIC Number]</p>
              <p>Address: [Your Full Mailing Address]</p>
              <p>Mobile: [Your Phone Number]</p>
              <p>Date: [DD/MM/YYYY]</p>
            </div>

            <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-300 text-[11px] font-sans flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>
                <strong>Crucial Step:</strong> Send this notice via TCS, Leopard, or Pakistan Post UMS registered parcel. Keep the dispatch receipt safely; you will attach this receipt to your court filing as undeniable proof of service.
              </span>
            </div>
          </div>
        </section>

        {/* Section 4: What Evidence to Gather & Keep */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Receipt className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Evidence Checklist: How to Win Your Case
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-sans">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="font-mono text-doc-brass font-bold uppercase block">1. Proof of Purchase</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Cash memo, digital invoice, bank statement debit, or handwritten receipt from the shopkeeper.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="font-mono text-doc-seal font-bold uppercase block">2. Visual Proof</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Clear high-resolution photos and video clips showing the malfunction, serial number, and physical condition.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="font-mono text-emerald-600 font-bold uppercase block">3. Courier Proof</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Photocopy of the 15-day legal notice stapled to the original courier receipt and online delivery tracking printout.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="font-mono text-sky-600 font-bold uppercase block">4. Chat Records</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Screenshots of WhatsApp messages, emails, or call logs showing your sincere attempts to resolve the issue amicably.
              </p>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 5: Remedies, Damages & 30-Day Appeals */}
        <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
          <div className="flex items-center gap-2 text-doc-ink dark:text-white font-serif font-bold text-lg">
            <Gavel className="w-5 h-5 text-doc-seal shrink-0" />
            <h2>What Remedies Can the Judge Grant &amp; What About Appeals?</h2>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            The Consumer Court is presided over by a senior District &amp; Sessions Judge who has sweeping statutory powers under the law:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-mono text-doc-brass font-bold uppercase block">Full Refund &amp; Returns</span>
              <p className="text-slate-600 dark:text-slate-300">
                The court can direct immediate return of the purchase amount with statutory interest.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-mono text-doc-seal font-bold uppercase block">Damages for Agony</span>
              <p className="text-slate-600 dark:text-slate-300">
                Judges routinely award PKR 20,000 to PKR 500,000+ for mental distress, lost time, and harassment.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-mono text-emerald-600 font-bold uppercase block">30-Day High Court Appeal</span>
              <p className="text-slate-600 dark:text-slate-300">
                Any party aggrieved by the final order has a strictly limited window of <strong>30 days</strong> to appeal to the High Court.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Genuinely Useful FAQ */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Consumer Court Filing)
            </h2>
          </div>

          <div className="space-y-3 font-sans text-xs">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Do I really not need a lawyer to file a case in Consumer Court?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Yes! The law was written specifically for the ordinary citizen. You can write your complaint in simple Urdu or English on plain paper, attach your documents, and argue your case yourself. Judges in Consumer Courts are exceptionally helpful to self-represented consumers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Is there any court fee or stamp paper expense?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                No. Filing a claim in the District Consumer Court is 100% free of charge. There are no court fees, no revenue stamps, and no hidden filing taxes.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                What if the shopkeeper refuses to receive the courier parcel containing my legal notice?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                If the shopkeeper rejects the courier, the courier company marks it as &quot;Refused by Addressee&quot;. In court, this refusal is legally treated as successful delivery under the law. You attach that return slip to your complaint, and the judge will issue direct court summons.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                How long does it take to get a judgment from the Consumer Court?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Unlike regular civil courts which can drag on for decades, Consumer Courts are summary proceedings mandated to conclude cases within <strong>six months</strong>. In many clear-cut cases (e.g., defective electronics with clear receipts), companies settle within 2 to 4 hearings.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Related Links */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Legal &amp; Civic Verification Utilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/legal/right-to-information-act-pakistan-how-to-file-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Constitutional RTI</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Right to Information (RTI) Guide 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                How to inspect government records and public project spending.
              </p>
            </Link>

            <Link
              href="/legal/online-fir-registration-punjab-police"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-seal font-bold uppercase block">Police 1787</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Online FIR Complaint Punjab Police
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Lodge formal complaints against police non-registration of FIRs.
              </p>
            </Link>

            <Link
              href="/legal/succession-certificate-legal-heir-nadra-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-emerald-600 font-bold uppercase block">NADRA Succession</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Succession Certificate &amp; Legal Heir 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Family inheritance letters of administration via biometric counters.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
