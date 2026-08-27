import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { StepFlowDiagram } from '@/components/StepFlowDiagram';
import { ProcessStepsDiagram, FeeTableVisual, FAQAccordionVisual } from '@/components/visuals';
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
  Building,
  FileCheck,
  Fingerprint,
  FileText,
  BadgeCheck,
  Scale,
  Calendar,
  AlertCircle,
  Truck,
  MapPin,
  Check
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Arms License Renewal Punjab Online (2026): PALS NADRA & e-Khidmat Markaz | Pakistan Info Hub',
  description:
    'Complete guide to arms license renewal in Punjab, Pakistan: Understand the difference between Federal (All-Pakistan) and Punjab provincial licenses, e-Khidmat Markaz NADRA counters, 2026 fee structure, and the 22-day delivery timeline under Pakistan Arms Rules 2023.',
  keywords: [
    'arms license renewal punjab online 2026',
    'pals punjab arms license system nadra',
    'e khidmat markaz arms license renewal fee',
    'federal vs punjab provincial arms license difference',
    'pakistan arms rules 2023 weapon license renewal',
    'expired arms license late fee punjab',
    'nadra arms license smart card tracking 22 days',
  ],
  openGraph: {
    title: 'Arms License Renewal Punjab Online (2026): PALS NADRA & e-Khidmat Markaz',
    description:
      'Verified procedural guide for renewing weapon licenses in Punjab (Pakistan) through e-Khidmat Markaz, NADRA PALS counters, and official Home Department channels.',
    url: 'https://www.pakistaninfohub.com/traffic/arms-license-renewal-punjab-online-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/traffic/arms-license-renewal-punjab-online-2026' },
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
          name: 'Traffic & Vehicle Services',
          item: 'https://www.pakistaninfohub.com/traffic',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Arms License Renewal Punjab 2026',
          item: 'https://www.pakistaninfohub.com/traffic/arms-license-renewal-punjab-online-2026',
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Renew an Arms License in Punjab, Pakistan via e-Khidmat Markaz & NADRA',
      description:
        'Official step-by-step procedure to renew a Punjab provincial or Federal arms license at NADRA counters and e-Khidmat Markaz centers under Punjab Arms Rules.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Determine License Jurisdiction',
          text: 'Check whether your license is a Federal All-Pakistan license (Ministry of Interior) or a Provincial Punjab license (PALS / Home Department).',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Visit e-Khidmat Markaz / NADRA Counter',
          text: 'Appear in person with your original CNIC and existing arms license / smart card for computerized biometric verification.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Pay Official Government & NADRA Fees',
          text: 'Deposit the annual government license renewal fee alongside the NADRA card processing fee at the counter.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Receive Computerized Smart Card via Courier',
          text: 'Collect your renewed 5-year computerized arms license smart card delivered to your residential address within 22 working days.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the key difference between an All-Pakistan (Federal) license and a Punjab Provincial license?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Federal (All-Pakistan) arms license is issued by the Federal Ministry of Interior and authorizes the holder to carry the registered weapon across all provinces and federal territories. A Punjab Provincial license is issued by the Punjab Home Department / Deputy Commissioner via PALS and is legally valid only within the geographic territorial boundaries of Punjab.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can another person or an agent renew my arms license on my behalf?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Biometric fingerprint authentication is mandatory at the NADRA / e-Khidmat Markaz counter. The license holder must physically appear in person to verify their thumb impressions against NADRA national records. Middle-men or agents cannot bypass this biometric security mandate.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if my arms license has already expired?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under the Pakistan Arms Rules 2023, licenses renewed within the grace period incur a standard late surcharge calculated per lapsed year. However, if a license remains unrenewed beyond the statutory maximum window (typically 5 to 7 years), it is liable to administrative cancellation and confiscation proceedings by the District Magistrate / DC Office.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can manual paper booklet arms licenses still be renewed in Punjab?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Old manual paper booklets cannot be renewed in their old format. The Punjab Government and NADRA mandated that all legacy manual licenses must undergo computerized verification and re-validation to be converted into NADRA Smart Cards before any renewal tenure can be extended.',
          },
        },
      ],
    },
  ],
};

