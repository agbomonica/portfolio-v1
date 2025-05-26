'use client';
import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { clsx } from 'clsx';

import { Button } from './common';
import { navLinks } from '@/utils';

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
  const [activeSection, setActiveSection] = useState<string | null>(null);

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

  const handleActiveSection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleActiveSection, {
      root: null,
      rootMargin: '-50px 0px -50px 0px',
      threshold: 0.2,
    });

    // Observe all sections
    const sections = navLinks.map((link) =>
      document.getElementById(link.href.replace('#', ''))
    );
    sections.forEach((section) => section && observer.observe(section));

    return () => {
      sections.forEach((section) => section && observer.unobserve(section));
    };
  }, []);

  return (
    <nav>
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
              className={clsx(
                'text-sm hover:text-secondary active:text-secondary',
                {
                  'text-secondary':
                    activeSection === link.href.replace('#', ''),
                }
              )}
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
          <Button>Resume</Button>
        </motion.li>
      </ul>
    </nav>
  );
};

export { NavLinks };
