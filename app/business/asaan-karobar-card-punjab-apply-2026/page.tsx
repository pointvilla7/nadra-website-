import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, ComparisonVisual, FAQAccordionVisual, FeeTableVisual } from '@/components/visuals';
import {
  CreditCard,
  Briefcase,
  ShieldCheck,
  AlertTriangle,
  Send,
  ExternalLink,
  CheckCircle2,
  Clock,
  Building2,
  FileCheck2,
  Sparkles,
  HelpCircle,
  BellRing,
  Info,
  Check,
  XCircle,
  Landmark,
  Coins,
  Receipt,
  PhoneCall,
  UserCheck,
  Scale
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Asaan Karobar Card Punjab 2026: Apply Online at akc.punjab.gov.pk, Eligibility & 10 Lakh Limit',
  description:
    'Complete verified guide to Chief Minister Punjab Asaan Karobar Card 2026: Online apply at akc.punjab.gov.pk, up to PKR 10 Lakh (1 Million) interest-free revolving credit, Bank of Punjab (BOP) review, mandatory FBR tax filer rule, PKR 500 PSID fee & PITB scam warning.',
  keywords: [
    'asaan karobar card punjab apply 2026',
    'akc punjab gov pk online apply',
    'asaan karobar card eligibility criteria',
    'cm maryam nawaz business loan 10 lakh',
    'bank of punjab asaan karobar card',
    'asaan karobar card tax filer requirement',
    'asaan karobar card 500 fee psid',
    'asaan karobar card 25 percent cash withdrawal',
    'how to spot fake asaan karobar websites',
    'difference between kisan card and asaan karobar card',
  ],
  openGraph: {
    title: 'Asaan Karobar Card Punjab 2026: Apply Online at akc.punjab.gov.pk, Eligibility & 10 Lakh Limit',
    description:
      'Official verified guide to CM Maryam Nawaz Asaan Karobar Card: Up to PKR 1 Million interest-free credit via Bank of Punjab on akc.punjab.gov.pk. Verified eligibility, mandatory FBR filer rule & PITB scam warnings.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/business/asaan-karobar-card-punjab-apply-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/business/asaan-karobar-card-punjab-apply-2026',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com/' },
        { '@type': 'ListItem', position: 2, name: 'Business & SECP Registration', item: 'https://www.pakistaninfohub.com/business' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Asaan Karobar Card Punjab 2026',
          item: 'https://www.pakistaninfohub.com/business/asaan-karobar-card-punjab-apply-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Asaan Karobar Card Punjab 2026: Apply Online at akc.punjab.gov.pk, Eligibility & 10 Lakh Limit',
      description:
        'Authoritative entrepreneur guide explaining how small business owners and shopkeepers in Punjab can apply for up to PKR 10 Lakh interest-free revolving credit on akc.punjab.gov.pk with Bank of Punjab processing, FBR tax filer compliance, and safety alerts against fraudulent portals.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-16',
      dateModified: '2026-09-16',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/business/asaan-karobar-card-punjab-apply-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Apply Online for Asaan Karobar Card on akc.punjab.gov.pk',
      description:
        'Official 5-step application procedure for small business owners in Punjab using the Punjab government portal akc.punjab.gov.pk and Bank of Punjab credit appraisal.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Verify FBR Filer & Business Eligibility',
          text: 'Confirm you are a Pakistani citizen with Punjab domicile/CNIC, aged 21–57, with an active NTN on FBR Active Taxpayer List (ATL) or ready to complete tax registration, and have an operating business or viable startup plan in Punjab.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Create Account on akc.punjab.gov.pk',
          text: 'Access the official portal akc.punjab.gov.pk. Register with your 13-digit CNIC and mobile SIM registered in your own name.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Complete Business & Financial Profile',
          text: 'Fill out business details, shop/office location, business nature, monthly turnover, and upload scans of your CNIC, recent utility bills, NTN certificate, and business photographs.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Pay PKR 500 Processing Fee via Official PSID',
          text: 'Generate a 17-digit Payment System Identifier (PSID) on the portal. Pay exactly PKR 500 via 1Link, ATM, ePay Punjab, mobile banking app, or over the counter. Never pay cash to private agents.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Bank of Punjab (BOP) Appraisal & Card Delivery',
          text: 'The Bank of Punjab conducts physical verification and credit checks (e-CIB). Approved applicants sign the facility agreement at their assigned BOP branch and receive their chip-and-PIN Asaan Karobar Card.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is being an active tax filer on FBR ATL mandatory for Asaan Karobar Card?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Being an active tax filer with an active National Tax Number (NTN) on FBR’s Active Taxpayer List (ATL) is a mandatory requirement. For established businesses, tax filer standing is evaluated during the Bank of Punjab appraisal. For emerging micro-startups, applicants must commit to FBR/PRA tax compliance within an initial 6-month grace period to maintain the card facility.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can business owners from Sindh, KPK, or Balochistan apply for Asaan Karobar Card?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The Asaan Karobar Card is exclusively funded by the Government of Punjab. The applicant must possess a valid CNIC with permanent address or domicile in Punjab province, and the commercial business or shop premises must be located within Punjab’s 36 districts.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Asaan Karobar Card free government grant money or a repayable facility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It is a 100% interest-free revolving credit loan facility, NOT free cash. Borrowers can draw up to PKR 1,000,000 (10 Lakh) over a 3-year tenure with zero markup (all markup is subsidized by the Punjab Government). Used amounts must be repaid in monthly installments following an initial 3-month grace period. Repaid amounts become reusable under the revolving limit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can women entrepreneurs apply for Asaan Karobar Card?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Women entrepreneurs, home-based business owners, and female boutique/salon operators with valid CNIC and business setups in Punjab are highly encouraged to apply, with dedicated processing support through Bank of Punjab branches.',
          },
        },
        {
          '@type': 'Question',
          name: 'What can I actually spend the card limit on, and is cash withdrawal allowed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The card is restricted to verified commercial use: purchasing stock/inventory from wholesale merchants, paying vendors via digital POS terminals, paying commercial utility bills, and clearing government fees or taxes. Cash withdrawal is strictly capped at up to 25% of the sanctioned credit limit, and is typically activated after 6 months of satisfactory digital account history.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I spot a fake or compromised Asaan Karobar application website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Only use the official URL ending in punjab.gov.pk (specifically akc.punjab.gov.pk). Beware of third-party domains like .com, .com.pk, or blog pages—several top search results (such as asankarobarcard.com.pk) have been compromised with casino and gambling spam keywords (e.g., Mil win, Lucky 101, 3 Patti). The Punjab Government never uses WhatsApp for registration and only collects the PKR 500 fee via a 17-digit PSID code.',
          },
        },
      ],
    },
  ],
};

