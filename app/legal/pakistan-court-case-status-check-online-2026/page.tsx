import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ComparisonVisual, ProcessStepsDiagram, FAQAccordionVisual } from '@/components/visuals';
import {
  Scale,
  Building2,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Info,
  Clock,
  Search,
  FileText,
  Globe,
  Smartphone,
  HelpCircle,
  ArrowRight,
  BookOpen,
  MapPin,
  Calendar,
  AlertCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pakistan Court Case Status Check Online 2026: Official Portals Directory | Pakistan Info Hub',
  description:
    'Verified guide to checking court case status online in Pakistan: Supreme Court Public Facilitation Portal, Lahore (LHC), Sindh (SHC), Peshawar (PHC), Islamabad (IHC), Balochistan (BHC), and district courts.',
  keywords: [
    'pakistan court case status check online 2026',
    'supreme court case status check online pakistan',
    'lahore high court case search lhc',
    'sindh high court case status search shc',
    'peshawar high court cfms case status',
    'islamabad high court case tracking mis ihc',
    'balochistan high court case status bhc portal',
    'district court case search pakistan',
    'overseas litigants facilitation cell supreme court',
    'pakistan court cause list online 2026',
  ],
  openGraph: {
    title: 'Pakistan Court Case Status Check Online 2026: Official Portals Directory',
    description:
      'Official directory and step-by-step instructions to check case status, hearing dates, and cause lists across the Supreme Court and all 5 High Courts in Pakistan.',
    url: 'https://www.pakistaninfohub.com/legal/pakistan-court-case-status-check-online-2026',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/legal/pakistan-court-case-status-check-online-2026',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Police & Legal Services',
          item: 'https://www.pakistaninfohub.com/legal',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Court Case Status Check 2026',
          item: 'https://www.pakistaninfohub.com/legal/pakistan-court-case-status-check-online-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Pakistan Court Case Status Check Online 2026: Supreme Court, High Courts & District Judiciary',
      description:
        'Comprehensive guide mapping Pakistan judicial portals: Supreme Court, Lahore High Court, Sindh High Court, Peshawar High Court, Islamabad High Court, and Balochistan High Court.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-04-10',
      dateModified: '2026-09-04',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/legal/pakistan-court-case-status-check-online-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Check Court Case Status Online in Pakistan',
      description: 'Step-by-step workflow to find your hearing dates, bench rosters, and interim order sheets online.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Identify the Specific Court and Bench',
          text: 'Determine whether your case is pending before the Supreme Court of Pakistan, a provincial High Court (Principal Seat or regional circuit bench), or a District Judiciary court.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Locate Your Case Identifiers',
          text: 'Extract your Case Type (e.g., Writ Petition, Civil Appeal, Criminal Revision), registered Case Number, and filing Year from your court institution receipt or summon.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Open the Court Official Portal',
          text: 'Visit the verified government domain for that court (e.g., supremecourt.gov.pk, lhc.gov.pk, sindhhighcourt.gov.pk, peshawarhighcourt.gov.pk, mis.ihc.gov.pk, portal.bhc.gov.pk).',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Execute Case Search',
          text: 'Enter your case number and year, or use the party name search if the case number has not yet been assigned by the filing diary branch.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Review Status, Next Date & Order Sheets',
          text: 'View next hearing fixation date, presiding judge, cause list serial number, and download scanned interim orders.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is there a single unified national website to search any court case in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Pakistan does not have a centralized national e-Courts portal or universal CNR number. Unlike India’s centralized e-Courts system, the Supreme Court, all five High Courts, and district judiciaries operate completely independent IT infrastructures with distinct URLs, search interfaces, and database records.',
          },
        },
        {
          '@type': 'Question',
          name: 'What information is required to search a court case online in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most portals require three basic fields: (1) Case Type or Category (such as W.P. for Writ Petition, C.P. for Civil Petition, or Crl. Appeal), (2) the Case Number, and (3) the Year of institution (e.g., 2024, 2025, 2026). If you do not have the number, most High Courts and the Supreme Court also allow searches by Petitioner or Respondent Name.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can overseas Pakistanis track their cases in Pakistani courts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For Supreme Court matters, the apex court operates a dedicated Overseas Litigants Facilitation Cell (OLFC) accessible via supremecourt.gov.pk and a dedicated WhatsApp helpline (+92 326 4442444 messages only). For High Courts, overseas litigants can track proceedings, download order sheets, and verify cause lists freely via public portals without needing to be physically present in Pakistan.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between checking case status and reading a judgment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A case status tracker shows real-time information for pending cases, including next hearing dates, bench assignments, and interim orders. In contrast, a judgments or case-law database (such as caselaw.shc.gov.pk or Supreme Court Reported Judgments) is a digital law library of finalized written rulings used primarily for legal research and precedents.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is my lower or district court case not showing up on the online portal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'While High Courts update their databases daily, district, sessions, and family courts at the tehsil level have inconsistent digital connectivity. In many subordinate courts, cause lists and adjournment orders are still recorded manually on physical court registers and may experience a 24- to 72-hour delay before appearing online. Always confirm urgent dates directly with your advocate or court reader.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often are court cause lists and hearing dates updated online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Daily cause lists for High Courts and the Supreme Court are usually published each evening between 6:00 PM and 9:00 PM for the following working day. Supplementary cause lists for urgent motions are updated in the morning before court proceedings commence at 8:30 AM or 9:00 AM.',
          },
        },
      ],
    },
  ],
};

