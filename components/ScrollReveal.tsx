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
  const [isVisible, setIsVisible] = useState(false);

  // Compute effective delay, capping stagger to max 200ms so last items never lag
  const effectiveDelay = staggerIndex !== undefined 
    ? Math.min(staggerIndex * 40, 200) + delayMs 
    : delayMs;

  useEffect(() => {
    if (typeof window === 'undefined') {
      setIsVisible(true);
      return;
    }

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    // Safety fallback: reveal content after a short delay so it is never permanently hidden
    const safetyTimer = setTimeout(() => {
      setIsVisible(true);
    }, 350 + effectiveDelay);

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
        rootMargin: '200px 0px 200px 0px',
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
        transitionDuration: '280ms',
        transitionDelay: `${effectiveDelay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: isVisible ? 'auto' : 'transform, opacity',
      }}
      className={`transition-all ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      } ${className}`}
    >
      {children}
    </div>
  );
};


