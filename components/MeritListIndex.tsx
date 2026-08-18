'use client';

import React, { useState } from 'react';
import {
  GraduationCap,
  ExternalLink,
  ShieldCheck,
  FileText,
  Search,
  CheckCircle2,
  ArrowRight,
  Lock,
  Info,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

// =============================================================
// UNIVERSITY DATA — verified from official admission portals
// =============================================================

export interface University {
  id: string;
  nameEn: string;
  nameUr: string;
  shortName: string;
  city: string;
  province: string;
  admissionUrl: string;
  meritListUrl: string;
  lookupType: 'pdf_only' | 'html_table' | 'portal_login' | 'public_lookup';
  lookupNote: string;
  currentStatus: 'active' | 'expected' | 'closed';
  currentListNumber?: number;
}

export const UNIVERSITIES: University[] = [
  {
    id: 'pu',
    nameEn: 'University of the Punjab',
    nameUr: 'جامعہ پنجاب',
    shortName: 'PU',
    city: 'Lahore',
    province: 'Punjab',
    admissionUrl: 'https://admissions.pu.edu.pk',
    meritListUrl: 'https://admissions.pu.edu.pk/merit-list',
    lookupType: 'html_table',
    lookupNote: 'Merit lists are published as HTML tables. Use Ctrl+F / Cmd+F to search your Roll No or CNIC.',
    currentStatus: 'active',
    currentListNumber: 2,
  },
  {
    id: 'uet',
    nameEn: 'University of Engineering & Technology',
    nameUr: 'یونیورسٹی آف انجینیئرنگ اینڈ ٹیکنالوجی',
    shortName: 'UET Lahore',
    city: 'Lahore',
    province: 'Punjab',
    admissionUrl: 'https://admission.uet.edu.pk',
    meritListUrl: 'https://admission.uet.edu.pk',
    lookupType: 'portal_login',
    lookupNote: 'UET requires login with your application credentials to check your specific admission status.',
    currentStatus: 'active',
    currentListNumber: 3,
  },
  {
    id: 'nust',
    nameEn: 'National University of Sciences & Technology',
    nameUr: 'نسٹ یونیورسٹی اسلام آباد',
    shortName: 'NUST',
    city: 'Islamabad',
    province: 'Federal',
    admissionUrl: 'https://ugadmissions.nust.edu.pk',
    meritListUrl: 'https://ugadmissions.nust.edu.pk',
    lookupType: 'public_lookup',
    lookupNote: 'NUST UG portal allows selection status check by Registration/Roll Number — no login needed.',
    currentStatus: 'active',
    currentListNumber: 3,
  },
  {
    id: 'comsats',
    nameEn: 'COMSATS University Islamabad',
    nameUr: 'کامسیٹس یونیورسٹی اسلام آباد',
    shortName: 'COMSATS',
    city: 'Islamabad',
    province: 'Federal',
    admissionUrl: 'https://admission.comsats.edu.pk',
    meritListUrl: 'https://admission.comsats.edu.pk/open_merit_list',
    lookupType: 'html_table',
    lookupNote: 'Merit lists published online. Use Ctrl+F to search your application ID or name.',
    currentStatus: 'active',
    currentListNumber: 2,
  },
  {
    id: 'lums',
    nameEn: 'Lahore University of Management Sciences',
    nameUr: 'لمس لاہور',
    shortName: 'LUMS',
    city: 'Lahore',
    province: 'Punjab',
    admissionUrl: 'https://admissions.lums.edu.pk',
    meritListUrl: 'https://admissions.lums.edu.pk',
    lookupType: 'portal_login',
    lookupNote: 'LUMS sends offer letters via email to selected applicants. Check your application portal dashboard.',
    currentStatus: 'active',
  },
  {
    id: 'qau',
    nameEn: 'Quaid-i-Azam University',
    nameUr: 'قائداعظم یونیورسٹی اسلام آباد',
    shortName: 'QAU',
    city: 'Islamabad',
    province: 'Federal',
    admissionUrl: 'https://qau.edu.pk/admissions',
    meritListUrl: 'https://qau.edu.pk/admissions/merit-lists',
    lookupType: 'pdf_only',
    lookupNote: 'QAU publishes merit lists as PDF files. Download the PDF and use Ctrl+F to find your Roll No.',
    currentStatus: 'expected',
  },
  {
    id: 'ned',
    nameEn: 'NED University of Engineering',
    nameUr: 'این ای ڈی یونیورسٹی کراچی',
    shortName: 'NED',
    city: 'Karachi',
    province: 'Sindh',
    admissionUrl: 'https://admission.neduet.edu.pk',
    meritListUrl: 'https://admission.neduet.edu.pk',
    lookupType: 'public_lookup',
    lookupNote: 'NED online merit list allows lookup by Form No / Roll No on the admission portal.',
    currentStatus: 'active',
    currentListNumber: 2,
  },
  {
    id: 'karachi',
    nameEn: 'University of Karachi',
    nameUr: 'جامعہ کراچی',
    shortName: 'KU',
    city: 'Karachi',
    province: 'Sindh',
    admissionUrl: 'https://uok.edu.pk/admissions',
    meritListUrl: 'https://uok.edu.pk/admissions/merit-list',
    lookupType: 'pdf_only',
    lookupNote: 'University of Karachi publishes merit lists as PDFs. Use Ctrl+F to search your name or Roll No.',
    currentStatus: 'expected',
  },
];

const LOOKUP_TYPE_LABELS = {
  pdf_only: { en: 'PDF Download', ur: 'پی ڈی ایف', color: 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border-amber-300 dark:border-amber-700' },
  html_table: { en: 'Online Table', ur: 'آن لائن ٹیبل', color: 'bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-300 border-blue-300 dark:border-blue-700' },
  portal_login: { en: 'Login Required', ur: 'لاگ ان ضروری', color: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-300 dark:border-slate-600' },
  public_lookup: { en: 'Public Lookup', ur: 'براہ راست چیک', color: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700' },
};

const STATUS_LABELS = {
  active: { en: 'Lists Live Now', color: 'text-emerald-600 dark:text-emerald-400' },
  expected: { en: 'List Expected Soon', color: 'text-amber-600 dark:text-amber-400' },
  closed: { en: 'Admissions Closed', color: 'text-slate-500 dark:text-slate-400' },
};

interface MeritListIndexProps {
  compact?: boolean;
  className?: string;
  hideHeader?: boolean;
}

export const MeritListIndex: React.FC<MeritListIndexProps> = ({
  compact = false,
  className = '',
  hideHeader = false,
}) => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'active' | 'public_lookup'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = UNIVERSITIES.filter((u) => {
    const matchesFilter =
      filter === 'all' ||
      (filter === 'active' && u.currentStatus === 'active') ||
      (filter === 'public_lookup' && (u.lookupType === 'public_lookup' || u.lookupType === 'html_table'));
    const matchesSearch =
      !searchQuery ||
      u.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div
      className={`w-full max-w-[600px] mx-auto rounded-2xl doc-card border-2 border-doc-brass/40 shadow-xl overflow-hidden bg-white dark:bg-doc-dark-card text-doc-ink dark:text-slate-100 transition-all ${className}`}
    >
      {/* Header */}
      {!hideHeader && (
        <div className="bg-doc-ink text-white p-5 sm:p-6 border-b-2 border-doc-brass/40 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-48 h-48 bg-doc-seal/15 rounded-full blur-2xl pointer-events-none"
          />
          <div className="flex items-center justify-between gap-2 mb-2">
            <InteractiveToolBadge labelEn="MERIT LIST INDEX" labelUr="میرٹ لسٹ انڈیکس" variant="navy" />
            <span className="text-[11px] font-mono font-bold text-doc-brass uppercase tracking-wider">
              2026 SESSION
            </span>
          </div>
          <div className="flex items-start gap-3 mt-3">
            <div className="p-2.5 rounded-xl bg-doc-brass/20 text-doc-brass border border-doc-brass/40 shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-tight">
                {t('University Merit List Tracker 2026', 'یونیورسٹی میرٹ لسٹ ٹریکر 2026')}
              </h2>
              <p className="text-xs text-slate-300 mt-1 font-sans">
                {t(
                  'Direct links to official admission portals & merit list pages for 8 universities',
                  '8 یونیورسٹیوں کے آفیشل ایڈمیشن پورٹلز اور میرٹ لسٹ صفحات کے براہ راست لنکس'
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* How to Check Guide */}
      <div className="px-5 pt-4 pb-0">
        <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-xs font-sans text-blue-800 dark:text-blue-300 space-y-1.5">
          <p className="font-bold flex items-center gap-1.5">
            <Info className="w-4 h-4 shrink-0" />
            {t('How to find your name in a merit list PDF or table:', 'میرٹ لسٹ میں اپنا نام کیسے تلاش کریں:')}
          </p>
          <ol className="space-y-1 ml-5 list-decimal">
            <li>{t('Open the merit list link below.', 'نیچے دیا گیا میرٹ لسٹ لنک کھولیں۔')}</li>
            <li>{t('Press Ctrl+F (Windows) or Cmd+F (Mac) to open the search box.', 'Ctrl+F یا Cmd+F دبائیں اور اپنا رول نمبر یا سی این آئی سی تلاش کریں۔')}</li>
            <li>{t('Type your Roll Number or CNIC and it will highlight your row.', 'اپنا رول نمبر یا شناختی کارڈ نمبر لکھیں — آپ کا نام ہائی لائٹ ہو جائے گا۔')}</li>
          </ol>
        </div>
      </div>

      {/* Main Body */}
      <div className="p-5 sm:p-6 space-y-4">
        {/* Filter Row */}
        <div className="flex flex-wrap gap-2">
          {([
            { key: 'all', labelEn: 'All Universities', labelUr: 'تمام یونیورسٹیاں' },
            { key: 'active', labelEn: 'Lists Live Now', labelUr: 'لائیو لسٹس' },
            { key: 'public_lookup', labelEn: 'No-Login Lookup', labelUr: 'بغیر لاگ ان' },
          ] as const).map((f) => (
            <button
              key={f.key}
              type="button"
              aria-pressed={filter === f.key}
              onClick={() => setFilter(f.key)}
              className={`py-1.5 px-3 rounded-lg border text-xs font-mono font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal ${
                filter === f.key
                  ? 'bg-doc-ink text-doc-brass border-doc-brass shadow-sm'
                  : 'bg-doc-paper/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
              }`}
            >
              {t(f.labelEn, f.labelUr)}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder={t('Search university name or city…', 'یونیورسٹی کا نام یا شہر تلاش کریں…')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-doc-paper/70 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-doc-ink dark:text-white placeholder-slate-400 focus:outline-none focus:border-doc-seal text-sm font-sans transition"
          />
        </div>

        {/* University Cards */}
        <div className="space-y-3">
          {filtered.length === 0 && (
            <p className="text-center text-sm text-slate-500 dark:text-slate-400 py-6 font-sans">
              {t('No universities match your filter.', 'کوئی یونیورسٹی فلٹر سے مطابقت نہیں رکھتی۔')}
            </p>
          )}
          {filtered.map((u) => {
            const typeInfo = LOOKUP_TYPE_LABELS[u.lookupType];
            const statusInfo = STATUS_LABELS[u.currentStatus];
            return (
              <div
                key={u.id}
                className="p-4 rounded-xl bg-doc-paper dark:bg-slate-800/90 border border-doc-brass/20 dark:border-slate-700 space-y-3"
              >
                {/* University Header */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-serif font-bold text-sm text-doc-ink dark:text-white">
                        {u.shortName}
                      </span>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${typeInfo.color}`}>
                        {t(typeInfo.en, typeInfo.en)}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-sans">
                      {t(u.nameEn, u.nameUr)} — {u.city}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className={`text-[10px] font-mono font-bold ${statusInfo.color}`}>
                      {statusInfo.en}
                    </p>
                    {u.currentListNumber && (
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                        List #{u.currentListNumber}
                      </p>
                    )}
                  </div>
                </div>

                {/* Note */}
                <p className="text-[11px] text-slate-600 dark:text-slate-300 font-sans leading-relaxed flex items-start gap-1.5">
                  <Info className="w-3.5 h-3.5 shrink-0 text-doc-brass mt-0.5" />
                  {u.lookupNote}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={u.meritListUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-doc-seal hover:bg-red-700 text-white font-mono font-bold text-xs flex items-center justify-center gap-1.5 transition min-h-[44px] shadow-sm"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{t('VIEW MERIT LIST', 'میرٹ لسٹ دیکھیں')}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  {u.admissionUrl !== u.meritListUrl && (
                    <a
                      href={u.admissionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-mono font-bold text-xs flex items-center justify-center gap-1.5 transition hover:border-doc-brass min-h-[44px]"
                    >
                      <span>{t('ADMISSION PORTAL', 'ایڈمیشن پورٹل')}</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-2">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            {t('Legend: Lookup Method', 'لیجنڈ: چیک کرنے کا طریقہ')}
          </p>
          <div className="grid grid-cols-2 gap-1.5 text-[11px]">
            {Object.entries(LOOKUP_TYPE_LABELS).map(([key, val]) => (
              <div key={key} className={`flex items-center gap-1.5 px-2 py-1 rounded border ${val.color}`}>
                <CheckCircle2 className="w-3 h-3 shrink-0" />
                <span className="font-mono font-semibold">{val.en}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans space-y-1">
          <p className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-doc-seal shrink-0" />
            <span>{t('Independent Guide — Not Affiliated with Any University', 'آزادانہ گائیڈ — کسی یونیورسٹی سے وابستہ نہیں')}</span>
          </p>
          <p className="leading-relaxed">
            {t(
              'Pakistan Info Hub is not affiliated with any university. Merit list links are provided for convenience — always verify your admission status directly on the official university portal.',
              'پاکستان انفو ہب کا کسی یونیورسٹی سے کوئی تعلق نہیں۔ میرٹ لسٹ لنکس آسانی کے لیے دیے گئے ہیں — اپنا داخلہ ہمیشہ سرکاری یونیورسٹی پورٹل پر تصدیق کریں۔'
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
