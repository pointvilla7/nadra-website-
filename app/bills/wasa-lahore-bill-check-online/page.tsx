import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "WASA Lahore Bill Check Online 2026: Download Duplicate Water Bill PDF",
  description: "Check and download your WASA Lahore duplicate water bill online using 8-digit Account Number. View dues, due dates, and 1334 helpline.",
  openGraph: {
    title: "WASA Lahore Bill Check Online 2026: Download Duplicate Water Bill PDF",
    description: "Check and download your WASA Lahore duplicate water bill online using 8-digit Account Number. View dues, due dates, and 1334 helpline.",
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/bills/wasa-lahore-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['wasa-lahore-bill-check-online'];
  return <ArticleLayout article={article} />;
}
