'use client';
import { motion } from 'motion/react';

import { Button, HeadingH3, HeadingP, Socials } from './common';
import { srSectionVariants, email } from '@/utils';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      variants={srSectionVariants}
      className="grid justify-items-center py-24"
    >
      <HeadingH3 className="mb-8 text-foreground md:mb-12">
        Send me a <span className="text-secondary">Message</span>
      </HeadingH3>
      <HeadingP className="mb-4 max-w-[42ch]">
        Do you have a project idea or a role you want to discuss? send me a
        message and I will reply as soon as possible.
      </HeadingP>

      <Socials />

      <Button asChild className="mt-12" size="lg">
        <a href={`mailto:${email}`}>Send a message</a>
      </Button>
    </motion.section>
  );
};

export { Contact };
