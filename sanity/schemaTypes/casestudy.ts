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
      }
      
    ],
  }
  
  export default caseStudy;