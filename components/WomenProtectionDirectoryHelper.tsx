'use client';

import React, { useState } from 'react';
import {
  ShieldAlert,
  PhoneCall,
  Scale,
  Building,
  Home,
  HeartHandshake,
  CheckCircle2,
  Copy,
  Check,
  AlertTriangle,
  Info,
  Clock,
  ExternalLink,
  MapPin,
  Lock,
  FileText,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export type ProvinceTabKey = 'punjab' | 'sindh' | 'kpk' | 'balochistan' | 'ict' | 'national';

interface ProvinceData {
  id: ProvinceTabKey;
  nameEn: string;
  nameUr: string;
  actTitleEn: string;
  actTitleUr: string;
  governingBodyEn: string;
  governingBodyUr: string;
  primaryHelpline: string;
  primaryHelplineLabelEn: string;
  primaryHelplineLabelUr: string;
  secondaryHelpline?: string;
  secondaryHelplineLabelEn?: string;
  secondaryHelplineLabelUr?: string;
  hoursEn: string;
  hoursUr: string;
  tollFree: boolean;
  servicesEn: string[];
  servicesUr: string[];
  institutionalSetupEn: string;
  institutionalSetupUr: string;
  fallbackAdviceEn: string;
  fallbackAdviceUr: string;
  officialPortalUrl?: string;
  officialPortalName?: string;
}

const PROVINCE_DIRECTORY: Record<ProvinceTabKey, ProvinceData> = {
  punjab: {
    id: 'punjab',
    nameEn: 'Punjab',
    nameUr: 'پنجاب',
    actTitleEn: 'Punjab Protection of Women Against Violence Act 2016 (PPWVA)',
    actTitleUr: 'پنجاب پروٹیکشن آف ویمن اگینسٹ وائلنس ایکٹ 2016',
    governingBodyEn: 'Punjab Women Protection Authority (PWPA) & Punjab Commission on the Status of Women (PCSW)',
    governingBodyUr: 'پنجاب ویمن پروٹیکشن اتھارٹی و پنجاب کمیشن آن دی سٹیٹس آف ویمن',
    primaryHelpline: '1737 / 0800-01737',
    primaryHelplineLabelEn: 'PWPA Emergency Violence Response Helpline (24/7)',
    primaryHelplineLabelUr: 'پی ڈبلیو پی اے فوری ریسکیو و تحفظ ہیلپ لائن (24/7)',
    secondaryHelpline: '1043',
    secondaryHelplineLabelEn: 'PCSW Women Helpline (Legal Advice, Inquiries & Counseling)',
    secondaryHelplineLabelUr: 'پی سی ایس ڈبلیو خواتین ہیلپ لائن (قانونی مشورہ و شکایات)',
    hoursEn: '24/7 Nationwide Toll-Free Access',
    hoursUr: '24 گھنٹے، ہفتے کے ساتوں دن مفت کال',
    tollFree: true,
    servicesEn: [
      'Immediate rescue and emergency police dispatch in domestic violence situations',
      'Free legal advice, psychosocial counseling, and dispute resolution via Helpline 1043',
      'Assistance in filing for Court Protection Orders, Residence Orders, and Monetary Orders',
      'Direct intake and medical/legal facilitation through Violence Against Women Centres (VAWCs)',
      'Safe referral to government-supervised Dar-ul-Aman shelter homes',
    ],
    servicesUr: [
      'گھریلو تشدد کی صورت میں فوری پولیس ریسکیو اور ہنگامی مدد',
      'ہیلپ لائن 1043 کے ذریعے مفت قانونی مشورہ، نفسیاتی رہنمائی اور تصفیہ',
      'عدالتی پروٹیکشن آرڈر، رہائشی حق اور نان نفقہ کے احکامات کے حصول میں مدد',
      'وائلنس اگینسٹ ویمن سینٹرز (VAWCs) کے ذریعے ایک ہی چھت تلے میڈیکو لیگل سہولیات',
      'سرکاری دارالامان میں محفوظ رہائش کی باضابطہ فراہمی',
    ],
    institutionalSetupEn:
      'Operates dedicated Violence Against Women Centres (flagship VAWC in Multan, expanded across districts) and District Women Protection Committees (DWPCs) headed by Women Protection Officers.',
    institutionalSetupUr:
      'وائلنس اگینسٹ ویمن سینٹرز (ملتان اور دیگر اضلاع) اور ضلعی ویمن پروٹیکشن کمیٹیاں فعال ہیں جن کی سربراہی ویمن پروٹیکشن آفیسرز کرتے ہیں۔',
    fallbackAdviceEn:
      'If calling from an area with weak cellular connectivity, you can also dial PWPA head office at 042-99333817 or visit any district Police Khidmat Markaz (PKM) or District Social Welfare Office.',
    fallbackAdviceUr:
      'موبائل سگنل نہ ہونے کی صورت میں پی ڈبلیو پی اے کے لاہور دفتر 042-99333817 یا قریبی پولیس خدمت مرکز یا ضلعی سوشل ویلفیئر دفتر سے رجوع کریں۔',
    officialPortalUrl: 'https://pwpa.punjab.gov.pk',
    officialPortalName: 'pwpa.punjab.gov.pk / pcsw.punjab.gov.pk',
  },
  sindh: {
    id: 'sindh',
    nameEn: 'Sindh',
    nameUr: 'سندھ',
    actTitleEn: 'Sindh Domestic Violence (Protection and Prevention) Act 2013',
    actTitleUr: 'سندھ ڈومیسٹک وائلنس (پروٹیکشن اینڈ پریوینشن) ایکٹ 2013',
    governingBodyEn: 'Women Development Department (WDD), Government of Sindh & Sindh Commission on the Status of Women (SCSW)',
    governingBodyUr: 'محکمہ ترقی نسواں سندھ و سندھ کمیشن آن دی سٹیٹس آف ویمن',
    primaryHelpline: '1094',
    primaryHelplineLabelEn: 'Sindh Women Helpline (Toll-Free 24/7)',
    primaryHelplineLabelUr: 'سندھ ویمن ہیلپ لائن (ٹول فری 24/7)',
    secondaryHelpline: '0333-9217323',
    secondaryHelplineLabelEn: 'WDD Official WhatsApp Complaint Desk',
    secondaryHelplineLabelUr: 'محکمہ ترقی نسواں باضابطہ واٹس ایپ ڈیسک',
    hoursEn: '24 Hours / 7 Days a Week',
    hoursUr: '24 گھنٹے فعال سروس',
    tollFree: true,
    servicesEn: [
      'Registration of domestic violence, harassment, and forced marriage grievances',
      'Telephonic legal counseling and psychosocial support through trained female operators',
      'Coordination with district police and Protection Committees notified under the 2013 Act',
      'Assistance with magistrate protection petitions and medical aid referrals',
      'Safe transfer to government Dar-ul-Aman or municipal safe houses',
    ],
    servicesUr: [
      'گھریلو تشدد، ہراسانی اور جبری شادی کی شکایات کا باضابطہ اندراج',
      'خاتون کونسلرز کے ذریعے مفت قانونی و نفسیاتی مشاورت',
      'سندھ ایکٹ 2013 کے تحت نامزد پروٹیکشن کمیٹیوں اور پولیس کے ساتھ فوری رابطہ',
      'مجسٹریٹ سے پروٹیکشن آرڈر اور طبی امداد کے حصول میں رہنمائی',
      'سرکاری دارالامان یا محفوظ پناہ گاہ میں منتقلی کی سہولت',
    ],
    institutionalSetupEn:
      'Managed through the Women Development Department Secretariat in Karachi with regional complaint cells active in Sukkur (071-5824055) and Larkana (074-9410352).',
    institutionalSetupUr:
      'سیکریٹریٹ کراچی سے کنٹرول اور سکھر (071-5824055) اور لاڑکانہ (074-9410352) کے ریجنل کمپلینٹ سیلز کے ذریعے عمل درآمد۔',
    fallbackAdviceEn:
      'If Helpline 1094 cannot connect on your mobile network, call direct landlines at 021-99217318 or 021-99213328, or contact the nearest District Protection Committee via the Deputy Commissioner office.',
    fallbackAdviceUr:
      'اگر 1094 پر رابطہ نہ ہو سکے تو کراچی لینڈ لائن 021-99217318 یا 021-99213328 پر کال کریں یا ڈپٹی کمشنر دفتر میں پروٹیکشن کمیٹی سے رابطہ کریں۔',
    officialPortalUrl: 'https://wdd.sindh.gov.pk',
    officialPortalName: 'wdd.sindh.gov.pk',
  },
  kpk: {
    id: 'kpk',
    nameEn: 'Khyber Pakhtunkhwa',
    nameUr: 'خیبر پختونخوا',
    actTitleEn: 'KP Domestic Violence against Women (Prevention and Rehabilitation) Act 2021',
    actTitleUr: 'خیبر پختونخوا ڈومیسٹک وائلنس اگینسٹ ویمن ایکٹ 2021',
    governingBodyEn: 'Social Welfare, Special Education & Women Empowerment Department & KPCSW',
    governingBodyUr: 'محکمہ سوشل ویلفیئر و خواتین بااختیاری خیبر پختونخوا و کے پی سی ایس ڈبلیو',
    primaryHelpline: '0800-22227',
    primaryHelplineLabelEn: 'Bolo Helpline KP (Toll-Free 24/7)',
    primaryHelplineLabelUr: 'بولو ہیلپ لائن خیبر پختونخوا (ٹول فری 24/7)',
    secondaryHelpline: '091-9216097',
    secondaryHelplineLabelEn: 'KP Commission on the Status of Women Office (Peshawar)',
    secondaryHelplineLabelUr: 'خیبر پختونخوا ویمن کمیشن ہیڈ آفس (پشاور)',
    hoursEn: '24/7 Operational Helpline',
    hoursUr: '24 گھنٹے فعال سروس',
    tollFree: true,
    servicesEn: [
      'Comprehensive gender-based violence (GBV) intake and crisis counseling',
      'Free legal guidance regarding court applications under the KP 2021 Act',
      'Emergency police rescue coordination through local district police control rooms',
      'Medical aid referrals and trauma counseling support',
      'Shelter admission facilitation to district Dar-ul-Aman centers across KP',
    ],
    servicesUr: [
      'صنفی تشدد کی شکایات کا اندراج اور ہنگامی بحرانی مشاورت',
      'کے پی ایکٹ 2021 کے تحت عدالتی درخواستوں کے لیے مفت قانونی رہنمائی',
      'ضلعی پولیس کنٹرول رومز کے ذریعے ہنگامی پولیس ریسکیو رابطہ',
      'طبی امداد، ہسپتال میڈیکو لیگل اور نفسیاتی بحالی میں معاونت',
      'خیبر پختونخوا کے ضلعی دارالامان مراکز میں محفوظ پناہ کی سہولت',
    ],
    institutionalSetupEn:
      'Operated through dedicated Bolo Helpline call centers with District Protection Committees mandated across Peshawar, Mardan, Swat, Abbottabad, and other districts.',
    institutionalSetupUr:
      'بولو ہیلپ لائن سنٹر اور پشاور، مردان، سوات، ایبٹ آباد سمیت تمام اضلاع میں ڈسٹرکٹ پروٹیکشن کمیٹیاں فعال ہیں۔',
    fallbackAdviceEn:
      'If dialing 0800 from a rural telecom network faces routing delays, visit your local District Social Welfare & Women Empowerment Officer or approach the nearest Women Police Desk.',
    fallbackAdviceUr:
      'اگر دیہی علاقے سے 0800 پر کال نہ ملے تو ضلعی سوشل ویلفیئر آفیسر سے براہ راست رابطہ کریں یا قریبی تھانے میں ویمن ڈیسک پر جائیں۔',
    officialPortalUrl: 'https://swkpk.gov.pk',
    officialPortalName: 'swkpk.gov.pk / kpcsw.gov.pk',
  },
  balochistan: {
    id: 'balochistan',
    nameEn: 'Balochistan',
    nameUr: 'بلوچستان',
    actTitleEn: 'Balochistan Domestic Violence (Prevention and Protection) Act 2014',
    actTitleUr: 'بلوچستان ڈومیسٹک وائلنس (پریوینشن اینڈ پروٹیکشن) ایکٹ 2014',
    governingBodyEn: 'Women Development Department (WDD), Government of Balochistan & BCSW',
    governingBodyUr: 'محکمہ ترقی نسواں حکومت بلوچستان و بلوچستان ویمن کمیشن',
    primaryHelpline: '1089',
    primaryHelplineLabelEn: 'Balochistan Women Helpline',
    primaryHelplineLabelUr: 'بلوچستان ویمن ہیلپ لائن',
    secondaryHelpline: '1099',
    secondaryHelplineLabelEn: 'National Human Rights Toll-Free Helpline (Universal Fallback)',
    secondaryHelplineLabelUr: 'قومی انسانی حقوق ہیلپ لائن (مفت متبادل نمبر)',
    hoursEn: 'Standard Working Shift & Emergency Escalation',
    hoursUr: 'دفتری اوقات و ہنگامی رابطہ',
    tollFree: true,
    servicesEn: [
      'Registration of domestic violence, psychological abuse, and harassment complaints',
      'Psychological and trauma counseling support for women and children',
      'Legal guidance for applying for protection and residence orders before judicial magistrates',
      'Coordination with district administration and Quetta safe shelters',
      'Referral to district Social Welfare Officers in interior Balochistan',
    ],
    servicesUr: [
      'گھریلو تشدد، نفسیاتی اذیت اور ہراسانی کی شکایات کا اندراج',
      'خواتین اور بچوں کے لیے نفسیاتی و ذہنی بحالی کی مشاورت',
      'عدالتی پروٹیکشن اور رہائشی احکامات کے لیے قانونی رہنمائی',
      'ضلعی انتظامیہ اور کوئٹہ محفوظ پناہ گاہوں کے ساتھ رابطہ کاری',
      'اندرون بلوچستان ضلعی سوشل ویلفیئر افسران کو کیس ریفرل',
    ],
    institutionalSetupEn:
      'District Women Protection Committees established under the 2014 Act, operating under the Women Development Department Quetta with district social welfare field officers.',
    institutionalSetupUr:
      'ایکٹ 2014 کے تحت ضلعی ویمن پروٹیکشن کمیٹیاں قائم ہیں جو محکمہ ترقی نسواں کوئٹہ اور ضلعی افسران کے ماتحت کام کرتی ہیں۔',
    fallbackAdviceEn:
      'In interior and remote districts where shortcode 1089 may have telecom interconnect issues, contact the District Social Welfare Office at your district headquarters (e.g., Khuzdar, Turbat, Loralai, Sibi) or call nationwide helpline 1099.',
    fallbackAdviceUr:
      'اندرون بلوچستان جہاں 1089 پر کال نہ ملے، وہاں ضلعی ہیڈ کوارٹر میں سوشل ویلفیئر دفتر سے رجوع کریں یا قومی ہیلپ لائن 1099 پر مفت کال کریں۔',
    officialPortalUrl: 'https://balochistan.gov.pk',
    officialPortalName: 'balochistan.gov.pk (WDD)',
  },
  ict: {
    id: 'ict',
    nameEn: 'Islamabad (ICT)',
    nameUr: 'اسلام آباد (وفاقی دارالحکومت)',
    actTitleEn: 'Domestic Violence (Prevention and Protection) Act & ICT Police Regulations',
    actTitleUr: 'ڈومیسٹک وائلنس (پریوینشن اینڈ پروٹیکشن) ایکٹ برائے وفاقی دارالحکومت',
    governingBodyEn: 'Ministry of Human Rights (MoHR) & Islamabad Capital Territory (ICT) Police',
    governingBodyUr: 'وزارت انسانی حقوق حکومت پاکستان و اسلام آباد کیپیٹل ٹیریٹری پولیس',
    primaryHelpline: '8090',
    primaryHelplineLabelEn: 'ICT Police Gender Protection Unit (GPU) Helpline',
    primaryHelplineLabelUr: 'اسلام آباد پولیس جینڈر پروٹیکشن یونٹ ہیلپ لائن',
    secondaryHelpline: '1815 / 1099',
    secondaryHelplineLabelEn: 'Online Women Police Station (1815) & MoHR Helpline (1099)',
    secondaryHelplineLabelUr: 'آن لائن ویمن پولیس اسٹیشن (1815) و وزارت انسانی حقوق (1099)',
    hoursEn: '24/7 Dedicated Emergency Operations',
    hoursUr: '24 گھنٹے ہنگامی پولیس رسپانس',
    tollFree: true,
    servicesEn: [
      'Rapid emergency police dispatch by female police officers of the Gender Protection Unit',
      'Confidential FIR and complaint registration at the specialized Women Police Station',
      'Free legal aid and advisory services through the Ministry of Human Rights legal panel',
      'Immediate crisis counseling and protective custody arrangements',
      'Referral to Shaheed Benazir Bhutto Women Crisis Centre in Islamabad',
    ],
    servicesUr: [
      'جینڈر پروٹیکشن یونٹ کی لیڈی پولیس افسران کی فوری ہنگامی روانگی',
      'ویمن پولیس اسٹیشن میں پرائیویسی کے ساتھ ایف آئی آر اور شکایت کا اندراج',
      'وزارت انسانی حقوق کے وکلاء پینل کے ذریعے مفت قانونی امداد',
      'فوری نفسیاتی بحالی اور حفاظتی پناہ کا انتظام',
      'اسلام آباد کے بے نظیر بھٹو ویمن کرائسز سنٹر میں محفوظ منتقلی',
    ],
    institutionalSetupEn:
      'Flagship Gender Protection Unit (GPU) located in Sector F-8 / Women Police Station Sector H-11, working in close collaboration with the Ministry of Human Rights.',
    institutionalSetupUr:
      'سیکٹر F-8 میں جینڈر پروٹیکشن یونٹ اور سیکٹر H-11 میں ویمن پولیس اسٹیشن فعال ہے جو وزارت انسانی حقوق کے ساتھ مل کر کام کرتے ہیں۔',
    fallbackAdviceEn:
      'For immediate life-threatening physical danger anywhere in Islamabad, dial police emergency at 15 or visit the Women Police Station directly.',
    fallbackAdviceUr:
      'فوری جانی خطرے کی صورت میں اسلام آباد پولیس ایمرجنسی 15 پر کال کریں یا براہ راست ویمن پولیس اسٹیشن تشریف لے جائیں۔',
    officialPortalUrl: 'https://mohr.gov.pk',
    officialPortalName: 'mohr.gov.pk / islamabadpolice.gov.pk',
  },
  national: {
    id: 'national',
    nameEn: 'Nationwide & Federal',
    nameUr: 'ملک گیر و وفاقی ہیلپ لائنز',
    actTitleEn: 'National Human Rights Framework & Police Emergency System',
    actTitleUr: 'قومی انسانی حقوق فریم ورک و ایمرجنسی پولیس نظام',
    governingBodyEn: 'Ministry of Human Rights (MoHR), NCSW & Police 15',
    governingBodyUr: 'وزارت انسانی حقوق، قومی کمیشن برائے وقار نسواں و پولیس 15',
    primaryHelpline: '1099',
    primaryHelplineLabelEn: 'Ministry of Human Rights (MoHR) Toll-Free Legal Aid Helpline',
    primaryHelplineLabelUr: 'وزارت انسانی حقوق قومی ٹول فری ہیلپ لائن',
    secondaryHelpline: '15',
    secondaryHelplineLabelEn: 'Nationwide Police Emergency Response (Immediate Physical Danger)',
    secondaryHelplineLabelUr: 'قومی پولیس ایمرجنسی (فوری جانی خطرہ)',
    hoursEn: '24/7 Universal Accessibility',
    hoursUr: 'پورے پاکستان سے 24 گھنٹے مفت رابطہ',
    tollFree: true,
    servicesEn: [
      'Universal federal intake for serious human rights violations and domestic distress',
      'Free nationwide legal advice and panel lawyer assignments for destitute women',
      'Inter-provincial escalation when survivors need cross-border protection',
      'Referrals to provincial Commissions on the Status of Women',
      '24/7 emergency police rescue dispatch via shortcode 15 in any city or town',
    ],
    servicesUr: [
      'انسانی حقوق کی پامالی اور گھریلو مسائل پر ملک گیر مفت مشاورت',
      'مستحق خواتین کے لیے مفت وکیل اور عدالتی چارہ جوئی میں مدد',
      'ایک سے دوسرے صوبے میں نقل مکانی کی صورت میں حفاظتی تعاون',
      'صوبائی کمیشنز برائے وقار نسواں کے ساتھ فوری رابطہ',
      'پاکستان کے کسی بھی شہر یا قصبے سے 15 پر فوری پولیس ریسکیو',
    ],
    institutionalSetupEn:
      'Maintained by the Ministry of Human Rights in Islamabad, coordinating directly with provincial Social Welfare Departments and the National Commission on the Status of Women (NCSW).',
    institutionalSetupUr:
      'وزارت انسانی حقوق اسلام آباد کے تحت فعال جو صوبائی محکموں اور این سی ایس ڈبلیو کے ساتھ مل کر کام کرتی ہے۔',
    fallbackAdviceEn:
      'Helpline 1099 works from all mobile networks (Jazz, Telenor, Zong, Ufone) and PTCL landlines without balance or call charges.',
    fallbackAdviceUr:
      'ہیلپ لائن 1099 تمام موبائل نیٹ ورکس اور پی ٹی سی ایل سے بغیر بیلنس بالکل مفت ملائی جا سکتی ہے۔',
    officialPortalUrl: 'https://mohr.gov.pk',
    officialPortalName: 'mohr.gov.pk / ncsw.gov.pk',
  },
};

export const WomenProtectionDirectoryHelper: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedProvince, setSelectedProvince] = useState<ProvinceTabKey>('punjab');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const active = PROVINCE_DIRECTORY[selectedProvince];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const tabs: ProvinceTabKey[] = ['punjab', 'sindh', 'kpk', 'balochistan', 'ict', 'national'];

  return (
    <section className="space-y-6 my-8">
      {/* Province Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
        {tabs.map((tab) => {
          const item = PROVINCE_DIRECTORY[tab];
          const isSelected = selectedProvince === tab;
          return (
            <button
              key={tab}
              onClick={() => setSelectedProvince(tab)}
              className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs font-serif font-bold transition flex items-center justify-center gap-1.5 ${
                isSelected
                  ? 'bg-white dark:bg-slate-900 text-doc-ink dark:text-white shadow-xs border border-doc-brass/50'
                  : 'text-slate-600 dark:text-slate-400 hover:text-doc-ink dark:hover:text-white'
              }`}
            >
              <span>{t(item.nameEn, item.nameUr)}</span>
            </button>
          );
        })}
      </div>

      {/* Main Selected Card */}
      <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        {/* Header Bar */}
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                {t('Statutory Provincial System', 'صوبائی قانونی نظام')}
              </span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {t(active.hoursEn, active.hoursUr)}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
              {t(active.nameEn, active.nameUr)} {t('Women Protection Directory', 'خواتین تحفظ ڈائریکٹری')}
            </h3>
            <p className="text-xs font-mono text-doc-brass font-bold">
              {t(active.actTitleEn, active.actTitleUr)}
            </p>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 max-w-xs text-right hidden sm:block">
            <span className="font-bold block text-slate-700 dark:text-slate-300">
              {t('Supervising Authority', 'نگران ادارہ')}:
            </span>
            <span className="leading-tight block text-[11px]">{t(active.governingBodyEn, active.governingBodyUr)}</span>
          </div>
        </div>

        {/* Helplines Callout Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Primary Helpline */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-navy-950 to-slate-900 border-2 border-emerald-500/50 text-white space-y-3 relative overflow-hidden shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/40">
                {t('Primary Helpline', 'بنیادی ہیلپ لائن')}
              </span>
              <PhoneCall className="w-5 h-5 text-emerald-400 animate-pulse" />
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-mono font-extrabold text-emerald-400 tracking-tight">
                {active.primaryHelpline}
              </div>
              <p className="text-xs text-slate-300 mt-1 font-sans">
                {t(active.primaryHelplineLabelEn, active.primaryHelplineLabelUr)}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono">{t('Toll-Free Call', 'مفت رابطہ')}</span>
              <button
                onClick={() => handleCopy(active.primaryHelpline, `${active.id}-primary`)}
                className="text-emerald-400 hover:text-emerald-300 font-mono font-bold flex items-center gap-1 select-none"
              >
                {copiedKey === `${active.id}-primary` ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === `${active.id}-primary` ? t('Copied', 'کاپی شدہ') : t('Copy Number', 'نمبر کاپی کریں')}</span>
              </button>
            </div>
          </div>

          {/* Secondary Helpline */}
          {active.secondaryHelpline && (
            <div className="p-5 rounded-2xl bg-gradient-to-br from-navy-950 to-slate-900 border border-doc-brass/50 text-white space-y-3 relative overflow-hidden shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded border border-amber-500/40">
                  {t('Specialized / Secondary Line', 'قانونی مشورہ و ثانوی لائن')}
                </span>
                <Scale className="w-5 h-5 text-amber-400" />
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-mono font-extrabold text-amber-400 tracking-tight">
                  {active.secondaryHelpline}
                </div>
                <p className="text-xs text-slate-300 mt-1 font-sans">
                  {t(active.secondaryHelplineLabelEn!, active.secondaryHelplineLabelUr!)}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">{t('Inquiries & Legal Aid', 'شکایات و قانونی رہنمائی')}</span>
                <button
                  onClick={() => handleCopy(active.secondaryHelpline!, `${active.id}-sec`)}
                  className="text-amber-400 hover:text-amber-300 font-mono font-bold flex items-center gap-1 select-none"
                >
                  {copiedKey === `${active.id}-sec` ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === `${active.id}-sec` ? t('Copied', 'کاپی شدہ') : t('Copy Number', 'نمبر کاپی کریں')}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Services Provided List */}
        <div className="space-y-3">
          <h4 className="font-serif font-bold text-sm text-doc-ink dark:text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{t('Support Services Available Under This Province’s System', 'اس صوبائی نظام کے تحت دستیاب سہولیات')}</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            {(language === 'ur' ? active.servicesUr : active.servicesEn).map((srv, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-2.5"
              >
                <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-mono font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{srv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Setup & Rural Fallback */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-doc-seal dark:text-doc-brass">
              <Building className="w-4 h-4 shrink-0" />
              <span>{t('Institutional Infrastructure & Centers', 'ادارہ جاتی ڈھانچہ و مراکز')}</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {t(active.institutionalSetupEn, active.institutionalSetupUr)}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/50 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-amber-800 dark:text-amber-300">
              <Info className="w-4 h-4 shrink-0" />
              <span>{t('Fallback Guidance (If Cellular Call Fails)', 'متبادل طریقہ (اگر ہیلپ لائن نہ ملے)')}</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {t(active.fallbackAdviceEn, active.fallbackAdviceUr)}
            </p>
          </div>
        </div>

        {/* Official Portal Reference */}
        {active.officialPortalUrl && (
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-sans">
            <span className="text-slate-500 dark:text-slate-400">
              {t('Official Government Portal', 'سرکاری حکومتی ویب سائٹ')}:{' '}
              <strong className="text-slate-700 dark:text-slate-300 font-mono">{active.officialPortalName}</strong>
            </span>
            <a
              href={active.officialPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-doc-seal dark:text-doc-brass hover:underline flex items-center gap-1 font-semibold"
            >
              <span>{t('Visit Government Portal', 'سرکاری پورٹل کھولیں')}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
