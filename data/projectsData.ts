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
    imgSrc: '/static/images/ecommerce.png',
    href: '/projects/ecommerce-platform',
  },
  {
    title: 'Application Mobile Banking',
    description: `Application bancaire mobile cross-platform développée avec React Native. 
    Fonctionnalités incluant virements instantanés, gestion de comptes multiples, 
    authentification biométrique et notifications push en temps réel.`,
    imgSrc: '/static/images/banking-app.png',
    href: '/projects/mobile-banking',
  },
  {
    title: 'Système de Gestion Intelligente',
    description: `ERP moderne avec modules pour la comptabilité, RH, CRM et gestion de projets. 
    Interface intuitive, automatisation des processus métier et intégration IA pour 
    l'analyse prédictive et les recommandations intelligentes.`,
    imgSrc: '/static/images/erp-system.png',
    href: '/projects/erp-system',
  },
  {
    title: 'Solution IoT & Analytics',
    description: `Plateforme IoT pour la collecte et l'analyse de données en temps réel. 
    Gestion de milliers de capteurs, tableaux de bord personnalisables et alertes 
    automatisées. Parfait pour l'industrie 4.0 et smart cities.`,
    imgSrc: '/static/images/iot-platform.png',
    href: '/projects/iot-analytics',
  },
]

export default projectsData
