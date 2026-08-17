import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-Challan Check Online 2026: Punjab PSCA & Traffic Fine Lookup',
  description: 'Check and pay traffic E-Challans online in Pakistan. Punjab Safe Cities Authority (echallan.psca.gop.pk), Sindh Traffic, and Islamabad e-Challan payment via JazzCash/ePay.',
  openGraph: {
    title: 'E-Challan Check Online 2026: Punjab PSCA & Traffic Fine Lookup',
    description: 'Check and pay traffic E-Challans online in Pakistan. Punjab Safe Cities Authority (echallan.psca.gop.pk), Sindh Traffic, and Islamabad e-Challan payment via JazzCash/ePay.',
    url: 'https://pakistaninfohub.com/traffic/e-challan-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['e-challan-check-online'];
  return <ArticleLayout article={article} />;
}
