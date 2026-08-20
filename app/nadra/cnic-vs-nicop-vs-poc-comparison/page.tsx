import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CNIC vs NICOP vs POC: Differences, Fees & Eligibility Explained (2026)",
  description: "Compare NADRA CNIC vs NICOP vs POC in 2026. Differences in eligibility, fees (Zone A & B), dual citizenship rules, visa-free travel & property ownership rights.",
  openGraph: {
    title: "CNIC vs NICOP vs POC: Differences, Fees & Eligibility Explained (2026)",
    description: "Compare NADRA CNIC vs NICOP vs POC in 2026. Differences in eligibility, fees (Zone A & B), dual citizenship rules, visa-free travel & property ownership rights.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/nadra/cnic-vs-nicop-vs-poc-comparison',
  },
};

export default function Page() {
  const article = ARTICLES['cnic-vs-nicop-vs-poc-comparison'];
  return <ArticleLayout article={article} />;
}
