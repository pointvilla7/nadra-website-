'use client';

import React, { useState } from 'react';
import {
  Play,
  FileText,
  ChevronDown,
  ChevronUp,
  Globe,
  Sparkles,
  ShieldCheck,
  Copy,
  Check,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { VideoGuideData } from '@/lib/data/articles';

interface VideoGuideSectionProps {
  videoGuide: VideoGuideData;
}

export const VideoGuideSection: React.FC<VideoGuideSectionProps> = ({ videoGuide }) => {
  const { t, language } = useLanguage();
  const [activeLang, setActiveLang] = useState<'ur' | 'en'>(language === 'ur' ? 'ur' : 'ur');
  const [isTranscriptOpen, setIsTranscriptOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const activeVideoId =
    activeLang === 'en' && videoGuide.youtubeIdEn
      ? videoGuide.youtubeIdEn
      : videoGuide.youtubeIdUr;

  const currentTranscript =
    activeLang === 'ur' ? videoGuide.transcriptUr : videoGuide.transcriptEn;

  const handleCopyTranscript = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(currentTranscript);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      aria-label="Official Video Tutorial"
      className="p-5 sm:p-7 rounded-3xl border-2 border-doc-brass/30 bg-[#FAF9F6] dark:bg-[#1E2A3F] space-y-5 shadow-sm my-6"
    >
      {/* Header & Language Toggle Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 text-[10px] font-mono font-bold uppercase tracking-wider mb-1.5">
            <Play className="w-3 h-3 fill-current" />
            <span>OFFICIAL VIDEO WALKTHROUGH</span>
          </div>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
            {t(videoGuide.titleEn, videoGuide.titleUr)}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-sans mt-0.5">
            {t(videoGuide.descriptionEn, videoGuide.descriptionUr)}
          </p>
        </div>

        {/* Dual-Language Video Switcher */}
        {videoGuide.youtubeIdEn && (
          <div className="flex items-center gap-1 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shrink-0 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setActiveLang('ur')}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans font-bold transition ${
                activeLang === 'ur'
                  ? 'bg-slate-900 dark:bg-doc-brass text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              اردو (Urdu)
            </button>
            <button
              type="button"
              onClick={() => setActiveLang('en')}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans font-bold transition ${
                activeLang === 'en'
                  ? 'bg-slate-900 dark:bg-doc-brass text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              English
            </button>
          </div>
        )}
      </div>

      {/* 16:9 Aspect-Ratio Zero-CLS Video Player */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-300 dark:border-slate-800 bg-black">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?rel=0&modestbranding=1`}
          title={videoGuide.titleEn}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
        />
      </div>

      {/* Collapsible Video Transcript Accordion for Accessibility & SEO */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1120] overflow-hidden">
        <button
          type="button"
          onClick={() => setIsTranscriptOpen(!isTranscriptOpen)}
          className="w-full p-4 flex items-center justify-between gap-3 text-left hover:bg-slate-50 dark:hover:bg-slate-900/50 transition"
          aria-expanded={isTranscriptOpen}
        >
          <div className="flex items-center gap-2.5">
            <FileText className="w-4 h-4 text-doc-brass" />
            <span className="font-serif font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
              {t('Read Complete Video Transcript & Steps', 'مکمل ویڈیو ٹرانسکرپٹ اور متن پڑھیں')}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-slate-400">
              {isTranscriptOpen ? t('Collapse', 'بند کریں') : t('Expand', 'دیکھیں')}
            </span>
            {isTranscriptOpen ? (
              <ChevronUp className="w-4 h-4 text-slate-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-400" />
            )}
          </div>
        </button>

        {isTranscriptOpen && (
          <div className="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="font-mono">
                {activeLang === 'ur' ? 'اردو آڈیو ٹرانسکرپٹ' : 'Verbatim English Transcript'}
              </span>
              <button
                type="button"
                onClick={handleCopyTranscript}
                className="flex items-center gap-1 text-doc-brass hover:underline font-mono"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? t('Copied!', 'کاپی ہو گیا') : t('Copy Text', 'متن کاپی کریں')}</span>
              </button>
            </div>

            <p className="font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              {currentTranscript}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
