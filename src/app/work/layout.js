import clsx from 'clsx';
import Container from '@/app/components/Container';

const imageUrl = `${process.env.SITE_URL}/api/og?title=work`;

export const metadata = {
  title: 'Work',
  openGraph: {
    images: [`${imageUrl}`],
  },
};

export default function Layout({ children }) {
  return <Container className={clsx('md:min-h-[90vh]')}>{children}</Container>;
}
