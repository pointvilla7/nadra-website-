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
  Landmark,
  Scale,
  Building,
  FileCheck,
  Send,
  FileText,
  BadgeCheck,
  FileSpreadsheet,
  MapPin,
  AlertCircle,
  ShieldAlert,
  Gavel,
  Home,
  Check
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Anti-Encroachment Complaints & Tribunals in Pakistan 2026: Provincial Laws, Filing Process & False Accusations | Pakistan Info Hub',
  description:
    'Comprehensive citizen guide to anti-encroachment laws in Pakistan: Sindh Anti-Encroachment Act 2010 Tribunals, Punjab Local Government rules & POIP online portal, KP 1977 Act, CDA Islamabad, complaint filing steps, and 7-day defense against wrongful notices.',
  keywords: [
    'anti encroachment complaint pakistan 2026',
    'sindh anti encroachment tribunal act 2010',
    'punjab poip illegal property portal',
    'how to report illegal land occupation pakistan',
    'encroachment notice defense 7 days chief officer',
    'kmc anti encroachment department complaint',
    'cda anti encroachment cell islamabad',
  ],
  openGraph: {
    title: 'Anti-Encroachment Complaints & Tribunals in Pakistan 2026: Provincial Guide',
    description:
      'Citizen’s guide to reporting illegal land encroachment, understanding provincial anti-encroachment tribunals, and defending against wrongful notices across Pakistan.',
    url: 'https://www.pakistaninfohub.com/legal/anti-encroachment-complaint-tribunal-pakistan-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/legal/anti-encroachment-complaint-tribunal-pakistan-2026' },
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
          name: 'Anti-Encroachment Complaints & Tribunals 2026',
          item: 'https://www.pakistaninfohub.com/legal/anti-encroachment-complaint-tribunal-pakistan-2026',
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to File an Anti-Encroachment Complaint in Pakistan',
      description:
        'Step-by-step procedure for Pakistani citizens to report unlawful occupation on public streets or private land across Punjab, Sindh, Khyber Pakhtunkhwa, and Islamabad.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Gather Documentary & Photographic Evidence',
          text: 'Take dated, clear photographs of the encroachment, obtain certified revenue documents (Fard/Registry for private land or town planning maps for public streets), and identify the exact GPS location.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Identify the Competent Provincial Authority',
          text: 'Determine jurisdiction: Punjab Local Municipal Corporation or POIP portal; Sindh Anti-Encroachment Tribunal / KMC; KP Town Municipal Administration (TMA); or CDA Enforcement Directorate in Islamabad.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Submit Formal Written Application or Online Ticket',
          text: 'Draft a formal complaint specifying the nature of encroachment, attaching proof of title/public nuisance, and requesting official site measurement by the revenue staff (Patwari/Girdawar/Mukhtiarkar).',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Notice Issuance & Removal Enforcement',
          text: 'The authority issues a statutory removal notice (e.g. Form I/II) giving the encroacher a formal window to vacate, followed by administrative demolition if non-compliant.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the legal difference between encroachment on public land versus private property?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Encroachment on public property (footpaths, roads, parks, state land) is a municipal and criminal offence dealt with swiftly by municipal corporations, development authorities, or Anti-Encroachment Tribunals under administrative summary removal powers. Encroachment on private property between two private owners is primarily a civil land dispute requiring revenue demarcation (Nishan-dehi) and potentially a civil court suit for possession, unless reported to specialized anti-grabber bodies like Punjab’s POIP portal or the Anti-Qabza Cell.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can an Anti-Encroachment Tribunal decision be appealed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. In Sindh, under the Sindh Public Property (Removal of Encroachment) Act 2010, decisions and final orders of the Anti-Encroachment Tribunal can be appealed before the High Court of Sindh within 30 days of the order. Ordinary civil courts do not have jurisdiction to grant injunctions where a specialized Tribunal has exclusive jurisdiction.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if municipal authorities ignore my encroachment complaint?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If the local municipal office or Assistant Commissioner fails to take action after formal submission, you can: (1) File a complaint on the Prime Minister’s Citizen Portal (PMDU) or Provincial Ombudsman (Mohtasib) for maladministration, (2) Submit an RTI request under Article 19-A demanding inspection records, or (3) Approach the provincial High Court via a Constitutional Writ Petition under Article 199 to compel public officials to perform their statutory duty.',
          },
        },
        {
          '@type': 'Question',
          name: 'What can I do if I am wrongfully served an encroachment notice by the municipal corporation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You must respond within the statutory notice period (commonly 7 days from notice service). Submit an official written objection along with your approved building plan, registered sale deed (Registry), and sanction letter to the Chief Officer / Authorized Officer. If administrative review fails, file an immediate petition before the designated Anti-Encroachment Tribunal (in Sindh) or seek an interim stay from the civil court/High Court showing title and sanctioned layout.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there any fee to file an anti-encroachment complaint with municipal authorities?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Filing an administrative encroachment complaint with municipal corporations, District Administration, or the Punjab POIP portal is completely free of government fees. However, if you initiate a formal judicial case before a specialized Anti-Encroachment Tribunal or Civil Court, nominal court fees and standard legal representation charges apply.',
          },
        },
      ],
    },
  ],
};

