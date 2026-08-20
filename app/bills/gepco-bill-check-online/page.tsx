import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GEPCO Bill Check Online 2026: Gujranwala Electric Duplicate Bill PDF",
  description: "Check and download your GEPCO duplicate electricity bill online using 14-digit Reference Number. Covers Gujranwala, Sialkot, Gujrat, Hafizabad, Narowal, and Mandi Bahauddin.",
  openGraph: {
    title: "GEPCO Bill Check Online 2026: Gujranwala Electric Duplicate Bill PDF",
    description: "Check and download your GEPCO duplicate electricity bill online using 14-digit Reference Number. Covers Gujranwala, Sialkot, Gujrat, Hafizabad, Narowal, and Mandi Bahauddin.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/gepco-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['gepco-bill-check-online'];
  return <ArticleLayout article={article} />;
}
