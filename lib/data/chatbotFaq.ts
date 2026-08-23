export interface ChatbotFaqItem {
  id: string;
  keywords: string[];
  patterns: string[];
  answerEn: string;
  answerUr: string;
  sourceTitleEn: string;
  sourceTitleUr: string;
  sourceUrl: string;
}

export const CHATBOT_FAQ_DATABASE: ChatbotFaqItem[] = [
  // 1. NADRA CNIC & Smart Card
  {
    id: 'cnic-fees',
    keywords: ['cnic fee', 'smart card price', 'nadra cost', 'paisa', 'id card fee', 'cnic rate', 'fees kitni hai'],
    patterns: [
      'how much does cnic cost',
      'cnic fee 2026',
      'nadra smart card fee',
      'cnic kaise banaye fee',
      'smart cnic charges normal urgent',
      'lost cnic replacement fee',
    ],
    answerEn: 'NADRA Smart CNIC fees for 2026: Normal delivery (15–30 days) is PKR 750. Urgent delivery (7 days) is PKR 1,500. Executive delivery (2–3 days) is PKR 2,500. Lost card duplicate fee is the same.',
    answerUr: 'نادرا سمارٹ شناختی کارڈ فیس 2026: نارمل فیس 750 روپے (15 سے 30 دن)، ارجنٹ فیس 1,500 روپے (7 دن)، اور ایگزیکٹو فیس 2,500 روپے (2 تا 3 دن) ہے۔ گم شدہ کارڈ کی فیس بھی یکساں ہے۔',
    sourceTitleEn: 'NADRA CNIC Complete Application Guide 2026',
    sourceTitleUr: 'نادرا شناختی کارڈ مکمل گائیڈ',
    sourceUrl: '/nadra/cnic-kaise-banaye',
  },
  {
    id: 'cnic-documents',
    keywords: ['cnic documents', 'b form required', 'cnic apply paper', 'kaise banaye', 'requirements cnic'],
    patterns: [
      'what documents are needed for cnic',
      'documents required for new cnic 18 years',
      'b form to cnic process',
      'cnic banwane k liye kya chahiye',
    ],
    answerEn: 'For a new CNIC (Age 18+): Bring your original Computerized Birth Certificate (B-Form/CRC), father or mother original valid CNIC, and at least one blood relative for on-spot biometric verification at the NRC center.',
    answerUr: '18 سال کی عمر میں نیا شناختی کارڈ بنوانے کے لیے اصل بی فارم (سی آر سی)، والدین کا اصل شناختی کارڈ اور بائیو میٹرک تصدیق کے لیے ایک خونی رشتہ دار کی موجودگی ضروری ہے۔',
    sourceTitleEn: 'New CNIC Requirements & Document Checklist',
    sourceTitleUr: 'شناختی کارڈ کے لیے ضروری کاغذات',
    sourceUrl: '/nadra/cnic-kaise-banaye',
  },

  // 2. Pakistani Passports
  {
    id: 'passport-fees',
    keywords: ['passport fee', 'pasport fees', 'epassport cost', '36 page passport', 'fast track passport fee'],
    patterns: [
      'how much is pakistan passport fee',
      'passport fee 2026',
      'epassport 36 pages fee',
      'passport urgent fee',
      'passport fast track charges',
    ],
    answerEn: 'Pakistani Passport Fees 2026 (5-Year / 36 Pages): Normal is PKR 4,500 (15–21 days), Urgent is PKR 7,500 (5–7 days), and Fast Track is PKR 12,500 (2 days). New e-Passport 36-page Normal is PKR 9,000 and Urgent is PKR 15,000.',
    answerUr: 'پاسپورٹ فیس 2026 (5 سالہ / 36 صفحات): نارمل 4,500 روپے، ارجنٹ 7,500 روپے، اور فاسٹ ٹریک 12,500 روپے ہے۔ نیا ای پاسپورٹ 36 صفحات نارمل 9,000 روپے اور ارجنٹ 15,000 روپے ہے۔',
    sourceTitleEn: 'Pakistan e-Passport Fee Structure 2026',
    sourceTitleUr: 'پاسپورٹ فیس شیڈول 2026',
    sourceUrl: '/passport/fee-2026',
  },
  {
    id: 'passport-tracking',
    keywords: ['passport tracking', 'passport status 9988', 'passport kab aayega', 'track my passport'],
    patterns: [
      'how to track pakistan passport',
      'passport status check by 11 digit token',
      'passport delivery status 9988 sms',
    ],
    answerEn: 'To track your passport delivery status: Send your 11-digit token number via SMS to 9988 from your registered mobile number, or use the DGIP online tracking portal with your token ID and CNIC.',
    answerUr: 'پاسپورٹ کا اسٹیٹس معلوم کرنے کے لیے اپنا 11 ہندسوں کا ٹوکن نمبر 9988 پر ایس ایم ایس کریں یا ڈی جی آئی پی کی آن لائن ویب سائٹ پر ٹوکن درج کریں۔',
    sourceTitleEn: 'Pakistan Passport Tracking Status Online 2026',
    sourceTitleUr: 'پاسپورٹ ٹریکنگ آن لائن پورٹل',
    sourceUrl: '/passport/tracking-status',
  },

  // 3. FBR Tax & Filer Status
  {
    id: 'fbr-filer-check',
    keywords: ['fbr filer check', 'atl status', 'filer status check 9966', 'active taxpayer list', 'filer banne ka tarika'],
    patterns: [
      'how to check if i am filer',
      'fbr filer status by cnic 9966',
      'check active taxpayer list atl',
      'am i active filer in fbr',
    ],
    answerEn: 'To check your FBR Filer status: Send SMS "ATL [Space] 13-digit CNIC" to 9966. You will receive an instant reply showing whether you are on the Active Taxpayer List (ATL) for Tax Year 2026-27.',
    answerUr: 'ایف بی آر فائلر اسٹیٹس چیک کرنے کے لیے موبائل سے ATL لکھ کر اسپیس دیں اور 13 ہندسوں کا شناختی کارڈ نمبر 9966 پر ایس ایم ایس کریں۔ فوری جوابی میسج موصول ہو جائے گا۔',
    sourceTitleEn: 'FBR Filer Status Check by CNIC 2026',
    sourceTitleUr: 'ایف بی آر فائلر اسٹیٹس چیک بذریعہ شناختی کارڈ',
    sourceUrl: '/tax/fbr-filer-status-check-cnic',
  },
  {
    id: 'salaried-tax-slabs',
    keywords: ['income tax salary', 'salary tax slabs', 'tax deduction formula', 'income tax calculator 2026'],
    patterns: [
      'how much tax on 100000 salary',
      'salaried income tax slabs 2026',
      'tax free salary limit pakistan 600000',
    ],
    answerEn: 'Under Finance Act 2026-27: Annual salary up to PKR 600,000 (PKR 50,000/month) is 100% TAX FREE. Between 600k and 1.2M, the tax is 5% on amount over 600k. On a salary of PKR 100,000/month (1.2M/year), the monthly tax is PKR 2,500.',
    answerUr: 'فنانس ایکٹ 2026 کے مطابق: 6 لاکھ روپے سالانہ (50 ہزار ماہانہ) تک تنخواہ مکمل ٹیکس فری ہے۔ 6 سے 12 لاکھ تک 5 فیصد ٹیکس ہے۔ 1 لاکھ ماہانہ تنخواہ پر ماہانہ ٹیکس صرف 2,500 روپے ہے۔',
    sourceTitleEn: 'Salaried Income Tax Calculator 2026',
    sourceTitleUr: 'انکم ٹیکس کیلکولیٹر برائے ملازمین',
    sourceUrl: '/tax/income-tax-calculator-salaried-2026',
  },

  // 4. Social Welfare & BISP 8171
  {
    id: 'bisp-8171-eligibility',
    keywords: ['bisp 8171', '8171 paisay check', 'kafaalat 10500', 'ehsaas 8171 portal', 'pmt score bisp'],
    patterns: [
      'how to check bisp 8171 money',
      '8171 bisp payment check by cnic',
      'bisp kafaalat 10500 payment date',
      'bisp eligibility check online',
    ],
    answerEn: 'BISP 8171 Kafaalat quarterly stipend is PKR 10,500. Check eligibility for FREE by sending your 13-digit CNIC to 8171 via SMS or visiting the official 8171.bisp.gov.pk web portal. Avoid paying any fees to middleman agents!',
    answerUr: 'بے نظیر کفالت کی سہ ماہی قسط 10,500 روپے ہے۔ اہلیت معلوم کرنے کے لیے اپنا شناختی کارڈ نمبر 8171 پر ایس ایم ایس کریں یا آفیشل پورٹل 8171.bisp.gov.pk پر چیک کریں۔ کسی ایجنٹ کو پیسے نہ دیں۔',
    sourceTitleEn: 'BISP 8171 Eligibility Check by CNIC 2026',
    sourceTitleUr: 'بے نظیر انکم سپورٹ 8171 پورٹل گائیڈ',
    sourceUrl: '/welfare/bisp-eligibility-check-by-cnic',
  },

  // 5. Health & Sehat Card
  {
    id: 'sehat-card-check',
    keywords: ['sehat card 8500', 'sehat sahulat 10 lakh', 'hospital free treatment', 'sehat card check cnic'],
    patterns: [
      'how to check sehat card eligibility',
      'sehat card 8500 sms check',
      'which hospitals accept sehat card',
      'is sehat card active in punjab',
    ],
    answerEn: 'Universal Sehat Sahulat Card provides up to PKR 1,000,000 (10 Lakh) free inpatient hospital coverage per family. Check your family coverage by sending your 13-digit CNIC to 8500 via SMS.',
    answerUr: 'صحت کارڈ کے تحت ہر خاندان کو سالانہ 10 لاکھ روپے تک کا مفت علاج فراہم کیا جاتا ہے۔ اہلیت چیک کرنے کے لیے اپنا شناختی کارڈ نمبر 8500 پر ایس ایم ایس کریں۔',
    sourceTitleEn: 'Sehat Card Eligibility Check by CNIC 2026',
    sourceTitleUr: 'صحت سہولت کارڈ اہلیت چیک 8500',
    sourceUrl: '/health/sehat-card-eligibility-check-by-cnic',
  },

  // 6. Loans & Housing
  {
    id: 'apni-chhat-loan',
    keywords: ['apni chhat apna ghar', 'cm punjab loan 15 lakh', '0 percent loan', 'interest free housing scheme'],
    patterns: [
      'how to apply for apni chhat apna ghar',
      'punjab 0 percent housing loan 15 lakh',
      'apni chhat apna ghar monthly installment',
    ],
    answerEn: 'CM Punjab "Apni Chhat Apna Ghar" provides interest-free loans up to PKR 1.5 Million (15 Lakh) for constructing homes up to 5 Marla in urban or 10 Marla in rural Punjab. The monthly installment is PKR 14,000–17,857 over 7 years with 0% mark-up.',
    answerUr: 'اپنی چھت اپنا گھر سکیم کے تحت 15 لاکھ روپے تک کا بلاسود قرضہ 7 سال کی آسان اقساط (تقریباً 14 ہزار ماہانہ) پر بغیر کسی مارک اپ کے فراہم کیا جا رہا ہے۔',
    sourceTitleEn: 'Apni Chhat Apna Ghar Scheme 2026 Guide',
    sourceTitleUr: 'اپنی چھت اپنا گھر سکیم آن لائن رجسٹریشن',
    sourceUrl: '/loans/apni-chhat-apna-ghar',
  },

  // 7. Traffic & E-Challan
  {
    id: 'echallan-check',
    keywords: ['echallan check online', 'psca challan', 'traffic challan cnic', 'safe city fine check'],
    patterns: [
      'how to check psca echallan online',
      'punjab safe city traffic fine check',
      'e challan payment easypaisa jazzcash',
    ],
    answerEn: 'To verify PSCA Safe City E-Challan: Visit the official echallan.psca.gop.pk portal, enter your vehicle registration number and chassis number. You can pay online via e-Pay Punjab, 1Link ATMs, or mobile banking.',
    answerUr: 'پنجاب سیف سٹی ای چالان چیک کرنے کے لیے echallan.psca.gop.pk پر گاڑی کا نمبر اور چیسس نمبر درج کریں۔ ادائیگی ای پے پنجاب یا موبائل بینکنگ سے ممکن ہے۔',
    sourceTitleEn: 'Online E-Challan Verification & Payment 2026',
    sourceTitleUr: 'آن لائن ٹریفک ای چالان تصدیق',
    sourceUrl: '/traffic/e-challan-check-online',
  },
];

export const STARTER_QUICK_CHIPS = [
  { labelEn: 'CNIC Fee 2026', labelUr: 'شناختی کارڈ فیس', query: 'What is the NADRA Smart CNIC fee?' },
  { labelEn: 'Passport Fee', labelUr: 'پاسپورٹ فیس', query: 'How much is the e-passport fee?' },
  { labelEn: 'Check FBR Filer', labelUr: 'فائلر اسٹیٹس', query: 'How do I check my FBR filer status via 9966?' },
  { labelEn: 'Sehat Card 8500', labelUr: 'صحت کارڈ 8500', query: 'How to check Sehat Card eligibility via 8500 SMS?' },
  { labelEn: 'BISP 8171', labelUr: 'بے نظیر 8171', query: 'How to check BISP 8171 payment status?' },
  { labelEn: 'Apni Chhat Loan', labelUr: 'اپنی چھت لون', query: 'How does the Apni Chhat Apna Ghar 0% loan work?' },
];
