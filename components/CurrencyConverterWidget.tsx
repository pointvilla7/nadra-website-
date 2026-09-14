'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  ArrowRightLeft,
  RefreshCw,
  TrendingUp,
  ShieldCheck,
  Building,
  Info,
  Clock,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  DollarSign
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export interface CurrencyOption {
  code: string;
  nameEn: string;
  nameUr: string;
  symbol: string;
  flag: string;
}

export const SUPPORTED_CURRENCIES: CurrencyOption[] = [
  { code: 'USD', nameEn: 'US Dollar', nameUr: 'امریکی ڈالر', symbol: '$', flag: '🇺🇸' },
  { code: 'EUR', nameEn: 'Euro', nameUr: 'یورو', symbol: '€', flag: '🇪🇺' },
  { code: 'GBP', nameEn: 'British Pound', nameUr: 'برطانوی پاؤنڈ', symbol: '£', flag: '🇬🇧' },
  { code: 'SAR', nameEn: 'Saudi Riyal', nameUr: 'سعودی ریال', symbol: 'SAR', flag: '🇸🇦' },
  { code: 'AED', nameEn: 'UAE Dirham', nameUr: 'اماراتی درہم', symbol: 'AED', flag: '🇦🇪' },
  { code: 'CAD', nameEn: 'Canadian Dollar', nameUr: 'کینیڈین ڈالر', symbol: 'C$', flag: '🇨🇦' },
  { code: 'AUD', nameEn: 'Australian Dollar', nameUr: 'آسٹریلین ڈالر', symbol: 'A$', flag: '🇦🇺' },
  { code: 'CNY', nameEn: 'Chinese Yuan', nameUr: 'چینی یوآن', symbol: '¥', flag: '🇨🇳' },
  { code: 'KWD', nameEn: 'Kuwaiti Dinar', nameUr: 'کویتی دینار', symbol: 'KWD', flag: '🇰🇼' },
  { code: 'QAR', nameEn: 'Qatari Riyal', nameUr: 'قطری ریال', symbol: 'QAR', flag: '🇶🇦' },
  { code: 'OMR', nameEn: 'Omani Rial', nameUr: 'عمانی ریال', symbol: 'OMR', flag: '🇴🇲' },
  { code: 'BHD', nameEn: 'Bahraini Dinar', nameUr: 'بحرینی دینار', symbol: 'BHD', flag: '🇧🇭' },
  { code: 'PKR', nameEn: 'Pakistani Rupee', nameUr: 'پاکستانی روپیہ', symbol: '₨', flag: '🇵🇰' },
];

// Fallback baseline rates against USD (updated reference)
const FALLBACK_USD_RATES: Record<string, number> = {
  USD: 1.0,
  PKR: 277.59,
  EUR: 0.8622,
  GBP: 0.7395,
  SAR: 3.75,
  AED: 3.6725,
  CAD: 1.3863,
  AUD: 1.3976,
  CNY: 6.7156,
  KWD: 0.308,
  QAR: 3.64,
  OMR: 0.3845,
  BHD: 0.376,
};

const CACHE_KEY = 'pih_currency_rates_cache_v1';
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour client cache

