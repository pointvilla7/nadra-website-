'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Pause, Play } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

interface TextToSpeechButtonProps {
  textToRead: string;
  title?: string;
  className?: string;
}

export const TextToSpeechButton: React.FC<TextToSpeechButtonProps> = ({
  textToRead,
  title,
  className = '',
}) => {
  const { language, t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSupported(true);
      // Load voices asynchronously if browser supports it
      const loadVoices = () => {
        window.speechSynthesis.getVoices();
      };
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    } else {
      setSupported(false);
    }

    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const cleanTextForSpeech = (raw: string): string => {
    return raw
      .replace(/[*#_`•]/g, ' ')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const handlePlay = () => {
    if (!supported || typeof window === 'undefined') return;

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    window.speechSynthesis.cancel(); // cancel any active speech

    const rawContent = title ? `${title}. ${textToRead}` : textToRead;
    const cleanContent = cleanTextForSpeech(rawContent);
    const utterance = new SpeechSynthesisUtterance(cleanContent);

    // Select voice based on current language
    const voices = window.speechSynthesis.getVoices();
    if (language === 'ur') {
      const urVoice = voices.find(
        (v) => v.lang.startsWith('ur') || v.lang.startsWith('hi') || v.name.toLowerCase().includes('urdu')
      );
      if (urVoice) utterance.voice = urVoice;
      utterance.rate = 0.85;
      utterance.lang = 'ur-PK';
    } else {
      const enVoice = voices.find((v) => v.lang.startsWith('en'));
      if (enVoice) utterance.voice = enVoice;
      utterance.rate = 0.95;
      utterance.lang = 'en-US';
    }

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    if (isPlaying && typeof window !== 'undefined') {
      window.speechSynthesis.pause();
      setIsPaused(true);
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    if (typeof window !== 'undefined') {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setIsPaused(false);
  };

  if (!supported) return null;

  return (
    <div
      className={`inline-flex items-center gap-1.5 bg-doc-paper dark:bg-slate-800/90 border border-doc-brass/40 px-3 py-1.5 rounded-lg text-xs font-medium text-doc-ink dark:text-slate-200 shadow-sm ${className}`}
    >
      <Volume2 className={`w-4 h-4 text-doc-seal dark:text-red-400 shrink-0 ${isPlaying ? 'animate-bounce' : ''}`} />
      <span className="font-mono uppercase tracking-wider text-[11px] text-slate-600 dark:text-slate-300 font-bold">
        {t('Audio Guide:', 'صوتی گائیڈ:', 'Audio Guide:')}
      </span>

      {!isPlaying && !isPaused && (
        <button
          onClick={handlePlay}
          className="flex items-center gap-1 font-bold text-doc-seal dark:text-red-400 hover:underline px-2 py-0.5 rounded bg-doc-seal/10 dark:bg-red-950/50 hover:bg-doc-seal/20 transition cursor-pointer"
          title="Click to listen to article audio reading"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>{t('Listen', 'سنیں', 'Sunain')}</span>
        </button>
      )}

      {isPlaying && (
        <>
          <button
            onClick={handlePause}
            className="flex items-center gap-1 font-bold text-amber-600 dark:text-amber-400 hover:underline px-1.5 py-0.5"
            title="Pause audio"
          >
            <Pause className="w-3.5 h-3.5 fill-current" />
            <span>{t('Pause', 'وقفہ', 'Pause')}</span>
          </button>
          <button
            onClick={handleStop}
            className="flex items-center gap-1 font-bold text-red-600 dark:text-red-400 hover:underline px-1.5 py-0.5"
            title="Stop audio"
          >
            <VolumeX className="w-3.5 h-3.5" />
            <span>{t('Stop', 'روکیں', 'Stop')}</span>
          </button>
        </>
      )}

      {isPaused && (
        <>
          <button
            onClick={handlePlay}
            className="flex items-center gap-1 font-bold text-doc-seal dark:text-red-400 hover:underline px-1.5 py-0.5"
            title="Resume audio"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{t('Resume', 'جاری رکھیں', 'Resume')}</span>
          </button>
          <button
            onClick={handleStop}
            className="flex items-center gap-1 font-bold text-red-600 dark:text-red-400 hover:underline px-1.5 py-0.5"
            title="Stop audio"
          >
            <VolumeX className="w-3.5 h-3.5" />
            <span>{t('Stop', 'روکیں', 'Stop')}</span>
          </button>
        </>
      )}
    </div>
  );
};

