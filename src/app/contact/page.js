import clsx from 'clsx';
import { ContainerY } from '@/app/components/Container';
import PageTitle from '@/app/components/PageTitle';
import ContactForm from '@/app/components/ContactForm';

export default function Page() {
  return (
    <ContainerY>
      <div className={clsx('relative -z-10 flex flex-col items-center mb-12')}>
        <PageTitle
          title="Say Hello"
          subheading="Don't be scared to send a line below! :)"
        />
      </div>
      <ContactForm />
    </ContainerY>
  );
}
