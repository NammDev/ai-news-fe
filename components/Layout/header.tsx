export default function Header() {
  return (
    <header className='bg-white'>
      <nav
        className='flex items-center justify-between p-6 mx-auto max-w-screen-2xl lg:px-8'
        aria-label='Global'
      >
        <div className='flex items-center gap-x-12'>
          <a className='-m-1.5 p-1.5' href='/'>
            <span className='sr-only'>Redshirt Sports</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='38.68 124.69 433.19 262.6'
              xmlSpace='preserve'
              className='w-auto h-8'
            >
              <style dangerouslySetInnerHTML={{ __html: '.st25{fill:#dc2727}' }} />
              <g id='Layer_2'>
                <path
                  className='st25'
                  d='M293.61 200.16a5.79 5.79 0 0 1-1.28-4.71c.29-1.67 5.92-34.6 8.27-48.34.72-4.22 3.8-7.64 7.93-8.78 2.93-.81 5.98-1.56 9.33-2.18 4.91-.92 9.98.36 13.85 3.51 2.66 2.16 5.02 4.28 7.23 6.41a11.03 11.03 0 0 1 2.81 11.52l-15.78 46.43a5.745 5.745 0 0 1-3.35 3.5c-3.41 1.34-9.48 3.56-13.39 4.98-2.23.81-4.71.18-6.28-1.6-2.76-3.12-7-7.94-9.34-10.74zM240.38 199.65c-1.24-.99-2-2.43-2.12-4.01-.7-8.92-3.23-40.99-4.26-54.14-.32-4.11 1.65-8.07 5.16-10.23 2.65-1.63 5.43-3.23 8.51-4.78 4.77-2.4 10.42-2.4 15.19 0 3.09 1.55 5.87 3.15 8.51 4.78 3.51 2.16 5.48 6.12 5.16 10.23-1.04 13.25-3.55 45.13-4.26 54.11a5.8 5.8 0 0 1-2.14 4.05c-2.78 2.23-7.93 6.14-11.38 8.75a5.79 5.79 0 0 1-7 0c-3.43-2.61-8.59-6.53-11.37-8.76zM187.95 207.52a5.757 5.757 0 0 1-3.37-3.52c-2.79-8.2-11.96-35.16-15.78-46.41a11.03 11.03 0 0 1 2.81-11.52c2.21-2.12 4.57-4.25 7.23-6.41 3.88-3.14 8.95-4.43 13.86-3.51 3.35.63 6.4 1.37 9.33 2.18 4.12 1.14 7.2 4.56 7.93 8.78 2.03 11.82 6.81 39.78 8.27 48.35.29 1.68-.18 3.38-1.28 4.69-2.34 2.79-6.58 7.62-9.32 10.73a5.77 5.77 0 0 1-6.3 1.61c-3.91-1.42-9.97-3.63-13.38-4.97z'
                />
                <path
                  className='st25'
                  d='M255.28 181.65c139.04 0 192.01 85.28 192.28 85.65 5.45 7.21 6.61 17.35 3.15 25.86-4.74 10.27-10.81 19.78-17.6 28.91-4.81 6.38-10.06 12.5-15.67 18.4-2 2.11.66 5.33 3.09 3.73 6.97-4.57 13.64-9.69 19.95-15.32 9.22-8.28 17.8-17.69 24.7-28.08 9.21-14.77 8.99-31.46-1.16-48.55-49-85.11-146.73-106.48-208.73-106.48h-.03c-62 0-159.72 21.38-208.73 106.48-10.15 17.09-10.37 33.79-1.16 48.55 6.9 10.4 15.49 19.8 24.7 28.08 6.31 5.63 12.98 10.75 19.95 15.32 2.43 1.59 5.1-1.63 3.09-3.73-5.6-5.89-10.85-12.02-15.67-18.4-6.79-9.14-12.86-18.64-17.6-28.91-3.46-8.51-2.3-18.64 3.15-25.86.27-.37 53.25-85.65 192.29-85.65z'
                />
                <path
                  className='st25'
                  d='M234.01 330.95c10.19-4.29 16.37-14.87 16.38-28.48l.02-33.67c0-9.64-3.17-18.11-8.92-23.86-5.05-5.05-11.7-7.72-19.22-7.72h-.04c-21.48-.01-42.96-.04-64.43-.08-1.81 0-3.28 1.46-3.28 3.27v126.87c0 1.38.87 2.61 2.17 3.08l.07.02c8.22 2.94 16.56 5.51 25.01 7.69 2.07.53 4.08-1.02 4.09-3.16l.17-46.04c4.85.75 9.77 1.42 14.7 2.01 4.32 11.54 8.66 23.2 13.01 34.91l6.59 17.71a3.26 3.26 0 0 0 2.71 2.11c9.21 1 18.6 1.57 27.89 1.68 2.32.03 3.93-2.3 3.09-4.46-6.91-17.68-13.89-35.88-20.01-51.88zm-15.5-57.02-.07 22.63c0 1.29-.26 2.27-.71 2.69-.42.4-1.22.43-1.83.4-9.92-.61-19.91-1.47-29.75-2.55l.1-27.81c9.71.46 19.62.83 29.49 1.09 1.46.03 2.77.33 2.77 3.55zM328.06 294.72c-10.26-1.22-21.18-2.9-32.43-5-3.24-.65-3.37-1.2-3.38-3.2l-.04-13.38c-.01-3.21 1.3-3.51 2.77-3.55 8.3-.21 16.83-.51 25.35-.88.53-.02 1.48.01 1.94.44.4.38.63 1.25.64 2.39l.04 10.49c.01 1.9 1.63 3.4 3.53 3.25 8.21-.65 16.46-1.41 24.54-2.28a3.273 3.273 0 0 0 2.92-3.26l-.01-14.88c.01-16.59-11.58-28.28-28.22-28.44H288.5c-7.54.04-14.21 2.65-19.27 7.71-5.76 5.75-8.93 14.22-8.92 23.86l.02 24.3c0 16.01 10.81 27.84 28.2 30.89 11.38 1.98 22.49 3.44 32.98 4.34 3 .29 3 .51 3.01 2.2l.05 14.19c.01 3.27-1.74 4.03-3.26 4.32-8.94 1.72-18.08 3.11-27.17 4.12-.47.05-1.34.09-1.74-.27-.41-.36-.65-1.32-.66-2.57l-.04-12.6c-.01-1.9-1.63-3.4-3.53-3.25-8.14.64-16.42 1.03-24.61 1.18a3.272 3.272 0 0 0-3.21 3.27l.01 18.33c0 9.98 3.38 18.48 9.52 23.95 4.44 3.95 9.94 6 16.06 6 1.1 0 2.22-.07 3.35-.2 13.39-1.55 26.79-4.07 39.87-7.49 15.54-4.24 26.83-19.27 26.85-35.76v-22.9c.02-13.77-10.15-23.01-27.95-25.32z'
                />
              </g>
            </svg>
          </a>
          <div className='hidden lg:flex lg:gap-x-12'>
            <a
              className='text-lg font-semibold leading-6 text-slate-600 hover:text-indigo-600'
              href='/fbs'
            >
              FBS
            </a>
            <a
              className='text-lg font-semibold leading-6 text-slate-600 hover:text-indigo-600'
              href='/fbs'
            >
              FBS
            </a>
            <a
              className='text-lg font-semibold leading-6 text-slate-600 hover:text-indigo-600'
              href='/about'
            >
              About Us
            </a>
            <a
              className='text-lg font-semibold leading-6 text-slate-600 hover:text-indigo-600'
              href='/contact'
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              aria-hidden='true'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </button>
        </div>
        <div className='hidden lg:flex'>
          <form
            className='flex items-center justify-center flex-1 px-2 lg:ml-6 lg:justify-end'
            action='/search'
            role='search'
          >
            <div className='w-full max-w-lg lg:max-w-xs'>
              <label htmlFor='search' className='sr-only'>
                Search
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    aria-hidden='true'
                    className='w-5 h-5 text-slate-400'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <input
                  id='search'
                  name='query'
                  className='block w-full py-2 pl-10 pr-3 leading-5 bg-white border rounded-md border-slate-300 placeholder-slate-500 focus:border-brand-500 focus:placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-500 sm:text-sm'
                  placeholder='Search'
                  type='search'
                />
              </div>
            </div>
          </form>
        </div>
      </nav>
      <div
        style={{
          position: 'fixed',
          top: 1,
          left: 1,
          width: 1,
          height: 0,
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          borderWidth: 0,
          display: 'none',
        }}
      />
    </header>
  )
}
