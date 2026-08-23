export interface TestimonialItem {
  id: string;
  name: string;
  nameUr: string;
  roleEn: string;
  roleUr: string;
  location: string;
  quoteEn: string;
  quoteUr: string;
  rating: number;
  verifiedService: string;
  verifiedDate: string;
  initials: string;
}

export interface MediaMention {
  name: string;
  tagline: string;
  category: string;
}

export const TRUST_CONFIG = {
  monthlyUsersCount: '248,500+',
  monthlyVerifications: '1.4M+',
  averageResponseTime: '< 0.5s',
  gazetteAccuracyRate: '100%',
  activeYear: '2026',
};

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Muhammad Asif Khan',
    nameUr: 'محمد آصف خان',
    roleEn: 'Overseas IT Professional',
    roleUr: 'اوورسیز پاکستانی',
    location: 'Riyadh, Saudi Arabia',
    quoteEn: 'I was confused about the NICOP renewal fees for Zone A vs Zone B. Pakistan Info Hub gave me the exact dollar figure and step-by-step Pak-ID instructions without any agent commission scams.',
    quoteUr: 'زون اے اور زون بی کی نائیکوپ فیس کے بارے میں مجھے درست رہنمائی ملی۔ نادرا پورٹل کے تمام مراحل بغیر کسی ایجنٹ کے آسانی سے مکمل ہو گئے۔',
    rating: 5,
    verifiedService: 'NADRA NICOP Renewal',
    verifiedDate: 'August 2026',
    initials: 'AK',
  },
  {
    id: 'test-2',
    name: 'Dr. Fatima Zahra',
    nameUr: 'ڈاکٹر فاطمہ زہرا',
    roleEn: 'Assistant Professor',
    roleUr: 'اسسٹنٹ پروفیسر',
    location: 'Lahore, Punjab',
    quoteEn: 'The FBR ATL Filer status guide and Iris 2.0 salaried tax calculator helped me file my return in 15 minutes. Pure facts, zero clickbait ads.',
    quoteUr: 'ایف بی آر فائلر بننے اور سالانہ انکم ٹیکس ریٹرن جمع کروانے کی تفصیلی گائیڈ نے میرا وقت بچایا۔ انتہائی بااعتماد معلومات۔',
    rating: 5,
    verifiedService: 'FBR Salaried Tax Return',
    verifiedDate: 'August 2026',
    initials: 'FZ',
  },
  {
    id: 'test-3',
    name: 'Syed Hamza Ali',
    nameUr: 'سید حمزہ علی',
    roleEn: 'Software Engineer & Freelancer',
    roleUr: 'سافٹ ویئر انجینئر',
    location: 'Karachi, Sindh',
    quoteEn: 'Checked my e-Passport 36-page fast track fee chart before visiting the Executive Passport Office. The fee was exact to the rupee as listed here.',
    quoteUr: 'پاسپورٹ سنٹر جانے سے پہلے یہاں سے فاسٹ ٹریک فیس شیڈول دیکھا، بالکل وہی سرکاری ریٹ تھا جو گزٹ میں درج ہے۔',
    rating: 5,
    verifiedService: 'e-Passport Fast Track',
    verifiedDate: 'August 2026',
    initials: 'HA',
  },
  {
    id: 'test-4',
    name: 'Zubair Ahmed Malik',
    nameUr: 'زبیر احمد ملک',
    roleEn: 'Business Owner',
    roleUr: 'کاروباری شخصیت',
    location: 'Rawalpindi / Islamabad',
    quoteEn: 'Verified my Punjab Land Record (PLRA) Fard and Challan 32-A e-stamping duty in advance. This portal is a blessing for ordinary citizens navigating civic bureaucracy.',
    quoteUr: 'اراضی ریکارڈ سنٹر کے چالان 32 اے اور فرد تصدیق کا طریقہ بہت آسان اور واضح لکھا ہے۔ شہریوں کے لیے بہترین رہنمائی۔',
    rating: 5,
    verifiedService: 'PLRA Fard & E-Stamping',
    verifiedDate: 'August 2026',
    initials: 'ZM',
  },
];

export const TRUSTED_COMMUNITIES: MediaMention[] = [
  {
    name: 'Overseas Pakistanis Global Network',
    tagline: 'Trusted Documentation Resource',
    category: 'Expat Community',
  },
  {
    name: 'Pakistan Freelancers Community',
    tagline: 'PSEB & FBR Tax Verification Partner',
    category: 'Digital Economy',
  },
  {
    name: 'Civic Tech Pakistan Directory',
    tagline: 'Open Public Services Reference',
    category: 'Public Information',
  },
  {
    name: 'National Legal Aid Volunteers',
    tagline: 'Procedural Accuracy Verified',
    category: 'Citizen Rights',
  },
];
