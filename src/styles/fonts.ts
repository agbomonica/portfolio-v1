import { Bungee, Inter, Geist, Geist_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
});

const bungee = Bungee({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-bungee',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export { inter, bungee, geistSans, geistMono };
