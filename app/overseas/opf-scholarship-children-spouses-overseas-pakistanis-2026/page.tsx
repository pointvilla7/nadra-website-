import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  GraduationCap,
  Award,
  Users,
  Building,
  Check,
  AlertCircle,
  FileCheck,
  Plane,
  Heart,
  Scale
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'OPF Scholarship for Children & Spouses of Overseas Pakistanis 2026 – OPEF Guide | Pakistan Info Hub',
  description:
    'Complete guide to the Overseas Pakistanis Foundation (OPF) Education Fund (OPEF) scholarship 2026: Eligibility criteria (60% marks / 2.5 CGPA), compulsory vs voluntary OPF membership, monthly income cap (Rs. 200,000), intermediate to master’s coverage, and application steps on opf.org.pk.',
  keywords: [
    'OPF scholarship for children of overseas Pakistanis 2026',
    'Overseas Pakistanis Education Fund OPEF scholarship opf org pk',
    'OPF membership compulsory vs voluntary protector BEOE',
    'OPF scholarship eligibility criteria 60 percent marks 2.5 CGPA',
    'OPF spouse scholarship medical engineering bachelors masters',
    'deceased overseas Pakistani parent OPF scholarship 3 years',
    'how to apply for OPF scholarship online download form',
  ],
  openGraph: {
    title: 'OPF Scholarship for Children & Spouses of Overseas Pakistanis 2026 – OPEF Guide',
    description:
      'Official guide to OPF education scholarships: Eligibility rules, compulsory/voluntary membership, financial thresholds, and step-by-step application.',
    url: 'https://www.pakistaninfohub.com/overseas/opf-scholarship-children-spouses-overseas-pakistanis-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/overseas/opf-scholarship-children-spouses-overseas-pakistanis-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Overseas Pakistanis Hub', item: 'https://www.pakistaninfohub.com/overseas' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'OPF Scholarship Guide 2026',
          item: 'https://www.pakistaninfohub.com/overseas/opf-scholarship-children-spouses-overseas-pakistanis-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'OPF Scholarship for Children and Spouses of Overseas Pakistanis 2026: Complete OPEF Guide',
      description:
        'A comprehensive guide detailing the Overseas Pakistanis Education Fund (OPEF) scholarships, academic criteria, OPF membership categories, monthly income thresholds, and application procedures.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/overseas/opf-scholarship-children-spouses-overseas-pakistanis-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I become an OPF member if I was not registered during overseas departure?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If you went abroad on an independent or visit visa and did not register with the Protectorate of Emigrants (BEOE), you can obtain Voluntary OPF Membership by applying online at opf.org.pk or at any OPF office with proof of valid foreign legal residence (visa/residence permit of at least 1 year).',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a spouse of an overseas Pakistani apply for the OPF scholarship?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Spouses of registered OPF members studying in Pakistan at HEC-recognized colleges or universities are fully eligible to apply, provided they meet the academic merit criteria and no other child from the same OPF member is concurrently receiving an OPF scholarship in that cycle.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are children of deceased overseas Pakistanis eligible for the OPEF scholarship?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Children of registered OPF members who passed away while working abroad or within 3 years prior to the scholarship advertisement closing date remain eligible under the special welfare category.',
          },
        },
        {
          '@type': 'Question',
          name: 'What educational levels and disciplines are covered by the OPF scholarship?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The scholarship covers Intermediate (FA, FSc, ICS, ICom), Undergraduate Degree programs (including professional qualifications such as MBBS, BDS, Engineering, IT, LLB, BBA), and Postgraduate Master’s / MS programs at HEC-recognized institutions across Pakistan.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can an applicant receive an OPF scholarship alongside another government scholarship?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. OPF enforces a strict single-scholarship rule. The student must not be receiving any concurrent financial aid, fee waiver, or scholarship from any other government or private entity during the same academic year.',
          },
        },
      ],
    },
  ],
};

