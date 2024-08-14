import clsx from 'clsx';
import { Section } from '@/app/components/Container';
import PageTitle from '@/app/components/PageTitle';
import BlogPost from '@/app/components/BlogPost';
import Typography from '../components/Typography';

import { sanityFetch } from '@/sanity/lib/client';
import { POSTS_QUERY } from '@/sanity/lib/queries';

export default async function Page() {
  const posts = await sanityFetch({ query: POSTS_QUERY });

  return (
    <Section className={clsx('min-h-screen')}>
      <PageTitle
        title="The Blog"
        subheading="Thoughts and collection of ideas published to the internet."
        containerClassName={clsx('gap-y-4 md:gap-y-6')}
        imgClassName={clsx('-bottom-6')}
      />

      <Section className={clsx('flex flex-col gap-y-10 items-center')}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <BlogPost
              key={post._id}
              title={post.title}
              href={`blog/${post.slug.current}`}
            />
          ))
        ) : (
          <Typography type="h2">Sorry, I have no posts currently :(</Typography>
        )}
      </Section>
    </Section>
  );
}
