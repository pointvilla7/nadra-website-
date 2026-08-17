import React from 'react';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Newsreader, IBM_Plex_Mono, Noto_Nastaliq_Urdu } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { ClientLayout } from '@/components/ClientLayout';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
  adjustFontFallback: false,
});

const serifFont = Newsreader({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
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
        {/* GA4 Integration (Renders only if NEXT_PUBLIC_GA_MEASUREMENT_ID is provided) */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `,
            }}
          />
        )}
        {/* Note: File-based HTML verification is active via /google0fa1afe950f3fb07.html. Optional meta tag fallback if NEXT_PUBLIC_GSC_VERIFICATION is provided */}
        {process.env.NEXT_PUBLIC_GSC_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GSC_VERIFICATION} />
        )}
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
