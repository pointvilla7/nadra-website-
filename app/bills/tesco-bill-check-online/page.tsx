import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TESCO Bill Check Online 2026 – Tribal Districts Duplicate Bill | Pakistan Info Hub",
  description: "TESCO bill check online 2026. Download duplicate electricity bill for Khyber, Bajaur, Mohmand, Kurram, Orakzai, North & South Waziristan using 14-digit reference number.",
  openGraph: {
    title: "TESCO Bill Check Online 2026 – Tribal Districts Duplicate Bill | Pakistan Info Hub",
    description: "TESCO bill check online 2026. Download duplicate electricity bill for Khyber, Bajaur, Mohmand, Kurram, Orakzai, North & South Waziristan using 14-digit reference number.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/tesco-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['tesco-bill-check-online'];
  return <ArticleLayout article={article} />;
}
