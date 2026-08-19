import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property Tax Calculator Pakistan 2026 – Urban Property Slabs',
  description: 'Calculate Punjab and Sindh urban property tax (UIPT) for 5 Marla, 10 Marla, and 1 Kanal houses. Learn annual tax exemptions, commercial rates, and rebate discounts.',
  openGraph: {
    title: 'Property Tax Calculator Pakistan 2026 – Urban Property Slabs',
    description: 'Calculate Punjab and Sindh urban property tax (UIPT) for 5 Marla, 10 Marla, and 1 Kanal houses. Learn annual tax exemptions, commercial rates, and rebate discounts.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/property/property-tax-calculator-pakistan-2026',
  },
};

export default function Page() {
  const article = ARTICLES['property-tax-calculator-pakistan-2026'];
  return <ArticleLayout article={article} />;
}
