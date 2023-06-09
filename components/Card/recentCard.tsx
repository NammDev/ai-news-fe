import Link from 'next/link'
import { Media } from '../Media'
import { BlogCardProps } from './contentMediaCard'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

export const RecentCard: React.FC<BlogCardProps> = (props) => {
  const { createdAt, href, media, title, author } = props
  return (
    <article className='py-8'>
      <div className='group md:flex lg:flex-col xl:flex-row xl:items-center'>
        <div className='order-2 w-full md:w-2/5 lg:order-1 lg:w-full xl:w-2/5'>
          <Link className='block aspect-w-16 aspect-h-9' href={href}>
            <Media
              resource={media}
              className='object-cover overflow-hidden text-transparent rounded-2xl'
            />
          </Link>
        </div>
        <div className='order-1 w-full px-2 mt-5 md:mt-0 md:max-w-sm md:pl-0 md:pr-5 lg:order-2 lg:mt-4 xl:ml-5 xl:mt-0 xl:flex-1'>
          <a
            className='p-1 text-xs font-medium tracking-widest text-white uppercase duration-300 ease-in-out bg-red-500 rounded-sm hover:bg-red-300'
            href='/fbs/fbs-independent'
          >
            FBS Independent
          </a>
          <h3 className='=transition mt-2 font-cal text-xl font-medium leading-normal tracking-normal duration-300 ease-in-out'>
            <Link href={href}>{title}</Link>
          </h3>
          <div className='flex items-center justify-between mt-4'>
            <div className='flex items-center justify-center'>
              <Image
                alt="Michael Terril's avatar"
                width={48}
                height={48}
                className='w-6 h-6 mr-3 overflow-hidden rounded-full'
                style={{ color: 'transparent' }}
                src='http://localhost:8000/media/348360867-2567049123456744-288-4552-5060-1685945347-400x400.jpg'
              />
              <div className='text-sm'>
                <span className='text-slate-500'>By </span>
                <a
                  className='font-medium text-slate-700 decoration-inherit'
                  href='/authors/omar-rashon-borja'
                >
                  {author.name}
                </a>
                <span aria-hidden='true'> · </span>
                <time dateTime='2023-06-05T11:35:37.486Z'>{formatDate(createdAt)}</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
