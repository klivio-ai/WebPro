"use server"

import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  phone: z.string().min(10, "Le numéro de téléphone doit contenir au moins 10 chiffres"),
  dogName: z.string().min(1, "Le nom du chien est requis"),
  dogSize: z.enum(["small", "medium", "large"], {
    errorMap: () => ({ message: "Veuillez sélectionner la taille de votre chien" }),
  }),
  service: z.enum(["bath", "full-service", "consultation"], {
    errorMap: () => ({ message: "Veuillez sélectionner un service" }),
  }),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
})

export type ContactFormState = {
  success?: boolean
  message?: string
  errors?: {
    name?: string[]
    email?: string[]
    phone?: string[]
    dogName?: string[]
    dogSize?: string[]
    service?: string[]
    message?: string[]
    preferredDate?: string[]
    preferredTime?: string[]
  }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Simulation d'un délai de traitement
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    dogName: formData.get("dogName"),
    dogSize: formData.get("dogSize"),
    service: formData.get("service"),
    message: formData.get("message"),
    preferredDate: formData.get("preferredDate"),
    preferredTime: formData.get("preferredTime"),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Veuillez corriger les erreurs ci-dessous",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Ici vous pourriez envoyer l'email, sauvegarder en base de données, etc.
  console.log("Données du formulaire:", validatedFields.data)

  return {
    success: true,
    message: `Merci ${validatedFields.data.name} ! Votre demande a été envoyée avec succès. Nous vous contacterons dans les plus brefs délais pour ${validatedFields.data.dogName}.`,
  }
}
