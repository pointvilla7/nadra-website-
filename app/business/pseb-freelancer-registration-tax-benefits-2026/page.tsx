import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
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
  Briefcase,
  Laptop,
  CreditCard,
  FileCheck,
  Building,
  Check,
  Percent,
  Landmark,
  ShieldAlert,
  GraduationCap
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PSEB Freelancer Registration & Tax Benefits 2026 – 0.25% FTR, Section 154A & SBP Rules | Pakistan Info Hub',
  description:
    'Complete 2026 guide to PSEB freelancer registration in Pakistan: Step-by-step techdestinations portal signup, Rs. 1,000 annual fee, 0.25% concessional Final Tax Regime (FTR) under Section 154A, 80% banking channel rule, Section 65F tax credit status, and ePRC remittance verification.',
  keywords: [
    'PSEB freelancer registration 2026',
    'PSEB 0.25 percent tax rate Section 154A',
    'IT export tax exemption Pakistan 2026',
    'PSEB registration fee Rs 1000',
    'freelancer income tax filer status Pakistan',
    'ePRC electronic proceeds realization certificate SBP',
    'freelancer bank account Pakistan ESFCA 50 percent retention',
    'Section 65F tax credit vs Section 154A FTR',
    'Payoneer Wise freelancer tax compliance Pakistan',
  ],
  openGraph: {
    title: 'PSEB Freelancer Registration & Tax Benefits 2026 – Complete IT Export Tax Guide',
    description:
      'Step-by-step portal registration guide for Pakistani freelancers: Unlock 0.25% concessional FTR tax rate, ePRC generation, SBP remittance rules, and foreign currency accounts.',
    url: 'https://www.pakistaninfohub.com/business/pseb-freelancer-registration-tax-benefits-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/business/pseb-freelancer-registration-tax-benefits-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Business & SECP Registration', item: 'https://www.pakistaninfohub.com/business' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'PSEB Freelancer Registration & Tax Benefits 2026',
          item: 'https://www.pakistaninfohub.com/business/pseb-freelancer-registration-tax-benefits-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'PSEB Freelancer Registration & Tax Benefits Guide 2026: 0.25% FTR, Portal Setup & SBP Rules',
      description:
        'An authoritative financial and regulatory manual for Pakistani digital workers, explaining PSEB registration workflows, Section 154A concessional taxation, banking compliance, and export remittances.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/business/pseb-freelancer-registration-tax-benefits-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I still need PSEB registration if my annual freelance earnings are below the Rs. 600,000 taxable threshold?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'While domestic taxable income below PKR 600,000 per year carries zero income tax, international export remittances are governed under the foreign exchange and export taxation regime. Registering with PSEB protects you by classifying your inward remittances under the official 0.25% Final Tax Regime (FTR), preventing banks or the FBR from treating unclassified foreign transfers as unexplained domestic income or taxing them at higher non-filer withholding rates.',
          },
        },
        {
          '@type': 'Question',
          name: 'What counts as an approved banking channel and what is an ePRC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Approved banking channels include direct international bank wire transfers (SWIFT) or authorized payment platforms (Payoneer, Wise, Elevate) linked directly to a commercial bank account in Pakistan. An ePRC (Electronic Proceeds Realization Certificate) is a digitally verified document issued by your Pakistani receiving bank that certifies foreign currency was received under an official IT export purpose code (such as 9186).',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I still need to file an annual income tax return with FBR if my tax is deducted under the 0.25% Final Tax Regime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Being subject to the Final Tax Regime (FTR) exempts your IT export proceeds from progressive slab taxes, but it does NOT exempt you from filing an annual income tax return on FBR Iris. You must declare your gross foreign export receipts under the Final/Fixed Tax section and submit a wealth statement to maintain Active Taxpayer List (ATL) status.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if I receive freelance income through Payoneer, Wise, or foreign cryptocurrency wallets?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When funds from Payoneer or Wise are withdrawn and settled into your Pakistani commercial bank account through authorized banking routes, your bank issues an ePRC, qualifying you for the 0.25% rate. However, keeping funds entirely in offshore digital accounts or using P2P cryptocurrency transfers leaves no traceable SBP foreign exchange audit trail and disqualifies you from IT export tax benefits.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the exact current status of the Section 65F 100% tax exemption versus the 0.25% Section 154A tax rate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Historically, Section 65F offered a 100% tax credit (effective full exemption) for IT exports, but it carried rigorous corporate compliance conditions and sunset clauses. Under the modernized tax framework, Section 154A serves as the primary, practical settlement mechanism: a nominal 0.25% Final Tax deducted at source for PSEB-registered active filers, which completely finalizes your income tax liability on IT export revenue.',
          },
        },
      ],
    },
  ],
};

