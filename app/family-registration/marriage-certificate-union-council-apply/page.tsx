import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Union Council Marriage Certificate (MRC) Online Apply Guide",
  description: "Apply for a NADRA computerized Marriage Registration Certificate (MRC) from Union Council for passport update, spousal visa, and family registration.",
  openGraph: {
    title: "Union Council Marriage Certificate (MRC) Online Apply Guide",
    description: "Apply for a NADRA computerized Marriage Registration Certificate (MRC) from Union Council for passport update, spousal visa, and family registration.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/family-registration/marriage-certificate-union-council-apply',
  },
};

export default function Page() {
  const article = ARTICLES['marriage-certificate-union-council-apply'];
  return <ArticleLayout article={article} />;
}
