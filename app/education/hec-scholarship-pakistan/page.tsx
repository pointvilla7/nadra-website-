import type { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, FAQAccordionVisual } from '@/components/visuals';
import {
  GraduationCap,
  Building2,
  Globe2,
  FileCheck,
  FileText,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  HelpCircle,
  Clock,
  Coins,
  Scale,
  Calendar,
  AlertCircle,
  BookOpen,
  Send,
  Users,
  Award,
  Landmark,
} from 'lucide-react';

const EligibilityChecklistWidget = dynamic(
  () => import('@/components/EligibilityChecklistWidget').then((m) => ({ default: m.EligibilityChecklistWidget })),
  { ssr: false, loading: () => <div className="h-48 rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" /> }
);

export const metadata: Metadata = {
  title: 'HEC Scholarships 2026: Need-Based, Foreign Schemes & Application Guide | Pakistan Info Hub',
  description:
    'Authoritative 2026 guide to Higher Education Commission (HEC) scholarships: University Financial Aid Office (FAO) Need-Based process, Chinese Government Scholarship (CSC), Stipendium Hungaricum, Commonwealth, and PEEF vs HEC comparison.',
  keywords: [
    'hec scholarships 2026',
    'hec need based scholarship apply 2026',
    'hec fao financial aid office process',
    'chinese government scholarship csc hec 2026',
    'stipendium hungaricum pakistan 2026',
    'hec commonwealth scholarship 2026',
    'peef vs hec scholarship difference',
    'hec hat test scholarship 2026',
    'scholarship.hec.gov.pk',
  ],
  openGraph: {
    title: 'HEC Scholarships 2026: Need-Based, Foreign Schemes & Application Guide',
    description:
      'Step-by-step application walkthrough for domestic HEC Need-Based financial aid, foreign government quotas (China, Hungary, UK), and provincial endowment rules.',
    url: 'https://www.pakistaninfohub.com/education/hec-scholarship-pakistan',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/education/hec-scholarship-pakistan',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Education', item: 'https://www.pakistaninfohub.com/education' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'HEC Scholarships Guide 2026',
          item: 'https://www.pakistaninfohub.com/education/hec-scholarship-pakistan',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'HEC Scholarships 2026 in Pakistan: Need-Based, Foreign Bilateral Schemes & Eligibility Guide',
      description:
        'Complete breakdown of HEC financial support pipelines: University Financial Aid Office (FAO) Need-Based form submission, CSC China & Stipendium Hungaricum dual-portal applications, and PEEF vs HEC distinctions.',
      author: {
        '@type': 'Organization',
        name: 'Pakistan Info Hub Editorial Team',
        url: 'https://www.pakistaninfohub.com/editorial-team',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Pakistan Info Hub',
        url: 'https://www.pakistaninfohub.com',
      },
      datePublished: '2026-08-20',
      dateModified: '2026-09-05',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/education/hec-scholarship-pakistan',
    },
    {
      '@type': 'HowTo',
      name: 'How to Apply for HEC Need-Based Scholarships (NBS) in Pakistan',
      description:
        'Step-by-step procedure for securing an HEC Need-Based Scholarship through your public university Financial Aid Office.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Confirm Admission in Public University',
          text: 'Obtain regular merit admission in an HEC-recognized public university undergraduate program.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Collect FAO Application Package',
          text: 'Visit your university Student Financial Aid Office (SFAO/FAO) or download the prescribed HEC Need-Based Scholarship Form.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Gather Supporting Financial Evidences',
          text: 'Attach certified salary slips/income affidavit, last 6 months paid utility bills, sibling fee slips, and house rental/ownership deeds.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Submit to University FAO',
          text: 'Submit the completed dossier before the semester deadline and obtain an acknowledgment receipt.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Appear for ISAC Interview',
          text: 'Attend the Institutional Scholarship Award Committee (ISAC) interview for physical scrutiny and household verification.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I apply for the HEC Need-Based Scholarship?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You do not apply solely on the central HEC web portal. You must collect the official HEC Need-Based form from your public university Financial Aid Office (FAO / SFAO), attach verified income certificates and utility bills, submit it directly to your university FAO, and appear before the Institutional Scholarship Award Committee (ISAC) for interview.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does the HEC Need-Based Scholarship cover?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It provides 100% full tuition fee coverage credited directly to the university account for the standard duration of the program (e.g. 4 years for BS), plus an allocated monthly living stipend (PKR 6,000/month) disbursed to the student.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I receive both PEEF and HEC scholarships at the same time?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Government regulations strictly prohibit dual scholarship benefits. If selected for both HEC Need-Based and PEEF (Punjab Educational Endowment Fund), you must surrender one and submit a formal affidavit confirming you are drawing only a single public stipend.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are private university students eligible for HEC Need-Based Scholarships?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standard HEC Need-Based Scholarships are exclusively restricted to participating public sector universities. However, certain private non-profit institutions offer dedicated institutional aid programs or specific philanthropic endowments separate from HEC NBS.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do foreign government scholarships like CSC China and Hungary work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Foreign bilateral schemes require a dual application: first on the foreign host country portal (e.g., CSC portal campuschina.org with HEC Agency No. 5861 or Hungary DreamApply portal), and second on the HEC E-Services portal (scholarship.hec.gov.pk). Candidates must also take the HEC Higher Education Aptitude Test (HAT) administered by ETC.',
          },
        },
        {
          '@type': 'Question',
          name: 'What minimum CGPA is required to retain an HEC scholarship each semester?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Recipients must maintain satisfactory academic standing, typically a minimum CGPA of 2.50 to 3.0 (varying by university regulations), along with at least 75% class attendance. Dropping below the minimum threshold leads to suspension of the stipend.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the HEC scholarship helpline and official portal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Applications are managed at scholarship.hec.gov.pk and eportal.hec.gov.pk. Official HEC helpline: +92 51 9040 1704 or 051-111-119-432. Email support: info@hec.gov.pk.',
          },
        },
      ],
    },
  ],
};

