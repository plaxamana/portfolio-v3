import { Inter } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: '%s | Philip Laxamana',
    default: 'Home | Philip Laxamana',
  },
  description:
    'Philip Laxamana is a front-end software engineer with a love for building all things front-end and has a knack for design! :)',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
