import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "WASA Rawalpindi Bill Online 2026: Rawalpindi Water Duplicate Bill & Rates",
  description: "Check WASA Rawalpindi water and sewerage bill online with 10-digit Consumer Number. Official portal links, tariff slabs, and 1334 helpline.",
  openGraph: {
    title: "WASA Rawalpindi Bill Online 2026: Rawalpindi Water Duplicate Bill & Rates",
    description: "Check WASA Rawalpindi water and sewerage bill online with 10-digit Consumer Number. Official portal links, tariff slabs, and 1334 helpline.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/wasa-rawalpindi-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['wasa-rawalpindi-bill-check-online'];
  return <ArticleLayout article={article} />;
}
