export interface SuccessResponse<Data> {
  docs: Data[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: null
  nextPage: null
}

/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    articles: Article
    authors: Author
    categories: Category
    tags: Tag
    users: User
    media: Media
  }
  globals: {}
}
export interface Article {
  id: string
  title: string
  headlineimage: Media
  author: Author
  slug?: string
  description: string
  category: string | Category
  tags?: string[] | Tag[]
  content: {
    [k: string]: unknown
  }[]
  status?: 'draft' | 'published'
  updatedAt: string
  createdAt: string
}
export interface Media {
  id: string
  alt: string
  caption?: {
    [k: string]: unknown
  }[]
  updatedAt: string
  createdAt: string
  url?: string
  filename?: string
  mimeType?: string
  filesize?: number
  width?: number
  height?: number
  sizes?: {
    thumbnail?: {
      url?: string
      width?: number
      height?: number
      mimeType?: string
      filesize?: number
      filename?: string
    }
    sixteenByNineMedium?: {
      url?: string
      width?: number
      height?: number
      mimeType?: string
      filesize?: number
      filename?: string
    }
  }
}
export interface Author {
  id: string
  name?: string
  updatedAt: string
  createdAt: string
}
export interface Category {
  id: string
  name?: string
}
export interface Tag {
  id: string
  name?: string
}
export interface User {
  id: string
  name?: string
  updatedAt: string
  createdAt: string
  email?: string
  resetPasswordToken?: string
  resetPasswordExpiration?: string
  loginAttempts?: number
  lockUntil?: string
  password?: string
}
