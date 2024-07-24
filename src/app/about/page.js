import Image from 'next/image';
import clsx from 'clsx';
import PageTitle from '@/app/components/PageTitle';
import { ContainerY } from '@/app/components/Container';
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
    <div className={clsx('flex flex-col gap-2')}>
      <div className={clsx('font-bold')}>{title}</div>
      <div>{description}</div>
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
    <ContainerY className={clsx('-z-10')}>
      <div className={clsx('relative -z-10')}>
        <div className={clsx('flex justify-center mb-12')}>
          <PageTitle title="About" />
        </div>
        {/** Profile Img */}
        <div className={clsx('flex justify-center mb-16')}>
          <div className={clsx('relative')}>
            <Image
              className={clsx('absolute -right-10 -top-4')}
              src={TicksRight}
              width={80}
              height={80}
              alt=""
            />
            <Image
              className={clsx('absolute top-10 right-0 mr-16 z-10')}
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
              className={clsx('rounded-3xl origin-center rotate-6')}
            />
            <Image
              className={clsx('absolute bottom-0 -left-6')}
              src={TicksLeft}
              width="100%"
              height={120}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={clsx('space-y-4 mb-6')}>
        <h2 className={clsx('font-bold text-2xl text-pretty')}>
          I&apos;m Philip Laxamana. Toronto is my hometown where I design things
          and build them into reality.
        </h2>
        <p>
          I&apos;ve been building & designing websites since 2016 and onwards.
          There was something about front-end development that piqued my
          interest. I think it&apos;s the fact that you can take a blueprint of
          something (app or web design) and build it into existence. To me,
          that&apos;s really freakin&apos; awesome! Its the perfect mix of
          problem solving with a mix of ‘art’ into it. I get really passionate
          about building websites or web applications that are both usable and
          aesthetic!
        </p>
        <p>
          Currently, I work with React building out component libraries. I’ve
          also had past experience building out features as well. Other things
          I’ve worked with is node/express, MongoDB and SQL.
        </p>
        <p>
          Outside of work, I sometimes like to do more learning related to
          design and code. Other times, I&apos;m either working out, catching up
          on a kdrama or spending time with my wife :)
        </p>
      </div>
      <div className={clsx('flex flex-col mb-16')}>
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
      <div className={clsx('relative -z-10')}>
        <div className={clsx('absolute w-max -top-24 right-0')}>
          <Image
            className={clsx('w-auto')}
            src={YellowBlob}
            width={110}
            height={96}
            alt=""
          />
          <Image
            className={clsx('absolute top-0 right-0')}
            src={Airplane}
            width={110}
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
        <h2 className={clsx('font-bold text-2xl mb-8')}>Education</h2>
        <DetailsBlock
          title="Software Engineering Technology"
          description="Centennial College"
          isCurrent={false}
          year="2018"
        />
      </div>
    </ContainerY>
  );
}
