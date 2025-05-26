import { FaXTwitter } from 'react-icons/fa6';
import { LuGithub, LuInstagram, LuLinkedin } from 'react-icons/lu';
import {
  BiLogoReact,
  BiLogoNodejs,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoSass,
  BiLogoGit,
} from 'react-icons/bi';
import {
  SiRedux,
  SiNextdotjs,
  SiWebpack,
  SiTestinglibrary,
} from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiDocker } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experiences' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    name: 'Github',
    href: 'https://github.com/agbomonica',
    icon: LuGithub,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/agbomonica_',
    icon: LuInstagram,
  },
  {
    name: 'X',
    href: 'https://x.com/agbomonica_',
    icon: FaXTwitter,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/agbomonica',
    icon: LuLinkedin,
  },
];

const technologies = [
  { name: 'HTML5', icon: AiFillHtml5 },
  { name: 'CSS3', icon: DiCss3 },
  { name: 'Sass', icon: BiLogoSass },
  { name: 'TailwindCSS', icon: BiLogoTailwindCss },
  { name: 'Javascript', icon: IoLogoJavascript },
  { name: 'Node.js', icon: BiLogoNodejs },
  { name: 'Typescript', icon: BiLogoTypescript },
  { name: 'React', icon: BiLogoReact },
  { name: 'Docker', icon: DiDocker },
  { name: 'Redux', icon: SiRedux },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Git', icon: BiLogoGit },
  { name: 'Webpack', icon: SiWebpack },
  { name: 'Testing', icon: SiTestinglibrary },
];

const experiences = [
  {
    company: '4core Integrated Services',
    jobTitle: 'Senior Frontend Engineer',
    startDate: '15-05-2023',
    endDate: 'Present',
    responsibilities: [''],
  },
];

const srSectionVariants = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export { navLinks, socialLinks, technologies, experiences, srSectionVariants };