export default function AntiEncroachmentGuidePage() {
  const breadcrumbs = [
    { nameEn: 'Police & Legal Services', nameUr: 'پولیس و قانونی خدمات', url: '/legal' },
    { nameEn: 'Anti-Encroachment Complaints & Tribunals 2026', nameUr: 'تجاوزات کے خلاف شکایت اور ٹربیونل گائیڈ 2026' },
  ];

  const encroachmentSteps = [
    {
      number: 1,
      icon: <FileText className="w-5 h-5" />,
      titleEn: 'Document Proof & Location',
      titleUr: 'تصاویر، نقشہ اور شواہد اکٹھے کریں',
      descEn: 'Capture clear, time-stamped photographs, identify the exact street/khasra number, and obtain your property title papers.',
      descUr: 'تجاوزات کی واضح تصاویر، مکمل پتہ، خسرہ نمبر اور اپنی ملکیت کی دستاویزات تیار رکھیں۔',
      tagEn: 'Evidence Gathering',
      tagUr: 'شواہد کی تیاری',
    },
    {
      number: 2,
      icon: <Landmark className="w-5 h-5" />,
      titleEn: 'Select Provincial Forum',
      titleUr: 'متعلقہ صوبائی ادارے کا انتخاب',
      descEn: 'Choose the right authority: Punjab Municipal Corp / POIP Portal; Sindh Tribunal / KMC; KP TMA; or CDA in Islamabad.',
      descUr: 'پنجاب، سندھ، کے پی یا اسلام آباد کے متعلقہ بلدیاتی یا ریونیو دفتر کی نشاندہی کریں۔',
      tagEn: 'Jurisdiction',
      tagUr: 'دائرہ اختیار',
    },
    {
      number: 3,
      icon: <Send className="w-5 h-5" />,
      titleEn: 'Submit Written Complaint',
      titleUr: 'تحریری درخواست یا آن لائن اندراج',
      descEn: 'File a formal application to the Chief Officer / Assistant Commissioner requesting official revenue demarcation.',
      descUr: 'اسسٹنٹ کمشنر یا چیف آفیسر کو سرکاری نشان دہی اور قانونی کارروائی کی درخواست دیں۔',
      tagEn: 'Formal Filing',
      tagUr: 'درخواست جمع',
    },
    {
      number: 4,
      icon: <Gavel className="w-5 h-5" />,
      titleEn: 'Notice & Enforcement',
      titleUr: 'قانونی نوٹس اور تجاوزات کا خاتمہ',
      descEn: 'Authority issues a statutory show-cause notice (Forms I & II) followed by demolition or tribunal adjudication.',
      descUr: 'سرکاری نوٹس کی مدت مکمل ہونے پر اینٹی انکروچمنٹ فورس تجاوزات ہٹانے کی کارروائی کرتی ہے۔',
      tagEn: 'Demolition Action',
      tagUr: 'قانونی خاتمہ',
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
            <InteractiveToolBadge labelEn="CIVIC LEGAL DIRECTORY" labelUr="شہری قانونی رہنمائی" variant="navy" />
            <VerifiedBadge textEn="PROVINCIAL ACTS & TRIBUNALS 2026" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Anti-Encroachment Complaints &amp; Tribunals in Pakistan (2026 Guide)
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              تجاوزات کے خلاف قانونی کارروائی، صوبائی قوانین اور ٹربیونل میں اپیل کا مکمل طریقہ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Whether illegal stalls are blocking your public street or an unauthorized construction is intruding onto private land, property encroachment laws in Pakistan are strictly provincial. Here is how to file a valid complaint, identify the right authority, and defend against wrongful demolition notices.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How Anti-Encroachment Law Works in Pakistan"
          topicTitleUr="پاکستان میں تجاوزات کے خاتمے کا قانونی طریقہ کار کیا ہے؟"
          answerEn="Encroachment is the illegal occupation of public or private land. In Pakistan, encroachment is regulated provincially: Sindh operates specialized Anti-Encroachment Tribunals under the 2010 Act; Punjab removes encroachments through local municipal corporations and the POIP portal; KP uses the 1977 Act; and Islamabad operates under the CDA Enforcement Directorate. There is no single federal body."
          answerUr="تجاوزات سے مراد سرکاری یا نجی اراضی پر غیر قانونی قبضہ ہے۔ پاکستان میں یہ معاملہ صوبائی قوانین کے تحت حل ہوتا ہے: سندھ میں اینٹی انکروچمنٹ ٹربیونل ایکٹ 2010 لاگو ہے؛ پنجاب میں لوکل گورنمنٹ ایکٹ اور پی او آئی پی (POIP) پورٹل؛ خیبر پختونخوا میں 1977 کا ایکٹ اور اسلام آباد میں سی ڈی اے کا عملہ کارروائی کرتا ہے۔"
        />

        {/* Conversational Intro */}
        <section className="p-6 rounded-2xl bg-amber-50/70 dark:bg-slate-900/80 border border-amber-200/80 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-doc-seal dark:text-amber-400 font-serif font-bold text-lg">
            <ShieldCheck className="w-5 h-5 shrink-0" />
            <h2>Understanding Encroachment Without Getting Lost in Red Tape</h2>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Almost every neighborhood in Pakistan has witnessed it: a shopkeeper extending a permanent concrete ramp onto the public footpath, an illegal gate installed on a public thoroughfare, or a neighbor extending their boundary wall 2 feet into an adjoining plot.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            The biggest mistake citizens make is filing a vague complaint at the local police station, only to be told &quot;this is a civil matter.&quot; To get real results, you must approach the <strong>specific provincial authority or tribunal</strong> that has statutory power to issue show-cause notices and deploy heavy machinery for removal.
          </p>
        </section>

        {/* Section 1: Provincial Breakdown */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Landmark className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Which Authority Handles Encroachments in Your Province?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            {/* Sindh */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-mono font-bold text-[11px]">
                SINDH (KARACHI, HYDERABAD, SUKKUR)
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Sindh Public Property (Removal of Encroachment) Act 2010
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Primary Authority:</strong> Anti-Encroachment Department of Karachi Metropolitan Corporation (KMC), District Municipal Corporations (DMCs), or Assistant Commissioners / Mukhtiarkars in interior Sindh.</li>
                <li><strong>Judicial Forum:</strong> Dedicated <strong>Anti-Encroachment Tribunals</strong> (headed by District &amp; Sessions Judges) have exclusive civil-court-level powers to adjudicate public land disputes.</li>
                <li><strong>Appeals:</strong> Tribunal decisions can be challenged directly before the <strong>High Court of Sindh</strong> within 30 days.</li>
              </ul>
            </div>

            {/* Punjab */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 font-mono font-bold text-[11px]">
                PUNJAB (LAHORE, RAWALPINDI, MULTAN, FAISALABAD)
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Punjab Local Government Act &amp; POIP Portal
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Primary Authority:</strong> Metropolitan Corporation Lahore (MCL), District Municipal Corporations, and District Anti-Encroachment Squads led by the Deputy Commissioner.</li>
                <li><strong>Online Portal (POIP):</strong> The Government of Punjab operates the <em>Protection of Illegal Property (POIP)</em> portal at <code>poip.punjab-zameen.gov.pk</code> for lodging citizen complaints against land grabbing and illegal occupation.</li>
                <li><strong>Penalties:</strong> Municipal officers issue fines ranging from Rs. 500 up to Rs. 10,000+ under municipal schedule offences.</li>
              </ul>
            </div>

            {/* KP */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 font-mono font-bold text-[11px]">
                KHYBER PAKHTUNKHWA (PESHAWAR, MARDAN, ABBOTTABAD)
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                KP Public Property (Removal of Encroachment) Act 1977
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Primary Authority:</strong> Town Municipal Administrations (TMAs), Peshawar Development Authority (PDA), and District Commissioners.</li>
                <li><strong>Procedure:</strong> The Assistant Commissioner issues a statutory removal order. Non-compliance results in summary demolition and recovery of removal costs as land revenue arrears.</li>
              </ul>
            </div>

            {/* Islamabad */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 font-mono font-bold text-[11px]">
                ISLAMABAD CAPITAL TERRITORY (ICT)
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                CDA Ordinance 1960 &amp; ICT Administration
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Primary Authority:</strong> Capital Development Authority (CDA) Enforcement Directorate and District Magistrate ICT.</li>
                <li><strong>Jurisdiction:</strong> Covers CDA sectors, green belts, nullahs, commercial markets, and Islamabad right-of-way roads.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Flow Diagram */}
        <StepFlowDiagram
          titleEn="Step-by-Step Anti-Encroachment Complaint &amp; Removal Flow"
          titleUr="تجاوزات کے خلاف قانونی کارروائی کا طریقہ کار"
          subtitleEn="How to properly file a complaint and ensure enforcement action by civic bodies"
          subtitleUr="شواہد اکٹھے کرنے سے لے کر تجاوزات کے خاتمے کے 4 اہم مراحل"
          steps={encroachmentSteps}
        />

        {/* Section 3: Public vs Private Property Encroachments */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Public Land vs. Private Property Encroachments: Key Legal Differences
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex items-center gap-2 text-doc-ink dark:text-white font-bold text-sm">
                  <Building className="w-4 h-4 text-doc-brass" />
                  <h3>Case A: Encroachment on Public Land (Streets, Footpaths, Parks)</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>Nature of Offence:</strong> A statutory municipal violation and public nuisance under the Penal Code and Local Government laws.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>Process:</strong> File directly with the Chief Officer of the Municipal Corporation, KMC Anti-Encroachment Cell, or CDA Enforcement. The authority can issue a 3 to 7-day notice and demolish without waiting for a lengthy civil suit.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex items-center gap-2 text-doc-ink dark:text-white font-bold text-sm">
                  <Home className="w-4 h-4 text-doc-seal" />
                  <h3>Case B: Encroachment on Private Land (Plot Boundary Intrusion)</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>Nature of Offence:</strong> A civil boundary dispute or unlawful possession (Qabza).
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>Process:</strong> First apply for official <em>Nishan-dehi (Demarcation)</em> through the local Tehsildar / Mukhtiarkar and Patwari. If the neighbor refuses to pull back their wall, you file for possession in Civil Court or lodge a petition under the Illegal Dispossession Act 2005 before the Sessions Court.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 4: What If YOU Are Wrongly Accused (7-Day Defense Window) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              What to Do If You Are Wrongly Accused of Encroachment
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 space-y-4 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Municipal anti-encroachment staff occasionally issue notices to lawful property owners during general clearance drives. If you receive a <strong>Form I or Form II Show-Cause Notice</strong>, take these protective steps immediately:
            </p>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                <div>
                  <h3 className="font-bold text-doc-ink dark:text-white text-sm">Respect the Statutory 7-Day Window</h3>
                  <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                    Do not ignore the notice. You typically have <strong>7 calendar days</strong> from receipt to submit a formal written reply to the Chief Officer / Authorized Officer.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                <div>
                  <h3 className="font-bold text-doc-ink dark:text-white text-sm">Attach Title Documents and Approved Building Plan</h3>
                  <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                    Provide certified copies of your Registered Sale Deed (Registry/Intiqal), approved building sanction plan from the relevant development authority (LDA, KDA, RDA, CDA), and utility installation NOCs.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                <div>
                  <h3 className="font-bold text-doc-ink dark:text-white text-sm">Approach the Anti-Encroachment Tribunal or Civil Court for Stay</h3>
                  <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                    If municipal staff threatens imminent demolition despite valid title, immediately file an application before the designated <strong>Anti-Encroachment Tribunal</strong> (in Sindh) or obtain an urgent interim stay order from the Civil Court by proving lawful ownership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Comparative Summary Table */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Provincial Anti-Encroachment Framework At-a-Glance
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="table-scroll-container">
                <table className="w-full text-xs font-sans min-w-[540px]">
                  <thead className="bg-doc-ink text-white text-[11px] font-mono uppercase tracking-wider">
                    <tr>
                      <th className="px-4 py-3 text-left">Region / Province</th>
                      <th className="px-4 py-3 text-left">Primary Governing Law</th>
                      <th className="px-4 py-3 text-left">Filing Authority / Portal</th>
                      <th className="px-4 py-3 text-right">Appellate Forum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Sindh (Karachi, Hyd)</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Sindh Public Property Act 2010</td>
                      <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300">KMC / Mukhtiarkar / Tribunal</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-doc-seal">High Court of Sindh</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Punjab (LHR, RWP)</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Punjab Local Govt Act 2013</td>
                      <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300">Municipal Corp / POIP Portal</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-doc-seal">Commissioner / Civil Court</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Khyber Pakhtunkhwa</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">KP Public Property Act 1977</td>
                      <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300">TMA / Assistant Commissioner</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-doc-seal">Deputy Commissioner / Court</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">Islamabad (ICT)</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">CDA Ordinance 1960</td>
                      <td className="px-4 py-3 font-mono text-slate-700 dark:text-slate-300">CDA Enforcement Directorate</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-doc-seal">CDA Board / Islamabad High Court</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Frequently Asked Questions */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Citizen Legal Clarifications)
            </h2>
          </div>

          <div className="space-y-3 font-sans text-xs">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                What is the difference between encroachment on public vs private land?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Public encroachment (footpaths, roads, parks) can be removed directly by municipal corporations through summary administrative powers and bulldozers. Encroachment on private land is a title dispute requiring demarcation (Nishan-dehi) and filing a civil suit or an application under the Illegal Dispossession Act 2005.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Can I appeal an Anti-Encroachment Tribunal decision in Sindh?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Yes. Under Section 14 of the Sindh Public Property (Removal of Encroachment) Act 2010, any party aggrieved by a final decision of the Tribunal may file an appeal before the High Court of Sindh within 30 days.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                What if the local government ignores my complaint?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                You can escalate by: (1) Lodging a ticket on the PMDU Citizen Portal or Provincial Mohtasib (Ombudsman), (2) Submitting a Right to Information (RTI) request under Article 19-A demanding action reports, or (3) Filing a Constitutional Writ Petition under Article 199 in the High Court compelling officers to perform their statutory duty.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Is there an official fee to file an encroachment complaint?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Filing an administrative complaint at a municipal office, DC office, or Punjab&apos;s POIP portal is completely free. However, if you file a formal judicial lawsuit in a civil court or tribunal, nominal court fees apply.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Related Links */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Legal &amp; Property Verification Utilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/legal/right-to-information-act-pakistan-how-to-file-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">RTI Transparency</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Right to Information (RTI) Guide 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Article 19-A procedures to demand civic records and action reports.
              </p>
            </Link>

            <Link
              href="/property/punjab-land-record-fard-verifier-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-seal font-bold uppercase block">Land Records</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Punjab Land Record Fard Verifier
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                PLRA digital land verification, Khasra numbers, and ownership deeds.
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
                15-day legal notices and district consumer court claims.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
