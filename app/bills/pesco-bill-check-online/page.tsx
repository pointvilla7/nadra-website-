import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "PESCO Bill Check Online 2026 – KPK Duplicate Electricity Bill | Pakistan Info Hub",
  description: "Perform PESCO bill check online 2026 for Khyber Pakhtunkhwa. Check duplicate bill for Peshawar, Mardan, Swat, Abbottabad, Bannu, Swabi using 14-digit reference number.",
  openGraph: {
    title: "PESCO Bill Check Online 2026 – KPK Duplicate Electricity Bill | Pakistan Info Hub",
    description: "Perform PESCO bill check online 2026 for Khyber Pakhtunkhwa. Check duplicate bill for Peshawar, Mardan, Swat, Abbottabad, Bannu, Swabi using 14-digit reference number.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/pesco-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['pesco-bill-check-online'];
  return <ArticleLayout article={article} />;
}
