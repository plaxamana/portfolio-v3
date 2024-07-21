import Image from 'next/image';
import clsx from 'clsx';
import Button from '@/app/components/Button';

import Decorator from '@/app/assets/heading_decorator.svg';
import HeroImage from '@/app/assets/hero.svg';

export default function Hero() {
  return (
    <div className={clsx('py-32')} id="hero-home">
      <div className={clsx('mb-12')}>
        <span className={clsx('text-lg')}>Hi, I&apos;m Philip</span>
        <h1 className={clsx('text-3xl font-black text-balance')}>
          I create beautiful websites that make the internet look{' '}
          <span className={clsx('relative inline-block w-28 -z-10')}>
            great
            <Image
              className={clsx('absolute -bottom-4 -left-4')}
              src={Decorator}
              width="100%"
              height={20}
              alt="Underline"
            />
          </span>
        </h1>
      </div>
      <div className={clsx('flex flex-col gap-2 mb-12')}>
        <Button variant="primary" href="/contact">
          Contact Me
        </Button>
        <Button href="/work">View My Work</Button>
      </div>
      <Image
        src={HeroImage}
        width="100%"
        height={500}
        alt="An illustration of a man developing software on a desktop computer"
      />
    </div>
  );
}
