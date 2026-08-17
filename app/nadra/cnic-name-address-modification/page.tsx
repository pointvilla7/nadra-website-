import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NADRA CNIC Modification Guide 2026: Name, Address & Marital Status',
  description: 'Update your name, address, or marital status on NADRA Smart CNIC online via Pak-ID. Fee table, mandatory proof documents, and Gazette notification rules.',
  openGraph: {
    title: 'NADRA CNIC Modification Guide 2026: Name, Address & Marital Status',
    description: 'Update your name, address, or marital status on NADRA Smart CNIC online via Pak-ID. Fee table, mandatory proof documents, and Gazette notification rules.',
    url: 'https://pakistaninfohub.com/nadra/cnic-name-address-modification',
  },
};

export default function Page() {
  const article = ARTICLES['cnic-name-address-modification'];
  return <ArticleLayout article={article} />;
}
