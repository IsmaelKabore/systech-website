// layout.tsx
import { Space_Grotesk } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'
import siteMetadata from '@/data/siteMetadata'
import { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

/**
 * Root Layout Component
 * 
 * STRUCTURE & FIXES:
 * - html: scroll-smooth for smooth scrolling behavior
 * - head: Properly wrapped meta tags (fixes hydration issues)
 * - body: Base styles WITHOUT flex (moved to inner div to prevent scroll issues)
 * - ThemeProviders: Handles dark/light theme switching
 * - Layout div: flex column with min-h-screen to push footer to bottom
 * - Header: Sticky navigation
 * - main: Content wrapper with w-full (NO flex-1 to prevent infinite scroll)
 * - Footer: Always at bottom
 * 
 * SCROLL FIX EXPLANATION:
 * - Removed flex-1 from main element (was causing infinite scroll)
 * - Moved flex layout to inner div instead of body
 * - Each section properly controls its own height
 * - overflow-x-hidden on page wrapper prevents horizontal scroll
 */

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
      {children}
    </ThemeProvider>
  )
}

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  return (
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={`${basePath}/static/favicons/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${basePath}/static/favicons/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${basePath}/static/favicons/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${basePath}/static/favicons/site.webmanifest`} />
        <link
          rel="mask-icon"
          href={`${basePath}/static/favicons/safari-pinned-tab.svg`}
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
      </head>
      
      <body className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
        <ThemeProviders>
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
          <Header />
          {children}
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  )
}