'use client';
import { motion } from 'motion/react';

import { Tabs, TabsList, TabsTrigger, TabsContent, HeadingH3 } from './common';
import { srSectionVariants } from '@/utils';

const Experiences = () => {
  return (
    <motion.section
      id="experiences"
      initial="hidden"
      whileInView="visible"
      variants={srSectionVariants}
      className="pb-24"
    >
      <HeadingH3 className="mb-12 text-foreground">
        Where I&apos;ve <span className="text-secondary">worked</span>
      </HeadingH3>

      <Tabs defaultValue="four-core">
        <TabsList>
          <TabsTrigger value="four-core">4core Integrated Services</TabsTrigger>
          <TabsTrigger value="bit-piler">Bitpiler Limited</TabsTrigger>
          <TabsTrigger value="mfedoo">Mfedoo Nigeria Limited</TabsTrigger>
          <TabsTrigger value="naky">Naky Integrated Solutions</TabsTrigger>
        </TabsList>

        <TabsContent value="four-core">Four core</TabsContent>
        <TabsContent value="bit-piler">Bitpiler</TabsContent>
        <TabsContent value="mfedoo">Mfedoo</TabsContent>
        <TabsContent value="naky">Naky</TabsContent>
      </Tabs>
    </motion.section>
  );
};

export { Experiences };
