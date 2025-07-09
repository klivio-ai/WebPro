"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Check, Calendar, Clock } from "lucide-react"
import { CTAButton } from "@/components/ui/cta-button"
import { Card, CardContent } from "@/components/ui/card"
import Mascot from "@/components/mascot"

type BookingStep = 1 | 2 | 3 | 4

interface BookingData {
  // Étape 1 - Informations personnelles
  name: string
  email: string
  phone: string

  // Étape 2 - Informations du chien
  dogName: string
  dogSize: "small" | "medium" | "large" | ""
  dogBreed: string

  // Étape 3 - Service et date
  service: "small" | "medium" | "large" | ""
  preferredDate: string
  preferredTime: string

  // Étape 4 - Informations complémentaires
  specialNeeds: string
  firstVisit: boolean
}

interface BookingErrors {
  name?: string
  email?: string
  phone?: string
  dogName?: string
  dogSize?: string
  service?: string
  preferredDate?: string
  preferredTime?: string
}

export default function MultiStepBooking() {
  const [currentStep, setCurrentStep] = useState<BookingStep>(1)
  const [bookingData, setBookingData] = useState<BookingData>({
    name: "",
    email: "",
    phone: "",
    dogName: "",
    dogSize: "",
    dogBreed: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    specialNeeds: "",
    firstVisit: false,
  })

  const [errors, setErrors] = useState<BookingErrors>({})

  const availableSlots = {
    "2024-12-13": ["09:00", "10:30", "14:00", "15:30"],
    "2024-12-14": ["09:00", "11:00", "13:30", "16:00"],
    "2024-12-15": ["10:00", "14:30", "16:30"],
    "2024-12-16": ["09:30", "11:30", "15:00"],
    "2024-12-17": ["09:00", "10:30", "13:00", "14:30", "16:00"],
  }

  const services = [
    {
      id: "small",
      name: "Petit Loulou",
      price: "25€",
      duration: "30 min",
      description: "Pour nos petits compagnons jusqu'à 15kg",
      emoji: "🐕‍🦺",
    },
    {
      id: "medium",
      name: "Toutou Chéri",
      price: "35€",
      duration: "45 min",
      description: "Pour nos amis de 15kg à 30kg",
      emoji: "🐕",
    },
    {
      id: "large",
      name: "Grand Cœur",
      price: "45€",
      duration: "60 min",
      description: "Pour nos gros nounours de plus de 30kg",
      emoji: "🐕‍🦮",
    },
  ]

  const updateBookingData = (field: keyof BookingData, value: string | boolean) => {
    setBookingData((prev) => ({ ...prev, [field]: value }))
    // Clear error when field is updated
    if (errors[field as keyof BookingErrors]) {
      setErrors((prev) => ({ ...prev, [field as keyof BookingErrors]: undefined }))
    }
  }

  const validateStep = (step: BookingStep): boolean => {
    const newErrors: BookingErrors = {}

    switch (step) {
      case 1:
        if (!bookingData.name.trim()) newErrors.name = "Le nom est requis"
        if (!bookingData.email.trim()) newErrors.email = "L'email est requis"
        else if (!/^\S+@\S+\.\S+$/.test(bookingData.email)) newErrors.email = "Format d'email invalide"
        if (!bookingData.phone.trim()) newErrors.phone = "Le téléphone est requis"
        break
      case 2:
        if (!bookingData.dogName.trim()) newErrors.dogName = "Le nom du chien est requis"
        if (!bookingData.dogSize) newErrors.dogSize = "La taille du chien est requise"
        break
      case 3:
        if (!bookingData.service) newErrors.service = "Veuillez choisir un service"
        if (!bookingData.preferredDate) newErrors.preferredDate = "Veuillez choisir une date"
        if (!bookingData.preferredTime) newErrors.preferredTime = "Veuillez choisir un horaire"
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4) as BookingStep)
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1) as BookingStep)
  }

  const handleSubmit = () => {
    if (validateStep(3)) {
      // Simulate booking submission
      alert(`🎉 Réservation confirmée pour ${bookingData.dogName} ! Nous vous contacterons bientôt.`)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    })
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Mascot variant="winking" size="md" className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-orange-900 mb-2">Parlons de vous ! 👋</h3>
              <p className="text-orange-700">Quelques informations pour mieux vous connaître</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-orange-900 mb-2">Votre nom complet *</label>
                <input
                  type="text"
                  value={bookingData.name}
                  onChange={(e) => updateBookingData("name", e.target.value)}
                  placeholder="Jean Dupont"
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    errors.name ? "border-red-500" : "border-orange-200 focus:border-orange-400"
                  } focus:outline-none transition-colors`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-orange-900 mb-2">Votre email *</label>
                <input
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => updateBookingData("email", e.target.value)}
                  placeholder="jean.dupont@email.com"
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    errors.email ? "border-red-500" : "border-orange-200 focus:border-orange-400"
                  } focus:outline-none transition-colors`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-orange-900 mb-2">Votre téléphone *</label>
                <input
                  type="tel"
                  value={bookingData.phone}
                  onChange={(e) => updateBookingData("phone", e.target.value)}
                  placeholder="01 23 45 67 89"
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    errors.phone ? "border-red-500" : "border-orange-200 focus:border-orange-400"
                  } focus:outline-none transition-colors`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Mascot variant="happy" size="md" className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-orange-900 mb-2">Parlez-nous de votre toutou ! 🐕</h3>
              <p className="text-orange-700">Ces informations nous aident à mieux le chouchouter</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-orange-900 mb-2">Nom de votre chien *</label>
                <input
                  type="text"
                  value={bookingData.dogName}
                  onChange={(e) => updateBookingData("dogName", e.target.value)}
                  placeholder="Rex, Bella, Max..."
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    errors.dogName ? "border-red-500" : "border-orange-200 focus:border-orange-400"
                  } focus:outline-none transition-colors`}
                />
                {errors.dogName && <p className="text-red-500 text-sm mt-1">{errors.dogName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-orange-900 mb-2">Taille de votre chien *</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { value: "small", label: "🐕‍🦺 Petit (jusqu'à 15kg)" },
                    { value: "medium", label: "🐕 Moyen (15-30kg)" },
                    { value: "large", label: "🐕‍🦮 Grand (plus de 30kg)" },
                  ].map((size) => (
                    <button
                      key={size.value}
                      type="button"
                      onClick={() => updateBookingData("dogSize", size.value)}
                      className={`p-3 rounded-lg border-2 text-left transition-all ${
                        bookingData.dogSize === size.value
                          ? "border-orange-500 bg-orange-50 text-orange-900"
                          : "border-orange-200 hover:border-orange-300 text-orange-700"
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
                {errors.dogSize && <p className="text-red-500 text-sm mt-1">{errors.dogSize}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-orange-900 mb-2">Race (optionnel)</label>
                <input
                  type="text"
                  value={bookingData.dogBreed}
                  onChange={(e) => updateBookingData("dogBreed", e.target.value)}
                  placeholder="Golden Retriever, Labrador..."
                  className="w-full px-4 py-3 rounded-lg border-2 border-orange-200 focus:border-orange-400 focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Mascot variant="bubbles" size="md" className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-orange-900 mb-2">Choisissons le forfait parfait ! ✨</h3>
              <p className="text-orange-700">Service, date et heure pour le bonheur de votre compagnon</p>
            </div>

            <div className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium text-orange-900 mb-3">
                  Quel forfait pour votre toutou ? *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => updateBookingData("service", service.id)}
                      className={`p-4 rounded-lg border-2 text-center transition-all ${
                        bookingData.service === service.id
                          ? "border-orange-500 bg-orange-50"
                          : "border-orange-200 hover:border-orange-300"
                      }`}
                    >
                      <div className="text-2xl mb-2">{service.emoji}</div>
                      <h4 className="font-semibold text-orange-900">{service.name}</h4>
                      <p className="text-sm text-orange-700 mb-2">{service.description}</p>
                      <div className="text-lg font-bold text-orange-600">
                        {service.price} <span className="text-sm font-normal">/ {service.duration}</span>
                      </div>
                    </button>
                  ))}
                </div>
                {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
              </div>

              {/* Date Selection */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-orange-900 mb-3">
                    <Calendar className="inline w-4 h-4 mr-1" />
                    Choisir une date *
                  </label>
                  <div className="space-y-2">
                    {Object.keys(availableSlots).map((date) => (
                      <button
                        key={date}
                        type="button"
                        onClick={() => {
                          updateBookingData("preferredDate", date)
                          updateBookingData("preferredTime", "")
                        }}
                        className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                          bookingData.preferredDate === date
                            ? "border-orange-500 bg-orange-50 text-orange-900"
                            : "border-orange-200 hover:border-orange-300 text-orange-700"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{formatDate(date)}</span>
                          <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                            {availableSlots[date].length} créneaux
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-orange-900 mb-3">
                    <Clock className="inline w-4 h-4 mr-1" />
                    Choisir un horaire *
                  </label>
                  {bookingData.preferredDate ? (
                    <div className="grid grid-cols-2 gap-2">
                      {availableSlots[bookingData.preferredDate].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => updateBookingData("preferredTime", time)}
                          className={`p-3 rounded-lg border-2 transition-all ${
                            bookingData.preferredTime === time
                              ? "border-orange-500 bg-orange-50 text-orange-900"
                              : "border-orange-200 hover:border-orange-300 text-orange-700"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-orange-600">
                      <Clock className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>Sélectionnez d'abord une date</p>
                    </div>
                  )}
                  {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
                </div>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Mascot variant="normal" size="md" className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-orange-900 mb-2">Derniers détails ! 📝</h3>
              <p className="text-orange-700">Informations complémentaires pour chouchouter votre toutou</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-orange-900 mb-2">
                  Besoins spéciaux ou informations importantes
                </label>
                <textarea
                  value={bookingData.specialNeeds}
                  onChange={(e) => updateBookingData("specialNeeds", e.target.value)}
                  placeholder="Mon chien est timide, a peur du bruit, a des allergies, etc..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-orange-200 focus:border-orange-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="firstVisit"
                  checked={bookingData.firstVisit}
                  onChange={(e) => updateBookingData("firstVisit", e.target.checked)}
                  className="w-5 h-5 text-orange-500 border-2 border-orange-300 rounded focus:ring-orange-500"
                />
                <label htmlFor="firstVisit" className="text-orange-900">
                  C'est la première fois que mon chien va chez un toiletteur
                </label>
              </div>
            </div>

            {/* Récapitulatif */}
            <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-4">📋 Récapitulatif de votre réservation</h4>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">Propriétaire :</span> {bookingData.name}
                </p>
                <p>
                  <span className="font-medium">Chien :</span> {bookingData.dogName}{" "}
                  {bookingData.dogBreed && `(${bookingData.dogBreed})`}
                </p>
                <p>
                  <span className="font-medium">Service :</span>{" "}
                  {services.find((s) => s.id === bookingData.service)?.name}
                </p>
                <p>
                  <span className="font-medium">Date :</span>{" "}
                  {bookingData.preferredDate && formatDate(bookingData.preferredDate)}
                </p>
                <p>
                  <span className="font-medium">Heure :</span> {bookingData.preferredTime}
                </p>
                <p>
                  <span className="font-medium">Prix :</span>{" "}
                  {services.find((s) => s.id === bookingData.service)?.price}
                </p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step < currentStep
                    ? "bg-green-500 text-white"
                    : step === currentStep
                      ? "bg-orange-500 text-white"
                      : "bg-orange-200 text-orange-600"
                }`}
              >
                {step < currentStep ? <Check className="w-5 h-5" /> : step}
              </div>
              {step < 4 && (
                <div className={`flex-1 h-2 mx-2 rounded ${step < currentStep ? "bg-green-500" : "bg-orange-200"}`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-orange-600">
          <span>Vos infos</span>
          <span>Votre chien</span>
          <span>Service & Date</span>
          <span>Confirmation</span>
        </div>
      </div>

      {/* Step Content */}
      <Card className="border-2 border-orange-200 shadow-xl">
        <CardContent className="p-8">{renderStepContent()}</CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <CTAButton variant="outline" onClick={prevStep} disabled={currentStep === 1} className="flex items-center">
          <ChevronLeft className="w-4 h-4 mr-2" />
          Précédent
        </CTAButton>

        {currentStep < 4 ? (
          <CTAButton variant="primary" onClick={nextStep} className="flex items-center">
            Suivant
            <ChevronRight className="w-4 h-4 ml-2" />
          </CTAButton>
        ) : (
          <CTAButton variant="primary" size="lg" onClick={handleSubmit} className="flex items-center">
            <Check className="w-5 h-5 mr-2" />
            Confirmer la réservation
          </CTAButton>
        )}
      </div>
    </div>
  )
}
