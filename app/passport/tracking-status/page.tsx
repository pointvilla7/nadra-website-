'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function PassportTrackingPage() {
  const article = ARTICLES['tracking-status'];
  return <ArticleLayout article={article} />;
}
