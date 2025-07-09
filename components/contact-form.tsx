"use client"

import type React from "react"

import { useState } from "react"
import Mascot from "@/components/mascot"

type FormData = {
  name: string
  email: string
  phone: string
  dogName: string
  dogSize: string
  service: string
  message: string
  preferredDate: string
  preferredTime: string
}

type FormErrors = {
  [key in keyof FormData]?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    dogName: "",
    dogSize: "",
    service: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when field is edited
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) newErrors.name = "Le nom est requis"
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide"
    }
    if (!formData.phone.trim()) newErrors.phone = "Le téléphone est requis"
    if (!formData.dogName.trim()) newErrors.dogName = "Le nom du chien est requis"
    if (!formData.dogSize) newErrors.dogSize = "Veuillez sélectionner la taille de votre chien"
    if (!formData.service) newErrors.service = "Veuillez sélectionner un service"
    if (!formData.message.trim()) newErrors.message = "Le message est requis"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simuler un appel API
      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitSuccess(true)
        setSubmitMessage(
          `Merci ${formData.name} ! Votre demande a été envoyée avec succès. Nous vous contacterons dans les plus brefs délais pour ${formData.dogName}.`,
        )

        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          dogName: "",
          dogSize: "",
          service: "",
          message: "",
          preferredDate: "",
          preferredTime: "",
        })
      }, 1500)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto rounded-lg border-2 border-orange-200 shadow-xl bg-white">
      <div className="flex flex-col space-y-1.5 p-6 bg-gradient-to-r from-orange-100 to-amber-100">
        <div className="flex items-center justify-center mb-4">
          <Mascot variant="winking" size="md" />
        </div>
        <h3 className="text-2xl font-semibold leading-none tracking-tight text-center text-orange-900">
          Parlons de votre toutou ! 💬
        </h3>
        <p className="text-sm text-orange-700 text-center">
          Remplissez ce formulaire et nous vous répondrons rapidement avec plein d'amour ! 🐾
        </p>
      </div>
      <div className="p-6">
        {submitSuccess && (
          <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4">
            <div className="text-green-800 flex items-center">
              <Mascot variant="happy" size="sm" className="mr-2" />
              {submitMessage}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informations du propriétaire */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-900 flex items-center">
              <span className="mr-2">👤</span> Vos informations
            </h4>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nom complet *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom et prénom"
                  className={`flex h-10 w-full rounded-md border ${
                    errors.name ? "border-red-500" : "border-orange-200 focus:border-orange-400"
                  } bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                />
                {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className={`flex h-10 w-full rounded-md border ${
                    errors.email ? "border-red-500" : "border-orange-200 focus:border-orange-400"
                  } bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                />
                {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Téléphone *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="01 23 45 67 89"
                className={`flex h-10 w-full rounded-md border ${
                  errors.phone ? "border-red-500" : "border-orange-200 focus:border-orange-400"
                } bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
              />
              {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
            </div>
          </div>

          {/* Informations du chien */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-900 flex items-center">
              <span className="mr-2">🐕</span> Informations sur votre loulou
            </h4>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="dogName" className="text-sm font-medium">
                  Nom du chien *
                </label>
                <input
                  id="dogName"
                  name="dogName"
                  type="text"
                  value={formData.dogName}
                  onChange={handleChange}
                  placeholder="Rex, Bella, Max..."
                  className={`flex h-10 w-full rounded-md border ${
                    errors.dogName ? "border-red-500" : "border-orange-200 focus:border-orange-400"
                  } bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                />
                {errors.dogName && <p className="text-sm text-red-600">{errors.dogName}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="dogSize" className="text-sm font-medium">
                  Taille du chien *
                </label>
                <select
                  id="dogSize"
                  name="dogSize"
                  value={formData.dogSize}
                  onChange={handleChange}
                  className={`flex h-10 w-full rounded-md border ${
                    errors.dogSize ? "border-red-500" : "border-orange-200 focus:border-orange-400"
                  } bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                >
                  <option value="">Sélectionnez la taille</option>
                  <option value="small">🐕‍🦺 Petit Loulou (jusqu'à 15kg)</option>
                  <option value="medium">🐕 Toutou Chéri (15kg à 30kg)</option>
                  <option value="large">🐕‍🦮 Grand Cœur (plus de 30kg)</option>
                </select>
                {errors.dogSize && <p className="text-sm text-red-600">{errors.dogSize}</p>}
              </div>
            </div>
          </div>

          {/* Service demandé */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-900 flex items-center">
              <span className="mr-2">✨</span> Service souhaité
            </h4>

            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium">
                Type de service *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`flex h-10 w-full rounded-md border ${
                  errors.service ? "border-red-500" : "border-orange-200 focus:border-orange-400"
                } bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
              >
                <option value="">Choisissez un service</option>
                <option value="bath">🛁 Bain moussant magique</option>
                <option value="full-service">💕 Service complet (bain + câlins + massage)</option>
                <option value="consultation">💬 Consultation / Devis personnalisé</option>
              </select>
              {errors.service && <p className="text-sm text-red-600">{errors.service}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="preferredDate" className="text-sm font-medium flex items-center">
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
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                  Date souhaitée
                </label>
                <input
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="flex h-10 w-full rounded-md border border-orange-200 focus:border-orange-400 bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="preferredTime" className="text-sm font-medium flex items-center">
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
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Heure souhaitée
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-orange-200 focus:border-orange-400 bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Choisir un créneau</option>
                  <option value="09:00">🌅 09:00 - Réveil en douceur</option>
                  <option value="10:30">☀️ 10:30 - Matinée zen</option>
                  <option value="13:00">🌞 13:00 - Après-midi détente</option>
                  <option value="14:30">🌤️ 14:30 - Sieste spa</option>
                  <option value="16:00">🌅 16:00 - Fin d'après-midi</option>
                </select>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Parlez-nous de votre toutou ! Est-il timide ? Joueur ? A-t-il des habitudes particulières ? Plus nous en savons, mieux nous pourrons le chouchouter ! 🥰"
              rows={4}
              className={`flex min-h-[80px] w-full rounded-md border ${
                errors.message ? "border-red-500" : "border-orange-200 focus:border-orange-400"
              } bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
            />
            {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
          </div>

          {/* Bouton de soumission */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg py-3 text-lg"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Envoi en cours...
              </>
            ) : (
              <>
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
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
                Envoyer notre demande avec amour 💕
              </>
            )}
          </button>

          <p className="text-sm text-orange-600 text-center bg-orange-50 rounded-full px-4 py-2">
            * Champs obligatoires. Nous vous répondrons dans les 24h avec plein de conseils pour votre toutou ! 🐾
          </p>
        </form>
      </div>
    </div>
  )
}
