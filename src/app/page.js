import Image from 'next/image';
import clsx from 'clsx';
import Container, { ContainerY } from '@/app/components/Container';
import Hero from '@/app/components/Hero';
import Card from '@/app/components/Card';
import Button from '@/app/components/Button';

import { skillsArr } from '@/app/globalvars';
import Cat from '@/app/assets/hello_cat.svg';

export default function Home() {
  return (
    <Container>
      <Hero />
      <ContainerY>
        <h2 className={clsx('font-bold text-2xl mb-4')}>Things that I do</h2>
        <div className={clsx('flex flex-col gap-14 py-8')}>
          {skillsArr.map(({ id, skill, description, icon }) => (
            <Card
              key={id}
              icon={icon}
              skill={skill}
              description={description}
            />
          ))}
        </div>
      </ContainerY>
      <ContainerY className={clsx('flex flex-col gap-4')}>
        <h2 className={clsx('font-bold text-2xl mb-4')}>
          Want to get in touch?
        </h2>
        <Image
          src={Cat}
          width={884}
          height={312}
          alt="Cat holding the phone with the caller saying 'hello'"
        />
        <Button variant="primary" href="/contact">Say Hello!</Button>
      </ContainerY>
    </Container>
  );
}
