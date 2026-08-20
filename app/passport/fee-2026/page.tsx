import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pakistan Passport Fee Structure 2026 (Normal, Urgent & e-Passport Rates)",
  description: "Official Pakistani Passport Fee 2026 table for 36-page, 72-page, 100-page booklets (5 and 10 years validity). Includes e-Passport and fast-track processing rates.",
  openGraph: {
    title: "Pakistan Passport Fee Structure 2026 (Normal, Urgent & e-Passport Rates)",
    description: "Official Pakistani Passport Fee 2026 table for 36-page, 72-page, 100-page booklets (5 and 10 years validity). Includes e-Passport and fast-track processing rates.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/passport/fee-2026',
  },
};

export default function Page() {
  const article = ARTICLES['fee-2026'];
  return <ArticleLayout article={article} />;
}

