import { Check, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PricingSection() {
  const pricingPlans = [
    {
      name: "Petit Loulou",
      description: "Pour nos petits compagnons jusqu'à 15kg",
      price: "25€",
      duration: "30 min",
      emoji: "🐕‍🦺",
      features: [
        "Bain moussant avec shampooing doux",
        "Rinçage à l'eau tiède",
        "Séchage tout en douceur",
        "Nettoyage des petites oreilles",
        "Coupe de griffes avec câlins",
        "Friandise de récompense 🦴",
      ],
      popular: false,
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      name: "Toutou Chéri",
      description: "Pour nos amis de 15kg à 30kg",
      price: "35€",
      duration: "45 min",
      emoji: "🐕",
      features: [
        "Bain moussant avec shampooing premium",
        "Rinçage à l'eau tiède",
        "Séchage professionnel et massage",
        "Nettoyage des oreilles",
        "Coupe de griffes avec câlins",
        "Démêlage doux si nécessaire",
        "Séance de câlins prolongée 💕",
        "Friandise de récompense 🦴",
      ],
      popular: true,
      color: "from-orange-400 to-amber-500",
      bgColor: "from-orange-50 to-amber-50",
    },
    {
      name: "Grand Cœur",
      description: "Pour nos gros nounours de plus de 30kg",
      price: "45€",
      duration: "60 min",
      emoji: "🐕‍🦮",
      features: [
        "Bain moussant avec shampooing premium",
        "Double rinçage à l'eau tiède",
        "Séchage professionnel et massage",
        "Nettoyage approfondi des oreilles",
        "Coupe de griffes avec patience",
        "Démêlage et brossage complet",
        "Soins spéciaux poils longs",
        "Séance de câlins VIP 👑",
        "Friandise de récompense 🦴",
      ],
      popular: false,
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
    },
  ]

  return (
    <section id="tarifs" className="py-16 px-4 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-900 mb-4">Nos forfaits bonheur</h2>
          <p className="text-orange-700 max-w-2xl mx-auto">Des prix tout doux pour des moments tout doux 🥰</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-2 transition-all hover:shadow-xl ${
                plan.popular
                  ? "border-orange-300 shadow-lg scale-105 bg-gradient-to-b from-orange-50 to-amber-50"
                  : `border-orange-100 hover:border-orange-200 bg-gradient-to-b ${plan.bgColor}`
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 text-sm font-medium shadow-lg">
                    ⭐ Le plus choisi
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{plan.emoji}</div>
                <CardTitle className="text-xl text-orange-900">{plan.name}</CardTitle>
                <CardDescription className="text-orange-700">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                    {plan.price}
                  </span>
                  <span className="text-orange-600 ml-2">/ {plan.duration}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div
                        className={`h-5 w-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}
                      >
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm text-orange-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg"
                      : `bg-gradient-to-r ${plan.color} hover:opacity-90 text-white`
                  } rounded-full py-3`}
                  asChild
                >
                  <Link href="#reservation">
                    <Heart className="mr-2 h-4 w-4" />
                    Choisir ce forfait
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-orange-600 bg-orange-100 rounded-full px-4 py-2 inline-block">
            💡 Supplément de 10€ pour les toutous très sales ou très timides (avec plein de patience en plus !)
          </p>
        </div>
      </div>
    </section>
  )
}
