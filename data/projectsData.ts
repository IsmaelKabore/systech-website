interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Plateforme E-Commerce Innovante',
    description: `Solution e-commerce complète avec gestion des stocks en temps réel, 
    système de paiement sécurisé et tableau de bord analytique. Architecture microservices 
    déployée sur Azure avec une performance optimale et une scalabilité automatique.`,
    imgSrc: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    href: '#',
  },
  {
    title: 'Application Mobile Banking',
    description: `Application bancaire mobile cross-platform développée avec React Native. 
    Fonctionnalités incluant virements instantanés, gestion de comptes multiples, 
    authentification biométrique et notifications push en temps réel.`,
    imgSrc: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    href: '#',
  },
  {
    title: 'Système de Gestion Intelligente',
    description: `ERP moderne avec modules pour la comptabilité, RH, CRM et gestion de projets. 
    Interface intuitive, automatisation des processus métier et intégration IA pour 
    l'analyse prédictive et les recommandations intelligentes.`,
    imgSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    href: '#',
  },
  {
    title: 'Solution IoT & Analytics',
    description: `Plateforme IoT pour la collecte et l'analyse de données en temps réel. 
    Gestion de milliers de capteurs, tableaux de bord personnalisables et alertes 
    automatisées. Parfait pour l'industrie 4.0 et smart cities.`,
    imgSrc: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop',
    href: '#',
  },
]

export default projectsData
