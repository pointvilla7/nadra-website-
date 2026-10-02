import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { StepFlowDiagram, StepFlowItem } from '@/components/StepFlowDiagram';
import { FAQAccordionVisual, FAQVisualItem } from '@/components/visuals/FAQAccordionVisual';
import { WomenProtectionDirectoryHelper } from '@/components/WomenProtectionDirectoryHelper';
import {
  ShieldAlert,
  ShieldCheck,
  PhoneCall,
  Scale,
  Building,
  Home,
  HeartHandshake,
  AlertTriangle,
  Info,
  Clock,
  ExternalLink,
  MapPin,
  Lock,
  FileText,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  HeartPulse,
  UserCheck,
  ArrowRight,
  LifeBuoy,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Women's Protection & Domestic Violence Helplines Pakistan (2026) | Pakistan Info Hub",
  description:
    'Complete, verified directory of women protection and domestic violence helplines across all 4 provinces of Pakistan and Islamabad: Punjab (1737 & 1043), Sindh (1094), KP Bolo (0800-22227), Balochistan (1089), and Federal MoHR (1099).',
  keywords: [
    'womens protection helpline pakistan 2026',
    'domestic violence helpline pakistan',
    'punjab women helpline 1043 1737',
    'sindh women helpline 1094',
    'kpk bolo helpline 0800-22227',
    'balochistan women helpline 1089',
    'dar ul aman shelter admission pakistan',
    'court protection order domestic violence pakistan',
  ],
  openGraph: {
    title: "Women's Protection & Domestic Violence Helplines in Pakistan (2026): All Provinces",
    description:
      'Calm, authoritative directory of verified emergency numbers, court protection order procedures, VAWCs, and Dar-ul-Aman safe shelters across Punjab, Sindh, KP, Balochistan, and Islamabad.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/legal/women-protection-domestic-violence-helplines-pakistan-2026',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/legal/women-protection-domestic-violence-helplines-pakistan-2026',
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
          name: "Women's Protection & Domestic Violence Helplines 2026",
          item: 'https://www.pakistaninfohub.com/legal/women-protection-domestic-violence-helplines-pakistan-2026',
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Access Emergency Protection and Legal Remedies for Domestic Violence in Pakistan',
      description:
        'Step-by-step guidance for women in Pakistan to secure immediate physical safety, contact verified provincial helplines, obtain medical documentation, and petition for statutory Court Protection Orders.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Ensure Immediate Physical Safety',
          text: 'If in active life-threatening physical danger, immediately call Police Emergency at 15 or your provincial women emergency line. If preparing to leave safely, keep essential documents (CNIC, children B-forms, medication, cash) accessible.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Contact the Dedicated Provincial Women Helpline',
          text: 'Call the verified toll-free helpline for your province: Punjab (1737 / 0800-01737 for emergency, 1043 for legal advice), Sindh (1094), Khyber Pakhtunkhwa (0800-22227 Bolo), Balochistan (1089), or Federal MoHR (1099).',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Obtain Official Medico-Legal Examination (If Injured)',
          text: 'If physical violence occurred, visit a government Tehsil/District Headquarter Hospital (THQ/DHQ) or Violence Against Women Centre (VAWC) to receive medical care and request an official Medico-Legal Certificate (MLC).',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Petition for Statutory Protection, Residence, and Monetary Orders',
          text: 'With the assistance of a Women Protection Officer or government legal aid panel, submit a formal application before the local Judicial Magistrate under your provincial domestic violence act.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is there a single national domestic violence law that applies across Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Following the 18th Constitutional Amendment, social welfare, local policing, and domestic affairs were devolved to the provinces. Each province has enacted its own distinct domestic violence legislation: Punjab (Punjab Protection of Women Against Violence Act 2016), Sindh (Sindh Domestic Violence Act 2013), Khyber Pakhtunkhwa (KP Domestic Violence Act 2021), and Balochistan (Balochistan Domestic Violence Act 2014). Islamabad Capital Territory is governed by its dedicated federal domestic violence act.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between Punjab helpline 1043 and helpline 1737?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Punjab maintains two distinct, specialized women helplines: 1737 (or toll-free 0800-01737) is operated by the Punjab Women Protection Authority (PWPA) specifically for immediate violence response, police rescue, and crisis intervention. In contrast, 1043 is operated by the Punjab Commission on the Status of Women (PCSW) for comprehensive legal advice, psycho-social counseling, workplace harassment inquiries, and property/inheritance disputes.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a court protection order under Pakistani domestic violence law?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Protection Order is a legally binding judicial decree issued by a Magistrate restraining an abusive respondent from committing acts of domestic violence, entering the workplace or residence of the survivor, contacting her directly, or possessing weapons. Courts can also issue Residence Orders (preventing the aggressor from evicting the woman from the shared home) and Monetary Orders (mandating maintenance, child support, and medical compensation).',
          },
        },
        {
          '@type': 'Question',
          name: 'How can a woman access a government Dar-ul-Aman shelter home?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dar-ul-Aman shelters are state-run temporary safe havens operated by provincial Social Welfare Departments across all major districts. Admission is facilitated through a referral from a Judicial Magistrate, a notified Women Protection Officer, or an official police intake following a helpline call. In accordance with safety protocols, shelter home physical addresses are kept confidential to protect residents from retaliatory violence.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are calls to women protection helplines in Pakistan free of charge?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Official emergency and counseling helplines—including 1043 and 0800-01737 in Punjab, 1094 in Sindh, 0800-22227 in KP, 1089 in Balochistan, and 1099 nationwide—are toll-free services accessible from mobile phones and landlines across Pakistan.',
          },
        },
      ],
    },
    {
      '@type': 'Article',
      headline: "Women's Protection & Domestic Violence Helplines in Pakistan (2026): All Provinces & Legal Guide",
      description:
        'Authoritative public directory explaining provincial domestic violence legal frameworks, verified emergency helplines, court protection orders, VAWCs, and safe shelters in Pakistan.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-10-02',
      dateModified: '2026-10-02',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/legal/women-protection-domestic-violence-helplines-pakistan-2026',
    },
  ],
};

