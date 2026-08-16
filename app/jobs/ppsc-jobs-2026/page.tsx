'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function PPSCJobsPage() {
  const article = ARTICLES['ppsc-jobs-2026'];
  return <ArticleLayout article={article} />;
}
