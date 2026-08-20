import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "POC Card Pakistan Apply Online 2026 – NADRA Foreign Spouse Card",
  description: "Apply online for Pakistan Origin Card (POC) 2026 for foreign spouses of Pakistani citizens. Visa-free travel, property purchase rights, and Pak-ID application steps.",
  openGraph: {
    title: "POC Card Pakistan Apply Online 2026 – NADRA Foreign Spouse Card",
    description: "Apply online for Pakistan Origin Card (POC) 2026 for foreign spouses of Pakistani citizens. Visa-free travel, property purchase rights, and Pak-ID application steps.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/overseas/poc-card-pakistan-apply-online',
  },
};

export default function Page() {
  const article = ARTICLES['poc-card-pakistan-apply-online'];
  return <ArticleLayout article={article} />;
}
