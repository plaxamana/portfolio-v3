import Image from 'next/image';
import clsx from 'clsx';
import Container, { Section } from '@/app/components/Container';
import Hero from '@/app/components/Hero';
import Card from '@/app/components/Card';
import Button from '@/app/components/Button';

import { skillsArr } from '@/app/globalvars';
import Cat from '@/app/assets/hello_cat.svg';
import Blob from '@/app/assets/blob-yellow-1.svg';

export default function Home() {
  return (
    <Container>
      <Hero />
      <Section className={clsx('relative')}>
        <Image
          className={clsx('hidden top-0 -left-64 absolute md:block -z-10')}
          src={Blob}
          width={360}
          height={355}
          alt=""
        />
        <h2 className={clsx('font-bold text-2xl mb-4')}>Things that I do</h2>
        <div
          className={clsx(
            'py-16 grid gap-y-16 md:grid-cols-4 md:gap-x-8 lg:grid-cols-3 md:grid-rows-2 lg:grid-rows-1',
          )}
        >
          {skillsArr.map(({ id, skill, description, icon }, index) => (
            <Card
              key={id}
              icon={icon}
              skill={skill}
              description={description}
              className={clsx('md:col-span-2 lg:col-span-1', {
                'md:col-start-2': index === 2,
              })}
            />
          ))}
        </div>
      </Section>
      <Section
        className={clsx(
          'grid gap-y-4 lg:mb-24 lg:grid-cols-3 lg:gap-0 lg:items-start lg:grid-rows-4',
        )}
      >
        <h2 className={clsx('font-bold text-2xl mb-4 lg:mb-0 lg:self-center')}>
          Want to get in touch?
        </h2>
        <Button
          variant="primary"
          href="/contact"
          className={clsx(
            'row-start-3 md:row-start-2 md:max-w-40 lg:row-start-2',
          )}
        >
          Say Hello!
        </Button>
        <Image
          src={Cat}
          width={884}
          height={312}
          alt="Cat holding the phone with the caller saying 'hello'"
          className={clsx('lg:row-span-4 lg:col-span-2')}
        />
      </Section>
    </Container>
  );
}
