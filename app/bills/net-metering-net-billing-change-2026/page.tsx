import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  HelpCircle,
  ExternalLink,
  Zap,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  Sun,
  BatteryCharging,
  Layers,
  FileText,
  Building,
  TrendingDown
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NEPRA Net Metering to Net Billing Rules 2026 – Solar Buyback Rates & Policy | Pakistan Info Hub',
  description:
    'Complete guide to NEPRA Prosumer Regulations 2026: Replacement of 1:1 net metering with net billing, revised Rs 10–13 buyback rate, grandfathering for existing solar users, and self-consumption strategies across all DISCOs.',
  keywords: [
    'NEPRA net billing regulations 2026',
    'solar net metering vs net billing Pakistan',
    'NEPRA buyback rate solar 2026',
    'LESCO IESCO K-Electric net billing policy',
    'solar panel self consumption Pakistan',
    'existing net metering contract validity',
    'solar payback period Pakistan 2026',
  ],
  openGraph: {
    title: 'NEPRA Net Metering to Net Billing Rules 2026 – Solar Policy Update',
    description:
      'Verified breakdown of NEPRA 2026 solar prosumer regulations: Net billing formula, buyback rates, existing contract protections, and battery ROI.',
    url: 'https://www.pakistaninfohub.com/bills/net-metering-net-billing-change-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/bills/net-metering-net-billing-change-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Electricity & Gas Bills', item: 'https://www.pakistaninfohub.com/bills' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Net Metering to Net Billing 2026',
          item: 'https://www.pakistaninfohub.com/bills/net-metering-net-billing-change-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'NEPRA Net Metering to Net Billing Transition 2026: Rates, Contract Protection & Solar Payback',
      description:
        'A comprehensive guide explaining NEPRA’s 2026 Prosumer Regulations, the transition from 1:1 net metering to net billing, buyback pricing, and practical recommendations for solar consumers.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-20',
      dateModified: '2026-08-21',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/bills/net-metering-net-billing-change-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Am I protected if I already have an active Net Metering agreement signed before February 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Existing solar consumers with valid net metering agreements signed prior to the February 9, 2026 notification are grandfathered under their original contract terms until their agreement expires. Once that period concludes, or if you apply for panel capacity expansion, the connection will transition to the new net billing framework.',
          },
        },
        {
          '@type': 'Question',
          name: 'What counts as a "Material Modification" that forces an early switch to Net Billing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A material modification includes increasing your sanctioned solar panel capacity (kW load), upgrading to a higher capacity inverter, changing meter registration details, or relocating the connection. Routine maintenance or replacing a damaged panel of identical wattage does not trigger a contract change.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the financial difference between Net Metering and Net Billing in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under the old Net Metering (2015), 1 exported solar unit directly cancelled out 1 imported grid unit at the full retail rate (Rs 45–55/unit). Under Net Billing (2026), you pay full retail price for every unit imported from the grid, while your exported surplus is credited at a much lower wholesale energy price (approx. Rs 10–13/unit), calculated as a monetary credit rather than a unit swap.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is installing rooftop solar still financially viable in Pakistan under Net Billing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, solar remains highly viable, but the economic strategy has changed. Instead of designing oversized systems to export surplus units to DISCOs, homeowners should design systems optimized for maximum daytime self-consumption (running ACs, water pumps, and appliances directly on solar) or combine solar with lithium battery storage to avoid buying expensive peak-hour grid electricity.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does this policy apply to K-Electric as well as government DISCOs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. NEPRA Prosumer Regulations 2026 apply uniformly nationwide across all distribution companies, including K-Electric (Karachi), LESCO (Lahore), IESCO (Islamabad/Rawalpindi), FESCO, GEPCO, MEPCO, PESCO, HESCO, QESCO, SEPCO, and TESCO.',
          },
        },
      ],
    },
  ],
};

