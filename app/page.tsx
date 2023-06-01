import { Article, SuccessResponse } from '@/@types/payload'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'

export default async function Home() {
  // const res = await fetch(`http://localhost:8000/api/articles`, { cache: 'no-store' })
  const res = await fetch(`https://ai-news-be-production.up.railway.app/api/articles`, {
    cache: 'no-store',
  })
  const data = (await res.json()) as SuccessResponse<Article>
  console.log(data.totalDocs)
  const articles = data.docs

  return (
    <section className='relative py-12 mx-auto max-w-7xl md:py-16 lg:py-20 lg:px-8'>
      <div className='w-full lg:grid lg:grid-cols-3 lg:gap-8'>
        <div className='col-span-2'>
          <div className='grid max-w-xl gap-6 px-4 mx-auto sm:px-6 md:max-w-3xl md:grid-cols-2 md:px-8 lg:max-w-none lg:px-0'>
            {articles.map((article, index) => {
              return (
                <a
                  key={index}
                  className='flex transition duration-300 ease-in-out hover:scale-105'
                  href='/promotion-for-utm-run-game-coordinatorlinebacker-coach-after-defensive-coordinators-departure'
                >
                  <article className='flex flex-col overflow-hidden shadow-xl rounded-2xl'>
                    <Image
                      alt={article.headlineimage.alt}
                      loading='lazy'
                      width={388}
                      height={192}
                      decoding='async'
                      data-nimg={1}
                      className='flex-shrink-0 object-cover w-full h-48'
                      style={{ color: 'transparent' }}
                      sizes='50vw'
                      src={`/media/${article.headlineimage?.filename}`}
                    />
                    <div className='flex flex-col justify-between flex-1 p-6 bg-white'>
                      <div className='flex-1'>
                        <p className='text-sm font-medium uppercase text-brand-600'>FCS</p>
                        <div className='mt-2'>
                          <h3 className='text-xl font-semibold font-cal text-slate-900'>
                            {article.title}
                          </h3>
                          <p className='mt-3 text-base text-slate-500'>{article.description}</p>
                        </div>
                      </div>
                      <div className='flex items-center mt-6'>
                        <div className='flex-shrink-0'>
                          <div className='w-10 h-10'>
                            <span className='sr-only'>{article.author.name}</span>
                            <Image
                              alt="Michael Terril's avatar"
                              loading='lazy'
                              width={80}
                              height={80}
                              decoding='async'
                              data-nimg={1}
                              className='object-cover w-10 h-10 rounded-full'
                              style={{ color: 'transparent' }}
                              sizes='50vw'
                              src=''
                            />
                          </div>
                        </div>
                        <div className='ml-3'>
                          <p className='text-sm font-medium text-slate-900'>
                            {article.author.name}
                          </p>
                          <div className='flex space-x-1 text-sm text-slate-500'>
                            <time dateTime='2023-05-23T00:07:52.122Z'>
                              {formatDate(article.createdAt)}
                            </time>
                            <span aria-hidden='true'>·</span>
                            <span>3{/* */} min read</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
