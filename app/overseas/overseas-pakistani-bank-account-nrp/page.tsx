import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Overseas Pakistani Bank Account (Roshan Digital Account NRP Guide)",
  description: "Open a Roshan Digital Account (RDA) online from abroad in 48 hours. Invest in Naya Pakistan Certificates, stock market, and real estate with 0% tax friction.",
  openGraph: {
    title: "Overseas Pakistani Bank Account (Roshan Digital Account NRP Guide)",
    description: "Open a Roshan Digital Account (RDA) online from abroad in 48 hours. Invest in Naya Pakistan Certificates, stock market, and real estate with 0% tax friction.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/overseas/overseas-pakistani-bank-account-nrp',
  },
};

export default function Page() {
  const article = ARTICLES['overseas-pakistani-bank-account-nrp'];
  return <ArticleLayout article={article} />;
}
