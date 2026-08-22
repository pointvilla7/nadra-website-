'use client';

import React, { useState, useMemo } from 'react';
import {
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  RotateCcw,
  Building,
  ArrowRight,
  Info,
  BadgeCheck,
  Hash,
  Globe,
  Landmark,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import Link from 'next/link';

// Reference Directory of Major Pakistani Bank Codes
const PAKISTAN_BANK_CODES: Record<string, string> = {
  SCBL: 'Standard Chartered Bank (Pakistan) Limited',
  HABB: 'Habib Bank Limited (HBL)',
  UNIL: 'United Bank Limited (UBL)',
  MEZN: 'Meezan Bank Limited',
  ALFH: 'Bank Alfalah Limited',
  MUCB: 'MCB Bank Limited',
  ABPA: 'Allied Bank Limited (ABL)',
  FAYS: 'Faysal Bank Limited',
  BAHL: 'Bank AL Habib Limited',
  ASCK: 'Askari Bank Limited',
  BKIP: 'The Bank of Punjab (BOP)',
  JSBL: 'JS Bank Limited',
  SONA: 'Soneri Bank Limited',
  NBPA: 'National Bank of Pakistan (NBP)',
  DIBP: 'Dubai Islamic Bank Pakistan',
  BIPL: 'BankIslami Pakistan Limited',
  SAMB: 'Samba Bank Limited',
  HMBP: 'Habib Metropolitan Bank',
  FWBL: 'First Women Bank Limited',
  SIND: 'Sindh Bank Limited',
  ZTBL: 'Zarai Taraqiati Bank Limited (ZTBL)',
  MPBL: 'Mobilink Microfinance Bank (JazzCash)',
  TMFB: 'Telenor Microfinance Bank (Easypaisa)',
  UPIS: 'U Microfinance Bank (UPaisa)',
};

export function IbanValidator() {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const [ibanInput, setIbanInput] = useState<string>('PK36SCBL0000001123456702');
  const [copied, setCopied] = useState<boolean>(false);

  // Clean sanitized input
  const cleanIban = useMemo(() => {
    return ibanInput.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
  }, [ibanInput]);

  // Formatted with spaces every 4 characters
  const formattedIban = useMemo(() => {
    return cleanIban.replace(/(.{4})/g, '$1 ').trim();
  }, [cleanIban]);

  // ISO 13616 MOD-97 Checksum Evaluation
  const validation = useMemo(() => {
    if (!cleanIban) {
      return {
        isEmpty: true,
        lengthValid: false,
        countryValid: false,
        checksumValid: false,
        bankCode: '',
        bankName: '',
        accountNumber: '',
        checkDigits: '',
        errorReason: '',
      };
    }

    const countryValid = cleanIban.startsWith('PK');
    const lengthValid = cleanIban.length === 24;
    const bankCode = cleanIban.length >= 8 ? cleanIban.slice(4, 8) : '';
    const bankName = PAKISTAN_BANK_CODES[bankCode] || 'Registered Financial Institution';
    const checkDigits = cleanIban.length >= 4 ? cleanIban.slice(2, 4) : '';
    const accountNumber = cleanIban.length === 24 ? cleanIban.slice(8) : '';

    if (!countryValid) {
      return {
        isEmpty: false,
        lengthValid,
        countryValid: false,
        checksumValid: false,
        bankCode,
        bankName,
        accountNumber,
        checkDigits,
        errorReason: 'Must start with Pakistan country code "PK".',
      };
    }

    if (!lengthValid) {
      return {
        isEmpty: false,
        lengthValid: false,
        countryValid: true,
        checksumValid: false,
        bankCode,
        bankName,
        accountNumber,
        checkDigits,
        errorReason: `Current length is ${cleanIban.length} characters. Pakistan IBANs must be exactly 24 characters.`,
      };
    }

    // Check structure: PK (2 letters) + 2 digits + 4 letters (bank code) + 16 digits (account)
    if (!/^[A-Z]{2}[0-9]{2}[A-Z]{4}[0-9]{16}$/.test(cleanIban)) {
      return {
        isEmpty: false,
        lengthValid: true,
        countryValid: true,
        checksumValid: false,
        bankCode,
        bankName,
        accountNumber,
        checkDigits,
        errorReason: 'Structure mismatch: Expected PK + 2 digits + 4-letter bank code + 16-digit account number.',
      };
    }

    // Step 1: Move first 4 characters to the end
    const rearranged = cleanIban.slice(4) + cleanIban.slice(0, 4);

    // Step 2: Convert letters A-Z to numbers (A=10, B=11 ... Z=35)
    let numericStr = '';
    for (let i = 0; i < rearranged.length; i++) {
      const char = rearranged[i];
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        numericStr += (code - 55).toString();
      } else {
        numericStr += char;
      }
    }

    // Step 3: Compute Modulo 97 using standard piecewise chunking
    try {
      let remainder = 0;
      for (let i = 0; i < numericStr.length; i += 7) {
        const chunk = remainder.toString() + numericStr.substring(i, i + 7);
        remainder = parseInt(chunk, 10) % 97;
      }
      const checksumValid = remainder === 1;

      return {
        isEmpty: false,
        lengthValid: true,
        countryValid: true,
        checksumValid,
        bankCode,
        bankName,
        accountNumber,
        checkDigits,
        errorReason: checksumValid
          ? ''
          : `MOD-97 checksum failed (Remainder: ${remainder}, Expected: 1). Check for transposed or mistyped digits.`,
      };
    } catch {
      return {
        isEmpty: false,
        lengthValid: true,
        countryValid: true,
        checksumValid: false,
        bankCode,
        bankName,
        accountNumber,
        checkDigits,
        errorReason: 'Calculation error occurred.',
      };
    }
  }, [cleanIban]);

  const handleCopy = () => {
    if (!cleanIban) return;
    navigator.clipboard.writeText(formattedIban);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setIbanInput('');
  };

  const handleSetExample = (exampleIban: string) => {
    setIbanInput(exampleIban);
  };

  return (
    <div className="doc-card p-5 sm:p-8 rounded-3xl border-2 border-doc-brass/40 bg-white dark:bg-slate-900 shadow-xl space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <InteractiveToolBadge labelEn="ISO 13616 IBAN VALIDATOR" labelUr="آئی بی اے این ویلیڈیٹر" variant="seal" />
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              MOD-97 Algorithm
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-doc-ink dark:text-white">
            {isUrdu ? 'پاکستان آئی بی اے این (IBAN) چیکر و ویلیڈیٹر' : 'Pakistan IBAN Number Checker & MOD-97 Validator'}
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-doc-seal bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isUrdu ? 'صاف کریں' : 'Clear'}</span>
          </button>
        </div>
      </div>

      {/* Input Form */}
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-bold">
              {isUrdu ? '24 ہندسوں کا آئی بی اے این درج یا پیسٹ کریں:' : 'Enter or Paste 24-Character Pakistan IBAN:'}
            </label>
            <span className="text-xs font-mono text-slate-400">
              {cleanIban.length}/24 Characters
            </span>
          </div>

          <div className="relative">
            <input
              type="text"
              value={ibanInput}
              onChange={(e) => setIbanInput(e.target.value)}
              placeholder="e.g. PK36SCBL0000001123456702"
              className="w-full min-h-[52px] px-4 pr-24 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-doc-ink dark:text-white font-mono font-bold text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-doc-brass tracking-wider uppercase"
            />

            {cleanIban.length > 0 && (
              <button
                type="button"
                onClick={handleCopy}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 text-xs font-mono font-bold flex items-center gap-1 transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            )}
          </div>

          {/* Quick Example Presets */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="text-slate-500 font-sans">Try Sample IBANs:</span>
            <button
              type="button"
              onClick={() => handleSetExample('PK36SCBL0000001123456702')}
              className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-doc-paper font-mono text-[11px] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
            >
              SCBL Standard Chartered (Valid)
            </button>
            <button
              type="button"
              onClick={() => handleSetExample('PK36MEZN0000001123456702')}
              className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-doc-paper font-mono text-[11px] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
            >
              MEZN Meezan Bank (Test)
            </button>
          </div>
        </div>
      </div>

      {/* Validation Result Status Banner */}
      {!validation.isEmpty && (
        <div
          className={`p-5 rounded-2xl border space-y-3 transition-all ${
            validation.checksumValid
              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
              : 'bg-red-50 dark:bg-red-950/40 border-red-300 dark:border-red-800 text-red-900 dark:text-red-200'
          }`}
        >
          <div className="flex items-start gap-3">
            {validation.checksumValid ? (
              <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
            )}
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-base sm:text-lg">
                {validation.checksumValid
                  ? 'Valid Pakistan IBAN (ISO 13616 Compliant)'
                  : 'Invalid IBAN Format / Checksum Error'}
              </h3>
              <p className="text-xs sm:text-sm font-sans leading-relaxed opacity-90">
                {validation.checksumValid
                  ? `Mathematical MOD-97 checksum verified. The structure matches a valid 24-character Pakistan IBAN for ${validation.bankName}.`
                  : validation.errorReason}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Parsed Breakdown Card */}
      {cleanIban.length >= 8 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
            <Hash className="w-5 h-5 text-doc-brass" />
            <h3 className="font-serif font-bold text-base text-doc-ink dark:text-white">
              Parsed IBAN Component Breakdown
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-sans">
            {/* Country Code */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="text-slate-400 block font-mono text-[11px] uppercase">Country Code</span>
              <span className="font-mono font-bold text-base text-doc-seal">
                {cleanIban.slice(0, 2) || 'PK'}
              </span>
              <span className="text-[11px] text-slate-500 block">Pakistan (ISO 3166-1)</span>
            </div>

            {/* Check Digits */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="text-slate-400 block font-mono text-[11px] uppercase">Check Digits</span>
              <span className="font-mono font-bold text-base text-doc-brass">
                {validation.checkDigits || '--'}
              </span>
              <span className="text-[11px] text-slate-500 block">MOD-97 Security Check</span>
            </div>

            {/* Bank Identifier Code */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="text-slate-400 block font-mono text-[11px] uppercase">Bank Code (4 Letters)</span>
              <span className="font-mono font-bold text-base text-doc-ink dark:text-white">
                {validation.bankCode || '----'}
              </span>
              <span className="text-[11px] text-slate-500 block truncate" title={validation.bankName}>
                {validation.bankName}
              </span>
            </div>

            {/* Domestic Account Number */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="text-slate-400 block font-mono text-[11px] uppercase">BBAN / Account (16 Digits)</span>
              <span className="font-mono font-bold text-sm text-doc-ink dark:text-white truncate block">
                {validation.accountNumber || '----------------'}
              </span>
              <span className="text-[11px] text-slate-500 block">Branch &amp; Account Number</span>
            </div>
          </div>
        </div>
      )}

      {/* Formatted Clean Output Box */}
      {cleanIban.length === 24 && (
        <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2 font-mono">
          <span className="text-xs text-doc-brass font-bold uppercase tracking-wider block">
            Standard Print Format (Separated by Spaces):
          </span>
          <div className="flex items-center justify-between gap-2">
            <span className="text-lg sm:text-xl font-bold tracking-widest text-emerald-300">
              {formattedIban}
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-sans font-bold flex items-center gap-1 transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Important Advisory */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
        <strong className="text-doc-ink dark:text-white flex items-center gap-1.5">
          <Info className="w-4 h-4 text-doc-seal" />
          <span>Security &amp; Scope Notice:</span>
        </strong>
        <p>
          This client-side tool validates the mathematical checksum, country prefix, and 24-character ISO structure.
          It does not access private banking records and <strong>cannot verify whether the account is currently open, active, or registered to a specific name</strong>.
          Always confirm receiver account details with your banking app or official account statement before initiating funds transfers.
        </p>
      </div>

      {/* Internal Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-mono font-bold">
        <Link
          href="/finance/how-to-open-bank-account-online-pakistan-2026"
          className="text-doc-seal hover:text-doc-brass transition"
        >
          <span>← How to Open Bank Account Online 2026</span>
        </Link>
        <Link
          href="/tax/income-tax-calculator-salaried-2026"
          className="text-doc-brass hover:underline transition"
        >
          <span>FBR Income Tax Calculator 2026 →</span>
        </Link>
      </div>
    </div>
  );
}
