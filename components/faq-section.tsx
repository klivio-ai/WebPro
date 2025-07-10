"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { TypographyH2, TypographyLead } from "@/components/ui/typography"

type FAQItem = {
  question: string
  answer: string
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqItems: FAQItem[] = [
    {
      question: "Combien de temps dure une séance de toilettage ?",
      answer:
        "La durée dépend de la taille et du type de poil de votre chien. Pour un petit chien, comptez environ 30 minutes, pour un chien moyen 45 minutes, et pour un grand chien jusqu'à 1 heure. Si votre chien est particulièrement nerveux ou a des poils très emmêlés, la séance peut prendre un peu plus de temps, mais nous prenons toujours le temps nécessaire pour que l'expérience soit agréable pour votre compagnon. 🕒",
    },
    {
      question: "Mon chien est craintif, comment se passera le toilettage ?",
      answer:
        "Nous sommes spécialisés dans le toilettage en douceur ! Pour les chiens craintifs, nous prenons le temps de les mettre en confiance avec beaucoup de patience et de câlins. Nous procédons par étapes, en respectant le rythme de votre toutou. N'hésitez pas à nous signaler ses craintes particulières lors de la prise de rendez-vous, nous adapterons notre approche. Vous pouvez même rester présent au début pour le rassurer. 💕",
    },
    {
      question: "Quels produits utilisez-vous pour le toilettage ?",
      answer:
        "Nous utilisons exclusivement des produits naturels et hypoallergéniques, spécialement formulés pour respecter la peau sensible des chiens. Nos shampooings sont sans parabènes, sans sulfates et biodégradables. Nous avons différentes gammes adaptées aux différents types de poils et aux éventuelles sensibilités cutanées. Si votre chien a des besoins particuliers ou des allergies connues, n'hésitez pas à nous en informer. 🌿",
    },
    {
      question: "Faut-il prendre rendez-vous à l'avance ?",
      answer:
        "Oui, nous fonctionnons uniquement sur rendez-vous pour garantir un service personnalisé et éviter les temps d'attente. Nous vous conseillons de réserver au moins une semaine à l'avance, surtout pendant les périodes chargées comme l'été ou les fêtes. Vous pouvez prendre rendez-vous directement sur notre site, par téléphone ou en passant au salon. En cas d'urgence, n'hésitez pas à nous appeler, nous essaierons de vous proposer un créneau rapidement. 📅",
    },
    {
      question: "Est-ce que je peux rester avec mon chien pendant le toilettage ?",
      answer:
        "Pour la plupart des chiens, nous recommandons que les propriétaires ne restent pas pendant toute la séance car cela peut parfois rendre le chien plus anxieux ou distrait. Cependant, pour les chiens très anxieux ou lors d'une première visite, vous pouvez rester quelques minutes au début pour le rassurer. Nous vous tiendrons informé par SMS ou photos pendant la séance si vous le souhaitez. Votre présence est toujours bienvenue pour discuter des soins spécifiques avant et après le toilettage. 🐕",
    },
    {
      question: "Proposez-vous des forfaits pour toilettage régulier ?",
      answer:
        "Absolument ! Nous proposons des cartes de fidélité et des forfaits mensuels ou trimestriels à tarifs avantageux pour les toilettages réguliers. Par exemple, notre carte '10 toilettages' vous offre une réduction de 15% sur le prix total. Nous avons aussi un forfait 'Beauté Annuelle' qui inclut un toilettage complet par mois à un tarif préférentiel. N'hésitez pas à nous demander plus d'informations sur nos offres lors de votre prochaine visite. 💰",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-4 rounded-full">
              <HelpCircle className="w-8 h-8 text-orange-600" />
            </div>
          </div>
          <TypographyH2>Questions fréquentes</TypographyH2>
          <TypographyLead>
            Tout ce que vous avez toujours voulu savoir sur nos services de toilettage canin 🐾
          </TypographyLead>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="mb-4 md:mb-6 border-2 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-all duration-300"
              style={{
                borderColor: openIndex === index ? "#f97316" : "#fed7aa",
              }}
            >
              <button
                className="flex justify-between items-center w-full p-4 md:p-6 text-left focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset min-h-[60px] md:min-h-[80px]"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-orange-900 text-base md:text-lg pr-4 leading-relaxed">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 md:w-7 md:h-7 text-orange-500 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 md:p-6 pt-0 bg-gradient-to-r from-orange-50 to-amber-50 text-orange-700 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-orange-100 rounded-full px-6 py-3 text-orange-600">
            <HelpCircle className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">
              Vous avez d&apos;autres questions ? N&apos;hésitez pas à nous contacter ! 📞
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
