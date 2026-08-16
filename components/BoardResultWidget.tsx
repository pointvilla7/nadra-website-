'use client';

import React, { useState } from 'react';
import { EDUCATION_BOARDS, EducationBoard } from '@/lib/data/boards';
import { useLanguage } from '@/lib/context/LanguageContext';
import { GraduationCap, Search, ExternalLink, MessageSquare, CheckCircle2, ChevronDown } from 'lucide-react';

export const BoardResultWidget: React.FC = () => {
  const { t } = useLanguage();
  const [selectedBoardId, setSelectedBoardId] = useState<string>('bise-lahore');
  const [rollNo, setRollNo] = useState<string>('');
  const [examClass, setExamClass] = useState<string>('10th');
  const [searched, setSearched] = useState<boolean>(false);

  const selectedBoard: EducationBoard =
    EDUCATION_BOARDS.find((b) => b.id === selectedBoardId) || EDUCATION_BOARDS[0];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rollNo.trim()) return;
    setSearched(true);
  };

  return (
    <div className="my-8 rounded-2xl glass-card border border-sky-500/30 p-6 md:p-8 shadow-xl bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 text-white relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-extrabold text-lg md:text-xl text-white">
              {t('Pakistan BISE Board Results 2026 Portal', 'پاکستان تمام تعلیمی بورڈز رزلٹ پورٹل 2026')}
            </h3>
            <p className="text-xs text-slate-300">
              {t('Expandable Multi-Board Online Result Checker', 'تمام اضلاع کے بورڈ امتحانات کا آن لائن نتیجہ')}
            </p>
          </div>
        </div>

        <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-900/80 text-sky-300 border border-sky-600/40">
          {t('Matric & Inter 2026', 'میٹرک و انٹر 2026')}
        </span>
      </div>

      {/* Form Controls */}
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Select Board */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-sky-200 mb-2">
            {t('Select Education Board:', 'تعلیمی بورڈ کا انتخاب کریں:')}
          </label>
          <div className="relative">
            <select
              value={selectedBoardId}
              onChange={(e) => {
                setSelectedBoardId(e.target.value);
                setSearched(false);
              }}
              className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white focus:outline-none focus:border-sky-400 text-sm font-semibold appearance-none cursor-pointer"
            >
              {EDUCATION_BOARDS.map((board) => (
                <option key={board.id} value={board.id} className="bg-slate-900 text-white">
                  {t(board.nameEn, board.nameUr)} ({board.province})
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-sky-400 absolute right-3 top-3.5 pointer-events-none" />
          </div>
        </div>

        {/* Select Class */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-sky-200 mb-2">
            {t('Select Class / Exam:', 'کلاس / امتحان کا انتخاب:')}
          </label>
          <select
            value={examClass}
            onChange={(e) => setExamClass(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white focus:outline-none focus:border-sky-400 text-sm font-semibold cursor-pointer"
          >
            <option value="10th">{t('10th Class (Matric Annual)', 'دسویں (میٹرک سالانہ)')}</option>
            <option value="9th">{t('9th Class (Matric Part 1)', 'نویں (میٹرک پارٹ 1)')}</option>
            <option value="12th">{t('12th Class (2nd Year / FSc)', 'بارہویں (سیکنڈ ایئر)')}</option>
            <option value="11th">{t('11th Class (1st Year / FA)', 'گیارہویں (فرسٹ ایئر)')}</option>
          </select>
        </div>

        {/* Roll Number Input */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-sky-200 mb-2">
            {t('Enter Roll Number:', 'رول نمبر درج کریں:')}
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={rollNo}
              onChange={(e) => {
                setRollNo(e.target.value);
                setSearched(false);
              }}
              placeholder="e.g. 524109"
              className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 text-base font-mono font-bold"
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-1 transition shrink-0"
            >
              <Search className="w-4 h-4" />
              <span>{t('Search', 'تلاش')}</span>
            </button>
          </div>
        </div>
      </form>

      {/* Selected Board Info Box */}
      <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>{t(selectedBoard.nameEn, selectedBoard.nameUr)}</span>
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            {t(`Province: ${selectedBoard.province} • Official Server Online`, `صوبہ: ${selectedBoard.province} • سرور آن لائن`)}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href={selectedBoard.resultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center gap-1.5 transition shadow"
          >
            <span>{t('Open Official Board Portal', 'آفیشل بورڈ ویب سائٹ پورٹل')}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Search Result Simulation */}
      {searched && (
        <div className="mt-4 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs animate-fadeIn space-y-2">
          <div className="flex items-center gap-2 font-bold text-sm text-emerald-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>
              {t(`Query Ready for Roll No. ${rollNo} (${examClass})`, `رول نمبر ${rollNo} کا رزلٹ کا جائزہ`)}
            </span>
          </div>
          <p>
            {t(
              `The official results database for ${selectedBoard.nameEn} is active. Click the button above to view your complete marks breakdown and subject gazette on ${selectedBoard.officialWebsite}.`,
              `رزلٹ ڈیٹا بیس فعال ہے۔ اپنا مکمل رزلٹ بورڈ کے آفیشل پورٹل سے حاصل کریں۔`
            )}
          </p>
        </div>
      )}

      {/* SMS Result Code Info */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
        <MessageSquare className="w-4 h-4 text-sky-400 shrink-0" />
        <span>
          {t(
            'SMS Result Service: Send your Roll Number to 800291 (Lahore), 800296 (Rawalpindi), 800293 (Multan), or 800299 (Faisalabad).',
            'ایس ایم ایس رزلٹ کوڈز: لاہور بورڈ 800291، راولپنڈی بورڈ 800296، ملتان 800293۔'
          )}
        </span>
      </div>
    </div>
  );
};
