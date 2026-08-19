export interface BillProvider {
  id: string;
  nameEn: string;
  nameUr: string;
  code: string;
  refDigitLength: number;
  sampleRef: string;
  helpline: string;
  officialPortalUrl: string;
  descriptionEn: string;
  descriptionUr: string;
}

export const BILL_PROVIDERS: Record<string, BillProvider> = {
  lesco: {
    id: 'lesco',
    nameEn: 'LESCO (Lahore Electric Supply Company)',
    nameUr: 'لیسکو (لاہور الیکٹرک سپلائی کمپنی)',
    code: 'LESCO',
    refDigitLength: 14,
    sampleRef: '14112345678901',
    helpline: '118 or 0800-00118',
    officialPortalUrl: 'http://bill.pitc.com.pk/lescobill/',
    descriptionEn: 'Official PITC portal for LESCO duplicate electricity bills using your 14-digit Reference Number.',
    descriptionUr: 'لیسکو بجلی کا ڈپلیکیٹ بل حاصل کرنے کے لیے آفیشل PITC پورٹل پر 14 ہندسوں والا ریفرنس نمبر درج کریں۔',
  },
  kelectric: {
    id: 'kelectric',
    nameEn: 'K-Electric (Karachi)',
    nameUr: 'کے الیکٹرک (کراچی)',
    code: 'KE',
    refDigitLength: 13,
    sampleRef: '0400012345678',
    helpline: '118 or (021) 111-000-118',
    officialPortalUrl: 'https://www.ke.com.pk/customer-services/billls-and-e-payments/',
    descriptionEn: 'Official K-Electric Karachi duplicate bill generator. Enter Account Number (13 digits) to retrieve your current bill.',
    descriptionUr: 'کے الیکٹرک کراچی کا ڈپلیکیٹ بل حاصل کرنے کے لیے اپنا 13 ہندسوں کا اکاؤنٹ نمبر درج کریں۔',
  },
  suigas: {
    id: 'suigas',
    nameEn: 'Sui Gas (SNGPL & SSGC)',
    nameUr: 'سوئی ناردرن / سوئی سدرن گیس',
    code: 'SUI',
    refDigitLength: 11,
    sampleRef: '28461937501',
    helpline: '1199 (SNGPL) / 1199 (SSGC)',
    officialPortalUrl: 'https://www.sngpl.com.pk/web/bill',
    descriptionEn: 'Official gas bill query portals for Sui Northern Gas Pipelines Limited (SNGPL) and Sui Southern Gas Company (SSGC).',
    descriptionUr: 'سوئی ناردرن اور سوئی سدرن گیس کا بل دیکھنے اور ڈاؤن لوڈ کرنے کی آفیشل معلومات۔',
  },
  wapda: {
    id: 'wapda',
    nameEn: 'WAPDA Electricity Helpline & Complaints',
    nameUr: 'واپڈا بجلی ہیلپ لائن اور شکایات',
    code: 'WAPDA',
    refDigitLength: 14,
    sampleRef: '15123456789012',
    helpline: '118 / 051-9252937',
    officialPortalUrl: 'https://ccms.pitc.com.pk/',
    descriptionEn: 'Official electricity distribution complaint portal numbers for LESCO, FESCO, GEPCO, IESCO, MEPCO, PESCO, QESCO, HESCO, SEPCO, and TESCO.',
    descriptionUr: 'تمام الیکٹرک سپلائی کمپنیوں (لیسکو، فیسکو، میپکو، آئیسکو) کے ایمرجنسی اور شکایت درج کروانے کے فون نمبرز۔',
  },
};
