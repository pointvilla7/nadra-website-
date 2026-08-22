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
  Accessibility,
  Heart,
  Award,
  Building,
  Check,
  AlertCircle,
  PhoneCall,
  Home,
  FileCheck,
  GraduationCap,
  Plane,
  Briefcase
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disability Certificate & Special CNIC Guide 2026: NADRA Helpline 1777 & Benefits | Pakistan Info Hub',
  description:
    'Complete civic guide for persons with disabilities in Pakistan: How to obtain a Provincial Disability Certificate, apply for a NADRA Special CNIC (with wheelchair logo), request doorstep home registration via helpline 1777, and access 2-5% job quotas, travel discounts, and free healthcare.',
  keywords: [
    'NADRA Special CNIC apply online guide 2026',
    'provincial disability certificate Social Welfare Assessment Board',
    'NADRA disability helpline 1777 doorstep registration',
    'benefits of special CNIC with wheelchair logo Pakistan',
    'Sindh DEPD disability certificate process',
    'Punjab disability assessment board DHQ hospital',
    'employment quota persons with disabilities Pakistan',
  ],
  openGraph: {
    title: 'Disability Certificate & Special CNIC Guide 2026: Helpline 1777 & Benefits',
    description:
      'Step-by-step roadmap: Provincial Social Welfare medical assessment, NADRA Special CNIC issuance, doorstep service, and legal welfare rights.',
    url: 'https://www.pakistaninfohub.com/health/disability-certificate-special-cnic-apply-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/health/disability-certificate-special-cnic-apply-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Health & Sehat Card Hub', item: 'https://www.pakistaninfohub.com/health' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Disability Certificate & Special CNIC Guide 2026',
          item: 'https://www.pakistaninfohub.com/health/disability-certificate-special-cnic-apply-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Disability Certificate and Special CNIC Guide 2026: Medical Boards, NADRA 1777 & Benefits',
      description:
        'A comprehensive, dignified civic guide detailing the two-stage process of obtaining a provincial disability certificate and issuing a NADRA Special CNIC with priority processing and welfare entitlements.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/health/disability-certificate-special-cnic-apply-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the exact two-stage process to get a Special CNIC in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Stage 1: Appear before your District Disability Assessment Board (organized by the provincial Social Welfare Department / DEPD at DHQ/THQ hospitals) to receive an official Disability Certificate. Stage 2: Take the certificate to any NADRA Registration Center (or request home registration via helpline 1777) to issue a Special CNIC with the universal wheelchair insignia.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a bed-ridden or severely immobile person get a Special CNIC without traveling to NADRA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. NADRA provides a dedicated Doorstep Mobile Registration Service for bed-ridden and severely disabled individuals. Families can call the dedicated disability helpline at 1777 (or 051-111-786-100) to request an official Mobile Registration Unit (MRU) / Manpack team to visit their residence.',
          },
        },
        {
          '@type': 'Question',
          name: 'What key practical benefits does a NADRA Special CNIC provide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Special CNIC unlocks: 2% to 5% reserved employment quotas in public and private sectors, significant tuition fee concessions at colleges/universities, 50% discount on PIA domestic airfares and Pakistan Railways train tickets, free treatment at government hospitals, and priority access to social assistance programs (such as the Punjab Himmat Card).',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does the entire process take from medical board to card delivery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The total duration typically ranges from 4 to 12 weeks. Provincial medical assessment boards generally convene on fixed monthly or bi-weekly schedules, while NADRA processes the Special CNIC under priority Executive timelines once the certificate is lodged.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a government fee for issuing a Special CNIC at NADRA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'First-time registration for a Special CNIC is provided free of charge by NADRA for persons with disabilities, and applicants receive priority executive desk processing without paying premium surcharges.',
          },
        },
      ],
    },
  ],
};

