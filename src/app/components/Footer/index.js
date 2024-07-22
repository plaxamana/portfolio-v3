import Link from 'next/link';
import clsx from 'clsx';
import { socials } from '@/app/globalvars';

export default function Footer() {
  return (
    <footer
      className={clsx('space-y-2 bg-primary text-white py-4 px-6 text-center text-pretty')}
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
    </footer>
  );
}
