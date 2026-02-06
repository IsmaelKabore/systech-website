'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Shield, Globe, Cpu, Code, CheckCircle2, Quote } from 'lucide-react'

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
            staggerChildren: 0.2,
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

type TeamMember = {
  name: string
  role: string
  image: string
  quote: string
  focus: string[]
}

const teamMembers: TeamMember[] = [
  {
    name: 'Gérant',
    role: 'Chairman',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    quote:
      "Notre vision est de construire une infrastructure technologique durable en Afrique, fondée sur la confiance institutionnelle et l'excellence technique. Nous croyons en des partenariats de long terme qui transforment réellement les capacités numériques du continent.",
    focus: ['Vision long terme', 'Confiance institutionnelle', 'Durabilité'],
  },
  {
    name: 'Co-Gérant',
    role: 'CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    quote:
      "L'exécution est au cœur de notre approche. Nous transformons les partenariats en résultats concrets, en croissance mesurable et en impact réel. Chaque projet est une opportunité de renforcer les capacités locales et de créer de la valeur durable.",
    focus: ['Exécution', 'Partenariats', 'Impact mesurable'],
  },
  {
    name: 'Les Développeurs',
    role: 'Full-stack / Assistive Tech Developer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
    quote:
      "L'ingénierie de qualité résout des problèmes réels. Nous construisons des systèmes robustes, adaptés aux contraintes locales, en privilégiant la collaboration et l'innovation pragmatique. Chaque ligne de code compte.",
    focus: ['Qualité technique', 'Résolution de problèmes', 'Collaboration'],
  },
]

export default function About() {
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
                À propos de SYSTEC
              </h1>
              <motion.p
                className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: appleEase, delay: 0.2 }}
              >
                Infrastructure numérique souveraine pour l'Afrique
              </motion.p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Company Overview Section */}
      <section className="bg-gray-50 py-20 dark:bg-gray-950">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700 dark:border-gray-800 dark:bg-black/40 dark:text-gray-300">
                  <Globe className="h-4 w-4" />
                  SYSTEC
                </div>
                <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">Notre Histoire</h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  <p>
                    <strong className="text-gray-900 dark:text-white">SYSTEC</strong> a été fondée en{' '}
                    <strong className="text-gray-900 dark:text-white">2023</strong> au{' '}
                    <strong className="text-gray-900 dark:text-white">Burkina Faso</strong> avec une mission claire :
                    construire des systèmes numériques fiables, adaptés aux réalités africaines.
                  </p>
                  <p>
                    Depuis notre création, nous avons collaboré avec des institutions variées :{' '}
                    <strong className="text-gray-900 dark:text-white">Wala</strong>, des{' '}
                    <strong className="text-gray-900 dark:text-white">ministères</strong>, et des{' '}
                    <strong className="text-gray-900 dark:text-white">institutions publiques et privées</strong>.
                    Chaque partenariat renforce notre compréhension des besoins locaux et notre capacité à livrer des
                    solutions durables.
                  </p>
                  <p>
                    SYSTEC est en croissance et vise à s'étendre dans{' '}
                    <strong className="text-gray-900 dark:text-white">plusieurs pays africains</strong> dans un avenir
                    proche, en apportant notre expertise technique et notre approche partenariale à travers le
                    continent.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} y={24}>
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-indigo-500/20 blur-xl" />
                <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-950">
                  <div className="relative h-[400px] sm:h-[500px]">
                    <Image
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2400&auto=format&fit=crop&q=80"
                      alt="Infrastructure SYSTEC"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-20 dark:bg-black">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl">Notre Mission</h2>
              <p className="mt-5 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                Construire une infrastructure souveraine, sécurisée et scalable — pensée pour les réalités du terrain
                africain. Nous combinons expertise technique, innovation et compréhension des enjeux locaux pour offrir
                des solutions durables.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Team Vision / Testimonials */}
      <section className="bg-gray-50 py-20 dark:bg-gray-950">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl">Vision & Leadership</h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
                Les voix qui guident SYSTEC
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <StaggerItem key={member.name}>
                <motion.div
                  className="group relative h-full rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-500 dark:border-gray-800 dark:bg-gray-950 hover:shadow-xl"
                  whileHover={{ y: -4, transition: { duration: 0.3, ease: appleEase } }}
                >
                  <div className="relative mb-6">
                    <motion.div
                      className="relative mx-auto h-24 w-24 overflow-hidden rounded-full"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3, ease: appleEase }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 rounded-full border-2 border-gray-200 dark:border-gray-700" />
                    </motion.div>
                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 backdrop-blur">
                      <Quote className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                      {member.role}
                    </p>
                  </motion.div>

                  <motion.h3
                    className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {member.name}
                  </motion.h3>

                  <motion.p
                    className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    "{member.quote}"
                  </motion.p>

                  <div className="space-y-2">
                    {member.focus.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 + i * 0.05 }}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20 dark:bg-black">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl">Nos Valeurs</h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
                Ce qui nous guide dans chaque projet
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                title: 'Sécurité',
                description: 'Protection avancée de vos systèmes et données critiques',
              },
              {
                icon: Globe,
                title: 'Innovation',
                description: 'Solutions modernes et évolutives pour votre infrastructure',
              },
              {
                icon: Cpu,
                title: 'Performance',
                description: 'Optimisation et haute disponibilité pour vos services',
              },
              {
                icon: Code,
                title: 'Excellence',
                description: 'Code propre, architecture solide et bonnes pratiques',
              },
            ].map((value, i) => (
              <Reveal key={value.title} delay={i * 0.05}>
                <div className="rounded-3xl border border-gray-200 bg-white p-7 text-center dark:border-gray-800 dark:bg-gray-950">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold">{value.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20 dark:bg-gray-950">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm dark:border-gray-800 dark:bg-gray-950 sm:p-14">
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
              </div>

              <h2 className="text-3xl font-extrabold sm:text-4xl">Prêt à collaborer ?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-300">
                N'hésitez pas à nous contacter si vous souhaitez discuter d'un projet, de technologie ou simplement
                dire bonjour !
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  )
}
