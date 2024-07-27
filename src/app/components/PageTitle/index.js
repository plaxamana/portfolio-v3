import Image from 'next/image';
import clsx from 'clsx';

import Decorator from '@/app/assets/heading_decorator.svg';

export default function PageTitle({ title, className, subheading }) {
  return (
    <div className={clsx('flex flex-col items-center')}>
      <h1
        className={clsx('font-black text-4xl relative inline-block w-auto mb-6 md:text-6xl', {
          [className]: className,
        })}
      >
        {title}
        <Image
          className={clsx('absolute -bottom-4 left-0 md:-bottom-6')}
          src={Decorator}
          width={212}
          height={20}
          alt="Underline"
        />
      </h1>
      <p className={clsx('text-center leading-normal text-balance')}>{subheading}</p>
    </div>
  );
}
