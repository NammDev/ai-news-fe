import type { Metadata } from 'next'

export const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'Payload CMS',
  title: 'Hello xin chao',
  description:
    'Payload is a headless CMS and application framework built with TypeScript, Node.js, React and MongoDB',
  images: [
    {
      url: '/images/og-image.jpg',
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
