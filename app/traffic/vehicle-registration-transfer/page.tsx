'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function VehicleTransferPage() {
  const article = ARTICLES['vehicle-registration-transfer'];
  return <ArticleLayout article={article} />;
}
