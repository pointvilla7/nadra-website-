'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function GovtJobsPage() {
  const article = ARTICLES['latest-govt-jobs-pakistan'];
  return <ArticleLayout article={article} />;
}
