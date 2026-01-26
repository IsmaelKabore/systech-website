'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Search, ExternalLink } from 'lucide-react'

const appleEase = [0.25, 0.1, 0.25, 1] as const

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">{children}</div>
}

function Reveal({
  children,
  delay = 0,
  y = 18,
}: {
  children: React.ReactNode
  delay?: number
  y?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: appleEase, delay }}
    >
      {children}
    </motion.div>
  )
}

type BlogArticle = {
  title: string
  summary: string
  source: string
  url: string
  date: string
  tags: string[]
}

const articles: BlogArticle[] = [
  {
    title: 'La transformation numérique en Afrique : opportunités et défis',
    summary:
      'Analyse approfondie de la transformation numérique en Afrique, des opportunités économiques aux défis infrastructurels. Un regard sur comment les pays africains adoptent les technologies pour accélérer leur développement.',
    source: 'Banque Mondiale',
    url: 'https://www.worldbank.org/en/topic/digitaldevelopment/brief/digital-development-in-africa',
    date: '2024',
    tags: ['Transformation digitale', 'Afrique'],
  },
  {
    title: "L'intelligence artificielle au service du développement en Afrique",
    summary:
      "Comment l'IA peut résoudre des problèmes concrets en Afrique : santé, agriculture, éducation. Exemples de projets réussis et perspectives d'avenir pour l'innovation technologique sur le continent.",
    source: 'MIT Technology Review',
    url: 'https://www.technologyreview.com/topic/artificial-intelligence/',
    date: '2024',
    tags: ['IA', 'Innovation', 'Afrique'],
  },
  {
    title: 'Cybersécurité en Afrique : enjeux et bonnes pratiques',
    summary:
      "Les défis de la cybersécurité en Afrique face à la croissance rapide du numérique. Stratégies de protection, sensibilisation et renforcement des capacités pour sécuriser les infrastructures critiques.",
    source: 'OECD',
    url: 'https://www.oecd.org/digital/',
    date: '2024',
    tags: ['Cybersécurité', 'Infrastructure'],
  },
  {
    title: 'Le développement logiciel en contexte africain : adapter les solutions',
    summary:
      "Réflexions sur le développement de logiciels adaptés aux réalités africaines : contraintes techniques, besoins locaux, et approches innovantes pour créer des solutions durables et efficaces.",
    source: 'Medium - Tech Africa',
    url: 'https://medium.com/tag/africa-technology',
    date: '2024',
    tags: ['Développement', 'Afrique', 'Innovation'],
  },
  {
    title: 'Infrastructure cloud en Afrique : état des lieux et perspectives',
    summary:
      "L'évolution de l'infrastructure cloud en Afrique, des data centers locaux aux solutions hybrides. Analyse des besoins croissants et des opportunités pour les entreprises africaines.",
    source: 'Jeune Afrique',
    url: 'https://www.jeuneafrique.com/societe/',
    date: '2024',
    tags: ['Cloud', 'Infrastructure', 'Afrique'],
  },
  {
    title: 'Startups tech en Afrique : l\'écosystème en pleine croissance',
    summary:
      "Portrait de l'écosystème des startups technologiques en Afrique : financement, innovation, et impact social. Comment les entrepreneurs africains transforment le continent avec la technologie.",
    source: 'Le Monde - Tech',
    url: 'https://www.lemonde.fr/technologies/',
    date: '2024',
    tags: ['Startups', 'Innovation', 'Afrique'],
  },
  {
    title: 'Réseaux 5G en Afrique : déploiement et impact économique',
    summary:
      "L'expansion des réseaux 5G en Afrique ouvre de nouvelles possibilités pour l'économie numérique. Analyse des déploiements en cours et de leur impact sur l'innovation et la connectivité.",
    source: 'GSMA Intelligence',
    url: 'https://www.gsmaintelligence.com/',
    date: '2024',
    tags: ['5G', 'Réseaux', 'Afrique'],
  },
  {
    title: 'Fintech en Afrique : révolution du paiement mobile',
    summary:
      "Comment les solutions fintech transforment l'inclusion financière en Afrique. Le paiement mobile, les services bancaires digitaux et leur impact sur l'économie locale.",
    source: 'TechCrunch',
    url: 'https://techcrunch.com/tag/africa/',
    date: '2024',
    tags: ['Fintech', 'Mobile', 'Afrique'],
  },
  {
    title: 'Data centers en Afrique : enjeux de souveraineté numérique',
    summary:
      "L'importance des data centers locaux pour la souveraineté numérique africaine. Défis techniques, économiques et stratégiques du développement d'infrastructures de données sur le continent.",
    source: 'African Business',
    url: 'https://africanbusinessmagazine.com/',
    date: '2024',
    tags: ['Data centers', 'Souveraineté', 'Infrastructure'],
  },
  {
    title: 'Open Source en Afrique : adoption et contribution',
    summary:
      "L'adoption croissante des technologies open source en Afrique et la contribution croissante des développeurs africains aux projets open source mondiaux. Impact sur l'innovation locale.",
    source: 'GitHub Blog',
    url: 'https://github.blog/',
    date: '2024',
    tags: ['Open Source', 'Développement', 'Innovation'],
  },
  {
    title: 'E-gouvernement en Afrique : modernisation des services publics',
    summary:
      "Les initiatives d'e-gouvernement transforment la relation entre citoyens et administrations en Afrique. Exemples de réussites et défis à surmonter pour une digitalisation efficace.",
    source: 'UN E-Government Survey',
    url: 'https://publicadministration.un.org/',
    date: '2024',
    tags: ['E-gouvernement', 'Services publics', 'Digitalisation'],
  },
  {
    title: 'Énergie solaire et tech : solutions durables pour l\'Afrique',
    summary:
      "Comment les technologies solaires alimentent l'innovation tech en Afrique. Projets combinant énergie renouvelable et solutions numériques pour un développement durable.",
    source: 'Renewable Energy World',
    url: 'https://www.renewableenergyworld.com/',
    date: '2024',
    tags: ['Énergie', 'Durabilité', 'Innovation'],
  },
]

