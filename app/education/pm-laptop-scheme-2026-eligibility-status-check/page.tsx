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
  Laptop,
  GraduationCap,
  Building,
  FileCheck,
  Send,
  FileText,
  BadgeCheck,
  Award,
  Users,
  Layers,
  School,
  Check,
  AlertCircle,
  HelpCircle as QuestionIcon
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PM Laptop Scheme 2026: Eligibility, Quota Merit & Status Check (laptop.pmyp.gov.pk) | Pakistan Info Hub',
  description:
    'Complete evergreen guide to the Prime Minister’s Youth Laptop Scheme (PMYP/HEC): Check eligibility criteria, understand the cascading departmental quota system, track your application status on laptop.pmyp.gov.pk, and prepare required distribution documents.',
  keywords: [
    'pm laptop scheme 2026 eligibility',
    'laptop pmyp gov pk status check',
    'hec pm youth laptop scheme merit list',
    'cascading quota merit system laptop scheme',
    'pm laptop scheme documents required distribution',
    'hec focal person verification laptop scheme',
  ],
  openGraph: {
    title: 'PM Laptop Scheme 2026: Eligibility, Quota Merit & Status Check',
    description:
      'Verified student guide to the PM National Laptop Scheme on laptop.pmyp.gov.pk: Eligibility checklist, cascading quota system, status stages, and distribution day guidelines.',
    url: 'https://www.pakistaninfohub.com/education/pm-laptop-scheme-2026-eligibility-status-check',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/education/pm-laptop-scheme-2026-eligibility-status-check' },
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
          name: 'Education & Merit Lists',
          item: 'https://www.pakistaninfohub.com/education',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'PM Laptop Scheme 2026 Guide',
          item: 'https://www.pakistaninfohub.com/education/pm-laptop-scheme-2026-eligibility-status-check',
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Apply and Check Status for the PM Youth Laptop Scheme',
      description:
        'Official step-by-step procedure for Pakistani university students to register on the PMYP laptop portal, track university focal person verification, and collect laptops upon merit selection.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Register or Log In on laptop.pmyp.gov.pk',
          text: 'Visit the official portal at laptop.pmyp.gov.pk, enter your CNIC/B-Form, verify your mobile number via OTP, and fill in your current academic profile.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'University Focal Person Verification',
          text: 'Your enrolled public university focal person verifies your active regular enrollment, CGPA/percentage, and department records in the HEC backend.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Review Provisional Merit Lists & Lodge Objections',
          text: 'HEC generates departmental provisional merit lists. If your CGPA or year is misreported, submit an online correction ticket during the grievance window.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Attend Physical Distribution with Original Credentials',
          text: 'Selected students receive an official SMS/email to attend the on-campus distribution ceremony with original CNIC, student ID card, fee vouchers, and academic transcripts.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why was I not selected for a PM Laptop despite having a high CGPA (e.g. 3.7)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Laptop quotas are not allocated on a single national or university-wide merit list. Laptops are distributed through a cascading quota: allocated first to your university, then split by degree level (BS, MS, PhD), and finally divided among academic departments and specific admission batches. If your department or batch was allocated only 3 laptops and 3 peers had a 3.8+ CGPA, the cutoff for your batch becomes 3.8, even if students with 3.2 in other departments were selected.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are students of affiliated government colleges or private universities eligible?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The standard Prime Minister’s Youth Laptop Scheme is strictly for regular students enrolled directly at HEC-recognized Public Sector Higher Education Institutions (Universities and sub-campuses). Students studying at private universities, distance-learning programs (Virtual University, non-regular AIOU), or affiliated colleges are not eligible under the standard merit quota.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I apply if I previously received a laptop from any government scheme?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Any student who has previously received a laptop under any federal (PM Youth Laptop Scheme earlier phases) or provincial government scheme (such as the CM Punjab or KP Laptop Schemes) is strictly disqualified. The portal automatically cross-checks your CNIC against historical distribution databases.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does it mean if my application status is stuck on "Under Review" or "Waiting"?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '"Under Review" means your application is currently awaiting data authentication by your university’s designated HEC Focal Person. "Waiting" (or Waiting List) means you met basic eligibility, but your CGPA placed you just below the batch quota cutoff. If an initially selected student fails physical document verification or is found ineligible, waiting list candidates are promoted in order of merit.',
          },
        },
        {
          '@type': 'Question',
          name: 'If I graduated after being selected on the merit list, do I still get my laptop?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Official HEC guidelines confirm that if a student was legitimately enrolled, applied, and qualified on the final merit list during the open phase cycle, they remain entitled to receive their laptop even if their degree was completed prior to the physical distribution event.',
          },
        },
      ],
    },
  ],
};

