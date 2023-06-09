import Link from 'next/link'
import { BlogCardProps } from './contentMediaCard'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

export const FeatureCard: React.FC<BlogCardProps> = (props) => {
  const { href, media, title, author } = props
  return (
    <article>
      <Link className='flex space-x-4 sm:space-x-6 lg:space-x-4' href={href}>
        <div className='w-24 h-24 sm:h-28 sm:w-28 lg:h-20 lg:w-20 xl:h-24 xl:w-24'>
          <div className='aspect-w-1 aspect-h-1'>
            <Image
              alt='Ex Wofford Head Football Coach Josh Conklin'
              width={96}
              height={96}
              className='object-cover overflow-hidden rounded-2xl'
              style={{ color: 'transparent' }}
              src={media.url}
            />
          </div>
        </div>
        <div className='w-2/3'>
          <div className='flex flex-col justify-center flex-1 w-full h-full'>
            <h3 className='text-lg font-medium leading-snug tracking-normal transition duration-300 ease-in-out font-cal text-slate-900 line-clamp-2'>
              {title}
            </h3>
            <div className='flex items-center mt-2 text-sm'>
              <span className='text-slate-500'>By&nbsp;</span>
              <span className='font-medium text-slate-900'>{author.name}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
