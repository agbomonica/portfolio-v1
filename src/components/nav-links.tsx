'use client';
import type { MouseEvent } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';

import { Button } from './common';
import { navLinks, resumeLink } from '@/utils';

const liVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Stagger each li by 0.2 seconds
      duration: 0.5,
    },
  }),
};

const NavLinks = () => {
  const handleSmoothScroll = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(href.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.focus();
    }
  };

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-6">
        {navLinks.map((link, i) => (
          <motion.li
            key={link.name}
            initial="hidden"
            animate="visible"
            variants={liVariants}
            custom={i} // Pass the index to stagger the delay
          >
            <Link
              href={link.href}
              className="text-sm hover:text-secondary active:text-secondary"
              onClick={(e) => handleSmoothScroll(e, link.href)}
            >
              {link.name}
            </Link>
          </motion.li>
        ))}
        <motion.li
          variants={liVariants}
          initial="hidden"
          animate="visible"
          custom={navLinks.length}
        >
          <Button asChild>
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </motion.li>
      </ul>
    </nav>
  );
};

export { NavLinks };
