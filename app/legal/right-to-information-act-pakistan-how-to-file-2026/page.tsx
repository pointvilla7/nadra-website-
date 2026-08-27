import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { StepFlowDiagram } from '@/components/StepFlowDiagram';
import { ComparisonVisual, ProcessStepsDiagram, FAQAccordionVisual } from '@/components/visuals';
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
  Eye,
  Lock,
  Mail,
  AlertCircle,
  Check
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Right to Information (RTI) Act Pakistan 2026: How to File & Appeal Guide | Pakistan Info Hub',
  description:
    'Complete, practical citizen guide to filing Right to Information (RTI) requests under Article 19-A in Pakistan: Learn the difference between Federal (2017 Act) and Provincial (e.g. Punjab 2013 Act) rules, how to write to a Public Information Officer (PIO), response timelines (10 to 14 days), and how to appeal to the Pakistan Information Commission.',
  keywords: [
    'right to information act pakistan 2026',
    'how to file rti in pakistan',
    'article 19a constitution of pakistan rti',
    'right of access to information act 2017 federal',
    'punjab transparency and right to information act 2013',
    'pakistan information commission appeal process',
    'public information officer pio application format',
  ],
  openGraph: {
    title: 'Right to Information (RTI) Act Pakistan 2026: How to File & Appeal Guide',
    description:
      'Citizen-friendly roadmap for requesting government public records under Article 19-A, finding the designated PIO, and escalating appeals to the Information Commission.',
    url: 'https://www.pakistaninfohub.com/legal/right-to-information-act-pakistan-how-to-file-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/legal/right-to-information-act-pakistan-how-to-file-2026' },
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
          name: 'RTI Pakistan Guide 2026',
          item: 'https://www.pakistaninfohub.com/legal/right-to-information-act-pakistan-how-to-file-2026',
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to File a Right to Information (RTI) Request in Pakistan',
      description:
        'Step-by-step citizen procedure for requesting official public documents from federal or provincial government bodies under Article 19-A of the Constitution of Pakistan.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Identify the Government Body & Public Information Officer (PIO)',
          text: 'Determine whether the target department is Federal or Provincial, and locate the designated PIO contact details on their official portal.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Draft the RTI Application on Plain Paper',
          text: 'Write a concise request describing the specific records sought, cite the applicable Act (Federal 2017 or Provincial), and provide your full postal address and CNIC number.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Submit via Registered Post or Email',
          text: 'Send the application via Pakistan Post registered mail / courier (keeping dispatch receipts) or through official RTI web portals.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Track Statutory Deadlines & Escalate to Commission',
          text: 'Allow 10 working days (Federal) or 14 working days (Punjab). If no response or unlawful refusal occurs, lodge a direct appeal before the relevant Information Commission.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is filing an RTI request free in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, filing the initial application is free on plain paper. Government bodies cannot charge an upfront filing fee. However, if your request requires photocopying hundreds of pages or mailing bulky physical files, the public body may charge nominal, actual copying costs (e.g., standard photocopy rates of Rs. 2 to Rs. 5 per page) as notified under official RTI fee schedules.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if the government department simply ignores my RTI application?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If the Public Information Officer fails to respond within the statutory timeframe (10 working days for Federal bodies, 14 working days for Punjab bodies), you can immediately file an appeal before the relevant Information Commission (Pakistan Information Commission at rti.gov.pk for federal bodies, or Punjab Information Commission for Punjab). The Commission has quasi-judicial powers to summon officers and impose financial penalties for non-compliance.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can an organization or company file an RTI request, or is it only for individual citizens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under Article 19-A of the Constitution and the Right of Access to Information Act 2017, the right is explicitly guaranteed to "every citizen of Pakistan." While an NGO, journalist group, or company cannot file strictly as an impersonal legal entity, any individual member, director, or citizen acting on behalf of an organization can file using their own CNIC.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I know whether to apply under Federal RTI law or Provincial RTI law?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Look at the parent ministry of the department. If the department belongs to the Federal Government (e.g., FBR, NADRA, FIA, Ministry of Foreign Affairs, National Highway Authority, State Bank), you must use The Right of Access to Information Act 2017. If the body is run by a provincial government (e.g., Punjab Police, Sindh Health Department, KPK Education Department, Lahore Development Authority), you must apply under that specific province\'s RTI Act.',
          },
        },
      ],
    },
  ],
};

