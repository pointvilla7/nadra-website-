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
  HeartHandshake,
  GraduationCap,
  Baby,
  Scale,
  Building,
  Check,
  AlertCircle,
  Smartphone,
  ShieldAlert,
  Users,
  Search
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BISP Kafaalat vs Nashonuma vs Taleemi Wazaif 2026: Program Differences & 8171 Check | Pakistan Info Hub',
  description:
    'Complete guide to Benazir Income Support Programme (BISP) sub-schemes: Understand the differences between Benazir Kafaalat (unconditional cash), Taleemi Wazaif (conditional 70% school attendance), and Nashonuma (maternal/child health). Check status via the official 8171 portal.',
  keywords: [
    'BISP Kafaalat vs Taleemi Wazaif vs Nashonuma differences 2026',
    'Benazir Taleemi Wazaif 70 percent school attendance rule',
    'Benazir Nashonuma pregnant women THQ hospital registration',
    'how to check BISP stipend 8171 web portal CNIC',
    'why did my child BISP Taleemi Wazaif stipend stop',
    'B-Form CRC requirement BISP education registration',
    'free BISP registration tehsil office scam warning',
  ],
  openGraph: {
    title: 'BISP Kafaalat vs Nashonuma vs Taleemi Wazaif 2026: Differences & 8171 Portal',
    description:
      'A clarifying structural comparison of BISP sub-programs: Unconditional Kafaalat, conditional 70% attendance Taleemi Wazaif, and Nashonuma nutrition centers.',
    url: 'https://www.pakistaninfohub.com/welfare/bisp-kafaalat-vs-nashonuma-vs-taleemi-wazaif-explained-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/welfare/bisp-kafaalat-vs-nashonuma-vs-taleemi-wazaif-explained-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Social Welfare & Relief', item: 'https://www.pakistaninfohub.com/welfare' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'BISP Sub-Programs Explained 2026',
          item: 'https://www.pakistaninfohub.com/welfare/bisp-kafaalat-vs-nashonuma-vs-taleemi-wazaif-explained-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'BISP Kafaalat vs. Nashonuma vs. Taleemi Wazaif 2026: Differences, Attendance Rules & 8171 Status',
      description:
        'A comprehensive public welfare reference explaining the distinct operational criteria of BISP sub-programs, the 70% school attendance condition, and how to verify quarterly disbursements via the official 8171 portal.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/welfare/bisp-kafaalat-vs-nashonuma-vs-taleemi-wazaif-explained-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can a family receive Taleemi Wazaif or Nashonuma without being enrolled in Benazir Kafaalat?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Being an active, verified beneficiary of the base Benazir Kafaalat program (meeting the PMT poverty cutoff through the NSER survey) is the mandatory prerequisite for enrolling children in Taleemi Wazaif or registering pregnant/lactating mothers in Nashonuma.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why did my child\'s Taleemi Wazaif quarterly stipend stop arriving?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most common reason is that the child\'s quarterly school attendance fell below the mandatory 70% threshold verified by BISP compliance monitors. Once the student restores regular attendance and the school re-certifies the attendance slip, payments resume in the subsequent disbursement cycle.',
          },
        },
        {
          '@type': 'Question',
          name: 'What documents are required to register children for Benazir Taleemi Wazaif?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You must bring the mother\'s original CNIC, the child\'s computerized NADRA B-Form / Child Registration Certificate (CRC), and a school admission verification slip stamped and signed by the school headmaster or principal to your local BISP Tehsil Office.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there any fee or agent charge for registering in BISP programs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Registration for BISP Kafaalat, Taleemi Wazaif, and Nashonuma is 100% free of cost at all official BISP Tehsil Offices and government hospital facilitation centers. Never pay any fee or give your biometric verification to unauthorized private agents.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I check the exact stipend amount available for my family?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Because quarterly stipends vary based on your family\'s registered children, their school grade levels, gender quotas, and periodic federal adjustments, you should check your exact personalized disbursement by entering the mother\'s 13-digit CNIC on the official 8171 web portal (8171.bisp.gov.pk) or sending an SMS to 8171.',
          },
        },
      ],
    },
  ],
};

