import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import './globals.css';
import { PHProvider } from './providers';
import { Toaster } from 'react-hot-toast';
import clsx from 'clsx';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

import Thumbnail from '@/app/assets/thumbnail.png';

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
});

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: '%s | Philip Laxamana',
    default: 'Home | Philip Laxamana',
  },
  openGraph: {
    images: [Thumbnail],
  },
  description:
    'Philip Laxamana is a front-end software engineer with a love for building all things front-end and has a knack for design! :)',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Toaster />
      <PHProvider>
        <body className={clsx(inter.className)}>
          <PostHogPageView />
          <Navbar />
          {children}
          <Footer />
        </body>
      </PHProvider>
    </html>
  );
}
