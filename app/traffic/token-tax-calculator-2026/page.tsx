import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { HelpCircle, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vehicle Token Tax Calculator 2026 Pakistan – Punjab, Sindh, Islamabad, KPK | Pakistan Info Hub',
  description:
    'Calculate vehicle token tax online for Punjab, Sindh, Islamabad ICT, and KPK. Real-time rates for cars, bikes, SUVs, commercial vehicles, and Filer vs Non-Filer income tax slabs.',
  keywords: [
    'vehicle token tax calculator Pakistan 2026',
    'Punjab token tax calculator',
    'Sindh vehicle token tax',
    'Islamabad car token tax rates',
    'excise token tax filer non filer',
    'lifetime token tax 1000cc',
  ],
  openGraph: {
    title: 'Vehicle Token Tax Calculator 2026 Pakistan – Punjab, Sindh, Islamabad',
    description:
      'Instant provincial excise token tax estimation for all engine capacities, vehicle types, and FBR filer tax status.',
    url: 'https://www.pakistaninfohub.com/traffic/token-tax-calculator-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/traffic/token-tax-calculator-2026' },
};

const TokenTaxCalculator = dynamic(
  () => import('@/components/TokenTaxCalculator').then((m) => ({ default: m.TokenTaxCalculator })),
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
        { '@type': 'ListItem', position: 3, name: 'Token Tax Calculator 2026', item: 'https://www.pakistaninfohub.com/traffic/token-tax-calculator-2026' },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'Pakistan Vehicle Token Tax Calculator 2026',
      description: 'Online provincial excise motor vehicle tax and withholding tax calculator for Punjab, Sindh, Islamabad, KPK, and Balochistan.',
      url: 'https://www.pakistaninfohub.com/traffic/token-tax-calculator-2026',
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
          name: 'How is vehicle token tax calculated in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Token tax in Pakistan is calculated based on vehicle engine displacement (cc), province of registration, vehicle category, and the owner’s active filer status with the FBR. Vehicles under 1000cc pay a one-time lifetime tax, while vehicles above 1000cc pay annual token tax plus advance withholding tax.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference in token tax between Filers and Non-Filers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non-filers are subject to a 200% to 300% punitive advance income tax surcharge on annual token tax payments compared to active filers on the FBR Active Taxpayer List (ATL).',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I pay vehicle token tax online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Punjab token tax can be paid via ePay Punjab and mobile banking; Sindh token tax via Sindh e-Payment gateway; and Islamabad token tax through the ICT City App or 1Link 1Bill PSID.',
          },
        },
      ],
    },
  ],
};

export default function TokenTaxCalculatorPage() {
  const breadcrumbs = [
    { nameEn: 'Traffic & Vehicle Services', nameUr: 'ٹریفک و گاڑیوں کی سروسز' },
    { nameEn: 'Token Tax Calculator 2026', nameUr: 'ٹوکن ٹیکس کیلکولیٹر 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn">
        <Breadcrumbs items={breadcrumbs} />

        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="INTERACTIVE CALCULATOR" labelUr="آن لائن کیلکولیٹر" variant="gold" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Vehicle Token Tax Calculator 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              صوبائی وہیکل ٹوکن ٹیکس کیلکولیٹر (پنجاب، سندھ، اسلام آباد و کے پی کے)
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-sans">
            Calculate your exact motor vehicle tax, withholding tax for filers vs non-filers, and clean air cess across
            all provinces of Pakistan.
          </p>
        </header>

        <DirectAnswerBox
          topicTitleEn="How Vehicle Token Tax is Calculated in Pakistan (2026 Rules)"
          topicTitleUr="پاکستان میں گاڑیوں کا ٹوکن ٹیکس کیسے شمار ہوتا ہے؟"
          answerEn="Vehicle token tax depends on engine capacity (cc), registration province, and FBR filer status. Vehicles ≤1000cc pay a one-time lifetime tax (approx PKR 10,000 for cars, PKR 1,500 for bikes). Vehicles >1000cc pay annual Motor Vehicle Tax plus advance income tax (non-filers pay 3x higher income tax). Payment is accepted online via ePay Punjab, ICT App, or 1Link."
          answerUr="گاڑیوں کا ٹوکن ٹیکس انجن کی صلاحیت (سی سی)، صوبے اور فائلر سٹیٹس پر منحصر ہے۔ 1000 سی سی تک کی گاڑیوں پر ون ٹائم لائف ٹائم ٹیکس (تقریباً 10 ہزار روپے) لاگو ہوتا ہے۔ 1000 سی سی سے بڑی گاڑیوں پر سالانہ موٹر ٹیکس اور انکم ٹیکس لاگو ہوتا ہے (نان فائلرز پر 3 گنا زائد ٹیکس عائد ہوتا ہے)۔ آن لائن ادائیگی ای پے سے ممکن ہے۔"
        />

        <section aria-label="Token Tax Calculator Tool">
          <TokenTaxCalculator />
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
                q: 'What happens if I delay paying vehicle token tax?',
                a: 'Excise departments impose a monthly late payment surcharge (typically 1% per month) on overdue token tax. In addition, traffic police can impound vehicles or confiscate registration smart cards with expired tokens.',
              },
              {
                q: 'Is there a rebate for paying token tax for multiple years in advance?',
                a: 'Yes, both Punjab and Islamabad Excise offer up to 10% to 15% discount when annual token tax is paid before August 31st or when paid 2–3 years in advance via ePay.',
              },
              {
                q: 'How do I verify if my token tax payment was updated?',
                a: 'You can check your updated token validity status online via the provincial MTMIS system (mtmis.punjab.gov.pk or excise.gos.pk) using your vehicle registration number.',
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
            { label: 'Punjab Excise, Taxation & Narcotics Control', url: 'https://excise.punjab.gov.pk/' },
            { label: 'ePay Punjab Official Gateway', url: 'https://epay.punjab.gov.pk/' },
            { label: 'Sindh Excise & Taxation Department', url: 'https://excise.gos.pk/' },
            { label: 'Islamabad Capital Territory Excise', url: 'https://islamabadexcise.gov.pk/' },
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
