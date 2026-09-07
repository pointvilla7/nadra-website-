import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Union Council Marriage Certificate (MRC) Online Apply Guide 2026",
  description: "Apply for a NADRA computerized Marriage Registration Certificate (MRC) from Union Council. QR-code verification for visa/immigration, required documents, and small-town legacy record digitization.",
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/family-registration/marriage-certificate-union-council-apply',
  },
  openGraph: {
    title: "Union Council Marriage Certificate (MRC) Online Apply Guide 2026",
    description: "Apply for a NADRA computerized Marriage Registration Certificate (MRC) from Union Council. QR-code verification for visa/immigration, required documents, and small-town legacy record digitization.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/family-registration/marriage-certificate-union-council-apply',
  },
};

export default function Page() {
  const article = ARTICLES['marriage-certificate-union-council-apply'];
  return <ArticleLayout article={article} />;
}