export default function NetMeteringToNetBillingPage() {
  const breadcrumbs = [
    { nameEn: 'Electricity & Gas Bills', nameUr: 'بجلی و گیس بل' },
    { nameEn: 'Net Metering to Net Billing 2026', nameUr: 'نیٹ میٹرنگ بمقابلہ نیٹ بلنگ 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="NEPRA REGULATORY REFORM" labelUr="نیپرا ریگولیٹری اپڈیٹ" variant="gold" />
            <VerifiedBadge textEn="NEPRA PROSUMER REGULATIONS 2026" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            NEPRA Net Metering to Net Billing 2026: New Buyback Rates &amp; Solar Rules
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              نیٹ میٹرنگ سے نیٹ بلنگ تبدیلی: سولر بائی بیک ریٹ اور نئے قواعد 2026
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            On February 9, 2026, NEPRA officially notified the <strong>Prosumer Regulations 2026</strong>, replacing the decade-old
            1:1 net metering framework with a new <strong>Net Billing system</strong> across all DISCOs. Understand the revised
            buyback rates, existing contract protections, and why self-consumption is now the key to solar savings.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What Changed with Pakistan's Solar Net Metering in 2026?"
          topicTitleUr="2026 میں سولر نیٹ میٹرنگ میں کیا بڑی تبدیلی آئی ہے؟"
          answerEn="NEPRA has replaced 1:1 net metering with Net Billing for new connections. Instead of unit-for-unit offsets at retail rates (Rs 45–55/unit), exported surplus solar is now credited at a wholesale buyback rate (approx. Rs 10–13/unit). Existing contracts remain protected until expiry, but self-consumption and battery storage are now essential."
          answerUr="نیپرا نے نئے سولر کنکشنز کے لیے 1:1 نیٹ میٹرنگ ختم کر کے نیٹ بلنگ نافذ کر دی ہے۔ اب گرڈ سے بجلی 45 تا 55 روپے فی یونٹ ملے گی جبکہ گرڈ کو بیچی گئی سولر بجلی کا کریڈٹ تقریباً 10 تا 13 روپے فی یونٹ ملے گا۔ پرانے معاہدے مدت ختم ہونے تک محفوظ رہیں گے۔"
        />

        {/* Section 1: Side-by-Side Comparison: Net Metering vs Net Billing */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Old Net Metering (2015) vs New Net Billing (2026)
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 font-sans">
            Compare how electricity accounting and monetary settlements work under both regulatory regimes:
          </p>

          <div className="table-scroll-wrapper rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="table-scroll-container">
              <table className="w-full text-sm font-sans min-w-[540px]">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Feature / Parameter</th>
                  <th className="px-4 py-3 text-left text-slate-300">Old Net Metering (2015 Regs)</th>
                  <th className="px-4 py-3 text-left text-emerald-300">New Net Billing (2026 Regs)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Accounting Method
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    1:1 Unit Swap (1 unit exported cancelled 1 unit imported)
                  </td>
                  <td className="px-4 py-3 font-bold text-emerald-600 dark:text-emerald-400 text-xs">
                    Monetary Credit (Import &amp; Export billed separately)
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Export Compensation Rate
                  </td>
                  <td className="px-4 py-3 font-mono text-slate-600 dark:text-slate-300 text-xs">
                    Full Retail Slab Rate (~Rs 22 to 50+/unit)
                  </td>
                  <td className="px-4 py-3 font-mono font-bold text-rose-600 dark:text-rose-400 text-xs">
                    Wholesale National Energy Price (~Rs 10 to 13/unit)
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Grid Import Cost
                  </td>
                  <td className="px-4 py-3 font-mono text-slate-600 dark:text-slate-300 text-xs">
                    Retail tariff for net balance only
                  </td>
                  <td className="px-4 py-3 font-mono text-slate-600 dark:text-slate-300 text-xs">
                    Full retail tariff for every single imported unit
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Billing Settlement Cycle
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">Quarterly adjustment rollover</td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">Monthly monetary adjustment</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Contract Agreement Period
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">7 Years standard</td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">5 Years standard</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>

        {/* Section 2: What This Means for Existing vs New Solar Owners */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Who is Protected? Existing Owners vs New Applicants
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700/60 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-serif font-bold text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Existing Solar Owners (Signed Before Feb 9, 2026)</span>
              </div>
              <p className="text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed font-sans">
                You are <strong>grandfathered and protected</strong> under your existing 1:1 net metering agreement. Your DISCO
                (LESCO, IESCO, K-Electric, etc.) cannot unilaterally alter your billing formula until the original contract term expires.
              </p>
              <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-emerald-200 dark:border-emerald-800 text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                <span className="font-bold text-emerald-700 dark:text-emerald-400 block">Crucial Precaution:</span>
                <p>
                  Do NOT submit formal requests to expand your system size or upgrade your inverter without consulting an expert.
                  Any material modification will cancel your grandfathered status and move you directly to Net Billing.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/60 space-y-3">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-serif font-bold text-base">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                <span>New Solar Applicants (Applying in 2026 Onward)</span>
              </div>
              <p className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed font-sans">
                All new applications processed under the 2026 Prosumer framework are issued under <strong>Net Billing</strong>.
                Exporting excess electricity to the grid will no longer yield large bill reductions as it once did.
              </p>
              <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-amber-200 dark:border-amber-800 text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                <span className="font-bold text-amber-700 dark:text-amber-400 block">New Recommended Strategy:</span>
                <p>
                  Size your system for your daytime baseline load. Shift washing machines, irons, water pumps, and daytime AC
                  usage to peak sunlight hours to avoid buying expensive grid electricity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 3: Why Self-Consumption & Batteries are the Future */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Sun className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Why Direct Self-Consumption is Now 4x More Valuable Than Exporting
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Under Net Billing mathematics, the value of 1 solar unit depends entirely on where it goes:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase font-mono text-[10px]">
                SCENARIO A • HIGHEST VALUE
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Direct Self-Consumption
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Using 1 unit directly during the day saves you <strong>Rs 45 to 55</strong> on your electricity bill by avoiding
                grid import at the highest retail slabs.
              </p>
            </div>

            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold uppercase font-mono text-[10px]">
                SCENARIO B • BATTERY STORAGE
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Storing in Lithium Battery
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Storing 1 unit in a battery for evening peak hours saves you <strong>Rs 55+ per unit</strong> during expensive
                peak rate hours (5 PM to 11 PM).
              </p>
            </div>

            <div className="doc-card p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <span className="text-rose-600 dark:text-rose-400 font-bold uppercase font-mono text-[10px]">
                SCENARIO C • LOWEST RETURN
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Exporting Surplus to Grid
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Exporting 1 excess unit gives you only <strong>Rs 10 to 13</strong> in billing credit. You lose roughly 75% of its potential economic value!
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Electricity Bill &amp; Tax Calculation Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/bills/utility-bill-checker-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Electricity Bills</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Online Utility Bill Checker 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Check LESCO, IESCO, K-Electric duplicate bills online.</p>
            </Link>

            <Link
              href="/bills/wapda-complaint-status-tracker-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">WAPDA Complaints</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                WAPDA Complaint Tracker 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Track overbilling, meter replacement, and grid faults.</p>
            </Link>

            <Link
              href="/tax/fbr-active-taxpayer-status-helper-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Taxpayer Status</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                FBR Active Taxpayer Status Helper →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Avoid extra 100% advance withholding taxes on electricity bills.</p>
            </Link>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Net Billing 2026)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Am I protected if I already have an active Net Metering agreement signed before February 2026?',
                a: 'Yes. Existing solar consumers with valid net metering agreements signed prior to the February 9, 2026 notification are grandfathered under their original contract terms until their agreement expires. Once that period concludes, or if you apply for panel capacity expansion, the connection will transition to the new net billing framework.',
              },
              {
                q: 'What counts as a "Material Modification" that forces an early switch to Net Billing?',
                a: 'A material modification includes increasing your sanctioned solar panel capacity (kW load), upgrading to a higher capacity inverter, changing meter registration details, or relocating the connection. Routine maintenance or replacing a damaged panel of identical wattage does not trigger a contract change.',
              },
              {
                q: 'What is the financial difference between Net Metering and Net Billing in Pakistan?',
                a: 'Under the old Net Metering (2015), 1 exported solar unit directly cancelled out 1 imported grid unit at the full retail rate (Rs 45–55/unit). Under Net Billing (2026), you pay full retail price for every unit imported from the grid, while your exported surplus is credited at a much lower wholesale energy price (approx. Rs 10–13/unit), calculated as a monetary credit rather than a unit swap.',
              },
              {
                q: 'Is installing rooftop solar still financially viable in Pakistan under Net Billing?',
                a: 'Yes, solar remains highly viable, but the economic strategy has changed. Instead of designing oversized systems to export surplus units to DISCOs, homeowners should design systems optimized for maximum daytime self-consumption (running ACs, water pumps, and appliances directly on solar) or combine solar with lithium battery storage to avoid buying expensive peak-hour grid electricity.',
              },
              {
                q: 'Does this policy apply to K-Electric as well as government DISCOs?',
                a: 'Yes. NEPRA Prosumer Regulations 2026 apply uniformly nationwide across all distribution companies, including K-Electric (Karachi), LESCO (Lahore), IESCO (Islamabad/Rawalpindi), FESCO, GEPCO, MEPCO, PESCO, HESCO, QESCO, SEPCO, and TESCO.',
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
            { label: 'National Electric Power Regulatory Authority (NEPRA)', url: 'https://nepra.org.pk/' },
            { label: 'NEPRA Prosumer Regulations 2026 Notification', url: 'https://nepra.org.pk/legislation/regulations.php' },
            { label: 'Power Division Ministry of Energy Government of Pakistan', url: 'https://mowp.gov.pk/' },
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
