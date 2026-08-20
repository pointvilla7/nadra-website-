import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mandatory Hajj Vaccination (Polio, Meningitis) & Medical Fitness',
  description: 'Complete health requirements for Pakistani pilgrims: Meningococcal Meningitis vaccine, Oral Polio Vaccine (OPV) card, COVID-19 rules, and Haji Camp fitness tests.',
  openGraph: {
    title: 'Mandatory Hajj Vaccination (Polio, Meningitis) & Medical Fitness',
    description: 'Complete health requirements for Pakistani pilgrims: Meningococcal Meningitis vaccine, Oral Polio Vaccine (OPV) card, COVID-19 rules, and Haji Camp fitness tests.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/hajj-umrah/hajj-mandatory-vaccination-medical-fitness',
  },
};

export default function Page() {
  const article = ARTICLES['hajj-mandatory-vaccination-medical-fitness'];
  return <ArticleLayout article={article} />;
}
