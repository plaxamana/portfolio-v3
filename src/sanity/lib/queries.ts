import { groq } from 'next-sanity';

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`;

export const WORKS_QUERY = groq`*[_type == "work" && defined(slug.current)][0...4]{
  _id, 
  name, 
  slug, 
  href, 
  short_description, 
  image
}`;

export const WORK_QUERY = groq`*[_type == "work" && slug.current == $slug][0]{
  name,
  short_description,
  tags,
  client_brief,
  result,
  href,
  project_image
}`;
