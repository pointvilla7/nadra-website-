import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "HAZECO Bill Check Online 2026 – Hazara Division Electricity Bill | Pakistan Info Hub",
  description: "Perform HAZECO bill check online 2026. Download duplicate electricity bill for Abbottabad, Haripur, Mansehra, Battagram, Kohistan with 14-digit reference number.",
  openGraph: {
    title: "HAZECO Bill Check Online 2026 – Hazara Division Electricity Bill | Pakistan Info Hub",
    description: "Perform HAZECO bill check online 2026. Download duplicate electricity bill for Abbottabad, Haripur, Mansehra, Battagram, Kohistan with 14-digit reference number.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/hazeco-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['hazeco-bill-check-online'];
  return <ArticleLayout article={article} />;
}
