import clsx from 'clsx';
import { Section } from '@/app/components/Container';
import PageTitle from '@/app/components/PageTitle';
import BlogPost from '@/app/components/BlogPost';

export default function Page() {
  return (
    <Section>
      <PageTitle
        title="The Blog"
        subheading="Thoughts and collection of ideas published to the internet."
        containerClassName={clsx('gap-y-4 md:gap-y-6')}
        imgClassName={clsx('-bottom-6')}
      />

      <Section className={clsx('flex flex-col gap-y-10 items-center')}>
        <BlogPost
          date="July 3, 2024"
          title="How to Design a Portfolio Website"
          short="Lorem ipsum dolor sit amet consectetur. Sed morbi eleifend tincidunt tincidunt vestibulum interdum sit. 
          Potenti egestas dignissim libero hac senectus commodo dignissim sed vestibulum. 
          Purus suspendisse feugiat elit nibh pharetra. Ut magna nunc erat sed."
        />
        <BlogPost
          date="July 3, 2024"
          title="How to Design a Portfolio Website"
          short="Lorem ipsum dolor sit amet consectetur. Sed morbi eleifend tincidunt tincidunt vestibulum interdum sit. 
          Potenti egestas dignissim libero hac senectus commodo dignissim sed vestibulum. 
          Purus suspendisse feugiat elit nibh pharetra. Ut magna nunc erat sed."
        />
        <BlogPost
          date="July 3, 2024"
          title="How to Design a Portfolio Website"
          short="Lorem ipsum dolor sit amet consectetur. Sed morbi eleifend tincidunt tincidunt vestibulum interdum sit. 
          Potenti egestas dignissim libero hac senectus commodo dignissim sed vestibulum. 
          Purus suspendisse feugiat elit nibh pharetra. Ut magna nunc erat sed."
        />
      </Section>
    </Section>
  );
}
