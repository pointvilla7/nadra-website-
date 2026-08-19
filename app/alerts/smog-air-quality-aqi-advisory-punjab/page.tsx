import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smog Air Quality (AQI) Advisory Punjab – Green Lockdown Guidelines',
  description: 'Live Air Quality Index (AQI) tracking for Lahore, Faisalabad, and Gujranwala. Smog season health precautions, school closure guidelines, and odd-even vehicle rules.',
  openGraph: {
    title: 'Smog Air Quality (AQI) Advisory Punjab – Green Lockdown Guidelines',
    description: 'Live Air Quality Index (AQI) tracking for Lahore, Faisalabad, and Gujranwala. Smog season health precautions, school closure guidelines, and odd-even vehicle rules.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/alerts/smog-air-quality-aqi-advisory-punjab',
  },
};

export default function Page() {
  const article = ARTICLES['smog-air-quality-aqi-advisory-punjab'];
  return <ArticleLayout article={article} />;
}
