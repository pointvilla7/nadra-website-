import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  HelpCircle,
  ExternalLink,
  Compass,
  CheckCircle2,
  FileText,
  DollarSign,
  HeartHandshake,
  ShieldCheck,
  Calendar,
  AlertTriangle,
  Building2,
  Users
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hajj Policy 2026 Eligibility & Cost Checker Pakistan – Govt, Sponsorship & Private | Pakistan Info Hub',
  description:
    'Calculate your Pakistan Hajj 2026 application eligibility, estimated package costs (PKR 1.15M – 1.25M), Government balloting rules, Sponsorship Scheme quota, and required MORA document checklist.',
  keywords: [
    'Hajj policy 2026 eligibility Pakistan',
    'Pakistan Hajj package cost 2026',
    'MORA hajj application online',
    'Government hajj scheme balloting result',
    'Hajj sponsorship scheme dollar quota',
    'hajj documents checklist Pakistan',
    'hajj mora gov pk application',
  ],
  openGraph: {
    title: 'Hajj Policy 2026 Eligibility & Cost Checker Pakistan',
    description:
      'Interactive eligibility calculator and cost estimator for Government Regular, Sponsorship, and Private Hajj schemes under Ministry of Religious Affairs (MORA) guidelines.',
    url: 'https://www.pakistaninfohub.com/hajj-umrah/hajj-application-eligibility-checker-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/hajj-umrah/hajj-application-eligibility-checker-2026' },
};

const HajjApplicationEligibilityChecker = dynamic(
  () =>
    import('@/components/HajjApplicationEligibilityChecker').then((m) => ({
      default: m.HajjApplicationEligibilityChecker,
    })),
  {
    ssr: false,
    loading: () => <div className="h-[480px] rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" />,
  }
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Hajj & Umrah Services', item: 'https://www.pakistaninfohub.com/hajj-umrah' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Hajj Application Eligibility Checker 2026',
          item: 'https://www.pakistaninfohub.com/hajj-umrah/hajj-application-eligibility-checker-2026',
        },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Pakistan Hajj Application Eligibility & Cost Estimator 2026',
      description:
        'An interactive civic calculator to assess applicant eligibility, estimate official package costs, review document requirements, and navigate official MORA Hajj portal services.',
      url: 'https://www.pakistaninfohub.com/hajj-umrah/hajj-application-eligibility-checker-2026',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
    },
    {
      '@type': 'HowTo',
      name: 'How to Apply and Verify Eligibility for Pakistan Hajj Scheme (2026)',
      description:
        'Step-by-step procedure to check eligibility, calculate dues, prepare required documents, and submit your application on the official Ministry of Religious Affairs (MORA) portal.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Check Scheme Eligibility',
          text: 'Select your scheme (Government Regular, Sponsorship in USD, or Private HGO) and verify age and medical fitness requirements.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Calculate Estimated Package Cost',
          text: 'Estimate your package expenses based on departure station (North vs South region) and duration (Long 38–42 days vs Short 20–25 days).',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Prepare Mandatory Documents',
          text: 'Ensure your MRP passport is valid through December of the Hajj year, obtain a medical fitness certificate from an authorized hospital, and arrange proof of vaccination.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Submit Application via Bank or Official Portal',
          text: 'Apply through designated commercial bank branches across Pakistan or online at hajj.mora.gov.pk, depositing the first installment fee.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does the Government Hajj balloting (Qurandazi) process work in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When total applications exceed the allocated Government Regular quota, the Ministry of Religious Affairs conducts a computerized computerized draw (Qurandazi). First-time applicants receive highest priority. Successful applicants receive an official SMS notification and tracking confirmation on the MORA portal, after which the second installment of dues is payable.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do refunds work if an applicant is not selected in the balloting?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If your application is unsuccessful in the computerized balloting, your deposited first installment is automatically refunded to your designated bank account (IBAN) without deductions within 7 to 10 working days, or you can opt to remain on the waiting list.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the Government Sponsorship Hajj Scheme and who is eligible?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Sponsorship Scheme is reserved for overseas Pakistanis or local citizens whose Hajj dues are remitted in foreign exchange (USD) directly from abroad through banking channels. Applicants under this scheme are 100% exempt from the computerized balloting draw and guaranteed quota allocation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can women perform Hajj without a male Mahram under current policy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Under the Ministry of Religious Affairs guidelines aligned with Saudi regulations, women are permitted to perform Hajj without a male Mahram provided they travel in an authorized group of trustworthy female pilgrims and submit a notarized family consent affidavit.',
          },
        },
        {
          '@type': 'Question',
          name: 'When do Hajj applications typically open each year in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hajj applications usually open 5 to 6 months prior to the pilgrimage season (typically between October and December). Exact dates and submission windows are officially announced by the Federal Cabinet and published on mora.gov.pk.',
          },
        },
      ],
    },
  ],
};

