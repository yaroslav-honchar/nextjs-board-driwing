import type { Metadata } from "next"
import React from "react"
import type { IRootLayoutProps } from "@/app/layout.props"
import { cn } from "@/lib/utils"
import { ConvexClientProvider } from "@/providers/convex-client.provider"
import { fontPrimary } from "./_fonts/google"
import "./_styles/main.css"

export const metadata: Metadata = {
  title: "Board driving",
  description: "Board driving",
}

const RootLayout: React.FC<Readonly<IRootLayoutProps>> = ({ children }) => (
  <html lang="en">
    <body className={cn(fontPrimary.className, "antialiased")}>
      <ConvexClientProvider>{children}</ConvexClientProvider>
    </body>
  </html>
)

export default RootLayout
