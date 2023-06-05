import React from 'react'

import { Media as MediaType } from '@/@types/payload'
import { Media } from '../Media'

export type RichTextUploadNodeType = {
  value?: MediaType
  relationTo: string
  type: 'upload'
}

export type Props = {
  node: any
  className?: string
}

export const RichTextUpload: React.FC<Props> = (props) => {
  const { node, className } = props
  const { value } = node as RichTextUploadNodeType

  return (
    <div className={className}>
      <Media resource={value} />
    </div>
  )
}

export default RichTextUpload
