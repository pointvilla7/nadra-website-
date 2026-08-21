'use client';

import React, { useState, useMemo } from 'react';
import {
  Briefcase,
  Search,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  Building,
  Check,
  Copy,
  Sparkles,
  Info,
  Layers,
  Scale,
  DollarSign,
  HelpCircle,
  FileText
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

export type CompanyTypeId = 'smc-pvt' | 'pvt-ltd' | 'public-ltd' | 'llp' | 'section-42';

interface CompanyTypeConfig {
  id: CompanyTypeId;
  nameEn: string;
  nameUr: string;
  suffix: string;
  suffixUr: string;
  minMembers: string;
  bestFor: string;
}

const COMPANY_TYPES: CompanyTypeConfig[] = [
  {
    id: 'smc-pvt',
    nameEn: 'Single Member Company (SMC-Pvt)',
    nameUr: 'سنگل ممبر کمپنی (SMC-Private)',
    suffix: '(SMC-Private) Limited',
    suffixUr: '(ایس ایم سی - پرائیویٹ) لمیٹڈ',
    minMembers: '1 Director (Solo Entrepreneur)',
    bestFor: 'Sole owners, tech founders & individual consultants',
  },
  {
    id: 'pvt-ltd',
    nameEn: 'Private Limited Company (Pvt Ltd)',
    nameUr: 'پرائیویٹ لمیٹڈ کمپنی (Pvt Ltd)',
    suffix: '(Private) Limited',
    suffixUr: '(پرائیویٹ) لمیٹڈ',
    minMembers: 'Min 2 Directors / Shareholders',
    bestFor: 'Partnerships, startups, SME businesses & joint ventures',
  },
  {
    id: 'llp',
    nameEn: 'Limited Liability Partnership (LLP)',
    nameUr: 'لمیٹڈ لائبلٹی پارٹنرشپ (LLP)',
    suffix: 'LLP',
    suffixUr: 'ایل ایل پی',
    minMembers: 'Min 2 Designated Partners',
    bestFor: 'Professional firms (Lawyers, Doctors, Accountants)',
  },
  {
    id: 'public-ltd',
    nameEn: 'Public Limited Company',
    nameUr: 'پبلک لمیٹڈ کمپنی',
    suffix: 'Limited',
    suffixUr: 'لمیٹڈ',
    minMembers: 'Min 3 (Unlisted) / 7 (Listed)',
    bestFor: 'Large enterprises raising capital from general public',
  },
  {
    id: 'section-42',
    nameEn: 'Non-Profit / Section 42 Company',
    nameUr: 'نان پرافٹ / سیکشن 42 فاؤنڈیشن',
    suffix: 'Foundation / Association / Society',
    suffixUr: 'فاؤنڈیشن / ایسوسی ایشن / سوسائٹی',
    minMembers: 'Min 3 Promoters',
    bestFor: 'Charities, welfare trusts, and NGO institutions',
  },
];

// Restricted / Sensitive words in SECP Companies Regulations
const RESTRICTED_PATTERNS = [
  {
    regex: /\b(bank|banking|banker|microfinance)\b/i,
    category: 'Banking / SBP Licensing',
    desc: 'Requires prior NOC / License from State Bank of Pakistan (SBP).',
    descUr: 'اس نام کے لیے سٹیٹ بینک آف پاکستان (SBP) کا لائسنس یا این او سی لازمی ہے۔',
  },
  {
    regex: /\b(insurance|assurance|reinsurance|takaful)\b/i,
    category: 'Insurance / SECP Insurance Division',
    desc: 'Requires statutory clearance from SECP Insurance Division.',
    descUr: 'انشورنس یا تکافل کے نام کے لیے ایس ای سی پی انشورنس ڈویژن کی اجازت درکار ہے۔',
  },
  {
    regex: /\b(modaraba|venture capital|investment bank|mutual fund|nbfc)\b/i,
    category: 'Non-Banking Financial Companies (NBFC)',
    desc: 'Requires specialized financial services license under NBFC Rules.',
    descUr: 'اس نام کے لیے این بی ایف سی فنانشل سروسز لائسنس لازمی ہے۔',
  },
  {
    regex: /\b(national|federal|state|pakistan|government|govt|provincial)\b/i,
    category: 'State Patronage / Government Implying',
    desc: 'Words implying government patronage require special Federal Government approval.',
    descUr: 'حکومتی تاثر دینے والے الفاظ کے لیے وفاقی حکومت کی خصوصی منظوری درکار ہوتی ہے۔',
  },
  {
    regex: /\b(authority|commission|board|chartered|tribunal|council)\b/i,
    category: 'Statutory / Regulatory Body',
    desc: 'Cannot imply a statutory regulatory authority unless established by Act of Parliament.',
    descUr: 'یہ الفاظ صرف قانونی یا حکومتی اتھارٹی کے لیے مخصوص ہیں، عام کمپنی کے لیے نہیں۔',
  },
  {
    regex: /\b(university|board of examination)\b/i,
    category: 'Higher Education / HEC Charter',
    desc: 'Degree-awarding titles require HEC and Provincial Charter approval.',
    descUr: 'یونیورسٹی کے نام کے لیے ہائر ایجوکیشن کمیشن (HEC) کا چارٹر ضروری ہے۔',
  },
  {
    regex: /\b(un|uno|imf|world bank|unesco|who|red cross|red crescent)\b/i,
    category: 'International Organization',
    desc: 'Strictly prohibited under SECP naming regulations.',
    descUr: 'بین الاقوامی اداروں کے نام کے استعمال پر قانونی پابندی ہے۔',
  },
];

export const CompanyNameAvailabilityChecker: React.FC = () => {
  const { t } = useLanguage();

  const [companyType, setCompanyType] = useState<CompanyTypeId>('pvt-ltd');
  const [proposedName, setProposedName] = useState('');
  const [copied, setCopied] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  const selectedType = COMPANY_TYPES.find((c) => c.id === companyType) || COMPANY_TYPES[1];

  // Clean raw root name (remove extra spaces and auto-strip typed suffixes)
  const cleanedRoot = useMemo(() => {
    let clean = proposedName.trim();
    // Strip common typed suffixes if user inadvertently typed them
    clean = clean.replace(/\(?(private|pvt|smc-private|smc-pvt|llp|limited|ltd)\)?\.?/gi, '').trim();
    return clean.replace(/\s+/g, ' ');
  }, [proposedName]);

  const fullCompanyName = useMemo(() => {
    if (!cleanedRoot) return '';
    if (selectedType.id === 'section-42') {
      return `${cleanedRoot} Foundation`;
    }
    return `${cleanedRoot} ${selectedType.suffix}`;
  }, [cleanedRoot, selectedType]);

  // Validation Rules Evaluation
  const validationResult = useMemo(() => {
    const raw = cleanedRoot;
    const issues: { type: 'error' | 'warning' | 'info'; title: string; desc: string; descUr: string }[] = [];

    if (!raw) {
      return { isValid: false, issues, score: 0 };
    }

    // 1. Length check
    if (raw.length < 3) {
      issues.push({
        type: 'error',
        title: 'Name is too short (Minimum 3 characters)',
        desc: 'SECP requires the distinctive root of the company name to be at least 3 letters long.',
        descUr: 'کمپنی کا بنیادی نام کم از کم 3 حروف پر مشتمل ہونا لازمی ہے۔',
      });
    }

    // 2. Character validity check
    if (!/^[a-zA-Z0-9\s\-\&]+$/.test(raw)) {
      issues.push({
        type: 'error',
        title: 'Special characters detected',
        desc: 'SECP only permits English alphabets, numbers, hyphens (-), and ampersand (&). Avoid symbols like @, #, $, %, *, !.',
        descUr: 'نام میں علامات جیسے @, #, $, %, * کی اجازت نہیں۔ صرف حروف، ہندسے اور & استعمال کریں۔',
      });
    }

    // 3. Single generic word check
    const words = raw.split(/\s+/);
    const genericTerms = ['technologies', 'solutions', 'enterprises', 'services', 'traders', 'group', 'consultants', 'consultancy', 'holdings', 'industries', 'logistics', 'systems'];
    if (words.length === 1 && genericTerms.includes(raw.toLowerCase())) {
      issues.push({
        type: 'error',
        title: 'Generic Single Word (Lacks Distinctiveness)',
        desc: `SECP rejects standalone generic words like "${raw}". Add a unique distinctive brand prefix (e.g. "Vertex ${raw}").`,
        descUr: 'صرف ایک عام لفظ (جیسے Technologies یا Enterprises) بطور نام منظور نہیں ہوتا۔ منفرد برانڈ کا نام ساتھ لکھیں۔',
      });
    }

    // 4. Restricted words check
    for (const item of RESTRICTED_PATTERNS) {
      if (item.regex.test(raw)) {
        issues.push({
          type: 'warning',
          title: `Restricted Word: ${item.category}`,
          desc: item.desc,
          descUr: item.descUr,
        });
      }
    }

    // 5. Positive evaluation
    const hasErrors = issues.some((i) => i.type === 'error');
    const hasWarnings = issues.some((i) => i.type === 'warning');

    let score = 100;
    if (hasErrors) score = 20;
    else if (hasWarnings) score = 65;

    return {
      isValid: !hasErrors,
      hasWarnings,
      issues,
      score,
    };
  }, [cleanedRoot]);

  const handleCopy = () => {
    if (!fullCompanyName) return;
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(fullCompanyName).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasChecked(true);
  };

  return (
    <div className="my-8 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-doc-ink overflow-hidden shadow-xl">
      {/* Header Bar */}
      <div className="px-5 py-4 bg-doc-ink text-white flex items-center justify-between gap-3 border-b border-doc-brass/20">
        <div className="flex items-center gap-2.5">
          <Briefcase className="w-5 h-5 text-doc-brass shrink-0" />
          <div>
            <h3 className="font-serif font-bold text-sm text-white leading-tight">
              {t(
                'SECP Company Name Availability & Rules Checker 2026',
                'ایس ای سی پی کمپنی نام کی دستیابی و قانونی اصول چیکر'
              )}
            </h3>
            <p className="text-[10px] text-slate-400 font-mono">
              {t(
                'Companies Act 2017 Rules • Restricted Words Detector • eZfile Portal Gateway',
                'کمپنیز ایکٹ 2017 کے قواعد • ممنوعہ الفاظ کی فوری شناخت • آفیشل eZfile پورٹل'
              )}
            </p>
          </div>
        </div>
        <InteractiveToolBadge labelEn="SECP VALIDATOR" labelUr="ایس ای سی پی چیکر" variant="gold" />
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Step 1: Select Company Type */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-doc-seal dark:text-red-400" />
            <span>{t('1. Select Company Structure / Legal Entity Type:', '1. کمپنی کی قانونی قسم منتخب کریں:')}</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {COMPANY_TYPES.map((type) => {
              const isSelected = companyType === type.id;
              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setCompanyType(type.id)}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition min-h-[74px] ${
                    isSelected
                      ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="font-serif font-bold text-xs leading-tight">{t(type.nameEn, type.nameUr)}</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold block">
                      Suffix: {type.suffix}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 font-sans">
                    {type.minMembers}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Input Field for Proposed Name */}
        <form onSubmit={handleSearchSubmit} className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="proposed-company-name-input"
                className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass"
              >
                {t('2. Enter Your Proposed Brand / Company Name:', '2. اپنی کمپنی یا برانڈ کا مجوزہ نام درج کریں:')}
              </label>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                {cleanedRoot.length} {t('chars', 'حروف')}
              </span>
            </div>

            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  id="proposed-company-name-input"
                  type="text"
                  maxLength={50}
                  value={proposedName}
                  onChange={(e) => {
                    setProposedName(e.target.value);
                    setHasChecked(true);
                  }}
                  placeholder="e.g. Apex Frontier or Silk Route Logistics"
                  className="w-full pl-4 pr-10 py-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-doc-ink dark:text-white font-mono text-base font-bold placeholder-slate-400 focus:outline-none focus:border-doc-seal tracking-wide shadow-inner min-h-[48px]"
                />
                {cleanedRoot && validationResult.isValid && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                )}
              </div>

              {fullCompanyName && (
                <button
                  type="button"
                  id="btn-copy-full-company-name"
                  onClick={handleCopy}
                  className="px-3.5 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-doc-brass font-mono font-bold text-xs shrink-0 flex items-center gap-1.5 transition min-h-[48px]"
                  title={t('Copy formatted legal name', 'مکمل قانونی نام کاپی کریں')}
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-doc-brass" />}
                  <span className="hidden sm:inline">{copied ? 'COPIED' : 'COPY LEGAL NAME'}</span>
                </button>
              )}
            </div>
          </div>
        </form>

        {/* Live Validation & Analysis Card */}
        {cleanedRoot && (
          <div className="p-5 sm:p-6 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/60 space-y-5 animate-fadeIn font-sans shadow-2xl relative">
            <div aria-hidden="true" className="absolute top-0 right-0 w-48 h-48 bg-doc-brass/10 rounded-full blur-3xl pointer-events-none" />

            {/* Generated Legal Name Display */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-doc-brass/30 pb-4">
              <div>
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-emerald-500/30">
                  {validationResult.isValid ? (validationResult.hasWarnings ? 'CONDITIONAL APPROVAL' : 'NAME FORMAT VALID') : 'NAME CONFLICT DETECTED'}
                </span>
                <p className="text-[11px] font-mono text-slate-400 mt-1 uppercase">
                  {t('Complete Legal Name (with SECP statutory suffix):', 'مکمل رجسٹرڈ قانونی نام:')}
                </p>
                <h4 className="text-xl sm:text-2xl font-serif font-extrabold text-doc-brass mt-0.5 tracking-tight">
                  {fullCompanyName}
                </h4>
              </div>

              <div className="text-left sm:text-right shrink-0">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs font-mono font-bold text-slate-200 flex items-center gap-1.5 transition min-h-[44px]"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-doc-brass" />}
                  <span>{copied ? t('COPIED!', 'کاپی ہو گیا!') : t('Copy Legal Name', 'قانونی نام کاپی')}</span>
                </button>
              </div>
            </div>

            {/* Issues / Feedback Details */}
            {validationResult.issues.length > 0 ? (
              <div className="space-y-2.5">
                {validationResult.issues.map((issue, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border flex items-start gap-3 ${
                      issue.type === 'error'
                        ? 'bg-red-950/40 border-red-500/40 text-red-200'
                        : 'bg-amber-950/40 border-amber-500/40 text-amber-200'
                    }`}
                  >
                    {issue.type === 'error' ? (
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="text-xs font-bold font-serif">{issue.title}</p>
                      <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">{t(issue.desc, issue.descUr)}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center gap-3 text-emerald-200 text-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>
                  {t(
                    'No restricted or prohibited keywords detected. Your name complies with SECP naming length and formatting criteria.',
                    'کوئی ممنوعہ لفظ نہیں پایا گیا۔ آپ کا مجوزہ نام ایس ای سی پی کے بنیادی قواعد کے عین مطابق ہے۔'
                  )}
                </span>
              </div>
            )}

            {/* SECP eZfile Action Steps */}
            <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800 space-y-2.5 text-xs text-slate-300 leading-relaxed">
              <p className="font-bold text-white flex items-center gap-1.5">
                <Building className="w-4 h-4 text-emerald-400" />
                <span>{t('Next Steps on Official SECP eZfile Portal (ezfile.secp.gov.pk):', 'ایس ای سی پی پورٹل پر نام فائنل کرنے کے مراحل:')}</span>
              </p>
              <ol className="list-decimal list-inside space-y-1.5 text-slate-300">
                <li>{t('Copy your full legal name ', 'اپنا مکمل قانونی نام ')}<strong className="font-mono text-doc-brass">{fullCompanyName}</strong>.</li>
                <li>{t('Click the gold button below to open the official SECP eZfile portal.', 'نیچے دیے گئے سنہری بٹن سے آفیشل eZfile پورٹل کھولیں۔')}</li>
                <li>{t('Log in with your CNIC/PIN, navigate to "Name Reservation", and enter your 3 proposed name choices in priority order.', 'سائن ان کر کے Name Reservation میں 3 ترجیحی نام درج کریں۔')}</li>
                <li>{t('Pay the statutory name reservation fee of PKR 1,000 via 1Link / credit card (valid for 60 days upon grant).', '1,000 روپے سرکاری فیس آن لائن ادا کریں (منظوری کے بعد نام 60 دن کے لیے محفوظ رہتا ہے)۔')}</li>
              </ol>
            </div>

            {/* Direct Official SECP Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <a
                href="https://ezfile.secp.gov.pk/"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-open-secp-ezfile"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-doc-brass via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-doc-ink font-mono font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-xl min-h-[48px]"
              >
                <span>{t('Check on SECP eZfile Portal (Official) →', 'آفیشل eZfile پورٹل پر نام چیک کریں ←')}</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>

              <a
                href="https://www.secp.gov.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition min-h-[48px]"
              >
                <span>{t('View SECP Regulations (secp.gov.pk) →', 'ایس ای سی پی گائیڈ لائنز دیکھیں ←')}</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>
        )}

        {/* Step 3: Fee & Cost Breakdown Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3 font-sans">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{t('Official SECP Incorporation Fee Schedule (2026 Online Rates):', 'سرکاری ایس ای سی پی رجسٹریشن فیس شیڈول:')}</span>
            </h4>
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
              eZfile 50% Subsidy
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block uppercase">1. Name Reservation</span>
              <span className="text-base font-mono font-bold text-doc-ink dark:text-white mt-0.5 block">PKR 1,000</span>
              <span className="text-[10px] text-slate-500 mt-1 block">Valid for 60 calendar days</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block uppercase">2. Incorporation (PKR 100K Capital)</span>
              <span className="text-base font-mono font-bold text-doc-ink dark:text-white mt-0.5 block">PKR 1,500 – 2,500</span>
              <span className="text-[10px] text-slate-500 mt-1 block">Online eZfile base filing fee</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block uppercase">3. Digital User PIN Sign-Up</span>
              <span className="text-base font-mono font-bold text-doc-ink dark:text-white mt-0.5 block">PKR 200</span>
              <span className="text-[10px] text-slate-500 mt-1 block">One-time account creation fee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3.5 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400 font-sans flex flex-wrap items-center justify-between gap-2">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>{t('Zero Data Retention: Proposed names are evaluated locally in your browser memory', '100٪ پرائیویٹ — آپ کا تجویز کردہ نام کہیں محفوظ نہیں کیا جاتا')}</span>
        </span>
        <span className="font-mono">SECP EZFILE 2026</span>
      </div>
    </div>
  );
};
