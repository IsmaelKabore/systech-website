'use client'

import { motion, Variants } from 'framer-motion'
import Link from './Link'

interface FooterSection {
  title: string
  links?: { text: string; href: string }[]
  content?: string[]
}

const footerSections: FooterSection[] = [
  {
    title: 'Solutions',
    links: [
      { text: 'Cybersécurité', href: '#services' },
      { text: 'Data Centers', href: '#services' },
      { text: 'Fibre Optique', href: '#services' },
      { text: 'Services IT', href: '#services' },
      { text: 'Formation', href: '#services' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { text: 'Notre Vision', href: '#vision' },
      { text: 'Nos Produits', href: '#produits' },
      { text: 'À Propos', href: '#apropos' },
      { text: 'Carrières', href: '#contact' },
    ],
  },
  {
    title: 'Contact',
    content: ['📧 contact@systech.bf', '📱 +226 XX XX XX XX', '📍 Ouagadougou, Burkina Faso'],
  },
]

const AnimatedFooter = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <footer
      className="from-primary-900 via-primary-800 to-primary-900 dark:from-primary-950 dark:via-primary-900 dark:to-primary-950 relative overflow-hidden bg-gradient-to-br py-20 text-white"
      id="apropos"
    >
      {/* Decorative gradient overlays */}
      <div className="bg-primary-500/10 absolute top-0 left-0 h-64 w-64 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="relative z-10 mx-auto max-w-7xl px-8"
      >
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={itemVariants}>
            <motion.div
              className="mb-6 text-3xl font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              SYS TECH
            </motion.div>
            <p className="text-base leading-relaxed opacity-90">
              Infrastructure numérique souveraine pour l'Afrique. Basé au Burkina Faso avec une
              vision continentale.
            </p>
          </motion.div>

          {footerSections.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h4 className="mb-6 text-sm font-bold tracking-widest uppercase opacity-70">
                {section.title}
              </h4>
              {section.links && (
                <div className="space-y-4">
                  {section.links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="block text-base opacity-90 transition-all duration-200 hover:translate-x-1 hover:opacity-100"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              )}
              {section.content && (
                <div className="space-y-4">
                  {section.content.map((item, idx) => (
                    <p key={idx} className="text-base opacity-90">
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="border-t border-white/20 pt-10 text-center">
          <p className="text-sm opacity-70">&copy; 2026 SYS TECH. Tous droits réservés.</p>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default AnimatedFooter
