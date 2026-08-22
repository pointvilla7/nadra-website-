'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  AlertCircle,
  Clock,
  ExternalLink,
  Copy,
  Check,
  PhoneCall,
  Building,
  HelpCircle,
  Info,
  FileText,
  BadgeCheck,
  Briefcase
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import Link from 'next/link';

export function EobiPensionHelper() {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const [cnicInput, setCnicInput] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Clean CNIC digits only
  const cleanCnic = cnicInput.replace(/\D/g, '');
  const isValidCnic = cleanCnic.length === 13;

  // Format CNIC as XXXXX-XXXXXXX-X for clean presentation
  const formattedCnic = cleanCnic.length === 13
    ? `${cleanCnic.slice(0, 5)}-${cleanCnic.slice(5, 12)}-${cleanCnic.slice(12)}`
    : cleanCnic;

  const handleCopy = () => {
    if (!cleanCnic) return;
    navigator.clipboard.writeText(cleanCnic);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="doc-card p-5 sm:p-8 rounded-3xl border-2 border-doc-brass/40 bg-white dark:bg-slate-900 shadow-xl space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <InteractiveToolBadge labelEn="EOBI PENSION CHECK HELPER" labelUr="ای او بی آئی پنشن چیکر" variant="seal" />
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              EOB Act 1976 Verified
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-doc-ink dark:text-white">
            {isUrdu ? 'شناختی کارڈ سے ای او بی آئی پنشن و رجسٹریشن تصدیق' : 'EOBI Pension & Insured Person Verification by CNIC'}
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
          <PhoneCall className="w-3.5 h-3.5 text-doc-brass" />
          <span>Toll-Free: 08000-3624 (EOBI)</span>
        </div>
      </div>

      {/* CNIC Input & Copy Form */}
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-bold">
              {isUrdu ? '13 ہندسوں کا قومی شناختی کارڈ نمبر درج کریں:' : 'Enter 13-Digit CNIC Number (Without Dashes):'}
            </label>
            <span className="text-xs font-mono text-slate-400">
              {cleanCnic.length}/13 Digits
            </span>
          </div>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-mono font-bold text-sm">
              CNIC:
            </span>
            <input
              type="text"
              inputMode="numeric"
              maxLength={15}
              value={cnicInput}
              onChange={(e) => setCnicInput(e.target.value)}
              placeholder="e.g. 3520112345671"
              className="w-full min-h-[48px] pl-20 pr-24 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-doc-ink dark:text-white font-mono font-bold text-lg focus:outline-none focus:ring-2 focus:ring-doc-brass tracking-wider"
            />

            {cleanCnic.length > 0 && (
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

          {cleanCnic.length > 0 && !isValidCnic && (
            <p className="text-xs text-amber-600 dark:text-amber-400 flex items-center gap-1 font-sans">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Please enter a complete 13-digit CNIC number ({13 - cleanCnic.length} digits remaining).</span>
            </p>
          )}

          {isValidCnic && (
            <p className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-sans font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Valid CNIC format: {formattedCnic}. Ready to verify on official EOBI database.</span>
            </p>
          )}
        </div>

        {/* Action Button */}
        <a
          href="https://eobi.gov.pk/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCopy}
          className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-md ${
            isValidCnic
              ? 'bg-doc-ink text-white hover:bg-slate-800 cursor-pointer ring-2 ring-doc-brass/30'
              : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed pointer-events-none'
          }`}
        >
          <Search className="w-4 h-4 text-doc-brass" />
          <span>{isUrdu ? 'ای او بی آئی آفیشل پورٹل پر چیک کریں' : 'Check Status on Official EOBI Portal (eobi.gov.pk)'}</span>
          <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
        </a>
      </div>

      {/* Verification Instructions Callout */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-2 text-xs font-sans text-slate-700 dark:text-slate-300 leading-relaxed">
        <div className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-300 text-sm">
          <Info className="w-4 h-4" />
          <span>How the Official EOBI Verification Portal Works</span>
        </div>
        <p>
          When you click the button above, your 13-digit CNIC is copied to your clipboard. On the official EOBI website (<code>eobi.gov.pk</code>):
        </p>
        <ol className="list-decimal list-inside space-y-1 text-slate-600 dark:text-slate-300">
          <li>Navigate to the <strong>&quot;Individual Information&quot; / &quot;Insured Person Details&quot;</strong> tab.</li>
          <li>Paste (Ctrl+V) your 13-digit CNIC number in the search box.</li>
          <li>Click <strong>&quot;Submit&quot;</strong> to view your total registered service months, insured history, and employer contributions.</li>
        </ol>
        <p className="text-[11px] text-slate-500 italic">
          * Note: EOBI&apos;s online database is hosted during standard server hours (Mon–Fri, 9:00 AM – 7:00 PM PST). If the portal is temporarily slow, retry during business hours.
        </p>
      </div>

      {/* Status Explanations Grid */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <BadgeCheck className="w-5 h-5 text-doc-brass" />
          <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-white">
            {isUrdu ? 'ای او بی آئی سٹیٹس کے معانی' : 'Understanding Your EOBI Status Result'}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-sans">
          {/* Active */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/60 space-y-1.5">
            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-mono font-bold text-[11px]">
              ACTIVE (متحرک)
            </span>
            <h4 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Contributions Current</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Your employer is actively registered and depositing your mandatory 5% employer + 1% employee monthly contributions.
            </p>
          </div>

          {/* Inactive */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/60 space-y-1.5">
            <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-mono font-bold text-[11px]">
              INACTIVE (غیر متحرک)
            </span>
            <h4 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Contributions Paused</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              You possess an EOBI registration number, but contributions have stopped (due to job switch, resignation, or employer default).
            </p>
          </div>

          {/* Pending */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/60 space-y-1.5">
            <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 font-mono font-bold text-[11px]">
              PENDING (زیر التواء)
            </span>
            <h4 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Under Verification</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              New registration or pension claim dossier has been submitted and is currently being verified at the regional EOBI office.
            </p>
          </div>

          {/* Approved / Pensioner */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-doc-brass/50 space-y-1.5">
            <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 font-mono font-bold text-[11px]">
              APPROVED (منظور شدہ)
            </span>
            <h4 className="font-serif font-bold text-sm text-doc-ink dark:text-white">Active Pensioner</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Claim approved; monthly pension disbursed electronically via designated bank ATM / Bank of Punjab debit card.
            </p>
          </div>
        </div>
      </div>

      {/* Missing Records / Unregistered Employer Action Plan */}
      <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 text-xs font-sans">
        <h4 className="font-serif font-bold text-sm text-doc-ink dark:text-white flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-doc-seal" />
          <span>What If Your CNIC Shows &quot;No Record Found&quot; Despite Years of Work?</span>
        </h4>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          Under the <strong>Employees&apos; Old-Age Benefits Act 1976</strong>, every commercial establishment with <strong>5 or more employees</strong> is legally mandated to register all employees within 30 days. If your employer neglected registration or contributions stopped upon changing jobs:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-1">
            <span className="font-bold text-doc-ink dark:text-white block">Step 1: Contact HR / Accounts</span>
            <p className="text-slate-500">Ask your employer for your EOBI Registration Number (Form PE-01 / PI-02 copy).</p>
          </div>
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-1">
            <span className="font-bold text-doc-ink dark:text-white block">Step 2: Collect Proof of Service</span>
            <p className="text-slate-500">Gather appointment letters, monthly salary slips showing EOBI deduction, and bank salary statements.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-1">
            <span className="font-bold text-doc-ink dark:text-white block">Step 3: Visit Regional EOBI Office</span>
            <p className="text-slate-500">Submit a formal missing contribution complaint with documentary evidence for retroactive recovery.</p>
          </div>
        </div>
      </div>

      {/* Internal Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-mono font-bold">
        <Link
          href="/welfare/bisp-eligibility-check-by-cnic"
          className="text-doc-seal hover:text-doc-brass transition"
        >
          <span>← BISP 8171 Eligibility Check</span>
        </Link>
        <Link
          href="/welfare/pmt-score-explained-bisp-eligibility-2026"
          className="text-doc-brass hover:underline transition"
        >
          <span>PMT Score Formula &amp; Cutoff Rules →</span>
        </Link>
      </div>
    </div>
  );
}
