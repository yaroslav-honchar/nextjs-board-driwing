import React from "react"
import { fontSecondary } from "@/app/_fonts/google"
import { cn } from "@/lib/utils"
import { ClientRoutes } from "@/routes/client.route"
import Image from "next/image"
import Link from "next/link"
import type { ILogoProps } from "./logo.props"

export const Logo: React.FC<ILogoProps> = ({ className, imageProps, ...rest }) => {
  console.log(imageProps)
  const imagePropsDefault = {
    src: "/icon.svg",
    alt: "logo",
    width: 60,
    height: 20,
    ...imageProps,
  }

  return (
    <Link
      className={cn(
        fontSecondary.className,
        "font-semibold text-2xl flex items-center gap-x-2 hover:bg-blue-50 transition-colors rounded-md px-2 py-1",
        className,
      )}
      href={ClientRoutes.home}
      aria-label={"Go to home"}
      {...rest}
    >
      <Image {...imagePropsDefault} />
      <span>Board</span>
    </Link>
  )
}
