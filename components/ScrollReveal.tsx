'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  staggerIndex?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delayMs = 0,
  staggerIndex,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  // Default to visible so initial SSR paint and mobile LCP are instant
  const [isVisible, setIsVisible] = useState(true);

  // Compute effective delay, capping stagger to max 150ms so last items never lag
  const effectiveDelay = staggerIndex !== undefined 
    ? Math.min(staggerIndex * 35, 150) + delayMs 
    : delayMs;

  useEffect(() => {
    if (typeof window === 'undefined') {
      setIsVisible(true);
      return;
    }

    // Immediately show if user prefers reduced motion or IntersectionObserver unavailable
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    // CRITICAL FIX: Check if element is already in viewport SYNCHRONOUSLY on mount.
    // On mobile (shorter viewport), elements can be well within the viewport already 
    // but the IntersectionObserver fires asynchronously — if there's any delay, the 
    // element stays at opacity-0 for the safety timer duration, which looks broken.
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      const isInViewport = (
        rect.top < viewportHeight + 300 && // extend 300px below viewport
        rect.bottom > -300 && // extend 300px above viewport top
        rect.left < viewportWidth &&
        rect.right > 0
      );
      if (isInViewport) {
        // Small delay so the CSS transition is visible from opacity-0 to opacity-1
        // (if we set immediately, there's no transition at all)
        const initTimer = setTimeout(() => setIsVisible(true), 50 + effectiveDelay);
        return () => clearTimeout(initTimer);
      }
    }

    // Safety fallback: always reveal content after timeout, even if observer fails
    const safetyTimer = setTimeout(() => {
      setIsVisible(true);
    }, 600 + effectiveDelay);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            clearTimeout(safetyTimer);
            if (ref.current) {
              observer.unobserve(ref.current);
            }
          }
        });
      },
      {
        // rootMargin: generous on all sides so elements reveal just before entering view
        rootMargin: '120px 0px 120px 0px',
        threshold: 0,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      clearTimeout(safetyTimer);
      observer.disconnect();
    };
  }, [effectiveDelay]);

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: '260ms',
        transitionDelay: isVisible ? '0ms' : `${effectiveDelay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`transition-[opacity,transform] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[6px]'
      } ${className}`}
    >
      {children}
    </div>
  );
};



