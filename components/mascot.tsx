"use client"

import { useEffect, useState } from "react"

interface MascotProps {
  variant?: "normal" | "happy" | "bubbles" | "winking"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  animated?: boolean
}

export default function Mascot({ variant = "normal", size = "md", className = "", animated = true }: MascotProps) {
  const [blinking, setBlinking] = useState(false)

  // Effet pour le clignotement aléatoire des yeux
  useEffect(() => {
    if (!animated || variant === "happy" || variant === "bubbles") return

    // Fonction pour déclencher un clignotement
    const blink = () => {
      setBlinking(true)
      setTimeout(() => setBlinking(false), 200) // Durée du clignotement
    }

    // Clignotement initial après un délai aléatoire
    const initialTimeout = setTimeout(
      () => {
        blink()
      },
      Math.random() * 2000 + 1000,
    )

    // Clignotements réguliers avec intervalle aléatoire
    const interval = setInterval(
      () => {
        blink()
      },
      Math.random() * 4000 + 2000,
    ) // Entre 2 et 6 secondes

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [animated, variant])

  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-48 h-48",
  }

  const renderMascot = () => {
    switch (variant) {
      case "happy":
        return (
          <svg viewBox="0 0 200 200" className={`${sizeClasses[size]} ${className}`}>
            {/* Corps du chien */}
            <ellipse cx="100" cy="140" rx="45" ry="35" fill="url(#bodyGradient)" />

            {/* Tête */}
            <circle cx="100" cy="80" r="50" fill="url(#headGradient)" />

            {/* Oreilles */}
            <ellipse
              cx="75"
              cy="50"
              rx="15"
              ry="25"
              fill="#D97706"
              transform="rotate(-30 75 50)"
              className={animated ? "animate-ear-left" : ""}
            />
            <ellipse
              cx="125"
              cy="50"
              rx="15"
              ry="25"
              fill="#D97706"
              transform="rotate(30 125 50)"
              className={animated ? "animate-ear-right" : ""}
            />

            {/* Yeux heureux */}
            <path d="M 85 70 Q 90 75 95 70" stroke="#1F2937" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 105 70 Q 110 75 115 70" stroke="#1F2937" strokeWidth="3" fill="none" strokeLinecap="round" />

            {/* Truffe */}
            <ellipse cx="100" cy="85" rx="6" ry="4" fill="#1F2937" />

            {/* Bouche souriante */}
            <path d="M 100 90 Q 90 100 80 95" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M 100 90 Q 110 100 120 95" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />
            <ellipse cx="100" cy="95" rx="8" ry="6" fill="#FF6B9D" />

            {/* Pattes */}
            <ellipse cx="75" cy="170" rx="8" ry="12" fill="#D97706" />
            <ellipse cx="95" cy="170" rx="8" ry="12" fill="#D97706" />
            <ellipse cx="105" cy="170" rx="8" ry="12" fill="#D97706" />
            <ellipse cx="125" cy="170" rx="8" ry="12" fill="#D97706" />

            {/* Queue qui remue */}
            <path
              d="M 145 130 Q 160 120 155 100 Q 150 80 165 75"
              stroke="#D97706"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              className={animated ? "animate-tail-wag" : ""}
            />

            {/* Dégradés */}
            <defs>
              <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FED7AA" />
                <stop offset="100%" stopColor="#FB923C" />
              </linearGradient>
              <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FED7AA" />
                <stop offset="100%" stopColor="#F97316" />
              </linearGradient>
            </defs>
          </svg>
        )

      case "bubbles":
        return (
          <svg viewBox="0 0 200 200" className={`${sizeClasses[size]} ${className}`}>
            {/* Bulles de savon */}
            <circle
              cx="50"
              cy="40"
              r="8"
              fill="#E0F2FE"
              opacity="0.8"
              className={animated ? "animate-bubble-float-1" : ""}
            />
            <circle
              cx="160"
              cy="30"
              r="6"
              fill="#E0F2FE"
              opacity="0.6"
              className={animated ? "animate-bubble-float-2" : ""}
            />
            <circle
              cx="170"
              cy="60"
              r="4"
              fill="#E0F2FE"
              opacity="0.9"
              className={animated ? "animate-bubble-float-3" : ""}
            />
            <circle
              cx="30"
              cy="70"
              r="5"
              fill="#E0F2FE"
              opacity="0.7"
              className={animated ? "animate-bubble-float-1" : ""}
            />
            <circle
              cx="180"
              cy="100"
              r="7"
              fill="#E0F2FE"
              opacity="0.5"
              className={animated ? "animate-bubble-float-2" : ""}
            />

            {/* Corps du chien */}
            <ellipse
              cx="100"
              cy="140"
              rx="45"
              ry="35"
              fill="url(#bodyGradient)"
              className={animated ? "animate-body-breathe" : ""}
            />

            {/* Tête */}
            <circle cx="100" cy="80" r="50" fill="url(#headGradient)" />

            {/* Oreilles */}
            <ellipse
              cx="75"
              cy="50"
              rx="15"
              ry="25"
              fill="#D97706"
              transform="rotate(-30 75 50)"
              className={animated ? "animate-ear-left" : ""}
            />
            <ellipse
              cx="125"
              cy="50"
              rx="15"
              ry="25"
              fill="#D97706"
              transform="rotate(30 125 50)"
              className={animated ? "animate-ear-right" : ""}
            />

            {/* Yeux fermés de bonheur */}
            <path d="M 85 70 Q 90 65 95 70" stroke="#1F2937" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 105 70 Q 110 65 115 70" stroke="#1F2937" strokeWidth="3" fill="none" strokeLinecap="round" />

            {/* Truffe */}
            <ellipse cx="100" cy="85" rx="6" ry="4" fill="#1F2937" />

            {/* Bouche détendue */}
            <path d="M 100 90 Q 90 95 85 90" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M 100 90 Q 110 95 115 90" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Pattes */}
            <ellipse cx="75" cy="170" rx="8" ry="12" fill="#D97706" />
            <ellipse cx="95" cy="170" rx="8" ry="12" fill="#D97706" />
            <ellipse cx="105" cy="170" rx="8" ry="12" fill="#D97706" />
            <ellipse cx="125" cy="170" rx="8" ry="12" fill="#D97706" />

            {/* Queue détendue */}
            <ellipse
              cx="145"
              cy="125"
              rx="6"
              ry="20"
              fill="#D97706"
              transform="rotate(45 145 125)"
              className={animated ? "animate-tail-slow" : ""}
            />

            {/* Plus de bulles */}
            <circle
              cx="40"
              cy="120"
              r="3"
              fill="#E0F2FE"
              opacity="0.8"
              className={animated ? "animate-bubble-float-3" : ""}
            />
            <circle
              cx="160"
              cy="140"
              r="4"
              fill="#E0F2FE"
              opacity="0.6"
              className={animated ? "animate-bubble-float-1" : ""}
            />
            <circle
              cx="20"
              cy="160"
              r="2"
              fill="#E0F2FE"
              opacity="0.9"
              className={animated ? "animate-bubble-float-2" : ""}
            />

            {/* Dégradés */}
            <defs>
              <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FED7AA" />
                <stop offset="100%" stopColor="#FB923C" />
              </linearGradient>
              <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FED7AA" />
                <stop offset="100%" stopColor="#F97316" />
              </linearGradient>
            </defs>
          </svg>
        )

      case "winking":
        return (
          <svg viewBox="0 0 200 200" className={`${sizeClasses[size]} ${className}`}>
            {/* Corps du chien */}
            <ellipse
              cx="100"
              cy="140"
              rx="45"
              ry="35"
              fill="url(#bodyGradient)"
              className={animated ? "animate-body-breathe" : ""}
            />

            {/* Tête */}
            <circle cx="100" cy="80" r="50" fill="url(#headGradient)" />

            {/* Oreilles */}
            <ellipse
              cx="75"
              cy="50"
              rx="15"
              ry="25"
              fill="#D97706"
              transform="rotate(-30 75 50)"
              className={animated ? "animate-ear-left" : ""}
            />
            <ellipse
              cx="125"
              cy="50"
              rx="15"
              ry="25"
              fill="#D97706"
              transform="rotate(30 125 50)"
              className={animated ? "animate-ear-right" : ""}
            />

            {/* Œil normal */}
            <circle cx="85" cy="70" r="8" fill="white" />
            <circle cx="85" cy="70" r="5" fill="#1F2937" className={blinking ? "animate-eye-blink" : ""} />
            <circle cx="87" cy="68" r="2" fill="white" />

            {/* Œil qui cligne */}
            <path d="M 105 70 Q 110 65 115 70" stroke="#1F2937" strokeWidth="3" fill="none" strokeLinecap="round" />

            {/* Truffe */}
            <ellipse cx="100" cy="85" rx="6" ry="4" fill="#1F2937" />

            {/* Bouche malicieuse */}
            <path d="M 100 90 Q 110 100 120 95" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Pattes */}
            <ellipse cx="75" cy="170" rx="8" ry="12" fill="#D97706" />
            <ellipse cx="95" cy="170" rx="8" ry="12" fill="#D97706" />
            <ellipse cx="105" cy="170" rx="8" ry="12" fill="#D97706" />
            <ellipse cx="125" cy="170" rx="8" ry="12" fill="#D97706" />

            {/* Queue qui remue */}
            <path
              d="M 145 130 Q 155 115 150 100"
              stroke="#D97706"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              className={animated ? "animate-tail-wag-fast" : ""}
            />

            {/* Dégradés */}
            <defs>
              <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FED7AA" />
                <stop offset="100%" stopColor="#FB923C" />
              </linearGradient>
              <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FED7AA" />
                <stop offset="100%" stopColor="#F97316" />
              </linearGradient>
            </defs>
          </svg>
        )

      default: // normal
        return (
          <svg viewBox="0 0 200 200" className={`${sizeClasses[size]} ${className}`}>
            {/* Corps du chien */}
            <ellipse
              cx="100"
              cy="140"
              rx="45"
              ry="35"
              fill="url(#bodyGradient)"
              className={animated ? "animate-body-breathe" : ""}
            />

            {/* Tête */}
            <circle cx="100" cy="80" r="50" fill="url(#headGradient)" />

            {/* Oreilles */}
            <ellipse
              cx="75"
              cy="50"
              rx="15"
              ry="25"
              fill="#D97706"
              transform="rotate(-30 75 50)"
              className={animated ? "animate-ear-left" : ""}
            />
            <ellipse
              cx="125"
              cy="50"
              rx="15"
              ry="25"
              fill="#D97706"
              transform="rotate(30 125 50)"
              className={animated ? "animate-ear-right" : ""}
            />

            {/* Yeux */}
            <circle cx="85" cy="70" r="8" fill="white" />
            <circle cx="115" cy="70" r="8" fill="white" />
            <circle cx="85" cy="70" r="5" fill="#1F2937" className={blinking ? "animate-eye-blink" : ""} />
            <circle cx="115" cy="70" r="5" fill="#1F2937" className={blinking ? "animate-eye-blink" : ""} />
            <circle cx="87" cy="68" r="2" fill="white" />
            <circle cx="117" cy="68" r="2" fill="white" />

            {/* Truffe */}
            <ellipse cx="100" cy="85" rx="6" ry="4" fill="#1F2937" />

            {/* Bouche */}
            <path d="M 100 90 Q 90 95 85 90" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M 100 90 Q 110 95 115 90" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Pattes */}
            <ellipse cx="75" cy="170" rx="8" ry="12" fill="#D97706" />
            <ellipse cx="95" cy="170" rx="8" ry="12" fill="#D97706" />
            <ellipse cx="105" cy="170" rx="8" ry="12" fill="#D97706" />
            <ellipse cx="125" cy="170" rx="8" ry="12" fill="#D97706" />

            {/* Queue */}
            <ellipse
              cx="145"
              cy="125"
              rx="6"
              ry="20"
              fill="#D97706"
              transform="rotate(30 145 125)"
              className={animated ? "animate-tail-slow" : ""}
            />

            {/* Dégradés */}
            <defs>
              <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FED7AA" />
                <stop offset="100%" stopColor="#FB923C" />
              </linearGradient>
              <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FED7AA" />
                <stop offset="100%" stopColor="#F97316" />
              </linearGradient>
            </defs>
          </svg>
        )
    }
  }

  return renderMascot()
}
