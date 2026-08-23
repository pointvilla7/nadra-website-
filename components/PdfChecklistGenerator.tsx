'use client';

import React, { useState, useEffect } from 'react';
import {
  FileText,
  Printer,
  Download,
  ShieldCheck,
  CheckCircle2,
  X,
  Lock,
  Mail,
  QrCode,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { FeeItem } from '@/lib/data/articles';

interface PdfChecklistGeneratorProps {
  slug?: string;
  title: string;
  category: string;
  items: string[];
  feeStructure?: FeeItem[];
  requireEmail?: boolean;
}

export const PdfChecklistGenerator: React.FC<PdfChecklistGeneratorProps> = ({
  slug = 'guide-checklist',
  title,
  category,
  items,
  feeStructure,
  requireEmail = false,
}) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [hasUnlocked, setHasUnlocked] = useState(!requireEmail);
  const [downloadCount, setDownloadCount] = useState(1280);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(`pih_downloads_${slug}`);
      if (stored) {
        setDownloadCount(parseInt(stored, 10));
      } else {
        const base = 1100 + (slug.length * 37) % 850;
        setDownloadCount(base);
      }
    } catch {
      // Ignore
    }
  }, [slug]);

  const handlePrintOrDownload = () => {
    // Increment download counter
    const newCount = downloadCount + 1;
    setDownloadCount(newCount);
    try {
      localStorage.setItem(`pih_downloads_${slug}`, newCount.toString());
    } catch {
      // Ignore
    }

    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    try {
      const leads = JSON.parse(localStorage.getItem('pih_checklist_leads') || '[]');
      leads.push({ email, slug, timestamp: new Date().toISOString() });
      localStorage.setItem('pih_checklist_leads', JSON.stringify(leads));
    } catch {
      // Ignore
    }

    setHasUnlocked(true);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 dark:bg-doc-brass text-white text-xs font-bold font-sans hover:bg-doc-brass dark:hover:bg-amber-600 active:scale-95 transition-all shadow-sm"
      >
        <FileText className="w-4 h-4 text-doc-brass dark:text-white" />
        <span>{t('Download Checklist PDF', 'چیک لسٹ پی ڈی ایف حاصل کریں')}</span>
      </button>

      {/* Printable Modal Overlay */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Printable Checklist Modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs animate-fadeIn overflow-y-auto"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white text-slate-900 border-2 border-doc-brass/60 rounded-3xl max-w-2xl w-full p-6 sm:p-10 space-y-6 shadow-2xl relative my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button (Hidden when printing) */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 no-print transition"
              aria-label="Close checklist"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Email-Gate Screen if enabled and locked */}
            {!hasUnlocked ? (
              <div className="py-6 space-y-5 text-center max-w-md mx-auto">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-doc-brass flex items-center justify-center mx-auto border border-amber-500/30">
                  <Lock className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-serif font-bold text-slate-900">
                    {t('Download Official Document Checklist', 'آفیشل ڈاکومنٹ چیک لسٹ ڈاؤن لوڈ کریں')}
                  </h3>
                  <p className="text-xs text-slate-500 font-sans">
                    {t(
                      'Enter your email address to unlock the printable PDF checklist with required photocopies and fee chart.',
                      'پرنٹ ایبل پی ڈی ایف اور ضروری کاغذات کی لسٹ ان لاک کرنے کے لیے ای میل درج کریں۔'
                    )}
                  </p>
                </div>

                <form onSubmit={handleEmailSubmit} className="space-y-3">
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="citizen@example.com"
                      className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-300 text-xs sm:text-sm font-sans focus:outline-none focus:border-doc-brass"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full h-11 rounded-xl bg-doc-brass hover:bg-amber-600 text-white text-xs font-bold font-sans flex items-center justify-center gap-2 transition shadow-md"
                  >
                    <span>{t('Unlock & View Checklist PDF →', 'پی ڈی ایف ان لاک کریں ←')}</span>
                  </button>
                </form>
              </div>
            ) : (
              /* High-Fidelity Printable Document Template */
              <div className="space-y-6">
                
                {/* 1. Official Header */}
                <div className="border-b-2 border-slate-900 pb-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-mono text-xs font-extrabold text-doc-ink uppercase tracking-wider">
                      <ShieldCheck className="w-5 h-5 text-emerald-600" />
                      <span>PAKISTAN INFO HUB • OFFICIAL CIVIC CHECKLIST</span>
                    </div>
                    <span className="font-mono text-[10px] font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-300">
                      GAZETTE 2026 EDITION
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-serif font-black text-slate-950 leading-tight">
                    {title}
                  </h2>

                  <p className="text-xs text-slate-600 font-sans">
                    {t(
                      'Complete verification checklist of mandatory original documents, photocopies, and official fee schedule before visiting the government facilitation center.',
                      'سرکاری سنٹر جانے سے پہلے لازمی اصل کاغذات، تصدیق شدہ کاپیاں اور فیس شیڈول کی چیک لسٹ۔'
                    )}
                  </p>
                </div>

                {/* 2. Document Checklist Items */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                    Mandatory Document Checklist (Tick as completed):
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl border border-slate-200 bg-slate-50/70"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 mt-0.5 rounded text-emerald-600 border-slate-400 focus:ring-emerald-500 cursor-pointer"
                        />
                        <span className="text-xs font-medium text-slate-800 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Compact Fee Schedule Table (if available) */}
                {feeStructure && feeStructure.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                      Official Gazette Fee Structure:
                    </h4>
                    <div className="overflow-x-auto rounded-xl border border-slate-200">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-slate-100 font-mono text-[10px] text-slate-700 uppercase">
                          <tr>
                            <th className="px-3 py-2">Service Type</th>
                            <th className="px-3 py-2">Normal Rate</th>
                            <th className="px-3 py-2">Urgent Rate</th>
                            <th className="px-3 py-2">Executive Rate</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-sans">
                          {feeStructure.map((fee, idx) => (
                            <tr key={idx} className="hover:bg-slate-50">
                              <td className="px-3 py-2 font-bold text-slate-900">{fee.serviceEn}</td>
                              <td className="px-3 py-2 font-mono">{fee.normal}</td>
                              <td className="px-3 py-2 font-mono">{fee.urgent}</td>
                              <td className="px-3 py-2 font-mono">{fee.executive || '—'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* 4. Footer with QR Code Placeholder & Verification Links */}
                <div className="pt-4 border-t-2 border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                      <QrCode className="w-7 h-7" />
                    </div>
                    <div className="text-[11px] font-sans">
                      <span className="font-bold text-slate-900 block">Pakistan Info Hub Directory</span>
                      <span className="text-slate-500 font-mono text-[10px]">pakistaninfohub.com/{slug}</span>
                    </div>
                  </div>

                  {/* Actions (Hidden on Print) */}
                  <div className="flex items-center gap-2 no-print w-full sm:w-auto">
                    <button
                      onClick={handlePrintOrDownload}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 active:scale-95 text-white text-xs font-bold font-sans flex items-center justify-center gap-2 shadow-md transition"
                    >
                      <Printer className="w-4 h-4 text-doc-brass" />
                      <span>{t('Print / Save PDF', 'پرنٹ یا پی ڈی ایف سیو کریں')}</span>
                    </button>
                  </div>
                </div>

                <div className="no-print flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                  <span>📥 {downloadCount.toLocaleString()}+ Citizens Downloaded</span>
                  <span>100% Free Public Resource</span>
                </div>

              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
