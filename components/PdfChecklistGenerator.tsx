'use client';

import React, { useState } from 'react';
import { FileText, Printer, CheckSquare, X, Download, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

interface PdfChecklistGeneratorProps {
  title: string;
  category: string;
  items: string[];
}

export const PdfChecklistGenerator: React.FC<PdfChecklistGeneratorProps> = ({
  title,
  category,
  items,
}) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2 bg-doc-paper dark:bg-doc-dark-card border border-doc-brass/60 rounded-lg text-xs font-bold text-doc-ink dark:text-slate-100 hover:border-doc-seal transition shadow-sm"
      >
        <FileText className="w-4 h-4 text-doc-seal" />
        <span>{t('Download Document Checklist', 'ضروری کاغذات چیک لسٹ ڈاؤن لوڈ/پرنٹ کریں', 'Document Checklist PDF')}</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white text-slate-900 border-2 border-doc-brass rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 no-print"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Official Header */}
            <div className="border-b-2 border-doc-brass pb-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-[11px] font-bold text-doc-seal">
                  <ShieldCheck className="w-4 h-4" />
                  <span>PAKISTAN INFO HUB • VERIFIED CHECKLIST</span>
                </div>
                <span className="font-mono text-[10px] bg-slate-100 px-2 py-0.5 rounded border border-slate-300">
                  DATE: August 2026
                </span>
              </div>
              <h2 className="font-serif font-extrabold text-xl text-doc-ink">
                {title}
              </h2>
              <p className="text-xs text-slate-600 font-medium">
                {t('Required original documents & photocopies checklist before visiting office.', 'دفتر جانے سے پہلے ضروری اصل دستاویزات اور تصدیق شدہ کاپیاں۔')}
              </p>
            </div>

            {/* Printable Checklist Items */}
            <div className="space-y-3 py-2">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-2.5 rounded-lg border border-slate-200 bg-slate-50">
                  <input type="checkbox" className="w-4 h-4 mt-0.5 text-doc-seal rounded border-slate-400 focus:ring-doc-seal" />
                  <span className="text-xs font-semibold text-slate-800 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Print Footer / Controls */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between no-print">
              <span className="text-[11px] font-mono text-slate-500">
                Official Directory • PakistanInfoHub.com
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-4 py-2 bg-doc-ink text-white text-xs font-bold rounded-lg hover:bg-doc-ink/90 transition shadow"
                >
                  <Printer className="w-4 h-4 text-doc-brass" />
                  <span>{t('Print / Save PDF', 'پرنٹ / پی ڈی ایف')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
