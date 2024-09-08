import React from "react"
import { CenteredScreenMessage } from "@/components/ui/centered-screen-message"
import Image from "next/image"

export const EmptyFavorites: React.FC = () => {
  return (
    <CenteredScreenMessage>
      <Image
        className={"object-contain object-center mb-4"}
        src={"/favorites.svg"}
        alt={"No boards"}
        width={200}
        height={200}
        priority={true}
      />
      <h2 className={"text-2xl font-semibold"}>No favorites</h2>
      <p className={"text-center text-muted-foreground"}>No boards found in favorites</p>
    </CenteredScreenMessage>
  )
}
