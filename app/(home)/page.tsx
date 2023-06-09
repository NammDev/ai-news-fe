import { fetchBlogPosts } from '@/graphql'
import { Metadata } from 'next'
import { mergeOpenGraph } from '@/seo/openGraph'
import { BottomSection } from '@/components/Section/bottom-section'
import { TopSection } from '@/components/Section/top-section'

export default async function Home() {
  const articles = await fetchBlogPosts()
  return (
    <main>
      <TopSection articles={articles} />
      <BottomSection articles={articles} />
    </main>
  )
}

export const metadata: Metadata = {
  openGraph: mergeOpenGraph({
    url: '/blog',
  }),
}
