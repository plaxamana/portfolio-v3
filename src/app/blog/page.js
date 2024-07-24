import clsx from 'clsx';
import { ContainerY } from '@/app/components/Container';
import PageTitle from '@/app/components/PageTitle';

export default function Page() {
  return (
    <ContainerY>
      <div className={clsx('relative -z-20 flex flex-col items-center mb-12')}>
        <PageTitle title="The Blog" subheading="Thoughts and collection of ideas published to the internet." />
      </div>
    </ContainerY>
  );
}