const financialLedgerRows = [
  {
    serviceEn: 'Maximum Credit Limit',
    serviceUr: 'زیادہ سے زیادہ کریڈٹ لمٹ',
    normal: 'Up to PKR 1,000,000 (10 Lakh)',
    urgent: 'Revolving Credit Facility',
    executive: 'Based on Business Turnover',
    tagEn: 'Credit Limit',
  },
  {
    serviceEn: 'Bank Markup / Interest Rate',
    serviceUr: 'بینک مارک اپ / شرح سود',
    normal: '0% (100% Interest-Free)',
    urgent: 'Paid by Punjab Govt',
    executive: 'Zero Markup to Borrower',
    tagEn: '0% Markup',
  },
  {
    serviceEn: 'Facility Tenure & Grace Period',
    serviceUr: 'قرض کی مدت اور رعایتی وقت',
    normal: '3 Years (36 Months)',
    urgent: '3-Month Initial Grace Period',
    executive: 'Revolving Line of Credit',
    tagEn: '3-Year Tenure',
  },
  {
    serviceEn: 'Official Application Processing Fee',
    serviceUr: 'سرکاری پروسیسنگ فیس',
    normal: 'PKR 500 (Non-refundable)',
    urgent: 'Paid Only via 17-Digit PSID',
    executive: 'No Cash to Agents',
    tagEn: 'Official Fee',
  },
  {
    serviceEn: 'Cash Withdrawal Ceiling',
    serviceUr: 'کیش نکالنے کی زیادہ سے زیادہ حد',
    normal: 'Up to 25% of Sanctioned Limit',
    urgent: '75% Must Be Digital / POS',
    executive: 'Activated After 6 Months',
    tagEn: '25% Cash Cap',
  },
  {
    serviceEn: 'Administering Financial Partner',
    serviceUr: 'فنانشل پارٹنر بینک',
    normal: 'The Bank of Punjab (BOP)',
    urgent: 'Commercial Verification',
    executive: 'Provincial Treasury Backed',
    tagEn: 'BOP Facility',
  },
];

const processWorkflowSteps = [
  {
    number: 1,
    icon: <UserCheck className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Check FBR Filer Status & Business Criteria',
    titleUr: 'ایف بی آر فائلر اور بنیادی اہلیت کی جانچ',
    descEn: 'Confirm you meet age (21–57), have Punjab CNIC, active business/startup in Punjab, and active NTN on FBR Active Taxpayer List (ATL).',
    descUr: 'عمر 21 سے 57 سال، پنجاب کا شناختی کارڈ، صوبے میں فعال کاروبار اور ایف بی آر کی ایکٹو ٹیکس پیئر لسٹ میں شمولیت کی تصدیق کریں۔',
    tagEn: 'Prerequisite',
    tagUr: 'بنیادی شرط',
  },
  {
    number: 2,
    icon: <ExternalLink className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Register on Official Portal: akc.punjab.gov.pk',
    titleUr: 'آفیشل پورٹل akc.punjab.gov.pk پر رجسٹریشن',
    descEn: 'Visit the only genuine government portal akc.punjab.gov.pk. Create an account using your 13-digit CNIC and a SIM registered in your own name.',
    descUr: 'سرکاری پورٹل akc.punjab.gov.pk پر جائیں اور اپنے شناختی کارڈ اور ذاتی سم سے لاگ ان بنائیں۔',
    tagEn: 'Official Portal',
    tagUr: 'سرکاری پورٹل',
  },
  {
    number: 3,
    icon: <FileCheck2 className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Submit Business Profile & Upload Documents',
    titleUr: 'کاروباری کوائف اور دستاویزات اپلوڈ کریں',
    descEn: 'Enter business address, category, monthly turnover, and upload clear photos of CNIC, business premises, utility bill, and NTN certificate.',
    descUr: 'کاروبار کا پتہ، ماہانہ آمدن درج کریں اور شناختی کارڈ، دکان/دفتر کی تصاویر، بجلی بل اور این ٹی این سرٹیفکیٹ اپلوڈ کریں۔',
    tagEn: 'Documentation',
    tagUr: 'دستاویزات',
  },
  {
    number: 4,
    icon: <Receipt className="w-5 h-5 text-doc-brass" />,
    titleEn: 'Pay PKR 500 Application Fee via PSID',
    titleUr: '17 ہندسی PSID کے ذریعے 500 روپے فیس کی ادائیگی',
    descEn: 'The portal generates a unique 17-digit PSID code. Pay PKR 500 through ePay Punjab, ATM, 1Link mobile banking, or bank counter. Never pay cash to agents.',
    descUr: 'پورٹل سے 17 ہندسوں کا PSID کوڈ حاصل کریں اور موبائل ایپ یا اے ٹی ایم سے 500 روپے سرکاری فیس ادا کریں۔ کسی کو نقد رقم نہ دیں۔',
    tagEn: 'PSID Payment',
    tagUr: 'پی ایس آئی ڈی فیس',
  },
  {
    number: 5,
    icon: <CreditCard className="w-5 h-5 text-doc-brass" />,
    titleEn: 'BOP Credit Appraisal & Card Issuance',
    titleUr: 'بینک آف پنجاب کی فزیکل تصدیق اور کارڈ کی وصولی',
    descEn: 'Bank of Punjab conducts physical business verification and credit evaluation (e-CIB). Once approved, sign the agreement at your BOP branch to collect your card.',
    descUr: 'بینک آف پنجاب کا نمائندہ فزیکل معائنہ کرے گا۔ منظوری کے بعد برانچ سے معاہدہ سائن کریں اور آسان کاروبار کارڈ حاصل کریں۔',
    tagEn: 'Card Delivery',
    tagUr: 'کارڈ کا حصول',
  },
];

