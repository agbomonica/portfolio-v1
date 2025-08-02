'use client';
import { useState, useEffect, useCallback, useRef } from 'react';

type ScrollDirection = 'up' | 'down';

interface ScrollDirectionOptions {
  threshold?: number;
  initialDirection?: ScrollDirection;
  disabled?: boolean;
}

const useScrollDirection = ({
  initialDirection = 'up',
  threshold = 50,
  disabled = false,
}: ScrollDirectionOptions = {}) => {
  const [scrollDirection, setScrollDirection] =
    useState<ScrollDirection>(initialDirection);
  const [isWithinThreshold, setIsWithinThreshold] = useState(true);

  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);
  const thresholdRef = useRef(threshold);
  const disabledRef = useRef(disabled);

  // Update refs when props change
  useEffect(() => {
    thresholdRef.current = threshold;
    disabledRef.current = disabled;
  }, [threshold, disabled]);

  const updateScroll = useCallback(() => {
    const currentScrollY = window.pageYOffset;
    const lastScrollY = lastScrollYRef.current;
    const currentThreshold = thresholdRef.current;

    if (Math.abs(currentScrollY - lastScrollY) >= currentThreshold) {
      const newDirection: ScrollDirection =
        currentScrollY > lastScrollY ? 'down' : 'up';
      setScrollDirection(newDirection);
      lastScrollYRef.current = Math.max(currentScrollY, 0);
    }

    setIsWithinThreshold(currentScrollY < currentThreshold);
    tickingRef.current = false;
  }, []);

  const handleScroll = useCallback(() => {
    if (disabledRef.current) return;

    if (!tickingRef.current) {
      window.requestAnimationFrame(updateScroll);
      tickingRef.current = true;
    }
  }, [updateScroll]);

  useEffect(() => {
    // Initialize scroll position
    lastScrollYRef.current = window.pageYOffset;

    if (disabled) {
      setScrollDirection(initialDirection);
      return;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, disabled, initialDirection]);

  return {
    direction: scrollDirection,
    isWithinThreshold,
  };
};

export { useScrollDirection };
