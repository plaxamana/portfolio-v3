import clsx from 'clsx';

export default function BlogPost({ date, title, short }) {
  return (
    <div className={clsx('w-full max-w-xl flex flex-col gap-y-4')}>
      <div className={clsx('flex flex-col gap-y-2')}>
        <strong className={clsx('font-bold text-3xl order-1')}>{title}</strong>
        <div className={clsx('text-xs')}>{date}</div>
      </div>
      <p>{short}</p>
      <a className={clsx('font-bold text-primary')} href="#">
        Read Article
      </a>
    </div>
  );
}
