import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SSGC Sui Southern Gas Bill Online Check 2026: Sindh & Balochistan',
  description: 'Check and print SSGC duplicate gas bill online for Karachi, Hyderabad, Quetta, and Sukkur by 10-digit Customer Number. Official SSGC bill portal.',
  openGraph: {
    title: 'SSGC Sui Southern Gas Bill Online Check 2026: Sindh & Balochistan',
    description: 'Check and print SSGC duplicate gas bill online for Karachi, Hyderabad, Quetta, and Sukkur by 10-digit Customer Number. Official SSGC bill portal.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/ssgc-duplicate-bill-check',
  },
};

export default function Page() {
  const article = ARTICLES['ssgc-duplicate-bill-check'];
  return <ArticleLayout article={article} />;
}

