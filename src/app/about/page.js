import Image from 'next/image';
import clsx from 'clsx';
import PageTitle from '@/app/components/PageTitle';
import { Section } from '@/app/components/Container';
import Button from '@/app/components/Button';

import { socials, experience } from '@/app/globalvars';

import PhilipImg from '@/app/assets/philip-small.jpg';
import TicksLeft from '@/app/assets/ticks-left.svg';
import TicksRight from '@/app/assets/ticks-right.svg';
import Crown from '@/app/assets/crown-white.svg';
import YellowBlob from '@/app/assets/yellow_blob.svg';
import Airplane from '@/app/assets/paper_airplane.svg';

const DetailsBlock = ({ title, description, year, isCurrent }) => {
  return (
    <div className={clsx('flex flex-col gap-2 sm:flex-row sm:justify-between')}>
      <div>
        <div className={clsx('font-bold')}>{title}</div>
        <div>{description}</div>
      </div>
      <div
        className={clsx('py-1 px-2 rounded flex self-start', {
          'bg-[#B4D5FC]': isCurrent,
          'bg-[#F6F6F6]': !isCurrent,
        })}
      >
        {year}
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <Section>
      <PageTitle title="About" imgClassName={clsx('md:-bottom-5')} />
      <Section
        className={clsx(
          'lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_160px] lg:gap-x-20',
        )}
      >
        {/** Profile Img */}
        <div className={clsx('flex justify-center mb-16 md:justify-start')}>
          <div className={clsx('relative')}>
            <Image
              className={clsx('absolute -right-10 -top-4 md:hidden')}
              src={TicksRight}
              width={69}
              height={67}
              alt=""
            />
            <Image
              className={clsx('hidden absolute -right-10 -top-4 md:block')}
              src={TicksRight}
              width={130}
              height={126}
              alt=""
            />
            <Image
              className={clsx('hidden absolute -right-10 -top-4 md:block')}
              src={TicksRight}
              width={130}
              height={126}
              alt=""
            />
            <Image
              className={clsx(
                'absolute top-10 right-0 mr-16 z-10 md:top-20 md:right-11 lg:right-24 lg:top-32',
              )}
              src={Crown}
              width={37}
              height={45}
              alt=""
            />
            <Image
              src={PhilipImg}
              width={225}
              height={212}
              alt="Portrait shot of Philip standing cross-armed in front of the Toronto skyline"
              className={clsx('rounded-3xl origin-center rotate-6 md:hidden')}
            />
            <Image
              src={PhilipImg}
              width={308}
              height={274}
              alt="Portrait shot of Philip standing cross-armed in front of the Toronto skyline"
              className={clsx(
                'hidden rounded-3xl origin-center rotate-6 md:block lg:hidden',
              )}
            />
            <Image
              src={PhilipImg}
              width={424}
              height={400}
              alt="Portrait shot of Philip standing cross-armed in front of the Toronto skyline"
              className={clsx(
                'hidden rounded-3xl origin-center rotate-6 lg:block',
              )}
            />
            <Image
              className={clsx('absolute bottom-0 -left-6 lg:left-0 md:hidden')}
              src={TicksLeft}
              width={86}
              height={120}
              alt=""
            />
            <Image
              className={clsx(
                'hidden absolute bottom-0 -left-6 lg:left-0 md:block lg:hidden',
              )}
              src={TicksLeft}
              width={100}
              height={138}
              alt=""
            />
            <Image
              className={clsx('hidden absolute bottom-0 lg:-left-12 lg:block')}
              src={TicksLeft}
              width={162}
              height={226}
              alt=""
            />
          </div>
        </div>
        <div
          className={clsx(
            'space-y-4 mb-6 lg:col-start-1 lg:row-start-1 lg:row-span-2 leading-relaxed',
          )}
        >
          <h2 className={clsx('font-bold text-2xl text-pretty')}>
            I&apos;m Philip Laxamana. Toronto is my hometown where I design
            things and build them into reality.
          </h2>
          <p>
            I&apos;ve been building & designing websites since 2016 and onwards.
            There was something about front-end development that piqued my
            interest. I think it&apos;s the fact that you can take a blueprint
            of something (app or web design) and build it into existence. To me,
            that&apos;s really freakin&apos; awesome! Its the perfect mix of
            problem solving with a mix of ‘art’ into it. I get really passionate
            about building websites or web applications that are both usable and
            aesthetic!
          </p>
          <p>
            Currently, I am supporting front-end devs at my company by building
            and maintaining a React component library. I’ve also had past
            experience building out features as well. Other things I’ve worked
            with is node/express, MongoDB and SQL.
          </p>
          <p>
            On the side, I am working on{' '}
            <a
              className={clsx('text-blue-700')}
              href="https://dinobytemedia.com"
            >
              Dinobyte Media
            </a>
            . Outside of work, I enjoy design, photography, playing the piano,
            watching anime, and sometimes watching kdramas. 😁
          </p>
        </div>
        <div className={clsx('flex flex-col mb-16 lg:mb-0 lg:col-start-2')}>
          {socials.map((social) => {
            return (
              <Button
                key={social.name}
                variant="iconButton"
                href={social.href}
                leftIcon={social.icon}
              >
                follow on {social.name}
              </Button>
            );
          })}
        </div>
      </Section>
      <Section className={clsx('relative lg:grid lg:grid-cols-2 lg:gap-x-16')}>
        <div className={clsx('absolute w-max -top-24 right-0 lg:left-0')}>
          <Image
            className={clsx('w-auto')}
            src={YellowBlob}
            width="auto"
            height={96}
            alt=""
          />
          <Image
            className={clsx('absolute top-0 right-0')}
            src={Airplane}
            width="auto"
            height={78}
            alt=""
          />
        </div>
        <div className={clsx('space-y-8 mb-8')}>
          <h2 className={clsx('font-bold text-2xl')}>Experience</h2>
          <div className={clsx('flex flex-col gap-8')}>
            {experience.map((exp) => (
              <DetailsBlock
                key={exp.company}
                title={exp.title}
                description={exp.company}
                isCurrent={exp.isCurrent}
                year={exp.year}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className={clsx('font-bold text-2xl mb-8')}>Education</h2>
          <DetailsBlock
            title="Software Engineering Technology"
            description="Centennial College"
            isCurrent={false}
            year="2018"
          />
        </div>
      </Section>
    </Section>
  );
}
