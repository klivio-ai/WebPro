"use client"

import { TypographyH2, TypographyLead } from "@/components/ui/typography"
import Mascot from "@/components/mascot"

export default function SocialProofSection() {
  const testimonials = [
    {
      name: "Marie L.",
      dog: "Luna (Golden Retriever)",
      rating: 5,
      text: "Luna adore ses séances chez Pattes Propres ! Elle ressort toujours détendue et sent tellement bon. L'équipe est adorable avec elle.",
      avatar: "ML",
      verified: true,
    },
    {
      name: "Thomas D.",
      dog: "Max (Berger Allemand)",
      rating: 5,
      text: "Max était très stressé au début, mais l'équipe a été patiente et douce. Maintenant il ne peut plus attendre d'y retourner !",
      avatar: "TD",
      verified: true,
    },
    {
      name: "Sophie M.",
      dog: "Bella (Cavalier King Charles)",
      rating: 5,
      text: "Bella a les poils très fragiles, mais les produits naturels de Pattes Propres sont parfaits. Son pelage n'a jamais été aussi beau !",
      avatar: "SM",
      verified: true,
    },
  ]

  const stats = [
    { number: "500+", label: "Chiens chouchoutés" },
    { number: "4.9/5", label: "Note moyenne" },
    { number: "98%", label: "Clients satisfaits" },
    { number: "2min", label: "Réservation moyenne" },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Mascot variant="happy" size="lg" />
          </div>
          <TypographyH2>Ils nous font confiance</TypographyH2>
          <TypographyLead>Découvrez pourquoi nos clients nous adorent ! 🐕💕</TypographyLead>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-orange-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Témoignages */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border-2 border-orange-100 bg-gradient-to-b from-white to-orange-50 p-8 hover:shadow-xl transition-all"
            >
              {/* Note */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                {testimonial.verified && (
                  <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    ✓ Vérifié
                  </span>
                )}
              </div>

              {/* Témoignage */}
              <blockquote className="text-orange-800 italic mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Auteur */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-orange-900">{testimonial.name}</div>
                  <div className="text-sm text-orange-600">{testimonial.dog}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Badges de confiance */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-orange-600">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏆</span>
              <span className="font-medium">Certifié Bio</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🔒</span>
              <span className="font-medium">Paiement Sécurisé</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">⭐</span>
              <span className="font-medium">Google 4.9/5</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">💚</span>
              <span className="font-medium">Produits Naturels</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}