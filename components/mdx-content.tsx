import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import React, { JSX } from 'react'
import { highlight } from 'sugar-high'
import Counter from './counter'

function Code ({ children, ...props }: any){
    let codeHTML = highlight(children)
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components = {
    code: Code,
    Counter
}

const MdxContent = (props: JSX.IntrinsicAttributes & MDXRemoteProps) => {
  return (
    <MDXRemote {...props} components={{...components, ...(props.components)}} />
  )
}

export default MdxContent