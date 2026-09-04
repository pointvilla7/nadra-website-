import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NADRA CNIC Name Correction & Modification Guide 2026: Name, Address & Marital Status",
  description: "Official guide to NADRA CNIC name correction, spelling changes, address update, or marital status modification on Smart CNIC online via Pak-ID. Fee table, mandatory proof documents, and Gazette notification rules.",
  keywords: [
    "nadra cnic name correction",
    "nadra name change procedure",
    "nadra cnic address modification",
    "cnic marital status change after marriage",
    "pak id modification fee 2026",
    "nadra spelling mistake fix cnic",
  ],
  openGraph: {
    title: "NADRA CNIC Name Correction & Modification Guide 2026: Name, Address & Marital Status",
    description: "Official guide to NADRA CNIC name correction, spelling changes, address update, or marital status modification on Smart CNIC online via Pak-ID.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/nadra/cnic-name-address-modification',
  },
};

export default function Page() {
  const article = ARTICLES['cnic-name-address-modification'];
  return <ArticleLayout article={article} />;
}

