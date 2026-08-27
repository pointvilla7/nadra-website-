import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ComparisonVisual, ProcessStepsDiagram, FAQAccordionVisual } from '@/components/visuals';
import {
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  Scale,
  FileText,
  Building2,
  Check,
  AlertCircle,
  FileCheck,
  HeartCrack,
  UserCheck,
  Building
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Talaq and Khula Legal Process in Pakistan 2026: Union Council Notice & NADRA Rules | Pakistan Info Hub',
  description:
    'Authoritative, neutral legal guide to Talaq and Khula dissolution in Pakistan under the Muslim Family Laws Ordinance 1961 (Section 7) and Family Courts Act 1964: Written Union Council notice, 90-day arbitration waiting period, court decrees, and mandatory NADRA marital status updates.',
  keywords: [
    'talaq legal process Pakistan 2026 union council notice',
    'khula legal procedure family court decree Pakistan',
    'Section 7 Muslim Family Laws Ordinance 1961 90 days',
    'certificate of dissolution of marriage union council Form C',
    'Supreme Court ruling triple talaq 90 days arbitration council',
    'how to update marital status divorced NADRA CNIC FRC',
    'verbal talaq legal status Pakistan court precedent',
  ],
  openGraph: {
    title: 'Talaq & Khula Legal Process in Pakistan 2026: UC Notice & NADRA Update',
    description:
      'Neutral, factual civic guide to legal marriage dissolution: Section 7 MFLO 1961 written notice, 90-day arbitration, Khula decrees, and NADRA updates.',
    url: 'https://www.pakistaninfohub.com/family-registration/talaq-khula-legal-process-pakistan-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/family-registration/talaq-khula-legal-process-pakistan-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Marriage & Family Registration', item: 'https://www.pakistaninfohub.com/family-registration' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Talaq & Khula Legal Process 2026',
          item: 'https://www.pakistaninfohub.com/family-registration/talaq-khula-legal-process-pakistan-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Talaq and Khula Legal Process in Pakistan: Section 7 MFLO 1961, 90-Day Arbitration & NADRA Updates',
      description:
        'A neutral, factual legal guide explaining the statutory requirements for divorce and marriage dissolution in Pakistan under the Muslim Family Laws Ordinance 1961 and Family Courts Act 1964.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/family-registration/talaq-khula-legal-process-pakistan-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does a verbal pronouncement of Talaq alone legally end a marriage in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Under Section 7 of the Muslim Family Laws Ordinance (MFLO) 1961, a verbal pronouncement of Talaq has no legal effect in civil law unless the husband delivers written notice to the Chairman of the local Union Council (where the wife resides) with a copy delivered to the wife. The marriage legally continues until the 90-day Union Council process concludes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a Talaq be revoked during the 90-day Union Council waiting period?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The 90-day statutory period is specifically designed to allow reconciliation. The husband may revoke the Talaq (expressly in writing to the Union Council or through reconciliation) at any point before the 90 days elapse, which cancels the proceedings and preserves the marriage.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if a husband refuses to pronounce Talaq when the wife wants a divorce?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If the husband refuses to grant a divorce, the wife has the legal right to file for Khula in the Family Court under the Family Courts Act 1964. Under established Supreme Court precedents, a wife cannot be forced to live in an irreconcilable marriage, and the court will grant a Khula decree (usually upon the wife relinquishing her prompt or deferred Mehr).',
          },
        },
        {
          '@type': 'Question',
          name: 'Does a Family Court Khula decree immediately finalize the legal divorce without the Union Council?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. A court decree of Khula must be transmitted to or submitted at the relevant local Union Council. The Union Council initiates its statutory reconciliation notices over the 90-day period before issuing the official computerized Certificate of Dissolution of Marriage.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do former spouses update their marital status on their NADRA CNIC after divorce?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Once the Union Council issues the computerized Certificate of Dissolution of Marriage (Form C), either party can visit any NADRA Registration Center (NRC) with their original CNIC and the divorce certificate to modify their marital status to \'Divorced\' and update their Family Registration Certificate (FRC).',
          },
        },
      ],
    },
  ],
};

