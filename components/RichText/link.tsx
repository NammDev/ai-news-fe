import React from 'react'
import Link from 'next/link'
import { Article, Author } from '@/@types/payload'

const relationSlugs = {
  case_studies: 'case-studies',
}

// type AuthorsReference = {
//   value: string | Author
//   relationTo: 'authors'
// }

type ArticlesReference = {
  value: string | Article
  relationTo: 'articles'
}

export type LinkType = 'reference' | 'custom'
// export type Reference = AuthorsReference | ArticlesReference

export type Reference = ArticlesReference

export type CMSLinkType = {
  type?: LinkType
  newTab?: boolean
  reference?: Reference
  url?: string
  label?: string
  children?: React.ReactNode
  className?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

type GenerateSlugType = {
  type?: LinkType
  url?: string
  reference?: Reference
}
const generateHref = (args: GenerateSlugType): string => {
  const { reference, url, type } = args

  if ((type === 'custom' || type === undefined) && url) {
    return url
  }

  if (type === 'reference' && reference?.value && typeof reference.value !== 'string') {
    // if (reference.relationTo === 'authors') {
    //   return `/blog/${reference.value.slug}`
    // }

    if (reference.relationTo === 'articles') {
      return `/${reference.value.slug}`
    }

    return `/${reference.relationTo}/${reference.value.slug}`
  }

  return ''
}

export const CMSLink: React.FC<CMSLinkType> = ({
  type,
  url,
  newTab,
  reference,
  label,
  children,
  className,
  onMouseEnter,
  onMouseLeave,
}) => {
  let href = generateHref({ type, url, reference })

  if (!href) {
    return (
      <span className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {label}
        {children}
      </span>
    )
  }

  const hrefIsLocal = ['tel:', 'mailto:', '/'].some((prefix) => href.startsWith(prefix))

  if (!hrefIsLocal) {
    try {
      const objectURL = new URL(href)
      if (objectURL.origin === process.env.NEXT_PUBLIC_SITE_URL) {
        href = objectURL.href.replace(process.env.NEXT_PUBLIC_SITE_URL, '')
      }
    } catch (e) {
      console.error(`Failed to format url: ${href}`, e) // eslint-disable-line no-console
    }
  }

  const newTabProps = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  if (href.indexOf('/') === 0) {
    return (
      <Link
        href={href}
        {...newTabProps}
        className={className}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        prefetch={false}
      >
        {label && label}
        {children && children}
      </Link>
    )
  }

  return (
    <a
      href={url}
      {...newTabProps}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {label && label}
      {children && children}
    </a>
  )
}
