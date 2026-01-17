'use client'

import { motion, Variants } from 'framer-motion'
import Link from './Link'
import { useState } from 'react'

const CTASection = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.95 },
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

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-40 text-center dark:from-gray-950 dark:to-gray-900"
      id="contact"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="bg-primary-500 absolute top-0 left-1/4 h-96 w-96 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-purple-500 blur-3xl"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-120px' }}
        variants={containerVariants}
        className="relative z-10 mx-auto max-w-4xl px-8"
      >
        <motion.h2
          variants={itemVariants}
          className="mb-8 text-6xl leading-tight font-bold tracking-tight text-gray-900 dark:text-gray-50"
        >
          Sécurisez Votre Infrastructure Numérique
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mb-12 text-xl leading-relaxed text-gray-600 dark:text-gray-400"
        >
          Que vous soyez institution gouvernementale, banque, grande entreprise ou startup
          innovante, SYS TECH vous accompagne dans votre transformation numérique.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <motion.div
            variants={buttonVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="mailto:contact@systech.bf"
              className="group from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 relative inline-block overflow-hidden rounded-xl bg-gradient-to-r px-10 py-5 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-2xl"
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
              className="hover:border-primary-500 dark:hover:border-primary-400 inline-block rounded-xl border-2 border-gray-300 bg-white/50 px-10 py-5 text-lg font-bold text-gray-900 backdrop-blur-sm transition-all duration-300 hover:bg-white dark:border-gray-600 dark:bg-gray-800/50 dark:text-gray-100"
            >
              Découvrir nos solutions
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CTASection
