'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function NTSJobsPage() {
  const article = ARTICLES['nts-jobs-today'];
  return <ArticleLayout article={article} />;
}
