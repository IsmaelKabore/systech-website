'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const appleEasing = [0.25, 0.1, 0.25, 1] as const

export default function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8])

  return (
    <div ref={sectionRef} className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#1E3A8A] via-[#0A1F44] to-black py-32">
      {/* Animated particle field */}
      <ParticleField />

      {/* Matrix rain effect */}
      <MatrixRain />

      <div className="container relative z-10 mx-auto w-full px-[5%]">
        <motion.div
          style={{ scale, opacity }}
          className="mx-auto w-full text-center"
        >
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: appleEasing }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2
              className="mb-8 bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-7xl font-black text-transparent md:text-9xl"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Sécurisez Votre Infrastructure
            </motion.h2>

            <motion.p
              className="mb-12 text-2xl text-blue-200 md:text-3xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Rejoignez les leaders africains qui font confiance à SYS TECH pour leurs systèmes critiques
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-12 py-6 text-xl font-bold text-white shadow-2xl shadow-blue-500/50 transition-all duration-300 hover:shadow-blue-500/80"
                >
                  <span className="relative z-10">Planifier une Consultation</span>
                  <motion.svg
                    className="relative z-10 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </motion.svg>

                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.5 }}
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-3 rounded-full border-2 border-blue-400 bg-transparent px-12 py-6 text-xl font-bold text-blue-300 transition-all duration-300 hover:bg-blue-400/10"
                >
                  <span>Découvrir nos Solutions</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {[
              { value: '7', label: 'Domaines d\'Expertise' },
              { value: '15+', label: 'Pays Visés' },
              { value: '100%', label: 'Vision Africaine' },
              { value: '24/7', label: 'Support Disponible' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="group relative rounded-2xl border border-blue-400/30 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 backdrop-blur-sm"
                whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.6)' }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="mb-2 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-5xl font-black text-transparent"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-blue-200">{stat.label}</div>

                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-blue-400/0 transition-colors duration-300 group-hover:bg-blue-400/5"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="mb-8 text-blue-300">Ils nous font confiance</p>
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-12 w-32 rounded-lg bg-gradient-to-r from-blue-400/20 to-cyan-400/20"
                  whileHover={{ opacity: 1, filter: 'grayscale(0)' }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

// Particle Field Component
function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-blue-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -1000],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            delay: Math.random() * 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

// Matrix Rain Effect
function MatrixRain() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-10">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 w-px"
          style={{
            left: `${(i / 20) * 100}%`,
            height: '100%',
            background: 'linear-gradient(transparent, #3B82F6, transparent)',
          }}
          animate={{
            y: ['-100%', '100%'],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
