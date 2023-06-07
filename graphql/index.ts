import { Article } from '@/@types/payload'
import { ARTICLE, ARTICLES, ARTICLES_SLUGS } from './articles'

const next = {
  revalidate: 600,
}

export const fetchPosts = async (): Promise<Array<{ slug: string }>> => {
  const { data, errors } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next,
    body: JSON.stringify({
      query: ARTICLES_SLUGS,
    }),
  }).then((res) => res.json())

  if (errors) {
    console.error(JSON.stringify(errors))
    throw new Error()
  }

  return data?.Articles?.docs
}

export const fetchBlogPosts = async (): Promise<Article[]> => {
  const { data } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next,
    body: JSON.stringify({
      query: ARTICLES,
    }),
  }).then((res) => res.json())

  return data?.Articles?.docs
}

export const fetchBlogPost = async (slug: string): Promise<Article> => {
  const { data } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next,
    body: JSON.stringify({
      query: ARTICLE,
      variables: {
        slug,
      },
    }),
  }).then((res) => res.json())

  return data?.Articles?.docs[0]
}
