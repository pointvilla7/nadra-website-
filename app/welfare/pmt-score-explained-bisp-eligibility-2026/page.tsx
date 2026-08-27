import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, FAQAccordionVisual } from '@/components/visuals';
import {
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  Calculator,
  Home,
  Users,
  Search,
  RefreshCw,
  FileText,
  BadgeCheck,
  Building
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BISP PMT Score Explained 2026 – How Proxy Means Test is Calculated | Pakistan Info Hub',
  description:
    'Complete guide to BISP PMT (Proxy Means Test) score: What it measures, 43 NSER socio-economic indicators, the PMT 32 eligibility cutoff, reasons for rejection, and how to request a dynamic re-survey at Tehsil offices.',
  keywords: [
    'BISP PMT score explained',
    'how PMT score is calculated BISP',
    'NSER dynamic registry PMT 32 cutoff',
    'BISP eligibility criteria 2026',
    'PMT score re-survey Tehsil office',
    'why BISP application rejected vehicle property',
    '8171 check PMT score online Pakistan',
  ],
  openGraph: {
    title: 'BISP PMT Score Explained 2026 – How Proxy Means Test is Calculated',
    description:
      'Understand how the National Socio-Economic Registry calculates your PMT score, what the 32 threshold means, and how to update your household survey.',
    url: 'https://www.pakistaninfohub.com/welfare/pmt-score-explained-bisp-eligibility-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/welfare/pmt-score-explained-bisp-eligibility-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Govt Welfare & BISP', item: 'https://www.pakistaninfohub.com/welfare' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'PMT Score Explained',
          item: 'https://www.pakistaninfohub.com/welfare/pmt-score-explained-bisp-eligibility-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'BISP PMT Score Explained 2026: Proxy Means Test Formula, 32 Cutoff & NSER Re-Survey Guide',
      description:
        'A comprehensive public explanation of how the Benazir Income Support Programme computes the Proxy Means Test (PMT) score, poverty ranking indicators, and dynamic registry re-survey procedures.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-20',
      dateModified: '2026-08-21',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/welfare/pmt-score-explained-bisp-eligibility-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does a PMT score actually measure in BISP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Proxy Means Test (PMT) score is a statistical number between 0 and 100 that estimates a household’s socio-economic status. Rather than relying on self-reported monthly income (which is difficult to verify in informal economies), it uses approximately 43 visible proxies such as household assets, construction quality, family size, utility usage, and education levels.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the PMT score cutoff for Benazir Kafaalat eligibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For the general Benazir Kafaalat quarterly stipend, a household’s PMT score must be 32 or below. For special categories, such as certified Persons with Disabilities (PWDs) or transgender citizens, the eligibility threshold is relaxed up to a PMT score of 37.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why was my BISP application rejected even though our income is very low?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'BISP cross-matches applicant CNICs with automated government databases. Common automated disqualification triggers include: a registered motor vehicle (car/commercial vehicle) in the applicant’s name, international travel records (passports with foreign visas), a family member in regular government service, or high-tier residential electricity meter connections.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I apply for an NSER survey online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. There is NO online application or survey form for NSER. Applicants must physically visit their nearest BISP Tehsil Registration Office with their original CNIC and children’s B-Forms to complete the biometric survey. The registration process at the official center is 100% free of cost.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I request a re-survey if my financial situation has worsened?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under the NSER Dynamic Registry framework, any family whose economic situation has changed (e.g. loss of breadwinner, medical hardship, or outdated census records) can visit the local BISP Tehsil Office to request a re-survey after the standard moratorium period (typically 2 years from their last survey date).',
          },
        },
      ],
    },
  ],
};

