import { type SchemaTypeDefinition } from 'sanity'
import caseStudy from './casestudy'
import { post } from './blog'
import { category } from './blog'
import { author } from './blog'
import pressArticle from './pressArticle'
import teamMember from './teamMember'
import jobOpening from './jobOpening'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [caseStudy, post, category, author, pressArticle, teamMember, jobOpening],

}