export default function BispSubProgramsExplainedPage() {
  const breadcrumbs = [
    { nameEn: 'Social Welfare & Relief', nameUr: 'سوشل ویلفیئر اور ریلیف' },
    { nameEn: 'BISP Sub-Programs Explained', nameUr: 'بینظیر کفالت، تعلیمی وظائف اور نشوونما پروگرام 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="BISP FLAGSHIP PROGRAMS" labelUr="بینظیر انکم سپورٹ پروگرام" variant="seal" />
            <VerifiedBadge textEn="BISP 8171 COMPLIANT" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            BISP Kafaalat vs. Nashonuma vs. Taleemi Wazaif: 2026 Differences &amp; 8171 Check
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              بینظیر کفالت، تعلیمی وظائف اور نشوونما: شرائط، 70 فیصد حاضری اور 8171 پورٹل رہنمائی
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Clear, authoritative guidance resolving widespread public confusion between BISP&apos;s distinct social protection initiatives.
            Understand how unconditional Kafaalat cash transfers differ from school-conditional Taleemi Wazaif and maternal Nashonuma
            nutrition centers, and how to verify your family&apos;s active status through the official 8171 portal.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is the Key Difference Between Kafaalat, Taleemi Wazaif, and Nashonuma?"
          topicTitleUr="کفالت، تعلیمی وظائف اور نشوونما میں کیا بنیادی فرق ہے؟"
          answerEn="These are three distinct programs under BISP. Benazir Kafaalat provides unconditional quarterly cash transfers to eligible women. Benazir Taleemi Wazaif provides conditional education stipends for school-going children (requiring 70% attendance). Benazir Nashonuma provides specialized maternal/infant nutrition support at DHQ/THQ hospitals. Check all three via 8171."
          answerUr="یہ بی آئی ایس پی کے 3 الگ پروگرام ہیں۔ کفالت خواتین کے لیے غیر مشروط سہ ماہی وظیفہ ہے۔ تعلیمی وظائف اسکول جانے والے بچوں کے لیے ہے جس میں 70 فیصد اسکول حاضری لازمی ہے۔ نشوونما حاملہ خواتین اور 2 سال سے کم عمر بچوں کی خوراک کے لیے ہسپتالوں میں قائم ہے۔ اسٹیٹس 8171 سے چیک کریں۔"
        />

        {/* Section 1: Side-by-Side Comparison Matrix */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Side-by-Side Comparison of BISP Sub-Programs
            </h2>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="w-full text-sm font-sans">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Program Name</th>
                  <th className="px-4 py-3 text-left">Target Beneficiary</th>
                  <th className="px-4 py-3 text-left">Core Conditionality</th>
                  <th className="px-4 py-3 text-left">Registration Venue</th>
                  <th className="px-4 py-3 text-left">Mandatory Document</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Benazir Kafaalat
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Ever-married women from households with PMT score ≤ 32
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    Unconditional (No school/work condition)
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    BISP Dynamic NSER Registration Centers
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    Mother&apos;s Valid NADRA CNIC
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Benazir Taleemi Wazaif
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Children aged 4–22 years enrolled in Primary to Higher Secondary
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                    Minimum 70% School Attendance per quarter
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    BISP Tehsil Offices
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    NADRA B-Form (CRC) + School Slip
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Benazir Nashonuma
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Pregnant women, lactating mothers &amp; infants under 2 years
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                    Mandatory Health Checkups &amp; Immunization
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Nashonuma Centers at DHQ/THQ Hospitals
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    Mother CNIC + Child B-Form + Health Card
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Taleemi Wazaif Attendance Condition in Detail */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              How the 70% Attendance Condition Works for Taleemi Wazaif
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">School Slip Enrollment</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Parents obtain an enrollment slip from the BISP Tehsil Office, get it stamped and signed by the child&apos;s school, and submit it back along with the child&apos;s NADRA B-Form.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Quarterly Attendance Check</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                BISP compliance monitors audit school attendance registers each quarter. The student must attend at least <strong>70% of total school days</strong> to qualify for payment.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Higher Stipend for Girls</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                To promote female literacy, the government provides higher quarterly stipend rates for female students across all class tiers, plus a one-time graduation bonus upon completing primary school.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Checking All Programs via 8171 */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              How to Check Status &amp; Stipend for All 3 Programs via 8171
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 font-sans text-xs">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              You do not need separate apps or websites for different sub-schemes. The central 8171 system reports your combined family status:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="font-bold text-doc-ink dark:text-white text-sm block">Method A: Official 8171 Web Portal</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Visit <code>8171.bisp.gov.pk</code>. Enter the mother&apos;s 13-digit CNIC and the 4-digit security captcha code on screen to see your active enrollment and available cash balance.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="font-bold text-doc-ink dark:text-white text-sm block">Method B: Official 8171 SMS Service</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Send the mother&apos;s 13-digit CNIC number via SMS to shortcode <strong>8171</strong> from your registered SIM card to receive an automated verification response.
                </p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs">
              <strong>Stipend Note:</strong> Current stipend amounts are announced periodically by the federal government and vary by class level (Primary, Secondary, Higher Secondary) and gender. Always check your individualized family amount directly on the 8171 portal.
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 4: Public Scam Warning */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Public Security Warning: Registration is 100% Free
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-2 font-sans text-xs">
            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm">
              <AlertTriangle className="w-5 h-5" />
              <span>Beware of Fake SMS Messages &amp; Fraudulent Agents</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Official BISP communications are sent <strong>ONLY from shortcode 8171</strong>. Any SMS received from standard 11-digit personal mobile numbers or WhatsApp claiming you have won a cash grant is a fraudulent scam. BISP never charges registration fees, and official biometric surveys occur only at designated government centers.
            </p>
          </div>
        </section>

        {/* Section 5: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Social Welfare &amp; Relief Tools on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/welfare/bisp-payment-check"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Payment Tool</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                BISP 8171 Payment Check Portal →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check live payment balance &amp; bank campsite schedule.</p>
            </Link>

            <Link
              href="/welfare/pmt-score-explained-bisp-eligibility-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Poverty Score</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                PMT Score Calculation Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">How your NSER survey determines cutoff eligibility.</p>
            </Link>

            <Link
              href="/welfare/sehat-card-eligibility-checker-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Healthcare Card</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Sehat Card Eligibility Checker →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Free hospital treatment eligibility by CNIC.</p>
            </Link>
          </div>
        </section>

        {/* Section 6: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (BISP Programs Explained)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Can a family receive Taleemi Wazaif or Nashonuma without being enrolled in Benazir Kafaalat?',
                a: 'No. Being an active, verified beneficiary of the base Benazir Kafaalat program (meeting the PMT poverty cutoff through the NSER survey) is the mandatory prerequisite for enrolling children in Taleemi Wazaif or registering pregnant/lactating mothers in Nashonuma.',
              },
              {
                q: 'Why did my child\'s Taleemi Wazaif quarterly stipend stop arriving?',
                a: 'The most common reason is that the child\'s quarterly school attendance fell below the mandatory 70% threshold verified by BISP compliance monitors. Once the student restores regular attendance and the school re-certifies the attendance slip, payments resume in the subsequent disbursement cycle.',
              },
              {
                q: 'What documents are required to register children for Benazir Taleemi Wazaif?',
                a: 'You must bring the mother\'s original CNIC, the child\'s computerized NADRA B-Form / Child Registration Certificate (CRC), and a school admission verification slip stamped and signed by the school headmaster or principal to your local BISP Tehsil Office.',
              },
              {
                q: 'Is there any fee or agent charge for registering in BISP programs?',
                a: 'No. Registration for BISP Kafaalat, Taleemi Wazaif, and Nashonuma is 100% free of cost at all official BISP Tehsil Offices and government hospital facilitation centers. Never pay any fee or give your biometric verification to unauthorized private agents.',
              },
              {
                q: 'How do I check the exact stipend amount available for my family?',
                a: 'Because quarterly stipends vary based on your family\'s registered children, their school grade levels, gender quotas, and periodic federal adjustments, you should check your exact personalized disbursement by entering the mother\'s 13-digit CNIC on the official 8171 web portal (8171.bisp.gov.pk) or sending an SMS to 8171.',
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
            { label: 'Benazir Income Support Programme (BISP) Official Portal', url: 'https://bisp.gov.pk/' },
            { label: 'BISP 8171 Official Web Eligibility Portal', url: 'https://8171.bisp.gov.pk/' },
            { label: 'Ministry of Poverty Alleviation & Social Safety', url: 'https://pass.gov.pk/' },
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
