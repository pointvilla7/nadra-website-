import React from 'react';
import type { Metadata } from 'next';
import { Inter, Fraunces, IBM_Plex_Mono, Noto_Nastaliq_Urdu } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { ClientLayout } from '@/components/ClientLayout';

const sansFont = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  adjustFontFallback: false,
});

const serifFont = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  adjustFontFallback: false,
});

const monoFont = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
  adjustFontFallback: false,
});

const urduFont = Noto_Nastaliq_Urdu({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-urdu',
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'Pakistan Info Hub | Official Civic & Public Services Directory 2026',
  description: 'Verified public information directory for NADRA CNIC, Passports, BISE Education, Utility Bills, Govt Loans, BISP 8171, and Traffic services.',
  metadataBase: new URL('https://pakistaninfohub.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable} ${monoFont.variable} ${urduFont.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1B2A4A" />
        {/* GA4 Integration Placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PLACEHOLDER_ID');
            `,
          }}
        />
        {/* Google Search Console verification meta tag placeholder */}
        <meta name="google-site-verification" content="GSC_VERIFICATION_PLACEHOLDER_TAG" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
