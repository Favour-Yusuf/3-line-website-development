import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'pressArticle',
  title: 'Press Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: Rule => Rule.required().max(200),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'source',
      title: 'News Source',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Source Name',
          type: 'string',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'logo',
          title: 'Source Logo',
          type: 'image',
          options: { hotspot: false },
          validation: Rule => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        defineArrayMember({ type: 'block' }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
        }),
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Article',
      type: 'boolean',
      description: 'Should this appear in the featured section?',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      source: 'source.name',
    },
    prepare(selection) {
      const { source } = selection
      return {
        ...selection,
        subtitle: source ? `Source: ${source}` : 'No source',
      }
    },
  },
})
