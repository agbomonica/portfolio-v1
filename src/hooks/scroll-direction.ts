'use client';
import { useState, useEffect } from 'react';

import { SCROLL_DOWN, SCROLL_UP } from '@/utils';

type ScrollDirection = 'up' | 'down';

interface ScrollDirectionOptions {
  threshold?: number;
  initialDirection?: ScrollDirection;
  off?: boolean;
}

const useScrollDirection = ({
  initialDirection = SCROLL_UP,
  threshold = 50,
  off = false,
}: ScrollDirectionOptions = {}) => {
  const [scrollDirection, setScrollDirection] =
    useState<ScrollDirection>(initialDirection);
  const [isWithinThreshold, setIsWithinThreshold] = useState(true);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (Math.abs(currentScrollY - lastScrollY) >= threshold) {
        setScrollDirection(
          currentScrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP
        );
        lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      }

      setIsWithinThreshold(currentScrollY < threshold);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    off
      ? setScrollDirection(initialDirection)
      : window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [initialDirection, threshold, off]);

  return { dir: scrollDirection, isWithinThreshold };
};

export { useScrollDirection };
