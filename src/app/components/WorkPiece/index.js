import Image from 'next/image';
import clsx from 'clsx';

import JFCM from '@/app/assets/jfcm-home.png';

export default function WorkPiece({ title, desc, hrefSite }) {
  return (
    <div
      className={clsx(
        'grid gap-y-4 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-28 lg:items-center',
      )}
    >
      <div className={clsx('rounded-2xl shadow-lg overflow-hidden')}>
        <Image
          src={JFCM}
          sizes="100vw"
          alt="JFCM Homepage"
          className={clsx('w-full h-auto')}
        />
      </div>
      <div className={clsx('flex flex-col gap-y-4 max-w-xl')}>
        <strong className={clsx('font-bold text-2xl')}>{title}</strong>
        <p>{desc}</p>
        <div className={clsx('flex')}>
          <a className={clsx('font-bold text-primary')} href={hrefSite}>
            View Live Site
          </a>
        </div>
      </div>
    </div>
  );
}