export default function HajjApplicationEligibilityCheckerPage() {
  const breadcrumbs = [
    { nameEn: 'Hajj & Umrah Services', nameUr: 'حج و عمرہ رہنمائی ڈیسک' },
    { nameEn: 'Hajj Eligibility & Cost 2026', nameUr: 'حج اہلیت و اخراجات 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="HAJJ NAVIGATOR" labelUr="حج رہنمائی" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Pakistan Hajj Application Eligibility &amp; Cost Estimator 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              سرکاری و پرائیویٹ حج اہلیت، اخراجات تخمینہ اور رجسٹریشن گائیڈ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Evaluate your eligibility for the Government Regular, Sponsorship (USD), and Private Hajj schemes. Calculate
            estimated package dues, review mandatory health &amp; document criteria, and access the official Ministry of
            Religious Affairs (MORA) portal with zero data collection.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Check Pakistan Hajj 2026 Eligibility & Costs"
          topicTitleUr="پاکستان میں حج 2026 کی اہلیت اور اخراجات جاننے کا طریقہ"
          answerEn="To check Hajj eligibility: (1) Applicants must be at least 12 years old and medically fit, (2) Government package dues range between PKR 1,150,000 and PKR 1,250,000 (~$4,050–$4,325 for Sponsorship), (3) First-time applicants receive highest balloting priority, and (4) Applications are submitted online via hajj.mora.gov.pk or designated banks."
          answerUr="حج اہلیت جاننے کے لیے: (1) امیدوار کی عمر کم از کم 12 سال اور طبی طور پر فٹ ہونا لازمی ہے، (2) سرکاری پیکیج کا تخمینہ 11 لاکھ 50 ہزار سے 12 لاکھ 50 ہزار روپے (سپانسرشپ 4,050 تا 4,325 ڈالر) ہے، (3) پہلی بار درخواست دینے والوں کو قرعہ اندازی میں ترجیح حاصل ہے، اور (4) آن لائن درخواست hajj.mora.gov.pk پر جمع ہوتی ہے۔"
        />

        {/* Interactive Calculator Component */}
        <section aria-label="Hajj Application Eligibility Checker Tool">
          <HajjApplicationEligibilityChecker />
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 1: Detailed Breakdown of Schemes */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white flex items-center gap-2">
            <Compass className="w-6 h-6 text-doc-brass" />
            Comparison of Pakistan Hajj Schemes (2026 Framework)
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base space-y-4">
            <p>
              Pakistan&apos;s annual Hajj quota is distributed equally (50:50) between the <strong>Government Hajj Scheme</strong>
              and <strong>Private Hajj Group Organizers (HGOs)</strong> under the oversight of the Ministry of Religious
              Affairs &amp; Interfaith Harmony (MoRA). Understanding the distinction between these streams helps pilgrims
              choose the most suitable option for their budget and schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 text-doc-seal dark:text-red-400 font-mono text-xs font-bold uppercase">
                <Building2 className="w-4 h-4" />
                <span>1. Government Regular Scheme</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Subsidized Public Quota
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Managed directly by the state with standardized Maktab arrangements in Mina and centralized accommodation
                in Makkah and Madinah. Dues are collected in Pakistani Rupees (PKR) in installments, and selection is made
                via a transparent computerized balloting draw.
              </p>
            </div>

            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold uppercase">
                <DollarSign className="w-4 h-4" />
                <span>2. Sponsorship Scheme (USD)</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                100% Balloting-Free Quota
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Created to assist Overseas Pakistanis and boost foreign exchange reserves. Applicants whose total package
                dues are remitted in US Dollars via official banking wire channels receive guaranteed quota allocation
                without participating in the computerized balloting draw.
              </p>
            </div>

            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold uppercase">
                <Users className="w-4 h-4" />
                <span>3. Private Tour Operators (HGOs)</span>
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Tailored &amp; VIP Packages
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Organized by licensed private Hajj companies offering customized itineraries (e.g. 14–20 days short tours),
                5-star clock tower hotels adjacent to the Haram, VIP category A/B Maktab services, and dedicated private transport.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Comparative Overview Table */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white">
            Feature &amp; Cost Comparison by Scheme
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Key operational parameters across Pakistan’s pilgrimage frameworks:
          </p>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Feature</th>
                  <th className="px-4 py-3 text-left text-emerald-300">Govt Regular Scheme</th>
                  <th className="px-4 py-3 text-left text-amber-300">Govt Sponsorship Scheme</th>
                  <th className="px-4 py-3 text-left">Private HGO Scheme</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  {
                    feature: 'Selection Method',
                    regular: 'Computerized Balloting (Qurandazi)',
                    sponsorship: '100% Balloting-Free (Direct Quota)',
                    private: 'Direct Booking with Licensed HGO',
                  },
                  {
                    feature: 'Payment Currency',
                    regular: 'Pakistani Rupees (PKR)',
                    sponsorship: 'US Dollars (USD) via Foreign Wire',
                    private: 'PKR / Foreign Currency',
                  },
                  {
                    feature: 'Estimated Cost (2026)',
                    regular: 'PKR 1.15M – 1.25M',
                    sponsorship: '~$4,050 – $4,325 USD',
                    private: 'PKR 1.8M – 3.8M+ (Tiered)',
                  },
                  {
                    feature: 'Duration Options',
                    regular: 'Long (38-42 Days) / Short (20-25 Days)',
                    sponsorship: 'Long (38-42 Days) / Short (20-25 Days)',
                    private: 'Flexible (14 to 30 Days)',
                  },
                  {
                    feature: 'Repeat Pilgrim Rule',
                    regular: 'Restricted if performed in last 5 years',
                    sponsorship: 'Allowed under sponsorship rules',
                    private: 'Allowed as per HGO policy',
                  },
                  {
                    feature: 'Accommodation Distance',
                    regular: 'Standard Building with Shuttle Bus',
                    sponsorship: 'Standard Building with Shuttle Bus',
                    private: 'Walking Distance / Luxury 5-Star',
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition"
                  >
                    <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">{row.feature}</td>
                    <td className="px-4 py-3 font-mono text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                      {row.regular}
                    </td>
                    <td className="px-4 py-3 font-mono text-amber-600 dark:text-amber-300 text-xs font-semibold">
                      {row.sponsorship}
                    </td>
                    <td className="px-4 py-3 font-mono text-slate-600 dark:text-slate-300 text-xs">{row.private}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </section>

        {/* Section 3: Essential Medical & Health Fitness Criteria */}
        <section className="doc-card p-6 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-slate-900/60 space-y-4">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-doc-brass" />
            Mandatory Medical &amp; Health Fitness Requirements
          </h2>
          <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
            <p>
              Due to extreme physical exertion in high temperatures during the Days of Tashreeq (Mina, Arafat, Muzdalifah),
              the Ministry of Religious Affairs enforces strict physical fitness checks in coordination with Saudi health
              authorities:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">Eligible Medical Categories</span>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                  Individuals capable of independent walking, controlled diabetes, stabilized hypertension, and good mental
                  orientation.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-red-600 dark:text-red-400 text-xs block">Restricted Medical Conditions</span>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                  Patients on renal dialysis, advanced heart failure, active tuberculosis, severe neurological disorders,
                  and advanced-stage terminal cancers are medically ineligible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Related Hajj & Travel Guides */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Hajj &amp; Umrah Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/hajj-umrah/hajj-balloting-result-check-online"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Verification</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Hajj Balloting Result by CNIC →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check official MORA computerized draw results and group status.</p>
            </Link>

            <Link
              href="/hajj-umrah/umrah-visa-apply-from-pakistan-steps"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Umrah Portal</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Nusuk Umrah Visa Application Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Complete online tutorial for tourist and e-Visa issuance from Pakistan.</p>
            </Link>

            <Link
              href="/passport/fee-calculator"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Passport</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                e-Passport &amp; Renewal Fee Calculator →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check 36/72/100-page passport renewal fees before applying for Hajj.</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            Frequently Asked Questions (Hajj Policy &amp; Registration)
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'How does the Government Hajj balloting (Qurandazi) process work in Pakistan?',
                a: 'When total applications exceed the allocated Government Regular quota, the Ministry of Religious Affairs conducts a computerized draw (Qurandazi). First-time applicants receive highest priority. Successful applicants receive an official SMS notification and tracking confirmation on the MORA portal, after which the second installment of dues is payable.',
              },
              {
                q: 'How do refunds work if an applicant is not selected in the balloting?',
                a: 'If your application is unsuccessful in the computerized balloting, your deposited first installment is automatically refunded to your designated bank account (IBAN) without deductions within 7 to 10 working days, or you can opt to remain on the waiting list.',
              },
              {
                q: 'What is the Government Sponsorship Hajj Scheme and who is eligible?',
                a: 'The Sponsorship Scheme is reserved for overseas Pakistanis or local citizens whose Hajj dues are remitted in foreign exchange (USD) directly from abroad through banking channels. Applicants under this scheme are 100% exempt from the computerized balloting draw and guaranteed quota allocation.',
              },
              {
                q: 'Can women perform Hajj without a male Mahram under current policy?',
                a: 'Yes. Under the Ministry of Religious Affairs guidelines aligned with Saudi regulations, women are permitted to perform Hajj without a male Mahram provided they travel in an authorized group of trustworthy female pilgrims and submit a notarized family consent affidavit.',
              },
              {
                q: 'When do Hajj applications typically open each year in Pakistan?',
                a: 'Hajj applications usually open 5 to 6 months prior to the pilgrimage season (typically between October and December). Exact dates and submission windows are officially announced by the Federal Cabinet and published on mora.gov.pk.',
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
            { label: 'Ministry of Religious Affairs and Interfaith Harmony (MoRA)', url: 'https://mora.gov.pk/' },
            { label: 'Official Pakistan Hajj Management Portal', url: 'https://hajj.mora.gov.pk/' },
            { label: 'Saudi Ministry of Hajj and Umrah (Nusuk Platform)', url: 'https://www.haj.gov.sa/' },
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
