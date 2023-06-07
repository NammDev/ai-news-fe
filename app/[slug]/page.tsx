import React from 'react'
import { notFound } from 'next/navigation'
import RichText from '@/components/RichText'
import { fetchBlogPost, fetchPosts } from '@/graphql'

const Post = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const article = await fetchBlogPost(slug)

  if (!article) return notFound()

  return (
    <div>
      <p>Params: {slug}</p>
      <p>Title: {article.title}</p>
      <RichText content={article.content} />
    </div>
  )
}

export default Post

export async function generateStaticParams() {
  const articles = await fetchPosts()
  return articles.map(({ slug }) => ({
    slug,
  }))
}

// export async function generateMetadata({ params: { slug } }): Promise<Metadata> {
//   const page = await fetchBlogPost(slug)

//   const ogImage =
//     typeof page?.meta?.image === 'object' &&
//     page?.meta?.image !== null &&
//     'url' in page?.meta?.image &&
//     `${process.env.NEXT_PUBLIC_CMS_URL}${page.meta.image.url}`

//   return {
//     title: page?.meta?.title,
//     description: page?.meta?.description,
//     openGraph: mergeOpenGraph({
//       url: `/blog/${slug}`,
//       description: page?.meta?.description,
//       images: ogImage
//         ? [
//             {
//               url: ogImage,
//             },
//           ]
//         : undefined,
//     }),
//   }
// }
