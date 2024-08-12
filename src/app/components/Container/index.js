import clsx from 'clsx';

export default function Container({ children, className }) {
  return (
    <div
      role="main"
      className={clsx('px-6 sm:px-8 md:px-12 max-w-screen-xl mx-auto', {
        [className]: className,
      })}
    >
      {children}
    </div>
  );
}

export function Section({ children, className }) {
  return (
    <section className={clsx('py-12 lg:py-16', { [className]: className })}>
      {children}
    </section>
  );
}
