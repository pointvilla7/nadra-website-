'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function SehatCardPage() {
  const article = ARTICLES['sehat-card-eligibility-check'];
  return <ArticleLayout article={article} />;
}
