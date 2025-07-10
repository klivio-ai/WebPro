"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Mascot from "@/components/mascot"

export default function ModernHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl animate-pulse-soft" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Badge */}
          <div className="mb-8 animate-slide-down">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white px-6 py-3 text-sm font-semibold shadow-soft">
              🐾 Votre chien mérite le meilleur
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 animate-slide-up">
            Un moment de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              bonheur
            </span>
            <br />
            pour votre compagnon
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Offrez à votre fidèle ami un spa relaxant ! Bain moussant, massage doux et câlins inclus. 
            Votre toutou ressortira tout propre et tout heureux ! 🛁✨
          </p>

          {/* Hero Mascot */}
          <div className="mb-12 flex justify-center animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <Mascot variant="bubbles" size="xl" />
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white px-4 py-2 text-sm font-semibold shadow-soft">
                  Moi c&apos;est Bulle, votre mascotte ! 🫧
                </span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Link href="#reservation" className="btn-primary text-lg px-8 py-4 inline-flex items-center group">
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
                className="mr-3 group-hover:scale-110 transition-transform duration-200"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              Réserver un moment magique
            </Link>
            <Link href="#tarifs" className="btn-secondary text-lg px-8 py-4">
              Découvrir nos forfaits
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.8s" }}>
            {[
              { number: "500+", label: "Chiens chouchoutés" },
              { number: "4.9★", label: "Note moyenne" },
              { number: "24h", label: "Réservation possible" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse-soft" />
        </div>
      </div>
    </section>
  )
}