export default function OpfScholarshipGuidePage() {
  const breadcrumbs = [
    { nameEn: 'Overseas Pakistanis Hub', nameUr: 'اوورسیز پاکستانیز سروسز' },
    { nameEn: 'OPF Scholarship Guide', nameUr: 'او پی ایف تعلیمی وظائف گائیڈ 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="OPF EDUCATION FUND (OPEF)" labelUr="او پی ایف اسکالرشپ اسکیم" variant="seal" />
            <VerifiedBadge textEn="OPF WELFARE WING VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            OPF Scholarship for Children &amp; Spouses of Overseas Pakistanis 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              اوورسیز پاکستانیوں کے بچوں اور شریک حیات کے لیے او پی ایف تعلیمی وظائف
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            A comprehensive guide to the Overseas Pakistanis Education Fund (OPEF) scholarships. Learn about academic merit
            benchmarks (60% / 2.5 CGPA), compulsory vs voluntary OPF membership categories, monthly income caps (Rs. 200,000),
            and how to apply through the official OPF portal.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What Does the OPF Scholarship Cover and Who is Eligible?"
          topicTitleUr="او پی ایف اسکالرشپ کن طلباء کو ملتی ہے اور کیا شرائط ہیں؟"
          answerEn="The Overseas Pakistanis Foundation (OPF) awards OPEF scholarships to children and spouses of registered OPF members studying in Pakistan (Intermediate, Bachelor's, MBBS, Engineering, and Master's). Eligible applicants must have at least 60% marks or 2.5 CGPA and a parent/spouse monthly income of under Rs. 200,000."
          answerUr="اوورسیز پاکستانیز فاؤنڈیشن (او پی ایف) رجسٹرڈ ممبران کے بچوں اور شریک حیات کو انٹرمیڈیٹ، گریجویشن (بشمول MBBS اور انجینئرنگ) اور ماسٹرز کے لیے وظائف دیتی ہے۔ طالب علم کے کم از کم 60 فیصد نمبر یا 2.5 سی جی پی اے اور والدین کی ماہانہ آمدن 2 لاکھ روپے سے کم ہونی چاہیے۔"
        />

        {/* Section 1: How OPF Membership Works */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Plane className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Understanding OPF Membership: The Key Prerequisite
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 font-sans text-xs">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              To qualify for the scholarship, at least one parent (or the spouse) of the applicant must be an active registered member of OPF. There are two membership categories:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="font-bold text-doc-seal text-sm block">1. Compulsory OPF Membership</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>Automatic &amp; Lifetime:</strong> Any overseas Pakistani worker who registered their employment visa with the <em>Bureau of Emigration &amp; Overseas Employment (BEOE) Protectorate</em> and paid the Rs. 4,000 welfare fund before departing Pakistan is automatically an OPF member.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="font-bold text-doc-brass text-sm block">2. Voluntary OPF Membership</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>For Non-Protector Filers:</strong> Non-resident Pakistanis residing abroad for at least 1 year who traveled on student, business, or independent visas can register directly online at <code>opf.org.pk</code> to unlock family scholarship rights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Full Eligibility & Academic Criteria */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Complete Scholarship Eligibility Criteria
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Academic Merit</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Minimum <strong>60% marks</strong> in Matric / Intermediate board exams, or a minimum <strong>2.5 CGPA</strong> in university semesters from an HEC-recognized institution.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Income Threshold</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The monthly salary or verified income of the overseas parent / spouse must not exceed <strong>Rs. 200,000 per month</strong> (salary slip or embassy attestation required).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Special Provisions</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Children of deceased registered OPF members can apply if the parent passed away within <strong>3 years</strong> of the annual advertisement closing date.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Step-by-Step Application Process */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step: How to Apply for the OPF Scholarship
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Download Form</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Visit <code>opf.org.pk</code> and download the OPEF scholarship form under the Education / Downloads tab.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Get College Attestation</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Have the institution section certified and stamped by the head of your college or university registrar.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Attach Documents</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Attach CNIC/NICOP copies, OPF membership card/Protector stamp, marksheets, and monthly salary proof.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs">4</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Submit to OPF Office</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Submit physically or via courier to OPF Head Office Islamabad or regional offices in Lahore, Karachi, Peshawar, Multan, Quetta, or Mirpur.
              </p>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 4: OPF Regional Offices & Deadlines */}
        <section className="space-y-4">
          <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 font-sans text-xs">
            <div className="flex items-center gap-2 text-doc-brass font-bold text-sm">
              <AlertCircle className="w-5 h-5 text-amber-400" />
              <span>Annual Deadlines &amp; Official Submission Points</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Scholarship advertisements are published annually in national dailies and on the OPF website (with application deadlines typically falling in spring/summer cycles). Always verify the current cycle&apos;s exact closing date on the official portal:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <a
                href="https://www.opf.org.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition flex items-center justify-between text-doc-brass"
              >
                <span>OPF Official Portal: opf.org.pk</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <div className="p-3 rounded-xl bg-slate-800 text-slate-300">
                <span className="font-bold text-white block">Head Office:</span>
                Shahrah-e-Jamhuriat, G-5/2, Islamabad
              </div>
              <div className="p-3 rounded-xl bg-slate-800 text-slate-300">
                <span className="font-bold text-white block">Regional Offices:</span>
                Lahore, Karachi, Peshawar, Multan, Quetta, Mirpur
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Overseas Pakistanis Services on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/jobs/beoe-protector-registration-overseas-employment-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Protectorate Guide</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                BEOE Protector Registration Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">How mandatory protector registration enables automatic OPF membership.</p>
            </Link>

            <Link
              href="/overseas/nicop-mandatory-entry-rules-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Identity Card</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NADRA NICOP Overseas Rules →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Mandatory NICOP entry guidelines for expatriates.</p>
            </Link>

            <Link
              href="/overseas/overseas-pakistanis-foundation-opf-schemes"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Welfare Schemes</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                OPF Housing &amp; Financial Aid →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Housing schemes, airport counters, and emergency grants.</p>
            </Link>
          </div>
        </section>

        {/* Section 6: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (OPF Scholarships)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'How do I become an OPF member if I was not registered during overseas departure?',
                a: 'If you went abroad on an independent or visit visa and did not register with the Protectorate of Emigrants (BEOE), you can obtain Voluntary OPF Membership by applying online at opf.org.pk or at any OPF office with proof of valid foreign legal residence (visa/residence permit of at least 1 year).',
              },
              {
                q: 'Can a spouse of an overseas Pakistani apply for the OPF scholarship?',
                a: 'Yes. Spouses of registered OPF members studying in Pakistan at HEC-recognized colleges or universities are fully eligible to apply, provided they meet the academic merit criteria and no other child from the same OPF member is concurrently receiving an OPF scholarship in that cycle.',
              },
              {
                q: 'Are children of deceased overseas Pakistanis eligible for the OPEF scholarship?',
                a: 'Yes. Children of registered OPF members who passed away while working abroad or within 3 years prior to the scholarship advertisement closing date remain eligible under the special welfare category.',
              },
              {
                q: 'What educational levels and disciplines are covered by the OPF scholarship?',
                a: 'The scholarship covers Intermediate (FA, FSc, ICS, ICom), Undergraduate Degree programs (including professional qualifications such as MBBS, BDS, Engineering, IT, LLB, BBA), and Postgraduate Master’s / MS programs at HEC-recognized institutions across Pakistan.',
              },
              {
                q: 'Can an applicant receive an OPF scholarship alongside another government scholarship?',
                a: 'No. OPF enforces a strict single-scholarship rule. The student must not be receiving any concurrent financial aid, fee waiver, or scholarship from any other government or private entity during the same academic year.',
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
            { label: 'Overseas Pakistanis Foundation (OPF) Education Division', url: 'https://www.opf.org.pk/' },
            { label: 'Ministry of Overseas Pakistanis & Human Resource Development', url: 'https://overseas.gov.pk/' },
            { label: 'Bureau of Emigration & Overseas Employment (BEOE)', url: 'https://beoe.gov.pk/' },
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
