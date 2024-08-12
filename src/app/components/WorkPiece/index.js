import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

import { urlFor } from '@/sanity/lib/image';

export default function WorkPiece({ title, desc, hrefSite, slug, img }) {
  console.log({ img });
  return (
    <div
      className={clsx(
        'grid gap-y-8 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-28 lg:items-center',
      )}
    >
      <div className={clsx('rounded-2xl shadow-lg overflow-hidden')}>
        <a href="https://jfcm.ca">
          <Image
            src={urlFor(img?.asset?._ref).width(500).height(300).url()}
            sizes="100vw"
            width="500"
            height="300"
            alt={img.alt}
            className={clsx('w-full h-auto')}
          />
        </a>
      </div>
      <div className={clsx('flex flex-col gap-y-6 max-w-xl')}>
        <strong className={clsx('font-bold text-2xl')}>{title}</strong>
        <PortableText value={desc} />
        <div className={clsx('flex gap-x-2')}>
          <a
            className={clsx(
              'font-bold bg-primary text-white border border-primary py-2 px-4 hover:bg-white hover:text-primary transition-all duration-100 rounded-xl',
            )}
            href={hrefSite}
          >
            View Live Site
          </a>
          <Link
            className={clsx('py-2 px-4 hover:text-primary')}
            href={`/work/${slug}`}
          >
            See project details
          </Link>
        </div>
      </div>
    </div>
  );
}
