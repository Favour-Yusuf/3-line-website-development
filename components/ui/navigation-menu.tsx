"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export const NavigationMenu = ({ children, className }: any) => (
  <nav className={cn("flex space-x-4", className)}>{children}</nav>
)

export const NavigationMenuList = ({ children }: any) => <ul className="flex space-x-4">{children}</ul>

export const NavigationMenuItem = ({ children }: any) => <li>{children}</li>

export const NavigationMenuTrigger = ({ children }: any) => (
  <button className="text-gray-700 hover:text-blue-600">{children}</button>
)

export const NavigationMenuContent = ({ children }: any) => (
  <div className="absolute mt-2 bg-white shadow-md rounded-md">{children}</div>
)
