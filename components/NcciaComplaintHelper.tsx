'use client';

import React, { useState } from 'react';
import {
  ShieldAlert,
  PhoneCall,
  Globe,
  FileText,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  Copy,
  Check,
  Building,
  HelpCircle,
  ExternalLink,
  Lock,
  MessageSquare,
  CreditCard,
  UserX,
  Smartphone,
  Search,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

interface CrimeCategory {
  id: string;
  titleEn: string;
  titleUr: string;
  icon: React.ReactNode;
  pecaSection: string;
  urgency: 'critical' | 'high' | 'standard';
  urgentActionEn: string;
  urgentActionUr: string;
  evidenceEn: string[];
  evidenceUr: string[];
  bestChannelEn: string;
  bestChannelUr: string;
}

const CRIME_CATEGORIES: CrimeCategory[] = [
  {
    id: 'financial-fraud',
    titleEn: 'Online Banking, EasyPaisa & JazzCash Fraud',
    titleUr: 'آن لائن بینکنگ، ایزی پیسہ و جاز کیش فراڈ',
    icon: <CreditCard className="w-5 h-5 text-amber-500" />,
    pecaSection: 'Section 13 & 14 (Electronic Fraud & Unauthorized Fund Transfer)',
    urgency: 'critical',
    urgentActionEn:
      'Immediately call your bank or mobile wallet helpline within 60 minutes to request an emergency transaction dispute and freeze on the beneficiary account before the fraudster withdraws the money.',
    urgentActionUr:
      'پہلے 60 منٹ کے اندر اپنے بینک یا والٹ کی ہیلپ لائن پر کال کریں اور فراڈیے کے اکاؤنٹ کو فریز کروائیں تاکہ رقم نکلوانے سے روکا جا سکے۔',
    evidenceEn: [
      'Official bank or wallet account statement showing date, time, and Transaction ID (TID)',
      'Scammer’s phone number, wallet account number, or IBAN',
      'Screenshots of SMS OTP alerts, phishing WhatsApp chats, or fake payment receipts',
      'Audio recording of phone calls if available (note exact call timestamps)',
    ],
    evidenceUr: [
      'بینک یا والٹ سٹیٹمنٹ جس پر ٹرانزیکشن آئی ڈی (TID) اور وقت درج ہو',
      'فراڈیے کا فون نمبر، اکاؤنٹ نمبر یا شناختی کارڈ نمبر',
      'موصولہ او ٹی پی، واٹس ایپ پیغامات اور جعلی رسیدوں کے سکرین شاٹس',
      'اگر فون ریکارڈنگ دستیاب ہو تو کال کے درست اوقات کے ساتھ محفوظ کریں',
    ],
    bestChannelEn: 'Call Helpline 1799 immediately, file on complaint.nccia.gov.pk, and visit CCRC with bank statement.',
    bestChannelUr: 'فوری 1799 پر کال کریں، پورٹل پر اندراج کریں اور بینک سٹیٹمنٹ کے ہمراہ سینٹر جائیں۔',
  },
  {
    id: 'blackmail-harassment',
    titleEn: 'Social Media Blackmail, Sextortion & Morphing',
    titleUr: 'سوشل میڈیا بلیک میلنگ، تصاویر کا غلط استعمال و ہراسانی',
    icon: <Lock className="w-5 h-5 text-red-500" />,
    pecaSection: 'Section 21 & 24 (Cyber Stalking & Unlawful Video/Photo Distribution)',
    urgency: 'critical',
    urgentActionEn:
      'Do NOT delete chats or block the perpetrator immediately. Preserve complete uncropped screenshots and video screen recordings showing their account username, phone number, and timestamps before taking any other action.',
    urgentActionUr:
      'پیغامات ڈیلیٹ نہ کریں اور نہ ہی فوری بلاک کریں۔ سب سے پہلے مکمل ان کراپڈ سکرین شاٹس اور ویڈیو ریکارڈنگ لیں جن میں ملزم کی آئی ڈی، تاریخ اور وقت واضح ہو۔',
    evidenceEn: [
      'Uncropped screenshots of all blackmail threats and demands (showing URL, phone number, date/time)',
      'Exact profile link/URL of the perpetrator (e.g., instagram.com/username or facebook.com/profile)',
      'Exported complete WhatsApp chat backup (.txt file with media attachments)',
      'Proof of any money transferred or demanded under coercion',
      'Original unedited photos/videos showing that morphed content is fraudulent',
    ],
    evidenceUr: [
      'بلیک میلنگ کے تمام پیغامات کے مکمل سکرین شاٹس (جن میں آئی ڈی لنک اور تاریخ نظر آئے)',
      'ملزم کے سوشل میڈیا پروفائل کا اصل لنک (URL)',
      'واٹس ایپ چیٹ کا مکمل بیک اپ (.txt فائل)',
      'بلیک میلنگ کے دباؤ میں دی گئی رقم کی رسیدیں',
      'اصل تصاویر جو ثابت کریں کہ انٹرنیٹ پر موجود مواد ایڈیٹ یا جعلی ہے',
    ],
    bestChannelEn: 'Direct in-person reporting at nearest NCCIA Cyber Crime Reporting Centre or 1799 Helpline.',
    bestChannelUr: 'قریبی NCCIA رپورٹنگ سینٹر پر ذاتی پیشی یا 1799 ہیلپ لائن پر فوری رابطہ۔',
  },
  {
    id: 'impersonation-identity',
    titleEn: 'Fake Profiles & Identity Theft',
    titleUr: 'جعلی پروفائلز اور شناختی معلومات کا غیر قانونی استعمال',
    icon: <UserX className="w-5 h-5 text-purple-500" />,
    pecaSection: 'Section 16 (Unauthorized Use of Identity Information)',
    urgency: 'high',
    urgentActionEn:
      'Report the fake account directly on the social media platform (Facebook/Instagram/X/TikTok) as "Impersonating me or someone I know" and take a screenshot of the reporting ticket while preparing your NCCIA complaint.',
    urgentActionUr:
      'سوشل میڈیا پلیٹ فارم پر فوری رپورٹ کریں اور رپورٹنگ کا سکرین شاٹ لے کر NCCIA شکایت تیار کریں۔',
    evidenceEn: [
      'Exact web URL of the fake profile or page',
      'Screenshots of the fake profile showing your name, photos, or private contact details',
      'Your original CNIC copy verifying your genuine legal identity',
      'Screenshots of any malicious posts or private messages sent from the impersonating account',
    ],
    evidenceUr: [
      'جعلی پروفائل یا پیج کا مکمل ویب ایڈریس (URL)',
      'جعلی اکاؤنٹ کے سکرین شاٹس جن میں آپ کا نام، تصویر یا نمبر نظر آ رہا ہو',
      'آپ کے اصل شناختی کارڈ کی کاپی بطور قانونی ثبوت',
      'جعلی اکاؤنٹ سے کی گئی پوسٹس اور میسجز کے سکرین شاٹس',
    ],
    bestChannelEn: 'Register via complaint.nccia.gov.pk or call 1799 for escalated platform takedown requests.',
    bestChannelUr: 'پورٹل complaint.nccia.gov.pk پر اندراج کریں یا مواد ہٹوانے کے لیے 1799 پر کال کریں۔',
  },
  {
    id: 'account-hacking',
    titleEn: 'Account Hacking & Unauthorized Access (WhatsApp / Email)',
    titleUr: 'اکاؤنٹ ہیکنگ و غیر قانونی رسائی (واٹس ایپ، فیس بک یا ای میل)',
    icon: <ShieldAlert className="w-5 h-5 text-blue-500" />,
    pecaSection: 'Section 3 & 4 (Unauthorized Access to Information System)',
    urgency: 'high',
    urgentActionEn:
      'Alert your family and friends via alternative channels that your account has been compromised to prevent scammers from soliciting emergency loan money from your contacts.',
    urgentActionUr:
      'رشتہ داروں اور دوستوں کو مطلع کریں تاکہ ہیکر آپ کے نام پر رقم کا تقاضا نہ کر سکے۔',
    evidenceEn: [
      'Screenshot of the "Logged Out from another device" alert or failed login attempt',
      'Email alerts received regarding password changes or two-factor authentication bypass',
      'Associated phone number and original registration date of the account',
      'Screenshots from contacts showing messages sent by the hacker requesting money',
    ],
    evidenceUr: [
      'دوسری ڈیوائس پر لاگ ان ہونے یا لاگ آؤٹ الرٹ کا سکرین شاٹ',
      'پاس ورڈ تبدیل ہونے یا سکیورٹی کوڈ موصول ہونے کی ای میلز',
      'اکاؤنٹ سے منسلک فون نمبر اور پرانی تفصیلات',
      'دوستوں کو ہیکر کی طرف سے بھیجے گئے پیسوں کے مطالبات کے سکرین شاٹس',
    ],
    bestChannelEn: 'Register on complaint.nccia.gov.pk and initiate platform recovery support in parallel.',
    bestChannelUr: 'پورٹل complaint.nccia.gov.pk پر شکایت درج کریں اور پلیٹ فارم سپورٹ سے رابطہ کریں۔',
  },
  {
    id: 'sim-fraud',
    titleEn: 'Illegal SIM Registration & Biometric Spoofing',
    titleUr: 'شناختی کارڈ پر غیر قانونی سمز کا اجراء و بائیومیٹرک دھوکہ دہی',
    icon: <Smartphone className="w-5 h-5 text-emerald-500" />,
    pecaSection: 'Section 17 & PTA Telecom Regulations (Unauthorized SIM Issuance)',
    urgency: 'high',
    urgentActionEn:
      'Check active SIMs on your CNIC via cnic.sims.pk or by sending CNIC without dashes to 668. Visit the respective telecom franchise immediately to block unauthorized numbers.',
    urgentActionUr:
      'اپنے شناختی کارڈ پر سمز 668 پر ایس ایم ایس کر کے چیک کریں اور فوری فرنچائز جا کر بند کروائیں۔',
    evidenceEn: [
      'Printout or screenshot of 668 PTA SIM verification portal showing active numbers',
      'Telecom franchise letter/receipt confirming SIM blockage request',
      'Original CNIC and biometric verification receipt',
      'Details of any fraudulent activities conducted using the unauthorized SIM',
    ],
    evidenceUr: [
      'پی ٹی اے 668 پورٹل کا سکرین شاٹ جس میں ایکٹو سمز نظر آئیں',
      'موبائل فرنچائز سے سم بلاک کرانے کی رسید یا درخواست کی کاپی',
      'اصل شناختی کارڈ اور بائیومیٹرک ریکارڈ',
      'اس غیر قانونی سم سے ہونے والے کسی بھی نقصان کی تفصیلات',
    ],
    bestChannelEn: 'Lodge dual complaints with PTA Consumer Cell and NCCIA online portal.',
    bestChannelUr: 'پی ٹی اے کنزیومر پورٹل اور NCCIA پورٹل دونوں پر بیک وقت شکایت درج کریں۔',
  },
];

interface StationLocation {
  city: string;
  region: string;
  stationName: string;
  addressEn: string;
  addressUr: string;
  landline: string;
  cellWhatsapp?: string;
  email: string;
}

const VERIFIED_STATIONS: StationLocation[] = [
  {
    city: 'Islamabad',
    region: 'Federal & HQ',
    stationName: 'NCCIA Headquarters & Police Station ICT',
    addressEn: 'National Police Foundation Building, 2nd Floor, Sector G-10/4, Islamabad',
    addressUr: 'نیشنل پولیس فاؤنڈیشن بلڈنگ، دوسری منزل، سیکٹر G-10/4، اسلام آباد',
    landline: '051-9106692 / 051-9334627',
    cellWhatsapp: '+92 326 8399301',
    email: 'incharge.ccrc.ict@nccia.gov.pk / helpdesk@nccia.gov.pk',
  },
  {
    city: 'Lahore',
    region: 'Punjab',
    stationName: 'NCCIA Director Central & Police Station Lahore',
    addressEn: 'House No. 2-A, Tech Society, West Bank Canal Road / Street 15, Wafaqi Colony, Lahore',
    addressUr: 'مکان نمبر 2-A، ٹیک سوسائٹی، کینال روڈ / گلی نمبر 15، وفاقی کالونی، لاہور',
    landline: '042-99334043 / 042-99332050',
    cellWhatsapp: '+92 326 8399302',
    email: 'incharge.ccrc.lhr@nccia.gov.pk',
  },
  {
    city: 'Karachi',
    region: 'Sindh',
    stationName: 'NCCIA Director South & Police Station Karachi',
    addressEn: 'Near Darul Sehat Hospital, Gulistan-e-Johar, Karachi',
    addressUr: 'نزد دارالصحت ہسپتال، گلستان جوہر، کراچی',
    landline: '021-99333968 / 021-99333950',
    cellWhatsapp: '+92 326 8399316',
    email: 'incharge.ccrc.khi@nccia.gov.pk',
  },
  {
    city: 'Rawalpindi',
    region: 'Punjab',
    stationName: 'Cyber Crime Reporting Centre Rawalpindi',
    addressEn: 'FIA / NCCIA Regional Complex, Rawalpindi Cantt',
    addressUr: 'این سی سی آئی اے ریجنل کمپلیکس، راولپنڈی کینٹ',
    landline: '051-9274782 / 051-9274785',
    cellWhatsapp: '+92 326 8399324',
    email: 'incharge.ccrc.rwp@nccia.gov.pk',
  },
  {
    city: 'Peshawar',
    region: 'Khyber Pakhtunkhwa',
    stationName: 'Cyber Crime Reporting Centre Peshawar',
    addressEn: 'NCCIA Complex, Phase-5, Hayatabad / University Road, Peshawar',
    addressUr: 'این سی سی آئی اے کمپلیکس، حیات آباد / یونیورسٹی روڈ، پشاور',
    landline: '091-9216234 / 091-9216251',
    cellWhatsapp: '+92 326 8399319',
    email: 'incharge.ccrc.psh@nccia.gov.pk',
  },
  {
    city: 'Faisalabad',
    region: 'Punjab',
    stationName: 'Cyber Crime Reporting Centre Faisalabad',
    addressEn: 'Zia Town, Street 2, East Canal Road, near Kashmir Pul, Faisalabad',
    addressUr: 'ضیاء ٹاؤن، گلی نمبر 2، ایسٹ کینال روڈ، نزدیک کشمیر پل، فیصل آباد',
    landline: '041-9330865',
    cellWhatsapp: '+92 326 8399305',
    email: 'incharge.ccrc.fsd@nccia.gov.pk',
  },
  {
    city: 'Multan',
    region: 'Punjab',
    stationName: 'Cyber Crime Reporting Centre Multan',
    addressEn: 'House No. 06, Street-3, Shalimar Town, Bosan Road, Multan',
    addressUr: 'مکان نمبر 06، گلی نمبر 3، شالیمار ٹاؤن، بوسن روڈ، ملتان',
    landline: '061-6522155',
    cellWhatsapp: '+92 326 8399311',
    email: 'incharge.ccrc.mul@nccia.gov.pk',
  },
  {
    city: 'Gujranwala',
    region: 'Punjab',
    stationName: 'Cyber Crime Reporting Centre Gujranwala',
    addressEn: 'Ghaus Plaza, Commercial Area, City Housing Society, Lahore Road, Gujranwala',
    addressUr: 'غوث پلازہ، کمرشل ایریا، سٹی ہاؤسنگ، لاہور روڈ، گوجرانوالہ',
    landline: '055-9330015',
    cellWhatsapp: '+92 326 8399323',
    email: 'incharge.ccrc.grw@nccia.gov.pk',
  },
  {
    city: 'Abbottabad',
    region: 'Khyber Pakhtunkhwa',
    stationName: 'Cyber Crime Reporting Centre Abbottabad',
    addressEn: 'House No 62, Near Bilal Masjid, Bilal Town, PMA Road, Abbottabad',
    addressUr: 'مکان نمبر 62، نزد بلال مسجد، بلال ٹاؤن، پی ایم اے روڈ، ایبٹ آباد',
    landline: '0992-921587',
    cellWhatsapp: '+92 326 8399318',
    email: 'incharge.ccrc.atd@nccia.gov.pk',
  },
  {
    city: 'Dera Ismail Khan',
    region: 'Khyber Pakhtunkhwa',
    stationName: 'Cyber Crime Reporting Centre D.I. Khan',
    addressEn: '25-A Shami Road, Near Alnoor Masjid, Cantonment, D.I. Khan',
    addressUr: '25-A شامی روڈ، نزد النور مسجد، کینٹ، ڈیرہ اسماعیل خان',
    landline: '0966-710537',
    cellWhatsapp: '+92 326 8399320',
    email: 'incharge.ccrc.dik@nccia.gov.pk',
  },
  {
    city: 'Gilgit',
    region: 'Gilgit-Baltistan',
    stationName: 'Cyber Crime Reporting Centre Gilgit',
    addressEn: 'Near GDA Office, River Road, Chinarbagh, Gilgit',
    addressUr: 'نزد جی ڈی اے دفتر، ریور روڈ، چنار باغ، گلگت',
    landline: '05811-960707',
    cellWhatsapp: '+92 326 8399317',
    email: 'incharge.ccrc.glt@nccia.gov.pk',
  },
];

export const NcciaComplaintHelper: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedCrime, setSelectedCrime] = useState<string>('financial-fraud');
  const [regionFilter, setRegionFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const activeCrime = CRIME_CATEGORIES.find((c) => c.id === selectedCrime) || CRIME_CATEGORIES[0];

  const handleCopy = (text: string, identifier: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(identifier);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const filteredStations = VERIFIED_STATIONS.filter((st) => {
    const matchesRegion = regionFilter === 'all' || st.region.toLowerCase().includes(regionFilter.toLowerCase());
    const matchesSearch =
      st.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      st.stationName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      st.addressEn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <section className="space-y-8 my-10">
      {/* 1. Fast Emergency Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Helpline Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-navy-950 to-slate-900 border-2 border-emerald-500/50 text-white space-y-3 relative overflow-hidden shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/40">
              Verified 24/7 Helpline
            </span>
            <PhoneCall className="w-5 h-5 text-emerald-400 animate-pulse" />
          </div>
          <div>
            <div className="text-3xl font-mono font-extrabold text-emerald-400 tracking-tight">1799</div>
            <p className="text-xs text-slate-300 mt-1">
              {t(
                'Toll-free primary helpline across Pakistan. Call immediately for active emergencies, fraud freezing, or blackmail threats.',
                'پورے پاکستان میں ٹول فری نمبر۔ ہنگامی فراڈ اور بلیک میلنگ پر فوری کال کریں۔'
              )}
            </p>
          </div>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400">HQ Landline: 051-9106692</span>
            <button
              onClick={() => handleCopy('1799', 'helpline-main')}
              className="text-emerald-400 hover:text-emerald-300 font-mono font-bold flex items-center gap-1"
            >
              {copiedText === 'helpline-main' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedText === 'helpline-main' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Portal Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-navy-950 to-slate-900 border-2 border-amber-500/50 text-white space-y-3 relative overflow-hidden shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded border border-amber-500/40">
              Online Complaint Portal
            </span>
            <Globe className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <div className="text-lg font-mono font-bold text-amber-400 truncate">complaint.nccia.gov.pk</div>
            <p className="text-xs text-slate-300 mt-1">
              {t(
                'Official web registration form with evidence upload. Protected by Cloudflare WAF.',
                'سرکاری آن لائن شکایت پورٹل۔ ثبوت و سکرین شاٹس اپلوڈ کی سہولت کے ساتھ فعال۔'
              )}
            </p>
          </div>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400">Free Submission</span>
            <a
              href="https://complaint.nccia.gov.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
            >
              <span>Open Form</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Official Email Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-navy-950 to-slate-900 border border-slate-700 text-white space-y-3 relative overflow-hidden shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded border border-blue-500/40">
              Official Email Helpdesk
            </span>
            <FileText className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <div className="text-base font-mono font-bold text-blue-400 truncate">helpdesk@nccia.gov.pk</div>
            <p className="text-xs text-slate-300 mt-1">
              {t(
                'Direct intake for citizen grievances, portal downtime submissions, and official escalation.',
                'ویب سائٹ تکنیکی خرابی یا پورٹل بند ہونے کی صورت میں ای میل کے ذریعے شکایت بھیجیں۔'
              )}
            </p>
          </div>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400">Response within 24-48 hrs</span>
            <button
              onClick={() => handleCopy('helpdesk@nccia.gov.pk', 'email-main')}
              className="text-blue-400 hover:text-blue-300 font-mono font-bold flex items-center gap-1"
            >
              {copiedText === 'email-main' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedText === 'email-main' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Interactive Crime Type & Evidence Selector */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div>
          <div className="flex items-center gap-2 text-doc-seal dark:text-doc-brass text-xs font-mono font-bold uppercase tracking-wider">
            <Search className="w-4 h-4" />
            <span>Interactive Evidence &amp; Procedure Checklist</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-doc-ink dark:text-white mt-1">
            {t('What Type of Cybercrime Occurred? Select to See Exact Requirements', 'کس قسم کا سائبر کرائم ہوا ہے؟ مطلوبہ ثبوت اور طریقہ منتخب کریں')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            {t(
              'Each cyber offense requires specific evidence under the Prevention of Electronic Crimes Act (PECA) 2016. Missing proof is the #1 reason investigations get stalled.',
              'پیکا ایکٹ 2016 کے تحت ہر جرم کے لیے مخصوص ثبوت درکار ہوتے ہیں۔ ادھورے ثبوت سے کیس تاخیر کا شکار ہو جاتا ہے۔'
            )}
          </p>
        </div>

        {/* Tab selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {CRIME_CATEGORIES.map((cat) => {
            const isSelected = cat.id === selectedCrime;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCrime(cat.id)}
                className={`p-3 rounded-xl border text-left transition flex flex-col justify-between space-y-2 ${
                  isSelected
                    ? 'border-doc-brass bg-amber-50/60 dark:bg-amber-950/30 text-doc-ink dark:text-white shadow-xs'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  {cat.icon}
                  {cat.urgency === 'critical' && (
                    <span className="text-[9px] font-mono font-bold uppercase text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-950/80 px-1.5 py-0.5 rounded">
                      Critical
                    </span>
                  )}
                </div>
                <div className="font-serif font-bold text-xs leading-snug">
                  {t(cat.titleEn, cat.titleUr)}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Crime Details Box */}
        <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-700 pb-3">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase text-doc-brass">Legal Reference</span>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                {activeCrime.pecaSection}
              </h3>
            </div>
            <div className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{t('Zero Fee Under Law', 'قانون کے تحت مکمل مفت اندراج')}</span>
            </div>
          </div>

          {/* Urgent Action Callout */}
          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-900 dark:text-red-200 space-y-1">
            <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-red-700 dark:text-red-400">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Immediate Urgent Step (First 60 Minutes)</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed">
              {t(activeCrime.urgentActionEn, activeCrime.urgentActionUr)}
            </p>
          </div>

          {/* Evidence Checklist */}
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-sm text-doc-ink dark:text-white flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-doc-brass" />
              <span>{t('Mandatory Evidence to Prepare & Upload', 'لازمی ثبوت جو آپ کو تیار کر کے ساتھ منسلک کرنے ہوں گے')}</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              {(language === 'ur' ? activeCrime.evidenceUr : activeCrime.evidenceEn).map((ev, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{ev}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Best Reporting Channel */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="text-slate-600 dark:text-slate-300">
              <strong>{t('Recommended Channel:', 'بہترین طریقہ کار:')}</strong>{' '}
              {t(activeCrime.bestChannelEn, activeCrime.bestChannelUr)}
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://complaint.nccia.gov.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-doc-ink dark:bg-white text-white dark:text-doc-ink font-semibold flex items-center gap-1 hover:opacity-90 transition"
              >
                <span>Register Online</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Verified Regional Reporting Stations Directory */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-doc-seal dark:text-doc-brass text-xs font-mono font-bold uppercase tracking-wider">
              <Building className="w-4 h-4" />
              <span>Official In-Person Reporting Network</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-doc-ink dark:text-white mt-1">
              NCCIA Cyber Crime Reporting Centres (CCRC) &amp; Police Stations
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              {t(
                'Verified addresses and landlines of designated cybercrime police stations. In serious cases (blackmail, large financial theft), visiting in person yields the fastest formal FIR registration.',
                'این سی سی آئی اے کے سرکاری تھانوں اور رپورٹنگ سینٹرز کے تصدیق شدہ پتے اور فون نمبرز۔'
              )}
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="Search city (e.g., Lahore, Karachi)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-doc-ink dark:text-white focus:outline-none focus:ring-1 focus:ring-doc-brass"
            />
          </div>
        </div>

        {/* Region filter pills */}
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          {['all', 'Federal', 'Punjab', 'Sindh', 'Khyber', 'Gilgit'].map((reg) => (
            <button
              key={reg}
              onClick={() => setRegionFilter(reg)}
              className={`px-3 py-1.5 rounded-lg border transition ${
                regionFilter === reg
                  ? 'bg-doc-ink dark:bg-slate-700 text-white border-doc-ink dark:border-slate-600 font-bold'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              {reg === 'all' ? 'All Regions (11 Centers)' : reg}
            </button>
          ))}
        </div>

        {/* Stations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredStations.map((station, index) => (
            <div
              key={index}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-doc-brass transition flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-doc-brass bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-900">
                    {station.city} • {station.region}
                  </span>
                  <MapPin className="w-4 h-4 text-slate-400" />
                </div>
                <h3 className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                  {station.stationName}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t(station.addressEn, station.addressUr)}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-700 space-y-1.5 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Phone: {station.landline}</span>
                  <button
                    onClick={() => handleCopy(station.landline, `phone-${index}`)}
                    className="text-doc-seal dark:text-doc-brass hover:underline flex items-center gap-1"
                  >
                    {copiedText === `phone-${index}` ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedText === `phone-${index}` ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                {station.cellWhatsapp && (
                  <div className="flex items-center justify-between text-slate-500">
                    <span>Cell / Incharge: {station.cellWhatsapp}</span>
                  </div>
                )}
                <div className="text-[11px] text-slate-400 truncate">
                  Email: {station.email}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
