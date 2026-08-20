import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Asaan Karobar Scheme 2026: Small Business & Shopkeeper Loan Guide',
  description: 'Asaan Karobar Scheme 2026 rules, microfinance loans for shopkeepers, cottage industry, women entrepreneurs, fee structures, and application portals.',
  openGraph: {
    title: 'Asaan Karobar Scheme 2026: Small Business & Shopkeeper Loan Guide',
    description: 'Asaan Karobar Scheme 2026 rules, microfinance loans for shopkeepers, cottage industry, women entrepreneurs, fee structures, and application portals.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/loans/asaan-karobar-scheme',
  },
};

export default function Page() {
  const article = ARTICLES['asaan-karobar-scheme'];
  return <ArticleLayout article={article} />;
}

