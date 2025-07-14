"use client"

import { lazy, Suspense } from "react"
import Link from "next/link"
import Mascot from "@/components/mascot"
import { TypographyH1, TypographyH2, TypographyH3, TypographyLead } from "@/components/ui/typography"
import { CTAButton } from "@/components/ui/cta-button"
import MultiStepBooking from "@/components/multi-step-booking"

// Lazy load components for better performance
const ContactForm = lazy(() => import("@/components/contact-form"))
const MapSection = lazy(() => import("@/components/map-section"))
const FAQSection = lazy(() => import("@/components/faq-section"))
const TestimonialsSection = lazy(() => import("@/components/testimonials-section"))
const SocialMediaSection = lazy(() => import("@/components/social-media-section"))

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-green-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-green-200 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4">
          <div className="flex items-center space-x-3">
            <Mascot variant="winking" size="sm" />
            <div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Pattes Propres
              </span>
              <p className="text-xs text-green-600 font-medium">Spa pour toutous</p>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-sm font-medium text-green-700 hover:text-green-500 transition-colors py-2"
            >
              Nos soins
            </Link>
            <Link
              href="#tarifs"
              className="text-sm font-medium text-green-700 hover:text-green-500 transition-colors py-2"
            >
              Tarifs
            </Link>
            <Link
              href="#temoignages"
              className="text-sm font-medium text-green-700 hover:text-green-500 transition-colors py-2"
            >
              Témoignages
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-green-700 hover:text-green-500 transition-colors py-2"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-green-700 hover:text-green-500 transition-colors py-2"
            >
              Contact
            </Link>
          </nav>
          <CTAButton variant="primary" size="md" asChild>
            <Link href="#reservation">Chouchouter mon chien 🐕</Link>
          </CTAButton>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/50 to-emerald-100/50"></div>
        <div className="container mx-auto text-center relative">
          <div className="mb-8">
            <span className="inline-flex items-center rounded-full border border-green-300 bg-gradient-to-r from-green-200 to-emerald-200 text-green-800 px-6 py-3 text-sm font-semibold shadow-sm">
              🐾 Votre chien mérite le meilleur
            </span>
          </div>

          <TypographyH1 className="mb-8">
            Un moment de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">bonheur</span>
            <br />
            pour votre compagnon
          </TypographyH1>

          <TypographyLead className="mb-12">
            Offrez à votre fidèle ami un spa relaxant ! Bain moussant, massage doux et câlins inclus. Votre toutou
            ressortira tout propre et tout heureux ! 🛁✨
          </TypographyLead>

          {/* Hero Mascot */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <Mascot variant="bubbles" size="xl" />
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <span className="inline-flex items-center rounded-full border border-green-200 bg-white/90 text-green-700 px-4 py-2 text-sm font-semibold shadow-sm">
                  Moi c'est Bulle, votre mascotte ! 🫧
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <CTAButton variant="primary" size="xl" asChild>
              <Link href="#reservation" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                Réserver un moment magique
              </Link>
            </CTAButton>
            <CTAButton variant="outline" size="lg" asChild>
              <Link href="#tarifs">Découvrir nos forfaits</Link>
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Mascot variant="happy" size="lg" />
            </div>
            <TypographyH2>Nos petits soins pour grands cœurs</TypographyH2>
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
                gradient: "from-green-400 to-emerald-400",
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
                gradient: "from-emerald-400 to-teal-400",
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
                    <path d="M10 16c-3.31 0-6-2.69-6-6 0-4 6-10.8 6-10.8S16 6 16 10c0 3.31-2.69 6-6 6Z" />
                    <path d="M20.79 14.71a2.5 2.5 0 0 1-3.54 3.54l-2.85-2.85a.55.55 0 0 1 0-.79l.79-.79a.55.55 0 0 1 .79 0l2.85 2.85c.98.98 2.56.98 3.54 0a2.5 2.5 0 0 0 0-3.54l-2.85-2.85a.55.55 0 0 0-.79 0l-.79.79a.55.55 0 0 0 0 .79l2.85 2.85" />
                    <path d="M10 20v-4" />
                    <path d="M14 8.4A4 4 0 0 0 10 6" />
                  </svg>
                ),
                title: "Soins Naturels",
                description: "Produits bio et naturels, respectueux de la peau sensible de nos amis à quatre pattes",
                gradient: "from-teal-400 to-cyan-400",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="rounded-2xl border-2 bg-gradient-to-b from-white to-green-50 border-green-100 hover:border-green-200 transition-all hover:shadow-xl text-center p-8"
              >
                <div
                  className={`mx-auto mb-6 h-20 w-20 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
                >
                  {service.icon}
                </div>
                <TypographyH3 className="mb-4">{service.title}</TypographyH3>
                <p className="text-green-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <TypographyH2>Nos forfaits bonheur</TypographyH2>
            <TypographyLead>Des prix tout doux pour des moments tout doux 🥰</TypographyLead>
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
                color: "from-emerald-400 to-teal-500",
                bgColor: "from-emerald-50 to-teal-50",
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
                color: "from-teal-400 to-cyan-500",
                bgColor: "from-teal-50 to-cyan-50",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl border-2 transition-all hover:shadow-2xl ${
                  plan.popular
                    ? "border-green-300 shadow-xl scale-105 bg-gradient-to-b from-green-50 to-emerald-50"
                    : `border-green-100 hover:border-green-200 bg-gradient-to-b ${plan.bgColor}`
                } relative p-8`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 text-sm font-bold shadow-lg">
                      ⭐ Le plus choisi
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4">{plan.emoji}</div>
                  <TypographyH3 className="mb-2">{plan.name}</TypographyH3>
                  <p className="text-green-700 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    <span className="text-green-600 ml-2 text-lg">/ {plan.duration}</span>
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
                      <span className="text-green-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <CTAButton variant={plan.popular ? "primary" : "secondary"} size="lg" className="w-full" asChild>
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
            <div className="inline-flex items-center bg-green-100 rounded-full px-6 py-3 text-green-600">
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
          <div className="py-16 bg-gradient-to-b from-green-50 to-emerald-50 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
          </div>
        }
      >
        <TestimonialsSection />
      </Suspense>

      {/* Booking Section */}
      <section id="reservation" className="py-16 md:py-24 px-4 bg-gradient-to-b from-green-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Mascot variant="normal" size="lg" />
            </div>
            <TypographyH2>Réservez le bonheur de votre chien</TypographyH2>
            <TypographyLead>
              Suivez notre processus simple en 4 étapes pour réserver le moment parfait ! 🗓️✨
            </TypographyLead>
          </div>
          <MultiStepBooking />
        </div>
      </section>

      {/* FAQ Section - Lazy loaded */}
      <Suspense
        fallback={
          <div className="py-16 bg-white flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
          </div>
        }
      >
        <FAQSection />
      </Suspense>

      {/* Social Media Section - Lazy loaded */}
      <Suspense
        fallback={
          <div className="py-16 bg-white flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
          </div>
        }
      >
        <SocialMediaSection />
      </Suspense>

      {/* Contact Section - Lazy loaded */}
      <section id="contact" className="py-16 md:py-24 px-4 bg-gradient-to-b from-green-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <TypographyH2>Une question ? Parlons-en ! 💬</TypographyH2>
            <TypographyLead>
              Nous adorons parler de nos amis à quatre pattes ! N'hésitez pas à nous contacter 🐾
            </TypographyLead>
          </div>

          {/* Contact Form - Lazy loaded */}
          <div className="mb-16">
            <Suspense
              fallback={
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>

          {/* Informations de contact */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                ),
                title: "Appelez-nous",
                content: "01 23 45 67 89",
                subtitle: "📞 Réponse immédiate",
                gradient: "from-green-400 to-emerald-400",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                ),
                title: "Écrivez-nous",
                content: "contact@pattespropres.fr",
                subtitle: "📧 Réponse sous 24h",
                gradient: "from-emerald-400 to-teal-400",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                title: "Venez nous voir",
                content: "123 Rue des Toutous\n75001 Paris",
                subtitle: "🗺️ Parking gratuit",
                gradient: "from-teal-400 to-cyan-400",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                title: "Nos horaires",
                content: "🌅 Lun-Ven: 9h-18h\n🌞 Sam: 9h-17h\n😴 Dim: Fermé",
                subtitle: "",
                gradient: "from-cyan-400 to-blue-400",
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="rounded-2xl border-2 border-green-100 bg-white hover:shadow-xl transition-all text-center p-6 md:p-8"
              >
                <div
                  className={`mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br ${contact.gradient} flex items-center justify-center shadow-lg`}
                >
                  {contact.icon}
                </div>
                <h3 className="text-lg font-semibold text-green-900 mb-3">{contact.title}</h3>
                <p className="text-green-700 font-semibold mb-2 whitespace-pre-line">{contact.content}</p>
                {contact.subtitle && <p className="text-sm text-green-600">{contact.subtitle}</p>}
              </div>
            ))}
          </div>

          {/* Message chaleureux */}
          <div className="text-center mt-16">
            <div className="max-w-3xl mx-auto rounded-2xl border-2 border-green-200 bg-gradient-to-r from-green-100 to-emerald-100 p-8 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-600 mx-auto mb-6"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <p className="text-green-800 italic text-lg leading-relaxed mb-4">
                "Chez Pattes Propres, chaque chien est traité comme un membre de la famille. Nous prenons le temps qu'il
                faut pour que votre compagnon se sente en sécurité et aimé." 💕
              </p>
              <p className="text-green-700 font-semibold">- L'équipe Pattes Propres</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Lazy loaded */}
      <Suspense
        fallback={
          <div className="py-16 bg-gradient-to-b from-emerald-50 to-green-50 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
          </div>
        }
      >
        <MapSection />
      </Suspense>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-800 to-emerald-800 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Mascot variant="happy" size="sm" />
                <div>
                  <span className="text-2xl font-bold">Pattes Propres</span>
                  <p className="text-sm text-green-200">Spa pour toutous</p>
                </div>
              </div>
              <p className="text-green-200 mb-6 leading-relaxed">
                Parce que nos amis à quatre pattes méritent ce qu'il y a de mieux ! 🐾💕
              </p>
              <div className="flex space-x-4">
                {[
                  { href: "https://instagram.com", icon: "instagram" },
                  { href: "https://facebook.com", icon: "facebook" },
                  { href: "https://twitter.com", icon: "twitter" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-700 hover:bg-green-600 rounded-full p-3 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      {social.icon === "instagram" && (
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      )}
                      {social.icon === "facebook" && (
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      )}
                      {social.icon === "twitter" && (
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      )}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-green-100 text-lg">Nos services</h3>
              <ul className="space-y-3 text-green-200">
                <li className="flex items-center">
                  <span className="mr-2">🛁</span> Bain moussant
                </li>
                <li className="flex items-center">
                  <span className="mr-2">💆</span> Massage relaxant
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🌿</span> Soins naturels
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✂️</span> Coupe de griffes
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-green-100 text-lg">Contact</h3>
              <ul className="space-y-3 text-green-200">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  01 23 45 67 89
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    123 Rue des Toutous
                    <br />
                    75001 Paris
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-green-100 text-lg">Horaires</h3>
              <ul className="space-y-3 text-green-200">
                <li className="flex items-center">
                  <span className="mr-2">🌅</span> Lun-Ven: 9h-18h
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🌞</span> Samedi: 9h-17h
                </li>
                <li className="flex items-center">
                  <span className="mr-2">😴</span> Dimanche: Repos
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-700 mt-12 pt-8 text-center text-green-200">
            <p>&copy; 2024 Pattes Propres - Fait avec 🧡 pour nos amis les chiens</p>
          </div>
        </div>
      </footer>
    </div>
  )
}