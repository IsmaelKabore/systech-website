'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import type { Variants, MotionValue } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Sparkles, Cpu, Shield, Code, Zap, Globe } from 'lucide-react'

// ============================================
// COMPOSANT PRINCIPAL : LANDING PAGE
// ============================================

export default function LandingPage() {
  return (
    <div className="w-full bg-white text-gray-900 dark:bg-black dark:text-white">
      {/* Hero Section */}
      <HeroSectionEnhanced />
      {/* Stats Section */}
      <StatsSection />
      {/* Cards Section */}
      <HorizontalCardsSection />
      {/* Sticky Transforming Text Section */}
      <StickyTransformSection />
      {/* Features Grid Section */}
      <FeaturesSection />
      {/* Final CTA Section */}
      <CTASection />
    </div>
  )
}

// =========================
// Enhanced Hero Section (merged from HeroSection.tsx)
// =========================
function HeroSectionEnhanced() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const headlineVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const trustBarVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative w-full overflow-hidden px-[5%] pt-40 pb-24 text-center"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyan-50/30 to-transparent dark:from-cyan-950/20" />

      <motion.h1
        variants={headlineVariants}
        className="mx-auto mb-8 w-full bg-gradient-to-br from-gray-900 via-cyan-900 to-gray-900 bg-clip-text text-7xl leading-tight font-bold tracking-tight text-transparent md:text-8xl dark:from-gray-50 dark:via-cyan-200 dark:to-gray-50"
      >
        Infrastructure numérique souveraine pour l'Afrique
      </motion.h1>

      <motion.p
        variants={paragraphVariants}
        className="mx-auto mb-10 w-full max-w-4xl text-xl leading-relaxed text-gray-600 dark:text-gray-400"
      >
        SYS TECH sécurise les systèmes critiques, déploie des infrastructures réseau et accompagne
        la transformation numérique des institutions et entreprises africaines.
      </motion.p>

      <motion.div
        variants={containerVariants}
        className="mb-20 flex flex-wrap items-center justify-center gap-6"
      >
        <motion.div
          variants={buttonVariants}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <a
            href="#contact"
            className="group relative inline-block overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-5 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:shadow-2xl dark:from-cyan-400 dark:to-blue-500"
          >
            <span className="relative z-10">Planifier une consultation</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </a>
        </motion.div>

        <motion.div
          variants={buttonVariants}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <a
            href="#services"
            className="inline-block rounded-xl border-2 border-gray-300 bg-white/80 px-10 py-5 text-lg font-bold text-gray-900 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500 hover:bg-white dark:border-gray-600 dark:bg-gray-800/80 dark:text-gray-100 dark:hover:border-cyan-400"
          >
            Découvrir nos solutions
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        variants={trustBarVariants}
        className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-700"
      >
        <p className="mb-6 text-sm font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
          Partenaire de confiance des institutions africaines
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-base font-medium text-gray-500 dark:text-gray-400">
          <span>Gouvernements</span>
          <span>•</span>
          <span>Banques</span>
          <span>•</span>
          <span>Entreprises</span>
          <span>•</span>
          <span>Institutions</span>
        </div>
      </motion.div>
    </motion.section>
  )
}

