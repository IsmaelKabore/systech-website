'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useMemo, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from 'framer-motion'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Shield,
  Globe,
  Cpu,
  Code,
  CheckCircle2,
} from 'lucide-react'

const appleEase = [0.25, 0.1, 0.25, 1] as const

export default function HomePage() {
  return (
    <main className="relative w-full bg-white text-gray-900 dark:bg-black dark:text-white">
      <Hero />
      <TrustBar />
      <ServicesCarousel />
      <Process />
      <Stats />
      <CTA />
    </main>
  )
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">{children}</div>
}

function Reveal({ children, delay = 0, y = 18 }: { children: React.ReactNode; delay?: number; y?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: appleEase, delay }}>
      {children}
    </motion.div>
  )
}

function Hero() {
  return (
    <section className="relative bg-white pt-28 pb-20 dark:bg-black sm:pt-32">
      {/* background soft blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-200/25 blur-3xl dark:bg-cyan-500/10" />
        <div className="absolute top-40 right-[-120px] h-[420px] w-[420px] rounded-full bg-blue-200/20 blur-3xl dark:bg-blue-500/10" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-2 text-sm font-semibold text-gray-700 backdrop-blur dark:border-gray-800 dark:bg-black/40 dark:text-gray-300">
                <Shield className="h-4 w-4" />
                Souveraineté • Sécurité • Infrastructure
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Infrastructure numérique souveraine pour l'Afrique
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
                SYS TECH sécurise les systèmes critiques, déploie des réseaux, et accompagne la transformation numérique avec une approche fiable, moderne et mesurable.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.99]">
                  Planifier une consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>

                <Link href="#services" className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-bold text-gray-900 shadow-sm transition hover:bg-gray-50 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
                  Découvrir nos services
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
                <Bullet text="SOC & réponse aux incidents" />
                <Bullet text="Réseaux fibre & backbone" />
                <Bullet text="Data center & cloud hybride" />
                <Bullet text="Audit, conformité & gouvernance" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08} y={24}>
            <HeroVisual />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-indigo-500/20 blur-xl" />
      <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-950">
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Tableau de pilotage</p>
            <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-bold text-green-600 dark:text-green-400">24/7 Monitoring</span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <MiniCard icon={Shield} title="Sécurité" value="Risque ↓" desc="Zero-Trust, détection & réponse" />
            <MiniCard icon={Globe} title="Réseau" value="Latence ↓" desc="Backbone & interconnexions" />
            <MiniCard icon={Cpu} title="Infrastructure" value="Uptime ↑" desc="Haute dispo & résilience" />
            <MiniCard icon={Code} title="Logiciel" value="Ops ↑" desc="Observabilité & automatisation" />
          </div>

          <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-black">
            <p className="text-sm font-semibold">Objectif</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Construire une infrastructure souveraine, sécurisée et scalable — pensée pour les réalités du terrain.
            </p>
          </div>
        </div>
        <div className="h-10 bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-indigo-500/10" />
      </div>
    </div>
  )
}

/* ------------------------ TRUST BAR ------------------------ */

function TrustBar() {
  return (
    <section className="border-t border-gray-200 bg-white py-10 dark:border-gray-800 dark:bg-black">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Partenaire de confiance
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Gouvernements • Banques • Entreprises • Institutions
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Tag>Audit & conformité</Tag>
              <Tag>Cybersécurité</Tag>
              <Tag>Réseaux</Tag>
              <Tag>Cloud/Datacenter</Tag>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* ------------------------ SERVICES (carousel full-screen) ------------------------ */

type Services = {
  title: string
  description: string
  image: string
  icon: React.ComponentType<{ className?: string }>
  bullets: string[]
  href: string
}

function ServicesCarousel() {
  const [index, setIndex] = useState(0)

  const services = useMemo<Services[]>(
    () => [
      {
        title: 'Cybersécurité avancée',
        description:
          'SOC, Zero-Trust, pentest, réponse aux incidents, durcissement. Une posture sécurité mesurable et durable.',
        image:
          'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=2400&auto=format&fit=crop&q=80',
        icon: Shield,
        bullets: ['SOC 24/7', 'Threat intel', 'Réponse incident', 'Durcissement & audit'],
        href: '/services',
      },
      {
        title: 'Réseaux & fibre optique',
        description:
          'Conception, déploiement, backbone, supervision, optimisation QoS — pour des liaisons stables à grande échelle.',
        image:
          'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2400&auto=format&fit=crop&q=80',
        icon: Globe,
        bullets: ['Backbone', 'Supervision', 'Interconnexion', 'QoS & performance'],
        href: '/services',
      },
      {
        title: 'Data center & cloud hybride',
        description:
          'Infrastructure haute disponibilité, sauvegarde, reprise, conformité. Du solide, du redondant, du scalable.',
        image:
          'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=2400&auto=format&fit=crop&q=80',
        icon: Cpu,
        bullets: ['HA / DR', 'Sauvegarde', 'Cloud hybride', 'Sécurité infra'],
        href: '/services',
      },
      {
        title: 'Logiciels & intégration',
        description:
          'Applications métiers, APIs, automatisation et observabilité. On relie les systèmes, on réduit la friction.',
        image:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?w=2400&auto=format&fit=crop&q=80',
        icon: Code,
        bullets: ['APIs', 'Automatisation', 'Observabilité', 'Intégration SI'],
        href: '/services',
      },
      {
  title: "Fourniture d’équipement informatique",
  description:
    "Approvisionnement, installation et configuration de matériel informatique professionnel adapté aux besoins des entreprises.",
  image:
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=2400&q=80",
  icon: Shield,
  bullets: [
    "Ordinateurs & serveurs",
    "Des equipements connectés intelligents",
    "Équipements réseau",
    "Installation & configuration",
    "Des équipements Mobi IoT "
  ],
  href: "/services",
},
    ],
    []
  )

  const prev = () => setIndex((i) => (i - 1 + services.length) % services.length)
  const next = () => setIndex((i) => (i + 1) % services.length)

  return (
    <section id="services" className="bg-white py-20 dark:bg-black">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Nos services</h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
              Des cartes full-screen, visuelles, avec un slider futuriste — exactement ce que tu veux.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mt-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-black">
            <div className="relative h-[72vh] min-h-[520px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -40, scale: 0.98 }}
                  transition={{ duration: 0.55, ease: appleEase }}
                  className="absolute inset-0"
                >
                  {/* image */}
                  <div className="absolute inset-0">
                    <Image
                      src={services[index].image}
                      alt={services[index].title}
                      fill
                      priority={index === 0}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20 dark:from-black/80 dark:via-black/55" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  </div>

                  {/* content */}
                  <div className="relative z-10 flex h-full w-full flex-col justify-end p-7 sm:p-10 lg:p-14">
                    <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                      {(() => {
                        const Icon = services[index].icon
                        return <Icon className="h-4 w-4" />
                      })()}
                      <div className="absolute top-8 left-8 text-white text-sm"></div>
                      Service {index + 1} / {services.length}
                    </div>

                    <h3 className="max-w-2xl text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-5xl">
                      {services[index].title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                      {services[index].description}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {services[index].bullets.map((b) => (
                        <div
                          key={b}
                          className="rounded-2xl border border-white/15 bg-white/5 p-4 text-sm text-white/90 backdrop-blur"
                        >
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                            <span className="font-semibold">{b}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-4">
                      <Link
                        href={services[index].href}
                        className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-gray-900 transition hover:bg-white/90"
                      >
                        Voir les détails <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>

                      <div className="ml-auto flex items-center gap-3">
                        <button
                          onClick={prev}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/15"
                          aria-label="Previous"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={next}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/15"
                          aria-label="Next"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    {/* dots */}
                    <div className="mt-5 flex gap-2">
                      {services.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setIndex(i)}
                          className={`h-2 rounded-full transition-all ${
                            i === index ? 'w-10 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                          }`}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

/* ------------------------ STORY SECTIONS (Natural Scroll) ------------------------ */

type StoryStep = {
  eyebrow: string
  title: string
  body: string
  image: string
}

function AppleStickyStory() {
  const steps: StoryStep[] = useMemo(
    () => [
      {
        eyebrow: 'CYBERSÉCURITÉ',
        title: 'Protection avancée de vos systèmes.',
        body:
          'SOC 24/7, Zero-Trust, pentest, réponse aux incidents, durcissement. Une posture sécurité mesurable et durable pour protéger vos actifs critiques.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=2400&auto=format&fit=crop&q=80',
      },
      {
        eyebrow: 'MAINTENANCE INFORMATIQUE',
        title: 'Support technique de qualité.',
        body:
          'Maintenance préventive, résolution d\'incidents, optimisation des performances. Un accompagnement continu pour garantir la stabilité de votre infrastructure.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=2400&auto=format&fit=crop&q=80',
      },
      {
        eyebrow: 'RÉSEAU & FIBRE OPTIQUE',
        title: 'Connexions haute performance.',
        body:
          'Conception, déploiement, backbone, supervision, optimisation QoS. Des liaisons stables et rapides à grande échelle pour connecter vos sites.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2400&auto=format&fit=crop&q=80',
      },
      {
        eyebrow: 'LOGISTIQUE & INFRASTRUCTURE',
        title: 'Gestion complète de votre infrastructure.',
        body:
          'Data center, cloud hybride, haute disponibilité, sauvegarde, reprise. Une infrastructure solide, redondante et scalable pensée pour vos besoins.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=2400&auto=format&fit=crop&q=80',
      },
    ],
    []
  )

  return (
    <section className="relative bg-gray-950 text-white">
      <Container>
        <div className="py-20 lg:py-32">
          {steps.map((step, index) => (
            <StoryStepCard key={step.title} step={step} index={index} isLast={index === steps.length - 1} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function StoryStepCard({ step, index, isLast }: { step: StoryStep; index: number; isLast: boolean }) {
  return (
    <div className={isLast ? 'mb-0' : 'mb-32 lg:mb-40'}>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* TEXT - alternates left/right */}
        <motion.div
          className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: appleEase, delay: 0.1 }}
        >
          <motion.p
            className="text-xs font-black tracking-widest text-cyan-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: appleEase }}
          >
            {step.eyebrow}
          </motion.p>
          <motion.h3
            className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: appleEase, delay: 0.15 }}
          >
            {step.title}
          </motion.h3>
          <motion.p
            className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: appleEase, delay: 0.2 }}
          >
            {step.body}
          </motion.p>
        </motion.div>

        {/* IMAGE - alternates right/left */}
        <motion.div
          className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: appleEase, delay: 0.1 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-500/25 to-blue-500/20 blur-xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black">
              <div className="relative h-[60vh] min-h-[400px] sm:h-[70vh] sm:min-h-[520px]">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


/* ------------------------ PROCESS / STATS / CTA ------------------------ */

function Process() {
  const steps = [
    { title: 'Diagnostic', desc: 'Cartographie, risques, contraintes, objectifs, quick wins.' },
    { title: 'Architecture', desc: 'Design réseau/sécu, choix technos, plan de déploiement, SLA.' },
    { title: 'Déploiement', desc: 'Mise en place, tests, monitoring, documentation et transfert.' },
    { title: 'Support', desc: 'Supervision, conformité, amélioration continue, formation.' },
  ]

  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-950">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Comment on travaille</h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
              Simple, carré, documenté. Pas de magie — juste de l’ingénierie.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="rounded-3xl border border-gray-200 bg-white p-7 dark:border-gray-800 dark:bg-black">
                <p className="text-xs font-black uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Étape {i + 1}
                </p>
                <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Stats() {
  const stats = [
    { value: '7', label: "Domaines d’expertise" },
    { value: '15+', label: 'Pays visés' },
    { value: '24/7', label: 'Support & monitoring' },
    { value: '99.9%', label: 'Objectif disponibilité' },
  ]

  return (
    <section className="bg-white py-16 dark:bg-black">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="rounded-3xl border border-gray-200 bg-white p-7 text-center dark:border-gray-800 dark:bg-gray-950">
                <p className="text-4xl font-extrabold">{s.value}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

function CTA() {
  return (
    <section className="bg-white py-20 dark:bg-black">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm dark:border-gray-800 dark:bg-gray-950 sm:p-14">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
            </div>

            <h2 className="text-3xl font-extrabold sm:text-4xl">Prêt à sécuriser votre infrastructure ?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-300">
              On peut démarrer par un diagnostic rapide, puis te proposer une roadmap technique claire.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100"
              >
                Nous contacter <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/apropos"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-bold text-gray-900 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900"
              >
                À propos
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

/* ------------------------ small UI components ------------------------ */

function Bullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 rounded-xl border border-gray-200 bg-white/70 p-3 text-sm text-gray-700 backdrop-blur dark:border-gray-800 dark:bg-black/30 dark:text-gray-200">
      <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-600 dark:text-cyan-400" />
      <span>{text}</span>
    </div>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-bold text-gray-700 dark:border-gray-800 dark:bg-black dark:text-gray-300">
      {children}
    </span>
  )
}

function MiniCard({
  icon: Icon,
  title,
  value,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  value: string
  desc: string
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold">{title}</p>
        <Icon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
      </div>
      <p className="mt-3 text-2xl font-extrabold">{value}</p>
      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{desc}</p>
    </div>
  )
}
