import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "KWSC Karachi Water Bill Check Online 2026: Download Duplicate Bill PDF",
  description: "Check and download your KWSC (formerly KWSB) Karachi duplicate water bill online using 10-digit Consumer Number. Official portal links and 1339 helpline.",
  openGraph: {
    title: "KWSC Karachi Water Bill Check Online 2026: Download Duplicate Bill PDF",
    description: "Check and download your KWSC (formerly KWSB) Karachi duplicate water bill online using 10-digit Consumer Number. Official portal links and 1339 helpline.",
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/bills/kwsc-karachi-water-bill-check',
  },
};

export default function Page() {
  const article = ARTICLES['kwsc-karachi-water-bill-check'];
  return <ArticleLayout article={article} />;
}