export default function PmtScoreExplainedPage() {
  const breadcrumbs = [
    { nameEn: 'Govt Welfare & BISP', nameUr: 'بے نظیر کفالت و امدادی سکیمیں' },
    { nameEn: 'PMT Score Explained', nameUr: 'پی ایم ٹی سکور کیا ہے؟ تفصیلی گائیڈ' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="WELFARE ELIGIBILITY EXPLAINER" labelUr="امدادی اہلیت رہنمائی" variant="seal" />
            <VerifiedBadge textEn="BISP NSER OFFICIAL CRITERIA" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            BISP PMT Score Explained: How It&apos;s Calculated &amp; What 32 Cutoff Means
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              نادرا و بے نظیر پی ایم ٹی سکور کیا ہے؟ اہلیت کا فارمولا اور دوبارہ سروے
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Most applicants are told their &quot;PMT score is too high&quot; without understanding what PMT actually measures.
            Learn how the National Socio-Economic Registry (NSER) calculates poverty scores from household indicators,
            why genuine applicants get disqualified, and how to request a dynamic re-survey.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is a BISP PMT Score and Why Does it Matter?"
          topicTitleUr="پی ایم ٹی سکور کیا ہوتا ہے اور اس کی کیا اہمیت ہے؟"
          answerEn="The Proxy Means Test (PMT) score (0–100) is a statistical assessment of your household’s living standard calculated from 43 NSER survey indicators (housing quality, assets, dependents, electricity use). To qualify for Benazir Kafaalat, your PMT score must be 32 or below (37 for disabled individuals)."
          answerUr="پی ایم ٹی سکور (0 تا 100) غربت کا ایک شماریاتی تخمینہ ہے جو این ایس ای آر سروے کے 43 اشاریوں (مکان کی نوعیت، اثاثے، بجلی کا بل، اہل خانہ کی تعداد) سے نکالا جاتا ہے۔ بے نظیر کفالت میں شامل ہونے کے لیے پی ایم ٹی سکور 32 یا اس سے کم (معذور افراد کے لیے 37) ہونا لازمی ہے۔"
        />

        {/* Section 1: The 43 NSER Proxy Indicators Breakdown */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              How NSER Calculates Your PMT Score: 4 Core Factor Groups
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 font-sans">
            Because unverified salary receipts can easily be falsified, the government uses tangible &quot;proxies&quot; to estimate
            consumption. Here is what the survey actually evaluates:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-doc-seal font-bold text-sm">
                <Home className="w-5 h-5" />
                <span>1. Housing &amp; Living Conditions</span>
              </div>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                <li><strong>Construction Material:</strong> Pacca (concrete/brick) vs Katcha (mud/thatch) walls and roofing.</li>
                <li><strong>Sanitation &amp; Water:</strong> Flush toilet vs shared latrine; piped tap water vs outside well.</li>
                <li><strong>Rooms &amp; Occupancy:</strong> Total number of rooms compared to total family members.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                <Coins className="w-5 h-5" />
                <span>2. Productive Assets &amp; Durables</span>
              </div>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                <li><strong>Vehicles:</strong> Ownership of motorcycle, rickshaw, tractor, or passenger car.</li>
                <li><strong>Appliances:</strong> Presence of refrigerator, air conditioner, washing machine, or solar system.</li>
                <li><strong>Land &amp; Livestock:</strong> Cultivated agricultural acreage, cattle, or commercial property.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm">
                <Users className="w-5 h-5" />
                <span>3. Household Demographics &amp; Education</span>
              </div>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                <li><strong>Dependency Ratio:</strong> Ratio of non-working infants, elderly, and sick persons to earning adults.</li>
                <li><strong>Literacy Level:</strong> Highest educational attainment of the head of household and spouse.</li>
                <li><strong>Employment Type:</strong> Daily wage laborer vs permanent salaried employee.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm">
                <Building className="w-5 h-5" />
                <span>4. Automated Database Cross-Checks</span>
              </div>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                <li><strong>Excise Verification:</strong> Any motor vehicle registered in the applicant&apos;s or spouse&apos;s CNIC.</li>
                <li><strong>Immigration / Passport:</strong> International travel history or overseas employment records.</li>
                <li><strong>FBR Tax Records:</strong> Active taxpayer registration or commercial business NTN linkage.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Why Deserving Families Get Disqualified */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Why Does My PMT Score Show High Despite Being Poor? (Top 4 Traps)
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/60 space-y-3 font-sans text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-amber-200 dark:border-amber-800 space-y-1">
                <span className="font-bold text-amber-800 dark:text-amber-300 block">1. Old Vehicle Sold on &quot;Open Letter&quot;</span>
                <p className="text-slate-600 dark:text-slate-300">
                  If you sold a motorcycle or old vehicle years ago on an open transfer letter, Excise records still show you as the owner,
                  automatically pushing your PMT score above 32.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-amber-200 dark:border-amber-800 space-y-1">
                <span className="font-bold text-amber-800 dark:text-amber-300 block">2. Shared Electricity Meter in Your Name</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Having a commercial or high-unit multi-family electricity meter registered under your CNIC flags high utility consumption.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-amber-200 dark:border-amber-800 space-y-1">
                <span className="font-bold text-amber-800 dark:text-amber-300 block">3. Incomplete Family Tree (B-Form Omission)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Failing to register all minor children on NADRA B-Form makes your family size appear small, skewing the dependency calculation.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-amber-200 dark:border-amber-800 space-y-1">
                <span className="font-bold text-amber-800 dark:text-amber-300 block">4. Outdated Survey Data from Years Ago</span>
                <p className="text-slate-600 dark:text-slate-300">
                  If your previous survey was conducted when an earning family member was alive or employed, the system continues to use obsolete scores.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 3: Step-by-Step: How to Request a Dynamic Re-Survey */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <RefreshCw className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              How to Request an NSER Dynamic Re-Survey at BISP Tehsil Office
            </h2>
          </div>

          <div className="space-y-3 font-sans">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
              <div className="space-y-1 text-xs">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  Update NADRA Records First
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Before visiting BISP, ensure all children are registered on the Computerized B-Form (CRC), deceased members are cancelled via death certificates, and marital status is accurate on your CNIC.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
              <div className="space-y-1 text-xs">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  Visit BISP Tehsil Registration Desk in Person
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  The female head of the family must visit the nearest BISP Tehsil Center with original CNIC, B-Forms, and a registered SIM in her own name. No appointment is needed.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
              <div className="space-y-1 text-xs">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  Complete the 43-Question Biometric Interview
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Answer the NSER data entry operator truthfully regarding room count, livestock, water source, and dependents. Verify fingerprint scans and obtain the survey receipt slip.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">4</span>
              <div className="space-y-1 text-xs">
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  Track Eligibility via 8171 SMS or Web Portal
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  After automated algorithmic processing (typically 4 to 8 weeks), send your CNIC to <strong>8171</strong> or check the 8171 web portal to confirm your updated PMT status.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Welfare &amp; Verification Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/welfare/bisp-payment-check"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">BISP Portal</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                BISP Payment Check Online →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check 8171 stipend payment status by CNIC.</p>
            </Link>

            <Link
              href="/welfare/sehat-card-eligibility-checker-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Health Coverage</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Sehat Card Eligibility 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Verify free hospital treatment eligibility.</p>
            </Link>

            <Link
              href="/nadra/b-form-frc-status-check"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Family Verification</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                B-Form &amp; FRC Status Check →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Verify children and family tree records for NSER.</p>
            </Link>
          </div>
        </section>

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step BISP PMT Score Verification & Re-Survey Flow"
          titleUr="بے نظیر انکم سپورٹ پی ایم ٹی سکور معلوم کرنے اور دوبارہ سروے کا طریقہ"
          subtitleEn="4-stage verified sequence from 8171 checking to NSER dynamic registration"
          subtitleUr="8171 پورٹل سے لے کر تحصیل رجسٹریشن سنٹر پر دوبارہ سروے تک کے 4 مراحل"
          steps={[
            {
              number: 1,
              titleEn: "Check Status on 8171 Portal",
              titleUr: "8171 پورٹل پر سٹیٹس چیک کریں",
              descEn: "Send 13-digit CNIC to 8171 SMS or enter on 8171.pass.gov.pk to verify if household PMT is under the 32 cutoff.",
              descUr: "شناختی کارڈ نمبر 8171 پر ایس ایم ایس بھیج کر یا پورٹل پر درج کر کے اہلیت کا سکور دیکھیں۔",
              tagEn: "8171 Lookup",
              tagUr: "8171 چیک",
            },
            {
              number: 2,
              titleEn: "Prepare Mandatory Documents",
              titleUr: "ضروری کاغذات تیار کریں",
              descEn: "Gather original CNIC of female household head, Nadra B-Forms for all children, and latest paid electricity bill.",
              descUr: "خاتون سربراہ کا اصل شناختی کارڈ، بچوں کے ب فارم اور بجلی کا حالیہ بل ہمراہ رکھیں۔",
              tagEn: "Checklist",
              tagUr: "کاغذات",
            },
            {
              number: 3,
              titleEn: "Visit BISP Tehsil Office",
              titleUr: "تحصیل بی آئی ایس پی سنٹر وزٹ",
              descEn: "Appear in-person at your local Tehsil Dynamic Registration counter for biometric verification and survey interview.",
              descUr: "مقامی تحصیل رجسٹریشن ڈیسک پر حاضر ہو کر بائیومیٹرک انگوٹھا اور سروے فارم پر کریں۔",
              tagEn: "NSER Desk",
              tagUr: "تحصیل دفتر",
            },
            {
              number: 4,
              titleEn: "Automated Scoring & 8171 SMS",
              titleUr: "خودکار سکورنگ اور تصدیقی پیغام",
              descEn: "BISP systems cross-match asset databases to compute your updated PMT score and send official decision SMS from 8171.",
              descUr: "مرکزی سسٹم خودکار طریقے سے نیا سکور جاری کرے گا اور 8171 سے حتمی تصدیقی میسج آئے گا۔",
              tagEn: "Confirmation",
              tagUr: "تصدیقی ایس ایم ایس",
            },
          ]}
        />

        {/* FAQ Section */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (PMT Score & Eligibility)"
          titleUr="پی ایم ٹی سکور اور بی آئی ایس پی اہلیت کے متعلق عام سوالات"
          subtitleEn="Essential guidelines on 43 poverty proxies, 32 cutoff score, and survey rules"
          subtitleUr="43 غربت انڈیکیٹرز، 32 کٹ آف سکور اور دوبارہ سروے سے متعلق اہم ہدایات"
          items={[
            {
              questionEn: "What does a PMT score actually measure in BISP?",
              questionUr: "پی ایم ٹی سکور کس بنیاد پر تیار کیا جاتا ہے؟",
              answerEn: "The Proxy Means Test (PMT) score is a statistical number between 0 and 100 that estimates a household's socio-economic status. Rather than relying on self-reported monthly income (which is difficult to verify in informal economies), it uses approximately 43 visible proxies such as household assets, construction quality, family size, utility usage, and education levels.",
              answerUr: "پراکسی مینز ٹیسٹ (PMT) صفر سے 100 کے درمیان غربت کا سائنسی تخمینہ ہے۔ اس میں تنخواہ کے بجائے گھر کے اثاثوں، بچوں کی تعداد، تعلیمی اخراجات اور بجلی کے بلوں جیسے 43 عوامل دیکھے جاتے ہیں۔",
            },
            {
              questionEn: "What is the PMT score cutoff for Benazir Kafaalat eligibility?",
              questionUr: "بے نظیر کفالت وظیفے کے لیے کتنا پی ایم ٹی سکور ہونا ضروری ہے؟",
              answerEn: "For the general Benazir Kafaalat quarterly stipend, a household's PMT score must be 32 or below. For special categories, such as certified Persons with Disabilities (PWDs) or transgender citizens, the eligibility threshold is relaxed up to a PMT score of 37.",
              answerUr: "عام گھرانوں کے لیے پی ایم ٹی سکور 32 یا اس سے کم ہونا لازمی ہے۔ معذور افراد اور خواجہ سراؤں کے لیے یہ رعایت 37 سکور تک دی گئی ہے۔",
            },
            {
              questionEn: "Why was my BISP application rejected even though our income is very low?",
              questionUr: "کم آمدن کے باوجود بی آئی ایس پی کی درخواست کیوں مسترد ہوتی ہے؟",
              answerEn: "BISP cross-matches applicant CNICs with automated government databases. Common automated disqualification triggers include: a registered motor vehicle (car/commercial vehicle) in the applicant's name, international travel records (passports with foreign visas), a family member in regular government service, or high-tier residential electricity meter connections.",
              answerUr: "درخواست گزار یا شریک حیات کے نام پر گاڑی، پاسپورٹ پر غیر ملکی سفر، سرکاری ملازمت یا بجلی کے بھاری بل خودکار سسٹم کے تحت نااہلی کی بڑی وجوہات ہیں۔",
            },
            {
              questionEn: "Can I apply for an NSER survey online?",
              questionUr: "کیا این ایس ای آر سروے گھر بیٹھے آن لائن ہو سکتا ہے؟",
              answerEn: "No. There is NO online application or survey form for NSER. Applicants must physically visit their nearest BISP Tehsil Registration Office with their original CNIC and children's B-Forms to complete the biometric survey. The registration process at the official center is 100% free of cost.",
              answerUr: "نہیں، سروے کے لیے کوئی آن لائن فارم نہیں ہے۔ اصل شناختی کارڈ اور بچوں کے ب فارم کے ساتھ قریبی تحصیل دفتر جانا لازمی ہے۔ رجسٹریشن مکمل طور پر مفت ہے۔",
            },
            {
              questionEn: "How do I request a re-survey if my financial situation has worsened?",
              questionUr: "اگر مالی حالات خراب ہو جائیں تو دوبارہ سروے کیسے کروائیں؟",
              answerEn: "Under the NSER Dynamic Registry framework, any family whose economic situation has changed (e.g. loss of breadwinner, medical hardship, or outdated census records) can visit the local BISP Tehsil Office to request a re-survey after the standard moratorium period (typically 2 years from their last survey date).",
              answerUr: "ڈائنامک رجسٹری کے تحت پچھلے سروے کے 2 سال بعد یا کڑی مالی آزمائش کی صورت میں قریبی بی آئی ایس پی تحصیل سنٹر جا کر نیا سروے کروایا جا سکتا ہے۔",
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Sources Cited:</p>
          {[
            { label: 'Benazir Income Support Programme (BISP) Official Portal', url: 'https://bisp.gov.pk/' },
            { label: '8171 Web Portal for Eligibility Tracking', url: 'https://8171.pass.gov.pk/' },
            { label: 'Ministry of Poverty Alleviation & Social Safety Pakistan', url: 'https://pass.gov.pk/' },
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
