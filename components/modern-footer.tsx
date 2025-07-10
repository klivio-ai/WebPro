"use client"

import Link from "next/link"
import Mascot from "@/components/mascot"

export default function ModernFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Mascot variant="happy" size="sm" />
                <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  CleanPaws
                </span>
                <p className="text-sm text-gray-300">Spa pour toutous</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Parce que nos amis à quatre pattes méritent ce qu&apos;il y a de mieux ! 🐾💕
            </p>
            <div className="flex space-x-4">
              {[
                { href: "https://instagram.com", icon: "instagram", label: "Instagram" },
                { href: "https://facebook.com", icon: "facebook", label: "Facebook" },
                { href: "https://twitter.com", icon: "twitter", label: "Twitter" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                  aria-label={social.label}
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

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Nos services</h3>
            <ul className="space-y-3 text-gray-300">
              {[
                { icon: "🛁", label: "Bain moussant" },
                { icon: "💆", label: "Massage relaxant" },
                { icon: "🌿", label: "Soins naturels" },
                { icon: "✂️", label: "Coupe de griffes" },
                { icon: "✨", label: "Brushing étoilé" },
              ].map((service, index) => (
                <li key={index} className="flex items-center hover:text-white transition-colors duration-200">
                  <span className="mr-3">{service.icon}</span>
                  {service.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center hover:text-white transition-colors duration-200">
                <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                01 23 45 67 89
              </li>
              <li className="flex items-start hover:text-white transition-colors duration-200">
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
              <li className="flex items-center hover:text-white transition-colors duration-200">
                <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                contact@cleanpaws.fr
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Horaires</h3>
            <ul className="space-y-3 text-gray-300">
              {[
                { icon: "🌅", label: "Lun-Ven: 9h-18h" },
                { icon: "🌞", label: "Samedi: 9h-17h" },
                { icon: "😴", label: "Dimanche: Repos" },
              ].map((horaire, index) => (
                <li key={index} className="flex items-center hover:text-white transition-colors duration-200">
                  <span className="mr-3">{horaire.icon}</span>
                  {horaire.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              &copy; {currentYear} CleanPaws - Fait avec 🧡 pour nos amis les chiens
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/mentions-legales" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                Politique de confidentialité
              </Link>
              <Link href="/cgv" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}