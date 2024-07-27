import Link from 'next/link';
import clsx from 'clsx';
import { socials } from '@/app/globalvars';

export default function Footer() {
  return (
    <footer className={clsx(' bg-primary text-white py-4 px-6 mt-auto lg:py-8')}>
      <div
        className={clsx(
          'max-w-screen-xl mx-auto flex flex-col gap-2 text-center text-pretty sm:flex-row sm:justify-between'
        )}
      >
        <div>Site designed and developed by Philip Laxamana</div>
        <div className={clsx('flex gap-4 justify-center')}>
          {socials.map((social) => {
            return (
              <Link key={social.name} href={social.href}>
                {social.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
