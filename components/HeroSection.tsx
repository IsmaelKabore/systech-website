'use client'

import { motion, Variants } from 'framer-motion'
import Link from './Link'

const HeroSection = () => {
  // Animation variants following Apple's philosophy
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
        ease: [0.25, 0.1, 0.25, 1], // Apple-style easeOut
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
      className="relative mx-auto max-w-7xl overflow-hidden px-8 pt-40 pb-24 text-center"
    >
      {/* Subtle gradient background */}
      <div className="from-primary-50/30 dark:from-primary-950/20 absolute inset-0 -z-10 bg-gradient-to-b to-transparent" />

      <motion.h1
        variants={headlineVariants}
        className="mx-auto mb-8 max-w-5xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-7xl leading-tight font-bold tracking-tight text-transparent md:text-8xl dark:from-gray-50 dark:via-gray-100 dark:to-gray-50"
      >
        Infrastructure numérique souveraine pour l'Afrique
      </motion.h1>

      <motion.p
        variants={paragraphVariants}
        className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-400"
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
          <Link
            href="#contact"
            className="group from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 relative inline-block overflow-hidden rounded-xl bg-gradient-to-r px-10 py-5 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:shadow-2xl"
          >
            <span className="relative z-10">Planifier une consultation</span>
            <motion.div
              className="from-primary-700 to-primary-800 absolute inset-0 bg-gradient-to-r"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>

        <motion.div
          variants={buttonVariants}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="#services"
            className="hover:border-primary-500 dark:hover:border-primary-400 inline-block rounded-xl border-2 border-gray-300 bg-white/80 px-10 py-5 text-lg font-bold text-gray-900 backdrop-blur-sm transition-all duration-300 hover:bg-white dark:border-gray-600 dark:bg-gray-800/80 dark:text-gray-100"
          >
            Découvrir nos solutions
          </Link>
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

export default HeroSection
