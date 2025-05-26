import Link from 'next/link';

import { socialLinks } from '@/utils';

const Socials = () => {
  return (
    <ul className="flex items-center gap-7">
      {socialLinks.map((social) => (
        <li key={social.name}>
          <Link
            href={social.href}
            target="_blank"
            rel="noreferrer"
            title={social.name}
          >
            <social.icon className="size-6 transition-all duration-300 ease-in-out hover:scale-110 hover:text-secondary" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { Socials };
