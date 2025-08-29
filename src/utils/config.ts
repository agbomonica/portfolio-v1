import { FaXTwitter } from 'react-icons/fa6';
import { LuGithub, LuInstagram, LuLinkedin } from 'react-icons/lu';
import {
  BiLogoReact,
  BiLogoNodejs,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoSass,
  BiLogoGit,
  BiLogoAws,
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

const email = 'agbomonica.am@gmail.com';
const resumeLink =
  'https://drive.google.com/file/d/1Z7kucLr3wFKLVAJkCpyxrN-6-QFEBT0f/view?usp=sharing';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experiences' },
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
  { name: 'AWS', icon: BiLogoAws },
  { name: 'Git', icon: BiLogoGit },
  { name: 'Webpack', icon: SiWebpack },
  { name: 'Testing', icon: SiTestinglibrary },
];

const experiences = {
  'four-core': {
    company: '4core Integrated Services',
    url: 'https://4coretech.com',
    position: 'Senior Frontend Engineer',
    duration: 'May 2023 - Present',
    description: [
      'Collaborate with cross-functional teams to deliver high-quality frontend solutions for different projects.',
      'Implement best practices in frontend development.',
      'Assist in project planning and estimation.',
      'Ensure adherence to coding standards and guidelines.',
      'Participate in code reviews.',
      'Mentor junior developers and interns.',
      'Engage in continuous learning and professional development.',
    ],
  },
  'bit-piler': {
    company: 'Bitpiler Limited',
    url: 'https://bitpiler.com',
    position: 'Intermediate Frontend Engineer',
    duration: 'Jan 2020 - May 2023',
    description: [
      'Developed a responsive back-office dashboard of the organization using React, tailwindCSS & Redux toolkit.',
      'Collaborated with backend developers to integrate RESTful APIs and ensure seamless data flow between frontend and backend systems.',
      'Developed and maintained reusable components to streamline development processes.',
      'Participated in code reviews to ensure code quality and adherence to best practices.',
    ],
  },
  mfedoo: {
    company: 'Mfedoo Nigeria Limited',
    position: 'Junior Frontend Engineer',
    duration: 'May 2019 - Dec 2019',
    description: [
      'Developed an e-commerce and e-health information system using React and SASS.',
      'Collaborated with designers to implement user-friendly interfaces and improve user experience.',
      'Worked closely with the devOps team to ensure deployment and stable release of projects.',
    ],
  },
  naky: {
    company: 'Naky Integrated Solutions',
    position: 'Frontend Instructor',
    duration: 'April 2018 - May 2019',
    description: [
      'Taught core JS concepts and best practices to interns.',
      'Assisted in curriculum development and improvement.',
      'Developed course materials and resources to facilitate learning.',
      'Provided mentorship and guidance to students through pair programming and code reviews.',
    ],
  },
};

const srSectionVariants = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export {
  email,
  resumeLink,
  navLinks,
  socialLinks,
  technologies,
  experiences,
  srSectionVariants,
};
