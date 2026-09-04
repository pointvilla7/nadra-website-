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
  Scale,
  FileCheck,
  Video,
  Globe,
  Building,
  Check,
  AlertCircle,
  FileText,
  UserCheck,
  ShieldAlert,
  QrCode
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Power of Attorney Online 2026: poa.nadra.gov.pk Guide for Overseas Pakistanis | Pakistan Info Hub',
  description:
    'Complete guide to NADRA and MOFA’s Digital Power of Attorney (PoA) portal (poa.nadra.gov.pk): How overseas Pakistanis can attest General (GPA) and Special (SPA) Power of Attorney online without visiting the embassy, biometric verification, $36 fee, video interview, and Sub-Registrar registration in Pakistan.',
  keywords: [
    'digital power of attorney online overseas Pakistanis 2026',
    'poa nadra gov pk online attestation video interview',
    'General vs Special Power of Attorney difference Pakistan',
    'NADRA online POA fee 36 dollars consular attestation',
    'sub registrar property registration power of attorney Pakistan',
    'how to cancel revoke power of attorney NADRA embassy',
    'overseas Pakistani legal representative property sale',
  ],
  openGraph: {
    title: 'Digital Power of Attorney Online 2026: poa.nadra.gov.pk Guide for Overseas Pakistanis',
    description:
      'Step-by-step roadmap for overseas Pakistanis to attest Power of Attorney digitally via NADRA and MOFA without in-person embassy visits.',
    url: 'https://www.pakistaninfohub.com/legal/power-of-attorney-online-overseas-pakistanis-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/legal/power-of-attorney-online-overseas-pakistanis-2026' },
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
          name: 'Digital Power of Attorney Guide 2026',
          item: 'https://www.pakistaninfohub.com/legal/power-of-attorney-online-overseas-pakistanis-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Digital Power of Attorney Online for Overseas Pakistanis: poa.nadra.gov.pk 2026 Guide',
      description:
        'A comprehensive legal and technical guide explaining how overseas Pakistanis can attest General and Special Power of Attorney digitally via the NADRA-MOFA portal without physically visiting an embassy.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/legal/power-of-attorney-online-overseas-pakistanis-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do overseas Pakistanis still need to visit the Pakistani Embassy in person for Power of Attorney attestation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Overseas Pakistanis residing anywhere in the world can now execute and attest their Power of Attorney 100% digitally through the official NADRA-MOFA portal at poa.nadra.gov.pk. The process includes online document upload, biometric verification, payment of the $36 fee, and a secure online video interview with a consular officer.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the key difference between a General Power of Attorney (GPA) and a Special Power of Attorney (SPA)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A General Power of Attorney (GPA / Mukhtar-e-Aam) grants broad, sweeping authority over multiple properties, bank accounts, and legal matters. A Special Power of Attorney (SPA / Mukhtar-e-Khas) is strictly limited to a single, specific task (such as selling one designated property or obtaining a Succession Certificate). Legal experts strongly recommend SPAs for overseas Pakistanis to minimize financial and fraud risks.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does an online attested Power of Attorney require further registration in Pakistan for property matters?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. While the NADRA-MOFA digital portal completes the international attestation, if the Power of Attorney involves the sale, gift, mortgage, or transfer of immovable real estate, the Attorney in Pakistan must present the document to the local Sub-Registrar / Revenue Authority for formal registration and stamp duty payment under the Registration Act 1908.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long is a Power of Attorney valid, and can it be cancelled?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Power of Attorney remains valid indefinitely until the specific task is completed, it is formally revoked by the Executant, or either the Executant or Attorney passes away. An Executant can revoke a PoA at any time by executing a formal Deed of Revocation through the embassy/NADRA portal and notifying the relevant Sub-Registrar and Attorney in writing.',
          },
        },
        {
          '@type': 'Question',
          name: 'What documents are required to start the digital PoA application on poa.nadra.gov.pk?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You will need: Valid CNIC/NICOP/POC of the Executant (applicant), Attorney, and two adult witnesses; a scanned copy of the drafted Power of Attorney with Executant photograph and signatures/thumb impressions; and an active credit/debit card for the $36 fee.',
          },
        },
      ],
    },
  ],
};

