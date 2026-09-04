import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ProcessStepsDiagram, FAQAccordionVisual } from '@/components/visuals';
import {
  PhoneCall,
  Mail,
  Globe,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  ShieldAlert,
  Smartphone,
  ExternalLink,
  MessageSquare,
  Building,
  HelpCircle,
  FileCheck,
  X,
  Check,
  MapPin,
  Sparkles,
  Info,
  LifeBuoy
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NADRA Helpline & Complaint Directory 2026 – Numbers, 1777 vs 7000 & Portal',
  description:
    'Verified 2026 directory of NADRA helpline numbers & formal complaint channels: Dial 1777 (mobile) or 051-111-786-100 (landline/overseas). Official CMS complaint portal, email csd@nadra.gov.pk, tracking tickets, and WhatsApp scam warnings.',
  keywords: [
    'nadra helpline 2026',
    'nadra helpline number 1777',
    'nadra complaint online portal',
    'nadra 7000 helpline obsolete',
    'nadra email address csd',
    'nadra customer care karachi lahore islamabad',
    'nadra complaint tracking status',
    'nadra whatsapp number scam warning',
    'how to file complaint against nadra staff',
  ],
  openGraph: {
    title: 'NADRA Helpline & Complaint Directory 2026 – Numbers & Dispute Resolution',
    description:
      'Official directory of NADRA contact channels: 1777 mobile shortcode, 051-111-786-100 landline, CMS dispute resolution portal, and complaint tracking.',
    url: 'https://www.pakistaninfohub.com/nadra/nadra-helpline-complaint-directory-2026',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/nadra/nadra-helpline-complaint-directory-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'NADRA Services', item: 'https://www.pakistaninfohub.com/nadra' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'NADRA Helpline & Complaint Directory 2026',
          item: 'https://www.pakistaninfohub.com/nadra/nadra-helpline-complaint-directory-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'NADRA Helpline & Complaint Directory 2026: Official Numbers, CMS Portal & Dispute Resolution',
      description:
        'A comprehensive public documentation guide detailing verified contact numbers for NADRA (1777 and 051-111-786-100), online complaint procedures, ticket tracking, and consumer protection.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-03',
      dateModified: '2026-09-03',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/nadra/nadra-helpline-complaint-directory-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to File and Track a Formal Complaint with NADRA',
      description: 'Step-by-step verified procedure to lodge a grievance regarding delayed processing, card errors, or staff conduct.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Choose Your Filing Channel',
          text: 'Select either the 24/7 Phone Helpline (Dial 1777 from mobile or 051-111-786-100), the online Complaint Management System (CMS) at id.nadra.gov.pk/complaint/, or write to csd@nadra.gov.pk.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Provide Application Token & Identity Details',
          text: 'State your 13-digit CNIC number, 10 to 12-digit Tracking ID from your token receipt slip, the specific NRC center visited, and a factual chronological summary of the issue.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Obtain Unique Complaint Tracking ID',
          text: 'Upon submission, the system or helpline representative generates an official Complaint Reference Ticket Number (e.g. CMS-2026-XXXXX) and sends an SMS receipt.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Track Resolution & Escalate if Unresolved',
          text: 'Standard inquiry resolution takes 3 to 7 working days. If unresolved, escalate the ticket number to the Prime Minister’s Citizen Portal (PMDU) or the concerned Regional Director.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the official NADRA helpline number in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For mobile callers inside Pakistan (Jazz, Zong, Telenor, Ufone), the official 24/7 helpline is shortcode 1777. For landline callers and overseas Pakistanis calling from abroad, the official helpline is +92 51 111 786 100.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the 7000 helpline number still work for NADRA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The 4-digit code "7000" was an older shortcode that is no longer active. Many citizens still search for 7000 due to outdated internet guides, but calls will fail or disconnect. You must dial 1777 from any cellular mobile phone.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does NADRA have an official WhatsApp number for customer queries?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, NADRA does NOT operate any two-way WhatsApp phone number for resolving complaints, checking card status, or collecting citizen documents. NADRA only maintains an official one-way WhatsApp broadcast Channel to publish announcements. Any individual or agency offering NADRA services or requesting CNIC copies over WhatsApp is fraudulent.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I lodge a complaint if my CNIC has spelling errors printed by NADRA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If the spelling error was caused by data entry operator negligence (and your submitted form had the correct spelling), lodge an immediate ticket via the CMS portal (id.nadra.gov.pk/complaint/) or call 1777 with your token tracking number. The NRC is required to reprint the card without charging duplicate fees.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where can I report rude behavior or bribery demands by NADRA staff?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can report staff misconduct immediately to the Center Incharge or Regional Vigilance Cell, lodge a priority ticket via 1777 (option 4 for complaints), email csd@nadra.gov.pk, or submit a report on the Prime Minister’s Performance Delivery Unit (PMDU / Citizen’s Portal).',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I check the status of an existing complaint?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Visit id.nadra.gov.pk/complaint/ and click "Check Status", then enter your Complaint Reference Number and registered mobile number. Alternatively, dial 1777 and quote your ticket number to the customer service agent.',
          },
        },
      ],
    },
  ],
};

