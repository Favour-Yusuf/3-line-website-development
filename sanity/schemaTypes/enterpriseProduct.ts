// sanity/schemaTypes/enterpriseProduct.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'enterpriseProduct',
  title: 'Enterprise Product (object)',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    // CTA
    defineField({ name: 'ctaText', title: 'CTA Text', type: 'string' }),
    defineField({ name: 'ctaLink', title: 'CTA Link', type: 'url' }),
    // features
    defineField({
      name: 'features',
      title: 'Key features',
      type: 'array',
      of: [
        defineField({
          name: 'feature',
          title: 'Feature',
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Feature title', type: 'string' }),
            defineField({ name: 'description', title: 'Feature description', type: 'text' }),
          ]
        })
      ]
    }),
    // optional "who it's for"
    defineField({
      name: 'whoItsFor',
      title: "Who it's for (optional)",
      type: 'array',
      of: [
        defineField({
          name: 'whoItem',
          title: 'Who item',
          type: 'object',
          fields: [
            defineField({ name: 'icon', title: 'Icon (image)', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'text', title: 'Text', type: 'text' })
          ]
        })
      ]
    }),
    // when true -> layout like "Magtipon Enterprise" (features span two cols)
    defineField({
      name: 'featuresSpanTwo',
      title: 'Features span two columns?',
      type: 'boolean',
      initialValue: false
    })
  ]
})
