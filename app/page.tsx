import { Post } from '@/@types/payload'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export default async function Home() {
  const res = await fetch(`https://ai-news-be-production.up.railway.app/api/posts`)
  const data = await res.json()
  const posts = data.docs as Post[]

  return (
    <section>
      <h2 className='mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl'>
        More Stories
      </h2>
      <div className='grid grid-cols-1 mb-32 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32'>
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <p>{post.title}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
