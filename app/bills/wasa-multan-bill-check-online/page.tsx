import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "WASA Multan Bill Check Online 2026: Download Duplicate Water Bill PDF",
  description: "Check and download your WASA Multan duplicate water bill online with 8-digit Consumer Number. Official portal links, due dates, and 1334 helpline.",
  openGraph: {
    title: "WASA Multan Bill Check Online 2026: Download Duplicate Water Bill PDF",
    description: "Check and download your WASA Multan duplicate water bill online with 8-digit Consumer Number. Official portal links, due dates, and 1334 helpline.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/wasa-multan-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['wasa-multan-bill-check-online'];
  return <ArticleLayout article={article} />;
}
