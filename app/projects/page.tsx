'use client'

import { motion, Variants, Easing } from 'framer-motion'
import { useEffect, useRef } from 'react'
import NextImage from 'next/image'
import NextLink from 'next/link'

// Apple-style easing constant (typed correctly for Framer Motion)
const appleEase = [0.25, 0.1, 0.25, 1] as Easing

// ============================================================================
// IMAGE COMPONENT
// ============================================================================

const basePath = process.env.BASE_PATH

const Image = ({ src, ...rest }: any) => (
  <NextImage src={`${basePath || ''}${src}`} {...rest} />
)

// ============================================================================
// LINK COMPONENT
// ============================================================================

const Link = ({ href, children, ...rest }: any) => {
  return <NextLink href={href} {...rest}>{children}</NextLink>
}

// ============================================================================
// CARD COMPONENT (merged from @/components/Card.tsx)
// ============================================================================

const Card = ({ title, description, imgSrc, href }) => (
  <div className="group relative h-full overflow-hidden rounded-2xl bg-white shadow-lg shadow-gray-200/50 transition-all duration-500 dark:bg-gray-800/50 dark:shadow-gray-900/50 hover:shadow-2xl hover:shadow-blue-200/30 dark:hover:shadow-blue-900/30">
    {/* Gradient Border Effect */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-blue-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

    {/* Image Container */}
    {imgSrc && (
      <div className="relative h-64 overflow-hidden">
        {href ? (
          <Link href={href} aria-label={`Lien vers ${title}`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: appleEase }}
              className="h-full w-full"
            >
              <Image
                alt={title}
                src={imgSrc}
                className="h-full w-full object-cover transition-all duration-700 group-hover:brightness-110"
                width={800}
                height={600}
              />
            </motion.div>
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="h-full w-full object-cover transition-all duration-700 group-hover:brightness-110"
            width={800}
            height={600}
          />
        )}

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* AI Badge */}
        <motion.div
          className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-xs font-semibold text-white shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          IA Intégrée
        </motion.div>
      </div>
    )}

    {/* Content */}
    <div className="relative p-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] as any }}
      >
        <h2 className="mb-4 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 bg-clip-text text-2xl leading-tight font-bold text-transparent dark:from-white dark:via-blue-200 dark:to-gray-100">
          {href ? (
            <Link
              href={href}
              aria-label={`Lien vers ${title}`}
              className="transition-all duration-300 hover:tracking-wide"
            >
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
      </motion.div>

      <motion.p
        className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {description}
      </motion.p>

      {href && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href={href}
            className="group/link inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 dark:text-blue-400 hover:gap-4"
            aria-label={`Lien vers ${title}`}
          >
            <span>Découvrir le projet</span>
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover/link:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </motion.div>
      )}

      {/* Neural Network Pattern Overlay */}
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 opacity-0 transition-opacity duration-500 group-hover:opacity-10">
        <svg viewBox="0 0 100 100" className="h-full w-full text-blue-500">
          <circle cx="20" cy="20" r="2" fill="currentColor" />
          <circle cx="50" cy="30" r="2" fill="currentColor" />
          <circle cx="80" cy="25" r="2" fill="currentColor" />
          <circle cx="35" cy="60" r="2" fill="currentColor" />
          <circle cx="70" cy="70" r="2" fill="currentColor" />
          <line x1="20" y1="20" x2="50" y2="30" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="30" x2="80" y2="25" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="30" x2="35" y2="60" stroke="currentColor" strokeWidth="0.5" />
          <line x1="35" y1="60" x2="70" y2="70" stroke="currentColor" strokeWidth="0.5" />
          <line x1="80" y1="25" x2="70" y2="70" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
    </div>
  </div>
)

// Animation variants
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
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: appleEase,
    },
  },
}

const titleVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: appleEase,
    },
  },
}

