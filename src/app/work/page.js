import clsx from 'clsx';
import { ContainerY } from '@/app/components/Container';
import PageTitle from '@/app/components/PageTitle';

export default function Page() {
  return (
    <ContainerY>
      <div className={clsx('relative -z-20 flex flex-col items-center mb-12 md:py-12')}>
        <PageTitle
          title="Work"
          containerClassName={clsx('gap-y-4')}
          imgClassName={clsx('md:-bottom-4')}
          subheading="Client projects and professional work featured below are designed and developed by yours truly."
        />
      </div>
    </ContainerY>
  );
}
