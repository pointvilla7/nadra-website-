import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "e-Passport Online Apply Portal 2026: Step-by-Step Registration",
  description: "Learn how to apply for Pakistani passport renewal online via official DGIP portal onlinemrp.dgip.gov.pk. Photo specs, fee PSID, fingerprint form, and tracking.",
  openGraph: {
    title: "e-Passport Online Apply Portal 2026: Step-by-Step Registration",
    description: "Learn how to apply for Pakistani passport renewal online via official DGIP portal onlinemrp.dgip.gov.pk. Photo specs, fee PSID, fingerprint form, and tracking.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/passport/online-apply',
  },
};

export default function Page() {
  const article = ARTICLES['online-apply'];
  return <ArticleLayout article={article} />;
}

