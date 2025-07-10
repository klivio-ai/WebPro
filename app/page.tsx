"use client"

import { lazy, Suspense } from "react"
import ModernNavbar from "@/components/modern-navbar"
import ModernHero from "@/components/modern-hero"
import ModernFooter from "@/components/modern-footer"
import { TypographyH1, TypographyH2, TypographyH3, TypographyLead } from "@/components/ui/typography"
import { CTAButton } from "@/components/ui/cta-button"
import MultiStepBooking from "@/components/multi-step-booking"

// Lazy load components for better performance
const ContactForm = lazy(() => import("@/components/contact-form"))
const MapSection = lazy(() => import("@/components/map-section"))
const FAQSection = lazy(() => import("@/components/faq-section"))
const TestimonialsSection = lazy(() => import("@/components/testimonials-section"))
const SocialMediaSection = lazy(() => import("@/components/social-media-section"))
const SocialProofSection = lazy(() => import("@/components/social-proof-section"))
const LiveChat = lazy(() => import("@/components/live-chat"))

export default function HomePage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-orange-100" role="main">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-orange-200 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4">
          <div className="flex items-center space-x-3">
            <Mascot variant="winking" size="sm" />
            <div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Pattes Propres
              </span>
              <p className="text-xs text-orange-600 font-medium">Spa pour toutous</p>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-sm font-medium text-orange-700 hover:text-orange-500 transition-colors py-2"
            >
              Nos soins
            </Link>
            <Link
              href="#tarifs"
              className="text-sm font-medium text-orange-700 hover:text-orange-500 transition-colors py-2"
            >
              Tarifs
            </Link>
            <Link
              href="#temoignages"
              className="text-sm font-medium text-orange-700 hover:text-orange-500 transition-colors py-2"
            >
              Témoignages
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-orange-700 hover:text-orange-500 transition-colors py-2"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-orange-700 hover:text-orange-500 transition-colors py-2"
            >
              Contact
            </Link>
          </nav>
          <CTAButton variant="primary" size="md">
            <Link href="#reservation">Chouchouter mon chien 🐕</Link>
          </CTAButton>
=======
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Modern Navigation */}
      <ModernNavbar />

      {/* Modern Hero Section */}
      <ModernHero />

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 px-4 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl" />
>>>>>>> cursor/revising-the-graphic-charter-of-the-site-6c78
        </div>

