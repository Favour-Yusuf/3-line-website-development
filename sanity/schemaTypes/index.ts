import { type SchemaTypeDefinition } from 'sanity'
import caseStudy from './casestudy'
import { post } from './blog'
import { category } from './blog'
import { author } from './blog'
import pressArticle from './pressArticle'
import teamMember from './teamMember'
import jobOpening from './jobOpening'
import smesPage from './smesPage'
import smeProduct from './smeProduct'
import enterprisePage from './enterprisePage'
import enterpriseProduct from './enterpriseProduct'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [caseStudy, post, category, author, pressArticle, teamMember, jobOpening, smesPage, smeProduct, enterprisePage, enterpriseProduct],

}
