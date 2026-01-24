import NextLink from 'next/link'
import { slug } from 'github-slugger'
import { allBlogs } from 'contentlayer/generated'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

// Inline Link component
const Link = ({ href, ...rest }: React.ComponentProps<typeof NextLink>) => (
  <NextLink href={href} {...rest} />
)

// Inline Tag component
const Tag = ({ text }: { text: string }) => (
  <NextLink
    href={`/tags/${slug(text)}`}
    className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
  >
    {text.split(' ').join('-')}
  </NextLink>
)

// Inline SEO metadata generator
function genPageMetadata({ title, description, image, ...rest }: {
  title: string
  description?: string
  image?: string
  [key: string]: any
}): Metadata {
  return {
    title,
    description: description || siteMetadata.description,
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: description || siteMetadata.description,
      url: './',
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.socialBanner],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      card: 'summary_large_image',
      images: image ? [image] : [siteMetadata.socialBanner],
    },
    ...rest,
  }
}

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

// Generate tag data from all blogs
function generateTagData() {
  const tagCounts: Record<string, number> = {}
  allBlogs.forEach((post) => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach((tag) => {
        const formattedTag = slug(tag)
        if (formattedTag in tagCounts) {
          tagCounts[formattedTag] += 1
        } else {
          tagCounts[formattedTag] = 1
        }
      })
    }
  })
  return tagCounts
}

export default async function Page() {
  const tagCounts = generateTagData()
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  return (
    <>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0 dark:divide-gray-700">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14 dark:text-gray-100">
            Tags
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {tagKeys.length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="mt-2 mr-5 mb-2">
                <Tag text={t} />
                <Link
                  href={`/tags/${slug(t)}`}
                  className="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300"
                  aria-label={`View posts tagged ${t}`}
                >
                  {` (${tagCounts[t]})`}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
