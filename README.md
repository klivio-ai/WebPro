# Preview123.fyi - Générateur d'aperçus de liens moderne

Une interface moderne et engageante pour générer des aperçus de liens, inspirée du style de taap.it avec des animations fluides et une expérience utilisateur exceptionnelle.

## 🚀 Fonctionnalités

- **Interface moderne** : Design inspiré de taap.it avec des couleurs vibrantes et des dégradés subtils
- **Animations fluides** : Utilisation de Framer Motion pour des transitions et micro-interactions engageantes
- **Génération d'aperçus** : Transformez vos URLs en aperçus visuels attrayants
- **Responsive design** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Accessibilité** : Respect des normes WCAG avec des contrastes appropriés
- **Performance optimisée** : Chargement rapide et animations fluides

## 🎨 Design & UX

### Palette de couleurs
- **Fond principal** : Dégradé sombre (slate-900 → purple-900 → slate-900)
- **Accents** : Bleus, violets et roses modernes
- **Éléments interactifs** : Dégradés bleu-violet avec effets de survol

### Typographie
- **Police principale** : Inter (Google Fonts)
- **Hiérarchie** : Titres en 36-48px, corps de texte en 16-18px
- **Gradients textuels** : Effets de dégradé sur les titres principaux

### Animations
- **Animations de fond** : Formes blob animées en arrière-plan
- **Micro-interactions** : Effets de survol et de clic sur tous les éléments interactifs
- **Transitions** : Animations fluides pour les changements d'état
- **Chargement** : Spinners et indicateurs de progression stylisés

## 🛠️ Technologies utilisées

- **Framework** : Next.js 14 avec App Router
- **Styling** : Tailwind CSS avec animations personnalisées
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **TypeScript** : Typage statique pour une meilleure maintenabilité

## 📦 Installation

1. **Cloner le projet**
   ```bash
   git clone <repository-url>
   cd preview123-fyi
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 🏗️ Structure du projet

```
preview123-fyi/
├── app/
│   ├── page.tsx          # Page principale avec l'interface
│   ├── layout.tsx        # Layout avec métadonnées
│   └── globals.css       # Styles globaux et animations
├── components/
│   └── ui/               # Composants UI réutilisables
├── public/               # Assets statiques
├── package.json          # Dépendances et scripts
└── README.md            # Documentation
```

## 🎯 Fonctionnalités principales

### 1. Saisie d'URL
- Champ de saisie avec icône et placeholder
- Validation en temps réel
- Exemples d'URLs cliquables
- Focus avec animation de mise à l'échelle

### 2. Génération d'aperçus
- Bouton avec état de chargement animé
- Simulation de génération avec délai
- Gestion des erreurs avec messages stylisés
- Transitions fluides pour l'affichage des résultats

### 3. Affichage des résultats
- Carte d'aperçu avec image, titre et description
- Boutons d'action (copier, télécharger, partager)
- Animations d'entrée et de sortie
- Design responsive

### 4. Section fonctionnalités
- Grille de 3 fonctionnalités principales
- Icônes avec dégradés
- Animations au survol
- Descriptions claires et engageantes

## 🎨 Composants d'interface

### Header
- Logo avec icône animée
- Navigation avec bouton de connexion
- Animations d'entrée

### Hero Section
- Titre principal avec dégradés textuels
- Badge animé avec icône
- Description engageante
- Animations d'entrée échelonnées

### Zone de saisie
- Conteneur avec effet glassmorphism
- Champ de saisie avec icône
- Bouton de génération avec états
- Exemples d'URLs interactifs

### Résultats
- Carte avec aperçu généré
- Actions utilisateur
- Animations de transition

## 🔧 Configuration

### Variables d'environnement
Créez un fichier `.env.local` :
```env
NEXT_PUBLIC_SITE_URL=https://preview123.fyi
```

### Personnalisation des couleurs
Modifiez les variables CSS dans `app/globals.css` :
```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... autres variables */
}
```

## 📱 Responsive Design

- **Mobile** : Interface optimisée pour les petits écrans
- **Tablette** : Adaptation des grilles et espacements
- **Desktop** : Utilisation optimale de l'espace disponible

## ♿ Accessibilité

- **Contrastes** : Respect des ratios WCAG 2.1
- **Navigation clavier** : Support complet de la navigation au clavier
- **Lecteurs d'écran** : Labels et descriptions appropriés
- **Réduction de mouvement** : Respect des préférences utilisateur

## 🚀 Déploiement

### Vercel (recommandé)
1. Connectez votre repository GitHub à Vercel
2. Configurez les variables d'environnement
3. Déployez automatiquement

### Autres plateformes
Le projet peut être déployé sur :
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔮 Améliorations futures

- [ ] Intégration d'une API réelle pour la génération d'aperçus
- [ ] Système d'authentification
- [ ] Historique des aperçus générés
- [ ] Personnalisation des thèmes
- [ ] Export en différents formats
- [ ] Intégration avec les réseaux sociaux
- [ ] Analytics et métriques d'utilisation

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📞 Support

Pour toute question ou problème :
- Ouvrez une issue sur GitHub
- Contactez l'équipe de développement

---

**Preview123.fyi** - Transformez vos liens en aperçus visuels attrayants ✨