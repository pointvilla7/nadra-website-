import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, FeeTableVisual, FAQAccordionVisual } from '@/components/visuals';
import {
  Trash2,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  Bike,
  Camera,
  CreditCard,
  Building2,
  Flame,
  Award,
  ExternalLink,
  HelpCircle,
  FileText,
  Clock,
  Car,
  Scale,
  Sparkles,
  Smartphone,
  ArrowRight,
  Info,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Suthra Punjab Anti-Littering Squad Fines Explained (2026): Rules, E-Challan Grace Period & City Rates | Pakistan Info Hub',
  description:
    'Verified civic guide to Punjab’s Suthra Punjab Anti-Littering Squads: fine structures (Rs. 1,000–50,000), September 2026 warning grace period, Lahore & Faisalabad Safe City camera enforcement, e-challan payment via ePay, and Environment Friendly Citizen recognition.',
  keywords: [
    'suthra punjab anti littering squad',
    'suthra punjab fines 2026',
    'punjab littering e challan',
    'lahore littering fine rs 1000',
    'faisalabad safe city littering fine',
    'throwing garbage from moving vehicle punjab fine',
    'suthra punjab authority act 2026',
    'punjab local government act 2025 cleanliness fines',
    'how to pay littering echallan epay punjab',
    'environment friendly citizen sticker punjab',
  ],
  openGraph: {
    title: 'Suthra Punjab Anti-Littering Squad Fines Explained 2026 – Rules & E-Challan Guide',
    description:
      'Clear citizen guide to Suthra Punjab Anti-Littering Squads: fine rates, September warning period, camera-based enforcement, and e-challan payment procedure.',
    url: 'https://www.pakistaninfohub.com/legal/suthra-punjab-anti-littering-squad-fines-explained-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/legal/suthra-punjab-anti-littering-squad-fines-explained-2026',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Police & Legal Services', item: 'https://www.pakistaninfohub.com/legal' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Suthra Punjab Anti-Littering Squad Fines Explained 2026',
          item: 'https://www.pakistaninfohub.com/legal/suthra-punjab-anti-littering-squad-fines-explained-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Suthra Punjab Anti-Littering Squad Fines Explained (2026): Rules, E-Challan Grace Period & City Rates',
      description:
        'Comprehensive citizen guide explaining the legal authority, city-by-city fine schedules, warning-first escalation, and digital payment methods for Punjab’s new anti-littering squads.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-02',
      dateModified: '2026-09-02',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/legal/suthra-punjab-anti-littering-squad-fines-explained-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I get a warning before a fine, or is an immediate penalty issued?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Across all active divisions, Punjab enforcement follows a warning-first approach. During the active September 2026 grace period, patrol squads issue educational warning e-challans rather than monetary penalties. From October 1, 2026, repeat violations or severe offenses (such as burning waste or commercial dumping) will attract immediate monetary e-challans.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the anti-littering e-challan system active province-wide or only in specific cities?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Enforcement is rolling out city-by-city across Punjab’s divisional headquarters. Lahore launched its commercial pilot covering 200 markets and main roads on September 1, 2026. Faisalabad utilizes a joint squad integrated with Punjab Safe Cities Authority (PSCA) surveillance cameras. Other divisional headquarters (Rawalpindi, Gujranwala, Multan) are deploying e-bike squads progressively.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I pay a Suthra Punjab littering e-challan if issued?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'E-bike squad officers are strictly prohibited from collecting cash on the street. All e-challans generate a digital 17-digit PSID (Consumer Number) payable via the ePay Punjab app, mobile banking (1-Link), JazzCash, Easypaisa, or over-the-counter at National Bank of Pakistan (NBP) and Bank of Punjab (BOP) branches within 15 days.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a vehicle owner be fined if a passenger throws garbage from a moving car?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Under Safe City camera enforcement (particularly active in Faisalabad and Lahore), throwing trash, beverage bottles, or tissues from moving vehicles is captured on high-definition cameras. The e-challan of up to Rs. 50,000 is traced through the vehicle license plate and dispatched to the registered owner.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if I believe an e-challan was issued unfairly or in error?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can contest a challan by lodging a formal review request through the "Suthra Punjab Shehri" mobile application or visiting your local Municipal Corporation / Suthra Punjab facilitation desk with your challan PSID and photo evidence.',
          },
        },
      ],
    },
  ],
};

