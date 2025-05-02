"use client"

import { cn } from "@/lib/utils"

export const Button = ({ children, className, ...props }: any) => {
  return (
    <button
      className={cn("bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700", className)}
      {...props}
    >
      {children}
    </button>
  )
}
