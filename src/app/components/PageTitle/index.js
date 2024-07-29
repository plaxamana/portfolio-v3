import Image from 'next/image';
import clsx from 'clsx';

import Decorator from '@/app/assets/heading_decorator.svg';

export default function PageTitle({
  title,
  className,
  subheading,
  imgClassName,
  containerClassName,
}) {
  return (
    <div
      className={clsx('flex flex-col items-center sm:py-12', {
        [containerClassName]: containerClassName,
      })}
    >
      <h1
        className={clsx(
          'font-black text-4xl relative inline-block w-auto mb-6 md:text-6xl',
          {
            [className]: className,
          },
        )}
      >
        {title}
        <Image
          className={clsx('absolute -bottom-4 left-0 md:-bottom-10 rotate-3', {
            [imgClassName]: imgClassName,
          })}
          src={Decorator}
          width={360}
          height={20}
          alt="Underline"
        />
      </h1>
      {subheading && (
        <p
          className={clsx(
            'text-center leading-normal text-balance max-w-prose',
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