export default function ArmsLicenseRenewalPunjabPage() {
  const breadcrumbs = [
    { nameEn: 'Traffic & Civic Services', nameUr: 'ٹریفک و شہری سروسز', url: '/traffic' },
    { nameEn: 'Arms License Renewal Punjab 2026', nameUr: 'اسلحہ لائسنس رینیول پنجاب 2026' },
  ];

  const renewalSteps = [
    {
      number: 1,
      icon: <FileCheck className="w-5 h-5" />,
      titleEn: 'Gather Original Documents',
      titleUr: 'اصل دستاویزات تیار کریں',
      descEn: 'Take your original valid CNIC and the original computerized arms license card (or verified booklet).',
      descUr: 'اصل کمپیوٹرائزڈ شناختی کارڈ اور موجودہ اسلحہ لائسنس کارڈ ساتھ رکھیں۔',
      tagEn: 'Originals Only',
      tagUr: 'اصل کاغذات',
    },
    {
      number: 2,
      icon: <MapPin className="w-5 h-5" />,
      titleEn: 'Visit e-Khidmat / NRC Counter',
      titleUr: 'ای خدمت مرکز یا نادرا تشریف لے جائیں',
      descEn: 'Walk into any designated e-Khidmat Markaz or NADRA Registration Centre with dedicated weapon licensing counters.',
      descUr: 'قریبی ای خدمت مرکز یا نادرا کے مخصوص اسلحہ لائسنس ڈیسک پر جائیں۔',
      tagEn: 'In-Person Visit',
      tagUr: 'ذاتی حاضری',
    },
    {
      number: 3,
      icon: <Fingerprint className="w-5 h-5" />,
      titleEn: 'Biometrics & Fee Payment',
      titleUr: 'بائیومیٹرک تصدیق اور فیس چالان',
      descEn: 'Complete live fingerprint verification and deposit government renewal + NADRA processing fees directly at the cash counter.',
      descUr: 'انگوٹھوں کے نشانات کی تصدیق کرائیں اور کاؤنٹر پر سرکاری و نادرا فیس جمع کرائیں۔',
      tagEn: 'No Agents',
      tagUr: 'بغیر ایجنٹ',
    },
    {
      number: 4,
      icon: <Truck className="w-5 h-5" />,
      titleEn: '22-Day Delivery & Tracking',
      titleUr: '22 دن میں سمارٹ کارڈ کی وصولی',
      descEn: 'Receive your official tracking tracking slip. Your computerized chip-based smart card will be couriered within 22 working days.',
      descUr: 'رسید حاصل کریں، 22 کام کے دنوں کے اندر بذریعہ ڈاک نیا سمارٹ کارڈ گھر پہنچ جائے گا۔',
      tagEn: 'Home Delivery',
      tagUr: 'ہوم ڈلیوری',
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
            <InteractiveToolBadge labelEn="PALS & NADRA PORTAL" labelUr="پنجاب آرمز لائسنس سسٹم" variant="navy" />
            <VerifiedBadge textEn="PUNJAB ARMS RULES 2023 COMPLIANT" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Arms License Renewal in Punjab Online (2026): PALS, NADRA Counters &amp; Fee Rules
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پنجاب اسلحہ لائسنس کی تجدید، نادرا پی اے ایل ایس کاؤنٹر، فیس شیڈول اور نیا سمارٹ کارڈ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Need to renew your weapon license in Punjab, Pakistan? Here is a straightforward, agent-free guide to navigating the <strong>Punjab Arms License System (PALS)</strong>, e-Khidmat Markaz counters, official NADRA smart cards, and statutory fee calculations.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="Where and How Do You Renew an Arms License in Punjab?"
          topicTitleUr="پنجاب میں اسلحہ لائسنس کی تجدید کہاں اور کیسے کروائیں؟"
          answerEn="Arms licenses in Punjab (Pakistan) are renewed directly through e-Khidmat Markaz centers or designated NADRA counters via PALS (Punjab Arms License System). You must appear in person with your original CNIC and existing license card for biometric verification. The total cost combines an annual government fee and NADRA processing fee, with new smart cards delivered within 22 working days."
          answerUr="پنجاب میں اسلحہ لائسنس کی تجدید ای خدمت مرکز یا نادرا کے PALS کاؤنٹر کے ذریعے ہوتی ہے۔ اصل شناختی کارڈ اور پرانا لائسنس لے کر ذاتی طور پر بائیومیٹرک تصدیق کرانا لازمی ہے۔ فیس کاؤنٹر پر جمع ہوتی ہے اور نیا کمپیوٹرائزڈ سمارٹ کارڈ 22 ورکنگ دنوں میں گھر پہنچا دیا جاتا ہے۔"
        />

        {/* Friendly Context Note */}
        <section className="p-6 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-doc-ink dark:text-white font-serif font-bold text-lg">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
            <h2>Important Note on Pakistan vs. Indian Sources</h2>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            A quick word before we get into the details: if you search online for &quot;Punjab arms license,&quot; search engines frequently pull in Indian state government websites with Indian Rupee amounts and entirely different weapon laws.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            This guide is <strong>100% specific to Punjab, Pakistan</strong>, regulated by the Punjab Home Department, the Deputy Commissioner (DC) offices, NADRA, and the <em>Pakistan Arms Rules 2023</em>. Every rupee amount, center location, and timeline below applies strictly to Pakistani citizens.
          </p>
        </section>

        {/* Section 1: Federal vs Provincial License */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Federal (All-Pakistan) vs. Punjab Provincial License
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Federal / All-Pakistan License (Ministry of Interior)
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Territorial Reach:</strong> Valid across all provinces, Islamabad Capital Territory (ICT), Gilgit-Baltistan, and AJK.</li>
                <li><strong>Issuing Authority:</strong> Federal Ministry of Interior, Islamabad.</li>
                <li><strong>Renewal Channel:</strong> Renewed through designated NADRA facilitation counters and CFCs nationwide.</li>
                <li><strong>Category:</strong> Common for prohibited bore (PB) and non-prohibited bore (NPB) with federal approval.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Punjab Provincial License (PALS / Home Department)
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Territorial Reach:</strong> Legally valid strictly within the administrative boundaries of Punjab.</li>
                <li><strong>Issuing Authority:</strong> Government of the Punjab Home Department / District Deputy Commissioner.</li>
                <li><strong>Renewal Channel:</strong> e-Khidmat Markaz centers and NADRA PALS counters across 36 Punjab districts.</li>
                <li><strong>Database:</strong> Registered in the centralized Punjab Arms License System (PALS).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Visual Flow Diagram */}
        <StepFlowDiagram
          titleEn="Official Arms License Renewal Workflow (Punjab, Pakistan)"
          titleUr="پنجاب میں اسلحہ لائسنس کی تجدید کا باقاعدہ طریقہ کار"
          subtitleEn="4-stage biometric process under Punjab Arms Rules 2023"
          subtitleUr="پنجاب آرمز رولز 2023 کے تحت 4 مرحلہ وار بائیومیٹرک طریقہ"
          steps={renewalSteps}
        />

        {/* Section 3: Fee Breakdown & Calculation */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Fee Structure &amp; Tenure Breakdown (2026)
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              When renewing an arms license in Punjab, the total amount payable at the counter consists of two separate heads: the <strong>Government Renewal Fee</strong> (which goes to the provincial exchequer) and the <strong>NADRA Card Processing Fee</strong> (for the chip-based smart card and biometric database maintenance).
            </p>

            <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="table-scroll-container">
                <table className="w-full text-xs font-sans min-w-[540px]">
                  <thead className="bg-doc-ink text-white text-[11px] font-mono uppercase tracking-wider">
                    <tr>
                      <th className="px-4 py-3 text-left">Fee Component</th>
                      <th className="px-4 py-3 text-left">Applicable Weapon Type</th>
                      <th className="px-4 py-3 text-left">Tenure / Rate</th>
                      <th className="px-4 py-3 text-right">Estimated Fee (PKR)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Govt Renewal Fee (NPB)</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Non-Prohibited Bore (.30, 9mm, 12 Bore)</td>
                      <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300">Per Year (Typically 5-Yr block)</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">~Rs. 2,000 – Rs. 5,000 / Yr</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">NADRA Smart Card Processing</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">All Computerized Smart Cards</td>
                      <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300">Chip Card Personalization</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">~Rs. 2,400 (Fixed/Card)</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Late Renewal Surcharge</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Licenses Expired &gt; 1 Month</td>
                      <td className="px-4 py-3 font-mono text-amber-600 font-bold">Graduated Late Penalty</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-amber-600">Calculated at Counter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5 text-slate-600 dark:text-slate-300">
              <strong className="text-doc-ink dark:text-white">Counter Verification Advice:</strong>
              <p>
                Exact government tariff rates can vary depending on whether the weapon is registered as non-prohibited bore (NPB) or prohibited bore (PB), and whether any administrative surcharges have been adjusted by the provincial cabinet. The system calculates the exact total dynamically once your CNIC is swiped at the counter.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Required Documents Checklist */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              What Documents You Must Bring with You
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">✓</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Original Valid CNIC</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Ensure your CNIC is not expired. If your CNIC has expired, you must renew your CNIC first before the arms licensing database will accept your transaction.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">✓</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Original Arms License</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Bring your existing NADRA smart card or computerized licensing slip. The operator needs the weapon serial number and original registration reference.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">✓</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Live Biometrics (No Photos Needed)</h3>
              <p className="text-slate-600 dark:text-slate-300">
                You do not need to bring passport photos or physical paper forms. Digital photographs and fingerprints are captured live at the booth.
              </p>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 5: The 22 Working Days Timeline */}
        <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 text-xs font-sans">
          <div className="flex items-center gap-2 text-doc-ink dark:text-white font-serif font-bold text-lg">
            <Clock className="w-5 h-5 text-emerald-600 shrink-0" />
            <h2>The 22-Working-Day Delivery Lifecycle</h2>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            Once you submit your renewal at e-Khidmat Markaz or NADRA, you receive an official computerized tracking slip. Here is what happens behind the scenes:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-mono font-bold text-doc-brass text-xs">Days 1–5</span>
              <p className="text-slate-600 dark:text-slate-300">
                Biometric data and payment are reconciled against the Home Department and NADRA PALS ledger.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-mono font-bold text-doc-seal text-xs">Days 6–15</span>
              <p className="text-slate-600 dark:text-slate-300">
                Card personalization, cryptographic chip encoding, and quality inspection at NADRA headquarters.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-mono font-bold text-emerald-600 text-xs">Days 16–22</span>
              <p className="text-slate-600 dark:text-slate-300">
                Dispatch via Pakistan Post / courier with SMS dispatch alerts sent to your registered mobile number.
              </p>
            </div>
          </div>
        </section>

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step Arms License Renewal Workflow (e-Khidmat & NADRA)"
          titleUr="اسلحہ لائسنس کی تجدید کا 4 مرحلہ وار طریقہ کار"
          subtitleEn="4-stage verified sequence from biometric verification to renewed chip card delivery"
          subtitleUr="ای خدمت مرکز میں بائیومیٹرک سے لے کر نئے اسمارٹ کارڈ کی وصولی تک کے 4 مراحل"
          steps={[
            {
              number: 1,
              titleEn: "Personal Visit (No Weapon)",
              titleUr: "ذاتی حاضری (اسلحہ ساتھ نہ لائیں)",
              descEn: "Visit nearest e-Khidmat Markaz or NADRA Arms Counter with original CNIC and existing license card. Never bring weapon.",
              descUr: "اصل شناختی کارڈ اور لائسنس کے ساتھ تشریف لائیں۔ اسلحہ ساتھ لانا سخت ممنوع ہے۔",
              tagEn: "In-Person Desk",
              tagUr: "سنٹر حاضری",
            },
            {
              number: 2,
              titleEn: "Live Biometric Verification",
              titleUr: "بائیومیٹرک فنگر پرنٹ تصدیق",
              descEn: "Undergo automated thumbprint/fingerprint verification matched live against NADRA's centralized national database.",
              descUr: "نادرا ڈیٹا بیس کے ذریعے انگلیوں کے نشانات کی لائیو بائیومیٹرک تصدیق کروائیں۔",
              tagEn: "Biometric Scan",
              tagUr: "بائیومیٹرک",
            },
            {
              number: 3,
              titleEn: "Digital Fee & NADRA PSID Payment",
              titleUr: "سرکاری فیس اور نادرا چالان ادائیگی",
              descEn: "Pay statutory annual renewal fee + NADRA card processing charges via ePay Punjab, 1Link PSID, or bank counter.",
              descUr: "ای پے پنجاب یا ون لنک کے ذریعے سالانہ تجدید فیس اور کارڈ پروسیسنگ چالان ادا کریں۔",
              tagEn: "PSID Challan",
              tagUr: "چالان ادائیگی",
            },
            {
              number: 4,
              titleEn: "Renewed Smart Card Collection",
              titleUr: "تجدید شدہ اسمارٹ کارڈ کی وصولی",
              descEn: "Receive computerized acknowledgment slip; collect renewed high-security smart weapon card within 10–15 business days.",
              descUr: "رسید حاصل کریں اور 10 سے 15 کام کے دنوں کے اندر تجدید شدہ اسمارٹ کارڈ وصول کریں۔",
              tagEn: "Smart Card Delivery",
              tagUr: "کارڈ وصولی",
            },
          ]}
        />

        {/* Fee Structure Table */}
        <FeeTableVisual
          titleEn="Official Arms License Statutory Renewal Fee Schedule (Punjab & Federal)"
          titleUr="اسلحہ لائسنس کی سالانہ تجدید کا سرکاری فیس شیڈول"
          subtitleEn="Category-wise statutory renewal fees for Non-Prohibited Bore (NPB), Prohibited Bore (PB), and NADRA card"
          subtitleUr="نان پروبیٹڈ بور، پروبیٹڈ بور، فیڈرل لائسنس اور نادرا کارڈ پروسیسنگ فیس کی تفصیل"
          noteEn="Holders of expired licenses are subject to annual late renewal surcharges. Firearms must not be carried into government offices."
          rows={[
            {
              serviceEn: "Punjab Non-Prohibited Bore (NPB) Annual Renewal",
              serviceUr: "پنجاب نان پروبیٹڈ بور (سالانہ تجدید)",
              normal: "PKR 2,500 / year",
              urgent: "ePay PSID",
              executive: "e-Khidmat / DC Office",
              validity: "1–5 Years Valid",
            },
            {
              serviceEn: "Federal / All-Pakistan NPB License Renewal",
              serviceUr: "وفاقی / آل پاکستان اسلحہ لائسنس تجدید",
              normal: "PKR 5,000 / year",
              urgent: "1Link PSID",
              executive: "NADRA NRC Arms Desk",
              validity: "All-Pakistan Valid",
            },
            {
              serviceEn: "Federal Prohibited Bore (PB) Annual Renewal",
              serviceUr: "وفاقی پروبیٹڈ بور لائسنس تجدید",
              normal: "PKR 10,000 / year",
              urgent: "MOI Approval",
              executive: "Ministry of Interior",
              validity: "Federal Jurisdiction",
            },
            {
              serviceEn: "NADRA Smart Arms License Card Fee (New/Chip)",
              serviceUr: "نادرا اسمارٹ کارڈ پروسیسنگ فیس",
              normal: "PKR 1,500 Fixed",
              urgent: "PKR 2,500 (Exec)",
              executive: "Smart Chip Card",
              validity: "Matches License Term",
            },
          ]}
        />

        {/* Section 6: Frequently Asked Questions */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Punjab Arms License Renewal)"
          titleUr="اسلحہ لائسنس کی تجدید سے متعلق عام سوالات"
          subtitleEn="Essential guidelines on All-Pakistan vs Punjab licenses, lapsed renewals, representative visits, and carrying weapons"
          subtitleUr="آل پاکستان لائسنس کا فرق، پرانے لائسنس، بائیومیٹرک حاضری اور سنٹر میں اسلحہ لانے کی ممانعت"
          items={[
            {
              questionEn: "What is the difference between a Punjab-only license and an All-Pakistan arms license?",
              questionUr: "پنجاب لائسنس اور آل پاکستان اسلحہ لائسنس میں کیا قانونی فرق ہے؟",
              answerEn: "An All-Pakistan license is issued under the authority of the Federal Ministry of Interior (Islamabad) and permits carrying the registered firearm anywhere in Pakistan. A Punjab license is issued under the authority of the Punjab Home Department and is legally valid only within the territorial boundaries of Punjab province.",
              answerUr: "آل پاکستان لائسنس وزارت داخلہ اسلام آباد جاری کرتی ہے جو پورے ملک میں کارآمد ہوتا ہے، جبکہ پنجاب لائسنس صرف صوبہ پنجاب کی حدود میں قانونی حیثیت رکھتا ہے۔",
            },
            {
              questionEn: "What if my arms license expired two years ago? Can I still renew it?",
              questionUr: "اگر اسلحہ لائسنس دو سال قبل ایکسپائر ہو چکا ہو تو کیا اب تجدید ہو سکتی ہے؟",
              answerEn: "Yes, but you will have to pay late renewal surcharges for the lapsed years along with the standard renewal fee. However, if a license has been expired for an extended period (typically exceeding 5 to 7 years), the system may flag it for re-approval from the Deputy Commissioner's office or deem it cancelled.",
              answerUr: "جی ہاں! آپ پچھلے سالوں کی فیس اور جرمانہ ادا کر کے تجدید کروا سکتے ہیں۔ تاہم 5 سے 7 سال سے زائد تاخیر پر ڈی سی آفس سے دوبارہ منظوری درکار ہو سکتی ہے۔",
            },
            {
              questionEn: "Can someone else (like a driver, lawyer, or relative) renew it on my behalf?",
              questionUr: "کیا کوئی وکیل، رشتہ دار یا ڈرائیور میری جگہ جا کر لائسنس کی تجدید کروا سکتا ہے؟",
              answerEn: "No. Because biometric verification (live fingerprint scanning against the NADRA database) is mandatory, the license holder must appear in person. Anyone claiming they can renew your card without your presence is running an illegal scam.",
              answerUr: "نہیں! نادرا ڈیٹا بیس سے لائیو فنگر پرنٹ بائیومیٹرک تصدیق لازمی ہے، اس لیے لائسنس ہولڈر کا خود ذاتی طور پر حاضر ہونا قانونی شرط ہے۔",
            },
            {
              questionEn: "Do I need to carry the weapon itself to the e-Khidmat Markaz or NADRA center?",
              questionUr: "کیا لائسنس کی تجدید کے لیے بندوق یا پستول ساتھ لے جانا ضروری ہے؟",
              answerEn: "No! Never carry firearms into civilian facilitation centers or NADRA offices. You only need the original license card and your CNIC. Carrying weapons into government centers without authorized security duties is a criminal offense under section 144 / arms regulations.",
              answerUr: "ہرگز نہیں! سرکاری مراکز یا نادرا دفاتر میں اسلحہ لانا سختی سے منع ہے اور جرم ہے۔ آپ کو صرف اپنا اصل شناختی کارڈ اور پرانا لائسنس ساتھ لانا ہوتا ہے۔",
            },
          ]}
        />

        {/* Section 7: Related Links */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Traffic &amp; Verification Utilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/traffic/driving-license-online-apply-renewal-dlims-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">DLIMS Portal</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Driving License Renewal Online 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                DLIMS online portal fee payments, test bookings, and verification.
              </p>
            </Link>

            <Link
              href="/traffic/token-tax-calculator-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-seal font-bold uppercase block">Excise Tax</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Token Tax Calculator 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Calculate vehicle token tax, filer rebates, and late surcharges.
              </p>
            </Link>

            <Link
              href="/legal/punjab-khidmat-markaz-police-services"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-emerald-600 font-bold uppercase block">PKM Services</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Police Khidmat Markaz 14 Facilities
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Character certificates, tenant registration, and police report counters.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
