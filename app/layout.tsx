import React from 'react';
import type { Metadata } from 'next';
import { Public_Sans, Fraunces, IBM_Plex_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { ClientLayout } from '@/components/ClientLayout';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';

// ─── Core fonts: loaded eagerly, display: swap prevents FOIT ───────────────
const sansFont = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
  adjustFontFallback: false,
});

const serifFont = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
  preload: true,
  adjustFontFallback: false,
});

const monoFont = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
  preload: false, // mono only used in badges/labels, not above-fold body text
  adjustFontFallback: false,
});

// ─── NOTE: Noto Nastaliq Urdu is NOT preloaded here. ────────────────────────
// It's large (~1.5MB) and only needed when user switches to Urdu script mode.
// UrduFontLoader component handles dynamic injection client-side.

import { siteConfig } from '@/lib/config/site';

const BASE_URL = siteConfig.url;
const OG_IMAGE = `${BASE_URL}/og-default.jpg`;

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.taglineEn} ${siteConfig.currentYear}`,
  description: siteConfig.descriptionEn,
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.taglineEn} ${siteConfig.currentYear}`,
    description: siteConfig.descriptionEn,
    url: BASE_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.taglineEn} ${siteConfig.currentYear}`,
      },
    ],
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.taglineEn} ${siteConfig.currentYear}`,
    description: siteConfig.descriptionEn,
    images: [OG_IMAGE],
    site: siteConfig.social.twitter,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || 'google0fa1afe950f3fb07',
    other: {
      ...(process.env.NEXT_PUBLIC_BING_VERIFICATION
        ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION }
        : {}),
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable} ${monoFont.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1B2A4A" />

        {/* ── Preconnect to Google Fonts CDN (avoids extra DNS+TCP round-trips) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── DNS prefetch for official Pakistan govt portals users redirect to ── */}
        <link rel="dns-prefetch" href="//id.nadra.gov.pk" />
        <link rel="dns-prefetch" href="//onlinemrp.dgip.gov.pk" />
        <link rel="dns-prefetch" href="//bisp.gov.pk" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
