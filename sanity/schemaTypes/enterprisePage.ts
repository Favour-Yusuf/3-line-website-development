// sanity/schemaTypes/enterprisePage.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'enterprisePage',
  title: 'Enterprise Page',
  type: 'document',
  fields: [
    defineField({
      name: 'products',
      title: 'Products (ordered)',
      type: 'array',
      of: [{ type: 'enterpriseProduct' }]
    })
  ]
})
