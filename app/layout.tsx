import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

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
    url: "https://cleanpaws.fr",
    siteName: "CleanPaws",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CleanPaws - Service de nettoyage canin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CleanPaws - Service Professionnel de Nettoyage Canin",
    description: "Réservez en ligne votre créneau de nettoyage pour chien. Service professionnel avec produits naturels.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://cleanpaws.fr",
  },
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
