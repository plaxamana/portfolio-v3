'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'feather-icons-react';
import clsx from 'clsx';

import MobileLink from '@/app/components/MobileLink';
import { pages } from '@/app/globalvars';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={clsx('px-6 bg-white')}>
      <div className={clsx('relative flex items-center justify-between py-4')}>
        <Link href="/" className="font-bold">
          Philip Laxamana
        </Link>
        <Menu
          className={clsx('cursor-pointer sm:hidden')}
          onClick={() => setIsNavOpen(true)}
        />
        <div className={clsx('text-black hidden sm:flex sm:gap-10')}>
          {pages.map(({ href, to }) => (
            <Link className={clsx('hover:text-[#005FD4]', {
              'text-primary font-bold': pathname === href
            })} key={to} href={href}>
              {to}
            </Link>
          ))}
        </div>
        <div className="absolute w-full h-1 bg-[#00479F] bottom-0 rounded-sm" />
      </div>
      <div
        className={clsx(
          {
            'translate-x-0': isNavOpen,
            'translate-x-full': !isNavOpen,
          },
          'transform duration-300 fixed z-10 top-0 right-0 min-h-screen pt-4 w-64 bg-[#00479F] text-right'
        )}
      >
        <X
          className="w-6 h-6 mb-6 ml-auto mr-6 text-white cursor-pointer"
          onClick={() => setIsNavOpen(!isNavOpen)}
        />
        {pages.map(({ to, href }) => (
          <MobileLink
            href={href}
            to={to}
            key={to}
            closeNav={() => setIsNavOpen(false)}
          />
        ))}
      </div>
    </nav>
  );
}
