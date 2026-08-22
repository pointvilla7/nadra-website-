'use client';

import React, { useState, useMemo } from 'react';
import {
  Coins,
  Scale,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  TrendingUp,
  Info,
  Building,
  RotateCcw,
  Copy,
  Check,
  ShieldCheck,
  ArrowRight,
  BookOpen,
  DollarSign,
  Wallet,
  Store,
  LineChart,
  HandCoins
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import Link from 'next/link';

// Statutory Constants
const GOLD_NISAB_GRAMS = 87.48; // approx 7.5 tola
const SILVER_NISAB_GRAMS = 612.36; // approx 52.5 tola
const GRAMS_PER_TOLA = 11.664; // standard 1 tola in grams

export function ZakatCalculator() {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  // Nisab Selection: 'silver' (recommended/lower) vs 'gold' (higher)
  const [nisabType, setNisabType] = useState<'silver' | 'gold'>('silver');

  // Rates & Unit States
  const [goldRateType, setGoldRateType] = useState<'per_gram' | 'per_tola'>('per_gram');
  const [goldRateInput, setGoldRateInput] = useState<string>('24000'); // Example rate per gram

  const [silverRateType, setSilverRateType] = useState<'per_gram' | 'per_tola'>('per_gram');
  const [silverRateInput, setSilverRateInput] = useState<string>('285'); // Example rate per gram

  // Metals Holding Inputs
  const [goldWeightUnit, setGoldWeightUnit] = useState<'grams' | 'tola'>('grams');
  const [goldWeight, setGoldWeight] = useState<string>('0');

  const [silverWeightUnit, setSilverWeightUnit] = useState<'grams' | 'tola'>('grams');
  const [silverWeight, setSilverWeight] = useState<string>('0');

  // Financial Assets Inputs (in PKR)
  const [cashInHand, setCashInHand] = useState<string>('500000');
  const [bankSavings, setBankSavings] = useState<string>('0');
  const [businessInventory, setBusinessInventory] = useState<string>('0');
  const [tradeInvestments, setTradeInvestments] = useState<string>('0');
  const [moneyOwedToYou, setMoneyOwedToYou] = useState<string>('0');

  // Deductible Liabilities
  const [debtsOwed, setDebtsOwed] = useState<string>('0');

  // Copy state
  const [copied, setCopied] = useState<boolean>(false);

  // Compute effective rates per gram
  const goldRatePerGram = useMemo(() => {
    const r = parseFloat(goldRateInput) || 0;
    return goldRateType === 'per_tola' ? r / GRAMS_PER_TOLA : r;
  }, [goldRateInput, goldRateType]);

  const silverRatePerGram = useMemo(() => {
    const r = parseFloat(silverRateInput) || 0;
    return silverRateType === 'per_tola' ? r / GRAMS_PER_TOLA : r;
  }, [silverRateInput, silverRateType]);

  // Compute gold & silver holding values
  const goldValue = useMemo(() => {
    const w = parseFloat(goldWeight) || 0;
    const weightInGrams = goldWeightUnit === 'tola' ? w * GRAMS_PER_TOLA : w;
    return Math.round(weightInGrams * goldRatePerGram);
  }, [goldWeight, goldWeightUnit, goldRatePerGram]);

  const silverValue = useMemo(() => {
    const w = parseFloat(silverWeight) || 0;
    const weightInGrams = silverWeightUnit === 'tola' ? w * GRAMS_PER_TOLA : w;
    return Math.round(weightInGrams * silverRatePerGram);
  }, [silverWeight, silverWeightUnit, silverRatePerGram]);

  // Financial calculations
  const parsedCash = parseFloat(cashInHand) || 0;
  const parsedBank = parseFloat(bankSavings) || 0;
  const parsedInventory = parseFloat(businessInventory) || 0;
  const parsedInvestments = parseFloat(tradeInvestments) || 0;
  const parsedReceivables = parseFloat(moneyOwedToYou) || 0;
  const parsedDebts = parseFloat(debtsOwed) || 0;

  const totalZakatableAssets = useMemo(() => {
    return parsedCash + parsedBank + goldValue + silverValue + parsedInventory + parsedInvestments + parsedReceivables;
  }, [parsedCash, parsedBank, goldValue, silverValue, parsedInventory, parsedInvestments, parsedReceivables]);

  const netWealth = useMemo(() => {
    return Math.max(0, totalZakatableAssets - parsedDebts);
  }, [totalZakatableAssets, parsedDebts]);

  // Nisab threshold in PKR
  const nisabThresholdPKR = useMemo(() => {
    if (nisabType === 'silver') {
      return Math.round(SILVER_NISAB_GRAMS * silverRatePerGram);
    } else {
      return Math.round(GOLD_NISAB_GRAMS * goldRatePerGram);
    }
  }, [nisabType, silverRatePerGram, goldRatePerGram]);

  // Zakat evaluation
  const isZakatDue = netWealth >= nisabThresholdPKR && nisabThresholdPKR > 0;
  const zakatDueAmount = isZakatDue ? Math.round(netWealth * 0.025) : 0;

  const handleReset = () => {
    setCashInHand('0');
    setBankSavings('0');
    setGoldWeight('0');
    setSilverWeight('0');
    setBusinessInventory('0');
    setTradeInvestments('0');
    setMoneyOwedToYou('0');
    setDebtsOwed('0');
  };

  const handleCopySummary = () => {
    const summaryText = `--- PAKISTAN INFO HUB: ZAKAT CALCULATION SUMMARY (2026) ---
Nisab Benchmark: ${nisabType === 'silver' ? `Silver Nisab (612.36g) = Rs. ${nisabThresholdPKR.toLocaleString('en-PK')}` : `Gold Nisab (87.48g) = Rs. ${nisabThresholdPKR.toLocaleString('en-PK')}`}
Total Zakatable Assets: Rs. ${totalZakatableAssets.toLocaleString('en-PK')}
- Cash & Bank Balances: Rs. ${(parsedCash + parsedBank).toLocaleString('en-PK')}
- Gold Holdings Value: Rs. ${goldValue.toLocaleString('en-PK')}
- Silver Holdings Value: Rs. ${silverValue.toLocaleString('en-PK')}
- Business Inventory: Rs. ${parsedInventory.toLocaleString('en-PK')}
- Investments / Stocks: Rs. ${parsedInvestments.toLocaleString('en-PK')}
- Money Owed to You: Rs. ${parsedReceivables.toLocaleString('en-PK')}
Deductible Liabilities/Debts: Rs. ${parsedDebts.toLocaleString('en-PK')}
Net Zakatable Wealth: Rs. ${netWealth.toLocaleString('en-PK')}
Status: ${isZakatDue ? `ZAKAT OBLIGATION MET (Exceeds Nisab threshold)` : `BELOW NISAB (No Zakat due)`}
Total Zakat Due (2.5%): Rs. ${zakatDueAmount.toLocaleString('en-PK')}
Calculated at: https://www.pakistaninfohub.com/hajj-umrah/zakat-calculator-2026`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="doc-card p-5 sm:p-8 rounded-3xl border-2 border-doc-brass/40 bg-white dark:bg-slate-900 shadow-xl space-y-8 font-sans">
      {/* Header Badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <InteractiveToolBadge labelEn="INTERACTIVE ZAKAT CALCULATOR" labelUr="زکوٰۃ کیلکولیٹر" variant="seal" />
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              2.5% Annual Rate (2026)
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-doc-ink dark:text-white">
            {isUrdu ? 'مستند زکوٰۃ کیلکولیٹر (سونے و چاندی کا نصاب)' : 'Interactive Zakat Calculator 2026 (Gold & Silver Nisab)'}
          </h2>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-doc-seal bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 transition"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{isUrdu ? 'ری سیٹ کریں' : 'Reset Values'}</span>
        </button>
      </div>

      {/* Step 1: Nisab Standard Selection */}
      <div className="space-y-3 bg-amber-50/70 dark:bg-amber-950/30 p-4 sm:p-5 rounded-2xl border border-amber-200/80 dark:border-amber-900/60">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-doc-ink dark:text-white font-serif font-bold text-base">
            <Scale className="w-5 h-5 text-doc-brass" />
            <span>1. Choose Nisab Benchmark (نصاب کا انتخاب)</span>
          </div>
          <span className="text-xs font-mono text-amber-800 dark:text-amber-300 font-bold">
            Current Nisab Value: Rs. {nisabThresholdPKR.toLocaleString('en-PK')}
          </span>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          The <strong>Nisab</strong> is the minimum qualifying wealth threshold. Most contemporary scholars recommend the <strong>Silver Nisab</strong> because its lower monetary value benefits more needy recipients. However, some scholars and schools of thought utilize the <strong>Gold Nisab</strong> for wealth primarily held in gold or business assets. Both options are provided for your choice.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button
            type="button"
            onClick={() => setNisabType('silver')}
            className={`min-h-[48px] p-3.5 rounded-xl border text-left transition flex items-center justify-between ${
              nisabType === 'silver'
                ? 'bg-white dark:bg-slate-800 border-doc-brass shadow-md ring-2 ring-doc-brass/30'
                : 'bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700 hover:border-slate-300'
            }`}
          >
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-sm text-doc-ink dark:text-white">Silver Nisab (612.36g)</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold">
                  Recommended
                </span>
              </div>
              <p className="text-xs text-slate-500 font-sans mt-0.5">Approx 52.5 Tola silver standard</p>
            </div>
            <span className="font-mono font-bold text-sm text-doc-seal">
              Rs. {Math.round(SILVER_NISAB_GRAMS * silverRatePerGram).toLocaleString('en-PK')}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setNisabType('gold')}
            className={`min-h-[48px] p-3.5 rounded-xl border text-left transition flex items-center justify-between ${
              nisabType === 'gold'
                ? 'bg-white dark:bg-slate-800 border-doc-brass shadow-md ring-2 ring-doc-brass/30'
                : 'bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700 hover:border-slate-300'
            }`}
          >
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-sm text-doc-ink dark:text-white">Gold Nisab (87.48g)</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-bold">
                  Higher Threshold
                </span>
              </div>
              <p className="text-xs text-slate-500 font-sans mt-0.5">Approx 7.5 Tola gold standard</p>
            </div>
            <span className="font-mono font-bold text-sm text-doc-seal">
              Rs. {Math.round(GOLD_NISAB_GRAMS * goldRatePerGram).toLocaleString('en-PK')}
            </span>
          </button>
        </div>
      </div>

      {/* Step 2: Today's Market Rates for Gold & Silver */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <Coins className="w-5 h-5 text-doc-brass" />
            <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
              2. Enter Today&apos;s Gold &amp; Silver Market Rates (سونے و چاندی کے آج کے ریٹس)
            </h3>
          </div>
          <span className="text-xs text-amber-700 dark:text-amber-400 font-medium">
            * Check local Sarafa Bazaar / Jewelers Association rates
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Gold Rate Input */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase">
                Today&apos;s Gold Rate (سونے کی قیمت)
              </label>
              <div className="flex gap-1 text-[11px] font-mono">
                <button
                  type="button"
                  onClick={() => setGoldRateType('per_gram')}
                  className={`px-2 py-0.5 rounded ${goldRateType === 'per_gram' ? 'bg-doc-ink text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}
                >
                  Per Gram
                </button>
                <button
                  type="button"
                  onClick={() => setGoldRateType('per_tola')}
                  className={`px-2 py-0.5 rounded ${goldRateType === 'per_tola' ? 'bg-doc-ink text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}
                >
                  Per Tola
                </button>
              </div>
            </div>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 font-bold">
                PKR
              </span>
              <input
                type="text"
                inputMode="numeric"
                value={goldRateInput}
                onChange={(e) => setGoldRateInput(e.target.value.replace(/[^0-9.]/g, ''))}
                className="w-full min-h-[44px] pl-12 pr-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-doc-ink dark:text-white font-mono font-bold text-sm focus:outline-none focus:ring-2 focus:ring-doc-brass"
                placeholder="e.g. 24000"
              />
            </div>
            <p className="text-[11px] text-slate-500 italic">
              Example only: Rs. 24,000/g ≈ Rs. 280,000/tola. Replace with today&apos;s exact rate.
            </p>
          </div>

          {/* Silver Rate Input */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase">
                Today&apos;s Silver Rate (چاندی کی قیمت)
              </label>
              <div className="flex gap-1 text-[11px] font-mono">
                <button
                  type="button"
                  onClick={() => setSilverRateType('per_gram')}
                  className={`px-2 py-0.5 rounded ${silverRateType === 'per_gram' ? 'bg-doc-ink text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}
                >
                  Per Gram
                </button>
                <button
                  type="button"
                  onClick={() => setSilverRateType('per_tola')}
                  className={`px-2 py-0.5 rounded ${silverRateType === 'per_tola' ? 'bg-doc-ink text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}
                >
                  Per Tola
                </button>
              </div>
            </div>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 font-bold">
                PKR
              </span>
              <input
                type="text"
                inputMode="numeric"
                value={silverRateInput}
                onChange={(e) => setSilverRateInput(e.target.value.replace(/[^0-9.]/g, ''))}
                className="w-full min-h-[44px] pl-12 pr-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-doc-ink dark:text-white font-mono font-bold text-sm focus:outline-none focus:ring-2 focus:ring-doc-brass"
                placeholder="e.g. 285"
              />
            </div>
            <p className="text-[11px] text-slate-500 italic">
              Example only: Rs. 285/g ≈ Rs. 3,324/tola. Replace with today&apos;s exact rate.
            </p>
          </div>
        </div>
      </div>

      {/* Step 3: Zakatable Assets Breakdown */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
          <Wallet className="w-5 h-5 text-doc-brass" />
          <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
            3. Enter Your Zakatable Assets (قابلِ زکوٰۃ اثاثے)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
          {/* Cash & Bank Balances */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span>Cash in Hand &amp; Wallets (نقد رقم)</span>
              <span className="text-[11px] text-slate-400 font-normal">Currency on hand</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-slate-400 font-bold">Rs.</span>
              <input
                type="text"
                inputMode="numeric"
                value={cashInHand}
                onChange={(e) => setCashInHand(e.target.value.replace(/[^0-9]/g, ''))}
                className="w-full min-h-[44px] pl-12 pr-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono font-bold text-sm focus:outline-none focus:ring-2 focus:ring-doc-brass"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span>Bank Savings &amp; Current Balances (بینک بیلنس)</span>
              <span className="text-[11px] text-slate-400 font-normal">All active bank accounts</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-slate-400 font-bold">Rs.</span>
              <input
                type="text"
                inputMode="numeric"
                value={bankSavings}
                onChange={(e) => setBankSavings(e.target.value.replace(/[^0-9]/g, ''))}
                className="w-full min-h-[44px] pl-12 pr-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono font-bold text-sm focus:outline-none focus:ring-2 focus:ring-doc-brass"
              />
            </div>
          </div>

          {/* Gold Holdings */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="font-bold text-slate-700 dark:text-slate-300">
                Gold Holdings Weight (سونے کا وزن)
              </label>
              <div className="flex gap-1 text-[10px] font-mono">
                <button
                  type="button"
                  onClick={() => setGoldWeightUnit('grams')}
                  className={`px-1.5 py-0.5 rounded ${goldWeightUnit === 'grams' ? 'bg-doc-ink text-white' : 'bg-slate-200 dark:bg-slate-700'}`}
                >
                  Grams
                </button>
                <button
                  type="button"
                  onClick={() => setGoldWeightUnit('tola')}
                  className={`px-1.5 py-0.5 rounded ${goldWeightUnit === 'tola' ? 'bg-doc-ink text-white' : 'bg-slate-200 dark:bg-slate-700'}`}
                >
                  Tola
                </button>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                inputMode="numeric"
                value={goldWeight}
                onChange={(e) => setGoldWeight(e.target.value.replace(/[^0-9.]/g, ''))}
                placeholder="0"
                className="w-full min-h-[44px] px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono font-bold text-sm focus:outline-none focus:ring-2 focus:ring-doc-brass"
              />
            </div>
            <p className="text-[11px] text-slate-500">
              Value: <strong className="text-doc-seal">Rs. {goldValue.toLocaleString('en-PK')}</strong> ({goldWeight || 0} {goldWeightUnit})
            </p>
          </div>

          {/* Silver Holdings */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="font-bold text-slate-700 dark:text-slate-300">
                Silver Holdings Weight (چاندی کا وزن)
              </label>
              <div className="flex gap-1 text-[10px] font-mono">
                <button
                  type="button"
                  onClick={() => setSilverWeightUnit('grams')}
                  className={`px-1.5 py-0.5 rounded ${silverWeightUnit === 'grams' ? 'bg-doc-ink text-white' : 'bg-slate-200 dark:bg-slate-700'}`}
                >
                  Grams
                </button>
                <button
                  type="button"
                  onClick={() => setSilverWeightUnit('tola')}
                  className={`px-1.5 py-0.5 rounded ${silverWeightUnit === 'tola' ? 'bg-doc-ink text-white' : 'bg-slate-200 dark:bg-slate-700'}`}
                >
                  Tola
                </button>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                inputMode="numeric"
                value={silverWeight}
                onChange={(e) => setSilverWeight(e.target.value.replace(/[^0-9.]/g, ''))}
                placeholder="0"
                className="w-full min-h-[44px] px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono font-bold text-sm focus:outline-none focus:ring-2 focus:ring-doc-brass"
              />
            </div>
            <p className="text-[11px] text-slate-500">
              Value: <strong className="text-doc-seal">Rs. {silverValue.toLocaleString('en-PK')}</strong> ({silverWeight || 0} {silverWeightUnit})
            </p>
          </div>

          {/* Business Inventory */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span>Business Merchandise / Inventory (مالِ تجارت)</span>
              <span className="text-[11px] text-slate-400 font-normal">At current market value</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-slate-400 font-bold">Rs.</span>
              <input
                type="text"
                inputMode="numeric"
                value={businessInventory}
                onChange={(e) => setBusinessInventory(e.target.value.replace(/[^0-9]/g, ''))}
                className="w-full min-h-[44px] pl-12 pr-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono font-bold text-sm focus:outline-none focus:ring-2 focus:ring-doc-brass"
              />
            </div>
          </div>

          {/* Trade Investments / Stocks */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span>Stocks &amp; Trade Investments (حصص و انویسٹمنٹ)</span>
              <span className="text-[11px] text-slate-400 font-normal">Zakatable trading shares</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-slate-400 font-bold">Rs.</span>
              <input
                type="text"
                inputMode="numeric"
                value={tradeInvestments}
                onChange={(e) => setTradeInvestments(e.target.value.replace(/[^0-9]/g, ''))}
                className="w-full min-h-[44px] pl-12 pr-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono font-bold text-sm focus:outline-none focus:ring-2 focus:ring-doc-brass"
              />
            </div>
          </div>

          {/* Money Owed to You (Receivables) */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span>Money Owed to You (قابل وصول قرض)</span>
              <span className="text-[11px] text-slate-400 font-normal">Expected to be repaid</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-slate-400 font-bold">Rs.</span>
              <input
                type="text"
                inputMode="numeric"
                value={moneyOwedToYou}
                onChange={(e) => setMoneyOwedToYou(e.target.value.replace(/[^0-9]/g, ''))}
                className="w-full min-h-[44px] pl-12 pr-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono font-bold text-sm focus:outline-none focus:ring-2 focus:ring-doc-brass"
              />
            </div>
          </div>

          {/* Deductible Debts Owed */}
          <div className="space-y-1.5">
            <label className="font-bold text-red-700 dark:text-red-400 flex items-center justify-between">
              <span>Immediate Debts &amp; Liabilities (واجب الادا قرض)</span>
              <span className="text-[11px] text-slate-400 font-normal">Deductible immediately due</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-red-500 font-bold">Rs.</span>
              <input
                type="text"
                inputMode="numeric"
                value={debtsOwed}
                onChange={(e) => setDebtsOwed(e.target.value.replace(/[^0-9]/g, ''))}
                className="w-full min-h-[44px] pl-12 pr-3 py-2 rounded-xl border border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20 font-mono font-bold text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results Display Section */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-doc-brass/50 shadow-2xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-doc-brass uppercase tracking-wider">
              Calculation Breakdown (زکوٰۃ کا حتمی تخمینہ)
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
              {isZakatDue ? (
                <span>
                  Total Zakat Due: <span className="text-emerald-400">Rs. {zakatDueAmount.toLocaleString('en-PK')}</span>
                </span>
              ) : (
                <span className="text-amber-300">Below Nisab Threshold (No Zakat Due)</span>
              )}
            </h3>
          </div>

          <button
            type="button"
            onClick={handleCopySummary}
            className="min-h-[44px] px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-mono font-bold flex items-center gap-1.5 transition"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Summary Copied' : 'Copy Full Summary'}</span>
          </button>
        </div>

        {/* Itemized Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans">
          <div className="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/80 space-y-1">
            <span className="text-slate-400 block">Total Gross Assets:</span>
            <span className="font-mono font-bold text-sm text-white">Rs. {totalZakatableAssets.toLocaleString('en-PK')}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/80 space-y-1">
            <span className="text-slate-400 block">Debts Deducted:</span>
            <span className="font-mono font-bold text-sm text-red-400">- Rs. {parsedDebts.toLocaleString('en-PK')}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/80 space-y-1">
            <span className="text-slate-400 block">Net Zakatable Wealth:</span>
            <span className="font-mono font-bold text-sm text-amber-300">Rs. {netWealth.toLocaleString('en-PK')}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/80 space-y-1">
            <span className="text-slate-400 block">Nisab Threshold:</span>
            <span className="font-mono font-bold text-sm text-doc-brass">Rs. {nisabThresholdPKR.toLocaleString('en-PK')}</span>
          </div>
        </div>

        {/* Status Callout Banner */}
        <div
          className={`p-4 rounded-2xl border flex items-start gap-3 text-xs leading-relaxed ${
            isZakatDue
              ? 'bg-emerald-950/40 border-emerald-800 text-emerald-200'
              : 'bg-amber-950/40 border-amber-800 text-amber-200'
          }`}
        >
          {isZakatDue ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          ) : (
            <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          )}
          <div>
            {isZakatDue ? (
              <p>
                <strong>Zakat Obligation Met:</strong> Your net zakatable wealth of{' '}
                <strong>Rs. {netWealth.toLocaleString('en-PK')}</strong> exceeds the {nisabType} Nisab benchmark of{' '}
                <strong>Rs. {nisabThresholdPKR.toLocaleString('en-PK')}</strong>. Assuming this wealth has been held for one full lunar year (Hawl), your annual Zakat payable at 2.5% is{' '}
                <strong className="underline text-emerald-300">Rs. {zakatDueAmount.toLocaleString('en-PK')}</strong>.
              </p>
            ) : (
              <p>
                <strong>Below Nisab Threshold:</strong> Your net zakatable wealth of{' '}
                <strong>Rs. {netWealth.toLocaleString('en-PK')}</strong> is below the selected {nisabType} Nisab benchmark of{' '}
                <strong>Rs. {nisabThresholdPKR.toLocaleString('en-PK')}</strong>. In Islamic jurisprudence, Zakat is not obligatory when net wealth remains below the Nisab.
              </p>
            )}
          </div>
        </div>

        {/* Hawl Requirement Note */}
        <p className="text-[11px] text-slate-400 italic">
          * <strong>Hawl Requirement:</strong> This calculator computes 2.5% on the wealth entered under the assumption that this amount has remained at or above the Nisab for one complete lunar year (approx. 354 days). Please verify your personal holding timeline.
        </p>
      </div>

      {/* Non-Zakatable Assets Guide */}
      <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 text-xs font-sans">
        <h4 className="font-serif font-bold text-sm text-doc-ink dark:text-white flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-doc-seal" />
          <span>Exempt &amp; Non-Zakatable Assets (جن اثاثوں پر زکوٰۃ لاگو نہیں ہوتی)</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>Primary personal residential home (رہائشی مکان)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>Personal vehicle for daily transport (ذاتی گاڑی / سواری)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>Household furniture, electronics &amp; clothing (گھریلو سامان)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>Professional tools, factory machinery &amp; equipment (پیشہ ورانہ اوزار)</span>
          </div>
        </div>
      </div>

      {/* Internal Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
        <Link
          href="/hajj-umrah/nusuk-app-guide-pakistani-pilgrims-2026"
          className="inline-flex items-center gap-1.5 font-bold text-doc-seal hover:text-doc-brass transition"
        >
          <span>Nusuk App &amp; Umrah Visa Guide 2026 →</span>
        </Link>
        <Link
          href="/hajj-umrah/hajj-policy-2026-pakistan-application-guide"
          className="inline-flex items-center gap-1.5 font-bold text-doc-brass hover:underline transition"
        >
          <span>Government Hajj Policy &amp; Application Guide →</span>
        </Link>
      </div>
    </div>
  );
}
