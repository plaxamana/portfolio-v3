import Link from 'next/link';
import clsx from 'clsx';

export default function Button({ children, variant = 'secondary', href = null }) {
  const ButtonElement = href ? Link : 'button';

  return (
    <ButtonElement
      href={href}
      className={clsx('px-5 py-4 font-bold w-full rounded-xl', {
        'flex items-center justify-center': href,
        'text-white bg-primary': variant === 'primary',
        'text-primary bg-white border border-primary':
          variant === 'secondary',
      })}
    >
      {children}
    </ButtonElement>
  );
}
