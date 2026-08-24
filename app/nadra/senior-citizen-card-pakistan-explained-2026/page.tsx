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
  CreditCard,
  Building,
  Users,
  FileText,
  BadgeCheck,
  Scale,
  Sparkles,
  HeartHandshake,
  Fingerprint,
  Smile,
  AlertCircle,
  Bus,
  Check
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Senior Citizen Card in Pakistan Explained (2026): NADRA CNIC Status vs Islamabad Bill vs Ehsaas | Pakistan Info Hub',
  description:
    'Clear, fact-checked guide to senior citizen benefits in Pakistan: Understand the difference between NADRA 60+ CNIC status with facial recognition, the Islamabad 25% discount bill, and the Ehsaas Ba Himmat Buzurg cash stipend.',
  keywords: [
    'senior citizen card pakistan 2026',
    'nadra senior citizen cnic rules',
    'islamabad senior citizens bill 2025 discount',
    'ehsaas ba himmat buzurg program 8171',
    'nadra facial recognition senior citizens fingerprints',
    'pakistan senior citizen travel railway discount',
    'senior citizen benefits punjab sindh pakistan',
  ],
  openGraph: {
    title: 'Senior Citizen Card in Pakistan Explained (2026): NADRA CNIC vs Islamabad Bill vs Ehsaas',
    description:
      'Genuinely clear breakdown of NADRA senior CNIC status, ICT discount legislation, and poverty-targeted provincial elderly stipends in Pakistan.',
    url: 'https://www.pakistaninfohub.com/nadra/senior-citizen-card-pakistan-explained-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/nadra/senior-citizen-card-pakistan-explained-2026' },
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
          name: 'Senior Citizen Benefits Explained 2026',
          item: 'https://www.pakistaninfohub.com/nadra/senior-citizen-card-pakistan-explained-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Senior Citizen Card in Pakistan Explained: NADRA CNIC Status, Islamabad 25% Discount Bill, and Ba Himmat Buzurg Stipend',
      description:
        'A comprehensive public guide clarifying the distinction between NADRA Senior Citizen CNIC verification, Islamabad Capital Territory discounts, and social safety net cash stipends.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-23',
      dateModified: '2026-08-23',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/nadra/senior-citizen-card-pakistan-explained-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I need to apply for a separate plastic Senior Citizen Card in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In most cases, no. Under current NADRA regulations, senior citizen status is embedded directly in your regular Computerized National Identity Card (CNIC). Citizens aged 60 and above (or 55+ for lifetime CNIC issuance) use their standard Smart CNIC to access senior counters, railway ticket discounts, and public services without holding a distinct separate plastic card.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the 25% senior discount under the Islamabad Senior Citizenship Bill apply nationwide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The Islamabad Senior Citizenship Bill passed by the National Assembly Standing Committee on Interior is strictly territorial legislation applying to the Islamabad Capital Territory (ICT). Provinces such as Punjab, Sindh, and Khyber Pakhtunkhwa have their own respective Senior Citizens Welfare Acts which govern regional concessions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can someone with a private or government pension receive the Ehsaas Ba Himmat Buzurg stipend?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The Ba Himmat Buzurg Program (and related BISP social safety nets) is a poverty-targeted welfare stipend strictly restricted to seniors aged 65 and above whose household Poverty Means Test (PMT) score falls below the designated threshold (typically below 32). Pensioners, government retirees, or taxpayers are ineligible.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should elderly citizens do if their fingerprints fail to scan at banks or NADRA centers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NADRA has introduced a facial recognition biometric verification system. If worn fingerprints fail, the applicant can undergo facial matching at a NADRA Registration Centre or through the Pak-ID app. NADRA also issues a specialized Biometric Verification Exemption / Verification Certificate (nominal fee of Rs. 20) for banking and pension transactions.',
          },
        },
      ],
    },
  ],
};

