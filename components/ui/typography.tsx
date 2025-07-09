import type React from "react"
import { cn } from "@/lib/utils"

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-5xl md:text-7xl font-extrabold tracking-tight lg:text-8xl bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent leading-tight",
        className,
      )}
    >
      {children}
    </h1>
  )
}

export function TypographyH2({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-4xl md:text-5xl font-bold tracking-tight text-orange-900 mb-6 leading-tight",
        className,
      )}
    >
      {children}
    </h2>
  )
}

export function TypographyH3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn("scroll-m-20 text-2xl md:text-3xl font-semibold tracking-tight text-orange-900 mb-4", className)}>
      {children}
    </h3>
  )
}

export function TypographyLead({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-xl md:text-2xl text-orange-700 leading-relaxed max-w-3xl mx-auto mb-8", className)}>
      {children}
    </p>
  )
}
