import type React from "react"
import { cn } from "@/lib/utils"
import { type ButtonHTMLAttributes, forwardRef } from "react"

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg" | "xl"
  children: React.ReactNode
  className?: string
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

    const variants = {
      primary:
        "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-transparent",
      secondary:
        "bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 text-white shadow-lg hover:shadow-xl",
      outline: "border-2 border-orange-300 text-orange-700 hover:bg-orange-50 hover:border-orange-400",
    }

    const sizes = {
      sm: "rounded-full px-4 py-2 text-sm",
      md: "rounded-full px-6 py-3 text-base",
      lg: "rounded-full px-8 py-4 text-lg",
      xl: "rounded-full px-12 py-5 text-xl font-bold",
    }

    return (
      <button className={cn(baseClasses, variants[variant], sizes[size], className)} ref={ref} {...props}>
        {children}
      </button>
    )
  },
)

CTAButton.displayName = "CTAButton"

export { CTAButton }
