import { Instagram, Facebook, Twitter, Youtube } from "lucide-react"
import Image from "next/image"

export default function SocialMediaSection() {
  // Simulated Instagram feed
  const instagramPosts = [
    {
      id: 1,
      image: "/placeholder.svg?key=piqp8",
      likes: 124,
      caption: "Journée mousse et bulles pour ce petit loulou ! 🛁✨ #PattesPropresSpa #ToilettageDoux",
    },
    {
      id: 2,
      image: "/placeholder.svg?key=3p63w",
      likes: 98,
      caption: "Séance séchage en douceur pour ce magnifique Golden ! 🐕💨 #ChienHeureux #SoinsDoux",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=300&width=300",
      likes: 156,
      caption: "Nouvelle coupe pour ce petit Yorkshire ! Avant/Après impressionnant 💇‍♂️ #TransformationCanine",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=300&width=300",
      likes: 203,
      caption: "Moment détente avec notre massage spécial pattes douces 🐾 #MassageCanin #Relaxation",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=300&width=300",
      likes: 187,
      caption: "Premier toilettage pour ce petit chiot ! Il a été très courageux 🥰 #BébéChien #PremièreFois",
    },
    {
      id: 6,
      image: "/placeholder.svg?height=300&width=300",
      likes: 142,
      caption: "Prête pour les fêtes avec son joli nœud ! 🎀 #ChicChien #Élégance",
    },
  ]

  return (
    <section id="social-media" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-900 mb-4">Suivez nos aventures canines</h2>
          <p className="text-orange-700 max-w-2xl mx-auto">
            Rejoignez notre communauté sur les réseaux sociaux pour des photos adorables, des conseils et des offres
            exclusives ! 📱
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="bg-gradient-to-br from-amber-500 to-pink-500 p-4 rounded-full text-white shadow-lg group-hover:shadow-xl transition-all">
              <Instagram className="h-6 w-6" />
            </div>
            <span className="mt-2 text-orange-800 font-medium">Instagram</span>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-full text-white shadow-lg group-hover:shadow-xl transition-all">
              <Facebook className="h-6 w-6" />
            </div>
            <span className="mt-2 text-orange-800 font-medium">Facebook</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-full text-white shadow-lg group-hover:shadow-xl transition-all">
              <Twitter className="h-6 w-6" />
            </div>
            <span className="mt-2 text-orange-800 font-medium">Twitter</span>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="bg-gradient-to-br from-red-500 to-red-700 p-4 rounded-full text-white shadow-lg group-hover:shadow-xl transition-all">
              <Youtube className="h-6 w-6" />
            </div>
            <span className="mt-2 text-orange-800 font-medium">YouTube</span>
          </a>
        </div>

        {/* Instagram Feed */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-orange-900 mb-6 text-center flex items-center justify-center">
            <Instagram className="h-5 w-5 mr-2" />
            Nos derniers posts Instagram
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="aspect-square relative">
                  <Image src={post.image || "/placeholder.svg"} alt={post.caption} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                    <div className="flex items-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                      {post.likes}
                    </div>
                    <p className="text-white text-xs mt-1 line-clamp-2">{post.caption}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg p-6 border-2 border-orange-200 shadow-md">
          <h3 className="text-xl font-semibold text-orange-900 mb-2 text-center">Restez informé !</h3>
          <p className="text-orange-700 mb-4 text-center">
            Inscrivez-vous à notre newsletter pour recevoir des conseils d&apos;entretien, des offres spéciales et des
            nouvelles de notre salon.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-grow px-4 py-2 rounded-md border-2 border-orange-200 focus:border-orange-400 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-2 rounded-md shadow-md"
            >
              S&apos;inscrire
            </button>
          </form>
          <p className="text-xs text-orange-600 mt-2 text-center">
            Nous respectons votre vie privée et ne partagerons jamais vos informations. 🔒
          </p>
        </div>
      </div>
    </section>
  )
}