export default function PsebFreelancerRegistrationPage() {
  const breadcrumbs = [
    { nameEn: 'Business & SECP Registration', nameUr: 'کاروبار اور ایس ای سی پی رجسٹریشن' },
    { nameEn: 'PSEB Freelancer Registration', nameUr: 'پی ایس ای بی فری لانسر ٹیکس مراعات 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="IT EXPORT TAX INCENTIVE" labelUr="آئی ٹی ٹیکس چھوٹ گائیڈ" variant="gold" />
            <VerifiedBadge textEn="PSEB & FBR SECTION 154A COMPLIANT" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            PSEB Freelancer Registration &amp; Tax Benefits Guide 2026: 0.25% FTR, Portal Setup &amp; SBP Rules
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پی ایس ای بی فری لانسر رجسٹریشن اور ٹیکس مراعات 2026: 0.25 فیصد فائنل ٹیکس، پورٹل فیس اور بینکنگ قواعد
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            A comprehensive, transparent guide for Pakistani software engineers, graphic designers, digital marketers,
            and content creators: how to register with the Pakistan Software Export Board (PSEB) for PKR 1,000, secure
            the 0.25% concessional Final Tax Regime (FTR) under Section 154A, comply with State Bank remittance rules,
            and retain foreign currency legitimately.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is PSEB Freelancer Registration & What Tax Rate Do I Pay?"
          topicTitleUr="پی ایس ای بی فری لانسر رجسٹریشن کیا ہے اور کتنا ٹیکس ادا کرنا ہوتا ہے؟"
          answerEn="PSEB registration officially recognizes independent digital professionals as IT/ITeS exporters. Registered freelancers on the Active Taxpayers List (ATL) pay a concessional 0.25% Final Tax Regime (FTR) rate under Section 154A on export earnings brought through formal banking channels (versus 1% for unregistered individuals). Registration costs PKR 1,000 per year on techdestinations.com and takes 5 to 10 working days."
          answerUr="پی ایس ای بی رجسٹریشن فری لانسرز کو سرکاری طور پر آئی ٹی ایکسپورٹر تسلیم کرتی ہے۔ فائلر فری لانسرز کو سیکشن 154A کے تحت صرف 0.25 فیصد فائنل ٹیکس دینا ہوتا ہے (غیر رجسٹرڈ افراد پر 1 فیصد لاگو ہے)۔ رجسٹریشن فیس 1000 روپے سالانہ ہے اور یہ عمل 5 سے 10 دنوں میں مکمل ہوتا ہے۔"
        />

        {/* Section 1: The Tax Benefit Structure */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Percent className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Understanding the Freelance Tax Structure: 0.25% FTR vs. 1% vs. Section 65F
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Taxation on digital exports in Pakistan has undergone significant policy consolidation. Here is the exact,
            transparent legal framework governing freelance earnings in 2026:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-base text-emerald-800 dark:text-emerald-300">
                  PSEB Registered (0.25%)
                </span>
                <span className="p-1 px-2.5 rounded-full bg-emerald-600 text-white font-mono font-bold text-xs">
                  Concessional FTR
                </span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Under <strong>Section 154A of the Income Tax Ordinance</strong>, freelancers who maintain active PSEB registration and are on the Active Taxpayers List (ATL) are taxed at a nominal <strong>0.25% of gross export receipts</strong>.
              </p>
              <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700 font-mono text-emerald-800 dark:text-emerald-300">
                Example: On $10,000 (~PKR 2,800,000), total income tax is only PKR 7,000.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-base text-amber-800 dark:text-amber-300">
                  Unregistered (1.00%)
                </span>
                <span className="p-1 px-2.5 rounded-full bg-amber-600 text-white font-mono font-bold text-xs">
                  Standard Export
                </span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                If you receive IT export remittances through banking channels but have <strong>not registered with PSEB</strong> or allowed your certificate to lapse, banks and FBR deduct a higher <strong>1.00% tax</strong> at source under standard export provisions.
              </p>
              <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-700 font-mono text-amber-800 dark:text-amber-300">
                Example: On $10,000 (~PKR 2,800,000), tax deducted is PKR 28,000 (4x higher).
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-base text-doc-ink dark:text-white">
                  Section 65F Context
                </span>
                <span className="p-1 px-2.5 rounded-full bg-doc-ink text-white font-mono font-bold text-xs">
                  100% Tax Credit
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Section 65F historically provided a 100% tax credit for IT exports, but required extensive corporate audit books, complete sales tax registrations, and annual exemption filings. The 0.25% FTR was introduced to give individual freelancers a hassle-free, definitive settlement without audit scrutiny.
              </p>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 font-mono text-slate-700 dark:text-slate-300">
                Full final tax settlement: No further slab liability.
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Registration Process */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Laptop className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step PSEB Freelancer Registration via TechDestinations Portal
            </h2>
          </div>

          <div className="space-y-3 font-sans text-xs">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  Prerequisites: Obtain FBR NTN &amp; Active Taxpayer Status
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Before applying on PSEB, ensure you have a valid National Tax Number (NTN) registered with FBR Iris under your personal 13-digit CNIC with the business activity listed as &quot;IT / Computer Services&quot; or &quot;Freelance Services&quot;.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  Create Account on TechDestinations (PSEB Portal)
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Visit <code>techdestinations.com</code> (or <code>pseb.org.pk</code>) and select <strong>&quot;Register as Freelancer&quot;</strong>. Enter your full legal name as per CNIC, active email address, contact number, and NTN.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  Upload Documentation &amp; Freelance Portfolio Proof
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Upload clear scanned copies of: (1) CNIC front and back, (2) Passport-size photo, (3) Proof of freelance activity (such as your Upwork / Fiverr / Freelancer profile link, client service contracts, GitHub repository, or recent foreign remittance invoices).
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">4</span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  Pay PKR 1,000 Registration Fee &amp; Download Certificate
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Pay the official annual registration fee of <strong>PKR 1,000</strong> using online debit/credit card, 1Link voucher, or mobile banking. PSEB officers scrutinize applications within 5 to 10 working days. Once approved, download your digital, QR-coded PSEB Freelancer Certificate.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 3: The 80% Banking Channel Rule & ePRC Demystified */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Landmark className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              The 80% Banking Channel Rule &amp; ePRC Remittance Compliance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="font-bold text-doc-seal text-sm block">1. The 80% Inward Remittance Condition</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                To qualify for the concessional 0.25% Final Tax treatment, the tax code mandates that <strong>at least 80% of your total foreign export earnings must be realized and brought into Pakistan</strong> through authorized banking channels (such as commercial bank wire transfers, Payoneer/Wise withdrawals into Pakistani bank accounts).
              </p>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white block">SBP Foreign Currency Retention (ESFCA):</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Under State Bank of Pakistan regulations, IT exporters and freelancers are legally allowed to retain <strong>up to 50%</strong> of export proceeds in an Exporters&apos; Specialized Foreign Currency Account (ESFCA) in USD/EUR to pay for international software licenses, SaaS subscriptions, and digital ads without rupee conversion.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm block">2. Why the ePRC is Your Golden Tax Document</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Every time foreign exchange enters your Pakistani bank account, your bank generates an <strong>Electronic Proceeds Realization Certificate (ePRC)</strong>.
              </p>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside">
                <li><strong>Purpose Code 9186:</strong> Ensure your receiving bank tags inward payments under SBP Purpose Code <code>9186 (Computer &amp; Information Services)</code> or <code>9187</code>.</li>
                <li><strong>Download ePRC:</strong> Obtain digital ePRC copies directly from your banking portal (e.g. Meezan, HBL, Allied, SCB, Standard Chartered).</li>
                <li><strong>FBR Audit Shield:</strong> The ePRC serves as indisputable legal proof during FBR annual return audits that your funds are authentic zero-rated / 0.25% export revenue rather than taxable local income.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Non-Tax Benefits of PSEB Registration */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Building className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Non-Tax Strategic Advantages of PSEB Freelancer Certification
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-sans">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <ShieldCheck className="w-5 h-5 text-doc-brass" />
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Specialized Bank Accounts</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Open Freelancer Current Accounts &amp; Foreign Currency Accounts (FCY) across major Pakistani banks with zero complex business audit balance sheets.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <FileCheck className="w-5 h-5 text-doc-seal" />
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Visa Recommendation Letters</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                PSEB issues official commercial visa facilitation and recommendation letters for freelancers traveling to international tech conferences and client meetings abroad.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Subsidized Training &amp; Cloud Credits</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Access government-subsidized advanced tech certifications (AWS, Microsoft, Google), discounted co-working spaces at Software Technology Parks (STPs), and cloud credits.
              </p>
            </div>
          </div>
        </section>

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step PSEB Freelancer Registration &amp; Tax Exemption (2026)"
          titleUr="پی ایس ای بی فری لانسر رجسٹریشن اور 0.25% ٹیکس چھوٹ کا طریقہ"
          subtitleEn="From portal signup to ePRC export proof, digital fee payment, and bank tax reduction certificate"
          subtitleUr="آن لائن رجسٹریشن سے لے کر بینک تصدیق، فیس ادائیگی اور رعایتی ٹیکس سرٹیفکیٹ وصولی تک"
          steps={[
            {
              number: 1,
              titleEn: "Sign Up on Tech Destinations Portal",
              titleUr: "پی ایس ای بی کے پورٹل پر سائن اپ کریں",
              descEn: "Visit pseb.org.pk / techdestinations.com and register a new individual freelancer account using your email and CNIC.",
              descUr: "پورٹل پر جائیں اور اپنے ای میل اور 13 ہندسوں کے شناختی کارڈ کی مدد سے فری لانسر پروفائل تیار کریں۔",
              tagEn: "Portal Signup",
              tagUr: "سائن اپ",
            },
            {
              number: 2,
              titleEn: "Submit Bank IBAN & Export Invoices",
              titleUr: "بینک اکاؤنٹ اور فری لانسنگ کا ثبوت جمع کروائیں",
              descEn: "Enter your Pakistani bank IBAN, Upwork/Fiverr profile URL, or direct client contract invoices proving foreign IT export services.",
              descUr: "اپنا پاکستانی بینک اکاؤنٹ (IBAN) اور اپ ورک، فائور یا کلائنٹ انوائسز کا ثبوت منسلک کریں۔",
              tagEn: "Export Proof",
              tagUr: "آمدنی ثبوت",
            },
            {
              number: 3,
              titleEn: "Pay Annual Registration Fee",
              titleUr: "سالانہ رجسٹریشن فیس ادا کریں",
              descEn: "Pay the official subsidized annual registration fee (PKR 1,000 to PKR 2,500) via 1Link or debit/credit card.",
              descUr: "ایک ہزار سے پچیس سو روپے سالانہ رعایتی فیس 1Link، آن لائن بینکنگ یا ڈیبٹ کارڈ سے ادا کریں۔",
              tagEn: "Fee Payment",
              tagUr: "فیس ادائیگی",
            },
            {
              number: 4,
              titleEn: "Download Certificate & Claim 0.25% FTR",
              titleUr: "سرٹیفکیٹ ڈاؤن لوڈ کر کے بینک میں 0.25% ٹیکس لاگو کروائیں",
              descEn: "Download your official PSEB registration certificate; provide it to your receiving bank to lock in 0.25% Final Tax under Section 154A.",
              descUr: "ڈیجیٹل سرٹیفکیٹ ڈاؤن لوڈ کر کے اپنے بینک میں جمع کروائیں تاکہ باہر سے آنے والی رقم پر صرف 0.25 فیصد فائنل ٹیکس کٹوتی ہو۔",
              tagEn: "0.25% Tax Rate",
              tagUr: "رعایتی ٹیکس",
            },
          ]}
        />

        {/* Tax Comparison Table Visual */}
        <FeeTableVisual
          titleEn="IT Export Remittance Tax Slabs Comparison (Section 154A – 2026)"
          titleUr="آئی ٹی برآمدات و فری لانسنگ ٹیکس کٹوتی کا تقابلی جائزہ (2026)"
          subtitleEn="PSEB registered active filers vs unregistered filers vs non-filers tax rates on foreign remittances"
          subtitleUr="پی ایس ای بی رجسٹرڈ فری لانسرز، عام فائلرز اور نان فائلرز پر لاگو ٹیکس کی شرح"
          noteEn="* Note: The 0.25% Final Tax completely finalizes income tax liability on declared foreign IT/ITeS remittances."
          noteUr="* نوٹ: 0.25 فیصد کٹوتی کے بعد فری لانسر پر انکم ٹیکس کا کوئی مزید واجب الادا ٹیکس نہیں رہتا۔"
          rows={[
            {
              serviceEn: "PSEB Registered + FBR Active Filer (ATL)",
              serviceUr: "پی ایس ای بی رجسٹرڈ + ایکٹو ٹیکس فائلر",
              normal: "0.25% Final Tax",
              urgent: "Full SBP Retain (50%)",
              executive: "No Audit",
              validity: "Section 154A (Concessional)"
            },
            {
              serviceEn: "FBR Active Filer (Without PSEB Registration)",
              serviceUr: "صرف ٹیکس فائلر (پی ایس ای بی رجسٹریشن کے بغیر)",
              normal: "1.00% Final Tax",
              urgent: "Standard Settlement",
              executive: "Standard SBP",
              validity: "Standard Export Slab"
            },
            {
              serviceEn: "Non-Filer / Late Filer (No ATL Status)",
              serviceUr: "نان فائلر / غیر رجسٹرڈ افراد",
              normal: "Up to 35% Normal Slab",
              urgent: "No Exemption",
              executive: "Audit Risk",
              validity: "Subject to Punitive Tax"
            }
          ]}
        />

        {/* Section 5: Related Tax & Business Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Tax, FBR &amp; Business Registration Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/tax/fbr-active-taxpayer-status-helper-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Tax Filer Status</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                FBR Active Taxpayer Status Helper →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Verify your live ATL status &amp; surcharge removal.</p>
            </Link>

            <Link
              href="/tax/ntn-registration-online-pakistan"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">FBR NTN Setup</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NTN Registration Online Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Get your free personal or business NTN in minutes.</p>
            </Link>

            <Link
              href="/business/company-name-availability-checker-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">SECP Corporate</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                SECP Company Name Checker →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Scale from solo freelancer to a registered Pvt Ltd firm.</p>
            </Link>
          </div>
        </section>

        {/* Section 6: FAQs */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (PSEB Freelancer Tax &amp; Registration)"
          titleUr="پی ایس ای بی فری لانسر ٹیکس اور رجسٹریشن سے متعلق عام سوالات"
          subtitleEn="Essential guidelines on taxable income thresholds, approved banking ePRC certificates, FBR return filing, and Wise/Payoneer rules"
          subtitleUr="ٹیکس سے استثنیٰ کی حد، ای پی آر سی (ePRC) سرٹیفکیٹ، گوشوارہ جمع کروانے اور پے اونیر/وائز کے قواعد"
          items={[
            {
              questionEn: "Do I still need PSEB registration if my annual freelance earnings are below the Rs. 600,000 taxable threshold?",
              questionUr: "اگر میری سالانہ فری لانسنگ آمدنی 6 لاکھ سے کم ہو تو کیا تب بھی پی ایس ای بی رجسٹریشن ضروری ہے؟",
              answerEn: "While domestic taxable income below PKR 600,000 per year carries zero income tax, international export remittances are governed under the foreign exchange and export taxation regime. Registering with PSEB protects you by classifying your inward remittances under the official 0.25% Final Tax Regime (FTR), preventing banks or the FBR from treating unclassified foreign transfers as unexplained domestic income or taxing them at higher non-filer withholding rates.",
              answerUr: "جی ہاں! بیرون ملک سے آنے والی رقم کو آئی ٹی ایکسپورٹ قرار دلوانے کے لیے پی ایس ای بی رجسٹریشن ضروری ہے تاکہ بینک اور ایف بی آر اس پر غیر ضروری ودہولڈنگ یا عام سلیب ٹیکس لاگو نہ کریں۔",
            },
            {
              questionEn: "What counts as an approved banking channel and what is an ePRC?",
              questionUr: "منظور شدہ بینکنگ چینل اور ای پی آر سی (ePRC) سے کیا مراد ہے؟",
              answerEn: "Approved banking channels include direct international bank wire transfers (SWIFT) or authorized payment platforms (Payoneer, Wise, Elevate) linked directly to a commercial bank account in Pakistan. An ePRC (Electronic Proceeds Realization Certificate) is a digitally verified document issued by your Pakistani receiving bank that certifies foreign currency was received under an official IT export purpose code (such as 9186).",
              answerUr: "پے اونیر، وائز یا ڈائریکٹ بینک ٹرانسفر سے پاکستانی بینک اکاؤنٹ میں رقم منتقل ہونے پر بینک کی جانب سے جاری کردہ تصدیقی دستاویز کو ePRC کہتے ہیں جو آئی ٹی برآمدات کا قانونی ثبوت ہے۔",
            },
            {
              questionEn: "Do I still need to file an annual income tax return with FBR if my tax is deducted under the 0.25% Final Tax Regime?",
              questionUr: "اگر 0.25 فیصد ٹیکس کٹ چکا ہو تو کیا سالانہ انکم ٹیکس ریٹرن فائل کرنا لازمی ہے؟",
              answerEn: "Yes. Being subject to the Final Tax Regime (FTR) exempts your IT export proceeds from progressive slab taxes, but it does NOT exempt you from filing an annual income tax return on FBR Iris. You must declare your gross foreign export receipts under the Final/Fixed Tax section and submit a wealth statement to maintain Active Taxpayer List (ATL) status.",
              answerUr: "جی ہاں! فائنل ٹیکس کٹنے کے باوجود سالانہ انکم ٹیکس گوشوارہ اور ویلتھ اسٹیٹمنٹ FBR Iris پورٹل پر جمع کروانا لازمی ہے تاکہ آپ ایکٹو فائلر کی لسٹ میں برقرار رہیں۔",
            },
            {
              questionEn: "What happens if I receive freelance income through Payoneer, Wise, or foreign cryptocurrency wallets?",
              questionUr: "اگر پے اونیر، وائز یا کرپٹو والٹ سے رقم آئے تو ٹیکس چھوٹ کیسے ملے گی؟",
              answerEn: "When funds from Payoneer or Wise are withdrawn and settled into your Pakistani commercial bank account through authorized banking routes, your bank issues an ePRC, qualifying you for the 0.25% rate. However, keeping funds entirely in offshore digital accounts or using P2P cryptocurrency transfers leaves no traceable SBP foreign exchange audit trail and disqualifies you from IT export tax benefits.",
              answerUr: "پے اونیر اور وائز کی رقم جب پاکستانی بینک اکاؤنٹ میں منتقل کی جاتی ہے تو بینک ePRC بنا دیتا ہے۔ لیکن پی ٹو پی کرپٹو ٹرانسفر پر اسٹیٹ بینک کا ریکارڈ نہ ہونے کی وجہ سے کوئی ٹیکس چھوٹ نہیں ملتی۔",
            },
            {
              questionEn: "What is the exact current status of the Section 65F 100% tax exemption versus the 0.25% Section 154A tax rate?",
              questionUr: "سیکشن 65F اور 0.25 فیصد فائنل ٹیکس ریٹ میں کیا فرق ہے؟",
              answerEn: "Historically, Section 65F offered a 100% tax credit (effective full exemption) for IT exports, but it carried rigorous corporate compliance conditions and sunset clauses. Under the modernized tax framework, Section 154A serves as the primary, practical settlement mechanism: a nominal 0.25% Final Tax deducted at source for PSEB-registered active filers, which completely finalizes your income tax liability on IT export revenue.",
              answerUr: "سیکشن 154A کے تحت پی ایس ای بی رجسٹرڈ فائلرز کے لیے 0.25 فیصد فائنل ٹیکس کا آسان اور شفاف طریقہ کار نافذ ہے جس سے تمام انکم ٹیکس ذمہ داریاں مکمل ہو جاتی ہیں۔",
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Pakistan Software Export Board (PSEB) Official Portal', url: 'https://pseb.org.pk/' },
            { label: 'Tech Destinations PSEB Digital Registration Portal', url: 'https://techdestinations.com/' },
            { label: 'Federal Board of Revenue (FBR) – Income Tax Ordinance 2001 (Section 154A)', url: 'https://fbr.gov.pk/' },
            { label: 'State Bank of Pakistan (SBP) Foreign Exchange Operations & ESFCA Guidelines', url: 'https://www.sbp.org.pk/' },
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
