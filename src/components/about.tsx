'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

import { HeadingH3, HeadingP, HeadingSmall } from './common';
import { srSectionVariants, technologies } from '@/utils';
import imgSrc from '@/assets/images/me.png';

const About = () => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      variants={srSectionVariants}
      className="pb-24"
    >
      <HeadingH3 className="mb-12 text-foreground">
        A little about <span className="text-secondary">me</span>
      </HeadingH3>

      <div className="flex items-start gap-24">
        <div className="group relative flex size-64 rounded-md bg-secondary-1 shadow-lg transition-all duration-100 before:absolute before:left-0 before:top-0 before:block before:size-full before:rounded-md before:bg-primary before:mix-blend-screen after:absolute after:left-4 after:top-4 after:-z-[1] after:block after:size-full after:rounded-md after:border-2 after:border-secondary">
          <Image
            src={imgSrc}
            alt="Monica Agbo's head shot"
            className="object-cover mix-blend-multiply contrast-100 grayscale group-hover:filter-none"
          />
        </div>
        <div>
          <HeadingP className="mb-5 max-w-[600px]">
            I started my career as a Software Engineer in 2018 after a 6 months
            internship program in college, and I have since transitioned to
            Frontend Development. I have had the opportunity to work with
            various technologies, including React, Next.js, and TypeScript. I am
            passionate about building user-friendly and accessible software
            applications. I am also interested in exploring new technologies and
            frameworks to enhance my skills and knowledge. I am a strong
            advocate for clean code and best practices in software development.
            I believe that writing clean and maintainable code is essential for
            the long-term success of any project. I am also a strong believer in
            the importance of collaboration and teamwork in software
            development. I enjoy working with others to solve complex problems
            and create innovative solutions. In my free time, I enjoy reading
            books, listening to music, and exploring new technologies. I am
            always looking for new challenges and opportunities to grow as a
            developer and as a person. I am excited to see where my career will
            take me next and am always open to new opportunities and
            experiences. If you would like to connect with me, please feel free
            to reach out. I am always happy to chat and share ideas.
          </HeadingP>

          <HeadingSmall>
            Here are a few technologies I&apos;ve been recently working with:
          </HeadingSmall>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {technologies.map(({ name, icon: Icon }) => (
              <div key={name} className="flex items-center gap-2">
                <Icon className="text-2xl text-secondary" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export { About };
