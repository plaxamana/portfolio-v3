import clsx from 'clsx';
import { Section } from '@/app/components/Container';
import PageTitle from '@/app/components/PageTitle';
import WorkPiece from '@/app/components/WorkPiece';

import { sanityFetch } from '@/sanity/lib/client';
import { WORKS_QUERY } from '@/sanity/lib/queries';

export default async function Page() {
  const works = await sanityFetch({ query: WORKS_QUERY });
  console.log({ works });

  return (
    <Section>
      <PageTitle
        title="Work"
        containerClassName={clsx('gap-y-4')}
        imgClassName={clsx('md:-bottom-4')}
        subheading="Client projects and professional work featured below are designed and developed by yours truly."
      />
      <Section
        className={clsx('flex flex-col gap-y-6 items-center sm:gap-y-10')}
      >
        {works.map((work) => (
          <WorkPiece
            key={work._id}
            title={work.name}
            desc={work.short_description}
            hrefSite={work.href}
            slug={work.slug.current}
            img={work.image}
          />
        ))}
      </Section>
    </Section>
  );
}
