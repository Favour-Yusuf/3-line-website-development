"use client"

import { useState } from "react"

export const Collapsible = ({ children }: any) => {
  return <div>{children}</div>
}

export const CollapsibleTrigger = ({ children, onClick }: any) => (
  <button onClick={onClick} className="w-full text-left py-2 font-semibold text-gray-700">
    {children}
  </button>
)

export const CollapsibleContent = ({ children, isOpen }: any) => (
  <div className={`${isOpen ? "block" : "hidden"} pl-4 py-1`}>{children}</div>
)
