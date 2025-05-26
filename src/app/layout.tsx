import type { Metadata } from 'next';

import { Header, Footer } from '@/components/layouts';
import { bungee, geistSans, geistMono } from '@/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'A portfolio showcasing my skills and work as a Frontend Engineer',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${bungee.variable} ${geistSans.variable} ${geistMono.variable} font-geist-sans antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
