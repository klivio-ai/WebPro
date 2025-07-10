import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-900 mb-4">Une question ? Parlons-en ! 💬</h2>
          <p className="text-orange-700 max-w-2xl mx-auto">
            Nous adorons parler de nos amis à quatre pattes ! N&apos;hésitez pas à nous contacter 🐾
          </p>
        </div>

        {/* Formulaire de contact */}
        <div className="mb-12">
          <ContactForm />
        </div>

        {/* Informations de contact */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center border-2 border-orange-100 bg-white hover:shadow-lg transition-all">
            <CardHeader>
              <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg text-orange-900">Appelez-nous</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700 font-semibold">01 23 45 67 89</p>
              <p className="text-sm text-orange-600 mt-1">📞 Réponse immédiate</p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 border-orange-100 bg-white hover:shadow-lg transition-all">
            <CardHeader>
              <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg text-orange-900">Écrivez-nous</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700 font-semibold">contact@pattespropres.fr</p>
              <p className="text-sm text-orange-600 mt-1">📧 Réponse sous 24h</p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 border-orange-100 bg-white hover:shadow-lg transition-all">
            <CardHeader>
              <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg text-orange-900">Venez nous voir</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700 font-semibold">
                123 Rue des Toutous
                <br />
                75001 Paris
              </p>
              <p className="text-sm text-orange-600 mt-1">🗺️ Parking gratuit</p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 border-orange-100 bg-white hover:shadow-lg transition-all">
            <CardHeader>
              <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg text-orange-900">Nos horaires</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700 font-semibold">
                🌅 Lun-Ven: 9h-18h
                <br />🌞 Sam: 9h-17h
                <br />😴 Dim: Fermé
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Message chaleureux */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto border-2 border-orange-200 bg-gradient-to-r from-orange-100 to-amber-100">
            <CardContent className="pt-6">
              <Heart className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <p className="text-orange-800 italic">
                &ldquo;Chez Pattes Propres, chaque chien est traité comme un membre de la famille. Nous prenons le temps qu&apos;il
                faut pour que votre compagnon se sente en sécurité et aimé.&rdquo; 💕
              </p>
              <p className="text-orange-700 font-semibold mt-4">- L&apos;équipe Pattes Propres</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
