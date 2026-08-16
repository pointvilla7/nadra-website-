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
  // NADRA ARTICLES
  'cnic-kaise-banaye': {
    slug: 'cnic-kaise-banaye',
    fullPath: '/nadra/cnic-kaise-banaye',
    categoryId: 'nadra',
    titleEn: 'How to Apply for New NADRA CNIC in Pakistan (2026 Complete Guide)',
    titleUr: 'نیا نادرا شناختی کارڈ کیسے بنوائیں؟ 2026 کی مکمل اور آسان رہنمائی',
    metaDescriptionEn: 'Complete guide to apply for a new NADRA CNIC in Pakistan. Normal, Urgent & Executive fee tables, document checklist, Pak-ID app, and tracking 2026.',
    metaDescriptionUr: 'نیا نادرا شناختی کارڈ بنوانے کا طریقہ، ضروری کاغذات، نادرا فیس کی تفصیلات (نارمل 750 روپے، ارجنٹ 1500 روپے، ایگزیکٹو 2500 روپے) اور آن لائن اپلائی کرنے کا مکمل گائیڈ۔',
    directAnswerEn: 'To get a new NADRA CNIC in Pakistan, citizens aged 18 or above must visit any NADRA Registration Center (NRC) or apply via the Pak-ID mobile app. Bring your original B-Form (CRC), one parent or blood relative with a valid CNIC for biometric verification, and proof of address. Fee starts at PKR 750 for Normal delivery (31 days).',
    directAnswerUr: 'پاکستان میں نیا نادرا شناختی کارڈ (CNIC) بنوانے کے لیے 18 سال یا اس سے زائد عمر کے شہری اپنے قریب ترین نادرا رجسٹریشن سینٹر یا پاک آئی ڈی ایپ کے ذریعے اپلائی کر سکتے ہیں۔ ساتھ اپنا اصل بی فارم، والدین یا کسی بلڈ ریلیٹو کا اصل شناختی کارڈ (بایومیٹرک تصدیق کے لیے) اور پتہ کا ثبوت لائیں۔ نارمل فیس 750 روپے ہے جس میں 31 دن کے اندر کارڈ ملتا ہے۔',
    lastVerified: 'August 10, 2026',
    officialSource: {
      name: 'NADRA Pak-ID Official Portal',
      url: 'https://id.nadra.gov.pk/',
    },
    author: {
      name: 'Editorial Team',
      role: 'NADRA Documentation Specialist',
    },
    feeStructure: [
      { serviceEn: 'Smart CNIC (New / First Time)', serviceUr: 'سمارٹ شناختی کارڈ (پہلی بار)', normal: 'PKR 750 (31 Days)', urgent: 'PKR 1,500 (15 Days)', executive: 'PKR 2,500 (7 Days)' },
      { serviceEn: 'Modification in CNIC', serviceUr: 'شناختی کارڈ میں ترمیم', normal: 'PKR 750 (31 Days)', urgent: 'PKR 1,500 (15 Days)', executive: 'PKR 2,500 (7 Days)' },
    ],
    steps: [
      {
        stepNumber: 1,
        titleEn: 'Gather Required Documents',
        titleUr: 'ضروری کاغذات اکٹھے کریں',
        detailEn: 'Obtain original B-Form (CRC), Matric certificate or birth certificate, and CNIC copy of your father/mother.',
        detailUr: 'اصل بی فارم، میٹرک سرٹیفکیٹ یا تاریخ پیدائش کی سند اور والد یا والدہ کے شناختی کارڈ کی کاپی پاس رکھیں۔',
      },
      {
        stepNumber: 2,
        titleEn: 'Visit NADRA Center or Download Pak-ID App',
        titleUr: 'نادرا سینٹر جائیں یا پاک آئی ڈی ایپ ڈاؤن لوڈ کریں',
        detailEn: 'Take a token at NRC or log in to the official Pak-ID portal/mobile app.',
        detailUr: 'کسی بھی نادرا سینٹر سے ٹوکن حاصل کریں یا پاک آئی ڈی آفیشل موبائل ایپ میں لاگ ان کریں۔',
      },
      {
        stepNumber: 3,
        titleEn: 'Biometric & Data Processing',
        titleUr: 'بایومیٹرک اور ڈیٹا کی کارروائی',
        detailEn: 'Complete fingerprint scanning, photograph capture, and data entry with blood relative attestation.',
        detailUr: 'فنگر پرنٹس، تازہ تصویر اور خونی رشتے دار کے ذریعے بایومیٹرک تصدیق مکمل کروائیں۔',
      },
      {
        stepNumber: 4,
        titleEn: 'Fee Payment & Card Delivery',
        titleUr: 'فیس کی ادائیگی اور کارڈ کی وصولی',
        detailEn: 'Pay the processing fee at counter and collect your CNIC or receive it via courier.',
        detailUr: 'کاؤنٹر پر فیس ادا کریں اور مقررہ تاریخ پر شناختی کارڈ ڈلیوری یا سینٹر سے وصول کریں۔',
      },
    ],
    faqs: [
      {
        questionEn: 'What is the minimum age to apply for CNIC in Pakistan?',
        questionUr: 'پاکستان میں شناختی کارڈ بنوانے کی کم از کم عمر کیا ہے؟',
        answerEn: 'The minimum eligible age for a Smart CNIC is 18 years. For children under 18, a Juvenile Card (B-Form) is issued instead.',
        answerUr: 'سمارٹ شناختی کارڈ کی درخواست کے لیے کم از کم عمر 18 سال ہے۔ 18 سال سے کم عمر کے بچوں کا جووینائل کارڈ بنتا ہے۔',
      },
      {
        questionEn: 'Can I apply for CNIC online without visiting a NADRA center?',
        questionUr: 'کیا میں نادرا سینٹر گئے بغیر آن لائن شناختی کارڈ بنوا سکتا ہوں؟',
        answerEn: 'Yes, for renewals and modifications you can use the Pak-ID mobile app or id.nadra.gov.pk. However, for a FIRST-TIME CNIC, you must physically visit a NADRA Registration Center (NRC) for biometric verification (fingerprints and photograph capture).',
        answerUr: 'ہاں، تجدید اور ترمیم کے لیے پاک آئی ڈی ایپ استعمال کی جا سکتی ہے۔ لیکن پہلی بار بنوانے کے لیے بایومیٹرک (فنگر پرنٹس) کی وجہ سے نادرا سینٹر جانا ضروری ہے۔',
      },
      {
        questionEn: 'How long does it take to get a CNIC after applying?',
        questionUr: 'درخواست دینے کے بعد شناختی کارڈ کب تک مل جاتا ہے؟',
        answerEn: 'Delivery timelines are: Normal (31 working days) at PKR 750, Urgent (15 working days) at PKR 1,500, and Executive (7 working days) at PKR 2,500. You can also opt for courier home delivery.',
        answerUr: 'نارمل پر 31 کام کے دن (750 روپے)، ارجنٹ پر 15 کام کے دن (1,500 روپے)، اور ایگزیکٹو پر 7 کام کے دن (2,500 روپے) لگتے ہیں۔',
      },
      {
        questionEn: 'What documents are required if my B-Form is lost?',
        questionUr: 'اگر بی فارم گم ہو جائے تو کیا دستاویزات درکار ہیں؟',
        answerEn: 'If B-Form is lost, bring your Union Council Birth Certificate, Matric certificate or any school certificate showing date of birth, and both parents\' original CNICs. NADRA can trace records from the family tree database.',
        answerUr: 'اگر بی فارم گم ہو تو یونین کونسل برتھ سرٹیفکیٹ، میٹرک یا سکول سرٹیفکیٹ اور والدین کے اصل شناختی کارڈ لے کر نادرا سینٹر جائیں۔',
      },
      {
        questionEn: 'What is a blood relative and why is their CNIC needed?',
        questionUr: 'خونی رشتہ دار کون ہوتا ہے اور ان کا شناختی کارڈ کیوں چاہیے؟',
        answerEn: 'A blood relative means your father, mother, brother, or sister — anyone linked to you in the NADRA database. Their physical presence and biometric verification is required to confirm your family identity link in the national database.',
        answerUr: 'خونی رشتہ دار یعنی والدین، بھائی یا بہن جو نادرا ڈیٹا بیس میں آپ سے منسلک ہوں۔ ان کی بایومیٹرک تصدیق آپ کی شناخت قومی ڈیٹا بیس میں محفوظ کرنے کے لیے ضروری ہے۔',
      },
    ],
    contentEn: `Making a new Computerized National Identity Card (CNIC) in Pakistan is a seamless process managed by the National Database and Registration Authority (NADRA). Whether you are turning 18 or helping a family member register for the first time, following the official guidelines ensures fast processing without token delays.

NADRA launched the Smart CNIC — a chip-embedded identity document that stores biometric data and serves as your primary identity across Pakistan for all banking, visa, utility, and government service transactions. As of 2026, over 98 million Pakistani citizens hold a valid Smart CNIC.

Required Documents for New CNIC (First-Time Applicants):
• Original B-Form (CRC / Child Registration Certificate) — MOST IMPORTANT
• Original Matric certificate or school leaving certificate (showing date of birth)
• CNIC of both parents (original, not photocopy)
• Proof of residence: Utility bill or property documents (optional but recommended)
• One blood relative with original CNIC for biometric cross-verification

Application Process — NADRA Registration Center (NRC):
Visit your nearest NRC and take a token. The officer will scan your fingerprints (all 10 fingers), capture your live photograph, and enter your personal data. A blood relative must be physically present for identity attestation. After successful processing, your tracking ID slip is issued.

Pak-ID Online Application (for Renewal & Modification Only):
For existing card holders renewing expired CNICs, NADRA's Pak-ID app allows smartphone fingerprint capture, online photo upload, and fee payment via JazzCash, Easypaisa, or credit card. Home delivery is available.

Fee Payment Methods:
Fee can be paid at the NADRA center counter, State Bank, NBP branches, or digitally via Pak-ID app using JazzCash, Easypaisa, or 1Link internet banking.`,
    contentUr: `پاکستان میں نیا کمپیوٹرائزڈ قومی شناختی کارڈ (CNIC) بنوانا اب انتہائی آسان اور شفاف عمل ہے۔ نیشنل ڈیٹا بیس اینڈ رجسٹریشن اتھارٹی (نادرا) نے شہریوں کی سہولت کے لیے سمارٹ کارڈ کے طریقہ کار کو مزید جدید بنا دیا ہے۔

نادرا کا سمارٹ شناختی کارڈ ایک چِپ والا دستاویز ہے جو آپ کے بایومیٹرک ڈیٹا کو محفوظ رکھتا ہے اور پاکستان میں بینکنگ، ویزا، سرکاری خدمات اور یوٹیلیٹی بلز کے لیے لازمی شناختی دستاویز ہے۔

پہلی بار شناختی کارڈ کے لیے ضروری کاغذات:
• اصل بی فارم (چائلڈ رجسٹریشن سرٹیفکیٹ) — سب سے ضروری دستاویز
• اصل میٹرک یا سکول سرٹیفکیٹ (تاریخ پیدائش کے ساتھ)
• والدین کے اصل شناختی کارڈ
• قیام کا ثبوت: بجلی کا بل یا جائیداد کی دستاویزات
• ایک خونی رشتہ دار جو بایومیٹرک تصدیق کریں

نادرا سینٹر کا طریقہ کار:
قریبی نادرا رجسٹریشن سینٹر (NRC) سے ٹوکن لیں۔ آفیسر آپ کے دس انگلیوں کے نشانات، تازہ تصویر اور ذاتی معلومات درج کرے گا۔ خونی رشتہ دار کا جسمانی موجود ہونا لازمی ہے۔ پروسیسنگ کے بعد ٹریکنگ آئی ڈی سلپ ملے گی۔`,
    relatedSlugs: ['/nadra/nadra-card-fee', '/nadra/tracking-id', '/nadra/b-form-kaise-banaye'],
  },

  'b-form-kaise-banaye': {
    slug: 'b-form-kaise-banaye',
    fullPath: '/nadra/b-form-kaise-banaye',
    categoryId: 'nadra',
    titleEn: 'NADRA B-Form (CRC) Registration Guide 2026: Documents & Fee',
    titleUr: 'نادرا بی فارم (CRC) بنوانے کا طریقہ، کاغذات اور فیس 2026',
    metaDescriptionEn: 'NADRA B-Form (CRC) registration guide 2026. Document requirements for newborn & child registration, fee structure, and Pak-ID online application.',
    metaDescriptionUr: 'نادرا بی فارم (چائلڈ رجسٹریشن سرٹیفکیٹ) بنوانے کا طریقہ۔ یونین کونسل برتھ سرٹیفکیٹ، ضروری کاغذات، 50 روپے فیس اور نادرا سینٹر کے آسان مراحل۔',
    directAnswerEn: 'To get a NADRA B-Form (Child Registration Certificate / CRC) for children under 18, parents must register the birth at their local Union Council / Cantonment Board first. Take the Union Council Birth Certificate, original CNICs of both parents, and visit any NADRA office. Normal B-Form processing fee is PKR 50.',
    directAnswerUr: '18 سال سے کم عمر بچوں کا نادرا بی فارم (CRC) بنوانے کے لیے پہلے متعلقہ یونین کونسل یا کینٹ بورڈ سے کمپیوٹرائزڈ برتھ سرٹیفکیٹ حاصل کریں۔ اس کے بعد والدین اپنے اصل شناختی کارڈز اور برتھ سرٹیفکیٹ کے ساتھ نادرا سینٹر تشریف لے جائیں۔ نادرا بی فارم کی نارمل فیس صرف 50 روپے ہے۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'NADRA Official Portal', url: 'https://www.nadra.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Civic Documentation Analyst' },
    feeStructure: [{ serviceEn: 'Child Registration Certificate (B-Form)', serviceUr: 'چائلڈ رجسٹریشن سرٹیفکیٹ (بی فارم)', normal: 'PKR 50', urgent: 'PKR 500', executive: 'PKR 500' }],
    faqs: [
          {
                'questionEn': 'What is the processing fee for NADRA services in 2026?',
                'questionUr': '2026 میں نادرا سروسز کی سرکاری فیس کتنی ہے؟',
                'answerEn': 'Official NADRA processing fees depend on speed: Normal PKR 750 (15 working days), Urgent PKR 1,500 (7 working days), Executive PKR 2,500 (2-4 working days).',
                'answerUr': 'نارمل فیس 750 روپے (15 دن)، ارجنٹ 1500 روپے (7 دن) اور ایگزیکٹو 2500 روپے (2 تا 4 دن) ہے۔'
          },
          {
                'questionEn': 'Which documents are required for NADRA application?',
                'questionUr': 'نادرا درخواست کے لیے کون سے دستاویزات درکار ہیں؟',
                'answerEn': 'You need original CNIC / B-form, head of family CNIC copy, white background passport photograph, and fee receipt.',
                'answerUr': 'اصل شناختی کارڈ یا بی فارم، سرپرست کا شناختی کارڈ اور فیس رسید درکار ہے۔'
          },
          {
                'questionEn': 'How can I track NADRA application status online?',
                'questionUr': 'نادرا درخواست کا آن لائن سٹیٹس کیسے ٹریک کریں؟',
                'answerEn': 'Track at id.nadra.gov.pk by entering your 12-digit Tracking ID or send an SMS with your Tracking ID to 8400.',
                'answerUr': 'id.nadra.gov.pk پر 12 ہندسوں کا ٹریکنگ نمبر درج کریں یا 8400 پر SMS بھیجیں۔'
          }
    ],
    contentEn: `The NADRA Child Registration Certificate (CRC), widely known as the B-Form, is an official document registering children under 18 years of age in the national database.`,
    contentUr: `چائلڈ رجسٹریشن سرٹیفکیٹ (CRC) جسے عام زبان میں 'بی فارم' کہا جاتا ہے، 18 سال سے کم عمر بچوں کی نادرا کے قومی ڈیٹا بیس میں اندارج کی سند ہے۔`,
    relatedSlugs: ['/nadra/cnic-kaise-banaye', '/nadra/family-registration-certificate'],
  },

  'nadra-card-fee': {
    slug: 'nadra-card-fee',
    fullPath: '/nadra/nadra-card-fee',
    categoryId: 'nadra',
    titleEn: 'NADRA Card Fee Structure 2026 (CNIC, NICOP, FRC & Renewal Rates)',
    titleUr: 'نادرا کارڈ فیس شیڈول 2026 (شناختی کارڈ، نائیکوپ، فیملی سرٹیفکیٹ)',
    metaDescriptionEn: 'Official NADRA Card Fee Schedule 2026 for CNIC, Smart Card renewal, Executive counters, NICOP overseas card, FRC, and Duplicate card issuance.',
    metaDescriptionUr: 'نادرا سمارٹ شناختی کارڈ، نائیکوپ، ڈپلیکیٹ کارڈ، فیملی سرٹیفکیٹ اور تجدید کی فیس 2026 کی آفیشل اور اپڈیٹ شدہ فہرست۔',
    directAnswerEn: 'As of 2026, NADRA Smart CNIC fees are: Normal PKR 750 (31 days), Urgent PKR 1,500 (15 days), and Executive PKR 2,500 (7 days). Family Registration Certificate (FRC) costs PKR 1,000. Overseas NICOP fees range from $20 to $100 depending on zone and category.',
    directAnswerUr: 'سال 2026 کے تازہ ترین نادرا ریٹس کے مطابق سمارٹ شناختی کارڈ فیس: نارمل 750 روپے، ارجنٹ 1,500 روپے اور ایگزیکٹو 2,500 روپے ہے۔ فیملی رجسٹریشن سرٹیفکیٹ (FRC) کی فیس 1,000 روپے ہے جبکہ نائیکوپ (NICOP) کی فیس زون کے لحاظ سے 20 ڈالر سے 100 ڈالر تک ہے۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'NADRA Official Fee Schedule Portal', url: 'https://www.nadra.gov.pk/fee-structure/' },
    author: { name: 'Editorial Team', role: 'Financial & Policy Desk' },
    feeStructure: [
      { serviceEn: 'Smart CNIC (New / First Time)', serviceUr: 'سمارٹ کارڈ (پہلی بار)', normal: 'PKR 750 (31 Days)', urgent: 'PKR 1,500 (15 Days)', executive: 'PKR 2,500 (7 Days)' },
      { serviceEn: 'Smart CNIC (Renewal / Expiry)', serviceUr: 'سمارٹ کارڈ (تجدید)', normal: 'PKR 750 (31 Days)', urgent: 'PKR 1,500 (15 Days)', executive: 'PKR 2,500 (7 Days)' },
      { serviceEn: 'Smart CNIC (Modification / Correction)', serviceUr: 'سمارٹ کارڈ (ترمیم / تصحیح)', normal: 'PKR 750 (31 Days)', urgent: 'PKR 1,500 (15 Days)', executive: 'PKR 2,500 (7 Days)' },
      { serviceEn: 'Duplicate CNIC (Lost / Stolen)', serviceUr: 'ڈپلیکیٹ کارڈ (گم شدہ / چوری)', normal: 'PKR 750 (31 Days)', urgent: 'PKR 1,500 (15 Days)', executive: 'PKR 2,500 (7 Days)' },
      { serviceEn: 'Family Registration Certificate (FRC)', serviceUr: 'فیملی سرٹیفکیٹ (FRC)', normal: 'PKR 1,000 (Same Day)', urgent: 'N/A', executive: 'PKR 1,000 (Online PDF)' },
      { serviceEn: 'NICOP Overseas Card (Zone A Countries)', serviceUr: 'نائیکوپ (زون A - امریکہ، برطانیہ، یورپ)', normal: '$39 USD', urgent: '$59 USD', executive: '$79 USD' },
      { serviceEn: 'NICOP Overseas Card (Zone B Countries)', serviceUr: 'نائیکوپ (زون B - مڈل ایسٹ، ایشیا)', normal: '$20 USD', urgent: '$39 USD', executive: '$59 USD' },
    ],
    steps: [
      { stepNumber: 1, titleEn: 'Identify Required NADRA Service Tier', titleUr: 'سروس کی قسم منتخب کریں', detailEn: 'Determine whether you need Normal (31 days), Urgent (15 days), or Executive (7 days) processing for your Smart CNIC or NICOP.', detailUr: 'اپنی ضرورت کے مطابق نارمل، ارجنٹ یا ایگزیکٹو نادرا کیٹیگری منتخب کریں۔' },
      { stepNumber: 2, titleEn: 'Prepare Mandatory Documentation', titleUr: 'ضروری کاغذات اکٹھے کریں', detailEn: 'Gather original B-Form, parents\' original CNICs, or previous expired card depending on whether it is new, renewal, or duplicate.', detailUr: 'اصل بی فارم، والدین کے شناختی کارڈ اور پرانا شناختی کارڈ ساتھ رکھیں۔' },
      { stepNumber: 3, titleEn: 'Visit NRC or Pak-ID Online App', titleUr: 'نادرا سینٹر جائیں یا آن لائن اپلائی کریں', detailEn: 'Visit your nearest NADRA Registration Center for counter fee payment or submit via Pak-ID mobile portal using digital banking.', detailUr: 'کاؤنٹر پر فیس ادا کریں یا پاک آئی ڈی پورٹل کے ذریعے آن لائن فیس جمع کروائیں۔' },
      { stepNumber: 4, titleEn: 'Collect Tracking Slip & Delivery', titleUr: 'ٹریکنگ سلپ لیں اور ڈلیوری حاصل کریں', detailEn: 'Retain the 12-digit tracking receipt to trace your card printing status online or via SMS to 8400 until doorstep courier delivery.', detailUr: '12 ہندسوں کی ٹریکنگ سلپ سنبھال کر رکھیں اور 8400 یا ویب پورٹل سے ٹریک کریں۔' },
    ],
    faqs: [
      {
        questionEn: 'What is the NADRA fee for a duplicate/lost CNIC in 2026?',
        questionUr: 'سال 2026 میں گم شدہ یا نقل شناختی کارڈ کی نادرا فیس کتنی ہے؟',
        answerEn: 'A duplicate or replacement CNIC (for lost/stolen cards) has the exact same fee as a regular card: Normal PKR 750, Urgent PKR 1,500, Executive PKR 2,500. There is zero penalty surcharge.',
        answerUr: 'گم شدہ یا چوری ہونے والے شناختی کارڈ کی نقل کی فیس عام کارڈ جیسی ہے: نارمل 750 روپے، ارجنٹ 1,500 روپے، ایگزیکٹو 2,500 روپے۔ کوئی اضافی جرمانہ فیس نہیں ہے۔',
      },
      {
        questionEn: 'Is NICOP available for foreign-born Pakistanis with dual nationality?',
        questionUr: 'کیا دوہری شہریت رکھنے والے پاکستانی نائیکوپ بنوا سکتے ہیں؟',
        answerEn: 'Yes. Overseas Pakistanis and dual-nationality citizens holding foreign passports can apply for NICOP (National Identity Card for Overseas Pakistanis). Fees range from $20 to $79 depending on country zone and processing urgency.',
        answerUr: 'جی ہاں۔ غیر ملکی شہریت رکھنے والے پاکستانی نائیکوپ (NICOP) بنوا سکتے ہیں جس سے پاکستان میں ویزا فری داخلہ اور تمام شہری حقوق حاصل ہوتے ہیں۔',
      },
      {
        questionEn: 'Can I pay NADRA fee online via JazzCash or Easypaisa?',
        questionUr: 'کیا نادرا فیس جاز کیش یا ایزی پیسہ سے آن لائن ادا کی جا سکتی ہے؟',
        answerEn: 'Yes. NADRA card processing fees can be paid digitally on the Pak-ID app (id.nadra.gov.pk) using JazzCash, Easypaisa, debit/credit cards, or 1Link internet banking.',
        answerUr: 'ہاں، نادرا فیس پاک آئی ڈی پورٹل پر جاز کیش، ایزی پیسہ، کریڈٹ کارڈ یا 1Link انٹرنیٹ بینکنگ سے آن لائن ادا کی جا سکتی ہے۔',
      },
      {
        questionEn: 'How much does a NADRA Family Registration Certificate (FRC) cost?',
        questionUr: 'نادرا فیملی رجسٹریشن سرٹیفکیٹ (FRC) کی فیس کتنی ہے؟',
        answerEn: 'The official fee for an FRC (by birth, marriage, or adoption) is PKR 1,000. When applied online via Pak-ID, the verified PDF copy is emailed within hours.',
        answerUr: 'ایف آر سی سرٹیفکیٹ کی آفیشل فیس 1,000 روپے ہے اور آن لائن اپلائی کرنے پر پی ڈی ایف فوری ایمیل ہوتی ہے۔',
      },
    ],
    contentEn: `NADRA CNIC Fee Structure is the official government tariff schedule set by the National Database and Registration Authority (NADRA) that regulates processing rates for new Smart CNICs, renewals, modifications, FRCs, and NICOP cards across Pakistan.

## Official NADRA Smart CNIC Tariff 2026
Knowing the exact fee schedule saves citizens from overpaying or falling victim to unauthorized private agents charging illegal processing surcharges. All official fees are standardized across all NADRA Registration Centers (NRC) and the Pak-ID portal.

• **Normal Processing**: PKR 750 (Delivery in 31 working days)
• **Urgent Processing**: PKR 1,500 (Delivery in 15 working days)
• **Executive Processing**: PKR 2,500 (Delivery in 7 working days)

These baseline rates apply uniformly for first-time Smart CNIC issuance, expired card renewal, address or marital modification, and duplicate card issuance following lost or stolen cards.

## Overseas NICOP & FRC Fee Matrix
For Pakistani citizens residing abroad or holding dual nationality, NICOP fees are categorized into country zones:

• **Zone A Countries** (USA, UK, Canada, Europe, Australia): Normal $39 USD, Urgent $59 USD, Executive $79 USD.
• **Zone B Countries** (Middle East, Gulf, Asian Nations): Normal $20 USD, Urgent $39 USD, Executive $59 USD.
• **Family Registration Certificate (FRC)**: Standard fee is PKR 1,000 for By Birth, By Marriage, or By Adoption categories.

## Digital Payment & Fraud Warning
Official NADRA fees can be deposited at NRC cash counters, National Bank of Pakistan (NBP) branches, or online via the official Pak-ID web portal using JazzCash, Easypaisa, or credit/debit cards.

NADRA does NOT endorse private agents or middle-men. Never pay extra cash fees to unauthorized individuals. Report extortion or agent fraud directly to the central NADRA helpline at 1777.`,
    contentUr: `نادرا شناختی کارڈ فیس شیڈول حکومت پاکستان اور نادرا کا کا مصدقہ اور سرکاری ریٹ چارٹ ہے جو سمارٹ شناختی کارڈ، تجدید، ترمیم، ایف آر سی اور نائیکوپ کی فیسوں کو منظم کرتا ہے۔

## نادرا سمارٹ کارڈ فیس 2026
آفیشل فیس کا علم ہونا شہریوں کو غیر مجاز ایجنٹوں کی زیادہ وصولی سے محفوظ رکھتا ہے۔ تمام نادرا سینٹرز اور پاک آئی ڈی پورٹل پر ریٹس یکساں ہیں۔

• **نارمل پروسیسنگ**: 750 روپے (31 کام کے دن)
• **ارجنٹ پروسیسنگ**: 1,500 روپے (15 کام کے دن)
• **ایگزیکٹو پروسیسنگ**: 2,500 روپے (7 کام کے دن)

یہ ریٹس نیا کارڈ بنوانے، میعاد ختم ہونے پر تجدید، قوائف میں ترمیم اور گم شدہ کارڈ کی نقل پر یکساں لاگو ہوتے ہیں۔

## نائیکوپ اور فیملی سرٹیفکیٹ فیس
سمندر پار پاکستانیوں کے لیے نائیکوپ فیس زون کے لحاظ سے تقسیم کی گئی ہے:

• **زون A ممالک** (امریکہ، برطانیہ، کینیڈا، یورپ): نارمل $39، ارجنٹ $59، ایگزیکٹو $79 ڈالر
• **زون B ممالک** (مڈل ایسٹ، ایشیا): نارمل $20، ارجنٹ $39، ایگزیکٹو $59 ڈالر
• **فیملی سرٹیفکیٹ (FRC)**: آفیشل فیس 1,000 روپے ہے

فیس کی آن لائن ادائیگی پاک آئی ڈی ایپ پر جاز کیش، ایزی پیسہ یا بینک کریڈٹ کارڈ سے ہو سکتی ہے۔`,
    relatedSlugs: ['/nadra/cnic-kaise-banaye', '/nadra/tracking-id', '/nadra/b-form-kaise-banaye'],
  },

  'tracking-id': {
    slug: 'tracking-id',
    fullPath: '/nadra/tracking-id',
    categoryId: 'nadra',
    titleEn: 'NADRA CNIC Tracking Online 2026: Check Status via SMS 8400 & Website',
    titleUr: 'نادرا ٹریکنگ 8400: شناختی کارڈ کا سٹیٹس آن لائن چیک کریں',
    metaDescriptionEn: 'Track your NADRA CNIC, NICOP, or Family Certificate application status online using your 12-digit Tracking ID or by sending SMS to 8400.',
    metaDescriptionUr: '12 ہندسوں کی نادرا ٹریکنگ آئی ڈی یا 8400 پر ایس ایم ایس کے ذریعے اپنے شناختی کارڈ کی تیاری کی صورتحال چیک کریں۔',
    directAnswerEn: 'You can track your NADRA application status by sending your 12-digit Tracking ID via SMS to 8400 (costs approx. PKR 2+tax) or for free online at id.nadra.gov.pk by logging into your account under "Track Application".',
    directAnswerUr: 'اپنے نادرا فارم کا سٹیٹس چیک کرنے کے لیے 12 ہندسوں کی ٹریکنگ آئی ڈی (Tracking ID) لکھ کر 8400 پر ایس ایم ایس بھیجیں یا id.nadra.gov.pk پر جا کر ٹریک ایپلی کیشن سیکشن میں فری چیک کریں۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'NADRA Pak-ID Tracking Portal', url: 'https://id.nadra.gov.pk/tracking/' },
    author: { name: 'Editorial Team', role: 'Digital Services Desk' },
    faqs: [
          {
                'questionEn': 'What is the processing fee for NADRA services in 2026?',
                'questionUr': '2026 میں نادرا سروسز کی سرکاری فیس کتنی ہے؟',
                'answerEn': 'Official NADRA processing fees depend on speed: Normal PKR 750 (15 working days), Urgent PKR 1,500 (7 working days), Executive PKR 2,500 (2-4 working days).',
                'answerUr': 'نارمل فیس 750 روپے (15 دن)، ارجنٹ 1500 روپے (7 دن) اور ایگزیکٹو 2500 روپے (2 تا 4 دن) ہے۔'
          },
          {
                'questionEn': 'Which documents are required for NADRA application?',
                'questionUr': 'نادرا درخواست کے لیے کون سے دستاویزات درکار ہیں؟',
                'answerEn': 'You need original CNIC / B-form, head of family CNIC copy, white background passport photograph, and fee receipt.',
                'answerUr': 'اصل شناختی کارڈ یا بی فارم، سرپرست کا شناختی کارڈ اور فیس رسید درکار ہے۔'
          },
          {
                'questionEn': 'How can I track NADRA application status online?',
                'questionUr': 'نادرا درخواست کا آن لائن سٹیٹس کیسے ٹریک کریں؟',
                'answerEn': 'Track at id.nadra.gov.pk by entering your 12-digit Tracking ID or send an SMS with your Tracking ID to 8400.',
                'answerUr': 'id.nadra.gov.pk پر 12 ہندسوں کا ٹریکنگ نمبر درج کریں یا 8400 پر SMS بھیجیں۔'
          }
    ],
    contentEn: `After applying for a new CNIC, modification, or renewal, tracking your card status allows you to know when it is dispatched.`,
    contentUr: `شناختی کارڈ کی درخواست کے بعد کارڈ کی پرنٹنگ اور ڈلیوری کی صورتحال جاننے کے لیے نادرا ٹریکنگ سسٹم استعمال کریں۔`,
    relatedSlugs: ['/nadra/cnic-kaise-banaye', '/nadra/card-renewal-online'],
  },

  'card-renewal-online': {
    slug: 'card-renewal-online',
    fullPath: '/nadra/card-renewal-online',
    categoryId: 'nadra',
    titleEn: 'NADRA CNIC Renewal Online Guide 2026: Mobile App & Portal Process',
    titleUr: 'نادرا شناختی کارڈ آن لائن رینیو کروانے کا طریقہ 2026',
    metaDescriptionEn: 'Renew your expired NADRA CNIC online using Pak-ID portal or mobile app. Documents required, fee payment, fingerprint scan via smartphone camera.',
    metaDescriptionUr: 'میعاد ختم شدہ نادرا شناختی کارڈ آن لائن رینیو کریں۔ موبائل کیمرے سے فنگر پرنٹ سکیننگ، فیس اور ہوم ڈلیوری کا آسان طریقہ۔',
    directAnswerEn: 'To renew an expired CNIC online, visit id.nadra.gov.pk or download Pak-ID mobile app. Log in, select "Renew CNIC", upload photo, scan fingerprints using smartphone camera, pay fee (Normal PKR 750), and get doorstep delivery.',
    directAnswerUr: 'شناختی کارڈ کی آن لائن تجدید کے لیے پاک آئی ڈی پورٹل (id.nadra.gov.pk) یا موبائل ایپ کھولیں۔ لاگ ان کر کے "تجدید" منتخب کریں اور گھر پر ہوم ڈلیوری حاصل کریں۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'NADRA Pak-ID Web Application', url: 'https://id.nadra.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Identity Services Specialist' },
    faqs: [
          {
                'questionEn': 'What is the processing fee for NADRA services in 2026?',
                'questionUr': '2026 میں نادرا سروسز کی سرکاری فیس کتنی ہے؟',
                'answerEn': 'Official NADRA processing fees depend on speed: Normal PKR 750 (15 working days), Urgent PKR 1,500 (7 working days), Executive PKR 2,500 (2-4 working days).',
                'answerUr': 'نارمل فیس 750 روپے (15 دن)، ارجنٹ 1500 روپے (7 دن) اور ایگزیکٹو 2500 روپے (2 تا 4 دن) ہے۔'
          },
          {
                'questionEn': 'Which documents are required for NADRA application?',
                'questionUr': 'نادرا درخواست کے لیے کون سے دستاویزات درکار ہیں؟',
                'answerEn': 'You need original CNIC / B-form, head of family CNIC copy, white background passport photograph, and fee receipt.',
                'answerUr': 'اصل شناختی کارڈ یا بی فارم، سرپرست کا شناختی کارڈ اور فیس رسید درکار ہے۔'
          },
          {
                'questionEn': 'How can I track NADRA application status online?',
                'questionUr': 'نادرا درخواست کا آن لائن سٹیٹس کیسے ٹریک کریں؟',
                'answerEn': 'Track at id.nadra.gov.pk by entering your 12-digit Tracking ID or send an SMS with your Tracking ID to 8400.',
                'answerUr': 'id.nadra.gov.pk پر 12 ہندسوں کا ٹریکنگ نمبر درج کریں یا 8400 پر SMS بھیجیں۔'
          }
    ],
    contentEn: `NADRA allows Pakistani citizens residing domestically or abroad to renew expired national identity cards online.`,
    contentUr: `نادرا کی پاک آئی ڈی ایپ نے شناختی کارڈ کی آن لائن تجدید کو آسان بنا دیا ہے۔`,
    relatedSlugs: ['/nadra/cnic-kaise-banaye', '/nadra/nadra-card-fee'],
  },

  'family-registration-certificate': {
    slug: 'family-registration-certificate',
    fullPath: '/nadra/family-registration-certificate',
    categoryId: 'nadra',
    titleEn: 'NADRA FRC Guide 2026: Apply Online for Family Registration Certificate',
    titleUr: 'نادرا ایف آر سی (FRC) فیملی سرٹیفکیٹ آن لائن حاصل کرنے کا طریقہ',
    metaDescriptionEn: 'How to get Family Registration Certificate (FRC) from NADRA online or center. Types (By Birth vs By Marriage), requirement, fee PKR 1,000.',
    metaDescriptionUr: 'نادرا ایف آر سی سرٹیفکیٹ آن لائن اور سینٹر سے حاصل کرنے کی مکمل معلوماتی گائیڈ۔ فیس 1000 روپے اور ضروری دستاویزات۔',
    directAnswerEn: 'Family Registration Certificate (FRC) lists your verified family structure in NADRA records. It comes in 3 types: By Birth, By Marriage, or By Adoption. Fee is PKR 1,000, and PDF copy is delivered instantly via email for online applications.',
    directAnswerUr: 'نادرا فیملی رجسٹریشن سرٹیفکیٹ (FRC) آپ کے خاندان کے رجسٹرڈ افراد کی مکمل سند ہے۔ آن لائن اپلائی کرنے پر ایمیل کے ذریعے پی ڈی ایف کاپی ملتی ہے۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'Pak-ID FRC Portal', url: 'https://id.nadra.gov.pk/family-registration-certificate/' },
    author: { name: 'Editorial Team', role: 'NADRA Verification Desk' },
    faqs: [
          {
                'questionEn': 'What is the processing fee for NADRA services in 2026?',
                'questionUr': '2026 میں نادرا سروسز کی سرکاری فیس کتنی ہے؟',
                'answerEn': 'Official NADRA processing fees depend on speed: Normal PKR 750 (15 working days), Urgent PKR 1,500 (7 working days), Executive PKR 2,500 (2-4 working days).',
                'answerUr': 'نارمل فیس 750 روپے (15 دن)، ارجنٹ 1500 روپے (7 دن) اور ایگزیکٹو 2500 روپے (2 تا 4 دن) ہے۔'
          },
          {
                'questionEn': 'Which documents are required for NADRA application?',
                'questionUr': 'نادرا درخواست کے لیے کون سے دستاویزات درکار ہیں؟',
                'answerEn': 'You need original CNIC / B-form, head of family CNIC copy, white background passport photograph, and fee receipt.',
                'answerUr': 'اصل شناختی کارڈ یا بی فارم، سرپرست کا شناختی کارڈ اور فیس رسید درکار ہے۔'
          },
          {
                'questionEn': 'How can I track NADRA application status online?',
                'questionUr': 'نادرا درخواست کا آن لائن سٹیٹس کیسے ٹریک کریں؟',
                'answerEn': 'Track at id.nadra.gov.pk by entering your 12-digit Tracking ID or send an SMS with your Tracking ID to 8400.',
                'answerUr': 'id.nadra.gov.pk پر 12 ہندسوں کا ٹریکنگ نمبر درج کریں یا 8400 پر SMS بھیجیں۔'
          }
    ],
    contentEn: `An FRC is widely required for foreign visa applications, embassy submissions, property inheritance, and legal verifications.`,
    contentUr: `ویزا درخواستوں اور سفارت خانوں کے لیے ایف آر سی سرٹیفکیٹ ایک بنیادی ترین قانونی دستاویز ہے۔`,
    relatedSlugs: ['/nadra/cnic-kaise-banaye', '/nadra/nadra-card-fee'],
  },

  'nicop-apply-online': {
    slug: 'nicop-apply-online',
    fullPath: '/nadra/nicop-apply-online',
    categoryId: 'nadra',
    titleEn: 'NADRA NICOP Apply Online 2026: Overseas Pakistani Card Fees & Process',
    titleUr: 'نائیکوپ (NICOP) آن لائن درخواست اور فیس 2026 (سمندر پار پاکستانی)',
    metaDescriptionEn: 'Complete NICOP application guide for overseas Pakistanis. Zone A & Zone B country fee tables, online application step-by-step, renewal, and dual nationality benefits.',
    metaDescriptionUr: 'سمندر پار پاکستانیوں کے لیے نائیکوپ آن لائن اپلائی کا طریقہ۔ زون فیس کی تفصیلات، کاغذات اور 150 سے زائد ممالک کے لیے ہدایات۔',
    directAnswerEn: 'National Identity Card for Overseas Pakistanis (NICOP) allows dual nationals and overseas Pakistanis visa-free entry into Pakistan. Apply online via id.nadra.gov.pk. Fees vary by country zone (Zone A Normal $39, Executive $75).',
    directAnswerUr: 'نائیکوپ (NICOP) سمندر پار اور دوہری شہریت کے حامل پاکستانیوں کے لیے ویزا فری آمد کی قانونی سند ہے۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'NADRA Overseas Services', url: 'https://id.nadra.gov.pk/e-nicop/' },
    author: { name: 'Editorial Team', role: 'Overseas Affairs Desk' },
    faqs: [
          {
                'questionEn': 'What is the processing fee for NADRA services in 2026?',
                'questionUr': '2026 میں نادرا سروسز کی سرکاری فیس کتنی ہے؟',
                'answerEn': 'Official NADRA processing fees depend on speed: Normal PKR 750 (15 working days), Urgent PKR 1,500 (7 working days), Executive PKR 2,500 (2-4 working days).',
                'answerUr': 'نارمل فیس 750 روپے (15 دن)، ارجنٹ 1500 روپے (7 دن) اور ایگزیکٹو 2500 روپے (2 تا 4 دن) ہے۔'
          },
          {
                'questionEn': 'Which documents are required for NADRA application?',
                'questionUr': 'نادرا درخواست کے لیے کون سے دستاویزات درکار ہیں؟',
                'answerEn': 'You need original CNIC / B-form, head of family CNIC copy, white background passport photograph, and fee receipt.',
                'answerUr': 'اصل شناختی کارڈ یا بی فارم، سرپرست کا شناختی کارڈ اور فیس رسید درکار ہے۔'
          },
          {
                'questionEn': 'How can I track NADRA application status online?',
                'questionUr': 'نادرا درخواست کا آن لائن سٹیٹس کیسے ٹریک کریں؟',
                'answerEn': 'Track at id.nadra.gov.pk by entering your 12-digit Tracking ID or send an SMS with your Tracking ID to 8400.',
                'answerUr': 'id.nadra.gov.pk پر 12 ہندسوں کا ٹریکنگ نمبر درج کریں یا 8400 پر SMS بھیجیں۔'
          }
    ],
    contentEn: `NICOP grants overseas Pakistanis full civil rights, ability to open bank accounts in Pakistan, purchase real estate, and enjoy visa-exempt entry.`,
    contentUr: `نائیکوپ ہولڈرز کو پاکستان میں تمام قومی و قانونی سہولیات حاصل ہوتی ہیں۔`,
    relatedSlugs: ['/nadra/nadra-card-fee', '/nadra/card-renewal-online'],
  },

  // PASSPORT ARTICLES
  'fee-2026': {
    slug: 'fee-2026',
    fullPath: '/passport/fee-2026',
    categoryId: 'passport',
    titleEn: 'Pakistan Passport Fee Structure 2026 (Normal, Urgent & e-Passport Rates)',
    titleUr: 'پاکستان پاسپورٹ فیس شیڈول 2026 (نارمل، ارجنٹ اور ای پاسپورٹ)',
    metaDescriptionEn: 'Official Pakistani Passport Fee 2026 table for 36-page, 72-page, 100-page booklets (5 and 10 years validity). Includes e-Passport and fast-track processing rates.',
    metaDescriptionUr: 'پاکستان ڈائریکٹوریٹ آف پاسپورٹ کی آفیشل فیس 2026۔ 36 صفحات، 72 صفحات، 100 صفحات، ای پاسپورٹ اور فاسٹ ٹریک فیس کی تفصیلات۔',
    directAnswerEn: 'As of 2026, standard 36-page Pakistani Passport fee (5-year validity) is PKR 4,500 for Normal delivery and PKR 7,500 for Urgent delivery. 10-year validity 36-page passport costs PKR 6,700 (Normal) and PKR 11,200 (Urgent).',
    directAnswerUr: 'سال 2026 میں 36 صفحات والے 5 سالہ عام پاسپورٹ کی نارمل فیس 4,500 روپے اور ارجنٹ فیس 7,500 روپے ہے۔ 10 سالہ میعاد کی نارمل فیس 6,700 روپے جبکہ ارجنٹ فیس 11,200 روپے ہے۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'Directorate General of Immigration & Passports', url: 'https://dgip.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Passport & Immigration Desk' },
    feeStructure: [
      { serviceEn: '36 Pages (5 Years Validity)', serviceUr: '36 صفحات (5 سال میعاد)', normal: 'PKR 4,500', urgent: 'PKR 7,500', executive: 'PKR 12,500 (Fast Track)' },
      { serviceEn: '36 Pages (10 Years Validity)', serviceUr: '36 صفحات (10 سال میعاد)', normal: 'PKR 6,700', urgent: 'PKR 11,200', executive: 'PKR 16,200 (Fast Track)' },
      { serviceEn: '72 Pages (5 Years Validity)', serviceUr: '72 صفحات (5 سال میعاد)', normal: 'PKR 8,200', urgent: 'PKR 13,500', executive: 'PKR 18,500 (Fast Track)' },
      { serviceEn: '72 Pages (10 Years Validity)', serviceUr: '72 صفحات (10 سال میعاد)', normal: 'PKR 12,400', urgent: 'PKR 20,200', executive: 'PKR 25,200 (Fast Track)' },
      { serviceEn: '100 Pages (5 Years Validity)', serviceUr: '100 صفحات (5 سال میعاد)', normal: 'PKR 9,000', urgent: 'PKR 18,000', executive: 'PKR 23,000 (Fast Track)' },
      { serviceEn: 'e-Passport 36 Pages (5 Years)', serviceUr: 'ای پاسپورٹ 36 صفحات (5 سال)', normal: 'PKR 9,000', urgent: 'PKR 15,000', executive: 'PKR 20,000 (Fast Track)' },
      { serviceEn: 'e-Passport 36 Pages (10 Years)', serviceUr: 'ای پاسپورٹ 36 صفحات (10 سال)', normal: 'PKR 13,500', urgent: 'PKR 22,500', executive: 'PKR 27,000 (Fast Track)' },
    ],
    faqs: [
      {
        questionEn: 'What is the difference between Normal and Urgent passport?',
        questionUr: 'نارمل اور ارجنٹ پاسپورٹ میں کیا فرق ہے؟',
        answerEn: 'Normal passport is delivered in approximately 21-30 working days, while Urgent passport is processed in 7-10 working days. Fast Track (Executive) takes 2-4 working days and is collected directly from the passport office.',
        answerUr: 'نارمل پاسپورٹ تقریباً 21 تا 30 کام کے دنوں میں ملتا ہے جبکہ ارجنٹ 7 تا 10 دنوں میں۔ فاسٹ ٹریک (ایگزیکٹو) 2 تا 4 کام کے دنوں میں پاسپورٹ دفتر سے خود لینا پڑتا ہے۔',
      },
      {
        questionEn: 'Can I pay passport fee via JazzCash or Easypaisa?',
        questionUr: 'کیا پاسپورٹ فیس جاز کیش یا ایزی پیسہ سے ادا ہو سکتی ہے؟',
        answerEn: 'Yes. Passport fee PSID can be generated at onlinemrp.dgip.gov.pk and paid via JazzCash, Easypaisa, HBL Mobile, Meezan Bank, or through any 1Link bank. Physical challan can also be deposited at HBL, MCB, or UBL branches.',
        answerUr: 'جی ہاں۔ آن لائن پاسپورٹ پورٹل سے PSID نمبر لے کر جاز کیش، ایزی پیسہ، HBL موبائل یا کسی بھی 1Link بینک سے فیس ادا کریں۔',
      },
      {
        questionEn: 'What is an e-Passport and is it better than regular MRP?',
        questionUr: 'ای پاسپورٹ کیا ہے اور کیا یہ عام پاسپورٹ سے بہتر ہے؟',
        answerEn: 'An e-Passport (electronic passport) contains a chip that stores your biometric data (fingerprints, photograph). It enables faster immigration clearance at international airports via e-gate kiosks, reduces fraud risk, and is accepted at all countries that recognize ICAO standards.',
        answerUr: 'ای پاسپورٹ میں ایک چِپ ہوتی ہے جو آپ کا بایومیٹرک ڈیٹا محفوظ رکھتی ہے۔ اس سے بین الاقوامی ہوائی اڈوں پر امیگریشن تیزی سے ہوتی ہے اور جعل سازی کا خطرہ کم ہوتا ہے۔',
      },
      {
        questionEn: 'How many pages should I choose — 36 or 72?',
        questionUr: 'پاسپورٹ کے لیے 36 یا 72 صفحات میں سے کون سا لوں؟',
        answerEn: 'If you travel frequently (more than 4-5 times per year) or plan to visit multiple countries, choose the 72-page booklet. Occasional travelers (1-2 trips per year) can opt for the standard 36-page booklet.',
        answerUr: 'اگر آپ سال میں 4 سے 5 بار سفر کرتے ہیں یا متعدد ممالک جانے کا ارادہ ہے تو 72 صفحات والا پاسپورٹ لیں۔ کبھی کبھار سفر کرنے والے 36 صفحات والا لے سکتے ہیں۔',
      },
    ],
    steps: [
      { stepNumber: 1, titleEn: 'Generate Passport PSID on Passport Fee Asaan App', titleUr: 'آن لائن PSID حاصل کریں', detailEn: 'Visit onlinemrp.dgip.gov.pk or download Passport Fee Asaan App to generate your 17-digit PSID payment number.', detailUr: 'آن لائن ایم آر پی پورٹل پر جا کر 17 ہندسوں کا PSID فیس واؤچر بنائیں۔' },
      { stepNumber: 2, titleEn: 'Pay Fee via JazzCash, Easypaisa or 1Link Banking', titleUr: 'فیس آن لائن جمع کروائیں', detailEn: 'Use JazzCash, Easypaisa, HBL, MCB, or any 1Link bank mobile app to clear your passport fee using the PSID.', detailUr: 'جاز کیش، ایزی پیسہ یا بینک ایپ میں PSID درج کر کے فیس ادا کریں۔' },
      { stepNumber: 3, titleEn: 'Visit Regional Passport Office (RPO)', titleUr: 'پاسپورٹ آفس تشریف لے جائیں', detailEn: 'Take your original CNIC, paid fee receipt, and previous passport to your nearest Regional Passport Office for biometric capture.', detailUr: 'اصل شناختی کارڈ اور فیس رسید کے ساتھ قریبی پاسپورٹ آفس جائیں۔' },
      { stepNumber: 4, titleEn: 'Track Passport Printing & Delivery', titleUr: 'پاسپورٹ ٹریک کریں', detailEn: 'Track passport processing status via tracking.dgip.gov.pk or SMS to 9988 until courier delivery.', detailUr: 'ٹریکنگ پورٹل یا 9988 ایس ایم ایس کے ذریعے پاسپورٹ کا سٹیٹس چیک کریں۔' },
    ],
    contentEn: `Pakistan Passport Fee Structure is the mandatory government tariff schedule set by the Directorate General of Immigration and Passports (DGIP) that governs processing fees for machine-readable passports (MRP) and chip-embedded e-Passports.

## Official DGIP Passport Rate Chart 2026
Understanding the passport fee breakdown before visiting the Regional Passport Office (RPO) ensures a smooth experience without counter payment rejections.

• **36 Pages (5 Years Validity)**: Normal PKR 4,500 | Urgent PKR 7,500 | Fast Track PKR 12,500
• **36 Pages (10 Years Validity)**: Normal PKR 6,700 | Urgent PKR 11,200 | Fast Track PKR 16,200
• **72 Pages (5 Years Validity)**: Normal PKR 8,200 | Urgent PKR 13,500 | Fast Track PKR 18,500
• **72 Pages (10 Years Validity)**: Normal PKR 12,400 | Urgent PKR 20,200 | Fast Track PKR 25,200

## Chip-Embedded e-Passport Fees
The Government of Pakistan introduced e-Passports with embedded microchips storing biometric data for automated e-gate airport immigration clearance:

• **e-Passport 36 Pages (5 Years)**: Normal PKR 9,000 | Urgent PKR 15,000 | Fast Track PKR 20,000
• **e-Passport 36 Pages (10 Years)**: Normal PKR 13,500 | Urgent PKR 22,500 | Fast Track PKR 27,000

## How to Deposit Fee via PSID
Passport fees can no longer be deposited manually at bank counters without a PSID. Applicants must generate a 17-digit PSID via the Passport Fee Asaan mobile app or official DGIP web portal.

Once generated, pay via JazzCash, Easypaisa, HBL Mobile, Meezan Bank, or any 1Link ATM before visiting the passport office.`,
    contentUr: `پاکستان پاسپورٹ فیس شیڈول ڈائریکٹوریٹ جنرل آف امیگریشن اینڈ پاسپورٹس (DGIP) کا کا مصدقہ فیس چارٹ ہے جو عام مشین ریڈ ایبل پاسپورٹ (MRP) اور ای پاسپورٹ کے ریٹس کو منظم کرتا ہے۔

## آفیشل پاسپورٹ فیس ریٹس 2026
پاسپورٹ دفتر جانے سے پہلے آن لائن فیس جمع کروانا اور صحیح فیس معلوم ہونا ضروری ہے۔

• **36 صفحات (5 سالہ میعاد)**: نارمل 4,500 روپے | ارجنٹ 7,500 روپے | فاسٹ ٹریک 12,500 روپے
• **36 صفحات (10 سالہ میعاد)**: نارمل 6,700 روپے | ارجنٹ 11,200 روپے | فاسٹ ٹریک 16,200 روپے
• **72 صفحات (5 سالہ میعاد)**: نارمل 8,200 روپے | ارجنٹ 13,500 روپے | فاسٹ ٹریک 18,500 روپے
• **72 صفحات (10 سالہ میعاد)**: نارمل 12,400 روپے | ارجنٹ 20,200 روپے | فاسٹ ٹریک 25,200 روپے

## ای پاسپورٹ فیس شیڈول
چِپ والا ای پاسپورٹ عالمی امیگریشن پر ای گیٹ کی سہولت فراہم کرتا ہے:

• **ای پاسپورٹ 36 صفحات (5 سال)**: نارمل 9,000 روپے | ارجنٹ 15,000 روپے | فاسٹ ٹریک 20,000 روپے
• **ای پاسپورٹ 36 صفحات (10 سال)**: نارمل 13,500 روپے | ارجنٹ 22,500 روپے | فاسٹ ٹریک 27,000 روپے

فیس کی ادائیگی کے لیے پاسپورٹ فیس آسان ایپ سے 17 ہندسوں کا PSID بنائیں اور جاز کیش، ایزی پیسہ یا بینکنگ ایپ سے جمع کروائیں۔`,
    relatedSlugs: ['/passport/online-apply', '/passport/tracking-status', '/passport/renewal-documents'],
  },

  'online-apply': {
    slug: 'online-apply',
    fullPath: '/passport/online-apply',
    categoryId: 'passport',
    titleEn: 'e-Passport Online Apply Portal 2026: Step-by-Step Registration',
    titleUr: 'آن لائن پاسپورٹ اپلائی اور ای پاسپورٹ رجسٹریشن گائیڈ 2026',
    metaDescriptionEn: 'Learn how to apply for Pakistani passport online via official DGIP portal. Online renewal steps, e-Passport fee payment, photo specs, and appointment booking.',
    metaDescriptionUr: 'ڈی جی آئی پی پورٹل سے آن لائن پاسپورٹ رینیول اور ای پاسپورٹ اپلائی کرنے کا طریقہ۔ فوٹو سائز، فیس پی ایس آئی ڈی اور مراحل۔',
    directAnswerEn: 'To apply for passport renewal online in Pakistan, log on to onlinemrp.dgip.gov.pk. Create an account, select renewal type, enter CNIC details, upload white-background picture, pay fee via credit card or PSID, and submit fingerprint form.',
    directAnswerUr: 'آن لائن پاسپورٹ رینیو کرنے کے لیے onlinemrp.dgip.gov.pk پر اپنا اکاؤنٹ بنائیں۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'DGIP Online Passport System', url: 'https://onlinemrp.dgip.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Immigration & Tech Desk' },
    faqs: [
          {
                'questionEn': 'What is the 5-year and 10-year passport fee in 2026?',
                'questionUr': '5 سال اور 10 سالہ پاسپورٹ فیس کتنی ہے؟',
                'answerEn': '36-page 5-year Normal passport fee is PKR 4,500 (Urgent PKR 7,500). 10-year Normal fee is PKR 6,700 (Urgent PKR 11,200). e-Passport starts at PKR 9,000.',
                'answerUr': '36 صفحات 5 سالہ نارمل فیس 4,500 روپے اور 10 سالہ نارمل فیس 6,700 روپے ہے۔'
          },
          {
                'questionEn': 'How do I pay passport fee via JazzCash or Mobile Bank App?',
                'questionUr': 'پاسپورٹ فیس آن لائن بینک ایپ یا جاز کیش سے کیسے جمع کرائیں؟',
                'answerEn': 'Generate a 17-digit PSID on Passport Fee Asaan App or DGIP web portal, then pay via JazzCash, Easypaisa, or 1Link banking apps.',
                'answerUr': 'پاسپورٹ فیس آسان ایپ سے 17 ہندسوں کا PSID بنائیں اور جاز کیش سے جمع کرائیں۔'
          },
          {
                'questionEn': 'How long does Normal vs Urgent passport delivery take?',
                'questionUr': 'نارمل اور ارجنٹ پاسپورٹ کتنے دنوں میں ڈلیور ہوتا ہے؟',
                'answerEn': 'Normal passport takes 21-30 working days. Urgent delivery takes 7-10 working days, while Fast Track takes 2-4 working days.',
                'answerUr': 'نارمل پاسپورٹ 21 تا 30 دنوں میں اور ارجنٹ پاسپورٹ 7 تا 10 دنوں میں ملتا ہے۔'
          }
    ],
    contentEn: `Online MRP and e-Passport renewal system allows citizens inside Pakistan and abroad to complete applications digitally.`,
    contentUr: `آن لائن ایم آر پی پاسپورٹ سسٹم شہریوں کو بغیر قطاروں میں لگے گھر سے پاسپورٹ رینیو کرنے کی سہولت فراہم کرتا ہے۔`,
    relatedSlugs: ['/passport/fee-2026', '/passport/renewal-documents'],
  },

  'tracking-status': {
    slug: 'tracking-status',
    fullPath: '/passport/tracking-status',
    categoryId: 'passport',
    titleEn: 'Passport Tracking Status Online 2026: Track via Token Number & SMS 9988',
    titleUr: 'پاسپورٹ ٹریکنگ آن لائن 2026: ٹوکن نمبر اور ایس ایم ایس 9988',
    metaDescriptionEn: 'Track Pakistani passport application delivery status online or via SMS 9988. Enter 11-digit token number or tracking code to know printing and dispatch status.',
    metaDescriptionUr: 'اپنے پاسپورٹ کا سٹیٹس ٹوکن نمبر درج کر کے آن لائن یا 9988 پر ایس ایم ایس بھیج کر مفت معلوم کریں۔',
    directAnswerEn: 'You can check your passport status by entering your 11-digit token number on tracking.dgip.gov.pk or by sending your token number via SMS to 9988.',
    directAnswerUr: 'پاسپورٹ کی تیاری معلوم کرنے کے لیے 11 ہندسوں کا ٹوکن نمبر tracking.dgip.gov.pk پر درج کریں یا 9988 پر ایس ایم ایس بھیجیں۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'DGIP Passport Tracking Portal', url: 'https://tracking.dgip.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Passports & Tracking Desk' },
    faqs: [
          {
                'questionEn': 'What is the 5-year and 10-year passport fee in 2026?',
                'questionUr': '5 سال اور 10 سالہ پاسپورٹ فیس کتنی ہے؟',
                'answerEn': '36-page 5-year Normal passport fee is PKR 4,500 (Urgent PKR 7,500). 10-year Normal fee is PKR 6,700 (Urgent PKR 11,200). e-Passport starts at PKR 9,000.',
                'answerUr': '36 صفحات 5 سالہ نارمل فیس 4,500 روپے اور 10 سالہ نارمل فیس 6,700 روپے ہے۔'
          },
          {
                'questionEn': 'How do I pay passport fee via JazzCash or Mobile Bank App?',
                'questionUr': 'پاسپورٹ فیس آن لائن بینک ایپ یا جاز کیش سے کیسے جمع کرائیں؟',
                'answerEn': 'Generate a 17-digit PSID on Passport Fee Asaan App or DGIP web portal, then pay via JazzCash, Easypaisa, or 1Link banking apps.',
                'answerUr': 'پاسپورٹ فیس آسان ایپ سے 17 ہندسوں کا PSID بنائیں اور جاز کیش سے جمع کرائیں۔'
          },
          {
                'questionEn': 'How long does Normal vs Urgent passport delivery take?',
                'questionUr': 'نارمل اور ارجنٹ پاسپورٹ کتنے دنوں میں ڈلیور ہوتا ہے؟',
                'answerEn': 'Normal passport takes 21-30 working days. Urgent delivery takes 7-10 working days, while Fast Track takes 2-4 working days.',
                'answerUr': 'نارمل پاسپورٹ 21 تا 30 دنوں میں اور ارجنٹ پاسپورٹ 7 تا 10 دنوں میں ملتا ہے۔'
          }
    ],
    contentEn: `Keeping track of your passport printing status ensures you pick it up as soon as it arrives at your regional passport office.`,
    contentUr: `پاسپورٹ ٹریکنگ سروس سے آپ پاسپورٹ دفتر کے بے جا چکروں سے بچ سکتے ہیں۔`,
    relatedSlugs: ['/passport/fee-2026', '/passport/online-apply'],
  },

  'renewal-documents': {
    slug: 'renewal-documents',
    fullPath: '/passport/renewal-documents',
    categoryId: 'passport',
    titleEn: 'Required Documents for Passport Renewal in Pakistan (2026 Checklist)',
    titleUr: 'پاسپورٹ کی تجدید کے لیے ضروری کاغذات 2026 (چیک لسٹ)',
    metaDescriptionEn: 'Complete document checklist for adult and minor passport renewal in Pakistan. Original CNIC, previous passport copy, fee deposit receipt, and NOC requirements.',
    metaDescriptionUr: 'بالغ اور بچوں کے پاسپورٹ رینیول کے لیے درکار کاغذات۔ اصل شناختی کارڈ، پرانا پاسپورٹ، فیس چالان اور این او سی۔',
    directAnswerEn: 'To renew a Pakistani passport, adults need: Original valid CNIC/Smart Card + photocopy, original previous passport + photocopy of first 2 pages, and official bank fee receipt (PSID). Minors require original B-Form and parents\' CNICs.',
    directAnswerUr: 'پاسپورٹ رینیو کروانے کے لیے اصل سمارٹ شناختی کارڈ کی کاپی، پرانا پاسپورٹ، اور فیس چالان کی رسید ساتھ لائیں۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'DGIP Document Guidelines', url: 'https://dgip.gov.pk/passport/passes.php' },
    author: { name: 'Editorial Team', role: 'Documentation Desk' },
    faqs: [
          {
                'questionEn': 'What is the 5-year and 10-year passport fee in 2026?',
                'questionUr': '5 سال اور 10 سالہ پاسپورٹ فیس کتنی ہے؟',
                'answerEn': '36-page 5-year Normal passport fee is PKR 4,500 (Urgent PKR 7,500). 10-year Normal fee is PKR 6,700 (Urgent PKR 11,200). e-Passport starts at PKR 9,000.',
                'answerUr': '36 صفحات 5 سالہ نارمل فیس 4,500 روپے اور 10 سالہ نارمل فیس 6,700 روپے ہے۔'
          },
          {
                'questionEn': 'How do I pay passport fee via JazzCash or Mobile Bank App?',
                'questionUr': 'پاسپورٹ فیس آن لائن بینک ایپ یا جاز کیش سے کیسے جمع کرائیں؟',
                'answerEn': 'Generate a 17-digit PSID on Passport Fee Asaan App or DGIP web portal, then pay via JazzCash, Easypaisa, or 1Link banking apps.',
                'answerUr': 'پاسپورٹ فیس آسان ایپ سے 17 ہندسوں کا PSID بنائیں اور جاز کیش سے جمع کرائیں۔'
          },
          {
                'questionEn': 'How long does Normal vs Urgent passport delivery take?',
                'questionUr': 'نارمل اور ارجنٹ پاسپورٹ کتنے دنوں میں ڈلیور ہوتا ہے؟',
                'answerEn': 'Normal passport takes 21-30 working days. Urgent delivery takes 7-10 working days, while Fast Track takes 2-4 working days.',
                'answerUr': 'نارمل پاسپورٹ 21 تا 30 دنوں میں اور ارجنٹ پاسپورٹ 7 تا 10 دنوں میں ملتا ہے۔'
          }
    ],
    contentEn: `Having the complete set of required original documents and photocopies avoids application rejection.`,
    contentUr: `پاسپورٹ دفتر جانے سے قبل تمام مطلوبہ اصل دستاویزات اور فوٹو کاپیاں ترتیب سے ساتھ رکھیں۔`,
    relatedSlugs: ['/passport/fee-2026', '/passport/online-apply'],
  },

  'office-contact-directory': {
    slug: 'office-contact-directory',
    fullPath: '/passport/office-contact-directory',
    categoryId: 'passport',
    titleEn: 'Pakistan Passport Office Directory 2026: Contacts & Addresses',
    titleUr: 'پاکستان بھر کے پاسپورٹ دفاتر کے فون نمبرز اور پتے ڈائریکٹری 2026',
    metaDescriptionEn: 'Find address, phone numbers, and helpline of Regional Passport Offices in Lahore, Karachi, Islamabad, Rawalpindi, Peshawar, Quetta, Multan, and Faisalabad.',
    metaDescriptionUr: 'لاہور، کراچی، اسلام آباد، راولپنڈی، پشاور، کوئٹہ اور دیگر شہروں کے ریجنل پاسپورٹ دفاتر کے فون نمبر اور مکمل پتہ۔',
    directAnswerEn: 'The central helpline for DGIP Pakistan is 051-111-344-777. Executive Passport Offices operate in major cities like Lahore (Garden Town), Islamabad (G-10/4), and Karachi (Clifton/Awami Markaz).',
    directAnswerUr: 'ڈی جی آئی پی پاسپورٹ کی مرکزی ہیلپ لائن 777-344-111-051 ہے۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'DGIP Office Directory Portal', url: 'https://dgip.gov.pk/about/contact.php' },
    author: { name: 'Editorial Team', role: 'Directory Desk' },
    faqs: [
          {
                'questionEn': 'What is the 5-year and 10-year passport fee in 2026?',
                'questionUr': '5 سال اور 10 سالہ پاسپورٹ فیس کتنی ہے؟',
                'answerEn': '36-page 5-year Normal passport fee is PKR 4,500 (Urgent PKR 7,500). 10-year Normal fee is PKR 6,700 (Urgent PKR 11,200). e-Passport starts at PKR 9,000.',
                'answerUr': '36 صفحات 5 سالہ نارمل فیس 4,500 روپے اور 10 سالہ نارمل فیس 6,700 روپے ہے۔'
          },
          {
                'questionEn': 'How do I pay passport fee via JazzCash or Mobile Bank App?',
                'questionUr': 'پاسپورٹ فیس آن لائن بینک ایپ یا جاز کیش سے کیسے جمع کرائیں؟',
                'answerEn': 'Generate a 17-digit PSID on Passport Fee Asaan App or DGIP web portal, then pay via JazzCash, Easypaisa, or 1Link banking apps.',
                'answerUr': 'پاسپورٹ فیس آسان ایپ سے 17 ہندسوں کا PSID بنائیں اور جاز کیش سے جمع کرائیں۔'
          },
          {
                'questionEn': 'How long does Normal vs Urgent passport delivery take?',
                'questionUr': 'نارمل اور ارجنٹ پاسپورٹ کتنے دنوں میں ڈلیور ہوتا ہے؟',
                'answerEn': 'Normal passport takes 21-30 working days. Urgent delivery takes 7-10 working days, while Fast Track takes 2-4 working days.',
                'answerUr': 'نارمل پاسپورٹ 21 تا 30 دنوں میں اور ارجنٹ پاسپورٹ 7 تا 10 دنوں میں ملتا ہے۔'
          }
    ],
    contentEn: `Find exact physical location details and helpline numbers of regional, executive, and 24/7 passport counters.`,
    contentUr: `پاکستان بھر کے تمام پاسپورٹ دفاتر کے ایڈریس اور رابطہ نمبرز نیچے دیئے گئے ہیں۔`,
    relatedSlugs: ['/passport/fee-2026', '/passport/tracking-status'],
  },

  // EDUCATION ARTICLES
  'bise-lahore-result-2026': {
    slug: 'bise-lahore-result-2026',
    fullPath: '/education/bise-lahore-result-2026',
    categoryId: 'education',
    titleEn: 'BISE Lahore Board Result 2026 Online Check (Matric & Intermediate)',
    titleUr: 'بی آئی ایس ای لاہور بورڈ رزلٹ 2026 آن لائن چیک (میٹرک و انٹر)',
    metaDescriptionEn: 'Check BISE Lahore Board Class 9th, 10th (Matric), 11th (1st Year), and 12th (2nd Year / FSc) annual exam results 2026 by Roll Number, Name, or SMS to 800291.',
    metaDescriptionUr: 'لاہور بورڈ 9ویں، 10ویں، 11ویں اور 12ویں کلاس کا رزلٹ آن لائن رول نمبر یا 800291 پر ایس ایم ایس سے چیک کریں۔',
    directAnswerEn: 'To check BISE Lahore Board Result 2026 online, visit result.biselahore.com. Enter your 6-digit Roll Number and select your exam session. Alternatively, send your Roll Number via SMS to 800291.',
    directAnswerUr: 'لاہور بورڈ رزلٹ 2026 آن لائن دیکھنے کے لیے result.biselahore.com پر جائیں، یا 800291 پر ایس ایم ایس کریں۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'BISE Lahore Official Result Portal', url: 'https://result.biselahore.com/' },
    author: { name: 'Editorial Team', role: 'Education Desk' },
    faqs: [
          {
                'questionEn': 'How can I check BISE results online by roll number?',
                'questionUr': 'بورڈ رزلٹ آن لائن رول نمبر سے کیسے چیک کریں؟',
                'answerEn': 'Visit official BISE web portal, select exam class (Matric/Inter), enter Roll Number, and click View Result or send SMS code.',
                'answerUr': 'سرکاری بورڈ ویب سائٹ پر رول نمبر درج کر کے آن لائن رزلٹ دیکھیں۔'
          },
          {
                'questionEn': 'What is the passing percentage for board exams in Pakistan?',
                'questionUr': 'پاکستان میں تعلیمی بورڈز میں پاسنگ مارکس کتنے ہیں؟',
                'answerEn': 'Minimum passing mark for BISE Matric & Intermediate board exams is 33% (being upgraded to 40% under new policies).',
                'answerUr': 'تعلیمی بورڈ کے امتحان میں کامیابی کے لیے کم از کم 33 فیصد نمبرز ضروری ہیں۔'
          },
          {
                'questionEn': 'How to apply for HEC degree attestation online?',
                'questionUr': 'ایچ ای سی ڈگری تصدیق کا آن لائن طریقہ کیا ہے؟',
                'answerEn': 'Create profile on eservices.hec.gov.pk, upload degree transcripts, pay fee via 1Link PSID, and schedule verification.',
                'answerUr': 'eservices.hec.gov.pk پر پروفائل بنا کر ڈگری اپلوڈ کریں اور فیس ادا کریں۔'
          }
    ],
    contentEn: `BISE Lahore conducts matriculation and intermediate board exams for Lahore, Kasur, Sheikhupura, and Nankana Sahib districts.`,
    contentUr: `لاہور بورڈ سالانہ امتحانات کے نتائج اپنی آفیشل ویب سائٹ پر جاری کرتا ہے۔`,
    relatedSlugs: ['/education/punjab-university-admission-2026', '/education/nust-admission-process'],
  },

  'punjab-university-admission-2026': {
    slug: 'punjab-university-admission-2026',
    fullPath: '/education/punjab-university-admission-2026',
    categoryId: 'education',
    titleEn: 'Punjab University (PU) Admission 2026: BS & Master Programs, Merit Formula',
    titleUr: 'پنجاب یونیورسٹی (PU) ایڈمیشن 2026: بی ایس پروگرامز اور میرٹ فارمولا',
    metaDescriptionEn: 'University of the Punjab Lahore admission guide 2026. Online admission portal (admissions.pu.edu.pk), PU entry test registration, fee structure, and merit calculator.',
    metaDescriptionUr: 'جامعہ پنجاب لاہور داخلہ 2026۔ آن لائن داخلہ پورٹل، انٹری ٹیسٹ شیڈول، اور بی ایس 4 سالہ ڈگری پروگرامز کا میرٹ۔',
    directAnswerEn: 'Punjab University (PU Lahore) admissions open online at admissions.pu.edu.pk. Merit weightage: 30% PU Entry Test + 70% Intermediate marks.',
    directAnswerUr: 'پنجاب یونیورسٹی کے داخلے admissions.pu.edu.pk پر شروع ہوتے ہیں۔ 30 فیصد ٹیسٹ اور 70 فیصد انٹر کا میرٹ فارمولا ہے۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'University of the Punjab Admissions', url: 'https://pu.edu.pk/admissions/' },
    author: { name: 'Editorial Team', role: 'Higher Education Desk' },
    faqs: [
          {
                'questionEn': 'How can I check BISE results online by roll number?',
                'questionUr': 'بورڈ رزلٹ آن لائن رول نمبر سے کیسے چیک کریں؟',
                'answerEn': 'Visit official BISE web portal, select exam class (Matric/Inter), enter Roll Number, and click View Result or send SMS code.',
                'answerUr': 'سرکاری بورڈ ویب سائٹ پر رول نمبر درج کر کے آن لائن رزلٹ دیکھیں۔'
          },
          {
                'questionEn': 'What is the passing percentage for board exams in Pakistan?',
                'questionUr': 'پاکستان میں تعلیمی بورڈز میں پاسنگ مارکس کتنے ہیں؟',
                'answerEn': 'Minimum passing mark for BISE Matric & Intermediate board exams is 33% (being upgraded to 40% under new policies).',
                'answerUr': 'تعلیمی بورڈ کے امتحان میں کامیابی کے لیے کم از کم 33 فیصد نمبرز ضروری ہیں۔'
          },
          {
                'questionEn': 'How to apply for HEC degree attestation online?',
                'questionUr': 'ایچ ای سی ڈگری تصدیق کا آن لائن طریقہ کیا ہے؟',
                'answerEn': 'Create profile on eservices.hec.gov.pk, upload degree transcripts, pay fee via 1Link PSID, and schedule verification.',
                'answerUr': 'eservices.hec.gov.pk پر پروفائل بنا کر ڈگری اپلوڈ کریں اور فیس ادا کریں۔'
          }
    ],
    contentEn: `Complete breakdown of undergraduate and postgraduate admissions at University of the Punjab Lahore.`,
    contentUr: `پنجاب یونیورسٹی کے تمام شعبہ جات کے داخلہ فارم اور میرٹ کی تفصیل۔`,
    relatedSlugs: ['/education/hec-scholarship-pakistan', '/education/bise-lahore-result-2026'],
  },

  'hec-scholarship-pakistan': {
    slug: 'hec-scholarship-pakistan',
    fullPath: '/education/hec-scholarship-pakistan',
    categoryId: 'education',
    titleEn: 'HEC Scholarships 2026 in Pakistan & Abroad: Ehsaas, USAID & Foreign Schemes',
    titleUr: 'ایچ ای سی سکالرشپ 2026: پاکستان اور بیرون ملک تعلیم کے لیے وظائف',
    metaDescriptionEn: 'Apply for HEC (Higher Education Commission) undergraduate and postgraduate scholarships in Pakistan. Ehsaas Undergraduate, Commonwealth, China, and Hungary scholarship guides.',
    metaDescriptionUr: 'ایچ ای سی کے قومی اور بین الاقوامی تعلیمی وظائف 2026۔ احساس سکالرشپ، ہنگری اور چین سکالرشپ آن لائن اپلائی۔',
    directAnswerEn: 'HEC offers fully funded scholarships through scholarship.hec.gov.pk. Major schemes include HEC Need-Based Scholarships, Ehsaas Undergraduate Program, and Stipendium Hungaricum.',
    directAnswerUr: 'ایچ ای سی پاکستان کے تمام باصلاحیت طلباء کو scholarship.hec.gov.pk کے ذریعے مفت وظائف فراہم کرتا ہے۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'HEC Official Scholarship Portal', url: 'https://scholarship.hec.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Scholarships Desk' },
    faqs: [
          {
                'questionEn': 'How can I check BISE results online by roll number?',
                'questionUr': 'بورڈ رزلٹ آن لائن رول نمبر سے کیسے چیک کریں؟',
                'answerEn': 'Visit official BISE web portal, select exam class (Matric/Inter), enter Roll Number, and click View Result or send SMS code.',
                'answerUr': 'سرکاری بورڈ ویب سائٹ پر رول نمبر درج کر کے آن لائن رزلٹ دیکھیں۔'
          },
          {
                'questionEn': 'What is the passing percentage for board exams in Pakistan?',
                'questionUr': 'پاکستان میں تعلیمی بورڈز میں پاسنگ مارکس کتنے ہیں؟',
                'answerEn': 'Minimum passing mark for BISE Matric & Intermediate board exams is 33% (being upgraded to 40% under new policies).',
                'answerUr': 'تعلیمی بورڈ کے امتحان میں کامیابی کے لیے کم از کم 33 فیصد نمبرز ضروری ہیں۔'
          },
          {
                'questionEn': 'How to apply for HEC degree attestation online?',
                'questionUr': 'ایچ ای سی ڈگری تصدیق کا آن لائن طریقہ کیا ہے؟',
                'answerEn': 'Create profile on eservices.hec.gov.pk, upload degree transcripts, pay fee via 1Link PSID, and schedule verification.',
                'answerUr': 'eservices.hec.gov.pk پر پروفائل بنا کر ڈگری اپلوڈ کریں اور فیس ادا کریں۔'
          }
    ],
    contentEn: `Find fully funded national and international scholarships verified by the Higher Education Commission of Pakistan.`,
    contentUr: `اعلیٰ تعلیم کے لیے حکومت پاکستان اور ایچ ای سی کے زیر اہتمام جاری تمام سکالرشپ پروگرامز کی فہرست۔`,
    relatedSlugs: ['/education/punjab-university-admission-2026', '/education/nust-admission-process'],
  },

  'nust-admission-process': {
    slug: 'nust-admission-process',
    fullPath: '/education/nust-admission-process',
    categoryId: 'education',
    titleEn: 'NUST Entry Test (NET) Admission 2026: Exam Pattern, Merit & Dates',
    titleUr: 'نسٹ یونیورسٹی (NUST) داخلہ اور نیٹ (NET) ٹیسٹ تیاری گائیڈ 2026',
    metaDescriptionEn: 'NUST Entry Test (NET-1, NET-2, NET-3, NET-4) admission process 2026. NET weightage (75%), Engineering/Computer Science syllabus, fees, and closing merit lists.',
    metaDescriptionUr: 'نسٹ اسلام آباد انٹری ٹیسٹ (NET) 2026 کی تاریخیں، میرٹ لسٹ، اور انجینئرنگ و کمپیوٹنگ سائنسز میں داخلے۔',
    directAnswerEn: 'National University of Sciences and Technology (NUST Islamabad) conducts NET in 4 series. Selection weightage: 75% NET Score, 15% HSSC, and 10% SSC. Register at nust.edu.pk.',
    directAnswerUr: 'نسٹ یونیورسٹی کے نیٹ ٹیسٹ (NET) کا نتیجہ 75 فیصد میرٹ کی ویٹیج رکھتا ہے۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'NUST Official Admissions Portal', url: 'https://nust.edu.pk/admissions/' },
    author: { name: 'Editorial Team', role: 'Engineering Education Desk' },
    faqs: [
          {
                'questionEn': 'How can I check BISE results online by roll number?',
                'questionUr': 'بورڈ رزلٹ آن لائن رول نمبر سے کیسے چیک کریں؟',
                'answerEn': 'Visit official BISE web portal, select exam class (Matric/Inter), enter Roll Number, and click View Result or send SMS code.',
                'answerUr': 'سرکاری بورڈ ویب سائٹ پر رول نمبر درج کر کے آن لائن رزلٹ دیکھیں۔'
          },
          {
                'questionEn': 'What is the passing percentage for board exams in Pakistan?',
                'questionUr': 'پاکستان میں تعلیمی بورڈز میں پاسنگ مارکس کتنے ہیں؟',
                'answerEn': 'Minimum passing mark for BISE Matric & Intermediate board exams is 33% (being upgraded to 40% under new policies).',
                'answerUr': 'تعلیمی بورڈ کے امتحان میں کامیابی کے لیے کم از کم 33 فیصد نمبرز ضروری ہیں۔'
          },
          {
                'questionEn': 'How to apply for HEC degree attestation online?',
                'questionUr': 'ایچ ای سی ڈگری تصدیق کا آن لائن طریقہ کیا ہے؟',
                'answerEn': 'Create profile on eservices.hec.gov.pk, upload degree transcripts, pay fee via 1Link PSID, and schedule verification.',
                'answerUr': 'eservices.hec.gov.pk پر پروفائل بنا کر ڈگری اپلوڈ کریں اور فیس ادا کریں۔'
          }
    ],
    contentEn: `Step-by-step guidance for cracking NET (NUST Entry Test) for Software Engineering, BBA, and Biotech programs.`,
    contentUr: `نسٹ اسلام آباد کیمپس کے مختلف پروگرامز میں داخلہ حاصل کرنے کا مکمل فارمولا۔`,
    relatedSlugs: ['/education/bise-lahore-result-2026', '/education/hec-scholarship-pakistan'],
  },

  'css-preparation-books': {
    slug: 'css-preparation-books',
    fullPath: '/education/css-preparation-books',
    categoryId: 'education',
    titleEn: 'CSS Exam Preparation Books & Syllabus 2026: FPSC Recommended List',
    titleUr: 'سی ایس ایس (CSS) امتحان کی تیاری: ایف پی ایس سی کی مجوزہ کتب و سلیبس',
    metaDescriptionEn: 'Federal Public Service Commission (FPSC) CSS exam recommended book list 2026 for compulsory and optional subjects. MPT screening test guidelines and age limits.',
    metaDescriptionUr: 'ایف پی ایس سی سی ایس ایس امتحان 2026 کا نیا سلیبس، ایم پی ٹی ٹیسٹ کی تیاری اور کتابیں۔',
    directAnswerEn: 'FPSC CSS Competitive Examination consists of 1200 marks (600 compulsory + 600 optional subjects). Candidates must pass the MPT Screening Test (200 MCQs) first. Age limit is 21 to 30 years.',
    directAnswerUr: 'سی ایس ایس امتحان کے 1200 کل نمبرز ہوتے ہیں۔ پہلے MPT سکریننگ ٹیسٹ پاس کرنا لازمی ہوتا ہے۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'FPSC Official CSS Portal', url: 'https://fpsc.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Civil Services Desk' },
    faqs: [
          {
                'questionEn': 'How can I check BISE results online by roll number?',
                'questionUr': 'بورڈ رزلٹ آن لائن رول نمبر سے کیسے چیک کریں؟',
                'answerEn': 'Visit official BISE web portal, select exam class (Matric/Inter), enter Roll Number, and click View Result or send SMS code.',
                'answerUr': 'سرکاری بورڈ ویب سائٹ پر رول نمبر درج کر کے آن لائن رزلٹ دیکھیں۔'
          },
          {
                'questionEn': 'What is the passing percentage for board exams in Pakistan?',
                'questionUr': 'پاکستان میں تعلیمی بورڈز میں پاسنگ مارکس کتنے ہیں؟',
                'answerEn': 'Minimum passing mark for BISE Matric & Intermediate board exams is 33% (being upgraded to 40% under new policies).',
                'answerUr': 'تعلیمی بورڈ کے امتحان میں کامیابی کے لیے کم از کم 33 فیصد نمبرز ضروری ہیں۔'
          },
          {
                'questionEn': 'How to apply for HEC degree attestation online?',
                'questionUr': 'ایچ ای سی ڈگری تصدیق کا آن لائن طریقہ کیا ہے؟',
                'answerEn': 'Create profile on eservices.hec.gov.pk, upload degree transcripts, pay fee via 1Link PSID, and schedule verification.',
                'answerUr': 'eservices.hec.gov.pk پر پروفائل بنا کر ڈگری اپلوڈ کریں اور فیس ادا کریں۔'
          }
    ],
    contentEn: `Comprehensive preparation guide for CSS aspirants in Pakistan, including recommended author list by FPSC.`,
    contentUr: `سی ایس ایس افسر بننے کے خواہشمند طلباء کے لیے ایف پی ایس سی کا آفیشل سلیبس۔`,
    relatedSlugs: ['/jobs/ppsc-jobs-2026', '/education/hec-scholarship-pakistan'],
  },

  // UTILITY BILLS ARTICLES
  'lesco-bill-check-online': {
    slug: 'lesco-bill-check-online',
    fullPath: '/bills/lesco-bill-check-online',
    categoryId: 'bills',
    titleEn: 'LESCO Bill Check Online 2026: Download Duplicate Electricity Bill PDF',
    titleUr: 'لیسکو آن لائن بل چیک 2026: ڈپلیکیٹ بجلی بل پی ڈی ایف ڈاؤن لوڈ کریں',
    metaDescriptionEn: 'Check and download your LESCO electricity bill online using 14-digit Reference Number or 10-digit Customer ID. Print duplicate bill for Lahore, Okara, Kasur, Sheikhupura.',
    metaDescriptionUr: 'لاہور، قصور، اوکاڑہ اور شیخوپورہ کا لیسکو بجلی کا بل آن لائن 14 ہندسوں والے ریفرنس نمبر سے دیکھئے اور ڈاؤن لوڈ کریں۔',
    directAnswerEn: 'To view and download your LESCO electricity bill online, enter your 14-digit Reference Number into our LESCO Bill Tool or visit lesco.gov.pk. Print duplicate copy or save PDF for mobile payment.',
    directAnswerUr: 'اپنا لیسکو بجلی بل دیکھنے اور پرنٹ کرنے کے لیے اپنا 14 ہندسوں کا ریفرنس نمبر ہمارے پورٹل پر داخل کریں۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'LESCO Official Portal', url: 'http://www.lesco.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Utility Services Desk' },
    faqs: [
      {
        questionEn: 'What is my LESCO Reference Number?',
        questionUr: 'لیسکو ریفرنس نمبر کیا ہوتا ہے؟',
        answerEn: 'Your 14-digit LESCO Reference Number is printed on the top-right corner of your previous electricity bill. It is different from your Consumer ID (which is 10 digits). Always use the 14-digit Reference Number for online bill checking.',
        answerUr: 'آپ کا 14 ہندسوں کا لیسکو ریفرنس نمبر پرانے بجلی کے بل کے اوپری دائیں حصے میں لکھا ہوتا ہے۔ آن لائن بل چیک کرنے کے لیے ہمیشہ 14 ہندسوں والا ریفرنس نمبر استعمال کریں۔',
      },
      {
        questionEn: 'Which areas does LESCO serve?',
        questionUr: 'لیسکو کن علاقوں میں بجلی فراہم کرتا ہے؟',
        answerEn: 'LESCO (Lahore Electric Supply Company) serves Lahore, Kasur, Sheikhupura, and Nankana Sahib districts in central Punjab. For other Punjab districts, check FESCO (Faisalabad), MEPCO (Multan/Bahawalpur), or GEPCO (Gujranwala).',
        answerUr: 'لیسکو لاہور، قصور، شیخوپورہ اور ننکانہ صاحب اضلاع میں بجلی فراہم کرتا ہے۔ دیگر پنجاب اضلاع کے لیے فیسکو، میپکو یا گیپکو سے رابطہ کریں۔',
      },
      {
        questionEn: 'How can I pay LESCO bill online?',
        questionUr: 'لیسکو بجلی بل آن لائن کیسے جمع کروائیں؟',
        answerEn: 'You can pay your LESCO bill online via: JazzCash app, Easypaisa app, UBL Digital, HBL Mobile, Bank Alfalah, Meezan Bank, or any 1Link internet banking portal. Enter your 14-digit Reference Number to fetch the bill and confirm payment.',
        answerUr: 'لیسکو بجلی بل آن لائن ادا کرنے کے لیے جاز کیش، ایزی پیسہ، UBL ڈیجیٹل، HBL موبائل، بینک الفلاح یا کسی بھی 1Link انٹرنیٹ بینکنگ پورٹل کا استعمال کریں۔ 14 ہندسوں کا ریفرنس نمبر درج کریں۔',
      },
      {
        questionEn: 'What if my LESCO bill shows an unusually high amount?',
        questionUr: 'اگر لیسکو بل بہت زیادہ آ جائے تو کیا کروں؟',
        answerEn: 'If you suspect an over-billing error, call LESCO helpline 118 or 042-111-000-118 to lodge a complaint. You can also visit the nearest LESCO Customer Service Center with your previous bills. Meter inspection can be requested at a fee of PKR 200-500.',
        answerUr: 'غلط یا زیادہ بلنگ کی شکایت کے لیے لیسکو ہیلپ لائن 118 یا 042-111-000-118 پر کال کریں، یا قریبی لیسکو سروس سینٹر جائیں۔',
      },
    ],
    feeStructure: [
      { serviceEn: 'Protected Residential Slab (0 - 100 Units)', serviceUr: 'پروٹیکٹڈ گھریلو سلیب (0 تا 100 یونٹ)', normal: 'PKR 7.74 / Unit', urgent: 'Government Subsidized', executive: 'Base Tariff' },
      { serviceEn: 'Protected Residential Slab (101 - 200 Units)', serviceUr: 'پروٹیکٹڈ گھریلو سلیب (101 تا 200 یونٹ)', normal: 'PKR 14.06 / Unit', urgent: 'Government Subsidized', executive: 'Base Tariff' },
      { serviceEn: 'Unprotected Residential Slab (101 - 300 Units)', serviceUr: 'ان پروٹیکٹڈ سلیب (101 تا 300 یونٹ)', normal: 'PKR 27.00 / Unit', urgent: 'Variable Taxes Applicable', executive: 'Standard Tariff' },
      { serviceEn: 'Unprotected Residential Slab (Above 300 Units)', serviceUr: 'ان پروٹیکٹڈ سلیب (300 یونٹ سے زائد)', normal: 'PKR 35.00+ / Unit', urgent: 'Fuel Price Adjustment (FPA)', executive: 'Peak Hour Rate' },
      { serviceEn: 'Duplicate Bill Printing Fee', serviceUr: 'ڈپلیکیٹ بل پرنٹ فیس', normal: 'PKR 0 (100% FREE)', urgent: 'Online Download', executive: 'PDF Export' },
    ],
    steps: [
      { stepNumber: 1, titleEn: 'Locate 14-Digit LESCO Reference Number', titleUr: '14 ہندسوں کا ریفرنس نمبر دیکھیں', detailEn: 'Find the 14-digit Reference Number printed on the top-right box of any previous LESCO paper bill.', detailUr: 'پرانے بجلی کے بل کے اوپری دائیں حصے سے 14 ہندسوں کا ریفرنس نمبر تلاش کریں۔' },
      { stepNumber: 2, titleEn: 'Enter Reference Number in Duplicate Bill Tool', titleUr: 'آن لائن ٹول میں ریفرنس نمبر درج کریں', detailEn: 'Type your 14-digit Reference Number without spaces or special characters into our online LESCO Bill Lookup tool.', detailUr: 'آن لائن لیسکو بل ٹول میں اپنا 14 ہندسوں کا ریفرنس نمبر درج کریں۔' },
      { stepNumber: 3, titleEn: 'View & Download Official PDF Duplicate Bill', titleUr: 'بل پی ڈی ایف دیکھیں اور ڈاؤن لوڈ کریں', detailEn: 'Review unit consumption, due date, FPA taxes, and click "Print / Download PDF" to save a copy for banking.', detailUr: 'یونٹس، واجب الادا رقم اور آخری تاریخ دیکھ کر بل کا پی ڈی ایف محفوظ کریں۔' },
      { stepNumber: 4, titleEn: 'Pay Bill via Mobile Banking or JazzCash', titleUr: 'موبائل بینکنگ سے بل جمع کروائیں', detailEn: 'Open JazzCash, Easypaisa, or 1Link mobile banking app, select Electricity Bill → LESCO, and enter your reference number to confirm payment.', detailUr: 'جاز کیش، ایزی پیسہ یا 1Link ایپ سے ریفرنس نمبر درج کر کے آن لائن بل ادا کریں۔' },
    ],
    contentEn: `LESCO Bill Check Online is the digital duplicate bill retrieval service provided by Lahore Electric Supply Company that enables consumers in Lahore, Kasur, Sheikhupura, and Nankana Sahib to view, download, and verify their monthly electricity charges.

## How to Check LESCO Duplicate Bill Online
Checking your electricity bill online eliminates delays caused by late physical mail delivery and prevents late-payment surcharges. All residential, commercial, and industrial consumers can fetch their current bill using their unique 14-digit Reference Number.

• **14-Digit Reference Number**: Found on the top-right header of your monthly bill.
• **10-Digit Consumer ID**: Legacy account ID used for in-office administrative queries.
• **Service Territory**: LESCO covers Lahore District, Kasur, Sheikhupura, and Nankana Sahib.

## Understanding LESCO Tariff Slabs & Taxes
Your monthly electricity bill total comprises your base energy consumption units multiplied by your slab tariff, plus government taxes:

1. **Base Electricity Slabs**: Rates per unit differ significantly between Protected (under 200 units for 6 months) and Unprotected consumer categories.
2. **Fuel Price Adjustment (FPA)**: Monthly variable charge reflecting fuel cost variations in power generation.
3. **Government Taxes**: Includes General Sales Tax (GST), Electricity Duty, PTV License Fee (PKR 35), and Financing Cost Surcharges.

## Digital Payment Options
Bills can be paid instantly 24/7 without visiting bank branches:

• **JazzCash / Easypaisa**: Navigate to Bill Payments → Electricity → LESCO → Enter 14-Digit Reference Number.
• **Bank Mobile Apps**: HBL, UBL, MCB, Allied Bank, Bank Alfalah, and Meezan Bank apps via 1Link bill payment gateway.
• **Over-The-Counter**: Commercial bank branches, Post Offices, and LESCO Customer Facilitation Centers.

For billing complaints or emergency outage reporting, call the LESCO central helpline at **118** or WhatsApp +92-42-111-000-118.`,
    contentUr: `لیسکو آن لائن بل چیک لاہور الیکٹرک سپلائی کمپنی کی آن لائن ڈپلیکیٹ بل سروس ہے جو لاہور، قصور، شیخوپورہ اور ننکانہ صاحب کے صارفین کو بجلی کا بل دیکھنے اور ڈاؤن لوڈ کرنے کی سہولت دیتی ہے۔

## لیسکو بل آن لائن دیکھنے کا طریقہ
آن لائن بل چیک کرنے سے ڈلیوری میں تاخیر اور آخری تاریخ گزرنے کے جرمانے سے بچا جا سکتا ہے۔

• **14 ہندسوں کا ریفرنس نمبر**: پرانے بل کے اوپری دائیں حصے پر درج ہوتا ہے۔
• **زیرِ عمل اضلاع**: لیسکو اضلاع لاہور، قصور، شیخوپورہ اور ننکانہ صاحب میں بجلی فراہم کرتا ہے۔

## لیسکو بجلی کے بل کی آن لائن ادائیگی
بل کی ادائیگی کسی بھی وقت 24 گھنٹے ممکن ہے:

• **جاز کیش / ایزی پیسہ**: یوٹیلیٹی بلز → الیکٹرسٹی → لیسکو → 14 ہندسوں کا ریفرنس نمبر
• **موبائل بینکنگ ایپس**: 1Link نیٹ ورک کے ذریعے کسی بھی بینک ایپ سے

بجلی کے بل کی غلطی یا شکایت کی صورت میں لیسکو ہیلپ لائن **118** پر رابطہ کریں۔`,
    relatedSlugs: ['/bills/wapda-bill-complaint-number', '/bills/k-electric-duplicate-bill', '/bills/sui-gas-bill-check-online'],
  },

  'k-electric-duplicate-bill': {
    slug: 'k-electric-duplicate-bill',
    fullPath: '/bills/k-electric-duplicate-bill',
    categoryId: 'bills',
    titleEn: 'K-Electric Duplicate Bill Online Check 2026 (Karachi Electricity Bill)',
    titleUr: 'کے الیکٹرک کراچی ڈپلیکیٹ بل آن لائن چیک اور ڈاؤن لوڈ 2026',
    metaDescriptionEn: 'Check K-Electric Karachi duplicate bill online using 13-digit Account Number. View payment history, unit charges, and download bill print copy.',
    metaDescriptionUr: 'کے الیکٹرک کراچی کا بجلی بل آن لائن 13 ہندسوں والے اکاؤنٹ نمبر سے حاصل کریں۔ آسان پرنٹ اور کاپی۔',
    directAnswerEn: 'To generate a K-Electric duplicate bill online, enter your 13-digit K-Electric Account Number into the KE customer web portal at ke.com.pk. View due date and total payable amount instantly.',
    directAnswerUr: 'کے الیکٹرک کراچی کے صارفین اپنا 13 ہندسوں والا اکاؤنٹ نمبر درج کر کے نیا بل ڈاؤن لوڈ کر سکتے ہیں۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'K-Electric Customer Services', url: 'https://www.ke.com.pk/' },
    author: { name: 'Editorial Team', role: 'Karachi Utilities Desk' },
    faqs: [
          {
                'questionEn': 'Where is the 14-digit Reference Number on electricity bill?',
                'questionUr': 'بجلی بل پر 14 ہندسوں کا ریفرنس نمبر کہاں لکھا ہوتا ہے؟',
                'answerEn': 'The 14-digit Reference Number is printed on top-right section of paper bill above consumer name.',
                'answerUr': 'ریفرنس نمبر بل کے اوپری دائیں ڈبے میں صارف نام کے اوپر درج ہوتا ہے۔'
          },
          {
                'questionEn': 'Can I download duplicate electricity bill PDF for free?',
                'questionUr': 'کیا ڈپلیکیٹ بل پی ڈی ایف مفت ڈاؤن لوڈ ہو سکتا ہے؟',
                'answerEn': 'Yes! Enter your 14-digit Reference Number on our online bill tool to print or save PDF duplicate copy 100% free.',
                'answerUr': 'جی ہاں! ریفرنس نمبر درج کر کے آن لائن بل کی مفت کاپی ڈاؤن لوڈ کریں۔'
          },
          {
                'questionEn': 'How to register complaint for power outage or high bill?',
                'questionUr': 'بجلی بندش یا زیادہ بل کی آن لائن شکایت کیسے درج کریں؟',
                'answerEn': 'Call WAPDA central helpline 118 or contact your local distribution company facilitation center with 14-digit reference number.',
                'answerUr': 'ہیلپ لائن 118 پر کال کر کے یا قریبی سروس سینٹر جا کر شکایت درج کروائیں۔'
          }
    ],
    contentEn: `Official online bill checking system for all K-Electric residential and commercial accounts in Karachi, Hub, and Dhabeji.`,
    contentUr: `کے الیکٹرک کراچی کے تمام صارفین کے لیے ڈپلیکیٹ بل اور آن لائن ادائیگی کی تفسیل۔`,
    relatedSlugs: ['/bills/lesco-bill-check-online', '/bills/wapda-bill-complaint-number'],
  },

  'sui-gas-bill-check-online': {
    slug: 'sui-gas-bill-check-online',
    fullPath: '/bills/sui-gas-bill-check-online',
    categoryId: 'bills',
    titleEn: 'Sui Gas Bill Check Online 2026: SNGPL & SSGC Duplicate Bill Portal',
    titleUr: 'سوئی گیس بل آن لائن چیک 2026: SNGPL اور SSGC ڈپلیکیٹ بل',
    metaDescriptionEn: 'Check Sui Northern (SNGPL) and Sui Southern (SSGC) gas bills online by Consumer Number / Account ID. Free PDF duplicate bill viewer for Pakistan.',
    metaDescriptionUr: 'سوئی ناردرن اور سوئی سدرن گیس کا بل آن لائن کنزیومر نمبر سے دیکھیں اور ڈاؤن لوڈ کریں۔',
    directAnswerEn: 'For SNGPL (Punjab, KPK, Islamabad), check gas bill at sngpl.com.pk using your 11-digit Consumer Number. For SSGC (Sindh, Balochistan), visit ssgc.com.pk with your 10-digit Customer No.',
    directAnswerUr: 'سوئی ناردرن کے بل کے لیے 11 ہندسوں کا کنزیومر نمبر اور سوئی سدرن کے لیے 10 ہندسوں کا کسٹمر نمبر داخل کریں۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'SNGPL Official Portal', url: 'https://www.sngpl.com.pk/' },
    author: { name: 'Editorial Team', role: 'Gas & Power Desk' },
    faqs: [
          {
                'questionEn': 'Where is the 14-digit Reference Number on electricity bill?',
                'questionUr': 'بجلی بل پر 14 ہندسوں کا ریفرنس نمبر کہاں لکھا ہوتا ہے؟',
                'answerEn': 'The 14-digit Reference Number is printed on top-right section of paper bill above consumer name.',
                'answerUr': 'ریفرنس نمبر بل کے اوپری دائیں ڈبے میں صارف نام کے اوپر درج ہوتا ہے۔'
          },
          {
                'questionEn': 'Can I download duplicate electricity bill PDF for free?',
                'questionUr': 'کیا ڈپلیکیٹ بل پی ڈی ایف مفت ڈاؤن لوڈ ہو سکتا ہے؟',
                'answerEn': 'Yes! Enter your 14-digit Reference Number on our online bill tool to print or save PDF duplicate copy 100% free.',
                'answerUr': 'جی ہاں! ریفرنس نمبر درج کر کے آن لائن بل کی مفت کاپی ڈاؤن لوڈ کریں۔'
          },
          {
                'questionEn': 'How to register complaint for power outage or high bill?',
                'questionUr': 'بجلی بندش یا زیادہ بل کی آن لائن شکایت کیسے درج کریں؟',
                'answerEn': 'Call WAPDA central helpline 118 or contact your local distribution company facilitation center with 14-digit reference number.',
                'answerUr': 'ہیلپ لائن 118 پر کال کر کے یا قریبی سروس سینٹر جا کر شکایت درج کروائیں۔'
          }
    ],
    contentEn: `Find duplicate bill download instructions for both major gas distribution companies operating across Pakistan.`,
    contentUr: `پاکستان میں سوئی گیس کے آن لائن بل اور میٹر ریڈنگ چیک کرنے کا گائیڈ۔`,
    relatedSlugs: ['/bills/lesco-bill-check-online', '/bills/wapda-bill-complaint-number'],
  },

  'wapda-bill-complaint-number': {
    slug: 'wapda-bill-complaint-number',
    fullPath: '/bills/wapda-bill-complaint-number',
    categoryId: 'bills',
    titleEn: 'WAPDA Complaint Numbers & Helplines 2026 (LESCO, MEPCO, IESCO)',
    titleUr: 'واپڈا بجلی ہیلپ لائن اور شکایات نمبرز 2026 (تمام کمپنیاں)',
    metaDescriptionEn: 'Official electricity complaint helpline numbers for all DISCOs in Pakistan: 118 central emergency line, LESCO, FESCO, GEPCO, IESCO, MEPCO, PESCO, QESCO, HESCO.',
    metaDescriptionUr: 'پاکستان کی تمام بجلی کمپنیوں (لیسکو، آئیسکو، میپکو، پشاور، فیصل آباد) کے ایمرجنسی اور شکایت کے نمبرز۔',
    directAnswerEn: 'The universal WAPDA electricity complaint emergency helpline across Pakistan is 118 or SMS to 8118. Ministry of Energy Power Division Complaint Cell can be reached at 051-9103888.',
    directAnswerUr: 'پاکستان بھر میں بجلی کی بندش یا فالتو بلنگ کی شکایت درج کروانے کے لیے 118 پر مفت کال کریں یا 8118 پر ایس ایم ایس کریں۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'Ministry of Energy Power Division', url: 'https://mowp.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Consumer Rights Desk' },
    faqs: [
          {
                'questionEn': 'Where is the 14-digit Reference Number on electricity bill?',
                'questionUr': 'بجلی بل پر 14 ہندسوں کا ریفرنس نمبر کہاں لکھا ہوتا ہے؟',
                'answerEn': 'The 14-digit Reference Number is printed on top-right section of paper bill above consumer name.',
                'answerUr': 'ریفرنس نمبر بل کے اوپری دائیں ڈبے میں صارف نام کے اوپر درج ہوتا ہے۔'
          },
          {
                'questionEn': 'Can I download duplicate electricity bill PDF for free?',
                'questionUr': 'کیا ڈپلیکیٹ بل پی ڈی ایف مفت ڈاؤن لوڈ ہو سکتا ہے؟',
                'answerEn': 'Yes! Enter your 14-digit Reference Number on our online bill tool to print or save PDF duplicate copy 100% free.',
                'answerUr': 'جی ہاں! ریفرنس نمبر درج کر کے آن لائن بل کی مفت کاپی ڈاؤن لوڈ کریں۔'
          },
          {
                'questionEn': 'How to register complaint for power outage or high bill?',
                'questionUr': 'بجلی بندش یا زیادہ بل کی آن لائن شکایت کیسے درج کریں؟',
                'answerEn': 'Call WAPDA central helpline 118 or contact your local distribution company facilitation center with 14-digit reference number.',
                'answerUr': 'ہیلپ لائن 118 پر کال کر کے یا قریبی سروس سینٹر جا کر شکایت درج کروائیں۔'
          }
    ],
    contentEn: `Directory of emergency contact numbers for power outages, transformer breakdown, and over-billing complaints in Pakistan.`,
    contentUr: `پاکستان میں بجلی بندش اور خرابی کی فوری رپورٹ کے لیے تمام کمپنیوں کی ہیلپ لائنز۔`,
    relatedSlugs: ['/bills/lesco-bill-check-online', '/bills/k-electric-duplicate-bill'],
  },

  // JOBS ARTICLES
  'latest-govt-jobs-pakistan': {
    slug: 'latest-govt-jobs-pakistan',
    fullPath: '/jobs/latest-govt-jobs-pakistan',
    categoryId: 'jobs',
    titleEn: 'Latest Govt Jobs in Pakistan August 2026: Federal & Provincial Vacancies',
    titleUr: 'پاکستان میں نئی سرکاری نوکریاں اگست 2026: وفاقی و صوبائی شعبہ جات',
    metaDescriptionEn: 'Daily updated list of federal and provincial government job vacancies in Pakistan. Education department, Pakistan Army, Police, Health, Railways, and Banks.',
    metaDescriptionUr: 'حکومت پاکستان کے مختلف محکموں (تعلیم، پولیس، ہیلتھ، ریلوے اور بینکس) میں نئی جاری ہونے والی سرکاری نوکریوں کا پورٹل۔',
    directAnswerEn: 'Government job announcements in Pakistan are published in official newspapers and departmental portals (such as njp.gov.pk - National Job Portal). Applicants apply online with CNIC and degree certificates.',
    directAnswerUr: 'پاکستان کی تمام وفاقی اور صوبائی سرکاری نوکریوں میں آن لائن اپلائی کرنے کے لیے نیشنل جاب پورٹل (njp.gov.pk) کا استعمال کریں۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'National Job Portal (NJP)', url: 'https://njp.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Career & Employment Desk' },
    faqs: [
          {
                'questionEn': 'How to check latest Govt Jobs in Pakistan online?',
                'questionUr': 'پاکستان میں نئی سرکاری نوکریاں آن لائن کیسے دیکھیں؟',
                'answerEn': 'Check daily announcements on official portals ppsc.gop.pk, fpsc.gov.pk, nts.org.pk, or browse our daily updated jobs directory.',
                'answerUr': 'PPSC، FPSC، NTS اور ہمارے پورٹل پر روزانہ کی نئی ملازمتیں دیکھیں۔'
          },
          {
                'questionEn': 'How to apply online for PPSC and NTS tests?',
                'questionUr': 'پی پی ایس سی اور این ٹی ایس سیٹوں کے لیے آن لائن فارم کیسے بھریں؟',
                'answerEn': 'Generate PSID fee voucher on job portal (PPSC PKR 600 fee), deposit via JazzCash or 1Link, fill online form, and submit before closing date.',
                'answerUr': 'آن لائن پورٹل سے PSID بنائیں، فیس جاز کیش سے ادا کریں اور فارم پر کریں۔'
          },
          {
                'questionEn': 'Which original documents are required during job interview?',
                'questionUr': 'انٹرویو کے دن کون سے اصل کاغذات لانا لازمی ہیں؟',
                'answerEn': 'Bring original CNIC, educational certificates (Matric/Inter/Degree), domicile certificate, 2 photographs, and paid fee challan.',
                'answerUr': 'اصل شناختی کارڈ، تعلیمی اسناد، ڈومیسائل اور فیس چالان لانا ضروری ہے۔'
          }
    ],
    contentEn: `Updated listing of latest government jobs in Pakistan for Matric, Intermediate, Bachelors, and Master degree holders.`,
    contentUr: `تعلیمی قابلیت کے لحاظ سے پاکستان میں نئی انے والی تمام گورنمنٹ ملازمتوں کی معلومات۔`,
    relatedSlugs: ['/jobs/ppsc-jobs-2026', '/jobs/nts-jobs-today'],
  },

  'ppsc-jobs-2026': {
    slug: 'ppsc-jobs-2026',
    fullPath: '/jobs/ppsc-jobs-2026',
    categoryId: 'jobs',
    titleEn: 'PPSC Jobs 2026: Punjab Public Service Commission Online Apply',
    titleUr: 'پی پی ایس سی (PPSC) نوکریاں 2026: ایڈورٹائزمنٹ اور آن لائن اپلائی',
    metaDescriptionEn: 'PPSC upcoming jobs advertisement 2026, online application form at ppsc.gop.pk, challan form fee (PKR 600), exam planner, and admission letters.',
    metaDescriptionUr: 'پنجاب پبلک سروس کمیشن کی نئی نوکریاں، آن لائن اپلائی، چالان فارم فیس 600 روپے اور امتحان کا پلانر۔',
    directAnswerEn: 'To apply for PPSC vacancies in Punjab government departments, download the PKR 600 fee challan from ppsc.gop.pk, deposit fee at State Bank or NBP, and fill online application.',
    directAnswerUr: 'پی پی ایس سی کی کسی بھی آسامی پر اپلائی کرنے کے لیے 600 روپے فیس چالان فارم ppsc.gop.pk سے ڈاؤن لوڈ کریں۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'PPSC Official Portal', url: 'https://ppsc.gop.pk/' },
    author: { name: 'Editorial Team', role: 'Public Service Commission Desk' },
    faqs: [
          {
                'questionEn': 'How to check latest Govt Jobs in Pakistan online?',
                'questionUr': 'پاکستان میں نئی سرکاری نوکریاں آن لائن کیسے دیکھیں؟',
                'answerEn': 'Check daily announcements on official portals ppsc.gop.pk, fpsc.gov.pk, nts.org.pk, or browse our daily updated jobs directory.',
                'answerUr': 'PPSC، FPSC، NTS اور ہمارے پورٹل پر روزانہ کی نئی ملازمتیں دیکھیں۔'
          },
          {
                'questionEn': 'How to apply online for PPSC and NTS tests?',
                'questionUr': 'پی پی ایس سی اور این ٹی ایس سیٹوں کے لیے آن لائن فارم کیسے بھریں؟',
                'answerEn': 'Generate PSID fee voucher on job portal (PPSC PKR 600 fee), deposit via JazzCash or 1Link, fill online form, and submit before closing date.',
                'answerUr': 'آن لائن پورٹل سے PSID بنائیں، فیس جاز کیش سے ادا کریں اور فارم پر کریں۔'
          },
          {
                'questionEn': 'Which original documents are required during job interview?',
                'questionUr': 'انٹرویو کے دن کون سے اصل کاغذات لانا لازمی ہیں؟',
                'answerEn': 'Bring original CNIC, educational certificates (Matric/Inter/Degree), domicile certificate, 2 photographs, and paid fee challan.',
                'answerUr': 'اصل شناختی کارڈ، تعلیمی اسناد، ڈومیسائل اور فیس چالان لانا ضروری ہے۔'
          }
    ],
    contentEn: `Complete guide for Punjab Public Service Commission job recruitment tests, syllabus, and interview schedules.`,
    contentUr: `پی پی ایس سی کے تحت پنجاب کے مختلف محکموں میں بھرتی کی مکمل تفصیل۔`,
    relatedSlugs: ['/jobs/latest-govt-jobs-pakistan', '/jobs/nts-jobs-today'],
  },

  'nts-jobs-today': {
    slug: 'nts-jobs-today',
    fullPath: '/jobs/nts-jobs-today',
    categoryId: 'jobs',
    titleEn: 'NTS Jobs Today 2026: National Testing Service Roll No Slip & Results',
    titleUr: 'این ٹی ایس (NTS) جابز 2026: رول نمبر سلپ اور رزلٹ آن لائن چیک',
    metaDescriptionEn: 'Latest NTS job announcements 2026, online application process, roll number slip download, answer key, and NAT/GAT test schedule.',
    metaDescriptionUr: 'این ٹی ایس کی نئی نوکریاں، رول نمبر سلپ ڈاؤن لوڈ، انسر کی اور رزلٹ چیک کرنے کی معلومات۔',
    directAnswerEn: 'Access all active NTS screening tests and recruitment projects at nts.org.pk. Create an NTS account, upload photo and CNIC copy, pay fee via 1Link 1Bill, and download Roll Number Slip 7 days before exam.',
    directAnswerUr: 'این ٹی ایس کے تمام ایکٹو پروجیکٹس اور نوکریوں کے لیے nts.org.pk پر جا کر آن لائن رول نمبر سلپ ڈاؤن لوڈ کریں۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'NTS Official Web Portal', url: 'https://nts.org.pk/' },
    author: { name: 'Editorial Team', role: 'Testing & Recruitment Desk' },
    faqs: [
          {
                'questionEn': 'How to check latest Govt Jobs in Pakistan online?',
                'questionUr': 'پاکستان میں نئی سرکاری نوکریاں آن لائن کیسے دیکھیں؟',
                'answerEn': 'Check daily announcements on official portals ppsc.gop.pk, fpsc.gov.pk, nts.org.pk, or browse our daily updated jobs directory.',
                'answerUr': 'PPSC، FPSC، NTS اور ہمارے پورٹل پر روزانہ کی نئی ملازمتیں دیکھیں۔'
          },
          {
                'questionEn': 'How to apply online for PPSC and NTS tests?',
                'questionUr': 'پی پی ایس سی اور این ٹی ایس سیٹوں کے لیے آن لائن فارم کیسے بھریں؟',
                'answerEn': 'Generate PSID fee voucher on job portal (PPSC PKR 600 fee), deposit via JazzCash or 1Link, fill online form, and submit before closing date.',
                'answerUr': 'آن لائن پورٹل سے PSID بنائیں، فیس جاز کیش سے ادا کریں اور فارم پر کریں۔'
          },
          {
                'questionEn': 'Which original documents are required during job interview?',
                'questionUr': 'انٹرویو کے دن کون سے اصل کاغذات لانا لازمی ہیں؟',
                'answerEn': 'Bring original CNIC, educational certificates (Matric/Inter/Degree), domicile certificate, 2 photographs, and paid fee challan.',
                'answerUr': 'اصل شناختی کارڈ، تعلیمی اسناد، ڈومیسائل اور فیس چالان لانا ضروری ہے۔'
          }
    ],
    contentEn: `Find current NTS application forms, NAT/GAT exam schedules, and recruitment result portal links.`,
    contentUr: `این ٹی ایس کے ذریعے ہونے والے تمام ٹیسٹس کی تاریخیں، سلیبس اور رول نمبر سلپس کا آن لائن گائیڈ۔`,
    relatedSlugs: ['/jobs/latest-govt-jobs-pakistan', '/jobs/ppsc-jobs-2026'],
  },

  // GOVERNMENT LOANS ARTICLES (5 NEW ROUTES)
  'apni-chhat-apna-ghar': {
    slug: 'apni-chhat-apna-ghar',
    fullPath: '/loans/apni-chhat-apna-ghar',
    categoryId: 'loans',
    titleEn: 'Apni Chhat Apna Ghar Scheme 2026: 1.5M PKR Housing Loan Apply',
    titleUr: 'اپنی چھت اپنا گھر سکیم 2026: آن لائن اپلائی (15 لاکھ روپے بلا سود قرضہ)',
    metaDescriptionEn: 'Apni Chhat Apna Ghar Housing Loan 2026 apply online at acag.punjab.gov.pk. 1.5 Million PKR interest-free loan rules, eligibility, and plot documents.',
    metaDescriptionUr: 'وزیراعلیٰ پنجاب اپنی چھت اپنا گھر سکیم 2026 کا آن لائن اپلائی پورٹل، 15 لاکھ بلا سود قرضہ، ماہانہ قسط 14,000 روپے اور 9 سالہ ادائیگی۔',
    directAnswerEn: 'Apni Chhat Apna Ghar is an interest-free housing loan scheme launched by the Government of Punjab providing up to PKR 1.5 Million (15 Lakhs) for plot owners (up to 5 marlas urban or 10 marlas rural). The loan is 100% interest-free with zero service charges, payable in easy monthly installments of approx PKR 14,000 over 9 years. Apply at acag.punjab.gov.pk.',
    directAnswerUr: 'اپنی چھت اپنا گھر سکیم حکومت پنجاب کی بلا سود ہاؤسنگ سکیم ہے جس کے تحت 5 مرلہ شہری یا 10 مرلہ دیہی پلاٹ کے مالکان کو 15 لاکھ روپے (1.5 ملین) کا بلا سود قرض دیا جاتا ہے۔ اس کی ماہانہ قسط تقریباً 14,000 روپے 9 سال کے لیے طے کی گئی ہے۔ آن لائن اپلائی acag.punjab.gov.pk پر کریں۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'Punjab Housing & Urban Development Portal', url: 'https://acag.punjab.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Housing & Financial Schemes Desk' },
    feeStructure: [
      { serviceEn: 'Apni Chhat Housing Loan (Tier 1)', serviceUr: 'ہاؤسنگ قرضہ (15 لاکھ روپے)', normal: '0% Interest / PKR 0 Fee', urgent: '14,000 PKR / month', executive: '9 Years Repayment' },
    ],
    steps: [
      { stepNumber: 1, titleEn: 'Verify Plot Ownership', titleUr: 'پلاٹ کی ملکیت کی تصدیق', detailEn: 'Ensure you own up to 5 Marla urban or 10 Marla rural land registered on your CNIC.', detailUr: 'شہری علاقے میں 5 مرلہ یا دیہی علاقے میں 10 مرلہ زمین کی اصل رجسٹری یا فرد ساتھ رکھیں۔' },
      { stepNumber: 2, titleEn: 'Register on ACAG Portal', titleUr: 'اے سی اے جی پورٹل پر رجسٹریشن', detailEn: 'Create account on acag.punjab.gov.pk using CNIC and mobile number.', detailUr: 'اپنی شناختی کارڈ اور موبائل نمبر کی مدد سے آفیشل پورٹل پر اکاؤنٹ بنائیں۔' },
      { stepNumber: 3, titleEn: 'Submit Application & Documents', titleUr: 'دستاویزات اور فارم کا اندراج', detailEn: 'Upload CNIC scan, property ownership documents, and photograph.', detailUr: 'شناختی کارڈ، پلاٹ کی سند اور تصویر اپ لوڈ کریں۔' },
    ],
    faqs: [
      {
        questionEn: 'Is there any interest (Riba) on Apni Chhat Apna Ghar scheme?',
        questionUr: 'کیا اپنی چھت اپنا گھر سکیم پر کوئی سود یا مارک اپ ہے؟',
        answerEn: 'No, the loan is 100% interest-free (0% markup / 0% Riba). You only repay the exact principal amount of PKR 1.5 Million in monthly installments. The Government of Punjab covers the financing cost.',
        answerUr: 'جی نہیں، یہ قرضہ 100 فیصد بلا سود (صفر فیصد مارک اپ) ہے۔ آپ کو صرف 15 لاکھ روپے اصل رقم واپس کرنی ہے جو حکومت پنجاب کی طرف سے ہے۔',
      },
      {
        questionEn: 'Can I apply if I rent my house but own a plot?',
        questionUr: 'اگر میں کرایہ کے مکان میں رہتا ہوں لیکن پلاٹ کا مالک ہوں تو کیا اپلائی کر سکتا ہوں؟',
        answerEn: 'Yes! The scheme is specifically for plot owners who do not yet have a constructed house. If you own up to 5 Marla (urban) or 10 Marla (rural/peri-urban) land registered on your CNIC, you are eligible regardless of your current living situation.',
        answerUr: 'جی ہاں! یہ سکیم خاص طور پر ان لوگوں کے لیے ہے جن کے پاس پلاٹ ہے لیکن مکان نہیں۔ شہری علاقے میں 5 مرلہ یا دیہی میں 10 مرلہ پلاٹ آپ کے شناختی کارڈ پر رجسٹرڈ ہونا ضروری ہے۔',
      },
      {
        questionEn: 'What is the monthly installment amount?',
        questionUr: 'ماہانہ قسط کتنی ہوتی ہے؟',
        answerEn: 'The approximate monthly installment is PKR 14,000 per month for 9 years (108 installments total) on the PKR 1.5 Million loan. The exact amount may vary slightly based on the disbursement tranche schedule.',
        answerUr: '15 لاکھ روپے قرضے پر ماہانہ قسط تقریباً 14,000 روپے ہے جو 9 سال (108 اقساط) میں ادا کرنا ہوگی۔',
      },
      {
        questionEn: 'Is there any income limit to apply?',
        questionUr: 'کیا آمدن کی کوئی حد مقرر ہے؟',
        answerEn: 'The scheme targets low-to-middle income families. Applicants should not own a constructed house already and must not have benefited from any previous government housing scheme. NADRA and PLRA records are cross-checked automatically.',
        answerUr: 'سکیم کم اور درمیانی آمدن والے خاندانوں کے لیے ہے۔ درخواست دہندہ کا پہلے سے بنا ہوا مکان نہیں ہونا چاہیے اور کسی پرانی سرکاری ہاؤسنگ سکیم سے فائدہ نہیں اٹھانا چاہیے۔',
      },
    ],
    contentEn: `The Apni Chhat Apna Ghar housing scheme is designed for low-income citizens across Punjab to build their own homes. Eligibility is verified electronically via NADRA CNIC and Land Records (PLRA).

Key Scheme Details:
• Loan Amount: Up to PKR 1,500,000 (1.5 Million / 15 Lakhs)
• Interest Rate: 0% — completely interest-free (no Riba)
• Monthly Installment: Approximately PKR 14,000 per month
• Repayment Period: 9 years (108 equal monthly installments)
• Administering Bank: Bank of Punjab (BOP) on behalf of Punjab Government
• Disbursement: Released in tranches based on construction progress

Eligibility Criteria:
• Pakistani citizen with valid CNIC registered in Punjab
• Must own an undeveloped plot: up to 5 Marla in urban areas OR up to 10 Marla in rural/peri-urban areas
• Plot must be registered in the applicant's name in PLRA (Punjab Land Records Authority)
• Must not own a constructed house anywhere in Pakistan
• Must not have previously benefited from any government housing scheme (Naya Pakistan Housing, Mera Ghar, etc.)

How to Apply (Step by Step):
1. Visit acag.punjab.gov.pk on your smartphone or computer
2. Create an account using your CNIC and mobile number
3. Fill in the online application form with personal and property details
4. Upload scanned copies of: CNIC, property ownership document (Fard/Mutation), and photograph
5. Submit application — your eligibility is verified automatically via NADRA + PLRA integration
6. If shortlisted, Bank of Punjab will contact you for the loan agreement

Construction Disbursement:
The loan is released in 3 construction tranches:
• 1st Tranche (30%): After foundation is complete
• 2nd Tranche (40%): After roof slab is complete
• 3rd Tranche (30%): After plastering/finishing is done

Official Helpline: 0800-02345 (toll-free, Monday to Saturday)`,
    contentUr: `اپنی چھت اپنا گھر سکیم حکومت پنجاب کی بلا سود ہاؤسنگ اسکیم ہے جو کم آمدن والے شہریوں کو اپنا گھر بنانے میں مدد کرتی ہے۔

سکیم کی اہم تفصیلات:
• قرضے کی رقم: 15 لاکھ روپے (PKR 1.5 ملین)
• سود کی شرح: صفر فیصد (مکمل بلا سود)
• ماہانہ قسط: تقریباً 14,000 روپے
• ادائیگی کی مدت: 9 سال (108 ماہانہ اقساط)
• بینک آف پنجاب (BOP) کے ذریعے ادائیگی

اہلیت کی شرائط:
• پنجاب میں رہنے والا پاکستانی شہری
• شہری علاقے میں 5 مرلہ یا دیہی میں 10 مرلہ پلاٹ کا مالک
• پلاٹ PLRA میں آپ کے نام رجسٹرڈ ہو
• پہلے سے بنا ہوا مکان نہ ہو
• کسی پرانی سرکاری ہاؤسنگ سکیم سے فائدہ نہ اٹھایا ہو

اپلائی کرنے کا طریقہ:
1۔ acag.punjab.gov.pk پر جائیں
2۔ شناختی کارڈ اور موبائل نمبر سے اکاؤنٹ بنائیں
3۔ آن لائن فارم پُر کریں
4۔ شناختی کارڈ، پلاٹ کی فرد/میوٹیشن اور تصویر اپ لوڈ کریں
5۔ بینک آف پنجاب سے رابطہ ہوگا

ہیلپ لائن: 0800-02345 (مفت)`,
    relatedSlugs: ['/loans/pm-youth-loan-scheme', '/loans/mera-ghar-mera-ashiana', '/loans/kamyab-jawan-program'],
  },

  'kamyab-jawan-program': {
    slug: 'kamyab-jawan-program',
    fullPath: '/loans/kamyab-jawan-program',
    categoryId: 'loans',
    titleEn: 'Kamyab Jawan Program 2026: Youth Business Loan Online Registration',
    titleUr: 'کامیاب جوان پروگرام 2026: یوتھ بزنس لون آن لائن رجسٹریشن و گائیڈ',
    metaDescriptionEn: 'Complete registration guide for Kamyab Jawan Youth Business & Agriculture Loans 2026. Tier 1 (up to 5 Lakhs @ 0%), Tier 2 (up to 10 Million @ 5%), and Tier 3 rules.',
    metaDescriptionUr: 'کامیاب جوان کاروبار اور زراعت قرضہ سکیم 2026۔ ٹائر 1 (5 لاکھ روپے بلا سود)، ٹائر 2 (1 کروڑ روپے کم مارک اپ) اور بینک آف پنجاب گائیڈ۔',
    directAnswerEn: 'Kamyab Jawan Program (now part of Prime Minister Youth Business & Agriculture Loan Scheme) offers subsidized business loans to Pakistani citizens aged 21 to 45. Tier 1 offers up to PKR 500,000 interest-free (0% markup). Tier 2 offers up to PKR 10 Million at subsidized 5% to 7% markup rates.',
    directAnswerUr: 'کامیاب جوان پروگرام 21 سے 45 سال کے پاکستانی نوجوانوں کو اپنا نیا کاروبار شروع کرنے یا پرانے کو بڑھانے کے لیے 5 لاکھ سے 1 کروڑ روپے تک کا قرضہ دیتا ہے۔ ٹائر 1 میں 5 لاکھ روپے تک کا قرضہ بالکل بلا سود ہوتا ہے۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'PM Youth Program Official Portal', url: 'https://pmyp.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Youth & Small Business Desk' },
    feeStructure: [
      { serviceEn: 'Tier 1 (Micro Loan)', serviceUr: 'ٹائر 1 (مائیکرو قرضہ)', normal: 'Up to PKR 500,000', urgent: '0% Interest', executive: 'No Collateral Needed' },
      { serviceEn: 'Tier 2 (SME Business)', serviceUr: 'ٹائر 2 (کاروباری قرضہ)', normal: 'PKR 500k to 10 Million', urgent: '5% Fixed Markup', executive: '8 Years Repayment' },
    ],
    faqs: [
          {
                'questionEn': 'What is the maximum loan limit and markup rate?',
                'questionUr': 'سرکاری قرضے کی حد اور مارک اپ ریٹ کتنا ہے؟',
                'answerEn': 'Under Govt interest-free housing schemes (Apni Chhat), eligible applicants receive up to PKR 1.5 Million at 0% markup.',
                'answerUr': 'اپنی چھت اپنا گھر سکیم کے تحت 15 لاکھ روپے تک بلا سود قرضہ ملتا ہے۔'
          },
          {
                'questionEn': 'Who is eligible to apply for Govt Youth & Housing Loans?',
                'questionUr': 'سرکاری قرضہ سکیموں میں درخواست دینے کے لیے کون اہل ہے؟',
                'answerEn': 'Pakistani citizens aged 21 to 45 years with valid CNIC, clean credit report (eCIB), and income/land proof are eligible.',
                'answerUr': '21 تا 45 سال کے شناختی کارڈ ہولڈر تمام پاکستانی شہری درخواست دے سکتے ہیں۔'
          },
          {
                'questionEn': 'Is there any application fee or private agent charge?',
                'questionUr': 'کیا آن لائن درخواست کی کوئی فارم فیس ہے؟',
                'answerEn': 'NO! Official government loan portals (pmyp.gov.pk / acag.punjab.gov.pk) do NOT charge any processing fee. Registration is 100% FREE.',
                'answerUr': 'جی نہیں! سرکاری لون پورٹلز پر آن لائن فارم جمع کروانا بالکل مفت ہے۔'
          }
    ],
    contentEn: `Detailed step-by-step breakdown of Kamyab Jawan business plan form submission through NBP, BOP, and Habib Bank.`,
    contentUr: `کامیاب جوان پورٹل سے نیا کاروباری منصوبہ فارم اور بینک سے رقم وصولی کا مکمل گائیڈ۔`,
    relatedSlugs: ['/loans/pm-youth-loan-scheme', '/loans/asaan-karobar-scheme'],
  },

  'mera-ghar-mera-ashiana': {
    slug: 'mera-ghar-mera-ashiana',
    fullPath: '/loans/mera-ghar-mera-ashiana',
    categoryId: 'loans',
    titleEn: 'Mera Ghar Mera Ashiana Housing Scheme 2026: Subsidized Home Financing',
    titleUr: 'میرا گھر میرا آشیانہ سکیم 2026: سستے گھروں کے لیے بینک ہاؤسنگ فنانسنگ',
    metaDescriptionEn: 'Guide for Mera Ghar Mera Ashiana Low-Cost Housing Financing 2026. Subsidized mortgage rates, Naya Pakistan Housing registration, eligibility by CNIC.',
    metaDescriptionUr: 'میرا گھر میرا آشیانہ ہاؤسنگ فنانسنگ 2026۔ کم لاگت مکانات کے لیے بینکوں کا سبسڈائزڈ قرضہ، اہلیت اور درکار دستاویزات۔',
    directAnswerEn: 'Mera Ghar Mera Ashiana is a government-subsidized mortgage program enabling low and middle-income families to finance constructed houses or apartments over 15 to 20 years with fixed discounted markup tiers starting at 3% to 5%.',
    directAnswerUr: 'میرا گھر میرا آشیانہ کم لاگت سستا ہاؤسنگ فنانسنگ پروگرام ہے جس کے تحت 15 سے 20 سال کے لیے 3 فیصد سے 5 فیصد رعایت پر بینک قرضہ فراہم کرتے ہیں۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'State Bank of Pakistan Housing Finance', url: 'https://www.sbp.org.pk/' },
    author: { name: 'Editorial Team', role: 'Mortgage Desk' },
    faqs: [
          {
                'questionEn': 'What is the maximum loan limit and markup rate?',
                'questionUr': 'سرکاری قرضے کی حد اور مارک اپ ریٹ کتنا ہے؟',
                'answerEn': 'Under Govt interest-free housing schemes (Apni Chhat), eligible applicants receive up to PKR 1.5 Million at 0% markup.',
                'answerUr': 'اپنی چھت اپنا گھر سکیم کے تحت 15 لاکھ روپے تک بلا سود قرضہ ملتا ہے۔'
          },
          {
                'questionEn': 'Who is eligible to apply for Govt Youth & Housing Loans?',
                'questionUr': 'سرکاری قرضہ سکیموں میں درخواست دینے کے لیے کون اہل ہے؟',
                'answerEn': 'Pakistani citizens aged 21 to 45 years with valid CNIC, clean credit report (eCIB), and income/land proof are eligible.',
                'answerUr': '21 تا 45 سال کے شناختی کارڈ ہولڈر تمام پاکستانی شہری درخواست دے سکتے ہیں۔'
          },
          {
                'questionEn': 'Is there any application fee or private agent charge?',
                'questionUr': 'کیا آن لائن درخواست کی کوئی فارم فیس ہے؟',
                'answerEn': 'NO! Official government loan portals (pmyp.gov.pk / acag.punjab.gov.pk) do NOT charge any processing fee. Registration is 100% FREE.',
                'answerUr': 'جی نہیں! سرکاری لون پورٹلز پر آن لائن فارم جمع کروانا بالکل مفت ہے۔'
          }
    ],
    contentEn: `Compare state-subsidized housing finance options offered across Commercial Banks, Meezan Islamic Bank, and House Building Finance Corporation (HBFC).`,
    contentUr: `میزان بینک اور ایچ بی ایف سی کے ذریعے اسلامی ہاؤسنگ فنانسنگ حاصل کرنے کی ہدایات۔`,
    relatedSlugs: ['/loans/apni-chhat-apna-ghar', '/loans/pm-youth-loan-scheme'],
  },

  'asaan-karobar-scheme': {
    slug: 'asaan-karobar-scheme',
    fullPath: '/loans/asaan-karobar-scheme',
    categoryId: 'loans',
    titleEn: 'Asaan Karobar Scheme 2026: Small Business & Shopkeeper Loan Guide',
    titleUr: 'آسان کاروبار سکیم 2026: چھوٹے تاجروں اور دکانداروں کے لیے آسان قرضہ',
    metaDescriptionEn: 'Asaan Karobar Scheme 2026 rules, microfinance loans for shopkeepers, cottage industry, women entrepreneurs, fee structures, and application portals.',
    metaDescriptionUr: 'آسان کاروبار سکیم 2026۔ چھوٹے تاجروں، خواتین اور گھریلو صنعت کے لیے آسان اقساط پر قرضہ جات کی معلومات۔',
    directAnswerEn: 'Asaan Karobar Scheme provides hassle-free working capital and equipment financing for small shopkeepers, micro-entrepreneurs, and cottage industries up to PKR 1 Million with minimum documentation via Akhuwat and Microfinance Banks.',
    directAnswerUr: 'آسان کاروبار سکیم چھوٹے تاجروں اور دکانداروں کو 10 لاکھ روپے تک آسان ترین شرائط پر ورکنگ کیپیٹل اور مشینری کے لیے قرضہ فراہم کرتی ہے۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'SMEDA Pakistan Official Portal', url: 'https://smeda.org/' },
    author: { name: 'Editorial Team', role: 'Micro-Finance Desk' },
    faqs: [
          {
                'questionEn': 'What is the maximum loan limit and markup rate?',
                'questionUr': 'سرکاری قرضے کی حد اور مارک اپ ریٹ کتنا ہے؟',
                'answerEn': 'Under Govt interest-free housing schemes (Apni Chhat), eligible applicants receive up to PKR 1.5 Million at 0% markup.',
                'answerUr': 'اپنی چھت اپنا گھر سکیم کے تحت 15 لاکھ روپے تک بلا سود قرضہ ملتا ہے۔'
          },
          {
                'questionEn': 'Who is eligible to apply for Govt Youth & Housing Loans?',
                'questionUr': 'سرکاری قرضہ سکیموں میں درخواست دینے کے لیے کون اہل ہے؟',
                'answerEn': 'Pakistani citizens aged 21 to 45 years with valid CNIC, clean credit report (eCIB), and income/land proof are eligible.',
                'answerUr': '21 تا 45 سال کے شناختی کارڈ ہولڈر تمام پاکستانی شہری درخواست دے سکتے ہیں۔'
          },
          {
                'questionEn': 'Is there any application fee or private agent charge?',
                'questionUr': 'کیا آن لائن درخواست کی کوئی فارم فیس ہے؟',
                'answerEn': 'NO! Official government loan portals (pmyp.gov.pk / acag.punjab.gov.pk) do NOT charge any processing fee. Registration is 100% FREE.',
                'answerUr': 'جی نہیں! سرکاری لون پورٹلز پر آن لائن فارم جمع کروانا بالکل مفت ہے۔'
          }
    ],
    contentEn: `SMEDA and Akhuwat microfinance loan guidelines for small traders and female-owned home businesses.`,
    contentUr: `کوٹیج انڈسٹری اور چھوٹے کاروبار کے لیے اخوت اور مائیکرو فنانس بینکوں سے قرضہ حاصل کرنے کا گائیڈ۔`,
    relatedSlugs: ['/loans/kamyab-jawan-program', '/loans/pm-youth-loan-scheme'],
  },

  'pm-youth-loan-scheme': {
    slug: 'pm-youth-loan-scheme',
    fullPath: '/loans/pm-youth-loan-scheme',
    categoryId: 'loans',
    titleEn: 'Prime Minister Youth Business & Agriculture Loan Scheme 2026 (PMYB&ALS)',
    titleUr: 'پرائم منسٹر یوتھ بزنس اینڈ ایگری کلچر لون سکیم 2026 (آن لائن فارم)',
    metaDescriptionEn: 'PM Youth Business Loan 2026 application guide (pmyp.gov.pk). Tier 1 (PKR 0.5M @ 0%), Tier 2 (PKR 1.5M @ 5%), Tier 3 (PKR 7.5M @ 7%), eligibility & forms.',
    metaDescriptionUr: 'وزیراعظم یوتھ بزنس و زراعت قرضہ سکیم 2026۔ آن لائن فارم pmyp.gov.pk، تمام ٹائرز کی فیس اور اہلیت کے قواعد۔',
    directAnswerEn: 'PM Youth Business & Agriculture Loan Scheme (PMYB&ALS) offers loans across 3 tiers: Tier 1 (up to 500,000 PKR at 0% markup via microfinance), Tier 2 (500,000 to 1.5 Million PKR at 5% markup), and Tier 3 (1.5 Million to 7.5 Million PKR at 7% markup). Apply at pmyp.gov.pk.',
    directAnswerUr: 'وزیراعظم یوتھ لون سکیم میں 3 ٹائرز شامل ہیں: ٹائر 1 میں 5 لاکھ تک بلا سود قرضہ، ٹائر 2 میں 15 لاکھ تک 5 فیصد مارک اپ پر اور ٹائر 3 میں 75 لاکھ تک 7 فیصد مارک اپ پر ملتا ہے۔ آن لائن اپلائی pmyp.gov.pk پر کریں۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'Prime Minister Youth Program Portal', url: 'https://pmyp.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Youth Development Desk' },
    faqs: [
          {
                'questionEn': 'What is the maximum loan limit and markup rate?',
                'questionUr': 'سرکاری قرضے کی حد اور مارک اپ ریٹ کتنا ہے؟',
                'answerEn': 'Under Govt interest-free housing schemes (Apni Chhat), eligible applicants receive up to PKR 1.5 Million at 0% markup.',
                'answerUr': 'اپنی چھت اپنا گھر سکیم کے تحت 15 لاکھ روپے تک بلا سود قرضہ ملتا ہے۔'
          },
          {
                'questionEn': 'Who is eligible to apply for Govt Youth & Housing Loans?',
                'questionUr': 'سرکاری قرضہ سکیموں میں درخواست دینے کے لیے کون اہل ہے؟',
                'answerEn': 'Pakistani citizens aged 21 to 45 years with valid CNIC, clean credit report (eCIB), and income/land proof are eligible.',
                'answerUr': '21 تا 45 سال کے شناختی کارڈ ہولڈر تمام پاکستانی شہری درخواست دے سکتے ہیں۔'
          },
          {
                'questionEn': 'Is there any application fee or private agent charge?',
                'questionUr': 'کیا آن لائن درخواست کی کوئی فارم فیس ہے؟',
                'answerEn': 'NO! Official government loan portals (pmyp.gov.pk / acag.punjab.gov.pk) do NOT charge any processing fee. Registration is 100% FREE.',
                'answerUr': 'جی نہیں! سرکاری لون پورٹلز پر آن لائن فارم جمع کروانا بالکل مفت ہے۔'
          }
    ],
    contentEn: `Detailed guidelines for applying online for agricultural equipment, solar tube wells, and IT startup loans under PMYB&ALS.`,
    contentUr: `آئی ٹی سٹارٹ اپس، زرعی ٹیوب ویل اور سولر پینل لونز کے لیے آن لائن اپلائی کا طریقہ۔`,
    relatedSlugs: ['/loans/apni-chhat-apna-ghar', '/loans/kamyab-jawan-program'],
  },

  // SOCIAL WELFARE & RELIEF ARTICLES (11 NEW ROUTES)
  'bisp-eligibility-check-by-cnic': {
    slug: 'bisp-eligibility-check-by-cnic',
    fullPath: '/welfare/bisp-eligibility-check-by-cnic',
    categoryId: 'welfare',
    titleEn: 'BISP Eligibility Check by CNIC 2026: Benazir 8171 Online Portal',
    titleUr: 'بی ایس پی 8171 شناختی کارڈ آن لائن اہلیت چیک 2026 (بے نظیر کفالت)',
    metaDescriptionEn: 'Check Benazir Income Support Programme (BISP) 8171 eligibility by CNIC online at 8171.bisp.gov.pk or via SMS 8171. Benazir Kafaalat 10,500 PKR status check.',
    metaDescriptionUr: 'بے نظیر انکم سپورٹ پروگرام 8171 پورٹل پر اپنا 13 ہندسوں کا شناختی کارڈ درج کر کے اہلیت اور 10,500 روپے قسط کا آن لائن سٹیٹس دیکھیں۔',
    directAnswerEn: 'To check BISP eligibility by CNIC online, enter your 13-digit CNIC number on the official BISP portal at 8171.bisp.gov.pk or send your CNIC via SMS to 8171 (costs PKR 2+tax). Verification confirms whether you are eligible for the 10,500 PKR Benazir Kafaalat quarterly installment. Registration is 100% FREE.',
    directAnswerUr: 'بی ایس پی 8171 آن لائن اہلیت چیک کرنے کے لیے 8171.bisp.gov.pk پر اپنا شناختی کارڈ درج کریں یا 8171 پر ایس ایم ایس بھیجیں۔ تصدیق پر 10,500 روپے بے نظیر کفالت قسط کا سٹیٹس معلوم ہوتا ہے۔ رجسٹریشن بالکل مفت ہے۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'BISP 8171 Official Government Web Portal', url: 'https://8171.bisp.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Social Welfare & Relief Desk' },
    faqs: [
      {
        questionEn: 'Is there any fee to check BISP 8171 eligibility or register?',
        questionUr: 'کیا 8171 پورٹل پر اہلیت چیک کرنے یا بی ایس پی میں اندراج کی کوئی فیس ہے؟',
        answerEn: 'NO! BISP registration and eligibility checks are 100% FREE at 8171.bisp.gov.pk. Never pay any fee to private individuals or agents claiming to register you in the system.',
        answerUr: 'جی نہیں! 8171 کی تمام سروسز بالکل مفت ہیں۔ کسی بھی ایجنٹ کو پیسے نہ دیں جو آپ کو رجسٹر کروانے کا کہے۔',
      },
      {
        questionEn: 'What does it mean if 8171 shows "Not Eligible"?',
        questionUr: 'اگر 8171 پر "اہل نہیں" آئے تو اس کا کیا مطلب ہے؟',
        answerEn: '"Not Eligible" means your household PMT (Proxy Means Test) score is above the poverty threshold, OR your NSER survey data has not been recorded yet. You can visit a BISP Tehsil Registration Center to request a re-survey or dynamic NSER update.',
        answerUr: '"اہل نہیں" کا مطلب یا تو آپ کے گھرانے کا PMT سکور حد سے زیادہ ہے، یا آپ کا NSER سروے ابھی تک مکمل نہیں ہوا۔ قریبی تحصیل رجسٹریشن سینٹر جا کر دوبارہ سروے درخواست دیں۔',
      },
    ],
    feeStructure: [
      { serviceEn: 'Benazir Kafaalat Quarterly Cash Grant', serviceUr: 'بے نظیر کفالت سہ ماہی قسط', normal: 'PKR 10,500', urgent: 'Every 3 Months', executive: '100% FREE Direct Grant' },
      { serviceEn: 'Taleemi Wazaif Primary School (Girls)', serviceUr: 'تعلیمی وظائف پرائمری سکول (بچیاں)', normal: 'PKR 2,500 / Quarter', urgent: 'Bi-Monthly', executive: 'Bonus 3,000 Graduation' },
      { serviceEn: 'Taleemi Wazaif Primary School (Boys)', serviceUr: 'تعلیمی وظائف پرائمری سکول (بچے)', normal: 'PKR 2,000 / Quarter', urgent: 'Bi-Monthly', executive: 'Direct Bank Transfer' },
      { serviceEn: '8171 Web Portal & NSER Survey Fee', serviceUr: '8171 پورٹل اور این ایس ای آر سروے فیس', normal: 'PKR 0 (100% FREE)', urgent: 'No Agent Fee', executive: 'Government Subsidized' },
    ],
    steps: [
      { stepNumber: 1, titleEn: 'Open BISP 8171 Web Portal or Send SMS', titleUr: '8171 ویب پورٹل یا SMS کھولیں', detailEn: 'Visit 8171.bisp.gov.pk or type your 13-digit CNIC without dashes and send SMS to 8171.', detailUr: '8171.bisp.gov.pk کھولیں یا 8171 پر شناختی کارڈ نمبر SMS کریں۔' },
      { stepNumber: 2, titleEn: 'Enter CNIC & Verification Code', titleUr: 'شناختی کارڈ نمبر درج کریں', detailEn: 'Input your 13-digit Computerized National Identity Card number and the 4-digit security captcha code.', detailUr: 'اپنا 13 ہندسوں کا شناختی کارڈ اور سکرین پر موجود تصدیقی کوڈ درج کریں۔' },
      { stepNumber: 3, titleEn: 'Check Household PMT Poverty Score Status', titleUr: 'گھرانے کی اہلیت کا سٹیٹس دیکھیں', detailEn: 'The system displays whether your household PMT score is below 32 and confirms your quarterly 10,500 PKR grant eligibility.', detailUr: 'سسٹم ظاہر کرے گا کہ آیا آپ 10,500 روپے بے نظیر کفالت قسط کے اہل ہیں۔' },
      { stepNumber: 4, titleEn: 'Visit Designated Disbursement Campsite', titleUr: 'ادائیگی کیمپ یا بینک ایجنٹ سے رقم لیں', detailEn: 'Eligible women visit Bank Alfalah POS campsite (Sindh/KPK/Balochistan) or HBL Konnect agent (Punjab) for biometric thumb verification.', detailUr: 'اہل خواتین قریبی کیمپ یا بینک الفلاح / HBL ایجنٹ سے بایومیٹرک انگوٹھے کی تصدیق کر کے رقم حاصل کریں۔' },
    ],
    contentEn: `BISP 8171 Eligibility Check by CNIC is the official online verification service provided by the Benazir Income Support Programme that allows Pakistani citizens to verify their household Proxy Means Test (PMT) score and 10,500 PKR grant status using their 13-digit CNIC.

## How 8171 NSER Portal Determines Household Eligibility
The Benazir Income Support Programme uses the National Socio-Economic Registry (NSER) database to calculate Proxy Means Test (PMT) poverty scores for households across Punjab, Sindh, Khyber Pakhtunkhwa, Balochistan, Gilgit-Baltistan, and Azad Jammu & Kashmir.

• **Kafaalat Grant Threshold**: Households with an NSER PMT score below 32 are classified as eligible for the quarterly cash assistance of PKR 10,500.
• **Taleemi Wazaif Stipends**: Enrolled children of Kafaalat beneficiaries receive additional school stipends ranging from PKR 2,000 to PKR 4,500 per quarter.
• **Registration Fee**: BISP registration, NSER survey updates, and 8171 portal queries are 100% FREE.

## SMS 8171 vs Online Portal Lookup
Citizens can verify eligibility via two authorized government channels:

1. **Online Web Portal**: Visit **8171.bisp.gov.pk**, enter your 13-digit CNIC, and view instant status with zero cost.
2. **SMS Gateway**: Send your 13-digit CNIC to **8171** via mobile text (costs PKR 2 + tax per SMS reply).

## Biometric Fingerprint Payment Warning
Cash disbursements are released exclusively to the female head of the eligible household after biometric thumbprint scanning at designated Bank Alfalah POS campsites or HBL Konnect franchises.

Never pay any fee to private agents or individuals claiming to guarantee BISP enrollment. Report extortion or fraudulent SMS messages to the BISP toll-free helpline at 0800-26477.`,
    contentUr: `بی ایس پی 8171 شناختی کارڈ آن لائن اہلیت چیک بے نظیر انکم سپورٹ پروگرام کا سرکاری پورٹل ہے جو شہریوں کو اپنے گھرانے کا پی ایم ٹی (PMT) سکور اور 10,500 روپے کی قسط کی اہلیت معلوم کرنے کی سہولت دیتا ہے۔

## 8171 پورٹل کے ذریعے اہلیت چیک کرنے کا طریقہ
بی ایس پی قومی سوشیو اکنامک رجسٹری (NSER) ڈیٹا بیس کی بنیاد پر پی ایم ٹی سکور کا تعین کرتا ہے:

• **کفالت گرانٹ کی حد**: وہ خاندان جن کا پی ایم ٹی سکور 32 سے کم ہو وہ 10,500 روپے سہ ماہی قسط کے اہل ہوتے ہیں۔
• **تعلیمی وظائف**: اسکول جانے والے بچوں کو 2,000 روپے سے 4,500 روپے تک اضافے وظائف ملتے ہیں۔
• **فیس اطلاع**: بی ایس پی کا کوئی ایجنٹ یا فارم فیس نہیں ہے۔ تمام سروسز بالکل مفت ہیں۔

اہلیت چیک کرنے کے لیے 8171.bisp.gov.pk پر شناختی کارڈ نمبر درج کریں یا 8171 پر SMS بھیجیں۔

رقم صرف رجسٹرڈ خاتون کو بائیو میٹرک انگوٹھے کی تصدیق پر بینک الفلاح یا HBL کنیکٹ کیمپ سے ملتی ہے۔`,
    relatedSlugs: ['/welfare/8171-portal-guide', '/welfare/kafaalat-amount-schedule', '/welfare/pser-survey-registration'],
  },

  '8171-portal-guide': {
    slug: '8171-portal-guide',
    fullPath: '/welfare/8171-portal-guide',
    categoryId: 'welfare',
    titleEn: '8171 Portal Guide 2026: Official Web Portal & SMS Code 8171',
    titleUr: '8171 آفیشل ویب پورٹل اور ایس ایم ایس کوڈ گائیڈ 2026',
    metaDescriptionEn: 'Complete user guide for official 8171.bisp.gov.pk portal and SMS 8171 code. How to track payments, solve biometric errors, and lodge complaints.',
    metaDescriptionUr: 'آفیشل 8171 ویب پورٹل استعمال کرنے کا طریقہ۔ فنگر پرنٹ خرابی، ادائیگی کی موصولی اور ایس ایم ایس 8171 کا مکمل گائیڈ۔',
    directAnswerEn: 'The 8171 portal (8171.bisp.gov.pk) is the sole authorized digital platform operated by BISP to check household PMT (Proxy Means Test) scores, cash disbursement schedules, and registration status. Access is free and requires only a valid CNIC.',
    directAnswerUr: '8171 پورٹل (8171.bisp.gov.pk) بی ایس پی کا واحد آفیشل پورٹل ہے جہاں آپ اپنے گھرانے کا سکور اور قسط دیکھ سکتے ہیں۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: '8171 Web Portal BISP', url: 'https://8171.bisp.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Social Safety Desk' },
    faqs: [
          {
                'questionEn': 'How to check BISP 8171 payment status by CNIC?',
                'questionUr': 'شناختی کارڈ نمبر سے 8171 قسط کا سٹیٹس کیسے معلوم کریں؟',
                'answerEn': 'Visit 8171.bisp.gov.pk, enter 13-digit CNIC and security captcha, or send SMS with CNIC number to 8171 for instant reply.',
                'answerUr': '8171.bisp.gov.pk پر اپنا شناختی کارڈ درج کریں یا 8171 پر SMS بھیجیں۔'
          },
          {
                'questionEn': 'What is the quarterly amount for Benazir Kafaalat in 2026?',
                'questionUr': '2026 میں بے نظیر کفالت سہ ماہی قسط کی رقم کتنی ہے؟',
                'answerEn': 'Eligible women beneficiaries receive PKR 10,500 per quarter (every 3 months) disbursed via biometric verification at bank campsites.',
                'answerUr': 'اہل خواتین کو 10,500 روپے فی سہ ماہی (ہر 3 ماہ بعد) بائیو میٹرک تصدیق پر ملتے ہیں۔'
          },
          {
                'questionEn': 'Is BISP 8171 registration free or is there an agent fee?',
                'questionUr': 'کیا 8171 کی رجسٹریشن بالکل مفت ہے؟',
                'answerEn': 'BISP NSER dynamic survey registration is 100% FREE at BISP Tehsil Centers. Never pay money to private agents. Report fraud to 0800-26477.',
                'answerUr': 'بی ایس پی کی تمام سروسز مفت ہیں۔ ایجنٹوں کو رقم دینا سخت منع ہے۔'
          }
    ],
    contentEn: `Complete guide on resolving 8171 biometric thumb mismatch errors at HBL Konnect and Bank Alfalah POS agent counters.`,
    contentUr: `بینک ایجنٹ کاؤنٹر پر فنگر پرنٹ کی خرابی اور 8171 شکایت درج کروانے کا طریقہ۔`,
    relatedSlugs: ['/welfare/bisp-eligibility-check-by-cnic', '/welfare/bisp-payment-check'],
  },

  'bisp-how-to-register': {
    slug: 'bisp-how-to-register',
    fullPath: '/welfare/bisp-how-to-register',
    categoryId: 'welfare',
    titleEn: 'How to Register for BISP 2026: Dynamic NSER Survey at Tehsil Centers',
    titleUr: 'بی ایس پی (BISP) میں نیا اندراج کیسے کروائیں؟ ڈائنامک این ایس ای آر سروے 2026',
    metaDescriptionEn: 'Step-by-step procedure to register for BISP Benazir Kafaalat at Tehsil Registration Centers. NSER survey requirements, documents, and PMT score rules.',
    metaDescriptionUr: 'نادرا تحصیل مرکز سے این ایس ای آر (NSER) سروے کروانے کا طریقہ۔ ضروری کاغذات اور بی ایس پی رجسٹریشن فارم۔',
    directAnswerEn: 'To register for BISP Benazir Kafaalat for the first time, visit your local BISP Tehsil Registration Center with your original NADRA CNIC and B-Forms for all children. Complete the free NSER Dynamic Survey. Online registration is NOT possible; physical survey attendance is mandatory.',
    directAnswerUr: 'بی ایس پی میں نئے اندراج کے لیے اپنے قریبی تحصیل رجسٹریشن سینٹر اپنے اصل شناختی کارڈ اور تمام بچوں کے بی فارم کے ساتھ تشریف لے جائیں اور مفت این ایس ای آر سروے مکمل کروائیں۔ آن لائن فارم نہیں ہوتا۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'BISP NSER Registration Directory', url: 'https://bisp.gov.pk/' },
    author: { name: 'Editorial Team', role: 'NSER Survey Desk' },
    faqs: [
          {
                'questionEn': 'How to check BISP 8171 payment status by CNIC?',
                'questionUr': 'شناختی کارڈ نمبر سے 8171 قسط کا سٹیٹس کیسے معلوم کریں؟',
                'answerEn': 'Visit 8171.bisp.gov.pk, enter 13-digit CNIC and security captcha, or send SMS with CNIC number to 8171 for instant reply.',
                'answerUr': '8171.bisp.gov.pk پر اپنا شناختی کارڈ درج کریں یا 8171 پر SMS بھیجیں۔'
          },
          {
                'questionEn': 'What is the quarterly amount for Benazir Kafaalat in 2026?',
                'questionUr': '2026 میں بے نظیر کفالت سہ ماہی قسط کی رقم کتنی ہے؟',
                'answerEn': 'Eligible women beneficiaries receive PKR 10,500 per quarter (every 3 months) disbursed via biometric verification at bank campsites.',
                'answerUr': 'اہل خواتین کو 10,500 روپے فی سہ ماہی (ہر 3 ماہ بعد) بائیو میٹرک تصدیق پر ملتے ہیں۔'
          },
          {
                'questionEn': 'Is BISP 8171 registration free or is there an agent fee?',
                'questionUr': 'کیا 8171 کی رجسٹریشن بالکل مفت ہے؟',
                'answerEn': 'BISP NSER dynamic survey registration is 100% FREE at BISP Tehsil Centers. Never pay money to private agents. Report fraud to 0800-26477.',
                'answerUr': 'بی ایس پی کی تمام سروسز مفت ہیں۔ ایجنٹوں کو رقم دینا سخت منع ہے۔'
          }
    ],
    contentEn: `Understanding NSER survey question topics including household asset count, monthly utility bill spend, and widow/orphan status verification.`,
    contentUr: `این ایس ای آر سروے کی سوالات کی فہرست اور نادرا فیملی ڈیٹا کی تصدیق۔`,
    relatedSlugs: ['/welfare/bisp-eligibility-check-by-cnic', '/welfare/pser-survey-registration'],
  },

  'bisp-payment-check': {
    slug: 'bisp-payment-check',
    fullPath: '/welfare/bisp-payment-check',
    categoryId: 'welfare',
    titleEn: 'BISP Payment Check 2026: Solution for Unpaid / Stopped Kafaalat Money',
    titleUr: 'بی ایس پی قسط نہ ملنے کی صورت میں کیا کریں؟ آن لائن ہیلپ لائن و شکایت 2026',
    metaDescriptionEn: 'What to do if your BISP 10,500 PKR payment is not received or blocked. Check POS campsite locations, biometric verification fix, and 0800-26477 helpline.',
    metaDescriptionUr: 'اگر بی ایس پی کفالت قسط 10,500 روپے نہ ملی ہو تو شکایت کیسے درج کروائیں۔ ایجنٹ کی کٹوتی اور بایومیٹرک مسئلے کا حل۔',
    directAnswerEn: 'If your BISP Kafaalat payment is delayed, stopped, or subjected to illegal deduction by retail agents, file an immediate complaint at your local BISP Tehsil Office or call the official toll-free hotline 0800-26477. Beneficiaries receive the FULL 10,500 PKR without any fee deductions.',
    directAnswerUr: 'اگر بی ایس پی کی 10,500 روپے قسط روکی گئی ہو یا کسی ایجنٹ نے کٹوتی کی ہو تو ٹول فری نمبر 0800-26477 پر فوری مفت شکایت درج کروائیں۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'BISP Grievance Redressal Cell', url: 'https://bisp.gov.pk/ContactUs' },
    author: { name: 'Editorial Team', role: 'Consumer & Welfare Protection Desk' },
    faqs: [
          {
                'questionEn': 'How to check BISP 8171 payment status by CNIC?',
                'questionUr': 'شناختی کارڈ نمبر سے 8171 قسط کا سٹیٹس کیسے معلوم کریں؟',
                'answerEn': 'Visit 8171.bisp.gov.pk, enter 13-digit CNIC and security captcha, or send SMS with CNIC number to 8171 for instant reply.',
                'answerUr': '8171.bisp.gov.pk پر اپنا شناختی کارڈ درج کریں یا 8171 پر SMS بھیجیں۔'
          },
          {
                'questionEn': 'What is the quarterly amount for Benazir Kafaalat in 2026?',
                'questionUr': '2026 میں بے نظیر کفالت سہ ماہی قسط کی رقم کتنی ہے؟',
                'answerEn': 'Eligible women beneficiaries receive PKR 10,500 per quarter (every 3 months) disbursed via biometric verification at bank campsites.',
                'answerUr': 'اہل خواتین کو 10,500 روپے فی سہ ماہی (ہر 3 ماہ بعد) بائیو میٹرک تصدیق پر ملتے ہیں۔'
          },
          {
                'questionEn': 'Is BISP 8171 registration free or is there an agent fee?',
                'questionUr': 'کیا 8171 کی رجسٹریشن بالکل مفت ہے؟',
                'answerEn': 'BISP NSER dynamic survey registration is 100% FREE at BISP Tehsil Centers. Never pay money to private agents. Report fraud to 0800-26477.',
                'answerUr': 'بی ایس پی کی تمام سروسز مفت ہیں۔ ایجنٹوں کو رقم دینا سخت منع ہے۔'
          }
    ],
    contentEn: `Official rules regarding illegal fee deductions by POS campsite vendors and full refund procedures.`,
    contentUr: `کیمپ سائٹس پر غیر قانونی کٹوتی کرنے والے ایجنٹوں کے خلاف کارروائی اور پورٹل ہیلپ لائن۔`,
    relatedSlugs: ['/welfare/8171-portal-guide', '/welfare/kafaalat-amount-schedule'],
  },

  'taleemi-wazaif': {
    slug: 'taleemi-wazaif',
    fullPath: '/welfare/taleemi-wazaif',
    categoryId: 'welfare',
    titleEn: 'Benazir Taleemi Wazaif 2026: Student Stipends & Quarterly Rates',
    titleUr: 'بے نظیر تعلیمی وظائف 2026: پرائمری، سیکنڈری و ہائر سیکنڈری طلباء کے وظائف',
    metaDescriptionEn: 'Benazir Taleemi Wazaif quarterly stipend rates for primary, secondary, and higher secondary students (1,500 PKR to 4,500 PKR). B-Form registration process.',
    metaDescriptionUr: 'بینظیر تعلیمی وظائف کی نئی رقم (1,500 روپے سے 4,500 روپے سہ ماہی)۔ سکول داخلہ سلپ جمع کروانے کا طریقہ۔',
    directAnswerEn: 'Benazir Taleemi Wazaif provides quarterly educational stipends to children of active BISP Kafaalat beneficiaries. Stipends range from PKR 1,500 (Primary Boys) up to PKR 4,500 (Higher Secondary Girls) per quarter, provided the child maintains 70% school attendance.',
    directAnswerUr: 'بے نظیر تعلیمی وظائف کے تحت بی ایس پی مستحقین کے بچوں کو 1,500 روپے سے 4,500 روپے فی سہ ماہی وظیفہ دیا جاتا ہے بشراطیہ سکول میں حاضری 70 فیصد ہو۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'BISP Education Stipend Wing', url: 'https://bisp.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Education Welfare Desk' },
    faqs: [
          {
                'questionEn': 'How to check BISP 8171 payment status by CNIC?',
                'questionUr': 'شناختی کارڈ نمبر سے 8171 قسط کا سٹیٹس کیسے معلوم کریں؟',
                'answerEn': 'Visit 8171.bisp.gov.pk, enter 13-digit CNIC and security captcha, or send SMS with CNIC number to 8171 for instant reply.',
                'answerUr': '8171.bisp.gov.pk پر اپنا شناختی کارڈ درج کریں یا 8171 پر SMS بھیجیں۔'
          },
          {
                'questionEn': 'What is the quarterly amount for Benazir Kafaalat in 2026?',
                'questionUr': '2026 میں بے نظیر کفالت سہ ماہی قسط کی رقم کتنی ہے؟',
                'answerEn': 'Eligible women beneficiaries receive PKR 10,500 per quarter (every 3 months) disbursed via biometric verification at bank campsites.',
                'answerUr': 'اہل خواتین کو 10,500 روپے فی سہ ماہی (ہر 3 ماہ بعد) بائیو میٹرک تصدیق پر ملتے ہیں۔'
          },
          {
                'questionEn': 'Is BISP 8171 registration free or is there an agent fee?',
                'questionUr': 'کیا 8171 کی رجسٹریشن بالکل مفت ہے؟',
                'answerEn': 'BISP NSER dynamic survey registration is 100% FREE at BISP Tehsil Centers. Never pay money to private agents. Report fraud to 0800-26477.',
                'answerUr': 'بی ایس پی کی تمام سروسز مفت ہیں۔ ایجنٹوں کو رقم دینا سخت منع ہے۔'
          }
    ],
    contentEn: `Step-by-step registration for Taleemi Wazaif by obtaining school enrollment verification slips from class teachers.`,
    contentUr: `سکول ٹیچر سے وظائف فارم کی تصدیق اور نادرا بی فارم سلپ جمع کروانے کا طریقہ۔`,
    relatedSlugs: ['/welfare/bisp-eligibility-check-by-cnic', '/welfare/kafaalat-amount-schedule'],
  },

  'kafaalat-amount-schedule': {
    slug: 'kafaalat-amount-schedule',
    fullPath: '/welfare/kafaalat-amount-schedule',
    categoryId: 'welfare',
    titleEn: 'Benazir Kafaalat 10,500 PKR Installment Schedule 2026 (Quarterly Dates)',
    titleUr: 'بے نظیر کفالت 10,500 روپے قسط شیڈول 2026 (سہ ماہی تاریخیں)',
    metaDescriptionEn: 'Latest payment dates and distribution schedule for Benazir Kafaalat 10,500 PKR quarterly cash assistance. Bank Alfalah and HBL Konnect campsites guide.',
    metaDescriptionUr: 'بے نظیر کفالت 10,500 روپے قسط کی تاریخیں، بینک الفلاح اور ایچ بی ایل کنیکٹ کیمپ سائٹس کے مقامات۔',
    directAnswerEn: 'The Benazir Kafaalat quarterly cash grant amount for 2026 is PKR 10,500 per eligible household. Payments are released in phased tranches via designated bank campsites (Bank Alfalah in Sindh/KPK/Balochistan, HBL Konnect in Punjab).',
    directAnswerUr: 'سال 2026 میں بے نظیر کفالت قسط کی رقم 10,500 روپے فی سہ ماہی ہے۔ ادائیگی پنجاب میں ایچ بی ایل اور دیگر صوبوں میں بینک الفلاح کیمپ سائٹس سے ملتی ہے۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'BISP Official Payment Portal', url: 'https://8171.bisp.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Kafaalat Payment Desk' },
    faqs: [
          {
                'questionEn': 'How to check BISP 8171 payment status by CNIC?',
                'questionUr': 'شناختی کارڈ نمبر سے 8171 قسط کا سٹیٹس کیسے معلوم کریں؟',
                'answerEn': 'Visit 8171.bisp.gov.pk, enter 13-digit CNIC and security captcha, or send SMS with CNIC number to 8171 for instant reply.',
                'answerUr': '8171.bisp.gov.pk پر اپنا شناختی کارڈ درج کریں یا 8171 پر SMS بھیجیں۔'
          },
          {
                'questionEn': 'What is the quarterly amount for Benazir Kafaalat in 2026?',
                'questionUr': '2026 میں بے نظیر کفالت سہ ماہی قسط کی رقم کتنی ہے؟',
                'answerEn': 'Eligible women beneficiaries receive PKR 10,500 per quarter (every 3 months) disbursed via biometric verification at bank campsites.',
                'answerUr': 'اہل خواتین کو 10,500 روپے فی سہ ماہی (ہر 3 ماہ بعد) بائیو میٹرک تصدیق پر ملتے ہیں۔'
          },
          {
                'questionEn': 'Is BISP 8171 registration free or is there an agent fee?',
                'questionUr': 'کیا 8171 کی رجسٹریشن بالکل مفت ہے؟',
                'answerEn': 'BISP NSER dynamic survey registration is 100% FREE at BISP Tehsil Centers. Never pay money to private agents. Report fraud to 0800-26477.',
                'answerUr': 'بی ایس پی کی تمام سروسز مفت ہیں۔ ایجنٹوں کو رقم دینا سخت منع ہے۔'
          }
    ],
    contentEn: `District-wise disbursement matrix and helpline numbers for tracking active payment campsites.`,
    contentUr: `اضلاع کے لحاظ سے ادائیگی کی تاریخیں اور کیمپ سائٹس کا پتہ۔`,
    relatedSlugs: ['/welfare/bisp-eligibility-check-by-cnic', '/welfare/8171-portal-guide'],
  },

  'pser-survey-registration': {
    slug: 'pser-survey-registration',
    fullPath: '/welfare/pser-survey-registration',
    categoryId: 'welfare',
    titleEn: 'PSER Punjab Survey Registration 2026: pser.punjab.gov.pk Online Portal',
    titleUr: 'پی ایس ای آر (PSER) پنجاب سروے آن لائن رجسٹریشن 2026 (pser.punjab.gov.pk)',
    metaDescriptionEn: 'How to register on Punjab Socio-Economic Registry (PSER) portal (pser.punjab.gov.pk). Registration for CM Himmat Card, Kisan Card, and Solar Panel scheme.',
    metaDescriptionUr: 'پنجاب سوشیو اکنامک رجسٹری (PSER) آن لائن سروے رجسٹریشن، ہمت کارڈ، کسان کارڈ اور سولر پینل سکیم میں شمولیت کا طریقہ۔',
    directAnswerEn: 'PSER (Punjab Socio-Economic Registry) is the central household survey portal managed by PITB for Punjab welfare schemes (including Kisan Card, Himmat Card, and Free Solar Scheme). Register online at pser.punjab.gov.pk by creating an account with your CNIC.',
    directAnswerUr: 'پی ایس ای آر (PSER) حکومت پنجاب کا مرکزی آن لائن سروے پورٹل ہے جہاں pser.punjab.gov.pk پر جا کر تمام صوبائی امدادی سکیموں میں رجسٹریشن کی جا سکتی ہے۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'PITB PSER Punjab Portal', url: 'https://pser.punjab.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Punjab Welfare Desk' },
    faqs: [
          {
                'questionEn': 'How to check BISP 8171 payment status by CNIC?',
                'questionUr': 'شناختی کارڈ نمبر سے 8171 قسط کا سٹیٹس کیسے معلوم کریں؟',
                'answerEn': 'Visit 8171.bisp.gov.pk, enter 13-digit CNIC and security captcha, or send SMS with CNIC number to 8171 for instant reply.',
                'answerUr': '8171.bisp.gov.pk پر اپنا شناختی کارڈ درج کریں یا 8171 پر SMS بھیجیں۔'
          },
          {
                'questionEn': 'What is the quarterly amount for Benazir Kafaalat in 2026?',
                'questionUr': '2026 میں بے نظیر کفالت سہ ماہی قسط کی رقم کتنی ہے؟',
                'answerEn': 'Eligible women beneficiaries receive PKR 10,500 per quarter (every 3 months) disbursed via biometric verification at bank campsites.',
                'answerUr': 'اہل خواتین کو 10,500 روپے فی سہ ماہی (ہر 3 ماہ بعد) بائیو میٹرک تصدیق پر ملتے ہیں۔'
          },
          {
                'questionEn': 'Is BISP 8171 registration free or is there an agent fee?',
                'questionUr': 'کیا 8171 کی رجسٹریشن بالکل مفت ہے؟',
                'answerEn': 'BISP NSER dynamic survey registration is 100% FREE at BISP Tehsil Centers. Never pay money to private agents. Report fraud to 0800-26477.',
                'answerUr': 'بی ایس پی کی تمام سروسز مفت ہیں۔ ایجنٹوں کو رقم دینا سخت منع ہے۔'
          }
    ],
    contentEn: `Complete guide on filling out PSER online survey forms including agricultural land size, electricity bill reference, and family CNIC details.`,
    contentUr: `پی ایس ای آر آن لائن فارم پر کرنے کا مکمل طریقہ اور نادرا تصدیق۔`,
    relatedSlugs: ['/welfare/bisp-eligibility-check-by-cnic', '/welfare/laptop-scheme-registration'],
  },

  'ehsaas-program-guide': {
    slug: 'ehsaas-program-guide',
    fullPath: '/welfare/ehsaas-program-guide',
    categoryId: 'welfare',
    titleEn: 'Ehsaas Program 8171 Online Check 2026: Rashan Riayat & Amdan Scheme',
    titleUr: 'احساس پروگرام 8171 آن لائن چیک 2026: راشن رعایت و امداد سکیم',
    metaDescriptionEn: 'Complete guide to Ehsaas Program 8171 eligibility, Ehsaas Rashan Riayat, Emergency Cash, and Ehsaas Amdan interest-free asset transfer.',
    metaDescriptionUr: 'احساس پروگرام 8171 آن لائن اہلیت چیک، احساس راشن رعایت اور بلا سود اثاثہ جات سکیم کی مکمل معلومات۔',
    directAnswerEn: 'The Ehsaas Program encompasses multiple targeted welfare initiatives integrated with the 8171 portal. Eligible low-income households receive grocery discounts via Ehsaas Rashan and small business equipment under Ehsaas Amdan.',
    directAnswerUr: 'احساس پروگرام 8171 پورٹل کے ساتھ منسلک ایک فلاحی پروگرام ہے جس کے تحت سستا راشن اور بلا سود امداد دی جاتی ہے۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'Ehsaas Poverty Alleviation Portal', url: 'https://pass.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Social Protection Desk' },
    faqs: [
          {
                'questionEn': 'How to check BISP 8171 payment status by CNIC?',
                'questionUr': 'شناختی کارڈ نمبر سے 8171 قسط کا سٹیٹس کیسے معلوم کریں؟',
                'answerEn': 'Visit 8171.bisp.gov.pk, enter 13-digit CNIC and security captcha, or send SMS with CNIC number to 8171 for instant reply.',
                'answerUr': '8171.bisp.gov.pk پر اپنا شناختی کارڈ درج کریں یا 8171 پر SMS بھیجیں۔'
          },
          {
                'questionEn': 'What is the quarterly amount for Benazir Kafaalat in 2026?',
                'questionUr': '2026 میں بے نظیر کفالت سہ ماہی قسط کی رقم کتنی ہے؟',
                'answerEn': 'Eligible women beneficiaries receive PKR 10,500 per quarter (every 3 months) disbursed via biometric verification at bank campsites.',
                'answerUr': 'اہل خواتین کو 10,500 روپے فی سہ ماہی (ہر 3 ماہ بعد) بائیو میٹرک تصدیق پر ملتے ہیں۔'
          },
          {
                'questionEn': 'Is BISP 8171 registration free or is there an agent fee?',
                'questionUr': 'کیا 8171 کی رجسٹریشن بالکل مفت ہے؟',
                'answerEn': 'BISP NSER dynamic survey registration is 100% FREE at BISP Tehsil Centers. Never pay money to private agents. Report fraud to 0800-26477.',
                'answerUr': 'بی ایس پی کی تمام سروسز مفت ہیں۔ ایجنٹوں کو رقم دینا سخت منع ہے۔'
          }
    ],
    contentEn: `Overview of federal Poverty Alleviation & Social Safety Division programs operating across Pakistan.`,
    contentUr: `وفاقی ڈویژن برائے غربت کے تمام فلاحی منصوبوں کا مکمل تجزیہ۔`,
    relatedSlugs: ['/welfare/bisp-eligibility-check-by-cnic', '/welfare/8171-portal-guide'],
  },

  'laptop-scheme-registration': {
    slug: 'laptop-scheme-registration',
    fullPath: '/welfare/laptop-scheme-registration',
    categoryId: 'welfare',
    titleEn: 'PM & CM Laptop Scheme Registration 2026: Student Online Portal',
    titleUr: 'وزیر اعظم و وزیر اعلیٰ لیپ ٹاپ سکیم آن لائن رجسٹریشن 2026',
    metaDescriptionEn: 'Apply for PM Youth Laptop Scheme and CM Punjab Free Laptop Scheme 2026. Eligibility criteria for university & college students, merit lists, and HEC portal.',
    metaDescriptionUr: 'طلباء کے لیے پرائم منسٹر اور چیف منسٹر لیپ ٹاپ سکیم 2026۔ آن لائن رجسٹریشن، ایچ ای سی میرٹ اور یونیورسٹی لسٹ۔',
    directAnswerEn: 'The PM & CM Free Laptop Schemes distribute high-spec laptops to talented students enrolled in public sector universities and colleges. Selection is strictly merit-based based on academic GPA/percentage. Apply online at laptop.pmyp.gov.pk.',
    directAnswerUr: 'لیپ ٹاپ سکیم کے تحت سرکاری جامعات کے باصلاحیت طلباء کو مفت لیپ ٹاپ دیے جاتے ہیں۔ آن لائن اپلائی laptop.pmyp.gov.pk پر کریں۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'HEC PM Youth Laptop Portal', url: 'https://laptop.pmyp.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Student Welfare Desk' },
    faqs: [
          {
                'questionEn': 'How to check BISP 8171 payment status by CNIC?',
                'questionUr': 'شناختی کارڈ نمبر سے 8171 قسط کا سٹیٹس کیسے معلوم کریں؟',
                'answerEn': 'Visit 8171.bisp.gov.pk, enter 13-digit CNIC and security captcha, or send SMS with CNIC number to 8171 for instant reply.',
                'answerUr': '8171.bisp.gov.pk پر اپنا شناختی کارڈ درج کریں یا 8171 پر SMS بھیجیں۔'
          },
          {
                'questionEn': 'What is the quarterly amount for Benazir Kafaalat in 2026?',
                'questionUr': '2026 میں بے نظیر کفالت سہ ماہی قسط کی رقم کتنی ہے؟',
                'answerEn': 'Eligible women beneficiaries receive PKR 10,500 per quarter (every 3 months) disbursed via biometric verification at bank campsites.',
                'answerUr': 'اہل خواتین کو 10,500 روپے فی سہ ماہی (ہر 3 ماہ بعد) بائیو میٹرک تصدیق پر ملتے ہیں۔'
          },
          {
                'questionEn': 'Is BISP 8171 registration free or is there an agent fee?',
                'questionUr': 'کیا 8171 کی رجسٹریشن بالکل مفت ہے؟',
                'answerEn': 'BISP NSER dynamic survey registration is 100% FREE at BISP Tehsil Centers. Never pay money to private agents. Report fraud to 0800-26477.',
                'answerUr': 'بی ایس پی کی تمام سروسز مفت ہیں۔ ایجنٹوں کو رقم دینا سخت منع ہے۔'
          }
    ],
    contentEn: `Detailed criteria for BS 4-year, MS/MPhil, and PhD research scholars eligible for free laptop distribution.`,
    contentUr: `بی ایس، ایم فل اور پی ایچ ڈی کے طلباء کے لیے میرٹ کی شرائط۔`,
    relatedSlugs: ['/education/hec-scholarship-pakistan', '/welfare/pser-survey-registration'],
  },

  'sehat-card-eligibility-check': {
    slug: 'sehat-card-eligibility-check',
    fullPath: '/welfare/sehat-card-eligibility-check',
    categoryId: 'welfare',
    titleEn: 'Sehat Sahulat Card Eligibility Check by CNIC 2026: SMS 8500 & Hospital List',
    titleUr: 'صحت سہولت کارڈ آن لائن اہلیت چیک 8500: مفت علاج و ہسپتال فہرست 2026',
    metaDescriptionEn: 'Check Sehat Card eligibility by sending CNIC to 8500 or online at pmhealthprogram.gov.pk. Free PKR 1 Million health insurance coverage per family.',
    metaDescriptionUr: 'اپنا 13 ہندسوں کا شناختی کارڈ 8500 پر ایس ایم ایس کر کے صحت کارڈ کے 10 لاکھ روپے مفت علاج کی اہلیت چیک کریں۔',
    directAnswerEn: 'To check your Sehat Sahulat Card eligibility, send your 13-digit CNIC number via SMS to 8500. Eligible families receive up to PKR 1 Million (10 Lakhs) per year for free inpatient medical treatment and surgeries at empanelled public & private hospitals.',
    directAnswerUr: 'صحت سہولت کارڈ کی اہلیت معلوم کرنے کے لیے اپنا شناختی کارڈ 8500 پر ایس ایم ایس بھیجیں۔ اہل خاندانوں کو 10 لاکھ روپے تک کا مفت علاج ملتا ہے۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'Sehat Sahulat Program Official Portal', url: 'https://pmhealthprogram.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Healthcare Welfare Desk' },
    faqs: [
          {
                'questionEn': 'How to check BISP 8171 payment status by CNIC?',
                'questionUr': 'شناختی کارڈ نمبر سے 8171 قسط کا سٹیٹس کیسے معلوم کریں؟',
                'answerEn': 'Visit 8171.bisp.gov.pk, enter 13-digit CNIC and security captcha, or send SMS with CNIC number to 8171 for instant reply.',
                'answerUr': '8171.bisp.gov.pk پر اپنا شناختی کارڈ درج کریں یا 8171 پر SMS بھیجیں۔'
          },
          {
                'questionEn': 'What is the quarterly amount for Benazir Kafaalat in 2026?',
                'questionUr': '2026 میں بے نظیر کفالت سہ ماہی قسط کی رقم کتنی ہے؟',
                'answerEn': 'Eligible women beneficiaries receive PKR 10,500 per quarter (every 3 months) disbursed via biometric verification at bank campsites.',
                'answerUr': 'اہل خواتین کو 10,500 روپے فی سہ ماہی (ہر 3 ماہ بعد) بائیو میٹرک تصدیق پر ملتے ہیں۔'
          },
          {
                'questionEn': 'Is BISP 8171 registration free or is there an agent fee?',
                'questionUr': 'کیا 8171 کی رجسٹریشن بالکل مفت ہے؟',
                'answerEn': 'BISP NSER dynamic survey registration is 100% FREE at BISP Tehsil Centers. Never pay money to private agents. Report fraud to 0800-26477.',
                'answerUr': 'بی ایس پی کی تمام سروسز مفت ہیں۔ ایجنٹوں کو رقم دینا سخت منع ہے۔'
          }
    ],
    contentEn: `Find panel hospital list for cardiac surgeries, oncology, and emergency medical treatments covered under Sehat Card.`,
    contentUr: `صحت کارڈ پر شامل تمام سرکاری و نجی پینل ہسپتالوں کی فہرست۔`,
    relatedSlugs: ['/welfare/bisp-eligibility-check-by-cnic', '/nadra/cnic-kaise-banaye'],
  },

  'ramzan-relief-package': {
    slug: 'ramzan-relief-package',
    fullPath: '/welfare/ramzan-relief-package',
    categoryId: 'welfare',
    titleEn: 'Ramzan Relief Package 2026: Free Rashan Subsidy & Utility Stores Discount',
    titleUr: 'رمضان ریلیف پیکیج 2026: مفت راشن، راشن کارڈ اور یوٹیلیٹی سٹورز رعایت',
    metaDescriptionEn: 'Government Ramzan Relief Package 2026 guidelines: Free Rashan hamper delivery, Utility Stores subsidies on flour (Atta), sugar, ghee, and 8070 SMS check.',
    metaDescriptionUr: 'حکومت کا رمضان ریلیف پیکیج 2026۔ مفت آٹا، چینی، گھی پر رعایت اور 8070 ایس ایم ایس کوڈ کے ذریعے راشن کی فراہمی۔',
    directAnswerEn: 'The annual Government Ramzan Relief Package provides subsidized essential food items (Atta, Sugar, Ghee, Pulses) at Utility Stores and doorstep free Rashan hampers for deserving households verified through 8070 SMS or BISP data.',
    directAnswerUr: 'سالانہ رمضان ریلیف پیکیج کے تحت مستحق شہریوں کو 8070 یا بی ایس پی پورٹل کے ذریعے مفت راشن اور یوٹیلیٹی سٹورز پر سستا آٹا و گھی ملتا ہے۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'Utility Stores Corporation Pakistan', url: 'https://usc.org.pk/' },
    author: { name: 'Editorial Team', role: 'Seasonal Relief Desk' },
    faqs: [
          {
                'questionEn': 'How to check BISP 8171 payment status by CNIC?',
                'questionUr': 'شناختی کارڈ نمبر سے 8171 قسط کا سٹیٹس کیسے معلوم کریں؟',
                'answerEn': 'Visit 8171.bisp.gov.pk, enter 13-digit CNIC and security captcha, or send SMS with CNIC number to 8171 for instant reply.',
                'answerUr': '8171.bisp.gov.pk پر اپنا شناختی کارڈ درج کریں یا 8171 پر SMS بھیجیں۔'
          },
          {
                'questionEn': 'What is the quarterly amount for Benazir Kafaalat in 2026?',
                'questionUr': '2026 میں بے نظیر کفالت سہ ماہی قسط کی رقم کتنی ہے؟',
                'answerEn': 'Eligible women beneficiaries receive PKR 10,500 per quarter (every 3 months) disbursed via biometric verification at bank campsites.',
                'answerUr': 'اہل خواتین کو 10,500 روپے فی سہ ماہی (ہر 3 ماہ بعد) بائیو میٹرک تصدیق پر ملتے ہیں۔'
          },
          {
                'questionEn': 'Is BISP 8171 registration free or is there an agent fee?',
                'questionUr': 'کیا 8171 کی رجسٹریشن بالکل مفت ہے؟',
                'answerEn': 'BISP NSER dynamic survey registration is 100% FREE at BISP Tehsil Centers. Never pay money to private agents. Report fraud to 0800-26477.',
                'answerUr': 'بی ایس پی کی تمام سروسز مفت ہیں۔ ایجنٹوں کو رقم دینا سخت منع ہے۔'
          }
    ],
    contentEn: `Seasonal guide on registering for Ramzan Nigahban hampers and Utility Stores subsidised food cards.`,
    contentUr: `رمضان نگہبان پروگرام اور یوٹیلیٹی سٹورز راشن کارڈ کی مکمل تفصیل۔`,
    relatedSlugs: ['/welfare/bisp-eligibility-check-by-cnic', '/welfare/ehsaas-program-guide'],
  },

  // TRAFFIC & VEHICLE SERVICES ARTICLES (5 NEW ROUTES)
  'e-challan-check-online': {
    slug: 'e-challan-check-online',
    fullPath: '/traffic/e-challan-check-online',
    categoryId: 'traffic',
    titleEn: 'E-Challan Check Online 2026: Punjab PSCA & Traffic Fine Lookup',
    titleUr: 'ای چالان آن لائن چیک 2026: پنجاب سیف سٹی، کراچی اور اسلام آباد ٹریفک',
    metaDescriptionEn: 'Check and pay traffic E-Challans online in Pakistan. Punjab Safe Cities Authority (echallan.psca.gop.pk), Sindh Traffic, and Islamabad e-Challan payment via JazzCash/ePay.',
    metaDescriptionUr: 'پنجاب سیف سٹیز اتھارٹی (echallan.psca.gop.pk)، کراچی اور اسلام آباد کا ای چالان آن لائن گاڑی نمبر یا شناختی کارڈ سے دیکھئے اور پے کریں۔',
    directAnswerEn: 'To check your traffic E-Challan online in Punjab, visit echallan.psca.gop.pk and enter your Vehicle Registration Number and Chassis Number (last 6 digits). In Islamabad, check via ICT Traffic app or website. Payments can be made via ePay Punjab, JazzCash, or Easypaisa.',
    directAnswerUr: 'پنجاب میں ای چالان آن لائن چیک کرنے کے لیے echallan.psca.gop.pk پر گاڑی کا نمبر اور چیسس نمبر کے آخری 6 ہندسے درج کریں۔ ادائیگی ای پے پنجاب یا ایزی پیسہ سے کی جا سکتی ہے۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'Punjab Safe Cities Authority (PSCA)', url: 'https://echallan.psca.gop.pk/' },
    author: { name: 'Editorial Team', role: 'Traffic & Legal Services Desk' },
    feeStructure: [
      { serviceEn: 'Signal Violation / Overspeeding', serviceUr: 'سگنل کی خلاف ورزی / تیز رفتاری', normal: 'PKR 500 - 2,000', urgent: 'Online via ePay', executive: 'PSCA Verified' },
      { serviceEn: 'Wrong Parking / No Parking Zone', serviceUr: 'غلط پارکنگ', normal: 'PKR 500 - 1,000', urgent: 'Online via ePay', executive: 'PSCA Verified' },
      { serviceEn: 'Mobile Phone While Driving', serviceUr: 'گاڑی چلاتے وقت موبائل استعمال', normal: 'PKR 1,000 - 2,500', urgent: 'Online via ePay', executive: 'PSCA Verified' },
      { serviceEn: 'No Seat Belt / Helmet', serviceUr: 'سیٹ بیلٹ / ہیلمٹ نہ پہننا', normal: 'PKR 500 - 1,000', urgent: 'Online via ePay', executive: 'PSCA Verified' },
    ],
    faqs: [
      {
        questionEn: 'How do I find out if I have any pending e-challans?',
        questionUr: 'مجھے کیسے پتہ چلے گا کہ میرے کوئی ای چالان باقی ہیں؟',
        answerEn: 'Visit echallan.psca.gop.pk (Punjab) or the ICT Traffic app (Islamabad). Enter your Vehicle Registration Number and Chassis Number (last 6 digits). All pending CCTV-issued traffic violation notices registered against your vehicle will appear.',
        answerUr: 'Punjab کے لیے echallan.psca.gop.pk پر جائیں، اپنا گاڑی رجسٹریشن نمبر اور چیسس نمبر (آخری 6 ہندسے) درج کریں۔ تمام غیر ادا شدہ ای چالان ظاہر ہو جائیں گے۔',
      },
      {
        questionEn: 'What happens if I do not pay an e-challan?',
        questionUr: 'اگر میں ای چالان ادا نہ کروں تو کیا ہوگا؟',
        answerEn: 'Unpaid e-challans can block your vehicle ownership transfer (bay-naam) in Punjab Excise system. Your driving license renewal may also be blocked. Additionally, if your vehicle is stopped at a checkpoint, all unpaid challans become payable on-spot with late surcharges.',
        answerUr: 'ادا نہ کیے گئے ای چالان کی وجہ سے پنجاب ایکسائز میں گاڑی کی بائے نیم منتقلی رک سکتی ہے۔ ڈرائیونگ لائسنس کی تجدید بھی روکی جا سکتی ہے۔',
      },
      {
        questionEn: 'Can I pay an e-challan online without visiting the office?',
        questionUr: 'کیا ای چالان بغیر دفتر گئے آن لائن ادا ہو سکتا ہے؟',
        answerEn: 'Yes. Punjab e-challans can be paid online via the ePay Punjab app, or by visiting epay.punjab.gov.pk. Payment methods include JazzCash, Easypaisa, 1Link internet banking, or debit/credit card. Once paid, the challan receipt is generated and your record is cleared.',
        answerUr: 'جی ہاں۔ پنجاب کے ای چالان ePay Punjab ایپ یا epay.punjab.gov.pk پر جاز کیش، ایزی پیسہ یا کریڈٹ کارڈ سے آن لائن ادا کیے جا سکتے ہیں۔',
      },
      {
        questionEn: 'How do CCTV traffic cameras issue e-challans?',
        questionUr: 'سی سی ٹی وی کیمرے ای چالان کیسے جاری کرتے ہیں؟',
        answerEn: 'Punjab Safe Cities Authority (PSCA) operates an AI-powered traffic enforcement system using CCTV cameras installed across major roads. The cameras automatically detect violations (signal jumping, speeding, wrong lane, phone use), read the vehicle license plate using ANPR technology, and cross-reference it with Excise registration records to issue an e-challan to the registered owner.',
        answerUr: 'پنجاب سیف سٹیز اتھارٹی کے AI کیمرے سڑکوں پر نصب ہیں جو خود بخود سگنل توڑنے، تیز رفتاری اور دیگر خلاف ورزیوں کو ریکارڈ کرتے ہیں اور گاڑی کا نمبر پلیٹ پڑھ کر مالک کو ای چالان جاری کر دیتے ہیں۔',
      },
    ],
    contentEn: `Online E-Challan checking and payment is one of the most searched civic services in Pakistan. The Punjab Safe Cities Authority (PSCA) and Islamabad Capital Territory (ICT) Traffic Police have both digitized their traffic enforcement systems.

Punjab E-Challan System (PSCA) — How it Works:
PSCA operates over 8,000 CCTV cameras across Lahore, Rawalpindi, Faisalabad, Gujranwala, Multan, and other Punjab cities. These cameras use ANPR (Automatic Number Plate Recognition) technology to detect violations in real-time and automatically issue e-challans to the registered vehicle owner.

How to Check Punjab E-Challan Online:
1. Visit echallan.psca.gop.pk
2. Click "Check E-Challan"
3. Enter your Vehicle Registration Number (e.g., LHR-2024-XXXX)
4. Enter Chassis Number (last 6 digits printed on your vehicle registration document)
5. All pending challans with date, location, violation type, and fine amount will appear
6. Click "Pay Now" to proceed to ePay Punjab payment gateway

How to Pay E-Challan Online (Punjab):
• Via ePay Punjab app: Available on Android and iOS
• Online portal: epay.punjab.gov.pk
• Payment options: JazzCash, Easypaisa, 1Link banking, Visa/Mastercard debit/credit
• After payment: Download and keep your receipt as proof of challan clearance

Islamabad E-Challan:
• ICT Traffic Police issues e-challans via the ICT Smart Challan App
• Check and pay at: islamabadtraffic.gov.pk

Karachi E-Challan (Sindh):
• Karachi Traffic Police issues challans via the SRSO system
• Contact: 1915 (Karachi Traffic Police helpline)`,
    contentUr: `آن لائن ای چالان چیک کرنا اور ادا کرنا پاکستان میں سب سے زیادہ تلاش کی جانے والی سرکاری خدمات میں سے ہے۔

پنجاب ای چالان سسٹم (PSCA):
پنجاب سیف سٹیز اتھارٹی کے 8,000 سے زائد سی سی ٹی وی کیمرے لاہور، راولپنڈی، فیصل آباد، گوجرانوالہ اور ملتان میں نصب ہیں۔ یہ کیمرے خودکار طریقے سے ای چالان جاری کرتے ہیں۔

پنجاب ای چالان آن لائن چیک کرنے کا طریقہ:
1۔ echallan.psca.gop.pk کھولیں
2۔ گاڑی رجسٹریشن نمبر درج کریں
3۔ چیسس نمبر (آخری 6 ہندسے) درج کریں
4۔ تمام غیر ادا شدہ چالان ظاہر ہو جائیں گے
5۔ "ابھی ادا کریں" پر کلک کریں

ای چالان آن لائن ادائیگی:
• ePay Punjab ایپ (Android/iOS)
• جاز کیش، ایزی پیسہ، 1Link بینکنگ
• ادائیگی کے بعد رسید ڈاؤن لوڈ کریں

اسلام آباد چالان: islamabadtraffic.gov.pk`,
    relatedSlugs: ['/traffic/e-challan-check-by-cnic', '/traffic/token-tax-check', '/traffic/driving-license-guide'],
  },

  'e-challan-check-by-cnic': {
    slug: 'e-challan-check-by-cnic',
    fullPath: '/traffic/e-challan-check-by-cnic',
    categoryId: 'traffic',
    titleEn: 'E-Challan Check by CNIC 2026: Search Traffic Violations by Owner ID',
    titleUr: 'ای چالان آن لائن شناختی کارڈ نمبر سے چیک کریں 2026',
    metaDescriptionEn: 'Search pending traffic e-challans registered against your CNIC number in Punjab, Karachi, and Islamabad. Print duplicate challan receipts online.',
    metaDescriptionUr: 'اپنے قومی شناختی کارڈ نمبر کے ذریعے تمام غیر ادا شدہ ای چالان چالان آن لائن دیکھیں اور پرنٹ کاپی حاصل کریں۔',
    directAnswerEn: 'You can query pending traffic e-challans associated with all vehicles registered under your CNIC by logging into the ePay Punjab mobile application or visiting PSCA web portal under CNIC lookup.',
    directAnswerUr: 'اپنے شناختی کارڈ نمبر پر رجسٹرڈ تمام گاڑیوں کے ای چالان ای پے پنجاب ایپ یا سیف سٹی پورٹل سے اکٹھے چیک کیے جا سکتے ہیں۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'ePay Punjab Official App Portal', url: 'https://epay.punjab.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Automobile Services Desk' },
    faqs: [
          {
                'questionEn': 'How to check e-Challan online by CNIC or Vehicle Registration?',
                'questionUr': 'ای چالان آن لائن شناختی کارڈ یا گاڑی نمبر سے کیسے چیک کریں؟',
                'answerEn': 'Visit echallan.psca.gop.pk, enter Vehicle Registration Number and Chassis / CNIC Number to view unpaid traffic fines and print challan.',
                'answerUr': 'echallan.psca.gop.pk پر گاڑی کا نمبر درج کر کے ای چالان کی تفصیلات دیکھیں۔'
          },
          {
                'questionEn': 'How to pay e-Challan fine via JazzCash or mobile banking?',
                'questionUr': 'ای چالان جرمانہ جاز کیش یا بینک ایپ سے کیسے ادا کریں؟',
                'answerEn': 'Open JazzCash / Easypaisa app → Select Govt Payments / E-Challan → Enter 18-digit Challan PSID → Confirm payment to clear fine instantly.',
                'answerUr': 'جاز کیش میں گورنمنٹ پیمنٹس → ای چالان منتخب کریں اور PSID درج کر کے ادا کریں۔'
          },
          {
                'questionEn': 'What is the fine for driving without a valid DLIMS license?',
                'questionUr': 'بغیر لائسنس گاڑی یا موٹر سائیکل چلانے پر کتنا چالان ہوتا ہے؟',
                'answerEn': 'Driving without valid license incurs e-challan fine of PKR 2,000 for motorbikes and PKR 5,000 for cars along with vehicle impoundment risks.',
                'answerUr': 'بغیر لائسنس موٹر سائیکل پر 2,000 روپے اور کار پر 5,000 روپے کا چالان ہوتا ہے۔'
          }
    ],
    contentEn: `How to clear blocked vehicle transfer records resulting from unpaid e-challans.`,
    contentUr: `غیر ادا شدہ ای چالان کی وجہ سے روکی گئی گاڑی کی بائے نیم منتقلی کا حل۔`,
    relatedSlugs: ['/traffic/e-challan-check-online', '/traffic/vehicle-registration-transfer'],
  },

  'token-tax-check': {
    slug: 'token-tax-check',
    fullPath: '/traffic/token-tax-check',
    categoryId: 'traffic',
    titleEn: 'Vehicle Token Tax Check & Calculator 2026: Punjab, Sindh & ICT Rates',
    titleUr: 'گاڑیوں کا ٹوکن ٹیکس آن لائن چیک و کیلکولیٹر 2026 (پنجاب و سندھ)',
    metaDescriptionEn: 'Calculate and pay vehicle token tax online for cars and motorcycles in Punjab (ePay), Sindh Excise, and Islamabad. Lifetime token tax rates for under 1000cc engines.',
    metaDescriptionUr: 'کار اور موٹر سائیکل کے ٹوکن ٹیکس کی آن لائن ادائیگی اور ریٹس۔ 1000 سی سی سے کم گاڑیوں کا لائف ٹائم ٹوکن ٹیکس۔',
    directAnswerEn: 'Vehicle Token Tax in Pakistan can be calculated and paid online via ePay Punjab or Sindh Excise portals. Cars under 1000cc pay a one-time Lifetime Token Tax, while engines above 1000cc pay annual token tax based on engine capacity (cc) and Filer/Non-Filer income tax status.',
    directAnswerUr: 'گاڑیوں کا ٹوکن ٹیکس ای پے پنجاب یا سندھ ایکسائز ایپ سے آن لائن ادا کیا جا سکتا ہے۔ 1000 سی سی سے کم گاڑیوں کا لائف ٹائم ٹیکس ہوتا ہے جبکہ بڑی گاڑیوں کا سالانہ ٹیکس چالان ہوتا ہے۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'Excise, Taxation & Narcotics Control Dept', url: 'https://excise.punjab.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Excise & Tax Desk' },
    feeStructure: [
      { serviceEn: 'Up to 1000cc (Lifetime Tax)', serviceUr: '1000 سی سی تک (لائف ٹائم ٹیکس)', normal: 'PKR 10,000 - 15,000', urgent: 'One-Time Payment', executive: 'ePay Online' },
      { serviceEn: '1001cc to 1300cc (Annual)', serviceUr: '1001 سے 1300 سی سی (سالانہ)', normal: 'PKR 2,500 (Filer)', urgent: 'PKR 5,000 (Non-Filer)', executive: 'Annual Challan' },
    ],
    faqs: [
          {
                'questionEn': 'How to check e-Challan online by CNIC or Vehicle Registration?',
                'questionUr': 'ای چالان آن لائن شناختی کارڈ یا گاڑی نمبر سے کیسے چیک کریں؟',
                'answerEn': 'Visit echallan.psca.gop.pk, enter Vehicle Registration Number and Chassis / CNIC Number to view unpaid traffic fines and print challan.',
                'answerUr': 'echallan.psca.gop.pk پر گاڑی کا نمبر درج کر کے ای چالان کی تفصیلات دیکھیں۔'
          },
          {
                'questionEn': 'How to pay e-Challan fine via JazzCash or mobile banking?',
                'questionUr': 'ای چالان جرمانہ جاز کیش یا بینک ایپ سے کیسے ادا کریں؟',
                'answerEn': 'Open JazzCash / Easypaisa app → Select Govt Payments / E-Challan → Enter 18-digit Challan PSID → Confirm payment to clear fine instantly.',
                'answerUr': 'جاز کیش میں گورنمنٹ پیمنٹس → ای چالان منتخب کریں اور PSID درج کر کے ادا کریں۔'
          },
          {
                'questionEn': 'What is the fine for driving without a valid DLIMS license?',
                'questionUr': 'بغیر لائسنس گاڑی یا موٹر سائیکل چلانے پر کتنا چالان ہوتا ہے؟',
                'answerEn': 'Driving without valid license incurs e-challan fine of PKR 2,000 for motorbikes and PKR 5,000 for cars along with vehicle impoundment risks.',
                'answerUr': 'بغیر لائسنس موٹر سائیکل پر 2,000 روپے اور کار پر 5,000 روپے کا چالان ہوتا ہے۔'
          }
    ],
    contentEn: `Complete engine capacity (cc) rate chart for Filer vs Non-Filer vehicle tax assessment.`,
    contentUr: `فائلر اور نان فائلر صارفین کے لیے سی سی کے لحاظ سے ٹوکن ٹیکس کے ریٹس۔`,
    relatedSlugs: ['/traffic/e-challan-check-online', '/traffic/vehicle-registration-transfer'],
  },

  'driving-license-guide': {
    slug: 'driving-license-guide',
    fullPath: '/traffic/driving-license-guide',
    categoryId: 'traffic',
    titleEn: 'Pakistan Driving License Guide 2026: DLIMS Online Apply & Renewal',
    titleUr: 'ڈرائیونگ لائسنس آن لائن اپلائی گائیڈ 2026: DLIMS پورٹل اور رینیول',
    metaDescriptionEn: 'How to apply for Learner Permit and International Driving License online via DLIMS Punjab (dlims.punjab.gov.pk) or Sindh Police. Fees, test rules, and electronic DL download.',
    metaDescriptionUr: 'ڈی ایل آئی ایم ایس پورٹل (dlims.punjab.gov.pk) سے لرنر پرمٹ، پکا ڈرائیونگ لائسنس اور انٹرنیشنل لائسنس اپلائی کرنے کا طریقہ۔',
    directAnswerEn: 'To get a Driving License in Pakistan, first apply online for a Learner Permit on DLIMS (dlims.punjab.gov.pk) or visit any Traffic Police Licensing Center. After 42 days, book a driving test to get your regular 5-year Motorcar/Motorcycle driving license.',
    directAnswerUr: 'ڈرائیونگ لائسنس حاصل کرنے کے لیے پہلے DLIMS پورٹل سے لرنر پرمٹ بنائیں۔ 42 دن بعد پریکٹیکل اور روڈ ٹیسٹ پاس کر کے 5 سالہ کمپیوٹرائزڈ لائسنس حاصل کریں۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'DLIMS Punjab Traffic Police Portal', url: 'https://dlims.punjab.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Licensing & Road Safety Desk' },
    faqs: [
          {
                'questionEn': 'How to check e-Challan online by CNIC or Vehicle Registration?',
                'questionUr': 'ای چالان آن لائن شناختی کارڈ یا گاڑی نمبر سے کیسے چیک کریں؟',
                'answerEn': 'Visit echallan.psca.gop.pk, enter Vehicle Registration Number and Chassis / CNIC Number to view unpaid traffic fines and print challan.',
                'answerUr': 'echallan.psca.gop.pk پر گاڑی کا نمبر درج کر کے ای چالان کی تفصیلات دیکھیں۔'
          },
          {
                'questionEn': 'How to pay e-Challan fine via JazzCash or mobile banking?',
                'questionUr': 'ای چالان جرمانہ جاز کیش یا بینک ایپ سے کیسے ادا کریں؟',
                'answerEn': 'Open JazzCash / Easypaisa app → Select Govt Payments / E-Challan → Enter 18-digit Challan PSID → Confirm payment to clear fine instantly.',
                'answerUr': 'جاز کیش میں گورنمنٹ پیمنٹس → ای چالان منتخب کریں اور PSID درج کر کے ادا کریں۔'
          },
          {
                'questionEn': 'What is the fine for driving without a valid DLIMS license?',
                'questionUr': 'بغیر لائسنس گاڑی یا موٹر سائیکل چلانے پر کتنا چالان ہوتا ہے؟',
                'answerEn': 'Driving without valid license incurs e-challan fine of PKR 2,000 for motorbikes and PKR 5,000 for cars along with vehicle impoundment risks.',
                'answerUr': 'بغیر لائسنس موٹر سائیکل پر 2,000 روپے اور کار پر 5,000 روپے کا چالان ہوتا ہے۔'
          }
    ],
    contentEn: `Online renewal process for expired driving licenses and e-license PDF download on smartphone.`,
    contentUr: `آن لائن ای لائسنس پی ڈی ایف ڈاؤن لوڈ کرنے کا طریقہ۔`,
    relatedSlugs: ['/traffic/e-challan-check-online', '/traffic/token-tax-check'],
  },

  'vehicle-registration-transfer': {
    slug: 'vehicle-registration-transfer',
    fullPath: '/traffic/vehicle-registration-transfer',
    categoryId: 'traffic',
    titleEn: 'Vehicle Ownership Registration Transfer Guide 2026 (Biometric Transfer)',
    titleUr: 'گاڑی اور موٹر سائیکل کی بائے نیم منتقلی گائیڈ 2026 (بایومیٹرک ٹرانسفر)',
    metaDescriptionEn: 'Step-by-step procedure to transfer vehicle ownership in Pakistan. Mandatory NADRA Biometric verification rules for buyer & seller, fee challan, and smart card fees.',
    metaDescriptionUr: 'گاڑی یا موٹر سائیکل کی خریداری کے بعد آن لائن اور نادرا بایومیٹرک کے ذریعے اپنے نام منتقل کروانے کا مکمل طریقہ کار۔',
    directAnswerEn: 'Transferring vehicle ownership in Pakistan requires mandatory NADRA biometric verification by both the buyer and seller. Pay the transfer fee via ePay Punjab or Excise portal, complete biometric verification at any e-Khidmat / NADRA e-Sahulat franchise, and submit original Smart Card.',
    directAnswerUr: 'گاڑی کی بائے نیم منتقلی کے لیے خریدنے اور بیچنے والے دونوں کی نادرا بایومیٹرک تصدیق لازمی ہے۔ فیس ای پے سے ادا کر کے ای خدمت سینٹر میں بائیو میٹرک کروائیں۔',
    lastVerified: 'August 10, 2026',
    officialSource: { name: 'Punjab Excise Registration System', url: 'https://excise.punjab.gov.pk/' },
    author: { name: 'Editorial Team', role: 'Vehicle Ownership Desk' },
    faqs: [
          {
                'questionEn': 'How to check e-Challan online by CNIC or Vehicle Registration?',
                'questionUr': 'ای چالان آن لائن شناختی کارڈ یا گاڑی نمبر سے کیسے چیک کریں؟',
                'answerEn': 'Visit echallan.psca.gop.pk, enter Vehicle Registration Number and Chassis / CNIC Number to view unpaid traffic fines and print challan.',
                'answerUr': 'echallan.psca.gop.pk پر گاڑی کا نمبر درج کر کے ای چالان کی تفصیلات دیکھیں۔'
          },
          {
                'questionEn': 'How to pay e-Challan fine via JazzCash or mobile banking?',
                'questionUr': 'ای چالان جرمانہ جاز کیش یا بینک ایپ سے کیسے ادا کریں؟',
                'answerEn': 'Open JazzCash / Easypaisa app → Select Govt Payments / E-Challan → Enter 18-digit Challan PSID → Confirm payment to clear fine instantly.',
                'answerUr': 'جاز کیش میں گورنمنٹ پیمنٹس → ای چالان منتخب کریں اور PSID درج کر کے ادا کریں۔'
          },
          {
                'questionEn': 'What is the fine for driving without a valid DLIMS license?',
                'questionUr': 'بغیر لائسنس گاڑی یا موٹر سائیکل چلانے پر کتنا چالان ہوتا ہے؟',
                'answerEn': 'Driving without valid license incurs e-challan fine of PKR 2,000 for motorbikes and PKR 5,000 for cars along with vehicle impoundment risks.',
                'answerUr': 'بغیر لائسنس موٹر سائیکل پر 2,000 روپے اور کار پر 5,000 روپے کا چالان ہوتا ہے۔'
          }
    ],
    contentEn: `Biometric transfer deadline rules and penalties for driving on open transfer letter.`,
    contentUr: `اوپن ٹرانسفر لیٹر پر گاڑی چلانے کے جرمانے اور نئے قوانین۔`,
    relatedSlugs: ['/traffic/token-tax-check', '/traffic/e-challan-check-by-cnic'],
  },
};
