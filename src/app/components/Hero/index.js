import Image from 'next/image';
import clsx from 'clsx';
import Button from '@/app/components/Button';

import Decorator from '@/app/assets/heading_decorator.svg';
import HeroImage from '@/app/assets/hero-large.svg';

export default function Hero() {
  return (
    <div className={clsx('pt-36 pb-24 lg:grid lg:grid-cols-2 lg:items-center')} id="hero-home">
      <div>
        <div className={clsx('text-lg sm:text-center lg:text-left')}>
          Hi, I&apos;m Philip
        </div>
        <h1
          className={clsx(
            'mb-8 sm:mb-4 text-4xl font-black text-balance sm:text-center sm:text-pretty sm:max-w-3xl sm:mx-auto md:text-5xl lg:text-left'
          )}
        >
          I create beautiful websites that make the internet look{' '}
          <span
            className={clsx(
              'sm:-ml-5 inline-block w-28 -z-10 sm:w-auto md:-ml-1'
            )}
          >
            great
            <Image src={Decorator} width="100%" height={20} alt="Underline" />
          </span>
        </h1>
        <div
          className={clsx(
            'flex flex-wrap gap-2 mb-12 sm:flex-row sm:gap-4 sm:justify-center lg:justify-start'
          )}
        >
          <Button variant="primary" href="/contact" className={clsx('sm:w-auto sm:px-10')}>
            Contact Me
          </Button>
          <Button href="/work" className={clsx('sm:w-auto sm:px-10')}>View My Work</Button>
        </div>
      </div>
      <Image
        src={HeroImage}
        width={834}
        height={805}
        alt="An illustration of a man developing software on a desktop computer"
        className={clsx('mx-auto')}
      />
    </div>
  );
}
