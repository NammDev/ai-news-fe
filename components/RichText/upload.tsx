import React from 'react'

import { Media as MediaType } from '@/@types/payload'
import { Media } from '../Media'
import RichText from '.'

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
      {value?.caption && <RichText content={value.caption} />}
    </div>
  )
}

export default RichTextUpload
