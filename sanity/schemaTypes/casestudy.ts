const caseStudy = {
    name: 'caseStudy',
    title: 'Case Study',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title', maxLength: 96 },
      },
      {
        name: 'tag',
        title: 'Tag',
        type: 'string',
      },
      {
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
        options: { hotspot: true },
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
      },
      { name: 'category', title: 'Category', type: 'string' },
      { name: 'client', title: 'Client', type: 'string' },
      { name: 'industry', title: 'Industry', type: 'string' },
      { name: 'location', title: 'Location', type: 'string' },
      { name: 'description', title: 'Quote/Description', type: 'text' },
  
      // Content sections
      { name: 'who', title: 'Who is this?', type: 'text' },
      {
        name: 'objectives',
        title: 'Objectives',
        type: 'array',
        of: [{ type: 'string' }],
      },
      { name: 'problem', title: 'Problem', type: 'text' },
      { name: 'approach', title: 'Approach', type: 'text' },
      { name: 'solution', title: 'Solution', type: 'text' },
  
      // Related post
      {
        name: 'relatedPost',
        title: 'Related Post',
        type: 'reference',
        to: [{ type: 'caseStudy' }],
      },

      {
  name: 'clientLogo',
  title: 'Client Logo',
  type: 'image',
  options: { hotspot: true }
},
{
  name: 'lastUpdated',
  title: 'Last Updated',
  type: 'datetime'
},
{
  name: 'quote',
  title: 'Testimonial Quote',
  type: 'object',
  fields: [
    { name: 'text', title: 'Quote Text', type: 'text' },
    { name: 'author', title: 'Author Name', type: 'string' },
    { name: 'position', title: 'Author Position', type: 'string' },
    {
      name: 'authorImage',
      title: 'Author Image',
      type: 'image',
      options: { hotspot: true }
    }
  ]
},
{
  name: 'results',
  title: 'Results',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        { name: 'label', title: 'Label', type: 'string' },
        { name: 'value', title: 'Value', type: 'string' },
        { name: 'description', title: 'Description', type: 'string' }
      ]
    }
  ]
}

      
    ],
  }
  
  export default caseStudy;