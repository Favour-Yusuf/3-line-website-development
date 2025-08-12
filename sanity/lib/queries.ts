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
