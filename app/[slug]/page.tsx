import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { fetchArticle, fetchArticles } from '@/restApi'

const Post = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const article = await fetchArticle(slug)

  if (!article) return notFound()

  console.log(article)

  return (
    <div>
      <p>Params: {slug}</p>
      <p>Title: {article.title}</p>
      <p>{article.author.name}</p>
    </div>
  )
}

export default Post

export async function generateStaticParams() {
  const articles = await fetchArticles()
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
