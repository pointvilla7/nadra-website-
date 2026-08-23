export interface ChecklistCriterion {
  id: string;
  questionEn: string;
  questionUr: string;
  isMandatory: boolean;
}

export interface EligibilityProgram {
  id: string;
  titleEn: string;
  titleUr: string;
  category: string;
  descriptionEn: string;
  descriptionUr: string;
  criteria: ChecklistCriterion[];
  eligibleMessageEn: string;
  eligibleMessageUr: string;
  nextStepUrl: string;
  nextStepTextEn: string;
  nextStepTextUr: string;
}

export const ELIGIBILITY_PROGRAMS: Record<string, EligibilityProgram> = {
  'bisp-8171': {
    id: 'bisp-8171',
    titleEn: 'BISP 8171 Benazir Kafaalat Eligibility Check',
    titleUr: 'بے نظیر کفالت 8171 اہلیت پڑتال',
    category: 'Welfare',
    descriptionEn: 'Check if your household qualifies for the current Benazir Kafaalat quarterly cash grant (check via 8171 portal) and Taleemi Wazaif.',
    descriptionUr: 'جانئیے کہ کیا آپ کا گھرانہ بے نظیر کفالت کی سہ ماہی قسط (8171 پورٹل سے تصدیق) اور تعلیمی وظائف کا مستحق ہے۔',
    criteria: [
      {
        id: 'female_head',
        questionEn: 'Is the applicant a female citizen with a valid NADRA CNIC?',
        questionUr: 'کیا درخواست دہندہ درست نادرا شناختی کارڈ کے ساتھ خاتون شہری ہیں؟',
        isMandatory: true,
      },
      {
        id: 'income_limit',
        questionEn: 'Is the total monthly household income under PKR 60,000?',
        questionUr: 'کیا گھرانے کی کل ماہانہ آمدن 60,000 روپے سے کم ہے؟',
        isMandatory: true,
      },
      {
        id: 'no_govt_job',
        questionEn: 'Are all household members free from federal or provincial government employment?',
        questionUr: 'کیا گھر کا کوئی بھی فرد سرکاری یا نیم سرکاری ملازم نہیں ہے؟',
        isMandatory: true,
      },
      {
        id: 'nser_survey',
        questionEn: 'Has your household completed or registered for the NSER PSER survey?',
        questionUr: 'کیا آپ کے گھرانے نے NSER یا PSER کا ڈینامک سروے کروایا ہے؟',
        isMandatory: false,
      },
    ],
    eligibleMessageEn: 'You meet the core criteria for BISP 8171 Benazir Kafaalat! Verify your CNIC on the official 8171 web portal or send your CNIC via SMS to 8171.',
    eligibleMessageUr: 'آپ بے نظیر کفالت 8171 کی بنیادی شرائط پر پورا اترتے ہیں۔ 8171 پر ایس ایم ایس بھیج کر یا ویب پورٹل سے حتمی تصدیق کریں۔',
    nextStepUrl: 'https://8171.bisp.gov.pk/',
    nextStepTextEn: 'Verify CNIC on Official 8171 Web Portal',
    nextStepTextUr: 'آفیشل 8171 ویب پورٹل پر شناختی کارڈ تصدیق کریں',
  },
  'apni-chhat-loan': {
    id: 'apni-chhat-loan',
    titleEn: 'Apni Chhat Apna Ghar Housing Scheme Eligibility',
    titleUr: 'اپنی چھت اپنا گھر سکیم اہلیت پڑتال',
    category: 'Loans',
    descriptionEn: 'Check eligibility for Chief Minister Punjab interest-free housing loan up to PKR 1.5 Million.',
    descriptionUr: 'وزیراعلیٰ پنجاب کی 15 لاکھ روپے تک بلا سود ہاؤسنگ لون سکیم کی اہلیت چیک کریں۔',
    criteria: [
      {
        id: 'punjab_residence',
        questionEn: 'Is the applicant a permanent resident of Punjab holding a valid CNIC?',
        questionUr: 'کیا درخواست دہندہ پنجاب کا مستقل رہائشی ہے؟',
        isMandatory: true,
      },
      {
        id: 'land_ownership',
        questionEn: 'Do you own land up to 5 Marla in urban areas or 10 Marla in rural areas?',
        questionUr: 'کیا آپ شہری علاقے میں 5 مرلہ یا دیہی علاقے میں 10 مرلہ تک زمین کے مالک ہیں؟',
        isMandatory: true,
      },
      {
        id: 'monthly_income',
        questionEn: 'Is your monthly personal/household income below PKR 50,000?',
        questionUr: 'کیا آپ کی ماہانہ آمدن 50,000 روپے سے کم ہے؟',
        isMandatory: true,
      },
      {
        id: 'clean_credit',
        questionEn: 'Are you free from any financial bank default or criminal record?',
        questionUr: 'کیا آپ کسی بھی بینکنگ ڈیفالٹ یا سنگین مقدمے سے پاک ہیں؟',
        isMandatory: true,
      },
    ],
    eligibleMessageEn: 'Congratulations! You qualify for the Apni Chhat Apna Ghar interest-free housing loan scheme. Apply online on the official PITB portal.',
    eligibleMessageUr: 'مبارک ہو! آپ اپنی چھت اپنا گھر سکیم کے اہل ہیں۔ آن لائن پورٹل پر درسی فارم جمع کروائیں۔',
    nextStepUrl: 'https://acag.punjab.gov.pk/',
    nextStepTextEn: 'Apply Online on Punjab ACA Portal',
    nextStepTextUr: 'پنجاب اے سی اے پورٹل پر آن لائن اپلائی کریں',
  },
  'hec-scholarships': {
    id: 'hec-scholarships',
    titleEn: 'HEC Need-Based & Ehsaas Undergraduate Scholarship Check',
    titleUr: 'ایچ ای سی و احساس سکالرشپ اہلیت پڑتال',
    category: 'Education',
    descriptionEn: 'Verify eligibility for HEC fully-funded undergraduate & postgraduate scholarships in Pakistan.',
    descriptionUr: 'ایچ ای سی کی تعلیمی سکالرشپ کے لیے اپنی اہلیت کی جانچ کریں۔',
    criteria: [
      {
        id: 'public_uni',
        questionEn: 'Are you currently enrolled in an HEC-recognized public sector university?',
        questionUr: 'کیا آپ ایچ ای سی سے منظور شدہ سرکاری یونیورسٹی کے طالب علم ہیں؟',
        isMandatory: true,
      },
      {
        id: 'gpa_threshold',
        questionEn: 'Do you maintain a minimum 2.50 CGPA or 60% marks in previous examinations?',
        questionUr: 'کیا آپ کے گزشتہ امتحانات میں کم از کم 60 فیصد نمبرز یا 2.50 جی پی اے ہے؟',
        isMandatory: true,
      },
      {
        id: 'family_income',
        questionEn: 'Is your total monthly family income under PKR 75,000?',
        questionUr: 'کیا آپ کی کل خاندانی آمدن 75,000 روپے سے کم ہے؟',
        isMandatory: true,
      },
    ],
    eligibleMessageEn: 'You satisfy HEC Need-Based Scholarship requirements. Create your student account on the official HEC E-Services portal.',
    eligibleMessageUr: 'آپ ایچ ای سی سکالرشپ کے اہل ہیں۔ آن لائن E-Services پورٹل پر اپلائی کریں۔',
    nextStepUrl: 'https://scholarship.hec.gov.pk/',
    nextStepTextEn: 'Apply on HEC E-Services Portal',
    nextStepTextUr: 'ایچ ای سی ای سروسز پورٹل پر آن لائن اپلائی کریں',
  },
};
