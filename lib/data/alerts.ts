export interface AlertTopic {
  id: string;
  titleEn: string;
  titleUr: string;
  descriptionEn: string;
  descriptionUr: string;
  category: string;
  badge: string;
  frequency: string;
}

export const ALERT_TOPICS: AlertTopic[] = [
  {
    id: 'cnic_status',
    titleEn: 'NADRA CNIC & NICOP Status Updates',
    titleUr: 'نادرا شناختی کارڈ و نائیکوپ پروسیسنگ الرٹس',
    descriptionEn: 'Instant notification when your CNIC application progresses through printing, dispatch, and delivery.',
    descriptionUr: 'شناختی کارڈ پرنٹنگ، ڈسپیچ اور برانچ پہنچنے کی فوری اطلاع۔',
    category: 'nadra',
    badge: 'SMS 8400 Sync',
    frequency: 'As status updates',
  },
  {
    id: 'passport_ready',
    titleEn: 'Pakistani Passport Ready & Dispatch Alerts',
    titleUr: 'پاسپورٹ ڈلیوری و پرنٹنگ نوٹیفکیشن',
    descriptionEn: 'Real-time alert when your e-Passport / MRP is printed at DGIP headquarters and dispatched to your local office.',
    descriptionUr: 'پاسپورٹ پرنٹنگ اور قریبی پاسپورٹ آفس ترسیل کی فوری اطلاع۔',
    category: 'passport',
    badge: 'DGIP 9988 Sync',
    frequency: 'As status updates',
  },
  {
    id: 'tax_deadlines',
    titleEn: 'FBR Income Tax Filing & ATL Deadlines',
    titleUr: 'ایف بی آر فائلر ڈیڈ لائنز و ٹیکس الرٹس',
    descriptionEn: 'Never lose active taxpayer status: 30-day and 7-day advance warnings for annual salaried income tax returns.',
    descriptionUr: 'سالانہ ٹیکس ریٹرن فائلنگ اور ایکٹو فائلر لسٹ کی اہم تاریخوں کی یاد دہانی۔',
    category: 'tax',
    badge: 'FBR IRIS 2.0',
    frequency: 'Monthly / Seasonal',
  },
  {
    id: 'hajj_balloting',
    titleEn: 'Government Hajj Balloting & Quota Results',
    titleUr: 'سرکاری حج قرعہ اندازی و نتائج',
    descriptionEn: 'Instant balloting announcements from Ministry of Religious Affairs (MORA) with CNIC status check alerts.',
    descriptionUr: 'وزارت مذہبی امور کی قرعہ اندازی کے نتائج کی فوری اطلاع۔',
    category: 'hajj-umrah',
    badge: 'MORA Official',
    frequency: 'Seasonal',
  },
  {
    id: 'utility_tariffs',
    titleEn: 'Electricity & Gas Tariff Revisions',
    titleUr: 'بجلی و گیس کے نئے ٹیرف اور پالیسی الرٹس',
    descriptionEn: 'Verified NEPRA & OGRA tariff updates, net-metering buyback policy revisions, and fuel price adjustments.',
    descriptionUr: 'نیپرا اور اوگرا کے مصدقہ ٹیرف اور سولر نیٹ میٹرنگ پالیسی کی اطلاعات۔',
    category: 'bills',
    badge: 'NEPRA / OGRA',
    frequency: 'Monthly',
  },
  {
    id: 'traffic_challans',
    titleEn: 'Punjab & Federal Traffic E-Challan Warnings',
    titleUr: 'ٹریفک ای چالان اور ٹوکن ٹیکس ڈیڈ لائن',
    descriptionEn: 'Safe City camera challan alerts and annual vehicle token tax penalty deadline reminders.',
    descriptionUr: 'سیف سٹی ای چالان اور سالانہ ٹوکن ٹیکس کی آخری تاریخ کی یاد دہانی۔',
    category: 'traffic',
    badge: 'PSCA / DLIMS',
    frequency: 'As issued',
  },
  {
    id: 'bisp_payments',
    titleEn: 'BISP 8171 Kafaalat Payment Releases',
    titleUr: 'بے نظیر کفالت 10,500 روپے قسط کی تاریخ',
    descriptionEn: 'Official announcements of quarterly Rs. 10,500 cash transfers, campsite locations, and biometric verification surveys.',
    descriptionUr: 'سہ ماہی قسط کے اجرا اور احساس سروے کیمپس کی تصدیق شدہ تفصیلات۔',
    category: 'welfare',
    badge: '8171 Web Portal',
    frequency: 'Quarterly',
  },
];
