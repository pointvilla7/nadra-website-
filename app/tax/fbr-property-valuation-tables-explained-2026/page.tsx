import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { ComparisonVisual, ProcessStepsDiagram, FAQAccordionVisual } from '@/components/visuals';
import {
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowRight,
  Landmark,
  FileWarning,
  Layers,
  SearchCheck,
  Building,
  Globe,
  FileCheck,
  Scale,
  Receipt,
  MapPin,
  TrendingUp,
  CreditCard,
  Percent,
  Check,
  Info,
  Building2,
  FileText
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FBR Property Valuation Tables Explained 2026 – FBR vs DC Rates, SROs & Withholding Tax | Pakistan Info Hub',
  description:
    'Comprehensive guide explaining FBR property valuation tables in Pakistan: Dual valuation system (FBR vs Provincial DC rates), city-wise SRO notifications, calculating Advance Tax (236C/236K), Capital Gains Tax, and filer vs non-filer rules.',
  keywords: [
    'FBR property valuation tables 2026',
    'FBR vs DC rate difference',
    'FBR property SRO notifications',
    'Withholding tax 236C 236K property',
    'how to check FBR property valuation online',
    'FBR property rate Karachi Lahore Islamabad',
    'Section 68 Income Tax Ordinance property valuation',
    'property tax filer non filer rates Pakistan',
    'DC rate vs FBR rate property registration',
  ],
  openGraph: {
    title: 'FBR Property Valuation Tables Explained 2026 – FBR vs DC Rates & Tax Guide',
    description:
      'Understand why property transactions involve both FBR and DC valuations, how to check official city SRO rates, and how 236C/236K withholding taxes are calculated.',
    url: 'https://www.pakistaninfohub.com/tax/fbr-property-valuation-tables-explained-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/tax/fbr-property-valuation-tables-explained-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Tax & FBR Services', item: 'https://www.pakistaninfohub.com/tax' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'FBR Property Valuation Tables Explained',
          item: 'https://www.pakistaninfohub.com/tax/fbr-property-valuation-tables-explained-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'FBR Property Valuation Tables Explained: Dual Valuation System, DC Rates vs FBR SROs & Withholding Tax in Pakistan',
      description:
        'An authoritative, clarifying legal and tax guide explaining the distinction between Federal Board of Revenue (FBR) property valuation tables and Provincial DC rates, how SRO notifications determine Advance Income Taxes (236C & 236K), and how both systems operate on a single property transaction.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-09-01',
      dateModified: '2026-09-01',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/tax/fbr-property-valuation-tables-explained-2026',
    },
    {
      '@type': 'HowTo',
      name: 'How to Check and Verify FBR Property Valuation Tables Online',
      description: 'Step-by-step method to look up official statutory regulatory orders (SROs) for immovable property rates across Pakistani cities.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Access Official FBR Property Valuation Portal',
          text: 'Navigate directly to fbr.gov.pk and open the "Valuation of Immovable Properties" section or property-valuation-tables directory.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Select Target City and Open Active SRO Notification',
          text: 'Locate your city (e.g., Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, Quetta) and download the latest notified SRO document.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Identify Specific Area, Category & Property Type',
          text: 'Find your sector, mouza, or scheme and determine whether the rate applies to residential open plots, constructed buildings, commercial units, or apartments per square yard / marla.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Compare with Actual Declared Consideration',
          text: 'Apply the higher value between the FBR notified rate and the actual agreed contract price to compute federal advance taxes (Section 236C for sellers and Section 236K for buyers).',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why are there two different property valuations (FBR vs DC Rate) in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Because Pakistan operates a federal constitutional structure where taxation powers over immovable property are divided between the federal government and the provinces. The provincial government (Board of Revenue / District Collector) establishes "DC Rates" to collect provincial Stamp Duty, Registration Fees, and Capital Value Tax (CVT) through e-Stamping (Challan 32-A). The Federal Board of Revenue (FBR) establishes "FBR Valuation Tables" under Section 68 of the Income Tax Ordinance 2001 to collect federal Advance Income Taxes (Section 236C from sellers, Section 236K from buyers) and Capital Gains Tax.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which valuation determines what amount of tax I actually have to pay?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both valuations apply to their respective tax heads during the same transaction. You pay provincial stamp duty (e-stamp) calculated on the DC Rate (or declared value if higher), and you simultaneously pay federal withholding taxes (Sections 236C and 236K) calculated on the FBR Valuation Rate (or declared value if higher). If the actual agreed sale consideration on the sale deed is higher than both FBR and DC rates, taxes must be paid on that higher agreed value.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is FBR property valuation typically higher or lower than the provincial DC rate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'FBR property valuation is almost always significantly HIGHER than the provincial DC rate. Provincial DC rates were historically kept very low, whereas FBR valuation tables have been updated through progressive SRO revisions (2016, 2019, 2021, 2024, and 2026) to reflect 60% to 90% of actual prevailing fair market value in major urban centers.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if the actual sale price is higher than the FBR valuation table rate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under Section 68 of the Income Tax Ordinance 2001, advance income taxes under Section 236C and Section 236K must be computed on the FBR valuation rate OR the actual contract value (declared sale price), WHICHEVER IS HIGHER. You cannot use a lower FBR table rate to evade taxes if the recorded sale deed states a higher price.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often does FBR update its property valuation tables?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'FBR revises property valuation tables periodically through new Statutory Regulatory Orders (SROs), typically every 1 to 2 years in consultation with real estate associations, provincial authorities, and international financial institutions. When checking rates for your area, always ensure you examine both the primary city SRO and any subsequent amending SROs issued on fbr.gov.pk.',
          },
        },
      ],
    },
  ],
};

