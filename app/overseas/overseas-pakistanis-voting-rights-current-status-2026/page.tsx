import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { FAQAccordionVisual } from '@/components/visuals';
import {
  ShieldAlert,
  ShieldCheck,
  Scale,
  Globe,
  ExternalLink,
  HelpCircle,
  AlertTriangle,
  Clock,
  Vote,
  FileText,
  Building2,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Info,
  Calendar,
  Layers,
  History,
  AlertCircle,
  FileCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Overseas Pakistanis Voting Rights Current Status 2026: Online & Postal Vote Reality | Pakistan Info Hub',
  description:
    'Verified legal status of overseas voting for Pakistanis in 2026: Why internet voting (i-voting) is NOT operational, Elections Act Section 94 amendments, Supreme Court proceedings, and how expats can actually vote.',
  keywords: [
    'overseas pakistanis voting rights current status 2026',
    'can overseas pakistanis vote online',
    'i voting pakistan overseas status',
    'elections act section 94 overseas voting',
    'supreme court overseas voting case 2026',
    'overseasvoting gov pk defunct',
    'ecp overseas voting registration',
    'overseas pakistani postal ballot',
  ],
  openGraph: {
    title: 'Overseas Pakistanis Voting Rights Current Status 2026: The Honest Explainer',
    description:
      'Is there a live internet or postal voting portal for overseas Pakistanis in 2026? A rigorous legal status report on the 2018 pilot, 2022 amendments, and pending Supreme Court cases.',
    url: 'https://www.pakistaninfohub.com/overseas/overseas-pakistanis-voting-rights-current-status-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/overseas/overseas-pakistanis-voting-rights-current-status-2026',
  },
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
          name: 'Overseas Pakistanis Hub',
          item: 'https://www.pakistaninfohub.com/overseas',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Overseas Pakistanis Voting Rights Status 2026',
          item: 'https://www.pakistaninfohub.com/overseas/overseas-pakistanis-voting-rights-current-status-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Overseas Pakistanis Voting Rights Current Status 2026: Online & Postal Vote Legal Reality',
      description:
        'A comprehensive legal and factual status report detailing why remote internet and postal voting for overseas Pakistanis is currently non-operational, reviewing Section 94 of the Elections Act 2017, the 2018 pilot audit, and ongoing Supreme Court constitutional proceedings.',
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
      datePublished: '2026-08-28',
      dateModified: '2026-09-04',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/overseas/overseas-pakistanis-voting-rights-current-status-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can overseas Pakistanis vote online (i-voting) right now?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. There is currently NO operational internet voting system for overseas Pakistanis. The i-voting portal used during the 2018 by-elections was a temporary pilot project and was permanently decommissioned. Any website claiming you can register your NICOP and vote online today is outdated or fraudulent.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why was overseas internet voting stopped after the 2018 pilot?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An independent technical audit commissioned by the Election Commission of Pakistan (ECP) concluded that the 2018 i-voting system lacked adequate cybersecurity safeguards, could not guarantee the secrecy of the ballot (due to the risk of coercion in private homes), and was vulnerable to external interference and server manipulation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a postal ballot option for overseas Pakistanis?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not for general expatriate citizens. Under current ECP rules, postal balloting is restricted to specific categories such as armed forces personnel, government officers on duty, and Pakistani diplomatic mission staff posted abroad. General expatriate workers and residents in the Gulf, Europe, or North America cannot cast postal ballots remotely.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I register or verify my vote for when a mechanism becomes available?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Overseas Pakistanis who hold a valid NICOP or CNIC are registered in the electoral rolls according to either their permanent or present address in Pakistan. You can verify your registered constituency, block code, and serial number by sending your 13-digit CNIC/NICOP number to 8300 via SMS (using a Pakistani SIM or through relatives in Pakistan).',
          },
        },
        {
          '@type': 'Question',
          name: 'Is voter registration the same as having a NICOP or POC card?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Holding a NICOP (National Identity Card for Overseas Pakistanis) proves Pakistani citizenship and qualifies you to be on the voter list for your home constituency in Pakistan, but it does not create a special "overseas constituency." Pakistan Origin Card (POC) holders are foreign citizens of Pakistani heritage and are legally ineligible to register or vote under Pakistani law.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where can I check for official, verified updates on overseas voting rights?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Official announcements and gazette notifications are published directly on the Election Commission of Pakistan website at ecp.gov.pk and the Supreme Court of Pakistan registry. Avoid third-party immigration or political blogs that recycle old 2018 pilot instructions.',
          },
        },
      ],
    },
  ],
};

