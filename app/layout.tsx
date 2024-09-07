import type { Metadata } from "next"
import type { PropsWithChildren } from "react"
import React from "react"
import { cn } from "@/lib/utils"
import { Urbanist } from "next/dist/compiled/@next/font/dist/google"
import "./globals.css"

const font = Urbanist({
  weight: ["200", "400", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Board driving",
  description: "Board driving",
}

const RootLayout: React.FC<Readonly<PropsWithChildren>> = ({ children }) => (
  <html lang="en">
    <body className={cn(font.className, "antialiased")}>{children}</body>
  </html>
)
export default RootLayout
