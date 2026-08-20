import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "WASA Sahiwal Bill Check Online 2026: Download Duplicate Water Bill",
  description: "Check and download your WASA Sahiwal duplicate water bill online using 8-digit Account Number. Official portal links and 1334 helpline.",
  openGraph: {
    title: "WASA Sahiwal Bill Check Online 2026: Download Duplicate Water Bill",
    description: "Check and download your WASA Sahiwal duplicate water bill online using 8-digit Account Number. Official portal links and 1334 helpline.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/wasa-sahiwal-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['wasa-sahiwal-bill-check-online'];
  return <ArticleLayout article={article} />;
}