export default function NadraHelplineComplaintDirectoryPage() {
  const breadcrumbs = [
    { nameEn: 'NADRA Services', nameUr: 'نادرا سروسز', url: '/nadra' },
    { nameEn: 'NADRA Helpline & Complaint Directory 2026', nameUr: 'نادرا ہیلپ لائن اور شکایات ڈائریکٹری 2026' },
  ];

  const complaintSteps = [
    {
      number: 1,
      icon: <FileCheck className="w-5 h-5" />,
      titleEn: 'Gather Token Slip & CNIC',
      titleUr: 'رسید اور شناختی کارڈ تیار رکھیں',
      descEn: 'Have your 13-digit CNIC and 10 to 12-digit Tracking ID ready. Complaints cannot be logged without reference details.',
      descUr: 'اپنا 13 ہندسوں کا شناختی کارڈ نمبر اور ٹوکن رسید پر درج ٹریکنگ نمبر سامنے رکھیں۔',
      tagEn: 'Reference Ready',
      tagUr: 'ریکارڈ تیاری',
    },
    {
      number: 2,
      icon: <PhoneCall className="w-5 h-5" />,
      titleEn: 'Dial 1777 or Open CMS Portal',
      titleUr: '1777 ملائیں یا سی ایم ایس پورٹل کھولیں',
      descEn: 'Call 1777 (mobile) or submit via id.nadra.gov.pk/complaint/. Explain the exact service delay or issue.',
      descUr: 'موبائل سے 1777 ملائیں یا سرکاری پورٹل پر جا کر آن لائن شکایت کا اندراج کروائیں۔',
      tagEn: 'Official Route',
      tagUr: 'سرکاری راستہ',
    },
    {
      number: 3,
      icon: <LifeBuoy className="w-5 h-5" />,
      titleEn: 'Receive Ticket Reference',
      titleUr: 'شکایت کا ریفرنس نمبر حاصل کریں',
      descEn: 'An automated SMS confirms your Complaint Tracking Number (e.g. CMS-2026-XXXXX) for official tracking.',
      descUr: 'شکایت درج ہوتے ہی آپ کے موبائل پر ٹریکنگ نمبر کا تصدیقی میسج بھیجا جائے گا۔',
      tagEn: 'Unique ID',
      tagUr: 'مخصوص نمبر',
    },
    {
      number: 4,
      icon: <Clock className="w-5 h-5" />,
      titleEn: 'Resolution in 3–7 Days',
      titleUr: '3 سے 7 دنوں میں ازالہ',
      descEn: 'NADRA Customer Services Division (CSD) investigates and contacts you with the final resolution status.',
      descUr: 'نادرا کسٹمر سروسز ڈویژن شکایت کی جانچ کر کے مقررہ وقت میں مسئلہ حل کرتا ہے۔',
      tagEn: 'Resolution',
      tagUr: 'حل کا مرحلہ',
    },
  ];

  const verifiedChannels = [
    {
      channel: 'Mobile Phone Helpline (Nationwide)',
      number: '1777',
      timing: '24 Hours / 7 Days a Week',
      fee: 'Standard carrier mobile call rate',
      scope: 'General inquiries, application status, biometric issues, and direct complaint filing.',
    },
    {
      channel: 'Landline & Overseas Helpline',
      number: '+92 51 111 786 100',
      timing: '24 Hours / 7 Days a Week',
      fee: 'Standard landline / international call charge',
      scope: 'All inquiries from Pakistani landlines, PTCL, and overseas citizens in UK, Gulf, US, Europe.',
    },
    {
      channel: 'Online Complaint Management System (CMS)',
      number: 'id.nadra.gov.pk/complaint/',
      timing: '24/7 Web Access',
      fee: '100% Free',
      scope: 'Detailed written complaints with document uploads (proof of wrong printing, fee slips, token photos).',
    },
    {
      channel: 'Official Customer Service Email',
      number: 'csd@nadra.gov.pk',
      timing: 'Official Working Days Response',
      fee: '100% Free',
      scope: 'Formal escalation, corporate correspondence, and Overseas NICOP dispute resolution.',
    },
    {
      channel: 'Prime Minister’s Citizen Portal (PMDU)',
      number: 'Citizen’s Portal Mobile App',
      timing: '24/7 Citizen Redressal',
      fee: '100% Free',
      scope: 'High-level federal escalation for unresolved corruption, bribery, or extreme delays.',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="VERIFIED CONTACT DIRECTORY 2026" labelUr="مصدقہ رابطہ ڈائریکٹری" variant="navy" />
            <VerifiedBadge textEn="1777 & 051-111-786-100 VERIFIED" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            NADRA Helpline &amp; Complaint Directory 2026: Verified Numbers, CMS Portal &amp; Dispute Resolution
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              نادرا ہیلپ لائن اور شکایات ڈائریکٹری: 1777، آن لائن پورٹل اور مسئلہ حل کرانے کا طریقہ
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Facing an unexpected delay, wrong name printed on your card, or unhelpful counter staff? Here is the complete official directory of NADRA helpline phone numbers, the online Complaint Management System (CMS), and how to escalate unresolved disputes.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="Official NADRA Helpline Numbers & Complaint Channels (2026)"
          topicTitleUr="نادرا کے مصدقہ ہیلپ لائن نمبرز اور شکایات کے راستے"
          answerEn="To contact NADRA: Dial shortcode 1777 from any Pakistani mobile network (Jazz, Zong, Telenor, Ufone) or call +92 51 111 786 100 from landlines and overseas. Note that '7000' is an obsolete shortcode. To file a formal complaint, use the official Complaint Management System at id.nadra.gov.pk/complaint/ or email csd@nadra.gov.pk. NADRA does NOT operate an individual two-way WhatsApp helpline."
          answerUr="نادرا سے رابطے کے لیے موبائل سے 1777 ملائیں (تمام نیٹ ورکس پر دستیاب) یا لینڈ لائن اور بیرون ملک سے 100 786 111 51 92+ پر کال کریں۔ یاد رہے کہ 7000 پرانا کوڈ ہے جو اب کام نہیں کرتا۔ آن لائن شکایت درج کرانے کے لیے id.nadra.gov.pk/complaint پر جائیں یا csd@nadra.gov.pk پر ای میل کریں۔ نادرا کا کوئی آفیشل واٹس ایپ نمبر شکایات کے لیے موجود نہیں ہے۔"
        />

        {/* Crucial Facts Section */}
        <section className="p-6 rounded-2xl bg-amber-50/70 dark:bg-slate-900/80 border border-amber-200/80 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-doc-seal dark:text-amber-400 font-serif font-bold text-lg">
            <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
            <span>Key Contact Clarifications for Citizens</span>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Many Pakistani citizens waste hours dialing old numbers or falling for fraudulent social media contacts. NADRA operates a centralized call center based in Islamabad that routes all nationwide inquiries through unified numbers:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm">
            <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700">
              <strong className="text-doc-ink dark:text-white block font-bold">1777 (Active) vs 7000 (Obsolete)</strong>
              <span className="text-slate-600 dark:text-slate-400">
                &apos;7000&apos; was phased out years ago. Always dial <strong>1777</strong> from mobile handsets.
              </span>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700">
              <strong className="text-doc-ink dark:text-white block font-bold">No City-Specific Helplines</strong>
              <span className="text-slate-600 dark:text-slate-400">
                There are no separate inquiry numbers for Karachi, Lahore, or Peshawar; all calls route centrally.
              </span>
            </div>
          </div>
        </section>

        {/* Directory Table */}
        <section className="space-y-4">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass">Official Directory</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
              Verified NADRA Contact &amp; Escalation Channels
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              Use the authorized channels below depending on your location, device, and urgency of the issue.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
              <thead className="bg-slate-100 dark:bg-slate-800 font-serif font-bold text-doc-ink dark:text-white">
                <tr>
                  <th className="p-3.5 border-b border-slate-200 dark:border-slate-700">Channel Name</th>
                  <th className="p-3.5 border-b border-slate-200 dark:border-slate-700">Number / Portal URL</th>
                  <th className="p-3.5 border-b border-slate-200 dark:border-slate-700">Operating Hours</th>
                  <th className="p-3.5 border-b border-slate-200 dark:border-slate-700">Primary Usage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300">
                {verifiedChannels.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-doc-ink dark:text-white">
                      {item.channel}
                    </td>
                    <td className="p-3.5 font-mono font-bold text-doc-seal dark:text-amber-400">
                      {item.number}
                    </td>
                    <td className="p-3.5 text-xs text-slate-500 dark:text-slate-400">
                      {item.timing}
                    </td>
                    <td className="p-3.5 text-xs text-slate-600 dark:text-slate-300">
                      {item.scope}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Process Steps Diagram */}
        <ProcessStepsDiagram
          badgeEn="DISPUTE RESOLUTION 2026"
          badgeUr="شکایات کے اندراج کا طریقہ"
          titleEn="Step-by-Step Procedure to File & Track a Complaint"
          titleUr="نادرا سے متعلق شکایت درج اور ٹریک کرنے کا باضابطہ طریقہ"
          subtitleEn="Follow these 4 verified steps to ensure your grievance is registered, tracked, and officially resolved."
          subtitleUr="اپنی درخواست یا عملے کے رویے سے متعلق شکایت کے حل کے لیے ان مراحل پر عمل کریں۔"
          steps={complaintSteps}
        />

        {/* WhatsApp Scam Warning Box */}
        <section className="p-6 sm:p-8 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-300 dark:border-rose-800 space-y-4">
          <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-serif font-extrabold text-xl">
            <ShieldAlert className="w-6 h-6 shrink-0" />
            <span>Fraud Warning: Fake NADRA WhatsApp Numbers</span>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Citizens frequently encounter fraudulent Facebook ads, YouTube videos, and WhatsApp numbers claiming to provide <em>&quot;NADRA Online Service &amp; Complaint Help&quot;</em>. Here are the facts you must know to protect your identity:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800 space-y-2">
              <div className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400 font-bold text-sm">
                <X className="w-4 h-4" />
                <span>Dangerous Impersonation Traps</span>
              </div>
              <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5">
                <li>Never send photographs of your CNIC, B-Form, or passport to any WhatsApp number.</li>
                <li>Never transfer money via JazzCash or EasyPaisa for &quot;fast-track verification&quot;.</li>
                <li>Scammers use stolen data to register illegal SIMs or fraudulent bank accounts.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 space-y-2">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                <Check className="w-4 h-4" />
                <span>NADRA Official Reality</span>
              </div>
              <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5">
                <li>NADRA operates ONLY an official one-way WhatsApp broadcast channel for news.</li>
                <li>Customer complaints are handled ONLY via 1777 and <strong>id.nadra.gov.pk</strong>.</li>
                <li>Official staff will never contact you from personal 03XX mobile numbers.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Types of Complaints Covered */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex items-center gap-2 font-serif font-extrabold text-xl text-doc-ink dark:text-white">
            <Info className="w-5 h-5 text-doc-seal dark:text-amber-400" />
            <span>Common Complaint Scenarios &amp; How NADRA Resolves Them</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <strong className="text-doc-ink dark:text-white block font-bold">1. Delivery Timeline Exceeded</strong>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                If your card has exceeded 31 days (Normal), 15 days (Urgent), or 7 days (Executive) without updates, quote your Tracking ID on 1777 to initiate priority escalation.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <strong className="text-doc-ink dark:text-white block font-bold">2. Wrong Data Printed by Center</strong>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                If your card arrives with incorrect name spelling or birth date due to counter error, submit your signed token slip copy via the CMS portal for a free reprint.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <strong className="text-doc-ink dark:text-white block font-bold">3. Staff Misconduct or Bribery</strong>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                NADRA operates a zero-tolerance anti-corruption policy. Report employee misconduct directly to the Regional Vigilance Cell via 1777 or the PMDU Citizen’s Portal.
              </p>
            </div>
          </div>
        </section>

        {/* Ad Zone */}
        <AdPlacementZone format="horizontal" />

        {/* Cross-linking Section */}
        <section className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h2 className="font-serif font-extrabold text-xl text-doc-ink dark:text-white">
            Related Civic Helplines &amp; NADRA Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            <Link
              href="/nadra/nadra-tracking-id-check-online-2026"
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex items-center justify-between group"
            >
              <span className="font-bold text-doc-ink dark:text-white group-hover:text-doc-seal">NADRA Tracking Online</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-doc-seal" />
            </Link>
            <Link
              href="/nadra/nadra-registration-center-locator-guide-2026"
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex items-center justify-between group"
            >
              <span className="font-bold text-doc-ink dark:text-white group-hover:text-doc-seal">NRC Center Locator</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-doc-seal" />
            </Link>
            <Link
              href="/alerts/pakistan-emergency-helpline-numbers-directory-2026"
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex items-center justify-between group"
            >
              <span className="font-bold text-doc-ink dark:text-white group-hover:text-doc-seal">Emergency Directory</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-doc-seal" />
            </Link>
            <Link
              href="/nadra/cnic-new-rules-2026"
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition flex items-center justify-between group"
            >
              <span className="font-bold text-doc-ink dark:text-white group-hover:text-doc-seal">CNIC New Rules 2026</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-doc-seal" />
            </Link>
          </div>
        </section>

        {/* FAQ Accordion Visual */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions: NADRA Helpline & Complaints"
          titleUr="عام سوالات: نادرا ہیلپ لائن اور شکایات کے حل"
          subtitleEn="Direct verified answers to common questions about calling 1777, tracking complaint tickets, and resolving printing disputes."
          subtitleUr="ہیلپ لائن پر رابطہ، شکایت کے سٹیٹس اور شناختی کارڈ کی درستی سے متعلق بنیادی معلومات۔"
          items={[
            {
              questionEn: "What is the official NADRA helpline number in Pakistan?",
              questionUr: "پاکستان میں نادرا کا مصدقہ ہیلپ لائن نمبر کیا ہے؟",
              answerEn: "From any Pakistani mobile number (Jazz, Zong, Telenor, Ufone), dial 1777. For landline or overseas callers, dial +92 51 111 786 100. Both channels operate 24 hours a day, 7 days a week.",
              answerUr: "موبائل سے 1777 ملائیں اور لینڈ لائن یا بیرون ملک سے 100 786 111 51 92+ پر رابطہ کریں۔ یہ سروس 24 گھنٹے کھلی رہتی ہے۔",
            },
            {
              questionEn: "Does the 7000 helpline number still connect to NADRA?",
              questionUr: "کیا نادرا کا 7000 والا پرانا نمبر اب بھی ملتا ہے؟",
              answerEn: "No. 7000 is an obsolete shortcode that is no longer operational. Many citizens still search for 7000 due to old blog posts, but dialing it will fail. Always use 1777.",
              answerUr: "نہیں، 7000 اب بند ہو چکا ہے۔ پرانی ویب سائٹس پر یہ نمبر لکھا ہے مگر اب صرف 1777 ہی سرکاری نمبر ہے۔",
            },
            {
              questionEn: "Does NADRA have an official WhatsApp number for customer queries?",
              questionUr: "کیا نادرا کا کوئی آفیشل واٹس ایپ نمبر ہے؟",
              answerEn: "No. NADRA does not provide customer service or complaint resolution via WhatsApp. NADRA only operates a one-way WhatsApp broadcast Channel for public announcements. Never share your CNIC details with unverified WhatsApp accounts.",
              answerUr: "نادرا کا کوئی انفرادی واٹس ایپ رابطہ نہیں ہے۔ صرف معلوماتی چینل موجود ہے۔ کسی بھی واٹس ایپ نمبر پر ذاتی کاغذات ہرگز نہ بھیجیں۔",
            },
            {
              questionEn: "How do I fix a spelling error made by NADRA on my printed card?",
              questionUr: "اگر نادرا کے کارڈ پر نام کی سپیلنگ غلط پرنٹ ہو جائے تو کیا کریں؟",
              answerEn: "If the error was made by the data entry clerk despite correct supporting documents, register a complaint via 1777 or id.nadra.gov.pk/complaint/. The center will issue a corrected reprint without charging fresh card fees.",
              answerUr: "اگر نادرا عملے کی غلطی سے نام غلط چھپ گیا ہے تو فوری طور پر 1777 پر یا پورٹل پر شکایت درج کروائیں۔ کارڈ فری دوبارہ پرنٹ ہو گا۔",
            },
            {
              questionEn: "How do I check the status of my existing complaint ticket?",
              questionUr: "درج شدہ شکایت کی پیش رفت کیسے چیک کریں؟",
              answerEn: "Visit id.nadra.gov.pk/complaint/ and enter your Complaint Reference Number, or dial 1777 and quote your ticket ID to the customer support representative.",
              answerUr: "پورٹل پر جا کر اپنا کمپلینٹ ریفرنس نمبر درج کریں یا 1777 پر کال کر کے نمائندے کو اپنا ٹکٹ نمبر بتائیں۔",
            },
            {
              questionEn: "Where can I report bribery or illegal demands by agents outside NADRA centers?",
              questionUr: "نادرا سنٹر کے باہر موجود ایجنٹوں یا رشوت ستانی کی شکایت کہاں کریں؟",
              answerEn: "Report illegal agents to the Center Incharge immediately, lodge a complaint on the Prime Minister’s Citizen Portal (PMDU), or call the NADRA Anti-Corruption Vigilance Cell via 1777.",
              answerUr: "فوری طور پر سنٹر انچارج کو مطلع کریں یا سٹیزن پورٹل (PMDU) اور 1777 پر ویجیلنس سیل کو شکایت درج کروائیں۔",
            },
          ]}
        />
      </div>
    </>
  );
}
