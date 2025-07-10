import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "rounded-2xl transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-white shadow-soft hover:shadow-medium hover:scale-[1.02] border border-gray-100/50 backdrop-blur-sm",
        glass: "bg-white/80 backdrop-blur-md shadow-soft border border-white/20",
        elevated: "bg-white shadow-large hover:shadow-glow hover:scale-[1.02] border border-gray-100/50",
        outline: "border-2 border-gray-200 bg-white hover:border-gray-300 hover:shadow-soft",
      },
      padding: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  }
)

export interface ModernCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean
}

const ModernCard = React.forwardRef<HTMLDivElement, ModernCardProps>(
  ({ className, variant, padding, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "div"
    return (
      <Comp
        className={cn(cardVariants({ variant, padding, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
ModernCard.displayName = "ModernCard"

export { ModernCard, cardVariants }