export default function PmLaptopSchemePage() {
  const breadcrumbs = [
    { nameEn: 'Education & Merit Lists', nameUr: 'تعلیم و میرٹ لسٹ', url: '/education' },
    { nameEn: 'PM Youth Laptop Scheme 2026 Guide', nameUr: 'وزیر اعظم یوتھ لیپ ٹاپ سکیم 2026' },
  ];

  const laptopSteps = [
    {
      number: 1,
      icon: <Laptop className="w-5 h-5" />,
      titleEn: 'Apply on laptop.pmyp.gov.pk',
      titleUr: 'پورٹل پر آن لائن رجسٹریشن',
      descEn: 'Register or log in with your CNIC, enter your academic program, CGPA/marks, and select your university campus.',
      descUr: 'شناختی کارڈ سے پورٹل لاگ ان کریں، اپنا تعلیمی سمسٹر، سی جی پی اے اور یونیورسٹی ڈیٹا درج کریں۔',
      tagEn: 'Portal Submission',
      tagUr: 'آن لائن اپلائی',
    },
    {
      number: 2,
      icon: <School className="w-5 h-5" />,
      titleEn: 'University Focal Verification',
      titleUr: 'فوکل پرسن تصدیق',
      descEn: 'Your university HEC focal person authenticates your regular enrollment, admission year, and transcript grades.',
      descUr: 'آپ کی یونیورسٹی کا فوکل پرسن آپ کے باقاعدہ داخلے اور سمسٹر رزلٹ کی تصدیق کرتا ہے۔',
      tagEn: 'HEC Verification',
      tagUr: 'ڈیٹا تصدیق',
    },
    {
      number: 3,
      icon: <FileCheck className="w-5 h-5" />,
      titleEn: 'Provisional List & Grievance',
      titleUr: 'عارضی میرٹ لسٹ اور اعتراضات',
      descEn: 'Inspect the provisional departmental merit list and lodge an objection if your CGPA or batch is misreported.',
      descUr: 'اپنے شعبے کی عبوری میرٹ لسٹ دیکھیں اور کسی غلطی کی صورت میں آن لائن شکایت درج کروائیں۔',
      tagEn: 'Merit Generation',
      tagUr: 'میرٹ لسٹ',
    },
    {
      number: 4,
      icon: <Award className="w-5 h-5" />,
      titleEn: 'Physical Verification & Handover',
      titleUr: 'اصل اسناد اور لیپ ٹاپ کی وصولی',
      descEn: 'Bring original CNIC, student ID card, fee vouchers, and official DMCs to the campus distribution ceremony.',
      descUr: 'تقریب تقسیم کے دن اصل شناختی کارڈ، یونیورسٹی کارڈ، فیس واؤچر اور رزلٹ کارڈز پیش کر کے لیپ ٹاپ وصول کریں۔',
      tagEn: 'Distribution Day',
      tagUr: 'تقسیم تقریب',
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
            <InteractiveToolBadge labelEn="HEC PMYP INITIATIVE" labelUr="ہائر ایجوکیشن کمیشن پروگرام" variant="navy" />
            <VerifiedBadge textEn="OFFICIAL PORTAL: laptop.pmyp.gov.pk" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            PM Youth Laptop Scheme 2026: Eligibility, Quota Merit &amp; Status Check
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              وزیر اعظم یوتھ لیپ ٹاپ سکیم: اہلیت کے قواعد، شعبہ وار میرٹ اور آن لائن سٹیٹس چیک
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Curious how the Prime Minister&apos;s Youth Laptop Scheme actually decides who gets a laptop? Here is the honest, comprehensive guide explaining the official eligibility rules, the cascading departmental quota structure, status tracking on <code>laptop.pmyp.gov.pk</code>, and what documents to bring on distribution day.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is the PM Laptop Scheme and Who is Eligible?"
          topicTitleUr="وزیر اعظم لیپ ٹاپ سکیم کیا ہے اور کون سے طلباء اہل ہیں؟"
          answerEn="The Prime Minister's Youth Laptop Scheme provides free brand-name laptops to regular Pakistani students enrolled in HEC-recognized public sector universities (BS, MS, M.Phil, PhD). Applicants need a minimum 2.80 CGPA (or 70% marks) and must not have received a laptop in any previous government scheme. Merit is decided through a cascading departmental quota on laptop.pmyp.gov.pk."
          answerUr="وزیر اعظم یوتھ لیپ ٹاپ سکیم کے تحت سرکاری یونیورسٹیوں میں زیر تعلیم ریگولر طلباء (بی ایس، ایم ایس، ایم فل اور پی ایچ ڈی) کو مفت لیپ ٹاپ دیے جاتے ہیں۔ کم از کم 2.80 سی جی پی اے یا 70 فیصد نمبر لازمی ہیں اور سابقہ کسی سکیم سے لیپ ٹاپ نہ ملا ہو۔ میرٹ کا فیصلہ شعبہ وار کوٹہ سسٹم کے تحت پورٹل پر ہوتا ہے۔"
        />

        {/* Conversational Intro */}
        <section className="p-6 rounded-2xl bg-amber-50/70 dark:bg-slate-900/80 border border-amber-200/80 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-doc-seal dark:text-amber-400 font-serif font-bold text-lg">
            <GraduationCap className="w-5 h-5 shrink-0" />
            <h2>Why Your &quot;Real&quot; Competition is Only Inside Your Own Department</h2>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Every time merit lists are posted for the PM Laptop Scheme, students flood university WhatsApp groups with the same confusing question: <em>&quot;My friend in Chemistry got a laptop with a 3.1 CGPA, so why am I on the waiting list in Computer Science with a 3.65?&quot;</em>
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            The answer lies in how HEC designs the scheme. There is <strong>no single nationwide merit list or universal cutoff</strong>. The laptops are allocated through a cascading quota that trickles down to your specific department and semester batch. Let&apos;s sit down and unpack exactly how this works so you know where you stand.
          </p>
        </section>

        {/* Section 1: Comprehensive Eligibility Checklist */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Official Eligibility Checklist: Are You Qualified?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-mono font-bold text-[11px]">
                ELIGIBLE CRITERIA (WHO CAN APPLY)
              </span>
              <ul className="space-y-2.5 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Nationality:</strong> Pakistani or AJK national with a valid CNIC or B-Form.</li>
                <li><strong>Institution:</strong> Currently enrolled as a <strong>regular (full-time) student</strong> at an HEC-recognized Public Sector University or Degree Awarding Institute (DAI).</li>
                <li><strong>Degree Programs:</strong> Enrolled in PhD, MS/M.Phil (18-year), Master’s (16-year), or BS (4/5-year) degree programs.</li>
                <li><strong>Academic Performance:</strong> Minimum <strong>2.80 CGPA (out of 4.00)</strong> in the semester system or at least <strong>70% marks</strong> in the annual examination system (or 70% in the previous degree for newly admitted first-semester students).</li>
                <li><strong>Graduated Students:</strong> Students who were enrolled and selected during the active phase cycle but graduated before the physical handover remain fully eligible.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-rose-100 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 font-mono font-bold text-[11px]">
                INELIGIBLE CRITERIA (WHO IS EXCLUDED)
              </span>
              <ul className="space-y-2.5 text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                <li><strong>Private Universities:</strong> Students enrolled in private sector universities or non-public degree institutions.</li>
                <li><strong>Affiliated Colleges:</strong> Students studying in government colleges affiliated with universities (unless a dedicated regional government quota is specifically advertised).</li>
                <li><strong>Distance Learning:</strong> Students in distance education programs (Virtual University, distance-learning AIOU tracks).</li>
                <li><strong>Previous Beneficiaries:</strong> Anyone who has already received a laptop from earlier phases of the PM Laptop Scheme or Provincial (Punjab/KP) laptop schemes.</li>
                <li><strong>Evening/Executive Exclusions:</strong> Some self-supporting, weekend, or executive evening programs that do not carry regular HEC subsidization.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Flow Diagram */}
        <StepFlowDiagram
          titleEn="Step-by-Step PM Laptop Application &amp; Distribution Cycle"
          titleUr="آن لائن رجسٹریشن، تصدیق اور لیپ ٹاپ کے حصول کے 4 مراحل"
          subtitleEn="How applications move from registration to focal person verification and physical handover"
          subtitleUr="پورٹل پر فارم جمع کروانے سے لے کر تقریب تقسیم تک کا مکمل طریقہ"
          steps={laptopSteps}
        />

        {/* Section 3: Cascading Quota Merit System Explained */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              The Cascading Quota Merit System: How Laptops Are Allocated
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              To ensure fairness across all disciplines—from humanities to artificial intelligence—HEC uses a <strong>cascading mathematical allocation formula</strong>. Here is the 4-tier breakdown of how the national laptop pool reaches your hands:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
                <h3 className="font-bold text-doc-ink dark:text-white text-xs">Tier 1: University Quota</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Total national laptops are apportioned to each public university based on its total enrolled student strength relative to the national student population.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="w-6 h-6 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
                <h3 className="font-bold text-doc-ink dark:text-white text-xs">Tier 2: Degree Level Split</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  The university&apos;s quota is divided by degree levels: PhD candidates receive top priority, followed by MS/M.Phil, and the largest share to BS undergraduate students.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="w-6 h-6 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
                <h3 className="font-bold text-doc-ink dark:text-white text-xs">Tier 3: Department Share</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  The degree quota is split proportionally across all faculties and departments (e.g. Physics, Law, Computer Science, Economics, Urdu).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs">4</span>
                <h3 className="font-bold text-doc-ink dark:text-white text-xs">Tier 4: Batch Ranking</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Within each academic batch (e.g., BS CS Fall 2024), students are ranked strictly from highest CGPA to lowest until the batch quota is filled.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Application Status Stages Glossary */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Application Status Stages on laptop.pmyp.gov.pk
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              When you log into your dashboard with your CNIC and password, your application will display one of the following official status badges:
            </p>

            <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="table-scroll-container">
                <table className="w-full text-xs font-sans min-w-[540px]">
                  <thead className="bg-doc-ink text-white text-[11px] font-mono uppercase tracking-wider">
                    <tr>
                      <th className="px-4 py-3 text-left">Status Badge</th>
                      <th className="px-4 py-3 text-left">What It Means</th>
                      <th className="px-4 py-3 text-right">Action Required</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-mono font-bold text-blue-600">Applied / Submitted</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Your application has been received in the central database.</td>
                      <td className="px-4 py-3 text-right text-slate-500">Wait for focal person review.</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-mono font-bold text-amber-600">Under Review</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Your university focal person is verifying your enrollment records.</td>
                      <td className="px-4 py-3 text-right text-slate-500">Ensure university records match.</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-mono font-bold text-indigo-600">Verified</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Data authenticated. You are included in the pool for merit list ranking.</td>
                      <td className="px-4 py-3 text-right text-slate-500">Wait for provisional merit list.</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-mono font-bold text-emerald-600">Selected</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">You have qualified inside your department batch quota!</td>
                      <td className="px-4 py-3 text-right font-bold text-emerald-600">Prepare original documents.</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-mono font-bold text-amber-700">Waiting List</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Eligible, but ranked just below the initial quota cutoff.</td>
                      <td className="px-4 py-3 text-right text-slate-500">Standby for disqualified seat promotions.</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-mono font-bold text-rose-600">Disqualified / Rejected</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">CGPA below 2.80, received past laptop, or invalid data.</td>
                      <td className="px-4 py-3 text-right text-slate-500">Lodge grievance if data was in error.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 5: What to Bring on Distribution Day */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Distribution Day Checklist: What to Bring With You
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 space-y-4 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              When your university announces the physical laptop distribution ceremony, <strong>you must appear in person</strong>. Bringing incomplete documentation can cause on-the-spot disqualification. Prepare these items:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">1. Original CNIC / B-Form</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Original NADRA Smart CNIC or B-Form, along with 2 attested photocopies.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">2. Original Student Card</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Active, unexpired official university student identity card.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">3. Official Transcripts (DMC)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Original semester result card or transcript verifying your qualifying CGPA.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">4. Semester Fee Voucher</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Paid bank fee receipt or university enrollment challan proving regular status.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">5. Signed Undertaking / Affidavit</span>
                <p className="text-slate-600 dark:text-slate-300">
                  The official printed undertaking from the portal confirming no past laptop receipt.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">6. Passport-Size Photographs</span>
                <p className="text-slate-600 dark:text-slate-300">
                  2 fresh passport photographs with blue or white background for receiving rosters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Frequently Asked Questions */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Real Answers for Students)
            </h2>
          </div>

          <div className="space-y-3 font-sans text-xs">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Why was I not selected despite having good grades?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Laptops are allocated through cascading departmental quotas. If your department or admission batch was given 4 laptops and 4 peers had higher GPAs than you, your batch cutoff ends above your score. You were competing strictly against classmates in your own department, not students in other faculties.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Can affiliated college students or private university students apply?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                No. Standard HEC PMYP guidelines restrict eligibility to regular, full-time students at public sector universities and their main/sub-campuses. Affiliated colleges and private institutes are excluded from the central scheme.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                What if I already received a laptop during my BS and am now in MS or PhD?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Under the core rules, each student is entitled to receive only ONE laptop across their entire academic journey. If you received a laptop under any earlier federal or provincial scheme during your Bachelor&apos;s, you cannot receive another one during Master&apos;s or PhD.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                How do I know when the next application phase opens or closes?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Phase dates and submission deadlines are officially declared on the main government portal at <code>laptop.pmyp.gov.pk</code> and advertised on official HEC channels. Never trust third-party blogs charging fees or claiming &quot;direct backdoor laptop delivery.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Related Links */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Higher Education &amp; Student Financial Relief Utilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/education/hec-scholarship-status-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">HEC Grants</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                HEC Scholarship Status &amp; Degree Attestation 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                National scholarship quotas, stipend disbursements, and degree verification.
              </p>
            </Link>

            <Link
              href="/education/university-merit-list-checker-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-seal font-bold uppercase block">Merit Calculator</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                University Merit List Checker 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Aggregate calculators and closing merit trends for computing and sciences.
              </p>
            </Link>

            <Link
              href="/welfare/laptop-scheme-registration"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-emerald-600 font-bold uppercase block">Provincial Schemes</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Chief Minister Student Welfare Overview
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Provincial educational subsidies, e-bike vouchers, and youth initiatives.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
