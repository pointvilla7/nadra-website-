'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ur' | 'roman';
export type FontSize = 'sm' | 'md' | 'lg';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  liteMode: boolean;
  setLiteMode: (enabled: boolean) => void;
  dir: 'ltr' | 'rtl';
  t: (enText: string, urText?: string, romanText?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper for automatic Roman Urdu conversion of basic UI terms if explicit roman text is not passed
function getRomanFallback(enText: string, urText?: string): string {
  const dictionary: Record<string, string> = {
    'Search verified guides, fees, BISP...': 'Verified guides, fees aur BISP search karein...',
    'Search': 'Talaash Karein',
    'Categories': 'Categories',
    'Trending': 'Mashhoor Guide',
    'Verified': 'Tasdeeq Shuda',
    'VERIFIED': 'Tasdeeq Shuda',
    'Last Verified on': 'Aakhri Bar Tasdeeq:',
    'Official Source': 'Official Govt Portal',
    'Step-by-Step Guide': 'Marhala-war Tareeqa',
    'Frequently Asked Questions': 'Aam Sawalat (FAQ)',
    'Fee Structure': 'Fee Schedule',
    'Apply Online': 'Online Apply Karein',
    'Check Status': 'Status Check Karein',
    'Check Eligibility': 'Aheliyat Check Karein',
    'Download Guide': 'Guide Download Karein',
    'Listen to Guide': 'Aawaz Se Sunain',
    'Step-by-Step Wizard': 'Marhala-war Wizard',
    'Standard Article View': 'Mukammal Article View',
    'In Short': 'Mukhtasar Khulasa',
    'Share on WhatsApp': 'WhatsApp Par Share Karein',
    'Copy Fee Details': 'Fee Details Copy Karein',
    'Copy Link': 'Link Copy Karein',
    'Get Alerts': 'Alerts Off/On',
    'Get Update Alerts': 'Alerts On Karein',
    'Call Helpline': 'Helpline Par Call Karein',
    'Was this guide helpful?': 'Kya yeh guide apke liye mufid thi?',
    'Yes, helpful': 'Haan, mufid thi',
    'No, needs update': 'Nahi, update chahiye',
    'Lite Mode': 'Low-Data Lite Mode',
    'LIVE VERIFIED TICKER': 'Live Verified Updates',
    'Read Full Guide': 'Mukammal Guide Parhein',
    'READ FILE': 'Mukammal Guide Parhein',
    'READ GUIDE': 'Mukammal Guide Parhein',
    'Files Available': 'Files Dastiyab Hain',
    'Official Category Portal': 'Official Category Portal',
    'Return to Portal Homepage': 'Homepage Par Wapas Jayen',
    'Search Directory': 'Talaash Karein',
    'QUICK LOOKUP:': 'Fawri Talaash:',
    'Gazette Verified': 'Govt Gazette Se Tasdeeq Shuda',
    'Fresh 2026 Data': 'Taza-tareen 2026 Data',
    'Interactive Tools': 'Online Tools',
    'Bilingual Support': 'Urdu aur English',
    'Verified Public Directory Categories': 'Important Categories',
    'Most Requested Official Records (2026)': 'Mashhoor Official Records',
    'Why Trust Pakistan Info Hub?': 'Pakistan Info Hub Par Aitebar Kyun?',
  };

  if (dictionary[enText]) return dictionary[enText];
  return enText;
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [fontSize, setFontSizeState] = useState<FontSize>('md');
  const [liteMode, setLiteModeState] = useState<boolean>(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('pih_language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'ur' || savedLang === 'roman')) {
      setLanguageState(savedLang);
      if (typeof document !== 'undefined') {
        document.documentElement.lang = savedLang === 'ur' ? 'ur' : 'en';
        document.documentElement.dir = savedLang === 'ur' ? 'rtl' : 'ltr';
      }
    }
    const savedSize = localStorage.getItem('pih_fontsize') as FontSize;
    if (savedSize && (savedSize === 'sm' || savedSize === 'md' || savedSize === 'lg')) {
      setFontSizeState(savedSize);
    }
    const savedLite = localStorage.getItem('pih_litemode');
    if (savedLite !== null) {
      setLiteModeState(savedLite === 'true');
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('pih_language', lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'ur' ? 'ur' : 'en';
      document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';
    }
  };

  const setFontSize = (size: FontSize) => {
    setFontSizeState(size);
    localStorage.setItem('pih_fontsize', size);
  };

  const setLiteMode = (enabled: boolean) => {
    setLiteModeState(enabled);
    localStorage.setItem('pih_litemode', String(enabled));
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language === 'ur' ? 'ur' : 'en';
      document.documentElement.dir = language === 'ur' ? 'rtl' : 'ltr';
      
      // Update body class for font size
      document.body.classList.remove('font-size-sm', 'font-size-md', 'font-size-lg');
      document.body.classList.add(`font-size-${fontSize}`);

      // Update body class for lite mode
      if (liteMode) {
        document.body.classList.add('lite-mode-enabled');
      } else {
        document.body.classList.remove('lite-mode-enabled');
      }
    }
  }, [language, fontSize, liteMode]);

  const dir = language === 'ur' ? 'rtl' : 'ltr';

  const t = (enText: string, urText?: string, romanText?: string) => {
    if (language === 'ur' && urText) {
      return urText;
    }
    if (language === 'roman') {
      return romanText || getRomanFallback(enText, urText);
    }
    return enText;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        fontSize,
        setFontSize,
        liteMode,
        setLiteMode,
        dir,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: 'en' as Language,
      setLanguage: () => {},
      fontSize: 'md' as FontSize,
      setFontSize: () => {},
      liteMode: false,
      setLiteMode: () => {},
      dir: 'ltr' as 'ltr' | 'rtl',
      t: (enText: string, urText?: string) => enText || urText || '',
    };
  }
  return context;
};
