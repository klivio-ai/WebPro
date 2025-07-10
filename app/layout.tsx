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
  title: "Pattes Propres - Spa & Toilettage Canin Professionnel | Paris",
  description:
    "Spa et toilettage canin professionnel à Paris. Bain moussant, massage relaxant, soins naturels. Réservez en ligne votre créneau. Votre chien mérite le meilleur soin avec nos produits bio.",
  keywords: "spa chien, toilettage canin, bain chien, massage chien, soins naturels chien, Paris, réservation en ligne, produits bio chien, coupe griffes chien",
  authors: [{ name: "Pattes Propres" }],
  creator: "Pattes Propres",
  publisher: "Pattes Propres",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pattespropres.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Pattes Propres - Spa & Toilettage Canin Professionnel | Paris",
    description:
      "Spa et toilettage canin professionnel à Paris. Bain moussant, massage relaxant, soins naturels. Réservez en ligne votre créneau.",
    url: 'https://pattespropres.fr',
    siteName: 'Pattes Propres',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pattes Propres - Spa pour toutous',
      },
    ],
    locale: "fr_FR",
<<<<<<< HEAD
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pattes Propres - Spa & Toilettage Canin Professionnel',
    description: 'Spa et toilettage canin professionnel à Paris. Bain moussant, massage relaxant, soins naturels.',
    images: ['/og-image.jpg'],
=======
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
>>>>>>> cursor/revising-the-graphic-charter-of-the-site-6c78
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
<<<<<<< HEAD
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Pet Services',
  classification: 'Business',
  other: {
    'geo.region': 'FR-75',
    'geo.placename': 'Paris',
    'geo.position': '48.8566;2.3522',
    'ICBM': '48.8566, 2.3522',
  },
=======
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
>>>>>>> cursor/revising-the-graphic-charter-of-the-site-6c78
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
