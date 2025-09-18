// sanity/schemaTypes/smesPage.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'smesPage',
  title: 'SMEs Page',
  type: 'document',
  // it's useful to give this a fixed id in structure.ts (see step 2)
  fields: [
    defineField({
      name: 'products',
      title: 'Products (ordered)',
      type: 'array',
      of: [{ type: 'smeProduct' }]
    })
  ]
})
