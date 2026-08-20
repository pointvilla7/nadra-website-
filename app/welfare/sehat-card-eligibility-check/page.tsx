import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sehat Card Eligibility Check 2026: SMS 8500 & Hospital Treatment',
  description: 'Check your Sehat Sahulat Card health insurance coverage by CNIC via SMS 8500. Learn about 1 Million PKR free hospital treatment per family and hospital list.',
  openGraph: {
    title: 'Sehat Card Eligibility Check 2026: SMS 8500 & Hospital Treatment',
    description: 'Check your Sehat Sahulat Card health insurance coverage by CNIC via SMS 8500. Learn about 1 Million PKR free hospital treatment per family and hospital list.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/welfare/sehat-card-eligibility-check',
  },
};

export default function Page() {
  const article = ARTICLES['sehat-card-eligibility-check'];
  return <ArticleLayout article={article} />;
}

