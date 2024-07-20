import clsx from "clsx"

export default function Button({ children, variant = 'secondary' }) {
  return (
    <button
      className={clsx('px-5 py-4 font-bold w-full rounded-xl', {
        'text-white bg-[#00479F]': variant === 'primary',
        'text-[#00479F] bg-white border border-[#00479F]': variant === 'secondary',
      })}
    >
      {children}
    </button>
  );
}