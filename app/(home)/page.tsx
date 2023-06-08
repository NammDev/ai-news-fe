import { fetchBlogPosts } from '@/graphql'
import RenderArticle from './renderArticles'
import { Metadata } from 'next'
import { mergeOpenGraph } from '@/seo/openGraph'

export default async function Home() {
  const articles = await fetchBlogPosts()
  return <RenderArticle articles={articles} />
}

export const metadata: Metadata = {
  openGraph: mergeOpenGraph({
    url: '/blog',
  }),
}
