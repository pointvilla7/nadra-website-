import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TESCO Bill Check Online 2026: Tribal Electric Supply Duplicate Bill PDF",
  description: "Check and download your TESCO duplicate electricity bill online using 14-digit Reference Number. Covers former FATA, Khyber, Bajaur, Kurram, Mohmand, and Waziristan.",
  openGraph: {
    title: "TESCO Bill Check Online 2026: Tribal Electric Supply Duplicate Bill PDF",
    description: "Check and download your TESCO duplicate electricity bill online using 14-digit Reference Number. Covers former FATA, Khyber, Bajaur, Kurram, Mohmand, and Waziristan.",
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/bills/tesco-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['tesco-bill-check-online'];
  return <ArticleLayout article={article} />;
}
