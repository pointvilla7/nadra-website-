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
  PhoneCall,
  Flame,
  HeartPulse,
  ShieldAlert,
  Car,
  Hospital,
  Smartphone,
  Phone,
  Radio,
  Check
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pakistan Emergency Helpline Numbers Directory 2026 – 1122, 15, 115, 130 & City Helplines | Pakistan Info Hub',
  description:
    'Complete, verified directory of all 24/7 emergency helpline numbers in Pakistan: Rescue 1122 (Punjab, KP, Sindh SERS, AJK, GB), Police 15, Edhi Ambulance 115, Chhipa 1020, Fire Brigade 16, Motorway Police 130, and major hospital emergency contact numbers.',
  keywords: [
    'Pakistan emergency helpline numbers directory 2026',
    'Rescue 1122 ambulance fire emergency Pakistan',
    'Sindh emergency rescue service SERS 1122',
    'Edhi ambulance helpline 115 Pakistan',
    'Chhipa ambulance helpline 1020 Karachi',
    'Police emergency 15 nationwide Pakistan',
    'Motorway police emergency 130 NHMP',
    'PEHEL 911 unified emergency helpline Pakistan',
    'Islamabad PIMS Polyclinic emergency contact numbers',
    'toll free emergency numbers without mobile balance Pakistan',
  ],
  openGraph: {
    title: 'Pakistan Emergency Helpline Numbers Directory 2026 – 24/7 Rescue & Police',
    description:
      'Verified, mobile-ready national emergency contact reference: Rescue 1122, Edhi 115, Police 15, Fire 16, Motorway Police 130, and emergency protocols.',
    url: 'https://www.pakistaninfohub.com/disaster-alerts/pakistan-emergency-helpline-numbers-directory-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/disaster-alerts/pakistan-emergency-helpline-numbers-directory-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Disaster & Emergency Alerts', item: 'https://www.pakistaninfohub.com/alerts' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Emergency Helpline Numbers Directory 2026',
          item: 'https://www.pakistaninfohub.com/disaster-alerts/pakistan-emergency-helpline-numbers-directory-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Pakistan Emergency Helpline Numbers Directory 2026: 24/7 National Rescue, Police & Ambulance Guide',
      description:
        'A comprehensive public safety reference manual outlining essential toll-free emergency phone numbers, provincial rescue networks (Rescue 1122 & SERS), charitable ambulances, and hospital lines across Pakistan.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/disaster-alerts/pakistan-emergency-helpline-numbers-directory-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does dialing 1122 work in all provinces of Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Dialing 1122 connects you to government emergency ambulance, firefighting, and technical rescue services across Punjab, Khyber Pakhtunkhwa, Azad Jammu & Kashmir, Gilgit-Baltistan, Islamabad Capital Territory, and in Sindh through the Sindh Emergency Rescue Service (SERS 1122).',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between calling Rescue 1122 versus Edhi 115 or Chhipa 1020?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rescue 1122 is a fully government-funded emergency service with trained emergency medical technicians (EMTs), paramedic-equipped ambulances, fire trucks, and hydraulic rescue gear. Edhi Foundation (115) and Chhipa (1020) are premier non-profit humanitarian ambulance networks specialized in fast emergency medical transport, mass casualty evacuation, and inter-city patient transfers nationwide.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do emergency helpline numbers (1122, 15, 115, 130) work without mobile balance or a SIM card?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Under Pakistan Telecommunication Authority (PTA) mandatory public safety regulations, national emergency short codes (1122, 15, 16, 115, 130, 911) are 100% toll-free and connect through any available cellular tower even if your prepaid balance is Rs. 0.00 or your SIM is locked/unregistered.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the current status of the single unified emergency number 911 (PEHEL) in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Pakistan Emergency Helpline (PEHEL 911) is a national initiative launched to consolidate police, medical, fire, and highway dispatch into a single universal emergency number. While 911 is operational and routes calls to relevant provincial command centers, keeping primary dedicated direct numbers (1122, 15, 115, 130) is strongly advised for immediate, direct response.',
          },
        },
      ],
    },
  ],
};

