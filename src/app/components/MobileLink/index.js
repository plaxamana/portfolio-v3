import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const MobileLink = ({ href, to, closeNav }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        {
          'bg-[#3891FF]': pathname === href,
          'hover:bg-[#005FD4]': pathname !== href,
        },
        `block px-6 py-4  text-white`,
      )}
      onClick={closeNav}
    >
      {to}
    </Link>
  );
};

export default MobileLink;
