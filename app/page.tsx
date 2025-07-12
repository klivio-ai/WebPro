import Link from 'next/link'
import { Check, ArrowRight, Star, Users, Zap, Shield, Clock, Award } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="container-taap">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-green-600"></div>
              <span className="text-xl font-bold text-gray-900">Taap</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="nav-link">Fonctionnalités</Link>
              <Link href="#pricing" className="nav-link">Tarifs</Link>
              <Link href="#about" className="nav-link">À propos</Link>
              <Link href="#contact" className="nav-link">Contact</Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Link href="/login" className="btn btn-ghost btn-sm">Connexion</Link>
              <Link href="/signup" className="btn btn-primary btn-sm">Commencer</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container-taap">
          <div className="hero-content text-center">
            <h1 className="hero-title animate-fade-in">
              Simplifiez votre <span className="text-gradient">gestion</span> avec Taap
            </h1>
            <p className="hero-subtitle animate-fade-in">
              La plateforme tout-en-un pour automatiser vos processus, 
              gérer vos équipes et optimiser votre productivité.
            </p>
            <div className="hero-actions animate-fade-in">
              <Link href="/demo" className="btn btn-primary btn-lg">
                Essayer gratuitement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="#demo" className="btn btn-outline btn-lg">
                Voir la démo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="container-taap">
          <div className="section-header text-center">
            <h2 className="section-title">Fonctionnalités principales</h2>
            <p className="section-subtitle">
              Tout ce dont vous avez besoin pour transformer votre entreprise
            </p>
          </div>
          
          <div className="grid-features">
            <div className="feature-item animate-slide-in-left">
              <div className="feature-icon">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="feature-title">Automatisation intelligente</h3>
              <p className="feature-description">
                Automatisez vos tâches répétitives et libérez du temps pour l'essentiel.
              </p>
            </div>
            
            <div className="feature-item animate-slide-in-left">
              <div className="feature-icon">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="feature-title">Gestion d'équipe</h3>
              <p className="feature-description">
                Gérez vos équipes efficacement avec des outils collaboratifs intégrés.
              </p>
            </div>
            
            <div className="feature-item animate-slide-in-left">
              <div className="feature-icon">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="feature-title">Sécurité avancée</h3>
              <p className="feature-description">
                Vos données sont protégées par les meilleures pratiques de sécurité.
              </p>
            </div>
            
            <div className="feature-item animate-slide-in-left">
              <div className="feature-icon">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="feature-title">Analytics en temps réel</h3>
              <p className="feature-description">
                Suivez vos performances avec des métriques détaillées et des rapports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="section gradient-secondary">
        <div className="container-taap">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Voir Taap en action
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Découvrez comment Taap peut transformer votre façon de travailler 
                avec cette démo interactive de 2 minutes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Configuration en 5 minutes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Interface intuitive</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Support 24/7</span>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="bg-white rounded-xl shadow-taap-lg p-8">
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <ArrowRight className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-gray-600">Démo interactive</p>
                  </div>
                </div>
                <button className="btn btn-primary w-full">
                  Lancer la démo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-taap">
          <div className="section-header text-center">
            <h2 className="section-title">Ils nous font confiance</h2>
            <p className="section-subtitle">
              Découvrez ce que nos clients disent de Taap
            </p>
          </div>
          
          <div className="grid-testimonials">
            <div className="testimonial animate-scale-in">
              <div className="testimonial-content">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Taap a révolutionné notre façon de travailler. L'automatisation 
                  nous fait gagner des heures chaque semaine."
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="testimonial-info">
                    <div className="testimonial-name">Marie Dubois</div>
                    <div className="testimonial-title">CEO, TechStart</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="testimonial animate-scale-in">
              <div className="testimonial-content">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Interface intuitive et support client exceptionnel. 
                  Je recommande Taap à toutes les entreprises."
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="testimonial-info">
                    <div className="testimonial-name">Pierre Martin</div>
                    <div className="testimonial-title">Directeur Marketing, InnovCorp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gradient-primary">
        <div className="container-taap">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Rejoignez des milliers d'entreprises qui font confiance à Taap
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="btn bg-white text-green-600 hover:bg-gray-100 btn-lg">
                Commencer gratuitement
              </Link>
              <Link href="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-green-600 btn-lg">
                Parler à un expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container-taap">
          <div className="footer-content">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="footer-section">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="h-8 w-8 rounded-lg bg-green-600"></div>
                  <span className="text-xl font-bold text-gray-900">Taap</span>
                </div>
                <p className="text-gray-600">
                  Simplifiez votre gestion d'entreprise avec notre plateforme tout-en-un.
                </p>
              </div>
              
              <div className="footer-section">
                <h3 className="footer-title">Produit</h3>
                <div className="space-y-2">
                  <Link href="#features" className="footer-link">Fonctionnalités</Link>
                  <Link href="#pricing" className="footer-link">Tarifs</Link>
                  <Link href="#demo" className="footer-link">Démo</Link>
                  <Link href="/api" className="footer-link">API</Link>
                </div>
              </div>
              
              <div className="footer-section">
                <h3 className="footer-title">Entreprise</h3>
                <div className="space-y-2">
                  <Link href="/about" className="footer-link">À propos</Link>
                  <Link href="/blog" className="footer-link">Blog</Link>
                  <Link href="/careers" className="footer-link">Carrières</Link>
                  <Link href="/contact" className="footer-link">Contact</Link>
                </div>
              </div>
              
              <div className="footer-section">
                <h3 className="footer-title">Support</h3>
                <div className="space-y-2">
                  <Link href="/help" className="footer-link">Centre d'aide</Link>
                  <Link href="/docs" className="footer-link">Documentation</Link>
                  <Link href="/status" className="footer-link">Statut</Link>
                  <Link href="/security" className="footer-link">Sécurité</Link>
                </div>
              </div>
            </div>
            
            <div className="footer-bottom">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-gray-600">
                  © 2024 Taap. Tous droits réservés.
                </p>
                <div className="flex space-x-6">
                  <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                    Confidentialité
                  </Link>
                  <Link href="/terms" className="text-gray-600 hover:text-gray-900">
                    Conditions
                  </Link>
                  <Link href="/cookies" className="text-gray-600 hover:text-gray-900">
                    Cookies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}