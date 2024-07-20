import Link from 'next/link';

const MobileLink = ({ href, to, closeNav }) => {
  return (
    <Link href={href} className="block px-6 py-4 hover:bg-[#3891FF] text-white" onClick={closeNav}>
      {to}
    </Link>
  );
};

export default MobileLink;
