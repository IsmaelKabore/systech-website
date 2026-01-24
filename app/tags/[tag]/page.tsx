import { slug } from 'github-slugger'
import { allBlogs, Blog } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import NextLink from 'next/link'

// Inline Link component
const Link = ({ href, ...rest }: React.ComponentProps<typeof NextLink>) => (
  <NextLink href={href} {...rest} />
)

// Inline utility functions
function sortPosts(posts: Blog[]) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1
    if (a.date < b.date) return 1
    return 0
  })
}

function allCoreContent<T extends Record<string, any>>(contents: T[]) {
  return contents.map((c) => {
    const { body, _raw, _id, ...core } = c
    return core
  })
}

function formatDate(date: string, locale = 'en-US') {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const now = new Date(date).toLocaleDateString(locale, options)
  return now
}

export const metadata = {
  title: 'Tags',
  description: 'Things I blog about',
}

// Inline ListLayoutWithTags component
interface ListLayoutWithTagsProps {
  posts: Blog[]
  title: string
  tag?: string
}

function ListLayoutWithTags({ posts, title, tag }: ListLayoutWithTagsProps) {
  const filteredPosts = tag
    ? posts.filter((post) => post.tags?.map((t: string) => slug(t)).includes(tag))
    : sortPosts(posts)

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>
        <ul>
          {!filteredPosts.length && 'No posts found.'}
          {filteredPosts.map((post: Blog) => {
            const { slug: postSlug, date, title, summary, tags } = post
            return (
              <li key={postSlug} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/blog/${postSlug}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap">
                        {tags?.map((t: string) => (
                          <Link
                            key={t}
                            href={`/tags/${slug(t)}`}
                            className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          >
                            {t.split(' ').join('-')}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {summary}
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: encodedTag } = await params
  const tag = decodeURI(encodedTag)
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)

  return <ListLayoutWithTags posts={allBlogs} title={title} tag={tag} />
}

export async function generateStaticParams() {
  const tagCounts: Record<string, number> = {}
  allBlogs.forEach((post) => {
    post.tags?.forEach((tag) => {
      const sluggedTag = slug(tag)
      if (sluggedTag in tagCounts) {
        tagCounts[sluggedTag]++
      } else {
        tagCounts[sluggedTag] = 1
      }
    })
  })

  return Object.keys(tagCounts).map((tag) => ({
    tag,
  }))
}
