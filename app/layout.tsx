import { mergeOpenGraph } from '@/seo/openGraph'
import 'styles/globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
  openGraph: mergeOpenGraph(),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-slate-50`}>
        <nav></nav>
        <h1 className='text-8xl'>News</h1>
        {children}
      </body>
    </html>
  )
}
