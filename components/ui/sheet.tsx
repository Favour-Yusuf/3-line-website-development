"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export const Sheet = ({ children }: any) => <div>{children}</div>

export const SheetTrigger = ({ children, onClick }: any) => (
  <button onClick={onClick}>{children}</button>
)

export const SheetContent = ({ children, isOpen }: any) =>
  isOpen ? (
    <div className="fixed inset-0 z-50 bg-white p-6 shadow-lg">{children}</div>
  ) : null
