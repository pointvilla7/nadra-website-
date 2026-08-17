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
    "directAnswerEn": "To check and print your IESCO electricity bill online for Islamabad, Rawalpindi, Attock, Chakwal, or Jhelum, enter your 14-digit Reference Number or 10-digit Customer ID at iesco.com.pk or bill.pitb.gov.pk.",
    "directAnswerUr": "آئیسکو آن لائن بجلی بل دیکھنے کے لیے اپنا 14 ہندسوں کا ریفرنس نمبر iesco.com.pk یا bill.pitb.gov.pk پر درج کریں۔",
    "lastVerified": "August 16, 2026",
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
            "serviceEn": "IESCO Online Bill Print",
            "serviceUr": "آئیسکو ڈپلیکیٹ بل پرنٹ",
            "normal": "FREE",
            "urgent": "Instant Download",
            "executive": "PDF Download"
        }
    ],
    "steps": [
        {
            "stepNumber": 1,
            "titleEn": "Locate 14-Digit Reference Number",
            "titleUr": "14 ہندسوں کا ریفرنس نمبر تلاش کریں",
            "detailEn": "Find your 14-digit number printed on previous month bill copy.",
            "detailUr": "پرانے بل کے اوپر سے 14 ہندسوں کا ریفرنس نمبر دیکھیں۔"
        }
    ],
    "faqs": [
        {
            "questionEn": "Where can I pay my IESCO bill online?",
            "questionUr": "آئیسکو کا بل آن لائن کہاں جمع ہو سکتا ہے؟",
            "answerEn": "Pay via JazzCash, Easypaisa, 1Link mobile banking app, or ePay Punjab.",
            "answerUr": "جاز کیش، ایزی پیسہ یا تمام بینکنگ ایپس سے ادا کریں۔"
        }
    ],
    "contentEn": "IESCO online bill download guide and complaint helpline numbers.",
    "contentUr": "آئیسکو آن لائن بجلی بل دیکھنے اور پرنٹ کا طریقہ۔",
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
    "directAnswerEn": "FESCO consumers in Faisalabad, Jhang, Sargodha, Chiniot, and Toba Tek Singh can view and print duplicate electricity bills online by entering their 14-digit Reference Number at fesco.com.pk or bill.pitb.gov.pk.",
    "directAnswerUr": "فیسکو فیصل آباد آن لائن بجلی بل دیکھنے کے لیے اپنا 14 ہندسوں کا ریفرنس نمبر fesco.com.pk پر درج کریں۔",
    "lastVerified": "August 16, 2026",
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
            "serviceUr": "فیسکو بل آن لائن",
            "normal": "FREE",
            "urgent": "Instant View",
            "executive": "PDF Print"
        }
    ],
    "steps": [
        {
            "stepNumber": 1,
            "titleEn": "Enter 14-Digit Reference Number",
            "titleUr": "14 ہندسوں کا ریفرنس نمبر درج کریں",
            "detailEn": "Type reference number without spaces and click search.",
            "detailUr": "ریفرنس نمبر درج کر کے سرچ پر کلک کریں۔"
        }
    ],
    "faqs": [
        {
            "questionEn": "What is FESCO customer complaint helpline number?",
            "questionUr": "فیسکو کسٹمر ہیلپ لائن نمبر کیا ہے؟",
            "answerEn": "Call 118 or 0800-88844 for electricity outage complaints.",
            "answerUr": "شکایت کے لیے 118 یا 0800-88844 پر کال کریں۔"
        }
    ],
    "contentEn": "FESCO Faisalabad duplicate bill download and payment instructions.",
    "contentUr": "فیسکو بجلی بل آن لائن دیکھنے کی مکمل معلوماتی گائیڈ۔",
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
    "directAnswerEn": "MEPCO electricity consumers in Multan, Bahawalpur, Sahiwal, D.G. Khan, and Rahim Yar Khan can check and download duplicate bills online by entering their 14-digit Reference Number at mepco.com.pk or bill.pitb.gov.pk.",
    "directAnswerUr": "میپکو ملتان آن لائن بجلی بل حاصل کرنے کے لیے اپنا 14 ہندسوں کا ریفرنس نمبر mepco.com.pk پر درج کریں۔",
    "lastVerified": "August 16, 2026",
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
            "serviceEn": "MEPCO Duplicate Bill Print",
            "serviceUr": "میپکو بل پرنٹ",
            "normal": "FREE",
            "urgent": "Instant PDF",
            "executive": "Online Gateway"
        }
    ],
    "steps": [
        {
            "stepNumber": 1,
            "titleEn": "Enter Reference Number",
            "titleUr": "ریفرنس نمبر درج کریں",
            "detailEn": "Enter 14-digit MEPCO reference number to generate duplicate bill PDF.",
            "detailUr": "14 ہندسوں کا نمبر درج کر کے آن لائن بل لیں۔"
        }
    ],
    "faqs": [
        {
            "questionEn": "How to pay MEPCO bill online?",
            "questionUr": "میپکو بل آن لائن کیسے ادا کریں؟",
            "answerEn": "Pay via 1Link banking, JazzCash, or Easypaisa app.",
            "answerUr": "جاز کیش یا موبائل بینکنگ سے ادا کریں۔"
        }
    ],
    "contentEn": "MEPCO Multan online duplicate bill download and helpline directory.",
    "contentUr": "میپکو جنوبی پنجاب آن لائن بل دیکھنے کا طریقہ۔",
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
    "directAnswerEn": "To view and print your SSGC (Sui Southern Gas Company) bill online for Sindh or Balochistan (Karachi, Hyderabad, Quetta), enter your 10-digit Customer Number at ssgc.com.pk. SNGPL serves Punjab/KPK while SSGC serves Southern Pakistan.",
    "directAnswerUr": "ایس ایس جی سی آن لائن گیس بل دیکھنے کے لیے اپنا 10 ہندسوں کا کسٹمر نمبر ssgc.com.pk پر درج کریں۔",
    "lastVerified": "August 16, 2026",
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
            "serviceEn": "SSGC Online Bill Download",
            "serviceUr": "ایس ایس جی سی بل پرنٹ",
            "normal": "FREE",
            "urgent": "Instant View",
            "executive": "PDF Print"
        }
    ],
    "steps": [
        {
            "stepNumber": 1,
            "titleEn": "Locate 10-Digit SSGC Customer Number",
            "titleUr": "10 ہندسوں کا کسٹمر نمبر درج کریں",
            "detailEn": "Enter your 10-digit customer number printed on top-left of previous gas bill.",
            "detailUr": "بل کے اوپر درج 10 ہندسوں کا کسٹمر نمبر درج کریں۔"
        }
    ],
    "faqs": [
        {
            "questionEn": "What is the difference between SSGC and SNGPL?",
            "questionUr": "ایس ایس جی سی اور ایس این جی پی ایل میں کیا فرق ہے؟",
            "answerEn": "SSGC serves Sindh & Balochistan, while SNGPL serves Punjab & KPK.",
            "answerUr": "ایس ایس جی سی سندھ اور بلوچستان کے لیے ہے جبکہ ایس این جی پی ایل پنجاب اور کے پی کے کے لیے ہے۔"
        }
    ],
    "contentEn": "SSGC Sindh and Balochistan duplicate bill download and customer care portal.",
    "contentUr": "سوئی سدرن گیس بل آن لائن دیکھنے کا طریقہ۔",
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
    "directAnswerEn": "If your monthly electricity bill exceeds your budget, you are legally entitled under NEPRA rules to request bill installments (up to 3 equal monthly installments) at your local DISCO Customer Services Center (LESCO/IESCO/K-Electric) before the due date.",
    "directAnswerUr": "نیپرا قوانین کے تحت آپ اپنا بجلی کا بل اپنے ڈسکو کسٹمر سینٹر (لیسکو / آئیسکو) سے 3 آسان اقساط میں کروا سکتے ہیں۔",
    "lastVerified": "August 16, 2026",
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
            "serviceEn": "Bill Installment Processing",
            "serviceUr": "بل اقساط منظوری",
            "normal": "FREE",
            "urgent": "Customer Center",
            "executive": "NEPRA Approved"
        }
    ],
    "steps": [
        {
            "stepNumber": 1,
            "titleEn": "Visit DISCO Customer Services Center",
            "titleUr": "ڈسکو کسٹمر سروسز سینٹر تشریف لے جائیں",
            "detailEn": "Bring original bill before due date to get SDO or XEN approval stamp for installments.",
            "detailUr": "بل کی آخری تاریخ سے پہلے ایس ڈی او یا ایکسین کے دفتر سے اقساط کی مہر لگوائیں۔"
        }
    ],
    "faqs": [
        {
            "questionEn": "Can I get bill installments done online?",
            "questionUr": "کیا بجلی کا بل آن لائن اقساط میں ہو سکتا ہے؟",
            "answerEn": "K-Electric allows online installments via KE Live app. DISCOs (LESCO/IESCO) require customer center stamp.",
            "answerUr": "کے الیکٹرک کی ایپ سے آن لائن ہو جاتا ہے جبکہ لیسکو کے لیے کسٹمر سینٹر جانا پڑتا ہے۔"
        }
    ],
    "contentEn": "NEPRA consumer protection guidelines for securing bill installments and avoiding disconnection.",
    "contentUr": "بجلی کے بوجھ سے بچنے کے لیے بل اقساط کروانے کی مکمل گائیڈ۔",
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
    "directAnswerEn": "To apply for Federal Public Service Commission (FPSC) jobs, download Treasury Challan Form 32-A from fpsc.gov.pk, pay fee at NBP or State Bank (BS-16/17: PKR 300, BS-18: PKR 750, BS-19: PKR 1,200), and submit the online application.",
    "directAnswerUr": "ایف پی ایس سی سیٹوں کے لیے 300 روپے چالان فارم 32-A نیشنل بینک میں جمع کروا کر fpsc.gov.pk پر آن لائن درخواست فارم پُر کریں۔",
    "lastVerified": "August 16, 2026",
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
            "serviceEn": "BPS 16 to BPS 17 Fee",
            "serviceUr": "گریڈ 16 سے 17 کی فیس",
            "normal": "PKR 300",
            "urgent": "NBP Branch Deposit",
            "executive": "Online Form"
        },
        {
            "serviceEn": "BPS 18 Fee",
            "serviceUr": "گریڈ 18 کی فیس",
            "normal": "PKR 750",
            "urgent": "NBP Branch Deposit",
            "executive": "Online Form"
        }
    ],
    "steps": [
        {
            "stepNumber": 1,
            "titleEn": "Pay Treasury Challan at NBP",
            "titleUr": "نیشنل بینک میں چالان فیس جمع کروائیں",
            "detailEn": "Fill Challan Form 32-A with case number and deposit cash at National Bank.",
            "detailUr": "چالان فارم 32-A پر کیس نمبر لکھ کر این بی پی میں فیس جمع کروائیں۔"
        }
    ],
    "faqs": [
        {
            "questionEn": "What is the age relaxation rule for FPSC jobs?",
            "questionUr": "ایف پی ایس سی میں عمر کی کتنی رعایت ملتی ہے؟",
            "answerEn": "General 5-year age relaxation is granted above the prescribed age limit for federal posts.",
            "answerUr": "تمام وفاقی اسامیوں پر 5 سال کی عمومی رعایت دی جاتی ہے۔"
        }
    ],
    "contentEn": "FPSC recruitment guide for CSS and General Recruitment competitive examinations.",
    "contentUr": "وفاقی پبلک سروس کمیشن کے ٹیسٹس اور سلیبس کی مکمل تفصیلات۔",
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
    "directAnswerEn": "Apply online for Sindh Public Service Commission (SPSC) vacancies by depositing PKR 500 fee via SPSC Challan at NBP, registering your profile on spsc.gov.pk, and uploading required academic records.",
    "directAnswerUr": "ایس پی ایس سی سندھ کی نوکریوں کے لیے 500 روپے چالان فیس این بی پی میں جمع کروا کر spsc.gov.pk پر آن لائن فارم پر کریں۔",
    "lastVerified": "August 16, 2026",
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
            "serviceEn": "SPSC Application Fee",
            "serviceUr": "ایس پی ایس سی درخواست فیس",
            "normal": "PKR 500",
            "urgent": "NBP Deposit",
            "executive": "Online Portal"
        }
    ],
    "steps": [
        {
            "stepNumber": 1,
            "titleEn": "Register on SPSC Online Portal",
            "titleUr": "ایس پی ایس سی پورٹل پر اکاؤنٹ بنائیں",
            "detailEn": "Create profile on spsc.gov.pk with CNIC and mobile number.",
            "detailUr": "spsc.gov.pk پر اکاؤنٹ بنا کر کوائف درج کریں۔"
        }
    ],
    "faqs": [
        {
            "questionEn": "Is Sindh Domicile mandatory for SPSC jobs?",
            "questionUr": "کیا ایس پی ایس سی کے لیے سندھ کا ڈومیسائل لازمی ہے؟",
            "answerEn": "Yes, applicants must possess valid Sindh Urban or Sindh Rural Domicile.",
            "answerUr": "جی ہاں! سندھ شہری یا دیہی کا ڈومیسائل ہونا لازمی ہے۔"
        }
    ],
    "contentEn": "SPSC Sindh competitive examination guide and admission slip portal instructions.",
    "contentUr": "سندھ کمیشن کے امتحانات اور آن لائن چالان کا طریقہ۔",
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
    "directAnswerEn": "To apply for KPPSC vacancies in Khyber Pakhtunkhwa, pay the PKR 500 application fee via JazzCash or Easypaisa, log into kppsc.gov.pk, and fill the online form before the closing date.",
    "directAnswerUr": "کے پی پی ایس سی کے لیے 500 روپے فیس ایزی پیسہ یا جاز کیش سے ادا کر کے kppsc.gov.pk پر آن لائن فارم پر کریں۔",
    "lastVerified": "August 16, 2026",
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
            "serviceEn": "KPPSC Exam Fee",
            "serviceUr": "کے پی پی ایس سی فیس",
            "normal": "PKR 500",
            "urgent": "Easypaisa / JazzCash",
            "executive": "Online Portal"
        }
    ],
    "steps": [
        {
            "stepNumber": 1,
            "titleEn": "Pay Fee via JazzCash / Easypaisa",
            "titleUr": "جاز کیش یا ایزی پیسہ سے فیس ادا کریں",
            "detailEn": "Pay KPPSC fee under Govt Payments menu to receive Transaction ID.",
            "detailUr": "موبائل ایپ سے فیس ادا کر کے ٹی آر ایکس آئی ڈی نوٹ کریں۔"
        }
    ],
    "faqs": [
        {
            "questionEn": "Is KPK Domicile mandatory for KPPSC recruitment?",
            "questionUr": "کیا کے پی پی ایس سی کے لیے کے پی کے کا ڈومیسائل ہونا لازمی ہے؟",
            "answerEn": "Yes, candidates must possess valid KPK / Merged Districts (FATA) domicile.",
            "answerUr": "جی ہاں! کے پی کے یا قبائلی اضلاع کا ڈومیسائل ہونا لازمی ہے۔"
        }
    ],
    "contentEn": "KPPSC online application process and screening test pattern details.",
    "contentUr": "کے پی کے پبلک سروس کمیشن کے آن لائن پورٹل کی مکمل گائیڈ۔",
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
    "directAnswerEn": "Register for Pak Army Commissioned Officer courses (PMA Long Course, Lady Cadet Course, Technical Cadet Course) online at joinpakarmy.gov.pk or visit your nearest Army Selection and Recruitment Centre (AS&RC). Registration is 100% FREE.",
    "directAnswerUr": "پاک فوج میں سیکنڈ لیفٹیننٹ بننے کے لیے joinpakarmy.gov.pk پر مفت آن لائن رجسٹریشن کریں۔ فزیکل اور میڈیکل ٹیسٹ سلیکشن سینٹر میں ہوتے ہیں۔",
    "lastVerified": "August 16, 2026",
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
            "serviceEn": "Army Online Registration",
            "serviceUr": "آن لائن رجسٹریشن فیس",
            "normal": "100% FREE",
            "urgent": "AS&RC Exam",
            "executive": "No Charge"
        }
    ],
    "steps": [
        {
            "stepNumber": 1,
            "titleEn": "Register on Official Join Pak Army Portal",
            "titleUr": "آن لائن پورٹل پر رجسٹریشن کریں",
            "detailEn": "Fill personal details, matric/FSc marks, and select nearest AS&RC center.",
            "detailUr": "joinpakarmy.gov.pk پر فارم پر کر کے رجسٹریشن سلپ ڈاؤن لوڈ کریں۔"
        }
    ],
    "faqs": [
        {
            "questionEn": "What is the minimum height requirement for PMA Long Course?",
            "questionUr": "پی ایم اے لانگ کورس کے لیے کم از کم قد کتنا ہونا چاہیے؟",
            "answerEn": "Minimum height for male candidates is 5 ft 4 in (162.5 cm) and for female candidates is 5 ft (152.4 cm).",
            "answerUr": "مرد امیدواروں کے لیے کم از کم قد 5 فٹ 4 انچ ہونا لازمی ہے۔"
        }
    ],
    "contentEn": "Complete selection criteria and physical standards for Pakistan Army commissioned officer entry.",
    "contentUr": "پاک فوج میں آفیسرز کی بھرتی کا فزیکل اور انیشل ٹیسٹ کا گائیڈ۔",
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
    "directAnswerEn": "Primary & Secondary Healthcare Department Punjab recruits Medical Officers (BPS-17), Women Medical Officers, and Charge Nurses (BPS-16) online at pshealthpunjab.gop.pk or via PPSC. Applications require valid PMDC/PNC registration.",
    "directAnswerUr": "پنجاب ہیلتھ ڈیپارٹمنٹ میں ڈاکٹرز اور نرسوں کی بھرتی pshealthpunjab.gop.pk پورٹل پر ہوتی ہے۔ PMDC یا PNC رجسٹریشن لازمی ہے۔",
    "lastVerified": "August 16, 2026",
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
            "serviceEn": "Departmental Online Application",
            "serviceUr": "محکمہ صحت آن لائن فارم",
            "normal": "FREE / PPSC Fee",
            "urgent": "P&SHD Portal",
            "executive": "Online Registration"
        }
    ],
    "steps": [
        {
            "stepNumber": 1,
            "titleEn": "Check PMDC / PNC Registration Status",
            "titleUr": "پی ایم ڈی سی یا نرسنگ کونسل رجسٹریشن جانچیں",
            "detailEn": "Ensure your PMDC (PMC) or Pakistan Nursing Council license is valid.",
            "detailUr": "اپنا اصل میڈیکل یا نرسنگ کونسل کا لائسنس ساتھ رکھیں۔"
        }
    ],
    "faqs": [
        {
            "questionEn": "Are health department ad-hoc jobs eligible for regularisation?",
            "questionUr": "کیا ایڈہاک پر بھرتی ڈاکٹرز اور نرسیں ریگولر ہوتی ہیں؟",
            "answerEn": "Yes, ad-hoc doctors and nurses regularise their services upon passing PPSC screening tests.",
            "answerUr": "جی ہاں! پی پی ایس سی ٹیسٹ پاس کرنے کے بعد سروس ریگولر کر دی جاتی ہے۔"
        }
    ],
    "contentEn": "Punjab Health Department doctor, nurse, and paramedic recruitment guidelines.",
    "contentUr": "پنجاب کے سرکاری ہسپتالوں میں میڈیکل سٹاف کی بھرتی کا طریقہ۔",
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
    "directAnswerEn": "Chief Minister Punjab Green Tractor Scheme provides a massive flat subsidy of PKR 1,000,000 (10 Lakhs) per tractor for farmers owning between 6 to 50 acres of agricultural land in Punjab. Apply online at gts.punjab.gov.pk.",
    "directAnswerUr": "گرین ٹریکٹر سکیم کے تحت 6 سے 50 ایکڑ زرعی زمین کے مالک کسانوں کو 10 لاکھ روپے کی نقد سبسڈی دی جاتی ہے۔ آن لائن اپلائی gts.punjab.gov.pk پر کریں۔",
    "lastVerified": "August 16, 2026",
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
            "serviceEn": "Green Tractor Subsidy Grant",
            "serviceUr": "گرین ٹریکٹر سبسڈی گرانٹ",
            "normal": "PKR 1,000,000 Subsidy",
            "urgent": "Balloting Winner",
            "executive": "Govt Subsidized"
        }
    ],
    "steps": [
        {
            "stepNumber": 1,
            "titleEn": "Verify Agricultural Land Record (PLRA)",
            "titleUr": "زرعی رقبہ کی تصدیق (PLRA)",
            "detailEn": "Ensure land ownership (6 to 50 acres) is recorded under your CNIC in Land Records.",
            "detailUr": "پٹوار خانے یا کمپیوٹرائزڈ لینڈ ریکارڈز سے اپنے 6 سے 50 ایکڑ کی فرد لیں۔"
        }
    ],
    "faqs": [
        {
            "questionEn": "How is the winner selected for Green Tractor Scheme?",
            "questionUr": "گرین ٹریکٹر سکیم کے کامیاب امیدوار کا انتخاب کیسے ہوتا ہے؟",
            "answerEn": "Selection is done via transparent computerized electronic balloting per district.",
            "answerUr": "شفاف ترین کمپیوٹرائزڈ قرعہ اندازی کے ذریعے ضلع وائز انتخاب ہوتا ہے۔"
        }
    ],
    "contentEn": "Punjab Agriculture Department Green Tractor subsidy application details and balloting schedule.",
    "contentUr": "کاشتکاروں کے لیے حکومت پنجاب کی 10 لاکھ کی ٹریکٹر سبسڈی سکیم۔",
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
    "directAnswerEn": "State Bank of Pakistan's Asaan Mobile Account (AMA) platform lets any mobile phone user open an instant digital bank account without internet by dialing *2262# on any SIM card. Choose your bank, enter CNIC issuance date, and start sending/receiving money.",
    "directAnswerUr": "بغیر انٹرنیٹ کے کسی بھی موبائل سے *2262# کوڈ ڈائل کر کے منٹوں میں آسان بینک اکاؤنٹ بنائیں۔ اپنی مرضی کا بینک منتخب کر کے شناختی کارڈ کی تاریخ اجراء درج کریں۔",
    "lastVerified": "August 16, 2026",
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
            "serviceEn": "AMA Account Opening (*2262#)",
            "serviceUr": "آسان موبائل اکاؤنٹ فیس",
            "normal": "100% FREE",
            "urgent": "Instant Setup",
            "executive": "Zero Fee"
        }
    ],
    "steps": [
        {
            "stepNumber": 1,
            "titleEn": "Dial *2262# from Mobile Phone",
            "titleUr": "موبائل فون سے *2262# کوڈ ڈائل کریں",
            "detailEn": "Dial USSD code *2262# from any Jazz, Telenor, Zong, or Ufone SIM card registered on your CNIC.",
            "detailUr": "اپنی ہی شناختی کارڈ پر رجسٹرڈ سم سے *2262# ملائیں۔"
        }
    ],
    "faqs": [
        {
            "questionEn": "Is smartphone internet required for *2262# account?",
            "questionUr": "کیا آسان موبائل اکاؤنٹ کے لیے سمارٹ فون یا انٹرنیٹ چاہیے؟",
            "answerEn": "No! Works on basic feature keypad phones via USSD menu without internet.",
            "answerUr": "نہیں! یہ تمام سادہ فونز پر بغیر انٹرنیٹ کے کام کرتا ہے۔"
        }
    ],
    "contentEn": "State Bank financial inclusion guide for zero-cost instant AMA digital bank accounts.",
    "contentUr": "بغیر بینک گئے اور بغیر انٹرنیٹ کے ڈیجیٹل اکاؤنٹ کھولنے کی آسان ترین معلومات۔",
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
    "directAnswerEn": "Akhuwat Islamic Microfinance provides 100% interest-free loans (0% Riba) ranging from PKR 50,000 to PKR 500,000 for small shopkeepers, female entrepreneurs, and home construction. Apply at any local Akhuwat branch with CNIC and guarantor.",
    "directAnswerUr": "اخوت فاؤنڈیشن 50,000 سے 5 لاکھ روپے تک کا 100 فیصد بلا سود قرضہ فراہم کرتی ہے۔ اپلائی کے لیے قریبی اخوت برانچ میں فارم جمع کروائیں۔",
    "lastVerified": "August 16, 2026",
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
            "serviceEn": "Akhuwat Interest-Free Loan",
            "serviceUr": "اخوت بلا سود قرضہ",
            "normal": "0% Interest",
            "urgent": "Branch Application",
            "executive": "Zero Riba"
        }
    ],
    "steps": [
        {
            "stepNumber": 1,
            "titleEn": "Visit Nearest Akhuwat Branch",
            "titleUr": "قریبی اخوت اسلامک مائیکرو فنانس برانچ جائیں",
            "detailEn": "Obtain free application form at your local Akhuwat branch office.",
            "detailUr": "مقامی اخوت برانچ سے فارم حاصل کریں۔"
        }
    ],
    "faqs": [
        {
            "questionEn": "Does Akhuwat charge any interest or service fee?",
            "questionUr": "کیا اخوت فاؤنڈیشن کوئی سود یا سروس چارجز لیتی ہے؟",
            "answerEn": "No, Akhuwat operates strictly on Islamic Qarz-e-Hasana principles with 0% interest.",
            "answerUr": "جی نہیں! اخوت کا سسٹم 100 فیصد قرض حسانہ پر مبنی ہے۔"
        }
    ],
    "contentEn": "Akhuwat Islamic Microfinance zero-interest business loan form instructions.",
    "contentUr": "اخوت فاؤنڈیشن سے بلا سود قرضہ حاصل کرنے کا مکمل شرعی گائیڈ۔",
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
    "directAnswerEn": "House Building Finance Company (HBFC) offers the 'Ghar Pakistan Scheme' providing up to PKR 4,500,000 (4.5 Million) home construction and home purchase financing over 3 to 20 years with fixed discounted mark-up options. Apply at hbfc.com.pk.",
    "directAnswerUr": "ایچ بی ایف سی گھر پاکستان سکیم کے تحت 45 لاکھ روپے تک مکان کی تعمیر یا خریداری کے لیے 20 سالہ آسان اقساط پر قرضہ فراہم کیا جاتا ہے۔",
    "lastVerified": "August 16, 2026",
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
            "serviceEn": "HBFC Home Financing (Up to 4.5M)",
            "serviceUr": "ایچ بی ایف سی ہاؤسنگ قرضہ",
            "normal": "Fixed Subsidized Rate",
            "urgent": "Up to 20 Yrs",
            "executive": "HBFC Branch"
        }
    ],
    "steps": [
        {
            "stepNumber": 1,
            "titleEn": "Calculate Monthly Repayment at HBFC",
            "titleUr": "ایچ بی ایف سی پورٹل پر اقساط جانچیں",
            "detailEn": "Visit hbfc.com.pk and use home loan calculator for 10, 15, or 20-year term.",
            "detailUr": "hbfc.com.pk پر جا کر ماہانہ قسط کیلکولیٹ کریں۔"
        }
    ],
    "faqs": [
        {
            "questionEn": "What is the maximum repayment period for HBFC home loan?",
            "questionUr": "ایچ بی ایف سی ہاؤسنگ لون کی زیادہ سے زیادہ مدت کتنی ہے؟",
            "answerEn": "HBFC loans can be repaid over a flexible 3 to 20-year tenure.",
            "answerUr": "قرضے کی واپسی کے لیے 3 سے 20 سال کی لچکدار مدت ملتی ہے۔"
        }
    ],
    "contentEn": "HBFC Pakistan home construction and apartment purchase mortgage scheme details.",
    "contentUr": "ایچ بی ایف سی سے سستا مکان بنانے کا آن لائن فارم اور طریقہ۔",
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
    "directAnswerEn": "Islamabad Capital Territory (ICT) Traffic Police e-challans can be checked online by entering your Vehicle Registration Number at islamabadtraffic.gov.pk or via the ICT Smart City App. Pay fine instantly via 1Link PSID or JazzCash.",
    "directAnswerUr": "اسلام آباد کا ای چالان دیکھنے کے لیے اپنا گاڑی نمبر islamabadtraffic.gov.pk پر درج کریں اور 1Link یا جاز کیش سے فیس ادا کریں۔",
    "lastVerified": "August 16, 2026",
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
            "serviceEn": "ICT E-Challan Lookup",
            "serviceUr": "اسلام آباد ای چالان پورٹل",
            "normal": "FREE",
            "urgent": "Instant View",
            "executive": "Online Payment"
        }
    ],
    "steps": [
        {
            "stepNumber": 1,
            "titleEn": "Enter Vehicle Registration on ICT Portal",
            "titleUr": "اسلام آباد پورٹل پر گاڑی کا نمبر لکھیں",
            "detailEn": "Visit islamabadtraffic.gov.pk, enter registration number, and view violation details.",
            "detailUr": "پورٹل پر گاڑی نمبر درج کر کے غیر ادا شدہ چالان دیکھیں۔"
        }
    ],
    "faqs": [
        {
            "questionEn": "How to pay ICT Islamabad e-challan via mobile app?",
            "questionUr": "اسلام آباد کا ای چالان موبائل ایپ سے کیسے ادا کریں؟",
            "answerEn": "Use JazzCash / Easypaisa → Select 1Bill Govt Payments → Enter 18-digit PSID.",
            "answerUr": "موبائل ایپ میں 1Bill سلیکٹ کر کے 18 ہندسوں کا PSID درج کریں۔"
        }
    ],
    "contentEn": "Islamabad Traffic Police e-challan checking and online DLIMS guidelines.",
    "contentUr": "وفاقی دارالحکومت اسلام آباد میں ای چالان اور گاڑی فائن کا حل۔",
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
    "directAnswerEn": "To get a Driving License in Karachi or Sindh, book an online appointment at dlims.sindh.gov.pk or visit Clifton / Nazimabad DL Branch. Learner permit fee is PKR 500 (valid for 6 months). Permanent 5-year license fee is approx PKR 1,850 to PKR 2,500.",
    "directAnswerUr": "سندھ (کراچی و حیدرآباد) میں ڈرائیونگ لائسنس حاصل کرنے کے لیے dlims.sindh.gov.pk پر آن لائن وقت بک کریں۔ لرنر پرمٹ فیس 500 روپے ہے۔",
    "lastVerified": "August 16, 2026",
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
            "serviceEn": "Sindh Learner Permit (6 Months)",
            "serviceUr": "سندھ لرنر پرمٹ فیس",
            "normal": "PKR 500",
            "urgent": "DL Branch Visit",
            "executive": "Online Appointment"
        },
        {
            "serviceEn": "Permanent License (5 Years)",
            "serviceUr": "پکا لائسنس فیس (5 سال)",
            "normal": "PKR 1,850",
            "urgent": "Driving Test",
            "executive": "DL Branch"
        }
    ],
    "steps": [
        {
            "stepNumber": 1,
            "titleEn": "Book Appointment on Sindh DLIMS Portal",
            "titleUr": "سندھ ڈی ایل آئی ایم ایس پر ٹائم بک کریں",
            "detailEn": "Visit dlims.sindh.gov.pk, select branch (Clifton/Nazimabad), and choose appointment slot.",
            "detailUr": "dlims.sindh.gov.pk پر جا کر قریبی برانچ کی اپائنٹمنٹ لیں۔"
        }
    ],
    "faqs": [
        {
            "questionEn": "Can Punjab DLIMS license be used in Sindh?",
            "questionUr": "کیا پنجاب کا ڈرائیونگ لائسنس سندھ میں چلتا ہے؟",
            "answerEn": "Yes, all provincial computerised driving licenses are legally valid nationwide across Pakistan.",
            "answerUr": "جی ہاں! پاکستان کے تمام صوبوں کا لائسنس پورے ملک میں کارآمد ہے۔"
        }
    ],
    "contentEn": "Karachi and Sindh Police driving license online application and branch appointment instructions.",
    "contentUr": "کراچی اور سندھ کے تمام اضلاع کے لیے آن لائن لائسنس پورٹل۔",
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
    "directAnswerEn": "M-Tag is mandatory for all vehicles travelling on Pakistan Motorways (M-1, M-2, M-3, M-4, M-5). Visit any Motorway Toll Plaza M-Tag Customer Center with your vehicle, CNIC, and vehicle registration book. M-Tag issuance is 100% FREE. Recharge via One Network mobile app or JazzCash.",
    "directAnswerUr": "موٹروے پر سفر کے لیے ایم ٹیگ لگانا لازمی ہے۔ ٹول پلازہ پر گاڑی، شناختی کارڈ اور سمارٹ کارڈ کے ساتھ جائیں۔ ایم ٹیگ بالکل مفت لگایا جاتا ہے۔",
    "lastVerified": "August 16, 2026",
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
            "serviceEn": "M-Tag Sticker Issuance",
            "serviceUr": "ایم ٹیگ سٹیکر جاری کرنا",
            "normal": "100% FREE",
            "urgent": "Toll Plaza Booth",
            "executive": "Instant Activation"
        }
    ],
    "steps": [
        {
            "stepNumber": 1,
            "titleEn": "Drive Vehicle to Motorway Toll Plaza M-Tag Booth",
            "titleUr": "گاڑی موٹروے ایم ٹیگ کاؤنٹر پر لے جائیں",
            "detailEn": "Stop at M-Tag customer center before entering Motorway.",
            "detailUr": "موٹروے پر داخل ہونے سے پہلے ایم ٹیگ بوتھ پر لائیں۔"
        }
    ],
    "faqs": [
        {
            "questionEn": "Can I enter Motorway without an M-Tag sticker?",
            "questionUr": "کیا بغیر ایم ٹیگ موٹروے پر سفر ہو سکتا ہے؟",
            "answerEn": "Un-tagged vehicles incur heavy fines at entry toll plazas and face cash toll delays.",
            "answerUr": "بغیر ایم ٹیگ گاڑیوں پر ٹول پلازہ پر جرمانہ عائد ہوتا ہے۔"
        }
    ],
    "contentEn": "National Highway Authority M-Tag mandatory rules and digital toll payment tutorial.",
    "contentUr": "این ایچ اے کے قوانین کے مطابق ایم ٹیگ لگوانے اور موبائل سے بیلنس ریچارج کا گائیڈ۔",
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
    "directAnswerEn": "To verify vehicle ownership or pay token tax online in Khyber Pakhtunkhwa (Peshawar, Mardan, Abbottabad), enter your vehicle registration number at excise.kp.gov.pk or download the official KPK Zameen Zoya app. Pay tax via Easypaisa or JazzCash.",
    "directAnswerUr": "کے پی کے کی گاڑی کی تصدیق اور ٹوکن ٹیکس کی ادائیگی کے لیے اپنا گاڑی نمبر excise.kp.gov.pk یا زمین زویا ایپ پر درج کریں۔",
    "lastVerified": "August 16, 2026",
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
            "serviceEn": "KPK Vehicle Lookup",
            "serviceUr": "کے پی کے گاڑی آن لائن سرچ",
            "normal": "FREE",
            "urgent": "Instant Details",
            "executive": "Official Site"
        }
    ],
    "steps": [
        {
            "stepNumber": 1,
            "titleEn": "Enter Registration Number on KPK Excise Site",
            "titleUr": "کے پی کے ایکسائز ویب سائٹ پر نمبر لکھیں",
            "detailEn": "Visit excise.kp.gov.pk and enter registration number (e.g., B-1234 or LEA-24-123).",
            "detailUr": "پورٹل پر گاڑی نمبر درج کر کے مالک کا نام دیکھیں۔"
        }
    ],
    "faqs": [
        {
            "questionEn": "Can I pay KPK token tax online from anywhere in Pakistan?",
            "questionUr": "کیا کے پی کے کا ٹوکن ٹیکس آن لائن کہیں سے بھی ادا ہو سکتا ہے؟",
            "answerEn": "Yes! Pay online via Easypaisa, JazzCash, or 1Link banking from any province.",
            "answerUr": "جی ہاں! پاکستان بھر سے ایزی پیسہ یا بینک ایپ سے ادا ہو سکتا ہے۔"
        }
    ],
    "contentEn": "Khyber Pakhtunkhwa Excise department online vehicle verification and smart card tracking.",
    "contentUr": "خیبر پختونخوا ایکسائز پورٹل اور پشاور ڈرائیونگ لائسنس کی معلومات۔",
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
    "directAnswerEn": "To view and download your LESCO electricity bill online, enter your 14-digit Reference Number into our LESCO Bill Tool or visit lesco.gov.pk. Print duplicate copy or save PDF for mobile payment.",
    "directAnswerUr": "اپنا لیسکو بجلی بل دیکھنے اور پرنٹ کرنے کے لیے اپنا 14 ہندسوں کا ریفرنس نمبر ہمارے پورٹل پر داخل کریں۔",
    "lastVerified": "August 10, 2026",
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
        "questionEn": "What is my LESCO Reference Number?",
        "questionUr": "لیسکو ریفرنس نمبر کیا ہوتا ہے؟",
        "answerEn": "Your 14-digit LESCO Reference Number is printed on the top-right corner of your previous electricity bill. It is different from your Consumer ID (which is 10 digits). Always use the 14-digit Reference Number for online bill checking.",
        "answerUr": "آپ کا 14 ہندسوں کا لیسکو ریفرنس نمبر پرانے بجلی کے بل کے اوپری دائیں حصے میں لکھا ہوتا ہے۔ آن لائن بل چیک کرنے کے لیے ہمیشہ 14 ہندسوں والا ریفرنس نمبر استعمال کریں۔"
      },
      {
        "questionEn": "Which areas does LESCO serve?",
        "questionUr": "لیسکو کن علاقوں میں بجلی فراہم کرتا ہے؟",
        "answerEn": "LESCO (Lahore Electric Supply Company) serves Lahore, Kasur, Sheikhupura, and Nankana Sahib districts in central Punjab. For other Punjab districts, check FESCO (Faisalabad), MEPCO (Multan/Bahawalpur), or GEPCO (Gujranwala).",
        "answerUr": "لیسکو لاہور، قصور، شیخوپورہ اور ننکانہ صاحب اضلاع میں بجلی فراہم کرتا ہے۔ دیگر پنجاب اضلاع کے لیے فیسکو، میپکو یا گیپکو سے رابطہ کریں۔"
      },
      {
        "questionEn": "How can I pay LESCO bill online?",
        "questionUr": "لیسکو بجلی بل آن لائن کیسے جمع کروائیں؟",
        "answerEn": "You can pay your LESCO bill online via: JazzCash app, Easypaisa app, UBL Digital, HBL Mobile, Bank Alfalah, Meezan Bank, or any 1Link internet banking portal. Enter your 14-digit Reference Number to fetch the bill and confirm payment.",
        "answerUr": "لیسکو بجلی بل آن لائن ادا کرنے کے لیے جاز کیش، ایزی پیسہ، UBL ڈیجیٹل، HBL موبائل، بینک الفلاح یا کسی بھی 1Link انٹرنیٹ بینکنگ پورٹل کا استعمال کریں۔ 14 ہندسوں کا ریفرنس نمبر درج کریں۔"
      },
      {
        "questionEn": "What if my LESCO bill shows an unusually high amount?",
        "questionUr": "اگر لیسکو بل بہت زیادہ آ جائے تو کیا کروں؟",
        "answerEn": "If you suspect an over-billing error, call LESCO helpline 118 or 042-111-000-118 to lodge a complaint. You can also visit the nearest LESCO Customer Service Center with your previous bills. Meter inspection can be requested at a fee of PKR 200-500.",
        "answerUr": "غلط یا زیادہ بلنگ کی شکایت کے لیے لیسکو ہیلپ لائن 118 یا 042-111-000-118 پر کال کریں، یا قریبی لیسکو سروس سینٹر جائیں۔"
      }
    ],
    "feeStructure": [
      {
        "serviceEn": "Protected Residential Slab (0 - 100 Units)",
        "serviceUr": "پروٹیکٹڈ گھریلو سلیب (0 تا 100 یونٹ)",
        "normal": "PKR 7.74 / Unit",
        "urgent": "Government Subsidized",
        "executive": "Base Tariff"
      },
      {
        "serviceEn": "Protected Residential Slab (101 - 200 Units)",
        "serviceUr": "پروٹیکٹڈ گھریلو سلیب (101 تا 200 یونٹ)",
        "normal": "PKR 14.06 / Unit",
        "urgent": "Government Subsidized",
        "executive": "Base Tariff"
      },
      {
        "serviceEn": "Unprotected Residential Slab (101 - 300 Units)",
        "serviceUr": "ان پروٹیکٹڈ سلیب (101 تا 300 یونٹ)",
        "normal": "PKR 27.00 / Unit",
        "urgent": "Variable Taxes Applicable",
        "executive": "Standard Tariff"
      },
      {
        "serviceEn": "Unprotected Residential Slab (Above 300 Units)",
        "serviceUr": "ان پروٹیکٹڈ سلیب (300 یونٹ سے زائد)",
        "normal": "PKR 35.00+ / Unit",
        "urgent": "Fuel Price Adjustment (FPA)",
        "executive": "Peak Hour Rate"
      },
      {
        "serviceEn": "Duplicate Bill Printing Fee",
        "serviceUr": "ڈپلیکیٹ بل پرنٹ فیس",
        "normal": "PKR 0 (100% FREE)",
        "urgent": "Online Download",
        "executive": "PDF Export"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Locate 14-Digit LESCO Reference Number",
        "titleUr": "14 ہندسوں کا ریفرنس نمبر دیکھیں",
        "detailEn": "Find the 14-digit Reference Number printed on the top-right box of any previous LESCO paper bill.",
        "detailUr": "پرانے بجلی کے بل کے اوپری دائیں حصے سے 14 ہندسوں کا ریفرنس نمبر تلاش کریں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Enter Reference Number in Duplicate Bill Tool",
        "titleUr": "آن لائن ٹول میں ریفرنس نمبر درج کریں",
        "detailEn": "Type your 14-digit Reference Number without spaces or special characters into our online LESCO Bill Lookup tool.",
        "detailUr": "آن لائن لیسکو بل ٹول میں اپنا 14 ہندسوں کا ریفرنس نمبر درج کریں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "View & Download Official PDF Duplicate Bill",
        "titleUr": "بل پی ڈی ایف دیکھیں اور ڈاؤن لوڈ کریں",
        "detailEn": "Review unit consumption, due date, FPA taxes, and click \"Print / Download PDF\" to save a copy for banking.",
        "detailUr": "یونٹس، واجب الادا رقم اور آخری تاریخ دیکھ کر بل کا پی ڈی ایف محفوظ کریں۔"
      },
      {
        "stepNumber": 4,
        "titleEn": "Pay Bill via Mobile Banking or JazzCash",
        "titleUr": "موبائل بینکنگ سے بل جمع کروائیں",
        "detailEn": "Open JazzCash, Easypaisa, or 1Link mobile banking app, select Electricity Bill → LESCO, and enter your reference number to confirm payment.",
        "detailUr": "جاز کیش، ایزی پیسہ یا 1Link ایپ سے ریفرنس نمبر درج کر کے آن لائن بل ادا کریں۔"
      }
    ],
    "contentEn": "LESCO Bill Check Online is the digital duplicate bill retrieval service provided by Lahore Electric Supply Company that enables consumers in Lahore, Kasur, Sheikhupura, and Nankana Sahib to view, download, and verify their monthly electricity charges.\n\n## How to Check LESCO Duplicate Bill Online\nChecking your electricity bill online eliminates delays caused by late physical mail delivery and prevents late-payment surcharges. All residential, commercial, and industrial consumers can fetch their current bill using their unique 14-digit Reference Number.\n\n• **14-Digit Reference Number**: Found on the top-right header of your monthly bill.\n• **10-Digit Consumer ID**: Legacy account ID used for in-office administrative queries.\n• **Service Territory**: LESCO covers Lahore District, Kasur, Sheikhupura, and Nankana Sahib.\n\n## Understanding LESCO Tariff Slabs & Taxes\nYour monthly electricity bill total comprises your base energy consumption units multiplied by your slab tariff, plus government taxes:\n\n1. **Base Electricity Slabs**: Rates per unit differ significantly between Protected (under 200 units for 6 months) and Unprotected consumer categories.\n2. **Fuel Price Adjustment (FPA)**: Monthly variable charge reflecting fuel cost variations in power generation.\n3. **Government Taxes**: Includes General Sales Tax (GST), Electricity Duty, PTV License Fee (PKR 35), and Financing Cost Surcharges.\n\n## Digital Payment Options\nBills can be paid instantly 24/7 without visiting bank branches:\n\n• **JazzCash / Easypaisa**: Navigate to Bill Payments → Electricity → LESCO → Enter 14-Digit Reference Number.\n• **Bank Mobile Apps**: HBL, UBL, MCB, Allied Bank, Bank Alfalah, and Meezan Bank apps via 1Link bill payment gateway.\n• **Over-The-Counter**: Commercial bank branches, Post Offices, and LESCO Customer Facilitation Centers.\n\nFor billing complaints or emergency outage reporting, call the LESCO central helpline at **118** or WhatsApp +92-42-111-000-118.",
    "contentUr": "لیسکو آن لائن بل چیک لاہور الیکٹرک سپلائی کمپنی کی آن لائن ڈپلیکیٹ بل سروس ہے جو لاہور، قصور، شیخوپورہ اور ننکانہ صاحب کے صارفین کو بجلی کا بل دیکھنے اور ڈاؤن لوڈ کرنے کی سہولت دیتی ہے۔\n\n## لیسکو بل آن لائن دیکھنے کا طریقہ\nآن لائن بل چیک کرنے سے ڈلیوری میں تاخیر اور آخری تاریخ گزرنے کے جرمانے سے بچا جا سکتا ہے۔\n\n• **14 ہندسوں کا ریفرنس نمبر**: پرانے بل کے اوپری دائیں حصے پر درج ہوتا ہے۔\n• **زیرِ عمل اضلاع**: لیسکو اضلاع لاہور، قصور، شیخوپورہ اور ننکانہ صاحب میں بجلی فراہم کرتا ہے۔\n\n## لیسکو بجلی کے بل کی آن لائن ادائیگی\nبل کی ادائیگی کسی بھی وقت 24 گھنٹے ممکن ہے:\n\n• **جاز کیش / ایزی پیسہ**: یوٹیلیٹی بلز → الیکٹرسٹی → لیسکو → 14 ہندسوں کا ریفرنس نمبر\n• **موبائل بینکنگ ایپس**: 1Link نیٹ ورک کے ذریعے کسی بھی بینک ایپ سے\n\nبجلی کے بل کی غلطی یا شکایت کی صورت میں لیسکو ہیلپ لائن **118** پر رابطہ کریں۔",
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
    "directAnswerEn": "To generate a K-Electric duplicate bill online, enter your 13-digit K-Electric Account Number into the KE customer web portal at ke.com.pk. View due date and total payable amount instantly.",
    "directAnswerUr": "کے الیکٹرک کراچی کے صارفین اپنا 13 ہندسوں والا اکاؤنٹ نمبر درج کر کے نیا بل ڈاؤن لوڈ کر سکتے ہیں۔",
    "lastVerified": "August 10, 2026",
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
        "questionEn": "Where is the 14-digit Reference Number on electricity bill?",
        "questionUr": "بجلی بل پر 14 ہندسوں کا ریفرنس نمبر کہاں لکھا ہوتا ہے؟",
        "answerEn": "The 14-digit Reference Number is printed on top-right section of paper bill above consumer name.",
        "answerUr": "ریفرنس نمبر بل کے اوپری دائیں ڈبے میں صارف نام کے اوپر درج ہوتا ہے۔"
      },
      {
        "questionEn": "Can I download duplicate electricity bill PDF for free?",
        "questionUr": "کیا ڈپلیکیٹ بل پی ڈی ایف مفت ڈاؤن لوڈ ہو سکتا ہے؟",
        "answerEn": "Yes! Enter your 14-digit Reference Number on our online bill tool to print or save PDF duplicate copy 100% free.",
        "answerUr": "جی ہاں! ریفرنس نمبر درج کر کے آن لائن بل کی مفت کاپی ڈاؤن لوڈ کریں۔"
      },
      {
        "questionEn": "How to register complaint for power outage or high bill?",
        "questionUr": "بجلی بندش یا زیادہ بل کی آن لائن شکایت کیسے درج کریں؟",
        "answerEn": "Call WAPDA central helpline 118 or contact your local distribution company facilitation center with 14-digit reference number.",
        "answerUr": "ہیلپ لائن 118 پر کال کر کے یا قریبی سروس سینٹر جا کر شکایت درج کروائیں۔"
      }
    ],
    "contentEn": "Official online bill checking system for all K-Electric residential and commercial accounts in Karachi, Hub, and Dhabeji.",
    "contentUr": "کے الیکٹرک کراچی کے تمام صارفین کے لیے ڈپلیکیٹ بل اور آن لائن ادائیگی کی تفسیل۔",
    "relatedSlugs": [
      "/bills/lesco-bill-check-online",
      "/bills/wapda-bill-complaint-number"
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
    "directAnswerEn": "For SNGPL (Punjab, KPK, Islamabad), check gas bill at sngpl.com.pk using your 11-digit Consumer Number. For SSGC (Sindh, Balochistan), visit ssgc.com.pk with your 10-digit Customer No.",
    "directAnswerUr": "سوئی ناردرن کے بل کے لیے 11 ہندسوں کا کنزیومر نمبر اور سوئی سدرن کے لیے 10 ہندسوں کا کسٹمر نمبر داخل کریں۔",
    "lastVerified": "August 10, 2026",
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
        "questionEn": "Where is the 14-digit Reference Number on electricity bill?",
        "questionUr": "بجلی بل پر 14 ہندسوں کا ریفرنس نمبر کہاں لکھا ہوتا ہے؟",
        "answerEn": "The 14-digit Reference Number is printed on top-right section of paper bill above consumer name.",
        "answerUr": "ریفرنس نمبر بل کے اوپری دائیں ڈبے میں صارف نام کے اوپر درج ہوتا ہے۔"
      },
      {
        "questionEn": "Can I download duplicate electricity bill PDF for free?",
        "questionUr": "کیا ڈپلیکیٹ بل پی ڈی ایف مفت ڈاؤن لوڈ ہو سکتا ہے؟",
        "answerEn": "Yes! Enter your 14-digit Reference Number on our online bill tool to print or save PDF duplicate copy 100% free.",
        "answerUr": "جی ہاں! ریفرنس نمبر درج کر کے آن لائن بل کی مفت کاپی ڈاؤن لوڈ کریں۔"
      },
      {
        "questionEn": "How to register complaint for power outage or high bill?",
        "questionUr": "بجلی بندش یا زیادہ بل کی آن لائن شکایت کیسے درج کریں؟",
        "answerEn": "Call WAPDA central helpline 118 or contact your local distribution company facilitation center with 14-digit reference number.",
        "answerUr": "ہیلپ لائن 118 پر کال کر کے یا قریبی سروس سینٹر جا کر شکایت درج کروائیں۔"
      }
    ],
    "contentEn": "Find duplicate bill download instructions for both major gas distribution companies operating across Pakistan.",
    "contentUr": "پاکستان میں سوئی گیس کے آن لائن بل اور میٹر ریڈنگ چیک کرنے کا گائیڈ۔",
    "relatedSlugs": [
      "/bills/lesco-bill-check-online",
      "/bills/wapda-bill-complaint-number"
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
    "directAnswerEn": "The universal WAPDA electricity complaint emergency helpline across Pakistan is 118 or SMS to 8118. Ministry of Energy Power Division Complaint Cell can be reached at 051-9103888.",
    "directAnswerUr": "پاکستان بھر میں بجلی کی بندش یا فالتو بلنگ کی شکایت درج کروانے کے لیے 118 پر مفت کال کریں یا 8118 پر ایس ایم ایس کریں۔",
    "lastVerified": "August 10, 2026",
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
        "questionEn": "Where is the 14-digit Reference Number on electricity bill?",
        "questionUr": "بجلی بل پر 14 ہندسوں کا ریفرنس نمبر کہاں لکھا ہوتا ہے؟",
        "answerEn": "The 14-digit Reference Number is printed on top-right section of paper bill above consumer name.",
        "answerUr": "ریفرنس نمبر بل کے اوپری دائیں ڈبے میں صارف نام کے اوپر درج ہوتا ہے۔"
      },
      {
        "questionEn": "Can I download duplicate electricity bill PDF for free?",
        "questionUr": "کیا ڈپلیکیٹ بل پی ڈی ایف مفت ڈاؤن لوڈ ہو سکتا ہے؟",
        "answerEn": "Yes! Enter your 14-digit Reference Number on our online bill tool to print or save PDF duplicate copy 100% free.",
        "answerUr": "جی ہاں! ریفرنس نمبر درج کر کے آن لائن بل کی مفت کاپی ڈاؤن لوڈ کریں۔"
      },
      {
        "questionEn": "How to register complaint for power outage or high bill?",
        "questionUr": "بجلی بندش یا زیادہ بل کی آن لائن شکایت کیسے درج کریں؟",
        "answerEn": "Call WAPDA central helpline 118 or contact your local distribution company facilitation center with 14-digit reference number.",
        "answerUr": "ہیلپ لائن 118 پر کال کر کے یا قریبی سروس سینٹر جا کر شکایت درج کروائیں۔"
      }
    ],
    "contentEn": "Directory of emergency contact numbers for power outages, transformer breakdown, and over-billing complaints in Pakistan.",
    "contentUr": "پاکستان میں بجلی بندش اور خرابی کی فوری رپورٹ کے لیے تمام کمپنیوں کی ہیلپ لائنز۔",
    "relatedSlugs": [
      "/bills/lesco-bill-check-online",
      "/bills/k-electric-duplicate-bill"
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
    "directAnswerEn": "Government job announcements in Pakistan are published in official newspapers and departmental portals (such as njp.gov.pk - National Job Portal). Applicants apply online with CNIC and degree certificates.",
    "directAnswerUr": "پاکستان کی تمام وفاقی اور صوبائی سرکاری نوکریوں میں آن لائن اپلائی کرنے کے لیے نیشنل جاب پورٹل (njp.gov.pk) کا استعمال کریں۔",
    "lastVerified": "August 10, 2026",
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
        "questionEn": "How to check latest Govt Jobs in Pakistan online?",
        "questionUr": "پاکستان میں نئی سرکاری نوکریاں آن لائن کیسے دیکھیں؟",
        "answerEn": "Check daily announcements on official portals ppsc.gop.pk, fpsc.gov.pk, nts.org.pk, or browse our daily updated jobs directory.",
        "answerUr": "PPSC، FPSC، NTS اور ہمارے پورٹل پر روزانہ کی نئی ملازمتیں دیکھیں۔"
      },
      {
        "questionEn": "How to apply online for PPSC and NTS tests?",
        "questionUr": "پی پی ایس سی اور این ٹی ایس سیٹوں کے لیے آن لائن فارم کیسے بھریں؟",
        "answerEn": "Generate PSID fee voucher on job portal (PPSC PKR 600 fee), deposit via JazzCash or 1Link, fill online form, and submit before closing date.",
        "answerUr": "آن لائن پورٹل سے PSID بنائیں، فیس جاز کیش سے ادا کریں اور فارم پر کریں۔"
      },
      {
        "questionEn": "Which original documents are required during job interview?",
        "questionUr": "انٹرویو کے دن کون سے اصل کاغذات لانا لازمی ہیں؟",
        "answerEn": "Bring original CNIC, educational certificates (Matric/Inter/Degree), domicile certificate, 2 photographs, and paid fee challan.",
        "answerUr": "اصل شناختی کارڈ، تعلیمی اسناد، ڈومیسائل اور فیس چالان لانا ضروری ہے۔"
      }
    ],
    "contentEn": "Updated listing of latest government jobs in Pakistan for Matric, Intermediate, Bachelors, and Master degree holders.",
    "contentUr": "تعلیمی قابلیت کے لحاظ سے پاکستان میں نئی انے والی تمام گورنمنٹ ملازمتوں کی معلومات۔",
    "relatedSlugs": [
      "/jobs/ppsc-jobs-2026",
      "/jobs/nts-jobs-today"
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
    "directAnswerEn": "To apply for PPSC vacancies in Punjab government departments, download the PKR 600 fee challan from ppsc.gop.pk, deposit fee at State Bank or NBP, and fill online application.",
    "directAnswerUr": "پی پی ایس سی کی کسی بھی آسامی پر اپلائی کرنے کے لیے 600 روپے فیس چالان فارم ppsc.gop.pk سے ڈاؤن لوڈ کریں۔",
    "lastVerified": "August 10, 2026",
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
        "questionEn": "How to check latest Govt Jobs in Pakistan online?",
        "questionUr": "پاکستان میں نئی سرکاری نوکریاں آن لائن کیسے دیکھیں؟",
        "answerEn": "Check daily announcements on official portals ppsc.gop.pk, fpsc.gov.pk, nts.org.pk, or browse our daily updated jobs directory.",
        "answerUr": "PPSC، FPSC، NTS اور ہمارے پورٹل پر روزانہ کی نئی ملازمتیں دیکھیں۔"
      },
      {
        "questionEn": "How to apply online for PPSC and NTS tests?",
        "questionUr": "پی پی ایس سی اور این ٹی ایس سیٹوں کے لیے آن لائن فارم کیسے بھریں؟",
        "answerEn": "Generate PSID fee voucher on job portal (PPSC PKR 600 fee), deposit via JazzCash or 1Link, fill online form, and submit before closing date.",
        "answerUr": "آن لائن پورٹل سے PSID بنائیں، فیس جاز کیش سے ادا کریں اور فارم پر کریں۔"
      },
      {
        "questionEn": "Which original documents are required during job interview?",
        "questionUr": "انٹرویو کے دن کون سے اصل کاغذات لانا لازمی ہیں؟",
        "answerEn": "Bring original CNIC, educational certificates (Matric/Inter/Degree), domicile certificate, 2 photographs, and paid fee challan.",
        "answerUr": "اصل شناختی کارڈ، تعلیمی اسناد، ڈومیسائل اور فیس چالان لانا ضروری ہے۔"
      }
    ],
    "contentEn": "Complete guide for Punjab Public Service Commission job recruitment tests, syllabus, and interview schedules.",
    "contentUr": "پی پی ایس سی کے تحت پنجاب کے مختلف محکموں میں بھرتی کی مکمل تفصیل۔",
    "relatedSlugs": [
      "/jobs/latest-govt-jobs-pakistan",
      "/jobs/nts-jobs-today"
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
    "directAnswerEn": "Access all active NTS screening tests and recruitment projects at nts.org.pk. Create an NTS account, upload photo and CNIC copy, pay fee via 1Link 1Bill, and download Roll Number Slip 7 days before exam.",
    "directAnswerUr": "این ٹی ایس کے تمام ایکٹو پروجیکٹس اور نوکریوں کے لیے nts.org.pk پر جا کر آن لائن رول نمبر سلپ ڈاؤن لوڈ کریں۔",
    "lastVerified": "August 10, 2026",
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
        "questionEn": "How to check latest Govt Jobs in Pakistan online?",
        "questionUr": "پاکستان میں نئی سرکاری نوکریاں آن لائن کیسے دیکھیں؟",
        "answerEn": "Check daily announcements on official portals ppsc.gop.pk, fpsc.gov.pk, nts.org.pk, or browse our daily updated jobs directory.",
        "answerUr": "PPSC، FPSC، NTS اور ہمارے پورٹل پر روزانہ کی نئی ملازمتیں دیکھیں۔"
      },
      {
        "questionEn": "How to apply online for PPSC and NTS tests?",
        "questionUr": "پی پی ایس سی اور این ٹی ایس سیٹوں کے لیے آن لائن فارم کیسے بھریں؟",
        "answerEn": "Generate PSID fee voucher on job portal (PPSC PKR 600 fee), deposit via JazzCash or 1Link, fill online form, and submit before closing date.",
        "answerUr": "آن لائن پورٹل سے PSID بنائیں، فیس جاز کیش سے ادا کریں اور فارم پر کریں۔"
      },
      {
        "questionEn": "Which original documents are required during job interview?",
        "questionUr": "انٹرویو کے دن کون سے اصل کاغذات لانا لازمی ہیں؟",
        "answerEn": "Bring original CNIC, educational certificates (Matric/Inter/Degree), domicile certificate, 2 photographs, and paid fee challan.",
        "answerUr": "اصل شناختی کارڈ، تعلیمی اسناد، ڈومیسائل اور فیس چالان لانا ضروری ہے۔"
      }
    ],
    "contentEn": "Find current NTS application forms, NAT/GAT exam schedules, and recruitment result portal links.",
    "contentUr": "این ٹی ایس کے ذریعے ہونے والے تمام ٹیسٹس کی تاریخیں، سلیبس اور رول نمبر سلپس کا آن لائن گائیڈ۔",
    "relatedSlugs": [
      "/jobs/latest-govt-jobs-pakistan",
      "/jobs/ppsc-jobs-2026"
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
    "directAnswerEn": "Apni Chhat Apna Ghar is an interest-free housing loan scheme launched by the Government of Punjab providing up to PKR 1.5 Million (15 Lakhs) for plot owners (up to 5 marlas urban or 10 marlas rural). The loan is 100% interest-free with zero service charges, payable in easy monthly installments of approx PKR 14,000 over 9 years. Apply at acag.punjab.gov.pk.",
    "directAnswerUr": "اپنی چھت اپنا گھر سکیم حکومت پنجاب کی بلا سود ہاؤسنگ سکیم ہے جس کے تحت 5 مرلہ شہری یا 10 مرلہ دیہی پلاٹ کے مالکان کو 15 لاکھ روپے (1.5 ملین) کا بلا سود قرض دیا جاتا ہے۔ اس کی ماہانہ قسط تقریباً 14,000 روپے 9 سال کے لیے طے کی گئی ہے۔ آن لائن اپلائی acag.punjab.gov.pk پر کریں۔",
    "lastVerified": "August 10, 2026",
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
        "serviceEn": "Apni Chhat Housing Loan (Tier 1)",
        "serviceUr": "ہاؤسنگ قرضہ (15 لاکھ روپے)",
        "normal": "0% Interest / PKR 0 Fee",
        "urgent": "14,000 PKR / month",
        "executive": "9 Years Repayment"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "titleEn": "Verify Plot Ownership",
        "titleUr": "پلاٹ کی ملکیت کی تصدیق",
        "detailEn": "Ensure you own up to 5 Marla urban or 10 Marla rural land registered on your CNIC.",
        "detailUr": "شہری علاقے میں 5 مرلہ یا دیہی علاقے میں 10 مرلہ زمین کی اصل رجسٹری یا فرد ساتھ رکھیں۔"
      },
      {
        "stepNumber": 2,
        "titleEn": "Register on ACAG Portal",
        "titleUr": "اے سی اے جی پورٹل پر رجسٹریشن",
        "detailEn": "Create account on acag.punjab.gov.pk using CNIC and mobile number.",
        "detailUr": "اپنی شناختی کارڈ اور موبائل نمبر کی مدد سے آفیشل پورٹل پر اکاؤنٹ بنائیں۔"
      },
      {
        "stepNumber": 3,
        "titleEn": "Submit Application & Documents",
        "titleUr": "دستاویزات اور فارم کا اندراج",
        "detailEn": "Upload CNIC scan, property ownership documents, and photograph.",
        "detailUr": "شناختی کارڈ، پلاٹ کی سند اور تصویر اپ لوڈ کریں۔"
      }
    ],
    "faqs": [
      {
        "questionEn": "Is there any interest (Riba) on Apni Chhat Apna Ghar scheme?",
        "questionUr": "کیا اپنی چھت اپنا گھر سکیم پر کوئی سود یا مارک اپ ہے؟",
        "answerEn": "No, the loan is 100% interest-free (0% markup / 0% Riba). You only repay the exact principal amount of PKR 1.5 Million in monthly installments. The Government of Punjab covers the financing cost.",
        "answerUr": "جی نہیں، یہ قرضہ 100 فیصد بلا سود (صفر فیصد مارک اپ) ہے۔ آپ کو صرف 15 لاکھ روپے اصل رقم واپس کرنی ہے جو حکومت پنجاب کی طرف سے ہے۔"
      },
      {
        "questionEn": "Can I apply if I rent my house but own a plot?",
        "questionUr": "اگر میں کرایہ کے مکان میں رہتا ہوں لیکن پلاٹ کا مالک ہوں تو کیا اپلائی کر سکتا ہوں؟",
        "answerEn": "Yes! The scheme is specifically for plot owners who do not yet have a constructed house. If you own up to 5 Marla (urban) or 10 Marla (rural/peri-urban) land registered on your CNIC, you are eligible regardless of your current living situation.",
        "answerUr": "جی ہاں! یہ سکیم خاص طور پر ان لوگوں کے لیے ہے جن کے پاس پلاٹ ہے لیکن مکان نہیں۔ شہری علاقے میں 5 مرلہ یا دیہی میں 10 مرلہ پلاٹ آپ کے شناختی کارڈ پر رجسٹرڈ ہونا ضروری ہے۔"
      },
      {
        "questionEn": "What is the monthly installment amount?",
        "questionUr": "ماہانہ قسط کتنی ہوتی ہے؟",
        "answerEn": "The approximate monthly installment is PKR 14,000 per month for 9 years (108 installments total) on the PKR 1.5 Million loan. The exact amount may vary slightly based on the disbursement tranche schedule.",
        "answerUr": "15 لاکھ روپے قرضے پر ماہانہ قسط تقریباً 14,000 روپے ہے جو 9 سال (108 اقساط) میں ادا کرنا ہوگی۔"
      },
      {
        "questionEn": "Is there any income limit to apply?",
        "questionUr": "کیا آمدن کی کوئی حد مقرر ہے؟",
        "answerEn": "The scheme targets low-to-middle income families. Applicants should not own a constructed house already and must not have benefited from any previous government housing scheme. NADRA and PLRA records are cross-checked automatically.",
        "answerUr": "سکیم کم اور درمیانی آمدن والے خاندانوں کے لیے ہے۔ درخواست دہندہ کا پہلے سے بنا ہوا مکان نہیں ہونا چاہیے اور کسی پرانی سرکاری ہاؤسنگ سکیم سے فائدہ نہیں اٹھانا چاہیے۔"
      }
    ],
    "contentEn": "The Apni Chhat Apna Ghar housing scheme is designed for low-income citizens across Punjab to build their own homes. Eligibility is verified electronically via NADRA CNIC and Land Records (PLRA).\n\nKey Scheme Details:\n• Loan Amount: Up to PKR 1,500,000 (1.5 Million / 15 Lakhs)\n• Interest Rate: 0% — completely interest-free (no Riba)\n• Monthly Installment: Approximately PKR 14,000 per month\n• Repayment Period: 9 years (108 equal monthly installments)\n• Administering Bank: Bank of Punjab (BOP) on behalf of Punjab Government\n• Disbursement: Released in tranches based on construction progress\n\nEligibility Criteria:\n• Pakistani citizen with valid CNIC registered in Punjab\n• Must own an undeveloped plot: up to 5 Marla in urban areas OR up to 10 Marla in rural/peri-urban areas\n• Plot must be registered in the applicant's name in PLRA (Punjab Land Records Authority)\n• Must not own a constructed house anywhere in Pakistan\n• Must not have previously benefited from any government housing scheme (Naya Pakistan Housing, Mera Ghar, etc.)\n\nHow to Apply (Step by Step):\n1. Visit acag.punjab.gov.pk on your smartphone or computer\n2. Create an account using your CNIC and mobile number\n3. Fill in the online application form with personal and property details\n4. Upload scanned copies of: CNIC, property ownership document (Fard/Mutation), and photograph\n5. Submit application — your eligibility is verified automatically via NADRA + PLRA integration\n6. If shortlisted, Bank of Punjab will contact you for the loan agreement\n\nConstruction Disbursement:\nThe loan is released in 3 construction tranches:\n• 1st Tranche (30%): After foundation is complete\n• 2nd Tranche (40%): After roof slab is complete\n• 3rd Tranche (30%): After plastering/finishing is done\n\nOfficial Helpline: 0800-02345 (toll-free, Monday to Saturday)",
    "contentUr": "اپنی چھت اپنا گھر سکیم حکومت پنجاب کی بلا سود ہاؤسنگ اسکیم ہے جو کم آمدن والے شہریوں کو اپنا گھر بنانے میں مدد کرتی ہے۔\n\nسکیم کی اہم تفصیلات:\n• قرضے کی رقم: 15 لاکھ روپے (PKR 1.5 ملین)\n• سود کی شرح: صفر فیصد (مکمل بلا سود)\n• ماہانہ قسط: تقریباً 14,000 روپے\n• ادائیگی کی مدت: 9 سال (108 ماہانہ اقساط)\n• بینک آف پنجاب (BOP) کے ذریعے ادائیگی\n\nاہلیت کی شرائط:\n• پنجاب میں رہنے والا پاکستانی شہری\n• شہری علاقے میں 5 مرلہ یا دیہی میں 10 مرلہ پلاٹ کا مالک\n• پلاٹ PLRA میں آپ کے نام رجسٹرڈ ہو\n• پہلے سے بنا ہوا مکان نہ ہو\n• کسی پرانی سرکاری ہاؤسنگ سکیم سے فائدہ نہ اٹھایا ہو\n\nاپلائی کرنے کا طریقہ:\n1۔ acag.punjab.gov.pk پر جائیں\n2۔ شناختی کارڈ اور موبائل نمبر سے اکاؤنٹ بنائیں\n3۔ آن لائن فارم پُر کریں\n4۔ شناختی کارڈ، پلاٹ کی فرد/میوٹیشن اور تصویر اپ لوڈ کریں\n5۔ بینک آف پنجاب سے رابطہ ہوگا\n\nہیلپ لائن: 0800-02345 (مفت)",
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
    "directAnswerEn": "Kamyab Jawan Program (now part of Prime Minister Youth Business & Agriculture Loan Scheme) offers subsidized business loans to Pakistani citizens aged 21 to 45. Tier 1 offers up to PKR 500,000 interest-free (0% markup). Tier 2 offers up to PKR 10 Million at subsidized 5% to 7% markup rates.",
    "directAnswerUr": "کامیاب جوان پروگرام 21 سے 45 سال کے پاکستانی نوجوانوں کو اپنا نیا کاروبار شروع کرنے یا پرانے کو بڑھانے کے لیے 5 لاکھ سے 1 کروڑ روپے تک کا قرضہ دیتا ہے۔ ٹائر 1 میں 5 لاکھ روپے تک کا قرضہ بالکل بلا سود ہوتا ہے۔",
    "lastVerified": "August 10, 2026",
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
        "serviceEn": "Tier 1 (Micro Loan)",
        "serviceUr": "ٹائر 1 (مائیکرو قرضہ)",
        "normal": "Up to PKR 500,000",
        "urgent": "0% Interest",
        "executive": "No Collateral Needed"
      },
      {
        "serviceEn": "Tier 2 (SME Business)",
        "serviceUr": "ٹائر 2 (کاروباری قرضہ)",
        "normal": "PKR 500k to 10 Million",
        "urgent": "5% Fixed Markup",
        "executive": "8 Years Repayment"
      }
    ],
    "faqs": [
      {
        "questionEn": "What is the maximum loan limit and markup rate?",
        "questionUr": "سرکاری قرضے کی حد اور مارک اپ ریٹ کتنا ہے؟",
        "answerEn": "Under Govt interest-free housing schemes (Apni Chhat), eligible applicants receive up to PKR 1.5 Million at 0% markup.",
        "answerUr": "اپنی چھت اپنا گھر سکیم کے تحت 15 لاکھ روپے تک بلا سود قرضہ ملتا ہے۔"
      },
      {
        "questionEn": "Who is eligible to apply for Govt Youth & Housing Loans?",
        "questionUr": "سرکاری قرضہ سکیموں میں درخواست دینے کے لیے کون اہل ہے؟",
        "answerEn": "Pakistani citizens aged 21 to 45 years with valid CNIC, clean credit report (eCIB), and income/land proof are eligible.",
        "answerUr": "21 تا 45 سال کے شناختی کارڈ ہولڈر تمام پاکستانی شہری درخواست دے سکتے ہیں۔"
      },
      {
        "questionEn": "Is there any application fee or private agent charge?",
        "questionUr": "کیا آن لائن درخواست کی کوئی فارم فیس ہے؟",
        "answerEn": "NO! Official government loan portals (pmyp.gov.pk / acag.punjab.gov.pk) do NOT charge any processing fee. Registration is 100% FREE.",
        "answerUr": "جی نہیں! سرکاری لون پورٹلز پر آن لائن فارم جمع کروانا بالکل مفت ہے۔"
      }
    ],
    "contentEn": "Detailed step-by-step breakdown of Kamyab Jawan business plan form submission through NBP, BOP, and Habib Bank.",
    "contentUr": "کامیاب جوان پورٹل سے نیا کاروباری منصوبہ فارم اور بینک سے رقم وصولی کا مکمل گائیڈ۔",
    "relatedSlugs": [
      "/loans/pm-youth-loan-scheme",
      "/loans/asaan-karobar-scheme"
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
    "directAnswerEn": "Mera Ghar Mera Ashiana is a government-subsidized mortgage program enabling low and middle-income families to finance constructed houses or apartments over 15 to 20 years with fixed discounted markup tiers starting at 3% to 5%.",
    "directAnswerUr": "میرا گھر میرا آشیانہ کم لاگت سستا ہاؤسنگ فنانسنگ پروگرام ہے جس کے تحت 15 سے 20 سال کے لیے 3 فیصد سے 5 فیصد رعایت پر بینک قرضہ فراہم کرتے ہیں۔",
    "lastVerified": "August 10, 2026",
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
        "questionEn": "What is the maximum loan limit and markup rate?",
        "questionUr": "سرکاری قرضے کی حد اور مارک اپ ریٹ کتنا ہے؟",
        "answerEn": "Under Govt interest-free housing schemes (Apni Chhat), eligible applicants receive up to PKR 1.5 Million at 0% markup.",
        "answerUr": "اپنی چھت اپنا گھر سکیم کے تحت 15 لاکھ روپے تک بلا سود قرضہ ملتا ہے۔"
      },
      {
        "questionEn": "Who is eligible to apply for Govt Youth & Housing Loans?",
        "questionUr": "سرکاری قرضہ سکیموں میں درخواست دینے کے لیے کون اہل ہے؟",
        "answerEn": "Pakistani citizens aged 21 to 45 years with valid CNIC, clean credit report (eCIB), and income/land proof are eligible.",
        "answerUr": "21 تا 45 سال کے شناختی کارڈ ہولڈر تمام پاکستانی شہری درخواست دے سکتے ہیں۔"
      },
      {
        "questionEn": "Is there any application fee or private agent charge?",
        "questionUr": "کیا آن لائن درخواست کی کوئی فارم فیس ہے؟",
        "answerEn": "NO! Official government loan portals (pmyp.gov.pk / acag.punjab.gov.pk) do NOT charge any processing fee. Registration is 100% FREE.",
        "answerUr": "جی نہیں! سرکاری لون پورٹلز پر آن لائن فارم جمع کروانا بالکل مفت ہے۔"
      }
    ],
    "contentEn": "Compare state-subsidized housing finance options offered across Commercial Banks, Meezan Islamic Bank, and House Building Finance Corporation (HBFC).",
    "contentUr": "میزان بینک اور ایچ بی ایف سی کے ذریعے اسلامی ہاؤسنگ فنانسنگ حاصل کرنے کی ہدایات۔",
    "relatedSlugs": [
      "/loans/apni-chhat-apna-ghar",
      "/loans/pm-youth-loan-scheme"
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
    "directAnswerEn": "Asaan Karobar Scheme provides hassle-free working capital and equipment financing for small shopkeepers, micro-entrepreneurs, and cottage industries up to PKR 1 Million with minimum documentation via Akhuwat and Microfinance Banks.",
    "directAnswerUr": "آسان کاروبار سکیم چھوٹے تاجروں اور دکانداروں کو 10 لاکھ روپے تک آسان ترین شرائط پر ورکنگ کیپیٹل اور مشینری کے لیے قرضہ فراہم کرتی ہے۔",
    "lastVerified": "August 10, 2026",
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
        "questionEn": "What is the maximum loan limit and markup rate?",
        "questionUr": "سرکاری قرضے کی حد اور مارک اپ ریٹ کتنا ہے؟",
        "answerEn": "Under Govt interest-free housing schemes (Apni Chhat), eligible applicants receive up to PKR 1.5 Million at 0% markup.",
        "answerUr": "اپنی چھت اپنا گھر سکیم کے تحت 15 لاکھ روپے تک بلا سود قرضہ ملتا ہے۔"
      },
      {
        "questionEn": "Who is eligible to apply for Govt Youth & Housing Loans?",
        "questionUr": "سرکاری قرضہ سکیموں میں درخواست دینے کے لیے کون اہل ہے؟",
        "answerEn": "Pakistani citizens aged 21 to 45 years with valid CNIC, clean credit report (eCIB), and income/land proof are eligible.",
        "answerUr": "21 تا 45 سال کے شناختی کارڈ ہولڈر تمام پاکستانی شہری درخواست دے سکتے ہیں۔"
      },
      {
        "questionEn": "Is there any application fee or private agent charge?",
        "questionUr": "کیا آن لائن درخواست کی کوئی فارم فیس ہے؟",
        "answerEn": "NO! Official government loan portals (pmyp.gov.pk / acag.punjab.gov.pk) do NOT charge any processing fee. Registration is 100% FREE.",
        "answerUr": "جی نہیں! سرکاری لون پورٹلز پر آن لائن فارم جمع کروانا بالکل مفت ہے۔"
      }
    ],
    "contentEn": "SMEDA and Akhuwat microfinance loan guidelines for small traders and female-owned home businesses.",
    "contentUr": "کوٹیج انڈسٹری اور چھوٹے کاروبار کے لیے اخوت اور مائیکرو فنانس بینکوں سے قرضہ حاصل کرنے کا گائیڈ۔",
    "relatedSlugs": [
      "/loans/kamyab-jawan-program",
      "/loans/pm-youth-loan-scheme"
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
    "directAnswerEn": "PM Youth Business & Agriculture Loan Scheme (PMYB&ALS) offers loans across 3 tiers: Tier 1 (up to 500,000 PKR at 0% markup via microfinance), Tier 2 (500,000 to 1.5 Million PKR at 5% markup), and Tier 3 (1.5 Million to 7.5 Million PKR at 7% markup). Apply at pmyp.gov.pk.",
    "directAnswerUr": "وزیراعظم یوتھ لون سکیم میں 3 ٹائرز شامل ہیں: ٹائر 1 میں 5 لاکھ تک بلا سود قرضہ، ٹائر 2 میں 15 لاکھ تک 5 فیصد مارک اپ پر اور ٹائر 3 میں 75 لاکھ تک 7 فیصد مارک اپ پر ملتا ہے۔ آن لائن اپلائی pmyp.gov.pk پر کریں۔",
    "lastVerified": "August 10, 2026",
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
        "questionEn": "What is the maximum loan limit and markup rate?",
        "questionUr": "سرکاری قرضے کی حد اور مارک اپ ریٹ کتنا ہے؟",
        "answerEn": "Under Govt interest-free housing schemes (Apni Chhat), eligible applicants receive up to PKR 1.5 Million at 0% markup.",
        "answerUr": "اپنی چھت اپنا گھر سکیم کے تحت 15 لاکھ روپے تک بلا سود قرضہ ملتا ہے۔"
      },
      {
        "questionEn": "Who is eligible to apply for Govt Youth & Housing Loans?",
        "questionUr": "سرکاری قرضہ سکیموں میں درخواست دینے کے لیے کون اہل ہے؟",
        "answerEn": "Pakistani citizens aged 21 to 45 years with valid CNIC, clean credit report (eCIB), and income/land proof are eligible.",
        "answerUr": "21 تا 45 سال کے شناختی کارڈ ہولڈر تمام پاکستانی شہری درخواست دے سکتے ہیں۔"
      },
      {
        "questionEn": "Is there any application fee or private agent charge?",
        "questionUr": "کیا آن لائن درخواست کی کوئی فارم فیس ہے؟",
        "answerEn": "NO! Official government loan portals (pmyp.gov.pk / acag.punjab.gov.pk) do NOT charge any processing fee. Registration is 100% FREE.",
        "answerUr": "جی نہیں! سرکاری لون پورٹلز پر آن لائن فارم جمع کروانا بالکل مفت ہے۔"
      }
    ],
    "contentEn": "Detailed guidelines for applying online for agricultural equipment, solar tube wells, and IT startup loans under PMYB&ALS.",
    "contentUr": "آئی ٹی سٹارٹ اپس، زرعی ٹیوب ویل اور سولر پینل لونز کے لیے آن لائن اپلائی کا طریقہ۔",
    "relatedSlugs": [
      "/loans/apni-chhat-apna-ghar",
      "/loans/kamyab-jawan-program"
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
      "/welfare/bisp-eligibility-check-by-cnic",
      "/welfare/8171-portal-guide",
      "/loans/apni-chhat-apna-ghar"
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
    "directAnswerEn": "To check your traffic E-Challan online in Punjab, visit echallan.psca.gop.pk and enter your Vehicle Registration Number and Chassis Number (last 6 digits). In Islamabad, check via ICT Traffic app or website. Payments can be made via ePay Punjab, JazzCash, or Easypaisa.",
    "directAnswerUr": "پنجاب میں ای چالان آن لائن چیک کرنے کے لیے echallan.psca.gop.pk پر گاڑی کا نمبر اور چیسس نمبر کے آخری 6 ہندسے درج کریں۔ ادائیگی ای پے پنجاب یا ایزی پیسہ سے کی جا سکتی ہے۔",
    "lastVerified": "August 10, 2026",
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
        "serviceEn": "Signal Violation / Overspeeding",
        "serviceUr": "سگنل کی خلاف ورزی / تیز رفتاری",
        "normal": "PKR 500 - 2,000",
        "urgent": "Online via ePay",
        "executive": "PSCA Verified"
      },
      {
        "serviceEn": "Wrong Parking / No Parking Zone",
        "serviceUr": "غلط پارکنگ",
        "normal": "PKR 500 - 1,000",
        "urgent": "Online via ePay",
        "executive": "PSCA Verified"
      },
      {
        "serviceEn": "Mobile Phone While Driving",
        "serviceUr": "گاڑی چلاتے وقت موبائل استعمال",
        "normal": "PKR 1,000 - 2,500",
        "urgent": "Online via ePay",
        "executive": "PSCA Verified"
      },
      {
        "serviceEn": "No Seat Belt / Helmet",
        "serviceUr": "سیٹ بیلٹ / ہیلمٹ نہ پہننا",
        "normal": "PKR 500 - 1,000",
        "urgent": "Online via ePay",
        "executive": "PSCA Verified"
      }
    ],
    "faqs": [
      {
        "questionEn": "How do I find out if I have any pending e-challans?",
        "questionUr": "مجھے کیسے پتہ چلے گا کہ میرے کوئی ای چالان باقی ہیں؟",
        "answerEn": "Visit echallan.psca.gop.pk (Punjab) or the ICT Traffic app (Islamabad). Enter your Vehicle Registration Number and Chassis Number (last 6 digits). All pending CCTV-issued traffic violation notices registered against your vehicle will appear.",
        "answerUr": "Punjab کے لیے echallan.psca.gop.pk پر جائیں، اپنا گاڑی رجسٹریشن نمبر اور چیسس نمبر (آخری 6 ہندسے) درج کریں۔ تمام غیر ادا شدہ ای چالان ظاہر ہو جائیں گے۔"
      },
      {
        "questionEn": "What happens if I do not pay an e-challan?",
        "questionUr": "اگر میں ای چالان ادا نہ کروں تو کیا ہوگا؟",
        "answerEn": "Unpaid e-challans can block your vehicle ownership transfer (bay-naam) in Punjab Excise system. Your driving license renewal may also be blocked. Additionally, if your vehicle is stopped at a checkpoint, all unpaid challans become payable on-spot with late surcharges.",
        "answerUr": "ادا نہ کیے گئے ای چالان کی وجہ سے پنجاب ایکسائز میں گاڑی کی بائے نیم منتقلی رک سکتی ہے۔ ڈرائیونگ لائسنس کی تجدید بھی روکی جا سکتی ہے۔"
      },
      {
        "questionEn": "Can I pay an e-challan online without visiting the office?",
        "questionUr": "کیا ای چالان بغیر دفتر گئے آن لائن ادا ہو سکتا ہے؟",
        "answerEn": "Yes. Punjab e-challans can be paid online via the ePay Punjab app, or by visiting epay.punjab.gov.pk. Payment methods include JazzCash, Easypaisa, 1Link internet banking, or debit/credit card. Once paid, the challan receipt is generated and your record is cleared.",
        "answerUr": "جی ہاں۔ پنجاب کے ای چالان ePay Punjab ایپ یا epay.punjab.gov.pk پر جاز کیش، ایزی پیسہ یا کریڈٹ کارڈ سے آن لائن ادا کیے جا سکتے ہیں۔"
      },
      {
        "questionEn": "How do CCTV traffic cameras issue e-challans?",
        "questionUr": "سی سی ٹی وی کیمرے ای چالان کیسے جاری کرتے ہیں؟",
        "answerEn": "Punjab Safe Cities Authority (PSCA) operates an AI-powered traffic enforcement system using CCTV cameras installed across major roads. The cameras automatically detect violations (signal jumping, speeding, wrong lane, phone use), read the vehicle license plate using ANPR technology, and cross-reference it with Excise registration records to issue an e-challan to the registered owner.",
        "answerUr": "پنجاب سیف سٹیز اتھارٹی کے AI کیمرے سڑکوں پر نصب ہیں جو خود بخود سگنل توڑنے، تیز رفتاری اور دیگر خلاف ورزیوں کو ریکارڈ کرتے ہیں اور گاڑی کا نمبر پلیٹ پڑھ کر مالک کو ای چالان جاری کر دیتے ہیں۔"
      }
    ],
    "contentEn": "Online E-Challan checking and payment is one of the most searched civic services in Pakistan. The Punjab Safe Cities Authority (PSCA) and Islamabad Capital Territory (ICT) Traffic Police have both digitized their traffic enforcement systems.\n\nPunjab E-Challan System (PSCA) — How it Works:\nPSCA operates over 8,000 CCTV cameras across Lahore, Rawalpindi, Faisalabad, Gujranwala, Multan, and other Punjab cities. These cameras use ANPR (Automatic Number Plate Recognition) technology to detect violations in real-time and automatically issue e-challans to the registered vehicle owner.\n\nHow to Check Punjab E-Challan Online:\n1. Visit echallan.psca.gop.pk\n2. Click \"Check E-Challan\"\n3. Enter your Vehicle Registration Number (e.g., LHR-2024-XXXX)\n4. Enter Chassis Number (last 6 digits printed on your vehicle registration document)\n5. All pending challans with date, location, violation type, and fine amount will appear\n6. Click \"Pay Now\" to proceed to ePay Punjab payment gateway\n\nHow to Pay E-Challan Online (Punjab):\n• Via ePay Punjab app: Available on Android and iOS\n• Online portal: epay.punjab.gov.pk\n• Payment options: JazzCash, Easypaisa, 1Link banking, Visa/Mastercard debit/credit\n• After payment: Download and keep your receipt as proof of challan clearance\n\nIslamabad E-Challan:\n• ICT Traffic Police issues e-challans via the ICT Smart Challan App\n• Check and pay at: islamabadtraffic.gov.pk\n\nKarachi E-Challan (Sindh):\n• Karachi Traffic Police issues challans via the SRSO system\n• Contact: 1915 (Karachi Traffic Police helpline)",
    "contentUr": "آن لائن ای چالان چیک کرنا اور ادا کرنا پاکستان میں سب سے زیادہ تلاش کی جانے والی سرکاری خدمات میں سے ہے۔\n\nپنجاب ای چالان سسٹم (PSCA):\nپنجاب سیف سٹیز اتھارٹی کے 8,000 سے زائد سی سی ٹی وی کیمرے لاہور، راولپنڈی، فیصل آباد، گوجرانوالہ اور ملتان میں نصب ہیں۔ یہ کیمرے خودکار طریقے سے ای چالان جاری کرتے ہیں۔\n\nپنجاب ای چالان آن لائن چیک کرنے کا طریقہ:\n1۔ echallan.psca.gop.pk کھولیں\n2۔ گاڑی رجسٹریشن نمبر درج کریں\n3۔ چیسس نمبر (آخری 6 ہندسے) درج کریں\n4۔ تمام غیر ادا شدہ چالان ظاہر ہو جائیں گے\n5۔ \"ابھی ادا کریں\" پر کلک کریں\n\nای چالان آن لائن ادائیگی:\n• ePay Punjab ایپ (Android/iOS)\n• جاز کیش، ایزی پیسہ، 1Link بینکنگ\n• ادائیگی کے بعد رسید ڈاؤن لوڈ کریں\n\nاسلام آباد چالان: islamabadtraffic.gov.pk",
    "relatedSlugs": [
      "/traffic/e-challan-check-by-cnic",
      "/traffic/token-tax-check",
      "/traffic/driving-license-guide"
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
    "directAnswerEn": "You can query pending traffic e-challans associated with all vehicles registered under your CNIC by logging into the ePay Punjab mobile application or visiting PSCA web portal under CNIC lookup.",
    "directAnswerUr": "اپنے شناختی کارڈ نمبر پر رجسٹرڈ تمام گاڑیوں کے ای چالان ای پے پنجاب ایپ یا سیف سٹی پورٹل سے اکٹھے چیک کیے جا سکتے ہیں۔",
    "lastVerified": "August 10, 2026",
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
        "questionEn": "How to check e-Challan online by CNIC or Vehicle Registration?",
        "questionUr": "ای چالان آن لائن شناختی کارڈ یا گاڑی نمبر سے کیسے چیک کریں؟",
        "answerEn": "Visit echallan.psca.gop.pk, enter Vehicle Registration Number and Chassis / CNIC Number to view unpaid traffic fines and print challan.",
        "answerUr": "echallan.psca.gop.pk پر گاڑی کا نمبر درج کر کے ای چالان کی تفصیلات دیکھیں۔"
      },
      {
        "questionEn": "How to pay e-Challan fine via JazzCash or mobile banking?",
        "questionUr": "ای چالان جرمانہ جاز کیش یا بینک ایپ سے کیسے ادا کریں؟",
        "answerEn": "Open JazzCash / Easypaisa app → Select Govt Payments / E-Challan → Enter 18-digit Challan PSID → Confirm payment to clear fine instantly.",
        "answerUr": "جاز کیش میں گورنمنٹ پیمنٹس → ای چالان منتخب کریں اور PSID درج کر کے ادا کریں۔"
      },
      {
        "questionEn": "What is the fine for driving without a valid DLIMS license?",
        "questionUr": "بغیر لائسنس گاڑی یا موٹر سائیکل چلانے پر کتنا چالان ہوتا ہے؟",
        "answerEn": "Driving without valid license incurs e-challan fine of PKR 2,000 for motorbikes and PKR 5,000 for cars along with vehicle impoundment risks.",
        "answerUr": "بغیر لائسنس موٹر سائیکل پر 2,000 روپے اور کار پر 5,000 روپے کا چالان ہوتا ہے۔"
      }
    ],
    "contentEn": "How to clear blocked vehicle transfer records resulting from unpaid e-challans.",
    "contentUr": "غیر ادا شدہ ای چالان کی وجہ سے روکی گئی گاڑی کی بائے نیم منتقلی کا حل۔",
    "relatedSlugs": [
      "/traffic/e-challan-check-online",
      "/traffic/vehicle-registration-transfer"
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
    "directAnswerEn": "Vehicle Token Tax in Pakistan can be calculated and paid online via ePay Punjab or Sindh Excise portals. Cars under 1000cc pay a one-time Lifetime Token Tax, while engines above 1000cc pay annual token tax based on engine capacity (cc) and Filer/Non-Filer income tax status.",
    "directAnswerUr": "گاڑیوں کا ٹوکن ٹیکس ای پے پنجاب یا سندھ ایکسائز ایپ سے آن لائن ادا کیا جا سکتا ہے۔ 1000 سی سی سے کم گاڑیوں کا لائف ٹائم ٹیکس ہوتا ہے جبکہ بڑی گاڑیوں کا سالانہ ٹیکس چالان ہوتا ہے۔",
    "lastVerified": "August 10, 2026",
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
        "serviceEn": "Up to 1000cc (Lifetime Tax)",
        "serviceUr": "1000 سی سی تک (لائف ٹائم ٹیکس)",
        "normal": "PKR 10,000 - 15,000",
        "urgent": "One-Time Payment",
        "executive": "ePay Online"
      },
      {
        "serviceEn": "1001cc to 1300cc (Annual)",
        "serviceUr": "1001 سے 1300 سی سی (سالانہ)",
        "normal": "PKR 2,500 (Filer)",
        "urgent": "PKR 5,000 (Non-Filer)",
        "executive": "Annual Challan"
      }
    ],
    "faqs": [
      {
        "questionEn": "How to check e-Challan online by CNIC or Vehicle Registration?",
        "questionUr": "ای چالان آن لائن شناختی کارڈ یا گاڑی نمبر سے کیسے چیک کریں؟",
        "answerEn": "Visit echallan.psca.gop.pk, enter Vehicle Registration Number and Chassis / CNIC Number to view unpaid traffic fines and print challan.",
        "answerUr": "echallan.psca.gop.pk پر گاڑی کا نمبر درج کر کے ای چالان کی تفصیلات دیکھیں۔"
      },
      {
        "questionEn": "How to pay e-Challan fine via JazzCash or mobile banking?",
        "questionUr": "ای چالان جرمانہ جاز کیش یا بینک ایپ سے کیسے ادا کریں؟",
        "answerEn": "Open JazzCash / Easypaisa app → Select Govt Payments / E-Challan → Enter 18-digit Challan PSID → Confirm payment to clear fine instantly.",
        "answerUr": "جاز کیش میں گورنمنٹ پیمنٹس → ای چالان منتخب کریں اور PSID درج کر کے ادا کریں۔"
      },
      {
        "questionEn": "What is the fine for driving without a valid DLIMS license?",
        "questionUr": "بغیر لائسنس گاڑی یا موٹر سائیکل چلانے پر کتنا چالان ہوتا ہے؟",
        "answerEn": "Driving without valid license incurs e-challan fine of PKR 2,000 for motorbikes and PKR 5,000 for cars along with vehicle impoundment risks.",
        "answerUr": "بغیر لائسنس موٹر سائیکل پر 2,000 روپے اور کار پر 5,000 روپے کا چالان ہوتا ہے۔"
      }
    ],
    "contentEn": "Complete engine capacity (cc) rate chart for Filer vs Non-Filer vehicle tax assessment.",
    "contentUr": "فائلر اور نان فائلر صارفین کے لیے سی سی کے لحاظ سے ٹوکن ٹیکس کے ریٹس۔",
    "relatedSlugs": [
      "/traffic/e-challan-check-online",
      "/traffic/vehicle-registration-transfer"
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
    "directAnswerEn": "To get a Driving License in Pakistan, first apply online for a Learner Permit on DLIMS (dlims.punjab.gov.pk) or visit any Traffic Police Licensing Center. After 42 days, book a driving test to get your regular 5-year Motorcar/Motorcycle driving license.",
    "directAnswerUr": "ڈرائیونگ لائسنس حاصل کرنے کے لیے پہلے DLIMS پورٹل سے لرنر پرمٹ بنائیں۔ 42 دن بعد پریکٹیکل اور روڈ ٹیسٹ پاس کر کے 5 سالہ کمپیوٹرائزڈ لائسنس حاصل کریں۔",
    "lastVerified": "August 10, 2026",
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
        "questionEn": "How to check e-Challan online by CNIC or Vehicle Registration?",
        "questionUr": "ای چالان آن لائن شناختی کارڈ یا گاڑی نمبر سے کیسے چیک کریں؟",
        "answerEn": "Visit echallan.psca.gop.pk, enter Vehicle Registration Number and Chassis / CNIC Number to view unpaid traffic fines and print challan.",
        "answerUr": "echallan.psca.gop.pk پر گاڑی کا نمبر درج کر کے ای چالان کی تفصیلات دیکھیں۔"
      },
      {
        "questionEn": "How to pay e-Challan fine via JazzCash or mobile banking?",
        "questionUr": "ای چالان جرمانہ جاز کیش یا بینک ایپ سے کیسے ادا کریں؟",
        "answerEn": "Open JazzCash / Easypaisa app → Select Govt Payments / E-Challan → Enter 18-digit Challan PSID → Confirm payment to clear fine instantly.",
        "answerUr": "جاز کیش میں گورنمنٹ پیمنٹس → ای چالان منتخب کریں اور PSID درج کر کے ادا کریں۔"
      },
      {
        "questionEn": "What is the fine for driving without a valid DLIMS license?",
        "questionUr": "بغیر لائسنس گاڑی یا موٹر سائیکل چلانے پر کتنا چالان ہوتا ہے؟",
        "answerEn": "Driving without valid license incurs e-challan fine of PKR 2,000 for motorbikes and PKR 5,000 for cars along with vehicle impoundment risks.",
        "answerUr": "بغیر لائسنس موٹر سائیکل پر 2,000 روپے اور کار پر 5,000 روپے کا چالان ہوتا ہے۔"
      }
    ],
    "contentEn": "Online renewal process for expired driving licenses and e-license PDF download on smartphone.",
    "contentUr": "آن لائن ای لائسنس پی ڈی ایف ڈاؤن لوڈ کرنے کا طریقہ۔",
    "relatedSlugs": [
      "/traffic/e-challan-check-online",
      "/traffic/token-tax-check"
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
    "directAnswerEn": "Transferring vehicle ownership in Pakistan requires mandatory NADRA biometric verification by both the buyer and seller. Pay the transfer fee via ePay Punjab or Excise portal, complete biometric verification at any e-Khidmat / NADRA e-Sahulat franchise, and submit original Smart Card.",
    "directAnswerUr": "گاڑی کی بائے نیم منتقلی کے لیے خریدنے اور بیچنے والے دونوں کی نادرا بایومیٹرک تصدیق لازمی ہے۔ فیس ای پے سے ادا کر کے ای خدمت سینٹر میں بائیو میٹرک کروائیں۔",
    "lastVerified": "August 10, 2026",
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
        "questionEn": "How to check e-Challan online by CNIC or Vehicle Registration?",
        "questionUr": "ای چالان آن لائن شناختی کارڈ یا گاڑی نمبر سے کیسے چیک کریں؟",
        "answerEn": "Visit echallan.psca.gop.pk, enter Vehicle Registration Number and Chassis / CNIC Number to view unpaid traffic fines and print challan.",
        "answerUr": "echallan.psca.gop.pk پر گاڑی کا نمبر درج کر کے ای چالان کی تفصیلات دیکھیں۔"
      },
      {
        "questionEn": "How to pay e-Challan fine via JazzCash or mobile banking?",
        "questionUr": "ای چالان جرمانہ جاز کیش یا بینک ایپ سے کیسے ادا کریں؟",
        "answerEn": "Open JazzCash / Easypaisa app → Select Govt Payments / E-Challan → Enter 18-digit Challan PSID → Confirm payment to clear fine instantly.",
        "answerUr": "جاز کیش میں گورنمنٹ پیمنٹس → ای چالان منتخب کریں اور PSID درج کر کے ادا کریں۔"
      },
      {
        "questionEn": "What is the fine for driving without a valid DLIMS license?",
        "questionUr": "بغیر لائسنس گاڑی یا موٹر سائیکل چلانے پر کتنا چالان ہوتا ہے؟",
        "answerEn": "Driving without valid license incurs e-challan fine of PKR 2,000 for motorbikes and PKR 5,000 for cars along with vehicle impoundment risks.",
        "answerUr": "بغیر لائسنس موٹر سائیکل پر 2,000 روپے اور کار پر 5,000 روپے کا چالان ہوتا ہے۔"
      }
    ],
    "contentEn": "Biometric transfer deadline rules and penalties for driving on open transfer letter.",
    "contentUr": "اوپن ٹرانسفر لیٹر پر گاڑی چلانے کے جرمانے اور نئے قوانین۔",
    "relatedSlugs": [
      "/traffic/token-tax-check",
      "/traffic/e-challan-check-by-cnic"
    ]
  }
};
