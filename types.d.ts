// types.d.ts
export interface Category {
  _id: string;
  _type: 'category';
  name: string;
  colorClass: string;
  pageTitle: string;
  description: string;
}

export interface Author {
  _id: string;
  _type: 'author';
  name: string;
  image: SanityImage;
}

export interface Post {
  _id: string;
  _type: 'post';
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage: SanityImage;
  publishedAt: string;
  author: Author;
  category: Category;
  isFeatured?: boolean;
}

interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}