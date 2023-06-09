export const FollowSection = () => {
  return (
    <div className='w-full p-5 rounded-2xl bg-slate-50 sm:p-8'>
      <h2 className='relative border-b border-slate-300 pb-2 font-cal text-2xl font-medium text-slate-900 before:absolute before:left-0 before:-bottom-[1px] before:h-px before:w-24 before:bg-brand-500'>
        Follow Us
      </h2>
      <div className='pt-5 space-y-4 overflow-hidden'>
        <a
          target='_blank'
          href='https://twitter.com/_redshirtsports'
          rel='noreferrer noopener'
          className='flex justify-between w-full items-centers'
        >
          <div className='flex items-center'>
            <div className='flex items-center justify-center transition ease-in-out bg-transparent border rounded-full h-9 w-9 border-slate-300'>
              <span className='sr-only'>Twitter</span>
              <svg
                className='w-4 h-4 transition duration-300 ease-in-out'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
              </svg>
            </div>
            <div className='relative flex flex-col flex-wrap col-span-3'>
              <div className='flex flex-col justify-between flex-1 w-full px-5 md:px-0'>
                <div className='ml-3 text-base font-medium capitalize duration-300 ease-in-out'>
                  Twitter
                </div>
              </div>
            </div>
          </div>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              aria-hidden='true'
              className='w-5 h-5 mx-2 duration-300 ease-in-out transform'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
              />
            </svg>
          </div>
        </a>
        <a
          target='_blank'
          href='https://www.facebook.com/Redshirt-Sports-103392312412641'
          rel='noreferrer'
          className='flex justify-between w-full items-centers'
        >
          <div className='flex items-center'>
            <div className='flex items-center justify-center transition ease-in-out bg-transparent border rounded-full h-9 w-9 border-slate-300'>
              <span className='sr-only'>Facebook</span>
              <svg
                className='w-4 h-4 transition duration-300 ease-in-out'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  fillRule='evenodd'
                  d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='relative flex flex-col flex-wrap col-span-3'>
              <div className='flex flex-col justify-between flex-1 w-full px-5 md:px-0'>
                <div className='ml-3 text-base font-medium capitalize duration-300 ease-in-out'>
                  Facebook
                </div>
              </div>
            </div>
          </div>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              aria-hidden='true'
              className='w-5 h-5 mx-2 duration-300 ease-in-out transform'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  )
}