export default function TalaqKhulaLegalProcessPage() {
  const breadcrumbs = [
    { nameEn: 'Marriage & Family Registration', nameUr: 'شادی و خاندانی اندراج' },
    { nameEn: 'Talaq & Khula Legal Process', nameUr: 'طلاق اور خلع کا قانونی طریقہ کار 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="FAMILY LAW CIVIC GUIDE" labelUr="مسلم فیملی لاز آرڈیننس" variant="seal" />
            <VerifiedBadge textEn="SECTION 7 MFLO 1961 COMPLIANT" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Talaq and Khula Legal Process in Pakistan: Union Council Notice &amp; NADRA Rules
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پاکستان میں طلاق اور خلع کا قانونی طریقہ کار: یونین کونسل نوٹس، 90 دن کی عدت اور نادرا ریکارڈ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            A neutral, factual public legal guide explaining how the legal dissolution of marriage works in Pakistan. Understand why
            a verbal pronouncement or a court decree alone is not legally complete until registered with the local Union Council,
            how the 90-day statutory arbitration period functions, and how to update official records with NADRA.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is Required for a Talaq or Khula to Be Legally Complete in Pakistan?"
          topicTitleUr="پاکستان میں طلاق یا خلع کو قانونی طور پر مکمل کرنے کے لیے کیا ضروری ہے؟"
          answerEn="Under Section 7 of the Muslim Family Laws Ordinance 1961, neither a verbal talaq nor a court decree alone completes a legal divorce. The husband (or wife with court decree) must submit written notice to the local Union Council, undergo a mandatory 90-day arbitration waiting period, obtain a Computerized Dissolution Certificate, and update their marital status with NADRA."
          answerUr="مسلم فیملی لاز آرڈیننس 1961 کے سیکشن 7 کے تحت صرف زبانی طلاق یا عدالت کی ڈگری سے طلاق قانونی طور پر مکمل نہیں ہوتی۔ متعلقہ یونین کونسل کو تحریری نوٹس دینا، 90 دن کا ثالثی پیریڈ مکمل کرنا، کمپیوٹرائزڈ طلاق سرٹیفکیٹ حاصل کرنا اور نادرا شناختی کارڈ پر ازدواجی حیثیت تبدیل کروانا لازمی ہے۔"
        />

        {/* Section 1: Step-by-Step Talaq Process (Husband-Initiated) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step: Talaq Legal Process (Section 7 MFLO 1961)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Written Notice to UC</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The husband delivers a formal <strong>written notice of Talaq</strong> to the Chairman of the Union Council where the wife resides, and sends a registered copy to the wife.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Arbitration Council</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Within 30 days of receiving the notice, the UC Chairman convenes an <strong>Arbitration Council</strong> requesting both parties to nominate representatives for reconciliation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">90-Day Waiting Period</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                A statutory <strong>90-day waiting period</strong> begins from the date the UC receives the notice. During this window, the husband can legally revoke the Talaq if reconciliation succeeds.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs">4</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Dissolution Certificate</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                If reconciliation fails and 90 days expire (or childbirth if pregnant), the UC issues the official barcoded <strong>Certificate of Dissolution of Marriage (Form C)</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Khula Process (Wife-Initiated via Court) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Building2 className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step: Khula Judicial Process (Family Courts Act 1964)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Plaint in Family Court</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The wife files a suit for dissolution of marriage by way of Khula in the local Family Court. Under Supreme Court precedent, she is generally required to relinquish her prompt or deferred Mehr (dower).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Pre-Trial Reconciliation &amp; Decree</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The Family Court holds a pre-trial reconciliation attempt. If the wife firmly asserts irreconcilable differences, the court is legally bound to grant a <strong>Khula Decree</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Transmission to Union Council</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The court decree is forwarded to the relevant Union Council. The UC serves reconciliation notices during the 90-day period before issuing the final official Dissolution Certificate.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Supreme Court Precedents & Legal Citations */}
        <section className="space-y-4">
          <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 font-sans text-xs">
            <div className="flex items-center gap-2 text-doc-brass font-bold text-sm">
              <Scale className="w-5 h-5 text-emerald-400" />
              <span>Key Supreme Court Precedents on Dissolution</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-slate-300">
              <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 space-y-1">
                <span className="font-bold text-emerald-400 block">Triple Talaq in One Sitting:</span>
                <p className="leading-relaxed">
                  The Supreme Court of Pakistan has repeatedly held that pronouncement of instant triple talaq in a single sitting takes effect only as a single revocable talaq, subject strictly to the 90-day Section 7 notice and arbitration process.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 space-y-1">
                <span className="font-bold text-emerald-400 block">Wife&apos;s Inherent Right to Khula:</span>
                <p className="leading-relaxed">
                  The superior judiciary has established that a wife cannot be forced into an unwanted union. Her clear, persistent statement of aversion in court is sufficient grounds for the judge to grant the Khula decree without the husband&apos;s consent.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 4: Mandatory Final Step - Updating NADRA Records */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <UserCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Mandatory Final Step: Updating Records with NADRA
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 font-sans text-xs">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Obtaining the Union Council dissolution certificate does NOT automatically update NADRA&apos;s centralized database. Both former spouses must complete this administrative step:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white block">1. Visit NADRA Center</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Visit any NADRA Registration Center (NRC) or Executive Center with the original UC Certificate of Dissolution.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white block">2. CNIC Marital Status Update</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Apply for a revised Smart CNIC / NICOP modifying marital status from &quot;Married&quot; to &quot;Divorced&quot; (or changing husband&apos;s name back to father&apos;s name if desired).
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white block">3. Family Tree (FRC) Delinking</span>
                <p className="text-slate-600 dark:text-slate-300">
                  The NADRA system delinks the former spouse from your marital Family Registration Certificate (FRC), preventing future civil disputes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Marriage &amp; Family Services on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/family-registration/nikah-nama-vs-marriage-certificate-mrc-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Marriage Registration</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Nikah Nama vs MRC Difference →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Understanding legal differences between manual Nikah Nama and NADRA MRC.</p>
            </Link>

            <Link
              href="/certificates/birth-certificate-union-council-online"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Verification Tool</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NADRA Marriage &amp; Union Council Certificates →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Verify computerized marriage registration and CRMS records.</p>
            </Link>

            <Link
              href="/nadra/family-registration-certificate"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Family Tree</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NADRA FRC Issuance Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Complete steps to issue and update family registration certificates.</p>
            </Link>
          </div>
        </section>

        {/* Comparison Visual: Talaq vs Khula */}
        <ComparisonVisual
          titleEn="Legal Comparison: Talaq (Husband) vs Khula (Wife) under Pakistani Law"
          titleUr="پاکستانی قانون کے تحت طلاق اور خلع کا قانونی موازنہ"
          subtitleEn="Governing legislation, initiating party, financial Mehr rules, and Union Council procedures"
          subtitleUr="مسلم فیملی لاز، فیملی کورٹ ڈگری، حق مہر اور یونین کونسل کے طریقہ کار کا فرق"
          items={[
            {
              titleEn: "Talaq (Initiated by Husband)",
              titleUr: "طلاق (شوہر کی جانب سے)",
              subtitleEn: "MFLO 1961 Section 7 Procedure",
              subtitleUr: "مسلم فیملی لاز آرڈیننس شق 7",
              badgeEn: "Husband Right",
              badgeUr: "شوہر کا حق",
              badgeVariant: "brass",
              pointsEn: [
                "Husband delivers signed written Talaq notice to local Union Council Chairman with copy to wife",
                "Husband remains legally obligated to pay unpaid prompt/deferred Haq Mehr and Iddat maintenance",
                "Arbitration Council convenes reconciliation sessions over a mandatory 90-day waiting period",
                "If reconciliation fails after 90 days, Union Council issues Certificate of Talaq Effectiveness"
              ],
              recommendedForEn: "When husband initiates legal separation under statutory Union Council procedure",
              recommendedForUr: "جب شوہر قانونی طور پر یونین کونسل کے ذریعے علیحدگی کا عمل شروع کرے"
            },
            {
              titleEn: "Khula (Initiated by Wife)",
              titleUr: "خلع (بیوی کی جانب سے عدالتی ڈگری)",
              subtitleEn: "Family Courts Act 1964 Judicial Decree",
              subtitleUr: "فیملی کورٹ ایکٹ 1964",
              badgeEn: "Wife Court Decree",
              badgeUr: "عدالتی ڈگری",
              badgeVariant: "seal",
              isPopular: true,
              pointsEn: [
                "Wife files suit for dissolution of marriage before a Family Court Judge on grounds of incompatibility",
                "Judge conducts pre-trial reconciliation; if unfeasible, passes a binding judicial decree of Khula",
                "Wife typically surrenders or returns part of her prompt/deferred Haq Mehr as ordered by court",
                "Court decree is forwarded to the Union Council for 90-day notification and CRMS digital certificate"
              ],
              recommendedForEn: "When wife seeks legal dissolution through Family Court where husband refuses consensual divorce",
              recommendedForUr: "جب شوہر طلاق نہ دے رہا ہو اور خاتون فیملی کورٹ سے قانونی علیحدگی چاہے"
            }
          ]}
        />

        {/* Process Flow Diagram */}
        <ProcessStepsDiagram
          titleEn="Step-by-Step Union Council Divorce & Dissolution Workflow"
          titleUr="یونین کونسل میں طلاق و خلع کے موثر ہونے کا 4 مرحلہ وار طریقہ کار"
          subtitleEn="Statutory timeline from initial notice / court decree to NADRA CRMS record update"
          subtitleUr="نوٹس کی ترسیل سے لے کر نادرا شناختی کارڈ میں ازدواجی حیثیت کی تبدیلی تک کے 4 مراحل"
          steps={[
            {
              number: 1,
              titleEn: "Written Notice / Court Decree",
              titleUr: "نوٹس یا عدالتی ڈگری کی ترسیل",
              descEn: "Husband submits written Talaq deed or wife submits certified Family Court Khula decree to the local Union Council.",
              descUr: "شوہر کی تحریری طلاق یا فیملی کورٹ کی خلع ڈگری متعلقہ یونین کونسل میں جمع کروائی جائے۔",
              tagEn: "Filing Notice",
              tagUr: "نوٹس کا اندراج",
            },
            {
              number: 2,
              titleEn: "Arbitration Council Setup",
              titleUr: "ثالثی کونسل کی تشکیل",
              descEn: "Chairman constitutes Arbitration Council and issues 3 statutory notices (30 days apart) to both parties for reconciliation.",
              descUr: "یونین کونسل چیئرمین ثالثی کونسل بنا کر دونوں فریقین کو صلح کے لیے 3 قانونی نوٹس بھیجتا ہے۔",
              tagEn: "Arbitration",
              tagUr: "ثالثی نوٹس",
            },
            {
              number: 3,
              titleEn: "90-Day Statutory Cooling Period",
              titleUr: "90 دن کی قانونی مدت",
              descEn: "Statutory 90-day waiting window to enable genuine reconciliation, during which the Talaq can be revoked.",
              descUr: "90 دن کا قانونی وقفہ جس کے دوران شوہر تحریری طور پر طلاق واپس لے کر صلح کر سکتا ہے۔",
              tagEn: "90 Days",
              tagUr: "عدت و صلح",
            },
            {
              number: 4,
              titleEn: "Certificate & NADRA Update",
              titleUr: "سرٹیفکیٹ اور نادرا تبدیلی",
              descEn: "Union Council issues computerized Certificate of Dissolution (Form C) to officially update marital status at NADRA.",
              descUr: "یونین کونسل کمپیوٹرائزڈ سرٹیفکیٹ جاری کرتی ہے جس کی بنیاد پر نادرا میں اسٹیٹس تبدیل ہوتا ہے۔",
              tagEn: "Certificate Form C",
              tagUr: "حتمی سرٹیفکیٹ",
            },
          ]}
        />

        {/* Section 6: FAQs */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Talaq & Khula Legal Process)"
          titleUr="طلاق اور خلع کے قانونی طریقہ کار کے متعلق عام سوالات"
          subtitleEn="Essential guidelines on verbal divorce, 90-day revocation, Mehr rules, and NADRA CNIC update"
          subtitleUr="زبانی طلاق کی قانونی حیثیت، 90 دن میں رجوع، حق مہر اور نادرا کارڈ تبدیلی کی تفصیلی معلومات"
          items={[
            {
              questionEn: "Does a verbal pronouncement of Talaq alone legally end a marriage in Pakistan?",
              questionUr: "کیا صرف زبانی طلاق سے پاکستان کے قانون میں شادی ختم ہو جاتی ہے؟",
              answerEn: "No. Under Section 7 of the Muslim Family Laws Ordinance (MFLO) 1961, a verbal pronouncement of Talaq has no legal effect in civil law unless the husband delivers written notice to the Chairman of the local Union Council (where the wife resides) with a copy delivered to the wife. The marriage legally continues until the 90-day Union Council process concludes.",
              answerUr: "نہیں، مسلم فیملی لاز آرڈیننس کے تحت زبانی طلاق قانونی طور پر نافذ نہیں ہوتی جب تک کہ یونین کونسل کو تحریری نوٹس نہ دیا جائے اور 90 دن کا قانونی عمل مکمل نہ ہو۔",
            },
            {
              questionEn: "Can a Talaq be revoked during the 90-day Union Council waiting period?",
              questionUr: "کیا 90 دن کے دوران طلاق واپس (رجوع) لی جا سکتی ہے؟",
              answerEn: "Yes. The 90-day statutory period is specifically designed to allow reconciliation. The husband may revoke the Talaq (expressly in writing to the Union Council or through reconciliation) at any point before the 90 days elapse, which cancels the proceedings and preserves the marriage.",
              answerUr: "جی ہاں! یہ 90 دن صلح کے لیے رکھے گئے ہیں۔ شوہر یونین کونسل کو تحریری مطلع کر کے طلاق واپس لے سکتا ہے اور نکاح بحال رہتا ہے۔",
            },
            {
              questionEn: "What happens if a husband refuses to pronounce Talaq when the wife wants a divorce?",
              questionUr: "اگر شوہر طلاق دینے سے انکار کرے تو خاتون کیا کر سکتی ہے؟",
              answerEn: "If the husband refuses to grant a divorce, the wife has the legal right to file for Khula in the Family Court under the Family Courts Act 1964. Under established Supreme Court precedents, a wife cannot be forced to live in an irreconcilable marriage, and the court will grant a Khula decree (usually upon the wife relinquishing her prompt or deferred Mehr).",
              answerUr: "خاتون فیملی کورٹ میں خلع کا دعویٰ دائر کر سکتی ہے۔ عدالت صلح نہ ہونے پر خلع کی ڈگری جاری کرتی ہے، جس میں عام طور پر حق مہر کی واپسی کا فیصلہ ہوتا ہے۔",
            },
            {
              questionEn: "Does a Family Court Khula decree immediately finalize the legal divorce without the Union Council?",
              questionUr: "کیا عدالتی خلع کے بعد بھی یونین کونسل جانا ضروری ہے؟",
              answerEn: "No. A court decree of Khula must be transmitted to or submitted at the relevant local Union Council. The Union Council initiates its statutory reconciliation notices over the 90-day period before issuing the official computerized Certificate of Dissolution of Marriage.",
              answerUr: "جی ہاں! عدالتی فیصلے کی تصدیق شدہ کاپی یونین کونسل میں جمع کروانا لازمی ہے جہاں سے 90 دن بعد نادرا کا باقاعدہ طلاق کا کمپیوٹرائزڈ سرٹیفکیٹ جاری ہوتا ہے۔",
            },
            {
              questionEn: "How do former spouses update their marital status on their NADRA CNIC after divorce?",
              questionUr: "طلاق کے بعد نادرا شناختی کارڈ میں ازدواجی حیثیت کیسے تبدیل کی جاتی ہے؟",
              answerEn: "Once the Union Council issues the computerized Certificate of Dissolution of Marriage (Form C), either party can visit any NADRA Registration Center (NRC) with their original CNIC and the divorce certificate to modify their marital status to 'Divorced' and update their Family Registration Certificate (FRC).",
              answerUr: "یونین کونسل کا جاری کردہ کمپیوٹرائزڈ سرٹیفکیٹ نادرا سنٹر لے جا کر شناختی کارڈ اور ایف آر سی میں ازدواجی حیثیت 'مطلقہ' اپ ڈیٹ کروائی جاتی ہے۔",
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Legal Sources Cited:</p>
          {[
            { label: 'Muslim Family Laws Ordinance 1961 (Section 7)', url: 'https://pakistancode.gov.pk/' },
            { label: 'Family Courts Act 1964 (Sections 10 & 14)', url: 'https://pakistancode.gov.pk/' },
            { label: 'Supreme Court of Pakistan Case Law Judgments', url: 'https://www.supremecourt.gov.pk/' },
            { label: 'National Database and Registration Authority (NADRA) Registration Manual', url: 'https://www.nadra.gov.pk/' },
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
