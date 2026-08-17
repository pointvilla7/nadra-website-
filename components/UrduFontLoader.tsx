'use client';

/**
 * UrduFontLoader
 *
 * Noto Nastaliq Urdu is ~1.5MB. Loading it eagerly for every visitor is a
 * significant performance penalty — most visitors read the site in English.
 *
 * This component listens to the LanguageContext and only injects the Noto
 * Nastaliq Urdu Google Fonts stylesheet when the user actively selects the
 * "Urdu (Nastaliq)" language mode. The font is then cached by the browser
 * for subsequent visits.
 */

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';


export const UrduFontLoader: React.FC = () => {
  const { language } = useLanguage();
  const injected = useRef(false);

  useEffect(() => {
    // Only inject when user is in Urdu mode AND we haven't already injected
    if (language !== 'ur' || injected.current) return;

    // Check if already loaded (e.g. back navigation)
    if (document.getElementById('noto-nastaliq-urdu-stylesheet')) {
      injected.current = true;
      return;
    }

    const link = document.createElement('link');
    link.id = 'noto-nastaliq-urdu-stylesheet';
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap';
    link.crossOrigin = 'anonymous';

    document.head.appendChild(link);
    injected.current = true;
  }, [language]);

  // Also add the CSS variable when Urdu font is needed
  useEffect(() => {
    if (language === 'ur') {
      document.documentElement.style.setProperty(
        '--font-urdu',
        "'Noto Nastaliq Urdu', 'Noto Sans Arabic', 'Segoe UI', serif"
      );
    }
  }, [language]);

  return null; // renders nothing — side-effects only
};