export default function AsaanKarobarCardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans pb-16">
        {/* Top Breadcrumb Bar */}
        <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 py-2.5 flex items-center justify-between">
            <Breadcrumbs
              items={[
                { nameEn: 'Business & SECP', nameUr: 'کاروبار اور ایس ای سی پی', url: '/business' },
                {
                  nameEn: 'Asaan Karobar Card 2026',
                  nameUr: 'آسان کاروبار کارڈ 2026',
                  url: '/business/asaan-karobar-card-punjab-apply-2026',
                },
              ]}
            />
            <VerifiedBadge textEn="Verified September 16, 2026 • Official Guide" textUr="مصدقہ 16 ستمبر 2026 • مستند گائیڈ" />
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 pt-6 space-y-8">
          {/* URGENT ANNOUNCEMENT BANNER */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white p-4 sm:p-5 shadow-lg border border-emerald-600/40">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/10 backdrop-blur shrink-0 mt-0.5">
                  <BellRing className="w-5 h-5 text-amber-300 animate-bounce" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950/70 text-emerald-200 text-[10px] font-mono font-extrabold uppercase tracking-wider">
                      OFFICIAL PUNJAB SME FACILITY • 2026
                    </span>
                    <span className="text-xs text-emerald-100 font-medium">BOP Partnership</span>
                  </div>
                  <p className="text-sm sm:text-base font-bold text-white mt-1 leading-snug">
                    Interest-Free Credit Up to PKR 1 Million (10 Lakh) on akc.punjab.gov.pk
                  </p>
                  <p className="text-xs text-emerald-100 mt-0.5 font-sans">
                    Revolving working capital facility for small retailers, shopkeepers &amp; startups in Punjab. Application fee is PKR 500 payable only via official PSID.
                  </p>
                </div>
              </div>
              <a
                href="https://akc.punjab.gov.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-emerald-950 font-bold text-xs sm:text-sm hover:bg-emerald-50 transition shadow-md shrink-0 self-stretch sm:self-auto justify-center"
              >
                <span>Official Portal akc.punjab.gov.pk</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-800" />
              </a>
            </div>
          </div>

          {/* CRITICAL SECURITY & SPAM WARNING (TOP PLACEMENT) */}
          <section className="p-5 sm:p-6 rounded-3xl bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-300 dark:border-rose-800 space-y-3">
            <div className="flex items-center gap-2 text-rose-800 dark:text-rose-300 font-serif font-extrabold text-lg sm:text-xl">
              <AlertTriangle className="w-6 h-6 text-rose-600 dark:text-rose-400 shrink-0" />
              <h2>Urgent Warning: Beware of Compromised Sites &amp; Casino Spam Fake Portals</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              The Punjab Information Technology Board (PITB) has issued high-priority public advisories warning citizens against fraudulent websites mimicking Punjab welfare schemes. Multiple high-ranking search engine results for Asaan Karobar Card (such as <code className="bg-white dark:bg-slate-900 px-1 py-0.5 rounded text-rose-700 font-bold">asankarobarcard.com.pk</code> and similar content farms) are <strong>compromised with illicit casino, gambling, and betting spam</strong> (e.g., &quot;Mil win&quot;, &quot;Lucky 101&quot;, &quot;3 Patti Blue&quot;, &quot;Pkrspin&quot;).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs font-sans">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900 space-y-1">
                <strong className="text-rose-700 dark:text-rose-400 block font-bold">Only .punjab.gov.pk Is Genuine</strong>
                <p className="text-slate-600 dark:text-slate-300">The sole authentic portal is <code className="font-mono text-emerald-600 font-bold">akc.punjab.gov.pk</code>. Never trust .com, .com.pk, or blog pages asking for your CNIC.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900 space-y-1">
                <strong className="text-rose-700 dark:text-rose-400 block font-bold">PSID Only — No Agent Cash</strong>
                <p className="text-slate-600 dark:text-slate-300">The PKR 500 fee is payable ONLY through a system-generated 17-digit PSID. Never transfer money via JazzCash/EasyPaisa to personal phone numbers.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900 space-y-1">
                <strong className="text-rose-700 dark:text-rose-400 block font-bold">Never Disclose Banking PIN or OTP</strong>
                <p className="text-slate-600 dark:text-slate-300">Government officials and BOP will never call asking for your SMS verification codes, ATM PIN, or mobile app passwords.</p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-rose-200 dark:border-rose-900 flex items-center justify-between gap-3 text-xs">
              <span className="text-slate-700 dark:text-slate-300">Suspect fraud? Call the official Chief Minister Helpline or Bank of Punjab:</span>
              <div className="flex items-center gap-2 shrink-0 font-mono font-bold text-rose-700 dark:text-rose-400">
                <span>Helpline: 1786</span>
                <span>•</span>
                <span>BOP: 042-111-333-267</span>
              </div>
            </div>
          </section>

          {/* Header Section */}
          <header className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold tracking-wide">
              <Briefcase className="w-3.5 h-3.5" />
              <span>SME REVOLVING CREDIT FACILITY • CHIEF MINISTER MARYAM NAWAZ INITIATIVE</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-doc-ink dark:text-white tracking-tight leading-tight">
              Asaan Karobar Card Punjab 2026: Apply Online at akc.punjab.gov.pk, Eligibility &amp; 10 Lakh Limit
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              The verified, independent public guide to the Government of Punjab&apos;s Asaan Karobar Card scheme. Learn how small retail shopkeepers, traders, and emerging entrepreneurs across Punjab can access up to PKR 10 Lakh (1 Million) in <strong>interest-free revolving credit</strong>, navigate Bank of Punjab scrutiny, satisfy the mandatory FBR tax-filer requirement, and protect personal data from predatory fake loan websites.
            </p>
          </header>

          {/* Direct Answer Box */}
          <DirectAnswerBox
            topicTitleEn="Direct Answer: Asaan Karobar Card Punjab (2026)"
            topicTitleUr="خلاصہ: وزیراعلیٰ پنجاب آسان کاروبار کارڈ 2026"
            answerEn="The Asaan Karobar Card is a digital SME revolving credit card by the Government of Punjab and Bank of Punjab (BOP), providing up to PKR 1,000,000 (10 Lakh) in interest-free business financing over a 3-year tenure with a 3-month initial grace period. Applications are submitted online exclusively at akc.punjab.gov.pk with a PKR 500 fee paid via official 17-digit PSID. Applicants must be Punjab residents aged 21–57, operate a business in Punjab, and be active tax filers on FBR’s ATL (or commit to FBR registration). Up to 25% cash withdrawal is permitted after 6 months; 75% is restricted to digital/POS business payments."
            answerUr="آسان کاروبار کارڈ حکومت پنجاب اور بینک آف پنجاب (BOP) کا مشترکہ منصوبہ ہے جس کے تحت چھوٹے دکانداروں اور تاجروں کو 3 سال کی مدت کے لیے 10 لاکھ روپے تک بلا سود ریوالونگ کریڈٹ فراہم کیا جاتا ہے۔ آن لائن درخواستیں صرف آفیشل پورٹل akc.punjab.gov.pk پر جمع ہوتی ہیں اور 500 روپے فیس صرف 17 ہندسی PSID کے ذریعے ادا کی جاتی ہے۔ عمر کی حد 21 تا 57 سال، پنجاب کا شناختی کارڈ اور ایف بی آر میں فائلر ہونا لازمی ہے۔ 6 ماہ بعد 25 فیصد تک کیش نکلوانے کی اجازت ہے جبکہ 75 فیصد رقم صرف ڈیجیٹل خریداری اور بلوں کے لیے مخصوص ہے۔"
          />

          {/* CRITICAL ELIGIBILITY GATE: FBR TAX FILER STATUS EXPLAINED */}
          <section className="p-6 sm:p-8 rounded-3xl bg-amber-500/10 dark:bg-amber-950/20 border-2 border-amber-300 dark:border-amber-800/60 shadow-sm space-y-5">
            <div className="flex items-center gap-2.5 text-amber-900 dark:text-amber-300 font-serif font-extrabold text-lg sm:text-xl">
              <Scale className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0" />
              <h2>The Critical Eligibility Gate: Mandatory FBR Tax Filer Standing</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              Unlike generic social welfare handouts, the Asaan Karobar Card is a formalized commercial credit facility backed by the provincial treasury. <strong>Most low-quality websites bury or omit this fact:</strong> you must have an active National Tax Number (NTN) and appear on FBR&apos;s Active Taxpayer List (ATL) to successfully qualify:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans pt-1">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800/40 space-y-2">
                <strong className="text-doc-ink dark:text-white block font-bold text-sm">For Existing Businesses &amp; Retailers</strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Established shopkeepers and registered sole proprietors must provide an active NTN showing filer status on FBR&apos;s ATL. Applications from verified filers undergo expedited automated processing with the Bank of Punjab.
                </p>
                <Link
                  href="/tax/fbr-filer-status-check-cnic"
                  className="inline-flex items-center gap-1 text-doc-seal dark:text-amber-400 font-bold hover:underline text-xs"
                >
                  <span>Check FBR Active Taxpayer Status by CNIC →</span>
                </Link>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800/40 space-y-2">
                <strong className="text-doc-ink dark:text-white block font-bold text-sm">For Micro-Enterprises &amp; Startups</strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Emerging entrepreneurs without prior tax records may submit initial applications, but the Bank of Punjab enforces a binding 6-month compliance window. Failure to file your annual return will lead to card suspension.
                </p>
                <Link
                  href="/tax/how-to-become-tax-filer-pakistan-2026"
                  className="inline-flex items-center gap-1 text-doc-seal dark:text-amber-400 font-bold hover:underline text-xs"
                >
                  <span>How to Become an FBR Tax Filer in 2026 →</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Full Eligibility Checklist */}
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Prerequisites Checklist</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                Who Is Eligible for Asaan Karobar Card on akc.punjab.gov.pk?
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Verify that you satisfy all six technical criteria before paying the PKR 500 application fee:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">1. Punjab Domicile &amp; Valid CNIC</strong>
                  <p className="text-slate-600 dark:text-slate-300">
                    Pakistani citizen holding an unexpired 13-digit Computerized National Identity Card (CNIC) with permanent residence in any of Punjab&apos;s 36 districts.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">2. Age Limit (21 to 57 Years)</strong>
                  <p className="text-slate-600 dark:text-slate-300">
                    Applicant must be at least 21 years old and not older than 57 years on the date of application submission, aligned with commercial banking guidelines.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">3. Operating Business or Viable Startup</strong>
                  <p className="text-slate-600 dark:text-slate-300">
                    Must operate a verifiable commercial retail shop, trading outlet, cottage workshop, or provide a sound business plan with defined premises located inside Punjab.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <FileCheck2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">4. Mobile SIM Registered on Own CNIC</strong>
                  <p className="text-slate-600 dark:text-slate-300">
                    The mobile number submitted on <code className="text-emerald-600 font-bold">akc.punjab.gov.pk</code> must be biometrically registered to your own CNIC in the PTA database.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <Landmark className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">5. Clean Credit History (No e-CIB Defaults)</strong>
                  <p className="text-slate-600 dark:text-slate-300">
                    Applicant must not be a write-off or loan defaulter with any commercial bank, microfinance institution, or past government financing scheme.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <Scale className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-doc-ink dark:text-white block font-bold">6. FBR NTN &amp; Active Taxpayer Status</strong>
                  <p className="text-slate-600 dark:text-slate-300">
                    Applicant must possess an active NTN and be on FBR ATL (or comply with tax registration within 6 months of card issuance as mandated by BOP).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Fee Table Visual: Financial Ledger & Facility Terms */}
          <FeeTableVisual
            titleEn="Official Facility Terms & Financial Ledger (2026)"
            titleUr="آسان کاروبار کارڈ کے مصدقہ مالیاتی ضوابط اور شرائط"
            subtitleEn="Confirmed limits, zero-markup terms, processing fee, and tenure structure under Bank of Punjab guidelines"
            subtitleUr="بینک آف پنجاب اور حکومت پنجاب کے تحت منظور شدہ کریڈٹ لمٹ، صفر مارک اپ اور فیس شیڈول"
            rows={financialLedgerRows}
            noteEn="Important: The PKR 500 application fee is non-refundable and must only be paid through the official 17-digit PSID generated on akc.punjab.gov.pk. Never hand over cash to individuals or agents."
            noteUr="اہم نوٹ: 500 روپے کی پروسیسنگ فیس ناقابل واپسی ہے اور صرف پورٹل سے جاری کردہ 17 ہندسی PSID کے ذریعے ادا کی جائے۔ کسی شخص کو نقد رقم مت دیں۔"
          />

          {/* What the Card Can Be Used For vs. Restrictions */}
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Facility Usage Guidelines</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                What Can You Spend the Card On? (75% Digital vs. 25% Cash)
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                The Asaan Karobar Card is engineered to stimulate commercial business activity, not unmonitored personal consumption:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans">
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Approved Business Usages (75% to 100%)</span>
                </div>
                <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span><strong>Wholesale Inventory &amp; Stock:</strong> Direct point-of-sale (POS) card swipes at wholesale grain markets, fabric centers, hardware distributors, and authorized FMCG dealers.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span><strong>Vendor &amp; Supplier Payments:</strong> Digital bank transfers to registered vendor bank accounts through the BOP digital business portal.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span><strong>Commercial Utility Bills:</strong> Paying commercial LESCO, GEPCO, FESCO, MEPCO electricity and Sui Gas bills directly via card rails.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span><strong>Taxes &amp; Municipal Fees:</strong> Clearing FBR income tax challans, PRA sales tax, and local government shop trade license renewals.</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800/40 space-y-2">
                <div className="flex items-center gap-2 text-rose-800 dark:text-rose-300 font-bold text-sm">
                  <XCircle className="w-5 h-5 text-rose-600" />
                  <span>Restrictions &amp; 25% Cash Withdrawal Rule</span>
                </div>
                <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-600 font-bold">•</span>
                    <span><strong>25% Cash Cap:</strong> ATM cash withdrawal is strictly restricted to a maximum of <strong>25% of the total approved limit</strong> (e.g., up to Rs. 250,000 on a Rs. 10 Lakh card), activated only after 6 months of prompt repayment history.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-600 font-bold">•</span>
                    <span><strong>Personal Expenses Prohibited:</strong> Funds cannot be used for domestic household groceries, luxury jewelry, personal foreign travel, or vehicle leasing.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-600 font-bold">•</span>
                    <span><strong>Gambling &amp; Betting Blocked:</strong> Merchant Category Codes (MCC) for casinos, betting apps, or cryptocurrency exchanges are hard-blocked by the State Bank and BOP.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Process Steps Diagram */}
          <ProcessStepsDiagram
            badgeEn="OFFICIAL WORKFLOW (2026)"
            badgeUr="درخواست اور وصولی کا طریقہ کار"
            titleEn="Step-by-Step: How to Apply & Receive Your Asaan Karobar Card"
            titleUr="آسان کاروبار کارڈ میں آن لائن اپلائی اور وصولی کا مرحلہ وار طریقہ"
            subtitleEn="5 verified stages from online registration to PSID fee payment, BOP verification, and card dispatch"
            subtitleUr="آن لائن رجسٹریشن سے لے کر 500 روپے فیس ادائیگی، بینک تصدیق اور کارڈ وصولی تک تمام مراحل"
            steps={processWorkflowSteps}
          />

          {/* Side-by-Side Comparison: Asaan Karobar vs Kisan Card vs PM Youth Loan */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Distinguish Real Schemes</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
                Comparing Asaan Karobar Card vs. Kisan Card vs. PM Youth Loan
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Low-quality blogs frequently confuse the urban SME Karobar Card with the provincial agriculture Kisan Card and the federal PM Youth Loan. Understand which scheme matches your profile:
              </p>
            </div>

            <ComparisonVisual
              titleEn="Asaan Karobar Card vs. CM Punjab Kisan Card vs. PM Youth Business Loan"
              titleUr="آسان کاروبار کارڈ، کسان کارڈ اور پی ایم یوتھ لون سکیم میں واضح فرق"
              subtitleEn="Target beneficiaries, loan ceilings, official portals, and eligibility verification databases"
              subtitleUr="مستفیدین، زیادہ سے زیادہ رقم، آفیشل پورٹلز اور تصدیقی ریکارڈز کا موازنہ"
              items={[
                {
                  titleEn: "Asaan Karobar Card (Punjab)",
                  titleUr: "آسان کاروبار کارڈ (پنجاب)",
                  subtitleEn: "akc.punjab.gov.pk",
                  subtitleUr: "صرف پنجاب کے تاجروں اور دکانداروں کے لیے",
                  badgeEn: "SMEs & SHOPKEEPERS",
                  badgeUr: "دکاندار و تاجر",
                  badgeVariant: "emerald",
                  pointsEn: [
                    "Targeted at urban/rural retailers, traders, and small business owners.",
                    "Interest-free revolving credit limit up to PKR 1,000,000 (10 Lakh).",
                    "3-year tenure with 3-month grace period and up to 25% cash withdrawal.",
                    "Mandatory FBR tax filer compliance (or 6-month grace commitment).",
                    "Official portal: akc.punjab.gov.pk (PKR 500 fee via 17-digit PSID).",
                  ],
                  features: [
                    { labelEn: "Target Beneficiary", valueEn: "Shopkeepers & SMEs", isPositive: true },
                    { labelEn: "Credit Limit", valueEn: "Up to PKR 10 Lakh", isPositive: true },
                    { labelEn: "Markup / Interest", valueEn: "0% (Interest-Free)", isPositive: true },
                    { labelEn: "Verification Channel", valueEn: "FBR ATL + BOP Credit Scrutiny", isPositive: true },
                    { labelEn: "Official Portal", valueEn: "akc.punjab.gov.pk", isPositive: true },
                  ],
                  recommendedForEn: "Traders, retailers, and small enterprise owners in Punjab needing working capital for inventory and stock.",
                },
                {
                  titleEn: "CM Punjab Kisan Card",
                  titleUr: "وزیراعلیٰ پنجاب کسان کارڈ",
                  subtitleEn: "SMS to 8070 / agripunjab.gov.pk",
                  subtitleUr: "صرف پنجاب کے کاشتکاروں کے لیے",
                  badgeEn: "FARMERS ONLY",
                  badgeUr: "صرف کسانوں کے لیے",
                  badgeVariant: "brass",
                  pointsEn: [
                    "Exclusively for agricultural landholders in Punjab owning 1 to 12.5 acres.",
                    "Subsidized interest-free agriculture credit: Rs. 30,000/acre up to Rs. 150,000.",
                    "Covers agricultural inputs: DAP/Urea fertilizers, seeds, and pesticides.",
                    "Verified strictly through Punjab Land Records Authority (PLRA) land records.",
                    "Apply via official SMS: PKC [CNIC] to 8070 or Tehsil Agriculture Office.",
                  ],
                  features: [
                    { labelEn: "Target Beneficiary", valueEn: "Farmers (1–12.5 Acres)", isPositive: true },
                    { labelEn: "Credit Limit", valueEn: "Rs. 1.5 Lakh per Crop", isPositive: null },
                    { labelEn: "Markup / Interest", valueEn: "0% (Interest-Free)", isPositive: true },
                    { labelEn: "Verification Channel", valueEn: "PLRA Land Records + NADRA", isPositive: true },
                    { labelEn: "Official Channel", valueEn: "SMS to 8070 / BOP Branches", isPositive: true },
                  ],
                  recommendedForEn: "Agricultural landowners in Punjab seeking immediate interest-free fertilizer and seed financing per crop.",
                },
                {
                  titleEn: "PM Youth Business & Agriculture Loan",
                  titleUr: "پرائم منسٹر یوتھ بزنس اینڈ ایگریکلچر لون",
                  subtitleEn: "pmyp.gov.pk",
                  subtitleUr: "ملک گیر وفاقی نوجوان قرضہ پروگرام",
                  badgeEn: "NATIONWIDE FEDERAL",
                  badgeUr: "ملک گیر وفاقی",
                  badgeVariant: "blue",
                  pointsEn: [
                    "Federal scheme open across all four provinces, ICT, AJK & Gilgit-Baltistan.",
                    "Tier 1 (Up to PKR 500,000 interest-free), Tier 2 (Up to 1.5M at 5%), Tier 3 (Up to 7.5M at 7%).",
                    "Aimed at youth aged 21–45 seeking new business startup capital.",
                    "Administered via major participating commercial banks nationwide.",
                    "Applications processed solely through the federal portal pmyp.gov.pk.",
                  ],
                  features: [
                    { labelEn: "Target Beneficiary", valueEn: "Pakistani Youth (21–45 Yrs)", isPositive: true },
                    { labelEn: "Credit Limit", valueEn: "Up to PKR 7.5 Million", isPositive: true },
                    { labelEn: "Markup / Interest", valueEn: "0% (Tier 1) / Subsidized Tier 2-3", isPositive: null },
                    { labelEn: "Verification Channel", valueEn: "Commercial Banking Discretion", isPositive: null },
                    { labelEn: "Official Portal", valueEn: "pmyp.gov.pk", isPositive: true },
                  ],
                  recommendedForEn: "Aspiring young entrepreneurs nationwide seeking federal startup financing beyond Punjab.",
                },
              ]}
            />
          </section>

          {/* Cross-Link Card to Kisan Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-900 to-yellow-900 text-white shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-amber-300 font-mono text-[10px] uppercase font-bold tracking-wider block">
                Are You a Farmer Looking for Agricultural Relief?
              </span>
              <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                CM Punjab Kisan Card: Rs. 150,000 Fertilizer &amp; Seed Loan via 8070 SMS
              </h3>
              <p className="text-xs text-amber-100 max-w-xl">
                If you own 1 to 12.5 acres of agricultural land, apply for interest-free fertilizer subsidies and seasonal crop financing through the separate Agriculture Department scheme.
              </p>
            </div>
            <Link
              href="/loans/cm-punjab-kisan-card-apply-2026"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-amber-950 font-bold text-xs hover:bg-amber-50 transition shadow shrink-0"
            >
              <span>View Kisan Card Guide →</span>
            </Link>
          </div>

          {/* Ad Zone */}
          <AdPlacementZone format="horizontal" />

          {/* Related Business & Tax Utilities on Pakistan Info Hub */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
              <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
                Related Business &amp; Tax Compliance Resources on Pakistan Info Hub
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link
                href="/tax/fbr-filer-status-check-cnic"
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
              >
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">FBR Compliance</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  FBR Filer Status Check →
                </h3>
                <p className="text-xs text-slate-500 mt-1">Check your 13-digit CNIC on Active Taxpayer List (ATL) instantly.</p>
              </Link>

              <Link
                href="/business/secp-company-registration-online-2026"
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
              >
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Corporate Setup</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  SECP Company Registration →
                </h3>
                <p className="text-xs text-slate-500 mt-1">Register your Pvt Ltd company or sole proprietorship online.</p>
              </Link>

              <Link
                href="/loans/how-to-spot-fake-loan-scheme-scams-2026"
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
              >
                <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Cyber Fraud Safety</span>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                  How to Spot Fake Loan Scams →
                </h3>
                <p className="text-xs text-slate-500 mt-1">Identify phishing loan websites, fake WhatsApp agents, and fraudulent tokens.</p>
              </Link>
            </div>
          </section>

          {/* FAQ Accordion Visual */}
          <FAQAccordionVisual
            titleEn="Frequently Asked Questions: Asaan Karobar Card Punjab 2026"
            titleUr="عام طور پر پوچھے جانے والے ضروری سوالات و جوابات"
            subtitleEn="Verified answers on FBR filer compliance, application fee, cash withdrawal limits, and fraud protection"
            subtitleUr="ٹیکس فائلر کی لازمی شرط، 500 روپے فیس، کیش نکلوانے کی حد اور جعلی ویب سائٹس سے بچاؤ"
            items={[
              {
                questionEn: "Do I really need to be an active tax filer on FBR's ATL to qualify?",
                questionUr: "کیا آسان کاروبار کارڈ کے لیے ایف بی آر کا فعال فائلر ہونا واقعی لازمی ہے؟",
                answerEn: "Yes. Bank of Punjab and the Government of Punjab require applicants to be active tax filers on FBR's Active Taxpayer List (ATL) with a registered NTN. For established traders, this is verified before facility approval. For new startups, Bank of Punjab provides a conditional approval subject to formal tax registration within an initial 6-month period. Unregistered non-filers will face application rejection or subsequent card cancellation.",
                answerUr: "جی ہاں، بینک آف پنجاب اور حکومت پنجاب کے ضوابط کے مطابق این ٹی این اور ایف بی آر کی ایکٹو ٹیکس پیئر لسٹ میں نام ہونا لازمی شرط ہے۔ موجودہ کاروباروں کے لیے فائلر ہونا فوری ضروری ہے، جبکہ نئے اسٹارٹ اپس کو 6 ماہ کے اندر اندر ٹیکس رجسٹریشن مکمل کرنے کی مہلت دی جاتی ہے۔ نان فائلرز کی درخواستیں مسترد کر دی جائیں گی۔",
              },
              {
                questionEn: "Can I apply if my business or shop is located outside Punjab (e.g. Karachi or Peshawar)?",
                questionUr: "کیا سندھ یا خیبر پختونخوا کے کاروباری حضرات بھی اس سکیم میں اپلائی کر سکتے ہیں؟",
                answerEn: "No. The Asaan Karobar Card is 100% funded by the Punjab provincial treasury. Both the applicant (as verified by CNIC domicile) and the physical business premises must be located within the 36 districts of Punjab. Non-residents can explore federal initiatives like the Prime Minister Youth Business Loan Scheme (pmyp.gov.pk).",
                answerUr: "بالکل نہیں۔ یہ سکیم حکومت پنجاب کی فنڈنگ سے جاری ہے، اس لیے درخواست گزار کا شناختی کارڈ اور اس کی دکان یا کاروبار دونوں کا صوبہ پنجاب میں ہونا لازمی ہے۔ پنجاب سے باہر کے شہری وفاقی وزیر اعظم یوتھ لون سکیم میں اپلائی کر سکتے ہیں۔",
              },
              {
                questionEn: "Is this free money from the government, or does it have to be repaid?",
                questionUr: "کیا یہ حکومت کی طرف سے مفت گرانٹ ہے یا رقم واپس کرنی ہوگی؟",
                answerEn: "It is an interest-free loan facility that MUST be repaid. The Punjab Government pays 100% of the commercial interest/markup on your behalf, so you repay only the exact principal amount drawn. Repayments start after an initial 3-month grace period in easy monthly installments over a 3-year revolving tenure. Repaid funds can be reused within your approved limit.",
                answerUr: "یہ کوئی مفت کیش امداد نہیں بلکہ بلا سود قرض ہے جو واپس کرنا لازمی ہے۔ حکومت پنجاب آپ کے حصے کا تمام سود بینک کو ادا کرتی ہے، اس لیے آپ کو صرف اصل رقم 3 سال کے دوران آسان ماہانہ اقساط میں واپس کرنا ہوتی ہے۔ پہلی قسط 3 ماہ کے رعایتی وقفے کے بعد شروع ہوتی ہے۔",
              },
              {
                questionEn: "Can women entrepreneurs and home-based business owners apply?",
                questionUr: "کیا خواتین دکاندار اور گھریلو کاروباری خواتین بھی اپلائی کر سکتی ہیں؟",
                answerEn: "Yes! Women entrepreneurs, home-based caterers, boutique designers, salon owners, and craft business operators with a valid CNIC and verifiable enterprise in Punjab are fully eligible and encouraged to apply on akc.punjab.gov.pk.",
                answerUr: "جی ہاں! پنجاب سے تعلق رکھنے والی باہمت خواتین، بیوٹیشنز، گھریلو کاروبار، بوتیک اور دستکاری سے وابستہ خواتین اپنے شناختی کارڈ کے ساتھ پورٹل پر بلا جھجھک درخواست جمع کرا سکتی ہیں۔",
              },
              {
                questionEn: "What can I actually spend the card funds on, and can I withdraw all cash from an ATM?",
                questionUr: "کارڈ کی رقم کن چیزوں پر خرچ کی جا سکتی ہے اور کیا سارا کیش نکلوایا جا سکتا ہے؟",
                answerEn: "No, you cannot withdraw all cash. Cash withdrawal is strictly capped at up to 25% of your approved limit, and is typically unlocked after 6 months of responsible repayment. The remaining 75% to 100% must be spent directly on business operations: purchasing wholesale inventory via POS swipe, transferring funds to verified suppliers, paying commercial utility bills, and clearing taxes.",
                answerUr: "نہیں، سارا کیش نہیں نکلوایا جا سکتا۔ اے ٹی ایم سے کیش نکالنے کی زیادہ سے زیادہ حد صرف 25 فیصد ہے جو کہ 6 ماہ بعد کھولی جاتی ہے۔ بقیہ 75 فیصد رقم صرف ڈیجیٹل خریداری، خام مال، دکان کے سامان کی ادائیگی اور کمرشل یوٹیلیٹی بلز کی ادائیگی کے لیے پی او ایس مشینوں پر استعمال ہو سکتی ہے۔",
              },
              {
                questionEn: "How do I recognize fake or compromised websites claiming to offer Asaan Karobar Card?",
                questionUr: "جعلی اور ہیک شدہ ویب سائٹس کی شناخت کیسے کی جائے؟",
                answerEn: "First, verify that the website URL ends strictly in 'punjab.gov.pk' (the official portal is akc.punjab.gov.pk). Beware of third-party domains ending in .com, .pk, or .com.pk that inject casino, gambling, or betting promotions (e.g. Mil win, Lucky 101, 3 Patti). Second, remember that the official application fee is exactly PKR 500, paid only through a 17-digit government PSID. Anyone asking for cash, advance commission, or JazzCash transfers to private phone numbers is an illegal scammer.",
                answerUr: "سب سے پہلے ویب سائٹ کا ایڈریس چیک کریں جو کہ صرف punjab.gov.pk ہونا چاہیے (آفیشل ویب سائٹ akc.punjab.gov.pk ہے)۔ کسی بھی ڈاٹ کام یا غیر سرکاری سائٹ پر مت جائیں جن پر جوئے اور کیسینو (جیسے Lucky 101 یا 3 Patti) کے اشتہارات لگے ہوں۔ دوسرا یہ کہ 500 روپے فیس صرف سرکاری 17 ہندسی PSID سے ادا ہوتی ہے، کسی جاز کیش یا ایزی پیسہ نمبر پر کوئی رقم مت بھیجیں۔",
              },
            ]}
          />
        </article>
      </main>
    </>
  );
}
