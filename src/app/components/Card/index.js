import Image from 'next/image';
import clsx from 'clsx';

export default function Card({ icon, skill, description }) {
  return (
    <div className={clsx('relative flex flex-col gap-4 bg-gray-100 px-6 py-8 rounded-2xl')}>
      <Image className={clsx('absolute top-0 left-0 -mt-6 ml-4')} src={icon} width={42} height={42} alt="" />
      <div className={clsx('font-bold text-lg')}>{skill}</div>
      <div className={clsx('leading-normal')}>{description}</div>
    </div>
  )
}