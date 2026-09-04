import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  ComparisonVisual,
  ProcessStepsDiagram,
  FAQAccordionVisual,
} from '@/components/visuals';
import {
  ShieldAlert,
  ShieldCheck,
  Building2,
  Stethoscope,
  Coins,
  Scale,
  Users,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  HelpCircle,
  FileCheck2,
  MapPin,
  ArrowRight,
  Info,
  Layers,
  HeartPulse,
  BadgePercent,
  Briefcase,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'PESSI & SESSI vs EOBI Difference 2026: Coverage, Rates & Registration Guide | Pakistan Info Hub',
  description:
    'Clear breakdown of EOBI (Federal Pension) vs PESSI & SESSI (Provincial Healthcare): Learn why both are legally mandatory, contribution rates (5%+1% vs 6% employer-only), minimum wage base, worker cards, and online verification portals.',
  keywords: [
    'pessi vs eobi difference',
    'sessi vs eobi pakistan',
    'provincial social security vs eobi',
    'pessi registration check by cnic',
    'sessi registration contribution rate 2026',
    'eobi and pessi both mandatory',
    'benazir mazdur card sessi',
    'kp essi bessi difference',
    'social security hospital card pakistan',
  ],
  openGraph: {
    title: 'PESSI & SESSI vs EOBI Difference 2026: Healthcare vs Pension Schemes in Pakistan',
    description:
      'Demystifying Pakistani labor social security: EOBI handles lifelong retirement pensions while PESSI and SESSI provide free hospitals and injury benefits. Discover employer obligations and worker entitlements.',
    url: 'https://www.pakistaninfohub.com/welfare/pessi-sessi-vs-eobi-difference-registration-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/welfare/pessi-sessi-vs-eobi-difference-registration-2026',
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
          name: 'Social Welfare & Relief',
          item: 'https://www.pakistaninfohub.com/welfare',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'PESSI & SESSI vs EOBI Difference & Registration 2026',
          item: 'https://www.pakistaninfohub.com/welfare/pessi-sessi-vs-eobi-difference-registration-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'PESSI & SESSI vs EOBI Difference: Coverage, Contribution Rates & Dual Registration Guide (2026)',
      description:
        'A comprehensive legal and practical comparison between federal old-age pension (EOBI) and provincial employees social security institutions (PESSI, SESSI, KP ESSI, BESSI) in Pakistan.',
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
      datePublished: '2026-08-25',
      dateModified: '2026-09-04',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/welfare/pessi-sessi-vs-eobi-difference-registration-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How Employers & Workers Register and Verify EOBI & Social Security Status in Pakistan',
      description:
        'Step-by-step procedure for business establishment registration, worker enrollment, monthly payroll contribution remittance, and medical card / pension verification.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Employer Business Registration',
          text: 'Qualifying commercial or industrial establishments register simultaneously with EOBI (Form PR-01) and their provincial ESSI (PESSI Form R-1 or SESSI portal) within 30 days of hiring 5+ workers.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Register Individual Workers',
          text: 'Employer submits worker CNIC details to issue an EOBI Insured Person (IP) number (Form PE-01) and generates a provincial Social Security Registration Card (or digital Benazir Mazdur Card).',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Monthly Contribution Deposit',
          text: 'Employer deducts 1% from worker pay for EOBI and contributes 5% from employer funds (total 6% on minimum wage), while paying 6% employer-only contribution to PESSI/SESSI with zero worker deduction.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Worker Card Issuance',
          text: 'The worker receives their permanent lifelong EOBI IP number and their provincial Social Security Medical Card/smart card for immediate family medical coverage.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Benefit Claims & Online Verification',
          text: 'Workers verify their contribution track records on eobi.gov.pk or provincial portals, unlocking OPD treatment, surgeries, maternity allowances, and retirement pensions at age 60.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I need to register for both EOBI and PESSI/SESSI, or just one?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both are legally mandatory for qualifying private employers. EOBI and provincial ESSIs (PESSI in Punjab, SESSI in Sindh, KP ESSI, BESSI in Balochistan) operate under separate statutes. Registering for EOBI does NOT exempt an employer or employee from provincial social security, and vice versa. They serve completely distinct functions: EOBI provides retirement pensions, while PESSI/SESSI provides day-to-day healthcare, hospitalization, and workplace injury protection.',
          },
        },
        {
          '@type': 'Question',
          name: 'My employer says they already deduct for EOBI, so am I covered for hospital treatment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. EOBI does not operate hospitals and provides zero medical cover. If your employer only registers you with EOBI and fails to register you with PESSI (in Punjab) or SESSI (in Sindh), you and your dependents cannot receive free treatment, medications, or surgeries at Social Security Hospitals. Your employer must register you with both institutions.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I check if my employer actually registered me for both schemes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For EOBI, visit eobi.gov.pk under "Individual Information / Insured Person Details" and input your 13-digit CNIC to see your active registration and month-by-month payment history. For PESSI (Punjab), check your registration status or medical card via pessi.punjab.gov.pk or by presenting your CNIC at your nearest Social Security dispensary. For SESSI (Sindh), verify via sessi.gov.pk or your registered Benazir Mazdur Card.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens to my EOBI contributions and Social Security card if I switch jobs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your EOBI Insured Person (IP) Number is permanently tied to your CNIC and remains portable across your entire working lifetime. When you switch employers, simply provide your existing EOBI IP number to your new HR department so your pension months accumulate continuously. For PESSI/SESSI, your new employer must update your employer code on the provincial social security roll; your past medical entitlements remain within the province.',
          },
        },
        {
          '@type': 'Question',
          name: 'I work in Khyber Pakhtunkhwa or Balochistan — is there an equivalent to PESSI/SESSI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every province has its own independent Social Security Institution: Khyber Pakhtunkhwa operates KP ESSI (KP Employees Social Security Institution, kpssi.gov.pk), and Balochistan operates BESSI (Balochistan Employees Social Security Institution, bessi.gob.pk). Both institutions provide healthcare, maternity, and injury benefits to registered private workers under provincial labor enactments.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can self-employed, freelance, or informal workers voluntarily register for either scheme?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Historically, both EOBI and provincial ESSIs required employment in a formal registered enterprise with 5+ workers. However, recent regulatory pilots and digitization initiatives have created pathways for self-registration: EOBI permits voluntary insured person schemes for certain eligible individuals who pay both the employer and employee share directly. Provincial governments are also piloting universal worker registrations (such as the Benazir Mazdur Card in Sindh), though formal commercial payroll enrollment remains the standard route.',
          },
        },
      ],
    },
  ],
};

