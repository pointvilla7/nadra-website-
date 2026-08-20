import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "WASA Faisalabad Bill Check Online 2026 – FDA Water Duplicate Bill | Pakistan Info Hub",
  description: "Perform WASA Faisalabad bill check online 2026. Check water & sewerage duplicate bill for Faisalabad using consumer number on official WASA portal.",
  openGraph: {
    title: "WASA Faisalabad Bill Check Online 2026 – FDA Water Duplicate Bill | Pakistan Info Hub",
    description: "Perform WASA Faisalabad bill check online 2026. Check water & sewerage duplicate bill for Faisalabad using consumer number on official WASA portal.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/wasa-faisalabad-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['wasa-faisalabad-bill-check-online'];
  return <ArticleLayout article={article} />;
}
