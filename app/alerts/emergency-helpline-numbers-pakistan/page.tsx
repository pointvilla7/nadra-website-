import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Emergency Helpline Numbers in Pakistan (Rescue 1122, Edhi 115, 15)',
  description: 'Complete nationwide directory of toll-free emergency phone numbers: Rescue 1122, Police 15, Edhi 115, Motorway Police 1307, Fire Brigade 16, and Child Protection 1121.',
  openGraph: {
    title: 'Emergency Helpline Numbers in Pakistan (Rescue 1122, Edhi 115, 15)',
    description: 'Complete nationwide directory of toll-free emergency phone numbers: Rescue 1122, Police 15, Edhi 115, Motorway Police 1307, Fire Brigade 16, and Child Protection 1121.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/alerts/emergency-helpline-numbers-pakistan',
  },
};

export default function Page() {
  const article = ARTICLES['emergency-helpline-numbers-pakistan'];
  return <ArticleLayout article={article} />;
}