export default function FBRPropertyValuationTablesExplainedPage() {
  const breadcrumbs = [
    { nameEn: 'Tax & FBR Services', nameUr: 'ٹیکس اور ایف بی آر سروسز' },
    { nameEn: 'FBR Property Valuation Tables Explained', nameUr: 'ایف بی آر پراپرٹی ویلیوایشن ٹیبلز کی وضاحت' },
  ];

  const valuationSystemComparison = [
    {
      titleEn: 'Federal Valuation (FBR Tables)',
      titleUr: 'وفاقی ویلیوایشن (ایف بی آر ٹیبلز)',
      subtitleEn: 'Income Tax Ordinance 2001 (Section 68)',
      subtitleUr: 'انکم ٹیکس آرڈیننس 2001 (سیکشن 68)',
      badgeEn: 'FEDERAL TAXES',
      badgeUr: 'وفاقی انکم ٹیکس',
      badgeVariant: 'navy' as const,
      pointsEn: [
        'Notified by Federal Board of Revenue via SROs on fbr.gov.pk for 50+ major cities',
        'Used to calculate Advance Tax: Section 236C (Seller) & Section 236K (Buyer)',
        'Used to compute Capital Gains Tax (CGT) & Deemed Income under Section 7E',
        'Updated progressively closer to real market value (60% to 90% of open market)',
        'Tax rates depend heavily on ATL status (Active Filer vs Late Filer vs Non-Filer)',
      ],
      pointsUr: [
        'ایف بی آر کے نوٹیفائیڈ ایس آر اوز کے ذریعے 50 سے زائد شہروں کے لیے جاری',
        'سیکشن 236C (فروخت کنندہ) اور 236K (خریدار) کا ایڈوانس ٹیکس',
        'کیپٹل گینز ٹیکس (CGT) اور سیکشن 7E ڈیمڈ انکم ٹیکس کا حساب',
        'مارکیٹ ریٹ کے 60 سے 90 فیصد کے قریب تک اپ ڈیٹ شدہ',
        'ٹیکس کی شرح ایکٹو فائلر، لیٹ فائلر اور نان فائلر سٹیٹس پر منحصر ہے',
      ],
      isPopular: true,
    },
    {
      titleEn: 'Provincial Valuation (DC Rates)',
      titleUr: 'صوبائی ویلیوایشن (ڈی سی ریٹس)',
      subtitleEn: 'Provincial Stamp Act & Board of Revenue',
      subtitleUr: 'بورڈ آف ریونیو و صوبائی اسٹامپ ایکٹ',
      badgeEn: 'PROVINCIAL DUTIES',
      badgeUr: 'صوبائی اسٹامپ ڈیوٹی',
      badgeVariant: 'emerald' as const,
      pointsEn: [
        'Notified by Deputy Commissioner / District Collector for every revenue estate (Mouza)',
        'Used to calculate Provincial Stamp Duty on e-Stamping portals (Challan Form 32-A)',
        'Determines Sub-Registrar deed registration fees, Town/TMA transfer tax, & Provincial CVT',
        'Calculated automatically inside provincial e-Stamping portals (Punjab, Sindh, KP)',
        'Applies uniformly regardless of federal income tax filer status',
      ],
      pointsUr: [
        'ڈپٹی کمشنر / کلیکٹر کی جانب سے ہر موضع اور پٹوار سرکل کے لیے مقرر',
        'ای اسٹامپ پورٹل پر چالان فارم 32-A کی اسٹامپ ڈیوٹی کا تعین',
        'رجسٹریشن فیس، بلدیاتی ٹیکس اور صوبائی کیپٹل ویلیو ٹیکس (CVT)',
        'صوبائی ای اسٹامپنگ پورٹلز پر رقبہ درج کرتے ہی خودکار حساب',
        'تمام شہریوں پر یکساں لاگو ہوتا ہے، فائلر یا نان فائلر کی تفریق کے بغیر',
      ],
    },
  ];

  const lookupSteps = [
    {
      stepNumber: 1,
      titleEn: 'Visit the Official FBR Property Valuation Directory',
      titleUr: 'ایف بی آر کی آفیشل پراپرٹی ویلیوایشن ڈائریکٹری کھولیں',
      detailEn:
        'Go to fbr.gov.pk and navigate to "Valuation of Immovable Properties" or open the property valuation tables section. Never rely on third-party real estate blogs whose cached tables may be years out of date.',
      detailUr:
        'ایف بی آر کی اصل ویب سائٹ پر جا کر "Valuation of Immovable Properties" کا سیکشن کھولیں۔ پرانے بلاگز کے غیر تصدیق شدہ ریٹس پر انحصار نہ کریں۔',
    },
    {
      stepNumber: 2,
      titleEn: 'Download the Primary SRO for Your City / District',
      titleUr: 'اپنے شہر کا بنیادی ایس آر او نوٹیفکیشن ڈاؤن لوڈ کریں',
      detailEn:
        'Select your city (e.g., Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Peshawar, Quetta, Multan, Abbottabad, Gujranwala) and download the official PDF gazette notification.',
      detailUr:
        'اپنے مطلوبہ شہر (لاہور، کراچی، اسلام آباد، پشاور، کوئٹہ وغیرہ) کا گزٹ نوٹیفکیشن پی ڈی ایف ڈاؤن لوڈ کریں۔',
    },
    {
      stepNumber: 3,
      titleEn: 'Locate Your Exact Area, Category & Property Type',
      titleUr: 'اپنا مخصوص علاقہ، کیٹیگری اور جائیداد کی قسم تلاش کریں',
      detailEn:
        'Check the table for your specific housing scheme, phase, sector, or road. Verify whether the rate is stated per square yard (Sq. Yds), per square foot, or per Marla/Kanal, and note the difference between Open Residential, Constructed Residential, Commercial Plot, and Commercial Built-up/Flats.',
      detailUr:
        'اپنے ہاؤسنگ فیز، سیکٹر یا روڈ کی کیٹیگری دیکھیں کہ ریٹ فی مربع گز ہے، فی مرلہ ہے یا فی مربع فٹ۔ رہائشی، کمرشل اور تعمیر شدہ فلیٹ کے الگ ریٹس ہوتے ہیں۔',
    },
    {
      stepNumber: 4,
      titleEn: 'Check for Subsequent Amending SROs',
      titleUr: 'بعد میں جاری ہونے والے ترمیمی ایس آر اوز چیک کریں',
      detailEn:
        'Look at the "Other Related SROs" list on the city\'s page. FBR frequently issues corrigenda or upward amendments following initial major revisions.',
      detailUr:
        'متعلقہ شہر کے صفحے پر دیکھیں کہ کیا کوئی بعد کا ترمیمی نوٹیفکیشن تو نہیں آیا جس نے پرانے ریٹ میں اضافہ یا ترمیم کی ہو۔',
    },
    {
      stepNumber: 5,
      titleEn: 'Apply the Higher Rule (FBR Value vs Contract Price)',
      titleUr: 'زیادہ ویلیو کا اصول لاگو کریں (ایف بی آر بمقابلہ معاہدہ قیمت)',
      detailEn:
        'Multiply the unit rate by your property size. If the actual agreed transaction price in your sale deed is higher than this FBR figure, use the higher sale price as your tax base for Sections 236C & 236K.',
      detailUr:
        'پراپرٹی کے رقبے کو ریٹ سے ضرب دیں۔ اگر بیع نامے میں اصل رقم اس سے زیادہ لکھی ہے تو ٹیکس کا حساب زیادہ رقم پر ہی کیا جائے گا۔',
    },
  ];

  const faqItems = [
    {
      questionEn: 'Why are there two different valuations (FBR vs DC Rate) for the exact same property?',
      questionUr: 'ایک ہی جائیداد کے لیے دو مختلف ویلیوایشنز (ایف بی آر بمقابلہ ڈی سی ریٹ) کیوں ہیں؟',
      answerEn:
        'In Pakistan\'s constitutional division of taxation powers, provincial governments levy taxes on property transfers and deeds (Stamp Duty, Registration Fee, CVT) based on DC Rates determined by District Collectors. The Federal Government levies Advance Income Tax on buying/selling and Capital Gains Tax based on FBR Valuation Tables notified under Section 68 of the Income Tax Ordinance 2001. Therefore, every property sale involves both provincial (DC) and federal (FBR) calculations.',
      answerUr:
        'آئین پاکستان کے تحت صوبائی حکومتیں اسٹامپ ڈیوٹی اور رجسٹری فیس ڈی سی ریٹ کے تحت وصول کرتی ہیں، جبکہ وفاقی حکومت (FBR) انکم ٹیکس آرڈیننس 2001 کے تحت خریدار اور بیچنے والے سے ودہولڈنگ ٹیکس ایف بی آر ویلیوایشن کے تحت وصول کرتی ہے۔ اس لیے دونوں ریٹس کا استعمال ہوتا ہے۔',
    },
    {
      questionEn: 'Which valuation determines the actual amount I have to pay at the registry/e-stamping?',
      questionUr: 'رجسٹری یا ای اسٹامپ کے وقت مجھے کس ویلیوایشن کے مطابق رقم ادا کرنی ہوگی؟',
      answerEn:
        'You do not choose one over the other; both apply to their respective legal components. For your Challan 32-A e-Stamp paper (provincial stamp duty), you pay based on the DC Rate (or declared value if higher). For your FBR Computerized Payment Receipts (CPRs / PSIDs) under Section 236C (Seller Tax) and Section 236K (Buyer Tax), you pay based on the FBR Valuation Table rate (or declared value if higher).',
      answerUr:
        'آپ کو دونوں ریٹس کے مطابق الگ الگ ٹیکس ادا کرنا ہوتا ہے۔ ای اسٹامپ چالان 32-A پر صوبائی اسٹامپ ڈیوٹی ڈی سی ریٹ پر نکلتی ہے، جبکہ بیچنے والے کا 236C ٹیکس اور خریدار کا 236K ٹیکس ایف بی آر ریٹ پر جمع ہوتا ہے۔',
    },
    {
      questionEn: 'Is FBR property valuation typically higher or lower than the provincial DC rate?',
      questionUr: 'کیا ایف بی آر کی پراپرٹی ویلیوایشن عام طور پر ڈی سی ریٹ سے زیادہ ہوتی ہے یا کم؟',
      answerEn:
        'FBR property valuation is almost always significantly HIGHER than the provincial DC rate. While DC rates in many districts remain historically conservative, FBR has implemented periodic upward revisions (via landmark SROs in 2016, 2019, 2021, 2024, and 2026) to bring federal valuation to approximately 60% to 90% of actual open market value in prime urban sectors.',
      answerUr:
        'ایف بی آر ویلیوایشن تقریباً تمام بڑے شہروں میں ڈی سی ریٹ سے خاصی زیادہ ہوتی ہے۔ ایف بی آر نے پے در پے نوٹیفکیشنز کے ذریعے اپنے ریٹس کو اوپن مارکیٹ کے حقیقی ریٹس کے قریب ترین (60 تا 90 فیصد) کر دیا ہے۔',
    },
    {
      questionEn: 'What happens if the actual agreed sale price is higher than the FBR valuation table rate?',
      questionUr: 'اگر پراپرٹی کی اصل قیمت فروخت ایف بی آر کے مقررہ ریٹ سے زیادہ ہو تو کیا ہوگا؟',
      answerEn:
        'Under Section 68 of the Income Tax Ordinance 2001, advance income taxes under Section 236C (Seller) and Section 236K (Buyer) must be computed on the FBR valuation rate OR the actual contract value (declared sale consideration), WHICHEVER IS HIGHER. You cannot use a lower FBR table rate to evade tax if the recorded sale deed states a higher transaction value.',
      answerUr:
        'انکم ٹیکس قانون کے مطابق ٹیکس کا حساب ایف بی آر ریٹ یا اصل قیمت فروخت میں سے جو بھی رقم زیادہ ہو، اس پر لگایا جاتا ہے۔ اگر اصل قیمت زیادہ ہے تو آپ کم ایف بی آر ریٹ دکھا کر ٹیکس کم نہیں کر سکتے۔',
    },
    {
      questionEn: 'How often does FBR revise its property valuation tables?',
      questionUr: 'ایف بی آر اپنے پراپرٹی ویلیوایشن ٹیبلز کو کتنے عرصے بعد تبدیل کرتا ہے؟',
      answerEn:
        'FBR revises property valuation tables periodically through new Statutory Regulatory Orders (SROs), typically every 1 to 2 years in consultation with real estate stakeholders, provincial authorities, and international financial institutions. Outdated cached tables from prior years can severely understate current tax liability, so always check the latest active SRO on fbr.gov.pk before executing a property deal.',
      answerUr:
        'ایف بی آر عام طور پر ہر ایک سے دو سال بعد نئے ایس آر اوز کے ذریعے ریٹس میں ترمیم کرتا ہے۔ پرانے ریٹس کی بنیاد پر ٹیکس کا تخمینہ غلط ہو سکتا ہے، اس لیے سودا کرنے سے قبل ہمیشہ ایف بی آر پورٹل سے تازہ ترین نوٹیفکیشن دیکھیں۔',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="space-y-10 md:space-y-14 animate-fadeIn font-sans">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="PROPERTY TAXATION REFORMS 2026" labelUr="پراپرٹی ٹیکسیشن و ویلیوایشن 2026" variant="navy" />
            <VerifiedBadge textEn="SECTION 68 INCOME TAX ORDINANCE" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            FBR Property Valuation Tables Explained: FBR vs DC Rates, SROs &amp; Withholding Tax Guide
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              ایف بی آر پراپرٹی ویلیوایشن ٹیبلز: ڈی سی ریٹ اور ایف بی آر ریٹ میں فرق، نوٹیفکیشنز اور ودہولڈنگ ٹیکس
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Buying or selling real estate in Pakistan? Many property owners are confused by why a single transaction involves two completely
            different property valuations: the <strong>Provincial DC Rate</strong> and the <strong>FBR Valuation Table</strong>. Learn how each system
            works, how SRO notifications determine Advance Income Taxes (Sections 236C &amp; 236K), and where to look up official rates for your city.
          </p>
        </header>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn="What is the Difference Between FBR Property Valuation and Provincial DC Rates?"
          topicTitleUr="ایف بی آر پراپرٹی ویلیوایشن اور صوبائی ڈی سی ریٹ میں بنیادی فرق کیا ہے؟"
          answerEn="FBR Valuation Tables are notified by the Federal Board of Revenue under Section 68 of the Income Tax Ordinance 2001 to calculate federal Advance Income Taxes (Section 236C for sellers, Section 236K for buyers) and Capital Gains Tax. Provincial DC (District Collector) Rates are notified by provincial Boards of Revenue to calculate Stamp Duty (Challan 32-A), CVT, and deed registration fees. Both valuations apply to their respective taxes during a single property transaction, and federal taxes are levied on the higher of the FBR valuation or declared contract price."
          answerUr="ایف بی آر ویلیوایشن ٹیبلز وفاقی حکومت (انکم ٹیکس آرڈیننس 2001 کے سیکشن 68) کے تحت جاری ہوتے ہیں جن کا مقصد وفاقی ایڈوانس ٹیکس (بیچنے والے کے لیے 236C اور خریدار کے لیے 236K) اور کیپٹل گینز ٹیکس کا حساب لگانا ہے۔ صوبائی ڈی سی ریٹس بورڈ آف ریونیو کے تحت اسٹامپ ڈیوٹی (چالان 32-A) اور رجسٹری فیس کے لیے استعمال ہوتے ہیں۔ ایک ہی پراپرٹی کے سودے میں یہ دونوں ریٹس الگ الگ ٹیکسز کے لیے استعمال ہوتے ہیں۔"
        />

        {/* 2-Tier Valuation System Comparison Visual */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-doc-seal" />
              <h2 className="text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
                Dual Valuation System in Pakistan: Federal (FBR) vs Provincial (DC)
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl">
              Understanding which valuation applies to which tax prevents transaction delays, underpayment penalties, and disputes at the sub-registrar office.
            </p>
          </div>

          <ComparisonVisual
            items={valuationSystemComparison}
          />
        </section>

        {/* Real-World Transaction Breakdown: How Both Rates Apply */}
        <section className="rounded-3xl border border-doc-brass/30 bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-doc-brass/20 pb-4">
            <Receipt className="w-7 h-7 text-doc-brass shrink-0" />
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
                Case Study: How Both Valuations Apply to One Single Property Transfer
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                A concrete walkthrough of how a 1-Kanal / 10-Marla property transfer is taxed across federal and provincial jurisdictions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 1: Provincial Layer */}
            <div className="rounded-2xl bg-white dark:bg-slate-800 p-5 border border-slate-200 dark:border-slate-700 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300">
                  PROVINCIAL LAYER • e-STAMPING
                </span>
                <Landmark className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                1. Provincial DC Rate &amp; Challan 32-A
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Before registry, the deed writer or citizen enters property dimensions on the provincial e-Stamping portal (e.g. Punjab <code className="text-emerald-700 dark:text-emerald-400 font-mono">es.punjab.gov.pk</code> or Sindh <code className="text-emerald-700 dark:text-emerald-400 font-mono">estamps.gos.pk</code>).
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Assessment Base:</strong> Assessed purely on the notified District Collector (DC) rate per marla / sq. yard.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Taxes Paid:</strong> Provincial Stamp Duty (typically 1% to 3%), Local Govt / TMA Transfer Tax (1%), and Sub-Registrar Fee.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Payment Route:</strong> Deposited via Challan 32-A at Bank of Punjab (BOP) or National Bank of Pakistan (NBP).</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/property/e-stamping-challan-32a-online-guide-2026"
                  className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <span>Read full e-Stamping &amp; Challan 32-A Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Step 2: Federal Layer */}
            <div className="rounded-2xl bg-white dark:bg-slate-800 p-5 border border-slate-200 dark:border-slate-700 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300">
                  FEDERAL LAYER • FBR SRO TABLES
                </span>
                <Scale className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
                2. FBR Valuation &amp; Advance Tax CPRs
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Simultaneously, the transaction triggers federal advance income taxes under the Income Tax Ordinance 2001, computed on the FBR Valuation Table.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                  <span><strong>Section 236C (Seller Tax):</strong> Advance tax on sale/transfer of property paid by the seller prior to mutation.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                  <span><strong>Section 236K (Buyer Tax):</strong> Advance tax on purchase of property paid by the buyer prior to transfer.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                  <span><strong>Payment Route:</strong> Generated via Iris / e-FBR PSID and deposited with Computerized Payment Receipt (CPR).</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/tax/withholding-tax-rates-filers-non-filers"
                  className="text-xs font-bold text-blue-700 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <span>Check Current 236C &amp; 236K Withholding Rates</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Lookup Process */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <SearchCheck className="w-5 h-5 text-doc-seal" />
              <h2 className="text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
                How to Check Current FBR Valuation Rates for Your City &amp; Sector
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl">
              Follow this verified 5-step procedure to access official SRO gazette notifications directly from the Federal Board of Revenue repository.
            </p>
          </div>

          <ProcessStepsDiagram
            steps={lookupSteps}
          />
        </section>

        {/* Property Categories Explained (Commercial, Residential, Built-up, Flats) */}
        <section className="rounded-3xl border border-doc-brass/30 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center gap-3 border-b border-doc-brass/20 pb-4">
            <Building2 className="w-7 h-7 text-doc-brass shrink-0" />
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
                Understanding Valuation Categories: Plots, Constructed &amp; Commercial
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                FBR SRO tables differentiate rates based on property classification, floor levels, and commercial viability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="font-bold text-doc-ink dark:text-white font-mono text-sm flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-doc-seal" />
                Residential Open Plot
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Evaluated per square yard or per marla. Rate applies to unconstructed land in approved schemes, societies, or municipal areas.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="font-bold text-doc-ink dark:text-white font-mono text-sm flex items-center gap-1.5">
                <Building className="w-4 h-4 text-doc-seal" />
                Constructed Residential
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Includes the plot land value plus a standardized built-up rate per square foot (calculated on covered area of ground and upper floors).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="font-bold text-doc-ink dark:text-white font-mono text-sm flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-doc-seal" />
                Commercial Land &amp; Plazas
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Carries significantly higher valuation multipliers. Rates vary between main commercial boulevard frontages and inner commercial lanes.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="font-bold text-doc-ink dark:text-white font-mono text-sm flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-doc-seal" />
                Flats &amp; Apartments
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Assessed per square foot of covered apartment area, often with tiered rate adjustments for ground floor vs upper storeys or penthouse units.
              </p>
            </div>
          </div>
        </section>

        {/* Periodic Revisions & Upward Trajectory Warning */}
        <section className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-400 dark:border-amber-600 space-y-3">
          <div className="flex items-center gap-2.5 text-amber-900 dark:text-amber-300 font-bold text-base">
            <TrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>Historical SRO Revisions: Why You Must Never Rely on Outdated Cached Rates</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Prior to 2016, property transactions in Pakistan were assessed predominantly on nominal DC rates, leading to substantial tax leakage.
            Starting in 2016 and followed by successive major revisions (including landmark SROs in 2019, 2021, late 2024, and 2026), the FBR
            has systematically adjusted valuations upward for over 50 major urban centers—including Karachi, Lahore, Islamabad, Rawalpindi,
            Faisalabad, Multan, Peshawar, and Quetta.
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            <strong>Key takeaway:</strong> Never rely on real estate blogs or printed booklets from previous years. Always check the active SRO
            directly on <a href="https://www.fbr.gov.pk" target="_blank" rel="noopener noreferrer" className="text-doc-seal dark:text-amber-400 font-bold underline">fbr.gov.pk</a> to ensure your tax calculations reflect the latest gazette amendments.
          </p>
        </section>

        {/* Filer Status Impact (Cross-Linked) */}
        <section className="rounded-3xl border-2 border-doc-brass/40 bg-gradient-to-br from-doc-ink via-slate-900 to-doc-ink text-white p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex items-center gap-3 border-b border-doc-brass/30 pb-4">
            <Percent className="w-7 h-7 text-doc-brass shrink-0" />
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-white">
                Filer vs Non-Filer Tax Impact on FBR Valuation
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Your Active Taxpayer List (ATL) status creates massive differences in the final advance tax payable under Sections 236C and 236K.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            The applicable percentage applied to the FBR property valuation is strictly governed by whether the buyer and seller appear on the
            FBR Active Taxpayer List (ATL). Non-filers and late filers face punitive advance tax rates that can add hundreds of thousands of rupees
            to a property purchase or sale.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-2">
              <span className="font-bold text-emerald-300 font-mono block">ACTIVE TAX FILER STATUS</span>
              <p className="text-slate-300 leading-relaxed">
                Filers enjoy baseline statutory advance tax rates on both sale (Section 236C) and purchase (Section 236K), and the amount paid is fully adjustable against annual income tax liabilities.
              </p>
              <Link
                href="/tax/fbr-active-taxpayer-status-helper-2026"
                className="inline-flex items-center gap-1.5 text-doc-brass font-bold hover:underline pt-1"
              >
                <span>Verify Your CNIC on Active Taxpayer List</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-2">
              <span className="font-bold text-red-300 font-mono block">NON-FILER / INACTIVE STATUS</span>
              <p className="text-slate-300 leading-relaxed">
                Non-filers are subject to substantially higher advance withholding taxes, making property transactions significantly more costly until a valid return is filed on Iris 2.0.
              </p>
              <Link
                href="/tax/how-to-become-tax-filer-pakistan-2026"
                className="inline-flex items-center gap-1.5 text-doc-brass font-bold hover:underline pt-1"
              >
                <span>How to File Tax Return &amp; Become Active Filer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Genuinely Clarifying FAQ Section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-doc-seal" />
              <h2 className="text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
                Frequently Asked Questions: FBR Valuation Tables &amp; DC Rates
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl">
              Clear, practical answers resolving common confusions regarding property valuations, tax computations, and registry procedures.
            </p>
          </div>

          <FAQAccordionVisual items={faqItems} />
        </section>

        {/* Cross-Linking Related Guides */}
        <section className="rounded-3xl border border-doc-brass/30 bg-slate-50 dark:bg-slate-900/40 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-serif font-bold text-doc-ink dark:text-white">
            Related Property, Legal &amp; Taxation Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link
              href="/property/e-stamping-challan-32a-online-guide-2026"
              className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition group shadow-sm"
            >
              <span className="text-xs font-mono font-bold text-doc-seal dark:text-red-400">e-STAMPING PORTAL</span>
              <h3 className="text-sm font-bold text-doc-ink dark:text-white group-hover:text-doc-seal transition mt-1">
                eStamping Citizen Portal &amp; Challan 32-A Guide 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Generate Challan 32-A online, automated provincial DC rates, and bank payments across Punjab, Sindh, and Islamabad.
              </p>
            </Link>

            <Link
              href="/property/property-tax-online-check-pay-2026"
              className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition group shadow-sm"
            >
              <span className="text-xs font-mono font-bold text-doc-seal dark:text-red-400">ANNUAL PROPERTY TAX</span>
              <h3 className="text-sm font-bold text-doc-ink dark:text-white group-hover:text-doc-seal transition mt-1">
                Property Tax Online Check &amp; Pay Guide 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Excise &amp; Taxation annual property tax PIN check, 5% e-payment rebate, and exemptions.
              </p>
            </Link>

            <Link
              href="/tax/withholding-tax-rates-filers-non-filers"
              className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-doc-brass transition group shadow-sm"
            >
              <span className="text-xs font-mono font-bold text-doc-seal dark:text-red-400">WITHHOLDING RATES</span>
              <h3 className="text-sm font-bold text-doc-ink dark:text-white group-hover:text-doc-seal transition mt-1">
                Withholding Tax Rates for Filers &amp; Non-Filers 2026
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Complete comparison of 236C, 236K, bank cash withdrawals, and vehicle purchase tax rates.
              </p>
            </Link>
          </div>
        </section>

        {/* Ad Placement */}
        <AdPlacementZone slotId="tax-article-bottom" format="horizontal" />
      </div>
    </>
  );
}