export default function Page() {
  const breadcrumbs = [
    { nameEn: 'Home', nameUr: 'ہوم' },
    { nameEn: 'Police & Legal Services', nameUr: 'پولیس اور قانونی خدمات' },
    { nameEn: 'Suthra Punjab Anti-Littering Squad Fines', nameUr: 'ستھرا پنجاب اینٹی لٹرنگ سکواڈ اور جرمانے' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-8 font-sans">
        {/* Navigation Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <VerifiedBadge textEn="CIVIC LAW & ENFORCEMENT GUIDE (SEPTEMBER 2026 UPDATE)" textUr="شہری قوانین اور نفاذ گائیڈ (ستمبر 2026)" />
          <InteractiveToolBadge />
          <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30">
            Active Grace Period (Sept 1 – Sept 30)
          </span>
        </div>

        {/* Main Title & Subtitle */}
        <header className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-doc-ink dark:text-white leading-tight">
            Suthra Punjab Anti-Littering Squad Fines Explained (2026): Rules, E-Challan Grace Period &amp; City-by-City Rates
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
            A practical citizen explainer on Punjab’s new e-bike patrol squads, warning-first enforcement, Safe City camera challans, and the Environment Friendly Citizen recognition program.
          </p>
        </header>

        {/* Direct Answer Box (40-60 words) */}
        <DirectAnswerBox
          topicTitleEn="Suthra Punjab Anti-Littering Squad Fines & Rules (2026)"
          topicTitleUr="ستھرا پنجاب اینٹی لٹرنگ سکواڈ اور کچرا پھینکنے پر جرمانے 2026"
          answerEn="Suthra Punjab Anti-Littering Squads enforce cleanliness under the Punjab Local Government Act 2025 and Suthra Punjab Authority Act 2026. Public littering fines range from Rs. 1,000 to Rs. 10,000, while commercial neglect and vehicular dumping carry penalties up to Rs. 50,000. Throughout September 2026, squads operate under an educational grace period issuing warning e-challans; formal digital monetary fines commence October 1, 2026."
          answerUr="ستھرا پنجاب اینٹی لٹرنگ سکواڈ پنجاب لوکل گورنمنٹ ایکٹ 2025 کے تحت کام کرتا ہے۔ عوامی مقامات پر کچرا پھینکنے پر 1,000 سے 10,000 روپے جبکہ کمرشل غفلت اور گاڑی سے کچرا پھینکنے پر 50,000 روپے تک جرمانہ ہے۔ ستمبر 2026 میں صرف وارننگ ای چالان جاری ہو رہے ہیں جبکہ باقاعدہ نقد/ڈیجیٹل جرمانے یکم اکتوبر 2026 سے لاگو ہوں گے۔"
        />

        {/* Grace Period Notification Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-50 dark:from-amber-950/40 dark:via-slate-900 to-transparent border border-amber-400/40 flex items-start gap-3.5">
          <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-sans">
            <p className="font-serif font-bold text-amber-900 dark:text-amber-300">
              Current Operational Status: September 2026 Educational Grace Period
            </p>
            <p>
              Under Chief Minister directives, <strong>September 2026 serves as an educational rollout period</strong>. E-bike squads in Lahore, Faisalabad, and other divisional centers are currently issuing <strong>warning e-challans without financial liability</strong> to create civic awareness. Formal digital monetary fines take full legal effect on <strong>October 1, 2026</strong>. Furthermore, officers are strictly prohibited from receiving cash on-site.
            </p>
          </div>
        </div>

        {/* Section 1: What Counts as a Violation */}
        <section className="space-y-4">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white flex items-center gap-2.5">
              <Trash2 className="w-6 h-6 text-doc-seal" />
              <span>What Legally Counts as a Littering Violation in Punjab?</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans mt-1">
              Enforcement focuses on specific prohibited behaviors under provincial sanitation bylaws
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-2">
              <div className="flex items-center gap-2 font-serif font-bold text-sm text-doc-ink dark:text-white">
                <Trash2 className="w-4 h-4 text-doc-seal shrink-0" />
                <span>1. Public Place &amp; Sidewalk Littering</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Tossing snack wrappers, plastic beverage cups, cigarette butts, food leftovers, or plastic bags on public roads, parks, footpaths, or green belts.
              </p>
              <div className="text-[11px] font-mono font-bold text-doc-seal">Fine Range: Rs. 1,000 – Rs. 10,000</div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-2">
              <div className="flex items-center gap-2 font-serif font-bold text-sm text-doc-ink dark:text-white">
                <Car className="w-4 h-4 text-doc-brass shrink-0" />
                <span>2. Throwing Waste from Moving Vehicles</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Drivers or passengers throwing trash, water bottles, or debris from cars, public buses, or rickshaws. Monitored in real-time via Safe City high-resolution traffic cameras.
              </p>
              <div className="text-[11px] font-mono font-bold text-doc-seal">Fine Range: Up to Rs. 50,000 (Camera-Issued)</div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-2">
              <div className="flex items-center gap-2 font-serif font-bold text-sm text-doc-ink dark:text-white">
                <Building2 className="w-4 h-4 text-slate-700 dark:text-slate-300 shrink-0" />
                <span>3. Shop &amp; Commercial Frontage Neglect</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Traders and commercial establishments failing to maintain cleanliness along their immediate shopfront, or sweeping internal market debris onto pedestrian walkways.
              </p>
              <div className="text-[11px] font-mono font-bold text-doc-seal">Fine Range: Rs. 1,000 – Rs. 50,000</div>
            </div>

            <div className="p-4 rounded-xl border border-red-200 dark:border-red-900/40 bg-red-50/40 dark:bg-red-950/20 shadow-xs space-y-2">
              <div className="flex items-center gap-2 font-serif font-bold text-sm text-red-700 dark:text-red-400">
                <Flame className="w-4 h-4 text-red-600 shrink-0" />
                <span>4. Burning Municipal / Garden Waste (Smog Offense)</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Open burning of municipal solid waste, leaf piles, plastic, or tires. Classified as a non-bailable environmental violation under provincial anti-smog emergency ordinances.
              </p>
              <div className="text-[11px] font-mono font-bold text-red-700 dark:text-red-400">Fine: Rs. 100,000 – Rs. 500,000 + Jail (Up to 2–7 Yrs)</div>
            </div>
          </div>
        </section>

        {/* Section 2: Process Steps Diagram (Warning to E-Challan) */}
        <section className="space-y-4">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white flex items-center gap-2.5">
              <Scale className="w-6 h-6 text-doc-brass" />
              <span>Enforcement Escalation: How the Squad Operates</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans mt-1">
              Transparent, camera-verified workflow designed to prevent harassment and roadside extortion
            </p>
          </div>

          <ProcessStepsDiagram
            titleEn="Official Suthra Punjab Violation Escalation Process"
            titleUr="ستھرا پنجاب خلاف ورزی کے خلاف سرکاری مرحلہ وار کارروائی"
            subtitleEn="Chronological workflow from electronic surveillance to digital resolution"
            subtitleUr="الیکٹرانک نگرانی سے لے کر ای چالان کی آن لائن ادائیگی تک کا طریقہ کار"
            variant="navy"
            steps={[
              {
                number: 1,
                titleEn: 'Detection via E-Bike Patrol or Safe City CCTV',
                titleUr: 'ای بائیک سکواڈ یا سیف سٹی کیمروں سے نشاندہی',
                descEn: 'Uniformed Suthra Punjab officers on branded e-bikes monitor commercial corridors, while Safe City ANPR cameras record vehicular littering.',
                descUr: 'مخصوص وردی میں ملبوس عملہ ای بائیک پر بازاروں کی نگرانی کرتا ہے جبکہ سیف سٹی کیمرے گاڑیوں سے کچرا پھینکنے والوں کو ریکارڈ کرتے ہیں۔',
                tagEn: 'Surveillance',
                tagUr: 'نگرانی',
              },
              {
                number: 2,
                titleEn: 'First Offense: Educational Warning & Digital Record',
                titleUr: 'پہلی خلاف ورزی: تنبیہ اور ڈیجیٹل اندراج',
                descEn: 'Under the September 2026 grace policy, offenders receive counseling and a digital warning e-challan to correct behavior without monetary penalty.',
                descUr: 'ستمبر 2026 کی پالیسی کے تحت پہلے مرحلے میں شہریوں کو جرمانے کے بغیر وارننگ چالان جاری کر کے آگاہی دی جاتی ہے۔',
                tagEn: 'Grace Warning',
                tagUr: 'وارننگ',
              },
              {
                number: 3,
                titleEn: 'Repeat Offense: Digital E-Challan Issuance',
                titleUr: 'دوبارہ خلاف ورزی: ڈیجیٹل ای چالان کا اجراء',
                descEn: 'Persistent violators or heavy commercial offenders receive a formal digital e-challan with photographic evidence and a unique 17-digit PSID.',
                descUr: 'بار بار کچرا پھینکنے والوں کو تصویری ثبوت اور 17 ہندسوں کے پی ایس آئی ڈی نمبر کے ساتھ سرکاری ای چالان جاری کیا جاتا ہے۔',
                tagEn: 'Formal Challan',
                tagUr: 'ای چالان',
              },
              {
                number: 4,
                titleEn: 'Digital Payment via ePay Punjab (15-Day Limit)',
                titleUr: 'ای پے پنجاب کے ذریعے ڈیجیٹل ادائیگی (15 دن کی مہلت)',
                descEn: 'No cash is ever taken by squad officers. Fines must be deposited through ePay Punjab, ATMs, banking apps, or NBP/BOP counters within 15 days.',
                descUr: 'سکواڈ اہلکاروں کو نقد رقم لینے کی ممانعت ہے۔ فیس صرف ای پے پنجاب، بینک ایپ یا نامزد برانچ میں 15 روز کے اندر جمع ہوتی ہے۔',
                tagEn: 'Digital Settlement',
                tagUr: 'ادائیگی',
              },
            ]}
          />
        </section>

        {/* Section 3: FeeTableVisual (City-by-City Rates) */}
        <section className="space-y-4">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white flex items-center gap-2.5">
              <Building2 className="w-6 h-6 text-doc-seal" />
              <span>City-by-City Enforcement &amp; Fine Structure (2026)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans mt-1">
              Notice: Figures reflect local municipal authority resolutions and active divisional pilot programs
            </p>
          </div>

          <FeeTableVisual
            titleEn="Suthra Punjab Anti-Littering Penalties by Jurisdiction"
            titleUr="پنجاب میں کچرا پھیلانے پر قانونی سزائیں و جرمانے"
            subtitleEn="Statutory maximums under the Punjab Local Government Act 2025 &amp; Suthra Punjab Authority Act 2026"
            subtitleUr="پنجاب لوکل گورنمنٹ ایکٹ اور ستھرا پنجاب اتھارٹی کے تحت منظور شدہ جرمانے"
            noteEn="Notice: During September 2026, general public and retail littering is managed via educational warning e-challans. Heavy penalties apply immediately to open garbage and industrial burning."
            rows={[
              {
                serviceEn: 'Lahore Commercial Pilot (200 Markets & Main Roads)',
                serviceUr: 'لاہور کمرشل پائلٹ (200 مارکیٹس و اہم شاہراہیں)',
                normal: 'Rs. 1,000 (Individual)',
                urgent: 'Rs. 5,000 (Commercial)',
                executive: 'Rs. 10,000 (Repeat/Heavy)',
                validity: '15 Days to Pay',
                category: 'Lahore Division',
              },
              {
                serviceEn: 'Faisalabad Safe City Camera Surveillance (Moving Vehicles)',
                serviceUr: 'فیصل آباد سیف سٹی کیمرہ مانیٹرنگ (چلتی گاڑیوں سے کچرا)',
                normal: 'Warning (Sept)',
                urgent: 'Rs. 10,000 – 25,000',
                executive: 'Up to Rs. 50,000',
                validity: 'Vehicle Registration Hold',
                category: 'Faisalabad Division',
              },
              {
                serviceEn: 'Rawalpindi, Gujranwala, Multan & Other Divisional HQs',
                serviceUr: 'راولپنڈی، گوجرانوالہ، ملتان و دیگر ڈویژنل ہیڈ کوارٹرز',
                normal: 'Warning / Counseling',
                urgent: 'Rs. 1,000 – 5,000',
                executive: 'Rs. 10,000 (Commercial)',
                validity: 'Progressive Rollout',
                category: 'Other Divisions',
              },
              {
                serviceEn: 'Open Waste & Plastic Burning (Province-Wide Anti-Smog Law)',
                serviceUr: 'کھلے عام کوڑا و پلاسٹک جلانا (صوبائی اینٹی سموگ قانون)',
                normal: 'Rs. 100,000 Fine',
                urgent: 'Rs. 500,000 Fine',
                executive: '2 Years Imprisonment',
                validity: 'Non-Bailable Offense',
                category: 'All Punjab',
              },
              {
                serviceEn: 'Tire Burning (High Environmental Hazard)',
                serviceUr: 'ٹائر جلانے پر سنگین کارروائی',
                normal: 'Rs. 200,000',
                urgent: 'Rs. 500,000',
                executive: '7 Years Imprisonment',
                validity: 'Severe Felony',
                category: 'All Punjab',
              },
            ]}
          />
        </section>

        {/* Section 4: How to Pay & Digital Transparency */}
        <section className="space-y-4">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white flex items-center gap-2.5">
              <CreditCard className="w-6 h-6 text-doc-seal" />
              <span>How to Pay a Suthra Punjab E-Challan Online</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans mt-1">
              Zero-cash policy protects citizens from extortion; payments reconcile electronically
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4 font-sans text-sm">
            <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-red-900 dark:text-red-300 space-y-1">
                <span className="font-bold">Important Citizen Rule: Never Pay Cash on the Road</span>
                <p>
                  Suthra Punjab patrol staff and supervisory officers are legally forbidden from accepting cash fines. Any officer demanding cash is committing an illegality. Demand the digital printed or SMS e-challan with a verifiable PSID.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Step-by-Step Payment Instructions:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                <li>
                  <strong>Locate the 17-Digit PSID:</strong> Find the unique Consumer / PSID number on your printed e-challan slip or the official SMS notification.
                </li>
                <li>
                  <strong>Open ePay Punjab or Mobile Banking:</strong> Launch the ePay Punjab app, or log into your standard bank app (HBL, MCB, Meezan, Allied, etc.), JazzCash, or Easypaisa.
                </li>
                <li>
                  <strong>Select Government Payments:</strong> Navigate to &quot;GoPb&quot; / &quot;Local Government &amp; Community Development&quot; or standard &quot;1-Link Bill Payment&quot;.
                </li>
                <li>
                  <strong>Enter PSID:</strong> Input the 17-digit PSID. The system will automatically retrieve the exact violator name and fine amount.
                </li>
                <li>
                  <strong>Confirm &amp; Retain Digital Receipt:</strong> Authorize the payment. The e-challan status updates automatically on municipal records.
                </li>
              </ol>
            </div>

            {/* Cross-linking to traffic challans & encroachment */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2 text-xs font-mono">
              <span className="text-slate-500 self-center">Related Civic Guides:</span>
              <Link
                href="/traffic/e-challan-check-online"
                className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-doc-ink dark:text-slate-200 hover:text-doc-seal transition flex items-center gap-1"
              >
                <span>Check Punjab Traffic E-Challans</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
              <Link
                href="/traffic/challan-paid-but-showing-pending-2026"
                className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-doc-ink dark:text-slate-200 hover:text-doc-seal transition flex items-center gap-1"
              >
                <span>Challan Paid But Showing Pending?</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
              <Link
                href="/legal/anti-encroachment-complaint-tribunal-pakistan-2026"
                className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-doc-ink dark:text-slate-200 hover:text-doc-seal transition flex items-center gap-1"
              >
                <span>Anti-Encroachment Complaints</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 5: The Positive Side (Environment Friendly Citizen) */}
        <section className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-900 via-slate-900 to-navy-950 text-white border border-emerald-500/30 space-y-3.5 shadow-md">
          <div className="flex items-center gap-2.5">
            <Award className="w-6 h-6 text-emerald-400 shrink-0" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
              The Positive Incentive: Environment-Friendly Citizen &amp; Home Recognition
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            The Suthra Punjab mandate is not merely punitive. Under the community partnership wing of the program, households, commercial shops, and residential mohallahs that proactively maintain cleanliness, avoid open littering, and segregate wet/dry waste receive official recognition:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-xs font-serif font-bold text-emerald-300">Green Recognition Sticker</div>
              <p className="text-[11px] text-slate-300 font-sans">
                Official &quot;Environment Friendly Home&quot; seal affixed to properties adhering to zero open littering.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-xs font-serif font-bold text-emerald-300">Door-to-Door Collection</div>
              <p className="text-[11px] text-slate-300 font-sans">
                Regular scheduled waste pickups by municipal sanitation teams, eliminating neighborhood dump heaps.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-xs font-serif font-bold text-emerald-300">Suthra Punjab Shehri App</div>
              <p className="text-[11px] text-slate-300 font-sans">
                Direct mobile complaint registration with photo verification and digital supervisor tracking.
              </p>
            </div>
          </div>
        </section>

        {/* Ad Placement Zone */}
        <AdPlacementZone slotId="suthra-punjab-mid-article" format="horizontal" />

        {/* Section 6: FAQ Accordion */}
        <section className="space-y-4">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white flex items-center gap-2.5">
              <HelpCircle className="w-6 h-6 text-doc-brass" />
              <span>Frequently Asked Questions</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans mt-1">
              Verified answers to common citizen concerns regarding anti-littering enforcement
            </p>
          </div>

          <FAQAccordionVisual
            titleEn="Suthra Punjab Anti-Littering Squad FAQs"
            titleUr="ستھرا پنجاب اینٹی لٹرنگ سکواڈ سے متعلق عام سوالات"
            subtitleEn="Clear answers on fines, warnings, camera surveillance, and payment channels"
            subtitleUr="جرمانے، وارننگ، کیمرہ مانیٹرنگ اور فیس ادائیگی کے بارے میں مکمل معلومات"
            items={[
              {
                questionEn: 'Do I get a warning before a fine, or is an immediate penalty issued?',
                questionUr: 'کیا کچرا پھینکنے پر فوری جرمانہ ہوتا ہے یا پہلے وارننگ دی جاتی ہے؟',
                answerEn: 'Throughout September 2026, enforcement is operating under an educational grace period where first-time offenders receive verbal counseling and a digital warning e-challan without monetary charge. From October 1, 2026, repeat violations or egregious offenses (such as burning garbage or dumping truckloads of commercial refuse) receive direct monetary fines.',
                answerUr: 'ستمبر 2026 کے دوران حکومتی پالیسی کے تحت پہلے مرحلے میں وارننگ ای چالان جاری کیا جاتا ہے جس میں کوئی رقم ادا نہیں کرنی ہوتی۔ یکم اکتوبر 2026 سے دوبارہ خلاف ورزی پر باقاعدہ مالی جرمانے لاگو ہوں گے۔',
              },
              {
                questionEn: 'Is this only active in Lahore and Faisalabad, or in other cities too?',
                questionUr: 'کیا یہ سکواڈ صرف لاہور اور فیصل آباد میں ہے یا دوسرے شہروں میں بھی؟',
                answerEn: 'Enforcement is rolling out progressively across all divisional headquarters of Punjab (Rawalpindi, Gujranwala, Multan, Bahawalpur, Sargodha, Sahiwal, and D.G. Khan). Lahore is piloting automated e-challans in 200 markets, while Faisalabad uses Safe City camera tracking. Other cities are deploying e-bike patrol units progressively.',
                answerUr: 'یہ نظام پنجاب کے تمام ڈویژنل ہیڈ کوارٹرز میں مرحلہ وار لاگو ہو رہا ہے۔ لاہور میں 200 بازاروں جبکہ فیصل آباد میں سیف سٹی کیمروں سے نگرانی شروع کی گئی ہے، اور باقی شہروں میں بھی ای بائیک سکواڈ تعینات ہو رہے ہیں۔',
              },
              {
                questionEn: 'How do I pay if I receive an e-challan for littering?',
                questionUr: 'اگر کوڑا پھینکنے پر ای چالان ہو جائے تو ادائیگی کیسے کریں؟',
                answerEn: 'You do not pay cash to any squad member. You will receive a 17-digit PSID on your challan paper or via SMS. Pay this PSID within 15 days using ePay Punjab, mobile banking apps, JazzCash, Easypaisa, or at any National Bank of Pakistan (NBP) or Bank of Punjab (BOP) branch.',
                answerUr: 'کسی اہلکار کو نقد رقم نہ دیں۔ چالان پر موجود 17 ہندسوں کے پی ایس آئی ڈی (PSID) کے ذریعے ای پے پنجاب، بینک ایپ، جاز کیش یا ایزی پیسہ سے 15 دن کے اندر آن لائن ادائیگی کریں۔',
              },
              {
                questionEn: 'Can I be fined if a passenger in my car throws trash outside?',
                questionUr: 'اگر گاڑی میں بیٹھا مسافر باہر کچرا پھینکے تو کیا گاڑی کے مالک پر چالان ہوگا؟',
                answerEn: 'Yes. In cities with Safe City surveillance (Faisalabad and Lahore), ANPR high-resolution cameras detect objects thrown from motor vehicles. The camera captures the vehicle registration number, and the e-challan (up to Rs. 50,000) is issued directly to the registered vehicle owner.',
                answerUr: 'جی ہاں، سیف سٹی کیمروں کی مدد سے چلتی گاڑی سے بوتل یا کچرا پھینکنے پر گاڑی کے نمبر پر چالان جاری ہوتا ہے جس کی ذمہ داری رجسٹرڈ مالک پر عائد ہوتی ہے۔',
              },
              {
                questionEn: 'What is the official helpline or app to report uncollected trash or lodge complaints?',
                questionUr: 'کچرا اٹھوانے یا شکایت درج کروانے کا ہیلپ لائن نمبر اور ایپ کیا ہے؟',
                answerEn: 'Citizens can download the "Suthra Punjab Shehri" mobile application from the Google Play Store or Apple App Store. You can upload geotagged photos of garbage heaps for rapid removal. Alternatively, dial 1139 (or your local Waste Management Company helpline).',
                answerUr: 'شہری گوگل پلے اسٹور سے "ستھرا پنجاب شہری" ایپ ڈاؤن لوڈ کر کے کچرے کی تصویر کے ساتھ شکایت درج کر سکتے ہیں، یا ہیلپ لائن 1139 پر کال کر سکتے ہیں۔',
              },
            ]}
          />
        </section>

        {/* Section 7: Legal Authority & Official Sources */}
        <footer className="pt-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 space-y-2 font-sans">
          <p className="font-bold text-slate-700 dark:text-slate-300">
            Legal Authority &amp; Statutory References:
          </p>
          <ul className="list-disc list-inside space-y-1 leading-relaxed">
            <li>
              <strong>Statutory Basis:</strong> Punjab Local Government Act 2025 &amp; Suthra Punjab Authority Act 2026.
            </li>
            <li>
              <strong>Enforcement Agency:</strong> Local Government &amp; Community Development (LG&amp;CD) Department, Suthra Punjab Authority, and Municipal Corporations in coordination with Punjab Safe Cities Authority (PSCA).
            </li>
            <li>
              <strong>Official Portal:</strong> Government of Punjab (<a href="https://punjab.gov.pk" target="_blank" rel="noopener noreferrer" className="hover:underline text-doc-seal">punjab.gov.pk</a>) &amp; ePay Punjab (<a href="https://epay.punjab.gov.pk" target="_blank" rel="noopener noreferrer" className="hover:underline text-doc-seal">epay.punjab.gov.pk</a>).
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
