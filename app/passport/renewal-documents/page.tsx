import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Required Documents for Passport Renewal in Pakistan (2026 Checklist)",
  description: "Complete document checklist for adult and minor passport renewal in Pakistan. Original CNIC, previous passport copy, fee deposit receipt, and NOC requirements.",
  openGraph: {
    title: "Required Documents for Passport Renewal in Pakistan (2026 Checklist)",
    description: "Complete document checklist for adult and minor passport renewal in Pakistan. Original CNIC, previous passport copy, fee deposit receipt, and NOC requirements.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/passport/renewal-documents',
  },
};

export default function Page() {
  const article = ARTICLES['renewal-documents'];
  return <ArticleLayout article={article} />;
}

