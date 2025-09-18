// sanity/schemaTypes/smeProduct.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'smeProduct',
  title: 'SME Product (object)',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }), // e.g. "Launch your agent banking business in 24 hours"
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    // CTA
    defineField({ name: 'ctaText', title: 'CTA Text', type: 'string' }),
    defineField({ name: 'ctaLink', title: 'CTA Link', type: 'url' }),
    // Optional image for the product card
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    }),
    // Features as array of small objects
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        defineField({
          name: 'feature',
          title: 'Feature',
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Feature title', type: 'string' }),
            defineField({ name: 'description', title: 'Feature description', type: 'text' })
          ]
        })
      ]
    }),
    // Optional "who it's for" items (these are optional; hide the whole column if empty)
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
    // Small layout flag for the special Magtipon-like case where features span two cols
    defineField({
      name: 'featuresSpanTwo',
      title: 'Features span two columns?',
      type: 'boolean',
      initialValue: false
    })
  ]
})
