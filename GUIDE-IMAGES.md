# 📸 Guide des Images à Ajouter

## Images des Projets

Pour compléter votre site, ajoutez ces images dans `/public/static/images/` :

### 1. E-Commerce Platform

**Fichier** : `ecommerce.png`  
**Dimensions** : 1200x675 (16:9)  
**Description** :

- Interface moderne d'une boutique en ligne
- Dashboard avec graphiques de ventes
- Ou : Panier d'achat avec produits
- Couleurs : Bleu/vert tech, moderne

**Suggestions** :

- Screenshot d'un admin dashboard
- Mockup de site e-commerce responsive
- Illustration de shopping cart avec analytics

### 2. Banking App

**Fichier** : `banking-app.png`  
**Dimensions** : 1200x675 (16:9)  
**Description** :

- Interface mobile d'application bancaire
- Écran de paiement sécurisé
- Dashboard financier
- Couleurs : Bleu finance, professionnel

**Suggestions** :

- Mockup iPhone/Android avec app bancaire
- Dashboard avec graphiques financiers
- Interface de virement/transfert

### 3. ERP System

**Fichier** : `erp-system.png`  
**Dimensions** : 1200x675 (16:9)  
**Description** :

- Dashboard ERP complexe
- Tableaux de bord avec KPIs
- Interface de gestion
- Couleurs : Gris/bleu corporate

**Suggestions** :

- Screenshot d'un ERP moderne
- Dashboard avec multiple widgets
- Interface de gestion de projet

### 4. IoT Platform

**Fichier** : `iot-platform.png`  
**Dimensions** : 1200x675 (16:9)  
**Description** :

- Dashboard IoT avec capteurs
- Graphiques temps réel
- Carte avec géolocalisation
- Couleurs : Tech, futuriste

**Suggestions** :

- Dashboard avec sensors et metrics
- Graphiques temps réel
- Interface de monitoring IoT

## Où Trouver les Images ?

### Options Gratuites

1. **Unsplash** (https://unsplash.com)
   - Photos haute qualité gratuites
   - Recherches suggérées :
     - "dashboard"
     - "analytics"
     - "mobile app"
     - "technology"

2. **Pexels** (https://pexels.com)
   - Photos et vidéos gratuites
   - Bonne sélection tech

3. **Pixabay** (https://pixabay.com)
   - Images gratuites sans attribution

4. **Figma Community** (https://figma.com/community)
   - Templates et mockups gratuits
   - Screenshots de dashboards

### Options Payantes (Plus Professionnelles)

1. **UI8** (https://ui8.net)
   - Templates et screenshots pros
   - 20-50$ par pack

2. **Creative Market** (https://creativemarket.com)
   - Designs professionnels
   - Screenshots de qualité

3. **Envato Elements** (https://elements.envato.com)
   - Abonnement mensuel
   - Accès illimité

### Créer Vos Propres Screenshots

Si vous avez des projets existants :

```bash
# Utiliser un outil de screenshot
# Windows: Win + Shift + S
# Mac: Cmd + Shift + 4

# Ou utiliser un navigateur
# Mode responsive du DevTools
```

**Outils de Mockup** :

- **Figma** : Créer des mockups
- **Sketch** : Pour Mac
- **Adobe XD** : Interface design
- **Canva** : Simple et rapide

## Logo Systech

### Fichiers à Créer

```
/public/static/images/
├── logo.png          (500x500px, fond transparent)
├── logo-light.png    (Version claire pour dark mode)
└── logo-dark.png     (Version sombre pour light mode)
```

### Favicons

```
/public/static/favicons/
├── favicon.ico       (32x32, 16x16)
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png (180x180)
├── android-chrome-192x192.png
├── android-chrome-512x512.png
└── site.webmanifest
```

**Outil recommandé** : https://realfavicongenerator.net/

- Upload votre logo
- Génère tous les formats nécessaires
- Configuration automatique

## Avatar About Page

**Fichier** : `/public/static/images/avatar.png`  
**Dimensions** : 300x300px (carré)  
**Description** :

- Logo Systech
- Ou photo d'équipe
- Ou illustration abstraite tech

## Images des Articles de Blog (Optionnel)

Pour améliorer le SEO et l'engagement :

```
/public/static/images/blog/
├── transformation-digitale.jpg
├── intelligence-artificielle.jpg
├── microservices.jpg
├── devops-cicd.jpg
├── react-native.jpg
├── securite-web.jpg
├── migration-azure.jpg
└── nextjs-14.jpg
```

**Dimensions** : 1200x630 (Open Graph standard)

**Ajouter dans les articles** :

```mdx
---
title: 'Titre'
image: '/static/images/blog/article.jpg'
---
```

## Optimisation des Images

### Avant d'ajouter :

1. **Compresser**
   - TinyPNG (https://tinypng.com)
   - ImageOptim (Mac)
   - Squoosh (https://squoosh.app)

2. **Formats modernes**
   - WebP pour le web
   - PNG pour transparence
   - JPG pour photos

3. **Responsive**
   - Créer plusieurs tailles si nécessaire
   - Next.js optimise automatiquement

### Script d'Optimisation

```bash
# Installer sharp
npm install -g sharp-cli

# Convertir en WebP
npx sharp -i image.png -o image.webp

# Redimensionner
npx sharp -i large.png -o thumb.png --width 300
```

## Template de Création Rapide

Si vous n'avez pas d'images immédiatement :

### Créer des Placeholders Colorés

```html
<!-- Générer sur https://via.placeholder.com -->
https://via.placeholder.com/1200x675/3B82F6/FFFFFF?text=E-Commerce+Platform
https://via.placeholder.com/1200x675/10B981/FFFFFF?text=Banking+App
https://via.placeholder.com/1200x675/6366F1/FFFFFF?text=ERP+System
https://via.placeholder.com/1200x675/8B5CF6/FFFFFF?text=IoT+Platform
```

### Ou Utiliser CSS Gradient

Créez des images temporaires en CSS :

```tsx
<div className="flex h-64 w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
  <h3 className="text-3xl font-bold text-white">E-Commerce Platform</h3>
</div>
```

## Checklist Images

- [ ] `ecommerce.png` (1200x675)
- [ ] `banking-app.png` (1200x675)
- [ ] `erp-system.png` (1200x675)
- [ ] `iot-platform.png` (1200x675)
- [ ] `logo.png` (500x500)
- [ ] `avatar.png` (300x300)
- [ ] Favicons (tous formats)
- [ ] Images compressées
- [ ] Format WebP si possible

## Exemple de Commande

```bash
# Créer le dossier si nécessaire
mkdir -p "c:/Users/ismae/Documents/GitHub/Sys tech/systech-site/public/static/images"

# Copier vos images
# Puis compresser avec TinyPNG ou sharp
```

## Aide Supplémentaire

Si vous avez besoin d'aide pour :

- Créer un logo
- Générer des mockups
- Optimiser les images
- Créer des favicons

N'hésitez pas à demander !

---

**Note** : Les images sont importantes mais non bloquantes. Le site fonctionne sans elles, mais elles amélioreront grandement l'apparence professionnelle.