export default function WomenProtectionHelplinesPage() {
  const breadcrumbs = [
    { nameEn: 'Police & Legal Services', nameUr: 'پولیس و قانونی خدمات', url: '/legal' },
    { nameEn: "Women's Protection & Domestic Violence Helplines 2026", nameUr: 'خواتین تحفظ و گھریلو تشدد ہیلپ لائنز 2026' },
  ];

  const processSteps: StepFlowItem[] = [
    {
      number: 1,
      icon: <LifeBuoy className="w-5 h-5 text-red-500" />,
      titleEn: 'Secure Immediate Physical Safety',
      titleUr: 'فوری جانی تحفظ کو یقینی بنائیں',
      descEn:
        'If in acute physical danger, dial 15 (Police) or your provincial women emergency line. If planning to leave, discretely secure your CNIC, children’s birth records, phone, and essential medicines.',
      descUr:
        'فوری جانی خطرے کی صورت میں پولیس 15 یا صوبائی ہیلپ لائن پر رابطہ کریں۔ محفوظ اخراج کے لیے شناختی کارڈ اور ضروری اشیاء ساتھ رکھیں۔',
      tagEn: 'Emergency',
      tagUr: 'ہنگامی اقدام',
      noteEn: 'Your physical safety is always the first priority.',
      noteUr: 'آپ کا جانی تحفظ ہمیشہ اولین ترجیح ہے۔',
    },
    {
      number: 2,
      icon: <PhoneCall className="w-5 h-5 text-emerald-500" />,
      titleEn: 'Connect with Provincial Helpline',
      titleUr: 'صوبائی ہیلپ لائن سے رابطہ',
      descEn:
        'Call the verified toll-free helpline for your jurisdiction: Punjab (1737 / 1043), Sindh (1094), KP (0800-22227), Balochistan (1089), or Federal (1099). All calls are confidential and handled by female operators.',
      descUr:
        'اپنے متعلقہ صوبے کی مفت ہیلپ لائن پر کال کریں۔ تمام کالز پرائیویٹ اور تربیت یافتہ خواتین کونسلرز کے زیر انتظام ہوتی ہیں۔',
      tagEn: 'Toll-Free',
      tagUr: 'مفت رابطہ',
      noteEn: 'Operators provide confidential guidance, police dispatch, and counseling.',
      noteUr: 'کونسلرز مکمل رازداری کے ساتھ قانونی اور ہنگامی رہنمائی فراہم کرتے ہیں۔',
    },
    {
      number: 3,
      icon: <HeartPulse className="w-5 h-5 text-blue-500" />,
      titleEn: 'Medical Care & Medico-Legal Certificate (MLC)',
      titleUr: 'طبی امداد و میڈیکو لیگل سرٹیفکیٹ',
      descEn:
        'If physical assault occurred, visit a government THQ/DHQ hospital or Violence Against Women Centre (VAWC). Request an official Medico-Legal Examination to document injuries for court proceedings.',
      descUr:
        'جسمانی تشدد کی صورت میں سرکاری ہسپتال یا وائلنس اگینسٹ ویمن سنٹر جائیں اور باضابطہ میڈیکو لیگل سرٹیفکیٹ (MLC) بنوائیں۔',
      tagEn: 'Evidence',
      tagUr: 'طبی ثبوت',
      noteEn: 'An MLC serves as essential clinical evidence in judicial hearings.',
      noteUr: 'عدالتی کارروائی کے لیے میڈیکو لیگل رپورٹ ٹھوس ثبوت کا کام کرتی ہے۔',
    },
    {
      number: 4,
      icon: <Scale className="w-5 h-5 text-purple-500" />,
      titleEn: 'Petition for Statutory Protection Orders',
      titleUr: 'عدالتی پروٹیکشن اور رہائشی احکامات',
      descEn:
        'Through a Women Protection Officer or government legal aid lawyer, file an application before the Judicial Magistrate. The court can prohibit the aggressor from contacting you and enforce your residence rights.',
      descUr:
        'ویمن پروٹیکشن آفیسر یا سرکاری وکیل کے ذریعے مجسٹریٹ کی عدالت میں پروٹیکشن اور رہائشی حکم امتناعی کی درخواست دائر کریں۔',
      tagEn: 'Court Decree',
      tagUr: 'عدالتی فیصلہ',
      noteEn: 'Civil protection orders can be granted without mandatory criminal jail trials.',
      noteUr: 'عدالت بغیر کسی طویل مقدمے کے فوری عبوری تحفظ کا حکم دے سکتی ہے۔',
    },
  ];

  const faqItems: FAQVisualItem[] = [
    {
      questionEn: 'Is domestic violence in Pakistan governed by a single national law or provincial laws?',
      questionUr: 'کیا پاکستان میں گھریلو تشدد کا ایک ہی قومی قانون ہے یا صوبائی قوانین ہیں؟',
      answerEn:
        'Domestic violence in Pakistan is governed primarily by provincial legislation, as social welfare and local law enforcement were devolved to provinces under the 18th Constitutional Amendment. Each province has its own statute: Punjab enacted the Protection of Women Against Violence Act 2016; Sindh passed the Domestic Violence (Protection and Prevention) Act 2013; Khyber Pakhtunkhwa enacted the Domestic Violence against Women Act 2021; and Balochistan enacted the Domestic Violence (Prevention and Protection) Act 2014. Islamabad Capital Territory has its own dedicated federal statute.',
      answerUr:
        '18 ویں آئینی ترمیم کے بعد گھریلو تشدد اور خواتین کا تحفظ صوبائی شعبہ بن چکا ہے۔ ہر صوبے کا الگ ایکٹ ہے: پنجاب پروٹیکشن آف ویمن ایکٹ 2016، سندھ ڈومیسٹک وائلنس ایکٹ 2013، کے پی ایکٹ 2021 اور بلوچستان ایکٹ 2014۔ اسلام آباد کے لیے وفاقی ایکٹ لاگو ہے۔',
    },
    {
      questionEn: 'What is the exact difference between Punjab helpline 1043 and helpline 1737?',
      questionUr: 'پنجاب کی ہیلپ لائن 1043 اور 1737 میں کیا فرق ہے؟',
      answerEn:
        'Punjab maintains two distinct, specialized women services: Helpline 1737 (also reachable toll-free as 0800-01737) is operated by the Punjab Women Protection Authority (PWPA) specifically for immediate violence response, emergency rescue, and physical protection center facilitation. Helpline 1043 is operated by the Punjab Commission on the Status of Women (PCSW) for legal advice, psycho-social counseling, workplace harassment inquiries, and property/inheritance rights.',
      answerUr:
        '1737 (یا 0800-01737) پنجاب ویمن پروٹیکشن اتھارٹی کی ہنگامی تشدد ریسکیو ہیلپ لائن ہے جو فوری پولیس مدد فراہم کرتی ہے۔ جبکہ 1043 ویمن کمیشن کی قانونی مشاورت، نفسیاتی کونسلنگ، ہراسانی اور جائیداد کے تنازعات کے حل کی ہیلپ لائن ہے۔',
    },
    {
      questionEn: 'What legal remedies can a Judicial Magistrate grant under provincial domestic violence acts?',
      questionUr: 'جوڈیشل مجسٹریٹ گھریلو تشدد کے تحت کون سے عدالتی احکامات جاری کر سکتا ہے؟',
      answerEn:
        'Under provincial domestic violence statutes, a magistrate can grant four primary civil remedies: (1) Protection Orders restraining the aggressor from contacting, approaching, or threatening the survivor; (2) Residence Orders ensuring the woman cannot be evicted from the shared marital household, or ordering the respondent to secure alternative accommodation; (3) Monetary Orders awarding maintenance, household living expenses, children’s educational costs, and medical damages; and (4) Custody Orders temporarily awarding custody of minor children to the mother.',
      answerUr:
        'مجسٹریٹ چار اہم احکامات جاری کر سکتا ہے: (1) پروٹیکشن آرڈر (تشدد اور رابطے پر پابندی)؛ (2) رہائشی آرڈر (مشترکہ گھر سے بے دخلی روکنا)؛ (3) نان نفقہ و اخراجات کا مالیاتی آرڈر؛ اور (4) بچوں کی عارضی تحویل (کسٹڈی آرڈر)۔',
    },
    {
      questionEn: 'How can a woman access a government Dar-ul-Aman shelter home, and are the addresses public?',
      questionUr: 'دارالامان میں پناہ کیسے حاصل کی جا سکتی ہے اور کیا ان کے پتے پبلک ہوتے ہیں؟',
      answerEn:
        'Dar-ul-Aman shelters are state-run safe havens operating across all major districts under provincial Social Welfare Departments. Admission is granted through an order from a Judicial Magistrate, a referral from a designated Women Protection Officer (WPO), or an intake via the provincial women helpline or police. In accordance with strict protection protocols, the physical addresses of Dar-ul-Aman shelter homes are intentionally kept confidential by the government to prevent retaliatory violence or unauthorized contact by respondents.',
      answerUr:
        'دارالامان میں داخلہ عدالت کے حکم، ویمن پروٹیکشن آفیسر کی سفارش یا پولیس و ہیلپ لائن کے ذریعے ہوتا ہے۔ مقیم خواتین کی حفاظت کے پیش نظر دارالامان کے درست پتے پبلک نہیں کیے جاتے تاکہ حملہ آوروں یا شرپسندوں سے تحفظ یقینی رہے۔',
    },
    {
      questionEn: 'What should a woman in a remote rural district do if local phone signals cannot connect to a shortcode helpline?',
      questionUr: 'اگر کسی دیہی علاقے میں موبائل سے شارٹ کوڈ ہیلپ لائن نہ ملے تو کیا کریں؟',
      answerEn:
        'If mobile network routing prevents connecting to a 4-digit shortcode (such as 1043, 1094, or 1089), you can: (1) Dial the nationwide Ministry of Human Rights toll-free helpline at 1099, which connects universally across all telecom operators; (2) Call the standard police emergency number at 15; or (3) Directly visit the District Social Welfare Office or Women Police Desk located at your nearest Tehsil or District Headquarters.',
      answerUr:
        'اگر شارٹ کوڈ نہ ملے تو: (1) ملک گیر مفت ہیلپ لائن 1099 پر کال کریں جو تمام نیٹ ورکس سے چلتی ہے؛ (2) پولیس ایمرجنسی 15 پر رابطہ کریں؛ یا (3) قریبی تحصیل یا ضلعی ہیڈ کوارٹر پر واقع سوشل ویلفیئر دفتر یا ویمن پولیس ڈیسک تشریف لے جائیں۔',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn max-w-5xl mx-auto font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Page Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="CIVIC SAFETY & LEGAL AID DIRECTORY" labelUr="تحفظ و قانونی رہنمائی" variant="seal" />
            <VerifiedBadge textEn="STATUTORY PROVINCIAL DIRECTORY 2026" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            Women&apos;s Protection &amp; Domestic Violence Helplines in Pakistan (2026): All Provinces &amp; Legal Guide
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              پاکستان میں خواتین کے تحفظ اور گھریلو تشدد کی ہیلپ لائنز: تمام صوبوں کی تصدیق شدہ ڈائریکٹری و عدالتی طریقہ کار
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            A calm, comprehensive, and non-judgmental directory of statutory support services, emergency numbers,
            court protection orders, and safe shelters across Punjab, Sindh, Khyber Pakhtunkhwa, Balochistan, and Islamabad.
          </p>
        </header>

        {/* "In Short" Direct Answer Box (56 words — strictly within 40-60 words requirement) */}
        <DirectAnswerBox
          topicTitleEn="What Are the Official Women Protection Helplines in Pakistan?"
          topicTitleUr="پاکستان میں خواتین کے تحفظ کے سرکاری ہیلپ لائن نمبرز کیا ہیں؟"
          answerEn="For women facing domestic violence or harassment in Pakistan, verified official helplines are provincial: In Punjab, call 1737 / 0800-01737 (violence emergency) or 1043 (legal counseling); in Sindh, call 1094; in KP, call 0800-22227 (Bolo); in Balochistan, call 1089; in Islamabad, call 8090 or nationwide human rights helpline 1099. For immediate danger, dial police at 15."
          answerUr="پاکستان میں خواتین کے تحفظ اور گھریلو تشدد کی ہیلپ لائنز صوبائی سطح پر کام کرتی ہیں: پنجاب میں 1737/0800-01737 (ہنگامی امداد) یا 1043 (قانونی مشورہ)؛ سندھ میں 1094؛ خیبر پختونخوا میں 0800-22227 (بولو ہیلپ لائن)؛ بلوچستان میں 1089؛ اسلام آباد میں 8090 یا قومی انسانی حقوق ہیلپ لائن 1099 پر کال کریں۔ فوری خطرے کی صورت میں پولیس 15 پر رابطہ کریں۔"
        />

        {/* Immediate Danger & Safety Planning Box */}
        <section className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-navy-950 via-slate-900 to-navy-950 border-2 border-red-500/60 text-white space-y-4 shadow-xl relative overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-500/20 text-red-400 border border-red-500/40">
              <LifeBuoy className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-300 bg-red-950/80 px-2 py-0.5 rounded border border-red-800">
                Immediate Physical Danger Protocol
              </span>
              <h2 className="text-xl font-serif font-extrabold text-white mt-1">
                If You or Someone You Know is in Immediate Danger
              </h2>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            If you are in acute, life-threatening danger, take these immediate, actionable steps in a calm manner:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-red-400 text-sm">Dial 15 (Police)</span>
                <PhoneCall className="w-4 h-4 text-red-400" />
              </div>
              <p className="text-slate-300 leading-relaxed">
                Pakistan’s universal police emergency response line for rapid squad dispatch to your location.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-400 text-sm">Provincial Helpline</span>
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-slate-300 leading-relaxed">
                Dial your provincial emergency line (e.g., <strong>1737</strong> in Punjab, <strong>1094</strong> in Sindh, <strong>0800-22227</strong> in KP).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-amber-400 text-sm">Safety Packing</span>
                <Lock className="w-4 h-4 text-amber-400" />
              </div>
              <p className="text-slate-300 leading-relaxed">
                If planning to leave, keep your CNIC, children’s B-forms, mobile phone, charger, and emergency cash ready.
              </p>
            </div>
          </div>

          <div className="pt-2 text-xs text-slate-400 flex items-center gap-2 border-t border-slate-800">
            <Info className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Calls to government women helplines are free, private, and will not show on itemized phone bills as charged calls.
            </span>
          </div>
        </section>

        {/* Section 1: Constitutional & Legal Architecture (Provincial Subject) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Why Domestic Violence Laws Differ by Province in Pakistan
            </h2>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/70 dark:bg-slate-900/80 border border-amber-200/80 dark:border-slate-800 space-y-3 text-xs sm:text-sm font-sans">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              A common misconception among citizens is searching for a single national &quot;Pakistan Domestic Violence Act&quot;.
              Under the <strong>18th Constitutional Amendment (2010)</strong>, subjects relating to social welfare, local policing,
              and women’s development were devolved entirely to provincial assemblies.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Because of this constitutional architecture, <strong>each province has enacted its own dedicated domestic violence law</strong>,
              administered by its own provincial Women Development Department, Commission on the Status of Women, and specialized protection authority.
              A protection order granted in Punjab follows the Punjab Act 2016, whereas a case in Karachi follows the Sindh Act 2013.
            </p>
          </div>
        </section>

        {/* Section 2: Complete Interactive Provincial Directory Helper */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Building className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Verified Provincial Helplines &amp; Support Directory
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Select your province below to view verified toll-free helplines, governing commissions, local institutional bodies,
            and fallback advice if cellular coverage is limited:
          </p>

          <WomenProtectionDirectoryHelper />
        </section>

        {/* Section 3: Understanding Legal Remedies (Court Protection Orders) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-doc-brass" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Court Orders Explained: Protection, Residence &amp; Monetary Rights
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            A critical feature of provincial domestic violence laws is that <strong>a woman does not have to file a criminal FIR or send a family member to jail to obtain immediate legal safety</strong>.
            Judicial Magistrates possess statutory authority to issue civil interim relief:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            {/* Protection Order */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-doc-brass font-serif font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <h3>1. Protection Order</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Restrains the aggressor from committing any act of violence, entering the workplace, educational institution,
                or place frequently visited by the survivor, communicating with her in any form, or possessing weapons.
                Breach of a protection order constitutes an arrestable criminal offense.
              </p>
            </div>

            {/* Residence Order */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 font-serif font-bold text-sm">
                <Home className="w-4 h-4" />
                <h3>2. Residence Order</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Prevents the aggressor from unlawfully evicting or dispossessing the woman from the shared household (regardless of whether she holds property ownership rights).
                The magistrate can also order the aggressor to relocate or provide suitable alternate accommodation.
              </p>
            </div>

            {/* Monetary Order */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-doc-seal font-serif font-bold text-sm">
                <Scale className="w-4 h-4" />
                <h3>3. Monetary &amp; Maintenance Order</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Directs the respondent to pay monthly household maintenance, cover children’s educational expenses,
                reimburse medical expenses incurred due to physical injuries, and pay compensation for mental trauma or damage to personal property.
              </p>
            </div>

            {/* Custody Order */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-purple-600 font-serif font-bold text-sm">
                <UserCheck className="w-4 h-4" />
                <h3>4. Temporary Custody Order</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Grants temporary custody of minor children to the mother during the pendency of proceedings, preventing the aggressor from forcibly separating young children from their mother.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Step-by-Step Reporting Workflow */}
        <StepFlowDiagram
          titleEn="Step-by-Step Official Protection &amp; Legal Workflow"
          titleUr="تحفظ و قانونی امداد کے حصول کا مرحلہ وار طریقہ کار"
          subtitleEn="Statutory procedure under provincial domestic violence acts"
          subtitleUr="صوبائی ایکٹ کے تحت 4 اہم مراحل"
          steps={processSteps}
        />

        {/* Section 5: Specialized Facilities (VAWCs & Dar-ul-Aman Shelters) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Building className="w-6 h-6 text-doc-seal" />
            <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white">
              Specialized Support Facilities: VAWCs &amp; Dar-ul-Aman Safe Shelters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            {/* VAWC Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 font-serif font-bold text-sm text-doc-ink dark:text-white">
                <ShieldCheck className="w-5 h-5 text-doc-brass" />
                <h3>Violence Against Women Centres (VAWCs)</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Pioneered under the Punjab Act 2016 (with flagship facilities operating in Multan and Lahore),
                Violence Against Women Centres operate on an integrated <strong>&quot;one-stop-shop&quot;</strong> model.
                Instead of requiring a survivor to travel across multiple police stations, hospitals, and courtrooms, a VAWC houses
                first-aid medical care, Medico-Legal Examination (MLC), female police reporting desks, psychological counseling,
                and legal prosecution teams under a single secure roof.
              </p>
            </div>

            {/* Dar-ul-Aman Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 font-serif font-bold text-sm text-doc-ink dark:text-white">
                <Home className="w-5 h-5 text-emerald-600" />
                <h3>Dar-ul-Aman (State Shelter Homes)</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Dar-ul-Aman shelter homes are government-supervised safe residences maintained by provincial Social Welfare Departments in almost every administrative district.
                They offer free lodging, food, medical attention, vocational training, and childcare support for women in crisis.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] text-slate-500 dark:text-slate-400">
                <strong>Why Addresses Are Confidential:</strong> In accordance with statutory safety guidelines and official government practice,
                the physical street addresses of Dar-ul-Aman shelters are intentionally not published online to protect the physical security of residents from retaliatory violence.
                Referral and safe escort are arranged directly by Judicial Magistrates, Women Protection Officers, or police after helpline intake.
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Frequently Asked Questions */}
        <FAQAccordionVisual
          titleEn="Frequently Asked Questions (Citizen Safety Guidance)"
          titleUr="خواتین کے تحفظ سے متعلق عام طور پر پوچھے جانے والے سوالات"
          subtitleEn="Verified legal, operational & helpline clarifications"
          subtitleUr="صوبائی ضوابط اور سرکاری پورٹلز کے مطابق تصدیق شدہ جوابات"
          items={faqItems}
        />

        {/* Section 7: Source Citations & References */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Official Sources &amp; Statutory References
          </h2>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-sans space-y-2 text-slate-600 dark:text-slate-400">
            <p>
              Information in this directory is compiled directly from provincial legislation, official commission portals, and verified government hotlines:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Punjab:</strong> Punjab Women Protection Authority (<code className="font-mono">pwpa.punjab.gov.pk</code>, Helpline 1737 / 0800-01737) &amp; Punjab Commission on the Status of Women (<code className="font-mono">pcsw.punjab.gov.pk</code>, Helpline 1043).
              </li>
              <li>
                <strong>Sindh:</strong> Women Development Department, Government of Sindh (<code className="font-mono">wdd.sindh.gov.pk</code>, Helpline 1094) under Sindh Act XX of 2013.
              </li>
              <li>
                <strong>Khyber Pakhtunkhwa:</strong> Social Welfare &amp; Women Empowerment Department (<code className="font-mono">swkpk.gov.pk</code>, Bolo Helpline 0800-22227) &amp; KPCSW (<code className="font-mono">kpcsw.gov.pk</code>) under KP Act XXII of 2021.
              </li>
              <li>
                <strong>Balochistan:</strong> Women Development Department, Government of Balochistan (<code className="font-mono">balochistan.gov.pk</code>, Helpline 1089) under Balochistan Act II of 2014.
              </li>
              <li>
                <strong>Federal &amp; Nationwide:</strong> Ministry of Human Rights (<code className="font-mono">mohr.gov.pk</code>, Helpline 1099) &amp; ICT Police Gender Protection Unit (Helpline 8090 / 1815).
              </li>
            </ul>
          </div>
        </section>

        {/* Section 8: Related Legal & Welfare Links */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-doc-ink dark:text-white">
            Related Legal &amp; Civic Support Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/legal/online-fir-registration-punjab-police"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-seal font-bold uppercase block">Police 1787</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Online FIR Complaint Punjab Police
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Official procedure to report crimes or police non-registration of cases.
              </p>
            </Link>

            <Link
              href="/legal/cybercrime-complaint-nccia-guide-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-emerald-600 font-bold uppercase block">Cyber Harassment</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                NCCIA Cybercrime Complaint Guide
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Report online blackmail, morphed photos, and social media stalking via 1799.
              </p>
            </Link>

            <Link
              href="/legal/police-khidmat-markaz-services-guide-2026"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass transition group"
            >
              <span className="text-xs font-mono text-doc-brass font-bold uppercase block">PKM Facilitation</span>
              <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal mt-1">
                Police Khidmat Markaz 14 Services
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Character certificates, Medico-Legal MLC counters, and loss reports.
              </p>
            </Link>
          </div>
        </section>

        {/* Section 9: Independent Site Disclaimer */}
        <div className="p-4 rounded-xl bg-navy-900 border-l-4 border-red-600 text-slate-300 text-xs font-sans space-y-1">
          <p className="font-bold text-white uppercase tracking-wider text-[11px]">
            Independent Civic Information Portal Disclaimer
          </p>
          <p className="leading-relaxed">
            Pakistan Info Hub (pakistaninfohub.com) is an independent public directory committed to spreading awareness of citizen rights and institutional remedies. We are NOT a government authority, police department, or emergency response unit. In any life-threatening or immediate crisis, please dial <strong>15</strong> (Police Emergency) or your provincial toll-free women helpline immediately.
          </p>
        </div>
      </div>
    </>
  );
}
