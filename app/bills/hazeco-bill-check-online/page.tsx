import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "HAZECO Hazara Electric Supply Guide 2026: Billing Status & Outage Helpline",
  description: "Official guide for HAZECO (Hazara Electric Supply Company). Coverage for Abbottabad, Mansehra, Haripur, Battagram, Kohistan, and Torghar with PESCO billing transition.",
  openGraph: {
    title: "HAZECO Hazara Electric Supply Guide 2026: Billing Status & Outage Helpline",
    description: "Official guide for HAZECO (Hazara Electric Supply Company). Coverage for Abbottabad, Mansehra, Haripur, Battagram, Kohistan, and Torghar with PESCO billing transition.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/hazeco-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['hazeco-bill-check-online'];
  return <ArticleLayout article={article} />;
}
