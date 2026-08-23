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

import { MobileBottomNav } from '@/components/MobileBottomNav';

export const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    // iOS Safari :active fix — iOS Safari does NOT fire :active CSS states on non-anchor
    // elements (buttons, divs) unless an ancestor has a touchstart listener.
    // This no-op passive listener on document.body is the standard fix, adding < 0.01ms overhead.
    // See: https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#safari_mobile
    const noop = () => {};
    document.body.addEventListener('touchstart', noop, { passive: true });
    return () => {
      document.body.removeEventListener('touchstart', noop);
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
        <AiAssistantWidget />
      </Suspense>
    </LanguageProvider>
  );
};
