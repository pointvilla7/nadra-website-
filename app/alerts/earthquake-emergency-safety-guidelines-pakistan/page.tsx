import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Earthquake Emergency Safety Guidelines & PMD Seismic Alert Hub',
  description: 'Real-time earthquake alerts in Pakistan from the National Seismic Monitoring Centre (NSMC). Emergency safety protocols: Drop, Cover, and Hold On guidelines.',
  openGraph: {
    title: 'Earthquake Emergency Safety Guidelines & PMD Seismic Alert Hub',
    description: 'Real-time earthquake alerts in Pakistan from the National Seismic Monitoring Centre (NSMC). Emergency safety protocols: Drop, Cover, and Hold On guidelines.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/alerts/earthquake-emergency-safety-guidelines-pakistan',
  },
};

export default function Page() {
  const article = ARTICLES['earthquake-emergency-safety-guidelines-pakistan'];
  return <ArticleLayout article={article} />;
}