export default function DigitalPowerOfAttorneyPage() {
  const breadcrumbs = [
    { nameEn: 'Police & Legal Services', nameUr: 'قانونی و پولیس سروسز' },
    { nameEn: 'Digital Power of Attorney Online', nameUr: 'آن لائن پاور آف اٹارنی (مختار نامہ) 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="NADRA-MOFA DIGITAL PORTAL" labelUr="ڈیجیٹل مختار نامہ پورٹل" variant="seal" />
            <VerifiedBadge textEn="POA.NADRA.GOV.PK COMPLIANT" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Digital Power of Attorney Online 2026: poa.nadra.gov.pk Guide for Overseas Pakistanis
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              اوورسیز پاکستانیوں کے لیے آن لائن پاور آف اٹارنی (مختار نامہ عام و خاص) تصدیق
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            A comprehensive, practical guide to NADRA and MOFA&apos;s digital Power of Attorney (PoA) system. Learn how overseas
            Pakistanis can execute and attest legal documents entirely online without traveling to an embassy, understand the
            critical differences between General and Special PoA, and complete Sub-Registrar property registration in Pakistan.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="Can Overseas Pakistanis Attest Power of Attorney Online Without Visiting the Embassy?"
          topicTitleUr="کیا اوورسیز پاکستانی سفارت خانے جائے بغیر آن لائن مختار نامہ تصدیق کروا سکتے ہیں؟"
          answerEn="Yes. Overseas Pakistanis can attest their Power of Attorney 100% digitally through the official NADRA-MOFA portal at poa.nadra.gov.pk without visiting an embassy. Upload the drafted PoA with witness CNICs, pay the $36 fee, complete an online video interview with a consular officer, and receive a digitally verifiable QR-coded PoA."
          answerUr="جی ہاں! نادرا اور وزارت خارجہ کے مشترکہ پورٹل (poa.nadra.gov.pk) کے ذریعے اوورسیز پاکستانی گھر بیٹھے مختار نامہ تصدیق کروا سکتے ہیں۔ دستاویزات اور گواہان کے کارڈ اپ لوڈ کریں، 36 ڈالر فیس ادا کریں، قونصلر افسر کے ساتھ ویڈیو انٹرویو کریں اور کیو آر کوڈ والی قانونی پاور آف اٹارنی حاصل کریں۔"
        />

        {/* Section 1: General vs Special Power of Attorney */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              General vs. Special Power of Attorney: Which One Should You Choose?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-ink dark:text-white text-sm block">1. Special Power of Attorney (SPA / مختار نامہ خاص)</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong>Recommended for Most Matters:</strong> Limits the Attorney&apos;s power strictly to a single, narrowly defined action — such as selling one specific plot, managing one bank account, or pursuing a single court case. Automatically expires once the task concludes, minimizing fraud risk.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-seal text-sm block">2. General Power of Attorney (GPA / مختار نامہ عام)</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong>Broad Legal Authority:</strong> Grants comprehensive, sweeping powers to buy, sell, lease, litigate, and operate finances on your behalf. Because of extensive legal exposure, GPAs should only be granted to deeply trusted immediate family members.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Digital Process on poa.nadra.gov.pk */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Step-by-Step: The Online Digital Workflow (poa.nadra.gov.pk)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Create Account</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Register on <code>poa.nadra.gov.pk</code> with your email and verify your identity using your CNIC/NICOP.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-brass text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Upload Documents</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Enter Attorney &amp; 2 witness details. Upload the signed PoA draft with your photo and fingerprint forms.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-doc-seal text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Pay Fee (~$36)</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Pay the official consular attestation fee online via debit or credit card.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs">4</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Video Interview</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Attend the scheduled video call with the Pakistani Consular Officer, give final consent, and download your attested PoA.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: In-Person Alternative Process */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Building className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Alternative: In-Person Attestation at Pakistan Missions Abroad
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 font-sans text-xs">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              If you prefer physical in-person processing or your legal counsel mandates manual consular stamping:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white block">1. Book Embassy Slot</span>
                <p className="text-slate-600 dark:text-slate-300">Book a consular attestation appointment at your nearest Pakistan Embassy or Consulate General.</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white block">2. Sign in Presence</span>
                <p className="text-slate-600 dark:text-slate-300">Bring original CNIC/NICOP, passport, and 2 witnesses. Sign the document directly before the Consular Officer.</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-doc-ink dark:text-white block">3. Receive Stamped PoA</span>
                <p className="text-slate-600 dark:text-slate-300">The embassy embosses official seals and delivers the hardcopy document on the same or next working day.</p>
              </div>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 4: Crucial Post-Attestation Step in Pakistan */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Crucial Step in Pakistan: Sub-Registrar &amp; Stamp Duty Registration
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 font-sans text-xs">
            <div className="flex items-center gap-2 text-doc-brass font-bold text-sm">
              <AlertCircle className="w-5 h-5 text-amber-400" />
              <span>Why Attestation Abroad is Not the Final Step for Property</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Attestation (whether online via NADRA or in person at the embassy) validates the authenticity of your signature abroad. However, under the <strong>Registration Act 1908</strong>, if the Power of Attorney involves selling, mortgaging, or transferring immovable property in Pakistan:
            </p>
            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 space-y-2">
              <p><strong>1. Counter-Verification:</strong> The document is validated in Pakistan through MOFA / NADRA digital verification.</p>
              <p><strong>2. Stamp Duty Adjudication:</strong> The Attorney must present the PoA to the District Collector / Sub-Registrar of the area where the property is situated to adjudicate and pay requisite provincial stamp duty.</p>
              <p><strong>3. Official Entry:</strong> The Sub-Registrar enters the PoA in the official registry book before the property deed can be legally executed.</p>
            </div>
          </div>
        </section>

        {/* Section 5: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Legal &amp; Overseas Services on Pakistan Info Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <Link
              href="/legal/pakistan-court-case-status-check-online-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Court Litigation</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Court Case Status Check 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Track case hearings & order sheets across Supreme & High Courts.</p>
            </Link>

            <Link
              href="/certificates/succession-certificate-nadra-legal-heirs"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Inheritance</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NADRA Succession Certificate Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">How legal heirs abroad use Special PoA for property distribution.</p>
            </Link>

            <Link
              href="/overseas/nicop-mandatory-entry-rules-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Overseas Identity</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NADRA NICOP Rules &amp; Travel →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Smart NICOP issuance for expatriate property ownership rights.</p>
            </Link>

            <Link
              href="/overseas/poc-card-pakistan-apply-online"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Origin Card</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Pakistan Origin Card (POC) Guide →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Foreign spouse property rights and legal representation.</p>
            </Link>
          </div>
        </section>

        {/* Section 6: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Digital Power of Attorney)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Do overseas Pakistanis still need to visit the Pakistani Embassy in person for Power of Attorney attestation?',
                a: 'No. Overseas Pakistanis residing anywhere in the world can now execute and attest their Power of Attorney 100% digitally through the official NADRA-MOFA portal at poa.nadra.gov.pk. The process includes online document upload, biometric verification, payment of the $36 fee, and a secure online video interview with a consular officer.',
              },
              {
                q: 'What is the key difference between a General Power of Attorney (GPA) and a Special Power of Attorney (SPA)?',
                a: 'A General Power of Attorney (GPA / Mukhtar-e-Aam) grants broad, sweeping authority over multiple properties, bank accounts, and legal matters. A Special Power of Attorney (SPA / Mukhtar-e-Khas) is strictly limited to a single, specific task (such as selling one designated property or obtaining a Succession Certificate). Legal experts strongly recommend SPAs for overseas Pakistanis to minimize financial and fraud risks.',
              },
              {
                q: 'Does an online attested Power of Attorney require further registration in Pakistan for property matters?',
                a: 'Yes. While the NADRA-MOFA digital portal completes the international attestation, if the Power of Attorney involves the sale, gift, mortgage, or transfer of immovable real estate, the Attorney in Pakistan must present the document to the local Sub-Registrar / Revenue Authority for formal registration and stamp duty payment under the Registration Act 1908.',
              },
              {
                q: 'How long is a Power of Attorney valid, and can it be cancelled?',
                a: 'A Power of Attorney remains valid indefinitely until the specific task is completed, it is formally revoked by the Executant, or either the Executant or Attorney passes away. An Executant can revoke a PoA at any time by executing a formal Deed of Revocation through the embassy/NADRA portal and notifying the relevant Sub-Registrar and Attorney in writing.',
              },
              {
                q: 'What documents are required to start the digital PoA application on poa.nadra.gov.pk?',
                a: 'You will need: Valid CNIC/NICOP/POC of the Executant (applicant), Attorney, and two adult witnesses; a scanned copy of the drafted Power of Attorney with Executant photograph and signatures/thumb impressions; and an active credit/debit card for the $36 fee.',
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
            { label: 'NADRA Digital Power of Attorney Portal', url: 'https://poa.nadra.gov.pk/' },
            { label: 'Ministry of Foreign Affairs (MOFA) Consular Affairs', url: 'https://mofa.gov.pk/' },
            { label: 'Registration Act 1908 (Section 17 & 48)', url: 'https://pakistancode.gov.pk/' },
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
