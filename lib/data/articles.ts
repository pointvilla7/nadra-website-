export interface FeeItem {
  serviceEn: string;
  serviceUr: string;
  normal: string;
  urgent: string;
  executive: string;
  validity?: string;
}

export interface StepItem {
  stepNumber: number;
  titleEn: string;
  titleUr: string;
  detailEn: string;
  detailUr: string;
}

export interface FAQItem {
  questionEn: string;
  questionUr: string;
  answerEn: string;
  answerUr: string;
}

export interface Article {
  slug: string;
  fullPath: string;
  categoryId: string;
  titleEn: string;
  titleUr: string;
  metaDescriptionEn: string;
  metaDescriptionUr: string;
  directAnswerEn: string;
  directAnswerUr: string;
  lastVerified: string;
  officialSource: {
    name: string;
    url: string;
  };
  author: {
    name: string;
    role: string;
  };
  feeStructure?: FeeItem[];
  steps?: StepItem[];
  faqs: FAQItem[];
  contentEn: string;
  contentUr: string;
  relatedSlugs: string[];
}

export const ARTICLES: Record<string, Article> = {
  "death-cancellation-certificate": {
    "slug": "death-cancellation-certificate",
    "fullPath": "/nadra/death-cancellation-certificate",
    "categoryId": "nadra",
    "titleEn": "NADRA CNIC Death & Cancellation Certificate Guide 2026",
    "titleUr": "نادرا فوتیدگی کینسلیشن سرٹیفکیٹ آن لائن گائیڈ 2026",
    "metaDescriptionEn": "How to apply for NADRA CNIC Cancellation Certificate after death. Document checklist, Union Council death certificate, NRC fee, and family tree update.",
    "metaDescriptionUr": "نادرا شناختی کارڈ منسوخی و فوتیدگی سرٹیفکیٹ کا طریقہ۔ یونین کونسل ڈیتھ سرٹیفکیٹ، فیس اور نادرا سینٹر کے قواعد۔",
    "directAnswerEn": "To cancel a deceased family member's CNIC and obtain a NADRA Cancellation Certificate, visit any NADRA Registration Center (NRC) with the original Union Council Death Certificate, original CNIC of the deceased (to be surrendered), and CNIC of the legal heir. The fee is PKR 500.",
    "directAnswerUr": "فوت شدہ فرد کا شناختی کارڈ منسوخ کروانے کے لیے اصل یونین کونسل ڈیتھ سرٹیفکیٹ، متوفی کا اصل شناختی کارڈ اور وارث کا شناختی کارڈ لے کر نادرا سینٹر جائیں۔ فیس 500 روپے ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "NADRA Pak-ID Portal",
      "url": "https://id.nadra.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "NADRA Legal Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Death Cancellation Certificate",
        "serviceUr": "فوتیدگی منسوخی سرٹیفکیٹ",
        "normal": "PKR 500",
        "urgent": "NRC Counter",
        "executive": "Same Day Issue"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Obtain Union Council Death Certificate",
        "titleUr": "یونین کونسل ڈیتھ سرٹیفکیٹ لیں",
        "detailEn": "Register death at local UC office within 60 days to get computerized Death Certificate.",
        "detailUr": "مقامی یونین کونسل سے کمپیوٹرائزڈ ڈیتھ سرٹیفکیٹ حاصل کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Visit NADRA Center with Original CNIC",
        "titleUr": "اصل شناختی کارڈ کے ساتھ نادرا سینٹر جائیں",
        "detailEn": "Surrender deceased CNIC and show blood relative original CNIC.",
        "detailUr": "متوفی کا اصل کارڈ نادرا کاؤنٹر پر جمع کروائیں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Biometric Verification & Collect Certificate",
        "titleUr": "بائیو میٹرک تصدیق اور سرٹیفکیٹ وصولی",
        "detailEn": "Complete thumb biometric scan and receive NADRA CNIC Cancellation Certificate.",
        "detailUr": "بائیو میٹرک تصدیق کے بعد فوری منسوخی سرٹیفکیٹ حاصل کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Is CNIC cancellation mandatory after death?",
        "questionUr": "کیا فوتیدگی کے بعد شناختی کارڈ منسوخ کروانا لازمی ہے؟",
        "answerEn": "Yes, cancelling CNIC prevents identity theft, illegal pension withdrawal, and is required for succession certificate.",
        "answerUr": "جی ہاں! وراثت، پنشن اور ڈپلیکیٹ اکاؤنٹ کے مسائل سے بچنے کے لیے ضروری ہے۔"
      }
    ],
    "contentEn": "Comprehensive guide to NADRA death cancellation certificate rules and inheritance requirements.",
    "contentUr": "نادرا شناختی کارڈ منسوخی اور ڈیتھ سرٹیفکیٹ کا مکمل قانون۔",
    "relatedSlugs": [
      "/nadra/family-registration-certificate",
      "/nadra/succession-certificate-online"
    ]
  },
  "succession-certificate-online": {
    "slug": "succession-certificate-online",
    "fullPath": "/nadra/succession-certificate-online",
    "categoryId": "nadra",
    "titleEn": "NADRA Succession Certificate & Letter of Administration 2026",
    "titleUr": "نادرا سکسیشن سرٹیفکیٹ و لیٹر آف ایڈمنسٹریشن آن لائن گائیڈ 2026",
    "metaDescriptionEn": "Apply online for NADRA Succession Certificate & Letter of Administration. Fee structure, legal heir biometric verification, and bank asset transfer rules.",
    "metaDescriptionUr": "نادرا جانشینی سرٹیفکیٹ آن لائن اپلائی کرنے کا طریقہ۔ وارثان کی بائیو میٹرک، فیس شیڈول اور بینک اکاؤنٹ میں رقم منتقلی۔",
    "directAnswerEn": "NADRA issues Succession Certificates within 15 days for legal heirs to claim moveable assets (bank accounts, stocks, vehicles) of deceased citizens. Apply online at succession.nadra.gov.pk or at NRC. Fee is PKR 10,000 for assets up to 100,000 PKR and PKR 20,000 for assets above 100,000 PKR.",
    "directAnswerUr": "نادرا سکسیشن سرٹیفکیٹ 15 دن میں بینک اکاؤنٹس اور گاڑیوں کی وراثت منتقلی کے لیے جاری کیا جاتا ہے۔ 1 لاکھ تک کے اثاثوں پر فیس 10,000 روپے اور 1 لاکھ سے زائد پر 20,000 روپے ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "NADRA Succession Portal",
      "url": "https://succession.nadra.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Legal Services Specialist"
    },
    "feeStructure": [
      {
        "serviceEn": "Assets up to PKR 100,000",
        "serviceUr": "1 لاکھ روپے تک اثاثے",
        "normal": "PKR 10,000",
        "urgent": "15 Days Issue",
        "executive": "Online Portal"
      },
      {
        "serviceEn": "Assets above PKR 100,000",
        "serviceUr": "1 لاکھ روپے سے زائد اثاثے",
        "normal": "PKR 20,000",
        "urgent": "15 Days Issue",
        "executive": "Online Portal"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Create Account on Succession Portal",
        "titleUr": "سکسیشن پورٹل پر اکاؤنٹ بنائیں",
        "detailEn": "Register at succession.nadra.gov.pk using CNIC and active mobile number.",
        "detailUr": "شناختی کارڈ اور موبائل نمبر سے پورٹل پر لاگ ان کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Enter Asset Details & Legal Heirs",
        "titleUr": "وراثتی تفصیلات اور اثاثے درج کریں",
        "detailEn": "List all legal heirs (children, spouse, parents) and bank account numbers.",
        "detailUr": "تمام وراثان اور بینک اکاؤنٹس کی تفصیل درج کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Biometric Verification of Heirs",
        "titleUr": "تمام وارثان کی بائیو میٹرک تصدیق",
        "detailEn": "All heirs complete biometric scan at NRC or via Pak-ID app.",
        "detailUr": "تمام ورثاء نادرا سینٹر یا موبائل ایپ سے بائیو میٹرک تصدیق کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "How long does NADRA succession certificate take?",
        "questionUr": "نادرا سکسیشن سرٹیفکیٹ کتنے دن میں ملتا ہے؟",
        "answerEn": "In undisputed cases, the certificate is issued within 15 working days following public newspaper advertisement.",
        "answerUr": "بغیر کسی تنازعے کے 15 ورکنگ دنوں میں سرٹیفکیٹ جاری کر دیا جاتا ہے۔"
      }
    ],
    "contentEn": "Complete rules for obtaining legal succession certificate without civil court delays.",
    "contentUr": "عدالتی چکروں کے بغیر نادرا سے وراثت نامہ حاصل کرنے کی مکمل معلوماتی گائیڈ۔",
    "relatedSlugs": [
      "/nadra/death-cancellation-certificate",
      "/nadra/family-registration-certificate"
    ]
  },
  "cnic-name-address-modification": {
    "slug": "cnic-name-address-modification",
    "fullPath": "/nadra/cnic-name-address-modification",
    "categoryId": "nadra",
    "titleEn": "NADRA CNIC Modification Guide 2026: Name, Address & Marital Status",
    "titleUr": "نادرا شناختی کارڈ قوائف میں ترمیم: نام، پتہ اور ازدواجی حیثیت 2026",
    "metaDescriptionEn": "Update your name, address, or marital status on NADRA Smart CNIC online via Pak-ID. Fee table, mandatory proof documents, and Gazette notification rules.",
    "metaDescriptionUr": "نادرا شناختی کارڈ پر نام، پتہ اور شادی کے بعد تبدیلی کا آن لائن طریقہ۔ پاک آئی ڈی ایپ فیس اور نادرا سینٹر کے قواعد۔",
    "directAnswerEn": "To modify data on your NADRA CNIC (such as marital status after marriage, present/permanent address, or spelling correction), apply online via Pak-ID app or visit an NRC. Normal fee is PKR 750 (31 days), Urgent is PKR 1,500 (15 days), and Executive is PKR 2,500 (7 days). Bring original Nikkahnama or Gazette notification.",
    "directAnswerUr": "شناختی کارڈ میں شادی کے بعد شوہر کا نام درج کروانے، پتہ یا سپیلنگ تبدیل کرنے کے لیے نارمل فیس 750، ارجنٹ 1500 اور ایگزیکٹو 2500 روپے ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "NADRA Pak-ID App",
      "url": "https://id.nadra.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "NADRA Documentation Specialist"
    },
    "feeStructure": [
      {
        "serviceEn": "Smart CNIC Modification",
        "serviceUr": "شناختی کارڈ ترمیم فیس",
        "normal": "PKR 750 (31 Days)",
        "urgent": "PKR 1,500 (15 Days)",
        "executive": "PKR 2,500 (7 Days)"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Gather Legal Proof Documents",
        "titleUr": "اصل ثبوتی دستاویزات ساتھ رکھیں",
        "detailEn": "Provide registered Nikkahnama for marital status, or utility bill/domicile for address change.",
        "detailUr": "شادی کی صورت میں نکاح نامہ اور پتہ کی تبدیلی کے لیے ڈومیسائل یا بجلی کا بل فراہم کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Apply Online via Pak-ID or NRC",
        "titleUr": "آن لائن یا نادرا سینٹر درخواست دیں",
        "detailEn": "Log into Pak-ID mobile app, choose 'Modification', upload documents, and capture fingerprint biometrics.",
        "detailUr": "پاک آئی ڈی ایپ پر موڈیفکیشن سلیکٹ کر کے فنگر پرنٹ سکین کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Can I change my permanent address to another province?",
        "questionUr": "کیا میں اپنا مستقل پتہ دوسرے صوبے کا کروا سکتا ہوں؟",
        "answerEn": "Yes, with valid property registration document, domicile of target district, or spouse CNIC.",
        "answerUr": "جی ہاں! ڈومیسائل یا جائیداد کے کاغذات کی بنیاد پر مستقل پتہ تبدیل ہو سکتا ہے۔"
      }
    ],
    "contentEn": "Official rules for updating NADRA records after marriage, relocation, or legal name change.",
    "contentUr": "شادی یا منتقلی کے بعد نادرا ریکارڈز کی درستی کا قانونی طریقہ کار۔",
    "relatedSlugs": [
      "/nadra/cnic-kaise-banaye",
      "/nadra/card-renewal-online"
    ]
  },
  "executive-center-timings-fees": {
    "slug": "executive-center-timings-fees",
    "fullPath": "/nadra/executive-center-timings-fees",
    "categoryId": "nadra",
    "titleEn": "NADRA Executive Registration Center (NRC) Timings & Fast Track Fees",
    "titleUr": "نادرا ایگزیکٹو رجسٹریشن سینٹر اوقات کار اور فیس 2026",
    "metaDescriptionEn": "Find NADRA Executive Center locations in Lahore, Karachi, Islamabad, Rawalpindi & Peshawar. Saturday timings, executive CNIC fees, and VIP lounge processing.",
    "metaDescriptionUr": "نادرا ایگزیکٹو سینٹر کے اوقات کار، ہفتہ وار رخصت، ایگزیکٹو شناختی کارڈ فیس 2500 روپے اور لائیو ٹوکن سٹیٹس۔",
    "directAnswerEn": "NADRA Executive Registration Centers (NRCs) offer air-conditioned lounges, 24/7 or extended timings (8:00 AM to 10:00 PM including Saturdays), and priority processing. Executive Smart CNIC fee is PKR 2,500 with delivery within 7 working days.",
    "directAnswerUr": "نادرا ایگزیکٹو سینٹر ہفتے کے دن بھی کھلے رہتے ہیں اور ایگزیکٹو شناختی کارڈ کی فیس 2500 روپے ہے جس کی ڈیلیوری 7 دنوں میں ہوتی ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "NADRA NRC Directory",
      "url": "https://www.nadra.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Public Operations Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Executive Smart CNIC",
        "serviceUr": "ایگزیکٹو سمارٹ کارڈ",
        "normal": "PKR 2,500",
        "urgent": "7 Working Days",
        "executive": "VIP Lounge Access"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Locate Nearest Executive NRC",
        "titleUr": "قریبی ایگزیکٹو سینٹر تلاش کریں",
        "detailEn": "Visit major centers at Blue Area Islamabad, Shimla Hill Lahore, or Mega Center Karachi.",
        "detailUr": "اسلام آباد، لاہور یا کراچی کے ایگزیکٹو میگا سینٹر تشریف لے جائیں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Are NADRA Executive Centers open on Saturdays?",
        "questionUr": "کیا نادرا ایگزیکٹو سینٹر ہفتے کو کھلے ہوتے ہیں؟",
        "answerEn": "Yes! Most executive centers operate on Saturdays from 9:00 AM to 3:00 PM.",
        "answerUr": "جی ہاں! ایگزیکٹو میگا سینٹر ہفتے کے دن صبح 9 سے دوپہر 3 بجے تک کھلے رہتے ہیں۔"
      }
    ],
    "contentEn": "Executive NRC directory with full address list, working hours, and fast track services.",
    "contentUr": "پاکستان کے تمام بڑے شہروں میں واقع نادرا ایگزیکٹو سینٹرز کے پتہ جات اور ٹائمنگز۔",
    "relatedSlugs": [
      "/nadra/nadra-card-fee",
      "/nadra/cnic-kaise-banaye"
    ]
  },
  "pak-id-biometric-verification-fix": {
    "slug": "pak-id-biometric-verification-fix",
    "fullPath": "/nadra/pak-id-biometric-verification-fix",
    "categoryId": "nadra",
    "titleEn": "Pak-ID Mobile App Fingerprint Biometric Troubleshooting Guide",
    "titleUr": "پاک آئی ڈی ایپ فنگر پرنٹ اور بائیو میٹرک سکین کا حل 2026",
    "metaDescriptionEn": "Fix Pak-ID app camera fingerprint scanning errors, glare issues, lighting alignment, and biometric verification failure on Android & iOS.",
    "metaDescriptionUr": "پاک آئی ڈی موبائل ایپ پر فنگر پرنٹ سکین کے مسائل، لائٹ ایڈجسٹمنٹ اور بایومیٹرک ایرر کا آسان ترین حل۔",
    "directAnswerEn": "If the Pak-ID mobile app fails to capture finger biometrics, place your hand over a plain white sheet of paper in bright natural daylight, hold your smartphone camera 6 inches away, and align your 4 fingers inside the green guide box.",
    "directAnswerUr": "پاک آئی ڈی ایپ پر بائیو میٹرک ایرر دور کرنے کے لیے ہاتھ کو سفید کاغذ پر رکھیں اور تیز قدرتی روشنی میں کیمرہ 6 انچ کے فاصلے پر رکھیں۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "NADRA Pak-ID App Technical Support",
      "url": "https://id.nadra.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Digital Identity Tech Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Pak-ID Mobile Verification",
        "serviceUr": "ایپ بائیو میٹرک سکین",
        "normal": "FREE",
        "urgent": "Instant",
        "executive": "In-App Feature"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Use Plain White Background & Natural Light",
        "titleUr": "سفید کاغذ کا پس منظر اور تیز روشنی",
        "detailEn": "Do not scan under yellow bulb light. Place hand over plain white paper near window.",
        "detailUr": "کمرے کی زرد لائٹ کے بجائے قدرتی روشنی اور سفید کاغذ استعمال کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "What if Pak-ID camera fails to detect fingers after 5 tries?",
        "questionUr": "اگر 5 بار کوشش کے بعد بھی کیمرہ نشانات سکین نہ کرے؟",
        "answerEn": "Clean camera lens, update Pak-ID app to latest version from Play Store, or visit an NRC for physical scanner.",
        "answerUr": "کیمرہ کا شیشہ صاف کریں اور ایپ اپڈیٹ کریں۔ مسئلہ حل نہ ہو تو نادرا سینٹر جائیں۔"
      }
    ],
    "contentEn": "Step-by-step camera adjustment rules to successfully complete Pak-ID online biometric authentication.",
    "contentUr": "پاک آئی ڈی آن لائن بائیو میٹرک کیمرہ ایڈجسٹمنٹ کے بہترین طریقے۔",
    "relatedSlugs": [
      "/nadra/card-renewal-online",
      "/nadra/nicop-apply-online"
    ]
  },
  "executive-fast-track-passport": {
    "slug": "executive-fast-track-passport",
    "fullPath": "/passport/executive-fast-track-passport",
    "categoryId": "passport",
    "titleEn": "Pakistani Executive Fast Track Passport 24-Hour Delivery Guide 2026",
    "titleUr": "پاکستان 24 گھنٹے ایگزیکٹو فاسٹ ٹریک پاسپورٹ گائیڈ 2026",
    "metaDescriptionEn": "Get a Pakistani passport in 24 hours via DGIP Fast Track counters in Islamabad, Lahore, Karachi & Rawalpindi. Fee table, fast track counters, and rules.",
    "metaDescriptionUr": "24 گھنٹے میں پاکستان فاسٹ ٹریک پاسپورٹ حاصل کرنے کا طریقہ۔ اسلام آباد، لاہور اور کراچی کاؤنٹر فیس شیڈول۔",
    "directAnswerEn": "DGIP Fast Track Passport service delivers printed passports within 24 hours (2 working days). Available at Executive Regional Passport Offices in Islamabad, Lahore, Karachi, Rawalpindi, and Peshawar. Fast Track fee is PKR 20,000 for 5-Year e-Passport and PKR 12,500 for 36-Page MRP.",
    "directAnswerUr": "فاسٹ ٹریک پاسپورٹ سروس کے تحت 24 سے 48 گھنٹوں میں پاسپورٹ مل جاتا ہے۔ ای پاسپورٹ فاسٹ ٹریک فیس 20,000 روپے اور ایم آر پی فیس 12,500 روپے ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "DGIP Passport Division",
      "url": "https://fee.dgip.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Passport Operations Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "36-Page MRP Fast Track (5 Yrs)",
        "serviceUr": "36 صفحے فاسٹ ٹریک پاسپورٹ",
        "normal": "PKR 12,500",
        "urgent": "2 Working Days",
        "executive": "24-Hour Counter"
      },
      {
        "serviceEn": "5-Year e-Passport Fast Track",
        "serviceUr": "ای پاسپورٹ فاسٹ ٹریک (5 سال)",
        "normal": "PKR 20,000",
        "urgent": "2 Working Days",
        "executive": "24-Hour Counter"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Generate Fast Track PSID on Passport App",
        "titleUr": "پاسپورٹ آسان ایپ پر فاسٹ ٹریک PSID بنائیں",
        "detailEn": "Select Fast Track delivery tier in Passport Fee Asan Mobile App.",
        "detailUr": "پاسپورٹ فیس آسان ایپ میں فاسٹ ٹریک منتخب کر کے فیس ادا کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Can I get a passport printed on the same day in an emergency?",
        "questionUr": "کیا ہنگامی صورت میں اسی دن پاسپورٹ مل سکتا ہے؟",
        "answerEn": "Yes, Fast Track counter applicants in Islamabad and Lahore can collect passport within 24 hours.",
        "answerUr": "جی ہاں! اسلام آباد اور لاہور ایگزیکٹو کاؤنٹر سے 24 گھنٹے میں پاسپورٹ پرنٹ ہو کر مل جاتا ہے۔"
      }
    ],
    "contentEn": "Detailed instructions for obtaining urgent emergency 24-hour delivery passport in Pakistan.",
    "contentUr": "ہنگامی سفر کے لیے 24 گھنٹے میں فاسٹ ٹریک پاسپورٹ حاصل کرنے کا طریقہ۔",
    "relatedSlugs": [
      "/passport/fee-2026",
      "/passport/online-apply"
    ]
  },
  "lost-passport-application-fee": {
    "slug": "lost-passport-application-fee",
    "fullPath": "/passport/lost-passport-application-fee",
    "categoryId": "passport",
    "titleEn": "Lost Pakistani Passport Replacement Guide & Penalty Fees 2026",
    "titleUr": "گم شدہ پاسپورٹ کی دوبارہ منتقلی اور جرمانہ فیس گائیڈ 2026",
    "metaDescriptionEn": "How to replace a lost or stolen Pakistani passport. Police report (FIR) requirements, 1st loss (double fee), 2nd loss (4x fee), and DGIP approval.",
    "metaDescriptionUr": "گم شدہ پاسپورٹ کی جگہ نیا پاسپورٹ بنوانے کا طریقہ۔ پولیس رپورٹ، پہلی بار گم ہونے پر دگنی فیس اور دوسری بار 4 گنا فیس کا قانون۔",
    "directAnswerEn": "If your Pakistani passport is lost or stolen, report it to the nearest Police Station to get a computerized FIR copy. For 1st time loss, DGIP charges Double Fee. For 2nd time loss, Quadruple (4x) Fee applies. For 3rd time loss, clearance from DGIP Headquarters Islamabad is mandatory.",
    "directAnswerUr": "پاسپورٹ گم ہونے پر پہلی بار دگنی فیس اور دوسری بار 4 گنا فیس ادا کرنا پڑتی ہے۔ قریبی تھانے سے ایف آئی آر کی کاپی لانا لازمی ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "DGIP Lost Passport Directorate",
      "url": "https://dgip.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Consular Services Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "First Time Loss (36 Pages 5 Yrs)",
        "serviceUr": "پہلی بار گم ہونے پر (دگنی فیس)",
        "normal": "PKR 9,000",
        "urgent": "PKR 15,000",
        "executive": "PKR 25,000"
      },
      {
        "serviceEn": "Second Time Loss (36 Pages 5 Yrs)",
        "serviceUr": "دوسری بار گم ہونے پر (4 گنا فیس)",
        "normal": "PKR 18,000",
        "urgent": "PKR 30,000",
        "executive": "PKR 50,000"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "File Police Report (FIR)",
        "titleUr": "پولیس تھانے میں رپٹ / ایف آئی آر درج کروائیں",
        "detailEn": "Obtain computerized Police Report mentioning lost passport number.",
        "detailUr": "گم شدہ پاسپورٹ نمبر کے ساتھ تھانے سے ایف آئی آر پرنٹ لیں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Can I renew a lost passport online?",
        "questionUr": "کیا گم شدہ پاسپورٹ آن لائن رینیو ہو سکتا ہے؟",
        "answerEn": "No. First-time lost passport applications REQUIRE physical visit to Passport Office for Police FIR verification.",
        "answerUr": "نہیں! گم شدہ پاسپورٹ کے لیے پاسپورٹ آفس جانا لازمی ہے۔"
      }
    ],
    "contentEn": "Official DGIP regulations regarding duplicate passport issuance after theft or loss.",
    "contentUr": "پاسپورٹ چوری یا گمیدگی کی صورت میں قانونی کارروائی اور دگنی فیس کا قانون۔",
    "relatedSlugs": [
      "/passport/renewal-documents",
      "/passport/fee-2026"
    ]
  },
  "child-minor-passport-guide": {
    "slug": "child-minor-passport-guide",
    "fullPath": "/passport/child-minor-passport-guide",
    "categoryId": "passport",
    "titleEn": "Pakistani Child & Minor Passport Guide 2026 (Under 15 Years)",
    "titleUr": "بچوں اور نابالغوں کا پاسپورٹ بنوانے کا مکمل طریقہ 2026",
    "metaDescriptionEn": "Apply for minor passport in Pakistan for newborn babies & children under 15. Mandatory B-Form/CRC, father & mother CNIC, 5-year maximum validity rule.",
    "metaDescriptionUr": "15 سال سے کم عمر بچوں اور شیر خوار بچوں کا پاسپورٹ بنوانے کی فیس، نادرا بی فارم اور والدین کے شناختی کارڈ کی شرائط۔",
    "directAnswerEn": "Children under 15 years of age are issued Machine Readable Passports (MRP) valid for a maximum of 5 years (10-year validity is prohibited for minors under 15). Both parents' original Smart CNICs and child's original NADRA B-Form (CRC) are required. Normal fee is PKR 4,500.",
    "directAnswerUr": "15 سال سے کم عمر بچوں کو صرف 5 سالہ پاسپورٹ جاری کیا جاتا ہے۔ نادرا بی فارم اور والدین کے اصل شناختی کارڈ ساتھ لانا لازمی ہے۔ فیس 4,500 روپے ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "DGIP Minor Passport Branch",
      "url": "https://dgip.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Child Licensing Specialist"
    },
    "feeStructure": [
      {
        "serviceEn": "Minor Passport (36 Pages 5 Yrs)",
        "serviceUr": "بچوں کا پاسپورٹ (5 سال میعاد)",
        "normal": "PKR 4,500",
        "urgent": "PKR 7,500",
        "executive": "PKR 12,500"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Bring Original NADRA B-Form & Parents CNIC",
        "titleUr": "اصل بی فارم اور والدین کے شناختی کارڈ لائیں",
        "detailEn": "Child must be present at passport office along with father or mother.",
        "detailUr": "بچے کو والدین میں سے کسی ایک کے ساتھ پاسپورٹ آفس لائیں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Can a child under 15 get a 10-year valid passport?",
        "questionUr": "کیا 15 سال سے کم بچے کا 10 سالہ پاسپورٹ بن سکتا ہے؟",
        "answerEn": "No. According to DGIP rules, minors under 15 are legally restricted to 5-year validity passports.",
        "answerUr": "نہیں! 15 سال سے کم عمر بچوں کے لیے 10 سالہ پاسپورٹ بنوانا ممنوع ہے۔"
      }
    ],
    "contentEn": "Full documentation requirements for newborn and minor passport processing in Pakistan.",
    "contentUr": "بچوں کے پاسپورٹ کے لیے والدین کے بیانات اور تصدیقی فارم کا گائیڈ۔",
    "relatedSlugs": [
      "/passport/fee-2026",
      "/passport/renewal-documents"
    ]
  },
  "overseas-pakistani-passport-renewal": {
    "slug": "overseas-pakistani-passport-renewal",
    "fullPath": "/passport/overseas-pakistani-passport-renewal",
    "categoryId": "passport",
    "titleEn": "Overseas Pakistani Online Passport Renewal Guide 2026 (OPMS)",
    "titleUr": "بیرون ملک مقیم پاکستانیوں کا پاسپورٹ آن لائن رینیول گائیڈ 2026",
    "metaDescriptionEn": "Renew your Pakistani passport online from UAE, Saudi Arabia, UK, USA, Canada via onlinemrp.dgip.gov.pk. Fees in USD/AED, delivery options, and NICOP.",
    "metaDescriptionUr": "تارکین وطن کے لیے آن لائن پاسپورٹ تجدید پورٹل۔ دبئی، سعودیہ، برطانیہ اور امریکہ سے فیس اور ہوم ڈیلیوری۔",
    "directAnswerEn": "Overseas Pakistanis can renew their expired Machine Readable Passport or e-Passport online via the official DGIP portal (onlinemrp.dgip.gov.pk). Requires valid NICOP/CNIC, current passport scan, photo, and credit/debit card for USD payment. Delivery takes 10 to 12 working days via DHL/EMS.",
    "directAnswerUr": "تارکین وطن اپنے ایکسپائرڈ پاسپورٹ آن لائن onlinemrp.dgip.gov.pk پر رینیو کر سکتے ہیں۔ فیس کریڈٹ کارڈ سے ڈیلرز میں ادا ہوتی ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "DGIP Online Passport System",
      "url": "https://onlinemrp.dgip.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Overseas Affairs Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Overseas 36-Page Renewal (5 Yrs)",
        "serviceUr": "بیرون ملک پاسپورٹ تجدید (5 سال)",
        "normal": "$35 USD + Shipping",
        "urgent": "$65 USD + Shipping",
        "executive": "Online Portal"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Register on Online MRP Portal",
        "titleUr": "آن لائن ایم آر پی پورٹل پر اکاؤنٹ بنائیں",
        "detailEn": "Create account on onlinemrp.dgip.gov.pk and select 'Renewal'.",
        "detailUr": "شناختی کارڈ اور ایمیل سے پورٹل پر لاگ ان کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Can overseas Pakistanis apply for a first-time passport online?",
        "questionUr": "کیا بیرون ملک مقیم پاکستانی پہلی بار آن لائن پاسپورٹ بنا سکتے ہیں؟",
        "answerEn": "No. First-time passports REQUIRE visiting the Pakistani Embassy/Consulate General.",
        "answerUr": "نہیں! پہلی بار پاسپورٹ بنوانے کے لیے سفارت خانے جانا لازمی ہے۔"
      }
    ],
    "contentEn": "Step-by-step e-services portal guide for overseas passport renewal and DHL tracking.",
    "contentUr": "بیرون ملک پاکستانی سفارت خانوں اور ڈی ایچ ایل ہوم ڈیلیوری کا طریقہ۔",
    "relatedSlugs": [
      "/passport/online-apply",
      "/nadra/nicop-apply-online"
    ]
  },
  "passport-delay-complaint-helpline": {
    "slug": "passport-delay-complaint-helpline",
    "fullPath": "/passport/passport-delay-complaint-helpline",
    "categoryId": "passport",
    "titleEn": "Urgent Passport Delay Complaint & DGIP Helpline Guide 2026",
    "titleUr": "پاسپورٹ تاخیر کی شکایت اور ڈی جی آئی پی ہیلپ لائن 2026",
    "metaDescriptionEn": "What to do if your urgent or normal Pakistani passport is delayed. DGIP Citizen Portal complaint, UAN helpline (051-111-344-777), and passport status check.",
    "metaDescriptionUr": "ارجنٹ پاسپورٹ میں تاخیر کی صورت میں آن لائن شکایت درج کروانے کا طریقہ اور ہیلپ لائن نمبر۔",
    "directAnswerEn": "If your passport printing is delayed beyond the official timeline (Urgent > 5 days, Normal > 21 days), register an official complaint on the Prime Minister Performance Delivery Unit (PMDU) Citizen Portal app or call the DGIP UAN Helpline at 051-111-344-777.",
    "directAnswerUr": "پاسپورٹ ڈلیوری میں تاخیر پر ڈی جی آئی پی ہیلپ لائن 051-111-344-777 پر کال کریں یا سٹیزن پورٹل ایپ پر شکایت درج کروائیں۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "DGIP Complaint Redressal Cell",
      "url": "https://dgip.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Public Grievances Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Grievance Complaint Portal",
        "serviceUr": "شکایت درج کروانا",
        "normal": "100% FREE",
        "urgent": "Instant Tracking",
        "executive": "PMDU Citizen Portal"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Check Live Status on Tracking Portal",
        "titleUr": "آن لائن پورٹل پر سٹیٹس دیکھیں",
        "detailEn": "Verify status on tracking.dgip.gov.pk using 11-digit token number.",
        "detailUr": "پاسپورٹ پورٹل پر ٹوکن نمبر درج کر کے پرنٹ سٹیٹس دیکھیں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "What is the official helpline number for DGIP Islamabad?",
        "questionUr": "ڈی جی آئی پی اسلام آباد کا ہیلپ لائن نمبر کیا ہے؟",
        "answerEn": "Call 051-111-344-777 or email support@dgip.gov.pk.",
        "answerUr": "ہیلپ لائن نمبر 051-111-344-777 پر کال کریں۔"
      }
    ],
    "contentEn": "Official procedure to escalate delayed passport printing with DGIP authorities.",
    "contentUr": "پاسپورٹ تاخیر کے ازالے کے لیے سرکاری طریقہ کار۔",
    "relatedSlugs": [
      "/passport/tracking-status",
      "/passport/office-contact-directory"
    ]
  },
  "iesco-bill-check-online": {
    "slug": "iesco-bill-check-online",
    "fullPath": "/bills/iesco-bill-check-online",
    "categoryId": "bills",
    "titleEn": "IESCO Bill Check Online 2026: Islamabad Electricity Duplicate Bill",
    "titleUr": "آئیسکو آن لائن بجلی بل چیک 2026 (اسلام آباد و راولپنڈی)",
    "metaDescriptionEn": "Check and print IESCO duplicate bill online by 14-digit reference number. Islamabad, Rawalpindi, Attock, Chakwal, and Jhelum electricity bill check.",
    "metaDescriptionUr": "اسلام آباد اور راولپنڈی آئیسکو آن لائن بجلی بل ڈپلیکیٹ پرنٹ بائے 14 ہندسوں کا ریفرنس نمبر۔",
    "directAnswerEn": "To check your IESCO electricity bill online in 2026, visit bill.pitc.com.pk/iescobill or iesco.com.pk. Enter your 14-digit Reference Number or 10-digit Customer ID to check duplicate bills for Islamabad, Rawalpindi, Attock, Jhelum, and Chakwal with direct payment via 1Link.",
    "directAnswerUr": "اسلام آباد الیکٹرک سپلائی کمپنی (IESCO) کا بل چیک کرنے کے لیے bill.pitc.com.pk/iescobill پر 14 ہندسوں کا ریفرنس نمبر درج کریں۔ اسلام آباد، راولپنڈی، اٹک، جہلم اور چکوال کے صارفین ڈپلیکیٹ بل حاصل کر کے فوری آن لائن ادا کر سکتے ہیں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "IESCO / PITB Bill Gateway",
      "url": "https://bill.pitb.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Utility Services Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "IESCO Online Duplicate Bill",
        "serviceUr": "آئیسکو آن لائن ڈپلیکیٹ بل",
        "normal": "100% FREE",
        "urgent": "Instant Download",
        "executive": "Official IESCO System",
        "validity": "Monthly"
      },
      {
        "serviceEn": "IESCO 24/7 Helpline Support",
        "serviceUr": "آئیسکو 24 گھنٹے ہیلپ لائن",
        "normal": "Dial 118 / 051-9252937",
        "urgent": "SMS to 8118",
        "executive": "Complaint Portal",
        "validity": "All 5 Districts"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Open IESCO Official Bill Checker",
        "titleUr": "آئیسکو آفیشل بل پورٹل کھولیں",
        "detailEn": "Navigate to bill.pitc.com.pk/iescobill on your browser.",
        "detailUr": "ویب پورٹل bill.pitc.com.pk/iescobill پر جائیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Enter 14-Digit Reference Number",
        "titleUr": "14 ہندسوں کا ریفرنس نمبر درج کریں",
        "detailEn": "Input the 14-digit code found on the top header of any previous IESCO bill.",
        "detailUr": "پرانے بل پر درج 14 ہندسوں کا ریفرنس نمبر لکھیں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "View and Download Duplicate Bill PDF",
        "titleUr": "ڈپلیکیٹ بل دیکھیں اور پی ڈی ایف محفوظ کریں",
        "detailEn": "Review due date, current meter reading, and total payable amount with taxes.",
        "detailUr": "بل کی رقم، آخری تاریخ اور واجب الادا ٹیکس چیک کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Which districts are covered by IESCO?",
        "questionUr": "آئیسکو میں کون سے اضلاع شامل ہیں؟",
        "answerEn": "IESCO supplies power to the Federal Capital Territory (Islamabad), Rawalpindi, Attock, Jhelum, and Chakwal districts.",
        "answerUr": "اسلام آباد، راولپنڈی، اٹک، جہلم اور چکوال کے اضلاع آئیسکو کے دائرہ اختیار میں آتے ہیں۔"
      }
    ],
    "contentEn": "## Islamabad Electric Supply Company (IESCO) Guide 2026\n**IESCO** is renowned for having the highest recovery rates and lowest line losses among all distribution companies (DISCOs) in Pakistan. It manages electricity distribution for diplomatic enclaves, federal ministries, and residential cantonments.\n\n## Overview of IESCO Smart Metering (AMI) Project\n**IESCO** has deployed Advanced Metering Infrastructure (AMI) smart meters across Islamabad and Rawalpindi circles. These digital meters transmit real-time hourly consumption data via cellular SIMs, eliminating manual meter-reader visits and human reading errors.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## Comprehensive Overview of IESCO Tariff Rates, Sub-Divisions & AMI Smart Metering (2026)\nThe **Islamabad Electric Supply Company (IESCO)** distributes electrical power across the Federal Capital Territory and northern Punjab. Renowned for maintaining one of the lowest line-loss ratios in the national grid, IESCO utilizes an Advanced Metering Infrastructure (AMI) network with smart digital meters that transmit hourly consumption readings wirelessly via dedicated cellular APNs.\n\n### 1. IESCO Administrative Circles & Regional Sub-Divisions\nIESCO's operations are divided into five major operational circles:\n- **Islamabad Circle**: Covering federal ministries, diplomatic enclaves, Sector E, F, G, H, I series, Bhara Kahu, and Tarnol.\n- **Rawalpindi City Circle**: Covering Raja Bazaar, Satellite Town, Westridge, Saddar Cantonment, and Murree Hills.\n- **Rawalpindi Cantt Circle**: Covering DHA Islamabad, Bahria Town, Chaklala, Airport Road, and Morgah.\n- **Attock Circle**: Covering Attock city, Fateh Jang, Hassan Abdal, Pindi Gheb, and Jand.\n- **Jhelum & Chakwal Circles**: Covering Dina, Sohawa, Choa Saidan Shah, Talagang, and Kalar Kahar.\n\n### 2. Time of Use (TOU) Smart Meter Peak Hours Matrix\nFor residential and commercial connections with 5 kW or higher sanctioned load, IESCO bills power under dual-rate Time-of-Use meters:\n- **Peak Hours (Higher Unit Rate)**: 7:00 PM to 11:00 PM (Summer: June to August) and 5:00 PM to 9:00 PM (Winter: December to February).\n- **Off-Peak Hours (Standard Base Rate)**: Remaining 20 hours daily with discounted fuel adjustment tariffs.\n\n---\n\n## Detailed Step-by-Step Guide to Resolving IESCO Overbilling & Faulty Meters\n1. **Physical Reading Audit**: Take a clear smartphone picture of your digital meter LCD display showing cumulative kWh and maximum demand indicator (MDI).\n2. **Contact Customer Service Center (CSC)**: Visit the IESCO Customer Services Center located at Sector G-7/4 in Islamabad or regional divisional offices.\n3. **Obtain Revised Bill (Billing Correction)**: The billing officer cross-checks meter reading logs and issues a revised bill with an extended payment deadline.\n\n---\n\n## Comprehensive Power & Gas Conservation Guidelines for Salaried Households\nWith electricity and gas tariffs at historic highs, implementing strategic load management substantially reduces the risk of crossing from protected to non-protected billing brackets:\n\n### 1. High-Impact Electricity Saving Tactics\n- **Air Conditioner Inverter Calibration**: Setting your DC inverter air conditioner temperature at 26°C instead of 18°C reduces continuous compressor amperage draw by up to 35%. Ensure condenser coils are washed every 30 days to prevent thermal overload.\n- **Refrigerator & Deep Freezer Insulation**: Keep cooling units at least 6 inches away from walls to ensure unhindered airflow. Defrost manual freezers regularly, as frost layers exceeding 5mm act as thermal insulators, forcing compressors to run non-stop.\n- **Eliminating Phantom Vampire Loads**: Appliances left on standby mode (microwaves, televisions, set-top boxes, Wi-Fi routers, mobile chargers) consume 5% to 10% of total household baseline energy. Disconnect main wall socket switches when not in use.\n\n### 2. Peak Hours Load Shedding Strategy\nDuring peak hours (daily 7:00 PM to 11:00 PM in summer), unit rates double or triple under Time-of-Use metering. Avoid running heavy inductive loads (washing machine spinners, electric water geysers, pressing irons, water suction motors) during these four hours to protect your monthly billing tier.\n\n---\n\n## Consumer Rights under NEPRA & OGRA Charters\nUnder statutory regulations established by the **National Electric Power Regulatory Authority (NEPRA)** and **Oil and Gas Regulatory Authority (OGRA)**:\n- **Billing Notice Requirement**: Consumers must receive physical or digital bills at least 7 clear calendar days before the stated payment due date.\n- **Wrongful Disconnection Protection**: No utility company may disconnect an active connection without serving a mandatory 7-day physical notice, and disconnections are legally prohibited on Fridays, weekends, and public gazetted holidays.\n- **Defective Meter Testing Rights**: Consumers have the legal right to challenge suspicious meter acceleration by paying a nominal inspection fee. If the laboratory check proves meter error exceeding ±2%, the utility must issue retroactive credit adjustments for the previous 6 months.",
    "contentUr": "## اسلام آباد الیکٹرک سپلائی کمپنی (IESCO) گائیڈ\nآئیسکو وفاقی دارالحکومت اور راولپنڈی ڈویژن کو بجلی فراہم کرتی ہے۔ صارفین اپنا ڈپلیکیٹ بل آن لائن چیک کر کے موبائل ایپ سے فوری ادا کر سکتے ہیں۔",
    "relatedSlugs": [
      "/bills/lesco-bill-check-online",
      "/bills/wapda-bill-complaint-number"
    ]
  },
  "fesco-bill-check-online": {
    "slug": "fesco-bill-check-online",
    "fullPath": "/bills/fesco-bill-check-online",
    "categoryId": "bills",
    "titleEn": "FESCO Bill Check Online 2026: Faisalabad Electricity Duplicate Bill",
    "titleUr": "فیسکو آن لائن بجلی بل چیک 2026 (فیصل آباد ڈویژن)",
    "metaDescriptionEn": "Check and print FESCO duplicate electricity bill online for Faisalabad, Jhang, Sargodha, Toba Tek Singh, and Chiniot by 14-digit reference number.",
    "metaDescriptionUr": "فیصل آباد اور جھنگ فیسکو آن لائن بجلی بل پرنٹ کا طریقہ کار بائے ریفرنس نمبر۔",
    "directAnswerEn": "To check your FESCO electricity bill online in 2026, visit bill.pitc.com.pk/fescobill or fesco.com.pk. Enter your 14-digit Reference Number to download duplicate bills for Faisalabad, Sargodha, Jhang, Toba Tek Singh, Chiniot, Mianwali, Bhakkar, and Khushab.",
    "directAnswerUr": "فیصل آباد الیکٹرک سپلائی کمپنی (FESCO) کا بل چیک کرنے کے لیے bill.pitc.com.pk/fescobill پر جا کر 14 ہندسوں کا ریفرنس نمبر درج کریں۔ فیصل آباد، سرگودھا، جھنگ، ٹوبہ ٹیک سنگھ اور میانوالی کے بل آن لائن دستیاب ہیں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "FESCO Bill Portal",
      "url": "https://bill.pitb.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Utility Services Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "FESCO Duplicate Bill Check",
        "serviceUr": "فیسکو ڈپلیکیٹ بل چیک",
        "normal": "100% FREE",
        "urgent": "Instant PDF",
        "executive": "PITC Official Portal",
        "validity": "Monthly"
      },
      {
        "serviceEn": "FESCO Helpline",
        "serviceUr": "فیسکو ہیلپ لائن نمبر",
        "normal": "Dial 118 / 0800-66554",
        "urgent": "SMS 8118",
        "executive": "Customer Care",
        "validity": "24/7"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Open FESCO Web Bill Portal",
        "titleUr": "فیسکو ویب بل پورٹل کھولیں",
        "detailEn": "Access bill.pitc.com.pk/fescobill.",
        "detailUr": "پورٹل bill.pitc.com.pk/fescobill کھولیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Type 14-Digit Reference Number",
        "titleUr": "14 ہندسوں کا ریفرنس نمبر درج کریں",
        "detailEn": "Enter your reference number without spaces.",
        "detailUr": "اپنا 14 ہندسوں کا ریفرنس نمبر درج کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Download or Print Duplicate Bill",
        "titleUr": "ڈپلیکیٹ بل پرنٹ یا محفوظ کریں",
        "detailEn": "Save the PDF copy for bank counter or digital payment.",
        "detailUr": "پی ڈی ایف کاپی محفوظ کر کے آن لائن ادائیگی کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "How do I get an extension on my FESCO bill due date?",
        "questionUr": "فیسکو بل کی تاریخ میں توسیع کیسے کروائیں؟",
        "answerEn": "Visit your local FESCO Sub-Divisional Officer (SDO) office before the due date. SDOs have delegated authority to grant a 3 to 5-day due date extension for genuine cases without surcharge.",
        "answerUr": "آخری تاریخ سے پہلے اپنے قریبی ایس ڈی او (SDO) آفس جائیں، وہ 3 سے 5 دن کی توسیع کر سکتے ہیں۔"
      },
      {
        "questionEn": "How can citizens verify the authenticity of official documents and avoid imposters?",
        "questionUr": "سرکاری دستاویزات کی تصدیق اور جعل سازی سے کیسے بچا جائے؟",
        "answerEn": "Always verify tracking numbers on the official government website ending in .gov.pk or .org.pk. Never share one-time password (OTP) codes or sensitive biometric details with unverified phone callers claiming to represent government helplines.",
        "answerUr": "ہمیشہ .gov.pk ویب سائٹ سے تصدیق کریں اور کسی بھی غیر متعلقہ فون کال پر اپنا او ٹی پی (OTP) یا بائیو میٹرک تفصیلات شیئر نہ کریں۔"
      }
    ],
    "contentEn": "## Faisalabad Electric Supply Company (FESCO) Guide 2026\n**FESCO** delivers electricity to over 4.5 million consumers in the industrial heartland of Punjab, powering textile mills, agricultural tube-wells, and urban households.\n\n## Industrial & Agricultural Power Supply in Faisalabad Division\n**FESCO** manages heavy industrial feeder networks powering cotton ginning, weaving, and chemical dyeing units. Specialized Time-of-Use (TOU) digital metering records peak and off-peak loads with high-precision maximum demand indicators (MDI).\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## Faisalabad Electric Supply Company (FESCO) Industrial, Urban & Agri Power Guide 2026\n**FESCO** manages electric power distribution for over 4.5 million consumers across 8 major districts in central and western Punjab: **Faisalabad, Sargodha, Jhang, Toba Tek Singh, Chiniot, Mianwali, Bhakkar, and Khushab**.\n\n### 1. Industrial Power Distribution & Textile Sector Subsidies\nAs Pakistan's textile and weaving capital, Faisalabad features dedicated B-3 and B-4 industrial power feeders operating at 11 kV and 132 kV. The company provides dedicated industrial facilitation desks at the FESCO Headquarters on West Canal Road, Faisalabad.\n\n### 2. Agricultural Tube-Well Subsidy Protocols\nUnder the Punjab Agri Relief Package, registered farmers holding valid Kisan Cards operating electric tube-wells receive targeted fuel surcharge exemptions and fixed billing slab concessions to support wheat, sugarcane, and cotton cultivation.\n\n---\n\n## Complete Guide to FESCO New Connection Application via ENC Portal\n1. **Access ENC Portal**: Visit `enc.com.pk` (Electricity New Connection Portal).\n2. **Select FESCO & Category**: Choose between Domestic (Single-Phase), Commercial, or Agricultural connection.\n3. **Upload Documents**: Attach scanned CNIC copy, property ownership deed/registry, and neighbor's electricity bill reference number.\n4. **Demand Notice Payment**: Pay the issued estimate demand notice via 1Link PSID and track installation within 15 working days.\n\n---\n\n## Comprehensive Power & Gas Conservation Guidelines for Salaried Households\nWith electricity and gas tariffs at historic highs, implementing strategic load management substantially reduces the risk of crossing from protected to non-protected billing brackets:\n\n### 1. High-Impact Electricity Saving Tactics\n- **Air Conditioner Inverter Calibration**: Setting your DC inverter air conditioner temperature at 26°C instead of 18°C reduces continuous compressor amperage draw by up to 35%. Ensure condenser coils are washed every 30 days to prevent thermal overload.\n- **Refrigerator & Deep Freezer Insulation**: Keep cooling units at least 6 inches away from walls to ensure unhindered airflow. Defrost manual freezers regularly, as frost layers exceeding 5mm act as thermal insulators, forcing compressors to run non-stop.\n- **Eliminating Phantom Vampire Loads**: Appliances left on standby mode (microwaves, televisions, set-top boxes, Wi-Fi routers, mobile chargers) consume 5% to 10% of total household baseline energy. Disconnect main wall socket switches when not in use.\n\n### 2. Peak Hours Load Shedding Strategy\nDuring peak hours (daily 7:00 PM to 11:00 PM in summer), unit rates double or triple under Time-of-Use metering. Avoid running heavy inductive loads (washing machine spinners, electric water geysers, pressing irons, water suction motors) during these four hours to protect your monthly billing tier.\n\n---\n\n## Consumer Rights under NEPRA & OGRA Charters\nUnder statutory regulations established by the **National Electric Power Regulatory Authority (NEPRA)** and **Oil and Gas Regulatory Authority (OGRA)**:\n- **Billing Notice Requirement**: Consumers must receive physical or digital bills at least 7 clear calendar days before the stated payment due date.\n- **Wrongful Disconnection Protection**: No utility company may disconnect an active connection without serving a mandatory 7-day physical notice, and disconnections are legally prohibited on Fridays, weekends, and public gazetted holidays.\n- **Defective Meter Testing Rights**: Consumers have the legal right to challenge suspicious meter acceleration by paying a nominal inspection fee. If the laboratory check proves meter error exceeding ±2%, the utility must issue retroactive credit adjustments for the previous 6 months.\n\n---\n\n## Summary of Key Verification Protocols & Citizen Safeguards (2026 Checklist)\nBefore completing any official transaction or submitting financial documents, verify the following baseline procedural benchmarks:\n\n1. **Official Verification Stamps**: Ensure all computer-generated vouchers, receipts, and bank deposit challans bear the official branch cashier stamp and computer transaction sequence number.\n2. **Digital Copy Archival**: Maintain a scanned PDF or photograph of your submitted forms and payment receipts in cloud storage (Google Drive or Dropbox) for at least 5 years.\n3. **Tracking & Timeline Monitoring**: Utilize the official departmental SMS short-code or online portal tracking number to monitor progress weekly. If no update occurs within the stipulated charter timeframe, immediately escalate the case to the departmental grievance officer or relevant provincial ombudsman desk.",
    "contentUr": "## فیصل آباد الیکٹرک سپلائی کمپنی (FESCO) گائیڈ\nفیسکو فیصل آباد اور سرگودھا ڈویژن کے اضلاع میں بجلی فراہم کرتی ہے۔",
    "relatedSlugs": [
      "/bills/lesco-bill-check-online",
      "/bills/wapda-bill-complaint-number"
    ]
  },
  "mepco-bill-check-online": {
    "slug": "mepco-bill-check-online",
    "fullPath": "/bills/mepco-bill-check-online",
    "categoryId": "bills",
    "titleEn": "MEPCO Bill Check Online 2026: Multan Electricity Duplicate Bill",
    "titleUr": "میپکو آن لائن بجلی بل چیک 2026 (ملتان و جنوبی پنجاب)",
    "metaDescriptionEn": "MEPCO online duplicate bill check for Multan, Sahiwal, D.G. Khan, Bahawalpur, Rahim Yar Khan & Khanewal. Print duplicate bill by 14-digit reference number.",
    "metaDescriptionUr": "میپکو ملتان اور جنوبی پنجاب کا آن لائن بجلی بل ڈپلیکیٹ پرنٹ اور بل ادائیگی۔",
    "directAnswerEn": "To check your MEPCO electricity bill online in 2026, visit bill.pitc.com.pk/mepcobill or mepco.com.pk. Enter your 14-digit Reference Number to download duplicate bills across South Punjab including Multan, Bahawalpur, D.G. Khan, Sahiwal, Rahim Yar Khan, and Muzaffargarh.",
    "directAnswerUr": "ملتان الیکٹرک پاور کمپنی (MEPCO) کا بل آن لائن چیک کرنے کے لیے bill.pitc.com.pk/mepcobill پر 14 ہندسوں کا ریفرنس نمبر درج کریں۔ ملتان، بہاولپور، ڈیرہ غازی خان اور رحیم یار خان کے ڈپلیکیٹ بل فوری ڈاؤن لوڈ کریں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "MEPCO Official Bill Gateway",
      "url": "https://bill.pitb.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Utility Services Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "MEPCO Duplicate Bill Check",
        "serviceUr": "میپکو ڈپلیکیٹ بل چیک",
        "normal": "100% FREE",
        "urgent": "Instant PDF",
        "executive": "PITC Official Portal",
        "validity": "Monthly"
      },
      {
        "serviceEn": "MEPCO Helpline",
        "serviceUr": "میپکو ہیلپ لائن نمبر",
        "normal": "Dial 118 / 061-9220313",
        "urgent": "SMS 8118",
        "executive": "South Punjab",
        "validity": "24/7"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Open MEPCO Bill Portal",
        "titleUr": "میپکو بل پورٹل کھولیں",
        "detailEn": "Access bill.pitc.com.pk/mepcobill.",
        "detailUr": "پورٹل bill.pitc.com.pk/mepcobill کھولیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Enter 14-Digit Reference Number",
        "titleUr": "14 ہندسوں کا ریفرنس نمبر درج کریں",
        "detailEn": "Type your consumer reference number.",
        "detailUr": "ریفرنس نمبر درج کر کے بل جنریٹ کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Print or Pay Online",
        "titleUr": "پرنٹ کریں یا آن لائن فیس ادا کریں",
        "detailEn": "Pay via 1Link or Easypaisa using your reference number.",
        "detailUr": "بینکنگ ایپ سے 1Link کے ذریعے بل ادا کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "What is the MEPCO jurisdiction area?",
        "questionUr": "میپکو کا دائرہ اختیار کون سے اضلاع پر ہے؟",
        "answerEn": "MEPCO is the largest DISCO in Pakistan by geographic area, covering 13 districts in South Punjab.",
        "answerUr": "میپکو جنوبی پنجاب کے 13 اضلاع پر محیط سب سے بڑی ڈسٹری بیوشن کمپنی ہے۔"
      },
      {
        "questionEn": "How can citizens verify the authenticity of official documents and avoid imposters?",
        "questionUr": "سرکاری دستاویزات کی تصدیق اور جعل سازی سے کیسے بچا جائے؟",
        "answerEn": "Always verify tracking numbers on the official government website ending in .gov.pk or .org.pk. Never share one-time password (OTP) codes or sensitive biometric details with unverified phone callers claiming to represent government helplines.",
        "answerUr": "ہمیشہ .gov.pk ویب سائٹ سے تصدیق کریں اور کسی بھی غیر متعلقہ فون کال پر اپنا او ٹی پی (OTP) یا بائیو میٹرک تفصیلات شیئر نہ کریں۔"
      }
    ],
    "contentEn": "## Multan Electric Power Company (MEPCO) Guide 2026\n**MEPCO** serves the vast agricultural and commercial expanse of South Punjab, managing complex distribution networks across cotton belts and mango orchards.\n\n## Tube-Well & Rural Electrification under MEPCO South Punjab\nManaging electricity distribution across cotton and wheat farming belts, **MEPCO** administers subsidized agricultural flat-rate schemes and tube-well solarization transition policies.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## Multan Electric Power Company (MEPCO) Complete South Punjab Billing Guide 2026\n**MEPCO** is the largest electricity distribution utility in Pakistan by geographic area, covering over 105,000 square kilometers across **13 districts in South Punjab**: Multan, Khanewal, Sahiwal, Pakpattan, Vehari, Lodhran, Bahawalpur, Bahawalnagar, Rahim Yar Khan, D.G. Khan, Muzaffargarh, Layyah, and Rajanpur.\n\n### 1. Managing Heavy Summer Bills & Voltage Fluctuation in Rural Feeders\nSouth Punjab experiences extreme summer temperatures exceeding 48°C, leading to heavy power demand and low voltage issues in tail-end rural feeders. MEPCO has installed automated capacitor banks and dedicated 132 kV grid stations in Lodhran, Taunsa, and Chishtian to stabilize transmission voltages.\n\n### 2. Step-by-Step Procedure to Change Meter Name on MEPCO Connections\n- Submit Form 2-A at your local MEPCO sub-division office.\n- Attach applicant's CNIC, original computerized Fard Malkiat or registered Sale Deed, and no-objection certificate (NOC) from previous owner.\n- Pay the nominal change of name fee (PKR 350) and receive updated bill under your name in the next billing cycle.\n\n---\n\n## Comprehensive Power & Gas Conservation Guidelines for Salaried Households\nWith electricity and gas tariffs at historic highs, implementing strategic load management substantially reduces the risk of crossing from protected to non-protected billing brackets:\n\n### 1. High-Impact Electricity Saving Tactics\n- **Air Conditioner Inverter Calibration**: Setting your DC inverter air conditioner temperature at 26°C instead of 18°C reduces continuous compressor amperage draw by up to 35%. Ensure condenser coils are washed every 30 days to prevent thermal overload.\n- **Refrigerator & Deep Freezer Insulation**: Keep cooling units at least 6 inches away from walls to ensure unhindered airflow. Defrost manual freezers regularly, as frost layers exceeding 5mm act as thermal insulators, forcing compressors to run non-stop.\n- **Eliminating Phantom Vampire Loads**: Appliances left on standby mode (microwaves, televisions, set-top boxes, Wi-Fi routers, mobile chargers) consume 5% to 10% of total household baseline energy. Disconnect main wall socket switches when not in use.\n\n### 2. Peak Hours Load Shedding Strategy\nDuring peak hours (daily 7:00 PM to 11:00 PM in summer), unit rates double or triple under Time-of-Use metering. Avoid running heavy inductive loads (washing machine spinners, electric water geysers, pressing irons, water suction motors) during these four hours to protect your monthly billing tier.\n\n---\n\n## Consumer Rights under NEPRA & OGRA Charters\nUnder statutory regulations established by the **National Electric Power Regulatory Authority (NEPRA)** and **Oil and Gas Regulatory Authority (OGRA)**:\n- **Billing Notice Requirement**: Consumers must receive physical or digital bills at least 7 clear calendar days before the stated payment due date.\n- **Wrongful Disconnection Protection**: No utility company may disconnect an active connection without serving a mandatory 7-day physical notice, and disconnections are legally prohibited on Fridays, weekends, and public gazetted holidays.\n- **Defective Meter Testing Rights**: Consumers have the legal right to challenge suspicious meter acceleration by paying a nominal inspection fee. If the laboratory check proves meter error exceeding ±2%, the utility must issue retroactive credit adjustments for the previous 6 months.\n\n---\n\n## Summary of Key Verification Protocols & Citizen Safeguards (2026 Checklist)\nBefore completing any official transaction or submitting financial documents, verify the following baseline procedural benchmarks:\n\n1. **Official Verification Stamps**: Ensure all computer-generated vouchers, receipts, and bank deposit challans bear the official branch cashier stamp and computer transaction sequence number.\n2. **Digital Copy Archival**: Maintain a scanned PDF or photograph of your submitted forms and payment receipts in cloud storage (Google Drive or Dropbox) for at least 5 years.\n3. **Tracking & Timeline Monitoring**: Utilize the official departmental SMS short-code or online portal tracking number to monitor progress weekly. If no update occurs within the stipulated charter timeframe, immediately escalate the case to the departmental grievance officer or relevant provincial ombudsman desk.",
    "contentUr": "## ملتان الیکٹرک پاور کمپنی (MEPCO) گائیڈ\nمیپکو جنوبی پنجاب کا سب سے بڑا بجلی تقسیم کار ادارہ ہے۔",
    "relatedSlugs": [
      "/bills/lesco-bill-check-online",
      "/bills/wapda-bill-complaint-number"
    ]
  },
  "ssgc-duplicate-bill-check": {
    "slug": "ssgc-duplicate-bill-check",
    "fullPath": "/bills/ssgc-duplicate-bill-check",
    "categoryId": "bills",
    "titleEn": "SSGC Sui Southern Gas Bill Online Check 2026: Sindh & Balochistan",
    "titleUr": "ایس ایس جی سی سوئی سدرن گیس بل آن لائن چیک 2026 (سندھ و بلوچستان)",
    "metaDescriptionEn": "Check and print SSGC duplicate gas bill online for Karachi, Hyderabad, Quetta, and Sukkur by 10-digit Customer Number. Official SSGC bill portal.",
    "metaDescriptionUr": "کراچی، حیدرآباد اور کوئٹہ ایس ایس جی سی گیس بل آن لائن چیک بذریعہ 10 ہندسوں کا کسٹمر نمبر۔",
    "directAnswerEn": "To check your SSGC (Sui Southern Gas Company) bill online in 2026 for Karachi, Hyderabad, Quetta, and Sukkur, visit ssgc.com.pk/ebill. Enter your 10-digit Customer Number without dashes to download your duplicate gas bill and pay via Easypaisa, JazzCash, or 1Link.",
    "directAnswerUr": "سوئی سدرن گیس کمپنی (SSGC) کا بل کراچی، حیدرآباد اور کوئٹہ کے لیے آن لائن چیک کرنے کے لیے ssgc.com.pk/ebill پر جائیں۔ اپنا 10 ہندسوں کا کسٹمر نمبر درج کر کے ڈپلیکیٹ بل ڈاؤن لوڈ کریں اور آن لائن ادا کریں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "SSGC Customer Web Portal",
      "url": "https://www.ssgc.com.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Gas Services Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "SSGC Duplicate Bill Check",
        "serviceUr": "ایس ایس جی سی ڈپلیکیٹ بل",
        "normal": "100% FREE",
        "urgent": "Instant PDF",
        "executive": "SSGC Customer Portal",
        "validity": "Monthly"
      },
      {
        "serviceEn": "SSGC Emergency Helpline",
        "serviceUr": "ایس ایس جی سی ایمرجنسی ہیلپ لائن",
        "normal": "Dial 1199",
        "urgent": "Landline: 021-99021000",
        "executive": "24/7 Support",
        "validity": "Sindh & Balochistan"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Open SSGC e-Bill Portal",
        "titleUr": "ایس ایس جی سی ای بل پورٹل کھولیں",
        "detailEn": "Access ssgc.com.pk/ebill.",
        "detailUr": "ویب سائٹ ssgc.com.pk/ebill پر جائیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Enter 10-Digit Customer Number",
        "titleUr": "10 ہندسوں کا کسٹمر نمبر درج کریں",
        "detailEn": "Type your Customer Number found on previous bills.",
        "detailUr": "اپنا 10 ہندسوں کا کسٹمر نمبر لکھیں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Download & Settle Bill",
        "titleUr": "بل ڈاؤن لوڈ کریں اور ادائیگی مکمل کریں",
        "detailEn": "Pay using 1Link billing in any bank app.",
        "detailUr": "بینکنگ ایپ کے ذریعے بل جمع کروائیں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "How do I report low gas pressure in winter in Karachi or Quetta?",
        "questionUr": "کراچی یا کوئٹہ میں کم گیس پریشر کی شکایت کیسے درج کروائیں؟",
        "answerEn": "Call 1199 immediately with your Customer Number or lodge a complaint on the SSGC Customer Connect mobile app.",
        "answerUr": "فوری طور پر 1199 پر کال کریں یا کسٹمر کنیکٹ ایپ پر شکایت درج کروائیں۔"
      },
      {
        "questionEn": "How can citizens verify the authenticity of official documents and avoid imposters?",
        "questionUr": "سرکاری دستاویزات کی تصدیق اور جعل سازی سے کیسے بچا جائے؟",
        "answerEn": "Always verify tracking numbers on the official government website ending in .gov.pk or .org.pk. Never share one-time password (OTP) codes or sensitive biometric details with unverified phone callers claiming to represent government helplines.",
        "answerUr": "ہمیشہ .gov.pk ویب سائٹ سے تصدیق کریں اور کسی بھی غیر متعلقہ فون کال پر اپنا او ٹی پی (OTP) یا بائیو میٹرک تفصیلات شیئر نہ کریں۔"
      }
    ],
    "contentEn": "## Sui Southern Gas Company (SSGC) Guide 2026\n**SSGC** provides natural gas and LPG distribution across Sindh and Balochistan, serving domestic kitchens and industrial powerhouses in Karachi and Hub.\n\n## SSGC Industrial & Domestic Distribution across Sindh & Balochistan\n**Sui Southern Gas Company** manages extensive pipeline distribution from Karachi port LNG terminals to interior Sindh and the high-altitude winter belts of Quetta and Kalat.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## Sui Southern Gas Company (SSGC) Complete Billing & Customer Care Guide 2026\n**Sui Southern Gas Company (SSGC)** provides natural gas transmission and distribution to over 3.2 million domestic, commercial, and industrial consumers across **Sindh and Balochistan**, including the major metropolises of Karachi, Hyderabad, Sukkur, Quetta, and Gwadar.\n\n### 1. Understanding the MMBTU & Volume Calculation Formula\nGas meters measure volume consumed in hundreds of cubic meters (Hm3). This volume is converted into heat energy (MMBTU) based on the Gross Calorific Value (GCV) of natural gas supplied from Sui, Badin, and imported RLNG terminals at Port Qasim.\n\n### 2. Winter Load Management & Quetta Emergency Relief\nDuring extreme sub-zero winter temperatures in Quetta, Ziarat, and Kalat, SSGC provides emergency LPG cylinder air-mix distribution and implements specialized winter heating tariff slabs to prevent predatory billing for mountain populations.\n\n---\n\n## Comprehensive Power & Gas Conservation Guidelines for Salaried Households\nWith electricity and gas tariffs at historic highs, implementing strategic load management substantially reduces the risk of crossing from protected to non-protected billing brackets:\n\n### 1. High-Impact Electricity Saving Tactics\n- **Air Conditioner Inverter Calibration**: Setting your DC inverter air conditioner temperature at 26°C instead of 18°C reduces continuous compressor amperage draw by up to 35%. Ensure condenser coils are washed every 30 days to prevent thermal overload.\n- **Refrigerator & Deep Freezer Insulation**: Keep cooling units at least 6 inches away from walls to ensure unhindered airflow. Defrost manual freezers regularly, as frost layers exceeding 5mm act as thermal insulators, forcing compressors to run non-stop.\n- **Eliminating Phantom Vampire Loads**: Appliances left on standby mode (microwaves, televisions, set-top boxes, Wi-Fi routers, mobile chargers) consume 5% to 10% of total household baseline energy. Disconnect main wall socket switches when not in use.\n\n### 2. Peak Hours Load Shedding Strategy\nDuring peak hours (daily 7:00 PM to 11:00 PM in summer), unit rates double or triple under Time-of-Use metering. Avoid running heavy inductive loads (washing machine spinners, electric water geysers, pressing irons, water suction motors) during these four hours to protect your monthly billing tier.\n\n---\n\n## Consumer Rights under NEPRA & OGRA Charters\nUnder statutory regulations established by the **National Electric Power Regulatory Authority (NEPRA)** and **Oil and Gas Regulatory Authority (OGRA)**:\n- **Billing Notice Requirement**: Consumers must receive physical or digital bills at least 7 clear calendar days before the stated payment due date.\n- **Wrongful Disconnection Protection**: No utility company may disconnect an active connection without serving a mandatory 7-day physical notice, and disconnections are legally prohibited on Fridays, weekends, and public gazetted holidays.\n- **Defective Meter Testing Rights**: Consumers have the legal right to challenge suspicious meter acceleration by paying a nominal inspection fee. If the laboratory check proves meter error exceeding ±2%, the utility must issue retroactive credit adjustments for the previous 6 months.\n\n---\n\n## Summary of Key Verification Protocols & Citizen Safeguards (2026 Checklist)\nBefore completing any official transaction or submitting financial documents, verify the following baseline procedural benchmarks:\n\n1. **Official Verification Stamps**: Ensure all computer-generated vouchers, receipts, and bank deposit challans bear the official branch cashier stamp and computer transaction sequence number.\n2. **Digital Copy Archival**: Maintain a scanned PDF or photograph of your submitted forms and payment receipts in cloud storage (Google Drive or Dropbox) for at least 5 years.\n3. **Tracking & Timeline Monitoring**: Utilize the official departmental SMS short-code or online portal tracking number to monitor progress weekly. If no update occurs within the stipulated charter timeframe, immediately escalate the case to the departmental grievance officer or relevant provincial ombudsman desk.",
    "contentUr": "## سوئی سدرن گیس کمپنی (SSGC) گائیڈ\nسندھ اور بلوچستان کے صارفین کے لیے سوئی سدرن گیس کا بل آن لائن حاصل کرنے کا طریقہ۔",
    "relatedSlugs": [
      "/bills/sui-gas-bill-check-online",
      "/bills/wapda-bill-complaint-number"
    ]
  },
  "electricity-bill-installment-guide": {
    "slug": "electricity-bill-installment-guide",
    "fullPath": "/bills/electricity-bill-installment-guide",
    "categoryId": "bills",
    "titleEn": "Electricity Bill Extension & Installment Application Guide 2026",
    "titleUr": "بجلی کا بل اقساط میں کروانے اور تاریخ میں توسیع کا طریقہ 2026",
    "metaDescriptionEn": "How to get electricity bill installments approved at LESCO, IESCO, K-Electric, MEPCO customer centers. NEPRA consumer rules, due date extension, and surge relief.",
    "metaDescriptionUr": "بھاری بجلی کا بل آسان اقساط میں کروانے اور آخری تاریخ بڑھوانے کی مکمل سرکاری گائیڈ۔",
    "directAnswerEn": "To convert a heavy electricity bill into monthly installments in Pakistan in 2026, visit your local DISCO Sub-Divisional Officer (SDO) or Revenue Officer (RO) before the due date. SDOs can approve 2-3 installments up to PKR 50,000; Executive Engineers (XEN) can approve up to PKR 200,000.",
    "directAnswerUr": "بھاری بجلی کے بل کو آسان اقساط میں تبدیل کروانے کے لیے آخری تاریخ سے پہلے اپنے قریبی ایس ڈی او (SDO) یا ریونیو آفیسر (RO) سے رجوع کریں۔ ایس ڈی او 50 ہزار تک کے بل پر 2 سے 3 اقساط اور ایکسین (XEN) 2 لاکھ تک کے بل پر اقساط کی منظوری دینے کے مجاز ہیں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "NEPRA Consumer Affairs",
      "url": "https://nepra.org.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Consumer Protection Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "SDO Installment Authority (Sub-Division)",
        "serviceUr": "ایس ڈی او کاؤنٹر منظوری",
        "normal": "Up to PKR 50,000",
        "urgent": "2 to 3 Installments",
        "executive": "Approved Same Day",
        "validity": "Current Bill Only"
      },
      {
        "serviceEn": "XEN / Executive Engineer Authority",
        "serviceUr": "ایکسین (XEN) منظوری",
        "normal": "PKR 50,000 - 200,000",
        "urgent": "3 to 4 Installments",
        "executive": "Division Office",
        "validity": "Current Bill Only"
      },
      {
        "serviceEn": "SE / Superintending Engineer Authority",
        "serviceUr": "ایس ای (SE) منظوری",
        "normal": "Above PKR 200,000",
        "urgent": "Up to 6 Installments",
        "executive": "Circle Office",
        "validity": "Special Approval"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Take Original Bill & CNIC Copy to SDO Office",
        "titleUr": "اصل بل اور شناختی کارڈ کاپی لے کر ایس ڈی او آفس جائیں",
        "detailEn": "Visit your local DISCO sub-division office (LESCO, IESCO, K-Electric, MEPCO) before the printed due date.",
        "detailUr": "آخری تاریخ سے پہلے اصل بل اور شناختی کارڈ کے ساتھ ایس ڈی او آفس پہنچیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Submit Simple Installment Request Application",
        "titleUr": "اقساط کی درخواست پر دستخط کریں",
        "detailEn": "Fill a standardized installment slip stating financial hardship and requesting 3 equal installments.",
        "detailUr": "سادہ کاغذ پر معاشی مجبوری کی وجہ لکھ کر اقساط کی درخواست جمع کروائیں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Receive Computerized Computer Voucher Slips",
        "titleUr": "کمپیوٹرائزڈ قسطوں والی الگ رسیدیں حاصل کریں",
        "detailEn": "The RO splits the total sum into 3 separate computerized pay-in slips with individual due dates.",
        "detailUr": "ریونیو آفیسر سسٹم میں قسطیں درج کر کے الگ الگ تاریخوں کے واؤچر جاری کرے گا۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Pay First Installment on Same Day",
        "titleUr": "پہلی قسط اسی دن بینک میں جمع کروائیں",
        "detailEn": "Pay the first installment immediately at the bank counter or via mobile banking to avoid power disconnection.",
        "detailUr": "پہلی قسط اسی دن جمع کروائیں تاکہ کنکشن منقطع ہونے سے محفوظ رہے۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Can I get installments on a running connection with arrears?",
        "questionUr": "کیا بقایاجات والے بل کی قسطیں ہو سکتی ہیں؟",
        "answerEn": "Yes, but once an installment schedule is sanctioned, you must pay all subsequent monthly regular bills plus the agreed installment on time. Defaulting on any installment automatically voids the relief.",
        "answerUr": "جی ہاں، لیکن قسطیں منظور ہونے کے بعد تمام اقساط اور نیا ماہانہ بل وقت پر ادا کرنا لازمی ہوتا ہے۔"
      }
    ],
    "contentEn": "## Complete Guide to Electricity Bill Installments in Pakistan 2026\nSoaring fuel price adjustments and capacity taxes can make summer electricity bills overwhelming for salaried families. Under **NEPRA Consumer Service Manual (CSM) regulations**, every electricity consumer has the legal right to request structured monthly installments for heavy utility bills.\n\n## Complete Legal Framework: NEPRA Consumer Service Manual Guidelines\nUnder Section 9 of the NEPRA Consumer Service Manual (CSM):\n- Any domestic consumer facing financial hardship is entitled to up to **3 monthly installments** upon application.\n- Disconnection notices are legally suspended the moment an official installment plan is signed and the first voucher is deposited.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## Complete Legal & Practical Manual for Electricity Bill Installments across Pakistan\nUnder the **NEPRA Consumer Service Manual (CSM)**, electricity distribution companies (LESCO, IESCO, FESCO, MEPCO, GEPCO, PESCO, HESCO, SEPCO, QESCO, K-Electric) are legally required to provide installment relief to consumers facing financial distress.\n\n### 1. Delegation of Financial Powers for Installment Approval\n\n| Official Designation | Maximum Bill Amount Eligible for Installments | Number of Permissible Monthly Installments | Office Location |\n| :--- | :--- | :--- | :--- |\n| **Sub-Divisional Officer (SDO)** | Up to PKR 50,000 | 2 to 3 Installments | Local Sub-Division Office |\n| **Executive Engineer (XEN)** | Up to PKR 200,000 | 3 to 4 Installments | Division Office |\n| **Superintending Engineer (SE)** | Up to PKR 500,000 | 4 to 6 Installments | Circle Office |\n| **Chief Executive Officer (CEO)** | Unlimited Amount / Industrial | Up to 12 Installments | DISCO Headquarters |\n\n### 2. Critical Caveats When Availing Installments\n- **Immediate Power Disconnection Protection**: Once the SDO signs the installment voucher and the first installment is deposited at the bank, the computerized disconnection order (*KPK List*) is automatically frozen in the billing database.\n- **Avoiding Default Termination**: If a consumer defaults on any installment in the second or third month, the full remaining balance becomes immediately payable with a mandatory 10% late payment surcharge.\n\n---\n\n## Comprehensive Power & Gas Conservation Guidelines for Salaried Households\nWith electricity and gas tariffs at historic highs, implementing strategic load management substantially reduces the risk of crossing from protected to non-protected billing brackets:\n\n### 1. High-Impact Electricity Saving Tactics\n- **Air Conditioner Inverter Calibration**: Setting your DC inverter air conditioner temperature at 26°C instead of 18°C reduces continuous compressor amperage draw by up to 35%. Ensure condenser coils are washed every 30 days to prevent thermal overload.\n- **Refrigerator & Deep Freezer Insulation**: Keep cooling units at least 6 inches away from walls to ensure unhindered airflow. Defrost manual freezers regularly, as frost layers exceeding 5mm act as thermal insulators, forcing compressors to run non-stop.\n- **Eliminating Phantom Vampire Loads**: Appliances left on standby mode (microwaves, televisions, set-top boxes, Wi-Fi routers, mobile chargers) consume 5% to 10% of total household baseline energy. Disconnect main wall socket switches when not in use.\n\n### 2. Peak Hours Load Shedding Strategy\nDuring peak hours (daily 7:00 PM to 11:00 PM in summer), unit rates double or triple under Time-of-Use metering. Avoid running heavy inductive loads (washing machine spinners, electric water geysers, pressing irons, water suction motors) during these four hours to protect your monthly billing tier.\n\n---\n\n## Consumer Rights under NEPRA & OGRA Charters\nUnder statutory regulations established by the **National Electric Power Regulatory Authority (NEPRA)** and **Oil and Gas Regulatory Authority (OGRA)**:\n- **Billing Notice Requirement**: Consumers must receive physical or digital bills at least 7 clear calendar days before the stated payment due date.\n- **Wrongful Disconnection Protection**: No utility company may disconnect an active connection without serving a mandatory 7-day physical notice, and disconnections are legally prohibited on Fridays, weekends, and public gazetted holidays.\n- **Defective Meter Testing Rights**: Consumers have the legal right to challenge suspicious meter acceleration by paying a nominal inspection fee. If the laboratory check proves meter error exceeding ±2%, the utility must issue retroactive credit adjustments for the previous 6 months.",
    "contentUr": "## بجلی کے بل کی اقساط کروانے کا مکمل قانونی طریقہ 2026\nنیپرا کے قوانین کے تحت ہر شہری کو بھاری بل آسان اقساط میں تبدیل کروانے کا باقاعدہ قانونی حق حاصل ہے۔",
    "relatedSlugs": [
      "/bills/lesco-bill-check-online",
      "/bills/wapda-bill-complaint-number"
    ]
  },
  "bise-rawalpindi-result-2026": {
    "slug": "bise-rawalpindi-result-2026",
    "fullPath": "/education/bise-rawalpindi-result-2026",
    "categoryId": "education",
    "titleEn": "BISE Rawalpindi Board Result 2026: 9th, 10th, 11th & 12th Class",
    "titleUr": "بورڈ آف انٹرمیڈیٹ اینڈ سیکنڈری ایجوکیشن راولپنڈی رزلٹ 2026",
    "metaDescriptionEn": "BISE Rawalpindi matric (SSC) and intermediate (HSSC) result check online by roll number and SMS 800296. Official gazette and mark sheet.",
    "metaDescriptionUr": "بی آئی ایس ای راولپنڈی بورڈ 9ویں، 10ویں، 11ویں اور 12ویں کلاس کا رزلٹ آن لائن رول نمبر اور ایس ایم ایس 800296 سے دیکھیں۔",
    "directAnswerEn": "To check BISE Rawalpindi 9th, 10th, 11th, or 12th class result 2026 online, enter your Roll Number at biserawalpindi.edu.pk or send your Roll Number via SMS to 800296.",
    "directAnswerUr": "راولپنڈی بورڈ کا رزلٹ دیکھنے کے لیے اپنا رول نمبر biserawalpindi.edu.pk پر درج کریں یا 800296 پر ایس ایم ایس بھیجیں۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "BISE Rawalpindi Portal",
      "url": "https://biserawalpindi.edu.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Education Gazette Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Online Gazette Result",
        "serviceUr": "آن لائن رزلٹ پورٹل",
        "normal": "FREE",
        "urgent": "Instant View",
        "executive": "Official Site"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Enter Roll Number on BISE Portal",
        "titleUr": "راولپنڈی بورڈ پورٹل پر رول نمبر درج کریں",
        "detailEn": "Visit biserawalpindi.edu.pk and click 'Results'. Enter roll number to view marks.",
        "detailUr": "پورٹل پر رول نمبر درج کر کے نمبرز اور ڈی ایم سی دیکھیں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "What is BISE Rawalpindi SMS result code?",
        "questionUr": "راولپنڈی بورڈ کا ایس ایم ایس رزلٹ کوڈ کیا ہے؟",
        "answerEn": "Send Roll Number to 800296.",
        "answerUr": "اپنا رول نمبر 800296 پر ایس ایم ایس کریں۔"
      }
    ],
    "contentEn": "BISE Rawalpindi matric and FSc result gazette lookup guide.",
    "contentUr": "راولپنڈی بورڈ کے رزلٹ اور مارکس شیٹ کا مکمل گائیڈ۔",
    "relatedSlugs": [
      "/education/bise-result-check-2026",
      "/education/bise-lahore-result-2026"
    ]
  },
  "bise-faisalabad-result-2026": {
    "slug": "bise-faisalabad-result-2026",
    "fullPath": "/education/bise-faisalabad-result-2026",
    "categoryId": "education",
    "titleEn": "BISE Faisalabad Board Result 2026: 9th, 10th, 11th & 12th Class",
    "titleUr": "بورڈ آف انٹرمیڈیٹ اینڈ سیکنڈری ایجوکیشن فیصل آباد رزلٹ 2026",
    "metaDescriptionEn": "BISE Faisalabad matric and FSc result check online by roll number and SMS 800299. Official gazette search for SSC & HSSC.",
    "metaDescriptionUr": "بی آئی ایس ای فیصل آباد بورڈ 9ویں، 10ویں اور 12ویں جماعت کا رزلٹ آن لائن اور ایس ایم ایس 800299 پر دیکھیں۔",
    "directAnswerEn": "Check BISE Faisalabad Board 9th, 10th, 11th, and 12th class results online by entering your Roll Number at bisefsd.edu.pk or send your Roll Number via SMS to 800299.",
    "directAnswerUr": "فیصل آباد بورڈ کا رزلٹ دیکھنے کے لیے bisefsd.edu.pk پر رول نمبر درج کریں یا 800299 پر ایس ایم ایس بھیجیں۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "BISE Faisalabad Portal",
      "url": "https://bisefsd.edu.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Education Gazette Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Faisalabad Result Gazette",
        "serviceUr": "فیصل آباد رزلٹ پرنٹ",
        "normal": "FREE",
        "urgent": "Instant Search",
        "executive": "Official Site"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Enter Roll Number",
        "titleUr": "رول نمبر درج کریں",
        "detailEn": "Visit bisefsd.edu.pk, enter roll number, and download result card.",
        "detailUr": "bisefsd.edu.pk پر رول نمبر درج کر کے رزلٹ کارڈ لیں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "What is BISE Faisalabad SMS result code?",
        "questionUr": "فیصل آباد بورڈ کا رزلٹ ایس ایم ایس کوڈ کیا ہے؟",
        "answerEn": "Send Roll Number to 800299.",
        "answerUr": "اپنا رول نمبر 800299 پر ایس ایم ایس بھیجیں۔"
      }
    ],
    "contentEn": "BISE Faisalabad SSC & HSSC board exam result gazette portal.",
    "contentUr": "فیصل آباد بورڈ میٹرک و انٹر رزلٹ کی مکمل تفصیل۔",
    "relatedSlugs": [
      "/education/bise-result-check-2026",
      "/education/bise-lahore-result-2026"
    ]
  },
  "fbise-federal-board-result-2026": {
    "slug": "fbise-federal-board-result-2026",
    "fullPath": "/education/fbise-federal-board-result-2026",
    "categoryId": "education",
    "titleEn": "FBISE Federal Board Result 2026: SSC & HSSC Check Online",
    "titleUr": "فیڈرل بورڈ (FBISE) اسلام آباد رزلٹ آن لائن چیک 2026",
    "metaDescriptionEn": "Check FBISE Federal Board Islamabad matric (SSC I & II) and FSc (HSSC I & II) result online by roll number, name, or SMS 5050.",
    "metaDescriptionUr": "فیڈرل بورڈ اسلام آباد 9ویں، 10ویں اور ایف ایس سی کا رزلٹ آن لائن fbise.edu.pk اور ایس ایم ایس 5050 پر دیکھیں۔",
    "directAnswerEn": "To check FBISE Federal Board Islamabad 9th, 10th, 11th, or 12th class results 2026 online, visit fbise.edu.pk/result-main.php and enter your Roll Number or Name. Alternatively, SMS your Roll Number format 'FB [RollNo]' to 5050.",
    "directAnswerUr": "فیڈرل بورڈ کا رزلٹ آن لائن دیکھنے کے لیے fbise.edu.pk پر رول نمبر درج کریں یا FB کے ساتھ رول نمبر ملا کر 5050 پر ایس ایم ایس بھیجیں۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "FBISE Official Portal",
      "url": "https://fbise.edu.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Federal Education Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "FBISE Result Check",
        "serviceUr": "فیڈرل بورڈ آن لائن رزلٹ",
        "normal": "FREE",
        "urgent": "Instant View",
        "executive": "Official Portal"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Enter Roll Number on FBISE Portal",
        "titleUr": "فیڈرل بورڈ پورٹل پر رول نمبر درج کریں",
        "detailEn": "Visit fbise.edu.pk, enter roll number to download Detailed Marks Certificate (DMC).",
        "detailUr": "fbise.edu.pk پر رول نمبر درج کر کے رزلٹ کارڈ دیکھیں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "How to check FBISE result by SMS?",
        "questionUr": "ایس ایم ایس کے ذریعے فیڈرل بورڈ کا رزلٹ کیسے دیکھیں؟",
        "answerEn": "Format SMS as 'FB [RollNo]' and send to 5050.",
        "answerUr": "FB لکھ کر سپیس دیں اور رول نمبر 5050 پر بھیجیں۔"
      }
    ],
    "contentEn": "FBISE Federal Board Islamabad matriculation and intermediate gazette result lookup.",
    "contentUr": "فیڈرل بورڈ اسلام آباد کے آن لائن رزلٹ اور ڈی ایم سی کی مکمل معلومات۔",
    "relatedSlugs": [
      "/education/bise-result-check-2026",
      "/education/bise-lahore-result-2026"
    ]
  },
  "bise-paper-rechecking-procedure": {
    "slug": "bise-paper-rechecking-procedure",
    "fullPath": "/education/bise-paper-rechecking-procedure",
    "categoryId": "education",
    "titleEn": "BISE Board Paper Rechecking & Recounting Procedure 2026",
    "titleUr": "بورڈ پیپر ری چیکنگ اور ری کاؤنٹنگ کا مکمل طریقہ 2026",
    "metaDescriptionEn": "How to apply for BISE matric and FSc paper rechecking. Fee structure per subject (PKR 1,000–1,500), 15-day deadline, and online application form.",
    "metaDescriptionUr": "میٹرک اور انٹر کے پیپر ری چیکنگ کروانے کی فیس، 15 دن کی آخری تاریخ اور آن لائن فارم پُر کرنے کی مکمل معلومات۔",
    "directAnswerEn": "If you are dissatisfied with your BISE matric or FSc marks, apply for Paper Rechecking (Recounting) within 15 days of result declaration. Submit the online rechecking form at your BISE portal and pay the fee (approx PKR 1,000 to PKR 1,500 per subject). Note: Rechecking covers totaling errors and unmarked questions.",
    "directAnswerUr": "رزلٹ کے 15 دنوں کے اندر اپنے بورڈ کی ویب سائٹ پر ری چیکنگ کا فارم بھریں۔ فی مضمون فیس 1000 سے 1500 روپے ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "Punjab BISE Chairmen Committee",
      "url": "https://biselahore.com/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Examination Appeals Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Paper Recounting (Per Subject)",
        "serviceUr": "پیپر ری کاؤنٹنگ فیس",
        "normal": "PKR 1,200",
        "urgent": "15 Days Deadline",
        "executive": "Board Office"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Fill Online Rechecking Form Within 15 Days",
        "titleUr": "15 دن میں آن لائن فارم پر کریں",
        "detailEn": "Log into your official BISE portal, select subjects for recounting, and generate fee PSID.",
        "detailUr": "رزلٹ کے 15 دن میں آن لائن پورٹل سے ری چیکنگ کا چالان پرنٹ کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Does BISE paper rechecking re-evaluate answer content?",
        "questionUr": "کیا ری چیکنگ میں پیپر دوبارہ چیک ہوتا ہے؟",
        "answerEn": "No. Rechecking strictly verifies mark totaling, unchecked pages, and transfer of marks to title sheet.",
        "answerUr": "نہیں! ری چیکنگ میں صرف نمبرز کی گنتی اور غیر نشان شدہ صفحات چیک ہوتے ہیں۔"
      }
    ],
    "contentEn": "Official rules governing BISE board examination paper recounting and mark adjustments.",
    "contentUr": "بورڈ امتحانات میں نمبرز کی ری کاؤنٹنگ کے قانونی قوانین۔",
    "relatedSlugs": [
      "/education/bise-result-check-2026",
      "/education/bise-lahore-result-2026"
    ]
  },
  "hec-degree-attestation-process": {
    "slug": "hec-degree-attestation-process",
    "fullPath": "/education/hec-degree-attestation-process",
    "categoryId": "education",
    "titleEn": "HEC Degree Attestation Process Guide 2026: Fee & E-Services",
    "titleUr": "ایچ ای سی ڈگری تصدیق گائیڈ 2026: فیس شیڈول و آن لائن پورٹل",
    "metaDescriptionEn": "Step-by-step HEC degree attestation guide. Apply online at eservices.hec.gov.pk, courier vs urgent walk-in mode, fee per original (PKR 1,000) & photocopy (PKR 700).",
    "metaDescriptionUr": "ایچ ای سی آن لائن ڈگری تصدیق کا طریقہ۔ آن لائن فارم eservices.hec.gov.pk، اصل ڈگری فیس 1000 روپے اور کاپی فیس 700 روپے۔",
    "directAnswerEn": "HEC Pakistan attests Bachelor, Master, and PhD degrees online via eservices.hec.gov.pk. Create an account, fill education profile, upload transcripts, and select mode (TCS Courier or Urgent Walk-In). Fee is PKR 1,000 per original document and PKR 700 per photocopy.",
    "directAnswerUr": "ایچ ای سی ڈگری تصدیق کے لیے eservices.hec.gov.pk پر اپلائی کریں۔ اصل ڈگری فیس 1000 روپے اور فوٹو کاپی فیس 700 روپے فی سند ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "HEC E-Services Portal",
      "url": "https://eservices.hec.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Higher Education Accreditation Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Original Degree / Transcript",
        "serviceUr": "اصل ڈگری تصدیق فیس",
        "normal": "PKR 1,000 / doc",
        "urgent": "TCS Courier Mode",
        "executive": "Walk-In Mode"
      },
      {
        "serviceEn": "Photocopy Attestation",
        "serviceUr": "فوٹو کاپی تصدیق فیس",
        "normal": "PKR 700 / doc",
        "urgent": "TCS Courier Mode",
        "executive": "Walk-In Mode"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Create Account on HEC E-Services Portal",
        "titleUr": "ایچ ای سی ای سروسز پورٹل پر اکاؤنٹ بنائیں",
        "detailEn": "Register at eservices.hec.gov.pk with CNIC and upload educational documents.",
        "detailUr": "eservices.hec.gov.pk پر شناختی کارڈ درج کر کے تعلیمی پروفائل مکمل کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Is Matric and Inter attestation required before HEC?",
        "questionUr": "کیا ایچ ای سی سے پہلے میٹرک اور انٹر کی تصدیق لازمی ہے؟",
        "answerEn": "Yes, your Matric & Intermediate certificates MUST be attested by IBCC before applying to HEC.",
        "answerUr": "جی ہاں! ایچ ای سی سے پہلے آئی بی سی سی (IBCC) کی تصدیق لازمی ہے۔"
      }
    ],
    "contentEn": "HEC degree attestation instructions for job seekers and study abroad applicants.",
    "contentUr": "بیرون ملک ویزا اور نوکری کے لیے ایچ ای سی ڈگری تصدیق کا طریقہ۔",
    "relatedSlugs": [
      "/education/hec-scholarship-pakistan",
      "/education/css-preparation-books"
    ]
  },
  "fpsc-online-apply-procedure": {
    "slug": "fpsc-online-apply-procedure",
    "fullPath": "/jobs/fpsc-online-apply-procedure",
    "categoryId": "jobs",
    "titleEn": "FPSC Online Apply Guide 2026: Treasury Challan 32-A & Test Syllabus",
    "titleUr": "ایف پی ایس سی (FPSC) آن لائن اپلائی گائیڈ 2026: فیس چالان و سلیبس",
    "metaDescriptionEn": "How to apply online for FPSC federal jobs at fpsc.gov.pk. Download Treasury Challan Form 32-A, fee rates (BPS 16-17 PKR 300), and admission certificate.",
    "metaDescriptionUr": "ایف پی ایس سی فیڈرل نوکریوں کے لیے آن لائن اپلائی کا طریقہ۔ چالان فارم 32-A فیس 300 روپے اور داخلہ سلپ۔",
    "directAnswerEn": "To apply online for Federal Public Service Commission (FPSC) jobs and CSS examinations in 2026, visit online.fpsc.gov.pk. Deposit the test fee via Treasury Challan Form 32-A at NBP/State Bank (PKR 300 for BS-16/17, PKR 750 for BS-18, PKR 1,200 for BS-19, PKR 1,500 for BS-20+), fill your profile, and download the online admission certificate.",
    "directAnswerUr": "فیڈرل پبلک سروس کمیشن (FPSC) اور سی ایس ایس امتحانات کے لیے online.fpsc.gov.pk پر اپلائی کریں۔ نیشنل بینک یا سٹیٹ بینک میں چالان فارم 32-A کے ذریعے فیس (گریڈ 16/17 کے لیے 300 روپے، گریڈ 18 کے لیے 750 روپے) جمع کروائیں اور آن لائن فارم مکمل کر کے رول نمبر سلپ حاصل کریں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "FPSC Official Web Portal",
      "url": "https://fpsc.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Federal Recruitment Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "General Recruitment BS-16 & BS-17 Fee",
        "serviceUr": "جنرل بھرتی گریڈ 16 اور 17 فیس",
        "normal": "PKR 300",
        "urgent": "Treasury Challan 32-A",
        "executive": "NBP / SBP Counter",
        "validity": "Per Post Application"
      },
      {
        "serviceEn": "General Recruitment BS-18 Fee",
        "serviceUr": "جنرل بھرتی گریڈ 18 فیس",
        "normal": "PKR 750",
        "urgent": "Treasury Challan 32-A",
        "executive": "NBP / SBP Counter",
        "validity": "Per Post Application"
      },
      {
        "serviceEn": "General Recruitment BS-19 Fee",
        "serviceUr": "جنرل بھرتی گریڈ 19 فیس",
        "normal": "PKR 1,200",
        "urgent": "Treasury Challan 32-A",
        "executive": "NBP / SBP Counter",
        "validity": "Per Post Application"
      },
      {
        "serviceEn": "General Recruitment BS-20 & Above Fee",
        "serviceUr": "جنرل بھرتی گریڈ 20 اور زائد فیس",
        "normal": "PKR 1,500",
        "urgent": "Treasury Challan 32-A",
        "executive": "NBP / SBP Counter",
        "validity": "Per Post Application"
      },
      {
        "serviceEn": "CSS Competitive Examination Fee",
        "serviceUr": "سی ایس ایس مقابلہ امتحانات فیس",
        "normal": "PKR 2,200 (MPT + Written)",
        "urgent": "Mandatory Treasury Challan",
        "executive": "Head of Account C02101",
        "validity": "Annual Exam"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Download & Print Treasury Challan Form 32-A",
        "titleUr": "ٹریژری چالان فارم 32-A ڈاؤن لوڈ اور پرنٹ کریں",
        "detailEn": "Download the 4-copy FPSC Challan Form 32-A from fpsc.gov.pk. Fill the Head of Account 'C02101-ORGANS OF STATE-EXAM FEE (FPSC RECEIPT)'.",
        "detailUr": "ویب سائٹ سے 4 کاپیوں والا چالان فارم پرنٹ کر کے اکاؤنٹ ہیڈ C02101 درج کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Deposit Fee at National Bank of Pakistan (NBP)",
        "titleUr": "نیشنل بینک یا اسٹیٹ بینک برانچ میں فیس جمع کروائیں",
        "detailEn": "Deposit exact cash (PKR 300/750/1200) at any NBP or SBP branch. Collect the original stamped 'Candidate Copy' and note the Bank Branch Code and Deposit Date.",
        "detailUr": "نیشنل بینک میں رقم جمع کروا کر مہر لگی اصل 'کینڈیڈیٹ کاپی' حاصل کریں اور برانچ کوڈ نوٹ کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Create Profile on FPSC Online Portal",
        "titleUr": "آن لائن پورٹل پر پروفائل بنائیں",
        "detailEn": "Visit online.fpsc.gov.pk/fpsc/gr/step1.php. Enter your 13-digit CNIC, mobile number, active email, and select the specific Case Number (e.g. F.4-123/2026-R).",
        "detailUr": "پورٹل پر جا کر شناختی کارڈ، کیس نمبر اور بنیادی معلومات درج کریں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Enter Academic Qualifications & Experience",
        "titleUr": "تعلیمی ریکارڈ اور تجربے کا اندراج",
        "detailEn": "Input Matric, Intermediate, Bachelor's, and Master's degrees with exact passing years, division, marks percentage, and university name in chronological order.",
        "detailUr": "میٹرک سے ماسٹرز تک کے تمام نمبرز، پاسنگ سال اور یونیورسٹی کا نام درج کریں۔"
      },
      {
        "stepNumber": 5,
        "titleEn": "Input Challan Details & Select Test Center",
        "titleUr": "چالان تفصیل اور امتحانی سنٹر کا انتخاب",
        "detailEn": "Enter Bank Name, Branch Code, Deposit Date, and Receipt Number. Select your preferred examination city (Islamabad, Lahore, Karachi, Peshawar, Quetta, Gilgit, Skardu).",
        "detailUr": "بینک برانچ کوڈ، تاریخ اور امتحانی شہر (لاہور، اسلام آباد، کراچی وغیرہ) کا انتخاب کریں۔"
      },
      {
        "stepNumber": 6,
        "titleEn": "Submit Application & Preserve Original Challan",
        "titleUr": "درخواست جمع کروائیں اور اصل چالان محفوظ رکھیں",
        "detailEn": "Submit the online form and save the computer-generated confirmation tracking number. Keep the physical original pink challan slip safe — you must present it on exam day.",
        "detailUr": "فارم سبمٹ کریں اور اصل چالان سنبھال کر رکھیں کیونکہ ٹیسٹ والے دن اصل چالان دکھانا لازمی ہے۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Is hard copy submission of documents required at the time of online application?",
        "questionUr": "کیا آن لائن اپلائی کرتے وقت کاغذی دستاویزات بھیجنا ضروری ہیں؟",
        "answerEn": "No. FPSC operates a paperless initial application system. You do not mail educational degrees, domicile, or CNIC copies initially. Shortlisted candidates who pass the written screening test are later invited via letter to submit certified documents within 15 days.",
        "answerUr": "نہیں! ابتدائی طور پر کوئی ڈاک نہیں بھیجنی ہوتی۔ اسکریننگ ٹیسٹ پاس کرنے والے شارٹ لسٹ امیدواروں سے بعد میں ڈاک منگوائی جاتی ہے۔"
      },
      {
        "questionEn": "What happens if I lose the original physical bank deposit challan?",
        "questionUr": "اگر اصل بینک چالان گم ہو جائے تو کیا ٹیسٹ میں بیٹھنے دیا جائے گا؟",
        "answerEn": "No. FPSC test center superintendents strictly bar candidates without the physical stamped original candidate copy of Challan Form 32-A. Duplicate bank vouchers with verified branch manager signature and stamp may be accepted only upon prior clearance.",
        "answerUr": "اصل بینک چالان کے بغیر ٹیسٹ ہال میں داخلے کی اجازت نہیں دی جاتی، لہٰذا اسے محفوظ رکھیں۔"
      },
      {
        "questionEn": "What is the general age relaxation policy in federal government jobs?",
        "questionUr": "وفاقی ملازمتوں میں عمومی عمر کی رعایت کتنی ہے؟",
        "answerEn": "The Federal Government grants a general 5-year upper age relaxation across the board to all candidates, plus up to 3 years for Scheduled Castes / Buddhist communities and 10-15 years for government servants with continuous service.",
        "answerUr": "تمام امیدواروں کے لیے عمومی طور پر 5 سال کی عمر کی رعایت خودکار طور پر لاگو ہوتی ہے۔"
      }
    ],
    "contentEn": "## Federal Public Service Commission (FPSC) Complete Guide 2026\nThe **Federal Public Service Commission (FPSC)** is the premier constitutional testing agency responsible for recruiting officers into Basic Pay Scales BS-16 through BS-22 for federal ministries, intelligence bureaus, defense institutions, and the Central Superior Services (CSS).\n\n---\n\n## Complete Salary & Scale Overview for Federal Officers (2026)\n\n| Basic Pay Scale (BPS) | Example Designations | Entry Basic Pay Range | Total Gross Monthly Salary (Est.) |\n| :--- | :--- | :--- | :--- |\n| **BS-16** | Inspector Customs, Assistant Director (IB), Appraising Officer | PKR 28,000 - 68,000 | PKR 65,000 - 85,000 |\n| **BS-17** | Assistant Commissioner (CSS), Section Officer, AD FIA, Lecturer | PKR 45,000 - 105,000 | PKR 110,000 - 150,000 |\n| **BS-18** | Deputy Director (FIA/IB), Senior Medical Officer, Assistant Professor | PKR 55,000 - 135,000 | PKR 160,000 - 210,000 |\n| **BS-19** | Director, Joint Secretary, Associate Professor, Chief Consultant | PKR 85,000 - 195,000 | PKR 240,000 - 320,000 |\n\n---\n\n## The General Recruitment Screening Test Syllabus Structure\n1. **English Vocabulary & Grammar (20 Marks)**: Synonyms, Antonyms, Sentence Structuring, Idioms, Prepositions.\n2. **General Intelligence & Ability (80 Marks)**: Basic Arithmetic, Algebra, Pakistan Affairs (1857-Present), Islamic Studies, Current Affairs, Every Day Science, Computer Fundamentals, and Professional Subject-Specific MCQs.\n\n## In-Depth Analysis of the Central Superior Services (CSS) & General Recruitment Tests\nThe **FPSC General Recruitment** workflow tests candidates on objective analytical capabilities, constitutional knowledge, and professional discipline mastery.\n\n### Key Guidelines for the Written Examination\n- **Time Management**: 100 MCQs in 100 minutes. Allocate strictly 50 seconds per question.\n- **Answer Sheet Bubble Marking**: Use black ballpoint pens only; lead pencils or gel pens cause optical scanner misreads.\n- **Original Verification Documents**: Ensure your original CNIC and original bank stamped pink Challan Form 32-A are placed on your desk for verification.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n---\n\n## Comprehensive Preparation Strategy for Competitive Examinations & Interviews\nSecuring a high merit ranking in public service commission examinations (FPSC, PPSC, SPSC, KPPSC, BPSC, NTS) requires structured, disciplined preparation across multiple academic disciplines.\n\n### 1. The 5-Pillar Core Curriculum for General Ability Tests\n- **Pakistan Affairs & Historical Constitutional Evolution**: 1857 War of Independence, Sir Syed's Aligarh Movement, 1906 Muslim League formation, 1940 Lahore Resolution, 1973 Constitution, 18th Constitutional Amendment, CPEC, and contemporary foreign policy challenges.\n- **Current Affairs & International Relations**: Key global alliances (SCO, BRICS, UN Security Council, OIC), Middle East dynamics, international climate treaties, and State Bank monetary policies.\n- **Everyday Science & Basic Mathematics**: Human anatomy, vitamins, planetary astronomy, solar energy, basic algebra, ratio-proportion, percentages, averages, and basic geometry problems.\n- **English Grammar, Comprehension & Précis**: Sentence correction, preposition rules, active-passive voice, direct-indirect narration, vocabulary antonyms/synonyms, and concise précis writing.\n- **Information Technology & Cyber Security**: Computer architecture, operating systems, Microsoft Office shortcut keys, networking concepts (LAN, WAN, IP address), and data encryption fundamentals.\n\n### 2. Mastering the Public Service Commission Interview & Psychological Viva Voce\n- **Confidence & Body Language**: Maintain steady eye contact with all interview panel members, sit upright with relaxed shoulders, and enter/leave the interview chamber with formal professional courtesy.\n- **Handling Unknown Questions**: Never guess or fabricate answers before seasoned panel members. If you do not know a factual query, politely state: *\"I apologize, sir/madam, I am unable to recall this specific information at the moment.\"*\n- **Current Job & Academic Defense**: Be prepared to defend your university final-year thesis, previous work experience, and explain precisely how your educational background directly benefits the applied government post.\n\n---\n\n## Redressal of Recruitment Grievances & Legal Rights of Candidates\nUnder statutory public service commission rules and high court precedents:\n- **Right to Paper Re-Checking**: Candidates have the legal right to apply for formal paper recount and optical mark recognition (OMR) sheet re-verification within 30 days of result announcement by paying a nominal fee.\n- **Right to Interview Merit Breakdown**: Rejected candidates can request their detailed breakdown marks (Academic Marks, Written Marks, Interview Marks) to verify merit transparency.\n- **Writ Jurisdiction in High Court**: If administrative rules or seat quotas were unlawfully altered, candidates can file a constitutional writ petition under Article 199 of the Constitution of Pakistan at the relevant Provincial High Court.",
    "contentUr": "## فیڈرل پبلک سروس کمیشن (FPSC) گائیڈ 2026\nوفاقی وزارتوں اور سی ایس ایس کے امتحانات کے لیے مستند رہنمائی۔\n\nچالان فارم 32-A جمع کروانے، آن لائن پورٹل پر پروفائل بنانے اور ٹیسٹ سلیبس کی مکمل تفصیلات۔",
    "relatedSlugs": [
      "/jobs/latest-govt-jobs-pakistan",
      "/jobs/ppsc-jobs-2026"
    ]
  },
  "spsc-jobs-apply-online": {
    "slug": "spsc-jobs-apply-online",
    "fullPath": "/jobs/spsc-jobs-apply-online",
    "categoryId": "jobs",
    "titleEn": "SPSC Jobs 2026: Sindh Public Service Commission Online Apply",
    "titleUr": "ایس پی ایس سی (SPSC) سندھ نوبلیاں 2026: آن لائن فارم و چالان فیس",
    "metaDescriptionEn": "SPSC upcoming job advertisements 2026, online portal at spsc.gov.pk, challan fee (PKR 500), CCE Combined Competitive Exam, and roll number slip.",
    "metaDescriptionUr": "سندھ پبلک سروس کمیشن کی نئی نوبلیاں، آن لائن اپلائی پورٹل spsc.gov.pk اور چالان فیس 500 روپے۔",
    "directAnswerEn": "To apply for Sindh Public Service Commission (SPSC) jobs in 2026, visit spsc.gov.pk. Deposit PKR 500 via Challan Form at National Bank of Pakistan (NBP), complete your online profile, and download your Roll Number Slip for competitive screening tests across Sindh.",
    "directAnswerUr": "سندھ پبلک سروس کمیشن (SPSC) کے لیے spsc.gov.pk پر آن لائن اپلائی کریں۔ نیشنل بینک میں 500 روپے کا چالان فارم جمع کروائیں اور آن لائن پروفائل مکمل کر کے رول نمبر سلپ حاصل کریں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "SPSC Official Portal",
      "url": "https://spsc.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Provincial Recruitment Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "SPSC Standard Application Fee",
        "serviceUr": "سندھ پبلک سروس کمیشن فیس",
        "normal": "PKR 500",
        "urgent": "Treasury Challan at NBP",
        "executive": "Head: C02101",
        "validity": "Per Post"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Deposit SPSC Challan at NBP Branch",
        "titleUr": "نیشنل بینک میں 500 روپے چالان جمع کروائیں",
        "detailEn": "Deposit PKR 500 Challan under account Head C02101 at any NBP branch in Sindh.",
        "detailUr": "نیشنل بینک کی برانچ میں 500 روپے فیس جمع کروا کر رسید حاصل کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Register on SPSC Online Portal",
        "titleUr": "پورٹل پر شناختی کارڈ سے اکاؤنٹ بنائیں",
        "detailEn": "Create an account on spsc.gov.pk using your CNIC and permanent Sindh Urban/Rural domicile.",
        "detailUr": "ویب سائٹ پر شہری یا دیہی ڈومیسائل کے مطابق اکاؤنٹ بنائیں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Fill Qualification & Experience",
        "titleUr": "تعلیمی ریکارڈ درج کریں",
        "detailEn": "Enter degrees, marks percentages, and upload your photo before submitting.",
        "detailUr": "تمام ڈگریاں اور تصاویر اپلوڈ کر کے درخواست فائنل کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "How is the Sindh Urban vs Rural quota allocated in SPSC?",
        "questionUr": "سندھ میں اربن اور رورل کوٹہ کیسے تقسیم ہوتا ہے؟",
        "answerEn": "Under the provincial constitution, 60% of seats are reserved for Sindh Rural districts, while 40% are reserved for Sindh Urban (Karachi, Hyderabad, Sukkur).",
        "answerUr": "سندھ میں 60 فیصد کوٹہ دیہی اضلاع اور 40 فیصد کوٹہ شہری اضلاع (کراچی، حیدرآباد، سکھر) کے لیے مخصوص ہے۔"
      }
    ],
    "contentEn": "## Sindh Public Service Commission (SPSC) Guide 2026\n**SPSC** administers recruitment for civil administration, medical officers, secondary school teachers, and revenue officers across Sindh.\n\n## Sindh Combined Competitive Examination (CCE) & Departmental Vacancies\nThe **Sindh Public Service Commission** manages competitive selection for Assistant Commissioners, Section Officers, Excise Inspectors, and Headmasters with regional quotas split 60:40 between Rural and Urban Sindh.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## Sindh Public Service Commission (SPSC) Complete Recruitment Manual 2026\nThe **Sindh Public Service Commission (SPSC)**, headquartered in Hyderabad with regional offices in Karachi, Sukkur, and Larkana, is the constitutional body responsible for recruiting officers into Basic Pay Scales BS-16 through BS-20 for the Government of Sindh.\n\n### 1. The 60:40 Rural vs Urban Quota Allocation Formula\nUnder Article 240 of the Constitution of Pakistan and the Sindh Civil Servants Act:\n- **Sindh Rural (60% Quota)**: Covers all interior districts including Hyderabad, Mirpurkhas, Sukkur, Larkana, Shaheed Benazirabad, Dadu, Thatta, Badin, Jacobabad, and Tharparkar.\n- **Sindh Urban (40% Quota)**: Covers the metropolitan municipal boundaries of Karachi Division (East, West, South, Central, Korangi, Malir, Keamari), Hyderabad City, and Sukkur Municipal Corporation.\n\n### 2. SPSC Combined Competitive Examination (CCE) Structure\n- **Screening Test (100 MCQs)**: General English, General Science, Current Affairs, and Sindhi/Urdu language.\n- **Written Examination (600 Marks)**: Compulsory subjects (English Essay, English Precis, General Science & Ability, Current Affairs, Pakistan Affairs, Islamic Studies / Ethics) plus two optional subjects.\n- **Viva Voce & Interview (200 Marks)**: Thorough personality, leadership, and administrative assessment by the Commission Board.\n\n---\n\n## Comprehensive Preparation Strategy for Competitive Examinations & Interviews\nSecuring a high merit ranking in public service commission examinations (FPSC, PPSC, SPSC, KPPSC, BPSC, NTS) requires structured, disciplined preparation across multiple academic disciplines.\n\n### 1. The 5-Pillar Core Curriculum for General Ability Tests\n- **Pakistan Affairs & Historical Constitutional Evolution**: 1857 War of Independence, Sir Syed's Aligarh Movement, 1906 Muslim League formation, 1940 Lahore Resolution, 1973 Constitution, 18th Constitutional Amendment, CPEC, and contemporary foreign policy challenges.\n- **Current Affairs & International Relations**: Key global alliances (SCO, BRICS, UN Security Council, OIC), Middle East dynamics, international climate treaties, and State Bank monetary policies.\n- **Everyday Science & Basic Mathematics**: Human anatomy, vitamins, planetary astronomy, solar energy, basic algebra, ratio-proportion, percentages, averages, and basic geometry problems.\n- **English Grammar, Comprehension & Précis**: Sentence correction, preposition rules, active-passive voice, direct-indirect narration, vocabulary antonyms/synonyms, and concise précis writing.\n- **Information Technology & Cyber Security**: Computer architecture, operating systems, Microsoft Office shortcut keys, networking concepts (LAN, WAN, IP address), and data encryption fundamentals.\n\n### 2. Mastering the Public Service Commission Interview & Psychological Viva Voce\n- **Confidence & Body Language**: Maintain steady eye contact with all interview panel members, sit upright with relaxed shoulders, and enter/leave the interview chamber with formal professional courtesy.\n- **Handling Unknown Questions**: Never guess or fabricate answers before seasoned panel members. If you do not know a factual query, politely state: *\"I apologize, sir/madam, I am unable to recall this specific information at the moment.\"*\n- **Current Job & Academic Defense**: Be prepared to defend your university final-year thesis, previous work experience, and explain precisely how your educational background directly benefits the applied government post.\n\n---\n\n## Redressal of Recruitment Grievances & Legal Rights of Candidates\nUnder statutory public service commission rules and high court precedents:\n- **Right to Paper Re-Checking**: Candidates have the legal right to apply for formal paper recount and optical mark recognition (OMR) sheet re-verification within 30 days of result announcement by paying a nominal fee.\n- **Right to Interview Merit Breakdown**: Rejected candidates can request their detailed breakdown marks (Academic Marks, Written Marks, Interview Marks) to verify merit transparency.\n- **Writ Jurisdiction in High Court**: If administrative rules or seat quotas were unlawfully altered, candidates can file a constitutional writ petition under Article 199 of the Constitution of Pakistan at the relevant Provincial High Court.",
    "contentUr": "## سندھ پبلک سروس کمیشن (SPSC) گائیڈ 2026\nسندھ بھر میں گریڈ 16 اور 17 کی سرکاری ملازمتوں کے لیے مکمل آن لائن طریقہ کار۔",
    "relatedSlugs": [
      "/jobs/latest-govt-jobs-pakistan",
      "/jobs/ppsc-jobs-2026"
    ]
  },
  "kppsc-jobs-apply-online": {
    "slug": "kppsc-jobs-apply-online",
    "fullPath": "/jobs/kppsc-jobs-apply-online",
    "categoryId": "jobs",
    "titleEn": "KPPSC Jobs 2026: KPK Public Service Commission Online Apply",
    "titleUr": "کے پی پی ایس سی (KPPSC) نوکریاں 2026: آن لائن اپلائی گائیڈ",
    "metaDescriptionEn": "KPPSC jobs advertisement 2026 for Khyber Pakhtunkhwa. Online application portal at kppsc.gov.pk, Easypaisa/JazzCash fee deposit (PKR 500), and test slip.",
    "metaDescriptionUr": "خیبر پختونخوا پبلک سروس کمیشن کی نئی نوکریاں، آن لائن اپلائی kppsc.gov.pk اور ایزی پیسہ فیس ادائیگی 500 روپے۔",
    "directAnswerEn": "To apply for Khyber Pakhtunkhwa Public Service Commission (KPPSC) jobs in 2026, visit kppsc.gov.pk. Deposit PKR 500 via JazzCash, Easypaisa, or 1Link using your CNIC, fill your online application, and download test admission letters for Peshawar, Mardan, and Abbottabad centers.",
    "directAnswerUr": "خیبر پختونخوا پبلک سروس کمیشن (KPPSC) کے لیے kppsc.gov.pk پر جا کر اپلائی کریں۔ جاز کیش یا ایزی پیسہ سے 500 روپے فیس ادا کر کے آن لائن فارم پر کریں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "KPPSC Official Portal",
      "url": "https://kppsc.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Provincial Recruitment Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "KPPSC Standard Examination Fee",
        "serviceUr": "کے پی پی ایس سی ٹیسٹ فیس",
        "normal": "PKR 500",
        "urgent": "JazzCash / Easypaisa Direct",
        "executive": "Paperless 1Link",
        "validity": "Per Post"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Pay Fee via JazzCash / Easypaisa App",
        "titleUr": "جاز کیش یا ایزی پیسہ سے فیس ادا کریں",
        "detailEn": "Open JazzCash / Easypaisa > Govt Payments > KPPSC, input CNIC, and pay PKR 500.",
        "detailUr": "جاز کیش یا ایزی پیسہ سے 500 روپے فیس ادا کر کے ٹرانزیکشن آئی ڈی حاصل کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Submit Application on KPPSC Web Portal",
        "titleUr": "پورٹل پر فارم مکمل کریں",
        "detailEn": "Log in at kppsc.gov.pk, select zonal quota (Zone 1 to Zone 5), and enter academic bio-data.",
        "detailUr": "ویب سائٹ پر جا کر زونل کوٹہ منتخب کریں اور تعلیمی تفصیلات درج کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "What is the KPPSC Zonal Allocation system?",
        "questionUr": "کے پی پی ایس سی کا زونل سسٹم کیا ہے؟",
        "answerEn": "KPK divides seats into 5 Zones (Zone 1: Tribal Districts, Zone 2: Peshawar/Charsadda, Zone 3: Swat/Malakand, Zone 4: Southern Districts, Zone 5: Hazara) to ensure balanced provincial representation.",
        "answerUr": "خیبر پختونخوا میں تمام نشستیں 5 زونز میں تقسیم کی جاتی ہیں تاکہ تمام اضلاع کو برابری کی نمائندگی ملے۔"
      },
      {
        "questionEn": "How can citizens verify the authenticity of official documents and avoid imposters?",
        "questionUr": "سرکاری دستاویزات کی تصدیق اور جعل سازی سے کیسے بچا جائے؟",
        "answerEn": "Always verify tracking numbers on the official government website ending in .gov.pk or .org.pk. Never share one-time password (OTP) codes or sensitive biometric details with unverified phone callers claiming to represent government helplines.",
        "answerUr": "ہمیشہ .gov.pk ویب سائٹ سے تصدیق کریں اور کسی بھی غیر متعلقہ فون کال پر اپنا او ٹی پی (OTP) یا بائیو میٹرک تفصیلات شیئر نہ کریں۔"
      }
    ],
    "contentEn": "## Khyber Pakhtunkhwa Public Service Commission (KPPSC) Guide 2026\n**KPPSC** recruits civil administrators, engineers, college lecturers, and PMS officers across Khyber Pakhtunkhwa and merged tribal districts.\n\n## Khyber Pakhtunkhwa PMS & Specialised Engineering Selection\n**KPPSC** administers the Provincial Management Service (PMS) examination, college lecturer recruitments, and civil engineering induction tests across 5 geographic zones.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## Khyber Pakhtunkhwa Public Service Commission (KPPSC) Comprehensive Guide 2026\n**KPPSC** administers merit-based recruitment for civil administrative positions (PMS), college teaching faculty, secondary school educators, and engineering cadres across Khyber Pakhtunkhwa.\n\n### 1. Detailed Breakdown of the 5-Zone Provincial Quota System\nTo guarantee equitable representation for historically underserved regions:\n- **Zone 1 (Merged Tribal Districts)**: Bajaur, Mohmand, Khyber, Kurram, Orakzai, North Waziristan, South Waziristan, and frontier tribal regions.\n- **Zone 2 (Peshawar Valley)**: Peshawar, Charsadda, Nowshera, Mardan, and Swabi.\n- **Zone 3 (Malakand Division)**: Swat, Buner, Dir Upper, Dir Lower, Chitral Upper, Chitral Lower, Shangla, and Malakand.\n- **Zone 4 (Southern Districts)**: Kohat, Hangu, Karak, Bannu, Lakki Marwat, D.I. Khan, and Tank.\n- **Zone 5 (Hazara Division)**: Abbottabad, Haripur, Mansehra, Battagram, Kohistan Upper, Kohistan Lower, Kolai-Palas, and Torghar.\n\n---\n\n## Comprehensive Preparation Strategy for Competitive Examinations & Interviews\nSecuring a high merit ranking in public service commission examinations (FPSC, PPSC, SPSC, KPPSC, BPSC, NTS) requires structured, disciplined preparation across multiple academic disciplines.\n\n### 1. The 5-Pillar Core Curriculum for General Ability Tests\n- **Pakistan Affairs & Historical Constitutional Evolution**: 1857 War of Independence, Sir Syed's Aligarh Movement, 1906 Muslim League formation, 1940 Lahore Resolution, 1973 Constitution, 18th Constitutional Amendment, CPEC, and contemporary foreign policy challenges.\n- **Current Affairs & International Relations**: Key global alliances (SCO, BRICS, UN Security Council, OIC), Middle East dynamics, international climate treaties, and State Bank monetary policies.\n- **Everyday Science & Basic Mathematics**: Human anatomy, vitamins, planetary astronomy, solar energy, basic algebra, ratio-proportion, percentages, averages, and basic geometry problems.\n- **English Grammar, Comprehension & Précis**: Sentence correction, preposition rules, active-passive voice, direct-indirect narration, vocabulary antonyms/synonyms, and concise précis writing.\n- **Information Technology & Cyber Security**: Computer architecture, operating systems, Microsoft Office shortcut keys, networking concepts (LAN, WAN, IP address), and data encryption fundamentals.\n\n### 2. Mastering the Public Service Commission Interview & Psychological Viva Voce\n- **Confidence & Body Language**: Maintain steady eye contact with all interview panel members, sit upright with relaxed shoulders, and enter/leave the interview chamber with formal professional courtesy.\n- **Handling Unknown Questions**: Never guess or fabricate answers before seasoned panel members. If you do not know a factual query, politely state: *\"I apologize, sir/madam, I am unable to recall this specific information at the moment.\"*\n- **Current Job & Academic Defense**: Be prepared to defend your university final-year thesis, previous work experience, and explain precisely how your educational background directly benefits the applied government post.\n\n---\n\n## Redressal of Recruitment Grievances & Legal Rights of Candidates\nUnder statutory public service commission rules and high court precedents:\n- **Right to Paper Re-Checking**: Candidates have the legal right to apply for formal paper recount and optical mark recognition (OMR) sheet re-verification within 30 days of result announcement by paying a nominal fee.\n- **Right to Interview Merit Breakdown**: Rejected candidates can request their detailed breakdown marks (Academic Marks, Written Marks, Interview Marks) to verify merit transparency.\n- **Writ Jurisdiction in High Court**: If administrative rules or seat quotas were unlawfully altered, candidates can file a constitutional writ petition under Article 199 of the Constitution of Pakistan at the relevant Provincial High Court.\n\n---\n\n## Summary of Key Verification Protocols & Citizen Safeguards (2026 Checklist)\nBefore completing any official transaction or submitting financial documents, verify the following baseline procedural benchmarks:\n\n1. **Official Verification Stamps**: Ensure all computer-generated vouchers, receipts, and bank deposit challans bear the official branch cashier stamp and computer transaction sequence number.\n2. **Digital Copy Archival**: Maintain a scanned PDF or photograph of your submitted forms and payment receipts in cloud storage (Google Drive or Dropbox) for at least 5 years.\n3. **Tracking & Timeline Monitoring**: Utilize the official departmental SMS short-code or online portal tracking number to monitor progress weekly. If no update occurs within the stipulated charter timeframe, immediately escalate the case to the departmental grievance officer or relevant provincial ombudsman desk.",
    "contentUr": "## خیبر پختونخوا پبلک سروس کمیشن (KPPSC) گائیڈ 2026\nکے پی کے میں سرکاری ملازمتوں کے لیے زونل کوٹہ، فیس اور ٹیسٹ پاس کرنے کی تفصیلی گائیڈ۔",
    "relatedSlugs": [
      "/jobs/latest-govt-jobs-pakistan",
      "/jobs/ppsc-jobs-2026"
    ]
  },
  "join-pak-army-online-registration": {
    "slug": "join-pak-army-online-registration",
    "fullPath": "/jobs/join-pak-army-online-registration",
    "categoryId": "jobs",
    "titleEn": "Join Pak Army Online Registration 2026: PMA Long Course & LCC",
    "titleUr": "پاک فوج آن لائن رجسٹریشن 2026: پی ایم اے لانگ کورس و لیڈی کیڈٹ کورس",
    "metaDescriptionEn": "How to register online for Join Pak Army 2026. PMA Long Course, Lady Cadet Course (LCC), Technical Cadet Course, eligibility, physical test criteria, and AS&RC.",
    "metaDescriptionUr": "پاک فوج میں آن لائن رجسٹریشن کا طریقہ۔ پی ایم اے 154 لانگ کورس، قد کی حد، جسمانی ٹیسٹ اور آرمی سلیکشن سینٹر۔",
    "directAnswerEn": "To register for the Pakistan Army in 2026 (PMA Long Course, Technical Cadet Course, Lady Cadet Course, or Soldier Recruitment), visit joinpakarmy.gov.pk. Register with your CNIC/B-Form, download your test roll number slip for your nearest Army Selection and Recruitment Centre (AS&RC), and prepare for initial intelligence, academic, and physical tests.",
    "directAnswerUr": "پاک فوج میں شمولیت کے لیے joinpakarmy.gov.pk پر آن لائن رجسٹریشن کریں۔ اپنا شناختی کارڈ یا ب فارم درج کر کے قریبی آرمی سلیکشن سنٹر (AS&RC) کی رول نمبر سلپ ڈاؤن لوڈ کریں اور ابتدائی انٹیلی جنس، اکیڈمک اور فزیکل ٹیسٹ کی تیاری کریں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "Pak Army Recruitment Directorate",
      "url": "https://joinpakarmy.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Defense Recruitment Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Pak Army Online Registration",
        "serviceUr": "پاک فوج آن لائن رجسٹریشن",
        "normal": "100% FREE",
        "urgent": "Instant AS&RC Roll No Slip",
        "executive": "Official GHQ Portal",
        "validity": "Per Course Intake"
      },
      {
        "serviceEn": "Prospectus & Initial Medical Examination",
        "serviceUr": "پراسپیکٹس و ابتدائی میڈیکل",
        "normal": "PKR 300 - 500 (At AS&RC)",
        "urgent": "Height/Weight/Eye Test",
        "executive": "Free Blood Screening",
        "validity": "Initial Stage"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Select Appropriate Army Entry Course",
        "titleUr": "مطلوبہ آرمی کورس کا انتخاب کریں",
        "detailEn": "Choose PMA Long Course (2-Year Commission), Technical Cadet Course (Engineering), Lady Cadet Course (LCC for Female Graduates), or Soldier Recruitment.",
        "detailUr": "پی ایم اے لانگ کورس، ٹیکنیکل کیڈٹ یا لیڈی کیڈٹ کورس میں سے اپنی اہلیت کے مطابق انتخاب کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Register on Official GHQ Portal",
        "titleUr": "آفیشل پورٹل پر رجسٹریشن مکمل کریں",
        "detailEn": "Visit joinpakarmy.gov.pk, enter CNIC/B-Form, Father's CNIC, Matric/FSc marks, and select your nearest AS&RC (Lahore, Rawalpindi, Karachi, Peshawar, Quetta, Multan).",
        "detailUr": "ویب سائٹ پر اپنے اور والد کے شناختی کارڈ اور نمبرز کے ساتھ قریبی سنٹر منتخب کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Download Exam Schedule & Slip",
        "titleUr": "امتحانی تاریخ اور سلپ پرنٹ کریں",
        "detailEn": "Print the generated computerized roll number slip specifying exact date and time for initial screening.",
        "detailUr": "کمپیوٹرائزڈ رول نمبر سلپ پرنٹ کر کے مقررہ تاریخ پر سنٹر پہنچیں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Clear Initial Computerized & Physical Tests",
        "titleUr": "انٹیلی جنس، اکیڈمک اور فزیکل ٹیسٹ پاس کریں",
        "detailEn": "Pass Verbal/Non-Verbal Intelligence Test, English/General Knowledge, 1.6km run (in 8 mins), push-ups, chin-ups, and ditch crossing.",
        "detailUr": "کمپیوٹر پر انٹیلی جنس ٹیسٹ اور گراؤنڈ میں 1.6 کلومیٹر دوڑ و دیگر فزیکل ٹیسٹ پاس کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "What are the physical standards for male candidates in PMA Long Course?",
        "questionUr": "پی ایم اے لانگ کورس کے لیے قد اور فزیکل معیار کیا ہے؟",
        "answerEn": "Minimum height: 5 feet 4 inches (162.5 cm), Visual acuity: 6/6 with or without glasses, Physical test: 1.6 km run in 8 minutes, 15 push-ups in 2 minutes, 15 sit-ups in 2 minutes, 3 chin-ups in 2 minutes, and 7.4-foot ditch crossing.",
        "answerUr": "کم از کم قد 5 فٹ 4 انچ، 1.6 کلومیٹر دوڑ (8 منٹ)، 15 پش اپس، 15 سٹ اپس اور 3 پل اپس پاس کرنا لازمی ہے۔"
      }
    ],
    "contentEn": "## Join Pakistan Army Complete Recruitment Guide 2026\nA career in the **Pakistan Armed Forces** as a commissioned officer or non-commissioned soldier offers prestigious national service, world-class leadership training at the Pakistan Military Academy (PMA) Kakul, free medical healthcare for life, and subsidized residential housing.\n\n## The Complete Inter-Services Selection Board (ISSB) 4-Day Assessment\nCandidates recommended from initial screening proceed to ISSB (Kohat, Gujranwala, Malir, or Quetta) for:\n- **Psychological Tests**: Thematic Apperception Tests (TAT), Word Association Tests (WAT), and Situation Reaction Tests (SRT).\n- **Group Testing Officer (GTO) Tasks**: Military Planning, Progressive Group Tasks (PGT), Half Group Tasks (HGT), and Command Tasks.\n- **Deputy President Interview**: Comprehensive character, current affairs, and leadership potential evaluation.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## In-Depth Analysis of Commissioned Entry Programs in the Pakistan Armed Forces\n\n### 1. PMA Long Course (Regular 2-Year Commission)\n- **Eligibility**: Male Pakistani citizens, age 17-22 years (up to 23 years for graduates), minimum 55% marks in FSc Pre-Engineering, Pre-Medical, or ICS.\n- **Training**: 2 rigorous years of military tactics, physical conditioning, weapon mastery, and academic degree work at Pakistan Military Academy (PMA) Kakul, Abbottabad.\n- **Commission Rank**: Commissioned as Second Lieutenant (BS-17 equivalent) in Pakistan Army combat arms (Infantry, Armoured Corps, Artillery) or services.\n\n### 2. Technical Cadet Course (TCC - 4-Year Engineering Commission)\n- **Eligibility**: FSc Pre-Engineering / Computer Science with 65%+ marks.\n- **Training**: 4 years BE Engineering degree at Military College of Signals (MCS) Rawalpindi, College of E&ME Rawalpindi, or Military College of Engineering (MCE) Risalpur followed by 1 year at PMA Kakul.\n- **Commission Rank**: Captain in Corps of Signals, E&ME, or Corps of Engineers.\n\n### 3. Lady Cadet Course (LCC - Direct 6-Month Commission for Female Graduates)\n- **Eligibility**: Unmarried female citizens, age 21-28 years with 16 years of education (Master's/BS) in IT, Law, Engineering, Psychology, or Natural Sciences.\n- **Training**: 6 months intensive basic military training at PMA Kakul.\n- **Commission Rank**: Captain in designated technical, medical, and administrative corps.\n\n---\n\n## Comprehensive Preparation Strategy for Competitive Examinations & Interviews\nSecuring a high merit ranking in public service commission examinations (FPSC, PPSC, SPSC, KPPSC, BPSC, NTS) requires structured, disciplined preparation across multiple academic disciplines.\n\n### 1. The 5-Pillar Core Curriculum for General Ability Tests\n- **Pakistan Affairs & Historical Constitutional Evolution**: 1857 War of Independence, Sir Syed's Aligarh Movement, 1906 Muslim League formation, 1940 Lahore Resolution, 1973 Constitution, 18th Constitutional Amendment, CPEC, and contemporary foreign policy challenges.\n- **Current Affairs & International Relations**: Key global alliances (SCO, BRICS, UN Security Council, OIC), Middle East dynamics, international climate treaties, and State Bank monetary policies.\n- **Everyday Science & Basic Mathematics**: Human anatomy, vitamins, planetary astronomy, solar energy, basic algebra, ratio-proportion, percentages, averages, and basic geometry problems.\n- **English Grammar, Comprehension & Précis**: Sentence correction, preposition rules, active-passive voice, direct-indirect narration, vocabulary antonyms/synonyms, and concise précis writing.\n- **Information Technology & Cyber Security**: Computer architecture, operating systems, Microsoft Office shortcut keys, networking concepts (LAN, WAN, IP address), and data encryption fundamentals.\n\n### 2. Mastering the Public Service Commission Interview & Psychological Viva Voce\n- **Confidence & Body Language**: Maintain steady eye contact with all interview panel members, sit upright with relaxed shoulders, and enter/leave the interview chamber with formal professional courtesy.\n- **Handling Unknown Questions**: Never guess or fabricate answers before seasoned panel members. If you do not know a factual query, politely state: *\"I apologize, sir/madam, I am unable to recall this specific information at the moment.\"*\n- **Current Job & Academic Defense**: Be prepared to defend your university final-year thesis, previous work experience, and explain precisely how your educational background directly benefits the applied government post.\n\n---\n\n## Redressal of Recruitment Grievances & Legal Rights of Candidates\nUnder statutory public service commission rules and high court precedents:\n- **Right to Paper Re-Checking**: Candidates have the legal right to apply for formal paper recount and optical mark recognition (OMR) sheet re-verification within 30 days of result announcement by paying a nominal fee.\n- **Right to Interview Merit Breakdown**: Rejected candidates can request their detailed breakdown marks (Academic Marks, Written Marks, Interview Marks) to verify merit transparency.\n- **Writ Jurisdiction in High Court**: If administrative rules or seat quotas were unlawfully altered, candidates can file a constitutional writ petition under Article 199 of the Constitution of Pakistan at the relevant Provincial High Court.",
    "contentUr": "## پاک فوج میں شمولیت کی مکمل گائیڈ 2026\nپاک آرمی میں کمیشنڈ آفیسر اور سپاہی کی بھرتی کے طریقہ کار، فزیکل اور انٹیلی جنس ٹیسٹ کی مکمل تیاری کی رہنمائی۔",
    "relatedSlugs": [
      "/jobs/latest-govt-jobs-pakistan",
      "/jobs/ppsc-jobs-2026"
    ]
  },
  "punjab-health-department-jobs": {
    "slug": "punjab-health-department-jobs",
    "fullPath": "/jobs/punjab-health-department-jobs",
    "categoryId": "jobs",
    "titleEn": "Primary & Secondary Healthcare Punjab Jobs 2026: Doctors & Nurses",
    "titleUr": "محکمہ صحت پنجاب نوکریاں 2026: میڈیکل آفیسر اور چارج نرس آن لائن فارم",
    "metaDescriptionEn": "Primary & Secondary Healthcare Department Punjab jobs 2026. Online apply at pshealthpunjab.gop.pk, Medical Officer (BPS-17), Charge Nurse (BPS-16), and Allied Staff.",
    "metaDescriptionUr": "پرائمری اینڈ سیکنڈری ہیلتھ کیئر ڈیپارٹمنٹ پنجاب میں نرسنگ اور ڈاکٹرز کی نئی نوکریاں اور آن لائن فارم۔",
    "directAnswerEn": "To apply for Primary & Secondary Healthcare Department Punjab jobs in 2026 (Medical Officers, Women Medical Officers, Nurses, Pharmacists, and Allied Health Staff), apply through the Punjab Health portal pshealthpunjab.gov.pk or PPSC. Recruitment offers regular scale appointments and high-paying ad-hoc contracts.",
    "directAnswerUr": "محکمہ صحت پنجاب (پرائمری اینڈ سیکنڈری ہیلتھ کئیر) کی ملازمتوں (ڈاکٹرز، نرسز، فارماسسٹس) کے لیے pshealthpunjab.gov.pk یا PPSC کے ذریعے اپلائی کریں۔ باقاعدہ اسکیل اور ایڈہاک بنیادوں پر پرکشش تنخواہوں پر بھرتیاں کی جاتی ہیں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "P&SHD Punjab Portal",
      "url": "https://pshealthpunjab.gop.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Healthcare Recruitment Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Punjab Health Online Ad-Hoc Portal Apply",
        "serviceUr": "ایڈہاک پورٹل پر آن لائن اپلائی",
        "normal": "100% FREE",
        "urgent": "Instant Merit Calculation",
        "executive": "Direct District Posting",
        "validity": "Annual Contract"
      },
      {
        "serviceEn": "PPSC Regular Medical Officer Fee",
        "serviceUr": "پی پی ایس سی ریگولر ڈاکٹر فیس",
        "normal": "PKR 600",
        "urgent": "ePay Punjab PSID",
        "executive": "Permanent BPS-17",
        "validity": "Regular Service"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Register on Punjab Health Career Portal",
        "titleUr": "ہیلتھ کیریئر پورٹل پر اکاؤنٹ بنائیں",
        "detailEn": "Visit pshealthpunjab.gov.pk and navigate to 'Ad-hoc Recruitment Portal'.",
        "detailUr": "محکمہ صحت کے ایڈہاک پورٹل پر لاگ ان کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Upload PMDC / PNC Registration & Degrees",
        "titleUr": "پی ایم ڈی سی یا نرسنگ کونسل رجسٹریشن اپلوڈ کریں",
        "detailEn": "Upload valid PMDC license (for doctors), PNC card (for nurses), MBBS degree, and House Job certificates.",
        "detailUr": "پی ایم ڈی سی سرٹیفکیٹ، ایم بی بی ایس ڈگری اور ہاؤس جاب کی اسناد اپلوڈ کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Select District & Health Facility Preferences",
        "titleUr": "پسندیدہ ضلع اور ہسپتال کا انتخاب کریں",
        "detailEn": "Choose up to 5 preferred District Headquarter (DHQ) or Tehsil Headquarter (THQ) hospitals for placement.",
        "detailUr": "ڈی ایچ کیو یا ٹی ایچ کیو ہسپتالوں کی ترجیحی لسٹ منتخب کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "What is the monthly salary of an ad-hoc Medical Officer in Punjab?",
        "questionUr": "پنجاب میں ایڈہاک میڈیکل آفیسر کی ماہانہ تنخواہ کتنی ہے؟",
        "answerEn": "In 2026, an ad-hoc Medical Officer (BS-17) receives a gross monthly salary ranging from PKR 135,000 to PKR 190,000 depending on hard-area district allowances in remote rural health centers.",
        "answerUr": "ایڈہاک میڈیکل آفیسر کی تنخواہ 1 لاکھ 35 ہزار سے لے کر دور دراز اضلاع میں 1 لاکھ 90 ہزار روپے تک ہے۔"
      }
    ],
    "contentEn": "## Punjab Primary & Secondary Healthcare Department Jobs 2026\nThe **Primary & Secondary Healthcare Department (P&SHD)** manages thousands of Basic Health Units (BHUs), Rural Health Centers (RHCs), and Tehsil/District Headquarter Hospitals across Punjab.\n\n## Career Progression & Allowances in Punjab Public Healthcare\nDoctors and nurses in Punjab receive substantial financial incentives including:\n- **Non-Practicing Allowance (NPA)**: For doctors serving full-time in public institutions.\n- **Hard-Area / Special Healthcare Allowance**: Additional monthly allowances for medical officers deployed in remote Rajanpur, Cholistan, Bhakkar, and Mianwali facilities.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## Primary & Secondary Healthcare Department Punjab Recruitment Manual 2026\nThe **Primary & Secondary Healthcare Department (P&SHD)** is the largest provincial healthcare employer in Pakistan, operating over 2,500 Basic Health Units (BHUs), 300 Rural Health Centers (RHCs), 120 Tehsil Headquarter (THQ) Hospitals, and 36 District Headquarter (DHQ) Hospitals.\n\n### 1. Medical Officer (MO) & Women Medical Officer (WMO) Induction Tracks\n- **Regular Cadre Recruitment via PPSC (BPS-17)**: Permanent pensionable civil service jobs advertised annually for MBBS graduates with valid PMDC registration and 1-year house job completion.\n- **Ad-Hoc Fast-Track Induction Portal**: Digital portal allowing instant district-level contract recruitment to fill vacant rural emergency wards with monthly gross packages up to PKR 190,000.\n\n### 2. Nursing Cadre (BS-16) & Allied Health Professional Scales\nRegistered Nurses holding a 4-year BS Generic Nursing degree or 3-year General Nursing Diploma registered with the Pakistan Nursing Council (PNC) are recruited on regular scales across all tertiary and secondary care hospitals.\n\n---\n\n## Comprehensive Preparation Strategy for Competitive Examinations & Interviews\nSecuring a high merit ranking in public service commission examinations (FPSC, PPSC, SPSC, KPPSC, BPSC, NTS) requires structured, disciplined preparation across multiple academic disciplines.\n\n### 1. The 5-Pillar Core Curriculum for General Ability Tests\n- **Pakistan Affairs & Historical Constitutional Evolution**: 1857 War of Independence, Sir Syed's Aligarh Movement, 1906 Muslim League formation, 1940 Lahore Resolution, 1973 Constitution, 18th Constitutional Amendment, CPEC, and contemporary foreign policy challenges.\n- **Current Affairs & International Relations**: Key global alliances (SCO, BRICS, UN Security Council, OIC), Middle East dynamics, international climate treaties, and State Bank monetary policies.\n- **Everyday Science & Basic Mathematics**: Human anatomy, vitamins, planetary astronomy, solar energy, basic algebra, ratio-proportion, percentages, averages, and basic geometry problems.\n- **English Grammar, Comprehension & Précis**: Sentence correction, preposition rules, active-passive voice, direct-indirect narration, vocabulary antonyms/synonyms, and concise précis writing.\n- **Information Technology & Cyber Security**: Computer architecture, operating systems, Microsoft Office shortcut keys, networking concepts (LAN, WAN, IP address), and data encryption fundamentals.\n\n### 2. Mastering the Public Service Commission Interview & Psychological Viva Voce\n- **Confidence & Body Language**: Maintain steady eye contact with all interview panel members, sit upright with relaxed shoulders, and enter/leave the interview chamber with formal professional courtesy.\n- **Handling Unknown Questions**: Never guess or fabricate answers before seasoned panel members. If you do not know a factual query, politely state: *\"I apologize, sir/madam, I am unable to recall this specific information at the moment.\"*\n- **Current Job & Academic Defense**: Be prepared to defend your university final-year thesis, previous work experience, and explain precisely how your educational background directly benefits the applied government post.\n\n---\n\n## Redressal of Recruitment Grievances & Legal Rights of Candidates\nUnder statutory public service commission rules and high court precedents:\n- **Right to Paper Re-Checking**: Candidates have the legal right to apply for formal paper recount and optical mark recognition (OMR) sheet re-verification within 30 days of result announcement by paying a nominal fee.\n- **Right to Interview Merit Breakdown**: Rejected candidates can request their detailed breakdown marks (Academic Marks, Written Marks, Interview Marks) to verify merit transparency.\n- **Writ Jurisdiction in High Court**: If administrative rules or seat quotas were unlawfully altered, candidates can file a constitutional writ petition under Article 199 of the Constitution of Pakistan at the relevant Provincial High Court.",
    "contentUr": "## محکمہ صحت پنجاب نوکریاں گائیڈ 2026\nڈاکٹرز، لیڈی ڈاکٹرز، نرسز اور پیرا میڈیکل اسٹاف کے لیے پنجاب حکومت کی مستقل اور ایڈہاک آسامیوں کا مکمل طریقہ۔",
    "relatedSlugs": [
      "/jobs/latest-govt-jobs-pakistan",
      "/jobs/ppsc-jobs-2026"
    ]
  },
  "punjab-green-tractor-scheme-2026": {
    "slug": "punjab-green-tractor-scheme-2026",
    "fullPath": "/loans/punjab-green-tractor-scheme-2026",
    "categoryId": "loans",
    "titleEn": "CM Punjab Green Tractor Scheme 2026: 10 Lakh PKR Subsidy Online Apply",
    "titleUr": "وزیراعلیٰ پنجاب گرین ٹریکٹر سکیم 2026: 10 لاکھ روپے سبسڈی آن لائن فارم",
    "metaDescriptionEn": "CM Punjab Green Tractor Scheme 2026 online application at gts.punjab.gov.pk. 10 Lakh PKR subsidy per tractor, land eligibility (6 to 50 acres), and balloting.",
    "metaDescriptionUr": "وزیراعلیٰ پنجاب کی کاشتکاروں کے لیے 10 لاکھ روپے کی سبسڈی ٹریکٹر سکیم۔ آن لائن فارم gts.punjab.gov.pk اور 6 سے 50 ایکڑ رقبہ کی شرط۔",
    "directAnswerEn": "The CM Punjab Green Tractor Scheme 2026 provides a flat subsidy of PKR 1,000,000 (10 Lakhs) on medium to high-horsepower tractors (50 HP to 85 HP) for Punjab farmers owning 1 to 50 acres of agricultural land. Applications are submitted online via the Department of Agriculture portal with balloting by Punjab Information Technology Board (PITB).",
    "directAnswerUr": "وزیراعلیٰ پنجاب گرین ٹریکٹر سکیم 2026 کے تحت 1 سے 50 ایکڑ اراضی کے مالک کاشتکاروں کو 50 سے 85 ہارس پاور کے ٹریکٹرز پر 10 لاکھ روپے کی یکمشت سبسڈی دی جا رہی ہے۔ درخواستیں محکمہ زراعت کے پورٹل پر جمع ہوتی ہیں اور شفاف قرعہ اندازی پی آئی ٹی بی کے ذریعے کی جاتی ہے۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "Punjab Agriculture Department Portal",
      "url": "https://gts.punjab.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Agricultural Schemes Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Govt Subsidy (50 HP - 85 HP Tractors)",
        "serviceUr": "سرکاری سبسڈی (50 تا 85 ہارس پاور)",
        "normal": "PKR 1,000,000 (10 Lakhs)",
        "urgent": "Direct Manufacturer Pay",
        "executive": "Non-Refundable Grant",
        "validity": "One Tractor per CNIC"
      },
      {
        "serviceEn": "Farmer Contribution (Millat/Al-Ghazi/New Holland)",
        "serviceUr": "کسان کا حصہ (ملت/الslot)",
        "normal": "Remaining Invoice Price",
        "urgent": "Payable within 30 Days",
        "executive": "Pay Order / BOP Loan",
        "validity": "2026 Models"
      },
      {
        "serviceEn": "Application Registration Fee",
        "serviceUr": "آن لائن درخواست فیس",
        "normal": "100% FREE",
        "urgent": "Online via agri.punjab.gov.pk",
        "executive": "Kisan Card Integrated",
        "validity": "Official Agri Dept"
      },
      {
        "serviceEn": "Vehicle Registration & Number Plate",
        "serviceUr": "ایکسائز رجسٹریشن فیس",
        "normal": "Standard Agri Concession",
        "urgent": "Exempt from Token Tax",
        "executive": "Commercial Green Plate",
        "validity": "Lifetime Agri Use"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Verify Land Records in PLRA System",
        "titleUr": "اراضی ریکارڈ سنٹر سے فرد ملکیت کی تصدیق",
        "detailEn": "Ensure your agricultural land ownership (1 to 50 acres) is updated in the Punjab Land Records Authority (PLRA) computerized database.",
        "detailUr": "یقینی بنائیں کہ آپ کے 1 سے 50 ایکڑ زرعی رقبے کا اندراج پنجاب لینڈ ریکارڈ سسٹم میں درست ہے۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Submit Application on Agri Portal",
        "titleUr": "محکمہ زراعت کے پورٹل پر آن لائن درخواست",
        "detailEn": "Apply through gts.punjab.gov.pk or the Punjab Kisan App by submitting CNIC, mobile number, land record details, and preferred tractor make/model.",
        "detailUr": "پورٹل gts.punjab.gov.pk پر اپنا شناختی کارڈ، زمین کی تفصیل اور پسندیدہ ٹریکٹر ماڈل منتخب کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Transparent Digital Balloting by PITB",
        "titleUr": "پی آئی ٹی بی کے ذریعے شفاف قرعہ اندازی",
        "detailEn": "Participate in the district-wise computerized e-balloting conducted transparently to select eligible quota winners across all 36 Punjab districts.",
        "detailUr": "تمام 36 اضلاع کے لیے کوٹہ کے مطابق کمپیوٹرائزڈ قرعہ اندازی میں اپنا نام چیک کریں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Receive Digital Allocation Letter",
        "titleUr": "کامیابی کا الاٹمنٹ لیٹر وصول کریں",
        "detailEn": "Successful farmers receive an official SMS notification and download the digitally signed allotment voucher with an authorization QR code.",
        "detailUr": "کامیاب کاشتکار آفیشل ایس ایم ایس کے بعد تصدیق شدہ الاٹمنٹ لیٹر پورٹل سے ڈاؤن لوڈ کریں۔"
      },
      {
        "stepNumber": 5,
        "titleEn": "Deposit Farmer Share in Bank of Punjab",
        "titleUr": "بینک آف پنجاب میں کسان کے حصے کا پے آرڈر",
        "detailEn": "Deposit your balance share (total tractor invoice price minus PKR 1,000,000 subsidy) via Pay Order at the designated Bank of Punjab branch within 30 days.",
        "detailUr": "ٹریکٹر کی کل قیمت میں سے 10 لاکھ روپے منہا کر کے باقی رقم کا پے آرڈر 30 دن کے اندر جمع کروائیں۔"
      },
      {
        "stepNumber": 6,
        "titleEn": "Tractor Delivery from Authorized Dealership",
        "titleUr": "مجاز ڈیلرشپ سے نئے ٹریکٹر کی وصولی",
        "detailEn": "Collect your factory-fresh tractor with official delivery challan, warranty book, and Green Scheme serial registration plate.",
        "detailUr": "کمپنی کے مجاز شو روم سے نیا ٹریکٹر، وارنٹی بک اور رجسٹریشن کاغذات وصول کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "What tractor brands are eligible under the Green Tractor Scheme?",
        "questionUr": "گرین ٹریکٹر سکیم میں کون سی کمپنیوں کے ٹریکٹرز شامل ہیں؟",
        "answerEn": "All major locally assembled tractor brands approved by the Engineering Development Board (EDB) are eligible, including Millat Tractors (Massey Ferguson 240, 260, 375, 385), Al-Ghazi Tractors (Fiat New Holland 480, 640), and Bull Power.",
        "answerUr": "ملت ٹریکٹرز (میسی فرگوسن)، الغازی ٹریکٹرز (نیو ہالینڈ) اور بل پاور کے 50 سے 85 ہارس پاور کے تمام ماڈلز شامل ہیں۔"
      },
      {
        "questionEn": "Can I sell or transfer the subsidized tractor immediately?",
        "questionUr": "کیا سبسڈی پر ملنے والا ٹریکٹر فوری فروخت کیا جا سکتا ہے؟",
        "answerEn": "No. The tractor is registered with a non-transferable hypothecation lien for 3 years to ensure genuine agricultural utilization and prevent market scalping.",
        "answerUr": "نہیں! ٹریکٹر کی رجسٹریشن پر 3 سال تک کا ٹرانسفر بین ہوتا ہے تاکہ کوئی بھی شخص سبسڈی کا غلط استعمال نہ کر سکے۔"
      },
      {
        "questionEn": "What if a farmer cannot arrange the remaining balance in 30 days?",
        "questionUr": "اگر کسان 30 دن میں باقی رقم جمع نہ کروا سکے تو کیا ہوگا؟",
        "answerEn": "If the farmer share is not deposited within the 30-day allocation window, the allotment is automatically cancelled and awarded to the next waiting-list candidate from the e-balloting reserve pool.",
        "answerUr": "30 دن کے اندر رقم جمع نہ کروانے پر الاٹمنٹ منسوخ ہو کر ویٹنگ لسٹ کے اگلے کاشتکار کو منتقل ہو جاتی ہے۔"
      },
      {
        "questionEn": "Is a Kisan Card mandatory to apply for Green Tractor Scheme?",
        "questionUr": "کیا گرین ٹریکٹر کے لیے کسان کارڈ ہونا لازمی ہے؟",
        "answerEn": "While having an active Punjab Kisan Card accelerates verification, farmers with verified PLRA land title records can directly apply through the GTS portal.",
        "answerUr": "کسان کارڈ سے تصدیق تیز ہوتی ہے، تاہم فرد ملکیت رکھنے والے کاشتکار براہ راست بھی اپلائی کر سکتے ہیں۔"
      },
      {
        "questionEn": "Can tenant farmers (Muzaraeen) or leaseholders apply?",
        "questionUr": "کیا مزارعین یا ٹھیکے دار کسان گرین ٹریکٹر کے لیے اپلائی کر سکتے ہیں؟",
        "answerEn": "No. The scheme legally requires registered ownership of agricultural land (1 to 50 acres) verified through the Punjab Land Records Authority computerized registry. Pure leaseholders or oral tenants cannot apply unless the legal landowner applies in their own name.",
        "answerUr": "نہیں! اراضی کا قانونی مالک ہونا لازمی ہے، ٹھیکے دار یا مزارعین براہ راست اپلائی نہیں کر سکتے۔"
      }
    ],
    "contentEn": "## Overview of the CM Punjab Green Tractor Scheme 2026\nMechanized farming is the cornerstone of agricultural productivity in Pakistan. To combat surging machinery costs, diesel inflation, and manual labor bottlenecks, the Chief Minister of Punjab launched the **Green Tractor Scheme 2026**, offering an unprecedented **flat grant of PKR 1,000,000 (10 Lakhs)** on brand-new agricultural tractors.\n\nThe scheme covers over **9,500 subsidized tractors** distributed proportionately across all 36 districts of Punjab based on cultivated agricultural acreage.\n\n---\n\n## Detailed Eligibility & Land Ownership Rules\n\n| Parameter | Criteria | Proof Required |\n| :--- | :--- | :--- |\n| **Land Ownership** | 1 Acre to 50 Acres of agricultural land in Punjab | PLRA Computerized Fard Malkiat |\n| **Residency** | Permanent resident of Punjab with valid CNIC | NADRA CNIC & Punjab Domicile |\n| **Tractor Limit** | Maximum 1 subsidized tractor per CNIC / family unit | NADRA Family Tree (FRC) verification |\n| **Horsepower Range** | 50 Horsepower (HP) to 85 Horsepower (HP) models | Manufacturer Delivery Challan |\n| **Prior Beneficiary** | Must not have won a subsidized tractor scheme in last 5 years | Agri Dept National Database Cross-check |\n\n---\n\n## Price Comparison & Subsidy Impact (2026 Market Rates)\n\n```\nMassey Ferguson MF 240 (50 HP)\n   Market Price: PKR ~2,750,000\n   (-) Govt Subsidy: PKR 1,000,000\n   (=) Farmer Share: PKR 1,750,000\n\nNew Holland Ghazi NH 480 (55 HP)\n   Market Price: PKR ~2,950,000\n   (-) Govt Subsidy: PKR 1,000,000\n   (=) Farmer Share: PKR 1,950,000\n\nMassey Ferguson MF 385 4WD (85 HP)\n   Market Price: PKR ~5,400,000\n   (-) Govt Subsidy: PKR 1,000,000\n   (=) Farmer Share: PKR 4,400,000\n```\n\n---\n\n## How the E-Balloting System Works\n1. All applications submitted before the deadline are vetted digitally against the Punjab Land Records database.\n2. PITB conducts a live computerized e-balloting streamed online on official social media channels.\n3. Successful candidates receive SMS alerts with an official verification token.\n4. District Agriculture Officers (Extension) verify physical documents before dispatching the final authorization voucher.\n\n## Comprehensive Tractor Specifications & Horsepower Classification\nThe Punjab Agriculture Department has approved specific tractor classes to match varied soil types across Punjab's canal-irrigated and barani (rain-fed) zones:\n\n### 1. Medium Category (50 HP - 65 HP)\n- **Target Use**: Small to medium land holdings (1 to 15 acres), rotavator operations, seed drilling, and local trolley haulage.\n- **Top Models**: Millat Massey Ferguson MF 240 (50 HP), MF 260 Turbo (60 HP), Al-Ghazi New Holland NH 480 (55 HP), Ghazi 65 HP.\n- **Fuel Efficiency**: ~4.5 to 5.5 Liters of diesel per hour under standard disc ploughing.\n\n### 2. Heavy-Duty Category (75 HP - 85 HP & 4WD)\n- **Target Use**: Large acreage (15 to 50 acres), laser land leveling, deep chiseling, combine attachments, and sugarcane transport.\n- **Top Models**: Millat MF 375 (75 HP), MF 385 2WD & 4WD (85 HP), New Holland Dabung 85 HP.\n- **Towing Capacity**: Up to 15-20 metric tons on hydraulic multi-axle farm trollies.\n\n---\n\n## District-Wise Allocation & Farmer Verification Protocols\n1. **District Quota Computation**: Quotas are calculated using the formula: `District Quota = (Total Cultivated Acres in District / Total Punjab Cultivated Acres) × 9,500`.\n2. **Scrutiny Committees**: Chaired by the Deputy Commissioner (DC) and comprising the Deputy Director Agriculture (Extension) and PLRA Assistant Director Land Records.\n3. **Delivery Tracking**: Every tractor is fitted with an anti-tamper tracking plate and inspected at the local dealership before official handover.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n---\n\n## Strategic Financial Planning & Credit Score Management for Borrowers\nAcquiring government-subsidized credit or interest-free microfinance is a major financial milestone that requires disciplined cash-flow management to protect your long-term national credit standing.\n\n### 1. Understanding SBP's Electronic Credit Information Bureau (eCIB)\nEvery subsidized loan application is screened against the State Bank of Pakistan's central eCIB database. Maintaining a flawless credit rating is essential:\n- **Timely Installment Clearing**: Always deposit installments at least 48 hours prior to the monthly due date to prevent inter-bank settlement delays from triggering overdue flags.\n- **Credit Card & Overdraft Caution**: Never utilize more than 60% of your sanctioned credit card limit, and clear statement balances in full to maintain prime borrower tier categorization.\n- **Guarantor Responsibility**: Serving as a loan guarantor for a friend or relative makes you legally and financially liable. If the primary borrower defaults, your own eCIB record is flagged, blocking your future personal loan and mortgage applications.\n\n### 2. Business Cash Flow Allocation for Micro-Enterprises\n- **Separating Personal & Business Wallets**: Never mix household grocery expenses with daily shop sales revenue. Maintain a separate digital ledger book (Khata) to track inventory turnarounds.\n- **Emergency Reserve Fund**: Re-invest at least 20% of net monthly business profits into an emergency liquidity reserve to cushion against seasonal market slumps and inflation.\n\n---\n\n## Legal Rights & Consumer Protection for Subsidized Borrowers\nUnder State Bank of Pakistan Consumer Protection Regulations:\n- **Transparent Amortization Schedules**: Banks must provide a full printed repayment schedule displaying principal breakdown, payment dates, and zero hidden penalty clauses.\n- **No Early Repayment Penalties**: For subsidized youth and housing schemes, borrowers can make partial or full early lump-sum settlements with zero prepayment penalties.\n- **Harassment Prohibition**: Bank recovery officers are strictly barred by law from contacting borrowers before 9:00 AM or after 7:00 PM, or visiting family residences without prior written appointment notices.",
    "contentUr": "## وزیراعلیٰ پنجاب گرین ٹریکٹر سکیم 2026\nگرین ٹریکٹر سکیم پنجاب کے کاشتکاروں کے لیے ایک تاریخی زرعی پیکج ہے جس کے تحت 50 سے 85 ہارس پاور کے ٹریکٹرز پر **10 لاکھ روپے کی یکمشت سبسڈی** فراہم کی جا رہی ہے۔ اس سکیم کا مقصد چھوٹے اور درمیانے درجے کے کسانوں کو جدید زرعی مشینری تک آسان رسائی دینا ہے۔\n\n---\n\n## ضروری اہلیت اور دستاویزات\n- پنجاب میں 1 سے 50 ایکڑ تک زرعی اراضی کی ملکیت۔\n- اراضی کا کمپیوٹرائزڈ فرد ملکیت پنجاب لینڈ ریکارڈ اتھارٹی سے تصدیق شدہ ہو۔\n- ایک شناختی کارڈ پر صرف ایک ٹریکٹر الاٹ کیا جائے گا۔\n- ٹریکٹر کو اگلے 3 سال تک فروخت یا ٹرانسفر کرنے کی اجازت نہیں ہوگی۔",
    "relatedSlugs": [
      "/loans/apni-chhat-apna-ghar",
      "/loans/pm-youth-loan-scheme"
    ]
  },
  "sbp-asaan-mobile-account-guide": {
    "slug": "sbp-asaan-mobile-account-guide",
    "fullPath": "/loans/sbp-asaan-mobile-account-guide",
    "categoryId": "loans",
    "titleEn": "State Bank Asaan Mobile Account (AMA) Guide: Open Bank Account via *2262#",
    "titleUr": "سٹیٹ بینک آسان موبائل اکاؤنٹ (*2262#) آن لائن گائیڈ 2026",
    "metaDescriptionEn": "How to open State Bank Asaan Mobile Account (AMA) instantly without internet by dialing *2262# from any mobile phone. Zero fee, instant digital banking.",
    "metaDescriptionUr": "سٹیٹ بینک آف پاکستان کی ہدایت پر بغیر انٹرنیٹ کے *2262# کوڈ ملا کر منٹوں میں آسان بینک اکاؤنٹ کھولنے کا طریقہ۔",
    "directAnswerEn": "The SBP Asaan Mobile Account (AMA) enables any Pakistani citizen to open a digital bank account in under 60 seconds by dialing *2262# from any mobile phone without an internet connection or smartphone. It requires only your CNIC number and issuance date.",
    "directAnswerUr": "سٹیٹ بینک آسان موبائل اکاؤنٹ (AMA) کے تحت کوئی بھی شہری بغیر انٹرنیٹ یا اسمارٹ فون کے اپنے سادہ موبائل سے *2262# ڈائل کر کے صرف 60 سیکنڈ میں شناختی کارڈ اور تاریخ اجراء کی مدد سے بینک اکاؤنٹ کھول سکتا ہے۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "State Bank of Pakistan AMA Gateway",
      "url": "https://www.sbp.org.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Financial Inclusion Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Account Opening via USSD (*2262#)",
        "serviceUr": "اکاؤنٹ اوپننگ فیس (*2262#)",
        "normal": "100% FREE",
        "urgent": "Instant in 60 Seconds",
        "executive": "No Minimum Balance",
        "validity": "Lifetime Active"
      },
      {
        "serviceEn": "Monthly Credit Limit (Level 0)",
        "serviceUr": "ماہانہ کریڈٹ لمٹ (لیول 0)",
        "normal": "PKR 100,000",
        "urgent": "Biometric Upgrade to 500k",
        "executive": "Inter-Bank Transfer Ready",
        "validity": "Per Month"
      },
      {
        "serviceEn": "Daily Cash Withdrawal Limit",
        "serviceUr": "روزانہ رقم نکلوانے کی حد",
        "normal": "PKR 25,000",
        "urgent": "ATM / Branch Counter",
        "executive": "1Link Network Compatible",
        "validity": "Per Day"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Dial *2262# from Your Mobile",
        "titleUr": "موبائل سے *2262# ڈائل کریں",
        "detailEn": "Dial the USSD short-code *2262# from any Jazz, Zong, Telenor, or Ufone SIM registered in your name.",
        "detailUr": "اپنے شناختی کارڈ پر رجسٹرڈ کسی بھی سم سے *2262# ڈائل کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Select Preferred Commercial Bank",
        "titleUr": "پسندیدہ بینک کا انتخاب کریں",
        "detailEn": "Choose from 13+ participating banks including Allied Bank, Bank Alfalah, HBL, UBL, Meezan Bank, EasyPaisa, JazzCash, and JS Bank.",
        "detailUr": "لسٹ میں سے اپنے پسندیدہ بینک یا ڈیجیٹل والٹ کا نمبر درج کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Enter 13-Digit CNIC Number",
        "titleUr": "13 ہندسوں کا شناختی کارڈ نمبر درج کریں",
        "detailEn": "Type your CNIC number without dashes or spaces for automated NADRA telecommunication verification.",
        "detailUr": "بغیر ڈیش کے اپنا 13 ہندسوں کا شناختی کارڈ نمبر درج کریں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Enter CNIC Issue Date",
        "titleUr": "شناختی کارڈ کی تاریخ اجراء درج کریں",
        "detailEn": "Enter your date of issuance in DDMMYYYY format as printed on your Smart CNIC.",
        "detailUr": "شناختی کارڈ پر لکھی ہوئی تاریخ اجراء درج کریں۔"
      },
      {
        "stepNumber": 5,
        "titleEn": "Set Secure 4 or 5 Digit MPIN",
        "titleUr": "خفیہ پن کوڈ (MPIN) سیٹ کریں",
        "detailEn": "Create a unique transaction PIN code to complete registration and begin receiving/sending money instantly.",
        "detailUr": "اپنا خفیہ 4 یا 5 ہندسوں کا پن کوڈ بنائیں اور فوری اکاؤنٹ استعمال کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Do I need internet access or an Android/iPhone for AMA?",
        "questionUr": "کیا آسان موبائل اکاؤنٹ کے لیے انٹرنیٹ یا اسمارٹ فون چاہیے؟",
        "answerEn": "No. The system operates on GSM USSD protocol (*2262#), functioning on basic 2G button phones with zero internet data.",
        "answerUr": "نہیں! یہ سروس سادہ بٹنوں والے موبائل فون پر بغیر انٹرنیٹ کے کام کرتی ہے۔"
      },
      {
        "questionEn": "Can I receive government welfare disbursements (BISP / Loans) in AMA?",
        "questionUr": "کیا بینظیر یا سرکاری قرضے کی رقم اس اکاؤنٹ میں آ سکتی ہے؟",
        "answerEn": "Yes. All AMA accounts come with a complete 24-character IBAN number capable of receiving government transfers and remittances.",
        "answerUr": "جی ہاں! ہر اکاؤنٹ کا باقاعدہ IBAN نمبر ہوتا ہے جس میں سرکاری رقم اور باہر سے فنڈز منتقل ہو سکتے ہیں۔"
      },
      {
        "questionEn": "What are the transaction charges for interbank funds transfer via *2262#?",
        "questionUr": "آسان موبائل اکاؤنٹ سے دوسرے بینک پیسے بھیجنے کی فیس کیا ہے؟",
        "answerEn": "Under State Bank directives, basic balance inquiries, mini-statements, and government welfare deposits are 100% free. Interbank funds transfers (IBFT) via Raast are completely free of charge up to PKR 25,000 per month.",
        "answerUr": "راست (Raast) کے ذریعے 25,000 روپے ماہانہ تک فنڈز ٹرانسفر بالکل مفت ہے۔"
      }
    ],
    "contentEn": "## State Bank Asaan Mobile Account (*2262#) Guide\nThe **Asaan Mobile Account (AMA)** is a breakthrough financial inclusion platform introduced by the **State Bank of Pakistan (SBP)** and **Pakistan Telecommunication Authority (PTA)**.\n\nIt allows unbanked citizens in remote rural union councils to access full banking services without visiting bank branches, submitting physical utility bills, or paying account maintenance charges.\n\n---\n\n## Participating Banks on the *2262# Platform\n- **Conventional Banks**: Allied Bank, Bank Alfalah, Habib Bank Limited (HBL), United Bank Limited (UBL), JS Bank, Faysal Bank.\n- **Microfinance & Digital Wallets**: JazzCash (Mobilink Bank), Easypaisa (Telenor Bank), U Microfinance Bank, FINCA Microfinance Bank, Mobilink Microfinance Bank.\n\n## Technical Architecture of the USSD *2262# Gateway\nThe **Asaan Mobile Account** operates over a centralized National Financial Switch integrating telecom network operators with the 1Link banking backbone.\n\n---\n\n## Tier-0 vs Tier-1 Biometric Limits\n\n| Account Level | Monthly Inflow Limit | Monthly Outflow Limit | Maximum Balance | Verification Method |\n| :--- | :--- | :--- | :--- | :--- |\n| **Level 0 (USSD Only)** | PKR 100,000 | PKR 100,000 | PKR 200,000 | Automated NADRA Telecommunication Check |\n| **Level 1 (Biometric)** | PKR 500,000 | PKR 500,000 | PKR 1,000,000 | Biometric Scan at BVS Agent / Branch Counter |\n| **Level 2 (Full KYC)** | Unlimited | Unlimited | Unlimited | Branch Visit with Proof of Income |\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## State Bank Asaan Mobile Account (AMA) Universal Banking Platform 2026\nThe **Asaan Mobile Account (AMA)**, operating under the National Financial Inclusion Strategy (NFIS), empowers every Pakistani citizen possessing a valid NADRA CNIC to access full-featured digital banking services without requiring a smartphone, mobile application, or internet connectivity.\n\n### 1. How the Centralized USSD *2262# Gateway Functions\nWhen a citizen dials ***2262#**, the telecommunication network routes the session to the National Financial Switch managed by Virtual Remittance Gateway (VRG) and 1Link. The citizen can choose their preferred participating bank, link their biometric CNIC, and initiate real-time funds transfers (Raast / 1Link), utility bill payments, and government welfare collections with zero cellular data charges.\n\n---\n\n## Strategic Financial Planning & Credit Score Management for Borrowers\nAcquiring government-subsidized credit or interest-free microfinance is a major financial milestone that requires disciplined cash-flow management to protect your long-term national credit standing.\n\n### 1. Understanding SBP's Electronic Credit Information Bureau (eCIB)\nEvery subsidized loan application is screened against the State Bank of Pakistan's central eCIB database. Maintaining a flawless credit rating is essential:\n- **Timely Installment Clearing**: Always deposit installments at least 48 hours prior to the monthly due date to prevent inter-bank settlement delays from triggering overdue flags.\n- **Credit Card & Overdraft Caution**: Never utilize more than 60% of your sanctioned credit card limit, and clear statement balances in full to maintain prime borrower tier categorization.\n- **Guarantor Responsibility**: Serving as a loan guarantor for a friend or relative makes you legally and financially liable. If the primary borrower defaults, your own eCIB record is flagged, blocking your future personal loan and mortgage applications.\n\n### 2. Business Cash Flow Allocation for Micro-Enterprises\n- **Separating Personal & Business Wallets**: Never mix household grocery expenses with daily shop sales revenue. Maintain a separate digital ledger book (Khata) to track inventory turnarounds.\n- **Emergency Reserve Fund**: Re-invest at least 20% of net monthly business profits into an emergency liquidity reserve to cushion against seasonal market slumps and inflation.\n\n---\n\n## Legal Rights & Consumer Protection for Subsidized Borrowers\nUnder State Bank of Pakistan Consumer Protection Regulations:\n- **Transparent Amortization Schedules**: Banks must provide a full printed repayment schedule displaying principal breakdown, payment dates, and zero hidden penalty clauses.\n- **No Early Repayment Penalties**: For subsidized youth and housing schemes, borrowers can make partial or full early lump-sum settlements with zero prepayment penalties.\n- **Harassment Prohibition**: Bank recovery officers are strictly barred by law from contacting borrowers before 9:00 AM or after 7:00 PM, or visiting family residences without prior written appointment notices.",
    "contentUr": "## اسٹیٹ بینک آسان موبائل اکاؤنٹ (*2262#)\nاسٹیٹ بینک کی جانب سے پاکستان کے تمام شہریوں کو مالیاتی نظام میں شامل کرنے کے لیے آسان موبائل اکاؤنٹ شروع کیا گیا ہے۔\n\nصرف *2262# ملا کر سیکنڈز میں کسی بھی بینک میں فری اکاؤنٹ کھولا جا سکتا ہے۔",
    "relatedSlugs": [
      "/loans/asaan-karobar-scheme",
      "/loans/pm-youth-loan-scheme"
    ]
  },
  "akhuwat-interest-free-loan-application": {
    "slug": "akhuwat-interest-free-loan-application",
    "fullPath": "/loans/akhuwat-interest-free-loan-application",
    "categoryId": "loans",
    "titleEn": "Akhuwat Interest-Free Loan Application Guide 2026 (50k to 5 Lakhs)",
    "titleUr": "اخوت ہاؤسنگ و بزنس بلا سود قرضہ آن لائن گائیڈ 2026 (50 ہزار سے 5 لاکھ)",
    "metaDescriptionEn": "Apply for Akhuwat Foundation interest-free loans (0% Riba) for small business & house construction up to PKR 500,000. Branch application form & rules.",
    "metaDescriptionUr": "اخوت فاؤنڈیشن کا بلا سود قرضہ آن لائن اور برانچ فارم۔ 50,000 سے 5 لاکھ روپے تک بلا سود کاروبار اور مکان کی تعمیر۔",
    "directAnswerEn": "Akhuwat Islamic Microfinance provides 100% interest-free personal and business loans from PKR 50,000 up to PKR 500,000 (5 Lakhs) with repayment terms of 1 to 3 years. Applications are processed through local community branches and affiliated mosques without requiring any collateral or interest charges.",
    "directAnswerUr": "اخوت اسلامی مائیکرو فنانس 50,000 سے 5 لاکھ روپے تک بلا سود کاروباری و ذاتی قرضے فراہم کرتی ہے۔ واپسی کی مدت 1 سے 3 سال ہے اور درخواستیں قریبی اخوت برانچ یا جامع مسجد کے ذریعے بغیر کسی سود یا ضمانتی جائیداد کے جمع ہوتی ہیں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "Akhuwat Islamic Microfinance",
      "url": "https://akhuwat.org.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Microfinance Assistance Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Micro-Enterprise Business Loan",
        "serviceUr": "چھوٹا کاروباری قرضہ",
        "normal": "PKR 50,000 - 150,000",
        "urgent": "0% Interest (Qarz-e-Hasna)",
        "executive": "PKR 3,500 - 8,000 / mo",
        "validity": "12 to 24 Months"
      },
      {
        "serviceEn": "Small Business Expansion Loan",
        "serviceUr": "کاروبار وسعت قرضہ",
        "normal": "PKR 150,000 - 500,000",
        "urgent": "0% Interest (Qarz-e-Hasna)",
        "executive": "PKR 10,000 - 20,000 / mo",
        "validity": "24 to 36 Months"
      },
      {
        "serviceEn": "Application & Verification Fee",
        "serviceUr": "درخواست و تصدیق فیس",
        "normal": "PKR 200 (Form & Processing)",
        "urgent": "No Hidden Commission",
        "executive": "Direct Cash / Pay Order",
        "validity": "One-time"
      },
      {
        "serviceEn": "Family Emergency / Health Support",
        "serviceUr": "ہنگامی طبی و گھریلو امداد",
        "normal": "PKR 25,000 - 75,000",
        "urgent": "Fast-Track Approval",
        "executive": "Flexible Repayment",
        "validity": "12 Months"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Locate Nearest Akhuwat Branch / Center",
        "titleUr": "قریبی اخوت برانچ یا مسجد سنٹر تلاش کریں",
        "detailEn": "Find your designated neighborhood branch through akhuwat.org.pk or visit your local union council central mosque on application days.",
        "detailUr": "ویب سائٹ akhuwat.org.pk سے قریبی برانچ یا جامع مسجد سنٹر کا پتہ حاصل کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Obtain Application Form & Business Plan",
        "titleUr": "درخواست فارم اور بزنس پلان حاصل کریں",
        "detailEn": "Collect the standard loan application form (PKR 200 processing fee) and outline your proposed shop, stall, or craft enterprise.",
        "detailUr": "اخوت برانچ سے فارم حاصل کر کے اپنے مجوزہ کاروبار یا دکان کی تفصیل درج کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Arrange Two Community Guarantors",
        "titleUr": "دو مقامی ضامنوں (گارنٹرز) کے شناختی کارڈ",
        "detailEn": "Provide CNIC copies and contact numbers of two respectable community neighbors or business colleagues who vouch for your integrity.",
        "detailUr": "محلے کے دو معزز یا بااعتماد افراد کے شناختی کارڈ بطور ضامن فراہم کریں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Field Inquiry & Household Inspection",
        "titleUr": "فیلڈ آفیسر کا گھریلو و دکان معائنہ",
        "detailEn": "An Akhuwat loan officer visits your residence and workspace to assess actual family living conditions, cash flow, and viability.",
        "detailUr": "اخوت کا نمائندہ آپ کے گھر اور کاروبار کی جگہ آ کر معاشی حالات کا جائزہ لے گا۔"
      },
      {
        "stepNumber": 5,
        "titleEn": "Loan Approval Committee Evaluation",
        "titleUr": "قرضہ منظوری کمیٹی کی حتمی جانچ",
        "detailEn": "The community advisory committee reviews your file in weekly meetings to ensure deserving allocation without political favoritism.",
        "detailUr": "مقامی مشاورتی کمیٹی درخواست کا جائزہ لے کر بلا سود فنڈز کی منظوری دے گی۔"
      },
      {
        "stepNumber": 6,
        "titleEn": "Disbursement Gathering at Local Mosque",
        "titleUr": "جامع مسجد میں چیک کا باوقار اجراء",
        "detailEn": "Attend the dignified community cheque distribution ceremony held inside the local mosque or community hall to receive your crossed cheque.",
        "detailUr": "مقامی مسجد یا سنٹر میں ہونے والی تقریب میں چیک وصول کر کے اپنے بینک میں جمع کروائیں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Does Akhuwat charge any interest, profit rate, or hidden penalty?",
        "questionUr": "کیا اخوت کوئی سود، منافع یا پوشیدہ چارجز لیتی ہے؟",
        "answerEn": "No. Akhuwat operates strictly on the Islamic principle of Qarz-e-Hasna (benevolent interest-free loans). You only return the exact principal amount borrowed. No processing commission or late payment interest is charged.",
        "answerUr": "نہیں! اخوت قرض حسنہ کے اصول پر کام کرتی ہے، آپ کو صرف اصل رقم واپس کرنی ہوتی ہے اور کوئی سود یا جرمانہ نہیں لیا جاتا۔"
      },
      {
        "questionEn": "Who can act as a guarantor for an Akhuwat loan?",
        "questionUr": "اخوت لون کے لیے کون ضامن بن سکتا ہے؟",
        "answerEn": "Any adult Pakistani citizen holding a valid CNIC residing in the same locality who is not an immediate dependent (such as a neighbor, shopkeeper, teacher, or relative) can serve as a guarantor.",
        "answerUr": "اسی محلے کا کوئی بھی بالغ رہائشی، دکاندار، استاد یا معزز شہری جس کے پاس شناختی کارڈ ہو، ضامن بن سکتا ہے۔"
      },
      {
        "questionEn": "Can women apply for Akhuwat business loans?",
        "questionUr": "کیا خواتین اخوت لون کے لیے اپلائی کر سکتی ہیں؟",
        "answerEn": "Yes. In fact, over 40% of Akhuwat beneficiaries are female entrepreneurs running home-based stitching, culinary, handicraft, and livestock ventures.",
        "answerUr": "جی ہاں! اخوت کے 40 فیصد سے زائد قرضے خواتین کے گھریلو کاروبار، سلائی کڑھائی اور لائیو سٹاک کے لیے دیے جاتے ہیں۔"
      },
      {
        "questionEn": "What happens if a borrower passes away before completing loan repayment?",
        "questionUr": "اگر قرض کی واپسی سے پہلے مقروض کا انتقال ہو جائے تو کیا ہوتا ہے؟",
        "answerEn": "Under Akhuwat's Takaful (Mutual Support) policy, the entire remaining loan balance is completely written off upon submission of the Union Council Death Certificate. The deceased family is not burdened with recovery, and funeral support may be extended.",
        "answerUr": "اخوت کے تکافل فنڈ کے تحت متوفی کا تمام بقایا قرضہ مکمل معاف کر دیا جاتا ہے اور ورثاء پر کوئی بوجھ نہیں ڈالا جاتا۔"
      }
    ],
    "contentEn": "## About Akhuwat Islamic Microfinance\nFounded in 2001 by Dr. Muhammad Amjad Saqib, **Akhuwat Islamic Microfinance (AIM)** is the world's largest interest-free micro-credit organization. With over 800+ branches across Pakistan, Akhuwat has disbursed billions of rupees in benevolent loans (*Qarz-e-Hasna*) to empower underprivileged entrepreneurs, artisans, and women.\n\nUnlike conventional microfinance banks that charge 30% to 45% annual interest, Akhuwat's operational model relies on Islamic brotherhood, utilizing mosques and community centers to keep administrative overhead exceptionally low.\n\n---\n\n## Types of Akhuwat Interest-Free Loans in 2026\n\n| Category | Loan Amount | Typical Purpose | Repayment Window |\n| :--- | :--- | :--- | :--- |\n| **Family Enterprise Loan** | PKR 50,000 to PKR 150,000 | Grocery shop, fruit/vegetable cart, tailoring, auto-rickshaw | 12 to 24 Months |\n| **Agriculture Loan** | PKR 50,000 to PKR 200,000 | Certified seeds, urea fertilizers, tube-well solar repair | 6 to 12 Months (Crop-Linked) |\n| **Liberation Loan** | PKR 30,000 to PKR 100,000 | Paying off predatory money-lenders & illegal loan sharks | 12 to 18 Months |\n| **Housing Support Loan** | PKR 100,000 to PKR 500,000 | Room extension, roof replacement, sanitary drainage | 24 to 36 Months |\n| **Education Loan** | PKR 25,000 to PKR 150,000 | University semester fees, professional certifications | 12 to 24 Months |\n\n---\n\n## Step-by-Step Approval Protocol & Realities\n- **The Mosque-Centered Disbursement**: Cheques are disbursed in local community gathering spots to uphold public trust and social mutual accountability.\n- **Credit Culture**: Borrowers are encouraged to return installments on the 1st to 10th of every month. Once an initial loan of PKR 50,000 is fully repaid on time, borrowers become eligible to apply for upgraded credit lines up to PKR 150,000 and PKR 500,000.\n\n## The Philosophy of Qarz-e-Hasna & Community Microfinance\n**Akhuwat Islamic Microfinance** operates on a unique model of social collateral, where community bonds, religious integrity, and neighborhood references replace traditional bank mortgages and gold collateral.\n\n---\n\n## Detailed Step-by-Step Field Appraisal Walkthrough\n\n### 1. Initial Assessment at Union Council Mosque\n- Applications are accepted at local branches or community mosques.\n- Applicants complete a simple 2-page Urdu profile detailing family dependents, monthly utility expenses, and previous commercial experience.\n\n### 2. Social Inquiry (Tahqeeqat-e-Ijtimai)\n- Loan officers conduct discrete inquiries with local shopkeepers, neighbors, and teachers regarding the applicant's character, sobriety, and financial integrity.\n- Two local guarantors sign the mutual indemnity deed.\n\n### 3. Business Plan Feasibility (Karobari Jaiza)\n- The loan officer inspects the shop, cart, or workshop.\n- Verifies that projected monthly net profits exceed the proposed monthly repayment installment by at least 2.5x to ensure household financial health.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n---\n\n## Strategic Financial Planning & Credit Score Management for Borrowers\nAcquiring government-subsidized credit or interest-free microfinance is a major financial milestone that requires disciplined cash-flow management to protect your long-term national credit standing.\n\n### 1. Understanding SBP's Electronic Credit Information Bureau (eCIB)\nEvery subsidized loan application is screened against the State Bank of Pakistan's central eCIB database. Maintaining a flawless credit rating is essential:\n- **Timely Installment Clearing**: Always deposit installments at least 48 hours prior to the monthly due date to prevent inter-bank settlement delays from triggering overdue flags.\n- **Credit Card & Overdraft Caution**: Never utilize more than 60% of your sanctioned credit card limit, and clear statement balances in full to maintain prime borrower tier categorization.\n- **Guarantor Responsibility**: Serving as a loan guarantor for a friend or relative makes you legally and financially liable. If the primary borrower defaults, your own eCIB record is flagged, blocking your future personal loan and mortgage applications.\n\n### 2. Business Cash Flow Allocation for Micro-Enterprises\n- **Separating Personal & Business Wallets**: Never mix household grocery expenses with daily shop sales revenue. Maintain a separate digital ledger book (Khata) to track inventory turnarounds.\n- **Emergency Reserve Fund**: Re-invest at least 20% of net monthly business profits into an emergency liquidity reserve to cushion against seasonal market slumps and inflation.\n\n---\n\n## Legal Rights & Consumer Protection for Subsidized Borrowers\nUnder State Bank of Pakistan Consumer Protection Regulations:\n- **Transparent Amortization Schedules**: Banks must provide a full printed repayment schedule displaying principal breakdown, payment dates, and zero hidden penalty clauses.\n- **No Early Repayment Penalties**: For subsidized youth and housing schemes, borrowers can make partial or full early lump-sum settlements with zero prepayment penalties.\n- **Harassment Prohibition**: Bank recovery officers are strictly barred by law from contacting borrowers before 9:00 AM or after 7:00 PM, or visiting family residences without prior written appointment notices.",
    "contentUr": "## اخوت اسلامی مائیکرو فنانس کے بارے میں\nاخوت پاکستان کا سب سے بڑا **بلا سود قرض حسنہ پورٹل** ہے جو غریب اور خود دار شہریوں کو اپنے پاؤں پر کھڑا ہونے کے لیے 50 ہزار سے 5 لاکھ روپے تک کا سرمایہ فراہم کرتا ہے۔\n\nاس نظام میں کوئی بینک سود، پروسیسنگ کٹوتی یا چھپے ہوئے اخراجات شامل نہیں ہوتے۔",
    "relatedSlugs": [
      "/loans/asaan-karobar-scheme",
      "/loans/apni-chhat-apna-ghar"
    ]
  },
  "hbfc-ghar-pakistan-housing-loan": {
    "slug": "hbfc-ghar-pakistan-housing-loan",
    "fullPath": "/loans/hbfc-ghar-pakistan-housing-loan",
    "categoryId": "loans",
    "titleEn": "HBFC Ghar Pakistan Housing Scheme 2026: Home Construction Loan",
    "titleUr": "ایچ بی ایف سی (HBFC) گھر پاکستان ہاؤسنگ لون 2026",
    "metaDescriptionEn": "Apply for House Building Finance Company (HBFC) Ghar Pakistan Scheme up to PKR 4.5 Million. Subsidized mortgage financing, monthly installment calculator, and forms.",
    "metaDescriptionUr": "ہاؤس بلڈنگ فنانس کارپوریشن کے تحت 45 لاکھ روپے تک کا ہاؤسنگ فنانسنگ قرضہ اور ماہانہ اقساط۔",
    "directAnswerEn": "The HBFC Ghar Pakistan Housing Scheme 2026 provides home purchase and construction financing up to PKR 4,500,000 (45 Lakhs) for salaried and self-employed citizens with flexible repayment terms up to 20 years at subsidized markup rates.",
    "directAnswerUr": "ہاؤس بلڈنگ فنانس کمپنی (HBFC) گھر پاکستان سکیم کے تحت 45 لاکھ روپے تک گھر کی تعمیر اور خریداری کے لیے قرضہ فراہم کرتی ہے۔ واپسی کی مدت 20 سال تک ہے اور مارک اپ ریٹ رعایتی بنیادوں پر مقرر ہے۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "House Building Finance Company Portal",
      "url": "https://hbfc.com.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Mortgage Services Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Home Construction / Purchase Loan",
        "serviceUr": "گھر کی تعمیر و خریداری لون",
        "normal": "Up to PKR 4,500,000",
        "urgent": "1-Year KIBOR + Spread",
        "executive": "Tenure: 3 to 20 Years",
        "validity": "Up to 70% Property Value"
      },
      {
        "serviceEn": "Home Renovation / Extension",
        "serviceUr": "گھر کی توسیع و تزئین و آرائش",
        "normal": "Up to PKR 2,000,000",
        "urgent": "Reduced Markup",
        "executive": "Tenure: 1 to 10 Years",
        "validity": "Existing Property"
      },
      {
        "serviceEn": "Application Processing & Valuation Fee",
        "serviceUr": "درخواست و پراپرٹی ویلیوایشن فیس",
        "normal": "Standard HBFC Schedule",
        "urgent": "PBA Approved Evaluator",
        "executive": "Direct Legal Search Report",
        "validity": "One-time"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Locate Nearest HBFC Regional Branch",
        "titleUr": "قریبی ایچ بی ایف سی برانچ سے رابطہ کریں",
        "detailEn": "Visit any of HBFC's 50+ branches across Pakistan or download the Ghar Pakistan application kit from hbfc.com.pk.",
        "detailUr": "ملک بھر میں موجود ایچ بی ایف سی برانچ جائیں یا ویب سائٹ سے فارم ڈاؤن لوڈ کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Submit Property Title & Income Proof",
        "titleUr": "جائیداد دستاویزات اور آمدن کا ثبوت جمع کروائیں",
        "detailEn": "Provide registered Sale Deed, Allotment Order, TMA approved building map, salary slips (for salaried) or 1-year bank statement with tax returns (for businesspersons).",
        "detailUr": "رجسٹرڈ بیع نامہ، بلڈنگ پلان، تنخواہ کی سلپ اور 1 سالہ بینک سٹیٹمنٹ جمع کروائیں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Legal Search & Technical Valuation",
        "titleUr": "قانونی معائنہ اور پراپرٹی ویلیوایشن",
        "detailEn": "HBFC's approved legal advisor conducts a 30-year title search and an evaluator visits the plot to assess fair market valuation.",
        "detailUr": "ایچ بی ایف سی کا وکیل اراضی کا قانونی معائنہ اور ویلیوئیٹر پلاٹ کی قیمت کا تعین کرے گا۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Sanction Letter & Mortgage Registration",
        "titleUr": "لون منظوری اور مارگیج ڈیڈ کا اندراج",
        "detailEn": "Upon clearance, sign the formal loan sanction agreement and execute the mortgage deed at the sub-registrar office.",
        "detailUr": "منظوری کے بعد سب رجسٹرار آفس میں مارگیج رجسٹری درج کروائیں۔"
      },
      {
        "stepNumber": 5,
        "titleEn": "Disbursement in Construction Milestones",
        "titleUr": "قسط وار ادائیگی کی وصولی",
        "detailEn": "Funds are credited to your bank account in milestone tranches to fund actual foundation, structure, and finishing stages.",
        "detailUr": "رقم تعمیراتی مراحل کے مطابق براہ راست آپ کے اکاؤنٹ میں منتقل کر دی جائے گی۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Who is eligible for HBFC Ghar Pakistan Scheme?",
        "questionUr": "ایچ بی ایف سی سکیم کے لیے کون اہل ہے؟",
        "answerEn": "All Pakistani citizens holding valid CNIC/NICOP aged 21 to 60 (salaried) or 65 (businessmen) with verified monthly disposable income above PKR 35,000 qualify.",
        "answerUr": "21 سے 60 سال کے ملازمین یا 65 سال کے تاجر جن کی ماہانہ آمدنی 35 ہزار روپے سے زیادہ ہو، اہل ہیں۔"
      },
      {
        "questionEn": "What is the maximum financing ratio (LTV)?",
        "questionUr": "پلاٹ یا گھر کی قیمت کا کتنے فیصد لون ملتا ہے؟",
        "answerEn": "HBFC finances up to 70% of the evaluated property value for home construction and up to 60% for home renovation.",
        "answerUr": "گھر کی تعمیر کے لیے جائیداد کی قیمت کا 70 فیصد اور مرمت کے لیے 60 فیصد تک لون ملتا ہے۔"
      },
      {
        "questionEn": "Can overseas Pakistanis apply for HBFC housing finance?",
        "questionUr": "کیا اوورسیز پاکستانی HBFC ہاؤسنگ لون لے سکتے ہیں؟",
        "answerEn": "Yes. Non-Resident Pakistanis (NRPs) with valid NICOP and verifiable foreign employment contracts sending remittances through Roshan Digital Accounts (RDA) or regular banking channels qualify for HBFC Ghar Pakistan financing.",
        "answerUr": "جی ہاں! اوورسیز پاکستانی نائیکوپ اور تصدیق شدہ بینک ترسیلات کے ذریعے گھر کی تعمیر کے لیے لون لے سکتے ہیں۔"
      }
    ],
    "contentEn": "## HBFC Ghar Pakistan Housing Loan Guide 2026\nThe **House Building Finance Company (HBFC)** is Pakistan's premier state-backed specialized housing finance institution. The **Ghar Pakistan Scheme** is specifically tailored for low-and-middle-income segments who want long-term, predictable housing finance spanning up to **20 years**.\n\n---\n\n## Key Benefits of HBFC Financing\n- **Longest Repayment Horizon**: Flexible tenure from 3 to 20 years ensures monthly installments remain low and manageable.\n- **Early Settlement Option**: Borrowers can make partial pre-payments or settle the entire outstanding balance early with minimal prepayment charges.\n- **Both Salaried and Non-Salaried Welcome**: Business owners, shopkeepers, and overseas Pakistanis with verifiable remittances are fully eligible.\n\n## HBFC Property Title Verification & Legal Clearance Matrix\nHBFC enforces thorough title search protocols to ensure home buyers and builders invest in 100% litigation-free properties:\n- **30-Year Search Report**: Verification at the local Sub-Registrar / Revenue Record room to confirm chain of ownership.\n- **NEC (Non-Encumbrance Certificate)**: Confirms the property is not pledged, mortgaged, or attached in any banking court.\n- **Approved Building Plan (NOC)**: Clear architectural and structural NOC from the relevant development authority (LDA, CDA, KDA, RDA, FDA, or TMA).\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## House Building Finance Company (HBFC) Low-Cost Mortgage Manual 2026\n**HBFC** is Pakistan's premier state-owned specialized housing finance institution, established in 1952 to provide affordable home construction and purchase financing across all provinces.\n\n### 1. Detailed Loan Features & Amortization Options\n- **Loan Amount**: Up to PKR 4,500,000 (45 Lakhs) for home purchase / construction; up to PKR 2,000,000 for renovation.\n- **Tenure Flexibility**: 3 to 20 years with equal monthly installments designed to match disposable household earnings.\n- **Property Loan-to-Value (LTV)**: Financing up to 70% of the evaluated property cost with a minimum 30% borrower equity contribution.\n\n---\n\n## Strategic Financial Planning & Credit Score Management for Borrowers\nAcquiring government-subsidized credit or interest-free microfinance is a major financial milestone that requires disciplined cash-flow management to protect your long-term national credit standing.\n\n### 1. Understanding SBP's Electronic Credit Information Bureau (eCIB)\nEvery subsidized loan application is screened against the State Bank of Pakistan's central eCIB database. Maintaining a flawless credit rating is essential:\n- **Timely Installment Clearing**: Always deposit installments at least 48 hours prior to the monthly due date to prevent inter-bank settlement delays from triggering overdue flags.\n- **Credit Card & Overdraft Caution**: Never utilize more than 60% of your sanctioned credit card limit, and clear statement balances in full to maintain prime borrower tier categorization.\n- **Guarantor Responsibility**: Serving as a loan guarantor for a friend or relative makes you legally and financially liable. If the primary borrower defaults, your own eCIB record is flagged, blocking your future personal loan and mortgage applications.\n\n### 2. Business Cash Flow Allocation for Micro-Enterprises\n- **Separating Personal & Business Wallets**: Never mix household grocery expenses with daily shop sales revenue. Maintain a separate digital ledger book (Khata) to track inventory turnarounds.\n- **Emergency Reserve Fund**: Re-invest at least 20% of net monthly business profits into an emergency liquidity reserve to cushion against seasonal market slumps and inflation.\n\n---\n\n## Legal Rights & Consumer Protection for Subsidized Borrowers\nUnder State Bank of Pakistan Consumer Protection Regulations:\n- **Transparent Amortization Schedules**: Banks must provide a full printed repayment schedule displaying principal breakdown, payment dates, and zero hidden penalty clauses.\n- **No Early Repayment Penalties**: For subsidized youth and housing schemes, borrowers can make partial or full early lump-sum settlements with zero prepayment penalties.\n- **Harassment Prohibition**: Bank recovery officers are strictly barred by law from contacting borrowers before 9:00 AM or after 7:00 PM, or visiting family residences without prior written appointment notices.",
    "contentUr": "## ایچ بی ایف سی گھر پاکستان ہاؤسنگ سکیم 2026\nہاؤس بلڈنگ فنانس کمپنی حکومت پاکستان کا مستند ادارہ ہے جو 20 سال تک کی طویل مدت کے لیے ہاؤسنگ فنانسنگ فراہم کرتا ہے۔\n\nاس سکیم کے ذریعے 45 لاکھ روپے تک قرضہ لے کر اپنی زمین پر نیا گھر تعمیر کیا جا سکتا ہے۔",
    "relatedSlugs": [
      "/loans/apni-chhat-apna-ghar",
      "/loans/mera-ghar-mera-ashiana"
    ]
  },
  "benazir-nashonuma-program-guide": {
    "slug": "benazir-nashonuma-program-guide",
    "fullPath": "/welfare/benazir-nashonuma-program-guide",
    "categoryId": "welfare",
    "titleEn": "Benazir Nashonuma Program 2026: PKR 2,500 Monthly Cash & Food Support",
    "titleUr": "بے نظیر نشوونما پروگرام 2026: 2500 روپے ماہانہ وظیفہ و ہیلتھ گائیڈ",
    "metaDescriptionEn": "Benazir Nashonuma Program eligibility, registration at Tehsil Nashonuma Centers, PKR 2,000 (boy) / PKR 2,500 (girl) monthly stipend for pregnant mothers & infants.",
    "metaDescriptionUr": "حاملہ خواتین اور 2 سال سے کم عمر بچوں کے لیے بے نظیر نشوونما 2500 روپے ماہانہ وظیفہ اور مفت غذائی پیکٹ۔",
    "directAnswerEn": "Benazir Nashonuma Program provides specialized health and cash support for pregnant & lactating mothers and infants under 2 years. Beneficiaries receive PKR 2,000 monthly for a boy child and PKR 2,500 monthly for a girl child, along with free specialized nutritious food packets at DHQ/THQ Nashonuma Centers.",
    "directAnswerUr": "بے نظیر نشوونما پروگرام کے تحت حاملہ خواتین اور 2 سال تک کے بچوں کی ماؤں کو لڑکے کی پیدائش پر 2000 اور لڑکی پر 2500 روپے ماہانہ ملتے ہیں۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "BISP Nashonuma Directorate",
      "url": "https://bisp.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Maternal Health & Welfare Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Monthly Girl Child Cash Grant",
        "serviceUr": "لڑکی کی پیدائش پر ماہانہ وظیفہ",
        "normal": "PKR 2,500 / month",
        "urgent": "DHQ Nashonuma Center",
        "executive": "100% FREE"
      },
      {
        "serviceEn": "Monthly Boy Child Cash Grant",
        "serviceUr": "لڑکے کی پیدائش پر ماہانہ وظیفہ",
        "normal": "PKR 2,000 / month",
        "urgent": "DHQ Nashonuma Center",
        "executive": "100% FREE"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Visit DHQ / THQ Hospital Nashonuma Desk",
        "titleUr": "ہسپتال کے بے نظیر نشوونما ڈیسک پر جائیں",
        "detailEn": "Bring original CNIC and pregnancy immunisation card to closest Nashonuma Center.",
        "detailUr": "اصل شناختی کارڈ لے کر قریبی سرکاری ہسپتال کے نشوونما سینٹر جائیں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Who can register for Benazir Nashonuma Program?",
        "questionUr": "بے نظیر نشوونما پروگرام میں کون رجسٹر ہو سکتا ہے؟",
        "answerEn": "BISP Kafaalat beneficiary mothers who are pregnant or have infants under 24 months.",
        "answerUr": "بی آئی ایس پی کی اہلیت رکھنے والی حاملہ خواتین اور 2 سال سے چھوٹے بچے کی مائیں۔"
      }
    ],
    "contentEn": "Complete rules for claiming monthly health cash grants under Benazir Nashonuma initiative.",
    "contentUr": "بچوں کی نشوونما اور ماؤں کی صحت کے لیے 2500 روپے وظیفہ کا گائیڈ۔",
    "relatedSlugs": [
      "/welfare/bisp-eligibility-check-by-cnic",
      "/welfare/taleemi-wazaif"
    ]
  },
  "punjab-himmat-card-registration": {
    "slug": "punjab-himmat-card-registration",
    "fullPath": "/welfare/punjab-himmat-card-registration",
    "categoryId": "welfare",
    "titleEn": "CM Punjab Himmat Card Scheme 2026: 10,500 PKR Quarterly Aid",
    "titleUr": "وزیراعلیٰ پنجاب ہمت کارڈ سکیم 2026: 10,500 روپے سہ ماہی وظیفہ",
    "metaDescriptionEn": "Himmat Card Scheme 2026 online registration at swd.punjab.gov.pk. PKR 10,500 quarterly financial assistance for non-working disabled individuals in Punjab.",
    "metaDescriptionUr": "مخصوص افراد کے لیے وزیراعلیٰ پنجاب ہمت کارڈ 10,500 روپے سہ ماہی امداد اور نادرا معذوری سرٹیفکیٹ کا طریقہ۔",
    "directAnswerEn": "Chief Minister Punjab Himmat Card scheme provides a quarterly financial stipend of PKR 10,500 for non-working certified disabled persons (differently-abled citizens) in Punjab holding a NADRA Special Disability CNIC (with wheel-chair logo). Apply via Social Welfare Department.",
    "directAnswerUr": "پنجاب ہمت کارڈ کے تحت معذور افراد (ویہل چیئر لوگو والے شناختی کارڈ ہولڈرز) کو 10,500 روپے سہ ماہی قسط بینک آف پنجاب کارڈ سے ملتی ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "Punjab Social Welfare Department",
      "url": "https://swd.punjab.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Special Needs Assistance Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Himmat Card Quarterly Stipend",
        "serviceUr": "هپمت کارڈ سہ ماہی وظیفہ",
        "normal": "PKR 10,500 / 3 Months",
        "urgent": "BOP Himmat ATM Card",
        "executive": "100% FREE"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Obtain NADRA Special CNIC with Disability Logo",
        "titleUr": "نادرا معذوری شناختی کارڈ بنوائیں",
        "detailEn": "Visit Social Welfare Board for Medical Disability Certificate and update CNIC at NADRA.",
        "detailUr": "ڈسٹرکٹ میڈیکل بورڈ سے معذوری سرٹیفکیٹ لے کر نادرا سے لوگو والا کارڈ لیں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Where can I collect Himmat Card cash?",
        "questionUr": "ہمت کارڈ کی رقم کہاں سے ملے گی؟",
        "answerEn": "Collect cash via Bank of Punjab (BOP) Himmat ATM Card from any BOP ATM.",
        "answerUr": "بینک آف پنجاب کے اے ٹی ایم کارڈ سے رقم حاصل کریں۔"
      }
    ],
    "contentEn": "CM Punjab Himmat Card scheme eligibility, medical board certification, and ATM card guide.",
    "contentUr": "پنجاب میں معذور افراد کے لیے 10,500 روپے سہ ماہی امداد کا مکمل طریقہ۔",
    "relatedSlugs": [
      "/welfare/bisp-eligibility-check-by-cnic",
      "/welfare/sehat-card-eligibility-check"
    ]
  },
  "kisan-card-punjab-apply-online": {
    "slug": "kisan-card-punjab-apply-online",
    "fullPath": "/welfare/kisan-card-punjab-apply-online",
    "categoryId": "welfare",
    "titleEn": "CM Punjab Kisan Card Scheme 2026: 1.5 Lakh PKR Interest-Free Credit",
    "titleUr": "کسان کارڈ پنجاب 2026: 1.5 لاکھ روپے بلا سود زرعی قرضہ آن لائن فارم",
    "metaDescriptionEn": "Kisan Card Punjab 2026 apply online at kisancard.punjab.gov.pk. PKR 150,000 interest-free agricultural credit per season for seed, fertilizer, and pesticides.",
    "metaDescriptionUr": "وزیراعلیٰ پنجاب کسان کارڈ آن لائن اپلائی، 1.5 لاکھ روپے بلا سود کھاد بیج قرضہ، رجسٹریشن SMS 8070 اور اہلیت۔",
    "directAnswerEn": "Chief Minister Punjab Kisan Card scheme provides PKR 150,000 (1.5 Lakhs) per crop season in interest-free digital credit for farmers owning up to 12.5 acres of land. Use card at registered agro-dealers for purchasing DAP, Urea fertilizer, seeds, and pesticides. Apply by sending CNIC via SMS to 8070 or at kisancard.punjab.gov.pk.",
    "directAnswerUr": "کسان کارڈ کے تحت 12.5 ایکڑ تک کے کسانوں کو 1.5 لاکھ روپے کا بلا سود زرعی قرضہ ملتا ہے تاکہ وہ کھاد اور بیج خرید سکیں۔ 8070 پر ایس ایم ایس بھیجیں۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "Punjab Kisan Card Gateway",
      "url": "https://kisancard.punjab.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Agriculture Welfare Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Kisan Card Crop Credit (1.5 Lakhs)",
        "serviceUr": "زرعی کریڈٹ کارڈ (1.5 لاکھ)",
        "normal": "0% Interest",
        "urgent": "Registered Agro-Dealers",
        "executive": "SMS 8070"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Send CNIC via SMS to 8070",
        "titleUr": "8070 پر شناختی کارڈ بھیجیں",
        "detailEn": "Send your 13-digit CNIC without dashes to 8070 from your registered SIM card.",
        "detailUr": "اپنا شناختی کارڈ نمبر 8070 پر ایس ایم ایس کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "What is the land limit for Kisan Card eligibility?",
        "questionUr": "کسان کارڈ کی اہلیت کے لیے زمین کی کتنی حد ہے؟",
        "answerEn": "Farmers owning up to 12.5 acres of agricultural land registered in PLRA.",
        "answerUr": "12.5 ایکڑ تک زرعی زمین کے مالک تمام کسان اہل ہیں۔"
      }
    ],
    "contentEn": "Official CM Punjab Kisan Card registration rules and fertilizer purchase instructions.",
    "contentUr": "کسان کارڈ کے ذریعے سستی کھاد اور بیج خریدنے کا مکمل گائیڈ۔",
    "relatedSlugs": [
      "/loans/punjab-green-tractor-scheme-2026",
      "/welfare/bisp-eligibility-check-by-cnic"
    ]
  },
  "bisp-nser-survey-center-locations": {
    "slug": "bisp-nser-survey-center-locations",
    "fullPath": "/welfare/bisp-nser-survey-center-locations",
    "categoryId": "welfare",
    "titleEn": "BISP NSER Dynamic Survey Tehsil Centers & In-Person Registration",
    "titleUr": "بی آئی ایس پی (NSER) تحصیل سروے سینٹر لوکیشنز اور بائیو میٹرک 2026",
    "metaDescriptionEn": "Find local BISP Tehsil Registration Desk locations for NSER dynamic survey updates. Required documents, counter timings, token system, and scam protection.",
    "metaDescriptionUr": "تمام اضلاع اور تحصیلوں میں واقع بی آئی ایس پی ڈائنامک سروے دفاتر، ٹائم، ضروری کاغذات اور مفت سروے کا طریقہ۔",
    "directAnswerEn": "To complete or update your family's NSER Dynamic Survey for BISP Kafaalat, visit your local BISP Tehsil Registration Desk operating inside the Assistant Commissioner / Tehsil Office. Bring original female CNIC, children B-Forms, and utility bill. Survey registration is 100% FREE.",
    "directAnswerUr": "بی آئی ایس پی این ایس ای آر سروے کروانے کے لیے اپنی تحصیل میں واقع بی آئی ایس پی دفتر جائیں۔ سروے رجسٹریشن بالکل مفت ہوتی ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "BISP Tehsil Center Directory",
      "url": "https://bisp.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "NSER Survey Operations Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Tehsil NSER Survey Registration",
        "serviceUr": "تحصیل سروے رجسٹریشن",
        "normal": "100% FREE",
        "urgent": "Tehsil Desk Token",
        "executive": "No Charge Ever"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Locate Local Tehsil BISP Office",
        "titleUr": "مقامی تحصیل بی آئی ایس پی دفتر کا پتہ دیکھیں",
        "detailEn": "Visit the BISP Registration Desk situated at your Tehsil Assistant Commissioner Complex.",
        "detailUr": "اپنی تحصیل کے اسسٹنٹ کمشنر کمپلیکس میں بی آئی ایس پی کاؤنٹر جائیں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Should I pay any fee to agents outside the BISP Tehsil center?",
        "questionUr": "کیا بی آئی ایس پی سینٹر کے باہر کسی ایجنٹ کو فیس دینی چاہیے؟",
        "answerEn": "NO! BISP survey is strictly 100% FREE. Report illegal agents immediately to toll-free helpline 0800-26477.",
        "answerUr": "جی نہیں! سروے بالکل مفت ہے، کسی ایجنٹ کو پیسے نہ دیں۔"
      }
    ],
    "contentEn": "Detailed Tehsil desk appointment procedure for BISP NSER survey updates.",
    "contentUr": "بی آئی ایس پی ڈائنامک سروے دفاتر کی لوکیشنز اور ان پرسن بائیو میٹرک۔",
    "relatedSlugs": [
      "/welfare/pser-survey-registration",
      "/welfare/bisp-eligibility-check-by-cnic"
    ]
  },
  "islamabad-traffic-police-echallan": {
    "slug": "islamabad-traffic-police-echallan",
    "fullPath": "/traffic/islamabad-traffic-police-echallan",
    "categoryId": "traffic",
    "titleEn": "Islamabad Traffic Police (ICT) E-Challan Check & DLIMS Guide 2026",
    "titleUr": "اسلام آباد ٹریفک پولیس (ICT) ای چالان و لائسنس گائیڈ 2026",
    "metaDescriptionEn": "Check ICT Islamabad e-challan online by vehicle number, ICT Smart Challan payment via JazzCash/1Link, and Islamabad driving license verification.",
    "metaDescriptionUr": "اسلام آباد کیپیٹل ٹریفک پولیس آن لائن ای چالان چیک، 1Link ایپ سے ادائیگی اور اسلام آباد ڈرائیونگ لائسنس۔",
    "directAnswerEn": "To check and pay Islamabad Traffic Police (ITP) e-challans in 2026, visit islamabadpolice.gov.pk or use the City Islamabad App. Enter your vehicle registration number to view violation details and pay instantly through 1Link, JazzCash, or Easypaisa using the 17-digit PSID code.",
    "directAnswerUr": "اسلام آباد ٹریفک پولیس (ITP) کا ای چالان چیک کرنے کے لیے islamabadpolice.gov.pk یا سٹی اسلام آباد ایپ استعمال کریں۔ گاڑی کا نمبر درج کر کے 17 ہندسوں کے پی ایس آئی ڈی (PSID) پر ایزی پیسہ، جاز کیش یا بینک ایپ سے ادائیگی کریں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "ICT Traffic Police Gateway",
      "url": "https://islamabadtraffic.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Capital Traffic Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "ICT Red Light Jump Violation",
        "serviceUr": "اسلام آباد سگنل کی خلاف ورزی",
        "normal": "PKR 1,000",
        "urgent": "Safe City Cameras",
        "executive": "Auto ANPR Capture",
        "validity": "Instant System Update"
      },
      {
        "serviceEn": "ICT Speed Limit Violation (Srinagar Highway)",
        "serviceUr": "سری نگر ہائی وے اوور سپیڈنگ",
        "normal": "PKR 1,500 - 3,000",
        "urgent": "Radar Speed Guns",
        "executive": "High Speed Penalty",
        "validity": "Instant System Update"
      },
      {
        "serviceEn": "Using Cellphone while Driving",
        "serviceUr": "دوران ڈرائیونگ موبائل کا استعمال",
        "normal": "PKR 1,000",
        "urgent": "Camera Capture",
        "executive": "Points Penalty",
        "validity": "Instant System Update"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Open City Islamabad Mobile App",
        "titleUr": "سٹی اسلام آباد موبائل ایپ کھولیں",
        "detailEn": "Download or open the City Islamabad App published by the ICT Administration.",
        "detailUr": "سٹی اسلام آباد ایپ ڈاؤن لوڈ کر کے کھولیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Select Traffic Police E-Challan Section",
        "titleUr": "ٹریفک پولیس ای چالان کا انتخاب کریں",
        "detailEn": "Navigate to 'E-Police Services' and tap 'Traffic Violation Verification'.",
        "detailUr": "ای پولیس سروسز میں جا کر ٹریفک چالان پر کلک کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Enter Vehicle Plate Number",
        "titleUr": "گاڑی کی رجسٹریشن پلیٹ نمبر درج کریں",
        "detailEn": "Input vehicle letters and digits (e.g. ICT-ABC-1234 or LEA-20-4567).",
        "detailUr": "گاڑی کا مکمل رجسٹریشن نمبر درج کریں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Pay Digitally via 1Link PSID",
        "titleUr": "1Link پی ایس آئی ڈی سے فیس ادا کریں",
        "detailEn": "Use the generated 1Bill PSID code to clear payment instantly through mobile banking.",
        "detailUr": "جنریٹ شدہ پی ایس آئی ڈی سے بینک ایپ کے ذریعے فیس جمع کروائیں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Are non-Islamabad registered vehicles fined by ICT Safe City cameras?",
        "questionUr": "کیا دوسرے صوبوں کی گاڑیوں کا اسلام آباد میں چالان ہوتا ہے؟",
        "answerEn": "Yes. The Safe City AI cameras read registration plates from all provinces (Punjab, Sindh, KPK, Balochistan, AJK). Unpaid challans block motorway entry and result in impoundment at ICT entry checkpoints.",
        "answerUr": "جی ہاں! تمام صوبوں کی نمبر پلیٹس کیمرے میں ریکارڈ ہوتی ہیں اور عدم ادائیگی پر ناکوں پر کارروائی ہوتی ہے۔"
      },
      {
        "questionEn": "How can citizens verify the authenticity of official documents and avoid imposters?",
        "questionUr": "سرکاری دستاویزات کی تصدیق اور جعل سازی سے کیسے بچا جائے؟",
        "answerEn": "Always verify tracking numbers on the official government website ending in .gov.pk or .org.pk. Never share one-time password (OTP) codes or sensitive biometric details with unverified phone callers claiming to represent government helplines.",
        "answerUr": "ہمیشہ .gov.pk ویب سائٹ سے تصدیق کریں اور کسی بھی غیر متعلقہ فون کال پر اپنا او ٹی پی (OTP) یا بائیو میٹرک تفصیلات شیئر نہ کریں۔"
      }
    ],
    "contentEn": "## Islamabad Traffic Police (ITP) Safe City E-Challan 2026\nThe **Islamabad Safe City Project** monitors the federal capital including Srinagar Highway, Islamabad Expressway, Margalla Road, and Murree Road.\n\n## Islamabad Safe City Surveillance Network & Point Penalty System\nThe **Islamabad Traffic Police (ITP)** utilizes 1,800+ optical cameras integrated into the Safe City Command & Control Center in Sector G-11. In addition to monetary fines, violations are logged against the driver's computerized license record.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## Islamabad Traffic Police (ITP) Safe City ANPR Camera & Licensing Operations 2026\nThe federal capital of Pakistan operates a fully integrated **Safe City Traffic Enforcement Network** utilizing 1,800+ optical surveillance cameras across Srinagar Highway, Islamabad Expressway, Margalla Road, Faisal Avenue, and Seventh/Ninth Avenues.\n\n### 1. Point Penalty Deduction System on ICT Driving Licenses\nUnder the Islamabad Motor Vehicle Ordinance, traffic violations incur both monetary fines and negative driving record points:\n- Red Light Violation: 4 Demerit Points + PKR 1,000 Fine.\n- Excessive Over-Speeding: 6 Demerit Points + PKR 1,500 Fine.\n- Driving Under Mobile Phone Distraction: 2 Demerit Points + PKR 1,000 Fine.\n- Accumulating 20 Demerit Points within 12 months results in mandatory 6-month driving license suspension.\n\n---\n\n## Complete Guide to Safe Driving, Demerit Points & Road Safety Laws\nOperating motor vehicles across Pakistan's national highways, urban motorways, and city arteries requires strict compliance with the **National Highway Safety Ordinance (NHSO 2000)** and provincial traffic acts.\n\n### 1. Understanding the Provincial Demerit Points System\nUnder integrated traffic police databases, moving violations carry cumulative demerit points:\n- **Reckless Driving & Overtaking on Blind Curves**: 6 Demerit Points + Impoundment Notice.\n- **Driving Without Valid Insurance / Fitness Certificate**: 4 Demerit Points + Vehicle Fitness Inspection.\n- **Dangerous Loading & Over-Height Cargo (Commercial Pickups)**: 6 Demerit Points + Heavy Commercial Fine.\n- **Failure to Yield to Emergency Ambulances / Fire Brigades**: 8 Demerit Points + Direct License Suspension Hearing.\n\n### 2. Essential Road Trip Vehicle Maintenance Checklist\nBefore embarking on long-distance travel on M-2, M-3, M-5, or N-5:\n- **Tire Tread Depth & Pressure**: Ensure tire tread exceeds 1.6mm depth and tire age does not exceed 5 years. Check cold tire pressure according to manufacturer vehicle door jamb ratings.\n- **Radiator Coolant & Brake Fluid**: Never top up modern aluminum radiators with plain tap water; use certified 50/50 ethylene glycol coolant. Inspect brake fluid reservoir levels and brake pad thickness.\n- **Emergency Kit**: Carry an operational fire extinguisher, reflective breakdown warning triangle, hydraulic jack, spare wheel with proper air pressure, and high-intensity flashlight.\n\n---\n\n## What to Do in Case of a Highway Accident or Breakdown\n1. **Move to Shoulder Lane**: Immediately steer vehicle to the extreme left emergency lane and switch on 4-way hazard hazard flashers.\n2. **Deploy Warning Triangle**: Place the reflective warning triangle 50 meters behind your vehicle to alert oncoming high-speed traffic.\n3. **Dial Motorway Police Helpline 1307**: Call toll-free **1307** from any mobile phone. The National Highways & Motorway Police (NHMP) patrol van will arrive within 10 to 15 minutes to provide free roadside mechanical assistance or safe towing.\n\n---\n\n## Summary of Key Verification Protocols & Citizen Safeguards (2026 Checklist)\nBefore completing any official transaction or submitting financial documents, verify the following baseline procedural benchmarks:\n\n1. **Official Verification Stamps**: Ensure all computer-generated vouchers, receipts, and bank deposit challans bear the official branch cashier stamp and computer transaction sequence number.\n2. **Digital Copy Archival**: Maintain a scanned PDF or photograph of your submitted forms and payment receipts in cloud storage (Google Drive or Dropbox) for at least 5 years.\n3. **Tracking & Timeline Monitoring**: Utilize the official departmental SMS short-code or online portal tracking number to monitor progress weekly. If no update occurs within the stipulated charter timeframe, immediately escalate the case to the departmental grievance officer or relevant provincial ombudsman desk.",
    "contentUr": "## اسلام آباد ٹریفک پولیس (ITP) ای چالان سسٹم 2026\nوفاقی دارالحکومت میں سیف سٹی کیمروں کے ذریعے شفاف ای چالان کا نظام نافذ ہے جس کی آن لائن ادائیگی دستیاب ہے۔",
    "relatedSlugs": [
      "/traffic/e-challan-check-online",
      "/traffic/driving-license-guide"
    ]
  },
  "sindh-driving-license-online-apply": {
    "slug": "sindh-driving-license-online-apply",
    "fullPath": "/traffic/sindh-driving-license-online-apply",
    "categoryId": "traffic",
    "titleEn": "Sindh Driving License Online Guide 2026: DLIMS Karachi & Appointment",
    "titleUr": "سندھ ڈرائیونگ لائسنس آن لائن اپلائی 2026: کراچی DLIMS پورٹل",
    "metaDescriptionEn": "Apply online for Sindh Driving License (Karachi, Hyderabad, Sukkur) via dlims.sindh.gov.pk. Learner permit fee, appointment booking, and license renewal.",
    "metaDescriptionUr": "سندھ پولیس کراچی آن لائن ڈرائیونگ لائسنس لرنر پرمٹ، اپائنٹمنٹ بکنگ اور رینیول فیس کی مکمل معلومات۔",
    "directAnswerEn": "To apply for a Sindh Driving License (Karachi, Hyderabad, Sukkur) in 2026, visit dls.sindhpolice.gov.pk. Book an online appointment at branches like Clifton, Nazimabad, or Korangi. Learner permits are issued same-day for PKR 500, with permanent smart licenses delivered via courier for PKR 1,600-2,400.",
    "directAnswerUr": "سندھ ڈرائیونگ لائسنس (کراچی، حیدرآباد) کے لیے dls.sindhpolice.gov.pk پر اپائنٹمنٹ بک کریں۔ کلفٹن، ناظم آباد یا کورنگی برانچ سے اسی دن لرنر پرمٹ مل جاتا ہے اور ریگولر سمارٹ لائسنس 1600 سے 2400 روپے میں کوریئر کے ذریعے ملتا ہے۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "Sindh Police DLIMS Portal",
      "url": "https://dlims.sindh.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Sindh Licensing Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Motorcycle License (3 Years)",
        "serviceUr": "موٹر سائیکل لائسنس (3 سالہ)",
        "normal": "PKR 1,160",
        "urgent": "PKR 1,860",
        "executive": "Smart Card with Chip",
        "validity": "3 Years"
      },
      {
        "serviceEn": "Motor Car License (3 Years)",
        "serviceUr": "کار لائسنس (3 سالہ)",
        "normal": "PKR 1,660",
        "urgent": "PKR 2,460",
        "executive": "Smart Card with Chip",
        "validity": "3 Years"
      },
      {
        "serviceEn": "Motorcycle + Car Combined (5 Years)",
        "serviceUr": "موٹر سائیکل و کار مشترکہ (5 سالہ)",
        "normal": "PKR 2,460",
        "urgent": "PKR 3,460",
        "executive": "Smart Card with Chip",
        "validity": "5 Years"
      },
      {
        "serviceEn": "Medical Fitness Certificate",
        "serviceUr": "میڈیکل فٹنس سرٹیفکیٹ",
        "normal": "PKR 100 (On-site Doctor)",
        "urgent": "Eye & Color Vision Test",
        "executive": "Official Stamp",
        "validity": "Valid for License"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Book Online Appointment at DLS Sindh",
        "titleUr": "آن لائن ٹوکن اور اپائنٹمنٹ بک کریں",
        "detailEn": "Visit dls.sindhpolice.gov.pk/appointment and choose your nearest branch (Clifton, Nazimabad, Korangi, Baldia, Hyderabad).",
        "detailUr": "ویب سائٹ پر جا کر اپنی قریبی برانچ اور تاریخ کا انتخاب کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Visit Branch with Original CNIC & Medical",
        "titleUr": "اصل شناختی کارڈ اور میڈیکل ٹیسٹ کے ساتھ تشریف لائیں",
        "detailEn": "Arrive 15 minutes before your slot with original CNIC, 2 passport photos, and blood group report. Complete medical test on-site.",
        "detailUr": "اصل شناختی کارڈ اور تصاویر کے ساتھ برانچ جا کر آن سائٹ ڈاکٹر سے میڈیکل مکمل کروائیں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Biometric Fingerprint & Photo Capture",
        "titleUr": "بائیو میٹرک انگلیوں کے نشانات اور تصویر",
        "detailEn": "Complete digital thumbprints, digital signature, and webcam photograph at the automated counter.",
        "detailUr": "کاؤنٹر پر تصویر، ڈیجیٹل دستخط اور انگلیوں کے نشانات درج کروائیں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Sign & Driving Track Test",
        "titleUr": "سائن بورڈ اور پریکٹیکل ڈرائیونگ ٹیسٹ",
        "detailEn": "Pass the road sign test and drive your vehicle through the designated track.",
        "detailUr": "اشاروں کا ٹیسٹ پاس کریں اور گاڑی ٹریک پر چلا کر دکھائیں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Can Karachi residents renew licenses online without visiting branches?",
        "questionUr": "کیا کراچی کے شہری بغیر برانچ جائے لائسنس رینیو کروا سکتے ہیں؟",
        "answerEn": "Yes. Sindh Police operates the 'DLS Sindh Online Renewal' service for non-commercial driving licenses where cards are renewed online and delivered via TCS courier.",
        "answerUr": "جی ہاں! سندھ پولیس کے آن لائن پورٹل سے رینیول کروا کر نیا کارڈ ٹی سی ایس کے ذریعے گھر منگوایا جا سکتا ہے۔"
      },
      {
        "questionEn": "How can citizens verify the authenticity of official documents and avoid imposters?",
        "questionUr": "سرکاری دستاویزات کی تصدیق اور جعل سازی سے کیسے بچا جائے؟",
        "answerEn": "Always verify tracking numbers on the official government website ending in .gov.pk or .org.pk. Never share one-time password (OTP) codes or sensitive biometric details with unverified phone callers claiming to represent government helplines.",
        "answerUr": "ہمیشہ .gov.pk ویب سائٹ سے تصدیق کریں اور کسی بھی غیر متعلقہ فون کال پر اپنا او ٹی پی (OTP) یا بائیو میٹرک تفصیلات شیئر نہ کریں۔"
      }
    ],
    "contentEn": "## Sindh Driving License (DLS) Guide 2026\nThe **Driving License Sindh (DLS)** branch under Sindh Police manages computerized driving licenses across Karachi, Hyderabad, Mirpurkhas, Sukkur, and Larkana.\n\n---\n\n## Major DLS Karachi Branch Locations\n1. **DLS Clifton**: Near 26th Street, Tauheed Commercial Area.\n2. **DLS Nazimabad**: Near Enquiry Office, Nazimabad No. 2.\n3. **DLS Korangi**: Near Brooks Chowrangi, Sector 15.\n4. **DLS Baldia**: Near RCD Highway, Baldia Town.\n\n## Complete Jurisdiction Breakdown for DLS Sindh Branches\n- **Karachi South & East**: DLS Clifton branch handles high-volume appointment quotas with integrated biometric capture.\n- **Karachi Central & West**: DLS Nazimabad and DLS Baldia cater to heavy commercial and two-wheeler licensing.\n- **Interior Sindh**: Regional licensing hubs operate in Hyderabad (Auto Bhan), Sukkur, Larkana, and Mirpurkhas.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n---\n\n## Complete Guide to Safe Driving, Demerit Points & Road Safety Laws\nOperating motor vehicles across Pakistan's national highways, urban motorways, and city arteries requires strict compliance with the **National Highway Safety Ordinance (NHSO 2000)** and provincial traffic acts.\n\n### 1. Understanding the Provincial Demerit Points System\nUnder integrated traffic police databases, moving violations carry cumulative demerit points:\n- **Reckless Driving & Overtaking on Blind Curves**: 6 Demerit Points + Impoundment Notice.\n- **Driving Without Valid Insurance / Fitness Certificate**: 4 Demerit Points + Vehicle Fitness Inspection.\n- **Dangerous Loading & Over-Height Cargo (Commercial Pickups)**: 6 Demerit Points + Heavy Commercial Fine.\n- **Failure to Yield to Emergency Ambulances / Fire Brigades**: 8 Demerit Points + Direct License Suspension Hearing.\n\n### 2. Essential Road Trip Vehicle Maintenance Checklist\nBefore embarking on long-distance travel on M-2, M-3, M-5, or N-5:\n- **Tire Tread Depth & Pressure**: Ensure tire tread exceeds 1.6mm depth and tire age does not exceed 5 years. Check cold tire pressure according to manufacturer vehicle door jamb ratings.\n- **Radiator Coolant & Brake Fluid**: Never top up modern aluminum radiators with plain tap water; use certified 50/50 ethylene glycol coolant. Inspect brake fluid reservoir levels and brake pad thickness.\n- **Emergency Kit**: Carry an operational fire extinguisher, reflective breakdown warning triangle, hydraulic jack, spare wheel with proper air pressure, and high-intensity flashlight.\n\n---\n\n## What to Do in Case of a Highway Accident or Breakdown\n1. **Move to Shoulder Lane**: Immediately steer vehicle to the extreme left emergency lane and switch on 4-way hazard hazard flashers.\n2. **Deploy Warning Triangle**: Place the reflective warning triangle 50 meters behind your vehicle to alert oncoming high-speed traffic.\n3. **Dial Motorway Police Helpline 1307**: Call toll-free **1307** from any mobile phone. The National Highways & Motorway Police (NHMP) patrol van will arrive within 10 to 15 minutes to provide free roadside mechanical assistance or safe towing.\n\n---\n\n## Summary of Key Verification Protocols & Citizen Safeguards (2026 Checklist)\nBefore completing any official transaction or submitting financial documents, verify the following baseline procedural benchmarks:\n\n1. **Official Verification Stamps**: Ensure all computer-generated vouchers, receipts, and bank deposit challans bear the official branch cashier stamp and computer transaction sequence number.\n2. **Digital Copy Archival**: Maintain a scanned PDF or photograph of your submitted forms and payment receipts in cloud storage (Google Drive or Dropbox) for at least 5 years.\n3. **Tracking & Timeline Monitoring**: Utilize the official departmental SMS short-code or online portal tracking number to monitor progress weekly. If no update occurs within the stipulated charter timeframe, immediately escalate the case to the departmental grievance officer or relevant provincial ombudsman desk.",
    "contentUr": "## سندھ ڈرائیونگ لائسنس پورٹل گائیڈ\nکراچی اور سندھ بھر کے شہریوں کے لیے ڈرائیونگ لائسنس کا جدید کمپیوٹرائزڈ نظام جس کے تحت شفاف طریقے سے اسمارٹ کارڈ لائسنس جاری کیے جاتے ہیں۔",
    "relatedSlugs": [
      "/traffic/driving-license-guide",
      "/traffic/token-tax-check"
    ]
  },
  "m-tag-motorway-registration-one-network": {
    "slug": "m-tag-motorway-registration-one-network",
    "fullPath": "/traffic/m-tag-motorway-registration-one-network",
    "categoryId": "traffic",
    "titleEn": "M-Tag Motorway Registration Guide 2026: One Network & Toll Recharge",
    "titleUr": "ایم ٹیگ (M-Tag) موٹروے آن لائن رجسٹریشن اور ریچارج گائیڈ 2026",
    "metaDescriptionEn": "How to get mandatory M-Tag sticker for Motorway travel (M-1, M-2, M-3, M-4, M-5). Toll plaza booth locations, CNIC registration, and One Network app recharge.",
    "metaDescriptionUr": "موٹروے پر سفر کے لیے ایم ٹیگ چسپاں کروانے کا طریقہ، ٹول پلازہ بوتھ، 100 فیصد مفت رجسٹریشن اور آن لائن ریچارج۔",
    "directAnswerEn": "To get an M-Tag for Pakistan Motorways (M-2, M-1, M-3, M-4, M-5, M-9, M-11) in 2026, drive your vehicle to any Motorway Toll Plaza Customer Care Center or Ravi/Thokar Plaza with your CNIC and vehicle Registration Smart Card. M-Tag sticker issuance is 100% free with a mandatory initial toll recharge of PKR 500-1,000.",
    "directAnswerUr": "پاکستان موٹروے پر ایم ٹیگ (M-Tag) لگوانے کے لیے اپنی گاڑی، شناختی کارڈ اور رجسٹریشن اسمارٹ کارڈ لے کر کسی بھی موٹروے ٹول پلازہ کسٹمر سنٹر جائیں۔ ایم ٹیگ اسٹیکر بالکل مفت لگایا جاتا ہے، صرف 500 یا 1000 روپے کا ابتدائی ٹول ریچارج کروانا ہوتا ہے۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "One Network / NHA M-Tag Gateway",
      "url": "https://m-tag.one-network.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Motorway Infrastructure Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "M-Tag RFID Sticker Tag",
        "serviceUr": "ایم ٹیگ آر ایف آئی ڈی اسٹیکر",
        "normal": "100% FREE (Govt Mandated)",
        "urgent": "Installed on Windshield",
        "executive": "Instant Activation",
        "validity": "Lifetime per Vehicle"
      },
      {
        "serviceEn": "Minimum Initial Toll Recharge",
        "serviceUr": "ابتدائی کم از کم ٹول ریچارج",
        "normal": "PKR 500 (Bikes/Small Cars)",
        "urgent": "PKR 1,000 (Sedans/SUVs)",
        "executive": "100% Usable for Tolls",
        "validity": "No Expiry Balance"
      },
      {
        "serviceEn": "Toll Recharge via One Network App / JazzCash",
        "serviceUr": "آن لائن ریچارج فیس",
        "normal": "FREE / Standard 1Link Fee",
        "urgent": "Instant Top-Up",
        "executive": "Auto-Deduct at Toll Plaza",
        "validity": "Instant Balance Update"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Drive to Nearest Motorway Booth or Service Area",
        "titleUr": "قریبی موٹروے ٹول پلازہ کسٹمر سنٹر جائیں",
        "detailEn": "Visit the M-Tag registration center at any major interchange (e.g. Thokar Niaz Baig, Ravi Toll, Islamabad Toll, Peshawar Toll).",
        "detailUr": "کسی بھی بڑے موٹروے انٹرچینج پر قائم ایم ٹیگ سنٹر پر گاڑی لے کر جائیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Present CNIC & Vehicle Smart Card",
        "titleUr": "شناختی کارڈ اور رجسٹریشن کارڈ دکھائیں",
        "detailEn": "Show your original NADRA CNIC and the original Vehicle Registration Smart Card or original Excise Registration Book.",
        "detailUr": "اصل شناختی کارڈ اور گاڑی کا اصل اسمارٹ کارڈ نادرا تصدیق کے لیے پیش کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "RFID Windshield Sticker Installation",
        "titleUr": "گاڑی کی اسکرین پر اسٹیکر تنصیب",
        "detailEn": "A technician scans your vehicle details, cleans the interior top center of your front windshield behind the rearview mirror, and applies the RFID tag.",
        "detailUr": "نمائندہ گاڑی کی فرنٹ اسکرین پر اوپر کی جانب ریڈیو فریکوئنسی اسٹیکر چسپاں کرے گا۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Top-Up Balance via One Network App",
        "titleUr": "ون نیٹ ورک ایپ یا ایزی پیسہ سے بیلنس ڈلوائیں",
        "detailEn": "Recharge balance using the **One Network App**, JazzCash, Easypaisa, or over-the-counter at toll booths.",
        "detailUr": "ایپ یا موبائل اکاؤنٹ سے ایم ٹیگ اکاؤنٹ میں بیلنس ڈلوائیں اور نان اسٹاپ سفر کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Can I enter the Motorway without an active M-Tag?",
        "questionUr": "کیا بغیر ایم ٹیگ موٹروے پر سفر کی اجازت ہے؟",
        "answerEn": "No. Under National Highway Authority (NHA) regulations, M-Tag is strictly mandatory for all vehicles entering M-2 (Lahore-Islamabad), M-11 (Sialkot Motorway), and M-1 (Islamabad-Peshawar). Cash lanes are permanently phased out.",
        "answerUr": "نہیں! موٹروے پر نقد ٹول ٹیکس کی وصولی بند کر دی گئی ہے اور ایم ٹیگ کے بغیر داخلے کی اجازت نہیں ہے۔"
      },
      {
        "questionEn": "How do I check my remaining M-Tag balance via SMS?",
        "questionUr": "ایس ایم ایس کے ذریعے ایم ٹیگ بیلنس کیسے چیک کریں؟",
        "answerEn": "Type **MTAG <space> Vehicle Number** (e.g. MTAG LEA-20-1234) and send it to **9909** from your registered mobile SIM. You will receive an instant reply showing your remaining balance.",
        "answerUr": "اپنے موبائل سے MTAG لکھ کر گاڑی کا نمبر 9909 پر بھیجیں، بیلنس فوری موصول ہو جائے گا۔"
      }
    ],
    "contentEn": "## Motorway M-Tag & One Network System 2026\nThe **M-Tag electronic toll collection (ETC) system**, managed by the **National Highway Authority (NHA)** and **One Network**, provides seamless non-stop electronic toll clearance across Pakistan's entire motorway network.\n\n---\n\n## Supported Motorways with 100% Automated Toll Gates\n- **M-1**: Islamabad to Peshawar Motorway\n- **M-2**: Lahore to Islamabad Motorway\n- **M-3**: Lahore to Abdul Hakeem Motorway\n- **M-4**: Pindi Bhattian to Multan Motorway\n- **M-5**: Multan to Sukkur Motorway\n- **M-9**: Karachi to Hyderabad Motorway\n- **M-11**: Lahore to Sialkot Motorway (LSM)\n- **Swat Expressway**: Colonel Sher Khan to Chakdara Interchange\n\n## Technical Specifications of the RFID M-Tag Windshield Transponder\n- **Operating Frequency**: UHF 860-960 MHz compliant with ISO 18000-6C standard.\n- **Detection Range**: Passive antenna reads vehicle at speeds up to 40 km/h at automated toll gantries.\n- **Placement**: Mounted inside the cabin on the upper windshield behind the rear-view mirror away from metallic tint films.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n---\n\n## Complete Guide to Safe Driving, Demerit Points & Road Safety Laws\nOperating motor vehicles across Pakistan's national highways, urban motorways, and city arteries requires strict compliance with the **National Highway Safety Ordinance (NHSO 2000)** and provincial traffic acts.\n\n### 1. Understanding the Provincial Demerit Points System\nUnder integrated traffic police databases, moving violations carry cumulative demerit points:\n- **Reckless Driving & Overtaking on Blind Curves**: 6 Demerit Points + Impoundment Notice.\n- **Driving Without Valid Insurance / Fitness Certificate**: 4 Demerit Points + Vehicle Fitness Inspection.\n- **Dangerous Loading & Over-Height Cargo (Commercial Pickups)**: 6 Demerit Points + Heavy Commercial Fine.\n- **Failure to Yield to Emergency Ambulances / Fire Brigades**: 8 Demerit Points + Direct License Suspension Hearing.\n\n### 2. Essential Road Trip Vehicle Maintenance Checklist\nBefore embarking on long-distance travel on M-2, M-3, M-5, or N-5:\n- **Tire Tread Depth & Pressure**: Ensure tire tread exceeds 1.6mm depth and tire age does not exceed 5 years. Check cold tire pressure according to manufacturer vehicle door jamb ratings.\n- **Radiator Coolant & Brake Fluid**: Never top up modern aluminum radiators with plain tap water; use certified 50/50 ethylene glycol coolant. Inspect brake fluid reservoir levels and brake pad thickness.\n- **Emergency Kit**: Carry an operational fire extinguisher, reflective breakdown warning triangle, hydraulic jack, spare wheel with proper air pressure, and high-intensity flashlight.\n\n---\n\n## What to Do in Case of a Highway Accident or Breakdown\n1. **Move to Shoulder Lane**: Immediately steer vehicle to the extreme left emergency lane and switch on 4-way hazard hazard flashers.\n2. **Deploy Warning Triangle**: Place the reflective warning triangle 50 meters behind your vehicle to alert oncoming high-speed traffic.\n3. **Dial Motorway Police Helpline 1307**: Call toll-free **1307** from any mobile phone. The National Highways & Motorway Police (NHMP) patrol van will arrive within 10 to 15 minutes to provide free roadside mechanical assistance or safe towing.",
    "contentUr": "## موٹروے ایم ٹیگ اور ون نیٹ ورک گائیڈ 2026\nنیشنل ہائی وے اتھارٹی کے تحت موٹروے پر بلا تعطل اور تیز رفتار سفر کے لیے الیکٹرانک ایم ٹیگ لازمی قرار دیا گیا ہے۔\n\nاس سے ٹول پلازوں پر لمبی قطاروں سے نجات ملتی ہے اور گاڑی خودکار طریقے سے گزر جاتی ہے۔",
    "relatedSlugs": [
      "/traffic/token-tax-check",
      "/traffic/e-challan-check-online"
    ]
  },
  "kpk-excise-vehicle-verification": {
    "slug": "kpk-excise-vehicle-verification",
    "fullPath": "/traffic/kpk-excise-vehicle-verification",
    "categoryId": "traffic",
    "titleEn": "KPK Excise Online Vehicle Verification & Token Tax Guide 2026",
    "titleUr": "کے پی کے (KPK) ایکسائز گاڑیوں کی آن لائن تصدیق و ٹوکن ٹیکس 2026",
    "metaDescriptionEn": "Online vehicle verification for Peshawar & Khyber Pakhtunkhwa vehicles at excise.kp.gov.pk. Zameen Zoya app, token tax payment, and smart card status.",
    "metaDescriptionUr": "پشاور اور کے پی کے کی گاڑیوں کی آن لائن تصدیق، مالک کا نام اور ایکسائز ٹوکن ٹیکس ادا کرنے کا طریقہ۔",
    "directAnswerEn": "To verify vehicle registration and check token tax in Khyber Pakhtunkhwa in 2026, visit kpexcise.gov.pk or download the Zama KP App. Enter your KPK registration number (e.g. Peshawar, Mardan, Abbottabad) to confirm registered owner name, chassis, engine number, and tax clearance status.",
    "directAnswerUr": "خیبر پختونخوا میں گاڑی کی رجسٹریشن اور ٹوکن ٹیکس تصدیق کے لیے kpexcise.gov.pk یا زما کے پی (Zama KP) ایپ استعمال کریں۔ گاڑی کا نمبر درج کر کے مالک کا نام، چیسس نمبر اور ٹوکن ٹیکس ریکارڈ چیک کریں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "KPK Excise & Taxation Portal",
      "url": "https://excise.kp.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "KPK Excise Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "KPK Online Vehicle Verification",
        "serviceUr": "کے پی کے گاڑی آن لائن تصدیق",
        "normal": "100% FREE",
        "urgent": "Instant Web & App",
        "executive": "Official Excise Data",
        "validity": "Live System"
      },
      {
        "serviceEn": "KPK Token Tax Payment via Zama KP",
        "serviceUr": "زما کے پی ایپ سے ٹوکن ٹیکس ادائیگی",
        "normal": "Standard Tax Schedule",
        "urgent": "1Bill Integration",
        "executive": "Digital Receipt",
        "validity": "1 Fiscal Year"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Open Zama KP App or KP Excise Portal",
        "titleUr": "زما کے پی ایپ یا پورٹل کھولیں",
        "detailEn": "Access kpexcise.gov.pk or open the official Zama KP Citizen Portal.",
        "detailUr": "ویب سائٹ kpexcise.gov.pk یا زما کے پی ایپ کھولیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Input District & Registration Number",
        "titleUr": "ضلع اور رجسٹریشن نمبر درج کریں",
        "detailEn": "Select district (Peshawar, Abbottabad, Swat, Mardan) and type your plate digits.",
        "detailUr": "ضلع منتخب کر کے گاڑی کا نمبر درج کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Inspect Ownership & Tax Clearance Status",
        "titleUr": "مالکیت اور ٹیکس کی تفصیلات دیکھیں",
        "detailEn": "Confirm that engine, chassis, and model year match physical vehicle documents before buying.",
        "detailUr": "گاڑی کی تمام دستاویزات اور ٹیکس ریکارڈ کا موازنہ کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Can I pay KPK token tax through mobile banking apps?",
        "questionUr": "کیا کے پی کے کا ٹوکن ٹیکس موبائل بینکنگ سے ادا ہو سکتا ہے؟",
        "answerEn": "Yes. Through the 1Link / 1Bill interface integrated into the Zama KP portal, KPK vehicle taxes can be settled via any Pakistani bank app.",
        "answerUr": "جی ہاں! کسی بھی بینکنگ ایپ یا ایزی پیسہ سے 1Bill کے ذریعے فیس ادا کی جا سکتی ہے۔"
      },
      {
        "questionEn": "How can citizens verify the authenticity of official documents and avoid imposters?",
        "questionUr": "سرکاری دستاویزات کی تصدیق اور جعل سازی سے کیسے بچا جائے؟",
        "answerEn": "Always verify tracking numbers on the official government website ending in .gov.pk or .org.pk. Never share one-time password (OTP) codes or sensitive biometric details with unverified phone callers claiming to represent government helplines.",
        "answerUr": "ہمیشہ .gov.pk ویب سائٹ سے تصدیق کریں اور کسی بھی غیر متعلقہ فون کال پر اپنا او ٹی پی (OTP) یا بائیو میٹرک تفصیلات شیئر نہ کریں۔"
      }
    ],
    "contentEn": "## Khyber Pakhtunkhwa (KP) Vehicle Verification & Excise Guide 2026\nThe **Excise, Taxation & Narcotics Control Department Government of Khyber Pakhtunkhwa** provides digitized vehicle tracking to protect citizens against tampered and non-customs paid (NCP) vehicles.\n\n## Verifying Vehicle Title Legality & Customs Clearance in KPK\nDue to geographical proximity to border regions, verifying non-customs paid (NCP) status vs regular duty-paid status is vital. The **Zama KP App** cross-checks provincial excise registrations against the Federal Board of Revenue (FBR) WeBOC customs database.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## Khyber Pakhtunkhwa (KP) Excise Vehicle Title & Token Tax Enforcement 2026\nThe **Excise, Taxation & Narcotics Control Department Government of Khyber Pakhtunkhwa** oversees vehicle registrations, ownership transfers, and token tax collections across all 35 districts of KP.\n\n### 1. Universal Vehicle Registration & High-Security Number Plates\nKPK issues standardized retro-reflective aluminum number plates with laser-etched provincial seals and tamper-proof security bolts to prevent plate swapping and vehicle theft.\n\n### 2. Verifying Non-Customs Paid (NCP) Status in Malakand Division\nVehicles operating in the PATA (Provincially Administered Tribal Areas) region of Malakand Division have distinct legal tax status. The Zama KP app allows prospective buyers to confirm whether a vehicle is registered for national highway circulation or local restricted use.\n\n---\n\n## Complete Guide to Safe Driving, Demerit Points & Road Safety Laws\nOperating motor vehicles across Pakistan's national highways, urban motorways, and city arteries requires strict compliance with the **National Highway Safety Ordinance (NHSO 2000)** and provincial traffic acts.\n\n### 1. Understanding the Provincial Demerit Points System\nUnder integrated traffic police databases, moving violations carry cumulative demerit points:\n- **Reckless Driving & Overtaking on Blind Curves**: 6 Demerit Points + Impoundment Notice.\n- **Driving Without Valid Insurance / Fitness Certificate**: 4 Demerit Points + Vehicle Fitness Inspection.\n- **Dangerous Loading & Over-Height Cargo (Commercial Pickups)**: 6 Demerit Points + Heavy Commercial Fine.\n- **Failure to Yield to Emergency Ambulances / Fire Brigades**: 8 Demerit Points + Direct License Suspension Hearing.\n\n### 2. Essential Road Trip Vehicle Maintenance Checklist\nBefore embarking on long-distance travel on M-2, M-3, M-5, or N-5:\n- **Tire Tread Depth & Pressure**: Ensure tire tread exceeds 1.6mm depth and tire age does not exceed 5 years. Check cold tire pressure according to manufacturer vehicle door jamb ratings.\n- **Radiator Coolant & Brake Fluid**: Never top up modern aluminum radiators with plain tap water; use certified 50/50 ethylene glycol coolant. Inspect brake fluid reservoir levels and brake pad thickness.\n- **Emergency Kit**: Carry an operational fire extinguisher, reflective breakdown warning triangle, hydraulic jack, spare wheel with proper air pressure, and high-intensity flashlight.\n\n---\n\n## What to Do in Case of a Highway Accident or Breakdown\n1. **Move to Shoulder Lane**: Immediately steer vehicle to the extreme left emergency lane and switch on 4-way hazard hazard flashers.\n2. **Deploy Warning Triangle**: Place the reflective warning triangle 50 meters behind your vehicle to alert oncoming high-speed traffic.\n3. **Dial Motorway Police Helpline 1307**: Call toll-free **1307** from any mobile phone. The National Highways & Motorway Police (NHMP) patrol van will arrive within 10 to 15 minutes to provide free roadside mechanical assistance or safe towing.\n\n---\n\n## Summary of Key Verification Protocols & Citizen Safeguards (2026 Checklist)\nBefore completing any official transaction or submitting financial documents, verify the following baseline procedural benchmarks:\n\n1. **Official Verification Stamps**: Ensure all computer-generated vouchers, receipts, and bank deposit challans bear the official branch cashier stamp and computer transaction sequence number.\n2. **Digital Copy Archival**: Maintain a scanned PDF or photograph of your submitted forms and payment receipts in cloud storage (Google Drive or Dropbox) for at least 5 years.\n3. **Tracking & Timeline Monitoring**: Utilize the official departmental SMS short-code or online portal tracking number to monitor progress weekly. If no update occurs within the stipulated charter timeframe, immediately escalate the case to the departmental grievance officer or relevant provincial ombudsman desk.",
    "contentUr": "## خیبر پختونخوا وہیکل ویریفیکیشن اور ایکسائز گائیڈ 2026\nکے پی کے میں گاڑی کی خرید و فروخت سے قبل اس کی قانونی حیثیت اور ٹیکس کلیئرنس چیک کرنے کا مکمل طریقہ۔",
    "relatedSlugs": [
      "/traffic/token-tax-check",
      "/traffic/vehicle-registration-transfer"
    ]
  },
  "cnic-kaise-banaye": {
    "slug": "cnic-kaise-banaye",
    "fullPath": "/nadra/cnic-kaise-banaye",
    "categoryId": "nadra",
    "titleEn": "How to Apply for New NADRA CNIC in Pakistan (2026 Complete Guide)",
    "titleUr": "نیا نادرا شناختی کارڈ کیسے بنوائیں؟ 2026 کی مکمل اور آسان رہنمائی",
    "metaDescriptionEn": "Complete step-by-step guide to apply for a new NADRA Smart CNIC in Pakistan. Verified 2026 fee table, mandatory document checklist, biometric attestation rules, Pak-ID app, and tracking.",
    "metaDescriptionUr": "نیا نادرا سمارٹ شناختی کارڈ بنوانے کا مکمل طریقہ۔ ضروری دستاویزات، نادرا فیس کا نیا شیڈول، بایومیٹرک تصدیق، ٹوکن اور آن لائن ٹریکنگ کی آسان اور تفصیلی رہنمائی۔",
    "directAnswerEn": "To get a new NADRA Smart CNIC in Pakistan, citizens turning 18 must visit any NADRA Registration Center (NRC). Bring your original B-Form (CRC), original matric certificate or birth certificate, father and mother's original CNICs, and one blood relative for mandatory biometric cross-verification. Normal delivery fee is PKR 750 (31 working days), Urgent is PKR 1,500 (15 working days), and Executive is PKR 2,500 (7 working days).",
    "directAnswerUr": "پاکستان میں نیا سمارٹ شناختی کارڈ (CNIC) بنوانے کے لیے 18 سال کے شہری اپنے اصل بی فارم، میٹرک سرٹیفکیٹ، اور والد و والدہ کے اصل شناختی کارڈ کے ساتھ کسی بھی نادرا رجسٹریشن سینٹر جائیں۔ تصدیق کے لیے خونی رشتہ دار کا ساتھ ہونا لازمی ہے۔ نارمل فیس 750 روپے، ارجنٹ 1500 روپے اور ایگزیکٹو فیس 2500 روپے ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "NADRA Pak-ID Official Portal",
      "url": "https://id.nadra.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "NADRA Documentation Specialist"
    },
    "feeStructure": [
      {
        "serviceEn": "Smart CNIC (First-Time Application)",
        "serviceUr": "سمارٹ شناختی کارڈ (پہلی بار)",
        "normal": "PKR 750 (31 Days)",
        "urgent": "PKR 1,500 (15 Days)",
        "executive": "PKR 2,500 (7 Days)"
      },
      {
        "serviceEn": "Smart CNIC Renewal (Expired Card)",
        "serviceUr": "سمارٹ شناختی کارڈ کی تجدید",
        "normal": "PKR 750 (31 Days)",
        "urgent": "PKR 1,500 (15 Days)",
        "executive": "PKR 2,500 (7 Days)"
      },
      {
        "serviceEn": "Smart CNIC Modification (Data/Address)",
        "serviceUr": "قوائف میں ترمیم / تبدیلی",
        "normal": "PKR 750 (31 Days)",
        "urgent": "PKR 1,500 (15 Days)",
        "executive": "PKR 2,500 (7 Days)"
      },
      {
        "serviceEn": "Duplicate Smart CNIC (Lost/Damaged)",
        "serviceUr": "ڈپلیکیٹ کارڈ (گم شدہ / چوری)",
        "normal": "PKR 750 (31 Days)",
        "urgent": "PKR 1,500 (15 Days)",
        "executive": "PKR 2,500 (7 Days)"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Gather Original Primary Documents",
        "titleUr": "ضروری اصل دستاویزات اکٹھے کریں",
        "detailEn": "Collect your original Union Council Birth Certificate or B-Form (CRC), original Matric certificate (or school leaving certificate displaying date of birth), and original CNICs of both father and mother.",
        "detailUr": "اپنا اصل بی فارم، میٹرک سرٹیفکیٹ اور والد و والدہ کے اصل شناختی کارڈز ساتھ رکھیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Visit NADRA Center & Take Entry Token",
        "titleUr": "نادرا سینٹر جائیں اور ٹوکن حاصل کریں",
        "detailEn": "Arrive early at your nearest NADRA Registration Center (NRC). Show your documents at the entry counter to receive your computerized queue token.",
        "detailUr": "قریبی نادرا سینٹر وقت پر پہنچ کر کاؤنٹر سے کمپیوٹرائزڈ ٹوکن حاصل کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Biometric Capture & Photo Booth",
        "titleUr": "تصویر اور بائیو میٹرک کا مرحلہ",
        "detailEn": "When your token number is called, proceed to the processing counter. The official will take a high-resolution digital photograph, scan all 10 fingerprints, and record your electronic signature.",
        "detailUr": "ٹوکن کال ہونے پر 10 انگلیوں کے نشانات، تازہ تصویر اور ڈیجیٹل دستخط ثبت کروائیں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Blood Relative Biometric Attestation",
        "titleUr": "خونی رشتہ دار کے بائیو میٹرک کی تصدیق",
        "detailEn": "Your physically present blood relative (father, mother, brother, or sister) must place their thumb on the scanner to verify your family tree in the NADRA database.",
        "detailUr": "والدین یا بھائی بہن اپنے فنگر پرنٹ سے نادرا ڈیٹا بیس میں خونی رشتے کی تصدیق کریں گے۔"
      },
      {
        "stepNumber": 5,
        "titleEn": "Data Verification & Fee Slip",
        "titleUr": "قوائف کی جانچ اور فیس کاؤنٹر",
        "detailEn": "Review the printed application draft carefully for any spelling errors in English or Urdu names, date of birth, or address. Pay the fee at the cash counter and retain your 12-digit Tracking Receipt.",
        "detailUr": "پرنٹ شدہ ڈرافٹ پر نام اور تاریخ کی تصدیق کر کے فیس جمع کروائیں اور 12 ہندسوں والی رسید سنبھال کر رکھیں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "What is the minimum age to apply for a CNIC in Pakistan?",
        "questionUr": "پاکستان میں شناختی کارڈ بنوانے کی کم از کم عمر کیا ہے؟",
        "answerEn": "You must be at least 18 years old on the day of application. For individuals under 18 years of age, NADRA issues a Juvenile Card or Child Registration Certificate (B-Form).",
        "answerUr": "سمارٹ شناختی کارڈ بنوانے کے لیے درخواست دہندہ کی عمر کم از کم 18 سال ہونی چاہیے۔ 18 سال سے کم عمر افراد کے لیے بی فارم یا جووینائل کارڈ جاری کیا جاتا ہے۔"
      },
      {
        "questionEn": "Can I apply for a first-time CNIC online through the Pak-ID app?",
        "questionUr": "کیا پہلی بار شناختی کارڈ آن لائن پاک آئی ڈی ایپ سے بن سکتا ہے؟",
        "answerEn": "No. First-time CNIC applicants MUST physically visit a NADRA Registration Center (NRC) because initial biometric records (full 10-finger scans and facial capture) and physical relative attestation are mandatory. Online Pak-ID app processing is reserved for renewals, modifications, and duplicate card requests.",
        "answerUr": "نہیں، پہلی بار شناختی کارڈ بنوانے کے لیے نادرا سینٹر جانا لازمی ہے تاکہ بائیو میٹرک اور فیملی تصدیق ہو سکے۔ آن لائن ایپ صرف تجدید اور ترمیم کے لیے استعمال ہوتی ہے۔"
      },
      {
        "questionEn": "What if my father or mother is deceased? How can I attest my application?",
        "questionUr": "اگر والد یا والدہ وفات پا چکے ہوں تو تصدیق کا کیا طریقہ ہوگا؟",
        "answerEn": "If a parent is deceased, bring their Death Certificate issued by the Union Council along with their original CNIC number. A living blood relative (adult brother, sister, or paternal/maternal grandparent registered in the same family tree) can provide biometric attestation. Alternatively, a Grade-17+ Gazetted Government Officer can attest the printed NADRA application form.",
        "answerUr": "والدین کی وفات کی صورت میں ڈیتھ سرٹیفکیٹ ساتھ لائیں۔ فیملی میں شامل بڑا بھائی، بہن یا گریڈ 17 کا سرکاری افسر نادرا فارم کی تصدیق کر سکتا ہے۔"
      },
      {
        "questionEn": "What is the difference between Normal, Urgent, and Executive CNIC processing?",
        "questionUr": "نارمل، ارجنٹ اور ایگزیکٹو نادرا پروسیسنگ میں کیا فرق ہے؟",
        "answerEn": "The difference lies in fee and delivery timeline: Normal costs PKR 750 and takes 31 working days; Urgent costs PKR 1,500 and takes 15 working days; Executive costs PKR 2,500 and is processed in 7 working days via dedicated executive counters with minimal queue waiting.",
        "answerUr": "فرق فیس اور ترسیل کے وقت کا ہے: نارمل فیس 750 روپے (31 کام کے دن)، ارجنٹ فیس 1500 روپے (15 کام کے دن) اور ایگزیکٹو فیس 2500 روپے (7 کام کے دن) ہے۔"
      },
      {
        "questionEn": "What should I do if my fingerprints fail biometric scanning at the counter?",
        "questionUr": "اگر نادرا سینٹر میں فنگر پرنٹس نہ آ رہے ہوں تو کیا کریں؟",
        "answerEn": "Biometric scan failures are common due to dry skin, manual labor, or age. NADRA staff will apply biometric moisture wipes or try multiple finger angles. If biometric matching continuously fails, NADRA routes the application through physical verification via local police station or Gazetted Officer attestation.",
        "answerUr": "خشک جلد یا عمر کی وجہ سے فنگر پرنٹس واضح نہ ہوں تو عملہ موئسچرائزر استعمال کرتا ہے۔ شدید مسئلے کی صورت میں گزٹڈ افسر یا مقامی تصدیق کے ذریعے فارم پاس کیا جاتا ہے۔"
      }
    ],
    "contentEn": "Turning 18 in Pakistan is a major legal milestone, and getting your Computerized National Identity Card (CNIC) is the very first step toward full civic independence. Your Smart CNIC serves as proof of Pakistani citizenship and is strictly required for opening bank accounts, buying a mobile SIM card, applying for a passport, registering a vehicle, voting in elections, and taking university admission tests.\n\nNADRA (National Database and Registration Authority) handles all national identity processing through state-of-the-art Smart CNICs embedded with biometric microchips. If you are preparing to visit a NADRA Registration Center (NRC) for the first time, this detailed guide covers everything you need to know to ensure a smooth, single-visit experience without counter delays.\n\n## Mandatory Documents Checklist for First-Time CNIC Applicants\n\nBefore heading to your local NADRA office, double-check that you have all required original documents. Bringing incomplete paperwork is the single biggest reason applicants get turned away at the entry counter.\n\n1. **Original Child Registration Certificate (B-Form / CRC)**: This is your primary identity document in NADRA's database. Photocopies are not accepted for initial processing.\n2. **Educational or Birth Proof**: Original Matriculation Certificate, School Leaving Certificate, or Union Council Birth Certificate displaying your exact date of birth and full name.\n3. **Parents' Identity Documents**: Original CNIC/Smart CNIC of both your father and mother. If either parent is deceased, bring their official Union Council Death Certificate.\n4. **Blood Relative for Biometric Attestation**: One blood relative (father, mother, adult brother, or sister) whose CNIC is active in NADRA's records must physically accompany you to the center for live biometric thumb verification.\n\n> **Pro Tip for Fast Processing**: Arrive at the NADRA Registration Center by 8:15 AM. Executive and Mega NADRA centers in cities like Lahore, Karachi, Islamabad, Rawalpindi, Peshawar, and Multan experience peak crowds between 11:00 AM and 2:00 PM. Visiting early morning saves you up to 2 hours of waiting time.\n\n## Step-by-Step NADRA Center Processing Walkthrough\n\nUnderstanding what happens inside the NADRA center helps you feel prepared and prevents silly mistakes during data entry.\n\n### Step 1: Entry Token Allocation\nAt the entrance counter, present your original B-Form and parents' CNICs to the receptionist officer. Once verified, you will be handed a printed computer token number indicating your queue position.\n\n### Step 2: Biometric & Facial Capture Booth\nWhen your token number is displayed on the overhead LED screens, walk over to the assigned counter booth. The NADRA officer will:\n- Capture a high-definition digital photo against a white background (ensure your face is clearly visible, without tinted glasses or heavy shadows).\n- Scan all 10 fingerprints using an optical biometric scanner.\n- Capture your digital signature on a touch tablet stylus pad.\n\n### Step 3: Family Tree Attestation\nYour accompanying blood relative will step forward to place their thumb on the scanner. NADRA's automated database instantly cross-matches their biometric data against your family tree record to verify lineage authenticity.\n\n### Step 4: Data Entry Review & Verification\nThe officer will input your personal information (English spelling of your name, Urdu translation, permanent and current address, blood group, and marital status). \n\n**CRITICAL STEP**: The officer will print a draft application summary. Carefully read every line on this paper. Check that your name spelling matches your Matric certificate exactly. Any error uncorrected at this stage will cost extra money and time to modify later!\n\n### Step 5: Fee Payment & Receipt Collection\nAfter confirming the details, pay the processing fee at the cash counter. You will be handed a printed receipt containing a **12-digit Tracking ID** (e.g. `123456789012`). Keep this receipt safe — you will need it to track card delivery and to collect the physical card.\n\n## Official NADRA Smart CNIC Fee Schedule 2026\n\nNADRA offers three processing tiers depending on how urgently you need your card:\n\n| Processing Category | Official Fee | Processing & Delivery Timeframe | Recommended For |\n| :--- | :--- | :--- | :--- |\n| **Normal Processing** | PKR 750 | 31 Working Days | Standard applicants with no immediate deadline |\n| **Urgent Processing** | PKR 1,500 | 15 Working Days | College admissions & passport applicants |\n| **Executive Processing** | PKR 2,500 | 7 Working Days | Urgent travel, banking, or official job deadlines |\n\n*Source: Confirmed via [NADRA Official Fee Portal](https://id.nadra.gov.pk/).*\n\n## Smart CNIC vs. Old Paper Card: Key Features\n\nAll new identity cards issued by NADRA are **Smart CNICs**. Unlike old paper-laminated cards, the Smart CNIC features:\n- **Embedded Biometric Chip**: Stores 10 fingerprints, facial geometry, and family tree mapping.\n- **ICAO Standard Security**: Multi-layered anti-counterfeiting guilloche patterns and UV ghost images.\n- **Lifetime Durability**: High-grade polycarbonate substrate resistant to heat, water, and bending.\n\n## How to Track Your CNIC Application Status\n\nOnce your application is submitted, you can monitor its printing and courier progress through two convenient methods:\n\n1. **SMS Tracking via 8400**: Send your 12-digit Tracking ID as an SMS to **8400** from any mobile network in Pakistan. You will receive an instant reply showing your application stage (e.g., *In-Process*, *Printed*, or *Dispatched*).\n2. **Online Tracking via Pak-ID**: Visit [id.nadra.gov.pk/tracking](https://id.nadra.gov.pk/) and enter your Tracking ID to view detailed logistics status.\n\nFor any unexpected delays or biometric flags, contact the central NADRA Helpline at **1777** (from mobile) or **051-111-786-100** (from landline).",
    "contentUr": "پاکستان میں 18 سال کی عمر کو پہنچنا ایک اہم قانونی مرحلہ ہے، اور نادرا کا کمپیوٹرائزڈ قومی شناختی کارڈ (CNIC) حاصل کرنا آپ کی شہری شناخت کا پہلا قدم ہے۔ شناختی کارڈ بینک اکاؤنٹ کھولنے، سم کارڈ خریدنے، پاسپورٹ بنوانے، ڈرائیونگ لائسنس، اور ووٹنگ کے لیے بنیادی دستاویز ہے۔\n\nنیشنل ڈیٹا بیس اینڈ رجسٹریشن اتھارٹی (نادرا) سمارٹ کارڈ کے ذریعے شہریوں کا بایومیٹرک ڈیٹا محفوظ کرتی ہے۔ اگر آپ پہلی بار شناختی کارڈ بنوانے نادرا رجسٹریشن سینٹر (NRC) جا رہے ہیں، تو یہ تفصیلی گائیڈ آپ کے لیے تمام معلومات فراہم کرتی ہے۔\n\n## پہلی بار شناختی کارڈ کے لیے ضروری دستاویزات کی فہرست\n\nنادرا سینٹر جانے سے پہلے یہ تمام اصل کاغذات اپنے ساتھ رکھنا لازمی ہے:\n\n1. **اصل بی فارم (چائلڈ رجسٹریشن سرٹیفکیٹ / CRC)**: یہ نادرا ڈیٹا بیس میں آپ کی بنیادی شناخت کی سند ہے۔\n2. **میٹرک سرٹیفکیٹ یا تاریخ پیدائش کا ثبوت**: اصل میٹرک کی سند یا سکول چھوڑنے کا سرٹیفکیٹ جس پر تاریخ پیدائش درج ہو۔\n3. **والدین کے اصل شناختی کارڈز**: والد اور والدہ کے اصل سمارٹ شناختی کارڈز۔ اگر والدین میں سے کوئی وفات پا چکا ہو تو یونین کونسل کا جاری کردہ ڈیتھ سرٹیفکیٹ ساتھ لائیں۔\n4. **خونی رشتہ دار برائے بایومیٹرک تصدیق**: والد، والدہ، سگا بھائی یا سگی بہن میں سے کسی ایک کا نادرا سینٹر میں ساتھ ہونا لازمی ہے تاکہ وہ موقع پر انگوٹھا لگا کر نادرا فیملی ٹری میں آپ کی تصدیق کر سکیں۔\n\n## نادرا سینٹر کا مرحلہ وار طریقہ کار\n\n1. **ٹوکن حاصل کرنا**: سینٹر کے داخلے پر اپنے اصل کاغذات دکھا کر ٹوکن لیں۔\n2. **تصویر اور بایومیٹرک**: ٹوکن نمبر پکارے جانے پر کاؤنٹر پر جائیں جہاں آپ کی تازہ تصویر لی جائے گی اور 10 انگلیوں کے فنگر پرنٹس سکین کیے جائیں گے۔\n3. **خونی رشتہ دار کی تصدیق**: ساتھ آئے والد یا بھائی کا انگوٹھا لگا کر بائیو میٹرک تصدیق کی جائے گی۔\n4. **ڈرافٹ کی جانچ**: عملہ آپ کے قوائف درج کر کے پرنٹ شدہ ڈرافٹ دے گا۔ انگریزی و اردو نام کے ہجوں کو اچھی طرح چیک کریں۔\n5. **فیس کی ادائیگی**: کاؤنٹر پر فیس جمع کروائیں اور 12 ہندسوں کی ٹریکنگ رسید حاصل کریں۔\n\n## نادرا سمارٹ کارڈ فیس شیڈول 2026\n\n| کیٹیگری | سرکاری فیس | پروسیسنگ اور ڈلیوری کا وقت |\n| :--- | :--- | :--- |\n| **نارمل فیس** | 750 روپے | 31 کام کے دن |\n| **ارجنٹ فیس** | 1,500 روپے | 15 کام کے دن |\n| **ایگزیکٹو فیس** | 2,500 روپے | 7 کام کے دن |\n\nآفیشل فیس اور تفصیلات نادرا کے پورٹل [NADRA Official Portal](https://id.nadra.gov.pk/) سے تصدیق شدہ ہیں۔\n\n## ٹریکنگ کا طریقہ\n\nاپنی درخواست کا سٹیٹس جاننے کے لیے اپنی 12 ہندسوں پر مشتمل ٹریکنگ آئی ڈی لکھ کر **8400** پر ایس ایم ایس کریں یا نادرا پاک آئی ڈی پورٹل پر آن لائن چیک کریں۔",
    "relatedSlugs": [
      "/nadra/nadra-card-fee",
      "/nadra/tracking-id",
      "/nadra/b-form-kaise-banaye"
    ]
  },
  "b-form-kaise-banaye": {
    "slug": "b-form-kaise-banaye",
    "fullPath": "/nadra/b-form-kaise-banaye",
    "categoryId": "nadra",
    "titleEn": "NADRA B-Form (CRC) Registration Guide 2026: Documents & Fee",
    "titleUr": "نادرا بی فارم (CRC) بنوانے کا طریقہ، کاغذات اور فیس 2026",
    "metaDescriptionEn": "Complete guide to get a NADRA B-Form (Child Registration Certificate) in Pakistan. Union Council birth certificate prerequisites, official PKR 50 fee, documents, and center process.",
    "metaDescriptionUr": "18 سال سے کم عمر بچوں کا نادرا بی فارم (CRC) بنوانے کی مکمل معلومات۔ یونین کونسل کمپیوٹرائزڈ برتھ سرٹیفکیٹ، نادرا سینٹر کی فیس 50 روپے اور ضروری کاغذات۔",
    "directAnswerEn": "To get a NADRA B-Form (Child Registration Certificate / CRC) for children under 18 in Pakistan, parents must first obtain a Computerized Birth Certificate from their local Union Council or Cantonment Board. Then, visit any NADRA Registration Center with the birth certificate and original CNICs of both parents. Normal processing fee is PKR 50, Executive counter processing is PKR 500.",
    "directAnswerUr": "18 سال سے کم عمر بچوں کا نادرا بی فارم (CRC) بنوانے کے لیے پہلے متعلقہ یونین کونسل یا کینٹ بورڈ سے کمپیوٹرائزڈ برتھ سرٹیفکیٹ حاصل کریں۔ اس کے بعد والدین اپنے اصل شناختی کارڈز اور برتھ سرٹیفکیٹ کے ساتھ نادرا سینٹر جائیں۔ نارمل فیس صرف 50 روپے اور ایگزیکٹو فیس 500 روپے ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "NADRA Official Portal",
      "url": "https://www.nadra.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Civic Documentation Analyst"
    },
    "feeStructure": [
      {
        "serviceEn": "Child Registration Certificate (B-Form Normal)",
        "serviceUr": "بی فارم / چائلڈ رجسٹریشن (نارمل)",
        "normal": "PKR 50 (31 Days)",
        "urgent": "N/A",
        "executive": "PKR 500 (Same Day)"
      },
      {
        "serviceEn": "Juvenile Smart Card (Under 18 Chip Card)",
        "serviceUr": "جووینائل سمارٹ کارڈ (بچوں کا چپ کارڈ)",
        "normal": "PKR 750 (31 Days)",
        "urgent": "PKR 1,500 (15 Days)",
        "executive": "PKR 2,500 (7 Days)"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Register Birth at Local Union Council",
        "titleUr": "یونین کونسل میں بچے کی پیدائش کا اندراج",
        "detailEn": "Register your newborn child at your local Union Council or Cantonment Board to get an official green Computerized Birth Certificate displaying your child's full name in Urdu & English.",
        "detailUr": "پہلے متعلقہ یونین کونسل سے نادرا سے منسلک کمپیوٹرائزڈ برتھ سرٹیفکیٹ حاصل کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Gather Parents' Original Smart CNICs",
        "titleUr": "والدین کے اصل شناختی کارڈز ساتھ رکھیں",
        "detailEn": "Both father and mother must have valid, unexpired NADRA Smart CNICs. If parents are married, their marital status must be updated in NADRA records.",
        "detailUr": "والد اور والدہ کے سمارٹ شناختی کارڈز فعال اور اپڈیٹ ہونے چاہئیں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Visit NADRA Registration Center (NRC)",
        "titleUr": "نادرا سینٹر تشریف لے جائیں",
        "detailEn": "Either father or mother (or legal guardian) visits the NADRA office with the Union Council birth certificate and parents' original CNICs.",
        "detailUr": "والد یا والدہ کمپیوٹرائزڈ برتھ سرٹیفکیٹ اور اصل شناختی کارڈز کے ساتھ نادرا سینٹر جائیں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Data Entry Verification & Printing",
        "titleUr": "ڈیٹا کا اندراج اور پرنٹنگ",
        "detailEn": "The officer enters the child's data. For children under 18, biometric fingerprints are optional unless applying for a Juvenile Smart Card. Verify spellings on the printed draft.",
        "detailUr": "عملہ بچے کے قوائف درج کرے گا۔ ڈرافٹ پر بچے کے نام اور تاریخ پیدائش کی تصدیق کریں۔"
      },
      {
        "stepNumber": 5,
        "titleEn": "Collect B-Form Document",
        "titleUr": "بی فارم وصول کریں",
        "detailEn": "Pay the PKR 50 fee at the counter. For Normal processing, collect the B-Form document on the given date; for Executive counters, get it printed same-day.",
        "detailUr": "کاؤنٹر پر فیس ادا کر کے مقررہ تاریخ پر بی فارم کا پرنٹ حاصل کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "What is the difference between B-Form (CRC) and Juvenile Card?",
        "questionUr": "بی فارم (CRC) اور جووینائل کارڈ میں کیا فرق ہے؟",
        "answerEn": "B-Form is a printed paper certificate listing all minor children of a family (costs PKR 50). A Juvenile Smart Card is an individual chip-embedded card issued to a minor child with their photo and biometrics (costs PKR 750), useful for international travel or bank accounts for minors.",
        "answerUr": "بی فارم ایک کاغذ کی سند ہے جس پر خاندان کے تمام بچوں کے نام ہوتے ہیں (فیس 50 روپے)۔ جووینائل کارڈ بچے کا انفرادی چپ والا کارڈ ہوتا ہے (فیس 750 روپے)۔"
      },
      {
        "questionEn": "Is the physical presence of the child required at NADRA center?",
        "questionUr": "کیا نادرا سینٹر میں بچے کا جسمانی طور پر موجود ہونا لازمی ہے؟",
        "answerEn": "For a regular paper B-Form (CRC), physical presence of newborn babies or young children is NOT required — either parent can process it alone. However, for a Juvenile Smart Card (or children aged 15-17 capturing biometrics), the child must be physically present.",
        "answerUr": "عام بی فارم بنوانے کے لیے شیرخوار اور چھوٹے بچوں کو نادرا سینٹر لے جانا ضروری نہیں، صرف والد یا والدہ جا سکتے ہیں۔"
      },
      {
        "questionEn": "What if parents' marriage is not registered in NADRA records?",
        "questionUr": "اگر والد اور والدہ کی شادی نادرا ریکارڈ میں درج نہ ہو؟",
        "answerEn": "Before applying for a B-Form, the mother's CNIC must show her married name or husband's CNIC number. If not, parents must first update marriage status at NADRA counter by presenting their official Union Council Nikkah Nama.",
        "answerUr": "بی فارم سے پہلے والدہ کے شناختی کارڈ پر شوہر کا نام درج ہونا ضروری ہے۔ اس کے لیے نکاح نامہ دکھا کر نادرا میں شادی کا اندراج کروائیں۔"
      },
      {
        "questionEn": "How can I fix a spelling error in my child's name on B-Form?",
        "questionUr": "بی فارم پر بچے کے نام کے ہجوں کی غلطی کیسے ٹھیک کریں؟",
        "answerEn": "If there is a spelling error, first correct the birth certificate at your local Union Council. Then visit NADRA with the corrected Union Council birth certificate and pay PKR 50 for B-Form modification.",
        "answerUr": "غلطی کی صورت میں پہلے یونین کونسل سے برتھ سرٹیفکیٹ درست کروائیں اور پھر نادرا سینٹر سے 50 روپے فیس کے ساتھ نیا بی فارم بنوائیں۔"
      },
      {
        "questionEn": "What is the fee for adding a new newborn child to an existing B-Form?",
        "questionUr": "موجودہ بی فارم میں نئے پیدا ہونے والے بچے کا نام شامل کرنے کی فیس کیا ہے؟",
        "answerEn": "The fee for modifying or adding a new child to an existing family B-Form is PKR 50 for Normal delivery.",
        "answerUr": "موجودہ بی فارم میں نئے بچے کے نام کا اضافہ کرنے کی نارمل فیس بھی صرف 50 روپے ہے۔"
      }
    ],
    "contentEn": "The Child Registration Certificate (CRC), universally referred to as **B-Form**, is the fundamental legal identity record for every child in Pakistan under 18 years of age. Without a valid B-Form, parents cannot admit children to schools, issue minor passports, register health insurance, or process inheritance rights.\n\nNADRA issues the B-Form directly from its central database, mapping the child directly to the parents' registered family tree.\n\n## Step 1: Essential Prerequisite — Union Council Birth Certificate\n\nBefore visiting any NADRA office, parents must complete birth registration at their local **Union Council (UC)**, **Municipal Committee**, or **Cantonment Board**:\n1. Register the child's birth within 60 days of delivery.\n2. Provide hospital birth slip or midwife report.\n3. Obtain the official green **Computerized Birth Certificate** containing a unique UC tracking barcode and child's name in both Urdu and English.\n\n## Documents Required at NADRA Center\n\nWhen visiting NADRA for B-Form issuance, bring:\n- Original Computerized Birth Certificate from Union Council.\n- Original CNIC / Smart CNIC of Father.\n- Original CNIC / Smart CNIC of Mother.\n- Existing B-Form copy (if adding a younger sibling).\n\n> **Important Marriage Record Rule**: NADRA will NOT issue a B-Form if the mother's CNIC is still registered under her father's name (unmarried status in NADRA records). Ensure marital status is updated beforehand by bringing your official Nikkah Nama to the NADRA counter.\n\n## NADRA B-Form Fee Schedule 2026\n\n| Service Type | Processing Tier | Fee Rate | Delivery Timeframe |\n| :--- | :--- | :--- | :--- |\n| **New B-Form (CRC)** | Normal Delivery | **PKR 50** | 31 Working Days |\n| **New B-Form (CRC)** | Executive Counter | **PKR 500** | Same-Day Printout |\n| **Juvenile Smart Card** | Normal Delivery | **PKR 750** | 31 Working Days |\n| **Juvenile Smart Card** | Executive Delivery | **PKR 2,500** | 7 Working Days |\n\n*Official rates verified via [NADRA Official Department](https://www.nadra.gov.pk/).*",
    "contentUr": "چائلڈ رجسٹریشن سرٹیفکیٹ (CRC) جسے **بی فارم** کہا جاتا ہے، 18 سال سے کم عمر تمام بچوں کی قانونی شناخت کی بنیادی سند ہے۔ سکولوں میں داخلے، بچوں کے پاسپورٹ اور فیملی رجسٹریشن کے لیے بی فارم لازمی ہے۔\n\n## پہلا قدم: یونین کونسل برتھ سرٹیفکیٹ\nنادرا سینٹر جانے سے پہلے اپنی یونین کونسل یا کینٹ بورڈ سے کمپیوٹرائزڈ برتھ سرٹیفکیٹ حاصل کریں:\n1. بچے کی پیدائش کا 60 دن کے اندر اندارج کروائیں۔\n2. ہسپتال کی برتھ سلپ اور والد و والدہ کے شناختی کارڈ دیں۔\n3. بارکوڈ والا کمپیوٹرائزڈ برتھ سرٹیفکیٹ حاصل کریں۔\n\n## نادرا سینٹر کے لیے ضروری کاغذات\n- اصل یونین کونسل برتھ سرٹیفکیٹ۔\n- والد کا اصل سمارٹ شناختی کارڈ۔\n- والدہ کا اصل سمارٹ شناختی کارڈ۔\n\n## فیس کی تفصیلات 2026\n- **نارمل بی فارم**: 50 روپے (31 دن)\n- **ایگزیکٹو بی فارم**: 500 روپے (اسی دن پرنٹ)\n- **جووینائل سمارٹ کارڈ**: 750 روپے",
    "relatedSlugs": [
      "/nadra/cnic-kaise-banaye",
      "/nadra/family-registration-certificate",
      "/nadra/nadra-card-fee"
    ]
  },
  "nadra-card-fee": {
    "slug": "nadra-card-fee",
    "fullPath": "/nadra/nadra-card-fee",
    "categoryId": "nadra",
    "titleEn": "NADRA Card Fee Structure 2026 (CNIC, NICOP, FRC & Renewal Rates)",
    "titleUr": "نادرا کارڈ فیس شیڈول 2026 (شناختی کارڈ، نائیکوپ، فیملی سرٹیفکیٹ)",
    "metaDescriptionEn": "Official NADRA Card Fee Schedule 2026. Verified rates for Smart CNIC, renewal, modification, duplicate card, FRC (PKR 1000), and overseas NICOP Zone A/B tariffs.",
    "metaDescriptionUr": "سال 2026 میں نادرا سمارٹ شناختی کارڈ، تجدید، ترمیم، گم شدہ کارڈ، ایف آر سی اور نائیکوپ کی آفیشل فیسوں کی مکمل اور اپڈیٹ شدہ لسٹ۔",
    "directAnswerEn": "As of 2026, official NADRA Smart CNIC fees are: Normal PKR 750 (31 working days), Urgent PKR 1,500 (15 working days), and Executive PKR 2,500 (7 working days). Family Registration Certificate (FRC) costs PKR 1,000. Overseas NICOP fees range from $20 to $79 USD depending on country zone.",
    "directAnswerUr": "سال 2026 کی نئی نادرا فیس کے مطابق سمارٹ کارڈ: نارمل 750 روپے، ارجنٹ 1500 روپے، اور ایگزیکٹو 2500 روپے ہے۔ فیملی سرٹیفکیٹ (FRC) کی فیس 1000 روپے ہے جبکہ نائیکوپ فیس 20 سے 79 ڈالر ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "NADRA Official Fee Schedule Portal",
      "url": "https://www.nadra.gov.pk/fee-structure/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Financial & Policy Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Smart CNIC (New / First Time)",
        "serviceUr": "سمارٹ کارڈ (پہلی بار)",
        "normal": "PKR 750 (31 Days)",
        "urgent": "PKR 1,500 (15 Days)",
        "executive": "PKR 2,500 (7 Days)"
      },
      {
        "serviceEn": "Smart CNIC (Renewal / Expiry)",
        "serviceUr": "سمارٹ کارڈ (تجدید)",
        "normal": "PKR 750 (31 Days)",
        "urgent": "PKR 1,500 (15 Days)",
        "executive": "PKR 2,500 (7 Days)"
      },
      {
        "serviceEn": "Smart CNIC (Modification / Correction)",
        "serviceUr": "سمارٹ کارڈ (ترمیم / تصحیح)",
        "normal": "PKR 750 (31 Days)",
        "urgent": "PKR 1,500 (15 Days)",
        "executive": "PKR 2,500 (7 Days)"
      },
      {
        "serviceEn": "Duplicate CNIC (Lost / Stolen)",
        "serviceUr": "ڈپلیکیٹ کارڈ (گم شدہ / چوری)",
        "normal": "PKR 750 (31 Days)",
        "urgent": "PKR 1,500 (15 Days)",
        "executive": "PKR 2,500 (7 Days)"
      },
      {
        "serviceEn": "Family Registration Certificate (FRC)",
        "serviceUr": "فیملی سرٹیفکیٹ (FRC)",
        "normal": "PKR 1,000 (Same Day)",
        "urgent": "N/A",
        "executive": "PKR 1,000 (Online PDF)"
      },
      {
        "serviceEn": "NICOP Overseas Card (Zone A Countries)",
        "serviceUr": "نائیکوپ (زون A - امریکہ، برطانیہ، یورپ)",
        "normal": "$39 USD",
        "urgent": "$59 USD",
        "executive": "$79 USD"
      },
      {
        "serviceEn": "NICOP Overseas Card (Zone B Countries)",
        "serviceUr": "نائیکوپ (زون B - مڈل ایسٹ، ایشیا)",
        "normal": "$20 USD",
        "urgent": "$39 USD",
        "executive": "$59 USD"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Identify Required NADRA Service Tier",
        "titleUr": "سروس کی قسم منتخب کریں",
        "detailEn": "Determine whether you need Normal (31 days), Urgent (15 days), or Executive (7 days) processing for your Smart CNIC or NICOP.",
        "detailUr": "اپنی ضرورت کے مطابق نارمل، ارجنٹ یا ایگزیکٹو نادرا کیٹیگری منتخب کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Prepare Mandatory Documentation",
        "titleUr": "ضروری کاغذات اکٹھے کریں",
        "detailEn": "Gather original B-Form, parents' original CNICs, or previous expired card depending on whether it is new, renewal, or duplicate.",
        "detailUr": "اصل بی فارم، والدین کے شناختی کارڈ اور پرانا شناختی کارڈ ساتھ رکھیں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Visit NRC or Pak-ID Online App",
        "titleUr": "نادرا سینٹر جائیں یا آن لائن اپلائی کریں",
        "detailEn": "Visit your nearest NADRA Registration Center for counter fee payment or submit via Pak-ID mobile portal using digital banking.",
        "detailUr": "کاؤنٹر پر فیس ادا کریں یا پاک آئی ڈی پورٹل کے ذریعے آن لائن فیس جمع کروائیں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Collect Tracking Slip & Delivery",
        "titleUr": "ٹریکنگ سلپ لیں اور ڈلیوری حاصل کریں",
        "detailEn": "Retain the 12-digit tracking receipt to trace your card printing status online or via SMS to 8400 until doorstep courier delivery.",
        "detailUr": "12 ہندسوں کی ٹریکنگ سلپ سنبھال کر رکھیں اور 8400 یا ویب پورٹل سے ٹریک کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "What is the NADRA fee for a duplicate/lost CNIC in 2026?",
        "questionUr": "سال 2026 میں گم شدہ یا نقل شناختی کارڈ کی نادرا فیس کتنی ہے؟",
        "answerEn": "A duplicate or replacement CNIC (for lost/stolen cards) has the exact same fee as a regular card: Normal PKR 750, Urgent PKR 1,500, Executive PKR 2,500. There is zero penalty surcharge.",
        "answerUr": "گم شدہ یا چوری ہونے والے شناختی کارڈ کی نقل کی فیس عام کارڈ جیسی ہے: نارمل 750 روپے، ارجنٹ 1,500 روپے، ایگزیکٹو 2,500 روپے۔ کوئی اضافی جرمانہ فیس نہیں ہے۔"
      },
      {
        "questionEn": "Is NICOP available for foreign-born Pakistanis with dual nationality?",
        "questionUr": "کیا دوہری شہریت رکھنے والے پاکستانی نائیکوپ بنوا سکتے ہیں؟",
        "answerEn": "Yes. Overseas Pakistanis and dual-nationality citizens holding foreign passports can apply for NICOP (National Identity Card for Overseas Pakistanis). Fees range from $20 to $79 depending on country zone and processing urgency.",
        "answerUr": "جی ہاں۔ غیر ملکی شہریت رکھنے والے پاکستانی نائیکوپ (NICOP) بنوا سکتے ہیں جس سے پاکستان میں ویزا فری داخلہ اور تمام شہری حقوق حاصل ہوتے ہیں۔"
      },
      {
        "questionEn": "Can I pay NADRA fee online via JazzCash or Easypaisa?",
        "questionUr": "کیا نادرا فیس جاز کیش یا ایزی پیسہ سے آن لائن ادا کی جا سکتی ہے؟",
        "answerEn": "Yes. NADRA card processing fees can be paid digitally on the Pak-ID app (id.nadra.gov.pk) using JazzCash, Easypaisa, debit/credit cards, or 1Link internet banking.",
        "answerUr": "ہاں، نادرا فیس پاک آئی ڈی پورٹل پر جاز کیش، ایزی پیسہ، کریڈٹ کارڈ یا 1Link انٹرنیٹ بینکنگ سے آن لائن ادا کی جا سکتی ہے۔"
      },
      {
        "questionEn": "How much does a NADRA Family Registration Certificate (FRC) cost?",
        "questionUr": "نادرا فیملی رجسٹریشن سرٹیفکیٹ (FRC) کی فیس کتنی ہے؟",
        "answerEn": "The official fee for an FRC (by birth, marriage, or adoption) is PKR 1,000. When applied online via Pak-ID, the verified PDF copy is emailed within hours.",
        "answerUr": "ایف آر سی سرٹیفکیٹ کی آفیشل فیس 1,000 روپے ہے اور آن لائن اپلائی کرنے پر پی ڈی ایف فوری ایمیل ہوتی ہے۔"
      }
    ],
    "contentEn": "NADRA CNIC Fee Structure is the official government tariff schedule set by the National Database and Registration Authority (NADRA) that regulates processing rates for new Smart CNICs, renewals, modifications, FRCs, and NICOP cards across Pakistan.\n\nKnowing the exact fee schedule saves citizens from overpaying or falling victim to unauthorized private agents charging illegal processing surcharges. All official fees are standardized across all NADRA Registration Centers (NRC) and the Pak-ID portal.\n\n## Official NADRA Smart CNIC Tariff 2026\n\n- **Normal Processing**: PKR 750 (Delivery in 31 working days)\n- **Urgent Processing**: PKR 1,500 (Delivery in 15 working days)\n- **Executive Processing**: PKR 2,500 (Delivery in 7 working days)\n\nThese baseline rates apply uniformly for first-time Smart CNIC issuance, expired card renewal, address or marital modification, and duplicate card issuance following lost or stolen cards.\n\n## Overseas NICOP & FRC Fee Matrix\n\nFor Pakistani citizens residing abroad or holding dual nationality, NICOP fees are categorized into country zones:\n- **Zone A Countries** (USA, UK, Canada, Europe, Australia): Normal $39 USD, Urgent $59 USD, Executive $79 USD.\n- **Zone B Countries** (Middle East, Gulf, Asian Nations): Normal $20 USD, Urgent $39 USD, Executive $59 USD.\n- **Family Registration Certificate (FRC)**: Standard fee is PKR 1,000 for By Birth, By Marriage, or By Adoption categories.\n\n## Digital Payment & Fraud Warning\n\nOfficial NADRA fees can be deposited at NRC cash counters, National Bank of Pakistan (NBP) branches, or online via the official Pak-ID web portal using JazzCash, Easypaisa, or credit/debit cards.\n\nNADRA does NOT endorse private agents or middle-men. Never pay extra cash fees to unauthorized individuals. Report extortion or agent fraud directly to the central NADRA helpline at **1777**.",
    "contentUr": "نادرا شناختی کارڈ فیس شیڈول نادرا کا مصدقہ اور سرکاری ریٹ چارٹ ہے جو سمارٹ شناختی کارڈ، تجدید، ترمیم، ایف آر سی اور نائیکوپ کی فیسوں کو منظم کرتا ہے۔\n\n## نادرا سمارٹ کارڈ فیس 2026\n- **نارمل پروسیسنگ**: 750 روپے (31 کام کے دن)\n- **ارجنٹ پروسیسنگ**: 1,500 روپے (15 کام کے دن)\n- **ایگزیکٹو پروسیسنگ**: 2,500 روپے (7 کام کے دن)\n\n## نائیکوپ اور فیملی سرٹیفکیٹ فیس\n- **زون A ممالک** (امریکہ، برطانیہ، یورپ): نارمل $39، ارجنٹ $59، ایگزیکٹو $79 ڈالر\n- **زون B ممالک** (مڈل ایسٹ، ایشیا): نارمل $20، ارجنٹ $39، ایگزیکٹو $59 ڈالر\n- **فیملی سرٹیفکیٹ (FRC)**: آفیشل فیس 1,000 روپے ہے\n\nفیس کی آن لائن ادائیگی پاک آئی ڈی ایپ پر جاز کیش، ایزی پیسہ یا بینک کریڈٹ کارڈ سے ہو سکتی ہے۔",
    "relatedSlugs": [
      "/nadra/cnic-kaise-banaye",
      "/nadra/tracking-id",
      "/nadra/b-form-kaise-banaye"
    ]
  },
  "tracking-id": {
    "slug": "tracking-id",
    "fullPath": "/nadra/tracking-id",
    "categoryId": "nadra",
    "titleEn": "NADRA CNIC Tracking Online 2026: Check Status via SMS 8400 & Website",
    "titleUr": "نادرا ٹریکنگ 8400: شناختی کارڈ کا سٹیٹس آن لائن چیک کریں",
    "metaDescriptionEn": "Track your NADRA CNIC, NICOP, or Family Certificate application status online using your 12-digit Tracking ID or by sending an SMS to 8400.",
    "metaDescriptionUr": "12 ہندسوں کی نادرا ٹریکنگ آئی ڈی یا 8400 پر ایس ایم ایس کے ذریعے اپنے شناختی کارڈ کی تیاری کی صورتحال مفت آن لائن چیک کریں۔",
    "directAnswerEn": "To track your NADRA application status, send your 12-digit Tracking ID via SMS to 8400 (cost approx PKR 2+tax) or check online for free at id.nadra.gov.pk by logging into your account under \"Track Application\". You will see status updates such as In-Process, Printed, or Dispatched via TCS/Pakistan Post.",
    "directAnswerUr": "اپنے نادرا فارم کا سٹیٹس چیک کرنے کے لیے 12 ہندسوں کی ٹریکنگ آئی ڈی (Tracking ID) لکھ کر 8400 پر ایس ایم ایس بھیجیں یا id.nadra.gov.pk پر جا کر ٹریک ایپلی کیشن سیکشن میں آن لائن فری چیک کریں۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "NADRA Pak-ID Tracking Portal",
      "url": "https://id.nadra.gov.pk/tracking/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Digital Services Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "SMS 8400 Tracking Inquiry",
        "serviceUr": "ایس ایم ایس 8400 انکوائری",
        "normal": "PKR 2 + tax per SMS",
        "urgent": "Instant Reply",
        "executive": "All Mobile Networks"
      },
      {
        "serviceEn": "Online Web Tracking (Pak-ID Portal)",
        "serviceUr": "آن لائن ویب ٹریکنگ (پاک آئی ڈی)",
        "normal": "PKR 0 (Free)",
        "urgent": "Instant Web Dashboard",
        "executive": "Real-time Updates"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Locate Your 12-Digit Tracking ID",
        "titleUr": "12 ہندسوں کی ٹریکنگ آئی ڈی تلاش کریں",
        "detailEn": "Find the 12-digit Tracking ID printed at the top of your NADRA processing token receipt (e.g., 100123456789).",
        "detailUr": "نادرا ٹوکن رسید کے اوپر لکھا 12 ہندسوں کا ٹریکنگ نمبر دیکھیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Option A: Send SMS to 8400",
        "titleUr": "طریقہ 1: 8400 پر ایس ایم ایس کریں",
        "detailEn": "Open your mobile messaging app, type your 12-digit Tracking ID without spaces, and send to 8400.",
        "detailUr": "موبائل کے میسج میں 12 ہندسوں کا ٹریکنگ نمبر لکھ کر 8400 پر بھیجیں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Option B: Check Online on Pak-ID Portal",
        "titleUr": "طریقہ 2: پاک آئی ڈی ویب سائٹ سے آن لائن دیکھیں",
        "detailEn": "Go to id.nadra.gov.pk/tracking, enter your Tracking ID and mobile number to see real-time logistics status.",
        "detailUr": "id.nadra.gov.pk/tracking پر جا کر آن لائن مفت سٹیٹس معلوم کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Where can I find my NADRA Tracking ID?",
        "questionUr": "نادرا ٹریکنگ آئی ڈی کہاں لکھی ہوتی ہے؟",
        "answerEn": "Your 12-digit Tracking ID is printed at the top-left or top-right corner of the paper receipt given to you after paying the fee at the NADRA center counter.",
        "answerUr": "12 ہندسوں کا ٹریکنگ نمبر نادرا کاؤنٹر سے ملنے والی فیس رسید کے اوپر لکھا ہوتا ہے۔"
      },
      {
        "questionEn": "What does \"Card Sent for Printing\" status mean?",
        "questionUr": "کارڈ کی پرنٹنگ کا سٹیٹس کا کیا مطلب ہے؟",
        "answerEn": "It means your biometric and data verification successfully passed, and your Smart CNIC is being physically printed at NADRA's HQ printing facility in Islamabad.",
        "answerUr": "اس کا مطلب ہے کہ آپ کی بائیو میٹرک تصدیق مکمل ہو گئی ہے اور کارڈ اسلام آباد پرنٹنگ پریس میں تیار ہو رہا ہے۔"
      },
      {
        "questionEn": "What should I do if my application status says \"On Hold\"?",
        "questionUr": "اگر ٹریکنگ سٹیٹس On Hold آ جائے تو کیا کریں؟",
        "answerEn": "An \"On Hold\" flag means there is a biometric mismatch or family tree verification query. Visit the NADRA center where you applied with your original tracking receipt to resolve the hold status.",
        "answerUr": "آن ہولڈ کا مطلب ہے کہ ڈیٹا یا بائیو میٹرک میں تصدیقی مسئلہ ہے۔ نادرا سینٹر جا کر رسید دکھائیں۔"
      }
    ],
    "contentEn": "After submitting your application for a new Smart CNIC, renewal, or modification, tracking your card status allows you to know exactly when it is printed, dispatched, or ready for pickup.\n\n## How to Track NADRA Application via SMS (8400)\n\n1. Open SMS on your mobile phone.\n2. Type your **12-digit Tracking ID** (found on your payment receipt).\n3. Send it to **8400**.\n4. You will receive an instant automated reply detailing your application stage.\n\n## How to Track Online via Pak-ID Portal\n\nVisit [id.nadra.gov.pk/tracking](https://id.nadra.gov.pk/tracking) and enter your Tracking ID for full logistics updates, courier tracking numbers, and delivery estimates.",
    "contentUr": "شناختی کارڈ کی درخواست کے بعد کارڈ کی تیاری معلوم کرنے کے لیے نادرا ٹریکنگ سسٹم استعمال کریں۔\n\n## 8400 ایس ایم ایس کے ذریعے ٹریکنگ\n1. موبائل میسج میں 12 ہندسوں کا ٹریکنگ نمبر لکھیں۔\n2. **8400** پر بھیجیں۔\n3. نادرا کی طرف سے فوری سٹیٹس موصول ہوگا۔\n\n## آن لائن ویب ٹریکنگ\n[id.nadra.gov.pk/tracking](https://id.nadra.gov.pk/tracking) پر جا کر اپنی رسید کا ٹریکنگ نمبر درج کریں۔",
    "relatedSlugs": [
      "/nadra/cnic-kaise-banaye",
      "/nadra/card-renewal-online",
      "/nadra/nadra-card-fee"
    ]
  },
  "card-renewal-online": {
    "slug": "card-renewal-online",
    "fullPath": "/nadra/card-renewal-online",
    "categoryId": "nadra",
    "titleEn": "NADRA CNIC Renewal Online Guide 2026: Mobile App & Portal Process",
    "titleUr": "نادرا شناختی کارڈ آن لائن رینیو کروانے کا طریقہ 2026",
    "metaDescriptionEn": "Step-by-step online CNIC renewal guide using the Pak-ID app and web portal. Learn fingerprint scanning tips, photo specs, fee rates (PKR 750), and home delivery timelines.",
    "metaDescriptionUr": "میعاد ختم شدہ نادرا شناختی کارڈ گھر بیٹھے آن لائن رینیو کرنے کی مکمل گائیڈ۔ پاک آئی ڈی موبائل ایپ سے فنگر پرنٹ سکیننگ، تصویر کے قوانین، فیس اور ڈلیوری کا طریقہ۔",
    "directAnswerEn": "To renew an expired CNIC online in Pakistan or from abroad, download the official Pak-ID mobile app or log in to id.nadra.gov.pk. Create an account, choose \"Renewal\", scan your fingerprints using your smartphone camera, upload a white-background photo, pay the processing fee (Normal PKR 750, Urgent PKR 1,500, Executive PKR 2,500 + delivery), and receive your card at your doorstep.",
    "directAnswerUr": "شناختی کارڈ کی آن لائن تجدید کے لیے پاک آئی ڈی ایپ یا id.nadra.gov.pk پر لاگ ان کریں۔ کارڈ رینیول کا انتخاب کر کے موبائل کیمرے سے فنگر پرنٹس سکین کریں، تصویر اپلوڈ کریں اور آن لائن فیس ادا کر کے گھر پر کارڈ وصول کریں۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "NADRA Pak-ID Web Portal",
      "url": "https://id.nadra.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Identity Services Specialist"
    },
    "feeStructure": [
      {
        "serviceEn": "Smart CNIC Renewal (Normal)",
        "serviceUr": "سمارٹ شناختی کارڈ رینیول (نارمل)",
        "normal": "PKR 750 (31 Days)",
        "urgent": "PKR 1,500 (15 Days)",
        "executive": "PKR 2,500 (7 Days)"
      },
      {
        "serviceEn": "Home Courier Delivery Fee (Local Pakistan)",
        "serviceUr": "ہوم ڈلیوری چارجز (پاکستان)",
        "normal": "PKR 250",
        "urgent": "PKR 250",
        "executive": "PKR 250"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Download Pak-ID App & Register Account",
        "titleUr": "پاک آئی ڈی ایپ ڈاؤن لوڈ کریں اور اکاؤنٹ بنائیں",
        "detailEn": "Download the official NADRA Pak-ID app from Google Play Store or Apple App Store. Register using your mobile number and email address, then verify via OTP code.",
        "detailUr": "گوگل پلے سٹور سے نادرا پاک آئی ڈی ایپ ڈاؤن لوڈ کریں اور موبائل نمبر سے اکاؤنٹ بنائیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Select Renewal & Enter Existing CNIC Number",
        "titleUr": "تجدید کیٹیگری منتخب کریں اور شناختی کارڈ نمبر درج کریں",
        "detailEn": "Select \"CNIC Renewal\", enter your 13-digit expired CNIC number, and select delivery speed (Normal, Urgent, or Executive).",
        "detailUr": "ایپ میں \"شناختی کارڈ تجدید\" منتخب کر کے پرانا 13 ہندسوں کا شناختی کارڈ نمبر درج کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Capture Passport Photograph via Smartphone",
        "titleUr": "موبائل سے تازہ تصویر اپلوڈ کریں",
        "detailEn": "Take a clear photograph against a solid white wall using your phone camera. Ensure natural lighting, open eyes, and neutral expression with no shadows or glasses flare.",
        "detailUr": "سفید بیک گراؤنڈ پر موبائل کیمرے سے واضح تصویر بنا کر اپلوڈ کریں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Scan Fingerprints using Smartphone Camera",
        "titleUr": "موبائل کیمرے سے انگلیوں کے نشانات سکین کریں",
        "detailEn": "Use the Pak-ID app's biometric feature to scan four fingers of your right and left hands. Place fingers against a plain background under bright room lighting.",
        "detailUr": "ایپ کے بایومیٹرک سکینر سے دائیں اور بائیں ہاتھ کی 4 انگلیوں کے نشانات سکین کریں۔"
      },
      {
        "stepNumber": 5,
        "titleEn": "Pay Fee Online & Track Doorstep Delivery",
        "titleUr": "آن لائن فیس ادا کریں اور ہوم ڈلیوری حاصل کریں",
        "detailEn": "Pay the fee using JazzCash, Easypaisa, or Credit/Debit Card. Note down your Tracking ID to monitor home courier delivery.",
        "detailUr": "جاز کیش، ایزی پیسہ یا کریڈٹ کارڈ سے فیس جمع کروائیں اور ٹریکنگ نمبر سے ڈلیوری ٹریک کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "How long before expiry can I renew my NADRA CNIC?",
        "questionUr": "شناختی کارڈ کی میعاد ختم ہونے سے کتنے عرصے پہلے تجدید ہو سکتی ہے؟",
        "answerEn": "You can apply for CNIC renewal up to 6 months (180 days) prior to its official expiration date. Renewing early prevents sudden disruptions to your banking, mobile SIM, or passport services.",
        "answerUr": "آپ شناختی کارڈ کی میعاد ختم ہونے سے 6 ماہ (180 دن) پہلے آن لائن یا نادرا سینٹر سے تجدید کے لیے درخواست دے سکتے ہیں۔"
      },
      {
        "questionEn": "Why does the Pak-ID app reject my smartphone fingerprint scans?",
        "questionUr": "پاک آئی ڈی ایپ انگلیوں کے نشانات کی سکیننگ کیوں ریجیکٹ کرتی ہے؟",
        "answerEn": "Fingerprint scan errors usually happen due to poor lighting, unsteady camera hold, or textured backgrounds. For best results: stand under bright white LED light, hold your smartphone steady 4-6 inches from your hand, and use a dark or contrasting plain background surface.",
        "answerUr": "موبائل کیمرے سے بائیو میٹرک فیل ہونے کی بڑی وجہ کم روشنی یا ہاتھ کا ہلنا ہے۔ تیز روشنی میں گہرے بیک گراؤنڈ پر انگلیوں کو ساکت رکھ کر سکین کریں۔"
      },
      {
        "questionEn": "Can I change my address or marital status during online renewal?",
        "questionUr": "کیا آن لائن رینیول کے دوران پتہ یا ازدواجی حیثیت تبدیل ہو سکتی ہے؟",
        "answerEn": "Yes. During the online application, you can update your current address (with a utility bill scan) or marital status (with a Nikkah Nama scan). However, changing your permanent address or father's name requires visiting a physical NADRA center.",
        "answerUr": "جی ہاں، موجودہ پتہ یا نکاح نامہ اپلوڈ کر کے ازدواجی حیثیت آن لائن تبدیل ہو سکتی ہے۔ مستقل پتہ یا والد کا نام تبدیل کرنے کے لیے نادرا سینٹر جانا ہوگا۔"
      },
      {
        "questionEn": "What happens if my CNIC expired several years ago?",
        "questionUr": "اگر شناختی کارڈ کئی سال پہلے ایکسپائر ہو چکا ہو تو کیا ہوگا؟",
        "answerEn": "Even if your card expired 5 or 10 years ago, there is ZERO financial penalty or surcharge from NADRA. You simply pay the standard renewal fee (PKR 750 for Normal delivery).",
        "answerUr": "اگر شناختی کارڈ کئی سال پہلے بھی ایکسپائر ہو چکا ہو تو نادرا کوئی جرمانہ وصول نہیں کرتا۔ آپ کو صرف عام رینیول فیس ادا کرنا ہوگی۔"
      },
      {
        "questionEn": "Can overseas Pakistanis use the Pak-ID app for card renewal?",
        "questionUr": "کیا سمندر پار پاکستانی پاک آئی ڈی ایپ سے کارڈ رینیو کر سکتے ہیں؟",
        "answerEn": "Yes. Overseas Pakistanis holding a Smart CNIC or NICOP can renew their cards via Pak-ID app or website with international courier delivery to over 150 countries worldwide.",
        "answerUr": "جی ہاں، سمندر پار پاکستانی بھی پاک آئی ڈی ایپ کے ذریعے دنیا بھر سے اپنے نادرا کارڈ کی آن لائن تجدید کروا سکتے ہیں۔"
      }
    ],
    "contentEn": "An expired CNIC causes immediate legal and financial headaches in Pakistan. The moment your identity card expires, your mobile SIM cards face deactivation, bank accounts get frozen for biometric compliance, and government transactions halt.\n\nFortunately, you no longer need to stand in exhausting morning queues at a physical NADRA Registration Center (NRC) to renew an expired card. NADRA's **Pak-ID mobile app** and web portal (`id.nadra.gov.pk`) allow every Pakistani citizen to renew their CNIC 100% online from home with doorstep courier delivery.\n\n## Key Prerequisites for Online CNIC Renewal\n\nTo complete your CNIC renewal online without visiting a branch, ensure you have:\n- An active smartphone with a clear back camera (12MP or higher recommended).\n- Your existing expired (or expiring) 13-digit CNIC number.\n- An active mobile number and email address for OTP verification.\n- Digital payment access via **JazzCash**, **Easypaisa**, or any 1Link bank credit/debit card.\n\n## Step-by-Step Online Renewal Walkthrough\n\n### 1. Account Setup & OTP Verification\nDownload the official **Pak-ID app** from Google Play Store or Apple App Store. Tap \"Create Account\", fill in your full name, email, and Pakistani mobile number. Enter the 6-digit OTP code sent via SMS/email to activate your account.\n\n### 2. Application Category Selection\nOnce logged in, tap **\"New Application\"** -> **\"Identity Document\"** -> **\"CNIC\"** -> **\"Renewal\"**. Enter your 13-digit CNIC number. The system will pull your record from NADRA's central database.\n\n### 3. Smartphone Photography Guidelines\nYou do not need to visit a photo studio! Take a picture using your phone camera inside the app:\n- Stand 3 feet away from a clean, solid white wall.\n- Ensure shadowless white LED room lighting facing your face.\n- Maintain a neutral expression with both ears visible and no spectacles or headwear obscuring facial features.\n\n### 4. Biometric Fingerprint Scanning via Camera\nThis is NADRA's breakthrough technology. The Pak-ID app uses your smartphone camera flash to capture fingerprint ridges:\n1. Hold your hand open with 4 fingers together (index, middle, ring, little) against a contrasting plain dark background.\n2. The app camera will auto-detect your fingertips, turn on the flashlight, and capture green checkmarks across all four fingers.\n3. Repeat for both right and left hands.\n\n### 5. Fee Payment & Doorstep Delivery\nChoose your preferred processing tier (Normal PKR 750, Urgent PKR 1,500, or Executive PKR 2,500) plus a flat PKR 250 local home courier delivery fee. Pay digitally via **JazzCash**, **Easypaisa**, or Bank Debit Card. Once submitted, NADRA dispatches your printed Smart CNIC straight to your residential address!",
    "contentUr": "میعاد ختم شدہ شناختی کارڈ پاکستان میں فوری پریشانی کا باعث بنتا ہے۔ کارڈ ایکسپائر ہوتے ہی بینک اکاؤنٹس، موبائل سمز اور سرکاری کارروائی معطل ہو جاتی ہے۔\n\nنادرا کے جدید **پاک آئی ڈی پاک پورٹل** (id.nadra.gov.pk) اور موبائل ایپ کے ذریعے اب آپ بغیر نادرا سینٹر گئے گھر بیٹھے 100 فیصد آن لائن شناختی کارڈ کی تجدید کروا سکتے ہیں۔\n\n## آن لائن رینیول کے لیے ضروری اشیاء\n- اچھا موبائل کیمرہ (فنگر پرنٹس اور تصویر کے لیے)۔\n- پرانا 13 ہندسوں والا شناختی کارڈ نمبر۔\n- جاز کیش، ایزی پیسہ یا کریڈٹ کارڈ برائے آن لائن فیس۔\n\n## آن لائن اپلائی کرنے کے 5 آسان مراحل\n1. **پاک آئی ڈی ایپ**: ایپ ڈاؤن لوڈ کر کے اکاؤنٹ بنائیں اور او ٹی پی سے تصدیق کریں۔\n2. **درخواست کا انتخاب**: \"تجدید\" منتخب کر کے اپنا 13 ہندسوں کا شناختی کارڈ نمبر درج کریں۔\n3. **تصویر**: سفید دیوار کے سامنے موبائل سے واضح تصویر بنائیں۔\n4. **فنگر پرنٹس سکیننگ**: کیمرے کی روشنی میں ہاتھوں کی چاروں انگلیاں سکین کریں۔\n5. **فیس کی ادائیگی**: جاز کیش یا ایزی پیسہ سے فیس جمع کروا کر ہوم ڈلیوری حاصل کریں۔",
    "relatedSlugs": [
      "/nadra/cnic-kaise-banaye",
      "/nadra/nadra-card-fee",
      "/nadra/tracking-id"
    ]
  },
  "family-registration-certificate": {
    "slug": "family-registration-certificate",
    "fullPath": "/nadra/family-registration-certificate",
    "categoryId": "nadra",
    "titleEn": "NADRA FRC Guide 2026: Apply Online for Family Registration Certificate",
    "titleUr": "نادرا ایف آر سی (FRC) فیملی سرٹیفکیٹ آن لائن حاصل کرنے کا طریقہ",
    "metaDescriptionEn": "Complete guide to apply for NADRA Family Registration Certificate (FRC) online or at centers. Learn about FRC by Birth vs Marriage, fee PKR 1,000, and embassy visa uses.",
    "metaDescriptionUr": "نادرا فیملی رجسٹریشن سرٹیفکیٹ (FRC) آن لائن اور سینٹر سے حاصل کرنے کا طریقہ۔ فیس 1000 روپے، بائی برتھ بمقابلہ بائی میرج ایف آر سی اور ضروری کاغذات۔",
    "directAnswerEn": "Family Registration Certificate (FRC) is an official NADRA document validating your family tree records. It comes in 3 types: By Birth (with parents & siblings), By Marriage (with spouse & children), or By Adoption. Official fee is PKR 1,000. Online applications submitted via id.nadra.gov.pk deliver a verified PDF document directly to your email within hours.",
    "directAnswerUr": "نادرا فیملی رجسٹریشن سرٹیفکیٹ (FRC) خاندان کے افراد کے اندراج کی سرکاری سند ہے۔ یہ تین قسموں میں آتا ہے: والدین اور بہن بھائیوں کے ساتھ (By Birth) یا اہلیہ اور بچوں کے ساتھ (By Marriage)۔ فیس 1000 روپے ہے اور آن لائن اپلائی کرنے پر پی ڈی ایف ایمیل پر مل جاتی ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "Pak-ID FRC Official Portal",
      "url": "https://id.nadra.gov.pk/family-registration-certificate/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "NADRA Verification Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "FRC Online PDF (Email Delivery)",
        "serviceUr": "ایف آر سی آن لائن (پی ڈی ایف ایمیل)",
        "normal": "PKR 1,000",
        "urgent": "PKR 1,000",
        "executive": "PKR 1,000 (Instant)"
      },
      {
        "serviceEn": "FRC Physical Printout at NADRA Center",
        "serviceUr": "ایف آر سی پرنٹ (نادرا سینٹر)",
        "normal": "PKR 1,000",
        "urgent": "PKR 1,000",
        "executive": "PKR 1,000 (Same Day)"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Determine Required FRC Category",
        "titleUr": "ایف آر سی کی قسم کا انتخاب کریں",
        "detailEn": "Decide whether you need FRC By Birth (listing parents & siblings for unmarried applicants/visas) or FRC By Marriage (listing spouse & children).",
        "detailUr": "اپنی ضرورت کے مطابق بائی برتھ یا بائی میرج ایف آر سی کا انتخاب کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Collect All Family Members' CNICs / B-Forms",
        "titleUr": "تمام اہل خانہ کے شناختی کارڈ نمبر اکٹھے کریں",
        "detailEn": "Gather the 13-digit CNIC numbers of all family members. Ensure all minor children have existing B-Form records in NADRA.",
        "detailUr": "تمام گھر والوں کے 13 ہندسوں والے شناختی کارڈ اور بی فارم نمبرز پاس رکھیں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Log On to Pak-ID Web Portal",
        "titleUr": "پاک آئی ڈی پورٹل پر لاگ ان کریں",
        "detailEn": "Visit id.nadra.gov.pk, log in to your account, click \"New Application\", and select \"Family Registration Certificate (FRC)\".",
        "detailUr": "id.nadra.gov.pk پر لاگ ان کر کے ایف آر سی درخواست شروع کریں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Verify Family Tree Preview & Biometric Head Attestation",
        "titleUr": "فیملی ٹری کا جائزہ اور سرپرست کا انگوٹھا",
        "detailEn": "Review the automated family tree preview generated by NADRA. Perform head-of-family biometric verification using the Pak-ID mobile app.",
        "detailUr": "نادرا کے خودکار فیملی ٹری کا جائزہ لیں اور موبائل ایپ سے سرپرست کی بایومیٹرک تصدیق کریں۔"
      },
      {
        "stepNumber": 5,
        "titleEn": "Pay PKR 1,000 Fee & Receive PDF Copy",
        "titleUr": "1000 روپے فیس ادا کریں اور پی ڈی ایف حاصل کریں",
        "detailEn": "Pay PKR 1,000 via JazzCash, Easypaisa, or Debit Card. Download your officially sealed PDF FRC directly from your email inbox.",
        "detailUr": "آن لائن فیس ادا کر کے اپنے ای میل سے نادرا سے تصدیق شدہ ایف آر سی پی ڈی ایف ڈاؤن لوڈ کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "What is the main difference between FRC By Birth and FRC By Marriage?",
        "questionUr": "بائی برتھ اور بائی میرج ایف آر سی میں کیا فرق ہے؟",
        "answerEn": "FRC By Birth lists the applicant together with their parents and brothers/sisters (used mostly by unmarried individuals or for family visit visas). FRC By Marriage lists the applicant together with their spouse and children (used by married individuals for family immigration).",
        "answerUr": "بائی برتھ میں آپ کے ساتھ والد، والدہ اور بہن بھائی شامل ہوتے ہیں۔ بائی میرج میں آپ کے ساتھ آپ کی اہلیہ اور بچے شامل ہوتے ہیں۔"
      },
      {
        "questionEn": "Why is a family member missing from my NADRA FRC preview?",
        "questionUr": "ایف آر سی میں خاندان کا کوئی فرد غائب کیوں نظر آتا ہے؟",
        "answerEn": "A member appears missing if: 1) A sibling does not have a registered B-Form or CNIC; 2) A married sister's CNIC was not updated with her husband's details; or 3) A child's birth registration was not linked to the parents' CNICs. Missing links must be updated at a physical NADRA center counter.",
        "answerUr": "اگر کسی بھائی بہن کا شناختی کارڈ نہ بنا ہو یا شادی شدہ بہن کا ریکارڈ اپڈیٹ نہ ہو تو وہ ایف آر سی میں غائب نظر آ سکتا ہے۔"
      },
      {
        "questionEn": "Can I use an online emailed PDF FRC for embassy visa applications?",
        "questionUr": "کیا آن لائن پی ڈی ایف ایف آر سی سفارت خانوں میں مقبول ہے؟",
        "answerEn": "Yes! Emailed PDF FRCs issued by Pak-ID contain an official NADRA digital cryptographic signature and verification QR code. Embassies (Schengen, UK, USA, Canada, UAE) accept this electronic document without requiring physical branch visits.",
        "answerUr": "جی ہاں، آن لائن پی ڈی ایف ایف آر سی پر نادرا کا کیو آر کوڈ اور ڈیجیٹل مہر ہوتی ہے جو تمام سفارت خانوں میں قابل قبول ہے۔"
      },
      {
        "questionEn": "Can a married woman get an FRC listing her parents and siblings?",
        "questionUr": "کیا شادی شدہ خاتون اپنے والدین کے ساتھ ایف آر سی بنوا سکتی ہے؟",
        "answerEn": "Yes! A married woman can apply for an FRC By Birth to prove her relationship with her parents and siblings, as well as an FRC By Marriage for her own family unit.",
        "answerUr": "جی ہاں، شادی شدہ خاتون بھی اپنے والدین اور بہن بھائیوں کا ثبوت دینے کے لیے بائی برتھ ایف آر سی حاصل کر سکتی ہے۔"
      },
      {
        "questionEn": "What is the fee for an FRC in 2026?",
        "questionUr": "2026 میں ایف آر سی کی سرکاری فیس کتنی ہے؟",
        "answerEn": "The official fee for a Family Registration Certificate is strictly PKR 1,000 across both online portal and physical NADRA counters.",
        "answerUr": "آن لائن پورٹل اور نادرا سینٹر دونوں پر ایف آر سی کی آفیشل فیس صرف 1,000 روپے ہے۔"
      }
    ],
    "contentEn": "The **Family Registration Certificate (FRC)** is one of the most critical legal documents issued by NADRA. It provides official government validation of an applicant's family structure as recorded in the National Data Warehouse.\n\nWhether you are applying for a Schengen visa, US immigrant petition, UK visit visa, court inheritance proceeding, or foreign university sponsorship, foreign embassies strictly require an FRC to verify legal family ties.\n\n## 3 Types of NADRA FRC Certificates\n\nNADRA issues three distinct types of FRC based on your civil relationship status:\n\n1. **FRC By Birth**: Lists the applicant alongside their parents and brothers/sisters. (Ideal for unmarried individuals or students traveling abroad).\n2. **FRC By Marriage**: Lists the applicant alongside their legal spouse and children. (Required for married couples and family visa applications).\n3. **FRC By Adoption**: Lists an adopted child alongside their legally designated guardians certified by court orders.\n\n## Official NADRA FRC Fee Structure 2026\n\n| Service Channel | Format Provided | Official Fee | Processing Time |\n| :--- | :--- | :--- | :--- |\n| **Pak-ID Online Portal** | Cryptographic PDF (Email) | **PKR 1,000** | 1 to 3 Hours |\n| **NADRA Registration Center** | Watermark Printed Document | **PKR 1,000** | Instant Counter Print |\n\n*Confirmed via [NADRA Pak-ID FRC Portal](https://id.nadra.gov.pk/).*",
    "contentUr": "**فیملی رجسٹریشن سرٹیفکیٹ (FRC)** نادرا کی جاری کردہ ایک اہم ترین قانونی سند ہے جو نادرا ڈیٹا بیس کے مطابق آپ کے خاندان کے شجرہ نسب کی تصدیق کرتی ہے۔\n\nویزا درخواستوں (شینگن، برطانیہ، امریکہ) اور جائیداد کے قانونی امور کے لیے ایف آر سی کی کاپی لازمی درکار ہوتی ہے۔\n\n## ایف آر سی کی 3 اقسام\n1. **بائی برتھ (By Birth)**: درخواست دہندہ کے ساتھ والدین اور بہن بھائی شامل ہوتے ہیں۔\n2. **بائی میرج (By Marriage)**: درخواست دہندہ کے ساتھ اہلیہ اور بچے شامل ہوتے ہیں۔\n3. **بائی ایڈاپشن (By Adoption)**: گود لیے گئے بچوں کی قانونی سند۔\n\n## فیس اور کاپی 2026\nآن لائن اور نادرا سینٹر دونوں پر ایف آر سی کی فیس **1,000 روپے** ہے۔ آن لائن اپلائی کرنے پر تصدیق شدہ پی ڈی ایف ایمیل پر موصول ہوتی ہے۔",
    "relatedSlugs": [
      "/nadra/cnic-kaise-banaye",
      "/nadra/b-form-kaise-banaye",
      "/nadra/nadra-card-fee"
    ]
  },
  "nicop-apply-online": {
    "slug": "nicop-apply-online",
    "fullPath": "/nadra/nicop-apply-online",
    "categoryId": "nadra",
    "titleEn": "NADRA NICOP Apply Online 2026: Overseas Pakistani Card Fees & Process",
    "titleUr": "نائیکوپ (NICOP) آن لائن درخواست اور فیس 2026 (سمندر پار پاکستانی)",
    "metaDescriptionEn": "Complete online NICOP application guide for overseas Pakistanis and dual nationals. Verified Zone A & Zone B country fee tables, online Pak-ID steps, and visa-free travel benefits.",
    "metaDescriptionUr": "سمندر پار اور دوہری شہریت کے حامل پاکستانیوں کے لیے نائیکوپ آن لائن اپلائی کی گائیڈ۔ زون اے اور زون بی فیس ریٹس ($20-$79)، طریقہ کار اور ویزا فری آمد کے فوائد۔",
    "directAnswerEn": "National Identity Card for Overseas Pakistanis (NICOP) is issued to Pakistani citizens residing abroad or holding dual nationality. Apply 100% online via id.nadra.gov.pk. NICOP allows visa-free entry into Pakistan and full civil rights. Fees depend on country zone: Zone A (USA, UK, Canada, Europe) costs $39 (Normal), $59 (Urgent), $79 (Executive); Zone B (Middle East, GCC) costs $20 (Normal), $39 (Urgent), $59 (Executive).",
    "directAnswerUr": "نائیکوپ (NICOP) سمندر پار پاکستانیوں اور دوہری شہریت رکھنے والوں کے لیے ویزا فری پاکستان آمد کی سند ہے۔ آن لائن id.nadra.gov.pk سے اپلائی کریں۔ زون اے (امریکہ، برطانیہ، یورپ) فیس 39 سے 79 ڈالر اور زون بی (عرب ممالک) فیس 20 سے 59 ڈالر ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "NADRA Overseas Services Portal",
      "url": "https://id.nadra.gov.pk/e-nicop/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Overseas Affairs Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "NICOP Zone A (USA, UK, Canada, EU, Australia)",
        "serviceUr": "نائیکوپ زون A (امریکہ، برطانیہ، یورپ)",
        "normal": "$39 USD",
        "urgent": "$59 USD",
        "executive": "$79 USD"
      },
      {
        "serviceEn": "NICOP Zone B (Saudi Arabia, UAE, GCC, Asia)",
        "serviceUr": "نائیکوپ زون B (سعودی عرب، امارات، گلف)",
        "normal": "$20 USD",
        "urgent": "$39 USD",
        "executive": "$59 USD"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Create Account on Pak-ID Portal",
        "titleUr": "پاک آئی ڈی ویب پورٹل پر اکاؤنٹ بنائیں",
        "detailEn": "Visit id.nadra.gov.pk and create a new user account using your valid international email and mobile number.",
        "detailUr": "id.nadra.gov.pk پر جا کر اپنی ایمیل سے نیا اکاؤنٹ بنائیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Select NICOP Category & Country Zone",
        "titleUr": "نائیکوپ کیٹیگری اور اپنا ملک منتخب کریں",
        "detailEn": "Choose \"NICOP New\" or \"NICOP Renewal\". Select your country of residence (Zone A or Zone B) to display correct fee structure.",
        "detailUr": "نائیکوپ کا انتخاب کر کے اپنے رہائشی ملک کا زون منتخب کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Upload Supporting Documents",
        "titleUr": "ضروری دستاویزات اپلوڈ کریں",
        "detailEn": "Upload clean scans of your foreign passport, resident visa/Iqama/work permit, existing CNIC/B-Form, and white background photo.",
        "detailUr": "غیر ملکی پاسپورٹ، اقامہ، پرانا شناختی کارڈ اور تصویر اپلوڈ کریں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Biometric Form Download & Upload",
        "titleUr": "بایومیٹرک فارم پرنٹ اور اپلوڈ کریں",
        "detailEn": "Download the generated biometric fingerprint form, stamp your 4 fingerprints with dark ink, scan at 600 DPI resolution, and re-upload to the portal.",
        "detailUr": "بایومیٹرک فارم پرنٹ کر کے انگوٹھے کا نشان لگائیں اور سکین کر کے اپلوڈ کریں۔"
      },
      {
        "stepNumber": 5,
        "titleEn": "Pay Fee via Credit/Debit Card",
        "titleUr": "انٹرنیشنل کریڈٹ کارڈ سے فیس ادا کریں",
        "detailEn": "Pay the fee in USD using Visa or Mastercard. Track international courier delivery straight to your overseas residence address.",
        "detailUr": "ویزہ یا ماسٹر کارڈ سے ڈالر میں فیس ادا کریں اور ہوم ڈلیوری حاصل کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Do foreign-born children of Pakistani parents qualify for NICOP?",
        "questionUr": "کیا بیرون ملک پیدا ہونے والے پاکستانی بچوں کا نائیکوپ بن سکتا ہے؟",
        "answerEn": "Yes! Children born abroad to at least one Pakistani parent holding a valid CNIC/NICOP are fully eligible for NICOP. You will need the child's foreign birth certificate attested by the relevant Embassy/Consulate.",
        "answerUr": "جی ہاں، اگر والد یا والدہ میں سے کسی ایک کے پاس پاکستانی شناختی کارڈ ہو تو بیرون ملک پیدا ہونے والے بچوں کا نائیکوپ بن سکتا ہے۔"
      },
      {
        "questionEn": "Can I travel to Pakistan using a valid NICOP without a Pakistani visa?",
        "questionUr": "کیا نائیکوپ کے ہوتے ہوئے پاکستان کے ویزے کی ضرورت ہوتی ہے؟",
        "answerEn": "No Pakistani visa is needed! Holding an active NICOP alongside your foreign passport entitles you to unlimited visa-free entry, exit, and stay in Pakistan.",
        "answerUr": "نائیکوپ ہولڈرز کو غیر ملکی پاسپورٹ پر پاکستان آنے کے لیے ویزے کی ضرورت نہیں ہوتی۔"
      },
      {
        "questionEn": "What is the difference between Country Zone A and Zone B?",
        "questionUr": "زون اے اور زون بی میں کیا فرق ہے؟",
        "answerEn": "Zone A comprises Western high-income nations (USA, UK, Canada, European Union, Australia, NZ). Zone B comprises GCC/Middle Eastern countries (Saudi Arabia, UAE, Qatar, Oman, Kuwait) and developing Asian nations with subsidized lower fee tariffs.",
        "answerUr": "زون اے میں مغربی ممالک (امریکہ، برطانیہ، یورپ) اور زون بی میں عرب ممالک (سعودی عرب، امارات) شامل ہیں۔"
      },
      {
        "questionEn": "Can NICOP holders open bank accounts in Pakistan?",
        "questionUr": "کیا نائیکوپ ہولڈرز پاکستان میں بینک اکاؤنٹ کھول سکتے ہیں؟",
        "answerEn": "Yes. NICOP holders can open regular commercial bank accounts and specialized **Roshan Digital Accounts (RDA)** for foreign currency and PKR investment in stocks, Naya Pakistan Certificates, and real estate.",
        "answerUr": "جی ہاں، نائیکوپ ہولڈرز روشن ڈیجیٹل اکاؤنٹ (RDA) اور تمام پاکستانی بینکوں میں اکاؤنٹس کھول سکتے ہیں۔"
      },
      {
        "questionEn": "How long does international courier delivery take for NICOP?",
        "questionUr": "نائیکوپ کی بین الاقوامی ہوم ڈلیوری میں کتنا وقت لگتا ہے؟",
        "answerEn": "Executive processing delivers in 7-10 working days via DHL/FedEx; Urgent processing takes 15-20 working days; Normal processing takes 30-45 working days.",
        "answerUr": "ایگزیکٹو درخواست کا نائیکوپ 7 تا 10 دنوں میں ڈی ایچ ایل سے آپ کے غیر ملکی پتے پر پہنچ جاتا ہے۔"
      }
    ],
    "contentEn": "For millions of overseas Pakistanis living in Saudi Arabia, UAE, UK, USA, Canada, and Europe, the **National Identity Card for Overseas Pakistanis (NICOP)** is the ultimate identity bridge connecting them to their homeland.\n\nIssued under the NADRA Ordinance, NICOP guarantees dual nationals and expatriates visa-free entry into Pakistan, complete property inheritance rights, and seamless access to banking services.\n\n## Core Privileges of Holding a Valid NICOP\n\n- **Visa-Free Entry to Pakistan**: Travel to any airport in Pakistan using your foreign passport paired with your valid NICOP card.\n- **Property Ownership & Legal Transactions**: Full right to purchase, register, sell, and inherit land and houses across Pakistan.\n- **Roshan Digital Banking (RDA)**: Open zero-tax foreign currency and PKR bank accounts remotely.\n\n## Country Zone Classification & Fee Matrix 2026\n\nNADRA categorizes residence countries into two primary zones:\n\n| Country Classification Zone | Normal Fee | Urgent Fee | Executive Fee |\n| :--- | :--- | :--- | :--- |\n| **Zone A** (USA, UK, Canada, EU, Australia, NZ) | **$39 USD** | **$59 USD** | **$79 USD** |\n| **Zone B** (Saudi Arabia, UAE, Qatar, Oman, GCC, Asia) | **$20 USD** | **$39 USD** | **$59 USD** |\n\n*Official foreign currency tariffs confirmed via [NADRA Pak-ID Portal](https://id.nadra.gov.pk/).*",
    "contentUr": "سمندر پار پاکستانیوں کے لیے **نائیکوپ (NICOP)** ایک اہم ترین قومی شناختی سند ہے جو دوہری شہریت کے حامل شہریوں کو پاکستان میں تمام حقوق فراہم کرتی ہے۔\n\n## نائیکوپ کے اہم فوائد\n- **ویزا فری داخلہ**: غیر ملکی پاسپورٹ کے ساتھ نائیکوپ پر بغیر ویزا پاکستان سفر کریں۔\n- **جائیداد کی خرید و فروخت**: پاکستان میں زمین اور جائیداد اپنے نام منتقل کروانے کا حق۔\n- **روشن ڈیجیٹل اکاؤنٹ**: بیرون ملک سے پاکستانی بینکوں میں ڈالر اور روپے کے اکاؤنٹس۔\n\n## زون فیس شیڈول 2026\n- **زون A** (امریکہ، برطانیہ، یورپ): نارمل $39، ارجنٹ $59، ایگزیکٹو $79 ڈالر\n- **زون B** (سعودی عرب، امارات، عرب ممالک): نارمل $20، ارجنٹ $39، ایگزیکٹو $59 ڈالر",
    "relatedSlugs": [
      "/nadra/nadra-card-fee",
      "/nadra/card-renewal-online",
      "/nadra/cnic-kaise-banaye"
    ]
  },
  "fee-2026": {
    "slug": "fee-2026",
    "fullPath": "/passport/fee-2026",
    "categoryId": "passport",
    "titleEn": "Pakistan Passport Fee Structure 2026 (Normal, Urgent & e-Passport Rates)",
    "titleUr": "پاکستان پاسپورٹ فیس شیڈول 2026 (نارمل، ارجنٹ اور ای پاسپورٹ)",
    "metaDescriptionEn": "Official Pakistani Passport Fee 2026 table for 36-page, 72-page, 100-page booklets (5 and 10 years validity). Includes e-Passport and fast-track processing rates.",
    "metaDescriptionUr": "پاکستان ڈائریکٹوریٹ آف پاسپورٹ کی آفیشل فیس 2026۔ 36 صفحات، 72 صفحات، 100 صفحات، ای پاسپورٹ اور فاسٹ ٹریک فیس کی تفصیلات۔",
    "directAnswerEn": "As of 2026, standard 36-page Pakistani Passport fee (5-year validity) is PKR 4,500 for Normal delivery and PKR 7,500 for Urgent delivery. 10-year validity 36-page passport costs PKR 6,700 (Normal) and PKR 11,200 (Urgent). e-Passport fee starts at PKR 9,000 for 5-year 36 pages.",
    "directAnswerUr": "سال 2026 میں 36 صفحات والے 5 سالہ عام پاسپورٹ کی نارمل فیس 4,500 روپے اور ارجنٹ فیس 7,500 روپے ہے۔ 10 سالہ میعاد کی نارمل فیس 6,700 روپے جبکہ ارجنٹ فیس 11,200 روپے ہے۔ ای پاسپورٹ فیس 9,000 روپے سے شروع ہوتی ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "Directorate General of Immigration & Passports",
      "url": "https://dgip.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Passport & Immigration Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "36 Pages (5 Years Validity)",
        "serviceUr": "36 صفحات (5 سال میعاد)",
        "normal": "PKR 4,500",
        "urgent": "PKR 7,500",
        "executive": "PKR 12,500 (Fast Track)"
      },
      {
        "serviceEn": "36 Pages (10 Years Validity)",
        "serviceUr": "36 صفحات (10 سال میعاد)",
        "normal": "PKR 6,700",
        "urgent": "PKR 11,200",
        "executive": "PKR 16,200 (Fast Track)"
      },
      {
        "serviceEn": "72 Pages (5 Years Validity)",
        "serviceUr": "72 صفحات (5 سال میعاد)",
        "normal": "PKR 8,200",
        "urgent": "PKR 13,500",
        "executive": "PKR 18,500 (Fast Track)"
      },
      {
        "serviceEn": "72 Pages (10 Years Validity)",
        "serviceUr": "72 صفحات (10 سال میعاد)",
        "normal": "PKR 12,400",
        "urgent": "PKR 20,200",
        "executive": "PKR 25,200 (Fast Track)"
      },
      {
        "serviceEn": "100 Pages (5 Years Validity)",
        "serviceUr": "100 صفحات (5 سال میعاد)",
        "normal": "PKR 9,000",
        "urgent": "PKR 18,000",
        "executive": "PKR 23,000 (Fast Track)"
      },
      {
        "serviceEn": "e-Passport 36 Pages (5 Years)",
        "serviceUr": "ای پاسپورٹ 36 صفحات (5 سال)",
        "normal": "PKR 9,000",
        "urgent": "PKR 15,000",
        "executive": "PKR 20,000 (Fast Track)"
      },
      {
        "serviceEn": "e-Passport 36 Pages (10 Years)",
        "serviceUr": "ای پاسپورٹ 36 صفحات (10 سال)",
        "normal": "PKR 13,500",
        "urgent": "PKR 22,500",
        "executive": "PKR 27,000 (Fast Track)"
      }
    ],
    "faqs": [
      {
        "questionEn": "What is the difference between Normal, Urgent, and Fast Track passport?",
        "questionUr": "نارمل، ارجنٹ اور فاسٹ ٹریک پاسپورٹ میں کیا فرق ہے؟",
        "answerEn": "Normal passport takes 21-30 working days; Urgent takes 7-10 working days; Fast Track (Executive) takes 2-4 working days and is collected directly from the passport office.",
        "answerUr": "نارمل پاسپورٹ 21 تا 30 دنوں میں، ارجنٹ 7 تا 10 دنوں میں، اور فاسٹ ٹریک 2 تا 4 دنوں میں ملتا ہے۔"
      },
      {
        "questionEn": "How can I generate a PSID to pay passport fee online?",
        "questionUr": "پاسپورٹ فیس آن لائن پے کرنے کے لیے PSID کیسے بنائیں؟",
        "answerEn": "Download the official \"Passport Fee Asaan\" mobile app or visit onlinemrp.dgip.gov.pk to generate your 17-digit PSID number, then pay via JazzCash, Easypaisa, or 1Link banking.",
        "answerUr": "پاسپورٹ فیس آسان ایپ سے 17 ہندسوں کا PSID بنائیں اور جاز کیش یا بینکنگ ایپ سے فیس جمع کروائیں۔"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Generate Passport PSID on Passport Fee Asaan App",
        "titleUr": "آن لائن PSID حاصل کریں",
        "detailEn": "Visit onlinemrp.dgip.gov.pk or download Passport Fee Asaan App to generate your 17-digit PSID payment number.",
        "detailUr": "آن لائن ایم آر پی پورٹل پر جا کر 17 ہندسوں کا PSID فیس واؤچر بنائیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Pay Fee via JazzCash, Easypaisa or 1Link Banking",
        "titleUr": "فیس آن لائن جمع کروائیں",
        "detailEn": "Use JazzCash, Easypaisa, HBL, MCB, or any 1Link bank mobile app to clear your passport fee using the PSID.",
        "detailUr": "جاز کیش، ایزی پیسہ یا بینک ایپ میں PSID درج کر کے فیس ادا کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Visit Regional Passport Office (RPO)",
        "titleUr": "پاسپورٹ آفس تشریف لے جائیں",
        "detailEn": "Take your original CNIC, paid fee receipt, and previous passport to your nearest Regional Passport Office for biometric capture.",
        "detailUr": "اصل شناختی کارڈ اور فیس رسید کے ساتھ قریبی پاسپورٹ آفس جائیں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Track Passport Printing & Delivery",
        "titleUr": "پاسپورٹ ٹریک کریں",
        "detailEn": "Track passport processing status via tracking.dgip.gov.pk or SMS to 9988 until courier delivery.",
        "detailUr": "ٹریکنگ پورٹل یا 9988 ایس ایم ایس کے ذریعے پاسپورٹ کا سٹیٹس چیک کریں۔"
      }
    ],
    "contentEn": "The Directorate General of Immigration and Passports (DGIP) sets official tariffs for Machine Readable Passports (MRP) and chip-embedded e-Passports across Pakistan.\n\n## Official Passport Rate Chart 2026\n\n- **36 Pages (5 Years)**: Normal PKR 4,500 | Urgent PKR 7,500 | Fast Track PKR 12,500\n- **36 Pages (10 Years)**: Normal PKR 6,700 | Urgent PKR 11,200 | Fast Track PKR 16,200\n- **72 Pages (5 Years)**: Normal PKR 8,200 | Urgent PKR 13,500 | Fast Track PKR 18,500\n- **72 Pages (10 Years)**: Normal PKR 12,400 | Urgent PKR 20,200 | Fast Track PKR 25,200\n\n## Chip-Embedded e-Passport Fees\n- **e-Passport 36 Pages (5 Years)**: Normal PKR 9,000 | Urgent PKR 15,000 | Fast Track PKR 20,000\n- **e-Passport 36 Pages (10 Years)**: Normal PKR 13,500 | Urgent PKR 22,500 | Fast Track PKR 27,000\n\nPay via **Passport Fee Asaan App** using 17-digit PSID on JazzCash, Easypaisa, or 1Link mobile banking.",
    "contentUr": "پاکستان پاسپورٹ فیس شیڈول ڈائریکٹوریٹ جنرل آف امیگریشن اینڈ پاسپورٹس (DGIP) کا سرکاری فیس چارٹ ہے۔\n\n## فیس کی تفصیلات 2026\n- **36 صفحات (5 سال)**: نارمل 4,500 | ارجنٹ 7,500 | فاسٹ ٹریک 12,500 روپے\n- **36 صفحات (10 سال)**: نارمل 6,700 | ارجنٹ 11,200 | فاسٹ ٹریک 16,200 روپے\n- **ای پاسپورٹ 36 صفحات (5 سال)**: نارمل 9,000 | ارجنٹ 15,000 | فاسٹ ٹریک 20,000 روپے\n\nپاسپورٹ فیس آسان ایپ سے 17 ہندسوں کا PSID بنا کر جاز کیش یا ایزی پیسہ سے جمع کروائیں۔",
    "relatedSlugs": [
      "/passport/online-apply",
      "/passport/tracking-status",
      "/passport/renewal-documents"
    ]
  },
  "online-apply": {
    "slug": "online-apply",
    "fullPath": "/passport/online-apply",
    "categoryId": "passport",
    "titleEn": "e-Passport Online Apply Portal 2026: Step-by-Step Registration",
    "titleUr": "آن لائن پاسپورٹ اپلائی اور ای پاسپورٹ رجسٹریشن گائیڈ 2026",
    "metaDescriptionEn": "Learn how to apply for Pakistani passport renewal online via official DGIP portal onlinemrp.dgip.gov.pk. Photo specs, fee PSID, fingerprint form, and tracking.",
    "metaDescriptionUr": "ڈی جی آئی پی پورٹل سے آن لائن پاسپورٹ رینیول اور ای پاسپورٹ اپلائی کرنے کا مکمل طریقہ۔ فوٹو سائز، فیس پی ایس آئی ڈی اور بائیو میٹرک فارم۔",
    "directAnswerEn": "To apply for passport renewal online in Pakistan or abroad, visit onlinemrp.dgip.gov.pk. Register an account, choose \"Renewal\", upload a white-background photograph and scanned Smart CNIC, generate 17-digit PSID fee voucher, upload the fingerprint form, and submit for home delivery.",
    "directAnswerUr": "آن لائن پاسپورٹ رینیو کرنے کے لیے onlinemrp.dgip.gov.pk پر جا کر اکاؤنٹ بنائیں۔ رینیول منتخب کریں، شناختی کارڈ کا سکین اور تصویر اپلوڈ کریں اور آن لائن فیس جمع کروائیں۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "DGIP Online Passport Portal",
      "url": "https://onlinemrp.dgip.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Immigration & Tech Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "36 Pages (5 Years Renewal)",
        "serviceUr": "36 صفحات (5 سالہ تجدید)",
        "normal": "PKR 4,500",
        "urgent": "PKR 7,500",
        "executive": "PKR 12,500"
      },
      {
        "serviceEn": "36 Pages (10 Years Renewal)",
        "serviceUr": "36 صفحات (10 سالہ تجدید)",
        "normal": "PKR 6,700",
        "urgent": "PKR 11,200",
        "executive": "PKR 16,200"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Register on DGIP Portal",
        "titleUr": "پورٹل پر اکاؤنٹ بنائیں",
        "detailEn": "Create account at onlinemrp.dgip.gov.pk with email and OTP.",
        "detailUr": "onlinemrp.dgip.gov.pk پر اپنا اکاؤنٹ بنائیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Enter CNIC & Passport Details",
        "titleUr": "شناختی کارڈ اور پاسپورٹ نمبر درج کریں",
        "detailEn": "Enter your 13-digit Smart CNIC and previous passport number.",
        "detailUr": "اپنا شناختی کارڈ اور پرانا پاسپورٹ نمبر درج کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Upload Photo & Scans",
        "titleUr": "تصویر اور دستاویزات اپلوڈ کریں",
        "detailEn": "Upload a white-background passport photograph and clear CNIC scan.",
        "detailUr": "سفید بیک گراؤنڈ تصویر اور شناختی کارڈ سکین اپلوڈ کریں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Download & Upload Fingerprint Form",
        "titleUr": "فنگر پرنٹ فارم اپلوڈ کریں",
        "detailEn": "Print the fingerprint form, apply ink finger impressions, scan at 600 DPI, and upload.",
        "detailUr": "فنگر پرنٹ فارم پر انگوٹھا لگا کر سکین اپلوڈ کریں۔"
      },
      {
        "stepNumber": 5,
        "titleEn": "Pay Fee via PSID & Track Delivery",
        "titleUr": "فیس جمع کروا کر ٹریک کریں",
        "detailEn": "Pay fee via PSID on JazzCash or Credit Card and track courier delivery.",
        "detailUr": "آن لائن فیس ادا کر کے ہوم ڈلیوری ٹریک کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Who is eligible for online passport renewal?",
        "questionUr": "آن لائن پاسپورٹ تجدید کا اہل کون ہے؟",
        "answerEn": "Existing Machine Readable Passport holders whose passport has expired or has less than 7 months validity remaining can renew online. First-time passport applicants MUST visit a physical passport office.",
        "answerUr": "جن کا پاسپورٹ پہلے سے بنا ہو اور ایکسپائر ہو رہا ہو وہ آن لائن رینیو کر سکتے ہیں۔ پہلی بار بنوانے والے آن لائن اپلائی نہیں کر سکتے۔"
      }
    ],
    "contentEn": "The DGIP online passport system allows citizens inside Pakistan and overseas to renew Machine Readable Passports without visiting a regional office.\n\nVisit [onlinemrp.dgip.gov.pk](https://onlinemrp.dgip.gov.pk/) to create an account, upload documents, pay fee via PSID, and get doorstep delivery.",
    "contentUr": "آن لائن پاسپورٹ سسٹم کے ذریعے گھر بیٹھے پاسپورٹ رینیو کروائیں۔ [onlinemrp.dgip.gov.pk](https://onlinemrp.dgip.gov.pk/) پر جائیں۔",
    "relatedSlugs": [
      "/passport/fee-2026",
      "/passport/tracking-status",
      "/passport/renewal-documents"
    ]
  },
  "tracking-status": {
    "slug": "tracking-status",
    "fullPath": "/passport/tracking-status",
    "categoryId": "passport",
    "titleEn": "Passport Tracking Status Online 2026: Track via Token Number & SMS 9988",
    "titleUr": "پاسپورٹ ٹریکنگ آن لائن 2026: ٹوکن نمبر اور ایس ایم ایس 9988",
    "metaDescriptionEn": "Track Pakistani passport application delivery status online or via SMS 9988. Enter 11-digit token number or tracking code to know printing and dispatch status.",
    "metaDescriptionUr": "اپنے پاسپورٹ کا سٹیٹس ٹوکن نمبر درج کر کے آن لائن یا 9988 پر ایس ایم ایس بھیج کر مفت معلوم کریں۔",
    "directAnswerEn": "To track your Pakistani passport status, send your 11-digit Token Number via SMS to 9988 (cost PKR 2+tax) or check for free online at tracking.dgip.gov.pk by entering your 11-digit Token Number and regional office code.",
    "directAnswerUr": "پاسپورٹ کی تیاری معلوم کرنے کے لیے 11 ہندسوں کا ٹوکن نمبر tracking.dgip.gov.pk پر درج کریں یا 9988 پر ایس ایم ایس بھیجیں۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "DGIP Passport Tracking Portal",
      "url": "https://tracking.dgip.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Passports & Tracking Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "SMS 9988 Passport Status Query",
        "serviceUr": "ایس ایم ایس 9988 پر پاسپورٹ ٹریکنگ",
        "normal": "PKR 2 + tax per SMS",
        "urgent": "Instant Status SMS",
        "executive": "All Mobile Networks"
      },
      {
        "serviceEn": "Online Web Tracking Portal",
        "serviceUr": "آن لائن ویب پورٹل ٹریکنگ",
        "normal": "PKR 0 (Free)",
        "urgent": "Instant Dashboard Check",
        "executive": "24/7 Availability"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Locate 11-Digit Passport Token Number",
        "titleUr": "11 ہندسوں کا ٹوکن نمبر تلاش کریں",
        "detailEn": "Find the 11-digit Token Number printed on your passport office token slip.",
        "detailUr": "پاسپورٹ آفس سے ملنے والی رسید پر 11 ہندسوں کا ٹوکن نمبر دیکھیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Send SMS to 9988 or Check Web Portal",
        "titleUr": "9988 پر ایس ایم ایس کریں یا ویب پورٹل کھولیں",
        "detailEn": "Send SMS to 9988 or visit tracking.dgip.gov.pk to view printing status.",
        "detailUr": "9988 پر ایس ایم ایس کریں یا tracking.dgip.gov.pk پر مفت آن لائن سٹیٹس معلوم کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "What does \"In-Printing\" status mean for passport?",
        "questionUr": "پاسپورٹ ٹریکنگ میں In-Printing کا کیا مطلب ہے؟",
        "answerEn": "It means your data verification is approved, and your passport is currently being printed at the central HQ printing facility in Islamabad.",
        "answerUr": "اس کا مطلب ہے کہ بائیو میٹرک اور سیکیورٹی کلیئرنس ہو چکی ہے اور پاسپورٹ پرنٹ ہو رہا ہے۔"
      }
    ],
    "contentEn": "Track your passport status online at [tracking.dgip.gov.pk](https://tracking.dgip.gov.pk/) or SMS your 11-digit Token Number to **9988**.",
    "contentUr": "پاسپورٹ کا آن لائن سٹیٹس [tracking.dgip.gov.pk](https://tracking.dgip.gov.pk/) پر چیک کریں یا 9988 پر ایس ایم ایس بھیجیں۔",
    "relatedSlugs": [
      "/passport/fee-2026",
      "/passport/online-apply"
    ]
  },
  "renewal-documents": {
    "slug": "renewal-documents",
    "fullPath": "/passport/renewal-documents",
    "categoryId": "passport",
    "titleEn": "Required Documents for Passport Renewal in Pakistan (2026 Checklist)",
    "titleUr": "پاسپورٹ کی تجدید کے لیے ضروری کاغذات 2026 (چیک لسٹ)",
    "metaDescriptionEn": "Complete document checklist for adult and minor passport renewal in Pakistan. Original CNIC, previous passport copy, fee deposit receipt, and NOC requirements.",
    "metaDescriptionUr": "بالغ اور بچوں کے پاسپورٹ رینیول کے لیے درکار کاغذات۔ اصل شناختی کارڈ، پرانا پاسپورٹ، فیس چالان اور این او سی۔",
    "directAnswerEn": "To renew a Pakistani passport, adult applicants need: Original valid Smart CNIC/NICOP + 2 photocopies, original previous passport + photocopy of first 2 pages, and official bank fee receipt (17-digit PSID). Minors require original NADRA B-Form and parents' Smart CNICs.",
    "directAnswerUr": "پاسپورٹ رینیو کروانے کے لیے اصل سمارٹ شناختی کارڈ کی کاپی، پرانا پاسپورٹ، اور فیس چالان کی رسید ساتھ لائیں۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "DGIP Document Guidelines",
      "url": "https://dgip.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Documentation Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "36-Page 5-Year Renewal Fee",
        "serviceUr": "36 صفحات 5 سالہ فیس",
        "normal": "PKR 4,500",
        "urgent": "PKR 7,500",
        "executive": "PKR 12,500"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Prepare Original Smart CNIC & Copies",
        "titleUr": "اصل شناختی کارڈ اور کاپیاں",
        "detailEn": "Ensure CNIC is valid and active in NADRA records.",
        "detailUr": "اصل سمارٹ شناختی کارڈ پاس رکھیں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Do I need an NOC if I am a government employee?",
        "questionUr": "کیا سرکاری ملازمین کے لیے NOC لازمی ہے؟",
        "answerEn": "Yes. Government employees must provide an official No Objection Certificate (NOC) signed by their department head.",
        "answerUr": "جی ہاں، سرکاری ملازمین کے لیے محکمہ کا این او سی (NOC) لازمی ہے۔"
      }
    ],
    "contentEn": "Ensure you take all original valid documents and clean photocopies when visiting the Regional Passport Office.\n\n## Document Checklist for Adults (18+)\n- Original Valid Smart CNIC + 2 Photocopies.\n- Original Previous Passport + Photocopy of pages 1 and 2.\n- 17-Digit PSID Paid Fee Receipt.\n\nDetails verified on [DGIP Official Website](https://dgip.gov.pk/).",
    "contentUr": "پاسپورٹ دفتر جانے سے قبل تمام اصل کاغذات اور فوٹو کاپیاں ترتیب سے ساتھ لائیں۔",
    "relatedSlugs": [
      "/passport/fee-2026",
      "/passport/online-apply"
    ]
  },
  "office-contact-directory": {
    "slug": "office-contact-directory",
    "fullPath": "/passport/office-contact-directory",
    "categoryId": "passport",
    "titleEn": "Pakistan Passport Office Directory 2026: Contacts & Addresses",
    "titleUr": "پاکستان بھر کے پاسپورٹ دفاتر کے فون نمبرز اور پتے ڈائریکٹری 2026",
    "metaDescriptionEn": "Find addresses, phone numbers, and helpline of Regional Passport Offices in Lahore, Karachi, Islamabad, Rawalpindi, Peshawar, Quetta, Multan, and Faisalabad.",
    "metaDescriptionUr": "لاہور، کراچی، اسلام آباد، راولپنڈی، پشاور، کوئٹہ اور دیگر شہروں کے ریجنل پاسپورٹ دفاتر کے فون نمبر اور مکمل پتہ۔",
    "directAnswerEn": "The central helpline for DGIP Pakistan is 051-111-344-777. Executive 24/7 Passport Offices operate in Lahore (Garden Town), Islamabad (G-10/4), and Karachi (Clifton/Awami Markaz).",
    "directAnswerUr": "ڈی جی آئی پی پاسپورٹ کی مرکزی ہیلپ لائن 051-111-344-777 ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "DGIP Office Directory Portal",
      "url": "https://dgip.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Directory Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "DGIP Central Helpline",
        "serviceUr": "مرکزی ہیلپ لائن",
        "normal": "051-111-344-777",
        "urgent": "24/7 Support",
        "executive": "Toll-Free"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Find Nearest RPO Office",
        "titleUr": "قریبی پاسپورٹ دفتر کا انتخاب",
        "detailEn": "Select the Regional Passport Office in your division.",
        "detailUr": "اپنے ڈویژن کا پاسپورٹ دفتر دیکھیں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Which passport offices in Pakistan operate 24/7?",
        "questionUr": "پاکستان میں کون سے پاسپورٹ دفاتر 24 گھنٹے کھلے رہتے ہیں؟",
        "answerEn": "Executive Passport Offices in Lahore (Garden Town) and Islamabad (G-10/4) operate 24/7 for urgent passport processing.",
        "answerUr": "لاہور گارڈن ٹاؤن اور اسلام آباد جی 10/4 کے پاسپورٹ دفاتر 24 گھنٹے کھلے رہتے ہیں۔"
      }
    ],
    "contentEn": "Find physical location addresses, phone numbers, and helpline details for all Regional Passport Offices across Pakistan.\n\n- **Islamabad HQ**: Sector G-10/4, Islamabad. Phone: 051-111-344-777.\n- **Lahore Executive**: Garden Town, Lahore. Phone: 042-99231405.\n- **Karachi RPO**: Awami Markaz, Shahrah-e-Faisal / Clifton Block 4, Karachi. Phone: 021-99206300.\n\nVerified via [DGIP Official Directory](https://dgip.gov.pk/).",
    "contentUr": "پاکستان بھر کے تمام پاسپورٹ دفاتر کے پتے اور رابطہ نمبرز نیچے دیے گئے ہیں۔",
    "relatedSlugs": [
      "/passport/fee-2026",
      "/passport/tracking-status"
    ]
  },
  "bise-lahore-result-2026": {
    "slug": "bise-lahore-result-2026",
    "fullPath": "/education/bise-lahore-result-2026",
    "categoryId": "education",
    "titleEn": "BISE Lahore Board Result 2026 Online Check (Matric & Intermediate)",
    "titleUr": "بی آئی ایس ای لاہور بورڈ رزلٹ 2026 آن لائن چیک (میٹرک و انٹر)",
    "metaDescriptionEn": "Check BISE Lahore Board Class 9th, 10th (Matric), 11th (1st Year), and 12th (2nd Year / FSc) annual exam results 2026 by Roll Number, Name, or SMS to 800291.",
    "metaDescriptionUr": "لاہور بورڈ 9ویں، 10ویں، 11ویں اور 12ویں کلاس کا رزلٹ آن لائن رول نمبر یا 800291 پر ایس ایم ایس سے چیک کریں۔",
    "directAnswerEn": "To check BISE Lahore Board Result 2026 online, visit result.biselahore.com. Enter your 6-digit Roll Number and select your exam session. Alternatively, send your Roll Number via SMS to 800291.",
    "directAnswerUr": "لاہور بورڈ رزلٹ 2026 آن لائن دیکھنے کے لیے result.biselahore.com پر جائیں، یا 800291 پر ایس ایم ایس کریں۔",
    "lastVerified": "August 10, 2026",
    "officialSource": {
      "name": "BISE Lahore Official Result Portal",
      "url": "https://result.biselahore.com/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Education Desk"
    },
    "faqs": [
      {
        "questionEn": "How can I check BISE results online by roll number?",
        "questionUr": "بورڈ رزلٹ آن لائن رول نمبر سے کیسے چیک کریں؟",
        "answerEn": "Visit official BISE web portal, select exam class (Matric/Inter), enter Roll Number, and click View Result or send SMS code.",
        "answerUr": "سرکاری بورڈ ویب سائٹ پر رول نمبر درج کر کے آن لائن رزلٹ دیکھیں۔"
      },
      {
        "questionEn": "What is the passing percentage for board exams in Pakistan?",
        "questionUr": "پاکستان میں تعلیمی بورڈز میں پاسنگ مارکس کتنے ہیں؟",
        "answerEn": "Minimum passing mark for BISE Matric & Intermediate board exams is 33% (being upgraded to 40% under new policies).",
        "answerUr": "تعلیمی بورڈ کے امتحان میں کامیابی کے لیے کم از کم 33 فیصد نمبرز ضروری ہیں۔"
      },
      {
        "questionEn": "How to apply for HEC degree attestation online?",
        "questionUr": "ایچ ای سی ڈگری تصدیق کا آن لائن طریقہ کیا ہے؟",
        "answerEn": "Create profile on eservices.hec.gov.pk, upload degree transcripts, pay fee via 1Link PSID, and schedule verification.",
        "answerUr": "eservices.hec.gov.pk پر پروفائل بنا کر ڈگری اپلوڈ کریں اور فیس ادا کریں۔"
      }
    ],
    "contentEn": "BISE Lahore conducts matriculation and intermediate board exams for Lahore, Kasur, Sheikhupura, and Nankana Sahib districts.\n\n> 💡 **ALL PAKISTAN RESULT TOOL**: \n> You can check results for all 25 Pakistani BISE boards on our [All Pakistan Board Result Checker](/education/bise-result-check-2026).",
    "contentUr": "لاہور بورڈ سالانہ امتحانات کے نتائج اپنی آفیشل ویب سائٹ پر جاری کرتا ہے۔",
    "relatedSlugs": [
      "/education/bise-result-check-2026",
      "/education/punjab-university-admission-2026",
      "/education/nust-admission-process"
    ]
  },
  "bise-result-check-2026": {
    "slug": "bise-result-check-2026",
    "fullPath": "/education/bise-result-check-2026",
    "categoryId": "education",
    "titleEn": "All Pakistan BISE Board Results 2026: Check Matric & Inter Gazette Online",
    "titleUr": "پاکستان تمام تعلیمی بورڈز رزلٹ 2026: میٹرک و انٹر آن لائن رزلٹ چیک کریں",
    "metaDescriptionEn": "Unified result checker tool for all 25+ BISE educational boards in Pakistan. Check 9th, 10th (Matric), 11th, and 12th (Inter) annual exam results 2026 for Punjab, Sindh, KPK, Federal, and AJK.",
    "metaDescriptionUr": "پاکستان کے تمام 25 تعلیمی بورڈز کا آن لائن رزلٹ پورٹل 2026۔ پنجاب، سندھ، کے پی کے، فیڈرل اور کے پی کے بورڈز کے میٹرک و انٹر رزلٹ رول نمبر یا ایس ایم ایس سے چیک کریں۔",
    "directAnswerEn": "To check your 2026 annual board exam results for any BISE board in Pakistan, select your province and board in our Unified Result Checker above, enter your 6-digit Roll Number, and click 'Check Result on Official Board'. You will be redirected directly to your board's official gazette server safely.",
    "directAnswerUr": "پاکستان کے کسی بھی تعلیمی بورڈ کا رزلٹ دیکھنے کے لیے اوپر دیے گئے پورٹل میں اپنا صوبہ، بورڈ اور رول نمبر منتخب کریں۔ رزلٹ براہِ راست آفیشل ویب سائٹ سے فوری کھل جائے گا۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "Inter Board Coordination Commission (IBCC)",
      "url": "https://ibcc.edu.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Education & Examination Board Desk"
    },
    "faqs": [
      {
        "questionEn": "How can I check BISE results online by roll number?",
        "questionUr": "بورڈ رزلٹ آن لائن رول نمبر سے کیسے چیک کریں؟",
        "answerEn": "Select your Province and BISE Board in our interactive tool above, type your Roll Number, and click 'Check Result'. Our redirect assistant will launch your official board's gazette portal in a new tab with zero delay.",
        "answerUr": "اوپر موجود پورٹل میں اپنا صوبہ اور بورڈ منتخب کریں، رول نمبر لکھیں اور 'آن لائن رزلٹ' پر کلک کریں۔"
      },
      {
        "questionEn": "What are the SMS codes for checking BISE board results in Pakistan?",
        "questionUr": "پاکستان میں تعلیمی بورڈز کا رزلٹ ایس ایم ایس سے چیک کرنے کا طریقہ اور کوڈز کیا ہیں؟",
        "answerEn": "Send your Roll Number to the official code: BISE Lahore (800291), BISE Rawalpindi (800296), BISE Multan (800293), BISE Faisalabad (800299), BISE Gujranwala (800299), BISE Sargodha (800290), BISE Bahawalpur (800298), BISE D.G. Khan (800295), BISE Sahiwal (800292), Sindh Boards (8583), KPK Boards (8333 / 9818), Federal Board (5050).",
        "answerUr": "لاہور بورڈ 800291، راولپنڈی 800296، ملتان 800293، فیصل آباد 800299، سندھ بورڈز 8583، اور فیڈرل بورڈ 5050 پر ایس ایم ایس کے ذریعے رزلٹ چیک کیا جا سکتا ہے۔"
      },
      {
        "questionEn": "How to apply for paper rechecking if my marks seem incorrect?",
        "questionUr": "نمبرز کم آنے کی صورت میں پیپر ری چیکنگ کا طریقہ کیا ہے؟",
        "answerEn": "Apply for rechecking on your board's official website within 15 days of result declaration. Rechecking involves re-counting marks, verifying un-marked answers, and ensuring proper tabulation.",
        "answerUr": "رزلٹ کے اعلان کے 15 دن کے اندر آفیشل بورڈ پورٹل پر آن لائن ری چیکنگ کی درخواست جمع کروائیں۔"
      },
      {
        "questionEn": "What should I do if I forgot or lost my board Roll Number?",
        "questionUr": "رول نمبر بھول جانے کی صورت میں نام یا گزٹ سے رزلٹ کیسے دیکھیں؟",
        "answerEn": "You can download the full PDF Official Gazette published on your board's website on result day and search for your school name or student candidate name.",
        "answerUr": "امتحان کے دن آفیشل ویب سائٹ سے بورڈ کا مکمل پی ڈی ایف گزٹ ڈاؤن لوڈ کر کے اپنے نام سے تلاش کریں۔"
      }
    ],
    "contentEn": "Every academic year, over 4 million students across Pakistan sit for secondary (Matric Part 1 & Part 2 / Class 9th & 10th) and higher secondary (Intermediate Part 1 & Part 2 / Class 11th & 12th) examinations conducted by the 25 primary Boards of Intermediate and Secondary Education (BISE).\n\nNavigating multiple outdated government servers during result day can be frustrating due to heavy server traffic. Our All-Pakistan BISE Result Assistant eliminates server congestion by connecting you directly to verified gazette endpoints for every province.\n\n---\n\n## All Pakistan BISE Education Board Results Portal 2026\n\nPakistan's examination system is organized provincially, supervised by the Inter Board Coordination Commission (IBCC). Each board manages affiliated public and private schools and colleges in its assigned administrative districts.\n\n### 1. BISE Lahore Result 2026 (9th, 10th & Inter)\nBISE Lahore is Punjab's largest educational board, serving students across Lahore, Kasur, Sheikhupura, and Nankana Sahib. The Matric annual result is traditionally declared in July/August, followed by the Intermediate (FSc Pre-Engineering, Pre-Medical, ICS, FA, and Commerce) results in September. Students can check their result at result.biselahore.com or by texting their 6-digit Roll Number to 800291.\n\n### 2. BISE Karachi Result 2026 (BSEK & BIEK)\nIn Karachi, secondary education is split into two specialized boards:\n- BSEK Karachi: Manages SSC Part 1 (Class 9th) and SSC Part 2 (Class 10th) exams. Results are published on bsek.edu.pk.\n- BIEK Karachi: Manages HSSC Part 1 (Class 11th) and HSSC Part 2 (Class 12th) exams across Science, General Science, Commerce, and Humanities. Results are hosted at biek.edu.pk.\n- Both Karachi boards support SMS verification via code 8583.\n\n### 3. BISE Multan Result 2026\nBISE Multan covers districts including Multan, Khanewal, Vehari, and Lodhran. Results for SSC and HSSC annual exams are accessible on bisemultan.edu.pk. Candidates can also verify marks by sending an SMS to 800293.\n\n### 4. BISE Rawalpindi Result 2026\nBISE Rawalpindi caters to Rawalpindi, Attock, Chakwal, and Jhelum districts. Candidates can query their marks card on biserawalpindi.edu.pk or text their roll number to 800296.\n\n### 5. BISE Faisalabad Result 2026\nBISE Faisalabad manages exams for Faisalabad, Jhang, Toba Tek Singh, and Chiniot. Official result lookup is hosted at bisefsd.edu.pk with SMS verification on 800299.\n\n### 6. BISE Peshawar Result 2026\nBISE Peshawar is Khyber Pakhtunkhwa's flagship education board, presiding over Peshawar, Charsadda, and Chitral. Results are released on bisep.edu.pk and via SMS code 8333.\n\n### 7. Federal Board Result 2026 (FBISE Islamabad)\nThe Federal Board of Intermediate and Secondary Education (FBISE) conducts exams for cantonment schools, overseas Pakistani institutions, and federal territory schools across Pakistan and international missions. FBISE offers direct roll number search and e-marksheets at fbise.edu.pk and SMS alerts on 5050.\n\n---\n\n## 9th & 10th Class Gazette Results 2026 Across Pakistan\n\nWhether you are checking SSC Part 1 (9th Class) or SSC Part 2 (10th Class Matric), board results follow strict evaluation procedures. Position holders are announced one day prior to public portal releases at official press ceremonies.\n\n---\n\n## How Paper Rechecking & Recounting Works\n\nIf your declared marks differ significantly from your expectation, every BISE board provides a formal Rechecking & Recounting Facility:\n1. Application Window: Must be submitted within 15 days of official result declaration.\n2. Scope of Rechecking: Under BISE regulations, rechecking covers recounting of total marks, verifying that all answer booklet pages are marked, and ensuring correct transfer of marks from answer sheets to the result ledger.\n3. Fee Structure: Nominal per-subject rechecking fee (typically PKR 1,000 to PKR 1,500 per paper) payable via bank challan.\n\n---\n\n> 🛡️ INDEPENDENT PLATFORM DISCLAIMER\n> Pakistan Info Hub is a free, independent civic information portal. We are not affiliated with any BISE board or the Ministry of Federal Education. All roll numbers are processed client-side without storing personal candidate data.",
    "contentUr": "پاکستان میں ہر سال 40 لاکھ سے زائد طلباء میٹرک (نویں و دسویں) اور انٹر میڈیٹ (گیارہویں و بارہویں) کے سالانہ امتحانات میں شرکت کرتے ہیں۔\n\nرزلٹ والے دن آفیشل سرورز پر شدید ٹریفک کی وجہ سے سائٹ ڈاؤن ہو جاتی ہے۔ ہمارے اس پورٹل کے ذریعے آپ بغیر کسی تاخیر کے اپنے بورڈ کی آفیشل رزلٹ ویب سائٹ تک رسائی حاصل کر سکتے ہیں۔\n\n---\n\n## تمام پاکستانی تعلیمی بورڈز کا رزلٹ پورٹل 2026\n\n### 1. بی آئی ایس ای لاہور رزلٹ 2026\nلاہور بورڈ پنجاب کا سب سے بڑا تعلیمی ادارہ ہے۔ رزلٹ biselahore.com پر دیکھ سکتے ہیں یا 800291 پر ایس ایم ایس کر سکتے ہیں۔\n\n### 2. کراچی میٹرک و انٹر بورڈ رزلٹ\nکراچی میں نویں اور دسویں کا رزلٹ BSEK (bsek.edu.pk) پر جبکہ انٹر کا رزلٹ BIEK (biek.edu.pk) پر جاری ہوتا ہے۔ ایس ایم ایس کوڈ 8583 ہے۔\n\n### 3. ملتان، راولپنڈی، فیصل آباد اور پشاور بورڈز\nان تمام بورڈز کے رزلٹ آفیشل لنکس اور ایس ایم ایس کوڈز پورٹل پر موجود ہیں۔",
    "relatedSlugs": [
      "/education/bise-lahore-result-2026",
      "/education/punjab-university-admission-2026",
      "/education/css-preparation-books",
      "/education/hec-scholarship-pakistan"
    ]
  },
  "punjab-university-admission-2026": {
    "slug": "punjab-university-admission-2026",
    "fullPath": "/education/punjab-university-admission-2026",
    "categoryId": "education",
    "titleEn": "Punjab University (PU) Admission 2026: BS & Master Programs, Merit Formula",
    "titleUr": "پنجاب یونیورسٹی (PU) ایڈمیشن 2026: بی ایس پروگرامز اور میرٹ فارمولا",
    "metaDescriptionEn": "University of the Punjab Lahore admission guide 2026. Online admission portal (admissions.pu.edu.pk), PU entry test registration, fee structure, and merit calculator.",
    "metaDescriptionUr": "جامعہ پنجاب لاہور داخلہ 2026۔ آن لائن داخلہ پورٹل، انٹری ٹیسٹ شیڈول، اور بی ایس 4 سالہ ڈگری پروگرامز کا میرٹ۔",
    "directAnswerEn": "Punjab University (PU Lahore) admissions open online at admissions.pu.edu.pk. Merit weightage: 30% PU Entry Test + 70% Intermediate marks.",
    "directAnswerUr": "پنجاب یونیورسٹی کے داخلے admissions.pu.edu.pk پر شروع ہوتے ہیں۔ 30 فیصد ٹیسٹ اور 70 فیصد انٹر کا میرٹ فارمولا ہے۔",
    "lastVerified": "August 10, 2026",
    "officialSource": {
      "name": "University of the Punjab Admissions",
      "url": "https://pu.edu.pk/admissions/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Higher Education Desk"
    },
    "faqs": [
      {
        "questionEn": "How can I check BISE results online by roll number?",
        "questionUr": "بورڈ رزلٹ آن لائن رول نمبر سے کیسے چیک کریں؟",
        "answerEn": "Visit official BISE web portal, select exam class (Matric/Inter), enter Roll Number, and click View Result or send SMS code.",
        "answerUr": "سرکاری بورڈ ویب سائٹ پر رول نمبر درج کر کے آن لائن رزلٹ دیکھیں۔"
      },
      {
        "questionEn": "What is the passing percentage for board exams in Pakistan?",
        "questionUr": "پاکستان میں تعلیمی بورڈز میں پاسنگ مارکس کتنے ہیں؟",
        "answerEn": "Minimum passing mark for BISE Matric & Intermediate board exams is 33% (being upgraded to 40% under new policies).",
        "answerUr": "تعلیمی بورڈ کے امتحان میں کامیابی کے لیے کم از کم 33 فیصد نمبرز ضروری ہیں۔"
      },
      {
        "questionEn": "How to apply for HEC degree attestation online?",
        "questionUr": "ایچ ای سی ڈگری تصدیق کا آن لائن طریقہ کیا ہے؟",
        "answerEn": "Create profile on eservices.hec.gov.pk, upload degree transcripts, pay fee via 1Link PSID, and schedule verification.",
        "answerUr": "eservices.hec.gov.pk پر پروفائل بنا کر ڈگری اپلوڈ کریں اور فیس ادا کریں۔"
      }
    ],
    "contentEn": "Complete breakdown of undergraduate and postgraduate admissions at University of the Punjab Lahore.",
    "contentUr": "پنجاب یونیورسٹی کے تمام شعبہ جات کے داخلہ فارم اور میرٹ کی تفصیل۔",
    "relatedSlugs": [
      "/education/hec-scholarship-pakistan",
      "/education/bise-lahore-result-2026"
    ]
  },
  "hec-scholarship-pakistan": {
    "slug": "hec-scholarship-pakistan",
    "fullPath": "/education/hec-scholarship-pakistan",
    "categoryId": "education",
    "titleEn": "HEC Scholarships 2026 in Pakistan & Abroad: Ehsaas, USAID & Foreign Schemes",
    "titleUr": "ایچ ای سی سکالرشپ 2026: پاکستان اور بیرون ملک تعلیم کے لیے وظائف",
    "metaDescriptionEn": "Apply for HEC (Higher Education Commission) undergraduate and postgraduate scholarships in Pakistan. Ehsaas Undergraduate, Commonwealth, China, and Hungary scholarship guides.",
    "metaDescriptionUr": "ایچ ای سی کے قومی اور بین الاقوامی تعلیمی وظائف 2026۔ احساس سکالرشپ، ہنگری اور چین سکالرشپ آن لائن اپلائی۔",
    "directAnswerEn": "HEC offers fully funded scholarships through scholarship.hec.gov.pk. Major schemes include HEC Need-Based Scholarships, Ehsaas Undergraduate Program, and Stipendium Hungaricum.",
    "directAnswerUr": "ایچ ای سی پاکستان کے تمام باصلاحیت طلباء کو scholarship.hec.gov.pk کے ذریعے مفت وظائف فراہم کرتا ہے۔",
    "lastVerified": "August 10, 2026",
    "officialSource": {
      "name": "HEC Official Scholarship Portal",
      "url": "https://scholarship.hec.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Scholarships Desk"
    },
    "faqs": [
      {
        "questionEn": "How can I check BISE results online by roll number?",
        "questionUr": "بورڈ رزلٹ آن لائن رول نمبر سے کیسے چیک کریں؟",
        "answerEn": "Visit official BISE web portal, select exam class (Matric/Inter), enter Roll Number, and click View Result or send SMS code.",
        "answerUr": "سرکاری بورڈ ویب سائٹ پر رول نمبر درج کر کے آن لائن رزلٹ دیکھیں۔"
      },
      {
        "questionEn": "What is the passing percentage for board exams in Pakistan?",
        "questionUr": "پاکستان میں تعلیمی بورڈز میں پاسنگ مارکس کتنے ہیں؟",
        "answerEn": "Minimum passing mark for BISE Matric & Intermediate board exams is 33% (being upgraded to 40% under new policies).",
        "answerUr": "تعلیمی بورڈ کے امتحان میں کامیابی کے لیے کم از کم 33 فیصد نمبرز ضروری ہیں۔"
      },
      {
        "questionEn": "How to apply for HEC degree attestation online?",
        "questionUr": "ایچ ای سی ڈگری تصدیق کا آن لائن طریقہ کیا ہے؟",
        "answerEn": "Create profile on eservices.hec.gov.pk, upload degree transcripts, pay fee via 1Link PSID, and schedule verification.",
        "answerUr": "eservices.hec.gov.pk پر پروفائل بنا کر ڈگری اپلوڈ کریں اور فیس ادا کریں۔"
      }
    ],
    "contentEn": "Find fully funded national and international scholarships verified by the Higher Education Commission of Pakistan.",
    "contentUr": "اعلیٰ تعلیم کے لیے حکومت پاکستان اور ایچ ای سی کے زیر اہتمام جاری تمام سکالرشپ پروگرامز کی فہرست۔",
    "relatedSlugs": [
      "/education/punjab-university-admission-2026",
      "/education/nust-admission-process"
    ]
  },
  "nust-admission-process": {
    "slug": "nust-admission-process",
    "fullPath": "/education/nust-admission-process",
    "categoryId": "education",
    "titleEn": "NUST Entry Test (NET) Admission 2026: Exam Pattern, Merit & Dates",
    "titleUr": "نسٹ یونیورسٹی (NUST) داخلہ اور نیٹ (NET) ٹیسٹ تیاری گائیڈ 2026",
    "metaDescriptionEn": "NUST Entry Test (NET-1, NET-2, NET-3, NET-4) admission process 2026. NET weightage (75%), Engineering/Computer Science syllabus, fees, and closing merit lists.",
    "metaDescriptionUr": "نسٹ اسلام آباد انٹری ٹیسٹ (NET) 2026 کی تاریخیں، میرٹ لسٹ، اور انجینئرنگ و کمپیوٹنگ سائنسز میں داخلے۔",
    "directAnswerEn": "National University of Sciences and Technology (NUST Islamabad) conducts NET in 4 series. Selection weightage: 75% NET Score, 15% HSSC, and 10% SSC. Register at nust.edu.pk.",
    "directAnswerUr": "نسٹ یونیورسٹی کے نیٹ ٹیسٹ (NET) کا نتیجہ 75 فیصد میرٹ کی ویٹیج رکھتا ہے۔",
    "lastVerified": "August 10, 2026",
    "officialSource": {
      "name": "NUST Official Admissions Portal",
      "url": "https://nust.edu.pk/admissions/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Engineering Education Desk"
    },
    "faqs": [
      {
        "questionEn": "How can I check BISE results online by roll number?",
        "questionUr": "بورڈ رزلٹ آن لائن رول نمبر سے کیسے چیک کریں؟",
        "answerEn": "Visit official BISE web portal, select exam class (Matric/Inter), enter Roll Number, and click View Result or send SMS code.",
        "answerUr": "سرکاری بورڈ ویب سائٹ پر رول نمبر درج کر کے آن لائن رزلٹ دیکھیں۔"
      },
      {
        "questionEn": "What is the passing percentage for board exams in Pakistan?",
        "questionUr": "پاکستان میں تعلیمی بورڈز میں پاسنگ مارکس کتنے ہیں؟",
        "answerEn": "Minimum passing mark for BISE Matric & Intermediate board exams is 33% (being upgraded to 40% under new policies).",
        "answerUr": "تعلیمی بورڈ کے امتحان میں کامیابی کے لیے کم از کم 33 فیصد نمبرز ضروری ہیں۔"
      },
      {
        "questionEn": "How to apply for HEC degree attestation online?",
        "questionUr": "ایچ ای سی ڈگری تصدیق کا آن لائن طریقہ کیا ہے؟",
        "answerEn": "Create profile on eservices.hec.gov.pk, upload degree transcripts, pay fee via 1Link PSID, and schedule verification.",
        "answerUr": "eservices.hec.gov.pk پر پروفائل بنا کر ڈگری اپلوڈ کریں اور فیس ادا کریں۔"
      }
    ],
    "contentEn": "Step-by-step guidance for cracking NET (NUST Entry Test) for Software Engineering, BBA, and Biotech programs.",
    "contentUr": "نسٹ اسلام آباد کیمپس کے مختلف پروگرامز میں داخلہ حاصل کرنے کا مکمل فارمولا۔",
    "relatedSlugs": [
      "/education/bise-lahore-result-2026",
      "/education/hec-scholarship-pakistan"
    ]
  },
  "css-preparation-books": {
    "slug": "css-preparation-books",
    "fullPath": "/education/css-preparation-books",
    "categoryId": "education",
    "titleEn": "CSS Exam Preparation Books & Syllabus 2026: FPSC Recommended List",
    "titleUr": "سی ایس ایس (CSS) امتحان کی تیاری: ایف پی ایس سی کی مجوزہ کتب و سلیبس",
    "metaDescriptionEn": "Federal Public Service Commission (FPSC) CSS exam recommended book list 2026 for compulsory and optional subjects. MPT screening test guidelines and age limits.",
    "metaDescriptionUr": "ایف پی ایس سی سی ایس ایس امتحان 2026 کا نیا سلیبس، ایم پی ٹی ٹیسٹ کی تیاری اور کتابیں۔",
    "directAnswerEn": "FPSC CSS Competitive Examination consists of 1200 marks (600 compulsory + 600 optional subjects). Candidates must pass the MPT Screening Test (200 MCQs) first. Age limit is 21 to 30 years.",
    "directAnswerUr": "سی ایس ایس امتحان کے 1200 کل نمبرز ہوتے ہیں۔ پہلے MPT سکریننگ ٹیسٹ پاس کرنا لازمی ہوتا ہے۔",
    "lastVerified": "August 10, 2026",
    "officialSource": {
      "name": "FPSC Official CSS Portal",
      "url": "https://fpsc.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Civil Services Desk"
    },
    "faqs": [
      {
        "questionEn": "How can I check BISE results online by roll number?",
        "questionUr": "بورڈ رزلٹ آن لائن رول نمبر سے کیسے چیک کریں؟",
        "answerEn": "Visit official BISE web portal, select exam class (Matric/Inter), enter Roll Number, and click View Result or send SMS code.",
        "answerUr": "سرکاری بورڈ ویب سائٹ پر رول نمبر درج کر کے آن لائن رزلٹ دیکھیں۔"
      },
      {
        "questionEn": "What is the passing percentage for board exams in Pakistan?",
        "questionUr": "پاکستان میں تعلیمی بورڈز میں پاسنگ مارکس کتنے ہیں؟",
        "answerEn": "Minimum passing mark for BISE Matric & Intermediate board exams is 33% (being upgraded to 40% under new policies).",
        "answerUr": "تعلیمی بورڈ کے امتحان میں کامیابی کے لیے کم از کم 33 فیصد نمبرز ضروری ہیں۔"
      },
      {
        "questionEn": "How to apply for HEC degree attestation online?",
        "questionUr": "ایچ ای سی ڈگری تصدیق کا آن لائن طریقہ کیا ہے؟",
        "answerEn": "Create profile on eservices.hec.gov.pk, upload degree transcripts, pay fee via 1Link PSID, and schedule verification.",
        "answerUr": "eservices.hec.gov.pk پر پروفائل بنا کر ڈگری اپلوڈ کریں اور فیس ادا کریں۔"
      }
    ],
    "contentEn": "Comprehensive preparation guide for CSS aspirants in Pakistan, including recommended author list by FPSC.",
    "contentUr": "سی ایس ایس افسر بننے کے خواہشمند طلباء کے لیے ایف پی ایس سی کا آفیشل سلیبس۔",
    "relatedSlugs": [
      "/jobs/ppsc-jobs-2026",
      "/education/hec-scholarship-pakistan"
    ]
  },
  "lesco-bill-check-online": {
    "slug": "lesco-bill-check-online",
    "fullPath": "/bills/lesco-bill-check-online",
    "categoryId": "bills",
    "titleEn": "LESCO Bill Check Online 2026: Download Duplicate Electricity Bill PDF",
    "titleUr": "لیسکو آن لائن بل چیک 2026: ڈپلیکیٹ بجلی بل پی ڈی ایف ڈاؤن لوڈ کریں",
    "metaDescriptionEn": "Check and download your LESCO electricity bill online using 14-digit Reference Number or 10-digit Customer ID. Print duplicate bill for Lahore, Okara, Kasur, Sheikhupura.",
    "metaDescriptionUr": "لاہور، قصور، اوکاڑہ اور شیخوپورہ کا لیسکو بجلی کا بل آن لائن 14 ہندسوں والے ریفرنس نمبر سے دیکھئے اور ڈاؤن لوڈ کریں۔",
    "directAnswerEn": "To check and download your LESCO electricity bill online in 2026, visit bill.pitc.com.pk/lescobill or lesco.gov.pk. Enter your 14-digit Reference Number (e.g. 01 11223 1234567 U) or 10-digit Customer ID without spaces. View your current bill amount, due date, meter reading units, and download a printable duplicate PDF copy for payment.",
    "directAnswerUr": "لیسکو (LESCO) بجلی کا بل آن لائن چیک اور ڈاؤن لوڈ کرنے کے لیے bill.pitc.com.pk/lescobill پر جائیں۔ اپنے پرانے بل سے 14 ہندسوں کا ریفرنس نمبر یا 10 ہندسوں کی کسٹمر آئی ڈی درج کریں۔ بل کی رقم، آخری تاریخ اور یونٹس چیک کر کے پرنٹ شدہ ڈپلیکیٹ بل ڈاؤن لوڈ کریں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "LESCO Official Portal",
      "url": "http://www.lesco.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Utility Services Desk"
    },
    "faqs": [
      {
        "questionEn": "What is the difference between Protected and Non-Protected consumers?",
        "questionUr": "پروٹیکٹڈ اور نان پروٹیکٹڈ بجلی صارفین میں کیا فرق ہے؟",
        "answerEn": "A 'Protected Consumer' is a domestic household that consumed 200 units or less consistently for the last 6 consecutive months. They pay heavily subsidized base unit rates (PKR 7.74 to 10.06). If consumption exceeds 200 units even in a single month, the connection falls into the 'Non-Protected' slab with base rates exceeding PKR 27/unit for the next 6 months.",
        "answerUr": "جو صارفین مسلسل 6 ماہ تک 200 یا اس سے کم یونٹ استعمال کریں وہ پروٹیکٹڈ کہلاتے ہیں اور انہیں سستا ٹیرف ملتا ہے۔ ایک ماہ بھی 200 سے زیادہ ہونے پر صارف نان پروٹیکٹڈ ہو جاتا ہے۔"
      },
      {
        "questionEn": "What are LESCO peak hours in Pakistan?",
        "questionUr": "لیسکو کے پیک آورز (Peak Hours) کے اوقات کیا ہیں؟",
        "answerEn": "In 2026, LESCO peak hours are: Dec to Feb (5:00 PM to 9:00 PM), Mar to May (6:00 PM to 10:00 PM), June to Aug (7:00 PM to 11:00 PM), and Sep to Nov (6:00 PM to 10:00 PM). During these hours, electricity unit rates are significantly higher.",
        "answerUr": "گرمیوں (جون تا اگست) میں پیک آورز شام 7 سے رات 11 بجے اور سردیوں میں شام 5 سے رات 9 بجے تک ہوتے ہیں جن میں یونٹ کا ریٹ زیادہ ہوتا ہے۔"
      },
      {
        "questionEn": "How can I register a complaint for over-billing or a burnt meter?",
        "questionUr": "غلط بلنگ یا جلے ہوئے میٹر کی شکایت کہاں درج کروائیں؟",
        "answerEn": "Call the LESCO 24/7 central helpline at 118 or send an SMS with your reference number to 8118. You can also file complaints on the Federal Ombudsman (Wafaqi Mohtasib) portal at complaint.mohtasib.gov.pk.",
        "answerUr": "لیسکو ہیلپ لائن 118 پر کال کریں یا 8118 پر ایس ایم ایس بھیجیں۔ وفاقی محتسب کے پورٹل پر بھی شکایت درج ہو سکتی ہے۔"
      }
    ],
    "feeStructure": [
      {
        "serviceEn": "Online LESCO Duplicate Bill Check",
        "serviceUr": "آن لائن لیسکو ڈپلیکیٹ بل چیک",
        "normal": "100% FREE",
        "urgent": "Instant PDF Download",
        "executive": "Official PITC Portal",
        "validity": "Updated Monthly"
      },
      {
        "serviceEn": "Domestic Tariff (Protected: 1-100 Units)",
        "serviceUr": "پروٹیکٹڈ گھریلو ٹیرف (1 تا 100 یونٹ)",
        "normal": "PKR 7.74 / unit",
        "urgent": "Govt Subsidized",
        "executive": "Exempt from Fuel Surcharge",
        "validity": "Active 2026"
      },
      {
        "serviceEn": "Domestic Tariff (Protected: 101-200 Units)",
        "serviceUr": "پروٹیکٹڈ گھریلو ٹیرف (101 تا 200 یونٹ)",
        "normal": "PKR 10.06 / unit",
        "urgent": "Govt Subsidized",
        "executive": "Standard GST Slabs",
        "validity": "Active 2026"
      },
      {
        "serviceEn": "Domestic Tariff (Non-Protected: 201-300 Units)",
        "serviceUr": "نان پروٹیکٹڈ (201 تا 300 یونٹ)",
        "normal": "PKR 27.10 / unit",
        "urgent": "Full Cost Tariff",
        "executive": "FPA + QTA Surcharges",
        "validity": "Active 2026"
      },
      {
        "serviceEn": "Domestic Peak Hours Tariff (>300 Units / TOU)",
        "serviceUr": "پیک آورز ٹیرف (شام 5 تا رات 11 بجے)",
        "normal": "PKR 48.50 / unit",
        "urgent": "Peak Surcharge",
        "executive": "TOU Smart Metering",
        "validity": "Daily 5PM - 11PM"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Locate Your 14-Digit Reference Number",
        "titleUr": "پرانے بل سے 14 ہندسوں کا ریفرنس نمبر تلاش کریں",
        "detailEn": "Look at the top-left corner of any previous paper bill. Find the 14-digit numeric sequence with batch code (e.g. 04 11234 5678901 U).",
        "detailUr": "اپنے کسی بھی پرانے بل کے اوپر بائیں جانب لکھا ہوا 14 ہندسوں کا ریفرنس نمبر دیکھیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Open Official PITC LESCO Portal",
        "titleUr": "آفیشل پی آئی ٹی سی لیسکو پورٹل کھولیں",
        "detailEn": "Navigate to bill.pitc.com.pk/lescobill or access via the Pakistan Info Hub bill directory assistant.",
        "detailUr": "پورٹل bill.pitc.com.pk/lescobill کھولیں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Input Reference Number or Customer ID",
        "titleUr": "ریفرنس نمبر یا کسٹمر آئی ڈی درج کریں",
        "detailEn": "Enter your reference number without spaces or dashes. Alternatively, input your 10-digit Customer ID.",
        "detailUr": "بغیر اسپیس کے اپنا ریفرنس نمبر یا 10 ہندسوں کی کسٹمر آئی ڈی درج کریں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Generate & View Duplicate Bill",
        "titleUr": "ڈپلیکیٹ بل دیکھیں اور ڈاؤن لوڈ کریں",
        "detailEn": "Click 'Submit'. The official high-resolution duplicate electricity bill will render on your screen showing payable amount, FPA, and due date.",
        "detailUr": "سبمٹ پر کلک کریں، آپ کا مکمل بجلی کا بل معہ تصویر میٹر ریڈنگ اسکرین پر آ جائے گا۔"
      },
      {
        "stepNumber": 5,
        "titleEn": "Pay Online via 1Link Consumer Number",
        "titleUr": "آن لائن بینکنگ یا ایزی پیسہ سے بل ادا کریں",
        "detailEn": "Use your 14-digit reference number as the Consumer Number in your banking app (Meezan, HBL, JazzCash, Easypaisa) under '1Link Bill Payment > LESCO'.",
        "detailUr": "اپنے بینکنگ ایپ یا ایزی پیسہ میں جا کر ریفرنس نمبر درج کریں اور بل فوری ادا کریں۔"
      }
    ],
    "contentEn": "## Lahore Electric Supply Company (LESCO) Complete Guide 2026\nThe **Lahore Electric Supply Company (LESCO)** supplies electric power to over 6 million active consumers across five major districts in central Punjab: **Lahore, Kasur, Okara, Sheikhupura, and Nankana Sahib**.\n\nUnderstanding your electricity bill breakdown — including Base Tariff, Fuel Price Adjustment (FPA), Quarterly Tariff Adjustment (QTA), Electricity Duty, TV Fee, and General Sales Tax (GST) — is essential for managing family household budgets.\n\n---\n\n## 2026 Detailed Electricity Tariff Slabs (NEPRA Approved)\n\n| Customer Category | Consumption Range | Base Rate / Unit | Fixed Charges / Month |\n| :--- | :--- | :--- | :--- |\n| **Lifeline / Protected 1** | 01 - 50 Units | PKR 3.95 / Unit | Nil |\n| **Protected 2** | 51 - 100 Units | PKR 7.74 / Unit | Nil |\n| **Protected 3** | 101 - 200 Units | PKR 10.06 / Unit | Nil |\n| **Non-Protected 1** | 01 - 100 Units | PKR 16.48 / Unit | Nil |\n| **Non-Protected 2** | 101 - 200 Units | PKR 22.95 / Unit | Nil |\n| **Non-Protected 3** | 201 - 300 Units | PKR 27.14 / Unit | PKR 200 |\n| **High Consumption 1** | 301 - 700 Units | PKR 35.50 - 41.50 | PKR 400 - 800 |\n| **High Consumption 2** | Above 700 Units | PKR 48.84 / Unit | PKR 1,000 |\n\n---\n\n## Understanding Taxes and Surcharges on Your Bill\n1. **FPA (Fuel Price Adjustment)**: Fluctuates monthly based on international crude oil and LNG import prices incurred by CPPA-G.\n2. **QTA (Quarterly Tariff Adjustment)**: Surcharge applied every 3 months to cover capacity charges of Independent Power Producers (IPPs).\n3. **FC Surcharge (Financing Cost)**: Debt servicing charge levied nationally to service circular debt.\n4. **GST (General Sales Tax)**: 18% standard sales tax applied on the cumulative energy charges.\n5. **Electricity Duty**: Provincial excise tax collected for the Government of Punjab.\n\n## Comprehensive Analysis of Surcharges & Calculations on LESCO Electricity Bills\nUnderstanding every line item on your Lahore Electric Supply Company bill empowers consumers to identify faulty meter over-readings and incorrect tax levies:\n\n### 1. Line-Item Breakdown of Your Monthly Invoice\n- **Cost of Electricity (Base Energy Charges)**: Calculated as `Total Units Consumed × Applicable Slab Rate`.\n- **Fuel Price Adjustment (FPA)**: Represents the fuel generation cost variance billed 2 months in arrears.\n- **Quarterly Tariff Adjustment (QTA)**: Capacity payments to power generators mandated by NEPRA every 3 months.\n- **Electricity Duty (ED)**: Provincial tax (typically 1.5% of energy charges).\n- **General Sales Tax (GST)**: Federal 18% sales tax applied across all non-protected slabs.\n- **TV Fee**: Standard statutory charge of PKR 35 for domestic and PKR 60 for commercial meters.\n- **Further Tax / Extra Tax**: Levied exclusively on non-filer unregistered industrial and commercial accounts.\n\n---\n\n## What to Do If Your Meter Reading or Bill Is Erroneous\n1. **Compare Photo on Bill with Physical Meter**: Every LESCO bill includes a photographic image of the physical meter dial taken during reading. If the reading on the paper bill is higher than the reading on your physical meter dial, you are a victim of \"over-reading\".\n2. **Lodge Immediate Complaint with SDO**: Take a high-resolution photo of your physical meter dial and visit your local Sub-Divisional Office. The Revenue Officer will issue a corrected duplicate bill with an extended due date within 24 hours.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n---\n\n## Comprehensive Power & Gas Conservation Guidelines for Salaried Households\nWith electricity and gas tariffs at historic highs, implementing strategic load management substantially reduces the risk of crossing from protected to non-protected billing brackets:\n\n### 1. High-Impact Electricity Saving Tactics\n- **Air Conditioner Inverter Calibration**: Setting your DC inverter air conditioner temperature at 26°C instead of 18°C reduces continuous compressor amperage draw by up to 35%. Ensure condenser coils are washed every 30 days to prevent thermal overload.\n- **Refrigerator & Deep Freezer Insulation**: Keep cooling units at least 6 inches away from walls to ensure unhindered airflow. Defrost manual freezers regularly, as frost layers exceeding 5mm act as thermal insulators, forcing compressors to run non-stop.\n- **Eliminating Phantom Vampire Loads**: Appliances left on standby mode (microwaves, televisions, set-top boxes, Wi-Fi routers, mobile chargers) consume 5% to 10% of total household baseline energy. Disconnect main wall socket switches when not in use.\n\n### 2. Peak Hours Load Shedding Strategy\nDuring peak hours (daily 7:00 PM to 11:00 PM in summer), unit rates double or triple under Time-of-Use metering. Avoid running heavy inductive loads (washing machine spinners, electric water geysers, pressing irons, water suction motors) during these four hours to protect your monthly billing tier.\n\n---\n\n## Consumer Rights under NEPRA & OGRA Charters\nUnder statutory regulations established by the **National Electric Power Regulatory Authority (NEPRA)** and **Oil and Gas Regulatory Authority (OGRA)**:\n- **Billing Notice Requirement**: Consumers must receive physical or digital bills at least 7 clear calendar days before the stated payment due date.\n- **Wrongful Disconnection Protection**: No utility company may disconnect an active connection without serving a mandatory 7-day physical notice, and disconnections are legally prohibited on Fridays, weekends, and public gazetted holidays.\n- **Defective Meter Testing Rights**: Consumers have the legal right to challenge suspicious meter acceleration by paying a nominal inspection fee. If the laboratory check proves meter error exceeding ±2%, the utility must issue retroactive credit adjustments for the previous 6 months.",
    "contentUr": "## لاہور الیکٹرک سپلائی کمپنی (LESCO) بلنگ گائیڈ 2026\nلیسکو لاہور، قصور، اوکاڑہ، شیخوپورہ اور ننکانہ صاحب کے اضلاع کو بجلی فراہم کرتی ہے۔\n\nآن لائن ڈپلیکیٹ بلنگ سسٹم کی مدد سے صارفین گھر بیٹھے اپنا بجلی کا بل دیکھ سکتے ہیں اور بروقت ادائیگی کر کے لیٹ فیس سرچارج سے بچ سکتے ہیں۔",
    "relatedSlugs": [
      "/bills/wapda-bill-complaint-number",
      "/bills/k-electric-duplicate-bill",
      "/bills/sui-gas-bill-check-online"
    ]
  },
  "k-electric-duplicate-bill": {
    "slug": "k-electric-duplicate-bill",
    "fullPath": "/bills/k-electric-duplicate-bill",
    "categoryId": "bills",
    "titleEn": "K-Electric Duplicate Bill Online Check 2026 (Karachi Electricity Bill)",
    "titleUr": "کے الیکٹرک کراچی ڈپلیکیٹ بل آن لائن چیک اور ڈاؤن لوڈ 2026",
    "metaDescriptionEn": "Check K-Electric Karachi duplicate bill online using 13-digit Account Number. View payment history, unit charges, and download bill print copy.",
    "metaDescriptionUr": "کے الیکٹرک کراچی کا بجلی بل آن لائن 13 ہندسوں والے اکاؤنٹ نمبر سے حاصل کریں۔ آسان پرنٹ اور کاپی۔",
    "directAnswerEn": "To check and download your K-Electric duplicate electricity bill online in 2026 in Karachi, visit ke.com.pk or use the KE Live App. Enter your 13-digit Account Number (e.g. 0400012345678) and 8-digit Consumer Number to view your bill and pay through 1Link, Easypaisa, or KE Live.",
    "directAnswerUr": "کراچی میں کے الیکٹرک (K-Electric) کا ڈپلیکیٹ بجلی کا بل آن لائن چیک کرنے کے لیے ke.com.pk یا KE Live ایپ استعمال کریں۔ اپنا 13 ہندسوں کا اکاؤنٹ نمبر درج کر کے بل دیکھیں اور ایزی پیسہ، جاز کیش یا بینک ایپ سے ادا کریں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "K-Electric Customer Services",
      "url": "https://www.ke.com.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Karachi Utilities Desk"
    },
    "faqs": [
      {
        "questionEn": "Can I register load shedding notifications for my area in Karachi?",
        "questionUr": "کیا کراچی میں لوڈ شیڈنگ کے اوقات کا ایس ایم ایس مل سکتا ہے؟",
        "answerEn": "Yes. Send an SMS with **REG <space> 13-digit Account Number** to **8119** from your mobile to receive automated power shutdown and billing alerts.",
        "answerUr": "اپنے موبائل سے REG لکھ کر اکاؤنٹ نمبر 8119 پر بھیجیں، تمام الرٹس موصول ہوں گے۔"
      },
      {
        "questionEn": "How can citizens verify the authenticity of official documents and avoid imposters?",
        "questionUr": "سرکاری دستاویزات کی تصدیق اور جعل سازی سے کیسے بچا جائے؟",
        "answerEn": "Always verify tracking numbers on the official government website ending in .gov.pk or .org.pk. Never share one-time password (OTP) codes or sensitive biometric details with unverified phone callers claiming to represent government helplines.",
        "answerUr": "ہمیشہ .gov.pk ویب سائٹ سے تصدیق کریں اور کسی بھی غیر متعلقہ فون کال پر اپنا او ٹی پی (OTP) یا بائیو میٹرک تفصیلات شیئر نہ کریں۔"
      }
    ],
    "contentEn": "## K-Electric (KE) Karachi Electricity Guide 2026\n**K-Electric (KE)** is Pakistan's only privatized vertically integrated power utility, managing generation, transmission, and distribution for Karachi and parts of Balochistan (Hub & Bela).\n\n## K-Electric Smart Customer Services & Billing Dispute Resolution\nIn Karachi, K-Electric operates dedicated Integrated Customer Care Centers (IBCs) across 30+ zones including Defense, Clifton, Gulshan-e-Iqbal, North Nazimabad, Korangi, and SITE.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## K-Electric (KE) Karachi Power & Duplicate Bill Management 2026\n**K-Electric** is the privatized integrated power utility providing generation, transmission, and retail distribution to over 3.4 million consumers across the **Greater Karachi Metropolis, Dhabeji, Hub, and Uthal (Balochistan)**.\n\n### 1. Integrated Business Centers (IBC) & Rapid Response System\nK-Electric operates 30+ Integrated Business Centers (IBCs) across Karachi equipped with self-service digital kiosks where consumers can print duplicate bills, register supply faults, and submit change-of-tariff requests.\n\n### 2. Time-of-Use (TOU) Smart Metering & Solar Net-Metering in Karachi\nKE consumers with 3-phase meters can enroll in the **KE Solar Net-Metering Program**, exporting surplus daytime rooftop solar electricity to the KE grid at NEPRA approved National Energy Export Tariffs.\n\n---\n\n## Comprehensive Power & Gas Conservation Guidelines for Salaried Households\nWith electricity and gas tariffs at historic highs, implementing strategic load management substantially reduces the risk of crossing from protected to non-protected billing brackets:\n\n### 1. High-Impact Electricity Saving Tactics\n- **Air Conditioner Inverter Calibration**: Setting your DC inverter air conditioner temperature at 26°C instead of 18°C reduces continuous compressor amperage draw by up to 35%. Ensure condenser coils are washed every 30 days to prevent thermal overload.\n- **Refrigerator & Deep Freezer Insulation**: Keep cooling units at least 6 inches away from walls to ensure unhindered airflow. Defrost manual freezers regularly, as frost layers exceeding 5mm act as thermal insulators, forcing compressors to run non-stop.\n- **Eliminating Phantom Vampire Loads**: Appliances left on standby mode (microwaves, televisions, set-top boxes, Wi-Fi routers, mobile chargers) consume 5% to 10% of total household baseline energy. Disconnect main wall socket switches when not in use.\n\n### 2. Peak Hours Load Shedding Strategy\nDuring peak hours (daily 7:00 PM to 11:00 PM in summer), unit rates double or triple under Time-of-Use metering. Avoid running heavy inductive loads (washing machine spinners, electric water geysers, pressing irons, water suction motors) during these four hours to protect your monthly billing tier.\n\n---\n\n## Consumer Rights under NEPRA & OGRA Charters\nUnder statutory regulations established by the **National Electric Power Regulatory Authority (NEPRA)** and **Oil and Gas Regulatory Authority (OGRA)**:\n- **Billing Notice Requirement**: Consumers must receive physical or digital bills at least 7 clear calendar days before the stated payment due date.\n- **Wrongful Disconnection Protection**: No utility company may disconnect an active connection without serving a mandatory 7-day physical notice, and disconnections are legally prohibited on Fridays, weekends, and public gazetted holidays.\n- **Defective Meter Testing Rights**: Consumers have the legal right to challenge suspicious meter acceleration by paying a nominal inspection fee. If the laboratory check proves meter error exceeding ±2%, the utility must issue retroactive credit adjustments for the previous 6 months.\n\n---\n\n## Summary of Key Verification Protocols & Citizen Safeguards (2026 Checklist)\nBefore completing any official transaction or submitting financial documents, verify the following baseline procedural benchmarks:\n\n1. **Official Verification Stamps**: Ensure all computer-generated vouchers, receipts, and bank deposit challans bear the official branch cashier stamp and computer transaction sequence number.\n2. **Digital Copy Archival**: Maintain a scanned PDF or photograph of your submitted forms and payment receipts in cloud storage (Google Drive or Dropbox) for at least 5 years.\n3. **Tracking & Timeline Monitoring**: Utilize the official departmental SMS short-code or online portal tracking number to monitor progress weekly. If no update occurs within the stipulated charter timeframe, immediately escalate the case to the departmental grievance officer or relevant provincial ombudsman desk.",
    "contentUr": "## کے الیکٹرک (KE) کراچی ڈپلیکیٹ بلنگ گائیڈ\nکراچی کے تمام رہائشی اور تجارتی صارفین کے لیے کے الیکٹرک کا مکمل بلنگ اور آن لائن ادائیگی کا نظام۔",
    "relatedSlugs": [
      "/bills/lesco-bill-check-online",
      "/bills/wapda-bill-complaint-number"
    ],
    "feeStructure": [
      {
        "serviceEn": "KE Online Duplicate Bill",
        "serviceUr": "کے الیکٹرک ڈپلیکیٹ بل",
        "normal": "100% FREE",
        "urgent": "Instant PDF",
        "executive": "KE Live Portal",
        "validity": "Monthly"
      },
      {
        "serviceEn": "KE Central 24/7 Helpline",
        "serviceUr": "کے الیکٹرک سنٹرل ہیلپ لائن",
        "normal": "Dial 118 / 99000",
        "urgent": "SMS to 8119",
        "executive": "WhatsApp 0348-0000118",
        "validity": "Karachi & Hub"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Open K-Electric Duplicate Bill Page",
        "titleUr": "کے الیکٹرک ڈپلیکیٹ بل پیج کھولیں",
        "detailEn": "Visit ke.com.pk/customer-services/bill-payment/duplicate-bill/ on your browser.",
        "detailUr": "کے الیکٹرک کی ویب سائٹ پر ڈپلیکیٹ بل پورٹل کھولیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Enter 13-Digit Account Number",
        "titleUr": "13 ہندسوں کا اکاؤنٹ نمبر درج کریں",
        "detailEn": "Input your 13-digit KE Account Number printed at the top-right of your bill.",
        "detailUr": "بل کے اوپر دائیں جانب درج 13 ہندسوں کا اکاؤنٹ نمبر لکھیں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "View Bill & Download PDF",
        "titleUr": "بل چیک کریں اور پی ڈی ایف محفوظ کریں",
        "detailEn": "Review current month billing, arrears, and download official PDF.",
        "detailUr": "رقم اور آخری تاریخ چیک کر کے پی ڈی ایف محفوظ کریں۔"
      }
    ]
  },
  "sui-gas-bill-check-online": {
    "slug": "sui-gas-bill-check-online",
    "fullPath": "/bills/sui-gas-bill-check-online",
    "categoryId": "bills",
    "titleEn": "Sui Gas Bill Check Online 2026: SNGPL & SSGC Duplicate Bill Portal",
    "titleUr": "سوئی گیس بل آن لائن چیک 2026: SNGPL اور SSGC ڈپلیکیٹ بل",
    "metaDescriptionEn": "Check Sui Northern (SNGPL) and Sui Southern (SSGC) gas bills online by Consumer Number / Account ID. Free PDF duplicate bill viewer for Pakistan.",
    "metaDescriptionUr": "سوئی ناردرن اور سوئی سدرن گیس کا بل آن لائن کنزیومر نمبر سے دیکھیں اور ڈاؤن لوڈ کریں۔",
    "directAnswerEn": "To check your Sui Gas bill online in 2026, visit sngpl.com.pk (for Punjab, KPK, Islamabad) or ssgc.com.pk (for Sindh, Balochistan). Enter your 10-digit Consumer Number to view current gas consumption, meter units, and download duplicate duplicate bills for digital payment.",
    "directAnswerUr": "سوئی گیس کا بل آن لائن چیک کرنے کے لیے SNGPL (پنجاب، کے پی، اسلام آباد) یا SSGC (سندھ، بلوچستان) کی ویب سائٹ پر جائیں۔ اپنا 10 ہندسوں کا کنزیومر نمبر درج کر کے ڈپلیکیٹ بل فوری حاصل کریں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "SNGPL Official Portal",
      "url": "https://www.sngpl.com.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Gas & Power Desk"
    },
    "faqs": [
      {
        "questionEn": "What are the winter protected gas tariff slabs in Pakistan?",
        "questionUr": "پاکستان میں موسم سرما کے گیس ٹیرف سلیب کیا ہیں؟",
        "answerEn": "Domestic gas consumers consuming up to 0.9 hm3 per month receive protected subsidized rates. Exceeding 0.9 hm3 pushes the connection into progressive luxury non-protected brackets.",
        "answerUr": "ماہانہ 0.9 ہیکٹومیٹر تک گیس استعمال کرنے والے پروٹیکٹڈ سلیب میں رہتے ہیں اور ان کا بل کم آتا ہے۔"
      },
      {
        "questionEn": "How can citizens verify the authenticity of official documents and avoid imposters?",
        "questionUr": "سرکاری دستاویزات کی تصدیق اور جعل سازی سے کیسے بچا جائے؟",
        "answerEn": "Always verify tracking numbers on the official government website ending in .gov.pk or .org.pk. Never share one-time password (OTP) codes or sensitive biometric details with unverified phone callers claiming to represent government helplines.",
        "answerUr": "ہمیشہ .gov.pk ویب سائٹ سے تصدیق کریں اور کسی بھی غیر متعلقہ فون کال پر اپنا او ٹی پی (OTP) یا بائیو میٹرک تفصیلات شیئر نہ کریں۔"
      }
    ],
    "contentEn": "## Sui Gas (SNGPL & SSGC) Complete Billing Guide 2026\nNatural gas distribution in Pakistan is operated by two state-controlled monopolies: **Sui Northern Gas Pipelines Limited (SNGPL)** and **Sui Southern Gas Company (SSGC)**.\n\n## In-Depth Analysis of Natural Gas Metering & Heat Unit (MMBTU) Billing\nGas bills are measured in **Cubic Meters (Hm3)** and converted into **Million British Thermal Units (MMBTU)** using the standard Gross Calorific Value (GCV) gas formula:\n```\nGas Bill Formula = Consumption Volume (Hm3) × Base Factor × GCV (BTU/cu.ft) / 1,000,000 × Slab Rate\n```\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## Sui Northern & Sui Southern Gas Comprehensive Billing Handbook 2026\nPakistan's natural gas sector is operated by **SNGPL** in the north (Punjab, KPK, Federal Capital, AJK) and **SSGC** in the south (Sindh, Balochistan).\n\n### 1. Progressive Domestic Gas Tariff Slabs (2026 Approved)\n- **Protected Category (Up to 0.9 hm3/month)**: Subsidized lifeline rates designed for basic cooking needs.\n- **Non-Protected Category (0.9 to 4.0+ hm3/month)**: Progressive luxury rate brackets with substantial winter fuel adjustments.\n- **Minimum Monthly Charges**: Fixed meter maintenance charges applied even on zero consumption meters.\n\n### 2. Gas Meter Testing & Defective Meter Replacement\nIf you suspect your gas meter is over-registering, submit an application for an **Accu-Check Laboratory Test**. SNGPL / SSGC technicians install a check meter in series to verify meter calibration accuracy.\n\n---\n\n## Comprehensive Power & Gas Conservation Guidelines for Salaried Households\nWith electricity and gas tariffs at historic highs, implementing strategic load management substantially reduces the risk of crossing from protected to non-protected billing brackets:\n\n### 1. High-Impact Electricity Saving Tactics\n- **Air Conditioner Inverter Calibration**: Setting your DC inverter air conditioner temperature at 26°C instead of 18°C reduces continuous compressor amperage draw by up to 35%. Ensure condenser coils are washed every 30 days to prevent thermal overload.\n- **Refrigerator & Deep Freezer Insulation**: Keep cooling units at least 6 inches away from walls to ensure unhindered airflow. Defrost manual freezers regularly, as frost layers exceeding 5mm act as thermal insulators, forcing compressors to run non-stop.\n- **Eliminating Phantom Vampire Loads**: Appliances left on standby mode (microwaves, televisions, set-top boxes, Wi-Fi routers, mobile chargers) consume 5% to 10% of total household baseline energy. Disconnect main wall socket switches when not in use.\n\n### 2. Peak Hours Load Shedding Strategy\nDuring peak hours (daily 7:00 PM to 11:00 PM in summer), unit rates double or triple under Time-of-Use metering. Avoid running heavy inductive loads (washing machine spinners, electric water geysers, pressing irons, water suction motors) during these four hours to protect your monthly billing tier.\n\n---\n\n## Consumer Rights under NEPRA & OGRA Charters\nUnder statutory regulations established by the **National Electric Power Regulatory Authority (NEPRA)** and **Oil and Gas Regulatory Authority (OGRA)**:\n- **Billing Notice Requirement**: Consumers must receive physical or digital bills at least 7 clear calendar days before the stated payment due date.\n- **Wrongful Disconnection Protection**: No utility company may disconnect an active connection without serving a mandatory 7-day physical notice, and disconnections are legally prohibited on Fridays, weekends, and public gazetted holidays.\n- **Defective Meter Testing Rights**: Consumers have the legal right to challenge suspicious meter acceleration by paying a nominal inspection fee. If the laboratory check proves meter error exceeding ±2%, the utility must issue retroactive credit adjustments for the previous 6 months.\n\n---\n\n## Summary of Key Verification Protocols & Citizen Safeguards (2026 Checklist)\nBefore completing any official transaction or submitting financial documents, verify the following baseline procedural benchmarks:\n\n1. **Official Verification Stamps**: Ensure all computer-generated vouchers, receipts, and bank deposit challans bear the official branch cashier stamp and computer transaction sequence number.\n2. **Digital Copy Archival**: Maintain a scanned PDF or photograph of your submitted forms and payment receipts in cloud storage (Google Drive or Dropbox) for at least 5 years.\n3. **Tracking & Timeline Monitoring**: Utilize the official departmental SMS short-code or online portal tracking number to monitor progress weekly. If no update occurs within the stipulated charter timeframe, immediately escalate the case to the departmental grievance officer or relevant provincial ombudsman desk.",
    "contentUr": "## سوئی گیس (SNGPL اور SSGC) بلنگ گائیڈ 2026\nسوئی ناردرن اور سوئی سدرن گیس کمپنیوں کے ڈپلیکیٹ بل، ٹیرف سلیب اور شکایات کے حل کی مکمل تفصیل۔",
    "relatedSlugs": [
      "/bills/ssgc-duplicate-bill-check",
      "/bills/lesco-bill-check-online",
      "/bills/wapda-bill-complaint-number"
    ],
    "feeStructure": [
      {
        "serviceEn": "SNGPL / SSGC Online Duplicate Bill",
        "serviceUr": "سوئی گیس ڈپلیکیٹ بل",
        "normal": "100% FREE",
        "urgent": "Instant PDF",
        "executive": "Official Gas Portals",
        "validity": "Monthly"
      },
      {
        "serviceEn": "Gas Helpline Emergency (Leakage / Low Pressure)",
        "serviceUr": "گیس ایمرجنسی ہیلپ لائن (لیکج / پریشر)",
        "normal": "Dial 1199 (24/7)",
        "urgent": "Immediate Response",
        "executive": "Safety Desk",
        "validity": "Nationwide"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Identify Your Gas Provider (SNGPL vs SSGC)",
        "titleUr": "اپنی گیس کمپنی (SNGPL یا SSGC) کا تعین کریں",
        "detailEn": "Punjab, KPK, and Islamabad are served by SNGPL; Sindh and Balochistan are served by SSGC.",
        "detailUr": "پنجاب و کے پی والے SNGPL اور سندھ و بلوچستان والے SSGC کا انتخاب کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Enter 10-Digit Consumer Number",
        "titleUr": "10 ہندسوں کا کنزیومر نمبر درج کریں",
        "detailEn": "Input the 10-digit Consumer ID from your previous gas invoice.",
        "detailUr": "پرانے بل سے 10 ہندسوں کا کنزیومر نمبر درج کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "View & Pay Gas Bill Online",
        "titleUr": "بل دیکھیں اور آن لائن ادا کریں",
        "detailEn": "Pay through 1Link Gas utility payment option in mobile banking.",
        "detailUr": "بینک ایپ میں 1Link سے گیس کا بل ادا کریں۔"
      }
    ]
  },
  "wapda-bill-complaint-number": {
    "slug": "wapda-bill-complaint-number",
    "fullPath": "/bills/wapda-bill-complaint-number",
    "categoryId": "bills",
    "titleEn": "WAPDA Complaint Numbers & Helplines 2026 (LESCO, MEPCO, IESCO)",
    "titleUr": "واپڈا بجلی ہیلپ لائن اور شکایات نمبرز 2026 (تمام کمپنیاں)",
    "metaDescriptionEn": "Official electricity complaint helpline numbers for all DISCOs in Pakistan: 118 central emergency line, LESCO, FESCO, GEPCO, IESCO, MEPCO, PESCO, QESCO, HESCO.",
    "metaDescriptionUr": "پاکستان کی تمام بجلی کمپنیوں (لیسکو، آئیسکو، میپکو، پشاور، فیصل آباد) کے ایمرجنسی اور شکایت کے نمبرز۔",
    "directAnswerEn": "To report electricity power outages, low voltage, transformer breakdown, or overbilling across Pakistan in 2026, call the National 24/7 Helpline at 118 or SMS your 14-digit reference number to 8118. For unresolved issues, file an appeal with Wafaqi Mohtasib (Federal Ombudsman) at 1055.",
    "directAnswerUr": "بجلی کی خرابی، ٹرانسفارمر جلنے یا اوور بلنگ کی شکایت کے لیے 24 گھنٹے قومی ہیلپ لائن 118 پر کال کریں یا 14 ہندسوں کا ریفرنس نمبر 8118 پر ایس ایم ایس کریں۔ حل نہ ہونے پر وفاقی محتسب کی ہیلپ لائن 1055 پر کال کریں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "Ministry of Energy Power Division",
      "url": "https://mowp.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Consumer Rights Desk"
    },
    "faqs": [
      {
        "questionEn": "Is calling 118 toll-free from all mobile networks in Pakistan?",
        "questionUr": "کیا 118 پر کال تمام نیٹ ورکس سے فری ہے؟",
        "answerEn": "Yes. 118 is a federally mandated toll-free universal access number accessible from Jazz, Zong, Telenor, Ufone, and PTCL landlines.",
        "answerUr": "جی ہاں! 118 تمام موبائل نیٹ ورکس اور پی ٹی سی ایل لینڈ لائن سے فری نمبر ہے۔"
      }
    ],
    "contentEn": "## Pakistan Electricity Complaints & Helplines Directory 2026\nNavigating power outages, voltage drops, burnt transformers, and billing discrepancies requires fast access to designated emergency dispatch desks.\n\n## Wafaqi Mohtasib (Federal Ombudsman) Escalation Procedures for Electricity Disputes\nIf your local DISCO fails to resolve an unjust over-billing issue within 30 days, filing an appeal with the **Federal Ombudsman Energy Investigation Wing** provides a legally binding resolution within 60 days with zero lawyer fees.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## National Directory of Electricity Helplines & Wafaqi Mohtasib Dispute Resolution\nWhen power outages, burnt distribution transformers, live sparking wires, or billing errors occur, contacting the exact emergency dispatch desk saves crucial hours.\n\n### 1. Complete DISCO 24/7 Emergency Helplines Directory\n- **LESCO (Lahore)**: 118 / 042-99205461 / SMS 8118\n- **IESCO (Islamabad/Rawalpindi)**: 118 / 051-9252937 / SMS 8118\n- **FESCO (Faisalabad)**: 118 / 0800-66554 / SMS 8118\n- **MEPCO (Multan)**: 118 / 061-9220313 / SMS 8118\n- **GEPCO (Gujranwala)**: 118 / 055-9200164 / SMS 8118\n- **PESCO (Peshawar)**: 118 / 091-9212013 / SMS 8118\n- **HESCO (Hyderabad)**: 118 / 022-9260161 / SMS 8118\n- **QESCO (Quetta)**: 118 / 081-9201444 / SMS 8118\n- **K-Electric (Karachi)**: 118 / 021-99000 / SMS 8119\n\n### 2. Filing Free Legal Appeals with the Federal Ombudsman (Energy Wing)\nThe Federal Ombudsman (*Wafaqi Mohtasib*) operates under Presidential Order No. 1 of 1983. Any citizen can file an overbilling or wrongful disconnection complaint online at `complaint.mohtasib.gov.pk` with zero court fees, zero lawyer requirements, and a statutory 60-day binding resolution mandate.\n\n---\n\n## Comprehensive Power & Gas Conservation Guidelines for Salaried Households\nWith electricity and gas tariffs at historic highs, implementing strategic load management substantially reduces the risk of crossing from protected to non-protected billing brackets:\n\n### 1. High-Impact Electricity Saving Tactics\n- **Air Conditioner Inverter Calibration**: Setting your DC inverter air conditioner temperature at 26°C instead of 18°C reduces continuous compressor amperage draw by up to 35%. Ensure condenser coils are washed every 30 days to prevent thermal overload.\n- **Refrigerator & Deep Freezer Insulation**: Keep cooling units at least 6 inches away from walls to ensure unhindered airflow. Defrost manual freezers regularly, as frost layers exceeding 5mm act as thermal insulators, forcing compressors to run non-stop.\n- **Eliminating Phantom Vampire Loads**: Appliances left on standby mode (microwaves, televisions, set-top boxes, Wi-Fi routers, mobile chargers) consume 5% to 10% of total household baseline energy. Disconnect main wall socket switches when not in use.\n\n### 2. Peak Hours Load Shedding Strategy\nDuring peak hours (daily 7:00 PM to 11:00 PM in summer), unit rates double or triple under Time-of-Use metering. Avoid running heavy inductive loads (washing machine spinners, electric water geysers, pressing irons, water suction motors) during these four hours to protect your monthly billing tier.\n\n---\n\n## Consumer Rights under NEPRA & OGRA Charters\nUnder statutory regulations established by the **National Electric Power Regulatory Authority (NEPRA)** and **Oil and Gas Regulatory Authority (OGRA)**:\n- **Billing Notice Requirement**: Consumers must receive physical or digital bills at least 7 clear calendar days before the stated payment due date.\n- **Wrongful Disconnection Protection**: No utility company may disconnect an active connection without serving a mandatory 7-day physical notice, and disconnections are legally prohibited on Fridays, weekends, and public gazetted holidays.\n- **Defective Meter Testing Rights**: Consumers have the legal right to challenge suspicious meter acceleration by paying a nominal inspection fee. If the laboratory check proves meter error exceeding ±2%, the utility must issue retroactive credit adjustments for the previous 6 months.",
    "contentUr": "## پاکستان بجلی و واپڈا شکایات ہیلپ لائن ڈائریکٹری 2026\nملک بھر کے صارفین کے لیے بجلی کے تمام مسائل، ٹرانسفارمرز اور اوور بلنگ کے فوری حل کے لیے مستند رابطہ نمبرز۔",
    "relatedSlugs": [
      "/bills/lesco-bill-check-online",
      "/bills/k-electric-duplicate-bill"
    ],
    "feeStructure": [
      {
        "serviceEn": "National Power Outage & Fault Helpline",
        "serviceUr": "قومی بجلی خرابی ہیلپ لائن",
        "normal": "Dial 118 (Toll-Free)",
        "urgent": "Instant Ticket Number",
        "executive": "Central Control Room",
        "validity": "24/7 / 365 Days"
      },
      {
        "serviceEn": "SMS Fault Registration Service",
        "serviceUr": "ایس ایم ایس کمپلینٹ سروس",
        "normal": "SMS to 8118",
        "urgent": "Automated SMS Ack",
        "executive": "Sub-Division Alert",
        "validity": "All DISCOs"
      },
      {
        "serviceEn": "Federal Ombudsman Energy Desk (Mohtasib)",
        "serviceUr": "وفاقی محتسب انرجی ڈیسک",
        "normal": "Dial 1055 / mohtasib.gov.pk",
        "urgent": "Direct Legal Hearing",
        "executive": "Binding Order within 30d",
        "validity": "Free of Cost"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Dial 118 or SMS 8118 with Reference Number",
        "titleUr": "118 ملائیں یا 8118 پر ریفرنس نمبر ایس ایم ایس کریں",
        "detailEn": "Call 118 or SMS your 14-digit reference number along with complaint details to 8118.",
        "detailUr": "ہیلپ لائن 118 پر کال کریں اور اپنا 14 ہندسوں کا ریفرنس نمبر نوٹ کروائیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Receive Automated Tracking Complaint Number",
        "titleUr": "خودکار ٹریکنگ کمپلینٹ نمبر حاصل کریں",
        "detailEn": "Note down the unique complaint ticket ID sent to your mobile via official SMS.",
        "detailUr": "ایس ایم ایس میں موصول ہونے والا ٹریکنگ نمبر اپنے پاس محفوظ کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Escalate to Federal Ombudsman if Unresolved in 48 Hours",
        "titleUr": "48 گھنٹے میں حل نہ ہونے پر وفاقی محتسب سے رجوع کریں",
        "detailEn": "If the DISCO fails to resolve the fault or over-billing, lodge an online complaint at complaint.mohtasib.gov.pk or call 1055.",
        "detailUr": "مسئلہ حل نہ ہونے پر وفاقی محتسب کی ویب سائٹ پر فری شکایت درج کروائیں۔"
      }
    ]
  },
  "latest-govt-jobs-pakistan": {
    "slug": "latest-govt-jobs-pakistan",
    "fullPath": "/jobs/latest-govt-jobs-pakistan",
    "categoryId": "jobs",
    "titleEn": "Latest Govt Jobs in Pakistan August 2026: Federal & Provincial Vacancies",
    "titleUr": "پاکستان میں نئی سرکاری نوکریاں اگست 2026: وفاقی و صوبائی شعبہ جات",
    "metaDescriptionEn": "Daily updated list of federal and provincial government job vacancies in Pakistan. Education department, Pakistan Army, Police, Health, Railways, and Banks.",
    "metaDescriptionUr": "حکومت پاکستان کے مختلف محکموں (تعلیم، پولیس، ہیلتھ، ریلوے اور بینکس) میں نئی جاری ہونے والی سرکاری نوکریوں کا پورٹل۔",
    "directAnswerEn": "To find verified latest government jobs in Pakistan across Federal, Punjab, Sindh, KPK, and Balochistan in 2026, browse the Pakistan Info Hub Jobs Portal or the National Job Portal at njp.gov.pk. Apply directly with zero agent fees through official commission portals (FPSC, PPSC, SPSC, KPPSC).",
    "directAnswerUr": "پاکستان میں وفاقی اور صوبائی حکومت کی تمام نئی سرکاری ملازمتوں کی تصدیق شدہ تفصیلات جاننے کے لیے پاکستان انفو ہب یا نیشنل جاب پورٹل (njp.gov.pk) دیکھیں۔ تمام بھرتیاں بغیر کسی ایجنٹ فیس کے آفیشل پورٹلز کے ذریعے کی جاتی ہیں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "National Job Portal (NJP)",
      "url": "https://njp.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Career & Employment Desk"
    },
    "faqs": [
      {
        "questionEn": "How do I identify fake government job advertisements on social media?",
        "questionUr": "سوشل میڈیا پر جعلی سرکاری نوکریوں کے اشتہار کیسے پہچانیں؟",
        "answerEn": "Official government jobs always direct you to official .gov.pk or .org.pk portals and require fee payment exclusively through 1Link, Treasury Challan, or official ePay. Any advertisement asking for payment via private Easypaisa/JazzCash personal numbers is 100% fraudulent.",
        "answerUr": "سرکاری ملازمتوں کے لیے فیس صرف بینک چالان یا ای پے سے ہوتی ہے۔ کسی پرسنل ایزی پیسہ نمبر پر فیس مانگنے والا اشتہار مکمل فراڈ ہوتا ہے۔"
      }
    ],
    "contentEn": "## Verified Directory of Government Jobs in Pakistan 2026\nSecuring a permanent or contractual government job (*Sarkari Mulazmat*) in Pakistan provides unmatched job security, pension benefits, medical coverage, and societal respect.\n\n## Comprehensive Overview of Federal & Provincial Recruitment Portals 2026\nFinding verified employment requires navigating official state channels:\n- **Federal Level**: National Job Portal (njp.gov.pk) and FPSC (fpsc.gov.pk).\n- **Punjab**: Punjab Job Portal (jobs.punjab.gov.pk) and PPSC (ppsc.gop.pk).\n- **Sindh**: SPSC (spsc.gov.pk) and Sindh Education Department.\n- **KPK**: KPPSC (kppsc.gov.pk) and ETEA (etea.edu.pk).\n- **Balochistan**: BPSC (bpsc.gob.pk).\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## National Directory & Strategy Guide for Government Employment in Pakistan 2026\nSecuring a public sector job in Pakistan requires strategic awareness of competitive calendars, gazette recruitment notifications, and authentic testing portals.\n\n### 1. Comprehensive Overview of Major Federal & Provincial Testing Bodies\n- **Federal**: Federal Public Service Commission (FPSC), National Job Portal (NJP), National Testing Service (NTS), Open Testing Service (OTS).\n- **Punjab**: Punjab Public Service Commission (PPSC), Punjab Job Portal (`jobs.punjab.gov.pk`).\n- **Sindh**: Sindh Public Service Commission (SPSC), Sukkur IBA Testing Services (STS).\n- **Khyber Pakhtunkhwa**: Khyber Pakhtunkhwa Public Service Commission (KPPSC), Educational Testing & Evaluation Agency (ETEA).\n- **Balochistan**: Balochistan Public Service Commission (BPSC).\n\n---\n\n## Comprehensive Preparation Strategy for Competitive Examinations & Interviews\nSecuring a high merit ranking in public service commission examinations (FPSC, PPSC, SPSC, KPPSC, BPSC, NTS) requires structured, disciplined preparation across multiple academic disciplines.\n\n### 1. The 5-Pillar Core Curriculum for General Ability Tests\n- **Pakistan Affairs & Historical Constitutional Evolution**: 1857 War of Independence, Sir Syed's Aligarh Movement, 1906 Muslim League formation, 1940 Lahore Resolution, 1973 Constitution, 18th Constitutional Amendment, CPEC, and contemporary foreign policy challenges.\n- **Current Affairs & International Relations**: Key global alliances (SCO, BRICS, UN Security Council, OIC), Middle East dynamics, international climate treaties, and State Bank monetary policies.\n- **Everyday Science & Basic Mathematics**: Human anatomy, vitamins, planetary astronomy, solar energy, basic algebra, ratio-proportion, percentages, averages, and basic geometry problems.\n- **English Grammar, Comprehension & Précis**: Sentence correction, preposition rules, active-passive voice, direct-indirect narration, vocabulary antonyms/synonyms, and concise précis writing.\n- **Information Technology & Cyber Security**: Computer architecture, operating systems, Microsoft Office shortcut keys, networking concepts (LAN, WAN, IP address), and data encryption fundamentals.\n\n### 2. Mastering the Public Service Commission Interview & Psychological Viva Voce\n- **Confidence & Body Language**: Maintain steady eye contact with all interview panel members, sit upright with relaxed shoulders, and enter/leave the interview chamber with formal professional courtesy.\n- **Handling Unknown Questions**: Never guess or fabricate answers before seasoned panel members. If you do not know a factual query, politely state: *\"I apologize, sir/madam, I am unable to recall this specific information at the moment.\"*\n- **Current Job & Academic Defense**: Be prepared to defend your university final-year thesis, previous work experience, and explain precisely how your educational background directly benefits the applied government post.\n\n---\n\n## Redressal of Recruitment Grievances & Legal Rights of Candidates\nUnder statutory public service commission rules and high court precedents:\n- **Right to Paper Re-Checking**: Candidates have the legal right to apply for formal paper recount and optical mark recognition (OMR) sheet re-verification within 30 days of result announcement by paying a nominal fee.\n- **Right to Interview Merit Breakdown**: Rejected candidates can request their detailed breakdown marks (Academic Marks, Written Marks, Interview Marks) to verify merit transparency.\n- **Writ Jurisdiction in High Court**: If administrative rules or seat quotas were unlawfully altered, candidates can file a constitutional writ petition under Article 199 of the Constitution of Pakistan at the relevant Provincial High Court.",
    "contentUr": "## پاکستان میں سرکاری ملازمتوں کی تصدیق شدہ ڈائریکٹری 2026\nوفاقی اور تمام صوبائی محکموں میں خالی آسامیوں کی مستند اور تازہ ترین معلومات۔",
    "relatedSlugs": [
      "/jobs/ppsc-jobs-2026",
      "/jobs/nts-jobs-today"
    ],
    "feeStructure": [
      {
        "serviceEn": "National Job Portal (NJP) Application",
        "serviceUr": "نیشنل جاب پورٹل آن لائن اپلائی",
        "normal": "100% FREE",
        "urgent": "Zero Application Charge",
        "executive": "All Federal Ministries",
        "validity": "Live Portal"
      },
      {
        "serviceEn": "Provincial PSC Application Fee",
        "serviceUr": "صوبائی پبلک سروس کمیشن فیس",
        "normal": "PKR 500 - 600",
        "urgent": "Official Treasury / ePay",
        "executive": "Screening Exam Included",
        "validity": "Per Application"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Search Verified Jobs by Education & Province",
        "titleUr": "تعلیم اور صوبے کے لحاظ سے نوکریاں تلاش کریں",
        "detailEn": "Filter vacancies by your qualification (Matric, FA/FSc, Bachelor's, Master's) and provincial domicile.",
        "detailUr": "اپنی تعلیمی قابلیت اور صوبے کے مطابق نوکریوں کا انتخاب کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Verify Official Gazette & Department NOC",
        "titleUr": "آفیشل این او سی اور اخبار کا اشتہار چیک کریں",
        "detailEn": "Ensure the vacancy carries an official Federal/Provincial recruitment NOC number to avoid fake job scams.",
        "detailUr": "سرکاری این او سی اور اشتہار کی تصدیق کر کے جعلی اشتہارات سے محفوظ رہیں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Apply Directly on Respective Official Portal",
        "titleUr": "متعلقہ محکمے کے پورٹل پر براہ راست اپلائی کریں",
        "detailEn": "Submit your application on FPSC, PPSC, NJP, or the designated department portal before the closing deadline.",
        "detailUr": "آخری تاریخ سے پہلے مطلوبہ کمیشن کی ویب سائٹ پر فارم سبمٹ کریں۔"
      }
    ]
  },
  "ppsc-jobs-2026": {
    "slug": "ppsc-jobs-2026",
    "fullPath": "/jobs/ppsc-jobs-2026",
    "categoryId": "jobs",
    "titleEn": "PPSC Jobs 2026: Punjab Public Service Commission Online Apply",
    "titleUr": "پی پی ایس سی (PPSC) نوکریاں 2026: ایڈورٹائزمنٹ اور آن لائن اپلائی",
    "metaDescriptionEn": "PPSC upcoming jobs advertisement 2026, online application form at ppsc.gop.pk, challan form fee (PKR 600), exam planner, and admission letters.",
    "metaDescriptionUr": "پنجاب پبلک سروس کمیشن کی نئی نوکریاں، آن لائن اپلائی، چالان فارم فیس 600 روپے اور امتحان کا پلانر۔",
    "directAnswerEn": "To apply online for Punjab Public Service Commission (PPSC) jobs in 2026, visit ppsc.gop.pk. Create a profile, pay the PKR 600 application fee online via ePay Punjab using the 17-digit PSID code, choose your test center, and download your computerized Roll Number Slip.",
    "directAnswerUr": "پنجاب پبلک سروس کمیشن (PPSC) کی ملازمتوں کے لیے ppsc.gop.pk پر آن لائن اپلائی کریں۔ 600 روپے فیس ای پے پنجاب ایپ سے 17 ہندسوں کے پی ایس آئی ڈی پر ادا کریں اور رول نمبر سلپ ڈاؤن لوڈ کریں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "PPSC Official Portal",
      "url": "https://ppsc.gop.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Public Service Commission Desk"
    },
    "faqs": [
      {
        "questionEn": "Is there negative marking in PPSC multiple choice written tests?",
        "questionUr": "کیا پی پی ایس سی کے ٹیسٹ میں نیگیٹو مارکنگ ہوتی ہے؟",
        "answerEn": "Yes! PPSC enforces strict negative marking in MCQs tests. Every correct answer awards +1.0 mark, while every wrong answer deducts -0.25 marks. Leaving a question blank results in 0 marks.",
        "answerUr": "جی ہاں! ہر غلط جواب پر 0.25 نمبر کاٹے جاتے ہیں، اس لیے تکے لگانے سے گریز کریں۔"
      }
    ],
    "contentEn": "## Punjab Public Service Commission (PPSC) Guide 2026\nThe **PPSC** conducts competitive testing and merit-based recruitment for provincial government positions in Punjab (Sub-Inspectors, Tehsildars, Educators, Lecturers, Medical Officers, and PMS Officers).\n\n## Mastering the PPSC Multiple Choice & Descriptive Examinations\nThe **Punjab Public Service Commission** adheres to rigorous merit-ranking benchmarks:\n- **Academic Score Computation**: PPSC awards up to 40 marks for matric, intermediate, and degree divisions before written test scores are aggregated.\n- **Negative Marking Strategy**: Because 4 wrong answers cancel out 1 full mark (-0.25 each), candidates should never guess answers blindly when probability is below 50%.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## Complete Strategic Manual for PPSC Recruitment & Competitive PMS Examinations\nThe **Punjab Public Service Commission (PPSC)** is widely recognized as Pakistan's most automated and merit-driven provincial testing agency.\n\n### 1. PPSC Single-Paper MCQs Test Structure (100 Marks)\n- **General Ability Paper (General Posts)**: 100 multiple choice questions covering General Knowledge (20%), Pakistan Studies & History (20%), Everyday Science (15%), Basic Mathematics (15%), English Vocabulary & Grammar (15%), Urdu Literature (10%), and Computer/IT Literacy (5%).\n- **Subject-Specific Professional Paper (Lecturers / Engineers / Doctors)**: 80% Subject Qualification MCQs + 20% General Ability MCQs.\n- **Negative Marking Reality**: 0.25 marks deducted per wrong answer. Leaving a question un-attempted incurs 0 deduction.\n\n---\n\n## Comprehensive Preparation Strategy for Competitive Examinations & Interviews\nSecuring a high merit ranking in public service commission examinations (FPSC, PPSC, SPSC, KPPSC, BPSC, NTS) requires structured, disciplined preparation across multiple academic disciplines.\n\n### 1. The 5-Pillar Core Curriculum for General Ability Tests\n- **Pakistan Affairs & Historical Constitutional Evolution**: 1857 War of Independence, Sir Syed's Aligarh Movement, 1906 Muslim League formation, 1940 Lahore Resolution, 1973 Constitution, 18th Constitutional Amendment, CPEC, and contemporary foreign policy challenges.\n- **Current Affairs & International Relations**: Key global alliances (SCO, BRICS, UN Security Council, OIC), Middle East dynamics, international climate treaties, and State Bank monetary policies.\n- **Everyday Science & Basic Mathematics**: Human anatomy, vitamins, planetary astronomy, solar energy, basic algebra, ratio-proportion, percentages, averages, and basic geometry problems.\n- **English Grammar, Comprehension & Précis**: Sentence correction, preposition rules, active-passive voice, direct-indirect narration, vocabulary antonyms/synonyms, and concise précis writing.\n- **Information Technology & Cyber Security**: Computer architecture, operating systems, Microsoft Office shortcut keys, networking concepts (LAN, WAN, IP address), and data encryption fundamentals.\n\n### 2. Mastering the Public Service Commission Interview & Psychological Viva Voce\n- **Confidence & Body Language**: Maintain steady eye contact with all interview panel members, sit upright with relaxed shoulders, and enter/leave the interview chamber with formal professional courtesy.\n- **Handling Unknown Questions**: Never guess or fabricate answers before seasoned panel members. If you do not know a factual query, politely state: *\"I apologize, sir/madam, I am unable to recall this specific information at the moment.\"*\n- **Current Job & Academic Defense**: Be prepared to defend your university final-year thesis, previous work experience, and explain precisely how your educational background directly benefits the applied government post.\n\n---\n\n## Redressal of Recruitment Grievances & Legal Rights of Candidates\nUnder statutory public service commission rules and high court precedents:\n- **Right to Paper Re-Checking**: Candidates have the legal right to apply for formal paper recount and optical mark recognition (OMR) sheet re-verification within 30 days of result announcement by paying a nominal fee.\n- **Right to Interview Merit Breakdown**: Rejected candidates can request their detailed breakdown marks (Academic Marks, Written Marks, Interview Marks) to verify merit transparency.\n- **Writ Jurisdiction in High Court**: If administrative rules or seat quotas were unlawfully altered, candidates can file a constitutional writ petition under Article 199 of the Constitution of Pakistan at the relevant Provincial High Court.",
    "contentUr": "## پنجاب پبلک سروس کمیشن (PPSC) گائیڈ 2026\nپی پی ایس سی پنجاب کے تمام سرکاری محکموں میں میرٹ پر بھرتی کا بااعتماد ادارہ ہے۔",
    "relatedSlugs": [
      "/jobs/latest-govt-jobs-pakistan",
      "/jobs/nts-jobs-today"
    ],
    "feeStructure": [
      {
        "serviceEn": "PPSC Standard Examination Fee",
        "serviceUr": "پی پی ایس سی معیاری ٹیسٹ فیس",
        "normal": "PKR 600",
        "urgent": "ePay Punjab PSID",
        "executive": "Paperless Digital Pay",
        "validity": "Per Post Application"
      },
      {
        "serviceEn": "Special Persons (Khususi Afrad) Fee",
        "serviceUr": "معذور افراد (خصوصی افراد) فیس",
        "normal": "100% FREE",
        "urgent": "Disability Certificate Required",
        "executive": "Exempt from Fee",
        "validity": "Official Quota"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Check Latest Advertisement on PPSC Portal",
        "titleUr": "پی پی ایس سی کی تازہ ترین نوکریاں دیکھیں",
        "detailEn": "Visit ppsc.gop.pk and check 'Jobs' tab for current advertisement numbers and seat quotas.",
        "detailUr": "ویب سائٹ پر تازہ ترین اشتہار اور خالی آسامیوں کا جائزہ لیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Generate 17-Digit PSID Fee Voucher",
        "titleUr": "17 ہندسوں کا پی ایس آئی ڈی واؤچر بنائیں",
        "detailEn": "Start online application, enter CNIC and post, and generate your 17-digit PSID code for PKR 600.",
        "detailUr": "آن لائن فارم شروع کر کے 600 روپے فیس کا پی ایس آئی ڈی کوڈ حاصل کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Pay via ePay Punjab or Bank App",
        "titleUr": "ای پے پنجاب ایپ سے فیس جمع کروائیں",
        "detailEn": "Pay through ePay Punjab, Easypaisa, JazzCash, or any mobile banking app.",
        "detailUr": "ای پے پنجاب یا موبائل بینکنگ سے فیس فوری ادا کریں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Upload Photo & Scanned CNIC Front",
        "titleUr": "تصویر اور شناختی کارڈ کی اسکین کاپی اپلوڈ کریں",
        "detailEn": "Upload a crisp passport-size photograph (under 25KB) and clear CNIC front image.",
        "detailUr": "پاسپورٹ سائز تصویر اور شناختی کارڈ کی تصویر اپلوڈ کریں۔"
      },
      {
        "stepNumber": 5,
        "titleEn": "Submit Application & Note Token Number",
        "titleUr": "درخواست جمع کریں اور ٹوکن نمبر نوٹ کریں",
        "detailEn": "Review educational degrees and submit. Save the computer-generated Application Number and Token Number.",
        "detailUr": "تمام تعلیمی ریکارڈ چیک کر کے فارم سبمٹ کریں اور ٹوکن نمبر محفوظ کریں۔"
      }
    ]
  },
  "nts-jobs-today": {
    "slug": "nts-jobs-today",
    "fullPath": "/jobs/nts-jobs-today",
    "categoryId": "jobs",
    "titleEn": "NTS Jobs Today 2026: National Testing Service Roll No Slip & Results",
    "titleUr": "این ٹی ایس (NTS) جابز 2026: رول نمبر سلپ اور رزلٹ آن لائن چیک",
    "metaDescriptionEn": "Latest NTS job announcements 2026, online application process, roll number slip download, answer key, and NAT/GAT test schedule.",
    "metaDescriptionUr": "این ٹی ایس کی نئی نوکریاں، رول نمبر سلپ ڈاؤن لوڈ، انسر کی اور رزلٹ چیک کرنے کی معلومات۔",
    "directAnswerEn": "To apply for National Testing Service (NTS) jobs and admissions in 2026, register at nts.org.pk. Download the fee deposit slip, pay PKR 500-1,000 via 1Link, Easypaisa, or ATM, download your Roll Number Slip 7 days before the exam, and check your online scorecard.",
    "directAnswerUr": "نیشنل ٹیسٹنگ سروس (NTS) کے ذریعے نوکریوں اور داخلوں کے لیے nts.org.pk پر رجسٹریشن کریں۔ 1Link یا ایزی پیسہ سے فیس ادا کریں، ٹیسٹ سے 7 دن پہلے رول نمبر سلپ ڈاؤن لوڈ کریں اور رزلٹ چیک کریں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "NTS Official Web Portal",
      "url": "https://nts.org.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Testing & Recruitment Desk"
    },
    "faqs": [
      {
        "questionEn": "What is the validity period of an NTS NAT or GAT score?",
        "questionUr": "این ٹی ایس ٹیسٹ اسکور کتنے سال کے لیے کارآمد ہوتا ہے؟",
        "answerEn": "NTS NAT scores (for university admissions) and GAT General/Subject scores are officially valid for 2 consecutive years from the test result declaration date.",
        "answerUr": "این ٹی ایس ٹیسٹ کا رزلٹ 2 سال تک تمام یونیورسٹیوں اور نوکریوں کے لیے کارآمد رہتا ہے۔"
      },
      {
        "questionEn": "How can citizens verify the authenticity of official documents and avoid imposters?",
        "questionUr": "سرکاری دستاویزات کی تصدیق اور جعل سازی سے کیسے بچا جائے؟",
        "answerEn": "Always verify tracking numbers on the official government website ending in .gov.pk or .org.pk. Never share one-time password (OTP) codes or sensitive biometric details with unverified phone callers claiming to represent government helplines.",
        "answerUr": "ہمیشہ .gov.pk ویب سائٹ سے تصدیق کریں اور کسی بھی غیر متعلقہ فون کال پر اپنا او ٹی پی (OTP) یا بائیو میٹرک تفصیلات شیئر نہ کریں۔"
      }
    ],
    "contentEn": "## National Testing Service (NTS) Guide 2026\n**NTS** is Pakistan's pioneer testing organization conducting transparent recruitment tests for WAPDA, SNGPL, atomic energy commissions, banks, educators, and university admissions.\n\n## National Testing Service (NTS) Scoring Matrix & NAT/GAT Formats\n- **National Aptitude Test (NAT)**: For undergraduate university admissions across engineering, medical, computer science, and social sciences.\n- **Graduate Assessment Test (GAT General & Subject)**: For MPhil/PhD admissions and government departmental appointments (e.g. WAPDA, SNGPL, NESCOM).\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## National Testing Service (NTS) Examination Formats, Roll No Slips & Scorecards\nThe **National Testing Service (NTS)** provides standardized evaluation tests for government ministries, state corporations, commercial banks, and higher education degree programs.\n\n### 1. Key NTS Test Classifications\n- **NTS NAT (National Aptitude Test)**: Conducted monthly for students seeking undergraduate admissions in COMSATS, FAST, NUST, and constituent public universities.\n- **NTS GAT General**: Evaluates English verbal reasoning, analytical reasoning, and quantitative ability for MS/MPhil admissions and public sector scholarships.\n- **NTS GAT Subject**: Advanced discipline-specific test for doctoral (PhD) program admissions and senior technical research appointments.\n\n---\n\n## Comprehensive Preparation Strategy for Competitive Examinations & Interviews\nSecuring a high merit ranking in public service commission examinations (FPSC, PPSC, SPSC, KPPSC, BPSC, NTS) requires structured, disciplined preparation across multiple academic disciplines.\n\n### 1. The 5-Pillar Core Curriculum for General Ability Tests\n- **Pakistan Affairs & Historical Constitutional Evolution**: 1857 War of Independence, Sir Syed's Aligarh Movement, 1906 Muslim League formation, 1940 Lahore Resolution, 1973 Constitution, 18th Constitutional Amendment, CPEC, and contemporary foreign policy challenges.\n- **Current Affairs & International Relations**: Key global alliances (SCO, BRICS, UN Security Council, OIC), Middle East dynamics, international climate treaties, and State Bank monetary policies.\n- **Everyday Science & Basic Mathematics**: Human anatomy, vitamins, planetary astronomy, solar energy, basic algebra, ratio-proportion, percentages, averages, and basic geometry problems.\n- **English Grammar, Comprehension & Précis**: Sentence correction, preposition rules, active-passive voice, direct-indirect narration, vocabulary antonyms/synonyms, and concise précis writing.\n- **Information Technology & Cyber Security**: Computer architecture, operating systems, Microsoft Office shortcut keys, networking concepts (LAN, WAN, IP address), and data encryption fundamentals.\n\n### 2. Mastering the Public Service Commission Interview & Psychological Viva Voce\n- **Confidence & Body Language**: Maintain steady eye contact with all interview panel members, sit upright with relaxed shoulders, and enter/leave the interview chamber with formal professional courtesy.\n- **Handling Unknown Questions**: Never guess or fabricate answers before seasoned panel members. If you do not know a factual query, politely state: *\"I apologize, sir/madam, I am unable to recall this specific information at the moment.\"*\n- **Current Job & Academic Defense**: Be prepared to defend your university final-year thesis, previous work experience, and explain precisely how your educational background directly benefits the applied government post.\n\n---\n\n## Redressal of Recruitment Grievances & Legal Rights of Candidates\nUnder statutory public service commission rules and high court precedents:\n- **Right to Paper Re-Checking**: Candidates have the legal right to apply for formal paper recount and optical mark recognition (OMR) sheet re-verification within 30 days of result announcement by paying a nominal fee.\n- **Right to Interview Merit Breakdown**: Rejected candidates can request their detailed breakdown marks (Academic Marks, Written Marks, Interview Marks) to verify merit transparency.\n- **Writ Jurisdiction in High Court**: If administrative rules or seat quotas were unlawfully altered, candidates can file a constitutional writ petition under Article 199 of the Constitution of Pakistan at the relevant Provincial High Court.\n\n---\n\n## Summary of Key Verification Protocols & Citizen Safeguards (2026 Checklist)\nBefore completing any official transaction or submitting financial documents, verify the following baseline procedural benchmarks:\n\n1. **Official Verification Stamps**: Ensure all computer-generated vouchers, receipts, and bank deposit challans bear the official branch cashier stamp and computer transaction sequence number.\n2. **Digital Copy Archival**: Maintain a scanned PDF or photograph of your submitted forms and payment receipts in cloud storage (Google Drive or Dropbox) for at least 5 years.\n3. **Tracking & Timeline Monitoring**: Utilize the official departmental SMS short-code or online portal tracking number to monitor progress weekly. If no update occurs within the stipulated charter timeframe, immediately escalate the case to the departmental grievance officer or relevant provincial ombudsman desk.",
    "contentUr": "## نیشنل ٹیسٹنگ سروس (NTS) گائیڈ 2026\nاین ٹی ایس کے ذریعے واپڈا، بینکوں اور سرکاری محکموں میں بھرتی کی مکمل تفصیلات۔",
    "relatedSlugs": [
      "/jobs/latest-govt-jobs-pakistan",
      "/jobs/ppsc-jobs-2026"
    ],
    "feeStructure": [
      {
        "serviceEn": "NTS Screening Test Fee",
        "serviceUr": "این ٹی ایس اسکریننگ ٹیسٹ فیس",
        "normal": "PKR 500 - 1,000",
        "urgent": "1Link / Mobile Wallets",
        "executive": "Instant Digital Slip",
        "validity": "Per Test"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Create Profile on NTS Candidate Portal",
        "titleUr": "این ٹی ایس پورٹل پر اکاؤنٹ بنائیں",
        "detailEn": "Register at portal.nts.org.pk with your CNIC and active mobile number.",
        "detailUr": "پورٹل پر شناختی کارڈ اور موبائل نمبر کے ساتھ لاگ ان کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Select Desired Job Project & Pay Fee",
        "titleUr": "مطلوبہ جاب پروجیکٹ منتخب کر کے فیس ادا کریں",
        "detailEn": "Select vacancy, generate 1Link invoice, and pay via mobile banking.",
        "detailUr": "جاب سلیکٹ کر کے 1Link یا ایزی پیسہ سے فیس ادا کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Download Roll Number Slip with Center Address",
        "titleUr": "رول نمبر سلپ ڈاؤن لوڈ کریں",
        "detailEn": "Download Roll No slip containing test date, timing, and venue 7 days prior to exam.",
        "detailUr": "امتحان سے ایک ہفتہ قبل رول نمبر سلپ اور سنٹر ایڈریس حاصل کریں۔"
      }
    ]
  },
  "apni-chhat-apna-ghar": {
    "slug": "apni-chhat-apna-ghar",
    "fullPath": "/loans/apni-chhat-apna-ghar",
    "categoryId": "loans",
    "titleEn": "Apni Chhat Apna Ghar Scheme 2026: 1.5M PKR Housing Loan Apply",
    "titleUr": "اپنی چھت اپنا گھر سکیم 2026: آن لائن اپلائی (15 لاکھ روپے بلا سود قرضہ)",
    "metaDescriptionEn": "Apni Chhat Apna Ghar Housing Loan 2026 apply online at acag.punjab.gov.pk. 1.5 Million PKR interest-free loan rules, eligibility, and plot documents.",
    "metaDescriptionUr": "وزیراعلیٰ پنجاب اپنی چھت اپنا گھر سکیم 2026 کا آن لائن اپلائی پورٹل، 15 لاکھ بلا سود قرضہ، ماہانہ قسط 14,000 روپے اور 9 سالہ ادائیگی۔",
    "directAnswerEn": "The Apni Chhat Apna Ghar Scheme 2026 by CM Punjab provides interest-free housing loans up to PKR 1,500,000 (15 Lakhs) for plot owners with 1 to 5 Marla land in urban areas or up to 10 Marla in rural areas. Monthly installments are capped at PKR 14,000 for 7 years with zero interest.",
    "directAnswerUr": "اپنی چھت اپنا گھر سکیم 2026 کے تحت پنجاب حکومت 15 لاکھ روپے تک بلا سود ہاؤسنگ لون فراہم کر رہی ہے۔ ماہانہ قسط صرف 14,000 روپے ہے اور واپسی کی مدت 7 سال ہے۔ 1 سے 5 مرلہ شہری یا 10 مرلہ دیہی پلاٹ کے مالکان اہل ہیں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "Punjab Housing & Urban Development Portal",
      "url": "https://acag.punjab.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Housing & Financial Schemes Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Micro-Housing Loan (Urban 1-5 Marla)",
        "serviceUr": "شہری پلاٹ لون (1 تا 5 مرلہ)",
        "normal": "PKR 1,500,000",
        "urgent": "0% (Zero Interest)",
        "executive": "PKR 14,000 / month",
        "validity": "7 Years (84 Months)"
      },
      {
        "serviceEn": "Rural Housing Loan (Up to 10 Marla)",
        "serviceUr": "دیہی پلاٹ لون (10 مرلہ تک)",
        "normal": "PKR 1,500,000",
        "urgent": "0% (Zero Interest)",
        "executive": "PKR 14,000 / month",
        "validity": "7 Years (84 Months)"
      },
      {
        "serviceEn": "Application Processing Fee",
        "serviceUr": "درخواست پروسیسنگ فیس",
        "normal": "FREE (Online via ACAG Portal)",
        "urgent": "No Hidden Charges",
        "executive": "Direct Bank Disbursement",
        "validity": "Official PHATA"
      },
      {
        "serviceEn": "Building Plan Approval (TMA/PHATA)",
        "serviceUr": "بلڈنگ پلان منظوری",
        "normal": "Standardized Free Model Maps",
        "urgent": "Fast-Track Approval",
        "executive": "3 Pre-Approved Designs",
        "validity": "Lifetime"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Verify Land Ownership (Fard/Registry)",
        "titleUr": "اراضی ملکیت (فرد یا رجسٹری) کی تصدیق",
        "detailEn": "Ensure the land is legally registered in your or your spouse's name with an updated computerized Fard Malkiat or registered sub-registrar deed without any litigation.",
        "detailUr": "یقینی بنائیں کہ پلاٹ قانونی طور پر آپ کے یا شریک حیات کے نام کمپیوٹرائزڈ فرد یا رجسٹرڈ بیع نامہ کے ساتھ موجود ہے۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Register on ACAG Official Portal",
        "titleUr": "آن لائن پورٹل پر رجسٹریشن",
        "detailEn": "Visit acag.punjab.gov.pk or download the ACAG mobile app. Enter your 13-digit CNIC, mobile number registered on your CNIC, and current residential address.",
        "detailUr": "پورٹل acag.punjab.gov.pk پر اپنا شناختی کارڈ اور موبائل نمبر درج کر کے اکاؤنٹ بنائیں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Upload Plot Coordinates & Documents",
        "titleUr": "پلاٹ تصویر اور دستاویزات اپلوڈ کریں",
        "detailEn": "Upload high-resolution scans of your CNIC, Fard Malkiat/Allotment Letter, plot pictures with GPS geo-tagging, and 3-month household utility bills.",
        "detailUr": "شناختی کارڈ، اراضی فرد اور پلاٹ کی واضح تصویر جی پی ایس لوکیشن کے ساتھ پورٹل پر اپلوڈ کریں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Select Standardized Construction Blueprint",
        "titleUr": "منظور شدہ ہاؤسنگ ڈیزائن کا انتخاب",
        "detailEn": "Choose from 3 free pre-approved PHATA architectural floor plans (single-story, 1-2 bedrooms, kitchen, bath) designed for efficient budget execution.",
        "detailUr": "محکمہ ہاؤسنگ کے 3 منظور شدہ مفت نقشوں میں سے اپنے پلاٹ کے مطابق ڈیزائن منتخب کریں۔"
      },
      {
        "stepNumber": 5,
        "titleEn": "Field Verification by District Team",
        "titleUr": "ضلعی ٹیم کی فیلڈ تصدیق",
        "detailEn": "A verification officer from PHATA/BOP visits the site to confirm plot boundaries and ownership before issuing physical clearance.",
        "detailUr": "متعلقہ اسسٹنٹ کمشنر یا ہاؤسنگ ٹیم پلاٹ کا معائنہ کر کے رپورٹ سسٹم میں درج کرے گی۔"
      },
      {
        "stepNumber": 6,
        "titleEn": "Loan Disbursement via Bank of Punjab",
        "titleUr": "بینک آف پنجاب کے ذریعے قسط وار ادائیگی",
        "detailEn": "Funds are transferred directly into your Bank of Punjab (BOP) account in 3 construction-linked tranches: Foundation (40%), Lintel/Roof (30%), and Finishing (30%).",
        "detailUr": "رقم 3 مرحلہ وار اقساط (بنیاد 40٪، چھت 30٪ اور فنشنگ 30٪) میں براہ راست بینک اکاؤنٹ میں منتقل ہوتی ہے۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Is Apni Chhat Apna Ghar genuinely 100% interest-free?",
        "questionUr": "کیا یہ لون واقعی 100 فیصد بلا سود ہے؟",
        "answerEn": "Yes. The Government of Punjab pays the entire subsidy markup directly to the partner commercial banks (Bank of Punjab). The citizen only repays the exact principal amount of PKR 1.5 Million over 84 equal monthly installments of PKR 14,000.",
        "answerUr": "جی ہاں! حکومت پنجاب تمام مارک اپ خود ادا کرتی ہے اور شہری صرف اصل رقم 14,000 روپے ماہانہ قسط کے حساب سے واپس کرتے ہیں۔"
      },
      {
        "questionEn": "Can I apply if the plot is in my father's or brother's name?",
        "questionUr": "کیا والد یا بھائی کے نام کے پلاٹ پر اپلائی کیا جا سکتا ہے؟",
        "answerEn": "No. The applicant or their legally married spouse must be the sole or joint title holder. If the plot is ancestral property, get the legal inheritance transfer (Inteqal) completed first.",
        "answerUr": "نہیں! پلاٹ کا درخواست گزار یا اس کے شریک حیات کے نام رجسٹرڈ ہونا لازمی ہے۔ مشترکہ یا غیر منقسم جائیداد پر پہلے انتقال درج کروائیں۔"
      },
      {
        "questionEn": "What is the monthly repayment grace period?",
        "questionUr": "قسط کی واپسی کب شروع ہوتی ہے؟",
        "answerEn": "Borrowers receive a 3-month construction grace period after the first tranche release. The first monthly installment of PKR 14,000 becomes due in the fourth month.",
        "answerUr": "پہلی قسط کے اجراء کے بعد 3 ماہ کی مہلت دی جاتی ہے، جس کے بعد چوتھے مہینے سے ماہانہ 14,000 روپے کی واپسی شروع ہوتی ہے۔"
      },
      {
        "questionEn": "Can overseas Pakistanis apply for this scheme?",
        "questionUr": "کیا اوورسیز پاکستانی اس سکیم کے لیے اہل ہیں؟",
        "answerEn": "Overseas Pakistanis holding a valid NICOP can apply provided the plot is situated in Punjab and their designated resident representative holds a power of attorney for site inspections.",
        "answerUr": "جی ہاں، نائیکوپ رکھنے والے اوورسیز پاکستانی اپلائی کر سکتے ہیں بشرطیکہ اراضی پنجاب میں ہو اور نمائندہ موجود ہو۔"
      },
      {
        "questionEn": "What happens if someone fails to pay an installment on time?",
        "questionUr": "اگر کوئی قسط وقت پر ادا نہ کر سکے تو کیا ہوگا؟",
        "answerEn": "Late payments trigger automated SMS alerts. Continued default for 3 consecutive months can lead to legal recovery proceedings under the Punjab Land Revenue Act and negative reporting to SBP's Electronic Credit Information Bureau (eCIB).",
        "answerUr": "مسلسل 3 ماہ عدم ادائیگی پر لون ڈیفالٹ قرار دیا جاتا ہے اور لینڈ ریونیو ایکٹ کے تحت قانونی کارروائی عمل میں لائی جا سکتی ہے۔"
      },
      {
        "questionEn": "Can two brothers apply separately if they own adjacent plots?",
        "questionUr": "کیا دو بھائی ساتھ ساتھ پلاٹوں پر الگ الگ اپلائی کر سکتے ہیں؟",
        "answerEn": "Yes, provided each brother possesses a separate independent computerized Fard Malkiat registered in his own name with distinct Khasra/Khatuni sub-division numbers. Combined or un-partitioned joint Khatas must be formally partitioned (Khatoni Taqseem) at the Tehsil Revenue office before application.",
        "answerUr": "جی ہاں! بشرطیکہ دونوں بھائیوں کے نام اراضی کا الگ کمپیوٹرائزڈ فرد اور کھاتہ نمبر موجود ہو۔ مشترکہ کھاتے پر پہلے قانونی تقسیم کروائیں۔"
      },
      {
        "questionEn": "What if construction costs exceed PKR 1.5 Million?",
        "questionUr": "اگر تعمیراتی لاگت 15 لاکھ سے بڑھ جائے تو کیا ہوگا؟",
        "answerEn": "The government provides a fixed maximum ceiling of PKR 1,500,000. Any expenditure exceeding this amount for luxury fittings, extra floors, or higher square footage must be self-financed by the plot owner. The pre-approved PHATA blueprints are designed specifically to finish a functional single-story 3-5 Marla house within this budget.",
        "answerUr": "حکومت 15 لاکھ روپے تک قرض فراہم کرتی ہے۔ اس سے زائد کے تمام اخراجات درخواست گزار کو خود برداشت کرنے ہوتے ہیں۔"
      }
    ],
    "contentEn": "## Overview of the Apni Chhat Apna Ghar Scheme 2026\nThe **Apni Chhat Apna Ghar (ACAG) Housing Scheme** is the flagship social housing initiative launched by the Government of Punjab to assist low-to-middle income families who own small residential land parcels but lack the capital to build a durable brick-and-mortar home. Unlike conventional commercial bank mortgages that carry high KIBOR interest rates, ACAG is a **pure interest-free (Qarz-e-Hasna) micro-credit facility** where the Punjab provincial government absorbs the entire financial spread.\n\nUnder the program, approved beneficiaries receive **PKR 1.5 Million (15 Lakh Rupees)** disbursed in three milestones linked to construction progress. The repayment is structured over **7 years (84 months)** at a fixed, affordable monthly installment of **PKR 14,000**.\n\n---\n\n## Detailed Eligibility Criteria & Rules\n\nTo qualify for the Apni Chhat Apna Ghar program, applicants must satisfy strict demographic and asset thresholds:\n\n| Requirement | Detailed Official Parameter | Verification Document |\n| :--- | :--- | :--- |\n| **Provincial Domicile** | Citizen of Pakistan with permanent Punjab domicile & CNIC | Punjab Domicile Certificate & NADRA CNIC |\n| **Land Size (Urban)** | 1 Marla to 5 Marla residential plot inside municipal limits | Computerized Fard Malkiat / Registered Deed |\n| **Land Size (Rural)** | Up to 10 Marla residential plot in rural revenue estates | Rural Revenue Estate Record (Inteqal) |\n| **Household Monthly Income** | Total family monthly earnings below PKR 60,000 | Self-declaration & utility bill verification |\n| **Previous Home Ownership** | Must not own any other registered concrete house in Punjab | NADRA & Land Record Society cross-check |\n| **Credit History** | Clean eCIB record with no default on previous bank loans | State Bank of Pakistan credit bureau check |\n\n> [!IMPORTANT]\n> **Plot Ownership Caveat**: The land must be unencumbered (free of court stays, bank mortgages, or disputed inheritance). If your plot is in an unapproved housing society lacking a TMA NOC, your application will be placed on hold until societal clearance is documented.\n\n---\n\n## Breakdown of the PKR 1.5M Disbursement Tranches\n\nThe loan is not released as a single lump-sum cash payout to prevent fund diversion. Instead, the Bank of Punjab (BOP) releases money in structured stages:\n\n```\nTranche 1: Foundation & Plinth Level (40% = PKR 600,000)\n   ↓ (Site Inspection & Geo-Tagged Photo Upload)\nTranche 2: Walls & Roof Lintel Casting (30% = PKR 450,000)\n   ↓ (Physical Inspection by Assistant Commissioner Team)\nTranche 3: Plaster, Flooring & Doors Finishing (30% = PKR 450,000)\n```\n\n1. **Tranche 1 (PKR 600,000)**: Issued within 10 days of biometric loan agreement signing. Used for ground excavation, foundation laying, and plinth construction.\n2. **Tranche 2 (PKR 450,000)**: Released once the field engineer verifies brick masonry walls up to 10-foot height and shuttering for roof slab.\n3. **Tranche 3 (PKR 450,000)**: Released upon roof casting for internal electrical conduits, sanitary piping, plastering, and floor screed.\n\n---\n\n## Step-by-Step Online Application Guide\n\n### Phase 1: Portal Registration\n- Access **acag.punjab.gov.pk** on mobile or PC.\n- Register using your CNIC number and an active SIM card registered against your own CNIC.\n- Set up a secure password and verify through the 6-digit SMS OTP.\n\n### Phase 2: Form Submission\n- Fill in household bio-data: marital status, number of dependents, and source of monthly income.\n- Enter precise plot details: District, Tehsil, Mauza, Khasra Number, and Street Address.\n- Upload front and back photos of your CNIC and the computerized Fard Malkiat issued by the Punjab Land Record Authority (PLRA).\n\n### Phase 3: Field Verification & Biometrics\n- Within 15 to 20 working days, a field team visits the plot coordinates.\n- Once cleared, you will receive an SMS containing a tracking voucher code.\n- Visit the designated Bank of Punjab branch for biometric signature on the Qarz-e-Hasna contract.\n\n---\n\n## Practical Tips for Quick Approval\n\n- **Avoid Agents & Middlemen**: The ACAG application is 100% free of charge. Never pay money to unauthorized agents promising \"guaranteed balloting\".\n- **Ensure Clear Khasra Number**: If your land is situated in a rural area, obtain a freshly stamped *Aks-Shajra* (map tracing) from your local Patwari to prevent boundary rejections.\n- **Maintain an Active BOP Account**: Opening an Asaan Current Account at your nearest BOP branch before balloting saves 5 to 7 days during disbursement.\n- **Observe the Grace Period**: Repayment starts 90 days after receiving the initial PKR 600,000 payment. Set up an auto-debit on your salary or savings account to maintain a clean credit score.\n\n## In-Depth Architectural Blueprints & Construction Specifications\nThe Punjab Housing and Town Planning Agency (PHATA) has standardized three architectural plans for the Apni Chhat Apna Ghar initiative to prevent cost overruns and structural safety hazards:\n\n### 1. The 3-Marla Model Design (Covered Area: ~650 sq ft)\n- **Ground Floor**: 1 Master Bedroom (12x14 ft) with attached bath, 1 Guest/Living Room (10x12 ft), open kitchen counter, front verandah/porch, and internal ventilation shaft.\n- **Structural Spec**: 9-inch brick load-bearing external walls, 1:2:4 reinforced cement concrete (RCC) roof slab, and concealed PVC electrical conduit piping.\n\n### 2. The 5-Marla Model Design (Covered Area: ~950 sq ft)\n- **Ground Floor**: 2 Bedrooms (12x13 ft each) with 2 bathrooms, central lounge (14x16 ft), separate kitchen (8x10 ft), car porch, and rear laundry courtyard.\n- **Structural Spec**: Anti-termite subterranean chemical treatment, DPC waterproofing bitumen membrane, and aluminum sliding windows.\n\n---\n\n## Complete District Distribution & Quota Matrix across Punjab\nThe 100,000 housing loan quota is distributed across all 9 administrative divisions of Punjab based on district population census data:\n\n| Division | Major Focus Districts | Allocated Loan Units | Execution Partners |\n| :--- | :--- | :--- | :--- |\n| **Lahore Division** | Lahore, Kasur, Sheikhupura, Nankana Sahib | 22,000 Units | PHATA / Bank of Punjab |\n| **Faisalabad Division** | Faisalabad, Jhang, Toba Tek Singh, Chiniot | 15,000 Units | PHATA / BOP / Akhuwat |\n| **Rawalpindi Division** | Rawalpindi, Attock, Jhelum, Chakwal | 14,000 Units | PHATA / District Admin |\n| **Multan Division** | Multan, Khanewal, Lodhran, Vehari | 13,000 Units | PHATA / BOP |\n| **Gujranwala Division** | Gujranwala, Sialkot, Gujrat, Narowal, Hafizabad | 14,000 Units | PHATA / BOP |\n| **Bahawalpur Division** | Bahawalpur, Bahawalnagar, Rahim Yar Khan | 10,000 Units | PHATA / BOP |\n| **Sargodha & D.G. Khan** | Sargodha, Bhakkar, Mianwali, D.G. Khan, Muzaffargarh | 12,000 Units | PHATA / Rural Housing Desk |\n\n---\n\n## Step-by-Step Troubleshooting for Common Verification Delays\n- **Issue: Fard Not Verified in PLRA System**: Visit your local Arazi Record Center (ARC) with your original CNIC and request a *Fard Baraye Tameer-e-Makan* (Fard for Housing Construction) to ensure proper digital sync.\n- **Issue: Location Coordinates Mismatch**: Ensure you take the plot photos using a smartphone with GPS Location / Geo-Tagging enabled in camera settings.\n- **Issue: Delayed BOP Biometric Token**: If you haven't received your bank invitation SMS within 30 days of site verification, call the Chief Minister Complaint Cell at 0800-02345 with your ACAG Tracking Reference Number.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n---\n\n## Strategic Financial Planning & Credit Score Management for Borrowers\nAcquiring government-subsidized credit or interest-free microfinance is a major financial milestone that requires disciplined cash-flow management to protect your long-term national credit standing.\n\n### 1. Understanding SBP's Electronic Credit Information Bureau (eCIB)\nEvery subsidized loan application is screened against the State Bank of Pakistan's central eCIB database. Maintaining a flawless credit rating is essential:\n- **Timely Installment Clearing**: Always deposit installments at least 48 hours prior to the monthly due date to prevent inter-bank settlement delays from triggering overdue flags.\n- **Credit Card & Overdraft Caution**: Never utilize more than 60% of your sanctioned credit card limit, and clear statement balances in full to maintain prime borrower tier categorization.\n- **Guarantor Responsibility**: Serving as a loan guarantor for a friend or relative makes you legally and financially liable. If the primary borrower defaults, your own eCIB record is flagged, blocking your future personal loan and mortgage applications.\n\n### 2. Business Cash Flow Allocation for Micro-Enterprises\n- **Separating Personal & Business Wallets**: Never mix household grocery expenses with daily shop sales revenue. Maintain a separate digital ledger book (Khata) to track inventory turnarounds.\n- **Emergency Reserve Fund**: Re-invest at least 20% of net monthly business profits into an emergency liquidity reserve to cushion against seasonal market slumps and inflation.\n\n---\n\n## Legal Rights & Consumer Protection for Subsidized Borrowers\nUnder State Bank of Pakistan Consumer Protection Regulations:\n- **Transparent Amortization Schedules**: Banks must provide a full printed repayment schedule displaying principal breakdown, payment dates, and zero hidden penalty clauses.\n- **No Early Repayment Penalties**: For subsidized youth and housing schemes, borrowers can make partial or full early lump-sum settlements with zero prepayment penalties.\n- **Harassment Prohibition**: Bank recovery officers are strictly barred by law from contacting borrowers before 9:00 AM or after 7:00 PM, or visiting family residences without prior written appointment notices.",
    "contentUr": "## اپنی چھت اپنا گھر سکیم 2026 کا مکمل جائزہ\nحکومت پنجاب کی جانب سے شروع کی گئی **اپنی چھت اپنا گھر سکیم** غریب اور متوسط طبقے کے لیے بلا سود ہاؤسنگ فنانسنگ کا شاندار پروگرام ہے۔ اس سکیم کے تحت ایسے تمام شہری جن کے پاس 1 سے 5 مرلہ کا شہری یا 10 مرلہ تک کا دیہی پلاٹ موجود ہے، وہ گھر کی تعمیر کے لیے **15 لاکھ روپے تک کا بلا سود قرضہ** حاصل کر سکتے ہیں۔\n\nاس قرضے پر کوئی سود یا مارک اپ نہیں ہے کیونکہ پنجاب حکومت تمام اضافی اخراجات خود برداشت کرتی ہے۔ درخواست گزار کو 7 سال (84 ماہ) کے دوران صرف **14,000 روپے ماہانہ قسط** ادا کرنی ہوتی ہے۔\n\n---\n\n## اہلیت اور ضروری شرائط\n- درخواست گزار پنجاب کا مستقل رہائشی ہو اور اس کے پاس پنجاب کا ڈومیسائل اور نادرا شناختی کارڈ ہو۔\n- شہری علاقوں میں 1 تا 5 مرلہ یا دیہی علاقوں میں 10 مرلہ تک اراضی کی قانونی ملکیت (کمپیوٹرائزڈ فرد یا رجسٹرڈ بیع نامہ) موجود ہو۔\n- خاندان کی کل ماہانہ آمدنی 60,000 روپے سے کم ہو۔\n- درخواست گزار کسی دوسرے پکے مکان کا مالک نہ ہو اور کسی بینک کا نادہندہ نہ ہو۔\n\n---\n\n## 15 لاکھ روپے کی اقساط کا طریقہ کار\nرقم 3 مرحلہ وار اقساط میں بینک آف پنجاب کے ذریعے منتقل کی جاتی ہے:\n1. **پہلی قسط (40 فیصد - 6 لاکھ روپے)**: بنیادوں اور ڈی پی سی لیول کی تعمیر کے لیے۔\n2. **دوسری قسط (30 فیصد - 4.5 لاکھ روپے)**: دیواروں اور چھت ڈالنے کے مرحلے پر۔\n3. **تیسری قسط (30 فیصد - 4.5 لاکھ روپے)**: پلستر، فرش، بجلی اور سینیٹری کے کاموں کے لیے۔",
    "relatedSlugs": [
      "/loans/pm-youth-loan-scheme",
      "/loans/mera-ghar-mera-ashiana",
      "/loans/kamyab-jawan-program"
    ]
  },
  "kamyab-jawan-program": {
    "slug": "kamyab-jawan-program",
    "fullPath": "/loans/kamyab-jawan-program",
    "categoryId": "loans",
    "titleEn": "Kamyab Jawan Program 2026: Youth Business Loan Online Registration",
    "titleUr": "کامیاب جوان پروگرام 2026: یوتھ بزنس لون آن لائن رجسٹریشن و گائیڈ",
    "metaDescriptionEn": "Complete registration guide for Kamyab Jawan Youth Business & Agriculture Loans 2026. Tier 1 (up to 5 Lakhs @ 0%), Tier 2 (up to 10 Million @ 5%), and Tier 3 rules.",
    "metaDescriptionUr": "کامیاب جوان کاروبار اور زراعت قرضہ سکیم 2026۔ ٹائر 1 (5 لاکھ روپے بلا سود)، ٹائر 2 (1 کروڑ روپے کم مارک اپ) اور بینک آف پنجاب گائیڈ۔",
    "directAnswerEn": "The Kamyab Jawan (PM Youth Business & Agriculture Loan) Program 2026 provides subsidized loans up to PKR 7,500,000 (75 Lakhs) across three tiers. Tier 1 offers interest-free loans up to PKR 500,000 through microfinance banks, while Tier 2 and Tier 3 provide subsidized credit at 5% and 7% fixed markup.",
    "directAnswerUr": "کامیاب جوان (وزیراعظم یوتھ بزنس لون) سکیم 2026 کے تحت 75 لاکھ روپے تک قرضہ فراہم کیا جاتا ہے۔ ٹائر 1 میں 5 لاکھ روپے تک کا قرضہ 100 فیصد بلا سود ہے، جبکہ ٹائر 2 اور 3 میں 5 فیصد اور 7 فیصد رعایتی مارک اپ پر فنڈز ملتے ہیں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "PM Youth Program Official Portal",
      "url": "https://pmyp.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Youth & Small Business Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Tier 1: Micro-Credit (Interest-Free)",
        "serviceUr": "ٹائر 1: مائیکرو لون (بلا سود)",
        "normal": "Up to PKR 500,000",
        "urgent": "0% Interest",
        "executive": "Personal Guarantee Only",
        "validity": "Up to 3 Years"
      },
      {
        "serviceEn": "Tier 2: Small Enterprise Loan",
        "serviceUr": "ٹائر 2: سمال بزنس لون",
        "normal": "PKR 500k to 1.5 Million",
        "urgent": "5% Fixed Markup",
        "executive": "Clean / Third-party Guarantee",
        "validity": "Up to 8 Years"
      },
      {
        "serviceEn": "Tier 3: Medium Enterprise Loan",
        "serviceUr": "ٹائر 3: میڈیم بزنس لون",
        "normal": "PKR 1.5M to 7.5 Million",
        "urgent": "7% Fixed Markup",
        "executive": "Collateral / Mortgage Required",
        "validity": "Up to 8 Years"
      },
      {
        "serviceEn": "Online Application Processing Fee",
        "serviceUr": "آن لائن درخواست فیس",
        "normal": "PKR 100 (Non-Refundable)",
        "urgent": "Paid via 1Link / JazzCash",
        "executive": "Official PMYP Portal",
        "validity": "Per Application"
      }
    ],
    "faqs": [
      {
        "questionEn": "What is the age limit for Kamyab Jawan loans?",
        "questionUr": "کامیاب جوان لون کے لیے عمر کی حد کیا ہے؟",
        "answerEn": "Pakistani citizens aged between 21 and 45 years with a valid CNIC can apply. For IT and E-commerce businesses, the minimum age requirement is lowered to 18 years.",
        "answerUr": "21 سے 45 سال کے تمام مرد و خواتین اہل ہیں۔ آئی ٹی اور ای کامرس کاروبار کے لیے کم از کم عمر 18 سال ہے۔"
      },
      {
        "questionEn": "Is collateral (property mortgage) required for Tier 1 or Tier 2?",
        "questionUr": "کیا ٹائر 1 اور 2 کے لیے جائیداد رہن رکھنا ضروری ہے؟",
        "answerEn": "No. Tier 1 (up to PKR 500k) is collateral-free on personal guarantee. Tier 2 (up to PKR 1.5M) requires clean / third-party credit guarantee. Tangible property mortgage is only mandatory for Tier 3 (above PKR 1.5M).",
        "answerUr": "نہیں! ٹائر 1 اور ٹائر 2 کے لیے کسی جائیداد کو رہن رکھنے کی ضرورت نہیں، صرف ذاتی یا تھرڈ پارٹی ضامن درکار ہوتا ہے۔"
      },
      {
        "questionEn": "What documents are needed to prove business feasibility for Tier 2?",
        "questionUr": "ٹائر 2 کے لیے بزنس پلان کے ساتھ کیا ثبوت چاہیے؟",
        "answerEn": "For Tier 2 (PKR 500k to 1.5M), submit an estimated 3-year cash flow projection, supplier quotations for proposed machinery/inventory, business premises tenancy agreement or ownership deed, and 6-month bank statement (if existing business).",
        "answerUr": "3 سالہ منافع کا تخمینہ، مشینری کی کوٹیشن، دکان کا کرایہ نامہ اور 6 ماہ کی بینک سٹیٹمنٹ جمع کروائیں۔"
      }
    ],
    "contentEn": "## Complete Guide to Kamyab Jawan (PM Youth Loans) 2026\nThe **Prime Minister's Youth Business & Agriculture Loan Scheme (PMYB&ALS)**, widely recognized as *Kamyab Jawan*, is Pakistan's largest youth entrepreneurship initiative. Designed to spur self-employment and micro-industrial growth, the program partners with 20+ commercial and Islamic microfinance banks.\n\n---\n\n## Detailed Loan Tier Structure & Comparisons\n\n| Parameter | Tier 1 (Micro-Business) | Tier 2 (Small Enterprise) | Tier 3 (Medium Enterprise) |\n| :--- | :--- | :--- | :--- |\n| **Loan Range** | PKR 10,000 to PKR 500,000 | PKR 500,001 to PKR 1,500,000 | PKR 1,500,001 to PKR 7,500,000 |\n| **Interest Rate** | **0% (100% Free Qarz-e-Hasna)** | **5% Fixed Annual Markup** | **7% Fixed Annual Markup** |\n| **Repayment Period** | Up to 3 Years (36 Months) | Up to 8 Years (96 Months) | Up to 8 Years (96 Months) |\n| **Grace Period** | Up to 6 Months | Up to 1 Year (12 Months) | Up to 1 Year (12 Months) |\n| **Security / Collateral** | Personal Guarantee of Borrower | Third-party guarantee or eCIB clean check | Mortgage of commercial/residential property |\n| **Executing Institutions** | Akhuwat & Microfinance Banks | NBP, BOP, Meezan, HBL, UBL, MCB | Top Tier Commercial Banks |\n\n---\n\n## Key Strategies to Avoid Application Rejection\n1. **Realistic Financial Feasibility**: Don't submit generic internet copy-paste business plans. Clearly show expected daily revenues, operating costs, and profit margins.\n2. **Clean Credit Bureau Record**: Ensure you have zero overdue balance on credit cards or previous personal loans in SBP's eCIB report.\n3. **Valid Mobile SIM Registration**: The phone number entered on the portal must be registered against your own CNIC in the PTA database.\n\n## Comprehensive Sectoral Guidelines for PM Youth Loans 2026\n\n### 1. High-Priority SME Sectors\n- **Food Processing & Cold Chain**: Solar milk chillers, wheat flour chakki automation, fruit drying and grading packaging units.\n- **Renewable Energy Contracting**: Solar panel installation firms, EV charging stations, battery refurbishment setups.\n- **Information Technology & Software**: Co-working hubs, software export houses, digital marketing agencies, mobile app development studios.\n\n### 2. Mandatory Bank Underwriting Metrics\nCommercial banks evaluate applications against the following benchmark criteria:\n- **Debt Service Coverage Ratio (DSCR)**: Minimum 1.25x projected net operating income over installment payments.\n- **Owner Equity Contribution**: Tier 1 (0% equity), Tier 2 (Minimum 10% borrower equity), Tier 3 (Minimum 20% borrower equity).\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n---\n\n## Strategic Financial Planning & Credit Score Management for Borrowers\nAcquiring government-subsidized credit or interest-free microfinance is a major financial milestone that requires disciplined cash-flow management to protect your long-term national credit standing.\n\n### 1. Understanding SBP's Electronic Credit Information Bureau (eCIB)\nEvery subsidized loan application is screened against the State Bank of Pakistan's central eCIB database. Maintaining a flawless credit rating is essential:\n- **Timely Installment Clearing**: Always deposit installments at least 48 hours prior to the monthly due date to prevent inter-bank settlement delays from triggering overdue flags.\n- **Credit Card & Overdraft Caution**: Never utilize more than 60% of your sanctioned credit card limit, and clear statement balances in full to maintain prime borrower tier categorization.\n- **Guarantor Responsibility**: Serving as a loan guarantor for a friend or relative makes you legally and financially liable. If the primary borrower defaults, your own eCIB record is flagged, blocking your future personal loan and mortgage applications.\n\n### 2. Business Cash Flow Allocation for Micro-Enterprises\n- **Separating Personal & Business Wallets**: Never mix household grocery expenses with daily shop sales revenue. Maintain a separate digital ledger book (Khata) to track inventory turnarounds.\n- **Emergency Reserve Fund**: Re-invest at least 20% of net monthly business profits into an emergency liquidity reserve to cushion against seasonal market slumps and inflation.\n\n---\n\n## Legal Rights & Consumer Protection for Subsidized Borrowers\nUnder State Bank of Pakistan Consumer Protection Regulations:\n- **Transparent Amortization Schedules**: Banks must provide a full printed repayment schedule displaying principal breakdown, payment dates, and zero hidden penalty clauses.\n- **No Early Repayment Penalties**: For subsidized youth and housing schemes, borrowers can make partial or full early lump-sum settlements with zero prepayment penalties.\n- **Harassment Prohibition**: Bank recovery officers are strictly barred by law from contacting borrowers before 9:00 AM or after 7:00 PM, or visiting family residences without prior written appointment notices.",
    "contentUr": "## کامیاب جوان پرائم منسٹر یوتھ لون گائیڈ\nنوجوانوں کو بااختیار بنانے اور نیا کاروبار شروع کرنے کے لیے وفاقی حکومت کا یہ سب سے بڑا قرضہ پروگرام ہے۔\n\nاس سکیم میں ٹائر 1 کا لون **مکمل طور پر بلا سود** ہے جبکہ ٹائر 2 اور 3 پر انتہائی کم رعایتی مارک اپ وصول کیا جاتا ہے۔",
    "relatedSlugs": [
      "/loans/pm-youth-loan-scheme",
      "/loans/asaan-karobar-scheme"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Access Official PM Youth Program Portal",
        "titleUr": "آفیشل پی ایم یوتھ پورٹل پر لاگ ان کریں",
        "detailEn": "Visit pmyp.gov.pk on your web browser and select 'Youth Business & Agriculture Loan Scheme' application form.",
        "detailUr": "ویب پورٹل pmyp.gov.pk پر جا کر یوتھ بزنس لون کے فارم کا انتخاب کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Enter CNIC & Date of Issuance",
        "titleUr": "شناختی کارڈ نمبر اور تاریخ اجراء درج کریں",
        "detailEn": "Enter your 13-digit CNIC number and exact CNIC issuance date for instant NADRA biometric authentication.",
        "detailUr": "اپنا درست شناختی کارڈ نمبر اور نادرا تاریخ اجراء درج کر کے تصدیق مکمل کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Select Desired Loan Tier & Executing Bank",
        "titleUr": "قرضہ ٹائر اور بینک کا انتخاب کریں",
        "detailEn": "Choose Tier 1 (Interest-Free up to 500k) or Tier 2/3 and pick your preferred bank (NBP, Bank of Punjab, Meezan Bank, Habib Bank).",
        "detailUr": "ٹائر 1، 2 یا 3 میں سے مطلوبہ قرضہ کیٹیگری اور قریبی بینک برانچ منتخب کریں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Upload Financial Feasibility & Documents",
        "titleUr": "کاروباری پلان (فزیبلٹی) اور دستاویزات اپلوڈ کریں",
        "detailEn": "Upload your business plan, educational diploma/degree, CNIC copy, passport size picture, and quotation for machinery/supplies.",
        "detailUr": "بزنس پلان، تعلیمی اسناد، مشینری کی کوٹیشن اور شناختی کارڈ کی کاپی پورٹل پر اپلوڈ کریں۔"
      },
      {
        "stepNumber": 5,
        "titleEn": "Bank Credit Evaluation & Interview",
        "titleUr": "بینک کریڈٹ آفیسر سے انٹرویو اور جانچ",
        "detailEn": "The assigned bank branch reviews creditworthiness via eCIB, conducts a brief entrepreneurship interview, and issues preliminary sanction.",
        "detailUr": "بینک برانچ کا کریڈٹ آفیسر آپ کے پروجیکٹ کی فزیبلٹی چیک کر کے انٹرویو کرے گا۔"
      },
      {
        "stepNumber": 6,
        "titleEn": "Disbursement & Milestone Monitoring",
        "titleUr": "بینک اکاؤنٹ میں فنڈز کی منتقلی",
        "detailEn": "Sign the loan agreement, provide required guarantees, and receive funds into your account with scheduled quarterly monitoring.",
        "detailUr": "معاہدے پر دستخط اور قانونی ضامن فراہم کرنے کے بعد فنڈز بینک اکاؤنٹ میں منتقل ہو جائیں گے۔"
      }
    ]
  },
  "mera-ghar-mera-ashiana": {
    "slug": "mera-ghar-mera-ashiana",
    "fullPath": "/loans/mera-ghar-mera-ashiana",
    "categoryId": "loans",
    "titleEn": "Mera Ghar Mera Ashiana Housing Scheme 2026: Subsidized Home Financing",
    "titleUr": "میرا گھر میرا آشیانہ سکیم 2026: سستے گھروں کے لیے بینک ہاؤسنگ فنانسنگ",
    "metaDescriptionEn": "Guide for Mera Ghar Mera Ashiana Low-Cost Housing Financing 2026. Subsidized mortgage rates, Naya Pakistan Housing registration, eligibility by CNIC.",
    "metaDescriptionUr": "میرا گھر میرا آشیانہ ہاؤسنگ فنانسنگ 2026۔ کم لاگت مکانات کے لیے بینکوں کا سبسڈائزڈ قرضہ، اہلیت اور درکار دستاویزات۔",
    "directAnswerEn": "The Mera Ghar Mera Ashiana (MGMAP) Housing Scheme 2026 offers subsidized low-cost apartment and residential plot allotments with subsidized housing loans up to PKR 3.5 Million. Repayments feature low fixed interest rates with priority quotas for widows, disabled citizens, and daily wage earners.",
    "directAnswerUr": "میرا گھر میرا آشیانہ ہاؤسنگ سکیم 2026 کے تحت کم آمدنی والے شہریوں، بیواؤں اور معذور افراد کو 35 لاکھ روپے تک کے رعایتی ہاؤسنگ فنڈز اور سستے اپارٹمنٹس فراہم کیے جاتے ہیں۔ اقساط طویل مدتی اور ماہانہ آمدن کے مطابق ہیں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "State Bank of Pakistan Housing Finance",
      "url": "https://www.sbp.org.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Mortgage Desk"
    },
    "faqs": [
      {
        "questionEn": "Who receives priority quota in Mera Ghar Mera Ashiana?",
        "questionUr": "آشیانہ سکیم میں کس کو ترجیح دی جاتی ہے؟",
        "answerEn": "Widows, families of martyred personnel (Shuhada), persons with special abilities (Khususi Afrad), and families living in rented slums receive priority quota allocations.",
        "answerUr": "بیواؤں، شہداء کے لواحقین، معذور افراد اور کرائے کے کچے مکانوں میں رہنے والے خاندانوں کو ترجیحی کوٹہ ملتا ہے۔"
      },
      {
        "questionEn": "Can an Ashiana unit be transferred or rented out immediately?",
        "questionUr": "کیا آشیانہ مکان کو فوری کرائے پر دیا یا بیچا جا سکتا ہے؟",
        "answerEn": "No. Beneficiaries must physically reside in the allotted unit for a mandatory 5-year lock-in period. Renting out or selling on power of attorney during this period leads to immediate cancellation and forfeiture.",
        "answerUr": "نہیں! الاٹمنٹ کے بعد پہلے 5 سال تک ذاتی رہائش لازمی ہے، بیچنے یا کرائے پر دینے کی اجازت نہیں ہے۔"
      },
      {
        "questionEn": "How can citizens verify the authenticity of official documents and avoid imposters?",
        "questionUr": "سرکاری دستاویزات کی تصدیق اور جعل سازی سے کیسے بچا جائے؟",
        "answerEn": "Always verify tracking numbers on the official government website ending in .gov.pk or .org.pk. Never share one-time password (OTP) codes or sensitive biometric details with unverified phone callers claiming to represent government helplines.",
        "answerUr": "ہمیشہ .gov.pk ویب سائٹ سے تصدیق کریں اور کسی بھی غیر متعلقہ فون کال پر اپنا او ٹی پی (OTP) یا بائیو میٹرک تفصیلات شیئر نہ کریں۔"
      }
    ],
    "contentEn": "## Mera Ghar Mera Ashiana Housing Scheme 2026\n**Mera Ghar Mera Ashiana** provides structured, planned suburban housing communities equipped with paved streets, water filtration plants, underground sewerage, and electricity grid connections for families living in informal settlements or rented shanties.\n\n## Project Features & Infrastructure Standards in Ashiana Housing Schemes\n- **Underground Utilities**: Complete pre-laid electrical distribution, fiber-optic telecom conduits, and dual sewerage pipes.\n- **Community Amenities**: Central community park, primary school, health dispensary, commercial shopping strip, and water filtration plant.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## Mera Ghar Mera Ashiana Low-Cost Housing Communities 2026\n**Mera Ghar Mera Ashiana** provides structured, planned suburban housing communities equipped with paved streets, water filtration plants, underground sewerage, and electricity grid connections for families living in informal settlements or rented shanties.\n\n### 1. Infrastructure Quality & Community Planning Standards\n- **Modern Town Planning**: 30-foot and 40-foot wide carpeted internal roads with dedicated pedestrian footpaths.\n- **Civic Amenities**: Central commercial shopping arcade, community mosque, primary school, playground, and 24/7 security boundary wall.\n\n---\n\n## Strategic Financial Planning & Credit Score Management for Borrowers\nAcquiring government-subsidized credit or interest-free microfinance is a major financial milestone that requires disciplined cash-flow management to protect your long-term national credit standing.\n\n### 1. Understanding SBP's Electronic Credit Information Bureau (eCIB)\nEvery subsidized loan application is screened against the State Bank of Pakistan's central eCIB database. Maintaining a flawless credit rating is essential:\n- **Timely Installment Clearing**: Always deposit installments at least 48 hours prior to the monthly due date to prevent inter-bank settlement delays from triggering overdue flags.\n- **Credit Card & Overdraft Caution**: Never utilize more than 60% of your sanctioned credit card limit, and clear statement balances in full to maintain prime borrower tier categorization.\n- **Guarantor Responsibility**: Serving as a loan guarantor for a friend or relative makes you legally and financially liable. If the primary borrower defaults, your own eCIB record is flagged, blocking your future personal loan and mortgage applications.\n\n### 2. Business Cash Flow Allocation for Micro-Enterprises\n- **Separating Personal & Business Wallets**: Never mix household grocery expenses with daily shop sales revenue. Maintain a separate digital ledger book (Khata) to track inventory turnarounds.\n- **Emergency Reserve Fund**: Re-invest at least 20% of net monthly business profits into an emergency liquidity reserve to cushion against seasonal market slumps and inflation.\n\n---\n\n## Legal Rights & Consumer Protection for Subsidized Borrowers\nUnder State Bank of Pakistan Consumer Protection Regulations:\n- **Transparent Amortization Schedules**: Banks must provide a full printed repayment schedule displaying principal breakdown, payment dates, and zero hidden penalty clauses.\n- **No Early Repayment Penalties**: For subsidized youth and housing schemes, borrowers can make partial or full early lump-sum settlements with zero prepayment penalties.\n- **Harassment Prohibition**: Bank recovery officers are strictly barred by law from contacting borrowers before 9:00 AM or after 7:00 PM, or visiting family residences without prior written appointment notices.\n\n---\n\n## Summary of Key Verification Protocols & Citizen Safeguards (2026 Checklist)\nBefore completing any official transaction or submitting financial documents, verify the following baseline procedural benchmarks:\n\n1. **Official Verification Stamps**: Ensure all computer-generated vouchers, receipts, and bank deposit challans bear the official branch cashier stamp and computer transaction sequence number.\n2. **Digital Copy Archival**: Maintain a scanned PDF or photograph of your submitted forms and payment receipts in cloud storage (Google Drive or Dropbox) for at least 5 years.\n3. **Tracking & Timeline Monitoring**: Utilize the official departmental SMS short-code or online portal tracking number to monitor progress weekly. If no update occurs within the stipulated charter timeframe, immediately escalate the case to the departmental grievance officer or relevant provincial ombudsman desk.",
    "contentUr": "## میرا گھر میرا آشیانہ ہاؤسنگ سکیم 2026\nکم آمدن والے خاندانوں کو اپنی ذاتی چھت فراہم کرنے کے لیے پنجاب حکومت کی ایک مستند سکیم جس میں تمام بنیادی سہولیات سے آراستہ سستے گھر فراہم کیے جاتے ہیں۔",
    "relatedSlugs": [
      "/loans/apni-chhat-apna-ghar",
      "/loans/pm-youth-loan-scheme"
    ],
    "feeStructure": [
      {
        "serviceEn": "Low-Cost 3-Marla House / Apartment",
        "serviceUr": "سستا 3 مرلہ مکان / فلیٹ",
        "normal": "PKR 2,500,000 - 3,500,000",
        "urgent": "Subsidized 3% - 5%",
        "executive": "Monthly: PKR 10k - 18k",
        "validity": "15 to 20 Years"
      },
      {
        "serviceEn": "Residential Plot Allotment (3 & 5 Marla)",
        "serviceUr": "رہائشی پلاٹ الاٹمنٹ (3 و 5 مرلہ)",
        "normal": "Govt Subsidized Rate",
        "urgent": "Balloting Quota",
        "executive": "Quarterly Installments",
        "validity": "PHATA / LDA Schemes"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Check Housing Scheme Availability in Your District",
        "titleUr": "اپنے ضلع میں ہاؤسنگ سکیم کی دستیابی چیک کریں",
        "detailEn": "Review ongoing Ashiana / PHATA housing project sites announced in Lahore, Faisalabad, Sialkot, and Rawalpindi.",
        "detailUr": "محکمہ ہاؤسنگ کے زیر انتظام جاری آشیانہ پروجیکٹس کی تفصیلات چیک کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Submit Application with Verified Family Income",
        "titleUr": "خاندانی آمدنی کے ثبوت کے ساتھ درخواست جمع کروائیں",
        "detailEn": "Apply through the Punjab Housing and Town Planning Agency (PHATA) portal with monthly household earnings proof below PKR 50,000.",
        "detailUr": "پورٹل پر ماہانہ آمدنی کا سرٹیفکیٹ اور شناختی کارڈ منسلک کر کے اپلائی کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Transparent Quota Balloting",
        "titleUr": "شفاف کوٹہ قرعہ اندازی میں شرکت",
        "detailEn": "Participate in computerized allotment draws with dedicated allocations for general public, government servants, and special persons.",
        "detailUr": "پی آئی ٹی بی کے زیر انتظام شفاف قرعہ اندازی کے ذریعے یونٹ حاصل کریں۔"
      }
    ]
  },
  "asaan-karobar-scheme": {
    "slug": "asaan-karobar-scheme",
    "fullPath": "/loans/asaan-karobar-scheme",
    "categoryId": "loans",
    "titleEn": "Asaan Karobar Scheme 2026: Small Business & Shopkeeper Loan Guide",
    "titleUr": "آسان کاروبار سکیم 2026: چھوٹے تاجروں اور دکانداروں کے لیے آسان قرضہ",
    "metaDescriptionEn": "Asaan Karobar Scheme 2026 rules, microfinance loans for shopkeepers, cottage industry, women entrepreneurs, fee structures, and application portals.",
    "metaDescriptionUr": "آسان کاروبار سکیم 2026۔ چھوٹے تاجروں، خواتین اور گھریلو صنعت کے لیے آسان اقساط پر قرضہ جات کی معلومات۔",
    "directAnswerEn": "The Asaan Karobar Scheme 2026 provides working capital loans and asset lease financing up to PKR 1,000,000 (10 Lakhs) for shopkeepers, street vendors, and micro-cottage entrepreneurs without demanding formal audited balance sheets or commercial property collaterals.",
    "directAnswerUr": "آسان کاروبار سکیم 2026 کے تحت چھوٹے دکانداروں، ریڑھی بانوں اور ہنرمندوں کو بغیر کسی بھاری ضمانت یا پیچیدہ دستاویزات کے 10 لاکھ روپے تک کا آسان کاروباری قرضہ فراہم کیا جاتا ہے۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "SMEDA Pakistan Official Portal",
      "url": "https://smeda.org/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Micro-Finance Desk"
    },
    "faqs": [
      {
        "questionEn": "Can unregistered street vendors or home-based workers apply?",
        "questionUr": "کیا بغیر این ٹی این کے چھوٹے دکاندار اپلائی کر سکتے ہیں؟",
        "answerEn": "Yes. The Asaan Karobar Scheme explicitly eliminates mandatory NTN or tax return requirements for Tier 1 micro-loans up to PKR 500,000.",
        "answerUr": "جی ہاں! 5 لاکھ روپے تک کے قرضے کے لیے ٹیکس ریٹرن یا این ٹی این کی کوئی شرط نہیں ہے۔"
      },
      {
        "questionEn": "How quickly are Asaan Karobar loan applications processed?",
        "questionUr": "آسان کاروبار لون کتنے دن میں منظور ہوتا ہے؟",
        "answerEn": "Because Tier 1 loans (up to PKR 500,000) rely on simplified scorecard assessment rather than audited accounts, partner microfinance banks process and disburse funds within 7 to 10 working days of physical verification.",
        "answerUr": "آسان دستاویزی عمل کی وجہ سے 7 سے 10 ورکنگ دنوں میں قرضہ بینک اکاؤنٹ میں منتقل ہو جاتا ہے۔"
      },
      {
        "questionEn": "How can citizens verify the authenticity of official documents and avoid imposters?",
        "questionUr": "سرکاری دستاویزات کی تصدیق اور جعل سازی سے کیسے بچا جائے؟",
        "answerEn": "Always verify tracking numbers on the official government website ending in .gov.pk or .org.pk. Never share one-time password (OTP) codes or sensitive biometric details with unverified phone callers claiming to represent government helplines.",
        "answerUr": "ہمیشہ .gov.pk ویب سائٹ سے تصدیق کریں اور کسی بھی غیر متعلقہ فون کال پر اپنا او ٹی پی (OTP) یا بائیو میٹرک تفصیلات شیئر نہ کریں۔"
      }
    ],
    "contentEn": "## Asaan Karobar Scheme 2026: Micro-Enterprise Credit\nSmall neighborhood businesses form the lifeblood of Pakistan's retail economy. The **Asaan Karobar Scheme** simplifies credit approvals for tire puncture shops, tailoring centers, milk shops, grocery stores, and electrical repair stalls.\n\n## Practical Equipment & Inventory Financing Models\n- **Retail Kiryana & General Stores**: Bulk wholesale inventory purchase with direct vendor pay-orders.\n- **Light Engineering & Fabrication**: Welding machines, lathe tooling, metal cutters, and industrial sewing machines.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## Asaan Karobar Micro-Enterprise & Street Vendor Credit Guide 2026\nSmall neighborhood businesses form the lifeblood of Pakistan's retail economy. The **Asaan Karobar Scheme** simplifies credit approvals for tire puncture shops, tailoring centers, milk shops, grocery stores, and electrical repair stalls.\n\n### 1. Practical Equipment & Inventory Financing Models\n- **Retail Kiryana & General Stores**: Bulk wholesale inventory purchase with direct vendor pay-orders.\n- **Light Engineering & Fabrication**: Welding machines, lathe tooling, metal cutters, and industrial sewing machines.\n\n---\n\n## Strategic Financial Planning & Credit Score Management for Borrowers\nAcquiring government-subsidized credit or interest-free microfinance is a major financial milestone that requires disciplined cash-flow management to protect your long-term national credit standing.\n\n### 1. Understanding SBP's Electronic Credit Information Bureau (eCIB)\nEvery subsidized loan application is screened against the State Bank of Pakistan's central eCIB database. Maintaining a flawless credit rating is essential:\n- **Timely Installment Clearing**: Always deposit installments at least 48 hours prior to the monthly due date to prevent inter-bank settlement delays from triggering overdue flags.\n- **Credit Card & Overdraft Caution**: Never utilize more than 60% of your sanctioned credit card limit, and clear statement balances in full to maintain prime borrower tier categorization.\n- **Guarantor Responsibility**: Serving as a loan guarantor for a friend or relative makes you legally and financially liable. If the primary borrower defaults, your own eCIB record is flagged, blocking your future personal loan and mortgage applications.\n\n### 2. Business Cash Flow Allocation for Micro-Enterprises\n- **Separating Personal & Business Wallets**: Never mix household grocery expenses with daily shop sales revenue. Maintain a separate digital ledger book (Khata) to track inventory turnarounds.\n- **Emergency Reserve Fund**: Re-invest at least 20% of net monthly business profits into an emergency liquidity reserve to cushion against seasonal market slumps and inflation.\n\n---\n\n## Legal Rights & Consumer Protection for Subsidized Borrowers\nUnder State Bank of Pakistan Consumer Protection Regulations:\n- **Transparent Amortization Schedules**: Banks must provide a full printed repayment schedule displaying principal breakdown, payment dates, and zero hidden penalty clauses.\n- **No Early Repayment Penalties**: For subsidized youth and housing schemes, borrowers can make partial or full early lump-sum settlements with zero prepayment penalties.\n- **Harassment Prohibition**: Bank recovery officers are strictly barred by law from contacting borrowers before 9:00 AM or after 7:00 PM, or visiting family residences without prior written appointment notices.\n\n---\n\n## Summary of Key Verification Protocols & Citizen Safeguards (2026 Checklist)\nBefore completing any official transaction or submitting financial documents, verify the following baseline procedural benchmarks:\n\n1. **Official Verification Stamps**: Ensure all computer-generated vouchers, receipts, and bank deposit challans bear the official branch cashier stamp and computer transaction sequence number.\n2. **Digital Copy Archival**: Maintain a scanned PDF or photograph of your submitted forms and payment receipts in cloud storage (Google Drive or Dropbox) for at least 5 years.\n3. **Tracking & Timeline Monitoring**: Utilize the official departmental SMS short-code or online portal tracking number to monitor progress weekly. If no update occurs within the stipulated charter timeframe, immediately escalate the case to the departmental grievance officer or relevant provincial ombudsman desk.",
    "contentUr": "## آسان کاروبار سکیم 2026\nچھوٹے تاجروں اور دکانداروں کے لیے حکومت کا آسان ترین قرضہ پروگرام جس میں کاغذی کارروائی کو کم ترین سطح پر رکھا گیا ہے۔",
    "relatedSlugs": [
      "/loans/kamyab-jawan-program",
      "/loans/pm-youth-loan-scheme"
    ],
    "feeStructure": [
      {
        "serviceEn": "Micro-Retailer Working Capital",
        "serviceUr": "چھوٹے دکانداروں کے لیے ورکنگ کیپیٹل",
        "normal": "PKR 100,000 - 500,000",
        "urgent": "Minimal Markup",
        "executive": "Fast 7-Day Processing",
        "validity": "1 to 3 Years"
      },
      {
        "serviceEn": "Machinery & Equipment Financing",
        "serviceUr": "مشینری و آلات کی خریداری فنانسنگ",
        "normal": "PKR 500,000 - 1,000,000",
        "urgent": "Equipment Hypothecation",
        "executive": "Vendor Direct Payment",
        "validity": "Up to 5 Years"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Visit Partner Microfinance Bank Branch",
        "titleUr": "قریبی مائیکرو فنانس بینک برانچ وزٹ کریں",
        "detailEn": "Approach partner institutions (First Microfinance Bank, Khushhali Bank, NRSP Bank, BOP) with your CNIC and utility bill.",
        "detailUr": "شناختی کارڈ اور دکان یا گھر کے بل کے ساتھ قریبی مائیکرو فنانس بینک جائیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Fill Simple Single-Page Business Profile",
        "titleUr": "ایک صفحے کا آسان بزنس پروفائل فارم پر کریں",
        "detailEn": "Document your daily sales ledger, inventory requirements, and estimated monthly profit margins.",
        "detailUr": "اپنی روزانہ کی فروخت، منافع اور درکار سامان کی فہرست درج کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Verifiable Shop Site Inspection",
        "titleUr": "دکان یا ورکشاپ کا فیلڈ معائنہ",
        "detailEn": "Credit officer verifies physical presence of your retail shop, stall, or workshop before approving disbursement.",
        "detailUr": "بینک کا نمائندہ آپ کی دکان یا کام کی جگہ کا دورہ کر کے فنڈز منظور کرے گا۔"
      }
    ]
  },
  "pm-youth-loan-scheme": {
    "slug": "pm-youth-loan-scheme",
    "fullPath": "/loans/pm-youth-loan-scheme",
    "categoryId": "loans",
    "titleEn": "Prime Minister Youth Business & Agriculture Loan Scheme 2026 (PMYB&ALS)",
    "titleUr": "پرائم منسٹر یوتھ بزنس اینڈ ایگری کلچر لون سکیم 2026 (آن لائن فارم)",
    "metaDescriptionEn": "PM Youth Business Loan 2026 application guide (pmyp.gov.pk). Tier 1 (PKR 0.5M @ 0%), Tier 2 (PKR 1.5M @ 5%), Tier 3 (PKR 7.5M @ 7%), eligibility & forms.",
    "metaDescriptionUr": "وزیراعظم یوتھ بزنس و زراعت قرضہ سکیم 2026۔ آن لائن فارم pmyp.gov.pk، تمام ٹائرز کی فیس اور اہلیت کے قواعد۔",
    "directAnswerEn": "The Prime Minister Youth Business & Agriculture Loan Scheme 2026 offers financing up to PKR 7.5 Million for young entrepreneurs and farmers aged 21-45. Tier 1 provides collateral-free interest-free loans up to PKR 500,000, while Tier 2 and Tier 3 offer long-term financing at 5% and 7% fixed markup.",
    "directAnswerUr": "پرائم منسٹر یوتھ بزنس اینڈ ایگریکلچر لون سکیم 2026 کے تحت 21 سے 45 سال کے نوجوانوں کو 75 لاکھ روپے تک قرضہ دیا جاتا ہے۔ ٹائر 1 میں 5 لاکھ تک کا قرضہ بغیر کسی ضمانت کے مکمل بلا سود ہے، جبکہ ٹائر 2 اور 3 میں 5 فیصد اور 7 فیصد پر 8 سالہ فنڈز ملتے ہیں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "Prime Minister Youth Program Portal",
      "url": "https://pmyp.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Youth Development Desk"
    },
    "faqs": [
      {
        "questionEn": "Can government employees apply for PM Youth Loans?",
        "questionUr": "کیا سرکاری ملازمین پی ایم یوتھ لون لے سکتے ہیں؟",
        "answerEn": "No. Regular government employees are not eligible. The scheme is strictly intended for private citizens, self-employed professionals, and unemployed youth seeking entrepreneurial capital.",
        "answerUr": "نہیں! سرکاری ملازمین اس سکیم کے لیے اہل نہیں ہیں، یہ صرف بیروزگار اور پرائیویٹ نوجوانوں کے لیے ہے۔"
      },
      {
        "questionEn": "What is the quota allocated for female entrepreneurs?",
        "questionUr": "خواتین کے لیے کتنا کوٹہ مخصوص ہے؟",
        "answerEn": "A mandatory 25% minimum quota across all three tiers is legally reserved for female entrepreneurs to promote women-led enterprises.",
        "answerUr": "تمام ٹائرز میں کم از کم 25 فیصد کوٹہ خواتین کاروباری افراد کے لیے قانونی طور پر مخصوص کیا گیا ہے۔"
      },
      {
        "questionEn": "Can existing startups that started last year apply for expansion funds?",
        "questionUr": "کیا گزشتہ سال شروع ہونے والے کاروبار کی توسیع کے لیے فنڈز مل سکتے ہیں؟",
        "answerEn": "Yes. The scheme explicitly supports both greenfield startups (brand-new businesses) and brownfield expansions (existing businesses running for less than 3 years seeking machinery or working capital).",
        "answerUr": "جی ہاں! نئے کاروبار اور پہلے سے موجود چھوٹے کاروبار کی وسعت دونوں کے لیے قرضہ فراہم کیا جاتا ہے۔"
      }
    ],
    "contentEn": "## The Prime Minister Youth Business & Agriculture Loan Scheme 2026\nIn 2026, the **Prime Minister's Youth Business & Agriculture Loan Scheme (PMYB&ALS)** continues to serve as Pakistan's primary engine for grassroots economic growth. The program bridges the credit gap for ambitious young minds who lack the heavy financial collateral demanded by conventional commercial banks.\n\n---\n\n## Detailed Breakdown by Sector\n\n### 1. Agriculture & Livestock Financing\n- **Working Capital Loans**: Purchase of certified seeds, pesticide sprays, urea, DAP fertilizers, and diesel.\n- **Farm Mechanization**: Purchase of laser land levelers, drip irrigation machinery, tube-well solarization kits, and combine harvesters.\n- **Dairy & Livestock Breeding**: Cattle farming, milk chilling units, feed mills, and commercial poultry sheds.\n\n### 2. Commercial & IT Entrepreneurship\n- **E-Commerce & Digital Agencies**: High-end computing hardware, software licensing, studio recording equipment, and cloud hosting infrastructure.\n- **Retail & Manufacturing**: Textile boutiques, pharmacy franchises, food trucks, and light engineering fabrication workshops.\n\n## Sector-Wise Allocation Quotas & Special Focus Groups\n- **Women Entrepreneurship Quota (25%)**: Dedicated credit desks in NBP, BOP, and First Women Bank with streamlined documentation.\n- **Agriculture Mechanization & Solarization**: Direct tie-ups with certified solar tube-well and drip irrigation vendors.\n- **Disabled Persons & Transgender Quotas (5%)**: Concessionary underwriting criteria and priority processing.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n---\n\n## Strategic Financial Planning & Credit Score Management for Borrowers\nAcquiring government-subsidized credit or interest-free microfinance is a major financial milestone that requires disciplined cash-flow management to protect your long-term national credit standing.\n\n### 1. Understanding SBP's Electronic Credit Information Bureau (eCIB)\nEvery subsidized loan application is screened against the State Bank of Pakistan's central eCIB database. Maintaining a flawless credit rating is essential:\n- **Timely Installment Clearing**: Always deposit installments at least 48 hours prior to the monthly due date to prevent inter-bank settlement delays from triggering overdue flags.\n- **Credit Card & Overdraft Caution**: Never utilize more than 60% of your sanctioned credit card limit, and clear statement balances in full to maintain prime borrower tier categorization.\n- **Guarantor Responsibility**: Serving as a loan guarantor for a friend or relative makes you legally and financially liable. If the primary borrower defaults, your own eCIB record is flagged, blocking your future personal loan and mortgage applications.\n\n### 2. Business Cash Flow Allocation for Micro-Enterprises\n- **Separating Personal & Business Wallets**: Never mix household grocery expenses with daily shop sales revenue. Maintain a separate digital ledger book (Khata) to track inventory turnarounds.\n- **Emergency Reserve Fund**: Re-invest at least 20% of net monthly business profits into an emergency liquidity reserve to cushion against seasonal market slumps and inflation.\n\n---\n\n## Legal Rights & Consumer Protection for Subsidized Borrowers\nUnder State Bank of Pakistan Consumer Protection Regulations:\n- **Transparent Amortization Schedules**: Banks must provide a full printed repayment schedule displaying principal breakdown, payment dates, and zero hidden penalty clauses.\n- **No Early Repayment Penalties**: For subsidized youth and housing schemes, borrowers can make partial or full early lump-sum settlements with zero prepayment penalties.\n- **Harassment Prohibition**: Bank recovery officers are strictly barred by law from contacting borrowers before 9:00 AM or after 7:00 PM, or visiting family residences without prior written appointment notices.",
    "contentUr": "## وزیراعظم یوتھ بزنس اینڈ ایگریکلچر لون سکیم 2026\nیہ سکیم ملک بھر کے نوجوانوں کو باعزت روزگار اور کاروبار کے مواقع فراہم کرنے کے لیے جاری کی گئی ہے۔\n\nزراعت، لائیو سٹاک، ڈیری فارمنگ، آئی ٹی اور سمال انڈسٹری کے لیے 50 ہزار سے 75 لاکھ روپے تک کے فنڈز فراہم کیے جاتے ہیں۔",
    "relatedSlugs": [
      "/loans/apni-chhat-apna-ghar",
      "/loans/kamyab-jawan-program"
    ],
    "feeStructure": [
      {
        "serviceEn": "Tier 1: Micro Youth Loan (Collateral Free)",
        "serviceUr": "ٹائر 1: مائیکرو لون (بغیر ضمانت)",
        "normal": "PKR 50,000 - 500,000",
        "urgent": "0% Markup",
        "executive": "Single Page Online Form",
        "validity": "3 Years"
      },
      {
        "serviceEn": "Tier 2: Agri & Business Growth",
        "serviceUr": "ٹائر 2: زراعت و بزنس ترقی",
        "normal": "PKR 500k - 1,500,000",
        "urgent": "5% Fixed Markup",
        "executive": "Clean Credit Score",
        "validity": "8 Years"
      },
      {
        "serviceEn": "Tier 3: Industrial & Corporate Agri",
        "serviceUr": "ٹائر 3: انڈسٹریل و کارپوریٹ فارمنگ",
        "normal": "PKR 1.5M - 7,500,000",
        "urgent": "7% Fixed Markup",
        "executive": "Property Lien Required",
        "validity": "8 Years"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Open PMYP Official Application Portal",
        "titleUr": "پی ایم یوتھ پورٹل آن لائن فارم کھولیں",
        "detailEn": "Navigate to pmyp.gov.pk and choose 'Apply for Loan'. Complete the NADRA biometric validation check.",
        "detailUr": "ویب سائٹ pmyp.gov.pk پر جا کر فارم کھولیں اور نادرا تصدیق مکمل کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Fill Business Venture Specifications",
        "titleUr": "کاروباری منصوبے اور فنڈز کی تفصیل",
        "detailEn": "State whether this is a new startup or expansion of an existing setup with estimated setup costs and operational overheads.",
        "detailUr": "درج کریں کہ آیا نیا کاروبار شروع کر رہے ہیں یا پرانے کام میں وسعت لانا چاہتے ہیں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Attach Technical Certificates & Quotas",
        "titleUr": "تکنیکی اسناد اور ایگریکلچر دستاویزات",
        "detailEn": "Upload NAVTTC / TEVTA diplomas if applicable, tractor/machinery quotations, and Kisan Card credentials for agri schemes.",
        "detailUr": "تکنیکی مہارت کا سرٹیفکیٹ یا زرعی مشینری کی کوٹیشن اپلوڈ کریں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Select Partner Commercial Bank",
        "titleUr": "متعلقہ بینک اور برانچ کا انتخاب",
        "detailEn": "Pick your preferred bank branch (National Bank of Pakistan, Bank of Punjab, Askari, Meezan) located nearest to your business site.",
        "detailUr": "اپنے کاروبار یا رہائش کے قریب ترین قومی بینک برانچ کا انتخاب کریں۔"
      },
      {
        "stepNumber": 5,
        "titleEn": "Bank Inspection & Sanction Letter",
        "titleUr": "بینک معائنہ اور لون منظوری لیٹر",
        "detailEn": "The bank processes your eCIB clearance and issues an official formal sanction letter specifying installment schedules.",
        "detailUr": "بینک فزیبلٹی جانچ کے بعد باقاعدہ منظوری کا لیٹر جاری کرے گا۔"
      }
    ]
  },
  "bisp-eligibility-check-by-cnic": {
    "slug": "bisp-eligibility-check-by-cnic",
    "fullPath": "/welfare/bisp-eligibility-check-by-cnic",
    "categoryId": "welfare",
    "titleEn": "BISP 8171 Eligibility Check by CNIC 2026: Online Web Portal & SMS Guide",
    "titleUr": "8171 بی این ایس پی اہلیت آن لائن چیک بذریعہ شناختی کارڈ 2026",
    "metaDescriptionEn": "Check your Benazir Income Support Programme (BISP) 8171 eligibility status online by CNIC. Step-by-step 8171 web portal walkthrough, PMT score guidelines, SMS 8171, and scam protection.",
    "metaDescriptionUr": "بی این ایس پی 8171 پورٹل پر شناختی کارڈ نمبر درج کر کے اہلیت کا آن لائن سٹیٹس چیک کریں۔ پی ایم ٹی سکور، نادرا سروے، فیس فنڈ اور 8171 ایس ایم ایس کا مکمل طریقہ۔",
    "directAnswerEn": "To check your BISP 8171 eligibility by CNIC, visit the official 8171 web portal at 8171.bisp.gov.pk. Enter your 13-digit CNIC number without dashes, input the 4-digit security captcha code displayed on screen, and click \"Check Eligibility\". Alternatively, send your 13-digit CNIC number via SMS to 8400 / 8171 from any registered mobile network in Pakistan.",
    "directAnswerUr": "بی این ایس پی اہلیت چیک کرنے کے لیے آفیشل پورٹل 8171.bisp.gov.pk کھولیں۔ اپنا 13 ہندسوں کا شناختی کارڈ نمبر بغیر ڈیش کے درج کریں، سکرین پر موجود 4 ہندسوں کا کوڈ درج کریں اور بٹن دبائیں۔ یا اپنے موبائل سے 13 ہندسوں کا شناختی کارڈ نمبر 8171 پر ایس ایم ایس کریں۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "BISP 8171 Official Portal",
      "url": "https://8171.bisp.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Social Welfare & BISP Specialist"
    },
    "feeStructure": [
      {
        "serviceEn": "8171 Online Web Portal Query",
        "serviceUr": "8171 آن لائن ویب پورٹل",
        "normal": "PKR 0 (100% FREE)",
        "urgent": "Instant Web Status",
        "executive": "24/7 Available"
      },
      {
        "serviceEn": "8171 SMS Inquiry",
        "serviceUr": "8171 ایس ایم ایس انکوائری",
        "normal": "Standard SMS rate (~PKR 2)",
        "urgent": "Instant Reply",
        "executive": "All Mobile Networks"
      },
      {
        "serviceEn": "Dynamic NSER Survey Registration",
        "serviceUr": "ڈائنامک این ایس ای آر سروے رجسٹریشن",
        "normal": "PKR 0 (100% FREE)",
        "urgent": "Tehsil Office Visit",
        "executive": "No Fee Ever"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Open Official BISP 8171 Portal",
        "titleUr": "آفیشل 8171 پورٹل کھولیں",
        "detailEn": "Open your web browser on mobile or PC and go strictly to 8171.bisp.gov.pk. Beware of fake third-party websites ending in .com or .blogspot.",
        "detailUr": "موبائل یا کمپیوٹر پر صرف 8171.bisp.gov.pk ویب سائٹ کھولیں۔ جعلی سائٹس سے ہوشیار رہیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Enter 13-Digit CNIC Number",
        "titleUr": "13 ہندسوں کا شناختی کارڈ نمبر درج کریں",
        "detailEn": "Type the head of family (usually the female applicant) 13-digit Computerized National Identity Card number accurately without dashes or spaces.",
        "detailUr": "خاندان کی سربراہ خاتون کا 13 ہندسوں کا شناختی کارڈ نمبر بغیر ڈیش کے درج کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Input Captcha Verification Code",
        "titleUr": "سکرین پر دکھایا گیا کوڈ درج کریں",
        "detailEn": "Look at the 4-digit numerical security code shown in the image box and type it into the security verification box.",
        "detailUr": "تصویر میں دکھائے گئے 4 ہندسوں والے سیکیورٹی کوڈ کو خانوں میں لکھیں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Click Search / Check Eligibility",
        "titleUr": "معلوم کریں کے بٹن پر کلک کریں",
        "detailEn": "Press the green \"Find Out / Check\" button. The portal will cross-check your record against the NSER central database.",
        "detailUr": "سبز رنگ کے بٹن پر کلک کر کے نادرا اور بی آئی ایس پی کا آن لائن سٹیٹس دیکھیں۔"
      },
      {
        "stepNumber": 5,
        "titleEn": "Review Status & Follow Guidance",
        "titleUr": "سٹیٹس دیکھیں اور آگے کا طریقہ اپنائیں",
        "detailEn": "The screen will display whether you are Eligible (Qabil-e-Ahliat), Ineligible due to PMT score, or required to visit the Tehsil BISP office for dynamic survey update.",
        "detailUr": "سکرین پر آپ کی اہلیت، فنڈ رقم یا این ایس ای آر سروے اپڈیٹ کی ہدایت ظاہر ہوگی۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "How much is the BISP registration fee?",
        "questionUr": "بی آئی ایس پی رجسٹریشن کی فیس کتنی ہے؟",
        "answerEn": "BISP registration, NSER dynamic survey, and 8171 eligibility checking are 100% FREE. The Government of Pakistan charges ZERO rupees. Never pay any fee or commission to agents, shopkeepers, or unauthorized callers.",
        "answerUr": "بی آئی ایس پی رجسٹریشن اور سروے 100 فیصد مفت ہے۔ حکومت پاکستان کوئی فیس وصول نہیں کرتی۔ کسی ایجنٹ یا شخص کو رقم نہ دیں۔"
      },
      {
        "questionEn": "What does a PMT Score mean for BISP eligibility?",
        "questionUr": "پی ایم ٹی سکور (PMT Score) کا کیا مطلب ہے؟",
        "answerEn": "PMT stands for Proxy Means Test score. It is a socio-economic poverty index calculated during the NSER survey based on family household assets, income, and utility bills. For Benazir Kafaalat, households with a PMT score of 32 or below qualify for quarterly cash stipends.",
        "answerUr": "پی ایم ٹی سکور گھریلو مالی حالت اور اثاثوں کا اشاریہ ہے۔ 32 یا اس سے کم پی ایم ٹی سکور والے خاندان کفالت وظائف کے اہل ہوتے ہیں۔"
      },
      {
        "questionEn": "Why does 8171 show \"Record Not Found\" or \"Aap Benazir Program ke ahl nahi hain\"?",
        "questionUr": "8171 پر \"ریکارڈ نہیں ملا\" یا \"اہل نہیں ہیں\" کیوں آتا ہے؟",
        "answerEn": "This means either: 1) You have not yet participated in the dynamic NSER survey at a BISP Tehsil Center; 2) Your survey was completed over 3 years ago and needs dynamic re-survey; or 3) Your family's PMT score exceeded the benchmark cutoff limit of 32.",
        "answerUr": "اس کی وجہ یہ ہے کہ آپ کا این ایس ای آر سروے نادرا میں نہیں ہوا، یا سروے پرانا ہو چکا ہے، یا پی ایم ٹی سکور حد سے زیادہ ہے۔"
      },
      {
        "questionEn": "Can male family members apply for Benazir Kafaalat?",
        "questionUr": "کیا مرد بھی بے نظیر کفالت پروگرام کا وظیفہ حاصل کر سکتے ہیں؟",
        "answerEn": "Under government policy, the primary financial beneficiary of Benazir Kafaalat must be a married female (mother/wife) holding a valid CNIC. Male family members benefit through targeted schemes like Benazir Taleemi Wazaif for their enrolled children or specific disability/senior citizens programs.",
        "answerUr": "بے نظیر کفالت کا بنیادی وظیفہ خاندان کی شادی شدہ خاتون (والدہ/اہلیہ) کے نام جاری ہوتا ہے۔"
      },
      {
        "questionEn": "What should I do if a fake SMS claiming money transfer arrives from an 11-digit mobile number?",
        "questionUr": "اگر کسی 11 ہندسوں والے موبائل نمبر سے رقم کا فرضی ایس ایم ایس آئے تو کیا کریں؟",
        "answerEn": "Do NOT reply or call the sender! Official BISP communications strictly arrive from \"8171\". Any SMS from private mobile numbers (e.g. 0300-xxxxxxx, 0345-xxxxxxx) claiming lottery wins, Easypaisa transfer, or BISP cash is a criminal SCAM. Block the sender and report to FIA Cybercrime at 1991.",
        "answerUr": "کسی پرائیویٹ نمبر سے رقم کا میسج آئے تو دھوکہ دہی ہے! بی آئی ایس پی کا آفیشل میسج صرف 8171 سے آتا ہے۔"
      }
    ],
    "contentEn": "The Benazir Income Support Programme (BISP) is Pakistan's largest social safety net initiative, providing direct unconditional and conditional financial assistance to millions of low-income families nationwide. \n\nIf you are wondering whether your family qualifies for the quarterly cash grant (Benazir Kafaalat) or education stipends for your children (Benazir Taleemi Wazaif), checking your status online using your 13-digit Computerized National Identity Card (CNIC) number takes less than two minutes.\n\n> 🚨 **CRITICAL SCAM WARNING FOR ALL BENEFICIARIES**: \n> **BISP registration, NSER survey, and 8171 eligibility checking are 100% FREE.** \n> The Government of Pakistan charges **ZERO rupees** for survey registration or payment processing. \n> - **Official Sender**: All official SMS notifications arrive strictly from sender **8171**.\n> - **Fake Calls & WhatsApp Fraud**: Never trust SMS or WhatsApp messages coming from private 11-digit mobile numbers (e.g. 03xx-xxxxxxx) claiming you won cash or requesting money transfers via Easypaisa/JazzCash.\n> - **Agent Protection**: Never pay any fee, cut, or commission to unauthorized bank agents or private shopkeepers at payment campsites. Report fraud immediately to the BISP toll-free helpline: **0800-26477**.\n\n## Official Methods to Check BISP 8171 Status by CNIC\n\nThe Government of Pakistan provides two official, transparent channels to check eligibility status:\n\n### Method 1: BISP 8171 Web Portal (Recommended — Free & Detailed)\n1. Open your internet browser and visit the official web portal: **[8171.bisp.gov.pk](https://8171.bisp.gov.pk/)**.\n2. Locate the search box titled **\"اپنی اہلیت کے بارے میں جانیئے\"** (Know About Your Eligibility).\n3. Type the female applicant's **13-digit CNIC number** without hyphens or spaces.\n4. Input the **4-digit security code** displayed inside the captcha box.\n5. Click **\"تلاش کریں\" (Search)** to view your instant household status.\n\n### Method 2: SMS 8171 Check (From Mobile Phone)\nIf you do not have internet access or a smartphone:\n1. Open the Text Messaging (SMS) app on your mobile phone.\n2. Type your **13-digit CNIC number** (e.g. `3520112345671`).\n3. Send the SMS to **8171**.\n4. Within a few seconds, you will receive an official response indicating your eligibility status and recent payment release.\n\n## Understanding BISP Portal Status Results\n\nWhen you check your CNIC on the 8171 portal, the system returns one of four official status messages:\n\n| Status Displayed | What It Means | Recommended Action |\n| :--- | :--- | :--- |\n| **آپ بے نظیر کفالت پروگرام کے لیے اہل ہیں** | Your household PMT score is 32 or below. You are eligible for cash stipends. | Visit your designated Bank Alfalah / HBL campsite to collect your cash payment. |\n| **آپ کا شناختی کارڈ این ایس ای آر سروے میں رجسٹرڈ نہیں ہے** | Your household has not completed the dynamic NSER survey at BISP Tehsil office. | Visit your nearest BISP Tehsil office with original CNIC and children's B-Forms for a free survey. |\n| **آپ کا سروے جا نچ پڑ تال کے مرحلے میں ہے** | Your dynamic survey data is currently under verification by NADRA and BISP. | Re-check the 8171 portal after 3 to 4 weeks. |\n| **آپ کا پی ایم ٹی سکور اہلیت کی حد سے زیادہ ہے** | Your household PMT poverty index score exceeds the maximum benchmark cutoff limit (32). | If your financial situation has changed, request a survey update at the BISP Tehsil office. |\n\n*Official data verified via [BISP Official Department](https://bisp.gov.pk/).*\n\n## What is the PMT Poverty Cutoff Score?\n\nBISP calculates family eligibility using a scientific socio-economic indicator known as the **Proxy Means Test (PMT) Score**. During the NSER (National Socio-Economic Registry) survey, data regarding family members, housing structure, livestock, agricultural land, monthly utility bills, and vehicular ownership is collected.\n\n- **Kafaalat Cash Stipend Cutoff**: PMT Score **<= 32**.\n- **Taleemi Wazaif School Stipend Cutoff**: PMT Score **<= 32**.\n- **Nashonuma Health Stipend Cutoff**: PMT Score **<= 35**.\n\nIf your family financial condition deteriorates (due to job loss, illness, or inflation), you have the legal right to request a **Dynamic Re-Survey** at any official BISP Tehsil office after 2 years from your last survey date.",
    "contentUr": "بے نظیر انکم سپورٹ پروگرام (BISP) پاکستان کا سب سے بڑا سماجی و مالیاتی امدادی پروگرام ہے جس کے تحت کروڑوں مستحق خاندانوں کو مالی امداد فراہم کی جاتی ہے۔\n\nاگر آپ جاننا چاہتے ہیں کہ آپ کا خاندان بے نظیر کفالت یا بچوں کے تعلیمی وظائف کے لیے اہل ہے یا نہیں، تو صرف دو منٹ میں اپنا 13 ہندسوں کا شناختی کارڈ نمبر درج کر کے آن لائن سٹیٹس معلوم کر سکتے ہیں۔\n\n> 🚨 **تمام مستحقین کے لیے اہم ترین انتباہ (سکیم الرٹ)**: \n> **بی آئی ایس پی رجسٹریشن، سروے اور 8171 پر اہلیت چیک کرنا 100 فیصد مفت ہے۔**\n> حکومت پاکستان کسی قسم کی فیس وصول نہیں کرتی۔\n> - **آفیشل نمبر**: تمام سرکاری پیغامات صرف اور صرف **8171** سے آتے ہیں۔\n> - **جعلی کالز اور واٹس ایپ پے میسج**: کسی 11 ہندسوں والے پرائیویٹ موبائل نمبر (مثلاً 03xx-xxxxxxx) سے رقم کی پیشکش یا انعام کا میسج آئے تو وہ دھوکہ دہی ہے۔ جاز کیش یا ایزی پیسہ پر رقم کبھی نہ بھیجیں۔\n> - **کٹوتی کی شکایت**: فنڈز وصولی کے وقت کسی ایجنٹ کو کٹوتی نہ دیں۔ شکایت کے لیے مفت ہیلپ لائن **0800-26477** پر کال کریں۔\n\n## 8171 آن لائن اہلیت چیک کرنے کا طریقہ\n\n1. اپنے موبائل پر ویب سائٹ **[8171.bisp.gov.pk](https://8171.bisp.gov.pk/)** کھولیں۔\n2. خانے میں خاتون کا **13 ہندسوں کا شناختی کارڈ نمبر** بغیر ڈیش کے لکھیں۔\n3. سکرین پر موجود **4 ہندسوں کا سیکیورٹی کوڈ** درج کریں۔\n4. **\"تلاش کریں\"** کا بٹن دبائیں۔\n\n## ایس ایم ایس 8171 کا طریقہ\nاپنا 13 ہندسوں کا شناختی کارڈ نمبر لکھ کر **8171** پر بھیجیں، نادرا اور بی آئی ایس پی سے تصدیقی میسج موصول ہو جائے گا۔",
    "relatedSlugs": [
      "/welfare/8171-portal-guide",
      "/welfare/bisp-how-to-register",
      "/welfare/bisp-payment-check",
      "/welfare/kafaalat-amount-schedule"
    ]
  },
  "8171-portal-guide": {
    "slug": "8171-portal-guide",
    "fullPath": "/welfare/8171-portal-guide",
    "categoryId": "welfare",
    "titleEn": "8171 Web Portal Guide 2026: Registration, Login & Status Check",
    "titleUr": "8171 ویب پورٹل گائیڈ 2026: آن لائن رجسٹریشن اور سٹیٹس چیک",
    "metaDescriptionEn": "Comprehensive guide to using the official BISP 8171 web portal. Learn how to check payments, resolve portal loading errors, captcha issues, and NSER status online.",
    "metaDescriptionUr": "بی آئی ایس پی 8171 آفیشل پورٹل استعمال کرنے کی تفصیلی گائیڈ۔ آن لائن رجسٹریشن، کیپچا کوڈ کے مسائل، فنڈ ڈلیوری اور اہلیت دیکھنے کا آسان طریقہ۔",
    "directAnswerEn": "The official 8171 web portal (8171.bisp.gov.pk) is the digital interface managed by BISP and NADRA for checking social safety net eligibility and quarterly payment status in Pakistan. Enter your 13-digit CNIC and security code to view status. Registration cannot be completed solely on the portal; you must visit a BISP Tehsil Office for dynamic NSER survey biometric entry.",
    "directAnswerUr": "8171 آفیشل پورٹل (8171.bisp.gov.pk) بے نظیر پروگرام کی آن لائن جانچ کا سرکاری ذریعہ ہے۔ اس پر شناختی کارڈ درج کر کے رقم کا سٹیٹس دیکھا جا سکتا ہے۔ آن لائن رجسٹریشن کے لیے بائیو میٹرک سروے نادرا یا بی آئی ایس پی تحصیل دفتر سے ہوتا ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "8171 Web Portal",
      "url": "https://8171.bisp.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Digital Welfare Portal Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "8171 Web Portal Inquiry",
        "serviceUr": "8171 ویب انکوائری",
        "normal": "PKR 0 (100% Free)",
        "urgent": "Instant Check",
        "executive": "No Fee Ever"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Access Official 8171 URL",
        "titleUr": "8171 آفیشل لنک کھولیں",
        "detailEn": "Type 8171.bisp.gov.pk directly into your web browser address bar.",
        "detailUr": "براؤزر میں 8171.bisp.gov.pk کھولیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Input CNIC & Verification Captcha",
        "titleUr": "شناختی کارڈ اور سیکیورٹی کوڈ درج کریں",
        "detailEn": "Enter 13-digit CNIC and type the 4-digit code displayed.",
        "detailUr": "13 ہندسوں کا شناختی کارڈ نمبر اور 4 ہندسوں کا کوڈ درج کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "View Payment Details & Instructions",
        "titleUr": "رقم اور اہلیت کی تفصیل دیکھیں",
        "detailEn": "Check whether your quarterly payment (PKR 10,500) has been credited to Bank Alfalah / HBL campsite.",
        "detailUr": "اپنی سہ ماہی قسط 10,500 روپے کی وصولی کی تفصیل دیکھیں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Why is the 8171 web portal running slow or showing server connection error?",
        "questionUr": "8171 ویب سائٹ سلو کیوں ہوتی ہے یا ایرر کیوں دیتی ہے؟",
        "answerEn": "During quarterly payment distribution releases, millions of citizens access 8171.bisp.gov.pk simultaneously, causing server load. Try clearing your browser cache or accessing the site early morning (before 9 AM) or late evening.",
        "answerUr": "قسط کے دنوں میں لاکھوں افراد کے ایک ساتھ ویب سائٹ کھولنے سے سرور پر بوجھ ہوتا ہے۔ صبح سویرے یا رات کے وقت دوبارہ کوشش کریں۔"
      }
    ],
    "contentEn": "The **8171 Web Portal** (`8171.bisp.gov.pk`) is the official digital gateway established by the Government of Pakistan to ensure complete transparency in welfare fund disbursement.\n\n> 🚨 **SCAM WARNING**: \n> BISP and 8171 services are **100% FREE**. \n> Never trust unofficial portals ending in .com, .tk, or .blogspot. Official BISP portals strictly use the **.gov.pk** government domain extension.\n\n## What You Can Check on 8171 Portal\n- **Benazir Kafaalat Payment Status**: Verify if your quarterly cash payment (PKR 10,500 - 13,500) is ready for campsite collection.\n- **Taleemi Wazaif Education Stipends**: Trace school stipend releases for your enrolled children.\n- **NSER Dynamic Survey Status**: Confirm if your household survey data is active in the central database.",
    "contentUr": "**8171 ویب پورٹل** (8171.bisp.gov.pk) حکومت پاکستان کا آفیشل اور شفاف پورٹل ہے۔\n\n> 🚨 **سکیم الرٹ**: بی آئی ایس پی کی تمام سروسز **100 فیصد مفت** ہیں۔ کسی ایجنٹ یا جعلی ویب سائٹ پر اعتبار نہ کریں۔ سرکاری سائٹس کے آخر میں **.gov.pk** ہوتا ہے۔",
    "relatedSlugs": [
      "/welfare/bisp-eligibility-check-by-cnic",
      "/welfare/bisp-how-to-register",
      "/welfare/bisp-payment-check"
    ]
  },
  "bisp-how-to-register": {
    "slug": "bisp-how-to-register",
    "fullPath": "/welfare/bisp-how-to-register",
    "categoryId": "welfare",
    "titleEn": "BISP Registration Guide 2026: Dynamic NSER Survey & Office Process",
    "titleUr": "بی آئی ایس پی میں نام درج کروانے کا طریقہ 2026: ڈائنامک این ایس ای آر سروے",
    "metaDescriptionEn": "Learn how to register for Benazir Income Support Programme (BISP) via dynamic NSER survey at Tehsil offices. Required documents, PMT calculation, and registration steps.",
    "metaDescriptionUr": "بے نظیر پروگرام میں نیا اندراج کروانے کا مکمل طریقہ۔ نادرا و بی آئی ایس پی تحصیل سینٹر پر ڈائنامک این ایس ای آر سروے، ضروری کاغذات اور اہلیت۔",
    "directAnswerEn": "To register for BISP, the female head of household must visit the nearest BISP Tehsil Registration Center with her original Smart CNIC and original B-Forms for all minor children. Complete the dynamic NSER survey interview, answer household asset questions, provide biometric thumbprints, and receive an official SMS from 8171 confirming survey registration. Survey registration is 100% FREE.",
    "directAnswerUr": "بی آئی ایس پی میں اندارج کے لیے خاندان کی شادی شدہ خاتون اپنے اصل سمارٹ شناختی کارڈ اور تمام بچوں کے اصل بی فارم کے ساتھ قریبی بی آئی ایس پی تحصیل سینٹر جائیں۔ وہاں ڈائنامک این ایس ای آر سروے ڈیسک پر سوالات کا جواب دیں اور مفت اندراج کروائیں۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "BISP Registration Division",
      "url": "https://bisp.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "BISP Operations Specialist"
    },
    "feeStructure": [
      {
        "serviceEn": "Dynamic NSER Survey Registration",
        "serviceUr": "ڈائنامک این ایس ای آر سروے",
        "normal": "PKR 0 (100% FREE)",
        "urgent": "Tehsil Office Visit",
        "executive": "No Fee Ever"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Gather Original CNIC & Children B-Forms",
        "titleUr": "اصل شناختی کارڈ اور بچوں کے بی فارم لائیں",
        "detailEn": "Bring original valid Smart CNIC of the married female applicant and original B-Forms of all children.",
        "detailUr": "خاتون کا اصل سمارٹ شناختی کارڈ اور بچوں کے بی فارم ساتھ لائیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Visit BISP Tehsil Registration Center",
        "titleUr": "بی آئی ایس پی تحصیل سینٹر تشریف لے جائیں",
        "detailEn": "Arrive at your local Tehsil BISP office and get an entry token for NSER Dynamic Survey.",
        "detailUr": "اپنی تحصیل کے بی آئی ایس پی دفتر جا کر سروے ٹوکن لیں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Complete NSER Socio-Economic Interview",
        "titleUr": "سروے سوالات اور بائیو میٹرک کروائیں",
        "detailEn": "Answer household income, housing, and asset questions. Scan thumb biometrics to finalize registration.",
        "detailUr": "کمپیوٹر ڈیٹا اینٹری کاؤنٹر پر سوالات کے جواب دیں اور فنگر پرنٹ انٹری کروائیں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "How much does BISP dynamic survey registration cost?",
        "questionUr": "بی آئی ایس پی ڈائنامک سروے کی فیس کتنی ہے؟",
        "answerEn": "Survey registration is 100% FREE at all official BISP Tehsil centers. Do not pay any agent.",
        "answerUr": "بی آئی ایس پی سینٹر پر سروے بالکل مفت ہوتا ہے۔"
      }
    ],
    "contentEn": "Registering your family in the **National Socio-Economic Registry (NSER)** dynamic survey is the mandatory gateway to qualify for Benazir Kafaalat and Taleemi Wazaif.\n\n> 🚨 **SCAM WARNING**: \n> BISP survey registration is **100% FREE**. No government official or private agent is authorized to charge any money for filling out the survey form.\n\n## Required Documents for BISP Registration\n1. Original valid Smart CNIC of the female head of household.\n2. Original B-Forms (CRC) for all minor children issued by NADRA.\n3. Utility bill (electricity or gas) for current residential address verification.",
    "contentUr": "بی آئی ایس پی فنڈز کے حصول کے لیے **این ایس ای آر (NSER) ڈائنامک سروے** کروانا لازمی ہے۔\n\n> 🚨 **سکیم الرٹ**: نادرا اور بی آئی ایس پی تحصیل دفاتر میں سروے رجسٹریشن **100 فیصد مفت** ہے۔ کسی ایجنٹ کو پیسے نہ دیں۔\n\n## ضروری کاغذات\n1. خاتون کا اصل سمارٹ شناختی کارڈ۔\n2. تمام بچوں کے نادرا بی فارم۔\n3. بجلی یا گیس کا بل۔",
    "relatedSlugs": [
      "/welfare/bisp-eligibility-check-by-cnic",
      "/welfare/8171-portal-guide",
      "/welfare/kafaalat-amount-schedule"
    ]
  },
  "bisp-payment-check": {
    "slug": "bisp-payment-check",
    "fullPath": "/welfare/bisp-payment-check",
    "categoryId": "welfare",
    "titleEn": "BISP Payment Check & Troubleshooting Guide 2026: Campsites & ATMs",
    "titleUr": "بی آئی ایس پی رقم کی وصولی اور فنڈز چیک کرنے کا طریقہ 2026",
    "metaDescriptionEn": "Learn how to collect BISP quarterly payment (PKR 10,500). Campsite collection steps, biometric ATM withdrawal, handling agent deductions, and helpline complaints.",
    "metaDescriptionUr": "بے نظیر پروگرام کی 10,500 روپے کی قسط حاصل کرنے کا طریقہ۔ بینک الفلاح / ایچ بی ایل کیمپ سائٹس، بائیو میٹرک مسائل اور ہیلپ لائن پر کٹوتی کی شکایت۔",
    "directAnswerEn": "BISP quarterly payments (PKR 10,500 to 13,500) are disbursed through partner bank campsites (Bank Alfalah in Punjab/KP/AJK, HBL in Sindh/Balochistan). Eligible beneficiaries receive an official SMS from 8171, visit the designated campsite with their original Smart CNIC, scan thumb biometrics, and collect full cash without any agent deductions.",
    "directAnswerUr": "بی آئی ایس پی کی سہ ماہی قسط 10,500 روپے حاصل کرنے کے لیے 8171 کا ایس ایم ایس ملنے پر اپنے اصل شناختی کارڈ کے ساتھ مقررہ بینک کیمپ سائٹ یا بائیو میٹرک کاؤنٹر جائیں۔ انگوٹھا لگا کر پوری رقم وصول کریں۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "BISP Finance & Payment Division",
      "url": "https://bisp.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "BISP Payment Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Quarterly Kafaalat Cash Disbursement",
        "serviceUr": "سہ ماہی کفالت نقد قسط",
        "normal": "PKR 10,500 (Full Amount)",
        "urgent": "Disbursement Campsite",
        "executive": "Zero Deduction"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Receive Official 8171 Payment SMS",
        "titleUr": "8171 سے رقم کا ایس ایم ایس حاصل کریں",
        "detailEn": "Wait for official payment arrival notification from sender 8171.",
        "detailUr": "8171 سے رقم کی منتقلی کا میسج دیکھیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Visit Bank Alfalah / HBL Campsite",
        "titleUr": "بینک کیمپ سائٹ تشریف لے جائیں",
        "detailEn": "Visit the designated school/ground campsite with your original Smart CNIC.",
        "detailUr": "اصل شناختی کارڈ لے کر قریبی کیمپ سائٹ جائیں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Biometric Verification & Count Cash",
        "titleUr": "انگوٹھا لگائیں اور رقم گن کر لیں",
        "detailEn": "Scan your thumb biometric at the device counter and collect your full PKR 10,500 cash.",
        "detailUr": "بائیو میٹرک کے بعد پوری رقم کاؤنٹر پر خود گن کر لیں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "What should I do if an agent deducts 500 or 1000 rupees from my BISP cash?",
        "questionUr": "اگر ایجنٹ پیسے کاٹ لے تو کہاں شکایت کریں؟",
        "answerEn": "Agent deductions are strictly ILLEGAL. Demand a printed receipt. Immediately report the agent name and campsite location to the BISP toll-free helpline 0800-26477 or notify the Assistant Director present at the campsite.",
        "answerUr": "رقم سے کٹوتی غیر قانونی ہے! فوری طور پر بی آئی ایس پی ہیلپ لائن 0800-26477 پر کال کریں۔"
      }
    ],
    "contentEn": "Collecting your Benazir Kafaalat quarterly financial grant should be a dignity-filled, hassle-free experience.\n\n> 🚨 **CRITICAL SCAM WARNING**: \n> **You are entitled to 100% of your money.** \n> If any retailer or campsite agent tries to deduct PKR 500, PKR 1,000, or any amount from your PKR 10,500 cash payment, **DO NOT ACCEPT IT**. Report them immediately to the BISP Complaint Cell at **0800-26477**.\n\n## Official Partner Banks for Cash Distribution\n- **Punjab, KP, Gilgit-Baltistan, AJK**: Bank Alfalah\n- **Sindh, Balochistan, Islamabad**: Habib Bank Limited (HBL)",
    "contentUr": "بے نظیر کفالت کی رقم کا حصول آپ کا قانونی حق ہے۔\n\n> 🚨 **سکیم الرٹ**: **پوری 10,500 روپے کی رقم وصول کریں۔** اگر کوئی ایجنٹ کٹوتی کرے تو بی آئی ایس پی ٹول فری ہیلپ لائن **0800-26477** پر شکایت درج کروائیں۔",
    "relatedSlugs": [
      "/welfare/bisp-eligibility-check-by-cnic",
      "/welfare/kafaalat-amount-schedule",
      "/welfare/8171-portal-guide"
    ]
  },
  "taleemi-wazaif": {
    "slug": "taleemi-wazaif",
    "fullPath": "/welfare/taleemi-wazaif",
    "categoryId": "welfare",
    "titleEn": "Benazir Taleemi Wazaif 2026: Education Stipend Amounts & Registration",
    "titleUr": "بے نظیر تعلیمی وظائف 2026: تعلیمی وظائف کی رقم اور اندراج",
    "metaDescriptionEn": "Complete guide to Benazir Taleemi Wazaif for primary, secondary, and higher secondary students. Check quarterly stipend amounts, 75% attendance rule, and bonus grants.",
    "metaDescriptionUr": "بے نظیر تعلیمی وظائف کی مکمل معلومات۔ پرائمری، سیکنڈری اور ہائر سیکنڈری طلباء کی سہ ماہی رقم، 75 فیصد حاضری اور طالبات کا تعلیمی بونس۔",
    "directAnswerEn": "Benazir Taleemi Wazaif provides quarterly educational cash stipends to children of active Benazir Kafaalat beneficiaries. Quarterly stipend amounts are: Primary (Boys PKR 1,500 / Girls PKR 2,000); Secondary (Boys PKR 2,500 / Girls PKR 3,000); Higher Secondary (Boys PKR 3,500 / Girls PKR 4,000). Girls completing primary school also receive a one-time PKR 3,000 graduation bonus.",
    "directAnswerUr": "بے نظیر تعلیمی وظائف کفالت ہولڈرز کے بچوں کو دیے جاتے ہیں۔ پرائمری (لڑکے 1500 / لڑکیاں 2000 روپے)، سیکنڈری (لڑکے 2500 / لڑکیاں 3000 روپے)، ہائر سیکنڈری (لڑکے 3500 / لڑکیاں 4000 روپے)۔ پرائمری مکمل کرنے پر لڑکیوں کو 3000 روپے کا بونس ملتا ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "BISP Education Division",
      "url": "https://bisp.gov.pk/TaleemiWazaif"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Education Welfare Specialist"
    },
    "feeStructure": [
      {
        "serviceEn": "Primary Level Stipend (Class 1 to 5)",
        "serviceUr": "پرائمری سطح (جماعت 1 تا 5)",
        "normal": "Boys: PKR 1,500 / qtr",
        "urgent": "Girls: PKR 2,000 / qtr",
        "executive": "Plus PKR 3k Bonus"
      },
      {
        "serviceEn": "Secondary Level Stipend (Class 6 to 10)",
        "serviceUr": "سیکنڈری سطح (جماعت 6 تا 10)",
        "normal": "Boys: PKR 2,500 / qtr",
        "urgent": "Girls: PKR 3,000 / qtr",
        "executive": "75% Attendance"
      },
      {
        "serviceEn": "Higher Secondary (Class 11 & 12)",
        "serviceUr": "ہائر سیکنڈری (جماعت 11 و 12)",
        "normal": "Boys: PKR 3,500 / qtr",
        "urgent": "Girls: PKR 4,000 / qtr",
        "executive": "College Stipend"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Mother Must Be Active Kafaalat Beneficiary",
        "titleUr": "والدہ کا بی آئی ایس پی کا اہل ہونا",
        "detailEn": "Ensure mother receives regular Benazir Kafaalat payments.",
        "detailUr": "والدہ بے نظیر کفالت کی فعال مستحق ہونی چاہئیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Get Admission Slip from School",
        "titleUr": "سکول سے داخلہ و حاضری فارم بنوائیں",
        "detailEn": "Obtain school admission verification slip stamped by school principal.",
        "detailUr": "سکول ہیڈ ماسٹر سے داخلہ سرٹیفکیٹ تصدیق کروائیں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Submit Enrolment Slip at BISP Office",
        "titleUr": "بی آئی ایس پی دفتر میں داخلہ سلپ جمع کروائیں",
        "detailEn": "Submit slip and child's B-Form at BISP Tehsil office for voucher activation.",
        "detailUr": "سلپ اور بچے کا بی فارم بی آئی ایس پی دفتر میں دیں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "What is the mandatory attendance requirement for Benazir Taleemi Wazaif?",
        "questionUr": "تعلیمی وظائف کے لیے حاضری کی کیا شرط ہے؟",
        "answerEn": "Students must maintain a minimum of 75% quarterly attendance in school/college for stipends to be released.",
        "answerUr": "طالب علم کی سکول میں کم از کم 75 فیصد حاضری ہونا لازمی ہے۔"
      }
    ],
    "contentEn": "Benazir Taleemi Wazaif encourages low-income families to enroll and retain their children in schools by offering higher quarterly cash stipends for female students.\n\n> 🚨 **SCAM WARNING**: \n> School admission slips and BISP Taleemi Wazaif enrollment are **100% FREE**. Never pay any school teacher or agent for filling enrollment slips.\n\n## Quarterly Stipend Breakdown 2026\n\n| Education Level | Boys Stipends (Per Quarter) | Girls Stipends (Per Quarter) | Special Incentives |\n| :--- | :--- | :--- | :--- |\n| **Primary (Class 1-5)** | PKR 1,500 | PKR 2,000 | **PKR 3,000** Primary Graduation Bonus for Girls |\n| **Secondary (Class 6-10)** | PKR 2,500 | PKR 3,000 | Attendance verified quarterly |\n| **Higher Secondary (Class 11-12)** | PKR 3,500 | PKR 4,000 | College verification |",
    "contentUr": "بے نظیر تعلیمی وظائف کے تحت بچوں بالخصوص لڑکیوں کی تعلیم کے لیے مالی مدد دی جاتی ہے۔\n\n> 🚨 **سکیم الرٹ**: سکول داخلہ سلپ اور وظائف کا اندراج **100 فیصد مفت** ہے۔",
    "relatedSlugs": [
      "/welfare/bisp-eligibility-check-by-cnic",
      "/welfare/kafaalat-amount-schedule",
      "/welfare/bisp-how-to-register"
    ]
  },
  "kafaalat-amount-schedule": {
    "slug": "kafaalat-amount-schedule",
    "fullPath": "/welfare/kafaalat-amount-schedule",
    "categoryId": "welfare",
    "titleEn": "Benazir Kafaalat Amount & Payment Schedule 2026 (PKR 10,500 Quarterly)",
    "titleUr": "بے نظیر کفالت رقم اور سہ ماہی قسط کا شیڈول 2026",
    "metaDescriptionEn": "Check current Benazir Kafaalat cash stipend amount (PKR 10,500) and official 2026 disbursement schedule phases across districts in Pakistan.",
    "metaDescriptionUr": "بے نظیر کفالت کی موجودہ سہ ماہی قسط 10,500 روپے کا نیا شیڈول اور اضلاع کی لسٹ۔ قسط ملنے کی تاریخیں اور بینک کاؤنٹر تفصیلات۔",
    "directAnswerEn": "As of 2026, the official Benazir Kafaalat quarterly payment is PKR 10,500 per eligible household (with periodic inflation updates up to PKR 13,500). Disbursements happen in 4 quarterly cycles per year across phased district clusters via Bank Alfalah and HBL biometric campsites.",
    "directAnswerUr": "سال 2026 میں بے نظیر کفالت کی فی سہ ماہی قسط 10,500 روپے ہے۔ یہ قسط سال میں 4 بار مائیکرو فنانس بینکوں کے ذریعے اضلاع کے مختلف مرحلہ وار شیڈول کے تحت جاری کی جاتی ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "BISP Kafaalat Division",
      "url": "https://bisp.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Financial Assistance Analyst"
    },
    "feeStructure": [
      {
        "serviceEn": "Benazir Kafaalat Quarterly Cash Grant",
        "serviceUr": "بی آئی ایس پی سہ ماہی قسط",
        "normal": "PKR 10,500 / Quarter",
        "urgent": "Phase 1 & Phase 2",
        "executive": "Zero Deduction"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Check 8171 Portal for Active Cycle",
        "titleUr": "8171 پر جاری قسط کا سٹیٹس دیکھیں",
        "detailEn": "Verify if payment for your district cluster has been released.",
        "detailUr": "8171 پورٹل سے قسط جاری ہونے کی تصدیق کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "How many times a year is Benazir Kafaalat money paid?",
        "questionUr": "بے نظیر کفالت کی رقم سال میں کتنی بار ملتی ہے؟",
        "answerEn": "It is paid 4 times a year (every 3 months / quarterly basis).",
        "answerUr": "یہ رقم سال میں 4 بار (ہر تین ماہ بعد) دی جاتی ہے۔"
      }
    ],
    "contentEn": "The **Benazir Kafaalat Programme** delivers core unconditional quarterly cash grants directly to deserving female family heads across Pakistan.\n\n> 🚨 **SCAM WARNING**: \n> **Current official quarterly payment is PKR 10,500.** \n> Always collect your complete payment. Report any agent claiming partial payments or processing cuts to **0800-26477**.",
    "contentUr": "**بے نظیر کفالت پروگرام** پاکستان کی غریب خواتین کو ہر تین ماہ بعد 10,500 روپے کی مالی امداد فراہم کرتا ہے۔\n\n> 🚨 **سکیم الرٹ**: **سرکاری قسط 10,500 روپے ہے۔** پوری رقم وصول کریں اور کٹوتی کی صورت میں 0800-26477 پر کال کریں۔",
    "relatedSlugs": [
      "/welfare/bisp-eligibility-check-by-cnic",
      "/welfare/bisp-payment-check",
      "/welfare/taleemi-wazaif"
    ]
  },
  "pser-survey-registration": {
    "slug": "pser-survey-registration",
    "fullPath": "/welfare/pser-survey-registration",
    "categoryId": "welfare",
    "titleEn": "PSER Survey Registration Punjab 2026: Portal Guide & Status Check",
    "titleUr": "پی ایس ای آر (PSER) پنجاب سروے آن لائن رجسٹریشن 2026",
    "metaDescriptionEn": "Complete guide to Punjab Socio-Economic Registry (PSER) survey registration. Register online at pser.punjab.gov.pk for CM targeted subsidy schemes.",
    "metaDescriptionUr": "پنجاب سوشو اکنامک رجسٹری (PSER) آن لائن سروے گائیڈ۔ pser.punjab.gov.pk پورٹل پر رجسٹریشن، کسان کارڈ، چھت سکیم اور سبسڈی کا آسان طریقہ۔",
    "directAnswerEn": "The Punjab Socio-Economic Registry (PSER) is the Punjab Government's portal (pser.punjab.gov.pk) for registering household socio-economic data. Registering on PSER is mandatory to qualify for Punjab Chief Minister targeted subsidy initiatives like Apni Chhat Apna Ghar, Kisan Card, and Rashan subsidies. Registration is 100% FREE.",
    "directAnswerUr": "پی ایس ای آر (pser.punjab.gov.pk) حکومت پنجاب کا پورٹل ہے جس پر گھرانے کی معاشی معلومات درج کی جاتی ہیں۔ کسان کارڈ، اپنی چھت اپنا گھر اور راشن سکیموں کے لیے PSER سروے لازمی اور 100 فیصد مفت ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "PSER Punjab Official Portal",
      "url": "https://pser.punjab.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Punjab Government Subsidies Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "PSER Online Portal Registration",
        "serviceUr": "پی ایس ای آر آن لائن رجسٹریشن",
        "normal": "PKR 0 (100% FREE)",
        "urgent": "Instant Account",
        "executive": "Govt Subsidies"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Access pser.punjab.gov.pk",
        "titleUr": "pser.punjab.gov.pk پورٹل کھولیں",
        "detailEn": "Open official PSER web portal and register using head of family CNIC.",
        "detailUr": "pser.punjab.gov.pk پر جا کر نیا اکاؤنٹ بنائیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Fill Household Survey Questions",
        "titleUr": "گھریلو قوائف کا فارم پر کریں",
        "detailEn": "Input family members, housing structure, monthly income, and utility bills.",
        "detailUr": "گھر کے افراد، آمدن اور بلز کا اندراج کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Is PSER survey registration free?",
        "questionUr": "کیا پی ایس ای آر سروے مفت ہے؟",
        "answerEn": "Yes! PSER online registration and door-to-door surveyor visits are 100% free.",
        "answerUr": "جی ہاں، PSER رجسٹریشن بالکل مفت ہے۔"
      }
    ],
    "contentEn": "The **Punjab Socio-Economic Registry (PSER)** manages targeted welfare initiatives for residents of Punjab.\n\n> 🚨 **SCAM WARNING**: \n> PSER portal registration is **100% FREE**. Register strictly at **[pser.punjab.gov.pk](https://pser.punjab.gov.pk/)**.",
    "contentUr": "**پنجاب سوشو اکنامک رجسٹری (PSER)** پنجاب کے شہریوں کے لیے سرکاری سبسیڈیز کا پورٹل ہے۔\n\n> 🚨 **سکیم الرٹ**: **pser.punjab.gov.pk** پر آن لائن رجسٹریشن بالکل مفت ہے۔",
    "relatedSlugs": [
      "/welfare/bisp-nser-survey-center-locations",
      "/welfare/bisp-eligibility-check-by-cnic",
      "/welfare/8171-portal-guide"
    ]
  },
  "ehsaas-program-guide": {
    "slug": "ehsaas-program-guide",
    "fullPath": "/welfare/ehsaas-program-guide",
    "categoryId": "welfare",
    "titleEn": "Ehsaas Program Complete Guide 2026: Sub-Schemes & Eligibility Check",
    "titleUr": "احساس پروگرام گائیڈ 2026: آن لائن رجسٹریشن اور تمام سکیمیں",
    "metaDescriptionEn": "Overview of all social relief programs under the Ehsaas and BISP umbrella in Pakistan. Ehsaas Amdan, Nashonuma, Undergraduate Scholarships, and emergency relief.",
    "metaDescriptionUr": "حکومت پاکستان کے احساس اور بی آئی ایس پی پروگرام کی تمام ذیلی سکیموں کا جائزہ۔ احساس امداد، نشوونما، وظائف اور راشن کا مکمل گائیڈ۔",
    "directAnswerEn": "The Ehsaas Program is a landmark social safety net framework in Pakistan comprising multiple targeted initiatives, including Ehsaas Kafaalat (cash grants), Ehsaas Nashonuma (maternal health & nutrition), Ehsaas Amdan (livelihood assets), and Ehsaas Undergraduate Scholarships. All eligibility verification is streamlined via the 8171 portal.",
    "directAnswerUr": "احساس پروگرام حکومت پاکستان کا ایک جامع سماجی پروگرام ہے جس میں احساس کفالت، احساس نشوونما (صحت و غذائیت)، احساس آمدن اور تعلیمی وظائف شامل ہیں۔ اہلیت 8171 سے ہی چیک ہوتی ہے۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "Poverty Alleviation Division",
      "url": "https://bisp.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Poverty Alleviation Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Ehsaas Social Welfare Initiatives",
        "serviceUr": "احساس ویلفیئر پروگرامز",
        "normal": "PKR 0 (100% FREE)",
        "urgent": "8171 Portal Check",
        "executive": "Targeted Relief"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Check 8171 Portal for Umbrella Eligibility",
        "titleUr": "8171 پر احساس کا سٹیٹس دیکھیں",
        "detailEn": "Check CNIC on 8171 portal to determine eligibility for Ehsaas sub-schemes.",
        "detailUr": "8171 پورٹل سے احساس سکیموں کا آن لائن سٹیٹس دیکھیں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Are Ehsaas and BISP the same program?",
        "questionUr": "کیا احساس اور بی آئی ایس پی ایک ہی پروگرام ہیں؟",
        "answerEn": "Yes. BISP is the statutory autonomous authority that executes the cash transfers and NSER survey under the social protection framework.",
        "answerUr": "جی ہاں، بی آئی ایس پی ہی بنیادی ادارہ ہے جو ان تمام فنڈز کی تقسیم کا ذمہ دار ہے۔"
      }
    ],
    "contentEn": "The **Ehsaas Framework** encompasses targeted initiatives designed to lift vulnerable households out of poverty.\n\n> 🚨 **SCAM WARNING**: \n> All Ehsaas programs are **100% FREE**. Never pay agents for application forms.",
    "contentUr": "**احساس پروگرام** پاکستان میں غریب اور مستحق افراد کی امداد کے لیے قائم کیا گیا۔\n\n> 🚨 **سکیم الرٹ**: احساس کی تمام سروسز **مفت** ہیں۔",
    "relatedSlugs": [
      "/welfare/bisp-eligibility-check-by-cnic",
      "/welfare/kafaalat-amount-schedule",
      "/welfare/taleemi-wazaif"
    ]
  },
  "laptop-scheme-registration": {
    "slug": "laptop-scheme-registration",
    "fullPath": "/welfare/laptop-scheme-registration",
    "categoryId": "welfare",
    "titleEn": "PM & CM Laptop Scheme Registration 2026: Student Online Portal",
    "titleUr": "وزیر اعظم و وزیر اعلیٰ لیپ ٹاپ سکیم آن لائن رجسٹریشن 2026",
    "metaDescriptionEn": "Apply for PM Youth Laptop Scheme and CM Punjab Free Laptop Scheme 2026. Eligibility criteria for university & college students, merit lists, and HEC portal.",
    "metaDescriptionUr": "طلباء کے لیے پرائم منسٹر اور چیف منسٹر لیپ ٹاپ سکیم 2026۔ آن لائن رجسٹریشن، ایچ ای سی میرٹ اور یونیورسٹی لسٹ۔",
    "directAnswerEn": "The PM & CM Free Laptop Schemes distribute high-spec laptops to talented students enrolled in public sector universities and colleges. Selection is strictly merit-based based on academic GPA/percentage. Apply online at laptop.pmyp.gov.pk.",
    "directAnswerUr": "لیپ ٹاپ سکیم کے تحت سرکاری جامعات کے باصلاحیت طلباء کو مفت لیپ ٹاپ دیے جاتے ہیں۔ آن لائن اپلائی laptop.pmyp.gov.pk پر کریں۔",
    "lastVerified": "August 10, 2026",
    "officialSource": {
      "name": "HEC PM Youth Laptop Portal",
      "url": "https://laptop.pmyp.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Student Welfare Desk"
    },
    "faqs": [
      {
        "questionEn": "How to check BISP 8171 payment status by CNIC?",
        "questionUr": "شناختی کارڈ نمبر سے 8171 قسط کا سٹیٹس کیسے معلوم کریں؟",
        "answerEn": "Visit 8171.bisp.gov.pk, enter 13-digit CNIC and security captcha, or send SMS with CNIC number to 8171 for instant reply.",
        "answerUr": "8171.bisp.gov.pk پر اپنا شناختی کارڈ درج کریں یا 8171 پر SMS بھیجیں۔"
      },
      {
        "questionEn": "What is the quarterly amount for Benazir Kafaalat in 2026?",
        "questionUr": "2026 میں بے نظیر کفالت سہ ماہی قسط کی رقم کتنی ہے؟",
        "answerEn": "Eligible women beneficiaries receive PKR 10,500 per quarter (every 3 months) disbursed via biometric verification at bank campsites.",
        "answerUr": "اہل خواتین کو 10,500 روپے فی سہ ماہی (ہر 3 ماہ بعد) بائیو میٹرک تصدیق پر ملتے ہیں۔"
      },
      {
        "questionEn": "Is BISP 8171 registration free or is there an agent fee?",
        "questionUr": "کیا 8171 کی رجسٹریشن بالکل مفت ہے؟",
        "answerEn": "BISP NSER dynamic survey registration is 100% FREE at BISP Tehsil Centers. Never pay money to private agents. Report fraud to 0800-26477.",
        "answerUr": "بی ایس پی کی تمام سروسز مفت ہیں۔ ایجنٹوں کو رقم دینا سخت منع ہے۔"
      }
    ],
    "contentEn": "Detailed criteria for BS 4-year, MS/MPhil, and PhD research scholars eligible for free laptop distribution.",
    "contentUr": "بی ایس، ایم فل اور پی ایچ ڈی کے طلباء کے لیے میرٹ کی شرائط۔",
    "relatedSlugs": [
      "/education/hec-scholarship-pakistan",
      "/welfare/pser-survey-registration"
    ]
  },
  "sehat-card-eligibility-check": {
    "slug": "sehat-card-eligibility-check",
    "fullPath": "/welfare/sehat-card-eligibility-check",
    "categoryId": "welfare",
    "titleEn": "Sehat Card Eligibility Check 2026: SMS 8500 & Hospital Treatment",
    "titleUr": "صحت کارڈ اہلیت آن لائن چیک 2026: ایس ایم ایس 8500 اور مفت علاج",
    "metaDescriptionEn": "Check your Sehat Sahulat Card health insurance coverage by CNIC via SMS 8500. Learn about 1 Million PKR free hospital treatment per family and hospital list.",
    "metaDescriptionUr": "صحت کارڈ کے ذریعے 10 لاکھ روپے تک مفت علاج کا طریقہ۔ 8500 پر شناختی کارڈ بھیج کر اہلیت اور پینل ہسپتالوں کی لسٹ دیکھیں۔",
    "directAnswerEn": "To check your Sehat Sahulat Card eligibility in Pakistan, send your 13-digit CNIC number via SMS to 8500. You will receive an official response stating if your family is covered for up to PKR 1,000,000 (10 Lakh) annual inpatient medical treatment at empanelled public and private hospitals nationwide.",
    "directAnswerUr": "صحت کارڈ پر 10 لاکھ روپے تک مفت علاج کے لیے اپنا 13 ہندسوں کا شناختی کارڈ نمبر 8500 پر ایس ایم ایس کریں۔ آپ کو فیملی کی اہلیت اور مفت علاج کی تفصیلات کا میسج مل جائے گا۔",
    "lastVerified": "August 16, 2026",
    "officialSource": {
      "name": "State Life Sehat Sahulat Program",
      "url": "https://www.pmhealthprogram.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Health Insurance Specialist"
    },
    "feeStructure": [
      {
        "serviceEn": "SMS 8500 Sehat Card Check",
        "serviceUr": "ایس ایم ایس 8500 صحت کارڈ انکوائری",
        "normal": "Standard SMS Rate (~PKR 2)",
        "urgent": "Instant Status SMS",
        "executive": "All Mobile Networks"
      },
      {
        "serviceEn": "Annual Family Medical Coverage Limit",
        "serviceUr": "سالانہ خاندانی مفت علاج کی حد",
        "normal": "Up to PKR 1,000,000",
        "urgent": "Inpatient Hospitalization",
        "executive": "100% Free Treatment"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Send CNIC to 8500",
        "titleUr": "شناختی کارڈ 8500 پر بھیجیں",
        "detailEn": "Type 13-digit CNIC without dashes and send SMS to 8500.",
        "detailUr": "13 ہندسوں کا شناختی کارڈ نمبر 8500 پر ایس ایم ایس کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Visit Empanelled Hospital with Smart CNIC",
        "titleUr": "پینل ہسپتال سمارٹ کارڈ کے ساتھ جائیں",
        "detailEn": "Take your original CNIC to the Sehat Card counter inside any empanelled hospital for zero-cash treatment.",
        "detailUr": "پینل ہسپتال کے صحت کارڈ ڈیسک پر اصل شناختی کارڈ پیش کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Do I need a separate physical plastic Sehat Card to get hospital treatment?",
        "questionUr": "کیا ہسپتال میں علاج کے لیے الگ پلاسٹک صحت کارڈ ضروری ہے؟",
        "answerEn": "No! Your original NADRA Smart CNIC functions as your digital Sehat Card. Simply present your CNIC at the hospital Sehat Sahulat desk.",
        "answerUr": "نہیں! آپ کا اصل سمارٹ شناختی کارڈ ہی آپ کا صحت کارڈ ہے۔ ہسپتال میں صرف اپنا شناختی کارڈ دکھائیں۔"
      }
    ],
    "contentEn": "The **Sehat Sahulat Program** provides micro-health insurance coverage up to **PKR 1,000,000 (10 Lakh)** per family per year for indoor hospital treatments.\n\n> 🚨 **SCAM WARNING**: \n> Sehat Card registration and hospital entry is **100% FREE**. No payment is required to activate coverage.\n\n## How to Check Eligibility\nSend your **13-digit CNIC** to **8500** via SMS.",
    "contentUr": "**صحت سہولت پروگرام** کے تحت ہر خاندان کو سالانہ **10 لاکھ روپے** تک مفت علاج کی سہولت ملتی ہے۔\n\n> 🚨 **سکیم الرٹ**: صحت کارڈ کا فعال ہونا اور ہسپتال داخلہ **100 فیصد مفت** ہے۔\n\n## اہلیت دیکھنے کا طریقہ\nاپنا 13 ہندسوں کا **شناختی کارڈ نمبر 8500** پر ایس ایم ایس کریں۔",
    "relatedSlugs": [
      "/welfare/bisp-eligibility-check-by-cnic",
      "/welfare/ehsaas-program-guide",
      "/welfare/8171-portal-guide"
    ]
  },
  "ramzan-relief-package": {
    "slug": "ramzan-relief-package",
    "fullPath": "/welfare/ramzan-relief-package",
    "categoryId": "welfare",
    "titleEn": "Ramzan Relief Package 2026: Free Rashan Subsidy & Utility Stores Discount",
    "titleUr": "رمضان ریلیف پیکیج 2026: مفت راشن، راشن کارڈ اور یوٹیلیٹی سٹورز رعایت",
    "metaDescriptionEn": "Government Ramzan Relief Package 2026 guidelines: Free Rashan hamper delivery, Utility Stores subsidies on flour (Atta), sugar, ghee, and 8070 SMS check.",
    "metaDescriptionUr": "حکومت کا رمضان ریلیف پیکیج 2026۔ مفت آٹا، چینی، گھی پر رعایت اور 8070 ایس ایم ایس کوڈ کے ذریعے راشن کی فراہمی۔",
    "directAnswerEn": "The annual Government Ramzan Relief Package provides subsidized essential food items (Atta, Sugar, Ghee, Pulses) at Utility Stores and doorstep free Rashan hampers for deserving households verified through 8070 SMS or BISP data.",
    "directAnswerUr": "سالانہ رمضان ریلیف پیکیج کے تحت مستحق شہریوں کو 8070 یا بی ایس پی پورٹل کے ذریعے مفت راشن اور یوٹیلیٹی سٹورز پر سستا آٹا و گھی ملتا ہے۔",
    "lastVerified": "August 10, 2026",
    "officialSource": {
      "name": "Utility Stores Corporation Pakistan",
      "url": "https://usc.org.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Seasonal Relief Desk"
    },
    "faqs": [
      {
        "questionEn": "How to check BISP 8171 payment status by CNIC?",
        "questionUr": "شناختی کارڈ نمبر سے 8171 قسط کا سٹیٹس کیسے معلوم کریں؟",
        "answerEn": "Visit 8171.bisp.gov.pk, enter 13-digit CNIC and security captcha, or send SMS with CNIC number to 8171 for instant reply.",
        "answerUr": "8171.bisp.gov.pk پر اپنا شناختی کارڈ درج کریں یا 8171 پر SMS بھیجیں۔"
      },
      {
        "questionEn": "What is the quarterly amount for Benazir Kafaalat in 2026?",
        "questionUr": "2026 میں بے نظیر کفالت سہ ماہی قسط کی رقم کتنی ہے؟",
        "answerEn": "Eligible women beneficiaries receive PKR 10,500 per quarter (every 3 months) disbursed via biometric verification at bank campsites.",
        "answerUr": "اہل خواتین کو 10,500 روپے فی سہ ماہی (ہر 3 ماہ بعد) بائیو میٹرک تصدیق پر ملتے ہیں۔"
      },
      {
        "questionEn": "Is BISP 8171 registration free or is there an agent fee?",
        "questionUr": "کیا 8171 کی رجسٹریشن بالکل مفت ہے؟",
        "answerEn": "BISP NSER dynamic survey registration is 100% FREE at BISP Tehsil Centers. Never pay money to private agents. Report fraud to 0800-26477.",
        "answerUr": "بی ایس پی کی تمام سروسز مفت ہیں۔ ایجنٹوں کو رقم دینا سخت منع ہے۔"
      }
    ],
    "contentEn": "Seasonal guide on registering for Ramzan Nigahban hampers and Utility Stores subsidised food cards.",
    "contentUr": "رمضان نگہبان پروگرام اور یوٹیلیٹی سٹورز راشن کارڈ کی مکمل تفصیل۔",
    "relatedSlugs": [
      "/welfare/bisp-eligibility-check-by-cnic",
      "/welfare/ehsaas-program-guide"
    ]
  },
  "e-challan-check-online": {
    "slug": "e-challan-check-online",
    "fullPath": "/traffic/e-challan-check-online",
    "categoryId": "traffic",
    "titleEn": "E-Challan Check Online 2026: Punjab PSCA & Traffic Fine Lookup",
    "titleUr": "ای چالان آن لائن چیک 2026: پنجاب سیف سٹی، کراچی اور اسلام آباد ٹریفک",
    "metaDescriptionEn": "Check and pay traffic E-Challans online in Pakistan. Punjab Safe Cities Authority (echallan.psca.gop.pk), Sindh Traffic, and Islamabad e-Challan payment via JazzCash/ePay.",
    "metaDescriptionUr": "پنجاب سیف سٹیز اتھارٹی (echallan.psca.gop.pk)، کراچی اور اسلام آباد کا ای چالان آن لائن گاڑی نمبر یا شناختی کارڈ سے دیکھئے اور پے کریں۔",
    "directAnswerEn": "To check and pay your Punjab PSCA E-Challan online in 2026, visit echallan.psca.gop.pk. Enter your vehicle registration number (e.g. LEA-24-1234) and chassis number (last 5 digits or full 17 digits). View unpaid violations with high-resolution CCTV camera snapshots, and pay instantly via ePay Punjab or mobile banking using the 17-digit PSID code.",
    "directAnswerUr": "پنجاب سیف سٹی (PSCA) ای چالان آن لائن چیک کرنے کے لیے echallan.psca.gop.pk پر جائیں۔ گاڑی کا نمبر اور چیسس نمبر درج کر کے کیمرے کی تصویر کے ساتھ چالان دیکھیں۔ ادائیگی ای پے پنجاب ایپ یا کسی بھی بینکنگ ایپ کے 17 ہندسوں کے پی ایس آئی ڈی (PSID) کوڈ کے ذریعے کریں۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "Punjab Safe Cities Authority (PSCA)",
      "url": "https://echallan.psca.gop.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Traffic & Legal Services Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Red Light Signal Violation",
        "serviceUr": "ریڈ سگنل توڑنا",
        "normal": "PKR 1,000",
        "urgent": "Pay within 10 Days",
        "executive": "Automated Camera Snap",
        "validity": "Instant System Update"
      },
      {
        "serviceEn": "Over-Speeding (Urban Roads / Ring Road)",
        "serviceUr": "تیز رفتاری (اوور سپیڈنگ)",
        "normal": "PKR 1,000 - 2,500",
        "urgent": "Speed Radar Capture",
        "executive": "Speed Bracket Linked",
        "validity": "Instant System Update"
      },
      {
        "serviceEn": "No Helmet / Pillions without Helmet",
        "serviceUr": "بغیر ہیلمٹ موٹر سائیکل سواری",
        "normal": "PKR 2,000",
        "urgent": "AI Camera Detection",
        "executive": "Rider & Pillion Covered",
        "validity": "Instant System Update"
      },
      {
        "serviceEn": "Lane Line / Zebra Crossing Violation",
        "serviceUr": "غلط لین / زیبرا کراسنگ خلاف ورزی",
        "normal": "PKR 1,000",
        "urgent": "Intersection Cameras",
        "executive": "ANPR Plate Capture",
        "validity": "Instant System Update"
      },
      {
        "serviceEn": "Driving while using Mobile Phone",
        "serviceUr": "ڈرائیونگ کے دوران موبائل کا استعمال",
        "normal": "PKR 1,000",
        "urgent": "High-Res Zoom Cameras",
        "executive": "Handheld Detection",
        "validity": "Instant System Update"
      },
      {
        "serviceEn": "One-Way Traffic Violation",
        "serviceUr": "ون وے کی خلاف ورزی",
        "normal": "PKR 2,000",
        "urgent": "Direct FIR / Impoundment",
        "executive": "High-Risk Violation",
        "validity": "Immediate Action"
      }
    ],
    "faqs": [
      {
        "questionEn": "What happens if an e-challan remains unpaid for more than 10 days?",
        "questionUr": "اگر 10 دن تک ای چالان ادا نہ کیا جائے تو کیا ہوتا ہے؟",
        "answerEn": "Unpaid e-challans are flagged in the Punjab Excise and PSCA integrated database. The vehicle is blacklisted, preventing ownership transfer, duplicate registration card issuance, token tax payment, and routine clearance at police checkpoints. Continued default results in vehicle impoundment.",
        "answerUr": "نہ ادا شدہ چالان پر گاڑی کو ایکسائز سسٹم میں بلیک لسٹ کر دیا جاتا ہے جس سے گاڑی کی فروخت، ٹوکن ٹیکس اور ٹرانسفر بلاک ہو جاتے ہیں۔"
      },
      {
        "questionEn": "How do I challenge a wrong or mistaken e-challan?",
        "questionUr": "غلط یا جعلی چالان کو کیسے چیلنج کیا جا سکتا ہے؟",
        "answerEn": "If the camera captured a vehicle with a forged duplicate number plate differing from your car make/model, visit the nearest Safe City Center (e.g. Qurban Lines in Lahore) or file a digital grievance through the PSCA portal under 'Dispute Resolution' attaching your vehicle Smart Card.",
        "answerUr": "اگر چالان میں کسی دوسری گاڑی کی تصویر ہو تو قربان لائنز سیف سٹی سنٹر جا کر یا پورٹل پر آن لائن اعتراض درج کروائیں۔"
      },
      {
        "questionEn": "Can I pay an e-challan at a physical bank branch or post office?",
        "questionUr": "کیا ای چالان بینک برانچ میں نقد ادا ہو سکتا ہے؟",
        "answerEn": "Yes. Print the e-challan slip carrying the PSID barcode and pay over the counter at any designated Bank of Punjab (BOP) or National Bank of Pakistan (NBP) branch.",
        "answerUr": "جی ہاں! چالان پرنٹ کر کے بینک آف پنجاب یا نیشنل بینک کے کسی بھی کیش کاؤنٹر پر جمع کروایا جا سکتا ہے۔"
      }
    ],
    "contentEn": "## Punjab Safe City Authority (PSCA) E-Challan System 2026\nThe **Punjab Safe City Authority (PSCA)** operates cutting-edge Artificial Intelligence (AI) and Automatic Number Plate Recognition (ANPR) camera surveillance across major metropolitan arteries in Lahore, Rawalpindi, Faisalabad, Gujranwala, Multan, and Kasur.\n\nEvery traffic violation — including red-light jumping, excessive speeding, lane violations, mobile phone usage while driving, and riding without helmets — is automatically logged, verified by a traffic warden, and issued as a digital ticket linked directly to the registered vehicle chassis.\n\n---\n\n## 2026 Traffic Fine Schedule & Enforcement Matrix\n\n| Violation Category | Fine Amount (Cars / Jeeps) | Fine Amount (Bikes / Rickshaws) | Detection Technology |\n| :--- | :--- | :--- | :--- |\n| **Red Light Crossing** | PKR 1,000 | PKR 1,000 | 4K Smart Intersection Camera |\n| **Over-Speeding (Up to 20 km/h over limit)** | PKR 1,000 | PKR 500 | Doppler Speed Radar |\n| **Excessive Over-Speeding (> 20 km/h over)** | PKR 2,500 | PKR 1,000 | Radar + Video Speed Vector |\n| **Riding Motorcycle without Safety Helmet** | N/A | PKR 2,000 | AI Pillion Head Detection |\n| **Disregarding Lane Line / Solid White Line** | PKR 1,000 | PKR 500 | Overhead ANPR Cameras |\n| **One-Way Direction Violation** | PKR 2,000 | PKR 2,000 | License Cancellation Notice |\n| **Using Mobile Phone Handheld while Driving** | PKR 1,000 | PKR 1,000 | Optical Zoom Cameras |\n| **Smoke Emission / Defective Muffler** | PKR 2,000 | PKR 1,000 | EPA Environmental Sensors |\n\n---\n\n## Step-by-Step Payment Methods Explained\n\n### Method 1: ePay Punjab Mobile Application (Recommended)\n1. Download **ePay Punjab** from Google Play Store or Apple App Store.\n2. Sign in and select **Punjab Police (PSCA)** > **Traffic E-Challan**.\n3. Enter your Vehicle Registration Number and Chassis Number.\n4. The system fetches the outstanding amount and displays the **17-digit PSID**.\n5. Tap **Pay with Mobile Banking** or **Easypaisa/JazzCash**.\n\n### Method 2: Direct 1Bill Bank Transfer\n- Open any banking app (Meezan, HBL, UBL, Alfalah, Standard Chartered).\n- Navigate to **Bill Payments** > **1Bill - Invoices/Vouchers**.\n- Enter the **17-digit PSID** generated from the e-challan website.\n- Verify the recipient displays *Government of Punjab* and tap confirm. The status updates in the Safe City database within 60 seconds.\n\n## Comprehensive Technical Breakdown of the Safe City ANPR Infrastructure\nThe **Automatic Number Plate Recognition (ANPR)** camera network uses high-definition optical character recognition (OCR) algorithms tuned specifically for Pakistani standardized and non-standard vehicle plates.\n\n### 1. The Real-Time Camera Trigger Cycle\n```\nVehicle Violates Traffic Rule (e.g., Red Light Crossing)\n   ↓\nInductive Loop Sensor / Video Vector triggers High-Speed 4K Camera\n   ↓\nDual Capture: 1 Wide-Angle Context Image + 1 Close-Up Plate Snapshot\n   ↓\nOCR Engine decodes Registration Plate & matches against Excise Central Database\n   ↓\nTraffic Police Central Verification Officer reviews Image & approves Violation\n   ↓\nE-Challan Ticket with 17-Digit 1Bill PSID generated & SMS dispatched to Owner\n```\n\n---\n\n## Complete Guide to Challenging Erroneous Tickets & Fake Number Plates\nIn high-traffic urban centers like Lahore and Karachi, motorists occasionally receive tickets caused by:\n- **Cloned / Forged Number Plates**: Another vehicle operating with a duplicate fabricated plate.\n- **Plate Misreads**: Weather obscuration, dust, or unapproved fancy calligraphy fonts confusing OCR algorithms.\n- **Sold Vehicles Still in Your Name**: Vehicles sold on open transfer letters.\n\n### How to File a Formal Dispute:\n1. Visit the **PSCA Dispute Resolution Center** located at Qurban Police Lines, Lahore (or relevant regional Safe City office).\n2. Bring your **Original Vehicle Registration Smart Card**, original NADRA CNIC, and the physical vehicle for physical chassis verification.\n3. If the violation photo clearly shows a vehicle of a different make/model/color (e.g. ticket shows a white sedan while your registered car is a black hatchback), the review officer immediately cancels the ticket in the database and enters a \"Plate Tampering Alert\" on the offender.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n---\n\n## Complete Guide to Safe Driving, Demerit Points & Road Safety Laws\nOperating motor vehicles across Pakistan's national highways, urban motorways, and city arteries requires strict compliance with the **National Highway Safety Ordinance (NHSO 2000)** and provincial traffic acts.\n\n### 1. Understanding the Provincial Demerit Points System\nUnder integrated traffic police databases, moving violations carry cumulative demerit points:\n- **Reckless Driving & Overtaking on Blind Curves**: 6 Demerit Points + Impoundment Notice.\n- **Driving Without Valid Insurance / Fitness Certificate**: 4 Demerit Points + Vehicle Fitness Inspection.\n- **Dangerous Loading & Over-Height Cargo (Commercial Pickups)**: 6 Demerit Points + Heavy Commercial Fine.\n- **Failure to Yield to Emergency Ambulances / Fire Brigades**: 8 Demerit Points + Direct License Suspension Hearing.\n\n### 2. Essential Road Trip Vehicle Maintenance Checklist\nBefore embarking on long-distance travel on M-2, M-3, M-5, or N-5:\n- **Tire Tread Depth & Pressure**: Ensure tire tread exceeds 1.6mm depth and tire age does not exceed 5 years. Check cold tire pressure according to manufacturer vehicle door jamb ratings.\n- **Radiator Coolant & Brake Fluid**: Never top up modern aluminum radiators with plain tap water; use certified 50/50 ethylene glycol coolant. Inspect brake fluid reservoir levels and brake pad thickness.\n- **Emergency Kit**: Carry an operational fire extinguisher, reflective breakdown warning triangle, hydraulic jack, spare wheel with proper air pressure, and high-intensity flashlight.\n\n---\n\n## What to Do in Case of a Highway Accident or Breakdown\n1. **Move to Shoulder Lane**: Immediately steer vehicle to the extreme left emergency lane and switch on 4-way hazard hazard flashers.\n2. **Deploy Warning Triangle**: Place the reflective warning triangle 50 meters behind your vehicle to alert oncoming high-speed traffic.\n3. **Dial Motorway Police Helpline 1307**: Call toll-free **1307** from any mobile phone. The National Highways & Motorway Police (NHMP) patrol van will arrive within 10 to 15 minutes to provide free roadside mechanical assistance or safe towing.",
    "contentUr": "## پنجاب سیف سٹی اتھارٹی (PSCA) ای چالان سسٹم 2026\nلاہور، راولپنڈی، فیصل آباد، ملتان اور دیگر بڑے شہروں میں سیف سٹی کے جدید کیمروں کی مدد سے ٹریفک قوانین کی خلاف ورزی پر خودکار ای چالان کاٹے جاتے ہیں۔\n\nچالان کی تفصیلات اور تصویر گاڑی کا نمبر اور چیسس نمبر درج کر کے دیکھی جا سکتی ہے اور ادائیگی ای پے پنجاب یا بینکنگ ایپ کے ذریعے کی جاتی ہے۔",
    "relatedSlugs": [
      "/traffic/e-challan-check-by-cnic",
      "/traffic/token-tax-check",
      "/traffic/driving-license-guide"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Open Punjab Safe City E-Challan Portal",
        "titleUr": "پنجاب سیف سٹی ای چالان پورٹل کھولیں",
        "detailEn": "Navigate to echallan.psca.gop.pk on any web browser or open the ePay Punjab mobile application.",
        "detailUr": "ویب سائٹ echallan.psca.gop.pk یا ای پے پنجاب ایپ کھولیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Enter Vehicle & Chassis Number",
        "titleUr": "گاڑی کا نمبر اور چیسس نمبر درج کریں",
        "detailEn": "Type your vehicle registration plate letters and digits (e.g. LE-20-4567) and enter the 17-digit chassis number found on your vehicle registration Smart Card.",
        "detailUr": "گاڑی کی رجسٹریشن پلیٹ کا نمبر اور اسمارٹ کارڈ پر موجود چیسس نمبر درج کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "View Photo Proof of Violation",
        "titleUr": "کیمرے کی تصویر اور خلاف ورزی کا ثبوت دیکھیں",
        "detailEn": "Review the high-definition CCTV camera images showing vehicle position, road coordinates, exact date, timestamp, and fine amount.",
        "detailUr": "کیمرے سے لی گئی واضح تصویر، وقت، سڑک کا مقام اور جرمانے کی رقم چیک کریں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Copy the 17-Digit PSID Consumer Number",
        "titleUr": "17 ہندسوں کا پی ایس آئی ڈی (PSID) کوڈ کاپی کریں",
        "detailEn": "Each issued ticket generates a unique 17-digit 1Bill PSID code (starting with 99999) for inter-bank digital clearing.",
        "detailUr": "ہر چالان کے ساتھ دیا گیا 17 ہندسوں کا منفرد PSID نمبر کاپی کریں۔"
      },
      {
        "stepNumber": 5,
        "titleEn": "Pay via ePay Punjab or Bank App",
        "titleUr": "ای پے پنجاب یا بینکنگ ایپ سے ادائیگی کریں",
        "detailEn": "Open your banking app (Easypaisa, JazzCash, HBL, Meezan, Alfalah), navigate to Bill Payments > 1Bill > Voucher/Invoice, enter the PSID, and confirm payment.",
        "detailUr": "بینکنگ ایپ یا ایزی پیسہ میں 1Bill Voucher میں جا کر PSID درج کر کے فوری فیس ادا کریں۔"
      },
      {
        "stepNumber": 6,
        "titleEn": "Download Official Paid Receipt PDF",
        "titleUr": "سرکاری پیڈ رسید (PDF) ڈاؤن لوڈ کریں",
        "detailEn": "Re-check your registration number on the portal to confirm status displays 'PAID' and download the stamped payment receipt.",
        "detailUr": "پورٹل پر دوبارہ اسٹیٹس چیک کر کے PAID رسید اپنے پاس محفوظ کریں۔"
      }
    ]
  },
  "e-challan-check-by-cnic": {
    "slug": "e-challan-check-by-cnic",
    "fullPath": "/traffic/e-challan-check-by-cnic",
    "categoryId": "traffic",
    "titleEn": "E-Challan Check by CNIC 2026: Search Traffic Violations by Owner ID",
    "titleUr": "ای چالان آن لائن شناختی کارڈ نمبر سے چیک کریں 2026",
    "metaDescriptionEn": "Search pending traffic e-challans registered against your CNIC number in Punjab, Karachi, and Islamabad. Print duplicate challan receipts online.",
    "metaDescriptionUr": "اپنے قومی شناختی کارڈ نمبر کے ذریعے تمام غیر ادا شدہ ای چالان چالان آن لائن دیکھیں اور پرنٹ کاپی حاصل کریں۔",
    "directAnswerEn": "To check all unpaid traffic e-challans registered against your CNIC across multiple vehicles in Punjab, visit the ePay Punjab portal or PSCA search page. Enter your 13-digit CNIC to view a consolidated list of violations, total accumulated penalties, and individual 17-digit PSID payment codes.",
    "directAnswerUr": "اپنے شناختی کارڈ پر رجسٹرڈ تمام گاڑیوں کے ای چالان ایک ساتھ چیک کرنے کے لیے ای پے پنجاب پورٹل پر اپنا 13 ہندسوں کا شناختی کارڈ نمبر درج کریں۔ سسٹم تمام غیر ادا شدہ چالان اور ان کی کل رقم بمعہ 17 ہندسوں کے پی ایس آئی ڈی کوڈ فوری دکھا دے گا۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "ePay Punjab Official App Portal",
      "url": "https://epay.punjab.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Automobile Services Desk"
    },
    "faqs": [
      {
        "questionEn": "Why does my CNIC show e-challans for a car I already sold?",
        "questionUr": "بیچی ہوئی گاڑی کا چالان میرے شناختی کارڈ پر کیوں آ رہا ہے؟",
        "answerEn": "If the buyer never transferred the vehicle into their name on an open letter or stamp paper, the Excise record legally retains your CNIC as the registered owner. You must report the open letter sale to the Excise Department immediately.",
        "answerUr": "اگر خریدار نے گاڑی اپنے نام ٹرانسفر نہیں کروائی تو قانونی طور پر چالان پرانے مالک کے نام ہی جاری ہوتا رہے گا۔"
      }
    ],
    "contentEn": "## Checking E-Challans by CNIC in Pakistan\nWhen citizens own multiple family vehicles or motorcycles, checking each vehicle plate individually is tedious. The **CNIC-based unified challan lookup** enables motorists to pull up every pending Safe City ticket linked to their National Identity Card in a single unified dashboard.\n\n## Unified Fleet Management for Commercial and Family Vehicles\nWhen managing multiple motorcycles, family cars, or commercial fleet vehicles, checking by CNIC provides a single consolidated ledger:\n- **Comprehensive Liability Ledger**: Displays cumulative unpaid penalties across all registered plates.\n- **Vehicle Clearance for Resale**: Ensures that prospective vehicle sellers settle all outstanding Safe City dues before proceeding to biometric ownership transfer at NADRA e-Sahulat.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## Multi-Vehicle Fleet Monitoring & CNIC Traffic Fine Search 2026\nFor multi-vehicle families, transport business owners, and corporate fleet managers, the **CNIC-integrated traffic fine search** provides a single centralized overview of all unpaid Safe City violations across cars, commercial pickups, and motorcycles.\n\n### 1. Resolving Open Transfer Letter Liabilities\nIf you sold a vehicle years ago on an open transfer letter without completing biometric transfer, any new camera violations committed by the current driver continue to be legally linked to your CNIC. Using the CNIC lookup, you can identify delinquent vehicles, download violation evidence, and apply to the Excise Department for a formal legal notice (*Notice-e-Khusoosi*) or vehicle registration suspension.\n\n---\n\n## Complete Guide to Safe Driving, Demerit Points & Road Safety Laws\nOperating motor vehicles across Pakistan's national highways, urban motorways, and city arteries requires strict compliance with the **National Highway Safety Ordinance (NHSO 2000)** and provincial traffic acts.\n\n### 1. Understanding the Provincial Demerit Points System\nUnder integrated traffic police databases, moving violations carry cumulative demerit points:\n- **Reckless Driving & Overtaking on Blind Curves**: 6 Demerit Points + Impoundment Notice.\n- **Driving Without Valid Insurance / Fitness Certificate**: 4 Demerit Points + Vehicle Fitness Inspection.\n- **Dangerous Loading & Over-Height Cargo (Commercial Pickups)**: 6 Demerit Points + Heavy Commercial Fine.\n- **Failure to Yield to Emergency Ambulances / Fire Brigades**: 8 Demerit Points + Direct License Suspension Hearing.\n\n### 2. Essential Road Trip Vehicle Maintenance Checklist\nBefore embarking on long-distance travel on M-2, M-3, M-5, or N-5:\n- **Tire Tread Depth & Pressure**: Ensure tire tread exceeds 1.6mm depth and tire age does not exceed 5 years. Check cold tire pressure according to manufacturer vehicle door jamb ratings.\n- **Radiator Coolant & Brake Fluid**: Never top up modern aluminum radiators with plain tap water; use certified 50/50 ethylene glycol coolant. Inspect brake fluid reservoir levels and brake pad thickness.\n- **Emergency Kit**: Carry an operational fire extinguisher, reflective breakdown warning triangle, hydraulic jack, spare wheel with proper air pressure, and high-intensity flashlight.\n\n---\n\n## What to Do in Case of a Highway Accident or Breakdown\n1. **Move to Shoulder Lane**: Immediately steer vehicle to the extreme left emergency lane and switch on 4-way hazard hazard flashers.\n2. **Deploy Warning Triangle**: Place the reflective warning triangle 50 meters behind your vehicle to alert oncoming high-speed traffic.\n3. **Dial Motorway Police Helpline 1307**: Call toll-free **1307** from any mobile phone. The National Highways & Motorway Police (NHMP) patrol van will arrive within 10 to 15 minutes to provide free roadside mechanical assistance or safe towing.",
    "contentUr": "## شناختی کارڈ کے ذریعے تمام ای چالان چیک کرنے کا طریقہ\nاگر آپ کے نام پر ایک سے زیادہ گاڑیاں یا موٹر سائیکلیں ہیں تو آپ صرف اپنا شناختی کارڈ نمبر درج کر کے تمام بقایاجات اور چالان ایک ساتھ دیکھ سکتے ہیں۔",
    "relatedSlugs": [
      "/traffic/e-challan-check-online",
      "/traffic/vehicle-registration-transfer"
    ],
    "feeStructure": [
      {
        "serviceEn": "CNIC Integrated Multi-Vehicle Lookup",
        "serviceUr": "شناختی کارڈ پر تمام گاڑیوں کی تلاش",
        "normal": "100% FREE",
        "urgent": "Instant Unified Search",
        "executive": "Across All Registered Cars/Bikes",
        "validity": "Live PSCA Record"
      },
      {
        "serviceEn": "SMS Status Query to 8815",
        "serviceUr": "8815 پر ایس ایم ایس کے ذریعے تلاش",
        "normal": "Standard SMS Tariff",
        "urgent": "Send CNIC to 8815",
        "executive": "Instant SMS Summary",
        "validity": "Punjab Police System"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Open ePay Punjab or PSCA Portal",
        "titleUr": "ای پے پنجاب یا سیف سٹی پورٹل کھولیں",
        "detailEn": "Access epay.punjab.gov.pk or download the ePay mobile application.",
        "detailUr": "ویب سائٹ epay.punjab.gov.pk یا ای پے ایپ کھولیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Choose Search by CNIC Option",
        "titleUr": "شناختی کارڈ نمبر کی آپشن منتخب کریں",
        "detailEn": "Select 'Search Violations by Owner CNIC' from the drop-down menu.",
        "detailUr": "مطلوبہ مینو سے شناختی کارڈ کے ذریعے تلاش کا انتخاب کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Enter 13-Digit National Identity Card Number",
        "titleUr": "13 ہندسوں کا شناختی کارڈ نمبر درج کریں",
        "detailEn": "Type your CNIC without hyphens or spaces to trigger the consolidated lookup.",
        "detailUr": "بغیر ڈیش کے اپنا شناختی کارڈ نمبر درج کریں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Review All Linked Registered Vehicles",
        "titleUr": "نام پر رجسٹرڈ تمام گاڑیوں کی لسٹ دیکھیں",
        "detailEn": "See every bike, car, or commercial vehicle in your name with their pending fine amounts.",
        "detailUr": "اپنے نام کی تمام گاڑیوں، موٹر سائیکلوں اور ان کے جرمانوں کا جائزہ لیں۔"
      }
    ]
  },
  "token-tax-check": {
    "slug": "token-tax-check",
    "fullPath": "/traffic/token-tax-check",
    "categoryId": "traffic",
    "titleEn": "Vehicle Token Tax Check & Calculator 2026: Punjab, Sindh & ICT Rates",
    "titleUr": "گاڑیوں کا ٹوکن ٹیکس آن لائن چیک و کیلکولیٹر 2026 (پنجاب و سندھ)",
    "metaDescriptionEn": "Calculate and pay vehicle token tax online for cars and motorcycles in Punjab (ePay), Sindh Excise, and Islamabad. Lifetime token tax rates for under 1000cc engines.",
    "metaDescriptionUr": "کار اور موٹر سائیکل کے ٹوکن ٹیکس کی آن لائن ادائیگی اور ریٹس۔ 1000 سی سی سے کم گاڑیوں کا لائف ٹائم ٹوکن ٹیکس۔",
    "directAnswerEn": "To calculate and pay Vehicle Token Tax online in 2026 in Punjab, Sindh, or Islamabad, use the ePay Punjab or Sindh Excise e-Tax portal. Token tax for vehicles up to 1000cc is paid as a one-time lifetime fee (PKR 10,000-20,000), while vehicles above 1000cc pay annual tax ranging from PKR 3,500 to PKR 50,000+ depending on engine displacement and FBR filer status.",
    "directAnswerUr": "گاڑی کا ٹوکن ٹیکس پنجاب، سندھ یا اسلام آباد میں آن لائن چیک کرنے کے لیے ای پے ایپ استعمال کریں۔ 1000 سی سی تک کی گاڑیوں پر ون ٹائم لائف ٹائم ٹیکس ہوتا ہے جبکہ 1000 سی سی سے بڑی گاڑیوں پر سالانہ ٹوکن ٹیکس فائلر اور نان فائلر کیٹیگری کے مطابق وصول کیا جاتا ہے۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "Excise, Taxation & Narcotics Control Dept",
      "url": "https://excise.punjab.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Excise & Tax Desk"
    },
    "feeStructure": [
      {
        "serviceEn": "Lifetime Token Tax (Up to 1000cc Cars)",
        "serviceUr": "لائف ٹائم ٹوکن ٹیکس (1000 سی سی تک)",
        "normal": "PKR 10,000 - 20,000",
        "urgent": "One-time at Registration",
        "executive": "Lifetime Free Sticker",
        "validity": "Vehicle Lifetime"
      },
      {
        "serviceEn": "Annual Token Tax (1001cc - 1300cc Filer)",
        "serviceUr": "سالانہ ٹوکن (1001 تا 1300 سی سی فائلر)",
        "normal": "PKR 3,500 - 5,000 / yr",
        "urgent": "Active Filer Rate",
        "executive": "ePay Punjab PSID",
        "validity": "1 Fiscal Year (July-June)"
      },
      {
        "serviceEn": "Annual Token Tax (1301cc - 1500cc Filer)",
        "serviceUr": "سالانہ ٹوکن (1301 تا 1500 سی سی فائلر)",
        "normal": "PKR 6,000 - 9,000 / yr",
        "urgent": "Active Filer Rate",
        "executive": "ePay Punjab PSID",
        "validity": "1 Fiscal Year (July-June)"
      },
      {
        "serviceEn": "Annual Token Tax (1501cc - 2500cc SUV/Sedan)",
        "serviceUr": "سالانہ ٹوکن (1501 تا 2500 سی سی)",
        "normal": "PKR 15,000 - 35,000 / yr",
        "urgent": "Double for Non-Filers",
        "executive": "Withholding Tax Included",
        "validity": "1 Fiscal Year (July-June)"
      }
    ],
    "faqs": [
      {
        "questionEn": "What is the penalty for late token tax payment after 30th September?",
        "questionUr": "30 ستمبر کے بعد ٹوکن ٹیکس جمع کروانے پر کتنا جرمانہ ہے؟",
        "answerEn": "Under the Motor Vehicle Taxation Act, token tax is due by 30th June (with a grace period until 30th September). Late payments attract a monthly compound surcharge of 1% to 2% per month plus potential road fine impoundment.",
        "answerUr": "30 ستمبر کے بعد تاخیر پر ماہانہ 1 سے 2 فیصد اضافی سرچارج اور جرمانہ عائد کیا جاتا ہے۔"
      }
    ],
    "contentEn": "## Pakistan Vehicle Token Tax Rates & Calculator 2026\nEvery motorized vehicle operating on public roads in Pakistan is subject to **Annual Road Maintenance & Token Tax** levied by provincial Excise, Taxation & Narcotics Control Departments.\n\n---\n\n## Filer vs Non-Filer Tax Surcharge Difference\nUnder the Federal Finance Act 2026, vehicle owners who are **Non-Filers on the FBR Active Taxpayers List (ATL)** must pay **100% to 200% higher Advance Withholding Tax (Section 234)** on annual token renewals. Becoming an active income tax filer immediately halves your annual road tax burden.\n\n## Comprehensive Formula & Tax Calculation Rules across Engine Capacities\nUnder provincial Motor Vehicle Taxation schedules:\n- **Below 1000cc**: Fixed one-time lifetime tax.\n- **1001cc to 1300cc**: Annual road maintenance tax + SBP development cess.\n- **1301cc to 2000cc**: Progressive engine bracket with 100% surcharge for non-filers on the FBR Active Taxpayers List.\n- **Above 2000cc (Luxury SUVs & Crossovers)**: Top tax bracket carrying luxury withholding surcharges.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## Comprehensive Vehicle Token Tax Calculation Tables & Withholding Tax Slabs (2026)\nUnder the provincial Motor Vehicle Taxation Acts and Federal Finance Act 2026, road token tax rates are structured into progressive engine displacement slabs with strong financial incentives for active tax filers.\n\n### 1. Detailed Tax Computation Schedule for Private Cars\n\n| Engine Capacity Range | Provincial Base Token Tax | FBR Advance Withholding Tax (Active Filer) | FBR Advance Tax (Non-Filer Surcharge) | Total Annual Payable (Filer) |\n| :--- | :--- | :--- | :--- | :--- |\n| **Up to 1000cc (e.g. Alto, Cultus, WagonR)** | Lifetime Tax (PKR 10,000) | Nil | Nil | Lifetime Paid |\n| **1001cc to 1199cc (e.g. Swift, Yaris 1.3)** | PKR 2,500 / year | PKR 1,250 | PKR 2,500 | PKR 3,750 / year |\n| **1200cc to 1299cc (e.g. City 1.2)** | PKR 3,000 / year | PKR 1,500 | PKR 3,000 | PKR 4,500 / year |\n| **1300cc to 1499cc (e.g. Yaris 1.5, City 1.5)** | PKR 4,500 / year | PKR 2,500 | PKR 5,000 | PKR 7,000 / year |\n| **1500cc to 1599cc (e.g. Corolla 1.6)** | PKR 6,000 / year | PKR 3,750 | PKR 7,500 | PKR 9,750 / year |\n| **1600cc to 1799cc (e.g. Civic 1.5T, Grande 1.8)** | PKR 9,000 / year | PKR 4,500 | PKR 9,000 | PKR 13,500 / year |\n| **1800cc to 2499cc (e.g. Sportage, Tucson, Oshan)** | PKR 15,000 / year | PKR 10,000 | PKR 20,000 | PKR 25,000 / year |\n| **Above 2500cc (e.g. Fortuner, Prado, Land Cruiser)**| PKR 25,000 / year | PKR 20,000 | PKR 40,000 | PKR 45,000+ / year |\n\n---\n\n## Complete Guide to Safe Driving, Demerit Points & Road Safety Laws\nOperating motor vehicles across Pakistan's national highways, urban motorways, and city arteries requires strict compliance with the **National Highway Safety Ordinance (NHSO 2000)** and provincial traffic acts.\n\n### 1. Understanding the Provincial Demerit Points System\nUnder integrated traffic police databases, moving violations carry cumulative demerit points:\n- **Reckless Driving & Overtaking on Blind Curves**: 6 Demerit Points + Impoundment Notice.\n- **Driving Without Valid Insurance / Fitness Certificate**: 4 Demerit Points + Vehicle Fitness Inspection.\n- **Dangerous Loading & Over-Height Cargo (Commercial Pickups)**: 6 Demerit Points + Heavy Commercial Fine.\n- **Failure to Yield to Emergency Ambulances / Fire Brigades**: 8 Demerit Points + Direct License Suspension Hearing.\n\n### 2. Essential Road Trip Vehicle Maintenance Checklist\nBefore embarking on long-distance travel on M-2, M-3, M-5, or N-5:\n- **Tire Tread Depth & Pressure**: Ensure tire tread exceeds 1.6mm depth and tire age does not exceed 5 years. Check cold tire pressure according to manufacturer vehicle door jamb ratings.\n- **Radiator Coolant & Brake Fluid**: Never top up modern aluminum radiators with plain tap water; use certified 50/50 ethylene glycol coolant. Inspect brake fluid reservoir levels and brake pad thickness.\n- **Emergency Kit**: Carry an operational fire extinguisher, reflective breakdown warning triangle, hydraulic jack, spare wheel with proper air pressure, and high-intensity flashlight.\n\n---\n\n## What to Do in Case of a Highway Accident or Breakdown\n1. **Move to Shoulder Lane**: Immediately steer vehicle to the extreme left emergency lane and switch on 4-way hazard hazard flashers.\n2. **Deploy Warning Triangle**: Place the reflective warning triangle 50 meters behind your vehicle to alert oncoming high-speed traffic.\n3. **Dial Motorway Police Helpline 1307**: Call toll-free **1307** from any mobile phone. The National Highways & Motorway Police (NHMP) patrol van will arrive within 10 to 15 minutes to provide free roadside mechanical assistance or safe towing.",
    "contentUr": "## وہیکل ٹوکن ٹیکس کیلکولیٹر اور شرح 2026\nتمام گاڑیوں پر سالانہ ٹوکن ٹیکس لاگو ہوتا ہے۔ فائلر حضرات کو نان فائلرز کے مقابلے میں 50 فیصد سے زائد رعایت حاصل ہوتی ہے۔",
    "relatedSlugs": [
      "/traffic/e-challan-check-online",
      "/traffic/vehicle-registration-transfer"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Open ePay Punjab or Excise Web Portal",
        "titleUr": "ای پے پنجاب یا ایکسائز ویب پورٹل کھولیں",
        "detailEn": "Access epay.punjab.gov.pk or download the ePay Punjab app and select 'Excise & Taxation Department'.",
        "detailUr": "ای پے ایپ میں محکمہ ایکسائز کا آپشن منتخب کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Select Token Tax Payment",
        "titleUr": "ٹوکن ٹیکس کا انتخاب کریں",
        "detailEn": "Tap 'Token Tax' and enter your complete vehicle registration number (e.g. ICT-VS-123 or LEB-21-4567).",
        "detailUr": "گاڑی کی رجسٹریشن کا درست نمبر درج کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Review Calculation & Filer Concession",
        "titleUr": "ٹیکس حساب اور فائلر رعایت چیک کریں",
        "detailEn": "System pulls vehicle engine capacity, registered owner CNIC, active FBR filer status, and shows exact tax due.",
        "detailUr": "سسٹم انجن کپیسٹی اور فائلر اسٹیٹس کے مطابق کل واجب الادا رقم دکھائے گا۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Pay via 1Bill PSID in Bank App",
        "titleUr": "بینک ایپ سے 1Bill پر فیس ادا کریں",
        "detailEn": "Copy the 17-digit PSID code, paste in your mobile banking app under 1Bill Invoices, and complete payment.",
        "detailUr": "پی ایس آئی ڈی کوڈ کے ذریعے بینک ایپ سے فوری ادائیگی مکمل کریں۔"
      }
    ]
  },
  "driving-license-guide": {
    "slug": "driving-license-guide",
    "fullPath": "/traffic/driving-license-guide",
    "categoryId": "traffic",
    "titleEn": "Pakistan Driving License Guide 2026: DLIMS Online Apply & Renewal",
    "titleUr": "ڈرائیونگ لائسنس آن لائن اپلائی گائیڈ 2026: DLIMS پورٹل اور رینیول",
    "metaDescriptionEn": "How to apply for Learner Permit and International Driving License online via DLIMS Punjab (dlims.punjab.gov.pk) or Sindh Police. Fees, test rules, and electronic DL download.",
    "metaDescriptionUr": "ڈی ایل آئی ایم ایس پورٹل (dlims.punjab.gov.pk) سے لرنر پرمٹ، پکا ڈرائیونگ لائسنس اور انٹرنیشنل لائسنس اپلائی کرنے کا طریقہ۔",
    "directAnswerEn": "To apply for or renew a Driving License in Pakistan in 2026, visit dlims.punjab.gov.pk (Punjab), dls.sindhpolice.gov.pk (Sindh), or your local Police Khidmat Markaz. Learner permits cost PKR 500 (valid 6 months), regular computerized licenses cost PKR 1,000-2,500, and online renewal is fully digital.",
    "directAnswerUr": "پاکستان میں 2026 کے دوران ڈرائیونگ لائسنس بنوانے یا رینیو کرنے کے لیے dlims.punjab.gov.pk یا قریبی پولیس خدمت مرکز جائیں۔ لرنر پرمٹ کی فیس 500 روپے ہے جبکہ ریگولر لائسنس 1000 سے 2500 روپے میں جاری کیا جاتا ہے۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "DLIMS Punjab Traffic Police Portal",
      "url": "https://dlims.punjab.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Licensing & Road Safety Desk"
    },
    "faqs": [
      {
        "questionEn": "Can I drive legally while holding only a Learner Driving Permit?",
        "questionUr": "کیا لرنر پرمٹ پر اکیلے گاڑی چلائی جا سکتی ہے؟",
        "answerEn": "No. You cannot drive alone on a learner permit. A licensed driver holding a valid full license must accompany you in the front passenger seat, and an official red 'L' sign must be displayed on front and rear windows.",
        "answerUr": "نہیں! لرنر کے دوران ساتھ لائسنس یافتہ ڈرائیور کا بیٹھنا اور گاڑی پر 'L' کا نشان لگانا لازمی ہے۔"
      },
      {
        "questionEn": "What happens if I fail the practical driving test?",
        "questionUr": "اگر ڈرائیونگ ٹیسٹ فیل ہو جائے تو کیا دوبارہ موقع ملتا ہے؟",
        "answerEn": "If you fail the sign test or driving track, you can re-appear after a mandatory 42-day practice window by paying a nominal re-test fee.",
        "answerUr": "ٹیسٹ فیل ہونے کی صورت میں 42 دن بعد دوبارہ ٹیسٹ دینے کی اجازت ہوتی ہے۔"
      }
    ],
    "contentEn": "## Complete Pakistan Driving License (DLIMS) Guide 2026\nIn 2026, obtaining a driving license in Pakistan has transitioned into a **100% paperless, automated digital ecosystem**. Through the **Driving License Information Management System (DLIMS)** and Police Khidmat Markaz networks, citizens can generate learner permits and renew expired licenses entirely online.\n\n---\n\n## 2026 Complete Fee Structure Across All License Categories\n\n| License Class | Learner Permit Fee | Regular License (5 Years) | Renewal Fee | International Permit |\n| :--- | :--- | :--- | :--- | :--- |\n| **Motorcycle (M/Cycle)** | PKR 500 | PKR 1,000 | PKR 1,000 | N/A |\n| **Motor Car / Jeep (M/Car)** | PKR 500 | PKR 1,800 | PKR 1,800 | PKR 4,000 |\n| **LTV (Light Transport Vehicle)** | PKR 500 | PKR 2,000 | PKR 2,000 | N/A |\n| **HTV (Heavy Transport Vehicle)** | PKR 500 | PKR 2,500 | PKR 2,500 | N/A |\n| **Commercial PSV (Bus/Coach)** | PKR 500 | PKR 3,000 | PKR 3,000 | N/A |\n\n---\n\n## The Computerized Sign Test: Essential Rules\nThe touch-screen test consists of:\n- **Mandatory Signs (Red Circles)**: Stop, No Entry, No Left Turn, Speed Limits.\n- **Warning Signs (Red Triangles)**: Steep Hill, Road Narrows, Pedestrian Crossing, Slippery Road.\n- **Informatory Signs (Blue/Green Rectangles)**: Hospital, Parking, Mosque, Highway Exits.\n\n## In-Depth Breakdown of the Practical Driving Track Test (Car & Motorcycle)\n\n### 1. The L-Shaped Reverse Track Test (Car / LTV)\n- **Track Dimensions**: Standard 10-foot wide asphalt track marked with fluorescent cones.\n- **Task**: Drive forward into the L-track, stop at the perimeter line without crossing, and reverse the entire length of the track into the parking bay using only side mirrors and rearview mirror without knocking down any cone.\n- **Disqualification Criteria**: Hitting or grazing any cone, stopping the vehicle midway for more than 5 seconds, or looking back over your shoulder instead of using mirrors.\n\n### 2. The Motorcycle Slalom & Balance Test\n- **Task**: Drive through an 8-cone zigzag slalom track at steady speed, complete a narrow 90-degree turn, and stop inside the designated stop-box without putting your feet down on the ground.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n---\n\n## Complete Guide to Safe Driving, Demerit Points & Road Safety Laws\nOperating motor vehicles across Pakistan's national highways, urban motorways, and city arteries requires strict compliance with the **National Highway Safety Ordinance (NHSO 2000)** and provincial traffic acts.\n\n### 1. Understanding the Provincial Demerit Points System\nUnder integrated traffic police databases, moving violations carry cumulative demerit points:\n- **Reckless Driving & Overtaking on Blind Curves**: 6 Demerit Points + Impoundment Notice.\n- **Driving Without Valid Insurance / Fitness Certificate**: 4 Demerit Points + Vehicle Fitness Inspection.\n- **Dangerous Loading & Over-Height Cargo (Commercial Pickups)**: 6 Demerit Points + Heavy Commercial Fine.\n- **Failure to Yield to Emergency Ambulances / Fire Brigades**: 8 Demerit Points + Direct License Suspension Hearing.\n\n### 2. Essential Road Trip Vehicle Maintenance Checklist\nBefore embarking on long-distance travel on M-2, M-3, M-5, or N-5:\n- **Tire Tread Depth & Pressure**: Ensure tire tread exceeds 1.6mm depth and tire age does not exceed 5 years. Check cold tire pressure according to manufacturer vehicle door jamb ratings.\n- **Radiator Coolant & Brake Fluid**: Never top up modern aluminum radiators with plain tap water; use certified 50/50 ethylene glycol coolant. Inspect brake fluid reservoir levels and brake pad thickness.\n- **Emergency Kit**: Carry an operational fire extinguisher, reflective breakdown warning triangle, hydraulic jack, spare wheel with proper air pressure, and high-intensity flashlight.\n\n---\n\n## What to Do in Case of a Highway Accident or Breakdown\n1. **Move to Shoulder Lane**: Immediately steer vehicle to the extreme left emergency lane and switch on 4-way hazard hazard flashers.\n2. **Deploy Warning Triangle**: Place the reflective warning triangle 50 meters behind your vehicle to alert oncoming high-speed traffic.\n3. **Dial Motorway Police Helpline 1307**: Call toll-free **1307** from any mobile phone. The National Highways & Motorway Police (NHMP) patrol van will arrive within 10 to 15 minutes to provide free roadside mechanical assistance or safe towing.",
    "contentUr": "## پاکستان ڈرائیونگ لائسنس (DLIMS) گائیڈ 2026\nڈرائیونگ لائسنس مینجمنٹ سسٹم نے لائسنس کے حصول کو انتہائی آسان اور پیپر لیس بنا دیا ہے۔\n\nشہری گھر بیٹھے لرنر پرمٹ حاصل کر سکتے ہیں، آن لائن رینیول کروا سکتے ہیں اور پولیس خدمت مراکز سے اسمارٹ کارڈ حاصل کر سکتے ہیں۔",
    "relatedSlugs": [
      "/traffic/sindh-driving-license-online-apply",
      "/traffic/token-tax-check",
      "/traffic/e-challan-check-online"
    ],
    "feeStructure": [
      {
        "serviceEn": "Learner Driving Permit (Bike/Car/LTV)",
        "serviceUr": "لرنر ڈرائیونگ پرمٹ",
        "normal": "PKR 500",
        "urgent": "Instant Online via DLIMS",
        "executive": "Print e-Permit at Home",
        "validity": "6 Months Validity"
      },
      {
        "serviceEn": "Motorcycle Regular License (5 Years)",
        "serviceUr": "موٹر سائیکل ریگولر لائسنس",
        "normal": "PKR 1,000",
        "urgent": "PKR 1,500 (Khidmat Center)",
        "executive": "Chip Smart Card",
        "validity": "5 Years"
      },
      {
        "serviceEn": "Car / LTV Regular License (5 Years)",
        "serviceUr": "کار / ایل ٹی وی ریگولر لائسنس",
        "normal": "PKR 1,800",
        "urgent": "PKR 2,500 (Delivery Home)",
        "executive": "Chip Smart Card",
        "validity": "5 Years"
      },
      {
        "serviceEn": "Online License Renewal (Paperless)",
        "serviceUr": "آن لائن لائسنس رینیول",
        "normal": "Standard Fee + PKR 180 Courier",
        "urgent": "Dispatched to Home Address",
        "executive": "Digital e-License Download",
        "validity": "5 / 10 Years"
      },
      {
        "serviceEn": "International Driving Permit (IDP)",
        "serviceUr": "بین الاقوامی ڈرائیونگ لائسنس",
        "normal": "PKR 4,000",
        "urgent": "Valid Passport Required",
        "executive": "Counter / Courier",
        "validity": "3 Years (1968 Convention)"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Obtain Digital Learner Driving Permit Online",
        "titleUr": "آن لائن ڈیجیٹل لرنر پرمٹ حاصل کریں",
        "detailEn": "Create an account on dlims.punjab.gov.pk, upload a passport size photo and CNIC copy, pay PKR 500 via 1Link PSID, and download your e-Learner permit instantly.",
        "detailUr": "پورٹل پر اکاؤنٹ بنا کر 500 روپے فیس ادا کریں اور لرنر پرمٹ فوری ڈاؤن لوڈ کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Observe Mandatory 42-Day Learning Period",
        "titleUr": "42 دن کی لازمی لرننگ مدت پوری کریں",
        "detailEn": "By law, you must hold your learner permit for a minimum of 42 calendar days before becoming eligible to sit for the practical and sign tests.",
        "detailUr": "قانون کے مطابق ٹیسٹ دینے کے لیے لرنر بننے کے بعد کم از کم 42 دن کا انتظار لازمی ہے۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Book Appointment at Traffic Testing Center",
        "titleUr": "ٹیسٹنگ سنٹر پر آن لائن اپائنٹمنٹ بک کریں",
        "detailEn": "Book an appointment for your computer-based Traffic Sign Test (e-Sign) and practical track driving test at the nearest licensing center.",
        "detailUr": "قریبی ٹریفک ٹیسٹنگ سنٹر پر کمپیوٹر سائن ٹیسٹ اور ڈرائیونگ ٹیسٹ کی تاریخ بک کریں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Pass Computerized Sign Test",
        "titleUr": "کمپیوٹرائزڈ ٹریفک سائن ٹیسٹ پاس کریں",
        "detailEn": "Answer 10 randomized multiple-choice visual traffic sign questions on a touchscreen kiosk. You must score 80% (8 correct) to clear.",
        "detailUr": "ٹچ اسکرین پر 10 میں سے کم از کم 8 ٹریفک اشاروں کے درست جواب دیں۔"
      },
      {
        "stepNumber": 5,
        "titleEn": "Pass Practical Driving Track Test",
        "titleUr": "پریکٹیکل گاڑی چلانے کا ٹیسٹ پاس کریں",
        "detailEn": "Drive through the standardized parallel parking, L-shape, and reverse maneuvering track without touching the cones.",
        "detailUr": "گاڑی کو بغیر کونز گرائے مقررہ ٹریک اور ریورس پارکنگ میں مکمل چلائیں۔"
      },
      {
        "stepNumber": 6,
        "titleEn": "Receive Smart Card at Your Doorstep",
        "titleUr": "گھر کے پتے پر اسمارٹ کارڈ لائسنس وصول کریں",
        "detailEn": "Upon clearing, your biometric Smart Driving License is printed and dispatched via Pakistan Post express courier to your registered CNIC address within 7-10 days.",
        "detailUr": "کامیابی کے بعد لائسنس پاکستان پوسٹ کے ذریعے 7 سے 10 دن میں آپ کے گھر پہنچا دیا جائے گا۔"
      }
    ]
  },
  "vehicle-registration-transfer": {
    "slug": "vehicle-registration-transfer",
    "fullPath": "/traffic/vehicle-registration-transfer",
    "categoryId": "traffic",
    "titleEn": "Vehicle Ownership Registration Transfer Guide 2026 (Biometric Transfer)",
    "titleUr": "گاڑی اور موٹر سائیکل کی بائے نیم منتقلی گائیڈ 2026 (بایومیٹرک ٹرانسفر)",
    "metaDescriptionEn": "Step-by-step procedure to transfer vehicle ownership in Pakistan. Mandatory NADRA Biometric verification rules for buyer & seller, fee challan, and smart card fees.",
    "metaDescriptionUr": "گاڑی یا موٹر سائیکل کی خریداری کے بعد آن لائن اور نادرا بایومیٹرک کے ذریعے اپنے نام منتقل کروانے کا مکمل طریقہ کار۔",
    "directAnswerEn": "Vehicle Ownership Transfer in 2026 requires biometric verification of both the buyer and seller through NADRA e-Sahulat or the Punjab/Sindh Excise mobile app (Dastak / e-Pay). Open letters are completely outlawed. The transfer fee is PKR 1,500-15,000 based on engine displacement.",
    "directAnswerUr": "گاڑی کی ملکیت ٹرانسفر کروانے کے لیے 2026 میں خریدار اور بیچنے والے دونوں کی نادرا ای سہولت سنٹر پر بائیو میٹرک تصدیق لازمی ہے۔ اوپن لیٹر پر گاڑی خریدنا یا بیچنا قانونی جرم ہے۔ ٹرانسفر فیس انجن سائز کے لحاظ سے 1500 سے 15000 روپے ہے۔",
    "lastVerified": "August 17, 2026",
    "officialSource": {
      "name": "Punjab Excise Registration System",
      "url": "https://excise.punjab.gov.pk/"
    },
    "author": {
      "name": "Editorial Team",
      "role": "Vehicle Ownership Desk"
    },
    "faqs": [
      {
        "questionEn": "Can a vehicle be transferred if the registered owner is abroad or deceased?",
        "questionUr": "اگر گاڑی کا مالک بیرون ملک ہو یا فوت ہو چکا ہو تو کیا طریقہ ہے؟",
        "answerEn": "If the seller is overseas, they must execute a Special Power of Attorney through the Pakistani Embassy/Consulate. If deceased, a NADRA Succession Certificate naming the legal heirs is required before transfer.",
        "answerUr": "بیرون ملک مالک کے لیے سفارت خانے سے پاور آف اٹارنی اور فوت شدہ کے لیے نادرا سکسیشن سرٹیفکیٹ درکار ہوتا ہے۔"
      }
    ],
    "contentEn": "## Vehicle Ownership Transfer & Biometric Rules 2026\nThe Government of Pakistan has **permanently eliminated open transfer letters and blank sale deeds**. Operating or purchasing a vehicle on an open transfer letter is a punishable offense leading to vehicle impoundment and heavy fines.\n\n---\n\n## Why Biometric Verification is Mandatory\n1. **Crime Prevention**: Ensures stolen, tampered, or bank-default vehicles cannot be fraudulently transferred without the owner's knowledge.\n2. **Terrorism & Security**: Prevents vehicles from being used in subversive activities under ghost identities.\n3. **E-Challan Liability**: Ensures that automated speed camera tickets and challans are billed directly to the current actual driver.\n\n## Step-by-Step Biometric Transfer Workflow at NADRA e-Sahulat\n1. **Application Generation**: Seller or buyer enters plate and chassis number on the ePay / Excise portal to generate a 17-digit PSID.\n2. **Seller Biometrics**: The seller visits any authorized NADRA e-Sahulat counter, provides their CNIC, places their right thumb on the optical biometric scanner, and receives a digital clearance receipt.\n3. **Buyer Biometrics**: The buyer completes biometric scanning within the 30-day validity window.\n4. **Automated Excise Sync**: The Excise database automatically updates ownership records and initiates Smart Card printing.\n---\n\n## Comprehensive Document Checklist & Physical Counter Requirements\nWhen preparing your application file for official submission, ensure you carry both original documents and two sets of attested photocopies to prevent counter delays:\n\n1. **Original NADRA CNIC / NICOP / Smart Card**: Must be physically intact with visible chip and unexpired validity date.\n2. **Attested Photocopies of Immediate Dependents**: Father's CNIC, Mother's CNIC, Spouse's CNIC, and Children's Computerized B-Forms (CRC).\n3. **Recent Passport-Sized Color Photographs**: Exactly 4 photographs with a light blue or white background, taken within the last 30 days.\n4. **Proof of Residence & Utility Records**: Paid electricity (LESCO/IESCO/MEPCO/KE) or Sui Gas bills from the last 3 billing cycles matching your stated residential address.\n5. **Computerized Land Revenue / Educational Credentials**: Duly stamped Fard Malkiat, Inteqal registry, or HEC/IBCC attested degree certificates.\n\n---\n\n## Critical Warnings, Common Mistakes & How to Avoid Rejections\nExperienced applicants and civic facilitators report that over 65% of preliminary application delays occur due to avoidable clerical errors. Review this essential caution matrix before submitting your dossier:\n\n| Common Pitfall | Official Consequence | Corrective Preventive Action |\n| :--- | :--- | :--- |\n| **Name Spelling Inconsistency** | Immediate File Hold / Rejection | Cross-check spellings across Matric Certificate, CNIC, and Domicile before submission |\n| **Expired CNIC or Invalid SIM** | Biometric OTP Delivery Failure | Ensure your mobile number is officially registered against your own CNIC with PTA |\n| **Unattested Photocopies** | Counter Bar at Document Desk | Get all photocopies attested by a Grade-17+ gazetted government officer |\n| **Paying Cash to Unauthorized Agents** | Fraud Risk & File Cancellation | Never pay cash to touts outside offices; use only official 1Link PSID or Treasury Challan |\n| **Incomplete Khasra / Khatoni Details** | Field Inspection Disqualification | Obtain an updated *Aks-Shajra* and computerized Fard from your local Arazi Record Center |\n\n---\n\n## Official Grievance Redressal, Helplines & Office Timings\nIf you encounter undue administrative delays, harassment, or demand for unauthorized fees at any departmental counter, immediately register a formal grievance through the designated state oversight channels:\n\n- **Prime Minister's Performance Delivery Unit (PMDU)**: Download the **Pakistan Citizen's Portal** app on Android or iOS and submit a geo-tagged complaint under the relevant ministry.\n- **Federal Ombudsman (Wafaqi Mohtasib)**: Call toll-free helpline **1055** or file an online complaint at `complaint.mohtasib.gov.pk` for federal departments.\n- **Provincial Ombudsman (Mohtasib Punjab / Sindh / KPK)**: Contact regional provincial grievance offices for fast-track local administrative relief.\n- **Standard Government Counter Timings**: Monday through Thursday: 9:00 AM to 5:00 PM (Lunch & Prayer Break: 1:00 PM to 2:00 PM); Friday: 9:00 AM to 12:30 PM.\n\n## Comprehensive Guide to Motor Vehicle Ownership Transfer & Biometric Protocols 2026\nOperating a motor vehicle on an open transfer letter, un-executed stamp paper, or deceased relative's name is strictly illegal in Pakistan, leading to criminal liability, vehicle impoundment, and insurance forfeiture.\n\n### 1. Mandatory Biometric Transfer Steps for Buyer and Seller\n1. **Application Generation**: Seller or buyer enters plate and chassis number on the ePay / Excise portal to generate a 17-digit PSID.\n2. **Seller Biometrics**: The seller visits any authorized NADRA e-Sahulat counter, provides their CNIC, places their right thumb on the optical biometric scanner, and receives a digital clearance receipt.\n3. **Buyer Biometrics**: The buyer completes biometric scanning within the 30-day validity window.\n4. **Automated Excise Sync**: The Excise database automatically updates ownership records and initiates Smart Card printing.\n\n### 2. Transfer of Vehicles with Bank Hypothecation (HPA Leased Cars)\nIf a vehicle was purchased on bank lease, the owner must obtain an official **Bank Clearance Certificate (NOC)** and Form 35 (Termination of Hypothecation Agreement) signed by the bank's authorized branch manager before the Excise department will remove the bank lien and permit private transfer.\n\n---\n\n## Complete Guide to Safe Driving, Demerit Points & Road Safety Laws\nOperating motor vehicles across Pakistan's national highways, urban motorways, and city arteries requires strict compliance with the **National Highway Safety Ordinance (NHSO 2000)** and provincial traffic acts.\n\n### 1. Understanding the Provincial Demerit Points System\nUnder integrated traffic police databases, moving violations carry cumulative demerit points:\n- **Reckless Driving & Overtaking on Blind Curves**: 6 Demerit Points + Impoundment Notice.\n- **Driving Without Valid Insurance / Fitness Certificate**: 4 Demerit Points + Vehicle Fitness Inspection.\n- **Dangerous Loading & Over-Height Cargo (Commercial Pickups)**: 6 Demerit Points + Heavy Commercial Fine.\n- **Failure to Yield to Emergency Ambulances / Fire Brigades**: 8 Demerit Points + Direct License Suspension Hearing.\n\n### 2. Essential Road Trip Vehicle Maintenance Checklist\nBefore embarking on long-distance travel on M-2, M-3, M-5, or N-5:\n- **Tire Tread Depth & Pressure**: Ensure tire tread exceeds 1.6mm depth and tire age does not exceed 5 years. Check cold tire pressure according to manufacturer vehicle door jamb ratings.\n- **Radiator Coolant & Brake Fluid**: Never top up modern aluminum radiators with plain tap water; use certified 50/50 ethylene glycol coolant. Inspect brake fluid reservoir levels and brake pad thickness.\n- **Emergency Kit**: Carry an operational fire extinguisher, reflective breakdown warning triangle, hydraulic jack, spare wheel with proper air pressure, and high-intensity flashlight.\n\n---\n\n## What to Do in Case of a Highway Accident or Breakdown\n1. **Move to Shoulder Lane**: Immediately steer vehicle to the extreme left emergency lane and switch on 4-way hazard hazard flashers.\n2. **Deploy Warning Triangle**: Place the reflective warning triangle 50 meters behind your vehicle to alert oncoming high-speed traffic.\n3. **Dial Motorway Police Helpline 1307**: Call toll-free **1307** from any mobile phone. The National Highways & Motorway Police (NHMP) patrol van will arrive within 10 to 15 minutes to provide free roadside mechanical assistance or safe towing.",
    "contentUr": "## گاڑی کی ملکیت ٹرانسفر اور بائیو میٹرک گائیڈ 2026\nاوپن لیٹر پر گاڑی خریدنا یا چلانا مکمل طور پر بند کر دیا گیا ہے۔\n\nاب خریدار اور فروخت کنندہ دونوں کی نادرا ای سہولت سے فنگر پرنٹ بائیو میٹرک تصدیق کے بعد ہی نیا اسمارٹ کارڈ جاری کیا جاتا ہے۔",
    "relatedSlugs": [
      "/traffic/token-tax-check",
      "/traffic/e-challan-check-by-cnic"
    ],
    "feeStructure": [
      {
        "serviceEn": "Motorcycle Ownership Transfer Fee",
        "serviceUr": "موٹر سائیکل ٹرانسفر فیس",
        "normal": "PKR 500 - 1,000",
        "urgent": "Biometric Verified",
        "executive": "Smart Card Re-issued",
        "validity": "Permanent Transfer"
      },
      {
        "serviceEn": "Cars up to 1000cc Transfer Fee",
        "serviceUr": "کار ٹرانسفر فیس (1000 سی سی تک)",
        "normal": "PKR 2,500 - 4,000",
        "urgent": "Filer Rate Concession",
        "executive": "Smart Card Re-issued",
        "validity": "Permanent Transfer"
      },
      {
        "serviceEn": "Cars 1001cc to 1800cc Transfer Fee",
        "serviceUr": "کار ٹرانسفر فیس (1001 تا 1800 سی سی)",
        "normal": "PKR 5,000 - 12,000",
        "urgent": "Withholding Tax Included",
        "executive": "Smart Card Re-issued",
        "validity": "Permanent Transfer"
      },
      {
        "serviceEn": "Biometric Verification Fee (NADRA Counter)",
        "serviceUr": "نادرا بائیو میٹرک فیس",
        "normal": "PKR 150 per person",
        "urgent": "Seller & Buyer Each",
        "executive": "Instant Token Print",
        "validity": "30 Days Validity"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Initiate Transfer on ePay Punjab / Excise Portal",
        "titleUr": "ای پے پورٹل پر ٹرانسفر درخواست درج کریں",
        "detailEn": "Buyer or seller inputs vehicle registration number and new owner CNIC into the provincial Excise vehicle transfer portal.",
        "detailUr": "ای پے پورٹل پر گاڑی کا نمبر اور نئے مالک کا شناختی کارڈ نمبر درج کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Seller Biometric Verification at NADRA",
        "titleUr": "بیچنے والے (سیلر) کی نادرا بائیو میٹرک",
        "detailEn": "The registered owner (seller) visits any NADRA e-Sahulat kiosk or Excise office to scan right/left thumb biometrics authorizing sale.",
        "detailUr": "گاڑی کا پرانا مالک کسی بھی نادرا ای سہولت سنٹر جا کر فنگر پرنٹ کی تصدیق کرے۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Buyer Biometric Verification at NADRA",
        "titleUr": "خریدار (بائر) کی نادرا بائیو میٹرک",
        "detailEn": "The prospective purchaser (buyer) completes thumb biometric verification within 30 days to accept legal liability.",
        "detailUr": "خریدار 30 دن کے اندر نادرا سنٹر سے اپنی بائیو میٹرک تصدیق مکمل کرے۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Pay Transfer Fees via 1Bill PSID",
        "titleUr": "پی ایس آئی ڈی کے ذریعے ٹرانسفر فیس ادا کریں",
        "detailEn": "Pay the calculated ownership transfer fee, motor vehicle tax, and smart card fee via mobile banking or ATM.",
        "detailUr": "بینکنگ ایپ یا ایزی پیسہ سے 17 ہندسوں کے پی ایس آئی ڈی پر فیس ادا کریں۔"
      },
      {
        "stepNumber": 5,
        "titleEn": "New Smart Card Dispatched to Buyer Address",
        "titleUr": "نیا اسمارٹ کارڈ گھر کے پتے پر وصول کریں",
        "detailEn": "Upon automated system matching, the Excise department prints a new Smart Card bearing the buyer's name and delivers via Pakistan Post courier.",
        "detailUr": "ایکسائز ڈیپارٹمنٹ نیا اسمارٹ کارڈ پرنٹ کر کے خریدار کے گھر کوریئر کر دے گا۔"
      }
    ]
  }
};
