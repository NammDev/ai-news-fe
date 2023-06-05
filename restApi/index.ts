import { Article, SuccessResponse } from '@/@types/payload'
import qs from 'qs'

const next = {
  revalidate: 600,
}

// Get All Articles to display home page
export const fetchArticles = async (): Promise<Article[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/articles`, { cache: 'no-store' })
  const data = await res.json()
  return data?.docs
}

// Get detail of Artciels
export const fetchArticle = async (slug: string): Promise<Article> => {
  const query = {
    slug: {
      equals: slug,
    },
  }
  const stringifiedQuery = qs.stringify(
    {
      where: query,
    },
    { addQueryPrefix: true }
  )
  const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/articles${stringifiedQuery}`, {
    cache: 'no-store',
  })
  const data = await res.json()
  return data?.docs[0]
}
