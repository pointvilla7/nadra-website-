'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function WAPDAComplaintPage() {
  const article = ARTICLES['wapda-bill-complaint-number'];
  return <ArticleLayout article={article} />;
}
