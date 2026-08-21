'use client';

import React, { useState, useMemo } from 'react';
import {
  Compass,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  ExternalLink,
  Info,
  DollarSign,
  MapPin,
  FileText,
  UserCheck,
  AlertCircle,
  Clock,
  HeartHandshake,
  Check
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

export type HajjSchemeId = 'govt-regular' | 'govt-sponsorship' | 'private-tour';
export type DepartureRegion = 'north' | 'south';
export type PackageDuration = 'long' | 'short';

interface SchemeDetail {
  id: HajjSchemeId;
  nameEn: string;
  nameUr: string;
  badge: string;
  descEn: string;
  descUr: string;
}

const SCHEMES: SchemeDetail[] = [
  {
    id: 'govt-regular',
    nameEn: 'Government Regular Scheme',
    nameUr: 'سرکاری ریگولر حج سکیم (قرعہ اندازی)',
    badge: 'Standard Balloting',
    descEn: 'Subsidized state arrangements with automated public balloting quota.',
    descUr: 'حکومت پاکستان کے زیر اہتمام معیاری سہولیات اور شفاف کمپیوٹرائزڈ قرعہ اندازی۔',
  },
  {
    id: 'govt-sponsorship',
    nameEn: 'Government Sponsorship Scheme',
    nameUr: 'سرکاری سپانسرشپ سکیم (ڈالر کوٹہ)',
    badge: '100% Balloting-Free',
    descEn: 'For overseas Pakistanis & remittances sent in foreign USD. No balloting required.',
    descUr: 'بیرون ملک سے فارن ایکسچینج (ڈالر) بھیجنے والوں کے لیے بغیر قرعہ اندازی 100٪ یقینی حج۔',
  },
  {
    id: 'private-tour',
    nameEn: 'Private Tour Operators (HGOs)',
    nameUr: 'پرائیویٹ ٹور آپریٹرز (HGOs)',
    badge: 'Custom & VIP Packages',
    descEn: 'Customized luxury, executive 5-star, and short-duration private group packages.',
    descUr: 'پرائیویٹ ٹریول ایجنسیوں کے ذریعے فائیو سٹار ہوٹلز، قریبی مکاتب اور شارٹ ٹور پیکیجز۔',
  },
];

export const HajjApplicationEligibilityChecker: React.FC = () => {
  const { t } = useLanguage();

  const [scheme, setScheme] = useState<HajjSchemeId>('govt-regular');
  const [region, setRegion] = useState<DepartureRegion>('north');
  const [duration, setDuration] = useState<PackageDuration>('long');
  const [age, setAge] = useState<number>(42);
  const [isRepeatPilgrim, setIsRepeatPilgrim] = useState<boolean>(false);
  const [hasMedicalFitness, setHasMedicalFitness] = useState<boolean>(true);
  const [isFemaleWithoutMahram, setIsFemaleWithoutMahram] = useState<boolean>(false);

  // Dynamic Cost Calculation based on official MORA policy brackets
  const calculation = useMemo(() => {
    let minCostPkr = 0;
    let maxCostPkr = 0;
    let usdAmount = 0;
    let currencyNote = '';

    if (scheme === 'govt-regular') {
      if (duration === 'long') {
        if (region === 'north') {
          minCostPkr = 1175000;
          maxCostPkr = 1225000;
        } else {
          minCostPkr = 1150000;
          maxCostPkr = 1200000;
        }
      } else {
        // Short package (20-25 days) has slightly higher daily logistics/airfare rate
        if (region === 'north') {
          minCostPkr = 1200000;
          maxCostPkr = 1250000;
        } else {
          minCostPkr = 1175000;
          maxCostPkr = 1225000;
        }
      }
      currencyNote = 'Payable in PKR via designated Pakistani commercial banks in installments.';
    } else if (scheme === 'govt-sponsorship') {
      if (region === 'north') {
        usdAmount = duration === 'long' ? 4250 : 4325;
        minCostPkr = 1190000;
        maxCostPkr = 1250000;
      } else {
        usdAmount = duration === 'long' ? 4050 : 4200;
        minCostPkr = 1150000;
        maxCostPkr = 1210000;
      }
      currencyNote = `Direct USD Wire Remittance: ~$${usdAmount.toLocaleString()} USD (100% exempt from balloting).`;
    } else {
      // Private HGOs
      minCostPkr = duration === 'short' ? 2200000 : 1800000;
      maxCostPkr = 3800000;
      currencyNote = 'Private market rates vary by hotel distance from Haram and room occupancy (Sharing / Quad / Double).';
    }

    // Eligibility check evaluation
    const isAgeEligible = age >= 12;
    const isBallotingRequired = scheme === 'govt-regular';
    const isFirstTimeAdvantage = !isRepeatPilgrim;

    return {
      minCostPkr,
      maxCostPkr,
      usdAmount,
      currencyNote,
      isAgeEligible,
      isBallotingRequired,
      isFirstTimeAdvantage,
    };
  }, [scheme, region, duration, age, isRepeatPilgrim]);

  return (
    <div className="my-8 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-doc-ink overflow-hidden shadow-xl">
      {/* Header */}
      <div className="px-5 py-4 bg-doc-ink text-white flex items-center justify-between gap-3 border-b border-doc-brass/20">
        <div className="flex items-center gap-2.5">
          <Compass className="w-5 h-5 text-doc-brass shrink-0" />
          <div>
            <h3 className="font-serif font-bold text-sm text-white leading-tight">
              {t(
                'Official Hajj 2026 Application Eligibility & Cost Estimator',
                'حج پالیسی 2026 اہلیت چیکر و تخمینہ اخراجات'
              )}
            </h3>
            <p className="text-[10px] text-slate-400 font-mono">
              {t(
                'Ministry of Religious Affairs (MORA) Framework • Govt vs Sponsorship vs Private',
                'وزارت مذہبی امور پاکستان — سرکاری، سپانسرشپ و پرائیویٹ پیکیجز'
              )}
            </p>
          </div>
        </div>
        <InteractiveToolBadge labelEn="ELIGIBILITY CALCULATOR" labelUr="اہلیت کیلکولیٹر" variant="gold" />
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Step 1: Scheme Selector */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-doc-seal dark:text-red-400" />
            <span>{t('1. Choose Hajj Scheme Category:', '1. حج سکیم کی قسم منتخب کریں:')}</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
            {SCHEMES.map((item) => {
              const isSelected = scheme === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setScheme(item.id)}
                  className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition min-h-[82px] ${
                    isSelected
                      ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-serif font-bold text-xs leading-tight">{t(item.nameEn, item.nameUr)}</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 font-bold inline-block">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {t(item.descEn, item.descUr)}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Flight Station & Duration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200 dark:border-slate-800">
          {/* Departure Region */}
          <div className="space-y-1.5">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-doc-brass" />
              <span>{t('Departure Flight Station (Region):', 'روانگی کا فلائٹ اسٹیشن:')}</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setRegion('north')}
                className={`py-3 px-3 rounded-xl border text-xs font-mono font-bold transition flex flex-col items-center justify-center min-h-[52px] ${
                  region === 'north'
                    ? 'bg-doc-ink text-white border-doc-brass shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700'
                }`}
              >
                <span>{t('North Region', 'شمالی ریجن')}</span>
                <span className="text-[10px] text-slate-400 font-normal mt-0.5">ISB / LHR / PEW / MUX / SKT</span>
              </button>

              <button
                type="button"
                onClick={() => setRegion('south')}
                className={`py-3 px-3 rounded-xl border text-xs font-mono font-bold transition flex flex-col items-center justify-center min-h-[52px] ${
                  region === 'south'
                    ? 'bg-doc-ink text-white border-doc-brass shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700'
                }`}
              >
                <span>{t('South Region', 'جنوبی ریجن')}</span>
                <span className="text-[10px] text-slate-400 font-normal mt-0.5">KHI / UET / SKZ</span>
              </button>
            </div>
          </div>

          {/* Package Duration */}
          <div className="space-y-1.5">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-doc-brass" />
              <span>{t('Package Duration:', 'سفر کی مدت:')}</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setDuration('long')}
                className={`py-3 px-3 rounded-xl border text-xs font-mono font-bold transition flex flex-col items-center justify-center min-h-[52px] ${
                  duration === 'long'
                    ? 'bg-doc-ink text-white border-doc-brass shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700'
                }`}
              >
                <span>{t('Long Package', 'لانگ پیکیج')}</span>
                <span className="text-[10px] text-slate-400 font-normal mt-0.5">{t('38 – 42 Days', '38 تا 42 دن')}</span>
              </button>

              <button
                type="button"
                onClick={() => setDuration('short')}
                className={`py-3 px-3 rounded-xl border text-xs font-mono font-bold transition flex flex-col items-center justify-center min-h-[52px] ${
                  duration === 'short'
                    ? 'bg-doc-ink text-white border-doc-brass shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700'
                }`}
              >
                <span>{t('Short Package', 'شارٹ پیکیج')}</span>
                <span className="text-[10px] text-slate-400 font-normal mt-0.5">{t('20 – 25 Days', '20 تا 25 دن')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Step 3: Applicant Demographics & Eligibility Criteria */}
        <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
            <UserCheck className="w-4 h-4 text-doc-brass" />
            <span>{t('2. Applicant Eligibility Assessment:', '2. درخواست گزار کی اہلیت:')}</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Age input */}
            <div className="space-y-1 bg-white dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-700 dark:text-slate-200">{t('Pilgrim Age:', 'عمر (سال):')}</span>
                <span className="font-mono font-bold text-doc-brass">{age} Yrs</span>
              </div>
              <input
                type="range"
                min={10}
                max={90}
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-doc-brass"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>Min: 12</span>
                <span>Senior: 65+</span>
              </div>
              {age < 12 && (
                <p className="text-[11px] text-red-600 dark:text-red-400 font-sans font-semibold mt-1">
                  {t('Saudi policy restricts children under 12 years from performing Hajj.', 'سعودی قوانین کے تحت 12 سال سے کم عمر بچے حج کے اہل نہیں ہیں۔')}
                </p>
              )}
            </div>

            {/* Repeat Pilgrim Switch */}
            <button
              type="button"
              onClick={() => setIsRepeatPilgrim(!isRepeatPilgrim)}
              className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition min-h-[82px] ${
                isRepeatPilgrim
                  ? 'bg-amber-500/10 dark:bg-amber-950/40 border-amber-400 text-amber-900 dark:text-amber-200'
                  : 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold">{t('Performed Hajj in Last 5 Years?', 'گزشتہ 5 سال میں حج کیا ہے؟')}</span>
                <div className={`w-4 h-4 rounded border flex items-center justify-center ${isRepeatPilgrim ? 'bg-doc-brass border-doc-brass text-white' : 'border-slate-400'}`}>
                  {isRepeatPilgrim && <Check className="w-3 h-3" />}
                </div>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                {isRepeatPilgrim
                  ? t('Repeat pilgrims are eligible under Sponsorship or Private schemes.', 'دوبارہ حج کے لیے سپانسرشپ یا پرائیویٹ سکیم منتخب کریں۔')
                  : t('First-time pilgrims get 100% priority in Govt balloting.', 'پہلی بار حج کرنے والوں کو سرکاری قرعہ اندازی میں ترجیح حاصل ہے۔')}
              </p>
            </button>

            {/* Female Without Mahram Option */}
            <button
              type="button"
              onClick={() => setIsFemaleWithoutMahram(!isFemaleWithoutMahram)}
              className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition min-h-[82px] ${
                isFemaleWithoutMahram
                  ? 'bg-purple-500/10 dark:bg-purple-950/40 border-purple-400 text-purple-900 dark:text-purple-200'
                  : 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold">{t('Female Traveling in Female Group?', 'خاتون بغیر محرم (خواتین گروپ)؟')}</span>
                <div className={`w-4 h-4 rounded border flex items-center justify-center ${isFemaleWithoutMahram ? 'bg-purple-600 border-purple-600 text-white' : 'border-slate-400'}`}>
                  {isFemaleWithoutMahram && <Check className="w-3 h-3" />}
                </div>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                {isFemaleWithoutMahram
                  ? t('Allowed with notarized family consent affidavit under current policy.', 'خاندانی اجازت نامہ اور گروپ حلف نامے کے ساتھ مکمل اجازت ہے۔')
                  : t('Traveling with family / legal male Mahram.', 'خاندان یا قانونی محرم کے ہمراہ سفر۔')}
              </p>
            </button>
          </div>
        </div>

        {/* Calculation Result Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/60 space-y-5 relative overflow-hidden shadow-2xl animate-fadeIn">
          <div aria-hidden="true" className="absolute top-0 right-0 w-48 h-48 bg-doc-brass/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-doc-brass/30 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-emerald-500/30">
                  {calculation.isAgeEligible ? 'ELIGIBILITY CONFIRMED' : 'AGE CRITERIA NOTICE'}
                </span>
                {scheme === 'govt-sponsorship' && (
                  <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-amber-500/30">
                    BALLOTING-FREE
                  </span>
                )}
              </div>
              <h4 className="text-xl font-serif font-extrabold text-white mt-1.5">
                {t('Estimated Official Package Cost Range:', 'سرکاری تخمینہ اخراجات:')}
              </h4>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-[10px] font-mono text-slate-400 uppercase">INDICATIVE DUES (PER PERSON)</p>
              <p className="text-2xl sm:text-3xl font-mono font-extrabold text-doc-brass tracking-tight">
                PKR {(calculation.minCostPkr / 100000).toFixed(2)}L – {(calculation.maxCostPkr / 100000).toFixed(2)}L
              </p>
              <p className="text-[10px] font-mono text-slate-400 mt-0.5">
                PKR {calculation.minCostPkr.toLocaleString()} – {calculation.maxCostPkr.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Scheme Breakdown Insights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans text-xs">
            <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800 space-y-1">
              <p className="text-[10px] font-mono text-slate-400 uppercase">{t('Selected Scheme', 'منتخب سکیم')}</p>
              <p className="text-sm font-serif font-bold text-white">
                {SCHEMES.find((s) => s.id === scheme)?.nameEn}
              </p>
              <span className="text-[10px] text-emerald-400 font-mono">
                {duration === 'long' ? '38-42 Days' : '20-25 Days'} • {region.toUpperCase()} Station
              </span>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800 space-y-1">
              <p className="text-[10px] font-mono text-slate-400 uppercase">{t('Balloting Status', 'قرعہ اندازی کی صورتحال')}</p>
              <p className="text-sm font-serif font-bold text-amber-300">
                {scheme === 'govt-regular' ? t('Subject to Computerized Draw', 'کمپیوٹرائزڈ قرعہ اندازی میں شامل') : t('100% Guaranteed Quota', '100٪ یقینی کوٹہ بغیر قرعہ اندازی')}
              </p>
              <span className="text-[10px] text-slate-400 font-mono">
                {isRepeatPilgrim ? t('Repeat Pilgrim Policy Applies', 'سابقہ عازمین شرائط لاگو') : t('First-Time Pilgrim Priority', 'پہلی بار عازمین کی ترجیح')}
              </span>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800 space-y-1">
              <p className="text-[10px] font-mono text-slate-400 uppercase">{t('Payment Method', 'ادائیگی کا طریقہ کار')}</p>
              <p className="text-sm font-serif font-bold text-emerald-300">
                {scheme === 'govt-sponsorship' ? t('Foreign USD Remittance', 'فارن کرنسی (امریکی ڈالر)') : t('Designated Bank Branch', 'نامزد بینک برانچ / چالان')}
              </p>
              <span className="text-[10px] text-slate-400 font-mono">{t('Installment schedule allowed', 'اقساط میں ادائیگی ممکن')}</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 font-sans italic border-t border-slate-800 pt-3">
            * Note: Package dues are indicative based on the official Ministry of Religious Affairs (MORA) Hajj Policy framework. Final amounts depend on Saudi riyal exchange rates and airfare contracts.
          </p>

          {/* Action CTA Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <a
              href="https://hajj.mora.gov.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-doc-brass via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-doc-ink font-mono font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-xl min-h-[48px]"
            >
              <span>{t('Apply / Check on Official MORA Portal →', 'وزارت مذہبی امور آفیشل پورٹل پر چیک کریں ←')}</span>
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>

            <a
              href="https://mora.gov.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition min-h-[48px]"
            >
              <span>{t('View Official MORA Hajj Policy (mora.gov.pk) →', 'آفیشل حج پالیسی گائیڈ لائنز ←')}</span>
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>

        {/* Step 4: Mandatory Document Checklist */}
        <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-doc-brass" />
            <span>{t('Required Documents Checklist (MORA 2026 Guidelines):', 'لازمی دستاویزات کی فہرست (سرکاری ہدایات):')}</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-sans">
            {[
              { title: 'Machine-Readable Passport (MRP)', desc: 'Valid at least until December of the Hajj year with blank visa pages.' },
              { title: 'Valid NADRA CNIC / NICOP', desc: 'Computerized national identity card or Smart National Identity Card.' },
              { title: 'Medical Fitness Certificate', desc: 'Issued by designated public hospital / authorized medical officer.' },
              { title: 'Mandatory Saudi Vaccinations', desc: 'Meningitis (ACYW135), Polio, and seasonal influenza certificates.' },
              { title: 'Active Bank Account / IBAN', desc: 'In applicant’s own name for automated electronic refund of unutilized dues.' },
              { title: 'Passport-Sized Photographs', desc: 'White / light-blue background adhering to Saudi visa specifications.' },
            ].map((doc, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-doc-ink dark:text-white">{doc.title}</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400 font-sans flex flex-wrap items-center justify-between gap-2">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>{t('Zero Data Storage: Calculator processes non-identifying inputs client-side only', '100٪ پرائیویٹ — کوئی ذاتی ڈیٹا جمع نہیں کیا جاتا')}</span>
        </span>
        <span className="font-mono">MORA HAJJ APPLICATION 2026</span>
      </div>
    </div>
  );
};
