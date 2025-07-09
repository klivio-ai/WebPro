import { MapPin } from "lucide-react"

export default function MapSection() {
  // Coordonnées fictives pour Paris (à remplacer par les coordonnées réelles du salon)
  const latitude = 48.856614
  const longitude = 2.3522219
  const address = "123 Rue des Toutous, 75001 Paris"

  // URL pour Google Maps avec les coordonnées
  const mapSrc = `https://www.google.com/maps/embed/v1/place?q=${latitude},${longitude}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`

  // URL pour obtenir des directions
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-orange-900 mb-2">Où nous trouver</h2>
          <p className="text-orange-700">Venez nous rendre visite ! Parking gratuit disponible 🚗</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Carte */}
          <div className="rounded-lg overflow-hidden shadow-lg border-2 border-orange-200 h-[400px]">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Emplacement du salon Pattes Propres"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Informations d'adresse */}
          <div className="flex flex-col justify-center">
            <div className="bg-white rounded-lg p-6 border-2 border-orange-200 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-900">Pattes Propres</h3>
                  <p className="text-orange-700">Spa pour toutous</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-orange-800 font-medium">{address}</p>
                <p className="text-orange-700">
                  <span className="font-semibold">Horaires :</span>
                  <br />🌅 Lun-Ven: 9h-18h
                  <br />🌞 Sam: 9h-17h
                  <br />😴 Dim: Fermé
                </p>
                <p className="text-orange-700">
                  <span className="font-semibold">Téléphone :</span> 01 23 45 67 89
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-md px-4 py-2"
                >
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
                    className="mr-2"
                  >
                    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Itinéraire
                </a>
                <a
                  href="tel:0123456789"
                  className="inline-flex items-center justify-center rounded-full border-2 border-orange-300 text-orange-700 hover:bg-orange-50 px-4 py-2"
                >
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
                    className="mr-2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Appeler
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-orange-600 bg-orange-100 rounded-full px-4 py-2 inline-block">
            💡 Parking gratuit disponible devant le salon. Accès PMR et animaux de soutien émotionnel bienvenus !
          </p>
        </div>
      </div>
    </section>
  )
}
