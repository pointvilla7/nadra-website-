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
  Vote,
  MapPin,
  Building,
  FileCheck,
  Send,
  FileText,
  BadgeCheck,
  Smartphone,
  Check,
  AlertCircle,
  Home,
  FileSpreadsheet,
  IdCard
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ECP Voter Registration Check 2026: Free 8300 SMS, Polling Area & Vote Transfer | Pakistan Info Hub',
  description:
    'Authoritative guide to checking your voter registration status in Pakistan: How to use the free 8300 SMS service, decipher your block code and serial number, transfer votes using ECP Form 21, and understand polling day rules.',
  keywords: [
    'voter registration check cnic 8300 2026',
    'ecp vote check sms free',
    'how to transfer vote to new address ecp form 21',
    'block code silsila number voter list pakistan',
    'voter registration district election commissioner',
    'can i vote with expired cnic ecp rules',
  ],
  openGraph: {
    title: 'ECP Voter Registration Check 2026: Free 8300 SMS & Vote Transfer Guide',
    description:
      'Official voter verification guide: SMS 8300 check, understanding block codes and polling stations, and ECP Forms 21, 22, and 23 for vote transfer.',
    url: 'https://www.pakistaninfohub.com/nadra/voter-registration-check-cnic-ecp-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/nadra/voter-registration-check-cnic-ecp-2026' },
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
          name: 'NADRA Services',
          item: 'https://www.pakistaninfohub.com/nadra',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'ECP Voter Registration Check 2026',
          item: 'https://www.pakistaninfohub.com/nadra/voter-registration-check-cnic-ecp-2026',
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Check and Transfer Your Voter Registration in Pakistan',
      description:
        'Official step-by-step procedure to check voter registration details via ECP SMS 8300 and transfer or correct electoral records.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Send 13-Digit CNIC to Shortcode 8300',
          text: 'Open your mobile SMS app, enter your 13-digit CNIC number (without dashes or spaces), and send it to official shortcode 8300.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Receive Automated Electoral Details',
          text: 'Read the automated response containing your full Name, Electoral Area (شمارتی علاقہ), Block Code (بلاک کوڈ), Serial Number (سلسلہ نمبر), and National/Provincial Assembly Constituency.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Note Your Block Code & Serial Number',
          text: 'Save or take a screenshot of your block code and serial number for instantaneous polling station desk clearance on election day.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Submit Form 21 for Vote Transfer (If Required)',
          text: 'If your vote is registered in an old area, download ECP Form 21 and submit it with your updated CNIC copy to your local District Election Commissioner (DEC) office.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the 8300 SMS service free or does it charge mobile balance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The 8300 SMS service is free of charge. The Election Commission of Pakistan (ECP) in partnership with cellular mobile operators provides this public service at zero cost to enable all citizens to verify their electoral registration.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I vote on election day if my CNIC is expired?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Official Election Commission of Pakistan (ECP) regulations explicitly allow registered voters to cast their ballot using their original expired Computerized National Identity Card (CNIC). However, you must bring the physical original card—photocopies, soft copies on mobile screens, or NADRA token receipts are strictly not accepted.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is my vote registered in my ancestral village instead of where I currently live?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under the Elections Act 2017, voter registration is directly synchronized with the address recorded on your CNIC database at NADRA. When you make a CNIC, you choose either your Permanent Address or Present Address. If you moved to a new city, your vote remains at your old address until you submit ECP Form 21 (Vote Transfer Form) along with your updated CNIC to the District Election Commissioner (DEC).',
          },
        },
        {
          '@type': 'Question',
          name: 'What does it mean if 8300 replies "Record Not Found"?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '"Record Not Found" means your CNIC is either not yet added to the final electoral roll (common for newly turned 18-year-olds whose data has not undergone the annual ECP revision cycle) or there is a data entry mismatch. You should take your CNIC to your local District Election Commissioner (DEC) office or registration display center and submit Form 21 for immediate inclusion.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which form is used to transfer, object, or correct voter details?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ECP provides three primary statutory forms: (1) Form 21 for new registration or transfer of vote to your current address, (2) Form 22 for lodging an objection against a deceased or unauthorized voter on the list, and (3) Form 23 for correction of name, father’s name, or spelling errors on the electoral roll.',
          },
        },
      ],
    },
  ],
};