const BlogCard = ({ article, index }: { article: BlogArticle; index: number }) => {
  return (
    <Reveal delay={index * 0.1}>
      <motion.article
        className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-500 dark:border-gray-800 dark:bg-gray-950 hover:shadow-xl"
        whileHover={{ y: -4 }}
      >
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <time className="text-sm font-semibold text-gray-500 dark:text-gray-400">{article.date}</time>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-800 dark:bg-black dark:text-gray-300 dark:hover:bg-gray-900"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-3 text-2xl font-extrabold leading-tight tracking-tight">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 transition-colors hover:text-cyan-600 dark:text-gray-100 dark:hover:text-cyan-400"
              >
                {article.title}
              </a>
            </h2>
            <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">{article.summary}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">{article.source}</span>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 font-bold text-cyan-600 transition-all duration-300 dark:text-cyan-400 hover:gap-4"
              >
                <span>Lire l'article</span>
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </motion.article>
    </Reveal>
  )
}

export default function BlogPage() {
  const [searchValue, setSearchValue] = useState('')

  const filteredArticles = articles.filter((article) => {
    const searchContent = article.title + article.summary + article.tags.join(' ') + article.source
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (
    <main className="relative w-full bg-white text-gray-900 dark:bg-black dark:text-white">
      {/* Hero Section */}
      <section className="relative bg-white pt-28 pb-20 dark:bg-black sm:pt-32">
        {/* background soft blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-200/25 blur-3xl dark:bg-cyan-500/10" />
          <div className="absolute top-40 right-[-120px] h-[420px] w-[420px] rounded-full bg-blue-200/20 blur-3xl dark:bg-blue-500/10" />
        </div>

        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Blog
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
                Articles, analyses et réflexions sur la technologie, l'innovation et la transformation digitale en Afrique
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto mt-10 max-w-lg">
              <label className="sr-only">Rechercher des articles</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                <input
                  aria-label="Rechercher des articles"
                  type="text"
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Rechercher des articles..."
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 shadow-sm transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-gray-800 dark:bg-gray-950 dark:text-white dark:placeholder-gray-500 dark:focus:border-cyan-400"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Blog Posts */}
      <section className="bg-white py-20 dark:bg-black">
        <Container>
          {!filteredArticles.length ? (
            <Reveal>
              <div className="text-center py-20">
                <p className="text-lg text-gray-500 dark:text-gray-400">Aucun article trouvé.</p>
              </div>
            </Reveal>
          ) : (
            <div className="space-y-8">
              {filteredArticles.map((article, index) => (
                <BlogCard key={article.url} article={article} index={index} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  )
}
