'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import ThemeSwitch from './ThemeSwitch'
import { AlgoliaButton } from 'pliny/search/AlgoliaButton'
import { KBarButton } from 'pliny/search/KBarButton'

// ============================================================================
// SEARCH BUTTON (merged from @/components/SearchButton.tsx)
// ============================================================================

const SearchButton = () => {
  if (
    siteMetadata.search &&
    (siteMetadata.search.provider === 'algolia' || siteMetadata.search.provider === 'kbar')
  ) {
    const SearchButtonWrapper =
      siteMetadata.search.provider === 'algolia' ? AlgoliaButton : KBarButton

    return (
      <SearchButtonWrapper aria-label="Search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="hover:text-primary-500 dark:hover:text-primary-400 h-6 w-6 text-gray-900 dark:text-gray-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </SearchButtonWrapper>
    )
  }
}

export default function Header() {
  const { scrollY } = useScroll()
  const paddingY = useTransform(scrollY, [0, 100], ['1.75rem', '1rem'])

  return (
    <motion.header
      style={{ paddingTop: paddingY, paddingBottom: paddingY }}
      className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md transition-all dark:border-gray-800 dark:bg-black/80"
    >
      <div className="mx-auto flex w-full items-center justify-between px-[5%]">
        <Link
          href="/"
          aria-label={siteMetadata.headerTitle as string}
          className="flex items-center gap-3 text-xl font-semibold text-gray-900 dark:text-white"
        >
          <div className="relative h-8 w-8 flex-shrink-0">
            <Image
              src="/static/images/logo.png"
              alt="SYSTEC Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span>
            {typeof siteMetadata.headerTitle === 'string'
              ? siteMetadata.headerTitle
              : 'SYS TECH'}
          </span>
        </Link>
        <nav className="flex items-center gap-4 md:gap-6">
          {headerNavLinks
            .filter((l) => l.href !== '/')
            .map((l) => (
              <Link
                key={l.title}
                href={l.href}
                className="text-sm font-medium text-gray-900 transition-colors hover:text-cyan-600 dark:text-gray-100 dark:hover:text-cyan-400"
              >
                {l.title}
              </Link>
            ))}
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-900 transition-colors hover:text-cyan-600 dark:text-gray-100 dark:hover:text-cyan-400"
          >
            Contact
          </Link>
          <SearchButton />
          <ThemeSwitch />
        </nav>
      </div>
    </motion.header>
  )
}