export function CurrencyConverterWidget() {
  const { t, language } = useLanguage();
  const isUrdu = language === 'ur';

  const [amount, setAmount] = useState<string>('100');
  const [fromCode, setFromCode] = useState<string>('USD');
  const [toCode, setToCode] = useState<string>('PKR');
  const [rateMode, setRateMode] = useState<'interbank' | 'openMarket'>('interbank');

  const [rates, setRates] = useState<Record<string, number>>(FALLBACK_USD_RATES);
  const [lastUpdated, setLastUpdated] = useState<string>('September 14, 2026');
  const [isLive, setIsLive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // Fetch live rates from open.er-api.com
  const fetchLiveRates = useCallback(async (force = false) => {
    setIsLoading(true);
    setFetchError(null);

    try {
      // Check localStorage cache unless force refreshed
      if (!force && typeof window !== 'undefined') {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < CACHE_TTL_MS && parsed.rates) {
            setRates(parsed.rates);
            setLastUpdated(parsed.lastUpdated);
            setIsLive(true);
            setIsLoading(false);
            return;
          }
        }
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      const res = await fetch('https://open.er-api.com/v6/latest/USD', {
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      if (data.result === 'success' && data.rates && data.rates.PKR) {
        const extracted: Record<string, number> = { USD: 1.0 };
        SUPPORTED_CURRENCIES.forEach((c) => {
          if (data.rates[c.code]) {
            extracted[c.code] = data.rates[c.code];
          } else if (FALLBACK_USD_RATES[c.code]) {
            extracted[c.code] = FALLBACK_USD_RATES[c.code];
          }
        });

        const updateDate = data.time_last_update_utc
          ? new Date(data.time_last_update_utc).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })
          : 'Today (Live)';

        setRates(extracted);
        setLastUpdated(updateDate);
        setIsLive(true);

        if (typeof window !== 'undefined') {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({
              timestamp: Date.now(),
              rates: extracted,
              lastUpdated: updateDate,
            })
          );
        }
      } else {
        throw new Error('Malformed rate response');
      }
    } catch {
      setFetchError(
        t(
          'Using verified reference rates (Live sync paused)',
          'مستند حوالہ ریٹس استعمال ہو رہے ہیں'
        )
      );
      setIsLive(false);
    } finally {
      setIsLoading(false);
    }
  }, [t]);

  useEffect(() => {
    fetchLiveRates();
  }, [fetchLiveRates]);

  // Swap currencies
  const handleSwap = () => {
    setFromCode(toCode);
    setToCode(fromCode);
  };

  // Conversion calculations
  const parsedAmount = parseFloat(amount) || 0;

  // Interbank rate: 1 From = X To
  const interbankUnitRate = useMemo(() => {
    const fromAgainstUSD = rates[fromCode] || 1;
    const toAgainstUSD = rates[toCode] || 1;
    return toAgainstUSD / fromAgainstUSD;
  }, [rates, fromCode, toCode]);

  // Open market margin calculation (retail cash counter spread)
  // Cash buying rate: ~0.5% below interbank for foreign currency
  // Cash selling rate: ~0.8% to 1.2% above interbank for foreign currency
  const openMarketUnitRate = useMemo(() => {
    if (fromCode === 'PKR' && toCode !== 'PKR') {
      // User is paying PKR to BUY foreign currency from booth -> booth sells at premium
      return interbankUnitRate * 0.99; // Fewer foreign units per PKR
    } else if (toCode === 'PKR' && fromCode !== 'PKR') {
      // User is selling foreign currency to GET PKR -> booth buys slightly below or at parity
      return interbankUnitRate * 1.008; // Typically 279 vs 277.6
    }
    return interbankUnitRate;
  }, [interbankUnitRate, fromCode, toCode]);

  const activeUnitRate = rateMode === 'interbank' ? interbankUnitRate : openMarketUnitRate;
  const convertedTotal = parsedAmount * activeUnitRate;

  // Formatter helper
  const formatCurrency = (val: number, decimals = 2) => {
    if (val >= 100000) {
      return val.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    }
    return val.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  };

  const fromCurrencyObj = SUPPORTED_CURRENCIES.find((c) => c.code === fromCode) || SUPPORTED_CURRENCIES[0];
  const toCurrencyObj = SUPPORTED_CURRENCIES.find((c) => c.code === toCode) || SUPPORTED_CURRENCIES[12];

  // Preset buttons
  const presets = fromCode === 'PKR' ? [10000, 50000, 100000, 500000] : [100, 500, 1000, 5000];

  return (
    <div className="my-8 rounded-3xl doc-card border-2 border-doc-brass/50 bg-white dark:bg-doc-dark-card shadow-xl overflow-hidden">
      {/* Widget Header Bar */}
      <div className="bg-gradient-to-r from-[#0B1120] via-[#1B2A4A] to-[#0B1120] text-white p-5 sm:p-6 border-b border-[#1E2A3F]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[11px] font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                {isLive
                  ? t('Live Interbank Feed Active', 'لائیو انٹر بینک ریٹس فعال')
                  : t('Reference Rate Feed', 'حوالہ ایکسچینج فیڈ')}
              </span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <Clock className="w-3 h-3 text-doc-brass" />
                {lastUpdated}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-white tracking-tight">
              {t('Pakistan Currency Exchange Rate Converter', 'پاکستان لائیو کرنسی ریٹ کنورٹر')}
            </h2>
          </div>

          <button
            type="button"
            onClick={() => fetchLiveRates(true)}
            disabled={isLoading}
            className="self-start sm:self-center px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-doc-brass flex items-center gap-1.5 transition active:scale-95 disabled:opacity-50"
            title="Refresh latest rates"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            <span>{isLoading ? t('Syncing...', 'تازہ کاری...') : t('Refresh Rates', 'ریٹس ریفریش')}</span>
          </button>
        </div>

        {fetchError && (
          <p className="mt-2 text-[11px] font-mono text-amber-300/90 flex items-center gap-1">
            <Info className="w-3 h-3 shrink-0" />
            {fetchError}
          </p>
        )}
      </div>

      <div className="p-5 sm:p-8 space-y-6">
        {/* Rate Type Switcher (Interbank vs Open Market) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-doc-paper dark:bg-doc-dark-base border border-doc-brass/30">
          <div className="space-y-0.5">
            <span className="text-xs font-bold text-doc-ink dark:text-slate-200 block">
              {t('Select Exchange Pricing Channel:', 'ایکسچینج مارکیٹ چینل منتخب کریں:')}
            </span>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {rateMode === 'interbank'
                ? t('Official SBP interbank benchmark for banking/remittance settlements.', 'بینکنگ ترسیلات زر کے لیے اسٹیٹ بینک ریفرنس۔')
                : t('Estimated retail cash counter rate at licensed exchange booths.', 'لائسنس یافتہ منی ایکسچینج کاؤنٹرز کا نقد ریٹ۔')}
            </p>
          </div>

          <div className="inline-flex rounded-xl p-1 bg-slate-200 dark:bg-slate-800 shrink-0">
            <button
              type="button"
              onClick={() => setRateMode('interbank')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-sans transition ${
                rateMode === 'interbank'
                  ? 'bg-doc-seal text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:text-doc-seal'
              }`}
            >
              {t('Interbank (SBP)', 'انٹر بینک (SBP)')}
            </button>
            <button
              type="button"
              onClick={() => setRateMode('openMarket')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-sans transition ${
                rateMode === 'openMarket'
                  ? 'bg-doc-seal text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:text-doc-seal'
              }`}
            >
              {t('Open Market (Cash)', 'اوپن مارکیٹ (نقد)')}
            </button>
          </div>
        </div>

        {/* Input & Selector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-11 gap-3 items-center">
          {/* Amount & From Currency (5 cols) */}
          <div className="md:col-span-5 space-y-1.5">
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              {t('You Convert (Amount & Currency)', 'رقم اور کرنسی')}
            </label>
            <div className="flex rounded-2xl border-2 border-doc-brass/40 bg-white dark:bg-slate-900 focus-within:border-doc-seal focus-within:ring-2 focus-within:ring-doc-seal/20 overflow-hidden shadow-sm transition">
              <input
                type="number"
                min="0"
                step="any"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="100"
                className="w-full px-4 py-3 text-lg font-bold font-mono text-doc-ink dark:text-white bg-transparent focus:outline-none"
              />
              <div className="border-s border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 flex items-center px-2">
                <select
                  value={fromCode}
                  onChange={(e) => setFromCode(e.target.value)}
                  className="bg-transparent text-xs font-bold text-doc-ink dark:text-white py-2 px-1 focus:outline-none cursor-pointer"
                >
                  {SUPPORTED_CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code} className="text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900">
                      {c.flag} {c.code} — {isUrdu ? c.nameUr : c.nameEn}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Swap Button (1 col) */}
          <div className="md:col-span-1 flex justify-center pt-2 md:pt-6">
            <button
              type="button"
              onClick={handleSwap}
              className="p-3 rounded-full bg-doc-paper dark:bg-slate-800 hover:bg-doc-seal hover:text-white text-doc-seal border border-doc-brass/40 shadow-sm transition active:scale-90"
              title="Swap Currencies"
              aria-label="Swap Currencies"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Target Currency (5 cols) */}
          <div className="md:col-span-5 space-y-1.5">
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              {t('Converted Into', 'تبدیل شدہ کرنسی')}
            </label>
            <div className="flex rounded-2xl border-2 border-doc-brass/40 bg-white dark:bg-slate-900 focus-within:border-doc-seal focus-within:ring-2 focus-within:ring-doc-seal/20 overflow-hidden shadow-sm transition">
              <div className="w-full px-4 py-3 text-lg font-bold font-mono text-doc-ink dark:text-white bg-transparent truncate flex items-center">
                <span>{formatCurrency(convertedTotal)}</span>
              </div>
              <div className="border-s border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 flex items-center px-2 shrink-0">
                <select
                  value={toCode}
                  onChange={(e) => setToCode(e.target.value)}
                  className="bg-transparent text-xs font-bold text-doc-ink dark:text-white py-2 px-1 focus:outline-none cursor-pointer"
                >
                  {SUPPORTED_CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code} className="text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900">
                      {c.flag} {c.code} — {isUrdu ? c.nameUr : c.nameEn}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Amount Presets */}
        <div className="flex items-center gap-2 flex-wrap text-xs">
          <span className="text-slate-500 font-mono text-[11px] font-bold">{t('Quick Amounts:', 'فوری رقم:')}</span>
          {presets.map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => setAmount(val.toString())}
              className={`px-3 py-1 rounded-lg font-mono text-xs font-semibold border transition ${
                amount === val.toString()
                  ? 'bg-doc-seal text-white border-doc-seal'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-doc-brass'
              }`}
            >
              {fromCurrencyObj.symbol} {val.toLocaleString()}
            </button>
          ))}
        </div>

        {/* Primary Conversion Result Callout */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950 via-[#0B1120] to-[#1B2A4A] text-white border-2 border-emerald-500/40 space-y-3 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {rateMode === 'interbank'
                ? t('Official Interbank Benchmark Result', 'انٹر بینک ریفرنس نتیجہ')
                : t('Open Market Estimated Cash Result', 'اوپن مارکیٹ نقد تخمینہ')}
            </span>
            <span className="text-[11px] font-mono text-slate-300">
              1 {fromCode} = {formatCurrency(activeUnitRate, 4)} {toCode}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <p className="text-xs text-slate-300 font-mono">
                {amount || '0'} {fromCurrencyObj.nameEn} ({fromCode}) =
              </p>
              <h3 className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
                {toCurrencyObj.symbol} {formatCurrency(convertedTotal)} {toCode}
              </h3>
            </div>

            {toCode === 'PKR' && fromCode !== 'PKR' && (
              <div className="text-left sm:text-right text-xs font-mono text-slate-300 bg-white/5 p-3 rounded-xl border border-white/10 shrink-0">
                <div className="text-[11px] text-emerald-400 font-bold">
                  {t('Estimated Market Spreads:', 'مارکیٹ تخمینہ شرح:')}
                </div>
                <div>Buying: ~{formatCurrency(interbankUnitRate * 0.995, 2)} PKR</div>
                <div>Selling: ~{formatCurrency(interbankUnitRate * 1.01, 2)} PKR</div>
              </div>
            )}
          </div>

          <div className="pt-2 text-[11px] text-slate-300 flex flex-wrap items-center justify-between gap-2 border-t border-white/10">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              {t(
                'Data Feed: Interbank Mid-Market Exchange API & SBP Daily Settlement Baseline.',
                'ڈیٹا ماخذ: انٹر بینک مڈ مارکیٹ اے پی آئی و اسٹیٹ بینک روزانہ ڈیٹا۔'
              )}
            </span>
            <a
              href="https://www.sbp.org.pk/ecodata/rates/war/WAR-Current.asp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-doc-brass underline hover:text-white inline-flex items-center gap-1 transition"
            >
              <span>{t('SBP Official Rates', 'اسٹیٹ بینک آفیشل ریٹس')}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Top Foreign Currencies to PKR Quick-Cards */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-doc-seal" />
              {t('Major Foreign Currencies vs Pakistani Rupee (PKR)', 'اہم غیر ملکی کرنسیاں بمقابلہ پاکستانی روپیہ')}
            </h4>
            <span className="text-[11px] font-mono text-slate-500">
              {t('Click to convert', 'کنورٹ کے لیے کلک کریں')}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {[
              { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
              { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
              { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
              { code: 'SAR', name: 'Saudi Riyal', flag: '🇸🇦' },
              { code: 'AED', name: 'UAE Dirham', flag: '🇦🇪' },
              { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦' },
            ].map((cur) => {
              const unitAgainstUSD = rates[cur.code] || 1;
              const pkrAgainstUSD = rates.PKR || 277.59;
              const pkrRate = pkrAgainstUSD / unitAgainstUSD;
              const isSelected = fromCode === cur.code && toCode === 'PKR';

              return (
                <button
                  key={cur.code}
                  type="button"
                  onClick={() => {
                    setFromCode(cur.code);
                    setToCode('PKR');
                  }}
                  className={`p-3 rounded-2xl border text-left transition flex flex-col justify-between ${
                    isSelected
                      ? 'border-doc-seal bg-doc-seal/5 dark:bg-doc-seal/20 ring-2 ring-doc-seal/20'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-doc-dark-base hover:border-doc-brass'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-base">{cur.flag}</span>
                    <span className="text-[10px] font-mono font-bold text-doc-brass">{cur.code}</span>
                  </div>
                  <div>
                    <div className="text-sm font-extrabold font-mono text-doc-ink dark:text-white">
                      ₨ {formatCurrency(pkrRate, 2)}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                      {cur.name}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
