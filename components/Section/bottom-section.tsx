import { Article } from '@/@types/payload'
import { ContentMediaCard } from '../Card/contentMediaCard'
import { FollowSection } from './follow-section'
import { FeatureCard } from '../Card/featureCard'

export const BottomSection: React.FC<{ articles: Article[] }> = ({ articles }) => {
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
                  title={article.title}
                  excerpt={article?.excerpt}
                  author={article.author}
                  createdAt={article.createdAt}
                  category={article.category.name}
                />
              )
            })}
          </div>
        </div>
        <div className='w-full max-w-xl px-4 mx-auto mt-12 space-y-8 sm:mt-16 sm:px-6 md:max-w-3xl md:px-8 lg:col-span-1 lg:mt-0 lg:max-w-none lg:px-0'>
          <div className='w-full p-5 rounded-2xl bg-slate-50 sm:p-8'>
            <h2 className='relative border-b border-slate-300 pb-2 font-cal text-2xl font-medium text-slate-900 before:absolute before:left-0 before:-bottom-[1px] before:h-px before:w-24 before:bg-brand-500'>
              Featured
            </h2>
            <div className='pt-6 space-y-6 sm:space-y-5 lg:space-y-6 xl:space-y-5'>
              {articles.slice(0, 2).map((article, index) => {
                return (
                  <FeatureCard
                    key={index}
                    media={article.preview}
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
          <FollowSection />
        </div>
      </div>
    </section>
  )
}
