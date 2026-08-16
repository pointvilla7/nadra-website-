'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function BispCnicCheckPage() {
  const article = ARTICLES['bisp-eligibility-check-by-cnic'];
  return <ArticleLayout article={article} />;
}
