import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import {
  ProcessStepsDiagram,
  ComparisonVisual,
  FAQAccordionVisual,
} from '@/components/visuals';
import {
  ShieldCheck,
  Building,
  FileCheck,
  Clock,
  Search,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Scale,
  ExternalLink,
  MapPin,
  FileText,
  UserCheck,
  ShieldAlert,
  PhoneCall,
  Smartphone,
  Globe,
  HelpCircle,
  Layers,
  Radio,
  Crosshair,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Crime Control Department (CCD) Punjab Explained 2026 – Mandate, Powers & Reporting | Pakistan Info Hub',
  description:
    'Complete citizen guide to Crime Control Department (CCD) Punjab: established under Police (Amendment) Ordinance 2025, organized crime mandate, comparison with CTD and District Police, and how to report organized crime tips.',
  keywords: [
    'crime control department ccd punjab explained 2026',
    'ccd punjab police stations fir powers',
    'difference between ccd and ctd punjab police',
    'crime control department maryam nawaz police amendment ordinance 2025',
    'how to report organized crime ccd punjab 1787',
    'ccd punjab jurisdiction kidnapping ransom drug cartels',
    'sohail zafar chattha addl ig ccd punjab',
  ],
  openGraph: {
    title: 'Crime Control Department (CCD) Punjab Explained 2026 – Specialized Police Unit',
    description:
      'Everything you need to know about CCD Punjab: mandate against organized crime, FIR registration powers, relation to CTD and District Police, and citizen reporting channels.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/legal/crime-control-department-ccd-punjab-explained-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/legal/crime-control-department-ccd-punjab-explained-2026',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com/' },
        { '@type': 'ListItem', position: 2, name: 'Police & Legal Services', item: 'https://www.pakistaninfohub.com/legal' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Crime Control Department (CCD) Punjab Explained 2026',
          item: 'https://www.pakistaninfohub.com/legal/crime-control-department-ccd-punjab-explained-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Crime Control Department (CCD) Punjab Explained 2026: Mandate, Specialized Police Stations & Citizen Reporting',
      description:
        'A comprehensive public explainer clarifying the statutory creation, investigatory powers, organized crime focus, and citizen reporting workflows of Punjab Police Crime Control Department (CCD).',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-30',
      dateModified: '2026-08-30',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/legal/crime-control-department-ccd-punjab-explained-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the Crime Control Department (CCD) different from my neighborhood police station (Thana)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Regular police stations handle routine civic policing, local disputes, beat patrolling, and general First Information Reports (FIRs). CCD is a specialized provincial elite unit modeled structurally like CTD, focusing exclusively on inter-district organized crime rings, major narcotics cartels, kidnapping for ransom, and eliminating criminal no-go areas across Punjab.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I file an initial FIR directly with CCD or at my local police station?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ordinary citizens should continue filing initial crime complaints and FIRs at their local police station, through Police Khidmat Markaz (PKM), or via the IGP Complaint Center 1787. CCD operates its own specialized police stations and registration authority, but its cases are either initiated through specialized intelligence operations or transferred formally from district police upon orders of Regional Police Officers (RPOs) or the Inspector General.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is the Crime Control Department (CCD) different from the Counter Terrorism Department (CTD)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The fundamental difference lies in their legal jurisdiction: CTD deals strictly with terrorism, sectarian extremism, militant financing, and offences under the Anti-Terrorism Act (ATA) 1997. CCD deals with non-terrorist organized and serious crimes, such as professional extortion rackets, armed gang networks, major drug smuggling rings, contract killings, and land-grabbing mafias.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can District Police transfer an ongoing serious crime investigation to CCD?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. District Police Officers (DPOs), City Police Officers (CPOs), and Regional Police Officers (RPOs) can recommend the transfer of high-profile, cross-district, or heavily armed organized crime investigations to CCD. The Additional IG CCD reviews and takes over the investigation with specialized forensic, drone, and intelligence locator resources.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is CCD active only in Punjab or does it operate in other provinces of Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CCD was created as a provincial law-enforcement body specifically for Punjab under the Police (Amendment) Ordinance 2025. Other provinces maintain similar specialized units (such as Sindh Police Crime Branch / Special Investigation Unit and KPK Special Branch), but the CCD operational model is currently specific to Punjab.',
          },
        },
      ],
    },
  ],
};