export default function OverseasVotingRightsPage() {
  const breadcrumbs = [
    { nameEn: 'Overseas Pakistanis Hub', nameUr: 'اوورسیز پاکستانیز ہب', href: '/overseas' },
    { nameEn: 'Overseas Voting Rights Current Status 2026', nameUr: 'بیرون ملک پاکستانیوں کے ووٹ کا حق' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans max-w-5xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="ELECTORAL STATUS REPORT" labelUr="انتخابی قانونی صورتحال" variant="seal" />
            <VerifiedBadge textEn="ELECTIONS ACT 2017 &amp; SUPREME COURT RECORDS" />
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white leading-tight">
            Overseas Pakistanis Voting Rights 2026: Current Legal Status &amp; Reality
            <span className="block text-doc-brass text-lg sm:text-2xl mt-1 font-bold">
              کیا بیرون ملک مقیم پاکستانی آن لائن یا پوسٹل بیلٹ سے ووٹ ڈال سکتے ہیں؟
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Few topics in Pakistani civic life generate as much confusion—and misleading online tutorials—as voting rights 
            for the approximately 9 million overseas Pakistanis. This authoritative status report separates political promises 
            and defunct pilot software from verified statutory law and current Supreme Court proceedings.
          </p>
        </header>

        {/* Direct Answer Box (40-60 words strictly) */}
        <DirectAnswerBox
          topicTitleEn="Can Overseas Pakistanis Currently Vote Online or by Mail from Abroad?"
          topicTitleUr="کیا تارکین وطن اس وقت بیرون ملک سے آن لائن یا ڈاک کے ذریعے ووٹ ڈال سکتے ہیں؟"
          answerEn="No. As of 2026, there is no operational online (i-voting) or general postal voting mechanism for overseas Pakistanis. The 2018 by-election pilot project was suspended following security audit concerns, and mandatory provisions were repealed by Parliament in 2022. Expatriates can only vote in person if physically present in Pakistan on election day."
          answerUr="نہیں، سال 2026 میں بیرون ملک مقیم عام پاکستانیوں کے لیے آن لائن (i-voting) یا ڈاک کے ذریعے ووٹ ڈالنے کی کوئی فعال سہولت موجود نہیں ہے۔ 2018 کے پائلٹ پروجیکٹ کے بعد سیکیورٹی خدشات پر یہ نظام معطل کر دیا گیا تھا۔ تارکین وطن صرف الیکشن کے دن پاکستان میں موجود ہو کر ذاتی طور پر ووٹ ڈال سکتے ہیں۔"
        />

        {/* Urgent Warning Box: Defunct 2018 Portal */}
        <div className="p-5 rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/60 space-y-3">
          <div className="flex items-center gap-2.5 text-doc-seal dark:text-red-400 font-serif font-bold text-base">
            <ShieldAlert className="w-5 h-5 flex-shrink-0" />
            <span>Warning: Beware of Fake &amp; Outdated &quot;How to Vote Online&quot; Tutorials</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-7">
            Numerous blogs and social media channels continue to republish outdated instructions telling expats to 
            <em> &quot;visit overseasvoting.gov.pk, enter your NICOP and Machine Readable Passport (MRP) number, and register via email verification.&quot;</em> 
            <strong>This system does not exist today.</strong> That portal was exclusively created for a limited 
            by-election pilot in October 2018 and has been completely decommissioned. Do NOT submit your passport scans, 
            NICOP numbers, or sensitive credentials to unverified third-party websites claiming to offer &quot;overseas voter portals.&quot;
          </p>
        </div>

        {/* Chronological Legal Timeline (2018 to 2026) */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <History className="w-6 h-6 text-doc-brass" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-doc-ink dark:text-white">
              The Legislative &amp; Judicial Journey: How We Got Here
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Understanding why overseas voting remains unresolved requires examining the back-and-forth between 
            Parliament, the Election Commission of Pakistan (ECP), and the Supreme Court over the past eight years:
          </p>

          <div className="relative border-l-2 border-doc-brass/30 pl-4 sm:pl-6 space-y-8 ml-2 sm:ml-4 text-xs sm:text-sm font-sans">
            {/* Event 1: 2017 - Elections Act Section 94 */}
            <div className="relative space-y-1.5">
              <div className="absolute -left-[23px] sm:-left-[31px] top-1 w-4 h-4 rounded-full bg-doc-ink border-2 border-doc-brass" />
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  October 2017
                </span>
                <span className="font-serif font-bold text-sm sm:text-base text-doc-ink dark:text-white">
                  Enactment of Elections Act 2017 (Section 94)
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Parliament incorporated Section 94 into the Elections Act 2017, empowering the ECP to conduct 
                <strong> pilot projects</strong> for overseas voting in by-elections to assess their technical efficacy, 
                ballot secrecy, and financial feasibility, requiring the ECP to report its findings back to Parliament.
              </p>
            </div>

            {/* Event 2: 2018 - The By-Election Pilot */}
            <div className="relative space-y-1.5">
              <div className="absolute -left-[23px] sm:-left-[31px] top-1 w-4 h-4 rounded-full bg-doc-brass border-2 border-doc-ink" />
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300">
                  October 2018
                </span>
                <span className="font-serif font-bold text-sm sm:text-base text-doc-ink dark:text-white">
                  The Supreme Court Pilot Experiment (37 Constituencies)
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Under directives from a Supreme Court bench headed by Chief Justice Saqib Nisar, ECP and NADRA built an 
                internet voting software (<code>overseasvoting.gov.pk</code>). Overseas Pakistanis holding a valid NICOP, 
                MRP passport, and email were registered. Out of an estimated hundreds of thousands of eligible voters, 
                only <strong>7,364 votes</strong> were cast across 37 national and provincial assembly constituencies.
              </p>
            </div>

            {/* Event 3: 2018-2019 - The Damning Audit */}
            <div className="relative space-y-1.5">
              <div className="absolute -left-[23px] sm:-left-[31px] top-1 w-4 h-4 rounded-full bg-doc-seal border-2 border-white" />
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-red-100 dark:bg-red-950/50 text-red-800 dark:text-red-300">
                  2018 – 2019
                </span>
                <span className="font-serif font-bold text-sm sm:text-base text-doc-ink dark:text-white">
                  Independent Third-Party Audit Discovers Critical Flaws
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The ECP commissioned a comprehensive post-pilot audit by independent cybersecurity experts. The audit 
                concluded that the system was <strong>&quot;neither secure nor capable of ensuring voter secrecy.&quot;</strong> 
                Key vulnerabilities included susceptibility to Distributed Denial of Service (DDoS) attacks, host machine malware, 
                and the impossibility of guaranteeing that a voter was not coerced by an employer, family head, or political operative 
                while voting from a private room.
              </p>
            </div>

            {/* Event 4: 2021-2022 - Legislative Reversal */}
            <div className="relative space-y-1.5">
              <div className="absolute -left-[23px] sm:-left-[31px] top-1 w-4 h-4 rounded-full bg-blue-600 border-2 border-white" />
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/50 text-blue-800 dark:text-blue-300">
                  May 2022
                </span>
                <span className="font-serif font-bold text-sm sm:text-base text-doc-ink dark:text-white">
                  Parliament Passes Elections (Amendment) Act 2022
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                While the previous PTI-led administration had enacted amendments in late 2021 mandating electronic voting machines (EVMs) 
                and i-voting for general elections, the incoming coalition government in May 2022 repealed those mandatory clauses. 
                Section 94 was restored to its original pilot-project framework, stating the ECP may conduct further trials but is not 
                mandated to roll out remote internet voting for general elections.
              </p>
            </div>

            {/* Event 5: 2024 - General Elections Exclusion */}
            <div className="relative space-y-1.5">
              <div className="absolute -left-[23px] sm:-left-[31px] top-1 w-4 h-4 rounded-full bg-slate-600 border-2 border-white" />
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  February 2024
                </span>
                <span className="font-serif font-bold text-sm sm:text-base text-doc-ink dark:text-white">
                  General Elections Held Without Remote Overseas Balloting
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Pakistan held its nationwide general elections on February 8, 2024. Despite intense public campaigning and online 
                activism, no remote overseas voting mechanism was deployed. Expatriates wishing to participate had to purchase 
                air tickets and cast their votes in person at their registered polling stations inside Pakistan.
              </p>
            </div>

            {/* Event 6: 2025-2026 - Supreme Court Constitutional Bench */}
            <div className="relative space-y-1.5">
              <div className="absolute -left-[23px] sm:-left-[31px] top-1 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white" />
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300">
                  2025 – 2026 (Present)
                </span>
                <span className="font-serif font-bold text-sm sm:text-base text-doc-ink dark:text-white">
                  Supreme Court Constitutional Bench Hearings &amp; ECP Stand
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                A 5-member Constitutional Bench of the Supreme Court (headed by Justice Aminuddin Khan) continues to hear constitutional 
                petitions challenging the 2022 amendments. The ECP has formally submitted to the Court that while it does not deny 
                the fundamental franchise of overseas citizens, it cannot implement an unqualified &quot;blanket right&quot; without 
                Parliament first legislating secure, testable, and legally sound modalities (such as dedicated expat parliamentary seats, 
                postal ballots, or embassy booths). The matter remains sub judice and legally pending.
              </p>
            </div>
          </div>
        </section>

        {/* What Overseas Pakistanis CAN Verifiably Do Right Now */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-doc-ink dark:text-white">
              What Overseas Pakistanis CAN Verifiably Do Right Now
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            While remote online voting is inactive, overseas Pakistanis are NOT erased from the electoral roll. 
            Here are the exact legal options currently available to you:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm font-sans">
            {/* Action 1: Verify Registration on 8300 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-xs">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">
                1
              </span>
              <h3 className="font-serif font-bold text-sm sm:text-base text-doc-ink dark:text-white">
                Verify Your Home Constituency
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                If you have a NICOP or CNIC, your vote is registered in Pakistan under either your <strong>permanent</strong> or 
                <strong> present</strong> address. Send your 13-digit identity number via SMS to <strong>8300</strong> to view 
                your National Assembly (NA) and Provincial Assembly (PP/PS/PK/PB) constituency, census block code, and serial number.
              </p>
            </div>

            {/* Action 2: Vote in Person */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-xs">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">
                2
              </span>
              <h3 className="font-serif font-bold text-sm sm:text-base text-doc-ink dark:text-white">
                Vote In Person on Polling Day
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Any overseas Pakistani who is physically present in Pakistan on election day can cast their vote at their assigned 
                polling station by presenting their original physical <strong>NICOP or CNIC</strong> to the Presiding Officer. 
                A foreign passport alone is not accepted at domestic polling booths.
              </p>
            </div>

            {/* Action 3: Diplomatic Mission Postal Ballot */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-xs">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs">
                3
              </span>
              <h3 className="font-serif font-bold text-sm sm:text-base text-doc-ink dark:text-white">
                Diplomatic Staff Postal Ballots
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Pakistani Foreign Service officers, military attachés, and government personnel stationed in Pakistani embassies 
                and consulates abroad can apply for postal ballots via Form 26 under strict ECP statutory timelines. This does 
                not apply to private expatriate workers or dual nationals.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison: Why Proposed Solutions Face Friction */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-doc-brass" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-doc-ink dark:text-white">
              The 3 Proposed Voting Mechanisms: Pros, Cons &amp; Bottlenecks
            </h2>
          </div>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-xs sm:text-sm font-sans min-w-[620px]">
                <thead className="bg-doc-ink text-white text-[11px] font-mono uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 text-left">Proposed Method</th>
                    <th className="px-4 py-3 text-left">How It Would Work</th>
                    <th className="px-4 py-3 text-left">Major Advantages</th>
                    <th className="px-4 py-3 text-left">Unresolved Technical / Legal Objections</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                  <tr>
                    <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">
                      1. Internet Voting (i-Voting)
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                      Voters log into an ECP/NADRA cloud portal using biometrics or OTP to cast an electronic ballot.
                    </td>
                    <td className="px-4 py-3 text-emerald-600 font-bold">
                      Maximum accessibility for expats in 100+ countries without traveling.
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                      Severe cybersecurity risks; vulnerable to hacking; impossible to verify if the voter was coerced at home (violates secret ballot).
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">
                      2. Postal Balloting
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                      ECP mails physical ballot papers to verified overseas addresses; voters mail them back before polling close.
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                      Familiar paper audit trail; does not require high-tech infrastructure.
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                      Extreme postal transit delays (especially in the Gulf region with P.O. Box systems); high risk of vote buying and tampering in transit.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">
                      3. Embassies &amp; Consulates Polling
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                      Setting up in-person polling stations inside Pakistani embassies, high commissions, and consulates worldwide.
                    </td>
                    <td className="px-4 py-3 text-emerald-600 font-bold">
                      Highest ballot security; biometric NADRA verification in person; traditional secret booth.
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                      Immense logistical burden: Pakistan has only ~120 foreign missions for 9 million expats. Expats hundreds of miles away cannot easily reach an embassy.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Identity Documents Distinction: NICOP vs POC */}
        <section className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs">
          <h3 className="font-serif font-bold text-base sm:text-lg text-doc-ink dark:text-white flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-doc-brass" />
            <span>Crucial Legal Distinction: NICOP vs POC in Pakistani Electoral Law</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Not all documents issued by NADRA to overseas residents carry the same electoral status. 
            Under Article 51 of the Constitution of Pakistan and the Elections Act 2017:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-emerald-700 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>NICOP (National Identity Card for Overseas Pakistanis)</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Cardholders are <strong>bona fide citizens of Pakistan</strong> (including dual nationals of countries that permit dual nationality). 
                They retain the constitutional right to vote and are automatically registered on the voter roll of their Pakistani ancestral address.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-red-700 dark:text-red-400">
                <XCircle className="w-4 h-4" />
                <span>POC (Pakistan Origin Card)</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Cardholders are <strong>foreign nationals</strong> of Pakistani origin who have surrendered their Pakistani citizenship 
                (e.g., in Germany, Spain, or India). Under Pakistani law, POC holders have <strong>zero voting rights</strong> and cannot register as voters.
              </p>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Related Overseas Guides & Resources */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-doc-brass" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Related Overseas Identity &amp; Verification Resources
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/nadra/voter-registration-check-cnic-ecp-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">ECP 8300 Verification</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1 flex items-center justify-between">
                ECP Voter Registration Check 2026
                <ArrowRight className="w-4 h-4 text-doc-brass group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Learn how to check your home constituency, census block code, and voter serial number by CNIC.
              </p>
            </Link>

            <Link
              href="/overseas/nicop-mandatory-entry-rules-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-seal font-bold uppercase block">Border Travel Rules</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1 flex items-center justify-between">
                NICOP Mandatory Entry Rules 2026
                <ArrowRight className="w-4 h-4 text-doc-brass group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Verify FIA boarding directives for dual nationals traveling on foreign passports to Pakistan.
              </p>
            </Link>

            <Link
              href="/overseas/poc-card-pakistan-apply-online"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-emerald-600 font-bold uppercase block">Foreign Nationals</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1 flex items-center justify-between">
                POC Card Application Guide
                <ArrowRight className="w-4 h-4 text-doc-brass group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Eligibility, rights, and application steps for foreign spouses and former Pakistani citizens.
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ Accordion Visual */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Overseas Voting Rights)"
          titleUr="عام طور پر پوچھے جانے والے ضروری سوالات اور حقائق"
          subtitleEn="Clear, candid answers regarding remote voting, legal changes, and your democratic rights"
          subtitleUr="بیرون ملک ووٹنگ کی موجودہ صورتحال، قانونی ترمیم اور نادرا کارڈز سے متعلق مستند جوابات"
          items={[
            {
              questionEn: 'Can overseas Pakistanis vote online (i-voting) right now?',
              questionUr: 'کیا بیرون ملک مقیم پاکستانی اس وقت آن لائن ووٹ ڈال سکتے ہیں؟',
              answerEn: 'No. There is currently NO operational internet voting system for overseas Pakistanis. The i-voting portal used during the 2018 by-elections was a temporary pilot project and was permanently decommissioned. Any website claiming you can register your NICOP and vote online today is outdated or fraudulent.',
              answerUr: 'نہیں، اس وقت بیرون ملک مقیم پاکستانیوں کے لیے آن لائن ووٹ ڈالنے کا کوئی فعال سسٹم موجود نہیں ہے۔ 2018 کا پائلٹ سسٹم بند ہو چکا ہے اور موجودہ قانون کے تحت آن لائن ووٹنگ فعال نہیں ہے۔',
            },
            {
              questionEn: 'Why was overseas internet voting stopped after the 2018 pilot?',
              questionUr: '2018 کے تجربے کے بعد انٹرنیٹ ووٹنگ کیوں معطل کی گئی؟',
              answerEn: 'An independent technical audit commissioned by the Election Commission of Pakistan (ECP) concluded that the 2018 i-voting system lacked adequate cybersecurity safeguards, could not guarantee the secrecy of the ballot (due to the risk of coercion in private homes), and was vulnerable to external interference and server manipulation.',
              answerUr: 'الیکشن کمیشن کے آزادانہ تکنیکی آڈٹ میں یہ بات سامنے آئی تھی کہ سسٹم سائبر حملوں سے محفوظ نہیں تھا، اور گھر بیٹھے ووٹ ڈالنے کی صورت میں ووٹ کے خفیہ رہنے اور دباؤ سے پاک ہونے کی ضمانت نہیں دی جا سکتی تھی۔',
            },
            {
              questionEn: 'Is there a postal ballot option for overseas Pakistanis?',
              questionUr: 'کیا تارکین وطن کے لیے ڈاک کے ذریعے (پوسٹل بیلٹ) ووٹ ڈالنے کی سہولت ہے؟',
              answerEn: 'Not for general expatriate citizens. Under current ECP rules, postal balloting is restricted to specific categories such as armed forces personnel, government officers on duty, and Pakistani diplomatic mission staff posted abroad. General expatriate workers and residents in the Gulf, Europe, or North America cannot cast postal ballots remotely.',
              answerUr: 'عام تارکین وطن کے لیے نہیں ہے۔ موجودہ قواعد کے تحت صرف سفارت خانوں کا سرکاری عملہ، مسلح افواج اور ڈیوٹی پر مامور سرکاری ملازمین ہی مخصوص حالات میں پوسٹل بیلٹ استعمال کر سکتے ہیں۔',
            },
            {
              questionEn: 'How do I register or verify my vote for when a mechanism becomes available?',
              questionUr: 'جب ووٹنگ کا نظام آئے گا، تو میں کیسے اپنا ووٹ چیک یا رجسٹر کرواؤں؟',
              answerEn: 'Overseas Pakistanis who hold a valid NICOP or CNIC are registered in the electoral rolls according to either their permanent or present address in Pakistan. You can verify your registered constituency, block code, and serial number by sending your 13-digit CNIC/NICOP number to 8300 via SMS (using a Pakistani SIM or through relatives in Pakistan).',
              answerUr: 'آپ کا ووٹ آپ کے شناختی کارڈ یا نائیکوپ پر درج پاکستان کے مستقل یا موجودہ پتے پر پہلے سے درج ہوتا ہے۔ آپ 8300 پر شناختی کارڈ نمبر ایس ایم ایس کر کے اپنا انتخابی حلقہ اور بلاک کوڈ معلوم کر سکتے ہیں۔',
            },
            {
              questionEn: 'Is voter registration the same as having a NICOP or POC card?',
              questionUr: 'کیا نائیکوپ یا پی او سی کارڈ کا ہونا ووٹ کے اندراج کے برابر ہے؟',
              answerEn: 'No. Holding a NICOP (National Identity Card for Overseas Pakistanis) proves Pakistani citizenship and qualifies you to be on the voter list for your home constituency in Pakistan, but it does not create a special "overseas constituency." Pakistan Origin Card (POC) holders are foreign citizens of Pakistani heritage and are legally ineligible to register or vote under Pakistani law.',
              answerUr: 'نائیکوپ پاکستانی شہریت کا ثبوت ہے جس پر پاکستان میں ووٹ کا حق ملتا ہے۔ لیکن پی او سی (POC) غیر ملکی شہریوں کو ملتا ہے جنہیں پاکستانی قانون کے تحت ووٹ ڈالنے کا کوئی حق حاصل نہیں ہے۔',
            },
            {
              questionEn: 'Where can I check for official updates on overseas voting rights?',
              questionUr: 'بیرون ملک ووٹ کے حق کے بارے میں سرکاری معلومات کہاں سے ملیں گی؟',
              answerEn: 'Official announcements and gazette notifications are published directly on the Election Commission of Pakistan website at ecp.gov.pk and the Supreme Court of Pakistan registry. Avoid third-party immigration or political blogs that recycle old 2018 pilot instructions.',
              answerUr: 'الیکشن کمیشن آف پاکستان کی سرکاری ویب سائٹ (ecp.gov.pk) اور سپریم کورٹ کے احکامات سے ہی اصل صورتحال معلوم کی جا سکتی ہے۔ سوشل میڈیا کی پرانی ویڈیوز یا بلاگز پر بھروسہ نہ کریں۔',
            },
          ]}
        />

        {/* Official Statutory Authorities Cited */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1.5 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Statutory Authorities &amp; Records Cited:</p>
          {[
            { label: 'Election Commission of Pakistan (ECP Official Portal)', url: 'https://www.ecp.gov.pk/' },
            { label: 'Elections Act 2017 &amp; Section 94 Amendments (Pakistan Code)', url: 'https://pakistancode.gov.pk/' },
            { label: 'Supreme Court of Pakistan (Constitutional Bench Proceedings)', url: 'https://www.supremecourt.gov.pk/' },
            { label: 'Ministry of Overseas Pakistanis and Human Resource Development', url: 'https://ophrd.gov.pk/' },
          ].map((src) => (
            <a
              key={src.url}
              href={src.url.replace(/&amp;/g, '&')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-doc-seal transition-colors"
            >
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: src.label }} />: <span className="font-mono">{src.url}</span>
            </a>
          ))}
        </section>
      </div>
    </>
  );
}
