import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AJK Electricity Bill Online Guide 2026: Azad Kashmir Duplicate Bill & Rates",
  description: "Check your AJK Electricity Department bill online. Tariff rates, 14-digit Account Number, Muzaffarabad, Mirpur, Kotli, Rawalakot, and helpline contacts.",
  openGraph: {
    title: "AJK Electricity Bill Online Guide 2026: Azad Kashmir Duplicate Bill & Rates",
    description: "Check your AJK Electricity Department bill online. Tariff rates, 14-digit Account Number, Muzaffarabad, Mirpur, Kotli, Rawalakot, and helpline contacts.",
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/bills/ajk-electric-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['ajk-electric-bill-check-online'];
  return <ArticleLayout article={article} />;
}