export default function PakistanCourtCaseStatusPage() {
  const breadcrumbs = [
    { nameEn: 'Police & Legal Services', nameUr: 'پولیس، ایف آئی آر اور قانونی سروسز', href: '/legal' },
    { nameEn: 'Court Case Status Check 2026', nameUr: 'عدالتی مقدمات کا آن لائن سٹیٹس 2026' },
  ];

  // Process Steps
  const processSteps = [
    {
      stepNumber: 1,
      titleEn: 'Identify Court Tier & Territorial Bench',
      titleUr: 'متعلقہ عدالت اور بنچ کی شناخت',
      descEn:
        'Verify whether your case is in the Supreme Court (Islamabad/branch registries), a provincial High Court (Lahore, Sindh, Peshawar, Islamabad, or Balochistan), or a District/Sessions Court.',
      descUr: 'معلوم کریں کہ آپ کا مقدمہ سپریم کورٹ، کسی ہائی کورٹ یا ضلعی سیشن و سول کورٹ میں زیر سماعت ہے۔',
      tagEn: 'Step 1: Jurisdiction',
      tagUr: 'مرحلہ 1',
    },
    {
      stepNumber: 2,
      titleEn: 'Locate Your Case Number & Filing Year',
      titleUr: 'کیس نمبر، قسم اور سال معلوم کریں',
      descEn:
        'Check your court institution slip, summon, or advocate brief for your Case Category (e.g., Writ Petition, Civil Revision), Case Number (e.g., 4512), and Year (e.g., 2025).',
      descUr: 'وکیل سے یا سمن سے کیس کی کیٹیگری (جیسے رٹ پٹیشن)، کیس نمبر اور سال چیک کریں۔',
      tagEn: 'Step 2: Case Details',
      tagUr: 'مرحلہ 2',
    },
    {
      stepNumber: 3,
      titleEn: 'Open the Court Official Search Portal',
      titleUr: 'مخصوص عدالت کے آفیشل پورٹل پر جائیں',
      descEn:
        'Navigate directly to that court official portal (see our verified directory below). Never use unofficial third-party apps claiming to offer all-in-one case lookups.',
      descUr: 'متعلقہ عدالت کے مصدقہ سرکاری پورٹل پر جائیں۔ غیر مصدقہ ایپس سے گریز کریں۔',
      tagEn: 'Step 3: Access Portal',
      tagUr: 'مرحلہ 3',
    },
    {
      stepNumber: 4,
      titleEn: 'Enter Case Number or Party Name',
      titleUr: 'کیس نمبر یا سائل/فریق کا نام درج کریں',
      descEn:
        'Input your case number and year. If your case was recently instituted and lacks a permanent number, use the Party Name search with the petitioner or respondent full name.',
      descUr: 'کیس نمبر اور سال درج کریں۔ اگر نمبر نہ ہو تو سائل یا مخالف فریق کے نام سے سرچ کریں۔',
      tagEn: 'Step 4: Search',
      tagUr: 'مرحلہ 4',
    },
    {
      stepNumber: 5,
      titleEn: 'View Hearing Date, Bench & Order Sheet',
      titleUr: 'آئندہ تاریخ، بنچ اور آرڈر شیٹ دیکھیں',
      descEn:
        'Inspect the next fixation date, the assigned division or single bench judge, cause list serial number, and download scanned copies of interim order sheets.',
      descUr: 'سماعت کی اگلی تاریخ، متعلقہ جج، کاز لسٹ نمبر اور عدالتی عبوری حکم نامہ (Order Sheet) دیکھیں۔',
      tagEn: 'Step 5: Status',
      tagUr: 'مرحلہ 5',
    },
  ];

  // Comparison items: Case Status vs Judgments vs Cause List
  const comparisonItems = [
    {
      titleEn: 'Live Case Status Tracker',
      titleUr: 'لائیو کیس سٹیٹس ٹریکر',
      subtitleEn: 'Pending & Active Cases',
      subtitleUr: 'زیر سماعت اور فعال مقدمات',
      badgeEn: 'PENDING MATTERS',
      badgeUr: 'زیر سماعت کیسز',
      badgeVariant: 'emerald' as const,
      pointsEn: [
        'Shows upcoming fixation dates, next scheduled hearing, and stage of proceedings',
        'Displays assigned Single Bench or Division Bench presiding judges',
        'Provides downloadable PDF order sheets recorded at recent hearings',
        'Essential for litigants and lawyers to prepare before the next court appearance',
      ],
      pointsUr: [
        'آئندہ سماعت کی تاریخ، کیس کی موجودہ پوزیشن اور پیشرفت کی تفصیلات',
        'سماعت کرنے والے معزز جج یا ڈویژن بنچ کا نام ظاہر کرتا ہے',
        'پچھلی سماعتوں پر جاری ہونے والے عدالتی عبوری احکامات (Order Sheets) ڈاؤن لوڈ کریں',
        'سائلین اور وکلاء کے لیے تاریخ پیشی پر تیار رہنے کے لیے لازمی ٹول',
      ],
      recommendedForEn: 'Litigants and advocates tracking an active, undecided court case.',
      recommendedForUr: 'وہ تمام افراد جن کا مقدمہ اس وقت عدالت میں چل رہا ہو۔',
    },
    {
      titleEn: 'Judgments & Case-Law Archive',
      titleUr: 'عدالتی فیصلے اور لا رپورٹس آرکائیو',
      subtitleEn: 'Decided Cases & Precedents',
      subtitleUr: 'فیصلہ شدہ مقدمات اور قانونی نظائر',
      badgeEn: 'DECIDED JURISPRUDENCE',
      badgeUr: 'حتمی فیصلے',
      badgeVariant: 'brass' as const,
      pointsEn: [
        'Houses comprehensive final written judgments for decided legal matters',
        'Examples include caselaw.shc.gov.pk, Supreme Court Reported Judgments, and PLD citations',
        'Does NOT show upcoming hearing dates or daily courtroom status of ongoing trials',
        'Primarily intended for judicial research, legal precedents, and citation analysis',
      ],
      pointsUr: [
        'فیصلہ شدہ مقدمات کے تفصیلی حتمی تحریری فیصلے اور عدالتی نظائر کا مجموعہ',
        'جیسے سندھ ہائی کورٹ کا caselaw.shc.gov.pk اور سپریم کورٹ کی رپورٹڈ ججمنٹس',
        'یہ زیر سماعت مقدمات کی اگلی تاریخ یا پیشی کا سٹیٹس ہرگز نہیں دکھاتا',
        'وکلاء، ججز اور قانون کے طلباء کی تحقیق اور عدالتی نظائر تلاش کرنے کے لیے مخصوص ہے',
      ],
      recommendedForEn: 'Legal researchers and lawyers seeking judicial precedents for finalized rulings.',
      recommendedForUr: 'وکلاء اور قانونی محققین جو ماضی کے عدالتی فیصلے اور نظائر تلاش کرنا چاہتے ہوں۔',
    },
    {
      titleEn: 'Daily Cause List / Roster',
      titleUr: 'روزانہ کاز لسٹ و بینچ روسٹر',
      subtitleEn: 'Day-of-Hearing Schedule',
      subtitleUr: 'مخصوص دن کے مقدمات کا شیڈول',
      badgeEn: 'DAILY COURTROOM SCHEDULE',
      badgeUr: 'یومیہ عدالتی شیڈول',
      badgeVariant: 'seal' as const,
      pointsEn: [
        'Daily schedule listing which cases are fixed before which courtroom on a specific day',
        'Published each evening for the next morning (Regular, Urgent, and Supplementary lists)',
        'Lists the serial number of your case and courtroom number where you must appear',
        'Does not show case history beyond that single designated hearing day',
      ],
      pointsUr: [
        'روزانہ کی فہرست جس میں درج ہوتا ہے کہ کون سا کیس کس کمرہ عدالت میں کس نمبر پر لگے گا',
        'ہر شام اگلے دن کی عدالتی کارروائی کے لیے پورٹل پر اپ لوڈ کی جاتی ہے',
        'اس میں آپ کے کیس کا سیریل نمبر اور کورٹ روم نمبر واضح درج ہوتا ہے',
        'اس میں پورے کیس کی پرانی تاریخیں نہیں ہوتیں بلکہ صرف اسی دن کا شیڈول ہوتا ہے',
      ],
      recommendedForEn: 'Checking whether your case will actually be heard tomorrow morning and in which court room.',
      recommendedForUr: 'یہ جاننے کے لیے کہ کل آپ کا کیس کس معزز جج کے سامنے کس نمبر پر پیش ہوگا۔',
    },
  ];

  // Court Portals Directory Data
  const courtDirectory = [
    {
      courtNameEn: 'Supreme Court of Pakistan',
      courtNameUr: 'سپریم کورٹ آف پاکستان',
      portalUrl: 'https://www.supremecourt.gov.pk',
      portalLabel: 'supremecourt.gov.pk',
      searchSection: 'Public Facilitation Portal / Online Case Information',
      requiredFieldsEn: 'Case/Petition Type (e.g. C.P., C.A.), Case Number, Year, or Party/Advocate Name',
      whatYouCanCheckEn: 'Hearing fixation dates, interim order sheets, daily cause lists, Overseas Litigants Portal, 1818 helpline',
      coverageNoteEn: 'Covers Principal Seat Islamabad and Branch Registries in Lahore, Karachi, Peshawar, and Quetta.',
      isApex: true,
    },
    {
      courtNameEn: 'Lahore High Court (LHC)',
      courtNameUr: 'لاہور ہائی کورٹ',
      portalUrl: 'https://lhc.gov.pk',
      portalLabel: 'lhc.gov.pk',
      searchSection: 'Case Management / Case Status / CAMS',
      requiredFieldsEn: 'Bench (Principal/Benches), Case Type (W.P., Crl. Misc., RFA), Case Number, Year, or Party Name',
      whatYouCanCheckEn: 'Daily cause lists, last hearing status, certified copy request status (cams.dc.lhc.gov.pk), official mobile app',
      coverageNoteEn: 'Covers Principal Seat Lahore, Rawalpindi Bench, Multan Bench, and Bahawalpur Bench.',
      isApex: false,
    },
    {
      courtNameEn: 'Sindh High Court (SHC)',
      courtNameUr: 'سندھ ہائی کورٹ',
      portalUrl: 'https://sindhhighcourt.gov.pk',
      portalLabel: 'sindhhighcourt.gov.pk',
      searchSection: 'Case Search / Advance Case Search / CFMS-DC',
      requiredFieldsEn: 'Bench/Seat, Case Category, Case Number, Year, or Advocate / Litigant Name',
      whatYouCanCheckEn: 'Principal Seat & Circuit status, Online Court Proceedings (OCP), Subordinate District Courts (CFMS-DC)',
      coverageNoteEn: 'Covers Principal Seat Karachi, Sukkur Bench, Hyderabad Circuit Court, Larkana Circuit Court, and Mirpurkhas.',
      isApex: false,
    },
    {
      courtNameEn: 'Peshawar High Court (PHC)',
      courtNameUr: 'پشاور ہائی کورٹ',
      portalUrl: 'https://www.peshawarhighcourt.gov.pk',
      portalLabel: 'peshawarhighcourt.gov.pk',
      searchSection: 'Case Flow Management Information System (CFMS)',
      requiredFieldsEn: 'Bench Selection, Case Category, Case Number & Year, or Universal Case Number (UCN) / QR code',
      whatYouCanCheckEn: 'Complete case flow history, interim order sheets, daily cause lists, and KP District Judiciary portal',
      coverageNoteEn: 'Covers Principal Seat Peshawar, Mingora/Swat (Dar-ul-Qaza), Abbottabad, Bannu, and D.I. Khan benches.',
      isApex: false,
    },
    {
      courtNameEn: 'Islamabad High Court (IHC)',
      courtNameUr: 'اسلام آباد ہائی کورٹ',
      portalUrl: 'https://mis.ihc.gov.pk',
      portalLabel: 'mis.ihc.gov.pk / ihc.gov.pk',
      searchSection: 'IHC MIS Case Status & Cause List Portal',
      requiredFieldsEn: 'Case Category, Case Number, Filing Year (e.g. W.P. 1205/2026)',
      whatYouCanCheckEn: 'Live status, cause list search, official mobile app alerts, and Pull SMS to +92 331 8862827 (IHC@case code)',
      coverageNoteEn: 'Covers federal capital judicial territory across civil, criminal, constitutional, and service jurisdictions.',
      isApex: false,
    },
    {
      courtNameEn: 'Balochistan High Court (BHC)',
      courtNameUr: 'بلوچستان ہائی کورٹ',
      portalUrl: 'https://portal.bhc.gov.pk',
      portalLabel: 'portal.bhc.gov.pk / bhc.gov.pk',
      searchSection: 'BHC Case Status & Certified Copy Portal',
      requiredFieldsEn: 'Case Category, Case Number, Year, or Litigant / Advocate Name',
      whatYouCanCheckEn: 'High Court cases, District Judiciary cases, certified copy delivery status, and daily cause lists',
      coverageNoteEn: 'Covers Principal Seat Quetta, Sibi Bench, and Turbat Circuit Bench.',
      isApex: false,
    },
  ];

  // FAQs
  const courtFaqs = [
    {
      questionEn: 'Is there a single unified website to check any Pakistani court case?',
      questionUr: 'کیا پاکستان میں کسی بھی عدالتی کیس کو ایک ہی ویب سائٹ سے چیک کیا جا سکتا ہے؟',
      answerEn:
        'No. This is the single most common internet myth on this topic. Unlike India’s centralized e-Courts system (which uses 16-digit CNR numbers), Pakistan has no single unified national case portal. The Supreme Court of Pakistan, each of the five provincial/federal High Courts, and district judiciaries maintain their own completely independent portals, database servers, and search forms. You must select the specific court where your case was instituted.',
      answerUr:
        'ہرگز نہیں۔ انٹرنیٹ پر یہ سب سے بڑی غلط فہمی ہے۔ پاکستان میں کوئی ایک مرکزی پورٹل یا بھارتی طرز کا CNR نمبر نہیں ہے۔ سپریم کورٹ اور پانچوں ہائی کورٹس (لاہور، سندھ، پشاور، اسلام آباد، بلوچستان) کے اپنے الگ الگ سرکاری پورٹلز اور سسٹمز ہیں۔ آپ کو اسی عدالت کا پورٹل کھولنا ہوگا جہاں آپ کا کیس دائر ہے۔',
    },
    {
      questionEn: 'What information do I need to search for my case online?',
      questionUr: 'آن لائن کیس تلاش کرنے کے لیے کون سی معلومات ضروری ہیں؟',
      answerEn:
        'Virtually all Pakistani court portals require three standard fields: (1) The Case Category or Type (such as Writ Petition, Civil Appeal, Criminal Revision, or Review Petition), (2) the Case Number (assigned by the filing diary branch), and (3) the Year of institution (e.g., 2024, 2025, or 2026). If you do not know the case number, most High Court portals and the Supreme Court also permit searches using the full name of either the Petitioner or Respondent.',
      answerUr:
        'بنیادی طور پر تین چیزیں درکار ہوتی ہیں: (1) کیس کی قسم (مثلاً رٹ پٹیشن، سول اپیل، یا فوجداری نظرثانی)، (2) کیس کا سرکاری نمبر، اور (3) دائر کرنے کا سال (جیسے 2025 یا 2026)۔ اگر کیس نمبر معلوم نہ ہو تو زیادہ تر ہائی کورٹس اور سپریم کورٹ میں سائل یا مخالف فریق کے نام سے بھی تلاش کیا جا سکتا ہے۔',
    },
    {
      questionEn: 'I am an overseas Pakistani living abroad — how can I track my case remotely?',
      questionUr: 'میں بیرون ملک مقیم پاکستانی ہوں، میں اپنے عدالتی کیس کو آن لائن کیسے مانیٹر کروں؟',
      answerEn:
        'If your case is in the Supreme Court of Pakistan, you can use the newly established Overseas Litigants Facilitation Cell (OLFC) accessible on supremecourt.gov.pk and via a dedicated WhatsApp line (+92 326 4442444, messages only). For High Court cases, you can access the public web portals from anywhere in the world to track hearing dates, download certified order sheets, and verify lawyer submissions without visiting Pakistan.',
      answerUr:
        'اگر آپ کا مقدمہ سپریم کورٹ میں ہے تو سپریم کورٹ کے خصوصی اوورسیز لٹیگینٹس فیسیلیٹیشن سیل (OLFC) اور آفیشل واٹس ایپ (+92 326 4442444 صرف میسجز) سے مدد حاصل کر سکتے ہیں۔ ہائی کورٹس کے تمام پورٹلز دنیا بھر سے قابل رسائی ہیں جہاں سے آپ تاریخ پیشی اور احکامات ڈاؤن لوڈ کر سکتے ہیں۔',
    },
    {
      questionEn: 'What is the difference between checking case status and reading a judgment?',
      questionUr: 'کیس سٹیٹس دیکھنے اور عدالتی فیصلہ (ججمنٹ) پڑھنے میں کیا فرق ہے؟',
      answerEn:
        'A case status tracker is for active, pending cases. It tells you when the next hearing will occur, which courtroom and judge you are assigned to, and provides interim order sheets. A judgment database (such as caselaw.shc.gov.pk or Supreme Court Reported Judgments) is a digital archive of finalized written rulings on decided matters, used primarily by lawyers for legal research and case precedents.',
      answerUr:
        'کیس سٹیٹس ٹریکر زیر سماعت مقدمات کے لیے ہوتا ہے جو بتاتا ہے کہ اگلی پیشی کب ہے اور جج صاحب نے کیا عبوری حکم دیا۔ جبکہ ججمنٹس ڈیٹابیس (جیسے caselaw.shc.gov.pk) پرانے اور مکمل فیصلہ شدہ مقدمات کا قانونی ریکارڈ ہوتا ہے جو قانونی تحقیق اور نظائر کے لیے دیکھا جاتا ہے۔',
    },
    {
      questionEn: 'Why is my lower or district court case not appearing online?',
      questionUr: 'میرے ڈسٹرکٹ یا سیشن کورٹ کا کیس آن لائن پورٹل پر کیوں نظر نہیں آ رہا؟',
      answerEn:
        'While High Courts update their databases daily every evening, district, session, and family courts at the tehsil/district level have uneven digital connectivity. In many subordinate courts, courtroom order sheets and next adjournment dates are still recorded by hand in paper registers and may take 2 to 4 days to be entered into the system. For district court matters, always re-confirm critical dates directly with your advocate or the court clerk (Ahlmad/Reader).',
      answerUr:
        'ہائی کورٹس کا ڈیٹا روزانہ شام کو اپ ڈیٹ ہوتا ہے، لیکن ماتحت ضلعی اور سیشن عدالتوں میں انٹرنیٹ اور ڈیجیٹل سسٹم ہر جگہ یکساں فعال نہیں ہے۔ اکثر تحصیل کچہریوں میں احکامات ہاتھ سے رجسٹر میں درج ہوتے ہیں جنہیں آن لائن آنے میں 2 سے 4 دن لگ سکتے ہیں۔ کچہری کے کیسز میں لازمی اپنے وکیل یا عدالت کے ریڈر/اہلمد سے تاریخ کنفرم کریں۔',
    },
    {
      questionEn: 'How can I check if my case will be heard tomorrow morning?',
      questionUr: 'کیسے پتہ چلے گا کہ کل صبح واقعی میرا کیس عدالت میں لگے گا یا نہیں؟',
      answerEn:
        'Every evening between 6:00 PM and 9:00 PM, High Courts and the Supreme Court upload their official Daily Cause List for the next working day. Search the Cause List by your case number or advocate’s name. If your case is listed, note the Court Room number and your Serial Number on the roster. If urgent matters were filed in the afternoon, check the Supplementary Cause List uploaded early the following morning.',
      answerUr:
        'ہر شام 6 سے 9 بجے کے درمیان عدالتیں اگلے دن کی باقاعدہ "کاز لسٹ" (Cause List) جاری کرتی ہیں۔ کاز لسٹ میں اپنا کیس نمبر یا وکیل کا نام تلاش کریں۔ اگر نام موجود ہو تو کمرہ عدالت اور سیریل نمبر نوٹ کریں۔ ہنگامی مقدمات کے لیے صبح جاری ہونے والی سپلیمنٹری لسٹ بھی دیکھی جاتی ہے۔',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbs} />

          {/* Header Section */}
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-doc-ink/10 dark:bg-slate-800 text-doc-ink dark:text-slate-200 border border-slate-300 dark:border-slate-700">
                <Scale className="w-3.5 h-3.5 text-doc-seal" />
                JUDICIAL SERVICES DIRECTORY 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5" />
                VERIFIED OFFICIAL DOMAINS ONLY
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-doc-ink dark:text-white tracking-tight leading-tight">
              Pakistan Court Case Status Check Online 2026: Official Portals Directory
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 font-serif" dir="rtl">
              پاکستان کی تمام عدالتوں کے مقدمات کا آن لائن سٹیٹس: سپریم کورٹ، پانچوں ہائی کورٹس اور ضلعی کچہریوں کی مصدقہ پورٹل ڈائریکٹری
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <VerifiedBadge />
              <InteractiveToolBadge />
              <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-doc-seal" />
                Verified Active Portals for 2026
              </span>
            </div>
          </header>

          {/* Direct Answer Box */}
          <DirectAnswerBox
            topicTitleEn="How to Check Court Case Status Online in Pakistan?"
            topicTitleUr="پاکستان میں عدالتی کیس کا سٹیٹس آن لائن کیسے چیک کریں؟"
            answerEn="Pakistan has no single unified national case-status portal or CNR number. Unlike India's centralized e-Courts system, every court tier—the Supreme Court of Pakistan, all five High Courts (Lahore, Sindh, Peshawar, Islamabad, Balochistan), and provincial district judiciaries—maintains its own independent portal and search criteria. This verified directory maps directly to each court's official tracking tool."
            answerUr="پاکستان میں تمام عدالتوں کے لیے کوئی ایک مرکزی پورٹل یا بھارتی طرز کا CNR نمبر موجود نہیں ہے۔ سپریم کورٹ آف پاکستان، پانچوں ہائی کورٹس (لاہور، سندھ، پشاور، اسلام آباد، بلوچستان) اور ماتحت ضلعی عدالتیں اپنے اپنے الگ الگ سرکاری پورٹلز چلاتی ہیں۔ یہ مصدقہ گائیڈ آپ کو براہ راست متعلقہ عدالت کے درست سرچ پیج پر لے جاتی ہے۔"
          />

          {/* Debunking the Myth Banner */}
          <section className="doc-card p-5 sm:p-6 rounded-2xl border border-amber-500/40 bg-gradient-to-br from-amber-50/60 via-white to-amber-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-amber-950/20 shadow-sm space-y-3">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base font-serif font-bold text-doc-ink dark:text-white">
                  Important Clarification: Debunking the &ldquo;Unified National Portal&rdquo; &amp; &ldquo;CNR Number&rdquo; Myth
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Several online articles published on low-quality websites describe a single search box where you enter a &ldquo;16-digit CNR Number&rdquo; to track any case in Pakistan. This information is <strong>completely false</strong> and has been plagiarized from India&apos;s <code>ecourts.gov.in</code> system.
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed pt-1">
                  In Pakistan, there is <strong>no CNR number</strong>. Court cases are identified by:
                  <strong className="text-doc-ink dark:text-white"> Case Type</strong> (e.g., Writ Petition / W.P., Civil Appeal / C.A., Criminal Revision),
                  <strong className="text-doc-ink dark:text-white"> Case Number</strong> (e.g., 2415), and
                  <strong className="text-doc-ink dark:text-white"> Year of Filing</strong> (e.g., 2025). You must visit the specific portal for the specific court handling your matter.
                </p>
              </div>
            </div>
          </section>

          {/* Official Court Portals Directory Table / Cards */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
              <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white flex items-center gap-2">
                <Building2 className="w-6 h-6 text-doc-seal" />
                Verified Case Search Portals Directory (Apex &amp; High Courts)
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-sans mt-1">
                Click directly on the verified official domain for your court to access live hearing dates, cause lists, and order sheets:
              </p>
            </div>

            <div className="space-y-3">
              {courtDirectory.map((court, idx) => (
                <div
                  key={idx}
                  className={`doc-card p-5 rounded-2xl border shadow-xs transition hover:shadow-md ${
                    court.isApex
                      ? 'border-doc-brass/50 bg-gradient-to-r from-amber-50/40 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-amber-950/20'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-serif font-bold text-doc-ink dark:text-white">
                          {court.courtNameEn}
                        </h3>
                        {court.isApex && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-extrabold uppercase bg-amber-500 text-slate-950">
                            Apex Court
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-serif" dir="rtl">
                        {court.courtNameUr}
                      </p>
                    </div>

                    <a
                      href={court.portalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-doc-ink dark:bg-white text-white dark:text-doc-ink font-mono font-bold text-xs hover:opacity-90 transition shrink-0 shadow-xs"
                    >
                      <span>Open {court.portalLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 text-xs font-sans">
                    <div className="space-y-1">
                      <span className="font-mono uppercase text-[10px] text-slate-400 font-bold block">
                        Search Portal Section
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 font-medium">
                        {court.searchSection}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="font-mono uppercase text-[10px] text-slate-400 font-bold block">
                        Required Information
                      </span>
                      <p className="text-slate-700 dark:text-slate-300">
                        {court.requiredFieldsEn}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="font-mono uppercase text-[10px] text-slate-400 font-bold block">
                        Available Features &amp; Jurisdiction
                      </span>
                      <p className="text-slate-600 dark:text-slate-400">
                        {court.whatYouCanCheckEn}
                      </p>
                      <span className="text-[10px] text-doc-seal dark:text-amber-400 font-medium block pt-0.5">
                        {court.coverageNoteEn}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <AdPlacementZone format="horizontal" />

          {/* ProcessStepsDiagram */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
              <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white flex items-center gap-2">
                <Search className="w-6 h-6 text-doc-seal" />
                How to Search Your Case: Universal 5-Step Guide
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-sans mt-1">
                Follow this sequence to ensure you pull the exact hearing status and order sheets from the correct court portal:
              </p>
            </div>

            <ProcessStepsDiagram
              steps={processSteps}
              titleEn="Chronological Court Case Status Lookup Workflow"
              titleUr="عدالتی کیس کا سٹیٹس معلوم کرنے کا مرحلہ وار طریقہ کار"
              subtitleEn="From court identification to downloading official order sheets"
              subtitleUr="عدالت کی شناخت سے لے کر عدالتی حکم نامہ ڈاؤن لوڈ کرنے تک"
              variant="paper"
            />
          </section>

          {/* Critical Distinction: Case Status vs Judgments vs Cause Lists */}
          <section className="space-y-3">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
              <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white flex items-center gap-2">
                <FileText className="w-6 h-6 text-doc-brass" />
                Case Status vs. Judgments vs. Cause Lists: Key Differences
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-sans mt-1">
                Understanding these three tools prevents litigants from getting stranded on past judgment archives when searching for upcoming hearings:
              </p>
            </div>

            <ComparisonVisual
              items={comparisonItems}
              titleEn="Comparing Live Trackers, Judgment Databases &amp; Daily Cause Lists"
              titleUr="لائیو کیس ٹریکر، عدالتی فیصلوں کے آرکائیو اور یومیہ کاز لسٹ میں فرق"
              subtitleEn="Three separate court publications serving very different legal purposes."
              subtitleUr="تین مختلف عدالتی سروسز جو مختلف ضروریات کے لیے استعمال ہوتی ہیں"
            />
          </section>

          {/* Honest Reality Check on District / Lower Courts */}
          <section className="doc-card p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/60 space-y-4">
            <div className="flex items-center gap-2 text-doc-seal dark:text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>Honest Coverage Evaluation</span>
            </div>

            <h2 className="text-xl font-serif font-bold text-doc-ink dark:text-white">
              What About District, Sessions, and Family Courts?
            </h2>

            <p className="text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
              While the Supreme Court of Pakistan and all five High Courts have solid, highly reliable public tracking portals that update daily, <strong>subordinate district and tehsil courts remain inconsistently digitized</strong> across Pakistan. Here is the realistic state of lower court case tracking:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <strong className="block text-doc-ink dark:text-white font-serif text-sm">
                  Punjab District Courts
                </strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Lahore High Court has rolled out e-courts initiatives and the Case Automation &amp; Management System (CAMS) across district courts. Major cities (Lahore, Rawalpindi, Faisalabad, Multan) have reasonable coverage, but tehsil-level civil and family courts frequently experience upload delays of 2 to 4 days.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <strong className="block text-doc-ink dark:text-white font-serif text-sm">
                  Sindh District Courts (CFMS-DC)
                </strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Sindh High Court hosts the Case Flow Management System for District Courts (CFMS-DC). Karachi districts (East, West, South, Central, Malir) and Hyderabad are fairly active, while interior Sindh rural sessions courts often lack real-time hearing uploads.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <strong className="block text-doc-ink dark:text-white font-serif text-sm">
                  Khyber Pakhtunkhwa District Judiciary
                </strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Integrated through PHC’s centralized CFMS database. Divisional headquarters (Peshawar, Mardan, Abbottabad, Swat) report high coverage, but remote merged tribal districts (Khyber, Kurram, Waziristan) have periodic server connectivity gaps.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <strong className="block text-doc-ink dark:text-white font-serif text-sm">
                  Balochistan &amp; Islamabad Lower Courts
                </strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Balochistan district cases are accessible via <code>portal.bhc.gov.pk</code> for Quetta and major divisional courts, but remote tehsils have limited internet penetration. Islamabad District Courts (East &amp; West) are partially digitized with ongoing portal upgrades.
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-900 dark:text-amber-300 flex items-start gap-2">
              <Info className="w-4 h-4 shrink-0 mt-0.5" />
              <span>
                <strong>Crucial Litigant Advice:</strong> If your family, civil, or criminal trial is in a subordinate district or tehsil court and does not show an updated hearing date online, <strong>never assume the court did not meet</strong>. Always verify the adjournment date directly with your lawyer or the court reader (Ahlmad) to avoid ex-parte proceedings.
              </span>
            </div>
          </section>

          {/* Overseas Litigants Section */}
          <section className="doc-card p-6 rounded-2xl border border-doc-brass/30 bg-gradient-to-br from-white to-amber-50/30 dark:from-slate-900 dark:to-amber-950/20 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-doc-brass font-mono text-xs font-bold uppercase tracking-wider">
              <Globe className="w-4 h-4" />
              <span>Special Facility for Expatriates</span>
            </div>
            <h2 className="text-xl font-serif font-bold text-doc-ink dark:text-white">
              Overseas Litigants Facilitation Cell (Supreme Court of Pakistan)
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
              In late 2026, the Supreme Court of Pakistan officially operationalized a dedicated <strong>Overseas Litigants Facilitation Cell (OLFC)</strong> under its Public Facilitation Portal to assist Pakistanis living abroad who have cases pending before the apex court.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans pt-1">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-doc-ink dark:text-white">
                  <Smartphone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dedicated WhatsApp Channel</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-mono text-sm font-bold">
                  +92 326 4442444
                </p>
                <p className="text-[10px] text-slate-500">Messages only; operated for case status and hearing inquiry</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-doc-ink dark:text-white">
                  <Clock className="w-4 h-4 text-doc-seal shrink-0" />
                  <span>Toll-Free Apex Helpline</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-mono text-sm font-bold">
                  1818
                </p>
                <p className="text-[10px] text-slate-500">Universal technical assistance and procedural inquiries</p>
              </div>
            </div>
          </section>

          <AdPlacementZone format="horizontal" />

          {/* FAQ Accordion Visual */}
          <section className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
              <h2 className="text-2xl font-serif font-bold text-doc-ink dark:text-white flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-doc-seal" />
                Frequently Asked Questions (FAQs)
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-sans mt-1">
                Clear, straightforward answers addressing online court case tracking in Pakistan without legal jargon:
              </p>
            </div>

            <FAQAccordionVisual
              items={courtFaqs}
              titleEn="Court Case Status Check Essential FAQs"
              titleUr="عدالتی کیس آن لائن چیک کرنے کے بارے میں عمومی سوالات"
            />
          </section>

          {/* Related Legal Guides / Cross-Linking */}
          <section className="space-y-3 pt-2">
            <h2 className="text-lg font-serif font-bold text-doc-ink dark:text-white">
              Related Court &amp; Legal Documentation Guides on Pakistan Info Hub
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <Link
                href="/legal/succession-certificate-legal-heir-nadra-2026"
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-doc-seal/50 transition group space-y-1 shadow-xs"
              >
                <span className="text-[11px] font-mono text-doc-brass font-bold uppercase block">Succession</span>
                <strong className="text-sm font-serif text-doc-ink dark:text-white group-hover:text-doc-seal transition block">
                  Succession Certificate 2026 &rarr;
                </strong>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Court succession letter vs NADRA digital certificate procedures.
                </p>
              </Link>

              <Link
                href="/legal/power-of-attorney-online-overseas-pakistanis-2026"
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-doc-seal/50 transition group space-y-1 shadow-xs"
              >
                <span className="text-[11px] font-mono text-doc-brass font-bold uppercase block">Overseas</span>
                <strong className="text-sm font-serif text-doc-ink dark:text-white group-hover:text-doc-seal transition block">
                  Power of Attorney Online &rarr;
                </strong>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Digital PoA attestation for appointing lawyers and representatives in Pakistan.
                </p>
              </Link>

              <Link
                href="/legal/how-to-get-fir-copy-online-pakistan-2026"
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-doc-seal/50 transition group space-y-1 shadow-xs"
              >
                <span className="text-[11px] font-mono text-doc-brass font-bold uppercase block">Police Records</span>
                <strong className="text-sm font-serif text-doc-ink dark:text-white group-hover:text-doc-seal transition block">
                  Get Certified FIR Copy &rarr;
                </strong>
                <p className="text-xs text-slate-500 line-clamp-2">
                  How to obtain certified police report copies for court trial presentation.
                </p>
              </Link>

              <Link
                href="/property/property-mutation-check-by-cnic"
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-doc-seal/50 transition group space-y-1 shadow-xs"
              >
                <span className="text-[11px] font-mono text-doc-brass font-bold uppercase block">Property</span>
                <strong className="text-sm font-serif text-doc-ink dark:text-white group-hover:text-doc-seal transition block">
                  Property Mutation by CNIC &rarr;
                </strong>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Check land revenue title records and dispute stay order notations.
                </p>
              </Link>
            </div>
          </section>

          {/* Official Regulatory Disclaimer */}
          <footer className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-2 font-sans">
            <p className="flex items-start gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Independent Public Service Notice:</strong> Pakistan Info Hub is an independent civic portal and is not affiliated with the Law &amp; Justice Commission of Pakistan, the Supreme Court, or any provincial High Court. Online case records and hearing rosters are subject to last-minute bench alterations, urgent supplementary cause lists, and technical downtime. Always consult with your enrolled legal counsel or the concerned court reader to verify formal judicial notices.
              </span>
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