<<<<<<< HEAD
      {/* Hero Section - Amélioré */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 to-amber-100/50"></div>
        <div className="container mx-auto text-center relative">
          {/* Badge de confiance */}
          <div className="mb-8">
            <span className="inline-flex items-center rounded-full border border-orange-300 bg-gradient-to-r from-orange-200 to-amber-200 text-orange-800 px-6 py-3 text-sm font-semibold shadow-sm">
              ⭐ 4.9/5 - Plus de 500 chiens chouchoutés
            </span>
          </div>

          <TypographyH1 className="mb-8">
            Un moment de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">bonheur</span>
            <br />
            pour votre compagnon
          </TypographyH1>

          <TypographyLead className="mb-8 max-w-3xl mx-auto">
            Offrez à votre fidèle ami un spa relaxant ! Bain moussant, massage doux et câlins inclus. 
            <strong>Réservation en ligne en 2 minutes</strong> - Votre toutou ressortira tout propre et tout heureux ! 🛁✨
          </TypographyLead>

          {/* Preuves sociales */}
          <div className="mb-8 flex flex-wrap justify-center items-center gap-4 text-sm text-orange-700">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 border-2 border-white"></div>
                ))}
              </div>
              <span>+500 clients satisfaits</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏆</span>
              <span>Certifié Bio & Naturel</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">⚡</span>
              <span>Réservation en 2 min</span>
            </div>
          </div>

          {/* Hero Mascot */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <Mascot variant="bubbles" size="xl" />
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <span className="inline-flex items-center rounded-full border border-orange-200 bg-white/90 text-orange-700 px-4 py-2 text-sm font-semibold shadow-sm">
                  Moi c'est Bulle, votre mascotte ! 🫧
                </span>
              </div>
            </div>
          </div>

          {/* CTA Section améliorée */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <CTAButton variant="primary" size="xl">
              <Link href="#reservation" className="flex items-center group">
=======
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-primary rounded-2xl shadow-soft">
>>>>>>> cursor/revising-the-graphic-charter-of-the-site-6c78
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
<<<<<<< HEAD
                  className="mr-3 group-hover:scale-110 transition-transform"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                Réserver maintenant - 25€
              </Link>
            </CTAButton>
            <CTAButton variant="outline" size="lg">
              <Link href="#tarifs">Découvrir nos forfaits</Link>
            </CTAButton>
          </div>

          {/* Garantie et sécurité */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-orange-600">
            <div className="flex items-center space-x-2">
              <span className="text-lg">🔒</span>
              <span>Paiement sécurisé</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg">💰</span>
              <span>Garantie satisfait ou remboursé</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg">⏰</span>
              <span>Annulation gratuite 24h avant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section - Lazy loaded */}
      <Suspense
        fallback={
          <div className="py-16 bg-white flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        }
      >
        <SocialProofSection />
      </Suspense>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Mascot variant="happy" size="lg" />
=======
                  className="text-white"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
>>>>>>> cursor/revising-the-graphic-charter-of-the-site-6c78
            </div>
            <TypographyH2 className="mb-6">Nos petits soins pour grands cœurs</TypographyH2>
            <TypographyLead>Chaque chien est unique, nos soins aussi ! 🐕💕</TypographyLead>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    <path d="M19 17a6 6 0 0 0-12 0" />
                    <path d="M12 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                  </svg>
                ),
                title: "Bain Moussant Magique",
                description: "Shampooing doux aux huiles naturelles, bulles parfumées et rinçage tout en douceur",
                gradient: "from-brand-400 to-brand-600",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                ),
                title: "Câlins & Massage",
                description: "Séance de détente avec massage relaxant et plein de câlins pour rassurer votre loulou",
                gradient: "from-purple-400 to-pink-400",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ),
                title: "Brushing Étoilé",
                description: "Coiffage soigné, démêlage en douceur et finition brillante pour un look de star",
                gradient: "from-yellow-400 to-orange-400",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="card-modern p-8 text-center hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mx-auto mb-6 shadow-soft group-hover:shadow-glow transition-shadow duration-300`}>
                  {service.icon}
                </div>
                <TypographyH3 className="mb-4">{service.title}</TypographyH3>
                <TypographyLead className="text-gray-600">{service.description}</TypographyLead>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Pricing Section */}
      <section id="tarifs" className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <TypographyH2>Nos forfaits bonheur</TypographyH2>
            <TypographyLead>Des prix tout doux pour des moments tout doux 🥰</TypographyLead>
            {/* Bannière d'urgence */}
            <div className="mt-8 inline-flex items-center bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg animate-pulse">
              <span className="mr-2">🔥</span>
              <span className="font-semibold">Offre limitée : -20% sur votre première visite !</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {[
              {
                name: "Petit Loulou",
                description: "Pour nos petits compagnons jusqu'à 15kg",
                price: "25€",
                duration: "30 min",
                emoji: "🐕‍🦺",
                features: [
                  "Bain moussant avec shampooing doux",
                  "Rinçage à l'eau tiède",
                  "Séchage tout en douceur",
                  "Nettoyage des petites oreilles",
                  "Coupe de griffes avec câlins",
                  "Friandise de récompense 🦴",
                ],
                popular: false,
                color: "from-green-400 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50",
              },
              {
                name: "Toutou Chéri",
                description: "Pour nos amis de 15kg à 30kg",
                price: "35€",
                duration: "45 min",
                emoji: "🐕",
                features: [
                  "Bain moussant avec shampooing premium",
                  "Rinçage à l'eau tiède",
                  "Séchage professionnel et massage",
                  "Nettoyage des oreilles",
                  "Coupe de griffes avec câlins",
                  "Démêlage doux si nécessaire",
                  "Séance de câlins prolongée 💕",
                  "Friandise de récompense 🦴",
                ],
                popular: true,
                color: "from-orange-400 to-amber-500",
                bgColor: "from-orange-50 to-amber-50",
              },
              {
                name: "Grand Cœur",
                description: "Pour nos gros nounours de plus de 30kg",
                price: "45€",
                duration: "60 min",
                emoji: "🐕‍🦮",
                features: [
                  "Bain moussant avec shampooing premium",
                  "Double rinçage à l'eau tiède",
                  "Séchage professionnel et massage",
                  "Nettoyage approfondi des oreilles",
                  "Coupe de griffes avec patience",
                  "Démêlage et brossage complet",
                  "Soins spéciaux poils longs",
                  "Séance de câlins VIP 👑",
                  "Friandise de récompense 🦴",
                ],
                popular: false,
                color: "from-purple-400 to-pink-500",
                bgColor: "from-purple-50 to-pink-50",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl border-2 transition-all hover:shadow-2xl ${
                  plan.popular
                    ? "border-orange-300 shadow-xl scale-105 bg-gradient-to-b from-orange-50 to-amber-50"
                    : `border-orange-100 hover:border-orange-200 bg-gradient-to-b ${plan.bgColor}`
                } relative p-8`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 text-sm font-bold shadow-lg">
                      ⭐ Le plus choisi
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4">{plan.emoji}</div>
                  <TypographyH3 className="mb-2">{plan.name}</TypographyH3>
                  <p className="text-orange-700 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    <span className="text-orange-600 ml-2 text-lg">/ {plan.duration}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div
                        className={`h-6 w-6 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mr-4 mt-0.5 flex-shrink-0`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      <span className="text-orange-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <CTAButton variant={plan.popular ? "primary" : "secondary"} size="lg" className="w-full">
                  <Link href="#reservation" className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    Choisir ce forfait
                  </Link>
                </CTAButton>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-orange-100 rounded-full px-6 py-3 text-orange-600">
              <span className="text-sm font-medium">
                💡 Supplément de 10€ pour les toutous très sales ou très timides (avec plein de patience en plus !)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Lazy loaded */}
      <Suspense
        fallback={
          <div className="py-16 bg-gradient-to-b from-orange-50 to-amber-50 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        }
      >
        <TestimonialsSection />
      </Suspense>

=======
>>>>>>> cursor/revising-the-graphic-charter-of-the-site-6c78
      {/* Booking Section */}
      <section id="reservation" className="py-20 md:py-32 px-4 bg-gradient-to-br from-brand-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <TypographyH2 className="mb-6">Réservez en quelques clics</TypographyH2>
            <TypographyLead>Simple, rapide et sécurisé. Votre chien mérite le meilleur !</TypographyLead>
          </div>

          <div className="max-w-4xl mx-auto">
            <MultiStepBooking />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="temoignages" className="py-20 md:py-32 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <TypographyH2 className="mb-6">Ce que disent nos clients</TypographyH2>
            <TypographyLead>La preuve par l'exemple ! 🐾</TypographyLead>
          </div>

          <Suspense fallback={<div className="text-center">Chargement...</div>}>
            <TestimonialsSection />
          </Suspense>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <TypographyH2 className="mb-6">Questions fréquentes</TypographyH2>
            <TypographyLead>Tout ce que vous devez savoir !</TypographyLead>
          </div>

          <Suspense fallback={<div className="text-center">Chargement...</div>}>
            <FAQSection />
          </Suspense>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <TypographyH2 className="mb-6">Contactez-nous</TypographyH2>
            <TypographyLead>Une question ? On est là pour vous !</TypographyLead>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Suspense fallback={<div className="text-center">Chargement...</div>}>
              <ContactForm />
            </Suspense>
            <Suspense fallback={<div className="text-center">Chargement...</div>}>
              <MapSection />
            </Suspense>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Map Section - Lazy loaded */}
      <Suspense
        fallback={
          <div className="py-16 bg-gradient-to-b from-amber-50 to-orange-50 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        }
      >
        <MapSection />
      </Suspense>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-800 to-amber-800 text-white py-16 px-4">
        {/* Chat en direct */}
        <Suspense fallback={null}>
          <LiveChat />
        </Suspense>
=======
      {/* Social Media Section */}
      <section className="py-20 md:py-32 px-4 bg-gradient-to-br from-brand-50 to-purple-50">
>>>>>>> cursor/revising-the-graphic-charter-of-the-site-6c78
        <div className="container mx-auto">
          <Suspense fallback={<div className="text-center">Chargement...</div>}>
            <SocialMediaSection />
          </Suspense>
        </div>
      </section>

      {/* Modern Footer */}
      <ModernFooter />
    </div>
  )
}
