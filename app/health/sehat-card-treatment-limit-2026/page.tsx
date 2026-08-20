import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sehat Card Treatment Limit 2026 – PKR 10 Lakh Free Surgeries",
  description: "Detailed breakdown of PKR 1,000,000 annual Sehat Card coverage limit in Pakistan. Covered heart bypass, cancer chemo, dialysis, delivery, and neurosurgery.",
  openGraph: {
    title: "Sehat Card Treatment Limit 2026 – PKR 10 Lakh Free Surgeries",
    description: "Detailed breakdown of PKR 1,000,000 annual Sehat Card coverage limit in Pakistan. Covered heart bypass, cancer chemo, dialysis, delivery, and neurosurgery.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/health/sehat-card-treatment-limit-2026',
  },
};

export default function Page() {
  const article = ARTICLES['sehat-card-treatment-limit-2026'];
  return <ArticleLayout article={article} />;
}
