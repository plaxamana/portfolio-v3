import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { WORKS_QUERY, WORK_QUERY } from '@/sanity/lib/queries';
import { client, sanityFetch } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Section } from '@/app/components/Container';
import PageTitle from '@/app/components/PageTitle';
import Typography from '@/app/components/Typography';

import { PortableText } from '@portabletext/react';

export async function generateStaticParams() {
  const posts = await client.fetch(
    WORKS_QUERY,
    {},
    { perspective: 'published' },
  );

  return posts.map((post) => ({
    slug: post?.slug?.current,
  }));
}

export async function generateMetadata({ params }) {
  const work = await sanityFetch({
    query: WORK_QUERY,
    params,
  });

  const host = process.env.SITE_URL || `localhost:3000`;
  const image = urlFor(work.project_image?.asset?._ref).url();
  const imageUrl = `${host}/api/og?title=${work.name}&route=work`;

  return {
    title: `${work.name} | Philip Laxamana`,
    openGraph: {
      description: `${work.short_description[0].children[0].text}`,
      images: [`${imageUrl}`],
    },
  };
}

export default async function Page({ params }) {
  const work = await sanityFetch({
    query: WORK_QUERY,
    params,
  });

  return (
    <Section
      className={clsx(
        'grid gap-y-8 mx-auto max-w-screen-sm lg:grid-cols-2 lg:mx-0 lg:max-w-full lg:gap-x-12 lg:gap-y-16 lg:py-24',
      )}
    >
      <div className={clsx('self-center')}>
        <Link
          className={clsx('hover:underline text-blue-600 mb-4 inline-block')}
          href="/work"
        >
          &larr; Return to work
        </Link>
        <PageTitle
          title={work.name}
          className={clsx('text-balance')}
          containerClassName={clsx('!items-start sm:!py-0')}
          imgClassName={clsx('hidden')}
        />
        <div className={clsx('prose text-pretty')}>
          <PortableText value={work.short_description} />
        </div>
      </div>
      <Image
        src={urlFor(work.project_image?.asset?._ref)
          .width(450)
          .height(433)
          .url()}
        alt={work.project_image.alt}
        width={450}
        height={433}
      />
      <div className={clsx('flex flex-col gap-y-4 text-balance')}>
        <Typography type="h2">Client Brief</Typography>
        <div className={clsx('prose')}>
          <PortableText
            className={clsx('text-balance')}
            value={work.client_brief}
          />
        </div>
      </div>
      <div className={clsx('flex flex-col gap-y-4 text-balance')}>
        <Typography type="h2">Result</Typography>
        <div className={clsx('prose')}>
          <PortableText value={work.result} />
        </div>
        <a
          className={clsx(
            'font-bold bg-primary text-white border border-primary py-2 px-4 hover:bg-white hover:text-primary transition-all duration-100 rounded-xl inline-block self-start',
          )}
          href={work.href}
        >
          View Live Site
        </a>
      </div>
    </Section>
  );
}