export default function SeniorCitizenCardExplainedPage() {
  const breadcrumbs = [
    { nameEn: 'NADRA Services', nameUr: 'نادرا سروسز', url: '/nadra' },
    { nameEn: 'Senior Citizen Card Explained 2026', nameUr: 'سینئر سٹیزن کارڈ کی حقیقت و مراعات 2026' },
  ];

  const seniorFlowSteps = [
    {
      number: 1,
      icon: <CreditCard className="w-5 h-5" />,
      titleEn: 'Check CNIC Age & Validity',
      titleUr: 'شناختی کارڈ کی عمر و میعاد چیک کریں',
      descEn: 'Confirm your CNIC reflects 60+ years of age. Citizens over 55 can request lifetime card status during regular renewal.',
      descUr: 'شناختی کارڈ پر عمر 60 سال سے زائد ہو۔ 55 سال کے بعد لائف ٹائم کارڈ بنوایا جا سکتا ہے۔',
      tagEn: 'Step 1',
      tagUr: 'مرحلہ 1',
    },
    {
      number: 2,
      icon: <Smile className="w-5 h-5" />,
      titleEn: 'Activate Facial Recognition',
      titleUr: 'فیشل ریکگنیشن فعال کروائیں',
      descEn: 'If fingerprint scanning is worn or weak, use the Pak-ID app or visit any NRC counter for facial match verification.',
      descUr: 'اگر انگلیوں کے نشانات مٹ چکے ہیں تو پاک آئی ڈی ایپ یا نادرا سنٹر سے چہرے کی تصدیق کرائیں۔',
      tagEn: 'Biometric Fix',
      tagUr: 'بائیومیٹرک حل',
    },
    {
      number: 3,
      icon: <BadgeCheck className="w-5 h-5" />,
      titleEn: 'Get Verification Certificate',
      titleUr: 'بائیومیٹرک سرٹیفکیٹ حاصل کریں',
      descEn: 'Request an official NADRA Biometric Verification Certificate (Rs. 20) for easy banking and pension proof of life.',
      descUr: 'بینک اور پنشن لائف پروف کے لیے نادرا سے 20 روپے کا تصدیقی سرٹیفکیٹ حاصل کریں۔',
      tagEn: 'Optional Proof',
      tagUr: 'بینک ثبوت',
    },
    {
      number: 4,
      icon: <Bus className="w-5 h-5" />,
      titleEn: 'Avail Statutory Concessions',
      titleUr: 'سرکاری رعایتیں حاصل کریں',
      descEn: 'Present your regular CNIC at Pakistan Railways (25-50% off), ICT utilities, and executive priority queues at public offices.',
      descUr: 'ریلوے میں 25 تا 50 فیصد چھوٹ اور سرکاری دفاتر میں قطار کے بغیر ترجیحی سہولت لیں۔',
      tagEn: 'Direct Benefit',
      tagUr: 'براہ راست فائدہ',
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
            <InteractiveToolBadge labelEn="CIVIC RIGHTS & WELFARE" labelUr="شہری حقوق و فلاح" variant="gold" />
            <VerifiedBadge textEn="STATUTORY FACT-CHECK 2026" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Senior Citizen Card in Pakistan Explained: NADRA CNIC Status, Islamabad Bill &amp; Welfare Stipends
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پاکستان میں بزرگ شہریوں کے حقوق، نادرا کارڈ سٹیٹس اور اسلام آباد ڈسکاؤنٹ بل کی حقیقت
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            If you have searched for senior citizen cards in Pakistan online, you have likely run into misleading blogs mixing up government bills with poverty stipends—and even quoting Indian schemes. Here is a clear, candid explanation of what actually exists in 2026.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="Senior Citizen Card in Pakistan: The Three Distinct Schemes"
          topicTitleUr="پاکستان میں سینئر سٹیزن کارڈ کی 3 مختلف سکیمیں"
          answerEn="There is no mandatory separate plastic card for seniors nationwide. Instead, three distinct things exist: (1) NADRA embeds 60+ Senior Status on your regular CNIC with facial recognition for faded fingerprints; (2) The Islamabad Senior Citizenship Bill gives ICT residents 60+ a 25% discount on civic services; and (3) Ehsaas Ba Himmat Buzurg is a poverty-targeted cash stipend (Rs. 9,000/quarter) for seniors 65+ under BISP/PSPA."
          answerUr="ملک بھر میں بزرگ شہریوں کے لیے کوئی علیحدہ کارڈ لازمی نہیں۔ 3 الگ چیزیں ہیں: (1) نادرا عام شناختی کارڈ پر ہی 60 سال کے بزرگوں کو ترجیحی اور فیشل ریکگنیشن سہولت دیتا ہے؛ (2) اسلام آباد بل کے تحت دارالحکومت میں 25 فیصد ڈسکاؤنٹ ہے؛ (3) احساس باہمت بزرگ غریب بزرگوں (65 سال+) کے لیے سہ ماہی 9 ہزار روپے کا وظیفہ ہے۔"
        />

        {/* Intro Chai-talk Section */}
        <section className="p-6 rounded-2xl bg-amber-50/70 dark:bg-slate-900/80 border border-amber-200/80 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-doc-seal dark:text-amber-400 font-serif font-bold text-lg">
            <HeartHandshake className="w-5 h-5 shrink-0" />
            <h2>Let&apos;s Clear Up the Confusion First</h2>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            If you have an elderly parent or grandparent at home, someone in the family has probably forwarded a WhatsApp voice note or Facebook video claiming that &quot;NADRA is issuing a brand new special card that makes everything free.&quot;
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Here is the honest reality: Pakistan does not have a single monolithic &quot;Senior Citizen Card.&quot; Instead, three completely different government initiatives exist, each serving a different purpose, with different eligibility rules and different geographic scopes. Let&apos;s look at all three side-by-side so you don&apos;t waste hours standing in the wrong government office.
          </p>
        </section>

        {/* Section 1: Side-by-Side Comparison Table */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              The 3 Distinct Senior Initiatives Compared (2026)
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="table-scroll-container">
                <table className="w-full text-xs font-sans min-w-[620px]">
                  <thead className="bg-doc-ink text-white text-[11px] font-mono uppercase tracking-wider">
                    <tr>
                      <th className="px-4 py-3 text-left">Initiative / Program</th>
                      <th className="px-4 py-3 text-left">Managing Authority</th>
                      <th className="px-4 py-3 text-left">Eligibility Criteria</th>
                      <th className="px-4 py-3 text-left">What It Actually Gives</th>
                      <th className="px-4 py-3 text-left">Coverage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">
                        1. NADRA Senior Citizen CNIC Status
                      </td>
                      <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300">NADRA</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Age 60+ (or 55+ for Lifetime CNIC)</td>
                      <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-medium">
                        Facial recognition verification, priority desk, home-visit option, wheelchair support
                      </td>
                      <td className="px-4 py-3 font-mono font-bold text-doc-seal">Nationwide</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">
                        2. Islamabad Senior Citizenship Bill
                      </td>
                      <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300">ICT Admin / Ministry of Interior</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Age 60+ residing in Islamabad</td>
                      <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-medium">
                        25% statutory discount on designated ICT civic, utility, transport, &amp; private services
                      </td>
                      <td className="px-4 py-3 font-mono font-bold text-amber-600">Islamabad Only</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">
                        3. Ehsaas Ba Himmat Buzurg / PSPA
                      </td>
                      <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300">PSPA &amp; BISP / 8171</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                        Age 65+ &amp; PMT poverty score &lt; 32 (non-pensioner)
                      </td>
                      <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-medium font-mono font-bold">
                        Rs. 9,000 quarterly cash stipend (Rs. 3,000/mo via bank ATM)
                      </td>
                      <td className="px-4 py-3 font-mono font-bold text-sky-600">Punjab (PSPA)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5 text-slate-600 dark:text-slate-300">
              <strong className="text-doc-ink dark:text-white flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                Beware of Unofficial Content Farms:
              </strong>
              <p>
                Many clickbait websites copy articles from other countries or promise an &quot;instant online registration form for a Rs. 50,000 senior card.&quot; Government welfare disbursements happen strictly through verified CNIC databases (like BISP 8171 or PSPA), never through random web forms or unverified Telegram channels.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Visual Flow Diagram */}
        <StepFlowDiagram
          titleEn="How to Update &amp; Verify Senior Citizen Identity at NADRA"
          titleUr="نادرا میں بزرگ شہریوں کی شناختی تصدیق کا طریقہ"
          subtitleEn="Solve fingerprint authentication failures and claim statutory privileges"
          subtitleUr="انگلیوں کے نشانات کی خرابی دور کریں اور قانونی مراعات لیں"
          steps={seniorFlowSteps}
        />

        {/* Section 3: NADRA Facial Recognition for Elderly */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Fingerprint className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              The Biometric Fingerprint Dilemma: How Facial Recognition Solved It
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">A</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">The Common Pain Point</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                As people age, the skin ridges on their fingertips naturally smooth out or become dry. In Pakistan, thousands of elderly pensioners used to face humiliating rejections at bank branches because the biometric scanner simply could not read their thumbs.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                This often delayed pension disbursement for months and required endless visits to government counters.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">B</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">NADRA&apos;s Digital Solution</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                NADRA introduced <strong>Facial Recognition Verification</strong> via the Pak-ID app and at physical registration centers.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                If fingerprint verification fails, the operator captures a high-resolution live photograph matched against NADRA&apos;s central facial database. You can also obtain an official <strong>Biometric Verification Certificate</strong> for just Rs. 20, which banks accept as proof of life.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: The Islamabad Senior Citizenship Bill Details */}
        <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-2">
            <Building className="w-6 h-6 text-doc-brass" />
            <h2 className="text-xl font-serif font-bold text-doc-ink dark:text-white">
              The Islamabad Senior Citizenship Bill 2025/2026: What It Actually Offers
            </h2>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            In early 2026, the National Assembly Standing Committee on Interior approved the <strong>Islamabad Senior Citizenship Bill 2025</strong>. This is a progressive piece of legislation, but it is important to understand its actual boundaries:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-mono text-doc-brass font-bold uppercase block">25% Flat Discount</span>
              <p className="text-slate-600 dark:text-slate-300">
                Applies to designated government utilities, recreational facilities, and participating private hospital consultations in ICT.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-mono text-doc-seal font-bold uppercase block">No New Card Required</span>
              <p className="text-slate-600 dark:text-slate-300">
                The bill specifically mandates using the citizen&apos;s standard 13-digit CNIC to verify age, preventing bureaucratic queues for a separate card.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-mono text-emerald-600 font-bold uppercase block">Territorial Limit</span>
              <p className="text-slate-600 dark:text-slate-300">
                Currently restricted to residents of the federal capital. However, lawmakers proposed it as a legislative template for provincial assemblies.
              </p>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 5: Ehsaas Ba Himmat Buzurg Program */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Ehsaas Ba Himmat Buzurg: How the Cash Stipend Actually Works
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              If an elderly citizen has no source of income, no private or government pension, and lives in a low-income household, they may qualify for the <strong>Ba Himmat Buzurg Program</strong> (administered in Punjab via the Punjab Social Protection Authority - PSPA and integrated with BISP).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 space-y-1">
                <span className="font-mono text-emerald-700 dark:text-emerald-300 font-bold uppercase block">Current Stipend Rate</span>
                <p className="text-slate-700 dark:text-slate-300 font-medium">
                  <strong>Rs. 9,000 per quarter</strong> (equivalent to Rs. 3,000 per month), disbursed via Bank of Punjab (BOP) ATMs and authorized biometric agents.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 space-y-1">
                <span className="font-mono text-amber-700 dark:text-amber-300 font-bold uppercase block">Poverty Cutoff Rule</span>
                <p className="text-slate-700 dark:text-slate-300 font-medium">
                  Eligibility is based on the <strong>NSER / PSER survey PMT score</strong> (must generally be under 32). If your family pays high electricity bills or owns substantial property, the system automatically filters you out.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Existing Nationwide Senior Concessions */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Real Privileges You Can Use Today with Your Regular CNIC
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-doc-seal">
                <Bus className="w-4 h-4" />
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Pakistan Railways 25–50% Off</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Citizens aged 65+ receive a <strong>25% to 50% discount</strong> on train fares across economy and AC classes. Simply present the original CNIC at the reservation counter.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-doc-brass">
                <Users className="w-4 h-4" />
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Priority Counters &amp; Home Visits</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                NADRA and passport executive centers offer priority executive tokens and dedicated seating. For bedridden citizens, NADRA van home-visits can be booked.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-600">
                <Clock className="w-4 h-4" />
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Lifetime CNIC Validity</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Once a citizen turns 55, their renewed CNIC is issued with a &quot;Lifetime&quot; expiry date, completely removing the hassle of 10-year renewal cycles.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Genuinely Useful FAQ */}
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
                Do I need to stand in a queue to get a separate plastic senior card?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                No. As long as your Computerized National Identity Card (Smart CNIC) shows you are 60 years or older, you already hold verified senior status in government records. The Islamabad bill and railway rules expressly rely on your regular CNIC.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Does the Islamabad 25% discount apply if I live in Lahore, Karachi, or Peshawar?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                No. The Islamabad Senior Citizenship Bill is federal capital (ICT) legislation. If you live in Punjab, the <em>Punjab Senior Citizens Welfare Act</em> applies; if you live in Sindh, the <em>Sindh Senior Citizens Welfare Act</em> applies. Each province has separate rules for municipal transport and hospital concessions.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Am I eligible for the Ba Himmat Buzurg stipend if I already receive an EOBI or government pension?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                No. The program is strictly targeted at impoverished citizens who have zero pension and fall below the National Socio-Economic Registry (NSER) poverty cutoff. If you receive an EOBI monthly pension (e.g. Rs. 10,000–11,500), you are excluded from this specific welfare stipend.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                What if an elderly family member cannot leave home due to illness?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                NADRA offers a <strong>Mobile Registration Unit (MRU) / Home Service</strong>. You can call the NADRA helpline (1777 or 051-111-786-100) or visit your nearest NRC with the senior&apos;s medical records to request an official biometric team to visit the residence.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: Related Links */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Identity &amp; Welfare Verification Utilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/welfare/eobi-pension-check-cnic-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Pension Verification</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                EOBI Pension Check by CNIC 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Private-sector monthly pension status and insured person records.
              </p>
            </Link>

            <Link
              href="/welfare/bisp-eligibility-check-by-cnic"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-seal font-bold uppercase block">BISP Portal</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                BISP 8171 Eligibility Check by CNIC
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Official NSER PMT poverty cutoff check for welfare stipends.
              </p>
            </Link>

            <Link
              href="/nadra/cnic-new-rules-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-emerald-600 font-bold uppercase block">NADRA Rules</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                CNIC New Rules 2026 Directory
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Updated biometric, renewal, and smart card regulations.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