export default function EmergencyHelplineDirectoryPage() {
  const breadcrumbs = [
    { nameEn: 'Disaster & Emergency Alerts', nameUr: 'قدرتی آفات اور ہنگامی الرٹس' },
    { nameEn: 'Emergency Numbers Directory', nameUr: 'ہنگامی ہیلپ لائن نمبرز ڈائریکٹری 2026' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="24/7 EMERGENCY DIRECTORY" labelUr="ہنگامی ہیلپ لائنز ڈائریکٹری" variant="seal" />
            <VerifiedBadge textEn="RESCUE 1122, EDHI & POLICE VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Pakistan Emergency Helpline Numbers Directory 2026: 24/7 Rescue, Police &amp; Medical Contacts
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پاکستان ہنگامی ہیلپ لائن نمبرز ڈائریکٹری 2026: ریسکیو 1122، پولیس 15 اور ایمبولینس
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            A calm, verified, and scannable reference guide for emergency situations across Pakistan. Keep these toll-free
            numbers saved or bookmarked: government rescue services, charitable ambulance fleets, highway emergency patrols,
            and major tertiary hospital casualty lines.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is the Single Most Important Emergency Number to Call in Pakistan?"
          topicTitleUr="پاکستان میں سب سے اہم ہنگامی نمبر کون سا ہے؟"
          answerEn="The primary emergency number in Pakistan is 1122 (Rescue 1122 in Punjab, KP, AJK, GB, Islamabad, and SERS 1122 in Sindh), covering medical ambulances, fire emergencies, building collapse, and disaster rescue. For crime and police dial 15; for nationwide free charitable ambulance dial Edhi 115; on motorways dial 130. All are 100% free and work with zero mobile balance."
          answerUr="پاکستان میں سب سے اہم ہنگامی نمبر 1122 ہے جو پنجاب، کے پی، سندھ (SERS)، آزاد کشمیر، گلگت اور اسلام آباد میں مفت ایمبولینس، فائر بریگیڈ اور ریسکیو فراہم کرتا ہے۔ جرائم پر پولیس 15، ایدھی ایمبولینس 115 اور موٹروے پر 130 ملائیں۔ یہ تمام نمبرز بغیر بیلنس کے کام کرتے ہیں۔"
        />

        {/* Section 1: Major Emergency Helplines Scannable Table */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <PhoneCall className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Primary National Emergency Numbers (24/7 Toll-Free)
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            These short codes connect 24 hours a day, 7 days a week from any landline, prepaid/postpaid mobile SIM, or
            network operator in Pakistan.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="w-full text-sm font-sans">
              <thead className="bg-doc-ink text-white text-xs font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Emergency Service</th>
                  <th className="px-4 py-3 text-left">Helpline Number</th>
                  <th className="px-4 py-3 text-left">Primary Scope &amp; Response</th>
                  <th className="px-4 py-3 text-left">Geographic Coverage</th>
                  <th className="px-4 py-3 text-left">Cost / Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Rescue 1122 / SERS
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-doc-seal text-base">
                    <a href="tel:1122" className="hover:underline flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" /> 1122
                    </a>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Emergency Medical Ambulances, Fire Brigade, Road Traffic Accidents, Disaster Relief &amp; Water Rescue
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Punjab, KP, Sindh (SERS), AJK, GB &amp; ICT
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    100% Free (No Balance Required)
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Police Emergency
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-doc-ink dark:text-white text-base">
                    <a href="tel:15" className="hover:underline flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" /> 15
                    </a>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Armed Robbery, Physical Violence, Theft, Law &amp; Order, Terror Threat &amp; Missing Persons
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Nationwide (All Provinces &amp; Districts)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    100% Free
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Edhi Foundation Ambulance
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-doc-seal text-base">
                    <a href="tel:115" className="hover:underline flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" /> 115
                    </a>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Emergency Ambulance, Mass Casualty Transport, Dead Body Transport &amp; Air Ambulance
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Nationwide (Largest Ambulance Fleet in Pakistan)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    100% Free
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Chhipa Welfare Ambulance
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-doc-ink dark:text-white text-base">
                    <a href="tel:1020" className="hover:underline flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" /> 1020
                    </a>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Rapid Medical Rescue, Accident Casualty Evacuation &amp; Emergency Hospital Shifts
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Sindh (Karachi, Hyderabad) &amp; Major Cities
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    100% Free
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Motorway &amp; Highway Police (NHMP)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-doc-brass text-base">
                    <a href="tel:130" className="hover:underline flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" /> 130
                    </a>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Highway Breakdown Rescue, Tire Assistance, Accident Investigation, Fog Advisory &amp; Route Info
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    All Motorways (M-1 to M-16) &amp; National Highways (N-5, N-55)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    100% Free
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Fire Brigade Emergency
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-red-600 text-base">
                    <a href="tel:16" className="hover:underline flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" /> 16
                    </a>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Municipal Commercial &amp; Residential Fire Response, Gas Leaks &amp; Industrial Explosions
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    All Municipal Corporations Nationwide
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    100% Free
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Pakistan Emergency Helpline (PEHEL)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-blue-600 text-base">
                    <a href="tel:911" className="hover:underline flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" /> 911
                    </a>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Unified National Dispatch Hub (Reroutes calls dynamically to Police, 1122, or Fire)
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Federal &amp; Provincial Pilot Dispatch
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    100% Free
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Pakistan Red Crescent Society
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 text-base">
                    <a href="tel:1030" className="hover:underline flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" /> 1030
                    </a>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Disaster First Aid, Emergency Blood Bank Dispatch &amp; Flood Relief Medical Response
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Nationwide Regional Offices
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    100% Free
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    Child Protection &amp; Welfare (CPWB)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-purple-600 text-base">
                    <a href="tel:1121" className="hover:underline flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" /> 1121
                    </a>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Lost/Runaway Children, Child Labor, Abuse Reporting &amp; Protective Custody
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Punjab &amp; Federal Capital
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    100% Free
                  </td>
                </tr>

                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-4 py-3 font-serif font-bold text-doc-ink dark:text-white text-xs">
                    FIA Cyber Crime Wing
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 text-base">
                    <a href="tel:1991" className="hover:underline flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" /> 1991
                    </a>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Online Blackmail, Financial Banking Fraud, Identity Theft &amp; Cyber Harassment
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                    Nationwide (Federal Investigation Agency)
                  </td>
                  <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    100% Free
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Hospital Emergency Contact Numbers in Major Cities */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Hospital className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Major Public Hospital Emergency Direct Lines
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Direct casualty, trauma center, and triage desk numbers for major tertiary hospitals across Pakistani urban centers:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-sans">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-seal text-sm block">Islamabad / Rawalpindi</span>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                <li><strong>PIMS Hospital Casualty:</strong> (051) 9261170</li>
                <li><strong>Polyclinic Hospital:</strong> (051) 9218300</li>
                <li><strong>Rawalpindi Holy Family:</strong> (051) 9290321</li>
                <li><strong>Benazir Bhutto Hospital (BBH):</strong> (051) 9290301</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-seal text-sm block">Lahore</span>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                <li><strong>Mayo Hospital Emergency:</strong> (042) 99211100</li>
                <li><strong>Jinnah Hospital Trauma:</strong> (042) 99231400</li>
                <li><strong>Services Hospital:</strong> (042) 99203402</li>
                <li><strong>General Hospital (LGH):</strong> (042) 99268800</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-seal text-sm block">Karachi</span>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                <li><strong>JPMC Trauma Center:</strong> (021) 99201300</li>
                <li><strong>Civil Hospital (CHK):</strong> (021) 99215740</li>
                <li><strong>NICVD Cardiac Emergency:</strong> (021) 99201271</li>
                <li><strong>Indus Hospital Emergency:</strong> (021) 111-111-880</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-seal text-sm block">Peshawar</span>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                <li><strong>Lady Reading Hospital (LRH):</strong> (091) 9211430</li>
                <li><strong>Khyber Teaching Hospital (KTH):</strong> (091) 9216340</li>
                <li><strong>Hayatabad Medical Complex (HMC):</strong> (091) 9217140</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-seal text-sm block">Quetta</span>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                <li><strong>Sandeman Provincial Hospital:</strong> (081) 9202022</li>
                <li><strong>Bolan Medical Complex (BMC):</strong> (081) 9213070</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-doc-seal text-sm block">Federal Helplines</span>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                <li><strong>Islamabad Police IGP Office:</strong> 1715</li>
                <li><strong>NDMA Disaster Control Room:</strong> 111-157-103</li>
                <li><strong>PDMA Punjab Helpline:</strong> 1129</li>
                <li><strong>PDMA Sindh Emergency:</strong> 1736</li>
              </ul>
            </div>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Section 3: Practical Life-Saving Calling Protocol */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Radio className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Practical Calling Protocol: What to Say in an Emergency
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-sans">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">State Exact Location First</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Always give the address immediately before anything else: city, sector/mohalla, road name, and a recognizable landmark (e.g. &quot;Near Shell Pump on GT Road near Gujranwala bypass&quot;).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Describe Nature of Danger</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                State clearly whether it is a vehicle collision, cardiac arrest, structural fire, gas cylinder leak, drowning, or armed robbery so the operator dispatches the correct specialized vehicle.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded-full bg-doc-ink text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Victims &amp; Keep Line Free</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Mention the number of injured persons and their consciousness level. Keep your phone line free after hanging up so the approaching ambulance crew can call for exact pinpointing.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Related Tools */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Public Safety &amp; Emergency Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/disaster-alerts/ndma-flood-earthquake-sms-alert-setup-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Early Warnings</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NDMA Disaster SMS Alert Setup →
              </h3>
              <p className="text-xs text-slate-500 mt-1">How to enable geo-fenced flood &amp; earthquake SMS.</p>
            </Link>

            <Link
              href="/alerts/flood-alert-pakistan-ndma-pdma"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Live Advisory</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Flood Alert Tracking Portal →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Live river flow rates and barrage discharge data.</p>
            </Link>

            <Link
              href="/certificates/police-character-certificate-online-apply-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">Police Services</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Police Character Certificate Online →
              </h3>
              <p className="text-xs text-slate-500 mt-1">Apply for verified police clearance certificates.</p>
            </Link>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Frequently Asked Questions (Emergency Helplines Pakistan)
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Does dialing 1122 work in all provinces of Pakistan?',
                a: 'Yes. Dialing 1122 connects you to government emergency ambulance, firefighting, and technical rescue services across Punjab, Khyber Pakhtunkhwa, Azad Jammu & Kashmir, Gilgit-Baltistan, Islamabad Capital Territory, and in Sindh through the Sindh Emergency Rescue Service (SERS 1122).',
              },
              {
                q: 'What is the difference between calling Rescue 1122 versus Edhi 115 or Chhipa 1020?',
                a: 'Rescue 1122 is a fully government-funded emergency service with trained emergency medical technicians (EMTs), paramedic-equipped ambulances, fire trucks, and hydraulic rescue gear. Edhi Foundation (115) and Chhipa (1020) are premier non-profit humanitarian ambulance networks specialized in fast emergency medical transport, mass casualty evacuation, and inter-city patient transfers nationwide.',
              },
              {
                q: 'Do emergency helpline numbers (1122, 15, 115, 130) work without mobile balance or a SIM card?',
                a: 'Yes. Under Pakistan Telecommunication Authority (PTA) mandatory public safety regulations, national emergency short codes (1122, 15, 16, 115, 130, 911) are 100% toll-free and connect through any available cellular tower even if your prepaid balance is Rs. 0.00 or your SIM is locked/unregistered.',
              },
              {
                q: 'What is the current status of the single unified emergency number 911 (PEHEL) in Pakistan?',
                a: 'The Pakistan Emergency Helpline (PEHEL 911) is a national initiative launched to consolidate police, medical, fire, and highway dispatch into a single universal emergency number. While 911 is operational and routes calls to relevant provincial command centers, keeping primary dedicated direct numbers (1122, 15, 115, 130) is strongly advised for immediate, direct response.',
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
            { label: 'Punjab Emergency Service (Rescue 1122) Official Portal', url: 'https://rescue.gov.pk/' },
            { label: 'Sindh Emergency Rescue Service (SERS 1122)', url: 'https://sers.gos.pk/' },
            { label: 'Edhi Foundation Pakistan 24/7 Relief Operations', url: 'https://edhi.org/' },
            { label: 'National Highways & Motorway Police (NHMP)', url: 'https://nhmp.gov.pk/' },
            { label: 'Pakistan Telecommunication Authority (PTA) Emergency Shortcodes', url: 'https://pta.gov.pk/' },
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
