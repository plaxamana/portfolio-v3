import clsx from 'clsx';
import { Section } from '@/app/components/Container';
import PageTitle from '@/app/components/PageTitle';
import WorkPiece from '@/app/components/WorkPiece';

export default function Page() {
  return (
    <Section>
      <PageTitle
        title="Work"
        containerClassName={clsx('gap-y-4')}
        imgClassName={clsx('md:-bottom-4')}
        subheading="Client projects and professional work featured below are designed and developed by yours truly."
      />
      <Section className={clsx('flex flex-col gap-y-6 items-center sm:gap-y-10')}>
        <WorkPiece
          title="Jesus First Christian Ministries"
          desc="A church website for Jesus First Christian Ministries (JFCM) Mississauga.  This acts as a central hub to find more information about the church such as service time, location, beliefs and contact information."
          hrefSite="#"
        />
        <WorkPiece
          title="Jesus First Christian Ministries"
          desc="A church website for Jesus First Christian Ministries (JFCM) Mississauga.  This acts as a central hub to find more information about the church such as service time, location, beliefs and contact information."
          hrefSite="#"
        />
        <WorkPiece
          title="Jesus First Christian Ministries"
          desc="A church website for Jesus First Christian Ministries (JFCM) Mississauga.  This acts as a central hub to find more information about the church such as service time, location, beliefs and contact information."
          hrefSite="#"
        />
      </Section>
    </Section>
  );
}
