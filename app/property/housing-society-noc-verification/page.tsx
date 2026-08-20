import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Housing Society NOC Verification – LDA, CDA, RDA Approved Schemes",
  description: "Verify approved legal status and NOC of housing societies in Islamabad (CDA), Rawalpindi (RDA), and Lahore (LDA) before buying residential or commercial plots.",
  openGraph: {
    title: "Housing Society NOC Verification – LDA, CDA, RDA Approved Schemes",
    description: "Verify approved legal status and NOC of housing societies in Islamabad (CDA), Rawalpindi (RDA), and Lahore (LDA) before buying residential or commercial plots.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/property/housing-society-noc-verification',
  },
};

export default function Page() {
  const article = ARTICLES['housing-society-noc-verification'];
  return <ArticleLayout article={article} />;
}
