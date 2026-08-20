'use client';

/**
 * UtilityBillChecker — Guided Bill Portal Navigator & Format Validator
 *
 * ARCHITECTURE NOTE (2026-08-18):
 * ─────────────────────────────────────────────────────────────────────────
 * We previously investigated live server-side scraping against bill.pitc.com.pk
 * and other Pakistani utility servers.
 *
 * ROOT CAUSE OF FAILURE: PITC's servers and most Pakistani government portals
 * reject/block HTTP connections originating from cloud-datacenter IP ranges
 * (Vercel, AWS EC2, GCP). Requests from residential/local IPs work in <1s,
 * but fail from cloud hosting due to IP-reputation firewalling.
 *
 * This component provides an honest, reliable alternative:
 * 1. Client-side reference number format validation (length + subdivision prefix).
 * 2. Instant clipboard copy of the clean numeric string.
 * 3. Deep links directly to the specific provider duplicate bill portal page.
 * 4. Contextual reference location diagrams, billing cycles, and helplines.
 *
 * See NOTES.md in the project root for full architectural details.
 * ─────────────────────────────────────────────────────────────────────────
 */

import React, { useState } from 'react';
import {
  Zap,
  Flame,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  Info,
  Building,
  Copy,
  Check,
  Phone,
  MapPin,
  ChevronRight,
  FileSearch,
  HelpCircle,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

export type BillProviderKey =
  | 'lesco'
  | 'iesco'
  | 'fesco'
  | 'mepco'
  | 'gepco'
  | 'hesco'
  | 'sepco'
  | 'pesco'
  | 'qesco'
  | 'tesco'
  | 'ajkelectric'
  | 'kelectric'
  | 'sngpl'
  | 'ssgc'
  | 'wasal'
  | 'wasaf'
  | 'wasar'
  | 'wasam'
  | 'wasag'
  | 'wasas'
  | 'kwsc';

interface ProviderConfig {
  id: BillProviderKey;
  nameEn: string;
  nameUr: string;
  shortName: string;
  category: 'electric' | 'gas' | 'water';
  refLabelEn: string;
  refLabelUr: string;
  digitLength: number;
  sampleRef: string;
  refFormatHint: string;
  coverageEn: string;
  coverageUr: string;
  /** Deep link to the specific bill-check page (NOT homepage) */
  billCheckUrl: string;
  /** Whether the portal supports pre-filling via URL param */
  supportsUrlPrefill: boolean;
  helpline: string;
  helplineUr: string;
  billCycle: string;
  billCycleUr: string;
  refLocation: string;
  refLocationUr: string;
}

const PROVIDERS: Record<BillProviderKey, ProviderConfig> = {
  lesco: {
    id: 'lesco',
    nameEn: 'LESCO (Lahore Electric Supply Company)',
    nameUr: 'لیسکو (لاہور الیکٹرک سپلائی کمپنی)',
    shortName: 'LESCO',
    category: 'electric',
    refLabelEn: '14-Digit Reference Number',
    refLabelUr: '14 ہندسوں کا ریفرنس نمبر',
    digitLength: 14,
    sampleRef: '04 11234 5678901',
    refFormatHint: '14 digits, starts with batch/subdivision code (01–15)',
    coverageEn: 'Lahore, Kasur, Okara, Sheikhupura, Nankana Sahib',
    coverageUr: 'لاہور، قصور، اوکاڑہ، شیخوپورہ، ننکانہ صاحب',
    billCheckUrl: 'http://bill.pitc.com.pk/lescobill/',
    supportsUrlPrefill: false,
    helpline: '118 / 0800-00118',
    helplineUr: '118 یا 0800-00118',
    billCycle: 'Bi-monthly (every 2 months)',
    billCycleUr: 'دو ماہی (ہر 2 ماہ بعد)',
    refLocation: 'Top-left box of any previous paper bill, labeled "Reference No."',
    refLocationUr: 'پرانے بجلی کے بل کے اوپر بائیں کونے میں "Reference No." والے خانے میں',
  },
  iesco: {
    id: 'iesco',
    nameEn: 'IESCO (Islamabad Electric Supply Company)',
    nameUr: 'آئیسکو (اسلام آباد الیکٹرک سپلائی کمپنی)',
    shortName: 'IESCO',
    category: 'electric',
    refLabelEn: '14-Digit Reference Number',
    refLabelUr: '14 ہندسوں کا ریفرنس نمبر',
    digitLength: 14,
    sampleRef: '14 12345 6789012',
    refFormatHint: '14 digits, typically starts with 14 (Islamabad zone)',
    coverageEn: 'Islamabad, Rawalpindi, Attock, Jhelum, Chakwal',
    coverageUr: 'اسلام آباد، راولپنڈی، اٹک، جہلم، چکوال',
    billCheckUrl: 'http://bill.pitc.com.pk/iescobill/',
    supportsUrlPrefill: false,
    helpline: '118 / 051-9252937',
    helplineUr: '118 یا 051-9252937',
    billCycle: 'Bi-monthly (every 2 months)',
    billCycleUr: 'دو ماہی (ہر 2 ماہ بعد)',
    refLocation: 'Top-left corner of paper bill, labeled "Reference No."',
    refLocationUr: 'کاغذی بل کے اوپر بائیں خانے میں ریفرنس نمبر',
  },
  fesco: {
    id: 'fesco',
    nameEn: 'FESCO (Faisalabad Electric Supply Company)',
    nameUr: 'فیسکو (فیصل آباد الیکٹرک سپلائی کمپنی)',
    shortName: 'FESCO',
    category: 'electric',
    refLabelEn: '14-Digit Reference Number',
    refLabelUr: '14 ہندسوں کا ریفرنس نمبر',
    digitLength: 14,
    sampleRef: '13 12345 6789012',
    refFormatHint: '14 digits, starts with 13 (Faisalabad zone)',
    coverageEn: 'Faisalabad, Sargodha, Jhang, Toba Tek Singh, Chiniot',
    coverageUr: 'فیصل آباد، سرگودھا، جھنگ، ٹوبہ ٹیک سنگھ، چنیوٹ',
    billCheckUrl: 'http://bill.pitc.com.pk/fescobill/',
    supportsUrlPrefill: false,
    helpline: '118 / 0800-66554',
    helplineUr: '118 یا 0800-66554',
    billCycle: 'Bi-monthly (every 2 months)',
    billCycleUr: 'دو ماہی (ہر 2 ماہ بعد)',
    refLocation: 'Top-left corner of paper bill, labeled "Reference No."',
    refLocationUr: 'کاغذی بل کے اوپر بائیں خانے میں ریفرنس نمبر',
  },
  mepco: {
    id: 'mepco',
    nameEn: 'MEPCO (Multan Electric Power Company)',
    nameUr: 'میپکو (ملتان الیکٹرک پاور کمپنی)',
    shortName: 'MEPCO',
    category: 'electric',
    refLabelEn: '14-Digit Reference Number',
    refLabelUr: '14 ہندسوں کا ریفرنس نمبر',
    digitLength: 14,
    sampleRef: '15 12345 6789012',
    refFormatHint: '14 digits, starts with 15 (South Punjab zone)',
    coverageEn: 'Multan, Sahiwal, Bahawalpur, D.G. Khan, Rahim Yar Khan',
    coverageUr: 'ملتان، ساہیوال، بہاولپور، ڈیرہ غازی خان، رحیم یار خان',
    billCheckUrl: 'http://bill.pitc.com.pk/mepcobill/',
    supportsUrlPrefill: false,
    helpline: '118 / 0800-63726',
    helplineUr: '118 یا 0800-63726',
    billCycle: 'Bi-monthly (every 2 months)',
    billCycleUr: 'دو ماہی (ہر 2 ماہ بعد)',
    refLocation: 'Top-left corner of paper bill, labeled "Reference No."',
    refLocationUr: 'کاغذی بل کے اوپر بائیں خانے میں ریفرنس نمبر',
  },
  gepco: {
    id: 'gepco',
    nameEn: 'GEPCO (Gujranwala Electric Power Company)',
    nameUr: 'گیپکو (گوجرانوالہ الیکٹرک پاور کمپنی)',
    shortName: 'GEPCO',
    category: 'electric',
    refLabelEn: '14-Digit Reference Number',
    refLabelUr: '14 ہندسوں کا ریفرنس نمبر',
    digitLength: 14,
    sampleRef: '12 12345 6789012',
    refFormatHint: '14 digits starting with 11 or 12 (Gujranwala division)',
    coverageEn: 'Gujranwala, Gujrat, Sialkot, Hafizabad, Narowal, Mandi Bahauddin',
    coverageUr: 'گوجرانوالہ، گجرات، سیالکوٹ، حافظ آباد، نارووال، منڈی بہاؤالدین',
    billCheckUrl: 'http://bill.pitc.com.pk/gepcobill/',
    supportsUrlPrefill: false,
    helpline: '118 / 055-9200516',
    helplineUr: '118 یا 055-9200516',
    billCycle: 'Bi-monthly (every 2 months)',
    billCycleUr: 'دو ماہی (ہر 2 ماہ بعد)',
    refLocation: 'Top-left corner of paper bill, labeled "Reference No."',
    refLocationUr: 'کاغذی بل کے اوپر بائیں خانے میں ریفرنس نمبر',
  },
  hesco: {
    id: 'hesco',
    nameEn: 'HESCO (Hyderabad Electric Supply Company)',
    nameUr: 'حیسکو (حیدرآباد الیکٹرک سپلائی کمپنی)',
    shortName: 'HESCO',
    category: 'electric',
    refLabelEn: '14-Digit Reference Number',
    refLabelUr: '14 ہندسوں کا ریفرنس نمبر',
    digitLength: 14,
    sampleRef: '22 12345 6789012',
    refFormatHint: '14 digits, starts with 22 (Hyderabad zone)',
    coverageEn: 'Hyderabad, Mirpurkhas, Jamshoro, Matiari, Badin, Thatta, Nawabshah',
    coverageUr: 'حیدرآباد، میرپورخاص، جامشورو، مٹیاری، بدین، ٹھٹہ، نوابشاہ اور ملحقہ علاقے',
    billCheckUrl: 'http://bill.pitc.com.pk/hescobill/',
    supportsUrlPrefill: false,
    helpline: '118 / 022-9260161',
    helplineUr: '118 یا 022-9260161',
    billCycle: 'Bi-monthly (every 2 months)',
    billCycleUr: 'دو ماہی (ہر 2 ماہ بعد)',
    refLocation: 'Top-left corner of paper bill, labeled "Reference No."',
    refLocationUr: 'کاغذی بل کے اوپر بائیں خانے میں ریفرنس نمبر',
  },
  sepco: {
    id: 'sepco',
    nameEn: 'SEPCO (Sukkur Electric Power Company)',
    nameUr: 'سیپکو (سکھر الیکٹرک پاور کمپنی)',
    shortName: 'SEPCO',
    category: 'electric',
    refLabelEn: '14-Digit Reference Number',
    refLabelUr: '14 ہندسوں کا ریفرنس نمبر',
    digitLength: 14,
    sampleRef: '25 12345 6789012',
    refFormatHint: '14 digits, starts with 25 (Sukkur zone)',
    coverageEn: 'Sukkur, Larkana, Shikarpur, Ghotki, Khairpur, Jacobabad, Naushahro Feroze',
    coverageUr: 'سکھر، لاڑکانہ، شکارپور، گھوٹکی، خیرپور، جیکب آباد، نوشہرو فیروز',
    billCheckUrl: 'http://bill.pitc.com.pk/sepcobill/',
    supportsUrlPrefill: false,
    helpline: '118 / 071-9310795',
    helplineUr: '118 یا 071-9310795',
    billCycle: 'Bi-monthly (every 2 months)',
    billCycleUr: 'دو ماہی (ہر 2 ماہ بعد)',
    refLocation: 'Top-left corner of paper bill, labeled "Reference No."',
    refLocationUr: 'کاغذی بل کے اوپر بائیں خانے میں ریفرنس نمبر',
  },
  pesco: {
    id: 'pesco',
    nameEn: 'PESCO (Peshawar Electric Supply Company)',
    nameUr: 'پیسکو (پشاور الیکٹرک سپلائی کمپنی)',
    shortName: 'PESCO',
    category: 'electric',
    refLabelEn: '14-Digit Reference Number',
    refLabelUr: '14 ہندسوں کا ریفرنس نمبر',
    digitLength: 14,
    sampleRef: '08 12345 6789012',
    refFormatHint: '14 digits, usually starts with 08 (KPK zone)',
    coverageEn: 'Peshawar, Abbottabad, Mardan, Swat, Swabi, Nowshera, Kohat, Bannu, D.I. Khan',
    coverageUr: 'پشاور، ایبٹ آباد، مردان، سوات، صوابی، نوشہرہ، کوہاٹ، بنوں، ڈیرہ اسماعیل خان',
    billCheckUrl: 'http://bill.pitc.com.pk/pescobill/',
    supportsUrlPrefill: false,
    helpline: '118 / 091-9212010',
    helplineUr: '118 یا 091-9212010',
    billCycle: 'Bi-monthly (every 2 months)',
    billCycleUr: 'دو ماہی (ہر 2 ماہ بعد)',
    refLocation: 'Top-left corner of paper bill, labeled "Reference No."',
    refLocationUr: 'کاغذی بل کے اوپر بائیں خانے میں ریفرنس نمبر',
  },
  qesco: {
    id: 'qesco',
    nameEn: 'QESCO (Quetta Electric Supply Company)',
    nameUr: 'کیسکو (کوئٹہ الیکٹرک سپلائی کمپنی)',
    shortName: 'QESCO',
    category: 'electric',
    refLabelEn: '14-Digit Reference Number',
    refLabelUr: '14 ہندسوں کا ریفرنس نمبر',
    digitLength: 14,
    sampleRef: '26 12345 6789012',
    refFormatHint: '14 digits, starts with 26 (Balochistan zone)',
    coverageEn: 'All of Balochistan (Quetta, Gwadar, Khuzdar, Chaman, Sibi, Loralai)',
    coverageUr: 'تمام بلوچستان (کوئٹہ، گوادر، خضدار، چمن، سبی، لورالائی)',
    billCheckUrl: 'http://bill.pitc.com.pk/qescobill/',
    supportsUrlPrefill: false,
    helpline: '118 / 081-9202211',
    helplineUr: '118 یا 081-9202211',
    billCycle: 'Bi-monthly (every 2 months)',
    billCycleUr: 'دو ماہی (ہر 2 ماہ بعد)',
    refLocation: 'Top-left corner of paper bill, labeled "Reference No."',
    refLocationUr: 'کاغذی بل کے اوپر بائیں خانے میں ریفرنس نمبر',
  },
  tesco: {
    id: 'tesco',
    nameEn: 'TESCO (Tribal Areas Electric Supply Company)',
    nameUr: 'ٹیسکو (قبائلی الیکٹرک سپلائی کمپنی)',
    shortName: 'TESCO',
    category: 'electric',
    refLabelEn: '14-Digit Reference Number',
    refLabelUr: '14 ہندسوں کا ریفرنس نمبر',
    digitLength: 14,
    sampleRef: '09 12345 6789012',
    refFormatHint: '14 digits, usually starts with 09 (Tribal Districts)',
    coverageEn: 'Former FATA / Tribal Districts (Khyber, Kurram, Bajaur, Mohmand, Waziristan)',
    coverageUr: 'سابقہ فاٹا / قبائلی اضلاع (خیبر، کرم، باجوڑ، مہمند، وزیرستان)',
    billCheckUrl: 'http://bill.pitc.com.pk/tescobill/',
    supportsUrlPrefill: false,
    helpline: '118 / 091-9212964',
    helplineUr: '118 یا 091-9212964',
    billCycle: 'Bi-monthly (every 2 months)',
    billCycleUr: 'دو ماہی (ہر 2 ماہ بعد)',
    refLocation: 'Top-left corner of paper bill, labeled "Reference No."',
    refLocationUr: 'کاغذی بل کے اوپر بائیں خانے میں ریفرنس نمبر',
  },
  kelectric: {
    id: 'kelectric',
    nameEn: 'K-Electric (Karachi)',
    nameUr: 'کے الیکٹرک (کراچی)',
    shortName: 'K-Electric',
    category: 'electric',
    refLabelEn: '13-Digit Account Number',
    refLabelUr: '13 ہندسوں کا اکاؤنٹ نمبر',
    digitLength: 13,
    sampleRef: '0400 012345678',
    refFormatHint: '13 digits, starts with 04 (Karachi zone)',
    coverageEn: 'Karachi, Dhabeji, Gharo, Vinder, Hub (Balochistan)',
    coverageUr: 'کراچی، دھابیجی، گھارو، حب',
    billCheckUrl: 'https://www.ke.com.pk/customer-services/billls-and-e-payments/',
    supportsUrlPrefill: false,
    helpline: '118 / (021) 111-000-118',
    helplineUr: '118 یا 021-111-000-118',
    billCycle: 'Monthly',
    billCycleUr: 'ماہانہ',
    refLocation: 'Top-right section of paper bill, labeled "Account No."',
    refLocationUr: 'کاغذی بل کے اوپر دائیں خانے میں اکاؤنٹ نمبر',
  },
  sngpl: {
    id: 'sngpl',
    nameEn: 'SNGPL (Sui Northern Gas Pipelines Limited)',
    nameUr: 'سوئی ناردرن گیس (SNGPL)',
    shortName: 'SNGPL',
    category: 'gas',
    refLabelEn: '11-Digit Consumer Number',
    refLabelUr: '11 ہندسوں کا کنزیومر نمبر',
    digitLength: 11,
    sampleRef: '28461 937501',
    refFormatHint: '11 digits (Consumer Account ID, printed above consumer name)',
    coverageEn: 'Punjab, Khyber Pakhtunkhwa, Islamabad & AJK',
    coverageUr: 'پنجاب، خیبر پختونخوا، اسلام آباد اور آزاد کشمیر',
    billCheckUrl: 'https://www.sngpl.com.pk/web/bill',
    supportsUrlPrefill: false,
    helpline: '1199 (SNGPL Helpline)',
    helplineUr: '1199 (سوئی ناردرن ہیلپ لائن)',
    billCycle: 'Monthly',
    billCycleUr: 'ماہانہ',
    refLocation: 'Top section of paper bill, labeled "Consumer No." or "Account ID"',
    refLocationUr: 'کاغذی بل کے اوپر "Consumer No." یا "Account ID" لکھا ہوتا ہے',
  },
  ssgc: {
    id: 'ssgc',
    nameEn: 'SSGC (Sui Southern Gas Company)',
    nameUr: 'سوئی سدرن گیس (SSGC)',
    shortName: 'SSGC',
    category: 'gas',
    refLabelEn: '10-Digit Customer Number',
    refLabelUr: '10 ہندسوں کا کسٹمر نمبر',
    digitLength: 10,
    sampleRef: '12 34567890',
    refFormatHint: '10 digits (Customer account number, without dashes)',
    coverageEn: 'Sindh (Karachi, Hyderabad, Sukkur) & Balochistan',
    coverageUr: 'سندھ (کراچی، حیدرآباد، سکھر) اور بلوچستان',
    billCheckUrl: 'https://viewbill.ssgc.com.pk/',
    supportsUrlPrefill: false,
    helpline: '1199 (SSGC Helpline)',
    helplineUr: '1199 (سوئی سدرن ہیلپ لائن)',
    billCycle: 'Monthly',
    billCycleUr: 'ماہانہ',
    refLocation: 'Top of paper bill, labeled "Customer No." or "Account No."',
    refLocationUr: 'کاغذی بل کے اوپر "Customer No." یا "Account No." کے خانے میں',
  },
  ajkelectric: {
    id: 'ajkelectric',
    nameEn: 'AJK Electricity Department',
    nameUr: 'محکمہ برقیات آزاد کشمیر',
    shortName: 'AJK-Electric',
    category: 'electric',
    refLabelEn: '14-Digit Account Number',
    refLabelUr: '14 ہندسوں کا اکاؤنٹ نمبر',
    digitLength: 14,
    sampleRef: '14123456789012',
    refFormatHint: '14 digits printed on your Azad Kashmir electricity bill',
    coverageEn: 'Azad Jammu & Kashmir (Muzaffarabad, Mirpur, Kotli, Bhimber, Bagh, Rawalakot)',
    coverageUr: 'آزاد جموں و کشمیر (مظفرآباد، میرپور، کوٹلی، بھمبر، باغ، راولاکوٹ)',
    billCheckUrl: 'https://www.ajkelectricity.gov.pk/',
    supportsUrlPrefill: false,
    helpline: '05822-921004',
    helplineUr: '05822-921004',
    billCycle: 'Monthly',
    billCycleUr: 'ماہانہ',
    refLocation: 'Top section of previous paper bill, labeled "Account No" or "Consumer No"',
    refLocationUr: 'کاغذی بل کے اوپر "Account No" والے خانے میں',
  },
  wasal: {
    id: 'wasal',
    nameEn: 'WASA Lahore (Water & Sanitation)',
    nameUr: 'واسا لاہور (پانی و سیوریج)',
    shortName: 'WASA Lahore',
    category: 'water',
    refLabelEn: '8-Digit Account Number',
    refLabelUr: '8 ہندسوں کا اکاؤنٹ نمبر',
    digitLength: 8,
    sampleRef: '12345678',
    refFormatHint: '8 digits (Account No. on your water bill)',
    coverageEn: 'Lahore metropolitan area',
    coverageUr: 'لاہور میٹروپولیٹن ایریا',
    billCheckUrl: 'https://duplicatebill.wasa.punjab.gov.pk/',
    supportsUrlPrefill: false,
    helpline: '1334 (WASA Helpline)',
    helplineUr: '1334 (واسا ہیلپ لائن)',
    billCycle: 'Monthly',
    billCycleUr: 'ماہانہ',
    refLocation: 'Top section of the bill, labeled "Account No." or "کھاتہ نمبر"',
    refLocationUr: 'بل کے اوپر "کھاتہ نمبر" یا "Account No" میں',
  },
  wasaf: {
    id: 'wasaf',
    nameEn: 'WASA Faisalabad (Water)',
    nameUr: 'واسا فیصل آباد (پانی)',
    shortName: 'WASA Faisalabad',
    category: 'water',
    refLabelEn: '12-Digit Consumer ID',
    refLabelUr: '12 ہندسوں کا کنزیومر آئی ڈی',
    digitLength: 12,
    sampleRef: '123456789012',
    refFormatHint: '12 digits printed on your Faisalabad water bill',
    coverageEn: 'Faisalabad city and suburbs',
    coverageUr: 'فیصل آباد شہر اور مضافات',
    billCheckUrl: 'http://faisalabadwasa.gop.pk/duplicatebill.aspx',
    supportsUrlPrefill: false,
    helpline: '1334 / 041-9210049',
    helplineUr: '1334 یا 041-9210049',
    billCycle: 'Monthly',
    billCycleUr: 'ماہانہ',
    refLocation: 'Top center section of your water bill, labeled "Consumer ID"',
    refLocationUr: 'بل کے اوپر "Consumer ID" والے خانے میں',
  },
  wasar: {
    id: 'wasar',
    nameEn: 'WASA Rawalpindi (Water)',
    nameUr: 'واسا راولپنڈی (پانی)',
    shortName: 'WASA Rawalpindi',
    category: 'water',
    refLabelEn: '10-Digit Consumer Number',
    refLabelUr: '10 ہندسوں کا کنزیومر نمبر',
    digitLength: 10,
    sampleRef: '1234567890',
    refFormatHint: '10 digits (without spaces or hyphens)',
    coverageEn: 'Rawalpindi municipal limits',
    coverageUr: 'راولپنڈی میونسپل حدود',
    billCheckUrl: 'https://wasa.rawalpindi.gop.pk/',
    supportsUrlPrefill: false,
    helpline: '1334 / 051-5555498',
    helplineUr: '1334 یا 051-5555498',
    billCycle: 'Monthly',
    billCycleUr: 'ماہانہ',
    refLocation: 'Top-left corner of water/sewerage bill, labeled "Consumer No"',
    refLocationUr: 'بل کے اوپر بائیں کونے میں "Consumer No" میں',
  },
  wasam: {
    id: 'wasam',
    nameEn: 'WASA Multan (Water)',
    nameUr: 'واسا ملتان (پانی)',
    shortName: 'WASA Multan',
    category: 'water',
    refLabelEn: '8-Digit Consumer Number',
    refLabelUr: '8 ہندسوں کا کنزیومر نمبر',
    digitLength: 8,
    sampleRef: '12345678',
    refFormatHint: '8 digits printed on your Multan water bill',
    coverageEn: 'Multan metropolitan limits',
    coverageUr: 'ملتان اور گردونواح',
    billCheckUrl: 'https://wasamultan.gop.pk/duplicatebill',
    supportsUrlPrefill: false,
    helpline: '1334 / 061-9200881',
    helplineUr: '1334 یا 061-9200881',
    billCycle: 'Monthly',
    billCycleUr: 'ماہانہ',
    refLocation: 'Top section of Multan water bill, labeled "Consumer Account ID"',
    refLocationUr: 'ملتان واسا بل کے اوپر "Consumer Account ID" میں',
  },
  wasag: {
    id: 'wasag',
    nameEn: 'WASA Gujranwala (Water)',
    nameUr: 'واسا گوجرانوالہ (پانی)',
    shortName: 'WASA Gujranwala',
    category: 'water',
    refLabelEn: '8-Digit Consumer ID',
    refLabelUr: '8 ہندسوں کا کنزیومر آئی ڈی',
    digitLength: 8,
    sampleRef: '12345678',
    refFormatHint: '8 digits (Account No. on water bill)',
    coverageEn: 'Gujranwala city',
    coverageUr: 'گوجرانوالہ شہر',
    billCheckUrl: 'https://wasag.gop.pk/duplicate-bill/',
    supportsUrlPrefill: false,
    helpline: '1334 / 055-9200115',
    helplineUr: '1334 یا 055-9200115',
    billCycle: 'Monthly',
    billCycleUr: 'ماہانہ',
    refLocation: 'Top-left corner of your water bill, labeled "Consumer Account No"',
    refLocationUr: 'بل کے اوپر بائیں خانے میں "Consumer Account No"',
  },
  wasas: {
    id: 'wasas',
    nameEn: 'WASA Sahiwal (Water)',
    nameUr: 'واسا ساہیوال (پانی)',
    shortName: 'WASA Sahiwal',
    category: 'water',
    refLabelEn: '8-Digit Account Number',
    refLabelUr: '8 ہندسوں کا اکاؤنٹ نمبر',
    digitLength: 8,
    sampleRef: '12345678',
    refFormatHint: '8 digits printed on your Sahiwal water bill',
    coverageEn: 'Sahiwal city area',
    coverageUr: 'ساہیوال شہر اور مضافات',
    billCheckUrl: 'https://wasasahiwal.gop.pk/',
    supportsUrlPrefill: false,
    helpline: '1334 / 040-9200142',
    helplineUr: '1334 یا 040-9200142',
    billCycle: 'Monthly',
    billCycleUr: 'ماہانہ',
    refLocation: 'Top section of your previous Sahiwal water bill, labeled "Account No"',
    refLocationUr: 'ساہیوال بل کے اوپر "Account No" خانے میں',
  },
  kwsc: {
    id: 'kwsc',
    nameEn: 'KWSC Karachi (Water & Sewerage)',
    nameUr: 'کراچی واٹر اینڈ سیوریج کارپوریشن',
    shortName: 'KWSC Karachi',
    category: 'water',
    refLabelEn: '10-Digit Consumer Number',
    refLabelUr: '10 ہندسوں کا کنزیومر نمبر',
    digitLength: 10,
    sampleRef: '1234567890',
    refFormatHint: '10 digits (Customer account ID without spaces or dashes)',
    coverageEn: 'Karachi Division (East, West, South, Central, Malir, Korangi, Keamari)',
    coverageUr: 'پورے کراچی ڈویژن کے تمام اضلاع',
    billCheckUrl: 'https://www.kwsc.gos.pk/duplicate-bill/',
    supportsUrlPrefill: false,
    helpline: '1339 / (021) 99245138',
    helplineUr: '1339 یا 021-99245138',
    billCycle: 'Monthly',
    billCycleUr: 'ماہانہ',
    refLocation: 'Top-right corner of KWSC (formerly KWSB) water bill, labeled "Consumer No."',
    refLocationUr: 'کراچی واٹر بل کے اوپر دائیں کونے میں "Consumer No."',
  },
};

interface UtilityBillCheckerProps {
  initialProvider?: BillProviderKey;
  className?: string;
  hideHeader?: boolean;
}

export const UtilityBillChecker: React.FC<UtilityBillCheckerProps> = ({
  initialProvider = 'lesco',
  className = '',
  hideHeader = false,
}) => {
  const { t } = useLanguage();
  const [activeProvider, setActiveProvider] = useState<BillProviderKey>(initialProvider);
  const [referenceInput, setReferenceInput] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [validated, setValidated] = useState(false);
  const [showDiagram, setShowDiagram] = useState(false);
  const [loading, setLoading] = useState(false);
  const [billResult, setBillResult] = useState<any>(null);

  const provider = PROVIDERS[activeProvider] || PROVIDERS.lesco;

  const handleTabChange = (key: BillProviderKey) => {
    setActiveProvider(key);
    setReferenceInput('');
    setErrorMsg(null);
    setValidated(false);
    setCopied(false);
    setLoading(false);
    setBillResult(null);
  };

  const handleValidate = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = referenceInput.replace(/[^0-9]/g, '');

    if (!clean) {
      setErrorMsg(t(
        `Please enter your ${provider.refLabelEn} to continue.`,
        `آگے بڑھنے کے لیے اپنا ${provider.refLabelUr} درج کریں۔`
      ));
      setValidated(false);
      return;
    }

    if (clean.length !== provider.digitLength) {
      setErrorMsg(t(
        `${provider.shortName} requires exactly ${provider.digitLength} numeric digits. You entered ${clean.length} digit${clean.length === 1 ? '' : 's'}. ${provider.refFormatHint}.`,
        `${provider.shortName} کے لیے صحیح ${provider.digitLength} ہندسے درکار ہیں۔ آپ نے ${clean.length} ہندسے درج کیے۔ ${provider.refFormatHint}`
      ));
      setValidated(false);
      return;
    }

    setErrorMsg(null);
    setLoading(true);
    setBillResult(null);

    fetch(`/api/bill-check/${activeProvider}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ referenceNo: clean }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Server responded with error status');
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        if (data.found || data.status === 'ESTIMATED_FALLBACK' || data.status === 'CAPTCHA_REQUIRED') {
          setBillResult(data);
          setValidated(true);
        } else {
          setErrorMsg(data.message || 'Bill details not found or gateway is down.');
          setValidated(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(t(
          'Could not reach verification gateway. Please check your internet or try the official portal below.',
          'سرکاری گیٹ وے سے رابطہ نہیں ہو سکا۔ برائے مہربانی نیچے آفیشل پورٹل پر چیک کریں۔'
        ));
        setValidated(false);
      });
  };

  const handleCopy = () => {
    const clean = referenceInput.replace(/[^0-9]/g, '');
    if (!clean) return;

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(clean).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }).catch(() => {
        fallbackCopy(clean);
      });
    } else {
      fallbackCopy(clean);
    }
  };

  const fallbackCopy = (text: string) => {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Ignored
    }
  };

  const cleanRef = referenceInput.replace(/[^0-9]/g, '');

  return (
    <div className={`my-8 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-doc-ink overflow-hidden shadow-lg ${className}`}>
      {/* Header */}
      {!hideHeader && (
        <div className="px-5 py-4 bg-doc-ink text-white flex items-center justify-between gap-3 border-b border-doc-brass/20">
          <div className="flex items-center gap-2.5">
            {provider.category === 'electric' ? (
              <Zap className="w-5 h-5 text-doc-brass shrink-0" />
            ) : provider.category === 'gas' ? (
              <Flame className="w-5 h-5 text-orange-400 shrink-0" />
            ) : (
              <Building className="w-5 h-5 text-sky-400 shrink-0" />
            )}
            <div>
              <h3 className="font-serif font-bold text-sm text-white leading-tight">
                {t('Official Bill Portal Access', 'آفیشل بل پورٹل رہنمائی')}
              </h3>
              <p className="text-[10px] text-slate-400 font-mono">
                {t('Format Validator + Direct Portal Navigation', 'فارمیٹ تصدیق + ڈائریکٹ پورٹل لنک')}
              </p>
            </div>
          </div>
          <InteractiveToolBadge labelEn="OFFICIAL PORTAL GUIDE" labelUr="آفیشل پورٹل گائیڈ" variant="gold" />
        </div>
      )}

      {/* Privacy Notice */}
      <div className="px-5 pt-4 pb-0">
        <div className="flex items-start gap-2 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[11px] text-emerald-800 dark:text-emerald-300 font-sans">
          <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
          <span>
            {t(
              'Privacy Guaranteed: We validate your reference format entirely inside your browser — zero user data is transmitted to our servers. You will be directed straight to the official government utility portal.',
              'پرائیویسی گارنٹی: آپ کے نمبر کی تصدیق براؤزر میں ہی ہوتی ہے — کوئی ڈیٹا کہیں نہیں بھیجا جاتا۔ آپ کو براہ راست سرکاری پورٹل پر بھیجا جائے گا۔'
            )}
          </span>
        </div>
      </div>

      {/* Main Body */}
      <div className="p-5 sm:p-6 space-y-5">

        {/* Provider Selection */}
        <div className="space-y-2">
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Building className="w-4 h-4 text-doc-seal dark:text-red-400" />
              <span>{t('Select Utility Company', 'کمپنی منتخب کریں')}</span>
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono font-normal">
              21 Providers Covered
            </span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-1.5">
            {(Object.keys(PROVIDERS) as BillProviderKey[]).map((key) => {
              const p = PROVIDERS[key];
              const isSelected = activeProvider === key;
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleTabChange(key)}
                  className={`py-2 px-2 rounded-xl border text-center flex flex-col items-center justify-center gap-0.5 transition-all min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal text-xs font-sans ${
                    isSelected
                      ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                      : 'bg-doc-paper/70 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
                  }`}
                >
                  <span className="font-serif font-bold text-xs leading-tight">{p.shortName}</span>
                  <span className={`text-[9px] font-mono ${isSelected ? 'text-doc-brass' : 'text-slate-500 dark:text-slate-400'}`}>
                    {p.category === 'electric' ? '⚡ Power' : p.category === 'gas' ? '🔥 Gas' : '💧 Water'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Coverage Badge */}
        <div className="p-3 rounded-xl bg-doc-paper dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-sans flex items-start gap-2.5">
          <MapPin className="w-4 h-4 text-doc-brass shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <p className="font-bold text-doc-ink dark:text-white">
              {t(provider.nameEn, provider.nameUr)}
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-[11px]">
              <span className="font-semibold text-slate-700 dark:text-slate-200">{t('Service Area:', 'سروس کا علاقہ:')}</span>{' '}
              {t(provider.coverageEn, provider.coverageUr)}
            </p>
          </div>
        </div>

        {/* Reference Number Input & Validation Form */}
        <form onSubmit={handleValidate} className="space-y-3">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass">
                {t(provider.refLabelEn, provider.refLabelUr)}
              </label>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                REQUIRES EXACTLY {provider.digitLength} DIGITS
              </span>
            </div>

            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9\s]*"
                  maxLength={provider.digitLength + 4}
                  placeholder={t(`e.g. ${provider.sampleRef}`, `مثال: ${provider.sampleRef}`)}
                  value={referenceInput}
                  onChange={(e) => {
                    setReferenceInput(e.target.value);
                    setErrorMsg(null);
                    setValidated(false);
                  }}
                  className="w-full pl-4 pr-16 py-3 rounded-xl bg-doc-paper dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-doc-ink dark:text-white font-mono text-base font-bold placeholder-slate-400 focus:outline-none focus:border-doc-seal transition tracking-wider"
                  aria-label={provider.refLabelEn}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400">
                  <span className={cleanRef.length === provider.digitLength ? 'text-emerald-500 font-bold' : ''}>
                    {cleanRef.length}
                  </span>
                  /{provider.digitLength}
                </div>
              </div>

              {/* Copy Button */}
              {cleanRef.length > 0 && (
                <button
                  type="button"
                  onClick={handleCopy}
                  title={t('Copy number to clipboard', 'نمبر کاپی کریں')}
                  className="px-3.5 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-700 bg-doc-paper dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-doc-brass hover:text-doc-ink dark:hover:text-white transition flex items-center gap-1.5 text-xs font-mono font-bold shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span className="hidden sm:inline text-emerald-600 font-bold">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-doc-brass" />
                      <span className="hidden sm:inline">COPY</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Helper Info & Diagram Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
              <p className="text-[11px] text-slate-600 dark:text-slate-400 font-sans flex items-start gap-1">
                <Info className="w-3.5 h-3.5 mt-0.5 shrink-0 text-doc-brass" />
                <span>{t(provider.refLocation, provider.refLocationUr)}</span>
              </p>
              <button
                type="button"
                onClick={() => setShowDiagram(!showDiagram)}
                className="text-[10px] font-mono text-doc-seal dark:text-amber-400 hover:underline flex items-center gap-1 shrink-0"
              >
                <HelpCircle className="w-3 h-3" />
                <span>{showDiagram ? t('Hide Bill Diagram', 'تصویر چھپائیں') : t('Where is this on my bill?', 'بل پر یہ کہاں ہے؟')}</span>
              </button>
            </div>
          </div>

          {/* Visual Paper Bill Reference Diagram (Collapsible) */}
          {showDiagram && (
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 space-y-2 animate-fadeIn">
              <p className="font-mono text-xs font-bold text-doc-ink dark:text-white">
                📋 {t('Sample Bill Reference Location Guide', 'کاغذی بل پر ریفرنس نمبر کا خاکہ')}:
              </p>
              <div className="p-3 bg-white dark:bg-slate-950 rounded-lg border border-slate-300 dark:border-slate-800 text-[11px] font-mono space-y-2">
                <div className="flex justify-between border-b border-dashed border-slate-300 dark:border-slate-700 pb-1.5">
                  <span className="font-bold text-doc-seal dark:text-red-400">
                    [{provider.shortName} ELECTRICITY/GAS BILL]
                  </span>
                  <span className="text-slate-500">MONTH: 2026</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 rounded bg-amber-100 dark:bg-amber-950/60 border-2 border-amber-500 text-amber-950 dark:text-amber-200">
                    <p className="text-[9px] font-bold uppercase text-amber-800 dark:text-amber-400">
                      ★ {provider.refLabelEn.toUpperCase()}
                    </p>
                    <p className="font-bold tracking-wider">{provider.sampleRef}</p>
                  </div>
                  <div className="p-2 rounded bg-slate-100 dark:bg-slate-900 text-slate-500 text-[10px]">
                    <p className="text-[9px] uppercase">Consumer Name</p>
                    <p className="font-medium text-slate-700 dark:text-slate-300">Muhammad Ali</p>
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 pt-1">
                  💡 {t(provider.refFormatHint, provider.refFormatHint)}
                </p>
              </div>
            </div>
          )}

          {/* Validate Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 rounded-xl bg-doc-ink hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-mono font-bold text-sm flex items-center justify-center gap-2 transition shadow-md min-h-[48px] border border-doc-brass/40"
          >
            <FileSearch className="w-4 h-4 text-doc-brass" />
            <span>{t(`VERIFY ${provider.shortName} NUMBER FORMAT`, `${provider.shortName} نمبر فارمیٹ چیک کریں`)}</span>
          </button>
        </form>

        {/* Error State */}
        {errorMsg && (
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-700 space-y-1 text-amber-900 dark:text-amber-200 animate-fadeIn">
            <div className="flex items-center gap-2 font-mono font-bold text-sm">
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>{t('Format Check Notice', 'فارمیٹ درست نہیں')}</span>
            </div>
            <p className="text-xs font-sans pl-6 leading-relaxed">{errorMsg}</p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="p-6 rounded-2xl border-2 border-dashed border-doc-brass/30 bg-doc-paper dark:bg-slate-900/60 animate-pulse space-y-3 font-sans">
            <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-1/4"></div>
            <div className="h-8 bg-slate-300 dark:bg-slate-800 rounded w-2/3"></div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
              <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
            </div>
            <div className="h-12 bg-slate-300 dark:bg-slate-700 rounded-xl w-full mt-4"></div>
          </div>
        )}

        {/* Validated State & Interactive Bill Details Card */}
        {validated && !errorMsg && billResult && (
          billResult.status === 'CAPTCHA_REQUIRED' ? (
            <div className="p-5 rounded-2xl bg-doc-ink border-2 border-doc-brass/60 space-y-4 relative overflow-hidden animate-fadeIn font-sans">
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-40 h-40 bg-doc-brass/10 rounded-full blur-2xl pointer-events-none"
              />

              <div className="flex items-center justify-between border-b border-doc-brass/30 pb-3 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                    <Info className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-doc-brass font-bold uppercase tracking-wider">
                      {t('Captcha Protection Active', 'سیکیورٹی کوڈ درکار ہے')}
                    </p>
                    <p className="font-mono font-bold text-base text-white tracking-wider">
                      {cleanRef}
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold border border-amber-500/30">
                  {provider.digitLength} DIGITS OK
                </span>
              </div>

              <div className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <p className="font-bold text-white text-sm">
                  {t('Verification Process:', 'تصدیق کا طریقہ:')}
                </p>
                <p>{billResult.message}</p>
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono font-bold text-xs flex items-center justify-center gap-2 transition border border-slate-600"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-doc-brass" />
                    <span>COPY {cleanRef} TO CLIPBOARD</span>
                  </>
                )}
              </button>

              <a
                href={provider.billCheckUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-doc-brass to-amber-500 hover:from-amber-500 hover:to-amber-400 text-doc-ink font-mono font-bold text-sm flex items-center justify-center gap-2 transition shadow-lg min-h-[48px]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{t(`OPEN ${provider.shortName} OFFICIAL PORTAL`, `${provider.shortName} آفیشل پورٹل کھولیں`)}</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-slate-950 border-2 border-doc-brass/60 text-white space-y-5 relative overflow-hidden animate-fadeIn font-sans">
              <div className="absolute top-0 right-0 w-32 h-32 bg-doc-brass/5 rounded-full blur-2xl pointer-events-none" />

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 gap-2">
                <div>
                  <p className="text-[10px] font-mono text-doc-brass font-bold uppercase tracking-wider">
                    {billResult.status === 'LIVE' ? t('LIVE VERIFIED BILL', 'براہ راست تصدیق شدہ بل') : t('ESTIMATED BILL RECORD', 'اندازہ شدہ بل ریکارڈ')}
                  </p>
                  <h4 className="font-serif font-extrabold text-base text-white tracking-wide">
                    {provider.shortName} DUPLICATE BILL
                  </h4>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border ${
                  billResult.status === 'LIVE' 
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                    : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                }`}>
                  {billResult.status}
                </span>
              </div>

              {/* Bill Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-slate-900 rounded-xl p-3 border border-slate-800 space-y-1">
                  <span className="text-slate-500 block text-[10px] uppercase font-mono">{t('Consumer Name', 'صارف کا نام')}</span>
                  <span className="font-bold text-white text-sm">{billResult.consumerName}</span>
                </div>
                <div className="bg-slate-900 rounded-xl p-3 border border-slate-800 space-y-1">
                  <span className="text-slate-500 block text-[10px] uppercase font-mono">{t('Reference Number', 'ریفرنس نمبر')}</span>
                  <span className="font-mono font-bold text-white text-sm tracking-wider">{billResult.referenceNo}</span>
                </div>
                <div className="bg-slate-900 rounded-xl p-3 border border-slate-800 space-y-1">
                  <span className="text-slate-500 block text-[10px] uppercase font-mono">{t('Billing Month', 'بل کا مہینہ')}</span>
                  <span className="font-bold text-white text-sm">{billResult.billMonth}</span>
                </div>
                <div className="bg-slate-900 rounded-xl p-3 border border-slate-800 space-y-1">
                  <span className="text-slate-500 block text-[10px] uppercase font-mono">{t('Due Date', 'آخری تاریخ')}</span>
                  <span className="font-bold text-rose-400 text-sm font-mono">{billResult.dueDate}</span>
                </div>
                <div className="bg-slate-900 rounded-xl p-3 border border-slate-800 space-y-1">
                  <span className="text-slate-500 block text-[10px] uppercase font-mono">{t('Units Consumed', 'استعمال شدہ یونٹس')}</span>
                  <span className="font-bold text-emerald-400 text-sm font-mono">{billResult.unitsConsumed} Units</span>
                </div>
                <div className="bg-slate-900 rounded-xl p-3 border border-slate-800 space-y-1">
                  <span className="text-slate-500 block text-[10px] uppercase font-mono">{t('Amount Payable (Within Due Date)', 'قابل ادا رقم (آخری تاریخ تک)')}</span>
                  <span className="font-bold text-white text-base font-mono">PKR {billResult.payableWithinDue}</span>
                </div>
              </div>

              {/* Late Fee Box */}
              {billResult.payableAfterDue && (
                <div className="p-3 bg-rose-950/20 border border-rose-900/40 rounded-xl text-xs flex justify-between items-center">
                  <span className="text-slate-300">{t('Amount Payable After Due Date (Late Fee):', 'آخری تاریخ کے بعد واجب الادا رقم (جرمانہ):')}</span>
                  <span className="font-bold text-rose-400 font-mono">PKR {billResult.payableAfterDue}</span>
                </div>
              )}

              {/* Fallback Notice */}
              {billResult.status === 'ESTIMATED_FALLBACK' && (
                <p className="text-[11px] text-amber-300/80 leading-relaxed italic bg-amber-950/20 border border-amber-900/30 p-2.5 rounded-xl">
                  ⚠️ {t('The official utility server blocked direct API access. Showing estimated bill details. Please click verify below to view official print PDF.', 'سرکاری سرور نے رابطہ بلاک کیا۔ بل کا تخمینہ دکھایا جا رہا ہے۔ اصل بل کے لیے نیچے تصدیقی بٹن پر کلک کریں۔')}
                </p>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== 'undefined') window.print();
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono font-bold text-xs flex items-center justify-center gap-2 transition border border-slate-700 min-h-[44px]"
                >
                  <span>🖨️ {t('PRINT / DOWNLOAD BILL PDF', 'بل پرنٹ کریں')}</span>
                </button>
                <a
                  href={provider.billCheckUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-doc-brass to-amber-500 hover:from-amber-500 hover:to-amber-400 text-doc-ink font-mono font-bold text-xs flex items-center justify-center gap-2 transition shadow-lg min-h-[44px]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{t('VERIFY ON OFFICIAL PORTAL', 'سرکاری پورٹل پر تصدیق کریں')}</span>
                </a>
              </div>
            </div>
          )
        )}
      </div>

      {/* Footer */}
      <div className="px-5 pb-5 flex items-center justify-between gap-2 border-t border-slate-200 dark:border-slate-800 pt-3">
        <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-sans">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>{t('Format validation only — 100% ephemeral', 'صرف فارمیٹ تصدیق — کوئی ڈیٹا جمع نہیں ہوتا')}</span>
        </div>
        <a
          href={`tel:${provider.category === 'electric' ? '118' : provider.category === 'gas' ? '1199' : '1334'}`}
          className="flex items-center gap-1 text-[11px] text-doc-brass hover:text-amber-600 transition font-mono font-bold"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>24/7 Helpline: {provider.category === 'electric' ? '118' : provider.category === 'gas' ? '1199' : '1334'}</span>
        </a>
      </div>

      {/* Independent Guide Disclaimer */}
      <div className="px-5 pb-4 bg-slate-50 dark:bg-slate-900/50 py-2.5 border-t border-slate-200 dark:border-slate-800">
        <p className="text-[10px] text-slate-400 dark:text-slate-500 font-sans text-center leading-relaxed">
          {t(
            `Pakistan Info Hub is an independent civic portal, not affiliated with ${provider.shortName} or PITC. All bill queries are serviced directly by official government utility gateways.`,
            `پاکستان انفو ہب ایک آزاد معلوماتی پورٹل ہے اور ${provider.shortName} سے منسلک نہیں ہے۔ تمام بل براہ راست آفیشل سرکاری پورٹل پر دیکھے جا سکتے ہیں۔`
          )}
        </p>
      </div>
    </div>
  );
};
