import { MEDIA_FIELDS } from './media'
import { META_FIELDS } from './meta'

export const ARTICLES = `
  query Articles {
    Articles (limit: 300 sort: "-createdAt") {
      docs {
        id
        title
        excerpt
        preview ${MEDIA_FIELDS}
        meta ${META_FIELDS}
        author {
          name
        }
        createdAt
        slug
      }
    }
  }
`

export const ARTICLES_SLUGS = `
  query Articles {
    Articles(limit: 300) {
      docs {
        slug
      }
    }
  }
`

export const ARTICLE = `
  query Article($slug: String ) {
    Articles(where: { slug: { equals: $slug} }, draft: true) {
      docs {
        id
        title
        preview ${MEDIA_FIELDS}
        excerpt
        author {
          name
        }
        createdAt
        content 
        meta ${META_FIELDS}
      }
    }
  }
`
