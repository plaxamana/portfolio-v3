import { defineField, defineType } from 'sanity';

export const workType = defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'project_image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      title: 'Link',
      name: 'href',
      type: 'url',
    }),
    defineField({
      name: 'short_description',
      type: 'blockContent',
    }),
    defineField({
      name: 'client_brief',
      type: 'blockContent',
    }),
    defineField({
      name: 'result',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});