// Neural Network Node Component
const NeuralNode = ({ delay = 0, x, y }: { delay?: number; x: number; y: number }) => (
  <motion.div
    className="absolute h-3 w-3 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-500/50"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [0, 1.2, 1],
      opacity: [0, 1, 0.7],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatDelay: 3,
      ease: appleEase,
    }}
  />
)

// Connection Line Component
const NeuralConnection = ({
  x1,
  y1,
  x2,
  y2,
  delay = 0,
}: {
  x1: number
  y1: number
  x2: number
  y2: number
  delay?: number
}) => (
  <motion.line
    x1={`${x1}%`}
    y1={`${y1}%`}
    x2={`${x2}%`}
    y2={`${y2}%`}
    stroke="url(#blueGradient)"
    strokeWidth="2"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 0.3 }}
    transition={{
      duration: 1.5,
      delay,
      ease: appleEase,
    }}
  />
)

export default async function Projects({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Particle system for AI effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = 600

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`
        ctx.fill()

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - distance / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationId)
  }, [])

  const projectsData: Array<{ title: string; description: string; imgSrc: string; href: string; category: string }> = []
  const categories: Array<{ name: string; count: number }> = []

  return (
    <>
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 opacity-40 dark:opacity-20"
            style={{ filter: 'blur(1px)' }}
          />

          {/* Neural Network Visualization */}
          <svg
            className="absolute inset-0 h-full w-full opacity-20 dark:opacity-10"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
            <NeuralConnection x1={10} y1={20} x2={30} y2={40} delay={0} />
            <NeuralConnection x1={30} y1={40} x2={50} y2={30} delay={0.2} />
            <NeuralConnection x1={50} y1={30} x2={70} y2={50} delay={0.4} />
            <NeuralConnection x1={70} y1={50} x2={90} y2={35} delay={0.6} />
            <NeuralConnection x1={20} y1={60} x2={40} y2={70} delay={0.3} />
            <NeuralConnection x1={40} y1={70} x2={60} y2={65} delay={0.5} />
            <NeuralConnection x1={60} y1={65} x2={80} y2={75} delay={0.7} />
          </svg>

          {/* Neural Nodes */}
          <div className="absolute inset-0">
            <NeuralNode x={10} y={20} delay={0} />
            <NeuralNode x={30} y={40} delay={0.2} />
            <NeuralNode x={50} y={30} delay={0.4} />
            <NeuralNode x={70} y={50} delay={0.6} />
            <NeuralNode x={90} y={35} delay={0.8} />
            <NeuralNode x={20} y={60} delay={0.3} />
            <NeuralNode x={40} y={70} delay={0.5} />
            <NeuralNode x={60} y={65} delay={0.7} />
            <NeuralNode x={80} y={75} delay={0.9} />
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-50/20 to-transparent dark:via-cyan-950/10" />
        </div>

        {/* Content */}
        <div className="relative z-10 divide-y divide-gray-200 dark:divide-gray-700">
          <motion.div
            className="space-y-4 pt-16 pb-12 md:space-y-6 md:pt-24 md:pb-16"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            <motion.div
              className="absolute -top-4 left-1/2 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: appleEase }}
            />
            <h1 className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-4xl leading-tight font-extrabold tracking-tight text-transparent sm:text-5xl md:text-7xl dark:from-gray-50 dark:via-blue-200 dark:to-gray-50">
              Nos Projets
            </h1>
            <motion.p
              className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: appleEase }}
            >
              Innovation propulsée par l'intelligence artificielle
            </motion.p>
          </motion.div>

          <motion.div
            className="container relative py-16 md:py-24"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="-m-4 flex flex-wrap">
              {projectsData.map((d, index) => (
                <motion.div
                  key={d.title}
                  className="w-full p-4 md:w-1/2"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3, ease: appleEase },
                  }}
                >
                  <Card title={d.title} description={d.description} imgSrc={d.imgSrc} href={d.href} />
                </motion.div>
              ))}
            </div>

            {/* Floating AI Elements */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-2 w-2 rounded-full bg-blue-400/30 blur-sm"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 3) * 20}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
