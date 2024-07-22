import Link from 'next/link';
import clsx from 'clsx';

export default function Button({
  leftIcon,
  children,
  variant = 'secondary',
  href = null,
}) {
  const ButtonElement = href ? Link : 'button';

  return (
    <ButtonElement
      href={href}
      className={clsx('px-5 py-4 font-bold w-full rounded-xl inline-flex gap-4', {
        'text-white bg-primary justify-center': variant === 'primary',
        'text-primary bg-white border border-primary justify-center': variant === 'secondary',
        'text-black border-none py-2 px-0 font-normal': variant === 'iconButton'
      })}
    >
      {leftIcon} {children}
    </ButtonElement>
  );
}
