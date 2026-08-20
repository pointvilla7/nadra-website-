import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FESCO Bill Online Check 2026 – Download Duplicate Bill PDF | Pakistan Info Hub",
  description: "Perform FESCO online bill check 2026. Download duplicate electricity bill for Faisalabad, Sargodha, Jhang, Toba Tek Singh & Chiniot using 14-digit reference number.",
  openGraph: {
    title: "FESCO Bill Online Check 2026 – Download Duplicate Bill PDF | Pakistan Info Hub",
    description: "Perform FESCO online bill check 2026. Download duplicate electricity bill for Faisalabad, Sargodha, Jhang, Toba Tek Singh & Chiniot using 14-digit reference number.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/fesco-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['fesco-bill-check-online'];
  return <ArticleLayout article={article} />;
}
