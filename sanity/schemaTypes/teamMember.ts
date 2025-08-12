// schemas/teamMember.js
export default {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'role',
      title: 'Role/Position',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url'
    },
    {
      name: 'memberType',
      title: 'Member Type',
      type: 'string',
      options: {
        list: [
          { title: 'Executive', value: 'executive' },
          { title: 'Team Lead', value: 'lead' }
        ],
        layout: 'radio'
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      validation: (Rule: any) => Rule.min(0).integer()
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
      type: 'memberType'
    },
    prepare(selection: any) {
      const { type } = selection;
      return {
        ...selection,
        subtitle: `${type === 'executive' ? 'Executive: ' : 'Team Lead: '}${selection.subtitle}`
      };
    }
  }
};

