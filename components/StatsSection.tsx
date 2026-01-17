'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

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

const StatsSection = () => {
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
      {/* Decorative background */}
      <div className="bg-grid-pattern absolute inset-0 opacity-5" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-120px' }}
        variants={containerVariants}
        className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-16 px-8 text-center md:grid-cols-4"
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
            {/* Glow effect on hover */}
            <motion.div className="from-primary-500/20 absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br to-purple-500/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />

            <h3 className="from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 mb-3 bg-gradient-to-br bg-clip-text text-7xl font-bold text-transparent">
              {stat.value}
              {stat.suffix}
            </h3>
            <p className="text-base font-semibold tracking-wider text-gray-700 uppercase dark:text-gray-300">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default StatsSection
