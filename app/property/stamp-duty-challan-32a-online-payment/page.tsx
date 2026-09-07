import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "e-Stamping Punjab Challan 32-A Online Payment & Stamp Duty Guide 2026",
  description: "Generate & pay e-Stamp Challan 32-A online in Punjab (estamp.punjab.gov.pk). Learn 1-3% stamp duty rates, inheritance exemptions & PLRA-FBR One-Counter integration.",
  openGraph: {
    title: "e-Stamping Punjab Challan 32-A Online Payment & Stamp Duty Guide 2026",
    description: "Generate & pay e-Stamp Challan 32-A online in Punjab (estamp.punjab.gov.pk). Learn 1-3% stamp duty rates, inheritance exemptions & PLRA-FBR One-Counter integration.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/property/stamp-duty-challan-32a-online-payment',
  },
};

export default function Page() {
  const article = ARTICLES['stamp-duty-challan-32a-online-payment'];
  return <ArticleLayout article={article} />;
}
