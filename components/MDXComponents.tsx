import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'
import Image from './Image'

// ============================================================================
// CUSTOM LINK (merged from @/components/Link.tsx)
// ============================================================================

const CustomLink = ({ href, children, ...rest }: React.ComponentProps<'a'>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return <NextLink className="break-words" href={href} {...rest}>{children}</NextLink>
  }

  if (isAnchorLink) {
    return <a className="break-words" href={href} {...rest}>{children}</a>
  }

  return (
    <a className="break-words" target="_blank" rel="noopener noreferrer" href={href} {...rest}>{children}</a>
  )
}

// ============================================================================
// TABLE WRAPPER (merged from @/components/TableWrapper.tsx)
// ============================================================================

const TableWrapper = ({ children }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table>{children}</table>
    </div>
  )
}

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
}
