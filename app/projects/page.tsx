'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Building2, Home, UtensilsCrossed, Handshake, Briefcase, CheckCircle2, ArrowRight, Laptop, GraduationCap } from 'lucide-react'

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

function StaggerContainer({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function StaggerItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: appleEase } },
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Projects() {
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
                Nos Projets
              </h1>
              <motion.p
                className="mt-5 max-w-xl mx-auto text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: appleEase, delay: 0.2 }}
              >
                Solutions numériques et infrastructure pour le développement du Burkina Faso
              </motion.p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Featured Government Project - Ordinateurs pour étudiants */}
      <section className="bg-gray-50 py-20 dark:bg-gray-950">
        <Container>
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700 dark:border-gray-800 dark:bg-black/40 dark:text-gray-300">
              <Building2 className="h-4 w-4" />
              Projet Partenaire Institutionnel
            </div>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                  Un étudiant, un ordinateur
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-700 dark:text-cyan-400">
                    Burkina Faso
                  </span>
                  <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-400">
                    Gouvernement
                  </span>
                  <span className="rounded-full bg-gray-500/10 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-400">
                    En cours
                  </span>
                </div>
                <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  Partenariat avec le gouvernement burkinabé et la boutique EKF pour faciliter l'accès aux ordinateurs pour les étudiants burkinabés.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Facilitation d'accès</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Simplification du processus d'obtention d'ordinateurs pour les étudiants
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Partenariat public-privé</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Collaboration entre le gouvernement, SYS TECH et la boutique EKF
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Impact éducatif</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Amélioration de l'accès aux outils numériques pour l'éducation
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <GraduationCap className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                    <span>Partenaires :</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                      Gouvernement du Burkina Faso
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                      Boutique EKF
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} y={24}>
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-indigo-500/20 blur-xl" />
                <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-950">
                  <div className="relative h-[400px] sm:h-[500px]">
                    <Image
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=2400&auto=format&fit=crop&q=80"
                      alt="Étudiants avec ordinateurs"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3 rounded-xl bg-white/90 p-4 backdrop-blur dark:bg-gray-900/90">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20">
                          <Laptop className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">Accès facilité</p>
                          <p className="text-xs text-gray-600 dark:text-gray-300">Pour tous les étudiants burkinabés</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Other Projects */}
      <section className="bg-white py-20 dark:bg-black">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl">Autres Projets</h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
                Solutions innovantes pour répondre aux défis locaux
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-2">
            {/* AI Housing Project */}
            <StaggerItem>
              <motion.div
                className="group relative h-full overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-500 dark:border-gray-800 dark:bg-gray-950 hover:shadow-2xl"
                whileHover={{ y: -4 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4, ease: appleEase }}
                    className="h-full w-full"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=2400&auto=format&fit=crop&q=80"
                      alt="Plateforme de logement intelligente"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 backdrop-blur">
                      <Home className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-400">
                    Intelligence Artificielle
                  </div>
                  <h3 className="mb-3 text-2xl font-extrabold text-gray-900 dark:text-white">
                    Plateforme de Logement Intelligente
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
                    Solution alimentée par l'IA pour améliorer l'accès au logement, optimiser la planification urbaine et faciliter l'allocation de ressources.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
                      <span>Optimisation de l'allocation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
                      <span>Planification urbaine assistée</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
                      <span>Amélioration de l'accès</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Food Delivery Project */}
            <StaggerItem>
              <motion.div
                className="group relative h-full overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-500 dark:border-gray-800 dark:bg-gray-950 hover:shadow-2xl"
                whileHover={{ y: -4 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4, ease: appleEase }}
                    className="h-full w-full"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=2400&auto=format&fit=crop&q=80"
                      alt="Plateforme de livraison de nourriture"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 backdrop-blur">
                      <UtensilsCrossed className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-400">
                    Impact Local
                  </div>
                  <h3 className="mb-3 text-2xl font-extrabold text-gray-900 dark:text-white">
                    Plateforme de Livraison Alimentaire
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
                    Solution adaptée au contexte local pour connecter restaurants, petits commerces et consommateurs, avec un impact économique réel.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                      <span>Support aux petits commerces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                      <span>Accessibilité améliorée</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                      <span>Adaptation aux réalités locales</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* Incubator & Partnership Model */}
      <section className="bg-gray-50 py-20 dark:bg-gray-950">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl">Notre Modèle de Collaboration</h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                Nous travaillons avec des partenaires variés : institutions, startups, ONG et entreprises. Deux approches complémentaires selon vos besoins.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Model A - Incubation */}
            <StaggerItem>
              <motion.div
                className="relative h-full rounded-3xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-gray-950"
                whileHover={{ y: -4, transition: { duration: 0.3, ease: appleEase } }}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <Handshake className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="mb-3 text-2xl font-extrabold text-gray-900 dark:text-white">
                  Incubation & Partenariat
                </h3>
                <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
                  Nous construisons votre projet avec vous, en co-développement et collaboration de long terme.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
                    <span className="text-gray-700 dark:text-gray-300">Co-conception et co-développement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
                    <span className="text-gray-700 dark:text-gray-300">Accompagnement sur le long terme</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
                    <span className="text-gray-700 dark:text-gray-300">Croissance partagée</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
                    <span className="text-gray-700 dark:text-gray-300">Modèle adapté aux startups et ONG</span>
                  </li>
                </ul>
              </motion.div>
            </StaggerItem>

            {/* Model B - Client Delivery */}
            <StaggerItem>
              <motion.div
                className="relative h-full rounded-3xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-gray-950"
                whileHover={{ y: -4, transition: { duration: 0.3, ease: appleEase } }}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20">
                  <Briefcase className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mb-3 text-2xl font-extrabold text-gray-900 dark:text-white">
                  Livraison Client
                </h3>
                <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
                  Vous avez un besoin précis, nous développons et livrons la solution selon vos spécifications.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-300">Développement sur mesure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-300">Scope fixe ou évolutif</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-300">Livraison professionnelle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-300">Modèle adapté aux entreprises</span>
                  </li>
                </ul>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>

          <Reveal delay={0.3}>
            <div className="mt-12 text-center">
              <motion.a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.99]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
              >
                Discutons de votre projet
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </motion.a>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  )
}
