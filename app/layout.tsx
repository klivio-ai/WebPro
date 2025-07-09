import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CleanPaws - Service Professionnel de Nettoyage Canin | Réservation en Ligne",
  description:
    "Service professionnel de nettoyage pour chiens. Réservez votre créneau en ligne, tarifs transparents, produits naturels. Votre chien mérite le meilleur soin.",
  keywords: "nettoyage chien, toilettage canin, bain chien, réservation en ligne, soins chien, Paris",
  authors: [{ name: "CleanPaws" }],
  openGraph: {
    title: "CleanPaws - Service Professionnel de Nettoyage Canin",
    description:
      "Réservez en ligne votre créneau de nettoyage pour chien. Service professionnel avec produits naturels.",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
