export interface RecommendedServiceItem {
  id: string;
  name: string;
  nameUr: string;
  taglineEn: string;
  taglineUr: string;
  category: 'vpn' | 'courier' | 'legal' | 'tax' | 'translation' | 'general';
  applicableCategoryIds: string[];
  partnerBadge: string;
  descriptionEn: string;
  descriptionUr: string;
  benefitsEn: string[];
  benefitsUr: string[];
  ctaTextEn: string;
  ctaTextUr: string;
  destinationUrl: string;
  rating: string;
}

export const RECOMMENDED_SERVICES: RecommendedServiceItem[] = [
  {
    id: 'nord-expat-vpn',
    name: 'Secure Pakistan & Expat Access VPN',
    nameUr: 'اوورسیز پاکستانی فاسٹ وی پی این',
    taglineEn: 'Encrypted Access to Pakistani Bank Portals & Govt Services',
    taglineUr: 'بینکنگ اور نادرا پاک آئی ڈی کے لیے محفوظ ترین رسائی',
    category: 'vpn',
    applicableCategoryIds: ['overseas', 'nadra', 'finance', 'passport', 'bills'],
    partnerBadge: 'Verified Partner',
    descriptionEn: 'High-speed encrypted servers for overseas Pakistanis to access RDA accounts, Pak-ID portal, and FBR Iris securely from abroad.',
    descriptionUr: 'اوورسیز پاکستانیوں کے لیے نادرا پاک آئی ڈی اور بینک اکاؤنٹس تک محفوظ ترین رسائی۔',
    benefitsEn: [
      'Dedicated Pakistani & GCC IP endpoints',
      'Bank-grade 256-bit encryption',
      '30-day money-back guarantee',
    ],
    benefitsUr: [
      'محفوظ بینکنگ انکرپشن',
      'تیز ترین کنکشن سپیڈ',
      '30 دن کی گارنٹی',
    ],
    ctaTextEn: 'Get Verified Secure Access →',
    ctaTextUr: 'محفوظ رسائی حاصل کریں ←',
    destinationUrl: 'https://www.pakistaninfohub.com/tracker?partner=expat-vpn',
    rating: '4.9/5',
  },
  {
    id: 'dhl-document-courier',
    name: 'Express Document Courier & Attestation Delivery',
    nameUr: 'فاسٹ دستاویزات کوریئر و ترسیل',
    taglineEn: 'Fast Global Delivery for HEC, MOFA & Embassy Documents',
    taglineUr: 'ایچ ای سی اور وزارت خارجہ تصدیق شدہ اسناد کی تیز ترسیل',
    category: 'courier',
    applicableCategoryIds: ['education', 'certificates', 'overseas', 'family-registration', 'passport'],
    partnerBadge: 'Recommended Partner',
    descriptionEn: 'Tracked international courier delivery for educational degrees, birth certificates, and passport renewal papers worldwide.',
    descriptionUr: 'تعلیمی اسناد، برتھ سرٹیفکیٹ اور پاسپورٹ کاغذات کی محفوظ بین الاقوامی ترسیل۔',
    benefitsEn: [
      'Real-time GPS parcel tracking',
      'Tamper-proof sealed envelope security',
      'Doorstep pickup across Pakistan',
    ],
    benefitsUr: [
      'لائیو ٹریکنگ سسٹم',
      'محفوظ ترین پیکنگ',
      'گھر سے فری پک اپ',
    ],
    ctaTextEn: 'Book Tracked Courier →',
    ctaTextUr: 'کوریئر بک کریں ←',
    destinationUrl: 'https://www.pakistaninfohub.com/tracker?partner=document-courier',
    rating: '4.8/5',
  },
  {
    id: 'certified-tax-consultant',
    name: 'Authorized FBR Corporate & Freelance Tax Advisor',
    nameUr: 'مستند ایف بی آر ٹیکس کنسلٹنٹ',
    taglineEn: 'Filer Status, NTN Setup & PSEB 0.25% IT Export Filing',
    taglineUr: 'ایکٹو فائلر، این ٹی این اور فری لانسر ٹیکس کنسلٹنسی',
    category: 'tax',
    applicableCategoryIds: ['tax', 'business', 'finance', 'jobs'],
    partnerBadge: 'FBR Registered Consultant',
    descriptionEn: 'Certified tax consultants assisting salaried individuals, tech freelancers, and private limited companies with annual return audits.',
    descriptionUr: 'مستند ٹیکس ماہرین کے ذریعے انکم ٹیکس ریٹرن اور کمپنی رجسٹریشن کی مستند سہولت۔',
    benefitsEn: [
      '100% compliant FBR Iris 2.0 filing',
      'PSEB freelance tax rebate guidance',
      'Direct WhatsApp consultation',
    ],
    benefitsUr: [
      'ایف بی آر تصدیق شدہ فائلنگ',
      'فری لانسر ٹیکس رعایت',
      'واٹس ایپ پر فوری رہنمائی',
    ],
    ctaTextEn: 'Consult Tax Specialist →',
    ctaTextUr: 'ٹیکس ماہر سے رابطہ کریں ←',
    destinationUrl: 'https://www.pakistaninfohub.com/tracker?partner=tax-consultant',
    rating: '4.9/5',
  },
];
