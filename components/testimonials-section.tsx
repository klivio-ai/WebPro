"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

type Testimonial = {
  id: number
  name: string
  dogName: string
  dogBreed: string
  comment: string
  rating: number
  image: string
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sophie Martin",
      dogName: "Luna",
      dogBreed: "Bichon Maltais",
      comment:
        "Je suis tellement contente d'avoir découvert Pattes Propres ! Luna était très anxieuse lors des toilettages précédents, mais ici elle est détendue et heureuse. L'équipe est patiente et attentionnée. Luna ressort toujours magnifique et sent délicieusement bon !",
      rating: 5,
      image: "/placeholder.svg?key=nhgrl",
    },
    {
      id: 2,
      name: "Thomas Dubois",
      dogName: "Max",
      dogBreed: "Berger Allemand",
      comment:
        "Max est un grand chien qui peut être intimidant, mais l'équipe de Pattes Propres l'a mis à l'aise dès la première visite. Ils prennent le temps nécessaire et ne précipitent jamais le toilettage. Le rapport qualité-prix est excellent et Max adore y aller !",
      rating: 5,
      image: "/placeholder.svg?key=8k8qj",
    },
    {
      id: 3,
      name: "Émilie Petit",
      dogName: "Coco",
      dogBreed: "Caniche",
      comment:
        "Service impeccable ! Coco a un pelage très exigeant et je cherchais un toiletteur capable de réaliser la coupe spécifique que je souhaitais. Non seulement ils ont parfaitement réussi, mais ils m'ont aussi donné d'excellents conseils pour l'entretien entre les séances.",
      rating: 5,
      image: "/placeholder.svg?key=to50y",
    },
    {
      id: 4,
      name: "Laurent Moreau",
      dogName: "Rocky",
      dogBreed: "Jack Russell",
      comment:
        "Rocky est un petit chien très énergique et difficile à toiletter. Pattes Propres est le seul endroit où il reste calme pendant la séance ! L'environnement est apaisant et les produits utilisés sont doux pour sa peau sensible. Je recommande à 100% !",
      rating: 5,
      image: "/placeholder.svg?key=45wt8",
    },
    {
      id: 5,
      name: "Marie Leroy",
      dogName: "Belle",
      dogBreed: "Golden Retriever",
      comment:
        "Belle perd énormément de poils et je n'arrivais pas à gérer son pelage à la maison. Depuis que nous venons chez Pattes Propres une fois par mois, c'est le jour et la nuit ! Son poil est brillant, elle ne perd presque plus et elle adore l'attention qu'elle reçoit pendant les séances.",
      rating: 5,
      image: "/placeholder.svg?key=ldmoc",
    },
  ]

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const goToNext = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  const goToPrevious = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setAutoplay(false)
    setActiveIndex(index)
  }

  return (
    <section id="temoignages" className="py-16 px-4 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-900 mb-4">Ce que disent nos clients</h2>
          <p className="text-orange-700 max-w-2xl mx-auto">
            Des témoignages de propriétaires heureux et de toutous satisfaits 💕
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-orange-200">
                    <div className="flex items-center mb-4">
                      <div className="relative h-20 w-20 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={`${testimonial.name} et ${testimonial.dogName}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-orange-900">{testimonial.name}</h3>
                        <p className="text-orange-700">
                          et {testimonial.dogName} ({testimonial.dogBreed})
                        </p>
                        <div className="flex mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-orange-800 italic">&ldquo;{testimonial.comment}&rdquo;</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md border border-orange-200 text-orange-500 hover:text-orange-700 focus:outline-none"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md border border-orange-200 text-orange-500 hover:text-orange-700 focus:outline-none"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`h-3 w-3 rounded-full focus:outline-none ${
                  activeIndex === index ? "bg-orange-500" : "bg-orange-200"
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-orange-700 font-medium mb-4">Rejoignez nos clients satisfaits !</p>
          <a
            href="#reservation"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg px-6 py-3"
          >
            Réserver un toilettage
          </a>
        </div>
      </div>
    </section>
  )
}
