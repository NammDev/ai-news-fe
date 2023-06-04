import React from 'react'
import serialize from './serialize'

const RichText: React.FC<{ className?: string; content: any }> = ({ className, content }) => {
  if (!content) {
    return null
  }

  return <div id='test'>{serialize(content)}</div>
}

export default RichText
