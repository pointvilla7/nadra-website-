import React from 'react';
import type { Metadata } from 'next';
import { SitemapClient } from '@/components/SitemapClient';

export const metadata: Metadata = {
  title: 'HTML Sitemap – Complete Civic Directory & Verification Links | Pakistan Info Hub',
  description: 'Access our complete visual index of Pakistan Info Hub. Find direct application checkers, token tax calculators, and step-by-step government guidelines organized by categories.',
  openGraph: {
    title: 'HTML Sitemap – Complete Civic Directory & Verification Links | Pakistan Info Hub',
    description: 'Access our complete visual index of Pakistan Info Hub. Find direct application checkers, token tax calculators, and step-by-step government guidelines organized by categories.',
    url: 'https://www.pakistaninfohub.com/sitemap',
    type: 'website',
  },
};

export default function Page() {
  return <SitemapClient />;
}
