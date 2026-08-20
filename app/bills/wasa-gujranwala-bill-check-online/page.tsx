import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "WASA Gujranwala Bill Check Online 2026 – GDA Water Duplicate Bill | Pakistan Info Hub",
  description: "WASA Gujranwala bill check online 2026. Check duplicate water and sanitation bill for Gujranwala city using 8-digit consumer number via Punjab WASA.",
  openGraph: {
    title: "WASA Gujranwala Bill Check Online 2026 – GDA Water Duplicate Bill | Pakistan Info Hub",
    description: "WASA Gujranwala bill check online 2026. Check duplicate water and sanitation bill for Gujranwala city using 8-digit consumer number via Punjab WASA.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/wasa-gujranwala-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['wasa-gujranwala-bill-check-online'];
  return <ArticleLayout article={article} />;
}
