import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="font-bungee text-lg uppercase md:text-xl">
      monica
      <span className="text-secondary">.</span>
    </Link>
  );
};

export { Logo };
