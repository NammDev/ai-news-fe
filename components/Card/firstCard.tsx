import Link from 'next/link'
import { Media } from '../Media'
import { BlogCardProps } from './contentMediaCard'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

export const FirstCard: React.FC<BlogCardProps> = (props) => {
  const { createdAt, href, media, title, excerpt, author, category } = props
  return (
    <article className='relative lg:sticky lg:top-8 lg:w-1/2'>
      <div>
        <Link className='block' href={href}>
          <Media
            className='object-cover overflow-hidden text-transparent rounded-2xl aspect-video'
            resource={media}
          ></Media>
        </Link>
        <div className='mt-6 md:align-middle'>
          <a
            className='p-1 text-xs font-medium tracking-widest text-white uppercase duration-300 ease-in-out bg-red-500 rounded-sm hover:bg-red-300'
            href='/fbs/pac-12'
          >
            {category}
          </a>
          <div className='block mt-3'>
            <h1 className='text-3xl font-medium tracking-normal transition duration-300 ease-in-out font-cal text-slate-900 md:tracking-tight lg:text-4xl lg:leading-tight'>
              <Link href={href}>{title}</Link>
            </h1>
            <div>
              <p className='mt-4 text-base leading-8'>{excerpt}</p>
            </div>
          </div>
          <div className='flex items-center mt-4 sm:mt-8'>
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
            <div className='ml-3'>
              <a className='text-sm font-medium' href='/authors/luke-miller'>
                {author.name}
              </a>
              <p className='text-xs'>
                <time dateTime='2023-06-08T02:40:51.827Z'>{formatDate(createdAt)}</time>
                <span aria-hidden='true'> · </span>
                <span>13 min read</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