export default function PessiSessiVsEobiPage() {
  const breadcrumbs = [
    { nameEn: 'Social Welfare & Relief', nameUr: 'سوشل ویلفیئر و ریلیف', href: '/welfare' },
    { nameEn: 'EOBI vs PESSI & SESSI Guide 2026', nameUr: 'ای او بی آئی بمقابلہ سوشل سیکیورٹی گائیڈ' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans max-w-5xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header Section */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="LABOR SOCIAL SECURITY GUIDE" labelUr="لیبر سوشل سیکیورٹی رہنمائی" variant="seal" />
            <VerifiedBadge textEn="EOB ACT 1976 & PROVINCIAL ESSI ACTS" />
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white leading-tight">
            PESSI / SESSI vs EOBI Difference 2026: Coverage, Rates &amp; Registration
            <span className="block text-doc-brass text-lg sm:text-2xl mt-1 font-bold">
              ای او بی آئی بمقابلہ پیسی اور سیسی: پنشن، مفت علاج اور قانونی رجسٹریشن کا فرق
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            In Pakistan&apos;s private sector, workers and employers frequently confuse <strong>EOBI</strong> with 
            provincial social security institutions like <strong>PESSI (Punjab)</strong> and <strong>SESSI (Sindh)</strong>. 
            They are neither competitors nor interchangeable alternatives. Both are legally mandatory under separate 
            statutes—one protects your retirement, while the other protects your health today.
          </p>
        </header>

        {/* Direct Answer Box (40-60 words concise summary) */}
        <DirectAnswerBox
          topicTitleEn="Are EOBI and PESSI / SESSI the Same Thing, and Which One Is Mandatory?"
          topicTitleUr="کیا ای او بی آئی اور پیسی یا سیسی ایک ہی ادارہ ہیں اور کون سا لازمی ہے؟"
          answerEn="EOBI is federal and provides monthly retirement pensions, while PESSI (Punjab) and SESSI (Sindh) are provincial and provide free medical treatment and injury coverage at Social Security Hospitals. They are two separate, both-mandatory statutory schemes: employers with 5 or more workers must enroll staff in both simultaneously, not pick between them."
          answerUr="ای او بی آئی وفاقی ادارہ ہے جو ریٹائرمنٹ پر تاحیات پنشن فراہم کرتا ہے، جبکہ پیسی اور سیسی صوبائی ادارے ہیں جو سوشل سیکیورٹی ہسپتالوں میں مفت علاج و ادویات دیتے ہیں۔ یہ دونوں الگ الگ اور بیک وقت قانونی طور پر لازمی ہیں۔ پانچ یا زائد ملازمین رکھنے والے ہر ادارے پر دونوں میں رجسٹریشن لازمی ہے۔"
        />

        {/* Critical Alert Callout */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800/60 space-y-2">
          <div className="flex items-center gap-2.5 text-amber-900 dark:text-amber-300 font-serif font-bold text-sm sm:text-base">
            <ShieldAlert className="w-5 h-5 flex-shrink-0 text-amber-700 dark:text-amber-400" />
            <span>The Number One Myth: &quot;My Company Deducts EOBI, So I Have Hospital Coverage&quot;</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-7">
            This is completely false. EOBI does <strong>not</strong> operate clinics, dispense prescription medicines, or cover surgeries. 
            If you fall ill, sustain a workplace injury, or require maternity admission, EOBI provides <strong>zero healthcare</strong>. 
            Medical benefits require active enrollment in your provincial institution (PESSI in Punjab, SESSI in Sindh, KP ESSI in KP, or BESSI in Balochistan). 
            Similarly, provincial social security institutions will <strong>never pay you a monthly old-age pension</strong> when you retire at age 60.
          </p>
        </div>

        {/* Side-by-Side ComparisonVisual */}
        <ComparisonVisual
          titleEn="EOBI vs PESSI &amp; SESSI: Core Structural Differences"
          titleUr="ای او بی آئی بمقابلہ پیسی و سیسی: بنیادی فرق کا موازنہ"
          subtitleEn="Comparing legal authority, primary benefits, monthly contribution shares, and portals"
          subtitleUr="قانونی دائرہ کار، بنیادی فوائد، ماہانہ کٹوتی اور تصدیقی پورٹلز کا تقابل"
          items={[
            {
              titleEn: 'EOBI (Employees’ Old-Age Benefits Institution)',
              titleUr: 'ای او بی آئی (وفاقی پنشن ادارہ)',
              subtitleEn: 'Federal Pension & Old-Age Security System',
              subtitleUr: 'وفاقی پنشن اور بڑھاپے کا تحفظ',
              badgeEn: 'FEDERAL PENSION',
              badgeUr: 'وفاقی پنشن',
              badgeVariant: 'seal',
              recommendedForEn: 'Long-term financial security for private workers after age 60',
              recommendedForUr: 'پرائیویٹ ملازمین کے لیے 60 سال کی عمر کے بعد تاحیات پنشن',
              isPopular: true,
              features: [
                {
                  labelEn: 'Jurisdiction Level',
                  labelUr: 'دائرہ اختیار',
                  valueEn: 'Federal (All Pakistan territory)',
                  valueUr: 'وفاقی (تمام پاکستان)',
                  isPositive: true,
                },
                {
                  labelEn: 'Primary Entitlement',
                  labelUr: 'بنیادی فائدہ',
                  valueEn: 'Old-age pension, survivor widow pension, invalidity grant',
                  valueUr: 'ماہانہ پنشن، بیوہ پنشن اور معذوری گرانٹ',
                  isPositive: true,
                },
                {
                  labelEn: 'Healthcare & Hospital Cover',
                  labelUr: 'ہسپتال اور علاج کی سہولت',
                  valueEn: 'None (Zero medical treatment or hospital facilities)',
                  valueUr: 'کوئی نہیں (ہسپتال یا علاج نہیں ملتا)',
                  isPositive: false,
                },
                {
                  labelEn: 'Contribution Rate (Statutory)',
                  labelUr: 'ماہانہ فنڈ شرح',
                  valueEn: '5% employer + 1% employee (Total 6% on notified minimum wage)',
                  valueUr: '5 فیصد آجر + 1 فیصد ملازم (کم از کم اجرت پر)',
                  isPositive: true,
                },
                {
                  labelEn: 'Governing Legislation',
                  labelUr: 'متعلقہ قانون',
                  valueEn: 'Employees’ Old-Age Benefits Act 1976',
                  valueUr: 'ایمپلائز اولڈ ایج بینیفٹس ایکٹ 1976',
                },
                {
                  labelEn: 'Worker Identifier',
                  labelUr: 'ملازم شناختی کارڈ',
                  valueEn: 'Permanent EOBI Insured Person (IP) Number (Lifelong)',
                  valueUr: 'مستقل ای او بی آئی آئی پی نمبر',
                  isPositive: true,
                },
                {
                  labelEn: 'Official Verification Portal',
                  labelUr: 'سرکاری پورٹل',
                  valueEn: 'eobi.gov.pk (Individual Information / IP Details)',
                  valueUr: 'eobi.gov.pk',
                },
              ],
            },
            {
              titleEn: 'PESSI / SESSI (Provincial Social Security)',
              titleUr: 'پیسی اور سیسی (صوبائی سوشل سیکیورٹی)',
              subtitleEn: 'Provincial Healthcare, Injury & Maternity System',
              subtitleUr: 'صوبائی علاج، حادثات اور زچگی کا تحفظ',
              badgeEn: 'PROVINCIAL HEALTHCARE',
              badgeUr: 'صوبائی علاج',
              badgeVariant: 'emerald',
              recommendedForEn: 'Immediate medical treatment, maternity care, and workplace accident protection',
              recommendedForUr: 'فوری مفت علاج، زچگی الاؤنس اور کام کے دوران حادثات کا تحفظ',
              isPopular: true,
              features: [
                {
                  labelEn: 'Jurisdiction Level',
                  labelUr: 'دائرہ اختیار',
                  valueEn: 'Provincial (Punjab: PESSI, Sindh: SESSI, KP: ESSI, Balochistan: BESSI)',
                  valueUr: 'صوبائی (پنجاب، سندھ، کے پی اور بلوچستان)',
                  isPositive: true,
                },
                {
                  labelEn: 'Primary Entitlement',
                  labelUr: 'بنیادی فائدہ',
                  valueEn: 'Free medical care at Social Security Hospitals, cash sickness, injury, death grant',
                  valueUr: 'ہسپتالوں میں مفت علاج، ادویات، بیماری و زچگی الاؤنس اور کفن دفن گرانٹ',
                  isPositive: true,
                },
                {
                  labelEn: 'Retirement Old-Age Pension',
                  labelUr: 'ریٹائرمنٹ پر ماہانہ پنشن',
                  valueEn: 'None (Does not pay monthly lifelong old-age pension)',
                  valueUr: 'کوئی نہیں (ریٹائرمنٹ پر ماہانہ پنشن نہیں ملتی)',
                  isPositive: false,
                },
                {
                  labelEn: 'Contribution Rate (Statutory)',
                  labelUr: 'ماہانہ فنڈ شرح',
                  valueEn: '6% of notified minimum wage — PAID BY EMPLOYER ONLY (0% from worker)',
                  valueUr: '6 فیصد مکمل طور پر مالک ادا کرتا ہے (ملازم سے 0 کٹوتی)',
                  isPositive: true,
                },
                {
                  labelEn: 'Governing Legislation',
                  labelUr: 'متعلقہ قانون',
                  valueEn: 'Provincial Employees Social Security Ordinance 1965 / Sindh Act 2016',
                  valueUr: 'پنجاب آرڈیننس 1965 / سندھ ایکٹ 2016',
                },
                {
                  labelEn: 'Worker Identifier',
                  labelUr: 'ملازم شناختی کارڈ',
                  valueEn: 'Social Security Medical Card / Benazir Mazdur Card (with NADRA)',
                  valueUr: 'سوشل سیکیورٹی میڈیکل کارڈ / بینظیر مزدور کارڈ',
                  isPositive: true,
                },
                {
                  labelEn: 'Official Verification Portal',
                  labelUr: 'سرکاری پورٹل',
                  valueEn: 'pessi.punjab.gov.pk (Punjab) / sessi.gov.pk (Sindh)',
                  valueUr: 'صوبائی سرکاری پورٹلز',
                },
              ],
            },
          ]}
        />

        {/* Section 2: Detailed Contribution Rates & Transparent Breakdown */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Coins className="w-6 h-6 text-doc-brass" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Contribution Rates, Payroll Deductions &amp; Minimum Wage Base
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            One of the most exploited loopholes in private companies is employers deducting arbitrary percentages 
            from workers&apos; gross salaries under the guise of &quot;government social security.&quot; 
            Here is the strict statutory calculation you need to know:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans">
            {/* EOBI Breakdown Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                <span className="font-serif font-bold text-base text-doc-seal">EOBI Payroll Formula</span>
                <span className="px-2 py-0.5 rounded-full bg-doc-seal/10 text-doc-seal font-mono text-xs font-bold">Total 6%</span>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Employee Share:</strong> Exactly 1% of the government-notified minimum wage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Employer Share:</strong> Exactly 5% of the government-notified minimum wage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Not on Gross Salary:</strong> If your monthly salary is PKR 90,000, your EOBI deduction is NOT calculated on PKR 90,000. It is calculated strictly on the statutory minimum wage base.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-doc-brass mt-0.5 flex-shrink-0" />
                  <span><strong>Current 2025–2026 Estimate:</strong> At a standard minimum wage of PKR 40,000/month, the employee deduction is <strong>PKR 400/month</strong>, and the employer pays <strong>PKR 2,000/month</strong> (total monthly deposit: PKR 2,400).</span>
                </li>
              </ul>
            </div>

            {/* PESSI / SESSI Breakdown Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                <span className="font-serif font-bold text-base text-emerald-700 dark:text-emerald-400">PESSI / SESSI Payroll Formula</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-600/10 text-emerald-600 font-mono text-xs font-bold">Employer Only</span>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Employee Share:</strong> <strong>0% (Zero).</strong> By law, employers cannot deduct a single rupee from worker salary for provincial social security.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Employer Share:</strong> 6% paid entirely by the employer (SESSI confirmed via Sindh Act 2016 Section 20; PESSI follows the standard 6% employer contribution model).</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Illegal Salary Deductions:</strong> If your monthly payslip shows a line item &quot;PESSI Deduction: Rs. 1,500&quot; taken from your salary, your employer is violating provincial labor law.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-doc-brass mt-0.5 flex-shrink-0" />
                  <span><strong>Monthly Deposit:</strong> On a PKR 40,000 base, the employer deposits <strong>PKR 2,400/month</strong> directly to the provincial social security treasury for your healthcare card.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Honest Note on Provincial Wage Divergence */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2 font-bold text-doc-ink dark:text-white">
              <Scale className="w-4 h-4 text-doc-brass" />
              <span>Honest Transparency Note on Minimum Wage &amp; Contribution Ceilings:</span>
            </div>
            <p>
              Under Pakistan&apos;s 18th Constitutional Amendment, labor and minimum wage are provincial subjects. 
              While recent budget cycles (2024–2026) saw federal and provincial minimum wages converge around 
              <strong> PKR 40,000 per month</strong> across Islamabad (ICT), Punjab, Sindh, and Khyber Pakhtunkhwa, 
              each provincial Minimum Wages Board issues independent gazette notifications. 
              Furthermore, provincial institutions enforce varying &quot;wage ceilings&quot; (for example, PESSI historically covered employees 
              earning up to a notified wage ceiling, though contributions are calculated on the minimum statutory wage). 
              Always verify the latest gazette notification applicable to your specific province on <code>pessi.punjab.gov.pk</code> or <code>sessi.gov.pk</code>.
            </p>
          </div>
        </section>

        {/* ProcessStepsDiagram: Complete 5-Step Lifecycle */}
        <ProcessStepsDiagram
          titleEn="How Dual Registration Works: From Employer Onboarding to Worker Claims"
          titleUr="ملازم اور ادارے کی رجسٹریشن کا مرحلہ وار طریقہ کار"
          subtitleEn="The chronological journey of compliant business enrollment, contribution deposits, and benefit usage"
          subtitleUr="کمپنی رجسٹریشن، ماہانہ ادائیگی، میڈیکل کارڈ کے اجرا اور فوائد کے حصول کے مراحل"
          badgeEn="DUAL COMPLIANCE WORKFLOW"
          badgeUr="قانونی مراحل"
          variant="dark"
          steps={[
            {
              stepNumber: 1,
              titleEn: 'Employer Business Registration',
              titleUr: 'کاروباری ادارے کی رجسٹریشن',
              descEn: 'Any enterprise employing 5 or more persons is legally mandated to register with EOBI (using Form PR-01) and with the respective provincial ESSI (PESSI Form R-1 or SESSI portal) within 30 days.',
              descUr: 'پانچ یا زائد ملازمین رکھنے والا ہر ادارہ 30 دن کے اندر ای او بی آئی اور صوبائی سوشل سیکیورٹی میں بزنس رجسٹر کروانے کا پابند ہے۔',
              badgeEn: 'Threshold: 5+ Workers',
              badgeUr: 'کم از کم 5 ملازمین',
            },
            {
              stepNumber: 2,
              titleEn: 'Individual Worker Enrollment',
              titleUr: 'ملازمین کا انفرادی اندراج',
              descEn: 'The employer registers each employee by submitting their 13-digit CNIC. EOBI generates a permanent Insured Person (IP) number (Form PE-01). The provincial ESSI creates a medical file for the worker and their family.',
              descUr: 'مالک ہر ملازم کا شناختی کارڈ جمع کروا کر ای او بی آئی آئی پی نمبر اور صوبائی سوشل سیکیورٹی میڈیکل فائل جاری کرواتا ہے۔',
              badgeEn: 'CNIC Submission',
              badgeUr: 'شناختی کارڈ ضروری',
            },
            {
              stepNumber: 3,
              titleEn: 'Monthly Contribution Deposit',
              titleUr: 'ماہانہ فنڈز کی بینک ادائیگی',
              descEn: 'By the 15th of each month, the employer generates electronic payment challans: 5% employer + 1% worker for EOBI, and 6% employer-only for PESSI/SESSI, deposited via National Bank (NBP) or 1Link.',
              descUr: 'ہر ماہ کی 15 تاریخ تک ای او بی آئی اور سوشل سیکیورٹی کے چالان بینک یا ون لنک کے ذریعے جمع کروائے جاتے ہیں۔',
              badgeEn: 'Monthly by 15th',
              badgeUr: 'ماہانہ چالان',
            },
            {
              stepNumber: 4,
              titleEn: 'Worker Receives Registration Cards',
              titleUr: 'سوشل سیکیورٹی کارڈ کا اجرا',
              descEn: 'Workers are issued their permanent EOBI registration certificate and their provincial Social Security Medical Card (or Sindh’s digitized Benazir Mazdur Card built with NADRA) for treatment.',
              descUr: 'ملازم کو ای او بی آئی نمبر اور ہسپتال سے علاج کے لیے سوشل سیکیورٹی کارڈ یا بینظیر مزدور کارڈ مل جاتا ہے۔',
              badgeEn: 'Medical Card Issued',
              badgeUr: 'کارڈ وصولی',
            },
            {
              stepNumber: 5,
              titleEn: 'Verification & Claiming Benefits',
              titleUr: 'تصدیق اور فوائد کا استعمال',
              descEn: 'Workers verify their contribution track record on eobi.gov.pk. Immediate medical care, free lab tests, and medicines are claimed at ESSI hospitals, while monthly pension starts at age 60.',
              descUr: 'ملازم پورٹل پر اپنا ریکارڈ چیک کرتا ہے۔ بیماری پر فوری مفت علاج اور 60 سال کی عمر پر تاحیات پنشن حاصل کی جاتی ہے۔',
              badgeEn: 'Lifelong Protection',
              badgeUr: 'مستقل تحفظ',
            },
          ]}
        />

        {/* Section 3: Employer & Worker Checklists */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-doc-brass" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Compliance Checklist: Who Must Register &amp; How Workers Check
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Employer Checklist */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-doc-seal font-serif font-bold text-lg border-b border-slate-100 dark:border-slate-800 pb-2">
                <Building2 className="w-5 h-5" />
                <span>For Business Owners &amp; Employers</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>The 5+ Employee Trigger:</strong> Under Section 1(4) of the EOB Act 1976 and provincial social security laws, any factory, office, shop, or commercial establishment with <strong>5 or more employees</strong> is legally required to register.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Once Covered, Always Covered:</strong> If your company employed 7 staff members and registered, and later downsizes to 3 staff members, your establishment <em>remains legally covered</em> under EOBI law.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Dual Registration is Mandatory:</strong> You cannot tell a labor inspector &quot;we registered with EOBI so we skipped PESSI.&quot; Defaulting on provincial social security invites recovery notices, bank account attachment, and fines under provincial labor enactments.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Strict Deduction Cap:</strong> Employers cannot deduct the 6% PESSI share from workers. Only 1% for EOBI may be deducted from the employee.
                  </span>
                </li>
              </ul>
            </div>

            {/* Worker Checklist */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-serif font-bold text-lg border-b border-slate-100 dark:border-slate-800 pb-2">
                <Stethoscope className="w-5 h-5" />
                <span>For Private-Sector Workers &amp; Labor</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Check EOBI by CNIC:</strong> You do not need to ask your manager if they pay your pension. Go directly to <code>eobi.gov.pk</code> &gt; Individual Information &gt; Insured Person Details, and enter your 13-digit CNIC to see all contributed months.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Demand Your Social Security Card:</strong> Your employer must provide you with a Social Security Medical Card (R-5 Card in Punjab) or a Benazir Mazdur Card (Sindh). This card covers you, your spouse, and dependent children.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Portability When Switching Jobs:</strong> When changing jobs, always hand your permanent EOBI IP number to your new employer. Your pension contribution counter must not restart from zero.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Audit Payslip Deductions:</strong> Look at your monthly salary slip. If the deduction exceeds 1% of statutory minimum wage (approx. PKR 400/month), request clarification from payroll immediately.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Provincial Institutions Directory */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-doc-brass" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Provincial Social Security Directory: Portals, Status &amp; Digitization
            </h2>
          </div>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-xs sm:text-sm font-sans min-w-[620px]">
                <thead className="bg-doc-ink text-white text-[11px] font-mono uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 text-left">Province &amp; Institution</th>
                    <th className="px-4 py-3 text-left">Governing Law</th>
                    <th className="px-4 py-3 text-left">Hospital Network &amp; Coverage</th>
                    <th className="px-4 py-3 text-left">Digitization / Card Status</th>
                    <th className="px-4 py-3 text-right">Official Portal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                  <tr>
                    <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">
                      Punjab: PESSI
                      <span className="block text-xs font-normal text-slate-500">Punjab Employees Social Security Institution</span>
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">PESS Ordinance 1965</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">20+ Social Security Hospitals, 200+ dispensaries across Punjab</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
                        Active Online E-Payment &amp; Smart Cards
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <a href="https://pessi.punjab.gov.pk" target="_blank" rel="noopener noreferrer" className="text-doc-seal hover:underline font-mono text-xs flex items-center justify-end gap-1">
                        pessi.punjab.gov.pk <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">
                      Sindh: SESSI
                      <span className="block text-xs font-normal text-slate-500">Sindh Employees&apos; Social Security Institution</span>
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Sindh ESS Act 2016 (Sec. 20)</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Major teaching hospitals in Karachi, Hyderabad, Kotri, Sukkur</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                        Benazir Mazdur Card (NADRA Smart Card)
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <a href="https://sessi.gov.pk" target="_blank" rel="noopener noreferrer" className="text-doc-seal hover:underline font-mono text-xs flex items-center justify-end gap-1">
                        sessi.gov.pk <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">
                      KP: KP ESSI
                      <span className="block text-xs font-normal text-slate-500">Khyber Pakhtunkhwa ESSI</span>
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">KP PESS Act &amp; Rules</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Hospitals &amp; medical units in Peshawar, Hattar, Gadoon industrial areas</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
                        Semi-Digital / Industrial Rollout
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <a href="https://kpssi.gov.pk" target="_blank" rel="noopener noreferrer" className="text-doc-seal hover:underline font-mono text-xs flex items-center justify-end gap-1">
                        kpssi.gov.pk <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-doc-ink dark:text-white">
                      Balochistan: BESSI
                      <span className="block text-xs font-normal text-slate-500">Balochistan ESSI</span>
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Balochistan PESS Enactments</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Facilities in Quetta and Hub Industrial Trading Estate (HITE)</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300">
                        Manual &amp; District Registration
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <a href="https://bessi.gob.pk" target="_blank" rel="noopener noreferrer" className="text-doc-seal hover:underline font-mono text-xs flex items-center justify-end gap-1">
                        bessi.gob.pk <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1.5">
            <strong className="text-doc-ink dark:text-white flex items-center gap-1.5">
              <Info className="w-4 h-4 text-blue-600" />
              Progress of Sindh&apos;s Benazir Mazdur Card (NADRA Digitization):
            </strong>
            <p>
              SESSI partnered with NADRA to launch the <strong>Benazir Mazdur Card (BMC)</strong>, designed to eliminate 
              counterfeit paper medical vouchers by linking worker identities to biometric NADRA chip cards. 
              While successfully deployed across Karachi, Nooriabad, and major industrial belts, please note that small enterprises 
              in interior Sindh may still issue standard green paper registration cards while phased digital biometric onboarding continues.
            </p>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 5: Cross-Linking & Related Welfare Navigation */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-doc-brass" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Related Welfare, Pension &amp; Healthcare Guides on Pakistan Info Hub
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/welfare/eobi-pension-check-cnic-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-seal font-bold uppercase block">Interactive Helper</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1 flex items-center justify-between">
                EOBI Pension Check by CNIC 2026
                <ArrowRight className="w-4 h-4 text-doc-brass group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Verify insured person records, contribution history, and minimum pension rates (Rs. 10,000–11,500).
              </p>
            </Link>

            <Link
              href="/welfare/bisp-eligibility-check-by-cnic"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Federal Welfare</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1 flex items-center justify-between">
                BISP 8171 Eligibility Check
                <ArrowRight className="w-4 h-4 text-doc-brass group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Check family poverty score and quarterly Benazir Kafaalat financial assistance status online.
              </p>
            </Link>

            <Link
              href="/welfare/sehat-card-eligibility-checker-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-emerald-600 font-bold uppercase block">Universal Healthcare</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1 flex items-center justify-between">
                Sehat Card Eligibility by CNIC
                <ArrowRight className="w-4 h-4 text-doc-brass group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Explore provincial universal health insurance coverage across Punjab, KP, Balochistan, and ICT.
              </p>
            </Link>
          </div>
        </section>

        {/* Section 6: FAQ Accordion Visual */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (PESSI, SESSI &amp; EOBI Distinction)"
          titleUr="عام طور پر پوچھے جانے والے ضروری سوالات اور وضاحتیں"
          subtitleEn="Clear, honest answers addressing workplace registrations, salary cuts, and benefit claims"
          subtitleUr="ملازمت کے دوران سوشل سیکیورٹی، پنشن اور تنخواہ کی کٹوتی سے متعلق مستند جوابات"
          items={[
            {
              questionEn: 'Do I need to register for both EOBI and PESSI/SESSI, or just one?',
              questionUr: 'کیا مجھے ای او بی آئی اور سوشل سیکیورٹی دونوں میں رجسٹر ہونا ہوگا یا کسی ایک میں؟',
              answerEn: 'Both are legally mandatory for qualifying private employers. EOBI and provincial ESSIs (PESSI in Punjab, SESSI in Sindh, KP ESSI, BESSI in Balochistan) operate under separate statutes. Registering for EOBI does NOT exempt an employer or employee from provincial social security, and vice versa. They serve completely distinct functions: EOBI provides retirement pensions, while PESSI/SESSI provides day-to-day healthcare, hospitalization, and workplace injury protection.',
              answerUr: 'دونوں میں رجسٹریشن قانونی طور پر لازمی ہے۔ ای او بی آئی وفاقی پنشن ادارہ ہے جبکہ صوبائی ادارے (پیسی یا سیسی) ہسپتالوں میں مفت علاج دیتے ہیں۔ ایک میں اندراج دوسرے سے مستثنیٰ نہیں کرتا۔',
            },
            {
              questionEn: 'My employer says they already pay EOBI — am I still covered for medical treatment?',
              questionUr: 'مالک کہتا ہے وہ ای او بی آئی ادا کر رہا ہے، تو کیا میرا ہسپتال کا علاج مفت ہوگا؟',
              answerEn: 'No. EOBI does not operate hospitals and provides zero medical cover. If your employer only registers you with EOBI and fails to register you with PESSI (in Punjab) or SESSI (in Sindh), you and your dependents cannot receive free treatment, medications, or surgeries at Social Security Hospitals. Your employer must register you with both institutions.',
              answerUr: 'ہرگز نہیں۔ ای او بی آئی کوئی ہسپتال نہیں چلاتا اور نہ ہی مفت دوائیں دیتا ہے۔ علاج اور زچگی کے لیے صوبائی سوشل سیکیورٹی (پیسی/سیسی) کا کارڈ ہونا لازمی ہے۔',
            },
            {
              questionEn: 'How do I check if my employer actually registered me for both schemes?',
              questionUr: 'میں کیسے چیک کروں کہ مالک نے مجھے دونوں جگہ رجسٹر کروایا ہے یا نہیں؟',
              answerEn: 'For EOBI, visit eobi.gov.pk under "Individual Information / Insured Person Details" and input your 13-digit CNIC to see your active registration and month-by-month payment history. For PESSI (Punjab), check your registration status or medical card via pessi.punjab.gov.pk or by presenting your CNIC at your nearest Social Security dispensary. For SESSI (Sindh), verify via sessi.gov.pk or your registered Benazir Mazdur Card.',
              answerUr: 'ای او بی آئی کے لیے eobi.gov.pk پر اپنا شناختی کارڈ نمبر لکھ کر مہینہ وار ریکارڈ دیکھیں۔ سوشل سیکیورٹی کے لیے قریبی ڈسپنسری سے کارڈ بنوائیں یا پورٹل پر چیک کریں۔',
            },
            {
              questionEn: 'What happens to my EOBI contributions and Social Security card if I switch jobs?',
              questionUr: 'اگر میں نوکری تبدیل کروں تو میرے پرانے فنڈز اور سوشل سیکیورٹی کارڈ کا کیا بنے گا؟',
              answerEn: 'Your EOBI Insured Person (IP) Number is permanently tied to your CNIC and remains portable across your entire working lifetime. When you switch employers, simply provide your existing EOBI IP number to your new HR department so your pension months accumulate continuously. For PESSI/SESSI, your new employer must update your employer code on the provincial social security roll; your past medical entitlements remain within the province.',
              answerUr: 'ای او بی آئی کا آئی پی نمبر زندگی بھر ایک ہی رہتا ہے، نئی کمپنی کو وہی نمبر دیں تاکہ پنشن کے ماہانہ فنڈز مسلسل جمع ہوتے رہیں۔ نئی کمپنی آپ کا سوشل سیکیورٹی کارڈ اپنے کوڈ پر ٹرانسفر کر دے گی۔',
            },
            {
              questionEn: 'I work in Khyber Pakhtunkhwa or Balochistan — is there an equivalent to PESSI/SESSI?',
              questionUr: 'میں کے پی یا بلوچستان میں کام کرتا ہوں، کیا وہاں بھی پیسی یا سیسی جیسا کوئی ادارہ ہے؟',
              answerEn: 'Yes. Every province has its own independent Social Security Institution: Khyber Pakhtunkhwa operates KP ESSI (KP Employees Social Security Institution, kpssi.gov.pk), and Balochistan operates BESSI (Balochistan Employees Social Security Institution, bessi.gob.pk). Both institutions provide healthcare, maternity, and injury benefits to registered private workers under provincial labor enactments.',
              answerUr: 'جی ہاں، کے پی میں خیبر پختونخوا ایمپلائز سوشل سیکیورٹی (KP ESSI) اور بلوچستان میں (BESSI) کام کر رہے ہیں جو اپنے ہسپتالوں میں مفت علاج مہیا کرتے ہیں۔',
            },
            {
              questionEn: 'Can self-employed, freelance, or informal workers register for either scheme?',
              questionUr: 'کیا فری لانسرز، دیہاڑی دار یا اپنا کام کرنے والے افراد ان سکیموں میں شامل ہو سکتے ہیں؟',
              answerEn: 'Historically, both EOBI and provincial ESSIs required employment in a formal registered enterprise with 5+ workers. However, recent regulatory pilots and digitization initiatives have created pathways for self-registration: EOBI permits voluntary insured person schemes for certain eligible individuals who pay both the employer and employee share directly. Provincial governments are also piloting universal worker registrations (such as the Benazir Mazdur Card in Sindh), though formal commercial payroll enrollment remains the standard route.',
              answerUr: 'روایتی طور پر یہ سکیمیں کمپنیوں کے ملازمین کے لیے ہیں۔ البتہ ای او بی آئی میں رضاکارانہ طور پر دونوں حصے خود ادا کر کے شامل ہوا جا سکتا ہے، اور سندھ میں بینظیر مزدور کارڈ کے دائرہ کار کو آزاد مزدوروں تک بڑھایا جا رہا ہے۔',
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1.5 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Statutory Authorities &amp; Acts Cited:</p>
          {[
            { label: 'Employees’ Old-Age Benefits Act 1976 (Federal Legislation)', url: 'https://pakistancode.gov.pk/' },
            { label: 'Employees’ Old-Age Benefits Institution (EOBI Official Portal)', url: 'https://www.eobi.gov.pk/' },
            { label: 'Punjab Employees Social Security Institution (PESSI)', url: 'https://pessi.punjab.gov.pk/' },
            { label: 'Sindh Employees’ Social Security Institution (SESSI Official Portal)', url: 'https://sessi.gov.pk/' },
            { label: 'Khyber Pakhtunkhwa Employees Social Security Institution (KP ESSI)', url: 'https://kpssi.gov.pk/' },
            { label: 'Balochistan Employees’ Social Security Institution (BESSI)', url: 'https://bessi.gob.pk/' },
          ].map((src) => (
            <a
              key={src.url}
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-doc-seal transition-colors"
            >
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
              {src.label}: <span className="font-mono">{src.url}</span>
            </a>
          ))}
        </section>
      </div>
    </>
  );
}
