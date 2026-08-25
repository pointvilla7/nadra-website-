import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { HelpCircle, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Car Registration Check & MTMIS Vehicle Verification Online 2026 – Punjab, Sindh, Islamabad, KPK | Pakistan Info Hub',
  description:
    'Perform an online car registration check and vehicle verification across Punjab, Sindh, Islamabad, and KPK. Search official vehicle registration, owner name, chassis number, and token tax via MTMIS.',
  keywords: [
    'car registration check',
    'vehicle registration check online',
    'vehicle registration check punjab',
    'car registration check sindh',
    'car registration check islamabad',
    'MTMIS vehicle verification online 2026',
    'Punjab vehicle verification by registration number',
    'Sindh excise vehicle search',
    'Islamabad vehicle verification online',
    'check car ownership Pakistan',
    'MTMIS token tax status',
  ],
  openGraph: {
    title: 'Car Registration Check & MTMIS Vehicle Verification Online 2026 – Punjab, Sindh, Islamabad, KPK',
    description:
      'Format validator and guided one-click access to official provincial MTMIS vehicle and car registration check databases.',
    url: 'https://www.pakistaninfohub.com/traffic/vehicle-verification-online-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/traffic/vehicle-verification-online-2026' },
};

const VehicleVerificationWidget = dynamic(
  () => import('@/components/VehicleVerificationWidget').then((m) => ({ default: m.VehicleVerificationWidget })),
  { ssr: false, loading: () => <div className="h-[480px] rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" /> }
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Traffic & Vehicle Services', item: 'https://www.pakistaninfohub.com/traffic' },
        { '@type': 'ListItem', position: 3, name: 'Car Registration Check & Vehicle Verification Online 2026', item: 'https://www.pakistaninfohub.com/traffic/vehicle-verification-online-2026' },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Car Registration Check & MTMIS Vehicle Verification Online 2026',
      description: 'Online directory and format validator for checking car registration, vehicle ownership, chassis numbers, and token tax across Pakistani provinces (Punjab, Sindh, Islamabad, KPK).',
      url: 'https://www.pakistaninfohub.com/traffic/vehicle-verification-online-2026',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How can I check car registration and ownership online in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can perform a car registration check and verify vehicle ownership online using the provincial MTMIS system (Motor Transport Management Information System) by entering the registration number. For Punjab vehicles, visit mtmis.punjab.gov.pk; for Sindh, visit excise.gos.pk; for Islamabad, visit islamabadexcise.gov.pk; and for KPK, visit kpkexcise.gov.pk.',
          },
        },
        {
          '@type': 'Question',
          name: 'What details are shown on MTMIS vehicle verification?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'MTMIS displays the registered owner’s name, vehicle make/model, chassis number, engine number, year of manufacture, color, token tax payment status, and vehicle registration status.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is online vehicle registration check free in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, searching vehicle registration records on official provincial excise MTMIS web portals is 100% free of cost.',
          },
        },
      ],
    },
  ],
};

export default function VehicleVerificationPage() {
  const breadcrumbs = [
    { nameEn: 'Traffic & Vehicle Services', nameUr: 'ٹریفک و گاڑیوں کی سروسز' },
    { nameEn: 'Car Registration Check & Vehicle Verification', nameUr: 'کار رجسٹریشن چیک و گاڑی کی تصدیق' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn">
        <Breadcrumbs items={breadcrumbs} />

        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="INTERACTIVE NAVIGATOR" labelUr="آن لائن رہنمائی" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Car Registration Check & MTMIS Vehicle Verification Online 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              آن لائن کار رجسٹریشن چیک و گاڑی کی تصدیق (پنجاب، سندھ، اسلام آباد و کے پی کے)
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-sans">
            Check your car registration details — also called vehicle verification or vehicle registration check — instantly online using MTMIS. Validate vehicle registration formats, copy your clean registration number, and open official provincial MTMIS portals across Punjab, Sindh, Islamabad, and KPK to verify owner name, chassis number, and token tax clearance.
          </p>
        </header>

        <DirectAnswerBox
          topicTitleEn="How to Check Car Registration & Verify Vehicle Ownership Online in Pakistan (MTMIS)"
          topicTitleUr="پاکستان میں کار رجسٹریشن چیک اور گاڑی کی آن لائن تصدیق کا طریقہ"
          answerEn="To check car registration or verify vehicle ownership online: (1) Select your registration province (Punjab, Sindh, Islamabad, or KPK), (2) Enter your vehicle registration number, (3) Click 'Copy' to copy the formatted number, and (4) Click 'Open Official MTMIS Portal' to view original owner details, chassis number, engine number, and token tax paid status directly on the government database."
          answerUr="آن لائن کار رجسٹریشن اور گاڑی کی تصدیق کے لیے: (1) صوبہ منتخب کریں (پنجاب، سندھ، اسلام آباد یا کے پی کے)، (2) گاڑی کا رجسٹریشن نمبر درج کریں، (3) کاپی کا بٹن دبائیں، اور (4) آفیشل ایم ٹی ایم آئی ایس پورٹل پر جا کر مالک کا نام، چیسس نمبر اور ٹوکن ٹیکس کی ادائیگی دیکھیں۔"
        />

        <section aria-label="Vehicle Verification Tool">
          <VehicleVerificationWidget />
        </section>

        <AdPlacementZone format="horizontal" />

        {/* FAQs */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-doc-ink dark:text-white flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Why is online vehicle verification important before buying a used car?',
                a: 'Verifying on MTMIS protects you from purchasing stolen vehicles, tampered chassis numbers, bank-leased cars, or vehicles with heavy unpaid token tax penalties.',
              },
              {
                q: 'Can I check motorcycle verification on MTMIS?',
                a: 'Yes. MTMIS portals cover all registered motor vehicles including motorcycles, scooters, passenger cars, commercial vans, trucks, and tractors.',
              },
              {
                q: 'What should I do if MTMIS shows "No Record Found"?',
                a: 'Double check the registration format (e.g. use dashes like LEA-20-1234 or omit spaces). For newly registered vehicles, data takes up to 7–14 days to synchronize from the district excise office to the provincial MTMIS server.',
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
            { label: 'Punjab MTMIS Vehicle Registration System', url: 'https://mtmis.punjab.gov.pk/' },
            { label: 'Sindh Excise Vehicle Search', url: 'https://excise.gos.pk/vehicle/vehicle_search' },
            { label: 'Islamabad Capital Territory Excise & Taxation', url: 'https://islamabadexcise.gov.pk/' },
            { label: 'KPK Excise Vehicle Registration Department', url: 'https://kpkexcise.gov.pk/service/vehicle_registration/' },
          ].map((src) => (
            <a key={src.url} href={src.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-doc-seal">
              <ExternalLink className="w-3 h-3" />
              {src.label}: <span className="font-mono">{src.url}</span>
            </a>
          ))}
        </section>
      </div>
    </>
  );
}
