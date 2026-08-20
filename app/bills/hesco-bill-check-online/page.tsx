import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "HESCO Bill Online Check 2026 – Hyderabad & Lower Sindh Duplicate Bill | Pakistan Info Hub",
  description: "Check HESCO bill online 2026. Download duplicate electricity bill for Hyderabad, Jamshoro, Thatta, Badin, Mirpurkhas, Nawabshah by 14-digit reference number.",
  openGraph: {
    title: "HESCO Bill Online Check 2026 – Hyderabad & Lower Sindh Duplicate Bill | Pakistan Info Hub",
    description: "Check HESCO bill online 2026. Download duplicate electricity bill for Hyderabad, Jamshoro, Thatta, Badin, Mirpurkhas, Nawabshah by 14-digit reference number.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/hesco-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['hesco-bill-check-online'];
  return <ArticleLayout article={article} />;
}
