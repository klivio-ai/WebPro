"use client"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  color?: "orange" | "white"
}

export default function LoadingSpinner({ size = "md", color = "orange" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }

  const colorClasses = {
    orange: "border-orange-500",
    white: "border-white",
  }

  return (
    <div className="flex justify-center items-center">
      <div
        className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-t-transparent rounded-full animate-spin`}
      />
    </div>
  )
}