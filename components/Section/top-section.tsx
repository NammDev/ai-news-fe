import { Article } from '@/@types/payload'
import { FirstCard } from '../Card/firstCard'
import { RecentCard } from '../Card/recentCard'

export const TopSection: React.FC<{ articles: Article[] }> = ({ articles }) => {
  const firstArticles = articles[0]
  return (
    <section className='py-4 bg-slate-50 sm:py-16 lg:py-20'>
      <div className='max-w-2xl px-4 mx-auto sm:px-6 lg:flex lg:max-w-screen-2xl lg:items-start lg:px-8'>
        <FirstCard
          media={firstArticles.preview}
          href={firstArticles?.slug || ''}
          excerpt={firstArticles?.excerpt}
          author={firstArticles.author}
          createdAt={firstArticles.createdAt}
          title={firstArticles.title}
        />

        <div className='mt-12 sm:mt-16 lg:ml-12 lg:mt-0 lg:w-1/2 xl:ml-16'>
          <h2 className='relative border-b border-slate-300 pb-2 font-cal text-2xl font-medium text-slate-900 before:absolute before:left-0 before:-bottom-[1px] before:h-px before:w-24 before:bg-brand-500'>
            Recent Articles
          </h2>
          <div className='grid divide-y lg:grid-cols-2 lg:gap-5 xl:grid-cols-1'>
            {articles.slice(0, 5).map((article, index) => {
              return (
                <RecentCard
                  media={article.preview}
                  key={index}
                  href={article?.slug || ''}
                  title={article.title}
                  author={article.author}
                  createdAt={article.createdAt}
                  excerpt={article.excerpt}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
