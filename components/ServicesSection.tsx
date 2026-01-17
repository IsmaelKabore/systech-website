'use client'

import { motion, Variants } from 'framer-motion'

interface ServiceFeature {
  text: string
}

interface Service {
  icon: string
  title: string
  description: string
  features: ServiceFeature[]
}

const services: Service[] = [
  {
    icon: '🔐',
    title: 'Cybersécurité et Systèmes Critiques',
    description:
      'Protection complète des infrastructures gouvernementales, bancaires et institutionnelles contre les menaces modernes.',
    features: [
      { text: 'Audit de sécurité informatique approfondi' },
      { text: 'Sécurisation des réseaux gouvernementaux' },
      { text: 'Protection des systèmes bancaires et financiers' },
      { text: 'Sécurité des data centers et infrastructures critiques' },
      { text: 'Mise en conformité réglementaire' },
    ],
  },
  {
    icon: '🏢',
    title: 'Data Centers et Infrastructure Souveraine',
    description:
      "Conception et déploiement d'infrastructures numériques locales pour réduire la dépendance aux clouds étrangers.",
    features: [
      { text: 'Architecture de data centers souverains' },
      { text: 'Solutions hybrides on-premise et cloud' },
      { text: 'Hébergement de plateformes locales' },
      { text: 'Haute disponibilité et redondance' },
      { text: 'Continuité de service garantie' },
    ],
  },
  {
    icon: '🌐',
    title: 'Fibre Optique et Réseaux',
    description:
      "Déploiement d'infrastructures réseau fiables pour connecter entreprises, institutions et bâtiments.",
    features: [
      { text: 'Installation de réseaux fibre optique' },
      { text: "Interconnexion d'infrastructures" },
      { text: 'Solutions Internet professionnelles' },
      { text: 'Maintenance et support continu' },
      { text: 'Sécurisation des réseaux physiques' },
    ],
  },
  {
    icon: '💻',
    title: 'Services Informatiques et Équipements',
    description:
      "Fourniture et maintenance d'équipements informatiques pour organisations de toutes tailles.",
    features: [
      { text: "Vente d'ordinateurs et équipements IT" },
      { text: 'Installation de parcs informatiques' },
      { text: 'Maintenance matérielle et logicielle' },
      { text: 'Support technique professionnel' },
      { text: 'Migration et modernisation de systèmes' },
    ],
  },
  {
    icon: '🎓',
    title: 'Formation et Développement des Talents',
    description:
      "Programme de formation pratique pour développer l'expertise technique locale en cybersécurité et systèmes.",
    features: [
      { text: 'Stages universitaires en cybersécurité' },
      { text: 'Formation pratique sur systèmes critiques' },
      { text: 'Encadrement par ingénieurs expérimentés' },
      { text: 'Développement de compétences locales' },
      { text: 'Recherche appliquée et innovation' },
    ],
  },
  {
    icon: '🚀',
    title: 'Incubation et Accompagnement',
    description:
      'Support aux startups technologiques africaines avec infrastructure, expertise et mentorat technique.',
    features: [
      { text: 'Accompagnement de projets innovants' },
      { text: 'Accès à infrastructure technique' },
      { text: 'Mentorat par experts seniors' },
      { text: 'Sécurisation des applications' },
      { text: 'Développement de solutions locales' },
    ],
  },
]

const ServicesSection = () => {
  // Container animation with stagger
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Apple-style stagger timing
      },
    },
  }

  // Header animation
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  // Individual card animation
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
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
    <section className="bg-gray-50 py-32 dark:bg-gray-900" id="services">
      <div className="mx-auto max-w-7xl px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={headerVariants}
          className="mb-20 text-center"
        >
          <div className="text-primary-500 mb-4 text-sm font-bold tracking-widest uppercase">
            Nos Solutions
          </div>
          <h2 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Protection et Infrastructure pour l'Afrique Numérique
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Des solutions éprouvées qui sécurisent vos systèmes critiques, connectent vos
            infrastructures et accélèrent votre transformation digitale.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
              }}
              className="group hover:border-primary-200 dark:hover:border-primary-700 relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800"
            >
              {/* Gradient overlay on hover */}
              <motion.div className="from-primary-50/50 dark:from-primary-900/20 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <motion.span
                  className="mb-6 block text-6xl transition-transform duration-300 group-hover:scale-110"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.span>

                <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-4 text-2xl leading-tight font-bold text-gray-900 transition-colors duration-300 dark:text-gray-50">
                  {service.title}
                </h3>

                <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-start text-sm leading-relaxed text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-primary-500 mt-0.5 mr-3 font-bold transition-transform duration-300 group-hover:scale-125">
                        ✓
                      </span>
                      <span>{feature.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
