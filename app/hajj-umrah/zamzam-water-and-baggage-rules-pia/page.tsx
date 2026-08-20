import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zamzam Water & Airline Baggage Rules for Hajj & Umrah Pilgrims",
  description: "Baggage allowance and official Zamzam water quota rules for PIA, Saudi Arabian Airlines, Airblue, and Serene Air for returning Hajj and Umrah passengers.",
  openGraph: {
    title: "Zamzam Water & Airline Baggage Rules for Hajj & Umrah Pilgrims",
    description: "Baggage allowance and official Zamzam water quota rules for PIA, Saudi Arabian Airlines, Airblue, and Serene Air for returning Hajj and Umrah passengers.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/hajj-umrah/zamzam-water-and-baggage-rules-pia',
  },
};

export default function Page() {
  const article = ARTICLES['zamzam-water-and-baggage-rules-pia'];
  return <ArticleLayout article={article} />;
}
