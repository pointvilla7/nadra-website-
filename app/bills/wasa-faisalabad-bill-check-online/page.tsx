import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "WASA Faisalabad Bill Check Online 2026: Download Duplicate Water Bill",
  description: "Check and download your WASA Faisalabad duplicate water bill online using 12-digit Consumer ID. Official portal link, due dates, and 1334 helpline.",
  openGraph: {
    title: "WASA Faisalabad Bill Check Online 2026: Download Duplicate Water Bill",
    description: "Check and download your WASA Faisalabad duplicate water bill online using 12-digit Consumer ID. Official portal link, due dates, and 1334 helpline.",
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/bills/wasa-faisalabad-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['wasa-faisalabad-bill-check-online'];
  return <ArticleLayout article={article} />;
}
