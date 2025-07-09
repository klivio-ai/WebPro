"use client"

import { useState } from "react"
import { Calendar, Clock, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")

  // Simulation des créneaux disponibles
  const availableSlots: Record<string, string[]> = {
    "2024-12-13": ["09:00", "10:30", "14:00", "15:30"],
    "2024-12-14": ["09:00", "11:00", "13:30", "16:00"],
    "2024-12-15": ["10:00", "14:30", "16:30"],
    "2024-12-16": ["09:30", "11:30", "15:00"],
    "2024-12-17": ["09:00", "10:30", "13:00", "14:30", "16:00"],
  }

  const dates = Object.keys(availableSlots)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    })
  }

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      // Ici vous intégreriez avec Google Calendar API
      alert(
        `🎉 Réservation confirmée ! Votre toutou aura son moment de bonheur le ${formatDate(selectedDate)} à ${selectedTime}. À bientôt ! 🐕💕`,
      )
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Sélection de date */}
        <Card className="border-2 border-orange-100 bg-white shadow-lg">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="flex items-center text-orange-900">
              <Calendar className="mr-2 h-5 w-5" />
              Choisir le jour parfait
            </CardTitle>
            <CardDescription className="text-orange-700">Quel jour pour gâter votre compagnon ? 🗓️</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-3">
              {dates.map((date) => (
                <Button
                  key={date}
                  variant={selectedDate === date ? "default" : "outline"}
                  className={`w-full justify-between h-auto py-3 ${
                    selectedDate === date
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg"
                      : "border-2 border-orange-200 text-orange-700 hover:bg-orange-50"
                  }`}
                  onClick={() => {
                    setSelectedDate(date)
                    setSelectedTime("")
                  }}
                >
                  <span className="font-medium">{formatDate(date)}</span>
                  <Badge
                    variant="secondary"
                    className={`${selectedDate === date ? "bg-white/20 text-white" : "bg-orange-100 text-orange-700"}`}
                  >
                    {availableSlots[date]?.length || 0} créneaux libres
                  </Badge>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sélection d'heure */}
        <Card className="border-2 border-orange-100 bg-white shadow-lg">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="flex items-center text-orange-900">
              <Clock className="mr-2 h-5 w-5" />
              L'heure du bonheur
            </CardTitle>
            <CardDescription className="text-orange-700">
              {selectedDate
                ? `Créneaux disponibles le ${formatDate(selectedDate)} ⏰`
                : "Sélectionnez d'abord une date 📅"}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            {selectedDate ? (
              <div className="grid grid-cols-2 gap-3">
                {availableSlots[selectedDate]?.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    className={`h-12 ${
                      selectedTime === time
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg"
                        : "border-2 border-orange-200 text-orange-700 hover:bg-orange-50"
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🐕</div>
                <p className="text-orange-600">Choisissez d'abord une date pour voir les créneaux disponibles</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Confirmation de réservation */}
      {selectedDate && selectedTime && (
        <Card className="mt-8 border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 shadow-xl">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold text-orange-900 mb-2">Récapitulatif de la réservation</h3>
              <p className="text-orange-700 mb-6 text-lg">
                Rendez-vous le <span className="font-semibold">{formatDate(selectedDate)}</span> à{" "}
                <span className="font-semibold">{selectedTime}</span>
                <br />
                <span className="text-sm">Votre toutou va être aux anges ! 🐕✨</span>
              </p>
              <Button
                size="lg"
                onClick={handleBooking}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg px-8 py-3 rounded-full text-lg"
              >
                <Heart className="mr-2 h-5 w-5" />
                Confirmer ce moment magique
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
