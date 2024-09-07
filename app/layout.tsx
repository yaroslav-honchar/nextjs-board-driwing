import type { Metadata } from "next"
import type { PropsWithChildren } from "react"
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

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={cn(font.className, "antialiased")}>{children}</body>
    </html>
  )
}
