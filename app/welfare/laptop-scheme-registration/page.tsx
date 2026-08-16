'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function LaptopSchemePage() {
  const article = ARTICLES['laptop-scheme-registration'];
  return <ArticleLayout article={article} />;
}
