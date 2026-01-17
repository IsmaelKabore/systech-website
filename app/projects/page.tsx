'use client'

import { motion } from 'framer-motion'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const titleVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <motion.div
          className="space-y-2 pt-6 pb-8 md:space-y-5"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Nos Projets
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Découvrez nos projets innovants et les solutions que nous développons chez Systech
          </p>
        </motion.div>

        <motion.div
          className="container py-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d, index) => (
              <motion.div
                key={d.title}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card title={d.title} description={d.description} imgSrc={d.imgSrc} href={d.href} />
              </motion.div>
            ))}
          </div>

          {/* Floating Tech Icons Animation */}
          <div className="relative mt-16 h-64 overflow-hidden">
            <motion.div
              className="absolute inset-0 flex flex-wrap items-center justify-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {['⚛️', '🚀', '☁️', '📱', '🤖', '💻', '🔧', '⚡'].map((icon, index) => (
                <motion.div
                  key={index}
                  className="text-6xl"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {icon}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
