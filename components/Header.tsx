'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import ThemeSwitch from './ThemeSwitch'
import MobileNav from './MobileNav'

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
          <div className="relative h-32 w-32 flex-shrink-0">
            <Image
              src="/static/images/logo.png"
              alt="SYSTEC Logo"
              width={200}
              height={200}
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
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 md:flex md:gap-6">
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
          <ThemeSwitch />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </motion.header>
  )
}
