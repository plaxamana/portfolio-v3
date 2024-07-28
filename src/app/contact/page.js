import clsx from 'clsx';
import { Section } from '@/app/components/Container';
import PageTitle from '@/app/components/PageTitle';
import ContactForm from '@/app/components/ContactForm';

export default function Page() {
  return (
    <Section className={clsx('min-h-[90vh]')}>
      <div
        className={clsx(
          'relative -z-10 flex flex-col items-center mb-12 md:py-12'
        )}
      >
        <PageTitle
          title="Say Hello"
          subheading="Don't be scared to send a line below! :)"
          containerClassName={clsx('md:gap-y-6')}
        />
      </div>
      <div className={clsx('flex flex-col gap-y-3')}>
        <ContactForm />
      </div>
    </Section>
  );
}