export default function RightToInformationPage() {
  const breadcrumbs = [
    { nameEn: 'Police & Legal Services', nameUr: 'پولیس و قانونی سروسز', url: '/legal' },
    { nameEn: 'RTI Act Pakistan How to File 2026', nameUr: 'حق معلومات ایکٹ کے تحت درخواست کا طریقہ 2026' },
  ];

  const rtiFlowSteps = [
    {
      number: 1,
      icon: <Building className="w-5 h-5" />,
      titleEn: 'Determine Jurisdiction & PIO',
      titleUr: 'متعلقہ محکمہ اور پی آئی او تلاش کریں',
      descEn: 'Determine if the office is Federal or Provincial. Locate the designated Public Information Officer (PIO) from their website directory.',
      descUr: 'چیک کریں کہ محکمہ وفاقی ہے یا صوبائی، اور نامزد پبلک انفارمیشن آفیسر تلاش کریں۔',
      tagEn: 'Step 1',
      tagUr: 'مرحلہ 1',
    },
    {
      number: 2,
      icon: <FileText className="w-5 h-5" />,
      titleEn: 'Draft Plain-Paper Request',
      titleUr: 'سادہ کاغذ پر درخواست تحریر کریں',
      descEn: 'Clearly list the exact records, dates, or audit details needed. Cite Article 19-A and include your full postal address and CNIC number.',
      descUr: 'مطلوبہ ریکارڈ، تاریخ اور تفصیل لکھیں۔ آرٹیکل 19-A کا حوالہ اور شناختی کارڈ نمبر درج کریں۔',
      tagEn: 'Plain Paper',
      tagUr: 'سادہ کاغذ',
    },
    {
      number: 3,
      icon: <Send className="w-5 h-5" />,
      titleEn: 'Dispatch via Registered Mail',
      titleUr: 'رجسٹرڈ ڈاک یا آن لائن جمع کرائیں',
      descEn: 'Send the application via Pakistan Post registered post (keeping postal receipts and tracking slips) or upload to the official portal.',
      descUr: 'پاکستان پوسٹ سے رجسٹرڈ ڈاک بھیجیں اور رسید محفوظ رکھیں، یا پورٹل پر جمع کریں۔',
      tagEn: 'Keep Receipt',
      tagUr: 'رسید سنبھالیں',
    },
    {
      number: 4,
      icon: <Scale className="w-5 h-5" />,
      titleEn: 'Track Timeline & Appeal',
      titleUr: 'قانونی مدت اور کمیشن میں اپیل',
      descEn: 'Wait 10 to 14 working days. If ignored or unlawfully rejected, file a formal complaint before the relevant Information Commission.',
      descUr: '10 تا 14 دن انتظار کریں۔ جواب نہ ملنے پر انفارمیشن کمیشن میں مفت اپیل دائر کریں۔',
      tagEn: 'Legal Remedy',
      tagUr: 'قانونی حق',
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
            <InteractiveToolBadge labelEn="CONSTITUTIONAL RIGHTS" labelUr="آئینی حقوق" variant="gold" />
            <VerifiedBadge textEn="ARTICLE 19-A STATUTORY DIRECTORY" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Right to Information (RTI) in Pakistan: How to File, Track &amp; Appeal in 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پاکستان میں حق معلومات ایکٹ (RTI): درخواست کا آسان طریقہ، سرکاری پی آئی او اور کمیشن میں اپیل
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Under <strong>Article 19-A of Pakistan&apos;s Constitution</strong>, every citizen has the fundamental legal right to inspect public records, government spending, and recruitment files. Here is how to file an effective, legally binding RTI request without hiring a lawyer.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How Do You File a Right to Information (RTI) Request in Pakistan?"
          topicTitleUr="پاکستان میں حق معلومات (RTI) کے تحت معلومات کیسے حاصل کریں؟"
          answerEn="To file an RTI request, write a plain-paper application to the designated Public Information Officer (PIO) of the concerned department, specifying the records sought and citing Article 19-A. Use the Federal 2017 Act for federal ministries (10-day deadline) and Provincial Acts (e.g., Punjab 2013 Act, 14-day deadline) for provincial bodies. If ignored, appeal directly to the Information Commission."
          answerUr="RTI درخواست کے لیے سادہ کاغذ پر متعلقہ محکمے کے پبلک انفارمیشن آفیسر (PIO) کو مطلوبہ ریکارڈ کی تفصیل اور آرٹیکل 19-A کے تحت درخواست لکھیں۔ وفاقی محکموں کے لیے 2017 کا وفاقی ایکٹ (10 دن کی مہلت) اور صوبائی محکموں کے لیے صوبائی ایکٹ استعمال کریں۔ جواب نہ ملنے پر انفارمیشن کمیشن میں اپیل کریں۔"
        />

        {/* Friendly Conversational Intro */}
        <section className="p-6 rounded-2xl bg-amber-50/70 dark:bg-slate-900/80 border border-amber-200/80 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-doc-seal dark:text-amber-400 font-serif font-bold text-lg">
            <Scale className="w-5 h-5 shrink-0" />
            <h2>RTI is Pakistan&apos;s Most Powerful Underused Law</h2>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Most people think government departments are black boxes that will never answer questions unless you know an MNA or hire a high-court lawyer. That is simply not true.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Whether you want to find out why a local road repair project stopped halfway, inspect the merit lists for a government job test, or see how your municipal committee allocated development funds, <strong>you have an ironclad constitutional right to those documents</strong>. All it takes is a 20-rupee registered post envelope and a simple 1-page letter.
          </p>
        </section>

        {/* Section 1: Federal vs Provincial RTI Laws */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Building className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Federal vs. Provincial RTI Laws: Know Which One to Use
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Federal: The Right of Access to Information Act, 2017
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Applies To:</strong> All Federal Ministries, Federal Agencies (FBR, NADRA, FIA, PTA, SBP, NEPRA), and National Assembly/Senate offices.</li>
                <li><strong>Response Window:</strong> <strong>10 working days</strong> (extendable by 10 days for complex requests).</li>
                <li><strong>Appellate Forum:</strong> <strong>Pakistan Information Commission (PIC)</strong> in Islamabad (portal: <code>rti.gov.pk</code>).</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Provincial RTI Acts (e.g. Punjab Transparency Act 2013)
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Applies To:</strong> Provincial government departments (Police, Health, Education, Municipal Corporations, Development Authorities like LDA/KDA).</li>
                <li><strong>Response Window (Punjab):</strong> <strong>14 working days</strong> (extendable up to 28 days for complex files).</li>
                <li><strong>Appellate Forum:</strong> Provincial Information Commissions (e.g., Punjab Information Commission, KP RTI Commission, Sindh RTI Commission).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Visual Flow Diagram */}
        <StepFlowDiagram
          titleEn="Step-by-Step Citizen RTI Filing Process"
          titleUr="حق معلومات ایکٹ کے تحت درخواست دائر کرنے کا طریقہ"
          subtitleEn="Follow this sequential path from initial draft to Commission escalation"
          subtitleUr="درخواست لکھنے سے لے کر کمیشن میں اپیل تک کے 4 مراحل"
          steps={rtiFlowSteps}
        />

        {/* Section 3: Sample Request Template */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Practical Application Template: What to Write
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              You do not need stamp paper or complicated legal jargon. Write the following cleanly on plain paper (or type it out):
            </p>

            <div className="p-4 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs leading-relaxed space-y-2 border border-slate-800 shadow-inner">
              <p className="text-doc-brass font-bold">To: The Public Information Officer (PIO)</p>
              <p>[Name of Ministry / Department / Authority, City]</p>
              <p className="pt-2 font-bold text-white">Subject: Request for Information under Article 19-A of the Constitution / Right of Access to Information Act</p>
              <p className="pt-2">Respected Officer,</p>
              <p>Under Article 19-A of the Constitution of the Islamic Republic of Pakistan, I hereby request certified copies of the following public records:</p>
              <p className="pl-4 text-emerald-400">1. [Specify exact record, e.g., Tender procurement expenditure details for Road XYZ from Jan 2025 to Dec 2025]</p>
              <p className="pl-4 text-emerald-400">2. [Specify document, e.g., Final merit list of selected candidates for Job Post ABC]</p>
              <p className="pt-2">Kindly provide this information within the statutory timeline mandated by law. I am ready to pay any notified photocopying charges.</p>
              <p className="pt-2">Applicant Name: [Your Full Name]</p>
              <p>CNIC Number: [13-Digit CNIC without hyphens]</p>
              <p>Postal Address: [Complete Mailing Address for Post]</p>
              <p>Contact / Mobile Number: [03XX-XXXXXXX]</p>
              <p>Date: [DD/MM/YYYY]</p>
            </div>

            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-[11px] font-sans italic">
              <span>💡 Tip: Always keep a photocopy of your signed letter and staple the original Pakistan Post registered post receipt to it.</span>
            </div>
          </div>
        </section>

        {/* Section 4: What Can vs Cannot Be Requested */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              What Information You CAN vs. CANNOT Legally Request
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 space-y-3">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-serif font-bold text-sm">
                <Eye className="w-4 h-4" />
                <h3>You CAN Request (Public Interest Documents)</h3>
              </div>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li>Government budgets, project expenditures, and audit reports.</li>
                <li>Public procurement tenders, bidding criteria, and contract awards.</li>
                <li>Recruitment policies, test results, and final candidate merit lists.</li>
                <li>Official notifications, standing operating procedures (SOPs), and department circulars.</li>
                <li>Attendance records, sanctioned posts, and vacant public positions.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 space-y-3">
              <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-serif font-bold text-sm">
                <Lock className="w-4 h-4" />
                <h3>Generally EXEMPT (Restricted Categories)</h3>
              </div>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li>Classified national defense, troop movements, and state intelligence records.</li>
                <li>Ongoing criminal investigations where disclosure would compromise witness safety.</li>
                <li>Private personal data of third-party citizens (e.g. medical files, bank statements).</li>
                <li>Privileged legal advice exchanged between the Attorney General and the Cabinet.</li>
              </ul>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 5: The Appeal Process at Information Commission */}
        <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
          <div className="flex items-center gap-2 text-doc-ink dark:text-white font-serif font-bold text-lg">
            <BadgeCheck className="w-5 h-5 text-doc-brass shrink-0" />
            <h2>What Happens When You Appeal to the Information Commission?</h2>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            If a department refuses to respond within 10–14 working days, <strong>do not lose heart</strong>. That is exactly when the law works in your favor:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-mono text-doc-brass font-bold uppercase block">1. File Appeal</span>
              <p className="text-slate-600 dark:text-slate-300">
                Write a 1-page appeal to the Pakistan Information Commission (or provincial commission) attaching your initial letter and postal receipt.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-mono text-doc-seal font-bold uppercase block">2. Commission Summons</span>
              <p className="text-slate-600 dark:text-slate-300">
                The Commission issues a show-cause notice to the head of the department and orders the PIO to produce the documents.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-mono text-emerald-600 font-bold uppercase block">3. Heavy Penalties</span>
              <p className="text-slate-600 dark:text-slate-300">
                Officers who willfully withhold public documents can be fined daily penalties deducted directly from their monthly government salaries.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Visual: Federal vs Provincial RTI Laws */}
        <ComparisonVisual
          titleEn="Federal RTI Act 2017 vs Provincial RTI Laws (Jurisdiction & Timelines)"
          titleUr="وفاقی رائٹ ٹو انفارمیشن ایکٹ 2017 بمقابلہ صوبائی معلوماتی قوانین"
          subtitleEn="Comparison of administrative jurisdiction, designated statutory response deadlines, and appellate bodies"
          subtitleUr="دائرہ اختیار، سرکاری جواب کی آخری مدت اور انفارمیشن کمیشن میں اپیل کا تفصیلی جائزہ"
          items={[
            {
              titleEn: "Federal RTI Act 2017",
              titleUr: "وفاقی رائٹ ٹو انفارمیشن ایکٹ 2017",
              subtitleEn: "Federal Ministries, FBR, NADRA, CDA",
              subtitleUr: "وفاقی وزارتیں، ایف بی آر، نادرا، سی ڈی اے",
              badgeEn: "Federal (PIC)",
              badgeUr: "وفاقی کمیشن",
              badgeVariant: "navy",
              pointsEn: [
                "Applies to all Federal Ministries, Divisions, Attached Depts, FBR, NADRA, and CDA",
                "Strict statutory response deadline: 10 working days (extendable by 10 days for complex requests)",
                "Appeals filed directly with Pakistan Information Commission (PIC) in Islamabad",
                "Zero court fee or stamp duty required to file request or appeal"
              ],
              recommendedForEn: "Inquiries regarding federal tenders, central recruitment results, and national public spending",
              recommendedForUr: "وفاقی اداروں کی بھرتیوں، سرکاری بجٹ اور فنڈز کی معلومات حاصل کرنے کے لیے"
            },
            {
              titleEn: "Provincial RTI Laws (Punjab, KP, Sindh, Balochistan)",
              titleUr: "صوبائی رائٹ ٹو انفارمیشن قوانین",
              subtitleEn: "Provincial Depts, Police, BISE, WASA, LDA",
              subtitleUr: "صوبائی محکمے، پولیس، تعلیمی بورڈز، ایل ڈی اے، واسا",
              badgeEn: "Provincial Commissions",
              badgeUr: "صوبائی کمیشن",
              badgeVariant: "emerald",
              isPopular: true,
              pointsEn: [
                "Applies to Provincial Secretariats, District Police, BISE Examination Boards, WASA, LDA/KDA",
                "Statutory response deadline: 14 working days under Punjab & KP Transparency Acts",
                "Appeals handled by Punjab Information Commission (PIS), KP RTI Commission, Sindh & Balochistan Commissions",
                "Daily fines deducted from non-compliant public officers' personal monthly pay"
              ],
              recommendedForEn: "Citizens investigating local development schemes, municipal contracts, and provincial jobs",
              recommendedForUr: "مقامی ترقیاتی منصوبوں، بلدیاتی کاموں، پولیس کارروائی اور تعلیمی بورڈز کے ڈیٹا کے لیے"
            }
          ]}
        />

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step RTI Request Filing to Information Handover Workflow"
          titleUr="رائٹ ٹو انفارمیشن (RTI) درخواست جمع کروانے اور معلومات کے حصول کے 4 مراحل"
          subtitleEn="From public body identification to certified document delivery and commission escalation"
          subtitleUr="محکمے کے تعین سے لے کر درخواست کی ترسیل، تصدیق اور انفارمیشن کمیشن میں اپیل تک کے مراحل"
          steps={[
            {
              number: 1,
              titleEn: "Identify Public Body & Public Info Officer",
              titleUr: "متعلقہ محکمے اور پبلک انفارمیشن آفیسر کا تعین",
              descEn: "Locate the designated Public Information Officer (PIO); if unnotified, address the department Secretary/DG.",
              descUr: "متعلقہ سرکاری محکمے کے پی آئی او (PIO) کا نام معلوم کریں، نہ ملنے کی صورت میں ڈائریکٹر جنرل کے نام خط لکھیں۔",
              tagEn: "PIO Search",
              tagUr: "آفیسر تعین",
            },
            {
              number: 2,
              titleEn: "Draft Simple RTI Request Letter",
              titleUr: "سادہ کاغذ پر درخواست کا اندراج",
              descEn: "Write your specific questions clearly referencing Section 6 of Federal RTI Act (or Provincial Act) with your CNIC.",
              descUr: "سادہ کاغذ یا ای میل پر اپنے سوالات اور مطلوبہ دستاویزات کا ذکر کریں اور شناختی کارڈ کی کاپی منسلک کریں۔",
              tagEn: "Draft Letter",
              tagUr: "درخواست تحریر",
            },
            {
              number: 3,
              titleEn: "Dispatch via Registered Post / Email",
              titleUr: "رجسٹرڈ ڈاک یا سرکاری ای میل سے ترسیل",
              descEn: "Send the signed letter via Pakistan Post Registered Post (keep track slip) or official department email address.",
              descUr: "پاکستان پوسٹ کے ذریعے رجسٹری خط بھیجیں اور رسید محفوظ رکھیں جو کہ قانونی ثبوت کے طور پر کام آتی ہے۔",
              tagEn: "Reg Post",
              tagUr: "رجسٹرڈ ڈاک",
            },
            {
              number: 4,
              titleEn: "10–14 Day Response / Commission Appeal",
              titleUr: "10 سے 14 دن میں جواب یا کمیشن میں اپیل",
              descEn: "Receive certified records; if refused or unanswered within statutory time, file a free appeal with Information Commission.",
              descUr: "مقررہ دنوں میں مصدقہ دستاویزات حاصل کریں؛ جواب نہ ملنے پر انفارمیشن کمیشن میں مفت اپیل دائر کریں۔",
              tagEn: "Receipt / Appeal",
              tagUr: "جواب / اپیل",
            },
          ]}
        />

        {/* Section 6: Genuinely Useful FAQ */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (RTI in Pakistan)"
          titleUr="رائٹ ٹو انفارمیشن (RTI) سے متعلق عام سوالات"
          subtitleEn="Answers on zero filing fees, unnotified PIO responsibility, email vs registered postal proof, and 60-day commission appeal decisions"
          subtitleUr="مفت درخواست کے قواعد، پی آئی او کی ذمہ داری، پاکستان پوسٹ کی قانونی حیثیت اور اپیل کے فیصلے کی مدت"
          items={[
            {
              questionEn: "Is RTI filing free of cost?",
              questionUr: "کیا آر ٹی آئی درخواست دینے کی کوئی فیس یا اسٹامپ پیپر درکار ہوتا ہے؟",
              answerEn: "Yes. There is no court fee, stamp paper, or application processing fee required to submit an RTI request. The public body can only charge you actual photocopying costs if they provide you with hundreds of physical paper pages.",
              answerUr: "جی ہاں! آر ٹی آئی درخواست بالکل مفت ہے۔ کسی قسم کی کورٹ فیس یا اسٹامپ پیپر کی ضرورت نہیں ہوتی، صرف دستاویزات کی فوٹو کاپی کی اصل قیمت لی جا سکتی ہے۔",
            },
            {
              questionEn: "What if the department tells me \"We don't have a PIO appointed\"?",
              questionUr: "اگر محکمہ کہے کہ ہمارا کوئی پبلک انفارمیشن آفیسر (PIO) مقرر نہیں ہے؟",
              answerEn: "Under Section 9 of the Federal Act (and equivalent provincial provisions), if a public body has not notified a designated PIO, the Principal Officer / Secretary / Director General of the department is automatically deemed to be the PIO and is personally held responsible by the Information Commission.",
              answerUr: "قانون کے مطابق اگر پی آئی او تعینات نہ ہو تو محکمے کا سیکرٹری، چیئرمین یا ڈائریکٹر جنرل از خود پی آئی او تصور ہوگا اور کمیشن براہ راست اسے طلب کرے گا۔",
            },
            {
              questionEn: "Can I submit an RTI request via email instead of postal mail?",
              questionUr: "کیا آر ٹی آئی درخواست ڈاک کے بجائے ای میل پر بھیجی جا سکتی ہے؟",
              answerEn: "Yes. Many federal bodies and the Pakistan Information Commission accept email submissions. However, sending a registered post letter via Pakistan Post is highly recommended because the physical post tracking receipt serves as undeniable legal proof of receipt during Commission hearings.",
              answerUr: "جی ہاں، ای میل پر بھیجی جا سکتی ہے۔ لیکن پاکستان پوسٹ کی رجسٹری ڈاک بہترین ہے کیونکہ اس کی ٹریکنگ رسید کمیشن کی سماعت میں ناقابل تردید ثبوت بنتی ہے۔",
            },
            {
              questionEn: "How long does the Information Commission take to resolve an appeal?",
              questionUr: "انفارمیشن کمیشن اپیل کا فیصلہ کتنے دنوں میں کرتا ہے؟",
              answerEn: "Under the Federal Act, the Pakistan Information Commission is mandated to decide appeals within 60 calendar days. In urgent cases involving life or liberty, proceedings are fast-tracked.",
              answerUr: "قانون کے مطابق انفارمیشن کمیشن 60 دنوں کے اندر اندر اپیل کا حتمی فیصلہ سنانے کا پابند ہوتا ہے اور افسران کو ریکارڈ فراہم کرنے کا حکم دیتا ہے۔",
            },
          ]}
        />

        {/* Section 7: Related Links */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Legal &amp; Civic Verification Utilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/legal/online-fir-registration-punjab-police"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Police 1787</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Online FIR Complaint Punjab Police 1787
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Lodge formal complaints against non-registration of FIRs.
              </p>
            </Link>

            <Link
              href="/legal/succession-certificate-legal-heir-nadra-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-seal font-bold uppercase block">NADRA Legal</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Succession Certificate &amp; Legal Heir 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Family inheritance letters of administration via biometric counters.
              </p>
            </Link>

            <Link
              href="/legal/consumer-court-complaint-how-to-file-pakistan-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-emerald-600 font-bold uppercase block">Consumer Rights</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Consumer Court Complaint Guide 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                File complaints against fraudulent sellers without a lawyer.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
