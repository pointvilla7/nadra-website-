import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sehat Card Hospital List Near Me – Panel Hospitals Directory',
  description: 'Search full list of Sehat Sahulat empaneled hospitals in Lahore, Karachi, Islamabad, Rawalpindi, Peshawar, and Quetta. Find free treatment centers near you.',
  openGraph: {
    title: 'Sehat Card Hospital List Near Me – Panel Hospitals Directory',
    description: 'Search full list of Sehat Sahulat empaneled hospitals in Lahore, Karachi, Islamabad, Rawalpindi, Peshawar, and Quetta. Find free treatment centers near you.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/health/sehat-card-hospital-list-near-me',
  },
};

export default function Page() {
  const article = ARTICLES['sehat-card-hospital-list-near-me'];
  return <ArticleLayout article={article} />;
}
