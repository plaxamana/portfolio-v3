'use client';

import clsx from 'clsx';
import { Section } from '@/app/components/Container';
import PageTitle from '@/app/components/PageTitle';
import ContactForm from '@/app/components/ContactForm';

export default function Page() {
  return (
    <Section className={clsx('min-h-[90vh]')}>
      <PageTitle
        title="Say Hello"
        subheading="Don't be scared to send a line below! :)"
        containerClassName={clsx('md:gap-y-6 mb-12')}
      />
      <div className={clsx('flex flex-col gap-y-3')}>
        <ContactForm />
      </div>
    </Section>
  );
}
