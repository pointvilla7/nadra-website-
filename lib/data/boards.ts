export interface EducationBoard {
  id: string;
  nameEn: string;
  nameUr: string;
  province: string;
  officialWebsite: string;
  resultUrl: string;
}

export const EDUCATION_BOARDS: EducationBoard[] = [
  {
    id: 'bise-lahore',
    nameEn: 'BISE Lahore Board',
    nameUr: 'بورڈ آف انٹرمیڈیٹ اینڈ سیکنڈری ایجوکیشن لاہور',
    province: 'Punjab',
    officialWebsite: 'https://biselahore.com',
    resultUrl: 'https://result.biselahore.com',
  },
  {
    id: 'fbise-islamabad',
    nameEn: 'Federal Board (FBISE) Islamabad',
    nameUr: 'فیڈرل بورڈ اسلام آباد',
    province: 'Federal',
    officialWebsite: 'https://fbise.edu.pk',
    resultUrl: 'https://fbise.edu.pk/result-main.php',
  },
  {
    id: 'bise-rawalpindi',
    nameEn: 'BISE Rawalpindi Board',
    nameUr: 'بورڈ آف انٹرمیڈیٹ اینڈ سیکنڈری ایجوکیشن راولپنڈی',
    province: 'Punjab',
    officialWebsite: 'https://biserawalpindi.edu.pk',
    resultUrl: 'https://biserawalpindi.edu.pk',
  },
  {
    id: 'bise-multan',
    nameEn: 'BISE Multan Board',
    nameUr: 'بورڈ آف انٹرمیڈیٹ اینڈ سیکنڈری ایجوکیشن ملتان',
    province: 'Punjab',
    officialWebsite: 'https://bisemultan.edu.pk',
    resultUrl: 'https://bisemultan.edu.pk',
  },
  {
    id: 'bise-gujranwala',
    nameEn: 'BISE Gujranwala Board',
    nameUr: 'بورڈ آف انٹرمیڈیٹ اینڈ سیکنڈری ایجوکیشن گجرانوالہ',
    province: 'Punjab',
    officialWebsite: 'https://bisegrw.edu.pk',
    resultUrl: 'https://bisegrw.edu.pk',
  },
  {
    id: 'bise-faisalabad',
    nameEn: 'BISE Faisalabad Board',
    nameUr: 'بورڈ آف انٹرمیڈیٹ اینڈ سیکنڈری ایجوکیشن فیصل آباد',
    province: 'Punjab',
    officialWebsite: 'https://bisefsd.edu.pk',
    resultUrl: 'https://bisefsd.edu.pk',
  },
  {
    id: 'bise-karachi',
    nameEn: 'BSEK / BIEK Karachi',
    nameUr: 'تعلیمی بورڈ کراچی',
    province: 'Sindh',
    officialWebsite: 'https://bsek.edu.pk',
    resultUrl: 'https://biek.edu.pk',
  },
  {
    id: 'bise-peshawar',
    nameEn: 'BISE Peshawar Board',
    nameUr: 'بورڈ آف انٹرمیڈیٹ اینڈ سیکنڈری ایجوکیشن پشاور',
    province: 'KPK',
    officialWebsite: 'https://bisep.edu.pk',
    resultUrl: 'https://bisep.edu.pk',
  },
];
