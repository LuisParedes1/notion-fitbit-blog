import dynamic from 'next/dynamic'
import ExtLink from './ext-link'
import React from 'react'

// helper for passthrough native elements
const passthrough =
  (tag: keyof JSX.IntrinsicElements) =>
  (props: any) =>
    React.createElement(tag, props)


const JSX_component = {
  // default tags
  ol: passthrough('ol'),
  ul: passthrough('ul'),
  li: passthrough('li'),
  p: passthrough('p'),
  blockquote: passthrough('blockquote'),
  a: ExtLink,

  Code: dynamic(() => import('./code')),
  Counter: dynamic(() => import('./counter')),
  Equation: dynamic(() => import('./equation')),
}


const string_component = {
  // default tags
  ol: 'ol',
  ul: 'ul',
  li: 'li',
  p: 'p',
  blockquote: 'blockquote',
  a: ExtLink,

  Code: dynamic(() => import('./code')),
  Counter: dynamic(() => import('./counter')),
  Equation: dynamic(() => import('./equation')),
}

export {JSX_component, string_component}