// =========================
// Stats Section (merged from StatsSection.tsx)
// =========================
function StatsSection() {
  interface Stat {
    value: string
    label: string
    prefix?: string
    suffix?: string
  }

  const stats: Stat[] = [
    { value: '7', label: "Domaines d'expertise", suffix: '' },
    { value: '15', label: 'Pays visés', suffix: '+' },
    { value: '100', label: 'Vision africaine', suffix: '%' },
    { value: '24', label: 'Support disponible', suffix: '/7' },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const statVariants: Variants = {
    hidden: { opacity: 0, y: 32, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-32 dark:from-gray-900 dark:to-gray-950">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-120px' }}
        variants={containerVariants}
        className="relative z-10 mx-auto grid w-full grid-cols-2 gap-16 px-6 text-center md:grid-cols-4 md:px-12"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={statVariants}
            whileHover={{
              scale: 1.1,
              y: -8,
              transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
            }}
            className="group relative"
          >
            <h3 className="mb-3 text-6xl font-bold text-gray-900 dark:text-white md:text-7xl">
              {stat.value}
              {stat.suffix}
            </h3>
            <p className="text-base font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

// =========================================
// Horizontal Scrolling Cards Section
// =========================================
function HorizontalCardsSection() {
  const [currentCard, setCurrentCard] = useState(0)

  const cards = [
    {
      title: 'Cybersécurité Avancée',
      description: 'Protection des infrastructures critiques avec SOC 24/7 et threat intelligence',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
      color: 'from-gray-500/10 to-gray-700/10',
    },
    {
      title: 'Data Centers Souverains',
      description: 'Infrastructure Tier III avec haute disponibilité et conformité régionale',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      color: 'from-gray-600/10 to-gray-800/10',
    },
    {
      title: 'Réseaux Fibre Optique',
      description: 'Backbone continental à très haut débit reliant 15+ pays africains',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      color: 'from-gray-700/10 to-gray-900/10',
    },
  ]

  const nextCard = () => setCurrentCard((prev) => (prev + 1) % cards.length)
  const prevCard = () => setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length)

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white py-32 dark:bg-black">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-5xl font-bold md:text-6xl">Nos Expertises</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Des solutions technologiques complètes pour votre infrastructure
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-[5%]">
        {/* Collins-Style Carousel Container */}
        <div className="relative h-[600px] w-full overflow-visible">
          <div className="relative h-full w-full" style={{ perspective: '2500px' }}>
            {cards.map((card, index) => {
              const offset = index - currentCard;
              const absOffset = Math.abs(offset);
              const isActive = offset === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    x: `${offset * 45}%`,
                    rotateY: offset * 8,
                    scale: isActive ? 1 : 0.85,
                    opacity: isActive ? 1 : 0.4,
                    z: isActive ? 0 : -Math.abs(offset) * 150,
                  }}
                  transition={{ 
                    duration: 0.7, 
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    zIndex: 10 - absOffset,
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    marginLeft: '-350px',
                    marginTop: '-225px',
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                  className="h-[450px] w-[700px]"
                >
                  <div className={`relative h-full w-full overflow-hidden rounded-3xl bg-gradient-to-br ${card.color} border border-gray-200 shadow-2xl dark:border-gray-800`}>
                    {/* Animated gradient overlay */}
                    <motion.div
                      className="absolute inset-0 opacity-30"
                      animate={{
                        background: [
                          'linear-gradient(45deg, transparent, rgba(255,255,255,0.15), transparent)',
                          'linear-gradient(225deg, transparent, rgba(255,255,255,0.15), transparent)',
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover opacity-50 dark:opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-black dark:via-black/50" />
                    <div className="absolute bottom-0 left-0 right-0 p-10">
                      <h3 className="mb-3 text-4xl font-bold text-gray-900 dark:text-white">
                        {card.title}
                      </h3>
                      <p className="text-lg text-gray-700 dark:text-gray-200">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prevCard}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 backdrop-blur-sm transition-all hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentCard
                    ? 'w-8 bg-gray-900 dark:bg-white'
                    : 'w-2 bg-gray-300 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextCard}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 backdrop-blur-sm transition-all hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}


// =========================================
// Sticky Transforming Text Section
// =========================================

function StickyTransformSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  // Scroll basé sur la section elle-même
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  // =========================
  // PHASE 1 - Cybersécurité
  // =========================
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0])
  const y1       = useTransform(scrollYProgress, [0, 0.25], [0, -60])
  const scale1   = useTransform(scrollYProgress, [0, 0.25], [1, 0.92])

  // =========================
  // PHASE 2 - Data Centers
  // =========================
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.6], [0, 1, 1, 0])
  const y2       = useTransform(scrollYProgress, [0.25, 0.5], [60, -60])
  const scale2   = useTransform(scrollYProgress, [0.25, 0.5], [0.92, 1])

  // =========================
  // PHASE 3 - Fibre Optique
  // =========================
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 1], [0, 1, 1])
  const y3       = useTransform(scrollYProgress, [0.6, 1], [60, 0])
  const scale3   = useTransform(scrollYProgress, [0.6, 1], [0.92, 1])

  // Image parallax
  const imageY     = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-[#0a0a0f]">
      
      {/* ================= BACKGROUND ================= */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(59,130,246,0.15), transparent 60%)',
            'radial-gradient(circle at 80% 70%, rgba(6,182,212,0.15), transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.15), transparent 60%)',
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* ================= STICKY ================= */}
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <div className="grid w-full max-w-7xl grid-cols-1 gap-16 px-[6%] lg:grid-cols-2">

          {/* ========= LEFT TEXT ========= */}
          <div className="relative h-[420px]">
            {/* Phase 1 */}
            <motion.div style={{ opacity: opacity1, y: y1, scale: scale1 }} className="absolute inset-0">
              <p className="text-xs tracking-widest text-blue-400">INFRASTRUCTURE CRITIQUE</p>
              <h2 className="mt-4 text-6xl font-bold text-white whitespace-pre-line">
                Cybersécurité{'\n'}Renforcée
              </h2>
              <p className="mt-6 max-w-xl text-gray-400">
                SOC 24/7, Zero-Trust, réponse aux incidents en temps réel.
              </p>
            </motion.div>

            {/* Phase 2 */}
            <motion.div style={{ opacity: opacity2, y: y2, scale: scale2 }} className="absolute inset-0">
              <p className="text-xs tracking-widest text-cyan-400">SOUVERAINETÉ NUMÉRIQUE</p>
              <h2 className="mt-4 text-6xl font-bold text-white whitespace-pre-line">
                Data Centers{'\n'}Tier III
              </h2>
              <p className="mt-6 max-w-xl text-gray-400">
                Uptime 99.99%, conformité régionale, souveraineté totale.
              </p>
            </motion.div>

            {/* Phase 3 */}
            <motion.div style={{ opacity: opacity3, y: y3, scale: scale3 }} className="absolute inset-0">
              <p className="text-xs tracking-widest text-indigo-400">CONNECTIVITÉ</p>
              <h2 className="mt-4 text-6xl font-bold text-white whitespace-pre-line">
                Fibre Optique{'\n'}Continentale
              </h2>
              <p className="mt-6 max-w-xl text-gray-400">
                Backbone panafricain à très haut débit.
              </p>
            </motion.div>
          </div>

          {/* ========= RIGHT IMAGE ========= */}
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-500/40 via-cyan-500/40 to-indigo-500/40 blur-xl" />
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200"
              alt="Infrastructure"
              className="relative h-full w-full rounded-3xl object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// =========================================
// Features Section
// =========================================
function FeaturesSection() {
  const features = [
    {
      icon: Cpu,
      title: 'Infrastructure Moderne',
      description: 'Architecture cloud-native scalable et résiliente pour vos applications critiques',
    },
    {
      icon: Shield,
      title: 'Sécurité Maximale',
      description: 'Protection multicouche avec SOC 24/7 et conformité aux normes internationales',
    },
    {
      icon: Zap,
      title: 'Performance Optimale',
      description: 'Latence minimale et débit garanti grâce à notre backbone continental',
    },
    {
      icon: Code,
      title: 'Expertise Locale',
      description: 'Équipe africaine hautement qualifiée avec expérience gouvernementale',
    },
    {
      icon: Globe,
      title: 'Couverture Pan-Africaine',
      description: 'Présence dans 15+ pays avec points de présence stratégiques',
    },
    {
      icon: Sparkles,
      title: 'Innovation Continue',
      description: 'Veille technologique et adoption des meilleures pratiques internationales',
    },
  ]

  return (
    <section className="relative w-full bg-white py-32 dark:bg-black">
      <div className="mx-auto max-w-7xl px-[5%]">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-5xl font-bold md:text-6xl">Pourquoi SYS TECH ?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            L'excellence technologique au service de l'Afrique souveraine
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                rotateZ: [0, -1, 1, 0],
                transition: { duration: 0.5 } 
              }}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-8 transition-all hover:border-gray-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
            >
              {/* Animated gradient overlay */}
              <motion.div 
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100"
                animate={{
                  background: [
                    'radial-gradient(circle at 0% 0%, rgba(100,100,100,0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 100% 100%, rgba(100,100,100,0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 0% 100%, rgba(100,100,100,0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 100% 0%, rgba(100,100,100,0.1) 0%, transparent 50%)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <motion.div 
                className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-900 dark:bg-white"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <feature.icon className="h-8 w-8 text-white dark:text-black" />
              </motion.div>

              <h3 className="mb-3 text-2xl font-bold">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>

              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-100 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-gray-800" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// =========================================
// CTA Section
// =========================================
function CTASection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white py-32 dark:bg-black">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(100,100,100,0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(100,100,100,0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(100,100,100,0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 20%, rgba(100,100,100,0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(100,100,100,0.4) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="relative mx-auto max-w-6xl px-[5%] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-6xl font-bold md:text-7xl"
        >
          Prêt à sécuriser votre infrastructure ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 text-2xl text-gray-600 dark:text-gray-400"
        >
          Discutons de votre projet et construisons ensemble l'avenir numérique de l'Afrique
        </motion.p>
        <motion.a
          href="/contact"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ 
            scale: 1.05,
            rotateZ: [0, -2, 2, -1, 1, 0],
            transition: { duration: 0.6 }
          }}
          animate={{
            y: [0, -5, 0],
          }}
          className="inline-block rounded-full bg-gray-900 px-12 py-5 text-lg font-bold text-white transition-all hover:bg-gray-800 hover:shadow-2xl dark:bg-white dark:text-black dark:hover:bg-gray-100"
        >
          Demander une consultation gratuite
        </motion.a>
      </div>
    </section>
  )
}