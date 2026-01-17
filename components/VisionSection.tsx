'use client'

import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import { useRef } from 'react'

interface Pillar {
  title: string
  description: string
}

const pillars: Pillar[] = [
  {
    title: 'Indépendance Technologique',
    description: 'Réduction de la dépendance aux infrastructures étrangères',
  },
  {
    title: 'Impact Continental',
    description: 'Solutions adaptées aux réalités africaines',
  },
  {
    title: 'Expertise Locale',
    description: 'Formation et développement des talents africains',
  },
  {
    title: 'Partenaire de Confiance',
    description: 'Expérience prouvée avec gouvernements et institutions',
  },
]

const VisionSection = () => {
  const ref = useRef<HTMLElement>(null)

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Enhanced parallax with more dramatic movement
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.5, 1, 1, 1, 0.5])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const pillarVariants: Variants = {
    hidden: { opacity: 0, y: 32, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section
      ref={ref}
      className="from-primary-900 via-primary-800 to-primary-900 dark:from-primary-950 dark:via-primary-900 dark:to-primary-950 relative overflow-hidden bg-gradient-to-br py-40 text-white"
      id="vision"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Decorative elements */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.1, 0]) }}
        className="bg-primary-500/20 absolute top-0 left-0 h-96 w-96 rounded-full blur-3xl"
      />
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.1, 0]) }}
        className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 mx-auto max-w-5xl px-8 text-center"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.h2
            variants={textVariants}
            className="mb-6 text-5xl leading-tight font-bold tracking-tight"
          >
            Bâtir la Souveraineté Numérique Africaine
          </motion.h2>

          <motion.p variants={textVariants} className="mb-6 text-xl leading-relaxed opacity-90">
            SYS TECH ne se limite pas à fournir des services informatiques. Nous construisons
            l'infrastructure critique qui permettra à l'Afrique de contrôler son propre destin
            numérique.
          </motion.p>

          <motion.p variants={textVariants} className="mb-12 text-xl leading-relaxed opacity-90">
            Basés au Burkina Faso avec une vision continentale, nous combinons expertise technique
            éprouvée, expérience institutionnelle et engagement à long terme pour créer les
            fondations numériques dont l'Afrique a besoin.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={pillarVariants}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                }}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
              >
                {/* Icon placeholder - using gradient */}
                <div className="from-primary-400 mx-auto mb-4 h-12 w-12 rounded-full bg-gradient-to-br to-purple-500 opacity-80 group-hover:opacity-100" />

                <h4 className="mb-3 text-lg font-bold">{pillar.title}</h4>
                <p className="text-sm leading-relaxed opacity-90">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default VisionSection
