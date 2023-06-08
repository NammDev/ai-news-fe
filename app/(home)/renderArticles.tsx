'use client'

import { Article } from '@/@types/payload'
import { ContentMediaCard } from '@/components/Card/contentMediaCard'

export const RenderArticle: React.FC<{ articles: Article[] }> = ({ articles }) => {
  return (
    <section className='relative py-12 mx-auto max-w-7xl md:py-16 lg:py-20 lg:px-8'>
      <div className='w-full lg:grid lg:grid-cols-3 lg:gap-8'>
        <div className='col-span-2'>
          <div className='grid max-w-xl gap-6 px-4 mx-auto sm:px-6 md:max-w-3xl md:grid-cols-2 md:px-8 lg:max-w-none lg:px-0'>
            {articles.map((article, index) => {
              return (
                <ContentMediaCard
                  media={article.preview}
                  key={index}
                  href={article?.slug || ''}
                  excerpt={article?.excerpt}
                  author={article.author}
                  createdAt={article.createdAt}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RenderArticle
