import React from 'react'
import NextImage, { StaticImageData } from 'next/image'

import { Props } from '..'
import RichText from '@/components/RichText'
import { Content } from 'next/font/google'

const breakpoints = {
  s: 768,
  m: 1024,
  l: 1440,
}
export const Image: React.FC<Props> = (props) => {
  const {
    imgClassName,
    onClick,
    onLoad: onLoadFromProps,
    size,
    resource,
    priority,
    fill,
    src: srcFromProps,
    alt: altFromProps,
  } = props

  const [isLoading, setIsLoading] = React.useState(true)

  let width: number | undefined
  let height: number | undefined
  let alt = altFromProps
  let src: StaticImageData | string = srcFromProps || ''

  if (!src && resource && typeof resource !== 'string') {
    const {
      width: fullWidth,
      height: fullHeight,
      filename: fullFilename,
      alt: altFromResource,
    } = resource

    width = fullWidth
    height = fullHeight
    alt = altFromResource

    let filename = fullFilename

    // src = `${process.env.NEXT_PUBLIC_CMS_URL}/${filename}`
    src = `${resource.url}`
  }

  // NOTE: this is used by the browser to determine which image to download at different screen sizes
  const sizes = Object.entries(breakpoints)
    .map(([, value]) => `(max-width: ${value}px) ${value}px`)
    .join(', ')

  return (
    <>
      <NextImage
        className={[imgClassName].filter(Boolean).join(' ')}
        src={src}
        alt={alt || ''}
        onClick={onClick}
        onLoad={() => {
          setIsLoading(false)
          if (typeof onLoadFromProps === 'function') {
            onLoadFromProps()
          }
        }}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        sizes={sizes}
        priority={priority}
      />
      {resource?.caption && <RichText content={resource.caption} />}
    </>
  )
}
