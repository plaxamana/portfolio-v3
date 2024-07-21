import Image from 'next/image';
import clsx from 'clsx';

import Decorator from '@/app/assets/heading_decorator.svg';

export default function PageTitle({ children, className }) {
  return (
    <h1
      className={clsx('font-black text-4xl relative inline-block w-auto', {
        [className]: className,
      })}
    >
      {children}
      <Image
        className={clsx('absolute -bottom-4 left-0')}
        src={Decorator}
        width="100%"
        height={20}
        alt="Underline"
      />
    </h1>
  );
}
