import clsx from 'clsx';

export default function Container({ children, className }) {
  return (
    <section className={clsx('px-6 sm:px-8 md:px-12', { [className]: className })}>{children}</section>
  );
}

export function ContainerY({ children, className }) {
  return (
    <div className={clsx('py-12', { [className]: className })}>{children}</div>
  );
}
