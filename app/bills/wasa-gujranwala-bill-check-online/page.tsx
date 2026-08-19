import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "WASA Gujranwala Bill Check Online 2026: Download Duplicate Water Bill",
  description: "Check and download your WASA Gujranwala duplicate water bill online using 8-digit Consumer ID. Official duplicate bill portal and 1334 helpline.",
  openGraph: {
    title: "WASA Gujranwala Bill Check Online 2026: Download Duplicate Water Bill",
    description: "Check and download your WASA Gujranwala duplicate water bill online using 8-digit Consumer ID. Official duplicate bill portal and 1334 helpline.",
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/bills/wasa-gujranwala-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['wasa-gujranwala-bill-check-online'];
  return <ArticleLayout article={article} />;
}
