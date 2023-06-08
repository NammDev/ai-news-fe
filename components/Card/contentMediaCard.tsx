import * as React from 'react'
import { Author, Media as MediaType } from '@/@types/payload'
import { formatDate } from '@/lib/utils'
import { Media } from '../Media'
import Image from 'next/image'

export interface SharedProps {
  title?: string
  description?: string
  className?: string
}

export interface BlogCardProps extends SharedProps {
  media: MediaType
  href: string
  excerpt: string
  author: Author
  createdAt: string
}

export const ContentMediaCard: React.FC<BlogCardProps> = (props) => {
  const { createdAt, href, media, title, excerpt, author } = props

  return (
    <a className='flex transition duration-300 ease-in-out hover:scale-105' href={href}>
      <article className='flex flex-col overflow-hidden shadow-xl rounded-2xl'>
        <Media
          className='flex-shrink-0 object-cover w-full h-48 text-transparent'
          resource={media}
        />
        {/* width={388} height={192} */}
        <div className='flex flex-col justify-between flex-1 p-6 bg-white'>
          <div className='flex-1'>
            <p className='text-sm font-medium uppercase text-brand-600'>FCS</p>
            <div className='mt-2'>
              <h3 className='text-xl font-semibold font-cal text-slate-900'>{title}</h3>
              <p className='mt-3 text-base text-slate-500'>{excerpt}</p>
            </div>
          </div>
          <div className='flex items-center mt-6'>
            <div className='flex-shrink-0'>
              <div className='w-10 h-10'>
                <span className='sr-only'>{author?.name}</span>
                <Image
                  alt="Michael Terril's avatar"
                  width={80}
                  height={80}
                  decoding='async'
                  data-nimg={1}
                  className='object-cover w-10 h-10 rounded-full'
                  style={{ color: 'transparent' }}
                  sizes='50vw'
                  src='http://localhost:8000/media/348360867-2567049123456744-288-4552-5060-1685945347-400x400.jpg'
                />
              </div>
            </div>
            <div className='ml-3'>
              <p className='text-sm font-medium text-slate-900'>{author.name}</p>
              <div className='flex space-x-1 text-sm text-slate-500'>
                <time dateTime='2023-05-23T00:07:52.122Z'>{formatDate(createdAt)}</time>
                <span aria-hidden='true'>·</span>
                <span>3{/* */} min read</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </a>
  )
}
