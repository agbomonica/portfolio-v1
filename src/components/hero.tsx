'use client';
import { motion } from 'motion/react';

import {
  Button,
  HeadingH1,
  HeadingH2,
  HeadingP,
  HeadingSmall,
  Socials,
} from './common';
import { email, srSectionVariants } from '@/utils';

const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={srSectionVariants}
      className="grid h-screen items-center"
    >
      <div>
        <div className="mb-14 flex flex-col gap-4">
          <HeadingSmall>👋 Hello there, my name is</HeadingSmall>
          <div>
            <HeadingH1 className="mb-1 text-foreground">
              <span className="text-secondary">Monica</span> Agbo.
            </HeadingH1>
            <HeadingH2>A Senior Frontend Engineer.</HeadingH2>
          </div>
          <HeadingP className="max-w-[44ch]">
            I am very passionate about creating beautiful, user-centered,
            accessible and highly performant front-facing software applications.
          </HeadingP>
        </div>

        <div>
          <Button asChild size="lg" className="mb-6">
            <a href={`mailto:${email}`}>Send me a message</a>
          </Button>
          <Socials />
        </div>
      </div>
    </motion.section>
  );
};

export { Hero };
