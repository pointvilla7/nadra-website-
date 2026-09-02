'use client';

import React, { useState, Suspense, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { LanguageProvider } from '@/lib/context/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SchemaInjector } from '@/components/SchemaInjector';
import { CategoryPillNav } from '@/components/CategoryPillNav';

// ── Dynamically imported: none of these are needed for initial paint ──────────

// SearchBar: only rendered when open, no SSR needed
const SearchBar = dynamic(
  () => import('@/components/SearchBar').then((m) => m.SearchBar),
  { ssr: false }
);

// AI Assistant: large widget — defer until after hydration, only when used
const AiAssistantWidget = dynamic(
  () => import('@/components/AiAssistantWidget').then((m) => m.AiAssistantWidget),
  { ssr: false, loading: () => null }
);

// Cookie consent: never needed for initial paint or SSR
const CookieConsent = dynamic(
  () => import('@/components/CookieConsent').then((m) => m.CookieConsent),
  { ssr: false, loading: () => null }
);

// PWA installer: background install prompt, never above-fold
const PWAInstaller = dynamic(
  () => import('@/components/PWAInstaller').then((m) => m.PWAInstaller),
  { ssr: false, loading: () => null }
);

// Urdu font: only loaded when user switches to Urdu/Nastaliq mode
const UrduFontLoader = dynamic(
  () => import('@/components/UrduFontLoader').then((m) => m.UrduFontLoader),
  { ssr: false, loading: () => null }
);

// Newsletter exit & scroll popup with 7-day frequency capping
const NewsletterExitPopup = dynamic(
  () => import('@/components/NewsletterExitPopup').then((m) => m.NewsletterExitPopup),
  { ssr: false, loading: () => null }
);

import { MobileBottomNav } from '@/components/MobileBottomNav';

export const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showDeferredWidgets, setShowDeferredWidgets] = useState(false);

  useEffect(() => {
    // iOS Safari :active fix
    const noop = () => {};
    document.body.addEventListener('touchstart', noop, { passive: true });

    // Defer heavy non-critical background widgets (chat, exit popup) until user interaction
    const enableWidgets = () => {
      setShowDeferredWidgets(true);
      window.removeEventListener('scroll', enableWidgets);
      window.removeEventListener('touchstart', enableWidgets);
      window.removeEventListener('click', enableWidgets);
    };

    window.addEventListener('scroll', enableWidgets, { passive: true, once: true });
    window.addEventListener('touchstart', enableWidgets, { passive: true, once: true });
    window.addEventListener('click', enableWidgets, { passive: true, once: true });

    return () => {
      document.body.removeEventListener('touchstart', noop);
      window.removeEventListener('scroll', enableWidgets);
      window.removeEventListener('touchstart', enableWidgets);
      window.removeEventListener('click', enableWidgets);
    };
  }, []);

  return (
    <LanguageProvider>
      <SchemaInjector siteSearch />
      {/* Urdu font loader — injects Noto Nastaliq stylesheet only when Urdu is active */}
      <UrduFontLoader />
      <PWAInstaller />
      <Header onOpenSearch={() => setIsSearchOpen(true)} />
      <CategoryPillNav />
      {/* SearchBar is client-only and only rendered when isOpen=true */}
      {isSearchOpen && (
        <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      )}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 pb-28 sm:pb-12">
        {children}
      </main>
      <Footer />
      {/* Mobile Sticky Bottom Nav Bar */}
      <MobileBottomNav onOpenSearch={() => setIsSearchOpen(true)} />
      <Suspense fallback={null}>
        <CookieConsent />
        {showDeferredWidgets && (
          <>
            <AiAssistantWidget />
            <NewsletterExitPopup />
          </>
        )}
      </Suspense>
    </LanguageProvider>
  );
};
