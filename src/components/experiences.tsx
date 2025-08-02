'use client';
import { motion } from 'motion/react';

import { Tabs, TabsList, TabsTrigger, TabsContent, HeadingH3 } from './common';
import { Experience } from './experience';
import { srSectionVariants, experiences } from '@/utils';

const Experiences = () => {
  return (
    <motion.section
      id="experiences"
      initial="hidden"
      whileInView="visible"
      variants={srSectionVariants}
      className="py-24"
    >
      <HeadingH3 className="mb-8 text-foreground md:mb-12">
        Where I&apos;ve <span className="text-secondary">worked</span>
      </HeadingH3>

      <Tabs defaultValue="four-core">
        <TabsList>
          <TabsTrigger value="four-core">4core Integrated Services</TabsTrigger>
          <TabsTrigger value="bit-piler">Bitpiler Limited</TabsTrigger>
          <TabsTrigger value="mfedoo">Mfedoo Nigeria Limited</TabsTrigger>
          <TabsTrigger value="naky">Naky Integrated Solutions</TabsTrigger>
        </TabsList>

        <TabsContent value="four-core">
          <Experience experience={experiences['four-core']} />
        </TabsContent>

        <TabsContent value="bit-piler">
          <Experience experience={experiences['bit-piler']} />
        </TabsContent>

        <TabsContent value="mfedoo">
          <Experience experience={experiences['mfedoo']} />
        </TabsContent>

        <TabsContent value="naky">
          <Experience experience={experiences['naky']} />
        </TabsContent>
      </Tabs>
    </motion.section>
  );
};

export { Experiences };
