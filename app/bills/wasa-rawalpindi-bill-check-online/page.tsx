import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "WASA Rawalpindi Bill Check Online 2026 – Water & Sanitation Duplicate Bill | Pakistan Info Hub",
  description: "WASA Rawalpindi bill check online 2026. Check duplicate water bill for Rawalpindi & Murree using account number. Online payment through ePay Punjab.",
  openGraph: {
    title: "WASA Rawalpindi Bill Check Online 2026 – Water & Sanitation Duplicate Bill | Pakistan Info Hub",
    description: "WASA Rawalpindi bill check online 2026. Check duplicate water bill for Rawalpindi & Murree using account number. Online payment through ePay Punjab.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/wasa-rawalpindi-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['wasa-rawalpindi-bill-check-online'];
  return <ArticleLayout article={article} />;
}