export default function DisabilityCertificateSpecialCnicPage() {
  const breadcrumbs = [
    { nameEn: 'Health & Sehat Card Hub', nameUr: 'صحت و احساس پروگرام' },
    { nameEn: 'Special CNIC & Disability Guide', nameUr: 'معذور افراد سرٹیفکیٹ اور خصوصی شناختی کارڈ 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="CIVIC RIGHTS & ACCESSIBILITY" labelUr="حقوق برائے خصوصی افراد" variant="seal" />
            <VerifiedBadge textEn="NADRA & SOCIAL WELFARE COMPLIANT" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Disability Certificate &amp; Special CNIC Guide 2026: Helpline 1777 &amp; Benefits
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              معذور افراد کا میڈیکل سرٹیفکیٹ، نادرا خصوصی شناختی کارڈ اور حکومتی مراعات
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            A dignified, practical guide for persons with disabilities and their families in Pakistan. Navigate the two-stage
            process across provincial Social Welfare departments and NADRA, access priority executive registration, request
            doorstep home-service via helpline 1777, and unlock legally mandated welfare, job quotas, and travel benefits.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="How Do You Get a Disability Certificate & Special CNIC in Pakistan?"
          topicTitleUr="پاکستان میں معذوری سرٹیفکیٹ اور خصوصی شناختی کارڈ کیسے حاصل کریں؟"
          answerEn="The process requires two steps: (1) Obtain a Disability Certificate from your District Social Welfare Assessment Board at a government DHQ/THQ hospital, and (2) Apply for a Special CNIC (with wheelchair logo) at NADRA with free priority processing or call 1777 for doorstep home registration."
          answerUr="یہ دو مرحلہ عمل ہے: (1) ضلعی سوشل ویلفیئر اسیسمنٹ بورڈ (DHQ/THQ ہسپتال) سے معذوری کا تصدیقی سرٹیفکیٹ حاصل کریں، اور (2) سرٹیفکیٹ لے کر نادرا جائیں جہاں خصوصی کارڈ ترجیحی بنیادوں پر بنتا ہے، یا گھر بیٹھے بنوانے کے لیے ہیلپ لائن 1777 پر رابطہ کریں۔"
        />

        {/* Section 1: Stage 1 - Provincial Disability Certificate */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Building className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Stage 1: Obtaining the Provincial Disability Certificate
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 font-sans text-xs">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Disability assessment is a provincial subject. You must register with your relevant provincial authority:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="font-bold text-doc-ink dark:text-white text-sm block">Punjab, KP &amp; Balochistan</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Visit the <strong>District Social Welfare &amp; Bait-ul-Maal Office</strong>. They schedule an appointment before the Medical Assessment Board at the District Headquarter (DHQ) Hospital.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="font-bold text-doc-ink dark:text-white text-sm block">Sindh (DEPD Authority)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Operated under the <strong>Department for Empowerment of Persons with Disabilities (DEPD)</strong> and the Sindh PWD Protection Authority with dedicated district assessment centers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="font-bold text-doc-ink dark:text-white text-sm block">Islamabad (ICT)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Processed via the <strong>National Council for the Rehabilitation of Disabled Persons (NCRDP)</strong> and the Directorate of Special Education in G-8/4, Islamabad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Stage 2 - NADRA Special CNIC & Helpline 1777 */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Accessibility className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Stage 2: Special CNIC at NADRA &amp; Doorstep Registration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-seal text-sm block">In-Person at NADRA Centers</span>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-300 list-disc list-inside">
                <li>Bring original Disability Certificate, existing CNIC/B-Form, and parent/guardian CNIC.</li>
                <li>PWD applicants receive <strong>Executive / Priority Counter</strong> routing with zero waiting fee.</li>
                <li>The issued Smart CNIC features the <strong>Universal Wheelchair Insignia</strong> and lifetime validity.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-doc-brass font-bold text-sm">
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Doorstep Service via Helpline 1777</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                For bed-ridden or severely immobile individuals, dial <strong>1777</strong> (mobile) or <strong>051-111-786-100</strong>. NADRA will dispatch a Mobile Registration Unit (MRU) / Manpack team directly to your home for biometrics and photograph capture.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Concrete Benefits Unlocked */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Practical Legal Benefits Unlocked by the Special CNIC
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-sans">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <Briefcase className="w-5 h-5 text-doc-brass" />
              <span className="font-bold text-doc-ink dark:text-white block">2%–5% Job Quotas</span>
              <p className="text-slate-600 dark:text-slate-300">Mandatory reserved employment quota across all federal and provincial government departments.</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <Plane className="w-5 h-5 text-doc-seal" />
              <span className="font-bold text-doc-ink dark:text-white block">50% Travel Concessions</span>
              <p className="text-slate-600 dark:text-slate-300">50% discount on PIA domestic flights, 50% fare reduction on Pakistan Railways trains, and free public metro transit.</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <GraduationCap className="w-5 h-5 text-emerald-600" />
              <span className="font-bold text-doc-ink dark:text-white block">Education Fee Waivers</span>
              <p className="text-slate-600 dark:text-slate-300">Reserved admission seats and up to 50%–100% tuition fee concessions at public universities and colleges.</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="font-bold text-doc-ink dark:text-white block">Free Healthcare &amp; Grants</span>
              <p className="text-slate-600 dark:text-slate-300">Free medical treatment at government hospitals and priority inclusion in provincial assistance funds (e.g. Himmat Card).</p>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 4: Realistic Timeline Expectations */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Realistic Timeline Expectations (4 to 12 Weeks)
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-2 font-sans text-xs">
            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm">
              <AlertTriangle className="w-5 h-5" />
              <span>Understanding the Administrative Inter-Departmental Coordination</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Because the Disability Assessment Board comprises multiple medical specialists (orthopedic, ophthalmology, ENT, neurology) who convene on fixed monthly hospital dates, getting the provincial certificate typically takes 3 to 8 weeks. Once in hand, NADRA card production takes approximately 1 to 2 weeks under priority processing. Plan ahead and do not rely on unverified agents promising 24-hour delivery.
            </p>
          </div>
        </section>

        {/* Section 5: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Health &amp; Welfare Resources on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/welfare/punjab-himmat-card-registration"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Financial Aid</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Punjab Himmat Card Registration →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Quarterly stipend program for certified persons with disabilities.</p>
            </Link>

            <Link
              href="/health/sehat-card-active-status-by-province-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Healthcare</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Sehat Card Active Status Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Provincial universal health coverage rules and panel hospitals.</p>
            </Link>

            <Link
              href="/nadra/lost-stolen-cnic-replacement-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Identity</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NADRA CNIC Replacement Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Fee schedule and priority processing for smart national cards.</p>
            </Link>
          </div>
        </section>

        {/* Section 6: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Special CNIC &amp; Disability Rights)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'What is the exact two-stage process to get a Special CNIC in Pakistan?',
                a: 'Stage 1: Appear before your District Disability Assessment Board (organized by the provincial Social Welfare Department / DEPD at DHQ/THQ hospitals) to receive an official Disability Certificate. Stage 2: Take the certificate to any NADRA Registration Center (or request home registration via helpline 1777) to issue a Special CNIC with the universal wheelchair insignia.',
              },
              {
                q: 'Can a bed-ridden or severely immobile person get a Special CNIC without traveling to NADRA?',
                a: 'Yes. NADRA provides a dedicated Doorstep Mobile Registration Service for bed-ridden and severely disabled individuals. Families can call the dedicated disability helpline at 1777 (or 051-111-786-100) to request an official Mobile Registration Unit (MRU) / Manpack team to visit their residence.',
              },
              {
                q: 'What key practical benefits does a NADRA Special CNIC provide?',
                a: 'The Special CNIC unlocks: 2% to 5% reserved employment quotas in public and private sectors, significant tuition fee concessions at colleges/universities, 50% discount on PIA domestic airfares and Pakistan Railways train tickets, free treatment at government hospitals, and priority access to social assistance programs (such as the Punjab Himmat Card).',
              },
              {
                q: 'How long does the entire process take from medical board to card delivery?',
                a: 'The total duration typically ranges from 4 to 12 weeks. Provincial medical assessment boards generally convene on fixed monthly or bi-weekly schedules, while NADRA processes the Special CNIC under priority Executive timelines once the certificate is lodged.',
              },
              {
                q: 'Is there a government fee for issuing a Special CNIC at NADRA?',
                a: 'First-time registration for a Special CNIC is provided free of charge by NADRA for persons with disabilities, and applicants receive priority executive desk processing without paying premium surcharges.',
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
            { label: 'NADRA Special Helpline 1777 & Inclusion Directorate', url: 'https://www.nadra.gov.pk/' },
            { label: 'Sindh Department for Empowerment of Persons with Disabilities (DEPD)', url: 'https://depd.sindh.gov.pk/' },
            { label: 'Punjab Social Welfare & Bait-ul-Maal Department', url: 'https://swd.punjab.gov.pk/' },
            { label: 'National Council for Rehabilitation of Disabled Persons (NCRDP)', url: 'https://mowhr.gov.pk/' },
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
