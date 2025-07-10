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

export default function HomePage() {
  return (
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
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-primary rounded-2xl shadow-soft">
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
              </div>
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

      {/* Social Media Section */}
      <section className="py-20 md:py-32 px-4 bg-gradient-to-br from-brand-50 to-purple-50">
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
