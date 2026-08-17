'use client';

import React, { useState } from 'react';
import { LanguageProvider } from '@/lib/context/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SearchBar } from '@/components/SearchBar';
import { CookieConsent } from '@/components/CookieConsent';
import { SchemaInjector } from '@/components/SchemaInjector';
import { AiAssistantWidget } from '@/components/AiAssistantWidget';
import { PWAInstaller } from '@/components/PWAInstaller';

import { CategoryPillNav } from '@/components/CategoryPillNav';

export const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <LanguageProvider>
      <SchemaInjector siteSearch />
      <PWAInstaller />
      <Header onOpenSearch={() => setIsSearchOpen(true)} />
      <CategoryPillNav />
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
      <CookieConsent />
      <AiAssistantWidget />
    </LanguageProvider>
  );
};
