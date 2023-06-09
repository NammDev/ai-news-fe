export default function Footer() {
  return (
    <footer className='py-12 bg-white sm:py-20 lg:py-24'>
      <div className='max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <div className='flex items-center justify-center'>
            <a
              className='block'
              aria-label='Redshirt Sports Horizontal Logo, click to go to the homepage'
              href='/'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='28.82 193.83 463.94 119.03'
                xmlSpace='preserve'
                className='w-auto h-10'
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".st25{fill:#dc2727}.st28{font-family:'IndustryInc-Base'}.st29{font-size:53.2646px}",
                  }}
                />
                <g id='Layer_2'>
                  <text transform='translate(232.148 250.717)'>
                    <tspan x={0} y={0} className='st25 st28 st29'>
                      REDSHIRT
                    </tspan>
                    <tspan x={0} y='48.81' className='st25 st28 st29'>
                      SPORTS
                    </tspan>
                  </text>
                  <path
                    className='st25'
                    d='M138.04 226.16c-.47-.56-.67-1.3-.55-2.02s2.54-14.82 3.54-20.71a4.721 4.721 0 0 1 3.4-3.76c1.25-.35 2.56-.67 4-.94 2.1-.39 4.27.16 5.94 1.5 1.14.92 2.15 1.84 3.1 2.75a4.724 4.724 0 0 1 1.2 4.94c-1.65 4.87-5.57 16.37-6.76 19.89-.23.69-.76 1.23-1.44 1.5-1.46.57-4.06 1.53-5.74 2.13-.96.35-2.02.08-2.69-.69-1.18-1.32-3-3.39-4-4.59zM115.23 225.94c-.53-.42-.86-1.04-.91-1.72-.3-3.82-1.38-17.56-1.83-23.19a4.7 4.7 0 0 1 2.21-4.38c1.13-.7 2.32-1.38 3.65-2.05a7.244 7.244 0 0 1 6.51 0c1.32.67 2.51 1.35 3.65 2.05a4.71 4.71 0 0 1 2.21 4.38c-.45 5.68-1.52 19.33-1.82 23.18-.05.68-.38 1.31-.92 1.73-1.19.95-3.4 2.63-4.87 3.75-.89.67-2.11.67-3 0-1.48-1.11-3.69-2.79-4.88-3.75zM92.77 229.31c-.68-.27-1.21-.82-1.45-1.51-1.19-3.51-5.12-15.06-6.76-19.88a4.753 4.753 0 0 1 1.2-4.94c.95-.91 1.96-1.82 3.1-2.75a7.263 7.263 0 0 1 5.94-1.5c1.43.27 2.74.59 4 .94 1.77.49 3.09 1.95 3.4 3.76.87 5.06 2.92 17.04 3.54 20.71.12.72-.08 1.45-.55 2.01-1 1.2-2.82 3.26-3.99 4.6-.67.76-1.74 1.04-2.7.69-1.67-.6-4.27-1.55-5.73-2.13z'
                  />
                  <path
                    className='st25'
                    d='M121.61 218.23c59.57 0 82.26 36.53 82.37 36.7 2.34 3.09 2.83 7.43 1.35 11.08-2.03 4.4-4.63 8.47-7.54 12.39a90.465 90.465 0 0 1-6.71 7.88c-.86.9.28 2.28 1.32 1.6 2.99-1.96 5.85-4.15 8.55-6.56 3.95-3.55 7.63-7.58 10.58-12.03 3.95-6.33 3.85-13.48-.5-20.8-20.99-36.46-62.86-45.62-89.42-45.62h-.01c-26.56 0-68.43 9.16-89.42 45.62-4.35 7.32-4.44 14.47-.5 20.8 2.96 4.45 6.63 8.48 10.58 12.03 2.7 2.41 5.56 4.61 8.55 6.56 1.04.68 2.18-.7 1.32-1.6-2.4-2.53-4.65-5.15-6.71-7.88-2.91-3.91-5.51-7.99-7.54-12.39-1.48-3.65-.99-7.99 1.35-11.08.12-.16 22.82-36.7 82.38-36.7z'
                  />
                  <path
                    className='st25'
                    d='M112.5 282.19c4.36-1.84 7.01-6.37 7.02-12.2l.01-14.43c0-4.13-1.36-7.76-3.82-10.22-2.16-2.16-5.01-3.31-8.23-3.31h-.02c-9.2-.01-18.4-.02-27.6-.04-.78 0-1.4.63-1.4 1.4v54.36c0 .59.37 1.12.93 1.32l.03.01c3.52 1.26 7.1 2.36 10.72 3.3.89.23 1.75-.44 1.75-1.35l.07-19.73c2.08.32 4.19.61 6.3.86 1.85 4.94 3.71 9.94 5.57 14.96l2.82 7.59c.18.5.63.85 1.16.9 3.95.43 7.97.67 11.95.72.99.01 1.68-.99 1.32-1.91-2.97-7.58-5.95-15.37-8.58-22.23zm-6.64-24.42-.03 9.69c0 .55-.11.97-.3 1.15-.18.17-.52.19-.78.17-4.25-.26-8.53-.63-12.75-1.09l.04-11.92c4.16.2 8.4.35 12.63.47.63.02 1.19.15 1.19 1.53zM152.8 266.67c-4.4-.52-9.08-1.24-13.89-2.14-1.39-.28-1.44-.51-1.45-1.37l-.02-5.73c0-1.38.56-1.5 1.19-1.52 3.56-.09 7.21-.22 10.86-.38.23-.01.63 0 .83.19.17.16.27.54.27 1.03l.02 4.49c0 .82.7 1.46 1.51 1.39 3.52-.28 7.05-.6 10.51-.98.71-.08 1.25-.68 1.25-1.39v-6.38c0-7.11-4.96-12.12-12.09-12.18h-15.94c-3.23.02-6.09 1.14-8.26 3.3-2.47 2.46-3.82 6.09-3.82 10.22l.01 10.41c0 6.86 4.63 11.93 12.08 13.23 4.88.85 9.64 1.47 14.13 1.86 1.29.13 1.29.22 1.29.94l.02 6.08c0 1.4-.74 1.72-1.39 1.85-3.83.74-7.75 1.33-11.64 1.77-.2.02-.58.04-.75-.11-.17-.16-.28-.57-.28-1.1l-.02-5.4c0-.82-.7-1.46-1.51-1.39-3.49.27-7.03.44-10.54.51-.76.01-1.38.64-1.38 1.4l.01 7.85c0 4.27 1.45 7.92 4.08 10.26 1.9 1.69 4.26 2.57 6.88 2.57.47 0 .95-.03 1.44-.09 5.74-.66 11.48-1.74 17.08-3.21 6.66-1.81 11.49-8.26 11.5-15.32v-9.81c0-5.9-4.36-9.86-11.98-10.85z'
                  />
                </g>
              </svg>
            </a>
          </div>
          <div className='flex items-center justify-center mt-6 sm:mt-0'>
            <ul className='flex items-center space-x-3 sm:ml-4'>
              <li>
                <a
                  href='https://twitter.com/_redshirtsports'
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center justify-center w-10 h-10 transition duration-300 ease-in-out bg-transparent border rounded-full border-slate-300 sm:h-12 sm:w-12'
                >
                  <span className='sr-only'>Twitter</span>
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    className='w-4 h-4 transition ease-in-out transform text-slate-700'
                  >
                    <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href='https://www.facebook.com/Redshirt-Sports-103392312412641'
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center justify-center w-10 h-10 transition duration-300 ease-in-out bg-transparent border rounded-full border-slate-300 sm:h-12 sm:w-12'
                >
                  <span className='sr-only'>Facebook</span>
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    className='w-4 h-4 transition ease-in-out transform text-slate-700'
                  >
                    <path
                      fillRule='evenodd'
                      d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='pt-10 mt-10 border-t border-slate-300/70 md:flex md:items-center md:justify-between'>
          <nav
            aria-label='Footer'
            className='flex flex-wrap items-center justify-center -my-2 space-x-5 md:justify-start'
          >
            <a
              className='py-2 text-base transition duration-300 ease-in-out text-slate-500'
              href='/fcs'
            >
              FCS
            </a>
            <a
              className='py-2 text-base transition duration-300 ease-in-out text-slate-500'
              href='/about'
            >
              About Us
            </a>
            <a
              className='py-2 text-base transition duration-300 ease-in-out text-slate-500'
              href='/contact'
            >
              Contact Us
            </a>
            <a
              className='py-2 text-base transition duration-300 ease-in-out text-slate-500'
              href='/privacy'
            >
              Privacy Policy
            </a>
          </nav>
          <p className='flex items-center justify-center mt-8 ml-0 text-base shrink-0 text-slate-500 md:ml-6 md:mt-0'>
            ©{/* */}2023 Redshirt Sports. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
