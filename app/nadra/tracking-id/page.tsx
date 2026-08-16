'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function NadraTrackingPage() {
  const article = ARTICLES['tracking-id'];
  return <ArticleLayout article={article} />;
}
