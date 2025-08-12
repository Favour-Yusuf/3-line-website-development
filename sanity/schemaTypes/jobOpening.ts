// schemas/jobOpening.js
export default {
  name: 'jobOpening',
  title: 'Job Opening',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation:( Rule: any )=> Rule.required()
    },
    {
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'Full-time' },
          { title: 'Part-time', value: 'Part-time' },
          { title: 'Contract', value: 'Contract' },
          { title: 'Internship', value: 'Internship' }
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'applyUrl',
      title: 'Apply URL',
      type: 'url'
    },
    {
      name: 'isActive',
      title: 'Active Opening',
      type: 'boolean',
      description: 'Should this job opening be displayed?',
      initialValue: true
    }
  ]
};