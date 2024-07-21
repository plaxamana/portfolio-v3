import clsx from 'clsx';

import { Twitter, Linkedin, Github } from 'feather-icons-react';

export default function Footer() {
  return (
    <footer className={clsx('space-y-2 bg-primary text-white py-4 px-6 text-center')}>
      <div>Site designed and developed by Philip Laxamana</div>
      <div className={clsx('flex gap-4 justify-center')}>
        <Twitter />
        <Linkedin />
        <Github />
      </div>
    </footer>
  );
}
