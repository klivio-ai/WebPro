// Configuration des animations modernes inspirées de taap.it

export const animations = {
  // Animations d'entrée
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  },
  
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  },
  
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  },
  
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: "easeOut" }
  },
  
  // Animations de hover
  hoverLift: {
    whileHover: { y: -5, transition: { duration: 0.2 } },
    whileTap: { scale: 0.98 }
  },
  
  hoverScale: {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    whileTap: { scale: 0.95 }
  },
  
  hoverGlow: {
    whileHover: { 
      boxShadow: "0 0 20px rgba(102, 126, 234, 0.3)",
      transition: { duration: 0.2 }
    }
  },
  
  // Animations continues
  float: {
    animate: { 
      y: [0, -10, 0],
      transition: { 
        duration: 3, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }
    }
  },
  
  pulse: {
    animate: { 
      opacity: [1, 0.8, 1],
      transition: { 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }
    }
  },
  
  gradientShift: {
    animate: { 
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: { 
        duration: 3, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }
    }
  }
}

// Configuration des transitions de page
export const pageTransitions = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: "easeInOut" }
}

// Configuration des animations de scroll
export const scrollAnimations = {
  // Animation pour les éléments qui apparaissent au scroll
  onScroll: {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  
  // Animation pour les cartes avec délai
  staggeredCards: (index: number) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      delay: index * 0.1 
    }
  })
}

// Configuration des effets de parallaxe
export const parallaxEffects = {
  // Effet de parallaxe léger
  subtle: {
    y: (progress: number) => progress * 50,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  
  // Effet de parallaxe moyen
  medium: {
    y: (progress: number) => progress * 100,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  
  // Effet de parallaxe fort
  strong: {
    y: (progress: number) => progress * 200,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

// Configuration des animations de navigation
export const navigationAnimations = {
  // Animation pour les liens de navigation
  navLink: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { duration: 0.2, ease: "easeInOut" }
  },
  
  // Animation pour le menu mobile
  mobileMenu: {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
    transition: { duration: 0.3, ease: "easeInOut" }
  }
}

// Configuration des animations de chargement
export const loadingAnimations = {
  // Spinner moderne
  spinner: {
    animate: { 
      rotate: 360,
      transition: { 
        duration: 1, 
        repeat: Infinity, 
        ease: "linear" 
      }
    }
  },
  
  // Pulse de chargement
  pulse: {
    animate: { 
      scale: [1, 1.1, 1],
      opacity: [1, 0.7, 1],
      transition: { 
        duration: 1.5, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }
    }
  },
  
  // Skeleton loading
  skeleton: {
    animate: { 
      backgroundPosition: ["-200px 0", "calc(200px + 100%) 0"],
      transition: { 
        duration: 1.5, 
        repeat: Infinity, 
        ease: "linear" 
      }
    }
  }
}

// Configuration des animations de notification
export const notificationAnimations = {
  // Animation d'apparition de notification
  slideIn: {
    initial: { opacity: 0, x: 300 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 300 },
    transition: { duration: 0.3, ease: "easeOut" }
  },
  
  // Animation de toast
  toast: {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.9 },
    transition: { duration: 0.2, ease: "easeOut" }
  }
}