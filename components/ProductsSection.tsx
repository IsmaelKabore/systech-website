'use client'

import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion'
import { useState } from 'react'

interface Product {
  status: string
  statusColor: string
  title: string
  description: string
}

const products: Product[] = [
  {
    status: 'En Production',
    statusColor: 'bg-green-500',
    title: 'Plateforme de Colocation Africaine',
    description:
      "Application pan-africaine connectant propriétaires et locataires avec vérification d'identité, paiements sécurisés et géolocalisation intelligente. Résout un problème concret d'accès au logement sur le continent.",
  },
  {
    status: 'En Développement',
    statusColor: 'bg-blue-500',
    title: 'Solution de Livraison et Contenu',
    description:
      'Plateforme innovante combinant livraison de nourriture et contenu vidéo des restaurants, créant une expérience utilisateur unique adaptée au marché africain.',
  },
  {
    status: 'Portfolio Actif',
    statusColor: 'bg-purple-500',
    title: 'Applications Web et Mobiles',
    description:
      'Portefeuille de solutions B2B et B2C développées en interne, servant de preuves concrètes de nos capacités techniques et de notre compréhension des besoins africains.',
  },
]

interface ProductCardProps {
  product: Product
  index: number
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 32, scale: 0.95 },
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
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-10 shadow-sm transition-shadow duration-300 hover:shadow-2xl dark:border-gray-700 dark:from-gray-800 dark:to-gray-900"
    >
      {/* Subtle gradient overlay on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.05 : 0 }}
        transition={{ duration: 0.3 }}
        className="from-primary-500 absolute inset-0 bg-gradient-to-br to-purple-500"
      />

      <div className="relative z-10">
        <motion.span
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
          className={`mb-6 inline-block rounded-lg ${product.statusColor} px-4 py-2 text-xs font-bold tracking-wider text-white uppercase shadow-lg`}
        >
          {product.status}
        </motion.span>

        <motion.h3
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-4 text-2xl leading-tight font-bold text-gray-900 dark:text-gray-50"
        >
          {product.title}
        </motion.h3>

        <p className="leading-relaxed text-gray-600 dark:text-gray-400">{product.description}</p>
      </div>
    </motion.div>
  )
}

const ProductsSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const headerVariants: Variants = {
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

  return (
    <section className="bg-white py-32 dark:bg-gray-950" id="produits">
      <div className="mx-auto max-w-7xl px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={headerVariants}
          className="mb-20 text-center"
        >
          <div className="text-primary-500 mb-4 text-sm font-bold tracking-widest uppercase">
            Nos Produits
          </div>
          <h2 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Plateformes Développées et Opérées par SYS TECH
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Des solutions propriétaires qui démontrent notre capacité à concevoir et déployer des
            systèmes complexes à l'échelle africaine.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProductsSection
