export interface Category {
  id: string;
  slug: string;
  nameEn: string;
  nameUr: string;
  taglineEn: string;
  taglineUr: string;
  descriptionEn: string;
  descriptionUr: string;
  iconName: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  popularSearches: { en: string; ur: string; slug: string }[];
}

export const CATEGORIES: Category[] = [
  {
    "id": "nadra",
    "slug": "nadra",
    "nameEn": "NADRA Services",
    "nameUr": "نادرا سروسز",
    "taglineEn": "CNIC, B-Form, NICOP & Family Certificates",
    "taglineUr": "شناختی کارڈ، بی فارم، نائیکوپ اور فیملی سرٹیفکیٹ",
    "descriptionEn": "Complete official step-by-step guides for NADRA identity cards, online renewal, fee structures, application tracking, and family certificates.",
    "descriptionUr": "نادرا شناختی کارڈ، آن لائن تجدید، فیس کی تفصیلات، ٹریکنگ اور فیملی سرٹیفکیٹ کی مکمل اور آسان ترین معلوماتی رہنمائی۔",
    "iconName": "CreditCard",
    "accentColor": "#A02334",
    "badgeBg": "bg-doc-seal/10 dark:bg-doc-seal/20",
    "badgeText": "text-doc-seal dark:text-red-300",
    "popularSearches": [
      {
        "en": "ECP Voter Check 8300",
        "ur": "الیکشن کمیشن ووٹر تصدیق 8300",
        "slug": "/nadra/voter-registration-check-cnic-ecp-2026"
      },
      {
        "en": "PTA SIM Check on CNIC 2026",
        "ur": "شناختی کارڈ پر سموں کی تعداد 2026",
        "slug": "/nadra/pta-sim-check-how-many-sims-on-cnic-2026"
      },
      {
        "en": "Senior Citizen Card Explained 2026",
        "ur": "سینئر سٹیزن کارڈ کی حقیقت 2026",
        "slug": "/nadra/senior-citizen-card-pakistan-explained-2026"
      },
      {
        "en": "CNIC New Rules 2026",
        "ur": "شناختی کارڈ نئے قواعد 2026",
        "slug": "/nadra/cnic-new-rules-2026"
      },
      {
        "en": "Lost/Stolen CNIC Replacement 2026",
        "ur": "گمشدہ شناختی کارڈ کا متبادل",
        "slug": "/nadra/lost-stolen-cnic-replacement-2026"
      },
      {
        "en": "NADRA Center Locator 2026",
        "ur": "قریبی نادرا سنٹر لوکیٹر 2026",
        "slug": "/nadra/nadra-registration-center-locator-guide-2026"
      },
      {
        "en": "NICOP Fee Calculator",
        "ur": "نائیکوپ فیس کیلکولیٹر",
        "slug": "/nadra/nicop-fee-calculator"
      },
      {
        "en": "B-Form / FRC Status Check",
        "ur": "بی فارم و ایف آر سی سٹیٹس",
        "slug": "/nadra/b-form-frc-status-check"
      },
      {
        "en": "CNIC Online Apply",
        "ur": "شناختی کارڈ آن لائن درخواست",
        "slug": "/nadra/cnic-kaise-banaye"
      },
      {
        "en": "NADRA Card Fee 2026",
        "ur": "نادرا کارڈ فیس 2026",
        "slug": "/nadra/nadra-card-fee"
      },
      {
        "en": "NADRA Tracking ID Check 2026",
        "ur": "نادرا ٹریکنگ آئی ڈی چیک 2026",
        "slug": "/nadra/nadra-tracking-id-check-online-2026"
      },
      {
        "en": "NADRA Helpline & Complaints 2026",
        "ur": "نادرا ہیلپ لائن اور شکایات 2026",
        "slug": "/nadra/nadra-helpline-complaint-directory-2026"
      },
      {
        "en": "NADRA Jobs & Careers 2026",
        "ur": "نادرا نوکریاں اور کیریئر 2026",
        "slug": "/nadra/nadra-jobs-careers-how-to-apply-2026"
      },
      {
        "en": "NIMS Vaccination Certificate 2026",
        "ur": "نمز ویکسینیشن سرٹیفکیٹ 2026",
        "slug": "/nadra/nims-vaccination-certificate-nadra-2026"
      }
    ]
  },
  {
    "id": "passport",
    "slug": "passport",
    "nameEn": "Passport & Travel",
    "nameUr": "پاسپورٹ اور ٹریول",
    "taglineEn": "Official Fees, Online Apply & Office Contacts",
    "taglineUr": "پاسپورٹ فیس، آن لائن اپلائی اور رابطہ ڈائریکٹری",
    "descriptionEn": "Verified guides for Directorate General of Immigration & Passports: fee tables 2026, e-Passport applications, renewal documents, and office directory.",
    "descriptionUr": "پاکستان پاسپورٹ کی فیس 2026، ای پاسپورٹ آن لائن اپلائی، تجدید کے ضروری کاغذات اور پاسپورٹ دفاتر کا مکمل پتہ و فون نمبر۔",
    "iconName": "Plane",
    "accentColor": "#1B2A4A",
    "badgeBg": "bg-doc-ink/10 dark:bg-slate-800",
    "badgeText": "text-doc-ink dark:text-slate-200",
    "popularSearches": [
      {
        "en": "Passport New Rules 2026",
        "ur": "پاسپورٹ نئے قواعد 2026",
        "slug": "/passport/passport-new-rules-2026-cashless-epassport"
      },
      {
        "en": "Lost Passport Abroad Reissuance",
        "ur": "بیرون ملک گمشدہ پاسپورٹ کا طریقہ",
        "slug": "/passport/lost-passport-abroad-reissuance-process-2026"
      },
      {
        "en": "Passport Fee Calculator",
        "ur": "پاسپورٹ فیس کیلکولیٹر",
        "slug": "/passport/fee-calculator"
      },
      {
        "en": "Passport Tracking Status",
        "ur": "پاسپورٹ ٹریکنگ سٹیٹس",
        "slug": "/passport/tracking-status"
      },
      {
        "en": "Passport Fee 2026",
        "ur": "پاسپورٹ فیس 2026",
        "slug": "/passport/fee-2026"
      },
      {
        "en": "e-Passport Online Apply",
        "ur": "ای پاسپورٹ آن لائن درخواست",
        "slug": "/passport/online-apply"
      }
    ]
  },
  {
    "id": "education",
    "slug": "education",
    "nameEn": "Education",
    "nameUr": "تعلیم اور رزلٹ",
    "taglineEn": "Board Results, Admissions & Scholarships",
    "taglineUr": "بورڈ رزلٹ، یونیورسٹی ایڈمیشن اور سکالرشپس",
    "descriptionEn": "BISE board exam result portals, public university admission deadlines, HEC national scholarships, NUST entry test guides, and CSS preparation.",
    "descriptionUr": "تمام تعلیمی بورڈز کے آن لائن نتائج، یونیورسٹی داخلے، ایچ ای سی سکالرشپس، نسٹ داخلہ اور سی ایس ایس امتحان کی مکمل تیاری۔",
    "iconName": "GraduationCap",
    "accentColor": "#B08D57",
    "badgeBg": "bg-doc-brass/10 dark:bg-amber-950/40",
    "badgeText": "text-amber-800 dark:text-amber-300",
    "popularSearches": [
      {
        "en": "9th Class Result 2026 Lahore Board",
        "ur": "لاہور بورڈ نہم کلاس رزلٹ 2026",
        "slug": "/education/9th-class-result-2026-lahore-board"
      },
      {
        "en": "9th Class Result 2026 Faisalabad Board",
        "ur": "فیصل آباد بورڈ نہم کلاس رزلٹ 2026",
        "slug": "/education/9th-class-result-2026-faisalabad-board"
      },
      {
        "en": "9th Class Result 2026 Rawalpindi Board",
        "ur": "راولپنڈی بورڈ نہم کلاس رزلٹ 2026",
        "slug": "/education/9th-class-result-2026-rawalpindi-board"
      },
      {
        "en": "9th Class Result 2026 Sargodha Board",
        "ur": "سرگودھا بورڈ نہم کلاس رزلٹ 2026",
        "slug": "/education/9th-class-result-2026-sargodha-board"
      },
      {
        "en": "9th Class Result 2026 Gujranwala Board",
        "ur": "گوجرانوالہ بورڈ نہم کلاس رزلٹ 2026",
        "slug": "/education/9th-class-result-2026-gujranwala-board"
      },
      {
        "en": "9th Class Result 2026 Multan Board",
        "ur": "ملتان بورڈ نہم کلاس رزلٹ 2026",
        "slug": "/education/9th-class-result-2026-multan-board"
      },
      {
        "en": "9th Class Result 2026 Sahiwal Board",
        "ur": "ساہیوال بورڈ نہم کلاس رزلٹ 2026",
        "slug": "/education/9th-class-result-2026-sahiwal-board"
      },
      {
        "en": "9th Class Result 2026 Bahawalpur Board",
        "ur": "بہاولپور بورڈ نہم کلاس رزلٹ 2026",
        "slug": "/education/9th-class-result-2026-bahawalpur-board"
      },
      {
        "en": "9th Class Result 2026 Federal Board",
        "ur": "فیڈرل بورڈ نہم کلاس رزلٹ 2026",
        "slug": "/education/9th-class-result-2026-federal-board"
      },
      {
        "en": "9th Class Result 2026 AJK Mirpur Board",
        "ur": "آزاد کشمیر میرپور بورڈ نہم رزلٹ 2026",
        "slug": "/education/9th-class-result-2026-ajk-mirpur-board"
      },
      {
        "en": "9th Class Result 2026 Peshawar Board",
        "ur": "پشاور بورڈ نہم کلاس رزلٹ 2026",
        "slug": "/education/9th-class-result-2026-peshawar-board"
      },
      {
        "en": "9th Class Result 2026 Abbottabad Board",
        "ur": "ایبٹ آباد بورڈ نہم کلاس رزلٹ 2026",
        "slug": "/education/9th-class-result-2026-abbottabad-board"
      },
      {
        "en": "9th Class Result 2026 Kohat & Bannu Board",
        "ur": "کوہاٹ و بنوں بورڈ نہم رزلٹ 2026",
        "slug": "/education/9th-class-result-2026-kohat-bannu-board"
      },
      {
        "en": "9th Class Result 2026 Malakand Board",
        "ur": "مالاکنڈ بورڈ نہم کلاس رزلٹ 2026",
        "slug": "/education/9th-class-result-2026-malakand-board"
      },
      {
        "en": "9th Class Result 2026 D.I. Khan Board",
        "ur": "ڈی آئی خان بورڈ نہم رزلٹ 2026",
        "slug": "/education/9th-class-result-2026-dikhan-board"
      },
      {
        "en": "9th Class Result 2026 Sindh All Boards",
        "ur": "سندھ بورڈز نہم کلاس رزلٹ 2026",
        "slug": "/education/9th-class-result-2026-sindh-board-general"
      },
      {
        "en": "9th Class Result 2026 Hyderabad Board",
        "ur": "حیدرآباد بورڈ نہم کلاس رزلٹ 2026",
        "slug": "/education/9th-class-result-2026-hyderabad-board"
      },
      {
        "en": "9th Class Result 2026 Sukkur Board",
        "ur": "سکھر بورڈ نہم کلاس رزلٹ 2026",
        "slug": "/education/9th-class-result-2026-sukkur-board"
      },
      {
        "en": "9th Class Result 2026 Larkana Board",
        "ur": "لاڑکانہ بورڈ نہم کلاس رزلٹ 2026",
        "slug": "/education/9th-class-result-2026-larkana-board"
      },
      {
        "en": "9th Class Result 2026 Quetta Board (Hamara Quetta)",
        "ur": "کوئٹہ بورڈ نہم رزلٹ 2026 (ہمارا کوئٹہ)",
        "slug": "/education/9th-class-result-2026-quetta-board"
      },
      {
        "en": "BISE Result Checker 2026 (All Boards)",
        "ur": "تمام بورڈز رزلٹ چیکر 2026",
        "slug": "/education/bise-result-checker-2026"
      },
      {
        "en": "Matric 40% Passing Marks 2026",
        "ur": "میٹرک 40 فیصد پاسنگ مارکس",
        "slug": "/education/matric-40-percent-passing-marks-rule-2026"
      },
      {
        "en": "HEC Blockchain Degree Attestation 2026",
        "ur": "ایچ ای سی بلاک چین ڈگری تصدیق 2026",
        "slug": "/education/hec-degree-attestation-new-blockchain-system-2026"
      },
      {
        "en": "PM Laptop Scheme 2026",
        "ur": "وزیر اعظم لیپ ٹاپ سکیم 2026",
        "slug": "/education/pm-laptop-scheme-2026-eligibility-status-check"
      },
      {
        "en": "CM Punjab E-Bike Scheme 2026",
        "ur": "وزیراعلیٰ پنجاب ای بائیک سکیم 2026",
        "slug": "/education/cm-punjab-e-bike-scheme-2026-eligibility-apply"
      }
    ]
  },
  {
    "id": "bills",
    "slug": "bills",
    "nameEn": "Utility Bills",
    "nameUr": "یوٹیلیٹی بلز",
    "taglineEn": "LESCO, K-Electric, Sui Gas & Complaints",
    "taglineUr": "لیسکو، کے الیکٹرک، سوئی گیس بلز اور شکایات",
    "descriptionEn": "Instant duplicate bill download tools for LESCO, K-Electric, Sui Gas (SNGPL/SSGC), plus official WAPDA electricity complaint numbers.",
    "descriptionUr": "لیسکو، کے الیکٹرک اور سوئی گیس کا آن لائن ڈپلیکیٹ بل دیکھیں اور ڈاؤن لوڈ کریں۔ واٹ ڈا ہیلپ لائن نمبرز اور شکایات در ج کروائیں۔",
    "iconName": "FileText",
    "accentColor": "#B08D57",
    "badgeBg": "bg-doc-brass/10 dark:bg-amber-950/40",
    "badgeText": "text-amber-800 dark:text-amber-300",
    "popularSearches": [
      {
        "en": "Smart Meters (AMI) Pakistan 2026",
        "ur": "اسمارٹ میٹرز (AMI) پاکستان 2026",
        "slug": "/bills/smart-meter-pakistan-price-how-it-works-2026"
      },
      {
        "en": "Net Metering to Net Billing 2026",
        "ur": "نیٹ میٹرنگ تا نیٹ بلنگ 2026",
        "slug": "/bills/net-metering-net-billing-change-2026"
      },
      {
        "en": "Utility Bill Checker 2026",
        "ur": "یوٹیلیٹی بل چیکر 2026",
        "slug": "/bills/utility-bill-checker-2026"
      },
      {
        "en": "FESCO Bill Online Check",
        "ur": "فیسکو آن لائن بل",
        "slug": "/bills/fesco-bill-check-online"
      },
      {
        "en": "LESCO Bill Check",
        "ur": "لیسکو آن لائن بل",
        "slug": "/bills/lesco-bill-check-online"
      },
      {
        "en": "K-Electric Bill Download",
        "ur": "کے الیکٹرک بل ڈاؤن لوڈ",
        "slug": "/bills/k-electric-duplicate-bill"
      },
      {
        "en": "Sui Gas SNGPL & SSGC",
        "ur": "سوئی گیس بل چیک",
        "slug": "/bills/sui-gas-bill-check-online"
      },
      {
        "en": "WASA Lahore Water Bill",
        "ur": "واسا لاہور واٹر بل 2026",
        "slug": "/bills/lahore-water-sewerage-bill-guide-2026"
      },
      {
        "en": "Karachi Water Board (KWSC)",
        "ur": "کراچی واٹر بورڈ بل 2026",
        "slug": "/bills/karachi-water-board-bill-guide-2026"
      },
      {
        "en": "WASA Faisalabad Water Bill",
        "ur": "واسا فیصل آباد واٹر بل 2026",
        "slug": "/bills/faisalabad-water-bill-guide-2026"
      },
      {
        "en": "WAPDA Complaint Tracker",
        "ur": "واپڈا شکایات ٹریکر",
        "slug": "/bills/wapda-complaint-status-tracker-2026"
      }
    ]
  },
  {
    "id": "jobs",
    "slug": "jobs",
    "nameEn": "Jobs Portal",
    "nameUr": "نوکریاں اور ملازمتیں",
    "taglineEn": "Latest Federal & Provincial Govt Vacancies",
    "taglineUr": "سرکاری نوکریاں، پی پی ایس سی اور این ٹی ایس",
    "descriptionEn": "Daily updated announcements for Federal & Provincial government vacancies in Pakistan, PPSC upcoming tests, and NTS job alerts.",
    "descriptionUr": "وفاقی اور صوبائی حکومت کی نئی ملازمتیں، پنجاب پبلک سروس کمیشن (PPSC) اور این ٹی ایس ٹیسٹس کی تازہ ترین معلومات۔",
    "iconName": "Briefcase",
    "accentColor": "#A02334",
    "badgeBg": "bg-doc-seal/10 dark:bg-doc-seal/20",
    "badgeText": "text-doc-seal dark:text-red-300",
    "popularSearches": [
      {
        "en": "Verified Govt Jobs & Scam Alert 2026",
        "ur": "سرکاری نوکریاں اور فراڈ سے بچاؤ 2026",
        "slug": "/jobs/verified-govt-jobs-sources-avoid-scams-2026"
      },
      {
        "en": "FBR Jobs & Careers 2026",
        "ur": "ایف بی آر نوکریاں و کیریئر گائیڈ 2026",
        "slug": "/jobs/fbr-jobs-careers-how-to-apply-2026"
      },
      {
        "en": "BEOE Protector Registration 2026",
        "ur": "پروٹیکٹر رجسٹریشن برائے بیرون ملک",
        "slug": "/jobs/beoe-protector-registration-overseas-employment-2026"
      },
      {
        "en": "BEOE Protector Fee Calculator",
        "ur": "پروٹیکٹر فیس کیلکولیٹر 2026",
        "slug": "/jobs/beoe-protector-fee-calculator-2026"
      },
      {
        "en": "FPSC & PPSC Age Rules 2026",
        "ur": "عمر رعایت و کوٹہ قواعد 2026",
        "slug": "/jobs/fpsc-ppsc-age-relaxation-quota-rules-2026"
      },
      {
        "en": "Roll Number Slip 2026",
        "ur": "رول نمبر سلپ چیکر 2026",
        "slug": "/jobs/roll-number-slip-checker-2026"
      },
      {
        "en": "NTS & PPSC Results 2026",
        "ur": "این ٹی ایس و پی پی ایس سی رزلٹس",
        "slug": "/jobs/nts-result-scorecard-checker-2026"
      },
      {
        "en": "Govt Jobs Pakistan 2026",
        "ur": "سرکاری نوکریاں 2026",
        "slug": "/jobs/latest-govt-jobs-pakistan"
      },
      {
        "en": "NADRA Jobs & Careers 2026",
        "ur": "نادرا نوکریاں اور کیریئر 2026",
        "slug": "/nadra/nadra-jobs-careers-how-to-apply-2026"
      },
      {
        "en": "PPSC Jobs Today",
        "ur": "پی پی ایس سی نئی نوکریاں",
        "slug": "/jobs/ppsc-jobs-2026"
      },
      {
        "en": "FPSC Online Apply",
        "ur": "ایف پی ایس سی آن لائن درخواست",
        "slug": "/jobs/fpsc-online-apply-procedure"
      }
    ]
  },
  {
    "id": "loans",
    "slug": "loans",
    "nameEn": "Govt Loans",
    "nameUr": "سرکاری قرضہ سکیمیں",
    "taglineEn": "Apni Chhat Apna Ghar, PM Youth & Kamyab Jawan",
    "taglineUr": "اپنی چھت اپنا گھر، پی ایم یوتھ اور کامیاب جوان قرضے",
    "descriptionEn": "Verified guides for Government Interest-Free & Micro-Loan Schemes: Apni Chhat Apna Ghar (1.5 Million PKR), PM Youth Business Loan, Mera Ghar Ashiana, and Asaan Karobar.",
    "descriptionUr": "حکومت پاکستان کی بلا سود اور کم شرح سود قرضہ سکیمیں: اپنی چھت اپنا گھر (15 لاکھ روپے)، پرائم منسٹر یوتھ لون، آسان کاروبار اور کامیاب جوان سکیم۔",
    "iconName": "Landmark",
    "accentColor": "#B08D57",
    "badgeBg": "bg-doc-brass/10 dark:bg-amber-950/40",
    "badgeText": "text-amber-800 dark:text-amber-300",
    "popularSearches": [
      {
        "en": "PM Youth Loan Status 2026",
        "ur": "پی ایم یوتھ لون تازہ ترین سٹیٹس",
        "slug": "/loans/kamyab-jawan-pm-youth-loan-current-status-2026"
      },
      {
        "en": "Spot Fake Loan Scams",
        "ur": "جعلی قرضہ اسکیموں سے بچاؤ",
        "slug": "/loans/how-to-spot-fake-loan-scheme-scams-2026"
      },
      {
        "en": "Govt Loan EMI Calculator",
        "ur": "قرضہ قسط کیلکولیٹر 2026",
        "slug": "/loans/emi-calculator-2026"
      },
      {
        "en": "Loan Status Tracker 2026",
        "ur": "لون سٹیٹس ٹریکر 2026",
        "slug": "/loans/loan-application-status-tracker-2026"
      },
      {
        "en": "Apni Chhat Apna Ghar Apply",
        "ur": "اپنی چھت اپنا گھر آن لائن اپلائی",
        "slug": "/loans/apni-chhat-apna-ghar"
      },
      {
        "en": "PM Youth Loan 2026",
        "ur": "پی ایم یوتھ لون سکیم",
        "slug": "/loans/pm-youth-loan-scheme"
      }
    ]
  },
  {
    "id": "welfare",
    "slug": "welfare",
    "nameEn": "Social Welfare & Relief",
    "nameUr": "بے نظیر و احساس پروگرام",
    "taglineEn": "BISP 8171 Portal, PSER Survey, Taleemi Wazaif & Sehat Card",
    "taglineUr": "بی ایس پی 8171 پورٹل، پی ایس ای آر سروے اور کفالت کاؤنٹر",
    "descriptionEn": "Official guidance for BISP 8171 CNIC eligibility check, current Benazir Kafaalat quarterly amount & schedule (check via 8171 portal), PSER Punjab survey, Taleemi Wazaif, Laptop Scheme, and Sehat Card.",
    "descriptionUr": "بے نظیر انکم سپورٹ پروگرام (BISP 8171) آن لائن اہلیت چیک، کفالت قسط، پی ایس ای آر سروے رجسٹریشن، تعلیمی وظائف اور صحت سہولت کارڈ۔",
    "iconName": "HeartHandshake",
    "accentColor": "#A02334",
    "badgeBg": "bg-doc-seal/10 dark:bg-doc-seal/20",
    "badgeText": "text-doc-seal dark:text-red-300",
    "popularSearches": [
      {
        "en": "Ehsaas Rashan Riayat 8123",
        "ur": "احساس راشن رعایت 8123 پورٹل",
        "slug": "/welfare/ehsaas-rashan-riayat-program-8123-2026"
      },
      {
        "en": "EOBI Pension Check by CNIC",
        "ur": "ای او بی آئی پنشن چیک شناختی کارڈ",
        "slug": "/welfare/eobi-pension-check-cnic-2026"
      },
      {
        "en": "PMT Score Explained",
        "ur": "پی ایم ٹی سکور رہنمائی 2026",
        "slug": "/welfare/pmt-score-explained-bisp-eligibility-2026"
      },
      {
        "en": "Sehat Card Eligibility Check",
        "ur": "صحت کارڈ اہلیت چیکر 2026",
        "slug": "/welfare/sehat-card-eligibility-checker-2026"
      },
      {
        "en": "PSER Survey Status 2026",
        "ur": "پی ایس ای آر سروے چیکر 2026",
        "slug": "/welfare/pser-survey-status-checker-2026"
      },
      {
        "en": "BISP 8171 CNIC Check",
        "ur": "بی ایس پی 8171 شناختی کارڈ آن لائن",
        "slug": "/welfare/bisp-eligibility-check-by-cnic"
      },
      {
        "en": "Kafaalat Payment Date",
        "ur": "بینظیر کفالت قسط شیڈول",
        "slug": "/welfare/kafaalat-amount-schedule"
      },
      {
        "en": "Kisan Card Punjab",
        "ur": "کسان کارڈ آن لائن اپلائی",
        "slug": "/welfare/kisan-card-punjab-apply-online"
      }
    ]
  },
  {
    "id": "traffic",
    "slug": "traffic",
    "nameEn": "Traffic & Vehicle Services",
    "nameUr": "ٹریفک و گاڑیوں کی سروسز",
    "taglineEn": "E-Challan Check, Token Tax, Driving License & Transfer",
    "taglineUr": "ای چالان آن لائن، ٹوکن ٹیکس اور ڈرائیونگ لائسنس",
    "descriptionEn": "Online PSCA E-Challan lookup by CNIC & vehicle registration, Excise Token Tax calculator, DLIMS driving license renewals, and vehicle ownership transfer guides.",
    "descriptionUr": "ای چالان آن لائن چیک (پنجاب، سندھ، اسلام آباد)، یکمشت ٹوکن ٹیکس کی ادائیگی، ڈرائیونگ لائسنس رینیول اور گاڑی کی بائے نیم منتقلی کا مکمل گائیڈ۔",
    "iconName": "Car",
    "accentColor": "#1B2A4A",
    "badgeBg": "bg-doc-ink/10 dark:bg-slate-800",
    "badgeText": "text-doc-ink dark:text-slate-200",
    "popularSearches": [
      {
        "en": "Vehicle Ownership Transfer Punjab",
        "ur": "گاڑی ملکیت منتقلی پنجاب 2026",
        "slug": "/traffic/vehicle-ownership-transfer-online-punjab-2026"
      },
      {
        "en": "International Driving Permit (IDP)",
        "ur": "بین الاقوامی ڈرائیونگ پرمٹ 2026",
        "slug": "/traffic/international-driving-permit-pakistan-2026"
      },
      {
        "en": "Driving License Status Check 2026",
        "ur": "ڈرائیونگ لائسنس سٹیٹس آن لائن چیک",
        "slug": "/traffic/driving-license-status-check-online-2026"
      },
      {
        "en": "Arms License Renewal Punjab 2026",
        "ur": "اسلحہ لائسنس رینیول پنجاب 2026",
        "slug": "/traffic/arms-license-renewal-punjab-online-2026"
      },
      {
        "en": "DLIMS Driving License Online 2026",
        "ur": "ڈرائیونگ لائسنس آن لائن رینیول",
        "slug": "/traffic/driving-license-online-apply-renewal-dlims-2026"
      },
      {
        "en": "Challan Paid But Pending",
        "ur": "چالان ادا شدہ مگر پینڈنگ",
        "slug": "/traffic/challan-paid-but-showing-pending-2026"
      },
      {
        "en": "Token Tax Calculator 2026",
        "ur": "ٹوکن ٹیکس کیلکولیٹر 2026",
        "slug": "/traffic/token-tax-calculator-2026"
      },
      {
        "en": "Vehicle Verification MTMIS",
        "ur": "گاڑی کی تصدیق ایم ٹی ایم آئی ایس",
        "slug": "/traffic/vehicle-verification-online-2026"
      },
      {
        "en": "E-Challan Online Check",
        "ur": "ای چالان آن لائن چیک پنجاب",
        "slug": "/traffic/e-challan-check-online"
      },
      {
        "en": "Driving License DLIMS",
        "ur": "ڈرائیونگ لائسنس آن لائن اپلائی",
        "slug": "/traffic/driving-license-guide"
      },
      {
        "en": "Punjab Vehicle Verification 2026",
        "ur": "پنجاب گاڑی تصدیق 2026",
        "slug": "/traffic/punjab-excise-vehicle-verification-2026"
      },
      {
        "en": "Sindh Vehicle Verification 2026",
        "ur": "سندھ گاڑی تصدیق 2026",
        "slug": "/traffic/sindh-excise-vehicle-verification-2026"
      },
      {
        "en": "Islamabad Vehicle Verification 2026",
        "ur": "اسلام آباد گاڑی تصدیق 2026",
        "slug": "/traffic/islamabad-vehicle-verification-2026"
      },
      {
        "en": "M-Tag Registration",
        "ur": "موٹروے ایم ٹیگ رجسٹریشن",
        "slug": "/traffic/m-tag-motorway-registration-one-network"
      }
    ]
  },
  {
    "id": "tax",
    "slug": "tax",
    "nameEn": "Tax & FBR Services",
    "nameUr": "ٹیکس اور ایف بی آر سروسز",
    "taglineEn": "NTN Registration, Filer Status, Iris Portal & Active Taxpayer List",
    "taglineUr": "این ٹی این رجسٹریشن، فائلر سٹیٹس اور انکم ٹیکس گوشوارے",
    "descriptionEn": "Complete guides for FBR online NTN registration, checking active taxpayer list (ATL) status by CNIC, salaried & business tax return filing on Iris 2.0, and withholding tax rates.",
    "descriptionUr": "ایف بی آر آن لائن این ٹی این رجسٹریشن، شناختی کارڈ سے ایکٹو ٹیکس پیئر لسٹ چیک، آئرس پورٹل پر انکم ٹیکس ریٹرن اور فائلر و نان فائلر ٹیکس شرح۔",
    "iconName": "Calculator",
    "accentColor": "#1B2A4A",
    "badgeBg": "bg-doc-ink/10 dark:bg-slate-800",
    "badgeText": "text-doc-ink dark:text-slate-200",
    "popularSearches": [
      {
        "en": "Foreign Remittance Tax 2026",
        "ur": "بیرون ملک ترسیلات زر ٹیکس 2026",
        "slug": "/tax/foreign-remittance-tax-pakistan-overseas-2026"
      },
      {
        "en": "FBR Property Valuation Tables 2026",
        "ur": "ایف بی آر پراپرٹی ویلیوایشن ریٹس 2026",
        "slug": "/tax/fbr-property-valuation-tables-explained-2026"
      },
      {
        "en": "Salaried Tax Calculator 2026",
        "ur": "تنخواہ ٹیکس کیلکولیٹر 2026",
        "slug": "/tax/income-tax-calculator-salaried-2026"
      },
      {
        "en": "File Salaried Tax Return (Iris)",
        "ur": "آئرس پورٹل انکم ٹیکس فائلنگ",
        "slug": "/tax/how-to-file-income-tax-return-salaried-iris-2026"
      },
      {
        "en": "FBR Active Taxpayer Status 2026",
        "ur": "ایکٹو ٹیکس پیئر سٹیٹس 2026",
        "slug": "/tax/fbr-active-taxpayer-status-helper-2026"
      },
      {
        "en": "NTN Registration Online",
        "ur": "این ٹی این آن لائن رجسٹریشن",
        "slug": "/tax/ntn-registration-online-pakistan"
      },
      {
        "en": "FBR Filer Status Check",
        "ur": "ایف بی آر فائلر سٹیٹس چیک",
        "slug": "/tax/fbr-filer-status-check-cnic"
      },
      {
        "en": "How to Become Tax Filer",
        "ur": "ٹیکس فائلر بننے کا طریقہ",
        "slug": "/tax/how-to-become-tax-filer-pakistan-2026"
      },
      {
        "en": "Income Tax Return Guide",
        "ur": "انکم ٹیکس ریٹرن فائلنگ",
        "slug": "/tax/income-tax-return-filing-guide"
      },
      {
        "en": "Withholding Tax Rates 2026",
        "ur": "ودہولڈنگ ٹیکس ریٹس 2026",
        "slug": "/tax/withholding-tax-rates-filers-non-filers"
      }
    ]
  },
  {
    "id": "overseas",
    "slug": "overseas",
    "nameEn": "Overseas Pakistanis Hub",
    "nameUr": "اوورسیز پاکستانیز ڈیسک",
    "taglineEn": "NICOP Renewal, POC Cards, Embassy Attestation & OPF Services",
    "taglineUr": "نائیکوپ تجدید، پی او سی، سفارتخانہ تصدیق اور او پی ایف سروسز",
    "descriptionEn": "Official procedures for overseas Pakistanis: Pak-ID online NICOP renewal, Pakistan Origin Cards (POC), Embassy & MOFA document attestation, and OPF welfare schemes.",
    "descriptionUr": "بیرون ملک مقیم پاکستانیوں کے لیے نائیکوپ آن لائن تجدید، پی او سی کارڈ، سفارتخانے سے دستاویزات کی تصدیق اور او پی ایف فلاحی اسکیمز کی رہنمائی۔",
    "iconName": "Globe",
    "accentColor": "#B08D57",
    "badgeBg": "bg-doc-brass/10 dark:bg-amber-950/40",
    "badgeText": "text-amber-800 dark:text-amber-300",
    "popularSearches": [
      {
        "en": "NICOP Mandatory Rules 2026",
        "ur": "نائیکوپ لازمی سفری قوانین 2026",
        "slug": "/overseas/nicop-mandatory-entry-rules-2026"
      },
      {
        "en": "OPF Overseas Scholarship 2026",
        "ur": "او پی ایف تعلیمی وظائف",
        "slug": "/overseas/opf-scholarship-children-spouses-overseas-pakistanis-2026"
      },
      {
        "en": "NICOP Renewal from Abroad",
        "ur": "بیرون ملک نائیکوپ تجدید",
        "slug": "/overseas/nicop-renewal-from-abroad"
      },
      {
        "en": "POC Card Apply Online",
        "ur": "پی او سی کارڈ آن لائن درخواست",
        "slug": "/overseas/poc-card-pakistan-apply-online"
      },
      {
        "en": "Embassy Attestation Docs",
        "ur": "سفارتخانہ تصدیق کے کاغذات",
        "slug": "/overseas/pakistan-embassy-attestation-documents"
      },
      {
        "en": "NICOP Fee 2026 (USA/UK/Gulf)",
        "ur": "نائیکوپ فیس برائے زون اے و بی",
        "slug": "/overseas/nicop-fee-usa-uk-saudi-uae-2026"
      }
    ]
  },
  {
    "id": "property",
    "slug": "property",
    "nameEn": "Property & Land Mutation",
    "nameUr": "زمین، جائیداد اور انتقال",
    "taglineEn": "PLRA Intiqal, Fard Malkiat, Property Tax & Housing Society NOCs",
    "taglineUr": "پنجاب لینڈ ریکارڈ انتقال، فرد ملکیت اور پراپرٹی ٹیکس",
    "descriptionEn": "Verified guides for Punjab Land Record Authority (PLRA) online Intiqal, checking property mutation by CNIC, computerized Fard download, and e-Stamping Challan 32-A.",
    "descriptionUr": "اراضی ریکارڈ سنٹر کے ذریعے آن لائن انتقال، شناختی کارڈ سے فرد ملکیت، رجسٹری بمقابلہ انتقال کا قانونی فرق اور ای سٹامپ پیپر چالان 32-A۔",
    "iconName": "Building",
    "accentColor": "#A02334",
    "badgeBg": "bg-doc-seal/10 dark:bg-doc-seal/20",
    "badgeText": "text-doc-seal dark:text-red-300",
    "popularSearches": [
      {
        "en": "Property Tax Online Check & Pay 2026",
        "ur": "پراپرٹی ٹیکس آن لائن ادائیگی 2026",
        "slug": "/property/property-tax-online-check-pay-2026"
      },
      {
        "en": "eStamping Citizen Portal (Challan 32-A)",
        "ur": "ای اسٹامپنگ سٹیزن پورٹل (چالان 32-A)",
        "slug": "/property/e-stamping-challan-32a-online-guide-2026"
      },
      {
        "en": "Govt Employee Housing Schemes 2026",
        "ur": "سرکاری ملازمین ہاؤسنگ سکیمز 2026",
        "slug": "/property/government-employee-housing-schemes-pakistan-2026"
      },
      {
        "en": "Punjab Fard Online Verifier 2026",
        "ur": "پنجاب فرد آن لائن چیکر 2026",
        "slug": "/property/punjab-land-record-fard-verifier-2026"
      },
      {
        "en": "Intiqal Online Punjab PLRA",
        "ur": "آن لائن انتقال اراضی پنجاب",
        "slug": "/property/intiqal-registration-online-punjab"
      },
      {
        "en": "Property Mutation Check CNIC",
        "ur": "پراپرٹی انتقال چیک بذریعہ شناختی کارڈ",
        "slug": "/property/property-mutation-check-by-cnic"
      },
      {
        "en": "Patwari Fard Online Check",
        "ur": "پٹوار کمپیوٹرائزڈ فرد آن لائن",
        "slug": "/property/patwari-record-online-check"
      },
      {
        "en": "Property Tax Slabs 2026",
        "ur": "پراپرٹی ٹیکس سلیب 2026",
        "slug": "/property/property-tax-calculator-pakistan-2026"
      },
      {
        "en": "Registry vs Intiqal Difference",
        "ur": "رجسٹری بمقابلہ انتقال فرق",
        "slug": "/property/registry-vs-intiqal-difference"
      }
    ]
  },
  {
    "id": "family-registration",
    "slug": "family-registration",
    "nameEn": "Marriage & Family Registration",
    "nameUr": "نکاح، شادی اور فیملی رجسٹریشن",
    "taglineEn": "Nikah Nama Registration, Marriage Certificates & Talaq / Khula Rules",
    "taglineUr": "نکاح نامہ رجسٹریشن، کمپیوٹرائزڈ شادی سرٹیفکیٹ اور طلاق/خلع قوانین",
    "descriptionEn": "Official Union Council & NADRA procedures for Nikah Nama registration, computerized marriage certificates (MRC), divorce certificates, and English translation attestation.",
    "descriptionUr": "یونین کونسل اور نادرا کا کمپیوٹرائزڈ نکاح نامہ، میرج رجسٹریشن سرٹیفکیٹ (MRC)، طلاق و خلع کا قانونی طریقہ اور وزارت خارجہ تصدیق۔",
    "iconName": "Users",
    "accentColor": "#1B2A4A",
    "badgeBg": "bg-doc-ink/10 dark:bg-slate-800",
    "badgeText": "text-doc-ink dark:text-slate-200",
    "popularSearches": [
      {
        "en": "Nikah Nama vs MRC 2026",
        "ur": "نکاح نامہ بمقابلہ میرج سرٹیفکیٹ",
        "slug": "/family-registration/nikah-nama-vs-marriage-certificate-mrc-2026"
      },
      {
        "en": "Talaq & Khula Legal Process 2026",
        "ur": "طلاق اور خلع کا قانونی طریقہ کار 2026",
        "slug": "/family-registration/talaq-khula-legal-process-pakistan-2026"
      },
      {
        "en": "Nikah Nama Registration",
        "ur": "نکاح نامہ رجسٹریشن کا طریقہ",
        "slug": "/family-registration/nikah-nama-registration-process-pakistan"
      },
      {
        "en": "Union Council Marriage Cert",
        "ur": "یونین کونسل شادی سرٹیفکیٹ",
        "slug": "/family-registration/marriage-certificate-union-council-apply"
      },
      {
        "en": "Divorce Registration Online",
        "ur": "طلاق و خلع رجسٹریشن کا طریقہ",
        "slug": "/family-registration/divorce-registration-pakistan-online"
      },
      {
        "en": "Nikah Nama English MOFA",
        "ur": "نکاح نامہ انگلش ترجمہ و تصدیق",
        "slug": "/family-registration/nikah-nama-english-translation-attestation"
      }
    ]
  },
  {
    "id": "business",
    "slug": "business",
    "nameEn": "Business & SECP Registration",
    "nameUr": "کاروبار اور ایس ای سی پی رجسٹریشن",
    "taglineEn": "SECP Company Formation, Sole Proprietorship, Trade Licenses & PSEB",
    "taglineUr": "کمپنی رجسٹریشن، سول پروپرائیٹر شپ اور ٹریڈ لائسنس",
    "descriptionEn": "Step-by-step corporate registration guides for SECP Private Limited (Pvt Ltd) companies, sole proprietorship NTN, municipal trade licenses, and PSEB freelancer IT incentives.",
    "descriptionUr": "سیکیورٹیز اینڈ ایکسچینج کمیشن (SECP) کمپنی رجسٹریشن، سول پروپرائیٹر ٹیکس نمبر، بلدیاتی ٹریڈ لائسنس اور آئی ٹی کمپنیوں کی پی ایس ای بی رجسٹریشن۔",
    "iconName": "Briefcase",
    "accentColor": "#B08D57",
    "badgeBg": "bg-doc-brass/10 dark:bg-amber-950/40",
    "badgeText": "text-amber-800 dark:text-amber-300",
    "popularSearches": [
      {
        "en": "PSEB Freelancer Registration 2026",
        "ur": "پی ایس ای بی فری لانسر رجسٹریشن",
        "slug": "/business/pseb-freelancer-registration-tax-benefits-2026"
      },
      {
        "en": "SECP Company Name Checker 2026",
        "ur": "ایس ای سی پی کمپنی نام چیکر 2026",
        "slug": "/business/company-name-availability-checker-2026"
      },
      {
        "en": "SECP Company Online 2026",
        "ur": "ایس ای سی پی کمپنی رجسٹریشن 2026",
        "slug": "/business/secp-company-registration-online-2026"
      },
      {
        "en": "Sole Proprietorship NTN",
        "ur": "سول پروپرائیٹر این ٹی این",
        "slug": "/business/sole-proprietorship-ntn-registration"
      },
      {
        "en": "Small Business Registration",
        "ur": "چھوٹے کاروبار کی رجسٹریشن",
        "slug": "/business/how-to-register-small-business-pakistan"
      },
      {
        "en": "Trade License Application",
        "ur": "ٹریڈ لائسنس فارم و فیس",
        "slug": "/business/trade-license-application-guide"
      },
      {
        "en": "IPO Trademark Registration 2026",
        "ur": "ٹریڈ مارک رجسٹریشن پاکستان",
        "slug": "/business/trademark-registration-pakistan-ipo-guide-2026"
      },
      {
        "en": "PSEB Freelancer Tax Exemption",
        "ur": "فری لانسر ٹیکس چھوٹ رجسٹریشن",
        "slug": "/business/pseb-freelancer-it-company-registration"
      }
    ]
  },
  {
    "id": "certificates",
    "slug": "certificates",
    "nameEn": "Birth, Death & Domicile",
    "nameUr": "پیدائش، وفات اور ڈومیسائل",
    "taglineEn": "NADRA Birth Certificates, Domicile Online, PRC & Death Registration",
    "taglineUr": "کمپیوٹرائزڈ پیدائش سرٹیفکیٹ، ڈومیسائل اور ڈیتھ سرٹیفکیٹ",
    "descriptionEn": "Verified guidance for issuing NADRA computerized Birth Certificates, online Domicile certificate applications across Punjab, Sindh & KPK, PRC certificates, and Death reporting.",
    "descriptionUr": "یونین کونسل و نادرا کا پیدائش سرٹیفکیٹ، ڈومیسائل آن لائن اپلائی (پنجاب، سندھ، کے پی کے)، پی آر سی فارم سی اور وفات کا اندراج۔",
    "iconName": "Award",
    "accentColor": "#A02334",
    "badgeBg": "bg-doc-seal/10 dark:bg-doc-seal/20",
    "badgeText": "text-doc-seal dark:text-red-300",
    "popularSearches": [
      {
        "en": "Police Character Certificate 2026",
        "ur": "پولیس کریکٹر سرٹیفکیٹ آن لائن",
        "slug": "/certificates/police-character-certificate-online-apply-2026"
      },
      {
        "en": "Death Certificate Process 2026",
        "ur": "وفات سرٹیفکیٹ نادرا طریقہ 2026",
        "slug": "/certificates/death-certificate-registration-process-2026"
      },
      {
        "en": "Domicile Certificate Online",
        "ur": "ڈومیسائل آن لائن اپلائی",
        "slug": "/certificates/domicile-certificate-apply-online"
      },
      {
        "en": "Birth Certificate Online Apply",
        "ur": "پیدائش سرٹیفکیٹ یونین کونسل",
        "slug": "/certificates/birth-certificate-union-council-online"
      },
      {
        "en": "PCC Tracking Status 2026",
        "ur": "پولیس سرٹیفکیٹ ٹریکنگ",
        "slug": "/certificates/police-character-certificate-tracking-status-2026"
      },
      {
        "en": "PRC Certificate Sindh / Punjab",
        "ur": "پی آر سی سرٹیفکیٹ فارم",
        "slug": "/certificates/prc-permanent-residence-certificate-pakistan"
      },
      {
        "en": "Succession Certificate Guide",
        "ur": "جانشینی سرٹیفکیٹ نادرا",
        "slug": "/certificates/succession-certificate-nadra-legal-heirs"
      }
    ]
  },
  {
    "id": "hajj-umrah",
    "slug": "hajj-umrah",
    "nameEn": "Hajj & Umrah Services",
    "nameUr": "حج و عمرہ رہنمائی ڈیسک",
    "taglineEn": "MORA Hajj Application, Nusuk Umrah Visa, Balloting & Medical Fitness",
    "taglineUr": "حج درخواست پورٹل، نسک عمرہ ویزا اور قرعہ اندازی رزلٹ",
    "descriptionEn": "Ministry of Religious Affairs (MORA) Government Hajj registration, Nusuk online Umrah visa application steps, Hajj balloting result check by CNIC, and mandatory vaccination rules.",
    "descriptionUr": "وزارت مذہبی امور کی سرکاری حج اسکیم رجسٹریشن، نسک پورٹل سے عمرہ ویزا، شناختی کارڈ سے حج قرعہ اندازی رزلٹ اور پولیو/میننجائٹس ویکسینیشن۔",
    "iconName": "Compass",
    "accentColor": "#B08D57",
    "badgeBg": "bg-doc-brass/10 dark:bg-amber-950/40",
    "badgeText": "text-amber-800 dark:text-amber-300",
    "popularSearches": [
      {
        "en": "Nusuk App Umrah Guide 2026",
        "ur": "نسک ایپ عمرہ رہنمائی 2026",
        "slug": "/hajj-umrah/nusuk-app-guide-pakistani-pilgrims-2026"
      },
      {
        "en": "Zakat Calculator 2026",
        "ur": "زکوٰۃ کیلکولیٹر 2026",
        "slug": "/hajj-umrah/zakat-calculator-2026"
      },
      {
        "en": "Hajj Eligibility & Cost 2026",
        "ur": "حج اہلیت و اخراجات 2026",
        "slug": "/hajj-umrah/hajj-application-eligibility-checker-2026"
      },
      {
        "en": "Hajj Portal Pakistan 2026",
        "ur": "حج رجسٹریشن پورٹل 2026",
        "slug": "/hajj-umrah/hajj-registration-portal-pakistan-2026"
      },
      {
        "en": "Umrah Visa Apply from PK",
        "ur": "پاکستان سے عمرہ ویزا اپلائی",
        "slug": "/hajj-umrah/umrah-visa-apply-from-pakistan-steps"
      },
      {
        "en": "Hajj Balloting Result CNIC",
        "ur": "حج قرعہ اندازی رزلٹ چیک",
        "slug": "/hajj-umrah/hajj-balloting-result-check-online"
      },
      {
        "en": "Govt vs Private Umrah Cost",
        "ur": "سرکاری بمقابلہ پرائیویٹ عمرہ پیکیج",
        "slug": "/hajj-umrah/umrah-package-government-vs-private"
      },
      {
        "en": "Hajj Medical Fitness Test",
        "ur": "حج میڈیکل فٹنس اور ویکسین",
        "slug": "/hajj-umrah/hajj-mandatory-vaccination-medical-fitness"
      }
    ]
  },
  {
    "id": "health",
    "slug": "health",
    "nameEn": "Health & Sehat Card Hub",
    "nameUr": "صحت سہولت و ہسپتال ڈائریکٹری",
    "taglineEn": "Sehat Card Hospital List, Treatment Limits, CNIC Check & Medical Boards",
    "taglineUr": "صحت کارڈ ہسپتال لسٹ، 10 لاکھ علاج حد اور اہلیت چیک",
    "descriptionEn": "Comprehensive guide for Sehat Sahulat Card: check eligibility via 8500 SMS, 1,000,000 PKR annual indoor treatment limits, panel hospital search, and disability certificates.",
    "descriptionUr": "صحت سہولت پروگرام کی مکمل تفصیلات: 8500 ایس ایم ایس سے اہلیت معلوم کریں، پینل ہسپتالوں کی فہرست، 10 لاکھ تک مفت علاج اور میڈیکل بورڈ سرٹیفکیٹ۔",
    "iconName": "Activity",
    "accentColor": "#A02334",
    "badgeBg": "bg-doc-seal/10 dark:bg-doc-seal/20",
    "badgeText": "text-doc-seal dark:text-red-300",
    "popularSearches": [
      {
        "en": "Sehat Card Hospitals Lahore 2026",
        "ur": "صحت کارڈ ہسپتال لسٹ لاہور 2026",
        "slug": "/health/sehat-card-hospital-list-lahore-2026"
      },
      {
        "en": "Disability Certificate & Special CNIC",
        "ur": "معذوری سرٹیفکیٹ و نادرا کارڈ",
        "slug": "/health/disability-certificate-special-cnic-apply-2026"
      },
      {
        "en": "Sehat Card Province Status 2026",
        "ur": "صحت کارڈ صوبائی سٹیٹس 2026",
        "slug": "/health/sehat-card-active-status-by-province-2026"
      },
      {
        "en": "Sehat Card Check by CNIC",
        "ur": "صحت کارڈ اہلیت شناختی کارڈ سے",
        "slug": "/health/sehat-card-eligibility-check-by-cnic"
      },
      {
        "en": "Panel Hospital List Near Me",
        "ur": "پینل ہسپتالوں کی مکمل فہرست",
        "slug": "/health/sehat-card-hospital-list-near-me"
      },
      {
        "en": "Sehat Card Treatment Limit",
        "ur": "صحت کارڈ مفت علاج حد 2026",
        "slug": "/health/sehat-card-treatment-limit-2026"
      },
      {
        "en": "Apply for Sehat Sahulat Card",
        "ur": "صحت کارڈ میں فیملی کا اندراج",
        "slug": "/health/how-to-apply-for-sehat-sahulat-card"
      }
    ]
  },
  {
    "id": "legal",
    "slug": "legal",
    "nameEn": "Police & Legal Services",
    "nameUr": "پولیس، ایف آئی آر اور قانونی سروسز",
    "taglineEn": "Online FIR Registration, Police Character Certificate (PCC) & PKM Centers",
    "taglineUr": "آن لائن ایف آئی آر، پولیس کریکٹر سرٹیفکیٹ اور خدمت مرکز",
    "descriptionEn": "Official police portals and court guidelines: Punjab Police 1787 online FIR complaints, Police Character Certificate (PCC) for visas, PKM services, and Power of Attorney.",
    "descriptionUr": "پنجاب پولیس آن لائن ایف آئی آر اندراج (1787)، غیر ملکی ویزا کے لیے پولیس کریکٹر سرٹیفکیٹ (PCC)، پولیس خدمت مرکز اور قانونی مختار نامہ۔",
    "iconName": "Scale",
    "accentColor": "#1B2A4A",
    "badgeBg": "bg-doc-ink/10 dark:bg-slate-800",
    "badgeText": "text-doc-ink dark:text-slate-200",
    "popularSearches": [
      {
        "en": "Get Certified FIR Copy 2026",
        "ur": "مصدقہ ایف آئی آر کاپی حاصل کریں 2026",
        "slug": "/legal/how-to-get-fir-copy-online-pakistan-2026"
      },
      {
        "en": "Tenant Police Verification 2026",
        "ur": "کرایہ دار پولیس تصدیق 2026",
        "slug": "/legal/tenant-police-verification-online-2026"
      },
      {
        "en": "Anti-Encroachment Complaint 2026",
        "ur": "تجاوزات کے خلاف شکایت 2026",
        "slug": "/legal/anti-encroachment-complaint-tribunal-pakistan-2026"
      },
      {
        "en": "Suthra Punjab Anti-Littering Fines 2026",
        "ur": "ستھرا پنجاب اینٹی لٹرنگ سکواڈ و جرمانے",
        "slug": "/legal/suthra-punjab-anti-littering-squad-fines-explained-2026"
      },
      {
        "en": "RTI Act Pakistan How to File 2026",
        "ur": "حق معلومات ایکٹ درخواست طریقہ 2026",
        "slug": "/legal/right-to-information-act-pakistan-how-to-file-2026"
      },
      {
        "en": "Consumer Court Complaint 2026",
        "ur": "کنزیومر کورٹ شکایت کا طریقہ 2026",
        "slug": "/legal/consumer-court-complaint-how-to-file-pakistan-2026"
      },
      {
        "en": "Succession Certificate NADRA 2026",
        "ur": "جانشینی سرٹیفکیٹ نادرا 2026",
        "slug": "/legal/succession-certificate-legal-heir-nadra-2026"
      },
      {
        "en": "Power of Attorney Online 2026",
        "ur": "آن لائن پاور آف اٹارنی",
        "slug": "/legal/power-of-attorney-online-overseas-pakistanis-2026"
      },
      {
        "en": "Online FIR Punjab Police 1787",
        "ur": "آن لائن ایف آئی آر اندراج",
        "slug": "/legal/online-fir-registration-punjab-police"
      },
      {
        "en": "Check FIR Status Online",
        "ur": "ایف آئی آر کا آن لائن سٹیٹس",
        "slug": "/legal/how-to-check-fir-status-online"
      },
      {
        "en": "Legal Heir Declaration (Wirasat)",
        "ur": "وراثت نامہ و جانشینی ڈیکلریشن",
        "slug": "/legal/legal-heir-certificate-nadra-court"
      },
      {
        "en": "Police Khidmat Markaz 2026",
        "ur": "پولیس خدمت مرکز 14 سہولیات 2026",
        "slug": "/legal/police-khidmat-markaz-services-guide-2026"
      },
      {
        "en": "CCD Punjab Police 2026",
        "ur": "کرائم کنٹرول ڈیپارٹمنٹ پنجاب",
        "slug": "/legal/crime-control-department-ccd-punjab-explained-2026"
      }
    ]
  },
  {
    "id": "alerts",
    "slug": "alerts",
    "nameEn": "Disaster & Emergency Alerts",
    "nameUr": "قدرتی آفات اور ہنگامی الرٹس",
    "taglineEn": "NDMA Flood Alerts, Monsoon Warnings, Disaster Relief & 1122 Helplines",
    "taglineUr": "سیلاب الرٹ، مون سون الرٹس اور ایمرجنسی ہیلپ لائن 1122",
    "descriptionEn": "Live disaster tracking and safety advisories: National Disaster Management Authority (NDMA) flood alerts, PMD monsoon rainfall forecasts, and 24/7 rescue helpline directories.",
    "descriptionUr": "این ڈی ایم اے سیلاب و بارشوں کے الرٹس، مون سون وارننگ، قدرتی آفات ریلیف فنڈ رجسٹریشن اور 24 گھنٹے ہنگامی ہیلپ لائن نمبرز (ریسکیو 1122، ایدھی 115)۔",
    "iconName": "CloudLightning",
    "accentColor": "#A02334",
    "badgeBg": "bg-doc-seal/10 dark:bg-doc-seal/20",
    "badgeText": "text-doc-seal dark:text-red-300",
    "popularSearches": [
      {
        "en": "Emergency Helpline Directory 2026",
        "ur": "ہنگامی ہیلپ لائنز ڈائریکٹری 2026",
        "slug": "/alerts/pakistan-emergency-helpline-numbers-directory-2026"
      },
      {
        "en": "NDMA Disaster Alert Setup 2026",
        "ur": "این ڈی ایم اے الرٹس سیٹ اپ 2026",
        "slug": "/alerts/ndma-flood-earthquake-sms-alert-setup-2026"
      },
      {
        "en": "Flood Alert NDMA / PDMA",
        "ur": "سیلاب و دریاؤں کا تازہ ترین الرٹ",
        "slug": "/alerts/flood-alert-pakistan-ndma-pdma"
      },
      {
        "en": "Monsoon Rain Emergency Warning",
        "ur": "مون سون طوفانی بارشوں کی پیشگوئی",
        "slug": "/alerts/monsoon-warning-pdma-updates"
      },
      {
        "en": "NDMA Relief Compensation",
        "ur": "نقصانات کا ریلیف معاوضہ فارم",
        "slug": "/alerts/ndma-disaster-relief-compensation-registration"
      },
      {
        "en": "24/7 Emergency Helplines",
        "ur": "پاکستان کے تمام ایمرجنسی نمبرز",
        "slug": "/alerts/emergency-helpline-numbers-pakistan"
      }
    ]
  },
  {
    "id": "mobile-pta",
    "slug": "mobile-pta",
    "nameEn": "Mobile & PTA Services",
    "nameUr": "موبائل و پی ٹی اے سروسز",
    "taglineEn": "PTA Mobile Tax, DIRBS IMEI Status & SIM Verification",
    "taglineUr": "پی ٹی اے موبائل ٹیکس، آئی ایم ای آئی تصدیق اور سم ویریفیکیشن",
    "descriptionEn": "Official step-by-step guides and online tools for PTA DIRBS mobile device registration, Customs duty tax calculation for iPhones & Android (Passport vs CNIC), IMEI status verification (8484 SMS), and SIM information rules in Pakistan.",
    "descriptionUr": "پی ٹی اے موبائل ٹیکس کیلکولیٹر، آئی ایم ای آئی رجسٹریشن چیک (8484)، اوورسیز 120 دن عارضی رجسٹریشن اور سم معلومات سسٹم کی مصدقہ رہنمائی۔",
    "iconName": "Smartphone",
    "accentColor": "#1B2A4A",
    "badgeBg": "bg-doc-ink/10 dark:bg-slate-800",
    "badgeText": "text-doc-ink dark:text-slate-200",
    "popularSearches": [
      {
        "en": "PTA Mobile Registration (12.1k/mo)",
        "ur": "پی ٹی اے موبائل رجسٹریشن گائیڈ",
        "slug": "/mobile-pta/pta-mobile-registration-guide-2026"
      },
      {
        "en": "PTA Mobile Tax Check Online",
        "ur": "پی ٹی اے ٹیکس چیک آن لائن",
        "slug": "/mobile-pta/pta-mobile-tax-check-online"
      },
      {
        "en": "PTA Mobile IMEI Check (8484)",
        "ur": "آئی ایم ای آئی تصدیق 8484",
        "slug": "/mobile-pta/pta-mobile-imei-check"
      },
      {
        "en": "SIM Information System (*8888#)",
        "ur": "سم معلومات سسٹم گائیڈ",
        "slug": "/mobile-pta/sim-information-system-guide"
      },
      {
        "en": "Overseas 120-Day Temporary Registration",
        "ur": "اوورسیز 120 دن عارضی رجسٹریشن",
        "slug": "/mobile-pta/overseas-temporary-registration-120-days-2026"
      }
    ]
  },
  {
    "id": "pakistan-post",
    "slug": "pakistan-post",
    "nameEn": "Pakistan Post",
    "nameUr": "پاکستان پوسٹ",
    "taglineEn": "UMS Parcel Tracking, GPO Directory & Postal Tariffs",
    "taglineUr": "یو ایم ایس پارسل ٹریکنگ، جی پی او ڈائریکٹری اور ڈاک کی خدمات",
    "descriptionEn": "Official tracking tools and public guides for Pakistan Post: Track domestic Urgent Mail Service (UMS) and international EMS parcels (ep.gov.pk), find nearest General Post Offices (GPOs), lookup 5-digit postal codes, and calculate postage rates.",
    "descriptionUr": "پاکستان پوسٹ یو ایم ایس پارسل ٹریکنگ (ep.gov.pk)، جی پی او برانچ لوکیشنز، 5 ہندسوں کے پوسٹل کوڈز اور ڈاک کے سرکاری ریٹس کی مکمل رہنمائی۔",
    "iconName": "Mail",
    "accentColor": "#C59B27",
    "badgeBg": "bg-doc-brass/10 dark:bg-amber-950/40",
    "badgeText": "text-doc-brass dark:text-amber-300",
    "popularSearches": [
      {
        "en": "Pakistan Post Tracking (90.5k/mo)",
        "ur": "پاکستان پوسٹ ٹریکنگ",
        "slug": "/pakistan-post/tracking-2026"
      },
      {
        "en": "Pakistan Post Guide (135k/mo)",
        "ur": "پاکستان پوسٹ سروسز گائیڈ",
        "slug": "/pakistan-post/overview-guide-2026"
      },
      {
        "en": "Post Office Near Me (GPO) (27.1k/mo)",
        "ur": "قریبی ڈاکخانہ و جی پی او",
        "slug": "/pakistan-post/post-office-locator-2026"
      }
    ]
  },
  {
    "id": "finance",
    "slug": "finance",
    "nameEn": "Banking & Financial Services",
    "nameUr": "بینکنگ و مالیاتی سروسز",
    "taglineEn": "Online Account Opening, IBAN Verification, Raast & Digital Banking",
    "taglineUr": "آن لائن بینک اکاؤنٹ، آئی بی اے این تصدیق اور راست ڈیجیٹل سروسز",
    "descriptionEn": "State Bank of Pakistan (SBP) verified guidelines for online bank account opening, Asaan Digital Accounts, biometric video KYC, ISO 13616 IBAN format validation, and interbank transfers.",
    "descriptionUr": "اسٹیٹ بینک آف پاکستان کے منظور شدہ قواعد کے مطابق آن لائن بینک اکاؤنٹ کھولنے، آسان ڈیجیٹل اکاؤنٹ، بائیومیٹرک تصدیق اور 24 ہندسوں کے آئی بی اے این کی درستی جانچنے کی مکمل گائیڈ۔",
    "iconName": "Landmark",
    "accentColor": "#1B2A4A",
    "badgeBg": "bg-doc-ink/10 dark:bg-slate-800",
    "badgeText": "text-doc-ink dark:text-slate-200",
    "popularSearches": [
      {
        "en": "Pakistan IBAN Validator 2026",
        "ur": "آئی بی اے این ویلیڈیٹر 2026",
        "slug": "/finance/pakistan-iban-number-check-validator-2026"
      },
      {
        "en": "Open Bank Account Online 2026",
        "ur": "آن لائن بینک اکاؤنٹ کھولنے کا طریقہ",
        "slug": "/finance/how-to-open-bank-account-online-pakistan-2026"
      },
      {
        "en": "Roshan Digital Account (RDA) 2026",
        "ur": "روشن ڈیجیٹل اکاؤنٹ اہلیت و اپلائی 2026",
        "slug": "/finance/roshan-digital-account-2026-eligibility-apply"
      }
    ]
  }
];