export default function HECScholarshipsPage() {
  const breadcrumbs = [
    { nameEn: 'Education', nameUr: 'تعلیم' },
    { nameEn: 'HEC Scholarships 2026', nameUr: 'ایچ ای سی سکالرشپس 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn">
        {/* Navigation Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        {/* Page Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="SCHOLARSHIPS 2026" labelUr="سکالرشپس گائیڈ 2026" variant="gold" />
            <VerifiedBadge />
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 font-semibold flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> Updated September 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white leading-tight">
            HEC Scholarships 2026 in Pakistan
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1.5 font-bold">
              ایچ ای سی سکالرشپ 2026: ضرورت مند طلباء اور بیرون ملک تعلیم کے وظائف
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Higher Education Commission (HEC) administers Pakistan&apos;s two largest higher education funding streams:
            domestic Need-Based Scholarships (coordinated directly with public university Financial Aid Offices) and
            bilateral international government scholarships (CSC China, Stipendium Hungaricum, and Commonwealth).
            Here is the complete operational guide to qualifying, applying, and securing your funding.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Apply for HEC Scholarships in 2026"
          topicTitleUr="HEC سکالرشپ میں اپلائی کرنے کا جامع طریقہ"
          answerEn="HEC offers two distinct scholarship categories: 1) Domestic Need-Based Scholarships (NBS/Ehsaas): Apply directly through your university's Student Financial Aid Office (SFAO/FAO) by submitting the prescribed form with verified utility bills, income slips, and attending the ISAC interview. 2) International Government Scholarships (China CSC, Hungary, UK Commonwealth): Apply via dual registration on both the foreign portal and HEC's scholarship.hec.gov.pk, requiring the HEC HAT aptitude test. No fee is charged for the Need-Based application itself."
          answerUr="HEC کے پاس دو بڑے پروگرامز ہیں: 1) گھریلو ضرورت مند سکالرشپ (HEC NBS) کے لیے درخواست سینٹرل پورٹل پر نہیں بلکہ یونیورسٹی کے فنانشل ایڈ آفس (FAO) میں بجلی کے بل اور تنخواہ کے سرٹیفکیٹ کے ساتھ جمع ہوتی ہے۔ 2) بین الاقوامی حکومتی سکالرشپس (چین، ہنگری، کامن ویلتھ) کے لیے متعلقہ غیر ملکی پورٹل اور scholarship.hec.gov.pk دونوں پر ڈبل اپلائی کرنا اور HEC HAT ٹیسٹ پاس کرنا لازمی ہے۔"
        />

        {/* Dual Scholarship Warning Alert */}
        <section className="doc-card p-5 md:p-6 rounded-2xl border border-amber-300 dark:border-amber-700/60 bg-amber-50/70 dark:bg-amber-950/30 space-y-3">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h2 className="font-serif font-bold text-base md:text-lg text-amber-900 dark:text-amber-200">
                Crucial Rule: Dual Government Scholarship Prohibition
              </h2>
              <p className="text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                Under federal and provincial regulations, <strong>no student can hold two government scholarships simultaneously</strong>.
                If you qualify for both HEC Need-Based and PEEF (Punjab Educational Endowment Fund) or Sehat/BISP
                educational stipends, you must formally surrender one. Holding dual government stipends is treated as
                an institutional violation requiring refund and disqualification.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 1: Domestic Need-Based Scholarship (FAO Pipeline) */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-doc-brass text-sm font-bold uppercase tracking-wider font-mono">
              <Building2 className="w-4 h-4" /> Domestic Funding Pipeline
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-doc-ink dark:text-white mt-1">
              1. HEC Need-Based Scholarships (NBS): The University FAO Process
            </h2>
          </div>

          <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 font-sans leading-relaxed space-y-4">
            <p>
              The <strong>HEC Need-Based Scholarship (NBS)</strong> is specifically designed to guarantee that no
              deserving student admitted on merit into an HEC-recognized public university is forced to drop out due
              to tuition costs. Many students make the mistake of looking for an online application on HEC&apos;s main site
              and assuming the scholarship is closed. In reality, <strong>the application is managed locally by each university&apos;s
              Financial Aid Office</strong>.
            </p>
          </div>

          {/* What NBS Covers Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <Coins className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">100% Tuition Waiver</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                Full semester admission and tuition fees are credited directly into your university treasury account.
                You pay zero academic charges throughout the degree duration.
              </p>
            </div>

            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                <Coins className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">Monthly Living Stipend</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                Selected candidates receive an allocated living allowance (standard PKR 6,000/month) disbursed either
                per semester or quarterly into their personal bank accounts.
              </p>
            </div>

            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2 shadow-sm sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">Entire Program Duration</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                Valid for all 4 years (8 semesters) of undergraduate BS/BSc degrees or 2 years for standard master&apos;s
                programs, subject to maintaining the required GPA.
              </p>
            </div>
          </div>

          {/* FAO Step-by-Step Procedure */}
          <div className="doc-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-5">
            <h3 className="font-serif font-bold text-xl text-doc-ink dark:text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-doc-brass" />
              How to Submit Your Need-Based Dossier to the University FAO
            </h3>

            <div className="space-y-4 text-sm font-sans text-slate-700 dark:text-slate-300">
              <div className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-doc-ink text-white dark:bg-slate-700 flex items-center justify-center text-xs font-bold shrink-0">1</span>
                <div>
                  <h4 className="font-bold text-doc-ink dark:text-white">Secure Regular Merit Admission First</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                    Self-finance, evening, or executive candidates are strictly ineligible. You must be enrolled in a regular
                    morning merit seat at a participating public university (e.g. Quaid-i-Azam, Punjab University, UET, NUST, GCU, etc.).
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-doc-ink text-white dark:bg-slate-700 flex items-center justify-center text-xs font-bold shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-doc-ink dark:text-white">Collect Form from Student Financial Aid Office (SFAO)</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                    During the first 2 to 4 weeks of the semester, visit your campus SFAO/FAO. Collect the physical
                    prescribed <em>HEC Need-Based Scholarship Form</em> or download your university&apos;s official PDF format.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-doc-ink text-white dark:bg-slate-700 flex items-center justify-center text-xs font-bold shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-doc-ink dark:text-white">Attach Mandatory Supporting Verifications</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                    Assemble certified photocopies of every document listed in the checklist below. Incomplete submissions
                    are automatically rejected by the scrutiny desk without appeal.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-doc-ink text-white dark:bg-slate-700 flex items-center justify-center text-xs font-bold shrink-0">4</span>
                <div>
                  <h4 className="font-bold text-doc-ink dark:text-white">Appear for the ISAC Panel Interview</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                    Shortlisted candidates are summoned before the <strong>Institutional Scholarship Award Committee (ISAC)</strong>.
                    The committee verifies income claims, asks about family liabilities, and reviews electricity consumption patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mandatory Documents Checklist Table */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-xl text-doc-ink dark:text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-emerald-600" />
              Mandatory FAO Document Checklist (What to Attach)
            </h3>
            <p className="text-xs text-slate-500 font-sans">
              Ensure every attachment is notarized or attested by a Gazetted Officer (BS-17 or above):
            </p>

            <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="table-scroll-container">
                <table className="w-full text-sm font-sans min-w-[560px]">
                  <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                    <tr>
                      <th className="px-4 py-3 text-left">Document Type</th>
                      <th className="px-4 py-3 text-left">Acceptable Proof</th>
                      <th className="px-4 py-3 text-left">Why It Is Required</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {[
                      {
                        doc: 'Father / Guardian Income Proof',
                        proof: 'Official Salary Slip (for salaried) OR Stamp Paper Affidavit verified by Union Council (for daily/informal earners)',
                        why: 'Validates household monthly threshold (typically under PKR 75,000 - 100,000)',
                      },
                      {
                        doc: 'Paid Utility Bills (Last 6 Months)',
                        proof: 'Photocopies of paid Electricity, Gas, and Water bills of household residence',
                        why: 'Committees use average units consumed as a cross-check against declared family income',
                      },
                      {
                        doc: 'House Accommodation Proof',
                        proof: 'Registered Rent Agreement (for tenants) OR Property Registry/Fard copy (for owners)',
                        why: 'Establishes monthly housing expenditure burden',
                      },
                      {
                        doc: 'Siblings Educational Fee Receipts',
                        proof: 'Recent paid fee challans of school, college, or university-going siblings',
                        why: 'Verifies per-capita educational liabilities of the family head',
                      },
                      {
                        doc: 'Medical Bills / Disability Proof (if applicable)',
                        proof: 'Medical board certificate or chronic ailment prescription receipts',
                        why: 'Additional hardship weighting during ISAC scoring',
                      },
                    ].map((row, idx) => (
                      <tr key={idx} className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                        <td className="px-4 py-3 font-semibold text-doc-ink dark:text-white text-xs">{row.doc}</td>
                        <td className="px-4 py-3 text-slate-600 dark:text-slate-400 text-xs">{row.proof}</td>
                        <td className="px-4 py-3 text-slate-500 text-xs font-mono">{row.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Eligibility Check Widget */}
        <section aria-label="Interactive Eligibility Checklist">
          <EligibilityChecklistWidget programId="hec-scholarships" />
        </section>

        <AdPlacementZone format="horizontal" />

        {/* SECTION 2: Foreign-Funded Government Scholarships */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-doc-brass text-sm font-bold uppercase tracking-wider font-mono">
              <Globe2 className="w-4 h-4" /> International Bilateral Programs
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-doc-ink dark:text-white mt-1">
              2. Foreign Government Scholarships: CSC China, Hungary & Commonwealth
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
            The Higher Education Commission acts as the official nominating agency for bilateral scholarships offered
            by foreign governments. These schemes are fully funded (airfare, full tuition, dormitory accommodation,
            and monthly foreign currency stipends). However, they require <strong>dual registration on both HEC&apos;s portal
            and the foreign agency&apos;s portal</strong>.
          </p>

          {/* Foreign Schemes Comparison Table */}
          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[620px]">
                <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 text-left">Scholarship Program</th>
                    <th className="px-4 py-3 text-left">Degree Levels</th>
                    <th className="px-4 py-3 text-left">Portals Required</th>
                    <th className="px-4 py-3 text-left">Aptitude Test</th>
                    <th className="px-4 py-3 text-left">Standard Intake Cycle</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {[
                    {
                      name: 'Chinese Government Scholarship (CSC)',
                      levels: 'Undergrad, Masters, PhD',
                      portals: '1) campuschina.org (Type A, Agency #5861)\n2) scholarship.hec.gov.pk',
                      test: 'HEC HAT (Min 50% cut-off)',
                      cycle: 'Announced Dec - Jan (Annual)',
                    },
                    {
                      name: 'Stipendium Hungaricum (Hungary)',
                      levels: 'Bachelor, Master, PhD',
                      portals: '1) apply.stipendiumhungaricum.hu\n2) scholarship.hec.gov.pk',
                      test: 'HEC HAT (Strict merit cut-off)',
                      cycle: 'Announced Nov - Jan (Annual)',
                    },
                    {
                      name: 'Commonwealth Scholarships (UK)',
                      levels: 'Master & PhD Only',
                      portals: '1) cscuk.fcdo.gov.uk\n2) scholarship.hec.gov.pk',
                      test: 'HEC HAT / Academic Score',
                      cycle: 'Announced Aug - Oct (Annual)',
                    },
                    {
                      name: 'Morocco & Turkiye Burslari (Partner Schemes)',
                      levels: 'Bachelor, Master',
                      portals: 'HEC portal + National Partner Portals',
                      test: 'Academic Merit + Interview',
                      cycle: 'Varies by partner ministry',
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                      <td className="px-4 py-3 font-semibold text-doc-ink dark:text-white text-xs">{row.name}</td>
                      <td className="px-4 py-3 text-slate-600 dark:text-slate-400 text-xs">{row.levels}</td>
                      <td className="px-4 py-3 text-doc-seal dark:text-red-400 text-xs font-mono whitespace-pre-line">{row.portals}</td>
                      <td className="px-4 py-3 text-slate-600 dark:text-slate-300 text-xs font-semibold">{row.test}</td>
                      <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold">{row.cycle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Deep Dives into CSC & Hungary */}
          <div className="grid md:grid-cols-2 gap-6 pt-2">
            <div className="doc-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
              <h3 className="font-serif font-bold text-xl text-doc-ink dark:text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-600" />
                Chinese Government Scholarship (CSC) Essentials
              </h3>
              <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2.5 font-sans leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Agency Number:</strong> Use HEC Agency No. <strong>5861</strong> on the CSC portal (`campuschina.org`) under Category Type A.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Foreigner Physical Examination:</strong> Must be completed on the official Chinese medical form signed by a government civil surgeon.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Police Character Certificate:</strong> Non-criminal record certificate issued by Police Khidmat Markaz is mandatory.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Pre-Admission Letter:</strong> Contact Chinese professors early; obtaining a provisional supervisor acceptance letter drastically increases nomination chances.</span>
                </li>
              </ul>
            </div>

            <div className="doc-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
              <h3 className="font-serif font-bold text-xl text-doc-ink dark:text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                Stipendium Hungaricum (Hungary) Requirements
              </h3>
              <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2.5 font-sans leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Two-Step Dual Registration:</strong> Register first on Tempus Public Foundation DreamApply, and subsequently input your Tempus ID on HEC E-Services.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>HEC HAT Cut-off:</strong> HEC conducts the Higher Education Aptitude Test (HAT). Nominations strictly follow HAT merit ranking.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Host University Interview:</strong> Nominated candidates undergo an online technical interview/test conducted directly by the Hungarian faculty.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Coverage:</strong> 100% tuition, monthly Hungarian Forint (HUF) stipend, free dormitory accommodation (or housing contribution), and health insurance.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 3: PEEF vs HEC Distinction */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-doc-brass text-sm font-bold uppercase tracking-wider font-mono">
              <Scale className="w-4 h-4" /> Endowment & Agency Analysis
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-doc-ink dark:text-white mt-1">
              3. PEEF vs. HEC Scholarships: Key Differences Explained
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
            Pakistani students frequently confuse <strong>PEEF (Punjab Educational Endowment Fund)</strong> with
            <strong> HEC scholarships</strong>. While both provide need-cum-merit financial aid, they operate under
            entirely distinct legal charters, geographic jurisdictions, and application pathways:
          </p>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[620px]">
                <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 text-left w-1/4">Comparison Metric</th>
                    <th className="px-4 py-3 text-left w-3/8 text-amber-300">PEEF (Punjab Endowment)</th>
                    <th className="px-4 py-3 text-left w-3/8 text-emerald-300">HEC (Federal Commission)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {[
                    {
                      metric: 'Jurisdiction & Domicile',
                      peef: 'Primarily Punjab domicile holders, plus allocated special quotas for AJK, GB, FATA, Balochistan, and ICT.',
                      hec: 'Federal / nationwide scope covering eligible students across all provinces and territories of Pakistan.',
                    },
                    {
                      metric: 'Administering Authority',
                      peef: 'Government of the Punjab (autonomous non-profit endowment fund established under Section 42).',
                      hec: 'Higher Education Commission Pakistan (Federal statutory body under the Ministry of Federal Education).',
                    },
                    {
                      metric: 'Education Levels Covered',
                      peef: 'Intermediate (FA/FSc), Graduation (BS/BA), Master’s degree programs, and CM Foreign Scholarships.',
                      hec: 'Exclusively Higher Education: 4-Year BS/Undergraduate, MS/MPhil, and Indigenous & Foreign PhDs.',
                    },
                    {
                      metric: 'Income Ceiling Criteria',
                      peef: 'Strict family income limit (commonly under PKR 60,000 - 65,000/month, verified via salary slips/affidavit).',
                      hec: 'Evaluated dynamically by ISAC based on per-capita disposable income and utility consumption metrics.',
                    },
                    {
                      metric: 'Application Routing',
                      peef: 'Submitted through affiliated partner colleges/universities or directly via peef.punjab.gov.pk annual campaigns.',
                      hec: 'Local University Financial Aid Office (for NBS) OR Central E-Services portal (for foreign bilateral schemes).',
                    },
                    {
                      metric: 'Simultaneous Dual Award',
                      peef: 'Strictly prohibited. If awarded HEC or BISP, student must choose one and decline the other.',
                      hec: 'Strictly prohibited. Holding two simultaneous public sector stipends leads to cancellation and recovery.',
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                      <td className="px-4 py-3 font-semibold text-doc-ink dark:text-white text-xs">{row.metric}</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300 text-xs">{row.peef}</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300 text-xs">{row.hec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 4: Application Roadmap */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-doc-brass text-sm font-bold uppercase tracking-wider font-mono">
              <FileText className="w-4 h-4" /> ROADMAP 2026 Process
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-doc-ink dark:text-white mt-1">
              4. Complete Application Roadmap: Domestic vs. Foreign Programs
            </h2>
          </div>

          <ProcessStepsDiagram
            titleEn="Step-by-Step Scholarship Application Pathways"
            titleUr="سکالرشپ درخواست کے مراحل: گھریلو و بین الاقوامی"
            subtitleEn="Visual guide showing how domestic Need-Based applications flow through campus desks versus foreign bilateral applications."
            steps={[
              {
                stepNumber: 1,
                titleEn: 'Determine Your Target Track',
                titleUr: 'درست کیٹیگری کا انتخاب',
                detailEn: 'Choose between Domestic Need-Based (NBS in public universities) OR Foreign Bilateral (CSC China, Hungary, Commonwealth).',
                tagEn: 'Track Selection',
              },
              {
                stepNumber: 2,
                titleEn: 'Assemble Verified Financial & Academic Dossier',
                titleUr: 'دستاویزات کی تصدیق',
                detailEn: 'Gather last 6 months paid utility bills, income slips, verified transcripts, and police/medical clearance certificates.',
                tagEn: 'Documentation',
              },
              {
                stepNumber: 3,
                titleEn: 'Channel Submission to Correct Desk',
                titleUr: 'متعلقہ دفتر میں اندراج',
                detailEn: 'NBS: Hand-deliver to campus Financial Aid Office (FAO). Foreign Schemes: Dual-submit on foreign portal AND scholarship.hec.gov.pk.',
                tagEn: 'Submission',
              },
              {
                stepNumber: 4,
                titleEn: 'Pass Testing & Interview Scrutiny',
                titleUr: 'ٹیسٹ اور انٹرویو',
                detailEn: 'NBS candidates face the ISAC university interview panel. Foreign scheme candidates sit for the HEC HAT examination.',
                tagEn: 'Evaluation',
              },
              {
                stepNumber: 5,
                titleEn: 'Award Verification & Disbursement Agreement',
                titleUr: 'حتمی منظوری و فنڈنگ',
                detailEn: 'Sign deed of agreement on stamp paper, submit bank account details, and maintain minimum CGPA for semester renewal.',
                tagEn: 'Award & Renewal',
              },
            ]}
          />
        </section>

        {/* SECTION 5: FAQs Section */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-doc-brass text-sm font-bold uppercase tracking-wider font-mono">
              <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-doc-ink dark:text-white mt-1">
              HEC Scholarships 2026: Clear Answers to Common Dilemmas
            </h2>
          </div>

          <FAQAccordionVisual
            titleEn="Official Scholarship FAQs"
            titleUr="سکالرشپس سے متعلق اہم ترین سوالات و جوابات"
            items={[
              {
                questionEn: 'How do I apply for the HEC Need-Based Scholarship?',
                questionUr: 'ایچ ای سی ضرورت مند سکالرشپ میں کیسے اپلائی کریں؟',
                answerEn:
                  'Do not search for an online application on HEC’s main portal. You must obtain the official HEC Need-Based Scholarship form from your public university Financial Aid Office (FAO / SFAO), attach certified income slips and 6 months of paid utility bills, submit the dossier to your university FAO, and appear before the Institutional Scholarship Award Committee (ISAC) for your physical interview.',
                answerUr:
                  'مرکزی ویب سائٹ کے بجائے اپنی سرکاری یونیورسٹی کے فنانشل ایڈ آفس (FAO) سے فارم حاصل کریں، بجلی/گیس کے بل اور آمدن سرٹیفکیٹ منسلک کر کے جمع کروائیں اور ISAC انٹرویو میں شریک ہوں۔',
              },
              {
                questionEn: 'What does the HEC Need-Based Scholarship actually cover?',
                questionUr: 'اس سکالرشپ میں کتنا خرچ حکومت اٹھاتی ہے؟',
                answerEn:
                  'The scholarship provides a 100% full tuition fee waiver (credited directly to the university accounts) plus an allocated living stipend (standard PKR 6,000 per month) disbursed to the student each semester for the entire standard degree duration.',
                answerUr:
                  'یونیورسٹی کی 100 فیصد ٹیوشن فیس معاف ہوتی ہے اور طالب علم کو ماہانہ بنیادوں پر 6,000 روپے گزارا الاؤنس ملتا ہے۔',
              },
              {
                questionEn: 'Can I receive both PEEF and HEC scholarships at the same time?',
                questionUr: 'کیا پیف (PEEF) اور ایچ ای سی دونوں سکالرشپس ایک ساتھ مل سکتی ہیں؟',
                answerEn:
                  'No. Government of Pakistan and provincial regulations strictly prohibit dual scholarship benefits. If you are selected for both HEC Need-Based and PEEF, you must surrender one and submit an affidavit confirming single public stipend receipt.',
                answerUr:
                  'ہرگز نہیں۔ سرکاری قوانین کے مطابق ایک وقت میں دو سرکاری سکالرشپس لینا منع ہے۔ پکڑے جانے پر رقم واپس اور داخلہ منسوخ ہو سکتا ہے۔',
              },
              {
                questionEn: 'Are private university students eligible for HEC Need-Based Scholarships?',
                questionUr: 'کیا پرائیویٹ یونیورسٹیوں کے طلباء بھی اپلائی کر سکتے ہیں؟',
                answerEn:
                  'No. Standard HEC Need-Based Scholarships are exclusively restricted to regular morning students enrolled in participating public sector universities. Private institutions run their own internal philanthropic aid schemes.',
                answerUr:
                  'نہیں۔ ایچ ای سی ضرورت مند سکالرشپ صرف منظور شدہ سرکاری یونیورسٹیوں کے ریگولر طلباء کے لیے مخصوص ہے۔',
              },
              {
                questionEn: 'How do foreign government scholarships like CSC China and Hungary work?',
                questionUr: 'چین اور ہنگری کی حکومتی سکالرشپس کا کیا طریقہ کار ہے؟',
                answerEn:
                  'Foreign bilateral schemes require dual registration: first on the host nation’s portal (e.g. campuschina.org with HEC Agency No. 5861 or Hungary DreamApply portal), and second on scholarship.hec.gov.pk. All candidates must sit for the HEC Higher Education Aptitude Test (HAT) administered by ETC.',
                answerUr:
                  'غیر ملکی حکومتی سکالرشپس کے لیے متعلقہ غیر ملکی پورٹل اور ایچ ای سی کے scholarship.hec.gov.pk دونوں پر ڈبل اپلائی کرنا اور HEC HAT ٹیسٹ پاس کرنا ضروری ہے۔',
              },
              {
                questionEn: 'What minimum CGPA is required each semester to keep the scholarship?',
                questionUr: 'سکالرشپ برقرار رکھنے کے لیے کم از کم کتنا جی پی اے ضروری ہے؟',
                answerEn:
                  'Recipients must maintain continuous satisfactory academic standing, typically a minimum CGPA of 2.50 to 3.0 (depending on university criteria) along with at least 75% attendance. Dropping below the threshold suspends the stipend.',
                answerUr:
                  'طالب علم کو ہر سمسٹر میں کم از کم 2.50 سے 3.00 سی جی پی اے اور 75 فیصد حاضری برقرار رکھنا لازمی ہوتا ہے۔',
              },
              {
                questionEn: 'Where can I track my submitted HEC scholarship application status?',
                questionUr: 'درخواست کا سٹیٹس آن لائن کہاں دیکھا جا سکتا ہے؟',
                answerEn:
                  'For foreign bilateral and centrally submitted applications, log into eportal.hec.gov.pk using your CNIC and password to check the "My Applications" dashboard. For domestic university Need-Based aid, status inquiries must be directed to your campus FAO notice board.',
                answerUr:
                  'بین الاقوامی سکالرشپ کا سٹیٹس eportal.hec.gov.pk پر لاگ ان کر کے دیکھا جاتا ہے، جبکہ گھریلو نیڈ بیسڈ کا سٹیٹس یونیورسٹی کے فنانشل ایڈ آفس سے ملتا ہے۔',
              },
            ]}
          />
        </section>

        {/* SECTION 6: Official Verification Sources & Helplines */}
        <section className="space-y-4 border-t border-slate-200 dark:border-slate-800 pt-8">
          <div className="flex items-center gap-2 text-doc-ink dark:text-white font-serif font-bold text-lg">
            <Landmark className="w-5 h-5 text-doc-brass" /> Official Verification Sources & Helplines
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-sans">
            Verify announcements and submit electronic applications strictly on authentic government web addresses:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-sans">
            <a
              href="https://scholarship.hec.gov.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-doc-brass transition flex items-center justify-between"
            >
              <div>
                <span className="font-bold text-doc-ink dark:text-white block">HEC Scholarship Portal</span>
                <span className="text-slate-500 font-mono">scholarship.hec.gov.pk</span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="https://eportal.hec.gov.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-doc-brass transition flex items-center justify-between"
            >
              <div>
                <span className="font-bold text-doc-ink dark:text-white block">HEC E-Services Portal</span>
                <span className="text-slate-500 font-mono">eportal.hec.gov.pk</span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="https://peef.punjab.gov.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-doc-brass transition flex items-center justify-between"
            >
              <div>
                <span className="font-bold text-doc-ink dark:text-white block">Punjab Endowment (PEEF)</span>
                <span className="text-slate-500 font-mono">peef.punjab.gov.pk</span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="https://www.campuschina.org"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-doc-brass transition flex items-center justify-between"
            >
              <div>
                <span className="font-bold text-doc-ink dark:text-white block">CSC China Portal</span>
                <span className="text-slate-500 font-mono">campuschina.org (Agency 5861)</span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="https://apply.stipendiumhungaricum.hu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-doc-brass transition flex items-center justify-between"
            >
              <div>
                <span className="font-bold text-doc-ink dark:text-white block">Hungary DreamApply</span>
                <span className="text-slate-500 font-mono">stipendiumhungaricum.hu</span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>

            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between">
              <div>
                <span className="font-bold text-doc-ink dark:text-white block">HEC Inquiry Helpline</span>
                <span className="text-slate-500 font-mono">+92 51 9040 1704 / 051-111-119-432</span>
              </div>
              <HelpCircle className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </section>

        {/* Related Education Guides */}
        <section className="border-t border-slate-200 dark:border-slate-800 pt-6">
          <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white mb-3">
            Related Higher Education Guides & Trackers
          </h3>
          <div className="flex flex-wrap gap-2 text-xs font-sans">
            <Link
              href="/education/hec-scholarship-status-2026"
              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass hover:text-doc-seal transition"
            >
              HEC Scholarship Status 2026 Tracker →
            </Link>
            <Link
              href="/education/hec-degree-attestation-new-blockchain-system-2026"
              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass hover:text-doc-seal transition"
            >
              HEC Blockchain Degree Attestation 2026 →
            </Link>
            <Link
              href="/education/pm-laptop-scheme-2026-eligibility-status-check"
              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass hover:text-doc-seal transition"
            >
              PM Laptop Scheme 2026 Check →
            </Link>
            <Link
              href="/education/university-merit-list-checker-2026"
              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass hover:text-doc-seal transition"
            >
              University Merit List Checker 2026 →
            </Link>
            <Link
              href="/education/cm-punjab-e-bike-scheme-2026-eligibility-apply"
              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass hover:text-doc-seal transition"
            >
              CM Punjab Student E-Bike Scheme →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
