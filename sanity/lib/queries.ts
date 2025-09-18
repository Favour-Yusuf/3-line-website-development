// lib/queries.ts
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
