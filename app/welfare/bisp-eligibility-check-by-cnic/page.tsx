import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "BISP 8171 Portal 2026: Check Eligibility by CNIC Online & Payment Date | Pakistan Info Hub",
  description: "Check BISP 8171 portal eligibility online 2026 by 13-digit CNIC. View Benazir Kafaalat (PKR 10,500) payment date, Taleemi Wazaif stipend, and NSER survey status.",
  openGraph: {
    title: "BISP 8171 Portal 2026: Check Eligibility by CNIC Online & Payment Date | Pakistan Info Hub",
    description: "Check BISP 8171 portal eligibility online 2026 by 13-digit CNIC. View Benazir Kafaalat (PKR 10,500) payment date, Taleemi Wazaif stipend, and NSER survey status.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/welfare/bisp-eligibility-check-by-cnic',
  },
};

export default function Page() {
  const article = ARTICLES['bisp-eligibility-check-by-cnic'];
  return <ArticleLayout article={article} />;
}
