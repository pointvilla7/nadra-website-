import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vehicle Token Tax Check & Calculator 2026: Punjab, Sindh & ICT Rates',
  description: 'Calculate and pay vehicle token tax online for cars and motorcycles in Punjab (ePay), Sindh Excise, and Islamabad. Lifetime token tax rates for under 1000cc engines.',
  openGraph: {
    title: 'Vehicle Token Tax Check & Calculator 2026: Punjab, Sindh & ICT Rates',
    description: 'Calculate and pay vehicle token tax online for cars and motorcycles in Punjab (ePay), Sindh Excise, and Islamabad. Lifetime token tax rates for under 1000cc engines.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/traffic/token-tax-check',
  },
};

export default function Page() {
  const article = ARTICLES['token-tax-check'];
  return <ArticleLayout article={article} />;
}

