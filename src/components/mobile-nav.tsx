'use client';
import { MouseEvent, useState } from 'react';
import { motion } from 'motion/react';
import clsx from 'clsx';

import { navLinks } from '@/utils';
import Link from 'next/link';

const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => setOpenNav(!openNav);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
  };

  const handleSmoothScroll = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(href.replace('#', ''));
    if (el) {
      toggleNav();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.focus();
    }
  };

  return (
    <div className="block md:hidden">
      <button className="relative z-40 flex p-3 md:hidden" onClick={toggleNav}>
        <span
          className={clsx(
            'relative inline-block h-0.5 w-7 rounded before:absolute before:right-0 before:h-full before:rounded before:bg-secondary before:transition-transform before:duration-200 after:absolute after:right-0 after:inline-block after:h-full after:rounded after:bg-secondary after:transition-transform after:duration-200',
            {
              'bg-transparent before:top-0 before:w-7 before:rotate-45 after:top-0 after:w-7 after:-rotate-45':
                openNav,
              'bg-secondary before:-top-2 before:w-8 before:rotate-0 after:top-2 after:w-6 after:rotate-0':
                !openNav,
            }
          )}
        >
          &nbsp;
        </span>
      </button>

      <motion.aside
        className="fixed bottom-0 right-0 top-0 z-30 flex h-screen w-full items-center justify-center overflow-hidden bg-primary-1 shadow-lg backdrop-blur-md"
        initial="closed"
        animate={openNav ? 'open' : 'closed'}
        transition={{ duration: 0.1 }}
        variants={variants}
      >
        <nav>
          <ul className="flex h-full flex-col pt-20">
            {navLinks.map((link) => (
              <li key={link.name} className="px-6 py-3">
                <Link
                  href={link.href}
                  className="text-base hover:text-secondary active:text-secondary"
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.aside>
    </div>
  );
};

export { MobileNav };
