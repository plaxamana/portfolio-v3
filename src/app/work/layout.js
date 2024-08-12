import clsx from 'clsx';
import Container from '@/app/components/Container';

export default function Layout({ children }) {
  return <Container className={clsx('md:min-h-[90vh]')}>{children}</Container>;
}
