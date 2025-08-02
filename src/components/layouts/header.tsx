'use client';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';

import { Logo } from '../common';
import { NavLinks } from '../nav-links';
import { useScrollDirection } from '@/hooks';
import { MobileNav } from '../mobile-nav';

// Variants for the header animation
const headerVariants: Variants = {
  initial: {
    y: 0,
    height: 'var(--header-height)',
  },
  scrolledUp: {
    y: 0,
    height: 'var(--header-scroll-height)',
    boxShadow: 'var(--shadow-lg)',
  },
  scrolledDown: {
    y: 'calc(var(--header-scroll-height) * -1)',
    height: 'var(--header-scroll-height)',
    boxShadow: 'var(--shadow-lg)',
  },
};

const Header = () => {
  // Controls header visibility
  const { dir, isWithinThreshold } = useScrollDirection();
  const currentVariant = isWithinThreshold
    ? 'initial'
    : dir === 'up' && !isWithinThreshold
      ? 'scrolledUp'
      : dir === 'down' && !isWithinThreshold
        ? 'scrolledDown'
        : '';

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-20 flex w-full items-center justify-between bg-primary px-10 text-foreground backdrop-blur-md lg:px-16 xl:px-32"
      variants={headerVariants}
      initial="initial"
      animate={currentVariant}
      transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
    >
      <Logo />
      <NavLinks />
      <MobileNav />
    </motion.header>
  );
};

export { Header };
