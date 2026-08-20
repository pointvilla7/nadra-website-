import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IESCO Bill Check Online 2026 – Download Duplicate Electricity Bill PDF | Pakistan Info Hub",
  description: "Perform IESCO bill check online 2026. Download duplicate electricity bill for Islamabad, Rawalpindi, Attock, Jhelum, Chakwal using 14-digit reference number.",
  openGraph: {
    title: "IESCO Bill Check Online 2026 – Download Duplicate Electricity Bill PDF | Pakistan Info Hub",
    description: "Perform IESCO bill check online 2026. Download duplicate electricity bill for Islamabad, Rawalpindi, Attock, Jhelum, Chakwal using 14-digit reference number.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/iesco-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['iesco-bill-check-online'];
  return <ArticleLayout article={article} />;
}