export default function CCDPunjabExplainerPage() {
  const breadcrumbs = [
    { nameEn: 'Police & Legal Services', nameUr: 'پولیس و قانونی خدمات', url: '/legal' },
    { nameEn: 'CCD Punjab Explained 2026', nameUr: 'کرائم کنٹرول ڈیپارٹمنٹ' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn max-w-5xl mx-auto">
        <Breadcrumbs items={breadcrumbs} />

        {/* Page Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="SPECIALIZED POLICE UNIT" labelUr="کرائم کنٹرول ڈیپارٹمنٹ" variant="navy" />
            <VerifiedBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Crime Control Department (CCD) Punjab Explained 2026
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              کرائم کنٹرول ڈیپارٹمنٹ پنجاب کیا ہے؟ مینڈیٹ، اختیارات و رپورٹنگ کا طریقہ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            An independent, factual guide to Punjab Police's premier specialized organized-crime investigation agency established under the Police (Amendment) Ordinance 2025. Learn its core legal mandate, how it differs from CTD and regular police stations, and where citizens should actually report organized crime tips.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is the Crime Control Department (CCD) in Plain Terms?"
          topicTitleUr="آسان الفاظ میں کرائم کنٹرول ڈیپارٹمنٹ (CCD) کیا ہے؟"
          answerEn="The Crime Control Department (CCD) is an elite, specialized investigation and tactical law-enforcement agency established within Punjab Police on 26 February 2025 by Chief Minister Maryam Nawaz through the Police (Amendment) Ordinance 2025 (amending the Police Order 2002). Headquartered in Lahore and led by an Additional Inspector General of Police (Addl. IG), CCD operates its own dedicated police stations with independent FIR registration powers. It was created specifically to eliminate organized and serious crime—including inter-district armed gangs, major narcotics syndicates, kidnapping for ransom, extortion (bhatta) networks, and riverine/urban no-go areas. CCD does NOT replace regular police stations for ordinary citizen complaints; citizens continue to report crimes via local police stations, Police Khidmat Markaz, or the IGP 1787 Complaint Center."
          answerUr="کرائم کنٹرول ڈیپارٹمنٹ (CCD) پنجاب پولیس کا ایک خصوصی اور جدید تفتیشی ادارہ ہے جسے 26 فروری 2025 کو وزیراعلیٰ مریم نواز نے 'پولیس ترمیمی آرڈیننس 2025' کے تحت قائم کیا۔ یہ لاہور ہیڈکوارٹر سے ایڈیشنل آئی جی کی سربراہی میں کام کرتا ہے اور اس کے صوبے بھر میں اپنے الگ تھانے اور ایف آئی آر درج کرنے کے مکمل اختیارات ہیں۔ اس کا بنیادی مقصد سنگین اور منظم جرائم (جیسے بین الاضلاعی گینگز، منشیات فروش، تاوان کے لیے اغوا، بھتہ خوری اور کچے کے ڈاکوؤں کے نو گو ایریاز) کا خاتمہ کرنا ہے۔ عام شہریوں کی روزمرہ شکایات کے لیے یہ تھانوں کا متبادل نہیں ہے بلکہ شہری بدستور قریبی تھانے، خدمت مرکز یا 1787 ہیلپ لائن کے ذریعے ہی رابطہ کریں گے۔"
        />

        {/* Section: Why CCD Was Created & Core Targets */}
        <section className="space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-doc-seal dark:text-doc-brass text-xs font-mono font-bold uppercase tracking-wider">
              <Crosshair className="w-4 h-4" />
              <span>Statutory Mandate</span>
            </div>
            <h2 className="text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
              Why CCD Was Created: 5 Core Serious-Crime Targets
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Unlike regular beat police, CCD is equipped with advanced drone surveillance, criminal profiling databases, and tactical interception equipment to dismantle complex criminal enterprises:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Target 1 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-950/60 text-doc-seal dark:text-red-400 flex items-center justify-center font-bold">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Kidnapping for Ransom &amp; Extortion
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Specialized tracking of organized kidnapping rings, cross-border digital extortion rackets (Bhatta), and high-profile hostage rescue operations.
              </p>
            </div>

            {/* Target 2 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Eliminating &quot;No-Go Areas&quot; &amp; Kacha Gangs
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Armed clearance operations in Southern Punjab riverine (Kacha) regions (Rajanpur, Rahim Yar Khan) and urban pockets controlled by violent land-grabbing mafias.
              </p>
            </div>

            {/* Target 3 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Major Drug Cartels &amp; Arms Trafficking
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Disrupting inter-provincial supply chains of synthetic drugs (Ice, Crystal Meth, Heroin) and illegal automatic weapon distribution networks.
              </p>
            </div>

            {/* Target 4 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                Inter-District Armed Gangs (Qabza Mafias)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Targeting professional contract killers (Shooters), armed land-grab syndicates, and organized vehicle snatching networks operating across city boundaries.
              </p>
            </div>

            {/* Target 5 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-400 flex items-center justify-center font-bold">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                AI Surveillance &amp; Criminal Database
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Utilizing modern criminal record offices (CRO), facial recognition locators, and automated intelligence software for rapid suspect tracking.
              </p>
            </div>

            {/* Structure & Budget */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-doc-brass block">
                Resource Allocation
              </span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                ~4,250 Personnel &amp; Rs. 5.56B Budget
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Initial operational budget of Rs. 5.56 billion with phased induction of over 4,000 specially trained investigators, analysts, and tactical commandos.
              </p>
            </div>
          </div>
        </section>

        {/* Section: CCD vs CTD vs Regular District Police (Comparison Visual) */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
              CCD vs Regular District Police vs CTD: Key Distinctions
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Understanding which police entity handles what under the Police Order 2002:
            </p>
          </div>

          <ComparisonVisual
            titleEn="Punjab Police Department Roles & Legal Jurisdiction"
            titleUr="سی سی ڈی، ڈسٹرکٹ پولیس اور سی ٹی ڈی میں قانونی و عملی فرق"
            subtitleEn="Clear division between organized crime, routine civic policing, and anti-terrorism"
            subtitleUr="منظم جرائم، تھانہ کلچر اور انسداد دہشت گردی کے اداروں کا دائرہ کار"
            items={[
              {
                titleEn: "Crime Control Department (CCD)",
                titleUr: "کرائم کنٹرول ڈیپارٹمنٹ (CCD)",
                subtitleEn: "Organized & Serious Crimes",
                subtitleUr: "سنگین و منظم جرائم کا خاتمہ",
                badgeEn: "Specialized Unit",
                badgeUr: "خصوصی ادارہ",
                badgeVariant: "seal",
                isPopular: true,
                pointsEn: [
                  "Created Feb 2025 under Police (Amendment) Ordinance 2025.",
                  "Has its own specialized police stations and FIR powers.",
                  "Targets kidnapping rings, drug cartels, and armed mafias.",
                ],
                features: [
                  { labelEn: "Governing Head", valueEn: "Additional IG CCD Punjab" },
                  { labelEn: "Target Crime", valueEn: "Organized / Syndicate Crime" },
                  { labelEn: "Citizen Walk-In", valueEn: "Referred / Intelligence Based" },
                ],
                recommendedForEn: "High-profile inter-district gang syndicates, armed cartels, and kidnapping cases.",
              },
              {
                titleEn: "Regular District Police (Thana)",
                titleUr: "ڈسٹرکٹ پولیس (روایتی تھانہ)",
                subtitleEn: "Frontline Civic & Beat Policing",
                subtitleUr: "روزمرہ امن و امان و پبلک ایف آئی آر",
                badgeEn: "Frontline Civic",
                badgeUr: "عوامی رابطہ",
                badgeVariant: "navy",
                pointsEn: [
                  "Frontline citizen-facing police stations across all 36 districts.",
                  "Handles routine FIRs, neighbourhood theft, disputes, and patrol.",
                  "Operates Police Khidmat Markaz (PKM) for public certificates.",
                ],
                features: [
                  { labelEn: "Governing Head", valueEn: "DPO / CPO / RPO" },
                  { labelEn: "Target Crime", valueEn: "Routine / Local Offences" },
                  { labelEn: "Citizen Walk-In", valueEn: "Open 24/7 Walk-In Desks" },
                ],
                recommendedForEn: "Citizens reporting local property crimes, FIR requests, and public verifications.",
              },
              {
                titleEn: "Counter Terrorism Department (CTD)",
                titleUr: "کاؤنٹر ٹیررازم ڈیپارٹمنٹ (CTD)",
                subtitleEn: "Anti-Terrorism & Extremism",
                subtitleUr: "انسداد دہشت گردی و انتہا پسندی",
                badgeEn: "Anti-Terrorism",
                badgeUr: "انسداد دہشت گردی",
                badgeVariant: "brass",
                pointsEn: [
                  "Operates under the Anti-Terrorism Act (ATA) 1997.",
                  "Targets militant outfits, suicide networks, and terror financing.",
                  "Intelligence-driven counter-insurgency and raid operations.",
                ],
                features: [
                  { labelEn: "Governing Head", valueEn: "Additional IG CTD Punjab" },
                  { labelEn: "Target Crime", valueEn: "Terrorism & Militancy" },
                  { labelEn: "Citizen Walk-In", valueEn: "Intelligence Operations" },
                ],
                recommendedForEn: "National security threats, extremist groups, and ATA scheduled offences.",
              },
            ]}
          />
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section: Practical Citizen Guidance - How to Report Organized Crime Tips */}
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-doc-seal dark:text-doc-brass text-xs font-mono font-bold uppercase tracking-wider">
              <PhoneCall className="w-4 h-4" />
              <span>Practical Citizen Guide</span>
            </div>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-doc-ink dark:text-white">
              How Should a Citizen Actually Report an Organized Crime Tip?
            </h2>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Because CCD operates primarily as an <strong>internal tactical and investigatory agency</strong> rather than an open public reception counter, ordinary citizens should use the following established, verified public channels to report organized crime, extortion, or gang activities:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
              <span className="text-[11px] font-mono font-bold text-doc-seal dark:text-red-400 uppercase block">
                Channel 1: IGP Complaint 1787
              </span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Toll-Free 1787 Helpline
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Call 1787 or SMS to report major organized crime, police inaction, or extortion threats. Generates an official computerized tracking e-Tag monitored at the Central Police Office (CPO).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
              <span className="text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase block">
                Channel 2: Emergency 15
              </span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Police Emergency 15
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                For in-progress kidnappings, armed robberies, or active gang violence, call 15 for immediate emergency response and PCR dispatch.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
              <span className="text-[11px] font-mono font-bold text-doc-brass uppercase block">
                Channel 3: Local Thana / PKM
              </span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                Police Station / PKM
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Register your initial FIR under Section 154 CrPC at your local police station or Police Khidmat Markaz. DPOs/RPOs can then formally transfer the case to CCD.
              </p>
            </div>
          </div>
        </section>

        {/* Cross-Linking to Related Legal & Police Guides */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Police Portals &amp; Legal Guides
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Explore verified procedures for police verifications, FIR copies, and complaint tracking:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <Link
              href="/legal/police-khidmat-markaz-services-guide-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Civic Centers</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Police Khidmat Markaz Hub 2026 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">14 public citizen services, any-district access &amp; online tracking.</p>
            </Link>

            <Link
              href="/legal/how-to-get-fir-copy-online-pakistan-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Legal Records</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                How to Get Certified FIR Copy →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Obtaining certified computerized FIR copies for court proceedings.</p>
            </Link>

            <Link
              href="/legal/online-fir-registration-punjab-police"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Crime Complaints</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Online FIR Punjab Police 1787 →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Register complaints via IG Helpline 1787 and e-Tag tracking.</p>
            </Link>
          </div>
        </section>

        {/* FAQ Accordion Visual */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (CCD Punjab Police)"
          titleUr="کرائم کنٹرول ڈیپارٹمنٹ (CCD) سے متعلق اہم ترین سوالات"
          subtitleEn="Essential guidelines regarding jurisdiction, FIR powers, and differences from CTD"
          subtitleUr="دائرہ اختیار، ایف آئی آر کے اختیارات اور سی ٹی ڈی سے فرق کی قانونی وضاحت"
          items={[
            {
              questionEn: "Is the Crime Control Department (CCD) different from my neighborhood police station (Thana)?",
              questionUr: "کیا کرائم کنٹرول ڈیپارٹمنٹ (CCD) میرے قریبی روایتی تھانے سے مختلف ہے؟",
              answerEn: "Yes. Regular police stations handle routine civic policing, local disputes, beat patrolling, and general First Information Reports (FIRs). CCD is a specialized provincial elite unit modeled structurally like CTD, focusing exclusively on inter-district organized crime rings, major narcotics cartels, kidnapping for ransom, and eliminating criminal no-go areas across Punjab.",
              answerUr: "جی ہاں! عام تھانے روزمرہ کے جھگڑوں، گشت اور عام ایف آئی آر کا اندراج کرتے ہیں۔ جبکہ CCD ایک صوبائی سطح کا اسپیشل ادارہ ہے جو صرف بین الاضلاعی منظم گینگز، منشیات مافیا، تاوان کے لیے اغوا اور کچے کے ڈاکوؤں کے خلاف کارروائیاں کرتا ہے۔",
            },
            {
              questionEn: "Do I file an initial FIR directly with CCD or at my local police station?",
              questionUr: "کیا مجھے ایف آئی آر کروانے کے لیے CCD جانا ہوگا یا اپنے قریبی تھانے؟",
              answerEn: "Ordinary citizens should continue filing initial crime complaints and FIRs at their local police station, through Police Khidmat Markaz (PKM), or via the IGP Complaint Center 1787. CCD operates its own specialized police stations and registration authority, but its cases are either initiated through specialized intelligence operations or transferred formally from district police upon orders of Regional Police Officers (RPOs) or the Inspector General.",
              answerUr: "عام شہری بدستور اپنے قریبی تھانے، پولیس خدمت مرکز یا 1787 ہیلپ لائن پر ہی ایف آئی آر یا شکایت درج کروائیں گے۔ CCD میں مقدمات یا تو انٹیلی جنس معلومات پر براہ راست درج ہوتے ہیں یا پھر ضلعی پولیس کے افسران (RPOs/IG) کی منظوری سے ٹرانسفر کیے جاتے ہیں۔",
            },
            {
              questionEn: "How is the Crime Control Department (CCD) different from the Counter Terrorism Department (CTD)?",
              questionUr: "کرائم کنٹرول ڈیپارٹمنٹ (CCD) اور کاؤنٹر ٹیررازم ڈیپارٹمنٹ (CTD) میں کیا فرق ہے؟",
              answerEn: "The fundamental difference lies in their legal jurisdiction: CTD deals strictly with terrorism, sectarian extremism, militant financing, and offences under the Anti-Terrorism Act (ATA) 1997. CCD deals with non-terrorist organized and serious crimes, such as professional extortion rackets, armed gang networks, major drug smuggling rings, contract killings, and land-grabbing mafias.",
              answerUr: "بنیادی فرق دائرہ اختیار کا ہے۔ CTD انسداد دہشت گردی ایکٹ 1997 کے تحت صرف دہشت گردی، کالعدم تنظیموں اور عسکریت پسندی کی تفتیش کرتی ہے۔ جبکہ CCD غیر دہشت گرد لیکن خطرناک منظم جرائم جیسے بھتہ خوری، منشیات مافیا، قبضہ گروہ اور کرائے کے قاتلوں کے نیٹ ورکس کے خلاف کام کرتی ہے۔",
            },
            {
              questionEn: "Can District Police transfer an ongoing serious crime investigation to CCD?",
              questionUr: "کیا ڈسٹرکٹ پولیس کوئی اہم مقدمہ تفتیش کے لیے CCD کے حوالے کر سکتی ہے؟",
              answerEn: "Yes. District Police Officers (DPOs), City Police Officers (CPOs), and Regional Police Officers (RPOs) can recommend the transfer of high-profile, cross-district, or heavily armed organized crime investigations to CCD. The Additional IG CCD reviews and takes over the investigation with specialized forensic, drone, and intelligence locator resources.",
              answerUr: "جی ہاں! ڈی پی اوز اور آر پی اوز کسی بھی سنگین، پیچیدہ یا بین الاضلاعی گینگ کے مقدمے کو تفتیش کے لیے CCD کے حوالے کر سکتے ہیں، جہاں جدید فارنزک اور لوکیٹر ٹیکنالوجی کے ذریعے تفتیش کی جاتی ہے۔",
            },
            {
              questionEn: "Is CCD active only in Punjab or does it operate in other provinces of Pakistan?",
              questionUr: "کیا CCD صرف پنجاب میں قائم کیا گیا ہے یا دیگر صوبوں میں بھی موجود ہے؟",
              answerEn: "CCD was created as a provincial law-enforcement body specifically for Punjab under the Police (Amendment) Ordinance 2025. Other provinces maintain similar specialized units (such as Sindh Police Crime Branch / Special Investigation Unit and KPK Special Branch), but the CCD operational model is currently specific to Punjab.",
              answerUr: "CCD کا قیام پنجاب پولیس ترمیمی آرڈیننس 2025 کے تحت صرف صوبہ پنجاب کے لیے عمل میں لایا گیا ہے۔ دیگر صوبوں میں سندھ کرائم برانچ یا کے پی کے اسپیشل برانچ جیسے ادارے موجود ہیں لیکن CCD کا یہ نیا ماڈل فی الوقت صرف پنجاب میں نافذ ہے۔",
            },
          ]}
        />

        {/* Source Citations */}
        <section className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Legal Authorities &amp; Sources Cited:</p>
          {[
            {
              label: 'Punjab Police Official Portal & IGP 1787 Complaint Center',
              url: 'https://punjabpolice.gov.pk',
            },
            {
              label: 'Police (Amendment) Ordinance 2025 & Police Order 2002 (Government of the Punjab)',
              url: 'https://punjabpolice.gov.pk',
            },
            {
              label: 'Punjab Police Khidmat Markaz Portal (PITB)',
              url: 'https://pkm.punjab.gov.pk',
            },
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
