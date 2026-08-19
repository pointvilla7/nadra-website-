export interface Author {
  slug: string;
  name: string;
  role: string;
  credentials: string;
  bioEn: string;
  bioUr: string;
  specialization: string;
  email?: string;
}

export const AUTHORS: Record<string, Author> = {
  'muhammad-tariq-khan': {
    slug: 'muhammad-tariq-khan',
    name: 'Muhammad Tariq Khan',
    role: 'Editor-in-Chief & Senior Civic Policy Researcher',
    credentials: 'Ex-Senior Administrative Analyst (Islamabad Bureau)',
    bioEn: 'Muhammad Tariq Khan leads public policy research at Pakistan Info Hub, specializing in NADRA regulations, passport desk procedures, and federal digital infrastructure policies with over 12 years of administrative analysis experience.',
    bioUr: 'محمد طارق خان پبلک پالیسی محقق اور پاکستان انفو ہب کے چیف ایڈیٹر ہیں۔ وہ نادرا، پاسپورٹ اور وفاقی حکومتی قواعد کے ماہر ہیں۔',
    specialization: 'NADRA, Passports & Federal Commission Testing',
    email: 'tariq.khan@pakistaninfohub.com',
  },
  'syeda-fatima-zahra': {
    slug: 'syeda-fatima-zahra',
    name: 'Syeda Fatima Zahra',
    role: 'Social Welfare & BISP Verification Lead',
    credentials: 'M.Sc. Public Administration & Social Governance',
    bioEn: 'Syeda Fatima Zahra oversees social protection research, tracking Benazir Income Support Programme (BISP 8171), NSER socio-economic surveys, and educational scholarships across Pakistan.',
    bioUr: 'سیدہ فاطمہ زہرا سوشل پروٹیکشن اور بے نظیر انکم سپورٹ پروگرام (8171) کی مصدقہ معلومات کی سربراہ ہیں۔',
    specialization: 'Social Welfare, BISP 8171 & Education Boards',
    email: 'fatima.zahra@pakistaninfohub.com',
  },
  'usman-ali-raza': {
    slug: 'usman-ali-raza',
    name: 'Usman Ali Raza',
    role: 'Financial & Loan Scheme Desk Lead',
    credentials: 'MBA Finance, Certified Policy Auditor',
    bioEn: 'Usman Ali Raza manages financial policy analysis, calculating government subsidized loan schedules (Apni Chhat Apna Ghar, PM Youth Scheme) and NEPRA electricity tariff regulations.',
    bioUr: 'عثمان علی رضا فنانشل پالیسی اور حکومتی بلا سود قرضہ اسکیموں کے سینئر تجزیہ کار ہیں۔',
    specialization: 'Government Loans, Utility Tariffs & Traffic Portals',
    email: 'usman.raza@pakistaninfohub.com',
  },
};

export const getAuthorBySlug = (slug: string): Author => {
  return AUTHORS[slug] || AUTHORS['muhammad-tariq-khan'];
};

export const getAuthorForCategory = (categoryId: string): Author => {
  switch (categoryId) {
    case 'welfare':
    case 'education':
    case 'health':
    case 'family-registration':
    case 'alerts':
      return AUTHORS['syeda-fatima-zahra'];
    case 'loans':
    case 'bills':
    case 'traffic':
    case 'tax':
    case 'business':
    case 'property':
      return AUTHORS['usman-ali-raza'];
    case 'nadra':
    case 'passport':
    case 'jobs':
    case 'overseas':
    case 'certificates':
    case 'hajj-umrah':
    case 'legal':
    default:
      return AUTHORS['muhammad-tariq-khan'];
  }
};
