import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pakistani Executive Fast Track Passport 24-Hour Delivery Guide 2026',
  description: 'Get a Pakistani passport in 24 hours via DGIP Fast Track counters in Islamabad, Lahore, Karachi & Rawalpindi. Fee table, fast track counters, and rules.',
  openGraph: {
    title: 'Pakistani Executive Fast Track Passport 24-Hour Delivery Guide 2026',
    description: 'Get a Pakistani passport in 24 hours via DGIP Fast Track counters in Islamabad, Lahore, Karachi & Rawalpindi. Fee table, fast track counters, and rules.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/passport/executive-fast-track-passport',
  },
};

export default function Page() {
  const article = ARTICLES['executive-fast-track-passport'];
  return <ArticleLayout article={article} />;
}

