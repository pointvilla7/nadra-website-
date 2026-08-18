'use client';

import React, { useState } from 'react';
import {
  Zap,
  Flame,
  Search,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Clock,
  Printer,
  FileText,
  Lock,
  ArrowRight,
  Info,
  Building,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

export type BillProviderKey = 'lesco' | 'iesco' | 'fesco' | 'mepco' | 'kelectric' | 'sngpl' | 'ssgc';

interface ProviderConfig {
  id: BillProviderKey;
  nameEn: string;
  nameUr: string;
  shortName: string;
  category: 'electric' | 'gas';
  refLabelEn: string;
  refLabelUr: string;
  digitLength: number;
  sampleRef: string;
  coverageEn: string;
  coverageUr: string;
  officialUrl: string;
  isLiveFetch: boolean;
  captchaNote?: boolean;
  helpline: string;
  helplineUr: string;
}

const PROVIDERS: Record<BillProviderKey, ProviderConfig> = {
  lesco: {
    id: 'lesco',
    nameEn: 'LESCO (Lahore Electric)',
    nameUr: 'لیسکو (لاہور الیکٹرک)',
    shortName: 'LESCO',
    category: 'electric',
    refLabelEn: '14-Digit Reference Number',
    refLabelUr: '14 ہندسوں کا ریفرنس نمبر',
    digitLength: 14,
    sampleRef: '14112345678901',
    coverageEn: 'Lahore, Kasur, Okara, Sheikhupura, Nankana Sahib',
    coverageUr: 'لاہور، قصور، اوکاڑہ، شیخوپورہ، ننکانہ صاحب',
    officialUrl: 'http://bill.pitc.com.pk/lescobill/',
    isLiveFetch: true,
    helpline: '118 or 0800-00118',
    helplineUr: '118 یا 0800-00118',
  },
  iesco: {
    id: 'iesco',
    nameEn: 'IESCO (Islamabad Electric)',
    nameUr: 'آئیسکو (اسلام آباد الیکٹرک)',
    shortName: 'IESCO',
    category: 'electric',
    refLabelEn: '14-Digit Reference Number',
    refLabelUr: '14 ہندسوں کا ریفرنس نمبر',
    digitLength: 14,
    sampleRef: '14123456789012',
    coverageEn: 'Islamabad, Rawalpindi, Attock, Jhelum, Chakwal',
    coverageUr: 'اسلام آباد، راولپنڈی، اٹک، جہلم، چکوال',
    officialUrl: 'http://bill.pitc.com.pk/iescobill/',
    isLiveFetch: true,
    helpline: '118 or 051-9252937',
    helplineUr: '118 یا 051-9252937',
  },
  fesco: {
    id: 'fesco',
    nameEn: 'FESCO (Faisalabad Electric)',
    nameUr: 'فیسکو (فیصل آباد الیکٹرک)',
    shortName: 'FESCO',
    category: 'electric',
    refLabelEn: '14-Digit Reference Number',
    refLabelUr: '14 ہندسوں کا ریفرنس نمبر',
    digitLength: 14,
    sampleRef: '13123456789012',
    coverageEn: 'Faisalabad, Sargodha, Jhang, Toba Tek Singh, Chiniot',
    coverageUr: 'فیصل آباد، سرگودھا، جھنگ، ٹوبہ ٹیک سنگھ، چنیوٹ',
    officialUrl: 'http://bill.pitc.com.pk/fescobill/',
    isLiveFetch: true,
    helpline: '118 or 0800-66554',
    helplineUr: '118 یا 0800-66554',
  },
  mepco: {
    id: 'mepco',
    nameEn: 'MEPCO (Multan Electric)',
    nameUr: 'میپکو (ملتان الیکٹرک)',
    shortName: 'MEPCO',
    category: 'electric',
    refLabelEn: '14-Digit Reference Number',
    refLabelUr: '14 ہندسوں کا ریفرنس نمبر',
    digitLength: 14,
    sampleRef: '15123456789012',
    coverageEn: 'Multan, Sahiwal, Bahawalpur, D.G. Khan, Rahim Yar Khan',
    coverageUr: 'ملتان، ساہیوال، بہاولپور، ڈیرہ غازی خان، رحیم یار خان',
    officialUrl: 'http://bill.pitc.com.pk/mepcobill/',
    isLiveFetch: true,
    helpline: '118 or 0800-63726',
    helplineUr: '118 یا 0800-63726',
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
    sampleRef: '0400012345678',
    coverageEn: 'Karachi, Dhabeji, Gharo, Vinder, Hub (Balochistan)',
    coverageUr: 'کراچی، دھابیجی، گھارو، حب',
    officialUrl: 'https://www.ke.com.pk/customer-services/bill-payment/',
    isLiveFetch: false,
    captchaNote: true,
    helpline: '118 or (021) 111-000-118',
    helplineUr: '118 یا 021-111-000-118',
  },
  sngpl: {
    id: 'sngpl',
    nameEn: 'SNGPL (Sui Northern Gas)',
    nameUr: 'سوئی ناردرن گیس (SNGPL)',
    shortName: 'SNGPL',
    category: 'gas',
    refLabelEn: '11-Digit Consumer Number (Account ID)',
    refLabelUr: '11 ہندسوں کا کنزیومر نمبر',
    digitLength: 11,
    sampleRef: '28461937501',
    coverageEn: 'Punjab, Khyber Pakhtunkhwa (KPK), Islamabad & AJK',
    coverageUr: 'پنجاب، خیبر پختونخوا، اسلام آباد اور آزاد کشمیر',
    officialUrl: 'https://www.sngpl.com.pk/web/bill',
    isLiveFetch: false,
    captchaNote: true,
    helpline: '1199 (SNGPL Helpline)',
    helplineUr: '1199 (سوئی ناردرن ہیلپ لائن)',
  },
  ssgc: {
    id: 'ssgc',
    nameEn: 'SSGC (Sui Southern Gas)',
    nameUr: 'سوئی سدرن گیس (SSGC)',
    shortName: 'SSGC',
    category: 'gas',
    refLabelEn: '10-Digit Customer Number',
    refLabelUr: '10 ہندسوں کا کسٹمر نمبر',
    digitLength: 10,
    sampleRef: '1234567890',
    coverageEn: 'Sindh (Karachi, Hyderabad, Sukkur) & Balochistan',
    coverageUr: 'سندھ (کراچی، حیدرآباد، سکھر) اور بلوچستان',
    officialUrl: 'https://www.ssgc.com.pk/web/ebill',
    isLiveFetch: false,
    captchaNote: true,
    helpline: '1199 (SSGC Helpline)',
    helplineUr: '1199 (سوئی سدرن ہیلپ لائن)',
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
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [billResult, setBillResult] = useState<any | null>(null);

  const provider = PROVIDERS[activeProvider];

  const handleTabChange = (key: BillProviderKey) => {
    setActiveProvider(key);
    setReferenceInput('');
    setErrorMsg(null);
    setBillResult(null);
  };

  const handleFetchBill = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanRef = referenceInput.replace(/[^0-9]/g, '');

    if (cleanRef.length !== provider.digitLength) {
      setErrorMsg(
        t(
          `Please enter a valid ${provider.digitLength}-digit number for ${provider.shortName}.`,
          `برائے مہربانی ${provider.nameUr} کے لیے مکمل ${provider.digitLength} ہندسوں کا نمبر درج کریں۔`
        )
      );
      return;
    }

    setLoading(true);
    setErrorMsg(null);
    setBillResult(null);

    try {
      const res = await fetch(`/api/bill-check/${activeProvider}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ referenceNo: cleanRef }),
      });

      const data = await res.json();

      if (!res.ok || !data.found) {
        setErrorMsg(
          data.message ||
            t(
              'No bill found for this reference number. Please check your bill copy and try again.',
              'اس ریفرنس نمبر کا کوئی بل نہیں ملا۔ برائے مہربانی اپنے پرانے بل پر نمبر کی تصدیق کریں۔'
            )
        );
      } else {
        setBillResult(data);
      }
    } catch (err) {
      setErrorMsg(
        t(
          'Could not reach the official bill server. Please check directly on the official portal.',
          'سرکاری سرور سے رابطہ نہیں ہو سکا۔ برائے مہربانی آفیشل پورٹل پر چیک کریں۔'
        )
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`w-full max-w-[560px] mx-auto rounded-2xl doc-card border-2 border-doc-brass/40 shadow-xl overflow-hidden bg-white dark:bg-doc-dark-card text-doc-ink dark:text-slate-100 transition-all ${className}`}
    >
      {/* Header */}
      {!hideHeader && (
        <div className="bg-doc-ink text-white p-5 sm:p-6 border-b-2 border-doc-brass/40 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-48 h-48 bg-doc-seal/15 rounded-full blur-2xl pointer-events-none"
          />
          <div className="flex items-center justify-between gap-2 mb-2">
            <InteractiveToolBadge labelEn="UTILITY BILL CHECKER" labelUr="یوٹیلیٹی بل چیکر" variant="gold" />
            <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-bold">
              <Lock className="w-3.5 h-3.5" />
              <span>PRIVACY SAFE</span>
            </div>
          </div>
          <div className="flex items-start gap-3 mt-3">
            <div className="p-2.5 rounded-xl bg-doc-brass/20 text-doc-brass border border-doc-brass/40 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-tight">
                {t('Utility Bill Checker 2026', 'آن لائن یوٹیلیٹی بل چیکر 2026')}
              </h2>
              <p className="text-xs text-slate-300 mt-1 font-sans">
                {t(
                  'Check LESCO electricity bills live + K-Electric, SNGPL & SSGC gas bill guides',
                  'لیسکو بجلی کا آن لائن بل اور کے الیکٹرک و سوئی گیس بل گائیڈز'
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Notice */}
      <div className="px-5 pt-4 pb-0">
        <div className="flex items-start gap-2 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[11px] text-emerald-800 dark:text-emerald-300 font-sans">
          <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
          <span>
            {t(
              'We fetch your bill directly from the official server for this session only — nothing is stored.',
              'ہم آپ کا بل صرف اس سیشن کے لیے براہ راست سرکاری سرور سے حاصل کرتے ہیں — کوئی ڈیٹا محفوظ نہیں کیا جاتا۔'
            )}
          </span>
        </div>
      </div>

      {/* Main Body */}
      <div className="p-5 sm:p-6 space-y-5">
        {/* Step 1: Provider Tabs */}
        <div className="space-y-2">
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
            <Building className="w-4 h-4 text-doc-seal dark:text-red-400" />
            <span>{t('Select Utility Company', 'کمپنی منتخب کریں')}</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {(Object.keys(PROVIDERS) as BillProviderKey[]).map((key) => {
              const p = PROVIDERS[key];
              const isSelected = activeProvider === key;
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleTabChange(key)}
                  className={`py-2 px-2.5 rounded-xl border text-center flex flex-col items-center justify-center gap-0.5 transition-all min-h-[50px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal text-xs font-sans ${
                    isSelected
                      ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                      : 'bg-doc-paper/60 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
                  }`}
                >
                  <span className="font-serif font-bold text-xs leading-tight">{p.shortName}</span>
                  <span className={`text-[10px] font-mono ${isSelected ? 'text-doc-brass' : 'text-slate-500 dark:text-slate-400'}`}>
                    {p.category === 'electric' ? '⚡ Electric' : '🔥 Gas'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Coverage Badge */}
        <div className="p-2.5 rounded-xl bg-doc-paper dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-sans flex items-start gap-2">
          <Info className="w-4 h-4 text-doc-brass shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-doc-ink dark:text-white">
              {t(provider.nameEn, provider.nameUr)}:
            </span>{' '}
            <span className="text-slate-600 dark:text-slate-300">
              {t(`Covers ${provider.coverageEn}`, `${provider.coverageUr}`)}
            </span>
          </div>
        </div>

        {/* CASE A: LIVE PROVIDER (LESCO) */}
        {provider.isLiveFetch ? (
          <div className="space-y-4">
            <form onSubmit={handleFetchBill} className="space-y-3">
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center justify-between">
                  <span>{t(provider.refLabelEn, provider.refLabelUr)}</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                    {provider.digitLength} DIGITS
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={provider.digitLength}
                    placeholder={t(`e.g. ${provider.sampleRef}`, `مثال: ${provider.sampleRef}`)}
                    value={referenceInput}
                    onChange={(e) => setReferenceInput(e.target.value.replace(/[^0-9]/g, ''))}
                    className="w-full pl-4 pr-12 py-3 rounded-xl bg-doc-paper dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-doc-ink dark:text-white font-mono text-base font-bold placeholder-slate-400 focus:outline-none focus:border-doc-seal transition tracking-wider"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400">
                    {referenceInput.length}/{provider.digitLength}
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                  {t(
                    'Found in the top-left or top-right box of any previous LESCO paper bill.',
                    'پرانے لیسکو بل کے اوپر والے خانے میں 14 ہندسوں کا ریفرنس نمبر لکھا ہوتا ہے۔'
                  )}
                </p>
              </div>

              <button
                type="submit"
                disabled={loading || referenceInput.length !== provider.digitLength}
                className="w-full py-3.5 px-4 rounded-xl bg-doc-seal hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-mono font-bold text-sm flex items-center justify-center gap-2 transition shadow-md min-h-[48px]"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>{t('FETCHING FROM OFFICIAL LESCO SERVER…', 'سرکاری سرور سے بل حاصل ہو رہا ہے…')}</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span>{t('CHECK LESCO BILL LIVE', 'لیسکو بل آن لائن دیکھیں')}</span>
                  </>
                )}
              </button>
            </form>

            {/* Skeleton Loading State */}
            {loading && (
              <div className="p-4 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/30 space-y-3 animate-pulse">
                <div className="h-4 bg-slate-700 rounded w-1/3" />
                <div className="h-8 bg-slate-700 rounded w-2/3" />
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="h-12 bg-slate-800 rounded" />
                  <div className="h-12 bg-slate-800 rounded" />
                </div>
              </div>
            )}

            {/* Error / Not Found State */}
            {errorMsg && !loading && (
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-700 space-y-2 text-amber-900 dark:text-amber-200">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-serif font-bold text-sm">{t('Bill Not Found or Server Busy', 'بل نہیں ملا یا سرور مصروف ہے')}</p>
                    <p className="text-xs font-sans mt-0.5 leading-relaxed">{errorMsg}</p>
                  </div>
                </div>
                <div className="pt-2 border-t border-amber-200 dark:border-amber-800">
                  <a
                    href={provider.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-doc-seal hover:underline"
                  >
                    <span>{t('Check directly at bill.pitc.com.pk', 'براہ راست آفیشل پورٹل پر چیک کریں')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* Successful Result Card */}
            {billResult && !loading && (
              <div
                aria-live="polite"
                className="p-5 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass shadow-xl space-y-4 animate-fadeIn relative overflow-hidden"
              >
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 w-32 h-32 bg-doc-brass/15 rounded-full blur-xl pointer-events-none"
                />

                {/* Result Header */}
                <div className="flex items-start justify-between gap-2 border-b border-doc-brass/30 pb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="font-mono text-[10px] text-doc-brass font-bold uppercase tracking-wider">
                        {t('LESCO Official Electricity Bill', 'لیسکو آفیشل بجلی کا بل')}
                      </p>
                      <p className="font-serif font-bold text-sm text-white">{billResult.consumerName}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                    {billResult.billMonth}
                  </span>
                </div>

                {/* Main Amounts Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-doc-brass/30">
                    <p className="text-[10px] font-mono text-doc-brass font-bold uppercase tracking-wider">
                      {t('Payable Within Due Date', 'آخری تاریخ تک قابل ادا')}
                    </p>
                    <p className="font-serif font-extrabold text-xl sm:text-2xl text-emerald-400 mt-0.5">
                      {billResult.payableWithinDue ? `PKR ${billResult.payableWithinDue}` : t('See Bill PDF', 'بل دیکھیں')}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                    <p className="text-[10px] font-mono text-slate-300 font-bold uppercase tracking-wider">
                      {t('Payable After Due Date', 'تاریخ کے بعد رقم')}
                    </p>
                    <p className="font-serif font-bold text-lg text-amber-300 mt-0.5">
                      {billResult.payableAfterDue ? `PKR ${billResult.payableAfterDue}` : '—'}
                    </p>
                  </div>
                </div>

                {/* Due Date & Units Meta */}
                <div className="grid grid-cols-2 gap-2 text-xs font-sans pt-1">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Clock className="w-4 h-4 text-doc-brass shrink-0" />
                    <span>
                      <strong>{t('Due Date:', 'آخری تاریخ:')}</strong> {billResult.dueDate}
                    </span>
                  </div>
                  {billResult.unitsConsumed && (
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Zap className="w-4 h-4 text-doc-brass shrink-0" />
                      <span>
                        <strong>{t('Units:', 'یونٹس:')}</strong> {billResult.unitsConsumed}
                      </span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-doc-brass/30">
                  <a
                    href={provider.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-doc-seal hover:bg-red-700 text-white font-mono font-bold text-xs flex items-center justify-center gap-1.5 transition min-h-[44px]"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{t('VIEW FULL OFFICIAL BILL (PDF)', 'مکمل آفیشل بل دیکھیں')}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-doc-brass/40 text-doc-brass font-mono font-bold text-xs flex items-center justify-center gap-1.5 transition min-h-[44px]"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>{t('PRINT SLIP', 'پرنٹ کریں')}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* CASE B: GUIDED HELPER PROVIDER (K-Electric / SNGPL / SSGC) */
          <div
            aria-live="polite"
            className="p-4 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/40 shadow-lg space-y-4 animate-fadeIn"
          >
            <div className="flex items-start gap-2">
              <Building className="w-5 h-5 text-doc-brass shrink-0 mt-0.5" />
              <div>
                <p className="font-mono text-[10px] text-doc-brass font-bold uppercase tracking-wider">
                  {t('Official Guided Portal', 'آفیشل پورٹل رہنمائی')}
                </p>
                <h3 className="font-serif font-bold text-lg text-white">
                  {t(provider.nameEn, provider.nameUr)}
                </h3>
              </div>
            </div>

            {/* Reference Number Instructions */}
            <div className="p-3 rounded-xl bg-slate-800/80 border border-doc-brass/30 space-y-2 text-xs font-sans">
              <p className="font-bold text-doc-brass flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                {t(`How to find your ${provider.digitLength}-digit number:`, `اپنا ${provider.digitLength} ہندسوں کا نمبر کیسے تلاش کریں:`)}
              </p>
              <p className="text-slate-300 leading-relaxed">
                {t(
                  `Look on the top section of your physical ${provider.shortName} bill for the ${provider.refLabelEn}. Example format: ${provider.sampleRef}.`,
                  `اپنے پرانے ${provider.nameUr} کے بل کے اوپر دیکھیں، وہاں ${provider.refLabelUr} درج ہے۔ مثال: ${provider.sampleRef}۔`
                )}
              </p>
              {provider.captchaNote && (
                <div className="flex items-center gap-1.5 text-amber-300 text-[11px] pt-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>
                    {t(
                      'The official portal requires solving a CAPTCHA verification.',
                      'سرکاری پورٹل پر کیپچا کوڈ درج کرنا لازمی ہے۔'
                    )}
                  </span>
                </div>
              )}
            </div>

            {/* Action Button to Official Site */}
            <a
              href={provider.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-doc-seal hover:bg-red-700 text-white font-mono font-bold text-xs flex items-center justify-center gap-2 transition shadow-md min-h-[46px]"
            >
              <span>{t(`OPEN OFFICIAL ${provider.shortName.toUpperCase()} BILL PORTAL`, `سرکاری ${provider.shortName} پورٹل کھولیں`)}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Helpline */}
            <div className="pt-2 border-t border-slate-700 flex items-center justify-between text-xs font-sans text-slate-300">
              <span>{t('Official Helpline:', 'سرکاری ہیلپ لائن:')}</span>
              <span className="font-mono font-bold text-doc-brass">{provider.helpline}</span>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-1 font-sans">
          <p className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-doc-seal shrink-0" />
            <span>{t('Independent Guide — Not Affiliated with Utility Providers', 'آزادانہ گائیڈ — کسی یوٹیلیٹی کمپنی سے وابستہ نہیں')}</span>
          </p>
          <p className="leading-relaxed">
            {t(
              'Pakistan Info Hub is an independent portal, not affiliated with LESCO, K-Electric, SNGPL, SSGC, or WAPDA. Always verify amounts at the official source before paying.',
              'پاکستان انفو ہب کا لیسکو، کے الیکٹرک، سوئی ناردرن یا سوئی سدرن سے کوئی سرکاری تعلق نہیں۔ ادائیگی سے قبل رقم کی حتمی تصدیق ہمیشہ سرکاری بل سے کریں۔'
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
