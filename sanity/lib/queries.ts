// lib/queries.ts
import { groq } from 'next-sanity'
import { publicClient } from './publicClient';

export const pressArticlesQuery = `
*[_type == "pressArticle"] | order(publishedAt desc) {
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  source {
    name,
    logo
  },
  isFeatured
}
`;

export const pressArticleBySlugQuery = `
  *[_type == "pressArticle" && slug.current == $slug][0]{
    title,
    excerpt,
    mainImage,
    publishedAt,
    source{
      name,
      logo
    },
    body, // optional if you plan to add a rich text field
    "slug": slug.current
  }
`;



// sanity/lib/queries.ts
export const smesPageQuery = `*[_type == "smesPage"][0]{
  products[] {
    _key,
    title,
    tagline,
    description,
    ctaText,
    ctaLink,
    features[]{_key, title, description},
    whoItsFor[]{ text, icon{ asset-> } },
    image{ asset->, alt },
    featuresSpanTwo
  }
}`


// sanity/lib/queries.ts
export const enterprisePageQuery = `*[_type == "enterprisePage"][0]{
  products[] {
    _key,
    title,
    subtitle,
    description,
    ctaText,
    ctaLink,
    features[]{_key, title, description},
    whoItsFor[]{ _key, text, icon },
    featuresSpanTwo
  }
}`


export const statsSectionQuery = `*[_type == "statsSection"][0]{
  stats[] {
    title,
    description,
    blueText
  }
}`;

export const faqQuery = `*[_type == "faqSection"][0]{
  sections[] {
    section,
    items[] {
      question,
      answer
    }
  }
}`;


export const paymentFeaturesQuery = `*[_type == "paymentFeatures"][0]{
  title,
  description,
  features[] {
    title,
    desc
  },
  whoFor[] {
    number,
    desc
  }
}`;

export const contactInfoQuery = `
  *[_type == "contactInfo"][0]{
    email,
    phone,
    address
  }
`;


export async function getPrivacyPolicy() {
  const query = groq`*[_type == "privacyPolicy"][0]{
    title,
    content,
    lastUpdated
  }`
  return await publicClient.fetch(query)
}
