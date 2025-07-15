import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Preview123 - Générateur d'aperçus de liens moderne",
  description: "Transformez vos liens en aperçus visuels attrayants. Générateur d'aperçus rapide et moderne pour les réseaux sociaux et présentations.",
  keywords: "aperçu de lien, générateur d'aperçu, preview link, réseaux sociaux, partage de liens",
  authors: [{ name: "Preview123 Team" }],
  creator: "Preview123",
  publisher: "Preview123",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://preview123.fyi"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Preview123 - Générateur d'aperçus de liens moderne",
    description: "Transformez vos liens en aperçus visuels attrayants. Générateur d'aperçus rapide et moderne pour les réseaux sociaux et présentations.",
    url: "https://preview123.fyi",
    siteName: "Preview123",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Preview123 - Générateur d'aperçus de liens",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preview123 - Générateur d'aperçus de liens moderne",
    description: "Transformez vos liens en aperçus visuels attrayants. Générateur d'aperçus rapide et moderne pour les réseaux sociaux et présentations.",
    images: ["/og-image.png"],
    creator: "@preview123",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#667eea" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
