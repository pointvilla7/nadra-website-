import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Islamabad Traffic Police (ICT) E-Challan Check & DLIMS Guide 2026',
  description: 'Check ICT Islamabad e-challan online by vehicle number, ICT Smart Challan payment via JazzCash/1Link, and Islamabad driving license verification.',
  openGraph: {
    title: 'Islamabad Traffic Police (ICT) E-Challan Check & DLIMS Guide 2026',
    description: 'Check ICT Islamabad e-challan online by vehicle number, ICT Smart Challan payment via JazzCash/1Link, and Islamabad driving license verification.',
    url: 'https://pakistaninfohub.com/traffic/islamabad-traffic-police-echallan',
  },
};

export default function Page() {
  const article = ARTICLES['islamabad-traffic-police-echallan'];
  return <ArticleLayout article={article} />;
}