export default function VoterRegistrationGuidePage() {
  const breadcrumbs = [
    { nameEn: 'NADRA Services', nameUr: 'نادرا سروسز', url: '/nadra' },
    { nameEn: 'ECP Voter Registration Check 2026', nameUr: 'الیکشن کمیشن ووٹر تصدیق و منتقلی 2026' },
  ];

  const voterSteps = [
    {
      number: 1,
      icon: <Smartphone className="w-5 h-5" />,
      titleEn: 'Send 13-Digit CNIC to 8300',
      titleUr: '8300 پر شناختی کارڈ نمبر بھیجیں',
      descEn: 'Type your clean 13-digit CNIC number (without dashes or spaces) and send it to official shortcode 8300.',
      descUr: 'بغیر ڈیش اور سپیس کے 13 ہندسوں کا شناختی کارڈ نمبر 8300 پر ایس ایم ایس کریں۔',
      tagEn: 'Free SMS Check',
      tagUr: 'مفت ایس ایم ایس',
    },
    {
      number: 2,
      icon: <FileText className="w-5 h-5" />,
      titleEn: 'Decipher Block Code & Serial',
      titleUr: 'بلاک کوڈ اور سلسلہ نمبر نوٹ کریں',
      descEn: 'Note down your Electoral Area, Block Code (بلاک کوڈ), and Serial Number (سلسلہ نمبر) for polling day.',
      descUr: 'جوابی میسج میں دیا گیا شمارتی بلاک کوڈ اور سلسلہ نمبر محفوظ کریں۔',
      tagEn: 'Instant Record',
      tagUr: 'فوری تفصیلات',
    },
    {
      number: 3,
      icon: <Home className="w-5 h-5" />,
      titleEn: 'Verify Area & Constituency',
      titleUr: 'انتخابی حلقہ اور پتہ چیک کریں',
      descEn: 'Confirm whether your vote is assigned to your present living address or permanent ancestral address.',
      descUr: 'چیک کریں کہ کیا آپ کا ووٹ موجودہ رہائش پر ہے یا پرانے آبائی پتے پر درج ہے۔',
      tagEn: 'Location Check',
      tagUr: 'پتہ تصدیق',
    },
    {
      number: 4,
      icon: <Vote className="w-5 h-5" />,
      titleEn: 'Submit Form 21 if Transfer Needed',
      titleUr: 'منتقلی کے لیے فارم 21 جمع کروائیں',
      descEn: 'If your address has changed, submit ECP Form 21 with a CNIC copy to your District Election Commissioner.',
      descUr: 'اگر ووٹ دوسرے شہر منتقل کرنا ہو تو فارم 21 ڈسٹرکٹ الیکشن کمشنر دفتر میں جمع کروائیں۔',
      tagEn: 'DEC Action',
      tagUr: 'الیکشن دفتر',
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
            <InteractiveToolBadge labelEn="ECP OFFICIAL VOTER PORTAL" labelUr="الیکشن کمیشن ووٹر ڈائریکٹری" variant="navy" />
            <VerifiedBadge textEn="FREE 8300 SMS SERVICE 2026" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            ECP Voter Registration Check 2026: Free 8300 SMS, Polling Area &amp; Vote Transfer
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              الیکشن کمیشن ووٹر لسٹ تصدیق: 8300 ایس ایم ایس، بلاک کوڈ، سلسلہ نمبر اور ووٹ منتقلی فارم 21
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Want to confirm exactly where your vote is registered in Pakistan? Here is the complete official guide from the Election Commission of Pakistan (ECP): how to check your registration via free SMS 8300, decipher your Block Code, transfer your vote using Form 21, and polling day CNIC rules.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How to Check Your Voter Registration Status in Pakistan"
          topicTitleUr="پاکستان میں ووٹر رجسٹریشن اور پولنگ اسٹیشن کیسے معلوم کریں؟"
          answerEn="To check your voter registration: Send your 13-digit CNIC number (without dashes or spaces) via SMS to shortcode 8300. The ECP automated reply provides your Name, Electoral Area, Block Code, Serial Number, and National/Provincial Assembly Constituency. The service is free of charge. To transfer or correct your vote, submit Form 21, 22, or 23 to your District Election Commissioner (DEC)."
          answerUr="ووٹر لسٹ میں اپنا نام اور پولنگ ایریا چیک کرنے کے لیے 13 ہندسوں کا شناختی کارڈ نمبر بغیر ڈیش کے 8300 پر ایس ایم ایس کریں۔ جوابی میسج میں آپ کا نام، انتخابی علاقہ، بلاک کوڈ اور سلسلہ نمبر فراہم کیا جائے گا۔ یہ سروس مفت ہے۔ ووٹ منتقلی کے لیے فارم 21 ڈسٹرکٹ الیکشن کمشنر دفتر میں جمع کروائیں۔"
        />

        {/* Conversational Intro */}
        <section className="p-6 rounded-2xl bg-amber-50/70 dark:bg-slate-900/80 border border-amber-200/80 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-doc-seal dark:text-amber-400 font-serif font-bold text-lg">
            <Vote className="w-5 h-5 shrink-0" />
            <h2>Why Checking Your Vote Early Saves You Hours on Polling Day</h2>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            On election morning, thousands of citizens arrive at their local neighborhood school only to be turned away by polling staff saying: <em>&quot;Your vote is registered in your ancestral village 300 kilometers away.&quot;</em>
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            This happens because voter registration in Pakistan is directly synchronized with your <strong>NADRA CNIC address</strong> (Permanent vs. Present address). If you moved houses or cities, checking 8300 now takes 10 seconds and lets you fix your registration before the final electoral rolls are locked.
          </p>
        </section>

        {/* Section 1: How to Check 8300 SMS and Decipher the Output */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step: How to Check via Free SMS 8300
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Open your phone&apos;s text messaging app, type your <strong>13-digit CNIC number without hyphens or spaces</strong> (e.g. <code>3520112345671</code>), and send it to <strong>8300</strong>. Here is how to understand the reply you receive:
            </p>

            <div className="p-4 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs leading-relaxed space-y-2 border border-slate-800 shadow-inner">
              <p className="text-doc-brass font-bold">Sample ECP 8300 Response:</p>
              <p className="pl-3 text-emerald-400">Name: [Muhammad Ali / محمد علی]</p>
              <p className="pl-3 text-emerald-400">Electoral Area: [Mohallah Gulshan-e-Iqbal, Block 5, District East]</p>
              <p className="pl-3 text-amber-300 font-bold">Block Code (بلاک کوڈ): 104050203</p>
              <p className="pl-3 text-amber-300 font-bold">Serial No (سلسلہ نمبر): 487</p>
              <p className="pl-3 text-slate-400">National Assembly: NA-244</p>
              <p className="pl-3 text-slate-400">Provincial Assembly: PS-105</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">Why Block Code Matters</span>
                <p className="text-slate-600 dark:text-slate-300">
                  The <strong>Block Code</strong> identifies your exact polling station building and neighborhood voting ward.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white text-xs block">Why Serial Number Matters</span>
                <p className="text-slate-600 dark:text-slate-300">
                  The <strong>Serial Number (سلسلہ نمبر)</strong> is your line number in the Presiding Officer’s printed voter register. Giving this number allows the polling agent to find your name in 5 seconds without flipping through 1,000 pages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Flow Diagram */}
        <StepFlowDiagram
          titleEn="Step-by-Step Voter Verification &amp; Transfer Process"
          titleUr="ووٹر رجسٹریشن، تصدیق اور ووٹ منتقلی کے 4 مراحل"
          subtitleEn="How to verify your voting details and update your electoral address"
          subtitleUr="ایس ایس ایم 8300 سے معلومات لینے اور ووٹ ایڈریس تبدیل کرنے کا طریقہ"
          steps={voterSteps}
        />

        {/* Section 3: Interpreting Results & Common Issues */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              What Each Result Means &amp; How to Fix It
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-mono font-bold text-[11px]">
                SCENARIO 1: REGISTERED CORRECTLY
              </span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">All Details Match Your City</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Take a screenshot of the 8300 text. On election day, bring your original CNIC to your designated polling station. No further action required.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 font-mono font-bold text-[11px]">
                SCENARIO 2: REGISTERED IN OLD AREA
              </span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Vote in Old Village / City</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Your vote is linked to your CNIC&apos;s permanent address. Submit <strong>ECP Form 21</strong> with your updated CNIC showing your present address to your local District Election Commissioner.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-rose-100 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 font-mono font-bold text-[11px]">
                SCENARIO 3: RECORD NOT FOUND
              </span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">CNIC Missing from Registry</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Common for newly 18-year-old citizens or recent CNIC renewals. Visit your District Election Commissioner office or Display Center to submit <strong>Form 21</strong> for immediate enrollment.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: ECP Forms (Form 21, 22, 23) Overview */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileSpreadsheet className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Official ECP Electoral Forms Directory
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs font-sans">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              The Election Commission of Pakistan provides standard statutory forms available free at all District Election Commissioner (DEC) offices, Display Centers, and downloadable from <code>ecp.gov.pk</code>:
            </p>

            <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="table-scroll-container">
                <table className="w-full text-xs font-sans min-w-[540px]">
                  <thead className="bg-doc-ink text-white text-[11px] font-mono uppercase tracking-wider">
                    <tr>
                      <th className="px-4 py-3 text-left">Form Name</th>
                      <th className="px-4 py-3 text-left">Official Urdu Title</th>
                      <th className="px-4 py-3 text-left">Purpose / Usage</th>
                      <th className="px-4 py-3 text-right">Required Attachments</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-mono font-bold text-emerald-600">Form 21</td>
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">اندراج / منتقلی ووٹ</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Enroll new voter or transfer vote to present/permanent address.</td>
                      <td className="px-4 py-3 text-right font-mono text-slate-600">CNIC Copy + Utility Bill</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-mono font-bold text-rose-600">Form 22</td>
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">اعتراض برائے اخراج ووٹ</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Object to an unauthorized or deceased person on the voter list.</td>
                      <td className="px-4 py-3 text-right font-mono text-slate-600">Death Certificate / Proof</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-mono font-bold text-blue-600">Form 23</td>
                      <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">درستگی کوائف</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">Correct clerical spelling errors in name, father’s name, or gender.</td>
                      <td className="px-4 py-3 text-right font-mono text-slate-600">CNIC Copy with corrected data</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 5: Essential Polling Day Rules */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <IdCard className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Critical Polling Day Identity Rules: Expired CNIC is Accepted!
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 space-y-4 text-xs font-sans">
            <div className="space-y-2 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              <p>
                Many citizens mistakenly stay home because their CNIC has recently expired. Here are the official, legally binding ECP identity rules for casting your ballot:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 space-y-1.5">
                <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase text-xs block">✓ Expired CNIC Allowed</span>
                <p className="text-slate-600 dark:text-slate-300">
                  ECP explicitly permits casting your vote with an <strong>original physical expired CNIC</strong>. Your right to vote remains intact.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 space-y-1.5">
                <span className="font-mono font-bold text-rose-700 dark:text-rose-400 uppercase text-xs block">✗ No Photocopies or Mobile Photos</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Photocopies, digital photos on your smartphone, or NADRA token receipts are <strong>strictly rejected</strong> by the Presiding Officer.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 space-y-1.5">
                <span className="font-mono font-bold text-blue-700 dark:text-blue-400 uppercase text-xs block">✓ NICOP &amp; SNIC Valid</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Smart CNIC (chip card), standard CNIC, and Smart NICOP for overseas voters present in Pakistan are all valid proof of identity.
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
              Frequently Asked Questions (Voter Legal Clarifications)
            </h2>
          </div>

          <div className="space-y-3 font-sans text-xs">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Is the 8300 SMS service really free?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Yes. The Election Commission of Pakistan provides the 8300 voter verification SMS service free of charge on all major mobile networks.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                How do I transfer my vote if I moved to a different city?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Download ECP Form 21, attach a copy of your CNIC (which must display your new address as either present or permanent), and submit it in person or via registered post to your local District Election Commissioner (DEC) office during an open electoral revision period.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Can I vote with a driving license, passport, or office card instead of a CNIC?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                No. Under Section 84 of the Elections Act 2017, the <strong>original NADRA CNIC/NICOP is the only legally accepted identity document</strong> for voting. Passports and driving licenses cannot be used as substitutes at the polling station.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                What if I turn 18 just before election day?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Once you obtain your CNIC from NADRA upon turning 18, NADRA transmits your record to ECP. As long as your name is included in the final electoral rolls published before the statutory freeze date, you can vote. Always check 8300 to verify enrollment.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Related Links */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related NADRA Identity &amp; Verification Utilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/nadra/cnic-new-rules-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">NADRA Address Rules</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                CNIC New Rules 2026 Directory
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                How to update permanent/present addresses on your smart identity card.
              </p>
            </Link>

            <Link
              href="/nadra/pta-sim-check-how-many-sims-on-cnic-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-seal font-bold uppercase block">SIM Security</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                PTA SIM Check: How Many SIMs on CNIC
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Official 668 SMS and cnic.sims.pk portal verification guide.
              </p>
            </Link>

            <Link
              href="/nadra/senior-citizen-card-pakistan-explained-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-emerald-600 font-bold uppercase block">Senior Citizens</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Senior Citizen Benefits Explained 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Special voting counters, priority queues, and public concessions.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
