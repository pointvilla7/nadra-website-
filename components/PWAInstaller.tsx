'use client';

import React, { useEffect } from 'react';

export const PWAInstaller: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
          (registration) => {
            console.log('SW registered with scope: ', registration.scope);
          },
          (err) => {
            console.log('SW registration failed: ', err);
          }
        );
      });
    }
  }, []);

  return null;
};
