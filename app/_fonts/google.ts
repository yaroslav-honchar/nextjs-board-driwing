import { Poppins, Urbanist } from "next/font/google"

export const fontPrimary = Urbanist({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700", "800", "900"],
})

export const fontSecondary = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700", "800", "900"],
})
